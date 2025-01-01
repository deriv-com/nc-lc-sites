import {
    a as z
} from "./_oschunk-FJZMBCV5.js";
import {
    a as Se
} from "./_oschunk-26LPX23H.js";
import {
    a as pe
} from "./_oschunk-ZSU2JK2M.js";
import {
    a as ge
} from "./_oschunk-2M7PXTSQ.js";
import {
    a as J,
    b as G,
    c as L
} from "./_oschunk-DOFMR6EA.js";
import {
    Fd as H,
    bk as B,
    fc as j,
    xh as U
} from "./_oschunk-MSUVGI3L.js";
import {
    ia as he
} from "./_oschunk-2JKANR6M.js";
import {
    c as u,
    h as Ce
} from "./_oschunk-DVBKI63I.js";
var we = {
        "cH8gH+dwOESRCJqOQ77NlA#Title": "\u062A\u062D\u0648\u064A\u0644",
        "cH8gH+dwOESRCJqOQ77NlA#TitleExpression.1345526795.1": "\u062A\u062D\u0648\u064A\u0644"
    },
    Oe = {
        "cH8gH+dwOESRCJqOQ77NlA#Title": "\xDCberweisung",
        "cH8gH+dwOESRCJqOQ77NlA#TitleExpression.1345526795.1": "\xDCberweisung"
    },
    Ne = {
        "cH8gH+dwOESRCJqOQ77NlA#Title": "Transferencia",
        "cH8gH+dwOESRCJqOQ77NlA#TitleExpression.1345526795.1": "Transferencia"
    },
    Le = {
        "cH8gH+dwOESRCJqOQ77NlA#Title": "Trasferisci",
        "cH8gH+dwOESRCJqOQ77NlA#TitleExpression.1345526795.1": "Trasferisci"
    },
    Fe = {
        "cH8gH+dwOESRCJqOQ77NlA#Title": "Przelew",
        "cH8gH+dwOESRCJqOQ77NlA#TitleExpression.1345526795.1": "Przelew"
    },
    Ve = {
        "cH8gH+dwOESRCJqOQ77NlA#Title": "Transfer\xEAncias",
        "cH8gH+dwOESRCJqOQ77NlA#TitleExpression.1345526795.1": "Transfer\xEAncias"
    },
    _e = {
        "ar-001": {
            translations: we,
            isRTL: !0
        },
        "de-DE": {
            translations: Oe,
            isRTL: !1
        },
        "es-ES": {
            translations: Ne,
            isRTL: !1
        },
        "it-IT": {
            translations: Le,
            isRTL: !1
        },
        "pl-PL": {
            translations: Fe,
            isRTL: !1
        },
        "pt-PT": {
            translations: Ve,
            isRTL: !1
        }
    };

function q(i, b, _) {
    window.location.pathname.toLowerCase() !== "/tradershub/cfds" && setTimeout(() => {
        i.GetMT5AccountsOnAccountSwitch()
    }, 1)
}
u(q, "default");

function Q(i, b, _, n) {
    return new Promise(function(a, t) {
        let o = i.BaseCurrency,
            r = i.TargetCurrency,
            s = i.FractionalDigits,
            f = 59;
        window.timerInterval = null, window.exchangeInterval = null, window.getExchangeRate = () => Ce(this, null, function*() {
            let y = yield b.ExchangeRates(o), m = JSON.parse(y.Response), v = Number(m.exchange_rates.rates[i.TargetCurrency].toFixed(s));
            b.AssignExchangeRate(v), f = 59, a()
        }), window.startCountdown = () => (timerInterval && clearInterval(timerInterval), timerInterval = setInterval(() => {
            f > 0 && f--, b.AssignExchangeRateCountdownTimer(f)
        }, 1e3), timerInterval), window.cleanup = () => {
            timerInterval && (clearInterval(timerInterval), timerInterval = null), exchangeInterval && (clearInterval(exchangeInterval), exchangeInterval = null)
        }, window.getExchangeRate().then(() => {
            window.timerIntervalRef = startCountdown(), exchangeInterval = setInterval(getExchangeRate, 6e4)
        })
    })
}
u(Q, "default");

function K(i, b, _, n) {
    let a = i.Rate,
        t = i.InputId,
        o = i.FractionalDigits,
        r = document.getElementById(t);
    if (r && r.value.length < 14 && Number(r.value) < 9007199254740991) {
        let f = (parseFloat(r.value) || 0) / a;
        isFinite(f) || (f = 0), i.ConvertedTransferAmount = parseFloat(f.toFixed(o))
    }
}
u(K, "default");

function Y(i, b, _, n) {
    var p;
    let a = i.TransferAmount,
        t = i.FractionalDigits,
        o = JSON.parse(i.WebsiteStatus),
        r = i.WalletCurrency,
        s = i.TransferToCurrency,
        f = i.TransferFromCurrency,
        y = o.website_status.currencies_config[r].transfer_between_accounts.fees[s],
        m = y / 100 * a,
        v = a - m,
        g = 1 / Math.pow(10, t);
    i.Percentage = y, i.Fees = parseFloat(m.toFixed(t)), i.FinalAmount = parseFloat(v.toFixed(t)), i.MimumFeeAmount = (p = b.FormatMoney(g, f)) == null ? void 0 : p.FormattedNumber
}
u(Y, "default");

function X(i, b, _, n) {
    var Ae, be, ve, De;
    let a = parseFloat(i.Balance) || 0,
        t = parseFloat(i.TransferAmount) || 0,
        o = i.TransferFromCurrency,
        r = i.TransferToCurrency,
        s = parseFloat(i.Rate) || 1,
        f = {};
    try {
        f = JSON.parse(i.LifetimeTransferLimit)
    } catch (N) {
        console.error("Invalid LifetimeTransferLimit JSON", N)
    }
    let y = i.IsTransferFromCrypto,
        m = i.IsTransferToCrypto,
        v = i.CurrentCurrency,
        g = i.TransferFromDecimalPlaces,
        p = i.TransferToDecimalPlaces,
        S = i.MinTransfer,
        l = u((N, k = 2) => {
            let P = N * s;
            return parseFloat(P.toFixed(k))
        }, "convertAmount");

    function h(N, k, P) {
        var W, $, M;
        return k && P ? ((W = N.crypto_to_crypto) == null ? void 0 : W.allowed) || 0 : k && !P ? (($ = N.crypto_to_fiat) == null ? void 0 : $.allowed) || 0 : !k && P && ((M = N.fiat_to_crypto) == null ? void 0 : M.allowed) || 0
    }
    u(h, "getAllowedValue");

    function D(N, k, P) {
        var W, $, M;
        return k && P ? ((W = N.crypto_to_crypto) == null ? void 0 : W.available) || 0 : k && !P ? (($ = N.crypto_to_fiat) == null ? void 0 : $.available) || 0 : !k && P && ((M = N.fiat_to_crypto) == null ? void 0 : M.available) || 0
    }
    u(D, "getAvailableValue");
    let C = l(S, p || 2),
        F = D(f, y, m),
        E = l(F, p || 2),
        I = h(f, y, m),
        V = v === o ? a : l(a, p || 2),
        O = v === o ? S : l(S, p || 2),
        x = v === o ? F : E,
        R = (Ae = b.FormatMoney(F, o)) == null ? void 0 : Ae.FormattedNumber,
        d = v === o ? (be = b.FormatMoney(S, v)) == null ? void 0 : be.FormattedNumber : (ve = b.FormatMoney(C, v)) == null ? void 0 : ve.FormattedNumber,
        c = (De = b.FormatMoney(E, r)) == null ? void 0 : De.FormattedNumber,
        A = {
            TransferAmount: t
        },
        T = yup.object().shape({
            TransferAmount: yup.number().test("min-transfer", `Minimum transfer amount is ${O} ${v}.`, function(N) {
                return N >= O
            }).test("exceed-balance", "Insufficient funds. Deposit now to make a transfer.", function(N) {
                return N <= V
            }).test("first-time-transfer", I === F ? `Transfer limit is up to ${R} ${o} or ${c} ${r}. Verify your account to upgrade the limit.` : `Remaining transfer limit is ${R} ${o} or ${c} ${r}. Verify your account to upgrade the limit.`, function(N) {
                return N <= x
            })
        }),
        Te = b.YupValidate(T, A).Errors;
    Te.TransferAmount ? n.Validation.setWidgetAsInvalid(i.WidgetId, Te.TransferAmount) : n.Validation.setWidgetAsValid(i.WidgetId)
}
u(X, "default");

function Z(i, b, _, n) {
    let a = i.Rate,
        t = i.Amount,
        o = i.FractionalDigits,
        r = t * a;
    i.ConvertedAmount = parseFloat(r.toFixed(o))
}
u(Z, "default");

function ee(i, b, _, n) {
    let a = i.TransferAmount,
        t = i.FractionalDigits,
        o = JSON.parse(i.WebsiteStatus),
        r = i.WalletCurrency,
        s = i.TransferToCurrency,
        y = o.website_status.currencies_config[r].transfer_between_accounts.fees[s] / 100 * a,
        m = a - y;
    i.Fees = parseFloat(y.toFixed(t)), i.FinalAmount = parseFloat(m.toFixed(t))
}
u(ee, "default");

function te(i, b, _, n) {
    var V, O, x, R;
    let a = i.Balance,
        t = JSON.parse(i.TransferTo || "{}"),
        o = JSON.parse(i.TransferFrom || "{}"),
        r = i.TransferAmount,
        s = JSON.parse(i.DailyCumulativeAmountTransfers || "{}"),
        f = JSON.parse(i.DailyTransferLimitRate || "{}"),
        y = parseFloat(i.Rate) || 1,
        m = i.CurrentCurrency,
        v = o.accountType === "wallet" || t.accountType === "wallet" ? parseFloat(((V = s == null ? void 0 : s.internal) == null ? void 0 : V.available) || 0) : 0,
        g = u((d, c = 2) => {
            let A = d * y;
            return parseFloat(A.toFixed(c))
        }, "convertAmount"),
        S = u(d => {
            var c, A;
            if (m !== "USD") {
                let T = (A = (c = f == null ? void 0 : f.exchange_rates) == null ? void 0 : c.rates) == null ? void 0 : A[m];
                return d * T
            }
            return d
        }, "convertDailyTransferLimit")(v),
        l = ((O = b.FormatMoney(S, m)) == null ? void 0 : O.FormattedNumber) || "",
        h = ((x = b.FormatMoney(o == null ? void 0 : o.minTransfer, o == null ? void 0 : o.currency)) == null ? void 0 : x.FormattedNumber) || "",
        D = m === (o == null ? void 0 : o.currency) ? a : g(a, (t == null ? void 0 : t.fractionalDigits) || 2),
        C = m === (o == null ? void 0 : o.currency) ? o == null ? void 0 : o.minTransfer : g(o == null ? void 0 : o.minTransfer, (t == null ? void 0 : t.fractionalDigits) || 2),
        F = {
            TransferAmount: r
        },
        E = yup.object().shape({
            TransferAmount: yup.number().test("exceed-daily-limit", `The daily transfer limit between your ${o==null?void 0:o.name} and ${t==null?void 0:t.name} is ${l}. ${m}`, function(d) {
                return d < parseFloat(S)
            }).test("min-transfer", `Minimum transfer amount is ${C} ${m}.`, function(d) {
                return d >= C
            }).test("exceed-balance", "Insufficient funds. Deposit now to make a transfer.", function(d) {
                return d <= D
            })
        }),
        I = ((R = b.YupValidate(E, F)) == null ? void 0 : R.Errors) || {};
    I.TransferAmount ? n.Validation.setWidgetAsInvalid(i.WidgetId, I.TransferAmount) : n.Validation.setWidgetAsValid(i.WidgetId)
}
u(te, "default");

function ae(i, b, _, n) {
    let a = i.Rate,
        t = i.Amount,
        o = i.FractionalDigits,
        r = t * a;
    i.ConvertedAmount = parseFloat(r.toFixed(o))
}
u(ae, "default");

function re(i, b, _, n) {
    let a = i.InputId,
        t = document.getElementById(a);
    t && t.getAttribute("data-dirty") === "False" && (b.GetExchangeRate(), t.setAttribute("data-dirty", "True"))
}
u(re, "default");

function ne(i, b, _, n) {
    let a = i.InputId,
        t = document.getElementById(a);
    a && t && t.removeAttribute("style")
}
u(ne, "default");

function oe(i, b, _, n) {
    let a = i.InputId,
        t = document.getElementById(a);
    a && t && (t.removeAttribute("style"), t.addEventListener("keydown", function(o) {
        (o.keyCode == 37 || o.keyCode == 39) && o.preventDefault()
    }))
}
u(oe, "default");

