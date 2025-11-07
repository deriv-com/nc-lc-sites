import {
    a as L
} from "./_oschunk-L6JZD7VU.js";
import {
    a as N
} from "./_oschunk-RVD4FS25.js";
import {
    a as $
} from "./_oschunk-YB2J7GTX.js";
import {
    a as k
} from "./_oschunk-HFW3V2GI.js";
import {
    a as j,
    f as _,
    h as q,
    n as A,
    r as J,
    s as F
} from "./_oschunk-VR5BNL2K.js";
import {
    a as se,
    g as P,
    m as z,
    o as G,
    q as Q,
    r as K,
    s as X,
    t as Z
} from "./_oschunk-4VHUVDBV.js";
import {
    a as U
} from "./_oschunk-KXORGPRQ.js";
import {
    Hb as W,
    Qb as p,
    Sb as m,
    a as M,
    tb as E,
    ub as D
} from "./_oschunk-Z7QRTJDJ.js";
import {
    I as w,
    W as I,
    c,
    e as oe,
    p as S
} from "./_oschunk-M5BUVJ72.js";
var l = I,
    H = class H extends l.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("has_back_button", "has_back_buttonIn", "has_back_button", !0, !1, l.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_has_back_buttonInDataFetchStatus", "_has_back_buttonInDataFetchStatus", "_has_back_buttonInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("hasRighAction", "hasRighActionIn", "hasRighAction", !0, !1, l.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_hasRighActionInDataFetchStatus", "_hasRighActionInDataFetchStatus", "_hasRighActionInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("back_destination", "back_destinationIn", "back_destination", !0, !1, l.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_back_destinationInDataFetchStatus", "_back_destinationInDataFetchStatus", "_back_destinationInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("show_loader", "show_loaderIn", "show_loader", !0, !1, l.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_show_loaderInDataFetchStatus", "_show_loaderInDataFetchStatus", "_show_loaderInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("hasActionLeftButton", "hasActionLeftButtonIn", "hasActionLeftButton", !0, !1, l.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_hasActionLeftButtonInDataFetchStatus", "_hasActionLeftButtonInDataFetchStatus", "_hasActionLeftButtonInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("has_close_icon", "has_close_iconIn", "has_close_icon", !0, !1, l.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_has_close_iconInDataFetchStatus", "_has_close_iconInDataFetchStatus", "_has_close_iconInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("is_demo", "is_demoIn", "is_demo", !0, !1, l.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_is_demoInDataFetchStatus", "_is_demoInDataFetchStatus", "_is_demoInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("show_progress_bar", "show_progress_barIn", "show_progress_bar", !0, !1, l.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_show_progress_barInDataFetchStatus", "_show_progress_barInDataFetchStatus", "_show_progress_barInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ShowLanguageSwitcher", "showLanguageSwitcherIn", "ShowLanguageSwitcher", !0, !1, l.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_showLanguageSwitcherInDataFetchStatus", "_showLanguageSwitcherInDataFetchStatus", "_showLanguageSwitcherInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("shouldShowQuestionInfo", "shouldShowQuestionInfoIn", "shouldShowQuestionInfo", !0, !1, l.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_shouldShowQuestionInfoInDataFetchStatus", "_shouldShowQuestionInfoInDataFetchStatus", "_shouldShowQuestionInfoInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsCustomStyle", "isCustomStyleIn", "IsCustomStyle", !0, !1, l.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isCustomStyleInDataFetchStatus", "_isCustomStyleInDataFetchStatus", "_isCustomStyleInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(l.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
c(H, "VariablesRecord");
var O = H;
O.init();
var B = class B extends l.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
c(B, "WidgetsRecord");
var V = B,
    C = class C extends l.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return O
        }
        static getWidgetsRecordConstructor() {
            return V
        }
        static get hasValidationWidgets() {
            return C._hasValidationWidgetsValue === void 0 && (C._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0), C._hasValidationWidgetsValue
        }
        setInputs(i) {
            "has_back_button" in i && (this.variables.has_back_buttonIn = i.has_back_button, "_has_back_buttonInDataFetchStatus" in i && (this.variables._has_back_buttonInDataFetchStatus = i._has_back_buttonInDataFetchStatus)), "hasRighAction" in i && (this.variables.hasRighActionIn = i.hasRighAction, "_hasRighActionInDataFetchStatus" in i && (this.variables._hasRighActionInDataFetchStatus = i._hasRighActionInDataFetchStatus)), "back_destination" in i && (this.variables.back_destinationIn = i.back_destination, "_back_destinationInDataFetchStatus" in i && (this.variables._back_destinationInDataFetchStatus = i._back_destinationInDataFetchStatus)), "show_loader" in i && (this.variables.show_loaderIn = i.show_loader, "_show_loaderInDataFetchStatus" in i && (this.variables._show_loaderInDataFetchStatus = i._show_loaderInDataFetchStatus)), "hasActionLeftButton" in i && (this.variables.hasActionLeftButtonIn = i.hasActionLeftButton, "_hasActionLeftButtonInDataFetchStatus" in i && (this.variables._hasActionLeftButtonInDataFetchStatus = i._hasActionLeftButtonInDataFetchStatus)), "has_close_icon" in i && (this.variables.has_close_iconIn = i.has_close_icon, "_has_close_iconInDataFetchStatus" in i && (this.variables._has_close_iconInDataFetchStatus = i._has_close_iconInDataFetchStatus)), "is_demo" in i && (this.variables.is_demoIn = i.is_demo, "_is_demoInDataFetchStatus" in i && (this.variables._is_demoInDataFetchStatus = i._is_demoInDataFetchStatus)), "show_progress_bar" in i && (this.variables.show_progress_barIn = i.show_progress_bar, "_show_progress_barInDataFetchStatus" in i && (this.variables._show_progress_barInDataFetchStatus = i._show_progress_barInDataFetchStatus)), "ShowLanguageSwitcher" in i && (this.variables.showLanguageSwitcherIn = i.ShowLanguageSwitcher, "_showLanguageSwitcherInDataFetchStatus" in i && (this.variables._showLanguageSwitcherInDataFetchStatus = i._showLanguageSwitcherInDataFetchStatus)), "shouldShowQuestionInfo" in i && (this.variables.shouldShowQuestionInfoIn = i.shouldShowQuestionInfo, "_shouldShowQuestionInfoInDataFetchStatus" in i && (this.variables._shouldShowQuestionInfoInDataFetchStatus = i._shouldShowQuestionInfoInDataFetchStatus)), "IsCustomStyle" in i && (this.variables.isCustomStyleIn = i.IsCustomStyle, "_isCustomStyleInDataFetchStatus" in i && (this.variables._isCustomStyleInDataFetchStatus = i._isCustomStyleInDataFetchStatus))
        }
    };
c(C, "Model");
var T = C;
T._hasValidationWidgetsValue = void 0;
var ae = new l.Model.ModelFactory(T);
var u = oe(se());
var ie = {};
var n = I; {
    let i = class i extends n.Controller.BaseViewController {
        constructor(e, a, t) {
            super(e, a, t, ie);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get getClientProfile$ServerAction() {
            return this.hasOwnProperty("_getClientProfile$ServerAction") || (this._getClientProfile$ServerAction = function(e, a) {
                var t = this.controller;
                return n.Logger.startActiveSpan("GetClientProfile", function(o) {
                    return o && (o.setAttribute("code.function", "GetClientProfile"), o.setAttribute("outsystems.function.key", "5ded5548-621f-4be6-bb2a-1e7a68f5c035"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), n.Flow.tryFinally(function() {
                        var r = {
                            authorization: n.DataConversion.ServerDataConverter.to(e, n.DataTypes.DataTypes.Text)
                        };
                        return t.callServerAction("GetClientProfile", "screenservices/uae/Layouts/LayoutOnboardingMobile/ActionGetClientProfile", "XyCUwmGl8eh0OBf6WziXgw", r, t.callContext(a), void 0, void 0, !0).then(function(h) {
                            var v = new(t.constructor.getVariableGroupType("uae.Layouts.LayoutOnboardingMobile$ActionGetClientProfile"));
                            return v.responseOut = n.DataConversion.ServerDataConverter.from(h.Response, E), v
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 0)
            }), this._getClientProfile$ServerAction
        }
        set getClientProfile$ServerAction(e) {
            this._getClientProfile$ServerAction = e
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(e) {
                var a = this.model,
                    t = this.controller,
                    o = this.idService;
                return n.Logger.startActiveSpan("OnDestroy", function(r) {
                    r && (r.setAttribute("code.function", "OnDestroy"), r.setAttribute("outsystems.function.key", "143a4f90-d0b3-42de-b57b-736c72281ef1"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnDestroy"), e = t.callContext(e), p.layoutDestroy$Action(e)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(e) {
            this.__onDestroy$Action = e
        }
        get _backButtonOnClick$Action() {
            return this.hasOwnProperty("__backButtonOnClick$Action") || (this.__backButtonOnClick$Action = function(e) {
                var a = this.model,
                    t = this.controller,
                    o = this.idService;
                return n.Logger.startActiveSpan("BackButtonOnClick", function(r) {
                    return r && (r.setAttribute("code.function", "BackButtonOnClick"), r.setAttribute("outsystems.function.key", "5df36089-28b2-4fae-abe1-c1049714a57b"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("BackButtonOnClick"), e = t.callContext(e), n.Flow.executeAsyncFlow(function() {
                            return n.Flow.executeSequence(function() {
                                return a.variables.hasActionLeftButtonIn ? t.onLeftActionEvent$Action(e) : a.variables.back_destinationIn === "otp" ? n.Flow.returnAsync(n.Navigation.navigateTo(n.Navigation.generateScreenURL("uae", "otp", {}), n.Transitions.createTransition(n.Transitions.TransitionAnimation.Default), e, !0)) : a.variables.back_destinationIn === "hub" ? n.Flow.returnAsync(n.Navigation.navigateTo(n.Navigation.generateScreenURL("uae", "home", {}), n.Transitions.createTransition(n.Transitions.TransitionAnimation.Default), e, !0)) : a.variables.back_destinationIn === "complete_profile" ? n.Flow.returnAsync(n.Navigation.navigateTo(n.Navigation.generateScreenURL("uae", "home", {}), n.Transitions.createTransition(n.Transitions.TransitionAnimation.Default), e, !0)) : a.variables.back_destinationIn === "trade_tab" ? (D.setuae_active_trade_tab_real(a.variables.is_demoIn === !1), n.Flow.returnAsync(n.Navigation.navigateTo(n.Navigation.generateScreenURL("uae", "trade", {}), n.Transitions.createTransition(n.Transitions.TransitionAnimation.Default), e, !0))) : a.variables.back_destinationIn === "email_verification" ? n.Flow.returnAsync(n.Navigation.navigateTo(n.Navigation.generateScreenURL("uae", "profile-verification-otp", {}), n.Transitions.createTransition(n.Transitions.TransitionAnimation.Default), e, !0)) : a.variables.back_destinationIn === "mt5_login_details" ? n.Flow.returnAsync(n.Navigation.navigateTo(n.Navigation.generateScreenURL("uae", "mt5/login-details", {}), n.Transitions.createTransition(n.Transitions.TransitionAnimation.Default), e, !0)) : n.Flow.returnAsync(n.Navigation.navigateBack(null, e, !0))
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__backButtonOnClick$Action
        }
        set _backButtonOnClick$Action(e) {
            this.__backButtonOnClick$Action = e
        }
        get _onLanguageChange$Action() {
            return this.hasOwnProperty("__onLanguageChange$Action") || (this.__onLanguageChange$Action = function(e, a) {
                var t = this.model,
                    o = this.controller,
                    r = this.idService;
                return n.Logger.startActiveSpan("OnLanguageChange", function(h) {
                    return h && (h.setAttribute("code.function", "OnLanguageChange"), h.setAttribute("outsystems.function.key", "64947c61-987b-489e-85fe-d3ec612e0d83"), h.setAttribute("outsystems.function.owner.name", "uae"), h.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), h.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                        o.ensureControllerAlive("OnLanguageChange"), a = o.callContext(a);
                        var v = new n.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("uae.Layouts.LayoutOnboardingMobile.OnLanguageChange$vars")));
                        return v.value.languageInLocal = e, n.Flow.executeAsyncFlow(function() {
                            return m.changeLanguage$Action(v.value.languageInLocal, a), o.languageChangeEvent$Action(a)
                        })
                    }, function() {
                        h && h.end()
                    })
                }, 1)
            }), this.__onLanguageChange$Action
        }
        set _onLanguageChange$Action(e) {
            this.__onLanguageChange$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var a = this.model,
                    t = this.controller,
                    o = this.idService;
                return n.Logger.startActiveSpan("OnReady", function(r) {
                    return r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "b160b52f-2025-4c79-8090-4598cc87ea68"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var h = new n.DataTypes.VariableHolder,
                            v = new n.DataTypes.VariableHolder,
                            s = new n.DataTypes.VariableHolder,
                            b = new n.DataTypes.VariableHolder,
                            x = new n.DataTypes.VariableHolder;
                        return n.Flow.executeAsyncFlow(function() {
                            return a.flush(), p.layoutReady$Action(e).then(function() {
                                return x.value = p.setLang$Action("", e), b.value = p.addFavicon$Action("favicon.png", e), v.value = m.getAuth$Action(e), a.flush(), m.getUserOnboardingStatus$Action(e).then(function(g) {
                                    s.value = g
                                })
                            }).then(function() {
                                return a.flush(), t.getClientProfile$ServerAction(v.value.tokenOut, e).then(function(g) {
                                    h.value = g
                                })
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _linkOnClick$Action() {
            return this.hasOwnProperty("__linkOnClick$Action") || (this.__linkOnClick$Action = function(e) {
                var a = this.model,
                    t = this.controller,
                    o = this.idService;
                return n.Logger.startActiveSpan("LinkOnClick", function(r) {
                    r && (r.setAttribute("code.function", "LinkOnClick"), r.setAttribute("outsystems.function.key", "e23b9966-918d-4c2c-9c74-681ecdc5789e"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("LinkOnClick"), e = t.callContext(e), n.Navigation.navigateTo(n.Navigation.generateScreenURL("uae", "trade", {
                            is_real: n.DataConversion.ServerDataConverter.to(!0, n.DataTypes.DataTypes.Boolean)
                        }), n.Transitions.createTransition(n.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__linkOnClick$Action
        }
        set _linkOnClick$Action(e) {
            this.__linkOnClick$Action = e
        }
        get _onClose$Action() {
            return this.hasOwnProperty("__onClose$Action") || (this.__onClose$Action = function(e) {
                var a = this.model,
                    t = this.controller,
                    o = this.idService;
                return n.Logger.startActiveSpan("OnClose", function(r) {
                    return r && (r.setAttribute("code.function", "OnClose"), r.setAttribute("outsystems.function.key", "f471e77b-1d19-4a2f-b66e-70ab27193e39"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("OnClose"), e = t.callContext(e), n.Flow.executeAsyncFlow(function() {
                            return t.closeEvent$Action(e)
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__onClose$Action
        }
        set _onClose$Action(e) {
            this.__onClose$Action = e
        }
        onDestroy$Action(e) {
            var a = this.controller;
            return n.Logger.startActiveSpan("OnDestroy__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnDestroy"), t.setAttribute("outsystems.function.key", "143a4f90-d0b3-42de-b57b-736c72281ef1"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._onDestroy$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        backButtonOnClick$Action(e) {
            var a = this.controller;
            return n.Logger.startActiveSpan("BackButtonOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "BackButtonOnClick"), t.setAttribute("outsystems.function.key", "5df36089-28b2-4fae-abe1-c1049714a57b"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                    return a.safeExecuteClientAction(a._backButtonOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onLanguageChange$Action(e, a) {
            var t = this.controller;
            return n.Logger.startActiveSpan("OnLanguageChange__proxy", function(o) {
                return o && (o.setAttribute("code.function", "OnLanguageChange"), o.setAttribute("outsystems.function.key", "64947c61-987b-489e-85fe-d3ec612e0d83"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._onLanguageChange$Action, a, e)
                }, function() {
                    o && o.end()
                })
            }, 0)
        }
        onReady$Action(e) {
            var a = this.controller;
            return n.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "b160b52f-2025-4c79-8090-4598cc87ea68"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                    return a.safeExecuteClientAction(a._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        linkOnClick$Action(e) {
            var a = this.controller;
            return n.Logger.startActiveSpan("LinkOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "LinkOnClick"), t.setAttribute("outsystems.function.key", "e23b9966-918d-4c2c-9c74-681ecdc5789e"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._linkOnClick$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onClose$Action(e) {
            var a = this.controller;
            return n.Logger.startActiveSpan("OnClose__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnClose"), t.setAttribute("outsystems.function.key", "f471e77b-1d19-4a2f-b66e-70ab27193e39"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                    return a.safeExecuteClientAction(a._onClose$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        get closeEvent$Action() {
            return this.hasOwnProperty("_closeEvent$Action") || (this._closeEvent$Action = function() {
                return Promise.resolve()
            }), this._closeEvent$Action
        }
        set closeEvent$Action(e) {
            this._closeEvent$Action = e
        }
        get onLeftActionEvent$Action() {
            return this.hasOwnProperty("_onLeftActionEvent$Action") || (this._onLeftActionEvent$Action = function() {
                return Promise.resolve()
            }), this._onLeftActionEvent$Action
        }
        set onLeftActionEvent$Action(e) {
            this._onLeftActionEvent$Action = e
        }
        get onRightActionEvent$Action() {
            return this.hasOwnProperty("_onRightActionEvent$Action") || (this._onRightActionEvent$Action = function() {
                return Promise.resolve()
            }), this._onRightActionEvent$Action
        }
        set onRightActionEvent$Action(e) {
            this._onRightActionEvent$Action = e
        }
        get languageChangeEvent$Action() {
            return this.hasOwnProperty("_languageChangeEvent$Action") || (this._languageChangeEvent$Action = function() {
                return Promise.resolve()
            }), this._languageChangeEvent$Action
        }
        set languageChangeEvent$Action(e) {
            this._languageChangeEvent$Action = e
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var a = this.controller,
                    t = this.model,
                    o = this.idService;
                return a.onReady$Action(e)
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
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = function(e) {
                var a = this.controller,
                    t = this.model,
                    o = this.idService;
                return a.onDestroy$Action(e)
            }), this._onDestroyEventHandler
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
            return m.defaultTimeout
        }
    };
    c(i, "ControllerInner");
    let y = i;
    R = y, R.registerVariableGroupType("uae.Layouts.LayoutOnboardingMobile$ActionGetClientProfile", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: n.DataTypes.DataTypes.Record,
        defaultValue: c(function() {
            return new E
        }, "defaultValue"),
        complexType: E
    }]), R.registerVariableGroupType("uae.Layouts.LayoutOnboardingMobile.OnLanguageChange$vars", [{
        name: "Language",
        attrName: "languageInLocal",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }])
}
var R, re = new n.Controller.ControllerFactory(R, U);
var le = P.PlaceholderContent,
    xe = P.IteratorPlaceholderContent,
    de = c(function() {
        var y = G(function(i) {
            var f = i.model,
                e = i.controller,
                a = i.controller.idService,
                t = e.validationService,
                o = e.callContext(),
                r = X,
                h = Z,
                v = {
                    props: i,
                    validateWidget: c(function(d) {
                        i.validateWidget(i, d)
                    }, "validateWidget")
                },
                s = f,
                b = K,
                x = Q,
                g = z();
            return u.createElement("div", i.rootNodeProperties, u.createElement(_, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "height: 100vh;"
                },
                style: "layout layout-top",
                visible: !0,
                _idProps: {
                    service: a,
                    uuid: "0"
                },
                _widgetRecordProvider: s
            }, u.createElement(_, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    role: "main"
                },
                style: "container",
                visible: !0,
                _idProps: {
                    service: a,
                    uuid: "1"
                },
                _widgetRecordProvider: s
            }, u.createElement(_, {
                align: 0,
                animate: !1,
                style: "top-container",
                visible: !0,
                _idProps: {
                    service: a,
                    name: "TopNavigationBar"
                },
                _widgetRecordProvider: s
            }, u.createElement(_, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: a,
                    name: "BackButtonContainer"
                },
                _widgetRecordProvider: s
            }, b(f.variables.has_back_buttonIn, !1, this, function() {
                return [u.createElement(_, {
                    align: 0,
                    animate: !1,
                    extendedEvents: {
                        onClick: c(function() {
                            return Promise.resolve().then(function() {
                                var d = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                                return e.backButtonOnClick$Action(e.callContext(d))
                            })
                        }, "onClick")
                    },
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: "back-button cursor-pointer mirror-flip",
                    visible: !0,
                    _idProps: {
                        service: a,
                        name: "BackButton"
                    },
                    _widgetRecordProvider: s
                }, u.createElement(A, {
                    image: S.VersionedURL.getVersionedUrl("img/uae.backarrow.svg"),
                    type: 0,
                    _idProps: {
                        service: a,
                        uuid: "5"
                    },
                    _widgetRecordProvider: s
                }))]
            }, function() {
                return []
            })), u.createElement(_, {
                align: 0,
                animate: !0,
                extendedProperties: {
                    style: "flex-grow: 1; padding: 0px 16px;"
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "100%"
                },
                visible: f.variables.show_progress_barIn,
                _idProps: {
                    service: a,
                    name: "ProgressBarContainer2"
                },
                _widgetRecordProvider: s,
                visible_dataFetchStatus: w.calculateDataFetchStatus(f.variables._show_progress_barInDataFetchStatus)
            }, u.createElement(L, {
                getOwnerSpan: c(function() {
                    return g.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: c(function() {
                    return g.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Progress: 0,
                    Thickness: 8,
                    ProgressColor: M.color.primary,
                    OptionalConfigs: f.getCachedValue(a.getId("EU_Progressbar.OptionalConfigs"), function() {
                        return (function() {
                            var d = new W;
                            return d.animateInitialProgressAttr = !1, d
                        })()
                    }),
                    ExtendedClass: "eu"
                },
                events: {
                    _handleError: c(function(d) {
                        e.handleError(d)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: t
                },
                _idProps: {
                    service: a,
                    name: "EU_Progressbar",
                    alias: "1"
                },
                _widgetRecordProvider: s,
                placeholders: {
                    content: le.Empty
                },
                _dependencies: []
            })), u.createElement(_, {
                align: 0,
                animate: !1,
                style: "flex gap-x-2",
                visible: !0,
                _idProps: {
                    service: a,
                    name: "RightsideContainer"
                },
                _widgetRecordProvider: s
            }, u.createElement(_, {
                align: 0,
                animate: !0,
                extendedEvents: {
                    onClick: c(function() {
                        return Promise.resolve().then(function() {
                            var d = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                            return e.onLanguageChange$Action(D.getlanguage() === "en-US" ? "ar-001" : "en-US", e.callContext(d))
                        })
                    }, "onClick")
                },
                style: "language-switcher",
                visible: f.variables.showLanguageSwitcherIn,
                _idProps: {
                    service: a,
                    uuid: "9"
                },
                _widgetRecordProvider: s,
                visible_dataFetchStatus: w.calculateDataFetchStatus(f.variables._showLanguageSwitcherInDataFetchStatus)
            }, u.createElement(A, {
                image: S.VersionedURL.getVersionedUrl("img/uae.globesm.svg"),
                type: 0,
                _idProps: {
                    service: a,
                    uuid: "10"
                },
                _widgetRecordProvider: s
            }), u.createElement(_, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: a,
                    uuid: "11"
                },
                _widgetRecordProvider: s
            }, u.createElement(q, {
                extendedProperties: {
                    style: "color: #000;"
                },
                value: f.getCachedValue(a.getId("d9qx6HpurUKWf0W9b9JkQA.Value"), function() {
                    return m.getCurrentLanguageLabel$Action(o).currentLanguageLabelOut
                }),
                _idProps: {
                    service: a,
                    uuid: "12"
                },
                _widgetRecordProvider: s
            }))), b(f.variables.hasRighActionIn, !1, this, function() {
                return [u.createElement(_, {
                    align: 0,
                    animate: !1,
                    extendedEvents: {
                        onClick: c(function() {
                            var d = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                            e.onRightActionEvent$Action(e.callContext(d))
                        }, "onClick")
                    },
                    style: "back-button cursor-pointer",
                    visible: !0,
                    _idProps: {
                        service: a,
                        name: "RightAction"
                    },
                    _widgetRecordProvider: s
                }, b(f.variables.shouldShowQuestionInfoIn, !1, this, function() {
                    return [u.createElement(A, {
                        image: S.VersionedURL.getVersionedUrl("img/uae.infoicon.svg"),
                        type: 0,
                        _idProps: {
                            service: a,
                            uuid: "14"
                        },
                        _widgetRecordProvider: s
                    })]
                }, function() {
                    return [u.createElement(A, {
                        image: S.VersionedURL.getVersionedUrl("img/uae.ic_info.svg"),
                        type: 0,
                        _idProps: {
                            service: a,
                            uuid: "15"
                        },
                        _widgetRecordProvider: s
                    })]
                }))]
            }, function() {
                return []
            }), b(f.variables.has_close_iconIn, !1, this, function() {
                return [u.createElement(_, {
                    align: 0,
                    animate: !1,
                    style: "close-icon cursor-pointer",
                    visible: !0,
                    _idProps: {
                        service: a,
                        uuid: "16"
                    },
                    _widgetRecordProvider: s
                }, u.createElement(A, {
                    extendedEvents: {
                        onClick: c(function() {
                            return Promise.resolve().then(function() {
                                var d = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                                return e.onClose$Action(e.callContext(d))
                            })
                        }, "onClick")
                    },
                    extendedProperties: {
                        style: "font-size: 16px;"
                    },
                    gridProperties: {
                        width: "30px"
                    },
                    image: S.VersionedURL.getVersionedUrl("img/uae.close.svg"),
                    style: "close-icon",
                    type: 0,
                    _idProps: {
                        service: a,
                        uuid: "17"
                    },
                    _widgetRecordProvider: s
                }))]
            }, function() {
                return []
            }))), u.createElement(F, {
                align: 0,
                content: v.props.placeholders.content,
                style: f.getCachedValue(a.getId("Content.Style"), function() {
                    return f.variables.isCustomStyleIn ? "display-flex full-height flex-direction-column" : ""
                }, function() {
                    return f.variables.isCustomStyleIn
                }),
                _idProps: {
                    service: a,
                    name: "Content"
                },
                _widgetRecordProvider: s,
                style_dataFetchStatus: w.calculateDataFetchStatus(f.variables._isCustomStyleInDataFetchStatus)
            }), u.createElement(J, {
                extendedProperties: {
                    style: "align-items: center; background: transparent; box-shadow: none; display: flex; justify-content: center; min-height: unset !important; min-width: unset !important; width: unset;"
                },
                showPopup: f.variables.show_loaderIn,
                style: '"popup-dialog"',
                _idProps: {
                    service: a,
                    uuid: "19"
                },
                _widgetRecordProvider: s,
                showPopup_dataFetchStatus: w.calculateDataFetchStatus(f.variables._show_loaderInDataFetchStatus)
            }, u.createElement(k, {
                getOwnerSpan: c(function() {
                    return g.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: c(function() {
                    return g.getChildSpan("destroy")
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
                    _handleError: c(function(d) {
                        e.handleError(d)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: t
                },
                _idProps: {
                    service: a,
                    uuid: "20",
                    alias: "2"
                },
                _widgetRecordProvider: s,
                _dependencies: []
            }))), u.createElement($, {
                getOwnerSpan: c(function() {
                    return g.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: c(function() {
                    return g.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: c(function(d) {
                        e.handleError(d)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: t
                },
                _idProps: {
                    service: a,
                    uuid: "21",
                    alias: "3"
                },
                _widgetRecordProvider: s,
                _dependencies: []
            }), u.createElement(j, {
                extendedProperties: {
                    role: "contentinfo",
                    className: "content-bottom"
                },
                tag: "footer",
                _idProps: {
                    service: a,
                    uuid: "22"
                },
                _widgetRecordProvider: s
            }, u.createElement(F, {
                align: 0,
                content: v.props.placeholders.footer,
                style: "footer ThemeGrid_Container ph",
                _idProps: {
                    service: a,
                    name: "Footer"
                },
                _widgetRecordProvider: s
            }))), u.createElement(_, {
                align: 0,
                animate: !0,
                visible: f.getCachedValue(a.getId("DxQPnjWdk0WxWdzXUBKv9g.Visible"), function() {
                    return m.getFeatureFlag$Action("MissingData", o).shouldEnableOut
                }),
                _idProps: {
                    service: a,
                    uuid: "24"
                },
                _widgetRecordProvider: s
            }, u.createElement(N, {
                getOwnerSpan: c(function() {
                    return g.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: c(function() {
                    return g.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: c(function(d) {
                        e.handleError(d)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: t
                },
                _idProps: {
                    service: a,
                    uuid: "25",
                    alias: "4"
                },
                _widgetRecordProvider: s,
                _dependencies: []
            })))
        }, {
            topLevelComponent: !1,
            getAttributes: c(function() {
                return {
                    codeFunction: "LayoutOnboardingMobile",
                    functionKey: "9ef9e09b-fe1c-4d80-a49a-6901b04f91f3",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Layouts.LayoutOnboardingMobile",
            modelFactory: ae,
            controllerFactory: re
        });
        return y.getCssDependencies = function() {
            return ["css/uae.Layouts.LayoutOnboardingMobile.css", "css/OutSystemsReactWidgets.css"]
        }, y.getJsDependencies = function() {
            return []
        }, y.getBlocks = function() {
            return [L, k, $, N]
        }, y
    }, "componentFactory"),
    Me = de();
export {
    Me as a
};