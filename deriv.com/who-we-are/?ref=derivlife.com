<!DOCTYPE html><!-- Last Published: Tue Dec 10 2024 04:20:09 GMT+0000 (Coordinated Universal Time) --><html data-wf-domain="deriv.com" data-wf-page="66585fe0e1dc7e70cc75d5be" data-wf-site="66585fe0e1dc7e70cc75d440" lang="en"><head><meta charset="utf-8"/><title>Who We Are | Trading Broker | Deriv</title><link rel="alternate" hrefLang="x-default" href="https://deriv.com/who-we-are"/><link rel="alternate" hrefLang="en" href="https://deriv.com/who-we-are"/><link rel="alternate" hrefLang="fr" href="https://deriv.com/fr/who-we-are"/><link rel="alternate" hrefLang="ar" href="https://deriv.com/ar/who-we-are"/><link rel="alternate" hrefLang="pt" href="https://deriv.com/pt/who-we-are"/><link rel="alternate" hrefLang="es" href="https://deriv.com/es/who-we-are"/><link rel="alternate" hrefLang="ru" href="https://deriv.com/ru/who-we-are"/><link rel="alternate" hrefLang="vi" href="https://deriv.com/vi/who-we-are"/><link rel="alternate" hrefLang="bn" href="https://deriv.com/bn/who-we-are"/><link rel="alternate" hrefLang="si" href="https://deriv.com/si/who-we-are"/><link rel="alternate" hrefLang="tr" href="https://deriv.com/tr/who-we-are"/><link rel="alternate" hrefLang="sw" href="https://deriv.com/sw/who-we-are"/><link rel="alternate" hrefLang="zh-CN" href="https://deriv.com/zh-cn/who-we-are"/><link rel="alternate" hrefLang="zh-TW" href="https://deriv.com/zh-tw/who-we-are"/><link rel="alternate" hrefLang="ko" href="https://deriv.com/ko/who-we-are"/><link rel="alternate" hrefLang="it" href="https://deriv.com/it/who-we-are"/><link rel="alternate" hrefLang="de" href="https://deriv.com/de/who-we-are"/><link rel="alternate" hrefLang="pl" href="https://deriv.com/pl/who-we-are"/><link rel="alternate" hrefLang="uz" href="https://deriv.com/uz/who-we-are"/><meta content="We are one of the leading regulated trading brokers, providing over 2.5 million traders with innovative online trading options and platforms." name="description"/><meta content="Who We Are | Trading Broker | Deriv" property="og:title"/><meta content="We are one of the leading regulated trading brokers, providing over 2.5 million traders with innovative online trading options and platforms." property="og:description"/><meta content="Who We Are | Trading Broker | Deriv" property="twitter:title"/><meta content="We are one of the leading regulated trading brokers, providing over 2.5 million traders with innovative online trading options and platforms." property="twitter:description"/><meta property="og:type" content="website"/><meta content="summary_large_image" name="twitter:card"/><meta content="width=device-width, initial-scale=1" name="viewport"/><link href="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/css/deriv-staged-2dfc316890fbbd8e3ed6d351bd.dd109215a.min.css" rel="stylesheet" type="text/css"/><link href="https://fonts.googleapis.com" rel="preconnect"/><link href="https://fonts.gstatic.com" rel="preconnect" crossorigin="anonymous"/><script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" type="text/javascript"></script><script type="text/javascript">WebFont.load({  google: {    families: ["Ubuntu:300,300italic,400,400italic,500,500italic,700,700italic"]  }});</script><script type="text/javascript">!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);</script><link href="https://cdn.prod.website-files.com/65c76c6482e68a9e09d9b765/65c773033acbd57cd18cc4c8_deriv_favicon_32.png" rel="shortcut icon" type="image/x-icon"/><link href="https://cdn.prod.website-files.com/65c76c6482e68a9e09d9b765/65c7730a457546181fec95a5_deriv_favicon_256.png" rel="apple-touch-icon"/><link href="https://deriv.com/who-we-are" rel="canonical"/><link
  rel="stylesheet"
  href="https://unpkg.com/@deriv-com/custom-scripts@1.22.0/dist/css/styles.min.css"
/>
<!--Analytics block starts here-->
<script>
  const cacheTrackEvents = {
    interval: null,
    responses: [],
    isTrackingResponses: false,
    hash: (inputString, desiredLength = 32) => {
      const fnv1aHash = (string) => {
        let hash = 0x811c9dc5;
        for (let i = 0; i < string.length; i++) {
          hash ^= string.charCodeAt(i);
          hash = (hash * 0x01000193) >>> 0;
        }
        return hash.toString(16);
      };

      const base64Encode = (string) => btoa(string);

      let hash = fnv1aHash(inputString);
      let combined = base64Encode(hash);

      while (combined.length < desiredLength) {
        combined += base64Encode(fnv1aHash(combined));
      }

      return combined.substring(0, desiredLength);
    },
    getCookies: (name) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) {
        const cookieValue = decodeURIComponent(parts.pop().split(";").shift());

        try {
          return JSON.parse(cookieValue);
        } catch (e) {
          return cookieValue;
        }
      }
      return null;
    },
    trackPageUnload: () => {
      window.addEventListener("beforeunload", (event) => {
        if (!cacheTrackEvents.isPageViewSent()) {
          cacheTrackEvents.push("cached_analytics_page_views", {
            name: window.location.href,
            properties: {
              url: window.location.href,
            },
          });
        }
      });
    },
    trackResponses: () => {
      const originalXhrOpen = XMLHttpRequest.prototype.open;
      const originalXhrSend = XMLHttpRequest.prototype.send;

      XMLHttpRequest.prototype.open = function (method, url) {
        this._url = url;
        this._method = method;
        return originalXhrOpen.apply(this, arguments);
      };

      XMLHttpRequest.prototype.send = function (body) {
        this.addEventListener("load", function () {
          let parsedPayload = null;

          if (typeof body === "string") {
            try {
              parsedPayload = JSON.parse(body);
            } catch (e) {
              parsedPayload = body;
            }
          }

          const responseData = {
            url: this._url,
            method: this._method,
            status: this.status,
            headers: this.getAllResponseHeaders(),
            data:
              this.responseType === "" || this.responseType === "text"
                ? this.responseText
                : null,
            payload: parsedPayload,
          };

          cacheTrackEvents.responses.push(responseData);
        });

        return originalXhrSend.apply(this, arguments);
      };
    },
    isReady: () => {
      if (typeof Analytics === "undefined" || Analytics === null) {
        return false;
      }

      const instances = Analytics.Analytics.getInstances();
      return !!instances?.tracking;
    },
    parseCookies: (cookieName) => {
      const cookies = document.cookie.split("; ").reduce((acc, cookie) => {
        const [key, value] = cookie.split("=");
        acc[decodeURIComponent(key)] = decodeURIComponent(value);
        return acc;
      }, {});

      try {
        return cookies[cookieName] ? JSON.parse(cookies[cookieName]) : null;
      } catch (error) {
        return null;
      }
    },
    isPageViewSent: () =>
      !!cacheTrackEvents.responses.find(
        (e) => e.payload?.type === "page" && e.payload?.anonymousId
      ),
    set: (event) => {
      cacheTrackEvents.push("cached_analytics_events", event);
    },
    push: (cookieName, data) => {
      let storedCookies = [];
      const cacheCookie = cacheTrackEvents.parseCookies(cookieName);
      if (cacheCookie) storedCookies = cacheCookie;
      storedCookies.push(data);

      document.cookie = `${cookieName}=${JSON.stringify(
        storedCookies
      )}; path=/; Domain=.deriv.com`;
    },
    processEvent: (event) => {
      const clientInfo = cacheTrackEvents.getCookies("client_information");

      if (clientInfo) {
        const { email = null } = clientInfo;

        if (email) {
          event.properties.email_hash = cacheTrackEvents.hash(email);
        }
      }
      if (event?.properties?.email) {
        const email = event.properties.email;
        delete event.properties.email;
        event.properties.email_hash = cacheTrackEvents.hash(email);
      }

      return event;
    },
    track: (originalEvent, cache) => {
      const event = cacheTrackEvents.processEvent(originalEvent);

      if (cacheTrackEvents.isReady() && !cache) {
        Analytics.Analytics.trackEvent(event.name, event.properties);
      } else {
        cacheTrackEvents.set(event);
      }
    },
    pageView: () => {
      if (!cacheTrackEvents.isTrackingResponses) {
        cacheTrackEvents.trackResponses();
        cacheTrackEvents.trackPageUnload();
      }

      let pageViewInterval = null;

      pageViewInterval = setInterval(() => {
        const clientInfo = cacheTrackEvents.parseCookies("client_information");
        const signupDevice =
          cacheTrackEvents.parseCookies("signup_device")?.signup_device;

        if (
          typeof window.Analytics !== "undefined" &&
          typeof window.Analytics.Analytics?.pageView === "function" &&
          cacheTrackEvents.isReady()
        ) {
          window.Analytics?.Analytics?.pageView(window.location.href, {
            loggedIn: !!clientInfo,
            device_type: signupDevice,
            network_type: window?.navigator?.connection?.effectiveType,
            network_rtt: window?.navigator?.connection?.rtt,
            network_downlink: window?.navigator?.connection?.downlink,
          });
        }

        if (cacheTrackEvents.isPageViewSent()) {
          clearInterval(pageViewInterval);
        }
      }, 1000);
    },
    listen: (
      element,
      { name = "", properties = {} },
      cache = false,
      callback = null
    ) => {
      const addClickListener = (el) => {
        if (!el.dataset.clickEventTracking) {
          el.addEventListener("click", function (e) {
            let event = {
              name,
              properties,
              cache,
            };

            if (typeof callback === "function") {
              event = callback(e);
            }

            cacheTrackEvents.track(event);
          });
          el.dataset.clickEventTracking = "true";
        }
      };

      const elements =
        element instanceof NodeList ? Array.from(element) : [element];

      elements.forEach(addClickListener);
    },

    addEventhandler: (items) => {
      cacheTrackEvents.interval = setInterval(() => {
        let allListenersApplied = true;

        items.forEach(
          ({ element, event = {}, cache = false, callback = null }) => {
            const elem =
              element instanceof Element
                ? element
                : document.querySelectorAll(element);
            const elements =
              elem instanceof NodeList ? Array.from(elem) : [elem];

            if (!elements.length) {
              allListenersApplied = false;
            }

            elements.forEach((el) => {
              if (!el.dataset.clickEventTracking) {
                cacheTrackEvents.listen(el, event, cache, callback);
                allListenersApplied = false;
              }
            });
          }
        );

        if (allListenersApplied) {
          clearInterval(cacheTrackEvents.interval);
        }
      }, 1);

      return cacheTrackEvents;
    },
    loadEvent: (items) => {
      items.forEach(({ event, cache }) => {
        const { name, properties } = event;
        cacheTrackEvents.track(
          {
            name,
            properties,
          },
          cache
        );
      });

      return cacheTrackEvents;
    },
    pageLoadEvent: (items) => {
      const pathname = window.location.pathname.slice(1);
      items.forEach(
        ({ pages = [], excludedPages = [], event, callback = null }) => {
          let dispatch = false;
          if (pages.length) {
            if (pages.includes(pathname)) {
              dispatch = true;
            }
          } else if (excludedPages.length) {
            if (!excludedPages.includes(pathname)) {
              dispatch = true;
            }
          } else {
            dispatch = true;
          }

          if (dispatch) {
            const eventData = callback ? callback() : event;
            cacheTrackEvents.loadEvent([{ event: eventData }]);
          }
        }
      );

      return cacheTrackEvents;
    },
    trackConsoleErrors: (callback) => {
      const originalConsoleError = console.error;
      console.error = function (...args) {
        // Log the error to the console as usual
        originalConsoleError.apply(console, args);

        // Create a clean error message without __trackjs_state__
        const errorMessage = args
          .map((arg) =>
            arg && typeof arg === "object" && arg.message
              ? arg.message
              : typeof arg === "object"
              ? JSON.stringify(arg, (key, value) =>
                  key.startsWith("__trackjs") ? undefined : value
                )
              : String(arg)
          )
          .join(" ");

        if (typeof callback === "function") {
          callback(errorMessage);
        }
      };
    },
  };

  cacheTrackEvents
    .pageLoadEvent([
      {
        pages: ["signup", "eu/signup"],
        event: {
          name: "ce_virtual_signup_form",
          properties: {
            action: "open",
            form_source: window.location.hostname,
            form_name: "default_diel_deriv",
            url: window.location.href,
          },
        },
      },
      {
        pages: ["signup-success", "eu/signup-success"],
        callback: () => {
          const url = new URL(window.location.href);
          const email = url.searchParams.get("email");
          const formattedEmail = decodeURIComponent(email).replace(/ /g, "+");

          return {
            name: "ce_virtual_signup_form",
            properties: {
              action: "email_confirmation_sent",
              form_source: window.location.hostname,
              form_name: "default_diel_deriv",
              url: window.location.href,
              email: formattedEmail,
            },
          };
        },
      },
    ])
    .addEventhandler([
      {
        element: ".livechatbtn",
        event: {
          name: "ce_widget_usage_form",
          properties: {
            action: "click",
            widget_name: "livechat",
          },
        },
      },
      {
        element: ".whatsapp_chat",
        event: {
          name: "ce_widget_usage_form",
          properties: {
            action: "click",
            widget_name: "whatsapp",
          },
        },
      },
      {
        element: "#create",
        callback: (e) => {
          const emailElement = document.getElementById("Email");
          const email = emailElement ? emailElement.value : "";

          return {
            name: "ce_virtual_signup_form",
            properties: {
              action: "started",
              signup_provider: "email",
              form_source: window.location.hostname,
              form_name: "default_diel_deriv",
              email,
            },
          };
        },
        cache: true,
      },
      {
        element: "#signup_login",
        event: {
          name: "ce_virtual_signup_form",
          properties: {
            action: "go_to_login",
            signup_provider: "email",
            form_source: window.location.hostname,
            form_name: "default_diel_deriv",
          },
        },
      },
      {
        element: ".sign-up_banner-badges-wrapper a",
        callback: (e) => {
          const provider = e.currentTarget.getAttribute("data-provider");

          return {
            name: "ce_virtual_signup_form",
            properties: {
              signup_provider: provider,
              action: "started",
              form_source: window.location.hostname,
              form_name: "default_diel_deriv",
            },
          };
        },
      },
    ])
    .pageView();

  const trackSignupErrorEvent = (action, errorMessage, screen_name) => {
    const form_name = isMobile()
      ? "virtual_signup_web_mobile_default"
      : "virtual_signup_web_desktop_default";
    cacheTrackEvents.loadEvent([
      {
        event: {
          name: "ce_virtual_signup_form",
          properties: {
            action,
            form_name,
            error_message: errorMessage,
            screen_name,
          },
        },
      },
    ]);
  };

  cacheTrackEvents.trackConsoleErrors((errorMessage) => {
    window.is_tracking_signup_errors = window.useGrowthbookFeatureFlag({
      featureFlag: "signup_flow_error_enabled",
    });

    if (is_tracking_signup_errors) {
      if (errorMessage) {
        const currentUrl = window.location.href;
        if (
          currentUrl.includes("signup") ||
          currentUrl.includes("signup-success")
        ) {
          const screen_name = currentUrl.includes("signup-success")
            ? "signup-success"
            : "signup";
          trackSignupErrorEvent("signup_flow_error", errorMessage, screen_name);
        }
      }
    }
  });

  //Analytics block for cta_clicks method starts here
  (function () {
    const trackCTAEvents = (event) => {
      const anchor = event.target.closest("a");
      let identifier = "";

      if (anchor) {
        const href = anchor.getAttribute("href");
        identifier =
          href && href !== "#" && !href.startsWith("#")
            ? href.split("/").pop().toLowerCase()
            : anchor.getAttribute("data-href") || "";
      }
      const section = anchor?.closest("section");
      const sectionName = section ? section.className.split(" ")[0] : "";

      if (identifier && sectionName) {
        const eventName = "ce_cta_clicks";
        const eventProperties = {
          action: "click",
          component_type: "btn",
          component_name: identifier,
          section_name: sectionName,
          cta_name: anchor.textContent?.replace(/\s+/g, " ").trim(),
        };
        cacheTrackEvents.track({
          name: eventName,
          properties: eventProperties,
        });
      }
    };

    const interval = setInterval(() => {
      if (document.body) {
        document.body.addEventListener("click", trackCTAEvents);
        clearInterval(interval);
      }
    }, 10);
  })();
  //Analytics block for cta_clicks method ends here

  document.addEventListener("DOMContentLoaded", () => {
    const RUDDERSTACK_STAGING_KEY = "2mmmTCZy9LNia85JObhPez0koy0";
    const RUDDERSTACK_PRODUCTION_KEY = "2hrePojvWH0mpU7La2XfDgYivgC";
    const GB_STAGING_CLIENT_KEY = "sdk-9wuqJ1mlcQsSyZQ";
    const GB_STAGING_DECRYPTION_KEY = "";
    const GB_PROD_CLIENT_KEY = "sdk-UhZV3cNEg5nLNLNS";
    const GB_PROD_DECRYPTION_KEY = "nre64BV0dNIa44zW4tz5ow==";
    var GB_CLIENT_KEY, RUDDERSTACK_KEY, GB_DECRYPTION_KEY;
    if (
      window.location.hostname === "deriv.com" ||
      window.location.hostname === "deriv.be" ||
      window.location.hostname === "deriv.me"
    ) {
      GB_CLIENT_KEY = GB_PROD_CLIENT_KEY;
      GB_DECRYPTION_KEY = GB_PROD_DECRYPTION_KEY;
      RUDDERSTACK_KEY = RUDDERSTACK_PRODUCTION_KEY;
    } else {
      GB_CLIENT_KEY = GB_STAGING_CLIENT_KEY;
      GB_DECRYPTION_KEY = GB_STAGING_DECRYPTION_KEY;
      RUDDERSTACK_KEY = RUDDERSTACK_STAGING_KEY;
    }
    const client_information = window.parseCookies(
      document.cookie,
      "client_information"
    );
    const clientInfo = client_information
      ? JSON.parse(client_information)
      : null;
    const utm_data_string = window.parseCookies(document.cookie, "utm_data");
    const utm_data = utm_data_string ? JSON.parse(utm_data_string) : {};
    const { utm_source, utm_medium, utm_campaign } = utm_data;
    const cookies = window.parseCookies(document.cookie, "signup_device");
    let signupDevice = null;
    const isBrowser = () => typeof window !== "undefined";
    const getLanguage = () =>
      isBrowser() ? localStorage.getItem("i18n") || navigator.language : null;
    if (cookies) {
      signupDevice = JSON.parse(cookies)?.signup_device || null;
    }
    const initialiseConfig = {
      growthbookKey: typeof _growthbook !== "undefined" ? null : GB_CLIENT_KEY,
      growthbookDecryptionKey:
        typeof _growthbook !== "undefined" ? null : GB_DECRYPTION_KEY,
      rudderstackKey: RUDDERSTACK_KEY,
      growthbookOptions: {
        navigate: (url) => window.location.replace(url),
        antiFlicker: false,
        navigateDelay: 0,
        attributes: {
          country:
            window.parseCookies(document.cookie, "clients_country") ||
            window.parseCookies(document.cookie, "website_status"),
          user_language:
            window.parseCookies(document.cookie, "user_language") ||
            getLanguage(),
          device_language:
            window.parseCookies(document.cookie, "language") || " ",
          device_type: signupDevice,
          utm_source: utm_data?.["utm_source"],
          utm_medium: utm_data?.["utm_medium"],
          utm_campaign: utm_data?.["utm_campaign"],
          is_authorised: !!window.parseCookies(
            document.cookie,
            "client_information"
          ),
          loggedIn: !!window.parseCookies(
            document.cookie,
            "client_information"
          ),
          url: window.location.href,
          network_type: navigator.connection?.effectiveType,
          network_rtt: navigator.connection?.rtt,
          network_downlink: navigator.connection?.downlink,
        },
      },
    };
    try {
      window.Analytics?.Analytics.initialise(initialiseConfig);

      const userId = clientInfo?.user_id
        ? clientInfo?.user_id
        : window.Analytics?.Analytics?.getInstances?.().tracking?.getAnonymousId();
      window.Analytics?.Analytics?.identifyEvent(userId);
    } catch (error) {
      console.error("Error during initialisation:", error);
    }

    window.Analytics?.Analytics?.pageView(location.pathname, "Deriv.com");

    window.getGrowthbookInstance = function () {
      if (typeof _growthbook !== "undefined") {
        return _growthbook;
      } else {
        return window.Analytics?.Analytics?.getInstances?.().ab?.GrowthBook;
      }
    };
    window.useGrowthbookFeatureFlag = function ({ featureFlag }) {
      const growthBookInstance = window?.getGrowthbookInstance?.();
      if (!growthBookInstance) return null;
      let featureFlagValue = growthBookInstance.getFeatureValue(featureFlag);
      function updateFeatureFlagValue() {
        const value = growthBookInstance.getFeatureValue(featureFlag);
        featureFlagValue = value;
      }
      growthBookInstance.setRenderer(updateFeatureFlagValue);
      return featureFlagValue;
    };
  });
</script>
<!--Analytics block ends-->

<!-- Google Tag Manager -->
<script defer>
  (function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != "dataLayer" ? "&l=" + l : "";
    j.async = true;
    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
    f.parentNode.insertBefore(j, f);
  })(window, document, "script", "dataLayer", "GTM-NF7884S");
</script>
<!-- End Google Tag Manager -->

<!-- Analytics Integration -->
<script
  defer
  src="https://unpkg.com/@deriv-com/analytics@1.27.0/dist/analytics.bundle.js"
></script>
<!--  Analytics end-->

<!-- Hotjar Tracking Code for Deriv.com (.com + app.deriv) -->
<!-- <script>
  (function (h, o, t, j, a, r) {
    h.hj =
      h.hj ||
      function () {
        (h.hj.q = h.hj.q || []).push(arguments);
      };
    h._hjSettings = { hjid: 3050531, hjsv: 6 };
    a = o.getElementsByTagName("head")[0];
    r = o.createElement("script");
    r.async = 1;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    a.appendChild(r);
  })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");
</script> -->

<!-- [Attributes by Finsweet] Disable scrolling -->
<script
  defer
  src="https://cdn.jsdelivr.net/npm/@finsweet/attributes-scrolldisable@1/scrolldisable.js"
></script>

<!-- Keep this css code to improve the font quality-->
<script>
  window.growthbook_config = window.growthbook_config || {};
  window.growthbook_config.attributes = {
    deviceId: "foo",
    company: "foo",
    loggedIn: true,
    employee: true,
    country: "foo",
    user_language: "foo",
    device_type: "foo",
    device_language: "foo",
    user_ip: "foo",
  };
