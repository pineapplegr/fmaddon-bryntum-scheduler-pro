import { SchedulerPro, EventModel, StringHelper, DateHelper,} from '../build/schedulerpro.module.js';

// Added FMData imports
import { fetchProjectData, updateProjectData } from '@pineapplegr/fm-bryntum-driver';

// Import FM Props
import getFmProps from '/fm/propsHandler.js';

class Task extends EventModel {
    static fields = [
        { name: 'durationUnit', defaultValue: 'h' },
        { name: 'plannedStartDate', type: 'date' },
        { name: 'plannedEndDate', type: 'date' },
        { name: 'actualStartDate', type: 'date' },
        { name: 'actualEndDate', type: 'date' },

        { name: 'startDate', dataSource: 'actualStartDate' },
        { name: 'endDate', dataSource: 'actualEndDate' },
    ];
}

class MyScheduler extends SchedulerPro {
    static type = 'actualplannedschedule';

    get resourceTimeRangeColor() {
        return this.widgetMap.plannedToggle.checked
            ? this.actualColorCls
            : this.plannedColorCls;
    }

    get eventColor() {
        return this.widgetMap.plannedToggle.checked
            ? this.plannedColor
            : this.actualColor;
    }

    set eventColor(value) {
        super.eventColor = value;
    }

    static configurable = {
        plannedColorCls: 'planned-color',
        actualColorCls: 'actual-color',
        plannedColor: 'gray',
        actualColor: 'blue',
        showPlanned: false,
        features: {
            taskEdit: {
                items: {
                    generalTab: {
                        items: {
                            durationField: false,
                            effortField: false,
                            percentDoneField: false,
                            newStartField: {
                                type: 'dateTimefield',
                                weight: 410,
                                label: 'Planned start',
                                name: 'plannedStartDate',
                                timeField: {
                                    step: '1 hours',
                                },
                                listeners: {
                                    change: 'up.isValidateDate',
                                },
                            },
                            newEndField: {
                                type: 'dateTimefield',
                                weight: 510,
                                label: 'Planned finish',
                                name: 'plannedEndDate',
                                timeField: {
                                    step: '1 hours',
                                },
                                listeners: {
                                    change: 'up.isValidateDate',
                                },
                            },
                        },
                    },
                },
            },
            resourceTimeRanges: false,
            eventTooltip: {
                template({ eventRecord }) {
                    return `
                        <div class="field"><label>Task</label><span>${StringHelper.encodeHtml(
                            eventRecord.name
                        )}</span></div>
                        <div class="field"><label>Assigned to</label><span>${StringHelper.encodeHtml(
                            eventRecord.resource.name
                        )}</span></div>
                        <div class="field"><label>Planned start</label><span>${DateHelper.format(
                            eventRecord.plannedStartDate,
                            'MMM DD HH:mm'
                        )}</span></div>
                        <div class="field"><label>Planned end</label><span>${DateHelper.format(
                            eventRecord.plannedEndDate,
                            'MMM DD HH:mm'
                        )}</span></div>
                        <div class="field"><label>Actual start</label><span>${DateHelper.format(
                            eventRecord.actualStartDate,
                            'MMM DD HH:mm'
                        )}</span></div>
                        <div class="field"><label>Actual end</label><span>${DateHelper.format(
                            eventRecord.actualEndDate,
                            'MMM DD HH:mm'
                        )}</span></div>
                    `;
                },
            },
        },
        rowHeight: 70,
        barMargin: 15,
        resourceImagePath: '_shared/images/users/',
        eventColor: 'blue',
        eventStyle: 'plain',
        viewPreset: 'hourAndDay',
        columns: [
            {
                text: 'Property',
                width: 150,
                field: 'name',
                htmlEncode: false,
                renderer: ({ record }) => ({
                    children: [
                        {
                            tag: 'i',
                            className: record.iconCls,
                        },
                        record.name,
                    ],
                }),
            },
        ],
        listeners: {
            eventMouseEnter({ source, eventRecord, assignmentRecord }) {
                const rId = `rtr_${assignmentRecord.id}`;
                source.resourceTimeRangeStore.removeAll();
                source.resourceTimeRangeStore.add({
                    id: rId,
                    cls: this.resourceTimeRangeColor,
                    resourceId: assignmentRecord.resourceId,
                    startDate: source.showPlanned
                        ? eventRecord.actualStartDate
                        : eventRecord.plannedStartDate,
                    endDate: source.showPlanned
                        ? eventRecord.actualEndDate
                        : eventRecord.plannedEndDate,
                    name: eventRecord.name,
                });
                source.resourceTimeRangeStore.first.cls += ' shown';
            },
            eventMouseLeave({ source }) {
                if (source.resourceTimeRangeStore.first) {
                    source.resourceTimeRangeStore.first.cls =
                        this.resourceTimeRangeColor;
                }
            },
            beforeTaskEdit({ source, taskEdit }) {
                const {
                    startDateField,
                    endDateField,
                    newStartField,
                    newEndField,
                } = taskEdit.editor.widgetMap;
                startDateField.label = source.showPlanned
                    ? 'Planned start'
                    : 'Actual start';
                endDateField.label = source.showPlanned
                    ? 'Planned finish'
                    : 'Actual finish';
                newStartField.label = source.showPlanned
                    ? 'Actual start'
                    : 'Planned start';
                newStartField.name = source.showPlanned
                    ? 'actualStartDate'
                    : 'plannedStartDate';
                newEndField.label = source.showPlanned
                    ? 'Actual finish'
                    : 'Planned finish';
                newEndField.name = source.showPlanned
                    ? 'actualEndDate'
                    : 'plannedEndDate';
            },
        },
        tbar: [
            {
                type: 'slidetoggle',
                ref: 'plannedToggle',
                text: 'View Planned dates',
                onChange: 'up.onToggleDates',
            },
        ],
    };

    updateShowPlanned(value) {
        const me = this,
            { eventStore } = me,
            { modelClass } = this.eventStore;
        if (value) {
            modelClass.fieldMap.startDate.dataSource = 'plannedStartDate';
            modelClass.fieldMap.endDate.dataSource = 'plannedEndDate';
        } else {
            modelClass.fieldMap.startDate.dataSource = 'actualStartDate';
            modelClass.fieldMap.endDate.dataSource = 'actualEndDate';
        }
        me.suspendRefresh();
        me.eventStore.forEach((e) => {
            e.duration = undefined;
        });
        me.resumeRefresh(false);
        me.runWithTransition(() => (eventStore.data = eventStore.toJSON()));
    }

    onToggleDates({ value }) {
        this.showPlanned = value;
    }

    isValidateDate({ source, oldValue }) {
        const { newStartField, newEndField } = this.taskEdit.editor.widgetMap;
        if (
            oldValue &&
            newStartField.value?.getTime() >= newEndField.value?.getTime()
        ) {
            if (source === newStartField) {
                newEndField.value = source.value;
            } else {
                newStartField.value = source.value;
            }
        }
    }
}

async function initializeScheduler() {
    // Get FM Props
    const props = getFmProps();
    const projectData = await fetchProjectData();

    const myScheduler = new MyScheduler({
        appendTo: 'app',
        startDate: '2024-03-11T06:00',
        endDate: '2024-03-11T20:00',
        project: {
            autoLoad: true,
            addConstraintOnDateSet: false,
            eventStore: {
                modelClass: Task,
                useRawData: false,
            },
            // loadUrl: 'data/data.json'
        },
    });

    // Load the project data
    await myScheduler.project.loadInlineData(projectData);
}

document.addEventListener('DOMContentLoaded', initializeScheduler);
