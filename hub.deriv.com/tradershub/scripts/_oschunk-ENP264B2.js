import {
    a as B
} from "./_oschunk-UK73WSZT.js";
import {
    a as G
} from "./_oschunk-Y45M2O2K.js";
import {
    a as O,
    d as C
} from "./_oschunk-27GDEXUT.js";
import {
    kf as D,
    oc as E,
    zb as _
} from "./_oschunk-HQOLQB4T.js";
import {
    ia as M
} from "./_oschunk-NTQBNJ73.js";
import {
    c as l,
    h as H
} from "./_oschunk-DVBKI63I.js";
var z = {};

function R(c, y, h, n) {
    return new Promise(function(r, e) {
        let o = c.BaseCurrency,
            a = c.TargetCurrency,
            i = c.FractionalDigits,
            u = 59;
        window.timerInterval = null, window.exchangeInterval = null, window.getExchangeRate = () => H(this, null, function*() {
            let m = yield y.ExchangeRates(o), A = JSON.parse(m.Response), b = Number(A.exchange_rates.rates[c.TargetCurrency].toFixed(i));
            y.AssignExchangeRate(b), u = 59, r()
        }), window.startCountdown = () => (timerInterval && clearInterval(timerInterval), timerInterval = setInterval(() => {
            u > 0 && u--, y.AssignExchangeRateCountdownTimer(u)
        }, 1e3), timerInterval), window.cleanup = () => {
            timerInterval && (clearInterval(timerInterval), timerInterval = null), exchangeInterval && (clearInterval(exchangeInterval), exchangeInterval = null)
        }, window.getExchangeRate().then(() => {
            window.timerIntervalRef = startCountdown(), exchangeInterval = setInterval(getExchangeRate, 6e4)
        })
    })
}
l(R, "default");

function x(c, y, h, n) {
    let r = c.Rate,
        e = c.InputId,
        o = c.FractionalDigits,
        a = document.getElementById(e);
    if (a) {
        let u = (parseFloat(a.value) || 0) / r;
        isFinite(u) || (u = 0), c.ConvertedTransferAmount = parseFloat(u.toFixed(o))
    }
}
l(x, "default");

function N(c, y, h, n) {
    let r = c.Rate,
        e = c.Amount,
        o = c.FractionalDigits,
        a = e * r;
    c.ConvertedAmount = parseFloat(a.toFixed(o))
}
l(N, "default");

function F(c, y, h, n) {
    let r = c.TransferAmount,
        e = c.FractionalDigits,
        a = 2 / 100 * r,
        i = r - a;
    c.Fees = parseFloat(a.toFixed(e)), c.FinalAmount = parseFloat(i.toFixed(e))
}
l(F, "default");

function I(c, y, h, n) {
    let r = c.TransferAmount,
        e = c.FractionalDigits,
        a = 2 / 100 * r,
        i = r - a;
    c.Fees = parseFloat(a.toFixed(e)), c.FinalAmount = parseFloat(i.toFixed(e))
}
l(I, "default");

function k(c, y, h, n) {
    let r = c.Rate,
        e = c.Amount,
        o = c.FractionalDigits,
        a = e * r;
    c.ConvertedAmount = parseFloat(a.toFixed(o))
}
l(k, "default");

function p(c, y, h, n) {
    let r = c.InputId,
        e = document.getElementById(r);
    e && e.getAttribute("data-dirty") === "False" && (y.GetExchangeRate(), e.setAttribute("data-dirty", "True"))
}
l(p, "default");

function V(c, y, h, n) {
    var W;
    let r = JSON.parse(c.WalletsAccounts),
        e = JSON.parse(c.Balance),
        o = JSON.parse(c.ActiveWallet),
        a = JSON.parse(c.WebsiteStatus),
        i = e.balance.accounts,
        u = o.linked_to,
        m = a.website_status.currencies_config[o.currency],
        A = (W = u.find(v => v.platform === "dtrade")) == null ? void 0 : W.loginid,
        b = i[A].balance,
        s = {
            icon: o.icon,
            name: o.name,
            currency: o.currency,
            loginid: o.loginid,
            formattedBalance: o.formatted_balance,
            isCrypto: o.is_crypto,
            accountCategory: "Wallets",
            fractionalDigits: a.website_status.currencies_config[o.currency].fractional_digits,
            transferBetweenAccountsRates: a.website_status.currencies_config[o.currency].transfer_between_accounts.fees
        },
        f = r.map(v => ({
            icon: v.icon,
            name: v.name,
            currency: v.currency,
            loginid: v.loginid,
            formattedBalance: v.formatted_balance,
            isCrypto: v.is_crypto,
            accountCategory: "Wallets",
            fractionalDigits: a.website_status.currencies_config[v.currency].fractional_digits,
            transferBetweenAccountsRates: a.website_status.currencies_config[v.currency].transfer_between_accounts.fees
        })),
        d = {
            icon: "/tradershub/img/tradershub.DerivAccountOptionsLight.svg",
            name: "Options trading",
            currency: o.currency,
            loginid: A,
            formattedBalance: `${b} ${o.currency}`,
            isCrypto: o.is_crypto,
            accountCategory: `Accounts linked to ${o.name}`,
            fractionalDigits: a.website_status.currencies_config[o.currency].fractional_digits,
            transferBetweenAccountsRates: a.website_status.currencies_config[o.currency].transfer_between_accounts.fees
        },
        g = [s, ...f, d],
        j = [s, d];

    function L(v) {
        return v.reduce((w, P) => {
            let S = P.accountCategory;
            return w[S] || (w[S] = []), w[S].push(P), w
        }, {})
    }
    l(L, "groupAccountsByCategory");
    let J = L(g),
        K = L(j),
        U = Object.keys(J),
        q = Object.values(J).flat(),
        Q = Object.values(K).flat();
    c.TransferAccountKeys = JSON.stringify(U), c.TransferAccountList = JSON.stringify(q), c.TransferFromAccountList = JSON.stringify(Q)
}
l(V, "default");

