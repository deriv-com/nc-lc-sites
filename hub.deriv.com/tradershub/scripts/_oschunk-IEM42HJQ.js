import {
    a as B
} from "./_oschunk-OO74O67H.js";
import {
    a as ge
} from "./_oschunk-EK7BIWKQ.js";
import {
    a as ve
} from "./_oschunk-5N5TJ3ES.js";
import {
    a as p,
    b as be,
    c as H,
    d as _
} from "./_oschunk-VADNKVBQ.js";
import {
    Pf as W,
    Rb as $,
    be as M
} from "./_oschunk-KG7LSUIA.js";
import {
    ia as Ae
} from "./_oschunk-5EPHB76O.js";
import {
    c as l,
    h as me
} from "./_oschunk-DVBKI63I.js";
var he = {
        "cH8gH+dwOESRCJqOQ77NlA#Title": "\u062A\u062D\u0648\u064A\u0644",
        "cH8gH+dwOESRCJqOQ77NlA#TitleExpression.1345526795.1": "\u062A\u062D\u0648\u064A\u0644"
    },
    De = {
        "cH8gH+dwOESRCJqOQ77NlA#Title": "\xDCberweisung",
        "cH8gH+dwOESRCJqOQ77NlA#TitleExpression.1345526795.1": "\xDCberweisung"
    },
    _e = {
        "cH8gH+dwOESRCJqOQ77NlA#Title": "Transferencia",
        "cH8gH+dwOESRCJqOQ77NlA#TitleExpression.1345526795.1": "Transferencia"
    },
    Se = {
        "cH8gH+dwOESRCJqOQ77NlA#Title": "Trasferisci",
        "cH8gH+dwOESRCJqOQ77NlA#TitleExpression.1345526795.1": "Trasferisci"
    },
    pe = {
        "cH8gH+dwOESRCJqOQ77NlA#Title": "Przelew",
        "cH8gH+dwOESRCJqOQ77NlA#TitleExpression.1345526795.1": "Przelew"
    },
    we = {
        "cH8gH+dwOESRCJqOQ77NlA#Title": "Transfer\xEAncias",
        "cH8gH+dwOESRCJqOQ77NlA#TitleExpression.1345526795.1": "Transfer\xEAncias"
    },
    Ce = {
        "ar-001": {
            translations: he,
            isRTL: !0
        },
        "de-DE": {
            translations: De,
            isRTL: !1
        },
        "es-ES": {
            translations: _e,
            isRTL: !1
        },
        "it-IT": {
            translations: Se,
            isRTL: !1
        },
        "pl-PL": {
            translations: pe,
            isRTL: !1
        },
        "pt-PT": {
            translations: we,
            isRTL: !1
        }
    };

function G(s, m, C, a) {
    let r = l(t => {
        let o = t.substring(0, 3);
        switch (console.log("loginPrefix", o), o) {
            case "MTD":
                return "mt5";
            case "CTD":
                return "ctrader";
            case "DXD":
                return "dxtrade";
            default:
                return ""
        }
    }, "determinePlatform");
    s.ToPlatform = r(s.ToLogin), s.FromPlatform = r(s.FromLogin)
}
l(G, "default");

function z(s, m, C, a) {
    return new Promise(function(r, t) {
        let o = s.BaseCurrency,
            n = s.TargetCurrency,
            i = s.FractionalDigits,
            f = 59;
        window.timerInterval = null, window.exchangeInterval = null, window.getExchangeRate = () => me(this, null, function*() {
            let T = yield m.ExchangeRates(o), b = JSON.parse(T.Response), v = Number(b.exchange_rates.rates[s.TargetCurrency].toFixed(i));
            m.AssignExchangeRate(v), f = 59, r()
        }), window.startCountdown = () => (timerInterval && clearInterval(timerInterval), timerInterval = setInterval(() => {
            f > 0 && f--, m.AssignExchangeRateCountdownTimer(f)
        }, 1e3), timerInterval), window.cleanup = () => {
            timerInterval && (clearInterval(timerInterval), timerInterval = null), exchangeInterval && (clearInterval(exchangeInterval), exchangeInterval = null)
        }, window.getExchangeRate().then(() => {
            window.timerIntervalRef = startCountdown(), exchangeInterval = setInterval(getExchangeRate, 6e4)
        })
    })
}
l(z, "default");

function j(s, m, C, a) {
    let r = s.Rate,
        t = s.InputId,
        o = s.FractionalDigits,
        n = document.getElementById(t);
    if (n) {
        let f = (parseFloat(n.value) || 0) / r;
        isFinite(f) || (f = 0), s.ConvertedTransferAmount = parseFloat(f.toFixed(o))
    }
}
l(j, "default");

function q(s, m, C, a) {
    let r = s.TransferAmount,
        t = s.FractionalDigits,
        o = JSON.parse(s.WebsiteStatus),
        n = s.WalletCurrency,
        i = s.TransferToCurrency,
        T = o.website_status.currencies_config[n].transfer_between_accounts.fees[i] / 100 * r,
        b = r - T;
    s.Fees = parseFloat(T.toFixed(t)), s.FinalAmount = parseFloat(b.toFixed(t))
}
l(q, "default");

function U(s, m, C, a) {
    var ue, ce, le, fe;
    let r = parseFloat(s.Balance) || 0,
        t = parseFloat(s.TransferAmount) || 0,
        o = s.TransferFromCurrency,
        n = s.TransferToCurrency,
        i = parseFloat(s.Rate) || 1,
        f = JSON.parse(s.LifetimeTransferLimit),
        T = s.IsTransferFromCrypto,
        b = s.IsTransferToCrypto,
        v = s.CurrentCurrency,
        u = s.TransferFromDecimalPlaces,
        A = s.TransferToDecimalPlaces,
        y = s.IsVerified,
        S = s.MinTransfer,
        D = l((F, L = 2) => {
            let k = F * i;
            return parseFloat(k.toFixed(L))
        }, "convertAmount");

    function N(F, L, k) {
        var de, ye, Te;
        return L && k ? ((de = F.crypto_to_crypto) == null ? void 0 : de.available) || 0 : L && !k ? ((ye = F.crypto_to_fiat) == null ? void 0 : ye.available) || 0 : !L && k && ((Te = F.fiat_to_crypto) == null ? void 0 : Te.available) || 0
    }
    l(N, "getAvailableValue");
    let R = D(S, A),
        I = N(f, T, b),
        x = D(I, A),
        V = v === o ? r : D(r, A),
        w = v === o ? S : D(S, n, A),
        E = v === o ? I : x,
        c = (ue = m.FormatMoney(I, o)) == null ? void 0 : ue.FormattedNumber,
        g = v === o ? (ce = m.FormatMoney(S, v)) == null ? void 0 : ce.FormatMoney : (le = m.FormatMoney(R, v)) == null ? void 0 : le.FormatMoney,
        d = (fe = m.FormatMoney(x, n)) == null ? void 0 : fe.FormattedNumber,
        O = {
            TransferAmount: t
        },
        J = yup.object().shape({
            TransferAmount: yup.number().test("exceed-balance", "Insufficient funds. Deposit now to make a transfer.", function(F) {
                return F <= V
            }).test("min-transfer", `Minimum transfer amount is ${w} ${v}.`, function(F) {
                return F >= parseFloat(w)
            }).test("exceed-limit", `Transfer limit is up to ${c} ${o} or ${d} ${n}. Verify your account to upgrade the limit.`, function(F) {
                return F <= E
            })
        }),
        P = m.YupValidate(J, O).Errors;
    P.TransferAmount ? a.Validation.setWidgetAsInvalid(s.WidgetId, P.TransferAmount) : a.Validation.setWidgetAsValid(s.WidgetId)
}
l(U, "default");

function Q(s, m, C, a) {
    let r = s.Rate,
        t = s.Amount,
        o = s.FractionalDigits,
        n = t * r;
    s.ConvertedAmount = parseFloat(n.toFixed(o))
}
l(Q, "default");

function K(s, m, C, a) {
    let r = s.TransferAmount,
        t = s.FractionalDigits,
        o = JSON.parse(s.WebsiteStatus),
        n = s.WalletCurrency,
        i = s.TransferToCurrency,
        T = o.website_status.currencies_config[n].transfer_between_accounts.fees[i] / 100 * r,
        b = r - T;
    s.Fees = parseFloat(T.toFixed(t)), s.FinalAmount = parseFloat(b.toFixed(t))
}
l(K, "default");

function Y(s, m, C, a) {
    let r = s.Rate,
        t = s.Amount,
        o = s.FractionalDigits,
        n = t * r;
    s.ConvertedAmount = parseFloat(n.toFixed(o))
}
l(Y, "default");

function X(s, m, C, a) {
    let r = s.InputId,
        t = document.getElementById(r);
    t && t.getAttribute("data-dirty") === "False" && (m.GetExchangeRate(), t.setAttribute("data-dirty", "True"))
}
l(X, "default");

function Z(s, m, C, a) {
    let r = s.InputId,
        t = document.getElementById(r);
    r && t && t.removeAttribute("style")
}
l(Z, "default");

function ee(s, m, C, a) {
    let r = s.InputId,
        t = document.getElementById(r);
    r && t && t.removeAttribute("style")
}
l(ee, "default");

