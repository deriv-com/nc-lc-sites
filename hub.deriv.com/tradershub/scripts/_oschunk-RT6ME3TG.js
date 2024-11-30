import {
    a as w
} from "./_oschunk-S244237N.js";
import {
    a as O
} from "./_oschunk-LHY3WMNC.js";
import {
    a as i,
    d as D
} from "./_oschunk-XMOR6XCC.js";
import {
    ia as m
} from "./_oschunk-NTQBNJ73.js";
import {
    c as l
} from "./_oschunk-DVBKI63I.js";
var b = {
        "EwaOanFJYkO6wMssllc+eA#Title": "\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062A\u0648\u062C\u064A\u0647 | Deriv",
        "EwaOanFJYkO6wMssllc+eA#TitleExpression.-708286336.1": "\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062A\u0648\u062C\u064A\u0647 | Deriv"
    },
    E = {
        "EwaOanFJYkO6wMssllc+eA#Title": "Weiterleitung | Deriv",
        "EwaOanFJYkO6wMssllc+eA#TitleExpression.-708286336.1": "Weiterleitung | Deriv"
    },
    I = {
        "EwaOanFJYkO6wMssllc+eA#Title": "Redirigiendo | Deriv",
        "EwaOanFJYkO6wMssllc+eA#TitleExpression.-708286336.1": "Redirigiendo | Deriv"
    },
    k = {
        "EwaOanFJYkO6wMssllc+eA#Title": "Redirection | Deriv",
        "EwaOanFJYkO6wMssllc+eA#TitleExpression.-708286336.1": "Redirection | Deriv"
    },
    C = {
        "EwaOanFJYkO6wMssllc+eA#Title": "Reindirizzamento | Deriv",
        "EwaOanFJYkO6wMssllc+eA#TitleExpression.-708286336.1": "Reindirizzamento | Deriv"
    },
    R = {
        "EwaOanFJYkO6wMssllc+eA#Title": "Przekierowanie | Deriv",
        "EwaOanFJYkO6wMssllc+eA#TitleExpression.-708286336.1": "Przekierowanie | Deriv"
    },
    N = {
        "EwaOanFJYkO6wMssllc+eA#Title": "Reencaminhamento | Deriv",
        "EwaOanFJYkO6wMssllc+eA#TitleExpression.-708286336.1": "Reencaminhamento | Deriv"
    },
    F = {
        "EwaOanFJYkO6wMssllc+eA#Title": "\u041F\u0435\u0440\u0435\u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 | Deriv",
        "EwaOanFJYkO6wMssllc+eA#TitleExpression.-708286336.1": "\u041F\u0435\u0440\u0435\u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 | Deriv"
    },
    p = {
        "ar-001": {
            translations: b,
            isRTL: !0
        },
        "de-DE": {
            translations: E,
            isRTL: !1
        },
        "es-ES": {
            translations: I,
            isRTL: !1
        },
        "fr-FR": {
            translations: k,
            isRTL: !1
        },
        "it-IT": {
            translations: C,
            isRTL: !1
        },
        "pl-PL": {
            translations: R,
            isRTL: !1
        },
        "pt-PT": {
            translations: N,
            isRTL: !1
        },
        "ru-RU": {
            translations: F,
            isRTL: !1
        }
    };

function y(u, v, g, t) {
    var a;
    let T = window.location.search,
        n = new URLSearchParams(T),
        f, o;
    if (n.has("token1") && n.has("acct1")) {
        let r = {},
            d = {},
            c = {};
        for (let s of n) s[0].startsWith("acct") ? (!f && (s[1].startsWith("VRW") || s[1].startsWith("CRW")) ? f = s[1] : !o && s[1].startsWith("CR") && (o = s[1]), d[s[0]] = s[1]) : s[0].startsWith("token") && (c[s[0]] = s[1]);
        Object.keys(d).forEach(s => {
            let A = "token" + s.slice(4);
            r[d[s]] = {
                token: c[A]
            }
        }), localStorage.setItem("accountsList", JSON.stringify(r)), localStorage.setItem("client.accounts", JSON.stringify(r)), u.LoginIDTokenPairs = JSON.stringify(r), u.LoginID = o != null ? o : "", u.AuthToken = (a = n.get("token1")) != null ? a : "", u.WalletLoginId = f != null ? f : ""
    }
    u.Code = n.get("code") || "", u.Action = n.get("action") || "", u.Lang = n.get("lang") || "", u.Token = n.get("token1") || ""
}
l(y, "default");

