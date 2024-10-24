import Store from '../../../lib/Core/data/Store.js';
import AjaxHelper from '../../../lib/Core/helper/AjaxHelper.js';
import BrowserHelper from '../../../lib/Core/helper/BrowserHelper.js';
import DomSync from '../../../lib/Core/helper/DomSync.js';
import DomHelper from '../../../lib/Core/helper/DomHelper.js';
import EventHelper from '../../../lib/Core/helper/EventHelper.js';
import Toolbar from '../../../lib/Core/widget/Toolbar.js';
import '../../../lib/Core/widget/FilterField.js';
import Popup from '../../../lib/Core/widget/Popup.js';
import Widget from '../../../lib/Core/widget/Widget.js';
import GlobalEvents from '../../../lib/Core/GlobalEvents.js';
import VersionHelper from '../../../lib/Core/helper/VersionHelper.js';
import FunctionHelper from '../../../lib/Core/helper/FunctionHelper.js';

const groupPaths = {
    'Angular examples'         : 'frameworks/angular',
    'Integration/Ionic'        : 'frameworks/ionic',
    'React examples'           : 'frameworks/react',
    'React + Next.js examples' : 'frameworks/react-nextjs',
    'React + Vite examples'    : 'frameworks/react-vite',
    'Vue 3 examples'           : 'frameworks/vue-3',
    'Vue 2 examples'           : 'frameworks/vue-2',
    'Vue 3 + Vite examples'    : 'frameworks/vue-3-vite'
};

