import SchedulerPro from '../../../lib/SchedulerPro/view/SchedulerPro.js';
import '../../../lib/Grid/feature/Stripe.js';
import '../../../lib/Grid/column/NumberColumn.js';
import '../../../lib/Core/widget/NumberField.js';
import StringHelper from '../../../lib/Core/helper/StringHelper.js';

// Customized scheduler displaying sessions per room
export default class Schedule extends SchedulerPro {
    static $name = 'Schedule';

    static configurable = {
        features : {
            stripe    : true,
            eventMenu : {
                items : {
                    deleteEvent : {
                        text : 'Delete session'
                    },
                    unassignEvent : {
                        text : 'Unschedule session'
                    }
                }
            },
            taskEdit : {
                editorConfig : {
                    title : 'Session'
                },

                items : {
                    generalTab : {
                        title : 'Booking',
                        items : {
                            endDateField     : false,
                            percentDoneField : false,
                            resourcesField   : {
                                label : 'Room'
                            },
                            durationField : {
                                cls : ''
                            },
                            participantsField : {
                                type  : 'number',
                                label : 'Attending',
                                name  : 'participants'
                            },
                            clientField : {
                                type   : 'text',
                                label  : 'Client',
                                name   : 'client',
                                weight : 1
                            }
                        }
                    }
                }
            }
        },

        rowHeight  : 65,
        barMargin  : 5,
        eventStyle : 'rounded',

        columns : [
            {
                text  : 'Conference room',
                field : 'name',
                width : 170
            },
            {
                type    : 'number',
                text    : 'Capacity',
                field   : 'capacity',
                align   : 'right',
                width   : 95,
                step    : 1,
                bigStep : 10
            },
            {
                text       : 'Equipment',
                editor     : false,
                sortable   : false,
                groupable  : false,
                field      : 'equipment',
                width      : 120,
                htmlEncode : false,
                renderer({ record : room }) {
                    return room.equipment.map(item => ({
                        tag       : 'i',
                        className : `b-fa b-fa-${item}`,
                        dataset   : {
                            btip : {
                                microphone : 'Microphone',
                                headset    : 'Wireless headset',
                                video      : 'Video recording',
                                headphones : 'Headphones',
                                chalkboard : 'Whiteboard',
                                film       : 'Projector with HDMI',
                                tv         : 'TV with HDMI',
                                cat        : '?'
                            }[item]
                        }
                    }));
                }
            },
            {
                text     : 'Sessions',
                editor   : false,
                sortable : false,
                field    : 'events.length',
                align    : 'center',
                width    : 100
            }
        ],

        // Custom view preset with header configuration
        viewPreset : {
            base           : 'hourAndDay',
            columnLinesFor : 0,
            headers        : [
                {
                    unit       : 'd',
                    align      : 'center',
                    dateFormat : 'dddd'
                },
                {
                    unit       : 'h',
                    align      : 'center',
                    dateFormat : 'HH'
                }
            ]
        }
    };

    eventRenderer({ eventRecord : session, resourceRecord : room, renderData }) {
        // Icon depending on number of participants
        let icon = 'user';

        if (session.participants >= 100) {
            icon = 'users';
        }
        else if (session.participants >= 50) {
            icon = 'user-friends';
        }

        renderData.iconCls = `b-fa b-fa-${icon}`;

        // Flag with red if assigned to a room with to low capacity
        if (session.participants > room.capacity) {
            renderData.eventColor = 'red';
        }

        // Event contents
        return StringHelper.xss`<div>${session.name}</div><span>${session.client} - ${session.participants}p - ${
            session.duration} hours</span>`;
    }
};
