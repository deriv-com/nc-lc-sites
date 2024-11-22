import {
    a as R
} from "./_oschunk-UK73WSZT.js";
import {
    a as N
} from "./_oschunk-Y45M2O2K.js";
import {
    a as p,
    d as h
} from "./_oschunk-27GDEXUT.js";
import {
    dc as v,
    oc as m
} from "./_oschunk-HQOLQB4T.js";
import {
    ia as C
} from "./_oschunk-NTQBNJ73.js";
import {
    a as S,
    b as g,
    c as f
} from "./_oschunk-DVBKI63I.js";
var F = {
        "ZQ_nxfAG9UusGyQPWO49BA#Value": "Vos transactions appara\xEEtront ici.",
        "K8vQm62PtEKjuxDpZl6z2Q#Value": "Aucune transaction trouv\xE9e",
        "36I4v+f8ckKzWPDKEate7g#Value": "Transf\xE9rer",
        "fCvYKaeAIkC05YQyQv5bfw#Value": "Retirer",
        "s9NNwNCXZ0CvWcJ5FqloYw#Value": "D\xE9p\xF4t"
    },
    E = {
        "fr-FR": {
            translations: F,
            isRTL: !1
        }
    };

function A(d, y, k, e) {
    let a = JSON.parse(d.WalletsList),
        r = JSON.parse(d.Transactions);

    function b(i) {
        let o = new Date(i * 1e3),
            c = {
                year: "numeric",
                month: "long",
                day: "numeric"
            };
        return o.toLocaleDateString(void 0, c)
    }
    f(b, "formatDate");
    let n = {
            dtrade: "Options trading",
            dxtrade: "Deriv X",
            mt5: "Deriv MT5",
            ctrader: "Deriv cTrader"
        },
        u = f((i = "") => {
            if (!i) return "";
            if (i.startsWith("CRW")) {
                let o = a.find(c => c.loginid === i);
                return o ? o.name : ""
            }
            return i.startsWith("CR") ? n.dtrade : i.startsWith("CTR") ? n.ctrader : i.startsWith("CXR") ? n.dxtrade : i.startsWith("MTR") ? n.mt5 : ""
        }, "getPlatform"),
        l = r.reduce((i, o) => {
            if (o.action_type === "buy" || o.action_type === "sell") return i;
            let c = g(S({}, o), {
                date: b(o.transaction_time)
            });
            return o.from && (c.from.platform = u(o.from.loginid)), o.to && (c.to.platform = u(o.to.loginid)), i.push(c), i
        }, []);
    d.FormattedTransactions = JSON.stringify(l)
}
f(A, "default");
var t = C; {
    let y = class y extends t.Controller.BaseViewController {
        constructor(e, a, r) {
            super(e, a, r, E);
            var b = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _depositbtnOnClick$Action() {
            return this.hasOwnProperty("__depositbtnOnClick$Action") || (this.__depositbtnOnClick$Action = function(e) {
                var a = this.model,
                    r = this.controller,
                    b = this.idService;
                return t.Logger.startActiveSpan("DepositbtnOnClick", function(n) {
                    return n && (n.setAttribute("code.function", "DepositbtnOnClick"), n.setAttribute("outsystems.function.key", "55599c77-f67d-4742-934e-a2b7cea23339"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        r.ensureControllerAlive("DepositbtnOnClick"), e = r.callContext(e);
                        var u = new t.DataTypes.VariableHolder,
                            l = new t.DataTypes.VariableHolder;
                        return t.Flow.executeAsyncFlow(function() {
                            return a.flush(), h.getAccountStatus2$Action(e).then(function(i) {
                                u.value = i
                            }).then(function() {
                                l.value = t.SystemActions.listFilter(u.value.responseOut.getAccountStatusAttr.statusAttr, function(i) {
                                    return i === "cashier_locked"
                                }, e)
                            }).then(function() {
                                return l.value.filteredListOut.length > 0 ? t.Flow.returnAsync(t.Navigation.navigateTo(t.Navigation.generateScreenURL("tradershub", "wallets/deposit/disable", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), e, !0)) : a.variables.activeWalletVar.currency_typeAttr === "fiat" ? t.Flow.returnAsync(t.Navigation.navigateTo(t.Navigation.generateScreenURL("tradershub", "wallets/deposit/fiat", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), e, !0)) : t.Flow.returnAsync(t.Navigation.navigateTo(t.Navigation.generateScreenURL("tradershub", "wallets/deposit/crypto", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), e, !0))
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__depositbtnOnClick$Action
        }
        set _depositbtnOnClick$Action(e) {
            this.__depositbtnOnClick$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var a = this.model,
                    r = this.controller,
                    b = this.idService;
                return t.Logger.startActiveSpan("OnReady", function(n) {
                    return n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "b73a1376-9602-49de-8fb3-41cb4767b1ed"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        r.ensureControllerAlive("OnReady"), e = r.callContext(e);
                        var u = new t.DataTypes.VariableHolder,
                            l = new t.DataTypes.VariableHolder,
                            i = new t.DataTypes.VariableHolder,
                            o = new t.DataTypes.VariableHolder(new t.DataTypes.JSONSerializeOutputType),
                            c = new t.DataTypes.VariableHolder(new t.DataTypes.JSONSerializeOutputType),
                            w = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(m))),
                            _ = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(v)));
                        return t.Flow.executeAsyncFlow(function() {
                            return t.Flow.executeSequence(function() {
                                if (!a.variables.isLoadingVar) return a.variables.isLoadingVar = !0, w.value.dataOut = t.JSONUtils.deserializeFromJSON(p.getActiveWallet(), m, !1), a.variables.activeWalletVar = w.value.dataOut, a.flush(), h.statement$Action("", "", e).then(function(s) {
                                    l.value = s
                                }).then(function() {
                                    return a.flush(), h.getWalletsList$Action(e).then(function(s) {
                                        u.value = s
                                    })
                                }).then(function() {
                                    o.value.jSONOut = t.JSONUtils.serializeToJSON(u.value.walletsListOut, !1, !1), c.value.jSONOut = t.JSONUtils.serializeToJSON(l.value.responseOut.statementAttr.transactionsAttr, !1, !1), i.value = t.Logger.startActiveSpan("MapTransactions", function(s) {
                                        s && (s.setAttribute("code.function", "MapTransactions"), s.setAttribute("outsystems.function.key", "e24569a6-bb66-4dde-a3bd-721cc79fa4aa"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                        try {
                                            return r.safeExecuteJSNode(A, "MapTransactions", "OnReady", {
                                                WalletsList: t.DataConversion.JSNodeParamConverter.to(o.value.jSONOut, t.DataTypes.DataTypes.Text),
                                                Transactions: t.DataConversion.JSNodeParamConverter.to(c.value.jSONOut, t.DataTypes.DataTypes.Text),
                                                FormattedTransactions: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                                            }, function(D) {
                                                var O = new(r.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsRecentTransactions.OnReady$mapTransactionsJSResult"));
                                                return O.formattedTransactionsOut = t.DataConversion.JSNodeParamConverter.from(D.FormattedTransactions, t.DataTypes.DataTypes.Text), O
                                            }, {}, {})
                                        } finally {
                                            s && s.end()
                                        }
                                    }, 1), _.value.dataOut = t.JSONUtils.deserializeFromJSON(i.value.formattedTransactionsOut, v, !1), a.variables.transactionsVar = _.value.dataOut, a.variables.isLoadingVar = !1
                                })
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _withdrawbtnOnClick$Action() {
            return this.hasOwnProperty("__withdrawbtnOnClick$Action") || (this.__withdrawbtnOnClick$Action = function(e) {
                var a = this.model,
                    r = this.controller,
                    b = this.idService;
                return t.Logger.startActiveSpan("WithdrawbtnOnClick", function(n) {
                    return n && (n.setAttribute("code.function", "WithdrawbtnOnClick"), n.setAttribute("outsystems.function.key", "bc93fae8-9a73-40ab-a8ce-82d29e6c9363"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        r.ensureControllerAlive("WithdrawbtnOnClick"), e = r.callContext(e);
                        var u = new t.DataTypes.VariableHolder,
                            l = new t.DataTypes.VariableHolder;
                        return t.Flow.executeAsyncFlow(function() {
                            return a.flush(), h.getAccountStatus2$Action(e).then(function(i) {
                                l.value = i
                            }).then(function() {
                                u.value = t.SystemActions.listFilter(l.value.responseOut.getAccountStatusAttr.statusAttr, function(i) {
                                    return i === "cashier_locked"
                                }, e)
                            }).then(function() {
                                return u.value.filteredListOut.length > 0 ? t.Flow.returnAsync(t.Navigation.navigateTo(t.Navigation.generateScreenURL("tradershub", "wallets/withdrawal/disable", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), e, !0)) : a.variables.activeWalletVar.balanceAttr.gt(t.BuiltinFunctions.integerToDecimal(0)) ? t.Flow.returnAsync(t.Navigation.navigateTo(t.Navigation.generateScreenURL("tradershub", "wallets/withdrawal/user-verification", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), e, !0)) : t.Flow.returnAsync(t.Navigation.navigateTo(t.Navigation.generateScreenURL("tradershub", "wallets/withdrawal/no-balance", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), e, !0))
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__withdrawbtnOnClick$Action
        }
        set _withdrawbtnOnClick$Action(e) {
            this.__withdrawbtnOnClick$Action = e
        }
        depositbtnOnClick$Action(e) {
            var a = this.controller;
            return t.Logger.startActiveSpan("DepositbtnOnClick__proxy", function(r) {
                return r && (r.setAttribute("code.function", "DepositbtnOnClick"), r.setAttribute("outsystems.function.key", "55599c77-f67d-4742-934e-a2b7cea23339"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return a.safeExecuteClientAction(a._depositbtnOnClick$Action, e)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        onReady$Action(e) {
            var a = this.controller;
            return t.Logger.startActiveSpan("OnReady__proxy", function(r) {
                return r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "b73a1376-9602-49de-8fb3-41cb4767b1ed"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return a.safeExecuteClientAction(a._onReady$Action, e)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        withdrawbtnOnClick$Action(e) {
            var a = this.controller;
            return t.Logger.startActiveSpan("WithdrawbtnOnClick__proxy", function(r) {
                return r && (r.setAttribute("code.function", "WithdrawbtnOnClick"), r.setAttribute("outsystems.function.key", "bc93fae8-9a73-40ab-a8ce-82d29e6c9363"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return a.safeExecuteClientAction(a._withdrawbtnOnClick$Action, e)
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
                var a = this.controller,
                    r = this.model,
                    b = this.idService;
                return a.onReady$Action(e)
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
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(e) {
                return R.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return h.defaultTimeout
        }
    };
    f(y, "ControllerInner");
    let d = y;
    T = d, T.registerVariableGroupType("tradershub.WalletFlows.WalletsRecentTransactions.OnReady$mapTransactionsJSResult", [{
        name: "FormattedTransactions",
        attrName: "formattedTransactionsOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: f(function() {
            return ""
        }, "defaultValue")
    }])
}
var T, Q = new t.Controller.ControllerFactory(T, N);
export {
    Q as a
};