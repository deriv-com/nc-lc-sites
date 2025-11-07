import {
    a as I
} from "./_oschunk-7SYLUYK7.js";
import {
    f as oe
} from "./_oschunk-VR5BNL2K.js";
import {
    a as ce,
    g as N,
    m as ee,
    n as te,
    q as re,
    r as ae,
    s as ne,
    t as P
} from "./_oschunk-4VHUVDBV.js";
import {
    a as Y
} from "./_oschunk-KXORGPRQ.js";
import {
    a as V
} from "./_oschunk-ZM75JAVW.js";
import {
    Sb as m,
    Za as _,
    db as w,
    p as Z,
    tb as D,
    ub as g
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as C,
    a as X,
    b as Q,
    c as i,
    e as ue
} from "./_oschunk-M5BUVJ72.js";
var ie = {};

function k(l, s, p, t) {
    var u;
    let n = (u = JSON.parse(localStorage.getItem("enable_staging_env"))) != null ? u : !1,
        r = "";
    s.GetEnvironment().Environment == "dev" ? (r = "https://stg-id.uaepass.ae/idshub/logout?redirect_uri=https://dev-hub.deriv.com/uae/signup", console.log("URL", r, "langCode", s.LanguageMapper().CharCode)) : s.GetEnvironment().Environment == "staging" ? r = "https://stg-id.uaepass.ae/idshub/logout?redirect_uri=https://staging-hub.deriv.com/uae/signup" : r = "https://id.uaepass.ae/idshub/logout?redirect_uri=https://app.deriv.ae/uae/signup", l.RedirectURL = r
}
i(k, "default");

function x(l, s, p, t) {
    var u;
    let n = (u = JSON.parse(localStorage.getItem("enable_staging_env"))) != null ? u : !1,
        r = "";
    s.GetEnvironment().Environment == "dev" ? (r = "https://stg-id.uaepass.ae/idshub/logout?redirect_uri=https://dev-hub.deriv.com/uae/login", console.log("URL", r, "langCode", s.LanguageMapper().CharCode)) : s.GetEnvironment().Environment == "staging" ? r = "https://stg-id.uaepass.ae/idshub/logout?redirect_uri=https://staging-hub.deriv.com/uae/login" : r = "https://id.uaepass.ae/idshub/logout?redirect_uri=https://app.deriv.ae/uae/login", l.RedirectURL = r
}
i(x, "default");

function $(l, s, p, t) {
    var u;
    let n = (u = JSON.parse(localStorage.getItem("enable_staging_env"))) != null ? u : !1,
        r = "";
    s.GetEnvironment().Environment == "dev" ? (r = "https://stg-id.uaepass.ae/idshub/logout?redirect_uri=https://dev-hub.deriv.com/uae/choose-verification-method", console.log("URL", r, "langCode", s.LanguageMapper().CharCode)) : s.GetEnvironment().Environment == "staging" ? r = "https://stg-id.uaepass.ae/idshub/logout?redirect_uri=https://staging-hub.deriv.com/uae/choose-verification-method" : r = "https://id.uaepass.ae/idshub/logout?redirect_uri=https://app.deriv.ae/uae/choose-verification-method", l.RedirectURL = r
}
i($, "default");

function J(l, s, p, t) {
    try {
        let n = JSON.parse(localStorage.getItem("auth"));
        typeof n.access_token == "string" && (l.token = "Bearer " + n.access_token)
    } catch (n) {}
}
i(J, "default");

function G(l, s, p, t) {
    let n = JSON.parse(l.auth_response);
    if (Array.isArray(n.data)) {
        let r = Q(X({}, n.data[0]), {
            refresh_token: 23234
        });
        localStorage.setItem("auth", JSON.stringify(r)), sessionStorage.setItem("authorize", JSON.stringify(r))
    }
}
i(G, "default");

