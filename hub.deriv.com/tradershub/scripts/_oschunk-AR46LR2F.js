import {
    a as h
} from "./_oschunk-FF7WZDTZ.js";
import {
    a as y
} from "./_oschunk-2M7PXTSQ.js";
import {
    a as l,
    c as f
} from "./_oschunk-DOFMR6EA.js";
import {
    ia as _
} from "./_oschunk-2JKANR6M.js";
import {
    c as u
} from "./_oschunk-DVBKI63I.js";
var m = {
        "B5RGTeMzGEm12_haIDhUtA#Value.-1477898012.1": "\u0639\u0645\u0644\u0629 \u0627\u0644\u062D\u0633\u0627\u0628",
        "A4yj35UF7US2sHLuizv_8g#Title": "\u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0639\u0645\u0644\u0629 | Deriv",
        "A4yj35UF7US2sHLuizv_8g#TitleExpression.-2098612361.1": "\u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0639\u0645\u0644\u0629 | Deriv"
    },
    b = {
        "B5RGTeMzGEm12_haIDhUtA#Value.-1477898012.1": "Kontow\xE4hrung",
        "A4yj35UF7US2sHLuizv_8g#Title": "W\xE4hrungswahl | Deriv",
        "A4yj35UF7US2sHLuizv_8g#TitleExpression.-2098612361.1": "W\xE4hrungswahl | Deriv"
    },
    E = {
        "B5RGTeMzGEm12_haIDhUtA#Value.-1477898012.1": "Divisa de la Cuenta",
        "A4yj35UF7US2sHLuizv_8g#Title": "Selecci\xF3n de divisas | Deriv",
        "A4yj35UF7US2sHLuizv_8g#TitleExpression.-2098612361.1": "Selecci\xF3n de divisas | Deriv"
    },
    S = {
        "B5RGTeMzGEm12_haIDhUtA#Value.-1477898012.1": "Devise du compte",
        "A4yj35UF7US2sHLuizv_8g#Title": "S\xE9lection de la devise | Deriv",
        "A4yj35UF7US2sHLuizv_8g#TitleExpression.-2098612361.1": "S\xE9lection de la devise | Deriv"
    },
    R = {
        "B5RGTeMzGEm12_haIDhUtA#Value.-1477898012.1": "Valuta del conto",
        "A4yj35UF7US2sHLuizv_8g#Title": "Selezione della valuta | Deriv",
        "A4yj35UF7US2sHLuizv_8g#TitleExpression.-2098612361.1": "Selezione della valuta | Deriv"
    },
    C = {
        "B5RGTeMzGEm12_haIDhUtA#Value.-1477898012.1": "Waluta konta",
        "A4yj35UF7US2sHLuizv_8g#Title": "Wyb\xF3r waluty | Deriv",
        "A4yj35UF7US2sHLuizv_8g#TitleExpression.-2098612361.1": "Wyb\xF3r waluty | Deriv"
    },
    g = {
        "B5RGTeMzGEm12_haIDhUtA#Value.-1477898012.1": "Moeda da conta",
        "A4yj35UF7US2sHLuizv_8g#Title": "Escolha de moeda | Deriv",
        "A4yj35UF7US2sHLuizv_8g#TitleExpression.-2098612361.1": "Escolha de moeda | Deriv"
    },
    T = {
        "B5RGTeMzGEm12_haIDhUtA#Value.-1477898012.1": "\u0412\u0430\u043B\u044E\u0442\u0430 \u0441\u0447\u0435\u0442\u0430",
        "A4yj35UF7US2sHLuizv_8g#Title": "\u0412\u044B\u0431\u043E\u0440 \u0432\u0430\u043B\u044E\u0442\u044B | Deriv",
        "A4yj35UF7US2sHLuizv_8g#TitleExpression.-2098612361.1": "\u0412\u044B\u0431\u043E\u0440 \u0432\u0430\u043B\u044E\u0442\u044B | Deriv"
    },
    v = {
        "ar-001": {
            translations: m,
            isRTL: !0
        },
        "de-DE": {
            translations: b,
            isRTL: !1
        },
        "es-ES": {
            translations: E,
            isRTL: !1
        },
        "fr-FR": {
            translations: S,
            isRTL: !1
        },
        "it-IT": {
            translations: R,
            isRTL: !1
        },
        "pl-PL": {
            translations: C,
            isRTL: !1
        },
        "pt-PT": {
            translations: g,
            isRTL: !1
        },
        "ru-RU": {
            translations: T,
            isRTL: !1
        }
    };

