< !DOCTYPE html > < !--Last Published: Fri Jan 31 2025 03: 23: 16 GMT + 0000(Coordinated Universal Time) -- > < html data - wf - domain = "%%PUBLISH_URL_REPLACEMENT%%"
data - wf - page = "66585fe0e1dc7e70cc75d4b9"
data - wf - site = "66585fe0e1dc7e70cc75d440"
lang = "en"
data - wf - locale = "en" > < head > < meta charset = "utf-8" / > < title > Not Found < /title><link rel="alternate" hrefLang="x-default" href="https:/ / deriv.com / 404 "/><link rel="
alternate " hrefLang="
en " href="
https: //deriv.com/404"/><link rel="alternate" hrefLang="fr" href="https://deriv.com/fr/404"/><link rel="alternate" hrefLang="ar" href="https://deriv.com/ar/404"/><link rel="alternate" hrefLang="pt" href="https://deriv.com/pt/404"/><link rel="alternate" hrefLang="es" href="https://deriv.com/es/404"/><link rel="alternate" hrefLang="ru" href="https://deriv.com/ru/404"/><link rel="alternate" hrefLang="vi" href="https://deriv.com/vi/404"/><link rel="alternate" hrefLang="bn" href="https://deriv.com/bn/404"/><link rel="alternate" hrefLang="si" href="https://deriv.com/si/404"/><link rel="alternate" hrefLang="tr" href="https://deriv.com/tr/404"/><link rel="alternate" hrefLang="sw" href="https://deriv.com/sw/404"/><link rel="alternate" hrefLang="zh-CN" href="https://deriv.com/zh-cn/404"/><link rel="alternate" hrefLang="zh-TW" href="https://deriv.com/zh-tw/404"/><link rel="alternate" hrefLang="ko" href="https://deriv.com/ko/404"/><link rel="alternate" hrefLang="it" href="https://deriv.com/it/404"/><link rel="alternate" hrefLang="de" href="https://deriv.com/de/404"/><link rel="alternate" hrefLang="pl" href="https://deriv.com/pl/404"/><link rel="alternate" hrefLang="uz" href="https://deriv.com/uz/404"/><meta content="Not Found" property="og:title"/><meta content="Not Found" property="twitter:title"/><meta content="width=device-width, initial-scale=1" name="viewport"/><link href="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/css/deriv-staged-2dfc316890fbbd8e3ed6d351bd.de987a535.min.css" rel="stylesheet" type="text/css"/><script type="text/javascript">!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);</script><link href="https://cdn.prod.website-files.com/65c76c6482e68a9e09d9b765/65c773033acbd57cd18cc4c8_deriv_favicon_32.png" rel="shortcut icon" type="image/x-icon"/><link href="https://cdn.prod.website-files.com/65c76c6482e68a9e09d9b765/65c7730a457546181fec95a5_deriv_favicon_256.png" rel="apple-touch-icon"/><link href="https://deriv.com/404" rel="canonical"/><meta name="language" content="ach">

    <
    link
rel = "stylesheet"
href = "https://unpkg.com/@deriv-com/custom-scripts@1.22.0/dist/css/styles.min.css" /
    >


    <
    style > .customLink div, .navbar_menu - new a.w--current div {
        color: #FF444F!important;
    } < /style> <!--Analytics block starts here-- > <
