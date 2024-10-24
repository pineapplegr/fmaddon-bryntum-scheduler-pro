import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/SchedulerPro/localization/En.js';
import './shared.locale.En.js';

const locale = {

    localeName : 'En',
    localeDesc : 'English (US)',
    localeCode : 'en-US',

    Column : {
        Capacity           : 'Capacity',
        City               : 'City',
        Company            : 'Company',
        Duration           : 'Duration',
        'Employment type'  : 'Employment type',
        End                : 'End',
        'First name'       : 'First name',
        Id                 : '#',
        Machines           : 'Machines',
        Name               : 'Name',
        'Nbr tasks'        : 'Nbr tasks',
        'Production line'  : 'Production line',
        Rating             : 'Rating',
        Role               : 'Role',
        Score              : 'Score',
        Staff              : 'Staff',
        Start              : 'Start',
        Surname            : 'Surname',
        'Task color'       : 'Task color',
        Type               : 'Type',
        'Unassigned tasks' : 'Unassigned tasks'
    }

};

export default LocaleHelper.publishLocale(locale);