</script>
<!-- Datadog Integration -->
<script
  async
  src="https://www.datadoghq-browser-agent.com/datadog-rum.js"
></script>
<!-- Marketing and Affiliate Cookie-->
<script>
  function loadScript(url, callback) {
    var script = document.createElement("script");
    script.onload = function () {
      if (callback) callback();
    };
    script.src = url;
    document.head.appendChild(script);
  }
  // Usage to load the js-cookie script
  loadScript("https://static.deriv.com/scripts/cookie.js", function () {
    console.log("js-cookie loaded successfully!");
  });
  (function () {
    // Function to dynamically load js-cookie
    function loadJSCookie(callback) {
      var script = document.createElement("script");
      script.onload = function () {
        if (callback) callback();
      };
      script.src =
        "https://cdn.jsdelivr.net/npm/js-cookie@3.0.5/dist/js.cookie.min.js";
      document.head.appendChild(script);
    }
    // Define your cookie storage and manipulation functions
    function setupCookies() {
      var deriv_cookie_domain = "deriv.com"; // Modify as per your actual usage
      var CookieStorage = function (cookie_name, cookie_domain = "") {
        var hostname = window.location.hostname;
        var is_deriv_com =
          hostname === "deriv.com" || hostname === "staging.deriv.com";
        this.initialized = false;
        this.cookie_name = cookie_name;
        this.domain = is_deriv_com
          ? deriv_cookie_domain
          : cookie_domain || hostname;
        this.path = "/";
        this.same_site = "None";
        this.is_secure = true;
        this.expires = new Date("Thu, 1 Jan 2037 12:00:00 GMT");
        this.value = {};
      };
      CookieStorage.prototype = {
        initialize: function () {
          var cookie_value = Cookies.get(this.cookie_name);
          try {
            this.value = cookie_value ? JSON.parse(cookie_value) : {};
          } catch (e) {
            this.value = {};
          }
          this.initialized = true;
        },
        write: function (val, expiry_date, is_secure, sameSite) {
          if (!this.initialized) this.initialize();
          this.value = val;
          this.expires = expiry_date || this.expires;
          Cookies.set(this.cookie_name, JSON.stringify(this.value), {
            expires: this.expires,
            path: this.path,
            domain: this.domain,
            secure: is_secure !== undefined ? is_secure : this.is_secure,
            sameSite: sameSite || this.same_site,
          });
        },
        get: function (key) {
          if (!this.initialized) this.initialize();
          return this.value[key];
        },
        set: function (key, val, options) {
          if (!this.initialized) this.initialize();
          this.value[key] = val;
          Cookies.set(this.cookie_name, JSON.stringify(this.value), {
            expires: this.expires,
            path: this.path,
            domain: this.domain,
            secure:
              options && options.secure !== undefined
                ? options.secure
                : this.is_secure,
            sameSite: (options && options.sameSite) || this.same_site,
            ...options,
          });
        },
        remove: function () {
          Cookies.remove(this.cookie_name, {
            path: this.path,
            domain: this.domain,
          });
        },
      };
      function getCookiesObject(cookies) {
        var cookies_objects = {};
        cookies.forEach(function (cookie_name) {
          var cookie_object = new CookieStorage(
            cookie_name.includes("utm") ? "utm_data" : cookie_name
          );
          cookies_objects[cookie_name] = cookie_object;
        });
        return cookies_objects;
      }
      function getDataObjFromCookies(cookies, fields) {
        var data = {};
        fields.forEach(function (elem) {
          if (cookies[elem] && cookies[elem].get(elem)) {
            data[elem] = cookies[elem].get(elem);
          }
        });
        return data;
      }
      function getDataLink(data) {
        var data_link = "";
        Object.keys(data).forEach(function (elem) {
          data_link += "&" + elem + "=" + encodeURIComponent(data[elem]);
        });
        return data_link;
      }
      function getCookiesFields() {
        return [
          "date_first_contact",
          "signup_device",
          "gclid",
          "utm_source",
          "utm_ad_id",
          "utm_adgroup_id",
          "utm_adrollclk_id",
          "utm_campaign",
          "utm_campaign_id",
          "utm_content",
          "utm_fbcl_id",
          "utm_gl_client_id",
          "utm_medium",
          "utm_msclk_id",
          "utm_term",
          "sidc",
        ];
      }
      // Example usage:
      var exampleCookies = getCookiesObject(["utm_source", "utm_campaign"]);
      var dataObj = getDataObjFromCookies(exampleCookies, getCookiesFields());
      var dataLink = getDataLink(dataObj);
    }
    // Load js-cookie and setup cookies after it's loaded
    loadJSCookie(setupCookies);
  })();
</script>
<!-- [Attributes by Finsweet] CMS Load -->
<script async src="https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsload@1/cmsload.js"></script>
<!-- [Attributes by Finsweet] Accordion -->
<script defer src="https://cdn.jsdelivr.net/npm/@finsweet/attributes-accordion@1/accordion.js"></script>

<style>
/* removing scroll bar(vertical) */
::-webkit-scrollbar {
  display:none;
}

</style>

