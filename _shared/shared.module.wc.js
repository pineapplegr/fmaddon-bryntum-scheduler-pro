import { LocaleHelper, Localizable, Base, GlobalEvents, AjaxHelper, AsyncHelper, BrowserHelper, DomHelper, DataGenerator, Fullscreen, Rectangle, VersionHelper, Events, Button, DemoCodeEditor, Toast, Tooltip, Widget } from '../../build/schedulerpro.wc.module.js';
import '../_shared/product.module.js';
/* global RC */
// Load product config

// Load localization




const
    realBaseConstruct = Base.prototype.construct,
    baseConstruct     = instance => {
        if (instance.$$name && !instance.ignoreLearn) {
            bryntum.usedClasses = bryntum.usedClasses || {};
            const meta = bryntum.usedClasses[instance.$$name] = bryntum.usedClasses[instance.$$name] || {
                name  : instance.$$name,
                count : 0
            };
            meta.count++;
            if (instance.isColumn) {
                meta.type = 'Column';
            }
            else if (instance.isWidget) {
                meta.type = 'Widget';
            }
            else if (instance.isInstancePlugin) {
                meta.type = 'Feature';
            }
        }
    };

Base.prototype.construct = function() {
    const result = realBaseConstruct.call(this, ...arguments);

    if (!this.isModel) {
        baseConstruct(this);
    }

    return result;
};

let earlyErrorEvent, autoApply = BrowserHelper.getLocalStorageItem('b-example-autoApply') !== 'false';

const
    errorListener           = errorEvent => earlyErrorEvent = errorEvent,
    // Disable RootCause for these location matches
    disableRootCause        = [
        'bigdataset',
        'csp',
        'norootcause',
        'screenshot'
    ],
    // Disable RootCause actions recording for these location matches
    disableRootCauseActions = [
        'gantt-schedulerpro',
        'resourcehistogram',
        'drag-between-schedulers'
    ],
    locationRe              = arr => new RegExp(`[/?&](${arr.join('|')})`),
    shouldShow              = (item, filterValue) => !item.isMenuItem || item.cls?.['b-docs-category'] || item.text.toLowerCase().includes(filterValue);

window.addEventListener('error', errorListener);

if (location.protocol === 'file:') {
    alert('ERROR: You must run examples on a webserver (not using the file: protocol)');
}

// needed for tests
window.__BRYNTUM_EXAMPLE = true;

if (VersionHelper.isTestEnv) {
    window.__applyTestConfigs = true;
}

// All toasts should be living in the document body floatroot
Toast.initClass().$meta.config.rootElement = document.body;

const
    hintKey          = 'preventhints-' + document.location.href,
    defaultTheme     = 'stockholm',
    queryString      = BrowserHelper.queryString,
    maxVideoDuration = 1000 * 60 * 5,
    // In our source structure on bryntum.com...
    browserPaths     = [
        '/examples/',
        '/grid/',
        '/scheduler/',
        '/schedulerpro/',
        '/gantt/',
        '/calendar/',
        '/taskboard/'
    ],
    themes           = {
        stockholm       : 'Stockholm',
        classic         : 'Classic',
        'classic-light' : 'Classic-Light',
        'classic-dark'  : 'Classic-Dark',
        material        : 'Material'
    },
    pathName         = location.pathname,
    isDemoBrowser    = browserPaths.some(path => pathName.endsWith(path) || Boolean(pathName.match(path + 'index.*html$'))),
    isBryntumCom     = BrowserHelper.isBryntumOnline(['online']),
    isUmd            = pathName.endsWith('umd.html');

if (!isDemoBrowser) {
    document.body.classList.add('b-initially-hidden');
}

// Prevent google translate messing up the DOM in our examples, https://github.com/facebook/react/issues/11538
document.body.classList.add('notranslate');

class Shared extends Localizable(Events()) {
    //region Init

