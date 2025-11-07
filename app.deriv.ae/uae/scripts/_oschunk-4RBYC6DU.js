import {
    a as ae
} from "./_oschunk-ACEDINHZ.js";
import {
    a as ee
} from "./_oschunk-SFRA456L.js";
import "./_oschunk-L6JZD7VU.js";
import {
    a as ne
} from "./_oschunk-6MV3R6MR.js";
import {
    a as te
} from "./_oschunk-4ZYYVQOE.js";
import {
    a as re
} from "./_oschunk-SNXHD6UR.js";
import "./_oschunk-RVD4FS25.js";
import "./_oschunk-4SYOXZNK.js";
import "./_oschunk-YB2J7GTX.js";
import "./_oschunk-HFW3V2GI.js";
import "./_oschunk-LLAHPWP3.js";
import "./_oschunk-YVFTECWM.js";
import {
    b as F,
    f as A,
    h as T,
    l as we,
    n as Z,
    o as Pe,
    u as P
} from "./_oschunk-VR5BNL2K.js";
import {
    a as Te,
    g as R,
    m as G,
    n as Ee,
    o as xe,
    q as W,
    r as z,
    s as $,
    t as B
} from "./_oschunk-4VHUVDBV.js";
import {
    a as M
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    A as Se,
    H as k,
    Qb as Ce,
    Sb as h,
    Ua as Q,
    _a as Y,
    a as I,
    h as V,
    i as N,
    mb as H,
    ub as X
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as C,
    c as s,
    e as be,
    m as E,
    n as x,
    v as he,
    w as b
} from "./_oschunk-M5BUVJ72.js";
var Be = {
        "6Ljgt5PWJEehr0GCF4srhQ#Title": "\u062A\u062D\u0648\u064A\u0644 \u0627\u0644\u0645\u0628\u0644\u063A | Deriv",
        "6Ljgt5PWJEehr0GCF4srhQ#TitleExpression.1209328557.1": "\u062A\u062D\u0648\u064A\u0644 \u0627\u0644\u0645\u0628\u0644\u063A | Deriv"
    },
    Oe = {
        "ar-001": {
            translations: Be,
            isRTL: !0
        }
    };
