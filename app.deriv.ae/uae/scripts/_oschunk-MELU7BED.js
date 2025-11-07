import {
    a as M
} from "./_oschunk-CVQITZ7X.js";
import {
    a as N
} from "./_oschunk-RVD4FS25.js";
import {
    a as x
} from "./_oschunk-HFW3V2GI.js";
import {
    f,
    h as q,
    n as T,
    q as R,
    s as ee,
    u as k
} from "./_oschunk-VR5BNL2K.js";
import {
    a as ce,
    g as H,
    m as j,
    o as J,
    q as X,
    r as Y,
    s as Q,
    t as K
} from "./_oschunk-4VHUVDBV.js";
import {
    a as z
} from "./_oschunk-KXORGPRQ.js";
import {
    Qb as V,
    Sb as p,
    g as P,
    r as $,
    tb as I,
    ub as y
} from "./_oschunk-Z7QRTJDJ.js";
import {
    I as m,
    W as E,
    c as l,
    e as se,
    h as L,
    p as w,
    w as A
} from "./_oschunk-M5BUVJ72.js";
var _ = E,
    G = class G extends _.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("client_profile", "client_profileVar", "client_profile", !0, !1, _.DataTypes.DataTypes.Record, function() {
                return _.DataTypes.ImmutableBase.getData(new P)
            }, !1, P), this.attr("shouldShowNotify", "shouldShowNotifyVar", "shouldShowNotify", !0, !1, _.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("active_nav", "active_navIn", "active_nav", !0, !1, _.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_active_navInDataFetchStatus", "_active_navInDataFetchStatus", "_active_navInDataFetchStatus", !0, !1, _.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HidePanel", "hidePanelIn", "HidePanel", !0, !1, _.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_hidePanelInDataFetchStatus", "_hidePanelInDataFetchStatus", "_hidePanelInDataFetchStatus", !0, !1, _.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(_.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
l(G, "VariablesRecord");
var D = G;
D.init();
var U = class U extends _.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
l(U, "WidgetsRecord");
var W = U,
    O = class O extends _.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return D
        }
        static getWidgetsRecordConstructor() {
            return W
        }
        static get hasValidationWidgets() {
            return O._hasValidationWidgetsValue === void 0 && (O._hasValidationWidgetsValue = void 0 || void 0 || void 0), O._hasValidationWidgetsValue
        }
        setInputs(v) {
            "active_nav" in v && (this.variables.active_navIn = v.active_nav, "_active_navInDataFetchStatus" in v && (this.variables._active_navInDataFetchStatus = v._active_navInDataFetchStatus)), "HidePanel" in v && (this.variables.hidePanelIn = v.HidePanel, "_hidePanelInDataFetchStatus" in v && (this.variables._hidePanelInDataFetchStatus = v._hidePanelInDataFetchStatus))
        }
    };
l(O, "Model");
var F = O;
F._hasValidationWidgetsValue = void 0;
var re = new _.Model.ModelFactory(F);
var s = se(ce());
var ae = {};