    constructor() {
        super();

        this.initRootCause();

        const
            me    = this,
            reset = 'reset' in queryString;

        me.product = window.bryntum.product;

        // Allow running with ?rtl query param
        if (queryString.rtl != null) {
            document.body.style.direction = 'rtl';
        }

        me.rtl = getComputedStyle(document.body).direction === 'rtl';

        if (reset) {
            BrowserHelper.removeLocalStorageItem('b-example-language');
            BrowserHelper.removeLocalStorageItem('b-example-theme');
            BrowserHelper.removeLocalStorageItem('b-example-autoApply');
        }

        me.onDocumentMouseDown = me.onDocumentMouseDown.bind(me);
        me.testMode = queryString.test != null;
        me.developmentMode = queryString.develop != null;
        me.preload = queryString.preload != null;
        me.preloadMs = me.preload ? parseInt(queryString.preload) : 5000;

        // Load the code editor in the background if we are running an actual example
        // and we're not running a test.
        // We don't expect a user to get across to the code button before 5 seconds has elapsed.
        if (!isDemoBrowser && !me.testMode || me.preload) {
            setTimeout(() => {
                me.createEditor();
            }, me.preloadMs);
        }

        // Apply theme for demo unless the example supplies its own theme
        if (!isDemoBrowser && !document.body.matches('[class*=b-theme]')) {
            const currentThemeId = me.getStoredThemeId(defaultTheme) || me.theme;
            if (BrowserHelper.isSafari) {
                // HACK: Bizarre Safari bug, it freezes up completely without this
                setTimeout(() => {
                    me.applyTheme(currentThemeId, true);
                }, 0);
            }
            else {
                // Apply default theme first time when the page is loading
                me.applyTheme(currentThemeId, true);
            }
        }
        else {
            document.body.classList.remove('b-initially-hidden');
        }

        // Enables special styling when generating screenshots
        if ('screenshot' in queryString) {
            document.body.classList.add('b-screenshot');
            window.bryntum.noAnimations = true;
        }

        if ('hideheader' in queryString) {
            document.body.classList.add('b-hide-header');
        }

        // Used by BannerMaker to hide demo toolbar
        if ('hide-toolbar' in queryString) {
            document.body.classList.add('b-hide-toolbar');
        }

        // Subscribe on locale update to save it into the localStorage
        me.localeManager.on('locale', localeConfig => {
            BrowserHelper.setLocalStorageItem('b-example-language', localeConfig.localeName);
        });

        // Apply default locale first time when the page is loading
        if (!me.testMode) {
            me.localeManager.applyLocale(BrowserHelper.getLocalStorageItem('b-example-language') || LocaleHelper.localeName, false, true);
        }

        const overrideRowCount = queryString.rowCount;

        if (overrideRowCount) {
            const
                parts = overrideRowCount.split(',');

            if (parts.length === 1) {
                DataGenerator.overrideRowCount = parseInt(parts[0]);
            }
            else {
                DataGenerator.overrideRowCount = parts.map(p => parseInt(p));
            }
        }

        const container = document.getElementById('container');

        // Ensure user is not experimenting with HTML contents
        if (container) {
            me.insertHeader();
        }

        document.addEventListener('DOMContentLoaded', () => {
            if (container) {
                me.loadDescription();
            }

            // Don't load hints for the example browser (or if viewing with ?develop or in tests)
            if (!isDemoBrowser && !('screenshot' in queryString) && !me.developmentMode && !me.testMode) {
                me.loadHints();
            }
        });

        if (!isBryntumCom && !VersionHelper.isTestEnv && !me.developmentMode) {
            me.performVersionCheck();
        }

        if (!isDemoBrowser) {
            me.injectFavIcon();
        }

        if (!location.href.match('examples')) {
            console.warn(
                'Bryntum demo code used outside of the examples directory, the %cshared.js%c module is only intended for demos. Please remove the import to ensure that it does not affect your app',
                'font-family: monospace; font-weight: bold',
                'font-family: inherit; font-weight: normal'
            );
        }

        if (isBryntumCom && !VersionHelper.isTestEnv) {
            console.log(
                `%c TIP! %cYou can access the widget used in the demo on the console using %cwindow.${me.product.ref || me.product.name}`,
                'color: orange; font-weight: bold', 'color : initial',
                'font-family: monospace'
            );
        }
    }

    /**
     * Registers the passed URL to return the passed mocked up Fetch Response object to the
     * AjaxHelper's promise resolve function.
     * @param {String} url The url to return mock data for
     * @param {Object|Function} response A mocked up Fetch Response object which must contain
     * at least a `responseText` property, or a function to which the `url` and a `params` object
     * and the `Fetch` `options` object is passed which returns that.
     * @param {String} response.responseText The data to return.
     * @param {Boolean} [response.synchronous] resolve the Promise immediately
     * @param {Number} [response.delay=100] resolve the Promise after this number of milliseconds.
     */
    mockUrl(url, response) {
        AjaxHelper.mockUrl.apply(AjaxHelper, arguments);
    }

    injectFavIcon() {
        DomHelper.createElement({
            tag    : 'link',
            parent : document.head,
            rel    : 'icon',
            href   : '../_shared/images/favicon.png',
            sizes  : '64x64'
        });
    }

    //endregion

    //region Header with tools

