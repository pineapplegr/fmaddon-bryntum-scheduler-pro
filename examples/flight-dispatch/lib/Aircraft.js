import ResourceModel from '../../../lib/SchedulerPro/model/ResourceModel.js';

// Custom Aircraft model, based on ResourceModel with additional fields
export default class Aircraft extends ResourceModel {
    static fields = [
        'fleet',
        'type'
    ];
}
