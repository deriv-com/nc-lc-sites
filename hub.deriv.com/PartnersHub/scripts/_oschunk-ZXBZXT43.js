import {
    a as d
} from "./_oschunk-J6YOU2SX.js";
import {
    a as u
} from "./_oschunk-6WALBPGV.js";
import {
    p as l
} from "./_oschunk-FZ6FUHBV.js";
import {
    ia as c
} from "./_oschunk-5KJVGEL7.js";
import {
    c as s
} from "./_oschunk-QHO7QY6K.js";
var h = {};
var r = c; {
    let i = class i extends r.Controller.BaseViewController {
        constructor(e, a, t) {
            super(e, a, t, h);
            var f = this.controller;
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
                var a = this.model,
                    t = this.controller,
                    f = this.idService;
                return r.Logger.startActiveSpan("RealAccountCreationLayoutScreenBasedonClickBack2", function(n) {
                    n && (n.setAttribute("code.function", "RealAccountCreationLayoutScreenBasedonClickBack2"), n.setAttribute("outsystems.function.key", "e141c7af-107f-417c-bd74-cf9dd4c24c5b"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("RealAccountCreationLayoutScreenBasedonClickBack2"), e = t.callContext(e), r.Navigation.navigateTo(r.Navigation.generateScreenURL("PartnersHub", "EmploymentDetailsScreen", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__realAccountCreationLayoutScreenBasedonClickBack2$Action
        }
        set _realAccountCreationLayoutScreenBasedonClickBack2$Action(e) {
            this.__realAccountCreationLayoutScreenBasedonClickBack2$Action = e
        }
        realAccountCreationLayoutScreenBasedonClickBack2$Action(e) {
            var a = this.controller;
            return r.Logger.startActiveSpan("RealAccountCreationLayoutScreenBasedonClickBack2__proxy", function(t) {
                t && (t.setAttribute("code.function", "RealAccountCreationLayoutScreenBasedonClickBack2"), t.setAttribute("outsystems.function.key", "e141c7af-107f-417c-bd74-cf9dd4c24c5b"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._realAccountCreationLayoutScreenBasedonClickBack2$Action, e)
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
                return d.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return l.defaultTimeout
        }
    };
    s(i, "ControllerInner");
    let o = i;
    y = o
}
var y, b = new r.Controller.ControllerFactory(y, u);
export {
    b as a
};