class ExamplesApp {
    constructor() {
        const me = this;

        // For testing purposes
        me.DomHelper = DomHelper;

        me.rtl = BrowserHelper.queryString.rtl != null;
        me.product = window.bryntum.product;
        const
            version         = VersionHelper.getVersion(me.product.name),
            groupOrder      = window.groupOrder || {
                Pro                 : 0,
                'Integration/Pro'   : 1,
                Basic               : 2,
                Intermediate        : 3,
                Advanced            : 4,
                Integration         : 5,
                'Integration/Ionic' : 6
            },
            examples        = (window.examples || []).map(example => ({
                fullFolder : me.addTrailingSlash(me.exampleFolder(example)),
                id         : me.exampleId(example),
                ...example
            })),
            storageName     = name => `bryntum-${me.product.name}-demo-${name}`,
            saveToStorage   = (name, value) => {
                try {
                    sessionStorage.setItem(storageName(name), value);
                }
                catch (e) {}
            },
            loadFromStorage = name => {
                try {
                    return sessionStorage.getItem(storageName(name));
                }
                catch (e) {}
            },
            framework       = BrowserHelper.queryString.framework || BrowserHelper.getLocalStorageItem('bryntum-framework') || 'js',
            store           = me.examplesStore = new Store({
                data   : examples,
                fields : [
                    'folder',
                    'rootFolder',
                    'fullFolder',
                    'group',
                    'title',
                    'overlay',
                    'version',
                    'build',
                    'since',
                    'offline',
                    'ie',
                    'edge',
                    'id',
                    'updated',
                    'globalUrl',
                    {
                        name         : 'tab',
                        defaultValue : 'js'
                    }
                ],
                groupers : [
                    {
                        field : 'group',
                        fn    : (a, b) => groupOrder[a.group] - groupOrder[b.group]
                    }
                ],
                listeners : {
                    change() {
                        if (me.rendered) {
                            me.refresh();
                        }
                    },
                    thisObj : me
                }
            }),
            browserEl       = document.getElementById('browser');

        me.exampleStore = store;
        me.currentTipLoadPromiseByURL = {};
        me.testMode = BrowserHelper.queryString.test != null;

        // Safari lags in CSS support, it needs special CSS
        if (BrowserHelper.isSafari) {
            browserEl.classList.add('b-safari');
        }

        // save scroll position
        me.beforeLoadScrollPos = browserEl.scrollTop;

        // remove prerendered examples
        me.examplesContainerEl = document.getElementById('scroller');
        me.examplesContainerEl.innerHTML = '';

        EventHelper.on({
            scroll : {
                handler() {
                    const topElement = document.elementFromPoint(100, 150);
                    jumpTo.value = topElement?.dataset?.group ?? null;
                },
                element   : browserEl,
                throttled : 250
            },
            keydown : {
                handler(e) {
                    // Hook CTRL/F to find
                    if (e.key === 'f' && e.ctrlKey) {
                        e.preventDefault();
                        e.stopImmediatePropagation();
                        toolbar.widgetMap.filterField.focus();
                        toolbar.widgetMap.filterField.selectAll();
                    }
                },
                element : document.body
            }
        });

        document.getElementById('title').innerHTML = `${me.product.fullName} ${version}`;

        GlobalEvents.on({
            theme() {
                if (me.rendered) {
                    me.refresh();
                }
            }
        });

        me.isOnline = BrowserHelper.isBryntumOnline('online');
        me.buildTip = me.isOnline ? 'This demo is not viewable online, but included when you download the trial. ' : 'This demo needs to be built before it can be viewed. ';

        const toolbar = me.toolbar = new Toolbar({
            adopt : 'toolbar',

            // Handled by media queries hiding elements
            overflow : null,

            items : {
                framework : {
                    type        : 'buttongroup',
                    cls         : 'framework-selector',
                    toggleGroup : true,
                    defaults    : {
                        cls : 'framework-tab'
                    },
                    items : {
                        js : {
                            pressed : framework === 'js',
                            icon    : 'js',
                            tooltip : {
                                align : 't-b',
                                html  : 'Show JavaScript examples'
                            }
                        },
                        react : {
                            pressed : framework === 'react',
                            icon    : 'react',
                            tooltip : {
                                align : 't-b',
                                html  : 'Show React examples'
                            }
                        },
                        vue : {
                            pressed : framework === 'vue',
                            icon    : 'vue',
                            tooltip : {
                                align : 't-b',
                                html  : 'Show Vue examples'
                            }
                        },
                        angular : {
                            pressed : framework === 'angular',
                            icon    : 'angular',
                            tooltip : {
                                align : 't-b',
                                html  : 'Show Angular examples'
                            }
                        }
                    },
                    onToggle({ source, pressed }) {
                        if (pressed) {
                            me.filterDemos(source.ref);
                        }
                    }
                },
                filterField : {
                    type       : 'filterfield',
                    width      : '17em',
                    spellCheck : false,
                    store,
                    filterFunction(record, value) {
                        // Check if all words in value exist in example title
                        return value?.toLowerCase().split(' ')
                            .every(word => ['title', 'version', 'folder']
                                .some(param => record[param]?.toLowerCase().includes(word))
                            );
                    },
                    placeholder : 'Type to filter',
                    triggers    : {
                        filter : {
                            cls   : 'b-fa b-fa-filter',
                            align : 'start'
                        }
                    },
                    listeners : {
                        change({ value, userAction }) {
                            saveToStorage('filter', value);

                            if (userAction && !VersionHelper.isTestEnv && me.isOnline && value.length > 3) {
                                me.logSearch(value);
                            }
                        }
                    }
                },
                jumpTo : {
                    type     : 'combo',
                    width    : me.product.jumpWidth || '15em',
                    triggers : {
                        list : {
                            cls   : 'b-fa b-fa-list',
                            align : 'start'
                        }
                    },
                    editable                : false,
                    placeholder             : 'Jump to',
                    highlightExternalChange : false,
                    onSelect({
                        record,
                        userAction
                    }) {
                        if (userAction && record) {
                            if (record.id === 'top') {
                                me.scrollToElement(document.querySelector('#top'));
                                jumpTo.value = null;
                            }
                            else {
                                me.scrollToElement(document.querySelector(`a[data-group="${record.text}"]`));
                            }
                        }
                    }
                },
                separator     : '->',
                upgradeButton : {
                    id   : 'upgrade-button',
                    type : 'button',
                    text : 'Upgrade guide',
                    icon : 'b-fa-book',
                    href : '../docs/#upgrade-guide'
                },
                docsButton : {
                    id   : 'docs-button',
                    type : 'button',
                    text : 'Documentation',
                    icon : 'b-fa-book-open',
                    href : '../docs/'
                }
            }
        });

        const {
            filterField,
            jumpTo
        } = me.toolbar.widgetMap;

        me.jumpTo = jumpTo;

        if (location.search.match('prerender')) {
            me.embedDescriptions().then(me.render.bind(me));
        }
        else {
            me.render();
        }

        if (!me.testMode) {
            const storedFilter = loadFromStorage('filter');
            storedFilter && (filterField.value = storedFilter);
        }

        me.examplesContainerEl.addEventListener('focusin', me.onFocusIn.bind(me));

        me.logSearch = FunctionHelper.createBuffered(me.logSearch.bind(me), 1000);

        // If hash is provided, demos are filtered in scrollToLocationHash()
        if (!window.location.hash) {
            me.filterDemos(framework);
        }
    }

