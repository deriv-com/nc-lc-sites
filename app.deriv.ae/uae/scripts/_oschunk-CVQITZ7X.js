import {
    a as ee
} from "./_oschunk-TLJXDQWQ.js";
import {
    a as j
} from "./_oschunk-RVD4FS25.js";
import {
    a as H
} from "./_oschunk-HFW3V2GI.js";
import {
    b as Ce,
    f as C,
    h as I,
    n as he,
    q as V,
    r as ge,
    s as _e,
    u as E
} from "./_oschunk-VR5BNL2K.js";
import {
    a as ye,
    g as O,
    m as N,
    o as D,
    q as Q,
    r as $,
    s as G,
    t as W
} from "./_oschunk-4VHUVDBV.js";
import {
    a as M
} from "./_oschunk-KXORGPRQ.js";
import {
    Q as x,
    Sb as b,
    qb as U,
    r as Y,
    tb as F,
    ub as h
} from "./_oschunk-Z7QRTJDJ.js";
import {
    I as _,
    W as A,
    c as l,
    e as me,
    m as Z,
    n as q,
    p as ve
} from "./_oschunk-M5BUVJ72.js";
var R = A,
    ie = class ie extends R.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsOpen", "isOpenVar", "IsOpen", !0, !1, R.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("isSubmitting", "isSubmittingVar", "isSubmitting", !0, !1, R.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1)].concat(R.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
l(ie, "VariablesRecord");
var K = ie;
K.init();
var re = class re extends R.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
l(re, "WidgetsRecord");
var te = re,
    k = class k extends R.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return K
        }
        static getWidgetsRecordConstructor() {
            return te
        }
        static get hasValidationWidgets() {
            return k._hasValidationWidgetsValue === void 0 && (k._hasValidationWidgetsValue = void 0), k._hasValidationWidgetsValue
        }
        setInputs(f) {}
    };
