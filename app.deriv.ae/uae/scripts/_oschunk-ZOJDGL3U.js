import {
    a as Z
} from "./_oschunk-J6UGFGPZ.js";
import {
    a as $
} from "./_oschunk-SFRA456L.js";
import "./_oschunk-L6JZD7VU.js";
import {
    a as B
} from "./_oschunk-SNXHD6UR.js";
import "./_oschunk-RVD4FS25.js";
import "./_oschunk-4SYOXZNK.js";
import "./_oschunk-YB2J7GTX.js";
import {
    a as A
} from "./_oschunk-HFW3V2GI.js";
import "./_oschunk-LLAHPWP3.js";
import "./_oschunk-YVFTECWM.js";
import {
    f as c,
    u as y
} from "./_oschunk-VR5BNL2K.js";
import {
    a as oe,
    g as P,
    m as I,
    n as se,
    o as le,
    q as F,
    r as N,
    s as k,
    t as V
} from "./_oschunk-4VHUVDBV.js";
import {
    a as H
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    Qb as ae,
    Sb as w,
    ka as M,
    ub as f
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as S,
    c as i,
    e as re,
    m as ne,
    n as ie
} from "./_oschunk-M5BUVJ72.js";
var ye = {
        "GuhgeRYH3Eu_oJTAE47Z_Q#Value": "\u0625\u062B\u0628\u0627\u062A \u0627\u0644\u0639\u0646\u0648\u0627\u0646",
        "LQ_YxHNFLkCXcCZR2IG7oQ#Value": "\u0625\u062B\u0628\u0627\u062A \u0627\u0644\u0647\u0648\u064A\u0629",
        "3kQ8eFoKgUuqmWkNgFlxfg#Value": "\u0627\u0644\u062A\u062D\u0642\u0642",
        "tJBEsyUmVkCQ4WI53LMo1A#Value": "\u0625\u062B\u0628\u0627\u062A \u0627\u0644\u0639\u0646\u0648\u0627\u0646",
        "VCbF8dHDfEOcDGL5oSucaQ#Value": "\u0625\u062B\u0628\u0627\u062A \u0627\u0644\u0647\u0648\u064A\u0629",
        "hZyiOPGaF0u5Z1Bt2WlLUQ#Value": "\u0627\u0644\u062A\u062D\u0642\u0642",
        "w2u5LLvl2U2WSKBnnR7oYg#Title": "\u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0647\u0648\u064A\u0629 | Deriv",
        "w2u5LLvl2U2WSKBnnR7oYg#TitleExpression.1272643895.1": "\u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0647\u0648\u064A\u0629 | Deriv"
    },
    de = {
        "ar-001": {
            translations: ye,
            isRTL: !0
        }
    };
