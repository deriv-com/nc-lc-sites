import {
    a as _
} from "./_oschunk-Y7V2YK47.js";
import {
    a as b
} from "./_oschunk-4GXKK3IG.js";
import {
    a as h,
    q as y
} from "./_oschunk-BDI2RWOA.js";
import {
    ia as f
} from "./_oschunk-3RH6DZJJ.js";
import {
    c
} from "./_oschunk-QHO7QY6K.js";
var v = {};
var n = f; {
    let l = class l extends n.Controller.BaseViewController {
        constructor(t, i, e) {
            super(t, i, e, v);
            var r = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _statesListOnClickCountry$Action() {
            return this.hasOwnProperty("__statesListOnClickCountry$Action") || (this.__statesListOnClickCountry$Action = function(t, i) {
                var e = this.model,
                    r = this.controller,
                    o = this.idService;
                return n.Logger.startActiveSpan("StatesListOnClickCountry", function(a) {
                    a && (a.setAttribute("code.function", "StatesListOnClickCountry"), a.setAttribute("outsystems.function.key", "43480fd5-9c96-466d-af25-77c2b7f1ac9c"), a.setAttribute("outsystems.function.owner.name", "PartnersHub"), a.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("StatesListOnClickCountry"), i = r.callContext(i);
                        var d = new n.DataTypes.VariableHolder(new(r.constructor.getVariableGroupType("PartnersHub.RealAccountCreation.StatesListScreenMobile.StatesListOnClickCountry$vars")));
                        return d.value.selectedStateInLocal = t, h.setRealSignupStateProvince(d.value.selectedStateInLocal), n.Navigation.navigateTo(n.Navigation.generateScreenURL("PartnersHub", "AddressDetailsScreen", {}), n.Transitions.createTransition(n.Transitions.TransitionAnimation.Default), i, !0)
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__statesListOnClickCountry$Action
        }
        set _statesListOnClickCountry$Action(t) {
            this.__statesListOnClickCountry$Action = t
        }
        get _fullScreenMobileModalOnBack$Action() {
            return this.hasOwnProperty("__fullScreenMobileModalOnBack$Action") || (this.__fullScreenMobileModalOnBack$Action = function(t) {
                var i = this.model,
                    e = this.controller,
                    r = this.idService;
                return n.Logger.startActiveSpan("FullScreenMobileModalOnBack", function(o) {
                    o && (o.setAttribute("code.function", "FullScreenMobileModalOnBack"), o.setAttribute("outsystems.function.key", "7283c098-7dd2-4c7b-ae04-fab61558dbca"), o.setAttribute("outsystems.function.owner.name", "PartnersHub"), o.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return e.ensureControllerAlive("FullScreenMobileModalOnBack"), t = e.callContext(t), n.Navigation.navigateTo(n.Navigation.generateScreenURL("PartnersHub", "AddressDetailsScreen", {}), n.Transitions.createTransition(n.Transitions.TransitionAnimation.Default), t, !0)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__fullScreenMobileModalOnBack$Action
        }
        set _fullScreenMobileModalOnBack$Action(t) {
            this.__fullScreenMobileModalOnBack$Action = t
        }
        statesListOnClickCountry$Action(t, i) {
            var e = this.controller;
            return n.Logger.startActiveSpan("StatesListOnClickCountry__proxy", function(r) {
                r && (r.setAttribute("code.function", "StatesListOnClickCountry"), r.setAttribute("outsystems.function.key", "43480fd5-9c96-466d-af25-77c2b7f1ac9c"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._statesListOnClickCountry$Action, i, t)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        fullScreenMobileModalOnBack$Action(t) {
            var i = this.controller;
            return n.Logger.startActiveSpan("FullScreenMobileModalOnBack__proxy", function(e) {
                e && (e.setAttribute("code.function", "FullScreenMobileModalOnBack"), e.setAttribute("outsystems.function.key", "7283c098-7dd2-4c7b-ae04-fab61558dbca"), e.setAttribute("outsystems.function.owner.name", "PartnersHub"), e.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._fullScreenMobileModalOnBack$Action, t)
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
            return y.defaultTimeout
        }
    };
    c(l, "ControllerInner");
    let s = l;
    u = s, u.registerVariableGroupType("PartnersHub.RealAccountCreation.StatesListScreenMobile.StatesListOnClickCountry$vars", [{
        name: "SelectedState",
        attrName: "selectedStateInLocal",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }])
}
var u, g = new n.Controller.ControllerFactory(u, b);
export {
    g as a
};