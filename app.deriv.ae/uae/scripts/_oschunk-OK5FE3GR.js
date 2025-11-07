import {
    a as fe
} from "./_oschunk-PHBEQLQL.js";
import {
    a as le
} from "./_oschunk-SFRA456L.js";
import "./_oschunk-L6JZD7VU.js";
import {
    a as de
} from "./_oschunk-SNXHD6UR.js";
import "./_oschunk-RVD4FS25.js";
import "./_oschunk-4SYOXZNK.js";
import "./_oschunk-YB2J7GTX.js";
import "./_oschunk-HFW3V2GI.js";
import "./_oschunk-LLAHPWP3.js";
import "./_oschunk-YVFTECWM.js";
import {
    a as Me,
    b as Ge,
    f as p,
    h as G,
    l as Je,
    n as Ze,
    o as ze,
    q as X,
    u as U
} from "./_oschunk-VR5BNL2K.js";
import {
    a as ue,
    g as I,
    m as F,
    n as Be,
    o as K,
    q as H,
    r as W,
    s as $,
    t as k
} from "./_oschunk-4VHUVDBV.js";
import {
    a as N
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    Ea as q,
    F as z,
    Qb as L,
    Sb as T,
    db as ce,
    la as se,
    ub as h
} from "./_oschunk-Z7QRTJDJ.js";
import {
    I as Z,
    W as C,
    c as s,
    e as ae,
    m as V,
    n as D,
    p as We,
    v as Ue,
    w as P
} from "./_oschunk-M5BUVJ72.js";
var at = {
        "UVENPYKhakCrUgaxoVSsTw#Title": "\u0633\u062D\u0628 | Deriv",
        "UVENPYKhakCrUgaxoVSsTw#TitleExpression.1650321732.1": "\u0633\u062D\u0628 | Deriv"
    },
    qe = {
        "ar-001": {
            translations: at,
            isRTL: !0
        }
    };
