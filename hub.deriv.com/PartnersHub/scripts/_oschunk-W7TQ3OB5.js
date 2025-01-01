import {
    a as h
} from "./_oschunk-Y7V2YK47.js";
import {
    a as d
} from "./_oschunk-4GXKK3IG.js";
import {
    a as u,
    q as a
} from "./_oschunk-BDI2RWOA.js";
import {
    ia as l
} from "./_oschunk-3RH6DZJJ.js";
import {
    c
} from "./_oschunk-QHO7QY6K.js";
var f = {};
var n = l; {
    let s = class s extends n.Controller.BaseViewController {
        constructor(e, o, t) {
            super(e, o, t, f);
            var A = this.controller;
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
                var o = this.model,
                    t = this.controller,
                    A = this.idService;
                return n.Logger.startActiveSpan("RealAccountCreationLayoutScreenBasedonClickBack2", function(r) {
                    r && (r.setAttribute("code.function", "RealAccountCreationLayoutScreenBasedonClickBack2"), r.setAttribute("outsystems.function.key", "9cdbf01d-7c48-4e73-a8b5-2c5483afcc4c"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("RealAccountCreationLayoutScreenBasedonClickBack2"), e = t.callContext(e), u.getRealSignupIsIDVSupported() ? (a.realSignupPreviousStep$Action(1, e), a.getHeaderTitle$Action(e), n.Navigation.navigateTo(n.Navigation.generateScreenURL("PartnersHub", "IDVScreen", {}), n.Transitions.createTransition(n.Transitions.TransitionAnimation.Default), e, !0)) : (a.realSignupPreviousStep$Action(1, e), a.getHeaderTitle$Action(e), n.Navigation.navigateTo(n.Navigation.generateScreenURL("PartnersHub", "AccountPurposeScreen", {}), n.Transitions.createTransition(n.Transitions.TransitionAnimation.Default), e, !0))
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__realAccountCreationLayoutScreenBasedonClickBack2$Action
        }
        set _realAccountCreationLayoutScreenBasedonClickBack2$Action(e) {
            this.__realAccountCreationLayoutScreenBasedonClickBack2$Action = e
        }
        realAccountCreationLayoutScreenBasedonClickBack2$Action(e) {
            var o = this.controller;
            return n.Logger.startActiveSpan("RealAccountCreationLayoutScreenBasedonClickBack2__proxy", function(t) {
                t && (t.setAttribute("code.function", "RealAccountCreationLayoutScreenBasedonClickBack2"), t.setAttribute("outsystems.function.key", "9cdbf01d-7c48-4e73-a8b5-2c5483afcc4c"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return o.safeExecuteClientAction(o._realAccountCreationLayoutScreenBasedonClickBack2$Action, e)
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
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = null), this._onReadyEventHandler
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
            return a.defaultTimeout
        }
    };
    c(s, "ControllerInner");
    let i = s;
    y = i
}
var y, b = new n.Controller.ControllerFactory(y, d);
export {
    b as a
};