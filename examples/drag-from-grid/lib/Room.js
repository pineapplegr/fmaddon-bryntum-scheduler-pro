import ResourceModel from '../../../lib/SchedulerPro/model/ResourceModel.js';

// Custom Room model, based on ResourceModel with additional fields
export default class Room extends ResourceModel {
    static get fields() {
        return [
            'capacity',
            'equipment'
        ];
    }
}