function te(s, m, C, a) {
    var V, w, E, c, g;
    let r = (V = JSON.parse(s.Accounts)) == null ? void 0 : V.accounts,
        t = (w = JSON.parse(s.GetLimit)) == null ? void 0 : w.get_limits,
        o = (E = JSON.parse(s.WebsiteStatus)) == null ? void 0 : E.website_status,
        n = JSON.parse(s.ActiveWallet),
        f = s.AccountType === "real" ? JSON.parse(s.WalletAccounts) : [],
        T = {
            icon: n.icon,
            name: n.name,
            currency: n.currency,
            loginid: n.loginid,
            balance: n.balance,
            formattedBalance: n.formatted_balance,
            is_crypto: n.is_crypto,
            accountCategory: "Wallets",
            fractionalDigits: (c = o.currencies_config[n.currency].fractional_digits) != null ? c : 2,
            minTransfer: o.currencies_config[n.currency].transfer_between_accounts.limits.min,
            maxTransfer: o.currencies_config[n.currency].transfer_between_accounts.limits.max
        },
        b = (f == null ? void 0 : f.filter(d => d == null ? void 0 : d.is_added).map(d => {
            var O;
            return {
                icon: d.icon,
                name: d.name,
                currency: d.currency,
                balance: parseFloat(d.balance),
                loginid: d.loginid,
                formattedBalance: d.formatted_balance,
                is_crypto: d.is_crypto,
                accountCategory: "Wallets",
                fractionalDigits: (O = o.currencies_config[d.currency].fractional_digits) != null ? O : 2,
                minTransfer: o.currencies_config[d.currency].transfer_between_accounts.limits.min,
                maxTransfer: o.currencies_config[d.currency].transfer_between_accounts.limits.max
            }
        })) || [],
        v = {
            options: "Options trading",
            standard: "Standard",
            financial: "Financial",
            dxtrade: "Deriv X",
            ctrader: "cTrader",
            stp: "Financial STP",
            gold: "Gold",
            swap_free: "Swap-free",
            zero_spread: "ZeroSpread"
        },
        u = ((g = r == null ? void 0 : r.filter(d => d.account_category === "trading")) == null ? void 0 : g.map(d => {
            var O, J;
            return {
                icon: (O = m.GetIcon(d.product || (d.account_type === "standard" ? "options" : d.account_type) || d.currency)) == null ? void 0 : O.CurrencyIcon,
                name: v[d.product || (d.account_type === "standard" ? "options" : d.account_type)] + " (" + d.loginid + ")",
                currency: d.currency,
                loginid: d.loginid,
                formattedBalance: d.balance + " " + d.currency,
                is_crypto: d.currency !== "EUR" || d.currency !== "USD",
                accountCategory: `Accounts linked to ${n.name}`,
                fractionalDigits: (J = o.currencies_config[d.currency].fractional_digits) != null ? J : 2,
                minTransfer: o.currencies_config[d.currency].transfer_between_accounts.limits.min,
                maxTransfer: o.currencies_config[d.currency].transfer_between_accounts.limits.max,
                balance: parseFloat(d.balance)
            }
        })) || [],
        A = [T, ...b, ...u],
        y = [T, ...u];

    function S(d) {
        return d.reduce((O, J) => {
            let P = J.accountCategory;
            return O[P] || (O[P] = []), O[P].push(J), O
        }, {})
    }
    l(S, "groupAccountsByCategory");
    let D = S(A),
        N = S(y),
        R = Object.keys(D),
        I = Object.values(D).flat(),
        x = Object.values(N).flat();
    s.TransferAccountKeys = JSON.stringify(R), s.TransferAccountList = JSON.stringify(I), s.TransferFromAccountList = JSON.stringify(x)
}
l(te, "default");

function re(s, m, C, a) {
    s.Payload = JSON.stringify({
        accounts: "all",
        loginid: s.LoginId
    })
}
l(re, "default");

function ne(s, m, C, a) {
    let r = JSON.parse(s.AccountsList).accounts,
        t = s.Currency,
        o = r.some(n => parseFloat(n.balance) > 0 && n.currency === t);
    s.hasTransferAccountsWithFunds = o
}
l(ne, "default");

function ae(s, m, C, a) {
    var t, o;
    let r = (t = JSON.parse(s.GetLimits)) == null ? void 0 : t.get_limits;
    s.DailyTransferAmount = JSON.stringify(r == null ? void 0 : r.daily_cumulative_amount_transfers), s.DailyTransferCount = JSON.stringify(r == null ? void 0 : r.daily_transfers), s.LifetimeTransfers = (o = JSON.stringify(r.lifetime_transfers)) != null ? o : ""
}
l(ae, "default");

function oe(s, m, C, a) {
    s.Payload = JSON.stringify({
        loginid: s.LoginId
    })
}
l(oe, "default");

function se(s, m, C) {
    window.clearInterval(window.timerInterval), window.clearInterval(window.exchangeInterval)
}
l(se, "default");

