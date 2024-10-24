import { DateHelper, SchedulerPro, StringHelper, EditorTab, Toast, EventModel } from '../build/schedulerpro.module.js';
import { fetchProjectData, updateProjectData, updatePhantomIds } from '@pineapplegr/fm-bryntum-driver'
import getFmProps from '/fm/propsHandler.js';
//region "lib/SchedulerWithSubtasks.js"

// Ensure that the Tooltip shows nested events them in temporal order
const byStartDate = (leftSubEvent, rightSubEvent) => leftSubEvent.startDate - rightSubEvent.startDate;

// SchedulerPro subclass using nested events
class SchedulerWithSubtasks extends SchedulerPro {
    static $name  = 'SchedulerWithSubtasks';

    static type =  'schedulerwithsubtasks';

    static configurable = {
        features : {
            taskEdit : {
                editorConfig : {
                    width : '50em'
                },
                items : {
                    subTaskTab : {
                        type   : 'subtasktab',
                        weight : 110
                    }
                }
            },

            eventTooltip : {
                // Custom tooltip template, to display info on nested events when hovering a parent
                template : data => `
                    ${data.eventRecord.name ? `<div class="b-sch-event-title">${StringHelper.encodeHtml(data.eventRecord.name)}</div>` : ''}
                    ${data.startClockHtml}
                    ${data.endClockHtml}
                    ${data.eventRecord.children ? '</br>' + data.eventRecord.children.slice().sort(byStartDate).map(r => `
                    <h4 class="b-tooltip-subevent-title">${StringHelper.encodeHtml(r.name)}</h4>
                    ${DateHelper.format(r.startDate, 'LT')} - ${DateHelper.format(r.endDate, 'LT')}
                `).join('') : ''}
                `
            },

            nestedEvents : {
                // Don't allow dragging nested events out of their parents
                constrainDragToParent : true
            },

            dependencies : false
        },

        // Disable initial animations, for less flickering when recreating the scheduler when toggling between modes
        useInitialAnimation : false,

        listeners : {
            // Only use the Subtask tab for parent events
            beforeTaskEditShow({ taskRecord, editor }) {
                editor.widgetMap.subTaskTab.disabled = !taskRecord.isParent;
            }
        }
    };
}

// Register this widget type with its Factory
SchedulerWithSubtasks.initClass();

//endregion
//region "lib/SubtaskTab.js"

/**
 * Extra Tab for TaskEditor to manage subtasks
 *
 * @extends SchedulerPro/widget/taskeditor/EditorTab
 */
class SubtaskTab extends EditorTab {

    static $name = 'SubtaskTab';

    static type = 'subtasktab';

    static get defaultConfig() {
        return {
            title            : 'Subtasks',
            cls              : 'b-tab-subtasks',
            autoUpdateRecord : false,
            layoutStyle      : {
                flexFlow : 'column nowrap'
            },
            items : {
                subEvents : {
                    type  : 'grid',
                    name  : 'subEvents',
                    flex  : '1 1 auto',
                    width : '100%',
                    store : {
                        sorters    : [{ field : 'startDate', ascending : true }],
                        modelClass : EventModel
                    },
                    columns : [
                        { field : 'name', text : 'Name', flex : 1 },
                        {
                            field  : 'startDate',
                            text   : 'Start date',
                            flex   : 1,
                            type   : 'date',
                            format : 'YYYY-MM-DD hh:mm A',
                            editor : {
                                type      : 'datetimefield',
                                timeField : {
                                    stepTriggers : false
                                },
                                dateField : {
                                    stepTriggers : false
                                }
                            }
                        },
                        {
                            field  : 'endDate',
                            text   : 'End date',
                            flex   : 1,
                            type   : 'date',
                            format : 'YYYY-MM-DD hh:mm A',
                            editor : {
                                type      : 'datetimefield',
                                timeField : {
                                    stepTriggers : false
                                },
                                dateField : {
                                    stepTriggers : false
                                }
                            }
                        }
                    ]
                },
                toolbar : {
                    type       : 'toolbar',
                    flex       : '0 0 auto',
                    cls        : 'b-compact-bbar',
                    namedItems : {
                        add : {
                            type    : 'button',
                            cls     : 'b-add-button b-green',
                            icon    : 'b-icon b-icon-add',
                            tooltip : 'Add new subtask',
                            onClick : 'up.onAddClick'
                        },
                        remove : {
                            type    : 'button',
                            cls     : 'b-remove-button b-red',
                            icon    : 'b-icon b-icon-trash',
                            tooltip : 'Delete selected subtask',
                            onClick : 'up.onDeleteClick'
                        }
                    },
                    items : {
                        add    : true,
                        remove : true
                    }
                }
            }
        };
    }

    construct() {
        super.construct(...arguments);

        this.grid = this.widgetMap.subEvents;

        this.grid.store.on({
            change  : 'onStoreChange',
            thisObj : this
        });
    }