    filterDemos(framework) {
        this.exampleStore.filter({
            id       : 'framework-filter',
            property : 'tab',
            operator : '=',
            value    : framework
        });
        BrowserHelper.setLocalStorageItem('bryntum-framework', framework);
        this.jumpTo.items = [
            {
                id   : 'top',
                text : 'Top'
            }
        ].concat(
            this.exampleStore.groupRecords.map(r => ({
                id   : r.id,
                text : r.meta.groupRowFor
            }))
        );

        this.jumpTo.hidden = framework !== 'js';
    }

    logSearch(value) {
        fetch(`/examplesearchlog.php?phrase=${encodeURIComponent(value)}&product_id=${encodeURIComponent(this.product.name)}&nohits=${this.exampleStore.count === 0 ? '1' : ''}`).catch(e => {});
    }

    onFocusIn({ target }) {
        if (target?.id?.startsWith('b-example')) {
            this.exampleElements.forEach(example => example.classList[example === target ? 'add' : 'remove']('b-focused'));
            window.location.hash = `#${target?.id.replace(/^b-/, '')}`;
        }
    }

    scrollToLocationHash() {
        const
            me       = this,
            { hash } = window.location;
        // To prevent browser built-in scroll by location hash we use example and header ids with `b-` prefix
        if (hash) {
            // Select examples page
            const buttons = me.toolbar.widgetMap.framework.widgetMap;
            let button, match;
            if ((match = /-frameworks-(\w+)/.exec(hash))) {
                button = buttons[match[1]];
            }
            else {
                button = buttons.js;
            }

            if (button) {
                button.pressed = true;
                me.filterDemos(button.ref);
            }

            const element = document.getElementById(`b-${hash.split('#').pop()}`);
            if (element) {
                me.scrollToElement(element);
                element.classList.add('b-focused');
                element.focus();
            }
        }
        // If no hash, and user has scrolled while loading, scroll to saved pos
        else if (me.beforeLoadScrollTop > 0) {
            document.getElementById('browser').scrollTop = me.beforeLoadScrollPos;
        }
    }

    scrollToElement(element) {
        if (element) {
            element.scrollIntoView(!VersionHelper.isTestEnv && { behavior : 'smooth' });
        }
    }

