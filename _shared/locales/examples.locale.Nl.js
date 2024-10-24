import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/SchedulerPro/localization/Nl.js';
import './shared.locale.Nl.js';

const locale = {

    localeName : 'Nl',
    localeDesc : 'Nederlands',
    localeCode : 'nl',

    Column : {
        Capacity           : 'Capaciteit',
        City               : 'Stad',
        Company            : 'Bedrijf',
        Duration           : 'Looptijd',
        'Employment type'  : 'Type werkgeverschap',
        End                : 'Einde',
        'First name'       : 'Voornaam',
        Id                 : '#',
        Machines           : 'Machines',
        Name               : 'Naam',
        'Nbr tasks'        : 'Numerieke taken',
        'Production line'  : 'Productielijn',
        Rating             : 'Beoordeling',
        Role               : 'Rol',
        Score              : 'Score',
        Staff              : 'Personeel',
        Start              : 'Begin',
        Surname            : 'Achternaam',
        'Task color'       : 'Taakkleur',
        Type               : 'Type',
        'Unassigned tasks' : 'Niet-toegewezen taken'
    }

};

export default LocaleHelper.publishLocale(locale);
