import {
    a as V
} from "./_oschunk-RFENF4ST.js";
import {
    a as Tt
} from "./_oschunk-IQUI5AIQ.js";
import {
    a as mt
} from "./_oschunk-LHY3WMNC.js";
import {
    a as O,
    c as x,
    d as N
} from "./_oschunk-XMOR6XCC.js";
import {
    Bf as R,
    Eb as I,
    Rd as L,
    tc as k
} from "./_oschunk-44PT7RP7.js";
import {
    ia as yt
} from "./_oschunk-NTQBNJ73.js";
import {
    c,
    h as dt
} from "./_oschunk-DVBKI63I.js";
var bt = {
        "cH8gH+dwOESRCJqOQ77NlA#Title": "\u062A\u062D\u0648\u064A\u0644",
        "cH8gH+dwOESRCJqOQ77NlA#TitleExpression.1345526795.1": "\u062A\u062D\u0648\u064A\u0644"
    },
    vt = {
        "cH8gH+dwOESRCJqOQ77NlA#Title": "\xDCberweisung",
        "cH8gH+dwOESRCJqOQ77NlA#TitleExpression.1345526795.1": "\xDCberweisung"
    },
    Ct = {
        "cH8gH+dwOESRCJqOQ77NlA#Title": "Transferencia",
        "cH8gH+dwOESRCJqOQ77NlA#TitleExpression.1345526795.1": "Transferencia"
    },
    gt = {
        "cH8gH+dwOESRCJqOQ77NlA#Title": "Trasferisci",
        "cH8gH+dwOESRCJqOQ77NlA#TitleExpression.1345526795.1": "Trasferisci"
    },
    Dt = {
        "cH8gH+dwOESRCJqOQ77NlA#Title": "Przelew",
        "cH8gH+dwOESRCJqOQ77NlA#TitleExpression.1345526795.1": "Przelew"
    },
    ht = {
        "cH8gH+dwOESRCJqOQ77NlA#Title": "Transfer\xEAncias",
        "cH8gH+dwOESRCJqOQ77NlA#TitleExpression.1345526795.1": "Transfer\xEAncias"
    },
    At = {
        "ar-001": {
            translations: bt,
            isRTL: !0
        },
        "de-DE": {
            translations: vt,
            isRTL: !1
        },
        "es-ES": {
            translations: Ct,
            isRTL: !1
        },
        "it-IT": {
            translations: gt,
            isRTL: !1
        },
        "pl-PL": {
            translations: Dt,
            isRTL: !1
        },
        "pt-PT": {
            translations: ht,
            isRTL: !1
        }
    };

function P(o, y, _, a) {
    return new Promise(function(r, e) {
        let i = o.BaseCurrency,
            n = o.TargetCurrency,
            u = o.FractionalDigits,
            f = 59;
        window.timerInterval = null, window.exchangeInterval = null, window.getExchangeRate = () => dt(this, null, function*() {
            let d = yield y.ExchangeRates(i), m = JSON.parse(d.Response), C = Number(m.exchange_rates.rates[o.TargetCurrency].toFixed(u));
            y.AssignExchangeRate(C), f = 59, r()
        }), window.startCountdown = () => (timerInterval && clearInterval(timerInterval), timerInterval = setInterval(() => {
            f > 0 && f--, y.AssignExchangeRateCountdownTimer(f)
        }, 1e3), timerInterval), window.cleanup = () => {
            timerInterval && (clearInterval(timerInterval), timerInterval = null), exchangeInterval && (clearInterval(exchangeInterval), exchangeInterval = null)
        }, window.getExchangeRate().then(() => {
            window.timerIntervalRef = startCountdown(), exchangeInterval = setInterval(getExchangeRate, 6e4)
        })
    })
}
c(P, "default");

function W(o, y, _, a) {
    var D, g, F;
    let r = o.WalletBalance,
        e = o.Currency,
        i = o.TransferAmount,
        n = o.MinTransfer,
        u = o.TransferToName,
        f = o.TransferFromName,
        d = o.FiatToCryptoLimit,
        m = o.Rate,
        C = o.ConvertToCurrency,
        s = {
            TransferAmount: i
        },
        T = (D = y.FormatMoney(n, e)) == null ? void 0 : D.FormattedNumber,
        A = (g = y.FormatMoney(d, e)) == null ? void 0 : g.FormattedNumber,
        p = d * m,
        h = (F = y.FormatMoney(p, C)) == null ? void 0 : F.FormattedNumber,
        v = yup.object().shape({
            TransferAmount: yup.number().test("exceed-balance", "Insufficient funds. Deposit now to make a transfer.", function(w) {
                return w <= r
            }).test("transfer-limit", `Transfer limit is up to ${A} ${e} or 0.${h} ${C}. Verify your account to upgrade the limit.`, function(w) {
                return w >= A
            })
        }),
        l = y.YupValidate(v, s).Errors;
    l.TransferAmount != "" ? a.Validation.setWidgetAsInvalid(o.WidgetId, l.TransferAmount) : a.Validation.setWidgetAsValid(o.WidgetId)
}
c(W, "default");

function $(o, y, _, a) {
    let r = o.Rate,
        e = o.InputId,
        i = o.FractionalDigits,
        n = document.getElementById(e);
    if (n) {
        let f = (parseFloat(n.value) || 0) / r;
        isFinite(f) || (f = 0), o.ConvertedTransferAmount = parseFloat(f.toFixed(i))
    }
}
c($, "default");

function M(o, y, _, a) {
    var D, g, F;
    let r = o.WalletBalance,
        e = o.Currency,
        i = o.TransferAmount,
        n = o.MinTransfer,
        u = o.TransferToName,
        f = o.TransferFromName,
        d = o.FiatToCryptoLimit,
        m = o.Rate,
        C = o.ConvertToCurrency,
        s = {
            TransferAmount: i
        },
        T = (D = y.FormatMoney(n, e)) == null ? void 0 : D.FormattedNumber,
        A = (g = y.FormatMoney(d, e)) == null ? void 0 : g.FormattedNumber,
        p = d * m,
        h = (F = y.FormatMoney(p, C)) == null ? void 0 : F.FormattedNumber,
        v = yup.object().shape({
            TransferAmount: yup.number().test("exceed-balance", "Insufficient funds. Deposit now to make a transfer.", function(w) {
                return w <= r
            }).test("transfer-limit", `Transfer limit is up to ${A} ${e} or 0.${h} ${C}. Verify your account to upgrade the limit.`, function(w) {
                return w >= A
            })
        }),
        l = y.YupValidate(v, s).Errors;
    l.TransferAmount != "" ? a.Validation.setWidgetAsInvalid(o.WidgetId, l.TransferAmount) : a.Validation.setWidgetAsValid(o.WidgetId)
}
c(M, "default");

function B(o, y, _, a) {
    var h;
    let r = parseFloat(o.WalletBalance) || 0,
        e = o.Currency,
        i = parseFloat(o.TransferAmount) || 0,
        n = o.TransferFromCurrency,
        u = parseFloat(o.fiatToCryptoLimit) || 0,
        f = parseFloat(o.Rate) || 1;

    function d(v) {
        return isNaN(v) ? 0 : v * f
    }
    c(d, "convertAmount");
    let m = {
            TransferAmount: i
        },
        C = d(r),
        s = ((h = y.FormatMoney(u, n)) == null ? void 0 : h.FormattedNumber) || u,
        T = d(u),
        A = yup.object().shape({
            TransferAmount: yup.number().test("exceed-balance", "Insufficient funds. Deposit now to make a transfer.", function(v) {
                return C >= v
            }).test("transfer-limit", `Transfer limit is up to ${s} ${n} or ${T} ${e}. Verify your account to upgrade the limit.`, function(v) {
                return T >= v
            })
        }),
        p = y.YupValidate(A, m).Errors;
    p.TransferAmount != "" ? a.Validation.setWidgetAsInvalid(o.WidgetId, p.TransferAmount) : a.Validation.setWidgetAsValid(o.WidgetId)
}
c(B, "default");

function H(o, y, _, a) {
    var h, v;
    let r = o.WalletBalance,
        e = o.Currency,
        i = o.TransferAmount,
        n = o.TransferToName,
        u = o.FiatToCryptoLimit,
        f = o.Rate,
        d = o.ConvertToCurrency,
        m = {
            TransferAmount: i
        },
        C = (h = y.FormatMoney(u, e)) == null ? void 0 : h.FormattedNumber,
        s = u * f,
        T = (v = y.FormatMoney(s, d)) == null ? void 0 : v.FormattedNumber,
        A = yup.object().shape({
            TransferAmount: yup.number().test("exceed-balance", "Insufficient funds. Deposit now to make a transfer.", function(l) {
                return l <= r
            }).test("transfer-limit", `Transfer limit is up to ${C} ${e} or 0.${T} ${d}. Verify your account to upgrade the limit.`, function(l) {
                return l >= C
            })
        }),
        p = y.YupValidate(A, m).Errors;
    p.TransferAmount != "" ? a.Validation.setWidgetAsInvalid(o.WidgetId, p.TransferAmount) : a.Validation.setWidgetAsValid(o.WidgetId)
}
c(H, "default");

function G(o, y, _, a) {
    let r = o.Rate,
        e = o.Amount,
        i = o.FractionalDigits,
        n = e * r;
    o.ConvertedAmount = parseFloat(n.toFixed(i))
}
c(G, "default");

function j(o, y, _, a) {
    let r = o.TransferAmount,
        e = o.FractionalDigits,
        i = JSON.parse(o.WebsiteStatus),
        n = o.WalletCurrency,
        u = o.TransferToCurrency,
        d = i.website_status.currencies_config[n].transfer_between_accounts.fees[u] / 100 * r,
        m = r - d;
    o.Fees = parseFloat(d.toFixed(e)), o.FinalAmount = parseFloat(m.toFixed(e))
}
c(j, "default");

function z(o, y, _, a) {
    let r = o.TransferAmount,
        e = o.FractionalDigits,
        i = JSON.parse(o.WebsiteStatus),
        n = o.WalletCurrency,
        u = o.TransferToCurrency,
        d = i.website_status.currencies_config[n].transfer_between_accounts.fees[u] / 100 * r,
        m = r - d;
    o.Fees = parseFloat(d.toFixed(e)), o.FinalAmount = parseFloat(m.toFixed(e))
}
c(z, "default");

