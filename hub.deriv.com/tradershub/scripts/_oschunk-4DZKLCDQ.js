import {
    a as I
} from "./_oschunk-EK7BIWKQ.js";
import {
    a as p
} from "./_oschunk-5N5TJ3ES.js";
import {
    a as b,
    d as h
} from "./_oschunk-VADNKVBQ.js";
import {
    ia as g
} from "./_oschunk-5EPHB76O.js";
import {
    c
} from "./_oschunk-DVBKI63I.js";
var L = {};

function S(s, A, k, t) {
    var O, o, d, l, _, C, w, N;
    let a = s.Currency,
        r = JSON.parse(s.AccountDetails),
        f = JSON.parse(s.GetLimitsData),
        n = JSON.parse(s.CryptoConfig),
        u = r.get_account_status,
        y = (O = f == null ? void 0 : f.get_limits) == null ? void 0 : O.remainder,
        v = (d = (o = n == null ? void 0 : n.crypto_config) == null ? void 0 : o.currencies_config[a]) == null ? void 0 : d.minimum_withdrawal,
        T = new Set((l = u.authentication) == null ? void 0 : l.needs_verification),
        m = new Set(u == null ? void 0 : u.status),
        i = new Set(r == null ? void 0 : r.cashier_validation);
    s.Is10KLimitReached = +y < v, s.IsPOANeedVerification = T.has("document"), s.IsPOINeedVerification = T.has("identity"), s.POAStatus = ((C = (_ = u == null ? void 0 : u.authentication) == null ? void 0 : _.document) == null ? void 0 : C.status) || "none", s.POIStatus = ((N = (w = u == null ? void 0 : u.authentication) == null ? void 0 : w.document) == null ? void 0 : N.status) || "none", s.IsWithdrawalLocked = m.has("withdrawal_locked"), s.IsWithdrawalStatusLock = i.has("withdrawal_locked_status"), s.NoWithdrawalOrTradingStatus = i.has("no_withdrawal_or_trading_status"), s.IsAskedFixDetails = i.has("ASK_FIX_DETAILS")
}
c(S, "default");
var e = g; {
    let A = class A extends e.Controller.BaseViewController {
        constructor(t, a, r) {
            super(t, a, r, L);
            var f = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(t) {
                var a = this.model,
                    r = this.controller,
                    f = this.idService;
                return e.Logger.startActiveSpan("OnInitialize", function(n) {
                    n && (n.setAttribute("code.function", "OnInitialize"), n.setAttribute("outsystems.function.key", "4709a060-0618-4cce-8a89-1d7810a1b5d1"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        if (r.ensureControllerAlive("OnInitialize"), t = r.callContext(t), b.getAuthToken() === e.BuiltinFunctions.nullTextIdentifier()) return e.Navigation.navigateTo(e.Navigation.generateScreenURL("tradershub", "cfds/:ProductIdentifier?", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), t, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(t) {
            this.__onInitialize$Action = t
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(t) {
                var a = this.model,
                    r = this.controller,
                    f = this.idService;
                return e.Logger.startActiveSpan("OnReady", function(n) {
                    return n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "5bdf04c9-9e93-4ead-a12a-ec27b59b5a73"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        r.ensureControllerAlive("OnReady"), t = r.callContext(t);
                        var u = new e.DataTypes.VariableHolder,
                            y = new e.DataTypes.VariableHolder,
                            v = new e.DataTypes.VariableHolder,
                            T = new e.DataTypes.VariableHolder,
                            m = new e.DataTypes.VariableHolder,
                            i = new e.DataTypes.VariableHolder,
                            O = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType);
                        return e.Flow.executeAsyncFlow(function() {
                            return e.Flow.executeSequence(function() {
                                return b.getAccountType() === "demo" ? e.Flow.returnAsync(e.Navigation.navigateTo(e.Navigation.generateScreenURL("tradershub", "wallets", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), t, !0)) : (a.flush(), h.sendAuthorize$Action(!1, t).then(function(o) {
                                    T.value = o
                                }).then(function() {
                                    u.value = h.getBalanceByLoginId$Action(b.getActiveWalletLoginId(), t)
                                }).then(function() {
                                    return e.Flow.executeSequence(function() {
                                        if (e.BuiltinFunctions.textToDecimal(u.value.balanceOut).gt(e.BuiltinFunctions.integerToDecimal(0))) return a.flush(), h.getAccountStatus2$Action(t).then(function(o) {
                                            m.value = o
                                        }).then(function() {
                                            return e.Flow.executeSequence(function() {
                                                if (m.value.isErrorOut) a.variables.isLoadingVar = !1, a.variables.showScreenVar = "ServerError";
                                                else return O.value.jSONOut = e.JSONUtils.serializeToJSON(m.value.responseOut, !1, !1), a.flush(), h.getLimits$Action(t).then(function(o) {
                                                    y.value = o
                                                }).then(function() {
                                                    return e.Flow.executeSequence(function() {
                                                        if (y.value.isErrorOut) a.variables.isLoadingVar = !1, a.variables.showScreenVar = "ServerError";
                                                        else return a.flush(), h.cryptoConfig$Action(t).then(function(o) {
                                                            v.value = o
                                                        }).then(function() {
                                                            v.value.isErrorOut ? (a.variables.isLoadingVar = !1, a.variables.showScreenVar = "ServerError") : (i.value = e.Logger.startActiveSpan("CashierLockErrors", function(o) {
                                                                o && (o.setAttribute("code.function", "CashierLockErrors"), o.setAttribute("outsystems.function.key", "e28d4113-fca1-4abd-9957-d6a5c53bcce5"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                                                try {
                                                                    return r.safeExecuteJSNode(S, "CashierLockErrors", "OnReady", {
                                                                        CryptoConfig: e.DataConversion.JSNodeParamConverter.to(v.value.responseOut, e.DataTypes.DataTypes.Text),
                                                                        Currency: e.DataConversion.JSNodeParamConverter.to(u.value.currencyOut, e.DataTypes.DataTypes.Text),
                                                                        AccountDetails: e.DataConversion.JSNodeParamConverter.to(O.value.jSONOut, e.DataTypes.DataTypes.Text),
                                                                        GetLimitsData: e.DataConversion.JSNodeParamConverter.to(y.value.responseOut, e.DataTypes.DataTypes.Text),
                                                                        Is10KLimitReached: e.DataConversion.JSNodeParamConverter.to(!1, e.DataTypes.DataTypes.Boolean),
                                                                        IsWithdrawalLocked: e.DataConversion.JSNodeParamConverter.to(!1, e.DataTypes.DataTypes.Boolean),
                                                                        POAStatus: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                                                        POIStatus: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                                                        IsPOANeedVerification: e.DataConversion.JSNodeParamConverter.to(!1, e.DataTypes.DataTypes.Boolean),
                                                                        IsPOINeedVerification: e.DataConversion.JSNodeParamConverter.to(!1, e.DataTypes.DataTypes.Boolean),
                                                                        IsWithdrawalStatusLock: e.DataConversion.JSNodeParamConverter.to(!1, e.DataTypes.DataTypes.Boolean),
                                                                        NoWithdrawalOrTradingStatus: e.DataConversion.JSNodeParamConverter.to(!1, e.DataTypes.DataTypes.Boolean),
                                                                        IsAskedFixDetails: e.DataConversion.JSNodeParamConverter.to(!1, e.DataTypes.DataTypes.Boolean)
                                                                    }, function(d) {
                                                                        var l = new(r.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsWithdrawalVerification.OnReady$cashierLockErrorsJSResult"));
                                                                        return l.is10KLimitReachedOut = e.DataConversion.JSNodeParamConverter.from(d.Is10KLimitReached, e.DataTypes.DataTypes.Boolean), l.isWithdrawalLockedOut = e.DataConversion.JSNodeParamConverter.from(d.IsWithdrawalLocked, e.DataTypes.DataTypes.Boolean), l.pOAStatusOut = e.DataConversion.JSNodeParamConverter.from(d.POAStatus, e.DataTypes.DataTypes.Text), l.pOIStatusOut = e.DataConversion.JSNodeParamConverter.from(d.POIStatus, e.DataTypes.DataTypes.Text), l.isPOANeedVerificationOut = e.DataConversion.JSNodeParamConverter.from(d.IsPOANeedVerification, e.DataTypes.DataTypes.Boolean), l.isPOINeedVerificationOut = e.DataConversion.JSNodeParamConverter.from(d.IsPOINeedVerification, e.DataTypes.DataTypes.Boolean), l.isWithdrawalStatusLockOut = e.DataConversion.JSNodeParamConverter.from(d.IsWithdrawalStatusLock, e.DataTypes.DataTypes.Boolean), l.noWithdrawalOrTradingStatusOut = e.DataConversion.JSNodeParamConverter.from(d.NoWithdrawalOrTradingStatus, e.DataTypes.DataTypes.Boolean), l.isAskedFixDetailsOut = e.DataConversion.JSNodeParamConverter.from(d.IsAskedFixDetails, e.DataTypes.DataTypes.Boolean), l
                                                                    }, {}, {})
                                                                } finally {
                                                                    o && o.end()
                                                                }
                                                            }, 1), i.value.is10KLimitReachedOut ? i.value.pOAStatusOut === "none" && i.value.isPOANeedVerificationOut && i.value.pOIStatusOut === "none" && i.value.isPOINeedVerificationOut ? (a.variables.isLoadingVar = !1, a.variables.showScreenVar = "AccountVerification") : i.value.pOAStatusOut === "none" || i.value.isPOANeedVerificationOut ? (a.variables.showScreenVar = "POANotSubmit", a.variables.isLoadingVar = !1) : i.value.pOAStatusOut === "pending" ? (a.variables.isLoadingVar = !1, a.variables.showScreenVar = "POAPending") : i.value.pOIStatusOut === "none" && i.value.isPOINeedVerificationOut ? (a.variables.isLoadingVar = !1, a.variables.showScreenVar = "POINotSubmit") : i.value.pOIStatusOut === "pending" && (a.variables.isLoadingVar = !1, a.variables.showScreenVar = "POIPending") : i.value.isWithdrawalLockedOut ? i.value.isAskedFixDetailsOut ? (a.variables.isLoadingVar = !1, a.variables.showScreenVar = "AskFixDetails") : (i.value.isWithdrawalStatusLockOut || i.value.noWithdrawalOrTradingStatusOut) && (a.variables.isLoadingVar = !1, a.variables.showScreenVar = "DepositOnly") : (a.variables.isLoadingVar = !1, a.variables.showScreenVar = "UserVerification"))
                                                        })
                                                    })
                                                })
                                            })
                                        });
                                        a.variables.isLoadingVar = !1, a.variables.showScreenVar = "HasNoBalance"
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
        set _onReady$Action(t) {
            this.__onReady$Action = t
        }
        get _cashierLockOnClick$Action() {
            return this.hasOwnProperty("__cashierLockOnClick$Action") || (this.__cashierLockOnClick$Action = function(t) {
                var a = this.model,
                    r = this.controller,
                    f = this.idService;
                return e.Logger.startActiveSpan("CashierLockOnClick", function(n) {
                    n && (n.setAttribute("code.function", "CashierLockOnClick"), n.setAttribute("outsystems.function.key", "f3450d06-b916-41eb-8fc9-114574cc17bf"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return r.ensureControllerAlive("CashierLockOnClick"), t = r.callContext(t), e.Navigation.navigateTo(e.Navigation.generateScreenURL("tradershub", "wallets", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), t, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__cashierLockOnClick$Action
        }
        set _cashierLockOnClick$Action(t) {
            this.__cashierLockOnClick$Action = t
        }
        onInitialize$Action(t) {
            var a = this.controller;
            return e.Logger.startActiveSpan("OnInitialize__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnInitialize"), r.setAttribute("outsystems.function.key", "4709a060-0618-4cce-8a89-1d7810a1b5d1"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._onInitialize$Action, t)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        onReady$Action(t) {
            var a = this.controller;
            return e.Logger.startActiveSpan("OnReady__proxy", function(r) {
                return r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "5bdf04c9-9e93-4ead-a12a-ec27b59b5a73"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return a.safeExecuteClientAction(a._onReady$Action, t)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        cashierLockOnClick$Action(t) {
            var a = this.controller;
            return e.Logger.startActiveSpan("CashierLockOnClick__proxy", function(r) {
                r && (r.setAttribute("code.function", "CashierLockOnClick"), r.setAttribute("outsystems.function.key", "f3450d06-b916-41eb-8fc9-114574cc17bf"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._cashierLockOnClick$Action, t)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(t) {
                var a = this.controller,
                    r = this.model,
                    f = this.idService;
                return a.onInitialize$Action(t)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(t) {
            this._onInitializeEventHandler = t
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(t) {
                var a = this.controller,
                    r = this.model,
                    f = this.idService;
                return a.onReady$Action(t)
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
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(t) {
                return I.default.handleError(t, this.callContext())
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
    c(A, "ControllerInner");
    let s = A;
    D = s, D.registerVariableGroupType("tradershub.WalletFlows.WalletsWithdrawalVerification.OnReady$cashierLockErrorsJSResult", [{
        name: "Is10KLimitReached",
        attrName: "is10KLimitReachedOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Boolean,
        defaultValue: c(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "IsWithdrawalLocked",
        attrName: "isWithdrawalLockedOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Boolean,
        defaultValue: c(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "POAStatus",
        attrName: "pOAStatusOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "POIStatus",
        attrName: "pOIStatusOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "IsPOANeedVerification",
        attrName: "isPOANeedVerificationOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Boolean,
        defaultValue: c(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "IsPOINeedVerification",
        attrName: "isPOINeedVerificationOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Boolean,
        defaultValue: c(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "IsWithdrawalStatusLock",
        attrName: "isWithdrawalStatusLockOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Boolean,
        defaultValue: c(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "NoWithdrawalOrTradingStatus",
        attrName: "noWithdrawalOrTradingStatusOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Boolean,
        defaultValue: c(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "IsAskedFixDetails",
        attrName: "isAskedFixDetailsOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Boolean,
        defaultValue: c(function() {
            return !1
        }, "defaultValue")
    }])
}
var D, K = new e.Controller.ControllerFactory(D, p);
export {
    K as a
};