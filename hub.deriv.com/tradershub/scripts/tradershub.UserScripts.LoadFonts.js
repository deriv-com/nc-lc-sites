function addLinkElement(rel, href, crossorigin = null, as = null) {
    const link = document.createElement('link');
    link.rel = rel;
    link.href = href;

    if (crossorigin) {
        link.crossOrigin = crossorigin;
    }

    if (as) {
        link.as = as;
    }

    document.head.appendChild(link);
}

addLinkElement('preconnect', 'https://fonts.googleapis.com');
addLinkElement('preconnect', 'https://fonts.gstatic.com', 'anonymous');

// Preload the stylesheet
addLinkElement('preload', 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;700&display=swap', null, 'style');

// Append the stylesheet after preloading
addLinkElement('stylesheet', 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;700&display=swap');