    getDomConfig() {
        const
            me             = this,
            // Use the getter which relies on DomHelper.themeInfo getter which creates a DOM element and extracts theme name from it,
            // otherwise switching between themes will not change the examples preview pictures.
            { theme }      = window.shared,
            productVersion = VersionHelper.getVersion(me.product.name),
            compareVersion = version => version && productVersion.startsWith(version.match(/^(\d+\.\d+)/)[1]),
            configs        = [];

        me.examplesStore.records.forEach(example => {
            if (example.isSpecialRow) {
                const group = example.meta.groupRowFor;

                let html = group;

                if (groupPaths[group]) {
                    const
                        tip   = me.isOnline ? 'Path in distribution after download' : 'Click to view files in the folder if local web server is configured to allow directory listing',
                        title = me.isOnline ? '' : 'Path in distribution';

                    html += `
                        <a ${!me.isOnline ? `href="${groupPaths[group]}" target="_blank"` : ''}>
                            <div class="group-path" data-btip-title="${title}" data-btip="${tip}"><i class="b-fa b-fa-folder"></i>examples/${groupPaths[group]}</div>
                        </a>
                    `;
                }

                configs.push(
                    {
                        tag       : 'h2',
                        id        : `b-group-${group.replace(/ /gm, '-').toLowerCase()}`,
                        className : {
                            'group-header' : 1,
                            [group]        : 1
                        },
                        dataset : {
                            syncId : `header-${group}`,
                            group
                        },
                        html
                    });
            }
            else {
                // Show build popup for examples marked as offline and for those who need building when demo browser is offline
                const
                    isSF     = example.folder === 'salesforce',
                    hasPopup = isSF || (example.build && !me.isOnline) || example.offline,
                    id       = example.id,
                    url      = isSF ? example.globalUrl : me.fixRTL(example.fullFolder);

                configs.push({
                    tag       : 'a',
                    className : {
                        example : 1,
                        new     : compareVersion(example.since),
                        updated : compareVersion(example.updated),
                        offline : example.offline
                    },
                    id,
                    draggable : false,
                    href      : example.offline ? undefined : url,
                    target    : example.isSF ? '_blank' : undefined,
                    dataset   : {
                        linkText : hasPopup && me.exampleLinkText(example),
                        linkUrl  : hasPopup && url,
                        external : isSF,
                        syncId   : id,
                        group    : example.group
                    },
                    children : [
                        {
                            className : 'image',
                            children  : [
                                {
                                    tag       : 'img',
                                    draggable : false,
                                    // enable image lazy loading. we don't really need the image from the invisible area
                                    // https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading#images_and_iframes
                                    loading   : 'lazy',
                                    src       : this.exampleThumbnail(example, theme),
                                    alt       : example.tooltip || example.title || '',
                                    dataset   : {
                                        group : example.group
                                    }
                                },
                                example.overlay ? {
                                    className : `overlay ${example.overlay}`
                                } : null
                            ]
                        },
                        {
                            tag       : 'label',
                            className : 'title',
                            dataset   : {
                                group : example.group
                            },
                            children : [
                                {
                                    className : 'text',
                                    children  : [
                                        example.title,
                                        {
                                            tag       : 'i',
                                            className : {
                                                tooltip            : 1,
                                                'b-fa'             : 1,
                                                'b-fa-cog build'   : hasPopup,
                                                'b-fa-info-circle' : !hasPopup
                                            }
                                        }
                                    ]
                                },
                                example.version && {
                                    className : 'version',
                                    text      : example.version
                                }
                            ]
                        }
                    ]
                });
            }
        });

        return configs;
    }

    refresh() {
        DomSync.sync({
            targetElement : this.examplesContainerEl,
            domConfig     : {
                onlyChildren : true,
                children     : this.getDomConfig()
            },
            releaseThreshold : 0,
            syncIdField      : 'syncId',
            strict           : true
        });

        this.exampleElements = document.querySelectorAll('.example');
    }