function d(a, c, z) {
    cacheTrackEvents.track({
        name: "ce_real_account_signup_form",
        properties: {
            step_num: 0,
            action: "open",
            form_name: "real_account_signup_form_outsystems"
        }
    })
}
u(d, "default");
var i = _; {
    let c = class c extends i.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, v);
            var s = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _accountCurrencyBlockNextStepEvent$Action() {
            return this.hasOwnProperty("__accountCurrencyBlockNextStepEvent$Action") || (this.__accountCurrencyBlockNextStepEvent$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    s = this.idService;
                return i.Logger.startActiveSpan("AccountCurrencyBlockNextStepEvent", function(n) {
                    n && (n.setAttribute("code.function", "AccountCurrencyBlockNextStepEvent"), n.setAttribute("outsystems.function.key", "8bbbdb35-ab13-4572-8dc8-fc8859f2110f"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("AccountCurrencyBlockNextStepEvent"), e = t.callContext(e), l.setRealSignupPassedStepCount(1), i.Navigation.navigateTo(i.Navigation.generateScreenURL("tradershub", "personal-details", {}), i.Transitions.createTransition(i.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__accountCurrencyBlockNextStepEvent$Action
        }
        set _accountCurrencyBlockNextStepEvent$Action(e) {
            this.__accountCurrencyBlockNextStepEvent$Action = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    s = this.idService;
                return i.Logger.startActiveSpan("OnInitialize", function(n) {
                    n && (n.setAttribute("code.function", "OnInitialize"), n.setAttribute("outsystems.function.key", "8e508fa3-c7fa-4977-880e-e0af998775d1"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e), l.setRealSignupCurrentStep(1), l.setOnInitialPageLoad(!0)
                    } finally {
                        n && n.end()
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
                    t = this.controller,
                    s = this.idService;
                return i.Logger.startActiveSpan("OnReady", function(n) {
                    n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "da71843e-cc06-40f2-9140-691bacb7dcca"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e), i.Logger.startActiveSpan("RudderStack", function(o) {
                            o && (o.setAttribute("code.function", "RudderStack"), o.setAttribute("outsystems.function.key", "2c7e500f-f751-4d41-995f-937597bdb5cc"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(d, "RudderStack", "OnReady", null, function(H) {}, {}, {})
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
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        accountCurrencyBlockNextStepEvent$Action(e) {
            var r = this.controller;
            return i.Logger.startActiveSpan("AccountCurrencyBlockNextStepEvent__proxy", function(t) {
                t && (t.setAttribute("code.function", "AccountCurrencyBlockNextStepEvent"), t.setAttribute("outsystems.function.key", "8bbbdb35-ab13-4572-8dc8-fc8859f2110f"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._accountCurrencyBlockNextStepEvent$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onInitialize$Action(e) {
            var r = this.controller;
            return i.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "8e508fa3-c7fa-4977-880e-e0af998775d1"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onInitialize$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var r = this.controller;
            return i.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "da71843e-cc06-40f2-9140-691bacb7dcca"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    s = this.idService;
                return r.onInitialize$Action(e)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    s = this.idService;
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
                return h.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return f.defaultTimeout
        }
    };
    u(c, "ControllerInner");
    let a = c;
    A = a
}
var A, $ = new i.Controller.ControllerFactory(A, y);
export {
    $ as a
};