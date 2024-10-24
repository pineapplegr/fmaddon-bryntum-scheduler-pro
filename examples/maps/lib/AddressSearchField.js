import Combo from '../../../lib/Core/widget/Combo.js';
import Address from './Address.js';

// A custom remote search field, querying OpenStreetMap for addresses.
export default class AddressSearchField extends Combo {
    // Factoryable type name
    static type = 'addresssearchfield';

    static $name = 'AddressSearchField';

    static configurable = {
        clearWhenInputEmpty : true,
        clearable           : true,
        displayField        : 'display_name',
        // Setting the value field to null indicates we want the Combo to get/set address *records* as opposed to the
        // id of an address record.
        valueField          : null,
        filterOnEnter       : true,
        filterParamName     : 'q',
        store               : {
            modelClass : Address,
            readUrl    : 'https://nominatim.openstreetmap.org/search',
            encodeFilterParams(filters) {
                return filters[0].value;
            },
            params : {
                format : 'json'
            },
            fetchOptions : {
                // Please see MDN for fetch options: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
                credentials : 'omit'
            }
        },
        // Addresses can be long
        pickerWidth    : 450,
        validateFilter : false,
        listCls        : 'address-results',
        // Custom list item template to show a map icon with lat + lon
        listItemTpl    : address => `<i class="b-fa b-fa-map-marker-alt"></i>
            <div class="address-container">
                <span class="address-name">${address.display_name}</span>
                <span class="lat-long">${address.lat}°, ${address.lon}°</span>
            </div>
        `
    };
};

AddressSearchField.initClass();