script >
    const cacheTrackEvents = {
        interval: null,
        responses: [],
        isTrackingResponses: false,
        hash: (inputString, desiredLength = 32) => {
            const fnv1aHash = (string) => {
                let hash = 0x811c9dc5
                for (let i = 0; i < string.length; i++) {
                    hash ^= string.charCodeAt(i)
                    hash = (hash * 0x01000193) >>> 0
                }
                return hash.toString(16)
            }

            const base64Encode = (string) => btoa(string)

            let hash = fnv1aHash(inputString)
            let combined = base64Encode(hash)

            while (combined.length < desiredLength) {
                combined += base64Encode(fnv1aHash(combined))
            }

            return combined.substring(0, desiredLength)
        },
        getCookies: (name) => {
            const value = `; ${document.cookie}`
            const parts = value.split(`; ${name}=`)
            if (parts.length === 2) {
                const cookieValue = decodeURIComponent(parts.pop().split(';').shift())

                try {
                    return JSON.parse(cookieValue)
                } catch (e) {
                    return cookieValue
                }
            }
            return null
        },
        trackPageUnload: () => {
            window.addEventListener('beforeunload', (event) => {
                if (!cacheTrackEvents.isPageViewSent()) {
                    cacheTrackEvents.push('cached_analytics_page_views', {
                        name: window.location.href,
                        properties: {
                            url: window.location.href,
                        },
                    })
                }
            })
        },
        trackResponses: () => {
            const originalXhrOpen = XMLHttpRequest.prototype.open
            const originalXhrSend = XMLHttpRequest.prototype.send

            XMLHttpRequest.prototype.open = function(method, url) {
                this._url = url
                this._method = method
                return originalXhrOpen.apply(this, arguments)
            }

            XMLHttpRequest.prototype.send = function(body) {
                this.addEventListener('load', function() {
                    let parsedPayload = null

                    if (typeof body === 'string') {
                        try {
                            parsedPayload = JSON.parse(body)
                        } catch (e) {
                            parsedPayload = body
                        }
                    }

                    const responseData = {
                        url: this._url,
                        method: this._method,
                        status: this.status,
                        headers: this.getAllResponseHeaders(),
                        data: this.responseType === '' || this.responseType === 'text' ?
                            this.responseText : null,
                        payload: parsedPayload,
                    }

                    cacheTrackEvents.responses.push(responseData)
                })

                return originalXhrSend.apply(this, arguments)
            }
        },
        isReady: () => {
            if (typeof Analytics === 'undefined' || Analytics === null) {
                return false
            }

            const instances = Analytics.Analytics.getInstances()
            return !!instances?.tracking
        },
        parseCookies: (cookieName) => {
            const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
                const [key, value] = cookie.split('=')
                acc[decodeURIComponent(key)] = decodeURIComponent(value)
                return acc
            }, {})

            try {
                return cookies[cookieName] ? JSON.parse(cookies[cookieName]) : null
            } catch (error) {
                return null
            }
        },
        isPageViewSent: () =>
            !!cacheTrackEvents.responses.find(
                (e) => e.payload?.type === 'page' && e.payload?.anonymousId,
            ),
        set: (event) => {
            cacheTrackEvents.push('cached_analytics_events', event)
        },
        push: (cookieName, data) => {
            let storedCookies = []
            const cacheCookie = cacheTrackEvents.parseCookies(cookieName)
            if (cacheCookie) storedCookies = cacheCookie
            storedCookies.push(data)

            document.cookie = `${cookieName}=${JSON.stringify(
                storedCookies,
            )}; path=/; Domain=.deriv.com`
        },
        processEvent: (event) => {
            const clientInfo = cacheTrackEvents.getCookies('client_information')

            if (clientInfo) {
                const {
                    email = null
                } = clientInfo

                if (email) {
                    event.properties.email_hash = cacheTrackEvents.hash(email)
                }
            }
            if (event?.properties?.email) {
                const email = event.properties.email
                delete event.properties.email
                event.properties.email_hash = cacheTrackEvents.hash(email)
            }

            return event
        },
        track: (originalEvent, cache) => {
            const event = cacheTrackEvents.processEvent(originalEvent)

            if (cacheTrackEvents.isReady() && !cache && typeof Analytics !== 'undefined') {
                Analytics.Analytics.trackEvent(event.name, event.properties)
            } else {
                cacheTrackEvents.set(event)
            }
        },
        pageView: () => {
            if (!cacheTrackEvents.isTrackingResponses) {
                cacheTrackEvents.trackResponses()
                cacheTrackEvents.trackPageUnload()
            }

            let pageViewInterval = null

            pageViewInterval = setInterval(() => {
                const clientInfo = cacheTrackEvents.parseCookies('client_information')
                const signupDevice = cacheTrackEvents.parseCookies('signup_device')?.signup_device

                if (
                    typeof window.Analytics !== 'undefined' &&
                    typeof window.Analytics.Analytics?.pageView === 'function' &&
                    cacheTrackEvents.isReady()
                ) {
                    window.Analytics?.Analytics?.pageView(window.location.href, {
                        loggedIn: !!clientInfo,
                        device_type: signupDevice,
                        network_type: window?.navigator?.connection?.effectiveType,
                        network_rtt: window?.navigator?.connection?.rtt,
                        network_downlink: window?.navigator?.connection?.downlink,
                    })
                }

                if (cacheTrackEvents.isPageViewSent()) {
                    clearInterval(pageViewInterval)
                }
            }, 1000)
        },
        listen: (element, {
            name = '',
            properties = {}
        }, cache = false, callback = null) => {
            const addClickListener = (el) => {
                if (!el.dataset.clickEventTracking) {
                    el.addEventListener('click', function(e) {
                        let event = {
                            name,
                            properties,
                            cache,
                        }

                        if (typeof callback === 'function') {
                            event = callback(e)
                        }

                        cacheTrackEvents.track(event)
                    })
                    el.dataset.clickEventTracking = 'true'
                }
            }

            const elements = element instanceof NodeList ? Array.from(element) : [element]

            elements.forEach(addClickListener)
        },

        addEventhandler: (items) => {
            cacheTrackEvents.interval = setInterval(() => {
                let allListenersApplied = true

                items.forEach(({
                    element,
                    event = {},
                    cache = false,
                    callback = null
                }) => {
                    const elem =
                        element instanceof Element ? element : document.querySelectorAll(element)
                    const elements = elem instanceof NodeList ? Array.from(elem) : [elem]

                    if (!elements.length) {
                        allListenersApplied = false
                    }

                    elements.forEach((el) => {
                        if (!el.dataset.clickEventTracking) {
                            cacheTrackEvents.listen(el, event, cache, callback)
                            allListenersApplied = false
                        }
                    })
                })

                if (allListenersApplied) {
                    clearInterval(cacheTrackEvents.interval)
                }
            }, 1)

            return cacheTrackEvents
        },
        loadEvent: (items) => {
            items.forEach(({
                event,
                cache
            }) => {
                const {
                    name,
                    properties
                } = event
                cacheTrackEvents.track({
                        name,
                        properties,
                    },
                    cache,
                )
            })

            return cacheTrackEvents
        },
        pageLoadEvent: (items) => {
            const pathname = window.location.pathname.slice(1)
            items.forEach(({
                pages = [],
                excludedPages = [],
                event,
                callback = null
            }) => {
                let dispatch = false
                if (pages.length) {
                    if (pages.includes(pathname)) {
                        dispatch = true
                    }
                } else if (excludedPages.length) {
                    if (!excludedPages.includes(pathname)) {
                        dispatch = true
                    }
                } else {
                    dispatch = true
                }

                if (dispatch) {
                    const eventData = callback ? callback() : event
                    cacheTrackEvents.loadEvent([{
                        event: eventData
                    }])
                }
            })

            return cacheTrackEvents
        },
        trackConsoleErrors: (callback) => {
            const originalConsoleError = console.error
            console.error = function(...args) {
                // Log the error to the console as usual
                originalConsoleError.apply(console, args)

                // Create a clean error message without __trackjs_state__
                const errorMessage = args
                    .map((arg) =>
                        arg && typeof arg === 'object' && arg.message ?
                        arg.message :
                        typeof arg === 'object' ?
                        JSON.stringify(arg, (key, value) =>
                            key.startsWith('__trackjs') ? undefined : value,
                        ) :
                        String(arg),
                    )
                    .join(' ')

                if (typeof callback === 'function') {
                    callback(errorMessage)
                }
            }
        },
    }

