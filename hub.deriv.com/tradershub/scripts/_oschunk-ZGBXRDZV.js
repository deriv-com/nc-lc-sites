import {
    h,
    r as _
} from "./_oschunk-WAXNMQCP.js";
import {
    a as N
} from "./_oschunk-LHY3WMNC.js";
import {
    a as W,
    g as H,
    i as C
} from "./_oschunk-J7LCUWB3.js";
import {
    d as f
} from "./_oschunk-XMOR6XCC.js";
import {
    ia as b
} from "./_oschunk-NTQBNJ73.js";
import {
    c as n,
    g as V
} from "./_oschunk-DVBKI63I.js";
var d = V(W());
var A = b,
    R = class R extends A.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("showPasskey", "showPasskeyIn", "showPasskey", !0, !1, A.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_showPasskeyInDataFetchStatus", "_showPasskeyInDataFetchStatus", "_showPasskeyInDataFetchStatus", !0, !1, A.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(A.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
n(R, "VariablesRecord");
var y = R;
y.init();
var w = class w extends A.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
n(w, "WidgetsRecord");
var E = w,
    P = class P extends A.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return y
        }
        static getWidgetsRecordConstructor() {
            return E
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(s) {
            "showPasskey" in s && (this.variables.showPasskeyIn = s.showPasskey, "_showPasskeyInDataFetchStatus" in s && (this.variables._showPasskeyInDataFetchStatus = s._showPasskeyInDataFetchStatus))
        }
    };
n(P, "Model");
var p = P;
p._hasValidationWidgetsValue = void 0;
var I = new A.Model.ModelFactory(p);
var L = {};

function T(u, s, c) {
    cacheTrackEvents.track({
        name: "ce_virtual_signup_form",
        properties: {
            action: "started",
            signup_provider: "apple",
            form_name: "virtual_signup_form_outsystems",
            cookie_data: JSON.parse(u.GetAffiliateCookieData().AffiliateCookieData)
        }
    })
}
n(T, "default");

function O(u, s, c) {
    cacheTrackEvents.track({
        name: "ce_virtual_signup_form",
        properties: {
            action: "started",
            signup_provider: "google",
            form_name: "virtual_signup_form_outsystems",
            cookie_data: JSON.parse(u.GetAffiliateCookieData().AffiliateCookieData)
        }
    })
}
n(O, "default");

