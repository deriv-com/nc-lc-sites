import {
    a as _
} from "./_oschunk-26LPX23H.js";
import {
    a as h
} from "./_oschunk-2M7PXTSQ.js";
import {
    a as l,
    c as u
} from "./_oschunk-DOFMR6EA.js";
import {
    ia as d
} from "./_oschunk-2JKANR6M.js";
import {
    c
} from "./_oschunk-DVBKI63I.js";
var y = {
        "Q+6JEND1sUWZxl+vshlRcQ#Title": "\u0627\u0644\u0645\u062D\u0627\u0641\u0638",
        "Q+6JEND1sUWZxl+vshlRcQ#TitleExpression.-1511472262.1": "\u0627\u0644\u0645\u062D\u0627\u0641\u0638"
    },
    E = {
        "Q+6JEND1sUWZxl+vshlRcQ#Title": "Wallets",
        "Q+6JEND1sUWZxl+vshlRcQ#TitleExpression.-1511472262.1": "Wallets"
    },
    b = {
        "Q+6JEND1sUWZxl+vshlRcQ#Title": "Billeteras",
        "Q+6JEND1sUWZxl+vshlRcQ#TitleExpression.-1511472262.1": "Billeteras"
    },
    m = {
        "Q+6JEND1sUWZxl+vshlRcQ#Title": "Portafogli",
        "Q+6JEND1sUWZxl+vshlRcQ#TitleExpression.-1511472262.1": "Portafogli"
    },
    A = {
        "Q+6JEND1sUWZxl+vshlRcQ#Title": "Portfele",
        "Q+6JEND1sUWZxl+vshlRcQ#TitleExpression.-1511472262.1": "Portfele"
    },
    R = {
        "Q+6JEND1sUWZxl+vshlRcQ#Title": "Wallets",
        "Q+6JEND1sUWZxl+vshlRcQ#TitleExpression.-1511472262.1": "Wallets"
    },
    f = {
        "ar-001": {
            translations: y,
            isRTL: !0
        },
        "de-DE": {
            translations: E,
            isRTL: !1
        },
        "es-ES": {
            translations: b,
            isRTL: !1
        },
        "it-IT": {
            translations: m,
            isRTL: !1
        },
        "pl-PL": {
            translations: A,
            isRTL: !1
        },
        "pt-PT": {
            translations: R,
            isRTL: !1
        }
    };
var i = d; {
    let a = class a extends i.Controller.BaseViewController {
        constructor(t, r, e) {
            super(t, r, e, f);
            var o = this.controller;
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
                var r = this.model,
                    e = this.controller,
                    o = this.idService;
                return i.Logger.startActiveSpan("OnInitialize", function(n) {
                    n && (n.setAttribute("code.function", "OnInitialize"), n.setAttribute("outsystems.function.key", "105b5f6d-e251-4a1d-82bb-64311854d4f0"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        if (e.ensureControllerAlive("OnInitialize"), t = e.callContext(t), l.getAuthToken() === i.BuiltinFunctions.nullTextIdentifier()) return i.Navigation.navigateTo(i.Navigation.generateScreenURL("tradershub", "cfds", {}), i.Transitions.createTransition(i.Transitions.TransitionAnimation.Default), t, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(t) {
            this.__onInitialize$Action = t
        }
        get _syncData$Action() {
            return this.hasOwnProperty("__syncData$Action") || (this.__syncData$Action = function(t) {
                var r = this.model,
                    e = this.controller,
                    o = this.idService;
                return i.Logger.startActiveSpan("SyncData", function(n) {
                    n && (n.setAttribute("code.function", "SyncData"), n.setAttribute("outsystems.function.key", "b01753b2-adb7-44d4-b3cd-daa7aa703aa9"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("SyncData"), t = e.callContext(t), r.variables.activeLoginIdVar = l.getActiveWalletLoginId()
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__syncData$Action
        }
        set _syncData$Action(t) {
            this.__syncData$Action = t
        }
        onInitialize$Action(t) {
            var r = this.controller;
            return i.Logger.startActiveSpan("OnInitialize__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnInitialize"), e.setAttribute("outsystems.function.key", "105b5f6d-e251-4a1d-82bb-64311854d4f0"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onInitialize$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        syncData$Action(t) {
            var r = this.controller;
            return i.Logger.startActiveSpan("SyncData__proxy", function(e) {
                e && (e.setAttribute("code.function", "SyncData"), e.setAttribute("outsystems.function.key", "b01753b2-adb7-44d4-b3cd-daa7aa703aa9"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._syncData$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(t) {
                var r = this.controller,
                    e = this.model,
                    o = this.idService;
                return r.onInitialize$Action(t)
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
            return u.defaultTimeout
        }
    };
    c(a, "ControllerInner");
    let s = a;
    v = s
}
var v, C = new i.Controller.ControllerFactory(v, h);
export {
    C as a
};