var y = C; {
    let m = class m extends y.Controller.BaseViewController {
        constructor(t, e, r) {
            super(t, e, r, Oe);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _desktopProcessLayoutCloseBtnEvent$Action() {
            return this.hasOwnProperty("__desktopProcessLayoutCloseBtnEvent$Action") || (this.__desktopProcessLayoutCloseBtnEvent$Action = function(t) {
                var e = this.model,
                    r = this.controller,
                    o = this.idService;
                return y.Logger.startActiveSpan("DesktopProcessLayoutCloseBtnEvent", function(a) {
                    a && (a.setAttribute("code.function", "DesktopProcessLayoutCloseBtnEvent"), a.setAttribute("outsystems.function.key", "57b94691-508d-407f-97a0-14839c6fa38e"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("DesktopProcessLayoutCloseBtnEvent"), t = r.callContext(t);
                        var u = new y.DataTypes.VariableHolder(new(y.Controller.BaseController.getJSONDeserializeOutputType(Q)));
                        return u.value.dataOut = y.JSONUtils.deserializeFromJSON(X.gettransfer_init(), Q, !1), u.value.dataOut.wallet_idAttr.gt(y.BuiltinFunctions.integerToLongInteger(0)) ? y.Navigation.navigateTo(y.Navigation.generateScreenURL("uae", "wallet", {}), y.Transitions.createTransition(y.Transitions.TransitionAnimation.Default), t, !0) : (h.setAccountDetailsInputs$Action((function() {
                            var l = new Se;
                            return l.mt5_typeAttr = (X.getSelectedMT5AccountType() === "standard" ? I.mT5Types.standard : I.mT5Types.swapFree).toString(), l.is_demoAttr = !1, l.account_idAttr = u.value.dataOut.account_idAttr, l
                        })(), t), y.Navigation.navigateTo(y.Navigation.generateScreenURL("uae", "mt5/account-details", {
                            is_demo: y.DataConversion.ServerDataConverter.to(!1, y.DataTypes.DataTypes.Boolean)
                        }), y.Transitions.createTransition(y.Transitions.TransitionAnimation.Default), t, !0))
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__desktopProcessLayoutCloseBtnEvent$Action
        }
        set _desktopProcessLayoutCloseBtnEvent$Action(t) {
            this.__desktopProcessLayoutCloseBtnEvent$Action = t
        }
        get _desktopProcessLayoutBackBtnEvent$Action() {
            return this.hasOwnProperty("__desktopProcessLayoutBackBtnEvent$Action") || (this.__desktopProcessLayoutBackBtnEvent$Action = function(t) {
                var e = this.model,
                    r = this.controller,
                    o = this.idService;
                return y.Logger.startActiveSpan("DesktopProcessLayoutBackBtnEvent", function(a) {
                    a && (a.setAttribute("code.function", "DesktopProcessLayoutBackBtnEvent"), a.setAttribute("outsystems.function.key", "cfb03e1b-0133-4e9b-94a3-4c752cab69b2"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return r.ensureControllerAlive("DesktopProcessLayoutBackBtnEvent"), t = r.callContext(t), y.Navigation.navigateBack(null, t, !0)
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__desktopProcessLayoutBackBtnEvent$Action
        }
        set _desktopProcessLayoutBackBtnEvent$Action(t) {
            this.__desktopProcessLayoutBackBtnEvent$Action = t
        }
        desktopProcessLayoutCloseBtnEvent$Action(t) {
            var e = this.controller;
            return y.Logger.startActiveSpan("DesktopProcessLayoutCloseBtnEvent__proxy", function(r) {
                r && (r.setAttribute("code.function", "DesktopProcessLayoutCloseBtnEvent"), r.setAttribute("outsystems.function.key", "57b94691-508d-407f-97a0-14839c6fa38e"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._desktopProcessLayoutCloseBtnEvent$Action, t)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        desktopProcessLayoutBackBtnEvent$Action(t) {
            var e = this.controller;
            return y.Logger.startActiveSpan("DesktopProcessLayoutBackBtnEvent__proxy", function(r) {
                r && (r.setAttribute("code.function", "DesktopProcessLayoutBackBtnEvent"), r.setAttribute("outsystems.function.key", "cfb03e1b-0133-4e9b-94a3-4c752cab69b2"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._desktopProcessLayoutBackBtnEvent$Action, t)
                } finally {
                    r && r.end()
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
                return ae.default.handleError(t, this.callContext())
            }), this._handleError
        }
        set handleError(t) {
            this._handleError = t
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return h.defaultTimeout
        }
    };
    s(m, "ControllerInner");
    let g = m;
    Ve = g
}
var Ve, ie = new y.Controller.ControllerFactory(Ve, M);
var O = be(Te());
var p = C,
    ue = class ue extends p.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("exchange_rates", "exchange_ratesVar", "exchange_rates", !0, !1, p.DataTypes.DataTypes.RecordList, function() {
                return p.DataTypes.ImmutableBase.getData(new(p.GenericTypeCache.getGenericList(V)))
            }, !1, p.GenericTypeCache.getGenericList(V)), this.attr("is_loading", "is_loadingVar", "is_loading", !0, !1, p.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("transfer_data", "transfer_dataVar", "transfer_data", !0, !1, p.DataTypes.DataTypes.Record, function() {
                return p.DataTypes.ImmutableBase.getData(new Y)
            }, !1, Y), this.attr("from_currency_config", "from_currency_configVar", "from_currency_config", !0, !1, p.DataTypes.DataTypes.Record, function() {
                return p.DataTypes.ImmutableBase.getData(new k)
            }, !1, k), this.attr("to_currency_config", "to_currency_configVar", "to_currency_config", !0, !1, p.DataTypes.DataTypes.Record, function() {
                return p.DataTypes.ImmutableBase.getData(new k)
            }, !1, k)].concat(p.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(ue, "VariablesRecord");
var U = ue;
U.init();
var le = class le extends p.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            TransferForm: p.Model.ValidationWidgetRecord,
            Input_amount: p.Model.ValidationWidgetRecord
        }
    }
};
s(le, "WidgetsRecord");
var se = le,
    de = class de extends p.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return U
        }
        static getWidgetsRecordConstructor() {
            return se
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(m) {}
    };
s(de, "Model");
var j = de;
j._hasValidationWidgetsValue = void 0;
var Re = new p.Model.ModelFactory(j);
var L = C,
    ge = class ge extends L.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(L.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(ge, "VariablesRecord");
var J = ge;
J.init();
var ve = class ve extends L.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(ve, "WidgetsRecord");
var fe = ve,
    D = class D extends L.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return J
        }
        static getWidgetsRecordConstructor() {
            return fe
        }
        static get hasValidationWidgets() {
            return D._hasValidationWidgetsValue === void 0 && (D._hasValidationWidgetsValue = void 0 || void 0 || void 0), D._hasValidationWidgetsValue
        }
        setInputs(m) {}
    };
s(D, "Model");
var q = D;
q._hasValidationWidgetsValue = void 0;
var me = new L.Model.ModelFactory(q);
var d = be(Te());
var Ne = {
        "TFAMqWmM2EmkIO_JtIiI_A#Value": "\u062A\u062D\u0648\u064A\u0644",
        "HCk4dSbWBkmrDHe+RPlgJQ#ValueExpression.-59419061.1": "\u0633\u062A\u062D\u0635\u0644 \u0639\u0644\u0649",
        "qzpll3sWl02jngjL9K0pxg#ValueExpression.-1273591729.1": "\u0631\u0633\u0648\u0645 \u0627\u0644\u062A\u062D\u0648\u064A\u0644",
        "qzpll3sWl02jngjL9K0pxg#ValueExpression.1188.1": "%)",
        "qzpll3sWl02jngjL9K0pxg#ValueExpression.40.1": " (",
        "0CXmLMrHkUaA8A4bFAEUbA#Value": "\u0623\u0646\u062A \u062A\u0642\u0648\u0645 \u0628\u0627\u0644\u062A\u062D\u0648\u064A\u0644",
        "_YMpgk_kX0yGnhdyPXE3Kw#ValueExpression.-1831186718.1": "\u0627\u0644\u0631\u0635\u064A\u062F:",
        "67gQKxXk2UWebEmj50RCTw#ValueExpression.1964981368.1": "\u0627\u0644\u0645\u0628\u0644\u063A",
        "Yut3o4Y+vE24PPMXMcRYRQ#Value": "\u0645\u0628\u0644\u063A \u0627\u0644\u062A\u062D\u0648\u064A\u0644",
        "cOS4UbKjMUCEISZ8MPArug#Value": "\u0625\u0644\u0649",
        "4KA+Gd6uY0uXExFUPtyzGw#Value": "\u0645\u0646",
        "d4H3Gg09Gku6rFiiAeCnOw#Value": "\u0627\u0644\u0645\u0628\u0644\u063A",
        "KY0yqA6IQkq1EQzH93WK6g#Value.1106606277.1": "\u062E\u0637\u0623 \u0641\u064A \u0633\u0639\u0631 \u0627\u0644\u0635\u0631\u0641",
        "9bGVIUyzbEGehlVm3czfeA#Value.152875427.1": "\u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0642\u0635\u0649 \u0644\u0645\u0628\u0644\u063A \u0627\u0644\u062A\u062D\u0648\u064A\u0644 \u0647\u0648 ",
        "s6jyE4eRZUabWvGImHeQww#Value.-1831186718.1": "\u0627\u0644\u0631\u0635\u064A\u062F:",
        "uYZhGohD9EyfGJMizD1TzA#Value.-1374296970.1": "\u0631\u0635\u064A\u062F \u063A\u064A\u0631 \u0643\u0627\u0641\u064D. \u0631\u0635\u064A\u062F\u0643 \u0647\u0648 ",
        "TpU+FLkva0aKOLBVOAXV1w#Value.-301709167.1": "\u0627\u0644\u062D\u062F \u0627\u0644\u0623\u062F\u0646\u0649 \u0644\u0645\u0628\u0644\u063A \u0627\u0644\u062A\u062D\u0648\u064A\u0644 \u0647\u0648"
    },
    Ie = {
        "ar-001": {
            translations: Ne,
            isRTL: !0
        }
    };

function ye(g, m, c, t) {
    var o, a, u, l, i, S;
    let e = JSON.parse(g.from_currency_config);
    switch (JSON.parse(g.to_currency_config).type) {
        case "cryptocurrency": {
            g.transfer_fee_percentage = ((a = (o = e.fee) == null ? void 0 : o.transfer) == null ? void 0 : a.crypto_percentage) || 0;
            break
        }
        case "stablecoin": {
            g.transfer_fee_percentage = ((l = (u = e.fee) == null ? void 0 : u.transfer) == null ? void 0 : l.stablecoin_percentage) || 0;
            break
        }
        case "fiat": {
            g.transfer_fee_percentage = ((S = (i = e.fee) == null ? void 0 : i.transfer) == null ? void 0 : S.fiat_percentage) || 0;
            break
        }
    }
}
s(ye, "default");

function _e(g, m, c) {
    let t = g.GetExchangeRates(),
        e = g.GetFromCurrencyConfig(),
        r = g.GetToCurrencyConfig();
    Promise.all([t, e, r]).then(g.OnFetchAPIs)
}
s(_e, "default");

function Ae(g, m, c) {
    let t = document.querySelector(".transfer-amount-input");
    if (!t) return;
    let e = /^\d{0,15}(\.\d{0,2})?$/,
        r = "",
        o = s(a => {
            e.test(a.value) ? r = a.value : a.value = r
        }, "validateInput");
    t.addEventListener("input", a => {
        o(a.target)
    }), t.addEventListener("paste", a => {
        let u = (a.clipboardData || window.clipboardData).getData("text");
        e.test(u) || a.preventDefault()
    }), t.addEventListener("keydown", a => {
        if ((a.ctrlKey || a.metaKey) && ["a", "c", "v", "x", "z"].includes(a.key.toLowerCase())) return;
        let u = ["Backspace", "Delete", "Tab", "Escape", "Enter", "."],
            l = ["Home", "End", "ArrowLeft", "ArrowRight"],
            i = ["Control", "Alt", "Shift", "Meta"],
            S = /^\d$/.test(a.key);
        !u.includes(a.key) && !l.includes(a.key) && !i.includes(a.key) && !S && a.preventDefault(), a.key === "." && a.target.value.includes(".") && a.preventDefault()
    }), t.addEventListener("change", a => {
        o(a.target)
    })
}
s(Ae, "default");
var n = C; {
    let m = class m extends n.Controller.BaseViewController {
        constructor(t, e, r) {
            super(t, e, r, Ie);
            var o = this.controller;
            this.clientActionProxies = {
                getExchangeRates$Action: s(function() {
                    return o.executeActionInsideJSNode(o._getExchangeRates$Action.bind(o), o.callContext(), function(a) {
                        return {}
                    }, function() {}, "GetExchangeRates")
                }, "getExchangeRates$Action"),
                getFromCurrencyConfig$Action: s(function() {
                    return o.executeActionInsideJSNode(o._getFromCurrencyConfig$Action.bind(o), o.callContext(), function(a) {
                        return {}
                    }, function() {}, "GetFromCurrencyConfig")
                }, "getFromCurrencyConfig$Action"),
                getToCurrencyConfig$Action: s(function() {
                    return o.executeActionInsideJSNode(o._getToCurrencyConfig$Action.bind(o), o.callContext(), function(a) {
                        return {}
                    }, function() {}, "GetToCurrencyConfig")
                }, "getToCurrencyConfig$Action"),
                onFetchAPIs$Action: s(function() {
                    return o.executeActionInsideJSNode(o._onFetchAPIs$Action.bind(o), o.callContext(), function(a) {
                        return {}
                    }, function() {}, "OnFetchAPIs")
                }, "onFetchAPIs$Action")
            }, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get getExchangerates$ServerAction() {
            return this.hasOwnProperty("_getExchangerates$ServerAction") || (this._getExchangerates$ServerAction = function(t) {
                var e = this.controller;
                return n.Logger.startActiveSpan("GetExchangerates", function(r) {
                    return r && (r.setAttribute("code.function", "GetExchangerates"), r.setAttribute("outsystems.function.key", "d4c7e148-a35d-4770-b5da-232d3a61a4e1"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), n.Flow.tryFinally(function() {
                        return e.callServerAction("GetExchangerates", "screenservices/uae/TransferFlow/TransferAmountBlock/ActionGetExchangerates", "PPCNu0IaBifmh3TMhzu3rQ", {}, e.callContext(t), void 0, void 0, !0).then(function(o) {
                            var a = new(e.constructor.getVariableGroupType("uae.TransferFlow.TransferAmountBlock$ActionGetExchangerates"));
                            return a.responseOut = n.DataConversion.ServerDataConverter.from(o.Response, N), a
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 0)
            }), this._getExchangerates$ServerAction
        }
        set getExchangerates$ServerAction(t) {
            this._getExchangerates$ServerAction = t
        }
        get getCurrencyConfig$ServerAction() {
            return this.hasOwnProperty("_getCurrencyConfig$ServerAction") || (this._getCurrencyConfig$ServerAction = function(t, e) {
                var r = this.controller;
                return n.Logger.startActiveSpan("GetCurrencyConfig", function(o) {
                    return o && (o.setAttribute("code.function", "GetCurrencyConfig"), o.setAttribute("outsystems.function.key", "344935f9-bf5b-4634-aba2-db4c51ac12e2"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), n.Flow.tryFinally(function() {
                        var a = {
                            currency: n.DataConversion.ServerDataConverter.to(t, n.DataTypes.DataTypes.Text)
                        };
                        return r.callServerAction("GetCurrencyConfig", "screenservices/uae/TransferFlow/TransferAmountBlock/ActionGetCurrencyConfig", "auneRzUWYP17IvRUyOP08Q", a, r.callContext(e), void 0, void 0, !0).then(function(u) {
                            var l = new(r.constructor.getVariableGroupType("uae.TransferFlow.TransferAmountBlock$ActionGetCurrencyConfig"));
                            return l.responseOut = n.DataConversion.ServerDataConverter.from(u.Response, H), l
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 0)
            }), this._getCurrencyConfig$ServerAction
        }
        set getCurrencyConfig$ServerAction(t) {
            this._getCurrencyConfig$ServerAction = t
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _getExchangeRates$Action() {
            return this.hasOwnProperty("__getExchangeRates$Action") || (this.__getExchangeRates$Action = function(t) {
                var e = this.model,
                    r = this.controller,
                    o = this.idService;
                return n.Logger.startActiveSpan("GetExchangeRates", function(a) {
                    return a && (a.setAttribute("code.function", "GetExchangeRates"), a.setAttribute("outsystems.function.key", "6ef883a6-51eb-4848-81de-0181e8550cdc"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                        r.ensureControllerAlive("GetExchangeRates"), t = r.callContext(t);
                        var u = new n.DataTypes.VariableHolder;
                        return n.Flow.executeAsyncFlow(function() {
                            return e.flush(), r.getExchangerates$ServerAction(t).then(function(l) {
                                u.value = l
                            }).then(function() {
                                e.variables.exchange_ratesVar = u.value.responseOut.dataAttr
                            })
                        })
                    }, function() {
                        a && a.end()
                    })
                }, 1)
            }), this.__getExchangeRates$Action
        }
        set _getExchangeRates$Action(t) {
            this.__getExchangeRates$Action = t
        }
        get _onFetchAPIs$Action() {
            return this.hasOwnProperty("__onFetchAPIs$Action") || (this.__onFetchAPIs$Action = function(t) {
                var e = this.model,
                    r = this.controller,
                    o = this.idService;
                return n.Logger.startActiveSpan("OnFetchAPIs", function(a) {
                    a && (a.setAttribute("code.function", "OnFetchAPIs"), a.setAttribute("outsystems.function.key", "8583a8b6-1697-46cd-b86c-2d8732cc0d1b"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnFetchAPIs"), t = r.callContext(t);
                        var u = new n.DataTypes.VariableHolder(new(r.constructor.getVariableGroupType("uae.TransferFlow.TransferAmountBlock.OnFetchAPIs$vars"))),
                            l = new n.DataTypes.VariableHolder,
                            i = new n.DataTypes.VariableHolder(new n.DataTypes.JSONSerializeOutputType),
                            S = new n.DataTypes.VariableHolder(new n.DataTypes.JSONSerializeOutputType);
                        u.value.usdVar.priceAttr = n.BuiltinFunctions.integerToDecimal(1), u.value.usdVar.codeAttr = "USD", n.SystemActions.listAppend(e.variables.exchange_ratesVar, u.value.usdVar, t), n.BuiltinFunctions.toLower(e.variables.transfer_dataVar.fromAttr.currencyAttr) === n.BuiltinFunctions.toLower(e.variables.transfer_dataVar.toAttr.currencyAttr) ? e.variables.transfer_dataVar.quoteAttr.transfer_fee_percentageAttr = n.BuiltinFunctions.integerToDecimal(0) : (S.value.jSONOut = n.JSONUtils.serializeToJSON(e.variables.from_currency_configVar, !1, !1), i.value.jSONOut = n.JSONUtils.serializeToJSON(e.variables.to_currency_configVar, !1, !1), l.value = n.Logger.startActiveSpan("GetTransferFee", function(v) {
                            v && (v.setAttribute("code.function", "GetTransferFee"), v.setAttribute("outsystems.function.key", "d898bdfe-910f-4744-981c-4b7ac32b760f"), v.setAttribute("outsystems.function.owner.name", "uae"), v.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), v.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return r.safeExecuteJSNode(ye, "GetTransferFee", "OnFetchAPIs", {
                                    from_currency_config: n.DataConversion.JSNodeParamConverter.to(S.value.jSONOut, n.DataTypes.DataTypes.Text),
                                    to_currency_config: n.DataConversion.JSNodeParamConverter.to(i.value.jSONOut, n.DataTypes.DataTypes.Text),
                                    transfer_fee_percentage: n.DataConversion.JSNodeParamConverter.to(n.DataTypes.Decimal.defaultValue, n.DataTypes.DataTypes.Decimal)
                                }, function(_) {
                                    var f = new(r.constructor.getVariableGroupType("uae.TransferFlow.TransferAmountBlock.OnFetchAPIs$getTransferFeeJSResult"));
                                    return f.transfer_fee_percentageOut = n.DataConversion.JSNodeParamConverter.from(_.transfer_fee_percentage, n.DataTypes.DataTypes.Decimal), f
                                }, {}, {})
                            } finally {
                                v && v.end()
                            }
                        }, 1), e.variables.transfer_dataVar.quoteAttr.transfer_fee_percentageAttr = n.BuiltinFunctions.textToDecimalValidate(n.BuiltinFunctions.decimalToText(l.value.transfer_fee_percentageOut)) ? n.BuiltinFunctions.textToDecimal(n.BuiltinFunctions.decimalToText(l.value.transfer_fee_percentageOut)) : n.BuiltinFunctions.integerToDecimal(2)), h.updateTransferData$Action(e.variables.transfer_dataVar, t), e.variables.is_loadingVar = !1, r._inputAmountOnChange$Action(t)
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__onFetchAPIs$Action
        }
        set _onFetchAPIs$Action(t) {
            this.__onFetchAPIs$Action = t
        }
        get _onSelectPercentage$Action() {
            return this.hasOwnProperty("__onSelectPercentage$Action") || (this.__onSelectPercentage$Action = function(t, e) {
                var r = this.model,
                    o = this.controller,
                    a = this.idService;
                return n.Logger.startActiveSpan("OnSelectPercentage", function(u) {
                    u && (u.setAttribute("code.function", "OnSelectPercentage"), u.setAttribute("outsystems.function.key", "90d61012-7435-4f35-a639-44cbaca3db63"), u.setAttribute("outsystems.function.owner.name", "uae"), u.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("OnSelectPercentage"), e = o.callContext(e);
                        var l = new n.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("uae.TransferFlow.TransferAmountBlock.OnSelectPercentage$vars")));
                        l.value.percentageInLocal = t;
                        var i = new n.DataTypes.VariableHolder;
                        l.value.amountVar = r.variables.transfer_dataVar.fromAttr.balanceAttr.times(n.BuiltinFunctions.integerToDecimal(l.value.percentageInLocal)).div(n.BuiltinFunctions.integerToDecimal(100)), i.value = h.roundNumber$Action(n.BuiltinFunctions.decimalToText(l.value.amountVar), "", e), r.variables.transfer_dataVar.from_amountAttr = n.BuiltinFunctions.textToDecimal(i.value.roundedValueOut), o._inputAmountOnChange$Action(e)
                    } finally {
                        u && u.end()
                    }
                }, 1)
            }), this.__onSelectPercentage$Action
        }
        set _onSelectPercentage$Action(t) {
            this.__onSelectPercentage$Action = t
        }
        get _getToCurrencyConfig$Action() {
            return this.hasOwnProperty("__getToCurrencyConfig$Action") || (this.__getToCurrencyConfig$Action = function(t) {
                var e = this.model,
                    r = this.controller,
                    o = this.idService;
                return n.Logger.startActiveSpan("GetToCurrencyConfig", function(a) {
                    return a && (a.setAttribute("code.function", "GetToCurrencyConfig"), a.setAttribute("outsystems.function.key", "9f3908c7-0ea6-4eeb-8531-3ef649b263f2"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                        r.ensureControllerAlive("GetToCurrencyConfig"), t = r.callContext(t);
                        var u = new n.DataTypes.VariableHolder;
                        return n.Flow.executeAsyncFlow(function() {
                            return e.flush(), r.getCurrencyConfig$ServerAction(e.variables.transfer_dataVar.toAttr.currencyAttr, t).then(function(l) {
                                u.value = l
                            }).then(function() {
                                e.variables.to_currency_configVar = u.value.responseOut.dataAttr.getItem(0)
                            })
                        })
                    }, function() {
                        a && a.end()
                    })
                }, 1)
            }), this.__getToCurrencyConfig$Action
        }
        set _getToCurrencyConfig$Action(t) {
            this.__getToCurrencyConfig$Action = t
        }
        get _inputAmountOnChange$Action() {
            return this.hasOwnProperty("__inputAmountOnChange$Action") || (this.__inputAmountOnChange$Action = function(t) {
                var e = this.model,
                    r = this.controller,
                    o = this.idService;
                return n.Logger.startActiveSpan("InputAmountOnChange", function(a) {
                    a && (a.setAttribute("code.function", "InputAmountOnChange"), a.setAttribute("outsystems.function.key", "a57a4468-6fef-497e-a172-6fde4a223ee0"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("InputAmountOnChange"), t = r.callContext(t);
                        var u = new n.DataTypes.VariableHolder(new(r.constructor.getVariableGroupType("uae.TransferFlow.TransferAmountBlock.InputAmountOnChange$vars"))),
                            l = new n.DataTypes.VariableHolder,
                            i = new n.DataTypes.VariableHolder,
                            S = new n.DataTypes.VariableHolder,
                            v = new n.DataTypes.VariableHolder;
                        if (!e.variables.is_loadingVar) {
                            if (e.variables.transfer_dataVar.from_amountAttr.equals(n.BuiltinFunctions.integerToDecimal(0))) e.variables.transfer_dataVar.quoteAttr.transfer_feeAttr = n.BuiltinFunctions.integerToDecimal(0), e.variables.transfer_dataVar.quoteAttr.to_net_amountAttr = n.BuiltinFunctions.integerToDecimal(0), e.variables.transfer_dataVar.quoteAttr.from_net_amountAttr = n.BuiltinFunctions.integerToDecimal(0);
                            else if (v.value = n.SystemActions.listIndexOf(e.variables.exchange_ratesVar, function(_) {
                                    return n.BuiltinFunctions.toLower(_.codeAttr) === n.BuiltinFunctions.toLower(e.variables.transfer_dataVar.fromAttr.currencyAttr)
                                }, t), i.value = n.SystemActions.listIndexOf(e.variables.exchange_ratesVar, function(_) {
                                    return n.BuiltinFunctions.toLower(_.codeAttr) === n.BuiltinFunctions.toLower(e.variables.transfer_dataVar.toAttr.currencyAttr)
                                }, t), v.value.positionOut > -1 && i.value.positionOut > -1) e.variables.transfer_dataVar.fromAttr.client_rateAttr = e.variables.exchange_ratesVar.getItem(v.value.positionOut).priceAttr, e.variables.transfer_dataVar.toAttr.client_rateAttr = e.variables.exchange_ratesVar.getItem(i.value.positionOut).priceAttr, e.variables.transfer_dataVar.from_amountAttr.lte(e.variables.transfer_dataVar.fromAttr.balanceAttr) ? (S.value = h.roundNumber$Action(n.BuiltinFunctions.decimalToText(e.variables.from_currency_configVar.limitAttr.transferAttr.min_amount_per_transactionAttr.times(e.variables.exchange_ratesVar.getItem(v.value.positionOut).priceAttr)), "up", t), l.value = h.roundNumber$Action(n.BuiltinFunctions.decimalToText(e.variables.from_currency_configVar.limitAttr.transferAttr.max_amount_per_transactionAttr.times(e.variables.exchange_ratesVar.getItem(v.value.positionOut).priceAttr)), "down", t), u.value.min_transfer_amountVar = n.BuiltinFunctions.textToDecimal(S.value.roundedValueOut), u.value.max_transfer_amountVar = n.BuiltinFunctions.textToDecimal(l.value.roundedValueOut), e.variables.transfer_dataVar.from_amountAttr.gte(u.value.min_transfer_amountVar) ? e.variables.transfer_dataVar.from_amountAttr.lte(u.value.max_transfer_amountVar) ? (e.widgets.get(o.getId("Input_amount")).validAttr = !0, e.widgets.get(o.getId("Input_amount")).validationMessageAttr = n.Injector.resolve(n.ServiceNames.TranslationsService).getMessage("s6jyE4eRZUabWvGImHeQww#Value.-1831186718.1", "Balance: ") + n.BuiltinFunctions.decimalToText(e.variables.transfer_dataVar.fromAttr.balanceAttr) + " " + e.variables.transfer_dataVar.fromAttr.currencyAttr, e.variables.transfer_dataVar.quoteAttr.transfer_feeAttr = e.variables.transfer_dataVar.from_amountAttr.times(e.variables.transfer_dataVar.quoteAttr.transfer_fee_percentageAttr).div(n.BuiltinFunctions.integerToDecimal(100)), e.variables.transfer_dataVar.quoteAttr.from_net_amountAttr = e.variables.transfer_dataVar.from_amountAttr.minus(e.variables.transfer_dataVar.quoteAttr.transfer_feeAttr), e.variables.transfer_dataVar.fromAttr.currencyAttr === e.variables.transfer_dataVar.toAttr.currencyAttr ? e.variables.transfer_dataVar.quoteAttr.to_net_amountAttr = e.variables.transfer_dataVar.quoteAttr.from_net_amountAttr : v.value.positionOut > -1 && i.value.positionOut > -1 ? e.variables.transfer_dataVar.quoteAttr.to_net_amountAttr = n.BuiltinFunctions.round(e.variables.transfer_dataVar.quoteAttr.from_net_amountAttr.div(e.variables.exchange_ratesVar.getItem(v.value.positionOut).priceAttr).times(e.variables.exchange_ratesVar.getItem(i.value.positionOut).priceAttr), 16) : (e.widgets.get(o.getId("Input_amount")).validAttr = !1, e.widgets.get(o.getId("Input_amount")).validationMessageAttr = n.Injector.resolve(n.ServiceNames.TranslationsService).getMessage("KY0yqA6IQkq1EQzH93WK6g#Value.1106606277.1", "Exchange rate error"), e.variables.transfer_dataVar.quoteAttr.to_net_amountAttr = n.BuiltinFunctions.integerToDecimal(0))) : (e.widgets.get(o.getId("Input_amount")).validAttr = !1, e.widgets.get(o.getId("Input_amount")).validationMessageAttr = n.Injector.resolve(n.ServiceNames.TranslationsService).getMessage("9bGVIUyzbEGehlVm3czfeA#Value.152875427.1", "Maximum transfer amount is ") + h.formatCurrency2$Action(n.BuiltinFunctions.decimalToText(u.value.max_transfer_amountVar), t).formattedBalanceOut + " " + e.variables.transfer_dataVar.fromAttr.currencyAttr + ".") : (e.widgets.get(o.getId("Input_amount")).validAttr = !1, e.widgets.get(o.getId("Input_amount")).validationMessageAttr = n.Injector.resolve(n.ServiceNames.TranslationsService).getMessage("TpU+FLkva0aKOLBVOAXV1w#Value.-301709167.1", "Minimum transfer amount is ") + h.formatCurrency2$Action(n.BuiltinFunctions.decimalToText(u.value.min_transfer_amountVar), t).formattedBalanceOut + " " + e.variables.transfer_dataVar.fromAttr.currencyAttr + ".")) : (e.widgets.get(o.getId("Input_amount")).validAttr = !1, e.widgets.get(o.getId("Input_amount")).validationMessageAttr = n.Injector.resolve(n.ServiceNames.TranslationsService).getMessage("uYZhGohD9EyfGJMizD1TzA#Value.-1374296970.1", "Insufficient balance. Your balance is ") + n.BuiltinFunctions.decimalToText(e.variables.transfer_dataVar.fromAttr.balanceAttr) + " " + e.variables.transfer_dataVar.fromAttr.currencyAttr + ".");
                            else return;
                            h.updateTransferData$Action(e.variables.transfer_dataVar, t)
                        }
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__inputAmountOnChange$Action
        }
        set _inputAmountOnChange$Action(t) {
            this.__inputAmountOnChange$Action = t
        }
        get _getFromCurrencyConfig$Action() {
            return this.hasOwnProperty("__getFromCurrencyConfig$Action") || (this.__getFromCurrencyConfig$Action = function(t) {
                var e = this.model,
                    r = this.controller,
                    o = this.idService;
                return n.Logger.startActiveSpan("GetFromCurrencyConfig", function(a) {
                    return a && (a.setAttribute("code.function", "GetFromCurrencyConfig"), a.setAttribute("outsystems.function.key", "a9f4cd89-fa10-4db5-81e8-d073a54dad10"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                        r.ensureControllerAlive("GetFromCurrencyConfig"), t = r.callContext(t);
                        var u = new n.DataTypes.VariableHolder;
                        return n.Flow.executeAsyncFlow(function() {
                            return e.flush(), r.getCurrencyConfig$ServerAction(e.variables.transfer_dataVar.fromAttr.currencyAttr, t).then(function(l) {
                                u.value = l
                            }).then(function() {
                                e.variables.from_currency_configVar = u.value.responseOut.dataAttr.getItem(0)
                            })
                        })
                    }, function() {
                        a && a.end()
                    })
                }, 1)
            }), this.__getFromCurrencyConfig$Action
        }
        set _getFromCurrencyConfig$Action(t) {
            this.__getFromCurrencyConfig$Action = t
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(t) {
                var e = this.model,
                    r = this.controller,
                    o = this.idService;
                return n.Logger.startActiveSpan("OnReady", function(a) {
                    a && (a.setAttribute("code.function", "OnReady"), a.setAttribute("outsystems.function.key", "d010a046-35b8-4d1e-864c-78196d94b806"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnReady"), t = r.callContext(t);
                        var u = new n.DataTypes.VariableHolder;
                        u.value = h.getTransferData$Action(t), e.variables.transfer_dataVar = u.value.transfer_dataOut, e.variables.is_loadingVar = !0, n.Logger.startActiveSpan("ParallelCalls", function(l) {
                            l && (l.setAttribute("code.function", "ParallelCalls"), l.setAttribute("outsystems.function.key", "9ac62255-3c9d-4ea0-8d73-792a5ab7dd71"), l.setAttribute("outsystems.function.owner.name", "uae"), l.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), l.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return r.safeExecuteJSNode(_e, "ParallelCalls", "OnReady", null, function(i) {}, {
                                    GetExchangeRates: r.clientActionProxies.getExchangeRates$Action,
                                    GetFromCurrencyConfig: r.clientActionProxies.getFromCurrencyConfig$Action,
                                    GetToCurrencyConfig: r.clientActionProxies.getToCurrencyConfig$Action,
                                    OnFetchAPIs: r.clientActionProxies.onFetchAPIs$Action
                                }, {})
                            } finally {
                                l && l.end()
                            }
                        }, 1), n.Logger.startActiveSpan("AddEventListener", function(l) {
                            l && (l.setAttribute("code.function", "AddEventListener"), l.setAttribute("outsystems.function.key", "e5175335-5399-4679-8614-264c69ee4085"), l.setAttribute("outsystems.function.owner.name", "uae"), l.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), l.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return r.safeExecuteJSNode(Ae, "AddEventListener", "OnReady", null, function(i) {}, {}, {})
                            } finally {
                                l && l.end()
                            }
                        }, 1)
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(t) {
            this.__onReady$Action = t
        }
        get _onClickTransfer$Action() {
            return this.hasOwnProperty("__onClickTransfer$Action") || (this.__onClickTransfer$Action = function(t) {
                var e = this.model,
                    r = this.controller,
                    o = this.idService;
                return n.Logger.startActiveSpan("OnClickTransfer", function(a) {
                    a && (a.setAttribute("code.function", "OnClickTransfer"), a.setAttribute("outsystems.function.key", "dabb88ff-19b6-4954-a5d6-bd0ff25002de"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        if (r.ensureControllerAlive("OnClickTransfer"), t = r.callContext(t), e.widgets.get(o.getId("TransferForm")).validAttr) return h.updateTransferData$Action(e.variables.transfer_dataVar, t), n.Navigation.navigateTo(n.Navigation.generateScreenURL("uae", "confirm-transfer", {}), n.Transitions.createTransition(n.Transitions.TransitionAnimation.Default), t, !0)
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__onClickTransfer$Action
        }
        set _onClickTransfer$Action(t) {
            this.__onClickTransfer$Action = t
        }
        getExchangeRates$Action(t) {
            var e = this.controller;
            return n.Logger.startActiveSpan("GetExchangeRates__proxy", function(r) {
                return r && (r.setAttribute("code.function", "GetExchangeRates"), r.setAttribute("outsystems.function.key", "6ef883a6-51eb-4848-81de-0181e8550cdc"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                    return e.safeExecuteClientAction(e._getExchangeRates$Action, t)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        onFetchAPIs$Action(t) {
            var e = this.controller;
            return n.Logger.startActiveSpan("OnFetchAPIs__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnFetchAPIs"), r.setAttribute("outsystems.function.key", "8583a8b6-1697-46cd-b86c-2d8732cc0d1b"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._onFetchAPIs$Action, t)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        onSelectPercentage$Action(t, e) {
            var r = this.controller;
            return n.Logger.startActiveSpan("OnSelectPercentage__proxy", function(o) {
                o && (o.setAttribute("code.function", "OnSelectPercentage"), o.setAttribute("outsystems.function.key", "90d61012-7435-4f35-a639-44cbaca3db63"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onSelectPercentage$Action, e, t)
                } finally {
                    o && o.end()
                }
            }, 0)
        }
        getToCurrencyConfig$Action(t) {
            var e = this.controller;
            return n.Logger.startActiveSpan("GetToCurrencyConfig__proxy", function(r) {
                return r && (r.setAttribute("code.function", "GetToCurrencyConfig"), r.setAttribute("outsystems.function.key", "9f3908c7-0ea6-4eeb-8531-3ef649b263f2"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                    return e.safeExecuteClientAction(e._getToCurrencyConfig$Action, t)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        inputAmountOnChange$Action(t) {
            var e = this.controller;
            return n.Logger.startActiveSpan("InputAmountOnChange__proxy", function(r) {
                r && (r.setAttribute("code.function", "InputAmountOnChange"), r.setAttribute("outsystems.function.key", "a57a4468-6fef-497e-a172-6fde4a223ee0"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._inputAmountOnChange$Action, t)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        getFromCurrencyConfig$Action(t) {
            var e = this.controller;
            return n.Logger.startActiveSpan("GetFromCurrencyConfig__proxy", function(r) {
                return r && (r.setAttribute("code.function", "GetFromCurrencyConfig"), r.setAttribute("outsystems.function.key", "a9f4cd89-fa10-4db5-81e8-d073a54dad10"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                    return e.safeExecuteClientAction(e._getFromCurrencyConfig$Action, t)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        onReady$Action(t) {
            var e = this.controller;
            return n.Logger.startActiveSpan("OnReady__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "d010a046-35b8-4d1e-864c-78196d94b806"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._onReady$Action, t)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        onClickTransfer$Action(t) {
            var e = this.controller;
            return n.Logger.startActiveSpan("OnClickTransfer__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnClickTransfer"), r.setAttribute("outsystems.function.key", "dabb88ff-19b6-4954-a5d6-bd0ff25002de"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._onClickTransfer$Action, t)
                } finally {
                    r && r.end()
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
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(t) {
                var e = this.controller,
                    r = this.model,
                    o = this.idService;
                return e.onReady$Action(t)
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
            return h.defaultTimeout
        }
    };
    s(m, "ControllerInner");
    let g = m;
    w = g, w.registerVariableGroupType("uae.TransferFlow.TransferAmountBlock$ActionGetExchangerates", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: n.DataTypes.DataTypes.Record,
        defaultValue: s(function() {
            return new N
        }, "defaultValue"),
        complexType: N
    }]), w.registerVariableGroupType("uae.TransferFlow.TransferAmountBlock$ActionGetCurrencyConfig", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: n.DataTypes.DataTypes.Record,
        defaultValue: s(function() {
            return new H
        }, "defaultValue"),
        complexType: H
    }]), w.registerVariableGroupType("uae.TransferFlow.TransferAmountBlock.OnFetchAPIs$vars", [{
        name: "usd",
        attrName: "usdVar",
        mandatory: !1,
        dataType: n.DataTypes.DataTypes.Record,
        defaultValue: s(function() {
            return new V
        }, "defaultValue"),
        complexType: V
    }]), w.registerVariableGroupType("uae.TransferFlow.TransferAmountBlock.OnFetchAPIs$getTransferFeeJSResult", [{
        name: "transfer_fee_percentage",
        attrName: "transfer_fee_percentageOut",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Decimal,
        defaultValue: s(function() {
            return n.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }]), w.registerVariableGroupType("uae.TransferFlow.TransferAmountBlock.OnSelectPercentage$vars", [{
        name: "percentage",
        attrName: "percentageInLocal",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Integer,
        defaultValue: s(function() {
            return 0
        }, "defaultValue")
    }, {
        name: "amount",
        attrName: "amountVar",
        mandatory: !1,
        dataType: n.DataTypes.DataTypes.Decimal,
        defaultValue: s(function() {
            return n.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }]), w.registerVariableGroupType("uae.TransferFlow.TransferAmountBlock.InputAmountOnChange$vars", [{
        name: "min_transfer_amount",
        attrName: "min_transfer_amountVar",
        mandatory: !1,
        dataType: n.DataTypes.DataTypes.Decimal,
        defaultValue: s(function() {
            return n.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }, {
        name: "max_transfer_amount",
        attrName: "max_transfer_amountVar",
        mandatory: !1,
        dataType: n.DataTypes.DataTypes.Decimal,
        defaultValue: s(function() {
            return n.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }])
}
var w, ke = new n.Controller.ControllerFactory(w, M);
var $e = R.PlaceholderContent,
    Ft = R.IteratorPlaceholderContent,
    Ge = s(function() {
        var g = xe(function(m) {
            var c = m.model,
                t = m.controller,
                e = m.controller.idService,
                r = t.validationService,
                o = t.callContext(),
                a = $,
                u = B,
                l = {
                    props: m,
                    validateWidget: s(function(f) {
                        m.validateWidget(m, f)
                    }, "validateWidget")
                },
                i = c,
                S = z,
                v = W,
                _ = G();
            return d.createElement("div", m.rootNodeProperties, d.createElement(A, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "display: flex; flex-direction: column; height: 100%; justify-content: space-between;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: i
            }, d.createElement(we, {
                _validationProps: {
                    validationService: r
                },
                extendedProperties: {
                    style: "border: 0px; display: flex; flex-direction: column; height: 100%; padding: 0px;"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                style: "form card",
                _idProps: {
                    service: e,
                    name: "TransferForm"
                },
                _widgetRecordProvider: i
            }, d.createElement(A, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-self: stretch; display: flex; flex: 1 0 0; flex-direction: column; gap: 24px; padding-bottom: 24px;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: i
            }, d.createElement(P, {
                extendedProperties: {
                    style: "color: var(--text-brandPrimaryProminent, #00375C); font-size: 24px; font-style: normal; font-weight: 900; line-height: normal;"
                },
                text: [v(u("d4H3Gg09Gku6rFiiAeCnOw#Value", "Amount"))],
                _idProps: {
                    service: e,
                    uuid: "3"
                },
                _widgetRecordProvider: i
            }), d.createElement(A, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "4"
                },
                _widgetRecordProvider: i
            }, d.createElement(A, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: flex-start; align-self: stretch; border-bottom: 1px solid var(--border-secondary, rgba(0, 0, 0, 0.08); display: flex; flex-direction: column;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "5"
                },
                _widgetRecordProvider: i
            }, d.createElement(A, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: flex-start; align-self: stretch; display: flex; gap: 16px; padding: 16px 0px;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    name: "FromContainer"
                },
                _widgetRecordProvider: i
            }, d.createElement(P, {
                extendedProperties: {
                    style: "color: var(--text-subtle, rgba(0, 0, 0, 0.48)); flex: 1 0 0; font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                },
                text: [v(u("4KA+Gd6uY0uXExFUPtyzGw#Value", "From"))],
                _idProps: {
                    service: e,
                    uuid: "7"
                },
                _widgetRecordProvider: i
            }), d.createElement(A, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: center; display: flex; gap: 8px; justify-content: center;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "8"
                },
                _widgetRecordProvider: i
            }, d.createElement(Z, {
                extendedProperties: {
                    style: "height: 24px;"
                },
                gridProperties: {
                    width: "24px",
                    marginLeft: "0"
                },
                type: 1,
                url: c.variables.transfer_dataVar.fromAttr.logoAttr,
                _idProps: {
                    service: e,
                    uuid: "9"
                },
                _widgetRecordProvider: i
            }), d.createElement(T, {
                extendedProperties: {
                    style: "---comment-7: /* 150% */; color: var(--text-prominent, rgba(0, 0, 0, 0.96)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                value: c.variables.transfer_dataVar.fromAttr.nameAttr,
                _idProps: {
                    service: e,
                    uuid: "10"
                },
                _widgetRecordProvider: i
            })))), d.createElement(A, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: flex-start; align-self: stretch; border-bottom: 1px solid var(--border-secondary, rgba(0, 0, 0, 0.08); display: flex; flex-direction: column;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "11"
                },
                _widgetRecordProvider: i
            }, d.createElement(A, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: flex-start; align-self: stretch; display: flex; gap: 16px; padding: 16px 0px;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ToContainer"
                },
                _widgetRecordProvider: i
            }, d.createElement(P, {
                extendedProperties: {
                    style: "color: var(--text-subtle, rgba(0, 0, 0, 0.48)); flex: 1 0 0; font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                },
                text: [v(u("cOS4UbKjMUCEISZ8MPArug#Value", "To"))],
                _idProps: {
                    service: e,
                    uuid: "13"
                },
                _widgetRecordProvider: i
            }), d.createElement(A, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: center; display: flex; gap: 8px; justify-content: center;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "14"
                },
                _widgetRecordProvider: i
            }, d.createElement(Z, {
                extendedProperties: {
                    style: "height: 24px;"
                },
                gridProperties: {
                    width: "24px",
                    marginLeft: "0"
                },
                type: 1,
                url: c.variables.transfer_dataVar.toAttr.logoAttr,
                _idProps: {
                    service: e,
                    uuid: "15"
                },
                _widgetRecordProvider: i
            }), d.createElement(T, {
                extendedProperties: {
                    style: "---comment-7: /* 150% */; color: var(--text-prominent, rgba(0, 0, 0, 0.96)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                value: c.variables.transfer_dataVar.toAttr.nameAttr,
                _idProps: {
                    service: e,
                    uuid: "16"
                },
                _widgetRecordProvider: i
            }))))), d.createElement(A, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "display: flex; flex-direction: column; gap: 8px;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "17"
                },
                _widgetRecordProvider: i
            }, d.createElement(P, {
                extendedProperties: {
                    style: "color: var(--text-prominent, rgba(0, 0, 0, 0.96)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                },
                text: [v(u("Yut3o4Y+vE24PPMXMcRYRQ#Value", "Transfer amount"))],
                _idProps: {
                    service: e,
                    uuid: "18"
                },
                _widgetRecordProvider: i
            }), d.createElement(te, {
                getOwnerSpan: s(function() {
                    return _.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return _.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ExtendedClass: "transfer-amount",
                    AlignIconRight: !0
                },
                events: {
                    _handleError: s(function(f) {
                        t.handleError(f)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: r,
                    validationParentId: e.getId("TransferForm")
                },
                _idProps: {
                    service: e,
                    uuid: "19",
                    alias: "1"
                },
                _widgetRecordProvider: i,
                placeholders: {
                    icon: new $e(function() {
                        return [d.createElement(T, {
                            value: c.variables.transfer_dataVar.fromAttr.currencyAttr,
                            _idProps: {
                                service: e,
                                uuid: "20"
                            },
                            _widgetRecordProvider: i
                        })]
                    }),
                    input: new $e(function() {
                        return [d.createElement(Pe, {
                            _validationProps: {
                                validationService: r,
                                validationParentId: e.getId("TransferForm")
                            },
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: 2,
                            mandatory: !1,
                            maxLength: 0,
                            onChange: s(function() {
                                var f = typeof o != "undefined" && o !== null ? o.clone() : t.callContext().clone();
                                t.inputAmountOnChange$Action(t.callContext(f))
                            }, "onChange"),
                            prompt: E.resolve(x.TranslationsService).getMessage("67gQKxXk2UWebEmj50RCTw#ValueExpression.1964981368.1", "Amount"),
                            style: "form-control transfer-amount-input",
                            variable: c.createVariable(he.DataTypes.Currency, c.variables.transfer_dataVar.from_amountAttr, function(f) {
                                c.variables.transfer_dataVar.from_amountAttr = f
                            }),
                            _idProps: {
                                service: e,
                                name: "Input_amount"
                            },
                            _widgetRecordProvider: i
                        })]
                    })
                },
                _dependencies: [a(c.variables.transfer_dataVar.from_amountAttr), a(c.variables.transfer_dataVar.fromAttr.currencyAttr)]
            }), d.createElement(T, {
                extendedProperties: {
                    style: "---comment-6: /* 157.143% */; color: var(--text-subtle, rgba(0, 0, 0, 0.48)); font-size: 14px; font-style: normal; font-weight: 400; line-height: 22px;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                style: c.getCachedValue(e.getId("7FSAG_Js3kqeRuy6ONE_ZA.Style"), function() {
                    return c.widgets.get(e.getId("Input_amount")).validAttr ? "" : "invisible"
                }, function() {
                    return c.widgets.get(e.getId("Input_amount")).validAttr
                }),
                value: c.getCachedValue(e.getId("7FSAG_Js3kqeRuy6ONE_ZA.Value"), function() {
                    return E.resolve(x.TranslationsService).getMessage("_YMpgk_kX0yGnhdyPXE3Kw#ValueExpression.-1831186718.1", "Balance: ") + (c.variables.transfer_dataVar.fromAttr.currencyAttr === "AED" || c.variables.transfer_dataVar.fromAttr.currencyAttr === "USD" ? b.formatCurrency(c.variables.transfer_dataVar.fromAttr.balanceAttr, "", 2, ".", ",") : b.formatCurrency(c.variables.transfer_dataVar.fromAttr.balanceAttr, "", 8, ".", ",")) + " " + c.variables.transfer_dataVar.fromAttr.currencyAttr
                }, function() {
                    return c.variables.transfer_dataVar.fromAttr.currencyAttr
                }, function() {
                    return c.variables.transfer_dataVar.fromAttr.balanceAttr
                }),
                _idProps: {
                    service: e,
                    uuid: "22"
                },
                _widgetRecordProvider: i
            })), d.createElement(A, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: flex-start; align-self: stretch; display: flex; gap: 8px;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "23"
                },
                _widgetRecordProvider: i
            }, d.createElement(F, {
                enabled: !0,
                extendedProperties: {
                    style: "align-items: center; border: 1px solid var(--color-opacity-black-100, rgba(0, 0, 0, 0.08)); border-radius: 96px; display: flex; flex: 1 0 0; gap: 8px; height: 32px; justify-content: center; margin-top: 0px; max-height: 32px; min-height: 32px; padding: 0px 16px;"
                },
                isDefault: !1,
                onClick: s(function() {
                    var f = typeof o != "undefined" && o !== null ? o.clone() : t.callContext().clone();
                    t.onSelectPercentage$Action(25, t.callContext(f))
                }, "onClick"),
                style: "btn percentage-button",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "24"
                },
                _widgetRecordProvider: i
            }, "25%"), d.createElement(F, {
                enabled: !0,
                extendedProperties: {
                    style: "align-items: center; border: 1px solid var(--color-opacity-black-100, rgba(0, 0, 0, 0.08)); border-radius: 96px; display: flex; flex: 1 0 0; gap: 8px; height: 32px; justify-content: center; margin-top: 0px; max-height: 32px; min-height: 32px; padding: 0px 16px;"
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                isDefault: !1,
                onClick: s(function() {
                    var f = typeof o != "undefined" && o !== null ? o.clone() : t.callContext().clone();
                    t.onSelectPercentage$Action(50, t.callContext(f))
                }, "onClick"),
                style: "btn percentage-button",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "25"
                },
                _widgetRecordProvider: i
            }, "50%"), d.createElement(F, {
                enabled: !0,
                extendedProperties: {
                    style: "align-items: center; border: 1px solid var(--color-opacity-black-100, rgba(0, 0, 0, 0.08)); border-radius: 96px; display: flex; flex: 1 0 0; gap: 8px; height: 32px; justify-content: center; margin-top: 0px; max-height: 32px; min-height: 32px; padding: 0px 16px;"
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                isDefault: !1,
                onClick: s(function() {
                    var f = typeof o != "undefined" && o !== null ? o.clone() : t.callContext().clone();
                    t.onSelectPercentage$Action(75, t.callContext(f))
                }, "onClick"),
                style: "btn percentage-button",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "26"
                },
                _widgetRecordProvider: i
            }, "75%"), d.createElement(F, {
                enabled: !0,
                extendedProperties: {
                    style: "align-items: center; border: 1px solid var(--color-opacity-black-100, rgba(0, 0, 0, 0.08)); border-radius: 96px; display: flex; flex: 1 0 0; gap: 8px; height: 32px; justify-content: center; margin-top: 0px; max-height: 32px; min-height: 32px; padding: 0px 16px;"
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                isDefault: !1,
                onClick: s(function() {
                    var f = typeof o != "undefined" && o !== null ? o.clone() : t.callContext().clone();
                    t.onSelectPercentage$Action(100, t.callContext(f))
                }, "onClick"),
                style: "btn percentage-button",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "27"
                },
                _widgetRecordProvider: i
            }, "100%"))), d.createElement(A, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-self: stretch; display: flex; flex-direction: column; gap: 8px; padding-top: 16px;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "28"
                },
                _widgetRecordProvider: i
            }, d.createElement(A, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: flex-start; align-self: stretch; display: flex; justify-content: space-between;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "29"
                },
                _widgetRecordProvider: i
            }, d.createElement(P, {
                extendedProperties: {
                    style: "---comment-5: /* 150% */; color: var(--text-prominent, rgba(0, 0, 0, 0.96)); font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px;"
                },
                text: [v(u("0CXmLMrHkUaA8A4bFAEUbA#Value", "You\u2019re transferring"))],
                _idProps: {
                    service: e,
                    uuid: "30"
                },
                _widgetRecordProvider: i
            }), d.createElement(T, {
                extendedProperties: {
                    style: "---comment-7: /* 150% */; color: var(--text-prominent, rgba(0, 0, 0, 0.96)); font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px; text-align: right;"
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                value: c.getCachedValue(e.getId("94+p18u_OUOz8QhKlVLgXw.Value"), function() {
                    return (c.variables.transfer_dataVar.from_amountAttr.gt(b.integerToDecimal(0)) ? c.variables.transfer_dataVar.fromAttr.currencyAttr === "AED" || c.variables.transfer_dataVar.fromAttr.currencyAttr === "USD" ? b.formatCurrency(c.variables.transfer_dataVar.from_amountAttr, "", 2, ".", ",") : b.formatCurrency(c.variables.transfer_dataVar.from_amountAttr, "", 8, ".", ",") : "-") + " " + c.variables.transfer_dataVar.fromAttr.currencyAttr
                }, function() {
                    return c.variables.transfer_dataVar.from_amountAttr
                }, function() {
                    return c.variables.transfer_dataVar.fromAttr.currencyAttr
                }),
                _idProps: {
                    service: e,
                    uuid: "31"
                },
                _widgetRecordProvider: i
            })), d.createElement(ne, {
                getOwnerSpan: s(function() {
                    return _.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return _.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Space: I.space.none
                },
                events: {
                    _handleError: s(function(f) {
                        t.handleError(f)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: r,
                    validationParentId: e.getId("TransferForm")
                },
                _idProps: {
                    service: e,
                    uuid: "32",
                    alias: "2"
                },
                _widgetRecordProvider: i,
                _dependencies: []
            }), d.createElement(A, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: flex-start; align-self: stretch; display: flex; justify-content: space-between;"
                },
                visible: !1,
                _idProps: {
                    service: e,
                    uuid: "33"
                },
                _widgetRecordProvider: i
            }, d.createElement(T, {
                extendedProperties: {
                    style: "---comment-5: /* 150% */; color: var(--text-prominent, rgba(0, 0, 0, 0.96)); font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px;"
                },
                value: c.getCachedValue(e.getId("Yje7fM8hlUOItSNkB8JliQ.Value"), function() {
                    return E.resolve(x.TranslationsService).getMessage("qzpll3sWl02jngjL9K0pxg#ValueExpression.-1273591729.1", "Transfer fee ") + (c.variables.transfer_dataVar.quoteAttr.transfer_fee_percentageAttr.gt(b.integerToDecimal(0)) ? E.resolve(x.TranslationsService).getMessage("qzpll3sWl02jngjL9K0pxg#ValueExpression.40.1", "(") + b.decimalToText(c.variables.transfer_dataVar.quoteAttr.transfer_fee_percentageAttr) + E.resolve(x.TranslationsService).getMessage("qzpll3sWl02jngjL9K0pxg#ValueExpression.1188.1", "%)") : "")
                }, function() {
                    return c.variables.transfer_dataVar.quoteAttr.transfer_fee_percentageAttr
                }),
                _idProps: {
                    service: e,
                    uuid: "34"
                },
                _widgetRecordProvider: i
            }), d.createElement(T, {
                extendedProperties: {
                    style: "---comment-7: /* 150% */; color: var(--text-prominent, rgba(0, 0, 0, 0.96)); font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px; text-align: right;"
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                value: c.getCachedValue(e.getId("1eJ8zwndT0+3UtOalLnVDw.Value"), function() {
                    return (c.variables.transfer_dataVar.quoteAttr.transfer_feeAttr.gt(b.integerToDecimal(0)) ? c.variables.transfer_dataVar.fromAttr.currencyAttr === "AED" || c.variables.transfer_dataVar.fromAttr.currencyAttr === "USD" ? b.formatCurrency(c.variables.transfer_dataVar.quoteAttr.transfer_feeAttr, "", 4, ".", ",") : b.formatCurrency(c.variables.transfer_dataVar.quoteAttr.transfer_feeAttr, "", 8, ".", ",") : "-") + " " + c.variables.transfer_dataVar.fromAttr.currencyAttr
                }, function() {
                    return c.variables.transfer_dataVar.quoteAttr.transfer_feeAttr
                }, function() {
                    return c.variables.transfer_dataVar.fromAttr.currencyAttr
                }),
                _idProps: {
                    service: e,
                    uuid: "35"
                },
                _widgetRecordProvider: i
            })), d.createElement(A, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: flex-start; align-self: stretch; display: flex; justify-content: space-between;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "36"
                },
                _widgetRecordProvider: i
            }, d.createElement(T, {
                extendedProperties: {
                    style: "---comment-5: /* 150% */; color: var(--text-prominent, rgba(0, 0, 0, 0.96)); font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px;"
                },
                value: E.resolve(x.TranslationsService).getMessage("HCk4dSbWBkmrDHe+RPlgJQ#ValueExpression.-59419061.1", "You'll receive"),
                _idProps: {
                    service: e,
                    uuid: "37"
                },
                _widgetRecordProvider: i
            }), d.createElement(T, {
                extendedProperties: {
                    style: "---comment-7: /* 150% */; color: var(--text-prominent, rgba(0, 0, 0, 0.96)); font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px; text-align: right;"
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                value: c.getCachedValue(e.getId("6qYHX6JNhUGqe6nqwUNJig.Value"), function() {
                    return "\u2248" + (c.variables.transfer_dataVar.quoteAttr.to_net_amountAttr.gt(b.integerToDecimal(0)) ? c.variables.transfer_dataVar.toAttr.currencyAttr === "AED" || c.variables.transfer_dataVar.toAttr.currencyAttr === "USD" ? b.formatCurrency(c.variables.transfer_dataVar.quoteAttr.to_net_amountAttr, "", 2, ".", ",") : b.formatCurrency(c.variables.transfer_dataVar.quoteAttr.to_net_amountAttr, "", 8, ".", ",") : "-") + " " + c.variables.transfer_dataVar.toAttr.currencyAttr
                }, function() {
                    return c.variables.transfer_dataVar.quoteAttr.to_net_amountAttr
                }, function() {
                    return c.variables.transfer_dataVar.toAttr.currencyAttr
                }),
                _idProps: {
                    service: e,
                    uuid: "38"
                },
                _widgetRecordProvider: i
            })), d.createElement(F, {
                enabled: c.variables.transfer_dataVar.from_amountAttr.gt(b.integerToDecimal(0)) && c.widgets.get(e.getId("TransferForm")).validAttr && c.variables.is_loadingVar === !1,
                extendedProperties: {
                    style: "margin-top: 8px;"
                },
                isDefault: !0,
                onClick: s(function() {
                    l.validateWidget(e.getId("TransferForm"));
                    var f = typeof o != "undefined" && o !== null ? o.clone() : t.callContext().clone();
                    t.onClickTransfer$Action(t.callContext(f))
                }, "onClick"),
                style: "btn btn-primary action-button w-full",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "39"
                },
                _widgetRecordProvider: i
            }, d.createElement(A, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "display: block;"
                },
                style: c.getCachedValue(e.getId("lTmQkILLmUO6j8vHAeewBw.Style"), function() {
                    return c.variables.is_loadingVar ? "osui-btn-loading__spinner-animation" : ""
                }, function() {
                    return c.variables.is_loadingVar
                }),
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "40"
                },
                _widgetRecordProvider: i
            }), d.createElement(P, {
                extendedProperties: {
                    style: "font-size: 16px; font-weight: bold;"
                },
                text: [v(u("TFAMqWmM2EmkIO_JtIiI_A#Value", "Transfer"))],
                _idProps: {
                    service: e,
                    uuid: "41"
                },
                _widgetRecordProvider: i
            }))))))
        }, {
            topLevelComponent: !1,
            getAttributes: s(function() {
                return {
                    codeFunction: "TransferAmountBlock",
                    functionKey: "e726d6e9-78d8-4ffe-81d0-676840d37d8f",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "TransferFlow.TransferAmountBlock",
            modelFactory: Re,
            controllerFactory: ke
        });
        return g.getCssDependencies = function() {
            return ["css/uae.TransferFlow.TransferAmountBlock.css", "css/OutSystemsReactWidgets.css"]
        }, g.getJsDependencies = function() {
            return []
        }, g.getBlocks = function() {
            return [te, ne]
        }, g
    }, "componentFactory"),
    K = Ge();
var pe = R.PlaceholderContent,
    jt = R.IteratorPlaceholderContent,
    We = s(function() {
        var g = Ee(function(m) {
            var c = m.model,
                t = m.controller,
                e = m.controller.idService,
                r = t.validationService,
                o = t.callContext(),
                a = $,
                u = B,
                l = {
                    props: m,
                    validateWidget: s(function(f) {
                        m.validateWidget(m, f)
                    }, "validateWidget")
                },
                i = c,
                S = z,
                v = W,
                _ = G();
            return O.createElement("div", m.rootNodeProperties, S(Ce.isDesktop$Action(o).isDesktopOut, !1, this, function() {
                return [O.createElement(re, {
                    getOwnerSpan: s(function() {
                        return _.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: s(function() {
                        return _.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        ShowBackbutton: !0,
                        ShowClosebutton: !0
                    },
                    events: {
                        _handleError: s(function(f) {
                            t.handleError(f)
                        }, "_handleError"),
                        closeBtnEvent$Action: s(function() {
                            var f = typeof o != "undefined" && o !== null ? o.clone() : t.callContext().clone();
                            t.desktopProcessLayoutCloseBtnEvent$Action(t.callContext(f))
                        }, "closeBtnEvent$Action"),
                        backBtnEvent$Action: s(function() {
                            var f = typeof o != "undefined" && o !== null ? o.clone() : t.callContext().clone();
                            t.desktopProcessLayoutBackBtnEvent$Action(t.callContext(f))
                        }, "backBtnEvent$Action")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: e,
                        uuid: "0",
                        alias: "1"
                    },
                    _widgetRecordProvider: i,
                    placeholders: {
                        contentbody: new pe(function() {
                            return [O.createElement(A, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "padding-top: 24px;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "1"
                                },
                                _widgetRecordProvider: i
                            }, O.createElement(K, {
                                getOwnerSpan: s(function() {
                                    return _.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: s(function() {
                                    return _.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {},
                                events: {
                                    _handleError: s(function(f) {
                                        t.handleError(f)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: r
                                },
                                _idProps: {
                                    service: e,
                                    uuid: "2",
                                    alias: "2"
                                },
                                _widgetRecordProvider: i,
                                _dependencies: []
                            }))]
                        })
                    },
                    _dependencies: []
                })]
            }, function() {
                return [O.createElement(ee, {
                    getOwnerSpan: s(function() {
                        return _.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: s(function() {
                        return _.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        has_close_icon: !0,
                        has_back_button: !0
                    },
                    events: {
                        _handleError: s(function(f) {
                            t.handleError(f)
                        }, "_handleError"),
                        closeEvent$Action: s(function() {
                            var f = typeof o != "undefined" && o !== null ? o.clone() : t.callContext().clone();
                            t.desktopProcessLayoutCloseBtnEvent$Action(t.callContext(f))
                        }, "closeEvent$Action")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: e,
                        uuid: "3",
                        alias: "3"
                    },
                    _widgetRecordProvider: i,
                    placeholders: {
                        content: new pe(function() {
                            return [O.createElement(K, {
                                getOwnerSpan: s(function() {
                                    return _.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: s(function() {
                                    return _.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {},
                                events: {
                                    _handleError: s(function(f) {
                                        t.handleError(f)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: r
                                },
                                _idProps: {
                                    service: e,
                                    uuid: "4",
                                    alias: "4"
                                },
                                _widgetRecordProvider: i,
                                _dependencies: []
                            })]
                        }),
                        footer: pe.Empty
                    },
                    _dependencies: []
                })]
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: s(function() {
                return {
                    codeFunction: "TransferAmount",
                    functionKey: "b7e0b8e8-d693-4724-a1af-4182178b2b85",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "TransferFlow.TransferAmount",
            modelFactory: me,
            controllerFactory: ie,
            getTitle: s(function(m) {
                var c = m.model,
                    t = m.controller,
                    e = m.controller.idService,
                    r = t.validationService,
                    o = t.callContext(),
                    a = $,
                    u = B,
                    l = {
                        props: m,
                        validateWidget: s(function(i) {
                            m.validateWidget(m, i)
                        }, "validateWidget")
                    };
                return E.resolve(x.TranslationsService).getMessage("6Ljgt5PWJEehr0GCF4srhQ#TitleExpression.1209328557.1", "Amount transfer | Deriv")
            }, "getTitle")
        });
        return g.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.TransferFlow.TransferAmount.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, g.getJsDependencies = function() {
            return []
        }, g.getBlocks = function() {
            return [re, K, ee]
        }, g
    }, "componentFactory"),
    ze = We();
export {
    ie as controllerModule, me as modelModule, ze as viewModule, ae as webFlowControllerModule
};