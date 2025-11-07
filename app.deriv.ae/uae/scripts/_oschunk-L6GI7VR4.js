import {
    a as Ie
} from "./_oschunk-MELU7BED.js";
import {
    b as Fe
} from "./_oschunk-CVQITZ7X.js";
import {
    a as Ne
} from "./_oschunk-ICR7HB42.js";
import {
    a as $e
} from "./_oschunk-XWQWGTBT.js";
import {
    a as We
} from "./_oschunk-OBRHZSR5.js";
import {
    a as De
} from "./_oschunk-6K5EBY3W.js";
import {
    a as ke
} from "./_oschunk-SFRA456L.js";
import "./_oschunk-L6JZD7VU.js";
import "./_oschunk-TLJXDQWQ.js";
import {
    a as Le
} from "./_oschunk-SNXHD6UR.js";
import "./_oschunk-RVD4FS25.js";
import "./_oschunk-4SYOXZNK.js";
import "./_oschunk-YB2J7GTX.js";
import {
    a as le
} from "./_oschunk-HFW3V2GI.js";
import "./_oschunk-LLAHPWP3.js";
import "./_oschunk-YVFTECWM.js";
import {
    b as W,
    f as y,
    h as w,
    i as Re,
    j as ft,
    n as F,
    r as H,
    u as D
} from "./_oschunk-VR5BNL2K.js";
import {
    a as Ve,
    g as I,
    m as q,
    n as dt,
    o as _e,
    q as ee,
    r as te,
    s as Y,
    t as z
} from "./_oschunk-4VHUVDBV.js";
import {
    a as Z
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    Ca as ue,
    Ea as de,
    Ma as X,
    N as U,
    Oa as fe,
    Qa as ve,
    Qb as se,
    Sb as T,
    a as V,
    d as K,
    db as ut,
    gb as ge,
    ib as ye,
    ja as Ee,
    la as Oe,
    oa as xe,
    r as oe,
    s as Q,
    ub as k,
    x as Te
} from "./_oschunk-Z7QRTJDJ.js";
import {
    I as ct,
    W as L,
    c as u,
    e as Pe,
    m as O,
    n as x,
    p as N,
    w as S
} from "./_oschunk-M5BUVJ72.js";
var Dt = {
        "FbGeNOi3kUy5n2S27Cby2A#Title": "Wallet | Deriv",
        "FbGeNOi3kUy5n2S27Cby2A#TitleExpression.-1751033037.1": "Wallet | Deriv"
    },
    vt = {
        "ar-001": {
            translations: Dt,
            isRTL: !0
        }
    };
