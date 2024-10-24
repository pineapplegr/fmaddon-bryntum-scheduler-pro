import DateHelper from 'lib/Core/helper/DateHelper.js';
import SchedulerPro from 'lib/SchedulerPro/view/SchedulerPro.js';
import './SubtaskTab.js';
import 'lib/SchedulerPro/feature/NestedEvents.js';
import StringHelper from 'lib/Core/helper/StringHelper.js';

// Ensure that the Tooltip shows nested events them in temporal order
const byStartDate = (leftSubEvent, rightSubEvent) => leftSubEvent.startDate - rightSubEvent.startDate;

// SchedulerPro subclass using nested events
export default class SchedulerWithSubtasks extends SchedulerPro {

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
