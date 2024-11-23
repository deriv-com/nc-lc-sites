import {
    a as h
} from "./_oschunk-YFNTRMC5.js";
import {
    a as y
} from "./_oschunk-6WALBPGV.js";
import {
    a as d,
    p as i
} from "./_oschunk-DW3HXDMW.js";
import {
    ia as u
} from "./_oschunk-5KJVGEL7.js";
import {
    c as l
} from "./_oschunk-QHO7QY6K.js";
var v = {};
var o = u; {
    let c = class c extends o.Controller.BaseViewController {
        constructor(t, r, e) {
            super(t, r, e, v);
            var s = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _accountTypeBlockOnClickEvent$Action() {
            return this.hasOwnProperty("__accountTypeBlockOnClickEvent$Action") || (this.__accountTypeBlockOnClickEvent$Action = function(t) {
                var r = this.model,
                    e = this.controller,
                    s = this.idService;
                return o.Logger.startActiveSpan("AccountTypeBlockOnClickEvent", function(n) {
                    n && (n.setAttribute("code.function", "AccountTypeBlockOnClickEvent"), n.setAttribute("outsystems.function.key", "0cb7253d-1656-4cd3-b152-ad97072ad7dd"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return e.ensureControllerAlive("AccountTypeBlockOnClickEvent"), t = e.callContext(t), i.realSignupNextStep$Action(1, t), i.getHeaderTitle$Action(t), o.Navigation.navigateTo(o.Navigation.generateScreenURL("PartnersHub", "AccountCurrencyScreen", {}), o.Transitions.createTransition(o.Transitions.TransitionAnimation.Default), t, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__accountTypeBlockOnClickEvent$Action
        }
        set _accountTypeBlockOnClickEvent$Action(t) {
            this.__accountTypeBlockOnClickEvent$Action = t
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(t) {
                var r = this.model,
                    e = this.controller,
                    s = this.idService;
                return o.Logger.startActiveSpan("OnReady", function(n) {
                    n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "349c252d-1c7c-42b9-a911-139ec673b078"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnReady"), t = e.callContext(t), i.useDevice$Action(t), d.setProgressBarLength(12)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(t) {
            this.__onReady$Action = t
        }
        accountTypeBlockOnClickEvent$Action(t) {
            var r = this.controller;
            return o.Logger.startActiveSpan("AccountTypeBlockOnClickEvent__proxy", function(e) {
                e && (e.setAttribute("code.function", "AccountTypeBlockOnClickEvent"), e.setAttribute("outsystems.function.key", "0cb7253d-1656-4cd3-b152-ad97072ad7dd"), e.setAttribute("outsystems.function.owner.name", "PartnersHub"), e.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._accountTypeBlockOnClickEvent$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onReady$Action(t) {
            var r = this.controller;
            return o.Logger.startActiveSpan("OnReady__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnReady"), e.setAttribute("outsystems.function.key", "349c252d-1c7c-42b9-a911-139ec673b078"), e.setAttribute("outsystems.function.owner.name", "PartnersHub"), e.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onReady$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(t) {
            this._onInitializeEventHandler = t
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(t) {
                var r = this.controller,
                    e = this.model,
                    s = this.idService;
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
                return h.default.handleError(t, this.callContext())
            }), this._handleError
        }
        set handleError(t) {
            this._handleError = t
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return i.defaultTimeout
        }
    };
    l(c, "ControllerInner");
    let a = c;
    f = a
}
var f, R = new o.Controller.ControllerFactory(f, y);
export {
    R as a
};