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
    ia as l
} from "./_oschunk-5KJVGEL7.js";
import {
    c as u
} from "./_oschunk-QHO7QY6K.js";
var f = {};
var o = l; {
    let c = class c extends o.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, f);
            var s = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _realAccountCreationLayoutScreenBasedonClickBack2$Action() {
            return this.hasOwnProperty("__realAccountCreationLayoutScreenBasedonClickBack2$Action") || (this.__realAccountCreationLayoutScreenBasedonClickBack2$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    s = this.idService;
                return o.Logger.startActiveSpan("RealAccountCreationLayoutScreenBasedonClickBack2", function(n) {
                    n && (n.setAttribute("code.function", "RealAccountCreationLayoutScreenBasedonClickBack2"), n.setAttribute("outsystems.function.key", "3c8f5da6-727b-4dd5-9350-3a05728ec4c2"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("RealAccountCreationLayoutScreenBasedonClickBack2"), e = t.callContext(e), i.realSignupPreviousStep$Action(1, e), i.getHeaderTitle$Action(e), o.Navigation.navigateTo(o.Navigation.generateScreenURL("PartnersHub", "AddressDetailsScreen", {}), o.Transitions.createTransition(o.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__realAccountCreationLayoutScreenBasedonClickBack2$Action
        }
        set _realAccountCreationLayoutScreenBasedonClickBack2$Action(e) {
            this.__realAccountCreationLayoutScreenBasedonClickBack2$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    s = this.idService;
                return o.Logger.startActiveSpan("OnReady", function(n) {
                    n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "f02f37dc-43c0-4dd4-9ee2-ac5c16c8831f"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e), i.useDevice$Action(e), d.setProgressBarLength(85)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        realAccountCreationLayoutScreenBasedonClickBack2$Action(e) {
            var r = this.controller;
            return o.Logger.startActiveSpan("RealAccountCreationLayoutScreenBasedonClickBack2__proxy", function(t) {
                t && (t.setAttribute("code.function", "RealAccountCreationLayoutScreenBasedonClickBack2"), t.setAttribute("outsystems.function.key", "3c8f5da6-727b-4dd5-9350-3a05728ec4c2"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._realAccountCreationLayoutScreenBasedonClickBack2$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var r = this.controller;
            return o.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "f02f37dc-43c0-4dd4-9ee2-ac5c16c8831f"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
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
            return i.defaultTimeout
        }
    };
    u(c, "ControllerInner");
    let a = c;
    A = a
}
var A, R = new o.Controller.ControllerFactory(A, y);
export {
    R as a
};