    insertHeader() {
        const
            me           = this,
            { pathname } = document.location,
            pathElements = pathname.split('/').reduce((result, value) => {
                if (value && !value.endsWith('.html')) {
                    result.push(value);
                }
                return result;
            }, []),
            exampleName  = document.title.split(' - ')[1] || document.title,
            exampleId    = pathElements[pathElements.length - 1];

        let header = document.querySelector('header.demo-header');

        if (!header) {
            header = DomHelper.insertFirst(document.getElementById('container'), {
                tag       : 'header',
                className : 'demo-header'
            });
        }

        header.innerHTML = `
            <div id="title-container" class="title-container">
                <a id="title" class="title" href="${isDemoBrowser ? '#' : `../${isUmd ? 'index.umd.html' : ''}${this.rtl ? '?rtl' : ''}#example-${exampleId}`}">
                    <h1>${exampleName}</h1>
                </a>
            </div>
            <div id="tools" class="tools"></div>
        `;

        me.header = header;

        const
            tools                         = document.getElementById('tools'),
            trialButton = (isBryntumCom || me.testMode) ? new Button({
                appendTo : tools,
                id       : 'trial-button',
                text     : 'Download Trial',
                href     : `https://bryntum.com/download/?product=${me.product.name}`,
                cls      : 'b-green b-raised',
                owner    : me
            }) : null, 
            learnButton                   = !isDemoBrowser && new Button({
                ref         : 'learnButton',
                text        : 'Learn',
                cls         : 'learnButton b-transparent',
                ignoreLearn : true,
                owner       : me,
                menu        : {
                    width    : '20em',
                    autoShow : false,
                    align    : {
                        anchor : true
                    },
                    cls       : 'docsmenu',
                    title     : 'Classes used in this demo',
                    listeners : {
                        async beforeShow() {
                            if (!this.items.length) {
                                const
                                    docsPrefix                                   = isBryntumCom ? `/docs/${me.product.name}` : '../../docs',
                                    result                                       = await fetch('../_shared/data/classes.json'),
                                    publicClasses                                = await result.json(),
                                    items                                        = [{
                                        style                : 'flex-shrink : 0',
                                        type                 : 'textfield',
                                        label                : 'Filter',
                                        clearable            : true,
                                        keyStrokeChangeDelay : 300,
                                        listeners            : {
                                            change  : me.filterLearnMenu,
                                            keydown : me.onLearnFilterKeydown
                                        }
                                    }],
                                    classMeta                                    = [],
                                    typeWeight                                   = {
                                        Main    : 1,
                                        Column  : 2,
                                        Feature : 3,
                                        Widget  : 4
                                    },
                                    // weights to sort classes by products
                                    productWeight                                = {
                                        grid         : 1,
                                        scheduler    : 2,
                                        calendar     : 3,
                                        taskboard    : 3,
                                        schedulerpro : 4,
                                        gantt        : 5
                                    },
                                    { hideClassesRegExp, featuredClassesRegExp } = me;

                                for (const meta of Object.values(bryntum.usedClasses)) {
                                    const
                                        { name } = meta,
                                        // Docs app needs "/" as delimiter
                                        fullName = publicClasses[name]?.replaceAll('.', '/');

                                    if (meta.type && fullName &&
                                        // check if the showcases the class
                                        // skip unrelated classes ..to make the menu less busy
                                        (!featuredClassesRegExp ||
                                            (meta.isFeatured = fullName.match(featuredClassesRegExp)) ||
                                            !hideClassesRegExp ||
                                            !fullName.match(hideClassesRegExp))) {
                                        // fill weight to order entries properly
                                        meta.weight = productWeight[fullName.split('/')[0].toLowerCase()] || 0;

                                        // put the demo featured classes into a special section
                                        if (meta.isFeatured) {
                                            meta.type = 'Main';
                                            meta.weight += 100;
                                        }

                                        classMeta.push(meta);
                                    }
                                }

                                // Sort by:
                                // 1) type
                                // 2) to show the demo featured classes first
                                // 3) the to show the product classes ..then classes closer to the product etc...
                                // 4) by name
                                classMeta.sort((a, b) => {
                                    const
                                        aTypeWeight = typeWeight[a.type],
                                        bTypeWeight = typeWeight[b.type];

                                    return aTypeWeight > bTypeWeight ? 1
                                        : aTypeWeight < bTypeWeight ? -1
                                            : a.weight > b.weight ? -1
                                                : a.weight < b.weight ? 1
                                                    : a.name > b.name ? 1 : -1;
                                });

                                let category;

                                for (const meta of classMeta) {
                                    const
                                        {
                                            name,
                                            type
                                        }    = meta,
                                        icon = 'b-icon b-fa-' + (type === 'Main' ? 'star' : type === 'Feature' ? 'magic' : type === 'Widget' ? 'cubes' : 'columns');

                                    if (type !== category) {
                                        category = type;
                                        items.push({
                                            text : type,
                                            icon,
                                            cls  : 'b-docs-category'
                                        });
                                    }

                                    items.push({
                                        text   : name,
                                        icon   : meta.isFeatured ? 'b-icon b-fa-star' : null,
                                        href   : `${docsPrefix}/#${publicClasses[name].replaceAll('.', '/')}`,
                                        target : 'docs'
                                    });
                                }

                                this.items = items;
                            }
                        }
                    }
                },
                icon     : 'b-icon b-fa-book-open',
                appendTo : tools
            }),
            fullscreenButton              = new Button({
                ref         : 'fullscreenButton',
                id          : 'fullscreen-button',
                icon        : 'b-icon-fullscreen',
                tooltip     : 'L{Tooltip.fullscreenButton}',
                cls         : 'b-tool b-transparent',
                appendTo    : tools,
                ignoreLearn : true,
                owner       : me,
                onClick() {
                    if (Fullscreen.enabled) {
                        if (!Fullscreen.isFullscreen) {
                            Fullscreen.request(document.body);
                        }
                        else {
                            Fullscreen.exit();
                        }
                    }
                }
            }),
            codeButton                    = new Button({
                ref     : 'codeButton',
                icon    : 'b-icon-code',
                cls     : 'b-tool b-transparent b-no-monkeys',
                tooltip : {
                    html  : 'L{Tooltip.codeButton}',
                    align : 't100-b100'
                },
                preventTooltipOnTouch : true,
                appendTo              : tools,
                hidden                : isDemoBrowser,
                owner                 : me,
                ignoreLearn           : true,
                async onClick({ source }) {
                    let { codeEditor } = shared;

                    if (!codeEditor || codeEditor.collapsed) {
                        const { icon } = source;

                        // Show a spinner while waiting for it
                        if (!codeEditor) {
                            source.icon = 'b-icon-spinner';
                        }
                        codeEditor = await shared.showCodeEditor();
                        source.icon = icon;
                    }
                    else {
                        await codeEditor.collapsePanel();
                    }
                }
            }),
            infoButton                    = new Button({
                ref         : 'infoButton',
                icon        : 'b-icon-cog',
                cls         : 'b-tool b-transparent',
                ignoreLearn : true,
                menuIcon    : null,
                tooltip     : {
                    html  : 'L{Tooltip.infoButton}',
                    align : 't100-b100'
                },
                preventTooltipOnTouch : true,
                owner                 : me,
                appendTo              : tools,
                menu                  : {
                    type       : 'popup',
                    anchor     : true,
                    align      : 't100-b100',
                    cls        : 'info-popup',
                    tools      : null,
                    scrollable : {
                        y : true
                    },
                    width                  : '23em',
                    highlightReturnedFocus : false,
                    onBeforeShow() {
                        // Set up the aria description
                        this.ariaDescription = shared.description;

                        // Add Ajax-loaded items at last minute.
                        this.items = infoButton.menuItems;
                        delete this.onBeforeShow;
                    }
                }
            }),
            headerTools                   = document.getElementById('header-tools');

        Object.assign(me, { fullscreenButton, codeButton, infoButton, trialButton });

        if (headerTools) {
            Array.from(headerTools.children).forEach(child => {
                tools.insertBefore(child, infoButton);
            });
            headerTools.remove();
        }
    }

    filterLearnMenu({ source, value }) {
        source.parent.items.forEach(i => i[shouldShow(i, value) ? 'show' : 'hide']());
    }

    onLearnFilterKeydown({ event, source }) {
        if (event.key === 'Tab' && !event.shiftKey) {
            event.preventDefault();
            source.nextSibling.focus();
        }
    }

    //endregion

    //region Hints

    async initHints() {
        const
            me        = this,
            { hints } = me;

        if (!hints || me.preventHints || me.toolTips?.length > 0) {
            return;
        }

        me.toolTips = [];

        const
            missingTargets  = Object.keys(hints).filter(key => !(key && DomHelper.down(document.body, key))),
            targetsAreReady = missingTargets.length === 0;

        // if some targets are not there yet - reschedule this call
        if (!targetsAreReady) {
            if (!('retryCount' in me)) {
                me.retryCount = 0;
            }
            const
                DELAY   = 500,
                RETRIES = 10;

            if (++me.retryCount < RETRIES) {
                me.hintTimer = setTimeout(() => me.initHints(), DELAY);
                return;
            }

        }
        delete me.retryCount;

        // Hide all hints on click anywhere, it also handles touch.
        // Add it first so that it can interrupt and stop the hint showing.
        document.body.addEventListener('mousedown', me.onDocumentMouseDown, true);

        for (const [key, hint] of Object.entries(hints)) {
            const target = key && DomHelper.down(document.body, key);

            if (target) {
                const tooltipCfg = Object.assign({
                    forElement   : target,
                    scrollAction : 'hide',
                    align        : 't-b',
                    tools        : null,
                    html         : {
                        children : [hint.title ? {
                            html      : hint.title,
                            className : 'header'
                        } : null, {
                            html      : hint.content,
                            className : 'description'
                        }]
                    },
                    autoShow    : true,
                    cls         : 'b-hint',
                    textContent : true,
                    autoClose   : false
                }, hint);

                // we've just combined "title" & "content" into "html" above
                delete tooltipCfg.title;
                delete tooltipCfg.content;

                me.toolTips.push(new Tooltip(tooltipCfg));

                // The delay here essentially causes mousedown dismiss handler to not add immediately so hints stay
                // up even if there were an immediate click
                await AsyncHelper.sleep(me.toolTips.length * 500);

                // If, during the asynchronicity, interaction happened, we must escape.
                if (me.preventHints) {
                    return;
                }
            }
        }


    }



    onDocumentMouseDown(event) {
        // Allow clicking links inside hints
        if (event.target.matches('a')) {
            return;
        }
        this.cleanupHints();
    }

    cleanupHints() {
        const me = this;

        if (!me.preventHints) {
            // If hints are in the delay stage, prevent them.
            clearTimeout(me.hintTimer);

            if (me.toolTips) {
                me.toolTips.forEach(tip => tip.hide?.().then(() => tip.destroy()));
                me.toolTips.length = 0;
                me.preventHints = true;

                document.body.removeEventListener('mousedown', me.onDocumentMouseDown, true);
                //window.removeEventListener('scroll', me.onWindowScroll, true);
            }
        }
    }

    async loadHints(test = false) {
        const me = this;
        me.hints = {};
        me.hasHints = false;

        if (!me.preventHints) {
            try {
                me.hints = (await AjaxHelper.get('meta/hints.json', { parseJson : true })).parsedJson;
                me.hasHints = Boolean(Object.keys(me.hints).length);

                if (!test && !localStorage.getItem(hintKey)) {
                    // Delay a little to allow Ajax-loaded UIs to arrive so that
                    // hint selectors exist.
                    me.hintTimer = setTimeout(() => me.initHints(), 100);
                }
            }
            catch (e) {
                // Hints fetch aborted, no harm
            }
        }
        return me.hints;
    }

    //endregion

    //region Description(

    buildClassesRegExp(classes) {
        const paths = classes.map(spec => spec.path || spec.name || spec).join('|');

        return new RegExp(`^(${paths})$`);
    }

    loadDescription() {
        const
            me     = this,
            button = me.infoButton,
            url    = `${isDemoBrowser ? '_shared/browser/' : ''}app.config.json`;

        AjaxHelper.get(url, { parseJson : true }).then(response => {
            const
                appConfig      = response.parsedJson,
                currentThemeId = me.theme,
                locales        = [],
                { body }       = document;

            // App description
            me.description = appConfig.description;

            const { featured, hide } = appConfig.usedClasses || {};

            me.featuredClassesRegExp = featured && me.buildClassesRegExp(featured);
            me.hideClassesRegExp = hide && me.buildClassesRegExp(hide);

            Object.keys(me.localeManager.locales).forEach(key => {
                const
                    locale = me.localeManager.locales[key];
                locales.push({
                    value : key,
                    text  : locale.localeDesc,
                    data  : locale
                });
            });

            let localeValue = me.localeManager.locale.localeName,
                themeCombo;
            const storedLocaleValue = BrowserHelper.getLocalStorageItem('b-example-language');

            // check that stored locale is actually available among locales for this demo
            if (storedLocaleValue && locales.some(l => l.key === storedLocaleValue)) localeValue = storedLocaleValue;

            // Leave as a config on the button during app startup.
            // Items will be added just in time in onBeforeShow to speed app startup.
            const buttonMenuItems = [
                {
                    type : 'widget',
                    cls  : 'example-description',
                    html : `<div class="header">${appConfig.title}</div><div class="description">${appConfig.description}</div>`
                },
                // Do not create theme combo ONLY for non-standard theme
                ...((!themes[currentThemeId] || body.matches('.b-theme-custom')) ? [] : [themeCombo = {
                    type          : 'combo',
                    ref           : 'themeCombo',
                    label         : 'L{Theme}',
                    labelPosition : 'above',
                    editable      : false,
                    value         : currentThemeId,
                    items         : themes,
                    onAction({ value }) {
                        me.applyTheme(value);
                        button.menu.hide();
                    }
                }]),
                {
                    type          : 'combo',
                    ref           : 'localeCombo',
                    label         : 'L{Language}',
                    labelPosition : 'above',
                    editable      : false,
                    store         : {
                        data    : locales,
                        sorters : [{
                            field     : 'text',
                            ascending : true
                        }]
                    },
                    displayField : 'text',
                    valueField   : 'value',
                    value        : localeValue,
                    onAction     : ({ value }) => {
                        me.localeManager.applyLocale(value);
                        Toast.show({
                            html        : me.L('L{Locale changed}'),
                            rootElement : document.body
                        });
                        button.menu.hide();
                    }
                }
            ];

            if (!isDemoBrowser) {
                buttonMenuItems.push(...[{
                    type     : 'button',
                    ref      : 'hintButton',
                    text     : 'L{Display hints}',
                    onAction : () => {
                        button.menu.hide();
                        me.preventHints = false;
                        me.initHints();
                    }
                }, {
                    type     : 'checkbox',
                    ref      : 'hintCheck',
                    text     : 'L{Automatically}',
                    flex     : '0 1 auto',
                    tooltip  : 'L{hintCheck}',
                    checked  : !localStorage.getItem(hintKey),
                    onAction : ({ checked }) => {
                        if (checked) {
                            localStorage.removeItem(hintKey);
                        }
                        else {
                            localStorage.setItem(hintKey, true);
                        }
                    }
                }]);
            }

            button.menuItems = buttonMenuItems;

            // React to theme changes
            GlobalEvents.on({
                theme : ({ theme, prev }) => {
                    theme = theme.toLowerCase();

                    themeCombo && (themeCombo.value = theme);
                    BrowserHelper.setLocalStorageItem('b-example-theme', theme);
                    body.classList.add(`b-theme-${theme}`);
                    body.classList.remove(`b-theme-${prev}`);

                    // display after loading theme to not show initial transition from default theme
                    body.classList.remove('b-initially-hidden');
                    if (isDemoBrowser) {
                        body.style.visibility = 'visible';
                    }

                    me.prevTheme = prev;

                    me.trigger('theme', {
                        theme,
                        prev
                    });
                },
                // call before other theme listeners
                prio : 1
            });
        }, () => {
            // No info menu available without this data
            document.getElementById('container').classList.add('b-nodescription');
        });
    }

    //endregion

    //region Theme applying

    applyTheme(newThemeName, initial = false) {
        const { body } = document;

        newThemeName = newThemeName.toLowerCase();

        // only want to block transition when doing initial apply of theme
        if (initial) {
            body.classList.add('b-notransition');
        }

        return DomHelper.setTheme(newThemeName, this.getStoredThemeId(defaultTheme)).then(() => {
            // display after loading theme to not show initial transition from default theme
            body.classList.remove('b-initially-hidden');
            if (isDemoBrowser) {
                body.style.visibility = 'visible';
            }

            if (initial) {
                body.classList.add(`b-theme-${newThemeName}`);
                setTimeout(() => {
                    body.classList.remove('b-notransition');
                }, 100);
            }
        });
    }

    getStoredThemeId(defaultThemeId) {

        const
            themeId    = queryString.theme || (!this.testMode && BrowserHelper.getLocalStorageItem('b-example-theme')) || defaultThemeId,
            themeNames = {
                stockholm       : 'stockholm',
                classic         : 'classic',
                default         : 'classic',
                'classic-dark'  : 'classic-dark',
                dark            : 'classic-dark',
                'classic-light' : 'classic-light',
                light           : 'classic-light',
                material        : 'material'
            };
        return (themeId ? themeNames[themeId] : null) || defaultThemeId;
    }

    get autoApply() {
        return autoApply;
    }

    set autoApply(newValue) {
        const { widgetMap } = this.codeEditor;

        autoApply = Boolean(newValue);

        widgetMap.applyMenu.menu.widgetMap.autoApply.checked = autoApply;
        widgetMap.applyButton.hidden = autoApply;
    }

    get themeInfo() {
        return DomHelper.getThemeInfo(this.getStoredThemeId(defaultTheme));
    }

    get theme() {
        return this.themeInfo.name.toLowerCase();
    }

    // Utility method for when creating thumbs.
    // Eg: shared.fireMouseEvent('mouseover', document.querySelector('.b-task-rollup'));
    fireMouseEvent(type, target, offset = [0, 0]) {
        const
            { center } = Rectangle.from(target),
            event      = {
                clientX : center.x + offset[0],
                clientY : center.y + offset[1],
                bubbles : true
            };

        // We have begun to use pointerxxxx events, so we need both
        if (type.startsWith('mouse')) {
            target.dispatchEvent(new PointerEvent(`pointer${type.substring(5)}`, event));
        }
        target.dispatchEvent(new MouseEvent(type, event));
    }

    //endregion

    // region RootCause

    // Shared RootCause code for frameworks should be updated here scripts/templates/rootcause.ejs.js

    initRootCause() {
        const
            recordVideo       = queryString.video === '1',
            disabled          = !recordVideo && locationRe(disableRootCause).test(window.location.href),
            isRootCauseReplay = (() => {
                try {
                    const a = window.top.location.href;
                }
                catch (e) {
                    return true;
                }
                return false;
            })();

        if ((isBryntumCom || isRootCauseReplay) && !disabled && !VersionHelper.isTestEnv && !document.cookie.includes('cookie_notice_accepted=false')) {
            const
                script = document.createElement('script');

            script.async = true;
            script.crossOrigin = 'anonymous';
            script.src = 'https://app.therootcause.io/rootcause-full.js';
            script.addEventListener('load', this.startRootCause.bind(this));

            document.head.appendChild(script);
        }
    }

    startRootCause() {
        if (queryString.bugbash) {
            const date = new Date();

            // Bug bash cookie lasting 1d
            date.setTime(date.getTime() + (24 * 60 * 60 * 1000));

            document.cookie = 'bugbash=1' + '; expires=' + date.toUTCString() + '; path=/';
        }

        const
            isBugBash    = Boolean(BrowserHelper.getCookie('bugbash')),
            bugBushId    = 'd0ed295cf2ef50d15c2ce571b288ee37c3853cf8',
            appId        = (isBugBash ? bugBushId : this.product.appId) || 'unknown',
            version      = VersionHelper.getVersion(this.product.name),
            recordEvents = isBugBash || !('ontouchstart' in document.documentElement), // Skip event recording on touch devices as RC could cause lag
            recordVideo  = isBugBash || queryString.video === '1';

        if (!window.RC) {
            console.log('RootCause not initialized');
            return;
        }

        window.logger = new RC.Logger({
            captureScreenshot               : true,
            recordUserActions               : recordEvents && !locationRe(disableRootCauseActions).test(window.location.href),
            logAjaxRequests                 : true,
            applicationId                   : appId,
            maxNbrLogs                      : isBryntumCom ? 1 : 0,
            autoStart                       : isBryntumCom,
            treatFailedAjaxAsError          : true,
            treatResourceLoadFailureAsError : true,
            showFeedbackButton              : recordVideo,
            recordSessionVideo              : recordVideo,
            showIconWhileRecording          : false,
            recorderConfig                  : {
                recordScroll             : false,
                // Ignore our own auto-generated ids since they are not stable
                shouldIgnoreDomElementId : (id) => /^(b_|b-)/.test(id),
                ignoreCssClasses         : [
                    'focus',
                    'hover',
                    'dirty',
                    'selected',
                    'resizable',
                    'committing',
                    'b-active',
                    'b-sch-terminals-visible'
                ]
            },
            version,
            ignoreErrorMessageRe : /Script error|Unexpected token var|ResizeObserver/i,
            ignoreFileRe         : /^((?!bryntum).)*$/, // Ignore non-bryntum domain errors

            onBeforeLog(data) {
                // Avoid weird errors coming from the browser itself or translation plugins etc
                // '.' + 'js' to avoid cache-buster interference
                if (data.isJsError && (!data.file || !data.file.includes('.' + 'js') || data.file.includes('chrome-extension'))) {
                    return false;
                }
            },

            onErrorLogged(responseText, loggedErrorData) {
                if (loggedErrorData.isFeedback) {
                    let data;

                    try {
                        data = JSON.parse(responseText);
                    }
                    catch (e) {
                    }

                    if (data) {
                        Toast.show({
                            html        : `<h3>Thank you!</h3><p class="feedback-savedmsg">Feedback saved, big thanks for helping us improve. <a target="_blank" href="${data.link}"><i class="b-fa b-fa-link"></i>Link to session</a></p>`,
                            timeout     : 10000,
                            rootElement : document.body
                        });
                    }
                }
            }
        });

        if (recordVideo) {
            setTimeout(() => {
                window.logger.stop();
            }, maxVideoDuration);
        }

        // Abort early error listener
        window.removeEventListener('error', errorListener);

        if (earlyErrorEvent?.error) {
            window.logger.logException(earlyErrorEvent.error);
        }
    }

    // endregion

    onThumbError(e) {
        if (e.target.src.includes('thumb')) {
            e.target.style.display = 'none';
        }
    }

    // region version check
    performVersionCheck() {
        if (!window.navigator.onLine || this.testMode || BrowserHelper.isCSP) {
            return;
        }

        const lastCheck = BrowserHelper.getLocalStorageItem('b-latest-version-check-timestamp');

        // Only 1 version check every other day
        if (lastCheck && Date.now() - new Date(Number(lastCheck)) < 1000 * 60 * 60 * 24 * 2) {
            return;
        }

        BrowserHelper.setLocalStorageItem('b-latest-version-check-timestamp', Date.now());

        AjaxHelper.get(`https://bryntum.com/latest/?product=${this.product.onlineId}`, {
            parseJson   : true,
            credentials : 'omit'
        }).then(response => this.notifyIfLaterVersionExists(response)).catch(() => {});
    }

    notifyIfLaterVersionExists(response) {
        const latestVersion = response.parsedJson?.name;

        if (latestVersion && VersionHelper.checkVersion(this.product.name, latestVersion, '<')) {
            const toast = Toast.show({
                cls         : 'version-update-toast',
                html        : `<h4>Update available! <i class="b-fa b-fa-times"></i></h4>A newer version ${latestVersion} is available. Download from our <a href="https://customerzone.bryntum.com">Customer Zone</a>.`,
                rootElement : document.body,
                timeout     : 15000
            });

            // Clicking the toast snoozes it for 1w
            toast.element.addEventListener('click', () => {
                const
                    nextReminderDate = new Date().setDate(new Date().getDate() + 7);

                BrowserHelper.setLocalStorageItem('b-latest-version-check-timestamp', nextReminderDate);
            });
        }
    }

    // endregion

    //region Code Editor

    async showCodeEditor(noAnimation) {
        const codeEditor = await this.createEditor();
        await codeEditor.editorReady;
        await codeEditor.expandPanel(noAnimation ? { animation : null } : undefined);
        codeEditor.focus();
        return codeEditor;
    }

    async createEditor() {
        let { codeEditor } = this;
        if (!codeEditor) {
            codeEditor = this.codeEditor = new VanillaCodeEditor({
                mode             : 'vanilla',
                codePath         : '../_shared/browser/lib/monaco-editor',
                appendTo         : document.body,
                // Needs to be owned by this class so that it does not get destroyed when
                // a syntax error causes widget destruction
                owner            : this,
                preferredSources : [
                    /app.*\.js/
                ]
            });
            Widget.disableThrow = true;
            await codeEditor.initialLoadCode();
        }
        return codeEditor;
    }

    //endregion
}

