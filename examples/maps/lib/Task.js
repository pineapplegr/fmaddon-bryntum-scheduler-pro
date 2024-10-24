import EventModel from '../../../lib/SchedulerPro/model/EventModel.js';

// Simple task class with an extra address field (which can be edited with the AddressSearchField)
export default class Task extends EventModel {
    static get fields() {
        return [
            { name : 'address' },
            // in this demo, default duration for tasks will be 1 hour (instead of days)
            { name : 'duration', defaultValue : 1 },
            { name : 'durationUnit', defaultValue : 'h' }
        ];
    }

    get shortAddress() {
        return (this.address?.display_name || '').split(',')[0];
    }
}
