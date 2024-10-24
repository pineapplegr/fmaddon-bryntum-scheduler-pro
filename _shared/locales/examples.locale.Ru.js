import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/SchedulerPro/localization/Ru.js';
import './shared.locale.Ru.js';

const locale = {

    localeName : 'Ru',
    localeDesc : 'Русский',
    localeCode : 'ru',

    Column : {
        Capacity           : 'Вместительность',
        City               : 'Город',
        Company            : 'Компания',
        Duration           : 'Продолжительность',
        'Employment type'  : 'Тип занятости',
        End                : 'Конец',
        'First name'       : 'Имя',
        Id                 : '№',
        Machines           : 'Машины',
        Name               : 'Имя',
        'Nbr tasks'        : 'Кол-во задач',
        'Production line'  : 'Производственная линия',
        Rating             : 'Рейтинг',
        Role               : 'Роль',
        Score              : 'Счет',
        Staff              : 'Персонал',
        Start              : 'Начало',
        Surname            : 'Фамилия',
        'Task color'       : 'Цвет задачи',
        Type               : 'Тип',
        'Unassigned tasks' : 'Неназначенные задачи'
    }

};

export default LocaleHelper.publishLocale(locale);
