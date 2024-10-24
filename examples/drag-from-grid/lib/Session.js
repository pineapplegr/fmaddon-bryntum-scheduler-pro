import EventModel from '../../../lib/SchedulerPro/model/EventModel.js';

// Custom Session model, based on EventModel with additional fields and changed defaults
export default class Session extends EventModel {
    static get fields() {
        return [
            { name : 'participants', defaultValue : 0 },
            { name : 'client', defaultValue : '' }
        ];
    }

    static get defaults() {
        return {
            // In this demo, default duration for sessions will be hours (instead of days)
            durationUnit : 'h'
        };
    }
}
