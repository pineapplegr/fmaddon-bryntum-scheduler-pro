import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/SchedulerPro/localization/SvSE.js';
import './shared.locale.SvSE.js';

const locale = {

    localeName : 'SvSE',
    localeDesc : 'Svenska',
    localeCode : 'sv-SE',

    Column : {
        Capacity           : 'Kapacitet',
        City               : 'Stad',
        Company            : 'Företag',
        Duration           : 'Längd',
        'Employment type'  : 'Anställning',
        End                : 'Slut',
        'First name'       : 'Förnamn',
        Id                 : '#',
        Machines           : 'Maskiner',
        Name               : 'Namn',
        'Nbr tasks'        : 'Antal aktiviteter',
        'Production line'  : 'Produktionslinje',
        Rating             : 'Betyg',
        Role               : 'Roll',
        Score              : 'Poäng',
        Staff              : 'Personal',
        Start              : 'Start',
        Surname            : 'Efternamn',
        'Task color'       : 'Uppgiftsfärg',
        Type               : 'Typ',
        'Unassigned tasks' : 'Otilldelade aktiviteter'
    }

};

export default LocaleHelper.publishLocale(locale);