function Y(o, y, _, a) {
    var h;
    let r = parseFloat(o.WalletBalance) || 0,
        e = o.Currency,
        i = parseFloat(o.TransferAmount) || 0,
        n = o.TransferFromCurrency,
        u = parseFloat(o.CryptoToCryptoLimit) || 0,
        f = parseFloat(o.Rate) || 1;

    function d(v) {
        return isNaN(v) ? 0 : v * f
    }
    c(d, "convertAmount");
    let m = {
            TransferAmount: i
        },
        C = d(r),
        s = ((h = y.FormatMoney(u, n)) == null ? void 0 : h.FormattedNumber) || u,
        T = d(u),
        A = yup.object().shape({
            TransferAmount: yup.number().test("exceed-balance", "Insufficient funds. Deposit now to make a transfer.", function(v) {
                return C >= v
            }).test("transfer-limit", `Transfer limit is up to ${s} ${n} or ${T} ${e}. Verify your account to upgrade the limit.`, function(v) {
                return T >= v
            })
        }),
        p = y.YupValidate(A, m).Errors;
    p.TransferAmount != "" ? a.Validation.setWidgetAsInvalid(o.WidgetId, p.TransferAmount) : a.Validation.setWidgetAsValid(o.WidgetId)
}
c(Y, "default");

function q(o, y, _, a) {
    let r = o.Rate,
        e = o.Amount,
        i = o.FractionalDigits,
        n = e * r;
    o.ConvertedAmount = parseFloat(n.toFixed(i))
}
c(q, "default");

function U(o, y, _, a) {
    let r = o.InputId,
        e = document.getElementById(r);
    e && e.getAttribute("data-dirty") === "False" && (y.GetExchangeRate(), e.setAttribute("data-dirty", "True"))
}
c(U, "default");

function Q(o, y, _, a) {
    var v;
    let r = parseFloat(o.WalletBalance) || 0,
        e = o.Currency,
        i = parseFloat(o.TransferAmount) || 0,
        n = o.TransferFromCurrency,
        u = parseFloat(o.CryptotoFiatLimit) || 0,
        f = parseFloat(o.Rate) || 1;

    function d(l) {
        return isNaN(l) ? 0 : l * f
    }
    c(d, "convertAmount");
    let m = {
            TransferAmount: i
        },
        C = d(r),
        s = ((v = y.FormatMoney(u, n)) == null ? void 0 : v.FormattedNumber) || u,
        T = d(u),
        A = T.toFixed(2),
        p = yup.object().shape({
            TransferAmount: yup.number().test("exceed-balance", "Insufficient funds. Deposit now to make a transfer.", function(l) {
                return C >= l
            }).test("transfer-limit", `Transfer limit is up to ${s} ${n} or ${A} ${e}. Verify your account to upgrade the limit.`, function(l) {
                return T >= l
            })
        }),
        h = y.YupValidate(p, m).Errors;
    h.TransferAmount != "" ? a.Validation.setWidgetAsInvalid(o.WidgetId, h.TransferAmount) : a.Validation.setWidgetAsValid(o.WidgetId)
}
c(Q, "default");

