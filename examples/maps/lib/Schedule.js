import DateHelper from '../../../lib/Core/helper/DateHelper.js';
import StringHelper from '../../../lib/Core/helper/StringHelper.js';
import '../../../lib/Grid/feature/Stripe.js';
import '../../../lib/Scheduler/column/ResourceInfoColumn.js';
import '../../../lib/SchedulerPro/feature/EventBuffer.js';
import SchedulerPro from '../../../lib/SchedulerPro/view/SchedulerPro.js';
import './AddressSearchField.js';

export default class Schedule extends SchedulerPro {
    // Factoryable type name
    static type = 'schedule';

    static $name = 'Schedule';

    static get defaultConfig() {
        return {
            features : {
                stripe      : true,
                eventBuffer : true,
                taskEdit    : {
                    items : {
                        generalTab : {
                            items : {
                                resourcesField : {
                                    required : true
                                },
                                // For this demo we add an extra remote address search field
                                addressField : {
                                    type   : 'addresssearchfield',
                                    label  : 'Address',
                                    name   : 'address',
                                    weight : 100
                                },
                                preambleField : {
                                    label : 'Travel to'
                                },
                                postambleField : {
                                    label : 'Travel from'
                                }
                            }
                        }
                    }
                }
            },

            rowHeight  : 80,
            barMargin  : 4,
            eventColor : null,
            eventStyle : null,

            columns : [
                {
                    type           : 'resourceInfo',
                    text           : 'Name',
                    width          : 200,
                    showEventCount : false,
                    showRole       : true
                }
            ],

            // Custom view preset with header configuration
            viewPreset : 'hourAndDay',

            resourceImagePath : '../_shared/images/users/',

            tbar : [
                {
                    type : 'widget',
                    cls  : 'widget-title',
                    html : 'Schedule View',
                    flex : 1
                },
                {
                    text    : 'New event',
                    icon    : 'b-fa b-fa-plus',
                    color   : 'b-green b-raised',
                    onClick : 'up.onNewEventClick'
                },
                {
                    type     : 'datefield',
                    ref      : 'dateField',
                    width    : 190,
                    editable : false,
                    step     : 1,
                    onChange : 'up.onDateFieldChange'
                },
                {
                    type                 : 'textfield',
                    ref                  : 'filterByName',
                    placeholder          : 'Filter tasks',
                    clearable            : true,
                    keyStrokeChangeDelay : 100,
                    triggers             : {
                        filter : {
                            align : 'start',
                            cls   : 'b-fa b-fa-filter'
                        }
                    },
                    onChange : 'up.onFilterChange'
                }
            ]
        };
    }

    construct() {
        super.construct(...arguments);

        this.widgetMap.dateField.value = this.startDate;
    }

    onFilterChange({ value }) {
        value = value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

        // Replace all previous filters and set a new filter
        this.eventStore.filter({
            filters : event => new RegExp(value, 'i').test(event.name),
            replace : true
        });
    }

    onDateFieldChange({ value, userAction }) {
        userAction && this.setTimeSpan(DateHelper.add(value, 8, 'hour'), DateHelper.add(value, 20, 'hour'));
    }

    onNewEventClick() {
        const newTask = new this.eventStore.modelClass({
            startDate : this.startDate
        });

        this.editEvent(newTask);
    }

    onPrevious() {
        this.shiftPrevious();
    }

    onNext() {
        this.shiftNext();
    }

    // Custom event renderer showing the task name + location icon with a shortened address text
    eventRenderer({ eventRecord }) {
        return [
            {
                tag       : 'span',
                className : 'event-name',
                html      : StringHelper.encodeHtml(eventRecord.name)
            },
            {
                tag       : 'span',
                className : 'location',
                children  : [
                    eventRecord.shortAddress ? {
                        tag       : 'i',
                        className : 'b-fa b-fa-map-marker-alt'
                    } : null,
                    eventRecord.shortAddress || '⠀'
                ]
            }
        ];
    }
};

Schedule.initClass();
