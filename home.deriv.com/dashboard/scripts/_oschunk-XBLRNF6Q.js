import {
    a as k
} from "./_oschunk-3PTSEXX2.js";
import {
    h as b,
    q as C
} from "./_oschunk-O5KC3WOL.js";
import {
    a as q,
    g as E,
    m as N,
    o as H,
    q as $,
    r as x,
    s as B,
    t as V
} from "./_oschunk-NVHFAAS2.js";
import {
    a as T
} from "./_oschunk-AW35UT34.js";
import {
    Ga as m,
    Ka as A
} from "./_oschunk-WCMQG33O.js";
import {
    J as I,
    X as g,
    c as s,
    f as G,
    q as _
} from "./_oschunk-DFKJJKI4.js";
var d = G(q());
var c = g,
    w = class w extends c.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("CodeNotReceivedWidgetId", "codeNotReceivedWidgetIdVar", "CodeNotReceivedWidgetId", !0, !1, c.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("Popup", "popupVar", "Popup", !0, !1, c.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("IsPhone", "isPhoneIn", "IsPhone", !0, !1, c.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isPhoneInDataFetchStatus", "_isPhoneInDataFetchStatus", "_isPhoneInDataFetchStatus", !0, !1, c.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("login", "loginIn", "login", !0, !1, c.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_loginInDataFetchStatus", "_loginInDataFetchStatus", "_loginInDataFetchStatus", !0, !1, c.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("withdraw", "withdrawIn", "withdraw", !0, !1, c.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_withdrawInDataFetchStatus", "_withdrawInDataFetchStatus", "_withdrawInDataFetchStatus", !0, !1, c.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("custom", "customIn", "custom", !0, !1, c.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_customInDataFetchStatus", "_customInDataFetchStatus", "_customInDataFetchStatus", !0, !1, c.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("InfoIcon", "infoIconIn", "InfoIcon", !0, !1, c.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_infoIconInDataFetchStatus", "_infoIconInDataFetchStatus", "_infoIconInDataFetchStatus", !0, !1, c.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsFromSignup", "isFromSignupIn", "IsFromSignup", !0, !1, c.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isFromSignupInDataFetchStatus", "_isFromSignupInDataFetchStatus", "_isFromSignupInDataFetchStatus", !0, !1, c.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(c.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(w, "VariablesRecord");
var S = w;
S.init();
var R = class R extends c.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(R, "WidgetsRecord");
var P = R,
    y = class y extends c.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return S
        }
        static getWidgetsRecordConstructor() {
            return P
        }
        static get hasValidationWidgets() {
            return y._hasValidationWidgetsValue === void 0 && (y._hasValidationWidgetsValue = void 0), y._hasValidationWidgetsValue
        }
        setInputs(r) {
            "IsPhone" in r && (this.variables.isPhoneIn = r.IsPhone, "_isPhoneInDataFetchStatus" in r && (this.variables._isPhoneInDataFetchStatus = r._isPhoneInDataFetchStatus)), "login" in r && (this.variables.loginIn = r.login, "_loginInDataFetchStatus" in r && (this.variables._loginInDataFetchStatus = r._loginInDataFetchStatus)), "withdraw" in r && (this.variables.withdrawIn = r.withdraw, "_withdrawInDataFetchStatus" in r && (this.variables._withdrawInDataFetchStatus = r._withdrawInDataFetchStatus)), "custom" in r && (this.variables.customIn = r.custom, "_customInDataFetchStatus" in r && (this.variables._customInDataFetchStatus = r._customInDataFetchStatus)), "InfoIcon" in r && (this.variables.infoIconIn = r.InfoIcon, "_infoIconInDataFetchStatus" in r && (this.variables._infoIconInDataFetchStatus = r._infoIconInDataFetchStatus)), "IsFromSignup" in r && (this.variables.isFromSignupIn = r.IsFromSignup, "_isFromSignupInDataFetchStatus" in r && (this.variables._isFromSignupInDataFetchStatus = r._isFromSignupInDataFetchStatus))
        }
    };
s(y, "Model");
var p = y;
p._hasValidationWidgetsValue = void 0;
var W = new c.Model.ModelFactory(p);
var z = {};
var i = g; {
    let r = class r extends i.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, z);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _backbuttonOnClick$Action() {
            return this.hasOwnProperty("__backbuttonOnClick$Action") || (this.__backbuttonOnClick$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return i.Logger.startActiveSpan("BackbuttonOnClick", function(a) {
                    return a && (a.setAttribute("code.function", "BackbuttonOnClick"), a.setAttribute("outsystems.function.key", "10594bce-7663-4284-bb96-af68329e1fff"), a.setAttribute("outsystems.function.owner.name", "dashboard"), a.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("BackbuttonOnClick"), e = t.callContext(e), i.Flow.executeAsyncFlow(function() {
                            return i.Flow.executeSequence(function() {
                                return n.variables.withdrawIn ? i.Flow.returnAsync(i.Navigation.navigateTo(i.Navigation.generateScreenURL("dashboard", "withdraw", {}), i.Transitions.createTransition(i.Transitions.TransitionAnimation.Default), e, !0)) : i.Flow.executeSequence(function() {
                                    return n.variables.isFromSignupIn ? i.Flow.returnAsync(i.Navigation.navigateTo(i.Navigation.generateScreenURL("dashboard", "signup", {}), i.Transitions.createTransition(i.Transitions.TransitionAnimation.Default), e, !0)) : i.Flow.executeSequence(function() {
                                        return n.variables.loginIn === !0 ? i.Flow.executeSequence(function() {
                                            return n.variables.customIn ? t.onClickBack$Action(e) : i.Flow.returnAsync(i.Navigation.navigateTo(i.Navigation.generateScreenURL("dashboard", "login", {}), i.Transitions.createTransition(i.Transitions.TransitionAnimation.Default), e, !0))
                                        }) : i.Flow.returnAsync(i.Navigation.navigateBack(null, e, !0))
                                    })
                                })
                            })
                        })
                    }, function() {
                        a && a.end()
                    })
                }, 1)
            }), this.__backbuttonOnClick$Action
        }
        set _backbuttonOnClick$Action(e) {
            this.__backbuttonOnClick$Action = e
        }
        get _codeNotReceivedOnInitialize$Action() {
            return this.hasOwnProperty("__codeNotReceivedOnInitialize$Action") || (this.__codeNotReceivedOnInitialize$Action = function(e, n) {
                var t = this.model,
                    o = this.controller,
                    a = this.idService;
                return i.Logger.startActiveSpan("CodeNotReceivedOnInitialize", function(f) {
                    f && (f.setAttribute("code.function", "CodeNotReceivedOnInitialize"), f.setAttribute("outsystems.function.key", "667426b0-ea5b-4f56-9423-5e7d73669c79"), f.setAttribute("outsystems.function.owner.name", "dashboard"), f.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), f.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("CodeNotReceivedOnInitialize"), n = o.callContext(n);
                        var O = new i.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("dashboard.Common.OTPHeader.CodeNotReceivedOnInitialize$vars")));
                        O.value.bottomSheetIdInLocal = e, t.variables.codeNotReceivedWidgetIdVar = O.value.bottomSheetIdInLocal
                    } finally {
                        f && f.end()
                    }
                }, 1)
            }), this.__codeNotReceivedOnInitialize$Action
        }
        set _codeNotReceivedOnInitialize$Action(e) {
            this.__codeNotReceivedOnInitialize$Action = e
        }
        get _codeNotReceivedOnClickPopupClose$Action() {
            return this.hasOwnProperty("__codeNotReceivedOnClickPopupClose$Action") || (this.__codeNotReceivedOnClickPopupClose$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return i.Logger.startActiveSpan("CodeNotReceivedOnClickPopupClose", function(a) {
                    a && (a.setAttribute("code.function", "CodeNotReceivedOnClickPopupClose"), a.setAttribute("outsystems.function.key", "8baf51f8-b4db-4137-8956-19ec9062ec46"), a.setAttribute("outsystems.function.owner.name", "dashboard"), a.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("CodeNotReceivedOnClickPopupClose"), e = t.callContext(e), n.variables.popupVar = !1
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__codeNotReceivedOnClickPopupClose$Action
        }
        set _codeNotReceivedOnClickPopupClose$Action(e) {
            this.__codeNotReceivedOnClickPopupClose$Action = e
        }
        get _layoutOnboardingEvent_ClickIBtnnfo$Action() {
            return this.hasOwnProperty("__layoutOnboardingEvent_ClickIBtnnfo$Action") || (this.__layoutOnboardingEvent_ClickIBtnnfo$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return i.Logger.startActiveSpan("LayoutOnboardingEvent_ClickIBtnnfo", function(a) {
                    a && (a.setAttribute("code.function", "LayoutOnboardingEvent_ClickIBtnnfo"), a.setAttribute("outsystems.function.key", "d28d2f83-3337-4250-90f8-32b6d2c972f0"), a.setAttribute("outsystems.function.owner.name", "dashboard"), a.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("LayoutOnboardingEvent_ClickIBtnnfo"), e = t.callContext(e);
                        var f = new i.DataTypes.VariableHolder;
                        A.rudderstackTrackEvent$Action("ce_virtual_signup_form_v2", "click", "code_not_received", "default_deriv_v2", n.variables.loginIn ? "login" : "signup", "", "", "", "", "", "", "", "", "", "", !1, "", "", "", "", !1, e), m.isDesktop$Action(e).isDesktopOut ? n.variables.popupVar = !0 : f.value = m.bottomSheetOpen$Action(n.variables.codeNotReceivedWidgetIdVar, e)
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__layoutOnboardingEvent_ClickIBtnnfo$Action
        }
        set _layoutOnboardingEvent_ClickIBtnnfo$Action(e) {
            this.__layoutOnboardingEvent_ClickIBtnnfo$Action = e
        }
        backbuttonOnClick$Action(e) {
            var n = this.controller;
            return i.Logger.startActiveSpan("BackbuttonOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "BackbuttonOnClick"), t.setAttribute("outsystems.function.key", "10594bce-7663-4284-bb96-af68329e1fff"), t.setAttribute("outsystems.function.owner.name", "dashboard"), t.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._backbuttonOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        codeNotReceivedOnInitialize$Action(e, n) {
            var t = this.controller;
            return i.Logger.startActiveSpan("CodeNotReceivedOnInitialize__proxy", function(o) {
                o && (o.setAttribute("code.function", "CodeNotReceivedOnInitialize"), o.setAttribute("outsystems.function.key", "667426b0-ea5b-4f56-9423-5e7d73669c79"), o.setAttribute("outsystems.function.owner.name", "dashboard"), o.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._codeNotReceivedOnInitialize$Action, n, e)
                } finally {
                    o && o.end()
                }
            }, 0)
        }
        codeNotReceivedOnClickPopupClose$Action(e) {
            var n = this.controller;
            return i.Logger.startActiveSpan("CodeNotReceivedOnClickPopupClose__proxy", function(t) {
                t && (t.setAttribute("code.function", "CodeNotReceivedOnClickPopupClose"), t.setAttribute("outsystems.function.key", "8baf51f8-b4db-4137-8956-19ec9062ec46"), t.setAttribute("outsystems.function.owner.name", "dashboard"), t.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._codeNotReceivedOnClickPopupClose$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        layoutOnboardingEvent_ClickIBtnnfo$Action(e) {
            var n = this.controller;
            return i.Logger.startActiveSpan("LayoutOnboardingEvent_ClickIBtnnfo__proxy", function(t) {
                t && (t.setAttribute("code.function", "LayoutOnboardingEvent_ClickIBtnnfo"), t.setAttribute("outsystems.function.key", "d28d2f83-3337-4250-90f8-32b6d2c972f0"), t.setAttribute("outsystems.function.owner.name", "dashboard"), t.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._layoutOnboardingEvent_ClickIBtnnfo$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get onClickBack$Action() {
            return this.hasOwnProperty("_onClickBack$Action") || (this._onClickBack$Action = function() {
                return Promise.resolve()
            }), this._onClickBack$Action
        }
        set onClickBack$Action(e) {
            this._onClickBack$Action = e
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
        get onSyncStartEventHandler() {
            return this.hasOwnProperty("_onSyncStartEventHandler") || (this._onSyncStartEventHandler = null), this._onSyncStartEventHandler
        }
        set onSyncStartEventHandler(e) {
            this._onSyncStartEventHandler = e
        }
        get onSyncCompleteEventHandler() {
            return this.hasOwnProperty("_onSyncCompleteEventHandler") || (this._onSyncCompleteEventHandler = null), this._onSyncCompleteEventHandler
        }
        set onSyncCompleteEventHandler(e) {
            this._onSyncCompleteEventHandler = e
        }
        get onSyncErrorEventHandler() {
            return this.hasOwnProperty("_onSyncErrorEventHandler") || (this._onSyncErrorEventHandler = null), this._onSyncErrorEventHandler
        }
        set onSyncErrorEventHandler(e) {
            this._onSyncErrorEventHandler = e
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
            return A.defaultTimeout
        }
    };
    s(r, "ControllerInner");
    let v = r;
    D = v, D.registerVariableGroupType("dashboard.Common.OTPHeader.CodeNotReceivedOnInitialize$vars", [{
        name: "BottomSheetId",
        attrName: "bottomSheetIdInLocal",
        mandatory: !0,
        dataType: i.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }])
}
var D, U = new i.Controller.ControllerFactory(D, T);
var Ee = E.PlaceholderContent,
    ke = E.IteratorPlaceholderContent,
    J = s(function() {
        var v = H(function(r) {
            var h = r.model,
                e = r.controller,
                n = r.controller.idService,
                t = e.validationService,
                o = e.callContext(),
                a = B,
                f = V,
                O = {
                    props: r,
                    validateWidget: s(function(l) {
                        r.validateWidget(r, l)
                    }, "validateWidget")
                },
                u = h,
                j = x,
                Q = $,
                F = N();
            return d.createElement("div", r.rootNodeProperties, d.createElement(b, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "0"
                },
                _widgetRecordProvider: u
            }, d.createElement(b, {
                align: 0,
                animate: !0,
                style: "BackIcon-mobile_container",
                visible: h.getCachedValue(n.getId("BackIcon.Visible"), function() {
                    return m.isPhone$Action(o).isPhoneOut
                }),
                _idProps: {
                    service: n,
                    name: "BackIcon"
                },
                _widgetRecordProvider: u
            }, d.createElement(b, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: s(function() {
                        return Promise.resolve().then(function() {
                            var l = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                            return e.backbuttonOnClick$Action(e.callContext(l))
                        })
                    }, "onClick")
                },
                extendedProperties: {
                    style: "cursor: pointer;"
                },
                gridProperties: {
                    classes: "OSInline"
                },
                style: "back-button rotate-180",
                visible: !0,
                _idProps: {
                    service: n,
                    name: "Backbutton"
                },
                _widgetRecordProvider: u
            }, d.createElement(C, {
                extendedProperties: {
                    style: "height: 20px;"
                },
                image: _.VersionedURL.getVersionedUrl("img/dashboard.icon_10_.svg"),
                type: 0,
                _idProps: {
                    service: n,
                    uuid: "3"
                },
                _widgetRecordProvider: u
            })), d.createElement(b, {
                align: 0,
                animate: !0,
                extendedEvents: {
                    onClick: s(function() {
                        var l = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                        e.layoutOnboardingEvent_ClickIBtnnfo$Action(e.callContext(l))
                    }, "onClick")
                },
                extendedProperties: {
                    style: "cursor: pointer;"
                },
                style: "back-button",
                visible: h.variables.infoIconIn,
                _idProps: {
                    service: n,
                    name: "RightAction2"
                },
                _widgetRecordProvider: u,
                visible_dataFetchStatus: I.calculateDataFetchStatus(h.variables._infoIconInDataFetchStatus)
            }, d.createElement(C, {
                extendedProperties: {
                    style: "height: 20px;"
                },
                image: _.VersionedURL.getVersionedUrl("img/dashboard.icon_9_.svg"),
                type: 0,
                _idProps: {
                    service: n,
                    uuid: "5"
                },
                _widgetRecordProvider: u
            }))), d.createElement(b, {
                align: 0,
                animate: !0,
                style: "BackIcon-mobile_containers",
                visible: h.getCachedValue(n.getId("BackIcon2.Visible"), function() {
                    return !m.isPhone$Action(o).isPhoneOut
                }),
                _idProps: {
                    service: n,
                    name: "BackIcon2"
                },
                _widgetRecordProvider: u
            }, d.createElement(b, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: s(function() {
                        return Promise.resolve().then(function() {
                            var l = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                            return e.backbuttonOnClick$Action(e.callContext(l))
                        })
                    }, "onClick")
                },
                extendedProperties: {
                    style: "cursor: pointer;"
                },
                gridProperties: {
                    classes: "OSInline"
                },
                style: "back-button rotate-180",
                visible: !0,
                _idProps: {
                    service: n,
                    name: "Backbutton2"
                },
                _widgetRecordProvider: u
            }, d.createElement(C, {
                extendedProperties: {
                    style: "height: 20px;"
                },
                image: _.VersionedURL.getVersionedUrl("img/dashboard.icon_10_.svg"),
                type: 0,
                _idProps: {
                    service: n,
                    uuid: "8"
                },
                _widgetRecordProvider: u
            })), d.createElement(b, {
                align: 0,
                animate: !0,
                extendedEvents: {
                    onClick: s(function() {
                        var l = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                        e.layoutOnboardingEvent_ClickIBtnnfo$Action(e.callContext(l))
                    }, "onClick")
                },
                extendedProperties: {
                    style: "cursor: pointer;"
                },
                style: "back-button",
                visible: h.variables.infoIconIn,
                _idProps: {
                    service: n,
                    name: "RightAction3"
                },
                _widgetRecordProvider: u,
                visible_dataFetchStatus: I.calculateDataFetchStatus(h.variables._infoIconInDataFetchStatus)
            }, d.createElement(C, {
                extendedProperties: {
                    style: "height: 20px;"
                },
                image: _.VersionedURL.getVersionedUrl("img/dashboard.icon_9_.svg"),
                type: 0,
                _idProps: {
                    service: n,
                    uuid: "10"
                },
                _widgetRecordProvider: u
            })))), d.createElement(k, {
                getOwnerSpan: s(function() {
                    return F.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return F.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    IsPopupOpen: h.variables.popupVar,
                    IsPhone: h.variables.isPhoneIn,
                    _isPhoneInDataFetchStatus: I.calculateDataFetchStatus(h.variables._isPhoneInDataFetchStatus)
                },
                events: {
                    _handleError: s(function(l) {
                        e.handleError(l)
                    }, "_handleError"),
                    onClickPopupClose$Action: s(function() {
                        var l = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                        e.codeNotReceivedOnClickPopupClose$Action(e.callContext(l))
                    }, "onClickPopupClose$Action"),
                    onInitialize$Action: s(function(l) {
                        var M = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                        e.codeNotReceivedOnInitialize$Action(l, e.callContext(M))
                    }, "onInitialize$Action")
                },
                _validationProps: {
                    validationService: t
                },
                _idProps: {
                    service: n,
                    uuid: "11",
                    alias: "1"
                },
                _widgetRecordProvider: u,
                _dependencies: []
            }))
        }, {
            topLevelComponent: !1,
            getAttributes: s(function() {
                return {
                    codeFunction: "OTPHeader",
                    functionKey: "2363f96f-87a7-4b48-b2b7-849a4c7d933f",
                    functionOwnerName: "dashboard",
                    functionOwnerKey: "bbed91b8-a741-4694-b61f-b0ef761ba4e2",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Common.OTPHeader",
            modelFactory: W,
            controllerFactory: U
        });
        return v.getCssDependencies = function() {
            return ["css/dashboard.Common.OTPHeader.css", "css/OutSystemsReactWidgets.css"]
        }, v.getJsDependencies = function() {
            return []
        }, v.getBlocks = function() {
            return [k]
        }, v
    }, "componentFactory"),
    Pe = J();
export {
    Pe as a
};