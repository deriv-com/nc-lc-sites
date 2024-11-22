import {
    a as A
} from "./_oschunk-EFUSIMB4.js";
import {
    a as T
} from "./_oschunk-Y45M2O2K.js";
import {
    a as s,
    d as b
} from "./_oschunk-27GDEXUT.js";
import {
    ia as _
} from "./_oschunk-NTQBNJ73.js";
import {
    c as d
} from "./_oschunk-DVBKI63I.js";
var w = {
        "EwaOanFJYkO6wMssllc+eA#Title": "Redirection | Deriv",
        "EwaOanFJYkO6wMssllc+eA#TitleExpression.-708286336.1": "Redirection | Deriv"
    },
    g = {
        "fr-FR": {
            translations: w,
            isRTL: !1
        }
    };

function h(u, c, O, e) {
    let r = window.location.search,
        n = new URLSearchParams(r);
    u.Code = n.get("code") || "", u.Action = n.get("action") || "", u.Lang = n.get("lang") || "", u.Token = n.get("token1") || ""
}
d(h, "default");

function v(u, c, O) {
    let e = new URLSearchParams(window.location.search);
    e.delete("code");
    let r = "signup/country-of-residence?" + e.toString();
    window.location.replace(r)
}
d(v, "default");
var t = _; {
    let c = class c extends t.Controller.BaseViewController {
        constructor(e, r, n) {
            super(e, r, n, g);
            var y = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var r = this.model,
                    n = this.controller,
                    y = this.idService;
                return t.Logger.startActiveSpan("OnInitialize", function(i) {
                    i && (i.setAttribute("code.function", "OnInitialize"), i.setAttribute("outsystems.function.key", "7c1970e4-645f-43bf-a222-5abac6b217e6"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("OnInitialize"), e = n.callContext(e)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var r = this.model,
                    n = this.controller,
                    y = this.idService;
                return t.Logger.startActiveSpan("OnReady", function(i) {
                    i && (i.setAttribute("code.function", "OnReady"), i.setAttribute("outsystems.function.key", "91f3ee53-09b2-4379-bce5-2c8c139c42a9"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("OnReady"), e = n.callContext(e);
                        var o = new t.DataTypes.VariableHolder;
                        if (o.value = t.Logger.startActiveSpan("GetURLParams", function(a) {
                                a && (a.setAttribute("code.function", "GetURLParams"), a.setAttribute("outsystems.function.key", "5aa2b169-5162-4466-800d-5453884090fa"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return n.safeExecuteJSNode(h, "GetURLParams", "OnReady", {
                                        Code: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text),
                                        Action: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text),
                                        Lang: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text),
                                        Token: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                                    }, function(l) {
                                        var f = new(n.constructor.getVariableGroupType("tradershub.MainFlow.Redirect.OnReady$getURLParamsJSResult"));
                                        return f.codeOut = t.DataConversion.JSNodeParamConverter.from(l.Code, t.DataTypes.DataTypes.Text), f.actionOut = t.DataConversion.JSNodeParamConverter.from(l.Action, t.DataTypes.DataTypes.Text), f.langOut = t.DataConversion.JSNodeParamConverter.from(l.Lang, t.DataTypes.DataTypes.Text), f.tokenOut = t.DataConversion.JSNodeParamConverter.from(l.Token, t.DataTypes.DataTypes.Text), f
                                    }, {}, {})
                                } finally {
                                    a && a.end()
                                }
                            }, 1), s.setCode(o.value.codeOut), s.setAction(o.value.actionOut), s.setLang(o.value.langOut), s.setToken(o.value.tokenOut), o.value.actionOut === "reset_password") return t.Navigation.navigateTo(t.Navigation.generateScreenURL("tradershub", "reset-password", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), e, !0);
                        if (o.value.actionOut === "payment_withdraw") return t.Navigation.navigateTo(t.Navigation.generateScreenURL("tradershub", "wallets/withdrawal", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), e, !0);
                        if (o.value.tokenOut !== "") return t.Navigation.navigateTo(t.Navigation.generateScreenURL("tradershub", "options", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), e, !0);
                        if (o.value.actionOut === "trading_platform_dxtrade_password_reset") s.settrading_platform_dxtrade_password_reset(o.value.codeOut);
                        else if (o.value.actionOut === "trading_platform_mt5_password_reset") s.settrading_platform_mt5_password_reset(o.value.codeOut);
                        else if (o.value.actionOut === "trading_platform_investor_password_reset") s.settrading_platform_investor_password_reset(o.value.codeOut);
                        else {
                            s.setAuthToken(t.BuiltinFunctions.nullTextIdentifier()), s.setSelectedResidence(t.BuiltinFunctions.nullTextIdentifier()), s.setSelectedResidenceLabel(t.BuiltinFunctions.nullTextIdentifier()), s.setSelectedCitizenship(t.BuiltinFunctions.nullTextIdentifier()), t.Logger.startActiveSpan("RedirectURLWithQueryParam", function(a) {
                                a && (a.setAttribute("code.function", "RedirectURLWithQueryParam"), a.setAttribute("outsystems.function.key", "fd858047-b79b-4d15-9725-831de69ae67c"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return n.safeExecuteJSNode(v, "RedirectURLWithQueryParam", "OnReady", null, function(l) {}, {}, {})
                                } finally {
                                    a && a.end()
                                }
                            }, 1);
                            return
                        }
                        return t.Navigation.navigateTo(t.Navigation.generateScreenURL("tradershub", "cfds/:ProductIdentifier?", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        onInitialize$Action(e) {
            var r = this.controller;
            return t.Logger.startActiveSpan("OnInitialize__proxy", function(n) {
                n && (n.setAttribute("code.function", "OnInitialize"), n.setAttribute("outsystems.function.key", "7c1970e4-645f-43bf-a222-5abac6b217e6"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onInitialize$Action, e)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var r = this.controller;
            return t.Logger.startActiveSpan("OnReady__proxy", function(n) {
                n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "91f3ee53-09b2-4379-bce5-2c8c139c42a9"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var r = this.controller,
                    n = this.model,
                    y = this.idService;
                return r.onInitialize$Action(e)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var r = this.controller,
                    n = this.model,
                    y = this.idService;
                return r.onReady$Action(e)
            }), this._onReadyEventHandler
        }
        set onReadyEventHandler(e) {
            this._onReadyEventHandler = e
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(e) {
            this._onRenderEventHandler = e
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = null), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(e) {
            this._onDestroyEventHandler = e
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(e) {
            this._onParametersChangedEventHandler = e
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(e) {
                return A.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return b.defaultTimeout
        }
    };
    d(c, "ControllerInner");
    let u = c;
    m = u, m.registerVariableGroupType("tradershub.MainFlow.Redirect.OnReady$getURLParamsJSResult", [{
        name: "Code",
        attrName: "codeOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: d(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "Action",
        attrName: "actionOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: d(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "Lang",
        attrName: "langOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: d(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "Token",
        attrName: "tokenOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: d(function() {
            return ""
        }, "defaultValue")
    }])
}
var m, L = new t.Controller.ControllerFactory(m, T);
export {
    L as a
};