import Grid from '../../../lib/Grid/view/Grid.js';
import '../../../lib/Core/widget/DurationField.js';
import StringHelper from '../../../lib/Core/helper/StringHelper.js';

// Custom grid that holds unassigned sessions
export default class UnplannedGrid extends Grid {
    static get defaultConfig() {
        return {
            features : {
                stripe : true,
                sort   : 'name'
            },

            columns : [{
                text       : 'Unscheduled sessions',
                flex       : 1,
                field      : 'name',
                htmlEncode : false,
                renderer   : ({ record : session }) => {
                    let icon = 'user';

                    if (session.participants >= 100) {
                        icon = 'users';
                    }
                    else if (session.participants >= 50) {
                        icon = 'user-friends';
                    }

                    return StringHelper.xss`<i class="b-fa b-fa-${icon}"></i>${session.name}`;
                }
            }, {
                icon     : 'b-icon b-fa-clock',
                width    : 60,
                align    : 'center',
                editor   : 'duration',
                field    : 'fullDuration',
                renderer : ({ record : session }) => StringHelper.xss`${session.duration} ${session.durationUnit}`
            }],

            rowHeight : 65,

            disableGridRowModelWarning : true
        };
    }

    static $name = 'UnplannedGrid';

    set project(project) {
        // Create a chained version of the event store as our store. It will be filtered to only display events that
        // lack assignments
        this.store = project.eventStore.chain(eventRecord => !eventRecord.assignments.length);

        // When assignments change, update our chained store to reflect the changes
        project.assignmentStore.on({
            change() {
                this.store.fillFromMaster();
            },
            thisObj : this
        });
    }
};
