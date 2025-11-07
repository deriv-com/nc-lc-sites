/**
 * Dynamically adds a <link> element to the document's <head>.
 * This helper is used for the simple preconnect links.
 */
function addLinkElement(rel, href, crossorigin = null) {
    const link = document.createElement('link');
    link.rel = rel;
    link.href = href;

    if (crossorigin) {
        link.crossOrigin = crossorigin;
    }
    document.head.appendChild(link);
}

// 1. Preconnect to the domains (this part remains the same).
addLinkElement('preconnect', 'https://fonts.googleapis.com');
addLinkElement('preconnect', 'https://fonts.gstatic.com', 'anonymous');

// 2. Preload the critical font file directly (this part remains the same).
const fontLink = document.createElement('link');
fontLink.rel = 'preload';
fontLink.as = 'font';
fontLink.href = 'https://fonts.gstatic.com/s/inter/v19/UcCo3FwrK3iLTcviYwYZ8UA3.woff2';
fontLink.crossOrigin = 'anonymous';
document.head.appendChild(fontLink);


// 3. Asynchronously load the stylesheet to make it NON-RENDER-BLOCKING.
const stylesheetUrl = 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap';

// Create the link tag to preload the CSS
const stylesheetLink = document.createElement('link');
stylesheetLink.rel = 'preload';
stylesheetLink.as = 'style';
stylesheetLink.href = stylesheetUrl;

// Use the onload event to apply the stylesheet once it's loaded
stylesheetLink.onload = function() {
    stylesheetLink.onload = null; // Prevents the event from re-firing.
    stylesheetLink.rel = 'stylesheet'; // Switch rel to apply the styles.
};

document.head.appendChild(stylesheetLink);

// 4. Add a fallback for users with JavaScript disabled.
const noscript = document.createElement('noscript');
const fallbackLink = document.createElement('link');
fallbackLink.rel = 'stylesheet';
fallbackLink.href = stylesheetUrl;
noscript.appendChild(fallbackLink);
document.head.appendChild(noscript);