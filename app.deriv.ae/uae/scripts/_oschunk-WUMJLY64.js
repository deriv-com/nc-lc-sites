import {
    a as ce
} from "./_oschunk-ACEDINHZ.js";
import {
    a as oe
} from "./_oschunk-SFRA456L.js";
import "./_oschunk-L6JZD7VU.js";
import {
    a as ae
} from "./_oschunk-SNXHD6UR.js";
import "./_oschunk-RVD4FS25.js";
import "./_oschunk-4SYOXZNK.js";
import "./_oschunk-YB2J7GTX.js";
import "./_oschunk-HFW3V2GI.js";
import "./_oschunk-LLAHPWP3.js";
import "./_oschunk-YVFTECWM.js";
import {
    b as O,
    f as h,
    h as D,
    n as ie,
    r as z,
    u as Oe
} from "./_oschunk-VR5BNL2K.js";
import {
    a as Te,
    g as P,
    m as M,
    n as Ee,
    o as De,
    q as G,
    r as U,
    s as I,
    t as V
} from "./_oschunk-4VHUVDBV.js";
import {
    a as H
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    A as pe,
    Ca as N,
    H as ee,
    Qb as we,
    Sb as m,
    Ua as ne,
    _a as re,
    a as R,
    h as L,
    i as F,
    ib as B,
    mb as W,
    oa as te,
    r as Z,
    ub as x
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as E,
    c as u,
    e as Se,
    m as w,
    n as T,
    p as Y
} from "./_oschunk-M5BUVJ72.js";
var Ve = {
        "PqdKuwg1h0yVQwmw5LC5EQ#Title": "\u0627\u0644\u062A\u062D\u0648\u064A\u0644 \u0628\u064A\u0646 | Deriv",
        "PqdKuwg1h0yVQwmw5LC5EQ#TitleExpression.-1673229811.1": "\u0627\u0644\u062A\u062D\u0648\u064A\u0644 \u0628\u064A\u0646 | Deriv"
    },
    ke = {
        "ar-001": {
            translations: Ve,
            isRTL: !0
        }
    };