    // go through all sub events and try to find the first available space that may be used to add a new sub event
    findEarliestUnallocatedTimeSlot(parentEvent) {
        const
            subEvents               = parentEvent.children.slice(),
            { endDate : parentEnd } = parentEvent;

        let { startDate } = parentEvent,
            // use 1 hour duration by default
            endDate       = DateHelper.add(startDate, 1, 'hour');

        // subEvents should be sorted by startDate to make sure we will not skip any free space
        subEvents.sort((r1, r2) => r1.startDate - r2.startDate);

        for (const nestedEvent of subEvents) {
            const
                nestedStartDate = nestedEvent.startDate,
                nestedEndDate   = nestedEvent.endDate;

            // if intercepting with startDate, use endDate of nested event
            if (nestedStartDate.getTime() === startDate.getTime() ||
                nestedStartDate < startDate &&
                nestedEndDate > startDate
            ) {
                startDate = nestedEndDate;
                endDate   = DateHelper.add(startDate, 1, 'hour');
            }
            else if (nestedStartDate < endDate) {
                endDate = nestedStartDate;
            }
            else if (parentEnd < endDate) {
                endDate = parentEnd;
            }
            if (startDate >= parentEnd) {
                startDate = endDate = parentEnd;
            }
            else if (endDate >= parentEnd) {
                endDate = parentEnd;
            }
        }

        // no free space found
        if (startDate.getTime() === endDate.getTime()) {
            return null;
        }

        return { startDate, endDate };
    }

    // Make changes in the grid reflect on the parent event being edited.
    // Editing fields reflect automatically since child events are edited directly, but add / remove must be handled.
    onStoreChange({ action, records }) {
        const { record } = this;

        if (action === 'remove') {
            record.removeChild(records);
        }
        else if (action === 'add') {
            record.appendChild(records);
        }
    }

    onAddClick() {
        const timeSlot = this.findEarliestUnallocatedTimeSlot(this.record);

        if (!timeSlot) {
            Toast.show('No unallocated time slot could be found in the main event');
            return;
        }

        const
            { startDate, endDate } = timeSlot,
            [added]              = this.grid.store.add({
                name : 'New subtask',
                startDate,
                endDate
            });

        // Assign the new event to the same resource as its parent, otherwise it won't show up
        added.assign(this.record.resource);

        this.grid.startEditing(added);
    }

    onDeleteClick() {
        const
            { grid }       = this,
            selectedRecord = grid.selectedRecord;

        grid.features.cellEdit.cancelEditing(true);
        selectedRecord && grid.store.remove(selectedRecord);
    }

    set record(record) {
        super.record = record;

        if (record) {
            this.grid.store.loadData(record.children || []);
        }
        else {
            // make sure cellEditor is hidden to prevent show it up on taskEdit reopen
            this.grid.features.cellEdit.finishEditing();
        }
    }

    get record() {
        return super.record;
    }
}

// Register this widget type with its Factory
SubtaskTab.initClass();

//endregionimport '_shared/shared.js'; // not required, our example styling etc.
let scheduler;


// Cannot toggle mode between horizontal and vertical at runtime, so need to destroy and recreate the scheduler
async function createScheduler(mode) {
    // Get FM Props
    const props = getFmProps();
    window._UpdatePhantomIds = updatePhantomIds;
    const projectData = await fetchProjectData();

    const isHorizontal = mode === 'horizontal';

    scheduler?.destroy?.();

    // Create a new scheduler from the custom subclass, see SchedulerWithSubtasks
    scheduler = new SchedulerWithSubtasks({
        appendTo          : 'container',
        resourceImagePath : '_shared/images/users/',
        startDate         : new Date(2022, 2, 29, 7),
        endDate           : new Date(2022, 2, 29, 21),
        viewPreset        : 'hourAndDay',
        rowHeight         : 90,
        barMargin         : 10,
        // Columns are only applicable in horizontal mode
        columns           : isHorizontal ? [
            { type : 'resourceInfo', text : 'Name', field : 'name', width : 130 },
            { type : 'rating', text : 'Speaker rating', field : 'rating' }
        ] : [],
        project : {
            autoLoad : true,
            // loadUrl  : 'data/data.json'
        },
        mode,
        tbar : [
            {
                type        : 'buttongroup',
                toggleGroup : true,
                items       : {
                    horizontal : { text : 'Horizontal mode', icon : 'b-fa-left-right', pressed : isHorizontal },
                    vertical   : { text : 'Vertical mode', icon : 'b-fa-up-down', pressed : !isHorizontal }
                },
                onToggle({ pressed, source }) {
                    if (pressed) {
                        createScheduler(source.ref);
                    }
                }
            }
        ]
    });

    // Called for data changes that are persistable
    scheduler.project.on({
        hasChanges() {
            let { changes } = this;

            // Remove resourceTimeRanges from the changes if it exists
            if (changes.resourceTimeRanges) {
                delete changes.resourceTimeRanges;
            }

            // If there are other changes left, call updateProjectData
            if (Object.keys(changes).length > 0) {
                const response = updateProjectData(changes);
                this.acceptChanges();
            }
        },
    });

    // Load the project data
    await scheduler.project.loadInlineData(projectData);
}

document.addEventListener('DOMContentLoaded', createScheduler('horizontal'));