function h(u, v, g) {
    let t = new URLSearchParams(window.location.search);
    t.delete("code");
    let T = "signup/country-of-residence?" + t.toString();
    window.location.replace(T)
}
l(h, "default");
var e = m; {
    let v = class v extends e.Controller.BaseViewController {
        constructor(t, T, n) {
            super(t, T, n, p);
            var f = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(t) {
                var T = this.model,
                    n = this.controller,
                    f = this.idService;
                return e.Logger.startActiveSpan("OnInitialize", function(o) {
                    o && (o.setAttribute("code.function", "OnInitialize"), o.setAttribute("outsystems.function.key", "91f3ee53-09b2-4379-bce5-2c8c139c42a9"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("OnInitialize"), t = n.callContext(t);
                        var a = new e.DataTypes.VariableHolder;
                        if (a.value = e.Logger.startActiveSpan("GetURLParams", function(r) {
                                r && (r.setAttribute("code.function", "GetURLParams"), r.setAttribute("outsystems.function.key", "5aa2b169-5162-4466-800d-5453884090fa"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return n.safeExecuteJSNode(y, "GetURLParams", "OnInitialize", {
                                        Code: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                        Action: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                        Lang: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                        Token: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                        WalletLoginId: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                        LoginID: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                        AuthToken: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                        LoginIDTokenPairs: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                                    }, function(d) {
                                        var c = new(n.constructor.getVariableGroupType("tradershub.MainFlow.Redirect.OnInitialize$getURLParamsJSResult"));
                                        return c.codeOut = e.DataConversion.JSNodeParamConverter.from(d.Code, e.DataTypes.DataTypes.Text), c.actionOut = e.DataConversion.JSNodeParamConverter.from(d.Action, e.DataTypes.DataTypes.Text), c.langOut = e.DataConversion.JSNodeParamConverter.from(d.Lang, e.DataTypes.DataTypes.Text), c.tokenOut = e.DataConversion.JSNodeParamConverter.from(d.Token, e.DataTypes.DataTypes.Text), c.walletLoginIdOut = e.DataConversion.JSNodeParamConverter.from(d.WalletLoginId, e.DataTypes.DataTypes.Text), c.loginIDOut = e.DataConversion.JSNodeParamConverter.from(d.LoginID, e.DataTypes.DataTypes.Text), c.authTokenOut = e.DataConversion.JSNodeParamConverter.from(d.AuthToken, e.DataTypes.DataTypes.Text), c.loginIDTokenPairsOut = e.DataConversion.JSNodeParamConverter.from(d.LoginIDTokenPairs, e.DataTypes.DataTypes.Text), c
                                    }, {}, {})
                                } finally {
                                    r && r.end()
                                }
                            }, 1), i.setCode(a.value.codeOut), i.setAction(a.value.actionOut), i.setLang(a.value.langOut), i.setToken(a.value.tokenOut), a.value.actionOut === "signup") i.setAuthToken(e.BuiltinFunctions.nullTextIdentifier()), i.setSelectedResidence(e.BuiltinFunctions.nullTextIdentifier()), i.setSelectedResidenceLabel(e.BuiltinFunctions.nullTextIdentifier()), i.setSelectedCitizenship(e.BuiltinFunctions.nullTextIdentifier()), e.Logger.startActiveSpan("RedirectURLWithQueryParam", function(r) {
                            r && (r.setAttribute("code.function", "RedirectURLWithQueryParam"), r.setAttribute("outsystems.function.key", "d756ed6b-7408-4ce2-a1ed-b033076ff594"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return n.safeExecuteJSNode(h, "RedirectURLWithQueryParam", "OnInitialize", null, function(d) {}, {}, {})
                            } finally {
                                r && r.end()
                            }
                        }, 1);
                        else {
                            if (i.setActiveLoginId(a.value.loginIDOut), i.setAuthToken(a.value.authTokenOut), i.setActiveWalletLoginId(a.value.walletLoginIdOut), i.setIsWallet(!0), a.value.authTokenOut !== e.BuiltinFunctions.nullTextIdentifier()) return e.Navigation.navigateTo(e.Navigation.generateScreenURL("tradershub", "cfds/:ProductIdentifier?", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), t, !0);
                            if (a.value.actionOut === "reset_password") return e.Navigation.navigateTo(e.Navigation.generateScreenURL("tradershub", "reset-password", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), t, !0);
                            if (a.value.actionOut === "payment_withdraw") return e.Navigation.navigateTo(e.Navigation.generateScreenURL("tradershub", "wallets/withdrawal", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), t, !0);
                            if (a.value.tokenOut !== "") return e.Navigation.navigateTo(e.Navigation.generateScreenURL("tradershub", "cfds/:ProductIdentifier?", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), t, !0);
                            if (a.value.actionOut === "trading_platform_dxtrade_password_reset") i.settrading_platform_dxtrade_password_reset(a.value.codeOut);
                            else if (a.value.actionOut === "trading_platform_mt5_password_reset") i.settrading_platform_mt5_password_reset(a.value.codeOut);
                            else if (a.value.actionOut === "trading_platform_investor_password_reset") i.settrading_platform_investor_password_reset(a.value.codeOut);
                            else return;
                            return e.Navigation.navigateTo(e.Navigation.generateScreenURL("tradershub", "cfds/:ProductIdentifier?", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), t, !0)
                        }
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(t) {
            this.__onInitialize$Action = t
        }
        onInitialize$Action(t) {
            var T = this.controller;
            return e.Logger.startActiveSpan("OnInitialize__proxy", function(n) {
                n && (n.setAttribute("code.function", "OnInitialize"), n.setAttribute("outsystems.function.key", "91f3ee53-09b2-4379-bce5-2c8c139c42a9"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return T.safeExecuteClientAction(T._onInitialize$Action, t)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(t) {
                var T = this.controller,
                    n = this.model,
                    f = this.idService;
                return T.onInitialize$Action(t)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(t) {
            this._onInitializeEventHandler = t
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = null), this._onReadyEventHandler
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
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(t) {
                return w.default.handleError(t, this.callContext())
            }), this._handleError
        }
        set handleError(t) {
            this._handleError = t
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return D.defaultTimeout
        }
    };
    l(v, "ControllerInner");
    let u = v;
    _ = u, _.registerVariableGroupType("tradershub.MainFlow.Redirect.OnInitialize$getURLParamsJSResult", [{
        name: "Code",
        attrName: "codeOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "Action",
        attrName: "actionOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "Lang",
        attrName: "langOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "Token",
        attrName: "tokenOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "WalletLoginId",
        attrName: "walletLoginIdOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "LoginID",
        attrName: "loginIDOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "AuthToken",
        attrName: "authTokenOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "LoginIDTokenPairs",
        attrName: "loginIDTokenPairsOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }])
}
var _, Q = new e.Controller.ControllerFactory(_, O);
export {
    Q as a
};