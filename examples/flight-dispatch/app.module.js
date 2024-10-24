import {
    ResourceModel,
    EventModel,
    DateHelper,
    StringHelper,
    List,
    SchedulerPro,
} from '../build/schedulerpro.module.js';
import {
    fetchProjectData,
    updateProjectData,
    updatePhantomIds,
} from '@pineapplegr/fm-bryntum-driver';
import getFmProps from '/fm/propsHandler.js';
//region "lib/Aircraft.js"

// Custom Aircraft model, based on ResourceModel with additional fields
class Aircraft extends ResourceModel {
    static fields = ['fleet', 'type'];
}

//endregion
//region "lib/Flight.js"

// Custom Flight model, based on EventModel with additional fields and changed defaults
class Flight extends EventModel {
    static fields = [
        'airline',
        { name: 'flightNumber', defaultValue: '' },
        'pairedFlightNumber',
        { name: 'originAirportCode', defaultValue: '' },
        { name: 'destinationAirportCode', defaultValue: '' },
        { name: 'resourceId', dataSource: 'aircraftId' },
        { name: 'startDate', dataSource: 'schedule.departureTime' },
        { name: 'endDate', dataSource: 'schedule.arrivalTime' },
        {
            name: 'preamble',
            dataSource: 'schedule.loading',
            defaultValue: '10 minutes',
        },
        {
            name: 'postamble',
            dataSource: 'schedule.unloading',
            defaultValue: '10 minutes',
        },
        { name: 'pilots', dataSource: 'staff.pilots' },
        { name: 'flightAttendants', dataSource: 'staff.flightAttendants' },
        { name: 'groundCrew', dataSource: 'staff.groundCrew' },
        { name: 'departureTime', dataSource: 'schedule.departureTime' },
        { name: 'arrivalTime', dataSource: 'schedule.arrivalTime' },
        { name: 'warning' },
        'nonmutable',
        'mutable',
        'changed',
        'maintenance',
        'overlap',
        'delayed',
        'shortened',
        'tailviolation',
        'locked',
        'crewfeasibility',
        'crewlink',
        'uncertainty',
    ];

    static defaults = {
        // In this demo, default duration for sessions will be hours (instead of days)
        durationUnit: 'h',
    };

    get linkedFlight() {
        return this.firstStore.find(
            (flight) => flight.flightNumber === this.pairedFlightNumber
        );
    }

    get loadingTimeMinutes() {
        return parseInt(this.loadingTimeMinutes || 0);
    }

    get unloadingTimeMinutes() {
        return parseInt(this.unloadingTimeMinutes || 0);
    }

    get loadingStartDate() {
        return DateHelper.add(
            this.startDate,
            -this.preamble.magnitude,
            this.preamble.unit
        );
    }

    get unloadingStartDate() {
        return DateHelper.add(
            this.endDate,
            this.postamble.magnitude,
            this.postamble.unit
        );
    }

    get iconCls() {
        switch (true) {
            case Boolean(this.warning):
            case this.uncertainty:
                return 'b-fa b-fa-warning';

            case this.crewlink:
                return 'b-fa b-fa-minus';

            case this.crewfeasibility:
                return 'b-fa b-fa-person';

            case this.locked:
                return 'b-fa b-fa-lock';

            case this.maintenance:
                return 'b-fa b-fa-wrench';
        }
    }

    get eventColor() {
        switch (true) {
            case this.nonmutable:
                return 'pink';
            case this.mutable:
                return 'indigo';
            case this.changed:
                return 'purple';
            case this.maintenance:
                return 'lime';
            case this.overlap:
                return 'violet';
            case this.delayed:
                return 'orange';
            case this.shortened:
                return 'teal';
        }
    }
}

//endregion
//region "lib/FlightTooltip.js"

// Custom tooltip template

