import {
    a as T
} from "./_oschunk-IJSSYTPX.js";
import {
    a as m
} from "./_oschunk-6WALBPGV.js";
import {
    p as _
} from "./_oschunk-FZ6FUHBV.js";
import {
    ia as y
} from "./_oschunk-5KJVGEL7.js";
import {
    c as u
} from "./_oschunk-QHO7QY6K.js";
var C = {};

function f(o, d, b, e) {
    let n = new URLSearchParams(window.location.search);
    if (n.has("action")) {
        let r = n.get("action");
        if (r === "reset_password") {
            let s = n.get("code");
            o.Code = s, o.RedirectTo = "reset_password"
        } else if (r === "signup") o.Code = n.get("code"), o.RedirectTo = "virtual_account_creation";
        else if (r === "phone_number_verification") {
            let s = n.get("code");
            o.Code = s, o.RedirectTo = "phone_number_verification"
        }
    }
}
u(f, "default");
var t = y; {
    let d = class d extends t.Controller.BaseViewController {
        constructor(e, n, r) {
            super(e, n, r, C);
            var s = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var n = this.model,
                    r = this.controller,
                    s = this.idService;
                return t.Logger.startActiveSpan("OnInitialize", function(i) {
                    i && (i.setAttribute("code.function", "OnInitialize"), i.setAttribute("outsystems.function.key", "9f8a3f9a-e4e2-40dc-8fce-71a156de3bf3"), i.setAttribute("outsystems.function.owner.name", "PartnersHub"), i.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnInitialize"), e = r.callContext(e), r._redirectCheck$Action(e)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        get _redirectCheck$Action() {
            return this.hasOwnProperty("__redirectCheck$Action") || (this.__redirectCheck$Action = function(e) {
                var n = this.model,
                    r = this.controller,
                    s = this.idService;
                return t.Logger.startActiveSpan("RedirectCheck", function(i) {
                    i && (i.setAttribute("code.function", "RedirectCheck"), i.setAttribute("outsystems.function.key", "ec862031-d851-46a2-a6d3-26673edf9b76"), i.setAttribute("outsystems.function.owner.name", "PartnersHub"), i.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("RedirectCheck"), e = r.callContext(e);
                        var c = new t.DataTypes.VariableHolder;
                        if (c.value = t.Logger.startActiveSpan("CheckRedirectType", function(a) {
                                a && (a.setAttribute("code.function", "CheckRedirectType"), a.setAttribute("outsystems.function.key", "95fdcd9c-8108-4b67-882f-e96a5f140b48"), a.setAttribute("outsystems.function.owner.name", "PartnersHub"), a.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return r.safeExecuteJSNode(f, "CheckRedirectType", "RedirectCheck", {
                                        Code: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text),
                                        RedirectTo: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                                    }, function(v) {
                                        var l = new(r.constructor.getVariableGroupType("PartnersHub.Developer.redirect.RedirectCheck$checkRedirectTypeJSResult"));
                                        return l.codeOut = t.DataConversion.JSNodeParamConverter.from(v.Code, t.DataTypes.DataTypes.Text), l.redirectToOut = t.DataConversion.JSNodeParamConverter.from(v.RedirectTo, t.DataTypes.DataTypes.Text), l
                                    }, {}, {})
                                } finally {
                                    a && a.end()
                                }
                            }, 1), c.value.redirectToOut === "reset_password") return t.Navigation.navigateTo(t.Navigation.generateScreenURL("PartnersHub", "ResetPassword", {
                            Code: t.DataConversion.ServerDataConverter.to(c.value.codeOut, t.DataTypes.DataTypes.Text)
                        }), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), e, !0);
                        if (c.value.redirectToOut === "phone_number_verification") return t.Navigation.navigateTo(t.Navigation.generateScreenURL("PartnersHub", "PhoneNumberVerification", {
                            Code: t.DataConversion.ServerDataConverter.to(c.value.codeOut, t.DataTypes.DataTypes.Text)
                        }), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), e, !0);
                        if (c.value.redirectToOut === "virtual_account_creation") return t.Navigation.navigateTo(t.Navigation.generateScreenURL("PartnersHub", "CountryOfResidence", {
                            Code: t.DataConversion.ServerDataConverter.to(c.value.codeOut, t.DataTypes.DataTypes.Text)
                        }), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__redirectCheck$Action
        }
        set _redirectCheck$Action(e) {
            this.__redirectCheck$Action = e
        }
        onInitialize$Action(e) {
            var n = this.controller;
            return t.Logger.startActiveSpan("OnInitialize__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnInitialize"), r.setAttribute("outsystems.function.key", "9f8a3f9a-e4e2-40dc-8fce-71a156de3bf3"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onInitialize$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        redirectCheck$Action(e) {
            var n = this.controller;
            return t.Logger.startActiveSpan("RedirectCheck__proxy", function(r) {
                r && (r.setAttribute("code.function", "RedirectCheck"), r.setAttribute("outsystems.function.key", "ec862031-d851-46a2-a6d3-26673edf9b76"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._redirectCheck$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var n = this.controller,
                    r = this.model,
                    s = this.idService;
                return n.onInitialize$Action(e)
            }), this._onInitializeEventHandler
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
                return T.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return _.defaultTimeout
        }
    };
    u(d, "ControllerInner");
    let o = d;
    h = o, h.registerVariableGroupType("PartnersHub.Developer.redirect.RedirectCheck$checkRedirectTypeJSResult", [{
        name: "Code",
        attrName: "codeOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "RedirectTo",
        attrName: "redirectToOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }])
}
var h, k = new t.Controller.ControllerFactory(h, m);
export {
    k as a
};