import {
    a as P
} from "./_oschunk-26LPX23H.js";
import {
    a as b
} from "./_oschunk-ZSU2JK2M.js";
import {
    a as g
} from "./_oschunk-2M7PXTSQ.js";
import {
    a as D,
    c as A
} from "./_oschunk-DOFMR6EA.js";
import {
    ia as V
} from "./_oschunk-2JKANR6M.js";
import {
    c as i
} from "./_oschunk-DVBKI63I.js";
var E = {};

function p(o, C, L, r) {
    var d;
    let t = (d = JSON.parse(o.GetAccountStatus)) == null ? void 0 : d.get_account_status,
        a = JSON.parse(o.GetLimitsData),
        s = (t == null ? void 0 : t.authentication) || {},
        n = (s == null ? void 0 : s.document) || {},
        f = (s == null ? void 0 : s.identity) || {},
        h = (s == null ? void 0 : s.needs_verification) || [],
        m = (t == null ? void 0 : t.status) || [],
        T = (t == null ? void 0 : t.cashier_validation) || [];
    o.IsPOANeedVerification = h.includes("document"), o.IsPOINeedVerification = h.includes("identity"), o.POAStatus = n.status || "none", o.POIStatus = f.status || "none", o.IsWithdrawalLocked = m.includes("withdrawal_locked"), o.IsWithdrawalStatusLock = T.includes("withdrawal_locked_status"), o.NoWithdrawalOrTradingStatus = T.includes("no_withdrawal_or_trading_status"), o.IsAskedFixDetails = T.includes("ASK_FIX_DETAILS"), o.IsCashierLockStatus = T.includes("cashier_locked_status") || m.includes("cashier_locked"), o.FinancialAssessmentNotComplete = T.includes("FinancialAssessmentRequired"), o.IsAskToAuthenticate = T.includes("ASK_AUTHENTICATE"), o.IsSystemMaintenance = T.includes("system_maintenance")
}
i(p, "default");

function N(o, C, L, r) {
    var v, y, S, l, c, u, _, I, k;
    let t = o.Currency,
        a = (v = JSON.parse(o.AccountDetails)) == null ? void 0 : v.get_account_status,
        s = JSON.parse(o.GetLimitsData),
        n = JSON.parse(o.CryptoConfig),
        f = (y = s == null ? void 0 : s.get_limits) == null ? void 0 : y.remainder,
        h = (l = (S = n == null ? void 0 : n.crypto_config) == null ? void 0 : S.currencies_config[t]) == null ? void 0 : l.minimum_withdrawal,
        m = new Set((c = a.authentication) == null ? void 0 : c.needs_verification),
        T = new Set(a == null ? void 0 : a.status),
        d = new Set(a == null ? void 0 : a.cashier_validation);
    o.Is10KLimitReached = +f < h, o.IsPOANeedVerification = m.has("document"), o.IsPOINeedVerification = m.has("identity"), o.POAStatus = ((_ = (u = a == null ? void 0 : a.authentication) == null ? void 0 : u.document) == null ? void 0 : _.status) || "none", o.POIStatus = ((k = (I = a == null ? void 0 : a.authentication) == null ? void 0 : I.document) == null ? void 0 : k.status) || "none", o.IsWithdrawalLocked = T.has("withdrawal_locked"), o.IsWithdrawalStatusLock = d.has("withdrawal_locked_status"), o.NoWithdrawalOrTradingStatus = d.has("no_withdrawal_or_trading_status"), o.IsAskedFixDetails = d.has("ASK_FIX_DETAILS"), o.IsCashierLockStatus = (d == null ? void 0 : d.has("cashier_locked_status")) || T.has("cashier_locked"), o.FinancialAssessmentNotComplete = d == null ? void 0 : d.has("FinancialAssessmentRequired"), o.FinancialRiskApproval = d == null ? void 0 : d.has("ASK_FINANCIAL_RISK_APPROVAL"), o.IsAskToAuthenticate = d == null ? void 0 : d.has("ASK_AUTHENTICATE"), o.IsSystemMaintenance = d == null ? void 0 : d.has("system_maintenance")
}
i(N, "default");