const flightTemplate = (eventRecord) => StringHelper.xss`
<div class="flight">
    <div class="taxiing">${
        eventRecord.preamble?.magnitude || ''
    }<i class="b-fa b-fa-plane-departure"></i></div>
    <div class="flightTime"><strong>${eventRecord.flightNumber}</strong> ${
        eventRecord.originAirportCode
    } <i class="b-fa b-fa-arrow-right"></i> ${
        eventRecord.destinationAirportCode
    }</div>
    <div class="taxiing">${
        eventRecord.postamble?.magnitude || ''
    }<i class="b-fa b-fa-plane-arrival"></i></div>
</div>`,
    timingRowTemplate = (eventRecord) => `
<div class="timing">
    <div>${DateHelper.format(eventRecord.loadingStartDate, 'HH:mm')}</div>
    <div>${DateHelper.format(eventRecord.startDate, 'HH:mm')}</div>
    <div class="duration">${eventRecord.fullDuration}</div>
    <div>${DateHelper.format(eventRecord.endDate, 'HH:mm')}</div>
    <div>${DateHelper.format(eventRecord.unloadingStartDate, 'HH:mm')}</div>
</div> 
`;

const flightTooltip = (flight1, flight2) =>
    flightTemplate(flight1) +
    timingRowTemplate(flight1) +
    // Show info about linked flight when available
    (flight2 ? flightTemplate(flight2) + timingRowTemplate(flight2) : '') +
    (flight1.warning
        ? `<div class="warning"><i class="b-fa b-fa-warning"></i> ${flight1.warning}</div>`
        : '');

//endregion
//region "lib/Legend.js"

// Custom legend that allows user to filter by clicking labels
class Legend extends List {
    static $name = 'Legend';
    static type = 'legend';

    static configurable = {
        multiSelect: true,
        itemTpl: (record) => `${
            record.icon
                ? `
            <i class="b-icon ${record.icon}" style="color:${record.color}"></i>`
                : `<div class="b-color-square b-color-${record.color}" style="background:${record.colorHex}"></div>`
        }
            ${record.text}
        `,
        store: {
            fields: ['icon'],
            data: [
                {
                    text: 'Non-mutable',
                    color: 'pink',
                    colorHex: '#ffc3db',
                },
                {
                    text: 'Mutable',
                    color: 'indigo',
                    colorHex: '#c8c2ff',
                },
                {
                    text: 'Changed',
                    color: 'purple',
                    colorHex: '#ffc3f9',
                },
                {
                    text: 'Maintenance',
                    color: 'lime',
                    colorHex: '#dbf9c9',
                },
                {
                    text: 'Overlap',
                    color: 'violet',
                    colorHex: '#e7c3ff',
                },
                {
                    text: 'Delayed',
                    color: 'orange',
                    colorHex: '#ffe6c3',
                },
                {
                    text: 'Shortened',
                    color: 'teal',
                    colorHex: '#c4ffe7',
                },
                {
                    text: 'Tail violation',
                    icon: 'b-fa b-fa-warning',
                    color: 'red',
                },
                {
                    text: 'No escape',
                    color: 'deep-orange',
                    colorHex: '#ffd0c2',
                },
                {
                    text: 'Locked',
                    icon: 'b-fa b-fa-lock',
                    color: 'darksalmon',
                },
                {
                    text: 'Crew feasibility',
                    icon: 'b-fa b-fa-person',
                    color: 'blue',
                },
                {
                    text: 'Crew link',
                    icon: 'b-fa b-fa-minus',
                    color: 'blue',
                },
                {
                    text: 'Uncertainty',
                    icon: 'b-fa b-fa-warning',
                    color: '#ccc',
                },
            ],
        },
    };
}
Legend.initClass();

//endregion
//region "lib/Schedule.js"

// Customized scheduler displaying flights
class Schedule extends SchedulerPro {
    static $name = 'Schedule';