function B(b, v, a) {
    function e(n) {
        var t = document.querySelector('meta[name="viewport"]');
        t ? t.content = n : (t = document.createElement("meta"), t.name = "viewport", t.content = n, document.head.appendChild(t))
    }
    l(e, "updateViewportMeta"), e("width=device-width, initial-scale=1.0, maximum-scale=1.0")
}
l(B, "default");
var r = E; {
    let v = class v extends r.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, ae);
            var c = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get getClientProfile$ServerAction() {
            return this.hasOwnProperty("_getClientProfile$ServerAction") || (this._getClientProfile$ServerAction = function(e, n) {
                var t = this.controller;
                return r.Logger.startActiveSpan("GetClientProfile", function(c) {
                    return c && (c.setAttribute("code.function", "GetClientProfile"), c.setAttribute("outsystems.function.key", "5ded5548-621f-4be6-bb2a-1e7a68f5c035"), c.setAttribute("outsystems.function.owner.name", "uae"), c.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), c.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), r.Flow.tryFinally(function() {
                        var i = {
                            authorization: r.DataConversion.ServerDataConverter.to(e, r.DataTypes.DataTypes.Text)
                        };
                        return t.callServerAction("GetClientProfile", "screenservices/uae/Layouts/LayoutDashboard/ActionGetClientProfile", "XyCUwmGl8eh0OBf6WziXgw", i, t.callContext(n), void 0, void 0, !0).then(function(g) {
                            var S = new(t.constructor.getVariableGroupType("uae.Layouts.LayoutDashboard$ActionGetClientProfile"));
                            return S.responseOut = r.DataConversion.ServerDataConverter.from(g.Response, I), S
                        })
                    }, function() {
                        c && c.end()
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
        get _onClickEyeIcon$Action() {
            return this.hasOwnProperty("__onClickEyeIcon$Action") || (this.__onClickEyeIcon$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    c = this.idService;
                return r.Logger.startActiveSpan("OnClickEyeIcon", function(i) {
                    i && (i.setAttribute("code.function", "OnClickEyeIcon"), i.setAttribute("outsystems.function.key", "1cb67efe-aef3-4bee-89dd-7c3d2d78ae1e"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnClickEyeIcon"), e = t.callContext(e), y.setshow_balance(!y.getshow_balance())
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onClickEyeIcon$Action
        }
        set _onClickEyeIcon$Action(e) {
            this.__onClickEyeIcon$Action = e
        }
        get _linkOnClick$Action() {
            return this.hasOwnProperty("__linkOnClick$Action") || (this.__linkOnClick$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    c = this.idService;
                return r.Logger.startActiveSpan("LinkOnClick", function(i) {
                    i && (i.setAttribute("code.function", "LinkOnClick"), i.setAttribute("outsystems.function.key", "4e303d7c-8e7d-4cc2-a0fe-e24eb59be00c"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("LinkOnClick"), e = t.callContext(e), r.Navigation.navigateTo(r.Navigation.generateScreenURL("uae", "trade", {
                            is_real: r.DataConversion.ServerDataConverter.to(!0, r.DataTypes.DataTypes.Boolean)
                        }), r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__linkOnClick$Action
        }
        set _linkOnClick$Action(e) {
            this.__linkOnClick$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    c = this.idService;
                return r.Logger.startActiveSpan("OnReady", function(i) {
                    return i && (i.setAttribute("code.function", "OnReady"), i.setAttribute("outsystems.function.key", "7c51e2be-fac2-44ca-939e-a4768016ff5e"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var g = new r.DataTypes.VariableHolder,
                            S = new r.DataTypes.VariableHolder,
                            o = new r.DataTypes.VariableHolder;
                        return r.Flow.executeAsyncFlow(function() {
                            return n.flush(), V.layoutReady$Action(e).then(function() {
                                return o.value = p.getAuth$Action(e), S.value = V.setLang$Action("", e), t._getOnboardingStatus$Action(e)
                            }).then(function() {
                                return n.flush(), t.getClientProfile$ServerAction(o.value.tokenOut, e).then(function(u) {
                                    g.value = u
                                })
                            }).then(function() {
                                g.value.responseOut.dataAttr.getCurrent(e.iterationContext).first_nameAttr !== "" && (n.variables.client_profileVar = r.DataConversion.JSConversions.typeConvertRecord(g.value.responseOut.dataAttr.getItem(0), new P, function(u, h) {
                                    return h.first_nameAttr = u.first_nameAttr, h.last_nameAttr = u.last_nameAttr, h.birth_countryAttr = u.birth_countryAttr, h.residence_countryAttr = u.residence_countryAttr, h.citizen_countryAttr = u.citizen_countryAttr, h.genderAttr = u.genderAttr, h.client_idAttr = u.client_idAttr, h.created_timeAttr = u.created_timeAttr, h
                                }), y.setresidence(y.getresidence() !== r.BuiltinFunctions.nullTextIdentifier() ? y.getresidence() : g.value.responseOut.dataAttr.getCurrent(e.iterationContext).residence_countryAttr), y.setfirst_name(y.getfirst_name() !== r.BuiltinFunctions.nullTextIdentifier() ? y.getfirst_name() : g.value.responseOut.dataAttr.getCurrent(e.iterationContext).first_nameAttr), y.setlast_name(y.getlast_name() !== r.BuiltinFunctions.nullTextIdentifier() ? y.getlast_name() : g.value.responseOut.dataAttr.getCurrent(e.iterationContext).last_nameAttr), r.Logger.startActiveSpan("UpdateMetatag", function(u) {
                                    u && (u.setAttribute("code.function", "UpdateMetatag"), u.setAttribute("outsystems.function.key", "39888311-b2e7-446a-9c67-e76a47ddc0e2"), u.setAttribute("outsystems.function.owner.name", "uae"), u.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), u.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return t.safeExecuteJSNode(B, "UpdateMetatag", "OnReady", null, function(h) {}, {}, {})
                                    } finally {
                                        u && u.end()
                                    }
                                }, 1))
                            })
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _profileAvatarOnClick$Action() {
            return this.hasOwnProperty("__profileAvatarOnClick$Action") || (this.__profileAvatarOnClick$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    c = this.idService;
                return r.Logger.startActiveSpan("ProfileAvatarOnClick", function(i) {
                    i && (i.setAttribute("code.function", "ProfileAvatarOnClick"), i.setAttribute("outsystems.function.key", "82c6a056-7f57-4d80-98d8-e10705096091"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("ProfileAvatarOnClick"), e = t.callContext(e), r.Navigation.navigateTo(r.Navigation.generateScreenURL("uae", "user-profile", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__profileAvatarOnClick$Action
        }
        set _profileAvatarOnClick$Action(e) {
            this.__profileAvatarOnClick$Action = e
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    c = this.idService;
                return r.Logger.startActiveSpan("OnDestroy", function(i) {
                    i && (i.setAttribute("code.function", "OnDestroy"), i.setAttribute("outsystems.function.key", "9720b9bd-6497-43f4-a8ef-b0637cab9d8f"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnDestroy"), e = t.callContext(e), V.layoutDestroy$Action(e)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(e) {
            this.__onDestroy$Action = e
        }
        get _onClick$Action() {
            return this.hasOwnProperty("__onClick$Action") || (this.__onClick$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    c = this.idService;
                return r.Logger.startActiveSpan("OnClick", function(i) {
                    i && (i.setAttribute("code.function", "OnClick"), i.setAttribute("outsystems.function.key", "c379b59f-f0bc-4d26-a277-bcf1144fec12"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("OnClick"), e = t.callContext(e), r.Navigation.navigateTo(r.Navigation.generateScreenURL("uae", "user-profile", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onClick$Action
        }
        set _onClick$Action(e) {
            this.__onClick$Action = e
        }
        get _goToTheMoneyPage$Action() {
            return this.hasOwnProperty("__goToTheMoneyPage$Action") || (this.__goToTheMoneyPage$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    c = this.idService;
                return r.Logger.startActiveSpan("GoToTheMoneyPage", function(i) {
                    i && (i.setAttribute("code.function", "GoToTheMoneyPage"), i.setAttribute("outsystems.function.key", "fadfde95-9109-4513-be5e-f3dba49fdbd4"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("GoToTheMoneyPage"), e = t.callContext(e);
                        var g = new r.DataTypes.VariableHolder(new(r.Controller.BaseController.getJSONDeserializeOutputType(r.GenericTypeCache.getGenericList($))));
                        return g.value.dataOut = r.JSONUtils.deserializeFromJSON(y.getwallet_list_1(), r.GenericTypeCache.getGenericList($), !1), g.value.dataOut.length === 0 && y.getwallet_list_1() !== r.BuiltinFunctions.nullTextIdentifier() ? r.Navigation.navigateTo(r.Navigation.generateScreenURL("uae", "currency-selection-wallets", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default), e, !0) : r.Navigation.navigateTo(r.Navigation.generateScreenURL("uae", "wallet", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__goToTheMoneyPage$Action
        }
        set _goToTheMoneyPage$Action(e) {
            this.__goToTheMoneyPage$Action = e
        }
        get _getOnboardingStatus$Action() {
            return this.hasOwnProperty("__getOnboardingStatus$Action") || (this.__getOnboardingStatus$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    c = this.idService;
                return r.Logger.startActiveSpan("GetOnboardingStatus", function(i) {
                    return i && (i.setAttribute("code.function", "GetOnboardingStatus"), i.setAttribute("outsystems.function.key", "fca9882e-aeb8-4aa2-98e8-6d4d217faec8"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        t.ensureControllerAlive("GetOnboardingStatus"), e = t.callContext(e);
                        var g = new r.DataTypes.VariableHolder,
                            S = new r.DataTypes.VariableHolder,
                            o = new r.DataTypes.VariableHolder(new r.DataTypes.JSONSerializeOutputType);
                        return r.Flow.executeAsyncFlow(function() {
                            return S.value = p.getAuth$Action(e), n.flush(), p.getUserOnboardingStatus$Action(e).then(function(u) {
                                g.value = u
                            }).then(function() {
                                o.value.jSONOut = r.JSONUtils.serializeToJSON(g.value.responseOut, !1, !1), n.variables.shouldShowNotifyVar = g.value.responseOut.dataAttr.getCurrent(e.iterationContext).profileAttr.statusAttr === "incomplete" || g.value.responseOut.dataAttr.getCurrent(e.iterationContext).addressAttr.statusAttr === "incomplete" || g.value.responseOut.dataAttr.getCurrent(e.iterationContext).walletAttr.createdAttr && g.value.responseOut.dataAttr.getCurrent(e.iterationContext).kycAttr.main_statusAttr !== "verified", y.setonboardingAPIResponse(o.value.jSONOut)
                            })
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__getOnboardingStatus$Action
        }
        set _getOnboardingStatus$Action(e) {
            this.__getOnboardingStatus$Action = e
        }
        onClickEyeIcon$Action(e) {
            var n = this.controller;
            return r.Logger.startActiveSpan("OnClickEyeIcon__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnClickEyeIcon"), t.setAttribute("outsystems.function.key", "1cb67efe-aef3-4bee-89dd-7c3d2d78ae1e"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onClickEyeIcon$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        linkOnClick$Action(e) {
            var n = this.controller;
            return r.Logger.startActiveSpan("LinkOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "LinkOnClick"), t.setAttribute("outsystems.function.key", "4e303d7c-8e7d-4cc2-a0fe-e24eb59be00c"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._linkOnClick$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var n = this.controller;
            return r.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "7c51e2be-fac2-44ca-939e-a4768016ff5e"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        profileAvatarOnClick$Action(e) {
            var n = this.controller;
            return r.Logger.startActiveSpan("ProfileAvatarOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "ProfileAvatarOnClick"), t.setAttribute("outsystems.function.key", "82c6a056-7f57-4d80-98d8-e10705096091"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._profileAvatarOnClick$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onDestroy$Action(e) {
            var n = this.controller;
            return r.Logger.startActiveSpan("OnDestroy__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnDestroy"), t.setAttribute("outsystems.function.key", "9720b9bd-6497-43f4-a8ef-b0637cab9d8f"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onDestroy$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onClick$Action(e) {
            var n = this.controller;
            return r.Logger.startActiveSpan("OnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnClick"), t.setAttribute("outsystems.function.key", "c379b59f-f0bc-4d26-a277-bcf1144fec12"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onClick$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        goToTheMoneyPage$Action(e) {
            var n = this.controller;
            return r.Logger.startActiveSpan("GoToTheMoneyPage__proxy", function(t) {
                t && (t.setAttribute("code.function", "GoToTheMoneyPage"), t.setAttribute("outsystems.function.key", "fadfde95-9109-4513-be5e-f3dba49fdbd4"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._goToTheMoneyPage$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        getOnboardingStatus$Action(e) {
            var n = this.controller;
            return r.Logger.startActiveSpan("GetOnboardingStatus__proxy", function(t) {
                return t && (t.setAttribute("code.function", "GetOnboardingStatus"), t.setAttribute("outsystems.function.key", "fca9882e-aeb8-4aa2-98e8-6d4d217faec8"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._getOnboardingStatus$Action, e)
                }, function() {
                    t && t.end()
                })
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
                var n = this.controller,
                    t = this.model,
                    c = this.idService;
                return n.onReady$Action(e)
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
                var n = this.controller,
                    t = this.model,
                    c = this.idService;
                return n.onDestroy$Action(e)
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
            return p.defaultTimeout
        }
    };
    l(v, "ControllerInner");
    let b = v;
    Z = b, Z.registerVariableGroupType("uae.Layouts.LayoutDashboard$ActionGetClientProfile", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: r.DataTypes.DataTypes.Record,
        defaultValue: l(function() {
            return new I
        }, "defaultValue"),
        complexType: I
    }])
}
var Z, oe = new r.Controller.ControllerFactory(Z, z);
var Ge = H.PlaceholderContent,
    Ue = H.IteratorPlaceholderContent,
    de = l(function() {
        var b = J(function(v) {
            var a = v.model,
                e = v.controller,
                n = v.controller.idService,
                t = e.validationService,
                c = e.callContext(),
                i = Q,
                g = K,
                S = {
                    props: v,
                    validateWidget: l(function(d) {
                        v.validateWidget(v, d)
                    }, "validateWidget")
                },
                o = a,
                u = Y,
                h = X,
                C = j();
            return s.createElement("div", v.rootNodeProperties, s.createElement(f, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "0"
                },
                _widgetRecordProvider: o
            }, u(a.variables.active_navIn === "hub", !1, this, function() {
                return [s.createElement(f, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "margin-bottom: 48px;"
                    },
                    style: "top-container",
                    visible: !0,
                    _idProps: {
                        service: n,
                        name: "TopNavigationBar"
                    },
                    _widgetRecordProvider: o
                }, u(y.getavatar_url() !== A.nullTextIdentifier(), !1, this, function() {
                    return [s.createElement(f, {
                        align: 0,
                        animate: !1,
                        extendedEvents: {
                            onClick: l(function() {
                                var d = typeof c != "undefined" && c !== null ? c.clone() : e.callContext().clone();
                                e.profileAvatarOnClick$Action(e.callContext(d))
                            }, "onClick")
                        },
                        extendedProperties: {
                            style: "align-items: center; background: var(--color-baby-blue-200, #D1F7FA); border-radius: 24px; display: flex; flex-direction: column; height: 40px; justify-content: center; overflow: hidden; position: relative;"
                        },
                        gridProperties: {
                            classes: "OSInline",
                            width: "40px"
                        },
                        visible: !0,
                        _idProps: {
                            service: n,
                            name: "ProfileAvatar2"
                        },
                        _widgetRecordProvider: o
                    }, s.createElement(T, {
                        extendedProperties: {
                            style: "height: 100%; object-fit: contain;"
                        },
                        gridProperties: {
                            width: "100%"
                        },
                        type: 1,
                        url: y.getavatar_url(),
                        _idProps: {
                            service: n,
                            uuid: "3"
                        },
                        _widgetRecordProvider: o
                    }), s.createElement(f, {
                        align: 0,
                        animate: !0,
                        extendedProperties: {
                            style: "align-items: flex-start; background: #E6190E; border-radius: 96px; display flex: ; flex-direction: column; height: 8px; position: absolute; right: 0px; top: 4px;"
                        },
                        gridProperties: {
                            classes: "OSInline",
                            width: "8px"
                        },
                        visible: a.variables.shouldShowNotifyVar,
                        _idProps: {
                            service: n,
                            uuid: "4"
                        },
                        _widgetRecordProvider: o
                    }))]
                }, function() {
                    return [s.createElement(f, {
                        align: 0,
                        animate: !0,
                        extendedEvents: {
                            onClick: l(function() {
                                var d = typeof c != "undefined" && c !== null ? c.clone() : e.callContext().clone();
                                e.profileAvatarOnClick$Action(e.callContext(d))
                            }, "onClick")
                        },
                        extendedProperties: {
                            style: "align-items: center; background: var(--color-blue-low-100, #EFF3F5); border-radius: 24px; display: flex; flex-direction: column; height: 40px; justify-content: center; position: relative;"
                        },
                        gridProperties: {
                            classes: "OSInline",
                            width: "40px"
                        },
                        visible: a.variables.client_profileVar.first_nameAttr !== "",
                        _idProps: {
                            service: n,
                            name: "ProfileAvatar"
                        },
                        _widgetRecordProvider: o
                    }, s.createElement(q, {
                        extendedProperties: {
                            style: "font-weight: 700;"
                        },
                        gridProperties: {
                            marginLeft: "0"
                        },
                        value: a.getCachedValue(n.getId("nfSbdrT8GkSBG_KxymZQug.Value"), function() {
                            return A.toUpper(A.substr(a.variables.client_profileVar.first_nameAttr, 0, 1)) + "" + A.toUpper(A.substr(a.variables.client_profileVar.last_nameAttr, 0, 1))
                        }, function() {
                            return a.variables.client_profileVar.first_nameAttr
                        }, function() {
                            return a.variables.client_profileVar.last_nameAttr
                        }),
                        _idProps: {
                            service: n,
                            uuid: "6"
                        },
                        _widgetRecordProvider: o
                    }), s.createElement(f, {
                        align: 0,
                        animate: !0,
                        extendedProperties: {
                            style: "align-items: flex-start; background: #E6190E; border-radius: 96px; display flex: ; flex-direction: column; height: 8px; position: absolute; right: 0px; top: 4px;"
                        },
                        gridProperties: {
                            classes: "OSInline",
                            width: "8px"
                        },
                        visible: a.variables.shouldShowNotifyVar,
                        _idProps: {
                            service: n,
                            uuid: "7"
                        },
                        _widgetRecordProvider: o
                    })), s.createElement(f, {
                        align: 0,
                        animate: !0,
                        extendedEvents: {
                            onClick: l(function() {
                                var d = typeof c != "undefined" && c !== null ? c.clone() : e.callContext().clone();
                                e.onClick$Action(e.callContext(d))
                            }, "onClick")
                        },
                        extendedProperties: {
                            style: "align-items: center; background: var(--color-blue-low-100, #EFF3F5); border-radius: 96px; display: flex; flex-direction: column; height: 40px; justify-content: center;"
                        },
                        gridProperties: {
                            classes: "OSInline",
                            width: "40px"
                        },
                        visible: a.variables.client_profileVar.first_nameAttr === "",
                        _idProps: {
                            service: n,
                            uuid: "8"
                        },
                        _widgetRecordProvider: o
                    }, s.createElement(f, {
                        align: 0,
                        animate: !1,
                        style: "position-relative",
                        visible: !0,
                        _idProps: {
                            service: n,
                            uuid: "9"
                        },
                        _widgetRecordProvider: o
                    }, s.createElement(T, {
                        image: w.VersionedURL.getVersionedUrl("img/uae.personavatar.svg"),
                        type: 0,
                        _idProps: {
                            service: n,
                            uuid: "10"
                        },
                        _widgetRecordProvider: o
                    }), s.createElement(f, {
                        align: 0,
                        animate: !0,
                        extendedProperties: {
                            style: "background: red; border-radius: 100%; bottom: 19px; height: 10px; left: 23px; position: absolute;"
                        },
                        gridProperties: {
                            classes: "OSInline",
                            width: "10px"
                        },
                        visible: a.variables.shouldShowNotifyVar,
                        _idProps: {
                            service: n,
                            name: "notify"
                        },
                        _widgetRecordProvider: o
                    })))]
                }), s.createElement(f, {
                    align: 0,
                    animate: !0,
                    extendedEvents: {
                        onClick: l(function() {
                            var d = typeof c != "undefined" && c !== null ? c.clone() : e.callContext().clone();
                            e.onClickEyeIcon$Action(e.callContext(d))
                        }, "onClick")
                    },
                    style: "visibility-icon",
                    visible: a.getCachedValue(n.getId("O9MF3QEd4UyNfOqBUjVA0g.Visible"), function() {
                        return a.variables.client_profileVar.first_nameAttr !== A.nullTextIdentifier()
                    }, function() {
                        return a.variables.client_profileVar.first_nameAttr
                    }),
                    _idProps: {
                        service: n,
                        uuid: "12"
                    },
                    _widgetRecordProvider: o
                }, u(y.getshow_balance(), !1, this, function() {
                    return [s.createElement(T, {
                        gridProperties: {
                            width: "18px"
                        },
                        image: w.VersionedURL.getVersionedUrl("img/uae.eye.svg"),
                        type: 0,
                        _idProps: {
                            service: n,
                            name: "EyeOpen"
                        },
                        _widgetRecordProvider: o
                    })]
                }, function() {
                    return [s.createElement(T, {
                        image: w.VersionedURL.getVersionedUrl("img/uae.eyeslashsm.svg"),
                        type: 0,
                        _idProps: {
                            service: n,
                            name: "EyeClosed"
                        },
                        _widgetRecordProvider: o
                    })]
                })))]
            }, function() {
                return [s.createElement(f, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "height: 0px;"
                    },
                    visible: !0,
                    _idProps: {
                        service: n,
                        uuid: "15"
                    },
                    _widgetRecordProvider: o
                })]
            }), s.createElement(f, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "margin-top: 0px; padding: 0 16px 16px;"
                },
                style: "container",
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "16"
                },
                _widgetRecordProvider: o
            }, s.createElement(ee, {
                align: 0,
                content: S.props.placeholders.content,
                _idProps: {
                    service: n,
                    name: "Content"
                },
                _widgetRecordProvider: o
            })), s.createElement(f, {
                align: 0,
                animate: !0,
                extendedProperties: {
                    style: "z-index: 999;"
                },
                style: "bottom-container flex flex-col w-full fixed bottom-0 left-0",
                visible: !a.variables.hidePanelIn,
                _idProps: {
                    service: n,
                    name: "MenuContainer"
                },
                _widgetRecordProvider: o,
                visible_dataFetchStatus: m.calculateDataFetchStatus(a.variables._hidePanelInDataFetchStatus)
            }, s.createElement(f, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "background: white; z-index: 99;"
                },
                style: "w-full grid grid-cols-3 px-4 py-1 border-t mt-4 menu-container",
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "19"
                },
                _widgetRecordProvider: o
            }, s.createElement(R, {
                enabled: !0,
                transition: L.createTransition(L.TransitionAnimation.None),
                url: w.generateScreenURL("uae", "home", {}),
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "20"
                },
                _widgetRecordProvider: o
            }, s.createElement(f, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "height: 56px;"
                },
                style: "flex flex-col justify-center items-center ",
                visible: !0,
                _idProps: {
                    service: n,
                    name: "HubMenu"
                },
                _widgetRecordProvider: o
            }, s.createElement(f, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "height: 24px;"
                },
                gridProperties: {
                    classes: "OSInline"
                },
                style: "p-1",
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "22"
                },
                _widgetRecordProvider: o
            }, s.createElement(x, {
                getOwnerSpan: l(function() {
                    return C.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: l(function() {
                    return C.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ExtendedClass: a.getCachedValue(n.getId("j5kM1RXk8keWxXVfy2jStg.ExtendedClass"), function() {
                        return a.variables.active_navIn === "hub" ? "active-nav" : ""
                    }, function() {
                        return a.variables.active_navIn
                    }),
                    _extendedClassInDataFetchStatus: m.calculateDataFetchStatus(a.variables._active_navInDataFetchStatus),
                    SVGCode: a.getCachedValue(n.getId("j5kM1RXk8keWxXVfy2jStg.SVGCode"), function() {
                        return a.variables.active_navIn === "hub" ? `<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>\r
<path d='M20.9688 12C20.9688 12.5625 20.5 13 19.9688 13H18.9688L19 18C19 19.125 18.125 20.0312 17 20.0312H7C5.875 20.0312 5 19.125 5 18.0312V13H4C3.4375 13 3 12.5625 3 12C3 11.7188 3.09375 11.4688 3.3125 11.25L11.3125 4.25C11.5312 4.03125 11.7812 4 12 4C12.2188 4 12.4688 4.0625 12.6562 4.21875L20.625 11.25C20.875 11.4688 21 11.7188 20.9688 12Z' fill='black'/>\r
</svg>` : `<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>\r
<path d='M11.6562 4.125C11.8438 3.96875 12.125 3.96875 12.3125 4.125L20.8125 11.625C21.0312 11.8125 21.0312 12.125 20.875 12.3438C20.6875 12.5625 20.375 12.5625 20.1562 12.375L19 11.3438V17.5C19 18.9062 17.875 20 16.5 20H7.5C6.09375 20 5 18.9062 5 17.5V11.3438L3.8125 12.375C3.625 12.5625 3.28125 12.5625 3.125 12.3438C2.9375 12.125 2.9375 11.8125 3.15625 11.625L11.6562 4.125ZM6 10.4688V17.5C6 18.3438 6.65625 19 7.5 19H16.5C17.3125 19 18 18.3438 18 17.5V10.4688L12 5.1875L6 10.4688Z' fill='black' fill-opacity='0.72'/>\r
</svg>`
                    }, function() {
                        return a.variables.active_navIn
                    }),
                    _sVGCodeInDataFetchStatus: m.calculateDataFetchStatus(a.variables._active_navInDataFetchStatus)
                },
                events: {
                    _handleError: l(function(d) {
                        e.handleError(d)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: t
                },
                _idProps: {
                    service: n,
                    uuid: "23",
                    alias: "1"
                },
                _widgetRecordProvider: o,
                _dependencies: []
            })), s.createElement(k, {
                style: a.getCachedValue(n.getId("9INDaFvFXE2dVARLvFpl2A.Style"), function() {
                    return a.variables.active_navIn === "hub" ? "active-nav" : ""
                }, function() {
                    return a.variables.active_navIn
                }),
                text: ["Home"],
                _idProps: {
                    service: n,
                    uuid: "24"
                },
                _widgetRecordProvider: o,
                style_dataFetchStatus: m.calculateDataFetchStatus(a.variables._active_navInDataFetchStatus)
            }))), s.createElement(R, {
                enabled: !0,
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                onClick: l(function() {
                    var d = typeof c != "undefined" && c !== null ? c.clone() : e.callContext().clone();
                    e.linkOnClick$Action(e.callContext(d))
                }, "onClick"),
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "25"
                },
                _widgetRecordProvider: o
            }, s.createElement(f, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "height: 56px;"
                },
                style: "flex flex-col justify-center items-center ",
                visible: !0,
                _idProps: {
                    service: n,
                    name: "TradeMenu"
                },
                _widgetRecordProvider: o
            }, s.createElement(f, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "height: 24px;"
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "24px"
                },
                style: "p-0.5",
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "27"
                },
                _widgetRecordProvider: o
            }, s.createElement(x, {
                getOwnerSpan: l(function() {
                    return C.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: l(function() {
                    return C.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ExtendedClass: a.getCachedValue(n.getId("Cr0XuYhWDkmm+nphFxP43Q.ExtendedClass"), function() {
                        return a.variables.active_navIn === "trade" ? "active-nav" : ""
                    }, function() {
                        return a.variables.active_navIn
                    }),
                    _extendedClassInDataFetchStatus: m.calculateDataFetchStatus(a.variables._active_navInDataFetchStatus),
                    SVGCode: a.getCachedValue(n.getId("Cr0XuYhWDkmm+nphFxP43Q.SVGCode"), function() {
                        return a.variables.active_navIn === "trade" ? `<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>\r
<path d='M6 6V16.5C6 16.7812 6.21875 17 6.5 17H19C19.5312 17 20 17.4688 20 18C20 18.5625 19.5312 19 19 19H6.5C5.09375 19 4 17.9062 4 16.5V6C4 5.46875 4.4375 5 5 5C5.53125 5 6 5.46875 6 6ZM14 5.5V7C14.5312 7 15 7.46875 15 8V11C15 11.5625 14.5312 12 14 12V13.5C14 13.7812 13.75 14 13.5 14C13.2188 14 13 13.7812 13 13.5V12C12.4375 12 12 11.5625 12 11V8C12 7.46875 12.4375 7 13 7V5.5C13 5.25 13.2188 5 13.5 5C13.75 5 14 5.25 14 5.5ZM16 11C16 10.4688 16.4375 10 17 10V8.5C17 8.25 17.2188 8 17.5 8C17.75 8 18 8.25 18 8.5V10C18.5312 10 19 10.4688 19 11V13C19 13.5625 18.5312 14 18 14V15.5C18 15.7812 17.75 16 17.5 16C17.2188 16 17 15.7812 17 15.5V14C16.4375 14 16 13.5625 16 13V11ZM9 8V6.5C9 6.25 9.21875 6 9.5 6C9.75 6 10 6.25 10 6.5V8C10.5312 8 11 8.46875 11 9V13C11 13.5625 10.5312 14 10 14V15.5C10 15.7812 9.75 16 9.5 16C9.21875 16 9 15.7812 9 15.5V14C8.4375 14 8 13.5625 8 13V9C8 8.46875 8.4375 8 9 8Z' fill='black'/>\r
</svg>` : `<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>\r
<path d='M5 5.5V16.5C5 17.3438 5.65625 18 6.5 18H19.5C19.75 18 20 18.25 20 18.5C20 18.7812 19.75 19 19.5 19H6.5C5.09375 19 4 17.9062 4 16.5V5.5C4 5.25 4.21875 5 4.5 5C4.75 5 5 5.25 5 5.5ZM14 5.5V7C14 7.03125 14 7.03125 14 7.03125C14.5625 7.15625 15 7.65625 15 8.25V10.75C15 11.375 14.5625 11.875 14 12V13.5C14 13.7812 13.75 14 13.5 14C13.2188 14 13 13.7812 13 13.5V12C12.4062 11.875 12 11.375 12 10.75V8.25C12 7.65625 12.4062 7.15625 13 7.03125C13 7.03125 13 7.03125 13 7V5.5C13 5.25 13.2188 5 13.5 5C13.75 5 14 5.25 14 5.5ZM9.5 6C9.75 6 10 6.25 10 6.5V8C10 8.03125 10 8.03125 10 8.03125C10.5625 8.15625 11 8.65625 11 9.25V12.75C11 13.375 10.5625 13.875 10 14V15.5C10 15.7812 9.75 16 9.5 16C9.21875 16 9 15.7812 9 15.5V14C8.40625 13.875 8 13.375 8 12.75V9.25C8 8.65625 8.40625 8.15625 9 8.03125C9 8.03125 9 8.03125 9 8V6.5C9 6.25 9.21875 6 9.5 6ZM14 8.25C14 8.125 13.875 8 13.75 8H13.25C13.0938 8 13 8.125 13 8.25V10.75C13 10.9062 13.0938 11 13.25 11H13.75C13.875 11 14 10.9062 14 10.75V8.25ZM17.25 11C17.0938 11 17 11.125 17 11.25V12.75C17 12.9062 17.0938 13 17.25 13H17.75C17.875 13 18 12.9062 18 12.75V11.25C18 11.125 17.875 11 17.75 11H17.25ZM17 10V8.5C17 8.25 17.2188 8 17.5 8C17.75 8 18 8.25 18 8.5V10C18 10.0312 18 10.0312 18 10.0312C18.5625 10.1562 19 10.6562 19 11.25V12.75C19 13.375 18.5625 13.875 18 14V15.5C18 15.7812 17.75 16 17.5 16C17.2188 16 17 15.7812 17 15.5V14C16.4062 13.875 16 13.375 16 12.75V11.25C16 10.6562 16.4062 10.1562 17 10.0312C17 10.0312 17 10.0312 17 10ZM9.75 9H9.25C9.09375 9 9 9.125 9 9.25V12.75C9 12.9062 9.09375 13 9.25 13H9.75C9.875 13 10 12.9062 10 12.75V9.25C10 9.125 9.875 9 9.75 9Z' fill='black' fill-opacity='0.72'/>\r
</svg>`
                    }, function() {
                        return a.variables.active_navIn
                    }),
                    _sVGCodeInDataFetchStatus: m.calculateDataFetchStatus(a.variables._active_navInDataFetchStatus)
                },
                events: {
                    _handleError: l(function(d) {
                        e.handleError(d)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: t
                },
                _idProps: {
                    service: n,
                    uuid: "28",
                    alias: "2"
                },
                _widgetRecordProvider: o,
                _dependencies: []
            })), s.createElement(k, {
                style: a.getCachedValue(n.getId("RMkcLUYVQEGCZKBLOVzKDQ.Style"), function() {
                    return a.variables.active_navIn === "trade" ? "active-nav" : ""
                }, function() {
                    return a.variables.active_navIn
                }),
                text: ["Trade"],
                _idProps: {
                    service: n,
                    uuid: "29"
                },
                _widgetRecordProvider: o,
                style_dataFetchStatus: m.calculateDataFetchStatus(a.variables._active_navInDataFetchStatus)
            }))), s.createElement(R, {
                enabled: !0,
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                onClick: l(function() {
                    var d = typeof c != "undefined" && c !== null ? c.clone() : e.callContext().clone();
                    e.goToTheMoneyPage$Action(e.callContext(d))
                }, "onClick"),
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "30"
                },
                _widgetRecordProvider: o
            }, s.createElement(f, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "height: 56px;"
                },
                style: "flex flex-col justify-center items-center ",
                visible: !0,
                _idProps: {
                    service: n,
                    name: "WalletsMenu"
                },
                _widgetRecordProvider: o
            }, s.createElement(f, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "height: 24px;"
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "24px"
                },
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "32"
                },
                _widgetRecordProvider: o
            }, s.createElement(x, {
                getOwnerSpan: l(function() {
                    return C.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: l(function() {
                    return C.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ExtendedClass: a.getCachedValue(n.getId("O4tBWaALeE6BcHYYSbhYdg.ExtendedClass"), function() {
                        return a.variables.active_navIn === "wallets" ? "active-nav" : ""
                    }, function() {
                        return a.variables.active_navIn
                    }),
                    _extendedClassInDataFetchStatus: m.calculateDataFetchStatus(a.variables._active_navInDataFetchStatus),
                    SVGCode: a.getCachedValue(n.getId("O4tBWaALeE6BcHYYSbhYdg.SVGCode"), function() {
                        return a.variables.active_navIn === "wallets" ? `<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>\r
<path d='M6 5H18C18.5312 5 19 5.46875 19 6C19 6.5625 18.5312 7 18 7H6.5C6.21875 7 6 7.25 6 7.5C6 7.78125 6.21875 8 6.5 8H18C19.0938 8 20 8.90625 20 10V17C20 18.125 19.0938 19 18 19H6C4.875 19 4 18.125 4 17V7C4 5.90625 4.875 5 6 5ZM17 12.5C16.4375 12.5 16 12.9688 16 13.5C16 14.0625 16.4375 14.5 17 14.5C17.5312 14.5 18 14.0625 18 13.5C18 12.9688 17.5312 12.5 17 12.5Z' fill='black'/>\r
</svg>` : `<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>\r
<path d='M6.5 5H18.5C18.75 5 19 5.25 19 5.5C19 5.78125 18.75 6 18.5 6H6.5C5.65625 6 5 6.6875 5 7.5V16.5C5 17.3438 5.65625 18 6.5 18H17.5C18.3125 18 19 17.3438 19 16.5V9.5C19 8.6875 18.3125 8 17.5 8H7.5C7.21875 8 7 7.78125 7 7.5C7 7.25 7.21875 7 7.5 7H17.5C18.875 7 20 8.125 20 9.5V16.5C20 17.9062 18.875 19 17.5 19H6.5C5.09375 19 4 17.9062 4 16.5V7.5C4 6.125 5.09375 5 6.5 5ZM16 13.75C15.5625 13.75 15.25 13.4375 15.25 13C15.25 12.5938 15.5625 12.25 16 12.25C16.4062 12.25 16.75 12.5938 16.75 13C16.75 13.4375 16.4062 13.75 16 13.75Z' fill='black' fill-opacity='0.72'/>\r
</svg>`
                    }, function() {
                        return a.variables.active_navIn
                    }),
                    _sVGCodeInDataFetchStatus: m.calculateDataFetchStatus(a.variables._active_navInDataFetchStatus)
                },
                events: {
                    _handleError: l(function(d) {
                        e.handleError(d)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: t
                },
                _idProps: {
                    service: n,
                    uuid: "33",
                    alias: "3"
                },
                _widgetRecordProvider: o,
                _dependencies: []
            })), s.createElement(k, {
                style: a.getCachedValue(n.getId("T9MrGirN+kqL5jv0SVPAUg.Style"), function() {
                    return a.variables.active_navIn === "wallets" ? "active-nav" : ""
                }, function() {
                    return a.variables.active_navIn
                }),
                text: ["Wallets"],
                _idProps: {
                    service: n,
                    uuid: "34"
                },
                _widgetRecordProvider: o,
                style_dataFetchStatus: m.calculateDataFetchStatus(a.variables._active_navInDataFetchStatus)
            }))))), u(y.getenableTCPopUp(), !1, this, function() {
                return [s.createElement(M, {
                    getOwnerSpan: l(function() {
                        return C.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: l(function() {
                        return C.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: l(function(d) {
                            e.handleError(d)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: t
                    },
                    _idProps: {
                        service: n,
                        uuid: "35",
                        alias: "4"
                    },
                    _widgetRecordProvider: o,
                    _dependencies: []
                })]
            }, function() {
                return []
            })), s.createElement(f, {
                align: 0,
                animate: !0,
                visible: a.getCachedValue(n.getId("260+XPxdX0mRurTVqT8QZQ.Visible"), function() {
                    return p.getFeatureFlag$Action("MissingData", c).shouldEnableOut
                }),
                _idProps: {
                    service: n,
                    uuid: "36"
                },
                _widgetRecordProvider: o
            }, s.createElement(N, {
                getOwnerSpan: l(function() {
                    return C.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: l(function() {
                    return C.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: l(function(d) {
                        e.handleError(d)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: t
                },
                _idProps: {
                    service: n,
                    uuid: "37",
                    alias: "5"
                },
                _widgetRecordProvider: o,
                _dependencies: []
            })))
        }, {
            topLevelComponent: !1,
            getAttributes: l(function() {
                return {
                    codeFunction: "LayoutDashboard",
                    functionKey: "97d625f1-f52d-4ba3-8407-ad7fb535f6f1",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Layouts.LayoutDashboard",
            modelFactory: re,
            controllerFactory: oe
        });
        return b.getCssDependencies = function() {
            return ["css/uae.Layouts.LayoutDashboard.css", "css/OutSystemsReactWidgets.css"]
        }, b.getJsDependencies = function() {
            return []
        }, b.getBlocks = function() {
            return [x, M, N]
        }, b
    }, "componentFactory"),
    Be = de();
export {
    Be as a
};