import List from '../../../lib/Core/widget/List.js';

// Custom legend that allows user to filter by clicking labels
export default class Legend extends List {
    static $name   = 'Legend';
    static type = 'legend';

    static configurable = {
        multiSelect : true,
        itemTpl     : record => `${record.icon ? `
            <i class="b-icon ${record.icon}" style="color:${record.color}"></i>` : `<div class="b-color-square b-color-${record.color}" style="background:${record.colorHex}"></div>`}
            ${record.text}
        `,
        store : {
            fields : ['icon'],
            data   : [
                {
                    text     : 'Non-mutable',
                    color    : 'pink',
                    colorHex : '#ffc3db'
                },
                {
                    text     : 'Mutable',
                    color    : 'indigo',
                    colorHex : '#c8c2ff'
                },
                {
                    text     : 'Changed',
                    color    : 'purple',
                    colorHex : '#ffc3f9'
                },
                {
                    text     : 'Maintenance',
                    color    : 'lime',
                    colorHex : '#dbf9c9'
                },
                {
                    text     : 'Overlap',
                    color    : 'violet',
                    colorHex : '#e7c3ff'
                },
                {
                    text     : 'Delayed',
                    color    : 'orange',
                    colorHex : '#ffe6c3'
                },
                {
                    text     : 'Shortened',
                    color    : 'teal',
                    colorHex : '#c4ffe7'
                },
                {
                    text  : 'Tail violation',
                    icon  : 'b-fa b-fa-warning',
                    color : 'red'
                },
                {
                    text     : 'No escape',
                    color    : 'deep-orange',
                    colorHex : '#ffd0c2'
                },
                {
                    text  : 'Locked',
                    icon  : 'b-fa b-fa-lock',
                    color : 'darksalmon'
                },
                {
                    text  : 'Crew feasibility',
                    icon  : 'b-fa b-fa-person',
                    color : 'blue'
                },
                {
                    text  : 'Crew link',
                    icon  : 'b-fa b-fa-minus',
                    color : 'blue'
                },
                {
                    text  : 'Uncertainty',
                    icon  : 'b-fa b-fa-warning',
                    color : '#ccc'
                }
            ]
        }
    };
};
Legend.initClass();
