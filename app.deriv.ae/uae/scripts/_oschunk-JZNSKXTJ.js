import {
    a as B
} from "./_oschunk-VUL7P66L.js";
import {
    a as H
} from "./_oschunk-3BUJXS5R.js";
import "./_oschunk-OHBILT46.js";
import {
    a as re
} from "./_oschunk-V3Q6VFYE.js";
import "./_oschunk-KQUJMKWN.js";
import "./_oschunk-N5BINZCQ.js";
import "./_oschunk-GONH5KKX.js";
import "./_oschunk-SFRA456L.js";
import "./_oschunk-L6JZD7VU.js";
import "./_oschunk-TLJXDQWQ.js";
import {
    a as te
} from "./_oschunk-GKANWGN5.js";
import "./_oschunk-4ZYYVQOE.js";
import "./_oschunk-RVD4FS25.js";
import "./_oschunk-4SYOXZNK.js";
import "./_oschunk-YB2J7GTX.js";
import "./_oschunk-HFW3V2GI.js";
import {
    a as Ue
} from "./_oschunk-LLAHPWP3.js";
import "./_oschunk-YVFTECWM.js";
import {
    f as T,
    h as Z,
    l as Y,
    n as N,
    q as ee
} from "./_oschunk-VR5BNL2K.js";
import {
    a as He,
    g as j,
    m as xe,
    n as Ve,
    q as Le,
    r as Ie,
    s as K,
    t as X
} from "./_oschunk-4VHUVDBV.js";
import {
    a as $e
} from "./_oschunk-KXORGPRQ.js";
import {
    a as Q
} from "./_oschunk-ZM75JAVW.js";
import {
    $ as U,
    Ea as k,
    M as V,
    Qb as Ne,
    Sb as C,
    a as Ee,
    db as De,
    g as ke,
    pb as J,
    tb as M,
    u as Re,
    ub as l,
    w as q,
    za as F
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as x,
    a as z,
    b as Oe,
    c as s,
    e as Me,
    m as L,
    n as I,
    p as D
} from "./_oschunk-M5BUVJ72.js";
var Be = {
        "xWPo13ilQUmMxviE6tiU+Q#Value.1054587860.1": "\u0627\u062D\u0635\u0644 \u0639\u0644\u0649 \u0631\u0645\u0632 \u062C\u062F\u064A\u062F \u0644\u062A\u063A\u064A\u064A\u0631 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631.",
        "I51xov9i8UKj_LNKcpeCvw#Value.1054587860.1": "\u0627\u062D\u0635\u0644 \u0639\u0644\u0649 \u0631\u0645\u0632 \u062C\u062F\u064A\u062F \u0644\u062A\u063A\u064A\u064A\u0631 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631.",
        "ZfKcoY+h2UGS3DKi5Vw6+A#Message.1033885479.1": "\u062D\u062F\u062B \u062E\u0637\u0623 \u0645\u0627",
        "GUyUqwFd50i9Xx+wV72XsA#Value.1285806939.1": "\u062A\u0645 \u0625\u0636\u0627\u0641\u0629 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",
        "VpVw0QZDkEGPPhCaqzP60A#Title": "\u062A\u0639\u064A\u064A\u0646 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 | Deriv",
        "VpVw0QZDkEGPPhCaqzP60A#TitleExpression.-1022597927.1": "\u062A\u0639\u064A\u064A\u0646 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 | Deriv"
    },
    Fe = {
        "ar-001": {
            translations: Be,
            isRTL: !0
        }
    };

function ne(v, m, y, r) {
    var t, o;
    let n = !1;
    try {
        let i = localStorage.getItem("auth"),
            u = i ? JSON.parse(i) : null;
        n = !!((o = (t = u == null ? void 0 : u.user) == null ? void 0 : t.user_metadata) != null && o.user_set_password)
    } catch (i) {
        console.log("Error parsing auth:", i)
    }
    v.IsSet = n
}
s(ne, "default");

function oe(v, m, y) {
    y.Navigation.registerBackNavigationHandler(v.OnClickBack)
}
s(oe, "default");

function ie(v, m, y) {
    sessionStorage.removeItem("authorize")
}
s(ie, "default");

function ae(v, m, y, r) {
    window.tracker && window.tracker.updateLoginState(!0, v.Client_id)
}
s(ae, "default");

function se(v, m, y) {
    return new Promise(function(r, n) {
        cacheTrackEvents.track({
            name: "ce_virtual_signup_form_uae",
            properties: {
                action: "signup_done",
                signup_provider: "otp",
                form_name: "virtual_signup_form_outsystems_uae"
            }
        }), r()
    })
}
s(se, "default");

function ue(v, m, y, r) {
    window.tracker && window.tracker.recordSignup(v.Client_id)
}
s(ue, "default");

function ce(v, m, y, r) {
    v.Lang != "EN" ? window.open("https://deriv.ae/ar", "_blank", "noopener,noreferrer") : window.open("https://deriv.ae", "_blank", "noopener,noreferrer")
}
s(ce, "default");

function le(v, m, y) {
    sessionStorage.setItem("previousUrl", window.location.href)
}
s(le, "default");

function de(v, m, y) {
    sessionStorage.setItem("previousUrl", window.location.href)
}
s(de, "default");

function fe(v, m, y) {
    for (let t = localStorage.length - 1; t >= 0; t--) {
        let o = localStorage.key(t);
        o && o.endsWith("$ClientVars$language") || localStorage.removeItem(o)
    }
    window.sessionStorage.clear();
    let n = {
        domain: s(() => {
            try {
                let t = window.location.origin,
                    o = t.split("."),
                    i = o.length;
                return i > 2 ? `.${o[i-2]}.${o[i-1]}` : `.${t}`
            } catch (t) {
                return console.error("Invalid hostname:", t), null
            }
        }, "getDomainFromHostName")(),
        secure: !0
    };
    window.Cookies && Cookies.remove("client_information", n)
}
s(fe, "default");

function ge(v, m, y, r) {
    var i, u, f, a, d, _, S, g;
    let n = localStorage.getItem("auth"),
        t = JSON.parse(n);
    console.log("UserType?.user?.user_metadata?.userType", (u = (i = t == null ? void 0 : t.user) == null ? void 0 : i.user_metadata) == null ? void 0 : u.userType);
    let o = ((a = (f = t == null ? void 0 : t.user) == null ? void 0 : f.user_metadata) == null ? void 0 : a.userType) == "SOP2" || ((_ = (d = t == null ? void 0 : t.user) == null ? void 0 : d.user_metadata) == null ? void 0 : _.userType) == "SOP3";
    console.log("UAEPASSUser..", o, "ParseduserType?.user?.user_metadata?.userType", (g = (S = t == null ? void 0 : t.user) == null ? void 0 : S.user_metadata) == null ? void 0 : g.userType), v.IsUaePassUser = o
}
s(ge, "default");

function ve(v, m, y, r) {
    var o;
    let n = (o = JSON.parse(localStorage.getItem("enable_staging_env"))) != null ? o : !1,
        t = "";
    m.GetEnvironment().Environment == "dev" ? (t = "https://stg-id.uaepass.ae/idshub/logout?redirect_uri=https://dev-hub.deriv.com/uae/login", console.log("URL", t, "langCode", m.LanguageMapper().CharCode)) : m.GetEnvironment().Environment == "staging" ? t = "https://stg-id.uaepass.ae/idshub/logout?redirect_uri=https://staging-hub.deriv.com/uae/login" : t = "https://id.uaepass.ae/idshub/logout?redirect_uri=https://app.deriv.ae/uae/login", v.RedirectURL = t
}
s(ve, "default");

function me(v, m, y) {
    for (let t = localStorage.length - 1; t >= 0; t--) {
        let o = localStorage.key(t);
        o && o.endsWith("$ClientVars$language") || localStorage.removeItem(o)
    }
    window.sessionStorage.clear();
    let n = {
        domain: s(() => {
            try {
                let t = window.location.origin,
                    o = t.split("."),
                    i = o.length;
                return i > 2 ? `.${o[i-2]}.${o[i-1]}` : `.${t}`
            } catch (t) {
                return console.error("Invalid hostname:", t), null
            }
        }, "getDomainFromHostName")(),
        secure: !0
    };
    window.Cookies && Cookies.remove("client_information", n)
}
s(me, "default");

function ye(v, m, y, r) {
    var t, o, i;
    let n = v.from === "settings" ? JSON.parse(localStorage.getItem("auth")) : (t = JSON.parse(sessionStorage.getItem("authorize"))) != null ? t : JSON.parse(localStorage.getItem("auth"));
    v.AccessToken = (o = n == null ? void 0 : n.access_token) != null ? o : "", v.RefreshToken = (i = n == null ? void 0 : n.refresh_token) != null ? i : ""
}
s(ye, "default");

function Ae(v, m, y, r) {
    var a, d, _, S, g, w, O, P, $;
    let n = s(() => {
            try {
                let E = window.location.origin,
                    c = E.split("."),
                    b = c.length;
                return b > 2 ? `.${c[b-2]}.${c[b-1]}` : `.${E}`
            } catch (E) {
                return console.error("Invalid hostname:", E), null
            }
        }, "getDomainFromHostName"),
        t = JSON.parse(v.ClientProfile),
        o = {
            email: v.UserEmail,
            currency: (a = v.Currency) != null ? a : "",
            residence: (d = t.residence_country) != null ? d : "",
            first_name: (_ = t.first_name) != null ? _ : "",
            last_name: (S = t.last_name) != null ? S : "",
            preferred_language: (O = (w = (g = t == null ? void 0 : t.preferred_language) == null ? void 0 : g.toUpperCase()) != null ? w : v.language) != null ? O : "EN",
            user_id: t.client_id
        },
        i = {
            domain: n(),
            secure: !0
        };
    window.Cookies && Cookies.set("client_information", JSON.stringify(o), i);
    let u = {
            en: "en-US",
            ar: "ar-001"
        },
        f = ($ = (P = o == null ? void 0 : o.preferred_language) == null ? void 0 : P.toLowerCase()) != null ? $ : "en";
    v.LanguageToUse = u[f]
}
s(Ae, "default");

function be(v, m, y) {
    let r = localStorage.getItem("redirect_url");
    if (r) try {
        let n = new URL(r);
        (n.hostname.endsWith("deriv.ae") || n.hostname.endsWith("deriv-uae.webflow.io")) && (localStorage.removeItem("redirect_url"), window.location.href = r)
    } catch (n) {}
}
s(be, "default");

function _e(v, m, y) {
    v.CallOnboardingConfig()
}
s(_e, "default");

