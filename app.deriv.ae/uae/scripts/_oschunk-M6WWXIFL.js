import {
    a as ie
} from "./_oschunk-ACEDINHZ.js";
import {
    a as re
} from "./_oschunk-SFRA456L.js";
import "./_oschunk-L6JZD7VU.js";
import {
    a as ne
} from "./_oschunk-SNXHD6UR.js";
import "./_oschunk-RVD4FS25.js";
import "./_oschunk-4SYOXZNK.js";
import "./_oschunk-YB2J7GTX.js";
import "./_oschunk-HFW3V2GI.js";
import "./_oschunk-LLAHPWP3.js";
import "./_oschunk-YVFTECWM.js";
import {
    f as g,
    h as x,
    i as te,
    j as Ee,
    n as z,
    u as Te
} from "./_oschunk-VR5BNL2K.js";
import {
    a as Se,
    g as D,
    m as G,
    n as Ce,
    o as we,
    q as U,
    r as q,
    s as $,
    t as W
} from "./_oschunk-4VHUVDBV.js";
import {
    a as M
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    A as be,
    Ca as H,
    La as B,
    Qb as he,
    Sb as E,
    Ua as Q,
    _a as ee,
    a as w,
    ib as N,
    oa as O,
    r as P,
    ub as C
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as T,
    c as u,
    e as pe,
    m as R,
    n as L,
    w as S
} from "./_oschunk-M5BUVJ72.js";
var Fe = {
        "8Q1V1ghBR0WDaFV442P+Tg#Title": "\u062A\u062D\u0648\u064A\u0644 \u0627\u0644\u062D\u0633\u0627\u0628 | Deriv",
        "8Q1V1ghBR0WDaFV442P+Tg#TitleExpression.-573097288.1": "\u062A\u062D\u0648\u064A\u0644 \u0627\u0644\u062D\u0633\u0627\u0628 | Deriv"
    },
    Pe = {
        "ar-001": {
            translations: Fe,
            isRTL: !0
        }
    };
