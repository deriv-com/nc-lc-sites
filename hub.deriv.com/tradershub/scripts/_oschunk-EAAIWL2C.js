import {
    a as _
} from "./_oschunk-S244237N.js";
import {
    a as h
} from "./_oschunk-LHY3WMNC.js";
import {
    d as s
} from "./_oschunk-XMOR6XCC.js";
import {
    ia as d
} from "./_oschunk-NTQBNJ73.js";
import {
    c
} from "./_oschunk-DVBKI63I.js";
var E = {
        "3HINaGK4+EaJbhMsruccCw#Value": "\u062D\u0633\u0627\u0628"
    },
    m = {
        "3HINaGK4+EaJbhMsruccCw#Value": "Konto"
    },
    b = {
        "3HINaGK4+EaJbhMsruccCw#Value": "Cuenta"
    },
    A = {
        "3HINaGK4+EaJbhMsruccCw#Value": "Compte"
    },
    y = {
        "3HINaGK4+EaJbhMsruccCw#Value": "Conto"
    },
    H = {
        "3HINaGK4+EaJbhMsruccCw#Value": "Konto"
    },
    R = {
        "3HINaGK4+EaJbhMsruccCw#Value": "Conta"
    },
    w = {
        "3HINaGK4+EaJbhMsruccCw#Value": "\u0423\u0447\u0435\u0442\u043D\u0430\u044F \u0437\u0430\u043F\u0438\u0441\u044C"
    },
    v = {
        "ar-001": {
            translations: E,
            isRTL: !0
        },
        "de-DE": {
            translations: m,
            isRTL: !1
        },
        "es-ES": {
            translations: b,
            isRTL: !1
        },
        "fr-FR": {
            translations: A,
            isRTL: !1
        },
        "it-IT": {
            translations: y,
            isRTL: !1
        },
        "pl-PL": {
            translations: H,
            isRTL: !1
        },
        "pt-PT": {
            translations: R,
            isRTL: !1
        },
        "ru-RU": {
            translations: w,
            isRTL: !1
        }
    };
var n = d; {
    let o = class o extends n.Controller.BaseViewController {
        constructor(t, a, e) {
            super(t, a, e, v);
            var l = this.controller;
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
                var a = this.model,
                    e = this.controller,
                    l = this.idService;
                return n.Logger.startActiveSpan("OnInitialize", function(r) {
                    r && (r.setAttribute("code.function", "OnInitialize"), r.setAttribute("outsystems.function.key", "ab941d9b-5a21-41b6-a14a-232e310adc35"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnInitialize"), t = e.callContext(t);
                        var u = new n.DataTypes.VariableHolder;
                        if (u.value = s.featureFlagValueByName$Action("Options", t), !u.value.isEnabledOut) return n.Navigation.navigateTo(n.Navigation.generateScreenURL("https://app.deriv.com", {}), n.Transitions.createTransition(n.Transitions.TransitionAnimation.Default), t, !0)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(t) {
            this.__onInitialize$Action = t
        }
        onInitialize$Action(t) {
            var a = this.controller;
            return n.Logger.startActiveSpan("OnInitialize__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnInitialize"), e.setAttribute("outsystems.function.key", "ab941d9b-5a21-41b6-a14a-232e310adc35"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._onInitialize$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(t) {
                var a = this.controller,
                    e = this.model,
                    l = this.idService;
                return a.onInitialize$Action(t)
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
                return _.default.handleError(t, this.callContext())
            }), this._handleError
        }
        set handleError(t) {
            this._handleError = t
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return s.defaultTimeout
        }
    };
    c(o, "ControllerInner");
    let i = o;
    f = i
}
var f, O = new n.Controller.ControllerFactory(f, h);
export {
    O as a
};