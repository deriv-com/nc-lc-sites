import {
    a as A
} from "./_oschunk-HFW3V2GI.js";
import {
    a as Q,
    b as $,
    f as a,
    n as C,
    q as w,
    u as f
} from "./_oschunk-VR5BNL2K.js";
import {
    a as Y,
    g as O,
    m as N,
    o as H,
    q as F,
    r as L,
    s as U,
    t as B
} from "./_oschunk-4VHUVDBV.js";
import {
    a as D
} from "./_oschunk-KXORGPRQ.js";
import {
    Sb as W,
    ub as R
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as P,
    c as v,
    e as q,
    h as S,
    p as _
} from "./_oschunk-M5BUVJ72.js";
var m = P,
    k = class k extends m.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("system_status", "system_statusIn", "system_status", !0, !1, m.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_system_statusInDataFetchStatus", "_system_statusInDataFetchStatus", "_system_statusInDataFetchStatus", !0, !1, m.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("kyc_status", "kyc_statusIn", "kyc_status", !0, !1, m.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_kyc_statusInDataFetchStatus", "_kyc_statusInDataFetchStatus", "_kyc_statusInDataFetchStatus", !0, !1, m.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("from", "fromIn", "from", !0, !1, m.DataTypes.DataTypes.Text, function() {
                return "home"
            }, !1), this.attr("_fromInDataFetchStatus", "_fromInDataFetchStatus", "_fromInDataFetchStatus", !0, !1, m.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("poi_status", "poi_statusIn", "poi_status", !0, !1, m.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_poi_statusInDataFetchStatus", "_poi_statusInDataFetchStatus", "_poi_statusInDataFetchStatus", !0, !1, m.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("poa_status", "poa_statusIn", "poa_status", !0, !1, m.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_poa_statusInDataFetchStatus", "_poa_statusInDataFetchStatus", "_poa_statusInDataFetchStatus", !0, !1, m.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(m.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
v(k, "VariablesRecord");
var b = k;
b.init();
var I = class I extends m.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
v(I, "WidgetsRecord");
var T = I,
    x = class x extends m.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return b
        }
        static getWidgetsRecordConstructor() {
            return T
        }
        static get hasValidationWidgets() {
            return x._hasValidationWidgetsValue === void 0 && (x._hasValidationWidgetsValue = void 0), x._hasValidationWidgetsValue
        }
        setInputs(l) {
            "system_status" in l && (this.variables.system_statusIn = l.system_status, "_system_statusInDataFetchStatus" in l && (this.variables._system_statusInDataFetchStatus = l._system_statusInDataFetchStatus)), "kyc_status" in l && (this.variables.kyc_statusIn = l.kyc_status, "_kyc_statusInDataFetchStatus" in l && (this.variables._kyc_statusInDataFetchStatus = l._kyc_statusInDataFetchStatus)), "from" in l && (this.variables.fromIn = l.from, "_fromInDataFetchStatus" in l && (this.variables._fromInDataFetchStatus = l._fromInDataFetchStatus)), "poi_status" in l && (this.variables.poi_statusIn = l.poi_status, "_poi_statusInDataFetchStatus" in l && (this.variables._poi_statusInDataFetchStatus = l._poi_statusInDataFetchStatus)), "poa_status" in l && (this.variables.poa_statusIn = l.poa_status, "_poa_statusInDataFetchStatus" in l && (this.variables._poa_statusInDataFetchStatus = l._poa_statusInDataFetchStatus))
        }
    };
v(x, "Model");
var E = x;
E._hasValidationWidgetsValue = void 0;
var K = new m.Model.ModelFactory(E);
var i = q(Y());
var X = {
        "2KJXFwri60CuUrUV2AEycw#Value": "\u0645\u062A\u0627\u0628\u0639\u0629",
        "eVhe2OgyD0eLMwK_KSp_ig#Value": `\u0644\u0625\u062C\u0631\u0627\u0621 \u0627\u0644\u0625\u064A\u062F\u0627\u0639\u0627\u062A \u0648\u0627\u0644\u062A\u062F\u0627\u0648\u0644 \u0628\u0623\u0645\u0648\u0627\u0644 \u062D\u0642\u064A\u0642\u064A\u0629\u060C \u064A\u062C\u0628 \u0625\u0639\u0627\u062F\u0629 \u062A\u0642\u064A\u064A\u0645 \u0645\u062F\u0649 \u0645\u0644\u0627\u0621\u0645\u062A\u0643 \u0623\u0648 \u0642\u0628\u0648\u0644 \u0645\u062E\u0627\u0637\u0631 \u0627\u0644\u062A\u062F\u0627\u0648\u0644.

`,
        "yp6sWyB5TEa14e9LwnAEwQ#Value": "\u0628\u0639\u0636 \u0627\u0644\u0645\u064A\u0632\u0627\u062A \u0645\u062A\u0648\u0642\u0641\u0629 \u0645\u0624\u0642\u062A\u064B\u0627",
        "uIMXCmPUDkqA4dmzn02QTQ#Value": "\u062A\u0639\u0631\u0651\u0641 \u0639\u0644\u0649 \u0627\u0644\u0645\u0632\u064A\u062F",
        "isTPcrO5o0SFyZVRbGgR8w#Value": "\u062D\u0633\u0627\u0628\u0643 \u0641\u064A MT5 \u0645\u0639\u0637\u0644 \u062D\u0627\u0644\u064A\u0627\u064B. \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0628\u0639\u0636 \u0627\u0644\u0645\u064A\u0632\u0627\u062A \u0645\u0642\u064A\u062F \u062E\u0644\u0627\u0644 \u0647\u0630\u0627 \u0627\u0644\u0648\u0642\u062A.",
        "ZJJ5wlmoHUqWJeGhgPbzPw#Value": "\u062D\u0633\u0627\u0628 MT5 \u0645\u064F\u0639\u0637\u0644",
        "cUJ9DSEQ+kee8C8J55KaRw#Value": "\u062A\u0639\u0631\u0651\u0641 \u0639\u0644\u0649 \u0627\u0644\u0645\u0632\u064A\u062F",
        "AciIXy+1U0mR7UI7ks75TQ#Value": "\u062A\u0645 \u062A\u0639\u0637\u064A\u0644 \u0645\u062D\u0627\u0641\u0638\u0643 \u062D\u0627\u0644\u064A\u0627\u064B. \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0628\u0639\u0636 \u0627\u0644\u0645\u064A\u0632\u0627\u062A \u0645\u0642\u064A\u062F \u062E\u0644\u0627\u0644 \u0647\u0630\u0627 \u0627\u0644\u0648\u0642\u062A.",
        "G8Pm+qLPGUmxcjh5YG1J0Q#Value": "\u0644\u0627 \u062A\u062A\u0648\u0641\u0651\u0631 \u0627\u0644\u0645\u062D\u0627\u0641\u0638",
        "xaXtQ7nvKEGIhp__uSj9jQ#Value": "\u062A\u0639\u0631\u0651\u0641 \u0639\u0644\u0649 \u0627\u0644\u0645\u0632\u064A\u062F",
        "kkdt6srdxkW8Rh_utB_oWw#Value": "\u062D\u0633\u0627\u0628\u0643 \u0641\u064A \u0645\u0631\u062D\u0644\u0629 \u0627\u0644\u0625\u0646\u0647\u0627\u0621. \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0628\u0639\u0636 \u0627\u0644\u0645\u064A\u0632\u0627\u062A \u0645\u0642\u064A\u062F \u062D\u064A\u062B \u0646\u0633\u062A\u0639\u062F \u0644\u0625\u063A\u0644\u0627\u0642 \u062D\u0633\u0627\u0628\u0643. \u0644\u0644\u0645\u0632\u064A\u062F \u0645\u0646 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644\u060C \u064A\u0631\u062C\u0649 \u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0628\u0641\u0631\u064A\u0642 \u0627\u0644\u062F\u0639\u0645.",
        "mEcAb6345EKRmVqaULvg1Q#Value": "\u062A\u0635\u0641\u064A\u0629 \u0627\u0644\u062D\u0633\u0627\u0628",
        "kQWQHqB1rUiXF00Kz8pcwA#Value": "\u062A\u0639\u0631\u0651\u0641 \u0639\u0644\u0649 \u0627\u0644\u0645\u0632\u064A\u062F",
        "AnWQ8GPJRE2KaLu9xlSDgQ#Value": "\u062D\u0633\u0627\u0628\u0643 \u0642\u064A\u062F \u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629. \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0628\u0639\u0636 \u0627\u0644\u0645\u064A\u0632\u0627\u062A \u0645\u0642\u064A\u062F \u062E\u0644\u0627\u0644 \u0647\u0630\u0627 \u0627\u0644\u0648\u0642\u062A.",
        "oobXT0ypqU+ZnWJ0v43OYg#Value": "\u062D\u0633\u0627\u0628\u0643 \u0642\u064A\u062F \u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629",
        "WgT7i81TtUKFSYSpyOKubg#Value": "\u062A\u062D\u0642\u0642 \u0627\u0644\u0622\u0646",
        "OWsIzDscqUuysmReOJCIag#Value": "\u062A\u0639\u0631\u0641 \u0639\u0644\u0649 \u0627\u0644\u0645\u0632\u064A\u062F",
        "+k+6OMPcXkCBpQO9zoly_Q#Value": "\u0644\u0646 \u062A\u062A\u0645\u0643\u0646 \u0645\u0646 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0628\u0639\u0636 \u0627\u0644\u0645\u064A\u0632\u0627\u062A \u062D\u062A\u0649 \u064A\u062A\u0645 \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u062D\u0633\u0627\u0628\u0643.",
        "ZfH6Hj4ick68Ibh0rPo9bQ#Value": "\u062A\u062D\u0642\u0642 \u0645\u0646 \u0647\u0648\u064A\u062A\u0643",
        "1uqR00uPTUyh0Idedk0NjQ#Value": "\u0639\u0631\u0636 \u0627\u0644\u062D\u0627\u0644\u0629",
        "wK_nW9p3LEekjEs3OzBdcQ#Value": "\u0628\u0639\u0636 \u0627\u0644\u0645\u064A\u0632\u0627\u062A \u0644\u0646 \u062A\u0643\u0648\u0646 \u0645\u062A\u0627\u062D\u0629 \u062D\u062A\u0649 \u064A\u062A\u0645 \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u062D\u0633\u0627\u0628\u0643.",
        "d8GNBrbi3EeBZceeAZ9hYA#Value": "\u062C\u0627\u0631\u064D \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0647\u0648\u064A\u0629",
        "q+9XLPxVD0OAw23Q8WH7YQ#Value": "\u0639\u0631\u0636 \u0627\u0644\u062D\u0627\u0644\u0629",
        "zah_Ye7qakWil07AjVG4dQ#Value": "\u0644\u0644\u0625\u064A\u062F\u0627\u0639 \u0648\u0628\u062F\u0621 \u0627\u0644\u062A\u062F\u0627\u0648\u0644\u060C \u062A\u062D\u0642\u0642 \u0645\u0646 \u0647\u0648\u064A\u062A\u0643.",
        "2UBMXv5Sk0WASip4i8CboA#Value": "\u0641\u0634\u0644\u062A \u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0647\u0648\u064A\u0629"
    },
    M = {
        "ar-001": {
            translations: X,
            isRTL: !0
        }
    };
var o = P; {
    let l = class l extends o.Controller.BaseViewController {
        constructor(t, e, n) {
            super(t, e, n, M);
            var u = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _onClickContinue$Action() {
            return this.hasOwnProperty("__onClickContinue$Action") || (this.__onClickContinue$Action = function(t) {
                var e = this.model,
                    n = this.controller,
                    u = this.idService;
                return o.Logger.startActiveSpan("OnClickContinue", function(s) {
                    s && (s.setAttribute("code.function", "OnClickContinue"), s.setAttribute("outsystems.function.key", "3138d323-bf44-4afd-abed-fc854953ad04"), s.setAttribute("outsystems.function.owner.name", "uae"), s.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return n.ensureControllerAlive("OnClickContinue"), t = n.callContext(t), o.Navigation.navigateTo(o.Navigation.generateScreenURL("uae", "retake-assessment", {
                            from: o.DataConversion.ServerDataConverter.to(e.variables.fromIn, o.DataTypes.DataTypes.Text)
                        }), o.Transitions.createTransition(o.Transitions.TransitionAnimation.Default), t, !0)
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__onClickContinue$Action
        }
        set _onClickContinue$Action(t) {
            this.__onClickContinue$Action = t
        }
        get _onClickVerifyNow$Action() {
            return this.hasOwnProperty("__onClickVerifyNow$Action") || (this.__onClickVerifyNow$Action = function(t) {
                var e = this.model,
                    n = this.controller,
                    u = this.idService;
                return o.Logger.startActiveSpan("OnClickVerifyNow", function(s) {
                    s && (s.setAttribute("code.function", "OnClickVerifyNow"), s.setAttribute("outsystems.function.key", "565d4d3e-e359-4746-a6b7-1c78aec14872"), s.setAttribute("outsystems.function.owner.name", "uae"), s.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return n.ensureControllerAlive("OnClickVerifyNow"), t = n.callContext(t), R.setkyc_flow_from(e.variables.fromIn !== o.BuiltinFunctions.nullTextIdentifier() ? e.variables.fromIn : "banner"), e.variables.poi_statusIn === "unverified" && e.variables.poa_statusIn === "unverified" ? o.Navigation.navigateTo(o.Navigation.generateScreenURL("uae", "get-verified", {}), o.Transitions.createTransition(o.Transitions.TransitionAnimation.Default), t, !0) : o.Navigation.navigateTo(o.Navigation.generateScreenURL("uae", "identity-verification-status", {}), o.Transitions.createTransition(o.Transitions.TransitionAnimation.Default), t, !0)
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__onClickVerifyNow$Action
        }
        set _onClickVerifyNow$Action(t) {
            this.__onClickVerifyNow$Action = t
        }
        get _onClickSystemStatus$Action() {
            return this.hasOwnProperty("__onClickSystemStatus$Action") || (this.__onClickSystemStatus$Action = function(t) {
                var e = this.model,
                    n = this.controller,
                    u = this.idService;
                return o.Logger.startActiveSpan("OnClickSystemStatus", function(s) {
                    s && (s.setAttribute("code.function", "OnClickSystemStatus"), s.setAttribute("outsystems.function.key", "80257d53-08f3-4e17-8fc7-d805752e2edf"), s.setAttribute("outsystems.function.owner.name", "uae"), s.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return n.ensureControllerAlive("OnClickSystemStatus"), t = n.callContext(t), R.setkyc_flow_from(e.variables.fromIn !== o.BuiltinFunctions.nullTextIdentifier() ? e.variables.fromIn : "banner"), o.Navigation.navigateTo(o.Navigation.generateScreenURL("uae", "system-status-info", {}), o.Transitions.createTransition(o.Transitions.TransitionAnimation.Default), t, !0)
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__onClickSystemStatus$Action
        }
        set _onClickSystemStatus$Action(t) {
            this.__onClickSystemStatus$Action = t
        }
        get _onClickStatus$Action() {
            return this.hasOwnProperty("__onClickStatus$Action") || (this.__onClickStatus$Action = function(t) {
                var e = this.model,
                    n = this.controller,
                    u = this.idService;
                return o.Logger.startActiveSpan("OnClickStatus", function(s) {
                    s && (s.setAttribute("code.function", "OnClickStatus"), s.setAttribute("outsystems.function.key", "a3d57953-bcd7-47e1-92f3-bdd94aea1e48"), s.setAttribute("outsystems.function.owner.name", "uae"), s.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return n.ensureControllerAlive("OnClickStatus"), t = n.callContext(t), R.setkyc_flow_from(e.variables.fromIn !== o.BuiltinFunctions.nullTextIdentifier() ? e.variables.fromIn : "banner"), o.Navigation.navigateTo(o.Navigation.generateScreenURL("uae", "identity-verification-status", {}), o.Transitions.createTransition(o.Transitions.TransitionAnimation.Default), t, !0)
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__onClickStatus$Action
        }
        set _onClickStatus$Action(t) {
            this.__onClickStatus$Action = t
        }
        onClickContinue$Action(t) {
            var e = this.controller;
            return o.Logger.startActiveSpan("OnClickContinue__proxy", function(n) {
                n && (n.setAttribute("code.function", "OnClickContinue"), n.setAttribute("outsystems.function.key", "3138d323-bf44-4afd-abed-fc854953ad04"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._onClickContinue$Action, t)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        onClickVerifyNow$Action(t) {
            var e = this.controller;
            return o.Logger.startActiveSpan("OnClickVerifyNow__proxy", function(n) {
                n && (n.setAttribute("code.function", "OnClickVerifyNow"), n.setAttribute("outsystems.function.key", "565d4d3e-e359-4746-a6b7-1c78aec14872"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._onClickVerifyNow$Action, t)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        onClickSystemStatus$Action(t) {
            var e = this.controller;
            return o.Logger.startActiveSpan("OnClickSystemStatus__proxy", function(n) {
                n && (n.setAttribute("code.function", "OnClickSystemStatus"), n.setAttribute("outsystems.function.key", "80257d53-08f3-4e17-8fc7-d805752e2edf"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._onClickSystemStatus$Action, t)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        onClickStatus$Action(t) {
            var e = this.controller;
            return o.Logger.startActiveSpan("OnClickStatus__proxy", function(n) {
                n && (n.setAttribute("code.function", "OnClickStatus"), n.setAttribute("outsystems.function.key", "a3d57953-bcd7-47e1-92f3-bdd94aea1e48"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._onClickStatus$Action, t)
                } finally {
                    n && n.end()
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
            return W.defaultTimeout
        }
    };
    v(l, "ControllerInner");
    let p = l;
    G = p
}
var G, J = new o.Controller.ControllerFactory(G, D);
var Ce = O.PlaceholderContent,
    xe = O.IteratorPlaceholderContent,
    Z = v(function() {
        var p = H(function(l) {
            var y = l.model,
                t = l.controller,
                e = l.controller.idService,
                n = t.validationService,
                u = t.callContext(),
                s = U,
                c = B,
                j = {
                    props: l,
                    validateWidget: v(function(g) {
                        l.validateWidget(l, g)
                    }, "validateWidget")
                },
                r = y,
                h = L,
                d = F,
                V = N();
            return i.createElement("div", l.rootNodeProperties, h(y.variables.system_statusIn === "needs_kyc_verification", !1, this, function() {
                return [h(y.variables.kyc_statusIn === "failed" || y.variables.kyc_statusIn === "rejected", !1, this, function() {
                    return [i.createElement(a, {
                        align: 0,
                        animate: !1,
                        extendedProperties: {
                            style: "background: rgba(230, 25, 14, 0.08); border-radius: 16px;"
                        },
                        style: "banner info-card display-flex flex-direction column-gap-s",
                        visible: !0,
                        _idProps: {
                            service: e,
                            name: "Failed"
                        },
                        _widgetRecordProvider: r
                    }, i.createElement(a, {
                        align: 0,
                        animate: !1,
                        style: "",
                        visible: !0,
                        _idProps: {
                            service: e,
                            name: "Icon6"
                        },
                        _widgetRecordProvider: r
                    }, i.createElement(A, {
                        getOwnerSpan: v(function() {
                            return V.getChildSpan("render")
                        }, "getOwnerSpan"),
                        getOwnerDisposeSpan: v(function() {
                            return V.getChildSpan("destroy")
                        }, "getOwnerDisposeSpan"),
                        inputs: {
                            SVGCode: `<svg width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'>\r
<path d='M12.5312 6.65625L6.34375 16.8125C6.28125 16.9062 6.28125 16.9688 6.28125 17.0625C6.28125 17.3125 6.46875 17.5 6.71875 17.5H18.8125C19.0625 17.5 19.2812 17.3125 19.2812 17.0625C19.2812 16.9688 19.25 16.9062 19.1875 16.8125L13 6.65625C12.9688 6.5625 12.875 6.5 12.7812 6.5C12.6562 6.5 12.5938 6.5625 12.5312 6.65625ZM11.25 5.875C11.5625 5.34375 12.1562 5 12.7812 5C13.375 5 13.9688 5.34375 14.2812 5.875L20.4688 16.0312C20.6562 16.3438 20.7812 16.6875 20.7812 17.0625C20.7812 18.125 19.9062 19 18.8125 19H6.71875C5.65625 19 4.78125 18.125 4.78125 17.0625C4.78125 16.6875 4.875 16.3438 5.0625 16.0312L11.25 5.875ZM13.7812 15.5C13.7812 16.0625 13.3125 16.5 12.7812 16.5C12.2188 16.5 11.7812 16.0625 11.7812 15.5C11.7812 14.9688 12.2188 14.5 12.7812 14.5C13.3125 14.5 13.7812 14.9688 13.7812 15.5ZM13.5312 9.75V12.75C13.5312 13.1875 13.1875 13.5 12.7812 13.5C12.3438 13.5 12.0312 13.1875 12.0312 12.75V9.75C12.0312 9.34375 12.3438 9 12.7812 9C13.1875 9 13.5312 9.34375 13.5312 9.75Z' fill='#C40000'/>\r
</svg>`
                        },
                        events: {
                            _handleError: v(function(g) {
                                t.handleError(g)
                            }, "_handleError")
                        },
                        _validationProps: {
                            validationService: n
                        },
                        _idProps: {
                            service: e,
                            uuid: "2",
                            alias: "1"
                        },
                        _widgetRecordProvider: r,
                        _dependencies: []
                    })), i.createElement(a, {
                        align: 0,
                        animate: !1,
                        style: "display-flex flex-direction-column row-gap-s  flex-1",
                        visible: !0,
                        _idProps: {
                            service: e,
                            name: "BannerContent6"
                        },
                        _widgetRecordProvider: r
                    }, i.createElement(a, {
                        align: 0,
                        animate: !1,
                        style: "display-flex flex-direction-column row-gap-xs",
                        visible: !0,
                        _idProps: {
                            service: e,
                            uuid: "4"
                        },
                        _widgetRecordProvider: r
                    }, i.createElement(f, {
                        extendedProperties: {
                            style: "color: var(--text-prominent); font-size: 14px; font-style: normal; font-weight: 600; line-height: 22px;"
                        },
                        text: [d(c("2UBMXv5Sk0WASip4i8CboA#Value", "Account verification failed"))],
                        _idProps: {
                            service: e,
                            uuid: "5"
                        },
                        _widgetRecordProvider: r
                    }), i.createElement(f, {
                        extendedProperties: {
                            style: "color: var(--text-default);"
                        },
                        text: [d(c("zah_Ye7qakWil07AjVG4dQ#Value", "To deposit and start trading, reverify your identity."))],
                        _idProps: {
                            service: e,
                            uuid: "6"
                        },
                        _widgetRecordProvider: r
                    })), i.createElement(a, {
                        align: 0,
                        animate: !1,
                        extendedEvents: {
                            onClick: v(function() {
                                var g = typeof u != "undefined" && u !== null ? u.clone() : t.callContext().clone();
                                t.onClickStatus$Action(t.callContext(g))
                            }, "onClick")
                        },
                        extendedProperties: {
                            style: "text-decoration: underline;"
                        },
                        style: "w-fit flex gap-4",
                        visible: !0,
                        _idProps: {
                            service: e,
                            uuid: "7"
                        },
                        _widgetRecordProvider: r
                    }, d(c("q+9XLPxVD0OAw23Q8WH7YQ#Value", "View status")))))]
                }, function() {
                    return [h(y.variables.kyc_statusIn === "pending" || y.variables.kyc_statusIn === "pending_provider", !1, this, function() {
                        return [i.createElement(a, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "background: rgba(255, 156, 19, 0.08); border-radius: 16px;"
                            },
                            style: "banner info-card display-flex flex-direction column-gap-s",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "InProgress"
                            },
                            _widgetRecordProvider: r
                        }, i.createElement(a, {
                            align: 0,
                            animate: !1,
                            style: "",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "Icon7"
                            },
                            _widgetRecordProvider: r
                        }, i.createElement(C, {
                            image: _.VersionedURL.getVersionedUrl("img/uae.ic_warning_orange.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "10"
                            },
                            _widgetRecordProvider: r
                        })), i.createElement(a, {
                            align: 0,
                            animate: !1,
                            style: "display-flex flex-direction-column row-gap-s flex-1",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "BannerContent7"
                            },
                            _widgetRecordProvider: r
                        }, i.createElement(a, {
                            align: 0,
                            animate: !1,
                            style: "display-flex flex-direction-column row-gap-xs",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "12"
                            },
                            _widgetRecordProvider: r
                        }, i.createElement(f, {
                            extendedProperties: {
                                style: "color: var(--text-prominent); font-size: 14px; font-style: normal; font-weight: 600; line-height: 22px;"
                            },
                            text: [d(c("d8GNBrbi3EeBZceeAZ9hYA#Value", "Account verification in progress"))],
                            _idProps: {
                                service: e,
                                uuid: "13"
                            },
                            _widgetRecordProvider: r
                        }), i.createElement(f, {
                            extendedProperties: {
                                style: "color: var(--text-default);"
                            },
                            text: [d(c("wK_nW9p3LEekjEs3OzBdcQ#Value", "Some features can only be accessed after your account is verified."))],
                            _idProps: {
                                service: e,
                                uuid: "14"
                            },
                            _widgetRecordProvider: r
                        })), i.createElement(a, {
                            align: 0,
                            animate: !1,
                            extendedEvents: {
                                onClick: v(function() {
                                    var g = typeof u != "undefined" && u !== null ? u.clone() : t.callContext().clone();
                                    t.onClickStatus$Action(t.callContext(g))
                                }, "onClick")
                            },
                            extendedProperties: {
                                style: "text-decoration: underline;"
                            },
                            style: "w-fit flex gap-4",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "15"
                            },
                            _widgetRecordProvider: r
                        }, d(c("1uqR00uPTUyh0Idedk0NjQ#Value", "View status")))))]
                    }, function() {
                        return [i.createElement(a, {
                            align: 0,
                            animate: !1,
                            style: "banner info-card display-flex flex-direction column-gap-s",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "InfoBanner"
                            },
                            _widgetRecordProvider: r
                        }, i.createElement(a, {
                            align: 0,
                            animate: !1,
                            style: "",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "Icon"
                            },
                            _widgetRecordProvider: r
                        }, i.createElement(C, {
                            image: _.VersionedURL.getVersionedUrl("img/uae.ic_warning_orange.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "18"
                            },
                            _widgetRecordProvider: r
                        })), i.createElement(a, {
                            align: 0,
                            animate: !1,
                            style: "display-flex flex-direction-column row-gap-s flex-1",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "BannerContent"
                            },
                            _widgetRecordProvider: r
                        }, i.createElement(a, {
                            align: 0,
                            animate: !1,
                            style: "display-flex flex-direction-column row-gap-xs",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "20"
                            },
                            _widgetRecordProvider: r
                        }, i.createElement(f, {
                            extendedProperties: {
                                style: "color: var(--text-prominent); font-size: 14px; font-style: normal; font-weight: 600; line-height: 22px;"
                            },
                            text: [d(c("ZfH6Hj4ick68Ibh0rPo9bQ#Value", "Verify your identity"))],
                            _idProps: {
                                service: e,
                                uuid: "21"
                            },
                            _widgetRecordProvider: r
                        }), i.createElement(a, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "22"
                            },
                            _widgetRecordProvider: r
                        }, i.createElement(f, {
                            extendedProperties: {
                                style: "color: var(--text-default);"
                            },
                            text: [d(c("+k+6OMPcXkCBpQO9zoly_Q#Value", "Some features won't be available until your account is verified.  "))],
                            _idProps: {
                                service: e,
                                uuid: "23"
                            },
                            _widgetRecordProvider: r
                        }), i.createElement(Q, {
                            extendedEvents: {
                                onClick: v(function() {
                                    var g = typeof u != "undefined" && u !== null ? u.clone() : t.callContext().clone();
                                    t.onClickSystemStatus$Action(t.callContext(g))
                                }, "onClick")
                            },
                            extendedProperties: {
                                className: "cursor-pointer"
                            },
                            tag: "span",
                            _idProps: {
                                service: e,
                                uuid: "24"
                            },
                            _widgetRecordProvider: r
                        }, i.createElement(f, {
                            extendedProperties: {
                                style: "text-decoration: underline;"
                            },
                            text: [d(c("OWsIzDscqUuysmReOJCIag#Value", " Learn more"))],
                            _idProps: {
                                service: e,
                                uuid: "25"
                            },
                            _widgetRecordProvider: r
                        })))), i.createElement($, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            isDefault: !1,
                            onClick: v(function() {
                                var g = typeof u != "undefined" && u !== null ? u.clone() : t.callContext().clone();
                                t.onClickVerifyNow$Action(t.callContext(g))
                            }, "onClick"),
                            style: "verify-cta",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "26"
                            },
                            _widgetRecordProvider: r
                        }, i.createElement(f, {
                            extendedProperties: {
                                style: "font-size: 12px; font-weight: bold;"
                            },
                            text: [d(c("WgT7i81TtUKFSYSpyOKubg#Value", "Verify now"))],
                            _idProps: {
                                service: e,
                                uuid: "27"
                            },
                            _widgetRecordProvider: r
                        }))))]
                    })]
                })]
            }, function() {
                return [h(y.variables.system_statusIn === "under_investigation", !1, this, function() {
                    return [i.createElement(a, {
                        align: 0,
                        animate: !1,
                        style: "banner info-card display-flex flex-direction column-gap-s",
                        visible: !0,
                        _idProps: {
                            service: e,
                            name: "InfoBanner2"
                        },
                        _widgetRecordProvider: r
                    }, i.createElement(a, {
                        align: 0,
                        animate: !1,
                        style: "",
                        visible: !0,
                        _idProps: {
                            service: e,
                            name: "Icon2"
                        },
                        _widgetRecordProvider: r
                    }, i.createElement(C, {
                        image: _.VersionedURL.getVersionedUrl("img/uae.ic_warning_orange.svg"),
                        type: 0,
                        _idProps: {
                            service: e,
                            uuid: "30"
                        },
                        _widgetRecordProvider: r
                    })), i.createElement(a, {
                        align: 0,
                        animate: !1,
                        style: "display-flex flex-direction-column row-gap-s  flex-1",
                        visible: !0,
                        _idProps: {
                            service: e,
                            name: "BannerContent2"
                        },
                        _widgetRecordProvider: r
                    }, i.createElement(a, {
                        align: 0,
                        animate: !1,
                        style: "display-flex flex-direction-column row-gap-xs",
                        visible: !0,
                        _idProps: {
                            service: e,
                            uuid: "32"
                        },
                        _widgetRecordProvider: r
                    }, i.createElement(f, {
                        extendedProperties: {
                            style: "color: var(--text-prominent); font-size: 14px; font-style: normal; font-weight: 600; line-height: 22px;"
                        },
                        text: [d(c("oobXT0ypqU+ZnWJ0v43OYg#Value", "Account under review"))],
                        _idProps: {
                            service: e,
                            uuid: "33"
                        },
                        _widgetRecordProvider: r
                    }), i.createElement(f, {
                        extendedProperties: {
                            style: "color: var(--text-default);"
                        },
                        text: [d(c("AnWQ8GPJRE2KaLu9xlSDgQ#Value", "Your account is under review. Access to certain features is restricted during this time."))],
                        _idProps: {
                            service: e,
                            uuid: "34"
                        },
                        _widgetRecordProvider: r
                    })), i.createElement(a, {
                        align: 0,
                        animate: !1,
                        extendedProperties: {
                            style: "text-decoration: underline;"
                        },
                        style: "flex gap-4",
                        visible: !0,
                        _idProps: {
                            service: e,
                            uuid: "35"
                        },
                        _widgetRecordProvider: r
                    }, i.createElement(w, {
                        enabled: !0,
                        transition: S.createTransition(S.TransitionAnimation.Default),
                        url: _.generateScreenURL("uae", "system-status-info", {}),
                        visible: !0,
                        _idProps: {
                            service: e,
                            uuid: "36"
                        },
                        _widgetRecordProvider: r
                    }, d(c("kQWQHqB1rUiXF00Kz8pcwA#Value", "Learn more"))))))]
                }, function() {
                    return [h(y.variables.system_statusIn === "wind_down", !1, this, function() {
                        return [i.createElement(a, {
                            align: 0,
                            animate: !1,
                            style: "banner info-card display-flex flex-direction column-gap-s",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "InfoBanner3"
                            },
                            _widgetRecordProvider: r
                        }, i.createElement(a, {
                            align: 0,
                            animate: !1,
                            style: "",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "Icon3"
                            },
                            _widgetRecordProvider: r
                        }, i.createElement(C, {
                            image: _.VersionedURL.getVersionedUrl("img/uae.ic_warning_orange.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "39"
                            },
                            _widgetRecordProvider: r
                        })), i.createElement(a, {
                            align: 0,
                            animate: !1,
                            style: "display-flex flex-direction-column row-gap-s  flex-1",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "BannerContent3"
                            },
                            _widgetRecordProvider: r
                        }, i.createElement(a, {
                            align: 0,
                            animate: !1,
                            style: "display-flex flex-direction-column row-gap-xs",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "41"
                            },
                            _widgetRecordProvider: r
                        }, i.createElement(f, {
                            extendedProperties: {
                                style: "color: var(--text-prominent); font-size: 14px; font-style: normal; font-weight: 600; line-height: 22px;"
                            },
                            text: [d(c("mEcAb6345EKRmVqaULvg1Q#Value", "Account winding down"))],
                            _idProps: {
                                service: e,
                                uuid: "42"
                            },
                            _widgetRecordProvider: r
                        }), i.createElement(f, {
                            extendedProperties: {
                                style: "color: var(--text-default);"
                            },
                            text: [d(c("kkdt6srdxkW8Rh_utB_oWw#Value", "Your account is winding down. Access to certain features is restricted as we prepare to close your account. For more details, please contact support."))],
                            _idProps: {
                                service: e,
                                uuid: "43"
                            },
                            _widgetRecordProvider: r
                        })), i.createElement(a, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "text-decoration: underline;"
                            },
                            style: "flex gap-4",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "44"
                            },
                            _widgetRecordProvider: r
                        }, i.createElement(w, {
                            enabled: !0,
                            transition: S.createTransition(S.TransitionAnimation.Default),
                            url: _.generateScreenURL("uae", "system-status-info", {}),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "45"
                            },
                            _widgetRecordProvider: r
                        }, d(c("xaXtQ7nvKEGIhp__uSj9jQ#Value", "Learn more"))))))]
                    }, function() {
                        return [h(y.variables.system_statusIn === "wallets_disabled", !1, this, function() {
                            return [i.createElement(a, {
                                align: 0,
                                animate: !1,
                                style: "banner info-card display-flex flex-direction column-gap-s",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    name: "InfoBanner4"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(a, {
                                align: 0,
                                animate: !1,
                                style: "",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    name: "Icon4"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(C, {
                                image: _.VersionedURL.getVersionedUrl("img/uae.ic_warning_orange.svg"),
                                type: 0,
                                _idProps: {
                                    service: e,
                                    uuid: "48"
                                },
                                _widgetRecordProvider: r
                            })), i.createElement(a, {
                                align: 0,
                                animate: !1,
                                style: "display-flex flex-direction-column row-gap-s  flex-1",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    name: "BannerContent4"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(a, {
                                align: 0,
                                animate: !1,
                                style: "display-flex flex-direction-column row-gap-xs",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "50"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(f, {
                                extendedProperties: {
                                    style: "color: var(--text-prominent); font-size: 14px; font-style: normal; font-weight: 600; line-height: 22px;"
                                },
                                text: [d(c("G8Pm+qLPGUmxcjh5YG1J0Q#Value", "Wallets disabled"))],
                                _idProps: {
                                    service: e,
                                    uuid: "51"
                                },
                                _widgetRecordProvider: r
                            }), i.createElement(f, {
                                extendedProperties: {
                                    style: "color: var(--text-default);"
                                },
                                text: [d(c("AciIXy+1U0mR7UI7ks75TQ#Value", "Your Wallets are currently disabled. Access to certain features is restricted during this time."))],
                                _idProps: {
                                    service: e,
                                    uuid: "52"
                                },
                                _widgetRecordProvider: r
                            })), i.createElement(a, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "text-decoration: underline;"
                                },
                                style: "flex gap-4",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "53"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(w, {
                                enabled: !0,
                                transition: S.createTransition(S.TransitionAnimation.Default),
                                url: _.generateScreenURL("uae", "system-status-info", {}),
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "54"
                                },
                                _widgetRecordProvider: r
                            }, d(c("cUJ9DSEQ+kee8C8J55KaRw#Value", "Learn more"))))))]
                        }, function() {
                            return [h(y.variables.system_statusIn === "accounts_disabled", !1, this, function() {
                                return [i.createElement(a, {
                                    align: 0,
                                    animate: !1,
                                    style: "banner info-card display-flex flex-direction column-gap-s",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        name: "InfoBanner5"
                                    },
                                    _widgetRecordProvider: r
                                }, i.createElement(a, {
                                    align: 0,
                                    animate: !1,
                                    style: "",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        name: "Icon5"
                                    },
                                    _widgetRecordProvider: r
                                }, i.createElement(C, {
                                    image: _.VersionedURL.getVersionedUrl("img/uae.ic_warning_orange.svg"),
                                    type: 0,
                                    _idProps: {
                                        service: e,
                                        uuid: "57"
                                    },
                                    _widgetRecordProvider: r
                                })), i.createElement(a, {
                                    align: 0,
                                    animate: !1,
                                    style: "display-flex flex-direction-column row-gap-s  flex-1",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        name: "BannerContent5"
                                    },
                                    _widgetRecordProvider: r
                                }, i.createElement(a, {
                                    align: 0,
                                    animate: !1,
                                    style: "display-flex flex-direction-column row-gap-xs",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "59"
                                    },
                                    _widgetRecordProvider: r
                                }, i.createElement(f, {
                                    extendedProperties: {
                                        style: "color: var(--text-prominent); font-size: 14px; font-style: normal; font-weight: 600; line-height: 22px;"
                                    },
                                    text: [d(c("ZJJ5wlmoHUqWJeGhgPbzPw#Value", "MT5 account disabled"))],
                                    _idProps: {
                                        service: e,
                                        uuid: "60"
                                    },
                                    _widgetRecordProvider: r
                                }), i.createElement(f, {
                                    extendedProperties: {
                                        style: "color: var(--text-default);"
                                    },
                                    text: [d(c("isTPcrO5o0SFyZVRbGgR8w#Value", "Your MT5 account is currently disabled. Access to certain features is restricted during this time."))],
                                    _idProps: {
                                        service: e,
                                        uuid: "61"
                                    },
                                    _widgetRecordProvider: r
                                })), i.createElement(a, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "text-decoration: underline;"
                                    },
                                    style: "flex gap-4",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "62"
                                    },
                                    _widgetRecordProvider: r
                                }, i.createElement(w, {
                                    enabled: !0,
                                    transition: S.createTransition(S.TransitionAnimation.Default),
                                    url: _.generateScreenURL("uae", "system-status-info", {}),
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "63"
                                    },
                                    _widgetRecordProvider: r
                                }, d(c("uIMXCmPUDkqA4dmzn02QTQ#Value", "Learn more"))))))]
                            }, function() {
                                return []
                            })]
                        })]
                    })]
                })]
            }), h(y.variables.system_statusIn === "cool_down", !1, this, function() {
                return [i.createElement(a, {
                    align: 0,
                    animate: !1,
                    style: "banner info-card flex gap-s",
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "InfoBanner7"
                    },
                    _widgetRecordProvider: r
                }, i.createElement(a, {
                    align: 0,
                    animate: !1,
                    style: "",
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "Icon9"
                    },
                    _widgetRecordProvider: r
                }, i.createElement(C, {
                    image: _.VersionedURL.getVersionedUrl("img/uae.ic_warning_orange.svg"),
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "66"
                    },
                    _widgetRecordProvider: r
                })), i.createElement(a, {
                    align: 0,
                    animate: !1,
                    style: "display-flex flex-direction-column row-gap-s  flex-1",
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "BannerContent9"
                    },
                    _widgetRecordProvider: r
                }, i.createElement(a, {
                    align: 0,
                    animate: !1,
                    style: "display-flex flex-direction-column row-gap-xs",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "68"
                    },
                    _widgetRecordProvider: r
                }, i.createElement(f, {
                    extendedProperties: {
                        style: "font-weight: bold;"
                    },
                    text: [d(c("yp6sWyB5TEa14e9LwnAEwQ#Value", "Some features are paused"))],
                    _idProps: {
                        service: e,
                        uuid: "69"
                    },
                    _widgetRecordProvider: r
                }), i.createElement(f, {
                    extendedProperties: {
                        style: "color: var(--text-default);"
                    },
                    text: [d(c("eVhe2OgyD0eLMwK_KSp_ig#Value", "To make deposits and trade with real funds, retake the suitability assessment or accept trading risks."))],
                    _idProps: {
                        service: e,
                        uuid: "70"
                    },
                    _widgetRecordProvider: r
                }), i.createElement(a, {
                    align: 0,
                    animate: !1,
                    extendedEvents: {
                        onClick: v(function() {
                            var g = typeof u != "undefined" && u !== null ? u.clone() : t.callContext().clone();
                            t.onClickContinue$Action(t.callContext(g))
                        }, "onClick")
                    },
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "71"
                    },
                    _widgetRecordProvider: r
                }, i.createElement(f, {
                    extendedProperties: {
                        style: "text-decoration: underline;"
                    },
                    text: [d(c("2KJXFwri60CuUrUV2AEycw#Value", "Continue"))],
                    _idProps: {
                        service: e,
                        uuid: "72"
                    },
                    _widgetRecordProvider: r
                })))))]
            }, function() {
                return []
            }))
        }, {
            topLevelComponent: !1,
            getAttributes: v(function() {
                return {
                    codeFunction: "SystemStatusBanner",
                    functionKey: "3138eb42-b50e-471f-a0e1-45158a117f42",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "KYCFlow.SystemStatusBanner",
            modelFactory: K,
            controllerFactory: J
        });
        return p.getCssDependencies = function() {
            return ["css/uae.KYCFlow.SystemStatusBanner.css", "css/OutSystemsReactWidgets.css"]
        }, p.getJsDependencies = function() {
            return []
        }, p.getBlocks = function() {
            return [A]
        }, p
    }, "componentFactory"),
    Pe = Z();
export {
    Pe as a
};