function $(c, y, h) {
    window.clearInterval(window.timerInterval), window.clearInterval(window.exchangeInterval)
}
l($, "default");
var t = M; {
    let y = class y extends t.Controller.BaseViewController {
        constructor(n, r, e) {
            super(n, r, e, z);
            var o = this.controller;
            this.clientActionProxies = {
                assignExchangeRate$Action: l(function(a) {
                    return a = a === void 0 ? t.DataTypes.Decimal.defaultValue : a, o.executeActionInsideJSNode(o._assignExchangeRate$Action.bind(o, t.DataConversion.JSNodeParamConverter.from(a, t.DataTypes.DataTypes.Decimal)), o.callContext(), function(i) {
                        return {}
                    }, function() {}, "AssignExchangeRate")
                }, "assignExchangeRate$Action"),
                assignExchangeRateCountdownTimer$Action: l(function(a) {
                    return a = a === void 0 ? t.DataTypes.Decimal.defaultValue : a, o.executeActionInsideJSNode(o._assignExchangeRateCountdownTimer$Action.bind(o, t.DataConversion.JSNodeParamConverter.from(a, t.DataTypes.DataTypes.Decimal)), o.callContext(), function(i) {
                        return {}
                    }, function() {}, "AssignExchangeRateCountdownTimer")
                }, "assignExchangeRateCountdownTimer$Action"),
                getExchangeRate$Action: l(function() {
                    return o.executeActionInsideJSNode(o._getExchangeRate$Action.bind(o), o.callContext(), function(a) {
                        return {}
                    }, function() {}, "GetExchangeRate")
                }, "getExchangeRate$Action")
            }, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(n) {
            this._dataFetchActionNames = n
        }
        get _onCloseTransferFromModal$Action() {
            return this.hasOwnProperty("__onCloseTransferFromModal$Action") || (this.__onCloseTransferFromModal$Action = function(n) {
                var r = this.model,
                    e = this.controller,
                    o = this.idService;
                return t.Logger.startActiveSpan("OnCloseTransferFromModal", function(a) {
                    a && (a.setAttribute("code.function", "OnCloseTransferFromModal"), a.setAttribute("outsystems.function.key", "025247b5-342a-441e-8f2e-30a7405e4d8e"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnCloseTransferFromModal"), n = e.callContext(n), r.variables.isTransferFromOpenVar = !1
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__onCloseTransferFromModal$Action
        }
        set _onCloseTransferFromModal$Action(n) {
            this.__onCloseTransferFromModal$Action = n
        }
        get _assignExchangeRate$Action() {
            return this.hasOwnProperty("__assignExchangeRate$Action") || (this.__assignExchangeRate$Action = function(n, r) {
                var e = this.model,
                    o = this.controller,
                    a = this.idService;
                return t.Logger.startActiveSpan("AssignExchangeRate", function(i) {
                    i && (i.setAttribute("code.function", "AssignExchangeRate"), i.setAttribute("outsystems.function.key", "03211425-510d-4afc-9504-a67819619295"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("AssignExchangeRate"), r = o.callContext(r);
                        var u = new t.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsTransfer.AssignExchangeRate$vars")));
                        u.value.rateInLocal = n, e.variables.exchangeRateVar = u.value.rateInLocal
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__assignExchangeRate$Action
        }
        set _assignExchangeRate$Action(n) {
            this.__assignExchangeRate$Action = n
        }
        get _assignExchangeRateCountdownTimer$Action() {
            return this.hasOwnProperty("__assignExchangeRateCountdownTimer$Action") || (this.__assignExchangeRateCountdownTimer$Action = function(n, r) {
                var e = this.model,
                    o = this.controller,
                    a = this.idService;
                return t.Logger.startActiveSpan("AssignExchangeRateCountdownTimer", function(i) {
                    i && (i.setAttribute("code.function", "AssignExchangeRateCountdownTimer"), i.setAttribute("outsystems.function.key", "16179031-707c-45a4-8f64-4bd3edf8e1dd"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("AssignExchangeRateCountdownTimer"), r = o.callContext(r);
                        var u = new t.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsTransfer.AssignExchangeRateCountdownTimer$vars")));
                        u.value.exchangeRateTimerInLocal = n, e.variables.exchangeRateCountdownTimerVar = t.BuiltinFunctions.decimalToInteger(t.BuiltinFunctions.trunc(u.value.exchangeRateTimerInLocal))
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__assignExchangeRateCountdownTimer$Action
        }
        set _assignExchangeRateCountdownTimer$Action(n) {
            this.__assignExchangeRateCountdownTimer$Action = n
        }
        get _transferOnClick$Action() {
            return this.hasOwnProperty("__transferOnClick$Action") || (this.__transferOnClick$Action = function(n) {
                var r = this.model,
                    e = this.controller,
                    o = this.idService;
                return t.Logger.startActiveSpan("TransferOnClick", function(a) {
                    return a && (a.setAttribute("code.function", "TransferOnClick"), a.setAttribute("outsystems.function.key", "180ff7b9-fec8-4133-bfeb-e67400f33ff5"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        e.ensureControllerAlive("TransferOnClick"), n = e.callContext(n);
                        var i = new t.DataTypes.VariableHolder,
                            u = new t.DataTypes.VariableHolder,
                            m = new t.DataTypes.VariableHolder;
                        return t.Flow.executeAsyncFlow(function() {
                            return t.Flow.executeSequence(function() {
                                return r.variables.showCurrencySwitcherVar ? t.Flow.executeSequence(function() {
                                    return r.variables.currencySwitcherVar === r.variables.activeWalletVar.currencyAttr ? (r.flush(), C.transferBetweenAccounts$Action(r.variables.transferFromVar.loginidAttr, r.variables.transferToVar.loginidAttr, r.variables.finalAmountVar, r.variables.activeWalletVar.currencyAttr, n).then(function(A) {
                                        u.value = A
                                    }).then(function() {
                                        u.value.isErrorOut !== !0 && (r.variables.isTransferSuccessVar = !0)
                                    })) : (r.flush(), C.transferBetweenAccounts$Action(r.variables.transferFromVar.loginidAttr, r.variables.transferToVar.loginidAttr, r.variables.convertedFinalAmountVar, r.variables.activeWalletVar.currencyAttr, n).then(function(A) {
                                        i.value = A
                                    }).then(function() {
                                        i.value.isErrorOut !== !0 && (r.variables.isTransferSuccessVar = !0)
                                    }))
                                }) : (r.flush(), C.transferBetweenAccounts$Action(r.variables.transferFromVar.loginidAttr, r.variables.transferToVar.loginidAttr, r.variables.transferAmountVar, r.variables.activeWalletVar.currencyAttr, n).then(function(A) {
                                    m.value = A
                                }).then(function() {
                                    m.value.isErrorOut || (r.variables.isTransferSuccessVar = !0)
                                }))
                            })
                        })
                    }, function() {
                        a && a.end()
                    })
                }, 1)
            }), this.__transferOnClick$Action
        }
        set _transferOnClick$Action(n) {
            this.__transferOnClick$Action = n
        }
        get _getExchangeRate$Action() {
            return this.hasOwnProperty("__getExchangeRate$Action") || (this.__getExchangeRate$Action = function(n) {
                var r = this.model,
                    e = this.controller,
                    o = this.idService;
                return t.Logger.startActiveSpan("GetExchangeRate", function(a) {
                    return a && (a.setAttribute("code.function", "GetExchangeRate"), a.setAttribute("outsystems.function.key", "1efd211c-94d4-43c0-a293-fa6fe524745f"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        return e.ensureControllerAlive("GetExchangeRate"), n = e.callContext(n), t.Flow.executeAsyncFlow(function() {
                            return t.Logger.startActiveSpan("InitExchangeRate", function(i) {
                                i && (i.setAttribute("code.function", "InitExchangeRate"), i.setAttribute("outsystems.function.key", "d0c04ed5-79c0-4dcd-a62a-2db5677a1421"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return e.safeExecuteAsyncJSNode(R, "InitExchangeRate", "GetExchangeRate", {
                                        TargetCurrency: t.DataConversion.JSNodeParamConverter.to(r.variables.transferToVar.currencyAttr, t.DataTypes.DataTypes.Text),
                                        FractionalDigits: t.DataConversion.JSNodeParamConverter.to(r.variables.transferToVar.fractionalDigitsAttr, t.DataTypes.DataTypes.Integer),
                                        BaseCurrency: t.DataConversion.JSNodeParamConverter.to(r.variables.activeWalletVar.currencyAttr, t.DataTypes.DataTypes.Text)
                                    }, function(u) {}, {
                                        ExchangeRates: C.clientActionProxies.exchangeRates$Action,
                                        AssignExchangeRate: e.clientActionProxies.assignExchangeRate$Action,
                                        AssignExchangeRateCountdownTimer: e.clientActionProxies.assignExchangeRateCountdownTimer$Action
                                    }, {})
                                } finally {
                                    i && i.end()
                                }
                            }, 1)
                        })
                    }, function() {
                        a && a.end()
                    })
                }, 1)
            }), this.__getExchangeRate$Action
        }
        set _getExchangeRate$Action(n) {
            this.__getExchangeRate$Action = n
        }
        get _onChangeInputTransferAmount$Action() {
            return this.hasOwnProperty("__onChangeInputTransferAmount$Action") || (this.__onChangeInputTransferAmount$Action = function(n) {
                var r = this.model,
                    e = this.controller,
                    o = this.idService;
                return t.Logger.startActiveSpan("OnChangeInputTransferAmount", function(a) {
                    a && (a.setAttribute("code.function", "OnChangeInputTransferAmount"), a.setAttribute("outsystems.function.key", "4091bcf4-616b-4e2a-97da-d41d78267c7b"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnChangeInputTransferAmount"), n = e.callContext(n);
                        var i = new t.DataTypes.VariableHolder,
                            u = new t.DataTypes.VariableHolder,
                            m = new t.DataTypes.VariableHolder,
                            A = new t.DataTypes.VariableHolder,
                            b = new t.DataTypes.VariableHolder;
                        t.Logger.startActiveSpan("TriggerExchangeRate", function(s) {
                            s && (s.setAttribute("code.function", "TriggerExchangeRate"), s.setAttribute("outsystems.function.key", "c2655efd-cf4a-4b9f-8158-03890f271113"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(p, "TriggerExchangeRate", "OnChangeInputTransferAmount", {
                                    InputId: t.DataConversion.JSNodeParamConverter.to(o.getId("InputTransferExchangeAmount"), t.DataTypes.DataTypes.Text)
                                }, function(f) {}, {
                                    GetExchangeRate: e.clientActionProxies.getExchangeRate$Action
                                }, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1), m.value = t.Logger.startActiveSpan("CalculateTransferFromFees", function(s) {
                            s && (s.setAttribute("code.function", "CalculateTransferFromFees"), s.setAttribute("outsystems.function.key", "a85aacbc-1d23-46d9-9836-8b4e1c806bf8"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(F, "CalculateTransferFromFees", "OnChangeInputTransferAmount", {
                                    FractionalDigits: t.DataConversion.JSNodeParamConverter.to(r.variables.transferFromVar.fractionalDigitsAttr.toString(), t.DataTypes.DataTypes.Text),
                                    TransferAmount: t.DataConversion.JSNodeParamConverter.to(r.variables.transferAmountVar, t.DataTypes.DataTypes.Decimal),
                                    Fees: t.DataConversion.JSNodeParamConverter.to(t.DataTypes.Decimal.defaultValue, t.DataTypes.DataTypes.Decimal),
                                    FinalAmount: t.DataConversion.JSNodeParamConverter.to(t.DataTypes.Decimal.defaultValue, t.DataTypes.DataTypes.Decimal)
                                }, function(f) {
                                    var d = new(e.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnChangeInputTransferAmount$calculateTransferFromFeesJSResult"));
                                    return d.feesOut = t.DataConversion.JSNodeParamConverter.from(f.Fees, t.DataTypes.DataTypes.Decimal), d.finalAmountOut = t.DataConversion.JSNodeParamConverter.from(f.FinalAmount, t.DataTypes.DataTypes.Decimal), d
                                }, {}, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1), b.value = t.Logger.startActiveSpan("CalculateExchangeRateTransferFrom", function(s) {
                            s && (s.setAttribute("code.function", "CalculateExchangeRateTransferFrom"), s.setAttribute("outsystems.function.key", "b6261695-b8e4-41fc-b252-e662fb4f54f1"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(k, "CalculateExchangeRateTransferFrom", "OnChangeInputTransferAmount", {
                                    Rate: t.DataConversion.JSNodeParamConverter.to(r.variables.exchangeRateVar, t.DataTypes.DataTypes.Decimal),
                                    FractionalDigits: t.DataConversion.JSNodeParamConverter.to(r.variables.transferToVar.fractionalDigitsAttr, t.DataTypes.DataTypes.Integer),
                                    Amount: t.DataConversion.JSNodeParamConverter.to(m.value.finalAmountOut, t.DataTypes.DataTypes.Decimal),
                                    ConvertedAmount: t.DataConversion.JSNodeParamConverter.to(t.DataTypes.Decimal.defaultValue, t.DataTypes.DataTypes.Decimal)
                                }, function(f) {
                                    var d = new(e.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnChangeInputTransferAmount$calculateExchangeRateTransferFromJSResult"));
                                    return d.convertedAmountOut = t.DataConversion.JSNodeParamConverter.from(f.ConvertedAmount, t.DataTypes.DataTypes.Decimal), d
                                }, {}, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1), r.variables.transferFromConvertedAmountVar = b.value.convertedAmountOut, r.variables.finalAmountVar = m.value.finalAmountOut, r.variables.calculatedFeesVar = m.value.feesOut, r.variables.currencySwitcherVar !== r.variables.activeWalletVar.currencyAttr && (i.value = t.Logger.startActiveSpan("ConvertTransferAmount", function(s) {
                            s && (s.setAttribute("code.function", "ConvertTransferAmount"), s.setAttribute("outsystems.function.key", "1364e9bc-f83d-4755-86d6-abdd85e15ea3"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(x, "ConvertTransferAmount", "OnChangeInputTransferAmount", {
                                    Rate: t.DataConversion.JSNodeParamConverter.to(r.variables.exchangeRateVar, t.DataTypes.DataTypes.Decimal),
                                    InputId: t.DataConversion.JSNodeParamConverter.to(o.getId("InputTransferExchangeAmount"), t.DataTypes.DataTypes.Text),
                                    FractionalDigits: t.DataConversion.JSNodeParamConverter.to(r.variables.transferFromVar.fractionalDigitsAttr, t.DataTypes.DataTypes.Integer),
                                    ConvertedTransferAmount: t.DataConversion.JSNodeParamConverter.to(t.DataTypes.Decimal.defaultValue, t.DataTypes.DataTypes.Decimal)
                                }, function(f) {
                                    var d = new(e.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnChangeInputTransferAmount$convertTransferAmountJSResult"));
                                    return d.convertedTransferAmountOut = t.DataConversion.JSNodeParamConverter.from(f.ConvertedTransferAmount, t.DataTypes.DataTypes.Decimal), d
                                }, {}, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1), A.value = t.Logger.startActiveSpan("CalculateConvertedTransferFromFees", function(s) {
                            s && (s.setAttribute("code.function", "CalculateConvertedTransferFromFees"), s.setAttribute("outsystems.function.key", "b1b92a9e-c9d6-4ef0-a976-e7a4364e9f29"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(I, "CalculateConvertedTransferFromFees", "OnChangeInputTransferAmount", {
                                    TransferAmount: t.DataConversion.JSNodeParamConverter.to(i.value.convertedTransferAmountOut, t.DataTypes.DataTypes.Decimal),
                                    FractionalDigits: t.DataConversion.JSNodeParamConverter.to(r.variables.transferFromVar.fractionalDigitsAttr.toString(), t.DataTypes.DataTypes.Text),
                                    Fees: t.DataConversion.JSNodeParamConverter.to(t.DataTypes.Decimal.defaultValue, t.DataTypes.DataTypes.Decimal),
                                    FinalAmount: t.DataConversion.JSNodeParamConverter.to(t.DataTypes.Decimal.defaultValue, t.DataTypes.DataTypes.Decimal)
                                }, function(f) {
                                    var d = new(e.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnChangeInputTransferAmount$calculateConvertedTransferFromFeesJSResult"));
                                    return d.feesOut = t.DataConversion.JSNodeParamConverter.from(f.Fees, t.DataTypes.DataTypes.Decimal), d.finalAmountOut = t.DataConversion.JSNodeParamConverter.from(f.FinalAmount, t.DataTypes.DataTypes.Decimal), d
                                }, {}, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1), u.value = t.Logger.startActiveSpan("CalculateExchangeRateTransferTo", function(s) {
                            s && (s.setAttribute("code.function", "CalculateExchangeRateTransferTo"), s.setAttribute("outsystems.function.key", "89c9d7fd-074f-400e-a33a-65d5448153b0"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(N, "CalculateExchangeRateTransferTo", "OnChangeInputTransferAmount", {
                                    Rate: t.DataConversion.JSNodeParamConverter.to(r.variables.exchangeRateVar, t.DataTypes.DataTypes.Decimal),
                                    Amount: t.DataConversion.JSNodeParamConverter.to(A.value.finalAmountOut, t.DataTypes.DataTypes.Decimal),
                                    FractionalDigits: t.DataConversion.JSNodeParamConverter.to(r.variables.transferToVar.fractionalDigitsAttr, t.DataTypes.DataTypes.Integer),
                                    ConvertedAmount: t.DataConversion.JSNodeParamConverter.to(t.DataTypes.Decimal.defaultValue, t.DataTypes.DataTypes.Decimal)
                                }, function(f) {
                                    var d = new(e.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnChangeInputTransferAmount$calculateExchangeRateTransferToJSResult"));
                                    return d.convertedAmountOut = t.DataConversion.JSNodeParamConverter.from(f.ConvertedAmount, t.DataTypes.DataTypes.Decimal), d
                                }, {}, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1), r.variables.convertedTransferAmountVar = i.value.convertedTransferAmountOut, r.variables.convertedCalculatedFeesVar = A.value.feesOut, r.variables.convertedFinalAmountVar = A.value.finalAmountOut, r.variables.transferToConvertedAmountVar = u.value.convertedAmountOut)
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__onChangeInputTransferAmount$Action
        }
        set _onChangeInputTransferAmount$Action(n) {
            this.__onChangeInputTransferAmount$Action = n
        }
        get _makeNewTransferOnClick$Action() {
            return this.hasOwnProperty("__makeNewTransferOnClick$Action") || (this.__makeNewTransferOnClick$Action = function(n, r) {
                var e = this.model,
                    o = this.controller,
                    a = this.idService;
                return t.Logger.startActiveSpan("MakeNewTransferOnClick", function(i) {
                    i && (i.setAttribute("code.function", "MakeNewTransferOnClick"), i.setAttribute("outsystems.function.key", "4444cb2f-b4a4-41aa-8a89-6bc5e8704d05"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("MakeNewTransferOnClick"), r = o.callContext(r);
                        var u = new t.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsTransfer.MakeNewTransferOnClick$vars")));
                        u.value.walletsAccountList2InLocal = n, e.variables.transferAmountVar = t.BuiltinFunctions.integerToDecimal(0), e.variables.isTransferSuccessVar = !1
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__makeNewTransferOnClick$Action
        }
        set _makeNewTransferOnClick$Action(n) {
            this.__makeNewTransferOnClick$Action = n
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(n) {
                var r = this.model,
                    e = this.controller,
                    o = this.idService;
                return t.Logger.startActiveSpan("OnReady", function(a) {
                    return a && (a.setAttribute("code.function", "OnReady"), a.setAttribute("outsystems.function.key", "70f9f4ed-810e-4e4b-894a-c51d6f293604"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        e.ensureControllerAlive("OnReady"), n = e.callContext(n);
                        var i = new t.DataTypes.VariableHolder,
                            u = new t.DataTypes.VariableHolder,
                            m = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(t.DataTypes.TextList))),
                            A = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(D))),
                            b = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(D))),
                            s = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(E)));
                        return t.Flow.executeAsyncFlow(function() {
                            return r.flush(), C.getAllAccountsBalance$Action(n).then(function(f) {
                                i.value = f
                            }).then(function() {
                                u.value = t.Logger.startActiveSpan("GetAllWalletsAccountList", function(f) {
                                    f && (f.setAttribute("code.function", "GetAllWalletsAccountList"), f.setAttribute("outsystems.function.key", "8c0e2108-d3f9-4d32-8369-4c622c34a436"), f.setAttribute("outsystems.function.owner.name", "tradershub"), f.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), f.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return e.safeExecuteJSNode(V, "GetAllWalletsAccountList", "OnReady", {
                                            WalletsAccounts: t.DataConversion.JSNodeParamConverter.to(r.variables.walletsAccountListIn, t.DataTypes.DataTypes.Text),
                                            ActiveWallet: t.DataConversion.JSNodeParamConverter.to(O.getActiveWallet(), t.DataTypes.DataTypes.Text),
                                            WebsiteStatus: t.DataConversion.JSNodeParamConverter.to(O.getRawWebsiteStatusResponse(), t.DataTypes.DataTypes.Text),
                                            Balance: t.DataConversion.JSNodeParamConverter.to(i.value.responseOut, t.DataTypes.DataTypes.Text),
                                            TransferAccountList: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text),
                                            TransferAccountKeys: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text),
                                            TransferFromAccountList: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                                        }, function(d) {
                                            var g = new(e.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnReady$getAllWalletsAccountListJSResult"));
                                            return g.transferAccountListOut = t.DataConversion.JSNodeParamConverter.from(d.TransferAccountList, t.DataTypes.DataTypes.Text), g.transferAccountKeysOut = t.DataConversion.JSNodeParamConverter.from(d.TransferAccountKeys, t.DataTypes.DataTypes.Text), g.transferFromAccountListOut = t.DataConversion.JSNodeParamConverter.from(d.TransferFromAccountList, t.DataTypes.DataTypes.Text), g
                                        }, {}, {})
                                    } finally {
                                        f && f.end()
                                    }
                                }, 1), m.value.dataOut = t.JSONUtils.deserializeFromJSON(u.value.transferAccountKeysOut, t.DataTypes.TextList, !1), b.value.dataOut = t.JSONUtils.deserializeFromJSON(u.value.transferAccountListOut, D, !1), A.value.dataOut = t.JSONUtils.deserializeFromJSON(u.value.transferFromAccountListOut, D, !1), s.value.dataOut = t.JSONUtils.deserializeFromJSON(O.getActiveWallet(), E, !1), r.variables.activeWalletVar = s.value.dataOut, r.variables.transferAccountKeyVar = m.value.dataOut, r.variables.transferAccountListVar = b.value.dataOut, r.variables.transferFromAccountListVar = A.value.dataOut
                            })
                        })
                    }, function() {
                        a && a.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(n) {
            this.__onReady$Action = n
        }
        get _onCloseTransferToModal$Action() {
            return this.hasOwnProperty("__onCloseTransferToModal$Action") || (this.__onCloseTransferToModal$Action = function(n) {
                var r = this.model,
                    e = this.controller,
                    o = this.idService;
                return t.Logger.startActiveSpan("OnCloseTransferToModal", function(a) {
                    a && (a.setAttribute("code.function", "OnCloseTransferToModal"), a.setAttribute("outsystems.function.key", "95b31faf-4323-4311-8b03-2054d3f979a1"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnCloseTransferToModal"), n = e.callContext(n), r.variables.isTransferToOpenVar = !1
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__onCloseTransferToModal$Action
        }
        set _onCloseTransferToModal$Action(n) {
            this.__onCloseTransferToModal$Action = n
        }
        get _exchangeRateSwitcherOnChange$Action() {
            return this.hasOwnProperty("__exchangeRateSwitcherOnChange$Action") || (this.__exchangeRateSwitcherOnChange$Action = function(n) {
                var r = this.model,
                    e = this.controller,
                    o = this.idService;
                return t.Logger.startActiveSpan("ExchangeRateSwitcherOnChange", function(a) {
                    a && (a.setAttribute("code.function", "ExchangeRateSwitcherOnChange"), a.setAttribute("outsystems.function.key", "99831c2e-6286-4e9f-a59b-74a3b90d4f1a"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("ExchangeRateSwitcherOnChange"), n = e.callContext(n), r.variables.transferAmountVar = t.BuiltinFunctions.integerToDecimal(0), r.variables.transferFromConvertedAmountVar = t.BuiltinFunctions.integerToDecimal(0)
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__exchangeRateSwitcherOnChange$Action
        }
        set _exchangeRateSwitcherOnChange$Action(n) {
            this.__exchangeRateSwitcherOnChange$Action = n
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(n) {
                var r = this.model,
                    e = this.controller,
                    o = this.idService;
                return t.Logger.startActiveSpan("OnDestroy", function(a) {
                    a && (a.setAttribute("code.function", "OnDestroy"), a.setAttribute("outsystems.function.key", "a3d37f05-250a-4c86-b236-6d713cf401f0"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnDestroy"), n = e.callContext(n), t.Logger.startActiveSpan("JSDisposeTimerExchangeRate", function(i) {
                            i && (i.setAttribute("code.function", "JSDisposeTimerExchangeRate"), i.setAttribute("outsystems.function.key", "6087b362-6d11-44bb-8104-90e978fa349a"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode($, "JSDisposeTimerExchangeRate", "OnDestroy", null, function(u) {}, {}, {})
                            } finally {
                                i && i.end()
                            }
                        }, 1)
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(n) {
            this.__onDestroy$Action = n
        }
        get _onClickTransferToAccount$Action() {
            return this.hasOwnProperty("__onClickTransferToAccount$Action") || (this.__onClickTransferToAccount$Action = function(n, r) {
                var e = this.model,
                    o = this.controller,
                    a = this.idService;
                return t.Logger.startActiveSpan("OnClickTransferToAccount", function(i) {
                    i && (i.setAttribute("code.function", "OnClickTransferToAccount"), i.setAttribute("outsystems.function.key", "b2292fd3-5c28-4f25-8cc7-81ba6503e2dc"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("OnClickTransferToAccount"), r = o.callContext(r);
                        var u = new t.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnClickTransferToAccount$vars")));
                        u.value.accountDetailsInLocal = n.clone(), e.variables.transferToVar = u.value.accountDetailsInLocal, e.variables.isTransferToOpenVar = !1, e.variables.transferFromVar.accountCategoryAttr === "Wallets" && e.variables.transferToVar.accountCategoryAttr === "Wallets" ? (e.variables.showCurrencySwitcherVar = !0, e.variables.currencySwitcherVar = e.variables.activeWalletVar.currencyAttr) : e.variables.showCurrencySwitcherVar = !1
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onClickTransferToAccount$Action
        }
        set _onClickTransferToAccount$Action(n) {
            this.__onClickTransferToAccount$Action = n
        }
        get _onClickTransferFromAccount$Action() {
            return this.hasOwnProperty("__onClickTransferFromAccount$Action") || (this.__onClickTransferFromAccount$Action = function(n, r) {
                var e = this.model,
                    o = this.controller,
                    a = this.idService;
                return t.Logger.startActiveSpan("OnClickTransferFromAccount", function(i) {
                    i && (i.setAttribute("code.function", "OnClickTransferFromAccount"), i.setAttribute("outsystems.function.key", "c79debf3-1bc1-417d-992e-f5e173a379b9"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("OnClickTransferFromAccount"), r = o.callContext(r);
                        var u = new t.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnClickTransferFromAccount$vars")));
                        u.value.accountDetailsInLocal = n.clone();
                        var m = new t.DataTypes.VariableHolder,
                            A = new t.DataTypes.VariableHolder;
                        e.variables.transferFromVar = u.value.accountDetailsInLocal, e.variables.isTransferFromOpenVar = !1, e.variables.transferFromVar.accountCategoryAttr === "Wallets" ? (A.value = t.SystemActions.listFilter(e.variables.transferAccountListVar, function(b) {
                            return u.value.accountDetailsInLocal.iconAttr !== b.iconAttr
                        }, r), e.variables.transferAccountListVar = A.value.filteredListOut) : (m.value = t.SystemActions.listFilter(e.variables.transferFromAccountListVar, function(b) {
                            return u.value.accountDetailsInLocal.iconAttr !== b.iconAttr
                        }, r), e.variables.transferAccountListVar = m.value.filteredListOut)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onClickTransferFromAccount$Action
        }
        set _onClickTransferFromAccount$Action(n) {
            this.__onClickTransferFromAccount$Action = n
        }
        get _toListItemOnClick$Action() {
            return this.hasOwnProperty("__toListItemOnClick$Action") || (this.__toListItemOnClick$Action = function(n) {
                var r = this.model,
                    e = this.controller,
                    o = this.idService;
                return t.Logger.startActiveSpan("ToListItemOnClick", function(a) {
                    a && (a.setAttribute("code.function", "ToListItemOnClick"), a.setAttribute("outsystems.function.key", "ddf474bb-0962-4083-b91f-a69df7b29c40"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("ToListItemOnClick"), n = e.callContext(n), r.variables.isTransferToOpenVar = !0
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__toListItemOnClick$Action
        }
        set _toListItemOnClick$Action(n) {
            this.__toListItemOnClick$Action = n
        }
        get _fromListItemOnClick$Action() {
            return this.hasOwnProperty("__fromListItemOnClick$Action") || (this.__fromListItemOnClick$Action = function(n) {
                var r = this.model,
                    e = this.controller,
                    o = this.idService;
                return t.Logger.startActiveSpan("FromListItemOnClick", function(a) {
                    a && (a.setAttribute("code.function", "FromListItemOnClick"), a.setAttribute("outsystems.function.key", "fd32479f-d94c-4bd6-9abc-a3dde691faac"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("FromListItemOnClick"), n = e.callContext(n), r.variables.isTransferFromOpenVar = !0
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__fromListItemOnClick$Action
        }
        set _fromListItemOnClick$Action(n) {
            this.__fromListItemOnClick$Action = n
        }
        onCloseTransferFromModal$Action(n) {
            var r = this.controller;
            return t.Logger.startActiveSpan("OnCloseTransferFromModal__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnCloseTransferFromModal"), e.setAttribute("outsystems.function.key", "025247b5-342a-441e-8f2e-30a7405e4d8e"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onCloseTransferFromModal$Action, n)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        assignExchangeRate$Action(n, r) {
            var e = this.controller;
            return t.Logger.startActiveSpan("AssignExchangeRate__proxy", function(o) {
                o && (o.setAttribute("code.function", "AssignExchangeRate"), o.setAttribute("outsystems.function.key", "03211425-510d-4afc-9504-a67819619295"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._assignExchangeRate$Action, r, n)
                } finally {
                    o && o.end()
                }
            }, 0)
        }
        assignExchangeRateCountdownTimer$Action(n, r) {
            var e = this.controller;
            return t.Logger.startActiveSpan("AssignExchangeRateCountdownTimer__proxy", function(o) {
                o && (o.setAttribute("code.function", "AssignExchangeRateCountdownTimer"), o.setAttribute("outsystems.function.key", "16179031-707c-45a4-8f64-4bd3edf8e1dd"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._assignExchangeRateCountdownTimer$Action, r, n)
                } finally {
                    o && o.end()
                }
            }, 0)
        }
        transferOnClick$Action(n) {
            var r = this.controller;
            return t.Logger.startActiveSpan("TransferOnClick__proxy", function(e) {
                return e && (e.setAttribute("code.function", "TransferOnClick"), e.setAttribute("outsystems.function.key", "180ff7b9-fec8-4133-bfeb-e67400f33ff5"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._transferOnClick$Action, n)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        getExchangeRate$Action(n) {
            var r = this.controller;
            return t.Logger.startActiveSpan("GetExchangeRate__proxy", function(e) {
                return e && (e.setAttribute("code.function", "GetExchangeRate"), e.setAttribute("outsystems.function.key", "1efd211c-94d4-43c0-a293-fa6fe524745f"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._getExchangeRate$Action, n)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        onChangeInputTransferAmount$Action(n) {
            var r = this.controller;
            return t.Logger.startActiveSpan("OnChangeInputTransferAmount__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnChangeInputTransferAmount"), e.setAttribute("outsystems.function.key", "4091bcf4-616b-4e2a-97da-d41d78267c7b"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onChangeInputTransferAmount$Action, n)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        makeNewTransferOnClick$Action(n, r) {
            var e = this.controller;
            return t.Logger.startActiveSpan("MakeNewTransferOnClick__proxy", function(o) {
                o && (o.setAttribute("code.function", "MakeNewTransferOnClick"), o.setAttribute("outsystems.function.key", "4444cb2f-b4a4-41aa-8a89-6bc5e8704d05"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._makeNewTransferOnClick$Action, r, n)
                } finally {
                    o && o.end()
                }
            }, 0)
        }
        onReady$Action(n) {
            var r = this.controller;
            return t.Logger.startActiveSpan("OnReady__proxy", function(e) {
                return e && (e.setAttribute("code.function", "OnReady"), e.setAttribute("outsystems.function.key", "70f9f4ed-810e-4e4b-894a-c51d6f293604"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onReady$Action, n)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        onCloseTransferToModal$Action(n) {
            var r = this.controller;
            return t.Logger.startActiveSpan("OnCloseTransferToModal__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnCloseTransferToModal"), e.setAttribute("outsystems.function.key", "95b31faf-4323-4311-8b03-2054d3f979a1"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onCloseTransferToModal$Action, n)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        exchangeRateSwitcherOnChange$Action(n) {
            var r = this.controller;
            return t.Logger.startActiveSpan("ExchangeRateSwitcherOnChange__proxy", function(e) {
                e && (e.setAttribute("code.function", "ExchangeRateSwitcherOnChange"), e.setAttribute("outsystems.function.key", "99831c2e-6286-4e9f-a59b-74a3b90d4f1a"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._exchangeRateSwitcherOnChange$Action, n)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onDestroy$Action(n) {
            var r = this.controller;
            return t.Logger.startActiveSpan("OnDestroy__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnDestroy"), e.setAttribute("outsystems.function.key", "a3d37f05-250a-4c86-b236-6d713cf401f0"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onDestroy$Action, n)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onClickTransferToAccount$Action(n, r) {
            var e = this.controller;
            return t.Logger.startActiveSpan("OnClickTransferToAccount__proxy", function(o) {
                o && (o.setAttribute("code.function", "OnClickTransferToAccount"), o.setAttribute("outsystems.function.key", "b2292fd3-5c28-4f25-8cc7-81ba6503e2dc"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._onClickTransferToAccount$Action, r, n)
                } finally {
                    o && o.end()
                }
            }, 0)
        }
        onClickTransferFromAccount$Action(n, r) {
            var e = this.controller;
            return t.Logger.startActiveSpan("OnClickTransferFromAccount__proxy", function(o) {
                o && (o.setAttribute("code.function", "OnClickTransferFromAccount"), o.setAttribute("outsystems.function.key", "c79debf3-1bc1-417d-992e-f5e173a379b9"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._onClickTransferFromAccount$Action, r, n)
                } finally {
                    o && o.end()
                }
            }, 0)
        }
        toListItemOnClick$Action(n) {
            var r = this.controller;
            return t.Logger.startActiveSpan("ToListItemOnClick__proxy", function(e) {
                e && (e.setAttribute("code.function", "ToListItemOnClick"), e.setAttribute("outsystems.function.key", "ddf474bb-0962-4083-b91f-a69df7b29c40"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._toListItemOnClick$Action, n)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        fromListItemOnClick$Action(n) {
            var r = this.controller;
            return t.Logger.startActiveSpan("FromListItemOnClick__proxy", function(e) {
                e && (e.setAttribute("code.function", "FromListItemOnClick"), e.setAttribute("outsystems.function.key", "fd32479f-d94c-4bd6-9abc-a3dde691faac"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._fromListItemOnClick$Action, n)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(n) {
            this._onInitializeEventHandler = n
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(n) {
                var r = this.controller,
                    e = this.model,
                    o = this.idService;
                return r.onReady$Action(n)
            }), this._onReadyEventHandler
        }
        set onReadyEventHandler(n) {
            this._onReadyEventHandler = n
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(n) {
            this._onRenderEventHandler = n
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = function(n) {
                var r = this.controller,
                    e = this.model,
                    o = this.idService;
                return r.onDestroy$Action(n)
            }), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(n) {
            this._onDestroyEventHandler = n
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(n) {
            this._onParametersChangedEventHandler = n
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(n) {
                return B.default.handleError(n, this.callContext())
            }), this._handleError
        }
        set handleError(n) {
            this._handleError = n
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return C.defaultTimeout
        }
    };
    l(y, "ControllerInner");
    let c = y;
    T = c, T.registerVariableGroupType("tradershub.WalletFlows.WalletsTransfer.AssignExchangeRate$vars", [{
        name: "Rate",
        attrName: "rateInLocal",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Decimal,
        defaultValue: l(function() {
            return t.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }]), T.registerVariableGroupType("tradershub.WalletFlows.WalletsTransfer.AssignExchangeRateCountdownTimer$vars", [{
        name: "ExchangeRateTimer",
        attrName: "exchangeRateTimerInLocal",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Decimal,
        defaultValue: l(function() {
            return t.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }]), T.registerVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnChangeInputTransferAmount$convertTransferAmountJSResult", [{
        name: "ConvertedTransferAmount",
        attrName: "convertedTransferAmountOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Decimal,
        defaultValue: l(function() {
            return t.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }]), T.registerVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnChangeInputTransferAmount$calculateExchangeRateTransferToJSResult", [{
        name: "ConvertedAmount",
        attrName: "convertedAmountOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Decimal,
        defaultValue: l(function() {
            return t.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }]), T.registerVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnChangeInputTransferAmount$calculateTransferFromFeesJSResult", [{
        name: "Fees",
        attrName: "feesOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Decimal,
        defaultValue: l(function() {
            return t.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }, {
        name: "FinalAmount",
        attrName: "finalAmountOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Decimal,
        defaultValue: l(function() {
            return t.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }]), T.registerVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnChangeInputTransferAmount$calculateConvertedTransferFromFeesJSResult", [{
        name: "Fees",
        attrName: "feesOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Decimal,
        defaultValue: l(function() {
            return t.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }, {
        name: "FinalAmount",
        attrName: "finalAmountOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Decimal,
        defaultValue: l(function() {
            return t.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }]), T.registerVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnChangeInputTransferAmount$calculateExchangeRateTransferFromJSResult", [{
        name: "ConvertedAmount",
        attrName: "convertedAmountOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Decimal,
        defaultValue: l(function() {
            return t.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }]), T.registerVariableGroupType("tradershub.WalletFlows.WalletsTransfer.MakeNewTransferOnClick$vars", [{
        name: "WalletsAccountList2",
        attrName: "walletsAccountList2InLocal",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }]), T.registerVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnReady$getAllWalletsAccountListJSResult", [{
        name: "TransferAccountList",
        attrName: "transferAccountListOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "TransferAccountKeys",
        attrName: "transferAccountKeysOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "TransferFromAccountList",
        attrName: "transferFromAccountListOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }]), T.registerVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnClickTransferToAccount$vars", [{
        name: "AccountDetails",
        attrName: "accountDetailsInLocal",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Record,
        defaultValue: l(function() {
            return new _
        }, "defaultValue"),
        complexType: _
    }]), T.registerVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnClickTransferFromAccount$vars", [{
        name: "AccountDetails",
        attrName: "accountDetailsInLocal",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Record,
        defaultValue: l(function() {
            return new _
        }, "defaultValue"),
        complexType: _
    }])
}
var T, kt = new t.Controller.ControllerFactory(T, G);
export {
    kt as a
};