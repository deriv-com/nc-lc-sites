import {
    a as J
} from "./_oschunk-UK73WSZT.js";
import {
    a as H
} from "./_oschunk-Y45M2O2K.js";
import {
    a as T,
    d as b
} from "./_oschunk-27GDEXUT.js";
import {
    If as N,
    dc as S
} from "./_oschunk-HQOLQB4T.js";
import {
    ia as $
} from "./_oschunk-NTQBNJ73.js";
import {
    a as O,
    b as g,
    c as f
} from "./_oschunk-DVBKI63I.js";
var P = {
        "0N1NgjOCaEauNiGFFzpGqA#Value": "Aucune transaction trouv\xE9e",
        "SdHIl6tDZEWkp0OR+ao6XQ#Value": "Transf\xE9rer",
        "TQspuQyAvkSRgErcd8fcBA#Value": "Retirer",
        "gcJUiGquMUWqpLcbsdW73w#Value": "D\xE9p\xF4t"
    },
    I = {
        "fr-FR": {
            translations: P,
            isRTL: !1
        }
    };

function k(d, A, p, r) {
    let i = JSON.parse(d.WalletsList),
        e = JSON.parse(d.Transactions);

    function y(a) {
        let c = new Date(a * 1e3),
            u = {
                year: "numeric",
                month: "long",
                day: "numeric"
            };
        return c.toLocaleDateString(void 0, u)
    }
    f(y, "formatDate");
    let n = {
            dtrade: "Options trading",
            dxtrade: "Deriv X",
            mt5: "Deriv MT5",
            ctrader: "Deriv cTrader"
        },
        o = f((a = "") => {
            if (!a) return "";
            if (a.startsWith("CRW")) {
                let c = i.find(u => u.loginid === a);
                return c ? c.name : ""
            }
            return a.startsWith("CR") ? n.dtrade : a.startsWith("CTR") ? n.ctrader : a.startsWith("CXR") ? n.dxtrade : a.startsWith("MTR") ? n.mt5 : ""
        }, "getPlatform"),
        l = e.reduce((a, c) => {
            if (c.action_type === "buy" || c.action_type === "sell") return a;
            let u = g(O({}, c), {
                date: y(c.transaction_time)
            });
            return c.from && (u.from.platform = o(c.from.loginid)), c.to && (u.to.platform = o(c.to.loginid)), a.push(u), a
        }, []);
    d.FormattedTransactions = JSON.stringify(l)
}
f(k, "default");

function D(d, A, p, r) {
    let i = JSON.parse(d.WalletAccountsList);
    d.WalletAccountsListWithIcon = JSON.stringify(i.map(e => {
        var o;
        let y = e.currency,
            n = (o = A.GetCurrencyIcon(y, d.CurrencyList)) == null ? void 0 : o.CurrencyIcon;
        return g(O({}, e), {
            icon: n
        })
    }))
}
f(D, "default");