/**
 * VanillaCodeEditor extends DemoCodeEditor and implements `applyChanges` method to enable code editing.
 */
class VanillaCodeEditor extends DemoCodeEditor {

    static $name = 'VanillaCodeEditor';

    static configurable = {

        tbar : {
            items : {
                applyButton : {
                    type     : 'button',
                    text     : 'L{CodeEditor.apply}',
                    icon     : 'b-icon b-icon-sync',
                    disabled : true,
                    onAction : 'up.applyChanges',
                    hidden   : autoApply
                },
                applyMenu : {
                    cls      : 'b-transparent',
                    icon     : 'b-icon-cog',
                    menuIcon : null,
                    menu     : {
                        items : {
                            autoApply : {
                                text    : 'L{CodeEditor.autoApply}',
                                checked : autoApply,
                                onItem  : 'up.onAutoApplyAction'
                            }
                        }
                    }
                }
            }
        },

        tools : {
            download : {
                cls     : 'b-icon b-icon-download',
                href    : '#',
                tooltip : 'L{CodeEditor.downloadCode}'
            }
        }
    };

    construct(config = {}) {
        super.construct(...arguments);
        // Need at least 700ms to allow for syntax checking.
        this.update = this.buffer('applyChanges', isBryntumCom ? 1500 : 700);
    }