var re = L; {
    let _ = class _ extends re.Controller.BaseViewController {
        constructor(e, t, r) {
            super(e, t, r, vt);
            var n = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _hidePanelHandler$Action() {
            return this.hasOwnProperty("__hidePanelHandler$Action") || (this.__hidePanelHandler$Action = function(e, t) {
                var r = this.model,
                    n = this.controller,
                    i = this.idService;
                return re.Logger.startActiveSpan("HidePanelHandler", function(c) {
                    c && (c.setAttribute("code.function", "HidePanelHandler"), c.setAttribute("outsystems.function.key", "9f85e0ac-328c-43a2-9309-d7fa0422496c"), c.setAttribute("outsystems.function.owner.name", "uae"), c.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("HidePanelHandler"), t = n.callContext(t);
                        var g = new re.DataTypes.VariableHolder(new(n.constructor.getVariableGroupType("uae.MainFlow.Wallet.HidePanelHandler$vars")));
                        g.value.shouldHideInLocal = e, r.variables.hidePanelVar = g.value.shouldHideInLocal
                    } finally {
                        c && c.end()
                    }
                }, 1)
            }), this.__hidePanelHandler$Action
        }
        set _hidePanelHandler$Action(e) {
            this.__hidePanelHandler$Action = e
        }
        hidePanelHandler$Action(e, t) {
            var r = this.controller;
            return re.Logger.startActiveSpan("HidePanelHandler__proxy", function(n) {
                n && (n.setAttribute("code.function", "HidePanelHandler"), n.setAttribute("outsystems.function.key", "9f85e0ac-328c-43a2-9309-d7fa0422496c"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._hidePanelHandler$Action, t, e)
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
                return Ne.default.handleError(e, this.callContext())
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
    u(_, "ControllerInner");
    let b = _;
    He = b, He.registerVariableGroupType("uae.MainFlow.Wallet.HidePanelHandler$vars", [{
        name: "ShouldHide",
        attrName: "shouldHideInLocal",
        mandatory: !0,
        dataType: re.DataTypes.DataTypes.Boolean,
        defaultValue: u(function() {
            return !1
        }, "defaultValue")
    }])
}
var He, Ge = new re.Controller.ControllerFactory(He, Z);
var G = Pe(Ve());
var E = L,
    Ye = class Ye extends E.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("selected_transaction_filter", "selected_transaction_filterVar", "selected_transaction_filter", !0, !1, E.DataTypes.DataTypes.Integer, function() {
                return V.transactionFilterTypes.all
            }, !1), this.attr("grouped_transactions", "grouped_transactionsVar", "grouped_transactions", !0, !1, E.DataTypes.DataTypes.RecordList, function() {
                return E.DataTypes.ImmutableBase.getData(new(E.GenericTypeCache.getGenericList(X)))
            }, !1, E.GenericTypeCache.getGenericList(X)), this.attr("transactions", "transactionsVar", "transactions", !0, !1, E.DataTypes.DataTypes.RecordList, function() {
                return E.DataTypes.ImmutableBase.getData(new(E.GenericTypeCache.getGenericList(Q)))
            }, !1, E.GenericTypeCache.getGenericList(Q)), this.attr("transactions_meta", "transactions_metaVar", "transactions_meta", !0, !1, E.DataTypes.DataTypes.Record, function() {
                return E.DataTypes.ImmutableBase.getData(new K)
            }, !1, K), this.attr("current_page", "current_pageVar", "current_page", !0, !1, E.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("pages", "pagesVar", "pages", !0, !1, E.DataTypes.DataTypes.RecordList, function() {
                return E.DataTypes.ImmutableBase.getData(new E.DataTypes.IntegerList)
            }, !1, E.DataTypes.IntegerList), this.attr("is_loading", "is_loadingVar", "is_loading", !0, !1, E.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("is_deposit_enabled", "is_deposit_enabledIn", "is_deposit_enabled", !0, !1, E.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_is_deposit_enabledInDataFetchStatus", "_is_deposit_enabledInDataFetchStatus", "_is_deposit_enabledInDataFetchStatus", !0, !1, E.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("is_parent_loading", "is_parent_loadingIn", "is_parent_loading", !0, !1, E.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_is_parent_loadingInDataFetchStatus", "_is_parent_loadingInDataFetchStatus", "_is_parent_loadingInDataFetchStatus", !0, !1, E.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(E.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
u(Ye, "VariablesRecord");
var pe = Ye;
pe.init();
var ze = class ze extends E.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
u(ze, "WidgetsRecord");
var Be = ze,
    ie = class ie extends E.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return pe
        }
        static getWidgetsRecordConstructor() {
            return Be
        }
        static get hasValidationWidgets() {
            return ie._hasValidationWidgetsValue === void 0 && (ie._hasValidationWidgetsValue = void 0), ie._hasValidationWidgetsValue
        }
        setInputs(_) {
            "is_deposit_enabled" in _ && (this.variables.is_deposit_enabledIn = _.is_deposit_enabled, "_is_deposit_enabledInDataFetchStatus" in _ && (this.variables._is_deposit_enabledInDataFetchStatus = _._is_deposit_enabledInDataFetchStatus)), "is_parent_loading" in _ && (this.variables.is_parent_loadingIn = _.is_parent_loading, "_is_parent_loadingInDataFetchStatus" in _ && (this.variables._is_parent_loadingInDataFetchStatus = _._is_parent_loadingInDataFetchStatus))
        }
    };
u(ie, "Model");
var me = ie;
me._hasValidationWidgetsValue = void 0;
var yt = new E.Model.ModelFactory(me);
var C = L,
    Ke = class Ke extends C.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("wallet", "walletVar", "wallet", !0, !1, C.DataTypes.DataTypes.Record, function() {
                return C.DataTypes.ImmutableBase.getData(new oe)
            }, !1, oe), this.attr("wallet_list", "wallet_listVar", "wallet_list", !0, !1, C.DataTypes.DataTypes.RecordList, function() {
                return C.DataTypes.ImmutableBase.getData(new(C.GenericTypeCache.getGenericList(oe)))
            }, !1, C.GenericTypeCache.getGenericList(oe)), this.attr("is_wallet_loading", "is_wallet_loadingVar", "is_wallet_loading", !0, !1, C.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("KYCResponse", "kYCResponseVar", "KYCResponse", !0, !1, C.DataTypes.DataTypes.Record, function() {
                return C.DataTypes.ImmutableBase.getData(new Ee)
            }, !1, Ee), this.attr("ClientSystemStatus", "clientSystemStatusVar", "ClientSystemStatus", !0, !1, C.DataTypes.DataTypes.Record, function() {
                return C.DataTypes.ImmutableBase.getData(new U)
            }, !1, U), this.attr("is_transfer_enabled", "is_transfer_enabledVar", "is_transfer_enabled", !0, !1, C.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("is_deposit_enabled", "is_deposit_enabledVar", "is_deposit_enabled", !0, !1, C.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("is_withdrawal_enabled", "is_withdrawal_enabledVar", "is_withdrawal_enabled", !0, !1, C.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("account_list", "account_listVar", "account_list", !0, !1, C.DataTypes.DataTypes.RecordList, function() {
                return C.DataTypes.ImmutableBase.getData(new(C.GenericTypeCache.getGenericList(xe)))
            }, !1, C.GenericTypeCache.getGenericList(xe)), this.attr("show_kyc_verification_popup", "show_kyc_verification_popupVar", "show_kyc_verification_popup", !0, !1, C.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("wallet_limit", "wallet_limitVar", "wallet_limit", !0, !1, C.DataTypes.DataTypes.Record, function() {
                return C.DataTypes.ImmutableBase.getData(new Te)
            }, !1, Te), this.attr("show_transfer_limit_popup", "show_transfer_limit_popupVar", "show_transfer_limit_popup", !0, !1, C.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("show_withdrawal_limit_popup", "show_withdrawal_limit_popupVar", "show_withdrawal_limit_popup", !0, !1, C.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("show_limit_popup", "show_limit_popupVar", "show_limit_popup", !0, !1, C.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("showRateLimitPopup", "showRateLimitPopupVar", "showRateLimitPopup", !0, !1, C.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("user_metadata", "user_metadataVar", "user_metadata", !0, !1, C.DataTypes.DataTypes.Record, function() {
                return C.DataTypes.ImmutableBase.getData(new Oe)
            }, !1, Oe), this.attr("is_withdrawal_clicked", "is_withdrawal_clickedVar", "is_withdrawal_clicked", !0, !1, C.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("is_withdrawal_paused", "is_withdrawal_pausedVar", "is_withdrawal_paused", !0, !1, C.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("withdrawal_pause_type", "withdrawal_pause_typeVar", "withdrawal_pause_type", !0, !1, C.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("withdrawal_cooloff", "withdrawal_cooloffVar", "withdrawal_cooloff", !0, !1, C.DataTypes.DataTypes.Integer, function() {
                return 0
            }, !1)].concat(C.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
u(Ke, "VariablesRecord");
var be = Ke;
be.init();
var Qe = class Qe extends C.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
u(Qe, "WidgetsRecord");
var Je = Qe,
    ne = class ne extends C.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return be
        }
        static getWidgetsRecordConstructor() {
            return Je
        }
        static get hasValidationWidgets() {
            return ne._hasValidationWidgetsValue === void 0 && (ne._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0 || void 0 || void 0), ne._hasValidationWidgetsValue
        }
        setInputs(_) {}
    };
u(ne, "Model");
var he = ne;
he._hasValidationWidgetsValue = void 0;
var ht = new C.Model.ModelFactory(he);
var J = L,
    ce = class ce extends J.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("HidePanel", "hidePanelVar", "HidePanel", !0, !1, J.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1)].concat(J.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
        static fromStructure(_) {
            return new ce(new ce.RecordClass({
                hidePanelVar: J.DataTypes.ImmutableBase.getData(_)
            }))
        }
    };
u(ce, "VariablesRecord");
var Ce = ce;
Ce.init();
var qe = class qe extends J.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
u(qe, "WidgetsRecord");
var Xe = qe,
    ae = class ae extends J.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return Ce
        }
        static getWidgetsRecordConstructor() {
            return Xe
        }
        static get hasValidationWidgets() {
            return ae._hasValidationWidgetsValue === void 0 && (ae._hasValidationWidgetsValue = void 0 || void 0 || void 0), ae._hasValidationWidgetsValue
        }
        setInputs(_) {}
    };
u(ae, "Model");
var Se = ae;
Se._hasValidationWidgetsValue = void 0;
var Ze = new J.Model.ModelFactory(Se);
var d = Pe(Ve());
var Lt = {
        "AFYYNcdhOUyhymWUS9zbJQ#Value": "\u0645\u062A\u0627\u0628\u0639\u0629",
        "hADYsUGA7kS4G_htqLR30w#ValueExpression.-2109688103.1": " \u064A\u0645\u0643\u0646\u0643 \u0627\u0644\u0633\u062D\u0628 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649 \u0628\u0639\u062F",
        "hADYsUGA7kS4G_htqLR30w#ValueExpression.-578733866.1": "\u062A\u0645 \u0625\u064A\u0642\u0627\u0641 \u0627\u0644\u0633\u062D\u0628 \u0628\u0633\u0628\u0628",
        "xRfTyxZiSke3MhrYkMGHtQ#Value": "\u0646\u062C\u0627\u062D",
        "weCbYg7Yr0CI5a_wzQh_vA#Value": "\u0645\u062A\u0627\u0628\u0639\u0629",
        "uO72daXRNU2wrwEsCOb6zQ#ValueExpression.-2109688103.1": " \u064A\u0645\u0643\u0646\u0643 \u0627\u0644\u0633\u062D\u0628 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649 \u0628\u0639\u062F",
        "uO72daXRNU2wrwEsCOb6zQ#ValueExpression.-578733866.1": "\u062A\u0645 \u0625\u064A\u0642\u0627\u0641 \u0627\u0644\u0633\u062D\u0628 \u0628\u0633\u0628\u0628",
        "AppFO7mA2EKLhMvMd8PdIw#Value": "\u0646\u062C\u0627\u062D",
        "EiHb6k1Wp0iLhrcNQaeZNA#Value": "\u0625\u0644\u063A\u0627\u0621",
        "43HycpT+8E2DR6hGPlw+mw#Value": "\u0641\u062A\u062D \u0627\u0644\u062F\u0631\u062F\u0634\u0629 \u0627\u0644\u0645\u0628\u0627\u0634\u0631\u0629",
        "bnpjNOrd_UOV2do3AHDVFA#ValueExpression.422632842.1": "\u0644\u0642\u062F \u0648\u0635\u0644\u062A\u064E \u0625\u0644\u0649 \u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0642\u0635\u0649 \u0644\u0639\u062F\u062F \u0645\u062D\u0627\u0648\u0644\u0627\u062A \u0627\u0644\u0625\u0631\u0633\u0627\u0644. \u0644\u0644\u0645\u062A\u0627\u0628\u0639\u0629\u060C \u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627 \u0639\u0628\u0631 \u0627\u0644\u062F\u0631\u062F\u0634\u0629 \u0627\u0644\u0645\u0628\u0627\u0634\u0631\u0629.",
        "fvY78JauwkaGpRwDy4uBTA#Value": "\u0625\u0644\u063A\u0627\u0621",
        "d1IQlZAI9029NX+JjdE9bA#Value": "\u0645\u062A\u0627\u0628\u0639\u0629",
        "2UQRdGX_xkW3n6uz7rAusQ#ValueExpression.383660097.1": `\u0644\u0625\u062C\u0631\u0627\u0621 \u0627\u0644\u0625\u064A\u062F\u0627\u0639\u0627\u062A \u0648\u0627\u0644\u062A\u062F\u0627\u0648\u0644 \u0628\u0623\u0645\u0648\u0627\u0644 \u062D\u0642\u064A\u0642\u064A\u0629\u060C \u064A\u062C\u0628 \u0625\u0639\u0627\u062F\u0629 \u062A\u0642\u064A\u064A\u0645 \u0645\u062F\u0649 \u0645\u0644\u0627\u0621\u0645\u062A\u0643 \u0623\u0648 \u0642\u0628\u0648\u0644 \u0645\u062E\u0627\u0637\u0631 \u0627\u0644\u062A\u062F\u0627\u0648\u0644.

`,
        "dQeMpz39ZUSPRPSDiIP0eQ#ValueExpression.505823025.1": "\u0628\u0639\u0636 \u0627\u0644\u0645\u064A\u0632\u0627\u062A \u0645\u062A\u0648\u0642\u0641\u0629 \u0645\u0624\u0642\u062A\u064B\u0627",
        "mOYXozqDF0C5oHHu59Cz5g#Value": "\u062D\u0633\u0646\u0627\u064B",
        "YK7DXiYhWUuHr1TXEwnWLw#ValueExpression.2020218126.1": "\u0644\u0646 \u062A\u0643\u0648\u0646 \u0628\u0639\u0636 \u0627\u0644\u0645\u064A\u0632\u0627\u062A \u0645\u062A\u0627\u062D\u0629 \u062D\u062A\u0649 \u064A\u062A\u0645 \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u062D\u0633\u0627\u0628\u0643.",
        "nyyhTRzxHky6D8Iwvs8jcw#ValueExpression.-7528123.1": "\u062C\u0627\u0631\u064D \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0647\u0648\u064A\u0629",
        "lYUayGJL+UizXTdPDAl6lg#Value": "\u0625\u0644\u063A\u0627\u0621",
        "Z5KugUcYsEiZ3GuwewfdtQ#Value": "\u0639\u0631\u0636 \u0627\u0644\u062D\u0627\u0644\u0629",
        "rUuMsthWVUC81pnNW05r1w#ValueExpression.-2064769757.1": "\u0644\u0644\u0625\u064A\u062F\u0627\u0639 \u0648\u0628\u062F\u0621 \u0627\u0644\u062A\u062F\u0627\u0648\u0644\u060C \u0642\u0645 \u0628\u062A\u0648\u062B\u064A\u0642 \u0647\u0648\u064A\u062A\u0643.",
        "VFndRgE8A0W632k_ANyeEQ#ValueExpression.1550559136.1": "\u0641\u0634\u0644 \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0647\u0648\u064A\u0629",
        "vO7F_T4ENEi5K0iUsBgTaw#Value": "\u062D\u0633\u0646\u064B\u0627",
        "K7HOvsgfikmC7fxui9bijA#ValueExpression.-275471095.1": "\u0644\u0642\u062F \u0648\u0635\u0644\u062A \u0625\u0644\u0649 \u0627\u0644\u062D\u062F \u0627\u0644\u064A\u0648\u0645\u064A \u0645\u0646",
        "K7HOvsgfikmC7fxui9bijA#ValueExpression.831717808.1": "\u0627\u0644\u0633\u062D\u0648\u0628\u0627\u062A.",
        "xdYMOHxKh0uwt195Q9AoXg#ValueExpression.1186287113.1": "\u062A\u0645 \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u062D\u062F \u0627\u0644\u062A\u062D\u0648\u064A\u0644 \u0627\u0644\u064A\u0648\u0645\u064A",
        "4YXy8RTUykuVvWQtLAewHQ#Value": "\u062D\u0633\u0646\u064B\u0627",
        "+yW5B_t_y0WCi_b05mH8Ng#ValueExpression.-275471095.1": "\u0644\u0642\u062F \u0648\u0635\u0644\u062A \u0625\u0644\u0649 \u0627\u0644\u062D\u062F \u0627\u0644\u064A\u0648\u0645\u064A \u0645\u0646",
        "+yW5B_t_y0WCi_b05mH8Ng#ValueExpression.899731302.1": "\u0627\u0644\u062A\u062D\u0648\u064A\u0644\u0627\u062A.",
        "DP_FIdPg5kmb2_OM82XDLQ#ValueExpression.-967763841.1": "\u062A\u0645 \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u062D\u062F \u0627\u0644\u062A\u062D\u0648\u064A\u0644 \u0627\u0644\u064A\u0648\u0645\u064A",
        "ZW+0nxqEjUSm8rXXODQXzQ#Value": "\u0633\u062D\u0628",
        "Rf3J5j49wUCNc_Bd36u5Jg#Value": "\u062A\u062D\u0648\u064A\u0644",
        "PmOVzNYSM0O7joYyvMkJXQ#Value": "\u0625\u064A\u062F\u0627\u0639",
        "zpqaQjHtSEiYg0AqhXgzBQ#Value": "+",
        "5dXzZ2FyUUaKz9KlYjC70g#Value.96619420.1": "\u0628\u0631\u064A\u062F \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A"
    },
    wt = {
        "ar-001": {
            translations: Lt,
            isRTL: !0
        }
    };

function et(b, _, s) {
    var e, t, r;
    (e = window.wallet_details) != null && e.promises && ((r = (t = window.wallet_details) == null ? void 0 : t.promises) == null || r.forEach(n => n == null ? void 0 : n.cancel()))
}
u(et, "default");

function tt(b, _, s) {
    let e = createCancellablePromise(b.GetWalletList()),
        t = createCancellablePromise(b.GetKYCStatus()),
        r = createCancellablePromise(b.GetClientSystemStatus()),
        n = createCancellablePromise(b.GetAccountList()),
        i = createCancellablePromise(b.GetWalletLimit());
    window.wallet_details = {
        promises: [e, t, r, n, i]
    }, Promise.all([e.promise, r.promise, n.promise, i.promise]).then(b.CheckTransferPossibility), Promise.all([e.promise, r.promise, i.promise]).then(b.CheckWithdrawalPossibility), Promise.all([t.promise, r.promise]).then(b.CheckDepositPossibility, b.CheckDepositPossibility)
}
u(tt, "default");

function rt(b, _, s) {
    sessionStorage.setItem("previousUrl", window.location.href)
}
u(rt, "default");

function it(b, _, s, e) {
    function t() {
        if (window.Intercom) {
            window.Intercom("show"), b.is_already_loaded = !0;
            return
        }
        b.is_already_loaded = !1
    }
    u(t, "showIntercom")
}
u(it, "default");
var a = L; {
    let _ = class _ extends a.Controller.BaseViewController {
        constructor(e, t, r) {
            super(e, t, r, wt);
            var n = this.controller;
            this.clientActionProxies = {
                getWalletList$Action: u(function() {
                    return n.executeActionInsideJSNode(n._getWalletList$Action.bind(n), n.callContext(), function(i) {
                        return {}
                    }, function() {}, "GetWalletList")
                }, "getWalletList$Action"),
                getKYCStatus$Action: u(function() {
                    return n.executeActionInsideJSNode(n._getKYCStatus$Action.bind(n), n.callContext(), function(i) {
                        return {}
                    }, function() {}, "GetKYCStatus")
                }, "getKYCStatus$Action"),
                getClientSystemStatus$Action: u(function() {
                    return n.executeActionInsideJSNode(n._getClientSystemStatus$Action.bind(n), n.callContext(), function(i) {
                        return {}
                    }, function() {}, "GetClientSystemStatus")
                }, "getClientSystemStatus$Action"),
                getAccountList$Action: u(function() {
                    return n.executeActionInsideJSNode(n._getAccountList$Action.bind(n), n.callContext(), function(i) {
                        return {}
                    }, function() {}, "GetAccountList")
                }, "getAccountList$Action"),
                getWalletLimit$Action: u(function() {
                    return n.executeActionInsideJSNode(n._getWalletLimit$Action.bind(n), n.callContext(), function(i) {
                        return {}
                    }, function() {}, "GetWalletLimit")
                }, "getWalletLimit$Action"),
                checkTransferPossibility$Action: u(function() {
                    return n.executeActionInsideJSNode(n._checkTransferPossibility$Action.bind(n), n.callContext(), function(i) {
                        return {}
                    }, function() {}, "CheckTransferPossibility")
                }, "checkTransferPossibility$Action"),
                checkWithdrawalPossibility$Action: u(function() {
                    return n.executeActionInsideJSNode(n._checkWithdrawalPossibility$Action.bind(n), n.callContext(), function(i) {
                        return {}
                    }, function() {}, "CheckWithdrawalPossibility")
                }, "checkWithdrawalPossibility$Action"),
                checkDepositPossibility$Action: u(function() {
                    return n.executeActionInsideJSNode(n._checkDepositPossibility$Action.bind(n), n.callContext(), function(i) {
                        return {}
                    }, function() {}, "CheckDepositPossibility")
                }, "checkDepositPossibility$Action")
            }, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get postReauthenticate$ServerAction() {
            return this.hasOwnProperty("_postReauthenticate$ServerAction") || (this._postReauthenticate$ServerAction = function(e, t, r) {
                var n = this.controller;
                return a.Logger.startActiveSpan("PostReauthenticate", function(i) {
                    return i && (i.setAttribute("code.function", "PostReauthenticate"), i.setAttribute("outsystems.function.key", "5e977e4b-8319-4ac8-9d22-8d42df2cae9e"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), a.Flow.tryFinally(function() {
                        var c = {
                            Authorization: a.DataConversion.ServerDataConverter.to(e, a.DataTypes.DataTypes.Text),
                            Request: a.DataConversion.ServerDataConverter.to(t, a.DataTypes.DataTypes.Record)
                        };
                        return n.callServerAction("PostReauthenticate", "screenservices/uae/CashierFlow/WalletDetailsBlock/ActionPostReauthenticate", "S69aQEfUk0OI0ZMkCVpxSA", c, n.callContext(r), void 0, void 0, !0).then(function(g) {
                            var o = new(n.constructor.getVariableGroupType("uae.CashierFlow.WalletDetailsBlock$ActionPostReauthenticate"));
                            return o.responseOut = a.DataConversion.ServerDataConverter.from(g.Response, de), o
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
        get getWalletLimit$ServerAction() {
            return this.hasOwnProperty("_getWalletLimit$ServerAction") || (this._getWalletLimit$ServerAction = function(e, t) {
                var r = this.controller;
                return a.Logger.startActiveSpan("GetWalletLimit", function(n) {
                    return n && (n.setAttribute("code.function", "GetWalletLimit"), n.setAttribute("outsystems.function.key", "25c0f741-490f-4fb7-a385-d1ebb95e145f"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), a.Flow.tryFinally(function() {
                        var i = {
                            Authorization: a.DataConversion.ServerDataConverter.to(e, a.DataTypes.DataTypes.Text)
                        };
                        return r.callServerAction("GetWalletLimit", "screenservices/uae/CashierFlow/WalletDetailsBlock/ActionGetWalletLimit", "lRu4FDXWyMe0qqTgp2XVJg", i, r.callContext(t), void 0, void 0, !0).then(function(c) {
                            var g = new(r.constructor.getVariableGroupType("uae.CashierFlow.WalletDetailsBlock$ActionGetWalletLimit"));
                            return g.responseOut = a.DataConversion.ServerDataConverter.from(c.Response, ge), g
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 0)
            }), this._getWalletLimit$ServerAction
        }
        set getWalletLimit$ServerAction(e) {
            this._getWalletLimit$ServerAction = e
        }
        get getAccounts$ServerAction() {
            return this.hasOwnProperty("_getAccounts$ServerAction") || (this._getAccounts$ServerAction = function(e, t, r, n, i) {
                var c = this.controller;
                return a.Logger.startActiveSpan("GetAccounts", function(g) {
                    return g && (g.setAttribute("code.function", "GetAccounts"), g.setAttribute("outsystems.function.key", "9a67846a-fd6e-4da7-9b7f-473202634306"), g.setAttribute("outsystems.function.owner.name", "uae"), g.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), g.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), a.Flow.tryFinally(function() {
                        var o = {
                            authorization: a.DataConversion.ServerDataConverter.to(e, a.DataTypes.DataTypes.Text),
                            with_balance: a.DataConversion.ServerDataConverter.to(t, a.DataTypes.DataTypes.Text),
                            real_only: a.DataConversion.ServerDataConverter.to(r, a.DataTypes.DataTypes.Text),
                            force_api_fetch: a.DataConversion.ServerDataConverter.to(n, a.DataTypes.DataTypes.Text)
                        };
                        return c.callServerAction("GetAccounts", "screenservices/uae/CashierFlow/WalletDetailsBlock/ActionGetAccounts", "02fkJ+ShY4j2DDsRxspdlw", o, c.callContext(i), void 0, void 0, !0).then(function(A) {
                            var p = new(c.constructor.getVariableGroupType("uae.CashierFlow.WalletDetailsBlock$ActionGetAccounts"));
                            return p.responseOut = a.DataConversion.ServerDataConverter.from(A.Response, ye), p
                        })
                    }, function() {
                        g && g.end()
                    })
                }, 0)
            }), this._getAccounts$ServerAction
        }
        set getAccounts$ServerAction(e) {
            this._getAccounts$ServerAction = e
        }
        get getClientSystemStatus$ServerAction() {
            return this.hasOwnProperty("_getClientSystemStatus$ServerAction") || (this._getClientSystemStatus$ServerAction = function(e, t) {
                var r = this.controller;
                return a.Logger.startActiveSpan("GetClientSystemStatus", function(n) {
                    return n && (n.setAttribute("code.function", "GetClientSystemStatus"), n.setAttribute("outsystems.function.key", "06dbe2fa-ebd1-4c3f-b79f-84df6382e164"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), a.Flow.tryFinally(function() {
                        var i = {
                            Authorization: a.DataConversion.ServerDataConverter.to(e, a.DataTypes.DataTypes.Text)
                        };
                        return r.callServerAction("GetClientSystemStatus", "screenservices/uae/CashierFlow/WalletDetailsBlock/ActionGetClientSystemStatus", "Jdkva4XPe6ENNelhARSpBg", i, r.callContext(t), void 0, void 0, !0).then(function(c) {
                            var g = new(r.constructor.getVariableGroupType("uae.CashierFlow.WalletDetailsBlock$ActionGetClientSystemStatus"));
                            return g.responseOut = a.DataConversion.ServerDataConverter.from(c.Response, U), g
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 0)
            }), this._getClientSystemStatus$ServerAction
        }
        set getClientSystemStatus$ServerAction(e) {
            this._getClientSystemStatus$ServerAction = e
        }
        get getWalletList$ServerAction() {
            return this.hasOwnProperty("_getWalletList$ServerAction") || (this._getWalletList$ServerAction = function(e, t) {
                var r = this.controller;
                return a.Logger.startActiveSpan("GetWalletList", function(n) {
                    return n && (n.setAttribute("code.function", "GetWalletList"), n.setAttribute("outsystems.function.key", "457611d5-9b1a-4faf-a88a-d21184a30f68"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), a.Flow.tryFinally(function() {
                        var i = {
                            authorization: a.DataConversion.ServerDataConverter.to(e, a.DataTypes.DataTypes.Text)
                        };
                        return r.callServerAction("GetWalletList", "screenservices/uae/CashierFlow/WalletDetailsBlock/ActionGetWalletList", "mBL53KMNBzvxE1nMqxclWg", i, r.callContext(t), void 0, void 0, !0).then(function(c) {
                            var g = new(r.constructor.getVariableGroupType("uae.CashierFlow.WalletDetailsBlock$ActionGetWalletList"));
                            return g.responseOut = a.DataConversion.ServerDataConverter.from(c.Response, ue), g
                        })
                    }, function() {
                        n && n.end()
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
        get _sendCode$Action() {
            return this.hasOwnProperty("__sendCode$Action") || (this.__sendCode$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    n = this.idService;
                return a.Logger.startActiveSpan("SendCode", function(i) {
                    return i && (i.setAttribute("code.function", "SendCode"), i.setAttribute("outsystems.function.key", "00a82b00-b794-419a-9c11-768e74b24a5a"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                        r.ensureControllerAlive("SendCode"), e = r.callContext(e);
                        var c = new a.DataTypes.VariableHolder(new a.DataTypes.ErrorHandlerOutputType),
                            g = new a.DataTypes.VariableHolder,
                            o = new a.DataTypes.VariableHolder,
                            A = new a.DataTypes.VariableHolder;
                        return a.Flow.executeAsyncFlow(function() {
                            return A.value = T.getUserMetaData$Action(e), t.variables.user_metadataVar = A.value.userMetadataOut, o.value = T.getAuth$Action(e), t.flush(), r.postReauthenticate$ServerAction(o.value.tokenOut, (function() {
                                var p = new ut;
                                return p.emailAttr = k.getVerificationProvider() === "email" ? A.value.userMetadataOut.emailAttr : "", p.phoneAttr = k.getVerificationProvider() === "phone" ? A.value.userMetadataOut.phoneAttr !== a.BuiltinFunctions.nullTextIdentifier() && a.BuiltinFunctions.substr(A.value.userMetadataOut.phoneAttr, 0, 1) !== "+" ? "+" + A.value.userMetadataOut.phoneAttr : A.value.userMetadataOut.phoneAttr : "", p.otp_typeAttr = "withdrawal", p.preferred_languageAttr = a.BuiltinFunctions.toLower(T.languageMapper$Action(e).charCodeOut), p
                            })(), e).then(function(p) {
                                g.value = p
                            }).then(function() {
                                return a.Flow.executeSequence(function() {
                                    return g.value.responseOut.errorsAttr.isEmpty ? a.Flow.returnAsync(a.Navigation.navigateTo(a.Navigation.generateScreenURL("uae", "withdraw", {
                                        wallet_id: a.DataConversion.ServerDataConverter.to(a.BuiltinFunctions.longIntegerToText(t.variables.walletVar.idAttr), a.DataTypes.DataTypes.Text)
                                    }), a.Transitions.createTransition(a.Transitions.TransitionAnimation.Default), e, !0)) : (t.variables.is_withdrawal_clickedVar = !1, t.variables.showRateLimitPopupVar = g.value.responseOut.errorsAttr.getCurrent(e.iterationContext).codeAttr === "RateLimit", a.Flow.executeSequence(function() {
                                        if (g.value.responseOut.errorsAttr.getCurrent(e.iterationContext).codeAttr !== "RateLimit") return a.Flow.executeSequence(function() {
                                            if ((T.getFeatureFlag$Action("Email", e).shouldEnableOut || T.getFeatureFlag$Action("PhoneNumber", e).shouldEnableOut) && (g.value.responseOut.errorsAttr.getCurrent(e.iterationContext).codeAttr === "PHONE_CONFIRMATION_COOLDOWN" || g.value.responseOut.errorsAttr.getCurrent(e.iterationContext).codeAttr === "EMAIL_CONFIRMATION_COOLDOWN")) return t.variables.is_withdrawal_pausedVar = !0, t.variables.withdrawal_pause_typeVar = g.value.responseOut.errorsAttr.getCurrent(e.iterationContext).codeAttr === "EMAIL_CONFIRMATION_COOLDOWN" ? a.Injector.resolve(a.ServiceNames.TranslationsService).getMessage("5dXzZ2FyUUaKz9KlYjC70g#Value.96619420.1", "email") : "phone", t.variables.withdrawal_cooloffVar = g.value.responseOut.errorsAttr.getCurrent(e.iterationContext).time_leftAttr, r.hidePanelEvent$Action(!0, e);
                                            a.FeedbackMessageService.showFeedbackMessage(g.value.responseOut.errorsAttr.getCurrent(e.iterationContext).messageAttr, 3)
                                        })
                                    }))
                                })
                            })
                        }).catch(function(p) {
                            if (a.Logger.debug("WalletDetailsBlock.SendCode", a.Exceptions.getMessage(p)), !a.Exceptions.isSystem(p)) return a.Logger.error(null, p, null, null, 1), c.value.exceptionMessageAttr = a.Exceptions.getMessage(p), a.Logger.startActiveSpan("AllExceptions", function(m) {
                                return m && (m.setAttribute("code.function", "AllExceptions"), m.setAttribute("outsystems.function.key", "9296449e-29a2-460a-b87d-90a92dc96e89"), m.setAttribute("outsystems.function.owner.name", "uae"), m.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), m.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), a.Flow.tryFinally(function() {
                                    return a.Flow.executeAsyncFlow(function() {
                                        return t.variables.is_withdrawal_clickedVar = !1, a.FeedbackMessageService.showFeedbackMessage(c.value.exceptionMessageAttr, 3), a.Flow.returnAsync()
                                    })
                                }, function() {
                                    m && m.end()
                                })
                            }, 1);
                            throw p
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__sendCode$Action
        }
        set _sendCode$Action(e) {
            this.__sendCode$Action = e
        }
        get _getKYCStatus$Action() {
            return this.hasOwnProperty("__getKYCStatus$Action") || (this.__getKYCStatus$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    n = this.idService;
                return a.Logger.startActiveSpan("GetKYCStatus", function(i) {
                    return i && (i.setAttribute("code.function", "GetKYCStatus"), i.setAttribute("outsystems.function.key", "017529f6-a0d2-45c5-9b44-61cad9853972"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                        r.ensureControllerAlive("GetKYCStatus"), e = r.callContext(e);
                        var c = new a.DataTypes.VariableHolder,
                            g = new a.DataTypes.VariableHolder;
                        return a.Flow.executeAsyncFlow(function() {
                            return c.value = T.getAuth$Action(e), t.flush(), T.getUserKYCStatus$Action(e).then(function(o) {
                                g.value = o
                            }).then(function() {
                                return a.Flow.executeSequence(function() {
                                    if (!(g.value.responseOut.dataAttr.detailsAttr.poiAttr.has_remaining_attemptsAttr && g.value.responseOut.dataAttr.detailsAttr.poaAttr.has_remaining_attemptsAttr && g.value.responseOut.dataAttr.detailsAttr.poiAttr.statusAttr !== "rejected" && g.value.responseOut.dataAttr.detailsAttr.poaAttr.statusAttr !== "rejected")) return t.flush(), T.initalizeIntercom$Action(e)
                                })
                            }).then(function() {
                                t.variables.kYCResponseVar = g.value.responseOut.dataAttr
                            })
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__getKYCStatus$Action
        }
        set _getKYCStatus$Action(e) {
            this.__getKYCStatus$Action = e
        }
        get _onClickOkWithdrawalPaused$Action() {
            return this.hasOwnProperty("__onClickOkWithdrawalPaused$Action") || (this.__onClickOkWithdrawalPaused$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    n = this.idService;
                return a.Logger.startActiveSpan("OnClickOkWithdrawalPaused", function(i) {
                    return i && (i.setAttribute("code.function", "OnClickOkWithdrawalPaused"), i.setAttribute("outsystems.function.key", "0ccc771b-c20d-4eea-8893-0c326cd8bcaa"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                        return r.ensureControllerAlive("OnClickOkWithdrawalPaused"), e = r.callContext(e), a.Flow.executeAsyncFlow(function() {
                            return t.variables.is_withdrawal_pausedVar = !1, r.hidePanelEvent$Action(!1, e)
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__onClickOkWithdrawalPaused$Action
        }
        set _onClickOkWithdrawalPaused$Action(e) {
            this.__onClickOkWithdrawalPaused$Action = e
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    n = this.idService;
                return a.Logger.startActiveSpan("OnDestroy", function(i) {
                    i && (i.setAttribute("code.function", "OnDestroy"), i.setAttribute("outsystems.function.key", "1622965d-b95f-4f8c-9f5e-2fa3c20ab990"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnDestroy"), e = r.callContext(e), a.Logger.startActiveSpan("CancelPromises", function(c) {
                            c && (c.setAttribute("code.function", "CancelPromises"), c.setAttribute("outsystems.function.key", "d8dd3bd3-cc1d-4e59-b948-eb0a0f24c531"), c.setAttribute("outsystems.function.owner.name", "uae"), c.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return r.safeExecuteJSNode(et, "CancelPromises", "OnDestroy", null, function(g) {}, {}, {})
                            } finally {
                                c && c.end()
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
        get _getWalletLimit$Action() {
            return this.hasOwnProperty("__getWalletLimit$Action") || (this.__getWalletLimit$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    n = this.idService;
                return a.Logger.startActiveSpan("GetWalletLimit", function(i) {
                    return i && (i.setAttribute("code.function", "GetWalletLimit"), i.setAttribute("outsystems.function.key", "33bc44d2-07dd-4725-903b-97d03022d0a7"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                        r.ensureControllerAlive("GetWalletLimit"), e = r.callContext(e);
                        var c = new a.DataTypes.VariableHolder,
                            g = new a.DataTypes.VariableHolder;
                        return a.Flow.executeAsyncFlow(function() {
                            return g.value = T.getAuth$Action(e), t.flush(), r.getWalletLimit$ServerAction(g.value.tokenOut, e).then(function(o) {
                                c.value = o
                            }).then(function() {
                                c.value.responseOut.dataAttr.length > 0 && (t.variables.wallet_limitVar = c.value.responseOut.dataAttr.getCurrent(e.iterationContext))
                            })
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__getWalletLimit$Action
        }
        set _getWalletLimit$Action(e) {
            this.__getWalletLimit$Action = e
        }
        get _getAccountList$Action() {
            return this.hasOwnProperty("__getAccountList$Action") || (this.__getAccountList$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    n = this.idService;
                return a.Logger.startActiveSpan("GetAccountList", function(i) {
                    return i && (i.setAttribute("code.function", "GetAccountList"), i.setAttribute("outsystems.function.key", "4009f67f-a311-4020-b5bc-b3f1c87f74eb"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                        r.ensureControllerAlive("GetAccountList"), e = r.callContext(e);
                        var c = new a.DataTypes.VariableHolder,
                            g = new a.DataTypes.VariableHolder,
                            o = new a.DataTypes.VariableHolder;
                        return a.Flow.executeAsyncFlow(function() {
                            return g.value = T.getAuth$Action(e), t.flush(), r.getAccounts$ServerAction(g.value.tokenOut, "true", "true", "true", e).then(function(A) {
                                c.value = A
                            }).then(function() {
                                T.updateAccountListCache$Action(c.value.responseOut.dataAttr, e), o.value = a.SystemActions.listFilter(c.value.responseOut.dataAttr, function(A) {
                                    return A.platformAttr.platform_typeAttr === "real"
                                }, e), t.variables.account_listVar = o.value.filteredListOut
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
        get _cancelOnClick$Action() {
            return this.hasOwnProperty("__cancelOnClick$Action") || (this.__cancelOnClick$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    n = this.idService;
                return a.Logger.startActiveSpan("CancelOnClick", function(i) {
                    i && (i.setAttribute("code.function", "CancelOnClick"), i.setAttribute("outsystems.function.key", "4c33f508-0557-4776-8153-20049da621db"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("CancelOnClick"), e = r.callContext(e), t.variables.show_kyc_verification_popupVar = !1
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__cancelOnClick$Action
        }
        set _cancelOnClick$Action(e) {
            this.__cancelOnClick$Action = e
        }
        get _viewStatusOnClick$Action() {
            return this.hasOwnProperty("__viewStatusOnClick$Action") || (this.__viewStatusOnClick$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    n = this.idService;
                return a.Logger.startActiveSpan("ViewStatusOnClick", function(i) {
                    i && (i.setAttribute("code.function", "ViewStatusOnClick"), i.setAttribute("outsystems.function.key", "589e3243-0e7a-4692-beb6-e93e62e21144"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return r.ensureControllerAlive("ViewStatusOnClick"), e = r.callContext(e), k.setkyc_flow_from("wallet"), a.Navigation.navigateTo(a.Navigation.generateScreenURL("uae", "identity-verification-status", {}), a.Transitions.createTransition(a.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__viewStatusOnClick$Action
        }
        set _viewStatusOnClick$Action(e) {
            this.__viewStatusOnClick$Action = e
        }
        get _testOnClickDeposit$Action() {
            return this.hasOwnProperty("__testOnClickDeposit$Action") || (this.__testOnClickDeposit$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    n = this.idService;
                return a.Logger.startActiveSpan("TestOnClickDeposit", function(i) {
                    i && (i.setAttribute("code.function", "TestOnClickDeposit"), i.setAttribute("outsystems.function.key", "6ae53c46-b1a6-46e4-9162-8536b01e7f6d"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        if (r.ensureControllerAlive("TestOnClickDeposit"), e = r.callContext(e), t.variables.is_deposit_enabledVar) {
                            if (t.variables.clientSystemStatusVar.dataAttr.getCurrent(e.iterationContext).statusAttr.codeAttr !== "enabled" && t.variables.kYCResponseVar.statusAttr !== "verified" && t.variables.kYCResponseVar.detailsAttr.hasMoreAttemptsAttr === !1) {
                                t.variables.show_kyc_verification_popupVar = !0;
                                return
                            }
                            if (T.consoleLog$Action("feature flag", e), t.variables.kYCResponseVar.detailsAttr.poiAttr.statusAttr === "verified" && t.variables.kYCResponseVar.detailsAttr.poaAttr.statusAttr === "verified") return a.Navigation.navigateTo(a.Navigation.generateScreenURL("uae", "deposit", {
                                wallet_id: a.DataConversion.ServerDataConverter.to(a.BuiltinFunctions.longIntegerToText(t.variables.wallet_listVar.getCurrent(e.iterationContext).idAttr), a.DataTypes.DataTypes.Text)
                            }), a.Transitions.createTransition(a.Transitions.TransitionAnimation.Default), e, !0);
                            if (t.variables.kYCResponseVar.detailsAttr.poiAttr.statusAttr === "unverified" && t.variables.kYCResponseVar.detailsAttr.poaAttr.statusAttr === "unverified") return k.setkyc_flow_from("banner_add_funds"), a.Navigation.navigateTo(a.Navigation.generateScreenURL("uae", "verify-your-identity", {
                                from: a.DataConversion.ServerDataConverter.to("wallet", a.DataTypes.DataTypes.Text)
                            }), a.Transitions.createTransition(a.Transitions.TransitionAnimation.Default), e, !0);
                            t.variables.show_kyc_verification_popupVar = !0
                        }
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__testOnClickDeposit$Action
        }
        set _testOnClickDeposit$Action(e) {
            this.__testOnClickDeposit$Action = e
        }
        get _retakeAssessmentOnClick$Action() {
            return this.hasOwnProperty("__retakeAssessmentOnClick$Action") || (this.__retakeAssessmentOnClick$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    n = this.idService;
                return a.Logger.startActiveSpan("RetakeAssessmentOnClick", function(i) {
                    i && (i.setAttribute("code.function", "RetakeAssessmentOnClick"), i.setAttribute("outsystems.function.key", "75d78701-a4ed-4556-bc4b-1dc4e121447d"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return r.ensureControllerAlive("RetakeAssessmentOnClick"), e = r.callContext(e), r._cancelOnClick$Action(e), a.Navigation.navigateTo(a.Navigation.generateScreenURL("uae", "retake-assessment", {
                            from: a.DataConversion.ServerDataConverter.to("wallet", a.DataTypes.DataTypes.Text)
                        }), a.Transitions.createTransition(a.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__retakeAssessmentOnClick$Action
        }
        set _retakeAssessmentOnClick$Action(e) {
            this.__retakeAssessmentOnClick$Action = e
        }
        get _onClickTransfer$Action() {
            return this.hasOwnProperty("__onClickTransfer$Action") || (this.__onClickTransfer$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    n = this.idService;
                return a.Logger.startActiveSpan("OnClickTransfer", function(i) {
                    i && (i.setAttribute("code.function", "OnClickTransfer"), i.setAttribute("outsystems.function.key", "7c073647-f0f4-47f9-b7ba-87c27be8f81c"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        if (r.ensureControllerAlive("OnClickTransfer"), e = r.callContext(e), t.variables.wallet_limitVar.transferAttr.allowedAttr) {
                            if (t.variables.is_transfer_enabledVar) return a.Navigation.navigateTo(a.Navigation.generateScreenURL("uae", "select-transfer-direction", {
                                wallet_id: a.DataConversion.ServerDataConverter.to(t.variables.walletVar.idAttr, a.DataTypes.DataTypes.LongInteger)
                            }), a.Transitions.createTransition(a.Transitions.TransitionAnimation.Default), e, !0)
                        } else t.variables.show_transfer_limit_popupVar = !0
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onClickTransfer$Action
        }
        set _onClickTransfer$Action(e) {
            this.__onClickTransfer$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    n = this.idService;
                return a.Logger.startActiveSpan("OnReady", function(i) {
                    i && (i.setAttribute("code.function", "OnReady"), i.setAttribute("outsystems.function.key", "875f797a-19b9-40eb-8ea6-a8157f452571"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnReady"), e = r.callContext(e), t.variables.is_transfer_enabledVar = !1, t.variables.is_withdrawal_enabledVar = !1, t.variables.is_deposit_enabledVar = !1, t.variables.show_kyc_verification_popupVar = !1, t.variables.is_wallet_loadingVar = !0, a.Logger.startActiveSpan("ParallelCalls", function(c) {
                            c && (c.setAttribute("code.function", "ParallelCalls"), c.setAttribute("outsystems.function.key", "01a9a4fc-cfe6-4ea4-8c0f-3005ff56770a"), c.setAttribute("outsystems.function.owner.name", "uae"), c.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return r.safeExecuteJSNode(tt, "ParallelCalls", "OnReady", null, function(g) {}, {
                                    GetWalletList: r.clientActionProxies.getWalletList$Action,
                                    GetKYCStatus: r.clientActionProxies.getKYCStatus$Action,
                                    GetClientSystemStatus: r.clientActionProxies.getClientSystemStatus$Action,
                                    GetAccountList: r.clientActionProxies.getAccountList$Action,
                                    GetWalletLimit: r.clientActionProxies.getWalletLimit$Action,
                                    CheckTransferPossibility: r.clientActionProxies.checkTransferPossibility$Action,
                                    CheckWithdrawalPossibility: r.clientActionProxies.checkWithdrawalPossibility$Action,
                                    CheckDepositPossibility: r.clientActionProxies.checkDepositPossibility$Action
                                }, {})
                            } finally {
                                c && c.end()
                            }
                        }, 1)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _onClickWithdraw$Action() {
            return this.hasOwnProperty("__onClickWithdraw$Action") || (this.__onClickWithdraw$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    n = this.idService;
                return a.Logger.startActiveSpan("OnClickWithdraw", function(i) {
                    return i && (i.setAttribute("code.function", "OnClickWithdraw"), i.setAttribute("outsystems.function.key", "877ae6f8-fa78-4fc2-854f-36ca04f6265c"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                        return r.ensureControllerAlive("OnClickWithdraw"), e = r.callContext(e), a.Flow.executeAsyncFlow(function() {
                            return t.variables.is_withdrawal_clickedVar = !0, a.Flow.executeSequence(function() {
                                if (t.variables.walletVar.balanceAttr.gt(a.BuiltinFunctions.integerToDecimal(0))) return a.Flow.executeSequence(function() {
                                    if (t.variables.wallet_limitVar.withdrawalAttr.allowedAttr) return a.Flow.executeSequence(function() {
                                        if (t.variables.is_withdrawal_enabledVar) return T.updateWithdrawWallet$Action(t.variables.walletVar, e), a.Logger.startActiveSpan("JavaScript1", function(c) {
                                            c && (c.setAttribute("code.function", "JavaScript1"), c.setAttribute("outsystems.function.key", "1dbb57e3-86d7-4afd-ac35-d9aa571d183f"), c.setAttribute("outsystems.function.owner.name", "uae"), c.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                            try {
                                                return r.safeExecuteJSNode(rt, "JavaScript1", "OnClickWithdraw", null, function(g) {}, {}, {})
                                            } finally {
                                                c && c.end()
                                            }
                                        }, 1), k.setCode(a.BuiltinFunctions.nullTextIdentifier()), k.setVerificationProvider(k.getProvider()), r._sendCode$Action(e);
                                        t.variables.is_withdrawal_clickedVar = !1
                                    });
                                    t.variables.show_withdrawal_limit_popupVar = !0, t.variables.is_withdrawal_clickedVar = !1
                                });
                                t.variables.is_withdrawal_clickedVar = !1
                            })
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__onClickWithdraw$Action
        }
        set _onClickWithdraw$Action(e) {
            this.__onClickWithdraw$Action = e
        }
        get _hideLimitWarnings$Action() {
            return this.hasOwnProperty("__hideLimitWarnings$Action") || (this.__hideLimitWarnings$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    n = this.idService;
                return a.Logger.startActiveSpan("HideLimitWarnings", function(i) {
                    i && (i.setAttribute("code.function", "HideLimitWarnings"), i.setAttribute("outsystems.function.key", "8874f0b2-399d-4d26-86b9-5f2ef2bf3bae"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("HideLimitWarnings"), e = r.callContext(e), t.variables.show_transfer_limit_popupVar = !1, t.variables.show_withdrawal_limit_popupVar = !1
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__hideLimitWarnings$Action
        }
        set _hideLimitWarnings$Action(e) {
            this.__hideLimitWarnings$Action = e
        }
        get _rateLimitPopupButtonClick$Action() {
            return this.hasOwnProperty("__rateLimitPopupButtonClick$Action") || (this.__rateLimitPopupButtonClick$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    n = this.idService;
                return a.Logger.startActiveSpan("RateLimitPopupButtonClick", function(i) {
                    i && (i.setAttribute("code.function", "RateLimitPopupButtonClick"), i.setAttribute("outsystems.function.key", "9b2717b2-c27f-4822-9e71-d034e8db070a"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("RateLimitPopupButtonClick"), e = r.callContext(e), t.variables.showRateLimitPopupVar = !1
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__rateLimitPopupButtonClick$Action
        }
        set _rateLimitPopupButtonClick$Action(e) {
            this.__rateLimitPopupButtonClick$Action = e
        }
        get _getClientSystemStatus$Action() {
            return this.hasOwnProperty("__getClientSystemStatus$Action") || (this.__getClientSystemStatus$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    n = this.idService;
                return a.Logger.startActiveSpan("GetClientSystemStatus", function(i) {
                    return i && (i.setAttribute("code.function", "GetClientSystemStatus"), i.setAttribute("outsystems.function.key", "b204d5c8-eb7d-4b16-8df6-b5d9b264a370"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                        r.ensureControllerAlive("GetClientSystemStatus"), e = r.callContext(e);
                        var c = new a.DataTypes.VariableHolder,
                            g = new a.DataTypes.VariableHolder;
                        return a.Flow.executeAsyncFlow(function() {
                            return g.value = T.getAuth$Action(e), t.flush(), r.getClientSystemStatus$ServerAction(g.value.tokenOut, e).then(function(o) {
                                c.value = o
                            }).then(function() {
                                t.variables.clientSystemStatusVar = c.value.responseOut
                            })
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__getClientSystemStatus$Action
        }
        set _getClientSystemStatus$Action(e) {
            this.__getClientSystemStatus$Action = e
        }
        get _checkDepositPossibility$Action() {
            return this.hasOwnProperty("__checkDepositPossibility$Action") || (this.__checkDepositPossibility$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    n = this.idService;
                return a.Logger.startActiveSpan("CheckDepositPossibility", function(i) {
                    i && (i.setAttribute("code.function", "CheckDepositPossibility"), i.setAttribute("outsystems.function.key", "bfad1e07-ac9a-426f-a390-9fcf1acd1dc7"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("CheckDepositPossibility"), e = r.callContext(e), t.variables.is_deposit_enabledVar = !0
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__checkDepositPossibility$Action
        }
        set _checkDepositPossibility$Action(e) {
            this.__checkDepositPossibility$Action = e
        }
        get _checkTransferPossibility$Action() {
            return this.hasOwnProperty("__checkTransferPossibility$Action") || (this.__checkTransferPossibility$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    n = this.idService;
                return a.Logger.startActiveSpan("CheckTransferPossibility", function(i) {
                    i && (i.setAttribute("code.function", "CheckTransferPossibility"), i.setAttribute("outsystems.function.key", "c9c414ca-9e3a-49bd-b650-e3b3b4f300ea"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("CheckTransferPossibility"), e = r.callContext(e), t.variables.clientSystemStatusVar.dataAttr.getItem(0).limitsAttr.dailyAttr.internal_transferAttr.wallet_to_tradingAttr.gt(a.BuiltinFunctions.integerToLongInteger(0)) && (t.variables.is_transfer_enabledVar = t.variables.account_listVar.length > 0)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__checkTransferPossibility$Action
        }
        set _checkTransferPossibility$Action(e) {
            this.__checkTransferPossibility$Action = e
        }
        get _closeLimitPopup$Action() {
            return this.hasOwnProperty("__closeLimitPopup$Action") || (this.__closeLimitPopup$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    n = this.idService;
                return a.Logger.startActiveSpan("CloseLimitPopup", function(i) {
                    i && (i.setAttribute("code.function", "CloseLimitPopup"), i.setAttribute("outsystems.function.key", "db8559b0-5d89-42a4-9878-2e8501cf9ae5"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("CloseLimitPopup"), e = r.callContext(e), t.variables.show_limit_popupVar = !1
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__closeLimitPopup$Action
        }
        set _closeLimitPopup$Action(e) {
            this.__closeLimitPopup$Action = e
        }
        get _onClickDeposit$Action() {
            return this.hasOwnProperty("__onClickDeposit$Action") || (this.__onClickDeposit$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    n = this.idService;
                return a.Logger.startActiveSpan("OnClickDeposit", function(i) {
                    i && (i.setAttribute("code.function", "OnClickDeposit"), i.setAttribute("outsystems.function.key", "dd6b4fe7-79ee-49c6-b7bf-2a7d86d837df"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        if (r.ensureControllerAlive("OnClickDeposit"), e = r.callContext(e), k.getupdateKYCFlow()) r._testOnClickDeposit$Action(e);
                        else if (t.variables.is_deposit_enabledVar) {
                            if (t.variables.clientSystemStatusVar.dataAttr.getCurrent(e.iterationContext).statusAttr.codeAttr !== "enabled" && (t.variables.kYCResponseVar.detailsAttr.poiAttr.has_remaining_attemptsAttr !== !0 && t.variables.kYCResponseVar.detailsAttr.poiAttr.statusAttr !== "verified" || t.variables.kYCResponseVar.detailsAttr.poaAttr.has_remaining_attemptsAttr !== !0 && t.variables.kYCResponseVar.detailsAttr.poaAttr.statusAttr !== "verified") && !t.variables.wallet_listVar.isEmpty) {
                                t.variables.show_limit_popupVar = !0;
                                return
                            }
                            if (t.variables.clientSystemStatusVar.dataAttr.getCurrent(e.iterationContext).statusAttr.codeAttr === "cool_down") t.variables.show_kyc_verification_popupVar = !0;
                            else {
                                if (k.getenableUAEPass() && (t.variables.kYCResponseVar.statusAttr === "unverified" || t.variables.kYCResponseVar.statusAttr === "pending_poa") && t.variables.kYCResponseVar.detailsAttr.poiAttr.statusAttr === "verified" && t.variables.kYCResponseVar.detailsAttr.poaAttr.statusAttr === "unverified") return k.setkyc_flow_from("wallet"), a.Navigation.navigateTo(a.Navigation.generateScreenURL("uae", "verify-poa", {}), a.Transitions.createTransition(a.Transitions.TransitionAnimation.Default), e, !0);
                                if (t.variables.kYCResponseVar.statusAttr === "" || t.variables.kYCResponseVar.statusAttr === "unverified") return k.setkyc_flow_from("wallet"), k.getenableUAEPass() ? a.Navigation.navigateTo(a.Navigation.generateScreenURL("uae", "get-verified", {}), a.Transitions.createTransition(a.Transitions.TransitionAnimation.Default), e, !0) : a.Navigation.navigateTo(a.Navigation.generateScreenURL("uae", "verify-your-identity", {
                                    from: a.DataConversion.ServerDataConverter.to("wallet", a.DataTypes.DataTypes.Text)
                                }), a.Transitions.createTransition(a.Transitions.TransitionAnimation.Default), e, !0);
                                if (t.variables.clientSystemStatusVar.dataAttr.getCurrent(e.iterationContext).featuresAttr.accountAttr.can_depositAttr === !1) t.variables.show_kyc_verification_popupVar = !0;
                                else if (t.variables.kYCResponseVar.statusAttr === "pending" || t.variables.kYCResponseVar.statusAttr === "failed" || t.variables.kYCResponseVar.statusAttr === "rejected" || t.variables.kYCResponseVar.statusAttr === "pending_provider") t.variables.show_kyc_verification_popupVar = !0;
                                else return t.variables.kYCResponseVar.statusAttr === "pending_poa" ? (k.setkyc_flow_from("wallet"), a.Navigation.navigateTo(a.Navigation.generateScreenURL("uae", "verify-poa", {}), a.Transitions.createTransition(a.Transitions.TransitionAnimation.Default), e, !0)) : t.variables.kYCResponseVar.statusAttr === "pending_poi" ? (k.setkyc_flow_from("wallet"), a.Navigation.navigateTo(a.Navigation.generateScreenURL("uae", "verify-poi", {}), a.Transitions.createTransition(a.Transitions.TransitionAnimation.Default), e, !0)) : t.variables.kYCResponseVar.statusAttr === "verified" ? a.Navigation.navigateTo(a.Navigation.generateScreenURL("uae", "deposit", {
                                    wallet_id: a.DataConversion.ServerDataConverter.to(a.BuiltinFunctions.longIntegerToText(t.variables.walletVar.idAttr), a.DataTypes.DataTypes.Text)
                                }), a.Transitions.createTransition(a.Transitions.TransitionAnimation.Default), e, !0) : a.Navigation.navigateTo(a.Navigation.generateScreenURL("uae", "identity-verification-status", {}), a.Transitions.createTransition(a.Transitions.TransitionAnimation.Default), e, !0)
                            }
                        }
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onClickDeposit$Action
        }
        set _onClickDeposit$Action(e) {
            this.__onClickDeposit$Action = e
        }
        get _onLiveChatClick$Action() {
            return this.hasOwnProperty("__onLiveChatClick$Action") || (this.__onLiveChatClick$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    n = this.idService;
                return a.Logger.startActiveSpan("OnLiveChatClick", function(i) {
                    return i && (i.setAttribute("code.function", "OnLiveChatClick"), i.setAttribute("outsystems.function.key", "eb187669-1632-4831-9d6a-d1de0753c67b"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                        r.ensureControllerAlive("OnLiveChatClick"), e = r.callContext(e);
                        var c = new a.DataTypes.VariableHolder;
                        return a.Flow.executeAsyncFlow(function() {
                            return c.value = a.Logger.startActiveSpan("ShowIntercom", function(g) {
                                g && (g.setAttribute("code.function", "ShowIntercom"), g.setAttribute("outsystems.function.key", "73d68ea6-e963-4af9-85fb-4c7b89ae4d07"), g.setAttribute("outsystems.function.owner.name", "uae"), g.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), g.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return r.safeExecuteJSNode(it, "ShowIntercom", "OnLiveChatClick", {
                                        is_already_loaded: a.DataConversion.JSNodeParamConverter.to(!1, a.DataTypes.DataTypes.Boolean)
                                    }, function(o) {
                                        var A = new(r.constructor.getVariableGroupType("uae.CashierFlow.WalletDetailsBlock.OnLiveChatClick$showIntercomJSResult"));
                                        return A.is_already_loadedOut = a.DataConversion.JSNodeParamConverter.from(o.is_already_loaded, a.DataTypes.DataTypes.Boolean), A
                                    }, {}, {})
                                } finally {
                                    g && g.end()
                                }
                            }, 1), t.variables.show_limit_popupVar = !1, a.Flow.executeSequence(function() {
                                if (!c.value.is_already_loadedOut) return t.flush(), T.openIntercom$Action(e)
                            })
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__onLiveChatClick$Action
        }
        set _onLiveChatClick$Action(e) {
            this.__onLiveChatClick$Action = e
        }
        get _getWalletList$Action() {
            return this.hasOwnProperty("__getWalletList$Action") || (this.__getWalletList$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    n = this.idService;
                return a.Logger.startActiveSpan("GetWalletList", function(i) {
                    return i && (i.setAttribute("code.function", "GetWalletList"), i.setAttribute("outsystems.function.key", "efca7309-0288-415b-9b1f-a5c8187e8e2d"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                        r.ensureControllerAlive("GetWalletList"), e = r.callContext(e);
                        var c = new a.DataTypes.VariableHolder,
                            g = new a.DataTypes.VariableHolder;
                        return a.Flow.executeAsyncFlow(function() {
                            return g.value = T.getAuth$Action(e), t.variables.is_wallet_loadingVar = !0, t.flush(), r.getWalletList$ServerAction(g.value.tokenOut, e).then(function(o) {
                                c.value = o
                            }).then(function() {
                                if (c.value.responseOut.dataAttr.walletsAttr.length === 0) return a.Flow.returnAsync(a.Navigation.navigateTo(a.Navigation.generateScreenURL("uae", "currency-selection-wallets", {}), a.Transitions.createTransition(a.Transitions.TransitionAnimation.None), e, !0));
                                T.updateWalletListCache$Action(c.value.responseOut.dataAttr.walletsAttr, e), t.variables.wallet_listVar = c.value.responseOut.dataAttr.walletsAttr, t.variables.walletVar = t.variables.wallet_listVar.getItem(0), t.variables.is_wallet_loadingVar = !1
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
        get _checkWithdrawalPossibility$Action() {
            return this.hasOwnProperty("__checkWithdrawalPossibility$Action") || (this.__checkWithdrawalPossibility$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    n = this.idService;
                return a.Logger.startActiveSpan("CheckWithdrawalPossibility", function(i) {
                    i && (i.setAttribute("code.function", "CheckWithdrawalPossibility"), i.setAttribute("outsystems.function.key", "fc6a420d-96ad-42d8-88dd-f953243e9a8e"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("CheckWithdrawalPossibility"), e = r.callContext(e), t.variables.is_withdrawal_enabledVar = t.variables.clientSystemStatusVar.dataAttr.getCurrent(e.iterationContext).featuresAttr.accountAttr.can_withdrawAttr && t.variables.walletVar.balanceAttr.gt(a.BuiltinFunctions.integerToDecimal(0))
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__checkWithdrawalPossibility$Action
        }
        set _checkWithdrawalPossibility$Action(e) {
            this.__checkWithdrawalPossibility$Action = e
        }
        sendCode$Action(e) {
            var t = this.controller;
            return a.Logger.startActiveSpan("SendCode__proxy", function(r) {
                return r && (r.setAttribute("code.function", "SendCode"), r.setAttribute("outsystems.function.key", "00a82b00-b794-419a-9c11-768e74b24a5a"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._sendCode$Action, e)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        getKYCStatus$Action(e) {
            var t = this.controller;
            return a.Logger.startActiveSpan("GetKYCStatus__proxy", function(r) {
                return r && (r.setAttribute("code.function", "GetKYCStatus"), r.setAttribute("outsystems.function.key", "017529f6-a0d2-45c5-9b44-61cad9853972"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._getKYCStatus$Action, e)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        onClickOkWithdrawalPaused$Action(e) {
            var t = this.controller;
            return a.Logger.startActiveSpan("OnClickOkWithdrawalPaused__proxy", function(r) {
                return r && (r.setAttribute("code.function", "OnClickOkWithdrawalPaused"), r.setAttribute("outsystems.function.key", "0ccc771b-c20d-4eea-8893-0c326cd8bcaa"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._onClickOkWithdrawalPaused$Action, e)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        onDestroy$Action(e) {
            var t = this.controller;
            return a.Logger.startActiveSpan("OnDestroy__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnDestroy"), r.setAttribute("outsystems.function.key", "1622965d-b95f-4f8c-9f5e-2fa3c20ab990"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onDestroy$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        getWalletLimit$Action(e) {
            var t = this.controller;
            return a.Logger.startActiveSpan("GetWalletLimit__proxy", function(r) {
                return r && (r.setAttribute("code.function", "GetWalletLimit"), r.setAttribute("outsystems.function.key", "33bc44d2-07dd-4725-903b-97d03022d0a7"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._getWalletLimit$Action, e)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        getAccountList$Action(e) {
            var t = this.controller;
            return a.Logger.startActiveSpan("GetAccountList__proxy", function(r) {
                return r && (r.setAttribute("code.function", "GetAccountList"), r.setAttribute("outsystems.function.key", "4009f67f-a311-4020-b5bc-b3f1c87f74eb"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._getAccountList$Action, e)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        cancelOnClick$Action(e) {
            var t = this.controller;
            return a.Logger.startActiveSpan("CancelOnClick__proxy", function(r) {
                r && (r.setAttribute("code.function", "CancelOnClick"), r.setAttribute("outsystems.function.key", "4c33f508-0557-4776-8153-20049da621db"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._cancelOnClick$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        viewStatusOnClick$Action(e) {
            var t = this.controller;
            return a.Logger.startActiveSpan("ViewStatusOnClick__proxy", function(r) {
                r && (r.setAttribute("code.function", "ViewStatusOnClick"), r.setAttribute("outsystems.function.key", "589e3243-0e7a-4692-beb6-e93e62e21144"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._viewStatusOnClick$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        testOnClickDeposit$Action(e) {
            var t = this.controller;
            return a.Logger.startActiveSpan("TestOnClickDeposit__proxy", function(r) {
                r && (r.setAttribute("code.function", "TestOnClickDeposit"), r.setAttribute("outsystems.function.key", "6ae53c46-b1a6-46e4-9162-8536b01e7f6d"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._testOnClickDeposit$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        retakeAssessmentOnClick$Action(e) {
            var t = this.controller;
            return a.Logger.startActiveSpan("RetakeAssessmentOnClick__proxy", function(r) {
                r && (r.setAttribute("code.function", "RetakeAssessmentOnClick"), r.setAttribute("outsystems.function.key", "75d78701-a4ed-4556-bc4b-1dc4e121447d"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._retakeAssessmentOnClick$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        onClickTransfer$Action(e) {
            var t = this.controller;
            return a.Logger.startActiveSpan("OnClickTransfer__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnClickTransfer"), r.setAttribute("outsystems.function.key", "7c073647-f0f4-47f9-b7ba-87c27be8f81c"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onClickTransfer$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var t = this.controller;
            return a.Logger.startActiveSpan("OnReady__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "875f797a-19b9-40eb-8ea6-a8157f452571"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onReady$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        onClickWithdraw$Action(e) {
            var t = this.controller;
            return a.Logger.startActiveSpan("OnClickWithdraw__proxy", function(r) {
                return r && (r.setAttribute("code.function", "OnClickWithdraw"), r.setAttribute("outsystems.function.key", "877ae6f8-fa78-4fc2-854f-36ca04f6265c"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._onClickWithdraw$Action, e)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        hideLimitWarnings$Action(e) {
            var t = this.controller;
            return a.Logger.startActiveSpan("HideLimitWarnings__proxy", function(r) {
                r && (r.setAttribute("code.function", "HideLimitWarnings"), r.setAttribute("outsystems.function.key", "8874f0b2-399d-4d26-86b9-5f2ef2bf3bae"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._hideLimitWarnings$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        rateLimitPopupButtonClick$Action(e) {
            var t = this.controller;
            return a.Logger.startActiveSpan("RateLimitPopupButtonClick__proxy", function(r) {
                r && (r.setAttribute("code.function", "RateLimitPopupButtonClick"), r.setAttribute("outsystems.function.key", "9b2717b2-c27f-4822-9e71-d034e8db070a"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._rateLimitPopupButtonClick$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        getClientSystemStatus$Action(e) {
            var t = this.controller;
            return a.Logger.startActiveSpan("GetClientSystemStatus__proxy", function(r) {
                return r && (r.setAttribute("code.function", "GetClientSystemStatus"), r.setAttribute("outsystems.function.key", "b204d5c8-eb7d-4b16-8df6-b5d9b264a370"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._getClientSystemStatus$Action, e)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        checkDepositPossibility$Action(e) {
            var t = this.controller;
            return a.Logger.startActiveSpan("CheckDepositPossibility__proxy", function(r) {
                r && (r.setAttribute("code.function", "CheckDepositPossibility"), r.setAttribute("outsystems.function.key", "bfad1e07-ac9a-426f-a390-9fcf1acd1dc7"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._checkDepositPossibility$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        checkTransferPossibility$Action(e) {
            var t = this.controller;
            return a.Logger.startActiveSpan("CheckTransferPossibility__proxy", function(r) {
                r && (r.setAttribute("code.function", "CheckTransferPossibility"), r.setAttribute("outsystems.function.key", "c9c414ca-9e3a-49bd-b650-e3b3b4f300ea"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._checkTransferPossibility$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        closeLimitPopup$Action(e) {
            var t = this.controller;
            return a.Logger.startActiveSpan("CloseLimitPopup__proxy", function(r) {
                r && (r.setAttribute("code.function", "CloseLimitPopup"), r.setAttribute("outsystems.function.key", "db8559b0-5d89-42a4-9878-2e8501cf9ae5"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._closeLimitPopup$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        onClickDeposit$Action(e) {
            var t = this.controller;
            return a.Logger.startActiveSpan("OnClickDeposit__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnClickDeposit"), r.setAttribute("outsystems.function.key", "dd6b4fe7-79ee-49c6-b7bf-2a7d86d837df"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onClickDeposit$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        onLiveChatClick$Action(e) {
            var t = this.controller;
            return a.Logger.startActiveSpan("OnLiveChatClick__proxy", function(r) {
                return r && (r.setAttribute("code.function", "OnLiveChatClick"), r.setAttribute("outsystems.function.key", "eb187669-1632-4831-9d6a-d1de0753c67b"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._onLiveChatClick$Action, e)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        getWalletList$Action(e) {
            var t = this.controller;
            return a.Logger.startActiveSpan("GetWalletList__proxy", function(r) {
                return r && (r.setAttribute("code.function", "GetWalletList"), r.setAttribute("outsystems.function.key", "efca7309-0288-415b-9b1f-a5c8187e8e2d"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._getWalletList$Action, e)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        checkWithdrawalPossibility$Action(e) {
            var t = this.controller;
            return a.Logger.startActiveSpan("CheckWithdrawalPossibility__proxy", function(r) {
                r && (r.setAttribute("code.function", "CheckWithdrawalPossibility"), r.setAttribute("outsystems.function.key", "fc6a420d-96ad-42d8-88dd-f953243e9a8e"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._checkWithdrawalPossibility$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        get hidePanelEvent$Action() {
            return this.hasOwnProperty("_hidePanelEvent$Action") || (this._hidePanelEvent$Action = function() {
                return Promise.resolve()
            }), this._hidePanelEvent$Action
        }
        set hidePanelEvent$Action(e) {
            this._hidePanelEvent$Action = e
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var t = this.controller,
                    r = this.model,
                    n = this.idService;
                return t.onReady$Action(e)
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
                var t = this.controller,
                    r = this.model,
                    n = this.idService;
                return t.onDestroy$Action(e)
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
    u(_, "ControllerInner");
    let b = _;
    M = b, M.registerVariableGroupType("uae.CashierFlow.WalletDetailsBlock$ActionPostReauthenticate", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: a.DataTypes.DataTypes.Record,
        defaultValue: u(function() {
            return new de
        }, "defaultValue"),
        complexType: de
    }]), M.registerVariableGroupType("uae.CashierFlow.WalletDetailsBlock$ActionGetWalletLimit", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: a.DataTypes.DataTypes.Record,
        defaultValue: u(function() {
            return new ge
        }, "defaultValue"),
        complexType: ge
    }]), M.registerVariableGroupType("uae.CashierFlow.WalletDetailsBlock$ActionGetAccounts", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: a.DataTypes.DataTypes.Record,
        defaultValue: u(function() {
            return new ye
        }, "defaultValue"),
        complexType: ye
    }]), M.registerVariableGroupType("uae.CashierFlow.WalletDetailsBlock$ActionGetClientSystemStatus", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: a.DataTypes.DataTypes.Record,
        defaultValue: u(function() {
            return new U
        }, "defaultValue"),
        complexType: U
    }]), M.registerVariableGroupType("uae.CashierFlow.WalletDetailsBlock$ActionGetWalletList", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: a.DataTypes.DataTypes.Record,
        defaultValue: u(function() {
            return new ue
        }, "defaultValue"),
        complexType: ue
    }]), M.registerVariableGroupType("uae.CashierFlow.WalletDetailsBlock.OnLiveChatClick$showIntercomJSResult", [{
        name: "is_already_loaded",
        attrName: "is_already_loadedOut",
        mandatory: !0,
        dataType: a.DataTypes.DataTypes.Boolean,
        defaultValue: u(function() {
            return !1
        }, "defaultValue")
    }])
}
var M, Pt = new a.Controller.ControllerFactory(M, Z);
var h = Pe(Ve());
var Wt = {
        "rXguipNeXEGbE+i860BI8w#Value": "+ \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0623\u0645\u0648\u0627\u0644",
        "+UUJc+Z110q1p7_J04WJdA#Value": "\u0642\u0645 \u0628\u0625\u064A\u062F\u0627\u0639\u0643 \u0627\u0644\u0623\u0648\u0644 \u0648\u0627\u0628\u062F\u0623 \u0631\u062D\u0644\u062A\u0643 \u0641\u064A \u0627\u0644\u062A\u062F\u0627\u0648\u0644 \u0627\u0644\u064A\u0648\u0645",
        "bS9NeWQafUmRSkxxiMUMuA#Value": "\u0644\u0627 \u064A\u0648\u062C\u062F \u0644\u062F\u064A\u0643 \u0623\u064A \u0645\u0639\u0627\u0645\u0644\u0627\u062A \u062D\u062A\u0649 \u0627\u0644\u0622\u0646",
        "Bh5DHbiC+UCyzZPG5ZAf2w#Value": "\u0646\u0647\u0627\u064A\u0629 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062A",
        "unYf_uLcbES+7PV25WsVJA#ValueExpression.-1879307469.1": "\u062C\u0627\u0631\u064A \u0627\u0644\u0645\u0639\u0627\u0644\u062C\u0629",
        "CzuDSPZ2EUajasbp+iJTmA#Value": "-",
        "YbsYtNCUe02WP4Y_wbgoqw#Value": "+",
        "2Heqsz+ikE+D4xv2TTnQVQ#ValueExpression.80981793.1": "\u0627\u0644\u064A\u0648\u0645",
        "ZEn1gX9YGU2thtP4pmVa7g#Value": "\u0642\u064A\u062F \u0627\u0644\u0627\u0646\u062A\u0638\u0627\u0631",
        "ut+AfIJ+FkOzugtbJhk+fQ#Value": "\u0633\u062D\u0628",
        "e2X17aj8hE+Bj5y8aHOeCA#Value": "\u062A\u062D\u0648\u064A\u0644",
        "CquFlvzc2kGUFhCVpj2E5g#Value": "\u0625\u064A\u062F\u0627\u0639",
        "LD1c0SuE60CojMDErzSnbQ#Value": "\u0627\u0644\u0643\u0644",
        "lSL8BwaFNUOi95fahCp01w#Value": "\u062C\u0627\u0631\u064A \u062A\u062D\u0645\u064A\u0644 \u0645\u0639\u0627\u0645\u0644\u0627\u062A\u0643..."
    },
    Tt = {
        "ar-001": {
            translations: Wt,
            isRTL: !0
        }
    };

function nt(b, _, s, e) {
    let n = JSON.parse(b.transactions).sort((c, g) => new Date(g.date).getTime() - new Date(c.date).getTime()).reduce((c, g) => {
            var A, p;
            let o = (p = (A = g.payment_time) == null ? void 0 : A.split("T")) == null ? void 0 : p[0];
            return c[o] || (c[o] = []), c[o].push(g), c
        }, {}),
        i = Object.entries(n).map(([c, g]) => ({
            date: c,
            transactions: g
        }));
    b.grouped_transactions = JSON.stringify(i)
}
u(nt, "default");
var f = L; {
    let _ = class _ extends f.Controller.BaseViewController {
        constructor(e, t, r) {
            super(e, t, r, Tt);
            var n = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get getTransactions$ServerAction() {
            return this.hasOwnProperty("_getTransactions$ServerAction") || (this._getTransactions$ServerAction = function(e, t, r, n, i, c) {
                var g = this.controller;
                return f.Logger.startActiveSpan("GetTransactions", function(o) {
                    return o && (o.setAttribute("code.function", "GetTransactions"), o.setAttribute("outsystems.function.key", "7917e6a7-a515-4824-a4d1-08d0f6818cb9"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), f.Flow.tryFinally(function() {
                        var A = {
                            authorization: f.DataConversion.ServerDataConverter.to(e, f.DataTypes.DataTypes.Text),
                            wallet_id: f.DataConversion.ServerDataConverter.to(t, f.DataTypes.DataTypes.Text),
                            id: f.DataConversion.ServerDataConverter.to(r, f.DataTypes.DataTypes.Text),
                            page: f.DataConversion.ServerDataConverter.to(n, f.DataTypes.DataTypes.Text),
                            per_page: f.DataConversion.ServerDataConverter.to(i, f.DataTypes.DataTypes.Text)
                        };
                        return g.callServerAction("GetTransactions", "screenservices/uae/CashierFlow/Transactions/ActionGetTransactions", "omibcVee8kcbtkGobOJhHg", A, g.callContext(c), void 0, void 0, !0).then(function(p) {
                            var m = new(g.constructor.getVariableGroupType("uae.CashierFlow.Transactions$ActionGetTransactions"));
                            return m.responseOut = f.DataConversion.ServerDataConverter.from(p.Response, ve), m
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 0)
            }), this._getTransactions$ServerAction
        }
        set getTransactions$ServerAction(e) {
            this._getTransactions$ServerAction = e
        }
        get getTransactionFilterTypes$ServerAction() {
            return this.hasOwnProperty("_getTransactionFilterTypes$ServerAction") || (this._getTransactionFilterTypes$ServerAction = function(e, t) {
                var r = this.controller;
                return f.Logger.startActiveSpan("GetTransactionFilterTypes", function(n) {
                    return n && (n.setAttribute("code.function", "GetTransactionFilterTypes"), n.setAttribute("outsystems.function.key", "c1fd6c13-8e52-4487-85d8-fe7b9dcb996b.#GetEntity"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_ENTITY_ACTION")), f.Flow.tryFinally(function() {
                        var i = {
                            Id: f.DataConversion.ServerDataConverter.to(e, f.DataTypes.DataTypes.Integer)
                        };
                        return r.callServerAction("GetTransactionFilterTypes", "screenservices/uae/CashierFlow/Transactions/ssGetTransactionFilterTypes", "gzFlnyk73l67CJVudph9SA", i, r.callContext(t), void 0, void 0, !0).then(function(c) {
                            var g = new(r.constructor.getVariableGroupType("uae.CashierFlow.Transactions$ssGetTransactionFilterTypes"));
                            return g.recordOut = f.DataConversion.ServerDataConverter.from(c.Record, f.GenericTypeCache.getImplicitRecord(fe, {
                                name: "TransactionFilterTypes",
                                attrName: "transactionFilterTypesAttr",
                                nameForJson: "TransactionFilterTypes",
                                uniqueId: "8f9aea7c-b502-53d3-2ca2-1b4b2b5f441b"
                            })), g
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 0)
            }), this._getTransactionFilterTypes$ServerAction
        }
        set getTransactionFilterTypes$ServerAction(e) {
            this._getTransactionFilterTypes$ServerAction = e
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _fetchPaginatedData$Action() {
            return this.hasOwnProperty("__fetchPaginatedData$Action") || (this.__fetchPaginatedData$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    n = this.idService;
                return f.Logger.startActiveSpan("FetchPaginatedData", function(i) {
                    return i && (i.setAttribute("code.function", "FetchPaginatedData"), i.setAttribute("outsystems.function.key", "16b45768-0815-4653-91fe-07b3505e7a29"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), f.Flow.tryFinally(function() {
                        r.ensureControllerAlive("FetchPaginatedData"), e = r.callContext(e);
                        var c = new f.DataTypes.VariableHolder,
                            g = new f.DataTypes.VariableHolder,
                            o = new f.DataTypes.VariableHolder,
                            A = new f.DataTypes.VariableHolder,
                            p = new f.DataTypes.VariableHolder;
                        return f.Flow.executeAsyncFlow(function() {
                            return g.value = T.getAuth$Action(e), f.Flow.executeSequence(function() {
                                if (t.variables.transactions_metaVar.endpointAttr === f.BuiltinFunctions.nullTextIdentifier() || f.BuiltinFunctions.integerToLongInteger(t.variables.current_pageVar).lte(t.variables.transactions_metaVar.total_pagesAttr)) return p.value = f.SystemActions.listIndexOf(t.variables.pagesVar, function(m) {
                                    return m === t.variables.current_pageVar
                                }, e), f.Flow.executeSequence(function() {
                                    if (p.value.positionOut === -1) return f.SystemActions.listAppend(t.variables.pagesVar, t.variables.current_pageVar, e), t.flush(), r.getTransactions$ServerAction(g.value.tokenOut, "", "", t.variables.current_pageVar.toString(), "200", e).then(function(m) {
                                        c.value = m
                                    }).then(function() {
                                        return A.value = f.SystemActions.listFilter(c.value.responseOut.dataAttr, function(m) {
                                            return m.typeAttr === "adjustment" ? m.statusAttr === "completed" : !0
                                        }, e), f.SystemActions.listAppendAll(t.variables.transactionsVar, A.value.filteredListOut, e), o.value = f.SystemActions.listDistinct(t.variables.transactionsVar, e), t.variables.transactionsVar = o.value.distinctListOut, t.variables.transactions_metaVar = c.value.responseOut.metaAttr, t.variables.current_pageVar = t.variables.current_pageVar + 1, r._filterAndGroupTransactions$Action(e)
                                    })
                                })
                            })
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__fetchPaginatedData$Action
        }
        set _fetchPaginatedData$Action(e) {
            this.__fetchPaginatedData$Action = e
        }
        get _filterAndGroupTransactions$Action() {
            return this.hasOwnProperty("__filterAndGroupTransactions$Action") || (this.__filterAndGroupTransactions$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    n = this.idService;
                return f.Logger.startActiveSpan("FilterAndGroupTransactions", function(i) {
                    return i && (i.setAttribute("code.function", "FilterAndGroupTransactions"), i.setAttribute("outsystems.function.key", "227babe1-f68e-46af-b91d-b8e260a41201"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), f.Flow.tryFinally(function() {
                        r.ensureControllerAlive("FilterAndGroupTransactions"), e = r.callContext(e);
                        var c = new f.DataTypes.VariableHolder,
                            g = new f.DataTypes.VariableHolder,
                            o = new f.DataTypes.VariableHolder,
                            A = new f.DataTypes.VariableHolder,
                            p = new f.DataTypes.VariableHolder,
                            m = new f.DataTypes.VariableHolder,
                            v = new f.DataTypes.VariableHolder,
                            R = new f.DataTypes.VariableHolder(new f.DataTypes.JSONSerializeOutputType),
                            P = new f.DataTypes.VariableHolder(new(f.Controller.BaseController.getJSONDeserializeOutputType(f.GenericTypeCache.getGenericList(X))));
                        return f.Flow.executeAsyncFlow(function() {
                            return t.flush(), T.getWalletListCache$Action(e).then(function(l) {
                                A.value = l
                            }).then(function() {
                                return t.flush(), r.getTransactionFilterTypes$ServerAction(t.variables.selected_transaction_filterVar, e).then(function(l) {
                                    c.value = l
                                })
                            }).then(function() {
                                o.value = f.SystemActions.listFilter(t.variables.transactionsVar, function(l) {
                                    return t.variables.selected_transaction_filterVar === V.transactionFilterTypes.all ? !0 : t.variables.selected_transaction_filterVar === V.transactionFilterTypes.deposit || t.variables.selected_transaction_filterVar === V.transactionFilterTypes.withdraw ? c.value.recordOut.transactionFilterTypesAttr.keyAttr === l.typeAttr : t.variables.selected_transaction_filterVar === V.transactionFilterTypes.transfer ? l.categoryAttr === "transfer" : t.variables.selected_transaction_filterVar === V.transactionFilterTypes.pending ? l.statusAttr === "started" || l.statusAttr === "pending" || l.statusAttr === "approved" : !1
                                }, e), e.iterationContext.registerIterationStart(o.value.filteredListOut)
                            }).then(function() {
                                try {
                                    for (var l = e.iterationContext.getIterator(o.value.filteredListOut), B = 0; B < o.value.filteredListOut.length;) l.currentRowNumber = B, m.value = f.SystemActions.listIndexOf(A.value.wallet_listOut, function($) {
                                        return $.idAttr.equals(o.value.filteredListOut.getItem(B.valueOf()).wallet_idAttr)
                                    }, e), m.value.positionOut !== -1 && (o.value.filteredListOut.getItem(B.valueOf()).walletAttr = A.value.wallet_listOut.getItem(m.value.positionOut)), B++
                                } finally {
                                    e.iterationContext.registerIterationEnd(o.value.filteredListOut)
                                }
                                return t.flush(), T.getAccountListCache$Action(e).then(function($) {
                                    p.value = $
                                }).then(function() {
                                    g.value = T.addAccountData$Action(o.value.filteredListOut, A.value.wallet_listOut, p.value.account_listOut, e), R.value.jSONOut = f.JSONUtils.serializeToJSON(g.value.updated_transactionsOut, !1, !1), v.value = f.Logger.startActiveSpan("GroupTransactions", function($) {
                                        $ && ($.setAttribute("code.function", "GroupTransactions"), $.setAttribute("outsystems.function.key", "a38ba30e-92d1-4ca9-b12a-57b34421fd85"), $.setAttribute("outsystems.function.owner.name", "uae"), $.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), $.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                        try {
                                            return r.safeExecuteJSNode(nt, "GroupTransactions", "FilterAndGroupTransactions", {
                                                transactions: f.DataConversion.JSNodeParamConverter.to(R.value.jSONOut, f.DataTypes.DataTypes.Text),
                                                grouped_transactions: f.DataConversion.JSNodeParamConverter.to("", f.DataTypes.DataTypes.Text)
                                            }, function(kt) {
                                                var lt = new(r.constructor.getVariableGroupType("uae.CashierFlow.Transactions.FilterAndGroupTransactions$groupTransactionsJSResult"));
                                                return lt.grouped_transactionsOut = f.DataConversion.JSNodeParamConverter.from(kt.grouped_transactions, f.DataTypes.DataTypes.Text), lt
                                            }, {}, {})
                                        } finally {
                                            $ && $.end()
                                        }
                                    }, 1), P.value.dataOut = f.JSONUtils.deserializeFromJSON(v.value.grouped_transactionsOut, f.GenericTypeCache.getGenericList(X), !1), t.variables.grouped_transactionsVar = P.value.dataOut
                                })
                            })
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__filterAndGroupTransactions$Action
        }
        set _filterAndGroupTransactions$Action(e) {
            this.__filterAndGroupTransactions$Action = e
        }
        get _onTransactionClick$Action() {
            return this.hasOwnProperty("__onTransactionClick$Action") || (this.__onTransactionClick$Action = function(e, t) {
                var r = this.model,
                    n = this.controller,
                    i = this.idService;
                return f.Logger.startActiveSpan("OnTransactionClick", function(c) {
                    c && (c.setAttribute("code.function", "OnTransactionClick"), c.setAttribute("outsystems.function.key", "843afaee-c262-498d-ba27-55828ae0d72c"), c.setAttribute("outsystems.function.owner.name", "uae"), c.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("OnTransactionClick"), t = n.callContext(t);
                        var g = new f.DataTypes.VariableHolder(new(n.constructor.getVariableGroupType("uae.CashierFlow.Transactions.OnTransactionClick$vars")));
                        return g.value.transactionInLocal = e.clone(), f.Navigation.navigateTo(f.Navigation.generateScreenURL("uae", "transaction-details", {
                            id: f.DataConversion.ServerDataConverter.to(f.BuiltinFunctions.longIntegerToText(g.value.transactionInLocal.idAttr), f.DataTypes.DataTypes.Text)
                        }), f.Transitions.createTransition(f.Transitions.TransitionAnimation.Default), t, !0)
                    } finally {
                        c && c.end()
                    }
                }, 1)
            }), this.__onTransactionClick$Action
        }
        set _onTransactionClick$Action(e) {
            this.__onTransactionClick$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    n = this.idService;
                return f.Logger.startActiveSpan("OnReady", function(i) {
                    return i && (i.setAttribute("code.function", "OnReady"), i.setAttribute("outsystems.function.key", "b92f1f56-9b90-4737-9a4e-59f91bad1bd6"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), f.Flow.tryFinally(function() {
                        return r.ensureControllerAlive("OnReady"), e = r.callContext(e), f.Flow.executeAsyncFlow(function() {
                            return r._clearState$Action(e), t.variables.is_loadingVar = !0, r._fetchPaginatedData$Action(e).then(function() {
                                t.variables.is_loadingVar = !1
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
        get _clearState$Action() {
            return this.hasOwnProperty("__clearState$Action") || (this.__clearState$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    n = this.idService;
                return f.Logger.startActiveSpan("ClearState", function(i) {
                    i && (i.setAttribute("code.function", "ClearState"), i.setAttribute("outsystems.function.key", "be0ec14a-8c5f-4b1b-b0ed-ada09b4642a2"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("ClearState"), e = r.callContext(e);
                        var c = new f.DataTypes.VariableHolder(new(f.Controller.BaseController.getJSONDeserializeOutputType(K)));
                        f.SystemActions.listClear(t.variables.pagesVar, e), t.variables.current_pageVar = 1, f.SystemActions.listClear(t.variables.transactionsVar, e), c.value.dataOut = f.JSONUtils.deserializeFromJSON("{}", K, !1), t.variables.transactions_metaVar = c.value.dataOut
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__clearState$Action
        }
        set _clearState$Action(e) {
            this.__clearState$Action = e
        }
        get _onTransactionFilterClick$Action() {
            return this.hasOwnProperty("__onTransactionFilterClick$Action") || (this.__onTransactionFilterClick$Action = function(e, t) {
                var r = this.model,
                    n = this.controller,
                    i = this.idService;
                return f.Logger.startActiveSpan("OnTransactionFilterClick", function(c) {
                    return c && (c.setAttribute("code.function", "OnTransactionFilterClick"), c.setAttribute("outsystems.function.key", "c7eb03c4-fc5c-4e71-ac0a-f81bf33d5790"), c.setAttribute("outsystems.function.owner.name", "uae"), c.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), f.Flow.tryFinally(function() {
                        n.ensureControllerAlive("OnTransactionFilterClick"), t = n.callContext(t);
                        var g = new f.DataTypes.VariableHolder(new(n.constructor.getVariableGroupType("uae.CashierFlow.Transactions.OnTransactionFilterClick$vars")));
                        return g.value.transaction_filterInLocal = e, f.Flow.executeAsyncFlow(function() {
                            return r.variables.selected_transaction_filterVar = g.value.transaction_filterInLocal, n._filterAndGroupTransactions$Action(t)
                        })
                    }, function() {
                        c && c.end()
                    })
                }, 1)
            }), this.__onTransactionFilterClick$Action
        }
        set _onTransactionFilterClick$Action(e) {
            this.__onTransactionFilterClick$Action = e
        }
        fetchPaginatedData$Action(e) {
            var t = this.controller;
            return f.Logger.startActiveSpan("FetchPaginatedData__proxy", function(r) {
                return r && (r.setAttribute("code.function", "FetchPaginatedData"), r.setAttribute("outsystems.function.key", "16b45768-0815-4653-91fe-07b3505e7a29"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), f.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._fetchPaginatedData$Action, e)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        filterAndGroupTransactions$Action(e) {
            var t = this.controller;
            return f.Logger.startActiveSpan("FilterAndGroupTransactions__proxy", function(r) {
                return r && (r.setAttribute("code.function", "FilterAndGroupTransactions"), r.setAttribute("outsystems.function.key", "227babe1-f68e-46af-b91d-b8e260a41201"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), f.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._filterAndGroupTransactions$Action, e)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        onTransactionClick$Action(e, t) {
            var r = this.controller;
            return f.Logger.startActiveSpan("OnTransactionClick__proxy", function(n) {
                n && (n.setAttribute("code.function", "OnTransactionClick"), n.setAttribute("outsystems.function.key", "843afaee-c262-498d-ba27-55828ae0d72c"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onTransactionClick$Action, t, e)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var t = this.controller;
            return f.Logger.startActiveSpan("OnReady__proxy", function(r) {
                return r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "b92f1f56-9b90-4737-9a4e-59f91bad1bd6"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), f.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._onReady$Action, e)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        clearState$Action(e) {
            var t = this.controller;
            return f.Logger.startActiveSpan("ClearState__proxy", function(r) {
                r && (r.setAttribute("code.function", "ClearState"), r.setAttribute("outsystems.function.key", "be0ec14a-8c5f-4b1b-b0ed-ada09b4642a2"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._clearState$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        onTransactionFilterClick$Action(e, t) {
            var r = this.controller;
            return f.Logger.startActiveSpan("OnTransactionFilterClick__proxy", function(n) {
                return n && (n.setAttribute("code.function", "OnTransactionFilterClick"), n.setAttribute("outsystems.function.key", "c7eb03c4-fc5c-4e71-ac0a-f81bf33d5790"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), f.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onTransactionFilterClick$Action, t, e)
                }, function() {
                    n && n.end()
                })
            }, 0)
        }
        get onClickDeposit$Action() {
            return this.hasOwnProperty("_onClickDeposit$Action") || (this._onClickDeposit$Action = function() {
                return Promise.resolve()
            }), this._onClickDeposit$Action
        }
        set onClickDeposit$Action(e) {
            this._onClickDeposit$Action = e
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var t = this.controller,
                    r = this.model,
                    n = this.idService;
                return t.onReady$Action(e)
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
            return T.defaultTimeout
        }
    };
    u(_, "ControllerInner");
    let b = _;
    j = b, j.registerVariableGroupType("uae.CashierFlow.Transactions$ActionGetTransactions", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: f.DataTypes.DataTypes.Record,
        defaultValue: u(function() {
            return new ve
        }, "defaultValue"),
        complexType: ve
    }]), j.registerVariableGroupType("uae.CashierFlow.Transactions$ssGetTransactionFilterTypes", [{
        name: "Record",
        attrName: "recordOut",
        mandatory: !1,
        dataType: f.DataTypes.DataTypes.Record,
        defaultValue: u(function() {
            return new(f.GenericTypeCache.getImplicitRecord(fe, {
                name: "TransactionFilterTypes",
                attrName: "transactionFilterTypesAttr",
                nameForJson: "TransactionFilterTypes",
                uniqueId: "8f9aea7c-b502-53d3-2ca2-1b4b2b5f441b"
            }))
        }, "defaultValue"),
        complexType: f.GenericTypeCache.getImplicitRecord(fe, {
            name: "TransactionFilterTypes",
            attrName: "transactionFilterTypesAttr",
            nameForJson: "TransactionFilterTypes",
            uniqueId: "8f9aea7c-b502-53d3-2ca2-1b4b2b5f441b"
        })
    }]), j.registerVariableGroupType("uae.CashierFlow.Transactions.FilterAndGroupTransactions$groupTransactionsJSResult", [{
        name: "grouped_transactions",
        attrName: "grouped_transactionsOut",
        mandatory: !0,
        dataType: f.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }]), j.registerVariableGroupType("uae.CashierFlow.Transactions.OnTransactionClick$vars", [{
        name: "transaction",
        attrName: "transactionInLocal",
        mandatory: !0,
        dataType: f.DataTypes.DataTypes.Record,
        defaultValue: u(function() {
            return new Q
        }, "defaultValue"),
        complexType: Q
    }]), j.registerVariableGroupType("uae.CashierFlow.Transactions.OnTransactionFilterClick$vars", [{
        name: "transaction_filter",
        attrName: "transaction_filterInLocal",
        mandatory: !0,
        dataType: f.DataTypes.DataTypes.Integer,
        defaultValue: u(function() {
            return 0
        }, "defaultValue")
    }])
}
var j, Et = new f.Controller.ControllerFactory(j, Z);
var at = I.PlaceholderContent,
    Ot = I.IteratorPlaceholderContent,
    $t = u(function() {
        var b = _e(function(_) {
            var s = _.model,
                e = _.controller,
                t = _.controller.idService,
                r = e.validationService,
                n = e.callContext(),
                i = Y,
                c = z,
                g = {
                    props: _,
                    validateWidget: u(function(v) {
                        _.validateWidget(_, v)
                    }, "validateWidget")
                },
                o = s,
                A = te,
                p = ee,
                m = q();
            return h.createElement("div", _.rootNodeProperties, h.createElement(y, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: flex-start; align-self: stretch; display: flex; flex-direction: column; gap: 24px; padding: 24px 0px;"
                },
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "0"
                },
                _widgetRecordProvider: o
            }, A(s.variables.is_loadingVar || s.variables.is_parent_loadingIn, !0, this, function() {
                return [h.createElement(y, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-items: center; display: flex; flex-direction: column; gap: 2px; height: fit-content; margin-top: 4px;"
                    },
                    gridProperties: {
                        classes: "OSInline",
                        width: "100%"
                    },
                    style: "w-full currency list-container",
                    visible: !0,
                    _idProps: {
                        service: t,
                        name: "LoaderContainer"
                    },
                    _widgetRecordProvider: o
                }, h.createElement(le, {
                    getOwnerSpan: u(function() {
                        return m.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: u(function() {
                        return m.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        SVGCode: `<svg class='animate-spin' width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>\r
<g clip-path='url(#clip0_20275_101754)'>\r
<path d='M16.9375 7.4375V10.5625C16.9375 11.1094 16.5078 11.5 16 11.5C15.4531 11.5 15.0625 11.1094 15.0625 10.5625V7.4375C15.0625 6.92969 15.4531 6.5 16 6.5C16.5078 6.5 16.9375 6.92969 16.9375 7.4375ZM16.9375 22.4375V25.5625C16.9375 26.1094 16.5078 26.5 16 26.5C15.4531 26.5 15.0625 26.1094 15.0625 25.5625V22.4375C15.0625 21.9297 15.4531 21.5 16 21.5C16.5078 21.5 16.9375 21.9297 16.9375 22.4375ZM6 16.5C6 15.9922 6.39062 15.5625 6.9375 15.5625H10.0625C10.5703 15.5625 11 15.9922 11 16.5C11 17.0469 10.5703 17.4375 10.0625 17.4375H6.9375C6.39062 17.4375 6 17.0469 6 16.5ZM21.9375 15.5625H25.0625C25.5703 15.5625 26 15.9922 26 16.5C26 17.0469 25.5703 17.4375 25.0625 17.4375H21.9375C21.3906 17.4375 21 17.0469 21 16.5C21 15.9922 21.3906 15.5625 21.9375 15.5625ZM23.0703 9.42969C23.4219 9.82031 23.4219 10.4062 23.0703 10.7578L20.8438 12.9844C20.4922 13.3359 19.8672 13.3359 19.5156 12.9844C19.1641 12.6328 19.1641 12.0078 19.5156 11.6562L21.7422 9.42969C22.0938 9.07812 22.6797 9.07812 23.0703 9.42969ZM12.4453 21.3828L10.2188 23.5703C9.86719 23.9609 9.28125 23.9609 8.92969 23.5703C8.53906 23.2188 8.53906 22.6328 8.92969 22.2812L11.1172 20.0547C11.4688 19.7031 12.0938 19.7031 12.4453 20.0547C12.7969 20.4062 12.7969 20.9922 12.4453 21.3828ZM8.92969 9.42969C9.28125 9.07812 9.86719 9.07812 10.2188 9.42969L12.4453 11.6562C12.7969 12.0078 12.7969 12.6328 12.4453 12.9844C12.0938 13.3359 11.5078 13.3359 11.1172 12.9844L8.92969 10.7578C8.53906 10.4062 8.53906 9.82031 8.92969 9.42969ZM20.8438 20.0547L23.0703 22.2812C23.4219 22.6328 23.4219 23.2188 23.0703 23.5703C22.6797 23.9609 22.0938 23.9609 21.7422 23.5703L19.5156 21.3828C19.1641 21.0312 19.1641 20.4062 19.5156 20.0547C19.8672 19.7031 20.4922 19.7031 20.8438 20.0547Z' fill='black'/>\r
</g>\r
<defs>\r
<clipPath id='clip0_20275_101754'>\r
<rect width='32' height='32' fill='white'/>\r
</clipPath>\r
</defs>\r
</svg>`
                    },
                    events: {
                        _handleError: u(function(v) {
                            e.handleError(v)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: t,
                        uuid: "2",
                        alias: "1"
                    },
                    _widgetRecordProvider: o,
                    _dependencies: []
                }), h.createElement(D, {
                    extendedProperties: {
                        style: "---comment-6: /* 150% */; color: var(--text-default, rgba(0, 0, 0, 0.72)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px; text-align: center;"
                    },
                    text: [p(c("lSL8BwaFNUOi95fahCp01w#Value", "Getting your transactions..."))],
                    _idProps: {
                        service: t,
                        uuid: "3"
                    },
                    _widgetRecordProvider: o
                }))]
            }, function() {
                return [A(s.variables.transactionsVar.length > 0, !1, this, function() {
                    return [h.createElement(y, {
                        align: 0,
                        animate: !1,
                        extendedProperties: {
                            className: "chips-container",
                            style: "align-items: flex-start; align-self: stretch; display: flex; gap: 8px;"
                        },
                        visible: !0,
                        _idProps: {
                            service: t,
                            name: "Filters"
                        },
                        _widgetRecordProvider: o
                    }, h.createElement(y, {
                        align: 0,
                        animate: !1,
                        extendedEvents: {
                            onClick: u(function() {
                                return Promise.resolve().then(function() {
                                    var v = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                                    return e.onTransactionFilterClick$Action(V.transactionFilterTypes.all, e.callContext(v))
                                })
                            }, "onClick")
                        },
                        style: s.getCachedValue(t.getId("V8J59yGO8UOs3JxdEY8XJQ.Style"), function() {
                            return "chip " + (s.variables.selected_transaction_filterVar === V.transactionFilterTypes.all ? "chip_selected" : "")
                        }, function() {
                            return s.variables.selected_transaction_filterVar
                        }),
                        visible: !0,
                        _idProps: {
                            service: t,
                            uuid: "5"
                        },
                        _widgetRecordProvider: o
                    }, p(c("LD1c0SuE60CojMDErzSnbQ#Value", "All"))), h.createElement(y, {
                        align: 0,
                        animate: !1,
                        extendedEvents: {
                            onClick: u(function() {
                                return Promise.resolve().then(function() {
                                    var v = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                                    return e.onTransactionFilterClick$Action(V.transactionFilterTypes.deposit, e.callContext(v))
                                })
                            }, "onClick")
                        },
                        style: s.getCachedValue(t.getId("hRvXMIxt40G4siIgb0Ql2g.Style"), function() {
                            return "chip " + (s.variables.selected_transaction_filterVar === V.transactionFilterTypes.deposit ? "chip_selected" : "")
                        }, function() {
                            return s.variables.selected_transaction_filterVar
                        }),
                        visible: !0,
                        _idProps: {
                            service: t,
                            uuid: "6"
                        },
                        _widgetRecordProvider: o
                    }, p(c("CquFlvzc2kGUFhCVpj2E5g#Value", "Deposit"))), h.createElement(y, {
                        align: 0,
                        animate: !1,
                        extendedEvents: {
                            onClick: u(function() {
                                return Promise.resolve().then(function() {
                                    var v = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                                    return e.onTransactionFilterClick$Action(V.transactionFilterTypes.transfer, e.callContext(v))
                                })
                            }, "onClick")
                        },
                        style: s.getCachedValue(t.getId("lKygzEqV+U2i7GjquH0diQ.Style"), function() {
                            return "chip " + (s.variables.selected_transaction_filterVar === V.transactionFilterTypes.transfer ? "chip_selected" : "")
                        }, function() {
                            return s.variables.selected_transaction_filterVar
                        }),
                        visible: !0,
                        _idProps: {
                            service: t,
                            uuid: "7"
                        },
                        _widgetRecordProvider: o
                    }, p(c("e2X17aj8hE+Bj5y8aHOeCA#Value", "Transfer"))), h.createElement(y, {
                        align: 0,
                        animate: !1,
                        extendedEvents: {
                            onClick: u(function() {
                                return Promise.resolve().then(function() {
                                    var v = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                                    return e.onTransactionFilterClick$Action(V.transactionFilterTypes.withdraw, e.callContext(v))
                                })
                            }, "onClick")
                        },
                        style: s.getCachedValue(t.getId("KvmA3g6EUEa9uhKbi6DtYg.Style"), function() {
                            return "chip " + (s.variables.selected_transaction_filterVar === V.transactionFilterTypes.withdraw ? "chip_selected" : "")
                        }, function() {
                            return s.variables.selected_transaction_filterVar
                        }),
                        visible: !0,
                        _idProps: {
                            service: t,
                            uuid: "8"
                        },
                        _widgetRecordProvider: o
                    }, p(c("ut+AfIJ+FkOzugtbJhk+fQ#Value", "Withdraw"))), h.createElement(y, {
                        align: 0,
                        animate: !1,
                        extendedEvents: {
                            onClick: u(function() {
                                return Promise.resolve().then(function() {
                                    var v = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                                    return e.onTransactionFilterClick$Action(V.transactionFilterTypes.pending, e.callContext(v))
                                })
                            }, "onClick")
                        },
                        style: s.getCachedValue(t.getId("8UFAd+6nw0WL_3bMPh+rCA.Style"), function() {
                            return "chip " + (s.variables.selected_transaction_filterVar === V.transactionFilterTypes.pending ? "chip_selected" : "")
                        }, function() {
                            return s.variables.selected_transaction_filterVar
                        }),
                        visible: !0,
                        _idProps: {
                            service: t,
                            uuid: "9"
                        },
                        _widgetRecordProvider: o
                    }, p(c("ZEn1gX9YGU2thtP4pmVa7g#Value", "Pending")))), h.createElement(y, {
                        align: 0,
                        animate: !1,
                        extendedProperties: {
                            style: "align-items: flex-start; align-self: stretch; display: flex; flex-direction: column;"
                        },
                        visible: !0,
                        _idProps: {
                            service: t,
                            uuid: "10"
                        },
                        _widgetRecordProvider: o
                    }, h.createElement(Re, {
                        animateItems: !0,
                        extendedProperties: {
                            style: "display: flex; flex-direction: column;"
                        },
                        gridProperties: {
                            classes: "OSFillParent"
                        },
                        mode: 0,
                        onScrollEnding: u(function() {
                            return Promise.resolve().then(function() {
                                var v = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                                return e.fetchPaginatedData$Action(e.callContext(v))
                            })
                        }, "onScrollEnding"),
                        source: s.variables.grouped_transactionsVar,
                        style: "list list-group grouped-tx-list",
                        tag: "div",
                        _idProps: {
                            service: t,
                            uuid: "11"
                        },
                        _widgetRecordProvider: o,
                        placeholders: {
                            content: new Ot(function(v, R) {
                                return [h.createElement(ft, {
                                    style: "list-item",
                                    triggerActionOnFullSwipeLeft: !0,
                                    triggerActionOnFullSwipeRight: !0,
                                    _idProps: {
                                        service: v,
                                        name: "ListItem1"
                                    },
                                    _widgetRecordProvider: o,
                                    placeholders: {
                                        leftActions: at.Empty,
                                        content: new at(function() {
                                            return [h.createElement(w, {
                                                extendedProperties: {
                                                    style: "color: var(--text-subtle, rgba(0, 0, 0, 0.48)); flex: 1 0 0; font-size: 12px; font-style: normal; font-weight: 400; line-height: 18px;"
                                                },
                                                value: s.getCachedValue(v.getId("EQSAUKZIhkSR4AvW1afSXg.Value"), function() {
                                                    return S.dateTimeToDate(s.variables.grouped_transactionsVar.getCurrent(R.iterationContext).dateAttr).equals(S.dateTimeToDate(S.currDate())) ? O.resolve(x.TranslationsService).getMessage("2Heqsz+ikE+D4xv2TTnQVQ#ValueExpression.80981793.1", "Today") : S.formatDateTime(s.variables.grouped_transactionsVar.getCurrent(R.iterationContext).dateAttr, "dd MMMM yyyy")
                                                }, function() {
                                                    return s.variables.grouped_transactionsVar.getCurrent(R.iterationContext).dateAttr
                                                }),
                                                _idProps: {
                                                    service: v,
                                                    uuid: "13"
                                                },
                                                _widgetRecordProvider: o
                                            }), h.createElement(Re, {
                                                animateItems: !0,
                                                gridProperties: {
                                                    classes: "OSFillParent"
                                                },
                                                mode: 0,
                                                onScrollEnding: u(function() {
                                                    return Promise.resolve().then(function() {
                                                        var P = typeof R != "undefined" && R !== null ? R.clone() : e.callContext().clone();
                                                        return e.fetchPaginatedData$Action(e.callContext(P))
                                                    })
                                                }, "onScrollEnding"),
                                                source: s.variables.grouped_transactionsVar.getCurrent(R.iterationContext).transactionsAttr,
                                                style: "list list-group",
                                                tag: "div",
                                                _idProps: {
                                                    service: v,
                                                    uuid: "14"
                                                },
                                                _widgetRecordProvider: o,
                                                placeholders: {
                                                    content: new Ot(function(P, l) {
                                                        return [h.createElement(y, {
                                                            align: 0,
                                                            animate: !1,
                                                            extendedEvents: {
                                                                onClick: u(function() {
                                                                    var B = typeof l != "undefined" && l !== null ? l.clone() : e.callContext().clone();
                                                                    e.onTransactionClick$Action(s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext), e.callContext(B))
                                                                }, "onClick")
                                                            },
                                                            extendedProperties: {
                                                                style: "align-items: center; align-self: stretch; display: flex; gap: 24px; min-height: var(--font-size-4200, 96px);"
                                                            },
                                                            visible: !0,
                                                            _idProps: {
                                                                service: P,
                                                                uuid: "15"
                                                            },
                                                            _widgetRecordProvider: o,
                                                            _dependencies: [i(s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).statusAttr), i(s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).metadataAttr.metadataAttr.toAttr.nameAttr), i(s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).metadataAttr.metadataAttr.fromAttr.currencyAttr), i(s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).metadataAttr.metadataAttr.fromAttr.nameAttr), i(s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).walletAttr.currencyAttr), i(s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).amountAttr), i(s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).typeAttr), i(s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).categoryAttr)]
                                                        }, h.createElement(y, {
                                                            align: 0,
                                                            animate: !1,
                                                            extendedProperties: {
                                                                style: "align-items: center; background: var(--bg-secondary, #EFF3F5); border-radius: var(--font-size-4200, 96px); display: flex; gap: var(--font-size-50, 10px); height: 32px; justify-content: center;"
                                                            },
                                                            gridProperties: {
                                                                classes: "OSInline",
                                                                width: "32px"
                                                            },
                                                            visible: !0,
                                                            _idProps: {
                                                                service: P,
                                                                uuid: "16"
                                                            },
                                                            _widgetRecordProvider: o
                                                        }, A(s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).categoryAttr === "payment", !1, this, function() {
                                                            return [A(s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).typeAttr === "deposit" || s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).typeAttr === "adjustment" && s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).amountAttr.gte(S.integerToDecimal(0)), !1, this, function() {
                                                                return [h.createElement(F, {
                                                                    image: N.VersionedURL.getVersionedUrl("img/uae.add.svg"),
                                                                    type: 0,
                                                                    _idProps: {
                                                                        service: P,
                                                                        uuid: "17"
                                                                    },
                                                                    _widgetRecordProvider: o
                                                                })]
                                                            }, function() {
                                                                return [h.createElement(F, {
                                                                    image: N.VersionedURL.getVersionedUrl("img/uae.minus.svg"),
                                                                    type: 0,
                                                                    _idProps: {
                                                                        service: P,
                                                                        uuid: "18"
                                                                    },
                                                                    _widgetRecordProvider: o
                                                                })]
                                                            })]
                                                        }, function() {
                                                            return [h.createElement(F, {
                                                                image: N.VersionedURL.getVersionedUrl("img/uae.transfer.svg"),
                                                                type: 0,
                                                                _idProps: {
                                                                    service: P,
                                                                    uuid: "19"
                                                                },
                                                                _widgetRecordProvider: o
                                                            })]
                                                        })), h.createElement(y, {
                                                            align: 0,
                                                            animate: !1,
                                                            extendedProperties: {
                                                                style: "align-items: center; border-bottom: 1px solid var(--border-secondary, rgba(0, 0, 0, 0.08)); display: flex; flex: 1; padding: 16px 0px 16px 0px;"
                                                            },
                                                            visible: !0,
                                                            _idProps: {
                                                                service: P,
                                                                uuid: "20"
                                                            },
                                                            _widgetRecordProvider: o
                                                        }, h.createElement(y, {
                                                            align: 0,
                                                            animate: !1,
                                                            extendedProperties: {
                                                                style: "align-items: flex-start; display: flex; flex: 1 0 0; flex-direction: column;"
                                                            },
                                                            visible: !0,
                                                            _idProps: {
                                                                service: P,
                                                                uuid: "21"
                                                            },
                                                            _widgetRecordProvider: o
                                                        }, A(s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).typeAttr === "deposit" || s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).typeAttr === "withdrawal" || s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).typeAttr === "adjustment", !1, this, function() {
                                                            return [h.createElement(w, {
                                                                extendedProperties: {
                                                                    style: "color: var(--text-prominent, rgba(0, 0, 0, 0.96)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px; overflow: hidden; text-overflow: ellipsis;"
                                                                },
                                                                value: s.getCachedValue(P.getId("jGXperx4UUOxqsMLZSVvKg.Value"), function() {
                                                                    return s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).typeAttr === "adjustment" ? s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).amountAttr.gte(S.integerToDecimal(0)) ? "System credit" : "System debit" : S.toUpper(S.substr(s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).typeAttr, 0, 1)) + S.substr(s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).typeAttr, 1, S.length(s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).typeAttr))
                                                                }, function() {
                                                                    return s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).typeAttr
                                                                }, function() {
                                                                    return s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).amountAttr
                                                                }),
                                                                _idProps: {
                                                                    service: P,
                                                                    uuid: "22"
                                                                },
                                                                _widgetRecordProvider: o
                                                            })]
                                                        }, function() {
                                                            return [h.createElement(w, {
                                                                extendedProperties: {
                                                                    style: "color: var(--text-prominent, rgba(0, 0, 0, 0.96)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px; overflow: hidden; text-overflow: ellipsis;"
                                                                },
                                                                value: s.getCachedValue(P.getId("9XhcfxvJVk6bRFToQfCYBA.Value"), function() {
                                                                    return S.toUpper(S.substr(s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).categoryAttr, 0, 1)) + S.substr(s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).categoryAttr, 1, S.length(s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).categoryAttr))
                                                                }, function() {
                                                                    return s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).categoryAttr
                                                                }),
                                                                _idProps: {
                                                                    service: P,
                                                                    uuid: "23"
                                                                },
                                                                _widgetRecordProvider: o
                                                            })]
                                                        }), A(s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).categoryAttr === "payment", !1, this, function() {
                                                            return [h.createElement(w, {
                                                                extendedProperties: {
                                                                    style: "color: var(--text-subtle, rgba(0, 0, 0, 0.48)); font-size: 14px; font-style: normal; font-weight: 400; line-height: 22px; overflow: hidden; text-overflow: ellipsis;"
                                                                },
                                                                gridProperties: {
                                                                    classes: "OSFillParent"
                                                                },
                                                                value: s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).walletAttr.currencyAttr + " wallet",
                                                                _idProps: {
                                                                    service: P,
                                                                    uuid: "24"
                                                                },
                                                                _widgetRecordProvider: o
                                                            })]
                                                        }, function() {
                                                            return [h.createElement(w, {
                                                                extendedProperties: {
                                                                    style: "color: var(--text-subtle, rgba(0, 0, 0, 0.48)); font-size: 14px; font-style: normal; font-weight: 400; line-height: 22px; overflow: hidden; text-overflow: ellipsis;"
                                                                },
                                                                gridProperties: {
                                                                    classes: "OSFillParent"
                                                                },
                                                                value: s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).metadataAttr.metadataAttr.fromAttr.nameAttr + " -> " + s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).metadataAttr.metadataAttr.toAttr.nameAttr,
                                                                _idProps: {
                                                                    service: P,
                                                                    uuid: "25"
                                                                },
                                                                _widgetRecordProvider: o
                                                            })]
                                                        }), h.createElement(y, {
                                                            align: 0,
                                                            animate: !1,
                                                            extendedProperties: {
                                                                style: "align-items: center; display: flex; font-weight: bold; justify-content: center;"
                                                            },
                                                            style: s.getCachedValue(P.getId("clSnnRz7PEOwJGNmJfkDsw.Style"), function() {
                                                                return "amount__" + (s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).typeAttr === "adjustment" ? s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).amountAttr.gte(S.integerToDecimal(0)) ? "deposit" : "withdrawal" : s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).typeAttr)
                                                            }, function() {
                                                                return s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).typeAttr
                                                            }, function() {
                                                                return s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).amountAttr
                                                            }),
                                                            visible: !0,
                                                            _idProps: {
                                                                service: P,
                                                                uuid: "26"
                                                            },
                                                            _widgetRecordProvider: o
                                                        }, A(s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).typeAttr === "account_wallet", !1, this, function() {
                                                            return [h.createElement(w, {
                                                                extendedProperties: {
                                                                    style: "font-size: 16px; font-style: normal; font-weight: 700; line-height: 24px; text-align: right;"
                                                                },
                                                                gridProperties: {
                                                                    classes: "OSFillParent"
                                                                },
                                                                value: s.getCachedValue(P.getId("SBs2EFifdE+f4Pa8Ut1Hyg.Value"), function() {
                                                                    return s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).metadataAttr.metadataAttr.fromAttr.currencyAttr === "AED" || s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).metadataAttr.metadataAttr.fromAttr.currencyAttr === "USD" ? S.formatCurrency(s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).amountAttr, "", 2, ".", ",") : S.formatCurrency(s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).amountAttr, "", 8, ".", ",")
                                                                }, function() {
                                                                    return s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).metadataAttr.metadataAttr.fromAttr.currencyAttr
                                                                }, function() {
                                                                    return s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).amountAttr
                                                                }),
                                                                _idProps: {
                                                                    service: P,
                                                                    uuid: "27"
                                                                },
                                                                _widgetRecordProvider: o
                                                            })]
                                                        }, function() {
                                                            return [A(s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).categoryAttr === "payment", !1, this, function() {
                                                                return [A(s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).typeAttr === "deposit" || s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).typeAttr === "adjustment" && s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).amountAttr.gte(S.integerToDecimal(0)), !1, this, function() {
                                                                    return [p(c("YbsYtNCUe02WP4Y_wbgoqw#Value", "+"))]
                                                                }, function() {
                                                                    return [p(c("CzuDSPZ2EUajasbp+iJTmA#Value", "-"))]
                                                                })]
                                                            }, function() {
                                                                return []
                                                            }), h.createElement(w, {
                                                                extendedProperties: {
                                                                    style: "font-size: 16px; font-style: normal; font-weight: 700; line-height: 24px; text-align: right;"
                                                                },
                                                                gridProperties: {
                                                                    classes: "OSFillParent"
                                                                },
                                                                value: s.getCachedValue(P.getId("i+lyd6MsK0WKVPSpXS2HnQ.Value"), function() {
                                                                    return s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).walletAttr.currencyAttr === "AED" || s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).walletAttr.currencyAttr === "USD" ? S.formatCurrency(S.abs(s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).amountAttr), "", 2, ".", ",") : S.formatCurrency(S.abs(s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).amountAttr), "", 8, ".", ",")
                                                                }, function() {
                                                                    return s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).walletAttr.currencyAttr
                                                                }, function() {
                                                                    return s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).amountAttr
                                                                }),
                                                                _idProps: {
                                                                    service: P,
                                                                    uuid: "28"
                                                                },
                                                                _widgetRecordProvider: o
                                                            })]
                                                        }), h.createElement(w, {
                                                            extendedProperties: {
                                                                style: "font-size: 16px; font-style: normal; font-weight: bold; line-height: 24px;"
                                                            },
                                                            gridProperties: {
                                                                classes: "ThemeGrid_MarginGutter"
                                                            },
                                                            value: s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).walletAttr.currencyAttr,
                                                            _idProps: {
                                                                service: P,
                                                                uuid: "29"
                                                            },
                                                            _widgetRecordProvider: o
                                                        }))), h.createElement(y, {
                                                            align: 0,
                                                            animate: !0,
                                                            style: s.getCachedValue(P.getId("_HgF4DkpIEWGhxDQB1BOmQ.Style"), function() {
                                                                return "status " + (s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).statusAttr === "pending" || s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).statusAttr === "started" || s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).statusAttr === "approved" || s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).statusAttr === "in_progress" ? "status__pending" : s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).statusAttr === "failed" || s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).statusAttr === "rejected" ? "status__failed" : s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).statusAttr === "chargeback" || s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).statusAttr === "refunded" ? "status__reversed" : "hidden")
                                                            }, function() {
                                                                return s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).statusAttr
                                                            }),
                                                            visible: s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).statusAttr !== "completed" && s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).categoryAttr !== "adjustment",
                                                            _idProps: {
                                                                service: P,
                                                                uuid: "30"
                                                            },
                                                            _widgetRecordProvider: o
                                                        }, h.createElement(w, {
                                                            style: s.getCachedValue(P.getId("pRbQi8K8ZkSr3lByCBZ3Eg.Style"), function() {
                                                                return "status-text " + (s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).statusAttr === "pending" || s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).statusAttr === "started" || s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).statusAttr === "approved" || s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).statusAttr === "in_progress" ? "status-text__pending" : s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).statusAttr === "failed" || s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).statusAttr === "rejected" ? "status-text__failed" : s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).statusAttr === "chargeback" || s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).statusAttr === "refunded" ? "status-text__reversed" : "")
                                                            }, function() {
                                                                return s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).statusAttr
                                                            }),
                                                            value: s.getCachedValue(P.getId("pRbQi8K8ZkSr3lByCBZ3Eg.Value"), function() {
                                                                return s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).statusAttr === "started" || s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).statusAttr === "pending" || s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).statusAttr === "approved" || s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).statusAttr === "in_progress" ? O.resolve(x.TranslationsService).getMessage("unYf_uLcbES+7PV25WsVJA#ValueExpression.-1879307469.1", "Processing") : s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).statusAttr === "failed" ? "Failed" : s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).statusAttr === "rejected" ? "Rejected" : s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).statusAttr === "chargeback" ? "Chargeback" : s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).statusAttr === "refunded" ? "Refunded" : ""
                                                            }, function() {
                                                                return s.variables.grouped_transactionsVar.getCurrent(l.iterationContext).transactionsAttr.getCurrent(l.iterationContext).statusAttr
                                                            }),
                                                            _idProps: {
                                                                service: P,
                                                                uuid: "31"
                                                            },
                                                            _widgetRecordProvider: o
                                                        }))))]
                                                    }, R, v, "2")
                                                },
                                                _dependencies: []
                                            })]
                                        }),
                                        rightActions: at.Empty
                                    },
                                    _dependencies: [i(s.variables.grouped_transactionsVar.getCurrent(R.iterationContext).transactionsAttr), i(s.variables.grouped_transactionsVar.getCurrent(R.iterationContext).dateAttr)]
                                })]
                            }, n, t, "2")
                        },
                        _dependencies: []
                    }), h.createElement(y, {
                        align: 0,
                        animate: !1,
                        extendedProperties: {
                            style: "align-items: center; align-self: stretch; display: flex; gap: var(--font-size-50, 10px); justify-content: center; padding: 0px 24px;"
                        },
                        visible: !0,
                        _idProps: {
                            service: t,
                            uuid: "32"
                        },
                        _widgetRecordProvider: o
                    }, h.createElement(D, {
                        extendedProperties: {
                            style: "color: var(--text-disabled, rgba(0, 0, 0, 0.24)); font-size: 14px; font-style: normal; font-weight: 400; line-height: 22px; text-align: center;"
                        },
                        text: [p(c("Bh5DHbiC+UCyzZPG5ZAf2w#Value", "End of transaction list"))],
                        _idProps: {
                            service: t,
                            uuid: "33"
                        },
                        _widgetRecordProvider: o
                    })))]
                }, function() {
                    return [h.createElement(y, {
                        align: 0,
                        animate: !1,
                        extendedProperties: {
                            style: "align-items: center; align-self: stretch; display: flex; flex: 1 0 0; flex-direction: column; gap: 24px; padding: 24px 0px;"
                        },
                        visible: !0,
                        _idProps: {
                            service: t,
                            uuid: "34"
                        },
                        _widgetRecordProvider: o
                    }, h.createElement(y, {
                        align: 0,
                        animate: !1,
                        extendedProperties: {
                            style: "align-items: center; display: flex; flex-direction: column;"
                        },
                        visible: !0,
                        _idProps: {
                            service: t,
                            uuid: "35"
                        },
                        _widgetRecordProvider: o
                    }, h.createElement(le, {
                        getOwnerSpan: u(function() {
                            return m.getChildSpan("render")
                        }, "getOwnerSpan"),
                        getOwnerDisposeSpan: u(function() {
                            return m.getChildSpan("destroy")
                        }, "getOwnerDisposeSpan"),
                        inputs: {
                            SVGCode: `<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48' fill='none'>\r
  <path d='M42.603 9.175L38.013 4.585C37.233 3.805 35.963 3.805 35.183 4.585L30.593 9.175C30.213 9.555 30.023 10.065 30.023 10.585H20.593C16.183 10.585 12.593 14.175 12.593 18.585V22.585C9.28296 22.585 6.59296 25.275 6.59296 28.585V34.585H6.00297C5.19297 34.585 4.46297 35.065 4.15297 35.815C3.84297 36.565 4.01296 37.425 4.58296 37.995L9.17297 42.585C9.56297 42.975 10.073 43.165 10.583 43.165C11.093 43.165 11.603 42.965 11.993 42.585L16.583 37.995C16.963 37.615 17.153 37.105 17.153 36.585H26.583C30.993 36.585 34.583 32.995 34.583 28.585V24.585H35.583C38.343 24.585 40.583 22.345 40.583 19.585V12.585H41.173C41.983 12.585 42.713 12.105 43.023 11.355C43.333 10.605 43.163 9.745 42.593 9.175H42.603ZM10.603 41.175L6.01296 36.585H7.60297C8.15297 36.585 8.60297 36.135 8.60297 35.585V28.585C8.60297 26.375 10.393 24.585 12.603 24.585V35.585C12.603 36.135 13.053 36.585 13.603 36.585H15.193L10.603 41.175ZM32.603 28.585C32.603 31.895 29.913 34.585 26.603 34.585H14.603V18.585C14.603 15.275 17.293 12.585 20.603 12.585H32.603V28.585ZM39.603 10.585C39.053 10.585 38.603 11.035 38.603 11.585V19.585C38.603 21.235 37.253 22.585 35.603 22.585H34.603V11.585C34.603 11.035 34.153 10.585 33.603 10.585H32.013L36.603 5.995L41.193 10.585H39.603Z' fill='black' fill-opacity='0.72'/>\r
  <path d='M26.603 20.585C27.153 20.585 27.603 20.135 27.603 19.585C27.603 19.035 27.153 18.585 26.603 18.585H24.603V17.585C24.603 17.035 24.153 16.585 23.603 16.585C23.053 16.585 22.603 17.035 22.603 17.585V18.585H21.603C20.503 18.585 19.603 19.485 19.603 20.585V22.585C19.603 23.685 20.503 24.585 21.603 24.585H25.603V26.585H20.603C20.053 26.585 19.603 27.035 19.603 27.585C19.603 28.135 20.053 28.585 20.603 28.585H22.603V29.585C22.603 30.135 23.053 30.585 23.603 30.585C24.153 30.585 24.603 30.135 24.603 29.585V28.585H25.603C26.703 28.585 27.603 27.685 27.603 26.585V24.585C27.603 23.485 26.703 22.585 25.603 22.585H21.603V20.585H26.603Z' fill='black' fill-opacity='0.72'/>\r
</svg>`
                        },
                        events: {
                            _handleError: u(function(v) {
                                e.handleError(v)
                            }, "_handleError")
                        },
                        _validationProps: {
                            validationService: r
                        },
                        _idProps: {
                            service: t,
                            uuid: "36",
                            alias: "2"
                        },
                        _widgetRecordProvider: o,
                        _dependencies: []
                    }), h.createElement(D, {
                        extendedProperties: {
                            style: "---comment-6: /* 150% */; color: var(--text-prominent, rgba(0, 0, 0, 0.96)); font-size: 16px; font-style: normal; font-weight: 700; line-height: 24px; text-align: center;"
                        },
                        text: [p(c("bS9NeWQafUmRSkxxiMUMuA#Value", "You have no transactions yet"))],
                        _idProps: {
                            service: t,
                            uuid: "37"
                        },
                        _widgetRecordProvider: o
                    }), h.createElement(D, {
                        extendedProperties: {
                            style: "---comment-6: /* 150% */; color: var(--text-default, rgba(0, 0, 0, 0.72)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px; text-align: center;"
                        },
                        text: [p(c("+UUJc+Z110q1p7_J04WJdA#Value", "Make your first deposit and begin your trading journey today"))],
                        _idProps: {
                            service: t,
                            uuid: "38"
                        },
                        _widgetRecordProvider: o
                    })), h.createElement(W, {
                        enabled: s.variables.is_deposit_enabledIn,
                        extendedProperties: {
                            style: "align-items: center; border-radius: 24px; display: flex; gap: 8px; height: 48px; justify-content: center; max-height: 48px; min-height: 48px; min-width: 96px; padding: 0px 28px;"
                        },
                        isDefault: !1,
                        onClick: u(function() {
                            var v = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                            e.onClickDeposit$Action(e.callContext(v))
                        }, "onClick"),
                        style: "btn btn-primary",
                        visible: !0,
                        _idProps: {
                            service: t,
                            uuid: "39"
                        },
                        _widgetRecordProvider: o,
                        enabled_dataFetchStatus: ct.calculateDataFetchStatus(s.variables._is_deposit_enabledInDataFetchStatus)
                    }, h.createElement(le, {
                        getOwnerSpan: u(function() {
                            return m.getChildSpan("render")
                        }, "getOwnerSpan"),
                        getOwnerDisposeSpan: u(function() {
                            return m.getChildSpan("destroy")
                        }, "getOwnerDisposeSpan"),
                        inputs: {
                            SVGCode: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='24' height='24' role='img' id='selected_downloadable_icon_id' fill='#ffffff'><path d='M17.25 9.625v5.625h5.625c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25H17.25v5.625c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25V17.75H9.125c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25h5.625V9.625c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25'></path></svg>"
                        },
                        events: {
                            _handleError: u(function(v) {
                                e.handleError(v)
                            }, "_handleError")
                        },
                        _validationProps: {
                            validationService: r
                        },
                        _idProps: {
                            service: t,
                            uuid: "40",
                            alias: "3"
                        },
                        _widgetRecordProvider: o,
                        _dependencies: []
                    }), h.createElement(D, {
                        extendedProperties: {
                            style: "font-size: 16px; font-style: normal; font-weight: 800; line-height: 16px; text-align: center;"
                        },
                        text: [p(c("rXguipNeXEGbE+i860BI8w#Value", "Add funds"))],
                        _idProps: {
                            service: t,
                            uuid: "41"
                        },
                        _widgetRecordProvider: o
                    })))]
                })]
            })))
        }, {
            topLevelComponent: !1,
            getAttributes: u(function() {
                return {
                    codeFunction: "Transactions",
                    functionKey: "3b443877-f2ed-4534-bf54-8947703193af",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "CashierFlow.Transactions",
            modelFactory: yt,
            controllerFactory: Et
        });
        return b.getCssDependencies = function() {
            return ["css/uae.CashierFlow.Transactions.css", "css/OutSystemsReactWidgets.css"]
        }, b.getJsDependencies = function() {
            return []
        }, b.getBlocks = function() {
            return [le]
        }, b
    }, "componentFactory"),
    ot = $t();
var st = I.PlaceholderContent,
    ai = I.IteratorPlaceholderContent,
    Nt = u(function() {
        var b = _e(function(_) {
            var s = _.model,
                e = _.controller,
                t = _.controller.idService,
                r = e.validationService,
                n = e.callContext(),
                i = Y,
                c = z,
                g = {
                    props: _,
                    validateWidget: u(function(v) {
                        _.validateWidget(_, v)
                    }, "validateWidget")
                },
                o = s,
                A = te,
                p = ee,
                m = q();
            return d.createElement("div", _.rootNodeProperties, d.createElement(y, {
                align: 0,
                animate: !0,
                visible: !s.variables.is_withdrawal_pausedVar,
                _idProps: {
                    service: t,
                    uuid: "0"
                },
                _widgetRecordProvider: o
            }, d.createElement(y, {
                align: 0,
                animate: !1,
                style: s.getCachedValue(t.getId("Bo6KmaiapEud7g9HKHTWYg.Style"), function() {
                    return se.isDesktop$Action(n).isDesktopOut ? "" : "mt-10"
                }),
                visible: !1,
                _idProps: {
                    service: t,
                    uuid: "1"
                },
                _widgetRecordProvider: o
            }, d.createElement(We, {
                getOwnerSpan: u(function() {
                    return m.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: u(function() {
                    return m.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    from: "wallet",
                    system_status: s.variables.clientSystemStatusVar.dataAttr.getCurrent(n.iterationContext).statusAttr.codeAttr,
                    poi_status: s.variables.kYCResponseVar.detailsAttr.poiAttr.statusAttr,
                    poa_status: s.variables.kYCResponseVar.detailsAttr.poaAttr.statusAttr,
                    kyc_status: s.variables.kYCResponseVar.statusAttr
                },
                events: {
                    _handleError: u(function(v) {
                        e.handleError(v)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: r
                },
                _idProps: {
                    service: t,
                    uuid: "2",
                    alias: "1"
                },
                _widgetRecordProvider: o,
                _dependencies: []
            })), d.createElement(y, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: flex-start; align-self: stretch; display: flex; flex-direction: column; height: 360px; padding: 24px 0px;"
                },
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "3"
                },
                _widgetRecordProvider: o
            }, d.createElement(y, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: center; align-self: stretch; display: flex; flex: 1 0 0; flex-direction: column; gap: 16px; justify-content: center;"
                },
                visible: !0,
                _idProps: {
                    service: t,
                    name: "WalletDetails"
                },
                _widgetRecordProvider: o
            }, d.createElement(y, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "height: 56px;"
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "56px"
                },
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "5"
                },
                _widgetRecordProvider: o
            }, A(s.variables.is_wallet_loadingVar, !1, this, function() {
                return [d.createElement(y, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "background: #0000000A; border-radius: 100px; height: 100%;"
                    },
                    gridProperties: {
                        classes: "OSInline",
                        width: "100%"
                    },
                    style: "w-full animate-pulse",
                    visible: !0,
                    _idProps: {
                        service: t,
                        name: "ListItemPlaceholder"
                    },
                    _widgetRecordProvider: o
                })]
            }, function() {
                return [d.createElement(F, {
                    extendedProperties: {
                        style: "height: 56px;"
                    },
                    gridProperties: {
                        width: "56px"
                    },
                    type: 1,
                    url: s.getCachedValue(t.getId("Lra9YC5kAEWE+qoUtLjzBQ.Url"), function() {
                        return "/" + S.getAppName() + "/img/" + S.getAppName() + ".currency" + S.toLower(s.variables.walletVar.currencyAttr) + ".svg"
                    }, function() {
                        return s.variables.walletVar.currencyAttr
                    }),
                    _idProps: {
                        service: t,
                        uuid: "7"
                    },
                    _widgetRecordProvider: o
                })]
            })), d.createElement(y, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: center; align-self: stretch; display: flex; flex-direction: column; justify-content: center;"
                },
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "8"
                },
                _widgetRecordProvider: o
            }, A(s.variables.is_wallet_loadingVar, !1, this, function() {
                return [d.createElement(y, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "background: #0000000A; border-radius: 7px; height: 32px; margin-bottom: 10px;"
                    },
                    gridProperties: {
                        classes: "OSInline",
                        width: "128px"
                    },
                    style: "w-full animate-pulse",
                    visible: !0,
                    _idProps: {
                        service: t,
                        name: "ListItemPlaceholder2"
                    },
                    _widgetRecordProvider: o
                })]
            }, function() {
                return [d.createElement(w, {
                    extendedProperties: {
                        style: "color: var(--text-prominent, rgba(0, 0, 0, 0.96)); font-size: 32px; font-style: normal; font-weight: 900; line-height: normal; text-align: center;"
                    },
                    value: s.getCachedValue(t.getId("77SKSEFSWkGHfrcd+Xroqw.Value"), function() {
                        return s.variables.walletVar.currencyAttr === "AED" || s.variables.walletVar.currencyAttr === "USD" ? S.formatCurrency(s.variables.walletVar.balanceAttr, "", 2, ".", ",") : S.formatCurrency(s.variables.walletVar.balanceAttr, "", 8, ".", ",")
                    }, function() {
                        return s.variables.walletVar.currencyAttr
                    }, function() {
                        return s.variables.walletVar.balanceAttr
                    }),
                    _idProps: {
                        service: t,
                        uuid: "10"
                    },
                    _widgetRecordProvider: o
                })]
            }), A(s.variables.is_wallet_loadingVar, !1, this, function() {
                return [d.createElement(y, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "background: #0000000A; border-radius: 7px; height: 16px;"
                    },
                    gridProperties: {
                        classes: "OSInline",
                        width: "100px"
                    },
                    style: "w-full animate-pulse",
                    visible: !0,
                    _idProps: {
                        service: t,
                        name: "ListItemPlaceholder3"
                    },
                    _widgetRecordProvider: o
                })]
            }, function() {
                return [d.createElement(w, {
                    extendedProperties: {
                        style: "color: var(--text-default, rgba(0, 0, 0, 0.72)); font-size: 14px; font-style: normal; font-weight: 400; line-height: 22px; text-align: center;"
                    },
                    value: s.getCachedValue(t.getId("v_sJ9n3BfEiEIRgv90r+Ug.Value"), function() {
                        return S.toUpper(s.variables.walletVar.currencyAttr) + " wallet"
                    }, function() {
                        return s.variables.walletVar.currencyAttr
                    }),
                    _idProps: {
                        service: t,
                        uuid: "12"
                    },
                    _widgetRecordProvider: o
                })]
            }))), d.createElement(y, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: flex-start; align-self: stretch; display: flex; gap: 8px; justify-content: space-around;"
                },
                visible: !0,
                _idProps: {
                    service: t,
                    name: "WalletActions"
                },
                _widgetRecordProvider: o
            }, d.createElement(y, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "display: flex; flex-direction: column;"
                },
                gridProperties: {
                    classes: "OSInline"
                },
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "14"
                },
                _widgetRecordProvider: o
            }, A(s.variables.is_wallet_loadingVar, !1, this, function() {
                return [d.createElement(y, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-items: center; display: flex; flex: 1 0 0; flex-direction: column; gap: 8px;"
                    },
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "15"
                    },
                    _widgetRecordProvider: o
                }, d.createElement(y, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "background: #0000000A; border-radius: 100px; height: 56px;"
                    },
                    gridProperties: {
                        classes: "OSInline",
                        width: "56px"
                    },
                    style: "w-full animate-pulse",
                    visible: !0,
                    _idProps: {
                        service: t,
                        name: "ListItemPlaceholder4"
                    },
                    _widgetRecordProvider: o
                }), d.createElement(y, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "background: #0000000A; border-radius: 7px; height: 16px;"
                    },
                    gridProperties: {
                        classes: "OSInline",
                        width: "64px"
                    },
                    style: "w-full animate-pulse",
                    visible: !0,
                    _idProps: {
                        service: t,
                        name: "ListItemPlaceholder5"
                    },
                    _widgetRecordProvider: o
                }))]
            }, function() {
                return [d.createElement(y, {
                    align: 0,
                    animate: !1,
                    extendedEvents: {
                        onClick: u(function() {
                            var v = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                            e.onClickDeposit$Action(e.callContext(v))
                        }, "onClick")
                    },
                    extendedProperties: {
                        style: "align-items: center; display: flex; flex: 1 0 0; flex-direction: column; gap: 8px;"
                    },
                    style: s.getCachedValue(t.getId("XhbNk3LGlESsQDizOUDh6w.Style"), function() {
                        return s.variables.is_deposit_enabledVar ? "" : "action-disabled"
                    }, function() {
                        return s.variables.is_deposit_enabledVar
                    }),
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "18"
                    },
                    _widgetRecordProvider: o
                }, d.createElement(y, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "background-color: #ff4450;"
                    },
                    style: "action-icon action-icon_primary",
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "19"
                    },
                    _widgetRecordProvider: o
                }, d.createElement(D, {
                    extendedProperties: {
                        style: '---comment-7: /* 150% */; color: var(--core-color-solid-slate-50, #FFF); font-family: "Font Awesome 6 Pro"; font-size: 24px; font-style: normal; font-weight: 900; line-height: 24px; text-align: center;'
                    },
                    text: [p(c("zpqaQjHtSEiYg0AqhXgzBQ#Value", "+"))],
                    _idProps: {
                        service: t,
                        uuid: "20"
                    },
                    _widgetRecordProvider: o
                })), d.createElement(D, {
                    extendedProperties: {
                        style: "color: var(--text-prominent, rgba(0, 0, 0, 0.96)); font-size: 14px; font-style: normal; font-weight: 400; line-height: 22px; text-align: center;"
                    },
                    text: [p(c("PmOVzNYSM0O7joYyvMkJXQ#Value", "Deposit"))],
                    _idProps: {
                        service: t,
                        uuid: "21"
                    },
                    _widgetRecordProvider: o
                }))]
            })), d.createElement(y, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: center; display: flex; flex-direction: column; gap: 8px;"
                },
                gridProperties: {
                    classes: "OSInline"
                },
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "22"
                },
                _widgetRecordProvider: o
            }, A(s.variables.is_wallet_loadingVar, !1, this, function() {
                return [d.createElement(y, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-items: center; display: flex; flex: 1 0 0; flex-direction: column; gap: 8px;"
                    },
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "23"
                    },
                    _widgetRecordProvider: o
                }, d.createElement(y, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "background: #0000000A; border-radius: 100px; height: 56px;"
                    },
                    gridProperties: {
                        classes: "OSInline",
                        width: "56px"
                    },
                    style: "w-full animate-pulse",
                    visible: !0,
                    _idProps: {
                        service: t,
                        name: "ListItemPlaceholder6"
                    },
                    _widgetRecordProvider: o
                }), d.createElement(y, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "background: #0000000A; border-radius: 7px; height: 16px;"
                    },
                    gridProperties: {
                        classes: "OSInline",
                        width: "64px"
                    },
                    style: "w-full animate-pulse",
                    visible: !0,
                    _idProps: {
                        service: t,
                        name: "ListItemPlaceholder7"
                    },
                    _widgetRecordProvider: o
                }))]
            }, function() {
                return [d.createElement(y, {
                    align: 0,
                    animate: !1,
                    extendedEvents: {
                        onClick: u(function() {
                            var v = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                            e.onClickTransfer$Action(e.callContext(v))
                        }, "onClick")
                    },
                    extendedProperties: {
                        style: "align-items: center; display: flex; flex: 1 0 0; flex-direction: column; gap: 8px;"
                    },
                    style: s.getCachedValue(t.getId("voVivUtMckSuWLnHgVixVw.Style"), function() {
                        return s.variables.is_transfer_enabledVar ? "" : "action-disabled"
                    }, function() {
                        return s.variables.is_transfer_enabledVar
                    }),
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "26"
                    },
                    _widgetRecordProvider: o
                }, d.createElement(y, {
                    align: 0,
                    animate: !1,
                    style: "action-icon",
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "27"
                    },
                    _widgetRecordProvider: o
                }, d.createElement(F, {
                    image: N.VersionedURL.getVersionedUrl("img/uae.transfer.svg"),
                    type: 0,
                    _idProps: {
                        service: t,
                        uuid: "28"
                    },
                    _widgetRecordProvider: o
                })), d.createElement(D, {
                    extendedProperties: {
                        style: "color: var(--text-prominent, rgba(0, 0, 0, 0.96)); font-size: 14px; font-style: normal; font-weight: 400; line-height: 22px; text-align: center;"
                    },
                    text: [p(c("Rf3J5j49wUCNc_Bd36u5Jg#Value", "Transfer"))],
                    _idProps: {
                        service: t,
                        uuid: "29"
                    },
                    _widgetRecordProvider: o
                }))]
            })), d.createElement(y, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "30"
                },
                _widgetRecordProvider: o
            }, A(s.variables.is_wallet_loadingVar, !1, this, function() {
                return [d.createElement(y, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-items: center; display: flex; flex: 1 0 0; flex-direction: column; gap: 8px;"
                    },
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "31"
                    },
                    _widgetRecordProvider: o
                }, d.createElement(y, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "background: #0000000A; border-radius: 100px; height: 56px;"
                    },
                    gridProperties: {
                        classes: "OSInline",
                        width: "56px"
                    },
                    style: "w-full animate-pulse",
                    visible: !0,
                    _idProps: {
                        service: t,
                        name: "ListItemPlaceholder8"
                    },
                    _widgetRecordProvider: o
                }), d.createElement(y, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "background: #0000000A; border-radius: 7px; height: 16px;"
                    },
                    gridProperties: {
                        classes: "OSInline",
                        width: "64px"
                    },
                    style: "w-full animate-pulse",
                    visible: !0,
                    _idProps: {
                        service: t,
                        name: "ListItemPlaceholder9"
                    },
                    _widgetRecordProvider: o
                }))]
            }, function() {
                return [d.createElement(y, {
                    align: 0,
                    animate: !1,
                    extendedEvents: {
                        onClick: u(function() {
                            return Promise.resolve().then(function() {
                                var v = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                                return e.onClickWithdraw$Action(e.callContext(v))
                            })
                        }, "onClick")
                    },
                    extendedProperties: {
                        style: "align-items: center; display: flex; flex-direction: column; gap: 8px;"
                    },
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: s.getCachedValue(t.getId("xB7d4LH3IUGGPvLI29wbKA.Style"), function() {
                        return s.variables.is_withdrawal_enabledVar && s.variables.walletVar.balanceAttr.gt(S.integerToDecimal(0)) && !s.variables.is_withdrawal_clickedVar ? "" : "action-disabled pointer-events-none"
                    }, function() {
                        return s.variables.is_withdrawal_enabledVar
                    }, function() {
                        return s.variables.walletVar.balanceAttr
                    }, function() {
                        return s.variables.is_withdrawal_clickedVar
                    }),
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "34"
                    },
                    _widgetRecordProvider: o
                }, d.createElement(y, {
                    align: 0,
                    animate: !1,
                    style: "action-icon",
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "35"
                    },
                    _widgetRecordProvider: o
                }, d.createElement(F, {
                    image: N.VersionedURL.getVersionedUrl("img/uae.minus.svg"),
                    type: 0,
                    _idProps: {
                        service: t,
                        uuid: "36"
                    },
                    _widgetRecordProvider: o
                })), d.createElement(D, {
                    extendedProperties: {
                        style: "color: var(--text-prominent, rgba(0, 0, 0, 0.96)); font-size: 14px; font-style: normal; font-weight: 400; line-height: 22px; text-align: center;"
                    },
                    text: [p(c("ZW+0nxqEjUSm8rXXODQXzQ#Value", "Withdraw"))],
                    _idProps: {
                        service: t,
                        uuid: "37"
                    },
                    _widgetRecordProvider: o
                }))]
            })))), d.createElement(ot, {
                getOwnerSpan: u(function() {
                    return m.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: u(function() {
                    return m.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    is_parent_loading: s.variables.is_wallet_loadingVar,
                    is_deposit_enabled: s.variables.is_deposit_enabledVar
                },
                events: {
                    _handleError: u(function(v) {
                        e.handleError(v)
                    }, "_handleError"),
                    onClickDeposit$Action: u(function() {
                        var v = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                        e.onClickDeposit$Action(e.callContext(v))
                    }, "onClickDeposit$Action")
                },
                _validationProps: {
                    validationService: r
                },
                _idProps: {
                    service: t,
                    uuid: "38",
                    alias: "2"
                },
                _widgetRecordProvider: o,
                _dependencies: []
            })), d.createElement(H, {
                extendedProperties: {
                    style: "width: 328px;"
                },
                showPopup: s.variables.show_transfer_limit_popupVar,
                style: "popup-dialog",
                _idProps: {
                    service: t,
                    name: "TransferLimitPopup"
                },
                _widgetRecordProvider: o
            }, d.createElement(y, {
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
                    service: t,
                    uuid: "40"
                },
                _widgetRecordProvider: o
            }, d.createElement(y, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: flex-start; align-self: stretch; display: flex;"
                },
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "41"
                },
                _widgetRecordProvider: o
            }, d.createElement(w, {
                extendedProperties: {
                    style: "---comment-6: /* 155.556% */; color: var(--Neutral-Neutral-10, #101213); font-size: 16px; font-style: normal; font-weight: 700; line-height: 28px;"
                },
                value: O.resolve(x.TranslationsService).getMessage("DP_FIdPg5kmb2_OM82XDLQ#ValueExpression.-967763841.1", "Daily transfer limit reached"),
                _idProps: {
                    service: t,
                    uuid: "42"
                },
                _widgetRecordProvider: o
            })), d.createElement(w, {
                value: O.resolve(x.TranslationsService).getMessage("+yW5B_t_y0WCi_b05mH8Ng#ValueExpression.-275471095.1", "You\u2019ve reached the daily limit of ") + S.longIntegerToText(s.variables.wallet_limitVar.transferAttr.limitAttr.dailyAttr.maximumAttr) + O.resolve(x.TranslationsService).getMessage("+yW5B_t_y0WCi_b05mH8Ng#ValueExpression.899731302.1", " transfers."),
                _idProps: {
                    service: t,
                    uuid: "43"
                },
                _widgetRecordProvider: o
            }), d.createElement(y, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: center; align-self: stretch; display: flex; flex-direction: column; gap: 8px;"
                },
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "44"
                },
                _widgetRecordProvider: o
            }, d.createElement(W, {
                enabled: !0,
                isDefault: !1,
                onClick: u(function() {
                    var v = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                    e.hideLimitWarnings$Action(e.callContext(v))
                }, "onClick"),
                style: "btn btn-primary action-button w-full",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "45"
                },
                _widgetRecordProvider: o
            }, p(c("4YXy8RTUykuVvWQtLAewHQ#Value", "OK")))))), d.createElement(H, {
                extendedProperties: {
                    style: "width: 328px;"
                },
                showPopup: s.variables.show_withdrawal_limit_popupVar,
                style: "popup-dialog",
                _idProps: {
                    service: t,
                    name: "WithdrawalLimitPopup"
                },
                _widgetRecordProvider: o
            }, d.createElement(y, {
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
                    service: t,
                    uuid: "47"
                },
                _widgetRecordProvider: o
            }, d.createElement(y, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: flex-start; align-self: stretch; display: flex;"
                },
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "48"
                },
                _widgetRecordProvider: o
            }, d.createElement(w, {
                extendedProperties: {
                    style: "---comment-6: /* 155.556% */; color: var(--Neutral-Neutral-10, #101213); font-size: 16px; font-style: normal; font-weight: 700; line-height: 28px;"
                },
                value: O.resolve(x.TranslationsService).getMessage("xdYMOHxKh0uwt195Q9AoXg#ValueExpression.1186287113.1", "Daily withdrawal limit reached"),
                _idProps: {
                    service: t,
                    uuid: "49"
                },
                _widgetRecordProvider: o
            })), d.createElement(w, {
                value: O.resolve(x.TranslationsService).getMessage("K7HOvsgfikmC7fxui9bijA#ValueExpression.-275471095.1", "You\u2019ve reached the daily limit of ") + S.longIntegerToText(s.variables.wallet_limitVar.withdrawalAttr.limitAttr.dailyAttr.maximumAttr) + O.resolve(x.TranslationsService).getMessage("K7HOvsgfikmC7fxui9bijA#ValueExpression.831717808.1", " withdrawals."),
                _idProps: {
                    service: t,
                    uuid: "50"
                },
                _widgetRecordProvider: o
            }), d.createElement(y, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: center; align-self: stretch; display: flex; flex-direction: column; gap: 8px;"
                },
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "51"
                },
                _widgetRecordProvider: o
            }, d.createElement(W, {
                enabled: !0,
                isDefault: !1,
                onClick: u(function() {
                    var v = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                    e.hideLimitWarnings$Action(e.callContext(v))
                }, "onClick"),
                style: "btn btn-primary action-button w-full",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "52"
                },
                _widgetRecordProvider: o
            }, p(c("vO7F_T4ENEi5K0iUsBgTaw#Value", "OK")))))), d.createElement(H, {
                extendedProperties: {
                    style: "width: 328px;"
                },
                showPopup: s.variables.showRateLimitPopupVar,
                style: "popup-dialog padding-base",
                _idProps: {
                    service: t,
                    name: "RateLimitReachedPopup"
                },
                _widgetRecordProvider: o
            }, d.createElement(y, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "54"
                },
                _widgetRecordProvider: o
            }, d.createElement(De, {
                getOwnerSpan: u(function() {
                    return m.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: u(function() {
                    return m.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: u(function(v) {
                        e.handleError(v)
                    }, "_handleError"),
                    buttonClick$Action: u(function() {
                        var v = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                        e.rateLimitPopupButtonClick$Action(e.callContext(v))
                    }, "buttonClick$Action")
                },
                _validationProps: {
                    validationService: r
                },
                _idProps: {
                    service: t,
                    uuid: "55",
                    alias: "3"
                },
                _widgetRecordProvider: o,
                _dependencies: []
            }))), A(k.getupdateKYCFlow(), !1, this, function() {
                return [d.createElement($e, {
                    getOwnerSpan: u(function() {
                        return m.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: u(function() {
                        return m.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        isCoodDownStatus: s.variables.clientSystemStatusVar.dataAttr.getCurrent(n.iterationContext).statusAttr.codeAttr === "cool_down",
                        KYCVerificationResponse: s.variables.kYCResponseVar,
                        shouldShowPopUP: s.variables.show_kyc_verification_popupVar
                    },
                    events: {
                        _handleError: u(function(v) {
                            e.handleError(v)
                        }, "_handleError"),
                        onClickCancelEvent$Action: u(function() {
                            var v = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                            e.cancelOnClick$Action(e.callContext(v))
                        }, "onClickCancelEvent$Action")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: t,
                        uuid: "56",
                        alias: "4"
                    },
                    _widgetRecordProvider: o,
                    _dependencies: []
                })]
            }, function() {
                return [d.createElement(H, {
                    extendedProperties: {
                        style: "width: 328px;"
                    },
                    showPopup: (s.variables.kYCResponseVar.statusAttr === "failed" || s.variables.kYCResponseVar.statusAttr === "rejected") && s.variables.show_kyc_verification_popupVar,
                    style: "popup-dialog",
                    _idProps: {
                        service: t,
                        name: "KYCFailedOrRejected"
                    },
                    _widgetRecordProvider: o
                }, d.createElement(y, {
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
                        service: t,
                        uuid: "58"
                    },
                    _widgetRecordProvider: o
                }, d.createElement(y, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-items: flex-start; align-self: stretch; display: flex;"
                    },
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "59"
                    },
                    _widgetRecordProvider: o
                }, d.createElement(w, {
                    extendedProperties: {
                        style: "---comment-6: /* 155.556% */; color: var(--Neutral-Neutral-10, #101213); font-size: 16px; font-style: normal; font-weight: 700; line-height: 28px;"
                    },
                    value: O.resolve(x.TranslationsService).getMessage("VFndRgE8A0W632k_ANyeEQ#ValueExpression.1550559136.1", "Identity verification failed"),
                    _idProps: {
                        service: t,
                        uuid: "60"
                    },
                    _widgetRecordProvider: o
                })), d.createElement(w, {
                    value: O.resolve(x.TranslationsService).getMessage("rUuMsthWVUC81pnNW05r1w#ValueExpression.-2064769757.1", "To deposit and start trading, verify your identity."),
                    _idProps: {
                        service: t,
                        uuid: "61"
                    },
                    _widgetRecordProvider: o
                }), d.createElement(y, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-items: center; align-self: stretch; display: flex; flex-direction: column; gap: 8px;"
                    },
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "62"
                    },
                    _widgetRecordProvider: o
                }, d.createElement(W, {
                    enabled: !0,
                    isDefault: !1,
                    onClick: u(function() {
                        var v = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                        e.viewStatusOnClick$Action(e.callContext(v))
                    }, "onClick"),
                    style: "btn btn-primary action-button w-full",
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "63"
                    },
                    _widgetRecordProvider: o
                }, p(c("Z5KugUcYsEiZ3GuwewfdtQ#Value", "View status"))), d.createElement(W, {
                    enabled: !0,
                    gridProperties: {
                        marginLeft: "0"
                    },
                    isDefault: !1,
                    onClick: u(function() {
                        var v = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                        e.cancelOnClick$Action(e.callContext(v))
                    }, "onClick"),
                    style: "btn btn-primary secondary-button",
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "64"
                    },
                    _widgetRecordProvider: o
                }, p(c("lYUayGJL+UizXTdPDAl6lg#Value", "Cancel")))))), d.createElement(H, {
                    extendedProperties: {
                        style: "width: 328px;"
                    },
                    showPopup: (s.variables.kYCResponseVar.statusAttr === "pending" || s.variables.kYCResponseVar.statusAttr === "pending_provider") && s.variables.show_kyc_verification_popupVar,
                    style: "popup-dialog",
                    _idProps: {
                        service: t,
                        name: "KYCPending"
                    },
                    _widgetRecordProvider: o
                }, d.createElement(y, {
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
                        service: t,
                        uuid: "66"
                    },
                    _widgetRecordProvider: o
                }, d.createElement(y, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-items: flex-start; align-self: stretch; display: flex;"
                    },
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "67"
                    },
                    _widgetRecordProvider: o
                }, d.createElement(w, {
                    extendedProperties: {
                        style: "---comment-6: /* 155.556% */; color: var(--Neutral-Neutral-10, #101213); font-size: 16px; font-style: normal; font-weight: 700; line-height: 28px;"
                    },
                    value: O.resolve(x.TranslationsService).getMessage("nyyhTRzxHky6D8Iwvs8jcw#ValueExpression.-7528123.1", "Identity verification in progress"),
                    _idProps: {
                        service: t,
                        uuid: "68"
                    },
                    _widgetRecordProvider: o
                })), d.createElement(w, {
                    value: O.resolve(x.TranslationsService).getMessage("YK7DXiYhWUuHr1TXEwnWLw#ValueExpression.2020218126.1", "Some features won't be available until your account is verified."),
                    _idProps: {
                        service: t,
                        uuid: "69"
                    },
                    _widgetRecordProvider: o
                }), d.createElement(y, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-items: center; align-self: stretch; display: flex; flex-direction: column; gap: 8px;"
                    },
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "70"
                    },
                    _widgetRecordProvider: o
                }, d.createElement(W, {
                    enabled: !0,
                    isDefault: !1,
                    onClick: u(function() {
                        var v = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                        e.cancelOnClick$Action(e.callContext(v))
                    }, "onClick"),
                    style: "btn btn-primary action-button w-full",
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "71"
                    },
                    _widgetRecordProvider: o
                }, p(c("mOYXozqDF0C5oHHu59Cz5g#Value", "OK")))))), d.createElement(H, {
                    extendedProperties: {
                        style: "border-radius: 8px; padding: 16px; width: 400px;"
                    },
                    showPopup: s.variables.clientSystemStatusVar.dataAttr.getCurrent(n.iterationContext).statusAttr.codeAttr === "cool_down" && s.variables.show_kyc_verification_popupVar,
                    style: "popup-dialog",
                    _idProps: {
                        service: t,
                        name: "RealTradingPaused"
                    },
                    _widgetRecordProvider: o
                }, d.createElement(y, {
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
                        service: t,
                        uuid: "73"
                    },
                    _widgetRecordProvider: o
                }, d.createElement(y, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-items: flex-start; align-self: stretch; display: flex;"
                    },
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "74"
                    },
                    _widgetRecordProvider: o
                }, d.createElement(w, {
                    extendedProperties: {
                        style: "---comment-6: /* 155.556% */; color: var(--Neutral-Neutral-10, #101213); font-size: 18px; font-style: normal; font-weight: 700; line-height: 28px;"
                    },
                    value: O.resolve(x.TranslationsService).getMessage("dQeMpz39ZUSPRPSDiIP0eQ#ValueExpression.505823025.1", "Some features are paused"),
                    _idProps: {
                        service: t,
                        uuid: "75"
                    },
                    _widgetRecordProvider: o
                })), d.createElement(w, {
                    extendedProperties: {
                        style: "font-size: 16px; text-align: start;"
                    },
                    value: O.resolve(x.TranslationsService).getMessage("2UQRdGX_xkW3n6uz7rAusQ#ValueExpression.383660097.1", "To make deposits and trade with real funds, retake the suitability assessment or accept trading risks."),
                    _idProps: {
                        service: t,
                        uuid: "76"
                    },
                    _widgetRecordProvider: o
                }), d.createElement(y, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-items: center; align-self: stretch; display: flex; flex-direction: column; gap: 8px;"
                    },
                    style: "flex flex-col gap-y-3",
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "77"
                    },
                    _widgetRecordProvider: o
                }, d.createElement(W, {
                    enabled: !0,
                    gridProperties: {
                        marginLeft: "0"
                    },
                    isDefault: !1,
                    onClick: u(function() {
                        var v = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                        e.retakeAssessmentOnClick$Action(e.callContext(v))
                    }, "onClick"),
                    style: "btn btn-primary action-button w-full",
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "78"
                    },
                    _widgetRecordProvider: o
                }, d.createElement(D, {
                    extendedProperties: {
                        style: "font-size: 16px;"
                    },
                    text: [p(c("d1IQlZAI9029NX+JjdE9bA#Value", "Continue"))],
                    _idProps: {
                        service: t,
                        uuid: "79"
                    },
                    _widgetRecordProvider: o
                })), d.createElement(W, {
                    enabled: !0,
                    gridProperties: {
                        marginLeft: "0"
                    },
                    isDefault: !1,
                    onClick: u(function() {
                        var v = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                        e.cancelOnClick$Action(e.callContext(v))
                    }, "onClick"),
                    style: "secondary-button",
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "80"
                    },
                    _widgetRecordProvider: o
                }, d.createElement(D, {
                    extendedProperties: {
                        style: "font-size: 16px; font-weight: bold;"
                    },
                    text: [p(c("fvY78JauwkaGpRwDy4uBTA#Value", "Cancel"))],
                    _idProps: {
                        service: t,
                        uuid: "81"
                    },
                    _widgetRecordProvider: o
                }))))), d.createElement(H, {
                    extendedProperties: {
                        style: "border-radius: 8px; padding: 16px; width: 328px;"
                    },
                    showPopup: s.variables.show_limit_popupVar,
                    style: "popup-dialog",
                    _idProps: {
                        service: t,
                        name: "VerificationLimitReached"
                    },
                    _widgetRecordProvider: o
                }, d.createElement(y, {
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
                        service: t,
                        uuid: "83"
                    },
                    _widgetRecordProvider: o
                }, d.createElement(y, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-items: flex-start; align-self: stretch; display: flex;"
                    },
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "84"
                    },
                    _widgetRecordProvider: o
                }, d.createElement(w, {
                    extendedProperties: {
                        style: "---comment-6: /* 155.556% */; color: var(--Neutral-Neutral-10, #101213); font-size: 18px; font-style: normal; font-weight: 700; line-height: 28px;"
                    },
                    value: "Verification limit reached",
                    _idProps: {
                        service: t,
                        uuid: "85"
                    },
                    _widgetRecordProvider: o
                })), d.createElement(w, {
                    value: O.resolve(x.TranslationsService).getMessage("bnpjNOrd_UOV2do3AHDVFA#ValueExpression.422632842.1", "You've reached the maximum number of submission attempts. To continue, contact us via live chat."),
                    _idProps: {
                        service: t,
                        uuid: "86"
                    },
                    _widgetRecordProvider: o
                }), d.createElement(y, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-items: center; align-self: stretch; display: flex; flex-direction: column; gap: 8px;"
                    },
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "87"
                    },
                    _widgetRecordProvider: o
                }, d.createElement(W, {
                    enabled: !0,
                    isDefault: !1,
                    onClick: u(function() {
                        return Promise.resolve().then(function() {
                            var v = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                            return e.onLiveChatClick$Action(e.callContext(v))
                        })
                    }, "onClick"),
                    style: "btn btn-primary action-button w-full",
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "88"
                    },
                    _widgetRecordProvider: o
                }, p(c("43HycpT+8E2DR6hGPlw+mw#Value", "Open live chat"))), d.createElement(W, {
                    enabled: !0,
                    gridProperties: {
                        marginLeft: "0"
                    },
                    isDefault: !1,
                    onClick: u(function() {
                        var v = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                        e.closeLimitPopup$Action(e.callContext(v))
                    }, "onClick"),
                    style: "btn btn-primary secondary-button",
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "89"
                    },
                    _widgetRecordProvider: o
                }, p(c("EiHb6k1Wp0iLhrcNQaeZNA#Value", "Maybe later"))))))]
            }), d.createElement(y, {
                align: 0,
                animate: !0,
                visible: s.variables.is_withdrawal_pausedVar,
                _idProps: {
                    service: t,
                    uuid: "90"
                },
                _widgetRecordProvider: o
            }, A(se.isDesktop$Action(n).isDesktopOut, !1, this, function() {
                return [d.createElement(Le, {
                    getOwnerSpan: u(function() {
                        return m.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: u(function() {
                        return m.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        ShowClosebutton: !0
                    },
                    events: {
                        _handleError: u(function(v) {
                            e.handleError(v)
                        }, "_handleError"),
                        closeBtnEvent$Action: u(function() {
                            return Promise.resolve().then(function() {
                                var v = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                                return e.onClickOkWithdrawalPaused$Action(e.callContext(v))
                            })
                        }, "closeBtnEvent$Action")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: t,
                        uuid: "91",
                        alias: "5"
                    },
                    _widgetRecordProvider: o,
                    placeholders: {
                        contentbody: new st(function() {
                            return [d.createElement(y, {
                                align: 0,
                                animate: !1,
                                style: "display-flex align-items-center justify-content-center flex-direction-column flex-grow padding-x-m margin-bottom-m",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "92"
                                },
                                _widgetRecordProvider: o
                            }, d.createElement(F, {
                                image: N.VersionedURL.getVersionedUrl("img/uae.yellow_information.svg"),
                                type: 0,
                                _idProps: {
                                    service: t,
                                    uuid: "93"
                                },
                                _widgetRecordProvider: o
                            }), d.createElement(D, {
                                extendedProperties: {
                                    style: "font-size: 24px; font-weight: 900;"
                                },
                                style: "margin-top-m margin-bottom-s",
                                text: [p(c("AppFO7mA2EKLhMvMd8PdIw#Value", "Withdrawal paused"))],
                                _idProps: {
                                    service: t,
                                    uuid: "94"
                                },
                                _widgetRecordProvider: o
                            }), d.createElement(y, {
                                align: 0,
                                animate: !1,
                                style: "text-align-center margin-bottom-m",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "95"
                                },
                                _widgetRecordProvider: o
                            }, d.createElement(w, {
                                style: "font-size-base",
                                value: O.resolve(x.TranslationsService).getMessage("uO72daXRNU2wrwEsCOb6zQ#ValueExpression.-578733866.1", "Withdraw paused due to an ") + s.variables.withdrawal_pause_typeVar + O.resolve(x.TranslationsService).getMessage("uO72daXRNU2wrwEsCOb6zQ#ValueExpression.-2109688103.1", " change. You can withdraw again after"),
                                _idProps: {
                                    service: t,
                                    uuid: "96"
                                },
                                _widgetRecordProvider: o
                            }), d.createElement(w, {
                                extendedProperties: {
                                    style: "margin-right: 0;"
                                },
                                gridProperties: {
                                    marginLeft: "0"
                                },
                                value: " ",
                                _idProps: {
                                    service: t,
                                    uuid: "97"
                                },
                                _widgetRecordProvider: o
                            }), d.createElement(w, {
                                extendedProperties: {
                                    dir: "ltr"
                                },
                                gridProperties: {
                                    marginLeft: "0"
                                },
                                style: "font-size-base",
                                value: s.getCachedValue(t.getId("zFQ4uPv5IUiNGSralHswRg.Value"), function() {
                                    return T.getTimeLeft$Action(s.variables.withdrawal_cooloffVar, n).timeLeftStringOut
                                }, function() {
                                    return s.variables.withdrawal_cooloffVar
                                }),
                                _idProps: {
                                    service: t,
                                    uuid: "98"
                                },
                                _widgetRecordProvider: o
                            }), d.createElement(w, {
                                extendedProperties: {
                                    style: "margin-right: 0;"
                                },
                                gridProperties: {
                                    marginLeft: "0"
                                },
                                value: ".",
                                _idProps: {
                                    service: t,
                                    uuid: "99"
                                },
                                _widgetRecordProvider: o
                            }))), d.createElement(y, {
                                align: 0,
                                animate: !1,
                                style: "display-flex justify-content-center margin-top-m padding-x-base",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "100"
                                },
                                _widgetRecordProvider: o
                            }, d.createElement(W, {
                                enabled: !0,
                                extendedProperties: {
                                    style: "height: 48px;"
                                },
                                gridProperties: {
                                    width: "100%"
                                },
                                isDefault: !1,
                                onClick: u(function() {
                                    return Promise.resolve().then(function() {
                                        var v = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                                        return e.onClickOkWithdrawalPaused$Action(e.callContext(v))
                                    })
                                }, "onClick"),
                                style: "btn btn-primary border-radius-rounded",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "101"
                                },
                                _widgetRecordProvider: o
                            }, d.createElement(D, {
                                extendedProperties: {
                                    style: "font-size: 16px; font-weight: 800;"
                                },
                                text: [p(c("weCbYg7Yr0CI5a_wzQh_vA#Value", "OK"))],
                                _idProps: {
                                    service: t,
                                    uuid: "102"
                                },
                                _widgetRecordProvider: o
                            })))]
                        })
                    },
                    _dependencies: [i(s.variables.withdrawal_cooloffVar), i(s.variables.withdrawal_pause_typeVar)]
                })]
            }, function() {
                return [d.createElement(y, {
                    align: 0,
                    animate: !1,
                    style: "reset-password__container display-flex flex-direction-column overflow-hidden",
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "103"
                    },
                    _widgetRecordProvider: o
                }, d.createElement(ke, {
                    getOwnerSpan: u(function() {
                        return m.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: u(function() {
                        return m.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        has_close_icon: !0
                    },
                    events: {
                        _handleError: u(function(v) {
                            e.handleError(v)
                        }, "_handleError"),
                        closeEvent$Action: u(function() {
                            return Promise.resolve().then(function() {
                                var v = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                                return e.onClickOkWithdrawalPaused$Action(e.callContext(v))
                            })
                        }, "closeEvent$Action")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: t,
                        uuid: "104",
                        alias: "6"
                    },
                    _widgetRecordProvider: o,
                    placeholders: {
                        content: new st(function() {
                            return [d.createElement(y, {
                                align: 0,
                                animate: !1,
                                style: "reset-password__container__wrapper display-flex flex-direction-column overflow-hidden ",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "105"
                                },
                                _widgetRecordProvider: o
                            }, d.createElement(y, {
                                align: 0,
                                animate: !1,
                                style: "display-flex align-items-center justify-content-center flex-direction-column flex-grow",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "106"
                                },
                                _widgetRecordProvider: o
                            }, d.createElement(F, {
                                image: N.VersionedURL.getVersionedUrl("img/uae.yellow_information.svg"),
                                type: 0,
                                _idProps: {
                                    service: t,
                                    uuid: "107"
                                },
                                _widgetRecordProvider: o
                            }), d.createElement(D, {
                                extendedProperties: {
                                    style: "color: var(--text-brandPrimaryProminent, #00080A); font-size: 24px; font-weight: 900; text-align: center;"
                                },
                                style: "margin-top-m margin-bottom-s",
                                text: [p(c("xRfTyxZiSke3MhrYkMGHtQ#Value", "Withdrawal paused"))],
                                _idProps: {
                                    service: t,
                                    uuid: "108"
                                },
                                _widgetRecordProvider: o
                            }), d.createElement(y, {
                                align: 0,
                                animate: !1,
                                style: "text-align-center margin-bottom-m",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "109"
                                },
                                _widgetRecordProvider: o
                            }, d.createElement(w, {
                                style: "font-size-base",
                                value: O.resolve(x.TranslationsService).getMessage("hADYsUGA7kS4G_htqLR30w#ValueExpression.-578733866.1", "Withdraw paused due to an ") + s.variables.withdrawal_pause_typeVar + O.resolve(x.TranslationsService).getMessage("hADYsUGA7kS4G_htqLR30w#ValueExpression.-2109688103.1", " change. You can withdraw again after"),
                                _idProps: {
                                    service: t,
                                    uuid: "110"
                                },
                                _widgetRecordProvider: o
                            }), d.createElement(w, {
                                extendedProperties: {
                                    style: "margin-right: 0;"
                                },
                                gridProperties: {
                                    marginLeft: "0"
                                },
                                value: " ",
                                _idProps: {
                                    service: t,
                                    uuid: "111"
                                },
                                _widgetRecordProvider: o
                            }), d.createElement(w, {
                                extendedProperties: {
                                    dir: "ltr"
                                },
                                gridProperties: {
                                    marginLeft: "0"
                                },
                                style: "font-size-base",
                                value: s.getCachedValue(t.getId("9TKFdVTLT0iYhxDbfcGoXg.Value"), function() {
                                    return T.getTimeLeft$Action(s.variables.withdrawal_cooloffVar, n).timeLeftStringOut
                                }, function() {
                                    return s.variables.withdrawal_cooloffVar
                                }),
                                _idProps: {
                                    service: t,
                                    uuid: "112"
                                },
                                _widgetRecordProvider: o
                            }), d.createElement(w, {
                                extendedProperties: {
                                    style: "margin-right: 0;"
                                },
                                gridProperties: {
                                    marginLeft: "0"
                                },
                                value: ".",
                                _idProps: {
                                    service: t,
                                    uuid: "113"
                                },
                                _widgetRecordProvider: o
                            }))))]
                        }),
                        footer: new st(function() {
                            return [d.createElement(y, {
                                align: 0,
                                animate: !1,
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "calc(100% - 2rem)"
                                },
                                style: "display-flex justify-content-center margin-top-m absolute bottom-4 left-4",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "114"
                                },
                                _widgetRecordProvider: o
                            }, d.createElement(W, {
                                enabled: !0,
                                isDefault: !1,
                                onClick: u(function() {
                                    return Promise.resolve().then(function() {
                                        var v = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                                        return e.onClickOkWithdrawalPaused$Action(e.callContext(v))
                                    })
                                }, "onClick"),
                                style: "btn btn-primary border-radius-rounded",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "115"
                                },
                                _widgetRecordProvider: o
                            }, d.createElement(D, {
                                extendedProperties: {
                                    style: "font-size: 16px;"
                                },
                                text: [p(c("AFYYNcdhOUyhymWUS9zbJQ#Value", "OK"))],
                                _idProps: {
                                    service: t,
                                    uuid: "116"
                                },
                                _widgetRecordProvider: o
                            })))]
                        })
                    },
                    _dependencies: [i(s.variables.withdrawal_cooloffVar), i(s.variables.withdrawal_pause_typeVar)]
                }))]
            })))
        }, {
            topLevelComponent: !1,
            getAttributes: u(function() {
                return {
                    codeFunction: "WalletDetailsBlock",
                    functionKey: "ad7b5f49-f5b9-4967-8e30-bc727999d5b5",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "CashierFlow.WalletDetailsBlock",
            modelFactory: ht,
            controllerFactory: Pt
        });
        return b.getCssDependencies = function() {
            return ["css/uae.CashierFlow.WalletDetailsBlock.css", "css/OutSystemsReactWidgets.css"]
        }, b.getJsDependencies = function() {
            return []
        }, b.getBlocks = function() {
            return [We, ot, De, $e, Le, ke]
        }, b
    }, "componentFactory"),
    we = Nt();
var Rt = I.PlaceholderContent,
    mi = I.IteratorPlaceholderContent,
    It = u(function() {
        var b = dt(function(_) {
            var s = _.model,
                e = _.controller,
                t = _.controller.idService,
                r = e.validationService,
                n = e.callContext(),
                i = Y,
                c = z,
                g = {
                    props: _,
                    validateWidget: u(function(v) {
                        _.validateWidget(_, v)
                    }, "validateWidget")
                },
                o = s,
                A = te,
                p = ee,
                m = q();
            return G.createElement("div", _.rootNodeProperties, A(se.isDesktop$Action(n).isDesktopOut, !1, this, function() {
                return [G.createElement(Fe, {
                    getOwnerSpan: u(function() {
                        return m.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: u(function() {
                        return m.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        MenuRef: "wallets",
                        HidePanel: s.variables.hidePanelVar
                    },
                    events: {
                        _handleError: u(function(v) {
                            e.handleError(v)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: t,
                        uuid: "0",
                        alias: "1"
                    },
                    _widgetRecordProvider: o,
                    placeholders: {
                        content: new Rt(function() {
                            return [G.createElement(y, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "display: flex; height: 100%; justify-content: center; overflow: auto;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "1"
                                },
                                _widgetRecordProvider: o
                            }, G.createElement(y, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "max-width: 608px; min-width: 608px;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "2"
                                },
                                _widgetRecordProvider: o
                            }, G.createElement(we, {
                                getOwnerSpan: u(function() {
                                    return m.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: u(function() {
                                    return m.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {},
                                events: {
                                    _handleError: u(function(v) {
                                        e.handleError(v)
                                    }, "_handleError"),
                                    hidePanelEvent$Action: u(function(v) {
                                        var R = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                                        e.hidePanelHandler$Action(v, e.callContext(R))
                                    }, "hidePanelEvent$Action")
                                },
                                _validationProps: {
                                    validationService: r
                                },
                                _idProps: {
                                    service: t,
                                    uuid: "3",
                                    alias: "2"
                                },
                                _widgetRecordProvider: o,
                                _dependencies: []
                            })))]
                        })
                    },
                    _dependencies: []
                })]
            }, function() {
                return [G.createElement(Ie, {
                    getOwnerSpan: u(function() {
                        return m.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: u(function() {
                        return m.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        HidePanel: s.variables.hidePanelVar,
                        active_nav: "wallets"
                    },
                    events: {
                        _handleError: u(function(v) {
                            e.handleError(v)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: t,
                        uuid: "4",
                        alias: "3"
                    },
                    _widgetRecordProvider: o,
                    placeholders: {
                        content: new Rt(function() {
                            return [G.createElement(we, {
                                getOwnerSpan: u(function() {
                                    return m.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: u(function() {
                                    return m.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {},
                                events: {
                                    _handleError: u(function(v) {
                                        e.handleError(v)
                                    }, "_handleError"),
                                    hidePanelEvent$Action: u(function(v) {
                                        var R = typeof n != "undefined" && n !== null ? n.clone() : e.callContext().clone();
                                        e.hidePanelHandler$Action(v, e.callContext(R))
                                    }, "hidePanelEvent$Action")
                                },
                                _validationProps: {
                                    validationService: r
                                },
                                _idProps: {
                                    service: t,
                                    uuid: "5",
                                    alias: "4"
                                },
                                _widgetRecordProvider: o,
                                _dependencies: []
                            })]
                        })
                    },
                    _dependencies: []
                })]
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: u(function() {
                return {
                    codeFunction: "Wallet",
                    functionKey: "349eb115-b7e8-4c91-b99f-64b6ec26f2d8",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "MainFlow.Wallet",
            modelFactory: Ze,
            controllerFactory: Ge,
            getTitle: u(function(_) {
                var s = _.model,
                    e = _.controller,
                    t = _.controller.idService,
                    r = e.validationService,
                    n = e.callContext(),
                    i = Y,
                    c = z,
                    g = {
                        props: _,
                        validateWidget: u(function(o) {
                            _.validateWidget(_, o)
                        }, "validateWidget")
                    };
                return O.resolve(x.TranslationsService).getMessage("FbGeNOi3kUy5n2S27Cby2A#TitleExpression.-1751033037.1", "Wallet | Deriv")
            }, "getTitle")
        });
        return b.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, b.getJsDependencies = function() {
            return []
        }, b.getBlocks = function() {
            return [Fe, we, Ie]
        }, b
    }, "componentFactory"),
    Ht = It();
export {
    Ge as controllerModule, Ze as modelModule, Ht as viewModule, Ne as webFlowControllerModule
};