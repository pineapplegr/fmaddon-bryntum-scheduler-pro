import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';

const locale = {

    localeName : 'En',
    localeDesc : 'English (US)',
    localeCode : 'en-US',

    Button : {
        'Display hints' : 'Display hints',
        Apply           : 'Apply'
    },

    Checkbox : {
        Automatically : 'Automatically'
    },

    Combo : {
        Theme    : 'Theme',
        Language : 'Language',
        Size     : 'Size'
    },

    Shared : {
        'Locale changed' : 'Locale changed'
    },

    Tooltip : {
        infoButton       : 'Click to show info and switch theme or locale',
        codeButton       : 'Click to show the built-in code editor',
        hintCheck        : 'Check to automatically display hints when loading the example',
        fullscreenButton : 'Full screen'
    }
};

export default LocaleHelper.publishLocale(locale);