function D(u, s, c) {
    cacheTrackEvents.track({
        name: "ce_virtual_signup_form",
        properties: {
            action: "started",
            signup_provider: "facebook",
            form_name: "virtual_signup_form_outsystems",
            cookie_data: JSON.parse(u.GetAffiliateCookieData().AffiliateCookieData)
        }
    })
}
n(D, "default");
var i = b; {
    let s = class s extends i.Controller.BaseViewController {
        constructor(e, a, t) {
            super(e, a, t, L);
            var g = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _appleAction$Action() {
            return this.hasOwnProperty("__appleAction$Action") || (this.__appleAction$Action = function(e) {
                var a = this.model,
                    t = this.controller,
                    g = this.idService;
                return i.Logger.startActiveSpan("AppleAction", function(o) {
                    o && (o.setAttribute("code.function", "AppleAction"), o.setAttribute("outsystems.function.key", "2dd54d7a-30d0-4515-b090-183550a20291"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("AppleAction"), e = t.callContext(e);
                        var l = new i.DataTypes.VariableHolder;
                        return i.Logger.startActiveSpan("RudderStack", function(r) {
                            r && (r.setAttribute("code.function", "RudderStack"), r.setAttribute("outsystems.function.key", "2d14c35b-6c82-4a80-9b3d-0038abd40cca"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(T, "RudderStack", "AppleAction", null, function(k) {}, {
                                    GetAffiliateCookieData: f.clientActionProxies.getAffiliateCookieData$Action
                                }, {})
                            } finally {
                                r && r.end()
                            }
                        }, 1), l.value = f.getSocialLoginRedirectURL$Action("apple", e), i.Navigation.navigateTo(i.Navigation.generateScreenURL(l.value.redirectURLOut, {}), i.Transitions.createTransition(i.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__appleAction$Action
        }
        set _appleAction$Action(e) {
            this.__appleAction$Action = e
        }
        get _googleAction$Action() {
            return this.hasOwnProperty("__googleAction$Action") || (this.__googleAction$Action = function(e) {
                var a = this.model,
                    t = this.controller,
                    g = this.idService;
                return i.Logger.startActiveSpan("GoogleAction", function(o) {
                    o && (o.setAttribute("code.function", "GoogleAction"), o.setAttribute("outsystems.function.key", "57ae182b-ab7c-4c97-a6ad-5b96ebe8acf7"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("GoogleAction"), e = t.callContext(e);
                        var l = new i.DataTypes.VariableHolder;
                        return i.Logger.startActiveSpan("RudderStack", function(r) {
                            r && (r.setAttribute("code.function", "RudderStack"), r.setAttribute("outsystems.function.key", "e2cd2e58-c94e-40f7-a4fe-543fea4d06e7"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(O, "RudderStack", "GoogleAction", null, function(k) {}, {
                                    GetAffiliateCookieData: f.clientActionProxies.getAffiliateCookieData$Action
                                }, {})
                            } finally {
                                r && r.end()
                            }
                        }, 1), l.value = f.getSocialLoginRedirectURL$Action("google", e), i.Navigation.navigateTo(i.Navigation.generateScreenURL(l.value.redirectURLOut, {}), i.Transitions.createTransition(i.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__googleAction$Action
        }
        set _googleAction$Action(e) {
            this.__googleAction$Action = e
        }
        get _facebookAction$Action() {
            return this.hasOwnProperty("__facebookAction$Action") || (this.__facebookAction$Action = function(e) {
                var a = this.model,
                    t = this.controller,
                    g = this.idService;
                return i.Logger.startActiveSpan("FacebookAction", function(o) {
                    o && (o.setAttribute("code.function", "FacebookAction"), o.setAttribute("outsystems.function.key", "6ced6578-235d-4f37-9d37-f5cc55a5beae"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("FacebookAction"), e = t.callContext(e);
                        var l = new i.DataTypes.VariableHolder;
                        return i.Logger.startActiveSpan("RudderStack", function(r) {
                            r && (r.setAttribute("code.function", "RudderStack"), r.setAttribute("outsystems.function.key", "f692dda7-2978-43b0-b47b-b0ae32873175"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(D, "RudderStack", "FacebookAction", null, function(k) {}, {
                                    GetAffiliateCookieData: f.clientActionProxies.getAffiliateCookieData$Action
                                }, {})
                            } finally {
                                r && r.end()
                            }
                        }, 1), l.value = f.getSocialLoginRedirectURL$Action("facebook", e), i.Navigation.navigateTo(i.Navigation.generateScreenURL(l.value.redirectURLOut, {}), i.Transitions.createTransition(i.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__facebookAction$Action
        }
        set _facebookAction$Action(e) {
            this.__facebookAction$Action = e
        }
        appleAction$Action(e) {
            var a = this.controller;
            return i.Logger.startActiveSpan("AppleAction__proxy", function(t) {
                t && (t.setAttribute("code.function", "AppleAction"), t.setAttribute("outsystems.function.key", "2dd54d7a-30d0-4515-b090-183550a20291"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._appleAction$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        googleAction$Action(e) {
            var a = this.controller;
            return i.Logger.startActiveSpan("GoogleAction__proxy", function(t) {
                t && (t.setAttribute("code.function", "GoogleAction"), t.setAttribute("outsystems.function.key", "57ae182b-ab7c-4c97-a6ad-5b96ebe8acf7"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._googleAction$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        facebookAction$Action(e) {
            var a = this.controller;
            return i.Logger.startActiveSpan("FacebookAction__proxy", function(t) {
                t && (t.setAttribute("code.function", "FacebookAction"), t.setAttribute("outsystems.function.key", "6ced6578-235d-4f37-9d37-f5cc55a5beae"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._facebookAction$Action, e)
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
                return controller.handleError(e)
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return f.defaultTimeout
        }
    };
    n(s, "ControllerInner");
    let u = s;
    x = u
}
var x, F = new i.Controller.ControllerFactory(x, N);
var S = b,
    ve = C.PlaceholderContent,
    _e = C.IteratorPlaceholderContent,
    m = class m extends H.BaseWebBlock {
        static get displayName() {
            return "Signup.SocialLogin"
        }
        static getAttributes() {
            return {
                codeFunction: "SocialLogin",
                functionKey: "80519e2b-b912-469b-a3d8-aeaefbd3dd29",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.Signup.SocialLogin.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return I
        }
        get controllerFactory() {
            return F
        }
        get title() {
            return ""
        }
        internalRender() {
            let s = this.model,
                c = this.controller,
                e = this.idService,
                a = c.validationService,
                t = this.widgetsRecordProvider,
                g = c.callContext(),
                o = m.ifWidget,
                l = m.textWidget,
                r = m.asPrimitiveValue,
                k = m.getTranslation,
                G = this;
            return d.createElement("div", this.getRootNodeProperties(), d.createElement(h, {
                align: 0,
                animate: !1,
                style: "social-login-container display-flex justify-content-center margin-top-s gap-base",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, o(s.variables.showPasskeyIn, !1, this, function() {
                return [d.createElement(h, {
                    align: 0,
                    animate: !1,
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "1"
                    },
                    _widgetRecordProvider: t
                }, d.createElement(_, {
                    image: S.Navigation.VersionedURL.getVersionedUrl("img/tradershub.passkey.svg"),
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "2"
                    },
                    _widgetRecordProvider: t
                }))]
            }, function() {
                return []
            }), d.createElement(h, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: n(function() {
                        var v = g.clone();
                        c.googleAction$Action(c.callContext(v))
                    }, "onClick")
                },
                visible: !0,
                _idProps: {
                    service: e,
                    name: "Google"
                },
                _widgetRecordProvider: t
            }, d.createElement(_, {
                image: S.Navigation.VersionedURL.getVersionedUrl("img/tradershub.google.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "4"
                },
                _widgetRecordProvider: t
            })), d.createElement(h, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: n(function() {
                        var v = g.clone();
                        c.facebookAction$Action(c.callContext(v))
                    }, "onClick")
                },
                visible: !0,
                _idProps: {
                    service: e,
                    name: "Facebook"
                },
                _widgetRecordProvider: t
            }, d.createElement(_, {
                image: S.Navigation.VersionedURL.getVersionedUrl("img/tradershub.facebook.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "6"
                },
                _widgetRecordProvider: t
            })), d.createElement(h, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: n(function() {
                        var v = g.clone();
                        c.appleAction$Action(c.callContext(v))
                    }, "onClick")
                },
                visible: !0,
                _idProps: {
                    service: e,
                    name: "Apple"
                },
                _widgetRecordProvider: t
            }, d.createElement(_, {
                image: S.Navigation.VersionedURL.getVersionedUrl("img/tradershub.apple.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "8"
                },
                _widgetRecordProvider: t
            }))))
        }
    };
n(m, "View");
var $ = m,
    ye = $;
export {
    ye as a
};