    onAutoApplyAction({ item }) {
        const { checked } = item;

        this.widgetMap.applyButton.hidden = checked;

        // Save choice
        BrowserHelper.setLocalStorageItem('b-example-autoApply', checked);

        if (checked) {
            this.applyChanges();
        }
    }

    applyChanges() {
        if (this.readOnly) {
            return;
        }

        const
            me           = this,
            errorMarkers = me.monacoInstance.editor.getModelMarkers({});

        document.body.classList.remove('b-code-changes-pending');

        // Do not execute code if there are syntax errors
        if (errorMarkers.some(m => m.severity > 1)) {
            me.element.classList.add('invalid');
            me.status = `Syntax errors`;
            return;
        }

        me.element.classList.remove('invalid');
        me.status = 'Idle';

        // Add a warning note to investigators of bugs where demo code was modified
        if (globalThis.logger?.active && !me.addedCodeChangeTag) {
            globalThis.logger.addTag('Code changed', 'true');
            me.addedCodeChangeTag = true;
        }

        switch (me.fileExt) {
            case 'js':
                me.updateJS();
                break;

            case 'css':
                me.updateCSS();
                break;
        }
        me.widgetMap.applyButton.disable();

        me.updateDownloadLink();
    }

    updateCSS() {
        const
            me = this;

        if (!me.cssElement) {
            me.cssElement = DomHelper.createElement({
                parent : document.head,
                tag    : 'style',
                type   : 'text/css'
            });
        }

        me.codeCache[me.filename] = me.cssElement.innerHTML = me.codeModel.getValue();
    }