function ie(s, m, C, a) {
    var w, E;
    let r = s.Balance,
        t = s.Currency,
        o = s.TransferAmount,
        n = s.MinTransfer,
        i = s.TransferToName,
        f = s.TransferFromName,
        T = JSON.parse(s.DailyCumulativeAmountTransfers),
        b = s.AccountType,
        v = JSON.parse(s.Rate),
        u = s.TransferFromLoginId,
        A = b === "demo",
        y = A ? parseFloat(T.virtual.available) : u.startsWith("CTR") || u.startsWith("CR") ? parseFloat(T.dtrade.available) : u.startsWith("MT") ? parseFloat(T.mt5.available) : 0,
        D = l(c => {
            let g = c;
            return t != "USD" ? g = g * v.exchange_rates.rates[t] : g
        }, "convertedAmount")(y),
        N = (w = m.FormatMoney(n, t)) == null ? void 0 : w.FormattedNumber,
        R = (E = m.FormatMoney(n, t)) == null ? void 0 : E.FormattedNumber,
        I = {
            TransferAmount: o
        },
        x = yup.object().shape({
            TransferAmount: yup.number().test("exceed-balance", "Insufficient funds. Deposit now to make a transfer.", function(c) {
                return c <= r
            }).test("min-transfer", `Minimum transfer amount is ${R} ${t}.`, function(c) {
                return c >= n
            }).test("exceed-daily-limit", `The daily transfer limit between your ${f} and ${i} is ${N}. ${t}`, function(c) {
                return c < parseFloat(D)
            })
        }),
        V = m.YupValidate(x, I).Errors;
    V.TransferAmount != "" ? a.Validation.setWidgetAsInvalid(s.WidgetId, V.TransferAmount) : a.Validation.setWidgetAsValid(s.WidgetId)
}
l(ie, "default");
var e = Ae; {
    let m = class m extends e.Controller.BaseViewController {
        constructor(a, r, t) {
            super(a, r, t, Ce);
            var o = this.controller;
            this.clientActionProxies = {
                assignExchangeRate$Action: l(function(n) {
                    return n = n === void 0 ? e.DataTypes.Decimal.defaultValue : n, o.executeActionInsideJSNode(o._assignExchangeRate$Action.bind(o, e.DataConversion.JSNodeParamConverter.from(n, e.DataTypes.DataTypes.Decimal)), o.callContext(), function(i) {
                        return {}
                    }, function() {}, "AssignExchangeRate")
                }, "assignExchangeRate$Action"),
                assignExchangeRateCountdownTimer$Action: l(function(n) {
                    return n = n === void 0 ? e.DataTypes.Decimal.defaultValue : n, o.executeActionInsideJSNode(o._assignExchangeRateCountdownTimer$Action.bind(o, e.DataConversion.JSNodeParamConverter.from(n, e.DataTypes.DataTypes.Decimal)), o.callContext(), function(i) {
                        return {}
                    }, function() {}, "AssignExchangeRateCountdownTimer")
                }, "assignExchangeRateCountdownTimer$Action"),
                getExchangeRate$Action: l(function() {
                    return o.executeActionInsideJSNode(o._getExchangeRate$Action.bind(o), o.callContext(), function(n) {
                        return {}
                    }, function() {}, "GetExchangeRate")
                }, "getExchangeRate$Action")
            }, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(a) {
            this._dataFetchActionNames = a
        }
        get _onCloseTransferFromModal$Action() {
            return this.hasOwnProperty("__onCloseTransferFromModal$Action") || (this.__onCloseTransferFromModal$Action = function(a) {
                var r = this.model,
                    t = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("OnCloseTransferFromModal", function(n) {
                    n && (n.setAttribute("code.function", "OnCloseTransferFromModal"), n.setAttribute("outsystems.function.key", "025247b5-342a-441e-8f2e-30a7405e4d8e"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnCloseTransferFromModal"), a = t.callContext(a), r.variables.isTransferFromOpenVar = !1
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onCloseTransferFromModal$Action
        }
        set _onCloseTransferFromModal$Action(a) {
            this.__onCloseTransferFromModal$Action = a
        }
        get _assignExchangeRate$Action() {
            return this.hasOwnProperty("__assignExchangeRate$Action") || (this.__assignExchangeRate$Action = function(a, r) {
                var t = this.model,
                    o = this.controller,
                    n = this.idService;
                return e.Logger.startActiveSpan("AssignExchangeRate", function(i) {
                    i && (i.setAttribute("code.function", "AssignExchangeRate"), i.setAttribute("outsystems.function.key", "03211425-510d-4afc-9504-a67819619295"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("AssignExchangeRate"), r = o.callContext(r);
                        var f = new e.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsTransfer.AssignExchangeRate$vars")));
                        f.value.rateInLocal = a, t.variables.exchangeRateVar = f.value.rateInLocal
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__assignExchangeRate$Action
        }
        set _assignExchangeRate$Action(a) {
            this.__assignExchangeRate$Action = a
        }
        get _assignExchangeRateCountdownTimer$Action() {
            return this.hasOwnProperty("__assignExchangeRateCountdownTimer$Action") || (this.__assignExchangeRateCountdownTimer$Action = function(a, r) {
                var t = this.model,
                    o = this.controller,
                    n = this.idService;
                return e.Logger.startActiveSpan("AssignExchangeRateCountdownTimer", function(i) {
                    i && (i.setAttribute("code.function", "AssignExchangeRateCountdownTimer"), i.setAttribute("outsystems.function.key", "16179031-707c-45a4-8f64-4bd3edf8e1dd"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("AssignExchangeRateCountdownTimer"), r = o.callContext(r);
                        var f = new e.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsTransfer.AssignExchangeRateCountdownTimer$vars")));
                        f.value.exchangeRateTimerInLocal = a, t.variables.exchangeRateCountdownTimerVar = e.BuiltinFunctions.decimalToInteger(e.BuiltinFunctions.trunc(f.value.exchangeRateTimerInLocal))
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__assignExchangeRateCountdownTimer$Action
        }
        set _assignExchangeRateCountdownTimer$Action(a) {
            this.__assignExchangeRateCountdownTimer$Action = a
        }
        get _submitTransferOnClick$Action() {
            return this.hasOwnProperty("__submitTransferOnClick$Action") || (this.__submitTransferOnClick$Action = function(a) {
                var r = this.model,
                    t = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("SubmitTransferOnClick", function(n) {
                    return n && (n.setAttribute("code.function", "SubmitTransferOnClick"), n.setAttribute("outsystems.function.key", "180ff7b9-fec8-4133-bfeb-e67400f33ff5"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        t.ensureControllerAlive("SubmitTransferOnClick"), a = t.callContext(a);
                        var i = new e.DataTypes.VariableHolder,
                            f = new e.DataTypes.VariableHolder,
                            T = new e.DataTypes.VariableHolder,
                            b = new e.DataTypes.VariableHolder,
                            v = new e.DataTypes.VariableHolder,
                            u = new e.DataTypes.VariableHolder,
                            A = new e.DataTypes.VariableHolder;
                        return e.Flow.executeAsyncFlow(function() {
                            return e.Flow.executeSequence(function() {
                                return r.variables.showCurrencySwitcherVar ? e.Flow.executeSequence(function() {
                                    return r.variables.currencySwitcherVar === r.variables.activeWalletVar.currencyAttr ? (r.flush(), _.transferBetweenAccounts$Action(r.variables.transferFromVar.loginidAttr, r.variables.transferToVar.loginidAttr, r.variables.finalAmountVar, r.variables.activeWalletVar.currencyAttr, a).then(function(y) {
                                        f.value = y
                                    }).then(function() {
                                        f.value.isErrorOut !== !0 && (r.variables.isTransferSuccessVar = !0)
                                    })) : (r.flush(), _.transferBetweenAccounts$Action(r.variables.transferFromVar.loginidAttr, r.variables.transferToVar.loginidAttr, r.variables.convertedFinalAmountVar, r.variables.activeWalletVar.currencyAttr, a).then(function(y) {
                                        b.value = y
                                    }).then(function() {
                                        b.value.isErrorOut !== !0 && (r.variables.isTransferSuccessVar = !0)
                                    }))
                                }) : (r.flush(), _.transferBetweenAccounts$Action(r.variables.transferFromVar.loginidAttr, r.variables.transferToVar.loginidAttr, r.variables.transferAmountVar, r.variables.activeWalletVar.currencyAttr, a).then(function(y) {
                                    v.value = y
                                }).then(function() {
                                    return e.Flow.executeSequence(function() {
                                        if (!v.value.isErrorOut) return A.value = e.Logger.startActiveSpan("getPlatform", function(y) {
                                            y && (y.setAttribute("code.function", "getPlatform"), y.setAttribute("outsystems.function.key", "12178dee-c002-4497-a4dd-6f1c6e305f81"), y.setAttribute("outsystems.function.owner.name", "tradershub"), y.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), y.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                            try {
                                                return t.safeExecuteJSNode(G, "getPlatform", "SubmitTransferOnClick", {
                                                    FromLogin: e.DataConversion.JSNodeParamConverter.to(r.variables.transferFromVar.loginidAttr, e.DataTypes.DataTypes.Text),
                                                    ToLogin: e.DataConversion.JSNodeParamConverter.to(r.variables.transferToVar.loginidAttr, e.DataTypes.DataTypes.Text),
                                                    ToPlatform: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                                    FromPlatform: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                                                }, function(S) {
                                                    var D = new(t.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsTransfer.SubmitTransferOnClick$getPlatformJSResult"));
                                                    return D.toPlatformOut = e.DataConversion.JSNodeParamConverter.from(S.ToPlatform, e.DataTypes.DataTypes.Text), D.fromPlatformOut = e.DataConversion.JSNodeParamConverter.from(S.FromPlatform, e.DataTypes.DataTypes.Text), D
                                                }, {}, {})
                                            } finally {
                                                y && y.end()
                                            }
                                        }, 1), e.Flow.executeSequence(function() {
                                            return A.value.toPlatformOut === "mt5" || A.value.fromPlatformOut === "mt5" ? (r.flush(), _.createdMT5Accounts$Action(p.getAccountType(), a).then(function(y) {
                                                i.value = y
                                            }).then(function() {
                                                p.setCreatedMT5Accounts(i.value.responseOut), r.variables.isTransferSuccessVar = !0
                                            })) : e.Flow.executeSequence(function() {
                                                return A.value.toPlatformOut === "dxtrade" || A.value.fromPlatformOut === "dxtrade" ? (r.flush(), _.createdDxTradeAccounts$Action(p.getAccountType(), a).then(function(y) {
                                                    u.value = y
                                                }).then(function() {
                                                    p.setCreatedDXTraderAccounts(u.value.responseOut), r.variables.isTransferSuccessVar = !0
                                                })) : (r.flush(), _.createdCTraderAccounts$Action(p.getAccountType(), a).then(function(y) {
                                                    T.value = y
                                                }).then(function() {
                                                    p.setCreatedCtraderAccounts(T.value.responseOut), r.variables.isTransferSuccessVar = r.variables.transferToVar.isCryptoAttr
                                                }))
                                            })
                                        })
                                    })
                                }))
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__submitTransferOnClick$Action
        }
        set _submitTransferOnClick$Action(a) {
            this.__submitTransferOnClick$Action = a
        }
        get _getExchangeRate$Action() {
            return this.hasOwnProperty("__getExchangeRate$Action") || (this.__getExchangeRate$Action = function(a) {
                var r = this.model,
                    t = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("GetExchangeRate", function(n) {
                    return n && (n.setAttribute("code.function", "GetExchangeRate"), n.setAttribute("outsystems.function.key", "1efd211c-94d4-43c0-a293-fa6fe524745f"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("GetExchangeRate"), a = t.callContext(a), e.Flow.executeAsyncFlow(function() {
                            return e.Logger.startActiveSpan("InitExchangeRate", function(i) {
                                i && (i.setAttribute("code.function", "InitExchangeRate"), i.setAttribute("outsystems.function.key", "d0c04ed5-79c0-4dcd-a62a-2db5677a1421"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return t.safeExecuteAsyncJSNode(z, "InitExchangeRate", "GetExchangeRate", {
                                        TargetCurrency: e.DataConversion.JSNodeParamConverter.to(r.variables.transferToVar.currencyAttr, e.DataTypes.DataTypes.Text),
                                        FractionalDigits: e.DataConversion.JSNodeParamConverter.to(r.variables.transferToVar.fractionalDigitsAttr, e.DataTypes.DataTypes.Integer),
                                        BaseCurrency: e.DataConversion.JSNodeParamConverter.to(r.variables.activeWalletVar.currencyAttr, e.DataTypes.DataTypes.Text)
                                    }, function(f) {}, {
                                        ExchangeRates: _.clientActionProxies.exchangeRates$Action,
                                        AssignExchangeRate: t.clientActionProxies.assignExchangeRate$Action,
                                        AssignExchangeRateCountdownTimer: t.clientActionProxies.assignExchangeRateCountdownTimer$Action
                                    }, {})
                                } finally {
                                    i && i.end()
                                }
                            }, 1)
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__getExchangeRate$Action
        }
        set _getExchangeRate$Action(a) {
            this.__getExchangeRate$Action = a
        }
        get _onChangeInputTransferConvertedAmount$Action() {
            return this.hasOwnProperty("__onChangeInputTransferConvertedAmount$Action") || (this.__onChangeInputTransferConvertedAmount$Action = function(a) {
                var r = this.model,
                    t = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("OnChangeInputTransferConvertedAmount", function(n) {
                    n && (n.setAttribute("code.function", "OnChangeInputTransferConvertedAmount"), n.setAttribute("outsystems.function.key", "4091bcf4-616b-4e2a-97da-d41d78267c7b"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnChangeInputTransferConvertedAmount"), a = t.callContext(a);
                        var i = new e.DataTypes.VariableHolder,
                            f = new e.DataTypes.VariableHolder,
                            T = new e.DataTypes.VariableHolder,
                            b = new e.DataTypes.VariableHolder,
                            v = new e.DataTypes.VariableHolder;
                        e.Logger.startActiveSpan("TriggerExchangeRate", function(u) {
                            u && (u.setAttribute("code.function", "TriggerExchangeRate"), u.setAttribute("outsystems.function.key", "c2655efd-cf4a-4b9f-8158-03890f271113"), u.setAttribute("outsystems.function.owner.name", "tradershub"), u.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), u.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(X, "TriggerExchangeRate", "OnChangeInputTransferConvertedAmount", {
                                    InputId: e.DataConversion.JSNodeParamConverter.to(o.getId("InputTransferExchangeAmount"), e.DataTypes.DataTypes.Text)
                                }, function(A) {}, {
                                    GetExchangeRate: t.clientActionProxies.getExchangeRate$Action
                                }, {})
                            } finally {
                                u && u.end()
                            }
                        }, 1), b.value = e.Logger.startActiveSpan("CalculateTransferFromFees", function(u) {
                            u && (u.setAttribute("code.function", "CalculateTransferFromFees"), u.setAttribute("outsystems.function.key", "a85aacbc-1d23-46d9-9836-8b4e1c806bf8"), u.setAttribute("outsystems.function.owner.name", "tradershub"), u.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), u.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(K, "CalculateTransferFromFees", "OnChangeInputTransferConvertedAmount", {
                                    WebsiteStatus: e.DataConversion.JSNodeParamConverter.to(p.getRawWebsiteStatusResponse(), e.DataTypes.DataTypes.Text),
                                    WalletCurrency: e.DataConversion.JSNodeParamConverter.to(r.variables.activeWalletVar.currencyAttr, e.DataTypes.DataTypes.Text),
                                    TransferAmount: e.DataConversion.JSNodeParamConverter.to(r.variables.transferAmountVar, e.DataTypes.DataTypes.Decimal),
                                    TransferToCurrency: e.DataConversion.JSNodeParamConverter.to(r.variables.transferToVar.currencyAttr, e.DataTypes.DataTypes.Text),
                                    FractionalDigits: e.DataConversion.JSNodeParamConverter.to(r.variables.transferFromVar.fractionalDigitsAttr.toString(), e.DataTypes.DataTypes.Text),
                                    Fees: e.DataConversion.JSNodeParamConverter.to(e.DataTypes.Decimal.defaultValue, e.DataTypes.DataTypes.Decimal),
                                    FinalAmount: e.DataConversion.JSNodeParamConverter.to(e.DataTypes.Decimal.defaultValue, e.DataTypes.DataTypes.Decimal)
                                }, function(A) {
                                    var y = new(t.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnChangeInputTransferConvertedAmount$calculateTransferFromFeesJSResult"));
                                    return y.feesOut = e.DataConversion.JSNodeParamConverter.from(A.Fees, e.DataTypes.DataTypes.Decimal), y.finalAmountOut = e.DataConversion.JSNodeParamConverter.from(A.FinalAmount, e.DataTypes.DataTypes.Decimal), y
                                }, {}, {})
                            } finally {
                                u && u.end()
                            }
                        }, 1), v.value = e.Logger.startActiveSpan("CalculateExchangeRateTransferFrom", function(u) {
                            u && (u.setAttribute("code.function", "CalculateExchangeRateTransferFrom"), u.setAttribute("outsystems.function.key", "b6261695-b8e4-41fc-b252-e662fb4f54f1"), u.setAttribute("outsystems.function.owner.name", "tradershub"), u.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), u.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(Y, "CalculateExchangeRateTransferFrom", "OnChangeInputTransferConvertedAmount", {
                                    FractionalDigits: e.DataConversion.JSNodeParamConverter.to(r.variables.transferToVar.fractionalDigitsAttr, e.DataTypes.DataTypes.Integer),
                                    Rate: e.DataConversion.JSNodeParamConverter.to(r.variables.exchangeRateVar, e.DataTypes.DataTypes.Decimal),
                                    Amount: e.DataConversion.JSNodeParamConverter.to(b.value.finalAmountOut, e.DataTypes.DataTypes.Decimal),
                                    ConvertedAmount: e.DataConversion.JSNodeParamConverter.to(e.DataTypes.Decimal.defaultValue, e.DataTypes.DataTypes.Decimal)
                                }, function(A) {
                                    var y = new(t.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnChangeInputTransferConvertedAmount$calculateExchangeRateTransferFromJSResult"));
                                    return y.convertedAmountOut = e.DataConversion.JSNodeParamConverter.from(A.ConvertedAmount, e.DataTypes.DataTypes.Decimal), y
                                }, {}, {})
                            } finally {
                                u && u.end()
                            }
                        }, 1), r.variables.transferFromConvertedAmountVar = v.value.convertedAmountOut, r.variables.finalAmountVar = b.value.finalAmountOut, r.variables.calculatedFeesVar = b.value.feesOut, i.value = e.Logger.startActiveSpan("ConvertTransferAmount", function(u) {
                            u && (u.setAttribute("code.function", "ConvertTransferAmount"), u.setAttribute("outsystems.function.key", "1364e9bc-f83d-4755-86d6-abdd85e15ea3"), u.setAttribute("outsystems.function.owner.name", "tradershub"), u.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), u.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(j, "ConvertTransferAmount", "OnChangeInputTransferConvertedAmount", {
                                    InputId: e.DataConversion.JSNodeParamConverter.to(o.getId("InputTransferExchangeAmount"), e.DataTypes.DataTypes.Text),
                                    Rate: e.DataConversion.JSNodeParamConverter.to(r.variables.exchangeRateVar, e.DataTypes.DataTypes.Decimal),
                                    FractionalDigits: e.DataConversion.JSNodeParamConverter.to(r.variables.transferFromVar.fractionalDigitsAttr, e.DataTypes.DataTypes.Integer),
                                    ConvertedTransferAmount: e.DataConversion.JSNodeParamConverter.to(e.DataTypes.Decimal.defaultValue, e.DataTypes.DataTypes.Decimal)
                                }, function(A) {
                                    var y = new(t.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnChangeInputTransferConvertedAmount$convertTransferAmountJSResult"));
                                    return y.convertedTransferAmountOut = e.DataConversion.JSNodeParamConverter.from(A.ConvertedTransferAmount, e.DataTypes.DataTypes.Decimal), y
                                }, {}, {})
                            } finally {
                                u && u.end()
                            }
                        }, 1), f.value = e.Logger.startActiveSpan("CalculateConvertedTransferFromFees", function(u) {
                            u && (u.setAttribute("code.function", "CalculateConvertedTransferFromFees"), u.setAttribute("outsystems.function.key", "280971db-752e-48ae-8f18-64edb368b603"), u.setAttribute("outsystems.function.owner.name", "tradershub"), u.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), u.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(q, "CalculateConvertedTransferFromFees", "OnChangeInputTransferConvertedAmount", {
                                    TransferAmount: e.DataConversion.JSNodeParamConverter.to(i.value.convertedTransferAmountOut, e.DataTypes.DataTypes.Decimal),
                                    TransferToCurrency: e.DataConversion.JSNodeParamConverter.to(r.variables.transferToVar.currencyAttr, e.DataTypes.DataTypes.Text),
                                    FractionalDigits: e.DataConversion.JSNodeParamConverter.to(r.variables.transferFromVar.fractionalDigitsAttr.toString(), e.DataTypes.DataTypes.Text),
                                    WebsiteStatus: e.DataConversion.JSNodeParamConverter.to(p.getRawWebsiteStatusResponse(), e.DataTypes.DataTypes.Text),
                                    WalletCurrency: e.DataConversion.JSNodeParamConverter.to(r.variables.activeWalletVar.currencyAttr, e.DataTypes.DataTypes.Text),
                                    Fees: e.DataConversion.JSNodeParamConverter.to(e.DataTypes.Decimal.defaultValue, e.DataTypes.DataTypes.Decimal),
                                    FinalAmount: e.DataConversion.JSNodeParamConverter.to(e.DataTypes.Decimal.defaultValue, e.DataTypes.DataTypes.Decimal)
                                }, function(A) {
                                    var y = new(t.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnChangeInputTransferConvertedAmount$calculateConvertedTransferFromFeesJSResult"));
                                    return y.feesOut = e.DataConversion.JSNodeParamConverter.from(A.Fees, e.DataTypes.DataTypes.Decimal), y.finalAmountOut = e.DataConversion.JSNodeParamConverter.from(A.FinalAmount, e.DataTypes.DataTypes.Decimal), y
                                }, {}, {})
                            } finally {
                                u && u.end()
                            }
                        }, 1), T.value = e.Logger.startActiveSpan("CalculateExchangeRateTransferTo", function(u) {
                            u && (u.setAttribute("code.function", "CalculateExchangeRateTransferTo"), u.setAttribute("outsystems.function.key", "89c9d7fd-074f-400e-a33a-65d5448153b0"), u.setAttribute("outsystems.function.owner.name", "tradershub"), u.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), u.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(Q, "CalculateExchangeRateTransferTo", "OnChangeInputTransferConvertedAmount", {
                                    Amount: e.DataConversion.JSNodeParamConverter.to(f.value.finalAmountOut, e.DataTypes.DataTypes.Decimal),
                                    Rate: e.DataConversion.JSNodeParamConverter.to(r.variables.exchangeRateVar, e.DataTypes.DataTypes.Decimal),
                                    FractionalDigits: e.DataConversion.JSNodeParamConverter.to(r.variables.transferToVar.fractionalDigitsAttr, e.DataTypes.DataTypes.Integer),
                                    ConvertedAmount: e.DataConversion.JSNodeParamConverter.to(e.DataTypes.Decimal.defaultValue, e.DataTypes.DataTypes.Decimal)
                                }, function(A) {
                                    var y = new(t.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnChangeInputTransferConvertedAmount$calculateExchangeRateTransferToJSResult"));
                                    return y.convertedAmountOut = e.DataConversion.JSNodeParamConverter.from(A.ConvertedAmount, e.DataTypes.DataTypes.Decimal), y
                                }, {}, {})
                            } finally {
                                u && u.end()
                            }
                        }, 1), r.variables.convertedTransferAmountVar = i.value.convertedTransferAmountOut, r.variables.convertedCalculatedFeesVar = f.value.feesOut, r.variables.convertedFinalAmountVar = f.value.finalAmountOut, r.variables.transferToConvertedAmountVar = T.value.convertedAmountOut, e.Logger.startActiveSpan("InputValidation", function(u) {
                            u && (u.setAttribute("code.function", "InputValidation"), u.setAttribute("outsystems.function.key", "688f32ec-a586-4e87-9add-dfa7ae75eed1"), u.setAttribute("outsystems.function.owner.name", "tradershub"), u.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), u.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(U, "InputValidation", "OnChangeInputTransferConvertedAmount", {
                                    Balance: e.DataConversion.JSNodeParamConverter.to(e.BuiltinFunctions.decimalToText(r.variables.transferFromVar.balanceAttr), e.DataTypes.DataTypes.Text),
                                    LifetimeTransferLimit: e.DataConversion.JSNodeParamConverter.to(r.variables.lifetimeTransferLimitVar, e.DataTypes.DataTypes.Text),
                                    TransferToCurrency: e.DataConversion.JSNodeParamConverter.to(r.variables.transferToVar.currencyAttr, e.DataTypes.DataTypes.Text),
                                    WidgetId: e.DataConversion.JSNodeParamConverter.to(o.getId("InputTransferExchangeAmount"), e.DataTypes.DataTypes.Text),
                                    TransferFromDecimalPlaces: e.DataConversion.JSNodeParamConverter.to(r.variables.transferFromVar.fractionalDigitsAttr, e.DataTypes.DataTypes.Integer),
                                    TransferAmount: e.DataConversion.JSNodeParamConverter.to(r.variables.transferAmountVar, e.DataTypes.DataTypes.Decimal),
                                    DailyTransferLimit: e.DataConversion.JSNodeParamConverter.to(r.variables.dailyCumulativeAmountTransfersVar, e.DataTypes.DataTypes.Text),
                                    TransferFromCurrency: e.DataConversion.JSNodeParamConverter.to(r.variables.transferFromVar.currencyAttr, e.DataTypes.DataTypes.Text),
                                    IsTransferToCrypto: e.DataConversion.JSNodeParamConverter.to(r.variables.transferToVar.isCryptoAttr, e.DataTypes.DataTypes.Boolean),
                                    IsTransferFromCrypto: e.DataConversion.JSNodeParamConverter.to(r.variables.transferFromVar.isCryptoAttr, e.DataTypes.DataTypes.Boolean),
                                    IsVerified: e.DataConversion.JSNodeParamConverter.to(r.variables.isVerifiedVar, e.DataTypes.DataTypes.Boolean),
                                    CurrentCurrency: e.DataConversion.JSNodeParamConverter.to(r.variables.currencySwitcherVar, e.DataTypes.DataTypes.Text),
                                    Rate: e.DataConversion.JSNodeParamConverter.to(r.variables.exchangeRateVar, e.DataTypes.DataTypes.Decimal),
                                    MinTransfer: e.DataConversion.JSNodeParamConverter.to(r.variables.transferFromVar.minTransferAttr, e.DataTypes.DataTypes.Decimal),
                                    TransferToDecimalPlaces: e.DataConversion.JSNodeParamConverter.to(e.BuiltinFunctions.integerToDecimal(r.variables.transferToVar.fractionalDigitsAttr), e.DataTypes.DataTypes.Decimal)
                                }, function(A) {}, {
                                    FormatMoney: H.clientActionProxies.formatMoney$Action,
                                    YupValidate: B.clientActionProxies.yupValidate$Action
                                }, {})
                            } finally {
                                u && u.end()
                            }
                        }, 1)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onChangeInputTransferConvertedAmount$Action
        }
        set _onChangeInputTransferConvertedAmount$Action(a) {
            this.__onChangeInputTransferConvertedAmount$Action = a
        }
        get _makeNewTransferBtnOnClick$Action() {
            return this.hasOwnProperty("__makeNewTransferBtnOnClick$Action") || (this.__makeNewTransferBtnOnClick$Action = function(a) {
                var r = this.model,
                    t = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("MakeNewTransferBtnOnClick", function(n) {
                    n && (n.setAttribute("code.function", "MakeNewTransferBtnOnClick"), n.setAttribute("outsystems.function.key", "4444cb2f-b4a4-41aa-8a89-6bc5e8704d05"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("MakeNewTransferBtnOnClick"), a = t.callContext(a), r.variables.transferAmountVar = e.BuiltinFunctions.integerToDecimal(0), r.variables.transferFromConvertedAmountVar = e.BuiltinFunctions.integerToDecimal(0), r.widgets.get(o.getId("InputTransferExchangeAmount")).validAttr = !0, r.widgets.get(o.getId("InputTransferExchangeAmount")).validationMessageAttr = e.BuiltinFunctions.nullTextIdentifier(), r.variables.transferToVar = r.variables.nullTransferAccountVar, r.variables.transferFromVar = r.variables.nullTransferAccountVar, r.variables.isTransferSuccessVar = !1, r.variables.showInitialTransferModalVar = !0
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__makeNewTransferBtnOnClick$Action
        }
        set _makeNewTransferBtnOnClick$Action(a) {
            this.__makeNewTransferBtnOnClick$Action = a
        }
        get _onRender$Action() {
            return this.hasOwnProperty("__onRender$Action") || (this.__onRender$Action = function(a) {
                var r = this.model,
                    t = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("OnRender", function(n) {
                    n && (n.setAttribute("code.function", "OnRender"), n.setAttribute("outsystems.function.key", "6de5d60d-8ba8-4153-990b-872b5e331dbf"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnRender"), a = t.callContext(a), o.getId("InputTransferAmount") !== e.BuiltinFunctions.nullIdentifier().toString() && (e.Logger.startActiveSpan("RemoveDefaultStylingInInput", function(i) {
                            i && (i.setAttribute("code.function", "RemoveDefaultStylingInInput"), i.setAttribute("outsystems.function.key", "1f54b175-a3d0-45a2-8066-5da0a11f2816"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(Z, "RemoveDefaultStylingInInput", "OnRender", {
                                    InputId: e.DataConversion.JSNodeParamConverter.to(o.getId("InputTransferAmount"), e.DataTypes.DataTypes.Text)
                                }, function(f) {}, {}, {})
                            } finally {
                                i && i.end()
                            }
                        }, 1), o.getId("InputTransferExchangeAmount") !== e.BuiltinFunctions.nullIdentifier().toString() && e.Logger.startActiveSpan("RemoveDefaultStylingInInput2", function(i) {
                            i && (i.setAttribute("code.function", "RemoveDefaultStylingInInput2"), i.setAttribute("outsystems.function.key", "90224756-50d7-4881-83b9-d821cb7a6c4c"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(ee, "RemoveDefaultStylingInInput2", "OnRender", {
                                    InputId: e.DataConversion.JSNodeParamConverter.to(o.getId("InputTransferExchangeAmount"), e.DataTypes.DataTypes.Text)
                                }, function(f) {}, {}, {})
                            } finally {
                                i && i.end()
                            }
                        }, 1))
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onRender$Action
        }
        set _onRender$Action(a) {
            this.__onRender$Action = a
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(a) {
                var r = this.model,
                    t = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("OnReady", function(n) {
                    return n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "70f9f4ed-810e-4e4b-894a-c51d6f293604"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), a = t.callContext(a);
                        var i = new e.DataTypes.VariableHolder,
                            f = new e.DataTypes.VariableHolder,
                            T = new e.DataTypes.VariableHolder,
                            b = new e.DataTypes.VariableHolder,
                            v = new e.DataTypes.VariableHolder,
                            u = new e.DataTypes.VariableHolder,
                            A = new e.DataTypes.VariableHolder,
                            y = new e.DataTypes.VariableHolder,
                            S = new e.DataTypes.VariableHolder,
                            D = new e.DataTypes.VariableHolder,
                            N = new e.DataTypes.VariableHolder,
                            R = new e.DataTypes.VariableHolder,
                            I = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                            x = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(W))),
                            V = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(e.DataTypes.TextList))),
                            w = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(W))),
                            E = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(M)));
                        return e.Flow.executeAsyncFlow(function() {
                            return r.flush(), _.sendAuthorize$Action(!1, a).then(function(c) {
                                i.value = c
                            }).then(function() {
                                return r.flush(), _.getActiveWallet$Action(a).then(function(c) {
                                    A.value = c
                                })
                            }).then(function() {
                                return r.variables.activeWalletVar = A.value.activeWalletOut, r.variables.isLoadingVar = !0, r.variables.showInitialTransferModalVar = !0, S.value = e.Logger.startActiveSpan("TransferBetweenAccountsPayload", function(c) {
                                    c && (c.setAttribute("code.function", "TransferBetweenAccountsPayload"), c.setAttribute("outsystems.function.key", "20f4e938-8bf2-4049-a61e-74af0dbb4518"), c.setAttribute("outsystems.function.owner.name", "tradershub"), c.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return t.safeExecuteJSNode(re, "TransferBetweenAccountsPayload", "OnReady", {
                                            LoginId: e.DataConversion.JSNodeParamConverter.to(r.variables.activeWalletVar.loginidAttr, e.DataTypes.DataTypes.Text),
                                            Payload: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                                        }, function(g) {
                                            var d = new(t.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnReady$transferBetweenAccountsPayloadJSResult"));
                                            return d.payloadOut = e.DataConversion.JSNodeParamConverter.from(g.Payload, e.DataTypes.DataTypes.Text), d
                                        }, {}, {})
                                    } finally {
                                        c && c.end()
                                    }
                                }, 1), r.flush(), _.derivApiSendMessage$Action(S.value.payloadOut, "transfer_between_accounts", a).then(function(c) {
                                    u.value = c
                                })
                            }).then(function() {
                                return e.Flow.executeSequence(function() {
                                    if (u.value.isErrorOut) e.FeedbackMessageService.showFeedbackMessage(u.value.errorMessageOut, 3), r.variables.isLoadingVar = !1;
                                    else return D.value = e.Logger.startActiveSpan("CheckHasTransferAccountsWithFunds", function(c) {
                                        c && (c.setAttribute("code.function", "CheckHasTransferAccountsWithFunds"), c.setAttribute("outsystems.function.key", "dcb0bfd1-d6f5-42d0-9807-97480e7a50b4"), c.setAttribute("outsystems.function.owner.name", "tradershub"), c.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                        try {
                                            return t.safeExecuteJSNode(ne, "CheckHasTransferAccountsWithFunds", "OnReady", {
                                                AccountsList: e.DataConversion.JSNodeParamConverter.to(u.value.responseOut, e.DataTypes.DataTypes.Text),
                                                Currency: e.DataConversion.JSNodeParamConverter.to(r.variables.activeWalletVar.currencyAttr, e.DataTypes.DataTypes.Text),
                                                hasTransferAccountsWithFunds: e.DataConversion.JSNodeParamConverter.to(!1, e.DataTypes.DataTypes.Boolean)
                                            }, function(g) {
                                                var d = new(t.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnReady$checkHasTransferAccountsWithFundsJSResult"));
                                                return d.hasTransferAccountsWithFundsOut = e.DataConversion.JSNodeParamConverter.from(g.hasTransferAccountsWithFunds, e.DataTypes.DataTypes.Boolean), d
                                            }, {}, {})
                                        } finally {
                                            c && c.end()
                                        }
                                    }, 1), e.Flow.executeSequence(function() {
                                        if (D.value.hasTransferAccountsWithFundsOut) return E.value.dataOut = e.JSONUtils.deserializeFromJSON(u.value.responseOut, M, !1), e.Flow.executeSequence(function() {
                                            if (E.value.dataOut.accountsAttr.length < 2) r.variables.hasNoAccountsVar = !0, r.variables.isLoadingVar = !1;
                                            else return R.value = e.Logger.startActiveSpan("LimitPayload", function(c) {
                                                c && (c.setAttribute("code.function", "LimitPayload"), c.setAttribute("outsystems.function.key", "f6e15c87-b94e-4834-b17d-1bfaffc5f0d7"), c.setAttribute("outsystems.function.owner.name", "tradershub"), c.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                                try {
                                                    return t.safeExecuteJSNode(oe, "LimitPayload", "OnReady", {
                                                        LoginId: e.DataConversion.JSNodeParamConverter.to(r.variables.activeWalletVar.loginidAttr, e.DataTypes.DataTypes.Text),
                                                        Payload: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                                                    }, function(g) {
                                                        var d = new(t.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnReady$limitPayloadJSResult"));
                                                        return d.payloadOut = e.DataConversion.JSNodeParamConverter.from(g.Payload, e.DataTypes.DataTypes.Text), d
                                                    }, {}, {})
                                                } finally {
                                                    c && c.end()
                                                }
                                            }, 1), r.flush(), _.derivApiSendMessage$Action(R.value.payloadOut, "get_limits", a).then(function(c) {
                                                f.value = c
                                            }).then(function() {
                                                return e.Flow.executeSequence(function() {
                                                    if (f.value.isErrorOut) e.FeedbackMessageService.showFeedbackMessage(u.value.errorMessageOut, 3), r.variables.isLoadingVar = !1;
                                                    else return r.flush(), _.getAccountStatus2$Action(a).then(function(c) {
                                                        v.value = c
                                                    }).then(function() {
                                                        v.value.responseOut.getAccountStatusAttr.authenticationAttr.identityAttr.statusAttr === "verified" ? r.variables.isVerifiedVar = !0 : r.variables.isVerifiedVar = !1, N.value = e.Logger.startActiveSpan("GetLimitsData", function(c) {
                                                            c && (c.setAttribute("code.function", "GetLimitsData"), c.setAttribute("outsystems.function.key", "eb85f3ed-9da7-4007-9603-5a4d3b3289ce"), c.setAttribute("outsystems.function.owner.name", "tradershub"), c.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                                            try {
                                                                return t.safeExecuteJSNode(ae, "GetLimitsData", "OnReady", {
                                                                    GetLimits: e.DataConversion.JSNodeParamConverter.to(f.value.responseOut, e.DataTypes.DataTypes.Text),
                                                                    DailyTransferAmount: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                                                    DailyTransferCount: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                                                    LifetimeTransfers: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                                                                }, function(g) {
                                                                    var d = new(t.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnReady$getLimitsDataJSResult"));
                                                                    return d.dailyTransferAmountOut = e.DataConversion.JSNodeParamConverter.from(g.DailyTransferAmount, e.DataTypes.DataTypes.Text), d.dailyTransferCountOut = e.DataConversion.JSNodeParamConverter.from(g.DailyTransferCount, e.DataTypes.DataTypes.Text), d.lifetimeTransfersOut = e.DataConversion.JSNodeParamConverter.from(g.LifetimeTransfers, e.DataTypes.DataTypes.Text), d
                                                                }, {}, {})
                                                            } finally {
                                                                c && c.end()
                                                            }
                                                        }, 1), I.value.jSONOut = e.JSONUtils.serializeToJSON(r.variables.activeWalletVar, !1, !1), y.value = e.Logger.startActiveSpan("GetAccountList", function(c) {
                                                            c && (c.setAttribute("code.function", "GetAccountList"), c.setAttribute("outsystems.function.key", "0730617c-32fb-4a6e-9f87-e4739048c743"), c.setAttribute("outsystems.function.owner.name", "tradershub"), c.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                                            try {
                                                                return t.safeExecuteJSNode(te, "GetAccountList", "OnReady", {
                                                                    Accounts: e.DataConversion.JSNodeParamConverter.to(u.value.responseOut, e.DataTypes.DataTypes.Text),
                                                                    AccountType: e.DataConversion.JSNodeParamConverter.to(p.getAccountType(), e.DataTypes.DataTypes.Text),
                                                                    ActiveWallet: e.DataConversion.JSNodeParamConverter.to(I.value.jSONOut, e.DataTypes.DataTypes.Text),
                                                                    WebsiteStatus: e.DataConversion.JSNodeParamConverter.to(p.getRawWebsiteStatusResponse(), e.DataTypes.DataTypes.Text),
                                                                    GetLimit: e.DataConversion.JSNodeParamConverter.to(f.value.responseOut, e.DataTypes.DataTypes.Text),
                                                                    WalletAccounts: e.DataConversion.JSNodeParamConverter.to(p.getWalletList(), e.DataTypes.DataTypes.Text),
                                                                    TransferAccountList: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                                                    TransferAccountKeys: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                                                    TransferFromAccountList: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                                                                }, function(g) {
                                                                    var d = new(t.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnReady$getAccountListJSResult"));
                                                                    return d.transferAccountListOut = e.DataConversion.JSNodeParamConverter.from(g.TransferAccountList, e.DataTypes.DataTypes.Text), d.transferAccountKeysOut = e.DataConversion.JSNodeParamConverter.from(g.TransferAccountKeys, e.DataTypes.DataTypes.Text), d.transferFromAccountListOut = e.DataConversion.JSNodeParamConverter.from(g.TransferFromAccountList, e.DataTypes.DataTypes.Text), d
                                                                }, {
                                                                    GetIcon: _.clientActionProxies.getIcon$Action
                                                                }, {})
                                                            } finally {
                                                                c && c.end()
                                                            }
                                                        }, 1), V.value.dataOut = e.JSONUtils.deserializeFromJSON(y.value.transferAccountKeysOut, e.DataTypes.TextList, !1), w.value.dataOut = e.JSONUtils.deserializeFromJSON(y.value.transferAccountListOut, W, !1), x.value.dataOut = e.JSONUtils.deserializeFromJSON(y.value.transferFromAccountListOut, W, !1), be.consoleLog$Action("here" + r.variables.toIn, 0, a), r.variables.transferAccountListVar = w.value.dataOut, r.variables.transferAccountKeyVar = V.value.dataOut, r.variables.transferFromAccountListVar = x.value.dataOut, r.variables.dailyCumulativeAmountTransfersVar = N.value.dailyTransferAmountOut, r.variables.dailyTransfersCountVar = N.value.dailyTransferCountOut, r.variables.isLoadingVar = !1, r.variables.lifetimeTransferLimitVar = N.value.lifetimeTransfersOut, r.variables.fullTransferAccountListVar = w.value.dataOut, r.variables.fullTransferFromAccountListVar = x.value.dataOut, r.variables.toIn !== e.BuiltinFunctions.nullTextIdentifier() && (T.value = e.SystemActions.listFilter(r.variables.fullTransferFromAccountListVar, function(c) {
                                                            return c.loginidAttr === r.variables.toIn
                                                        }, a), b.value = e.SystemActions.listFilter(r.variables.fullTransferFromAccountListVar, function(c) {
                                                            return c.loginidAttr === A.value.activeWalletOut.loginidAttr
                                                        }, a), r.variables.showInitialTransferModalVar = !1, r.variables.transferFromVar = T.value.filteredListOut.getCurrent(a.iterationContext), r.variables.transferToVar = b.value.filteredListOut.getCurrent(a.iterationContext), r.variables.toIn = e.BuiltinFunctions.nullIdentifier().toString())
                                                    })
                                                })
                                            })
                                        });
                                        r.variables.hasNoFundsVar = !0, r.variables.isLoadingVar = !1
                                    })
                                })
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(a) {
            this.__onReady$Action = a
        }
        get _onCloseTransferToModal$Action() {
            return this.hasOwnProperty("__onCloseTransferToModal$Action") || (this.__onCloseTransferToModal$Action = function(a) {
                var r = this.model,
                    t = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("OnCloseTransferToModal", function(n) {
                    n && (n.setAttribute("code.function", "OnCloseTransferToModal"), n.setAttribute("outsystems.function.key", "95b31faf-4323-4311-8b03-2054d3f979a1"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnCloseTransferToModal"), a = t.callContext(a), r.variables.isTransferToOpenVar = !1
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onCloseTransferToModal$Action
        }
        set _onCloseTransferToModal$Action(a) {
            this.__onCloseTransferToModal$Action = a
        }
        get _exchangeRateSwitcherOnChange$Action() {
            return this.hasOwnProperty("__exchangeRateSwitcherOnChange$Action") || (this.__exchangeRateSwitcherOnChange$Action = function(a) {
                var r = this.model,
                    t = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("ExchangeRateSwitcherOnChange", function(n) {
                    n && (n.setAttribute("code.function", "ExchangeRateSwitcherOnChange"), n.setAttribute("outsystems.function.key", "99831c2e-6286-4e9f-a59b-74a3b90d4f1a"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("ExchangeRateSwitcherOnChange"), a = t.callContext(a), r.variables.transferAmountVar = e.BuiltinFunctions.integerToDecimal(0), r.variables.transferFromConvertedAmountVar = e.BuiltinFunctions.integerToDecimal(0), r.widgets.get(o.getId("InputTransferExchangeAmount")).validAttr = !0, r.widgets.get(o.getId("InputTransferExchangeAmount")).validationMessageAttr = e.BuiltinFunctions.nullTextIdentifier()
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__exchangeRateSwitcherOnChange$Action
        }
        set _exchangeRateSwitcherOnChange$Action(a) {
            this.__exchangeRateSwitcherOnChange$Action = a
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(a) {
                var r = this.model,
                    t = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("OnDestroy", function(n) {
                    n && (n.setAttribute("code.function", "OnDestroy"), n.setAttribute("outsystems.function.key", "a3d37f05-250a-4c86-b236-6d713cf401f0"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnDestroy"), a = t.callContext(a), e.Logger.startActiveSpan("JSDisposeTimerExchangeRate", function(i) {
                            i && (i.setAttribute("code.function", "JSDisposeTimerExchangeRate"), i.setAttribute("outsystems.function.key", "6087b362-6d11-44bb-8104-90e978fa349a"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(se, "JSDisposeTimerExchangeRate", "OnDestroy", null, function(f) {}, {}, {})
                            } finally {
                                i && i.end()
                            }
                        }, 1)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(a) {
            this.__onDestroy$Action = a
        }
        get _onClickTransferToAccount$Action() {
            return this.hasOwnProperty("__onClickTransferToAccount$Action") || (this.__onClickTransferToAccount$Action = function(a, r) {
                var t = this.model,
                    o = this.controller,
                    n = this.idService;
                return e.Logger.startActiveSpan("OnClickTransferToAccount", function(i) {
                    i && (i.setAttribute("code.function", "OnClickTransferToAccount"), i.setAttribute("outsystems.function.key", "b2292fd3-5c28-4f25-8cc7-81ba6503e2dc"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("OnClickTransferToAccount"), r = o.callContext(r);
                        var f = new e.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnClickTransferToAccount$vars")));
                        f.value.accountDetailsInLocal = a.clone();
                        var T = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType);
                        t.variables.transferToVar = f.value.accountDetailsInLocal, t.variables.isTransferToOpenVar = !1, t.widgets.get(n.getId("InputTransferExchangeAmount")).validAttr = !0, t.widgets.get(n.getId("InputTransferExchangeAmount")).validationMessageAttr = e.BuiltinFunctions.nullTextIdentifier(), t.variables.transferFromConvertedAmountVar = e.BuiltinFunctions.integerToDecimal(0), t.variables.transferAmountVar = e.BuiltinFunctions.integerToDecimal(0), t.variables.convertedTransferAmountVar = e.BuiltinFunctions.integerToDecimal(0), t.variables.convertedCalculatedFeesVar = e.BuiltinFunctions.integerToDecimal(0), t.variables.transferToConvertedAmountVar = e.BuiltinFunctions.integerToDecimal(0), t.widgets.get(n.getId("InputTransferAmount")).validAttr = !0, t.widgets.get(n.getId("InputTransferAmount")).validationMessageAttr = e.BuiltinFunctions.nullTextIdentifier(), t.widgets.get(n.getId("InputTransferExchangeAmount")).validAttr = !0, t.widgets.get(n.getId("InputTransferExchangeAmount")).validationMessageAttr = e.BuiltinFunctions.nullTextIdentifier(), T.value.jSONOut = e.JSONUtils.serializeToJSON(f.value.accountDetailsInLocal, !1, !1), t.variables.transferFromVar.accountCategoryAttr === "Wallets" && t.variables.transferToVar.accountCategoryAttr === "Wallets" ? (t.variables.showCurrencySwitcherVar = !0, t.variables.currencySwitcherVar = t.variables.transferFromVar.currencyAttr, t.variables.showInitialTransferModalVar = !1) : (t.variables.showCurrencySwitcherVar = !1, t.variables.showInitialTransferModalVar = !1)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onClickTransferToAccount$Action
        }
        set _onClickTransferToAccount$Action(a) {
            this.__onClickTransferToAccount$Action = a
        }
        get _onChangeInputTransferAmount$Action() {
            return this.hasOwnProperty("__onChangeInputTransferAmount$Action") || (this.__onChangeInputTransferAmount$Action = function(a) {
                var r = this.model,
                    t = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("OnChangeInputTransferAmount", function(n) {
                    return n && (n.setAttribute("code.function", "OnChangeInputTransferAmount"), n.setAttribute("outsystems.function.key", "b5c5135a-0d69-44c8-afe1-91666e8ca7ec"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnChangeInputTransferAmount"), a = t.callContext(a);
                        var i = new e.DataTypes.VariableHolder;
                        return e.Flow.executeAsyncFlow(function() {
                            return r.flush(), _.exchangeRates$Action("USD", "", a).then(function(f) {
                                i.value = f
                            }).then(function() {
                                e.Logger.startActiveSpan("AmountValidation", function(f) {
                                    f && (f.setAttribute("code.function", "AmountValidation"), f.setAttribute("outsystems.function.key", "424ec2b6-92e9-42d1-9709-64bcf7f3adb6"), f.setAttribute("outsystems.function.owner.name", "tradershub"), f.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), f.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return t.safeExecuteJSNode(ie, "AmountValidation", "OnChangeInputTransferAmount", {
                                            DailyCumulativeAmountTransfers: e.DataConversion.JSNodeParamConverter.to(r.variables.dailyCumulativeAmountTransfersVar, e.DataTypes.DataTypes.Text),
                                            AccountType: e.DataConversion.JSNodeParamConverter.to(p.getAccountType(), e.DataTypes.DataTypes.Text),
                                            Rate: e.DataConversion.JSNodeParamConverter.to(i.value.responseOut, e.DataTypes.DataTypes.Text),
                                            TransferAmount: e.DataConversion.JSNodeParamConverter.to(r.variables.transferAmountVar, e.DataTypes.DataTypes.Decimal),
                                            WidgetId: e.DataConversion.JSNodeParamConverter.to(o.getId("InputTransferAmount"), e.DataTypes.DataTypes.Text),
                                            TransferToName: e.DataConversion.JSNodeParamConverter.to(r.variables.transferToVar.nameAttr, e.DataTypes.DataTypes.Text),
                                            Currency: e.DataConversion.JSNodeParamConverter.to(r.variables.transferFromVar.currencyAttr, e.DataTypes.DataTypes.Text),
                                            Balance: e.DataConversion.JSNodeParamConverter.to(e.BuiltinFunctions.decimalToText(r.variables.transferFromVar.balanceAttr), e.DataTypes.DataTypes.Text),
                                            TransferFromLoginId: e.DataConversion.JSNodeParamConverter.to(r.variables.transferFromVar.loginidAttr, e.DataTypes.DataTypes.Text),
                                            MinTransfer: e.DataConversion.JSNodeParamConverter.to(r.variables.transferFromVar.minTransferAttr, e.DataTypes.DataTypes.Decimal),
                                            TransferFromName: e.DataConversion.JSNodeParamConverter.to(r.variables.transferFromVar.nameAttr, e.DataTypes.DataTypes.Text)
                                        }, function(T) {}, {
                                            FormatMoney: H.clientActionProxies.formatMoney$Action,
                                            YupValidate: B.clientActionProxies.yupValidate$Action
                                        }, {})
                                    } finally {
                                        f && f.end()
                                    }
                                }, 1)
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__onChangeInputTransferAmount$Action
        }
        set _onChangeInputTransferAmount$Action(a) {
            this.__onChangeInputTransferAmount$Action = a
        }
        get _onClickTransferFromAccount$Action() {
            return this.hasOwnProperty("__onClickTransferFromAccount$Action") || (this.__onClickTransferFromAccount$Action = function(a, r) {
                var t = this.model,
                    o = this.controller,
                    n = this.idService;
                return e.Logger.startActiveSpan("OnClickTransferFromAccount", function(i) {
                    i && (i.setAttribute("code.function", "OnClickTransferFromAccount"), i.setAttribute("outsystems.function.key", "c79debf3-1bc1-417d-992e-f5e173a379b9"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("OnClickTransferFromAccount"), r = o.callContext(r);
                        var f = new e.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnClickTransferFromAccount$vars")));
                        f.value.accountDetailsInLocal = a.clone();
                        var T = new e.DataTypes.VariableHolder,
                            b = new e.DataTypes.VariableHolder;
                        t.variables.transferFromVar = f.value.accountDetailsInLocal, t.variables.transferToVar = t.variables.nullTransferAccountVar, t.widgets.get(n.getId("InputTransferExchangeAmount")).validAttr = !0, t.widgets.get(n.getId("InputTransferExchangeAmount")).validationMessageAttr = e.BuiltinFunctions.nullTextIdentifier(), t.variables.transferFromConvertedAmountVar = e.BuiltinFunctions.integerToDecimal(0), t.variables.transferAmountVar = e.BuiltinFunctions.integerToDecimal(0), t.variables.convertedTransferAmountVar = e.BuiltinFunctions.integerToDecimal(0), t.variables.convertedCalculatedFeesVar = e.BuiltinFunctions.integerToDecimal(0), t.variables.transferToConvertedAmountVar = e.BuiltinFunctions.integerToDecimal(0), t.variables.isTransferFromOpenVar = !1, t.widgets.get(n.getId("InputTransferAmount")).validAttr = !0, t.widgets.get(n.getId("InputTransferAmount")).validationMessageAttr = e.BuiltinFunctions.nullTextIdentifier(), t.widgets.get(n.getId("InputTransferExchangeAmount")).validAttr = !0, t.widgets.get(n.getId("InputTransferExchangeAmount")).validationMessageAttr = e.BuiltinFunctions.nullTextIdentifier(), t.variables.showDisclaimerMessageVar = !1, t.variables.transferAccountListVar = t.variables.fullTransferAccountListVar, t.variables.activeWalletVar.loginidAttr === t.variables.transferFromVar.loginidAttr ? (T.value = e.SystemActions.listFilter(t.variables.fullTransferAccountListVar, function(v) {
                            return f.value.accountDetailsInLocal.iconAttr !== v.iconAttr
                        }, r), T.value.filteredListOut.length > 1 ? t.variables.transferAccountListVar = T.value.filteredListOut : (t.variables.transferToVar = T.value.filteredListOut.getCurrent(r.iterationContext), t.variables.showInitialTransferModalVar = !1, t.variables.transferAccountListVar = T.value.filteredListOut, t.variables.transferToVar.accountCategoryAttr === "Wallets" ? (t.variables.showCurrencySwitcherVar = !0, t.variables.currencySwitcherVar = t.variables.activeWalletVar.currencyAttr) : t.variables.showCurrencySwitcherVar = !1)) : (b.value = e.SystemActions.listFilter(t.variables.fullTransferFromAccountListVar, function(v) {
                            return v.loginidAttr === t.variables.activeWalletVar.loginidAttr
                        }, r), t.variables.transferToVar = b.value.filteredListOut.getCurrent(r.iterationContext), t.variables.showDisclaimerMessageVar = !0, t.variables.showInitialTransferModalVar = !1, t.variables.transferAccountListVar = b.value.filteredListOut)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onClickTransferFromAccount$Action
        }
        set _onClickTransferFromAccount$Action(a) {
            this.__onClickTransferFromAccount$Action = a
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(a) {
                var r = this.model,
                    t = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("OnInitialize", function(n) {
                    n && (n.setAttribute("code.function", "OnInitialize"), n.setAttribute("outsystems.function.key", "d1c69909-2dfd-42ac-9dac-44cce773bb97"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        if (t.ensureControllerAlive("OnInitialize"), a = t.callContext(a), p.getAuthToken() === e.BuiltinFunctions.nullTextIdentifier()) return e.Navigation.navigateTo(e.Navigation.generateScreenURL("tradershub", "cfds/:ProductIdentifier?", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), a, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(a) {
            this.__onInitialize$Action = a
        }
        get _openTransferToModal$Action() {
            return this.hasOwnProperty("__openTransferToModal$Action") || (this.__openTransferToModal$Action = function(a) {
                var r = this.model,
                    t = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("OpenTransferToModal", function(n) {
                    n && (n.setAttribute("code.function", "OpenTransferToModal"), n.setAttribute("outsystems.function.key", "ddf474bb-0962-4083-b91f-a69df7b29c40"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OpenTransferToModal"), a = t.callContext(a), r.variables.isTransferToOpenVar = !0
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__openTransferToModal$Action
        }
        set _openTransferToModal$Action(a) {
            this.__openTransferToModal$Action = a
        }
        get _openTransferFromModal$Action() {
            return this.hasOwnProperty("__openTransferFromModal$Action") || (this.__openTransferFromModal$Action = function(a) {
                var r = this.model,
                    t = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("OpenTransferFromModal", function(n) {
                    n && (n.setAttribute("code.function", "OpenTransferFromModal"), n.setAttribute("outsystems.function.key", "fd32479f-d94c-4bd6-9abc-a3dde691faac"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OpenTransferFromModal"), a = t.callContext(a), r.variables.isTransferFromOpenVar = !0
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__openTransferFromModal$Action
        }
        set _openTransferFromModal$Action(a) {
            this.__openTransferFromModal$Action = a
        }
        onCloseTransferFromModal$Action(a) {
            var r = this.controller;
            return e.Logger.startActiveSpan("OnCloseTransferFromModal__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnCloseTransferFromModal"), t.setAttribute("outsystems.function.key", "025247b5-342a-441e-8f2e-30a7405e4d8e"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onCloseTransferFromModal$Action, a)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        assignExchangeRate$Action(a, r) {
            var t = this.controller;
            return e.Logger.startActiveSpan("AssignExchangeRate__proxy", function(o) {
                o && (o.setAttribute("code.function", "AssignExchangeRate"), o.setAttribute("outsystems.function.key", "03211425-510d-4afc-9504-a67819619295"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._assignExchangeRate$Action, r, a)
                } finally {
                    o && o.end()
                }
            }, 0)
        }
        assignExchangeRateCountdownTimer$Action(a, r) {
            var t = this.controller;
            return e.Logger.startActiveSpan("AssignExchangeRateCountdownTimer__proxy", function(o) {
                o && (o.setAttribute("code.function", "AssignExchangeRateCountdownTimer"), o.setAttribute("outsystems.function.key", "16179031-707c-45a4-8f64-4bd3edf8e1dd"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._assignExchangeRateCountdownTimer$Action, r, a)
                } finally {
                    o && o.end()
                }
            }, 0)
        }
        submitTransferOnClick$Action(a) {
            var r = this.controller;
            return e.Logger.startActiveSpan("SubmitTransferOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "SubmitTransferOnClick"), t.setAttribute("outsystems.function.key", "180ff7b9-fec8-4133-bfeb-e67400f33ff5"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._submitTransferOnClick$Action, a)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        getExchangeRate$Action(a) {
            var r = this.controller;
            return e.Logger.startActiveSpan("GetExchangeRate__proxy", function(t) {
                return t && (t.setAttribute("code.function", "GetExchangeRate"), t.setAttribute("outsystems.function.key", "1efd211c-94d4-43c0-a293-fa6fe524745f"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._getExchangeRate$Action, a)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onChangeInputTransferConvertedAmount$Action(a) {
            var r = this.controller;
            return e.Logger.startActiveSpan("OnChangeInputTransferConvertedAmount__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnChangeInputTransferConvertedAmount"), t.setAttribute("outsystems.function.key", "4091bcf4-616b-4e2a-97da-d41d78267c7b"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onChangeInputTransferConvertedAmount$Action, a)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        makeNewTransferBtnOnClick$Action(a) {
            var r = this.controller;
            return e.Logger.startActiveSpan("MakeNewTransferBtnOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "MakeNewTransferBtnOnClick"), t.setAttribute("outsystems.function.key", "4444cb2f-b4a4-41aa-8a89-6bc5e8704d05"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._makeNewTransferBtnOnClick$Action, a)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onRender$Action(a) {
            var r = this.controller;
            return e.Logger.startActiveSpan("OnRender__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnRender"), t.setAttribute("outsystems.function.key", "6de5d60d-8ba8-4153-990b-872b5e331dbf"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onRender$Action, a)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onReady$Action(a) {
            var r = this.controller;
            return e.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "70f9f4ed-810e-4e4b-894a-c51d6f293604"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onReady$Action, a)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onCloseTransferToModal$Action(a) {
            var r = this.controller;
            return e.Logger.startActiveSpan("OnCloseTransferToModal__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnCloseTransferToModal"), t.setAttribute("outsystems.function.key", "95b31faf-4323-4311-8b03-2054d3f979a1"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onCloseTransferToModal$Action, a)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        exchangeRateSwitcherOnChange$Action(a) {
            var r = this.controller;
            return e.Logger.startActiveSpan("ExchangeRateSwitcherOnChange__proxy", function(t) {
                t && (t.setAttribute("code.function", "ExchangeRateSwitcherOnChange"), t.setAttribute("outsystems.function.key", "99831c2e-6286-4e9f-a59b-74a3b90d4f1a"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._exchangeRateSwitcherOnChange$Action, a)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onDestroy$Action(a) {
            var r = this.controller;
            return e.Logger.startActiveSpan("OnDestroy__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnDestroy"), t.setAttribute("outsystems.function.key", "a3d37f05-250a-4c86-b236-6d713cf401f0"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onDestroy$Action, a)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onClickTransferToAccount$Action(a, r) {
            var t = this.controller;
            return e.Logger.startActiveSpan("OnClickTransferToAccount__proxy", function(o) {
                o && (o.setAttribute("code.function", "OnClickTransferToAccount"), o.setAttribute("outsystems.function.key", "b2292fd3-5c28-4f25-8cc7-81ba6503e2dc"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onClickTransferToAccount$Action, r, a)
                } finally {
                    o && o.end()
                }
            }, 0)
        }
        onChangeInputTransferAmount$Action(a) {
            var r = this.controller;
            return e.Logger.startActiveSpan("OnChangeInputTransferAmount__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnChangeInputTransferAmount"), t.setAttribute("outsystems.function.key", "b5c5135a-0d69-44c8-afe1-91666e8ca7ec"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onChangeInputTransferAmount$Action, a)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onClickTransferFromAccount$Action(a, r) {
            var t = this.controller;
            return e.Logger.startActiveSpan("OnClickTransferFromAccount__proxy", function(o) {
                o && (o.setAttribute("code.function", "OnClickTransferFromAccount"), o.setAttribute("outsystems.function.key", "c79debf3-1bc1-417d-992e-f5e173a379b9"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onClickTransferFromAccount$Action, r, a)
                } finally {
                    o && o.end()
                }
            }, 0)
        }
        onInitialize$Action(a) {
            var r = this.controller;
            return e.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "d1c69909-2dfd-42ac-9dac-44cce773bb97"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onInitialize$Action, a)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        openTransferToModal$Action(a) {
            var r = this.controller;
            return e.Logger.startActiveSpan("OpenTransferToModal__proxy", function(t) {
                t && (t.setAttribute("code.function", "OpenTransferToModal"), t.setAttribute("outsystems.function.key", "ddf474bb-0962-4083-b91f-a69df7b29c40"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._openTransferToModal$Action, a)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        openTransferFromModal$Action(a) {
            var r = this.controller;
            return e.Logger.startActiveSpan("OpenTransferFromModal__proxy", function(t) {
                t && (t.setAttribute("code.function", "OpenTransferFromModal"), t.setAttribute("outsystems.function.key", "fd32479f-d94c-4bd6-9abc-a3dde691faac"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._openTransferFromModal$Action, a)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(a) {
                var r = this.controller,
                    t = this.model,
                    o = this.idService;
                return r.onInitialize$Action(a)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(a) {
            this._onInitializeEventHandler = a
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(a) {
                var r = this.controller,
                    t = this.model,
                    o = this.idService;
                return r.onReady$Action(a)
            }), this._onReadyEventHandler
        }
        set onReadyEventHandler(a) {
            this._onReadyEventHandler = a
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = function(a) {
                var r = this.controller,
                    t = this.model,
                    o = this.idService;
                return r.onRender$Action(a)
            }), this._onRenderEventHandler
        }
        set onRenderEventHandler(a) {
            this._onRenderEventHandler = a
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = function(a) {
                var r = this.controller,
                    t = this.model,
                    o = this.idService;
                return r.onDestroy$Action(a)
            }), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(a) {
            this._onDestroyEventHandler = a
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(a) {
            this._onParametersChangedEventHandler = a
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(a) {
                return ge.default.handleError(a, this.callContext())
            }), this._handleError
        }
        set handleError(a) {
            this._handleError = a
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return _.defaultTimeout
        }
    };
    l(m, "ControllerInner");
    let s = m;
    h = s, h.registerVariableGroupType("tradershub.WalletFlows.WalletsTransfer.AssignExchangeRate$vars", [{
        name: "Rate",
        attrName: "rateInLocal",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Decimal,
        defaultValue: l(function() {
            return e.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }]), h.registerVariableGroupType("tradershub.WalletFlows.WalletsTransfer.AssignExchangeRateCountdownTimer$vars", [{
        name: "ExchangeRateTimer",
        attrName: "exchangeRateTimerInLocal",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Decimal,
        defaultValue: l(function() {
            return e.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }]), h.registerVariableGroupType("tradershub.WalletFlows.WalletsTransfer.SubmitTransferOnClick$getPlatformJSResult", [{
        name: "ToPlatform",
        attrName: "toPlatformOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "FromPlatform",
        attrName: "fromPlatformOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }]), h.registerVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnChangeInputTransferConvertedAmount$convertTransferAmountJSResult", [{
        name: "ConvertedTransferAmount",
        attrName: "convertedTransferAmountOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Decimal,
        defaultValue: l(function() {
            return e.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }]), h.registerVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnChangeInputTransferConvertedAmount$calculateConvertedTransferFromFeesJSResult", [{
        name: "Fees",
        attrName: "feesOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Decimal,
        defaultValue: l(function() {
            return e.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }, {
        name: "FinalAmount",
        attrName: "finalAmountOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Decimal,
        defaultValue: l(function() {
            return e.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }]), h.registerVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnChangeInputTransferConvertedAmount$calculateExchangeRateTransferToJSResult", [{
        name: "ConvertedAmount",
        attrName: "convertedAmountOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Decimal,
        defaultValue: l(function() {
            return e.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }]), h.registerVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnChangeInputTransferConvertedAmount$calculateTransferFromFeesJSResult", [{
        name: "Fees",
        attrName: "feesOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Decimal,
        defaultValue: l(function() {
            return e.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }, {
        name: "FinalAmount",
        attrName: "finalAmountOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Decimal,
        defaultValue: l(function() {
            return e.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }]), h.registerVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnChangeInputTransferConvertedAmount$calculateExchangeRateTransferFromJSResult", [{
        name: "ConvertedAmount",
        attrName: "convertedAmountOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Decimal,
        defaultValue: l(function() {
            return e.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }]), h.registerVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnReady$getAccountListJSResult", [{
        name: "TransferAccountList",
        attrName: "transferAccountListOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "TransferAccountKeys",
        attrName: "transferAccountKeysOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "TransferFromAccountList",
        attrName: "transferFromAccountListOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }]), h.registerVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnReady$transferBetweenAccountsPayloadJSResult", [{
        name: "Payload",
        attrName: "payloadOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }]), h.registerVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnReady$checkHasTransferAccountsWithFundsJSResult", [{
        name: "hasTransferAccountsWithFunds",
        attrName: "hasTransferAccountsWithFundsOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Boolean,
        defaultValue: l(function() {
            return !1
        }, "defaultValue")
    }]), h.registerVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnReady$getLimitsDataJSResult", [{
        name: "DailyTransferAmount",
        attrName: "dailyTransferAmountOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "DailyTransferCount",
        attrName: "dailyTransferCountOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "LifetimeTransfers",
        attrName: "lifetimeTransfersOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }]), h.registerVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnReady$limitPayloadJSResult", [{
        name: "Payload",
        attrName: "payloadOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }]), h.registerVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnClickTransferToAccount$vars", [{
        name: "AccountDetails",
        attrName: "accountDetailsInLocal",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Record,
        defaultValue: l(function() {
            return new $
        }, "defaultValue"),
        complexType: $
    }]), h.registerVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnClickTransferFromAccount$vars", [{
        name: "AccountDetails",
        attrName: "accountDetailsInLocal",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Record,
        defaultValue: l(function() {
            return new $
        }, "defaultValue"),
        complexType: $
    }])
}
var h, Wt = new e.Controller.ControllerFactory(h, ve);
export {
    Wt as a
};