    static configurable = {
        rowHeight: 65,
        barMargin: 5,
        snap: true,
        useInitialAnimation: false,
        columns: [
            {
                type: 'tree',
                text: 'Aircraft',
                width: 200,
                field: 'name',
            },
        ],

        // Custom view preset with header configuration
        viewPreset: {
            base: 'hourAndDay',
            tickWidth: 35,
            timeResolution: {
                unit: 'min',
                increment: 5,
            },
            headers: [
                {
                    unit: 'hour',
                    dateFormat: 'HH:mm',
                },
            ],
        },

        features: {
            tree: true,
            dependencies: {
                allowCreate: false,
            },

            split: true,
            eventBuffer: true,
            eventDrag: {
                // Prevent dragging flights to other aircraft
                constrainDragToResource: true,
                snapToResource: true,
            },

            // Customize its contents
            taskEdit: {
                items: {
                    generalTab: {
                        // Customize the title of the general tab
                        title: 'Flight details',
                        items: {
                            nameField: {
                                name: 'flightNumber',
                                label: 'Flight',
                            },
                            resourcesField: {
                                label: 'Aircraft',
                            },
                            startDateField: {
                                label: 'Departs',
                            },
                            preambleField: {
                                label: 'Loading',
                                // Above duration field
                                weight: 350,
                            },
                            postambleField: {
                                label: 'Unloading',
                                weight: 360,
                            },
                            effortField: null,
                            endDateField: null,
                            percentDoneField: null,
                            originField: {
                                type: 'text',
                                name: 'originAirportCode',
                                label: 'From',
                                // Place after name field
                                weight: 150,
                            },
                            destinationField: {
                                type: 'text',
                                name: 'destinationAirportCode',
                                label: 'To',
                                weight: 151,
                            },
                        },
                    },
                    predecessorsTab: null,
                    successorsTab: null,
                },
            },
            resourceTimeRanges: true,
            eventMenu: {
                items: {
                    splitEvent: null,
                    editEvent: {
                        text: 'Edit flight',
                    },
                    copyEvent: null,
                    cutEvent: null,
                },
            },
            eventTooltip: {
                template: ({ eventRecord }) =>
                    flightTooltip(eventRecord, eventRecord.linkedFlight),
            },
        },

        eventRenderer({ eventRecord, renderData }) {
            renderData.iconCls = null;

            const roundedDuration = Math.round(eventRecord.duration * 10) / 10;

            return [
                {
                    tag: 'span',
                    className: 'b-flight-number',
                    children: [
                        {
                            tag: 'i',
                            class: eventRecord.iconCls,
                        },
                        eventRecord.flightNumber,
                    ],
                },
                {
                    class: 'b-flight-details',
                    children: [
                        {
                            tag: 'i',
                            class: 'b-fa b-fa-plane-departure',
                        },
                        // Show origin and destination if set
                        (eventRecord.originAirportCode ||
                            eventRecord.destinationAirportCode) && {
                            tag: 'span',
                            text: `${eventRecord.originAirportCode} -> ${eventRecord.destinationAirportCode}`,
                        },
                        // Show duration when available
                        roundedDuration && {
                            tag: 'span',
                            class: 'b-flight-duration',
                            text: `${roundedDuration} ${eventRecord.durationUnit}s`,
                        },
                    ],
                },
            ];
        },

        listeners: {
            // Only allow creating flights on planes
            beforeDragCreate({ resourceRecord }) {
                return resourceRecord.isLeaf;
            },
        },
    };
}

//endregionimport '../_shared/shared.js'; // not required, our example styling etc.

async function initializeScheduler() {
    // Get FM Props
    const props = getFmProps();
    window._UpdatePhantomIds = updatePhantomIds;
    const projectData = await fetchProjectData();

    const scheduler = new Schedule({
        project: {
            autoLoad: true,
            resourceStore: {
                modelClass: Aircraft,
            },
            eventStore: {
                modelClass: Flight,
            },
            // loadUrl: './data/data.json',
        },

        appendTo: 'container',
        startDate: '2023-06-13T00:00:00',
        endDate: '2023-06-13T23:45:00',
        rowHeight: 25,
        barMargin: 5,
        tickSize: 100,
        eventStyle: 'rounded',
        eventLayout: 'none',
        allowOverlap: false,
        tbar: {
            overflow: null,
            items: [
                {
                    type: 'slider',
                    ref: 'rowHeight',
                    text: 'Row height',
                    showValue: true,
                    value: 25,
                    min: 25,
                    step: 1,
                    max: 75,
                    onInput({ source, value }) {
                        scheduler.rowHeight = value;
                    },
                },
                '->',
                {
                    type: 'legend',
                    flex: 1,
                    async onItem({ source }) {
                        await scheduler.eventStore.clearFilters();
                        if (source.selected.count > 0) {
                            const items = source.selected.map((item) =>
                                item.text
                                    .toLowerCase()
                                    .replace(/[\s-]/, '', 'g')
                            );
                            await scheduler.eventStore.filter((eventRecord) =>
                                items.some((item) => eventRecord[item])
                            );
                        }
                    },
                },
            ],
        },
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

document.addEventListener('DOMContentLoaded', initializeScheduler);