function ie(i, b, _, n) {
    var I, V, O, x, R;
    let a = (I = JSON.parse(i.Accounts)) == null ? void 0 : I.accounts,
        t = (V = JSON.parse(i.GetLimit)) == null ? void 0 : V.get_limits,
        o = (O = JSON.parse(i.WebsiteStatus)) == null ? void 0 : O.website_status,
        r = JSON.parse(i.ActiveWallet),
        f = i.AccountType === "real" ? JSON.parse(i.WalletAccounts) : [],
        y = {
            icon: r.icon,
            name: r.name,
            currency: r.currency,
            loginid: r.loginid,
            balance: r.balance,
            formattedBalance: r.formatted_balance,
            is_crypto: r.is_crypto,
            accountCategory: "Wallets",
            fractionalDigits: (x = o.currencies_config[r.currency].fractional_digits) != null ? x : 2,
            minTransfer: o.currencies_config[r.currency].transfer_between_accounts.limits.min,
            accountType: "wallet"
        },
        m = (f == null ? void 0 : f.filter(d => d == null ? void 0 : d.is_added).map(d => {
            var c;
            return {
                icon: d.icon,
                name: d.name,
                currency: d.currency,
                balance: parseFloat(d.balance),
                loginid: d.loginid,
                formattedBalance: d.formatted_balance,
                is_crypto: d.is_crypto,
                accountCategory: "Wallets",
                fractionalDigits: (c = o.currencies_config[d.currency].fractional_digits) != null ? c : 2,
                minTransfer: o.currencies_config[d.currency].transfer_between_accounts.limits.min,
                accountType: "wallet"
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
            zero_spread: "Zero Spread"
        },
        g = ((R = a == null ? void 0 : a.filter(d => d.account_category === "trading")) == null ? void 0 : R.map(d => {
            var c, A;
            return {
                icon: (c = b.GetIcon(d.product || (d.account_type === "standard" ? "options" : d.account_type) || d.currency)) == null ? void 0 : c.CurrencyIcon,
                name: v[d.product || (d.account_type === "standard" ? "options" : d.account_type)] + " (" + d.loginid + ")",
                currency: d.currency,
                loginid: d.loginid,
                formattedBalance: d.balance + " " + d.currency,
                is_crypto: !["EUR", "USD", "GBP"].includes(d.currency),
                accountCategory: `Accounts linked to ${r.name}`,
                fractionalDigits: (A = o.currencies_config[d.currency].fractional_digits) != null ? A : 2,
                minTransfer: o.currencies_config[d.currency].transfer_between_accounts.limits.min,
                balance: parseFloat(d.balance),
                accountType: d.account_type
            }
        })) || [],
        p = [y, ...m, ...g],
        S = [y, ...g];

    function l(d) {
        return d.reduce((c, A) => {
            let T = A.accountCategory;
            return c[T] || (c[T] = []), c[T].push(A), c
        }, {})
    }
    u(l, "groupAccountsByCategory");
    let h = l(p),
        D = l(S),
        C = Object.keys(h),
        F = Object.values(h).flat(),
        E = Object.values(D).flat();
    i.TransferAccountKeys = JSON.stringify(C), i.TransferAccountList = JSON.stringify(F), i.TransferFromAccountList = JSON.stringify(E)
}
u(ie, "default");

function se(i, b, _, n) {
    i.Payload = JSON.stringify({
        accounts: "all",
        loginid: i.LoginId
    })
}
u(se, "default");

function ue(i, b, _, n) {
    var r;
    let a = (r = JSON.parse(i.AccountDetails)) == null ? void 0 : r.get_account_status,
        t = new Set(a == null ? void 0 : a.status),
        o = new Set(a == null ? void 0 : a.cashier_validation);
    i.IsCashierLockStatus = (o == null ? void 0 : o.has("cashier_locked_status")) || t.has("cashier_locked"), i.IsSystemMaintenance = o == null ? void 0 : o.has("system_maintenance")
}
u(ue, "default");

function le(i, b, _, n) {
    let a = JSON.parse(i.AccountsList).accounts,
        t = i.Currency,
        o = a.some(r => parseFloat(r.balance) > 0 && r.currency === t);
    i.hasTransferAccountsWithFunds = o
}
u(le, "default");

function ce(i, b, _, n) {
    var s, f, y, m, v, g, p, S, l, h, D, C, F, E, I, V, O;
    let a = ((s = JSON.parse(i.GetLimits || "{}")) == null ? void 0 : s.get_limits) || {},
        t = a.daily_transfers || {},
        o = a.daily_cumulative_amount_transfers || {},
        r = a.lifetime_transfers || {};
    i.DailyTransferAmount = JSON.stringify(o), i.DailyTransferCount = JSON.stringify(t), i.LifetimeTransfers = JSON.stringify(r) || "", i.FiatToCryptoAvailableLimit = ((f = r == null ? void 0 : r.fiat_to_crypto) == null ? void 0 : f.available) || 0, i.CryptoToCryptoAvailableLimit = ((y = r == null ? void 0 : r.crypto_to_crypto) == null ? void 0 : y.available) || 0, i.CryptoToFiatAvailableLimit = ((m = r == null ? void 0 : r.crypto_to_fiat) == null ? void 0 : m.available) || 0, i.FiatToCryptoAllowedLimit = ((v = r == null ? void 0 : r.fiat_to_crypto) == null ? void 0 : v.allowed) || 0, i.CryptoToCryptoAllowedLimit = ((g = r == null ? void 0 : r.crypto_to_crypto) == null ? void 0 : g.allowed) || 0, i.CryptoToFiatAllowedLimit = ((p = r == null ? void 0 : r.crypto_to_fiat) == null ? void 0 : p.allowed) || 0, i.VirtualDailyAvailableLimits = parseFloat(((S = o == null ? void 0 : o.virtual) == null ? void 0 : S.available) || "0"), i.DTradeDailyAvailableLimits = parseFloat(((l = o == null ? void 0 : o.dtrade) == null ? void 0 : l.available) || "0"), i.MT5DailyAvailableLimits = parseFloat(((h = o == null ? void 0 : o.mt5) == null ? void 0 : h.available) || "0"), i.DxtradeDailyAvailableLimits = parseFloat(((D = o == null ? void 0 : o.dxtrade) == null ? void 0 : D.available) || "0"), i.WalletDailyAvailableLimits = parseFloat(((C = o == null ? void 0 : o.internal) == null ? void 0 : C.available) || "0"), i.VirtualDailyAllowedLimits = parseFloat(((F = o == null ? void 0 : o.virtual) == null ? void 0 : F.allowed) || "0"), i.DTradeDailyAllowedLimits = parseFloat(((E = o == null ? void 0 : o.dtrade) == null ? void 0 : E.allowed) || "0"), i.MT5DailyAllowedLimits = parseFloat(((I = o == null ? void 0 : o.mt5) == null ? void 0 : I.allowed) || "0"), i.DxtradeDailyAllowedLimits = parseFloat(((V = o == null ? void 0 : o.dxtrade) == null ? void 0 : V.allowed) || "0"), i.WalletDailyAllowedLimits = parseFloat(((O = o == null ? void 0 : o.internal) == null ? void 0 : O.allowed) || "0")
}
u(ce, "default");

function fe(i, b, _, n) {
    i.Payload = JSON.stringify({
        loginid: i.LoginId
    })
}
u(fe, "default");

function de(i, b, _) {
    window.clearInterval(window.timerInterval), window.clearInterval(window.exchangeInterval)
}
u(de, "default");

function ye(i, b, _, n) {
    var x, R;
    let a = i.Balance,
        t = i.Currency,
        o = i.TransferAmount,
        r = i.MinTransfer,
        s = i.TransferToName,
        f = i.TransferFromName,
        y = JSON.parse(i.DailyCumulativeAmountTransfers),
        m = i.AccountType,
        v = JSON.parse(i.Rate),
        g = i.TransferFromLoginId,
        p = i.TransferToLoginId,
        S = m === "demo",
        l = S ? parseFloat(y.virtual.available) : g.startsWith("CR") || p.startsWith("CR") ? parseFloat(y.dtrade.available) : g.startsWith("MT") || p.startsWith("MT") ? parseFloat(y.mt5.available) : g.startsWith("DX") || p.startsWith("DX") ? parseFloat(y.dxtrade.available) : 0,
        D = u(d => {
            let c = d;
            return t != "USD" ? c = c * v.exchange_rates.rates[t] : c
        }, "convertedAmount")(l),
        C = (x = b.FormatMoney(D, t)) == null ? void 0 : x.FormattedNumber,
        F = (R = b.FormatMoney(r, t)) == null ? void 0 : R.FormattedNumber,
        E = u(() => S ? a < 1e4 && o <= 1e4 ? "Insufficient funds. Reset the balance to make a transfer." : "Insufficient funds." : "Insufficient funds. Deposit now to make a transfer.", "balanceValidationMessage"),
        I = {
            TransferAmount: o
        },
        V = yup.object().shape({
            TransferAmount: yup.number().test("exceed-daily-limit", `The daily transfer limit between your ${f} and ${s} is ${C}. ${t}`, function(d) {
                return d < parseFloat(D)
            }).test("min-transfer", `Minimum transfer amount is ${F} ${t}.`, function(d) {
                return d >= r
            }).test("exceed-balance", E, function(d) {
                return d <= a
            })
        }),
        O = b.YupValidate(V, I).Errors;
    O.TransferAmount != "" ? n.Validation.setWidgetAsInvalid(i.WidgetId, O.TransferAmount) : n.Validation.setWidgetAsValid(i.WidgetId)
}
u(ye, "default");

function me(i, b, _, n) {
    let a = i.InputId,
        t = document.getElementById(a);
    if (a && t) {
        let o = t.value.length;
        t.focus(), t.setSelectionRange(o, o), t.setAttribute("maxlength", "14")
    }
}
u(me, "default");
var e = he; {
    let b = class b extends e.Controller.BaseViewController {
        constructor(n, a, t) {
            super(n, a, t, _e);
            var o = this.controller;
            this.clientActionProxies = {
                assignExchangeRate$Action: u(function(r) {
                    return r = r === void 0 ? e.DataTypes.Decimal.defaultValue : r, o.executeActionInsideJSNode(o._assignExchangeRate$Action.bind(o, e.DataConversion.JSNodeParamConverter.from(r, e.DataTypes.DataTypes.Decimal)), o.callContext(), function(s) {
                        return {}
                    }, function() {}, "AssignExchangeRate")
                }, "assignExchangeRate$Action"),
                assignExchangeRateCountdownTimer$Action: u(function(r) {
                    return r = r === void 0 ? e.DataTypes.Decimal.defaultValue : r, o.executeActionInsideJSNode(o._assignExchangeRateCountdownTimer$Action.bind(o, e.DataConversion.JSNodeParamConverter.from(r, e.DataTypes.DataTypes.Decimal)), o.callContext(), function(s) {
                        return {}
                    }, function() {}, "AssignExchangeRateCountdownTimer")
                }, "assignExchangeRateCountdownTimer$Action"),
                getExchangeRate$Action: u(function() {
                    return o.executeActionInsideJSNode(o._getExchangeRate$Action.bind(o), o.callContext(), function(r) {
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
                var a = this.model,
                    t = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("OnCloseTransferFromModal", function(r) {
                    r && (r.setAttribute("code.function", "OnCloseTransferFromModal"), r.setAttribute("outsystems.function.key", "025247b5-342a-441e-8f2e-30a7405e4d8e"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnCloseTransferFromModal"), n = t.callContext(n), a.variables.isTransferFromOpenVar = !1
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onCloseTransferFromModal$Action
        }
        set _onCloseTransferFromModal$Action(n) {
            this.__onCloseTransferFromModal$Action = n
        }
        get _assignExchangeRate$Action() {
            return this.hasOwnProperty("__assignExchangeRate$Action") || (this.__assignExchangeRate$Action = function(n, a) {
                var t = this.model,
                    o = this.controller,
                    r = this.idService;
                return e.Logger.startActiveSpan("AssignExchangeRate", function(s) {
                    s && (s.setAttribute("code.function", "AssignExchangeRate"), s.setAttribute("outsystems.function.key", "03211425-510d-4afc-9504-a67819619295"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("AssignExchangeRate"), a = o.callContext(a);
                        var f = new e.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsTransfer.AssignExchangeRate$vars")));
                        f.value.rateInLocal = n, t.variables.exchangeRateVar = f.value.rateInLocal
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__assignExchangeRate$Action
        }
        set _assignExchangeRate$Action(n) {
            this.__assignExchangeRate$Action = n
        }
        get _onClickLifetimeLimitReached$Action() {
            return this.hasOwnProperty("__onClickLifetimeLimitReached$Action") || (this.__onClickLifetimeLimitReached$Action = function(n) {
                var a = this.model,
                    t = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("OnClickLifetimeLimitReached", function(r) {
                    return r && (r.setAttribute("code.function", "OnClickLifetimeLimitReached"), r.setAttribute("outsystems.function.key", "15d144f6-2ba4-4ab1-bb33-79a05d00b0bb"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("OnClickLifetimeLimitReached"), n = t.callContext(n), e.Flow.executeAsyncFlow(function() {
                            return e.Flow.executeSequence(function() {
                                return a.variables.pOIStatusVar === "none" ? (a.flush(), L.redirectToHighcode$Action("account-settings", !1, !0, n)) : e.Flow.executeSequence(function() {
                                    if (a.variables.pOIStatusVar === "rejected") return a.flush(), L.redirectToHighcode$Action("account-settings", !1, !0, n)
                                })
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__onClickLifetimeLimitReached$Action
        }
        set _onClickLifetimeLimitReached$Action(n) {
            this.__onClickLifetimeLimitReached$Action = n
        }
        get _assignExchangeRateCountdownTimer$Action() {
            return this.hasOwnProperty("__assignExchangeRateCountdownTimer$Action") || (this.__assignExchangeRateCountdownTimer$Action = function(n, a) {
                var t = this.model,
                    o = this.controller,
                    r = this.idService;
                return e.Logger.startActiveSpan("AssignExchangeRateCountdownTimer", function(s) {
                    s && (s.setAttribute("code.function", "AssignExchangeRateCountdownTimer"), s.setAttribute("outsystems.function.key", "16179031-707c-45a4-8f64-4bd3edf8e1dd"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("AssignExchangeRateCountdownTimer"), a = o.callContext(a);
                        var f = new e.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsTransfer.AssignExchangeRateCountdownTimer$vars")));
                        f.value.exchangeRateTimerInLocal = n, t.variables.exchangeRateCountdownTimerVar = e.BuiltinFunctions.decimalToInteger(e.BuiltinFunctions.trunc(f.value.exchangeRateTimerInLocal))
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__assignExchangeRateCountdownTimer$Action
        }
        set _assignExchangeRateCountdownTimer$Action(n) {
            this.__assignExchangeRateCountdownTimer$Action = n
        }
        get _submitTransferOnClick$Action() {
            return this.hasOwnProperty("__submitTransferOnClick$Action") || (this.__submitTransferOnClick$Action = function(n) {
                var a = this.model,
                    t = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("SubmitTransferOnClick", function(r) {
                    return r && (r.setAttribute("code.function", "SubmitTransferOnClick"), r.setAttribute("outsystems.function.key", "180ff7b9-fec8-4133-bfeb-e67400f33ff5"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        t.ensureControllerAlive("SubmitTransferOnClick"), n = t.callContext(n);
                        var s = new e.DataTypes.VariableHolder,
                            f = new e.DataTypes.VariableHolder,
                            y = new e.DataTypes.VariableHolder;
                        return e.Flow.executeAsyncFlow(function() {
                            return a.variables.isTransferButtonLoadingVar = !0, e.Flow.executeSequence(function() {
                                return a.variables.showCurrencySwitcherVar ? e.Flow.executeSequence(function() {
                                    return a.variables.currencySwitcherVar === a.variables.activeWalletVar.currencyAttr ? (a.flush(), L.transferBetweenAccounts$Action(a.variables.transferFromVar.loginidAttr, a.variables.transferToVar.loginidAttr, a.variables.transferAmountVar, a.variables.activeWalletVar.currencyAttr, n).then(function(m) {
                                        s.value = m
                                    }).then(function() {
                                        s.value.isErrorOut === !0 || (a.variables.isTransferSuccessVar = !0), a.variables.isTransferButtonLoadingVar = !1
                                    })) : (a.flush(), L.transferBetweenAccounts$Action(a.variables.transferFromVar.loginidAttr, a.variables.transferToVar.loginidAttr, a.variables.convertedTransferAmountVar, a.variables.activeWalletVar.currencyAttr, n).then(function(m) {
                                        f.value = m
                                    }).then(function() {
                                        f.value.isErrorOut === !0 || (a.variables.isTransferSuccessVar = !0), a.variables.isTransferButtonLoadingVar = !1
                                    }))
                                }) : (a.flush(), L.transferBetweenAccounts$Action(a.variables.transferFromVar.loginidAttr, a.variables.transferToVar.loginidAttr, a.variables.transferAmountVar, a.variables.activeWalletVar.currencyAttr, n).then(function(m) {
                                    y.value = m
                                }).then(function() {
                                    y.value.isErrorOut ? a.variables.isTransferButtonLoadingVar = !1 : (e.Logger.startActiveSpan("FetchCFDaccounts", function(m) {
                                        m && (m.setAttribute("code.function", "FetchCFDaccounts"), m.setAttribute("outsystems.function.key", "415232d2-2f90-484d-a82b-1d6c4afa27f7"), m.setAttribute("outsystems.function.owner.name", "tradershub"), m.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), m.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                        try {
                                            return t.safeExecuteJSNode(q, "FetchCFDaccounts", "SubmitTransferOnClick", null, function(v) {}, {
                                                GetMT5AccountsOnAccountSwitch: L.clientActionProxies.getMT5AccountsOnAccountSwitch$Action
                                            }, {})
                                        } finally {
                                            m && m.end()
                                        }
                                    }, 1), a.variables.isTransferSuccessVar = !0, a.variables.isTransferButtonLoadingVar = !1, J.setShowModal(""))
                                }))
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__submitTransferOnClick$Action
        }
        set _submitTransferOnClick$Action(n) {
            this.__submitTransferOnClick$Action = n
        }
        get _getExchangeRate$Action() {
            return this.hasOwnProperty("__getExchangeRate$Action") || (this.__getExchangeRate$Action = function(n) {
                var a = this.model,
                    t = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("GetExchangeRate", function(r) {
                    return r && (r.setAttribute("code.function", "GetExchangeRate"), r.setAttribute("outsystems.function.key", "1efd211c-94d4-43c0-a293-fa6fe524745f"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("GetExchangeRate"), n = t.callContext(n), e.Flow.executeAsyncFlow(function() {
                            return e.Logger.startActiveSpan("InitExchangeRate", function(s) {
                                s && (s.setAttribute("code.function", "InitExchangeRate"), s.setAttribute("outsystems.function.key", "d0c04ed5-79c0-4dcd-a62a-2db5677a1421"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return t.safeExecuteAsyncJSNode(Q, "InitExchangeRate", "GetExchangeRate", {
                                        TargetCurrency: e.DataConversion.JSNodeParamConverter.to(a.variables.transferToVar.currencyAttr, e.DataTypes.DataTypes.Text),
                                        FractionalDigits: e.DataConversion.JSNodeParamConverter.to(a.variables.transferToVar.fractionalDigitsAttr, e.DataTypes.DataTypes.Integer),
                                        BaseCurrency: e.DataConversion.JSNodeParamConverter.to(a.variables.activeWalletVar.currencyAttr, e.DataTypes.DataTypes.Text)
                                    }, function(f) {}, {
                                        ExchangeRates: L.clientActionProxies.exchangeRates$Action,
                                        AssignExchangeRate: t.clientActionProxies.assignExchangeRate$Action,
                                        AssignExchangeRateCountdownTimer: t.clientActionProxies.assignExchangeRateCountdownTimer$Action
                                    }, {})
                                } finally {
                                    s && s.end()
                                }
                            }, 1)
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__getExchangeRate$Action
        }
        set _getExchangeRate$Action(n) {
            this.__getExchangeRate$Action = n
        }
        get _onChangeInputTransferConvertedAmount$Action() {
            return this.hasOwnProperty("__onChangeInputTransferConvertedAmount$Action") || (this.__onChangeInputTransferConvertedAmount$Action = function(n) {
                var a = this.model,
                    t = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("OnChangeInputTransferConvertedAmount", function(r) {
                    return r && (r.setAttribute("code.function", "OnChangeInputTransferConvertedAmount"), r.setAttribute("outsystems.function.key", "4091bcf4-616b-4e2a-97da-d41d78267c7b"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnChangeInputTransferConvertedAmount"), n = t.callContext(n);
                        var s = new e.DataTypes.VariableHolder,
                            f = new e.DataTypes.VariableHolder,
                            y = new e.DataTypes.VariableHolder,
                            m = new e.DataTypes.VariableHolder,
                            v = new e.DataTypes.VariableHolder,
                            g = new e.DataTypes.VariableHolder,
                            p = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                            S = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType);
                        return e.Flow.executeAsyncFlow(function() {
                            return e.Flow.executeSequence(function() {
                                if (e.BuiltinFunctions.integerToLongInteger(e.BuiltinFunctions.decimalToInteger(a.variables.transferAmountVar)).lt(e.DataTypes.LongInteger.fromString("9007199254740991"))) return e.Logger.startActiveSpan("TriggerExchangeRate", function(l) {
                                    l && (l.setAttribute("code.function", "TriggerExchangeRate"), l.setAttribute("outsystems.function.key", "c2655efd-cf4a-4b9f-8158-03890f271113"), l.setAttribute("outsystems.function.owner.name", "tradershub"), l.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), l.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return t.safeExecuteJSNode(re, "TriggerExchangeRate", "OnChangeInputTransferConvertedAmount", {
                                            InputId: e.DataConversion.JSNodeParamConverter.to(o.getId("InputTransferExchangeAmount"), e.DataTypes.DataTypes.Text)
                                        }, function(h) {}, {
                                            GetExchangeRate: t.clientActionProxies.getExchangeRate$Action
                                        }, {})
                                    } finally {
                                        l && l.end()
                                    }
                                }, 1), v.value = e.Logger.startActiveSpan("CalculateTransferFromFees", function(l) {
                                    l && (l.setAttribute("code.function", "CalculateTransferFromFees"), l.setAttribute("outsystems.function.key", "a85aacbc-1d23-46d9-9836-8b4e1c806bf8"), l.setAttribute("outsystems.function.owner.name", "tradershub"), l.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), l.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return t.safeExecuteJSNode(ee, "CalculateTransferFromFees", "OnChangeInputTransferConvertedAmount", {
                                            WebsiteStatus: e.DataConversion.JSNodeParamConverter.to(J.getRawWebsiteStatusResponse(), e.DataTypes.DataTypes.Text),
                                            WalletCurrency: e.DataConversion.JSNodeParamConverter.to(a.variables.activeWalletVar.currencyAttr, e.DataTypes.DataTypes.Text),
                                            TransferAmount: e.DataConversion.JSNodeParamConverter.to(a.variables.transferAmountVar, e.DataTypes.DataTypes.Decimal),
                                            TransferToCurrency: e.DataConversion.JSNodeParamConverter.to(a.variables.transferToVar.currencyAttr, e.DataTypes.DataTypes.Text),
                                            FractionalDigits: e.DataConversion.JSNodeParamConverter.to(a.variables.transferFromVar.fractionalDigitsAttr.toString(), e.DataTypes.DataTypes.Text),
                                            Fees: e.DataConversion.JSNodeParamConverter.to(e.DataTypes.Decimal.defaultValue, e.DataTypes.DataTypes.Decimal),
                                            FinalAmount: e.DataConversion.JSNodeParamConverter.to(e.DataTypes.Decimal.defaultValue, e.DataTypes.DataTypes.Decimal)
                                        }, function(h) {
                                            var D = new(t.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnChangeInputTransferConvertedAmount$calculateTransferFromFeesJSResult"));
                                            return D.feesOut = e.DataConversion.JSNodeParamConverter.from(h.Fees, e.DataTypes.DataTypes.Decimal), D.finalAmountOut = e.DataConversion.JSNodeParamConverter.from(h.FinalAmount, e.DataTypes.DataTypes.Decimal), D
                                        }, {}, {})
                                    } finally {
                                        l && l.end()
                                    }
                                }, 1), g.value = e.Logger.startActiveSpan("CalculateExchangeRateTransferFrom", function(l) {
                                    l && (l.setAttribute("code.function", "CalculateExchangeRateTransferFrom"), l.setAttribute("outsystems.function.key", "b6261695-b8e4-41fc-b252-e662fb4f54f1"), l.setAttribute("outsystems.function.owner.name", "tradershub"), l.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), l.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return t.safeExecuteJSNode(ae, "CalculateExchangeRateTransferFrom", "OnChangeInputTransferConvertedAmount", {
                                            FractionalDigits: e.DataConversion.JSNodeParamConverter.to(a.variables.transferToVar.fractionalDigitsAttr, e.DataTypes.DataTypes.Integer),
                                            Rate: e.DataConversion.JSNodeParamConverter.to(a.variables.exchangeRateVar, e.DataTypes.DataTypes.Decimal),
                                            Amount: e.DataConversion.JSNodeParamConverter.to(v.value.finalAmountOut, e.DataTypes.DataTypes.Decimal),
                                            ConvertedAmount: e.DataConversion.JSNodeParamConverter.to(e.DataTypes.Decimal.defaultValue, e.DataTypes.DataTypes.Decimal)
                                        }, function(h) {
                                            var D = new(t.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnChangeInputTransferConvertedAmount$calculateExchangeRateTransferFromJSResult"));
                                            return D.convertedAmountOut = e.DataConversion.JSNodeParamConverter.from(h.ConvertedAmount, e.DataTypes.DataTypes.Decimal), D
                                        }, {}, {})
                                    } finally {
                                        l && l.end()
                                    }
                                }, 1), a.variables.transferFromConvertedAmountVar = g.value.convertedAmountOut, a.variables.finalAmountVar = v.value.finalAmountOut, a.variables.calculatedFeesVar = v.value.feesOut, f.value = e.Logger.startActiveSpan("ConvertTransferAmount", function(l) {
                                    l && (l.setAttribute("code.function", "ConvertTransferAmount"), l.setAttribute("outsystems.function.key", "1364e9bc-f83d-4755-86d6-abdd85e15ea3"), l.setAttribute("outsystems.function.owner.name", "tradershub"), l.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), l.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return t.safeExecuteJSNode(K, "ConvertTransferAmount", "OnChangeInputTransferConvertedAmount", {
                                            InputId: e.DataConversion.JSNodeParamConverter.to(o.getId("InputTransferExchangeAmount"), e.DataTypes.DataTypes.Text),
                                            Rate: e.DataConversion.JSNodeParamConverter.to(a.variables.exchangeRateVar, e.DataTypes.DataTypes.Decimal),
                                            FractionalDigits: e.DataConversion.JSNodeParamConverter.to(a.variables.transferFromVar.fractionalDigitsAttr, e.DataTypes.DataTypes.Integer),
                                            ConvertedTransferAmount: e.DataConversion.JSNodeParamConverter.to(e.DataTypes.Decimal.defaultValue, e.DataTypes.DataTypes.Decimal)
                                        }, function(h) {
                                            var D = new(t.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnChangeInputTransferConvertedAmount$convertTransferAmountJSResult"));
                                            return D.convertedTransferAmountOut = e.DataConversion.JSNodeParamConverter.from(h.ConvertedTransferAmount, e.DataTypes.DataTypes.Decimal), D
                                        }, {}, {})
                                    } finally {
                                        l && l.end()
                                    }
                                }, 1), y.value = e.Logger.startActiveSpan("CalculateConvertedTransferFromFees", function(l) {
                                    l && (l.setAttribute("code.function", "CalculateConvertedTransferFromFees"), l.setAttribute("outsystems.function.key", "280971db-752e-48ae-8f18-64edb368b603"), l.setAttribute("outsystems.function.owner.name", "tradershub"), l.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), l.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return t.safeExecuteJSNode(Y, "CalculateConvertedTransferFromFees", "OnChangeInputTransferConvertedAmount", {
                                            TransferAmount: e.DataConversion.JSNodeParamConverter.to(f.value.convertedTransferAmountOut, e.DataTypes.DataTypes.Decimal),
                                            TransferFromCurrency: e.DataConversion.JSNodeParamConverter.to(a.variables.transferFromVar.currencyAttr, e.DataTypes.DataTypes.Text),
                                            TransferToCurrency: e.DataConversion.JSNodeParamConverter.to(a.variables.transferToVar.currencyAttr, e.DataTypes.DataTypes.Text),
                                            FractionalDigits: e.DataConversion.JSNodeParamConverter.to(a.variables.transferFromVar.fractionalDigitsAttr.toString(), e.DataTypes.DataTypes.Text),
                                            WebsiteStatus: e.DataConversion.JSNodeParamConverter.to(J.getRawWebsiteStatusResponse(), e.DataTypes.DataTypes.Text),
                                            WalletCurrency: e.DataConversion.JSNodeParamConverter.to(a.variables.activeWalletVar.currencyAttr, e.DataTypes.DataTypes.Text),
                                            Fees: e.DataConversion.JSNodeParamConverter.to(e.DataTypes.Decimal.defaultValue, e.DataTypes.DataTypes.Decimal),
                                            FinalAmount: e.DataConversion.JSNodeParamConverter.to(e.DataTypes.Decimal.defaultValue, e.DataTypes.DataTypes.Decimal),
                                            Percentage: e.DataConversion.JSNodeParamConverter.to(e.DataTypes.Decimal.defaultValue, e.DataTypes.DataTypes.Decimal),
                                            MimumFeeAmount: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                                        }, function(h) {
                                            var D = new(t.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnChangeInputTransferConvertedAmount$calculateConvertedTransferFromFeesJSResult"));
                                            return D.feesOut = e.DataConversion.JSNodeParamConverter.from(h.Fees, e.DataTypes.DataTypes.Decimal), D.finalAmountOut = e.DataConversion.JSNodeParamConverter.from(h.FinalAmount, e.DataTypes.DataTypes.Decimal), D.percentageOut = e.DataConversion.JSNodeParamConverter.from(h.Percentage, e.DataTypes.DataTypes.Decimal), D.mimumFeeAmountOut = e.DataConversion.JSNodeParamConverter.from(h.MimumFeeAmount, e.DataTypes.DataTypes.Text), D
                                        }, {
                                            FormatMoney: G.clientActionProxies.formatMoney$Action
                                        }, {})
                                    } finally {
                                        l && l.end()
                                    }
                                }, 1), m.value = e.Logger.startActiveSpan("CalculateExchangeRateTransferTo", function(l) {
                                    l && (l.setAttribute("code.function", "CalculateExchangeRateTransferTo"), l.setAttribute("outsystems.function.key", "89c9d7fd-074f-400e-a33a-65d5448153b0"), l.setAttribute("outsystems.function.owner.name", "tradershub"), l.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), l.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return t.safeExecuteJSNode(Z, "CalculateExchangeRateTransferTo", "OnChangeInputTransferConvertedAmount", {
                                            Amount: e.DataConversion.JSNodeParamConverter.to(y.value.finalAmountOut, e.DataTypes.DataTypes.Decimal),
                                            Rate: e.DataConversion.JSNodeParamConverter.to(a.variables.exchangeRateVar, e.DataTypes.DataTypes.Decimal),
                                            FractionalDigits: e.DataConversion.JSNodeParamConverter.to(a.variables.transferToVar.fractionalDigitsAttr, e.DataTypes.DataTypes.Integer),
                                            ConvertedAmount: e.DataConversion.JSNodeParamConverter.to(e.DataTypes.Decimal.defaultValue, e.DataTypes.DataTypes.Decimal)
                                        }, function(h) {
                                            var D = new(t.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnChangeInputTransferConvertedAmount$calculateExchangeRateTransferToJSResult"));
                                            return D.convertedAmountOut = e.DataConversion.JSNodeParamConverter.from(h.ConvertedAmount, e.DataTypes.DataTypes.Decimal), D
                                        }, {}, {})
                                    } finally {
                                        l && l.end()
                                    }
                                }, 1), a.variables.convertedTransferAmountVar = f.value.convertedTransferAmountOut, a.variables.convertedCalculatedFeesVar = y.value.feesOut, a.variables.convertedFinalAmountVar = y.value.finalAmountOut, a.variables.transferToConvertedAmountVar = m.value.convertedAmountOut, a.variables.feePercentageVar = e.BuiltinFunctions.decimalToInteger(e.BuiltinFunctions.trunc(y.value.percentageOut)), a.variables.minimumFeeAmountVar = y.value.mimumFeeAmountOut, p.value.jSONOut = e.JSONUtils.serializeToJSON(a.variables.transferFromVar, !1, !1), S.value.jSONOut = e.JSONUtils.serializeToJSON(a.variables.transferToVar, !1, !1), e.Flow.executeSequence(function() {
                                    if (a.variables.pOIStatusVar === "verified") return a.flush(), L.exchangeRates$Action("USD", "", n).then(function(l) {
                                        s.value = l
                                    }).then(function() {
                                        e.Logger.startActiveSpan("AmountValidation", function(l) {
                                            l && (l.setAttribute("code.function", "AmountValidation"), l.setAttribute("outsystems.function.key", "b6149d11-2037-450f-b08d-ea57b4010551"), l.setAttribute("outsystems.function.owner.name", "tradershub"), l.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), l.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                            try {
                                                return t.safeExecuteJSNode(te, "AmountValidation", "OnChangeInputTransferConvertedAmount", {
                                                    Rate: e.DataConversion.JSNodeParamConverter.to(a.variables.exchangeRateVar, e.DataTypes.DataTypes.Decimal),
                                                    TransferFrom: e.DataConversion.JSNodeParamConverter.to(p.value.jSONOut, e.DataTypes.DataTypes.Text),
                                                    CurrentCurrency: e.DataConversion.JSNodeParamConverter.to(a.variables.currencySwitcherVar, e.DataTypes.DataTypes.Text),
                                                    DailyTransferLimitRate: e.DataConversion.JSNodeParamConverter.to(s.value.responseOut, e.DataTypes.DataTypes.Text),
                                                    Balance: e.DataConversion.JSNodeParamConverter.to(e.BuiltinFunctions.decimalToText(a.variables.transferFromVar.balanceAttr), e.DataTypes.DataTypes.Text),
                                                    DailyCumulativeAmountTransfers: e.DataConversion.JSNodeParamConverter.to(a.variables.dailyCumulativeAmountTransfersVar, e.DataTypes.DataTypes.Text),
                                                    WidgetId: e.DataConversion.JSNodeParamConverter.to(o.getId("InputTransferExchangeAmount"), e.DataTypes.DataTypes.Text),
                                                    TransferTo: e.DataConversion.JSNodeParamConverter.to(S.value.jSONOut, e.DataTypes.DataTypes.Text),
                                                    TransferAmount: e.DataConversion.JSNodeParamConverter.to(a.variables.transferAmountVar, e.DataTypes.DataTypes.Decimal)
                                                }, function(h) {}, {
                                                    FormatMoney: G.clientActionProxies.formatMoney$Action,
                                                    YupValidate: z.clientActionProxies.yupValidate$Action
                                                }, {})
                                            } finally {
                                                l && l.end()
                                            }
                                        }, 1)
                                    });
                                    e.Logger.startActiveSpan("InputValidation", function(l) {
                                        l && (l.setAttribute("code.function", "InputValidation"), l.setAttribute("outsystems.function.key", "688f32ec-a586-4e87-9add-dfa7ae75eed1"), l.setAttribute("outsystems.function.owner.name", "tradershub"), l.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), l.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                        try {
                                            return t.safeExecuteJSNode(X, "InputValidation", "OnChangeInputTransferConvertedAmount", {
                                                Balance: e.DataConversion.JSNodeParamConverter.to(e.BuiltinFunctions.decimalToText(a.variables.transferFromVar.balanceAttr), e.DataTypes.DataTypes.Text),
                                                LifetimeTransferLimit: e.DataConversion.JSNodeParamConverter.to(a.variables.lifetimeTransferLimitVar, e.DataTypes.DataTypes.Text),
                                                TransferToCurrency: e.DataConversion.JSNodeParamConverter.to(a.variables.transferToVar.currencyAttr, e.DataTypes.DataTypes.Text),
                                                WidgetId: e.DataConversion.JSNodeParamConverter.to(o.getId("InputTransferExchangeAmount"), e.DataTypes.DataTypes.Text),
                                                TransferFromDecimalPlaces: e.DataConversion.JSNodeParamConverter.to(a.variables.transferFromVar.fractionalDigitsAttr, e.DataTypes.DataTypes.Integer),
                                                TransferAmount: e.DataConversion.JSNodeParamConverter.to(a.variables.transferAmountVar, e.DataTypes.DataTypes.Decimal),
                                                TransferFromCurrency: e.DataConversion.JSNodeParamConverter.to(a.variables.transferFromVar.currencyAttr, e.DataTypes.DataTypes.Text),
                                                IsTransferToCrypto: e.DataConversion.JSNodeParamConverter.to(a.variables.transferToVar.isCryptoAttr, e.DataTypes.DataTypes.Boolean),
                                                IsTransferFromCrypto: e.DataConversion.JSNodeParamConverter.to(a.variables.transferFromVar.isCryptoAttr, e.DataTypes.DataTypes.Boolean),
                                                CurrentCurrency: e.DataConversion.JSNodeParamConverter.to(a.variables.currencySwitcherVar, e.DataTypes.DataTypes.Text),
                                                Rate: e.DataConversion.JSNodeParamConverter.to(a.variables.exchangeRateVar, e.DataTypes.DataTypes.Decimal),
                                                MinTransfer: e.DataConversion.JSNodeParamConverter.to(a.variables.transferFromVar.minTransferAttr, e.DataTypes.DataTypes.Decimal),
                                                TransferToDecimalPlaces: e.DataConversion.JSNodeParamConverter.to(e.BuiltinFunctions.integerToDecimal(a.variables.transferToVar.fractionalDigitsAttr), e.DataTypes.DataTypes.Decimal)
                                            }, function(h) {}, {
                                                FormatMoney: G.clientActionProxies.formatMoney$Action,
                                                YupValidate: z.clientActionProxies.yupValidate$Action
                                            }, {})
                                        } finally {
                                            l && l.end()
                                        }
                                    }, 1)
                                })
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__onChangeInputTransferConvertedAmount$Action
        }
        set _onChangeInputTransferConvertedAmount$Action(n) {
            this.__onChangeInputTransferConvertedAmount$Action = n
        }
        get _onRender$Action() {
            return this.hasOwnProperty("__onRender$Action") || (this.__onRender$Action = function(n) {
                var a = this.model,
                    t = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("OnRender", function(r) {
                    r && (r.setAttribute("code.function", "OnRender"), r.setAttribute("outsystems.function.key", "6de5d60d-8ba8-4153-990b-872b5e331dbf"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnRender"), n = t.callContext(n), o.getId("InputTransferAmount") !== e.BuiltinFunctions.nullIdentifier().toString() && (e.Logger.startActiveSpan("RemoveDefaultStylingInInput", function(s) {
                            s && (s.setAttribute("code.function", "RemoveDefaultStylingInInput"), s.setAttribute("outsystems.function.key", "1f54b175-a3d0-45a2-8066-5da0a11f2816"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(ne, "RemoveDefaultStylingInInput", "OnRender", {
                                    InputId: e.DataConversion.JSNodeParamConverter.to(o.getId("InputTransferAmount"), e.DataTypes.DataTypes.Text)
                                }, function(f) {}, {}, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1), o.getId("InputTransferExchangeAmount") !== e.BuiltinFunctions.nullIdentifier().toString() && e.Logger.startActiveSpan("RemoveDefaultStylingInInput2", function(s) {
                            s && (s.setAttribute("code.function", "RemoveDefaultStylingInInput2"), s.setAttribute("outsystems.function.key", "90224756-50d7-4881-83b9-d821cb7a6c4c"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(oe, "RemoveDefaultStylingInInput2", "OnRender", {
                                    InputId: e.DataConversion.JSNodeParamConverter.to(o.getId("InputTransferExchangeAmount"), e.DataTypes.DataTypes.Text)
                                }, function(f) {}, {}, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1))
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onRender$Action
        }
        set _onRender$Action(n) {
            this.__onRender$Action = n
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(n) {
                var a = this.model,
                    t = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("OnReady", function(r) {
                    return r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "70f9f4ed-810e-4e4b-894a-c51d6f293604"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), n = t.callContext(n);
                        var s = new e.DataTypes.VariableHolder,
                            f = new e.DataTypes.VariableHolder,
                            y = new e.DataTypes.VariableHolder,
                            m = new e.DataTypes.VariableHolder,
                            v = new e.DataTypes.VariableHolder,
                            g = new e.DataTypes.VariableHolder,
                            p = new e.DataTypes.VariableHolder,
                            S = new e.DataTypes.VariableHolder,
                            l = new e.DataTypes.VariableHolder,
                            h = new e.DataTypes.VariableHolder,
                            D = new e.DataTypes.VariableHolder,
                            C = new e.DataTypes.VariableHolder,
                            F = new e.DataTypes.VariableHolder,
                            E = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                            I = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                            V = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(B))),
                            O = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(e.DataTypes.TextList))),
                            x = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(B))),
                            R = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(U))),
                            d = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(j)));
                        return e.Flow.executeAsyncFlow(function() {
                            return a.flush(), L.sendAuthorize$Action(!1, n).then(function(c) {
                                s.value = c
                            }).then(function() {
                                return a.flush(), L.getActiveWallet$Action(n).then(function(c) {
                                    p.value = c
                                })
                            }).then(function() {
                                return a.variables.activeWalletVar = p.value.activeWalletOut, a.variables.isLoadingVar = !0, a.variables.showInitialTransferModalVar = !0, a.flush(), L.getAccountStatus2$Action(n).then(function(c) {
                                    v.value = c
                                })
                            }).then(function() {
                                a.variables.pOIStatusVar = v.value.responseOut.getAccountStatusAttr.authenticationAttr.identityAttr.statusAttr, I.value.jSONOut = e.JSONUtils.serializeToJSON(v.value.responseOut, !1, !1), h.value = e.Logger.startActiveSpan("CashierLockErrors", function(c) {
                                    c && (c.setAttribute("code.function", "CashierLockErrors"), c.setAttribute("outsystems.function.key", "9748aa23-94ed-4c79-b41a-6c17fd9affc0"), c.setAttribute("outsystems.function.owner.name", "tradershub"), c.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return t.safeExecuteJSNode(ue, "CashierLockErrors", "OnReady", {
                                            AccountDetails: e.DataConversion.JSNodeParamConverter.to(I.value.jSONOut, e.DataTypes.DataTypes.Text),
                                            IsCashierLockStatus: e.DataConversion.JSNodeParamConverter.to(!1, e.DataTypes.DataTypes.Boolean),
                                            IsSystemMaintenance: e.DataConversion.JSNodeParamConverter.to(!1, e.DataTypes.DataTypes.Boolean)
                                        }, function(A) {
                                            var T = new(t.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnReady$cashierLockErrorsJSResult"));
                                            return T.isCashierLockStatusOut = e.DataConversion.JSNodeParamConverter.from(A.IsCashierLockStatus, e.DataTypes.DataTypes.Boolean), T.isSystemMaintenanceOut = e.DataConversion.JSNodeParamConverter.from(A.IsSystemMaintenance, e.DataTypes.DataTypes.Boolean), T
                                        }, {}, {})
                                    } finally {
                                        c && c.end()
                                    }
                                }, 1)
                            }).then(function() {
                                return e.Flow.executeSequence(function() {
                                    if (h.value.isSystemMaintenanceOut) a.variables.isLoadingVar = !1, a.variables.showContentVar = "IsSystemMaintenance";
                                    else return e.Flow.executeSequence(function() {
                                        if (h.value.isCashierLockStatusOut && J.getAccountType() === "real") a.variables.isLoadingVar = !1, a.variables.showContentVar = "CashierLock";
                                        else return l.value = e.Logger.startActiveSpan("TransferBetweenAccountsPayload", function(c) {
                                            c && (c.setAttribute("code.function", "TransferBetweenAccountsPayload"), c.setAttribute("outsystems.function.key", "20f4e938-8bf2-4049-a61e-74af0dbb4518"), c.setAttribute("outsystems.function.owner.name", "tradershub"), c.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                            try {
                                                return t.safeExecuteJSNode(se, "TransferBetweenAccountsPayload", "OnReady", {
                                                    LoginId: e.DataConversion.JSNodeParamConverter.to(a.variables.activeWalletVar.loginidAttr, e.DataTypes.DataTypes.Text),
                                                    Payload: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                                                }, function(A) {
                                                    var T = new(t.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnReady$transferBetweenAccountsPayloadJSResult"));
                                                    return T.payloadOut = e.DataConversion.JSNodeParamConverter.from(A.Payload, e.DataTypes.DataTypes.Text), T
                                                }, {}, {})
                                            } finally {
                                                c && c.end()
                                            }
                                        }, 1), a.flush(), L.derivApiSendMessage$Action(l.value.payloadOut, "transfer_between_accounts", n).then(function(c) {
                                            g.value = c
                                        }).then(function() {
                                            return e.Flow.executeSequence(function() {
                                                if (g.value.isErrorOut) e.FeedbackMessageService.showFeedbackMessage(g.value.errorMessageOut, 3), a.variables.isLoadingVar = !1;
                                                else return D.value = e.Logger.startActiveSpan("CheckHasTransferAccountsWithFunds", function(c) {
                                                    c && (c.setAttribute("code.function", "CheckHasTransferAccountsWithFunds"), c.setAttribute("outsystems.function.key", "dcb0bfd1-d6f5-42d0-9807-97480e7a50b4"), c.setAttribute("outsystems.function.owner.name", "tradershub"), c.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                                    try {
                                                        return t.safeExecuteJSNode(le, "CheckHasTransferAccountsWithFunds", "OnReady", {
                                                            AccountsList: e.DataConversion.JSNodeParamConverter.to(g.value.responseOut, e.DataTypes.DataTypes.Text),
                                                            Currency: e.DataConversion.JSNodeParamConverter.to(a.variables.activeWalletVar.currencyAttr, e.DataTypes.DataTypes.Text),
                                                            hasTransferAccountsWithFunds: e.DataConversion.JSNodeParamConverter.to(!1, e.DataTypes.DataTypes.Boolean)
                                                        }, function(A) {
                                                            var T = new(t.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnReady$checkHasTransferAccountsWithFundsJSResult"));
                                                            return T.hasTransferAccountsWithFundsOut = e.DataConversion.JSNodeParamConverter.from(A.hasTransferAccountsWithFunds, e.DataTypes.DataTypes.Boolean), T
                                                        }, {}, {})
                                                    } finally {
                                                        c && c.end()
                                                    }
                                                }, 1), e.Flow.executeSequence(function() {
                                                    if (D.value.hasTransferAccountsWithFundsOut) return R.value.dataOut = e.JSONUtils.deserializeFromJSON(g.value.responseOut, U, !1), e.Flow.executeSequence(function() {
                                                        if (R.value.dataOut.accountsAttr.length < 2) a.variables.isLoadingVar = !1, a.variables.showContentVar = "NoTradingAccount";
                                                        else return F.value = e.Logger.startActiveSpan("LimitPayload", function(c) {
                                                            c && (c.setAttribute("code.function", "LimitPayload"), c.setAttribute("outsystems.function.key", "f6e15c87-b94e-4834-b17d-1bfaffc5f0d7"), c.setAttribute("outsystems.function.owner.name", "tradershub"), c.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                                            try {
                                                                return t.safeExecuteJSNode(fe, "LimitPayload", "OnReady", {
                                                                    LoginId: e.DataConversion.JSNodeParamConverter.to(a.variables.activeWalletVar.loginidAttr, e.DataTypes.DataTypes.Text),
                                                                    Payload: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                                                                }, function(A) {
                                                                    var T = new(t.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnReady$limitPayloadJSResult"));
                                                                    return T.payloadOut = e.DataConversion.JSNodeParamConverter.from(A.Payload, e.DataTypes.DataTypes.Text), T
                                                                }, {}, {})
                                                            } finally {
                                                                c && c.end()
                                                            }
                                                        }, 1), a.flush(), L.derivApiSendMessage$Action(F.value.payloadOut, "get_limits", n).then(function(c) {
                                                            f.value = c
                                                        }).then(function() {
                                                            f.value.isErrorOut ? (e.FeedbackMessageService.showFeedbackMessage(g.value.errorMessageOut, 3), a.variables.isLoadingVar = !1) : (d.value.dataOut = e.JSONUtils.deserializeFromJSON(f.value.responseOut, j, !1), a.variables.dailyTransferLimitCountVar = d.value.dataOut, C.value = e.Logger.startActiveSpan("GetLimitsData", function(c) {
                                                                c && (c.setAttribute("code.function", "GetLimitsData"), c.setAttribute("outsystems.function.key", "eb85f3ed-9da7-4007-9603-5a4d3b3289ce"), c.setAttribute("outsystems.function.owner.name", "tradershub"), c.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                                                try {
                                                                    return t.safeExecuteJSNode(ce, "GetLimitsData", "OnReady", {
                                                                        GetLimits: e.DataConversion.JSNodeParamConverter.to(f.value.responseOut, e.DataTypes.DataTypes.Text),
                                                                        DailyTransferAmount: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                                                        DailyTransferCount: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                                                        LifetimeTransfers: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                                                        FiatToCryptoAvailableLimit: e.DataConversion.JSNodeParamConverter.to(e.DataTypes.Decimal.defaultValue, e.DataTypes.DataTypes.Decimal),
                                                                        CryptoToCryptoAvailableLimit: e.DataConversion.JSNodeParamConverter.to(e.DataTypes.Decimal.defaultValue, e.DataTypes.DataTypes.Decimal),
                                                                        CryptoToFiatAvailableLimit: e.DataConversion.JSNodeParamConverter.to(e.DataTypes.Decimal.defaultValue, e.DataTypes.DataTypes.Decimal),
                                                                        FiatToCryptoAllowedLimit: e.DataConversion.JSNodeParamConverter.to(e.DataTypes.Decimal.defaultValue, e.DataTypes.DataTypes.Decimal),
                                                                        CryptoToCryptoAllowedLimit: e.DataConversion.JSNodeParamConverter.to(e.DataTypes.Decimal.defaultValue, e.DataTypes.DataTypes.Decimal),
                                                                        CryptoToFiatAllowedLimit: e.DataConversion.JSNodeParamConverter.to(e.DataTypes.Decimal.defaultValue, e.DataTypes.DataTypes.Decimal),
                                                                        VirtualDailyAvailableLimits: e.DataConversion.JSNodeParamConverter.to(e.DataTypes.Decimal.defaultValue, e.DataTypes.DataTypes.Decimal),
                                                                        DTradeDailyAvailableLimits: e.DataConversion.JSNodeParamConverter.to(e.DataTypes.Decimal.defaultValue, e.DataTypes.DataTypes.Decimal),
                                                                        MT5DailyAvailableLimits: e.DataConversion.JSNodeParamConverter.to(e.DataTypes.Decimal.defaultValue, e.DataTypes.DataTypes.Decimal),
                                                                        VirtualDailyAllowedLimits: e.DataConversion.JSNodeParamConverter.to(e.DataTypes.Decimal.defaultValue, e.DataTypes.DataTypes.Decimal),
                                                                        DTradeDailyAllowedLimits: e.DataConversion.JSNodeParamConverter.to(e.DataTypes.Decimal.defaultValue, e.DataTypes.DataTypes.Decimal),
                                                                        MT5DailyAllowedLimits: e.DataConversion.JSNodeParamConverter.to(e.DataTypes.Decimal.defaultValue, e.DataTypes.DataTypes.Decimal),
                                                                        WalletDailyAllowedLimits: e.DataConversion.JSNodeParamConverter.to(e.DataTypes.Decimal.defaultValue, e.DataTypes.DataTypes.Decimal),
                                                                        WalletDailyAvailableLimits: e.DataConversion.JSNodeParamConverter.to(e.DataTypes.Decimal.defaultValue, e.DataTypes.DataTypes.Decimal),
                                                                        DxtradeDailyAllowedLimits: e.DataConversion.JSNodeParamConverter.to(e.DataTypes.Decimal.defaultValue, e.DataTypes.DataTypes.Decimal),
                                                                        DxtradeDailyAvailableLimits: e.DataConversion.JSNodeParamConverter.to(e.DataTypes.Decimal.defaultValue, e.DataTypes.DataTypes.Decimal)
                                                                    }, function(A) {
                                                                        var T = new(t.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnReady$getLimitsDataJSResult"));
                                                                        return T.dailyTransferAmountOut = e.DataConversion.JSNodeParamConverter.from(A.DailyTransferAmount, e.DataTypes.DataTypes.Text), T.dailyTransferCountOut = e.DataConversion.JSNodeParamConverter.from(A.DailyTransferCount, e.DataTypes.DataTypes.Text), T.lifetimeTransfersOut = e.DataConversion.JSNodeParamConverter.from(A.LifetimeTransfers, e.DataTypes.DataTypes.Text), T.fiatToCryptoAvailableLimitOut = e.DataConversion.JSNodeParamConverter.from(A.FiatToCryptoAvailableLimit, e.DataTypes.DataTypes.Decimal), T.cryptoToCryptoAvailableLimitOut = e.DataConversion.JSNodeParamConverter.from(A.CryptoToCryptoAvailableLimit, e.DataTypes.DataTypes.Decimal), T.cryptoToFiatAvailableLimitOut = e.DataConversion.JSNodeParamConverter.from(A.CryptoToFiatAvailableLimit, e.DataTypes.DataTypes.Decimal), T.fiatToCryptoAllowedLimitOut = e.DataConversion.JSNodeParamConverter.from(A.FiatToCryptoAllowedLimit, e.DataTypes.DataTypes.Decimal), T.cryptoToCryptoAllowedLimitOut = e.DataConversion.JSNodeParamConverter.from(A.CryptoToCryptoAllowedLimit, e.DataTypes.DataTypes.Decimal), T.cryptoToFiatAllowedLimitOut = e.DataConversion.JSNodeParamConverter.from(A.CryptoToFiatAllowedLimit, e.DataTypes.DataTypes.Decimal), T.virtualDailyAvailableLimitsOut = e.DataConversion.JSNodeParamConverter.from(A.VirtualDailyAvailableLimits, e.DataTypes.DataTypes.Decimal), T.dTradeDailyAvailableLimitsOut = e.DataConversion.JSNodeParamConverter.from(A.DTradeDailyAvailableLimits, e.DataTypes.DataTypes.Decimal), T.mT5DailyAvailableLimitsOut = e.DataConversion.JSNodeParamConverter.from(A.MT5DailyAvailableLimits, e.DataTypes.DataTypes.Decimal), T.virtualDailyAllowedLimitsOut = e.DataConversion.JSNodeParamConverter.from(A.VirtualDailyAllowedLimits, e.DataTypes.DataTypes.Decimal), T.dTradeDailyAllowedLimitsOut = e.DataConversion.JSNodeParamConverter.from(A.DTradeDailyAllowedLimits, e.DataTypes.DataTypes.Decimal), T.mT5DailyAllowedLimitsOut = e.DataConversion.JSNodeParamConverter.from(A.MT5DailyAllowedLimits, e.DataTypes.DataTypes.Decimal), T.walletDailyAllowedLimitsOut = e.DataConversion.JSNodeParamConverter.from(A.WalletDailyAllowedLimits, e.DataTypes.DataTypes.Decimal), T.walletDailyAvailableLimitsOut = e.DataConversion.JSNodeParamConverter.from(A.WalletDailyAvailableLimits, e.DataTypes.DataTypes.Decimal), T.dxtradeDailyAllowedLimitsOut = e.DataConversion.JSNodeParamConverter.from(A.DxtradeDailyAllowedLimits, e.DataTypes.DataTypes.Decimal), T.dxtradeDailyAvailableLimitsOut = e.DataConversion.JSNodeParamConverter.from(A.DxtradeDailyAvailableLimits, e.DataTypes.DataTypes.Decimal), T
                                                                    }, {}, {})
                                                                } finally {
                                                                    c && c.end()
                                                                }
                                                            }, 1), E.value.jSONOut = e.JSONUtils.serializeToJSON(a.variables.activeWalletVar, !1, !1), S.value = e.Logger.startActiveSpan("GetAccountList", function(c) {
                                                                c && (c.setAttribute("code.function", "GetAccountList"), c.setAttribute("outsystems.function.key", "0730617c-32fb-4a6e-9f87-e4739048c743"), c.setAttribute("outsystems.function.owner.name", "tradershub"), c.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                                                try {
                                                                    return t.safeExecuteJSNode(ie, "GetAccountList", "OnReady", {
                                                                        Accounts: e.DataConversion.JSNodeParamConverter.to(g.value.responseOut, e.DataTypes.DataTypes.Text),
                                                                        AccountType: e.DataConversion.JSNodeParamConverter.to(J.getAccountType(), e.DataTypes.DataTypes.Text),
                                                                        ActiveWallet: e.DataConversion.JSNodeParamConverter.to(E.value.jSONOut, e.DataTypes.DataTypes.Text),
                                                                        WebsiteStatus: e.DataConversion.JSNodeParamConverter.to(J.getRawWebsiteStatusResponse(), e.DataTypes.DataTypes.Text),
                                                                        GetLimit: e.DataConversion.JSNodeParamConverter.to(f.value.responseOut, e.DataTypes.DataTypes.Text),
                                                                        WalletAccounts: e.DataConversion.JSNodeParamConverter.to(J.getWalletList(), e.DataTypes.DataTypes.Text),
                                                                        TransferAccountList: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                                                        TransferAccountKeys: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                                                        TransferFromAccountList: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                                                                    }, function(A) {
                                                                        var T = new(t.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnReady$getAccountListJSResult"));
                                                                        return T.transferAccountListOut = e.DataConversion.JSNodeParamConverter.from(A.TransferAccountList, e.DataTypes.DataTypes.Text), T.transferAccountKeysOut = e.DataConversion.JSNodeParamConverter.from(A.TransferAccountKeys, e.DataTypes.DataTypes.Text), T.transferFromAccountListOut = e.DataConversion.JSNodeParamConverter.from(A.TransferFromAccountList, e.DataTypes.DataTypes.Text), T
                                                                    }, {
                                                                        GetIcon: L.clientActionProxies.getIcon$Action
                                                                    }, {})
                                                                } finally {
                                                                    c && c.end()
                                                                }
                                                            }, 1), O.value.dataOut = e.JSONUtils.deserializeFromJSON(S.value.transferAccountKeysOut, e.DataTypes.TextList, !1), x.value.dataOut = e.JSONUtils.deserializeFromJSON(S.value.transferAccountListOut, B, !1), V.value.dataOut = e.JSONUtils.deserializeFromJSON(S.value.transferFromAccountListOut, B, !1), a.variables.transferAccountListVar = x.value.dataOut, a.variables.transferAccountKeyVar = O.value.dataOut, a.variables.transferFromAccountListVar = V.value.dataOut, a.variables.dailyCumulativeAmountTransfersVar = C.value.dailyTransferAmountOut, a.variables.dailyTransfersCountVar = C.value.dailyTransferCountOut, a.variables.isLoadingVar = !1, a.variables.lifetimeTransferLimitVar = C.value.lifetimeTransfersOut, a.variables.fullTransferAccountListVar = x.value.dataOut, a.variables.fullTransferFromAccountListVar = V.value.dataOut, a.variables.showContentVar = "TransferScreen", a.variables.cryptoToFiatAvailableLimitVar = C.value.cryptoToFiatAvailableLimitOut, a.variables.cryptoToCryptoAvailableLimitVar = C.value.cryptoToCryptoAvailableLimitOut, a.variables.fiatToCryptoAvailableLimitVar = C.value.fiatToCryptoAvailableLimitOut, a.variables.cryptoToFiatAllowedLimitVar = C.value.cryptoToFiatAllowedLimitOut, a.variables.fiatToCryptoAllowedLimitVar = C.value.fiatToCryptoAllowedLimitOut, a.variables.cryptoToCryptoAllowedLimitVar = C.value.cryptoToCryptoAllowedLimitOut, a.variables.virtualDailyAllowedLimitVar = C.value.virtualDailyAllowedLimitsOut, a.variables.dtradeDailyAllowedLimitVar = C.value.dTradeDailyAllowedLimitsOut, a.variables.mT5DailyAllowedLimitVar = C.value.mT5DailyAllowedLimitsOut, a.variables.virtualDailyAvailableLimitVar = C.value.virtualDailyAvailableLimitsOut, a.variables.dtradeDailyAvailableLimitVar = C.value.dTradeDailyAvailableLimitsOut, a.variables.mT5DailyAvailableLimitVar = C.value.mT5DailyAvailableLimitsOut, a.variables.dxtradeDailyAllowedLimitVar = C.value.dxtradeDailyAllowedLimitsOut, a.variables.dxtradeDailyAvailableLimitVar = C.value.dxtradeDailyAvailableLimitsOut, a.variables.walletDailyAllowedLimitVar = C.value.walletDailyAllowedLimitsOut, a.variables.walletDailyAvailableLimitVar = C.value.walletDailyAvailableLimitsOut, a.variables.toIn !== e.BuiltinFunctions.nullTextIdentifier() && (y.value = e.SystemActions.listFilter(a.variables.fullTransferFromAccountListVar, function(c) {
                                                                return c.loginidAttr === a.variables.toIn
                                                            }, n), m.value = e.SystemActions.listFilter(a.variables.fullTransferFromAccountListVar, function(c) {
                                                                return c.loginidAttr === p.value.activeWalletOut.loginidAttr
                                                            }, n), a.variables.showInitialTransferModalVar = !1, a.variables.transferFromVar = y.value.filteredListOut.getCurrent(n.iterationContext), a.variables.transferToVar = m.value.filteredListOut.getCurrent(n.iterationContext), a.variables.toIn = e.BuiltinFunctions.nullIdentifier().toString()))
                                                        })
                                                    });
                                                    a.variables.showContentVar = "NoFundsAvailable", a.variables.isLoadingVar = !1
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(n) {
            this.__onReady$Action = n
        }
        get _onCloseTransferToModal$Action() {
            return this.hasOwnProperty("__onCloseTransferToModal$Action") || (this.__onCloseTransferToModal$Action = function(n) {
                var a = this.model,
                    t = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("OnCloseTransferToModal", function(r) {
                    r && (r.setAttribute("code.function", "OnCloseTransferToModal"), r.setAttribute("outsystems.function.key", "95b31faf-4323-4311-8b03-2054d3f979a1"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnCloseTransferToModal"), n = t.callContext(n), a.variables.isTransferToOpenVar = !1
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onCloseTransferToModal$Action
        }
        set _onCloseTransferToModal$Action(n) {
            this.__onCloseTransferToModal$Action = n
        }
        get _exchangeRateSwitcherOnChange$Action() {
            return this.hasOwnProperty("__exchangeRateSwitcherOnChange$Action") || (this.__exchangeRateSwitcherOnChange$Action = function(n) {
                var a = this.model,
                    t = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("ExchangeRateSwitcherOnChange", function(r) {
                    r && (r.setAttribute("code.function", "ExchangeRateSwitcherOnChange"), r.setAttribute("outsystems.function.key", "99831c2e-6286-4e9f-a59b-74a3b90d4f1a"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("ExchangeRateSwitcherOnChange"), n = t.callContext(n), a.variables.transferAmountVar = e.BuiltinFunctions.integerToDecimal(0), a.variables.transferFromConvertedAmountVar = e.BuiltinFunctions.integerToDecimal(0), a.widgets.get(o.getId("InputTransferExchangeAmount")).validAttr = !0, a.widgets.get(o.getId("InputTransferExchangeAmount")).validationMessageAttr = e.BuiltinFunctions.nullTextIdentifier()
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__exchangeRateSwitcherOnChange$Action
        }
        set _exchangeRateSwitcherOnChange$Action(n) {
            this.__exchangeRateSwitcherOnChange$Action = n
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(n) {
                var a = this.model,
                    t = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("OnDestroy", function(r) {
                    r && (r.setAttribute("code.function", "OnDestroy"), r.setAttribute("outsystems.function.key", "a3d37f05-250a-4c86-b236-6d713cf401f0"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnDestroy"), n = t.callContext(n), e.Logger.startActiveSpan("JSDisposeTimerExchangeRate", function(s) {
                            s && (s.setAttribute("code.function", "JSDisposeTimerExchangeRate"), s.setAttribute("outsystems.function.key", "6087b362-6d11-44bb-8104-90e978fa349a"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(de, "JSDisposeTimerExchangeRate", "OnDestroy", null, function(f) {}, {}, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(n) {
            this.__onDestroy$Action = n
        }
        get _onClickTransferToAccount$Action() {
            return this.hasOwnProperty("__onClickTransferToAccount$Action") || (this.__onClickTransferToAccount$Action = function(n, a) {
                var t = this.model,
                    o = this.controller,
                    r = this.idService;
                return e.Logger.startActiveSpan("OnClickTransferToAccount", function(s) {
                    s && (s.setAttribute("code.function", "OnClickTransferToAccount"), s.setAttribute("outsystems.function.key", "b2292fd3-5c28-4f25-8cc7-81ba6503e2dc"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("OnClickTransferToAccount"), a = o.callContext(a);
                        var f = new e.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnClickTransferToAccount$vars")));
                        f.value.accountDetailsInLocal = n.clone();
                        var y = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType);
                        t.variables.transferToVar = f.value.accountDetailsInLocal, t.variables.isTransferToOpenVar = !1, t.widgets.get(r.getId("InputTransferExchangeAmount")).validAttr = !0, t.widgets.get(r.getId("InputTransferExchangeAmount")).validationMessageAttr = e.BuiltinFunctions.nullTextIdentifier(), t.variables.transferFromConvertedAmountVar = e.BuiltinFunctions.integerToDecimal(0), t.variables.transferAmountVar = e.BuiltinFunctions.integerToDecimal(0), t.variables.convertedTransferAmountVar = e.BuiltinFunctions.integerToDecimal(0), t.variables.convertedCalculatedFeesVar = e.BuiltinFunctions.integerToDecimal(0), t.variables.transferToConvertedAmountVar = e.BuiltinFunctions.integerToDecimal(0), t.widgets.get(r.getId("InputTransferAmount")).validAttr = !0, t.widgets.get(r.getId("InputTransferAmount")).validationMessageAttr = e.BuiltinFunctions.nullTextIdentifier(), t.widgets.get(r.getId("InputTransferExchangeAmount")).validAttr = !0, t.widgets.get(r.getId("InputTransferExchangeAmount")).validationMessageAttr = e.BuiltinFunctions.nullTextIdentifier(), y.value.jSONOut = e.JSONUtils.serializeToJSON(f.value.accountDetailsInLocal, !1, !1), t.variables.transferFromVar.accountCategoryAttr === "Wallets" && t.variables.transferToVar.accountCategoryAttr === "Wallets" ? (t.variables.showCurrencySwitcherVar = !0, t.variables.currencySwitcherVar = t.variables.transferFromVar.currencyAttr, t.variables.showInitialTransferModalVar = !1) : (t.variables.showCurrencySwitcherVar = !1, t.variables.showInitialTransferModalVar = !1)
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__onClickTransferToAccount$Action
        }
        set _onClickTransferToAccount$Action(n) {
            this.__onClickTransferToAccount$Action = n
        }
        get _onChangeInputTransferAmount$Action() {
            return this.hasOwnProperty("__onChangeInputTransferAmount$Action") || (this.__onChangeInputTransferAmount$Action = function(n) {
                var a = this.model,
                    t = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("OnChangeInputTransferAmount", function(r) {
                    return r && (r.setAttribute("code.function", "OnChangeInputTransferAmount"), r.setAttribute("outsystems.function.key", "b5c5135a-0d69-44c8-afe1-91666e8ca7ec"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnChangeInputTransferAmount"), n = t.callContext(n);
                        var s = new e.DataTypes.VariableHolder;
                        return e.Flow.executeAsyncFlow(function() {
                            return e.Flow.executeSequence(function() {
                                if (e.BuiltinFunctions.length(e.BuiltinFunctions.decimalToText(a.variables.transferAmountVar)) < 16) return a.flush(), L.exchangeRates$Action("USD", "", n).then(function(f) {
                                    s.value = f
                                }).then(function() {
                                    e.Logger.startActiveSpan("AmountValidation", function(f) {
                                        f && (f.setAttribute("code.function", "AmountValidation"), f.setAttribute("outsystems.function.key", "424ec2b6-92e9-42d1-9709-64bcf7f3adb6"), f.setAttribute("outsystems.function.owner.name", "tradershub"), f.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), f.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                        try {
                                            return t.safeExecuteJSNode(ye, "AmountValidation", "OnChangeInputTransferAmount", {
                                                DailyCumulativeAmountTransfers: e.DataConversion.JSNodeParamConverter.to(a.variables.dailyCumulativeAmountTransfersVar, e.DataTypes.DataTypes.Text),
                                                AccountType: e.DataConversion.JSNodeParamConverter.to(J.getAccountType(), e.DataTypes.DataTypes.Text),
                                                Rate: e.DataConversion.JSNodeParamConverter.to(s.value.responseOut, e.DataTypes.DataTypes.Text),
                                                TransferAmount: e.DataConversion.JSNodeParamConverter.to(a.variables.transferAmountVar, e.DataTypes.DataTypes.Decimal),
                                                WidgetId: e.DataConversion.JSNodeParamConverter.to(o.getId("InputTransferAmount"), e.DataTypes.DataTypes.Text),
                                                TransferToName: e.DataConversion.JSNodeParamConverter.to(a.variables.transferToVar.nameAttr, e.DataTypes.DataTypes.Text),
                                                TransferToLoginId: e.DataConversion.JSNodeParamConverter.to(a.variables.transferToVar.loginidAttr, e.DataTypes.DataTypes.Text),
                                                Currency: e.DataConversion.JSNodeParamConverter.to(a.variables.transferFromVar.currencyAttr, e.DataTypes.DataTypes.Text),
                                                Balance: e.DataConversion.JSNodeParamConverter.to(e.BuiltinFunctions.decimalToText(a.variables.transferFromVar.balanceAttr), e.DataTypes.DataTypes.Text),
                                                TransferFromLoginId: e.DataConversion.JSNodeParamConverter.to(a.variables.transferFromVar.loginidAttr, e.DataTypes.DataTypes.Text),
                                                MinTransfer: e.DataConversion.JSNodeParamConverter.to(a.variables.transferFromVar.minTransferAttr, e.DataTypes.DataTypes.Decimal),
                                                TransferFromName: e.DataConversion.JSNodeParamConverter.to(a.variables.transferFromVar.nameAttr, e.DataTypes.DataTypes.Text)
                                            }, function(y) {}, {
                                                FormatMoney: G.clientActionProxies.formatMoney$Action,
                                                YupValidate: z.clientActionProxies.yupValidate$Action
                                            }, {})
                                        } finally {
                                            f && f.end()
                                        }
                                    }, 1)
                                });
                                a.variables.transferAmountVar = e.BuiltinFunctions.textToDecimal(e.BuiltinFunctions.substr(e.BuiltinFunctions.decimalToText(a.variables.transferAmountVar), 0, 15))
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__onChangeInputTransferAmount$Action
        }
        set _onChangeInputTransferAmount$Action(n) {
            this.__onChangeInputTransferAmount$Action = n
        }
        get _walletActionScreenOnClick$Action() {
            return this.hasOwnProperty("__walletActionScreenOnClick$Action") || (this.__walletActionScreenOnClick$Action = function(n) {
                var a = this.model,
                    t = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("WalletActionScreenOnClick", function(r) {
                    r && (r.setAttribute("code.function", "WalletActionScreenOnClick"), r.setAttribute("outsystems.function.key", "c53fa254-02a3-4e2a-b022-56ce46ec279d"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("WalletActionScreenOnClick"), n = t.callContext(n), e.Navigation.navigateTo(e.Navigation.generateScreenURL("tradershub", "wallets/deposit", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), n, !0)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__walletActionScreenOnClick$Action
        }
        set _walletActionScreenOnClick$Action(n) {
            this.__walletActionScreenOnClick$Action = n
        }
        get _onClickTransferFromAccount$Action() {
            return this.hasOwnProperty("__onClickTransferFromAccount$Action") || (this.__onClickTransferFromAccount$Action = function(n, a) {
                var t = this.model,
                    o = this.controller,
                    r = this.idService;
                return e.Logger.startActiveSpan("OnClickTransferFromAccount", function(s) {
                    s && (s.setAttribute("code.function", "OnClickTransferFromAccount"), s.setAttribute("outsystems.function.key", "c79debf3-1bc1-417d-992e-f5e173a379b9"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("OnClickTransferFromAccount"), a = o.callContext(a);
                        var f = new e.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnClickTransferFromAccount$vars")));
                        f.value.accountDetailsInLocal = n.clone();
                        var y = new e.DataTypes.VariableHolder,
                            m = new e.DataTypes.VariableHolder;
                        t.variables.transferFromVar = f.value.accountDetailsInLocal, t.widgets.get(r.getId("InputTransferExchangeAmount")).validAttr = !0, t.widgets.get(r.getId("InputTransferExchangeAmount")).validationMessageAttr = e.BuiltinFunctions.nullTextIdentifier(), t.variables.transferFromConvertedAmountVar = e.BuiltinFunctions.integerToDecimal(0), t.variables.transferAmountVar = e.BuiltinFunctions.integerToDecimal(0), t.variables.convertedTransferAmountVar = e.BuiltinFunctions.integerToDecimal(0), t.variables.convertedCalculatedFeesVar = e.BuiltinFunctions.integerToDecimal(0), t.variables.transferToConvertedAmountVar = e.BuiltinFunctions.integerToDecimal(0), t.variables.isTransferFromOpenVar = !1, t.widgets.get(r.getId("InputTransferAmount")).validAttr = !0, t.widgets.get(r.getId("InputTransferAmount")).validationMessageAttr = e.BuiltinFunctions.nullTextIdentifier(), t.widgets.get(r.getId("InputTransferExchangeAmount")).validAttr = !0, t.widgets.get(r.getId("InputTransferExchangeAmount")).validationMessageAttr = e.BuiltinFunctions.nullTextIdentifier(), t.variables.transferToVar = t.variables.nullTransferAccountVar, t.variables.showDisclaimerMessageVar = !1, t.variables.transferAccountListVar = t.variables.fullTransferAccountListVar, t.variables.activeWalletVar.loginidAttr === t.variables.transferFromVar.loginidAttr ? (y.value = e.SystemActions.listFilter(t.variables.fullTransferAccountListVar, function(v) {
                            return f.value.accountDetailsInLocal.iconAttr !== v.iconAttr
                        }, a), y.value.filteredListOut.length > 1 ? t.variables.transferAccountListVar = y.value.filteredListOut : (t.variables.transferToVar = y.value.filteredListOut.getCurrent(a.iterationContext), t.variables.showInitialTransferModalVar = !1, t.variables.transferAccountListVar = y.value.filteredListOut, t.variables.transferToVar.accountCategoryAttr === "Wallets" ? (t.variables.showCurrencySwitcherVar = !0, t.variables.currencySwitcherVar = t.variables.activeWalletVar.currencyAttr) : t.variables.showCurrencySwitcherVar = !1)) : (m.value = e.SystemActions.listFilter(t.variables.fullTransferFromAccountListVar, function(v) {
                            return v.loginidAttr === t.variables.activeWalletVar.loginidAttr
                        }, a), t.variables.transferToVar = m.value.filteredListOut.getCurrent(a.iterationContext), t.variables.showDisclaimerMessageVar = !0, t.variables.showInitialTransferModalVar = !1, t.variables.transferAccountListVar = m.value.filteredListOut)
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__onClickTransferFromAccount$Action
        }
        set _onClickTransferFromAccount$Action(n) {
            this.__onClickTransferFromAccount$Action = n
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(n) {
                var a = this.model,
                    t = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("OnInitialize", function(r) {
                    r && (r.setAttribute("code.function", "OnInitialize"), r.setAttribute("outsystems.function.key", "d1c69909-2dfd-42ac-9dac-44cce773bb97"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        if (t.ensureControllerAlive("OnInitialize"), n = t.callContext(n), J.getAuthToken() === e.BuiltinFunctions.nullTextIdentifier()) return e.Navigation.navigateTo(e.Navigation.generateScreenURL("tradershub", "cfds", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), n, !0)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(n) {
            this.__onInitialize$Action = n
        }
        get _cashierLockOnClick$Action() {
            return this.hasOwnProperty("__cashierLockOnClick$Action") || (this.__cashierLockOnClick$Action = function(n) {
                var a = this.model,
                    t = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("CashierLockOnClick", function(r) {
                    r && (r.setAttribute("code.function", "CashierLockOnClick"), r.setAttribute("outsystems.function.key", "d5633c88-cb32-48c0-be55-96921f15cf93"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("CashierLockOnClick"), n = t.callContext(n), e.Navigation.navigateTo(e.Navigation.generateScreenURL("tradershub", "wallets", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), n, !0)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__cashierLockOnClick$Action
        }
        set _cashierLockOnClick$Action(n) {
            this.__cashierLockOnClick$Action = n
        }
        get _openTransferToModal$Action() {
            return this.hasOwnProperty("__openTransferToModal$Action") || (this.__openTransferToModal$Action = function(n) {
                var a = this.model,
                    t = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("OpenTransferToModal", function(r) {
                    r && (r.setAttribute("code.function", "OpenTransferToModal"), r.setAttribute("outsystems.function.key", "ddf474bb-0962-4083-b91f-a69df7b29c40"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OpenTransferToModal"), n = t.callContext(n), a.variables.isTransferToOpenVar = !0
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__openTransferToModal$Action
        }
        set _openTransferToModal$Action(n) {
            this.__openTransferToModal$Action = n
        }
        get _walletActionScreenOnClick2$Action() {
            return this.hasOwnProperty("__walletActionScreenOnClick2$Action") || (this.__walletActionScreenOnClick2$Action = function(n) {
                var a = this.model,
                    t = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("WalletActionScreenOnClick2", function(r) {
                    r && (r.setAttribute("code.function", "WalletActionScreenOnClick2"), r.setAttribute("outsystems.function.key", "f7c25c00-69a7-4bd4-a614-4a2a93cdd66e"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("WalletActionScreenOnClick2"), n = t.callContext(n), e.Navigation.navigateTo(e.Navigation.generateScreenURL("tradershub", "wallets", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), n, !0)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__walletActionScreenOnClick2$Action
        }
        set _walletActionScreenOnClick2$Action(n) {
            this.__walletActionScreenOnClick2$Action = n
        }
        get _inputTransferExchangeAmountOnClick$Action() {
            return this.hasOwnProperty("__inputTransferExchangeAmountOnClick$Action") || (this.__inputTransferExchangeAmountOnClick$Action = function(n, a) {
                var t = this.model,
                    o = this.controller,
                    r = this.idService;
                return e.Logger.startActiveSpan("InputTransferExchangeAmountOnClick", function(s) {
                    s && (s.setAttribute("code.function", "InputTransferExchangeAmountOnClick"), s.setAttribute("outsystems.function.key", "fca4443c-543d-4d7f-8fa0-7b2d5cd2d263"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("InputTransferExchangeAmountOnClick"), a = o.callContext(a);
                        var f = new e.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsTransfer.InputTransferExchangeAmountOnClick$vars")));
                        f.value.inputIdInLocal = n, f.value.inputIdInLocal !== e.BuiltinFunctions.nullIdentifier().toString() && e.Logger.startActiveSpan("SetFocus", function(y) {
                            y && (y.setAttribute("code.function", "SetFocus"), y.setAttribute("outsystems.function.key", "bdd524c1-a2f9-49e3-ac44-0d099a698a27"), y.setAttribute("outsystems.function.owner.name", "tradershub"), y.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), y.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return o.safeExecuteJSNode(me, "SetFocus", "InputTransferExchangeAmountOnClick", {
                                    InputId: e.DataConversion.JSNodeParamConverter.to(f.value.inputIdInLocal, e.DataTypes.DataTypes.Text)
                                }, function(m) {}, {}, {})
                            } finally {
                                y && y.end()
                            }
                        }, 1)
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__inputTransferExchangeAmountOnClick$Action
        }
        set _inputTransferExchangeAmountOnClick$Action(n) {
            this.__inputTransferExchangeAmountOnClick$Action = n
        }
        get _openTransferFromModal$Action() {
            return this.hasOwnProperty("__openTransferFromModal$Action") || (this.__openTransferFromModal$Action = function(n) {
                var a = this.model,
                    t = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("OpenTransferFromModal", function(r) {
                    r && (r.setAttribute("code.function", "OpenTransferFromModal"), r.setAttribute("outsystems.function.key", "fd32479f-d94c-4bd6-9abc-a3dde691faac"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OpenTransferFromModal"), n = t.callContext(n), a.variables.isTransferFromOpenVar = !0
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__openTransferFromModal$Action
        }
        set _openTransferFromModal$Action(n) {
            this.__openTransferFromModal$Action = n
        }
        get _transferCountLimitMessageIsDisabledEvent$Action() {
            return this.hasOwnProperty("__transferCountLimitMessageIsDisabledEvent$Action") || (this.__transferCountLimitMessageIsDisabledEvent$Action = function(n, a) {
                var t = this.model,
                    o = this.controller,
                    r = this.idService;
                return e.Logger.startActiveSpan("TransferCountLimitMessageIsDisabledEvent", function(s) {
                    s && (s.setAttribute("code.function", "TransferCountLimitMessageIsDisabledEvent"), s.setAttribute("outsystems.function.key", "fd3bfbc9-c5a9-45a6-9f82-9bfe2bc21a88"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("TransferCountLimitMessageIsDisabledEvent"), a = o.callContext(a);
                        var f = new e.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsTransfer.TransferCountLimitMessageIsDisabledEvent$vars")));
                        f.value.isDisabledInLocal = n, pe.consoleLog$Action(f.value.isDisabledInLocal ? "True" : "False", 0, a), t.variables.isInputDisabledVar = f.value.isDisabledInLocal
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__transferCountLimitMessageIsDisabledEvent$Action
        }
        set _transferCountLimitMessageIsDisabledEvent$Action(n) {
            this.__transferCountLimitMessageIsDisabledEvent$Action = n
        }
        onCloseTransferFromModal$Action(n) {
            var a = this.controller;
            return e.Logger.startActiveSpan("OnCloseTransferFromModal__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnCloseTransferFromModal"), t.setAttribute("outsystems.function.key", "025247b5-342a-441e-8f2e-30a7405e4d8e"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._onCloseTransferFromModal$Action, n)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        assignExchangeRate$Action(n, a) {
            var t = this.controller;
            return e.Logger.startActiveSpan("AssignExchangeRate__proxy", function(o) {
                o && (o.setAttribute("code.function", "AssignExchangeRate"), o.setAttribute("outsystems.function.key", "03211425-510d-4afc-9504-a67819619295"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._assignExchangeRate$Action, a, n)
                } finally {
                    o && o.end()
                }
            }, 0)
        }
        onClickLifetimeLimitReached$Action(n) {
            var a = this.controller;
            return e.Logger.startActiveSpan("OnClickLifetimeLimitReached__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnClickLifetimeLimitReached"), t.setAttribute("outsystems.function.key", "15d144f6-2ba4-4ab1-bb33-79a05d00b0bb"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return a.safeExecuteClientAction(a._onClickLifetimeLimitReached$Action, n)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        assignExchangeRateCountdownTimer$Action(n, a) {
            var t = this.controller;
            return e.Logger.startActiveSpan("AssignExchangeRateCountdownTimer__proxy", function(o) {
                o && (o.setAttribute("code.function", "AssignExchangeRateCountdownTimer"), o.setAttribute("outsystems.function.key", "16179031-707c-45a4-8f64-4bd3edf8e1dd"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._assignExchangeRateCountdownTimer$Action, a, n)
                } finally {
                    o && o.end()
                }
            }, 0)
        }
        submitTransferOnClick$Action(n) {
            var a = this.controller;
            return e.Logger.startActiveSpan("SubmitTransferOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "SubmitTransferOnClick"), t.setAttribute("outsystems.function.key", "180ff7b9-fec8-4133-bfeb-e67400f33ff5"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return a.safeExecuteClientAction(a._submitTransferOnClick$Action, n)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        getExchangeRate$Action(n) {
            var a = this.controller;
            return e.Logger.startActiveSpan("GetExchangeRate__proxy", function(t) {
                return t && (t.setAttribute("code.function", "GetExchangeRate"), t.setAttribute("outsystems.function.key", "1efd211c-94d4-43c0-a293-fa6fe524745f"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return a.safeExecuteClientAction(a._getExchangeRate$Action, n)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onChangeInputTransferConvertedAmount$Action(n) {
            var a = this.controller;
            return e.Logger.startActiveSpan("OnChangeInputTransferConvertedAmount__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnChangeInputTransferConvertedAmount"), t.setAttribute("outsystems.function.key", "4091bcf4-616b-4e2a-97da-d41d78267c7b"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return a.safeExecuteClientAction(a._onChangeInputTransferConvertedAmount$Action, n)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onRender$Action(n) {
            var a = this.controller;
            return e.Logger.startActiveSpan("OnRender__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnRender"), t.setAttribute("outsystems.function.key", "6de5d60d-8ba8-4153-990b-872b5e331dbf"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._onRender$Action, n)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onReady$Action(n) {
            var a = this.controller;
            return e.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "70f9f4ed-810e-4e4b-894a-c51d6f293604"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return a.safeExecuteClientAction(a._onReady$Action, n)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onCloseTransferToModal$Action(n) {
            var a = this.controller;
            return e.Logger.startActiveSpan("OnCloseTransferToModal__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnCloseTransferToModal"), t.setAttribute("outsystems.function.key", "95b31faf-4323-4311-8b03-2054d3f979a1"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._onCloseTransferToModal$Action, n)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        exchangeRateSwitcherOnChange$Action(n) {
            var a = this.controller;
            return e.Logger.startActiveSpan("ExchangeRateSwitcherOnChange__proxy", function(t) {
                t && (t.setAttribute("code.function", "ExchangeRateSwitcherOnChange"), t.setAttribute("outsystems.function.key", "99831c2e-6286-4e9f-a59b-74a3b90d4f1a"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._exchangeRateSwitcherOnChange$Action, n)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onDestroy$Action(n) {
            var a = this.controller;
            return e.Logger.startActiveSpan("OnDestroy__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnDestroy"), t.setAttribute("outsystems.function.key", "a3d37f05-250a-4c86-b236-6d713cf401f0"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._onDestroy$Action, n)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onClickTransferToAccount$Action(n, a) {
            var t = this.controller;
            return e.Logger.startActiveSpan("OnClickTransferToAccount__proxy", function(o) {
                o && (o.setAttribute("code.function", "OnClickTransferToAccount"), o.setAttribute("outsystems.function.key", "b2292fd3-5c28-4f25-8cc7-81ba6503e2dc"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onClickTransferToAccount$Action, a, n)
                } finally {
                    o && o.end()
                }
            }, 0)
        }
        onChangeInputTransferAmount$Action(n) {
            var a = this.controller;
            return e.Logger.startActiveSpan("OnChangeInputTransferAmount__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnChangeInputTransferAmount"), t.setAttribute("outsystems.function.key", "b5c5135a-0d69-44c8-afe1-91666e8ca7ec"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return a.safeExecuteClientAction(a._onChangeInputTransferAmount$Action, n)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        walletActionScreenOnClick$Action(n) {
            var a = this.controller;
            return e.Logger.startActiveSpan("WalletActionScreenOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "WalletActionScreenOnClick"), t.setAttribute("outsystems.function.key", "c53fa254-02a3-4e2a-b022-56ce46ec279d"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._walletActionScreenOnClick$Action, n)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onClickTransferFromAccount$Action(n, a) {
            var t = this.controller;
            return e.Logger.startActiveSpan("OnClickTransferFromAccount__proxy", function(o) {
                o && (o.setAttribute("code.function", "OnClickTransferFromAccount"), o.setAttribute("outsystems.function.key", "c79debf3-1bc1-417d-992e-f5e173a379b9"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onClickTransferFromAccount$Action, a, n)
                } finally {
                    o && o.end()
                }
            }, 0)
        }
        onInitialize$Action(n) {
            var a = this.controller;
            return e.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "d1c69909-2dfd-42ac-9dac-44cce773bb97"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._onInitialize$Action, n)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        cashierLockOnClick$Action(n) {
            var a = this.controller;
            return e.Logger.startActiveSpan("CashierLockOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "CashierLockOnClick"), t.setAttribute("outsystems.function.key", "d5633c88-cb32-48c0-be55-96921f15cf93"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._cashierLockOnClick$Action, n)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        openTransferToModal$Action(n) {
            var a = this.controller;
            return e.Logger.startActiveSpan("OpenTransferToModal__proxy", function(t) {
                t && (t.setAttribute("code.function", "OpenTransferToModal"), t.setAttribute("outsystems.function.key", "ddf474bb-0962-4083-b91f-a69df7b29c40"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._openTransferToModal$Action, n)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        walletActionScreenOnClick2$Action(n) {
            var a = this.controller;
            return e.Logger.startActiveSpan("WalletActionScreenOnClick2__proxy", function(t) {
                t && (t.setAttribute("code.function", "WalletActionScreenOnClick2"), t.setAttribute("outsystems.function.key", "f7c25c00-69a7-4bd4-a614-4a2a93cdd66e"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._walletActionScreenOnClick2$Action, n)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        inputTransferExchangeAmountOnClick$Action(n, a) {
            var t = this.controller;
            return e.Logger.startActiveSpan("InputTransferExchangeAmountOnClick__proxy", function(o) {
                o && (o.setAttribute("code.function", "InputTransferExchangeAmountOnClick"), o.setAttribute("outsystems.function.key", "fca4443c-543d-4d7f-8fa0-7b2d5cd2d263"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._inputTransferExchangeAmountOnClick$Action, a, n)
                } finally {
                    o && o.end()
                }
            }, 0)
        }
        openTransferFromModal$Action(n) {
            var a = this.controller;
            return e.Logger.startActiveSpan("OpenTransferFromModal__proxy", function(t) {
                t && (t.setAttribute("code.function", "OpenTransferFromModal"), t.setAttribute("outsystems.function.key", "fd32479f-d94c-4bd6-9abc-a3dde691faac"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._openTransferFromModal$Action, n)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        transferCountLimitMessageIsDisabledEvent$Action(n, a) {
            var t = this.controller;
            return e.Logger.startActiveSpan("TransferCountLimitMessageIsDisabledEvent__proxy", function(o) {
                o && (o.setAttribute("code.function", "TransferCountLimitMessageIsDisabledEvent"), o.setAttribute("outsystems.function.key", "fd3bfbc9-c5a9-45a6-9f82-9bfe2bc21a88"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._transferCountLimitMessageIsDisabledEvent$Action, a, n)
                } finally {
                    o && o.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(n) {
                var a = this.controller,
                    t = this.model,
                    o = this.idService;
                return a.onInitialize$Action(n)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(n) {
            this._onInitializeEventHandler = n
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(n) {
                var a = this.controller,
                    t = this.model,
                    o = this.idService;
                return a.onReady$Action(n)
            }), this._onReadyEventHandler
        }
        set onReadyEventHandler(n) {
            this._onReadyEventHandler = n
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = function(n) {
                var a = this.controller,
                    t = this.model,
                    o = this.idService;
                return a.onRender$Action(n)
            }), this._onRenderEventHandler
        }
        set onRenderEventHandler(n) {
            this._onRenderEventHandler = n
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = function(n) {
                var a = this.controller,
                    t = this.model,
                    o = this.idService;
                return a.onDestroy$Action(n)
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
                return Se.default.handleError(n, this.callContext())
            }), this._handleError
        }
        set handleError(n) {
            this._handleError = n
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return L.defaultTimeout
        }
    };
    u(b, "ControllerInner");
    let i = b;
    w = i, w.registerVariableGroupType("tradershub.WalletFlows.WalletsTransfer.AssignExchangeRate$vars", [{
        name: "Rate",
        attrName: "rateInLocal",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Decimal,
        defaultValue: u(function() {
            return e.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }]), w.registerVariableGroupType("tradershub.WalletFlows.WalletsTransfer.AssignExchangeRateCountdownTimer$vars", [{
        name: "ExchangeRateTimer",
        attrName: "exchangeRateTimerInLocal",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Decimal,
        defaultValue: u(function() {
            return e.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }]), w.registerVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnChangeInputTransferConvertedAmount$convertTransferAmountJSResult", [{
        name: "ConvertedTransferAmount",
        attrName: "convertedTransferAmountOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Decimal,
        defaultValue: u(function() {
            return e.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }]), w.registerVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnChangeInputTransferConvertedAmount$calculateConvertedTransferFromFeesJSResult", [{
        name: "Fees",
        attrName: "feesOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Decimal,
        defaultValue: u(function() {
            return e.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }, {
        name: "FinalAmount",
        attrName: "finalAmountOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Decimal,
        defaultValue: u(function() {
            return e.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }, {
        name: "Percentage",
        attrName: "percentageOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Decimal,
        defaultValue: u(function() {
            return e.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }, {
        name: "MimumFeeAmount",
        attrName: "mimumFeeAmountOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }]), w.registerVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnChangeInputTransferConvertedAmount$calculateExchangeRateTransferToJSResult", [{
        name: "ConvertedAmount",
        attrName: "convertedAmountOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Decimal,
        defaultValue: u(function() {
            return e.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }]), w.registerVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnChangeInputTransferConvertedAmount$calculateTransferFromFeesJSResult", [{
        name: "Fees",
        attrName: "feesOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Decimal,
        defaultValue: u(function() {
            return e.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }, {
        name: "FinalAmount",
        attrName: "finalAmountOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Decimal,
        defaultValue: u(function() {
            return e.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }]), w.registerVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnChangeInputTransferConvertedAmount$calculateExchangeRateTransferFromJSResult", [{
        name: "ConvertedAmount",
        attrName: "convertedAmountOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Decimal,
        defaultValue: u(function() {
            return e.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }]), w.registerVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnReady$getAccountListJSResult", [{
        name: "TransferAccountList",
        attrName: "transferAccountListOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "TransferAccountKeys",
        attrName: "transferAccountKeysOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "TransferFromAccountList",
        attrName: "transferFromAccountListOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }]), w.registerVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnReady$transferBetweenAccountsPayloadJSResult", [{
        name: "Payload",
        attrName: "payloadOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }]), w.registerVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnReady$cashierLockErrorsJSResult", [{
        name: "IsCashierLockStatus",
        attrName: "isCashierLockStatusOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Boolean,
        defaultValue: u(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "IsSystemMaintenance",
        attrName: "isSystemMaintenanceOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Boolean,
        defaultValue: u(function() {
            return !1
        }, "defaultValue")
    }]), w.registerVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnReady$checkHasTransferAccountsWithFundsJSResult", [{
        name: "hasTransferAccountsWithFunds",
        attrName: "hasTransferAccountsWithFundsOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Boolean,
        defaultValue: u(function() {
            return !1
        }, "defaultValue")
    }]), w.registerVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnReady$getLimitsDataJSResult", [{
        name: "DailyTransferAmount",
        attrName: "dailyTransferAmountOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "DailyTransferCount",
        attrName: "dailyTransferCountOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "LifetimeTransfers",
        attrName: "lifetimeTransfersOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "FiatToCryptoAvailableLimit",
        attrName: "fiatToCryptoAvailableLimitOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Decimal,
        defaultValue: u(function() {
            return e.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }, {
        name: "CryptoToCryptoAvailableLimit",
        attrName: "cryptoToCryptoAvailableLimitOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Decimal,
        defaultValue: u(function() {
            return e.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }, {
        name: "CryptoToFiatAvailableLimit",
        attrName: "cryptoToFiatAvailableLimitOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Decimal,
        defaultValue: u(function() {
            return e.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }, {
        name: "FiatToCryptoAllowedLimit",
        attrName: "fiatToCryptoAllowedLimitOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Decimal,
        defaultValue: u(function() {
            return e.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }, {
        name: "CryptoToCryptoAllowedLimit",
        attrName: "cryptoToCryptoAllowedLimitOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Decimal,
        defaultValue: u(function() {
            return e.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }, {
        name: "CryptoToFiatAllowedLimit",
        attrName: "cryptoToFiatAllowedLimitOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Decimal,
        defaultValue: u(function() {
            return e.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }, {
        name: "VirtualDailyAvailableLimits",
        attrName: "virtualDailyAvailableLimitsOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Decimal,
        defaultValue: u(function() {
            return e.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }, {
        name: "DTradeDailyAvailableLimits",
        attrName: "dTradeDailyAvailableLimitsOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Decimal,
        defaultValue: u(function() {
            return e.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }, {
        name: "MT5DailyAvailableLimits",
        attrName: "mT5DailyAvailableLimitsOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Decimal,
        defaultValue: u(function() {
            return e.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }, {
        name: "VirtualDailyAllowedLimits",
        attrName: "virtualDailyAllowedLimitsOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Decimal,
        defaultValue: u(function() {
            return e.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }, {
        name: "DTradeDailyAllowedLimits",
        attrName: "dTradeDailyAllowedLimitsOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Decimal,
        defaultValue: u(function() {
            return e.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }, {
        name: "MT5DailyAllowedLimits",
        attrName: "mT5DailyAllowedLimitsOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Decimal,
        defaultValue: u(function() {
            return e.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }, {
        name: "WalletDailyAllowedLimits",
        attrName: "walletDailyAllowedLimitsOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Decimal,
        defaultValue: u(function() {
            return e.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }, {
        name: "WalletDailyAvailableLimits",
        attrName: "walletDailyAvailableLimitsOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Decimal,
        defaultValue: u(function() {
            return e.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }, {
        name: "DxtradeDailyAllowedLimits",
        attrName: "dxtradeDailyAllowedLimitsOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Decimal,
        defaultValue: u(function() {
            return e.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }, {
        name: "DxtradeDailyAvailableLimits",
        attrName: "dxtradeDailyAvailableLimitsOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Decimal,
        defaultValue: u(function() {
            return e.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }]), w.registerVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnReady$limitPayloadJSResult", [{
        name: "Payload",
        attrName: "payloadOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }]), w.registerVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnClickTransferToAccount$vars", [{
        name: "AccountDetails",
        attrName: "accountDetailsInLocal",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Record,
        defaultValue: u(function() {
            return new H
        }, "defaultValue"),
        complexType: H
    }]), w.registerVariableGroupType("tradershub.WalletFlows.WalletsTransfer.OnClickTransferFromAccount$vars", [{
        name: "AccountDetails",
        attrName: "accountDetailsInLocal",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Record,
        defaultValue: u(function() {
            return new H
        }, "defaultValue"),
        complexType: H
    }]), w.registerVariableGroupType("tradershub.WalletFlows.WalletsTransfer.InputTransferExchangeAmountOnClick$vars", [{
        name: "InputId",
        attrName: "inputIdInLocal",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }]), w.registerVariableGroupType("tradershub.WalletFlows.WalletsTransfer.TransferCountLimitMessageIsDisabledEvent$vars", [{
        name: "IsDisabled",
        attrName: "isDisabledInLocal",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Boolean,
        defaultValue: u(function() {
            return !1
        }, "defaultValue")
    }])
}
var w, ea = new e.Controller.ControllerFactory(w, ge);
export {
    ea as a
};