var p = T; {
    let A = class A extends p.Controller.BaseViewController {
        constructor(e, t, r) {
            super(e, t, r, Pe);
            var a = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _desktopProcessLayoutBackBtnEvent$Action() {
            return this.hasOwnProperty("__desktopProcessLayoutBackBtnEvent$Action") || (this.__desktopProcessLayoutBackBtnEvent$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    a = this.idService;
                return p.Logger.startActiveSpan("DesktopProcessLayoutBackBtnEvent", function(i) {
                    i && (i.setAttribute("code.function", "DesktopProcessLayoutBackBtnEvent"), i.setAttribute("outsystems.function.key", "8944a23e-1f89-4173-8ef8-9a9637116150"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return r.ensureControllerAlive("DesktopProcessLayoutBackBtnEvent"), e = r.callContext(e), p.Navigation.navigateBack(null, e, !0)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__desktopProcessLayoutBackBtnEvent$Action
        }
        set _desktopProcessLayoutBackBtnEvent$Action(e) {
            this.__desktopProcessLayoutBackBtnEvent$Action = e
        }
        get _desktopProcessLayoutCloseBtnEvent$Action() {
            return this.hasOwnProperty("__desktopProcessLayoutCloseBtnEvent$Action") || (this.__desktopProcessLayoutCloseBtnEvent$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    a = this.idService;
                return p.Logger.startActiveSpan("DesktopProcessLayoutCloseBtnEvent", function(i) {
                    i && (i.setAttribute("code.function", "DesktopProcessLayoutCloseBtnEvent"), i.setAttribute("outsystems.function.key", "94df5f04-91bc-486a-a61a-45d313cf324f"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("DesktopProcessLayoutCloseBtnEvent"), e = r.callContext(e);
                        var s = new p.DataTypes.VariableHolder(new(p.Controller.BaseController.getJSONDeserializeOutputType(Q)));
                        return s.value.dataOut = p.JSONUtils.deserializeFromJSON(C.gettransfer_init(), Q, !1), s.value.dataOut.wallet_idAttr.gt(p.BuiltinFunctions.integerToLongInteger(0)) ? p.Navigation.navigateTo(p.Navigation.generateScreenURL("uae", "wallet", {}), p.Transitions.createTransition(p.Transitions.TransitionAnimation.Default), e, !0) : (E.setAccountDetailsInputs$Action((function() {
                            var y = new be;
                            return y.mt5_typeAttr = (C.getSelectedMT5AccountType() === "standard" ? w.mT5Types.standard : w.mT5Types.swapFree).toString(), y.is_demoAttr = !1, y.account_idAttr = s.value.dataOut.account_idAttr, y
                        })(), e), p.Navigation.navigateTo(p.Navigation.generateScreenURL("uae", "mt5/account-details", {
                            is_demo: p.DataConversion.ServerDataConverter.to(!1, p.DataTypes.DataTypes.Boolean)
                        }), p.Transitions.createTransition(p.Transitions.TransitionAnimation.Default), e, !0))
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__desktopProcessLayoutCloseBtnEvent$Action
        }
        set _desktopProcessLayoutCloseBtnEvent$Action(e) {
            this.__desktopProcessLayoutCloseBtnEvent$Action = e
        }
        desktopProcessLayoutBackBtnEvent$Action(e) {
            var t = this.controller;
            return p.Logger.startActiveSpan("DesktopProcessLayoutBackBtnEvent__proxy", function(r) {
                r && (r.setAttribute("code.function", "DesktopProcessLayoutBackBtnEvent"), r.setAttribute("outsystems.function.key", "8944a23e-1f89-4173-8ef8-9a9637116150"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._desktopProcessLayoutBackBtnEvent$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        desktopProcessLayoutCloseBtnEvent$Action(e) {
            var t = this.controller;
            return p.Logger.startActiveSpan("DesktopProcessLayoutCloseBtnEvent__proxy", function(r) {
                r && (r.setAttribute("code.function", "DesktopProcessLayoutCloseBtnEvent"), r.setAttribute("outsystems.function.key", "94df5f04-91bc-486a-a61a-45d313cf324f"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._desktopProcessLayoutCloseBtnEvent$Action, e)
                } finally {
                    r && r.end()
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
                return ie.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return E.defaultTimeout
        }
    };
    u(A, "ControllerInner");
    let b = A;
    Oe = b
}
var Oe, oe = new p.Controller.ControllerFactory(Oe, M);
var V = pe(Se());
var _ = T,
    ce = class ce extends _.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("transfer_data", "transfer_dataVar", "transfer_data", !0, !1, _.DataTypes.DataTypes.Record, function() {
                return _.DataTypes.ImmutableBase.getData(new ee)
            }, !1, ee), this.attr("filtered_wallet_list", "filtered_wallet_listVar", "filtered_wallet_list", !0, !1, _.DataTypes.DataTypes.RecordList, function() {
                return _.DataTypes.ImmutableBase.getData(new(_.GenericTypeCache.getGenericList(P)))
            }, !1, _.GenericTypeCache.getGenericList(P)), this.attr("filtered_account_list", "filtered_account_listVar", "filtered_account_list", !0, !1, _.DataTypes.DataTypes.RecordList, function() {
                return _.DataTypes.ImmutableBase.getData(new(_.GenericTypeCache.getGenericList(O)))
            }, !1, _.GenericTypeCache.getGenericList(O)), this.attr("wallet_list", "wallet_listVar", "wallet_list", !0, !1, _.DataTypes.DataTypes.RecordList, function() {
                return _.DataTypes.ImmutableBase.getData(new(_.GenericTypeCache.getGenericList(P)))
            }, !1, _.GenericTypeCache.getGenericList(P)), this.attr("account_list", "account_listVar", "account_list", !0, !1, _.DataTypes.DataTypes.RecordList, function() {
                return _.DataTypes.ImmutableBase.getData(new(_.GenericTypeCache.getGenericList(O)))
            }, !1, _.GenericTypeCache.getGenericList(O)), this.attr("is_wallet_loading", "is_wallet_loadingVar", "is_wallet_loading", !0, !1, _.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("is_accounts_loading", "is_accounts_loadingVar", "is_accounts_loading", !0, !1, _.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1)].concat(_.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
u(ce, "VariablesRecord");
var J = ce;
J.init();
var ue = class ue extends _.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
u(ue, "WidgetsRecord");
var se = ue,
    de = class de extends _.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return J
        }
        static getWidgetsRecordConstructor() {
            return se
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(A) {}
    };
u(de, "Model");
var j = de;
j._hasValidationWidgetsValue = void 0;
var xe = new _.Model.ModelFactory(j);
var I = T,
    ye = class ye extends I.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(I.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
u(ye, "VariablesRecord");
var K = ye;
K.init();
var me = class me extends I.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
u(me, "WidgetsRecord");
var fe = me,
    k = class k extends I.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return K
        }
        static getWidgetsRecordConstructor() {
            return fe
        }
        static get hasValidationWidgets() {
            return k._hasValidationWidgetsValue === void 0 && (k._hasValidationWidgetsValue = void 0 || void 0 || void 0), k._hasValidationWidgetsValue
        }
        setInputs(A) {}
    };
u(k, "Model");
var X = k;
X._hasValidationWidgetsValue = void 0;
var ve = new I.Model.ModelFactory(X);
var m = pe(Se());
var $e = {
        "9q2A3huAxEyxrssffKuZXQ#ValueExpression.1017368613.1": "\u062D\u0633\u0627\u0628\u0627\u062A \u0627\u0644\u062A\u062F\u0627\u0648\u0644",
        "kwjFZXeAmE+1gXqoZFApYA#Value": "\u0627\u0644\u0645\u062D\u0627\u0641\u0638",
        "UCST+7rTq0GYRjlq95JCDA#ValueExpression.-650461677.1": "\u0625\u0631\u0633\u0627\u0644 \u0625\u0644\u0649",
        "UCST+7rTq0GYRjlq95JCDA#ValueExpression.-666848505.1": "\u0627\u0633\u062A\u0644\u0627\u0645 \u0645\u0646"
    },
    Le = {
        "ar-001": {
            translations: $e,
            isRTL: !0
        }
    };

function Ae(b, A, o) {
    let e = b.GetWalletList(),
        t = b.GetAccountList();
    Promise.all([e, t])
}
u(Ae, "default");
var n = T; {
    let A = class A extends n.Controller.BaseViewController {
        constructor(e, t, r) {
            super(e, t, r, Le);
            var a = this.controller;
            this.clientActionProxies = {
                getWalletList$Action: u(function() {
                    return a.executeActionInsideJSNode(a._getWalletList$Action.bind(a), a.callContext(), function(i) {
                        return {}
                    }, function() {}, "GetWalletList")
                }, "getWalletList$Action"),
                getAccountList$Action: u(function() {
                    return a.executeActionInsideJSNode(a._getAccountList$Action.bind(a), a.callContext(), function(i) {
                        return {}
                    }, function() {}, "GetAccountList")
                }, "getAccountList$Action")
            }, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get getAccounts$ServerAction() {
            return this.hasOwnProperty("_getAccounts$ServerAction") || (this._getAccounts$ServerAction = function(e, t, r, a, i) {
                var s = this.controller;
                return n.Logger.startActiveSpan("GetAccounts", function(y) {
                    return y && (y.setAttribute("code.function", "GetAccounts"), y.setAttribute("outsystems.function.key", "9a67846a-fd6e-4da7-9b7f-473202634306"), y.setAttribute("outsystems.function.owner.name", "uae"), y.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), y.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), n.Flow.tryFinally(function() {
                        var l = {
                            authorization: n.DataConversion.ServerDataConverter.to(e, n.DataTypes.DataTypes.Text),
                            with_balance: n.DataConversion.ServerDataConverter.to(t, n.DataTypes.DataTypes.Text),
                            real_only: n.DataConversion.ServerDataConverter.to(r, n.DataTypes.DataTypes.Text),
                            force_api_fetch: n.DataConversion.ServerDataConverter.to(a, n.DataTypes.DataTypes.Text)
                        };
                        return s.callServerAction("GetAccounts", "screenservices/uae/TransferFlow/TransferAccountBlock/ActionGetAccounts", "02fkJ+ShY4j2DDsRxspdlw", l, s.callContext(i), void 0, void 0, !0).then(function(h) {
                            var c = new(s.constructor.getVariableGroupType("uae.TransferFlow.TransferAccountBlock$ActionGetAccounts"));
                            return c.responseOut = n.DataConversion.ServerDataConverter.from(h.Response, N), c
                        })
                    }, function() {
                        y && y.end()
                    })
                }, 0)
            }), this._getAccounts$ServerAction
        }
        set getAccounts$ServerAction(e) {
            this._getAccounts$ServerAction = e
        }
        get getWalletList$ServerAction() {
            return this.hasOwnProperty("_getWalletList$ServerAction") || (this._getWalletList$ServerAction = function(e, t) {
                var r = this.controller;
                return n.Logger.startActiveSpan("GetWalletList", function(a) {
                    return a && (a.setAttribute("code.function", "GetWalletList"), a.setAttribute("outsystems.function.key", "457611d5-9b1a-4faf-a88a-d21184a30f68"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), n.Flow.tryFinally(function() {
                        var i = {
                            authorization: n.DataConversion.ServerDataConverter.to(e, n.DataTypes.DataTypes.Text)
                        };
                        return r.callServerAction("GetWalletList", "screenservices/uae/TransferFlow/TransferAccountBlock/ActionGetWalletList", "mBL53KMNBzvxE1nMqxclWg", i, r.callContext(t), void 0, void 0, !0).then(function(s) {
                            var y = new(r.constructor.getVariableGroupType("uae.TransferFlow.TransferAccountBlock$ActionGetWalletList"));
                            return y.responseOut = n.DataConversion.ServerDataConverter.from(s.Response, H), y
                        })
                    }, function() {
                        a && a.end()
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
        get _getAccountList$Action() {
            return this.hasOwnProperty("__getAccountList$Action") || (this.__getAccountList$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    a = this.idService;
                return n.Logger.startActiveSpan("GetAccountList", function(i) {
                    return i && (i.setAttribute("code.function", "GetAccountList"), i.setAttribute("outsystems.function.key", "153a8ef6-68ea-4b90-a5e8-50f4567963ea"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                        r.ensureControllerAlive("GetAccountList"), e = r.callContext(e);
                        var s = new n.DataTypes.VariableHolder,
                            y = new n.DataTypes.VariableHolder,
                            l = new n.DataTypes.VariableHolder,
                            h = new n.DataTypes.VariableHolder;
                        return n.Flow.executeAsyncFlow(function() {
                            return t.variables.is_accounts_loadingVar = !0, l.value = E.getAuth$Action(e), t.flush(), r.getAccounts$ServerAction(l.value.tokenOut, "true", "true", "true", e).then(function(c) {
                                s.value = c
                            }).then(function() {
                                E.updateAccountListCache$Action(s.value.responseOut.dataAttr, e), y.value = n.SystemActions.listFilter(s.value.responseOut.dataAttr, function(c) {
                                    return c.platformAttr.platform_typeAttr === "real"
                                }, e), t.variables.account_listVar = y.value.filteredListOut, h.value = n.SystemActions.listFilter(t.variables.account_listVar, function(c) {
                                    return C.gettransfer_type() === w.transferTypes.send ? !c.idAttr.equals(t.variables.transfer_dataVar.fromAttr.idAttr) : !c.idAttr.equals(t.variables.transfer_dataVar.toAttr.idAttr) && (n.BuiltinFunctions.textToDecimalValidate(c.balanceAttr) ? n.BuiltinFunctions.textToDecimal(c.balanceAttr).gt(n.BuiltinFunctions.integerToDecimal(0)) : !1)
                                }, e)
                            }).then(function() {
                                C.gettransfer_type() === w.transferTypes.receive && t.variables.transfer_dataVar.toAttr.typeAttr === "account" || C.gettransfer_type() === w.transferTypes.send && t.variables.transfer_dataVar.fromAttr.typeAttr === "account" || (t.variables.filtered_account_listVar = h.value.filteredListOut), t.variables.is_accounts_loadingVar = !1
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
        get _onClickAccount$Action() {
            return this.hasOwnProperty("__onClickAccount$Action") || (this.__onClickAccount$Action = function(e, t) {
                var r = this.model,
                    a = this.controller,
                    i = this.idService;
                return n.Logger.startActiveSpan("OnClickAccount", function(s) {
                    s && (s.setAttribute("code.function", "OnClickAccount"), s.setAttribute("outsystems.function.key", "30d74df0-f502-47e1-b609-e3928f5a50e2"), s.setAttribute("outsystems.function.owner.name", "uae"), s.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        a.ensureControllerAlive("OnClickAccount"), t = a.callContext(t);
                        var y = new n.DataTypes.VariableHolder(new(a.constructor.getVariableGroupType("uae.TransferFlow.TransferAccountBlock.OnClickAccount$vars")));
                        return y.value.accountInLocal = e.clone(), C.gettransfer_type() === w.transferTypes.send ? (r.variables.transfer_dataVar.toAttr.idAttr = y.value.accountInLocal.idAttr, r.variables.transfer_dataVar.toAttr.typeAttr = "account") : (r.variables.transfer_dataVar.fromAttr.idAttr = y.value.accountInLocal.idAttr, r.variables.transfer_dataVar.fromAttr.typeAttr = "account"), a._updateData$Action(t), n.Navigation.navigateTo(n.Navigation.generateScreenURL("uae", "transfer-amount", {}), n.Transitions.createTransition(n.Transitions.TransitionAnimation.None), t, !0)
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__onClickAccount$Action
        }
        set _onClickAccount$Action(e) {
            this.__onClickAccount$Action = e
        }
        get _fetchAccounts$Action() {
            return this.hasOwnProperty("__fetchAccounts$Action") || (this.__fetchAccounts$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    a = this.idService;
                return n.Logger.startActiveSpan("FetchAccounts", function(i) {
                    i && (i.setAttribute("code.function", "FetchAccounts"), i.setAttribute("outsystems.function.key", "3784d88f-1e2c-49d8-83c6-511028a32a85"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("FetchAccounts"), e = r.callContext(e), n.Logger.startActiveSpan("ParallelCalls", function(s) {
                            s && (s.setAttribute("code.function", "ParallelCalls"), s.setAttribute("outsystems.function.key", "06883287-95cf-4957-aa0a-9c272b0ffbdf"), s.setAttribute("outsystems.function.owner.name", "uae"), s.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return r.safeExecuteJSNode(Ae, "ParallelCalls", "FetchAccounts", null, function(y) {}, {
                                    GetWalletList: r.clientActionProxies.getWalletList$Action,
                                    GetAccountList: r.clientActionProxies.getAccountList$Action
                                }, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__fetchAccounts$Action
        }
        set _fetchAccounts$Action(e) {
            this.__fetchAccounts$Action = e
        }
        get _updateData$Action() {
            return this.hasOwnProperty("__updateData$Action") || (this.__updateData$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    a = this.idService;
                return n.Logger.startActiveSpan("UpdateData", function(i) {
                    i && (i.setAttribute("code.function", "UpdateData"), i.setAttribute("outsystems.function.key", "37d8917f-faab-43bf-88cc-5f14a9d89b6e"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("UpdateData"), e = r.callContext(e);
                        var s = new n.DataTypes.VariableHolder,
                            y = new n.DataTypes.VariableHolder,
                            l = new n.DataTypes.VariableHolder,
                            h = new n.DataTypes.VariableHolder;
                        t.variables.transfer_dataVar.from_amountAttr = n.BuiltinFunctions.integerToDecimal(n.BuiltinFunctions.nullIdentifier()), t.variables.transfer_dataVar.fromAttr.typeAttr === "wallet" ? (l.value = n.SystemActions.listIndexOf(t.variables.wallet_listVar, function(c) {
                            return c.idAttr.equals(t.variables.transfer_dataVar.fromAttr.idAttr)
                        }, e), l.value.positionOut > -1 && (t.variables.transfer_dataVar.fromAttr = n.DataConversion.JSConversions.typeConvertRecord(t.variables.wallet_listVar.getItem(l.value.positionOut), new B, function(c, f) {
                            return f.idAttr = c.idAttr, f.currencyAttr = c.currencyAttr, f.balanceAttr = c.balanceAttr, f.typeAttr = t.variables.transfer_dataVar.fromAttr.typeAttr, f.logoAttr = "/" + n.BuiltinFunctions.getAppName() + "/img/" + n.BuiltinFunctions.getAppName() + ".currency" + n.BuiltinFunctions.toLower(c.currencyAttr) + ".svg", f.nameAttr = c.currencyAttr + " wallet", f
                        }))) : (s.value = n.SystemActions.listIndexOf(t.variables.account_listVar, function(c) {
                            return c.idAttr.equals(t.variables.transfer_dataVar.fromAttr.idAttr)
                        }, e), s.value.positionOut > -1 && (t.variables.transfer_dataVar.fromAttr = n.DataConversion.JSConversions.typeConvertRecord(t.variables.account_listVar.getItem(s.value.positionOut), new B, function(c, f) {
                            return f.idAttr = c.idAttr, f.currencyAttr = c.currencyAttr, f.balanceAttr = n.BuiltinFunctions.textToDecimalValidate(c.balanceAttr) ? n.BuiltinFunctions.textToDecimal(c.balanceAttr) : n.BuiltinFunctions.integerToDecimal(n.BuiltinFunctions.nullIdentifier()), f.typeAttr = t.variables.transfer_dataVar.fromAttr.typeAttr, f.logoAttr = n.BuiltinFunctions.toLower(c.metadataAttr.typeAttr) === "standard" ? "img/" + n.BuiltinFunctions.getAppName() + ".standard_mt5.svg" : "img/" + n.BuiltinFunctions.getAppName() + ".swap_free_mt5.svg", f.nameAttr = c.platformAttr.providerAttr + " " + n.BuiltinFunctions.toUpper(n.BuiltinFunctions.substr(c.metadataAttr.typeAttr, 0, 1)) + n.BuiltinFunctions.substr(c.metadataAttr.typeAttr, 1, n.BuiltinFunctions.length(c.metadataAttr.typeAttr) - 1) + " account", f
                        }))), t.variables.transfer_dataVar.toAttr.typeAttr === "wallet" ? (h.value = n.SystemActions.listIndexOf(t.variables.wallet_listVar, function(c) {
                            return c.idAttr.equals(t.variables.transfer_dataVar.toAttr.idAttr)
                        }, e), h.value.positionOut > -1 && (t.variables.transfer_dataVar.toAttr = n.DataConversion.JSConversions.typeConvertRecord(t.variables.wallet_listVar.getItem(h.value.positionOut), new B, function(c, f) {
                            return f.idAttr = c.idAttr, f.currencyAttr = c.currencyAttr, f.balanceAttr = c.balanceAttr, f.typeAttr = t.variables.transfer_dataVar.toAttr.typeAttr, f.logoAttr = "/" + n.BuiltinFunctions.getAppName() + "/img/" + n.BuiltinFunctions.getAppName() + ".currency" + n.BuiltinFunctions.toLower(c.currencyAttr) + ".svg", f.nameAttr = c.currencyAttr + " wallet", f
                        }))) : (y.value = n.SystemActions.listIndexOf(t.variables.account_listVar, function(c) {
                            return c.idAttr.equals(t.variables.transfer_dataVar.toAttr.idAttr)
                        }, e), y.value.positionOut > -1 && (t.variables.transfer_dataVar.toAttr = n.DataConversion.JSConversions.typeConvertRecord(t.variables.account_listVar.getItem(y.value.positionOut), new B, function(c, f) {
                            return f.idAttr = c.idAttr, f.currencyAttr = c.currencyAttr, f.balanceAttr = n.BuiltinFunctions.textToDecimalValidate(c.balanceAttr) ? n.BuiltinFunctions.textToDecimal(c.balanceAttr) : n.BuiltinFunctions.integerToDecimal(n.BuiltinFunctions.nullIdentifier()), f.typeAttr = t.variables.transfer_dataVar.toAttr.typeAttr, f.logoAttr = n.BuiltinFunctions.toLower(c.metadataAttr.typeAttr) === "standard" ? "img/" + n.BuiltinFunctions.getAppName() + ".standard_mt5.svg" : "img/" + n.BuiltinFunctions.getAppName() + ".swap_free_mt5.svg", f.nameAttr = c.platformAttr.providerAttr + " " + n.BuiltinFunctions.toUpper(n.BuiltinFunctions.substr(c.metadataAttr.typeAttr, 0, 1)) + n.BuiltinFunctions.substr(c.metadataAttr.typeAttr, 1, n.BuiltinFunctions.length(c.metadataAttr.typeAttr) - 1) + " account", f
                        }))), E.updateTransferData$Action(t.variables.transfer_dataVar, e)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__updateData$Action
        }
        set _updateData$Action(e) {
            this.__updateData$Action = e
        }
        get _onClickWallet$Action() {
            return this.hasOwnProperty("__onClickWallet$Action") || (this.__onClickWallet$Action = function(e, t) {
                var r = this.model,
                    a = this.controller,
                    i = this.idService;
                return n.Logger.startActiveSpan("OnClickWallet", function(s) {
                    s && (s.setAttribute("code.function", "OnClickWallet"), s.setAttribute("outsystems.function.key", "44675f90-991f-46a4-8275-793e1ad96440"), s.setAttribute("outsystems.function.owner.name", "uae"), s.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        a.ensureControllerAlive("OnClickWallet"), t = a.callContext(t);
                        var y = new n.DataTypes.VariableHolder(new(a.constructor.getVariableGroupType("uae.TransferFlow.TransferAccountBlock.OnClickWallet$vars")));
                        return y.value.walletInLocal = e.clone(), C.gettransfer_type() === w.transferTypes.send ? (r.variables.transfer_dataVar.toAttr.idAttr = y.value.walletInLocal.idAttr, r.variables.transfer_dataVar.toAttr.typeAttr = "wallet") : (r.variables.transfer_dataVar.fromAttr.idAttr = y.value.walletInLocal.idAttr, r.variables.transfer_dataVar.fromAttr.typeAttr = "wallet"), a._updateData$Action(t), n.Navigation.navigateTo(n.Navigation.generateScreenURL("uae", "transfer-amount", {}), n.Transitions.createTransition(n.Transitions.TransitionAnimation.None), t, !0)
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__onClickWallet$Action
        }
        set _onClickWallet$Action(e) {
            this.__onClickWallet$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    a = this.idService;
                return n.Logger.startActiveSpan("OnReady", function(i) {
                    i && (i.setAttribute("code.function", "OnReady"), i.setAttribute("outsystems.function.key", "82eb8078-467e-498a-9553-9138de509e8e"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnReady"), e = r.callContext(e);
                        var s = new n.DataTypes.VariableHolder;
                        s.value = E.getTransferData$Action(e), t.variables.transfer_dataVar = s.value.transfer_dataOut, r._fetchAccounts$Action(e)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _getWalletList$Action() {
            return this.hasOwnProperty("__getWalletList$Action") || (this.__getWalletList$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    a = this.idService;
                return n.Logger.startActiveSpan("GetWalletList", function(i) {
                    return i && (i.setAttribute("code.function", "GetWalletList"), i.setAttribute("outsystems.function.key", "e68a355e-246b-4f40-9e65-6c5c9d3de733"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                        r.ensureControllerAlive("GetWalletList"), e = r.callContext(e);
                        var s = new n.DataTypes.VariableHolder,
                            y = new n.DataTypes.VariableHolder,
                            l = new n.DataTypes.VariableHolder;
                        return n.Flow.executeAsyncFlow(function() {
                            return t.variables.is_wallet_loadingVar = !0, y.value = E.getAuth$Action(e), t.flush(), r.getWalletList$ServerAction(y.value.tokenOut, e).then(function(h) {
                                s.value = h
                            }).then(function() {
                                E.updateWalletListCache$Action(s.value.responseOut.dataAttr.walletsAttr, e), t.variables.wallet_listVar = s.value.responseOut.dataAttr.walletsAttr, l.value = n.SystemActions.listFilter(t.variables.wallet_listVar, function(h) {
                                    return C.gettransfer_type() === w.transferTypes.send ? !h.idAttr.equals(t.variables.transfer_dataVar.fromAttr.idAttr) : !h.idAttr.equals(t.variables.transfer_dataVar.toAttr.idAttr) && h.balanceAttr.gt(n.BuiltinFunctions.integerToDecimal(0))
                                }, e), t.variables.filtered_wallet_listVar = l.value.filteredListOut, t.variables.is_wallet_loadingVar = !1
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
        getAccountList$Action(e) {
            var t = this.controller;
            return n.Logger.startActiveSpan("GetAccountList__proxy", function(r) {
                return r && (r.setAttribute("code.function", "GetAccountList"), r.setAttribute("outsystems.function.key", "153a8ef6-68ea-4b90-a5e8-50f4567963ea"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._getAccountList$Action, e)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        onClickAccount$Action(e, t) {
            var r = this.controller;
            return n.Logger.startActiveSpan("OnClickAccount__proxy", function(a) {
                a && (a.setAttribute("code.function", "OnClickAccount"), a.setAttribute("outsystems.function.key", "30d74df0-f502-47e1-b609-e3928f5a50e2"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onClickAccount$Action, t, e)
                } finally {
                    a && a.end()
                }
            }, 0)
        }
        fetchAccounts$Action(e) {
            var t = this.controller;
            return n.Logger.startActiveSpan("FetchAccounts__proxy", function(r) {
                r && (r.setAttribute("code.function", "FetchAccounts"), r.setAttribute("outsystems.function.key", "3784d88f-1e2c-49d8-83c6-511028a32a85"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._fetchAccounts$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        updateData$Action(e) {
            var t = this.controller;
            return n.Logger.startActiveSpan("UpdateData__proxy", function(r) {
                r && (r.setAttribute("code.function", "UpdateData"), r.setAttribute("outsystems.function.key", "37d8917f-faab-43bf-88cc-5f14a9d89b6e"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._updateData$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        onClickWallet$Action(e, t) {
            var r = this.controller;
            return n.Logger.startActiveSpan("OnClickWallet__proxy", function(a) {
                a && (a.setAttribute("code.function", "OnClickWallet"), a.setAttribute("outsystems.function.key", "44675f90-991f-46a4-8275-793e1ad96440"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onClickWallet$Action, t, e)
                } finally {
                    a && a.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var t = this.controller;
            return n.Logger.startActiveSpan("OnReady__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "82eb8078-467e-498a-9553-9138de509e8e"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onReady$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        getWalletList$Action(e) {
            var t = this.controller;
            return n.Logger.startActiveSpan("GetWalletList__proxy", function(r) {
                return r && (r.setAttribute("code.function", "GetWalletList"), r.setAttribute("outsystems.function.key", "e68a355e-246b-4f40-9e65-6c5c9d3de733"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._getWalletList$Action, e)
                }, function() {
                    r && r.end()
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
                var t = this.controller,
                    r = this.model,
                    a = this.idService;
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
            return E.defaultTimeout
        }
    };
    u(A, "ControllerInner");
    let b = A;
    F = b, F.registerVariableGroupType("uae.TransferFlow.TransferAccountBlock$ActionGetAccounts", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: n.DataTypes.DataTypes.Record,
        defaultValue: u(function() {
            return new N
        }, "defaultValue"),
        complexType: N
    }]), F.registerVariableGroupType("uae.TransferFlow.TransferAccountBlock$ActionGetWalletList", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: n.DataTypes.DataTypes.Record,
        defaultValue: u(function() {
            return new H
        }, "defaultValue"),
        complexType: H
    }]), F.registerVariableGroupType("uae.TransferFlow.TransferAccountBlock.OnClickAccount$vars", [{
        name: "account",
        attrName: "accountInLocal",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Record,
        defaultValue: u(function() {
            return new O
        }, "defaultValue"),
        complexType: O
    }]), F.registerVariableGroupType("uae.TransferFlow.TransferAccountBlock.OnClickWallet$vars", [{
        name: "wallet",
        attrName: "walletInLocal",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Record,
        defaultValue: u(function() {
            return new P
        }, "defaultValue"),
        complexType: P
    }])
}
var F, De = new n.Controller.ControllerFactory(F, M);
var _e = D.PlaceholderContent,
    ke = D.IteratorPlaceholderContent,
    He = u(function() {
        var b = we(function(A) {
            var o = A.model,
                e = A.controller,
                t = A.controller.idService,
                r = e.validationService,
                a = e.callContext(),
                i = $,
                s = W,
                y = {
                    props: A,
                    validateWidget: u(function(v) {
                        A.validateWidget(A, v)
                    }, "validateWidget")
                },
                l = o,
                h = q,
                c = U,
                f = G();
            return m.createElement("div", A.rootNodeProperties, m.createElement(g, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-self: stretch; display: flex; flex: 1 0 0; flex-direction: column; gap: 24px;"
                },
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "0"
                },
                _widgetRecordProvider: l
            }, m.createElement(x, {
                extendedProperties: {
                    style: "---comment-2: /* mobile/heading/h3 */; color: var(--text-brandPrimaryProminent, #00375C); font-size: 24px; font-style: normal; font-weight: 900; line-height: normal;"
                },
                value: o.getCachedValue(t.getId("2F4sV+r+702ir3tlIwp4kA.Value"), function() {
                    return C.gettransfer_type() === w.transferTypes.send ? R.resolve(L.TranslationsService).getMessage("UCST+7rTq0GYRjlq95JCDA#ValueExpression.-650461677.1", "Send To") : R.resolve(L.TranslationsService).getMessage("UCST+7rTq0GYRjlq95JCDA#ValueExpression.-666848505.1", "Receive From")
                }, function() {
                    return C.gettransfer_type()
                }),
                _idProps: {
                    service: t,
                    uuid: "1"
                },
                _widgetRecordProvider: l
            }), m.createElement(g, {
                align: 0,
                animate: !0,
                extendedProperties: {
                    style: "align-self: stretch; display: flex; flex-direction: column; gap: 8px;"
                },
                visible: o.variables.filtered_wallet_listVar.length > 0 || o.variables.is_wallet_loadingVar,
                _idProps: {
                    service: t,
                    uuid: "2"
                },
                _widgetRecordProvider: l
            }, m.createElement(Te, {
                extendedProperties: {
                    style: "---comment-5: /* 150% */; color: var(--text-prominent, rgba(0, 0, 0, 0.96)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                },
                text: [c(s("kwjFZXeAmE+1gXqoZFApYA#Value", "Wallets"))],
                _idProps: {
                    service: t,
                    uuid: "3"
                },
                _widgetRecordProvider: l
            }), m.createElement(g, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "display: flex; flex-direction: column; gap: 8px;"
                },
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "4"
                },
                _widgetRecordProvider: l
            }, h(o.variables.is_wallet_loadingVar || o.variables.is_accounts_loadingVar, !1, this, function() {
                return [m.createElement(g, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-self: stretch; display: flex; flex-direction: column; gap: 8px; height: fit-content; margin-top: 4px;"
                    },
                    gridProperties: {
                        classes: "OSInline",
                        width: "100%"
                    },
                    style: "animate-pulse w-full currency list-container",
                    visible: !0,
                    _idProps: {
                        service: t,
                        name: "LoaderContainer"
                    },
                    _widgetRecordProvider: l
                }, m.createElement(g, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "background: #e5e7eb; border-radius: 8px; height: 56px;"
                    },
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: "w-full",
                    visible: !0,
                    _idProps: {
                        service: t,
                        name: "ListItemPlaceholder2"
                    },
                    _widgetRecordProvider: l
                }), m.createElement(g, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "background: #e5e7eb; border-radius: 8px; height: 56px;"
                    },
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: "w-full",
                    visible: !0,
                    _idProps: {
                        service: t,
                        name: "ListItemPlaceholder3"
                    },
                    _widgetRecordProvider: l
                }), m.createElement(g, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "background: #e5e7eb; border-radius: 8px; height: 56px;"
                    },
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: "w-full",
                    visible: !0,
                    _idProps: {
                        service: t,
                        name: "ListItemPlaceholder4"
                    },
                    _widgetRecordProvider: l
                }))]
            }, function() {
                return [m.createElement(te, {
                    animateItems: !0,
                    extendedProperties: {
                        style: "align-self: stretch; display: flex; flex-direction: column; gap: 8px;"
                    },
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    mode: 0,
                    source: o.variables.filtered_wallet_listVar,
                    style: "currency list-container list list-group",
                    tag: "div",
                    _idProps: {
                        service: t,
                        name: "CurrencyListContainer"
                    },
                    _widgetRecordProvider: l,
                    placeholders: {
                        content: new ke(function(v, d) {
                            return [m.createElement(Ee, {
                                extendedProperties: {
                                    style: "align-items: center; align-self: stretch; background: var(--bg-secondary, #EFF3F5); border: 1px solid var(--border-primary, rgba(0, 0, 0, 0.04)); border-radius: 8px; cursor: pointer; display: flex; gap: 16px; min-height: 56px; padding: 8px 16px;"
                                },
                                onClick: u(function() {
                                    var Z = typeof d != "undefined" && d !== null ? d.clone() : e.callContext().clone();
                                    e.onClickWallet$Action(o.variables.filtered_wallet_listVar.getCurrent(d.iterationContext), e.callContext(Z))
                                }, "onClick"),
                                style: o.getCachedValue(v.getId("ListItem1.Style"), function() {
                                    return o.variables.filtered_wallet_listVar.getCurrent(d.iterationContext).currencyAttr === "BTC" ? "currency list-item item-selected" : "currency list-item"
                                }, function() {
                                    return o.variables.filtered_wallet_listVar.getCurrent(d.iterationContext).currencyAttr
                                }),
                                triggerActionOnFullSwipeLeft: !0,
                                triggerActionOnFullSwipeRight: !0,
                                _idProps: {
                                    service: v,
                                    name: "ListItem1"
                                },
                                _widgetRecordProvider: l,
                                placeholders: {
                                    leftActions: _e.Empty,
                                    content: new _e(function() {
                                        return [m.createElement(g, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "align-items: center; display: flex;"
                                            },
                                            gridProperties: {
                                                classes: "OSInline",
                                                width: "100%"
                                            },
                                            visible: !0,
                                            _idProps: {
                                                service: v,
                                                uuid: "11"
                                            },
                                            _widgetRecordProvider: l
                                        }, m.createElement(g, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "height: 24px; margin-inline-end: 16px;"
                                            },
                                            gridProperties: {
                                                classes: "OSInline",
                                                width: "24px"
                                            },
                                            visible: !0,
                                            _idProps: {
                                                service: v,
                                                uuid: "12"
                                            },
                                            _widgetRecordProvider: l
                                        }, m.createElement(z, {
                                            extendedProperties: {
                                                style: "height: fit-content;"
                                            },
                                            gridProperties: {
                                                width: "fit-content"
                                            },
                                            type: 1,
                                            url: o.getCachedValue(v.getId("p8Mgrem1tEq9DXwn_mcLrg.Url"), function() {
                                                return "/" + S.getAppName() + "/img/" + S.getAppName() + ".currency" + S.toLower(o.variables.filtered_wallet_listVar.getCurrent(d.iterationContext).currencyAttr) + ".svg"
                                            }, function() {
                                                return o.variables.filtered_wallet_listVar.getCurrent(d.iterationContext).currencyAttr
                                            }),
                                            _idProps: {
                                                service: v,
                                                uuid: "13"
                                            },
                                            _widgetRecordProvider: l
                                        })), m.createElement(g, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "align-items: flex-start; display: flex; flex: 1 0 0; flex-direction: column;"
                                            },
                                            visible: !0,
                                            _idProps: {
                                                service: v,
                                                uuid: "14"
                                            },
                                            _widgetRecordProvider: l
                                        }, m.createElement(x, {
                                            extendedProperties: {
                                                style: "---comment-6: /* 150% */; color: var(--text-default, rgba(0, 0, 0, 0.72)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                                            },
                                            gridProperties: {
                                                marginLeft: "0"
                                            },
                                            value: o.variables.filtered_wallet_listVar.getCurrent(d.iterationContext).currencyAttr + " wallet",
                                            _idProps: {
                                                service: v,
                                                uuid: "15"
                                            },
                                            _widgetRecordProvider: l
                                        }), m.createElement(x, {
                                            extendedProperties: {
                                                style: "---comment-6: /* 157.143% */; color: var(--text-subtle, rgba(0, 0, 0, 0.48)); font-size: 14px; font-style: normal; font-weight: 400; line-height: 22px;"
                                            },
                                            gridProperties: {
                                                marginLeft: "0"
                                            },
                                            value: o.getCachedValue(v.getId("KfBb0cB+Hkqw+EvBk8Djtw.Value"), function() {
                                                return (o.variables.filtered_wallet_listVar.getCurrent(d.iterationContext).currencyAttr === "AED" || o.variables.filtered_wallet_listVar.getCurrent(d.iterationContext).currencyAttr === "USD" ? S.formatCurrency(o.variables.filtered_wallet_listVar.getCurrent(d.iterationContext).balanceAttr, "", 2, ".", ",") : S.formatCurrency(o.variables.filtered_wallet_listVar.getCurrent(d.iterationContext).balanceAttr, "", 8, ".", ",")) + " " + o.variables.filtered_wallet_listVar.getCurrent(d.iterationContext).currencyAttr
                                            }, function() {
                                                return o.variables.filtered_wallet_listVar.getCurrent(d.iterationContext).currencyAttr
                                            }, function() {
                                                return o.variables.filtered_wallet_listVar.getCurrent(d.iterationContext).balanceAttr
                                            }),
                                            _idProps: {
                                                service: v,
                                                uuid: "16"
                                            },
                                            _widgetRecordProvider: l
                                        })))]
                                    }),
                                    rightActions: _e.Empty
                                },
                                _dependencies: [i(o.variables.filtered_wallet_listVar.getCurrent(d.iterationContext).balanceAttr), i(o.variables.filtered_wallet_listVar.getCurrent(d.iterationContext).currencyAttr)]
                            })]
                        }, a, t, "1")
                    },
                    _dependencies: []
                })]
            }))), m.createElement(g, {
                align: 0,
                animate: !0,
                extendedProperties: {
                    style: "height: auto; margin-bottom: 16px;"
                },
                visible: o.variables.filtered_account_listVar.length > 0 || o.variables.is_accounts_loadingVar,
                _idProps: {
                    service: t,
                    name: "TradingAccountContainer"
                },
                _widgetRecordProvider: l
            }, m.createElement(g, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: center; display: flex; justify-content: space-between; margin-bottom: 16px;"
                },
                visible: !0,
                _idProps: {
                    service: t,
                    name: "TradingAccountsHeader"
                },
                _widgetRecordProvider: l
            }, m.createElement(x, {
                extendedProperties: {
                    style: "---comment-6: /* 150% */; color: var(--text-prominent, rgba(0, 0, 0, 0.96)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                value: R.resolve(L.TranslationsService).getMessage("9q2A3huAxEyxrssffKuZXQ#ValueExpression.1017368613.1", "Trading accounts"),
                _idProps: {
                    service: t,
                    uuid: "19"
                },
                _widgetRecordProvider: l
            })), h(o.variables.is_accounts_loadingVar || o.variables.is_wallet_loadingVar, !1, this, function() {
                return [m.createElement(g, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-self: stretch; display: flex; flex-direction: column; gap: 8px; height: fit-content; margin-top: 4px;"
                    },
                    gridProperties: {
                        classes: "OSInline",
                        width: "100%"
                    },
                    style: "animate-pulse w-full currency list-container",
                    visible: !0,
                    _idProps: {
                        service: t,
                        name: "LoaderContainer2"
                    },
                    _widgetRecordProvider: l
                }, m.createElement(g, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "background: #e5e7eb; border-radius: 8px; height: 56px;"
                    },
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: "w-full",
                    visible: !0,
                    _idProps: {
                        service: t,
                        name: "ListItemPlaceholder5"
                    },
                    _widgetRecordProvider: l
                }), m.createElement(g, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "background: #e5e7eb; border-radius: 8px; height: 56px;"
                    },
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: "w-full",
                    visible: !0,
                    _idProps: {
                        service: t,
                        name: "ListItemPlaceholder6"
                    },
                    _widgetRecordProvider: l
                }), m.createElement(g, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "background: #e5e7eb; border-radius: 8px; height: 56px;"
                    },
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: "w-full",
                    visible: !0,
                    _idProps: {
                        service: t,
                        name: "ListItemPlaceholder7"
                    },
                    _widgetRecordProvider: l
                }))]
            }, function() {
                return [m.createElement(g, {
                    align: 0,
                    animate: !1,
                    visible: !0,
                    _idProps: {
                        service: t,
                        name: "TradingAccountsList"
                    },
                    _widgetRecordProvider: l
                }, m.createElement(te, {
                    animateItems: !0,
                    extendedProperties: {
                        style: "align-self: stretch; display: flex; flex-direction: column; gap: 8px;"
                    },
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    mode: 0,
                    source: o.variables.filtered_account_listVar,
                    style: "list list-group",
                    tag: "div",
                    _idProps: {
                        service: t,
                        uuid: "25"
                    },
                    _widgetRecordProvider: l,
                    placeholders: {
                        content: new ke(function(v, d) {
                            return [m.createElement(g, {
                                align: 0,
                                animate: !1,
                                extendedEvents: {
                                    onClick: u(function() {
                                        var Z = typeof d != "undefined" && d !== null ? d.clone() : e.callContext().clone();
                                        e.onClickAccount$Action(o.variables.filtered_account_listVar.getCurrent(d.iterationContext), e.callContext(Z))
                                    }, "onClick")
                                },
                                extendedProperties: {
                                    style: "align-items: center; align-self: stretch; background: var(--bg-secondary, #EFF3F5); border: 1px solid var(--border-primary, rgba(0, 0, 0, 0.04)); border-radius: 8px; display: flex; gap: 16px; min-height: 56px; padding: 8px 16px;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: v,
                                    name: "TradingAccountsItem"
                                },
                                _widgetRecordProvider: l,
                                _dependencies: [i(o.variables.filtered_account_listVar.getCurrent(d.iterationContext).currencyAttr), i(o.variables.filtered_account_listVar.getCurrent(d.iterationContext).balanceAttr), i(o.variables.filtered_account_listVar.getCurrent(d.iterationContext).platformAttr.providerAttr), i(o.variables.filtered_account_listVar.getCurrent(d.iterationContext).metadataAttr.typeAttr)]
                            }, m.createElement(g, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "align-items: center; display: flex;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                visible: !0,
                                _idProps: {
                                    service: v,
                                    uuid: "27"
                                },
                                _widgetRecordProvider: l
                            }, m.createElement(g, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "height: 24px; margin-inline-end: 16px;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "24px"
                                },
                                visible: !0,
                                _idProps: {
                                    service: v,
                                    uuid: "28"
                                },
                                _widgetRecordProvider: l
                            }, h(S.toLower(o.variables.filtered_account_listVar.getCurrent(d.iterationContext).metadataAttr.typeAttr) === "standard", !1, this, function() {
                                return [m.createElement(z, {
                                    extendedProperties: {
                                        style: "height: fit-content;"
                                    },
                                    gridProperties: {
                                        width: "fit-content"
                                    },
                                    type: 1,
                                    url: "https://assets.deriv.ae/common/platform/dmt5-standard-sm.svg",
                                    _idProps: {
                                        service: v,
                                        uuid: "29"
                                    },
                                    _widgetRecordProvider: l
                                })]
                            }, function() {
                                return [m.createElement(z, {
                                    extendedProperties: {
                                        style: "height: fit-content;"
                                    },
                                    gridProperties: {
                                        width: "fit-content"
                                    },
                                    type: 1,
                                    url: "https://assets.deriv.ae/common/platform/dmt5-swf-sm.svg",
                                    _idProps: {
                                        service: v,
                                        uuid: "30"
                                    },
                                    _widgetRecordProvider: l
                                })]
                            })), m.createElement(g, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "align-items: flex-start; display: flex; flex: 1 0 0; flex-direction: column;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: v,
                                    uuid: "31"
                                },
                                _widgetRecordProvider: l
                            }, m.createElement(x, {
                                extendedProperties: {
                                    style: "---comment-6: /* 150% */; color: var(--text-default, rgba(0, 0, 0, 0.72)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                                },
                                gridProperties: {
                                    marginLeft: "0"
                                },
                                value: o.getCachedValue(v.getId("cN1oLf6wo0WOZ5453yIIhw.Value"), function() {
                                    return o.variables.filtered_account_listVar.getCurrent(d.iterationContext).platformAttr.providerAttr + " " + S.toUpper(S.substr(o.variables.filtered_account_listVar.getCurrent(d.iterationContext).metadataAttr.typeAttr, 0, 1)) + S.substr(o.variables.filtered_account_listVar.getCurrent(d.iterationContext).metadataAttr.typeAttr, 1, S.length(o.variables.filtered_account_listVar.getCurrent(d.iterationContext).metadataAttr.typeAttr) - 1) + " account"
                                }, function() {
                                    return o.variables.filtered_account_listVar.getCurrent(d.iterationContext).platformAttr.providerAttr
                                }, function() {
                                    return o.variables.filtered_account_listVar.getCurrent(d.iterationContext).metadataAttr.typeAttr
                                }),
                                _idProps: {
                                    service: v,
                                    uuid: "32"
                                },
                                _widgetRecordProvider: l
                            }), m.createElement(x, {
                                extendedProperties: {
                                    style: "---comment-6: /* 157.143% */; color: var(--text-subtle, rgba(0, 0, 0, 0.48)); font-size: 14px; font-style: normal; font-weight: 400; line-height: 22px;"
                                },
                                gridProperties: {
                                    marginLeft: "0"
                                },
                                value: o.getCachedValue(v.getId("Idjdxtd_R0+p+4jhUPSd5g.Value"), function() {
                                    return (S.textToDecimalValidate(o.variables.filtered_account_listVar.getCurrent(d.iterationContext).balanceAttr) ? o.variables.filtered_account_listVar.getCurrent(d.iterationContext).currencyAttr === "AED" || o.variables.filtered_account_listVar.getCurrent(d.iterationContext).currencyAttr === "USD" ? S.formatCurrency(S.textToDecimal(o.variables.filtered_account_listVar.getCurrent(d.iterationContext).balanceAttr), "", 2, ".", ",") : S.formatCurrency(S.textToDecimal(o.variables.filtered_account_listVar.getCurrent(d.iterationContext).balanceAttr), "", 8, ".", ",") : "") + " " + o.variables.filtered_account_listVar.getCurrent(d.iterationContext).currencyAttr
                                }, function() {
                                    return o.variables.filtered_account_listVar.getCurrent(d.iterationContext).balanceAttr
                                }, function() {
                                    return o.variables.filtered_account_listVar.getCurrent(d.iterationContext).currencyAttr
                                }),
                                _idProps: {
                                    service: v,
                                    uuid: "33"
                                },
                                _widgetRecordProvider: l
                            }))))]
                        }, a, t, "2")
                    },
                    _dependencies: []
                }))]
            }))))
        }, {
            topLevelComponent: !1,
            getAttributes: u(function() {
                return {
                    codeFunction: "TransferAccountBlock",
                    functionKey: "07627fa2-460d-4702-846f-babc2824023d",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "TransferFlow.TransferAccountBlock",
            modelFactory: xe,
            controllerFactory: De
        });
        return b.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"]
        }, b.getJsDependencies = function() {
            return []
        }, b.getBlocks = function() {
            return []
        }, b
    }, "componentFactory"),
    Y = He();
var ge = D.PlaceholderContent,
    Dt = D.IteratorPlaceholderContent,
    Ne = u(function() {
        var b = Ce(function(A) {
            var o = A.model,
                e = A.controller,
                t = A.controller.idService,
                r = e.validationService,
                a = e.callContext(),
                i = $,
                s = W,
                y = {
                    props: A,
                    validateWidget: u(function(v) {
                        A.validateWidget(A, v)
                    }, "validateWidget")
                },
                l = o,
                h = q,
                c = U,
                f = G();
            return V.createElement("div", A.rootNodeProperties, h(he.isDesktop$Action(a).isDesktopOut, !1, this, function() {
                return [V.createElement(ne, {
                    getOwnerSpan: u(function() {
                        return f.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: u(function() {
                        return f.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        ShowBackbutton: !0,
                        ShowClosebutton: !0
                    },
                    events: {
                        _handleError: u(function(v) {
                            e.handleError(v)
                        }, "_handleError"),
                        backBtnEvent$Action: u(function() {
                            var v = typeof a != "undefined" && a !== null ? a.clone() : e.callContext().clone();
                            e.desktopProcessLayoutBackBtnEvent$Action(e.callContext(v))
                        }, "backBtnEvent$Action"),
                        closeBtnEvent$Action: u(function() {
                            var v = typeof a != "undefined" && a !== null ? a.clone() : e.callContext().clone();
                            e.desktopProcessLayoutCloseBtnEvent$Action(e.callContext(v))
                        }, "closeBtnEvent$Action")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: t,
                        uuid: "0",
                        alias: "1"
                    },
                    _widgetRecordProvider: l,
                    placeholders: {
                        contentbody: new ge(function() {
                            return [V.createElement(g, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "padding-top: 24px;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "1"
                                },
                                _widgetRecordProvider: l
                            }, V.createElement(Y, {
                                getOwnerSpan: u(function() {
                                    return f.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: u(function() {
                                    return f.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {},
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
                                    alias: "2"
                                },
                                _widgetRecordProvider: l,
                                _dependencies: []
                            }))]
                        })
                    },
                    _dependencies: []
                })]
            }, function() {
                return [V.createElement(re, {
                    getOwnerSpan: u(function() {
                        return f.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: u(function() {
                        return f.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        has_back_button: !0,
                        has_close_icon: !0
                    },
                    events: {
                        _handleError: u(function(v) {
                            e.handleError(v)
                        }, "_handleError"),
                        closeEvent$Action: u(function() {
                            var v = typeof a != "undefined" && a !== null ? a.clone() : e.callContext().clone();
                            e.desktopProcessLayoutCloseBtnEvent$Action(e.callContext(v))
                        }, "closeEvent$Action")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: t,
                        uuid: "3",
                        alias: "3"
                    },
                    _widgetRecordProvider: l,
                    placeholders: {
                        content: new ge(function() {
                            return [V.createElement(Y, {
                                getOwnerSpan: u(function() {
                                    return f.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: u(function() {
                                    return f.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {},
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
                                    alias: "4"
                                },
                                _widgetRecordProvider: l,
                                _dependencies: []
                            })]
                        }),
                        footer: ge.Empty
                    },
                    _dependencies: []
                })]
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: u(function() {
                return {
                    codeFunction: "TransferAccount",
                    functionKey: "d6550df1-4108-4547-8368-5578e363fe4e",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "TransferFlow.TransferAccount",
            modelFactory: ve,
            controllerFactory: oe,
            getTitle: u(function(A) {
                var o = A.model,
                    e = A.controller,
                    t = A.controller.idService,
                    r = e.validationService,
                    a = e.callContext(),
                    i = $,
                    s = W,
                    y = {
                        props: A,
                        validateWidget: u(function(l) {
                            A.validateWidget(A, l)
                        }, "validateWidget")
                    };
                return R.resolve(L.TranslationsService).getMessage("8Q1V1ghBR0WDaFV442P+Tg#TitleExpression.-573097288.1", "Account transfer | Deriv")
            }, "getTitle")
        });
        return b.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, b.getJsDependencies = function() {
            return []
        }, b.getBlocks = function() {
            return [ne, Y, re]
        }, b
    }, "componentFactory"),
    Me = Ne();
export {
    oe as controllerModule, ve as modelModule, Me as viewModule, ie as webFlowControllerModule
};