function K(o, y, _, a) {
    var F, w, nt, at, ot, it, st, ut, ct, lt;
    let r = (F = JSON.parse(o.Accounts)) == null ? void 0 : F.accounts,
        e = (w = JSON.parse(o.GetLimit)) == null ? void 0 : w.get_limits,
        i = (nt = JSON.parse(o.WebsiteStatus)) == null ? void 0 : nt.website_status,
        n = JSON.parse(o.ActiveWallet),
        u = o.AccountType,
        f = u === "real" ? JSON.parse(o.WalletAccounts) : [];
    console.log("accounts: ", r), console.log("limit: ", e), console.log("websiteStatus: ", i), console.log("activeWallet: ", n), console.log("walletAccounts: ", f), console.log("accountType: ", u);
    let d = {
        icon: n.icon,
        name: n.name,
        currency: n.currency,
        loginid: n.loginid,
        formattedBalance: n.formatted_balance,
        isCrypto: n.is_crypto,
        accountCategory: "Wallets",
        fractionalDigits: i.currencies_config[n.currency].fractional_digits,
        minTransfer: i.currencies_config[n.currency].transfer_between_accounts.limits.min,
        maxTransfer: i.currencies_config[n.currency].transfer_between_accounts.limits.max
    };
    console.log("modifyActiveWallet: ", d);
    let m = (f == null ? void 0 : f.filter(b => b == null ? void 0 : b.is_added).map(b => ({
        icon: b.icon,
        name: b.name,
        currency: b.currency,
        loginid: b.loginid,
        formattedBalance: b.formatted_balance,
        isCrypto: b.is_crypto,
        accountCategory: "Wallets",
        fractionalDigits: i.currencies_config[b.currency].fractional_digits,
        minTransfer: i.currencies_config[b.currency].transfer_between_accounts.limits.min,
        maxTransfer: i.currencies_config[b.currency].transfer_between_accounts.limits.max
    }))) || [];
    console.log("modifyWalletAccounts: ", m);
    let C = {
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
        s = ((at = r == null ? void 0 : r.filter(b => b.account_category === "trading")) == null ? void 0 : at.map(b => {
            var E;
            return {
                icon: (E = y.GetIcon(b.product || (b.account_type === "standard" ? "options" : b.account_type) || b.currency)) == null ? void 0 : E.CurrencyIcon,
                name: C[b.product || (b.account_type === "standard" ? "options" : b.account_type)] + " (" + b.loginid + ")",
                currency: b.currency,
                loginid: b.loginid,
                formattedBalance: b.balance + " " + b.currency,
                isCrypto: b.currency !== "EUR" || b.currency !== "USD",
                accountCategory: `Accounts linked to ${n.name}`,
                fractionalDigits: i.currencies_config[b.currency].fractional_digits,
                minTransfer: i.currencies_config[b.currency].transfer_between_accounts.limits.min,
                maxTransfer: i.currencies_config[b.currency].transfer_between_accounts.limits.max
            }
        })) || [];
    console.log("modifyTradingAccounts: ", s);
    let T = [d, ...m, ...s],
        A = [d, ...s];
    console.log("allAccounts: ", T), console.log("fromAccounts: ", A);

    function p(b) {
        return b.reduce((E, ft) => {
            let J = ft.accountCategory;
            return E[J] || (E[J] = []), E[J].push(ft), E
        }, {})
    }
    c(p, "groupAccountsByCategory");
    let h = p(T),
        v = p(A);
    console.log("transferAccountList: ", h), console.log("transferFromAccountList: ", v);
    let l = Object.keys(h),
        D = Object.values(h).flat(),
        g = Object.values(v).flat();
    console.log("transferAccountKeys: ", l), console.log("transferAccounts: ", D), console.log("transferFromAccounts: ", g), o.DailyCumulativeAmountTransfers = JSON.stringify((e == null ? void 0 : e.daily_cumulative_amount_transfers) || {}), o.DailyTransfers = JSON.stringify((e == null ? void 0 : e.daily_transfers) || {}), o.LifeTimeFiatToCrypto = ((it = (ot = e == null ? void 0 : e.lifetime_transfers) == null ? void 0 : ot.fiat_to_crypto) == null ? void 0 : it.available) || 0, o.LifeTimeCryptoToCrypto = ((ut = (st = e == null ? void 0 : e.lifetime_transfers) == null ? void 0 : st.crypto_to_crypto) == null ? void 0 : ut.available) || 0, o.LifeTimeCryptoToFiat = ((lt = (ct = e == null ? void 0 : e.lifetime_transfers) == null ? void 0 : ct.crypto_to_fiat) == null ? void 0 : lt.available) || 0, o.TransferAccountKeys = JSON.stringify(l), o.TransferAccountList = JSON.stringify(D), o.TransferFromAccountList = JSON.stringify(g)
}
c(K, "default");

function X(o, y, _, a) {
    o.Payload = JSON.stringify({
        accounts: "all",
        loginid: o.LoginId
    })
}
c(X, "default");

function Z(o, y, _, a) {
    let e = JSON.parse(o.AccountsList).accounts.some(i => Number(i.balance) > 0);
    o.hasTransferAccountsWithFunds = e
}
c(Z, "default");

function tt(o, y, _, a) {
    o.Payload = JSON.stringify({
        loginid: o.LoginId
    })
}
c(tt, "default");

function et(o, y, _) {
    window.clearInterval(window.timerInterval), window.clearInterval(window.exchangeInterval)
}
c(et, "default");

function rt(o, y, _, a) {
    var v;
    let r = o.WalletBalance,
        e = o.Currency,
        i = o.TransferAmount,
        n = o.MinTransfer,
        u = o.TransferToName,
        f = o.TransferFromName,
        d = o.IsCrypto,
        m = o.Rate,
        C = {
            TransferAmount: i
        },
        s = n,
        T = c(l => {
            var g;
            let D = l;
            return d && (D = D * m), (g = y.FormatMoney(D, e)) == null ? void 0 : g.FormattedNumber
        }, "convertedAmount"),
        A = (v = y.FormatMoney(s, e)) == null ? void 0 : v.FormattedNumber,
        p = yup.object().shape({
            TransferAmount: yup.number().test("exceed-balance", "Insufficient funds. Deposit now to make a transfer.", function(l) {
                return l <= r
            }).test("min-transfer", `Minimum transfer amount is ${A} ${e}.`, function(l) {
                return l >= n
            })
        }),
        h = y.YupValidate(p, C).Errors;
    h.TransferAmount != "" ? a.Validation.setWidgetAsInvalid(o.WidgetId, h.TransferAmount) : a.Validation.setWidgetAsValid(o.WidgetId)
}
c(rt, "default");
var t = yt; {
    let y = class y extends t.Controller.BaseViewController {
        constructor(a, r, e) {
            super(a, r, e, At);
            var i = this.controller;
            this.clientActionProxies = {
                assignExchangeRate$Action: c(function(n) {
                    return n = n === void 0 ? t.DataTypes.Decimal.defaultValue : n, i.executeActionInsideJSNode(i._assignExchangeRate$Action.bind(i, t.DataConversion.JSNodeParamConverter.from(n, t.DataTypes.DataTypes.Decimal)), i.callContext(), function(u) {
                        return {}
                    }, function() {}, "AssignExchangeRate")
                }, "assignExchangeRate$Action"),
                assignExchangeRateCountdownTimer$Action: c(function(n) {
                    return n = n === void 0 ? t.DataTypes.Decimal.defaultValue : n, i.executeActionInsideJSNode(i._assignExchangeRateCountdownTimer$Action.bind(i, t.DataConversion.JSNodeParamConverter.from(n, t.DataTypes.DataTypes.Decimal)), i.callContext(), function(u) {
                        return {}
                    }, function() {}, "AssignExchangeRateCountdownTimer")
                }, "assignExchangeRateCountdownTimer$Action"),
                getExchangeRate$Action: c(function() {
                    return i.executeActionInsideJSNode(i._getExchangeRate$Action.bind(i), i.callContext(), function(n) {
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
                    e = this.controller,
                    i = this.idService;
                return t.Logger.startActiveSpan("OnCloseTransferFromModal", function(n) {
                    n && (n.setAttribute("code.function", "OnCloseTransferFromModal"), n.setAttribute("outsystems.function.key", "025247b5-342a-441e-8f2e-30a7405e4d8e"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnCloseTransferFromModal"), a = e.callContext(a), r.variables.isTransferFromOpenVar = !1
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
                var e = this.model,
                    i = this.controller,
                    n = this.idService;
                return t.Logger.startActiveSpan("AssignExchangeRate", function(u) {
                    u && (u.setAttribute("code.function", "AssignExchangeRate"), u.setAttribute("outsystems.function.key", "03211425-510d-4afc-9504-a67819619295"), u.setAttribute("outsystems.function.owner.name", "tradershub"), u.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("AssignExchangeRate"), r = i.callContext(r);
                        var f = new t.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsTransfer.AssignExchangeRate$vars")));
                        f.value.rateInLocal = a, e.variables.exchangeRateVar = f.value.rateInLocal
                    } finally {
                        u && u.end()
                    }
                }, 1)
            }), this.__assignExchangeRate$Action
        }
        set _assignExchangeRate$Action(a) {
            this.__assignExchangeRate$Action = a
        }
        get _assignExchangeRateCountdownTimer$Action() {
            return this.hasOwnProperty("__assignExchangeRateCountdownTimer$Action") || (this.__assignExchangeRateCountdownTimer$Action = function(a, r) {
                var e = this.model,
                    i = this.controller,
                    n = this.idService;
                return t.Logger.startActiveSpan("AssignExchangeRateCountdownTimer", function(u) {
                    u && (u.setAttribute("code.function", "AssignExchangeRateCountdownTimer"), u.setAttribute("outsystems.function.key", "16179031-707c-45a4-8f64-4bd3edf8e1dd"), u.setAttribute("outsystems.function.owner.name", "tradershub"), u.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("AssignExchangeRateCountdownTimer"), r = i.callContext(r);
                        var f = new t.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsTransfer.AssignExchangeRateCountdownTimer$vars")));
                        f.value.exchangeRateTimerInLocal = a, e.variables.exchangeRateCountdownTimerVar = t.BuiltinFunctions.decimalToInteger(t.BuiltinFunctions.trunc(f.value.exchangeRateTimerInLocal))
                    } finally {
                        u && u.end()
                    }
                }, 1)
            }), this.__assignExchangeRateCountdownTimer$Action
        }
        set _assignExchangeRateCountdownTimer$Action(a) {
            this.__assignExchangeRateCountdownTimer$Action = a
        }
        get _transferOnClick$Action() {
            return this.hasOwnProperty("__transferOnClick$Action") || (this.__transferOnClick$Action = function(a) {
                var r = this.model,
                    e = this.controller,
                    i = this.idService;
                return t.Logger.startActiveSpan("TransferOnClick", function(n) {
                    return n && (n.setAttribute("code.function", "TransferOnClick"), n.setAttribute("outsystems.function.key", "180ff7b9-fec8-4133-bfeb-e67400f33ff5"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        e.ensureControllerAlive("TransferOnClick"), a = e.callContext(a);
                        var u = new t.DataTypes.VariableHolder,
                            f = new t.DataTypes.VariableHolder,
                            d = new t.DataTypes.VariableHolder;
                        return t.Flow.executeAsyncFlow(function() {
                            return t.Flow.executeSequence(function() {
                                return r.variables.showCurrencySwitcherVar ? t.Flow.executeSequence(function() {
                                    return r.variables.currencySwitcherVar === r.variables.activeWalletVar.currencyAttr ? (r.flush(), N.transferBetweenAccounts$Action(r.variables.transferFromVar.loginidAttr, r.variables.transferToVar.loginidAttr, r.variables.finalAmountVar, r.variables.activeWalletVar.currencyAttr, a).then(function(m) {
                                        f.value = m
                                    }).then(function() {
                                        f.value.isErrorOut !== !0 && (r.variables.isTransferSuccessVar = !0)
                                    })) : (r.flush(), N.transferBetweenAccounts$Action(r.variables.transferFromVar.loginidAttr, r.variables.transferToVar.loginidAttr, r.variables.convertedFinalAmountVar, r.variables.activeWalletVar.currencyAttr, a).then(function(m) {
                                        u.value = m
                                    }).then(function() {
                                        u.value.isErrorOut !== !0 && (r.variables.isTransferSuccessVar = !0)
                                    }))
                                }) : (r.flush(), N.transferBetweenAccounts$Action(r.variables.transferFromVar.loginidAttr, r.variables.transferToVar.loginidAttr, r.variables.transferAmountVar, r.variables.activeWalletVar.currencyAttr, a).then(function(m) {
                                    d.value = m
                                }).then(function() {
                                    d.value.isErrorOut || (r.variables.isTransferSuccessVar = !0)
                                }))
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__transferOnClick$Action
        }
        set _transferOnClick$Action(a) {
            this.__transferOnClick$Action = a
        }
        get _getExchangeRate$Action() {
            return this.hasOwnProperty("__getExchangeRate$Action") || (this.__getExchangeRate$Action = function(a) {
                var r = this.model,
                    e = this.controller,
                    i = this.idService;
                return t.Logger.startActiveSpan("GetExchangeRate", function(n) {
                    return n && (n.setAttribute("code.function", "GetExchangeRate"), n.setAttribute("outsystems.function.key", "1efd211c-94d4-43c0-a293-fa6fe524745f"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        return e.ensureControllerAlive("GetExchangeRate"), a = e.callContext(a), t.Flow.executeAsyncFlow(function() {
                            return t.Logger.startActiveSpan("InitExchangeRate", function(u) {
                                u && (u.setAttribute("code.function", "InitExchangeRate"), u.setAttribute("outsystems.function.key", "d0c04ed5-79c0-4dcd-a62a-2db5677a1421"), u.setAttribute("outsystems.function.owner.name", "tradershub"), u.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), u.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return e.safeExecuteAsyncJSNode(P, "InitExchangeRate", "GetExchangeRate", {
                                        TargetCurrency: t.DataConversion.JSNodeParamConverter.to(r.variables.transferToVar.currencyAttr, t.DataTypes.DataTypes.Text),
                                        FractionalDigits: t.DataConversion.JSNodeParamConverter.to(r.variables.transferToVar.fractionalDigitsAttr, t.DataTypes.DataTypes.Integer),
                                        BaseCurrency: t.DataConversion.JSNodeParamConverter.to(r.variables.activeWalletVar.currencyAttr, t.DataTypes.DataTypes.Text)
                                    }, function(f) {}, {
                                        ExchangeRates: N.clientActionProxies.exchangeRates$Action,
                                        AssignExchangeRate: e.clientActionProxies.assignExchangeRate$Action,
                                        AssignExchangeRateCountdownTimer: e.clientActionProxies.assignExchangeRateCountdownTimer$Action
                                    }, {})
                                } finally {
                                    u && u.end()
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
                    e = this.controller,
                    i = this.idService;
                return t.Logger.startActiveSpan("OnChangeInputTransferConvertedAmount", function(n) {
                    n && (n.setAttribute("code.function", "OnChangeInputTransferConvertedAmount"), n.setAttribute("outsystems.function.key", "4091bcf4-616b-4e2a-97da-d41d78267c7b"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnChangeInputTransferConvertedAmount"), a = e.callContext(a);
                        var u = new t.DataTypes.VariableHolder,
                            f = new t.DataTypes.VariableHolder,
                            d = new t.DataTypes.VariableHolder,
                            m = new t.DataTypes.VariableHolder,
                            C = new t.DataTypes.VariableHolder;
                        t.Logger.startActiveSpan("TriggerExchangeRate", function(s) {
                            s && (s.setAttribute("code.function", "TriggerExchangeRate"), s.setAttribute("outsystems.function.key", "c2655efd-cf4a-4b9f-8158-03890f271113"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(U, "TriggerExchangeRate", "OnChangeInputTransferConvertedAmount", {
                                    InputId: t.DataConversion.JSNodeParamConverter.to(i.getId("InputTransferExchangeAmount"), t.DataTypes.DataTypes.Text)
                                }, function(T) {}, {
                                    GetExchangeRate: e.clientActionProxies.getExchangeRate$Action
                                }, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1), d.value = t.Logger.startActiveSpan("CalculateTransferFromFees", function(s) {
                            s && (s.setAttribute("code.function", "CalculateTransferFromFees"), s.setAttribute("outsystems.function.key", "a85aacbc-1d23-46d9-9836-8b4e1c806bf8"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(j, "CalculateTransferFromFees", "OnChangeInputTransferConvertedAmount", {
                                    FractionalDigits: t.DataConversion.JSNodeParamConverter.to(r.variables.transferFromVar.fractionalDigitsAttr.toString(), t.DataTypes.DataTypes.Text),
                                    TransferAmount: t.DataConversion.JSNodeParamConverter.to(r.variables.transferAmountVar, t.DataTypes.DataTypes.Decimal),
                                    WebsiteStatus: t.DataConversion.JSNodeParamConverter.to(O.getRawWebsiteStatusResponse(), t.DataTypes.DataTypes.Text),
                                    WalletCurrency: t.DataConversion.JSNodeParamConverter.to(r.variables.activeWalletVar.currencyAttr, t.DataTypes.DataTypes.Text),
                                    TransferToCurrency: t.DataConversion.JSNodeParamConverter.to(r.variables.transferToVar.currencyAttr, t.DataTypes.DataTypes.Text),
                                    Fees: t.DataConversion.JSNodeParamConverter.to(t.DataTypes.Decimal.defaultValue, t.DataTypes.DataTypes.Decimal),
                                    FinalAmount: t.DataConversion.JSNodeParamConverter.to(t.DataTypes.Decimal.defaultValue, t.DataTypes.DataTypes.Decimal)
                                }, function(T) {
                                    var A = new(e.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnChangeInputTransferConvertedAmount$calculateTransferFromFeesJSResult"));
                                    return A.feesOut = t.DataConversion.JSNodeParamConverter.from(T.Fees, t.DataTypes.DataTypes.Decimal), A.finalAmountOut = t.DataConversion.JSNodeParamConverter.from(T.FinalAmount, t.DataTypes.DataTypes.Decimal), A
                                }, {}, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1), C.value = t.Logger.startActiveSpan("CalculateExchangeRateTransferFrom", function(s) {
                            s && (s.setAttribute("code.function", "CalculateExchangeRateTransferFrom"), s.setAttribute("outsystems.function.key", "b6261695-b8e4-41fc-b252-e662fb4f54f1"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(q, "CalculateExchangeRateTransferFrom", "OnChangeInputTransferConvertedAmount", {
                                    Rate: t.DataConversion.JSNodeParamConverter.to(r.variables.exchangeRateVar, t.DataTypes.DataTypes.Decimal),
                                    FractionalDigits: t.DataConversion.JSNodeParamConverter.to(r.variables.transferToVar.fractionalDigitsAttr, t.DataTypes.DataTypes.Integer),
                                    Amount: t.DataConversion.JSNodeParamConverter.to(d.value.finalAmountOut, t.DataTypes.DataTypes.Decimal),
                                    ConvertedAmount: t.DataConversion.JSNodeParamConverter.to(t.DataTypes.Decimal.defaultValue, t.DataTypes.DataTypes.Decimal)
                                }, function(T) {
                                    var A = new(e.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnChangeInputTransferConvertedAmount$calculateExchangeRateTransferFromJSResult"));
                                    return A.convertedAmountOut = t.DataConversion.JSNodeParamConverter.from(T.ConvertedAmount, t.DataTypes.DataTypes.Decimal), A
                                }, {}, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1), r.variables.transferFromConvertedAmountVar = C.value.convertedAmountOut, r.variables.finalAmountVar = d.value.finalAmountOut, r.variables.calculatedFeesVar = d.value.feesOut, r.variables.currencySwitcherVar === r.variables.activeWalletVar.currencyAttr ? r.variables.lifetimeFiatToCryptoVar.equals(t.BuiltinFunctions.integerToDecimal(0)) ? t.Logger.startActiveSpan("FiatToCryptoValidation", function(s) {
                            s && (s.setAttribute("code.function", "FiatToCryptoValidation"), s.setAttribute("outsystems.function.key", "6fd6f8ce-44e2-4304-98e9-ed7b708403cb"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(H, "FiatToCryptoValidation", "OnChangeInputTransferConvertedAmount", {
                                    FiatToCryptoLimit: t.DataConversion.JSNodeParamConverter.to(r.variables.lifetimeFiatToCryptoVar, t.DataTypes.DataTypes.Decimal),
                                    ConvertToCurrency: t.DataConversion.JSNodeParamConverter.to(r.variables.transferToVar.currencyAttr, t.DataTypes.DataTypes.Text),
                                    Rate: t.DataConversion.JSNodeParamConverter.to(r.variables.exchangeRateVar, t.DataTypes.DataTypes.Decimal),
                                    TransferToName: t.DataConversion.JSNodeParamConverter.to(r.variables.transferToVar.nameAttr, t.DataTypes.DataTypes.Text),
                                    TransferAmount: t.DataConversion.JSNodeParamConverter.to(r.variables.transferAmountVar, t.DataTypes.DataTypes.Decimal),
                                    WidgetId: t.DataConversion.JSNodeParamConverter.to(i.getId("InputTransferExchangeAmount"), t.DataTypes.DataTypes.Text),
                                    Currency: t.DataConversion.JSNodeParamConverter.to(r.variables.transferFromVar.currencyAttr, t.DataTypes.DataTypes.Text),
                                    WalletBalance: t.DataConversion.JSNodeParamConverter.to(t.BuiltinFunctions.decimalToText(r.variables.activeWalletVar.balanceAttr), t.DataTypes.DataTypes.Text)
                                }, function(T) {}, {
                                    FormatMoney: x.clientActionProxies.formatMoney$Action,
                                    YupValidate: V.clientActionProxies.yupValidate$Action
                                }, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1) : r.variables.transferToVar.isCryptoAttr ? t.Logger.startActiveSpan("CryptoToFiatValidation", function(s) {
                            s && (s.setAttribute("code.function", "CryptoToFiatValidation"), s.setAttribute("outsystems.function.key", "1226f57b-2645-40ac-b8e1-02a94ee6d682"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(W, "CryptoToFiatValidation", "OnChangeInputTransferConvertedAmount", {
                                    WalletBalance: t.DataConversion.JSNodeParamConverter.to(t.BuiltinFunctions.decimalToText(r.variables.activeWalletVar.balanceAttr), t.DataTypes.DataTypes.Text),
                                    FiatToCryptoLimit: t.DataConversion.JSNodeParamConverter.to(r.variables.lifetimeCryptoToCryptoVar, t.DataTypes.DataTypes.Decimal),
                                    MinTransfer: t.DataConversion.JSNodeParamConverter.to(r.variables.transferFromVar.minTransferAttr, t.DataTypes.DataTypes.Decimal),
                                    ConvertToCurrency: t.DataConversion.JSNodeParamConverter.to(r.variables.transferToVar.currencyAttr, t.DataTypes.DataTypes.Text),
                                    TransferToName: t.DataConversion.JSNodeParamConverter.to(r.variables.transferToVar.nameAttr, t.DataTypes.DataTypes.Text),
                                    Currency: t.DataConversion.JSNodeParamConverter.to(r.variables.transferFromVar.currencyAttr, t.DataTypes.DataTypes.Text),
                                    Rate: t.DataConversion.JSNodeParamConverter.to(r.variables.exchangeRateVar, t.DataTypes.DataTypes.Decimal),
                                    TransferFromName: t.DataConversion.JSNodeParamConverter.to(r.variables.transferFromVar.nameAttr, t.DataTypes.DataTypes.Text),
                                    WidgetId: t.DataConversion.JSNodeParamConverter.to(i.getId("InputTransferExchangeAmount"), t.DataTypes.DataTypes.Text),
                                    TransferAmount: t.DataConversion.JSNodeParamConverter.to(r.variables.transferAmountVar, t.DataTypes.DataTypes.Decimal)
                                }, function(T) {}, {
                                    FormatMoney: x.clientActionProxies.formatMoney$Action,
                                    YupValidate: V.clientActionProxies.yupValidate$Action
                                }, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1) : t.Logger.startActiveSpan("CryptoToCryptoValidation3", function(s) {
                            s && (s.setAttribute("code.function", "CryptoToCryptoValidation3"), s.setAttribute("outsystems.function.key", "40b4dd7b-7f12-49d6-a4af-af4f750e6d41"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(M, "CryptoToCryptoValidation3", "OnChangeInputTransferConvertedAmount", {
                                    WidgetId: t.DataConversion.JSNodeParamConverter.to(i.getId("InputTransferExchangeAmount"), t.DataTypes.DataTypes.Text),
                                    Rate: t.DataConversion.JSNodeParamConverter.to(r.variables.exchangeRateVar, t.DataTypes.DataTypes.Decimal),
                                    Currency: t.DataConversion.JSNodeParamConverter.to(r.variables.transferFromVar.currencyAttr, t.DataTypes.DataTypes.Text),
                                    TransferFromName: t.DataConversion.JSNodeParamConverter.to(r.variables.transferFromVar.nameAttr, t.DataTypes.DataTypes.Text),
                                    FiatToCryptoLimit: t.DataConversion.JSNodeParamConverter.to(r.variables.lifetimeCryptoToFiatVar, t.DataTypes.DataTypes.Decimal),
                                    ConvertToCurrency: t.DataConversion.JSNodeParamConverter.to(r.variables.transferToVar.currencyAttr, t.DataTypes.DataTypes.Text),
                                    WalletBalance: t.DataConversion.JSNodeParamConverter.to(t.BuiltinFunctions.decimalToText(r.variables.activeWalletVar.balanceAttr), t.DataTypes.DataTypes.Text),
                                    TransferToName: t.DataConversion.JSNodeParamConverter.to(r.variables.transferToVar.nameAttr, t.DataTypes.DataTypes.Text),
                                    TransferAmount: t.DataConversion.JSNodeParamConverter.to(r.variables.transferAmountVar, t.DataTypes.DataTypes.Decimal),
                                    MinTransfer: t.DataConversion.JSNodeParamConverter.to(r.variables.transferFromVar.minTransferAttr, t.DataTypes.DataTypes.Decimal)
                                }, function(T) {}, {
                                    FormatMoney: x.clientActionProxies.formatMoney$Action,
                                    YupValidate: V.clientActionProxies.yupValidate$Action
                                }, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1) : (u.value = t.Logger.startActiveSpan("ConvertTransferAmount", function(s) {
                            s && (s.setAttribute("code.function", "ConvertTransferAmount"), s.setAttribute("outsystems.function.key", "1364e9bc-f83d-4755-86d6-abdd85e15ea3"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode($, "ConvertTransferAmount", "OnChangeInputTransferConvertedAmount", {
                                    Rate: t.DataConversion.JSNodeParamConverter.to(r.variables.exchangeRateVar, t.DataTypes.DataTypes.Decimal),
                                    InputId: t.DataConversion.JSNodeParamConverter.to(i.getId("InputTransferExchangeAmount"), t.DataTypes.DataTypes.Text),
                                    FractionalDigits: t.DataConversion.JSNodeParamConverter.to(r.variables.transferFromVar.fractionalDigitsAttr, t.DataTypes.DataTypes.Integer),
                                    ConvertedTransferAmount: t.DataConversion.JSNodeParamConverter.to(t.DataTypes.Decimal.defaultValue, t.DataTypes.DataTypes.Decimal)
                                }, function(T) {
                                    var A = new(e.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnChangeInputTransferConvertedAmount$convertTransferAmountJSResult"));
                                    return A.convertedTransferAmountOut = t.DataConversion.JSNodeParamConverter.from(T.ConvertedTransferAmount, t.DataTypes.DataTypes.Decimal), A
                                }, {}, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1), m.value = t.Logger.startActiveSpan("CalculateConvertedTransferFromFees", function(s) {
                            s && (s.setAttribute("code.function", "CalculateConvertedTransferFromFees"), s.setAttribute("outsystems.function.key", "b1b92a9e-c9d6-4ef0-a976-e7a4364e9f29"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(z, "CalculateConvertedTransferFromFees", "OnChangeInputTransferConvertedAmount", {
                                    TransferAmount: t.DataConversion.JSNodeParamConverter.to(u.value.convertedTransferAmountOut, t.DataTypes.DataTypes.Decimal),
                                    WebsiteStatus: t.DataConversion.JSNodeParamConverter.to(O.getRawWebsiteStatusResponse(), t.DataTypes.DataTypes.Text),
                                    FractionalDigits: t.DataConversion.JSNodeParamConverter.to(r.variables.transferFromVar.fractionalDigitsAttr.toString(), t.DataTypes.DataTypes.Text),
                                    WalletCurrency: t.DataConversion.JSNodeParamConverter.to(r.variables.activeWalletVar.currencyAttr, t.DataTypes.DataTypes.Text),
                                    TransferToCurrency: t.DataConversion.JSNodeParamConverter.to(r.variables.transferToVar.currencyAttr, t.DataTypes.DataTypes.Text),
                                    Fees: t.DataConversion.JSNodeParamConverter.to(t.DataTypes.Decimal.defaultValue, t.DataTypes.DataTypes.Decimal),
                                    FinalAmount: t.DataConversion.JSNodeParamConverter.to(t.DataTypes.Decimal.defaultValue, t.DataTypes.DataTypes.Decimal)
                                }, function(T) {
                                    var A = new(e.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnChangeInputTransferConvertedAmount$calculateConvertedTransferFromFeesJSResult"));
                                    return A.feesOut = t.DataConversion.JSNodeParamConverter.from(T.Fees, t.DataTypes.DataTypes.Decimal), A.finalAmountOut = t.DataConversion.JSNodeParamConverter.from(T.FinalAmount, t.DataTypes.DataTypes.Decimal), A
                                }, {}, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1), f.value = t.Logger.startActiveSpan("CalculateExchangeRateTransferTo", function(s) {
                            s && (s.setAttribute("code.function", "CalculateExchangeRateTransferTo"), s.setAttribute("outsystems.function.key", "89c9d7fd-074f-400e-a33a-65d5448153b0"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(G, "CalculateExchangeRateTransferTo", "OnChangeInputTransferConvertedAmount", {
                                    Rate: t.DataConversion.JSNodeParamConverter.to(r.variables.exchangeRateVar, t.DataTypes.DataTypes.Decimal),
                                    Amount: t.DataConversion.JSNodeParamConverter.to(m.value.finalAmountOut, t.DataTypes.DataTypes.Decimal),
                                    FractionalDigits: t.DataConversion.JSNodeParamConverter.to(r.variables.transferToVar.fractionalDigitsAttr, t.DataTypes.DataTypes.Integer),
                                    ConvertedAmount: t.DataConversion.JSNodeParamConverter.to(t.DataTypes.Decimal.defaultValue, t.DataTypes.DataTypes.Decimal)
                                }, function(T) {
                                    var A = new(e.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnChangeInputTransferConvertedAmount$calculateExchangeRateTransferToJSResult"));
                                    return A.convertedAmountOut = t.DataConversion.JSNodeParamConverter.from(T.ConvertedAmount, t.DataTypes.DataTypes.Decimal), A
                                }, {}, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1), r.variables.convertedTransferAmountVar = u.value.convertedTransferAmountOut, r.variables.convertedCalculatedFeesVar = m.value.feesOut, r.variables.convertedFinalAmountVar = m.value.finalAmountOut, r.variables.transferToConvertedAmountVar = f.value.convertedAmountOut, r.variables.lifetimeFiatToCryptoVar.equals(t.BuiltinFunctions.integerToDecimal(0)) ? r.variables.transferToVar.isCryptoAttr ? t.Logger.startActiveSpan("CryptoToCrypto", function(s) {
                            s && (s.setAttribute("code.function", "CryptoToCrypto"), s.setAttribute("outsystems.function.key", "b1f4f6ca-20eb-4724-a4a3-927907432c1e"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(Y, "CryptoToCrypto", "OnChangeInputTransferConvertedAmount", {
                                    TransferFromCurrency: t.DataConversion.JSNodeParamConverter.to(r.variables.transferFromVar.currencyAttr, t.DataTypes.DataTypes.Text),
                                    WalletBalance: t.DataConversion.JSNodeParamConverter.to(t.BuiltinFunctions.decimalToText(r.variables.activeWalletVar.balanceAttr), t.DataTypes.DataTypes.Text),
                                    Rate: t.DataConversion.JSNodeParamConverter.to(r.variables.exchangeRateVar, t.DataTypes.DataTypes.Decimal),
                                    WidgetId: t.DataConversion.JSNodeParamConverter.to(i.getId("InputTransferExchangeAmount"), t.DataTypes.DataTypes.Text),
                                    Currency: t.DataConversion.JSNodeParamConverter.to(r.variables.transferToVar.currencyAttr, t.DataTypes.DataTypes.Text),
                                    CryptoToCryptoLimit: t.DataConversion.JSNodeParamConverter.to(r.variables.lifetimeCryptoToCryptoVar, t.DataTypes.DataTypes.Decimal),
                                    TransferAmount: t.DataConversion.JSNodeParamConverter.to(r.variables.transferAmountVar, t.DataTypes.DataTypes.Decimal)
                                }, function(T) {}, {
                                    FormatMoney: x.clientActionProxies.formatMoney$Action,
                                    YupValidate: V.clientActionProxies.yupValidate$Action
                                }, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1) : t.Logger.startActiveSpan("CryptotoFiatValidation2", function(s) {
                            s && (s.setAttribute("code.function", "CryptotoFiatValidation2"), s.setAttribute("outsystems.function.key", "d4e60826-a60f-4252-8bd2-0a0d21eefabc"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(Q, "CryptotoFiatValidation2", "OnChangeInputTransferConvertedAmount", {
                                    CryptotoFiatLimit: t.DataConversion.JSNodeParamConverter.to(r.variables.lifetimeCryptoToFiatVar, t.DataTypes.DataTypes.Decimal),
                                    Currency: t.DataConversion.JSNodeParamConverter.to(r.variables.transferToVar.currencyAttr, t.DataTypes.DataTypes.Text),
                                    WalletBalance: t.DataConversion.JSNodeParamConverter.to(t.BuiltinFunctions.decimalToText(r.variables.activeWalletVar.balanceAttr), t.DataTypes.DataTypes.Text),
                                    Rate: t.DataConversion.JSNodeParamConverter.to(r.variables.exchangeRateVar, t.DataTypes.DataTypes.Decimal),
                                    TransferAmount: t.DataConversion.JSNodeParamConverter.to(r.variables.transferAmountVar, t.DataTypes.DataTypes.Decimal),
                                    WidgetId: t.DataConversion.JSNodeParamConverter.to(i.getId("InputTransferExchangeAmount"), t.DataTypes.DataTypes.Text),
                                    TransferFromCurrency: t.DataConversion.JSNodeParamConverter.to(r.variables.transferFromVar.currencyAttr, t.DataTypes.DataTypes.Text)
                                }, function(T) {}, {
                                    FormatMoney: x.clientActionProxies.formatMoney$Action,
                                    YupValidate: V.clientActionProxies.yupValidate$Action
                                }, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1) : t.Logger.startActiveSpan("FiatToCryptoValidation2", function(s) {
                            s && (s.setAttribute("code.function", "FiatToCryptoValidation2"), s.setAttribute("outsystems.function.key", "53727bcc-cb8e-4922-afbe-c3cf8d299714"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(B, "FiatToCryptoValidation2", "OnChangeInputTransferConvertedAmount", {
                                    fiatToCryptoLimit: t.DataConversion.JSNodeParamConverter.to(r.variables.lifetimeFiatToCryptoVar, t.DataTypes.DataTypes.Decimal),
                                    TransferAmount: t.DataConversion.JSNodeParamConverter.to(r.variables.transferAmountVar, t.DataTypes.DataTypes.Decimal),
                                    TransferFromCurrency: t.DataConversion.JSNodeParamConverter.to(r.variables.transferFromVar.currencyAttr, t.DataTypes.DataTypes.Text),
                                    WidgetId: t.DataConversion.JSNodeParamConverter.to(i.getId("InputTransferExchangeAmount"), t.DataTypes.DataTypes.Text),
                                    WalletBalance: t.DataConversion.JSNodeParamConverter.to(t.BuiltinFunctions.decimalToText(r.variables.activeWalletVar.balanceAttr), t.DataTypes.DataTypes.Text),
                                    Rate: t.DataConversion.JSNodeParamConverter.to(r.variables.exchangeRateVar, t.DataTypes.DataTypes.Decimal),
                                    Currency: t.DataConversion.JSNodeParamConverter.to(r.variables.transferToVar.currencyAttr, t.DataTypes.DataTypes.Text)
                                }, function(T) {}, {
                                    FormatMoney: x.clientActionProxies.formatMoney$Action,
                                    YupValidate: V.clientActionProxies.yupValidate$Action
                                }, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1))
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onChangeInputTransferConvertedAmount$Action
        }
        set _onChangeInputTransferConvertedAmount$Action(a) {
            this.__onChangeInputTransferConvertedAmount$Action = a
        }
        get _makeNewTransferOnClick$Action() {
            return this.hasOwnProperty("__makeNewTransferOnClick$Action") || (this.__makeNewTransferOnClick$Action = function(a) {
                var r = this.model,
                    e = this.controller,
                    i = this.idService;
                return t.Logger.startActiveSpan("MakeNewTransferOnClick", function(n) {
                    n && (n.setAttribute("code.function", "MakeNewTransferOnClick"), n.setAttribute("outsystems.function.key", "4444cb2f-b4a4-41aa-8a89-6bc5e8704d05"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("MakeNewTransferOnClick"), a = e.callContext(a), r.variables.transferAmountVar = t.BuiltinFunctions.integerToDecimal(0), r.variables.isTransferSuccessVar = !1
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__makeNewTransferOnClick$Action
        }
        set _makeNewTransferOnClick$Action(a) {
            this.__makeNewTransferOnClick$Action = a
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(a) {
                var r = this.model,
                    e = this.controller,
                    i = this.idService;
                return t.Logger.startActiveSpan("OnReady", function(n) {
                    return n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "70f9f4ed-810e-4e4b-894a-c51d6f293604"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        e.ensureControllerAlive("OnReady"), a = e.callContext(a);
                        var u = new t.DataTypes.VariableHolder,
                            f = new t.DataTypes.VariableHolder,
                            d = new t.DataTypes.VariableHolder,
                            m = new t.DataTypes.VariableHolder,
                            C = new t.DataTypes.VariableHolder,
                            s = new t.DataTypes.VariableHolder,
                            T = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(R))),
                            A = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(t.DataTypes.TextList))),
                            p = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(R))),
                            h = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(k))),
                            v = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(L)));
                        return t.Flow.executeAsyncFlow(function() {
                            return h.value.dataOut = t.JSONUtils.deserializeFromJSON(O.getActiveWallet(), k, !1), r.variables.activeWalletVar = h.value.dataOut, r.variables.isLoadingVar = !0, m.value = t.Logger.startActiveSpan("TransferBetweenAccountsPayload", function(l) {
                                l && (l.setAttribute("code.function", "TransferBetweenAccountsPayload"), l.setAttribute("outsystems.function.key", "20f4e938-8bf2-4049-a61e-74af0dbb4518"), l.setAttribute("outsystems.function.owner.name", "tradershub"), l.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), l.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return e.safeExecuteJSNode(X, "TransferBetweenAccountsPayload", "OnReady", {
                                        LoginId: t.DataConversion.JSNodeParamConverter.to(O.getActiveWalletLoginId(), t.DataTypes.DataTypes.Text),
                                        Payload: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                                    }, function(D) {
                                        var g = new(e.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnReady$transferBetweenAccountsPayloadJSResult"));
                                        return g.payloadOut = t.DataConversion.JSNodeParamConverter.from(D.Payload, t.DataTypes.DataTypes.Text), g
                                    }, {}, {})
                                } finally {
                                    l && l.end()
                                }
                            }, 1), r.flush(), N.derivApiSendMessage$Action(m.value.payloadOut, "transfer_between_accounts", !1, a).then(function(l) {
                                f.value = l
                            }).then(function() {
                                return t.Flow.executeSequence(function() {
                                    if (f.value.isErrorOut) t.FeedbackMessageService.showFeedbackMessage(f.value.errorMessageOut, 3), r.variables.isLoadingVar = !1;
                                    else return C.value = t.Logger.startActiveSpan("CheckHasTransferAccountsWithFunds", function(l) {
                                        l && (l.setAttribute("code.function", "CheckHasTransferAccountsWithFunds"), l.setAttribute("outsystems.function.key", "dcb0bfd1-d6f5-42d0-9807-97480e7a50b4"), l.setAttribute("outsystems.function.owner.name", "tradershub"), l.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), l.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                        try {
                                            return e.safeExecuteJSNode(Z, "CheckHasTransferAccountsWithFunds", "OnReady", {
                                                AccountsList: t.DataConversion.JSNodeParamConverter.to(f.value.responseOut, t.DataTypes.DataTypes.Text),
                                                hasTransferAccountsWithFunds: t.DataConversion.JSNodeParamConverter.to(!1, t.DataTypes.DataTypes.Boolean)
                                            }, function(D) {
                                                var g = new(e.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnReady$checkHasTransferAccountsWithFundsJSResult"));
                                                return g.hasTransferAccountsWithFundsOut = t.DataConversion.JSNodeParamConverter.from(D.hasTransferAccountsWithFunds, t.DataTypes.DataTypes.Boolean), g
                                            }, {}, {})
                                        } finally {
                                            l && l.end()
                                        }
                                    }, 1), t.Flow.executeSequence(function() {
                                        if (C.value.hasTransferAccountsWithFundsOut) return v.value.dataOut = t.JSONUtils.deserializeFromJSON(f.value.responseOut, L, !1), t.Flow.executeSequence(function() {
                                            if (v.value.dataOut.accountsAttr.isEmpty) r.variables.hasNoAccountsVar = !0;
                                            else return s.value = t.Logger.startActiveSpan("LimitPayload", function(l) {
                                                l && (l.setAttribute("code.function", "LimitPayload"), l.setAttribute("outsystems.function.key", "f6e15c87-b94e-4834-b17d-1bfaffc5f0d7"), l.setAttribute("outsystems.function.owner.name", "tradershub"), l.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), l.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                                try {
                                                    return e.safeExecuteJSNode(tt, "LimitPayload", "OnReady", {
                                                        LoginId: t.DataConversion.JSNodeParamConverter.to(O.getActiveWalletLoginId(), t.DataTypes.DataTypes.Text),
                                                        Payload: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                                                    }, function(D) {
                                                        var g = new(e.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnReady$limitPayloadJSResult"));
                                                        return g.payloadOut = t.DataConversion.JSNodeParamConverter.from(D.Payload, t.DataTypes.DataTypes.Text), g
                                                    }, {}, {})
                                                } finally {
                                                    l && l.end()
                                                }
                                            }, 1), r.flush(), N.derivApiSendMessage$Action(s.value.payloadOut, "get_limits", !1, a).then(function(l) {
                                                u.value = l
                                            }).then(function() {
                                                u.value.isErrorOut ? (t.FeedbackMessageService.showFeedbackMessage(f.value.errorMessageOut, 3), r.variables.isLoadingVar = !1) : (d.value = t.Logger.startActiveSpan("GetAccountList", function(l) {
                                                    l && (l.setAttribute("code.function", "GetAccountList"), l.setAttribute("outsystems.function.key", "0730617c-32fb-4a6e-9f87-e4739048c743"), l.setAttribute("outsystems.function.owner.name", "tradershub"), l.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), l.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                                    try {
                                                        return e.safeExecuteJSNode(K, "GetAccountList", "OnReady", {
                                                            Accounts: t.DataConversion.JSNodeParamConverter.to(f.value.responseOut, t.DataTypes.DataTypes.Text),
                                                            AccountType: t.DataConversion.JSNodeParamConverter.to(O.getAccountType(), t.DataTypes.DataTypes.Text),
                                                            ActiveWallet: t.DataConversion.JSNodeParamConverter.to(O.getActiveWallet(), t.DataTypes.DataTypes.Text),
                                                            WebsiteStatus: t.DataConversion.JSNodeParamConverter.to(O.getRawWebsiteStatusResponse(), t.DataTypes.DataTypes.Text),
                                                            GetLimit: t.DataConversion.JSNodeParamConverter.to(u.value.responseOut, t.DataTypes.DataTypes.Text),
                                                            WalletAccounts: t.DataConversion.JSNodeParamConverter.to(O.getWalletList(), t.DataTypes.DataTypes.Text),
                                                            TransferAccountList: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text),
                                                            TransferAccountKeys: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text),
                                                            TransferFromAccountList: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text),
                                                            LifeTimeFiatToCrypto: t.DataConversion.JSNodeParamConverter.to(t.DataTypes.Decimal.defaultValue, t.DataTypes.DataTypes.Decimal),
                                                            LifeTimeCryptoToCrypto: t.DataConversion.JSNodeParamConverter.to(t.DataTypes.Decimal.defaultValue, t.DataTypes.DataTypes.Decimal),
                                                            LifeTimeCryptoToFiat: t.DataConversion.JSNodeParamConverter.to(t.DataTypes.Decimal.defaultValue, t.DataTypes.DataTypes.Decimal),
                                                            DailyCumulativeAmountTransfers: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text),
                                                            DailyTransfers: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                                                        }, function(D) {
                                                            var g = new(e.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnReady$getAccountListJSResult"));
                                                            return g.transferAccountListOut = t.DataConversion.JSNodeParamConverter.from(D.TransferAccountList, t.DataTypes.DataTypes.Text), g.transferAccountKeysOut = t.DataConversion.JSNodeParamConverter.from(D.TransferAccountKeys, t.DataTypes.DataTypes.Text), g.transferFromAccountListOut = t.DataConversion.JSNodeParamConverter.from(D.TransferFromAccountList, t.DataTypes.DataTypes.Text), g.lifeTimeFiatToCryptoOut = t.DataConversion.JSNodeParamConverter.from(D.LifeTimeFiatToCrypto, t.DataTypes.DataTypes.Decimal), g.lifeTimeCryptoToCryptoOut = t.DataConversion.JSNodeParamConverter.from(D.LifeTimeCryptoToCrypto, t.DataTypes.DataTypes.Decimal), g.lifeTimeCryptoToFiatOut = t.DataConversion.JSNodeParamConverter.from(D.LifeTimeCryptoToFiat, t.DataTypes.DataTypes.Decimal), g.dailyCumulativeAmountTransfersOut = t.DataConversion.JSNodeParamConverter.from(D.DailyCumulativeAmountTransfers, t.DataTypes.DataTypes.Text), g.dailyTransfersOut = t.DataConversion.JSNodeParamConverter.from(D.DailyTransfers, t.DataTypes.DataTypes.Text), g
                                                        }, {
                                                            GetIcon: N.clientActionProxies.getIcon$Action
                                                        }, {})
                                                    } finally {
                                                        l && l.end()
                                                    }
                                                }, 1), A.value.dataOut = t.JSONUtils.deserializeFromJSON(d.value.transferAccountKeysOut, t.DataTypes.TextList, !1), p.value.dataOut = t.JSONUtils.deserializeFromJSON(d.value.transferAccountListOut, R, !1), T.value.dataOut = t.JSONUtils.deserializeFromJSON(d.value.transferFromAccountListOut, R, !1), r.variables.transferAccountListVar = p.value.dataOut, r.variables.transferAccountKeyVar = A.value.dataOut, r.variables.transferFromAccountListVar = T.value.dataOut, r.variables.dailyCumulativeAmountTransfersVar = d.value.dailyCumulativeAmountTransfersOut, r.variables.dailyTransfersVar = d.value.dailyTransfersOut, r.variables.lifetimeFiatToCryptoVar = d.value.lifeTimeFiatToCryptoOut, r.variables.lifetimeCryptoToFiatVar = d.value.lifeTimeCryptoToFiatOut, r.variables.lifetimeCryptoToCryptoVar = d.value.lifeTimeCryptoToCryptoOut, r.variables.isLoadingVar = !1)
                                            })
                                        });
                                        r.variables.hasNoFundsVar = !0
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
        get _buttonOnClick$Action() {
            return this.hasOwnProperty("__buttonOnClick$Action") || (this.__buttonOnClick$Action = function(a) {
                var r = this.model,
                    e = this.controller,
                    i = this.idService;
                return t.Logger.startActiveSpan("ButtonOnClick", function(n) {
                    n && (n.setAttribute("code.function", "ButtonOnClick"), n.setAttribute("outsystems.function.key", "74dc469c-175f-434b-bf6f-c02126e81fe5"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return e.ensureControllerAlive("ButtonOnClick"), a = e.callContext(a), r.variables.activeWalletVar.isCrpytoAttr ? t.Navigation.navigateTo(t.Navigation.generateScreenURL("tradershub", "wallets/deposit/crypto", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), a, !0) : t.Navigation.navigateTo(t.Navigation.generateScreenURL("tradershub", "wallets/deposit/fiat", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), a, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__buttonOnClick$Action
        }
        set _buttonOnClick$Action(a) {
            this.__buttonOnClick$Action = a
        }
        get _onCloseTransferToModal$Action() {
            return this.hasOwnProperty("__onCloseTransferToModal$Action") || (this.__onCloseTransferToModal$Action = function(a) {
                var r = this.model,
                    e = this.controller,
                    i = this.idService;
                return t.Logger.startActiveSpan("OnCloseTransferToModal", function(n) {
                    n && (n.setAttribute("code.function", "OnCloseTransferToModal"), n.setAttribute("outsystems.function.key", "95b31faf-4323-4311-8b03-2054d3f979a1"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnCloseTransferToModal"), a = e.callContext(a), r.variables.isTransferToOpenVar = !1
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
                    e = this.controller,
                    i = this.idService;
                return t.Logger.startActiveSpan("ExchangeRateSwitcherOnChange", function(n) {
                    n && (n.setAttribute("code.function", "ExchangeRateSwitcherOnChange"), n.setAttribute("outsystems.function.key", "99831c2e-6286-4e9f-a59b-74a3b90d4f1a"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("ExchangeRateSwitcherOnChange"), a = e.callContext(a), r.variables.transferAmountVar = t.BuiltinFunctions.integerToDecimal(0), r.variables.transferFromConvertedAmountVar = t.BuiltinFunctions.integerToDecimal(0), r.widgets.get(i.getId("InputTransferExchangeAmount")).validAttr = !0, r.widgets.get(i.getId("InputTransferExchangeAmount")).validationMessageAttr = t.BuiltinFunctions.nullTextIdentifier()
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
                    e = this.controller,
                    i = this.idService;
                return t.Logger.startActiveSpan("OnDestroy", function(n) {
                    n && (n.setAttribute("code.function", "OnDestroy"), n.setAttribute("outsystems.function.key", "a3d37f05-250a-4c86-b236-6d713cf401f0"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnDestroy"), a = e.callContext(a), t.Logger.startActiveSpan("JSDisposeTimerExchangeRate", function(u) {
                            u && (u.setAttribute("code.function", "JSDisposeTimerExchangeRate"), u.setAttribute("outsystems.function.key", "6087b362-6d11-44bb-8104-90e978fa349a"), u.setAttribute("outsystems.function.owner.name", "tradershub"), u.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), u.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(et, "JSDisposeTimerExchangeRate", "OnDestroy", null, function(f) {}, {}, {})
                            } finally {
                                u && u.end()
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
                var e = this.model,
                    i = this.controller,
                    n = this.idService;
                return t.Logger.startActiveSpan("OnClickTransferToAccount", function(u) {
                    u && (u.setAttribute("code.function", "OnClickTransferToAccount"), u.setAttribute("outsystems.function.key", "b2292fd3-5c28-4f25-8cc7-81ba6503e2dc"), u.setAttribute("outsystems.function.owner.name", "tradershub"), u.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("OnClickTransferToAccount"), r = i.callContext(r);
                        var f = new t.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnClickTransferToAccount$vars")));
                        f.value.accountDetailsInLocal = a.clone(), e.widgets.get(n.getId("InputTransferExchangeAmount")).validAttr = !0, e.widgets.get(n.getId("InputTransferExchangeAmount")).validationMessageAttr = t.BuiltinFunctions.nullTextIdentifier(), e.variables.transferFromConvertedAmountVar = t.BuiltinFunctions.integerToDecimal(0), e.variables.transferAmountVar = t.BuiltinFunctions.integerToDecimal(0), e.variables.convertedTransferAmountVar = t.BuiltinFunctions.integerToDecimal(0), e.variables.convertedCalculatedFeesVar = t.BuiltinFunctions.integerToDecimal(0), e.variables.transferToConvertedAmountVar = t.BuiltinFunctions.integerToDecimal(0), e.variables.transferToVar = f.value.accountDetailsInLocal, e.variables.isTransferToOpenVar = !1, e.variables.transferFromVar.accountCategoryAttr === "Wallets" && e.variables.transferToVar.accountCategoryAttr === "Wallets" ? (e.variables.showCurrencySwitcherVar = !0, e.variables.currencySwitcherVar = e.variables.activeWalletVar.currencyAttr) : e.variables.showCurrencySwitcherVar = !1
                    } finally {
                        u && u.end()
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
                    e = this.controller,
                    i = this.idService;
                return t.Logger.startActiveSpan("OnChangeInputTransferAmount", function(n) {
                    n && (n.setAttribute("code.function", "OnChangeInputTransferAmount"), n.setAttribute("outsystems.function.key", "b5c5135a-0d69-44c8-afe1-91666e8ca7ec"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnChangeInputTransferAmount"), a = e.callContext(a), t.Logger.startActiveSpan("AmountValidation", function(u) {
                            u && (u.setAttribute("code.function", "AmountValidation"), u.setAttribute("outsystems.function.key", "424ec2b6-92e9-42d1-9709-64bcf7f3adb6"), u.setAttribute("outsystems.function.owner.name", "tradershub"), u.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), u.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(rt, "AmountValidation", "OnChangeInputTransferAmount", {
                                    IsCrypto: t.DataConversion.JSNodeParamConverter.to(r.variables.transferFromVar.isCryptoAttr, t.DataTypes.DataTypes.Boolean),
                                    DailyCumulativeAmountTransfers: t.DataConversion.JSNodeParamConverter.to(r.variables.dailyCumulativeAmountTransfersVar, t.DataTypes.DataTypes.Text),
                                    Rate: t.DataConversion.JSNodeParamConverter.to(r.variables.exchangeRateVar, t.DataTypes.DataTypes.Decimal),
                                    TransferAmount: t.DataConversion.JSNodeParamConverter.to(r.variables.transferAmountVar, t.DataTypes.DataTypes.Decimal),
                                    WidgetId: t.DataConversion.JSNodeParamConverter.to(i.getId("InputTransferAmount"), t.DataTypes.DataTypes.Text),
                                    TransferToName: t.DataConversion.JSNodeParamConverter.to(r.variables.transferToVar.nameAttr, t.DataTypes.DataTypes.Text),
                                    Currency: t.DataConversion.JSNodeParamConverter.to(r.variables.transferFromVar.currencyAttr, t.DataTypes.DataTypes.Text),
                                    WalletBalance: t.DataConversion.JSNodeParamConverter.to(t.BuiltinFunctions.decimalToText(r.variables.activeWalletVar.balanceAttr), t.DataTypes.DataTypes.Text),
                                    OptionsTransferLimit: t.DataConversion.JSNodeParamConverter.to(r.variables.optionTransferDailyLimitVar, t.DataTypes.DataTypes.Text),
                                    MinTransfer: t.DataConversion.JSNodeParamConverter.to(r.variables.transferFromVar.minTransferAttr, t.DataTypes.DataTypes.Decimal),
                                    TransferFromName: t.DataConversion.JSNodeParamConverter.to(r.variables.transferFromVar.nameAttr, t.DataTypes.DataTypes.Text)
                                }, function(f) {}, {
                                    FormatMoney: x.clientActionProxies.formatMoney$Action,
                                    YupValidate: V.clientActionProxies.yupValidate$Action
                                }, {})
                            } finally {
                                u && u.end()
                            }
                        }, 1)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onChangeInputTransferAmount$Action
        }
        set _onChangeInputTransferAmount$Action(a) {
            this.__onChangeInputTransferAmount$Action = a
        }
        get _onClickTransferFromAccount$Action() {
            return this.hasOwnProperty("__onClickTransferFromAccount$Action") || (this.__onClickTransferFromAccount$Action = function(a, r) {
                var e = this.model,
                    i = this.controller,
                    n = this.idService;
                return t.Logger.startActiveSpan("OnClickTransferFromAccount", function(u) {
                    u && (u.setAttribute("code.function", "OnClickTransferFromAccount"), u.setAttribute("outsystems.function.key", "c79debf3-1bc1-417d-992e-f5e173a379b9"), u.setAttribute("outsystems.function.owner.name", "tradershub"), u.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("OnClickTransferFromAccount"), r = i.callContext(r);
                        var f = new t.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnClickTransferFromAccount$vars")));
                        f.value.accountDetailsInLocal = a.clone();
                        var d = new t.DataTypes.VariableHolder,
                            m = new t.DataTypes.VariableHolder;
                        e.widgets.get(n.getId("InputTransferExchangeAmount")).validAttr = !0, e.widgets.get(n.getId("InputTransferExchangeAmount")).validationMessageAttr = t.BuiltinFunctions.nullTextIdentifier(), e.variables.transferFromConvertedAmountVar = t.BuiltinFunctions.integerToDecimal(0), e.variables.transferAmountVar = t.BuiltinFunctions.integerToDecimal(0), e.variables.convertedTransferAmountVar = t.BuiltinFunctions.integerToDecimal(0), e.variables.convertedCalculatedFeesVar = t.BuiltinFunctions.integerToDecimal(0), e.variables.transferToConvertedAmountVar = t.BuiltinFunctions.integerToDecimal(0), e.variables.transferFromVar = f.value.accountDetailsInLocal, e.variables.isTransferFromOpenVar = !1, e.variables.transferFromVar.accountCategoryAttr === "Wallets" ? (m.value = t.SystemActions.listFilter(e.variables.transferAccountListVar, function(C) {
                            return f.value.accountDetailsInLocal.iconAttr !== C.iconAttr
                        }, r), e.variables.transferAccountListVar = m.value.filteredListOut) : (d.value = t.SystemActions.listFilter(e.variables.transferFromAccountListVar, function(C) {
                            return f.value.accountDetailsInLocal.iconAttr !== C.iconAttr
                        }, r), e.variables.transferAccountListVar = d.value.filteredListOut)
                    } finally {
                        u && u.end()
                    }
                }, 1)
            }), this.__onClickTransferFromAccount$Action
        }
        set _onClickTransferFromAccount$Action(a) {
            this.__onClickTransferFromAccount$Action = a
        }
        get _toListItemOnClick$Action() {
            return this.hasOwnProperty("__toListItemOnClick$Action") || (this.__toListItemOnClick$Action = function(a) {
                var r = this.model,
                    e = this.controller,
                    i = this.idService;
                return t.Logger.startActiveSpan("ToListItemOnClick", function(n) {
                    n && (n.setAttribute("code.function", "ToListItemOnClick"), n.setAttribute("outsystems.function.key", "ddf474bb-0962-4083-b91f-a69df7b29c40"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("ToListItemOnClick"), a = e.callContext(a), r.variables.isTransferToOpenVar = !0
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__toListItemOnClick$Action
        }
        set _toListItemOnClick$Action(a) {
            this.__toListItemOnClick$Action = a
        }
        get _fromListItemOnClick$Action() {
            return this.hasOwnProperty("__fromListItemOnClick$Action") || (this.__fromListItemOnClick$Action = function(a) {
                var r = this.model,
                    e = this.controller,
                    i = this.idService;
                return t.Logger.startActiveSpan("FromListItemOnClick", function(n) {
                    n && (n.setAttribute("code.function", "FromListItemOnClick"), n.setAttribute("outsystems.function.key", "fd32479f-d94c-4bd6-9abc-a3dde691faac"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("FromListItemOnClick"), a = e.callContext(a), r.variables.isTransferFromOpenVar = !0
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__fromListItemOnClick$Action
        }
        set _fromListItemOnClick$Action(a) {
            this.__fromListItemOnClick$Action = a
        }
        onCloseTransferFromModal$Action(a) {
            var r = this.controller;
            return t.Logger.startActiveSpan("OnCloseTransferFromModal__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnCloseTransferFromModal"), e.setAttribute("outsystems.function.key", "025247b5-342a-441e-8f2e-30a7405e4d8e"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onCloseTransferFromModal$Action, a)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        assignExchangeRate$Action(a, r) {
            var e = this.controller;
            return t.Logger.startActiveSpan("AssignExchangeRate__proxy", function(i) {
                i && (i.setAttribute("code.function", "AssignExchangeRate"), i.setAttribute("outsystems.function.key", "03211425-510d-4afc-9504-a67819619295"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._assignExchangeRate$Action, r, a)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        assignExchangeRateCountdownTimer$Action(a, r) {
            var e = this.controller;
            return t.Logger.startActiveSpan("AssignExchangeRateCountdownTimer__proxy", function(i) {
                i && (i.setAttribute("code.function", "AssignExchangeRateCountdownTimer"), i.setAttribute("outsystems.function.key", "16179031-707c-45a4-8f64-4bd3edf8e1dd"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._assignExchangeRateCountdownTimer$Action, r, a)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        transferOnClick$Action(a) {
            var r = this.controller;
            return t.Logger.startActiveSpan("TransferOnClick__proxy", function(e) {
                return e && (e.setAttribute("code.function", "TransferOnClick"), e.setAttribute("outsystems.function.key", "180ff7b9-fec8-4133-bfeb-e67400f33ff5"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._transferOnClick$Action, a)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        getExchangeRate$Action(a) {
            var r = this.controller;
            return t.Logger.startActiveSpan("GetExchangeRate__proxy", function(e) {
                return e && (e.setAttribute("code.function", "GetExchangeRate"), e.setAttribute("outsystems.function.key", "1efd211c-94d4-43c0-a293-fa6fe524745f"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._getExchangeRate$Action, a)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        onChangeInputTransferConvertedAmount$Action(a) {
            var r = this.controller;
            return t.Logger.startActiveSpan("OnChangeInputTransferConvertedAmount__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnChangeInputTransferConvertedAmount"), e.setAttribute("outsystems.function.key", "4091bcf4-616b-4e2a-97da-d41d78267c7b"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onChangeInputTransferConvertedAmount$Action, a)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        makeNewTransferOnClick$Action(a) {
            var r = this.controller;
            return t.Logger.startActiveSpan("MakeNewTransferOnClick__proxy", function(e) {
                e && (e.setAttribute("code.function", "MakeNewTransferOnClick"), e.setAttribute("outsystems.function.key", "4444cb2f-b4a4-41aa-8a89-6bc5e8704d05"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._makeNewTransferOnClick$Action, a)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onReady$Action(a) {
            var r = this.controller;
            return t.Logger.startActiveSpan("OnReady__proxy", function(e) {
                return e && (e.setAttribute("code.function", "OnReady"), e.setAttribute("outsystems.function.key", "70f9f4ed-810e-4e4b-894a-c51d6f293604"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onReady$Action, a)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        buttonOnClick$Action(a) {
            var r = this.controller;
            return t.Logger.startActiveSpan("ButtonOnClick__proxy", function(e) {
                e && (e.setAttribute("code.function", "ButtonOnClick"), e.setAttribute("outsystems.function.key", "74dc469c-175f-434b-bf6f-c02126e81fe5"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._buttonOnClick$Action, a)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onCloseTransferToModal$Action(a) {
            var r = this.controller;
            return t.Logger.startActiveSpan("OnCloseTransferToModal__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnCloseTransferToModal"), e.setAttribute("outsystems.function.key", "95b31faf-4323-4311-8b03-2054d3f979a1"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onCloseTransferToModal$Action, a)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        exchangeRateSwitcherOnChange$Action(a) {
            var r = this.controller;
            return t.Logger.startActiveSpan("ExchangeRateSwitcherOnChange__proxy", function(e) {
                e && (e.setAttribute("code.function", "ExchangeRateSwitcherOnChange"), e.setAttribute("outsystems.function.key", "99831c2e-6286-4e9f-a59b-74a3b90d4f1a"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._exchangeRateSwitcherOnChange$Action, a)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onDestroy$Action(a) {
            var r = this.controller;
            return t.Logger.startActiveSpan("OnDestroy__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnDestroy"), e.setAttribute("outsystems.function.key", "a3d37f05-250a-4c86-b236-6d713cf401f0"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onDestroy$Action, a)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onClickTransferToAccount$Action(a, r) {
            var e = this.controller;
            return t.Logger.startActiveSpan("OnClickTransferToAccount__proxy", function(i) {
                i && (i.setAttribute("code.function", "OnClickTransferToAccount"), i.setAttribute("outsystems.function.key", "b2292fd3-5c28-4f25-8cc7-81ba6503e2dc"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._onClickTransferToAccount$Action, r, a)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        onChangeInputTransferAmount$Action(a) {
            var r = this.controller;
            return t.Logger.startActiveSpan("OnChangeInputTransferAmount__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnChangeInputTransferAmount"), e.setAttribute("outsystems.function.key", "b5c5135a-0d69-44c8-afe1-91666e8ca7ec"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onChangeInputTransferAmount$Action, a)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onClickTransferFromAccount$Action(a, r) {
            var e = this.controller;
            return t.Logger.startActiveSpan("OnClickTransferFromAccount__proxy", function(i) {
                i && (i.setAttribute("code.function", "OnClickTransferFromAccount"), i.setAttribute("outsystems.function.key", "c79debf3-1bc1-417d-992e-f5e173a379b9"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._onClickTransferFromAccount$Action, r, a)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        toListItemOnClick$Action(a) {
            var r = this.controller;
            return t.Logger.startActiveSpan("ToListItemOnClick__proxy", function(e) {
                e && (e.setAttribute("code.function", "ToListItemOnClick"), e.setAttribute("outsystems.function.key", "ddf474bb-0962-4083-b91f-a69df7b29c40"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._toListItemOnClick$Action, a)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        fromListItemOnClick$Action(a) {
            var r = this.controller;
            return t.Logger.startActiveSpan("FromListItemOnClick__proxy", function(e) {
                e && (e.setAttribute("code.function", "FromListItemOnClick"), e.setAttribute("outsystems.function.key", "fd32479f-d94c-4bd6-9abc-a3dde691faac"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._fromListItemOnClick$Action, a)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(a) {
            this._onInitializeEventHandler = a
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(a) {
                var r = this.controller,
                    e = this.model,
                    i = this.idService;
                return r.onReady$Action(a)
            }), this._onReadyEventHandler
        }
        set onReadyEventHandler(a) {
            this._onReadyEventHandler = a
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(a) {
            this._onRenderEventHandler = a
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = function(a) {
                var r = this.controller,
                    e = this.model,
                    i = this.idService;
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
                return Tt.default.handleError(a, this.callContext())
            }), this._handleError
        }
        set handleError(a) {
            this._handleError = a
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return N.defaultTimeout
        }
    };
    c(y, "ControllerInner");
    let o = y;
    S = o, S.registerVariableGroupType("tradershub.WalletFlows.WalletsTransfer.AssignExchangeRate$vars", [{
        name: "Rate",
        attrName: "rateInLocal",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Decimal,
        defaultValue: c(function() {
            return t.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }]), S.registerVariableGroupType("tradershub.WalletFlows.WalletsTransfer.AssignExchangeRateCountdownTimer$vars", [{
        name: "ExchangeRateTimer",
        attrName: "exchangeRateTimerInLocal",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Decimal,
        defaultValue: c(function() {
            return t.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }]), S.registerVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnChangeInputTransferConvertedAmount$convertTransferAmountJSResult", [{
        name: "ConvertedTransferAmount",
        attrName: "convertedTransferAmountOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Decimal,
        defaultValue: c(function() {
            return t.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }]), S.registerVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnChangeInputTransferConvertedAmount$calculateExchangeRateTransferToJSResult", [{
        name: "ConvertedAmount",
        attrName: "convertedAmountOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Decimal,
        defaultValue: c(function() {
            return t.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }]), S.registerVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnChangeInputTransferConvertedAmount$calculateTransferFromFeesJSResult", [{
        name: "Fees",
        attrName: "feesOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Decimal,
        defaultValue: c(function() {
            return t.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }, {
        name: "FinalAmount",
        attrName: "finalAmountOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Decimal,
        defaultValue: c(function() {
            return t.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }]), S.registerVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnChangeInputTransferConvertedAmount$calculateConvertedTransferFromFeesJSResult", [{
        name: "Fees",
        attrName: "feesOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Decimal,
        defaultValue: c(function() {
            return t.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }, {
        name: "FinalAmount",
        attrName: "finalAmountOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Decimal,
        defaultValue: c(function() {
            return t.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }]), S.registerVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnChangeInputTransferConvertedAmount$calculateExchangeRateTransferFromJSResult", [{
        name: "ConvertedAmount",
        attrName: "convertedAmountOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Decimal,
        defaultValue: c(function() {
            return t.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }]), S.registerVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnReady$getAccountListJSResult", [{
        name: "TransferAccountList",
        attrName: "transferAccountListOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "TransferAccountKeys",
        attrName: "transferAccountKeysOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "TransferFromAccountList",
        attrName: "transferFromAccountListOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "LifeTimeFiatToCrypto",
        attrName: "lifeTimeFiatToCryptoOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Decimal,
        defaultValue: c(function() {
            return t.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }, {
        name: "LifeTimeCryptoToCrypto",
        attrName: "lifeTimeCryptoToCryptoOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Decimal,
        defaultValue: c(function() {
            return t.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }, {
        name: "LifeTimeCryptoToFiat",
        attrName: "lifeTimeCryptoToFiatOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Decimal,
        defaultValue: c(function() {
            return t.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }, {
        name: "DailyCumulativeAmountTransfers",
        attrName: "dailyCumulativeAmountTransfersOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "DailyTransfers",
        attrName: "dailyTransfersOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }]), S.registerVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnReady$transferBetweenAccountsPayloadJSResult", [{
        name: "Payload",
        attrName: "payloadOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }]), S.registerVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnReady$checkHasTransferAccountsWithFundsJSResult", [{
        name: "hasTransferAccountsWithFunds",
        attrName: "hasTransferAccountsWithFundsOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Boolean,
        defaultValue: c(function() {
            return !1
        }, "defaultValue")
    }]), S.registerVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnReady$limitPayloadJSResult", [{
        name: "Payload",
        attrName: "payloadOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }]), S.registerVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnClickTransferToAccount$vars", [{
        name: "AccountDetails",
        attrName: "accountDetailsInLocal",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Record,
        defaultValue: c(function() {
            return new I
        }, "defaultValue"),
        complexType: I
    }]), S.registerVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnClickTransferFromAccount$vars", [{
        name: "AccountDetails",
        attrName: "accountDetailsInLocal",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Record,
        defaultValue: c(function() {
            return new I
        }, "defaultValue"),
        complexType: I
    }])
}
var S, Le = new t.Controller.ControllerFactory(S, mt);
export {
    Le as a
};