cacheTrackEvents
    .pageLoadEvent([{
            pages: ['signup', 'eu/signup'],
            event: {
                name: 'ce_virtual_signup_form',
                properties: {
                    action: 'open',
                    form_source: window.location.hostname,
                    form_name: 'default_diel_deriv',
                    url: window.location.href,
                },
            },
        },
        {
            pages: ['signup-success', 'eu/signup-success'],
            callback: () => {
                const url = new URL(window.location.href)
                const email = url.searchParams.get('email')
                const formattedEmail = decodeURIComponent(email).replace(/ /g, '+')

                return {
                    name: 'ce_virtual_signup_form',
                    properties: {
                        action: 'email_confirmation_sent',
                        form_source: window.location.hostname,
                        form_name: 'default_diel_deriv',
                        url: window.location.href,
                        email: formattedEmail,
                    },
                }
            },
        },
    ])
    .addEventhandler([{
            element: '.livechatbtn',
            event: {
                name: 'ce_widget_usage_form',
                properties: {
                    action: 'click',
                    widget_name: 'livechat',
                },
            },
        },
        {
            element: '.whatsapp_chat',
            event: {
                name: 'ce_widget_usage_form',
                properties: {
                    action: 'click',
                    widget_name: 'whatsapp',
                },
            },
        },
        {
            element: '#create',
            callback: (e) => {
                const emailElement = document.getElementById('Email')
                const email = emailElement ? emailElement.value : ''

                return {
                    name: 'ce_virtual_signup_form',
                    properties: {
                        action: 'started',
                        signup_provider: 'email',
                        form_source: window.location.hostname,
                        form_name: 'default_diel_deriv',
                        email,
                    },
                }
            },
            cache: true,
        },
        {
            element: '#signup_login',
            event: {
                name: 'ce_virtual_signup_form',
                properties: {
                    action: 'go_to_login',
                    signup_provider: 'email',
                    form_source: window.location.hostname,
                    form_name: 'default_diel_deriv',
                },
            },
        },
        {
            element: '.sign-up_banner-badges-wrapper a',
            callback: (e) => {
                const provider = e.currentTarget.getAttribute('data-provider')

                return {
                    name: 'ce_virtual_signup_form',
                    properties: {
                        signup_provider: provider,
                        action: 'started',
                        form_source: window.location.hostname,
                        form_name: 'default_diel_deriv',
                    },
                }
            },
        },
    ])
    .pageView()

const trackSignupErrorEvent = (action, errorMessage, screen_name) => {
    const form_name = isMobile() ?
        'virtual_signup_web_mobile_default' :
        'virtual_signup_web_desktop_default'
    cacheTrackEvents.loadEvent([{
        event: {
            name: 'ce_virtual_signup_form',
            properties: {
                action,
                form_name,
                error_message: errorMessage,
                screen_name,
            },
        },
    }, ])
}

cacheTrackEvents.trackConsoleErrors((errorMessage) => {
    window.is_tracking_signup_errors = window.useGrowthbookFeatureFlag({
        featureFlag: 'signup_flow_error_enabled',
    })

    if (is_tracking_signup_errors) {
        if (errorMessage) {
            const currentUrl = window.location.href
            if (currentUrl.includes('signup') || currentUrl.includes('signup-success')) {
                const screen_name = currentUrl.includes('signup-success') ?
                    'signup-success' :
                    'signup'
                trackSignupErrorEvent('signup_flow_error', errorMessage, screen_name)
            }
        }
    }
})

//Analytics block for cta_clicks method starts here
;
(function() {
    const trackCTAEvents = (event) => {
        const anchor = event.target.closest('a');
        if (!anchor) return;

        const href = anchor.getAttribute('href');
        const dataHref = anchor.getAttribute('data-href');
        const identifier = dataHref || (href && href !== '#' ? href.split('/').pop().toLowerCase() : '');

        const section = anchor.closest('section') || anchor.closest('div[id]');
        const sectionName = section ? section.className.split(' ')[0] || section.id || 'unknown' : 'unknown';

        if (identifier && sectionName) {
            const eventName = 'ce_cta_clicks';
            const eventProperties = {
                action: 'click',
                component_type: 'btn',
                component_name: identifier,
                section_name: sectionName,
                cta_name: anchor.textContent?.replace(/\s+/g, ' ').trim(),
            };

            console.log('Tracking Event:', {
                name: eventName,
                properties: eventProperties
            });

            cacheTrackEvents.track({
                name: eventName,
                properties: eventProperties,
            });
        }
    };

    const interval = setInterval(() => {
        if (document.body) {
            document.body.addEventListener('click', trackCTAEvents);
            clearInterval(interval);
        }
    }, 10);
})();

//Analytics block for cta_clicks method ends here

