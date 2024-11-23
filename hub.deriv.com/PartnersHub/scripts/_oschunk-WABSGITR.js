import {
    a as f
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
var A = {};
var r = l; {
    let s = class s extends r.Controller.BaseViewController {
        constructor(e, o, t) {
            super(e, o, t, A);
            var c = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _accountCurrencyBlockNextStepEvent$Action() {
            return this.hasOwnProperty("__accountCurrencyBlockNextStepEvent$Action") || (this.__accountCurrencyBlockNextStepEvent$Action = function(e) {
                var o = this.model,
                    t = this.controller,
                    c = this.idService;
                return r.Logger.startActiveSpan("AccountCurrencyBlockNextStepEvent", function(n) {
                    n && (n.setAttribute("code.function", "AccountCurrencyBlockNextStepEvent"), n.setAttribute("outsystems.function.key", "4cc715c4-40a8-458d-bd6a-5610fd271475"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("AccountCurrencyBlockNextStepEvent"), e = t.callContext(e), i.realSignupNextStep$Action(1, e), i.getHeaderTitle$Action(e), r.Navigation.navigateTo(r.Navigation.generateScreenURL("PartnersHub", "PersonalDetailsScreen", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__accountCurrencyBlockNextStepEvent$Action
        }
        set _accountCurrencyBlockNextStepEvent$Action(e) {
            this.__accountCurrencyBlockNextStepEvent$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var o = this.model,
                    t = this.controller,
                    c = this.idService;
                return r.Logger.startActiveSpan("OnReady", function(n) {
                    n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "94cf08ac-de35-49b2-970f-476898393b80"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e), i.useDevice$Action(e), d.setProgressBarLength(25)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _realAccountCreationLayoutScreenBasedonClickBack2$Action() {
            return this.hasOwnProperty("__realAccountCreationLayoutScreenBasedonClickBack2$Action") || (this.__realAccountCreationLayoutScreenBasedonClickBack2$Action = function(e) {
                var o = this.model,
                    t = this.controller,
                    c = this.idService;
                return r.Logger.startActiveSpan("RealAccountCreationLayoutScreenBasedonClickBack2", function(n) {
                    n && (n.setAttribute("code.function", "RealAccountCreationLayoutScreenBasedonClickBack2"), n.setAttribute("outsystems.function.key", "ee2d4378-a08f-463e-a862-33d06850aff4"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("RealAccountCreationLayoutScreenBasedonClickBack2"), e = t.callContext(e), i.realSignupPreviousStep$Action(1, e), i.getHeaderTitle$Action(e), r.Navigation.navigateTo(r.Navigation.generateScreenURL("PartnersHub", "AccountTypeScreen", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__realAccountCreationLayoutScreenBasedonClickBack2$Action
        }
        set _realAccountCreationLayoutScreenBasedonClickBack2$Action(e) {
            this.__realAccountCreationLayoutScreenBasedonClickBack2$Action = e
        }
        accountCurrencyBlockNextStepEvent$Action(e) {
            var o = this.controller;
            return r.Logger.startActiveSpan("AccountCurrencyBlockNextStepEvent__proxy", function(t) {
                t && (t.setAttribute("code.function", "AccountCurrencyBlockNextStepEvent"), t.setAttribute("outsystems.function.key", "4cc715c4-40a8-458d-bd6a-5610fd271475"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return o.safeExecuteClientAction(o._accountCurrencyBlockNextStepEvent$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var o = this.controller;
            return r.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "94cf08ac-de35-49b2-970f-476898393b80"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return o.safeExecuteClientAction(o._onReady$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        realAccountCreationLayoutScreenBasedonClickBack2$Action(e) {
            var o = this.controller;
            return r.Logger.startActiveSpan("RealAccountCreationLayoutScreenBasedonClickBack2__proxy", function(t) {
                t && (t.setAttribute("code.function", "RealAccountCreationLayoutScreenBasedonClickBack2"), t.setAttribute("outsystems.function.key", "ee2d4378-a08f-463e-a862-33d06850aff4"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
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
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var o = this.controller,
                    t = this.model,
                    c = this.idService;
                return o.onReady$Action(e)
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
                return f.default.handleError(e, this.callContext())
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
    u(s, "ControllerInner");
    let a = s;
    h = a
}
var h, k = new r.Controller.ControllerFactory(h, y);
export {
    k as a
};