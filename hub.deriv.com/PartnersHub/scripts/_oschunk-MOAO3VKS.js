import {
    a as A
} from "./_oschunk-Y7V2YK47.js";
import {
    a as y
} from "./_oschunk-4GXKK3IG.js";
import {
    a as d,
    q as i
} from "./_oschunk-BDI2RWOA.js";
import {
    ia as u
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as l
} from "./_oschunk-QHO7QY6K.js";
var f = {};
var r = u; {
    let c = class c extends r.Controller.BaseViewController {
        constructor(e, o, t) {
            super(e, o, t, f);
            var a = this.controller;
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
                    a = this.idService;
                return r.Logger.startActiveSpan("RealAccountCreationLayoutScreenBasedonClickBack2", function(n) {
                    n && (n.setAttribute("code.function", "RealAccountCreationLayoutScreenBasedonClickBack2"), n.setAttribute("outsystems.function.key", "2cc2e58f-05d1-42b8-97da-826009904e4e"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("RealAccountCreationLayoutScreenBasedonClickBack2"), e = t.callContext(e), i.realSignupPreviousStep$Action(1, e), i.getHeaderTitle$Action(e), r.Navigation.navigateTo(r.Navigation.generateScreenURL("PartnersHub", "AccountCurrencyScreen", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default), e, !0)
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
                var o = this.model,
                    t = this.controller,
                    a = this.idService;
                return r.Logger.startActiveSpan("OnReady", function(n) {
                    n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "9ad9065b-6157-4145-9071-ac08d756d111"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e), i.useDevice$Action(e), d.setProgressBarLength(37)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _personalDetailsBlockOnClickNextStep$Action() {
            return this.hasOwnProperty("__personalDetailsBlockOnClickNextStep$Action") || (this.__personalDetailsBlockOnClickNextStep$Action = function(e) {
                var o = this.model,
                    t = this.controller,
                    a = this.idService;
                return r.Logger.startActiveSpan("PersonalDetailsBlockOnClickNextStep", function(n) {
                    n && (n.setAttribute("code.function", "PersonalDetailsBlockOnClickNextStep"), n.setAttribute("outsystems.function.key", "e2076e1d-03ee-42ac-ab71-bb787e374a4c"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("PersonalDetailsBlockOnClickNextStep"), e = t.callContext(e), r.Navigation.navigateTo(r.Navigation.generateScreenURL("PartnersHub", "PlaceOfBirthScreen", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__personalDetailsBlockOnClickNextStep$Action
        }
        set _personalDetailsBlockOnClickNextStep$Action(e) {
            this.__personalDetailsBlockOnClickNextStep$Action = e
        }
        realAccountCreationLayoutScreenBasedonClickBack2$Action(e) {
            var o = this.controller;
            return r.Logger.startActiveSpan("RealAccountCreationLayoutScreenBasedonClickBack2__proxy", function(t) {
                t && (t.setAttribute("code.function", "RealAccountCreationLayoutScreenBasedonClickBack2"), t.setAttribute("outsystems.function.key", "2cc2e58f-05d1-42b8-97da-826009904e4e"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return o.safeExecuteClientAction(o._realAccountCreationLayoutScreenBasedonClickBack2$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var o = this.controller;
            return r.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "9ad9065b-6157-4145-9071-ac08d756d111"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return o.safeExecuteClientAction(o._onReady$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        personalDetailsBlockOnClickNextStep$Action(e) {
            var o = this.controller;
            return r.Logger.startActiveSpan("PersonalDetailsBlockOnClickNextStep__proxy", function(t) {
                t && (t.setAttribute("code.function", "PersonalDetailsBlockOnClickNextStep"), t.setAttribute("outsystems.function.key", "e2076e1d-03ee-42ac-ab71-bb787e374a4c"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return o.safeExecuteClientAction(o._personalDetailsBlockOnClickNextStep$Action, e)
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
                    a = this.idService;
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
                return A.default.handleError(e, this.callContext())
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
    l(c, "ControllerInner");
    let s = c;
    h = s
}
var h, S = new r.Controller.ControllerFactory(h, y);
export {
    S as a
};