document.addEventListener('DOMContentLoaded', () => {
        const RUDDERSTACK_STAGING_KEY = '2mmmTCZy9LNia85JObhPez0koy0'
        const RUDDERSTACK_PRODUCTION_KEY = '2hrePojvWH0mpU7La2XfDgYivgC'
        const GB_STAGING_CLIENT_KEY = 'sdk-9wuqJ1mlcQsSyZQ'
        const GB_STAGING_DECRYPTION_KEY = ''
        const GB_PROD_CLIENT_KEY = 'sdk-UhZV3cNEg5nLNLNS'
        const GB_PROD_DECRYPTION_KEY = 'nre64BV0dNIa44zW4tz5ow=='
        var GB_CLIENT_KEY, RUDDERSTACK_KEY, GB_DECRYPTION_KEY
        if (
            window.location.hostname === 'deriv.com' ||
            window.location.hostname === 'deriv.be' ||
            window.location.hostname === 'deriv.me'
        ) {
            GB_CLIENT_KEY = GB_PROD_CLIENT_KEY
            GB_DECRYPTION_KEY = GB_PROD_DECRYPTION_KEY
            RUDDERSTACK_KEY = RUDDERSTACK_PRODUCTION_KEY
        } else {
            GB_CLIENT_KEY = GB_STAGING_CLIENT_KEY
            GB_DECRYPTION_KEY = GB_STAGING_DECRYPTION_KEY
            RUDDERSTACK_KEY = RUDDERSTACK_STAGING_KEY
        }
        const client_information = window.parseCookies(document.cookie, 'client_information')
        const clientInfo = client_information ? JSON.parse(client_information) : null
        const utm_data_string = window.parseCookies(document.cookie, 'utm_data')
        const utm_data = utm_data_string ? JSON.parse(utm_data_string) : {}
        const {
            utm_source,
            utm_medium,
            utm_campaign
        } = utm_data
        const cookies = window.parseCookies(document.cookie, 'signup_device')
        let signupDevice = null
        const isBrowser = () => typeof window !== 'undefined'
        const getLanguage = () => {
            if (!isBrowser()) return null
            try {
                return localStorage.getItem('i18n') || navigator.language
            } catch (error) {
                console.warn('Warning: Error accessing localStorage:', error)
                return navigator.language
            }
        }
        if (cookies) {
            signupDevice = JSON.parse(cookies)?.signup_device || null
        }
        const initialiseConfig = {
            growthbookKey: typeof _growthbook !== 'undefined' ? null : GB_CLIENT_KEY,
            growthbookDecryptionKey: typeof _growthbook !== 'undefined' ? null : GB_DECRYPTION_KEY,
            rudderstackKey: RUDDERSTACK_KEY,
            growthbookOptions: {
                navigate: (url) => window.location.replace(url),
                antiFlicker: false,
                navigateDelay: 0,
                attributes: {
                    country: window.parseCookies(document.cookie, 'clients_country') ||
                        window.parseCookies(document.cookie, 'website_status'),
                    user_language: window.parseCookies(document.cookie, 'user_language') || getLanguage(),
                    device_language: window.parseCookies(document.cookie, 'language') || ' ',
                    device_type: signupDevice,
                    utm_source: utm_data?.['utm_source'],
                    utm_medium: utm_data?.['utm_medium'],
                    utm_campaign: utm_data?.['utm_campaign'],
                    is_authorised: !!window.parseCookies(document.cookie, 'client_information'),
                    loggedIn: !!window.parseCookies(document.cookie, 'client_information'),
                    url: window.location.href,
                    network_type: navigator.connection?.effectiveType,
                    network_rtt: navigator.connection?.rtt,
                    network_downlink: navigator.connection?.downlink,
                    user_id: clientInfo?.user_id || '',
                },
            },
        }
        try {
            window.Analytics?.Analytics.initialise(initialiseConfig)

            const userId = clientInfo?.user_id ?
                clientInfo?.user_id :
                window.Analytics?.Analytics?.getInstances?.().tracking?.getAnonymousId()
            window.Analytics?.Analytics?.identifyEvent(userId)
        } catch (error) {
            console.error('Error during initialisation:', error)
        }

        window.Analytics?.Analytics?.pageView(location.pathname, 'Deriv.com')

        window.getGrowthbookInstance = function() {
            if (typeof _growthbook !== 'undefined') {
                return _growthbook
            } else {
                return window.Analytics?.Analytics?.getInstances?.().ab?.GrowthBook
            }
        }
        window.useGrowthbookFeatureFlag = function({
            featureFlag
        }) {
            const growthBookInstance = window?.getGrowthbookInstance?.()
            if (!growthBookInstance) return null
            let featureFlagValue = growthBookInstance.getFeatureValue(featureFlag)

            function updateFeatureFlagValue() {
                const value = growthBookInstance.getFeatureValue(featureFlag)
                featureFlagValue = value
            }
            growthBookInstance.setRenderer(updateFeatureFlagValue)
            return featureFlagValue
        }
    }) <
    /script> <!--Analytics block ends-- >

    <
    !--Google Tag Manager-- >
    <
    script defer > ;
(function(w, d, s, l, i) {
    w[l] = w[l] || []
    w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
    })
    var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : ''
    j.async = true
    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl
    f.parentNode.insertBefore(j, f)
})(window, document, 'script', 'dataLayer', 'GTM-NF7884S') <
/script> <!--End Google Tag Manager-- >

<
!--Analytics Integration-- >
<
script defer src = "https://unpkg.com/@deriv-com/analytics@1.28.2/dist/analytics.bundle.js" > < /script> <!--Analytics end-- >

    <
    !--Hotjar Tracking Code
for Deriv.com(.com + app.deriv) -- >
    <
    !-- < script >
    (function(h, o, t, j, a, r) {
        h.hj =
            h.hj ||
            function() {
                (h.hj.q = h.hj.q || []).push(arguments);
            };
        h._hjSettings = {
            hjid: 3050531,
            hjsv: 6
        };
        a = o.getElementsByTagName("head")[0];
        r = o.createElement("script");
        r.async = 1;
        r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
        a.appendChild(r);
    })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv="); <
/script> -->

<
!--[Attributes by Finsweet] Disable scrolling-- >
<
script
defer
src = "https://cdn.jsdelivr.net/npm/@finsweet/attributes-scrolldisable@1/scrolldisable.js" >
    <
    /script>

    <
    !--Keep this css code to improve the font quality-- >
    <
    script >
    window.growthbook_config = window.growthbook_config || {}
window.growthbook_config.attributes = {
        deviceId: 'foo',
        company: 'foo',
        loggedIn: true,
        employee: true,
        country: 'foo',
        user_language: 'foo',
        device_type: 'foo',
        device_language: 'foo',
        user_ip: 'foo',
    } <
    /script> <!--Datadog Integration-- > <
script async src = "https://www.datadoghq-browser-agent.com/datadog-rum.js" > < /script> <!--Marketing and Affiliate Cookie-- > <
script >
    function loadScript(url, callback) {
        var script = document.createElement('script')
        script.onload = function() {
            if (callback) callback()
        }
        script.src = url
        document.head.appendChild(script)
    }