l(k, "Model");
var z = k;
z._hasValidationWidgetsValue = void 0;
var be = new R.Model.ModelFactory(z);
var S = A,
    oe = class oe extends S.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("UserName", "userNameVar", "UserName", !0, !1, S.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("UserEmail", "userEmailVar", "UserEmail", !0, !1, S.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("shouldShowNotify", "shouldShowNotifyVar", "shouldShowNotify", !0, !1, S.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("MenuRef", "menuRefIn", "MenuRef", !0, !1, S.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_menuRefInDataFetchStatus", "_menuRefInDataFetchStatus", "_menuRefInDataFetchStatus", !0, !1, S.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HidePanel", "hidePanelIn", "HidePanel", !0, !1, S.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_hidePanelInDataFetchStatus", "_hidePanelInDataFetchStatus", "_hidePanelInDataFetchStatus", !0, !1, S.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(S.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
l(oe, "VariablesRecord");
var J = oe;
J.init();
var se = class se extends S.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
l(se, "WidgetsRecord");
var ae = se,
    P = class P extends S.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return J
        }
        static getWidgetsRecordConstructor() {
            return ae
        }
        static get hasValidationWidgets() {
            return P._hasValidationWidgetsValue === void 0 && (P._hasValidationWidgetsValue = void 0 || void 0 || void 0), P._hasValidationWidgetsValue
        }
        setInputs(f) {
            "MenuRef" in f && (this.variables.menuRefIn = f.MenuRef, "_menuRefInDataFetchStatus" in f && (this.variables._menuRefInDataFetchStatus = f._menuRefInDataFetchStatus)), "HidePanel" in f && (this.variables.hidePanelIn = f.HidePanel, "_hidePanelInDataFetchStatus" in f && (this.variables._hidePanelInDataFetchStatus = f._hidePanelInDataFetchStatus))
        }
    };
l(P, "Model");
var B = P;
B._hasValidationWidgetsValue = void 0;
var Ee = new S.Model.ModelFactory(B);
var m = me(ye());
var ke = {
        "GNW40dXqRkC32CKcmrA98w#Value.2645995.1": "\u0645\u0633\u062A\u062E\u062F\u0645"
    },
    we = {
        "ar-001": {
            translations: ke,
            isRTL: !0
        }
    };

function le(y, f, s) {
    y.GetOnboardingStatus()
}
l(le, "default");

function ue(y, f, s) {
    function e(n) {
        var t = document.querySelector('meta[name="viewport"]');
        t ? t.content = n : (t = document.createElement("meta"), t.name = "viewport", t.content = n, document.head.appendChild(t))
    }
    l(e, "updateViewportMeta"), e("width=device-width, initial-scale=1.0, maximum-scale=1.0")
}
l(ue, "default");
var o = A; {
    let f = class f extends o.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, we);
            var r = this.controller;
            this.clientActionProxies = {
                getOnboardingStatus$Action: l(function() {
                    return r.executeActionInsideJSNode(r._getOnboardingStatus$Action.bind(r), r.callContext(), function(i) {
                        return {}
                    }, function() {}, "GetOnboardingStatus")
                }, "getOnboardingStatus$Action")
            }, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get getClientProfile$ServerAction() {
            return this.hasOwnProperty("_getClientProfile$ServerAction") || (this._getClientProfile$ServerAction = function(e, n) {
                var t = this.controller;
                return o.Logger.startActiveSpan("GetClientProfile", function(r) {
                    return r && (r.setAttribute("code.function", "GetClientProfile"), r.setAttribute("outsystems.function.key", "5ded5548-621f-4be6-bb2a-1e7a68f5c035"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), o.Flow.tryFinally(function() {
                        var i = {
                            authorization: o.DataConversion.ServerDataConverter.to(e, o.DataTypes.DataTypes.Text)
                        };
                        return t.callServerAction("GetClientProfile", "screenservices/uae/Layouts/DesktopScreenLayout/ActionGetClientProfile", "XyCUwmGl8eh0OBf6WziXgw", i, t.callContext(n), void 0, void 0, !0).then(function(c) {
                            var d = new(t.constructor.getVariableGroupType("uae.Layouts.DesktopScreenLayout$ActionGetClientProfile"));
                            return d.responseOut = o.DataConversion.ServerDataConverter.from(c.Response, F), d
                        })
                    }, function() {
                        r && r.end()
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
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    r = this.idService;
                return o.Logger.startActiveSpan("OnReady", function(i) {
                    return i && (i.setAttribute("code.function", "OnReady"), i.setAttribute("outsystems.function.key", "288a9d34-272f-49b9-a54e-3f1eb8df2da0"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var c = new o.DataTypes.VariableHolder,
                            d = new o.DataTypes.VariableHolder;
                        return o.Flow.executeAsyncFlow(function() {
                            return d.value = b.getAuth$Action(e), o.Logger.startActiveSpan("AsyncGetOnboardingStatus", function(a) {
                                a && (a.setAttribute("code.function", "AsyncGetOnboardingStatus"), a.setAttribute("outsystems.function.key", "8d5e06ee-5eb2-4ef8-bd28-aa3e5af3a223"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return t.safeExecuteJSNode(le, "AsyncGetOnboardingStatus", "OnReady", null, function(w) {}, {
                                        GetOnboardingStatus: t.clientActionProxies.getOnboardingStatus$Action
                                    }, {})
                                } finally {
                                    a && a.end()
                                }
                            }, 1), o.Flow.executeSequence(function() {
                                if (h.getfirst_name() === o.BuiltinFunctions.nullTextIdentifier()) return n.flush(), t.getClientProfile$ServerAction(d.value.tokenOut, e).then(function(a) {
                                    c.value = a
                                }).then(function() {
                                    h.setfirst_name(c.value.responseOut.dataAttr.getCurrent(e.iterationContext).first_nameAttr), h.setlast_name(c.value.responseOut.dataAttr.getCurrent(e.iterationContext).last_nameAttr)
                                })
                            }).then(function() {
                                n.variables.userNameVar = h.getfirst_name() !== o.BuiltinFunctions.nullTextIdentifier() ? o.BuiltinFunctions.length(h.getfirst_name()) > 16 ? o.BuiltinFunctions.substr(h.getfirst_name(), 0, 16) + "..." : h.getfirst_name() : o.Injector.resolve(o.ServiceNames.TranslationsService).getMessage("GNW40dXqRkC32CKcmrA98w#Value.2645995.1", "User"), n.variables.userEmailVar = h.getemail(), o.Logger.startActiveSpan("UpdateMetatag", function(a) {
                                    a && (a.setAttribute("code.function", "UpdateMetatag"), a.setAttribute("outsystems.function.key", "92bcb8be-af14-4533-b502-329ddef020ed"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return t.safeExecuteJSNode(ue, "UpdateMetatag", "OnReady", null, function(w) {}, {}, {})
                                    } finally {
                                        a && a.end()
                                    }
                                }, 1)
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
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    r = this.idService;
                return o.Logger.startActiveSpan("OnInitialize", function(i) {
                    i && (i.setAttribute("code.function", "OnInitialize"), i.setAttribute("outsystems.function.key", "4a9c5420-9e2f-49ff-b9f2-51a3d49cdfe0"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e), n.variables.userNameVar = h.getfirst_name() !== o.BuiltinFunctions.nullTextIdentifier() ? o.BuiltinFunctions.length(h.getfirst_name()) > 16 ? o.BuiltinFunctions.substr(h.getfirst_name(), 0, 16) + "..." : h.getfirst_name() : "User"
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        get _profileOnClick$Action() {
            return this.hasOwnProperty("__profileOnClick$Action") || (this.__profileOnClick$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    r = this.idService;
                return o.Logger.startActiveSpan("ProfileOnClick", function(i) {
                    i && (i.setAttribute("code.function", "ProfileOnClick"), i.setAttribute("outsystems.function.key", "4e632923-39de-4475-aaf9-0f219c8e832d"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("ProfileOnClick"), e = t.callContext(e), o.Navigation.navigateTo(o.Navigation.generateScreenURL("uae", "user-profile", {}), o.Transitions.createTransition(o.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__profileOnClick$Action
        }
        set _profileOnClick$Action(e) {
            this.__profileOnClick$Action = e
        }
        get _getOnboardingStatus$Action() {
            return this.hasOwnProperty("__getOnboardingStatus$Action") || (this.__getOnboardingStatus$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    r = this.idService;
                return o.Logger.startActiveSpan("GetOnboardingStatus", function(i) {
                    return i && (i.setAttribute("code.function", "GetOnboardingStatus"), i.setAttribute("outsystems.function.key", "a7f2ca96-ca0f-4d7f-984b-8491ae64cb3f"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                        t.ensureControllerAlive("GetOnboardingStatus"), e = t.callContext(e);
                        var c = new o.DataTypes.VariableHolder,
                            d = new o.DataTypes.VariableHolder,
                            a = new o.DataTypes.VariableHolder(new o.DataTypes.JSONSerializeOutputType);
                        return o.Flow.executeAsyncFlow(function() {
                            return c.value = b.getAuth$Action(e), n.flush(), b.getUserOnboardingStatus$Action(e).then(function(w) {
                                d.value = w
                            }).then(function() {
                                a.value.jSONOut = o.JSONUtils.serializeToJSON(d.value.responseOut, !1, !1), n.variables.shouldShowNotifyVar = d.value.responseOut.dataAttr.getCurrent(e.iterationContext).profileAttr.statusAttr === "incomplete" || d.value.responseOut.dataAttr.getCurrent(e.iterationContext).addressAttr.statusAttr === "incomplete" || d.value.responseOut.dataAttr.getCurrent(e.iterationContext).walletAttr.createdAttr && d.value.responseOut.dataAttr.getCurrent(e.iterationContext).kycAttr.main_statusAttr !== "verified", h.setonboardingAPIResponse(a.value.jSONOut)
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
        get _onSelectMenu$Action() {
            return this.hasOwnProperty("__onSelectMenu$Action") || (this.__onSelectMenu$Action = function(e, n) {
                var t = this.model,
                    r = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("OnSelectMenu", function(c) {
                    c && (c.setAttribute("code.function", "OnSelectMenu"), c.setAttribute("outsystems.function.key", "b50e4a1d-f360-4480-a7aa-4da3be1b3c23"), c.setAttribute("outsystems.function.owner.name", "uae"), c.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnSelectMenu"), n = r.callContext(n);
                        var d = new o.DataTypes.VariableHolder(new(r.constructor.getVariableGroupType("uae.Layouts.DesktopScreenLayout.OnSelectMenu$vars")));
                        d.value.sectionrefInLocal = e;
                        var a = new o.DataTypes.VariableHolder(new(o.Controller.BaseController.getJSONDeserializeOutputType(o.GenericTypeCache.getGenericList(Y))));
                        if (d.value.sectionrefInLocal !== t.variables.menuRefIn) {
                            if (t.variables.menuRefIn = d.value.sectionrefInLocal, d.value.sectionrefInLocal === "trade") return o.Navigation.navigateTo(o.Navigation.generateScreenURL("uae", "trade", {
                                is_real: o.DataConversion.ServerDataConverter.to(!0, o.DataTypes.DataTypes.Boolean)
                            }), o.Transitions.createTransition(o.Transitions.TransitionAnimation.Default), n, !0);
                            if (d.value.sectionrefInLocal === "hub") return o.Navigation.navigateTo(o.Navigation.generateScreenURL("uae", "home", {}), o.Transitions.createTransition(o.Transitions.TransitionAnimation.Default), n, !0);
                            if (d.value.sectionrefInLocal === "wallets") return a.value.dataOut = o.JSONUtils.deserializeFromJSON(h.getwallet_list_1(), o.GenericTypeCache.getGenericList(Y), !1), a.value.dataOut.length === 0 && h.getwallet_list_1() !== o.BuiltinFunctions.nullTextIdentifier() ? o.Navigation.navigateTo(o.Navigation.generateScreenURL("uae", "currency-selection-wallets", {}), o.Transitions.createTransition(o.Transitions.TransitionAnimation.Default), n, !0) : o.Navigation.navigateTo(o.Navigation.generateScreenURL("uae", "wallet", {}), o.Transitions.createTransition(o.Transitions.TransitionAnimation.Default), n, !0)
                        }
                    } finally {
                        c && c.end()
                    }
                }, 1)
            }), this.__onSelectMenu$Action
        }
        set _onSelectMenu$Action(e) {
            this.__onSelectMenu$Action = e
        }
        onReady$Action(e) {
            var n = this.controller;
            return o.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "288a9d34-272f-49b9-a54e-3f1eb8df2da0"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onInitialize$Action(e) {
            var n = this.controller;
            return o.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "4a9c5420-9e2f-49ff-b9f2-51a3d49cdfe0"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onInitialize$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        profileOnClick$Action(e) {
            var n = this.controller;
            return o.Logger.startActiveSpan("ProfileOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "ProfileOnClick"), t.setAttribute("outsystems.function.key", "4e632923-39de-4475-aaf9-0f219c8e832d"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._profileOnClick$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        getOnboardingStatus$Action(e) {
            var n = this.controller;
            return o.Logger.startActiveSpan("GetOnboardingStatus__proxy", function(t) {
                return t && (t.setAttribute("code.function", "GetOnboardingStatus"), t.setAttribute("outsystems.function.key", "a7f2ca96-ca0f-4d7f-984b-8491ae64cb3f"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._getOnboardingStatus$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onSelectMenu$Action(e, n) {
            var t = this.controller;
            return o.Logger.startActiveSpan("OnSelectMenu__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnSelectMenu"), r.setAttribute("outsystems.function.key", "b50e4a1d-f360-4480-a7aa-4da3be1b3c23"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onSelectMenu$Action, n, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var n = this.controller,
                    t = this.model,
                    r = this.idService;
                return n.onInitialize$Action(e)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var n = this.controller,
                    t = this.model,
                    r = this.idService;
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
            return b.defaultTimeout
        }
    };
    l(f, "ControllerInner");
    let y = f;
    X = y, X.registerVariableGroupType("uae.Layouts.DesktopScreenLayout$ActionGetClientProfile", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: o.DataTypes.DataTypes.Record,
        defaultValue: l(function() {
            return new F
        }, "defaultValue"),
        complexType: F
    }]), X.registerVariableGroupType("uae.Layouts.DesktopScreenLayout.OnSelectMenu$vars", [{
        name: "sectionref",
        attrName: "sectionrefInLocal",
        mandatory: !1,
        dataType: o.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }])
}
var X, Ve = new o.Controller.ControllerFactory(X, M);
var g = me(ye());
var Ie = {
        "lFVG2U40r0GlImbZLmkLTA#Value": "\u0642\u0628\u0648\u0644 \u0627\u0644\u0622\u0646",
        "C5iMTMIs0UW07HN3F1NZCA#Value": ".",
        "lw5bEatuJUCHEvQLMmg1Zw#Value": "\u062F\u0631\u062F\u0634\u0629 \u0645\u0628\u0627\u0634\u0631\u0629",
        "5H8qH+l1Z025bi5iBL2X5Q#ValueExpression.-1363213560.1": "\u0628\u062D\u0627\u062C\u0629 \u0644\u0644\u0645\u0633\u0627\u0639\u062F\u0629\u061F \u0627\u062A\u0635\u0644 \u0628\u0646\u0627 \u0639\u0628\u0631",
        "esHXYPyqlkKnJoTfaYncxQ#Value": ".",
        "hX2QJK2yCESiwtYIvJzkkQ#Value": "\u0627\u0644\u0634\u0631\u0648\u0637 \u0648\u0627\u0644\u0623\u062D\u0643\u0627\u0645",
        "pFW20_LkgUyBGK5KHjSXiQ#ValueExpression.378399544.1": "\u062E\u064F\u0630 \u0644\u062D\u0638\u0629 \u0644\u0645\u0631\u0627\u062C\u0639\u0629 \u0648\u0642\u0628\u0648\u0644 \u0627\u0644\u062A\u062D\u062F\u064A\u062B\u0627\u062A",
        "bk58soXfKUiPIBMIizcUlQ#Value": "\u0644\u0642\u062F \u0642\u0645\u0646\u0627 \u0628\u062A\u062D\u062F\u064A\u062B \u0634\u0631\u0648\u0637\u0646\u0627"
    },
    He = {
        "lFVG2U40r0GlImbZLmkLTA#Value": "\u098F\u0996\u09A8\u0987 \u0997\u09CD\u09B0\u09B9\u09A3 \u0995\u09B0\u09C1\u09A8",
        "C5iMTMIs0UW07HN3F1NZCA#Value": ".",
        "lw5bEatuJUCHEvQLMmg1Zw#Value": "\u09B2\u09BE\u0987\u09AD \u099A\u09CD\u09AF\u09BE\u099F",
        "5H8qH+l1Z025bi5iBL2X5Q#ValueExpression.-1363213560.1": "\u09B8\u09BE\u09B9\u09BE\u09AF\u09CD\u09AF \u09A6\u09B0\u0995\u09BE\u09B0? \u0986\u09AE\u09BE\u09A6\u09C7\u09B0 \u09B8\u09BE\u09A5\u09C7 \u09AF\u09CB\u0997\u09BE\u09AF\u09CB\u0997 \u0995\u09B0\u09C1\u09A8",
        "esHXYPyqlkKnJoTfaYncxQ#Value": ".",
        "hX2QJK2yCESiwtYIvJzkkQ#Value": "\u09B2\u09BE\u0987\u09AD \u099A\u09CD\u09AF\u09BE\u099F",
        "pFW20_LkgUyBGK5KHjSXiQ#ValueExpression.378399544.1": "\u0986\u09AA\u09A1\u09C7\u099F\u0997\u09C1\u09B2\u09CB \u09AA\u09B0\u09CD\u09AF\u09BE\u09B2\u09CB\u099A\u09A8\u09BE \u0995\u09B0\u09C1\u09A8 \u098F\u09AC\u0982 \u0997\u09CD\u09B0\u09B9\u09A3 \u0995\u09B0\u09C1\u09A8",
        "bk58soXfKUiPIBMIizcUlQ#Value": "\u0985\u09CD\u09AF\u09BE\u0995\u09BE\u0989\u09A8\u09CD\u099F \u09B8\u09BE\u09AE\u09AF\u09BC\u09BF\u0995\u09AD\u09BE\u09AC\u09C7 \u0989\u09AA\u09B2\u09AD\u09CD\u09AF \u09A8\u09AF\u09BC\u0964"
    },
    Le = {
        "lFVG2U40r0GlImbZLmkLTA#Value": "Jetzt akzeptieren",
        "C5iMTMIs0UW07HN3F1NZCA#Value": ".",
        "lw5bEatuJUCHEvQLMmg1Zw#Value": "live chat",
        "5H8qH+l1Z025bi5iBL2X5Q#ValueExpression.-1363213560.1": "Brauchen Sie Hilfe? Kontaktieren Sie uns per",
        "esHXYPyqlkKnJoTfaYncxQ#Value": ".",
        "hX2QJK2yCESiwtYIvJzkkQ#Value": "live chat",
        "pFW20_LkgUyBGK5KHjSXiQ#ValueExpression.378399544.1": "Nehmen Sie sich einen Moment Zeit, um die aktualisierte Version zu \xFCberpr\xFCfen und zu akzeptieren",
        "bk58soXfKUiPIBMIizcUlQ#Value": "Konto vor\xFCbergehend nicht verf\xFCgbar"
    },
    xe = {
        "lFVG2U40r0GlImbZLmkLTA#Value": "Aceptar ahora",
        "C5iMTMIs0UW07HN3F1NZCA#Value": ".",
        "lw5bEatuJUCHEvQLMmg1Zw#Value": "live chat",
        "5H8qH+l1Z025bi5iBL2X5Q#ValueExpression.-1363213560.1": "\xBFNecesitas ayuda? Cont\xE1ctanos v\xEDa",
        "esHXYPyqlkKnJoTfaYncxQ#Value": ".",
        "hX2QJK2yCESiwtYIvJzkkQ#Value": "live chat",
        "pFW20_LkgUyBGK5KHjSXiQ#ValueExpression.378399544.1": "T\xF3mate un momento para revisar y aceptar la actualizaci\xF3n",
        "bk58soXfKUiPIBMIizcUlQ#Value": "Cuenta temporalmente no disponible."
    },
    Ue = {
        "lFVG2U40r0GlImbZLmkLTA#Value": "Accepter maintenant",
        "C5iMTMIs0UW07HN3F1NZCA#Value": ".",
        "lw5bEatuJUCHEvQLMmg1Zw#Value": "chat en direct.",
        "5H8qH+l1Z025bi5iBL2X5Q#ValueExpression.-1363213560.1": "Besoin d'aide ? Contactez-nous via",
        "esHXYPyqlkKnJoTfaYncxQ#Value": ".",
        "hX2QJK2yCESiwtYIvJzkkQ#Value": "chat en direct.",
        "pFW20_LkgUyBGK5KHjSXiQ#ValueExpression.378399544.1": "Prenez un moment pour revoir et accepter la mise \xE0 jour",
        "bk58soXfKUiPIBMIizcUlQ#Value": "Compte temporairement indisponible."
    },
    Fe = {
        "lFVG2U40r0GlImbZLmkLTA#Value": "Accetta ora",
        "C5iMTMIs0UW07HN3F1NZCA#Value": ".",
        "lw5bEatuJUCHEvQLMmg1Zw#Value": "chat dal vivo.",
        "5H8qH+l1Z025bi5iBL2X5Q#ValueExpression.-1363213560.1": "Hai bisogno di aiuto? Contattaci tramite",
        "esHXYPyqlkKnJoTfaYncxQ#Value": ".",
        "hX2QJK2yCESiwtYIvJzkkQ#Value": "chat dal vivo.",
        "pFW20_LkgUyBGK5KHjSXiQ#ValueExpression.378399544.1": "Prenditi un momento per rivedere e accettare l'aggiornamento",
        "bk58soXfKUiPIBMIizcUlQ#Value": "Account temporaneamente non disponibile."
    },
    Me = {
        "lFVG2U40r0GlImbZLmkLTA#Value": "\u1791\u1791\u17BD\u179B\u1799\u179B\u17CB\u17A5\u17A1\u17BC\u179C\u1793\u17C1\u17C7",
        "C5iMTMIs0UW07HN3F1NZCA#Value": "\u17D4",
        "lw5bEatuJUCHEvQLMmg1Zw#Value": "\u1780\u17B6\u179A\u1787\u1787\u17C2\u1780\u1795\u17D2\u1791\u17B6\u179B\u17CB",
        "5H8qH+l1Z025bi5iBL2X5Q#ValueExpression.-1363213560.1": "\u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A\u1787\u17C6\u1793\u17BD\u1799\u1791\u17C1? \u1791\u17C6\u1793\u17B6\u1780\u17CB\u1791\u17C6\u1793\u1784\u1798\u1780\u179C\u17B7\u1789\u178F\u17B6\u1798\u179A\u1799\u17C8",
        "esHXYPyqlkKnJoTfaYncxQ#Value": "\u17D4",
        "hX2QJK2yCESiwtYIvJzkkQ#Value": "\u1780\u17B6\u179A\u1787\u1787\u17C2\u1780\u1795\u17D2\u1791\u17B6\u179B\u17CB",
        "pFW20_LkgUyBGK5KHjSXiQ#ValueExpression.378399544.1": "\u1794\u17BE\u1780\u1798\u17BD\u17BB\u1784\u1798\u17C9\u17BB\u1784\u1798\u17BD\u1799 \u178A\u17BE\u1798\u17D2\u1794\u17B8\u1796\u17B7\u1793\u17B7\u178F\u17D2\u1799 \u1793\u17B7\u1784\u1791\u1791\u17BD\u179B\u1799\u1780\u1780\u17B6\u179A\u17A2\u17B6\u1794\u17CB\u0E40\u0E14\u178F",
        "bk58soXfKUiPIBMIizcUlQ#Value": "\u1782\u178E\u1793\u17B8\u1798\u17B7\u1793\u17A2\u17B6\u1785\u1794\u17D2\u179A\u17BE\u1794\u17B6\u1793\u1787\u17B6\u1794\u178E\u17D2\u178F\u17C4\u17C7\u17A2\u17B6\u179F\u1793\u17D2\u1793"
    },
    Ne = {
        "lFVG2U40r0GlImbZLmkLTA#Value": "\uC9C0\uAE08 \uC218\uB77D",
        "C5iMTMIs0UW07HN3F1NZCA#Value": ".",
        "lw5bEatuJUCHEvQLMmg1Zw#Value": "\uC2E4\uC2DC\uAC04 \uCC44\uD305",
        "5H8qH+l1Z025bi5iBL2X5Q#ValueExpression.-1363213560.1": "\uB3C4\uC6C0\uC774 \uD544\uC694\uD558\uC2E0\uAC00\uC694? \uBB38\uC758\uB294 \uB97C \uD1B5\uD574",
        "esHXYPyqlkKnJoTfaYncxQ#Value": ".",
        "hX2QJK2yCESiwtYIvJzkkQ#Value": "\uC2E4\uC2DC\uAC04 \uCC44\uD305",
        "pFW20_LkgUyBGK5KHjSXiQ#ValueExpression.378399544.1": "\uC7A0\uC2DC \uC2DC\uAC04\uC744 \uB0B4\uC5B4 \uC5C5\uB370\uC774\uD2B8 \uB0B4\uC6A9\uC744 \uAC80\uD1A0\uD558\uACE0 \uC218\uB77D\uD558\uC138\uC694",
        "bk58soXfKUiPIBMIizcUlQ#Value": "\uACC4\uC815\uC744 \uC77C\uC2DC\uC801\uC73C\uB85C \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."
    },
    De = {
        "lFVG2U40r0GlImbZLmkLTA#Value": "Akceptuj teraz",
        "C5iMTMIs0UW07HN3F1NZCA#Value": ".",
        "lw5bEatuJUCHEvQLMmg1Zw#Value": "czat na \u017Cywo.",
        "5H8qH+l1Z025bi5iBL2X5Q#ValueExpression.-1363213560.1": "Potrzebujesz pomocy? Skontaktuj si\u0119 przez",
        "esHXYPyqlkKnJoTfaYncxQ#Value": ".",
        "hX2QJK2yCESiwtYIvJzkkQ#Value": "czat na \u017Cywo.",
        "pFW20_LkgUyBGK5KHjSXiQ#ValueExpression.378399544.1": "Po\u015Bwi\u0119\u0107 chwil\u0119 na przejrzenie i zaakceptowanie zaktualizowanych danych",
        "bk58soXfKUiPIBMIizcUlQ#Value": "Konto chwilowo niedost\u0119pne."
    },
    Qe = {
        "lFVG2U40r0GlImbZLmkLTA#Value": "Aceitar agora",
        "C5iMTMIs0UW07HN3F1NZCA#Value": ".",
        "lw5bEatuJUCHEvQLMmg1Zw#Value": "live chat",
        "5H8qH+l1Z025bi5iBL2X5Q#ValueExpression.-1363213560.1": "Precisa de ajuda? Contacte-nos via",
        "esHXYPyqlkKnJoTfaYncxQ#Value": ".",
        "hX2QJK2yCESiwtYIvJzkkQ#Value": "live chat",
        "pFW20_LkgUyBGK5KHjSXiQ#ValueExpression.378399544.1": "Tire um momento para rever e aceitar a atualiza\xE7\xE3o",
        "bk58soXfKUiPIBMIizcUlQ#Value": "Conta temporariamente indispon\xEDvel"
    },
    $e = {
        "lFVG2U40r0GlImbZLmkLTA#Value": "\u041F\u0440\u0438\u043D\u044F\u0442\u044C \u0441\u0435\u0439\u0447\u0430\u0441",
        "C5iMTMIs0UW07HN3F1NZCA#Value": ".",
        "lw5bEatuJUCHEvQLMmg1Zw#Value": "\u043E\u043D\u043B\u0430\u0439\u043D-\u0447\u0430\u0442.",
        "5H8qH+l1Z025bi5iBL2X5Q#ValueExpression.-1363213560.1": "\u041D\u0443\u0436\u043D\u0430 \u043F\u043E\u043C\u043E\u0449\u044C? \u0421\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u043C\u0438 \u0447\u0435\u0440\u0435\u0437",
        "esHXYPyqlkKnJoTfaYncxQ#Value": ".",
        "hX2QJK2yCESiwtYIvJzkkQ#Value": "\u043E\u043D\u043B\u0430\u0439\u043D-\u0447\u0430\u0442.",
        "pFW20_LkgUyBGK5KHjSXiQ#ValueExpression.378399544.1": "\u0412\u0440\u0435\u043C\u044F \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0438 \u043F\u0440\u0438\u043D\u044F\u0442\u044C \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435",
        "bk58soXfKUiPIBMIizcUlQ#Value": "\u0421\u0447\u0435\u0442 \u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D."
    },
    Ge = {
        "lFVG2U40r0GlImbZLmkLTA#Value": "\u0DC0\u0DBB\u0DCA\u0DAD\u0DB8\u0DCF\u0DB1\u0DBA\u0DA7 \u0DB4\u0DD2\u0DC5\u0DD2\u0D9C\u0DB1\u0DCA\u0DB1",
        "C5iMTMIs0UW07HN3F1NZCA#Value": ".",
        "lw5bEatuJUCHEvQLMmg1Zw#Value": "\u0DC3\u0DA2\u0DD3\u0DC0\u0DD3 \u0D9A\u0DAE\u0DCF\u0DB6\u0DC3\u0DCA",
        "5H8qH+l1Z025bi5iBL2X5Q#ValueExpression.-1363213560.1": "\u0D8B\u0DB4\u0D9A\u0DCF\u0DBB\u0DBA\u0D9A\u0DCA \u0D85\u0DC0\u0DC1\u0DCA\u200D\u0DBA\u0DAF? \u0D85\u0DB4\u0DA7 \u0DC3\u0DB8\u0DCA\u0DB6\u0DB1\u0DCA\u0DB0 \u0DC0\u0DD9\u0DB1\u0DCA\u0DB1",
        "esHXYPyqlkKnJoTfaYncxQ#Value": ".",
        "hX2QJK2yCESiwtYIvJzkkQ#Value": "\u0DC3\u0DA2\u0DD3\u0DC0\u0DD3 \u0D9A\u0DAE\u0DCF\u0DB6\u0DC3\u0DCA",
        "pFW20_LkgUyBGK5KHjSXiQ#ValueExpression.378399544.1": "\u0DBA\u0DCF\u0DC0\u0DAD\u0DCA\u0D9A\u0DCF\u0DBD\u0DD3\u0DB1 \u0D9A\u0DD2\u0DBB\u0DD3\u0DB8\u0DCA \u0DC3\u0DB8\u0DCF\u0DBD\u0DDD\u0DA0\u0DB1\u0DBA \u0D9A\u0DBB\u0D9C\u0DD9\u0DB1 \u0DC3\u0DC5 arthritis\u0DAD \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
        "bk58soXfKUiPIBMIizcUlQ#Value": "\u0D9C\u0DD2\u0DAB\u0DD4\u0DB8 \u0DAD\u0DCF\u0DC0\u0D9A\u0DCF\u0DBD\u0DD2\u0D9A\u0DC0 \u0DBD\u0DB6\u0DCF \u0D9C\u0DAD \u0DB1\u0DDC\u0DC4\u0DD0\u0D9A"
    },
    We = {
        "lFVG2U40r0GlImbZLmkLTA#Value": "Kubali sasa",
        "C5iMTMIs0UW07HN3F1NZCA#Value": ".",
        "lw5bEatuJUCHEvQLMmg1Zw#Value": "mazungumzo mubashara",
        "5H8qH+l1Z025bi5iBL2X5Q#ValueExpression.-1363213560.1": "Msaada unahitajika? Wasiliana nasi kupitia",
        "esHXYPyqlkKnJoTfaYncxQ#Value": ".",
        "hX2QJK2yCESiwtYIvJzkkQ#Value": "mazungumzo mubashara",
        "pFW20_LkgUyBGK5KHjSXiQ#ValueExpression.378399544.1": "Chukua muda kidogo ili kujiridhisha na kukubali sasisho",
        "bk58soXfKUiPIBMIizcUlQ#Value": "Akaunti haipatikani kwa muda."
    },
    Ke = {
        "lFVG2U40r0GlImbZLmkLTA#Value": "\u0E22\u0E2D\u0E21\u0E23\u0E31\u0E1A\u0E40\u0E14\u0E35\u0E4B\u0E22\u0E27\u0E19\u0E35\u0E49",
        "C5iMTMIs0UW07HN3F1NZCA#Value": ".",
        "lw5bEatuJUCHEvQLMmg1Zw#Value": "\u0E41\u0E0A\u0E17\u0E2A\u0E14",
        "5H8qH+l1Z025bi5iBL2X5Q#ValueExpression.-1363213560.1": "\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E04\u0E27\u0E32\u0E21\u0E0A\u0E48\u0E27\u0E22\u0E40\u0E2B\u0E25\u0E37\u0E2D? \u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E40\u0E23\u0E32\u0E1C\u0E48\u0E32\u0E19",
        "esHXYPyqlkKnJoTfaYncxQ#Value": ".",
        "hX2QJK2yCESiwtYIvJzkkQ#Value": "\u0E41\u0E0A\u0E17\u0E2A\u0E14",
        "pFW20_LkgUyBGK5KHjSXiQ#ValueExpression.378399544.1": "\u0E43\u0E0A\u0E49\u0E40\u0E27\u0E25\u0E32\u0E2A\u0E31\u0E01\u0E04\u0E23\u0E39\u0E48\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E17\u0E1A\u0E17\u0E27\u0E19\u0E41\u0E25\u0E30\u0E22\u0E2D\u0E21\u0E23\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E2D\u0E31\u0E1B\u0E40\u0E14\u0E15",
        "bk58soXfKUiPIBMIizcUlQ#Value": "\u0E1A\u0E31\u0E0D\u0E0A\u0E35\u0E44\u0E21\u0E48\u0E2D\u0E32\u0E08\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E44\u0E14\u0E49\u0E0A\u0E31\u0E48\u0E27\u0E04\u0E23\u0E32\u0E27"
    },
    ze = {
        "lFVG2U40r0GlImbZLmkLTA#Value": "\u015Eimdi kabul et",
        "C5iMTMIs0UW07HN3F1NZCA#Value": ".",
        "lw5bEatuJUCHEvQLMmg1Zw#Value": "canl\u0131 sohbet",
        "5H8qH+l1Z025bi5iBL2X5Q#ValueExpression.-1363213560.1": "Yard\u0131ma m\u0131 ihtiyac\u0131n var? Bize ula\u015Fmak i\xE7in",
        "esHXYPyqlkKnJoTfaYncxQ#Value": ".",
        "hX2QJK2yCESiwtYIvJzkkQ#Value": "canl\u0131 sohbet",
        "pFW20_LkgUyBGK5KHjSXiQ#ValueExpression.378399544.1": "G\xFCncellemeyi g\xF6zden ge\xE7irmek ve kabul etmek i\xE7in bir an ay\u0131r\u0131n",
        "bk58soXfKUiPIBMIizcUlQ#Value": "Hesap ge\xE7ici olarak kullan\u0131lam\u0131yor."
    },
    Je = {
        "lFVG2U40r0GlImbZLmkLTA#Value": "Hozir qabul qil",
        "C5iMTMIs0UW07HN3F1NZCA#Value": ".",
        "lw5bEatuJUCHEvQLMmg1Zw#Value": "jonli chat",
        "5H8qH+l1Z025bi5iBL2X5Q#ValueExpression.-1363213560.1": "Yordam kerakmi? Biz bilan bog'lanish uchun",
        "esHXYPyqlkKnJoTfaYncxQ#Value": ".",
        "hX2QJK2yCESiwtYIvJzkkQ#Value": "jonli chat",
        "pFW20_LkgUyBGK5KHjSXiQ#ValueExpression.378399544.1": "Yangilashlarni ko'rib chiqish va qabul qilish uchun bir daqiqa vaqt ajrating",
        "bk58soXfKUiPIBMIizcUlQ#Value": "Hisob vaqtinchalik mavjud emas"
    },
    Be = {
        "lFVG2U40r0GlImbZLmkLTA#Value": "Hozir qabul qil",
        "C5iMTMIs0UW07HN3F1NZCA#Value": ".",
        "lw5bEatuJUCHEvQLMmg1Zw#Value": "jonli chat",
        "5H8qH+l1Z025bi5iBL2X5Q#ValueExpression.-1363213560.1": "Yordam kerakmi? Biz bilan bog'lanish uchun",
        "esHXYPyqlkKnJoTfaYncxQ#Value": ".",
        "hX2QJK2yCESiwtYIvJzkkQ#Value": "jonli chat",
        "pFW20_LkgUyBGK5KHjSXiQ#ValueExpression.378399544.1": "Yangilashlarni ko'rib chiqish va qabul qilish uchun bir daqiqa vaqt ajrating",
        "bk58soXfKUiPIBMIizcUlQ#Value": "Hisob vaqtinchalik mavjud emas"
    },
    Xe = {
        "lFVG2U40r0GlImbZLmkLTA#Value": "Ch\u1EA5p nh\u1EADn ngay b\xE2y gi\u1EDD",
        "C5iMTMIs0UW07HN3F1NZCA#Value": ".",
        "lw5bEatuJUCHEvQLMmg1Zw#Value": "live chat",
        "5H8qH+l1Z025bi5iBL2X5Q#ValueExpression.-1363213560.1": "C\u1EA7n gi\xFAp \u0111\u1EE1? Li\xEAn h\u1EC7 ch\xFAng t\xF4i qua",
        "esHXYPyqlkKnJoTfaYncxQ#Value": ".",
        "hX2QJK2yCESiwtYIvJzkkQ#Value": "live chat",
        "pFW20_LkgUyBGK5KHjSXiQ#ValueExpression.378399544.1": "D\xE0nh ch\xFAt th\u1EDDi gian \u0111\u1EC3 xem x\xE9t v\xE0 ch\u1EA5p nh\u1EADn c\u1EADp nh\u1EADt",
        "bk58soXfKUiPIBMIizcUlQ#Value": "T\xE0i kho\u1EA3n t\u1EA1m th\u1EDDi kh\xF4ng kh\u1EA3 d\u1EE5ng."
    },
    Ze = {
        "lFVG2U40r0GlImbZLmkLTA#Value": "\u7ACB\u5373\u63A5\u53D7",
        "C5iMTMIs0UW07HN3F1NZCA#Value": "\u3002",
        "lw5bEatuJUCHEvQLMmg1Zw#Value": "\u5B9E\u65F6\u804A\u5929",
        "5H8qH+l1Z025bi5iBL2X5Q#ValueExpression.-1363213560.1": "\u9700\u8981\u5E2E\u52A9\uFF1F\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u8054\u7CFB\u6211\u4EEC",
        "esHXYPyqlkKnJoTfaYncxQ#Value": "\u3002",
        "hX2QJK2yCESiwtYIvJzkkQ#Value": "\u5B9E\u65F6\u804A\u5929",
        "pFW20_LkgUyBGK5KHjSXiQ#ValueExpression.378399544.1": "\u82B1\u70B9\u65F6\u95F4\u5BA1\u67E5\u5E76\u63A5\u53D7\u66F4\u65B0",
        "bk58soXfKUiPIBMIizcUlQ#Value": "\u8D26\u6237\u6682\u65F6\u4E0D\u53EF\u7528"
    },
    qe = {
        "lFVG2U40r0GlImbZLmkLTA#Value": "\u73FE\u5728\u63A5\u53D7",
        "C5iMTMIs0UW07HN3F1NZCA#Value": "\u3002",
        "lw5bEatuJUCHEvQLMmg1Zw#Value": "\u5373\u6642\u804A\u5929",
        "5H8qH+l1Z025bi5iBL2X5Q#ValueExpression.-1363213560.1": "\u9700\u8981\u5E6B\u52A9\uFF1F\u900F\u904E\u4EE5\u4E0B\u65B9\u5F0F\u806F\u7E6B\u6211\u5011",
        "esHXYPyqlkKnJoTfaYncxQ#Value": "\u3002",
        "hX2QJK2yCESiwtYIvJzkkQ#Value": "\u5373\u6642\u804A\u5929",
        "pFW20_LkgUyBGK5KHjSXiQ#ValueExpression.378399544.1": "\u82B1\u9EDE\u6642\u9593\u5BE9\u67E5\u4E26\u63A5\u53D7\u66F4\u65B0",
        "bk58soXfKUiPIBMIizcUlQ#Value": "\u5E33\u6236\u66AB\u6642\u7121\u6CD5\u4F7F\u7528"
    },
    Re = {
        "ar-001": {
            translations: Ie,
            isRTL: !0
        },
        "bn-BD": {
            translations: He,
            isRTL: !1
        },
        "de-DE": {
            translations: Le,
            isRTL: !1
        },
        "es-ES": {
            translations: xe,
            isRTL: !1
        },
        "fr-FR": {
            translations: Ue,
            isRTL: !1
        },
        "it-IT": {
            translations: Fe,
            isRTL: !1
        },
        "km-KH": {
            translations: Me,
            isRTL: !1
        },
        "ko-KR": {
            translations: Ne,
            isRTL: !1
        },
        "pl-PL": {
            translations: De,
            isRTL: !1
        },
        "pt-PT": {
            translations: Qe,
            isRTL: !1
        },
        "ru-RU": {
            translations: $e,
            isRTL: !1
        },
        "si-LK": {
            translations: Ge,
            isRTL: !1
        },
        "sw-KE": {
            translations: We,
            isRTL: !1
        },
        "th-TH": {
            translations: Ke,
            isRTL: !1
        },
        "tr-TR": {
            translations: ze,
            isRTL: !1
        },
        "uz-Latn": {
            translations: Je,
            isRTL: !1
        },
        "uz-UZ": {
            translations: Be,
            isRTL: !1
        },
        "vi-VN": {
            translations: Xe,
            isRTL: !1
        },
        "zh-CN": {
            translations: Ze,
            isRTL: !1
        },
        "zh-TW": {
            translations: qe,
            isRTL: !1
        }
    };

function ce(y, f, s, e) {
    function n() {
        if (window.Intercom) {
            window.Intercom("show"), y.is_already_loaded = !0;
            return
        }
        y.is_already_loaded = !1
    }
    l(n, "showIntercom")
}
l(ce, "default");

function de(y, f, s, e) {
    let t = window.location.hostname === "app.deriv.ae" ? "https://deriv.ae" : "https://staging.deriv.ae",
        r = y.lang !== "EN" ? "/ar" : "",
        i = `${t}${r}/terms-and-conditions`;
    window.open(i, "_blank")
}
l(de, "default");
var u = A; {
    let f = class f extends u.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, Re);
            var r = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get acceptedClientTNC$ServerAction() {
            return this.hasOwnProperty("_acceptedClientTNC$ServerAction") || (this._acceptedClientTNC$ServerAction = function(e, n) {
                var t = this.controller;
                return u.Logger.startActiveSpan("AcceptedClientTNC", function(r) {
                    return r && (r.setAttribute("code.function", "AcceptedClientTNC"), r.setAttribute("outsystems.function.key", "c352e8b8-251b-4f47-bcb3-0fe07d21b56f"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), u.Flow.tryFinally(function() {
                        var i = {
                            Authorization: u.DataConversion.ServerDataConverter.to(e, u.DataTypes.DataTypes.Text)
                        };
                        return t.callServerAction("AcceptedClientTNC", "screenservices/uae/Common/TermsAndConditionUpdate/ActionAcceptedClientTNC", "DGHcGpUA8oqdfs81iG5Q5Q", i, t.callContext(n), void 0, void 0, !0).then(function(c) {
                            var d = new(t.constructor.getVariableGroupType("uae.Common.TermsAndConditionUpdate$ActionAcceptedClientTNC"));
                            return d.responseOut = u.DataConversion.ServerDataConverter.from(c.Response, x), d
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 0)
            }), this._acceptedClientTNC$ServerAction
        }
        set acceptedClientTNC$ServerAction(e) {
            this._acceptedClientTNC$ServerAction = e
        }
        get getSettings$ServerAction() {
            return this.hasOwnProperty("_getSettings$ServerAction") || (this._getSettings$ServerAction = function(e, n) {
                var t = this.controller;
                return u.Logger.startActiveSpan("GetSettings", function(r) {
                    return r && (r.setAttribute("code.function", "GetSettings"), r.setAttribute("outsystems.function.key", "72b5f64f-52ef-45d6-baeb-c251bdfaf1ee"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), u.Flow.tryFinally(function() {
                        var i = {
                            Authorization: u.DataConversion.ServerDataConverter.to(e, u.DataTypes.DataTypes.Text)
                        };
                        return t.callServerAction("GetSettings", "screenservices/uae/Common/TermsAndConditionUpdate/ActionGetSettings", "eKLXUGtzOIowe9r9Uhu7+Q", i, t.callContext(n), void 0, void 0, !0).then(function(c) {
                            var d = new(t.constructor.getVariableGroupType("uae.Common.TermsAndConditionUpdate$ActionGetSettings"));
                            return d.responseOut = u.DataConversion.ServerDataConverter.from(c.Response, U), d
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 0)
            }), this._getSettings$ServerAction
        }
        set getSettings$ServerAction(e) {
            this._getSettings$ServerAction = e
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onAcceptTnc$Action() {
            return this.hasOwnProperty("__onAcceptTnc$Action") || (this.__onAcceptTnc$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    r = this.idService;
                return u.Logger.startActiveSpan("OnAcceptTnc", function(i) {
                    return i && (i.setAttribute("code.function", "OnAcceptTnc"), i.setAttribute("outsystems.function.key", "155733ea-f6a8-4f7f-8c6d-579e03801635"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), u.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnAcceptTnc"), e = t.callContext(e);
                        var c = new u.DataTypes.VariableHolder,
                            d = new u.DataTypes.VariableHolder;
                        return u.Flow.executeAsyncFlow(function() {
                            return n.variables.isSubmittingVar = !0, d.value = b.getAuth$Action(e), n.flush(), t.acceptedClientTNC$ServerAction(d.value.tokenOut, e).then(function(a) {
                                c.value = a
                            }).then(function() {
                                n.variables.isSubmittingVar = !1, h.setenableTCPopUp(!1)
                            })
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__onAcceptTnc$Action
        }
        set _onAcceptTnc$Action(e) {
            this.__onAcceptTnc$Action = e
        }
        get _onClickOpenLiveChat$Action() {
            return this.hasOwnProperty("__onClickOpenLiveChat$Action") || (this.__onClickOpenLiveChat$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    r = this.idService;
                return u.Logger.startActiveSpan("OnClickOpenLiveChat", function(i) {
                    return i && (i.setAttribute("code.function", "OnClickOpenLiveChat"), i.setAttribute("outsystems.function.key", "688731d4-0d5e-4460-a9d8-fb29c5a5e06c"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), u.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnClickOpenLiveChat"), e = t.callContext(e);
                        var c = new u.DataTypes.VariableHolder;
                        return u.Flow.executeAsyncFlow(function() {
                            return c.value = u.Logger.startActiveSpan("Intercom", function(d) {
                                d && (d.setAttribute("code.function", "Intercom"), d.setAttribute("outsystems.function.key", "b0a2d10e-3181-44a7-a477-09aff5ee74fe"), d.setAttribute("outsystems.function.owner.name", "uae"), d.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), d.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return t.safeExecuteJSNode(ce, "Intercom", "OnClickOpenLiveChat", {
                                        is_already_loaded: u.DataConversion.JSNodeParamConverter.to(!1, u.DataTypes.DataTypes.Boolean)
                                    }, function(a) {
                                        var w = new(t.constructor.getVariableGroupType("uae.Common.TermsAndConditionUpdate.OnClickOpenLiveChat$intercomJSResult"));
                                        return w.is_already_loadedOut = u.DataConversion.JSNodeParamConverter.from(a.is_already_loaded, u.DataTypes.DataTypes.Boolean), w
                                    }, {}, {})
                                } finally {
                                    d && d.end()
                                }
                            }, 1), u.Flow.executeSequence(function() {
                                if (!c.value.is_already_loadedOut) return n.flush(), b.openIntercom$Action(e)
                            })
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__onClickOpenLiveChat$Action
        }
        set _onClickOpenLiveChat$Action(e) {
            this.__onClickOpenLiveChat$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    r = this.idService;
                return u.Logger.startActiveSpan("OnReady", function(i) {
                    return i && (i.setAttribute("code.function", "OnReady"), i.setAttribute("outsystems.function.key", "cc9c379b-1747-45f0-bcfc-afe1862231f8"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), u.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var c = new u.DataTypes.VariableHolder,
                            d = new u.DataTypes.VariableHolder;
                        return u.Flow.executeAsyncFlow(function() {
                            return d.value = b.getAuth$Action(e), n.flush(), t.getSettings$ServerAction(d.value.tokenOut, e).then(function(a) {
                                c.value = a
                            }).then(function() {
                                n.variables.isOpenVar = h.getenableTCPopUp() && c.value.responseOut.dataAttr.getCurrent(e.iterationContext).tncAttr.outdatedAttr === !0
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
        get _openTermsAndConditionLink$Action() {
            return this.hasOwnProperty("__openTermsAndConditionLink$Action") || (this.__openTermsAndConditionLink$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    r = this.idService;
                return u.Logger.startActiveSpan("OpenTermsAndConditionLink", function(i) {
                    i && (i.setAttribute("code.function", "OpenTermsAndConditionLink"), i.setAttribute("outsystems.function.key", "fbefa8e5-4269-4680-9d9b-c5959a2549fd"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OpenTermsAndConditionLink"), e = t.callContext(e), u.Logger.startActiveSpan("JavaScript1", function(c) {
                            c && (c.setAttribute("code.function", "JavaScript1"), c.setAttribute("outsystems.function.key", "6a178191-fdcb-436e-b2d2-398e2f4e9e81"), c.setAttribute("outsystems.function.owner.name", "uae"), c.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(de, "JavaScript1", "OpenTermsAndConditionLink", {
                                    lang: u.DataConversion.JSNodeParamConverter.to(b.languageMapper$Action(e).charCodeOut, u.DataTypes.DataTypes.Text)
                                }, function(d) {}, {}, {})
                            } finally {
                                c && c.end()
                            }
                        }, 1)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__openTermsAndConditionLink$Action
        }
        set _openTermsAndConditionLink$Action(e) {
            this.__openTermsAndConditionLink$Action = e
        }
        onAcceptTnc$Action(e) {
            var n = this.controller;
            return u.Logger.startActiveSpan("OnAcceptTnc__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnAcceptTnc"), t.setAttribute("outsystems.function.key", "155733ea-f6a8-4f7f-8c6d-579e03801635"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), u.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onAcceptTnc$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onClickOpenLiveChat$Action(e) {
            var n = this.controller;
            return u.Logger.startActiveSpan("OnClickOpenLiveChat__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnClickOpenLiveChat"), t.setAttribute("outsystems.function.key", "688731d4-0d5e-4460-a9d8-fb29c5a5e06c"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), u.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onClickOpenLiveChat$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onReady$Action(e) {
            var n = this.controller;
            return u.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "cc9c379b-1747-45f0-bcfc-afe1862231f8"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), u.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        openTermsAndConditionLink$Action(e) {
            var n = this.controller;
            return u.Logger.startActiveSpan("OpenTermsAndConditionLink__proxy", function(t) {
                t && (t.setAttribute("code.function", "OpenTermsAndConditionLink"), t.setAttribute("outsystems.function.key", "fbefa8e5-4269-4680-9d9b-c5959a2549fd"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._openTermsAndConditionLink$Action, e)
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
                var n = this.controller,
                    t = this.model,
                    r = this.idService;
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
            return b.defaultTimeout
        }
    };
    l(f, "ControllerInner");
    let y = f;
    L = y, L.registerVariableGroupType("uae.Common.TermsAndConditionUpdate$ActionAcceptedClientTNC", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: u.DataTypes.DataTypes.Record,
        defaultValue: l(function() {
            return new x
        }, "defaultValue"),
        complexType: x
    }]), L.registerVariableGroupType("uae.Common.TermsAndConditionUpdate$ActionGetSettings", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: u.DataTypes.DataTypes.Record,
        defaultValue: l(function() {
            return new U
        }, "defaultValue"),
        complexType: U
    }]), L.registerVariableGroupType("uae.Common.TermsAndConditionUpdate.OnClickOpenLiveChat$intercomJSResult", [{
        name: "is_already_loaded",
        attrName: "is_already_loadedOut",
        mandatory: !0,
        dataType: u.DataTypes.DataTypes.Boolean,
        defaultValue: l(function() {
            return !1
        }, "defaultValue")
    }])
}
var L, Oe = new u.Controller.ControllerFactory(L, M);
var et = O.PlaceholderContent,
    $t = O.IteratorPlaceholderContent,
    tt = l(function() {
        var y = D(function(f) {
            var s = f.model,
                e = f.controller,
                n = f.controller.idService,
                t = e.validationService,
                r = e.callContext(),
                i = G,
                c = W,
                d = {
                    props: f,
                    validateWidget: l(function(v) {
                        f.validateWidget(f, v)
                    }, "validateWidget")
                },
                a = s,
                w = $,
                T = Q,
                p = N();
            return g.createElement("div", f.rootNodeProperties, g.createElement(ge, {
                extendedProperties: {
                    style: "height: auto; max- width: 356px !important; width: fill;"
                },
                showPopup: s.variables.isOpenVar,
                style: "popup-dialog warning-popup",
                _idProps: {
                    service: n,
                    uuid: "0"
                },
                _widgetRecordProvider: a
            }, g.createElement(C, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "height: auto; padding: 0px; text-align: center;"
                },
                style: "display-flex align-items-center justify-content-center flex-direction-column gap-6",
                visible: !0,
                _idProps: {
                    service: n,
                    name: "PopupContent"
                },
                _widgetRecordProvider: a
            }, g.createElement(C, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "font-size: 18px; text-align: start;"
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "100%"
                },
                style: "display-block flex-direction-column",
                visible: !0,
                _idProps: {
                    service: n,
                    name: "Title"
                },
                _widgetRecordProvider: a
            }, g.createElement(E, {
                extendedProperties: {
                    style: "color: #101213; font-size: 18px; font-weight: bold; height: auto; margin-top: 0px; width: fill;"
                },
                text: [T(c("bk58soXfKUiPIBMIizcUlQ#Value", "We\u2019ve updated our terms"))],
                _idProps: {
                    service: n,
                    uuid: "3"
                },
                _widgetRecordProvider: a
            })), g.createElement(C, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "font-size: 16px; text-align: start;"
                },
                style: "display-flex flex-direction-column",
                visible: !0,
                _idProps: {
                    service: n,
                    name: "Body"
                },
                _widgetRecordProvider: a
            }, g.createElement(C, {
                align: 0,
                animate: !1,
                style: "full-width",
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "5"
                },
                _widgetRecordProvider: a
            }, g.createElement(I, {
                style: "",
                value: Z.resolve(q.TranslationsService).getMessage("pFW20_LkgUyBGK5KHjSXiQ#ValueExpression.378399544.1", "Take a moment to review and accept the updated "),
                _idProps: {
                    service: n,
                    uuid: "6"
                },
                _widgetRecordProvider: a
            }), g.createElement(V, {
                enabled: !0,
                extendedProperties: {
                    style: "margin-inline-start: 0px;"
                },
                onClick: l(function() {
                    var v = typeof r != "undefined" && r !== null ? r.clone() : e.callContext().clone();
                    e.openTermsAndConditionLink$Action(e.callContext(v))
                }, "onClick"),
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "7"
                },
                _widgetRecordProvider: a
            }, g.createElement(E, {
                extendedProperties: {
                    style: "color: #222; font-weight: normal; text-decoration: underline;"
                },
                text: [T(c("hX2QJK2yCESiwtYIvJzkkQ#Value", "terms and conditions"))],
                _idProps: {
                    service: n,
                    uuid: "8"
                },
                _widgetRecordProvider: a
            })), g.createElement(E, {
                style: "message",
                text: [T(c("esHXYPyqlkKnJoTfaYncxQ#Value", "."))],
                _idProps: {
                    service: n,
                    uuid: "9"
                },
                _widgetRecordProvider: a
            })), g.createElement(C, {
                align: 0,
                animate: !1,
                style: "full-width",
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "10"
                },
                _widgetRecordProvider: a
            }, g.createElement(I, {
                style: "",
                value: Z.resolve(q.TranslationsService).getMessage("5H8qH+l1Z025bi5iBL2X5Q#ValueExpression.-1363213560.1", "Need help? Contact us via "),
                _idProps: {
                    service: n,
                    uuid: "11"
                },
                _widgetRecordProvider: a
            }), g.createElement(V, {
                enabled: !0,
                extendedProperties: {
                    style: "margin-inline-start: 0px;"
                },
                onClick: l(function() {
                    return Promise.resolve().then(function() {
                        var v = typeof r != "undefined" && r !== null ? r.clone() : e.callContext().clone();
                        return e.onClickOpenLiveChat$Action(e.callContext(v))
                    })
                }, "onClick"),
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "12"
                },
                _widgetRecordProvider: a
            }, g.createElement(E, {
                extendedProperties: {
                    style: "color: #222; font-weight: normal; text-decoration: underline;"
                },
                text: [T(c("lw5bEatuJUCHEvQLMmg1Zw#Value", "live chat"))],
                _idProps: {
                    service: n,
                    uuid: "13"
                },
                _widgetRecordProvider: a
            })), g.createElement(E, {
                style: "message",
                text: [T(c("C5iMTMIs0UW07HN3F1NZCA#Value", "."))],
                _idProps: {
                    service: n,
                    uuid: "14"
                },
                _widgetRecordProvider: a
            }))), g.createElement(C, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "margin-right: 40px; text-align: center;"
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "100%",
                    marginLeft: "40px"
                },
                style: "display-flex flex-direction-column",
                visible: !0,
                _idProps: {
                    service: n,
                    name: "DefaultContent"
                },
                _widgetRecordProvider: a
            }, g.createElement(ee, {
                getOwnerSpan: l(function() {
                    return p.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: l(function() {
                    return p.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ExtendedClass: "full-width",
                    IsLoading: s.variables.isSubmittingVar
                },
                events: {
                    _handleError: l(function(v) {
                        e.handleError(v)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: t
                },
                _idProps: {
                    service: n,
                    uuid: "16",
                    alias: "1"
                },
                _widgetRecordProvider: a,
                placeholders: {
                    button: new et(function() {
                        return [g.createElement(Ce, {
                            enabled: !0,
                            extendedProperties: {
                                style: "font-weight: bold; margin-top: 0px; padding: 0px 10px 0px 10px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent",
                                marginLeft: "0"
                            },
                            isDefault: !1,
                            onClick: l(function() {
                                return Promise.resolve().then(function() {
                                    var v = typeof r != "undefined" && r !== null ? r.clone() : e.callContext().clone();
                                    return e.onAcceptTnc$Action(e.callContext(v))
                                })
                            }, "onClick"),
                            style: "btn btn-primary action-button",
                            visible: !0,
                            _idProps: {
                                service: n,
                                uuid: "17"
                            },
                            _widgetRecordProvider: a
                        }, g.createElement(C, {
                            align: 0,
                            animate: !1,
                            style: "osui-btn-loading__spinner-animation",
                            visible: !0,
                            _idProps: {
                                service: n,
                                uuid: "18"
                            },
                            _widgetRecordProvider: a
                        }), T(c("lFVG2U40r0GlImbZLmkLTA#Value", "Accept now")))]
                    })
                },
                _dependencies: []
            })))))
        }, {
            topLevelComponent: !1,
            getAttributes: l(function() {
                return {
                    codeFunction: "TermsAndConditionUpdate",
                    functionKey: "53a04206-acbd-4ee7-8fbc-12cb7dad9f65",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Common.TermsAndConditionUpdate",
            modelFactory: be,
            controllerFactory: Oe
        });
        return y.getCssDependencies = function() {
            return ["css/uae.Common.TermsAndConditionUpdate.css", "css/OutSystemsReactWidgets.css"]
        }, y.getJsDependencies = function() {
            return []
        }, y.getBlocks = function() {
            return [ee]
        }, y
    }, "componentFactory"),
    fe = tt();
var jt = O.PlaceholderContent,
    en = O.IteratorPlaceholderContent,
    nt = l(function() {
        var y = D(function(f) {
            var s = f.model,
                e = f.controller,
                n = f.controller.idService,
                t = e.validationService,
                r = e.callContext(),
                i = G,
                c = W,
                d = {
                    props: f,
                    validateWidget: l(function(v) {
                        f.validateWidget(f, v)
                    }, "validateWidget")
                },
                a = s,
                w = $,
                T = Q,
                p = N();
            return m.createElement("div", f.rootNodeProperties, m.createElement(C, {
                align: 0,
                animate: !1,
                style: "display-flex full-width full-height layout-screen",
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "0"
                },
                _widgetRecordProvider: a
            }, m.createElement(C, {
                align: 0,
                animate: !0,
                style: "left-panel full-height",
                visible: !s.variables.hidePanelIn,
                _idProps: {
                    service: n,
                    name: "Left"
                },
                _widgetRecordProvider: a,
                visible_dataFetchStatus: _.calculateDataFetchStatus(s.variables._hidePanelInDataFetchStatus)
            }, m.createElement(C, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: n,
                    name: "Sidebar2"
                },
                _widgetRecordProvider: a
            }, m.createElement(C, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: l(function() {
                        var v = typeof r != "undefined" && r !== null ? r.clone() : e.callContext().clone();
                        e.profileOnClick$Action(e.callContext(v))
                    }, "onClick")
                },
                style: "display-flex margin-bottom-m cursor-pointer align-items-center",
                visible: !0,
                _idProps: {
                    service: n,
                    name: "Profile"
                },
                _widgetRecordProvider: a
            }, m.createElement(C, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "height: 31px; margin-inline-end: 8px;"
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "38px"
                },
                style: "relative",
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "4"
                },
                _widgetRecordProvider: a
            }, m.createElement(he, {
                image: ve.VersionedURL.getVersionedUrl("img/uae.StandaloneCircleUserRegularIcon.svg"),
                type: 0,
                _idProps: {
                    service: n,
                    uuid: "5"
                },
                _widgetRecordProvider: a
            }), m.createElement(C, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: flex-start; background: #E6190E; border-radius: 96px; display flex: ; flex-direction: column; height: 8px; position: absolute; right: 0px; top: 4px;"
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "8px"
                },
                visible: !1,
                _idProps: {
                    service: n,
                    name: "notificationdot"
                },
                _widgetRecordProvider: a
            })), m.createElement(C, {
                align: 0,
                animate: !1,
                gridProperties: {
                    classes: "OSInline",
                    width: "100%"
                },
                style: "display-flex flex-col user",
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "7"
                },
                _widgetRecordProvider: a
            }, m.createElement(I, {
                style: "font-size-base font-bold word-set",
                value: s.variables.userNameVar,
                _idProps: {
                    service: n,
                    uuid: "8"
                },
                _widgetRecordProvider: a
            }))), m.createElement(V, {
                enabled: !0,
                onClick: l(function() {
                    var v = typeof r != "undefined" && r !== null ? r.clone() : e.callContext().clone();
                    e.onSelectMenu$Action("hub", e.callContext(v))
                }, "onClick"),
                style: "nav-tab",
                visible: !0,
                _idProps: {
                    service: n,
                    name: "Home"
                },
                _widgetRecordProvider: a
            }, m.createElement(C, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "height: 56px;"
                },
                style: s.getCachedValue(n.getId("HubMenu.Style"), function() {
                    return "display-flex column-gap-s align-items-center menu-item" + (s.variables.menuRefIn === "hub" ? " active-menu" : "")
                }, function() {
                    return s.variables.menuRefIn
                }),
                visible: !0,
                _idProps: {
                    service: n,
                    name: "HubMenu"
                },
                _widgetRecordProvider: a,
                style_dataFetchStatus: _.calculateDataFetchStatus(s.variables._menuRefInDataFetchStatus)
            }, m.createElement(C, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "height: 24px;"
                },
                gridProperties: {
                    classes: "OSInline"
                },
                style: "",
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "11"
                },
                _widgetRecordProvider: a
            }, m.createElement(H, {
                getOwnerSpan: l(function() {
                    return p.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: l(function() {
                    return p.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ExtendedClass: s.getCachedValue(n.getId("8p9oTaRC8kGy4hSot0qCOg.ExtendedClass"), function() {
                        return s.variables.menuRefIn === "hub" ? "active-nav" : ""
                    }, function() {
                        return s.variables.menuRefIn
                    }),
                    _extendedClassInDataFetchStatus: _.calculateDataFetchStatus(s.variables._menuRefInDataFetchStatus),
                    SVGCode: s.getCachedValue(n.getId("8p9oTaRC8kGy4hSot0qCOg.SVGCode"), function() {
                        return s.variables.menuRefIn === "hub" ? `<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>\r
<path d='M20.9688 12C20.9688 12.5625 20.5 13 19.9688 13H18.9688L19 18C19 19.125 18.125 20.0312 17 20.0312H7C5.875 20.0312 5 19.125 5 18.0312V13H4C3.4375 13 3 12.5625 3 12C3 11.7188 3.09375 11.4688 3.3125 11.25L11.3125 4.25C11.5312 4.03125 11.7812 4 12 4C12.2188 4 12.4688 4.0625 12.6562 4.21875L20.625 11.25C20.875 11.4688 21 11.7188 20.9688 12Z' fill='black'/>\r
</svg>` : `<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>\r
<path d='M11.6562 4.125C11.8438 3.96875 12.125 3.96875 12.3125 4.125L20.8125 11.625C21.0312 11.8125 21.0312 12.125 20.875 12.3438C20.6875 12.5625 20.375 12.5625 20.1562 12.375L19 11.3438V17.5C19 18.9062 17.875 20 16.5 20H7.5C6.09375 20 5 18.9062 5 17.5V11.3438L3.8125 12.375C3.625 12.5625 3.28125 12.5625 3.125 12.3438C2.9375 12.125 2.9375 11.8125 3.15625 11.625L11.6562 4.125ZM6 10.4688V17.5C6 18.3438 6.65625 19 7.5 19H16.5C17.3125 19 18 18.3438 18 17.5V10.4688L12 5.1875L6 10.4688Z' fill='black' fill-opacity='0.72'/>\r
</svg>`
                    }, function() {
                        return s.variables.menuRefIn
                    }),
                    _sVGCodeInDataFetchStatus: _.calculateDataFetchStatus(s.variables._menuRefInDataFetchStatus)
                },
                events: {
                    _handleError: l(function(v) {
                        e.handleError(v)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: t
                },
                _idProps: {
                    service: n,
                    uuid: "12",
                    alias: "1"
                },
                _widgetRecordProvider: a,
                _dependencies: []
            })), m.createElement(E, {
                style: s.getCachedValue(n.getId("Bj_S3+95oEedDNtMMbFfdA.Style"), function() {
                    return s.variables.menuRefIn === "hub" ? "active-nav" : ""
                }, function() {
                    return s.variables.menuRefIn
                }),
                text: ["Home"],
                _idProps: {
                    service: n,
                    uuid: "13"
                },
                _widgetRecordProvider: a,
                style_dataFetchStatus: _.calculateDataFetchStatus(s.variables._menuRefInDataFetchStatus)
            }))), m.createElement(V, {
                enabled: !0,
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                onClick: l(function() {
                    var v = typeof r != "undefined" && r !== null ? r.clone() : e.callContext().clone();
                    e.onSelectMenu$Action("trade", e.callContext(v))
                }, "onClick"),
                style: "nav-tab",
                visible: !0,
                _idProps: {
                    service: n,
                    name: "Trade"
                },
                _widgetRecordProvider: a
            }, m.createElement(C, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "height: 56px;"
                },
                style: s.getCachedValue(n.getId("TradeMenu.Style"), function() {
                    return "display-flex column-gap-s align-items-center menu-item" + (s.variables.menuRefIn === "trade" ? " active-menu" : "")
                }, function() {
                    return s.variables.menuRefIn
                }),
                visible: !0,
                _idProps: {
                    service: n,
                    name: "TradeMenu"
                },
                _widgetRecordProvider: a,
                style_dataFetchStatus: _.calculateDataFetchStatus(s.variables._menuRefInDataFetchStatus)
            }, m.createElement(C, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "height: 24px;"
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "24px"
                },
                style: "",
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "16"
                },
                _widgetRecordProvider: a
            }, m.createElement(H, {
                getOwnerSpan: l(function() {
                    return p.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: l(function() {
                    return p.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ExtendedClass: s.getCachedValue(n.getId("p1s3qxe_gk6REPDET1KA4Q.ExtendedClass"), function() {
                        return s.variables.menuRefIn === "trade" ? "active-nav" : ""
                    }, function() {
                        return s.variables.menuRefIn
                    }),
                    _extendedClassInDataFetchStatus: _.calculateDataFetchStatus(s.variables._menuRefInDataFetchStatus),
                    SVGCode: s.getCachedValue(n.getId("p1s3qxe_gk6REPDET1KA4Q.SVGCode"), function() {
                        return s.variables.menuRefIn === "trade" ? `<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>\r
<path d='M6 6V16.5C6 16.7812 6.21875 17 6.5 17H19C19.5312 17 20 17.4688 20 18C20 18.5625 19.5312 19 19 19H6.5C5.09375 19 4 17.9062 4 16.5V6C4 5.46875 4.4375 5 5 5C5.53125 5 6 5.46875 6 6ZM14 5.5V7C14.5312 7 15 7.46875 15 8V11C15 11.5625 14.5312 12 14 12V13.5C14 13.7812 13.75 14 13.5 14C13.2188 14 13 13.7812 13 13.5V12C12.4375 12 12 11.5625 12 11V8C12 7.46875 12.4375 7 13 7V5.5C13 5.25 13.2188 5 13.5 5C13.75 5 14 5.25 14 5.5ZM16 11C16 10.4688 16.4375 10 17 10V8.5C17 8.25 17.2188 8 17.5 8C17.75 8 18 8.25 18 8.5V10C18.5312 10 19 10.4688 19 11V13C19 13.5625 18.5312 14 18 14V15.5C18 15.7812 17.75 16 17.5 16C17.2188 16 17 15.7812 17 15.5V14C16.4375 14 16 13.5625 16 13V11ZM9 8V6.5C9 6.25 9.21875 6 9.5 6C9.75 6 10 6.25 10 6.5V8C10.5312 8 11 8.46875 11 9V13C11 13.5625 10.5312 14 10 14V15.5C10 15.7812 9.75 16 9.5 16C9.21875 16 9 15.7812 9 15.5V14C8.4375 14 8 13.5625 8 13V9C8 8.46875 8.4375 8 9 8Z' fill='black'/>\r
</svg>` : `<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>\r
<path d='M5 5.5V16.5C5 17.3438 5.65625 18 6.5 18H19.5C19.75 18 20 18.25 20 18.5C20 18.7812 19.75 19 19.5 19H6.5C5.09375 19 4 17.9062 4 16.5V5.5C4 5.25 4.21875 5 4.5 5C4.75 5 5 5.25 5 5.5ZM14 5.5V7C14 7.03125 14 7.03125 14 7.03125C14.5625 7.15625 15 7.65625 15 8.25V10.75C15 11.375 14.5625 11.875 14 12V13.5C14 13.7812 13.75 14 13.5 14C13.2188 14 13 13.7812 13 13.5V12C12.4062 11.875 12 11.375 12 10.75V8.25C12 7.65625 12.4062 7.15625 13 7.03125C13 7.03125 13 7.03125 13 7V5.5C13 5.25 13.2188 5 13.5 5C13.75 5 14 5.25 14 5.5ZM9.5 6C9.75 6 10 6.25 10 6.5V8C10 8.03125 10 8.03125 10 8.03125C10.5625 8.15625 11 8.65625 11 9.25V12.75C11 13.375 10.5625 13.875 10 14V15.5C10 15.7812 9.75 16 9.5 16C9.21875 16 9 15.7812 9 15.5V14C8.40625 13.875 8 13.375 8 12.75V9.25C8 8.65625 8.40625 8.15625 9 8.03125C9 8.03125 9 8.03125 9 8V6.5C9 6.25 9.21875 6 9.5 6ZM14 8.25C14 8.125 13.875 8 13.75 8H13.25C13.0938 8 13 8.125 13 8.25V10.75C13 10.9062 13.0938 11 13.25 11H13.75C13.875 11 14 10.9062 14 10.75V8.25ZM17.25 11C17.0938 11 17 11.125 17 11.25V12.75C17 12.9062 17.0938 13 17.25 13H17.75C17.875 13 18 12.9062 18 12.75V11.25C18 11.125 17.875 11 17.75 11H17.25ZM17 10V8.5C17 8.25 17.2188 8 17.5 8C17.75 8 18 8.25 18 8.5V10C18 10.0312 18 10.0312 18 10.0312C18.5625 10.1562 19 10.6562 19 11.25V12.75C19 13.375 18.5625 13.875 18 14V15.5C18 15.7812 17.75 16 17.5 16C17.2188 16 17 15.7812 17 15.5V14C16.4062 13.875 16 13.375 16 12.75V11.25C16 10.6562 16.4062 10.1562 17 10.0312C17 10.0312 17 10.0312 17 10ZM9.75 9H9.25C9.09375 9 9 9.125 9 9.25V12.75C9 12.9062 9.09375 13 9.25 13H9.75C9.875 13 10 12.9062 10 12.75V9.25C10 9.125 9.875 9 9.75 9Z' fill='black' fill-opacity='0.72'/>\r
</svg>`
                    }, function() {
                        return s.variables.menuRefIn
                    }),
                    _sVGCodeInDataFetchStatus: _.calculateDataFetchStatus(s.variables._menuRefInDataFetchStatus)
                },
                events: {
                    _handleError: l(function(v) {
                        e.handleError(v)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: t
                },
                _idProps: {
                    service: n,
                    uuid: "17",
                    alias: "2"
                },
                _widgetRecordProvider: a,
                _dependencies: []
            })), m.createElement(E, {
                style: s.getCachedValue(n.getId("dzcWRv4DkEaopaPybBnVpg.Style"), function() {
                    return s.variables.menuRefIn === "trade" ? "active-nav" : ""
                }, function() {
                    return s.variables.menuRefIn
                }),
                text: ["Trade"],
                _idProps: {
                    service: n,
                    uuid: "18"
                },
                _widgetRecordProvider: a,
                style_dataFetchStatus: _.calculateDataFetchStatus(s.variables._menuRefInDataFetchStatus)
            }))), m.createElement(V, {
                enabled: !0,
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                onClick: l(function() {
                    var v = typeof r != "undefined" && r !== null ? r.clone() : e.callContext().clone();
                    e.onSelectMenu$Action("wallets", e.callContext(v))
                }, "onClick"),
                style: "nav-tab",
                visible: !0,
                _idProps: {
                    service: n,
                    name: "Wallets"
                },
                _widgetRecordProvider: a
            }, m.createElement(C, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "height: 56px;"
                },
                style: s.getCachedValue(n.getId("WalletsMenu.Style"), function() {
                    return "display-flex column-gap-s align-items-center menu-item" + (s.variables.menuRefIn === "wallets" ? " active-menu" : "")
                }, function() {
                    return s.variables.menuRefIn
                }),
                visible: !0,
                _idProps: {
                    service: n,
                    name: "WalletsMenu"
                },
                _widgetRecordProvider: a,
                style_dataFetchStatus: _.calculateDataFetchStatus(s.variables._menuRefInDataFetchStatus)
            }, m.createElement(C, {
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
                    uuid: "21"
                },
                _widgetRecordProvider: a
            }, m.createElement(H, {
                getOwnerSpan: l(function() {
                    return p.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: l(function() {
                    return p.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    SVGCode: s.getCachedValue(n.getId("43iF10xR70q4lP9GsBUUcQ.SVGCode"), function() {
                        return s.variables.menuRefIn === "wallets" ? `<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>\r
<path d='M6 5H18C18.5312 5 19 5.46875 19 6C19 6.5625 18.5312 7 18 7H6.5C6.21875 7 6 7.25 6 7.5C6 7.78125 6.21875 8 6.5 8H18C19.0938 8 20 8.90625 20 10V17C20 18.125 19.0938 19 18 19H6C4.875 19 4 18.125 4 17V7C4 5.90625 4.875 5 6 5ZM17 12.5C16.4375 12.5 16 12.9688 16 13.5C16 14.0625 16.4375 14.5 17 14.5C17.5312 14.5 18 14.0625 18 13.5C18 12.9688 17.5312 12.5 17 12.5Z' fill='black'/>\r
</svg>` : `<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>\r
<path d='M6.5 5H18.5C18.75 5 19 5.25 19 5.5C19 5.78125 18.75 6 18.5 6H6.5C5.65625 6 5 6.6875 5 7.5V16.5C5 17.3438 5.65625 18 6.5 18H17.5C18.3125 18 19 17.3438 19 16.5V9.5C19 8.6875 18.3125 8 17.5 8H7.5C7.21875 8 7 7.78125 7 7.5C7 7.25 7.21875 7 7.5 7H17.5C18.875 7 20 8.125 20 9.5V16.5C20 17.9062 18.875 19 17.5 19H6.5C5.09375 19 4 17.9062 4 16.5V7.5C4 6.125 5.09375 5 6.5 5ZM16 13.75C15.5625 13.75 15.25 13.4375 15.25 13C15.25 12.5938 15.5625 12.25 16 12.25C16.4062 12.25 16.75 12.5938 16.75 13C16.75 13.4375 16.4062 13.75 16 13.75Z' fill='black' fill-opacity='0.72'/>\r
</svg>`
                    }, function() {
                        return s.variables.menuRefIn
                    }),
                    _sVGCodeInDataFetchStatus: _.calculateDataFetchStatus(s.variables._menuRefInDataFetchStatus),
                    ExtendedClass: s.getCachedValue(n.getId("43iF10xR70q4lP9GsBUUcQ.ExtendedClass"), function() {
                        return s.variables.menuRefIn === "wallets" ? "active-nav" : ""
                    }, function() {
                        return s.variables.menuRefIn
                    }),
                    _extendedClassInDataFetchStatus: _.calculateDataFetchStatus(s.variables._menuRefInDataFetchStatus)
                },
                events: {
                    _handleError: l(function(v) {
                        e.handleError(v)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: t
                },
                _idProps: {
                    service: n,
                    uuid: "22",
                    alias: "3"
                },
                _widgetRecordProvider: a,
                _dependencies: []
            })), m.createElement(E, {
                style: s.getCachedValue(n.getId("zaD8nCmCgEmFvNbJZbV5DQ.Style"), function() {
                    return s.variables.menuRefIn === "wallets" ? "active-nav" : ""
                }, function() {
                    return s.variables.menuRefIn
                }),
                text: ["Wallets"],
                _idProps: {
                    service: n,
                    uuid: "23"
                },
                _widgetRecordProvider: a,
                style_dataFetchStatus: _.calculateDataFetchStatus(s.variables._menuRefInDataFetchStatus)
            }))))), m.createElement(C, {
                align: 0,
                animate: !1,
                style: "full-width right-panel full-height",
                visible: !0,
                _idProps: {
                    service: n,
                    name: "Right"
                },
                _widgetRecordProvider: a
            }, m.createElement(_e, {
                align: 0,
                content: d.props.placeholders.content,
                style: "full-height full-width body-content",
                _idProps: {
                    service: n,
                    name: "Content"
                },
                _widgetRecordProvider: a
            })), w(h.getenableTCPopUp(), !1, this, function() {
                return [m.createElement(fe, {
                    getOwnerSpan: l(function() {
                        return p.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: l(function() {
                        return p.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: l(function(v) {
                            e.handleError(v)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: t
                    },
                    _idProps: {
                        service: n,
                        uuid: "26",
                        alias: "4"
                    },
                    _widgetRecordProvider: a,
                    _dependencies: []
                })]
            }, function() {
                return []
            })), m.createElement(C, {
                align: 0,
                animate: !0,
                visible: s.getCachedValue(n.getId("jNtHDC0+pka5vny7aohXWQ.Visible"), function() {
                    return b.getFeatureFlag$Action("MissingData", r).shouldEnableOut
                }),
                _idProps: {
                    service: n,
                    uuid: "27"
                },
                _widgetRecordProvider: a
            }, m.createElement(j, {
                getOwnerSpan: l(function() {
                    return p.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: l(function() {
                    return p.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: l(function(v) {
                        e.handleError(v)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: t
                },
                _idProps: {
                    service: n,
                    uuid: "28",
                    alias: "5"
                },
                _widgetRecordProvider: a,
                _dependencies: []
            })))
        }, {
            topLevelComponent: !1,
            getAttributes: l(function() {
                return {
                    codeFunction: "DesktopScreenLayout",
                    functionKey: "806b2b01-967f-49b2-b8c9-1fa16c99d091",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Layouts.DesktopScreenLayout",
            modelFactory: Ee,
            controllerFactory: Ve
        });
        return y.getCssDependencies = function() {
            return ["css/uae.Layouts.DesktopScreenLayout.css", "css/OutSystemsReactWidgets.css"]
        }, y.getJsDependencies = function() {
            return []
        }, y.getBlocks = function() {
            return [H, fe, j]
        }, y
    }, "componentFactory"),
    tn = nt();
export {
    fe as a, tn as b
};