function w(o, C, L) {
    typeof window.LiveChatWidget != "undefined" && window.LiveChatWidget.on("ready", function() {
        var r;
        (r = window.LC_API) == null || r.open_chat_window()
    })
}
i(w, "default");
var e = V; {
    let C = class C extends e.Controller.BaseViewController {
        constructor(r, t, a) {
            super(r, t, a, E);
            var s = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(r) {
            this._dataFetchActionNames = r
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(r) {
                var t = this.model,
                    a = this.controller,
                    s = this.idService;
                return e.Logger.startActiveSpan("OnInitialize", function(n) {
                    n && (n.setAttribute("code.function", "OnInitialize"), n.setAttribute("outsystems.function.key", "4709a060-0618-4cce-8a89-1d7810a1b5d1"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        if (a.ensureControllerAlive("OnInitialize"), r = a.callContext(r), D.getAuthToken() === e.BuiltinFunctions.nullTextIdentifier()) return e.Navigation.navigateTo(e.Navigation.generateScreenURL("tradershub", "cfds", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), r, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(r) {
            this.__onInitialize$Action = r
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(r) {
                var t = this.model,
                    a = this.controller,
                    s = this.idService;
                return e.Logger.startActiveSpan("OnReady", function(n) {
                    return n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "5bdf04c9-9e93-4ead-a12a-ec27b59b5a73"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        a.ensureControllerAlive("OnReady"), r = a.callContext(r);
                        var f = new e.DataTypes.VariableHolder,
                            h = new e.DataTypes.VariableHolder,
                            m = new e.DataTypes.VariableHolder,
                            T = new e.DataTypes.VariableHolder,
                            d = new e.DataTypes.VariableHolder,
                            v = new e.DataTypes.VariableHolder,
                            y = new e.DataTypes.VariableHolder,
                            S = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType);
                        return e.Flow.executeAsyncFlow(function() {
                            return e.Flow.executeSequence(function() {
                                return D.getAccountType() === "demo" ? e.Flow.returnAsync(e.Navigation.navigateTo(e.Navigation.generateScreenURL("tradershub", "wallets", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), r, !0)) : (t.flush(), A.sendAuthorize$Action(!1, r).then(function(l) {
                                    T.value = l
                                }).then(function() {
                                    return t.flush(), A.getActiveWallet$Action(r).then(function(l) {
                                        d.value = l
                                    })
                                }).then(function() {
                                    t.variables.activeWalletVar = d.value.activeWalletOut
                                }).then(function() {
                                    return e.Flow.executeSequence(function() {
                                        if (d.value.activeWalletOut.balanceAttr.gt(e.BuiltinFunctions.integerToDecimal(0))) return t.flush(), A.getAccountStatus2$Action(r).then(function(l) {
                                            m.value = l
                                        }).then(function() {
                                            return e.Flow.executeSequence(function() {
                                                if (m.value.isErrorOut) t.variables.isLoadingVar = !1, t.variables.showScreenVar = "ServerError";
                                                else return S.value.jSONOut = e.JSONUtils.serializeToJSON(m.value.responseOut, !1, !1), t.flush(), A.getLimits$Action(r).then(function(l) {
                                                    h.value = l
                                                }).then(function() {
                                                    return e.Flow.executeSequence(function() {
                                                        if (h.value.isErrorOut) t.variables.isLoadingVar = !1, t.variables.showScreenVar = "ServerError";
                                                        else return e.Flow.executeSequence(function() {
                                                            if (d.value.activeWalletOut.is_cryptoAttr) return t.flush(), A.cryptoConfig$Action(r).then(function(l) {
                                                                f.value = l
                                                            }).then(function() {
                                                                f.value.isErrorOut ? (t.variables.isLoadingVar = !1, t.variables.showScreenVar = "ServerError") : (y.value = e.Logger.startActiveSpan("CashierLockErrors", function(l) {
                                                                    l && (l.setAttribute("code.function", "CashierLockErrors"), l.setAttribute("outsystems.function.key", "aa260f66-1800-47d6-85eb-f7da6d32cfbe"), l.setAttribute("outsystems.function.owner.name", "tradershub"), l.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), l.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                                                    try {
                                                                        return a.safeExecuteJSNode(N, "CashierLockErrors", "OnReady", {
                                                                            AccountDetails: e.DataConversion.JSNodeParamConverter.to(S.value.jSONOut, e.DataTypes.DataTypes.Text),
                                                                            Currency: e.DataConversion.JSNodeParamConverter.to(d.value.activeWalletOut.currencyAttr, e.DataTypes.DataTypes.Text),
                                                                            CryptoConfig: e.DataConversion.JSNodeParamConverter.to(f.value.responseOut, e.DataTypes.DataTypes.Text),
                                                                            GetLimitsData: e.DataConversion.JSNodeParamConverter.to(h.value.responseOut, e.DataTypes.DataTypes.Text),
                                                                            Is10KLimitReached: e.DataConversion.JSNodeParamConverter.to(!1, e.DataTypes.DataTypes.Boolean),
                                                                            IsWithdrawalLocked: e.DataConversion.JSNodeParamConverter.to(!1, e.DataTypes.DataTypes.Boolean),
                                                                            POAStatus: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                                                            POIStatus: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                                                            IsPOANeedVerification: e.DataConversion.JSNodeParamConverter.to(!1, e.DataTypes.DataTypes.Boolean),
                                                                            IsPOINeedVerification: e.DataConversion.JSNodeParamConverter.to(!1, e.DataTypes.DataTypes.Boolean),
                                                                            IsWithdrawalStatusLock: e.DataConversion.JSNodeParamConverter.to(!1, e.DataTypes.DataTypes.Boolean),
                                                                            NoWithdrawalOrTradingStatus: e.DataConversion.JSNodeParamConverter.to(!1, e.DataTypes.DataTypes.Boolean),
                                                                            IsAskedFixDetails: e.DataConversion.JSNodeParamConverter.to(!1, e.DataTypes.DataTypes.Boolean),
                                                                            IsCashierLockStatus: e.DataConversion.JSNodeParamConverter.to(!1, e.DataTypes.DataTypes.Boolean),
                                                                            FinancialAssessmentNotComplete: e.DataConversion.JSNodeParamConverter.to(!1, e.DataTypes.DataTypes.Boolean),
                                                                            FinancialRiskApproval: e.DataConversion.JSNodeParamConverter.to(!1, e.DataTypes.DataTypes.Boolean),
                                                                            IsAskToAuthenticate: e.DataConversion.JSNodeParamConverter.to(!1, e.DataTypes.DataTypes.Boolean),
                                                                            IsSystemMaintenance: e.DataConversion.JSNodeParamConverter.to(!1, e.DataTypes.DataTypes.Boolean)
                                                                        }, function(c) {
                                                                            var u = new(a.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsWithdrawalVerification.OnReady$cashierLockErrorsJSResult"));
                                                                            return u.is10KLimitReachedOut = e.DataConversion.JSNodeParamConverter.from(c.Is10KLimitReached, e.DataTypes.DataTypes.Boolean), u.isWithdrawalLockedOut = e.DataConversion.JSNodeParamConverter.from(c.IsWithdrawalLocked, e.DataTypes.DataTypes.Boolean), u.pOAStatusOut = e.DataConversion.JSNodeParamConverter.from(c.POAStatus, e.DataTypes.DataTypes.Text), u.pOIStatusOut = e.DataConversion.JSNodeParamConverter.from(c.POIStatus, e.DataTypes.DataTypes.Text), u.isPOANeedVerificationOut = e.DataConversion.JSNodeParamConverter.from(c.IsPOANeedVerification, e.DataTypes.DataTypes.Boolean), u.isPOINeedVerificationOut = e.DataConversion.JSNodeParamConverter.from(c.IsPOINeedVerification, e.DataTypes.DataTypes.Boolean), u.isWithdrawalStatusLockOut = e.DataConversion.JSNodeParamConverter.from(c.IsWithdrawalStatusLock, e.DataTypes.DataTypes.Boolean), u.noWithdrawalOrTradingStatusOut = e.DataConversion.JSNodeParamConverter.from(c.NoWithdrawalOrTradingStatus, e.DataTypes.DataTypes.Boolean), u.isAskedFixDetailsOut = e.DataConversion.JSNodeParamConverter.from(c.IsAskedFixDetails, e.DataTypes.DataTypes.Boolean), u.isCashierLockStatusOut = e.DataConversion.JSNodeParamConverter.from(c.IsCashierLockStatus, e.DataTypes.DataTypes.Boolean), u.financialAssessmentNotCompleteOut = e.DataConversion.JSNodeParamConverter.from(c.FinancialAssessmentNotComplete, e.DataTypes.DataTypes.Boolean), u.financialRiskApprovalOut = e.DataConversion.JSNodeParamConverter.from(c.FinancialRiskApproval, e.DataTypes.DataTypes.Boolean), u.isAskToAuthenticateOut = e.DataConversion.JSNodeParamConverter.from(c.IsAskToAuthenticate, e.DataTypes.DataTypes.Boolean), u.isSystemMaintenanceOut = e.DataConversion.JSNodeParamConverter.from(c.IsSystemMaintenance, e.DataTypes.DataTypes.Boolean), u
                                                                        }, {}, {})
                                                                    } finally {
                                                                        l && l.end()
                                                                    }
                                                                }, 1), y.value.isSystemMaintenanceOut ? (t.variables.isLoadingVar = !1, t.variables.showScreenVar = "IsSystemMaintenance") : y.value.is10KLimitReachedOut ? y.value.pOAStatusOut !== "verified" || y.value.isPOANeedVerificationOut ? (t.variables.showScreenVar = "POANotSubmit", t.variables.isLoadingVar = !1) : y.value.pOAStatusOut === "pending" ? (t.variables.isLoadingVar = !1, t.variables.showScreenVar = "POAPending") : y.value.pOIStatusOut !== "verified" && y.value.isPOINeedVerificationOut ? (t.variables.isLoadingVar = !1, t.variables.showScreenVar = "POINotSubmit") : y.value.pOIStatusOut === "pending" ? (t.variables.isLoadingVar = !1, t.variables.showScreenVar = "POIPending") : y.value.financialRiskApprovalOut && (t.variables.showScreenVar = "FinancialAssessmentNotComplete", t.variables.isLoadingVar = !1) : y.value.isAskToAuthenticateOut && y.value.isWithdrawalLockedOut ? (t.variables.isLoadingVar = !1, t.variables.showScreenVar = "AccountVerification") : y.value.isWithdrawalLockedOut || y.value.noWithdrawalOrTradingStatusOut ? (t.variables.showScreenVar = "IsWithdrawalLocked", t.variables.isLoadingVar = !1) : y.value.isWithdrawalLockedOut && y.value.isAskedFixDetailsOut ? (t.variables.isLoadingVar = !1, t.variables.showScreenVar = "AskFixDetails") : y.value.isWithdrawalStatusLockOut || y.value.noWithdrawalOrTradingStatusOut ? (t.variables.isLoadingVar = !1, t.variables.showScreenVar = "DepositOnly") : y.value.isWithdrawalLockedOut && y.value.financialAssessmentNotCompleteOut ? (t.variables.isLoadingVar = !1, t.variables.showScreenVar = "FinancialAssessmentNotComplete") : y.value.isCashierLockStatusOut ? (t.variables.showScreenVar = "CashierLock", t.variables.isLoadingVar = !1) : (t.variables.showScreenVar = "UserVerification", t.variables.isLoadingVar = !1))
                                                            });
                                                            v.value = e.Logger.startActiveSpan("CashierLockErrors2", function(l) {
                                                                l && (l.setAttribute("code.function", "CashierLockErrors2"), l.setAttribute("outsystems.function.key", "5ed50c04-d54a-4f08-a025-fe1c9ccd59ac"), l.setAttribute("outsystems.function.owner.name", "tradershub"), l.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), l.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                                                try {
                                                                    return a.safeExecuteJSNode(p, "CashierLockErrors2", "OnReady", {
                                                                        GetLimitsData: e.DataConversion.JSNodeParamConverter.to(h.value.responseOut, e.DataTypes.DataTypes.Text),
                                                                        GetAccountStatus: e.DataConversion.JSNodeParamConverter.to(S.value.jSONOut, e.DataTypes.DataTypes.Text),
                                                                        IsWithdrawalLocked: e.DataConversion.JSNodeParamConverter.to(!1, e.DataTypes.DataTypes.Boolean),
                                                                        POAStatus: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                                                        POIStatus: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                                                        IsPOANeedVerification: e.DataConversion.JSNodeParamConverter.to(!1, e.DataTypes.DataTypes.Boolean),
                                                                        IsPOINeedVerification: e.DataConversion.JSNodeParamConverter.to(!1, e.DataTypes.DataTypes.Boolean),
                                                                        IsWithdrawalStatusLock: e.DataConversion.JSNodeParamConverter.to(!1, e.DataTypes.DataTypes.Boolean),
                                                                        NoWithdrawalOrTradingStatus: e.DataConversion.JSNodeParamConverter.to(!1, e.DataTypes.DataTypes.Boolean),
                                                                        IsAskedFixDetails: e.DataConversion.JSNodeParamConverter.to(!1, e.DataTypes.DataTypes.Boolean),
                                                                        IsCashierLockStatus: e.DataConversion.JSNodeParamConverter.to(!1, e.DataTypes.DataTypes.Boolean),
                                                                        FinancialAssessmentNotComplete: e.DataConversion.JSNodeParamConverter.to(!1, e.DataTypes.DataTypes.Boolean),
                                                                        IsAskToAuthenticate: e.DataConversion.JSNodeParamConverter.to(!1, e.DataTypes.DataTypes.Boolean),
                                                                        IsSystemMaintenance: e.DataConversion.JSNodeParamConverter.to(!1, e.DataTypes.DataTypes.Boolean)
                                                                    }, function(c) {
                                                                        var u = new(a.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsWithdrawalVerification.OnReady$cashierLockErrors2JSResult"));
                                                                        return u.isWithdrawalLockedOut = e.DataConversion.JSNodeParamConverter.from(c.IsWithdrawalLocked, e.DataTypes.DataTypes.Boolean), u.pOAStatusOut = e.DataConversion.JSNodeParamConverter.from(c.POAStatus, e.DataTypes.DataTypes.Text), u.pOIStatusOut = e.DataConversion.JSNodeParamConverter.from(c.POIStatus, e.DataTypes.DataTypes.Text), u.isPOANeedVerificationOut = e.DataConversion.JSNodeParamConverter.from(c.IsPOANeedVerification, e.DataTypes.DataTypes.Boolean), u.isPOINeedVerificationOut = e.DataConversion.JSNodeParamConverter.from(c.IsPOINeedVerification, e.DataTypes.DataTypes.Boolean), u.isWithdrawalStatusLockOut = e.DataConversion.JSNodeParamConverter.from(c.IsWithdrawalStatusLock, e.DataTypes.DataTypes.Boolean), u.noWithdrawalOrTradingStatusOut = e.DataConversion.JSNodeParamConverter.from(c.NoWithdrawalOrTradingStatus, e.DataTypes.DataTypes.Boolean), u.isAskedFixDetailsOut = e.DataConversion.JSNodeParamConverter.from(c.IsAskedFixDetails, e.DataTypes.DataTypes.Boolean), u.isCashierLockStatusOut = e.DataConversion.JSNodeParamConverter.from(c.IsCashierLockStatus, e.DataTypes.DataTypes.Boolean), u.financialAssessmentNotCompleteOut = e.DataConversion.JSNodeParamConverter.from(c.FinancialAssessmentNotComplete, e.DataTypes.DataTypes.Boolean), u.isAskToAuthenticateOut = e.DataConversion.JSNodeParamConverter.from(c.IsAskToAuthenticate, e.DataTypes.DataTypes.Boolean), u.isSystemMaintenanceOut = e.DataConversion.JSNodeParamConverter.from(c.IsSystemMaintenance, e.DataTypes.DataTypes.Boolean), u
                                                                    }, {}, {})
                                                                } finally {
                                                                    l && l.end()
                                                                }
                                                            }, 1), v.value.isSystemMaintenanceOut ? (t.variables.isLoadingVar = !1, t.variables.showScreenVar = "IsSystemMaintenance") : v.value.isWithdrawalLockedOut || v.value.noWithdrawalOrTradingStatusOut ? (t.variables.showScreenVar = "IsWithdrawalLocked", t.variables.isLoadingVar = !1) : v.value.financialAssessmentNotCompleteOut ? (t.variables.isLoadingVar = !1, t.variables.showScreenVar = "IsFANotComplete", b.consoleLog$Action("IsFANotComplete", 0, r)) : v.value.isAskToAuthenticateOut ? (t.variables.isLoadingVar = !1, t.variables.showScreenVar = "IsAskToAuthenticate", b.consoleLog$Action("IsAskToAuthenticate", 0, r)) : v.value.pOIStatusOut === "pending" ? (t.variables.isLoadingVar = !1, t.variables.showScreenVar = "isPOIPending") : v.value.pOIStatusOut !== "verified" && v.value.isPOINeedVerificationOut ? (t.variables.isLoadingVar = !1, t.variables.showScreenVar = "isPOINotSubmit") : v.value.pOAStatusOut === "pending" ? (t.variables.isLoadingVar = !1, t.variables.showScreenVar = "IsPOAPending") : v.value.pOAStatusOut !== "verified" && v.value.isPOANeedVerificationOut ? (t.variables.isLoadingVar = !1, t.variables.showScreenVar = "IsPOANotSubmit") : v.value.isAskedFixDetailsOut ? (t.variables.isLoadingVar = !1, t.variables.showScreenVar = "IsAskFixDetails") : v.value.isWithdrawalStatusLockOut || v.value.noWithdrawalOrTradingStatusOut ? (t.variables.isLoadingVar = !1, t.variables.showScreenVar = "IsDepositOnly") : v.value.isCashierLockStatusOut ? (t.variables.showScreenVar = "IsCashierLock", t.variables.isLoadingVar = !1) : (t.variables.showScreenVar = "UserVerification", t.variables.isLoadingVar = !1)
                                                        })
                                                    })
                                                })
                                            })
                                        });
                                        t.variables.isLoadingVar = !1, t.variables.showScreenVar = "HasNoBalance"
                                    })
                                }))
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(r) {
            this.__onReady$Action = r
        }
        get _openLiveChat$Action() {
            return this.hasOwnProperty("__openLiveChat$Action") || (this.__openLiveChat$Action = function(r) {
                var t = this.model,
                    a = this.controller,
                    s = this.idService;
                return e.Logger.startActiveSpan("OpenLiveChat", function(n) {
                    n && (n.setAttribute("code.function", "OpenLiveChat"), n.setAttribute("outsystems.function.key", "81f9e27e-9c4a-48e8-aba1-df4165f09227"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        a.ensureControllerAlive("OpenLiveChat"), r = a.callContext(r), e.Logger.startActiveSpan("OpenLiveChat", function(f) {
                            f && (f.setAttribute("code.function", "OpenLiveChat"), f.setAttribute("outsystems.function.key", "152b6dfa-623e-40d6-ba05-eaabc1f33135"), f.setAttribute("outsystems.function.owner.name", "tradershub"), f.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), f.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return a.safeExecuteJSNode(w, "OpenLiveChat", "OpenLiveChat", null, function(h) {}, {}, {})
                            } finally {
                                f && f.end()
                            }
                        }, 1)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__openLiveChat$Action
        }
        set _openLiveChat$Action(r) {
            this.__openLiveChat$Action = r
        }
        get _redirectToKYC$Action() {
            return this.hasOwnProperty("__redirectToKYC$Action") || (this.__redirectToKYC$Action = function(r, t) {
                var a = this.model,
                    s = this.controller,
                    n = this.idService;
                return e.Logger.startActiveSpan("RedirectToKYC", function(f) {
                    return f && (f.setAttribute("code.function", "RedirectToKYC"), f.setAttribute("outsystems.function.key", "ba885efa-68b3-4a57-af57-23f952dc5549"), f.setAttribute("outsystems.function.owner.name", "tradershub"), f.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), f.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        s.ensureControllerAlive("RedirectToKYC"), t = s.callContext(t);
                        var h = new e.DataTypes.VariableHolder(new(s.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsWithdrawalVerification.RedirectToKYC$vars")));
                        return h.value.redirectToInLocal = r, e.Flow.executeAsyncFlow(function() {
                            return a.flush(), A.redirectToHighcode$Action(h.value.redirectToInLocal, !1, !0, t).then(function() {
                                a.variables.showScreenVar = ""
                            })
                        })
                    }, function() {
                        f && f.end()
                    })
                }, 1)
            }), this.__redirectToKYC$Action
        }
        set _redirectToKYC$Action(r) {
            this.__redirectToKYC$Action = r
        }
        get _cashierLockOnClick$Action() {
            return this.hasOwnProperty("__cashierLockOnClick$Action") || (this.__cashierLockOnClick$Action = function(r) {
                var t = this.model,
                    a = this.controller,
                    s = this.idService;
                return e.Logger.startActiveSpan("CashierLockOnClick", function(n) {
                    n && (n.setAttribute("code.function", "CashierLockOnClick"), n.setAttribute("outsystems.function.key", "f3450d06-b916-41eb-8fc9-114574cc17bf"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return a.ensureControllerAlive("CashierLockOnClick"), r = a.callContext(r), e.Navigation.navigateTo(e.Navigation.generateScreenURL("tradershub", "wallets", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), r, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__cashierLockOnClick$Action
        }
        set _cashierLockOnClick$Action(r) {
            this.__cashierLockOnClick$Action = r
        }
        onInitialize$Action(r) {
            var t = this.controller;
            return e.Logger.startActiveSpan("OnInitialize__proxy", function(a) {
                a && (a.setAttribute("code.function", "OnInitialize"), a.setAttribute("outsystems.function.key", "4709a060-0618-4cce-8a89-1d7810a1b5d1"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onInitialize$Action, r)
                } finally {
                    a && a.end()
                }
            }, 0)
        }
        onReady$Action(r) {
            var t = this.controller;
            return e.Logger.startActiveSpan("OnReady__proxy", function(a) {
                return a && (a.setAttribute("code.function", "OnReady"), a.setAttribute("outsystems.function.key", "5bdf04c9-9e93-4ead-a12a-ec27b59b5a73"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._onReady$Action, r)
                }, function() {
                    a && a.end()
                })
            }, 0)
        }
        openLiveChat$Action(r) {
            var t = this.controller;
            return e.Logger.startActiveSpan("OpenLiveChat__proxy", function(a) {
                a && (a.setAttribute("code.function", "OpenLiveChat"), a.setAttribute("outsystems.function.key", "81f9e27e-9c4a-48e8-aba1-df4165f09227"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._openLiveChat$Action, r)
                } finally {
                    a && a.end()
                }
            }, 0)
        }
        redirectToKYC$Action(r, t) {
            var a = this.controller;
            return e.Logger.startActiveSpan("RedirectToKYC__proxy", function(s) {
                return s && (s.setAttribute("code.function", "RedirectToKYC"), s.setAttribute("outsystems.function.key", "ba885efa-68b3-4a57-af57-23f952dc5549"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return a.safeExecuteClientAction(a._redirectToKYC$Action, t, r)
                }, function() {
                    s && s.end()
                })
            }, 0)
        }
        cashierLockOnClick$Action(r) {
            var t = this.controller;
            return e.Logger.startActiveSpan("CashierLockOnClick__proxy", function(a) {
                a && (a.setAttribute("code.function", "CashierLockOnClick"), a.setAttribute("outsystems.function.key", "f3450d06-b916-41eb-8fc9-114574cc17bf"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._cashierLockOnClick$Action, r)
                } finally {
                    a && a.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(r) {
                var t = this.controller,
                    a = this.model,
                    s = this.idService;
                return t.onInitialize$Action(r)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(r) {
            this._onInitializeEventHandler = r
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(r) {
                var t = this.controller,
                    a = this.model,
                    s = this.idService;
                return t.onReady$Action(r)
            }), this._onReadyEventHandler
        }
        set onReadyEventHandler(r) {
            this._onReadyEventHandler = r
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(r) {
            this._onRenderEventHandler = r
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = null), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(r) {
            this._onDestroyEventHandler = r
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(r) {
            this._onParametersChangedEventHandler = r
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(r) {
                return P.default.handleError(r, this.callContext())
            }), this._handleError
        }
        set handleError(r) {
            this._handleError = r
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return A.defaultTimeout
        }
    };
    i(C, "ControllerInner");
    let o = C;
    O = o, O.registerVariableGroupType("tradershub.WalletFlows.WalletsWithdrawalVerification.OnReady$cashierLockErrors2JSResult", [{
        name: "IsWithdrawalLocked",
        attrName: "isWithdrawalLockedOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Boolean,
        defaultValue: i(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "POAStatus",
        attrName: "pOAStatusOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: i(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "POIStatus",
        attrName: "pOIStatusOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: i(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "IsPOANeedVerification",
        attrName: "isPOANeedVerificationOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Boolean,
        defaultValue: i(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "IsPOINeedVerification",
        attrName: "isPOINeedVerificationOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Boolean,
        defaultValue: i(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "IsWithdrawalStatusLock",
        attrName: "isWithdrawalStatusLockOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Boolean,
        defaultValue: i(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "NoWithdrawalOrTradingStatus",
        attrName: "noWithdrawalOrTradingStatusOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Boolean,
        defaultValue: i(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "IsAskedFixDetails",
        attrName: "isAskedFixDetailsOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Boolean,
        defaultValue: i(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "IsCashierLockStatus",
        attrName: "isCashierLockStatusOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Boolean,
        defaultValue: i(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "FinancialAssessmentNotComplete",
        attrName: "financialAssessmentNotCompleteOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Boolean,
        defaultValue: i(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "IsAskToAuthenticate",
        attrName: "isAskToAuthenticateOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Boolean,
        defaultValue: i(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "IsSystemMaintenance",
        attrName: "isSystemMaintenanceOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Boolean,
        defaultValue: i(function() {
            return !1
        }, "defaultValue")
    }]), O.registerVariableGroupType("tradershub.WalletFlows.WalletsWithdrawalVerification.OnReady$cashierLockErrorsJSResult", [{
        name: "Is10KLimitReached",
        attrName: "is10KLimitReachedOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Boolean,
        defaultValue: i(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "IsWithdrawalLocked",
        attrName: "isWithdrawalLockedOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Boolean,
        defaultValue: i(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "POAStatus",
        attrName: "pOAStatusOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: i(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "POIStatus",
        attrName: "pOIStatusOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: i(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "IsPOANeedVerification",
        attrName: "isPOANeedVerificationOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Boolean,
        defaultValue: i(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "IsPOINeedVerification",
        attrName: "isPOINeedVerificationOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Boolean,
        defaultValue: i(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "IsWithdrawalStatusLock",
        attrName: "isWithdrawalStatusLockOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Boolean,
        defaultValue: i(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "NoWithdrawalOrTradingStatus",
        attrName: "noWithdrawalOrTradingStatusOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Boolean,
        defaultValue: i(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "IsAskedFixDetails",
        attrName: "isAskedFixDetailsOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Boolean,
        defaultValue: i(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "IsCashierLockStatus",
        attrName: "isCashierLockStatusOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Boolean,
        defaultValue: i(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "FinancialAssessmentNotComplete",
        attrName: "financialAssessmentNotCompleteOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Boolean,
        defaultValue: i(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "FinancialRiskApproval",
        attrName: "financialRiskApprovalOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Boolean,
        defaultValue: i(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "IsAskToAuthenticate",
        attrName: "isAskToAuthenticateOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Boolean,
        defaultValue: i(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "IsSystemMaintenance",
        attrName: "isSystemMaintenanceOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Boolean,
        defaultValue: i(function() {
            return !1
        }, "defaultValue")
    }]), O.registerVariableGroupType("tradershub.WalletFlows.WalletsWithdrawalVerification.RedirectToKYC$vars", [{
        name: "RedirectTo",
        attrName: "redirectToInLocal",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: i(function() {
            return ""
        }, "defaultValue")
    }])
}
var O, ee = new e.Controller.ControllerFactory(O, g);
export {
    ee as a
};