// Usage to load the js-cookie script
loadScript('https://static.deriv.com/scripts/cookie.js', function() {
    console.log('js-cookie loaded successfully!')
});
(function() {
    // Function to dynamically load js-cookie
    function loadJSCookie(callback) {
        var script = document.createElement('script')
        script.onload = function() {
            if (callback) callback()
        }
        script.src = 'https://cdn.jsdelivr.net/npm/js-cookie@3.0.5/dist/js.cookie.min.js'
        document.head.appendChild(script)
    }
    // Define your cookie storage and manipulation functions
    function setupCookies() {
        var deriv_cookie_domain = 'deriv.com' // Modify as per your actual usage
        var CookieStorage = function(cookie_name, cookie_domain = '') {
            var hostname = window.location.hostname
            var is_deriv_com = hostname === 'deriv.com' || hostname === 'staging.deriv.com'
            this.initialized = false
            this.cookie_name = cookie_name
            this.domain = is_deriv_com ? deriv_cookie_domain : cookie_domain || hostname
            this.path = '/'
            this.same_site = 'None'
            this.is_secure = true
            this.expires = new Date('Thu, 1 Jan 2037 12:00:00 GMT')
            this.value = {}
        }
        CookieStorage.prototype = {
            initialize: function() {
                var cookie_value = Cookies.get(this.cookie_name)
                try {
                    this.value = cookie_value ? JSON.parse(cookie_value) : {}
                } catch (e) {
                    this.value = {}
                }
                this.initialized = true
            },
            write: function(val, expiry_date, is_secure, sameSite) {
                if (!this.initialized) this.initialize()
                this.value = val
                this.expires = expiry_date || this.expires
                Cookies.set(this.cookie_name, JSON.stringify(this.value), {
                    expires: this.expires,
                    path: this.path,
                    domain: this.domain,
                    secure: is_secure !== undefined ? is_secure : this.is_secure,
                    sameSite: sameSite || this.same_site,
                })
            },
            get: function(key) {
                if (!this.initialized) this.initialize()
                return this.value[key]
            },
            set: function(key, val, options) {
                if (!this.initialized) this.initialize()
                this.value[key] = val
                Cookies.set(this.cookie_name, JSON.stringify(this.value), {
                    expires: this.expires,
                    path: this.path,
                    domain: this.domain,
                    secure: options && options.secure !== undefined ?
                        options.secure : this.is_secure,
                    sameSite: (options && options.sameSite) || this.same_site,
                    ...options,
                })
            },
            remove: function() {
                Cookies.remove(this.cookie_name, {
                    path: this.path,
                    domain: this.domain,
                })
            },
        }

        function getCookiesObject(cookies) {
            var cookies_objects = {}
            cookies.forEach(function(cookie_name) {
                var cookie_object = new CookieStorage(
                    cookie_name.includes('utm') ? 'utm_data' : cookie_name,
                )
                cookies_objects[cookie_name] = cookie_object
            })
            return cookies_objects
        }

        function getDataObjFromCookies(cookies, fields) {
            var data = {}
            fields.forEach(function(elem) {
                if (cookies[elem] && cookies[elem].get(elem)) {
                    data[elem] = cookies[elem].get(elem)
                }
            })
            return data
        }

        function getDataLink(data) {
            var data_link = ''
            Object.keys(data).forEach(function(elem) {
                data_link += '&' + elem + '=' + encodeURIComponent(data[elem])
            })
            return data_link
        }

        function getCookiesFields() {
            return [
                'date_first_contact',
                'signup_device',
                'gclid',
                'utm_source',
                'utm_ad_id',
                'utm_adgroup_id',
                'utm_adrollclk_id',
                'utm_campaign',
                'utm_campaign_id',
                'utm_content',
                'utm_fbcl_id',
                'utm_gl_client_id',
                'utm_medium',
                'utm_msclk_id',
                'utm_term',
                'sidc',
            ]
        }
        // Example usage:
        var exampleCookies = getCookiesObject(['utm_source', 'utm_campaign'])
        var dataObj = getDataObjFromCookies(exampleCookies, getCookiesFields())
        var dataLink = getDataLink(dataObj)
    }
    // Load js-cookie and setup cookies after it's loaded
    loadJSCookie(setupCookies)
})() <
/script>


<
/head><body class="overflow-hidden"><div class="_404-wrapper"><div class="div-block-33"><div class="_404-navbar_component is-white"><div class="new-navbar_component-wrapper-copy"><div class="_404-navbar_container"><a href="/
" class="
new - navbar_logo - link w - nav - brand "><div class="
new - navbar_logo is - red w - embed "><svg width="
72 " height="
24 " viewBox="
0 0 72 24 " fill="
none " xmlns="
http: //www.w3.org/2000/svg">
    <
    path d = "M14.4238 0.808863L13.1912 7.79644H8.91248C4.92071 7.79644 1.11591 11.0293 0.410715 15.0195L0.112228 16.7179C-0.589682 20.7082 2.07366 23.9411 6.06543 23.9411H9.63407C12.5434 23.9411 15.315 21.5869 15.8267 18.6787L19.1133 0.0552979L14.4238 0.808863ZM11.3878 18.0196C11.2304 18.918 10.4213 19.6492 9.52256 19.6492H7.35448C5.56031 19.6492 4.35984 18.1934 4.67471 16.3966L4.86168 15.3376C5.17983 13.5441 6.89199 12.0851 8.68615 12.0851H12.4347L11.3878 18.0196ZM47.3757 23.9408L50.1834 8.01904H54.6245L51.8168 23.9408H47.3757ZM47.8561 8.20264C47.6335 9.46551 47.4099 10.7284 47.1873 11.9913C45.0833 11.3377 42.9125 11.5458 42.2456 11.6788C41.5254 15.7671 40.8042 19.8564 40.083 23.9447H35.6389C36.2424 20.5239 38.3042 8.84149 38.3042 8.84149C39.7496 8.24317 43.2991 7.02889 47.8561 8.20264ZM29.8494 7.79374H26.3924C23.0238 7.79374 19.8128 10.5217 19.219 13.8889L18.5204 17.8464C17.9267 21.2137 20.1736 23.9417 23.5422 23.9417H30.8959L31.6503 19.6629H24.7392C23.6175 19.6629 22.8664 18.7546 23.0665 17.63L23.0895 17.4956H34.2316L34.8679 13.8889C35.4615 10.5217 33.2148 7.79374 29.8462 7.79374H29.8494ZM30.4103 13.548L30.3841 13.7775H23.7586L23.7947 13.5742C23.9947 12.4528 25.0181 11.4659 26.143 11.4659H28.731C29.843 11.4659 30.5941 12.4365 30.4103 13.548ZM67.5083 8.01904H71.9526C70.4387 12.0426 66.9691 18.887 63.6082 23.9408H59.1639C57.6212 19.1308 56.625 12.429 56.4349 8.01904H60.8794C60.9596 9.45755 61.6038 14.7933 62.339 18.5208C64.3555 14.8945 66.5786 10.1366 67.5049 8.01904H67.5083Z"