    async updateJS() {
        const
            me               = this,
            { shared }       = globalThis,
            code             = me.codeModel.getValue() + '\nexport default null;\n',
            // Elements added by demo code
            renderedElements = new Set(document.querySelectorAll('[data-app-element=true]')),
            // Widgets added by demo code
            renderedWidgets  = new Set();

        shared.cleanupHints();

        me.codeCache[me.filename] = me.codeModel.getValue();

        // Store all current uncontained widgets to be able to cleanup on import fail. If the import fails because of a
        // syntax error some code might have executed successfully and we might get unwanted widgets rendered
        DomHelper.forEachSelector(document.body, '.b-widget.b-outer', element => {
            const widget = Widget.fromElement(element, 'widget');

            if (widget !== me && !widget.closest(w => w.owner === shared)) {
                renderedWidgets.add(widget);

                // Allow existing outer widgets to be crushed by the incoming outer widgets so that
                // calculations based on height will be correct. If the incoming code fails, and no
                // widgets are incoming, they will not be crushed.
                if (!widget.element.classList.contains('demo-header')) {
                    DomHelper.applyStyle(widget.element, {
                        flex      : '1 1 0',
                        minHeight : 0
                    });
                }
            }
        });

        try {
            me.status = '<i class="b-icon b-icon-spinner"></i>Applying changes';

            // Keeping comment out code around in case we need it to later on support multi module editing
            // // Post to store in backend session
            // const response = await AjaxHelper.post(`../_shared/module.php?file=${me.filename}`, code, { parseJson : true });
            //
            // // Safari doesn't send cookies in import requests, so we extract it and
            // // pass it as part of the URL.
            // if (!me.phpSessionId) {
            //     me.phpSessionId = /PHPSESSID=([^;]+)/.exec(document.cookie)[1];
            // }
            //
            // if (response.parsedJson.success) {

            const
                imports   = code.match(/import .*/gm),
                pathParts = document.location.pathname.split('/'),
                base      = `${document.location.protocol}//${document.location.host}`;

            let rewrittenCode = code;

            // Rewrite relative imports as absolute, to work with createObjectURL approach below

            imports?.forEach(imp => {
                const
                    parts = imp.split('../');
                if (parts.length) {
                    const
                        // ../_shared needs Grid/examples, while ../../lib needs Grid/
                        absolute  = pathParts.slice().splice(0, pathParts.length - parts.length).join('/'),
                        // import xx from 'http://lh/Grid/lib...'
                        statement = `${parts[0]}${base}${absolute}/${parts[parts.length - 1]}`;

                    rewrittenCode = rewrittenCode.replace(imp, statement);
                }
            });

            // Retrieve module from object url. Wrapped in eval() to hide it from FF, it refuses to load otherwise
            const objectUrl = URL.createObjectURL(new Blob([rewrittenCode], { type : 'text/javascript' }));

            await eval(`import(objectUrl)`); // eslint-disable-line no-eval

            URL.revokeObjectURL(objectUrl);

            DomHelper.removeEachSelector(document, '#tools > .remove-widget');

            me.widgetMap.applyButton.disable();

            const projects = [];
            // Destroy pre-existing demo tools, grids etc. after the import, to lessen flickering
            for (const widget of renderedWidgets) {
                if (!widget.isDestroyed && widget.owner !== shared) {
                    const { project } = widget;

                    // Destroy project (possibly created standalone), might be loading or syncing on timeout
                    if (project && !project.isDestroyed) {
                        widget.element.classList.add('b-hide-display');
                        // When sharing an eventStore, it gets chained, but we can still be using the same assignment
                        // store, which might have gotten destroyed by the original project. Not sure it is a "real"
                        // issue, handling it here
                        if (!project.assignmentStore.isDestroyed) {
                            await project.commitAsync();
                        }
                        projects.push(project);
                    }

                    widget.destroy();
                }
            }

            for (const project of projects) {
                project.destroy?.();
            }

            // Destroy any additional elements added by the demo
            renderedElements.forEach(element => element.remove());

            // If we have gotten this far the code is valid
            me.element.classList.remove('invalid');
            me.status = 'Idle';
            // }
        }
        catch (e) {
            // Exception, either some network problem or invalid code
            me.element.classList.add('invalid');
            me.status = e.message;

            if (!VersionHelper.isTestEnv) {
                console.warn(e.message);
            }

            // Remove any widgets created by the failed import (might have successfully added some)
            DomHelper.forEachSelector(document.body, '.b-widget.b-outer', element => {
                const widget = Widget.fromElement(element);
                // Only care about top level components
                if (widget && !widget.isDestroyed && !widget.owner && !renderedWidgets.has(widget)) {
                    try {
                        widget.destroy();
                    }
                    catch (e) {
                        // We might be in a case where a misconfigured Widget throws an exception mid-setup
                    }
                }
            });
            // Restore previous widget set to visibility
            renderedWidgets.forEach(widget => {
                if (!widget.element.classList.contains('demo-header')) {
                    DomHelper.applyStyle(widget.element, {
                        flex      : '',
                        minHeight : '10px'
                    });
                }
            });
        }
    }