var b = C; {
    let c = class c extends b.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, qe);
            var n = this.controller;
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
                    t = this.controller,
                    n = this.idService;
                return b.Logger.startActiveSpan("OnReady", function(i) {
                    i && (i.setAttribute("code.function", "OnReady"), i.setAttribute("outsystems.function.key", "2bd89ebc-de0b-470f-8027-d0069ae5f456"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e), r.variables.is_iframe_loadingVar = !1
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _actionEventHandler$Action() {
            return this.hasOwnProperty("__actionEventHandler$Action") || (this.__actionEventHandler$Action = function(e, r) {
                var t = this.model,
                    n = this.controller,
                    i = this.idService;
                return b.Logger.startActiveSpan("ActionEventHandler", function(o) {
                    o && (o.setAttribute("code.function", "ActionEventHandler"), o.setAttribute("outsystems.function.key", "c0bac976-bfc7-41d7-964d-78a30704e830"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("ActionEventHandler"), r = n.callContext(r);
                        var d = new b.DataTypes.VariableHolder(new(n.constructor.getVariableGroupType("uae.WithdrawFlow.Withdraw.ActionEventHandler$vars")));
                        if (d.value.actionInLocal = e, d.value.actionInLocal === "back") return h.setCode(b.BuiltinFunctions.nullTextIdentifier()), b.Navigation.navigateBack(null, r, !0);
                        if (d.value.actionInLocal === "close") return h.setCode(b.BuiltinFunctions.nullTextIdentifier()), h.setTimestamp(b.BuiltinFunctions.nullTextIdentifier()), b.Navigation.navigateTo(b.Navigation.generateScreenURL("uae", "wallet", {}), b.Transitions.createTransition(b.Transitions.TransitionAnimation.None), r, !0);
                        if (d.value.actionInLocal === "info") return b.Navigation.navigateTo(b.Navigation.generateScreenURL("uae", "code-info", {
                            from: b.DataConversion.ServerDataConverter.to("withdraw", b.DataTypes.DataTypes.Text),
                            wallet_id: b.DataConversion.ServerDataConverter.to(t.variables.wallet_idIn, b.DataTypes.DataTypes.Text),
                            verification_type: b.DataConversion.ServerDataConverter.to(h.getVerificationProvider(), b.DataTypes.DataTypes.Text)
                        }), b.Transitions.createTransition(b.Transitions.TransitionAnimation.Default), r, !0)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__actionEventHandler$Action
        }
        set _actionEventHandler$Action(e) {
            this.__actionEventHandler$Action = e
        }
        get _setLoading$Action() {
            return this.hasOwnProperty("__setLoading$Action") || (this.__setLoading$Action = function(e, r) {
                var t = this.model,
                    n = this.controller,
                    i = this.idService;
                return b.Logger.startActiveSpan("SetLoading", function(o) {
                    o && (o.setAttribute("code.function", "SetLoading"), o.setAttribute("outsystems.function.key", "c3f5b252-d8ce-4b5b-b350-dc919667650b"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("SetLoading"), r = n.callContext(r);
                        var d = new b.DataTypes.VariableHolder(new(n.constructor.getVariableGroupType("uae.WithdrawFlow.Withdraw.SetLoading$vars")));
                        d.value.loadingInLocal = e, t.variables.is_iframe_loadingVar = d.value.loadingInLocal
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__setLoading$Action
        }
        set _setLoading$Action(e) {
            this.__setLoading$Action = e
        }
        get _setOTPVisibility$Action() {
            return this.hasOwnProperty("__setOTPVisibility$Action") || (this.__setOTPVisibility$Action = function(e, r) {
                var t = this.model,
                    n = this.controller,
                    i = this.idService;
                return b.Logger.startActiveSpan("SetOTPVisibility", function(o) {
                    o && (o.setAttribute("code.function", "SetOTPVisibility"), o.setAttribute("outsystems.function.key", "d015abf4-9e24-4682-9c4f-88de54a27a4e"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("SetOTPVisibility"), r = n.callContext(r);
                        var d = new b.DataTypes.VariableHolder(new(n.constructor.getVariableGroupType("uae.WithdrawFlow.Withdraw.SetOTPVisibility$vars")));
                        d.value.otp_visibleInLocal = e, t.variables.is_otp_visibleVar = d.value.otp_visibleInLocal
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__setOTPVisibility$Action
        }
        set _setOTPVisibility$Action(e) {
            this.__setOTPVisibility$Action = e
        }
        onReady$Action(e) {
            var r = this.controller;
            return b.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "2bd89ebc-de0b-470f-8027-d0069ae5f456"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        actionEventHandler$Action(e, r) {
            var t = this.controller;
            return b.Logger.startActiveSpan("ActionEventHandler__proxy", function(n) {
                n && (n.setAttribute("code.function", "ActionEventHandler"), n.setAttribute("outsystems.function.key", "c0bac976-bfc7-41d7-964d-78a30704e830"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._actionEventHandler$Action, r, e)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        setLoading$Action(e, r) {
            var t = this.controller;
            return b.Logger.startActiveSpan("SetLoading__proxy", function(n) {
                n && (n.setAttribute("code.function", "SetLoading"), n.setAttribute("outsystems.function.key", "c3f5b252-d8ce-4b5b-b350-dc919667650b"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._setLoading$Action, r, e)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        setOTPVisibility$Action(e, r) {
            var t = this.controller;
            return b.Logger.startActiveSpan("SetOTPVisibility__proxy", function(n) {
                n && (n.setAttribute("code.function", "SetOTPVisibility"), n.setAttribute("outsystems.function.key", "d015abf4-9e24-4682-9c4f-88de54a27a4e"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._setOTPVisibility$Action, r, e)
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
                    t = this.model,
                    n = this.idService;
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
                return fe.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return T.defaultTimeout
        }
    };
    s(c, "ControllerInner");
    let m = c;
    J = m, J.registerVariableGroupType("uae.WithdrawFlow.Withdraw.ActionEventHandler$vars", [{
        name: "action",
        attrName: "actionInLocal",
        mandatory: !0,
        dataType: b.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }]), J.registerVariableGroupType("uae.WithdrawFlow.Withdraw.SetLoading$vars", [{
        name: "loading",
        attrName: "loadingInLocal",
        mandatory: !0,
        dataType: b.DataTypes.DataTypes.Boolean,
        defaultValue: s(function() {
            return !1
        }, "defaultValue")
    }]), J.registerVariableGroupType("uae.WithdrawFlow.Withdraw.SetOTPVisibility$vars", [{
        name: "otp_visible",
        attrName: "otp_visibleInLocal",
        mandatory: !0,
        dataType: b.DataTypes.DataTypes.Boolean,
        defaultValue: s(function() {
            return !1
        }, "defaultValue")
    }])
}
var J, ve = new b.Controller.ControllerFactory(J, N);
var x = ae(ue());
var S = C,
    he = class he extends S.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("otp", "otpVar", "otp", !0, !1, S.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("enable_resend", "enable_resendVar", "enable_resend", !0, !1, S.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("is_email_verification", "is_email_verificationVar", "is_email_verification", !0, !1, S.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("is_phone_verification", "is_phone_verificationVar", "is_phone_verification", !0, !1, S.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("user_metadata", "user_metadataVar", "user_metadata", !0, !1, S.DataTypes.DataTypes.Record, function() {
                return S.DataTypes.ImmutableBase.getData(new se)
            }, !1, se), this.attr("HasTimerStarted", "hasTimerStartedVar", "HasTimerStarted", !0, !1, S.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("Timer", "timerVar", "Timer", !0, !1, S.DataTypes.DataTypes.Integer, function() {
                return 60
            }, !1), this.attr("is_switching", "is_switchingVar", "is_switching", !0, !1, S.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("is_loading", "is_loadingIn", "is_loading", !0, !1, S.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_is_loadingInDataFetchStatus", "_is_loadingInDataFetchStatus", "_is_loadingInDataFetchStatus", !0, !1, S.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("otp_type", "otp_typeIn", "otp_type", !0, !1, S.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_otp_typeInDataFetchStatus", "_otp_typeInDataFetchStatus", "_otp_typeInDataFetchStatus", !0, !1, S.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("error_message", "error_messageIn", "error_message", !0, !1, S.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_error_messageInDataFetchStatus", "_error_messageInDataFetchStatus", "_error_messageInDataFetchStatus", !0, !1, S.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("from_section", "from_sectionIn", "from_section", !0, !1, S.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_from_sectionInDataFetchStatus", "_from_sectionInDataFetchStatus", "_from_sectionInDataFetchStatus", !0, !1, S.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(S.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(he, "VariablesRecord");
var j = he;
j.init();
var be = class be extends S.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Form1: S.Model.ValidationWidgetRecord,
            Input_TextVar: S.Model.ValidationWidgetRecord
        }
    }
};
s(be, "WidgetsRecord");
var ye = be,
    ge = class ge extends S.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return j
        }
        static getWidgetsRecordConstructor() {
            return ye
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(c) {
            "is_loading" in c && (this.variables.is_loadingIn = c.is_loading, "_is_loadingInDataFetchStatus" in c && (this.variables._is_loadingInDataFetchStatus = c._is_loadingInDataFetchStatus)), "otp_type" in c && (this.variables.otp_typeIn = c.otp_type, "_otp_typeInDataFetchStatus" in c && (this.variables._otp_typeInDataFetchStatus = c._otp_typeInDataFetchStatus)), "error_message" in c && (this.variables.error_messageIn = c.error_message, "_error_messageInDataFetchStatus" in c && (this.variables._error_messageInDataFetchStatus = c._error_messageInDataFetchStatus)), "from_section" in c && (this.variables.from_sectionIn = c.from_section, "_from_sectionInDataFetchStatus" in c && (this.variables._from_sectionInDataFetchStatus = c._from_sectionInDataFetchStatus))
        }
    };
s(ge, "Model");
var Q = ge;
Q._hasValidationWidgetsValue = void 0;
var Xe = new S.Model.ModelFactory(Q);
var E = C,
    Te = class Te extends E.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("url", "urlVar", "url", !0, !1, E.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("is_payment_url_api_loading", "is_payment_url_api_loadingVar", "is_payment_url_api_loading", !0, !1, E.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("error_message", "error_messageVar", "error_message", !0, !1, E.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("wallet_id", "wallet_idIn", "wallet_id", !0, !1, E.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_wallet_idInDataFetchStatus", "_wallet_idInDataFetchStatus", "_wallet_idInDataFetchStatus", !0, !1, E.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("from_section", "from_sectionIn", "from_section", !0, !1, E.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_from_sectionInDataFetchStatus", "_from_sectionInDataFetchStatus", "_from_sectionInDataFetchStatus", !0, !1, E.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(E.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(Te, "VariablesRecord");
var Y = Te;
Y.init();
var pe = class pe extends E.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(pe, "WidgetsRecord");
var Ae = pe,
    B = class B extends E.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return Y
        }
        static getWidgetsRecordConstructor() {
            return Ae
        }
        static get hasValidationWidgets() {
            return B._hasValidationWidgetsValue === void 0 && (B._hasValidationWidgetsValue = void 0), B._hasValidationWidgetsValue
        }
        setInputs(c) {
            "wallet_id" in c && (this.variables.wallet_idIn = c.wallet_id, "_wallet_idInDataFetchStatus" in c && (this.variables._wallet_idInDataFetchStatus = c._wallet_idInDataFetchStatus)), "from_section" in c && (this.variables.from_sectionIn = c.from_section, "_from_sectionInDataFetchStatus" in c && (this.variables._from_sectionInDataFetchStatus = c._from_sectionInDataFetchStatus))
        }
    };
s(B, "Model");
var ee = B;
ee._hasValidationWidgetsValue = void 0;
var je = new E.Model.ModelFactory(ee);
var w = C,
    Ee = class Ee extends w.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("is_otp_visible", "is_otp_visibleVar", "is_otp_visible", !0, !1, w.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("is_iframe_loading", "is_iframe_loadingVar", "is_iframe_loading", !0, !1, w.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("wallet_id", "wallet_idIn", "wallet_id", !0, !1, w.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_wallet_idInDataFetchStatus", "_wallet_idInDataFetchStatus", "_wallet_idInDataFetchStatus", !0, !1, w.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("from_section", "from_sectionIn", "from_section", !0, !1, w.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_from_sectionInDataFetchStatus", "_from_sectionInDataFetchStatus", "_from_sectionInDataFetchStatus", !0, !1, w.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(w.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(Ee, "VariablesRecord");
var te = Ee;
te.init();
var Oe = class Oe extends w.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(Oe, "WidgetsRecord");
var Ce = Oe,
    M = class M extends w.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return te
        }
        static getWidgetsRecordConstructor() {
            return Ce
        }
        static get hasValidationWidgets() {
            return M._hasValidationWidgetsValue === void 0 && (M._hasValidationWidgetsValue = void 0 || void 0 || void 0), M._hasValidationWidgetsValue
        }
        setInputs(c) {
            "wallet_id" in c && (this.variables.wallet_idIn = w.DataConversion.ServerDataConverter.from(c.wallet_id, w.DataTypes.DataTypes.Text)), "from_section" in c && (this.variables.from_sectionIn = w.DataConversion.ServerDataConverter.from(c.from_section, w.DataTypes.DataTypes.Text))
        }
    };
s(M, "Model");
var re = M;
re._hasValidationWidgetsValue = void 0;
var we = new w.Model.ModelFactory(re);
var ie = ae(ue());
var st = {
        "BtySMdcFCE+MebzXUG18lQ#Value.105757575.1": "\u0623\u062F\u062E\u0644 \u0631\u0645\u0632 \u062A\u062D\u0642\u0642 \u0635\u0627\u0644\u062D"
    },
    et = {
        "ar-001": {
            translations: st,
            isRTL: !0
        }
    };

function Pe(m, c, l) {
    window.cashierIframeListener && (window.removeEventListener("message", window.cashierIframeListener), delete window.cashierIframeListener)
}
s(Pe, "default");

function Re(m, c, l) {
    let e = document.getElementsByClassName("cashier-iframe");
    if (e.length > 0) {
        let r = e[0];
        window.cashierIframeListener = t => {
            var i, o;
            ["https://cashier.deriv.com", "https://doughflow-test.4x.my"].includes(t.origin) && (isNaN(t.data) || ((((o = (i = r.parentElement) == null ? void 0 : i.parentElement) == null ? void 0 : o.getBoundingClientRect().height) || 0) < t.data ? r.style.height = t.data + "px" : r.style.height = "100%"))
        }, window.addEventListener("message", window.cashierIframeListener), r.addEventListener("load", () => {
            m.OnIFrameLoad(), /iP(hone|od|ad)/.test(navigator.platform) && r.parentElement && (r.parentElement.scrollTop = 0)
        })
    }
}
s(Re, "default");
var _ = C; {
    let c = class c extends _.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, et);
            var n = this.controller;
            this.clientActionProxies = {
                onIFrameLoad$Action: s(function() {
                    return n.executeActionInsideJSNode(n._onIFrameLoad$Action.bind(n), n.callContext(), function(i) {
                        return {}
                    }, function() {}, "OnIFrameLoad")
                }, "onIFrameLoad$Action")
            }, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get getPaymenturl$ServerAction() {
            return this.hasOwnProperty("_getPaymenturl$ServerAction") || (this._getPaymenturl$ServerAction = function(e, r, t, n, i, o) {
                var d = this.controller;
                return _.Logger.startActiveSpan("GetPaymenturl", function(u) {
                    return u && (u.setAttribute("code.function", "GetPaymenturl"), u.setAttribute("outsystems.function.key", "2eb3ba6a-017d-41c2-a395-d0c66f5e7797"), u.setAttribute("outsystems.function.owner.name", "uae"), u.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), u.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), _.Flow.tryFinally(function() {
                        var y = {
                            Authorization: _.DataConversion.ServerDataConverter.to(e, _.DataTypes.DataTypes.Text),
                            action: _.DataConversion.ServerDataConverter.to(r, _.DataTypes.DataTypes.Text),
                            token: _.DataConversion.ServerDataConverter.to(t, _.DataTypes.DataTypes.Text),
                            wallet_id: _.DataConversion.ServerDataConverter.to(n, _.DataTypes.DataTypes.Text),
                            lang: _.DataConversion.ServerDataConverter.to(i, _.DataTypes.DataTypes.Text)
                        };
                        return d.callServerAction("GetPaymenturl", "screenservices/uae/WithdrawFlow/WithdrawBlock/ActionGetPaymenturl", "jZ58DXVEO2cRnCanzEYphg", y, d.callContext(o), void 0, void 0, !0).then(function(v) {
                            var A = new(d.constructor.getVariableGroupType("uae.WithdrawFlow.WithdrawBlock$ActionGetPaymenturl"));
                            return A.responseOut = _.DataConversion.ServerDataConverter.from(v.Response, z), A
                        })
                    }, function() {
                        u && u.end()
                    })
                }, 0)
            }), this._getPaymenturl$ServerAction
        }
        set getPaymenturl$ServerAction(e) {
            this._getPaymenturl$ServerAction = e
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onIFrameLoad$Action() {
            return this.hasOwnProperty("__onIFrameLoad$Action") || (this.__onIFrameLoad$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    n = this.idService;
                return _.Logger.startActiveSpan("OnIFrameLoad", function(i) {
                    return i && (i.setAttribute("code.function", "OnIFrameLoad"), i.setAttribute("outsystems.function.key", "0785875e-b3ca-485c-862e-847c08feebe8"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), _.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("OnIFrameLoad"), e = t.callContext(e), _.Flow.executeAsyncFlow(function() {
                            return t.setLoading$Action(!1, e)
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__onIFrameLoad$Action
        }
        set _onIFrameLoad$Action(e) {
            this.__onIFrameLoad$Action = e
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    n = this.idService;
                return _.Logger.startActiveSpan("OnDestroy", function(i) {
                    i && (i.setAttribute("code.function", "OnDestroy"), i.setAttribute("outsystems.function.key", "2874d654-bd67-4adc-b232-9bfd48488b37"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnDestroy"), e = t.callContext(e), _.Logger.startActiveSpan("RemoveListener", function(o) {
                            o && (o.setAttribute("code.function", "RemoveListener"), o.setAttribute("outsystems.function.key", "de5d10f6-b8ae-4eb8-b868-17959c24399c"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(Pe, "RemoveListener", "OnDestroy", null, function(d) {}, {}, {})
                            } finally {
                                o && o.end()
                            }
                        }, 1)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(e) {
            this.__onDestroy$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    n = this.idService;
                return _.Logger.startActiveSpan("OnReady", function(i) {
                    return i && (i.setAttribute("code.function", "OnReady"), i.setAttribute("outsystems.function.key", "b43add84-0d0d-423b-8e13-b39bd076ff0f"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), _.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("OnReady"), e = t.callContext(e), _.Flow.executeAsyncFlow(function() {
                            return r.variables.urlVar = "", r.variables.error_messageVar = "", t.changeOTPVisibility$Action(!0, e)
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
        get _getPaymentURL$Action() {
            return this.hasOwnProperty("__getPaymentURL$Action") || (this.__getPaymentURL$Action = function(e, r) {
                var t = this.model,
                    n = this.controller,
                    i = this.idService;
                return _.Logger.startActiveSpan("GetPaymentURL", function(o) {
                    return o && (o.setAttribute("code.function", "GetPaymentURL"), o.setAttribute("outsystems.function.key", "f98ff81b-9ebb-4819-851b-ead8779b9ffd"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), _.Flow.tryFinally(function() {
                        n.ensureControllerAlive("GetPaymentURL"), r = n.callContext(r);
                        var d = new _.DataTypes.VariableHolder(new(n.constructor.getVariableGroupType("uae.WithdrawFlow.WithdrawBlock.GetPaymentURL$vars")));
                        d.value.otpInLocal = e;
                        var u = new _.DataTypes.VariableHolder,
                            y = new _.DataTypes.VariableHolder;
                        return _.Flow.executeAsyncFlow(function() {
                            return y.value = T.getAuth$Action(r), t.variables.is_payment_url_api_loadingVar = !0, t.flush(), n.getPaymenturl$ServerAction(y.value.tokenOut, "withdrawal", d.value.otpInLocal, t.variables.wallet_idIn, T.languageMapper$Action(r).charCodeOut, r).then(function(v) {
                                u.value = v
                            }).then(function() {
                                return _.Flow.executeSequence(function() {
                                    if (u.value.responseOut.dataAttr.length > 0 && _.BuiltinFunctions.length(u.value.responseOut.dataAttr.getItem(0).redirect_urlAttr) > 0) return h.setCode(_.BuiltinFunctions.nullTextIdentifier()), n.changeOTPVisibility$Action(!1, r).then(function() {
                                        return t.variables.is_payment_url_api_loadingVar = !1, n.setLoading$Action(!0, r)
                                    }).then(function() {
                                        t.variables.urlVar = u.value.responseOut.dataAttr.getItem(0).redirect_urlAttr, _.Logger.startActiveSpan("IFrameScripts", function(v) {
                                            v && (v.setAttribute("code.function", "IFrameScripts"), v.setAttribute("outsystems.function.key", "a3988ac7-dae2-42ab-a5a2-68d410981e23"), v.setAttribute("outsystems.function.owner.name", "uae"), v.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), v.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                            try {
                                                return n.safeExecuteJSNode(Re, "IFrameScripts", "GetPaymentURL", null, function(A) {}, {
                                                    OnIFrameLoad: n.clientActionProxies.onIFrameLoad$Action
                                                }, {})
                                            } finally {
                                                v && v.end()
                                            }
                                        }, 1)
                                    });
                                    t.variables.is_payment_url_api_loadingVar = !1, u.value.responseOut.errorsAttr.getCurrent(r.iterationContext).codeAttr === "RateLimit" ? t.variables.error_messageVar = u.value.responseOut.errorsAttr.getCurrent(r.iterationContext).messageAttr : t.variables.error_messageVar = _.Injector.resolve(_.ServiceNames.TranslationsService).getMessage("BtySMdcFCE+MebzXUG18lQ#Value.105757575.1", "Enter a valid verification code")
                                })
                            })
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 1)
            }), this.__getPaymentURL$Action
        }
        set _getPaymentURL$Action(e) {
            this.__getPaymentURL$Action = e
        }
        onIFrameLoad$Action(e) {
            var r = this.controller;
            return _.Logger.startActiveSpan("OnIFrameLoad__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnIFrameLoad"), t.setAttribute("outsystems.function.key", "0785875e-b3ca-485c-862e-847c08feebe8"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), _.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onIFrameLoad$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onDestroy$Action(e) {
            var r = this.controller;
            return _.Logger.startActiveSpan("OnDestroy__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnDestroy"), t.setAttribute("outsystems.function.key", "2874d654-bd67-4adc-b232-9bfd48488b37"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onDestroy$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var r = this.controller;
            return _.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "b43add84-0d0d-423b-8e13-b39bd076ff0f"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), _.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        getPaymentURL$Action(e, r) {
            var t = this.controller;
            return _.Logger.startActiveSpan("GetPaymentURL__proxy", function(n) {
                return n && (n.setAttribute("code.function", "GetPaymentURL"), n.setAttribute("outsystems.function.key", "f98ff81b-9ebb-4819-851b-ead8779b9ffd"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), _.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._getPaymentURL$Action, r, e)
                }, function() {
                    n && n.end()
                })
            }, 0)
        }
        get changeOTPVisibility$Action() {
            return this.hasOwnProperty("_changeOTPVisibility$Action") || (this._changeOTPVisibility$Action = function() {
                return Promise.resolve()
            }), this._changeOTPVisibility$Action
        }
        set changeOTPVisibility$Action(e) {
            this._changeOTPVisibility$Action = e
        }
        get setLoading$Action() {
            return this.hasOwnProperty("_setLoading$Action") || (this._setLoading$Action = function() {
                return Promise.resolve()
            }), this._setLoading$Action
        }
        set setLoading$Action(e) {
            this._setLoading$Action = e
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
                    t = this.model,
                    n = this.idService;
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
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    n = this.idService;
                return r.onDestroy$Action(e)
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
            return T.defaultTimeout
        }
    };
    s(c, "ControllerInner");
    let m = c;
    ne = m, ne.registerVariableGroupType("uae.WithdrawFlow.WithdrawBlock$ActionGetPaymenturl", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: _.DataTypes.DataTypes.Record,
        defaultValue: s(function() {
            return new z
        }, "defaultValue"),
        complexType: z
    }]), ne.registerVariableGroupType("uae.WithdrawFlow.WithdrawBlock.GetPaymentURL$vars", [{
        name: "otp",
        attrName: "otpInLocal",
        mandatory: !0,
        dataType: _.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }])
}
var ne, tt = new _.Controller.ControllerFactory(ne, N);
var g = ae(ue());
var ct = {
        "RssraGkT+0O0YFqD+v+ENg#Value": "\u0627\u0644\u062A\u062D\u0642\u0642",
        "vyrIWi6490i_ZfOvBgdPtg#Value": "\u0627\u0644\u062A\u062D\u0642\u0642 \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641",
        "goz_5o6kD0CnRAbW2HznHA#Value": "\u0627\u0644\u062A\u062D\u0642\u0642 \u0628\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",
        "rocjRR8ZhUOAdoMawkUKxw#Value": "\u0623\u0648",
        "8dRGWO7vfUu35rcPq5ZZUg#ValueExpression.1210306074.1": "\u0625\u0639\u0627\u062F\u0629 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0631\u0645\u0632 (",
        "8dRGWO7vfUu35rcPq5ZZUg#ValueExpression.3606.1": "\u062B\u0627\u0646\u064A\u0629)",
        "FQmSBoXMJUewXAby_HV7GA#Value": "\u0625\u0639\u0627\u062F\u0629 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0631\u0645\u0632",
        "XfKTopC8G0+25wFnhDNZfg#Value": "\u0644\u0645 \u064A\u0635\u0644\u0643 \u0631\u0645\u0632 \u0627\u0644\u062A\u062D\u0642\u0642\u061F",
        "OnvincbUqUC1VXdlqrEnXg#ValueExpression.24546143.1": "\u0623\u062F\u062E\u0644 \u0631\u0645\u0632 \u0645\u0643\u0648\u0646 \u0645\u0646 6 \u0623\u0631\u0642\u0627\u0645",
        "CGkYML+Ia0uXlS3_IBtY8w#ValueExpression.-525243176.1": "\u0644\u062A\u0641\u0648\u064A\u0636 \u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u0633\u062D\u0628\u060C \u0623\u062F\u062E\u0644 \u0627\u0644\u0631\u0645\u0632 \u0627\u0644\u0630\u064A \u062A\u0645 \u0625\u0631\u0633\u0627\u0644\u0647 \u0625\u0644\u0649",
        "53Mxub232UuyaqNs2QTvDA#ValueExpression.-1576264390.1": "\u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0637\u0644\u0648\u0628"
    },
    ut = {
        "8dRGWO7vfUu35rcPq5ZZUg#ValueExpression.1210306074.1": "\u0995\u09CB\u09A1 \u09AA\u09C1\u09A8\u09B0\u09BE\u09DF \u09AA\u09BE\u09A0\u09BE\u09A8",
        "8dRGWO7vfUu35rcPq5ZZUg#ValueExpression.3606.1": "\u09B8"
    },
    lt = {
        "8dRGWO7vfUu35rcPq5ZZUg#ValueExpression.1210306074.1": "Code erneut senden in",
        "8dRGWO7vfUu35rcPq5ZZUg#ValueExpression.3606.1": "sec",
        "FQmSBoXMJUewXAby_HV7GA#Value": "E-Mail erneut senden"
    },
    dt = {
        "8dRGWO7vfUu35rcPq5ZZUg#ValueExpression.1210306074.1": "Reenviar c\xF3digo en",
        "8dRGWO7vfUu35rcPq5ZZUg#ValueExpression.3606.1": "sec",
        "FQmSBoXMJUewXAby_HV7GA#Value": "Reenviar correo electr\xF3nico"
    },
    ft = {
        "8dRGWO7vfUu35rcPq5ZZUg#ValueExpression.1210306074.1": "Renvoyer le code dans",
        "8dRGWO7vfUu35rcPq5ZZUg#ValueExpression.3606.1": "sec",
        "FQmSBoXMJUewXAby_HV7GA#Value": "Renvoie l'e-mail"
    },
    mt = {
        "8dRGWO7vfUu35rcPq5ZZUg#ValueExpression.1210306074.1": "Invia nuovamente il codice in",
        "8dRGWO7vfUu35rcPq5ZZUg#ValueExpression.3606.1": "sec",
        "FQmSBoXMJUewXAby_HV7GA#Value": "Invia nuovamente l'email"
    },
    vt = {
        "8dRGWO7vfUu35rcPq5ZZUg#ValueExpression.1210306074.1": "\uCF54\uB4DC \uC7AC\uC804\uC1A1",
        "8dRGWO7vfUu35rcPq5ZZUg#ValueExpression.3606.1": "\u3145"
    },
    yt = {
        "8dRGWO7vfUu35rcPq5ZZUg#ValueExpression.1210306074.1": "Wy\u015Blij kod ponownie w",
        "8dRGWO7vfUu35rcPq5ZZUg#ValueExpression.3606.1": "sec",
        "FQmSBoXMJUewXAby_HV7GA#Value": "Wy\u015Blij ponownie e-mail"
    },
    _t = {
        "8dRGWO7vfUu35rcPq5ZZUg#ValueExpression.1210306074.1": "Reenviar c\xF3digo em",
        "8dRGWO7vfUu35rcPq5ZZUg#ValueExpression.3606.1": "seg",
        "FQmSBoXMJUewXAby_HV7GA#Value": "Reenviar email"
    },
    ht = {
        "8dRGWO7vfUu35rcPq5ZZUg#ValueExpression.1210306074.1": "\u041F\u043E\u0432\u0442\u043E\u0440\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u0434 \u0432",
        "8dRGWO7vfUu35rcPq5ZZUg#ValueExpression.3606.1": "\u0441\u0435\u043A",
        "FQmSBoXMJUewXAby_HV7GA#Value": "\u041F\u0435\u0440\u0435\u0441\u043B\u0430\u0442\u044C \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0435 \u043F\u0438\u0441\u044C\u043C\u043E"
    },
    bt = {
        "8dRGWO7vfUu35rcPq5ZZUg#ValueExpression.1210306074.1": "\u0D9A\u0DDA\u0DAD\u0DBA \u0DB1\u0DD0\u0DC0\u0DAD \u0DBA\u0DC0\u0DB1\u0DCA\u0DB1",
        "8dRGWO7vfUu35rcPq5ZZUg#ValueExpression.3606.1": "\u0DC3"
    },
    gt = {
        "8dRGWO7vfUu35rcPq5ZZUg#ValueExpression.1210306074.1": "Tuma tena msimbo katika",
        "8dRGWO7vfUu35rcPq5ZZUg#ValueExpression.3606.1": "s"
    },
    At = {
        "8dRGWO7vfUu35rcPq5ZZUg#ValueExpression.1210306074.1": "\u0E2A\u0E48\u0E07\u0E23\u0E2B\u0E31\u0E2A\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07\u0E43\u0E19",
        "8dRGWO7vfUu35rcPq5ZZUg#ValueExpression.3606.1": "\u0E2A"
    },
    St = {
        "8dRGWO7vfUu35rcPq5ZZUg#ValueExpression.1210306074.1": "Kodu yeniden g\xF6nder",
        "8dRGWO7vfUu35rcPq5ZZUg#ValueExpression.3606.1": "s"
    },
    Tt = {
        "8dRGWO7vfUu35rcPq5ZZUg#ValueExpression.1210306074.1": "G\u1EEDi l\u1EA1i m\xE3 trong",
        "8dRGWO7vfUu35rcPq5ZZUg#ValueExpression.3606.1": "s"
    },
    pt = {
        "8dRGWO7vfUu35rcPq5ZZUg#ValueExpression.1210306074.1": "\u5728\u4E2D\u91CD\u65B0\u53D1\u9001\u4EE3\u7801",
        "8dRGWO7vfUu35rcPq5ZZUg#ValueExpression.3606.1": "\u79D2"
    },
    Ct = {
        "8dRGWO7vfUu35rcPq5ZZUg#ValueExpression.1210306074.1": "\u5728\u4E2D\u91CD\u65B0\u767C\u9001\u4EE3\u78BC",
        "8dRGWO7vfUu35rcPq5ZZUg#ValueExpression.3606.1": "\u79D2"
    },
    rt = {
        "ar-001": {
            translations: ct,
            isRTL: !0
        },
        "bn-BD": {
            translations: ut,
            isRTL: !1
        },
        "de-DE": {
            translations: lt,
            isRTL: !1
        },
        "es-ES": {
            translations: dt,
            isRTL: !1
        },
        "fr-FR": {
            translations: ft,
            isRTL: !1
        },
        "it-IT": {
            translations: mt,
            isRTL: !1
        },
        "ko-KR": {
            translations: vt,
            isRTL: !1
        },
        "pl-PL": {
            translations: yt,
            isRTL: !1
        },
        "pt-PT": {
            translations: _t,
            isRTL: !1
        },
        "ru-RU": {
            translations: ht,
            isRTL: !1
        },
        "si-LK": {
            translations: bt,
            isRTL: !1
        },
        "sw-TZ": {
            translations: gt,
            isRTL: !1
        },
        "th-TH": {
            translations: At,
            isRTL: !1
        },
        "tr-TR": {
            translations: St,
            isRTL: !1
        },
        "vi-VN": {
            translations: Tt,
            isRTL: !1
        },
        "zh-CN": {
            translations: pt,
            isRTL: !1
        },
        "zh-TW": {
            translations: Ct,
            isRTL: !1
        }
    };

function Ie(m, c, l, e) {
    let r = s(() => {
        if (!m.TimeStamp) return 60;
        let t = new Date(m.TimeStamp),
            i = new Date - t,
            o = Math.floor(i / 1e3);
        return o > 60 ? 60 : 60 - o
    }, "getTimeElapsed");
    m.TimeElapsed = r()
}
s(Ie, "default");

function Ve(m, c, l, e) {
    let r = sessionStorage.getItem("previousUrl");
    m.hasPreviousUrl = r !== null && r !== ""
}
s(Ve, "default");

function De(m, c, l) {
    function e(r) {
        var t = document.querySelector('meta[name="viewport"]');
        t ? t.content = r : (t = document.createElement("meta"), t.name = "viewport", t.content = r, document.head.appendChild(t))
    }
    s(e, "updateViewportMeta"), e("width=device-width, initial-scale=1.0, maximum-scale=1.0")
}
s(De, "default");

function xe(m, c, l, e) {
    document.getElementById(m.WidgetID).addEventListener("paste", t => {
        let n = new RegExp(/^\d{1,6}$/),
            i = t.clipboardData.getData("text") || window.clipboardData.getData("Text");
        n.test(i) || t.preventDefault()
    })
}
s(xe, "default");

function $e(m, c, l) {
    window.activeIntervalRef && (clearInterval(window.activeIntervalRef), window.activeIntervalRef = null)
}
s($e, "default");

function ke(m, c, l, e) {
    let r = sessionStorage.getItem("previousUrl"),
        t = r !== null && r !== "",
        n = performance.getEntriesByType("navigation")[0].type == "reload",
        i = performance.getEntriesByType("navigation")[0].type == "navigate" && document.referrer == window.location.href;
    m.PreventTimerRun = !t
}
s(ke, "default");

function Le(m, c, l, e) {
    let r;
    sessionStorage.removeItem("previousUrl");
    let t = s(d => {
            let u = d;
            return () => {
                r = setInterval(() => {
                    u <= 0 ? (c.SetHasTimerStarted(!1), document.querySelector(".resend-button") && c.SetTimer(d), clearInterval(r)) : document.querySelector(".resend-button") && (c.SetTimer(u - 1), u -= 1)
                }, 1e3)
            }
        }, "withTimer"),
        i = s(() => {
            if (!m.TimeElapse) return 60;
            let d = new Date(m.TimeElapse),
                y = new Date - d,
                v = Math.floor(y / 1e3);
            return v > 60 ? 60 : 60 - v
        }, "getTimeElapsed")();
    t(i)(), c.SetHasTimerStarted(!0), m.TimeElapse ? m.TimeStamp = m.TimeElapse : m.TimeStamp = new Date().toISOString(), window.activeIntervalRef = r
}
s(Le, "default");

function Ne(m, c, l) {
    let e = ["Backspace", "ArrowLeft", "ArrowRight", "Delete", "Enter", "Tab"];
    !/^[0-9]$/.test(event.key) && !e.includes(event.key) && !((event.ctrlKey || event.metaKey) && event.key === "v") && event.preventDefault()
}
s(Ne, "default");
var a = C; {
    let c = class c extends a.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, rt);
            var n = this.controller;
            this.clientActionProxies = {
                setHasTimerStarted$Action: s(function(i) {
                    return i = i === void 0 ? !1 : i, n.executeActionInsideJSNode(n._setHasTimerStarted$Action.bind(n, a.DataConversion.JSNodeParamConverter.from(i, a.DataTypes.DataTypes.Boolean)), n.callContext(), function(o) {
                        return {}
                    }, function() {}, "SetHasTimerStarted")
                }, "setHasTimerStarted$Action"),
                setTimer$Action: s(function(i) {
                    return i = i === void 0 ? 0 : i, n.executeActionInsideJSNode(n._setTimer$Action.bind(n, a.DataConversion.JSNodeParamConverter.from(i, a.DataTypes.DataTypes.Integer)), n.callContext(), function(o) {
                        return {}
                    }, function() {}, "SetTimer")
                }, "setTimer$Action")
            }, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get postReauthenticate$ServerAction() {
            return this.hasOwnProperty("_postReauthenticate$ServerAction") || (this._postReauthenticate$ServerAction = function(e, r, t) {
                var n = this.controller;
                return a.Logger.startActiveSpan("PostReauthenticate", function(i) {
                    return i && (i.setAttribute("code.function", "PostReauthenticate"), i.setAttribute("outsystems.function.key", "5e977e4b-8319-4ac8-9d22-8d42df2cae9e"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), a.Flow.tryFinally(function() {
                        var o = {
                            Authorization: a.DataConversion.ServerDataConverter.to(e, a.DataTypes.DataTypes.Text),
                            Request: a.DataConversion.ServerDataConverter.to(r, a.DataTypes.DataTypes.Record)
                        };
                        return n.callServerAction("PostReauthenticate", "screenservices/uae/Common/OTPBlock/ActionPostReauthenticate", "S69aQEfUk0OI0ZMkCVpxSA", o, n.callContext(t), void 0, void 0, !0).then(function(d) {
                            var u = new(n.constructor.getVariableGroupType("uae.Common.OTPBlock$ActionPostReauthenticate"));
                            return u.responseOut = a.DataConversion.ServerDataConverter.from(d.Response, q), u
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 0)
            }), this._postReauthenticate$ServerAction
        }
        set postReauthenticate$ServerAction(e) {
            this._postReauthenticate$ServerAction = e
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _setTimer$Action() {
            return this.hasOwnProperty("__setTimer$Action") || (this.__setTimer$Action = function(e, r) {
                var t = this.model,
                    n = this.controller,
                    i = this.idService;
                return a.Logger.startActiveSpan("SetTimer", function(o) {
                    o && (o.setAttribute("code.function", "SetTimer"), o.setAttribute("outsystems.function.key", "18cff6c4-9db3-4118-80f0-e646116cce73"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("SetTimer"), r = n.callContext(r);
                        var d = new a.DataTypes.VariableHolder(new(n.constructor.getVariableGroupType("uae.Common.OTPBlock.SetTimer$vars")));
                        d.value.newTimerInLocal = e, t.variables.timerVar = d.value.newTimerInLocal
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__setTimer$Action
        }
        set _setTimer$Action(e) {
            this.__setTimer$Action = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    n = this.idService;
                return a.Logger.startActiveSpan("OnInitialize", function(i) {
                    i && (i.setAttribute("code.function", "OnInitialize"), i.setAttribute("outsystems.function.key", "190da047-6af3-464e-a73c-551a791525f2"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e);
                        var o = new a.DataTypes.VariableHolder;
                        o.value = a.Logger.startActiveSpan("JavaScript1", function(d) {
                            d && (d.setAttribute("code.function", "JavaScript1"), d.setAttribute("outsystems.function.key", "f0f16186-d560-49ce-883c-6d1254e9c413"), d.setAttribute("outsystems.function.owner.name", "uae"), d.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), d.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(Ie, "JavaScript1", "OnInitialize", {
                                    TimeStamp: a.DataConversion.JSNodeParamConverter.to(h.getTimestamp(), a.DataTypes.DataTypes.Text),
                                    TimeElapsed: a.DataConversion.JSNodeParamConverter.to(0, a.DataTypes.DataTypes.Integer)
                                }, function(u) {
                                    var y = new(t.constructor.getVariableGroupType("uae.Common.OTPBlock.OnInitialize$javaScript1JSResult"));
                                    return y.timeElapsedOut = a.DataConversion.JSNodeParamConverter.from(u.TimeElapsed, a.DataTypes.DataTypes.Integer), y
                                }, {}, {})
                            } finally {
                                d && d.end()
                            }
                        }, 1), r.variables.timerVar = o.value.timeElapsedOut
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        get _sendCode$Action() {
            return this.hasOwnProperty("__sendCode$Action") || (this.__sendCode$Action = function(e, r) {
                var t = this.model,
                    n = this.controller,
                    i = this.idService;
                return a.Logger.startActiveSpan("SendCode", function(o) {
                    return o && (o.setAttribute("code.function", "SendCode"), o.setAttribute("outsystems.function.key", "2c7b5e32-20de-405e-9235-eb547a7fdf2e"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                        n.ensureControllerAlive("SendCode"), r = n.callContext(r);
                        var d = new a.DataTypes.VariableHolder(new(n.constructor.getVariableGroupType("uae.Common.OTPBlock.SendCode$vars")));
                        d.value.hasPreviousUrlInLocal = e;
                        var u = new a.DataTypes.VariableHolder,
                            y = new a.DataTypes.VariableHolder,
                            v = new a.DataTypes.VariableHolder;
                        return a.Flow.executeAsyncFlow(function() {
                            return t.variables.is_loadingIn = !0, t.variables.enable_resendVar = !1, y.value = T.getUserMetaData$Action(r), t.variables.user_metadataVar = y.value.userMetadataOut, a.Flow.executeSequence(function() {
                                if (d.value.hasPreviousUrlInLocal) return v.value = T.getAuth$Action(r), t.flush(), n.postReauthenticate$ServerAction(v.value.tokenOut, (function() {
                                    var A = new ce;
                                    return A.emailAttr = h.getVerificationProvider() === "email" ? y.value.userMetadataOut.emailAttr : "", A.phoneAttr = h.getVerificationProvider() === "phone" ? y.value.userMetadataOut.phoneAttr !== a.BuiltinFunctions.nullTextIdentifier() && a.BuiltinFunctions.substr(y.value.userMetadataOut.phoneAttr, 0, 1) !== "+" ? "+" + y.value.userMetadataOut.phoneAttr : y.value.userMetadataOut.phoneAttr : "", A.otp_typeAttr = t.variables.otp_typeIn, A.preferred_languageAttr = a.BuiltinFunctions.toLower(T.languageMapper$Action(r).charCodeOut), A
                                })(), r).then(function(A) {
                                    u.value = A
                                }).then(function() {
                                    if (u.value.responseOut.errorsAttr.getCurrent(r.iterationContext).codeAttr === "RateLimit") return t.variables.is_loadingIn = !1, t.variables.error_messageIn = u.value.responseOut.errorsAttr.getCurrent(r.iterationContext).messageAttr, a.Flow.returnAsync()
                                })
                            }).then(function() {
                                t.variables.is_loadingIn = !1
                            })
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 1)
            }), this.__sendCode$Action
        }
        set _sendCode$Action(e) {
            this.__sendCode$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    n = this.idService;
                return a.Logger.startActiveSpan("OnReady", function(i) {
                    i && (i.setAttribute("code.function", "OnReady"), i.setAttribute("outsystems.function.key", "3b8c4d54-8d99-4e78-938c-3b14e787874d"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var o = new a.DataTypes.VariableHolder,
                            d = new a.DataTypes.VariableHolder,
                            u = new a.DataTypes.VariableHolder;
                        r.variables.enable_resendVar = !1, r.variables.is_loadingIn = !1, r.variables.otpVar = h.getCode() !== a.BuiltinFunctions.nullTextIdentifier() ? h.getCode() : a.BuiltinFunctions.nullTextIdentifier(), u.value = a.Logger.startActiveSpan("JavaScript1", function(y) {
                            y && (y.setAttribute("code.function", "JavaScript1"), y.setAttribute("outsystems.function.key", "481dde25-5ca6-4fd4-9812-9fa753b84f27"), y.setAttribute("outsystems.function.owner.name", "uae"), y.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), y.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(Ve, "JavaScript1", "OnReady", {
                                    hasPreviousUrl: a.DataConversion.JSNodeParamConverter.to(!1, a.DataTypes.DataTypes.Boolean)
                                }, function(v) {
                                    var A = new(t.constructor.getVariableGroupType("uae.Common.OTPBlock.OnReady$javaScript1JSResult"));
                                    return A.hasPreviousUrlOut = a.DataConversion.JSNodeParamConverter.from(v.hasPreviousUrl, a.DataTypes.DataTypes.Boolean), A
                                }, {}, {})
                            } finally {
                                y && y.end()
                            }
                        }, 1), d.value = T.getUserMetaData$Action(e), r.variables.user_metadataVar = d.value.userMetadataOut, o.value = L.setFocus$Action(n.getId("Input_TextVar"), e), T.triggerNextOnKeyboardEnter$Action("Input_TextVar", "Verify_btn", e), t._startTimer$Action(!1, e), a.Logger.startActiveSpan("UpdateMetatag", function(y) {
                            y && (y.setAttribute("code.function", "UpdateMetatag"), y.setAttribute("outsystems.function.key", "72aa7d86-ae55-4ce9-b91f-23db288c812e"), y.setAttribute("outsystems.function.owner.name", "uae"), y.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), y.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(De, "UpdateMetatag", "OnReady", null, function(v) {}, {}, {})
                            } finally {
                                y && y.end()
                            }
                        }, 1), t._removeJunk$Action(e)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _removeJunk$Action() {
            return this.hasOwnProperty("__removeJunk$Action") || (this.__removeJunk$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    n = this.idService;
                return a.Logger.startActiveSpan("RemoveJunk", function(i) {
                    i && (i.setAttribute("code.function", "RemoveJunk"), i.setAttribute("outsystems.function.key", "4802eef8-d288-4ab1-987c-c5447030afe2"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("RemoveJunk"), e = t.callContext(e), a.Logger.startActiveSpan("RemoveJunk", function(o) {
                            o && (o.setAttribute("code.function", "RemoveJunk"), o.setAttribute("outsystems.function.key", "e9d8f3f6-3d27-4ca4-85fb-6f8b6cdea1f1"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(xe, "RemoveJunk", "RemoveJunk", {
                                    WidgetID: a.DataConversion.JSNodeParamConverter.to(n.getId("Input_TextVar"), a.DataTypes.DataTypes.Text)
                                }, function(d) {}, {}, {})
                            } finally {
                                o && o.end()
                            }
                        }, 1)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__removeJunk$Action
        }
        set _removeJunk$Action(e) {
            this.__removeJunk$Action = e
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    n = this.idService;
                return a.Logger.startActiveSpan("OnDestroy", function(i) {
                    i && (i.setAttribute("code.function", "OnDestroy"), i.setAttribute("outsystems.function.key", "4cb7b81c-14a5-46e2-bc5b-b90e18049b1b"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnDestroy"), e = t.callContext(e), t._onClearTimer$Action(e), L.layoutDestroy$Action(e)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(e) {
            this.__onDestroy$Action = e
        }
        get _onClearTimer$Action() {
            return this.hasOwnProperty("__onClearTimer$Action") || (this.__onClearTimer$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    n = this.idService;
                return a.Logger.startActiveSpan("OnClearTimer", function(i) {
                    i && (i.setAttribute("code.function", "OnClearTimer"), i.setAttribute("outsystems.function.key", "574a63d6-9481-4619-a2ca-205a9dc28ee0"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnClearTimer"), e = t.callContext(e), a.Logger.startActiveSpan("JavaScript1", function(o) {
                            o && (o.setAttribute("code.function", "JavaScript1"), o.setAttribute("outsystems.function.key", "dccc1ff1-71e9-44a9-80d2-36c9aa4a3e43"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode($e, "JavaScript1", "OnClearTimer", null, function(d) {}, {}, {})
                            } finally {
                                o && o.end()
                            }
                        }, 1)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onClearTimer$Action
        }
        set _onClearTimer$Action(e) {
            this.__onClearTimer$Action = e
        }
        get _verifyWithEmailPhoneNumberOnClick$Action() {
            return this.hasOwnProperty("__verifyWithEmailPhoneNumberOnClick$Action") || (this.__verifyWithEmailPhoneNumberOnClick$Action = function(e, r) {
                var t = this.model,
                    n = this.controller,
                    i = this.idService;
                return a.Logger.startActiveSpan("VerifyWithEmailPhoneNumberOnClick", function(o) {
                    return o && (o.setAttribute("code.function", "VerifyWithEmailPhoneNumberOnClick"), o.setAttribute("outsystems.function.key", "949cf54d-45ef-4864-b511-680c266c72c1"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                        n.ensureControllerAlive("VerifyWithEmailPhoneNumberOnClick"), r = n.callContext(r);
                        var d = new a.DataTypes.VariableHolder(new(n.constructor.getVariableGroupType("uae.Common.OTPBlock.VerifyWithEmailPhoneNumberOnClick$vars")));
                        return d.value.verificationTypeInLocal = e, a.Flow.executeAsyncFlow(function() {
                            return h.setVerificationProvider(d.value.verificationTypeInLocal), t.variables.is_switchingVar = !0, n._resendCode$Action(r).then(function() {
                                t.variables.is_switchingVar = !1
                            })
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 1)
            }), this.__verifyWithEmailPhoneNumberOnClick$Action
        }
        set _verifyWithEmailPhoneNumberOnClick$Action(e) {
            this.__verifyWithEmailPhoneNumberOnClick$Action = e
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    n = this.idService;
                return a.Logger.startActiveSpan("OnParametersChanged", function(i) {
                    i && (i.setAttribute("code.function", "OnParametersChanged"), i.setAttribute("outsystems.function.key", "a753fc80-3c08-4734-a77a-8031c815e039"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnParametersChanged"), e = t.callContext(e), a.BuiltinFunctions.length(r.variables.error_messageIn) > 0 ? (r.widgets.get(n.getId("Input_TextVar")).validAttr = !1, r.widgets.get(n.getId("Input_TextVar")).validationMessageAttr = r.variables.error_messageIn) : (r.widgets.get(n.getId("Input_TextVar")).validAttr = !0, r.widgets.get(n.getId("Input_TextVar")).validationMessageAttr = "")
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(e) {
            this.__onParametersChanged$Action = e
        }
        get _setHasTimerStarted$Action() {
            return this.hasOwnProperty("__setHasTimerStarted$Action") || (this.__setHasTimerStarted$Action = function(e, r) {
                var t = this.model,
                    n = this.controller,
                    i = this.idService;
                return a.Logger.startActiveSpan("SetHasTimerStarted", function(o) {
                    o && (o.setAttribute("code.function", "SetHasTimerStarted"), o.setAttribute("outsystems.function.key", "c1378ba7-fb33-44af-8fb6-12f737733ddd"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("SetHasTimerStarted"), r = n.callContext(r);
                        var d = new a.DataTypes.VariableHolder(new(n.constructor.getVariableGroupType("uae.Common.OTPBlock.SetHasTimerStarted$vars")));
                        d.value.hasTimerStarted2InLocal = e, t.variables.hasTimerStartedVar = d.value.hasTimerStarted2InLocal, d.value.hasTimerStarted2InLocal || h.setTimestamp(a.BuiltinFunctions.nullTextIdentifier())
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__setHasTimerStarted$Action
        }
        set _setHasTimerStarted$Action(e) {
            this.__setHasTimerStarted$Action = e
        }
        get _startTimer$Action() {
            return this.hasOwnProperty("__startTimer$Action") || (this.__startTimer$Action = function(e, r) {
                var t = this.model,
                    n = this.controller,
                    i = this.idService;
                return a.Logger.startActiveSpan("StartTimer", function(o) {
                    o && (o.setAttribute("code.function", "StartTimer"), o.setAttribute("outsystems.function.key", "cff3c7eb-c564-44a8-a9f9-ae7fa716a549"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("StartTimer"), r = n.callContext(r);
                        var d = new a.DataTypes.VariableHolder(new(n.constructor.getVariableGroupType("uae.Common.OTPBlock.StartTimer$vars")));
                        d.value.is_triggeredInLocal = e;
                        var u = new a.DataTypes.VariableHolder,
                            y = new a.DataTypes.VariableHolder;
                        u.value = a.Logger.startActiveSpan("JavaScript1", function(v) {
                            v && (v.setAttribute("code.function", "JavaScript1"), v.setAttribute("outsystems.function.key", "ae9ea1bb-d0a0-4eb7-b9a4-53115c0780f0"), v.setAttribute("outsystems.function.owner.name", "uae"), v.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), v.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return n.safeExecuteJSNode(ke, "JavaScript1", "StartTimer", {
                                    PreventTimerRun: a.DataConversion.JSNodeParamConverter.to(!1, a.DataTypes.DataTypes.Boolean)
                                }, function(A) {
                                    var f = new(n.constructor.getVariableGroupType("uae.Common.OTPBlock.StartTimer$javaScript1JSResult"));
                                    return f.preventTimerRunOut = a.DataConversion.JSNodeParamConverter.from(A.PreventTimerRun, a.DataTypes.DataTypes.Boolean), f
                                }, {}, {})
                            } finally {
                                v && v.end()
                            }
                        }, 1), (t.variables.from_sectionIn === "banner" && h.getTimestamp() === a.BuiltinFunctions.nullTextIdentifier() || u.value.preventTimerRunOut && h.getTimestamp() === a.BuiltinFunctions.nullTextIdentifier()) && !d.value.is_triggeredInLocal || (y.value = a.Logger.startActiveSpan("TimerFunc", function(v) {
                            v && (v.setAttribute("code.function", "TimerFunc"), v.setAttribute("outsystems.function.key", "b5bdc985-8e62-4146-800a-1ef5177f6e91"), v.setAttribute("outsystems.function.owner.name", "uae"), v.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), v.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return n.safeExecuteJSNode(Le, "TimerFunc", "StartTimer", {
                                    TimeElapse: a.DataConversion.JSNodeParamConverter.to(h.getTimestamp(), a.DataTypes.DataTypes.Text),
                                    IsDesktop: a.DataConversion.JSNodeParamConverter.to(L.isDesktop$Action(r).isDesktopOut, a.DataTypes.DataTypes.Boolean),
                                    TimeStamp: a.DataConversion.JSNodeParamConverter.to("", a.DataTypes.DataTypes.Text)
                                }, function(A) {
                                    var f = new(n.constructor.getVariableGroupType("uae.Common.OTPBlock.StartTimer$timerFuncJSResult"));
                                    return f.timeStampOut = a.DataConversion.JSNodeParamConverter.from(A.TimeStamp, a.DataTypes.DataTypes.Text), f
                                }, {
                                    SetHasTimerStarted: n.clientActionProxies.setHasTimerStarted$Action,
                                    SetTimer: n.clientActionProxies.setTimer$Action
                                }, {})
                            } finally {
                                v && v.end()
                            }
                        }, 1), h.setTimestamp(y.value.timeStampOut))
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__startTimer$Action
        }
        set _startTimer$Action(e) {
            this.__startTimer$Action = e
        }
        get _onKeypress$Action() {
            return this.hasOwnProperty("__onKeypress$Action") || (this.__onKeypress$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    n = this.idService;
                return a.Logger.startActiveSpan("OnKeypress", function(i) {
                    i && (i.setAttribute("code.function", "OnKeypress"), i.setAttribute("outsystems.function.key", "d01e10bd-e895-43ed-8e49-40f2e370b7d3"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnKeypress"), e = t.callContext(e), a.Logger.startActiveSpan("Validate", function(o) {
                            o && (o.setAttribute("code.function", "Validate"), o.setAttribute("outsystems.function.key", "b5446015-c3a5-4531-bf69-ed32e749a1ac"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(Ne, "Validate", "OnKeypress", null, function(d) {}, {}, {})
                            } finally {
                                o && o.end()
                            }
                        }, 1), h.setCode(r.variables.otpVar)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onKeypress$Action
        }
        set _onKeypress$Action(e) {
            this.__onKeypress$Action = e
        }
        get _inputOnChange$Action() {
            return this.hasOwnProperty("__inputOnChange$Action") || (this.__inputOnChange$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    n = this.idService;
                return a.Logger.startActiveSpan("InputOnChange", function(i) {
                    i && (i.setAttribute("code.function", "InputOnChange"), i.setAttribute("outsystems.function.key", "e1b2f875-bd0a-409c-b8f2-d7a84f241eb8"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("InputOnChange"), e = t.callContext(e), r.widgets.get(n.getId("Input_TextVar")).validAttr = !0, r.widgets.get(n.getId("Input_TextVar")).validationMessageAttr = ""
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__inputOnChange$Action
        }
        set _inputOnChange$Action(e) {
            this.__inputOnChange$Action = e
        }
        get _resendCode$Action() {
            return this.hasOwnProperty("__resendCode$Action") || (this.__resendCode$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    n = this.idService;
                return a.Logger.startActiveSpan("ResendCode", function(i) {
                    return i && (i.setAttribute("code.function", "ResendCode"), i.setAttribute("outsystems.function.key", "fa38a548-668d-4839-9d36-81ff883c9b47"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                        t.ensureControllerAlive("ResendCode"), e = t.callContext(e);
                        var o = new a.DataTypes.VariableHolder,
                            d = new a.DataTypes.VariableHolder;
                        return a.Flow.executeAsyncFlow(function() {
                            return r.variables.enable_resendVar = !1, r.variables.from_sectionIn = a.BuiltinFunctions.nullTextIdentifier(), r.widgets.get(n.getId("Input_TextVar")).validAttr = !0, r.widgets.get(n.getId("Input_TextVar")).validationMessageAttr = a.BuiltinFunctions.nullTextIdentifier(), d.value = T.getAuth$Action(e), r.flush(), t.postReauthenticate$ServerAction(d.value.tokenOut, (function() {
                                var u = new ce;
                                return u.emailAttr = h.getVerificationProvider() === "email" ? h.getemail() : "", u.phoneAttr = h.getVerificationProvider() === "phone" ? h.getphone() !== a.BuiltinFunctions.nullTextIdentifier() && a.BuiltinFunctions.substr(h.getphone(), 0, 1) !== "+" ? "+" + h.getphone() : h.getphone() : "", u.otp_typeAttr = r.variables.otp_typeIn, u.preferred_languageAttr = a.BuiltinFunctions.toLower(T.languageMapper$Action(e).charCodeOut), u
                            })(), e).then(function(u) {
                                o.value = u
                            }).then(function() {
                                (T.getFeatureFlag$Action("PhoneNumber", e).shouldEnableOut || T.getFeatureFlag$Action("Password", e).shouldEnableOut) && o.value.responseOut.errorsAttr.getCurrent(e.iterationContext).codeAttr === "RateLimit" ? (r.widgets.get(n.getId("Input_TextVar")).validAttr = !1, r.widgets.get(n.getId("Input_TextVar")).validationMessageAttr = o.value.responseOut.errorsAttr.getCurrent(e.iterationContext).messageAttr) : t._startTimer$Action(!0, e)
                            })
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__resendCode$Action
        }
        set _resendCode$Action(e) {
            this.__resendCode$Action = e
        }
        setTimer$Action(e, r) {
            var t = this.controller;
            return a.Logger.startActiveSpan("SetTimer__proxy", function(n) {
                n && (n.setAttribute("code.function", "SetTimer"), n.setAttribute("outsystems.function.key", "18cff6c4-9db3-4118-80f0-e646116cce73"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._setTimer$Action, r, e)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        onInitialize$Action(e) {
            var r = this.controller;
            return a.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "190da047-6af3-464e-a73c-551a791525f2"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onInitialize$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        sendCode$Action(e, r) {
            var t = this.controller;
            return a.Logger.startActiveSpan("SendCode__proxy", function(n) {
                return n && (n.setAttribute("code.function", "SendCode"), n.setAttribute("outsystems.function.key", "2c7b5e32-20de-405e-9235-eb547a7fdf2e"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._sendCode$Action, r, e)
                }, function() {
                    n && n.end()
                })
            }, 0)
        }
        onReady$Action(e) {
            var r = this.controller;
            return a.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "3b8c4d54-8d99-4e78-938c-3b14e787874d"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        removeJunk$Action(e) {
            var r = this.controller;
            return a.Logger.startActiveSpan("RemoveJunk__proxy", function(t) {
                t && (t.setAttribute("code.function", "RemoveJunk"), t.setAttribute("outsystems.function.key", "4802eef8-d288-4ab1-987c-c5447030afe2"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._removeJunk$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onDestroy$Action(e) {
            var r = this.controller;
            return a.Logger.startActiveSpan("OnDestroy__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnDestroy"), t.setAttribute("outsystems.function.key", "4cb7b81c-14a5-46e2-bc5b-b90e18049b1b"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onDestroy$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onClearTimer$Action(e) {
            var r = this.controller;
            return a.Logger.startActiveSpan("OnClearTimer__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnClearTimer"), t.setAttribute("outsystems.function.key", "574a63d6-9481-4619-a2ca-205a9dc28ee0"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onClearTimer$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        verifyWithEmailPhoneNumberOnClick$Action(e, r) {
            var t = this.controller;
            return a.Logger.startActiveSpan("VerifyWithEmailPhoneNumberOnClick__proxy", function(n) {
                return n && (n.setAttribute("code.function", "VerifyWithEmailPhoneNumberOnClick"), n.setAttribute("outsystems.function.key", "949cf54d-45ef-4864-b511-680c266c72c1"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._verifyWithEmailPhoneNumberOnClick$Action, r, e)
                }, function() {
                    n && n.end()
                })
            }, 0)
        }
        onParametersChanged$Action(e) {
            var r = this.controller;
            return a.Logger.startActiveSpan("OnParametersChanged__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnParametersChanged"), t.setAttribute("outsystems.function.key", "a753fc80-3c08-4734-a77a-8031c815e039"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onParametersChanged$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        setHasTimerStarted$Action(e, r) {
            var t = this.controller;
            return a.Logger.startActiveSpan("SetHasTimerStarted__proxy", function(n) {
                n && (n.setAttribute("code.function", "SetHasTimerStarted"), n.setAttribute("outsystems.function.key", "c1378ba7-fb33-44af-8fb6-12f737733ddd"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._setHasTimerStarted$Action, r, e)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        startTimer$Action(e, r) {
            var t = this.controller;
            return a.Logger.startActiveSpan("StartTimer__proxy", function(n) {
                n && (n.setAttribute("code.function", "StartTimer"), n.setAttribute("outsystems.function.key", "cff3c7eb-c564-44a8-a9f9-ae7fa716a549"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._startTimer$Action, r, e)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        onKeypress$Action(e) {
            var r = this.controller;
            return a.Logger.startActiveSpan("OnKeypress__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnKeypress"), t.setAttribute("outsystems.function.key", "d01e10bd-e895-43ed-8e49-40f2e370b7d3"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onKeypress$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        inputOnChange$Action(e) {
            var r = this.controller;
            return a.Logger.startActiveSpan("InputOnChange__proxy", function(t) {
                t && (t.setAttribute("code.function", "InputOnChange"), t.setAttribute("outsystems.function.key", "e1b2f875-bd0a-409c-b8f2-d7a84f241eb8"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._inputOnChange$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        resendCode$Action(e) {
            var r = this.controller;
            return a.Logger.startActiveSpan("ResendCode__proxy", function(t) {
                return t && (t.setAttribute("code.function", "ResendCode"), t.setAttribute("outsystems.function.key", "fa38a548-668d-4839-9d36-81ff883c9b47"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._resendCode$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        get onClickNext$Action() {
            return this.hasOwnProperty("_onClickNext$Action") || (this._onClickNext$Action = function() {
                return Promise.resolve()
            }), this._onClickNext$Action
        }
        set onClickNext$Action(e) {
            this._onClickNext$Action = e
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    n = this.idService;
                return r.onInitialize$Action(e)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    n = this.idService;
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
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    n = this.idService;
                return r.onDestroy$Action(e)
            }), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(e) {
            this._onDestroyEventHandler = e
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    n = this.idService;
                return r.onParametersChanged$Action(e)
            }), this._onParametersChangedEventHandler
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
            return T.defaultTimeout
        }
    };
    s(c, "ControllerInner");
    let m = c;
    O = m, O.registerVariableGroupType("uae.Common.OTPBlock$ActionPostReauthenticate", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: a.DataTypes.DataTypes.Record,
        defaultValue: s(function() {
            return new q
        }, "defaultValue"),
        complexType: q
    }]), O.registerVariableGroupType("uae.Common.OTPBlock.SetTimer$vars", [{
        name: "NewTimer",
        attrName: "newTimerInLocal",
        mandatory: !0,
        dataType: a.DataTypes.DataTypes.Integer,
        defaultValue: s(function() {
            return 0
        }, "defaultValue")
    }]), O.registerVariableGroupType("uae.Common.OTPBlock.OnInitialize$javaScript1JSResult", [{
        name: "TimeElapsed",
        attrName: "timeElapsedOut",
        mandatory: !0,
        dataType: a.DataTypes.DataTypes.Integer,
        defaultValue: s(function() {
            return 0
        }, "defaultValue")
    }]), O.registerVariableGroupType("uae.Common.OTPBlock.SendCode$vars", [{
        name: "HasPreviousUrl",
        attrName: "hasPreviousUrlInLocal",
        mandatory: !0,
        dataType: a.DataTypes.DataTypes.Boolean,
        defaultValue: s(function() {
            return !1
        }, "defaultValue")
    }]), O.registerVariableGroupType("uae.Common.OTPBlock.OnReady$javaScript1JSResult", [{
        name: "hasPreviousUrl",
        attrName: "hasPreviousUrlOut",
        mandatory: !0,
        dataType: a.DataTypes.DataTypes.Boolean,
        defaultValue: s(function() {
            return !1
        }, "defaultValue")
    }]), O.registerVariableGroupType("uae.Common.OTPBlock.VerifyWithEmailPhoneNumberOnClick$vars", [{
        name: "verificationType",
        attrName: "verificationTypeInLocal",
        mandatory: !0,
        dataType: a.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }]), O.registerVariableGroupType("uae.Common.OTPBlock.SetHasTimerStarted$vars", [{
        name: "HasTimerStarted2",
        attrName: "hasTimerStarted2InLocal",
        mandatory: !0,
        dataType: a.DataTypes.DataTypes.Boolean,
        defaultValue: s(function() {
            return !1
        }, "defaultValue")
    }]), O.registerVariableGroupType("uae.Common.OTPBlock.StartTimer$vars", [{
        name: "is_triggered",
        attrName: "is_triggeredInLocal",
        mandatory: !1,
        dataType: a.DataTypes.DataTypes.Boolean,
        defaultValue: s(function() {
            return !1
        }, "defaultValue")
    }]), O.registerVariableGroupType("uae.Common.OTPBlock.StartTimer$javaScript1JSResult", [{
        name: "PreventTimerRun",
        attrName: "preventTimerRunOut",
        mandatory: !0,
        dataType: a.DataTypes.DataTypes.Boolean,
        defaultValue: s(function() {
            return !1
        }, "defaultValue")
    }]), O.registerVariableGroupType("uae.Common.OTPBlock.StartTimer$timerFuncJSResult", [{
        name: "TimeStamp",
        attrName: "timeStampOut",
        mandatory: !0,
        dataType: a.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }])
}
var O, nt = new a.Controller.ControllerFactory(O, N);
var Xr = I.PlaceholderContent,
    jr = I.IteratorPlaceholderContent,
    Et = s(function() {
        var m = K(function(c) {
            var l = c.model,
                e = c.controller,
                r = c.controller.idService,
                t = e.validationService,
                n = e.callContext(),
                i = $,
                o = k,
                d = {
                    props: c,
                    validateWidget: s(function(f) {
                        c.validateWidget(c, f)
                    }, "validateWidget")
                },
                u = l,
                y = W,
                v = H,
                A = F();
            return g.createElement("div", c.rootNodeProperties, g.createElement(p, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "display: flex; flex-direction: column; height: 100%;"
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "100%"
                },
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "0"
                },
                _widgetRecordProvider: u
            }, g.createElement(Je, {
                _validationProps: {
                    validationService: t
                },
                extendedProperties: {
                    style: "display: flex; flex-direction: column; height: 100%;"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                style: "form",
                _idProps: {
                    service: r,
                    name: "Form1"
                },
                _widgetRecordProvider: u
            }, g.createElement(p, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "display: flex; flex: 1; justify-content: center;"
                },
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "2"
                },
                _widgetRecordProvider: u
            }, g.createElement(p, {
                align: 0,
                animate: !1,
                style: "verification-otp",
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "3"
                },
                _widgetRecordProvider: u
            }, g.createElement(p, {
                align: 0,
                animate: !0,
                extendedProperties: {
                    style: "align-items: flex-start; display: flex; justify-content: flex-start;"
                },
                visible: l.variables.is_phone_verificationVar || l.variables.is_email_verificationVar,
                _idProps: {
                    service: r,
                    uuid: "4"
                },
                _widgetRecordProvider: u
            }, g.createElement(Ze, {
                extendedProperties: {
                    style: "align-items: center; display: flex; flex-direction: column; height: 96px; justify-content: center;"
                },
                gridProperties: {
                    width: "96px"
                },
                image: We.VersionedURL.getVersionedUrl("img/uae.ic_verification.svg"),
                type: 0,
                _idProps: {
                    service: r,
                    uuid: "5"
                },
                _widgetRecordProvider: u
            })), g.createElement(p, {
                align: 0,
                animate: !0,
                style: "flex flex-col",
                visible: !l.variables.is_phone_verificationVar,
                _idProps: {
                    service: r,
                    uuid: "6"
                },
                _widgetRecordProvider: u
            }, g.createElement(p, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: flex-start; align-self: stretch; display: flex; flex-direction: column; gap: 8px;"
                },
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "7"
                },
                _widgetRecordProvider: u
            }, g.createElement(G, {
                extendedProperties: {
                    style: "color: var(--text-brandPrimaryProminent, #00080A); font-size: 24px; font-style: normal; font-weight: 900; line-height: normal;"
                },
                style: "otp-header",
                value: V.resolve(D.TranslationsService).getMessage("53Mxub232UuyaqNs2QTvDA#ValueExpression.-1576264390.1", "Verification needed"),
                _idProps: {
                    service: r,
                    uuid: "8"
                },
                _widgetRecordProvider: u
            }), g.createElement(p, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "---comment-6: /* 150% */; color: var(--text-default, rgba(0, 0, 0, 0.72)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "9"
                },
                _widgetRecordProvider: u
            }, g.createElement(G, {
                value: V.resolve(D.TranslationsService).getMessage("CGkYML+Ia0uXlS3_IBtY8w#ValueExpression.-525243176.1", "To authorise your withdrawal, enter the code sent to "),
                _idProps: {
                    service: r,
                    uuid: "10"
                },
                _widgetRecordProvider: u
            }), g.createElement(G, {
                extendedProperties: {
                    dir: "ltr",
                    style: "---comment-1: /* mobile/body/md */; color: var(--text-default, rgba(0, 0, 0, 0.72)); font-size: 16px; font-style: normal; font-weight: 700; line-height: 24px; overflow-wrap: anywhere;"
                },
                value: l.getCachedValue(r.getId("d1Zb1NQohkmPUnscW3UENQ.Value"), function() {
                    return h.getVerificationProvider() === "email" ? l.variables.user_metadataVar.emailAttr : P.substr(l.variables.user_metadataVar.phoneAttr, 0, 1) !== "+" ? "+" + l.variables.user_metadataVar.phoneAttr : l.variables.user_metadataVar.phoneAttr
                }, function() {
                    return h.getVerificationProvider()
                }, function() {
                    return l.variables.user_metadataVar.emailAttr
                }, function() {
                    return l.variables.user_metadataVar.phoneAttr
                }),
                _idProps: {
                    service: r,
                    uuid: "11"
                },
                _widgetRecordProvider: u
            }))), g.createElement(p, {
                align: 0,
                animate: !1,
                style: "flex flex-col margin-top-s",
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "12"
                },
                _widgetRecordProvider: u
            })), g.createElement(ze, {
                _validationProps: {
                    validationService: t,
                    validationParentId: r.getId("Form1")
                },
                enabled: !0,
                extendedEvents: {
                    onKeyDown: s(function() {
                        var f = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                        e.onKeypress$Action(e.callContext(f))
                    }, "onKeyDown")
                },
                extendedProperties: {
                    autoComplete: "otp",
                    inputmode: "numeric",
                    style: "margin-bottom: 0px;"
                },
                gridProperties: {
                    width: "100%"
                },
                inputType: 0,
                mandatory: !1,
                maxLength: 6,
                onChange: s(function() {
                    var f = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                    e.inputOnChange$Action(e.callContext(f))
                }, "onChange"),
                prompt: V.resolve(D.TranslationsService).getMessage("OnvincbUqUC1VXdlqrEnXg#ValueExpression.24546143.1", "Enter 6-digit code"),
                style: "form-control margin-top-m otp-placeholder",
                variable: l.createVariable(Ue.DataTypes.Text, l.variables.otpVar, function(f) {
                    l.variables.otpVar = f
                }),
                _idProps: {
                    service: r,
                    name: "Input_TextVar"
                },
                _widgetRecordProvider: u
            }), g.createElement(p, {
                align: 0,
                animate: !1,
                style: "flex flex-col margin-top-xxl",
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "14"
                },
                _widgetRecordProvider: u
            }, g.createElement(U, {
                style: "verification-timer",
                text: [v(o("XfKTopC8G0+25wFnhDNZfg#Value", "Didn\u2019t receive the code?"))],
                _idProps: {
                    service: r,
                    uuid: "15"
                },
                _widgetRecordProvider: u
            }), y(!l.variables.hasTimerStartedVar || l.variables.is_switchingVar, !1, this, function() {
                return [g.createElement(p, {
                    align: 0,
                    animate: !1,
                    style: "justify-content-center display-flex",
                    visible: !0,
                    _idProps: {
                        service: r,
                        name: "LinkContainer"
                    },
                    _widgetRecordProvider: u
                }, g.createElement(X, {
                    enabled: !0,
                    onClick: s(function() {
                        return Promise.resolve().then(function() {
                            var f = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                            return e.resendCode$Action(e.callContext(f))
                        })
                    }, "onClick"),
                    style: "text-underline margin-left-s text-neutral-10 font-bold text-align-center",
                    visible: !0,
                    _idProps: {
                        service: r,
                        uuid: "17"
                    },
                    _widgetRecordProvider: u
                }, g.createElement(U, {
                    style: l.getCachedValue(r.getId("FQmSBoXMJUewXAby_HV7GA.Style"), function() {
                        return l.variables.is_switchingVar ? "action-disabled" : ""
                    }, function() {
                        return l.variables.is_switchingVar
                    }),
                    text: [v(o("FQmSBoXMJUewXAby_HV7GA#Value", "Resend code"))],
                    _idProps: {
                        service: r,
                        uuid: "18"
                    },
                    _widgetRecordProvider: u
                })))]
            }, function() {
                return [g.createElement(G, {
                    extendedProperties: {
                        style: "color: #adb5bd; font-weight: bold; text-decoration: underline;"
                    },
                    style: "resend-button text-underline margin-left-s text-neutral-10 font-bold disabled text-align-center",
                    value: V.resolve(D.TranslationsService).getMessage("8dRGWO7vfUu35rcPq5ZZUg#ValueExpression.1210306074.1", "Resend code (") + l.variables.timerVar.toString() + V.resolve(D.TranslationsService).getMessage("8dRGWO7vfUu35rcPq5ZZUg#ValueExpression.3606.1", "s)"),
                    _idProps: {
                        service: r,
                        name: "ResendTimer"
                    },
                    _widgetRecordProvider: u
                })]
            }), g.createElement(p, {
                align: 0,
                animate: !0,
                style: "display-flex flex-direction-column align-items-center",
                visible: l.getCachedValue(r.getId("19fctX3mFk2XzaOGIMlz8w.Visible"), function() {
                    return T.getFeatureFlag$Action("PhoneNumber", n).shouldEnableOut && h.getphone() !== P.nullTextIdentifier() && h.getemail() !== P.nullTextIdentifier()
                }, function() {
                    return h.getphone()
                }, function() {
                    return h.getemail()
                }),
                _idProps: {
                    service: r,
                    uuid: "20"
                },
                _widgetRecordProvider: u
            }, g.createElement(U, {
                extendedProperties: {
                    style: "color: var(--text-default, rgba(0, 0, 0, 0.72)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px; text-align: center;"
                },
                style: "margin-top-s",
                text: [v(o("rocjRR8ZhUOAdoMawkUKxw#Value", "Or"))],
                _idProps: {
                    service: r,
                    uuid: "21"
                },
                _widgetRecordProvider: u
            }), g.createElement(p, {
                align: 0,
                animate: !0,
                style: "margin-top-s",
                visible: l.getCachedValue(r.getId("KKVs6ORE10al25d9qLXomg.Visible"), function() {
                    return h.getVerificationProvider() === "phone" && h.getemail() !== P.nullTextIdentifier()
                }, function() {
                    return h.getVerificationProvider()
                }, function() {
                    return h.getemail()
                }),
                _idProps: {
                    service: r,
                    uuid: "22"
                },
                _widgetRecordProvider: u
            }, g.createElement(X, {
                enabled: !l.variables.hasTimerStartedVar,
                onClick: s(function() {
                    return Promise.resolve().then(function() {
                        var f = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                        return e.verifyWithEmailPhoneNumberOnClick$Action("email", e.callContext(f))
                    })
                }, "onClick"),
                style: l.getCachedValue(r.getId("a1CCv8FcF06_OUs_RA0+Yw.Style"), function() {
                    return l.variables.hasTimerStartedVar || l.variables.is_switchingVar ? "action-disabled" : ""
                }, function() {
                    return l.variables.hasTimerStartedVar
                }, function() {
                    return l.variables.is_switchingVar
                }),
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "23"
                },
                _widgetRecordProvider: u
            }, g.createElement(U, {
                extendedProperties: {
                    style: "color: var(--text-default, rgba(0, 0, 0, 0.72)); font-size: 16px; text-decoration: underline;"
                },
                text: [v(o("goz_5o6kD0CnRAbW2HznHA#Value", "Verify with email"))],
                _idProps: {
                    service: r,
                    uuid: "24"
                },
                _widgetRecordProvider: u
            }))), g.createElement(p, {
                align: 0,
                animate: !0,
                style: "margin-top-s",
                visible: l.getCachedValue(r.getId("M+cuT6vJDki8CqLvZ4v1gA.Visible"), function() {
                    return h.getVerificationProvider() === "email" && h.getphone() !== P.nullTextIdentifier()
                }, function() {
                    return h.getVerificationProvider()
                }, function() {
                    return h.getphone()
                }),
                _idProps: {
                    service: r,
                    uuid: "25"
                },
                _widgetRecordProvider: u
            }, g.createElement(X, {
                enabled: !l.variables.hasTimerStartedVar,
                onClick: s(function() {
                    return Promise.resolve().then(function() {
                        var f = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                        return e.verifyWithEmailPhoneNumberOnClick$Action("phone", e.callContext(f))
                    })
                }, "onClick"),
                style: l.getCachedValue(r.getId("hBOFO9HkzU2gAC72HKjvzQ.Style"), function() {
                    return l.variables.hasTimerStartedVar || l.variables.is_switchingVar ? "action-disabled" : ""
                }, function() {
                    return l.variables.hasTimerStartedVar
                }, function() {
                    return l.variables.is_switchingVar
                }),
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "26"
                },
                _widgetRecordProvider: u
            }, g.createElement(U, {
                extendedProperties: {
                    style: "color: var(--text-default, rgba(0, 0, 0, 0.72)); font-size: 16px; text-decoration: underline;"
                },
                text: [v(o("vyrIWi6490i_ZfOvBgdPtg#Value", "Verify with phone number"))],
                _idProps: {
                    service: r,
                    uuid: "27"
                },
                _widgetRecordProvider: u
            }))))))), g.createElement(p, {
                align: 0,
                animate: !1,
                gridProperties: {
                    classes: "OSInline"
                },
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "28"
                },
                _widgetRecordProvider: u
            }, g.createElement(Ge, {
                enabled: l.getCachedValue(r.getId("XYfMPzi7qE2bx93Dr8xNkw.Enabled"), function() {
                    return P.length(l.variables.otpVar) === 6 && l.widgets.get(r.getId("Input_TextVar")).validAttr
                }, function() {
                    return l.variables.otpVar
                }, function() {
                    return l.widgets.get(r.getId("Input_TextVar")).validAttr
                }),
                extendedProperties: {
                    style: "border-radius: 100px; height: 48px;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                isDefault: !0,
                onClick: s(function() {
                    var f = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                    e.onClickNext$Action(l.variables.otpVar, e.callContext(f))
                }, "onClick"),
                style: "btn btn-primary w-full",
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "29"
                },
                _widgetRecordProvider: u
            }, g.createElement(p, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "display: block;"
                },
                style: l.getCachedValue(r.getId("YeUg2kYAnUiE4OeDPuH5xQ.Style"), function() {
                    return l.variables.is_loadingIn ? "osui-btn-loading__spinner-animation" : ""
                }, function() {
                    return l.variables.is_loadingIn
                }),
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "30"
                },
                _widgetRecordProvider: u,
                style_dataFetchStatus: Z.calculateDataFetchStatus(l.variables._is_loadingInDataFetchStatus)
            }), v(o("RssraGkT+0O0YFqD+v+ENg#Value", "Verify")))))))
        }, {
            topLevelComponent: !1,
            getAttributes: s(function() {
                return {
                    codeFunction: "OTPBlock",
                    functionKey: "12068180-c968-48bd-a67f-e17d0bc8b255",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Common.OTPBlock",
            modelFactory: Xe,
            controllerFactory: nt
        });
        return m.getCssDependencies = function() {
            return ["css/uae.Common.OTPBlock.css", "css/OutSystemsReactWidgets.css"]
        }, m.getJsDependencies = function() {
            return []
        }, m.getBlocks = function() {
            return []
        }, m
    }, "componentFactory"),
    Fe = Et();
var un = I.PlaceholderContent,
    ln = I.IteratorPlaceholderContent,
    Ot = s(function() {
        var m = K(function(c) {
            var l = c.model,
                e = c.controller,
                r = c.controller.idService,
                t = e.validationService,
                n = e.callContext(),
                i = $,
                o = k,
                d = {
                    props: c,
                    validateWidget: s(function(f) {
                        c.validateWidget(c, f)
                    }, "validateWidget")
                },
                u = l,
                y = W,
                v = H,
                A = F();
            return ie.createElement("div", c.rootNodeProperties, ie.createElement(Me, {
                extendedProperties: {
                    src: l.variables.urlVar,
                    width: "100%",
                    height: "100%",
                    className: l.getCachedValue(r.getId("kTUrqJa0HkyRU6QOIv1yUw.class"), function() {
                        return P.length(l.variables.urlVar) > 0 ? "cashier-iframe" : "cashier-iframe hidden"
                    }, function() {
                        return l.variables.urlVar
                    }),
                    allow: "payment; camera; clipboard-read; clipboard-write"
                },
                tag: "iframe",
                _idProps: {
                    service: r,
                    uuid: "0"
                },
                _widgetRecordProvider: u
            }), y(P.length(l.variables.urlVar) > 0, !1, this, function() {
                return []
            }, function() {
                return [ie.createElement(Fe, {
                    getOwnerSpan: s(function() {
                        return A.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: s(function() {
                        return A.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        is_loading: l.variables.is_payment_url_api_loadingVar,
                        otp_type: "withdrawal",
                        from_section: l.variables.from_sectionIn,
                        _from_sectionInDataFetchStatus: Z.calculateDataFetchStatus(l.variables._from_sectionInDataFetchStatus),
                        error_message: l.variables.error_messageVar
                    },
                    events: {
                        _handleError: s(function(f) {
                            e.handleError(f)
                        }, "_handleError"),
                        onClickNext$Action: s(function(f) {
                            return Promise.resolve().then(function() {
                                var R = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                                return e.getPaymentURL$Action(f, e.callContext(R))
                            })
                        }, "onClickNext$Action")
                    },
                    _validationProps: {
                        validationService: t
                    },
                    _idProps: {
                        service: r,
                        uuid: "1",
                        alias: "1"
                    },
                    _widgetRecordProvider: u,
                    _dependencies: []
                })]
            }))
        }, {
            topLevelComponent: !1,
            getAttributes: s(function() {
                return {
                    codeFunction: "WithdrawBlock",
                    functionKey: "00334052-21ae-4274-b330-ef91730f4b11",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "WithdrawFlow.WithdrawBlock",
            modelFactory: je,
            controllerFactory: tt
        });
        return m.getCssDependencies = function() {
            return ["css/uae.WithdrawFlow.WithdrawBlock.css", "css/OutSystemsReactWidgets.css"]
        }, m.getJsDependencies = function() {
            return []
        }, m.getBlocks = function() {
            return [Fe]
        }, m
    }, "componentFactory"),
    oe = Ot();
var He = I.PlaceholderContent,
    pn = I.IteratorPlaceholderContent,
    Pt = s(function() {
        var m = Be(function(c) {
            var l = c.model,
                e = c.controller,
                r = c.controller.idService,
                t = e.validationService,
                n = e.callContext(),
                i = $,
                o = k,
                d = {
                    props: c,
                    validateWidget: s(function(f) {
                        c.validateWidget(c, f)
                    }, "validateWidget")
                },
                u = l,
                y = W,
                v = H,
                A = F();
            return x.createElement("div", c.rootNodeProperties, y(L.isDesktop$Action(n).isDesktopOut, !1, this, function() {
                return [x.createElement(de, {
                    getOwnerSpan: s(function() {
                        return A.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: s(function() {
                        return A.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        ShowLoader: l.variables.is_iframe_loadingVar,
                        shouldShowQuestionInfo: !0,
                        ShowInfoButton: l.variables.is_otp_visibleVar,
                        ShowClosebutton: !0
                    },
                    events: {
                        _handleError: s(function(f) {
                            e.handleError(f)
                        }, "_handleError"),
                        closeBtnEvent$Action: s(function() {
                            var f = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                            e.actionEventHandler$Action("close", e.callContext(f))
                        }, "closeBtnEvent$Action"),
                        infoBtnEvent$Action: s(function() {
                            var f = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                            e.actionEventHandler$Action("info", e.callContext(f))
                        }, "infoBtnEvent$Action"),
                        backBtnEvent$Action: s(function() {
                            var f = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                            e.actionEventHandler$Action("back", e.callContext(f))
                        }, "backBtnEvent$Action")
                    },
                    _validationProps: {
                        validationService: t
                    },
                    _idProps: {
                        service: r,
                        uuid: "0",
                        alias: "1"
                    },
                    _widgetRecordProvider: u,
                    placeholders: {
                        contentbody: new He(function() {
                            return [x.createElement(p, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "height: calc(100vh - 24px - 56px - 32px - 21px); padding-top: 24px;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    uuid: "1"
                                },
                                _widgetRecordProvider: u
                            }, x.createElement(oe, {
                                getOwnerSpan: s(function() {
                                    return A.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: s(function() {
                                    return A.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    from_section: l.variables.from_sectionIn,
                                    wallet_id: l.variables.wallet_idIn
                                },
                                events: {
                                    _handleError: s(function(f) {
                                        e.handleError(f)
                                    }, "_handleError"),
                                    setLoading$Action: s(function(f) {
                                        var R = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                                        e.setLoading$Action(f, e.callContext(R))
                                    }, "setLoading$Action"),
                                    changeOTPVisibility$Action: s(function(f) {
                                        var R = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                                        e.setOTPVisibility$Action(f, e.callContext(R))
                                    }, "changeOTPVisibility$Action")
                                },
                                _validationProps: {
                                    validationService: t
                                },
                                _idProps: {
                                    service: r,
                                    uuid: "2",
                                    alias: "2"
                                },
                                _widgetRecordProvider: u,
                                _dependencies: []
                            }))]
                        })
                    },
                    _dependencies: [i(l.variables.wallet_idIn), i(l.variables.from_sectionIn)]
                })]
            }, function() {
                return [x.createElement(le, {
                    getOwnerSpan: s(function() {
                        return A.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: s(function() {
                        return A.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        has_close_icon: !0,
                        has_back_button: !1,
                        shouldShowQuestionInfo: !0,
                        hasRighAction: l.variables.is_otp_visibleVar,
                        show_loader: l.variables.is_iframe_loadingVar
                    },
                    events: {
                        _handleError: s(function(f) {
                            e.handleError(f)
                        }, "_handleError"),
                        closeEvent$Action: s(function() {
                            var f = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                            e.actionEventHandler$Action("close", e.callContext(f))
                        }, "closeEvent$Action"),
                        onRightActionEvent$Action: s(function() {
                            var f = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                            e.actionEventHandler$Action("info", e.callContext(f))
                        }, "onRightActionEvent$Action")
                    },
                    _validationProps: {
                        validationService: t
                    },
                    _idProps: {
                        service: r,
                        uuid: "3",
                        alias: "3"
                    },
                    _widgetRecordProvider: u,
                    placeholders: {
                        content: new He(function() {
                            return [x.createElement(p, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "height: calc(100vh - 56px - 24px - 24px);"
                                },
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    uuid: "4"
                                },
                                _widgetRecordProvider: u
                            }, x.createElement(oe, {
                                getOwnerSpan: s(function() {
                                    return A.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: s(function() {
                                    return A.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    wallet_id: l.variables.wallet_idIn,
                                    from_section: l.variables.from_sectionIn
                                },
                                events: {
                                    _handleError: s(function(f) {
                                        e.handleError(f)
                                    }, "_handleError"),
                                    changeOTPVisibility$Action: s(function(f) {
                                        var R = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                                        e.setOTPVisibility$Action(f, e.callContext(R))
                                    }, "changeOTPVisibility$Action"),
                                    setLoading$Action: s(function(f) {
                                        var R = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                                        e.setLoading$Action(f, e.callContext(R))
                                    }, "setLoading$Action")
                                },
                                _validationProps: {
                                    validationService: t
                                },
                                _idProps: {
                                    service: r,
                                    uuid: "5",
                                    alias: "4"
                                },
                                _widgetRecordProvider: u,
                                _dependencies: []
                            }))]
                        }),
                        footer: He.Empty
                    },
                    _dependencies: [i(l.variables.from_sectionIn), i(l.variables.wallet_idIn)]
                })]
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: s(function() {
                return {
                    codeFunction: "Withdraw",
                    functionKey: "3d0d5151-a182-406a-ab52-06b1a154ac4f",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "WithdrawFlow.Withdraw",
            modelFactory: we,
            controllerFactory: ve,
            getTitle: s(function(c) {
                var l = c.model,
                    e = c.controller,
                    r = c.controller.idService,
                    t = e.validationService,
                    n = e.callContext(),
                    i = $,
                    o = k,
                    d = {
                        props: c,
                        validateWidget: s(function(u) {
                            c.validateWidget(c, u)
                        }, "validateWidget")
                    };
                return V.resolve(D.TranslationsService).getMessage("UVENPYKhakCrUgaxoVSsTw#TitleExpression.1650321732.1", "Withdraw | Deriv")
            }, "getTitle")
        });
        return m.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.WithdrawFlow.Withdraw.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, m.getJsDependencies = function() {
            return []
        }, m.getBlocks = function() {
            return [de, oe, le]
        }, m
    }, "componentFactory"),
    Rt = Pt();
export {
    ve as controllerModule, we as modelModule, Rt as viewModule, fe as webFlowControllerModule
};