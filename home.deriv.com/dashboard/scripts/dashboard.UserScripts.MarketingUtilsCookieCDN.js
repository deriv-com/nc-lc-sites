window.marketingTrackingSent = !1;
var J = (o, i) => {
        if (i == null) return "";
        let r = typeof i == "string" ? i : String(i);
        if (r.startsWith("{") || r.startsWith("[")) try {
            return JSON.parse(r), r
        } catch (n) {
            console.error(`Invalid JSON in cookie ${o}:`, n)
        }
        return r.replace(/[<>'"]/g, "")
    },
    T = () => {
        let o = location.hostname;
        return ["deriv.com", "deriv.ae", "binary.sx"].find(d => o.includes(d)) ?? o
    },
    c = o => {
        if (!o) return null;
        try {
            let i = encodeURIComponent(o),
                r = document.cookie.split(";");
            for (let d of r) {
                if (d = d.trim(), d.startsWith(i + "=")) {
                    let n = d.substring(i.length + 1);
                    return decodeURIComponent(n)
                }
                if (d.startsWith(o + "=")) {
                    let n = d.substring(o.length + 1),
                        _;
                    try {
                        _ = decodeURIComponent(n)
                    } catch {
                        _ = n
                    }
                    return _
                }
            }
            return null
        } catch (i) {
            return console.error("Failed to get cookie:", i), null
        }
    };

function W() {
    let o = {
        original: {},
        sanitized: {}
    };
    window.marketingCookieLogs = [], window.marketingCookies = {};
    let i = new URLSearchParams(window.location.search),
        r = {},
        d = null,
        n = !0,
        _ = !1,
        f = i.has("t") || i.has("affiliate_token") || i.has("sidc"),
        u = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "utm_ad_id", "utm_click_id", "utm_adgroup_id", "utm_campaign_id", "utm_msclk_id", "utm_fbcl_id", "utm_ttclid", "utm_sccid", ["msclkid", "utm_msclk_id"],
            ["fbclid", "utm_fbcl_id"],
            ["ttclid", "utm_ttclid"],
            ["ScCid", "utm_sccid"]
        ],
        l = (e, t) => {
            let a;
            try {
                a = new Date().toISOString()
            } catch {
                a = new Date(Date.now()).toISOString()
            }
            window.marketingCookieLogs.push({
                timestamp: a,
                action: e,
                details: t
            })
        },
        k = (e, t, a = {}) => {
            let s = J(e, t),
                m = {
                    ...{
                        expires: 365,
                        domain: T(),
                        path: "/",
                        sameSite: "None",
                        secure: !0
                    },
                    ...a
                },
                L = "";
            if (m.expires) {
                let y = new Date;
                typeof m.expires == "number" ? y.setTime(y.getTime() + m.expires * 24 * 60 * 60 * 1e3) : m.expires instanceof Date && y.setTime(m.expires.getTime()), L = `; expires=${y.toUTCString()}`
            }
            let $ = `${encodeURIComponent(e)}=${encodeURIComponent(s)}${L}`;
            m.domain && ($ += `; domain=${m.domain}`), m.path && ($ += `; path=${m.path}`), m.sameSite && ($ += `; SameSite=${m.sameSite}`), m.secure && ($ += "; Secure");
            let R = !1;
            try {
                document.cookie = $;
                let y = c(e);
                R = y === s, R || console.warn(`Cookie verification failed for ${e}. Expected: ${s}, Got: ${y}`)
            } catch (y) {
                console.error("Failed to set cookie:", y)
            }
            return window.marketingCookies[e] = t, o.original[e] = t, o.sanitized[e] = s, R
        },
        p = e => {
            let t = c(e),
                a = new Date(0).toUTCString(),
                s = T();
            try {
                document.cookie = `${encodeURIComponent(e)}=; expires=${a}; domain=${s}; path=/; SameSite=None; Secure`, document.cookie = `${encodeURIComponent(e)}=; expires=${a}; path=/; SameSite=None; Secure`, document.cookie = `${encodeURIComponent(e)}=; expires=${a}; domain=${s}; path=/`, document.cookie = `${encodeURIComponent(e)}=; expires=${a}; path=/`
            } catch (E) {
                console.error("Failed to erase cookie:", E)
            }
            delete window.marketingCookies[e], delete o.original[e], delete o.sanitized[e]
        },
        I = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
        F = e => {
            if (e instanceof Date && !isNaN(e.getTime())) {
                let t = e.getUTCFullYear(),
                    a = String(e.getUTCMonth() + 1).padStart(2, "0"),
                    s = String(e.getUTCDate()).padStart(2, "0");
                return `${t}-${a}-${s}`
            }
            return ""
        },
        g = (e, t) => {
            let a = e.utm_source && e.utm_source !== "null";
            return !!(!t && a || ["utm_source", "utm_medium", "utm_campaign"].every(m => e[m]))
        },
        x = e => {
            if (e == null) return "";
            if (typeof e == "string") return e;
            try {
                return JSON.stringify(e)
            } catch (t) {
                return console.warn("Failed to stringify cookie value:", t), String(e)
            }
        },
        w = () => {
            let e = {};
            return Object.entries(window.marketingCookies).forEach(([t, a]) => {
                e[t] = x(a)
            }), e
        },
        v = () => {
            try {
                document.cookie = "deriv_test_cookie=1; SameSite=None; Secure";
                let e = document.cookie.includes("deriv_test_cookie="),
                    t = {
                        status: e ? "enabled" : "disabled",
                        browser: {
                            userAgent: navigator.userAgent,
                            platform: navigator.platform,
                            vendor: navigator.vendor
                        },
                        cookieConfig: {
                            sameSite: "None",
                            secure: !0,
                            domain: T()
                        },
                        cookieSettings: {
                            thirdPartyCookies: e ? "supported" : "blocked",
                            cookieEnabled: navigator.cookieEnabled,
                            doNotTrack: navigator.doNotTrack || window.doNotTrack
                        },
                        storage: {
                            localStorage: (() => {
                                try {
                                    return localStorage.setItem("test", "test"), localStorage.removeItem("test"), "supported"
                                } catch {
                                    return "blocked"
                                }
                            })(),
                            sessionStorage: (() => {
                                try {
                                    return sessionStorage.setItem("test", "test"), sessionStorage.removeItem("test"), "supported"
                                } catch {
                                    return "blocked"
                                }
                            })()
                        }
                    };
                return e || console.warn("\u26A0\uFE0F Cookies not stored - possibly ITP or blocked."), JSON.stringify(t)
            } catch (e) {
                return console.warn("\u274C Cookie setting failed:", e), `error: ${e.message||e.toString()}`
            }
        },
        V = (e = 150, t = 1e3) => {
            let s = window.Analytics?.trackEvent instanceof Function ? window.Analytics.trackEvent : window.Analytics?.Analytics?.trackEvent instanceof Function ? window.Analytics.Analytics.trackEvent : null;
            s ? setTimeout(() => {
                console.warn("Marketing cookies has been handled"), s("debug_marketing_cookies", {
                    marketing_cookies: w(),
                    cookie_status: v()
                })
            }, 1e3) : e > 0 ? setTimeout(() => V(e - 1, t), t) : console.warn("trackEvent not available after waiting.")
        },
        A = e => {
            ["utm_data", "affiliate_tracking", "affiliate_data", "signup_device", "date_first_contact", "gclid", "campaign_channel"].forEach(a => p(a)), window.marketingCookies = {}, o.original = {}, o.sanitized = {}, console.error("\u{1F6A8} AFFILIATE LINK ERROR:", e), l("affiliate_validation", {
                error: e,
                action: "cookies_cleaned"
            })
        },
        D = c("utm_data"),
        h = {};
    if (D) try {
        h = JSON.parse(D)
    } catch {
        try {
            h = JSON.parse(decodeURIComponent(D))
        } catch (t) {
            console.error("Failed to parse utm_data cookie:", t), h = {}
        }
    }
    if (h?.utm_medium === "affiliate" && !f) {
        let e = c("affiliate_data"),
            t = c("affiliate_tracking"),
            a = !1;
        if (t && (a = !0), !a && e) try {
            let s = JSON.parse(e);
            a = !!(s.affiliate_token || s.affiliate_tracking)
        } catch {
            a = !1
        }
        if (!a) return A("Existing utm_medium=affiliate but missing affiliate parameters and no valid affiliate cookies"), o
    }
    let S = {};
    !h?.utm_source && !i.toString() && (S = {
        utm_source: document.referrer || "null"
    }), u.forEach(e => {
        if (Array.isArray(e)) {
            let [t, a] = e;
            if (i.has(t)) {
                let s = i.get(t).substring(0, 200);
                S[a] = s
            }
        } else if (i.has(e)) {
            let t = i.get(e).substring(0, 100);
            S[e] = t
        }
    });
    let O = {};
    if (["gclid", "wbraid", "gbraid", "ttclid", "msclkid", ["ScCid", "scclid"]].forEach(e => {
            if (Array.isArray(e)) {
                let [t, a] = e;
                if (i.has(t)) {
                    let s = i.get(t).substring(0, 200);
                    O[a] = s
                }
            } else if (i.has(e)) {
                let t = i.get(e).substring(0, 100);
                O[e] = t
            }
        }), Object.keys(O).length > 0 && (c("stp_data") && p("stp_data"), k("stp_data", JSON.stringify(O))), S.utm_medium === "affiliate" && !f) return A("New utm_medium=affiliate but missing affiliate parameters (t, affiliate_token, or sidc)"), o;
    let q = g(S, h),
        M = location.origin + location.pathname;
    if (q ? (p("affiliate_tracking"), p("affiliate_data"), p("utm_data"), k("utm_data", JSON.stringify(S)), k("landing_page_url", M), _ = !0, r = S) : (n = !1, r = {
            ...h,
            ...S
        }, Object.keys(S).length > 0 && (k("utm_data", JSON.stringify(r)), k("landing_page_url", M))), l("affiliate_tracking", {
            action: "started",
            hasAffiliateParams: f,
            searchParams: {
                t: i.get("t"),
                affiliate_token: i.get("affiliate_token"),
                sidc: i.get("sidc")
            },
            overwrite_happened: _
        }), f) {
        let e = i.get("t") || i.get("affiliate_token") || i.get("sidc");
        l("affiliate_tracking", {
            action: "affiliate_params_found",
            affiliateValue: e,
            source: i.has("t") ? "t" : i.has("affiliate_token") ? "affiliate_token" : "sidc"
        }), p("affiliate_tracking"), k("affiliate_tracking", e), d = e, l("affiliate_tracking", {
            action: "affiliate_set",
            affiliateValue: e,
            cookie_verification: c("affiliate_tracking")
        })
    } else l("affiliate_tracking", {
        action: "no_affiliate_params",
        existing_affiliate_cookie: c("affiliate_tracking")
    });
    l("affiliate_tracking", {
        action: "completed",
        final_affiliate_tracking: d,
        final_cookie_value: c("affiliate_tracking")
    });
    let z = c("signup_device") || "{}",
        C = {};
    try {
        C = JSON.parse(z)
    } catch {
        try {
            C = JSON.parse(decodeURI(z).replaceAll("%2C", ",").replaceAll("%3A", ":"))
        } catch (t) {
            console.error("Failed to parse signup_device cookie:", t), C = {}
        }
    }
    if (C.signup_device) o.original.signup_device = C.signup_device, o.sanitized.signup_device = C.signup_device;
    else {
        let t = {
            signup_device: I() ? "mobile" : "desktop"
        };
        k("signup_device", JSON.stringify(t))
    }
    let P = c("date_first_contact") || "{}",
        b = {};
    try {
        b = JSON.parse(P)
    } catch {
        try {
            b = JSON.parse(decodeURI(P).replaceAll("%2C", ",").replaceAll("%3A", ":"))
        } catch (t) {
            console.error("Failed to parse date_first_contact cookie:", t), b = {}
        }
    }
    if (b.date_first_contact) o.original.date_first_contact = b.date_first_contact, o.sanitized.date_first_contact = b.date_first_contact;
    else {
        let e = Math.floor(Date.now() / 1e3),
            t = {
                date_first_contact: F(new Date(e * 1e3))
            };
        k("date_first_contact", JSON.stringify(t))
    }
    let B = i.get("gclid"),
        G = i.get("gclid_url"),
        K = B || G || "";
    K && (p("gclid"), k("gclid", K));
    let j = i.get("ca");
    if (j && (p("campaign_channel"), k("campaign_channel", j)), l("affiliate_data", {
            action: "started",
            hasAffiliateParams: f,
            affiliate_tracking: d,
            utm_data_cookie: c("utm_data")
        }), f) {
        let e = {
            affiliate_token: d,
            ...r
        };
        l("affiliate_data", {
            action: "creating_combined_data",
            combined_affiliate_data: e,
            utm_data: r,
            affiliate_tracking: d
        }), p("affiliate_data"), k("affiliate_data", JSON.stringify(e)), l("affiliate_data", {
            action: "affiliate_data_set",
            cookie_verification: c("affiliate_data")
        })
    } else l("affiliate_data", {
        action: "no_affiliate_params_skipping_affiliate_data"
    });
    let N = r.utm_medium || h?.utm_medium;
    if (l("affiliate_validation", {
            action: "final_validation_check",
            current_utm_medium: N,
            hasAffiliateParams: f,
            utm_data: r,
            current_utm_data: h,
            affiliate_tracking_cookie: c("affiliate_tracking"),
            utm_data_cookie: c("utm_data"),
            affiliate_data_cookie: c("affiliate_data")
        }), N === "affiliate" && !f) {
        let e = c("affiliate_data"),
            t = c("affiliate_tracking"),
            a = !1;
        if (t && (a = !0), !a && e) try {
            let s = JSON.parse(e);
            a = !!(s.affiliate_token || s.affiliate_tracking)
        } catch {
            a = !1
        }
        a ? l("affiliate_validation", {
            action: "validation_passed_with_existing_token",
            current_utm_medium: N,
            hasAffiliateParams: f,
            has_valid_affiliate_token: a,
            existing_affiliate_tracking: t,
            existing_affiliate_data: e
        }) : (l("affiliate_validation", {
            action: "validation_failed_cleaning_cookies",
            reason: "utm_medium=affiliate but missing affiliate parameters and no valid affiliate cookies",
            current_utm_medium: N,
            hasAffiliateParams: f,
            has_valid_affiliate_token: a,
            existing_affiliate_tracking: t,
            existing_affiliate_data: e
        }), A("utm_medium=affiliate but missing affiliate parameters and no valid affiliate cookies"))
    } else l("affiliate_validation", {
        action: "validation_passed",
        current_utm_medium: N,
        hasAffiliateParams: f
    });
    return ["utm_data", "affiliate_tracking", "affiliate_data", "signup_device", "date_first_contact", "gclid", "campaign_channel"].forEach(e => {
        let t = c(e);
        t !== null && !o.original[e] && (o.original[e] = t, o.sanitized[e] = J(e, t), window.marketingCookies[e] = t)
    }), window.marketingTrackingSent || (V(), window.marketingTrackingSent = !0), o
}
W();
U();
window.getMarketingCookies = () => W();

function U() {
    let o = (l, k, p = {}) => {
            let I = J(l, k),
                g = {
                    ...{
                        expires: 365,
                        domain: T(),
                        path: "/",
                        sameSite: "None",
                        secure: !0
                    },
                    ...p
                },
                x = "";
            if (g.expires) {
                let v = new Date;
                typeof g.expires == "number" ? v.setTime(v.getTime() + g.expires * 24 * 60 * 60 * 1e3) : g.expires instanceof Date && v.setTime(g.expires.getTime()), x = `; expires=${v.toUTCString()}`
            }
            let w = `${encodeURIComponent(l)}=${encodeURIComponent(I)}${x}`;
            g.domain && (w += `; domain=${g.domain}`), g.path && (w += `; path=${g.path}`), g.sameSite && (w += `; SameSite=${g.sameSite}`), g.secure && (w += "; Secure");
            try {
                return document.cookie = w, !0
            } catch {
                return !1
            }
        },
        i = c("stp_data"),
        r = {};
    if (i) try {
        r = JSON.parse(i)
    } catch (l) {
        console.warn("Failed to parse existing stp_data cookie, starting fresh:", l), r = {}
    }
    let d = c("_fbc"),
        n = c("_fbp"),
        _ = c("_ga");
    d && (r.fbc = d), n && (r.fbp = n), _ && (r._ga = _);
    let f = location.hostname.includes("deriv.ae") ? "_ga_F3QTR4CDHR" : "_ga_R0D2Z1965W",
        u = c(f);
    u && (r._ga_measurement_id = f, r._ga_measurement_value = u), o("stp_data", JSON.stringify(r))
}
window.addStpCookieData = U;
var H = () => {
    let o = {},
        i = (n, _ = null) => {
            let f = c(n);
            if (!f) return null;
            try {
                let u = JSON.parse(f);
                return !u || typeof u == "object" && Object.keys(u).length === 0 ? null : _ ? u[_] || null : u
            } catch (u) {
                return console.error(`Failed to parse ${n} cookie:`, u), null
            }
        },
        r = n => c(n) || null,
        d = [{
            cookieName: "utm_data",
            resultKey: "utm_data",
            parser: i
        }, {
            cookieName: "date_first_contact",
            resultKey: "date_first_contact",
            parser: i,
            property: "date_first_contact"
        }, {
            cookieName: "signup_device",
            resultKey: "signup_device",
            parser: i,
            property: "signup_device"
        }, {
            cookieName: "landing_page_url",
            resultKey: "landing_page_url",
            parser: r
        }, {
            cookieName: "campaign_channel",
            resultKey: "campaign_channel",
            parser: r
        }];
    d && Array.isArray(d) && d.forEach(({
        cookieName: n,
        resultKey: _,
        parser: f,
        property: u
    }) => {
        try {
            let l = u ? f(n, u) : f(n);
            l !== null && (o[_] = l)
        } catch (l) {
            console.error(`Error processing cookie ${n}:`, l)
        }
    });
    try {
        let n = i("affiliate_data", "affiliate_token");
        n && (o.affiliate_data = {
            token: n
        })
    } catch (n) {
        console.error("Error processing affiliate_data:", n)
    }
    try {
        U();
        let n = i("stp_data");
        n && (o.marketing_analytics_data = n)
    } catch (n) {
        console.error("Error processing stp_data:", n)
    }
    return o
};
window.getMarketingCookiesPayloadData = H;
//# sourceMappingURL=cookie.js.map