var v = E; {
    let l = class l extends v.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, ke);
            var o = this.controller;
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
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return v.Logger.startActiveSpan("OnReady", function(i) {
                    i && (i.setAttribute("code.function", "OnReady"), i.setAttribute("outsystems.function.key", "267a24b1-b524-48f4-a6b9-32ffb84d5144"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e), m.initTransfer$Action(n.variables.wallet_idIn, n.variables.account_idIn, e)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _setLoading$Action() {
            return this.hasOwnProperty("__setLoading$Action") || (this.__setLoading$Action = function(e, n) {
                var t = this.model,
                    o = this.controller,
                    i = this.idService;
                return v.Logger.startActiveSpan("SetLoading", function(a) {
                    a && (a.setAttribute("code.function", "SetLoading"), a.setAttribute("outsystems.function.key", "2b7da3a7-97a8-4b91-86e1-e167021249e5"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("SetLoading"), n = o.callContext(n);
                        var s = new v.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("uae.TransferFlow.TransferDirection.SetLoading$vars")));
                        s.value.loadingInLocal = e, t.variables.is_loadingVar = s.value.loadingInLocal
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__setLoading$Action
        }
        set _setLoading$Action(e) {
            this.__setLoading$Action = e
        }
        get _desktopProcessLayoutCloseBtnEvent$Action() {
            return this.hasOwnProperty("__desktopProcessLayoutCloseBtnEvent$Action") || (this.__desktopProcessLayoutCloseBtnEvent$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return v.Logger.startActiveSpan("DesktopProcessLayoutCloseBtnEvent", function(i) {
                    i && (i.setAttribute("code.function", "DesktopProcessLayoutCloseBtnEvent"), i.setAttribute("outsystems.function.key", "a67fd30a-5282-4554-b2fa-3712991c6c84"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("DesktopProcessLayoutCloseBtnEvent"), e = t.callContext(e);
                        var a = new v.DataTypes.VariableHolder(new(v.Controller.BaseController.getJSONDeserializeOutputType(ne)));
                        return a.value.dataOut = v.JSONUtils.deserializeFromJSON(x.gettransfer_init(), ne, !1), a.value.dataOut.wallet_idAttr.gt(v.BuiltinFunctions.integerToLongInteger(0)) ? v.Navigation.navigateTo(v.Navigation.generateScreenURL("uae", "wallet", {}), v.Transitions.createTransition(v.Transitions.TransitionAnimation.Default), e, !0) : (m.setAccountDetailsInputs$Action((function() {
                            var s = new pe;
                            return s.mt5_typeAttr = (x.getSelectedMT5AccountType() === "standard" ? R.mT5Types.standard : R.mT5Types.swapFree).toString(), s.is_demoAttr = !1, s.account_idAttr = a.value.dataOut.account_idAttr, s
                        })(), e), v.Navigation.navigateTo(v.Navigation.generateScreenURL("uae", "mt5/account-details", {
                            is_demo: v.DataConversion.ServerDataConverter.to(!1, v.DataTypes.DataTypes.Boolean)
                        }), v.Transitions.createTransition(v.Transitions.TransitionAnimation.Default), e, !0))
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__desktopProcessLayoutCloseBtnEvent$Action
        }
        set _desktopProcessLayoutCloseBtnEvent$Action(e) {
            this.__desktopProcessLayoutCloseBtnEvent$Action = e
        }
        get _desktopProcessLayoutBackBtnEvent$Action() {
            return this.hasOwnProperty("__desktopProcessLayoutBackBtnEvent$Action") || (this.__desktopProcessLayoutBackBtnEvent$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return v.Logger.startActiveSpan("DesktopProcessLayoutBackBtnEvent", function(i) {
                    i && (i.setAttribute("code.function", "DesktopProcessLayoutBackBtnEvent"), i.setAttribute("outsystems.function.key", "bbb2c610-f690-4f34-ab13-7d4d216e8cce"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("DesktopProcessLayoutBackBtnEvent"), e = t.callContext(e), v.Navigation.navigateBack(null, e, !0)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__desktopProcessLayoutBackBtnEvent$Action
        }
        set _desktopProcessLayoutBackBtnEvent$Action(e) {
            this.__desktopProcessLayoutBackBtnEvent$Action = e
        }
        onReady$Action(e) {
            var n = this.controller;
            return v.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "267a24b1-b524-48f4-a6b9-32ffb84d5144"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onReady$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        setLoading$Action(e, n) {
            var t = this.controller;
            return v.Logger.startActiveSpan("SetLoading__proxy", function(o) {
                o && (o.setAttribute("code.function", "SetLoading"), o.setAttribute("outsystems.function.key", "2b7da3a7-97a8-4b91-86e1-e167021249e5"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._setLoading$Action, n, e)
                } finally {
                    o && o.end()
                }
            }, 0)
        }
        desktopProcessLayoutCloseBtnEvent$Action(e) {
            var n = this.controller;
            return v.Logger.startActiveSpan("DesktopProcessLayoutCloseBtnEvent__proxy", function(t) {
                t && (t.setAttribute("code.function", "DesktopProcessLayoutCloseBtnEvent"), t.setAttribute("outsystems.function.key", "a67fd30a-5282-4554-b2fa-3712991c6c84"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._desktopProcessLayoutCloseBtnEvent$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        desktopProcessLayoutBackBtnEvent$Action(e) {
            var n = this.controller;
            return v.Logger.startActiveSpan("DesktopProcessLayoutBackBtnEvent__proxy", function(t) {
                t && (t.setAttribute("code.function", "DesktopProcessLayoutBackBtnEvent"), t.setAttribute("outsystems.function.key", "bbb2c610-f690-4f34-ab13-7d4d216e8cce"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._desktopProcessLayoutBackBtnEvent$Action, e)
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
                    o = this.idService;
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
                return ce.default.handleError(e, this.callContext())
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
    u(l, "ControllerInner");
    let _ = l;
    se = _, se.registerVariableGroupType("uae.TransferFlow.TransferDirection.SetLoading$vars", [{
        name: "loading",
        attrName: "loadingInLocal",
        mandatory: !0,
        dataType: v.DataTypes.DataTypes.Boolean,
        defaultValue: u(function() {
            return !1
        }, "defaultValue")
    }])
}
var se, ue = new v.Controller.ControllerFactory(se, H);
var k = Se(Te());
var y = E,
    fe = class fe extends y.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("transfer_data", "transfer_dataVar", "transfer_data", !0, !1, y.DataTypes.DataTypes.Record, function() {
                return y.DataTypes.ImmutableBase.getData(new re)
            }, !1, re), this.attr("wallet", "walletVar", "wallet", !0, !1, y.DataTypes.DataTypes.Record, function() {
                return y.DataTypes.ImmutableBase.getData(new Z)
            }, !1, Z), this.attr("is_loading", "is_loadingVar", "is_loading", !0, !1, y.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("show_insufficient_wallet_balance", "show_insufficient_wallet_balanceVar", "show_insufficient_wallet_balance", !0, !1, y.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("show_insufficient_account_balance", "show_insufficient_account_balanceVar", "show_insufficient_account_balance", !0, !1, y.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("show_insufficient_balance_in_all_trading_accounts", "show_insufficient_balance_in_all_trading_accountsVar", "show_insufficient_balance_in_all_trading_accounts", !0, !1, y.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("account", "accountVar", "account", !0, !1, y.DataTypes.DataTypes.Record, function() {
                return y.DataTypes.ImmutableBase.getData(new te)
            }, !1, te), this.attr("currency_config", "currency_configVar", "currency_config", !0, !1, y.DataTypes.DataTypes.Record, function() {
                return y.DataTypes.ImmutableBase.getData(new ee)
            }, !1, ee), this.attr("exchange_rates", "exchange_ratesVar", "exchange_rates", !0, !1, y.DataTypes.DataTypes.RecordList, function() {
                return y.DataTypes.ImmutableBase.getData(new(y.GenericTypeCache.getGenericList(L)))
            }, !1, y.GenericTypeCache.getGenericList(L)), this.attr("account_currency", "account_currencyVar", "account_currency", !0, !1, y.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("min_transfer_amount_in_base", "min_transfer_amount_in_baseVar", "min_transfer_amount_in_base", !0, !1, y.DataTypes.DataTypes.Decimal, function() {
                return y.DataTypes.Decimal.defaultValue
            }, !1), this.attr("networks_calls_promise", "networks_calls_promiseVar", "networks_calls_promise", !0, !1, y.DataTypes.DataTypes.Object, function() {
                return null
            }, !1), this.attr("wallet_id", "wallet_idIn", "wallet_id", !0, !1, y.DataTypes.DataTypes.LongInteger, function() {
                return y.DataTypes.LongInteger.defaultValue
            }, !1), this.attr("_wallet_idInDataFetchStatus", "_wallet_idInDataFetchStatus", "_wallet_idInDataFetchStatus", !0, !1, y.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("account_id", "account_idIn", "account_id", !0, !1, y.DataTypes.DataTypes.LongInteger, function() {
                return y.DataTypes.LongInteger.defaultValue
            }, !1), this.attr("_account_idInDataFetchStatus", "_account_idInDataFetchStatus", "_account_idInDataFetchStatus", !0, !1, y.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(y.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
u(fe, "VariablesRecord");
var J = fe;
J.init();
var ye = class ye extends y.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
u(ye, "WidgetsRecord");
var le = ye,
    ve = class ve extends y.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return J
        }
        static getWidgetsRecordConstructor() {
            return le
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(l) {
            "wallet_id" in l && (this.variables.wallet_idIn = l.wallet_id, "_wallet_idInDataFetchStatus" in l && (this.variables._wallet_idInDataFetchStatus = l._wallet_idInDataFetchStatus)), "account_id" in l && (this.variables.account_idIn = l.account_id, "_account_idInDataFetchStatus" in l && (this.variables._account_idInDataFetchStatus = l._account_idInDataFetchStatus))
        }
    };
u(ve, "Model");
var j = ve;
j._hasValidationWidgetsValue = void 0;
var Le = new y.Model.ModelFactory(j);
var C = E,
    Ae = class Ae extends C.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("is_loading", "is_loadingVar", "is_loading", !0, !1, C.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("wallet_id", "wallet_idIn", "wallet_id", !0, !1, C.DataTypes.DataTypes.LongInteger, function() {
                return C.DataTypes.LongInteger.defaultValue
            }, !1), this.attr("_wallet_idInDataFetchStatus", "_wallet_idInDataFetchStatus", "_wallet_idInDataFetchStatus", !0, !1, C.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("account_id", "account_idIn", "account_id", !0, !1, C.DataTypes.DataTypes.LongInteger, function() {
                return C.DataTypes.LongInteger.defaultValue
            }, !1), this.attr("_account_idInDataFetchStatus", "_account_idInDataFetchStatus", "_account_idInDataFetchStatus", !0, !1, C.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(C.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
u(Ae, "VariablesRecord");
var Q = Ae;
Q.init();
var be = class be extends C.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
u(be, "WidgetsRecord");
var _e = be,
    $ = class $ extends C.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return Q
        }
        static getWidgetsRecordConstructor() {
            return _e
        }
        static get hasValidationWidgets() {
            return $._hasValidationWidgetsValue === void 0 && ($._hasValidationWidgetsValue = void 0 || void 0 || void 0), $._hasValidationWidgetsValue
        }
        setInputs(l) {
            "wallet_id" in l && (this.variables.wallet_idIn = C.DataConversion.ServerDataConverter.from(l.wallet_id, C.DataTypes.DataTypes.LongInteger)), "account_id" in l && (this.variables.account_idIn = C.DataConversion.ServerDataConverter.from(l.account_id, C.DataTypes.DataTypes.LongInteger))
        }
    };
u($, "Model");
var q = $;
q._hasValidationWidgetsValue = void 0;
var ge = new C.Model.ModelFactory(q);
var f = Se(Te());
var Ne = {
        "TBv1C95CW0mRm1dOmCUTIg#Value": "\u0631\u0628\u0645\u0627 \u0644\u0627\u062D\u0642\u064B\u0627",
        "OcBCmcziX02ji2Xf+YX+7g#Value": "\u0627\u0633\u062A\u0644\u0627\u0645 \u0627\u0644\u0623\u0645\u0648\u0627\u0644",
        "gNRZ3t43G06Zj7lxCd_YwQ#ValueExpression.1308377398.1": "\u0647\u0644 \u062A\u0648\u062F \u0627\u0633\u062A\u0644\u0627\u0645 \u0627\u0644\u0623\u0645\u0648\u0627\u0644 \u0645\u0646 Wallet \u0628\u062F\u0644\u0627\u064B \u0645\u0646 \u0630\u0644\u0643\u061F",
        "en3zkKE4U0eiw3hGGJSmmQ#ValueExpression.441150431.1": "\u0631\u0635\u064A\u062F \u063A\u064A\u0631 \u0643\u0627\u0641\u064D",
        "Wkqqjbm0F02Q9CF+r_utUA#Value": "\u0631\u0628\u0645\u0627 \u0644\u0627\u062D\u0642\u064B\u0627",
        "mkraPIKCL0mSXHeL_z4_pg#Value": "\u0625\u064A\u062F\u0627\u0639",
        "eNqhDWk1gEGjpfytA2UQOg#ValueExpression.1211538756.1": "\u0647\u0644 \u062A\u0641\u0636\u0644 \u0627\u0644\u0645\u062D\u0641\u0638\u0629 (Wallet) \u0628\u062F\u0644\u0627\u064B \u0645\u0646 \u0630\u0644\u0643\u061F",
        "eNqhDWk1gEGjpfytA2UQOg#ValueExpression.1440495174.1": "\u0647\u0644 \u062A\u0631\u063A\u0628 \u0641\u064A \u0625\u064A\u062F\u0627\u0639 \u0645\u0628\u0644\u063A \u0641\u064A",
        "aMhjbruwPU+WLYuVxBL7UQ#ValueExpression.441150431.1": "\u0631\u0635\u064A\u062F \u063A\u064A\u0631 \u0643\u0627\u0641\u064D",
        "zZ3gbyAgfkCgw0upX4U6hQ#Value": "\u0631\u0628\u0645\u0627 \u0644\u0627\u062D\u0642\u064B\u0627",
        "jeRw2E7XHkaLNGeZ4ySgHw#Value": "\u0625\u064A\u062F\u0627\u0639",
        "g03AjXat4k2msOe_1Nat3g#ValueExpression.-1548023101.1": "\u0627\u0633\u062A\u0644\u0627\u0645",
        "gC_KtLCAs0K5gXlVub9kEA#ValueExpression.2573224.1": "\u0627\u0631\u0633\u0644",
        "XNu69qzbTk25gSrLVIUIvQ#Value": "\u0645\u0627 \u0646\u0648\u0639 \u0627\u0644\u062A\u062D\u0648\u064A\u0644 \u0627\u0644\u0630\u064A \u062A\u0631\u064A\u062F \u0625\u062C\u0631\u0627\u0621\u0647\u061F"
    },
    $e = {
        "ar-001": {
            translations: Ne,
            isRTL: !0
        }
    };

function me(_, l, A, e) {
    var t;

    function n() {
        _.is_send ? l.OnClickSend() : l.OnClickReceive()
    }
    u(n, "clickAction"), (t = _.promise) != null && t.then ? _.promise.then(n, n) : n()
}
u(me, "default");

function he(_, l, A, e) {
    let n = l.GetWalletList(),
        t = l.GetAccountList(),
        o = new Promise((s, c) => {
            _.currency ? l.GetCurrencyConfig().then(s, c) : n.then(() => {
                l.SetAccountCurrency(), l.GetCurrencyConfig().then(s, c)
            })
        }),
        i = l.GetExchangeRates();
    Promise.all([o, i]).then(l.CalculateMinTransferAmountInBase);
    let a = Promise.all([n, t, o, i]);
    _.promise = a
}
u(he, "default");
var r = E; {
    let l = class l extends r.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, $e);
            var o = this.controller;
            this.clientActionProxies = {
                onClickSend$Action: u(function() {
                    return o.executeActionInsideJSNode(o._onClickSend$Action.bind(o), o.callContext(), function(i) {
                        return {}
                    }, function() {}, "OnClickSend")
                }, "onClickSend$Action"),
                onClickReceive$Action: u(function() {
                    return o.executeActionInsideJSNode(o._onClickReceive$Action.bind(o), o.callContext(), function(i) {
                        return {}
                    }, function() {}, "OnClickReceive")
                }, "onClickReceive$Action"),
                getWalletList$Action: u(function() {
                    return o.executeActionInsideJSNode(o._getWalletList$Action.bind(o), o.callContext(), function(i) {
                        return {}
                    }, function() {}, "GetWalletList")
                }, "getWalletList$Action"),
                getAccountList$Action: u(function() {
                    return o.executeActionInsideJSNode(o._getAccountList$Action.bind(o), o.callContext(), function(i) {
                        return {}
                    }, function() {}, "GetAccountList")
                }, "getAccountList$Action"),
                getCurrencyConfig$Action: u(function() {
                    return o.executeActionInsideJSNode(o._getCurrencyConfig$Action.bind(o), o.callContext(), function(i) {
                        return {}
                    }, function() {}, "GetCurrencyConfig")
                }, "getCurrencyConfig$Action"),
                setAccountCurrency$Action: u(function() {
                    return o.executeActionInsideJSNode(o._setAccountCurrency$Action.bind(o), o.callContext(), function(i) {
                        return {}
                    }, function() {}, "SetAccountCurrency")
                }, "setAccountCurrency$Action"),
                getExchangeRates$Action: u(function() {
                    return o.executeActionInsideJSNode(o._getExchangeRates$Action.bind(o), o.callContext(), function(i) {
                        return {}
                    }, function() {}, "GetExchangeRates")
                }, "getExchangeRates$Action"),
                calculateMinTransferAmountInBase$Action: u(function() {
                    return o.executeActionInsideJSNode(o._calculateMinTransferAmountInBase$Action.bind(o), o.callContext(), function(i) {
                        return {}
                    }, function() {}, "CalculateMinTransferAmountInBase")
                }, "calculateMinTransferAmountInBase$Action")
            }, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get getCurrencyConfig$ServerAction() {
            return this.hasOwnProperty("_getCurrencyConfig$ServerAction") || (this._getCurrencyConfig$ServerAction = function(e, n) {
                var t = this.controller;
                return r.Logger.startActiveSpan("GetCurrencyConfig", function(o) {
                    return o && (o.setAttribute("code.function", "GetCurrencyConfig"), o.setAttribute("outsystems.function.key", "344935f9-bf5b-4634-aba2-db4c51ac12e2"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), r.Flow.tryFinally(function() {
                        var i = {
                            currency: r.DataConversion.ServerDataConverter.to(e, r.DataTypes.DataTypes.Text)
                        };
                        return t.callServerAction("GetCurrencyConfig", "screenservices/uae/TransferFlow/TransferDirectionBlock/ActionGetCurrencyConfig", "auneRzUWYP17IvRUyOP08Q", i, t.callContext(n), void 0, void 0, !0).then(function(a) {
                            var s = new(t.constructor.getVariableGroupType("uae.TransferFlow.TransferDirectionBlock$ActionGetCurrencyConfig"));
                            return s.responseOut = r.DataConversion.ServerDataConverter.from(a.Response, W), s
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 0)
            }), this._getCurrencyConfig$ServerAction
        }
        set getCurrencyConfig$ServerAction(e) {
            this._getCurrencyConfig$ServerAction = e
        }
        get getExchangerates$ServerAction() {
            return this.hasOwnProperty("_getExchangerates$ServerAction") || (this._getExchangerates$ServerAction = function(e) {
                var n = this.controller;
                return r.Logger.startActiveSpan("GetExchangerates", function(t) {
                    return t && (t.setAttribute("code.function", "GetExchangerates"), t.setAttribute("outsystems.function.key", "d4c7e148-a35d-4770-b5da-232d3a61a4e1"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), r.Flow.tryFinally(function() {
                        return n.callServerAction("GetExchangerates", "screenservices/uae/TransferFlow/TransferDirectionBlock/ActionGetExchangerates", "PPCNu0IaBifmh3TMhzu3rQ", {}, n.callContext(e), void 0, void 0, !0).then(function(o) {
                            var i = new(n.constructor.getVariableGroupType("uae.TransferFlow.TransferDirectionBlock$ActionGetExchangerates"));
                            return i.responseOut = r.DataConversion.ServerDataConverter.from(o.Response, F), i
                        })
                    }, function() {
                        t && t.end()
                    })
                }, 0)
            }), this._getExchangerates$ServerAction
        }
        set getExchangerates$ServerAction(e) {
            this._getExchangerates$ServerAction = e
        }
        get getAccounts$ServerAction() {
            return this.hasOwnProperty("_getAccounts$ServerAction") || (this._getAccounts$ServerAction = function(e, n, t, o, i) {
                var a = this.controller;
                return r.Logger.startActiveSpan("GetAccounts", function(s) {
                    return s && (s.setAttribute("code.function", "GetAccounts"), s.setAttribute("outsystems.function.key", "9a67846a-fd6e-4da7-9b7f-473202634306"), s.setAttribute("outsystems.function.owner.name", "uae"), s.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), s.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), r.Flow.tryFinally(function() {
                        var c = {
                            authorization: r.DataConversion.ServerDataConverter.to(e, r.DataTypes.DataTypes.Text),
                            with_balance: r.DataConversion.ServerDataConverter.to(n, r.DataTypes.DataTypes.Text),
                            real_only: r.DataConversion.ServerDataConverter.to(t, r.DataTypes.DataTypes.Text),
                            force_api_fetch: r.DataConversion.ServerDataConverter.to(o, r.DataTypes.DataTypes.Text)
                        };
                        return a.callServerAction("GetAccounts", "screenservices/uae/TransferFlow/TransferDirectionBlock/ActionGetAccounts", "02fkJ+ShY4j2DDsRxspdlw", c, a.callContext(i), void 0, void 0, !0).then(function(b) {
                            var g = new(a.constructor.getVariableGroupType("uae.TransferFlow.TransferDirectionBlock$ActionGetAccounts"));
                            return g.responseOut = r.DataConversion.ServerDataConverter.from(b.Response, B), g
                        })
                    }, function() {
                        s && s.end()
                    })
                }, 0)
            }), this._getAccounts$ServerAction
        }
        set getAccounts$ServerAction(e) {
            this._getAccounts$ServerAction = e
        }
        get getWalletList$ServerAction() {
            return this.hasOwnProperty("_getWalletList$ServerAction") || (this._getWalletList$ServerAction = function(e, n) {
                var t = this.controller;
                return r.Logger.startActiveSpan("GetWalletList", function(o) {
                    return o && (o.setAttribute("code.function", "GetWalletList"), o.setAttribute("outsystems.function.key", "457611d5-9b1a-4faf-a88a-d21184a30f68"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), r.Flow.tryFinally(function() {
                        var i = {
                            authorization: r.DataConversion.ServerDataConverter.to(e, r.DataTypes.DataTypes.Text)
                        };
                        return t.callServerAction("GetWalletList", "screenservices/uae/TransferFlow/TransferDirectionBlock/ActionGetWalletList", "mBL53KMNBzvxE1nMqxclWg", i, t.callContext(n), void 0, void 0, !0).then(function(a) {
                            var s = new(t.constructor.getVariableGroupType("uae.TransferFlow.TransferDirectionBlock$ActionGetWalletList"));
                            return s.responseOut = r.DataConversion.ServerDataConverter.from(a.Response, N), s
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 0)
            }), this._getWalletList$ServerAction
        }
        set getWalletList$ServerAction(e) {
            this._getWalletList$ServerAction = e
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onClickReceive$Action() {
            return this.hasOwnProperty("__onClickReceive$Action") || (this.__onClickReceive$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("OnClickReceive", function(i) {
                    return i && (i.setAttribute("code.function", "OnClickReceive"), i.setAttribute("outsystems.function.key", "0e0c28d3-0311-4910-9bc8-7d913f90bf31"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnClickReceive"), e = t.callContext(e);
                        var a = new r.DataTypes.VariableHolder(new(t.constructor.getVariableGroupType("uae.TransferFlow.TransferDirectionBlock.OnClickReceive$vars"))),
                            s = new r.DataTypes.VariableHolder,
                            c = new r.DataTypes.VariableHolder;
                        return r.Flow.executeAsyncFlow(function() {
                            return t.setLoading$Action(!1, e).then(function() {
                                return n.flush(), m.getWalletListCache$Action(e).then(function(b) {
                                    s.value = b
                                })
                            }).then(function() {
                                return n.flush(), m.getAccountListCache$Action(e).then(function(b) {
                                    c.value = b
                                })
                            }).then(function() {
                                e.iterationContext.registerIterationStart(c.value.account_listOut)
                            }).then(function() {
                                try {
                                    for (var b = e.iterationContext.getIterator(c.value.account_listOut), g = 0; g < c.value.account_listOut.length;) b.currentRowNumber = g, c.value.account_listOut.getItem(g.valueOf()).idAttr.equals(n.variables.account_idIn) || (a.value.has_sufficient_account_balanceVar = a.value.has_sufficient_account_balanceVar === !0 ? a.value.has_sufficient_account_balanceVar : r.BuiltinFunctions.textToDecimal(c.value.account_listOut.getItem(g.valueOf()).balanceAttr).gte(n.variables.min_transfer_amount_in_baseVar)), g++
                                } finally {
                                    e.iterationContext.registerIterationEnd(c.value.account_listOut)
                                }
                                e.iterationContext.registerIterationStart(s.value.wallet_listOut);
                                try {
                                    for (var S = e.iterationContext.getIterator(s.value.wallet_listOut), d = 0; d < s.value.wallet_listOut.length;) S.currentRowNumber = d, s.value.wallet_listOut.getItem(d.valueOf()).idAttr.equals(n.variables.wallet_idIn) || (a.value.has_sufficient_wallet_balanceVar = a.value.has_sufficient_wallet_balanceVar === !0 ? a.value.has_sufficient_wallet_balanceVar : s.value.wallet_listOut.getItem(d.valueOf()).balanceAttr.gte(n.variables.min_transfer_amount_in_baseVar)), d++
                                } finally {
                                    e.iterationContext.registerIterationEnd(s.value.wallet_listOut)
                                }
                                if (n.variables.account_idIn.gt(r.BuiltinFunctions.integerToLongInteger(0))) {
                                    if (!a.value.has_sufficient_wallet_balanceVar) return n.variables.show_insufficient_wallet_balanceVar = !0, r.Flow.returnAsync()
                                } else if (!a.value.has_sufficient_account_balanceVar) return n.variables.show_insufficient_balance_in_all_trading_accountsVar = !0, r.Flow.returnAsync();
                                return x.settransfer_type(R.transferTypes.receive), n.variables.account_idIn.gt(r.BuiltinFunctions.integerToLongInteger(0)) ? (n.variables.transfer_dataVar.toAttr.idAttr = n.variables.account_idIn, n.variables.transfer_dataVar.toAttr.typeAttr = "account") : (n.variables.transfer_dataVar.toAttr.idAttr = n.variables.wallet_idIn, n.variables.transfer_dataVar.toAttr.typeAttr = "wallet"), m.updateTransferData$Action(n.variables.transfer_dataVar, e), r.Flow.returnAsync(r.Navigation.navigateTo(r.Navigation.generateScreenURL("uae", "select-transfer-account", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default), e, !0))
                            })
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__onClickReceive$Action
        }
        set _onClickReceive$Action(e) {
            this.__onClickReceive$Action = e
        }
        get _onClickDeposit$Action() {
            return this.hasOwnProperty("__onClickDeposit$Action") || (this.__onClickDeposit$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("OnClickDeposit", function(i) {
                    i && (i.setAttribute("code.function", "OnClickDeposit"), i.setAttribute("outsystems.function.key", "220cb1ec-ae21-4ca8-8853-d23230ba1471"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("OnClickDeposit"), e = t.callContext(e), r.Navigation.navigateTo(r.Navigation.generateScreenURL("uae", "deposit", {
                            wallet_id: r.DataConversion.ServerDataConverter.to(r.BuiltinFunctions.longIntegerToText(n.variables.walletVar.idAttr), r.DataTypes.DataTypes.Text)
                        }), r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onClickDeposit$Action
        }
        set _onClickDeposit$Action(e) {
            this.__onClickDeposit$Action = e
        }
        get _getCurrencyConfig$Action() {
            return this.hasOwnProperty("__getCurrencyConfig$Action") || (this.__getCurrencyConfig$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("GetCurrencyConfig", function(i) {
                    return i && (i.setAttribute("code.function", "GetCurrencyConfig"), i.setAttribute("outsystems.function.key", "247a4090-78eb-4c83-811c-31ab15009dae"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        t.ensureControllerAlive("GetCurrencyConfig"), e = t.callContext(e);
                        var a = new r.DataTypes.VariableHolder;
                        return r.Flow.executeAsyncFlow(function() {
                            return n.flush(), t.getCurrencyConfig$ServerAction(n.variables.account_currencyVar, e).then(function(s) {
                                a.value = s
                            }).then(function() {
                                n.variables.currency_configVar = a.value.responseOut.dataAttr.getCurrent(e.iterationContext)
                            })
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__getCurrencyConfig$Action
        }
        set _getCurrencyConfig$Action(e) {
            this.__getCurrencyConfig$Action = e
        }
        get _getExchangeRates$Action() {
            return this.hasOwnProperty("__getExchangeRates$Action") || (this.__getExchangeRates$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("GetExchangeRates", function(i) {
                    return i && (i.setAttribute("code.function", "GetExchangeRates"), i.setAttribute("outsystems.function.key", "251cb06f-f4d3-4a4e-9c37-4a1d03702dda"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        t.ensureControllerAlive("GetExchangeRates"), e = t.callContext(e);
                        var a = new r.DataTypes.VariableHolder(new(t.constructor.getVariableGroupType("uae.TransferFlow.TransferDirectionBlock.GetExchangeRates$vars"))),
                            s = new r.DataTypes.VariableHolder;
                        return r.Flow.executeAsyncFlow(function() {
                            return n.flush(), t.getExchangerates$ServerAction(e).then(function(c) {
                                s.value = c
                            }).then(function() {
                                a.value.usdVar.priceAttr = r.BuiltinFunctions.integerToDecimal(1), a.value.usdVar.codeAttr = "USD", r.SystemActions.listAppend(s.value.responseOut.dataAttr, a.value.usdVar, e), n.variables.exchange_ratesVar = s.value.responseOut.dataAttr
                            })
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__getExchangeRates$Action
        }
        set _getExchangeRates$Action(e) {
            this.__getExchangeRates$Action = e
        }
        get _onClickDepositWallet$Action() {
            return this.hasOwnProperty("__onClickDepositWallet$Action") || (this.__onClickDepositWallet$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("OnClickDepositWallet", function(i) {
                    i && (i.setAttribute("code.function", "OnClickDepositWallet"), i.setAttribute("outsystems.function.key", "6f23a63f-afe0-4f29-956f-68f9c6a6294b"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("OnClickDepositWallet"), e = t.callContext(e), r.Navigation.navigateTo(r.Navigation.generateScreenURL("uae", "deposit", {
                            wallet_id: r.DataConversion.ServerDataConverter.to(r.BuiltinFunctions.longIntegerToText(n.variables.walletVar.idAttr), r.DataTypes.DataTypes.Text)
                        }), r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onClickDepositWallet$Action
        }
        set _onClickDepositWallet$Action(e) {
            this.__onClickDepositWallet$Action = e
        }
        get _calculateMinTransferAmountInBase$Action() {
            return this.hasOwnProperty("__calculateMinTransferAmountInBase$Action") || (this.__calculateMinTransferAmountInBase$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("CalculateMinTransferAmountInBase", function(i) {
                    i && (i.setAttribute("code.function", "CalculateMinTransferAmountInBase"), i.setAttribute("outsystems.function.key", "765f8d61-6f81-4c31-bb18-9c4d9f7a02e8"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("CalculateMinTransferAmountInBase"), e = t.callContext(e);
                        var a = new r.DataTypes.VariableHolder;
                        a.value = r.SystemActions.listIndexOf(n.variables.exchange_ratesVar, function(s) {
                            return r.BuiltinFunctions.toLower(s.codeAttr) === r.BuiltinFunctions.toLower(n.variables.account_currencyVar)
                        }, e), n.variables.min_transfer_amount_in_baseVar = n.variables.currency_configVar.limitAttr.transferAttr.min_amount_per_transactionAttr.times(n.variables.exchange_ratesVar.getItem(a.value.positionOut).priceAttr)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__calculateMinTransferAmountInBase$Action
        }
        set _calculateMinTransferAmountInBase$Action(e) {
            this.__calculateMinTransferAmountInBase$Action = e
        }
        get _setAccountCurrency$Action() {
            return this.hasOwnProperty("__setAccountCurrency$Action") || (this.__setAccountCurrency$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("SetAccountCurrency", function(i) {
                    return i && (i.setAttribute("code.function", "SetAccountCurrency"), i.setAttribute("outsystems.function.key", "856a9b20-3366-4989-a654-4d99d6eb1e53"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        t.ensureControllerAlive("SetAccountCurrency"), e = t.callContext(e);
                        var a = new r.DataTypes.VariableHolder;
                        return r.Flow.executeAsyncFlow(function() {
                            return n.flush(), m.getWalletListCache$Action(e).then(function(s) {
                                a.value = s
                            }).then(function() {
                                a.value.wallet_listOut.length > 0 && (n.variables.account_currencyVar = a.value.wallet_listOut.getCurrent(e.iterationContext).currencyAttr)
                            })
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__setAccountCurrency$Action
        }
        set _setAccountCurrency$Action(e) {
            this.__setAccountCurrency$Action = e
        }
        get _getAccountList$Action() {
            return this.hasOwnProperty("__getAccountList$Action") || (this.__getAccountList$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("GetAccountList", function(i) {
                    return i && (i.setAttribute("code.function", "GetAccountList"), i.setAttribute("outsystems.function.key", "8e0370c5-bbbe-443c-9380-2e769e8475c6"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        t.ensureControllerAlive("GetAccountList"), e = t.callContext(e);
                        var a = new r.DataTypes.VariableHolder,
                            s = new r.DataTypes.VariableHolder;
                        return r.Flow.executeAsyncFlow(function() {
                            return s.value = m.getAuth$Action(e), n.flush(), t.getAccounts$ServerAction(s.value.tokenOut, "true", "true", "true", e).then(function(c) {
                                a.value = c
                            }).then(function() {
                                m.updateAccountListCache$Action(a.value.responseOut.dataAttr, e)
                            })
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__getAccountList$Action
        }
        set _getAccountList$Action(e) {
            this.__getAccountList$Action = e
        }
        get _receiveFundsOnClick$Action() {
            return this.hasOwnProperty("__receiveFundsOnClick$Action") || (this.__receiveFundsOnClick$Action = function(e, n) {
                var t = this.model,
                    o = this.controller,
                    i = this.idService;
                return r.Logger.startActiveSpan("ReceiveFundsOnClick", function(a) {
                    return a && (a.setAttribute("code.function", "ReceiveFundsOnClick"), a.setAttribute("outsystems.function.key", "94215992-a484-4f06-84cd-f2153486285e"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        o.ensureControllerAlive("ReceiveFundsOnClick"), n = o.callContext(n);
                        var s = new r.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("uae.TransferFlow.TransferDirectionBlock.ReceiveFundsOnClick$vars")));
                        return s.value.is_sendInLocal = e, r.Flow.executeAsyncFlow(function() {
                            return t.variables.show_insufficient_account_balanceVar = !1, o._onClickDirection$Action(s.value.is_sendInLocal, n)
                        })
                    }, function() {
                        a && a.end()
                    })
                }, 1)
            }), this.__receiveFundsOnClick$Action
        }
        set _receiveFundsOnClick$Action(e) {
            this.__receiveFundsOnClick$Action = e
        }
        get _onClickDirection$Action() {
            return this.hasOwnProperty("__onClickDirection$Action") || (this.__onClickDirection$Action = function(e, n) {
                var t = this.model,
                    o = this.controller,
                    i = this.idService;
                return r.Logger.startActiveSpan("OnClickDirection", function(a) {
                    return a && (a.setAttribute("code.function", "OnClickDirection"), a.setAttribute("outsystems.function.key", "a614dc9a-0aec-49a7-9ad2-dbc591631fdd"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        o.ensureControllerAlive("OnClickDirection"), n = o.callContext(n);
                        var s = new r.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("uae.TransferFlow.TransferDirectionBlock.OnClickDirection$vars")));
                        return s.value.is_sendInLocal = e, r.Flow.executeAsyncFlow(function() {
                            return o.setLoading$Action(!0, n).then(function() {
                                r.Logger.startActiveSpan("WaitForPromiseAndCall", function(c) {
                                    c && (c.setAttribute("code.function", "WaitForPromiseAndCall"), c.setAttribute("outsystems.function.key", "87f8fd81-a5e8-4fb1-b081-3ed1640380c2"), c.setAttribute("outsystems.function.owner.name", "uae"), c.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return o.safeExecuteJSNode(me, "WaitForPromiseAndCall", "OnClickDirection", {
                                            promise: r.DataConversion.JSNodeParamConverter.to(t.variables.networks_calls_promiseVar, r.DataTypes.DataTypes.Object),
                                            is_send: r.DataConversion.JSNodeParamConverter.to(s.value.is_sendInLocal, r.DataTypes.DataTypes.Boolean)
                                        }, function(b) {}, {
                                            OnClickSend: o.clientActionProxies.onClickSend$Action,
                                            OnClickReceive: o.clientActionProxies.onClickReceive$Action
                                        }, {})
                                    } finally {
                                        c && c.end()
                                    }
                                }, 1)
                            })
                        })
                    }, function() {
                        a && a.end()
                    })
                }, 1)
            }), this.__onClickDirection$Action
        }
        set _onClickDirection$Action(e) {
            this.__onClickDirection$Action = e
        }
        get _onClickSend$Action() {
            return this.hasOwnProperty("__onClickSend$Action") || (this.__onClickSend$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("OnClickSend", function(i) {
                    return i && (i.setAttribute("code.function", "OnClickSend"), i.setAttribute("outsystems.function.key", "abb869cc-ebfe-4500-a7fc-e4b4b3e6f131"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnClickSend"), e = t.callContext(e);
                        var a = new r.DataTypes.VariableHolder(new(t.constructor.getVariableGroupType("uae.TransferFlow.TransferDirectionBlock.OnClickSend$vars"))),
                            s = new r.DataTypes.VariableHolder,
                            c = new r.DataTypes.VariableHolder,
                            b = new r.DataTypes.VariableHolder,
                            g = new r.DataTypes.VariableHolder,
                            S = new r.DataTypes.VariableHolder;
                        return r.Flow.executeAsyncFlow(function() {
                            return t.setLoading$Action(!1, e).then(function() {
                                S.value = m.getAuth$Action(e), n.variables.is_loadingVar = !0
                            }).then(function() {
                                return r.Flow.executeSequence(function() {
                                    return n.variables.account_idIn.gt(r.BuiltinFunctions.integerToLongInteger(0)) ? (n.flush(), m.getAccountListCache$Action(e).then(function(d) {
                                        g.value = d
                                    }).then(function() {
                                        c.value = r.SystemActions.listIndexOf(g.value.account_listOut, function(d) {
                                            return d.idAttr.equals(n.variables.account_idIn)
                                        }, e)
                                    }).then(function() {
                                        if (c.value.positionOut >= 0) a.value.currencyVar = g.value.account_listOut.getItem(c.value.positionOut).currencyAttr, a.value.balanceVar = g.value.account_listOut.getItem(c.value.positionOut).balanceAttr, n.variables.accountVar = g.value.account_listOut.getItem(c.value.positionOut);
                                        else return r.Flow.returnAsync()
                                    })) : (n.flush(), m.getWalletListCache$Action(e).then(function(d) {
                                        b.value = d
                                    }).then(function() {
                                        s.value = r.SystemActions.listIndexOf(b.value.wallet_listOut, function(d) {
                                            return d.idAttr.equals(n.variables.wallet_idIn)
                                        }, e)
                                    }).then(function() {
                                        if (s.value.positionOut >= 0) a.value.currencyVar = b.value.wallet_listOut.getItem(s.value.positionOut).currencyAttr, a.value.balanceVar = r.BuiltinFunctions.decimalToText(b.value.wallet_listOut.getItem(s.value.positionOut).balanceAttr), n.variables.walletVar = b.value.wallet_listOut.getItem(s.value.positionOut);
                                        else return r.Flow.returnAsync()
                                    }))
                                })
                            }).then(function() {
                                if (r.BuiltinFunctions.textToDecimalValidate(a.value.balanceVar) && r.BuiltinFunctions.textToDecimal(a.value.balanceVar).lt(n.variables.min_transfer_amount_in_baseVar)) n.variables.account_idIn.gt(r.BuiltinFunctions.integerToLongInteger(0)) ? n.variables.show_insufficient_account_balanceVar = !0 : n.variables.show_insufficient_wallet_balanceVar = !0;
                                else return x.settransfer_type(R.transferTypes.send), n.variables.account_idIn.gt(r.BuiltinFunctions.integerToLongInteger(0)) ? (n.variables.transfer_dataVar.fromAttr.idAttr = n.variables.account_idIn, n.variables.transfer_dataVar.fromAttr.typeAttr = "account") : (n.variables.transfer_dataVar.fromAttr.idAttr = n.variables.wallet_idIn, n.variables.transfer_dataVar.fromAttr.typeAttr = "wallet"), m.updateTransferData$Action(n.variables.transfer_dataVar, e), r.Flow.returnAsync(r.Navigation.navigateTo(r.Navigation.generateScreenURL("uae", "select-transfer-account", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default), e, !0))
                            })
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__onClickSend$Action
        }
        set _onClickSend$Action(e) {
            this.__onClickSend$Action = e
        }
        get _getWalletList$Action() {
            return this.hasOwnProperty("__getWalletList$Action") || (this.__getWalletList$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("GetWalletList", function(i) {
                    return i && (i.setAttribute("code.function", "GetWalletList"), i.setAttribute("outsystems.function.key", "b3aa9b75-1c7d-4abd-bb0d-ad789e600060"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        t.ensureControllerAlive("GetWalletList"), e = t.callContext(e);
                        var a = new r.DataTypes.VariableHolder,
                            s = new r.DataTypes.VariableHolder;
                        return r.Flow.executeAsyncFlow(function() {
                            return s.value = m.getAuth$Action(e), n.flush(), t.getWalletList$ServerAction(s.value.tokenOut, e).then(function(c) {
                                a.value = c
                            }).then(function() {
                                m.updateWalletListCache$Action(a.value.responseOut.dataAttr.walletsAttr, e)
                            }).then(function() {
                                a.value.responseOut.dataAttr.walletsAttr.length > 0 && (n.variables.walletVar = a.value.responseOut.dataAttr.walletsAttr.getItem(0))
                            })
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__getWalletList$Action
        }
        set _getWalletList$Action(e) {
            this.__getWalletList$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("OnReady", function(i) {
                    return i && (i.setAttribute("code.function", "OnReady"), i.setAttribute("outsystems.function.key", "b903d387-acb8-412c-869d-f8aef1e84138"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var a = new r.DataTypes.VariableHolder;
                        return r.Flow.executeAsyncFlow(function() {
                            return n.variables.is_loadingVar = !1, n.variables.show_insufficient_wallet_balanceVar = !1, n.variables.show_insufficient_balance_in_all_trading_accountsVar = !1, n.variables.show_insufficient_account_balanceVar = !1, t._setAccountCurrency$Action(e).then(function() {
                                a.value = r.Logger.startActiveSpan("ParallelCalls", function(s) {
                                    s && (s.setAttribute("code.function", "ParallelCalls"), s.setAttribute("outsystems.function.key", "a440ef30-5965-44dd-a85e-33e45f08655c"), s.setAttribute("outsystems.function.owner.name", "uae"), s.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return t.safeExecuteJSNode(he, "ParallelCalls", "OnReady", {
                                            currency: r.DataConversion.JSNodeParamConverter.to(n.variables.account_currencyVar, r.DataTypes.DataTypes.Text),
                                            promise: r.DataConversion.JSNodeParamConverter.to(null, r.DataTypes.DataTypes.Object)
                                        }, function(c) {
                                            var b = new(t.constructor.getVariableGroupType("uae.TransferFlow.TransferDirectionBlock.OnReady$parallelCallsJSResult"));
                                            return b.promiseOut = r.DataConversion.JSNodeParamConverter.from(c.promise, r.DataTypes.DataTypes.Object), b
                                        }, {
                                            GetWalletList: t.clientActionProxies.getWalletList$Action,
                                            GetAccountList: t.clientActionProxies.getAccountList$Action,
                                            GetCurrencyConfig: t.clientActionProxies.getCurrencyConfig$Action,
                                            SetAccountCurrency: t.clientActionProxies.setAccountCurrency$Action,
                                            GetExchangeRates: t.clientActionProxies.getExchangeRates$Action,
                                            CalculateMinTransferAmountInBase: t.clientActionProxies.calculateMinTransferAmountInBase$Action
                                        }, {})
                                    } finally {
                                        s && s.end()
                                    }
                                }, 1), n.variables.networks_calls_promiseVar = a.value.promiseOut
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
        get _onClickMaybeLater$Action() {
            return this.hasOwnProperty("__onClickMaybeLater$Action") || (this.__onClickMaybeLater$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("OnClickMaybeLater", function(i) {
                    i && (i.setAttribute("code.function", "OnClickMaybeLater"), i.setAttribute("outsystems.function.key", "c3a190b2-e449-4a65-80da-287db74b033d"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("OnClickMaybeLater"), e = t.callContext(e), r.Navigation.navigateBack(null, e, !0)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onClickMaybeLater$Action
        }
        set _onClickMaybeLater$Action(e) {
            this.__onClickMaybeLater$Action = e
        }
        onClickReceive$Action(e) {
            var n = this.controller;
            return r.Logger.startActiveSpan("OnClickReceive__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnClickReceive"), t.setAttribute("outsystems.function.key", "0e0c28d3-0311-4910-9bc8-7d913f90bf31"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onClickReceive$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onClickDeposit$Action(e) {
            var n = this.controller;
            return r.Logger.startActiveSpan("OnClickDeposit__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnClickDeposit"), t.setAttribute("outsystems.function.key", "220cb1ec-ae21-4ca8-8853-d23230ba1471"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onClickDeposit$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        getCurrencyConfig$Action(e) {
            var n = this.controller;
            return r.Logger.startActiveSpan("GetCurrencyConfig__proxy", function(t) {
                return t && (t.setAttribute("code.function", "GetCurrencyConfig"), t.setAttribute("outsystems.function.key", "247a4090-78eb-4c83-811c-31ab15009dae"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._getCurrencyConfig$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        getExchangeRates$Action(e) {
            var n = this.controller;
            return r.Logger.startActiveSpan("GetExchangeRates__proxy", function(t) {
                return t && (t.setAttribute("code.function", "GetExchangeRates"), t.setAttribute("outsystems.function.key", "251cb06f-f4d3-4a4e-9c37-4a1d03702dda"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._getExchangeRates$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onClickDepositWallet$Action(e) {
            var n = this.controller;
            return r.Logger.startActiveSpan("OnClickDepositWallet__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnClickDepositWallet"), t.setAttribute("outsystems.function.key", "6f23a63f-afe0-4f29-956f-68f9c6a6294b"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onClickDepositWallet$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        calculateMinTransferAmountInBase$Action(e) {
            var n = this.controller;
            return r.Logger.startActiveSpan("CalculateMinTransferAmountInBase__proxy", function(t) {
                t && (t.setAttribute("code.function", "CalculateMinTransferAmountInBase"), t.setAttribute("outsystems.function.key", "765f8d61-6f81-4c31-bb18-9c4d9f7a02e8"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._calculateMinTransferAmountInBase$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        setAccountCurrency$Action(e) {
            var n = this.controller;
            return r.Logger.startActiveSpan("SetAccountCurrency__proxy", function(t) {
                return t && (t.setAttribute("code.function", "SetAccountCurrency"), t.setAttribute("outsystems.function.key", "856a9b20-3366-4989-a654-4d99d6eb1e53"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._setAccountCurrency$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        getAccountList$Action(e) {
            var n = this.controller;
            return r.Logger.startActiveSpan("GetAccountList__proxy", function(t) {
                return t && (t.setAttribute("code.function", "GetAccountList"), t.setAttribute("outsystems.function.key", "8e0370c5-bbbe-443c-9380-2e769e8475c6"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._getAccountList$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        receiveFundsOnClick$Action(e, n) {
            var t = this.controller;
            return r.Logger.startActiveSpan("ReceiveFundsOnClick__proxy", function(o) {
                return o && (o.setAttribute("code.function", "ReceiveFundsOnClick"), o.setAttribute("outsystems.function.key", "94215992-a484-4f06-84cd-f2153486285e"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._receiveFundsOnClick$Action, n, e)
                }, function() {
                    o && o.end()
                })
            }, 0)
        }
        onClickDirection$Action(e, n) {
            var t = this.controller;
            return r.Logger.startActiveSpan("OnClickDirection__proxy", function(o) {
                return o && (o.setAttribute("code.function", "OnClickDirection"), o.setAttribute("outsystems.function.key", "a614dc9a-0aec-49a7-9ad2-dbc591631fdd"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._onClickDirection$Action, n, e)
                }, function() {
                    o && o.end()
                })
            }, 0)
        }
        onClickSend$Action(e) {
            var n = this.controller;
            return r.Logger.startActiveSpan("OnClickSend__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnClickSend"), t.setAttribute("outsystems.function.key", "abb869cc-ebfe-4500-a7fc-e4b4b3e6f131"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onClickSend$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        getWalletList$Action(e) {
            var n = this.controller;
            return r.Logger.startActiveSpan("GetWalletList__proxy", function(t) {
                return t && (t.setAttribute("code.function", "GetWalletList"), t.setAttribute("outsystems.function.key", "b3aa9b75-1c7d-4abd-bb0d-ad789e600060"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._getWalletList$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onReady$Action(e) {
            var n = this.controller;
            return r.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "b903d387-acb8-412c-869d-f8aef1e84138"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onClickMaybeLater$Action(e) {
            var n = this.controller;
            return r.Logger.startActiveSpan("OnClickMaybeLater__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnClickMaybeLater"), t.setAttribute("outsystems.function.key", "c3a190b2-e449-4a65-80da-287db74b033d"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onClickMaybeLater$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
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
                var n = this.controller,
                    t = this.model,
                    o = this.idService;
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
            return m.defaultTimeout
        }
    };
    u(l, "ControllerInner");
    let _ = l;
    p = _, p.registerVariableGroupType("uae.TransferFlow.TransferDirectionBlock$ActionGetCurrencyConfig", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: r.DataTypes.DataTypes.Record,
        defaultValue: u(function() {
            return new W
        }, "defaultValue"),
        complexType: W
    }]), p.registerVariableGroupType("uae.TransferFlow.TransferDirectionBlock$ActionGetExchangerates", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: r.DataTypes.DataTypes.Record,
        defaultValue: u(function() {
            return new F
        }, "defaultValue"),
        complexType: F
    }]), p.registerVariableGroupType("uae.TransferFlow.TransferDirectionBlock$ActionGetAccounts", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: r.DataTypes.DataTypes.Record,
        defaultValue: u(function() {
            return new B
        }, "defaultValue"),
        complexType: B
    }]), p.registerVariableGroupType("uae.TransferFlow.TransferDirectionBlock$ActionGetWalletList", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: r.DataTypes.DataTypes.Record,
        defaultValue: u(function() {
            return new N
        }, "defaultValue"),
        complexType: N
    }]), p.registerVariableGroupType("uae.TransferFlow.TransferDirectionBlock.OnClickReceive$vars", [{
        name: "has_sufficient_account_balance",
        attrName: "has_sufficient_account_balanceVar",
        mandatory: !1,
        dataType: r.DataTypes.DataTypes.Boolean,
        defaultValue: u(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "has_sufficient_wallet_balance",
        attrName: "has_sufficient_wallet_balanceVar",
        mandatory: !1,
        dataType: r.DataTypes.DataTypes.Boolean,
        defaultValue: u(function() {
            return !1
        }, "defaultValue")
    }]), p.registerVariableGroupType("uae.TransferFlow.TransferDirectionBlock.GetExchangeRates$vars", [{
        name: "usd",
        attrName: "usdVar",
        mandatory: !1,
        dataType: r.DataTypes.DataTypes.Record,
        defaultValue: u(function() {
            return new L
        }, "defaultValue"),
        complexType: L
    }]), p.registerVariableGroupType("uae.TransferFlow.TransferDirectionBlock.ReceiveFundsOnClick$vars", [{
        name: "is_send",
        attrName: "is_sendInLocal",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Boolean,
        defaultValue: u(function() {
            return !1
        }, "defaultValue")
    }]), p.registerVariableGroupType("uae.TransferFlow.TransferDirectionBlock.OnClickDirection$vars", [{
        name: "is_send",
        attrName: "is_sendInLocal",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Boolean,
        defaultValue: u(function() {
            return !1
        }, "defaultValue")
    }]), p.registerVariableGroupType("uae.TransferFlow.TransferDirectionBlock.OnClickSend$vars", [{
        name: "balance",
        attrName: "balanceVar",
        mandatory: !1,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "currency",
        attrName: "currencyVar",
        mandatory: !1,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }]), p.registerVariableGroupType("uae.TransferFlow.TransferDirectionBlock.OnReady$parallelCallsJSResult", [{
        name: "promise",
        attrName: "promiseOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Object,
        defaultValue: u(function() {
            return null
        }, "defaultValue")
    }])
}
var p, Ie = new r.Controller.ControllerFactory(p, H);
var Et = P.PlaceholderContent,
    Dt = P.IteratorPlaceholderContent,
    He = u(function() {
        var _ = De(function(l) {
            var A = l.model,
                e = l.controller,
                n = l.controller.idService,
                t = e.validationService,
                o = e.callContext(),
                i = I,
                a = V,
                s = {
                    props: l,
                    validateWidget: u(function(d) {
                        l.validateWidget(l, d)
                    }, "validateWidget")
                },
                c = A,
                b = U,
                g = G,
                S = M();
            return f.createElement("div", l.rootNodeProperties, f.createElement(h, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: flex-start; align-self: stretch; display: flex; flex: 1 0 0; flex-direction: column; gap: 24px;"
                },
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "0"
                },
                _widgetRecordProvider: c
            }, f.createElement(Oe, {
                extendedProperties: {
                    style: "color: var(--text-brandPrimaryProminent, #00375C); font-size: 24px; font-style: normal; font-weight: 900; line-height: normal;"
                },
                text: [g(a("XNu69qzbTk25gSrLVIUIvQ#Value", "What type of transfer would you like to make?"))],
                _idProps: {
                    service: n,
                    uuid: "1"
                },
                _widgetRecordProvider: c
            }), f.createElement(h, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: flex-start; align-self: stretch; display: flex; flex-direction: column; gap: 8px;"
                },
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "2"
                },
                _widgetRecordProvider: c
            }, f.createElement(h, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: u(function() {
                        return Promise.resolve().then(function() {
                            var d = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                            return e.onClickDirection$Action(!0, e.callContext(d))
                        })
                    }, "onClick")
                },
                extendedProperties: {
                    style: "align-items: center; align-self: stretch; background: var(--bg-secondary, #EFF3F5); border: 1px solid var(--border-primary, rgba(0, 0, 0, 0.04)); border-radius: 8px; display: flex; gap: 16px; min-height: 56px; padding: 8px 16px;"
                },
                gridProperties: {
                    classes: "OSInline"
                },
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "3"
                },
                _widgetRecordProvider: c
            }, f.createElement(h, {
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
                    uuid: "4"
                },
                _widgetRecordProvider: c
            }, f.createElement(ie, {
                extendedProperties: {
                    style: "height: fit-content;"
                },
                gridProperties: {
                    width: "fit-content"
                },
                image: Y.VersionedURL.getVersionedUrl("img/uae.circleup.svg"),
                type: 0,
                _idProps: {
                    service: n,
                    uuid: "5"
                },
                _widgetRecordProvider: c
            })), f.createElement(D, {
                gridProperties: {
                    marginLeft: "0"
                },
                value: w.resolve(T.TranslationsService).getMessage("gC_KtLCAs0K5gXlVub9kEA#ValueExpression.2573224.1", "Send"),
                _idProps: {
                    service: n,
                    uuid: "6"
                },
                _widgetRecordProvider: c
            })), f.createElement(h, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: u(function() {
                        return Promise.resolve().then(function() {
                            var d = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                            return e.onClickDirection$Action(!1, e.callContext(d))
                        })
                    }, "onClick")
                },
                extendedProperties: {
                    style: "align-items: center; align-self: stretch; background: var(--bg-secondary, #EFF3F5); border: 1px solid var(--border-primary, rgba(0, 0, 0, 0.04)); border-radius: 8px; display: flex; gap: 16px; min-height: 56px; padding: 8px 16px;"
                },
                gridProperties: {
                    classes: "OSInline"
                },
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "7"
                },
                _widgetRecordProvider: c
            }, f.createElement(h, {
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
                    uuid: "8"
                },
                _widgetRecordProvider: c
            }, f.createElement(ie, {
                extendedProperties: {
                    style: "height: fit-content;"
                },
                gridProperties: {
                    width: "fit-content"
                },
                image: Y.VersionedURL.getVersionedUrl("img/uae.circledown.svg"),
                type: 0,
                _idProps: {
                    service: n,
                    uuid: "9"
                },
                _widgetRecordProvider: c
            })), f.createElement(D, {
                gridProperties: {
                    marginLeft: "0"
                },
                value: w.resolve(T.TranslationsService).getMessage("g03AjXat4k2msOe_1Nat3g#ValueExpression.-1548023101.1", "Receive"),
                _idProps: {
                    service: n,
                    uuid: "10"
                },
                _widgetRecordProvider: c
            })))), f.createElement(z, {
                showPopup: A.variables.show_insufficient_wallet_balanceVar,
                style: "popup-dialog",
                _idProps: {
                    service: n,
                    name: "InsufficientWalletBalance"
                },
                _widgetRecordProvider: c
            }, f.createElement(h, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: center; display: flex; flex-direction: column; gap: 24px;"
                },
                gridProperties: {
                    classes: "OSInline"
                },
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "12"
                },
                _widgetRecordProvider: c
            }, f.createElement(h, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: flex-start; align-self: stretch; display: flex;"
                },
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "13"
                },
                _widgetRecordProvider: c
            }, f.createElement(D, {
                extendedProperties: {
                    style: "---comment-6: /* 155.556% */; color: var(--Neutral-Neutral-10, #101213); font-size: 16px; font-style: normal; font-weight: 700; line-height: 28px;"
                },
                value: "Insufficient balance for a transfer",
                _idProps: {
                    service: n,
                    uuid: "14"
                },
                _widgetRecordProvider: c
            })), f.createElement(D, {
                value: "Want to make a deposit instead?",
                _idProps: {
                    service: n,
                    uuid: "15"
                },
                _widgetRecordProvider: c
            }), f.createElement(h, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: center; align-self: stretch; display: flex; flex-direction: column; gap: 8px;"
                },
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "16"
                },
                _widgetRecordProvider: c
            }, f.createElement(O, {
                enabled: !0,
                isDefault: !1,
                onClick: u(function() {
                    var d = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                    e.onClickDepositWallet$Action(e.callContext(d))
                }, "onClick"),
                style: "btn btn-primary action-button w-full",
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "17"
                },
                _widgetRecordProvider: c
            }, g(a("jeRw2E7XHkaLNGeZ4ySgHw#Value", "Deposit"))), f.createElement(O, {
                enabled: !0,
                gridProperties: {
                    marginLeft: "0"
                },
                isDefault: !1,
                onClick: u(function() {
                    var d = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                    e.onClickMaybeLater$Action(e.callContext(d))
                }, "onClick"),
                style: "btn btn-primary secondary-button",
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "18"
                },
                _widgetRecordProvider: c
            }, g(a("zZ3gbyAgfkCgw0upX4U6hQ#Value", "Maybe later")))))), f.createElement(z, {
                showPopup: A.variables.show_insufficient_balance_in_all_trading_accountsVar,
                style: "popup-dialog",
                _idProps: {
                    service: n,
                    name: "InsufficientAllTradingAccountsBalance"
                },
                _widgetRecordProvider: c
            }, f.createElement(h, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: center; display: flex; flex-direction: column; gap: 24px;"
                },
                gridProperties: {
                    classes: "OSInline"
                },
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "20"
                },
                _widgetRecordProvider: c
            }, f.createElement(h, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: flex-start; align-self: stretch; display: flex;"
                },
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "21"
                },
                _widgetRecordProvider: c
            }, f.createElement(D, {
                extendedProperties: {
                    style: "---comment-6: /* 155.556% */; color: var(--Neutral-Neutral-10, #101213); font-size: 16px; font-style: normal; font-weight: 700; line-height: 28px;"
                },
                value: w.resolve(T.TranslationsService).getMessage("aMhjbruwPU+WLYuVxBL7UQ#ValueExpression.441150431.1", "Insufficient balance"),
                _idProps: {
                    service: n,
                    uuid: "22"
                },
                _widgetRecordProvider: c
            })), f.createElement(D, {
                value: w.resolve(T.TranslationsService).getMessage("eNqhDWk1gEGjpfytA2UQOg#ValueExpression.1440495174.1", "Want to make a deposit to your ") + A.variables.walletVar.currencyAttr + w.resolve(T.TranslationsService).getMessage("eNqhDWk1gEGjpfytA2UQOg#ValueExpression.1211538756.1", " Wallet instead?"),
                _idProps: {
                    service: n,
                    uuid: "23"
                },
                _widgetRecordProvider: c
            }), f.createElement(h, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: center; align-self: stretch; display: flex; flex-direction: column; gap: 8px;"
                },
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "24"
                },
                _widgetRecordProvider: c
            }, f.createElement(O, {
                enabled: !0,
                gridProperties: {
                    classes: "OSFillParent"
                },
                isDefault: !1,
                onClick: u(function() {
                    var d = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                    e.onClickDeposit$Action(e.callContext(d))
                }, "onClick"),
                style: "btn btn-primary action-button w-full",
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "25"
                },
                _widgetRecordProvider: c
            }, g(a("mkraPIKCL0mSXHeL_z4_pg#Value", "Deposit"))), f.createElement(O, {
                enabled: !0,
                gridProperties: {
                    marginLeft: "0"
                },
                isDefault: !1,
                onClick: u(function() {
                    var d = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                    e.onClickMaybeLater$Action(e.callContext(d))
                }, "onClick"),
                style: "btn btn-cancel secondary-button",
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "26"
                },
                _widgetRecordProvider: c
            }, g(a("Wkqqjbm0F02Q9CF+r_utUA#Value", "Maybe later")))))), f.createElement(z, {
                showPopup: A.variables.show_insufficient_account_balanceVar,
                style: "popup-dialog",
                _idProps: {
                    service: n,
                    name: "InsufficientAccountBalance"
                },
                _widgetRecordProvider: c
            }, f.createElement(h, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: center; display: flex; flex-direction: column; gap: 24px;"
                },
                gridProperties: {
                    classes: "OSInline"
                },
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "28"
                },
                _widgetRecordProvider: c
            }, f.createElement(h, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: flex-start; align-self: stretch; display: flex;"
                },
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "29"
                },
                _widgetRecordProvider: c
            }, f.createElement(D, {
                extendedProperties: {
                    style: "---comment-6: /* 155.556% */; color: var(--Neutral-Neutral-10, #101213); font-size: 16px; font-style: normal; font-weight: 700; line-height: 28px;"
                },
                value: w.resolve(T.TranslationsService).getMessage("en3zkKE4U0eiw3hGGJSmmQ#ValueExpression.441150431.1", "Insufficient balance"),
                _idProps: {
                    service: n,
                    uuid: "30"
                },
                _widgetRecordProvider: c
            })), f.createElement(D, {
                value: w.resolve(T.TranslationsService).getMessage("gNRZ3t43G06Zj7lxCd_YwQ#ValueExpression.1308377398.1", "Would you like to receive funds from your Wallet instead?"),
                _idProps: {
                    service: n,
                    uuid: "31"
                },
                _widgetRecordProvider: c
            }), f.createElement(h, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: center; align-self: stretch; display: flex; flex-direction: column; gap: 8px;"
                },
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "32"
                },
                _widgetRecordProvider: c
            }, f.createElement(O, {
                enabled: !0,
                isDefault: !1,
                onClick: u(function() {
                    return Promise.resolve().then(function() {
                        var d = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                        return e.receiveFundsOnClick$Action(!1, e.callContext(d))
                    })
                }, "onClick"),
                style: "btn btn-primary action-button w-full",
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "33"
                },
                _widgetRecordProvider: c
            }, g(a("OcBCmcziX02ji2Xf+YX+7g#Value", "Receive funds"))), f.createElement(O, {
                enabled: !0,
                gridProperties: {
                    marginLeft: "0"
                },
                isDefault: !1,
                onClick: u(function() {
                    var d = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                    e.onClickMaybeLater$Action(e.callContext(d))
                }, "onClick"),
                style: "btn btn-primary secondary-button",
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "34"
                },
                _widgetRecordProvider: c
            }, g(a("TBv1C95CW0mRm1dOmCUTIg#Value", "Maybe later")))))))
        }, {
            topLevelComponent: !1,
            getAttributes: u(function() {
                return {
                    codeFunction: "TransferDirectionBlock",
                    functionKey: "3d0b07d2-495c-4307-be6d-f7fff9da07ae",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "TransferFlow.TransferDirectionBlock",
            modelFactory: Le,
            controllerFactory: Ie
        });
        return _.getCssDependencies = function() {
            return ["css/uae.TransferFlow.TransferDirectionBlock.css", "css/OutSystemsReactWidgets.css"]
        }, _.getJsDependencies = function() {
            return []
        }, _.getBlocks = function() {
            return []
        }, _
    }, "componentFactory"),
    X = He();
var Ce = P.PlaceholderContent,
    Ht = P.IteratorPlaceholderContent,
    Me = u(function() {
        var _ = Ee(function(l) {
            var A = l.model,
                e = l.controller,
                n = l.controller.idService,
                t = e.validationService,
                o = e.callContext(),
                i = I,
                a = V,
                s = {
                    props: l,
                    validateWidget: u(function(d) {
                        l.validateWidget(l, d)
                    }, "validateWidget")
                },
                c = A,
                b = U,
                g = G,
                S = M();
            return k.createElement("div", l.rootNodeProperties, b(we.isDesktop$Action(o).isDesktopOut, !1, this, function() {
                return [k.createElement(ae, {
                    getOwnerSpan: u(function() {
                        return S.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: u(function() {
                        return S.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        ShowClosebutton: !0,
                        ShowLoader: A.variables.is_loadingVar,
                        ShowBackbutton: !1
                    },
                    events: {
                        _handleError: u(function(d) {
                            e.handleError(d)
                        }, "_handleError"),
                        closeBtnEvent$Action: u(function() {
                            var d = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                            e.desktopProcessLayoutCloseBtnEvent$Action(e.callContext(d))
                        }, "closeBtnEvent$Action"),
                        backBtnEvent$Action: u(function() {
                            var d = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                            e.desktopProcessLayoutBackBtnEvent$Action(e.callContext(d))
                        }, "backBtnEvent$Action")
                    },
                    _validationProps: {
                        validationService: t
                    },
                    _idProps: {
                        service: n,
                        uuid: "0",
                        alias: "1"
                    },
                    _widgetRecordProvider: c,
                    placeholders: {
                        contentbody: new Ce(function() {
                            return [k.createElement(h, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "padding-top: 24px;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: n,
                                    uuid: "1"
                                },
                                _widgetRecordProvider: c
                            }, k.createElement(X, {
                                getOwnerSpan: u(function() {
                                    return S.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: u(function() {
                                    return S.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    wallet_id: A.variables.wallet_idIn,
                                    account_id: A.variables.account_idIn
                                },
                                events: {
                                    _handleError: u(function(d) {
                                        e.handleError(d)
                                    }, "_handleError"),
                                    setLoading$Action: u(function(d) {
                                        var K = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                                        e.setLoading$Action(d, e.callContext(K))
                                    }, "setLoading$Action")
                                },
                                _validationProps: {
                                    validationService: t
                                },
                                _idProps: {
                                    service: n,
                                    uuid: "2",
                                    alias: "2"
                                },
                                _widgetRecordProvider: c,
                                _dependencies: []
                            }))]
                        })
                    },
                    _dependencies: [i(A.variables.account_idIn), i(A.variables.wallet_idIn)]
                })]
            }, function() {
                return [k.createElement(oe, {
                    getOwnerSpan: u(function() {
                        return S.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: u(function() {
                        return S.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        has_back_button: !1,
                        has_close_icon: !0,
                        show_loader: A.variables.is_loadingVar
                    },
                    events: {
                        _handleError: u(function(d) {
                            e.handleError(d)
                        }, "_handleError"),
                        closeEvent$Action: u(function() {
                            var d = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                            e.desktopProcessLayoutCloseBtnEvent$Action(e.callContext(d))
                        }, "closeEvent$Action")
                    },
                    _validationProps: {
                        validationService: t
                    },
                    _idProps: {
                        service: n,
                        uuid: "3",
                        alias: "3"
                    },
                    _widgetRecordProvider: c,
                    placeholders: {
                        content: new Ce(function() {
                            return [k.createElement(X, {
                                getOwnerSpan: u(function() {
                                    return S.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: u(function() {
                                    return S.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    account_id: A.variables.account_idIn,
                                    wallet_id: A.variables.wallet_idIn
                                },
                                events: {
                                    _handleError: u(function(d) {
                                        e.handleError(d)
                                    }, "_handleError"),
                                    setLoading$Action: u(function(d) {
                                        var K = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                                        e.setLoading$Action(d, e.callContext(K))
                                    }, "setLoading$Action")
                                },
                                _validationProps: {
                                    validationService: t
                                },
                                _idProps: {
                                    service: n,
                                    uuid: "4",
                                    alias: "4"
                                },
                                _widgetRecordProvider: c,
                                _dependencies: []
                            })]
                        }),
                        footer: Ce.Empty
                    },
                    _dependencies: [i(A.variables.wallet_idIn), i(A.variables.account_idIn)]
                })]
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: u(function() {
                return {
                    codeFunction: "TransferDirection",
                    functionKey: "bb4aa73e-3508-4c87-9543-09b0e4b0b911",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "TransferFlow.TransferDirection",
            modelFactory: ge,
            controllerFactory: ue,
            getTitle: u(function(l) {
                var A = l.model,
                    e = l.controller,
                    n = l.controller.idService,
                    t = e.validationService,
                    o = e.callContext(),
                    i = I,
                    a = V,
                    s = {
                        props: l,
                        validateWidget: u(function(c) {
                            l.validateWidget(l, c)
                        }, "validateWidget")
                    };
                return w.resolve(T.TranslationsService).getMessage("PqdKuwg1h0yVQwmw5LC5EQ#TitleExpression.-1673229811.1", "Transfer between | Deriv")
            }, "getTitle")
        });
        return _.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, _.getJsDependencies = function() {
            return []
        }, _.getBlocks = function() {
            return [ae, X, oe]
        }, _
    }, "componentFactory"),
    Ge = Me();
export {
    ue as controllerModule, ge as modelModule, Ge as viewModule, ce as webFlowControllerModule
};