fill = "currentcolor" / >
    <
    /svg></div > < /a></div > < /div><div class="_404-navbar_background is-opacity-72"></div > < div class = "new-navbar_dynamic-background" > < /div><div class="new-navbar_background-solid"></div > < div class = "new-navbar_dark-curtain" > < /div><div class="new-navbar_backdrop-blur"></div > < /div></div > < div class = "section_404" > < div class = "container-xlarge" > < div class = "align-center max-width-xxlarge text-align-center w-form" > < img src = "https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/66585fe0e1dc7e70cc75d808_illustration%20-%20desktop.svg"
alt = ""
class = "utility_image _404_image" / > < h3 class = "_404-heading" > We couldn’ t find that page < /h3><div class="padding-xxsmall"></div > < div class = "_404-text" > It may not be available in your country, or a broken link has brought you here. < /div><a href="/
" class="
button w - button ">Return to homepage</a></div></div></div></div><script src="
https: //d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=66585fe0e1dc7e70cc75d440" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script><script src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/js/deriv-staged-2dfc316890fbbd8e3ed6d351bd.f5746687.73cc9a6b8e8b4c13.js" type="text/javascript"></script><!-- [Attributes by Finsweet] Mirror click events -->
    <
    !--This is needed
for the close button in the mobile language selection menu.-- >
    <
    script defer src = "https://cdn.jsdelivr.net/npm/@finsweet/attributes-mirrorclick@1/mirrorclick.js" > < /script>

    <
    !--deriv js custom code script-- >
    <
    script
type = "module"
src = "https://unpkg.com/@deriv-com/custom-scripts@1.26.8/dist/js/footer_scripts.min.js" >
    <
    /script> <!--deriv js custom code script end-- >

    <
    script >
    var Webflow = Webflow || [];
Webflow.push(function() {
    if (document.querySelector(".new-navbar_component")) {
        // Find the .new-navbar_component element
        const navbarComponent = document.querySelector(".new-navbar_component");
        // Add event listeners for hover
        navbarComponent.addEventListener("mouseenter", () => {
            if (window.innerWidth > 991) {
                disableScroll();
            }
        });
        navbarComponent.addEventListener("mouseleave", () => {
            if (window.innerWidth > 991) {
                enableScroll();
            }
        });
        // Function to disable scroll
        function disableScroll() {
            document.body.classList.add("disable-scroll");
        }
        // Function to enable scroll
        function enableScroll() {
            document.body.classList.remove("disable-scroll");
        }
    }
}); <
/script> <!--Datadog Integration-- > <
script defer >
    (function() {
        var script = document.createElement("script");
        script.src =
            "https://www.datadoghq-browser-agent.com/us1/v5/datadog-rum.js";
        script.type = "text/javascript";
        script.onload = function() {
            if (window.DD_RUM) {
                window.DD_RUM.init({
                    clientToken: "pub08554ab30284600af157441bfb0fa923",
                    applicationId: "5c8975a3-ec86-4a64-8a3a-e6888fdde082",
                    site: "datadoghq.com",
                    service: "deriv.com-v2",
                    env: window.location.hostname === "deriv.com" ? "production" : "staging",
                    sessionSampleRate: 10,
                    sessionReplaySampleRate: 0,
                    trackUserInteractions: true,
                    trackResources: true,
                    trackLongTasks: true,
                    defaultPrivacyLevel: "mask-user-input",
                });
            }
        };
        document.body.appendChild(script);
    })(); <
/script> <!--End Datadog Integration-- > <
script >
    window.parseCookies = function(cookieString, value) {
        const cookies = {};
        cookieString.split(";").forEach((cookie) => {
            const [key, val] = cookie.split("=").map((c) => c.trim());
            cookies[key] = decodeURIComponent(val);
        });
        return cookies[value];
    };
// Listen for DOMContentLoaded event
<
/script>

<
!--Live Chat - start of code-- >
    <
    script >
    const licenceKey = "12049137";
const loadLiveChatScript = () => {
    window.__lc = window.__lc || {};
    window.__lc.license = licenceKey;
    window.LC_API = window.LC_API || {
        loaded: false
    };
    if (!window.LC_API.loaded) {
        const lcScript = document.createElement("script");
        lcScript.async = true;
        lcScript.src = "https://cdn.livechatinc.com/tracking.js";
        lcScript.onload = () => {
            window.LC_API.loaded = true; // Mark as loaded
            window.LC_API.on_after_load = function() {
                performLiveChatAction(
                    !!window.parseCookies(document.cookie, "client_information")
                );
                checkUrlForLiveChat();
            };
            if (typeof LiveChatWidget !== "undefined" && LiveChatWidget.init) {
                LiveChatWidget.init();
            }
        };
        document.body.appendChild(lcScript);
    } else {
        checkUrlForLiveChat();
    }
};
const openLiveChat = () => {
    if (window.isFreshChat == true && window.fcWidget) {
        window.fcWidget.open();
    } else if (window.isIntercomChat && window.Intercom) {
        window.Intercom("show");
    } else {
        if (window.LC_API && window.LC_API.open_chat_window) {
            window.LC_API.open_chat_window();
        }
    }
};
const checkUrlForLiveChat = () => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("is_livechat_open") === "true") {
        openLiveChat();
    }
};