function F(l, s, p, t) {
    var u;
    let n = (u = JSON.parse(localStorage.getItem("enable_staging_env"))) != null ? u : !1,
        r = "";
    s.GetEnvironment().Environment == "dev" ? (r = "https://stg-id.uaepass.ae/idshub/logout?redirect_uri=https://dev-hub.deriv.com/uae/LinkToUAEPASS", console.log("URL", r, "langCode", s.LanguageMapper().CharCode)) : s.GetEnvironment().Environment == "staging" ? r = "https://stg-id.uaepass.ae/idshub/logout?redirect_uri=https://staging-hub.deriv.com/uae/LinkToUAEPASS" : r = "https://id.uaepass.ae/idshub/logout?redirect_uri=https://app.deriv.ae/uae/LinkToUAEPASS", l.RedirectURL = r
}
i(F, "default");

function H(l, s, p, t) {
    let n = window.location.href,
        r = new URL(n),
        u = r.searchParams.get("code"),
        o = r.searchParams.get("state");
    if (u && (l.LoginCode = u), o) {
        l.State = o;
        let c = atob(o),
            y = JSON.parse(c);
        l.Location = y == null ? void 0 : y.state
    }
}
i(H, "default");
var e = C; {
    let s = class s extends e.Controller.BaseViewController {
        constructor(t, n, r) {
            super(t, n, r, ie);
            var u = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get postAuthUaepass$ServerAction() {
            return this.hasOwnProperty("_postAuthUaepass$ServerAction") || (this._postAuthUaepass$ServerAction = function(t, n, r) {
                var u = this.controller;
                return e.Logger.startActiveSpan("PostAuthUaepass", function(o) {
                    return o && (o.setAttribute("code.function", "PostAuthUaepass"), o.setAttribute("outsystems.function.key", "6f262949-aad3-47c7-876b-63aaff936ec3"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
                        var c = {
                            Request: e.DataConversion.ServerDataConverter.to(t, e.DataTypes.DataTypes.Record),
                            xuseragent: e.DataConversion.ServerDataConverter.to(n, e.DataTypes.DataTypes.Text)
                        };
                        return u.callServerAction("PostAuthUaepass", "screenservices/uae/Common/Callback/ActionPostAuthUaepass", "fISSq07NAr4sDMf2n44fGQ", c, u.callContext(r), void 0, void 0, !0).then(function(y) {
                            var b = new(u.constructor.getVariableGroupType("uae.Common.Callback$ActionPostAuthUaepass"));
                            return b.responseOut = e.DataConversion.ServerDataConverter.from(y.Response, _), b
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 0)
            }), this._postAuthUaepass$ServerAction
        }
        set postAuthUaepass$ServerAction(t) {
            this._postAuthUaepass$ServerAction = t
        }
        get getClientProfile$ServerAction() {
            return this.hasOwnProperty("_getClientProfile$ServerAction") || (this._getClientProfile$ServerAction = function(t, n) {
                var r = this.controller;
                return e.Logger.startActiveSpan("GetClientProfile", function(u) {
                    return u && (u.setAttribute("code.function", "GetClientProfile"), u.setAttribute("outsystems.function.key", "5ded5548-621f-4be6-bb2a-1e7a68f5c035"), u.setAttribute("outsystems.function.owner.name", "uae"), u.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), u.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
                        var o = {
                            authorization: e.DataConversion.ServerDataConverter.to(t, e.DataTypes.DataTypes.Text)
                        };
                        return r.callServerAction("GetClientProfile", "screenservices/uae/Common/Callback/ActionGetClientProfile", "XyCUwmGl8eh0OBf6WziXgw", o, r.callContext(n), void 0, void 0, !0).then(function(c) {
                            var y = new(r.constructor.getVariableGroupType("uae.Common.Callback$ActionGetClientProfile"));
                            return y.responseOut = e.DataConversion.ServerDataConverter.from(c.Response, D), y
                        })
                    }, function() {
                        u && u.end()
                    })
                }, 0)
            }), this._getClientProfile$ServerAction
        }
        set getClientProfile$ServerAction(t) {
            this._getClientProfile$ServerAction = t
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _errorRedirection$Action() {
            return this.hasOwnProperty("__errorRedirection$Action") || (this.__errorRedirection$Action = function(t) {
                var n = this.model,
                    r = this.controller,
                    u = this.idService;
                return e.Logger.startActiveSpan("ErrorRedirection", function(o) {
                    o && (o.setAttribute("code.function", "ErrorRedirection"), o.setAttribute("outsystems.function.key", "537374e4-8bba-4a5e-ad1b-4293bd39dbbb"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return r.ensureControllerAlive("ErrorRedirection"), t = r.callContext(t), n.variables.locationVar === "signup" ? e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "signup", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), t, !0) : n.variables.locationVar === "login" ? e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "login", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), t, !0) : n.variables.locationVar === "verification" ? e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "choose-verification-method", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), t, !0) : e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "login", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), t, !0)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__errorRedirection$Action
        }
        set _errorRedirection$Action(t) {
            this.__errorRedirection$Action = t
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(t) {
                var n = this.model,
                    r = this.controller,
                    u = this.idService;
                return e.Logger.startActiveSpan("OnReady", function(o) {
                    return o && (o.setAttribute("code.function", "OnReady"), o.setAttribute("outsystems.function.key", "74d21dd8-7834-4763-8e05-a599a1379483"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        r.ensureControllerAlive("OnReady"), t = r.callContext(t);
                        var c = new e.DataTypes.VariableHolder,
                            y = new e.DataTypes.VariableHolder,
                            b = new e.DataTypes.VariableHolder,
                            R = new e.DataTypes.VariableHolder,
                            U = new e.DataTypes.VariableHolder,
                            S = new e.DataTypes.VariableHolder,
                            T = new e.DataTypes.VariableHolder,
                            q = new e.DataTypes.VariableHolder,
                            K = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType);
                        return e.Flow.executeAsyncFlow(function() {
                            return q.value = e.Logger.startActiveSpan("GetCode", function(a) {
                                a && (a.setAttribute("code.function", "GetCode"), a.setAttribute("outsystems.function.key", "eaa24c79-2e25-4b90-9e41-77beea279e8d"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return r.safeExecuteJSNode(H, "GetCode", "OnReady", {
                                        LoginCode: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                        State: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                        Location: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                                    }, function(v) {
                                        var f = new(r.constructor.getVariableGroupType("uae.Common.Callback.OnReady$getCodeJSResult"));
                                        return f.loginCodeOut = e.DataConversion.JSNodeParamConverter.from(v.LoginCode, e.DataTypes.DataTypes.Text), f.stateOut = e.DataConversion.JSNodeParamConverter.from(v.State, e.DataTypes.DataTypes.Text), f.locationOut = e.DataConversion.JSNodeParamConverter.from(v.Location, e.DataTypes.DataTypes.Text), f
                                    }, {}, {})
                                } finally {
                                    a && a.end()
                                }
                            }, 1), n.variables.locationVar = q.value.locationOut, e.Flow.executeSequence(function() {
                                if (n.variables.errorIn === "invalid_request" || n.variables.errorIn === "login_required" || n.variables.errorIn === "access_denied" || n.variables.errorIn === "cancelledOnApp") g.setUAEPASSUserInfo(n.variables.errorIn), r._errorRedirection$Action(t);
                                else return e.Flow.executeSequence(function() {
                                    return n.variables.codeIn !== e.BuiltinFunctions.nullTextIdentifier() ? (n.flush(), r.postAuthUaepass$ServerAction((function() {
                                        var a = new Z;
                                        return a.uaepassCodeAttr = n.variables.codeIn, a.preferredLanguageAttr = e.BuiltinFunctions.toLower(m.languageMapper$Action(t).charCodeOut), a.stateAttr = n.variables.stateIn, a.isMobileAppAttr = !1, a
                                    })(), e.BuiltinFunctions.getUserAgent(), t).then(function(a) {
                                        c.value = a
                                    }).then(function() {
                                        return e.Flow.executeSequence(function() {
                                            return c.value.responseOut.dataAttr.getCurrent(t.iterationContext).access_tokenAttr === e.BuiltinFunctions.nullTextIdentifier() ? (g.setUAEPASSUserInfo(c.value.responseOut.errorsAttr.getCurrent(t.iterationContext).codeAttr), g.setUAEPASSToken(c.value.responseOut.errorsAttr.getCurrent(t.iterationContext).tokenAttr), n.variables.locationVar === "verification" && (c.value.responseOut.errorsAttr.getCurrent(t.iterationContext).codeAttr === "UnauthorizedUserType" || c.value.responseOut.errorsAttr.getCurrent(t.iterationContext).codeAttr === "InvalidGrant" || c.value.responseOut.errorsAttr.getCurrent(t.iterationContext).codeAttr === "DataMissmactch" || c.value.responseOut.errorsAttr.getCurrent(t.iterationContext).codeAttr === "InvalidCsrfToken" || c.value.responseOut.errorsAttr.getCurrent(t.iterationContext).codeAttr === "UserAlreadyExists") ? c.value.responseOut.errorsAttr.getCurrent(t.iterationContext).codeAttr === "UserNotFound" ? e.Flow.returnAsync(e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "LinkToUAEPASS", {
                                                state: e.DataConversion.ServerDataConverter.to("verification", e.DataTypes.DataTypes.Text)
                                            }), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), t, !0)) : (U.value = e.Logger.startActiveSpan("GenerateURL4", function(a) {
                                                a && (a.setAttribute("code.function", "GenerateURL4"), a.setAttribute("outsystems.function.key", "79eb3e73-0ce4-40b5-b0e2-12c5687d5ce9"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                                try {
                                                    return r.safeExecuteJSNode($, "GenerateURL4", "OnReady", {
                                                        RedirectURL: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                                                    }, function(v) {
                                                        var f = new(r.constructor.getVariableGroupType("uae.Common.Callback.OnReady$generateURL4JSResult"));
                                                        return f.redirectURLOut = e.DataConversion.JSNodeParamConverter.from(v.RedirectURL, e.DataTypes.DataTypes.Text), f
                                                    }, {
                                                        GetEnvironment: m.clientActionProxies.getEnvironment$Action,
                                                        LanguageMapper: m.clientActionProxies.languageMapper$Action
                                                    }, {})
                                                } finally {
                                                    a && a.end()
                                                }
                                            }, 1), n.variables.logoutRedirectURLVar = U.value.redirectURLOut, e.Flow.returnAsync(e.Navigation.navigateTo(e.Navigation.generateScreenURL(n.variables.logoutRedirectURLVar, {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), t, !0))) : n.variables.locationVar === "login" && (c.value.responseOut.errorsAttr.getCurrent(t.iterationContext).codeAttr === "UnauthorizedUserType" || c.value.responseOut.errorsAttr.getCurrent(t.iterationContext).codeAttr === "InvalidGrant" || c.value.responseOut.errorsAttr.getCurrent(t.iterationContext).codeAttr === "DataMissmactch" || c.value.responseOut.errorsAttr.getCurrent(t.iterationContext).codeAttr === "InvalidCsrfToken") ? (R.value = e.Logger.startActiveSpan("GenerateURL3", function(a) {
                                                a && (a.setAttribute("code.function", "GenerateURL3"), a.setAttribute("outsystems.function.key", "6bb14993-5432-4164-9498-e01248a4525f"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                                try {
                                                    return r.safeExecuteJSNode(x, "GenerateURL3", "OnReady", {
                                                        RedirectURL: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                                                    }, function(v) {
                                                        var f = new(r.constructor.getVariableGroupType("uae.Common.Callback.OnReady$generateURL3JSResult"));
                                                        return f.redirectURLOut = e.DataConversion.JSNodeParamConverter.from(v.RedirectURL, e.DataTypes.DataTypes.Text), f
                                                    }, {
                                                        GetEnvironment: m.clientActionProxies.getEnvironment$Action,
                                                        LanguageMapper: m.clientActionProxies.languageMapper$Action
                                                    }, {})
                                                } finally {
                                                    a && a.end()
                                                }
                                            }, 1), n.variables.logoutRedirectURLVar = R.value.redirectURLOut, e.Flow.returnAsync(e.Navigation.navigateTo(e.Navigation.generateScreenURL(n.variables.logoutRedirectURLVar, {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), t, !0))) : n.variables.locationVar === "signup" && (c.value.responseOut.errorsAttr.getCurrent(t.iterationContext).codeAttr === "UnauthorizedUserType" || c.value.responseOut.errorsAttr.getCurrent(t.iterationContext).codeAttr === "InvalidGrant" || c.value.responseOut.errorsAttr.getCurrent(t.iterationContext).codeAttr === "DataMissmactch" || c.value.responseOut.errorsAttr.getCurrent(t.iterationContext).codeAttr === "InvalidCsrfToken") ? (b.value = e.Logger.startActiveSpan("GenerateURL", function(a) {
                                                a && (a.setAttribute("code.function", "GenerateURL"), a.setAttribute("outsystems.function.key", "317a7aab-69ad-4077-b402-421e2b6a6a86"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                                try {
                                                    return r.safeExecuteJSNode(k, "GenerateURL", "OnReady", {
                                                        RedirectURL: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                                                    }, function(v) {
                                                        var f = new(r.constructor.getVariableGroupType("uae.Common.Callback.OnReady$generateURLJSResult"));
                                                        return f.redirectURLOut = e.DataConversion.JSNodeParamConverter.from(v.RedirectURL, e.DataTypes.DataTypes.Text), f
                                                    }, {
                                                        GetEnvironment: m.clientActionProxies.getEnvironment$Action,
                                                        LanguageMapper: m.clientActionProxies.languageMapper$Action
                                                    }, {})
                                                } finally {
                                                    a && a.end()
                                                }
                                            }, 1), n.variables.logoutRedirectURLVar = b.value.redirectURLOut, e.Flow.returnAsync(e.Navigation.navigateTo(e.Navigation.generateScreenURL(n.variables.logoutRedirectURLVar, {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), t, !0))) : (g.setUAEPASSUserInfo(e.BuiltinFunctions.nullTextIdentifier()), T.value = e.Logger.startActiveSpan("GenerateURL5", function(a) {
                                                a && (a.setAttribute("code.function", "GenerateURL5"), a.setAttribute("outsystems.function.key", "c8819b4a-0d1a-43a1-aad5-26d49d215032"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                                try {
                                                    return r.safeExecuteJSNode(F, "GenerateURL5", "OnReady", {
                                                        RedirectURL: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                                                    }, function(v) {
                                                        var f = new(r.constructor.getVariableGroupType("uae.Common.Callback.OnReady$generateURL5JSResult"));
                                                        return f.redirectURLOut = e.DataConversion.JSNodeParamConverter.from(v.RedirectURL, e.DataTypes.DataTypes.Text), f
                                                    }, {
                                                        GetEnvironment: m.clientActionProxies.getEnvironment$Action,
                                                        LanguageMapper: m.clientActionProxies.languageMapper$Action
                                                    }, {})
                                                } finally {
                                                    a && a.end()
                                                }
                                            }, 1), n.variables.logoutRedirectURLVar = T.value.redirectURLOut, e.Flow.returnAsync(e.Navigation.navigateTo(e.Navigation.generateScreenURL(n.variables.logoutRedirectURLVar, {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), t, !0)))) : (K.value.jSONOut = e.JSONUtils.serializeToJSON(c.value.responseOut, !1, !1), e.Logger.startActiveSpan("SaveAuthToSessionStorage", function(a) {
                                                a && (a.setAttribute("code.function", "SaveAuthToSessionStorage"), a.setAttribute("outsystems.function.key", "89bcc8b4-5cd8-4cc2-ab65-bcde72c220f3"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                                try {
                                                    return r.safeExecuteJSNode(G, "SaveAuthToSessionStorage", "OnReady", {
                                                        auth_response: e.DataConversion.JSNodeParamConverter.to(K.value.jSONOut, e.DataTypes.DataTypes.Text)
                                                    }, function(v) {}, {}, {})
                                                } finally {
                                                    a && a.end()
                                                }
                                            }, 1), S.value = e.Logger.startActiveSpan("GetAuth", function(a) {
                                                a && (a.setAttribute("code.function", "GetAuth"), a.setAttribute("outsystems.function.key", "86c00c36-a6c0-49f6-b8f6-893f225019b5"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                                try {
                                                    return r.safeExecuteJSNode(J, "GetAuth", "OnReady", {
                                                        token: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                                                    }, function(v) {
                                                        var f = new(r.constructor.getVariableGroupType("uae.Common.Callback.OnReady$getAuthJSResult"));
                                                        return f.tokenOut = e.DataConversion.JSNodeParamConverter.from(v.token, e.DataTypes.DataTypes.Text), f
                                                    }, {}, {})
                                                } finally {
                                                    a && a.end()
                                                }
                                            }, 1), n.flush(), r.getClientProfile$ServerAction(S.value.tokenOut, t).then(function(a) {
                                                y.value = a
                                            }).then(function() {
                                                g.setProvider(m.getFeatureFlag$Action("PhoneNumber", t).shouldEnableOut ? n.variables.loginRequestVar.emailAttr !== e.BuiltinFunctions.nullTextIdentifier() ? "email" : "phone" : "email"), g.setfirst_name(y.value.responseOut.dataAttr.getCurrent(t.iterationContext).first_nameAttr), g.setlast_name(y.value.responseOut.dataAttr.getCurrent(t.iterationContext).last_nameAttr), g.setemail(c.value.responseOut.dataAttr.getCurrent(t.iterationContext).userAttr.emailAttr), g.setphone(c.value.responseOut.dataAttr.getCurrent(t.iterationContext).userAttr.phoneAttr)
                                            }).then(function() {
                                                return c.value.responseOut.dataAttr.getCurrent(t.iterationContext).signupUserAttr || c.value.responseOut.dataAttr.getCurrent(t.iterationContext).isAutolinkedAttr ? e.Flow.returnAsync(e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "linked-successfully", {
                                                    Linked: e.DataConversion.ServerDataConverter.to(c.value.responseOut.dataAttr.getCurrent(t.iterationContext).isAutolinkedAttr, e.DataTypes.DataTypes.Boolean),
                                                    state: e.DataConversion.ServerDataConverter.to(n.variables.locationVar, e.DataTypes.DataTypes.Text)
                                                }), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), t, !0)) : c.value.responseOut.dataAttr.getCurrent(t.iterationContext).userAttr.user_metadataAttr.user_set_passwordAttr ? e.Flow.returnAsync(e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "home", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), t, !0)) : e.Flow.returnAsync(e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "set-password", {
                                                    action: e.DataConversion.ServerDataConverter.to(n.variables.locationVar, e.DataTypes.DataTypes.Text),
                                                    from: e.DataConversion.ServerDataConverter.to("uaepass", e.DataTypes.DataTypes.Text)
                                                }), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), t, !0))
                                            }))
                                        })
                                    })) : e.Flow.returnAsync(e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "signup", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), t, !0))
                                })
                            })
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(t) {
            this.__onReady$Action = t
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(t) {
                var n = this.model,
                    r = this.controller,
                    u = this.idService;
                return e.Logger.startActiveSpan("OnInitialize", function(o) {
                    o && (o.setAttribute("code.function", "OnInitialize"), o.setAttribute("outsystems.function.key", "e8ad2edf-80a3-4343-bd76-2769ad1225b8"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnInitialize"), t = r.callContext(t)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(t) {
            this.__onInitialize$Action = t
        }
        errorRedirection$Action(t) {
            var n = this.controller;
            return e.Logger.startActiveSpan("ErrorRedirection__proxy", function(r) {
                r && (r.setAttribute("code.function", "ErrorRedirection"), r.setAttribute("outsystems.function.key", "537374e4-8bba-4a5e-ad1b-4293bd39dbbb"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._errorRedirection$Action, t)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        onReady$Action(t) {
            var n = this.controller;
            return e.Logger.startActiveSpan("OnReady__proxy", function(r) {
                return r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "74d21dd8-7834-4763-8e05-a599a1379483"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onReady$Action, t)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        onInitialize$Action(t) {
            var n = this.controller;
            return e.Logger.startActiveSpan("OnInitialize__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnInitialize"), r.setAttribute("outsystems.function.key", "e8ad2edf-80a3-4343-bd76-2769ad1225b8"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onInitialize$Action, t)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(t) {
                var n = this.controller,
                    r = this.model,
                    u = this.idService;
                return n.onInitialize$Action(t)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(t) {
            this._onInitializeEventHandler = t
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(t) {
                var n = this.controller,
                    r = this.model,
                    u = this.idService;
                return n.onReady$Action(t)
            }), this._onReadyEventHandler
        }
        set onReadyEventHandler(t) {
            this._onReadyEventHandler = t
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(t) {
            this._onRenderEventHandler = t
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = null), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(t) {
            this._onDestroyEventHandler = t
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(t) {
            this._onParametersChangedEventHandler = t
        }
        get onSyncStartEventHandler() {
            return this.hasOwnProperty("_onSyncStartEventHandler") || (this._onSyncStartEventHandler = null), this._onSyncStartEventHandler
        }
        set onSyncStartEventHandler(t) {
            this._onSyncStartEventHandler = t
        }
        get onSyncCompleteEventHandler() {
            return this.hasOwnProperty("_onSyncCompleteEventHandler") || (this._onSyncCompleteEventHandler = null), this._onSyncCompleteEventHandler
        }
        set onSyncCompleteEventHandler(t) {
            this._onSyncCompleteEventHandler = t
        }
        get onSyncErrorEventHandler() {
            return this.hasOwnProperty("_onSyncErrorEventHandler") || (this._onSyncErrorEventHandler = null), this._onSyncErrorEventHandler
        }
        set onSyncErrorEventHandler(t) {
            this._onSyncErrorEventHandler = t
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(t) {
                return V.default.handleError(t, this.callContext())
            }), this._handleError
        }
        set handleError(t) {
            this._handleError = t
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return m.defaultTimeout
        }
    };
    i(s, "ControllerInner");
    let l = s;
    A = l, A.registerVariableGroupType("uae.Common.Callback$ActionPostAuthUaepass", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: e.DataTypes.DataTypes.Record,
        defaultValue: i(function() {
            return new _
        }, "defaultValue"),
        complexType: _
    }]), A.registerVariableGroupType("uae.Common.Callback$ActionGetClientProfile", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: e.DataTypes.DataTypes.Record,
        defaultValue: i(function() {
            return new D
        }, "defaultValue"),
        complexType: D
    }]), A.registerVariableGroupType("uae.Common.Callback.OnReady$generateURLJSResult", [{
        name: "RedirectURL",
        attrName: "redirectURLOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: i(function() {
            return ""
        }, "defaultValue")
    }]), A.registerVariableGroupType("uae.Common.Callback.OnReady$generateURL3JSResult", [{
        name: "RedirectURL",
        attrName: "redirectURLOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: i(function() {
            return ""
        }, "defaultValue")
    }]), A.registerVariableGroupType("uae.Common.Callback.OnReady$generateURL4JSResult", [{
        name: "RedirectURL",
        attrName: "redirectURLOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: i(function() {
            return ""
        }, "defaultValue")
    }]), A.registerVariableGroupType("uae.Common.Callback.OnReady$getAuthJSResult", [{
        name: "token",
        attrName: "tokenOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: i(function() {
            return ""
        }, "defaultValue")
    }]), A.registerVariableGroupType("uae.Common.Callback.OnReady$generateURL5JSResult", [{
        name: "RedirectURL",
        attrName: "redirectURLOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: i(function() {
            return ""
        }, "defaultValue")
    }]), A.registerVariableGroupType("uae.Common.Callback.OnReady$getCodeJSResult", [{
        name: "LoginCode",
        attrName: "loginCodeOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: i(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "State",
        attrName: "stateOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: i(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "Location",
        attrName: "locationOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: i(function() {
            return ""
        }, "defaultValue")
    }])
}
var A, M = new e.Controller.ControllerFactory(A, Y);
var E = ue(ce());
var d = C,
    W = class W extends d.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, d.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("LogoutRedirectURL", "logoutRedirectURLVar", "LogoutRedirectURL", !0, !1, d.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("Location", "locationVar", "Location", !0, !1, d.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("LoginRequest", "loginRequestVar", "LoginRequest", !0, !1, d.DataTypes.DataTypes.Record, function() {
                return d.DataTypes.ImmutableBase.getData(new w)
            }, !1, w), this.attr("code", "codeIn", "code", !0, !1, d.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_codeInDataFetchStatus", "_codeInDataFetchStatus", "_codeInDataFetchStatus", !0, !1, d.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("error", "errorIn", "error", !0, !1, d.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_errorInDataFetchStatus", "_errorInDataFetchStatus", "_errorInDataFetchStatus", !0, !1, d.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("state", "stateIn", "state", !0, !1, d.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_stateInDataFetchStatus", "_stateInDataFetchStatus", "_stateInDataFetchStatus", !0, !1, d.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(d.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
i(W, "VariablesRecord");
var O = W;
O.init();
var j = class j extends d.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
i(j, "WidgetsRecord");
var z = j,
    h = class h extends d.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return O
        }
        static getWidgetsRecordConstructor() {
            return z
        }
        static get hasValidationWidgets() {
            return h._hasValidationWidgetsValue === void 0 && (h._hasValidationWidgetsValue = void 0), h._hasValidationWidgetsValue
        }
        setInputs(s) {
            "code" in s && (this.variables.codeIn = d.DataConversion.ServerDataConverter.from(s.code, d.DataTypes.DataTypes.Text)), "error" in s && (this.variables.errorIn = d.DataConversion.ServerDataConverter.from(s.error, d.DataTypes.DataTypes.Text)), "state" in s && (this.variables.stateIn = d.DataConversion.ServerDataConverter.from(s.state, d.DataTypes.DataTypes.Text))
        }
    };
i(h, "Model");
var L = h;
L._hasValidationWidgetsValue = void 0;
var B = new d.Model.ModelFactory(L);
var rt = N.PlaceholderContent,
    at = N.IteratorPlaceholderContent,
    de = i(function() {
        var l = te(function(s) {
            var p = s.model,
                t = s.controller,
                n = s.controller.idService,
                r = t.validationService,
                u = t.callContext(),
                o = ne,
                c = P,
                y = {
                    props: s,
                    validateWidget: i(function(T) {
                        s.validateWidget(s, T)
                    }, "validateWidget")
                },
                b = p,
                R = ae,
                U = re,
                S = ee();
            return E.createElement("div", s.rootNodeProperties, R(p.variables.isLoadingVar, !1, this, function() {
                return [E.createElement(oe, {
                    align: 0,
                    animate: !1,
                    visible: !0,
                    _idProps: {
                        service: n,
                        uuid: "0"
                    },
                    _widgetRecordProvider: b
                }, E.createElement(I, {
                    getOwnerSpan: i(function() {
                        return S.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: i(function() {
                        return S.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: i(function(T) {
                            t.handleError(T)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: n,
                        uuid: "1",
                        alias: "1"
                    },
                    _widgetRecordProvider: b,
                    _dependencies: []
                }))]
            }, function() {
                return []
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: i(function() {
                return {
                    codeFunction: "Callback",
                    functionKey: "95d168f9-31d0-4d2c-830d-996609f0c027",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Common.Callback",
            modelFactory: B,
            controllerFactory: M,
            getTitle: i(function() {
                return P("+WjRldAxLE2DDZlmCfDAJw#Title", "Callback")
            }, "getTitle")
        });
        return l.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, l.getJsDependencies = function() {
            return []
        }, l.getBlocks = function() {
            return [I]
        }, l
    }, "componentFactory"),
    fe = de();
export {
    M as controllerModule, B as modelModule, fe as viewModule, V as webFlowControllerModule
};