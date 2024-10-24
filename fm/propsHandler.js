export default function getFmProps() {
    let props = '##PROPSPLACEHOLDER##'
    let metaDevUrl = '';
    try {
        metaDevUrl = document.querySelector('meta[dev-url]').getAttribute('dev-url');
    }catch(e) {
        console.log('No dev-url meta tag found');
    }

    if ((import.meta.env.VITE && import.meta.env.DEV) || window.location.href.includes(metaDevUrl)) {
        // We are in development mode
        const urlParams = new URLSearchParams(window.location.search);
        props = JSON.parse(urlParams.get('props') || '{}');
    } else {
        // We are in production mode try getting the merged props

        if (props === "##PROPSPLACEHOLDER##") { // Use double quotes here so we can use single quotes for the merge
            props = {}; // Then we have not provided any props
        } else {
            if (typeof props !== 'object') {
                console.log(props);;
                alert('An error occurred while initiating the layout:');
            }
        }
    }

    window.__PROPS__ = props;
    return props;
}