</head><body><div class="page-wrapper"><div class="global-styles w-embed"></div><div data-animation="default" class="new-navbar_main-wrapper derivgo-query-element w-nav" data-easing2="ease" fs-scrolldisable-element="smart-nav" data-easing="ease" data-collapse="medium" data-w-id="8e11cc17-102d-e2e0-18f4-df5dcff9dc9f" role="banner" data-no-scroll="1" data-duration="400" data-doc-height="1"><div data-w-id="4c2420d9-8434-a78a-2a18-0dd184489c44" class="new-navbar_backdrop-blur"></div><section data-w-id="2997ddca-0217-b8d8-8070-a9b0adc02c63" class="new-navbar_component"><div class="new-navbar_component-wrapper"><div class="new-navbar_container"><div class="logo-wrap is-adaptive"><a href="/" class="new-navbar_logo-link w-nav-brand"><div class="new-navbar_logo is-red is-adaptive w-embed"><svg width="100%" height="100%" viewBox="0 0 72 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.4238 0.808863L13.1912 7.79644H8.91248C4.92071 7.79644 1.11591 11.0293 0.410715 15.0195L0.112228 16.7179C-0.589682 20.7082 2.07366 23.9411 6.06543 23.9411H9.63407C12.5434 23.9411 15.315 21.5869 15.8267 18.6787L19.1133 0.0552979L14.4238 0.808863ZM11.3878 18.0196C11.2304 18.918 10.4213 19.6492 9.52256 19.6492H7.35448C5.56031 19.6492 4.35984 18.1934 4.67471 16.3966L4.86168 15.3376C5.17983 13.5441 6.89199 12.0851 8.68615 12.0851H12.4347L11.3878 18.0196ZM47.3757 23.9408L50.1834 8.01904H54.6245L51.8168 23.9408H47.3757ZM47.8561 8.20264C47.6335 9.46551 47.4099 10.7284 47.1873 11.9913C45.0833 11.3377 42.9125 11.5458 42.2456 11.6788C41.5254 15.7671 40.8042 19.8564 40.083 23.9447H35.6389C36.2424 20.5239 38.3042 8.84149 38.3042 8.84149C39.7496 8.24317 43.2991 7.02889 47.8561 8.20264ZM29.8494 7.79374H26.3924C23.0238 7.79374 19.8128 10.5217 19.219 13.8889L18.5204 17.8464C17.9267 21.2137 20.1736 23.9417 23.5422 23.9417H30.8959L31.6503 19.6629H24.7392C23.6175 19.6629 22.8664 18.7546 23.0665 17.63L23.0895 17.4956H34.2316L34.8679 13.8889C35.4615 10.5217 33.2148 7.79374 29.8462 7.79374H29.8494ZM30.4103 13.548L30.3841 13.7775H23.7586L23.7947 13.5742C23.9947 12.4528 25.0181 11.4659 26.143 11.4659H28.731C29.843 11.4659 30.5941 12.4365 30.4103 13.548ZM67.5083 8.01904H71.9526C70.4387 12.0426 66.9691 18.887 63.6082 23.9408H59.1639C57.6212 19.1308 56.625 12.429 56.4349 8.01904H60.8794C60.9596 9.45755 61.6038 14.7933 62.339 18.5208C64.3555 14.8945 66.5786 10.1366 67.5049 8.01904H67.5083Z" fill="currentcolor"/>
</svg></div></a><div class="logo-wrapper-25 twenty-five-logo is-black is-adaptive w-embed"><svg width="100%" height="100%" viewBox="0 0 77 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_4_23)">
<path d="M30.6428 8.63601C30.1769 8.19464 29.5892 7.83174 28.8781 7.54566C28.1727 7.26204 27.3039 7.07895 26.3329 6.9964L26.7628 5.6731H23.4206L22.1317 9.64136C23.2751 9.64136 24.3598 9.70267 25.1526 9.82527C25.9454 9.94787 26.5781 10.1195 27.0521 10.3402C27.5262 10.5609 27.8687 10.8306 28.082 11.1486C28.2945 11.4673 28.4008 11.8229 28.4008 12.2144C28.4008 13.1462 28.0902 13.832 27.469 14.2733C26.8478 14.7147 25.9495 14.9354 24.7734 14.9354C24.1685 14.9354 23.54 14.8455 22.8861 14.6657C22.2322 14.4858 21.3486 14.1556 20.7773 13.8123H9.989C9.92361 13.9341 9.82063 14.1646 9.76014 14.2905C9.4005 15.0425 9.14712 15.9326 9 16.9624H19.7744C20.1103 17.1275 20.5443 17.233 20.9375 17.3621C21.3862 17.5092 21.8439 17.6278 22.3098 17.7177C22.7757 17.8076 23.2294 17.8771 23.6699 17.9261C24.1113 17.9751 24.5036 17.9997 24.8461 17.9997C26.0223 17.9997 27.0603 17.8566 27.9586 17.5705C28.8569 17.2845 29.6088 16.8807 30.2137 16.3576C30.8177 15.8345 31.2713 15.1978 31.5738 14.4458C31.8762 13.6946 32.0274 12.8609 32.0274 11.9455C32.0274 11.308 31.9121 10.708 31.6841 10.144C31.4552 9.58006 31.1079 9.0782 30.642 8.63683L30.6428 8.63601Z" fill="currentColor" />
<path d="M24.9138 1.08374L23.8896 4.23383L33.1863 4.2322L34.2096 1.08374H24.9138Z" fill="currentColor"/>
<path d="M22.3037 2.47496C22.0748 1.98454 21.7528 1.55543 21.3359 1.18844C20.919 0.820626 20.4295 0.531282 19.8655 0.318769C19.3015 0.106256 18.6926 0 18.0395 0C16.9941 0 15.9626 0.112795 15.0006 0.490414C13.3716 1.12959 12.1382 2.22158 12.1382 2.22158L13.3095 4.85265C14.0606 4.2805 14.7554 3.8522 15.3921 3.56613C16.0296 3.28005 16.6827 3.13702 17.3529 3.13702C17.827 3.13702 18.2144 3.28005 18.5168 3.56613C18.8193 3.8522 18.9705 4.20775 18.9705 4.63196C18.9705 4.97525 18.8969 5.30219 18.7498 5.61279C18.6027 5.92339 18.3697 6.25442 18.0518 6.60506C17.733 6.95652 17.3161 7.34068 16.802 7.75672C16.2871 8.17357 15.6618 8.66807 14.927 9.2394C14.1423 9.84425 13.4157 10.4123 12.7455 10.9428C12.1815 11.3899 11.5554 11.8672 11.0903 12.3723H15.5899C15.7231 12.2653 15.8572 12.1606 15.9928 12.0585C16.426 11.7315 16.8666 11.4128 17.3161 11.103C17.7649 10.7932 18.2103 10.4654 18.6517 10.1221C19.4029 9.53365 20.0363 9.00319 20.5512 8.52912C21.0662 8.05505 21.4781 7.58916 21.7895 7.13226C22.0993 6.67535 22.32 6.20047 22.4516 5.71087C22.5824 5.22046 22.6478 4.66547 22.6478 4.04428C22.6478 3.4893 22.5333 2.96537 22.3045 2.47577L22.3037 2.47496Z" fill="currentColor"/>
<path d="M39.8743 13.2707C40.314 12.5751 40.7145 11.8542 41.0742 11.1071C41.433 10.3592 41.7493 9.64406 42.0215 8.95993C42.2936 8.27662 42.5225 7.64726 42.708 7.07429C42.8936 6.50051 43.0268 6.04033 43.1077 5.69214H44.7939C44.6664 6.13269 44.4866 6.68032 44.2553 7.33421C44.0232 7.98891 43.742 8.69593 43.4118 9.45525C43.0816 10.2146 42.7105 10.9911 42.2994 11.7847C41.8882 12.5784 41.4387 13.3401 40.9524 14.0709C40.5813 14.616 40.211 15.1285 39.8399 15.6091C39.4689 16.0897 39.0724 16.5066 38.6491 16.8605C38.2257 17.2136 37.7598 17.4915 37.2497 17.695C36.7397 17.8977 36.1659 17.9991 35.5292 17.9991C35.2047 17.9991 34.9031 17.9582 34.6252 17.8773C34.3473 17.7964 34.1446 17.7089 34.0171 17.6166L34.5729 16.2957C34.689 16.3881 34.8451 16.4665 35.0421 16.5303C35.239 16.594 35.4589 16.6259 35.7025 16.6259C36.3743 16.6259 36.9457 16.4633 37.4148 16.1388C37.884 15.8143 38.327 15.3852 38.7447 14.8523C38.3156 13.4505 37.9657 11.9727 37.6927 10.4197C37.4206 8.86675 37.2555 7.29089 37.1974 5.69214H38.8485C38.8599 6.21361 38.8885 6.78494 38.9351 7.4045C38.9817 8.02488 39.0479 8.66732 39.1346 9.33428C39.2212 10.0004 39.3258 10.6707 39.4468 11.3417C39.5686 12.0144 39.71 12.6568 39.8726 13.2715L39.8743 13.2707Z" fill="currentColor"/>
<path d="M48.4952 14.9568C47.9042 14.9568 47.3942 14.8726 46.9659 14.7051C46.5368 14.5375 46.178 14.3054 45.8886 14.0095C45.5985 13.7136 45.3843 13.3695 45.2454 12.9755C45.1064 12.5816 45.0361 12.1647 45.0361 11.7242C45.0361 10.9133 45.1579 10.1311 45.4015 9.37753C45.6451 8.62393 45.9924 7.9586 46.4444 7.37909C46.8964 6.79959 47.4465 6.33941 48.0955 5.99694C48.7445 5.65529 49.4801 5.48364 50.3032 5.48364C50.7781 5.48364 51.1867 5.54413 51.5284 5.66673C51.8701 5.78852 52.148 5.95362 52.3629 6.16205C52.5771 6.37047 52.7365 6.61078 52.8411 6.88377C52.9457 7.15595 52.9972 7.43713 52.9972 7.72729C52.9972 8.27246 52.8983 8.73264 52.7013 9.10944C52.5043 9.48624 52.2436 9.80174 51.9191 10.0568C51.5946 10.3118 51.2154 10.5088 50.7805 10.6477C50.3457 10.7867 49.8937 10.897 49.4245 10.9779C48.9554 11.0588 48.4797 11.1144 47.9991 11.143C47.5184 11.1724 47.0632 11.1986 46.6349 11.2215C46.6234 11.3138 46.6177 11.3899 46.6177 11.4471V11.586C46.6177 11.8525 46.6496 12.1051 46.7134 12.3421C46.7771 12.5799 46.8956 12.7884 47.0697 12.9682C47.243 13.148 47.4841 13.2894 47.7906 13.394C48.098 13.4986 48.5001 13.551 48.9987 13.551C49.2185 13.551 49.4474 13.5305 49.6853 13.4905C49.9231 13.4496 50.1487 13.3973 50.3628 13.3344C50.577 13.2706 50.7683 13.2068 50.9366 13.1431C51.1042 13.0793 51.2235 13.0189 51.293 12.96L51.432 14.3332C51.1998 14.4607 50.8263 14.5972 50.3114 14.7418C49.7956 14.8865 49.1908 14.9593 48.4944 14.9593V14.9576L48.4952 14.9568ZM46.8441 9.98564C47.516 9.96276 48.1298 9.91944 48.6864 9.85487C49.2431 9.79111 49.7237 9.68159 50.1291 9.52465C50.5345 9.36772 50.85 9.15684 51.0764 8.89039C51.302 8.62393 51.4156 8.27655 51.4156 7.84744C51.4156 7.74282 51.3952 7.63329 51.3551 7.51723C51.3143 7.40198 51.2448 7.29409 51.1467 7.19519C51.0478 7.09629 50.9121 7.01537 50.738 6.95162C50.5647 6.88786 50.3498 6.85598 50.0948 6.85598C49.6885 6.85598 49.3093 6.94262 48.9562 7.11672C48.6023 7.29082 48.2868 7.51968 48.0089 7.8033C47.731 8.08692 47.4931 8.41714 47.2961 8.79394C47.0991 9.17074 46.9479 9.56716 46.8441 9.98483V9.98564Z" fill="currentColor"/>
<path d="M59.8115 14.835C59.7535 14.7075 59.6955 14.5653 59.6375 14.4092C59.5794 14.2523 59.5328 14.0872 59.4985 13.9139C59.2435 14.146 58.901 14.3773 58.4727 14.6094C58.0436 14.8416 57.5164 14.9576 56.8911 14.9576C56.3811 14.9576 55.9438 14.8767 55.5785 14.7141C55.2139 14.5522 54.9148 14.3266 54.6835 14.0357C54.4513 13.7463 54.2805 13.4038 54.171 13.0099C54.0606 12.6159 54.0059 12.1811 54.0059 11.7062C54.0059 10.9297 54.1366 10.1712 54.3966 9.42903C54.6573 8.68769 55.0488 8.02727 55.5703 7.44694C56.0918 6.86744 56.7465 6.39828 57.5344 6.03864C58.3223 5.67982 59.2435 5.5 60.2979 5.5C60.6109 5.5 60.9763 5.53433 61.3931 5.60462C61.81 5.6741 62.1696 5.79016 62.4704 5.95282L61.1324 11.4103C61.0744 11.6776 61.0245 11.9318 60.9845 12.1754C60.9436 12.4189 60.924 12.6739 60.924 12.9404C60.924 13.2069 60.9469 13.4766 60.9934 13.7488C61.04 14.0209 61.121 14.3136 61.237 14.6266L59.8115 14.835ZM57.2213 13.5837C57.7077 13.5837 58.1245 13.479 58.4727 13.2714C58.8209 13.0622 59.1217 12.8194 59.3767 12.5415C59.3882 12.3445 59.4086 12.1386 59.4372 11.9244C59.4658 11.7103 59.5042 11.4929 59.55 11.273L60.5929 6.96225C60.5349 6.93937 60.4393 6.92138 60.306 6.90994C60.172 6.8985 60.0543 6.89278 59.9497 6.89278C59.2893 6.89278 58.6918 7.02028 58.1597 7.2753C57.6268 7.53032 57.1715 7.86952 56.7947 8.29209C56.4179 8.71548 56.1285 9.20753 55.9258 9.76906C55.7231 10.3314 55.6218 10.9191 55.6218 11.5337C55.6218 11.7773 55.6447 12.0233 55.6912 12.2726C55.7378 12.5219 55.822 12.7418 55.943 12.933C56.0648 13.1243 56.2266 13.2804 56.4301 13.4022C56.6328 13.524 56.896 13.5845 57.2213 13.5845V13.5837Z" fill="currentColor"/>
<path d="M68.2595 5.50082C68.3985 5.50082 68.5554 5.50654 68.7287 5.51798C68.902 5.52942 69.0736 5.54986 69.2412 5.57847C69.4095 5.60789 69.5624 5.6365 69.7013 5.66511C69.8403 5.69453 69.9449 5.72559 70.0144 5.76074L69.5452 7.16904C69.3131 7.07668 69.0466 7.00721 68.7458 6.96062C68.4442 6.91403 68.1549 6.89114 67.8762 6.89114C67.6326 6.89114 67.3923 6.90831 67.1553 6.94345C66.9174 6.97778 66.7123 7.02437 66.5382 7.0824L64.6958 14.7304H63.0791L65.165 6.03864C65.6284 5.8768 66.1262 5.74602 66.6599 5.64794C67.1929 5.54904 67.7258 5.5 68.2595 5.5V5.50082Z" fill="currentColor"/>
<path d="M71.8045 13.6008C72.0481 13.6008 72.2941 13.5779 72.5426 13.5313C72.7919 13.4848 73.0118 13.4096 73.203 13.3057C73.3943 13.2011 73.5504 13.0597 73.6722 12.8799C73.794 12.7001 73.8545 12.4778 73.8545 12.2105C73.8545 12.0372 73.8259 11.8835 73.7678 11.7495C73.7098 11.6163 73.6174 11.492 73.4899 11.376C73.3624 11.2607 73.203 11.1471 73.0118 11.0368C72.8205 10.9264 72.5916 10.8022 72.3252 10.6632C72.0579 10.5357 71.8152 10.4082 71.5953 10.2807C71.3746 10.1532 71.1809 10.0028 71.0133 9.82871C70.8449 9.65462 70.715 9.44946 70.6226 9.21161C70.5294 8.97376 70.4837 8.68768 70.4837 8.35093C70.4837 7.48126 70.7967 6.78406 71.422 6.25605C72.0473 5.72885 72.957 5.46484 74.1512 5.46484C74.7078 5.46484 75.1966 5.52042 75.6199 5.62995C76.0433 5.74029 76.3351 5.84165 76.4978 5.93401L75.8897 7.25486C75.727 7.16249 75.4663 7.06359 75.1075 6.95897C74.7478 6.85435 74.3481 6.80204 73.9084 6.80204C73.6877 6.80204 73.4678 6.82574 73.248 6.87152C73.0273 6.9181 72.8279 6.99575 72.648 7.1061C72.4682 7.21644 72.3235 7.36111 72.2132 7.54093C72.1029 7.72075 72.0481 7.93817 72.0481 8.19318C72.0481 8.50623 72.1699 8.76451 72.4135 8.9664C72.657 9.16911 73.0216 9.3808 73.5079 9.60067C73.8087 9.73962 74.0784 9.88184 74.3163 10.0265C74.5541 10.1712 74.7568 10.3338 74.9244 10.5137C75.0919 10.6935 75.2203 10.9044 75.3069 11.1479C75.3935 11.3915 75.4377 11.6808 75.4377 12.0176C75.4377 12.5047 75.3445 12.933 75.1598 13.3033C74.9742 13.6744 74.7168 13.9809 74.3866 14.2245C74.0563 14.468 73.6656 14.6503 73.2136 14.7721C72.7616 14.8939 72.2688 14.9552 71.7367 14.9552C71.3427 14.9552 70.9864 14.929 70.6676 14.8767C70.3488 14.8244 70.0701 14.7639 69.8331 14.6944C69.5952 14.625 69.3982 14.553 69.2421 14.477C69.086 14.4018 68.9667 14.3405 68.8857 14.2948L69.5118 12.9739C69.5928 13.0205 69.7056 13.0785 69.851 13.1472C69.9957 13.2167 70.1698 13.2861 70.3725 13.3556C70.5752 13.4251 70.7984 13.4831 71.0419 13.5289C71.2855 13.5755 71.5405 13.5984 71.807 13.5984L71.8045 13.6008Z" fill="currentColor"/>
<rect width=".5" height="18" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_4_23">
<rect width="76.498" height="18" fill="currentColor"/>
</clipPath>
</defs>
</svg></div></div><nav role="navigation" class="new-navbar_menu is-padding-0 is-adaptive w-nav-menu"><div class="new-navbar_menu-wrapper is-overflow-scroll mobile-nav padding-left-0 padding-0"><div class="new-navbar_container new-navbar_container-language-list"><div class="new-navbar_language-button-wrapper"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/66585fe0e1dc7e70cc75d56e_left-arrow.svg" loading="lazy" data-w-id="22a5e6c0-b7b0-f77c-2ebc-28588b518da4" alt="" class="new-navbar_language-button"/></div><div class="new-navbar_dropdown-content"><div class="new-navbar_dropdown-content-bottom new-navbar_dropdown-content-bottom-language"><div id="w-node-_22a5e6c0-b7b0-f77c-2ebc-28588b518da7-cff9dc9f" class="w-locales-list"><div role="list" class="locales-list w-locales-items"><div role="listitem" class="locale w-locales-item"><a hreflang="en" href="/who-we-are" aria-current="page" class="new-navbar_dropdown-link w--current">English</a></div><div role="listitem" class="locale w-locales-item"><a hreflang="fr" href="/fr/who-we-are" class="new-navbar_dropdown-link">Français</a></div><div role="listitem" class="locale w-locales-item"><a hreflang="ar" href="/ar/who-we-are" class="new-navbar_dropdown-link">العربية</a></div><div role="listitem" class="locale w-locales-item"><a hreflang="pt" href="/pt/who-we-are" class="new-navbar_dropdown-link">Português</a></div><div role="listitem" class="locale w-locales-item"><a hreflang="es" href="/es/who-we-are" class="new-navbar_dropdown-link">Español</a></div><div role="listitem" class="locale w-locales-item"><a hreflang="ru" href="/ru/who-we-are" class="new-navbar_dropdown-link">Русский</a></div><div role="listitem" class="locale w-locales-item"><a hreflang="vi" href="/vi/who-we-are" class="new-navbar_dropdown-link">Tiếng Việt</a></div><div role="listitem" class="locale w-locales-item"><a hreflang="bn" href="/bn/who-we-are" class="new-navbar_dropdown-link">বাংলা</a></div><div role="listitem" class="locale w-locales-item"><a hreflang="si" href="/si/who-we-are" class="new-navbar_dropdown-link">සිංහල</a></div><div role="listitem" class="locale w-locales-item"><a hreflang="tr" href="/tr/who-we-are" class="new-navbar_dropdown-link">Türkçe</a></div><div role="listitem" class="locale w-locales-item"><a hreflang="sw" href="/sw/who-we-are" class="new-navbar_dropdown-link">Kiswahili</a></div><div role="listitem" class="locale w-locales-item"><a hreflang="zh-CN" href="/zh-cn/who-we-are" class="new-navbar_dropdown-link">简体中文</a></div><div role="listitem" class="locale w-locales-item"><a hreflang="zh-TW" href="/zh-tw/who-we-are" class="new-navbar_dropdown-link">繁體中文</a></div><div role="listitem" class="locale w-locales-item"><a hreflang="ko" href="/ko/who-we-are" class="new-navbar_dropdown-link">한국어</a></div><div role="listitem" class="locale w-locales-item"><a hreflang="it" href="/it/who-we-are" class="new-navbar_dropdown-link">Italiano</a></div><div role="listitem" class="locale w-locales-item"><a hreflang="de" href="/de/who-we-are" class="new-navbar_dropdown-link">Deutsch</a></div><div role="listitem" class="locale w-locales-item"><a hreflang="pl" href="/pl/who-we-are" class="new-navbar_dropdown-link">Polski</a></div><div role="listitem" class="locale w-locales-item"><a hreflang="uz" href="/uz/who-we-are" class="new-navbar_dropdown-link">O&#x27;zbek</a></div></div></div></div></div></div><div class="tablet_wrapper"><div class="new-navbar_tabs-wrapper tab-menu"><div class="new-navbar_container height-auto"><div class="new-navbar_tabs-blocks margin-xsmall margin-vertical"><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><div class="navbar_accordion"><div class="navbar_accordion-item"><div class="navbar_accordion-trigger"><div><div class="navbar_accordion-item-head">Trading</div></div><div class="navbar_icon margin-right-10"><div class="new-navbar_tabs-icon w-embed"><svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_21114_12203)">
<path d="M5.60156 6.10156C5.8125 5.89062 6.16406 5.89062 6.375 6.10156L10.8984 10.6016C11.1094 10.8359 11.1094 11.1875 10.8984 11.3984C10.6641 11.6328 10.3125 11.6328 10.1016 11.3984L6 7.29688L1.89844 11.3984C1.66406 11.6328 1.3125 11.6328 1.10156 11.3984C0.867188 11.1875 0.867188 10.8359 1.10156 10.625L5.60156 6.10156Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_21114_12203">
<rect width="12" height="18" fill="white"/>
</clipPath>
</defs>
</svg></div></div></div><div class="navbar_accordion-content"><div class="navbar_accodion-block"><div class="navbar_accordion-content-head"><div class="navbar_accordion-subhead">Trade</div></div><div class="navbar_accordion-content-group"><a href="/trade/cfds" class="navbar_accordion-link">CFDs</a><a href="/trade/options" class="navbar_accordion-link">Options</a></div></div><div class="navbar_accodion-block"><div class="navbar_accordion-content-head"><div class="navbar_accordion-subhead">Markets</div></div><div class="navbar_accordion-content-group"><a href="/markets/forex" class="navbar_accordion-link">Forex</a><a href="/markets/derived-indices/synthetic-indices" class="navbar_accordion-link">Derived Indices</a><a href="/markets/stocks" class="navbar_accordion-link">Stocks</a><a href="/markets/stock-indices" class="navbar_accordion-link">Stock Indices</a><a href="/markets/commodities" class="navbar_accordion-link">Commodities</a><a href="/markets/cryptocurrencies" class="navbar_accordion-link">Cryptocurrencies</a><a href="/markets/etfs" class="navbar_accordion-link">ETFs</a><a href="/markets/tactical-indices" class="navbar_accordion-link">Tactical Indices</a></div></div><div class="navbar_accodion-block"><div class="navbar_accordion-content-head"><div class="navbar_accordion-subhead">Tools</div></div><div class="navbar_accordion-content-group"><a href="/tradingview" class="navbar_accordion-link">TradingView</a><a href="/mt5-trading-signals" class="navbar_accordion-link">MT5 signals</a><a href="/economic-calendar" class="navbar_accordion-link">Economic Calendar</a></div></div></div></div><div class="navbar_accordion-item"><div class="navbar_accordion-trigger"><div><div>Platforms</div></div><div class="navbar_icon margin-right-10"><div class="new-navbar_tabs-icon w-embed"><svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_21114_12203)">
<path d="M5.60156 6.10156C5.8125 5.89062 6.16406 5.89062 6.375 6.10156L10.8984 10.6016C11.1094 10.8359 11.1094 11.1875 10.8984 11.3984C10.6641 11.6328 10.3125 11.6328 10.1016 11.3984L6 7.29688L1.89844 11.3984C1.66406 11.6328 1.3125 11.6328 1.10156 11.3984C0.867188 11.1875 0.867188 10.8359 1.10156 10.625L5.60156 6.10156Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_21114_12203">
<rect width="12" height="18" fill="white"/>
</clipPath>
</defs>
</svg></div></div></div><div class="navbar_accordion-content"><div class="navbar_accodion-block"><div class="navbar_accordion-content-head"><div class="navbar_accordion-subhead">CFDs</div></div><div class="navbar_accordion-content-group"><a href="/trading-platforms/deriv-mt5" class="navbar_accordion-link">Deriv MT5</a><a href="/trading-platforms/deriv-ctrader" class="navbar_accordion-link">Deriv cTrader</a><a href="/trading-platforms/deriv-x" class="navbar_accordion-link">Deriv X</a></div></div><div class="navbar_accodion-block"><div class="navbar_accordion-content-head"><div class="navbar_accordion-subhead">Options</div></div><div class="navbar_accordion-content-group"><a href="/trading-platforms/deriv-trader" class="navbar_accordion-link">Deriv Trader</a><a href="/trading-platforms/deriv-bot" class="navbar_accordion-link">Deriv Bot</a><a href="/trading-platforms/deriv-go" class="navbar_accordion-link">Deriv GO</a><div class="navbar_accordion-menu-group"><a href="https://smarttrader.deriv.com/en/trading" target="_blank" class="navbar_accordion-link padding-right-0">SmartTrader</a><div class="navbar_icon is-relative"><div class="icon-embed-auto is-rotate is-left w-embed"><svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_8673_4157)">
<path d="M10.5 7C10.8125 7.02083 10.9792 7.1875 11 7.5V14.5C10.9792 14.8125 10.8125 14.9792 10.5 15C10.1875 14.9792 10.0208 14.8125 10 14.5V8.71875L1.84375 16.8438C1.61458 17.0521 1.38542 17.0521 1.15625 16.8438C0.947917 16.6146 0.947917 16.3854 1.15625 16.1562L9.28125 8H3.5C3.1875 7.97917 3.02083 7.8125 3 7.5C3.02083 7.1875 3.1875 7.02083 3.5 7H10.5Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_8673_4157">
<rect width="12" height="24" fill="white"/>
</clipPath>
</defs>
</svg></div></div></div></div></div></div></div><div class="navbar_accordion-item"><div class="navbar_accordion-trigger"><div><div>Learning &amp; support</div></div><div class="navbar_icon margin-right-10"><div class="new-navbar_tabs-icon w-embed"><svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_21114_12203)">
<path d="M5.60156 6.10156C5.8125 5.89062 6.16406 5.89062 6.375 6.10156L10.8984 10.6016C11.1094 10.8359 11.1094 11.1875 10.8984 11.3984C10.6641 11.6328 10.3125 11.6328 10.1016 11.3984L6 7.29688L1.89844 11.3984C1.66406 11.6328 1.3125 11.6328 1.10156 11.3984C0.867188 11.1875 0.867188 10.8359 1.10156 10.625L5.60156 6.10156Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_21114_12203">
<rect width="12" height="18" fill="white"/>
</clipPath>
</defs>
</svg></div></div></div><div class="navbar_accordion-content"><div class="navbar_accodion-block"><div class="navbar_accordion-content-head"><div class="navbar_accordion-subhead">Learn</div></div><div class="navbar_accordion-content-group"><a href="/academy" class="navbar_accordion-link">Deriv Academy</a><a href="/blog" class="navbar_accordion-link">Deriv Blog</a><a href="/trading-terms-glossary" class="navbar_accordion-link">Glossary</a></div></div><div class="navbar_accodion-block"><div class="navbar_accordion-content-head"><div class="navbar_accordion-subhead">Get support</div></div><div class="navbar_accordion-content-group"><a href="/help-centre" class="navbar_accordion-link">Help centre</a><div class="navbar_accordion-menu-group"><a href="https://community.deriv.com/" target="_blank" class="navbar_accordion-link padding-right-0">Community</a><div class="navbar_icon is-relative"><div class="icon-embed-auto is-rotate w-embed"><svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_8673_4157)">
<path d="M10.5 7C10.8125 7.02083 10.9792 7.1875 11 7.5V14.5C10.9792 14.8125 10.8125 14.9792 10.5 15C10.1875 14.9792 10.0208 14.8125 10 14.5V8.71875L1.84375 16.8438C1.61458 17.0521 1.38542 17.0521 1.15625 16.8438C0.947917 16.6146 0.947917 16.3854 1.15625 16.1562L9.28125 8H3.5C3.1875 7.97917 3.02083 7.8125 3 7.5C3.02083 7.1875 3.1875 7.02083 3.5 7H10.5Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_8673_4157">
<rect width="12" height="24" fill="white"/>
</clipPath>
</defs>
</svg></div></div></div><a href="/contact-us" class="navbar_accordion-link">Contact us</a></div></div><div class="navbar_accodion-block"><div class="navbar_accordion-content-head"><div class="navbar_accordion-subhead">Resources</div></div><div class="navbar_accordion-content-group"><a href="/payment-methods" class="navbar_accordion-link">Payment methods</a></div></div></div></div><div class="navbar_accordion-item"><div class="navbar_accordion-trigger"><div><div>About</div></div><div class="navbar_icon margin-right-10"><div class="new-navbar_tabs-icon w-embed"><svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_21114_12203)">
<path d="M5.60156 6.10156C5.8125 5.89062 6.16406 5.89062 6.375 6.10156L10.8984 10.6016C11.1094 10.8359 11.1094 11.1875 10.8984 11.3984C10.6641 11.6328 10.3125 11.6328 10.1016 11.3984L6 7.29688L1.89844 11.3984C1.66406 11.6328 1.3125 11.6328 1.10156 11.3984C0.867188 11.1875 0.867188 10.8359 1.10156 10.625L5.60156 6.10156Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_21114_12203">
<rect width="12" height="18" fill="white"/>
</clipPath>
</defs>
</svg></div></div></div><div class="navbar_accordion-content"><div class="navbar_accodion-block"><div class="navbar_accordion-content-group"><a href="/who-we-are" aria-current="page" class="navbar_accordion-link w--current">Who we are</a><a href="/why-choose-us" class="navbar_accordion-link">Why choose us</a><a href="/regulatory" class="navbar_accordion-link">Regulatory information</a><a href="/responsible" class="navbar_accordion-link">Secure &amp; responsible trading</a><a href="/careers" class="navbar_accordion-link">Careers</a></div></div><div class="navbar_accodion-block"></div></div></div><div class="navbar_accordion-link-item"><div class="navbar_accordion-link-group"><a href="/partners" target="_blank" class="navbar_accordion-link-block text-color-secondary w-inline-block"><div>Partners</div><div class="navbar_icon is-relative"><div class="icon-embed-auto is-rotate w-embed"><svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_8673_4157)">
<path d="M10.5 7C10.8125 7.02083 10.9792 7.1875 11 7.5V14.5C10.9792 14.8125 10.8125 14.9792 10.5 15C10.1875 14.9792 10.0208 14.8125 10 14.5V8.71875L1.84375 16.8438C1.61458 17.0521 1.38542 17.0521 1.15625 16.8438C0.947917 16.6146 0.947917 16.3854 1.15625 16.1562L9.28125 8H3.5C3.1875 7.97917 3.02083 7.8125 3 7.5C3.02083 7.1875 3.1875 7.02083 3.5 7H10.5Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_8673_4157">
<rect width="12" height="24" fill="white"/>
</clipPath>
</defs>
</svg></div></div></a></div></div></div></div></div></div></div></div><div class="new-navbar_language-button-block"><div id="w-node-_82d237d7-26ff-ddda-56a1-95171c3a9083-cff9dc9f" data-w-id="82d237d7-26ff-ddda-56a1-95171c3a9083" class="new-navbar_dropdown-toggle gap-small lang-mob padding-left-5p"><div class="new-icon-embed-auto w-embed"><svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_17173_4606)">
<path d="M8 19C8.27083 19 8.57292 18.8646 8.90625 18.5938C9.23958 18.3229 9.58333 17.8646 9.9375 17.2188C10.25 16.5938 10.5 15.8542 10.6875 15H5.3125C5.5 15.8542 5.75 16.5938 6.0625 17.2188C6.41667 17.8646 6.76042 18.3229 7.09375 18.5938C7.42708 18.8646 7.72917 19 8 19ZM5.125 14H10.875C10.9583 13.375 11 12.7083 11 12C11 11.2917 10.9583 10.625 10.875 10H5.125C5.04167 10.625 5 11.2917 5 12C5 12.7083 5.04167 13.375 5.125 14ZM5.3125 9H10.6875C10.5 8.14583 10.25 7.40625 9.9375 6.78125C9.58333 6.13542 9.23958 5.67708 8.90625 5.40625C8.57292 5.13542 8.27083 5 8 5C7.72917 5 7.42708 5.13542 7.09375 5.40625C6.76042 5.67708 6.41667 6.13542 6.0625 6.78125C5.75 7.40625 5.5 8.14583 5.3125 9ZM11.875 10C11.9583 10.6458 12 11.3125 12 12C12 12.6875 11.9583 13.3542 11.875 14H14.7188C14.9062 13.3542 15 12.6875 15 12C15 11.3125 14.9062 10.6458 14.7188 10H11.875ZM14.3438 9C13.9271 8.14583 13.3646 7.40625 12.6562 6.78125C11.9479 6.15625 11.1458 5.6875 10.25 5.375C10.9167 6.27083 11.4062 7.47917 11.7188 9H14.3438ZM4.28125 9C4.59375 7.47917 5.09375 6.27083 5.78125 5.375C4.86458 5.6875 4.05208 6.15625 3.34375 6.78125C2.63542 7.40625 2.08333 8.14583 1.6875 9H4.28125ZM1.28125 10C1.09375 10.6458 1 11.3125 1 12C1 12.6875 1.09375 13.3542 1.28125 14H4.125C4.04167 13.3542 4 12.6875 4 12C4 11.3125 4.04167 10.6458 4.125 10H1.28125ZM10.25 18.625C11.1458 18.3125 11.9479 17.8438 12.6562 17.2188C13.3646 16.5938 13.9167 15.8542 14.3125 15H11.7188C11.4062 16.5208 10.9167 17.7292 10.25 18.625ZM5.78125 18.625C5.09375 17.7292 4.59375 16.5208 4.28125 15H1.6875C2.08333 15.8542 2.63542 16.5938 3.34375 17.2188C4.05208 17.8438 4.86458 18.3125 5.78125 18.625ZM8 20C6.54167 19.9792 5.20833 19.625 4 18.9375C2.79167 18.2292 1.8125 17.25 1.0625 16C0.354167 14.7292 0 13.3958 0 12C0 10.6042 0.354167 9.27083 1.0625 8C1.8125 6.75 2.79167 5.77083 4 5.0625C5.20833 4.375 6.54167 4.02083 8 4C9.45833 4.02083 10.7917 4.375 12 5.0625C13.2083 5.77083 14.1875 6.75 14.9375 8C15.6458 9.27083 16 10.6042 16 12C16 13.3958 15.6458 14.7292 14.9375 16C14.1875 17.25 13.2083 18.2292 12 18.9375C10.7917 19.625 9.45833 19.9792 8 20Z" fill="currentcolor" fill-opacity="0.72"/>
</g>
<defs>
<clipPath id="clip0_17173_4606">
<rect width="16" height="24" fill="white"/>
</clipPath>
</defs>
</svg></div><div class="current-locale-iso-code">EN</div></div></div></div></div><div class="new-navbar_menu-left new-navbar_menu-left-desctop"><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><div class="new-navbar_menu-left new-navbar_menu-left-desctop"><div data-hover="true" data-delay="0" class="new-navbar_menu-dropdown w-dropdown"><div class="new-navbar_dropdown-toggle is-grey is-adaptive w-dropdown-toggle"><div class="text-block">Trading</div></div><nav class="new-navbar_dropdown-list w-dropdown-list"><div class="new-navbar_dropdown-list-gap"></div><div class="new-navbar_container"><div class="new-navbar_dropdown-content"><div class="new-navbar_dropdown-content-bottom is-adaptive"><div class="new-navbar_dropdown-link-list is-adaptive"><div id="w-node-_9026c31d-4304-7b71-5349-be253be88992-cff9dc9f" class="new-navbar_dropdown-title is-adaptive">Trade</div><a id="w-node-_9026c31d-4304-7b71-5349-be253be88994-cff9dc9f" href="/trade/cfds" class="new-navbar_dropdown-link is-adaptive">CFDs</a><a id="w-node-_9026c31d-4304-7b71-5349-be253be88996-cff9dc9f" href="/trade/options" class="new-navbar_dropdown-link is-adaptive">Options</a></div><div class="new-navbar_dropdown-link-list is-adaptive"><div id="w-node-_9026c31d-4304-7b71-5349-be253be88999-cff9dc9f" class="new-navbar_dropdown-title is-adaptive">Markets</div><a id="w-node-_9026c31d-4304-7b71-5349-be253be8899b-cff9dc9f" href="/markets/forex" class="new-navbar_dropdown-link is-adaptive">Forex</a><a id="w-node-_9026c31d-4304-7b71-5349-be253be8899d-cff9dc9f" href="/markets/derived-indices/synthetic-indices" class="new-navbar_dropdown-link is-adaptive">Derived Indices</a><a id="w-node-_9026c31d-4304-7b71-5349-be253be8899f-cff9dc9f" href="/markets/stocks" class="new-navbar_dropdown-link is-adaptive">Stocks</a><a id="w-node-_9026c31d-4304-7b71-5349-be253be889a1-cff9dc9f" href="/markets/stock-indices" class="new-navbar_dropdown-link is-adaptive">Stock Indices</a></div><div class="new-navbar_dropdown-link-list is-adaptive"><div id="w-node-_9026c31d-4304-7b71-5349-be253be889a4-cff9dc9f" class="new-navbar_dropdown-gap is-adaptive"></div><a id="w-node-_9026c31d-4304-7b71-5349-be253be889a5-cff9dc9f" href="/markets/commodities" class="new-navbar_dropdown-link is-adaptive">Commodities</a><a id="w-node-_9026c31d-4304-7b71-5349-be253be889a7-cff9dc9f" href="/markets/cryptocurrencies" class="new-navbar_dropdown-link is-adaptive">Cryptocurrencies</a><a id="w-node-_9026c31d-4304-7b71-5349-be253be889a9-cff9dc9f" href="/markets/etfs" class="new-navbar_dropdown-link is-adaptive">ETFs</a><a id="w-node-_19007e5d-9da6-bb68-c748-b7a484437339-cff9dc9f" href="/markets/tactical-indices" class="new-navbar_dropdown-link is-adaptive">Tactical Indices</a></div><div class="new-navbar_dropdown-link-list"><div id="w-node-_9026c31d-4304-7b71-5349-be253be889ac-cff9dc9f" class="new-navbar_dropdown-title">Tools</div><a id="w-node-_9026c31d-4304-7b71-5349-be253be889b0-cff9dc9f" href="/tradingview" class="new-navbar_dropdown-link is-adaptive">TradingView</a><a id="w-node-_4648965f-0c47-8296-bfc4-16b63373ae8b-cff9dc9f" href="/mt5-trading-signals" class="new-navbar_dropdown-link is-adaptive">MT5 signals</a><a id="w-node-f8141781-f56f-b1e1-f425-e0f15ce3a18f-cff9dc9f" href="/economic-calendar" class="new-navbar_dropdown-link is-adaptive">Economic Calendar</a></div></div></div></div></nav></div><div data-hover="true" data-delay="0" class="new-navbar_menu-dropdown w-dropdown"><div class="new-navbar_dropdown-toggle is-grey is-adaptive w-dropdown-toggle"><div>Platforms</div></div><nav class="new-navbar_dropdown-list w-dropdown-list"><div class="new-navbar_container"><div class="new-navbar_dropdown-content"><div class="new-navbar_dropdown-content-bottom is-adaptive"><div class="new-navbar_dropdown-link-list is-adaptive"><div id="w-node-_19a82ab5-6b03-06d9-0904-5a5607c77551-cff9dc9f" class="new-navbar_dropdown-title is-adaptive">CFDs</div><a id="w-node-_9026c31d-4304-7b71-5349-be253be889bb-cff9dc9f" href="/trading-platforms/deriv-mt5" class="new-navbar_dropdown-link is-adaptive">Deriv MT5</a><a id="w-node-_9026c31d-4304-7b71-5349-be253be889bd-cff9dc9f" href="/trading-platforms/deriv-ctrader" class="new-navbar_dropdown-link is-adaptive">Deriv cTrader</a><a id="w-node-_13a6a4ce-8c0f-6a5c-451c-0a2930d059f2-cff9dc9f" href="/trading-platforms/deriv-x" class="new-navbar_dropdown-link is-adaptive">Deriv X</a></div><div class="new-navbar_dropdown-link-list is-adaptive"><div id="w-node-_14174daf-f3ab-ab68-fccd-39edbceb8486-cff9dc9f" class="new-navbar_dropdown-title is-adaptive">Options</div><a id="w-node-_9026c31d-4304-7b71-5349-be253be889c2-cff9dc9f" href="/trading-platforms/deriv-trader" class="new-navbar_dropdown-link is-adaptive">Deriv Trader</a><a id="w-node-_49cb6522-4c12-5887-d631-2d5abecd38de-cff9dc9f" href="/trading-platforms/deriv-bot" class="new-navbar_dropdown-link is-adaptive">Deriv Bot</a><a id="w-node-_95934231-c9ee-90ab-ad89-4ac0f9c32df2-cff9dc9f" href="/trading-platforms/deriv-go" class="new-navbar_dropdown-link is-adaptive">Deriv GO</a><a id="w-node-_71de57ce-fe8a-11a7-a98b-d3a88daee316-cff9dc9f" href="https://smarttrader.deriv.com/" target="_blank" class="new-navbar_dropdown-link is-block is-adaptive w-inline-block"><div>SmartTrader</div><div class="icon-embed-auto is-adaptive w-embed"><svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_8673_4157)">
<path d="M10.5 7C10.8125 7.02083 10.9792 7.1875 11 7.5V14.5C10.9792 14.8125 10.8125 14.9792 10.5 15C10.1875 14.9792 10.0208 14.8125 10 14.5V8.71875L1.84375 16.8438C1.61458 17.0521 1.38542 17.0521 1.15625 16.8438C0.947917 16.6146 0.947917 16.3854 1.15625 16.1562L9.28125 8H3.5C3.1875 7.97917 3.02083 7.8125 3 7.5C3.02083 7.1875 3.1875 7.02083 3.5 7H10.5Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_8673_4157">
<rect width="12" height="24" fill="white"/>
</clipPath>
</defs>
</svg></div></a></div><div class="new-navbar_dropdown-link-list is-adaptive"><div id="w-node-f2095fc5-1aba-0b76-3c4e-6a7be105c857-cff9dc9f" class="new-navbar_dropdown-gap is-adaptive"></div></div></div></div></div><div class="new-navbar_dropdown-list-gap"></div></nav></div><div data-hover="true" data-delay="0" class="new-navbar_menu-dropdown w-dropdown"><div class="new-navbar_dropdown-toggle is-grey is-adaptive w-dropdown-toggle"><div>Learning &amp; support</div></div><nav class="new-navbar_dropdown-list w-dropdown-list"><div class="new-navbar_container"><div class="new-navbar_dropdown-content"><div class="new-navbar_dropdown-content-bottom is-adaptive"><div class="new-navbar_dropdown-link-list is-adaptive"><div id="w-node-_9026c31d-4304-7b71-5349-be253be889df-cff9dc9f" class="new-navbar_dropdown-title is-adaptive">Learn</div><a id="w-node-_1c3e6f14-5283-a502-b5ee-4b6a8ee35b9a-cff9dc9f" href="/academy" class="new-navbar_dropdown-link is-adaptive">Deriv Academy</a><a id="w-node-_9026c31d-4304-7b71-5349-be253be889e1-cff9dc9f" href="/blog" class="new-navbar_dropdown-link is-adaptive">Deriv Blog</a><a id="w-node-_7c88ce57-3279-068c-737f-589772d75d9d-cff9dc9f" href="/trading-terms-glossary" class="new-navbar_dropdown-link is-adaptive">Glossary</a></div><div class="new-navbar_dropdown-link-list is-adaptive"><div class="new-navbar_dropdown-title is-adaptive">Get support</div><a href="/help-centre" class="new-navbar_dropdown-link is-adaptive">Help centre</a><a href="https://community.deriv.com/" target="_blank" class="new-navbar_dropdown-link is-block is-adaptive w-inline-block"><div>Community</div><div class="icon-embed-auto is-adaptive w-embed"><svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_8673_4157)">
<path d="M10.5 7C10.8125 7.02083 10.9792 7.1875 11 7.5V14.5C10.9792 14.8125 10.8125 14.9792 10.5 15C10.1875 14.9792 10.0208 14.8125 10 14.5V8.71875L1.84375 16.8438C1.61458 17.0521 1.38542 17.0521 1.15625 16.8438C0.947917 16.6146 0.947917 16.3854 1.15625 16.1562L9.28125 8H3.5C3.1875 7.97917 3.02083 7.8125 3 7.5C3.02083 7.1875 3.1875 7.02083 3.5 7H10.5Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_8673_4157">
<rect width="12" height="24" fill="white"/>
</clipPath>
</defs>
</svg></div></a><a href="/contact-us" class="new-navbar_dropdown-link is-adaptive">Contact us</a></div><div id="w-node-_05a65d05-2957-f84b-46d7-65bc5e71228c-cff9dc9f" class="new-navbar_dropdown-link-list is-adaptive"><div class="new-navbar_dropdown-title is-adaptive">Resources</div><a id="w-node-_73351125-5e67-031f-90dd-7006ee37fe30-cff9dc9f" href="/payment-methods" class="new-navbar_dropdown-link is-adaptive">Payment methods</a></div></div></div></div><div class="new-navbar_dropdown-list-gap"></div></nav></div><div data-hover="true" data-delay="0" class="new-navbar_menu-dropdown w-dropdown"><div class="new-navbar_dropdown-toggle is-grey is-adaptive w-dropdown-toggle"><div>About</div></div><nav class="new-navbar_dropdown-list w-dropdown-list"><div class="new-navbar_container"><div class="new-navbar_dropdown-content"><div class="new-navbar_dropdown-content-bottom is-adaptive"><div class="new-navbar_dropdown-link-list is-adaptive"><a id="w-node-_9026c31d-4304-7b71-5349-be253be889f8-cff9dc9f" href="/who-we-are" aria-current="page" class="new-navbar_dropdown-link is-adaptive w--current">Who we are</a><a id="w-node-c094b644-38bc-6d82-b8a1-64b7cf2daeae-cff9dc9f" href="/why-choose-us" class="new-navbar_dropdown-link is-adaptive">Why choose us</a></div><div class="new-navbar_dropdown-link-list is-adaptive"><a id="w-node-eabb78c2-91e1-c191-c12c-509f4c23c199-cff9dc9f" href="/regulatory" class="new-navbar_dropdown-link is-adaptive">Regulatory information</a><a id="w-node-_9026c31d-4304-7b71-5349-be253be889ff-cff9dc9f" href="/responsible" class="new-navbar_dropdown-link is-adaptive">Secure &amp; responsible trading</a></div><div class="new-navbar_dropdown-link-list is-adaptive"><a id="w-node-_9026c31d-4304-7b71-5349-be253be88a04-cff9dc9f" href="/careers" class="new-navbar_dropdown-link is-adaptive">Careers</a></div></div></div></div><div class="new-navbar_dropdown-list-gap"></div></nav></div><a href="/partners" target="_blank" class="new-navbar_link is-adaptive w-inline-block"><div>Partners</div><div class="icon-embed-auto is-adaptive w-embed"><svg width="12" height="21" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_8673_4157)">
<path d="M10.5 7C10.8125 7.02083 10.9792 7.1875 11 7.5V14.5C10.9792 14.8125 10.8125 14.9792 10.5 15C10.1875 14.9792 10.0208 14.8125 10 14.5V8.71875L1.84375 16.8438C1.61458 17.0521 1.38542 17.0521 1.15625 16.8438C0.947917 16.6146 0.947917 16.3854 1.15625 16.1562L9.28125 8H3.5C3.1875 7.97917 3.02083 7.8125 3 7.5C3.02083 7.1875 3.1875 7.02083 3.5 7H10.5Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_8673_4157">
<rect width="12" height="24" fill="white"/>
</clipPath>
</defs>
</svg></div></a></div></div></div></div></div><div class="new-navbar_menu-right is-border-top is-adaptive"><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><div class="new-navbar_menu-right is-border-top is-adaptive"><a id="btn-traders-hub" data-attributes="btn-primary-nav" href="/appstore/traders-hub" class="new-button logged-in-btn tradershub-btn is-adaptive hide-element w-inline-block"><div class="icon-embed-auto is-adaptive w-embed"><svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_19689_31317)">
<path d="M2.5 6.5V9.5H5.5V6.5H2.5ZM1 6.5C1 5.6875 1.65625 5 2.5 5H5.5C6.3125 5 7 5.6875 7 6.5V9.5C7 10.3438 6.3125 11 5.5 11H2.5C1.65625 11 1 10.3438 1 9.5V6.5ZM2.5 14.5V17.5H5.5V14.5H2.5ZM1 14.5C1 13.6875 1.65625 13 2.5 13H5.5C6.3125 13 7 13.6875 7 14.5V17.5C7 18.3438 6.3125 19 5.5 19H2.5C1.65625 19 1 18.3438 1 17.5V14.5ZM13.5 6.5H10.5V9.5H13.5V6.5ZM10.5 5H13.5C14.3125 5 15 5.6875 15 6.5V9.5C15 10.3438 14.3125 11 13.5 11H10.5C9.65625 11 9 10.3438 9 9.5V6.5C9 5.6875 9.65625 5 10.5 5ZM10.5 14.5V17.5H13.5V14.5H10.5ZM9 14.5C9 13.6875 9.65625 13 10.5 13H13.5C14.3125 13 15 13.6875 15 14.5V17.5C15 18.3438 14.3125 19 13.5 19H10.5C9.65625 19 9 18.3438 9 17.5V14.5Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_19689_31317">
<rect width="16" height="24" fill="white"/>
</clipPath>
</defs>
</svg></div><div>Trader&#x27;s Hub</div></a><a id="white-navbar_login" data-attributes="btn-secondary-nav" data-href="signin" data-w-id="8e11cc17-102d-e2e0-18f4-df5dcff9ddbb" href="#" class="new-button new-navbar tab-hidden is-grey logged-out-btn is-adaptive hide-element w-button">Log in</a><a data-attributes="btn-primary-nav" href="/signup" class="new-button desctop-hidden logged-out-btn is-adaptive btn-free-demo hide-element w-button">Try free demo</a><a data-attributes="btn-primary-nav" href="/signup" class="new-button logged-out-btn is-adaptive btn-free-demo hide-element w-button">Try free demo</a></div></div></div></div><div class="new-hide-tablet"><div data-hover="true" data-delay="0" class="new-navbar_menu-dropdown w-dropdown"><div class="new-navbar_dropdown-toggle gap-small is-gray is-adaptive w-dropdown-toggle"><div class="new-icon-embed-auto is-adaptive w-embed"><svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_17173_4606)">
<path d="M8 19C8.27083 19 8.57292 18.8646 8.90625 18.5938C9.23958 18.3229 9.58333 17.8646 9.9375 17.2188C10.25 16.5938 10.5 15.8542 10.6875 15H5.3125C5.5 15.8542 5.75 16.5938 6.0625 17.2188C6.41667 17.8646 6.76042 18.3229 7.09375 18.5938C7.42708 18.8646 7.72917 19 8 19ZM5.125 14H10.875C10.9583 13.375 11 12.7083 11 12C11 11.2917 10.9583 10.625 10.875 10H5.125C5.04167 10.625 5 11.2917 5 12C5 12.7083 5.04167 13.375 5.125 14ZM5.3125 9H10.6875C10.5 8.14583 10.25 7.40625 9.9375 6.78125C9.58333 6.13542 9.23958 5.67708 8.90625 5.40625C8.57292 5.13542 8.27083 5 8 5C7.72917 5 7.42708 5.13542 7.09375 5.40625C6.76042 5.67708 6.41667 6.13542 6.0625 6.78125C5.75 7.40625 5.5 8.14583 5.3125 9ZM11.875 10C11.9583 10.6458 12 11.3125 12 12C12 12.6875 11.9583 13.3542 11.875 14H14.7188C14.9062 13.3542 15 12.6875 15 12C15 11.3125 14.9062 10.6458 14.7188 10H11.875ZM14.3438 9C13.9271 8.14583 13.3646 7.40625 12.6562 6.78125C11.9479 6.15625 11.1458 5.6875 10.25 5.375C10.9167 6.27083 11.4062 7.47917 11.7188 9H14.3438ZM4.28125 9C4.59375 7.47917 5.09375 6.27083 5.78125 5.375C4.86458 5.6875 4.05208 6.15625 3.34375 6.78125C2.63542 7.40625 2.08333 8.14583 1.6875 9H4.28125ZM1.28125 10C1.09375 10.6458 1 11.3125 1 12C1 12.6875 1.09375 13.3542 1.28125 14H4.125C4.04167 13.3542 4 12.6875 4 12C4 11.3125 4.04167 10.6458 4.125 10H1.28125ZM10.25 18.625C11.1458 18.3125 11.9479 17.8438 12.6562 17.2188C13.3646 16.5938 13.9167 15.8542 14.3125 15H11.7188C11.4062 16.5208 10.9167 17.7292 10.25 18.625ZM5.78125 18.625C5.09375 17.7292 4.59375 16.5208 4.28125 15H1.6875C2.08333 15.8542 2.63542 16.5938 3.34375 17.2188C4.05208 17.8438 4.86458 18.3125 5.78125 18.625ZM8 20C6.54167 19.9792 5.20833 19.625 4 18.9375C2.79167 18.2292 1.8125 17.25 1.0625 16C0.354167 14.7292 0 13.3958 0 12C0 10.6042 0.354167 9.27083 1.0625 8C1.8125 6.75 2.79167 5.77083 4 5.0625C5.20833 4.375 6.54167 4.02083 8 4C9.45833 4.02083 10.7917 4.375 12 5.0625C13.2083 5.77083 14.1875 6.75 14.9375 8C15.6458 9.27083 16 10.6042 16 12C16 13.3958 15.6458 14.7292 14.9375 16C14.1875 17.25 13.2083 18.2292 12 18.9375C10.7917 19.625 9.45833 19.9792 8 20Z" fill="currentcolor" fill-opacity="0.72"/>
</g>
<defs>
<clipPath id="clip0_17173_4606">
<rect width="16" height="24" fill="white"/>
</clipPath>
</defs>
</svg></div><div class="current-locale-iso-code">EN</div></div><nav class="new-navbar_dropdown-list is-padding-bottom w-dropdown-list"><div class="new-navbar_container"><div class="new-navbar_dropdown-content"><div id="w-node-_07f05f89-74a9-4dfd-ab02-79d1b4660dbf-cff9dc9f" class="w-locales-list"><div role="list" class="locales-list is-adaptive w-locales-items"><div role="listitem" class="locale is-adaptive w-locales-item"><a hreflang="en" href="/who-we-are" aria-current="page" class="new-navbar_dropdown-link is-adaptive w--current">English</a></div><div role="listitem" class="locale is-adaptive w-locales-item"><a hreflang="fr" href="/fr/who-we-are" class="new-navbar_dropdown-link is-adaptive">Français</a></div><div role="listitem" class="locale is-adaptive w-locales-item"><a hreflang="ar" href="/ar/who-we-are" class="new-navbar_dropdown-link is-adaptive">العربية</a></div><div role="listitem" class="locale is-adaptive w-locales-item"><a hreflang="pt" href="/pt/who-we-are" class="new-navbar_dropdown-link is-adaptive">Português</a></div><div role="listitem" class="locale is-adaptive w-locales-item"><a hreflang="es" href="/es/who-we-are" class="new-navbar_dropdown-link is-adaptive">Español</a></div><div role="listitem" class="locale is-adaptive w-locales-item"><a hreflang="ru" href="/ru/who-we-are" class="new-navbar_dropdown-link is-adaptive">Русский</a></div><div role="listitem" class="locale is-adaptive w-locales-item"><a hreflang="vi" href="/vi/who-we-are" class="new-navbar_dropdown-link is-adaptive">Tiếng Việt</a></div><div role="listitem" class="locale is-adaptive w-locales-item"><a hreflang="bn" href="/bn/who-we-are" class="new-navbar_dropdown-link is-adaptive">বাংলা</a></div><div role="listitem" class="locale is-adaptive w-locales-item"><a hreflang="si" href="/si/who-we-are" class="new-navbar_dropdown-link is-adaptive">සිංහල</a></div><div role="listitem" class="locale is-adaptive w-locales-item"><a hreflang="tr" href="/tr/who-we-are" class="new-navbar_dropdown-link is-adaptive">Türkçe</a></div><div role="listitem" class="locale is-adaptive w-locales-item"><a hreflang="sw" href="/sw/who-we-are" class="new-navbar_dropdown-link is-adaptive">Kiswahili</a></div><div role="listitem" class="locale is-adaptive w-locales-item"><a hreflang="zh-CN" href="/zh-cn/who-we-are" class="new-navbar_dropdown-link is-adaptive">简体中文</a></div><div role="listitem" class="locale is-adaptive w-locales-item"><a hreflang="zh-TW" href="/zh-tw/who-we-are" class="new-navbar_dropdown-link is-adaptive">繁體中文</a></div><div role="listitem" class="locale is-adaptive w-locales-item"><a hreflang="ko" href="/ko/who-we-are" class="new-navbar_dropdown-link is-adaptive">한국어</a></div><div role="listitem" class="locale is-adaptive w-locales-item"><a hreflang="it" href="/it/who-we-are" class="new-navbar_dropdown-link is-adaptive">Italiano</a></div><div role="listitem" class="locale is-adaptive w-locales-item"><a hreflang="de" href="/de/who-we-are" class="new-navbar_dropdown-link is-adaptive">Deutsch</a></div><div role="listitem" class="locale is-adaptive w-locales-item"><a hreflang="pl" href="/pl/who-we-are" class="new-navbar_dropdown-link is-adaptive">Polski</a></div><div role="listitem" class="locale is-adaptive w-locales-item"><a hreflang="uz" href="/uz/who-we-are" class="new-navbar_dropdown-link is-adaptive">O&#x27;zbek</a></div></div></div></div></div><div class="new-navbar_dropdown-list-gap"></div></nav></div></div><div class="new-navbar_container-wrapper"><a data-href="signup" href="#" class="new-button tab new btn-free-demo w-button">Sign up</a><a data-href="signin" href="#" class="new-button new-navbar tab w-button">Log in</a></div></div></div></nav><div class="new-show-tablet"><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><a id="res-white-navbar_login" data-attributes="btn-secondary-nav" data-href="signin" href="#" class="new-button new-navbar log-in is-gray logged-out-btn hide-element w-button">Log in</a></div></div></div><div class="navbar_menu-button w-nav-button"><div id="mobile-menu" class="new-menu-icon"><div class="new-menu-icon_line-top is-gray"></div><div class="new-menu-icon_line-middle is-gray"><div class="new-menu-icon_line-middle-inner"></div></div><div class="new-menu-icon_line-bottom is-gray"></div></div></div></div></div></div><div class="new-navbar_background is-opacity-72"></div><div class="new-navbar_dynamic-background"></div><div class="new-navbar_background-solid"></div><div class="new-navbar_dark-curtain"></div></section></div><div class="main-wrapper"><section class="section_image-header is-white"><div class="padding-global"><div class="container-xlarge"><div class="bread-crumb_wrapper"><a href="/" class="bread-crumb_link">Home</a><div class="bread-crumb_icon-wrapper"><div class="icon-embed-auto w-embed"><svg width="9" height="22" viewBox="0 0 9 22" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_9221_82)">
<path d="M8.30078 10.4492C8.48307 10.6497 8.48307 10.8503 8.30078 11.0508L3.05078 16.3008C2.85026 16.4831 2.64974 16.4831 2.44922 16.3008C2.26693 16.1003 2.26693 15.8997 2.44922 15.6992L7.37109 10.75L2.44922 5.80078C2.26693 5.60026 2.26693 5.39974 2.44922 5.19922C2.64974 5.01693 2.85026 5.01693 3.05078 5.19922L8.30078 10.4492Z" fill="black" fill-opacity="0.48"/>
</g>
<defs>
<clipPath id="clip0_9221_82">
<rect width="9" height="22" fill="white"/>
</clipPath>
</defs>
</svg></div></div><div class="bread-crumb_link is-light">Who we are</div></div></div><div class="padding-section-large header-with-image"><div class="container-xlarge"><div class="w-layout-grid image-header_component is-market-grid"><div id="w-node-_374831ee-8270-4a12-2b7a-c96f1514d834-cc75d5be" class="markets-header_content"><div class="title-description-wrapper"><h1 class="forex-heading">Who we are</h1><p>Deriv is one of the world’s largest online brokers. We offer CFDs and other derivatives on forex, stocks &amp; indices, cryptocurrencies, commodities, and derived indices to millions of registered users across the globe.<br/><br/>From inception, our goal was to break free of the high commissions and clunky products offered by traditional brokers. Also, we aim to deliver a first-class experience to digitally inclined traders, regardless of the size of their accounts.<br/><br/>As Deriv marks its 25th anniversary this year, we celebrate a legacy of innovation and a commitment to making trading accessible to anyone, anywhere. Over the past quarter century, we have grown to serve over 2.5 million customers worldwide, continually advancing to meet the dynamic needs of the markets and our clients. This milestone is a testament to our unwavering dedication to the traders we serve.</p></div></div><div id="w-node-bf5f44d8-1c29-5629-a6ee-e012f702d901-cc75d5be" class="markets-image-background"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/66bc7324110b993955f59f3a_Who-we-are-25.avif" srcset="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/66bc7324110b993955f59f3a_Who-we-are-25-p-500.avif 500w, https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/66bc7324110b993955f59f3a_Who-we-are-25-p-800.avif 800w, https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/66bc7324110b993955f59f3a_Who-we-are-25.avif 1500w" width="750" sizes="(max-width: 479px) 93vw, (max-width: 991px) 48vw, 45vw" alt="Collage of Deriv employees participating in different activities" class="markets-image"/></div></div></div></div></div></section><section class="section_stats"><div class="padding-global padding-section-small"><div class="container-xlarge"><div class="stats_component"><div class="stats_list"><div data-w-id="67c89464-1d33-7ba9-a63b-cb7ab432ea21" style="opacity:0;-webkit-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" class="text-content-wrapper_centered"><h3>2.5M+</h3><div>Traders worldwide</div></div><div data-w-id="67c89464-1d33-7ba9-a63b-cb7ab432ea26" style="opacity:0;-webkit-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" class="stats_item"><h3>USD 46M+</h3><div>Monthly withdrawals</div></div><div data-w-id="67c89464-1d33-7ba9-a63b-cb7ab432ea2b" style="opacity:0;-webkit-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" class="stats_item"><h3>187M+</h3><div>Monthly trades</div></div><div data-w-id="67c89464-1d33-7ba9-a63b-cb7ab432ea30" style="opacity:0;-webkit-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" class="stats_item"><h3>USD 15T+</h3><div>Total trade turnover</div></div></div></div></div></div></section><div class="section_features-who-we-are"><div class="padding-global padding-section-large"><div class="container-xlarge"><div class="content_component"><div class="align-center"><div class="max-width-large"><div class="content-component-small"><div class="text-content-wrapper_centered"><h2>Our values are the fabric of our culture</h2></div></div></div></div><div data-w-id="93e8dbae-6c9d-3a40-606d-c7cd9bb56d22" style="opacity:0;-webkit-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" class="features_list tablet-wrap"><div class="features_item is-white"><div class="features_image-wrapper"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/66585fe0e1dc7e70cc75d527_integrity.svg" loading="lazy" width="60" alt="An illustration representing the deriv value of having integrity" class="features_image"/></div><div class="text-content-wrapper_centered"><h3>Integrity</h3><p>We serve our customers with fairness and transparency. We settle all contracts by the book and speak plainly and truthfully.</p></div></div><div class="features_item is-white"><div class="features_image-wrapper"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/66585fe0e1dc7e70cc75d520_customer%20focus.svg" loading="lazy" width="60" alt="An illustration representing customer focus, which is one of Deriv’s core values." class="features_image"/></div><div class="text-content-wrapper_centered"><h3>Customer focus</h3><p>We put the customer first and strive to build products that deliver the best customer experience. </p></div></div><div class="features_item is-white"><div class="features_image-wrapper"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/66585fe0e1dc7e70cc75d547_competence.svg" loading="lazy" width="60" alt="An illustration representing competence, which is one of Deriv’s core values." class="features_image"/></div><div class="text-content-wrapper_centered"><h3>Competence</h3><p>We value colleagues with the ability to use good judgement and an aptitude to learn and grow. </p></div></div><div class="features_item is-white"><div class="features_image-wrapper"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/66585fe0e1dc7e70cc75d54c_teamwork.svg" loading="lazy" width="60" alt="An illustration representing teamwork, which is one of Deriv’s core values." class="features_image"/></div><div class="text-content-wrapper_centered"><h3>Teamwork</h3><p>We value team players that collaborate freely across departments with humility and ambition. </p></div></div></div></div></div></div></div><section class="section_certifications"><div class="padding-global padding-section-large"><div class="container-small"><div class="text-align-center"><div class="margin-bottom margin-small"><h2>Our certifications</h2></div><p>We are proud to be recognised as a Great Place to Work™ for excellence in our workplace culture and employee satisfaction. Our Platinum certification in Investors in People demonstrates our commitment to employee development.</p><div class="margin-top margin-large"><div data-w-id="21b65852-d532-e10e-66e7-fc8732627696" style="opacity:0;-webkit-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" class="certifications_list"><div class="certifications_item"><div class="certificate_image-wrapper"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/66585fe0e1dc7e70cc75d990_certificates%20-%20gptw.svg" loading="lazy" width="152" alt="" class="gptw_image"/></div></div><div class="certifications_item"><div class="certificate_image-wrapper"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/66585fe0e1dc7e70cc75d482_invest%20in%20people%20-%20platinum%202.svg" loading="lazy" width="80" alt="" class="features_image"/></div></div></div></div></div></div></div></section><section class="section_features overflow-hidden"><div class="padding-global_cards-overflow padding-section-large is-padding-horizontal"><div class="container-xlarge"><div class="content_component"><div class="padding-global-right-tablet align-center"><div class="max-width-large"><h2 class="text-align-center">Our principles are the framework for our decisions</h2></div></div><div id="clickanddrag" class="horizontal-scroll-container"><div class="scroll-content"><div data-w-id="b42b284e-ab93-5074-52f7-d2e826da859d" style="opacity:0;-webkit-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" class="features_list"><div class="features_item"><div class="features_image-wrapper"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/66585fe0e1dc7e70cc75d483_dependable.svg" loading="lazy" width="60" alt="An illustration representing one of Deriv’s core principles to be reliable." class="features_image"/></div><h3>Be reliable</h3></div><div class="features_item"><div class="features_image-wrapper"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/66585fe0e1dc7e70cc75d56d_be-fair.svg" loading="lazy" width="60" alt="An illustration representing one of Deriv’s core principles to be fair." class="features_image"/></div><h3>Be fair</h3></div><div class="features_item"><div class="features_image-wrapper"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/66585fe0e1dc7e70cc75d56f_be-transparent.svg" loading="lazy" width="60" alt="An illustration representing one of Deriv’s core principles to be transparent." class="features_image"/></div><div class="text-content-wrapper_centered"><h3>Be transparent</h3></div></div><div class="features_item"><div class="features_image-wrapper"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/66585fe0e1dc7e70cc75db7e_responsible.svg" loading="lazy" width="60" alt="An illustration representing Derivs core value of being responsible" class="features_image"/></div><h3>Be responsible</h3></div></div></div></div><div class="padding-global-right-tablet full-width"><a data-attributes="btn-secondary-features" href="/our-principles" class="button is-secondary is-full-width w-button">Learn more</a></div></div></div></div></section><section class="section_leaders"><div class="padding-global padding-section-large"><div class="container-xlarge"><div class="leaders_content"><div class="padding-bottom padding-large"><h2 class="text-align-center">Our leaders</h2></div><div class="w-dyn-list"><div fs-cmsload-mode="load-under" fs-cmsload-element="list" role="list" class="leaders_list w-dyn-items"><div data-w-id="5924c81c-5485-d8bd-9afe-51a135185844" style="opacity:0;-webkit-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" role="listitem" class="leaders_item w-dyn-item"><a href="https://www.linkedin.com/in/jeanyvessireau/" target="_blank" class="leaders_item-wrapper w-inline-block"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d484/66585fe0e1dc7e70cc75ebf4_663bb9fbfc5ddd2d071aaf25_6630002e503a4cced6e979d7_Profile%252520-%252520Profile%252520--2.webp" loading="lazy" alt="Jean-Yves Sireau, Co-Chief Executive Officer at Deriv" class="leaders_photo"/><h3 class="leaders_name">Jean-Yves Sireau</h3><div class="leaders_position">Co-Chief Executive Officer</div><div class="leaders_link-wrapper"><div class="leaders_linkedin"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/667425a3a1972b6c002b1d2e_linkedin-blue.svg" loading="lazy" alt="LinkedIn"/><div class="leaders_linkedin-text">LinkedIn</div></div></div></a></div><div data-w-id="5924c81c-5485-d8bd-9afe-51a135185844" style="opacity:0;-webkit-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" role="listitem" class="leaders_item w-dyn-item"><a href="https://www.linkedin.com/in/rakshit-choudhary-9a67b61b0/" target="_blank" class="leaders_item-wrapper w-inline-block"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d484/66585fe0e1dc7e70cc75ec28_663bb9fbfc5ddd2d071aaf01_6630001be2514c024d784e31_Profile%252520-%252520Rakshit%252520Choudhary.webp" loading="lazy" alt="Rakshit Choudhary, Co-Chief Executive Officer at Deriv" class="leaders_photo"/><h3 class="leaders_name">Rakshit Choudhary</h3><div class="leaders_position">Co-Chief Executive Officer</div><div class="leaders_link-wrapper"><div class="leaders_linkedin"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/667425a3a1972b6c002b1d2e_linkedin-blue.svg" loading="lazy" alt="LinkedIn"/><div class="leaders_linkedin-text">LinkedIn</div></div></div></a></div><div data-w-id="5924c81c-5485-d8bd-9afe-51a135185844" style="opacity:0;-webkit-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" role="listitem" class="leaders_item w-dyn-item"><a href="https://www.linkedin.com/in/joanna-frendo-4449975/" target="_blank" class="leaders_item-wrapper w-inline-block"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d484/66585fe0e1dc7e70cc75ebf5_663bb9fbfc5ddd2d071aaf13_663000023d3d42ffa691afc6_Profile%252520-%252520Joanna%252520Frendo.webp" loading="lazy" alt="Joanna Frendo, Chief Risk &amp; Compliance Officer at Deriv" class="leaders_photo"/><h3 class="leaders_name">Joanna Frendo</h3><div class="leaders_position">Chief Risk &amp; Compliance Officer</div><div class="leaders_link-wrapper"><div class="leaders_linkedin"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/667425a3a1972b6c002b1d2e_linkedin-blue.svg" loading="lazy" alt="LinkedIn"/><div class="leaders_linkedin-text">LinkedIn</div></div></div></a></div><div data-w-id="5924c81c-5485-d8bd-9afe-51a135185844" style="opacity:0;-webkit-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" role="listitem" class="leaders_item w-dyn-item"><a href="https://www.linkedin.com/in/louise-wolf-7b98b460/" target="_blank" class="leaders_item-wrapper w-inline-block"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d484/66585fe0e1dc7e70cc75ebf7_663bb9fbfc5ddd2d071aaef0_662ffff58c2daed8b0b86d72_Profile%252520-%252520Louise%252520Wolf.webp" loading="lazy" alt="Louise Wolf, Co-Chief Financial Officer at Deriv" class="leaders_photo"/><h3 class="leaders_name">Louise Wolf</h3><div class="leaders_position">Co-Chief Financial Officer</div><div class="leaders_link-wrapper"><div class="leaders_linkedin"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/667425a3a1972b6c002b1d2e_linkedin-blue.svg" loading="lazy" alt="LinkedIn"/><div class="leaders_linkedin-text">LinkedIn</div></div></div></a></div><div data-w-id="5924c81c-5485-d8bd-9afe-51a135185844" style="opacity:0;-webkit-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" role="listitem" class="leaders_item w-dyn-item"><a href="https://www.linkedin.com/in/jennice-lourdsamy-352b897/" target="_blank" class="leaders_item-wrapper w-inline-block"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d484/66585fe0e1dc7e70cc75ec91_663bb9fbfc5ddd2d071aae61_662fff65c856b21f7fdcfebe_Profile%252520-%252520Jennice%252520Lourdsamy.webp" loading="lazy" alt="Jennice Lourdsamy, Co-Chief Financial Officer at Deriv" class="leaders_photo"/><h3 class="leaders_name">Jennice Lourdsamy</h3><div class="leaders_position">Co-Chief Financial Officer</div><div class="leaders_link-wrapper"><div class="leaders_linkedin"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/667425a3a1972b6c002b1d2e_linkedin-blue.svg" loading="lazy" alt="LinkedIn"/><div class="leaders_linkedin-text">LinkedIn</div></div></div></a></div><div data-w-id="5924c81c-5485-d8bd-9afe-51a135185844" style="opacity:0;-webkit-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" role="listitem" class="leaders_item w-dyn-item"><a href="https://www.linkedin.com/in/seema-hallon-6919073/" target="_blank" class="leaders_item-wrapper w-inline-block"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d484/66585fe0e1dc7e70cc75ebf6_663bb9fbfc5ddd2d071aaece_661e6e1f01dd2f56adc6da35_leader-6.webp" loading="lazy" alt="Seema Hallon, Chief Human Resources Officer at Deriv" class="leaders_photo"/><h3 class="leaders_name">Seema Hallon</h3><div class="leaders_position">Chief Human Resources Officer</div><div class="leaders_link-wrapper"><div class="leaders_linkedin"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/667425a3a1972b6c002b1d2e_linkedin-blue.svg" loading="lazy" alt="LinkedIn"/><div class="leaders_linkedin-text">LinkedIn</div></div></div></a></div><div data-w-id="5924c81c-5485-d8bd-9afe-51a135185844" style="opacity:0;-webkit-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" role="listitem" class="leaders_item w-dyn-item"><a href="https://www.linkedin.com/in/shyamala-siva-90043b208/" target="_blank" class="leaders_item-wrapper w-inline-block"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d484/66585fe0e1dc7e70cc75ec3a_663bb9fbfc5ddd2d071aaedf_662fffe1c040251e386f3bb5_Profile%252520-%252520Shyamala%252520Siva.webp" loading="lazy" alt="Shyamala Siva, Chief Administrative Officer at Deriv" class="leaders_photo"/><h3 class="leaders_name">Shyamala Siva</h3><div class="leaders_position">Chief Administrative Officer</div><div class="leaders_link-wrapper"><div class="leaders_linkedin"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/667425a3a1972b6c002b1d2e_linkedin-blue.svg" loading="lazy" alt="LinkedIn"/><div class="leaders_linkedin-text">LinkedIn</div></div></div></a></div><div data-w-id="5924c81c-5485-d8bd-9afe-51a135185844" style="opacity:0;-webkit-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" role="listitem" class="leaders_item w-dyn-item"><a href="https://www.linkedin.com/in/chrishorn/" target="_blank" class="leaders_item-wrapper w-inline-block"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d484/66585fe0e1dc7e70cc75eca7_663bb9fbfc5ddd2d071aae50_662fff409d98a44b85db1371_Profile%252520-%252520Chris%252520Horn.webp" loading="lazy" alt="Chris Horn, Head of Engineering at Deriv" class="leaders_photo"/><h3 class="leaders_name">Chris Horn</h3><div class="leaders_position">Head of Engineering</div><div class="leaders_link-wrapper"><div class="leaders_linkedin"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/667425a3a1972b6c002b1d2e_linkedin-blue.svg" loading="lazy" alt="LinkedIn"/><div class="leaders_linkedin-text">LinkedIn</div></div></div></a></div><div data-w-id="5924c81c-5485-d8bd-9afe-51a135185844" style="opacity:0;-webkit-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" role="listitem" class="leaders_item w-dyn-item"><a href="https://www.linkedin.com/in/prakash-bhudia-06125114a/" target="_blank" class="leaders_item-wrapper w-inline-block"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d484/66585fe0e1dc7e70cc75ec0a_663bb9fbfc5ddd2d071aaf2c_662fff72e1d32570115400a3_Profile%252520-%252520Prakash.webp" loading="lazy" alt="Prakash Bhudia, Head of Product &amp; Growth at Deriv" class="leaders_photo"/><h3 class="leaders_name">Prakash Bhudia</h3><div class="leaders_position">Head of Product &amp; Growth</div><div class="leaders_link-wrapper"><div class="leaders_linkedin"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/667425a3a1972b6c002b1d2e_linkedin-blue.svg" loading="lazy" alt="LinkedIn"/><div class="leaders_linkedin-text">LinkedIn</div></div></div></a></div><div data-w-id="5924c81c-5485-d8bd-9afe-51a135185844" style="opacity:0;-webkit-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" role="listitem" class="leaders_item w-dyn-item"><a href="https://www.linkedin.com/in/derek-swift-5787208/" target="_blank" class="leaders_item-wrapper w-inline-block"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d484/66585fe0e1dc7e70cc75ec5e_663bb9fbfc5ddd2d071aaebb_662fffbb6bf5613a41c82206_Profile%252520-%252520Derek%252520Swift.webp" loading="lazy" alt="Derek Swift, Head of Client Funding Facilities at Deriv" class="leaders_photo"/><h3 class="leaders_name">Derek Swift</h3><div class="leaders_position">Head of Client Funding Facilities</div><div class="leaders_link-wrapper"><div class="leaders_linkedin"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/667425a3a1972b6c002b1d2e_linkedin-blue.svg" loading="lazy" alt="LinkedIn"/><div class="leaders_linkedin-text">LinkedIn</div></div></div></a></div><div data-w-id="5924c81c-5485-d8bd-9afe-51a135185844" style="opacity:0;-webkit-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" role="listitem" class="leaders_item w-dyn-item"><a href="https://www.linkedin.com/in/waqasawan/" target="_blank" class="leaders_item-wrapper w-inline-block"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d484/66585fe0e1dc7e70cc75ec4c_663bb9fbfc5ddd2d071aaea8_662fffac888ca68231b6b4bd_Profile%252520-%252520Profile%252520-.webp" loading="lazy" alt="Waqas Awan, Senior Vice President of Product at Deriv" class="leaders_photo"/><h3 class="leaders_name">Waqas Awan</h3><div class="leaders_position">Senior Vice President (Product)</div><div class="leaders_link-wrapper"><div class="leaders_linkedin"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/667425a3a1972b6c002b1d2e_linkedin-blue.svg" loading="lazy" alt="LinkedIn"/><div class="leaders_linkedin-text">LinkedIn</div></div></div></a></div><div data-w-id="5924c81c-5485-d8bd-9afe-51a135185844" style="opacity:0;-webkit-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" role="listitem" class="leaders_item w-dyn-item"><a href="https://www.linkedin.com/in/kavehmz/" target="_blank" class="leaders_item-wrapper w-inline-block"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d484/66585fe0e1dc7e70cc75ec93_663bb9fbfc5ddd2d071aae85_662fff8eda09792ca0467bd0_Profile%252520-%252520Kaveh%252520Mousavi%252520Zamani.webp" loading="lazy" alt="Kaveh Mousavi Zamani, Vice President (Engineering) at Deriv" class="leaders_photo"/><h3 class="leaders_name">Kaveh Mousavi Zamani</h3><div class="leaders_position">Vice President (Engineering)</div><div class="leaders_link-wrapper"><div class="leaders_linkedin"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/667425a3a1972b6c002b1d2e_linkedin-blue.svg" loading="lazy" alt="LinkedIn"/><div class="leaders_linkedin-text">LinkedIn</div></div></div></a></div><div data-w-id="5924c81c-5485-d8bd-9afe-51a135185844" style="opacity:0;-webkit-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" role="listitem" class="leaders_item w-dyn-item"><a href="https://www.linkedin.com/in/raunakkathuria/" target="_blank" class="leaders_item-wrapper w-inline-block"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d484/66585fe0e1dc7e70cc75ec71_663bb9fbfc5ddd2d071aae97_662fff9f342f812e7d046b17_Profile%252520-%252520Raunak%252520Kathuria.webp" loading="lazy" alt="Raunak Kathuria, Vice President of Engineering at Deriv" class="leaders_photo"/><h3 class="leaders_name">Raunak Kathuria</h3><div class="leaders_position">Vice President (Engineering)</div><div class="leaders_link-wrapper"><div class="leaders_linkedin"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/667425a3a1972b6c002b1d2e_linkedin-blue.svg" loading="lazy" alt="LinkedIn"/><div class="leaders_linkedin-text">LinkedIn</div></div></div></a></div><div data-w-id="5924c81c-5485-d8bd-9afe-51a135185844" style="opacity:0;-webkit-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" role="listitem" class="leaders_item w-dyn-item"><a href="https://www.linkedin.com/in/tristam-fenton-may-aba364211/" target="_blank" class="leaders_item-wrapper w-inline-block"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d484/66585fe0e1dc7e70cc75ecbc_663bb9fbfc5ddd2d071aae3e_662f7deeadf84d51ec96bb39_Profile%252520-%252520Tristam.webp" loading="lazy" alt="Tristam Fenton-May, Vice President (Engineering) at Deriv" class="leaders_photo"/><h3 class="leaders_name">Tristam Fenton-May</h3><div class="leaders_position">Vice President (Engineering)</div><div class="leaders_link-wrapper"><div class="leaders_linkedin"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/667425a3a1972b6c002b1d2e_linkedin-blue.svg" loading="lazy" alt="LinkedIn"/><div class="leaders_linkedin-text">LinkedIn</div></div></div></a></div><div data-w-id="5924c81c-5485-d8bd-9afe-51a135185844" style="opacity:0;-webkit-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" role="listitem" class="leaders_item w-dyn-item"><a href="https://www.linkedin.com/in/jeyavarthini-vairakanan-812b7a121/" target="_blank" class="leaders_item-wrapper w-inline-block"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d484/66585fe0e1dc7e70cc75ec92_663bb9fbfc5ddd2d071aae73_662ffd97037a3a773bb882ae_Profile%252520-%252520Jeyavarthini%252520Vairakanan.webp" loading="lazy" alt="Jeyavarthini Vairakanan, Vice President (Customer Relations) at Deriv" class="leaders_photo"/><h3 class="leaders_name">Jeyavarthini Vairakanan</h3><div class="leaders_position">Vice President (Customer Relations)</div><div class="leaders_link-wrapper"><div class="leaders_linkedin"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/667425a3a1972b6c002b1d2e_linkedin-blue.svg" loading="lazy" alt="LinkedIn"/><div class="leaders_linkedin-text">LinkedIn</div></div></div></a></div></div></div><div class="leaders_button-wrapper"><div id="view-more-btn" data-attributes="btn-secondary-leaders" class="load-more-button full-width"><div id="view-all-btn" class="w-inline-block">View all</div><div class="load-more-button_icon w-embed"><svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_9762_5633)">
<path d="M7.46875 16.5312L1.46875 10.5312C1.17708 10.1771 1.17708 9.82292 1.46875 9.46875C1.82292 9.17708 2.17708 9.17708 2.53125 9.46875L8 14.9375L13.4688 9.46875C13.8229 9.17708 14.1771 9.17708 14.5312 9.46875C14.8229 9.82292 14.8229 10.1771 14.5312 10.5312L8.53125 16.5312C8.17708 16.8229 7.82292 16.8229 7.46875 16.5312Z" fill="black" fill-opacity="0.72"/>
</g>
<defs>
<clipPath id="clip0_9762_5633">
<rect width="16" height="24" fill="white"/>
</clipPath>
</defs>
</svg></div></div><div id="view-less-btn" class="load-less-button full-width"><div class="w-inline-block">View less</div><div class="load-more-button_icon is-rotated w-embed"><svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_9762_5633)">
<path d="M7.46875 16.5312L1.46875 10.5312C1.17708 10.1771 1.17708 9.82292 1.46875 9.46875C1.82292 9.17708 2.17708 9.17708 2.53125 9.46875L8 14.9375L13.4688 9.46875C13.8229 9.17708 14.1771 9.17708 14.5312 9.46875C14.8229 9.82292 14.8229 10.1771 14.5312 10.5312L8.53125 16.5312C8.17708 16.8229 7.82292 16.8229 7.46875 16.5312Z" fill="black" fill-opacity="0.72"/>
</g>
<defs>
<clipPath id="clip0_9762_5633">
<rect width="16" height="24" fill="white"/>
</clipPath>
</defs>
</svg></div></div></div></div></div></div></section><div class="section_locations"><div class="padding-global padding-section-large"><div class="container-xlarge"><div class="locations_content"><div class="padding-bottom padding-large"><h2 class="text-align-center">Our locations</h2></div><div class="locations_wrapper"><div class="locations_block"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/66585fe0e1dc7e70cc75d60f_Earth.webp" loading="lazy" width="850" sizes="(max-width: 479px) 93vw, (max-width: 767px) 96vw, (max-width: 991px) 94vw, 840px" alt="" srcset="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/66585fe0e1dc7e70cc75d60f_Earth-p-500.png 500w, https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/66585fe0e1dc7e70cc75d60f_Earth-p-800.png 800w, https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/66585fe0e1dc7e70cc75d60f_Earth-p-1080.png 1080w, https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/66585fe0e1dc7e70cc75d60f_Earth.webp 1700w" class="locations_image"/><div class="locations_point point-1"><div class="locations_point-wrapper"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/66585fe0e1dc7e70cc75d597_point.svg" loading="lazy" alt="" class="locations_point-image"/><div class="locations_point-block"><div class="locations_point-text-wrapper"><div class="locations_point-text-1">George Town</div><div class="locations_point-text-2">Cayman Islands</div><div class="locations_point-text-decor"></div></div></div></div></div><div class="locations_point point-2"><div class="locations_point-wrapper"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/66585fe0e1dc7e70cc75d597_point.svg" loading="lazy" alt="" class="locations_point-image"/><div class="locations_point-block"><div class="locations_point-text-wrapper"><div class="locations_point-text-1">Road Town</div><div class="locations_point-text-2">British Virgin Islands</div><div class="locations_point-text-decor"></div></div></div></div></div><div class="locations_point point-3"><div class="locations_point-wrapper"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/66585fe0e1dc7e70cc75d597_point.svg" loading="lazy" alt="" class="locations_point-image"/><div class="locations_point-block"><div class="locations_point-text-wrapper"><div class="locations_point-text-1">Asunción</div><div class="locations_point-text-2">Paraguay</div><div class="locations_point-text-decor"></div></div></div></div></div><div class="locations_point point-4"><div class="locations_point-wrapper"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/66585fe0e1dc7e70cc75d597_point.svg" loading="lazy" alt="" class="locations_point-image"/><div class="locations_point-block"><div class="locations_point-text-wrapper"><div class="locations_point-text-1">Ciudad del Este</div><div class="locations_point-text-2">Paraguay</div><div class="locations_point-text-decor"></div></div></div></div></div><div class="locations_point point-6"><div class="locations_point-wrapper"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/66585fe0e1dc7e70cc75d597_point.svg" loading="lazy" alt="" class="locations_point-image"/><div class="locations_point-block"><div class="locations_point-text-wrapper"><div class="locations_point-text-1">Reading</div><div class="locations_point-text-2">United Kingdom</div><div class="locations_point-text-decor"></div></div></div></div></div><div class="locations_point point-23"><div class="locations_point-wrapper"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/66585fe0e1dc7e70cc75d597_point.svg" loading="lazy" alt="" class="locations_point-image"/><div class="locations_point-block"><div class="locations_point-text-wrapper"><div class="locations_point-text-1">London</div><div class="locations_point-text-2">United Kingdom</div><div class="locations_point-text-decor"></div></div></div></div></div><div class="locations_point point-8"><div class="locations_point-wrapper"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/66585fe0e1dc7e70cc75d597_point.svg" loading="lazy" alt="" class="locations_point-image"/><div class="locations_point-block"><div class="locations_point-text-wrapper"><div class="locations_point-text-1">Berlin</div><div class="locations_point-text-2">Germany</div><div class="locations_point-text-decor"></div></div></div></div></div><div class="locations_point point-5"><div class="locations_point-wrapper"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/66585fe0e1dc7e70cc75d597_point.svg" loading="lazy" alt="" class="locations_point-image"/><div class="locations_point-block"><div class="locations_point-text-wrapper"><div class="locations_point-text-1">Guernsey</div><div class="locations_point-text-2">Channel Islands</div><div class="locations_point-text-decor"></div></div></div></div></div><div class="locations_point point-7"><div class="locations_point-wrapper"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/66585fe0e1dc7e70cc75d597_point.svg" loading="lazy" alt="" class="locations_point-image"/><div class="locations_point-block"><div class="locations_point-text-wrapper"><div class="locations_point-text-1">Paris</div><div class="locations_point-text-2">France</div><div class="locations_point-text-decor"></div></div></div></div></div><div class="locations_point point-9"><div class="locations_point-wrapper"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/66585fe0e1dc7e70cc75d597_point.svg" loading="lazy" alt="" class="locations_point-image"/><div class="locations_point-block"><div class="locations_point-text-wrapper"><div class="locations_point-text-1">Birkirkara</div><div class="locations_point-text-2">Malta</div><div class="locations_point-text-decor"></div></div></div></div></div><div class="locations_point point-11"><div class="locations_point-wrapper"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/66585fe0e1dc7e70cc75d597_point.svg" loading="lazy" alt="" class="locations_point-image"/><div class="locations_point-block"><div class="locations_point-text-wrapper"><div class="locations_point-text-1">Limassol</div><div class="locations_point-text-2">Cyprus</div><div class="locations_point-text-decor"></div></div></div></div></div><div class="locations_point point-12"><div class="locations_point-wrapper"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/66585fe0e1dc7e70cc75d597_point.svg" loading="lazy" alt="" class="locations_point-image"/><div class="locations_point-block"><div class="locations_point-text-wrapper"><div class="locations_point-text-1">Amman</div><div class="locations_point-text-2">Jordan</div><div class="locations_point-text-decor"></div></div></div></div></div><div class="locations_point point-10"><div class="locations_point-wrapper"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/66585fe0e1dc7e70cc75d597_point.svg" loading="lazy" alt="" class="locations_point-image"/><div class="locations_point-block"><div class="locations_point-text-wrapper"><div class="locations_point-text-1">Kigali</div><div class="locations_point-text-2">Rwanda</div><div class="locations_point-text-decor"></div></div></div></div></div><div class="locations_point point-15"><div class="locations_point-wrapper"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/66585fe0e1dc7e70cc75d597_point.svg" loading="lazy" alt="" class="locations_point-image"/><div class="locations_point-block"><div class="locations_point-text-wrapper"><div class="locations_point-text-1">Ipoh</div><div class="locations_point-text-2">Malaysia</div><div class="locations_point-text-decor"></div></div></div></div></div><div class="locations_point point-17"><div class="locations_point-wrapper"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/66585fe0e1dc7e70cc75d597_point.svg" loading="lazy" alt="" class="locations_point-image"/><div class="locations_point-block"><div class="locations_point-text-wrapper"><div class="locations_point-text-1">Cyberjaya</div><div class="locations_point-text-2">Malaysia</div><div class="locations_point-text-decor"></div></div></div></div></div><div class="locations_point point-16"><div class="locations_point-wrapper"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/66585fe0e1dc7e70cc75d597_point.svg" loading="lazy" alt="" class="locations_point-image"/><div class="locations_point-block"><div class="locations_point-text-wrapper"><div class="locations_point-text-1">Singapore</div><div class="locations_point-text-2">Singapore</div><div class="locations_point-text-decor"></div></div></div></div></div><div class="locations_point point-18"><div class="locations_point-wrapper"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/66585fe0e1dc7e70cc75d597_point.svg" loading="lazy" alt="" class="locations_point-image"/><div class="locations_point-block"><div class="locations_point-text-wrapper"><div class="locations_point-text-1">Melaka</div><div class="locations_point-text-2">Malaysia</div><div class="locations_point-text-decor"></div></div></div></div></div><div class="locations_point point-19"><div class="locations_point-wrapper"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/66585fe0e1dc7e70cc75d597_point.svg" loading="lazy" alt="" class="locations_point-image"/><div class="locations_point-block"><div class="locations_point-text-wrapper"><div class="locations_point-text-1">Labuan</div><div class="locations_point-text-2">Malaysia</div><div class="locations_point-text-decor"></div></div></div></div></div><div class="locations_point point-20"><div class="locations_point-wrapper"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/66585fe0e1dc7e70cc75d597_point.svg" loading="lazy" alt="" class="locations_point-image"/><div class="locations_point-block"><div class="locations_point-text-wrapper"><div class="locations_point-text-1">Port Vila</div><div class="locations_point-text-2">Vanuatu</div><div class="locations_point-text-decor"></div></div></div></div></div><div class="locations_point point-21"><div class="locations_point-wrapper"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/66585fe0e1dc7e70cc75d597_point.svg" loading="lazy" alt="" class="locations_point-image"/><div class="locations_point-block"><div class="locations_point-text-wrapper"><div class="locations_point-text-1">Dakar</div><div class="locations_point-text-2">Senegal</div><div class="locations_point-text-decor"></div></div></div></div></div></div></div></div></div></div></div><section class="section_stats is-white"><div class="padding-global padding-section-small"><div class="container-xlarge"><div class="stats_component"><div class="stats_list"><div data-w-id="e5a54f88-7be1-af4e-3b90-5961020e04cc" style="opacity:0;-webkit-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" class="text-content-wrapper_centered"><h3>1,300+</h3><div>Employees</div></div><div data-w-id="e5a54f88-7be1-af4e-3b90-5961020e04d1" style="opacity:0;-webkit-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" class="stats_item"><h3>80+</h3><div>Nationalities</div></div><div data-w-id="e5a54f88-7be1-af4e-3b90-5961020e04d6" style="opacity:0;-webkit-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" class="stats_item"><h3>20</h3><div>Locations</div></div><div data-w-id="e5a54f88-7be1-af4e-3b90-5961020e04db" style="opacity:0;-webkit-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" class="stats_item"><h3>15</h3><div>Countries</div></div></div></div></div></div></section><div class="section_cta-footer w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><section class="section_cta derivgo-query-element"><div class="padding-global"><div class="container-large"><div class="section-cta_wrapper"><div id="w-node-_64f73cdf-0ebe-d262-d9c4-02ddc5ee3149-c5ee3145" class="section-cta_content"><div class="margin-bottom margin-small"><h2 class="text-color-white">Exceptional team, rapid growth</h2></div></div><div class="button-group cta-content btn-free-demo"><a data-attributes="btn-primary-fcta" data-class="" href="https://deriv.zohorecruit.eu/jobs/Careers" target="_blank" class="button is-icon logged-out-btn hide-element w-inline-block"><div>See open positions</div></a><a id="btn-traders-hub" data-attributes="btn-primary-fcta" href="/appstore/traders-hub" class="new-button logged-in-btn tradershub-btn is-adaptive hide-element w-inline-block"><div class="icon-embed-auto is-adaptive w-embed"><svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_19689_31317)">
<path d="M2.5 6.5V9.5H5.5V6.5H2.5ZM1 6.5C1 5.6875 1.65625 5 2.5 5H5.5C6.3125 5 7 5.6875 7 6.5V9.5C7 10.3438 6.3125 11 5.5 11H2.5C1.65625 11 1 10.3438 1 9.5V6.5ZM2.5 14.5V17.5H5.5V14.5H2.5ZM1 14.5C1 13.6875 1.65625 13 2.5 13H5.5C6.3125 13 7 13.6875 7 14.5V17.5C7 18.3438 6.3125 19 5.5 19H2.5C1.65625 19 1 18.3438 1 17.5V14.5ZM13.5 6.5H10.5V9.5H13.5V6.5ZM10.5 5H13.5C14.3125 5 15 5.6875 15 6.5V9.5C15 10.3438 14.3125 11 13.5 11H10.5C9.65625 11 9 10.3438 9 9.5V6.5C9 5.6875 9.65625 5 10.5 5ZM10.5 14.5V17.5H13.5V14.5H10.5ZM9 14.5C9 13.6875 9.65625 13 10.5 13H13.5C14.3125 13 15 13.6875 15 14.5V17.5C15 18.3438 14.3125 19 13.5 19H10.5C9.65625 19 9 18.3438 9 17.5V14.5Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_19689_31317">
<rect width="16" height="24" fill="white"/>
</clipPath>
</defs>
</svg></div><div>Trader&#x27;s Hub</div></a></div></div></div></div></section></div></div></div><div id="live_chat-wrapper" class="contact-social_links-wrapper is-whatsapp derivgo-query-element hide-element"><a href="#" target="_blank" class="contact-social_link-live shadow-medium is-whatsapp livechatbtn w-inline-block"><div class="contact-social_embed is-whatsapp is-normal w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
<rect width="32" height="32" fill="white"/>
<g clip-path="url(#clip0_3594_25066)">
<path d="M28.8 9.4H22.4V11H28.8C29.682 11 30.4 11.718 30.4 12.6V22.2C30.4 23.082 29.682 23.8 28.8 23.8H25.6V26.2785L21.22 23.8H16C15.118 23.8 14.4 23.082 14.4 22.2V20.6H12.8V22.199C12.8 23.9615 14.2375 25.354 15.955 25.354L20.8 25.4L26.245 28.4815C26.355 28.565 26.48 28.6 26.6 28.6C26.915 28.6 27.2 28.355 27.2 28V25.3985H28.8C30.5625 25.3985 32 23.961 32 22.2435V12.555C32 10.835 30.565 9.4 28.8 9.4ZM20.8 15.8V6.155C20.8 4.4375 19.365 3 17.6 3H3.2C1.4375 3 0 4.4375 0 6.155V15.755C0 17.565 1.4375 19 3.2 19H4.8V21.6C4.8 21.955 5.09 22.2 5.4 22.2C5.519 22.2 5.644 22.1625 5.756 22.081L11.2 19L17.6 18.996C19.365 18.995 20.8 17.565 20.8 15.8ZM10.78 17.4L6.4 19.88V17.4H3.2C2.318 17.4 1.6 16.68 1.6 15.8V6.2C1.6 5.318 2.318 4.6 3.2 4.6H17.6C18.482 4.6 19.2 5.318 19.2 6.2V15.8C19.2 16.682 18.482 17.4 17.6 17.4H10.78Z" fill="#414652" fill-opacity="0.72"/>
<path d="M15.2741 8.83105H4.26765C3.92065 8.83105 3.63965 9.11355 3.63965 9.45905C3.63965 9.80455 3.92065 10.0871 4.26765 10.0871H15.2741C15.6196 10.0871 15.9021 9.80455 15.9021 9.45905C15.9021 9.11355 15.6196 8.83105 15.2741 8.83105Z" fill="#414652" fill-opacity="0.72"/>
<path d="M9.92115 11.972C9.92115 11.6265 9.63865 11.344 9.29315 11.344H4.26765C3.92065 11.344 3.63965 11.6265 3.63965 11.972C3.63965 12.3175 3.92065 12.6 4.26765 12.6H9.29315C9.63865 12.6 9.92115 12.3175 9.92115 11.972Z" fill="#414652" fill-opacity="0.72"/>
</g>
<defs>
<clipPath id="clip0_3594_25066">
<rect width="32" height="25.6" fill="white" transform="translate(0 3)"/>
</clipPath>
</defs>
</svg></div><div class="contact-social_embed is-whatsapp is-hover w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
<rect width="32" height="32" fill="white"/>
<g clip-path="url(#clip0_3594_25067)">
<path d="M20.8 15.8V6.155C20.8 4.4375 19.365 3 17.6 3H3.2C1.4375 3 0 4.4375 0 6.155V15.755C0 17.565 1.4375 19 3.2 19H4.8V21.6C4.8 21.955 5.09 22.2 5.4 22.2C5.519 22.2 5.644 22.1625 5.756 22.081L11.2 19L17.6 18.996C19.365 18.9945 20.8 17.565 20.8 15.8Z" fill="#FF444F"/>
<path d="M28.7998 9.3999H22.3998V10.9999H28.7998C29.6818 10.9999 30.3998 11.7179 30.3998 12.5999V22.1999C30.3998 23.0819 29.6818 23.7999 28.7998 23.7999H25.5998V26.2784L21.2198 23.7999H15.9998C15.1178 23.7999 14.3998 23.0819 14.3998 22.1999V20.5999H12.7998V22.1989C12.7998 23.9614 14.2373 25.3539 15.9548 25.3539L20.7998 25.3999L26.2448 28.4814C26.3548 28.5649 26.4798 28.5999 26.5998 28.5999C26.9148 28.5999 27.1998 28.3549 27.1998 27.9999V25.3984H28.7998C30.5623 25.3984 31.9998 23.9609 31.9998 22.2434V12.5549C31.9998 10.8349 30.5648 9.3999 28.7998 9.3999Z" fill="#FF444F"/>
<path d="M15.2741 8.83105H4.26765C3.92065 8.83105 3.63965 9.11355 3.63965 9.45905C3.63965 9.80455 3.92065 10.0871 4.26765 10.0871H15.2741C15.6196 10.0871 15.9021 9.80455 15.9021 9.45905C15.9021 9.11355 15.6196 8.83105 15.2741 8.83105Z" fill="white"/>
<path d="M9.92115 11.972C9.92115 11.6265 9.63865 11.344 9.29315 11.344H4.26765C3.92065 11.344 3.63965 11.6265 3.63965 11.972C3.63965 12.3175 3.92065 12.6 4.26765 12.6H9.29315C9.63865 12.6 9.92115 12.3175 9.92115 11.972Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_3594_25067">
<rect width="32" height="25.6" fill="white" transform="translate(0 3)"/>
</clipPath>
</defs>
</svg></div></a><a href="https://api.whatsapp.com/send/?phone=35699578341&amp;text&amp;type=phone_number&amp;app_absent=0" target="_blank" class="contact-social_link-wp shadow-medium is-whatsapp whatsapp_chat w-inline-block"><div class="contact-social_embed is-whatsapp is-normal w-embed"><svg width="100%" height="100%" viewBox="0 0 14 22" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_17902_12317)">
<path d="M11.293 6.40234C11.8763 6.98568 12.3229 7.64193 12.6328 8.37109C12.9609 9.10026 13.125 9.875 13.125 10.6953C13.1068 11.8255 12.8242 12.8464 12.2773 13.7578C11.7305 14.6693 10.9922 15.3984 10.0625 15.9453C9.15104 16.474 8.13021 16.7474 7 16.7656C5.96094 16.7656 4.99479 16.5195 4.10156 16.0273L0.875 16.875L1.72266 13.7305C1.19401 12.8008 0.929688 11.7891 0.929688 10.6953C0.947917 9.5651 1.22135 8.54427 1.75 7.63281C2.29688 6.72135 3.02604 5.99219 3.9375 5.44531C4.84896 4.91667 5.86979 4.64323 7 4.625C8.65885 4.64323 10.0898 5.23568 11.293 6.40234ZM7 15.7539C8.42188 15.7174 9.61589 15.2253 10.582 14.2773C11.5482 13.3112 12.0586 12.1172 12.1133 10.6953C12.0768 9.3099 11.5573 8.125 10.5547 7.14062C9.57031 6.15625 8.38542 5.66406 7 5.66406C5.57812 5.68229 4.39323 6.17448 3.44531 7.14062C2.47917 8.08854 1.97786 9.27344 1.94141 10.6953C1.95964 11.6615 2.22396 12.5547 2.73438 13.375L2.84375 13.5664L2.32422 15.4258L4.23828 14.9336L4.42969 15.043C5.21354 15.4987 6.07031 15.7357 7 15.7539ZM9.76172 11.9805C9.77995 11.9805 9.80729 11.9896 9.84375 12.0078C9.95312 12.0443 10.026 12.0898 10.0625 12.1445C10.1172 12.2357 10.0807 12.4818 9.95312 12.8828C9.88021 13.0651 9.73438 13.2201 9.51562 13.3477C9.29688 13.4753 9.10547 13.5573 8.94141 13.5938C8.72266 13.6302 8.47656 13.6302 8.20312 13.5938C7.94792 13.5391 7.58333 13.4115 7.10938 13.2109C6.39844 12.8646 5.82422 12.4453 5.38672 11.9531C4.93099 11.4609 4.65755 11.1328 4.56641 10.9688C4.54818 10.9505 4.53906 10.9323 4.53906 10.9141C4.52083 10.9141 4.51172 10.9141 4.51172 10.9141C4.45703 10.8411 4.34766 10.6589 4.18359 10.3672C4.01953 10.0573 3.92839 9.72005 3.91016 9.35547C3.92839 9.00911 3.99219 8.73568 4.10156 8.53516C4.21094 8.33464 4.3112 8.19792 4.40234 8.125C4.42057 8.10677 4.42969 8.08854 4.42969 8.07031C4.59375 7.94271 4.73047 7.88802 4.83984 7.90625C4.94922 7.90625 5.04948 7.90625 5.14062 7.90625C5.14062 7.90625 5.14974 7.90625 5.16797 7.90625C5.25911 7.85156 5.35938 7.93359 5.46875 8.15234C5.50521 8.24349 5.5599 8.36198 5.63281 8.50781C5.70573 8.6901 5.76953 8.85417 5.82422 9C5.87891 9.16406 5.91536 9.25521 5.93359 9.27344C5.98828 9.36458 5.9974 9.45573 5.96094 9.54688C5.8151 9.80208 5.69661 9.96615 5.60547 10.0391C5.47786 10.1484 5.45052 10.2578 5.52344 10.3672C5.79688 10.8594 6.09766 11.2331 6.42578 11.4883C6.75391 11.7435 7.13672 11.9714 7.57422 12.1719C7.72005 12.263 7.82943 12.2539 7.90234 12.1445C7.95703 12.0898 8.03906 11.9987 8.14844 11.8711C8.23958 11.7435 8.32161 11.6341 8.39453 11.543C8.48568 11.4154 8.59505 11.3971 8.72266 11.4883C8.8138 11.5247 8.98698 11.5977 9.24219 11.707C9.4974 11.8346 9.67057 11.9258 9.76172 11.9805Z" fill="currentcolor"/>
</g>
</svg></div><div class="contact-social_embed is-whatsapp is-hover w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
<g clip-path="url(#clip0_3594_25096)">
<g filter="url(#filter0_f_3594_25096)">
<path d="M9.56049 25.8142L9.99336 26.0706C11.8114 27.1496 13.896 27.7203 16.0218 27.7213H16.0263C22.5546 27.7213 27.8676 22.4096 27.8703 15.881C27.8715 12.7173 26.6407 9.74226 24.4044 7.50434C23.3076 6.40067 22.0028 5.5255 20.5655 4.92949C19.1282 4.33349 17.5869 4.02849 16.0309 4.03214C9.49754 4.03214 4.18434 9.34329 4.18202 15.8715C4.1788 18.1007 4.80656 20.2853 5.99272 22.1727L6.27453 22.6205L5.07778 26.9894L9.56049 25.8142ZM1.65625 30.374L3.67807 22.9923C2.43116 20.8321 1.77517 18.3813 1.77594 15.8705C1.77924 8.01584 8.17142 1.62573 16.0265 1.62573C19.8383 1.62767 23.4161 3.11103 26.1069 5.80369C28.7977 8.49635 30.2781 12.0755 30.2768 15.8819C30.2733 23.736 23.8801 30.1273 16.0263 30.1273H16.0201C13.6353 30.1263 11.292 29.5281 9.21051 28.3931L1.65625 30.374Z" fill="#B3B3B3"/>
</g>
<path d="M1.50781 30.2273L3.52963 22.8456C2.28058 20.6801 1.62449 18.2236 1.62751 15.7238C1.6308 7.86911 8.02298 1.479 15.878 1.479C19.6898 1.48094 23.2677 2.9643 25.9584 5.65696C28.6492 8.34962 30.1297 11.9287 30.1283 15.7352C30.1249 23.5893 23.7317 29.9806 15.8778 29.9806H15.8716C13.4869 29.9796 11.1435 29.3813 9.06207 28.2464L1.50781 30.2273Z" fill="white"/>
<path d="M15.8841 3.88553C9.35069 3.88553 4.03749 9.19668 4.03517 15.7249C4.03195 17.9541 4.65971 20.1387 5.84587 22.0261L6.12768 22.4741L4.93093 26.843L9.41383 25.6676L9.8467 25.924C11.6648 27.0029 13.7493 27.5735 15.8752 27.5747H15.8796C22.408 27.5747 27.7211 22.2629 27.7237 15.7344C27.7286 14.1783 27.4248 12.6367 26.8299 11.1989C26.235 9.761 25.3607 8.45543 24.2578 7.35773C23.161 6.25403 21.8561 5.37885 20.4187 4.78284C18.9814 4.18684 17.4401 3.88185 15.8841 3.88553Z" fill="url(#paint0_linear_3594_25096)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.3182 9.76846C12.0513 9.17562 11.7705 9.16361 11.5169 9.15335L10.8344 9.14502C10.597 9.14502 10.2112 9.23411 9.885 9.59047C9.55884 9.94683 8.63867 10.8081 8.63867 12.5599C8.63867 14.3117 9.91463 16.0044 10.0924 16.2422C10.2702 16.4801 12.5556 20.1895 16.1749 21.6167C19.1826 22.8028 19.7946 22.5669 20.4477 22.5076C21.1008 22.4483 22.5543 21.6463 22.8508 20.8149C23.1474 19.9834 23.1476 19.2711 23.0587 19.1222C22.9698 18.9732 22.7323 18.8847 22.3759 18.7065C22.0196 18.5284 20.2693 17.6671 19.9429 17.5482C19.6166 17.4293 19.3793 17.3702 19.1417 17.7266C18.904 18.0829 18.2225 18.8845 18.0147 19.1222C17.8069 19.3598 17.5994 19.3896 17.2431 19.2117C16.8867 19.0337 15.7401 18.6575 14.3797 17.4446C13.3213 16.5008 12.6068 15.3353 12.3988 14.9791C12.1907 14.6229 12.3767 14.43 12.5553 14.2526C12.715 14.093 12.9112 13.8368 13.0896 13.629C13.268 13.4212 13.3267 13.2726 13.4452 13.0354C13.5637 12.7981 13.5047 12.5897 13.4156 12.4117C13.3265 12.2337 12.6347 10.4727 12.3182 9.76846Z" fill="white"/>
</g>
<defs>
<filter id="filter0_f_3594_25096" x="0.288504" y="0.257986" width="31.3566" height="31.4838" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.683873" result="effect1_foregroundBlur_3594_25096"/>
</filter>
<linearGradient id="paint0_linear_3594_25096" x1="15.6383" y1="5.3071" x2="15.7584" y2="25.551" gradientUnits="userSpaceOnUse">
<stop stop-color="#57D163"/>
<stop offset="1" stop-color="#23B33A"/>
</linearGradient>
<clipPath id="clip0_3594_25096">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>
</svg></div></a></div></div><div class="section_footer"><footer class="footer_component derivgo-query-element"><div class="padding-global"><div class="container-xlarge"><div class="padding-vertical padding-medium"><div class="footer_social-wrapper"><a href="/" class="footer_logo-link w-nav-brand"><div class="footer_logo w-embed"><svg width="100%" height="100%" viewBox="0 0 72 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.4238 0.808863L13.1912 7.79644H8.91248C4.92071 7.79644 1.11591 11.0293 0.410715 15.0195L0.112228 16.7179C-0.589682 20.7082 2.07366 23.9411 6.06543 23.9411H9.63407C12.5434 23.9411 15.315 21.5869 15.8267 18.6787L19.1133 0.0552979L14.4238 0.808863ZM11.3878 18.0196C11.2304 18.918 10.4213 19.6492 9.52256 19.6492H7.35448C5.56031 19.6492 4.35984 18.1934 4.67471 16.3966L4.86168 15.3376C5.17983 13.5441 6.89199 12.0851 8.68615 12.0851H12.4347L11.3878 18.0196ZM47.3757 23.9408L50.1834 8.01904H54.6245L51.8168 23.9408H47.3757ZM47.8561 8.20264C47.6335 9.46551 47.4099 10.7284 47.1873 11.9913C45.0833 11.3377 42.9125 11.5458 42.2456 11.6788C41.5254 15.7671 40.8042 19.8564 40.083 23.9447H35.6389C36.2424 20.5239 38.3042 8.84149 38.3042 8.84149C39.7496 8.24317 43.2991 7.02889 47.8561 8.20264ZM29.8494 7.79374H26.3924C23.0238 7.79374 19.8128 10.5217 19.219 13.8889L18.5204 17.8464C17.9267 21.2137 20.1736 23.9417 23.5422 23.9417H30.8959L31.6503 19.6629H24.7392C23.6175 19.6629 22.8664 18.7546 23.0665 17.63L23.0895 17.4956H34.2316L34.8679 13.8889C35.4615 10.5217 33.2148 7.79374 29.8462 7.79374H29.8494ZM30.4103 13.548L30.3841 13.7775H23.7586L23.7947 13.5742C23.9947 12.4528 25.0181 11.4659 26.143 11.4659H28.731C29.843 11.4659 30.5941 12.4365 30.4103 13.548ZM67.5083 8.01904H71.9526C70.4387 12.0426 66.9691 18.887 63.6082 23.9408H59.1639C57.6212 19.1308 56.625 12.429 56.4349 8.01904H60.8794C60.9596 9.45755 61.6038 14.7933 62.339 18.5208C64.3555 14.8945 66.5786 10.1366 67.5049 8.01904H67.5083Z" fill="currentcolor"/>
</svg></div></a><div id="footer_social-icons_diel" class="footer_social-icons"><div class="footer_social-icons_item"><a href="https://www.facebook.com/derivdotcom" target="_blank" class="footer_social-icons_wrapper w-inline-block"><img loading="lazy" src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/6661447d728f29ee4237fcf0_facebook.svg" alt="Facebook"/></a></div><div id="w-node-_7ee69540-8e38-190b-1c17-19f24d992327-f690dc6d" class="footer_social-icons_item"><a href="https://twitter.com/derivdotcom/" target="_blank" class="footer_social-icons_wrapper w-inline-block"><img loading="lazy" src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/66585fe0e1dc7e70cc75d6a7_x-twitter-md.svg" alt="Twitter"/></a></div><div id="w-node-_7ee69540-8e38-190b-1c17-19f24d99232a-f690dc6d" class="footer_social-icons_item"><a href="https://www.instagram.com/deriv_official/" target="_blank" class="footer_social-icons_wrapper w-inline-block"><img loading="lazy" src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/66585fe0e1dc7e70cc75d67b_instagram-md.svg" alt="Instagram"/></a></div><div id="w-node-_7ee69540-8e38-190b-1c17-19f24d99232d-f690dc6d" class="footer_social-icons_item"><a href="https://www.youtube.com/@deriv" target="_blank" class="footer_social-icons_wrapper w-inline-block"><img loading="lazy" src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/66613a1fcd4bb8b64795b203_youtube.svg" alt="Youtube"/></a></div><div id="w-node-_7ee69540-8e38-190b-1c17-19f24d992330-f690dc6d" class="footer_social-icons_item"><a href="https://www.linkedin.com/company/derivdotcom/" target="_blank" class="footer_social-icons_wrapper w-inline-block"><img loading="lazy" src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/66585fe0e1dc7e70cc75d67f_linkedin-md.svg" alt="LinkedIn"/></a></div></div><div id="footer_social-icons_row" class="footer_social-icons"><div class="footer_social-icons_item"><a href="https://www.facebook.com/derivdotcom/" target="_blank" class="footer_social-icons_wrapper w-inline-block"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/6661447d728f29ee4237fcf0_facebook.svg" loading="lazy" alt="Facebook"/></a></div><div id="w-node-_658d6c14-e833-9575-42b3-2e5fdb09dbf7-f690dc6d" class="footer_social-icons_item"><a href="https://twitter.com/derivdotcom/" target="_blank" class="footer_social-icons_wrapper w-inline-block"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/66585fe0e1dc7e70cc75d6a7_x-twitter-md.svg" loading="lazy" alt="Twitter"/></a></div><div id="w-node-_658d6c14-e833-9575-42b3-2e5fdb09dbfa-f690dc6d" class="footer_social-icons_item"><a href="https://www.instagram.com/deriv_official/" target="_blank" class="footer_social-icons_wrapper w-inline-block"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/66585fe0e1dc7e70cc75d67b_instagram-md.svg" loading="lazy" alt="Instagram"/></a></div><div id="w-node-_658d6c14-e833-9575-42b3-2e5fdb09dbfd-f690dc6d" class="footer_social-icons_item"><a href="https://www.youtube.com/@deriv" target="_blank" class="footer_social-icons_wrapper w-inline-block"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/66613a1fcd4bb8b64795b203_youtube.svg" loading="lazy" alt="Youtube"/></a></div><div id="w-node-_658d6c14-e833-9575-42b3-2e5fdb09dc00-f690dc6d" class="footer_social-icons_item"><a href="https://www.linkedin.com/company/derivdotcom/" target="_blank" class="footer_social-icons_wrapper w-inline-block"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/66585fe0e1dc7e70cc75d67f_linkedin-md.svg" loading="lazy" alt="LinkedIn"/></a></div><div id="w-node-_658d6c14-e833-9575-42b3-2e5fdb09dc03-f690dc6d" class="footer_social-icons_item"><a href="https://t.me/Derivchannelofficial" target="_blank" class="footer_social-icons_wrapper w-inline-block"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/66585fe0e1dc7e70cc75d6a3_telegram-md.svg" loading="lazy" alt="Telegram"/></a></div></div></div><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><div class="padding-bottom padding-medium"><div class="footer_tab"><div data-delay="0" data-hover="false" class="footer_tabs-dropdown w-dropdown"><div class="footer_tabs-toggle w-dropdown-toggle"><div class="footer_tabs-icon w-icon-dropdown-toggle"></div><div>About</div></div><nav class="footer_tabs-list w-dropdown-list"><a href="/who-we-are" aria-current="page" class="footer_tabs-dropdown-link w-dropdown-link w--current">Who we are</a><a href="/why-choose-us" class="footer_tabs-dropdown-link w-dropdown-link">Why choose us</a><a href="/our-principles" class="footer_tabs-dropdown-link w-dropdown-link">Our principles</a><a href="/contact-us" class="footer_tabs-dropdown-link w-dropdown-link">Contact us</a><a href="/careers" class="footer_tabs-dropdown-link w-dropdown-link">Careers</a><a href="/derivtech" target="_blank" class="footer_tabs-dropdown-link is-block w-inline-block"><div>Deriv Tech</div><div class="icon-embed-auto w-embed"><svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_8673_4157)">
<path d="M10.5 7C10.8125 7.02083 10.9792 7.1875 11 7.5V14.5C10.9792 14.8125 10.8125 14.9792 10.5 15C10.1875 14.9792 10.0208 14.8125 10 14.5V8.71875L1.84375 16.8438C1.61458 17.0521 1.38542 17.0521 1.15625 16.8438C0.947917 16.6146 0.947917 16.3854 1.15625 16.1562L9.28125 8H3.5C3.1875 7.97917 3.02083 7.8125 3 7.5C3.02083 7.1875 3.1875 7.02083 3.5 7H10.5Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_8673_4157">
<rect width="12" height="24" fill="white"/>
</clipPath>
</defs>
</svg></div></a><a href="/derivlife" target="_blank" class="footer_tabs-dropdown-link is-block w-inline-block"><div>Deriv Life</div><div class="icon-embed-auto w-embed"><svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_8673_4157)">
<path d="M10.5 7C10.8125 7.02083 10.9792 7.1875 11 7.5V14.5C10.9792 14.8125 10.8125 14.9792 10.5 15C10.1875 14.9792 10.0208 14.8125 10 14.5V8.71875L1.84375 16.8438C1.61458 17.0521 1.38542 17.0521 1.15625 16.8438C0.947917 16.6146 0.947917 16.3854 1.15625 16.1562L9.28125 8H3.5C3.1875 7.97917 3.02083 7.8125 3 7.5C3.02083 7.1875 3.1875 7.02083 3.5 7H10.5Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_8673_4157">
<rect width="12" height="24" fill="white"/>
</clipPath>
</defs>
</svg></div></a></nav></div><div data-delay="0" data-hover="false" class="footer_tabs-dropdown w-dropdown"><div class="footer_tabs-toggle w-dropdown-toggle"><div class="footer_tabs-icon w-icon-dropdown-toggle"></div><div>Trade</div></div><nav class="footer_tabs-list w-dropdown-list"><a href="/trade/cfds" class="footer_tabs-dropdown-link w-dropdown-link">CFDs</a><a href="/trade/options" class="footer_tabs-dropdown-link w-dropdown-link">Options</a></nav></div><div data-delay="0" data-hover="false" class="footer_tabs-dropdown w-dropdown"><div class="footer_tabs-toggle w-dropdown-toggle"><div class="footer_tabs-icon w-icon-dropdown-toggle"></div><div>Markets</div></div><nav class="footer_tabs-list w-dropdown-list"><a href="/markets/forex" class="footer_tabs-dropdown-link w-dropdown-link">Forex</a><a href="/markets/derived-indices/synthetic-indices" class="footer_tabs-dropdown-link w-dropdown-link">Derived Indices</a><a href="/markets/stocks" class="footer_tabs-dropdown-link w-dropdown-link">Stocks</a><a href="/markets/stock-indices" class="footer_tabs-dropdown-link w-dropdown-link">Stock Indices</a><a href="/markets/commodities" class="footer_tabs-dropdown-link w-dropdown-link">Commodities</a><a href="/markets/cryptocurrencies" class="footer_tabs-dropdown-link w-dropdown-link">Cryptocurrencies</a><a href="/markets/etfs" class="footer_tabs-dropdown-link w-dropdown-link">ETFs</a><a href="/markets/tactical-indices" class="footer_tabs-dropdown-link w-dropdown-link">Tactical Indices</a></nav></div><div data-delay="0" data-hover="false" class="footer_tabs-dropdown w-dropdown"><div class="footer_tabs-toggle w-dropdown-toggle"><div class="footer_tabs-icon w-icon-dropdown-toggle"></div><div>Platforms</div></div><nav class="footer_tabs-list w-dropdown-list"><a href="/trading-platforms/deriv-mt5" class="footer_tabs-dropdown-link w-dropdown-link">Deriv MT5</a><a href="/trading-platforms/deriv-ctrader" class="footer_tabs-dropdown-link w-dropdown-link">Deriv cTrader</a><a href="/trading-platforms/deriv-x" class="footer_tabs-dropdown-link w-dropdown-link">Deriv X</a><a href="/trading-platforms/deriv-trader" class="footer_tabs-dropdown-link w-dropdown-link">Deriv Trader</a><a href="/trading-platforms/deriv-go" class="footer_tabs-dropdown-link w-dropdown-link">Deriv GO</a><a href="/trading-platforms/deriv-bot" class="footer_tabs-dropdown-link w-dropdown-link">Deriv Bot</a><a href="https://smarttrader.deriv.com/" target="_blank" class="footer_tabs-dropdown-link is-block w-inline-block"><div>SmartTrader</div><div class="icon-embed-auto w-embed"><svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_8673_4157)">
<path d="M10.5 7C10.8125 7.02083 10.9792 7.1875 11 7.5V14.5C10.9792 14.8125 10.8125 14.9792 10.5 15C10.1875 14.9792 10.0208 14.8125 10 14.5V8.71875L1.84375 16.8438C1.61458 17.0521 1.38542 17.0521 1.15625 16.8438C0.947917 16.6146 0.947917 16.3854 1.15625 16.1562L9.28125 8H3.5C3.1875 7.97917 3.02083 7.8125 3 7.5C3.02083 7.1875 3.1875 7.02083 3.5 7H10.5Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_8673_4157">
<rect width="12" height="24" fill="white"/>
</clipPath>
</defs>
</svg></div></a></nav></div><div data-delay="0" data-hover="false" class="footer_tabs-dropdown w-dropdown"><div class="footer_tabs-toggle w-dropdown-toggle"><div class="footer_tabs-icon w-icon-dropdown-toggle"></div><div>Support</div></div><nav class="footer_tabs-list w-dropdown-list"><a href="/help-centre" class="footer_tabs-dropdown-link w-dropdown-link">Help centre</a><a href="/academy" class="footer_tabs-dropdown-link w-dropdown-link">Deriv Academy</a><a href="/blog" class="footer_tabs-dropdown-link w-dropdown-link">Deriv Blog</a><a href="https://community.deriv.com" target="_blank" class="footer_tabs-dropdown-link is-block w-inline-block"><div>Community</div><div class="icon-embed-auto w-embed"><svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_8673_4157)">
<path d="M10.5 7C10.8125 7.02083 10.9792 7.1875 11 7.5V14.5C10.9792 14.8125 10.8125 14.9792 10.5 15C10.1875 14.9792 10.0208 14.8125 10 14.5V8.71875L1.84375 16.8438C1.61458 17.0521 1.38542 17.0521 1.15625 16.8438C0.947917 16.6146 0.947917 16.3854 1.15625 16.1562L9.28125 8H3.5C3.1875 7.97917 3.02083 7.8125 3 7.5C3.02083 7.1875 3.1875 7.02083 3.5 7H10.5Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_8673_4157">
<rect width="12" height="24" fill="white"/>
</clipPath>
</defs>
</svg></div></a><a href="https://deriv.statuspage.io/" target="_blank" class="footer_tabs-dropdown-link is-block w-inline-block"><div>Status page</div><div class="icon-embed-auto w-embed"><svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_8673_4157)">
<path d="M10.5 7C10.8125 7.02083 10.9792 7.1875 11 7.5V14.5C10.9792 14.8125 10.8125 14.9792 10.5 15C10.1875 14.9792 10.0208 14.8125 10 14.5V8.71875L1.84375 16.8438C1.61458 17.0521 1.38542 17.0521 1.15625 16.8438C0.947917 16.6146 0.947917 16.3854 1.15625 16.1562L9.28125 8H3.5C3.1875 7.97917 3.02083 7.8125 3 7.5C3.02083 7.1875 3.1875 7.02083 3.5 7H10.5Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_8673_4157">
<rect width="12" height="24" fill="white"/>
</clipPath>
</defs>
</svg></div></a></nav></div><div data-delay="0" data-hover="false" class="footer_tabs-dropdown w-dropdown"><div class="footer_tabs-toggle w-dropdown-toggle"><div class="footer_tabs-icon w-icon-dropdown-toggle"></div><div>Partners</div></div><nav class="footer_tabs-list w-dropdown-list"><a href="/partners" target="_blank" class="footer_tabs-dropdown-link is-block w-inline-block"><div>Partnership programmes</div><div class="icon-embed-auto w-embed"><svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_8673_4157)">
<path d="M10.5 7C10.8125 7.02083 10.9792 7.1875 11 7.5V14.5C10.9792 14.8125 10.8125 14.9792 10.5 15C10.1875 14.9792 10.0208 14.8125 10 14.5V8.71875L1.84375 16.8438C1.61458 17.0521 1.38542 17.0521 1.15625 16.8438C0.947917 16.6146 0.947917 16.3854 1.15625 16.1562L9.28125 8H3.5C3.1875 7.97917 3.02083 7.8125 3 7.5C3.02083 7.1875 3.1875 7.02083 3.5 7H10.5Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_8673_4157">
<rect width="12" height="24" fill="white"/>
</clipPath>
</defs>
</svg></div></a><a href="https://api.deriv.com/" target="_blank" class="footer_tabs-dropdown-link is-block w-inline-block"><div>Deriv API</div><div class="icon-embed-auto w-embed"><svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_8673_4157)">
<path d="M10.5 7C10.8125 7.02083 10.9792 7.1875 11 7.5V14.5C10.9792 14.8125 10.8125 14.9792 10.5 15C10.1875 14.9792 10.0208 14.8125 10 14.5V8.71875L1.84375 16.8438C1.61458 17.0521 1.38542 17.0521 1.15625 16.8438C0.947917 16.6146 0.947917 16.3854 1.15625 16.1562L9.28125 8H3.5C3.1875 7.97917 3.02083 7.8125 3 7.5C3.02083 7.1875 3.1875 7.02083 3.5 7H10.5Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_8673_4157">
<rect width="12" height="24" fill="white"/>
</clipPath>
</defs>
</svg></div></a></nav></div><div data-delay="0" data-hover="false" class="footer_tabs-dropdown w-dropdown"><div class="footer_tabs-toggle w-dropdown-toggle"><div class="footer_tabs-icon w-icon-dropdown-toggle"></div><div>Legal</div></div><nav class="footer_tabs-list w-dropdown-list"><a href="/regulatory" class="footer_tabs-dropdown-link w-dropdown-link">Regulatory information</a><a href="/terms-and-conditions" class="footer_tabs-dropdown-link w-dropdown-link">Terms &amp; conditions</a><a href="/responsible" class="footer_tabs-dropdown-link w-dropdown-link">Secure &amp; responsible trading</a><a href="/fraud-prevention" class="footer_tabs-dropdown-link w-dropdown-link">Fraud prevention</a></nav></div></div><div class="w-layout-grid footer_top-wrapper"><div class="footer_link-list gap-medium"><div class="footer_link-list"><div class="footer_title">About</div><a href="/who-we-are" aria-current="page" class="footer_link w--current">Who we are</a><a href="/why-choose-us" class="footer_link">Why choose us</a><a href="/our-principles" class="footer_link">Our principles</a><a href="/contact-us" class="footer_link">Contact us</a><a href="/careers" class="footer_link">Careers</a><a href="/derivtech" target="_blank" class="footer_link is-block w-inline-block"><div>Deriv Tech</div><div class="icon-embed-auto w-embed"><svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_8673_4157)">
<path d="M10.5 7C10.8125 7.02083 10.9792 7.1875 11 7.5V14.5C10.9792 14.8125 10.8125 14.9792 10.5 15C10.1875 14.9792 10.0208 14.8125 10 14.5V8.71875L1.84375 16.8438C1.61458 17.0521 1.38542 17.0521 1.15625 16.8438C0.947917 16.6146 0.947917 16.3854 1.15625 16.1562L9.28125 8H3.5C3.1875 7.97917 3.02083 7.8125 3 7.5C3.02083 7.1875 3.1875 7.02083 3.5 7H10.5Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_8673_4157">
<rect width="12" height="24" fill="white"/>
</clipPath>
</defs>
</svg></div></a><a href="/derivlife" target="_blank" class="footer_link is-block w-inline-block"><div>Deriv Life</div><div class="icon-embed-auto w-embed"><svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_8673_4157)">
<path d="M10.5 7C10.8125 7.02083 10.9792 7.1875 11 7.5V14.5C10.9792 14.8125 10.8125 14.9792 10.5 15C10.1875 14.9792 10.0208 14.8125 10 14.5V8.71875L1.84375 16.8438C1.61458 17.0521 1.38542 17.0521 1.15625 16.8438C0.947917 16.6146 0.947917 16.3854 1.15625 16.1562L9.28125 8H3.5C3.1875 7.97917 3.02083 7.8125 3 7.5C3.02083 7.1875 3.1875 7.02083 3.5 7H10.5Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_8673_4157">
<rect width="12" height="24" fill="white"/>
</clipPath>
</defs>
</svg></div></a></div><a href="/blog/posts/deriv-achieves-prestigious-platinum-accreditation-by-investors-in-people" class="investor_people w-inline-block"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/66585fe0e1dc7e70cc75d482_invest%20in%20people%20-%20platinum%202.svg" loading="lazy" alt="" class="footer_badge"/></a></div><div class="footer_link-list gap-medium"><div class="footer_link-list"><div class="footer_title">Trade</div><a href="/trade/cfds" class="footer_link">CFDs</a><a href="/trade/options" class="footer_link">Options</a></div><div class="footer_link-list"><div class="footer_title">Support</div><a href="/help-centre" class="footer_link">Help centre</a><a href="/academy" class="footer_link">Deriv Academy</a><a href="/blog" class="footer_link">Deriv Blog</a><a href="https://community.deriv.com/" target="_blank" class="footer_link is-block w-inline-block"><div>Community</div><div class="icon-embed-auto w-embed"><svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_8673_4157)">
<path d="M10.5 7C10.8125 7.02083 10.9792 7.1875 11 7.5V14.5C10.9792 14.8125 10.8125 14.9792 10.5 15C10.1875 14.9792 10.0208 14.8125 10 14.5V8.71875L1.84375 16.8438C1.61458 17.0521 1.38542 17.0521 1.15625 16.8438C0.947917 16.6146 0.947917 16.3854 1.15625 16.1562L9.28125 8H3.5C3.1875 7.97917 3.02083 7.8125 3 7.5C3.02083 7.1875 3.1875 7.02083 3.5 7H10.5Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_8673_4157">
<rect width="12" height="24" fill="white"/>
</clipPath>
</defs>
</svg></div></a><a href="https://deriv.statuspage.io/" target="_blank" class="footer_link is-block w-inline-block"><div>Status page</div><div class="icon-embed-auto w-embed"><svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_8673_4157)">
<path d="M10.5 7C10.8125 7.02083 10.9792 7.1875 11 7.5V14.5C10.9792 14.8125 10.8125 14.9792 10.5 15C10.1875 14.9792 10.0208 14.8125 10 14.5V8.71875L1.84375 16.8438C1.61458 17.0521 1.38542 17.0521 1.15625 16.8438C0.947917 16.6146 0.947917 16.3854 1.15625 16.1562L9.28125 8H3.5C3.1875 7.97917 3.02083 7.8125 3 7.5C3.02083 7.1875 3.1875 7.02083 3.5 7H10.5Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_8673_4157">
<rect width="12" height="24" fill="white"/>
</clipPath>
</defs>
</svg></div></a></div></div><div class="footer_link-list"><div class="footer_link-list"><div class="footer_title">Markets</div><a href="/markets/forex" class="footer_link">Forex</a><a href="/markets/derived-indices/synthetic-indices" class="footer_link">Derived Indices</a><a href="/markets/stocks" class="footer_link">Stocks</a><a href="/markets/stock-indices" class="footer_link">Stock Indices</a><a href="/markets/commodities" class="footer_link">Commodities</a><a href="/markets/cryptocurrencies" class="footer_link">Cryptocurrencies</a><a href="/markets/etfs" class="footer_link">ETFs</a><a href="/markets/tactical-indices" class="footer_link">Tactical Indices</a></div></div><div class="footer_link-list"><div class="footer_title">Platforms</div><a href="/trading-platforms/deriv-mt5" class="footer_link">Deriv MT5</a><a href="/trading-platforms/deriv-ctrader" class="footer_link">Deriv cTrader</a><a href="/trading-platforms/deriv-x" class="footer_link">Deriv X</a><a href="/trading-platforms/deriv-trader" class="footer_link">Deriv Trader</a><a href="/trading-platforms/deriv-go" class="footer_link">Deriv GO</a><a href="/trading-platforms/deriv-bot" class="footer_link">Deriv Bot</a><a href="https://smarttrader.deriv.com/" target="_blank" class="footer_link is-block w-inline-block"><div>SmartTrader</div><div class="icon-embed-auto w-embed"><svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_8673_4157)">
<path d="M10.5 7C10.8125 7.02083 10.9792 7.1875 11 7.5V14.5C10.9792 14.8125 10.8125 14.9792 10.5 15C10.1875 14.9792 10.0208 14.8125 10 14.5V8.71875L1.84375 16.8438C1.61458 17.0521 1.38542 17.0521 1.15625 16.8438C0.947917 16.6146 0.947917 16.3854 1.15625 16.1562L9.28125 8H3.5C3.1875 7.97917 3.02083 7.8125 3 7.5C3.02083 7.1875 3.1875 7.02083 3.5 7H10.5Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_8673_4157">
<rect width="12" height="24" fill="white"/>
</clipPath>
</defs>
</svg></div></a></div><div class="footer_link-list gap-medium"><div class="footer_link-list"><div class="footer_title">Legal</div><a href="/regulatory" class="footer_link">Regulatory information</a><a href="/terms-and-conditions" class="footer_link">Terms &amp; conditions</a><a href="/responsible" class="footer_link">Secure &amp; responsible trading</a><a href="/fraud-prevention" class="footer_link">Fraud prevention</a></div><div class="footer_link-list"><div class="footer_title">Partners</div><a href="/partners" target="_blank" class="footer_link is-block w-inline-block"><div>Partnership programmes</div><div class="icon-embed-auto w-embed"><svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_8673_4157)">
<path d="M10.5 7C10.8125 7.02083 10.9792 7.1875 11 7.5V14.5C10.9792 14.8125 10.8125 14.9792 10.5 15C10.1875 14.9792 10.0208 14.8125 10 14.5V8.71875L1.84375 16.8438C1.61458 17.0521 1.38542 17.0521 1.15625 16.8438C0.947917 16.6146 0.947917 16.3854 1.15625 16.1562L9.28125 8H3.5C3.1875 7.97917 3.02083 7.8125 3 7.5C3.02083 7.1875 3.1875 7.02083 3.5 7H10.5Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_8673_4157">
<rect width="12" height="24" fill="white"/>
</clipPath>
</defs>
</svg></div></a><a href="https://api.deriv.com/" target="_blank" class="footer_link is-block w-inline-block"><div>Deriv API</div><div class="icon-embed-auto w-embed"><svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_8673_4157)">
<path d="M10.5 7C10.8125 7.02083 10.9792 7.1875 11 7.5V14.5C10.9792 14.8125 10.8125 14.9792 10.5 15C10.1875 14.9792 10.0208 14.8125 10 14.5V8.71875L1.84375 16.8438C1.61458 17.0521 1.38542 17.0521 1.15625 16.8438C0.947917 16.6146 0.947917 16.3854 1.15625 16.1562L9.28125 8H3.5C3.1875 7.97917 3.02083 7.8125 3 7.5C3.02083 7.1875 3.1875 7.02083 3.5 7H10.5Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_8673_4157">
<rect width="12" height="24" fill="white"/>
</clipPath>
</defs>
</svg></div></a></div></div><div id="w-node-_35887656-04df-8825-ab69-5dddf690dd1f-f690dc6d" class="footer_banner"><div class="footer_banner-content"><div class="footer_banner-logo-wrapper"><img loading="lazy" src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/66585fe0e1dc7e70cc75d47a_deriv%20product-deriv%20go.svg" alt="" class="footer_banner-logo-image"/><div class="footer_banner-logo-title">Deriv GO</div></div><div>Trade Multipliers and Accumulator Options on our mobile app.</div><div class="footer_banner-badge qr-code"><img loading="lazy" src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/66585fe0e1dc7e70cc75d4d7_deriv.link_derivgo%20(4)%201.svg" alt="" class="footer_banner-qrcode"/><div>Scan to download</div></div></div><div class="footer_banner-content"><a href="https://play.google.com/store/apps/details?id=com.deriv.app" target="_blank" class="footer_banner-badge google w-inline-block"><div class="footer_banner-store-icon-wrapper"><img loading="lazy" src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/66585fe0e1dc7e70cc75d4dc_icon.svg" alt="" class="footer_banner-store-icon"/></div><img loading="lazy" src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/66585fe0e1dc7e70cc75d4dd_text.svg" alt="" class="footer_banner-store-text"/></a><a href="https://apps.apple.com/my/app/deriv-go-online-trading-app/id1550561298" target="_blank" class="footer_banner-badge store w-inline-block"><div class="footer_banner-store-icon-wrapper"><img loading="lazy" src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/66585fe0e1dc7e70cc75d4ff_icon.svg" alt="" class="footer_banner-store-icon"/></div><img loading="lazy" src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/66585fe0e1dc7e70cc75d4fc_text.svg" alt="" class="footer_banner-store-text"/></a><a href="https://appgallery.huawei.com/app/C103801913" target="_blank" class="footer_banner-badge gallery w-inline-block"><div class="footer_banner-store-icon-wrapper"><img loading="lazy" src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/66585fe0e1dc7e70cc75d4db_icon.svg" alt="" class="footer_banner-store-icon"/></div><img loading="lazy" src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/66585fe0e1dc7e70cc75d47d_text.svg" alt="" class="footer_banner-store-text"/></a></div><p>*The availability of Deriv GO depends on your country of residence.</p></div></div></div><div class="footer_bottom-wrapper"><div class="footer_legal-list"><div class="footer_texts"><div id="footer_text_row" class="footer_text w-richtext"><p>Deriv Investments (Europe) Limited is licensed and regulated by the Malta Financial Services Authority under the Investment Services Act.<br/>Deriv (FX) Ltd is licensed by the Labuan Financial Services Authority. <br/>Deriv (BVI) Ltd is licensed by the British Virgin Islands Financial Services Commission. <br/>Deriv (V) Ltd is licensed and regulated by the Vanuatu Financial Services Commission.<br/>Deriv (Mauritius) Ltd is licensed by the Financial Services Commission, Mauritius.<br/>Deriv (SVG) LLC has a registered office at First Floor, SVG Teachers Credit Union Uptown Building, Corner of James and Middle Street, Kingstown P.O., St Vincent and the Grenadines. <br/>Deriv.com Limited, a company registered in Guernsey, is the holding company for these entities.<br/><br/>Make sure to read our <a href="/terms-and-conditions"><strong>Terms and Conditions</strong></a>, <a href="https://docs.deriv.com/tnc/risk-disclosure.pdf" target="_blank"><strong>Risk Disclosure</strong></a>, and <a href="/responsible"><strong>Secure and Responsible Trading</strong></a> to fully understand the risks involved before using our services. Please also note that the information on this website does not constitute investment advice.</p></div><div id="footer_text_diel" class="footer_text w-richtext"><p>Deriv Investments (Europe) Limited is licensed and regulated by the Malta Financial Services Authority under the Investment Services Act.<br/>Deriv (FX) Ltd is licensed by the Labuan Financial Services Authority. <br/>Deriv (BVI) Ltd is licensed by the British Virgin Islands Financial Services Commission. <br/>Deriv (V) Ltd is licensed and regulated by the Vanuatu Financial Services Commission.<br/>Deriv (Mauritius) Ltd is licensed by the Financial Services Commission, Mauritius.<br/>Deriv (SVG) LLC has a registered office at First Floor, SVG Teachers Credit Union Uptown Building, Corner of James and Middle Street, Kingstown P.O., St Vincent and the Grenadines.<br/>Deriv.com Limited, a company registered in Guernsey, is the holding company for these entities.<br/><br/>Make sure to read our <a href="/terms-and-conditions"><strong>Terms and Conditions</strong></a>, <a href="https://docs.deriv.com/tnc/risk-disclosure.pdf" target="_blank"><strong>Risk Disclosure</strong></a>, and <a href="/responsible"><strong>Secure and Responsible Trading</strong></a> to fully understand the risks involved before using our services. Please also note that the information on this website does not constitute investment advice.</p></div></div><div class="footer_risk-warning w-richtext"><p>The products offered on our website are complex derivative products that carry a significant risk of potential loss. CFDs are complex instruments with a high risk of losing money rapidly due to leverage. You should consider whether you understand how these products work and whether you can afford to take the high risk of losing your money.</p></div></div></div><div class="show-tablet"><div class="footer_badge-wrapper"><a href="/blog/posts/deriv-achieves-prestigious-platinum-accreditation-by-investors-in-people" target="_blank" class="investor_people w-inline-block"><img src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/66585fe0e1dc7e70cc75d482_invest%20in%20people%20-%20platinum%202.svg" loading="lazy" alt="" class="footer_badge"/></a></div></div></div></div></div></div></div></div></footer></div></div><script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=66585fe0e1dc7e70cc75d440" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script><script src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/js/deriv-staged-2dfc316890fbbd8e3ed6d351bd.2c5556a28b5837285a5af936f33d0149.js" type="text/javascript"></script><!-- deriv js custom code script-->
<script
  type="module"
  src="https://unpkg.com/@deriv-com/custom-scripts@1.24.2/dist/js/footer_scripts.min.js"