function Se(v, m, y, r) {
    function n(o) {
        var f, a;
        let i = localStorage.getItem("auth");
        if (!i) return;
        let u = JSON.parse(i);
        if (u != null && u.user) try {
            let d = (a = (f = JSON.parse(o)) != null ? f : {}) == null ? void 0 : a.user_metadata;
            u.user.user_metadata = d, localStorage.setItem("auth", JSON.stringify(u))
        } catch (d) {
            console.error("Invalid JSON string for newUserMetadata", d)
        }
    }
    s(n, "updateUserMetadata");

    function t(o) {
        var f;
        let i = JSON.parse(o),
            u = (f = JSON.parse(sessionStorage.getItem("authorize"))) != null ? f : {};
        i = Oe(z({}, u), {
            user: z({}, i)
        }), localStorage.setItem("auth", JSON.stringify(i)), sessionStorage.removeItem("authorize")
    }
    s(t, "saveAuthValues"), v.from === "settings" ? n(v.auth_response) : t(v.auth_response)
}
s(Se, "default");
var e = x; {
    let m = class m extends e.Controller.BaseViewController {
        constructor(r, n, t) {
            super(r, n, t, Fe);
            var o = this.controller;
            this.clientActionProxies = {
                onClickBack$Action: s(function() {
                    return o.executeActionInsideJSNode(o._onClickBack$Action.bind(o), o.callContext(), function(i) {
                        return {}
                    }, function() {}, "OnClickBack")
                }, "onClickBack$Action"),
                callOnboardingConfig$Action: s(function() {
                    return o.executeActionInsideJSNode(o._callOnboardingConfig$Action.bind(o), o.callContext(), function(i) {
                        return {}
                    }, function() {}, "CallOnboardingConfig")
                }, "callOnboardingConfig$Action")
            }, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get getOnboardingConfig$ServerAction() {
            return this.hasOwnProperty("_getOnboardingConfig$ServerAction") || (this._getOnboardingConfig$ServerAction = function(r, n, t) {
                var o = this.controller;
                return e.Logger.startActiveSpan("GetOnboardingConfig", function(i) {
                    return i && (i.setAttribute("code.function", "GetOnboardingConfig"), i.setAttribute("outsystems.function.key", "86c7c527-d6b4-4110-af68-13e28071a825"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
                        var u = {
                            country: e.DataConversion.ServerDataConverter.to(r, e.DataTypes.DataTypes.Text),
                            authorization: e.DataConversion.ServerDataConverter.to(n, e.DataTypes.DataTypes.Text)
                        };
                        return o.callServerAction("GetOnboardingConfig", "screenservices/uae/Common/SetPassword/ActionGetOnboardingConfig", "9mxHf9W_0f9gxqO_bFIMsA", u, o.callContext(t), void 0, void 0, !0).then(function(f) {
                            var a = new(o.constructor.getVariableGroupType("uae.Common.SetPassword$ActionGetOnboardingConfig"));
                            return a.responseOut = e.DataConversion.ServerDataConverter.from(f.Response, U), a
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 0)
            }), this._getOnboardingConfig$ServerAction
        }
        set getOnboardingConfig$ServerAction(r) {
            this._getOnboardingConfig$ServerAction = r
        }
        get getClientProfile$ServerAction() {
            return this.hasOwnProperty("_getClientProfile$ServerAction") || (this._getClientProfile$ServerAction = function(r, n) {
                var t = this.controller;
                return e.Logger.startActiveSpan("GetClientProfile", function(o) {
                    return o && (o.setAttribute("code.function", "GetClientProfile"), o.setAttribute("outsystems.function.key", "5ded5548-621f-4be6-bb2a-1e7a68f5c035"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
                        var i = {
                            authorization: e.DataConversion.ServerDataConverter.to(r, e.DataTypes.DataTypes.Text)
                        };
                        return t.callServerAction("GetClientProfile", "screenservices/uae/Common/SetPassword/ActionGetClientProfile", "XyCUwmGl8eh0OBf6WziXgw", i, t.callContext(n), void 0, void 0, !0).then(function(u) {
                            var f = new(t.constructor.getVariableGroupType("uae.Common.SetPassword$ActionGetClientProfile"));
                            return f.responseOut = e.DataConversion.ServerDataConverter.from(u.Response, M), f
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 0)
            }), this._getClientProfile$ServerAction
        }
        set getClientProfile$ServerAction(r) {
            this._getClientProfile$ServerAction = r
        }
        get postLogin$ServerAction() {
            return this.hasOwnProperty("_postLogin$ServerAction") || (this._postLogin$ServerAction = function(r, n, t) {
                var o = this.controller;
                return e.Logger.startActiveSpan("PostLogin", function(i) {
                    return i && (i.setAttribute("code.function", "PostLogin"), i.setAttribute("outsystems.function.key", "4e74782b-2b11-493b-b182-561e321709ab"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
                        var u = {
                            Request: e.DataConversion.ServerDataConverter.to(r, e.DataTypes.DataTypes.Record),
                            xuseragent: e.DataConversion.ServerDataConverter.to(n, e.DataTypes.DataTypes.Text)
                        };
                        return o.callServerAction("PostLogin", "screenservices/uae/Common/SetPassword/ActionPostLogin", "lxZHaqGNRE44uGHalH7JGg", u, o.callContext(t), void 0, void 0, !0).then(function(f) {
                            var a = new(o.constructor.getVariableGroupType("uae.Common.SetPassword$ActionPostLogin"));
                            return a.responseOut = e.DataConversion.ServerDataConverter.from(f.Response, k), a
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 0)
            }), this._postLogin$ServerAction
        }
        set postLogin$ServerAction(r) {
            this._postLogin$ServerAction = r
        }
        get postSignup$ServerAction() {
            return this.hasOwnProperty("_postSignup$ServerAction") || (this._postSignup$ServerAction = function(r, n) {
                var t = this.controller;
                return e.Logger.startActiveSpan("PostSignup", function(o) {
                    return o && (o.setAttribute("code.function", "PostSignup"), o.setAttribute("outsystems.function.key", "73b92de3-c15d-445f-9925-01842edcf7d6"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
                        var i = {
                            Request: e.DataConversion.ServerDataConverter.to(r, e.DataTypes.DataTypes.Record)
                        };
                        return t.callServerAction("PostSignup", "screenservices/uae/Common/SetPassword/ActionPostSignup", "98OGteA5DXex+TmnxupMjA", i, t.callContext(n), void 0, void 0, !0).then(function(u) {
                            var f = new(t.constructor.getVariableGroupType("uae.Common.SetPassword$ActionPostSignup"));
                            return f.responseOut = e.DataConversion.ServerDataConverter.from(u.Response, k), f
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 0)
            }), this._postSignup$ServerAction
        }
        set postSignup$ServerAction(r) {
            this._postSignup$ServerAction = r
        }
        get postUpdateUser$ServerAction() {
            return this.hasOwnProperty("_postUpdateUser$ServerAction") || (this._postUpdateUser$ServerAction = function(r, n, t) {
                var o = this.controller;
                return e.Logger.startActiveSpan("PostUpdateUser", function(i) {
                    return i && (i.setAttribute("code.function", "PostUpdateUser"), i.setAttribute("outsystems.function.key", "3811ee3e-7e80-4f03-a5cd-c661c0d3f54d"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
                        var u = {
                            Request: e.DataConversion.ServerDataConverter.to(r, e.DataTypes.DataTypes.Record),
                            Authorization: e.DataConversion.ServerDataConverter.to(n, e.DataTypes.DataTypes.Text)
                        };
                        return o.callServerAction("PostUpdateUser", "screenservices/uae/Common/SetPassword/ActionPostUpdateUser", "3ZR9QI0swbB8qMcDwX9dNA", u, o.callContext(t), void 0, void 0, !0).then(function(f) {
                            var a = new(o.constructor.getVariableGroupType("uae.Common.SetPassword$ActionPostUpdateUser"));
                            return a.responseOut = e.DataConversion.ServerDataConverter.from(f.Response, J), a
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 0)
            }), this._postUpdateUser$ServerAction
        }
        set postUpdateUser$ServerAction(r) {
            this._postUpdateUser$ServerAction = r
        }
        get postClientProfile$ServerAction() {
            return this.hasOwnProperty("_postClientProfile$ServerAction") || (this._postClientProfile$ServerAction = function(r, n, t) {
                var o = this.controller;
                return e.Logger.startActiveSpan("PostClientProfile", function(i) {
                    return i && (i.setAttribute("code.function", "PostClientProfile"), i.setAttribute("outsystems.function.key", "e0734a77-1f76-4e1b-9e82-d46d7b134c62"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
                        var u = {
                            Request: e.DataConversion.ServerDataConverter.to(r, e.DataTypes.DataTypes.Record),
                            Authorization: e.DataConversion.ServerDataConverter.to(n, e.DataTypes.DataTypes.Text)
                        };
                        return o.callServerAction("PostClientProfile", "screenservices/uae/Common/SetPassword/ActionPostClientProfile", "EoVeipOo3WghaYKxmAuhpw", u, o.callContext(t), void 0, void 0, !0).then(function(f) {
                            var a = new(o.constructor.getVariableGroupType("uae.Common.SetPassword$ActionPostClientProfile"));
                            return a.responseOut = e.DataConversion.ServerDataConverter.from(f.Response, F), a
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 0)
            }), this._postClientProfile$ServerAction
        }
        set postClientProfile$ServerAction(r) {
            this._postClientProfile$ServerAction = r
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(r) {
            this._dataFetchActionNames = r
        }
        get _onLanguageChange$Action() {
            return this.hasOwnProperty("__onLanguageChange$Action") || (this.__onLanguageChange$Action = function(r, n) {
                var t = this.model,
                    o = this.controller,
                    i = this.idService;
                return e.Logger.startActiveSpan("OnLanguageChange", function(u) {
                    u && (u.setAttribute("code.function", "OnLanguageChange"), u.setAttribute("outsystems.function.key", "4133228a-d159-4f45-927d-8e9e7d205e5a"), u.setAttribute("outsystems.function.owner.name", "uae"), u.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("OnLanguageChange"), n = o.callContext(n);
                        var f = new e.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("uae.Common.SetPassword.OnLanguageChange$vars")));
                        f.value.languageInLocal = r, C.changeLanguage$Action(f.value.languageInLocal, n), t.variables.country_residenceVar = l.getlanguage() === "en-US" ? l.getresidence_fullname_en() : l.getresidence_fullname_ar()
                    } finally {
                        u && u.end()
                    }
                }, 1)
            }), this.__onLanguageChange$Action
        }
        set _onLanguageChange$Action(r) {
            this.__onLanguageChange$Action = r
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(r) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("OnReady", function(i) {
                    i && (i.setAttribute("code.function", "OnReady"), i.setAttribute("outsystems.function.key", "44fb6069-175d-4e22-a695-212cd3dbbffa"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), r = t.callContext(r);
                        var u = new e.DataTypes.VariableHolder,
                            f = new e.DataTypes.VariableHolder;
                        if (e.Logger.startActiveSpan("JavaScript1", function(a) {
                                a && (a.setAttribute("code.function", "JavaScript1"), a.setAttribute("outsystems.function.key", "d3628c18-fa08-4e85-a0a0-e52de8886ce3"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return t.safeExecuteJSNode(oe, "JavaScript1", "OnReady", null, function(d) {}, {
                                        OnClickBack: t.clientActionProxies.onClickBack$Action
                                    }, {})
                                } finally {
                                    a && a.end()
                                }
                            }, 1), f.value = e.Logger.startActiveSpan("CheckPasswordAlreadySet", function(a) {
                                a && (a.setAttribute("code.function", "CheckPasswordAlreadySet"), a.setAttribute("outsystems.function.key", "3b5db34d-5418-4fbd-8cd2-8aaddea7687f"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return t.safeExecuteJSNode(ne, "CheckPasswordAlreadySet", "OnReady", {
                                        IsSet: e.DataConversion.JSNodeParamConverter.to(!1, e.DataTypes.DataTypes.Boolean)
                                    }, function(d) {
                                        var _ = new(t.constructor.getVariableGroupType("uae.Common.SetPassword.OnReady$checkPasswordAlreadySetJSResult"));
                                        return _.isSetOut = e.DataConversion.JSNodeParamConverter.from(d.IsSet, e.DataTypes.DataTypes.Boolean), _
                                    }, {}, {})
                                } finally {
                                    a && a.end()
                                }
                            }, 1), f.value.isSetOut) return !(n.variables.actionIn === "login" || n.variables.actionIn === "signup") && (u.value = C.getIsLoggedIn$Action(r), !u.value.isLoggedInOut) ? e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "login", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), r, !0) : e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "home", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), r, !0)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(r) {
            this.__onReady$Action = r
        }
        get _clearErrorMessage$Action() {
            return this.hasOwnProperty("__clearErrorMessage$Action") || (this.__clearErrorMessage$Action = function(r) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("ClearErrorMessage", function(i) {
                    i && (i.setAttribute("code.function", "ClearErrorMessage"), i.setAttribute("outsystems.function.key", "4c46562e-3288-47bb-bae3-ce009c45917c"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("ClearErrorMessage"), r = t.callContext(r), n.variables.errorMessageVar = e.BuiltinFunctions.nullTextIdentifier()
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__clearErrorMessage$Action
        }
        set _clearErrorMessage$Action(r) {
            this.__clearErrorMessage$Action = r
        }
        get _onClickBack$Action() {
            return this.hasOwnProperty("__onClickBack$Action") || (this.__onClickBack$Action = function(r) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("OnClickBack", function(i) {
                    i && (i.setAttribute("code.function", "OnClickBack"), i.setAttribute("outsystems.function.key", "625ee074-1a42-4656-aca5-9e1d45a0a544"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("OnClickBack"), r = t.callContext(r), e.Logger.startActiveSpan("JavaScript1", function(u) {
                            u && (u.setAttribute("code.function", "JavaScript1"), u.setAttribute("outsystems.function.key", "a8be60f8-5c3b-4864-b2fc-06f77a90c86e"), u.setAttribute("outsystems.function.owner.name", "uae"), u.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), u.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(ie, "JavaScript1", "OnClickBack", null, function(f) {}, {}, {})
                            } finally {
                                u && u.end()
                            }
                        }, 1), n.variables.fromIn === "settings" ? e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "user-profile", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), r, !0) : n.variables.fromIn === "signup" ? e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "signup", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), r, !0) : e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "login", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), r, !0)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onClickBack$Action
        }
        set _onClickBack$Action(r) {
            this.__onClickBack$Action = r
        }
        get _uAEPASSRedirection$Action() {
            return this.hasOwnProperty("__uAEPASSRedirection$Action") || (this.__uAEPASSRedirection$Action = function(r) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("UAEPASSRedirection", function(i) {
                    i && (i.setAttribute("code.function", "UAEPASSRedirection"), i.setAttribute("outsystems.function.key", "631587a7-c0c3-4c3b-83dc-7cce52d3b3a9"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("UAEPASSRedirection"), r = t.callContext(r)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__uAEPASSRedirection$Action
        }
        set _uAEPASSRedirection$Action(r) {
            this.__uAEPASSRedirection$Action = r
        }
        get _callOnboardingConfig$Action() {
            return this.hasOwnProperty("__callOnboardingConfig$Action") || (this.__callOnboardingConfig$Action = function(r) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("CallOnboardingConfig", function(i) {
                    return i && (i.setAttribute("code.function", "CallOnboardingConfig"), i.setAttribute("outsystems.function.key", "77e9ffdb-2b64-4dc2-af8c-a937402574dc"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        t.ensureControllerAlive("CallOnboardingConfig"), r = t.callContext(r);
                        var u = new e.DataTypes.VariableHolder,
                            f = new e.DataTypes.VariableHolder,
                            a = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType);
                        return e.Flow.executeAsyncFlow(function() {
                            return f.value = C.getAuth$Action(r), n.flush(), t.getOnboardingConfig$ServerAction(l.getresidence(), f.value.tokenOut, r).then(function(d) {
                                u.value = d
                            }).then(function() {
                                a.value.jSONOut = e.JSONUtils.serializeToJSON(u.value.responseOut.dataAttr, !1, !1), l.setonboarding_config_data(a.value.jSONOut)
                            })
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__callOnboardingConfig$Action
        }
        set _callOnboardingConfig$Action(r) {
            this.__callOnboardingConfig$Action = r
        }
        get _triggerAnalyticEvents$Action() {
            return this.hasOwnProperty("__triggerAnalyticEvents$Action") || (this.__triggerAnalyticEvents$Action = function(r) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("TriggerAnalyticEvents", function(i) {
                    return i && (i.setAttribute("code.function", "TriggerAnalyticEvents"), i.setAttribute("outsystems.function.key", "955d54e3-5951-420f-9336-cd2823761c02"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        t.ensureControllerAlive("TriggerAnalyticEvents"), r = t.callContext(r);
                        var u = new e.DataTypes.VariableHolder,
                            f = new e.DataTypes.VariableHolder;
                        return e.Flow.executeAsyncFlow(function() {
                            return C.consoleLog$Action("Triggeranalystics" + (l.getis_new_signup() ? "True" : "False"), r), f.value = C.getAuth$Action(r), n.flush(), t.getClientProfile$ServerAction(f.value.tokenOut, r).then(function(a) {
                                u.value = a
                            }).then(function() {
                                C.consoleLog$Action("Client+id:" + e.BuiltinFunctions.longIntegerToText(u.value.responseOut.dataAttr.getCurrent(r.iterationContext).client_idAttr), r)
                            }).then(function() {
                                return (n.variables.actionIn === "signup" || n.variables.actionIn === "login") && (l.getis_new_signup() && e.Logger.startActiveSpan("recordsignupevent", function(a) {
                                    a && (a.setAttribute("code.function", "recordsignupevent"), a.setAttribute("outsystems.function.key", "f1276fca-87cb-4066-bd08-d9f9a0c17d15"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return t.safeExecuteJSNode(ue, "recordsignupevent", "TriggerAnalyticEvents", {
                                            Client_id: e.DataConversion.JSNodeParamConverter.to(e.BuiltinFunctions.longIntegerToText(u.value.responseOut.dataAttr.getCurrent(r.iterationContext).client_idAttr), e.DataTypes.DataTypes.Text)
                                        }, function(d) {}, {}, {})
                                    } finally {
                                        a && a.end()
                                    }
                                }, 1), e.Logger.startActiveSpan("updateloginstate", function(a) {
                                    a && (a.setAttribute("code.function", "updateloginstate"), a.setAttribute("outsystems.function.key", "5ffc0862-d2dd-4398-a18e-887724926b60"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return t.safeExecuteJSNode(ae, "updateloginstate", "TriggerAnalyticEvents", {
                                            Client_id: e.DataConversion.JSNodeParamConverter.to(e.BuiltinFunctions.longIntegerToText(u.value.responseOut.dataAttr.getCurrent(r.iterationContext).client_idAttr), e.DataTypes.DataTypes.Text)
                                        }, function(d) {}, {}, {})
                                    } finally {
                                        a && a.end()
                                    }
                                }, 1)), e.Flow.executeSequence(function() {
                                    if (e.BuiltinFunctions.index(e.BuiltinFunctions.getBookmarkableURL(), l.getStagingHostName(), 0, !1, !1) > 0) return C.rudderstackIdentifyEvent$Action(e.BuiltinFunctions.longIntegerToText(u.value.responseOut.dataAttr.getCurrent(r.iterationContext).client_idAttr), r), e.Logger.startActiveSpan("RudderStack", function(a) {
                                        a && (a.setAttribute("code.function", "RudderStack"), a.setAttribute("outsystems.function.key", "977f375b-7428-4c58-9b73-ac1374265f40"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                        try {
                                            return t.safeExecuteAsyncJSNode(se, "RudderStack", "TriggerAnalyticEvents", null, function(d) {}, {}, {})
                                        } finally {
                                            a && a.end()
                                        }
                                    }, 1)
                                })
                            }).then(function() {
                                l.setis_new_signup(!1)
                            })
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__triggerAnalyticEvents$Action
        }
        set _triggerAnalyticEvents$Action(r) {
            this.__triggerAnalyticEvents$Action = r
        }
        get _linkOnClick$Action() {
            return this.hasOwnProperty("__linkOnClick$Action") || (this.__linkOnClick$Action = function(r) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("LinkOnClick", function(i) {
                    i && (i.setAttribute("code.function", "LinkOnClick"), i.setAttribute("outsystems.function.key", "b70051df-a7d4-4a35-8107-e2a2e7d8e72e"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("LinkOnClick"), r = t.callContext(r), e.Logger.startActiveSpan("JavaScript1", function(u) {
                            u && (u.setAttribute("code.function", "JavaScript1"), u.setAttribute("outsystems.function.key", "de420fbf-07cf-4d76-b23c-5b2d774fbb8c"), u.setAttribute("outsystems.function.owner.name", "uae"), u.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), u.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(ce, "JavaScript1", "LinkOnClick", {
                                    Lang: e.DataConversion.JSNodeParamConverter.to(C.languageMapper$Action(r).charCodeOut, e.DataTypes.DataTypes.Text)
                                }, function(f) {}, {}, {})
                            } finally {
                                u && u.end()
                            }
                        }, 1)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__linkOnClick$Action
        }
        set _linkOnClick$Action(r) {
            this.__linkOnClick$Action = r
        }
        get _onClickGetNewCode$Action() {
            return this.hasOwnProperty("__onClickGetNewCode$Action") || (this.__onClickGetNewCode$Action = function(r) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("OnClickGetNewCode", function(i) {
                    return i && (i.setAttribute("code.function", "OnClickGetNewCode"), i.setAttribute("outsystems.function.key", "c3b27acc-4077-472e-958e-be4d396cfda8"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnClickGetNewCode"), r = t.callContext(r);
                        var u = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                            f = new e.DataTypes.VariableHolder,
                            a = new e.DataTypes.VariableHolder;
                        return e.Flow.executeAsyncFlow(function() {
                            return n.variables.is_get_new_code_clickedVar = !0, e.Flow.executeSequence(function() {
                                return n.variables.actionIn === "login" ? (n.flush(), t.postLogin$ServerAction((function() {
                                    var d = new De;
                                    return d.emailAttr = l.getProvider() === "email" ? l.getemail() : "", d.phoneAttr = l.getProvider() === "phone" && l.getphone() !== e.BuiltinFunctions.nullTextIdentifier() && l.getemail() === e.BuiltinFunctions.nullTextIdentifier() ? e.BuiltinFunctions.substr(l.getphone(), 0, 1) !== "+" ? "+" + l.getphone() : l.getphone() : "", d.preferred_languageAttr = e.BuiltinFunctions.toLower(C.languageMapper$Action(r).charCodeOut), d
                                })(), e.BuiltinFunctions.getUserAgent(), r).then(function(d) {
                                    f.value = d
                                }).then(function() {
                                    if (f.value.responseOut.dataAttr.length > 0) return e.Logger.startActiveSpan("JavaScript1", function(d) {
                                        d && (d.setAttribute("code.function", "JavaScript1"), d.setAttribute("outsystems.function.key", "ebba9beb-fb9e-456b-b267-7e6ca1b3e828"), d.setAttribute("outsystems.function.owner.name", "uae"), d.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), d.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                        try {
                                            return t.safeExecuteJSNode(de, "JavaScript1", "OnClickGetNewCode", null, function(_) {}, {}, {})
                                        } finally {
                                            d && d.end()
                                        }
                                    }, 1), e.Flow.returnAsync(e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "otp", {
                                        phone: e.DataConversion.ServerDataConverter.to(l.getProvider() === "phone" && l.getphone() !== e.BuiltinFunctions.nullTextIdentifier() && l.getemail() === e.BuiltinFunctions.nullTextIdentifier() ? e.BuiltinFunctions.substr(l.getphone(), 0, 1) !== "+" ? "+" + l.getphone() : l.getphone() : "", e.DataTypes.DataTypes.PhoneNumber),
                                        email: e.DataConversion.ServerDataConverter.to(l.getemail(), e.DataTypes.DataTypes.Text),
                                        action: e.DataConversion.ServerDataConverter.to("login", e.DataTypes.DataTypes.Text)
                                    }), e.Transitions.createTransition(e.Transitions.TransitionAnimation.None), r, !0));
                                    n.variables.is_loadingVar = !1, n.variables.errorMessageVar = f.value.responseOut.errorsAttr.getCurrent(r.iterationContext).messageAttr, n.variables.is_get_new_code_clickedVar = !1
                                })) : (n.flush(), t.postSignup$ServerAction((function() {
                                    var d = new Re;
                                    return d.emailAttr = l.getProvider() === "email" ? l.getemail() : "", d.phoneAttr = l.getProvider() === "phone" && l.getphone() !== e.BuiltinFunctions.nullTextIdentifier() && l.getemail() === e.BuiltinFunctions.nullTextIdentifier() ? e.BuiltinFunctions.substr(l.getphone(), 0, 1) !== "+" ? "+" + l.getphone() : l.getphone() : "", d.preferred_languageAttr = e.BuiltinFunctions.toLower(C.languageMapper$Action(r).charCodeOut), d
                                })(), r).then(function(d) {
                                    a.value = d
                                }).then(function() {
                                    if (a.value.responseOut.dataAttr.length > 0) return e.Logger.startActiveSpan("StoreNavigationUrl", function(d) {
                                        d && (d.setAttribute("code.function", "StoreNavigationUrl"), d.setAttribute("outsystems.function.key", "9ee31149-f0c8-41b2-8154-260839c60eaf"), d.setAttribute("outsystems.function.owner.name", "uae"), d.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), d.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                        try {
                                            return t.safeExecuteJSNode(le, "StoreNavigationUrl", "OnClickGetNewCode", null, function(_) {}, {}, {})
                                        } finally {
                                            d && d.end()
                                        }
                                    }, 1), e.Flow.returnAsync(e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "otp", {
                                        email: e.DataConversion.ServerDataConverter.to(l.getemail(), e.DataTypes.DataTypes.Text),
                                        phone: e.DataConversion.ServerDataConverter.to(l.getProvider() === "phone" && l.getphone() !== e.BuiltinFunctions.nullTextIdentifier() && l.getemail() === e.BuiltinFunctions.nullTextIdentifier() ? e.BuiltinFunctions.substr(l.getphone(), 0, 1) !== "+" ? "+" + l.getphone() : l.getphone() : "", e.DataTypes.DataTypes.PhoneNumber),
                                        action: e.DataConversion.ServerDataConverter.to("signup", e.DataTypes.DataTypes.Text)
                                    }), e.Transitions.createTransition(e.Transitions.TransitionAnimation.None), r, !0));
                                    n.variables.is_loadingVar = !1, a.value.responseOut.errorsAttr.getCurrent(r.iterationContext).messageAttr !== e.BuiltinFunctions.nullTextIdentifier() && (n.variables.errorMessageVar = a.value.responseOut.errorsAttr.getCurrent(r.iterationContext).messageAttr), n.variables.is_get_new_code_clickedVar = !1
                                }))
                            })
                        }).catch(function(d) {
                            if (e.Logger.debug("SetPassword.OnClickGetNewCode", e.Exceptions.getMessage(d)), !e.Exceptions.isSystem(d)) return e.Logger.error(null, d, null, null, 1), u.value.exceptionMessageAttr = e.Exceptions.getMessage(d), e.Logger.startActiveSpan("AllExceptions", function(_) {
                                return _ && (_.setAttribute("code.function", "AllExceptions"), _.setAttribute("outsystems.function.key", "b08cbe03-8006-4d6b-adea-96f20be2dc53"), _.setAttribute("outsystems.function.owner.name", "uae"), _.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), _.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), e.Flow.tryFinally(function() {
                                    return e.Flow.executeAsyncFlow(function() {
                                        return n.variables.is_loadingVar = !1, e.FeedbackMessageService.showFeedbackMessage(u.value.exceptionMessageAttr, 3), e.Flow.returnAsync()
                                    })
                                }, function() {
                                    _ && _.end()
                                })
                            }, 1);
                            throw d
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__onClickGetNewCode$Action
        }
        set _onClickGetNewCode$Action(r) {
            this.__onClickGetNewCode$Action = r
        }
        get _clearSessions$Action() {
            return this.hasOwnProperty("__clearSessions$Action") || (this.__clearSessions$Action = function(r) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("ClearSessions", function(i) {
                    i && (i.setAttribute("code.function", "ClearSessions"), i.setAttribute("outsystems.function.key", "e429bd3c-fbf0-43a3-9687-1e3e302cb2c4"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("ClearSessions"), r = t.callContext(r);
                        var u = new e.DataTypes.VariableHolder,
                            f = new e.DataTypes.VariableHolder;
                        u.value = e.Logger.startActiveSpan("ValidateIfUAEPASSUser", function(a) {
                            a && (a.setAttribute("code.function", "ValidateIfUAEPASSUser"), a.setAttribute("outsystems.function.key", "510fbe82-99d2-4e6f-9e29-f862d2a64606"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(ge, "ValidateIfUAEPASSUser", "ClearSessions", {
                                    IsUaePassUser: e.DataConversion.JSNodeParamConverter.to(!1, e.DataTypes.DataTypes.Boolean)
                                }, function(d) {
                                    var _ = new(t.constructor.getVariableGroupType("uae.Common.SetPassword.ClearSessions$validateIfUAEPASSUserJSResult"));
                                    return _.isUaePassUserOut = e.DataConversion.JSNodeParamConverter.from(d.IsUaePassUser, e.DataTypes.DataTypes.Boolean), _
                                }, {}, {})
                            } finally {
                                a && a.end()
                            }
                        }, 1), l.getenableUAEPass() && u.value.isUaePassUserOut ? (e.Logger.startActiveSpan("ClearAllSessionData2", function(a) {
                            a && (a.setAttribute("code.function", "ClearAllSessionData2"), a.setAttribute("outsystems.function.key", "0a785c37-d7eb-4580-80a9-cd96c9805915"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(fe, "ClearAllSessionData2", "ClearSessions", null, function(d) {}, {}, {})
                            } finally {
                                a && a.end()
                            }
                        }, 1), f.value = e.Logger.startActiveSpan("GenerateURL", function(a) {
                            a && (a.setAttribute("code.function", "GenerateURL"), a.setAttribute("outsystems.function.key", "86a349e1-070d-4e8e-a342-ad59c2fb9339"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(ve, "GenerateURL", "ClearSessions", {
                                    RedirectURL: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                                }, function(d) {
                                    var _ = new(t.constructor.getVariableGroupType("uae.Common.SetPassword.ClearSessions$generateURLJSResult"));
                                    return _.redirectURLOut = e.DataConversion.JSNodeParamConverter.from(d.RedirectURL, e.DataTypes.DataTypes.Text), _
                                }, {
                                    GetEnvironment: C.clientActionProxies.getEnvironment$Action,
                                    LanguageMapper: C.clientActionProxies.languageMapper$Action
                                }, {})
                            } finally {
                                a && a.end()
                            }
                        }, 1)) : e.Logger.startActiveSpan("ClearAllSessionData", function(a) {
                            a && (a.setAttribute("code.function", "ClearAllSessionData"), a.setAttribute("outsystems.function.key", "9e300b4a-d367-4429-abde-8b3dec58d718"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(me, "ClearAllSessionData", "ClearSessions", null, function(d) {}, {}, {})
                            } finally {
                                a && a.end()
                            }
                        }, 1)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__clearSessions$Action
        }
        set _clearSessions$Action(r) {
            this.__clearSessions$Action = r
        }
        get _onClickConfirm$Action() {
            return this.hasOwnProperty("__onClickConfirm$Action") || (this.__onClickConfirm$Action = function(r, n) {
                var t = this.model,
                    o = this.controller,
                    i = this.idService;
                return e.Logger.startActiveSpan("OnClickConfirm", function(u) {
                    return u && (u.setAttribute("code.function", "OnClickConfirm"), u.setAttribute("outsystems.function.key", "f27810a5-3184-4d6e-9df7-78ee8c692a98"), u.setAttribute("outsystems.function.owner.name", "uae"), u.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        o.ensureControllerAlive("OnClickConfirm"), n = o.callContext(n);
                        var f = new e.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("uae.Common.SetPassword.OnClickConfirm$vars")));
                        f.value.passwordInLocal = r;
                        var a = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                            d = new e.DataTypes.VariableHolder,
                            _ = new e.DataTypes.VariableHolder,
                            S = new e.DataTypes.VariableHolder,
                            g = new e.DataTypes.VariableHolder,
                            w = new e.DataTypes.VariableHolder,
                            O = new e.DataTypes.VariableHolder,
                            P = new e.DataTypes.VariableHolder,
                            $ = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                            E = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType);
                        return e.Flow.executeAsyncFlow(function() {
                            return O.value = e.Logger.startActiveSpan("RetriveTokens", function(c) {
                                c && (c.setAttribute("code.function", "RetriveTokens"), c.setAttribute("outsystems.function.key", "1832f810-964a-473e-8dc1-a0788fe903b4"), c.setAttribute("outsystems.function.owner.name", "uae"), c.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return o.safeExecuteJSNode(ye, "RetriveTokens", "OnClickConfirm", {
                                        from: e.DataConversion.JSNodeParamConverter.to(t.variables.fromIn, e.DataTypes.DataTypes.Text),
                                        AccessToken: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                        RefreshToken: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                                    }, function(b) {
                                        var R = new(o.constructor.getVariableGroupType("uae.Common.SetPassword.OnClickConfirm$retriveTokensJSResult"));
                                        return R.accessTokenOut = e.DataConversion.JSNodeParamConverter.from(b.AccessToken, e.DataTypes.DataTypes.Text), R.refreshTokenOut = e.DataConversion.JSNodeParamConverter.from(b.RefreshToken, e.DataTypes.DataTypes.Text), R
                                    }, {}, {})
                                } finally {
                                    c && c.end()
                                }
                            }, 1), t.variables.is_loadingVar = !0, t.variables.login_requestVar.typeAttr = "add_password", t.variables.login_requestVar.passwordAttr = f.value.passwordInLocal, t.variables.login_requestVar.refresh_tokenAttr = O.value.refreshTokenOut, t.variables.login_requestVar.emailAttr = l.getProvider() === "email" ? l.getemail() : "", t.variables.login_requestVar.phoneAttr = l.getProvider() === "phone" ? e.BuiltinFunctions.substr(l.getphone(), 0, 1) !== "+" ? "+" + l.getphone() : l.getphone() : "", t.flush(), o.postUpdateUser$ServerAction(t.variables.login_requestVar, "Bearer " + O.value.accessTokenOut, n).then(function(c) {
                                d.value = c
                            }).then(function() {
                                return e.Flow.executeSequence(function() {
                                    if (d.value.responseOut.errorsAttr.length === 0) return E.value.jSONOut = e.JSONUtils.serializeToJSON(d.value.responseOut.dataAttr.getCurrent(n.iterationContext).userAttr, !1, !1), e.Logger.startActiveSpan("UpdateMetadata", function(c) {
                                        c && (c.setAttribute("code.function", "UpdateMetadata"), c.setAttribute("outsystems.function.key", "c551b88d-9a4a-43a0-b237-5ea979cf9cad"), c.setAttribute("outsystems.function.owner.name", "uae"), c.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                        try {
                                            return o.safeExecuteJSNode(Se, "UpdateMetadata", "OnClickConfirm", {
                                                from: e.DataConversion.JSNodeParamConverter.to(t.variables.fromIn, e.DataTypes.DataTypes.Text),
                                                auth_response: e.DataConversion.JSNodeParamConverter.to(E.value.jSONOut, e.DataTypes.DataTypes.Text)
                                            }, function(b) {}, {}, {})
                                        } finally {
                                            c && c.end()
                                        }
                                    }, 1), e.Flow.executeSequence(function() {
                                        return t.variables.fromIn === "settings" ? (w.value = C.getToastConfig$Action(n), Ue.iziToast_Show$Action("", e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("GUyUqwFd50i9Xx+wV72XsA#Value.1285806939.1", "Password added"), Ee.iziToast_Position.topCenter, w.value.configOut, n), e.Flow.returnAsync(e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "user-profile", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), n, !0))) : (e.Logger.startActiveSpan("PreloadonboardingConfig", function(c) {
                                            c && (c.setAttribute("code.function", "PreloadonboardingConfig"), c.setAttribute("outsystems.function.key", "9b098ce6-6287-4fc3-90ba-ce0ea095936a"), c.setAttribute("outsystems.function.owner.name", "uae"), c.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                            try {
                                                return o.safeExecuteJSNode(_e, "PreloadonboardingConfig", "OnClickConfirm", null, function(b) {}, {
                                                    CallOnboardingConfig: o.clientActionProxies.callOnboardingConfig$Action
                                                }, {})
                                            } finally {
                                                c && c.end()
                                            }
                                        }, 1), t.flush(), o.getClientProfile$ServerAction("Bearer " + O.value.accessTokenOut, n).then(function(c) {
                                            S.value = c
                                        }).then(function() {
                                            t.variables.clientProfileVar = e.DataConversion.JSConversions.typeConvertRecord(S.value.responseOut.dataAttr.getCurrent(n.iterationContext), new V, function(c, b) {
                                                return b.client_idAttr = c.client_idAttr, b.first_nameAttr = c.first_nameAttr, b.last_nameAttr = c.last_nameAttr, b.date_of_birthAttr = c.date_of_birthAttr, b.birth_countryAttr = c.birth_countryAttr, b.residence_countryAttr = c.residence_countryAttr, b.citizen_countryAttr = c.citizen_countryAttr, b.genderAttr = c.genderAttr, b.created_timeAttr = c.created_timeAttr, b.updated_timeAttr = c.updated_timeAttr, b.financial_assessmentAttr.client_idAttr = c.client_idAttr, b.preferred_languageAttr = c.preferred_languageAttr, b
                                            })
                                        }).then(function() {
                                            return e.Flow.executeSequence(function() {
                                                if (!S.value.responseOut.dataAttr.isEmpty && S.value.responseOut.dataAttr.getItem(0).residence_countryAttr !== e.BuiltinFunctions.nullTextIdentifier()) l.setresidence(S.value.responseOut.dataAttr.getCurrent(n.iterationContext).residence_countryAttr), l.setfirst_name(S.value.responseOut.dataAttr.getCurrent(n.iterationContext).first_nameAttr), l.setlast_name(S.value.responseOut.dataAttr.getCurrent(n.iterationContext).last_nameAttr);
                                                else return t.flush(), o.postClientProfile$ServerAction((function() {
                                                    var c = new ke;
                                                    return c.residence_countryAttr = l.getresidence(), c.preferred_languageAttr = e.BuiltinFunctions.toLower(C.languageMapper$Action(n).charCodeOut), c
                                                })(), "Bearer " + O.value.accessTokenOut, n).then(function(c) {
                                                    _.value = c
                                                }).then(function() {
                                                    t.variables.clientProfileVar = _.value.responseOut.dataAttr.getCurrent(n.iterationContext), l.setresidence(l.getresidence() !== e.BuiltinFunctions.nullTextIdentifier() ? l.getresidence() : _.value.responseOut.dataAttr.getCurrent(n.iterationContext).residence_countryAttr), l.setfirst_name(l.getfirst_name() !== e.BuiltinFunctions.nullTextIdentifier() ? l.getfirst_name() : _.value.responseOut.dataAttr.getCurrent(n.iterationContext).first_nameAttr), l.setlast_name(l.getlast_name() !== e.BuiltinFunctions.nullTextIdentifier() ? l.getlast_name() : _.value.responseOut.dataAttr.getCurrent(n.iterationContext).last_nameAttr)
                                                })
                                            })
                                        }).then(function() {
                                            return l.setresidence(l.getresidence() !== e.BuiltinFunctions.nullTextIdentifier() ? l.getresidence() : S.value.responseOut.dataAttr.getCurrent(n.iterationContext).residence_countryAttr), $.value.jSONOut = e.JSONUtils.serializeToJSON(t.variables.clientProfileVar, !1, !1), P.value = e.Logger.startActiveSpan("SetCookie", function(c) {
                                                c && (c.setAttribute("code.function", "SetCookie"), c.setAttribute("outsystems.function.key", "5bc2be82-086e-453c-9fbd-6920531d7f46"), c.setAttribute("outsystems.function.owner.name", "uae"), c.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                                try {
                                                    return o.safeExecuteJSNode(Ae, "SetCookie", "OnClickConfirm", {
                                                        language: e.DataConversion.JSNodeParamConverter.to(C.languageMapper$Action(n).charCodeOut, e.DataTypes.DataTypes.Text),
                                                        ClientProfile: e.DataConversion.JSNodeParamConverter.to($.value.jSONOut, e.DataTypes.DataTypes.Text),
                                                        UserEmail: e.DataConversion.JSNodeParamConverter.to(l.getemail(), e.DataTypes.DataTypes.Text),
                                                        Currency: e.DataConversion.JSNodeParamConverter.to(l.getcurrency(), e.DataTypes.DataTypes.Text),
                                                        LanguageToUse: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                                                    }, function(b) {
                                                        var R = new(o.constructor.getVariableGroupType("uae.Common.SetPassword.OnClickConfirm$setCookieJSResult"));
                                                        return R.languageToUseOut = e.DataConversion.JSNodeParamConverter.from(b.LanguageToUse, e.DataTypes.DataTypes.Text), R
                                                    }, {}, {})
                                                } finally {
                                                    c && c.end()
                                                }
                                            }, 1), C.redirectAfterAuth$Action(n), e.Logger.startActiveSpan("NavigateToRedirectURL", function(c) {
                                                c && (c.setAttribute("code.function", "NavigateToRedirectURL"), c.setAttribute("outsystems.function.key", "7dda0156-75f0-42d8-9e7b-a9d1eea850f9"), c.setAttribute("outsystems.function.owner.name", "uae"), c.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                                try {
                                                    return o.safeExecuteJSNode(be, "NavigateToRedirectURL", "OnClickConfirm", null, function(b) {}, {}, {})
                                                } finally {
                                                    c && c.end()
                                                }
                                            }, 1), t.variables.account_typeVar = l.getSignup_type_from_static(), o._triggerAnalyticEvents$Action(n).then(function() {
                                                C.clearLocalStorage$Action(n), C.clearOnboardingFromStore$Action(!0, n), g.value = C.getAuthenticator$Action(n)
                                            })
                                        }).then(function() {
                                            if (l.getmt5_signup_url_from_static() === "real" || l.getmt5_signup_url_from_static() === "demo") return e.Flow.returnAsync(e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "trade", {
                                                is_real: e.DataConversion.ServerDataConverter.to(l.getmt5_signup_url_from_static() === "real", e.DataTypes.DataTypes.Boolean)
                                            }), e.Transitions.createTransition(e.Transitions.TransitionAnimation.None), n, !0));
                                            if ((t.variables.clientProfileVar.first_nameAttr !== e.BuiltinFunctions.nullTextIdentifier() || t.variables.account_typeVar === "demo") && g.value.authenticatorOut !== "uae_pass") return l.setlanguage(P.value.languageToUseOut), e.Flow.returnAsync(e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "home", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.None), n, !0));
                                            if (t.variables.account_typeVar === "demo") l.setlanguage(P.value.languageToUseOut);
                                            else {
                                                if (t.variables.actionIn === "signup" && l.getSignup_type_from_static() === "real") return C.changeLanguage$Action(P.value.languageToUseOut, n), e.Flow.returnAsync(e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "currency-selection", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.None), n, !0));
                                                if (t.variables.clientProfileVar.residence_countryAttr !== e.BuiltinFunctions.nullTextIdentifier()) C.changeLanguage$Action(P.value.languageToUseOut, n);
                                                else return C.changeLanguage$Action(P.value.languageToUseOut, n), e.Flow.returnAsync(e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "residence", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.None), n, !0))
                                            }
                                            return e.Flow.returnAsync(e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "home", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.None), n, !0))
                                        }))
                                    });
                                    if (d.value.responseOut.errorsAttr.getCurrent(n.iterationContext).codeAttr === "reauthentication_required") {
                                        if (d.value.responseOut.errorsAttr.getCurrent(n.iterationContext).statusAttr.equals(e.BuiltinFunctions.integerToLongInteger(401))) return e.FeedbackMessageService.showFeedbackMessage(e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("ZfKcoY+h2UGS3DKi5Vw6+A#Message.1033885479.1", "Something went wrong"), 3), t.variables.fromIn === "settings" ? e.Flow.returnAsync(e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "user-profile", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), n, !0)) : e.Flow.returnAsync(e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "home", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), n, !0));
                                        if (t.variables.fromIn === "settings") return o._clearSessions$Action(n), e.Flow.returnAsync(e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "session-expired", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), n, !0));
                                        t.variables.show_code_bannerVar = !0, t.variables.is_loadingVar = !1
                                    } else t.variables.errorMessageVar = d.value.responseOut.errorsAttr.getCurrent(n.iterationContext).messageAttr, t.variables.is_loadingVar = !1
                                })
                            })
                        }).catch(function(c) {
                            if (e.Logger.debug("SetPassword.OnClickConfirm", e.Exceptions.getMessage(c)), !e.Exceptions.isSystem(c)) return e.Logger.error(null, c, null, null, 1), a.value.exceptionMessageAttr = e.Exceptions.getMessage(c), e.Logger.startActiveSpan("AllExceptions", function(b) {
                                return b && (b.setAttribute("code.function", "AllExceptions"), b.setAttribute("outsystems.function.key", "f3b339df-39d4-4217-9517-3dc2c41ce023"), b.setAttribute("outsystems.function.owner.name", "uae"), b.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), b.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), e.Flow.tryFinally(function() {
                                    return e.Flow.executeAsyncFlow(function() {
                                        return t.variables.is_loadingVar = !1, a.value.exceptionMessageAttr === "Token expired" && t.variables.fromIn !== "setings" ? t.variables.fromIn === "settings" ? e.Flow.returnAsync(e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "session-expired", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), n, !0)) : (t.variables.show_code_bannerVar = !0, e.Flow.returnAsync()) : (e.FeedbackMessageService.showFeedbackMessage(a.value.exceptionMessageAttr, 3), e.Flow.returnAsync())
                                    })
                                }, function() {
                                    b && b.end()
                                })
                            }, 1);
                            throw c
                        })
                    }, function() {
                        u && u.end()
                    })
                }, 1)
            }), this.__onClickConfirm$Action
        }
        set _onClickConfirm$Action(r) {
            this.__onClickConfirm$Action = r
        }
        onLanguageChange$Action(r, n) {
            var t = this.controller;
            return e.Logger.startActiveSpan("OnLanguageChange__proxy", function(o) {
                o && (o.setAttribute("code.function", "OnLanguageChange"), o.setAttribute("outsystems.function.key", "4133228a-d159-4f45-927d-8e9e7d205e5a"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onLanguageChange$Action, n, r)
                } finally {
                    o && o.end()
                }
            }, 0)
        }
        onReady$Action(r) {
            var n = this.controller;
            return e.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "44fb6069-175d-4e22-a695-212cd3dbbffa"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onReady$Action, r)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        clearErrorMessage$Action(r) {
            var n = this.controller;
            return e.Logger.startActiveSpan("ClearErrorMessage__proxy", function(t) {
                t && (t.setAttribute("code.function", "ClearErrorMessage"), t.setAttribute("outsystems.function.key", "4c46562e-3288-47bb-bae3-ce009c45917c"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._clearErrorMessage$Action, r)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onClickBack$Action(r) {
            var n = this.controller;
            return e.Logger.startActiveSpan("OnClickBack__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnClickBack"), t.setAttribute("outsystems.function.key", "625ee074-1a42-4656-aca5-9e1d45a0a544"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onClickBack$Action, r)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        uAEPASSRedirection$Action(r) {
            var n = this.controller;
            return e.Logger.startActiveSpan("UAEPASSRedirection__proxy", function(t) {
                t && (t.setAttribute("code.function", "UAEPASSRedirection"), t.setAttribute("outsystems.function.key", "631587a7-c0c3-4c3b-83dc-7cce52d3b3a9"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._uAEPASSRedirection$Action, r)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        callOnboardingConfig$Action(r) {
            var n = this.controller;
            return e.Logger.startActiveSpan("CallOnboardingConfig__proxy", function(t) {
                return t && (t.setAttribute("code.function", "CallOnboardingConfig"), t.setAttribute("outsystems.function.key", "77e9ffdb-2b64-4dc2-af8c-a937402574dc"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._callOnboardingConfig$Action, r)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        triggerAnalyticEvents$Action(r) {
            var n = this.controller;
            return e.Logger.startActiveSpan("TriggerAnalyticEvents__proxy", function(t) {
                return t && (t.setAttribute("code.function", "TriggerAnalyticEvents"), t.setAttribute("outsystems.function.key", "955d54e3-5951-420f-9336-cd2823761c02"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._triggerAnalyticEvents$Action, r)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        linkOnClick$Action(r) {
            var n = this.controller;
            return e.Logger.startActiveSpan("LinkOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "LinkOnClick"), t.setAttribute("outsystems.function.key", "b70051df-a7d4-4a35-8107-e2a2e7d8e72e"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._linkOnClick$Action, r)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onClickGetNewCode$Action(r) {
            var n = this.controller;
            return e.Logger.startActiveSpan("OnClickGetNewCode__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnClickGetNewCode"), t.setAttribute("outsystems.function.key", "c3b27acc-4077-472e-958e-be4d396cfda8"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onClickGetNewCode$Action, r)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        clearSessions$Action(r) {
            var n = this.controller;
            return e.Logger.startActiveSpan("ClearSessions__proxy", function(t) {
                t && (t.setAttribute("code.function", "ClearSessions"), t.setAttribute("outsystems.function.key", "e429bd3c-fbf0-43a3-9687-1e3e302cb2c4"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._clearSessions$Action, r)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onClickConfirm$Action(r, n) {
            var t = this.controller;
            return e.Logger.startActiveSpan("OnClickConfirm__proxy", function(o) {
                return o && (o.setAttribute("code.function", "OnClickConfirm"), o.setAttribute("outsystems.function.key", "f27810a5-3184-4d6e-9df7-78ee8c692a98"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._onClickConfirm$Action, n, r)
                }, function() {
                    o && o.end()
                })
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(r) {
            this._onInitializeEventHandler = r
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(r) {
                var n = this.controller,
                    t = this.model,
                    o = this.idService;
                return n.onReady$Action(r)
            }), this._onReadyEventHandler
        }
        set onReadyEventHandler(r) {
            this._onReadyEventHandler = r
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(r) {
            this._onRenderEventHandler = r
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = null), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(r) {
            this._onDestroyEventHandler = r
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(r) {
            this._onParametersChangedEventHandler = r
        }
        get onSyncStartEventHandler() {
            return this.hasOwnProperty("_onSyncStartEventHandler") || (this._onSyncStartEventHandler = null), this._onSyncStartEventHandler
        }
        set onSyncStartEventHandler(r) {
            this._onSyncStartEventHandler = r
        }
        get onSyncCompleteEventHandler() {
            return this.hasOwnProperty("_onSyncCompleteEventHandler") || (this._onSyncCompleteEventHandler = null), this._onSyncCompleteEventHandler
        }
        set onSyncCompleteEventHandler(r) {
            this._onSyncCompleteEventHandler = r
        }
        get onSyncErrorEventHandler() {
            return this.hasOwnProperty("_onSyncErrorEventHandler") || (this._onSyncErrorEventHandler = null), this._onSyncErrorEventHandler
        }
        set onSyncErrorEventHandler(r) {
            this._onSyncErrorEventHandler = r
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(r) {
                return Q.default.handleError(r, this.callContext())
            }), this._handleError
        }
        set handleError(r) {
            this._handleError = r
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return C.defaultTimeout
        }
    };
    s(m, "ControllerInner");
    let v = m;
    h = v, h.registerVariableGroupType("uae.Common.SetPassword$ActionGetOnboardingConfig", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: e.DataTypes.DataTypes.Record,
        defaultValue: s(function() {
            return new U
        }, "defaultValue"),
        complexType: U
    }]), h.registerVariableGroupType("uae.Common.SetPassword$ActionGetClientProfile", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: e.DataTypes.DataTypes.Record,
        defaultValue: s(function() {
            return new M
        }, "defaultValue"),
        complexType: M
    }]), h.registerVariableGroupType("uae.Common.SetPassword$ActionPostLogin", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: e.DataTypes.DataTypes.Record,
        defaultValue: s(function() {
            return new k
        }, "defaultValue"),
        complexType: k
    }]), h.registerVariableGroupType("uae.Common.SetPassword$ActionPostSignup", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: e.DataTypes.DataTypes.Record,
        defaultValue: s(function() {
            return new k
        }, "defaultValue"),
        complexType: k
    }]), h.registerVariableGroupType("uae.Common.SetPassword$ActionPostUpdateUser", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: e.DataTypes.DataTypes.Record,
        defaultValue: s(function() {
            return new J
        }, "defaultValue"),
        complexType: J
    }]), h.registerVariableGroupType("uae.Common.SetPassword$ActionPostClientProfile", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: e.DataTypes.DataTypes.Record,
        defaultValue: s(function() {
            return new F
        }, "defaultValue"),
        complexType: F
    }]), h.registerVariableGroupType("uae.Common.SetPassword.OnLanguageChange$vars", [{
        name: "Language",
        attrName: "languageInLocal",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }]), h.registerVariableGroupType("uae.Common.SetPassword.OnReady$checkPasswordAlreadySetJSResult", [{
        name: "IsSet",
        attrName: "isSetOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Boolean,
        defaultValue: s(function() {
            return !1
        }, "defaultValue")
    }]), h.registerVariableGroupType("uae.Common.SetPassword.ClearSessions$validateIfUAEPASSUserJSResult", [{
        name: "IsUaePassUser",
        attrName: "isUaePassUserOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Boolean,
        defaultValue: s(function() {
            return !1
        }, "defaultValue")
    }]), h.registerVariableGroupType("uae.Common.SetPassword.ClearSessions$generateURLJSResult", [{
        name: "RedirectURL",
        attrName: "redirectURLOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }]), h.registerVariableGroupType("uae.Common.SetPassword.OnClickConfirm$vars", [{
        name: "Password",
        attrName: "passwordInLocal",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }]), h.registerVariableGroupType("uae.Common.SetPassword.OnClickConfirm$retriveTokensJSResult", [{
        name: "AccessToken",
        attrName: "accessTokenOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "RefreshToken",
        attrName: "refreshTokenOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }]), h.registerVariableGroupType("uae.Common.SetPassword.OnClickConfirm$setCookieJSResult", [{
        name: "LanguageToUse",
        attrName: "languageToUseOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }])
}
var h, Ce = new e.Controller.ControllerFactory(h, $e);
var A = Me(He());
var p = x,
    he = class he extends p.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("is_loading", "is_loadingVar", "is_loading", !0, !1, p.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("country_residence", "country_residenceVar", "country_residence", !0, !1, p.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("login_request", "login_requestVar", "login_request", !0, !1, p.DataTypes.DataTypes.Record, function() {
                return p.DataTypes.ImmutableBase.getData(new q)
            }, !1, q), this.attr("ClientProfile", "clientProfileVar", "ClientProfile", !0, !1, p.DataTypes.DataTypes.Record, function() {
                return p.DataTypes.ImmutableBase.getData(new V)
            }, !1, V), this.attr("account_type", "account_typeVar", "account_type", !0, !1, p.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("show_code_banner", "show_code_bannerVar", "show_code_banner", !0, !1, p.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("ErrorMessage", "errorMessageVar", "ErrorMessage", !0, !1, p.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("is_get_new_code_clicked", "is_get_new_code_clickedVar", "is_get_new_code_clicked", !0, !1, p.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("from", "fromIn", "from", !0, !1, p.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_fromInDataFetchStatus", "_fromInDataFetchStatus", "_fromInDataFetchStatus", !0, !1, p.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("action", "actionIn", "action", !0, !1, p.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_actionInDataFetchStatus", "_actionInDataFetchStatus", "_actionInDataFetchStatus", !0, !1, p.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(p.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(he, "VariablesRecord");
var G = he;
G.init();
var we = class we extends p.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Form1: p.Model.ValidationWidgetRecord,
            Form2: p.Model.ValidationWidgetRecord
        }
    }
};
s(we, "WidgetsRecord");
var pe = we,
    Pe = class Pe extends p.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return G
        }
        static getWidgetsRecordConstructor() {
            return pe
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(m) {
            "from" in m && (this.variables.fromIn = p.DataConversion.ServerDataConverter.from(m.from, p.DataTypes.DataTypes.Text)), "action" in m && (this.variables.actionIn = p.DataConversion.ServerDataConverter.from(m.action, p.DataTypes.DataTypes.Text))
        }
    };
s(Pe, "Model");
var W = Pe;
W._hasValidationWidgetsValue = void 0;
var Te = new p.Model.ModelFactory(W);
var Je = j.PlaceholderContent,
    Tr = j.IteratorPlaceholderContent,
    ze = s(function() {
        var v = Ve(function(m) {
            var y = m.model,
                r = m.controller,
                n = m.controller.idService,
                t = r.validationService,
                o = r.callContext(),
                i = K,
                u = X,
                f = {
                    props: m,
                    validateWidget: s(function(g) {
                        m.validateWidget(m, g)
                    }, "validateWidget")
                },
                a = y,
                d = Ie,
                _ = Le,
                S = xe();
            return A.createElement("div", m.rootNodeProperties, d(Ne.isDesktop$Action(o).isDesktopOut, !1, this, function() {
                return [A.createElement(T, {
                    align: 0,
                    animate: !0,
                    style: "display-flex signup-header",
                    visible: y.variables.fromIn !== "settings",
                    _idProps: {
                        service: n,
                        name: "Header"
                    },
                    _widgetRecordProvider: a
                }, A.createElement(T, {
                    align: 0,
                    animate: !1,
                    style: "display-flex full-width align-items-center justify-content-space-evenly",
                    visible: !0,
                    _idProps: {
                        service: n,
                        uuid: "1"
                    },
                    _widgetRecordProvider: a
                }, A.createElement(T, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "min-width: 64px; visibility: hidden;"
                    },
                    visible: !0,
                    _idProps: {
                        service: n,
                        uuid: "2"
                    },
                    _widgetRecordProvider: a
                }), A.createElement(T, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "flex-grow: 1;"
                    },
                    style: "display-flex justify-content-center",
                    visible: !0,
                    _idProps: {
                        service: n,
                        uuid: "3"
                    },
                    _widgetRecordProvider: a
                }, A.createElement(ee, {
                    enabled: !0,
                    onClick: s(function() {
                        var g = typeof o != "undefined" && o !== null ? o.clone() : r.callContext().clone();
                        r.linkOnClick$Action(r.callContext(g))
                    }, "onClick"),
                    visible: !0,
                    _idProps: {
                        service: n,
                        uuid: "4"
                    },
                    _widgetRecordProvider: a
                }, A.createElement(N, {
                    image: D.VersionedURL.getVersionedUrl("img/uae.brandderivwordmark.svg"),
                    type: 0,
                    _idProps: {
                        service: n,
                        uuid: "5"
                    },
                    _widgetRecordProvider: a
                }))), A.createElement(T, {
                    align: 0,
                    animate: !1,
                    extendedEvents: {
                        onClick: s(function() {
                            var g = typeof o != "undefined" && o !== null ? o.clone() : r.callContext().clone();
                            r.onLanguageChange$Action(l.getlanguage() === "en-US" ? "ar-001" : "en-US", r.callContext(g))
                        }, "onClick")
                    },
                    style: "language-switcher",
                    visible: !0,
                    _idProps: {
                        service: n,
                        uuid: "6"
                    },
                    _widgetRecordProvider: a
                }, A.createElement(N, {
                    image: D.VersionedURL.getVersionedUrl("img/uae.globesm.svg"),
                    type: 0,
                    _idProps: {
                        service: n,
                        uuid: "7"
                    },
                    _widgetRecordProvider: a
                }), A.createElement(T, {
                    align: 0,
                    animate: !1,
                    visible: !0,
                    _idProps: {
                        service: n,
                        uuid: "8"
                    },
                    _widgetRecordProvider: a
                }, A.createElement(Z, {
                    extendedProperties: {
                        style: "color: #000;"
                    },
                    value: y.getCachedValue(n.getId("XsTttPJX8kOMQY5qPjR3pw.Value"), function() {
                        return C.getCurrentLanguageLabel$Action(o).currentLanguageLabelOut
                    }),
                    _idProps: {
                        service: n,
                        uuid: "9"
                    },
                    _widgetRecordProvider: a
                }))))), A.createElement(re, {
                    getOwnerSpan: s(function() {
                        return S.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: s(function() {
                        return S.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        ShowClosebutton: y.variables.fromIn === "settings"
                    },
                    events: {
                        _handleError: s(function(g) {
                            r.handleError(g)
                        }, "_handleError"),
                        closeBtnEvent$Action: s(function() {
                            var g = typeof o != "undefined" && o !== null ? o.clone() : r.callContext().clone();
                            r.onClickBack$Action(r.callContext(g))
                        }, "closeBtnEvent$Action")
                    },
                    _validationProps: {
                        validationService: t
                    },
                    _idProps: {
                        service: n,
                        uuid: "10",
                        alias: "1"
                    },
                    _widgetRecordProvider: a,
                    placeholders: {
                        contentbody: new Je(function() {
                            return [A.createElement(Y, {
                                _validationProps: {
                                    validationService: t
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                style: "",
                                _idProps: {
                                    service: n,
                                    name: "Form1"
                                },
                                _widgetRecordProvider: a
                            }, A.createElement(T, {
                                align: 0,
                                animate: !1,
                                style: "display-flex justify-content-center flex-direction-column",
                                visible: !0,
                                _idProps: {
                                    service: n,
                                    name: "Body"
                                },
                                _widgetRecordProvider: a
                            }, A.createElement(T, {
                                align: 0,
                                animate: !0,
                                visible: y.variables.show_code_bannerVar,
                                _idProps: {
                                    service: n,
                                    uuid: "13"
                                },
                                _widgetRecordProvider: a
                            }, A.createElement(B, {
                                getOwnerSpan: s(function() {
                                    return S.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: s(function() {
                                    return S.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    Content: L.resolve(I.TranslationsService).getMessage("I51xov9i8UKj_LNKcpeCvw#Value.1054587860.1", "Get a new one to change your password."),
                                    is_disabled: y.variables.is_loadingVar || y.variables.is_get_new_code_clickedVar
                                },
                                events: {
                                    _handleError: s(function(g) {
                                        r.handleError(g)
                                    }, "_handleError"),
                                    actionTrigger$Action: s(function() {
                                        return Promise.resolve().then(function() {
                                            var g = typeof o != "undefined" && o !== null ? o.clone() : r.callContext().clone();
                                            return r.onClickGetNewCode$Action(r.callContext(g))
                                        })
                                    }, "actionTrigger$Action")
                                },
                                _validationProps: {
                                    validationService: t,
                                    validationParentId: n.getId("Form1")
                                },
                                _idProps: {
                                    service: n,
                                    uuid: "14",
                                    alias: "2"
                                },
                                _widgetRecordProvider: a,
                                _dependencies: []
                            })), A.createElement(T, {
                                align: 0,
                                animate: !1,
                                style: "full-width set-password__body",
                                visible: !0,
                                _idProps: {
                                    service: n,
                                    uuid: "15"
                                },
                                _widgetRecordProvider: a
                            }, A.createElement(H, {
                                getOwnerSpan: s(function() {
                                    return S.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: s(function() {
                                    return S.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    screen: "setup",
                                    is_button_disabled: y.variables.is_get_new_code_clickedVar,
                                    is_loading: y.variables.is_loadingVar
                                },
                                events: {
                                    _handleError: s(function(g) {
                                        r.handleError(g)
                                    }, "_handleError"),
                                    confirmPasswordEvent$Action: s(function(g) {
                                        return Promise.resolve().then(function() {
                                            var w = typeof o != "undefined" && o !== null ? o.clone() : r.callContext().clone();
                                            return r.onClickConfirm$Action(g, r.callContext(w))
                                        })
                                    }, "confirmPasswordEvent$Action"),
                                    errorMessageClearEvent$Action: s(function() {
                                        var g = typeof o != "undefined" && o !== null ? o.clone() : r.callContext().clone();
                                        r.clearErrorMessage$Action(r.callContext(g))
                                    }, "errorMessageClearEvent$Action")
                                },
                                _validationProps: {
                                    validationService: t,
                                    validationParentId: n.getId("Form1")
                                },
                                _idProps: {
                                    service: n,
                                    uuid: "16",
                                    alias: "3"
                                },
                                _widgetRecordProvider: a,
                                _dependencies: []
                            }))))]
                        })
                    },
                    _dependencies: [i(y.variables.is_get_new_code_clickedVar), i(y.variables.is_loadingVar), i(y.variables.show_code_bannerVar)]
                })]
            }, function() {
                return [A.createElement(T, {
                    align: 0,
                    animate: !1,
                    style: "full-height overflow-hidden",
                    visible: !0,
                    _idProps: {
                        service: n,
                        uuid: "17"
                    },
                    _widgetRecordProvider: a
                }, A.createElement(te, {
                    getOwnerSpan: s(function() {
                        return S.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: s(function() {
                        return S.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: s(function(g) {
                            r.handleError(g)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: t
                    },
                    _idProps: {
                        service: n,
                        name: "Mobile",
                        alias: "4"
                    },
                    _widgetRecordProvider: a,
                    placeholders: {
                        content: new Je(function() {
                            return [A.createElement(Y, {
                                _validationProps: {
                                    validationService: t
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                style: "",
                                _idProps: {
                                    service: n,
                                    name: "Form2"
                                },
                                _widgetRecordProvider: a
                            }, A.createElement(T, {
                                align: 0,
                                animate: !1,
                                style: "full-height display-flex flex-direction-column overflow-hidden",
                                visible: !0,
                                _idProps: {
                                    service: n,
                                    uuid: "20"
                                },
                                _widgetRecordProvider: a
                            }, A.createElement(T, {
                                align: 0,
                                animate: !0,
                                extendedProperties: {
                                    style: "height: 56px;"
                                },
                                style: "flex justify-content-space-evenly align-items-center",
                                visible: y.variables.fromIn !== "settings",
                                _idProps: {
                                    service: n,
                                    name: "Header2"
                                },
                                _widgetRecordProvider: a
                            }, A.createElement(T, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "min-width: 64px;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: n,
                                    uuid: "22"
                                },
                                _widgetRecordProvider: a
                            }), A.createElement(T, {
                                align: 0,
                                animate: !1,
                                style: "display-flex full-width",
                                visible: !0,
                                _idProps: {
                                    service: n,
                                    uuid: "23"
                                },
                                _widgetRecordProvider: a
                            }, A.createElement(T, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "flex-grow: 1;"
                                },
                                style: "display-flex justify-content-center",
                                visible: !0,
                                _idProps: {
                                    service: n,
                                    uuid: "24"
                                },
                                _widgetRecordProvider: a
                            }, A.createElement(ee, {
                                enabled: !0,
                                onClick: s(function() {
                                    var g = typeof o != "undefined" && o !== null ? o.clone() : r.callContext().clone();
                                    r.linkOnClick$Action(r.callContext(g))
                                }, "onClick"),
                                visible: !0,
                                _idProps: {
                                    service: n,
                                    uuid: "25"
                                },
                                _widgetRecordProvider: a
                            }, A.createElement(N, {
                                gridProperties: {
                                    width: "72px"
                                },
                                image: D.VersionedURL.getVersionedUrl("img/uae.brandderivwordmark.svg"),
                                type: 0,
                                _idProps: {
                                    service: n,
                                    uuid: "26"
                                },
                                _widgetRecordProvider: a
                            })))), A.createElement(T, {
                                align: 0,
                                animate: !1,
                                extendedEvents: {
                                    onClick: s(function() {
                                        var g = typeof o != "undefined" && o !== null ? o.clone() : r.callContext().clone();
                                        r.onLanguageChange$Action(l.getlanguage() === "en-US" ? "ar-001" : "en-US", r.callContext(g))
                                    }, "onClick")
                                },
                                style: "language-switcher",
                                visible: !0,
                                _idProps: {
                                    service: n,
                                    uuid: "27"
                                },
                                _widgetRecordProvider: a
                            }, A.createElement(N, {
                                image: D.VersionedURL.getVersionedUrl("img/uae.globesm.svg"),
                                type: 0,
                                _idProps: {
                                    service: n,
                                    uuid: "28"
                                },
                                _widgetRecordProvider: a
                            }), A.createElement(T, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: n,
                                    uuid: "29"
                                },
                                _widgetRecordProvider: a
                            }, A.createElement(Z, {
                                extendedProperties: {
                                    style: "color: #000;"
                                },
                                value: y.getCachedValue(n.getId("EwcvyON6G0K6BOY0_ATiDQ.Value"), function() {
                                    return C.getCurrentLanguageLabel$Action(o).currentLanguageLabelOut
                                }),
                                _idProps: {
                                    service: n,
                                    uuid: "30"
                                },
                                _widgetRecordProvider: a
                            })))), A.createElement(T, {
                                align: 0,
                                animate: !0,
                                extendedProperties: {
                                    style: "height: 56px; max-width: 608px; z-index: 999;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                style: "display-flex align-items-center padding-x-base",
                                visible: y.variables.fromIn === "settings",
                                _idProps: {
                                    service: n,
                                    name: "ContentHeader"
                                },
                                _widgetRecordProvider: a
                            }, A.createElement(T, {
                                align: 0,
                                animate: !1,
                                style: "display-flex right-btn-section justify-content-flex-end column-gap-s",
                                visible: !0,
                                _idProps: {
                                    service: n,
                                    name: "RightSection"
                                },
                                _widgetRecordProvider: a
                            }, A.createElement(T, {
                                align: 0,
                                animate: !1,
                                extendedEvents: {
                                    onClick: s(function() {
                                        var g = typeof o != "undefined" && o !== null ? o.clone() : r.callContext().clone();
                                        r.onClickBack$Action(r.callContext(g))
                                    }, "onClick")
                                },
                                style: "close-icon cursor-pointer",
                                visible: !0,
                                _idProps: {
                                    service: n,
                                    name: "CloseButton"
                                },
                                _widgetRecordProvider: a
                            }, A.createElement(N, {
                                extendedEvents: {
                                    onClick: s(function() {
                                        var g = typeof o != "undefined" && o !== null ? o.clone() : r.callContext().clone();
                                        r.onClickBack$Action(r.callContext(g))
                                    }, "onClick")
                                },
                                extendedProperties: {
                                    style: "font-size: 16px; height: auto;"
                                },
                                gridProperties: {
                                    width: "24px"
                                },
                                image: D.VersionedURL.getVersionedUrl("img/uae.close.svg"),
                                style: "close-icon",
                                type: 0,
                                _idProps: {
                                    service: n,
                                    uuid: "34"
                                },
                                _widgetRecordProvider: a
                            })))), A.createElement(T, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "height: calc(100dvh - 56px);"
                                },
                                style: "display-flex flex-direction-column padding-x-m padding-bottom-base padding-top-m full-height overflow-hidden",
                                visible: !0,
                                _idProps: {
                                    service: n,
                                    uuid: "35"
                                },
                                _widgetRecordProvider: a
                            }, A.createElement(T, {
                                align: 0,
                                animate: !0,
                                visible: y.variables.show_code_bannerVar,
                                _idProps: {
                                    service: n,
                                    uuid: "36"
                                },
                                _widgetRecordProvider: a
                            }, A.createElement(B, {
                                getOwnerSpan: s(function() {
                                    return S.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: s(function() {
                                    return S.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    Content: L.resolve(I.TranslationsService).getMessage("xWPo13ilQUmMxviE6tiU+Q#Value.1054587860.1", "Get a new one to change your password."),
                                    is_disabled: y.variables.is_loadingVar || y.variables.is_get_new_code_clickedVar
                                },
                                events: {
                                    _handleError: s(function(g) {
                                        r.handleError(g)
                                    }, "_handleError"),
                                    actionTrigger$Action: s(function() {
                                        return Promise.resolve().then(function() {
                                            var g = typeof o != "undefined" && o !== null ? o.clone() : r.callContext().clone();
                                            return r.onClickGetNewCode$Action(r.callContext(g))
                                        })
                                    }, "actionTrigger$Action")
                                },
                                _validationProps: {
                                    validationService: t,
                                    validationParentId: n.getId("Form2")
                                },
                                _idProps: {
                                    service: n,
                                    uuid: "37",
                                    alias: "5"
                                },
                                _widgetRecordProvider: a,
                                _dependencies: []
                            })), A.createElement(T, {
                                align: 0,
                                animate: !1,
                                style: "full-height",
                                visible: !0,
                                _idProps: {
                                    service: n,
                                    name: "Body2"
                                },
                                _widgetRecordProvider: a
                            }, A.createElement(H, {
                                getOwnerSpan: s(function() {
                                    return S.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: s(function() {
                                    return S.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    is_button_disabled: y.variables.is_get_new_code_clickedVar,
                                    is_loading: y.variables.is_loadingVar,
                                    screen: "setup"
                                },
                                events: {
                                    _handleError: s(function(g) {
                                        r.handleError(g)
                                    }, "_handleError"),
                                    confirmPasswordEvent$Action: s(function(g) {
                                        return Promise.resolve().then(function() {
                                            var w = typeof o != "undefined" && o !== null ? o.clone() : r.callContext().clone();
                                            return r.onClickConfirm$Action(g, r.callContext(w))
                                        })
                                    }, "confirmPasswordEvent$Action"),
                                    errorMessageClearEvent$Action: s(function() {
                                        var g = typeof o != "undefined" && o !== null ? o.clone() : r.callContext().clone();
                                        r.clearErrorMessage$Action(r.callContext(g))
                                    }, "errorMessageClearEvent$Action")
                                },
                                _validationProps: {
                                    validationService: t,
                                    validationParentId: n.getId("Form2")
                                },
                                _idProps: {
                                    service: n,
                                    uuid: "39",
                                    alias: "6"
                                },
                                _widgetRecordProvider: a,
                                _dependencies: []
                            })))))]
                        })
                    },
                    _dependencies: [i(y.variables.is_get_new_code_clickedVar), i(y.variables.is_loadingVar), i(y.variables.show_code_bannerVar), i(y.variables.fromIn)]
                }))]
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: s(function() {
                return {
                    codeFunction: "SetPassword",
                    functionKey: "d1709556-4306-4190-8f3e-109aab33fad0",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Common.SetPassword",
            modelFactory: Te,
            controllerFactory: Ce,
            getTitle: s(function(m) {
                var y = m.model,
                    r = m.controller,
                    n = m.controller.idService,
                    t = r.validationService,
                    o = r.callContext(),
                    i = K,
                    u = X,
                    f = {
                        props: m,
                        validateWidget: s(function(a) {
                            m.validateWidget(m, a)
                        }, "validateWidget")
                    };
                return L.resolve(I.TranslationsService).getMessage("VpVw0QZDkEGPPhCaqzP60A#TitleExpression.-1022597927.1", "Set Password")
            }, "getTitle")
        });
        return v.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.Common.SetPassword.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, v.getJsDependencies = function() {
            return []
        }, v.getBlocks = function() {
            return [re, B, H, te]
        }, v
    }, "componentFactory"),
    qe = ze();
export {
    Ce as controllerModule, Te as modelModule, qe as viewModule, Q as webFlowControllerModule
};