//dashboard send data
const performLiveChatAction = (is_logged_in) => {
    window?.LiveChatWidget?.on("ready", () => {
        // we open and close the window to trigger the widget to listen for new events
        window.LC_API.open_chat_window();
        window.LC_API.hide_chat_window();
        checkUrlForLiveChat();

        const utm_data_string = window.parseCookies(document.cookie, "utm_data");
        const utm_data = utm_data_string ? JSON.parse(utm_data_string) : {};
        const {
            utm_source,
            utm_medium,
            utm_campaign
        } = utm_data;

        const client_information = window.parseCookies(
            document.cookie,
            "client_information"
        );
        const url_params = new URLSearchParams(window.location.search);

        const {
            loginid,
            email,
            landing_company_shortcode,
            currency,
            residence,
            first_name,
            last_name,
        } = client_information ? JSON.parse(client_information) : {};

        /* the session variables are sent to CS team dashboard to notify user has logged in
                and also acts as custom variables to trigger targeted engagement */
        const session_variables = {
            is_logged_in: is_logged_in,
            loginid: loginid ?? "",
            landing_company_shortcode: landing_company_shortcode ?? "",
            currency: currency ?? "",
            residence: residence ?? "",
            email: email ?? "",
            platform: url_params.get("platform") ?? "",
            utm_source: utm_source ?? "",
            utm_medium: utm_medium ?? "",
            utm_campaign: utm_campaign ?? "",
        };

        window.LiveChatWidget.call("set_session_variables", session_variables);

        if (is_logged_in) {
            if (email) {
                window.LiveChatWidget.call("set_customer_email", email);
            }
            if (first_name && last_name) {
                window.LiveChatWidget.call(
                    "set_customer_name",
                    `${first_name} ${last_name}`
                );
            }
        } else {
            // clear name and email fields after chat has ended
            window.LC_API.on_chat_ended = () => {
                window.LiveChatWidget.call("set_customer_email", " ");
                window.LiveChatWidget.call("set_customer_name", " ");
            };
        }
        checkUrlForLiveChat();

        // open chat widget when there is an incoming greeting/announcement
        window.LiveChatWidget.on("new_event", (event) => {
            if (event.greeting) {
                window.LC_API.open_chat_window();
            }
        });
    });
};
let is_logged_in = false;
let checkCookieInterval;

const isLoggedIn = () => {
    return !!window.parseCookies(document.cookie, "client_information");
};

const checkLoggedIn = () => {
    const new_login_status = isLoggedIn();
    if (new_login_status !== is_logged_in) {
        performLiveChatAction(new_login_status);
        is_logged_in = new_login_status;
    }
};

// Perform initial authentication check
checkLoggedIn();

// Set interval to periodically check authentication status
checkCookieInterval = setInterval(checkLoggedIn, 2000);
//end of dashboard send data

// Start: FreshChat load function
const loadFreshChatScript = (callback, maxRetries = 3, retryDelay = 2000) => {
    let retryCount = 0;

    const loadScript = () => {
        const script = document.createElement("script");
        script.src = "https://static.deriv.com/scripts/freshchat.js?v=1";
        script.async = true;

        script.onload = () => {
            if (typeof callback === "function") {
                callback();
            }
        };

        script.onerror = () => {
            if (retryCount < maxRetries) {
                retryCount++;
                setTimeout(loadScript, retryDelay);
            } else {
                console.warn(
                    "Freshchat script could not be loaded after maximum retries."
                );
            }
        };

        document.head.appendChild(script);
    };

    loadScript();
};

// End: FreshChat load function

document.addEventListener("DOMContentLoaded", () => {
    // Start: Check featureflag for freshchat and load script
    function checkFreshChatEnabled() {
        const intervalId = setInterval(() => {
            if (typeof window.useGrowthbookFeatureFlag === "function") {
                window.isFreshChat = window.useGrowthbookFeatureFlag({
                    featureFlag: "enable_freshworks_live_chat_wf",
                });

                if (typeof window.isFreshChat === "boolean") {
                    clearInterval(intervalId);

                    if (window.isFreshChat) {
                        loadFreshChatScript(() => {
                            window.FreshChat.initialize({
                                hideButton: true,
                            });
                        });
                    }
                }
            } else if (window.useGrowthbookFeatureFlag === undefined) {
                console.log("Growthbook function not available, retrying...");
            } else {
                clearInterval(intervalId);
                console.error(
                    "Growthbook function not available after multiple retries."
                );
            }
        }, 500);
    }

    checkFreshChatEnabled();
    // End: Check featureflag for freshchat and load script
    loadLiveChatScript();
    const liveChatIcons = document.querySelectorAll(".livechatbtn");
    if (liveChatIcons.length > 0) {
        liveChatIcons.forEach((liveChatIcon) => {
            liveChatIcon.addEventListener("click", (event) => {
                event.preventDefault();
                openLiveChat();
            });
        });
    }
    const liveChatIconById = document.getElementById("liveChatBtn");
    if (liveChatIconById) {
        liveChatIconById.addEventListener("click", (event) => {
            event.preventDefault();
            openLiveChat();
        });
    }
    const liveChatIconsByrel = document.querySelectorAll(
        'a[rel="liveChatBtn"]'
    );
    liveChatIconsByrel.forEach((liveChatIcon) => {
        liveChatIcon?.addEventListener("click", (event) => {
            event.preventDefault();
            openLiveChat();
        });
    });
}); <
/script> <!--Live Chat - end of code-- > <
script >
    window.__lc = window.__lc || {};
window.__lc.license = 12049137;
window.__lc.integration_name = "manual_onboarding";
(function(n, t, c) {
    function i(n) {
        return e._h ? e._h.apply(null, n) : e._q.push(n);
    }
    var e = {
        _q: [],
        _h: null,
        _v: "2.0",
        on: function() {
            i(["on", c.call(arguments)]);
        },
        once: function() {
            i(["once", c.call(arguments)]);
        },
        off: function() {
            i(["off", c.call(arguments)]);
        },
        get: function() {
            if (!e._h)
                throw new Error(
                    "[LiveChatWidget] You can't use getters before load."
                );
            return i(["get", c.call(arguments)]);
        },
        call: function() {
            i(["call", c.call(arguments)]);
        },
        init: function() {
            var n = t.createElement("script");
            (n.async = !0),
            (n.type = "text/javascript"),
            (n.src = "https://cdn.livechatinc.com/tracking.js"),
            t.head.appendChild(n);
        },
    };
    !n.__lc.asyncInit && e.init(), (n.LiveChatWidget = n.LiveChatWidget || e);
})(window, document, [].slice); <
/script> <
noscript
    >
    <
    a href = "https://www.livechat.com/chat-with/12049137/"
rel = "nofollow" >
    Chat with us < /a >, powered by <
a
href = "https://www.livechat.com/?welcome"
rel = "noopener nofollow"
target = "_blank" >
    LiveChat < /a > < /
noscript > < !--End of LiveChat code-- >

    <
    !--Trackjs - start of code-- >
    <
    script defer >
    (function() {
        var script = document.createElement("script");
        script.src = "https://cdn.trackjs.com/agent/v3/latest/t.js";
        script.onload = function() {
            // Install TrackJS after the script loads
            TrackJS.install({
                token: "346262e7ffef497d85874322fff3bbf8",
                application: "derivcom-v2",
                dedupe: true,
            });
        };
        document.body.appendChild(script);
    })(); <