function L(d, A, p, r) {
    var o;
    let i = d.WalletLoginId,
        e = JSON.parse(d.AccountList),
        y = [{
            loginid: i,
            platform: "dwallet"
        }],
        n = (o = e.flatMap(l => l.linked_to).find(l => l.platform === "dtrade")) == null ? void 0 : o.loginid;
    d.LinkedTo = JSON.stringify(y), d.ActiveLoginId = n
}
f(L, "default");
var t = $; {
    let A = class A extends t.Controller.BaseViewController {
        constructor(r, i, e) {
            super(r, i, e, I);
            var y = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {
                getCurrenciesByCode$AggrRefresh: 0
            }, this.dataFetchDependentsGraph = {
                getCurrenciesByCode$AggrRefresh: []
            }, this.shouldSendClientVarsToDataSources = !1
        }
        get getCurrenciesByCode$AggrRefresh() {
            return this.hasOwnProperty("_getCurrenciesByCode$AggrRefresh") || (this._getCurrenciesByCode$AggrRefresh = function() {
                var r = function(i, e, l) {
                    var n = this.model,
                        o = this.controller,
                        l = o.callContext(l);
                    return o.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetCurrenciesByCode", "screenservices/tradershub/WalletFlows/Wallets/ScreenDataSetGetCurrenciesByCode", "VYo+3uArs1A1OaLtqWcwfg", i, e, function(a) {
                        n.variables.getCurrenciesByCodeAggr.dataFetchStatusAttr = a
                    }, function(a) {
                        n.variables.getCurrenciesByCodeAggr.replaceWith(t.DataConversion.ServerDataConverter.from(a, n.variables.getCurrenciesByCodeAggr.constructor))
                    }, void 0, void 0, void 0, l, void 0, !0).then(function() {
                        return o._onReady$Action(o.callContext(l))
                    })
                }.bind(this);
                return t.Logger.startActiveSpan("GetCurrenciesByCode", function(i) {
                    return i && (i.setAttribute("code.function", "GetCurrenciesByCode"), i.setAttribute("outsystems.function.key", "4b2c963b-8d82-433c-9589-08746a327840"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "SCREEN_SERVICE_AGGREGATE_CALL")), t.Flow.tryFinally(function() {
                        return r()
                    }, function() {
                        i && i.end()
                    })
                }, 0)
            }), this._getCurrenciesByCode$AggrRefresh
        }
        set getCurrenciesByCode$AggrRefresh(r) {
            this._getCurrenciesByCode$AggrRefresh = r
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = ["getCurrenciesByCode$AggrRefresh"]), this._dataFetchActionNames
        }
        set dataFetchActionNames(r) {
            this._dataFetchActionNames = r
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(r) {
                var i = this.model,
                    e = this.controller,
                    y = this.idService;
                return t.Logger.startActiveSpan("OnReady", function(n) {
                    return n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "0cc02097-4ce0-4ede-8f47-494b4f8b014b"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        e.ensureControllerAlive("OnReady"), r = e.callContext(r);
                        var o = new t.DataTypes.VariableHolder,
                            l = new t.DataTypes.VariableHolder,
                            a = new t.DataTypes.VariableHolder,
                            c = new t.DataTypes.VariableHolder,
                            u = new t.DataTypes.VariableHolder,
                            h = new t.DataTypes.VariableHolder,
                            v = new t.DataTypes.VariableHolder(new t.DataTypes.JSONSerializeOutputType),
                            R = new t.DataTypes.VariableHolder(new t.DataTypes.JSONSerializeOutputType),
                            w = new t.DataTypes.VariableHolder(new t.DataTypes.JSONSerializeOutputType),
                            W = new t.DataTypes.VariableHolder(new t.DataTypes.JSONSerializeOutputType),
                            E = new t.DataTypes.VariableHolder(new t.DataTypes.JSONSerializeOutputType),
                            V = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(S))),
                            F = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(N)));
                        return t.Flow.executeAsyncFlow(function() {
                            return i.variables.isLoadingVar = !0, i.flush(), b.getWalletsListV2$Action(T.getLinkedTo(), r).then(function(s) {
                                a.value = s
                            }).then(function() {
                                return i.flush(), b.statement$Action("", "", r).then(function(s) {
                                    c.value = s
                                })
                            }).then(function() {
                                w.value.jSONOut = t.JSONUtils.serializeToJSON(a.value.walletsListOut, !1, !1), v.value.jSONOut = t.JSONUtils.serializeToJSON(i.variables.getCurrenciesByCodeAggr.listOut, !1, !1), W.value.jSONOut = t.JSONUtils.serializeToJSON(c.value.responseOut.statementAttr.transactionsAttr, !1, !1), h.value = t.Logger.startActiveSpan("GetWalletIcon", function(s) {
                                    s && (s.setAttribute("code.function", "GetWalletIcon"), s.setAttribute("outsystems.function.key", "d9d4f0eb-b1c1-4138-9b76-86aa1b57d77d"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return e.safeExecuteJSNode(D, "GetWalletIcon", "OnReady", {
                                            CurrencyList: t.DataConversion.JSNodeParamConverter.to(v.value.jSONOut, t.DataTypes.DataTypes.Text),
                                            WalletAccountsList: t.DataConversion.JSNodeParamConverter.to(w.value.jSONOut, t.DataTypes.DataTypes.Text),
                                            WalletAccountsListWithIcon: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                                        }, function(_) {
                                            var C = new(e.constructor.getVariableGroupType("tradershub.WalletFlows.Wallets.OnReady$getWalletIconJSResult"));
                                            return C.walletAccountsListWithIconOut = t.DataConversion.JSNodeParamConverter.from(_.WalletAccountsListWithIcon, t.DataTypes.DataTypes.Text), C
                                        }, {
                                            GetCurrencyIcon: b.clientActionProxies.getCurrencyIcon$Action
                                        }, {})
                                    } finally {
                                        s && s.end()
                                    }
                                }, 1), u.value = t.Logger.startActiveSpan("MapTransactions", function(s) {
                                    s && (s.setAttribute("code.function", "MapTransactions"), s.setAttribute("outsystems.function.key", "5ef9e4c4-751f-4056-aaec-8b3656a939c4"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return e.safeExecuteJSNode(k, "MapTransactions", "OnReady", {
                                            Transactions: t.DataConversion.JSNodeParamConverter.to(W.value.jSONOut, t.DataTypes.DataTypes.Text),
                                            WalletsList: t.DataConversion.JSNodeParamConverter.to(w.value.jSONOut, t.DataTypes.DataTypes.Text),
                                            FormattedTransactions: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                                        }, function(_) {
                                            var C = new(e.constructor.getVariableGroupType("tradershub.WalletFlows.Wallets.OnReady$mapTransactionsJSResult"));
                                            return C.formattedTransactionsOut = t.DataConversion.JSNodeParamConverter.from(_.FormattedTransactions, t.DataTypes.DataTypes.Text), C
                                        }, {}, {})
                                    } finally {
                                        s && s.end()
                                    }
                                }, 1), V.value.dataOut = t.JSONUtils.deserializeFromJSON(u.value.formattedTransactionsOut, S, !1), F.value.dataOut = t.JSONUtils.deserializeFromJSON(h.value.walletAccountsListWithIconOut, N, !1), i.variables.transactionsVar = V.value.dataOut, i.variables.walletsAccountListVar = F.value.dataOut, l.value = t.SystemActions.listFilter(i.variables.walletsAccountListVar, function(s) {
                                    return s.is_selectedAttr === !1
                                }, r), R.value.jSONOut = t.JSONUtils.serializeToJSON(l.value.filteredListOut, !1, !1), i.variables.isLoadingVar = !1, i.variables.deserializeAddMoreWalletsListVar = l.value.filteredListOut, i.variables.serializeAddMoreWaleltsListVar = R.value.jSONOut, o.value = t.SystemActions.listFilter(i.variables.walletsAccountListVar, function(s) {
                                    return s.is_selectedAttr === !0
                                }, r), i.variables.activeWalletVar = o.value.filteredListOut.getCurrent(r.iterationContext), E.value.jSONOut = t.JSONUtils.serializeToJSON(i.variables.activeWalletVar, !1, !1), T.setActiveWallet(E.value.jSONOut)
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
        get _onClick$Action() {
            return this.hasOwnProperty("__onClick$Action") || (this.__onClick$Action = function(r) {
                var i = this.model,
                    e = this.controller,
                    y = this.idService;
                return t.Logger.startActiveSpan("OnClick", function(n) {
                    n && (n.setAttribute("code.function", "OnClick"), n.setAttribute("outsystems.function.key", "1ee8c892-2e72-4cf7-84b0-9b852aafa55c"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return e.ensureControllerAlive("OnClick"), r = e.callContext(r), t.Navigation.navigateTo(t.Navigation.generateScreenURL("tradershub", "wallets/recent-transactions", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), r, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onClick$Action
        }
        set _onClick$Action(r) {
            this.__onClick$Action = r
        }
        get _withdrawbtnOnClick$Action() {
            return this.hasOwnProperty("__withdrawbtnOnClick$Action") || (this.__withdrawbtnOnClick$Action = function(r) {
                var i = this.model,
                    e = this.controller,
                    y = this.idService;
                return t.Logger.startActiveSpan("WithdrawbtnOnClick", function(n) {
                    return n && (n.setAttribute("code.function", "WithdrawbtnOnClick"), n.setAttribute("outsystems.function.key", "3daf9e51-bbee-431d-9940-8c0753c70291"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        e.ensureControllerAlive("WithdrawbtnOnClick"), r = e.callContext(r);
                        var o = new t.DataTypes.VariableHolder,
                            l = new t.DataTypes.VariableHolder;
                        return t.Flow.executeAsyncFlow(function() {
                            return i.flush(), b.getAccountStatus2$Action(r).then(function(a) {
                                o.value = a
                            }).then(function() {
                                l.value = t.SystemActions.listFilter(o.value.responseOut.getAccountStatusAttr.statusAttr, function(a) {
                                    return a === "cashier_locked"
                                }, r)
                            }).then(function() {
                                return l.value.filteredListOut.length > 0 ? t.Flow.returnAsync(t.Navigation.navigateTo(t.Navigation.generateScreenURL("tradershub", "wallets/withdrawal/disable", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), r, !0)) : i.variables.activeWalletVar.balanceAttr.gt(t.BuiltinFunctions.integerToDecimal(0)) ? t.Flow.returnAsync(t.Navigation.navigateTo(t.Navigation.generateScreenURL("tradershub", "wallets/withdrawal/user-verification", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), r, !0)) : t.Flow.returnAsync(t.Navigation.navigateTo(t.Navigation.generateScreenURL("tradershub", "wallets/withdrawal/no-balance", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), r, !0))
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__withdrawbtnOnClick$Action
        }
        set _withdrawbtnOnClick$Action(r) {
            this.__withdrawbtnOnClick$Action = r
        }
        get _walletCardOnClick$Action() {
            return this.hasOwnProperty("__walletCardOnClick$Action") || (this.__walletCardOnClick$Action = function(r) {
                var i = this.model,
                    e = this.controller,
                    y = this.idService;
                return t.Logger.startActiveSpan("WalletCardOnClick", function(n) {
                    return n && (n.setAttribute("code.function", "WalletCardOnClick"), n.setAttribute("outsystems.function.key", "5c0dd143-ef44-433e-abc1-02164a9d9bd6"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        e.ensureControllerAlive("WalletCardOnClick"), r = e.callContext(r);
                        var o = new t.DataTypes.VariableHolder,
                            l = new t.DataTypes.VariableHolder,
                            a = new t.DataTypes.VariableHolder,
                            c = new t.DataTypes.VariableHolder(new t.DataTypes.JSONSerializeOutputType);
                        return t.Flow.executeAsyncFlow(function() {
                            return i.flush(), b.setTokenByLoginId$Action(i.variables.deserializeAddMoreWalletsListVar.getCurrent(r.iterationContext).loginidAttr, r).then(function(u) {
                                o.value = u
                            }).then(function() {
                                o.value.isErrorOut || (l.value = t.SystemActions.listFilter(o.value.responseOut.authorizeAttr.account_listAttr, function(u) {
                                    return u.loginidAttr === o.value.responseOut.authorizeAttr.loginidAttr
                                }, r), c.value.jSONOut = t.JSONUtils.serializeToJSON(l.value.filteredListOut, !1, !1), a.value = t.Logger.startActiveSpan("WalletLinkedToAccount", function(u) {
                                    u && (u.setAttribute("code.function", "WalletLinkedToAccount"), u.setAttribute("outsystems.function.key", "0e0199b0-1de2-4f75-a343-50ebf50991e3"), u.setAttribute("outsystems.function.owner.name", "tradershub"), u.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), u.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return e.safeExecuteJSNode(L, "WalletLinkedToAccount", "WalletCardOnClick", {
                                            WalletLoginId: t.DataConversion.JSNodeParamConverter.to(o.value.responseOut.authorizeAttr.loginidAttr, t.DataTypes.DataTypes.Text),
                                            AccountList: t.DataConversion.JSNodeParamConverter.to(c.value.jSONOut, t.DataTypes.DataTypes.Text),
                                            LinkedTo: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text),
                                            ActiveLoginId: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                                        }, function(h) {
                                            var v = new(e.constructor.getVariableGroupType("tradershub.WalletFlows.Wallets.WalletCardOnClick$walletLinkedToAccountJSResult"));
                                            return v.linkedToOut = t.DataConversion.JSNodeParamConverter.from(h.LinkedTo, t.DataTypes.DataTypes.Text), v.activeLoginIdOut = t.DataConversion.JSNodeParamConverter.from(h.ActiveLoginId, t.DataTypes.DataTypes.Text), v
                                        }, {}, {})
                                    } finally {
                                        u && u.end()
                                    }
                                }, 1), T.setLinkedTo(a.value.linkedToOut), T.setActiveLoginId(a.value.activeLoginIdOut))
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__walletCardOnClick$Action
        }
        set _walletCardOnClick$Action(r) {
            this.__walletCardOnClick$Action = r
        }
        get _walletHeaderOnClick$Action() {
            return this.hasOwnProperty("__walletHeaderOnClick$Action") || (this.__walletHeaderOnClick$Action = function(r) {
                var i = this.model,
                    e = this.controller,
                    y = this.idService;
                return t.Logger.startActiveSpan("WalletHeaderOnClick", function(n) {
                    n && (n.setAttribute("code.function", "WalletHeaderOnClick"), n.setAttribute("outsystems.function.key", "94f6a84d-f2a4-4b86-9ac3-005637bb8149"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return e.ensureControllerAlive("WalletHeaderOnClick"), r = e.callContext(r), t.Navigation.navigateTo(t.Navigation.generateScreenURL("tradershub", "wallets/recent-transactions", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), r, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__walletHeaderOnClick$Action
        }
        set _walletHeaderOnClick$Action(r) {
            this.__walletHeaderOnClick$Action = r
        }
        get _depositbtnOnClick$Action() {
            return this.hasOwnProperty("__depositbtnOnClick$Action") || (this.__depositbtnOnClick$Action = function(r) {
                var i = this.model,
                    e = this.controller,
                    y = this.idService;
                return t.Logger.startActiveSpan("DepositbtnOnClick", function(n) {
                    return n && (n.setAttribute("code.function", "DepositbtnOnClick"), n.setAttribute("outsystems.function.key", "f10c1bd2-8027-41af-947d-693bb6f11308"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        e.ensureControllerAlive("DepositbtnOnClick"), r = e.callContext(r);
                        var o = new t.DataTypes.VariableHolder,
                            l = new t.DataTypes.VariableHolder;
                        return t.Flow.executeAsyncFlow(function() {
                            return i.flush(), b.getAccountStatus2$Action(r).then(function(a) {
                                o.value = a
                            }).then(function() {
                                l.value = t.SystemActions.listFilter(o.value.responseOut.getAccountStatusAttr.statusAttr, function(a) {
                                    return a === "cashier_locked"
                                }, r)
                            }).then(function() {
                                return l.value.filteredListOut.length > 0 ? t.Flow.returnAsync(t.Navigation.navigateTo(t.Navigation.generateScreenURL("tradershub", "wallets/deposit/disable", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), r, !0)) : i.variables.activeWalletVar.currency_typeAttr === "fiat" ? t.Flow.returnAsync(t.Navigation.navigateTo(t.Navigation.generateScreenURL("tradershub", "wallets/deposit/fiat", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), r, !0)) : t.Flow.returnAsync(t.Navigation.navigateTo(t.Navigation.generateScreenURL("tradershub", "wallets/deposit/crypto", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), r, !0))
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__depositbtnOnClick$Action
        }
        set _depositbtnOnClick$Action(r) {
            this.__depositbtnOnClick$Action = r
        }
        onReady$Action(r) {
            var i = this.controller;
            return t.Logger.startActiveSpan("OnReady__proxy", function(e) {
                return e && (e.setAttribute("code.function", "OnReady"), e.setAttribute("outsystems.function.key", "0cc02097-4ce0-4ede-8f47-494b4f8b014b"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._onReady$Action, r)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        onClick$Action(r) {
            var i = this.controller;
            return t.Logger.startActiveSpan("OnClick__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnClick"), e.setAttribute("outsystems.function.key", "1ee8c892-2e72-4cf7-84b0-9b852aafa55c"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onClick$Action, r)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        withdrawbtnOnClick$Action(r) {
            var i = this.controller;
            return t.Logger.startActiveSpan("WithdrawbtnOnClick__proxy", function(e) {
                return e && (e.setAttribute("code.function", "WithdrawbtnOnClick"), e.setAttribute("outsystems.function.key", "3daf9e51-bbee-431d-9940-8c0753c70291"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._withdrawbtnOnClick$Action, r)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        walletCardOnClick$Action(r) {
            var i = this.controller;
            return t.Logger.startActiveSpan("WalletCardOnClick__proxy", function(e) {
                return e && (e.setAttribute("code.function", "WalletCardOnClick"), e.setAttribute("outsystems.function.key", "5c0dd143-ef44-433e-abc1-02164a9d9bd6"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._walletCardOnClick$Action, r)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        walletHeaderOnClick$Action(r) {
            var i = this.controller;
            return t.Logger.startActiveSpan("WalletHeaderOnClick__proxy", function(e) {
                e && (e.setAttribute("code.function", "WalletHeaderOnClick"), e.setAttribute("outsystems.function.key", "94f6a84d-f2a4-4b86-9ac3-005637bb8149"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._walletHeaderOnClick$Action, r)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        depositbtnOnClick$Action(r) {
            var i = this.controller;
            return t.Logger.startActiveSpan("DepositbtnOnClick__proxy", function(e) {
                return e && (e.setAttribute("code.function", "DepositbtnOnClick"), e.setAttribute("outsystems.function.key", "f10c1bd2-8027-41af-947d-693bb6f11308"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._depositbtnOnClick$Action, r)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(r) {
            this._onInitializeEventHandler = r
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = null), this._onReadyEventHandler
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
                return J.default.handleError(r, this.callContext())
            }), this._handleError
        }
        set handleError(r) {
            this._handleError = r
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return b.defaultTimeout
        }
    };
    f(A, "ControllerInner");
    let d = A;
    m = d, m.registerVariableGroupType("tradershub.WalletFlows.Wallets.OnReady$mapTransactionsJSResult", [{
        name: "FormattedTransactions",
        attrName: "formattedTransactionsOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: f(function() {
            return ""
        }, "defaultValue")
    }]), m.registerVariableGroupType("tradershub.WalletFlows.Wallets.OnReady$getWalletIconJSResult", [{
        name: "WalletAccountsListWithIcon",
        attrName: "walletAccountsListWithIconOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: f(function() {
            return ""
        }, "defaultValue")
    }]), m.registerVariableGroupType("tradershub.WalletFlows.Wallets.WalletCardOnClick$walletLinkedToAccountJSResult", [{
        name: "LinkedTo",
        attrName: "linkedToOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: f(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "ActiveLoginId",
        attrName: "activeLoginIdOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: f(function() {
            return ""
        }, "defaultValue")
    }])
}
var m, ot = new t.Controller.ControllerFactory(m, H);
export {
    ot as a
};