></script>
<!-- deriv js custom code script end-->

<script>
  var Webflow = Webflow || [];
  Webflow.push(function () {
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
  });
</script>
<!-- Datadog Integration -->
<script defer>
  (function () {
    var script = document.createElement("script");
    script.src =
      "https://www.datadoghq-browser-agent.com/us1/v5/datadog-rum.js";
    script.type = "text/javascript";
    script.onload = function () {
      if (window.DD_RUM) {
        window.DD_RUM.init({
          clientToken: "pub08554ab30284600af157441bfb0fa923",
          applicationId: "5c8975a3-ec86-4a64-8a3a-e6888fdde082",
          site: "datadoghq.com",
          service: "deriv.com-v2",
          env:
            window.location.hostname === "deriv.com" ? "production" : "staging",
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
  })();
</script>
<!-- End Datadog Integration -->
<script>
  window.parseCookies = function (cookieString, value) {
    const cookies = {};
    cookieString.split(";").forEach((cookie) => {
      const [key, val] = cookie.split("=").map((c) => c.trim());
      cookies[key] = decodeURIComponent(val);
    });
    return cookies[value];
  };
  // Listen for DOMContentLoaded event
</script>

<!-- Live Chat - start of code -->
<script>
  const licenceKey = "12049137";
  const loadLiveChatScript = () => {
    window.__lc = window.__lc || {};
    window.__lc.license = licenceKey;
    window.LC_API = window.LC_API || { loaded: false };
    if (!window.LC_API.loaded) {
      const lcScript = document.createElement("script");
      lcScript.async = true;
      lcScript.src = "https://cdn.livechatinc.com/tracking.js";
      lcScript.onload = () => {
        window.LC_API.loaded = true; // Mark as loaded
        window.LC_API.on_after_load = function () {
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
      const { utm_source, utm_medium, utm_campaign } = utm_data;

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
  });
</script>
<!-- Live Chat - end of code -->
<script>
  window.__lc = window.__lc || {};
  window.__lc.license = 12049137;
  window.__lc.integration_name = "manual_onboarding";
  (function (n, t, c) {
    function i(n) {
      return e._h ? e._h.apply(null, n) : e._q.push(n);
    }
    var e = {
      _q: [],
      _h: null,
      _v: "2.0",
      on: function () {
        i(["on", c.call(arguments)]);
      },
      once: function () {
        i(["once", c.call(arguments)]);
      },
      off: function () {
        i(["off", c.call(arguments)]);
      },
      get: function () {
        if (!e._h)
          throw new Error(
            "[LiveChatWidget] You can't use getters before load."
          );
        return i(["get", c.call(arguments)]);
      },
      call: function () {
        i(["call", c.call(arguments)]);
      },
      init: function () {
        var n = t.createElement("script");
        (n.async = !0),
          (n.type = "text/javascript"),
          (n.src = "https://cdn.livechatinc.com/tracking.js"),
          t.head.appendChild(n);
      },
    };
    !n.__lc.asyncInit && e.init(), (n.LiveChatWidget = n.LiveChatWidget || e);
  })(window, document, [].slice);
</script>
<noscript
  ><a href="https://www.livechat.com/chat-with/12049137/" rel="nofollow"
    >Chat with us</a
  >, powered by
  <a
    href="https://www.livechat.com/?welcome"
    rel="noopener nofollow"
    target="_blank"
    >LiveChat</a
  >
</noscript>
<!-- End of LiveChat code -->

<!-- Trackjs - start of code -->
<script defer>
  (function () {
    var script = document.createElement("script");
    script.src = "https://cdn.trackjs.com/agent/v3/latest/t.js";
    script.onload = function () {
      // Install TrackJS after the script loads
      TrackJS.install({
        token: "346262e7ffef497d85874322fff3bbf8",
        application: "derivcom-v2",
        dedupe: true,
      });
    };
    document.body.appendChild(script);
  })();
</script>
<!-- Trackjs - end of code -->

<script>
  document.addEventListener("DOMContentLoaded", function () {
    const client_country = window?.getClientCountry?.();

    const allowedCountries = "gh";
    const allowedCountriesEU = "cy";

    if (
      allowedCountries.includes(client_country) ||
      allowedCountriesEU.includes(client_country)
    ) {
      const signupBtn = Array.from(document.querySelectorAll("a")).filter(
        (link) => link.href.includes("https://login.deriv.com/signup.php")
      );

      signupBtn.forEach((link) => {
        link.href = "https://partners.deriv.com/live_signup?brd=1";
      });

      const loginBtn = Array.from(document.querySelectorAll("a")).filter(
        (link) => link.href.includes("https://login.deriv.com/signin.php")
      );

      loginBtn.forEach((link) => {
        link.href = "https://hub.deriv.com/partnershub/";
      });
    }
  });
</script>

<!--Intercom start-->
<script>
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
  });
</script>
<!--Intercom end-->
<script>
document.addEventListener('DOMContentLoaded', function() {
    var scrollContainer = document.querySelector('.scroll-content');
    var isDragging = false;
    var startPosition = 0;
    var scrollLeft = 0;

    scrollContainer.addEventListener('mousedown', function(e) {
        isDragging = true;
        startPosition = e.clientX;
        scrollLeft = scrollContainer.scrollLeft;
    });

    scrollContainer.addEventListener('mouseup', function() {
        isDragging = false;
    });

    scrollContainer.addEventListener('mouseleave', function() {
        isDragging = false;
    });

    scrollContainer.addEventListener('mousemove', function(e) {
        if (!isDragging) return;
        var delta = e.clientX - startPosition;
        scrollContainer.scrollLeft = scrollLeft - delta;
    });
});
</script>

<script>
var Webflow = Webflow || []; 
Webflow.push(function() { 
	// get all the necessary elements
  let leaders = document.querySelectorAll('.leaders_item');
  let showMoreBtn = document.querySelector('#view-more-btn');
  let showLessBtn = document.querySelector('#view-less-btn');
  let leadersSection = document.querySelector('.section_leaders');
	
  // hide leaders
  toggleLeadersDisplay('none', false);
  
  showMoreBtn.addEventListener('click', () => toggleLeadersDisplay('block', false));
  showLessBtn.addEventListener('click', () => toggleLeadersDisplay('none', true));
  
  // function for show and hide leaders
  function toggleLeadersDisplay(displayState, scroll) {
    for (let i = 4; i < leaders.length; i++) {
      leaders[i].style.display = displayState;
    }
    if (displayState === 'none') {
    	showMoreBtn.style.display = 'flex';
      showLessBtn.style.display = 'none';
    } else {
      showMoreBtn.style.display = 'none';
      showLessBtn.style.display = 'flex';
    }
    if (scroll) leadersSection.scrollIntoView({ behavior: "smooth" });
  }
  
}); 
</script>


</body></html>