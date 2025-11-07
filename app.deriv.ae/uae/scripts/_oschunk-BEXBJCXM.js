import {
    a as k
} from "./_oschunk-L6JZD7VU.js";
import {
    a as L
} from "./_oschunk-YB2J7GTX.js";
import {
    a as R
} from "./_oschunk-HFW3V2GI.js";
import {
    a as Z,
    f,
    h as K,
    n as b,
    r as j,
    s as F
} from "./_oschunk-VR5BNL2K.js";
import {
    a as at,
    g as T,
    m as U,
    o as W,
    q as M,
    r as z,
    s as Q,
    t as G
} from "./_oschunk-4VHUVDBV.js";
import {
    a as x
} from "./_oschunk-KXORGPRQ.js";
import {
    Hb as V,
    Qb as w,
    Sb as I,
    a as B,
    ub as p
} from "./_oschunk-Z7QRTJDJ.js";
import {
    I as A,
    W as C,
    c as l,
    e as nt,
    p as m
} from "./_oschunk-M5BUVJ72.js";
var s = C,
    $ = class $ extends s.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("has_back_button", "has_back_buttonIn", "has_back_button", !0, !1, s.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_has_back_buttonInDataFetchStatus", "_has_back_buttonInDataFetchStatus", "_has_back_buttonInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("hasRighAction", "hasRighActionIn", "hasRighAction", !0, !1, s.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_hasRighActionInDataFetchStatus", "_hasRighActionInDataFetchStatus", "_hasRighActionInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("back_destination", "back_destinationIn", "back_destination", !0, !1, s.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_back_destinationInDataFetchStatus", "_back_destinationInDataFetchStatus", "_back_destinationInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("show_loader", "show_loaderIn", "show_loader", !0, !1, s.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_show_loaderInDataFetchStatus", "_show_loaderInDataFetchStatus", "_show_loaderInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("hasActionLeftButton", "hasActionLeftButtonIn", "hasActionLeftButton", !0, !1, s.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_hasActionLeftButtonInDataFetchStatus", "_hasActionLeftButtonInDataFetchStatus", "_hasActionLeftButtonInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("has_close_icon", "has_close_iconIn", "has_close_icon", !0, !1, s.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_has_close_iconInDataFetchStatus", "_has_close_iconInDataFetchStatus", "_has_close_iconInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("is_demo", "is_demoIn", "is_demo", !0, !1, s.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_is_demoInDataFetchStatus", "_is_demoInDataFetchStatus", "_is_demoInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("show_progress_bar", "show_progress_barIn", "show_progress_bar", !0, !1, s.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_show_progress_barInDataFetchStatus", "_show_progress_barInDataFetchStatus", "_show_progress_barInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ShowLanguageSwitcher", "showLanguageSwitcherIn", "ShowLanguageSwitcher", !0, !1, s.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_showLanguageSwitcherInDataFetchStatus", "_showLanguageSwitcherInDataFetchStatus", "_showLanguageSwitcherInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("shouldShowQuestionInfo", "shouldShowQuestionInfoIn", "shouldShowQuestionInfo", !0, !1, s.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_shouldShowQuestionInfoInDataFetchStatus", "_shouldShowQuestionInfoInDataFetchStatus", "_shouldShowQuestionInfoInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsCustomStyle", "isCustomStyleIn", "IsCustomStyle", !0, !1, s.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isCustomStyleInDataFetchStatus", "_isCustomStyleInDataFetchStatus", "_isCustomStyleInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(s.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
l($, "VariablesRecord");
var D = $;
D.init();
var N = class N extends s.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
l(N, "WidgetsRecord");
var P = N,
    S = class S extends s.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return D
        }
        static getWidgetsRecordConstructor() {
            return P
        }
        static get hasValidationWidgets() {
            return S._hasValidationWidgetsValue === void 0 && (S._hasValidationWidgetsValue = void 0 || void 0 || void 0), S._hasValidationWidgetsValue
        }
        setInputs(i) {
            "has_back_button" in i && (this.variables.has_back_buttonIn = i.has_back_button, "_has_back_buttonInDataFetchStatus" in i && (this.variables._has_back_buttonInDataFetchStatus = i._has_back_buttonInDataFetchStatus)), "hasRighAction" in i && (this.variables.hasRighActionIn = i.hasRighAction, "_hasRighActionInDataFetchStatus" in i && (this.variables._hasRighActionInDataFetchStatus = i._hasRighActionInDataFetchStatus)), "back_destination" in i && (this.variables.back_destinationIn = i.back_destination, "_back_destinationInDataFetchStatus" in i && (this.variables._back_destinationInDataFetchStatus = i._back_destinationInDataFetchStatus)), "show_loader" in i && (this.variables.show_loaderIn = i.show_loader, "_show_loaderInDataFetchStatus" in i && (this.variables._show_loaderInDataFetchStatus = i._show_loaderInDataFetchStatus)), "hasActionLeftButton" in i && (this.variables.hasActionLeftButtonIn = i.hasActionLeftButton, "_hasActionLeftButtonInDataFetchStatus" in i && (this.variables._hasActionLeftButtonInDataFetchStatus = i._hasActionLeftButtonInDataFetchStatus)), "has_close_icon" in i && (this.variables.has_close_iconIn = i.has_close_icon, "_has_close_iconInDataFetchStatus" in i && (this.variables._has_close_iconInDataFetchStatus = i._has_close_iconInDataFetchStatus)), "is_demo" in i && (this.variables.is_demoIn = i.is_demo, "_is_demoInDataFetchStatus" in i && (this.variables._is_demoInDataFetchStatus = i._is_demoInDataFetchStatus)), "show_progress_bar" in i && (this.variables.show_progress_barIn = i.show_progress_bar, "_show_progress_barInDataFetchStatus" in i && (this.variables._show_progress_barInDataFetchStatus = i._show_progress_barInDataFetchStatus)), "ShowLanguageSwitcher" in i && (this.variables.showLanguageSwitcherIn = i.ShowLanguageSwitcher, "_showLanguageSwitcherInDataFetchStatus" in i && (this.variables._showLanguageSwitcherInDataFetchStatus = i._showLanguageSwitcherInDataFetchStatus)), "shouldShowQuestionInfo" in i && (this.variables.shouldShowQuestionInfoIn = i.shouldShowQuestionInfo, "_shouldShowQuestionInfoInDataFetchStatus" in i && (this.variables._shouldShowQuestionInfoInDataFetchStatus = i._shouldShowQuestionInfoInDataFetchStatus)), "IsCustomStyle" in i && (this.variables.isCustomStyleIn = i.IsCustomStyle, "_isCustomStyleInDataFetchStatus" in i && (this.variables._isCustomStyleInDataFetchStatus = i._isCustomStyleInDataFetchStatus))
        }
    };
l(S, "Model");
var O = S;
O._hasValidationWidgetsValue = void 0;
var Y = new s.Model.ModelFactory(O);
var c = nt(at());
var tt = {};
var a = C; {
    let i = class i extends a.Controller.BaseViewController {
        constructor(t, n, e) {
            super(t, n, e, tt);
            var r = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _onLanguageChange$Action() {
            return this.hasOwnProperty("__onLanguageChange$Action") || (this.__onLanguageChange$Action = function(t, n) {
                var e = this.model,
                    r = this.controller,
                    o = this.idService;
                return a.Logger.startActiveSpan("OnLanguageChange", function(_) {
                    return _ && (_.setAttribute("code.function", "OnLanguageChange"), _.setAttribute("outsystems.function.key", "3d152a65-a804-4cfa-abb7-5fc11c98a757"), _.setAttribute("outsystems.function.owner.name", "uae"), _.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), _.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                        r.ensureControllerAlive("OnLanguageChange"), n = r.callContext(n);
                        var v = new a.DataTypes.VariableHolder(new(r.constructor.getVariableGroupType("uae.Layouts.LayoutOnboardingMobileNotAuthorized.OnLanguageChange$vars")));
                        return v.value.languageInLocal = t, a.Flow.executeAsyncFlow(function() {
                            return I.changeLanguage$Action(v.value.languageInLocal, n), r.languageChangeEvent$Action(n)
                        })
                    }, function() {
                        _ && _.end()
                    })
                }, 1)
            }), this.__onLanguageChange$Action
        }
        set _onLanguageChange$Action(t) {
            this.__onLanguageChange$Action = t
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    r = this.idService;
                return a.Logger.startActiveSpan("OnDestroy", function(o) {
                    o && (o.setAttribute("code.function", "OnDestroy"), o.setAttribute("outsystems.function.key", "49e42bbe-a8c8-4792-a315-b8d38ebcee22"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnDestroy"), t = e.callContext(t), w.layoutDestroy$Action(t)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(t) {
            this.__onDestroy$Action = t
        }
        get _backButtonOnClick$Action() {
            return this.hasOwnProperty("__backButtonOnClick$Action") || (this.__backButtonOnClick$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    r = this.idService;
                return a.Logger.startActiveSpan("BackButtonOnClick", function(o) {
                    return o && (o.setAttribute("code.function", "BackButtonOnClick"), o.setAttribute("outsystems.function.key", "8bcdd708-13c9-4e16-a8b7-d5f4324b7c6d"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                        return e.ensureControllerAlive("BackButtonOnClick"), t = e.callContext(t), a.Flow.executeAsyncFlow(function() {
                            return a.Flow.executeSequence(function() {
                                return n.variables.hasActionLeftButtonIn ? e.onLeftActionEvent$Action(t) : n.variables.back_destinationIn === "otp" ? a.Flow.returnAsync(a.Navigation.navigateTo(a.Navigation.generateScreenURL("uae", "otp", {}), a.Transitions.createTransition(a.Transitions.TransitionAnimation.Default), t, !0)) : n.variables.back_destinationIn === "hub" ? a.Flow.returnAsync(a.Navigation.navigateTo(a.Navigation.generateScreenURL("uae", "home", {}), a.Transitions.createTransition(a.Transitions.TransitionAnimation.Default), t, !0)) : n.variables.back_destinationIn === "complete_profile" ? a.Flow.returnAsync(a.Navigation.navigateTo(a.Navigation.generateScreenURL("uae", "home", {}), a.Transitions.createTransition(a.Transitions.TransitionAnimation.Default), t, !0)) : n.variables.back_destinationIn === "trade_tab" ? (p.setuae_active_trade_tab_real(n.variables.is_demoIn === !1), a.Flow.returnAsync(a.Navigation.navigateTo(a.Navigation.generateScreenURL("uae", "trade", {}), a.Transitions.createTransition(a.Transitions.TransitionAnimation.Default), t, !0))) : n.variables.back_destinationIn === "email_verification" ? a.Flow.returnAsync(a.Navigation.navigateTo(a.Navigation.generateScreenURL("uae", "profile-verification-otp", {}), a.Transitions.createTransition(a.Transitions.TransitionAnimation.Default), t, !0)) : n.variables.back_destinationIn === "mt5_login_details" ? a.Flow.returnAsync(a.Navigation.navigateTo(a.Navigation.generateScreenURL("uae", "mt5/login-details", {}), a.Transitions.createTransition(a.Transitions.TransitionAnimation.Default), t, !0)) : a.Flow.returnAsync(a.Navigation.navigateBack(null, t, !0))
                            })
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 1)
            }), this.__backButtonOnClick$Action
        }
        set _backButtonOnClick$Action(t) {
            this.__backButtonOnClick$Action = t
        }
        get _linkOnClick$Action() {
            return this.hasOwnProperty("__linkOnClick$Action") || (this.__linkOnClick$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    r = this.idService;
                return a.Logger.startActiveSpan("LinkOnClick", function(o) {
                    o && (o.setAttribute("code.function", "LinkOnClick"), o.setAttribute("outsystems.function.key", "98312aa8-dcbe-48c0-889c-1dc3dbdb1fd5"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return e.ensureControllerAlive("LinkOnClick"), t = e.callContext(t), a.Navigation.navigateTo(a.Navigation.generateScreenURL("uae", "trade", {
                            is_real: a.DataConversion.ServerDataConverter.to(!0, a.DataTypes.DataTypes.Boolean)
                        }), a.Transitions.createTransition(a.Transitions.TransitionAnimation.Default), t, !0)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__linkOnClick$Action
        }
        set _linkOnClick$Action(t) {
            this.__linkOnClick$Action = t
        }
        get _onClose$Action() {
            return this.hasOwnProperty("__onClose$Action") || (this.__onClose$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    r = this.idService;
                return a.Logger.startActiveSpan("OnClose", function(o) {
                    return o && (o.setAttribute("code.function", "OnClose"), o.setAttribute("outsystems.function.key", "b2d1f9e2-21b6-431a-ade2-6b3f9e1148b9"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                        return e.ensureControllerAlive("OnClose"), t = e.callContext(t), a.Flow.executeAsyncFlow(function() {
                            return e.closeEvent$Action(t)
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 1)
            }), this.__onClose$Action
        }
        set _onClose$Action(t) {
            this.__onClose$Action = t
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    r = this.idService;
                return a.Logger.startActiveSpan("OnReady", function(o) {
                    return o && (o.setAttribute("code.function", "OnReady"), o.setAttribute("outsystems.function.key", "db9df04b-d6f7-42e5-8994-3710017f74d7"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                        e.ensureControllerAlive("OnReady"), t = e.callContext(t);
                        var _ = new a.DataTypes.VariableHolder,
                            v = new a.DataTypes.VariableHolder;
                        return a.Flow.executeAsyncFlow(function() {
                            return n.flush(), w.layoutReady$Action(t).then(function() {
                                v.value = w.setLang$Action("", t), _.value = w.addFavicon$Action("favicon.png", t)
                            })
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(t) {
            this.__onReady$Action = t
        }
        onLanguageChange$Action(t, n) {
            var e = this.controller;
            return a.Logger.startActiveSpan("OnLanguageChange__proxy", function(r) {
                return r && (r.setAttribute("code.function", "OnLanguageChange"), r.setAttribute("outsystems.function.key", "3d152a65-a804-4cfa-abb7-5fc11c98a757"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                    return e.safeExecuteClientAction(e._onLanguageChange$Action, n, t)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        onDestroy$Action(t) {
            var n = this.controller;
            return a.Logger.startActiveSpan("OnDestroy__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnDestroy"), e.setAttribute("outsystems.function.key", "49e42bbe-a8c8-4792-a315-b8d38ebcee22"), e.setAttribute("outsystems.function.owner.name", "uae"), e.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onDestroy$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        backButtonOnClick$Action(t) {
            var n = this.controller;
            return a.Logger.startActiveSpan("BackButtonOnClick__proxy", function(e) {
                return e && (e.setAttribute("code.function", "BackButtonOnClick"), e.setAttribute("outsystems.function.key", "8bcdd708-13c9-4e16-a8b7-d5f4324b7c6d"), e.setAttribute("outsystems.function.owner.name", "uae"), e.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._backButtonOnClick$Action, t)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        linkOnClick$Action(t) {
            var n = this.controller;
            return a.Logger.startActiveSpan("LinkOnClick__proxy", function(e) {
                e && (e.setAttribute("code.function", "LinkOnClick"), e.setAttribute("outsystems.function.key", "98312aa8-dcbe-48c0-889c-1dc3dbdb1fd5"), e.setAttribute("outsystems.function.owner.name", "uae"), e.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._linkOnClick$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onClose$Action(t) {
            var n = this.controller;
            return a.Logger.startActiveSpan("OnClose__proxy", function(e) {
                return e && (e.setAttribute("code.function", "OnClose"), e.setAttribute("outsystems.function.key", "b2d1f9e2-21b6-431a-ade2-6b3f9e1148b9"), e.setAttribute("outsystems.function.owner.name", "uae"), e.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onClose$Action, t)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        onReady$Action(t) {
            var n = this.controller;
            return a.Logger.startActiveSpan("OnReady__proxy", function(e) {
                return e && (e.setAttribute("code.function", "OnReady"), e.setAttribute("outsystems.function.key", "db9df04b-d6f7-42e5-8994-3710017f74d7"), e.setAttribute("outsystems.function.owner.name", "uae"), e.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onReady$Action, t)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        get onLeftActionEvent$Action() {
            return this.hasOwnProperty("_onLeftActionEvent$Action") || (this._onLeftActionEvent$Action = function() {
                return Promise.resolve()
            }), this._onLeftActionEvent$Action
        }
        set onLeftActionEvent$Action(t) {
            this._onLeftActionEvent$Action = t
        }
        get closeEvent$Action() {
            return this.hasOwnProperty("_closeEvent$Action") || (this._closeEvent$Action = function() {
                return Promise.resolve()
            }), this._closeEvent$Action
        }
        set closeEvent$Action(t) {
            this._closeEvent$Action = t
        }
        get languageChangeEvent$Action() {
            return this.hasOwnProperty("_languageChangeEvent$Action") || (this._languageChangeEvent$Action = function() {
                return Promise.resolve()
            }), this._languageChangeEvent$Action
        }
        set languageChangeEvent$Action(t) {
            this._languageChangeEvent$Action = t
        }
        get onRightActionEvent$Action() {
            return this.hasOwnProperty("_onRightActionEvent$Action") || (this._onRightActionEvent$Action = function() {
                return Promise.resolve()
            }), this._onRightActionEvent$Action
        }
        set onRightActionEvent$Action(t) {
            this._onRightActionEvent$Action = t
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(t) {
            this._onInitializeEventHandler = t
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(t) {
                var n = this.controller,
                    e = this.model,
                    r = this.idService;
                return n.onReady$Action(t)
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
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = function(t) {
                var n = this.controller,
                    e = this.model,
                    r = this.idService;
                return n.onDestroy$Action(t)
            }), this._onDestroyEventHandler
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
        get onSyncStartEventHandler() {
            return this.hasOwnProperty("_onSyncStartEventHandler") || (this._onSyncStartEventHandler = null), this._onSyncStartEventHandler
        }
        set onSyncStartEventHandler(t) {
            this._onSyncStartEventHandler = t
        }
        get onSyncCompleteEventHandler() {
            return this.hasOwnProperty("_onSyncCompleteEventHandler") || (this._onSyncCompleteEventHandler = null), this._onSyncCompleteEventHandler
        }
        set onSyncCompleteEventHandler(t) {
            this._onSyncCompleteEventHandler = t
        }
        get onSyncErrorEventHandler() {
            return this.hasOwnProperty("_onSyncErrorEventHandler") || (this._onSyncErrorEventHandler = null), this._onSyncErrorEventHandler
        }
        set onSyncErrorEventHandler(t) {
            this._onSyncErrorEventHandler = t
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(t) {
                return controller.handleError(t)
            }), this._handleError
        }
        set handleError(t) {
            this._handleError = t
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return I.defaultTimeout
        }
    };
    l(i, "ControllerInner");
    let g = i;
    H = g, H.registerVariableGroupType("uae.Layouts.LayoutOnboardingMobileNotAuthorized.OnLanguageChange$vars", [{
        name: "Language",
        attrName: "languageInLocal",
        mandatory: !0,
        dataType: a.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }])
}
var H, et = new a.Controller.ControllerFactory(H, x);
var ot = T.PlaceholderContent,
    Ht = T.IteratorPlaceholderContent,
    rt = l(function() {
        var g = W(function(i) {
            var h = i.model,
                t = i.controller,
                n = i.controller.idService,
                e = t.validationService,
                r = t.callContext(),
                o = Q,
                _ = G,
                v = {
                    props: i,
                    validateWidget: l(function(d) {
                        i.validateWidget(i, d)
                    }, "validateWidget")
                },
                u = h,
                E = z,
                st = M,
                y = U();
            return c.createElement("div", i.rootNodeProperties, c.createElement(f, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "height: 100vh;"
                },
                style: "layout layout-top",
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "0"
                },
                _widgetRecordProvider: u
            }, c.createElement(f, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    role: "main"
                },
                style: "container",
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "1"
                },
                _widgetRecordProvider: u
            }, c.createElement(f, {
                align: 0,
                animate: !1,
                style: "top-container",
                visible: !0,
                _idProps: {
                    service: n,
                    name: "TopNavigationBar"
                },
                _widgetRecordProvider: u
            }, c.createElement(f, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: n,
                    name: "BackButtonContainer"
                },
                _widgetRecordProvider: u
            }, E(h.variables.has_back_buttonIn, !1, this, function() {
                return [c.createElement(f, {
                    align: 0,
                    animate: !1,
                    extendedEvents: {
                        onClick: l(function() {
                            return Promise.resolve().then(function() {
                                var d = typeof r != "undefined" && r !== null ? r.clone() : t.callContext().clone();
                                return t.backButtonOnClick$Action(t.callContext(d))
                            })
                        }, "onClick")
                    },
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: "back-button cursor-pointer mirror-flip",
                    visible: !0,
                    _idProps: {
                        service: n,
                        name: "BackButton"
                    },
                    _widgetRecordProvider: u
                }, c.createElement(b, {
                    image: m.VersionedURL.getVersionedUrl("img/uae.backarrow.svg"),
                    type: 0,
                    _idProps: {
                        service: n,
                        uuid: "5"
                    },
                    _widgetRecordProvider: u
                }))]
            }, function() {
                return []
            })), c.createElement(f, {
                align: 0,
                animate: !0,
                extendedProperties: {
                    style: "flex-grow: 1; padding: 0px 16px;"
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "100%"
                },
                visible: h.variables.show_progress_barIn,
                _idProps: {
                    service: n,
                    name: "ProgressBarContainer2"
                },
                _widgetRecordProvider: u,
                visible_dataFetchStatus: A.calculateDataFetchStatus(h.variables._show_progress_barInDataFetchStatus)
            }, c.createElement(k, {
                getOwnerSpan: l(function() {
                    return y.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: l(function() {
                    return y.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Thickness: 8,
                    ExtendedClass: "eu",
                    Progress: 0,
                    ProgressColor: B.color.primary,
                    OptionalConfigs: h.getCachedValue(n.getId("EU_Progressbar.OptionalConfigs"), function() {
                        return (function() {
                            var d = new V;
                            return d.animateInitialProgressAttr = !1, d
                        })()
                    })
                },
                events: {
                    _handleError: l(function(d) {
                        t.handleError(d)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: e
                },
                _idProps: {
                    service: n,
                    name: "EU_Progressbar",
                    alias: "1"
                },
                _widgetRecordProvider: u,
                placeholders: {
                    content: ot.Empty
                },
                _dependencies: []
            })), c.createElement(f, {
                align: 0,
                animate: !1,
                style: "flex gap-x-2",
                visible: !0,
                _idProps: {
                    service: n,
                    name: "RightsideContainer"
                },
                _widgetRecordProvider: u
            }, c.createElement(f, {
                align: 0,
                animate: !0,
                extendedEvents: {
                    onClick: l(function() {
                        return Promise.resolve().then(function() {
                            var d = typeof r != "undefined" && r !== null ? r.clone() : t.callContext().clone();
                            return t.onLanguageChange$Action(p.getlanguage() === "en-US" ? "ar-001" : "en-US", t.callContext(d))
                        })
                    }, "onClick")
                },
                style: "language-switcher",
                visible: h.variables.showLanguageSwitcherIn,
                _idProps: {
                    service: n,
                    uuid: "9"
                },
                _widgetRecordProvider: u,
                visible_dataFetchStatus: A.calculateDataFetchStatus(h.variables._showLanguageSwitcherInDataFetchStatus)
            }, c.createElement(b, {
                image: m.VersionedURL.getVersionedUrl("img/uae.globesm.svg"),
                type: 0,
                _idProps: {
                    service: n,
                    uuid: "10"
                },
                _widgetRecordProvider: u
            }), c.createElement(f, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "11"
                },
                _widgetRecordProvider: u
            }, c.createElement(K, {
                extendedProperties: {
                    style: "color: #000;"
                },
                value: h.getCachedValue(n.getId("CFUiVf_7ikG18Mk22mWkzg.Value"), function() {
                    return I.getCurrentLanguageLabel$Action(r).currentLanguageLabelOut
                }),
                _idProps: {
                    service: n,
                    uuid: "12"
                },
                _widgetRecordProvider: u
            }))), E(h.variables.hasRighActionIn, !1, this, function() {
                return [c.createElement(f, {
                    align: 0,
                    animate: !1,
                    extendedEvents: {
                        onClick: l(function() {
                            var d = typeof r != "undefined" && r !== null ? r.clone() : t.callContext().clone();
                            t.onRightActionEvent$Action(t.callContext(d))
                        }, "onClick")
                    },
                    style: "back-button cursor-pointer",
                    visible: !0,
                    _idProps: {
                        service: n,
                        name: "RightAction"
                    },
                    _widgetRecordProvider: u
                }, E(h.variables.shouldShowQuestionInfoIn, !1, this, function() {
                    return [c.createElement(b, {
                        image: m.VersionedURL.getVersionedUrl("img/uae.infoicon.svg"),
                        type: 0,
                        _idProps: {
                            service: n,
                            uuid: "14"
                        },
                        _widgetRecordProvider: u
                    })]
                }, function() {
                    return [c.createElement(b, {
                        image: m.VersionedURL.getVersionedUrl("img/uae.ic_info.svg"),
                        type: 0,
                        _idProps: {
                            service: n,
                            uuid: "15"
                        },
                        _widgetRecordProvider: u
                    })]
                }))]
            }, function() {
                return []
            }), E(h.variables.has_close_iconIn, !1, this, function() {
                return [c.createElement(f, {
                    align: 0,
                    animate: !1,
                    style: "close-icon cursor-pointer",
                    visible: !0,
                    _idProps: {
                        service: n,
                        uuid: "16"
                    },
                    _widgetRecordProvider: u
                }, c.createElement(b, {
                    extendedEvents: {
                        onClick: l(function() {
                            return Promise.resolve().then(function() {
                                var d = typeof r != "undefined" && r !== null ? r.clone() : t.callContext().clone();
                                return t.onClose$Action(t.callContext(d))
                            })
                        }, "onClick")
                    },
                    extendedProperties: {
                        style: "font-size: 16px;"
                    },
                    gridProperties: {
                        width: "30px"
                    },
                    image: m.VersionedURL.getVersionedUrl("img/uae.close.svg"),
                    style: "close-icon",
                    type: 0,
                    _idProps: {
                        service: n,
                        uuid: "17"
                    },
                    _widgetRecordProvider: u
                }))]
            }, function() {
                return []
            }))), c.createElement(F, {
                align: 0,
                content: v.props.placeholders.content,
                style: h.getCachedValue(n.getId("Content.Style"), function() {
                    return h.variables.isCustomStyleIn ? "display-flex full-height flex-direction-column" : ""
                }, function() {
                    return h.variables.isCustomStyleIn
                }),
                _idProps: {
                    service: n,
                    name: "Content"
                },
                _widgetRecordProvider: u,
                style_dataFetchStatus: A.calculateDataFetchStatus(h.variables._isCustomStyleInDataFetchStatus)
            }), c.createElement(j, {
                extendedProperties: {
                    style: "align-items: center; background: transparent; box-shadow: none; display: flex; justify-content: center; min-height: unset !important; min-width: unset !important; width: unset;"
                },
                showPopup: h.variables.show_loaderIn,
                style: '"popup-dialog"',
                _idProps: {
                    service: n,
                    uuid: "19"
                },
                _widgetRecordProvider: u,
                showPopup_dataFetchStatus: A.calculateDataFetchStatus(h.variables._show_loaderInDataFetchStatus)
            }, c.createElement(R, {
                getOwnerSpan: l(function() {
                    return y.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: l(function() {
                    return y.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    SVGCode: `<svg width='64' height='64' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'>\r
<g clip-path='url(#clip0_16507_129853)'>\r
<path d='M16 28.4444C16 21.5716 21.5716 16 28.4444 16H35.5556C42.4284 16 48 21.5716 48 28.4444V35.5556C48 42.4284 42.4284 48 35.5556 48H28.4444C21.5716 48 16 42.4284 16 35.5556V28.4444Z' fill='#FF444F'/>\r
<path d='M36.0744 22.6296L35.0425 28.4813H31.4608C28.1192 28.4813 24.9341 31.1886 24.3438 34.5301L24.0939 35.9524C23.5064 39.294 25.7359 42.0014 29.0775 42.0014H32.0648C34.5003 42.0014 36.8204 40.0298 37.2488 37.5944L40 21.9986L36.0744 22.6296ZM33.5329 37.0425C33.4011 37.7948 32.7238 38.4072 31.9715 38.4072H30.1565C28.6546 38.4072 27.6497 37.188 27.9133 35.6833L28.0698 34.7965C28.3361 33.2946 29.7694 32.0727 31.2713 32.0727H34.4093L33.5329 37.0425Z' fill='white'/>\r
<g>\r
  <path d='M32 62C48.5685 62 62 48.5685 62 32C62 15.4315 48.5685 2 32 2C15.4315 2 2 15.4315 2 32C2 48.5685 15.4315 62 32 62Z' stroke='#EBECEF' stroke-width='4'/>\r
  <path d='M32 62C15.4315 62 2 48.5685 2 32' stroke='#FF444F' stroke-width='4' stroke-linecap='round'>\r
    <animateTransform\r
      attributeName='transform'\r
      attributeType='XML'\r
      type='rotate'\r
      from='0 32 32'\r
      to='360 32 32'\r
      dur='2s'\r
      repeatCount='indefinite'/>\r
  </path>\r
</g>\r
</g>\r
<defs>\r
<clipPath id='clip0_16507_129853'>\r
<rect width='64' height='64' fill='white'/>\r
</clipPath>\r
</defs>\r
</svg>`
                },
                events: {
                    _handleError: l(function(d) {
                        t.handleError(d)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: e
                },
                _idProps: {
                    service: n,
                    uuid: "20",
                    alias: "2"
                },
                _widgetRecordProvider: u,
                _dependencies: []
            }))), c.createElement(L, {
                getOwnerSpan: l(function() {
                    return y.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: l(function() {
                    return y.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: l(function(d) {
                        t.handleError(d)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: e
                },
                _idProps: {
                    service: n,
                    uuid: "21",
                    alias: "3"
                },
                _widgetRecordProvider: u,
                _dependencies: []
            }), c.createElement(Z, {
                extendedProperties: {
                    role: "contentinfo",
                    className: "content-bottom"
                },
                tag: "footer",
                _idProps: {
                    service: n,
                    uuid: "22"
                },
                _widgetRecordProvider: u
            }, c.createElement(F, {
                align: 0,
                content: v.props.placeholders.footer,
                style: "footer ThemeGrid_Container ph",
                _idProps: {
                    service: n,
                    name: "Footer"
                },
                _widgetRecordProvider: u
            }))))
        }, {
            topLevelComponent: !1,
            getAttributes: l(function() {
                return {
                    codeFunction: "LayoutOnboardingMobileNotAuthorized",
                    functionKey: "abf0c821-5987-4641-9b56-381e6d6d0fcf",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Layouts.LayoutOnboardingMobileNotAuthorized",
            modelFactory: Y,
            controllerFactory: et
        });
        return g.getCssDependencies = function() {
            return ["css/uae.Layouts.LayoutOnboardingMobileNotAuthorized.css", "css/OutSystemsReactWidgets.css"]
        }, g.getJsDependencies = function() {
            return []
        }, g.getBlocks = function() {
            return [k, R, L]
        }, g
    }, "componentFactory"),
    Bt = rt();
export {
    Bt as a
};