    updateDownloadLink() {
        const downloadLink = this.downloadLink || (this.downloadLink = this.tools.download.element);

        if (this.isFramework) {
            this.tools.download.hidden = true;
        }
        else {
            downloadLink.download = this.filename;
            downloadLink.href = `data:text/${this.filename.endsWith('.css') ? 'css' : 'javascript'};charset=utf-8,${escape(this.codeModel.getValue())}`;
        }
    }

    async loadCode(filename) {
        await super.loadCode(filename);
        const
            me                   = this,
            { widgetMap, model } = me;

        model.onDidChangeContent(() => {
            if (me.widgetMap.applyMenu.menu.widgetMap.autoApply.checked) {
                document.body.classList.add('b-code-changes-pending');
                me.update();
            }
            else {
                widgetMap.applyButton.enable();
            }
        });

        me.updateDownloadLink();
    }

    toggleReadOnly() {
        super.toggleReadOnly();
        this.widgetMap.applyMenu.hidden = this.isReadOnly;
    }

}

// Make debugging / fiddling easier by exposing instance reference on the window object
document.addEventListener('DOMContentLoaded', () => {
    ['grid', 'scheduler', 'schedulerPro', 'gantt', 'calendar', 'taskboard', 'histogram', 'treegrid'].forEach(productId => {
        if (!window[productId]?.isWidget) {
            Object.defineProperties(window, {
                [productId] : {
                    get() {
                        productId = productId.toLowerCase();
                        return bryntum.query(productId, true);
                    }
                }
            });
        }
    });

    // Show code editor
    if (queryString.code) {
        shared.showCodeEditor();
    }
});

const shared = new Shared();

// ugly, but needed for bundled demo browser to work
window.shared = shared;

// For banner maker font-size zooming
window.addEventListener('message', ({ data }) => {
    let message;

    if (data) {
        try {
            message = JSON.parse(data);
        }
        catch (e) {
        }

        if (message?.style) {
            const container = document.getElementById('container');
            container && DomHelper.applyStyle(container, message.style);
        }
    }
});

export default shared;
