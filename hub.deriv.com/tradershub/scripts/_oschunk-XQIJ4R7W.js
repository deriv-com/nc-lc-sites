import {
    a as _
} from "./_oschunk-ILTRYJXV.js";
import {
    a as h
} from "./_oschunk-Y45M2O2K.js";
import {
    a as d,
    d as y
} from "./_oschunk-27GDEXUT.js";
import {
    ia as f
} from "./_oschunk-NTQBNJ73.js";
import {
    c as u
} from "./_oschunk-DVBKI63I.js";
var b = {
        "A4yj35UF7US2sHLuizv_8g#Title": "S\xE9lection de la devise | Deriv",
        "A4yj35UF7US2sHLuizv_8g#TitleExpression.-2098612361.1": "S\xE9lection de la devise | Deriv"
    },
    A = {
        "fr-FR": {
            translations: b,
            isRTL: !1
        }
    };

function l(s, a, m) {
    cacheTrackEvents.track({
        name: "ce_real_account_signup_form",
        properties: {
            step_num: 0,
            action: "open",
            form_name: "real_account_signup_form_outsystems"
        }
    })
}
u(l, "default");
var i = f; {
    let a = class a extends i.Controller.BaseViewController {
        constructor(t, r, e) {
            super(t, r, e, A);
            var c = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _accountCurrencyBlockNextStepEvent$Action() {
            return this.hasOwnProperty("__accountCurrencyBlockNextStepEvent$Action") || (this.__accountCurrencyBlockNextStepEvent$Action = function(t) {
                var r = this.model,
                    e = this.controller,
                    c = this.idService;
                return i.Logger.startActiveSpan("AccountCurrencyBlockNextStepEvent", function(n) {
                    n && (n.setAttribute("code.function", "AccountCurrencyBlockNextStepEvent"), n.setAttribute("outsystems.function.key", "8bbbdb35-ab13-4572-8dc8-fc8859f2110f"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return e.ensureControllerAlive("AccountCurrencyBlockNextStepEvent"), t = e.callContext(t), d.setRealSignupPassedStepCount(1), i.Navigation.navigateTo(i.Navigation.generateScreenURL("tradershub", "personal-details", {}), i.Transitions.createTransition(i.Transitions.TransitionAnimation.Default), t, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__accountCurrencyBlockNextStepEvent$Action
        }
        set _accountCurrencyBlockNextStepEvent$Action(t) {
            this.__accountCurrencyBlockNextStepEvent$Action = t
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(t) {
                var r = this.model,
                    e = this.controller,
                    c = this.idService;
                return i.Logger.startActiveSpan("OnInitialize", function(n) {
                    n && (n.setAttribute("code.function", "OnInitialize"), n.setAttribute("outsystems.function.key", "8e508fa3-c7fa-4977-880e-e0af998775d1"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnInitialize"), t = e.callContext(t), d.setRealSignupCurrentStep(1)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(t) {
            this.__onInitialize$Action = t
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(t) {
                var r = this.model,
                    e = this.controller,
                    c = this.idService;
                return i.Logger.startActiveSpan("OnReady", function(n) {
                    n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "da71843e-cc06-40f2-9140-691bacb7dcca"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnReady"), t = e.callContext(t), i.Logger.startActiveSpan("RudderStack", function(o) {
                            o && (o.setAttribute("code.function", "RudderStack"), o.setAttribute("outsystems.function.key", "2c7e500f-f751-4d41-995f-937597bdb5cc"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(l, "RudderStack", "OnReady", null, function(E) {}, {}, {})
                            } finally {
                                o && o.end()
                            }
                        }, 1)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(t) {
            this.__onReady$Action = t
        }
        accountCurrencyBlockNextStepEvent$Action(t) {
            var r = this.controller;
            return i.Logger.startActiveSpan("AccountCurrencyBlockNextStepEvent__proxy", function(e) {
                e && (e.setAttribute("code.function", "AccountCurrencyBlockNextStepEvent"), e.setAttribute("outsystems.function.key", "8bbbdb35-ab13-4572-8dc8-fc8859f2110f"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._accountCurrencyBlockNextStepEvent$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onInitialize$Action(t) {
            var r = this.controller;
            return i.Logger.startActiveSpan("OnInitialize__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnInitialize"), e.setAttribute("outsystems.function.key", "8e508fa3-c7fa-4977-880e-e0af998775d1"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onInitialize$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onReady$Action(t) {
            var r = this.controller;
            return i.Logger.startActiveSpan("OnReady__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnReady"), e.setAttribute("outsystems.function.key", "da71843e-cc06-40f2-9140-691bacb7dcca"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onReady$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(t) {
                var r = this.controller,
                    e = this.model,
                    c = this.idService;
                return r.onInitialize$Action(t)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(t) {
            this._onInitializeEventHandler = t
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(t) {
                var r = this.controller,
                    e = this.model,
                    c = this.idService;
                return r.onReady$Action(t)
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
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(t) {
                return _.default.handleError(t, this.callContext())
            }), this._handleError
        }
        set handleError(t) {
            this._handleError = t
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return y.defaultTimeout
        }
    };
    u(a, "ControllerInner");
    let s = a;
    v = s
}
var v, w = new i.Controller.ControllerFactory(v, h);
export {
    w as a
};