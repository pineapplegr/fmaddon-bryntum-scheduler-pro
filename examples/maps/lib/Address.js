import Model from '../../../lib/Core/data/Model.js';

// The data model for a task address
export default class Address extends Model {
    static idField = 'place_id'; // The identifier Mapbox uses for its places
    static fields = [
        'display_name',
        'lat',
        'lon'
    ];
}