var t = S; {
    let d = class d extends t.Controller.BaseViewController {
        constructor(e, r, n) {
            super(e, r, n, de);
            var u = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var r = this.model,
                    n = this.controller,
                    u = this.idService;
                return t.Logger.startActiveSpan("OnReady", function(o) {
                    return o && (o.setAttribute("code.function", "OnReady"), o.setAttribute("outsystems.function.key", "24d540a7-2714-474d-ba55-be79b2d60f82"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        n.ensureControllerAlive("OnReady"), e = n.callContext(e);
                        var m = new t.DataTypes.VariableHolder,
                            E = new t.DataTypes.VariableHolder,
                            a = new t.DataTypes.VariableHolder(new t.DataTypes.JSONSerializeOutputType);
                        return t.Flow.executeAsyncFlow(function() {
                            return m.value = w.getAuth$Action(e), r.variables.is_loadingVar = !0, r.flush(), w.getUserKYCStatus$Action(e).then(function(_) {
                                E.value = _
                            }).then(function() {
                                a.value.jSONOut = t.JSONUtils.serializeToJSON(E.value.responseOut, !1, !1), w.consoleLog$Action(a.value.jSONOut, e), r.variables.kYCResponseVar = E.value.responseOut, r.variables.is_loadingVar = !1
                            })
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _pOAStatusOnClick$Action() {
            return this.hasOwnProperty("__pOAStatusOnClick$Action") || (this.__pOAStatusOnClick$Action = function(e) {
                var r = this.model,
                    n = this.controller,
                    u = this.idService;
                return t.Logger.startActiveSpan("POAStatusOnClick", function(o) {
                    o && (o.setAttribute("code.function", "POAStatusOnClick"), o.setAttribute("outsystems.function.key", "2faac5ee-4ec9-4b0d-a323-da643a6ac6a8"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        if (n.ensureControllerAlive("POAStatusOnClick"), e = n.callContext(e), !(r.variables.is_loadingVar === !0 || r.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.statusAttr === "verified")) return r.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.statusAttr === "rejected" ? t.Navigation.navigateTo(t.Navigation.generateScreenURL("uae", "verification-paused", {
                            type: t.DataConversion.ServerDataConverter.to("poa", t.DataTypes.DataTypes.Text),
                            blocked_by: t.DataConversion.ServerDataConverter.to("poa", t.DataTypes.DataTypes.Text)
                        }), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), e, !0) : r.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.statusAttr === "rejected" || f.getenableUSkycFlow() && r.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.statusAttr === "region_blocked" ? t.Navigation.navigateTo(t.Navigation.generateScreenURL("uae", "verification-paused", {
                            type: t.DataConversion.ServerDataConverter.to("poa", t.DataTypes.DataTypes.Text),
                            blocked_by: t.DataConversion.ServerDataConverter.to("poi", t.DataTypes.DataTypes.Text)
                        }), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), e, !0) : f.getenableUSkycFlow() && r.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.statusAttr === "region_blocked" ? t.Navigation.navigateTo(t.Navigation.generateScreenURL("uae", "kyc-status", {
                            type: t.DataConversion.ServerDataConverter.to("poa", t.DataTypes.DataTypes.Text)
                        }), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), e, !0) : r.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.statusAttr === "rejected" || r.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.statusAttr === "pending" || r.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.statusAttr === "pending_provider" || r.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.statusAttr === "failed" || r.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.statusAttr === "verified" ? t.Navigation.navigateTo(t.Navigation.generateScreenURL("uae", "kyc-status", {
                            type: t.DataConversion.ServerDataConverter.to("poa", t.DataTypes.DataTypes.Text)
                        }), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), e, !0) : r.variables.kYCResponseVar.dataAttr.detailsAttr.hasMoreAttemptsAttr === !0 && f.getupdateKYCFlow() || r.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.has_remaining_attemptsAttr === !0 ? ((f.getkyc_flow_from() === "banner" || f.getkyc_flow_from() === "banner_poi" || f.getkyc_flow_from() === "banner_poa") && f.setkyc_flow_from("banner_poa"), t.Navigation.navigateTo(t.Navigation.generateScreenURL("uae", "verify-poa", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), e, !0)) : t.Navigation.navigateTo(t.Navigation.generateScreenURL("uae", "verification-limit-reached", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__pOAStatusOnClick$Action
        }
        set _pOAStatusOnClick$Action(e) {
            this.__pOAStatusOnClick$Action = e
        }
        get _pOIStatusOnClick$Action() {
            return this.hasOwnProperty("__pOIStatusOnClick$Action") || (this.__pOIStatusOnClick$Action = function(e) {
                var r = this.model,
                    n = this.controller,
                    u = this.idService;
                return t.Logger.startActiveSpan("POIStatusOnClick", function(o) {
                    o && (o.setAttribute("code.function", "POIStatusOnClick"), o.setAttribute("outsystems.function.key", "da86574b-25a1-4316-a383-ce96aa2eb197"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        if (n.ensureControllerAlive("POIStatusOnClick"), e = n.callContext(e), !(r.variables.is_loadingVar === !0 || r.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.statusAttr === "verified")) return f.getenableUAEPass() && r.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.statusAttr === "unverified" ? t.Navigation.navigateTo(t.Navigation.generateScreenURL("uae", "choose-verification-method", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), e, !0) : r.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.statusAttr === "rejected" || f.getenableUSkycFlow() && r.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.statusAttr === "region_blocked" ? t.Navigation.navigateTo(t.Navigation.generateScreenURL("uae", "verification-paused", {
                            type: t.DataConversion.ServerDataConverter.to("poi", t.DataTypes.DataTypes.Text),
                            blocked_by: t.DataConversion.ServerDataConverter.to("poa", t.DataTypes.DataTypes.Text)
                        }), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), e, !0) : r.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.statusAttr === "rejected" ? t.Navigation.navigateTo(t.Navigation.generateScreenURL("uae", "verification-paused", {
                            blocked_by: t.DataConversion.ServerDataConverter.to("poi", t.DataTypes.DataTypes.Text),
                            type: t.DataConversion.ServerDataConverter.to("poi", t.DataTypes.DataTypes.Text)
                        }), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), e, !0) : f.getenableUSkycFlow() && r.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.statusAttr === "region_blocked" ? t.Navigation.navigateTo(t.Navigation.generateScreenURL("uae", "kyc-status", {
                            type: t.DataConversion.ServerDataConverter.to("poi", t.DataTypes.DataTypes.Text)
                        }), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), e, !0) : r.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.statusAttr === "rejected" || r.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.statusAttr === "pending" || r.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.statusAttr === "pending_provider" || r.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.statusAttr === "failed" ? t.Navigation.navigateTo(t.Navigation.generateScreenURL("uae", "kyc-status", {
                            type: t.DataConversion.ServerDataConverter.to("poi", t.DataTypes.DataTypes.Text)
                        }), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), e, !0) : r.variables.kYCResponseVar.dataAttr.detailsAttr.hasMoreAttemptsAttr === !0 && f.getupdateKYCFlow() || r.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.has_remaining_attemptsAttr === !0 ? ((f.getkyc_flow_from() === "banner" || f.getkyc_flow_from() === "banner_poi" || f.getkyc_flow_from() === "banner_poa") && f.setkyc_flow_from("banner_poi"), t.Navigation.navigateTo(t.Navigation.generateScreenURL("uae", "verify-poi", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), e, !0)) : t.Navigation.navigateTo(t.Navigation.generateScreenURL("uae", "verification-limit-reached", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__pOIStatusOnClick$Action
        }
        set _pOIStatusOnClick$Action(e) {
            this.__pOIStatusOnClick$Action = e
        }
        get _handleOnClose$Action() {
            return this.hasOwnProperty("__handleOnClose$Action") || (this.__handleOnClose$Action = function(e) {
                var r = this.model,
                    n = this.controller,
                    u = this.idService;
                return t.Logger.startActiveSpan("HandleOnClose", function(o) {
                    o && (o.setAttribute("code.function", "HandleOnClose"), o.setAttribute("outsystems.function.key", "e5a37177-48a3-4bd3-9b46-3ab4e99ee333"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return n.ensureControllerAlive("HandleOnClose"), e = n.callContext(e), f.getkyc_flow_from() === "banner" || f.getkyc_flow_from() === "banner_poi" || f.getkyc_flow_from() === "banner_poa" ? t.Navigation.navigateTo(t.Navigation.generateScreenURL("uae", "home", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), e, !0) : f.getkyc_flow_from() === "wallet" ? t.Navigation.navigateTo(t.Navigation.generateScreenURL("uae", "wallet", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), e, !0) : f.getkyc_flow_from() === "trade" ? t.Navigation.navigateTo(t.Navigation.generateScreenURL("uae", "mt5/activation", {
                            is_demo: t.DataConversion.ServerDataConverter.to(!1, t.DataTypes.DataTypes.Boolean)
                        }), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), e, !0) : f.getkyc_flow_from() === "profile" ? t.Navigation.navigateTo(t.Navigation.generateScreenURL("uae", "user-profile", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), e, !0) : t.Navigation.navigateTo(t.Navigation.generateScreenURL("uae", "home", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__handleOnClose$Action
        }
        set _handleOnClose$Action(e) {
            this.__handleOnClose$Action = e
        }
        onReady$Action(e) {
            var r = this.controller;
            return t.Logger.startActiveSpan("OnReady__proxy", function(n) {
                return n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "24d540a7-2714-474d-ba55-be79b2d60f82"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                }, function() {
                    n && n.end()
                })
            }, 0)
        }
        pOAStatusOnClick$Action(e) {
            var r = this.controller;
            return t.Logger.startActiveSpan("POAStatusOnClick__proxy", function(n) {
                n && (n.setAttribute("code.function", "POAStatusOnClick"), n.setAttribute("outsystems.function.key", "2faac5ee-4ec9-4b0d-a323-da643a6ac6a8"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._pOAStatusOnClick$Action, e)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        pOIStatusOnClick$Action(e) {
            var r = this.controller;
            return t.Logger.startActiveSpan("POIStatusOnClick__proxy", function(n) {
                n && (n.setAttribute("code.function", "POIStatusOnClick"), n.setAttribute("outsystems.function.key", "da86574b-25a1-4316-a383-ce96aa2eb197"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._pOIStatusOnClick$Action, e)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        handleOnClose$Action(e) {
            var r = this.controller;
            return t.Logger.startActiveSpan("HandleOnClose__proxy", function(n) {
                n && (n.setAttribute("code.function", "HandleOnClose"), n.setAttribute("outsystems.function.key", "e5a37177-48a3-4bd3-9b46-3ab4e99ee333"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._handleOnClose$Action, e)
                } finally {
                    n && n.end()
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
                var r = this.controller,
                    n = this.model,
                    u = this.idService;
                return r.onReady$Action(e)
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
                return Z.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return w.defaultTimeout
        }
    };
    i(d, "ControllerInner");
    let p = d;
    ce = p
}
var ce, K = new t.Controller.ControllerFactory(ce, H);
var s = re(oe());
var O = S,
    j = class j extends O.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("kyc_status", "kyc_statusIn", "kyc_status", !0, !1, O.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_kyc_statusInDataFetchStatus", "_kyc_statusInDataFetchStatus", "_kyc_statusInDataFetchStatus", !0, !1, O.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(O.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
i(j, "VariablesRecord");
var L = j;
L.init();
var Q = class Q extends O.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
i(Q, "WidgetsRecord");
var G = Q,
    R = class R extends O.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return L
        }
        static getWidgetsRecordConstructor() {
            return G
        }
        static get hasValidationWidgets() {
            return R._hasValidationWidgetsValue === void 0 && (R._hasValidationWidgetsValue = void 0), R._hasValidationWidgetsValue
        }
        setInputs(d) {
            "kyc_status" in d && (this.variables.kyc_statusIn = d.kyc_status, "_kyc_statusInDataFetchStatus" in d && (this.variables._kyc_statusInDataFetchStatus = d._kyc_statusInDataFetchStatus))
        }
    };
i(R, "Model");
var W = R;
W._hasValidationWidgetsValue = void 0;
var ue = new O.Model.ModelFactory(W);
var b = S,
    X = class X extends b.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("KYCResponse", "kYCResponseVar", "KYCResponse", !0, !1, b.DataTypes.DataTypes.Record, function() {
                return b.DataTypes.ImmutableBase.getData(new M)
            }, !1, M), this.attr("is_loading", "is_loadingVar", "is_loading", !0, !1, b.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1)].concat(b.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
i(X, "VariablesRecord");
var U = X;
U.init();
var ee = class ee extends b.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
i(ee, "WidgetsRecord");
var J = ee,
    x = class x extends b.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return U
        }
        static getWidgetsRecordConstructor() {
            return J
        }
        static get hasValidationWidgets() {
            return x._hasValidationWidgetsValue === void 0 && (x._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0), x._hasValidationWidgetsValue
        }
        setInputs(d) {}
    };
i(x, "Model");
var Y = x;
Y._hasValidationWidgetsValue = void 0;
var q = new b.Model.ModelFactory(Y);
var h = re(oe());
var Ce = {
        "UC_IVU4sZk2INxLCykkjCg#Value": "\u0641\u0634\u0644",
        "tW5ZyO_qsEKE1ls+IXlUIQ#Value": "\u0641\u0634\u0644",
        "DpkkN3YNF0yZww7BW+YSeA#Value": "\u0641\u0634\u0644",
        "lLAGRMtToU6I_K+p7_IbYA#Value": "\u063A\u064A\u0631 \u0645\u064F\u062B\u0628\u062A",
        "a0Dvr5EItUiHEe1hN6wLeA#Value": "\u0642\u064A\u062F \u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629"
    },
    ge = {
        "ar-001": {
            translations: Ce,
            isRTL: !0
        }
    };
var pe = S; {
    let d = class d extends pe.Controller.BaseViewController {
        constructor(e, r, n) {
            super(e, r, n, ge);
            var u = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
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
            return w.defaultTimeout
        }
    };
    i(d, "ControllerInner");
    let p = d;
    me = p
}
var me, _e = new pe.Controller.ControllerFactory(me, H);
var ot = P.PlaceholderContent,
    st = P.IteratorPlaceholderContent,
    be = i(function() {
        var p = le(function(d) {
            var v = d.model,
                e = d.controller,
                r = d.controller.idService,
                n = e.validationService,
                u = e.callContext(),
                o = k,
                m = V,
                E = {
                    props: d,
                    validateWidget: i(function(l) {
                        d.validateWidget(d, l)
                    }, "validateWidget")
                },
                a = v,
                _ = N,
                C = F,
                g = I();
            return h.createElement("div", d.rootNodeProperties, _(v.variables.kyc_statusIn === "pending" || v.variables.kyc_statusIn === "pending_provider", !1, this, function() {
                return [h.createElement(c, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-items: center; background: var(--color-solid-yellow-100, #FFF7E6); border-radius: 4px; display: flex; gap: 8px; height: 24px; justify-content: center; padding: 0px 8px;"
                    },
                    gridProperties: {
                        classes: "OSInline",
                        width: "fit-content"
                    },
                    visible: !0,
                    _idProps: {
                        service: r,
                        name: "InReviewcontainer"
                    },
                    _widgetRecordProvider: a
                }, h.createElement(y, {
                    extendedProperties: {
                        style: "---comment-5: /* 150% */; color: var(--color-solid-yellow-700, #FF9C13); font-size: 12px; font-style: normal; font-weight: 500; line-height: 18px;"
                    },
                    text: [C(m("a0Dvr5EItUiHEe1hN6wLeA#Value", "In Review"))],
                    _idProps: {
                        service: r,
                        uuid: "1"
                    },
                    _widgetRecordProvider: a
                }))]
            }, function() {
                return [_(v.variables.kyc_statusIn === "unverified", !1, this, function() {
                    return [h.createElement(c, {
                        align: 0,
                        animate: !1,
                        extendedProperties: {
                            style: "align-items: center; border: 1px solid var(--color-blue-low-100, #EFF3F5); border-radius: 4px; display: flex; gap: 8px; height: 24px; justify-content: center; padding: 0px 8px;"
                        },
                        gridProperties: {
                            classes: "OSInline",
                            width: "fit-content"
                        },
                        visible: !0,
                        _idProps: {
                            service: r,
                            name: "NotVerifiedBadge"
                        },
                        _widgetRecordProvider: a
                    }, h.createElement(y, {
                        extendedProperties: {
                            style: "---comment-5: /* 150% */; color: var(--text-default, rgba(0, 0, 0, 0.72)); font-size: 12px; font-style: normal; font-weight: 500; line-height: 18px;"
                        },
                        text: [C(m("lLAGRMtToU6I_K+p7_IbYA#Value", "Not Verified"))],
                        _idProps: {
                            service: r,
                            uuid: "3"
                        },
                        _widgetRecordProvider: a
                    }))]
                }, function() {
                    return [_(v.variables.kyc_statusIn === "failed", !1, this, function() {
                        return [h.createElement(c, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "align-items: center; background: var(--color-solid-red-100, #FFE6E6); border-radius: 4px; display: flex; gap: 8px; height: 24px; justify-content: center; padding: 0px 8px;"
                            },
                            gridProperties: {
                                classes: "OSInline",
                                width: "fit-content"
                            },
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "FailedBadge"
                            },
                            _widgetRecordProvider: a
                        }, h.createElement(y, {
                            extendedProperties: {
                                style: "---comment-5: /* 150% */; color: var(--color-solid-red-900, #C40000); font-size: 12px; font-style: normal; font-weight: 500; line-height: 18px;"
                            },
                            text: [C(m("DpkkN3YNF0yZww7BW+YSeA#Value", "Failed"))],
                            _idProps: {
                                service: r,
                                uuid: "5"
                            },
                            _widgetRecordProvider: a
                        }))]
                    }, function() {
                        return [_(v.variables.kyc_statusIn === "verified", !1, this, function() {
                            return [h.createElement(A, {
                                getOwnerSpan: i(function() {
                                    return g.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: i(function() {
                                    return g.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    SVGCode: `<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>\r
<path d='M12 4C13.125 4 14.125 4.65625 14.625 5.625C15.6562 5.28125 16.8438 5.53125 17.6562 6.34375C18.4688 7.15625 18.7188 8.34375 18.375 9.375C19.3438 9.875 20 10.875 20 12C20 13.1562 19.3438 14.1562 18.375 14.6562C18.7188 15.6875 18.4688 16.8438 17.6562 17.6562C16.8438 18.4688 15.6562 18.7188 14.625 18.4062C14.125 19.375 13.125 20 12 20C10.8438 20 9.84375 19.375 9.34375 18.4062C8.3125 18.7188 7.15625 18.4688 6.34375 17.6562C5.53125 16.8438 5.28125 15.6875 5.59375 14.6562C4.625 14.1562 4 13.1562 4 12C4 10.875 4.625 9.875 5.59375 9.375C5.28125 8.34375 5.53125 7.15625 6.34375 6.34375C7.15625 5.53125 8.3125 5.28125 9.34375 5.625C9.84375 4.65625 10.8438 4 12 4ZM15.5312 10.5312C15.8125 10.25 15.8125 9.78125 15.5312 9.5C15.2188 9.1875 14.75 9.1875 14.4688 9.5L11 12.9688L9.53125 11.5C9.21875 11.1875 8.75 11.1875 8.46875 11.5C8.15625 11.7812 8.15625 12.25 8.46875 12.5312L10.4688 14.5312C10.75 14.8438 11.2188 14.8438 11.5312 14.5312L15.5312 10.5312Z' fill='#2095ED'/>\r
</svg>`
                                },
                                events: {
                                    _handleError: i(function(l) {
                                        e.handleError(l)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: n
                                },
                                _idProps: {
                                    service: r,
                                    uuid: "6",
                                    alias: "1"
                                },
                                _widgetRecordProvider: a,
                                _dependencies: []
                            })]
                        }, function() {
                            return [_(v.variables.kyc_statusIn === "rejected" || v.variables.kyc_statusIn === "region_blocked", !1, this, function() {
                                return [_(f.getenableMobileOnboarding(), !1, this, function() {
                                    return [h.createElement(c, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "align-items: center; background: var(--color-solid-red-100, #FFE6E6); border-radius: 4px; display: flex; gap: 8px; height: 24px; justify-content: center; padding: 0px 8px;"
                                        },
                                        gridProperties: {
                                            classes: "OSInline",
                                            width: "fit-content"
                                        },
                                        visible: !0,
                                        _idProps: {
                                            service: r,
                                            name: "FailedBadge2"
                                        },
                                        _widgetRecordProvider: a
                                    }, h.createElement(y, {
                                        extendedProperties: {
                                            style: "---comment-5: /* 150% */; color: var(--color-solid-red-900, #C40000); font-size: 12px; font-style: normal; font-weight: 500; line-height: 18px;"
                                        },
                                        text: [C(m("tW5ZyO_qsEKE1ls+IXlUIQ#Value", "Failed"))],
                                        _idProps: {
                                            service: r,
                                            uuid: "8"
                                        },
                                        _widgetRecordProvider: a
                                    }))]
                                }, function() {
                                    return [h.createElement(c, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "align-items: center; background: var(--color-solid-red-100, #FFE6E6); border-radius: 4px; display: flex; gap: 8px; height: 24px; justify-content: center; padding: 0px 8px;"
                                        },
                                        gridProperties: {
                                            classes: "OSInline",
                                            width: "fit-content"
                                        },
                                        visible: !0,
                                        _idProps: {
                                            service: r,
                                            name: "RejectedBadge"
                                        },
                                        _widgetRecordProvider: a
                                    }, h.createElement(y, {
                                        extendedProperties: {
                                            style: "---comment-5: /* 150% */; color: var(--color-solid-red-900, #C40000); font-size: 12px; font-style: normal; font-weight: 500; line-height: 18px;"
                                        },
                                        text: [C(m("UC_IVU4sZk2INxLCykkjCg#Value", "Rejected"))],
                                        _idProps: {
                                            service: r,
                                            uuid: "10"
                                        },
                                        _widgetRecordProvider: a
                                    }))]
                                })]
                            }, function() {
                                return []
                            })]
                        })]
                    })]
                })]
            }))
        }, {
            topLevelComponent: !1,
            getAttributes: i(function() {
                return {
                    codeFunction: "KYCStatusBadge",
                    functionKey: "69d8dd10-74f6-41a8-8542-2cffd9c30348",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "KYCFlow.KYCStatusBadge",
            modelFactory: ue,
            controllerFactory: _e
        });
        return p.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"]
        }, p.getJsDependencies = function() {
            return []
        }, p.getBlocks = function() {
            return [A]
        }, p
    }, "componentFactory"),
    T = be();
var te = P.PlaceholderContent,
    At = P.IteratorPlaceholderContent,
    we = i(function() {
        var p = se(function(d) {
            var v = d.model,
                e = d.controller,
                r = d.controller.idService,
                n = e.validationService,
                u = e.callContext(),
                o = k,
                m = V,
                E = {
                    props: d,
                    validateWidget: i(function(l) {
                        d.validateWidget(d, l)
                    }, "validateWidget")
                },
                a = v,
                _ = N,
                C = F,
                g = I();
            return s.createElement("div", d.rootNodeProperties, _(ae.isDesktop$Action(u).isDesktopOut, !1, this, function() {
                return [s.createElement(B, {
                    getOwnerSpan: i(function() {
                        return g.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: i(function() {
                        return g.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        ShowClosebutton: !0
                    },
                    events: {
                        _handleError: i(function(l) {
                            e.handleError(l)
                        }, "_handleError"),
                        closeBtnEvent$Action: i(function() {
                            var l = typeof u != "undefined" && u !== null ? u.clone() : e.callContext().clone();
                            e.handleOnClose$Action(e.callContext(l))
                        }, "closeBtnEvent$Action")
                    },
                    _validationProps: {
                        validationService: n
                    },
                    _idProps: {
                        service: r,
                        uuid: "0",
                        alias: "1"
                    },
                    _widgetRecordProvider: a,
                    placeholders: {
                        contentbody: new te(function() {
                            return [s.createElement(c, {
                                align: 0,
                                animate: !1,
                                style: "flex flex-col gap-y-7",
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    uuid: "1"
                                },
                                _widgetRecordProvider: a
                            }, s.createElement(c, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    uuid: "2"
                                },
                                _widgetRecordProvider: a
                            }, s.createElement(y, {
                                extendedProperties: {
                                    style: "font-size: 24px; font-weight: 900;"
                                },
                                text: [C(m("hZyiOPGaF0u5Z1Bt2WlLUQ#Value", "Verification"))],
                                _idProps: {
                                    service: r,
                                    uuid: "3"
                                },
                                _widgetRecordProvider: a
                            })), s.createElement(c, {
                                align: 0,
                                animate: !1,
                                style: "flex flex-col gap-y-2",
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    uuid: "4"
                                },
                                _widgetRecordProvider: a
                            }, s.createElement(c, {
                                align: 0,
                                animate: !1,
                                extendedEvents: {
                                    onClick: i(function() {
                                        var l = typeof u != "undefined" && u !== null ? u.clone() : e.callContext().clone();
                                        e.pOIStatusOnClick$Action(e.callContext(l))
                                    }, "onClick")
                                },
                                extendedProperties: {
                                    style: "align-items: center; align-self: stretch; display: flex; gap: 16px; height: 64px;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    name: "POIStatus2"
                                },
                                _widgetRecordProvider: a
                            }, s.createElement(A, {
                                getOwnerSpan: i(function() {
                                    return g.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: i(function() {
                                    return g.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    SVGCode: `<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>\r
<path d='M15 8C15 6.9375 14.4062 5.96875 13.5 5.40625C12.5625 4.875 11.4062 4.875 10.5 5.40625C9.5625 5.96875 9 6.9375 9 8C9 9.09375 9.5625 10.0625 10.5 10.625C11.4062 11.1562 12.5625 11.1562 13.5 10.625C14.4062 10.0625 15 9.09375 15 8ZM8 8C8 6.59375 8.75 5.28125 10 4.5625C11.2188 3.84375 12.75 3.84375 14 4.5625C15.2188 5.28125 16 6.59375 16 8C16 9.4375 15.2188 10.75 14 11.4688C12.75 12.1875 11.2188 12.1875 10 11.4688C8.75 10.75 8 9.4375 8 8ZM6 19H18C17.9375 16.5312 15.9062 14.5 13.4062 14.5H10.5625C8.0625 14.5 6.03125 16.5312 6 19ZM5 19.0938C5 16 7.46875 13.5 10.5625 13.5H13.4062C16.5 13.5 19 16 19 19.0938C19 19.5938 18.5625 20 18.0625 20H5.90625C5.40625 20 5 19.5938 5 19.0938Z' fill='black' fill-opacity='0.72'/>\r
</svg>`
                                },
                                events: {
                                    _handleError: i(function(l) {
                                        e.handleError(l)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: n
                                },
                                _idProps: {
                                    service: r,
                                    uuid: "6",
                                    alias: "2"
                                },
                                _widgetRecordProvider: a,
                                _dependencies: []
                            }), s.createElement(c, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "border-bottom: 1px solid var(--color-blue-low-100, #EFF3F5); height: 100%;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                style: "flex justify-content-space-between align-items-center",
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    uuid: "7"
                                },
                                _widgetRecordProvider: a
                            }, s.createElement(c, {
                                align: 0,
                                animate: !1,
                                style: "flex flex-col",
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    uuid: "8"
                                },
                                _widgetRecordProvider: a
                            }, s.createElement(y, {
                                extendedProperties: {
                                    style: "---comment-5: /* 150% */; color: var(--text-default, rgba(0, 0, 0, 0.72)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                                },
                                text: [C(m("VCbF8dHDfEOcDGL5oSucaQ#Value", "Proof of identity"))],
                                _idProps: {
                                    service: r,
                                    name: "Label3"
                                },
                                _widgetRecordProvider: a
                            })), s.createElement(c, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    name: "NotifyOneOfNotVerified4"
                                },
                                _widgetRecordProvider: a
                            }, _(v.variables.is_loadingVar, !1, this, function() {
                                return [s.createElement(c, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "background: var(--bg-secondary, #EFF3F5); height: 14px;"
                                    },
                                    gridProperties: {
                                        classes: "OSInline",
                                        width: "70px"
                                    },
                                    style: "animate-pulse rounded-lg",
                                    visible: !0,
                                    _idProps: {
                                        service: r,
                                        name: "ProfileNameLoader4"
                                    },
                                    _widgetRecordProvider: a
                                })]
                            }, function() {
                                return [s.createElement(T, {
                                    getOwnerSpan: i(function() {
                                        return g.getChildSpan("render")
                                    }, "getOwnerSpan"),
                                    getOwnerDisposeSpan: i(function() {
                                        return g.getChildSpan("destroy")
                                    }, "getOwnerDisposeSpan"),
                                    inputs: {
                                        kyc_status: v.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.statusAttr
                                    },
                                    events: {
                                        _handleError: i(function(l) {
                                            e.handleError(l)
                                        }, "_handleError")
                                    },
                                    _validationProps: {
                                        validationService: n
                                    },
                                    _idProps: {
                                        service: r,
                                        uuid: "12",
                                        alias: "3"
                                    },
                                    _widgetRecordProvider: a,
                                    _dependencies: []
                                })]
                            })))), s.createElement(c, {
                                align: 0,
                                animate: !1,
                                extendedEvents: {
                                    onClick: i(function() {
                                        var l = typeof u != "undefined" && u !== null ? u.clone() : e.callContext().clone();
                                        e.pOAStatusOnClick$Action(e.callContext(l))
                                    }, "onClick")
                                },
                                extendedProperties: {
                                    style: "align-items: center; align-self: stretch; display: flex; gap: 16px; height: 64px;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    name: "POAStatus2"
                                },
                                _widgetRecordProvider: a
                            }, s.createElement(A, {
                                getOwnerSpan: i(function() {
                                    return g.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: i(function() {
                                    return g.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    SVGCode: `<svg width='20' height='17' viewBox='0 0 20 17' fill='none' xmlns='http://www.w3.org/2000/svg'>\r
<path d='M9.65625 1.125C9.84375 0.96875 10.125 0.96875 10.3125 1.125L18.8125 8.625C19.0312 8.8125 19.0312 9.125 18.875 9.34375C18.6875 9.5625 18.375 9.5625 18.1562 9.375L17 8.34375V14.5C17 15.9062 15.875 17 14.5 17H5.5C4.09375 17 3 15.9062 3 14.5V8.34375L1.8125 9.375C1.625 9.5625 1.28125 9.5625 1.125 9.34375C0.9375 9.125 0.9375 8.8125 1.15625 8.625L9.65625 1.125ZM4 7.46875V14.5C4 15.3438 4.65625 16 5.5 16H14.5C15.3125 16 16 15.3438 16 14.5V7.46875L10 2.1875L4 7.46875ZM10 9C10.5312 9 11 8.5625 11 8C11 7.46875 10.5312 7 10 7C9.4375 7 9 7.46875 9 8C9 8.5625 9.4375 9 10 9ZM10 6C10.6875 6 11.3438 6.40625 11.7188 7C12.0625 7.625 12.0625 8.40625 11.7188 9C11.3438 9.625 10.6875 10 10 10C9.28125 10 8.625 9.625 8.25 9C7.90625 8.40625 7.90625 7.625 8.25 7C8.625 6.40625 9.28125 6 10 6ZM7.5 13.25V13.5C7.5 13.7812 7.25 14 7 14C6.71875 14 6.5 13.7812 6.5 13.5V13.25C6.5 12.0312 7.5 11 8.75 11H11.25C12.4688 11 13.5 12.0312 13.5 13.25V13.5C13.5 13.7812 13.25 14 13 14C12.7188 14 12.5 13.7812 12.5 13.5V13.25C12.5 12.5625 11.9375 12 11.25 12H8.75C8.03125 12 7.5 12.5625 7.5 13.25Z' fill='black' fill-opacity='0.72'/>\r
</svg>`
                                },
                                events: {
                                    _handleError: i(function(l) {
                                        e.handleError(l)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: n
                                },
                                _idProps: {
                                    service: r,
                                    uuid: "14",
                                    alias: "4"
                                },
                                _widgetRecordProvider: a,
                                _dependencies: []
                            }), s.createElement(c, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "border-bottom: 1px solid var(--color-blue-low-100, #EFF3F5); height: 100%;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                style: "flex flex justify-content-space-between align-items-center",
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    uuid: "15"
                                },
                                _widgetRecordProvider: a
                            }, s.createElement(c, {
                                align: 0,
                                animate: !1,
                                style: "flex flex-col",
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    uuid: "16"
                                },
                                _widgetRecordProvider: a
                            }, s.createElement(y, {
                                extendedProperties: {
                                    style: "---comment-5: /* 150% */; color: var(--text-default, rgba(0, 0, 0, 0.72)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                                },
                                text: [C(m("tJBEsyUmVkCQ4WI53LMo1A#Value", "Proof of address"))],
                                _idProps: {
                                    service: r,
                                    name: "Label4"
                                },
                                _widgetRecordProvider: a
                            })), s.createElement(c, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    name: "NotifyOneOfNotVerified5"
                                },
                                _widgetRecordProvider: a
                            }, _(v.variables.is_loadingVar, !1, this, function() {
                                return [s.createElement(c, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "background: var(--bg-secondary, #EFF3F5); height: 14px;"
                                    },
                                    gridProperties: {
                                        classes: "OSInline",
                                        width: "70px"
                                    },
                                    style: "animate-pulse rounded-lg",
                                    visible: !0,
                                    _idProps: {
                                        service: r,
                                        name: "ProfileNameLoader5"
                                    },
                                    _widgetRecordProvider: a
                                })]
                            }, function() {
                                return [s.createElement(T, {
                                    getOwnerSpan: i(function() {
                                        return g.getChildSpan("render")
                                    }, "getOwnerSpan"),
                                    getOwnerDisposeSpan: i(function() {
                                        return g.getChildSpan("destroy")
                                    }, "getOwnerDisposeSpan"),
                                    inputs: {
                                        kyc_status: v.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.statusAttr
                                    },
                                    events: {
                                        _handleError: i(function(l) {
                                            e.handleError(l)
                                        }, "_handleError")
                                    },
                                    _validationProps: {
                                        validationService: n
                                    },
                                    _idProps: {
                                        service: r,
                                        uuid: "20",
                                        alias: "5"
                                    },
                                    _widgetRecordProvider: a,
                                    _dependencies: []
                                })]
                            }))))))]
                        })
                    },
                    _dependencies: [o(v.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.statusAttr), o(v.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.statusAttr), o(v.variables.is_loadingVar)]
                })]
            }, function() {
                return [s.createElement($, {
                    getOwnerSpan: i(function() {
                        return g.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: i(function() {
                        return g.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        has_close_icon: !0
                    },
                    events: {
                        _handleError: i(function(l) {
                            e.handleError(l)
                        }, "_handleError"),
                        closeEvent$Action: i(function() {
                            var l = typeof u != "undefined" && u !== null ? u.clone() : e.callContext().clone();
                            e.handleOnClose$Action(e.callContext(l))
                        }, "closeEvent$Action")
                    },
                    _validationProps: {
                        validationService: n
                    },
                    _idProps: {
                        service: r,
                        uuid: "21",
                        alias: "6"
                    },
                    _widgetRecordProvider: a,
                    placeholders: {
                        content: new te(function() {
                            return [s.createElement(c, {
                                align: 0,
                                animate: !1,
                                style: "flex flex-col gap-y-7",
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    uuid: "22"
                                },
                                _widgetRecordProvider: a
                            }, s.createElement(c, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    uuid: "23"
                                },
                                _widgetRecordProvider: a
                            }, s.createElement(y, {
                                extendedProperties: {
                                    style: "font-size: 24px; font-weight: 900;"
                                },
                                text: [C(m("3kQ8eFoKgUuqmWkNgFlxfg#Value", "Verification"))],
                                _idProps: {
                                    service: r,
                                    uuid: "24"
                                },
                                _widgetRecordProvider: a
                            })), s.createElement(c, {
                                align: 0,
                                animate: !1,
                                style: "flex flex-col gap-y-2",
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    uuid: "25"
                                },
                                _widgetRecordProvider: a
                            }, s.createElement(c, {
                                align: 0,
                                animate: !1,
                                extendedEvents: {
                                    onClick: i(function() {
                                        var l = typeof u != "undefined" && u !== null ? u.clone() : e.callContext().clone();
                                        e.pOIStatusOnClick$Action(e.callContext(l))
                                    }, "onClick")
                                },
                                extendedProperties: {
                                    style: "align-items: center; align-self: stretch; display: flex; gap: 16px; height: 64px;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    name: "POIStatus3"
                                },
                                _widgetRecordProvider: a
                            }, s.createElement(A, {
                                getOwnerSpan: i(function() {
                                    return g.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: i(function() {
                                    return g.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    SVGCode: `<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>\r
<path d='M15 8C15 6.9375 14.4062 5.96875 13.5 5.40625C12.5625 4.875 11.4062 4.875 10.5 5.40625C9.5625 5.96875 9 6.9375 9 8C9 9.09375 9.5625 10.0625 10.5 10.625C11.4062 11.1562 12.5625 11.1562 13.5 10.625C14.4062 10.0625 15 9.09375 15 8ZM8 8C8 6.59375 8.75 5.28125 10 4.5625C11.2188 3.84375 12.75 3.84375 14 4.5625C15.2188 5.28125 16 6.59375 16 8C16 9.4375 15.2188 10.75 14 11.4688C12.75 12.1875 11.2188 12.1875 10 11.4688C8.75 10.75 8 9.4375 8 8ZM6 19H18C17.9375 16.5312 15.9062 14.5 13.4062 14.5H10.5625C8.0625 14.5 6.03125 16.5312 6 19ZM5 19.0938C5 16 7.46875 13.5 10.5625 13.5H13.4062C16.5 13.5 19 16 19 19.0938C19 19.5938 18.5625 20 18.0625 20H5.90625C5.40625 20 5 19.5938 5 19.0938Z' fill='black' fill-opacity='0.72'/>\r
</svg>`
                                },
                                events: {
                                    _handleError: i(function(l) {
                                        e.handleError(l)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: n
                                },
                                _idProps: {
                                    service: r,
                                    uuid: "27",
                                    alias: "7"
                                },
                                _widgetRecordProvider: a,
                                _dependencies: []
                            }), s.createElement(c, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "border-bottom: 1px solid var(--color-blue-low-100, #EFF3F5); height: 100%;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                style: "flex justify-content-space-between align-items-center",
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    uuid: "28"
                                },
                                _widgetRecordProvider: a
                            }, s.createElement(c, {
                                align: 0,
                                animate: !1,
                                style: "flex flex-col",
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    uuid: "29"
                                },
                                _widgetRecordProvider: a
                            }, s.createElement(y, {
                                extendedProperties: {
                                    style: "---comment-5: /* 150% */; color: var(--text-default, rgba(0, 0, 0, 0.72)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                                },
                                text: [C(m("LQ_YxHNFLkCXcCZR2IG7oQ#Value", "Proof of identity"))],
                                _idProps: {
                                    service: r,
                                    name: "Label5"
                                },
                                _widgetRecordProvider: a
                            })), s.createElement(c, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "padding-right: 30px;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    name: "NotifyOneOfNotVerified6"
                                },
                                _widgetRecordProvider: a
                            }, _(v.variables.is_loadingVar, !1, this, function() {
                                return [s.createElement(c, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "background: var(--bg-secondary, #EFF3F5); height: 14px;"
                                    },
                                    gridProperties: {
                                        classes: "OSInline",
                                        width: "70px"
                                    },
                                    style: "animate-pulse rounded-lg",
                                    visible: !0,
                                    _idProps: {
                                        service: r,
                                        name: "ProfileNameLoader6"
                                    },
                                    _widgetRecordProvider: a
                                })]
                            }, function() {
                                return [s.createElement(T, {
                                    getOwnerSpan: i(function() {
                                        return g.getChildSpan("render")
                                    }, "getOwnerSpan"),
                                    getOwnerDisposeSpan: i(function() {
                                        return g.getChildSpan("destroy")
                                    }, "getOwnerDisposeSpan"),
                                    inputs: {
                                        kyc_status: v.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.statusAttr
                                    },
                                    events: {
                                        _handleError: i(function(l) {
                                            e.handleError(l)
                                        }, "_handleError")
                                    },
                                    _validationProps: {
                                        validationService: n
                                    },
                                    _idProps: {
                                        service: r,
                                        uuid: "33",
                                        alias: "8"
                                    },
                                    _widgetRecordProvider: a,
                                    _dependencies: []
                                })]
                            })))), s.createElement(c, {
                                align: 0,
                                animate: !1,
                                extendedEvents: {
                                    onClick: i(function() {
                                        var l = typeof u != "undefined" && u !== null ? u.clone() : e.callContext().clone();
                                        e.pOAStatusOnClick$Action(e.callContext(l))
                                    }, "onClick")
                                },
                                extendedProperties: {
                                    style: "align-items: center; align-self: stretch; display: flex; gap: 16px; height: 64px;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    name: "POAStatus3"
                                },
                                _widgetRecordProvider: a
                            }, s.createElement(A, {
                                getOwnerSpan: i(function() {
                                    return g.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: i(function() {
                                    return g.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    SVGCode: `<svg width='20' height='17' viewBox='0 0 20 17' fill='none' xmlns='http://www.w3.org/2000/svg'>\r
<path d='M9.65625 1.125C9.84375 0.96875 10.125 0.96875 10.3125 1.125L18.8125 8.625C19.0312 8.8125 19.0312 9.125 18.875 9.34375C18.6875 9.5625 18.375 9.5625 18.1562 9.375L17 8.34375V14.5C17 15.9062 15.875 17 14.5 17H5.5C4.09375 17 3 15.9062 3 14.5V8.34375L1.8125 9.375C1.625 9.5625 1.28125 9.5625 1.125 9.34375C0.9375 9.125 0.9375 8.8125 1.15625 8.625L9.65625 1.125ZM4 7.46875V14.5C4 15.3438 4.65625 16 5.5 16H14.5C15.3125 16 16 15.3438 16 14.5V7.46875L10 2.1875L4 7.46875ZM10 9C10.5312 9 11 8.5625 11 8C11 7.46875 10.5312 7 10 7C9.4375 7 9 7.46875 9 8C9 8.5625 9.4375 9 10 9ZM10 6C10.6875 6 11.3438 6.40625 11.7188 7C12.0625 7.625 12.0625 8.40625 11.7188 9C11.3438 9.625 10.6875 10 10 10C9.28125 10 8.625 9.625 8.25 9C7.90625 8.40625 7.90625 7.625 8.25 7C8.625 6.40625 9.28125 6 10 6ZM7.5 13.25V13.5C7.5 13.7812 7.25 14 7 14C6.71875 14 6.5 13.7812 6.5 13.5V13.25C6.5 12.0312 7.5 11 8.75 11H11.25C12.4688 11 13.5 12.0312 13.5 13.25V13.5C13.5 13.7812 13.25 14 13 14C12.7188 14 12.5 13.7812 12.5 13.5V13.25C12.5 12.5625 11.9375 12 11.25 12H8.75C8.03125 12 7.5 12.5625 7.5 13.25Z' fill='black' fill-opacity='0.72'/>\r
</svg>`
                                },
                                events: {
                                    _handleError: i(function(l) {
                                        e.handleError(l)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: n
                                },
                                _idProps: {
                                    service: r,
                                    uuid: "35",
                                    alias: "9"
                                },
                                _widgetRecordProvider: a,
                                _dependencies: []
                            }), s.createElement(c, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "border-bottom: 1px solid var(--color-blue-low-100, #EFF3F5); height: 100%;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                style: "flex flex justify-content-space-between align-items-center",
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    uuid: "36"
                                },
                                _widgetRecordProvider: a
                            }, s.createElement(c, {
                                align: 0,
                                animate: !1,
                                style: "flex flex-col",
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    uuid: "37"
                                },
                                _widgetRecordProvider: a
                            }, s.createElement(y, {
                                extendedProperties: {
                                    style: "---comment-5: /* 150% */; color: var(--text-default, rgba(0, 0, 0, 0.72)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                                },
                                text: [C(m("GuhgeRYH3Eu_oJTAE47Z_Q#Value", "Proof of address"))],
                                _idProps: {
                                    service: r,
                                    name: "Label6"
                                },
                                _widgetRecordProvider: a
                            })), s.createElement(c, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "padding-right: 30px;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    name: "NotifyOneOfNotVerified7"
                                },
                                _widgetRecordProvider: a
                            }, _(v.variables.is_loadingVar, !1, this, function() {
                                return [s.createElement(c, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "background: var(--bg-secondary, #EFF3F5); height: 14px;"
                                    },
                                    gridProperties: {
                                        classes: "OSInline",
                                        width: "70px"
                                    },
                                    style: "animate-pulse rounded-lg",
                                    visible: !0,
                                    _idProps: {
                                        service: r,
                                        name: "ProfileNameLoader7"
                                    },
                                    _widgetRecordProvider: a
                                })]
                            }, function() {
                                return [s.createElement(T, {
                                    getOwnerSpan: i(function() {
                                        return g.getChildSpan("render")
                                    }, "getOwnerSpan"),
                                    getOwnerDisposeSpan: i(function() {
                                        return g.getChildSpan("destroy")
                                    }, "getOwnerDisposeSpan"),
                                    inputs: {
                                        kyc_status: v.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.statusAttr
                                    },
                                    events: {
                                        _handleError: i(function(l) {
                                            e.handleError(l)
                                        }, "_handleError")
                                    },
                                    _validationProps: {
                                        validationService: n
                                    },
                                    _idProps: {
                                        service: r,
                                        uuid: "41",
                                        alias: "10"
                                    },
                                    _widgetRecordProvider: a,
                                    _dependencies: []
                                })]
                            }))))))]
                        }),
                        footer: te.Empty
                    },
                    _dependencies: [o(v.variables.kYCResponseVar.dataAttr.detailsAttr.poaAttr.statusAttr), o(v.variables.kYCResponseVar.dataAttr.detailsAttr.poiAttr.statusAttr), o(v.variables.is_loadingVar)]
                })]
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: i(function() {
                return {
                    codeFunction: "IdentityVerificationStatus",
                    functionKey: "2cb96bc3-e5bb-4dd9-9648-a0679d1ee862",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "UserProfileFlow.IdentityVerificationStatus",
            modelFactory: q,
            controllerFactory: K,
            getTitle: i(function(d) {
                var v = d.model,
                    e = d.controller,
                    r = d.controller.idService,
                    n = e.validationService,
                    u = e.callContext(),
                    o = k,
                    m = V,
                    E = {
                        props: d,
                        validateWidget: i(function(a) {
                            d.validateWidget(d, a)
                        }, "validateWidget")
                    };
                return ne.resolve(ie.TranslationsService).getMessage("w2u5LLvl2U2WSKBnnR7oYg#TitleExpression.1272643895.1", "Identity verification | Deriv")
            }, "getTitle")
        });
        return p.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, p.getJsDependencies = function() {
            return []
        }, p.getBlocks = function() {
            return [B, A, T, $]
        }, p
    }, "componentFactory"),
    Oe = we();
export {
    K as controllerModule, q as modelModule, Oe as viewModule, Z as webFlowControllerModule
};