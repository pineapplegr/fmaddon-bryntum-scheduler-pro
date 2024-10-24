import DateHelper from 'lib/Core/helper/DateHelper.js';
import EditorTab from 'lib/SchedulerPro/widget/taskeditor/EditorTab.js';
import Toast from 'lib/Core/widget/Toast.js';
import EventModel from 'lib/SchedulerPro/model/EventModel.js';
import 'lib/Grid/column/DateColumn.js';
import 'lib/Core/widget/DateTimeField.js';
import 'lib/Grid/view/Grid.js';

/**
 * Extra Tab for TaskEditor to manage subtasks
 *
 * @extends SchedulerPro/widget/taskeditor/EditorTab
 */
export default class SubtaskTab extends EditorTab {

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