    render() {
        const me = this;

        me.refresh();

        // A singleton tooltip which displays example info on hover of (i) icons.
        Widget.attachTooltip(me.examplesContainerEl, {
            forSelector  : 'i.tooltip',
            header       : true,
            scrollAction : 'realign',
            textContent  : true,
            maxWidth     : '18em',
            cls          : 'b-example-tooltip',
            getHtml      : async({ tip }) => {
                const activeTarget = tip.activeTarget;

                if (activeTarget.dataset.tooltip) {
                    tip.titleElement.innerHTML = activeTarget.dataset.tooltipTitle;
                    return activeTarget.dataset.tooltip;
                }

                const
                    linkNode = activeTarget.closest('a'),
                    url      = `${linkNode.getAttribute('href') || linkNode.dataset.linkUrl}/app.config.json`;

                // Cancel all ongoing ajax loads (except for the URL we are interested in)
                // before fetching tip content
                for (const u in me.currentTipLoadPromiseByURL) {
                    if (u !== url) {
                        me.currentTipLoadPromiseByURL[u].abort();
                    }
                }

                let html = '';

                // if we don't have ongoing requests to the URL
                if (!me.currentTipLoadPromiseByURL[url]) {
                    try {
                        const
                            requestPromise = me.currentTipLoadPromiseByURL[url] = AjaxHelper.get(url, { parseJson : true }),
                            response       = await requestPromise,
                            json           = response.parsedJson;

                        html = activeTarget.dataset.tooltip = json.description.replace(/[\n\r]/g, '') +
                            ((/build/.test(activeTarget.className)) ? `<br><b>${me.buildTip}</b>` : '');

                        activeTarget.dataset.tooltipTitle = tip.titleElement.innerHTML = json.title.replace(/[\n\r]/g, '');
                    }
                    catch (e) {
                        // swallow fetch exceptions for tooltip content
                    }

                    delete me.currentTipLoadPromiseByURL[url];

                    return html;
                }
            }
        });

        document.body.addEventListener('error', me.onThumbError.bind(me), true);

        EventHelper.on({
            element : me.examplesContainerEl,
            click(event) {
                const el = event.target.closest('[data-link-url]');

                if (el.dataset.external === 'true') {
                    new Popup({
                        forElement : el,
                        maxWidth   : '20em',
                        cls        : 'b-demo-unavailable',
                        header     : 'External link',
                        html       : `This link leads to external URL. To log in use these credentials:
                                    <div><br/>Login: <b>demouser@bryntum.com</b></div>
                                    <div>Password: <b>BryntumSalesforce3</b></div><br/>
                                    <a href="${el.dataset.linkUrl}" target="_blank"><b>Click here to proceed to the extenal example</b></a></div>`,
                        closeAction  : 'destroy',
                        width        : el.getBoundingClientRect().width,
                        anchor       : true,
                        scrollAction : 'realign'
                    });
                }
                else {
                    new Popup({
                        forElement : el,
                        maxWidth   : '18em',
                        cls        : 'b-demo-unavailable',
                        header     : '<i class="b-fa b-fa-cog"></i> ' + (me.isOnline ? 'Download needed' : 'Needs building'),
                        html       : me.buildTip + `The demo can be found in distribution folder: <div class="tip-folder"><i class="b-fa b-fa-folder-open"></i><b>` +
                            (!me.isOnline ? `<a href="${el.dataset.linkUrl}">${el.dataset.linkText}</a>` : el.dataset.linkText) + '</b></div>',
                        closeAction  : 'destroy',
                        width        : el.getBoundingClientRect().width,
                        anchor       : true,
                        scrollAction : 'realign'
                    });
                }
                event.preventDefault();
            },
            delegate : '[data-link-url]'
        });

        EventHelper.on({
            element : me.examplesContainerEl,
            click(event) {
                // To be able to select example name, need to make the text do not work as a link
                if (window.getSelection().toString().length) {
                    event.preventDefault();
                }
            },
            delegate : 'a.example label'
        });



        me.rendered = true;
        me.scrollToLocationHash();
    }

    embedDescriptions() {
        return new Promise((resolve) => {
            const promises = [];
            this.examplesStore.forEach(example => {
                promises.push(
                    AjaxHelper.get(this.exampleConfig(example), { parseJson : true }).then(response => {
                        const json = response.parsedJson;
                        if (json) {
                            example.tooltip = json.title + ' - ' +
                                json.description.replace(/[\n\r]/g, ' ').replace(/"/g, '\'');
                        }
                    })
                );
            });
            Promise.all(promises).then(resolve);
        });
    }

    onThumbError(e) {
        if (e.target?.src?.includes('thumb')) {
            e.target.style.display = 'none';
        }
    }

    addTrailingSlash(folder) {
        return folder.endsWith('/') ? folder : `${folder}/`;
    }

    fixRTL(folder) {
        return this.rtl ? `${folder}?rtl` : folder;
    }

    exampleFolder(example, defaultRoot = '') {
        return `${example.rootFolder || defaultRoot}${example.folder}`;
    };

    exampleConfig(example) {
        return `${example.fullFolder}app.config.json`;
    }

    exampleId(example) {
        return `b-example-${this.exampleFolder(example).replace(/\.\.\//gm, '').replace(/\//gm, '-')}`;
    }

    exampleLinkText(example) {
        return this.exampleFolder(example, 'examples/').replace(/\.\.\//gm, '').replace(/\//gm, '/<wbr>');
    }

    exampleThumbnail(example, theme) {
        return `${example.fullFolder}meta/thumb.${theme.toLowerCase()}.png`;
    }

}

window.demoBrowser = new ExamplesApp();
