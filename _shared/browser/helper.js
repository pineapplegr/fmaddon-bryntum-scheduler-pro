const { location : loc } = document;

// This JS script should be ES5 version compatible to work in old browsers
// Redirect to UMD bundle for browsers without module support.
if (!/index\.umd\.html/.test(loc.href)) {
    const moduleSupport = 'noModule' in HTMLScriptElement.prototype;
    if (!moduleSupport) {
        document.location = 'index.umd.html' + loc.search;
    }
}

// Add RTL class early before code loads to RTL environment is always detectable
if (loc.search.split(/&|\?/).includes('rtl')) {
    document.documentElement.classList.add('b-rtl');
}

if (loc.protocol === 'file:') {
    alert('WARNING: You should run examples on a Web server (not using the file: protocol)');
}

if (window.isDemoBrowser) {
    // Handle styling while loading other theme than the default (stockholm).
    // To make pre-rendered page look nice in all themes
    // Check localStorage and QS
    let theme = localStorage.getItem('b-example-theme');
    const
        themeLink  = document.querySelector('[data-bryntum-theme]'),
        themeNames = {
            classic         : 'classic',
            default         : 'classic',
            'classic-dark'  : 'classic-dark',
            dark            : 'classic-dark',
            'classic-light' : 'classic-light',
            light           : 'classic-light',
            material        : 'material'
        };

    if (loc.search.indexOf('theme=') > -1) {
        theme = /theme=([^&]*)/.exec(loc.search)[1];
    }

    window.theme = theme && themeNames[theme.toLowerCase()] || 'stockholm';
    themeLink.href = themeLink.href.replace(/[a-z-]+\.css/, window.theme + '.css');
    const listener = function() {
        document.body.classList.remove('is-loading-theme');
        window.removeEventListener('load', listener);
    };
    window.addEventListener('load', listener);
}

// Detect legacy browsers non-Chrome Edge and IE11
if ((navigator.userAgent.match(/Edge/) && !navigator.userAgent.match(/Chrome/)) || navigator.userAgent.match(/rv:11/)) {
    alert('Your browser is not supported by Bryntum product!\nPlease use one of the modern browsers like Chrome, FireFox, Safari or Edge Chromium.');
}
