import SchedulerPro from '../../../lib/SchedulerPro/view/SchedulerPro.js';
import '../../../lib/Grid/feature/Stripe.js';
import '../../../lib/Grid/column/NumberColumn.js';
import '../../../lib/Grid/column/TreeColumn.js';
import '../../../lib/Core/widget/NumberField.js';
import '../../../lib/Grid/feature/Tree.js';
import { flightTooltip } from './FlightTooltip.js';
import StringHelper from '../../../lib/Core/helper/StringHelper.js';

// Customized scheduler displaying flights
export default class Schedule extends SchedulerPro {
    static $name = 'Schedule';

    static configurable = {
        rowHeight           : 65,
        barMargin           : 5,
        snap                : true,
        useInitialAnimation : false,
        columns             : [
            {
                type  : 'tree',
                text  : 'Aircraft',
                width : 200,
                field : 'name'
            }
        ],

        // Custom view preset with header configuration
        viewPreset : {
            base           : 'hourAndDay',
            tickWidth      : 35,
            timeResolution : {
                unit      : 'min',
                increment : 5
            },
            headers : [
                {
                    unit       : 'hour',
                    dateFormat : 'HH:mm'
                }
            ]
        },

        features : {
            tree         : true,
            dependencies : {
                allowCreate : false
            },

            split       : true,
            eventBuffer : true,
            eventDrag   : {
                // Prevent dragging flights to other aircraft
                constrainDragToResource : true,
                snapToResource          : true
            },

            // Customize its contents
            taskEdit : {
                items : {
                    generalTab : {
                        // Customize the title of the general tab
                        title : 'Flight details',
                        items : {
                            nameField : {
                                name  : 'flightNumber',
                                label : 'Flight'
                            },
                            resourcesField : {
                                label : 'Aircraft'
                            },
                            startDateField : {
                                label : 'Departs'
                            },
                            preambleField : {
                                label  : 'Loading',
                                // Above duration field
                                weight : 350
                            },
                            postambleField : {
                                label  : 'Unloading',
                                weight : 360
                            },
                            effortField      : null,
                            endDateField     : null,
                            percentDoneField : null,
                            originField      : {
                                type   : 'text',
                                name   : 'originAirportCode',
                                label  : 'From',
                                // Place after name field
                                weight : 150
                            },
                            destinationField : {
                                type   : 'text',
                                name   : 'destinationAirportCode',
                                label  : 'To',
                                weight : 151
                            }
                        }
                    },
                    predecessorsTab : null,
                    successorsTab   : null
                }
            },
            resourceTimeRanges : true,
            eventMenu          : {
                items : {
                    splitEvent : null,
                    editEvent  : {
                        text : 'Edit flight'
                    },
                    copyEvent : null,
                    cutEvent  : null
                }
            },
            eventTooltip : {
                template : ({ eventRecord }) => flightTooltip(eventRecord, eventRecord.linkedFlight)
            }
        },

        eventRenderer({ eventRecord, renderData }) {
            renderData.iconCls = null;

            const roundedDuration = Math.round(eventRecord.duration * 10) / 10;

            return [
                {
                    tag       : 'span',
                    className : 'b-flight-number',
                    children  : [
                        {
                            tag   : 'i',
                            class : eventRecord.iconCls
                        },
                        eventRecord.flightNumber
                    ]
                },
                {
                    class    : 'b-flight-details',
                    children : [
                        {
                            tag   : 'i',
                            class : 'b-fa b-fa-plane-departure'
                        },
                        // Show origin and destination if set
                        (eventRecord.originAirportCode || eventRecord.destinationAirportCode) && {
                            tag  : 'span',
                            text : `${eventRecord.originAirportCode} -> ${eventRecord.destinationAirportCode}`
                        },
                        // Show duration when available
                        roundedDuration && {
                            tag   : 'span',
                            class : 'b-flight-duration',
                            text  : `${roundedDuration} ${eventRecord.durationUnit}s`
                        }
                    ]
                }
            ];
        },

        listeners : {
            // Only allow creating flights on planes
            beforeDragCreate({ resourceRecord }) {
                return resourceRecord.isLeaf;
            }
        }
    };
};