/script> <!--Trackjs - end of code-- >

<
script >
    document.addEventListener("DOMContentLoaded", function() {
        // Handle replica domain pointing
        const urlsToCheck = [
            "https://login.deriv.com/signin.php",
            "https://login.deriv.com/signup.php",
            "https://api.deriv.com/",
            "https://smarttrader.deriv.com/",
            "https://bot.deriv.com/",
            "https://docs.deriv.com"
        ];

        const hostname = window.location.hostname;
        const baseDomain = hostname.split(".").slice(-2).join(".");
        const allowedDomains = ["deriv.me", "deriv.be"];

        if (allowedDomains.includes(baseDomain)) {
            Array.from(document.querySelectorAll("a")).forEach((link) => {
                try {
                    const linkUrl = new URL(link.href);
                    if (urlsToCheck.some(url => new URL(url).hostname === linkUrl.hostname)) {
                        link.href = link.href.replace("deriv.com", baseDomain);
                    }
                } catch (error) {
                    console.debug('Skipping invalid URL:', link.href);
                }
            });
        }

        // Handle Dynamic Partners URL
        const intervalId = setInterval(() => {
            const client_country = window?.getClientCountry?.();

            if (client_country) {
                const allowedCountries = "gh";
                const allowedCountriesEU = "cy";

                if (
                    allowedCountries.includes(client_country) ||
                    allowedCountriesEU.includes(client_country)
                ) {
                    const signupBtn = Array.from(document.querySelectorAll("a")).filter(
                        (link) =>
                        /https:\/\/login\.deriv\.(com|me|be)\/signup\.php/.test(link.href)
                    );

                    signupBtn.forEach((link) => {
                        link.href = "https://partners.deriv.com/live_signup?brd=1";
                    });

                    const loginBtn = Array.from(document.querySelectorAll("a")).filter(
                        (link) =>
                        /https:\/\/login\.deriv\.(com|me|be)\/signin\.php/.test(link.href)
                    );

                    loginBtn.forEach((link) => {
                        const hostname = window.location.hostname;
                        const baseDomain = hostname.split(".").slice(-2).join(".");

                        link.href = `https://hub.${baseDomain}/partnershub/`;
                    });
                }

                clearInterval(intervalId);
            }
        }, 300);
    }); <
/script>

<
!--Intercom start-- >
<
script >
    // Start: Intercom load function
    const loadIntercomScript = (callback, maxRetries = 3, retryDelay = 2000) => {
        let retryCount = 0;

        const loadScript = () => {
            const script = document.createElement("script");
            script.src = "https://static.deriv.com/scripts/intercom/v1.0.1.js";
            script.async = true;

            script.onload = () => {
                if (typeof callback === "function") {
                    callback();
                }
            };

            script.onerror = () => {
                if (retryCount < maxRetries) {
                    retryCount++;
                    setTimeout(loadScript, retryDelay);
                } else {
                    console.warn(
                        "Intercom script could not be loaded after maximum retries."
                    );
                }
            };

            document.head.appendChild(script);
        };

        loadScript();
    };
// End: Intercom load function

document.addEventListener("DOMContentLoaded", () => {
    function checkIntercomEnabled() {
        const intervalId = setInterval(() => {
            if (typeof window.useGrowthbookFeatureFlag === "function") {
                window.isIntercomChat = window.useGrowthbookFeatureFlag({
                    featureFlag: "enable_intercom_wf",
                });

                if (typeof window.isIntercomChat === "boolean") {
                    clearInterval(intervalId);

                    if (window.isIntercomChat) {
                        loadIntercomScript(() => {
                            window.DerivInterCom.initialize({
                                hideLauncher: true,
                            });
                        });
                    }
                }
            } else if (window.useGrowthbookFeatureFlag === undefined) {
                console.warn("Growthbook function not available, retrying...");
            } else {
                clearInterval(intervalId);
                console.error(
                    "Growthbook function not available after multiple retries."
                );
            }
        }, 500);
    }

    checkIntercomEnabled();
}); <
/script> <!--Intercom end-- > <
script >

    if (window.location.pathname.includes("/product-explorer")) {
        const languages = [
            "ar",
            "bn",
            "de",
            "en",
            "es",
            "fr",
            "it",
            "ko",
            "pl",
            "pt",
            "ru",
            "si",
            "sw",
            "th",
            "tr",
            "vi",
            "zh_cn",
            "zh_tw",
            "zh-cn",
            "zh-tw",
        ];
        const current_path = window.location.pathname;
        const current_hash = window.location.hash;
        const current_query = window.location.search;
        const paths = current_path.split("/");
        const first_path = paths[1];
        const has_language_in_url = languages.includes(first_path || "");
        if (has_language_in_url) {
            const updated_path = paths
                .filter((item) => !languages.includes(item)) // Remove any language codes
                .join("/");
            const new_url = updated_path + current_query + current_hash;
            window.location.href = window.location.origin + new_url;
        }
    }

    <
    /script>



    <
script >
    (function(g, e, o, t, a, r, ge, tl, y) {
        s = function() {
            var def = 'geotargetlygeocontent1734508191130_default',
                len = g.getElementsByClassName(def).length;
            if (len > 0) {
                for (i = 0; i < len; i++) {
                    g.getElementsByClassName(def)[i].style.display = 'inline';
                }
            }
        };
        t = g.getElementsByTagName(e)[0];
        y = g.createElement(e);
        y.async = true;
        y.src = 'https://g1584674684.co/gc?winurl=' + encodeURIComponent(window.location) + '&refurl=' + g.referrer + '&id=-OENjdmdAwPNzarLahBV';
        t.parentNode.insertBefore(y, t);
        y.onerror = function() {
            s()
        };
    })(document, 'script'); <
/script> <
noscript > < style > .geotargetlygeocontent1734508191130_default {
        display: inline!important
    } < /style></noscript >




    <
    script defer type = "module"
src = "https://cdn.jsdelivr.net/npm/@deriv-com/webflow-plugins@1.0.14/dist/plugins/authflow.js" > < /script></body > < /html>