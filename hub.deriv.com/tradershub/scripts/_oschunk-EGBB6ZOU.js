import {
    a as _
} from "./_oschunk-RFENF4ST.js";
import {
    a as J
} from "./_oschunk-UK73WSZT.js";
import {
    a as L
} from "./_oschunk-Y45M2O2K.js";
import {
    a as C,
    d as b
} from "./_oschunk-27GDEXUT.js";
import {
    vd as g
} from "./_oschunk-HQOLQB4T.js";
import {
    ia as k
} from "./_oschunk-NTQBNJ73.js";
import {
    a as O,
    b as V,
    c as u,
    h as v
} from "./_oschunk-DVBKI63I.js";
var H = {};

function T(c, d, h, n) {
    let i = {
            CryptoAddress: c.CryptoAddress
        },
        e = yup.object().shape({
            CryptoAddress: yup.string().matches(/^[A-Za-z0-9]{25,64}$/, "Enter 25 to 64 letters and numbers. No spaces or special characters.")
        }),
        r = d.YupValidate(e, i).Errors;
    r.CryptoAddress != "" ? n.Validation.setWidgetAsInvalid(c.WidgetId, r.CryptoAddress) : n.Validation.setWidgetAsValid(c.WidgetId)
}
u(T, "default");

function I(c, d, h, n) {
    let i = c.Amount,
        e = c.Rate,
        a = u(o => o && e ? parseFloat((o * e).toFixed(8)) : 0, "getConvertedCryptoAmount")(i);
    d.AssignWithdrawalAmountInCrypto(a)
}
u(I, "default");

function W(c, d, h, n) {
    let i = c.CryptoAmount,
        e = c.MinimumWithdrawal,
        r = c.WalletBalance,
        a = c.Currency,
        o = {
            CryptoAmount: i
        },
        s = parseFloat(e),
        l = yup.object().shape({
            CryptoAmount: yup.number().test("exceed-balance", "Insufficient funds", function(m) {
                return m <= r
            }).test("min-withdrawal", `Minimum withdrawal amount is ${s} ${a}`, function(m) {
                return m >= s
            })
        }),
        f = d.YupValidate(l, o).Errors;
    f.CryptoAmount != "" ? n.Validation.setWidgetAsInvalid(c.WidgetId, f.CryptoAmount) : n.Validation.setWidgetAsValid(c.WidgetId)
}
u(W, "default");

function p(c, d, h, n) {
    let i = c.InputId,
        e = document.getElementById(i);
    e && e.getAttribute("data-dirty") === "False" && (d.GetExchangeRate(), e.setAttribute("data-dirty", "True"))
}
u(p, "default");

function S(c, d, h, n) {
    return new Promise(function(i, e) {
        let r = 59;
        window.timerInterval = null, window.exchangeInterval = null, window.getExchangeRate = () => v(this, null, function*() {
            let a = yield d.ExchangeRates("USD", c.TargetCurrency, c.LoginId), s = JSON.parse(a.Response).exchange_rates.rates[c.TargetCurrency].toFixed(8);
            d.AssignExchangeRate(s), r = 59, i()
        }), window.startCountdown = () => (timerInterval && clearInterval(timerInterval), timerInterval = setInterval(() => {
            r > 0 && r--, d.AssignExchangeRateCountdownTimer(r)
        }, 1e3), timerInterval), window.cleanup = () => {
            timerInterval && (clearInterval(timerInterval), timerInterval = null), exchangeInterval && (clearInterval(exchangeInterval), exchangeInterval = null)
        }, window.getExchangeRate().then(() => {
            window.timerIntervalRef = startCountdown(), exchangeInterval = setInterval(getExchangeRate, 6e4)
        })
    })
}
u(S, "default");

function E(c, d, h) {
    window.clearInterval(window.timerInterval), window.clearInterval(window.exchangeInterval), window.clearInterval(window.priorityWithdrawalInterval), window.clearInterval(window.cryptoPriorityWithdrawalInterval)
}
u(E, "default");

function D(c, d, h, n) {
    let i = JSON.parse(c.CryptoConfigList),
        e = c.ActiveWalletCrypto,
        r = i.crypto_config.currencies_config;
    c.MinimumWithdrawal = JSON.stringify(r[e].minimum_withdrawal)
}
u(D, "default");

function x(c, d, h, n) {
    let i = c.Amount,
        e = c.Rate,
        a = u(o => o && e ? parseFloat((o / e).toFixed(2)) : 0, "getConvertedFiatAmount")(i);
    d.AssignWithdrawalAmountInFiat(a)
}
u(x, "default");

function $(c, d, h, n) {
    let i = c.CryptoAmount,
        e = c.TransactionFees;
    console.log(i);
    let r = i - e;
    d.AssignFinalWithdrawalAmount(parseFloat(r.toFixed(8)))
}
u($, "default");

function R(c, d, h, n) {
    let i = c.ExchangeRates,
        e = c.CryptoAmount,
        r = u(a => a && i ? parseFloat((a / i).toFixed(2)) : 0, "getConvertedFiatAmount");
    c.ConvertedAmount = r(e)
}
u(R, "default");

function F(c, d, h, n) {
    return new Promise(function(i, e) {
        let r = 59;
        window.priorityWithdrawalInterval = null, window.cryptoPriorityWithdrawalInterval = null, window.getCryptoWithdrawalFees = () => v(this, null, function*() {
            let a = yield d.CryptoEstimations(c.Currency), s = JSON.parse(a.Response).crypto_estimations[c.Currency].withdrawal_fee, l = V(O({}, s), {
                value: s.value.toFixed(8)
            });
            d.AssignPriorityWithdrawalInfo(JSON.stringify(l)), r = 59, i()
        }), window.startCountdown = () => (timerInterval && clearInterval(timerInterval), timerInterval = setInterval(() => {
            r > 0 && r--, d.AssignPriorityWithdrawalInfoCountdownTimer(r)
        }, 1e3), timerInterval), window.cleanup = () => {
            timerInterval && (clearInterval(timerInterval), timerInterval = null), cryptoPriorityWithdrawalInterval && (clearInterval(cryptoPriorityWithdrawalInterval), cryptoPriorityWithdrawalInterval = null)
        }, getCryptoWithdrawalFees().then(() => {
            window.priorityWithdrawalInterval = startCountdown(), window.cryptoPriorityWithdrawalInterval = setInterval(getCryptoWithdrawalFees, 6e4)
        })
    })
}
u(F, "default");
var t = k; {
    let d = class d extends t.Controller.BaseViewController {
        constructor(n, i, e) {
            super(n, i, e, H);
            var r = this.controller;
            this.clientActionProxies = {
                assignWithdrawalAmountInCrypto$Action: u(function(a) {
                    return a = a === void 0 ? t.DataTypes.Decimal.defaultValue : a, r.executeActionInsideJSNode(r._assignWithdrawalAmountInCrypto$Action.bind(r, t.DataConversion.JSNodeParamConverter.from(a, t.DataTypes.DataTypes.Decimal)), r.callContext(), function(o) {
                        return {}
                    }, function() {}, "AssignWithdrawalAmountInCrypto")
                }, "assignWithdrawalAmountInCrypto$Action"),
                getExchangeRate$Action: u(function() {
                    return r.executeActionInsideJSNode(r._getExchangeRate$Action.bind(r), r.callContext(), function(a) {
                        return {}
                    }, function() {}, "GetExchangeRate")
                }, "getExchangeRate$Action"),
                assignExchangeRate$Action: u(function(a) {
                    return a = a === void 0 ? "" : a, r.executeActionInsideJSNode(r._assignExchangeRate$Action.bind(r, t.DataConversion.JSNodeParamConverter.from(a, t.DataTypes.DataTypes.Text)), r.callContext(), function(o) {
                        return {}
                    }, function() {}, "AssignExchangeRate")
                }, "assignExchangeRate$Action"),
                assignExchangeRateCountdownTimer$Action: u(function(a) {
                    return a = a === void 0 ? 0 : a, r.executeActionInsideJSNode(r._assignExchangeRateCountdownTimer$Action.bind(r, t.DataConversion.JSNodeParamConverter.from(a, t.DataTypes.DataTypes.Integer)), r.callContext(), function(o) {
                        return {}
                    }, function() {}, "AssignExchangeRateCountdownTimer")
                }, "assignExchangeRateCountdownTimer$Action"),
                assignWithdrawalAmountInFiat$Action: u(function(a) {
                    return a = a === void 0 ? t.DataTypes.Decimal.defaultValue : a, r.executeActionInsideJSNode(r._assignWithdrawalAmountInFiat$Action.bind(r, t.DataConversion.JSNodeParamConverter.from(a, t.DataTypes.DataTypes.Decimal)), r.callContext(), function(o) {
                        return {}
                    }, function() {}, "AssignWithdrawalAmountInFiat")
                }, "assignWithdrawalAmountInFiat$Action"),
                assignFinalWithdrawalAmount$Action: u(function(a) {
                    return a = a === void 0 ? t.DataTypes.Decimal.defaultValue : a, r.executeActionInsideJSNode(r._assignFinalWithdrawalAmount$Action.bind(r, t.DataConversion.JSNodeParamConverter.from(a, t.DataTypes.DataTypes.Decimal)), r.callContext(), function(o) {
                        return {}
                    }, function() {}, "AssignFinalWithdrawalAmount")
                }, "assignFinalWithdrawalAmount$Action"),
                assignPriorityWithdrawalInfo$Action: u(function(a) {
                    return a = a === void 0 ? "" : a, r.executeActionInsideJSNode(r._assignPriorityWithdrawalInfo$Action.bind(r, t.DataConversion.JSNodeParamConverter.from(a, t.DataTypes.DataTypes.Text)), r.callContext(), function(o) {
                        return {}
                    }, function() {}, "AssignPriorityWithdrawalInfo")
                }, "assignPriorityWithdrawalInfo$Action"),
                assignPriorityWithdrawalInfoCountdownTimer$Action: u(function(a) {
                    return a = a === void 0 ? 0 : a, r.executeActionInsideJSNode(r._assignPriorityWithdrawalInfoCountdownTimer$Action.bind(r, t.DataConversion.JSNodeParamConverter.from(a, t.DataTypes.DataTypes.Integer)), r.callContext(), function(o) {
                        return {}
                    }, function() {}, "AssignPriorityWithdrawalInfoCountdownTimer")
                }, "assignPriorityWithdrawalInfoCountdownTimer$Action")
            }, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(n) {
            this._dataFetchActionNames = n
        }
        get _onChangeAddressInput$Action() {
            return this.hasOwnProperty("__onChangeAddressInput$Action") || (this.__onChangeAddressInput$Action = function(n) {
                var i = this.model,
                    e = this.controller,
                    r = this.idService;
                return t.Logger.startActiveSpan("OnChangeAddressInput", function(a) {
                    a && (a.setAttribute("code.function", "OnChangeAddressInput"), a.setAttribute("outsystems.function.key", "0a476f32-b4f0-41a5-bc08-13a5e21440c9"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnChangeAddressInput"), n = e.callContext(n), t.Logger.startActiveSpan("CryptoAddressValidation", function(o) {
                            o && (o.setAttribute("code.function", "CryptoAddressValidation"), o.setAttribute("outsystems.function.key", "664f2905-e8d5-4848-80ea-da4067c19955"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(T, "CryptoAddressValidation", "OnChangeAddressInput", {
                                    WidgetId: t.DataConversion.JSNodeParamConverter.to(r.getId("Input_CryptoAddress"), t.DataTypes.DataTypes.Text),
                                    CryptoAddress: t.DataConversion.JSNodeParamConverter.to(i.variables.cryptoAddressVar, t.DataTypes.DataTypes.Text)
                                }, function(s) {}, {
                                    YupValidate: _.clientActionProxies.yupValidate$Action
                                }, {})
                            } finally {
                                o && o.end()
                            }
                        }, 1)
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__onChangeAddressInput$Action
        }
        set _onChangeAddressInput$Action(n) {
            this.__onChangeAddressInput$Action = n
        }
        get _convertFiatToCrypto$Action() {
            return this.hasOwnProperty("__convertFiatToCrypto$Action") || (this.__convertFiatToCrypto$Action = function(n, i) {
                var e = this.model,
                    r = this.controller,
                    a = this.idService;
                return t.Logger.startActiveSpan("ConvertFiatToCrypto", function(o) {
                    o && (o.setAttribute("code.function", "ConvertFiatToCrypto"), o.setAttribute("outsystems.function.key", "265ecc68-460a-4d12-b98a-d3fc81e4bcc6"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("ConvertFiatToCrypto"), i = r.callContext(i);
                        var s = new t.DataTypes.VariableHolder(new(r.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsWithdrawal.ConvertFiatToCrypto$vars")));
                        s.value.amountInLocal = n, t.Logger.startActiveSpan("JavaScript1", function(l) {
                            l && (l.setAttribute("code.function", "JavaScript1"), l.setAttribute("outsystems.function.key", "bb14f6e4-4d67-475b-bba2-6082c902036a"), l.setAttribute("outsystems.function.owner.name", "tradershub"), l.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), l.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return r.safeExecuteJSNode(I, "JavaScript1", "ConvertFiatToCrypto", {
                                    Rate: t.DataConversion.JSNodeParamConverter.to(e.variables.exchangeRateVar, t.DataTypes.DataTypes.Text),
                                    Amount: t.DataConversion.JSNodeParamConverter.to(s.value.amountInLocal, t.DataTypes.DataTypes.Decimal)
                                }, function(f) {}, {
                                    AssignWithdrawalAmountInCrypto: r.clientActionProxies.assignWithdrawalAmountInCrypto$Action
                                }, {})
                            } finally {
                                l && l.end()
                            }
                        }, 1)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__convertFiatToCrypto$Action
        }
        set _convertFiatToCrypto$Action(n) {
            this.__convertFiatToCrypto$Action = n
        }
        get _onChangeAmountInput$Action() {
            return this.hasOwnProperty("__onChangeAmountInput$Action") || (this.__onChangeAmountInput$Action = function(n) {
                var i = this.model,
                    e = this.controller,
                    r = this.idService;
                return t.Logger.startActiveSpan("OnChangeAmountInput", function(a) {
                    a && (a.setAttribute("code.function", "OnChangeAmountInput"), a.setAttribute("outsystems.function.key", "408025f4-061f-4a09-9523-263ca04340df"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnChangeAmountInput"), n = e.callContext(n), t.Logger.startActiveSpan("TriggerExchangeRate", function(o) {
                            o && (o.setAttribute("code.function", "TriggerExchangeRate"), o.setAttribute("outsystems.function.key", "feb3af39-368b-4340-bf64-df165cdfc8f1"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(p, "TriggerExchangeRate", "OnChangeAmountInput", {
                                    InputId: t.DataConversion.JSNodeParamConverter.to(r.getId("Input_CryptoAmount"), t.DataTypes.DataTypes.Text)
                                }, function(s) {}, {
                                    GetExchangeRate: e.clientActionProxies.getExchangeRate$Action
                                }, {})
                            } finally {
                                o && o.end()
                            }
                        }, 1), e._convertCryptoToFiat$Action(i.variables.withdrawalAmountVar, n), i.variables.currencySwitcherVar === i.variables.activeWalletVar.currencyAttr ? (t.Logger.startActiveSpan("CryptoAmountValidation", function(o) {
                            o && (o.setAttribute("code.function", "CryptoAmountValidation"), o.setAttribute("outsystems.function.key", "b786f7d8-04c7-4fee-82a5-d0e59c69731c"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(W, "CryptoAmountValidation", "OnChangeAmountInput", {
                                    Currency: t.DataConversion.JSNodeParamConverter.to(i.variables.activeWalletVar.currencyAttr, t.DataTypes.DataTypes.Text),
                                    CryptoAmount: t.DataConversion.JSNodeParamConverter.to(i.variables.withdrawalAmountVar, t.DataTypes.DataTypes.Decimal),
                                    MinimumWithdrawal: t.DataConversion.JSNodeParamConverter.to(i.variables.cryptoMinimumWthdrawalAmountVar, t.DataTypes.DataTypes.Text),
                                    WalletBalance: t.DataConversion.JSNodeParamConverter.to(t.BuiltinFunctions.decimalToText(i.variables.activeWalletVar.balanceAttr), t.DataTypes.DataTypes.Text),
                                    WidgetId: t.DataConversion.JSNodeParamConverter.to(r.getId("Input_CryptoAmount"), t.DataTypes.DataTypes.Text)
                                }, function(s) {}, {
                                    YupValidate: _.clientActionProxies.yupValidate$Action
                                }, {})
                            } finally {
                                o && o.end()
                            }
                        }, 1), i.variables.withdrawalAmountInCryptoVar = i.variables.withdrawalAmountVar) : e._convertFiatToCrypto$Action(i.variables.withdrawalAmountVar, n)
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__onChangeAmountInput$Action
        }
        set _onChangeAmountInput$Action(n) {
            this.__onChangeAmountInput$Action = n
        }
        get _assignPriorityWithdrawalInfoCountdownTimer$Action() {
            return this.hasOwnProperty("__assignPriorityWithdrawalInfoCountdownTimer$Action") || (this.__assignPriorityWithdrawalInfoCountdownTimer$Action = function(n, i) {
                var e = this.model,
                    r = this.controller,
                    a = this.idService;
                return t.Logger.startActiveSpan("AssignPriorityWithdrawalInfoCountdownTimer", function(o) {
                    o && (o.setAttribute("code.function", "AssignPriorityWithdrawalInfoCountdownTimer"), o.setAttribute("outsystems.function.key", "43ec3a56-8414-4766-bbb8-b849bfa273f1"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("AssignPriorityWithdrawalInfoCountdownTimer"), i = r.callContext(i);
                        var s = new t.DataTypes.VariableHolder(new(r.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsWithdrawal.AssignPriorityWithdrawalInfoCountdownTimer$vars")));
                        s.value.countdownTimerInLocal = n, e.variables.priorityWithdrawalTimerVar = s.value.countdownTimerInLocal
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__assignPriorityWithdrawalInfoCountdownTimer$Action
        }
        set _assignPriorityWithdrawalInfoCountdownTimer$Action(n) {
            this.__assignPriorityWithdrawalInfoCountdownTimer$Action = n
        }
        get _assignWithdrawalAmountInCrypto$Action() {
            return this.hasOwnProperty("__assignWithdrawalAmountInCrypto$Action") || (this.__assignWithdrawalAmountInCrypto$Action = function(n, i) {
                var e = this.model,
                    r = this.controller,
                    a = this.idService;
                return t.Logger.startActiveSpan("AssignWithdrawalAmountInCrypto", function(o) {
                    o && (o.setAttribute("code.function", "AssignWithdrawalAmountInCrypto"), o.setAttribute("outsystems.function.key", "4ffe8a9b-5083-4b84-91db-adbf073c6a32"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("AssignWithdrawalAmountInCrypto"), i = r.callContext(i);
                        var s = new t.DataTypes.VariableHolder(new(r.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsWithdrawal.AssignWithdrawalAmountInCrypto$vars")));
                        s.value.assignWithdrawalAmountInCryptoInLocal = n, e.variables.withdrawalAmountInCryptoVar = s.value.assignWithdrawalAmountInCryptoInLocal
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__assignWithdrawalAmountInCrypto$Action
        }
        set _assignWithdrawalAmountInCrypto$Action(n) {
            this.__assignWithdrawalAmountInCrypto$Action = n
        }
        get _getExchangeRate$Action() {
            return this.hasOwnProperty("__getExchangeRate$Action") || (this.__getExchangeRate$Action = function(n) {
                var i = this.model,
                    e = this.controller,
                    r = this.idService;
                return t.Logger.startActiveSpan("GetExchangeRate", function(a) {
                    return a && (a.setAttribute("code.function", "GetExchangeRate"), a.setAttribute("outsystems.function.key", "50b90231-50ce-49f7-a8fa-f5316eded1d7"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        return e.ensureControllerAlive("GetExchangeRate"), n = e.callContext(n), t.Flow.executeAsyncFlow(function() {
                            return t.Logger.startActiveSpan("InitExchangeRate", function(o) {
                                o && (o.setAttribute("code.function", "InitExchangeRate"), o.setAttribute("outsystems.function.key", "d8d83704-73a0-48b8-a33a-5607b420b558"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return e.safeExecuteAsyncJSNode(S, "InitExchangeRate", "GetExchangeRate", {
                                        TargetCurrency: t.DataConversion.JSNodeParamConverter.to(i.variables.activeWalletVar.currencyAttr, t.DataTypes.DataTypes.Text),
                                        LoginId: t.DataConversion.JSNodeParamConverter.to(i.variables.activeWalletVar.loginidAttr, t.DataTypes.DataTypes.Text)
                                    }, function(s) {}, {
                                        ExchangeRates: b.clientActionProxies.exchangeRates$Action,
                                        AssignExchangeRate: e.clientActionProxies.assignExchangeRate$Action,
                                        AssignExchangeRateCountdownTimer: e.clientActionProxies.assignExchangeRateCountdownTimer$Action
                                    }, {})
                                } finally {
                                    o && o.end()
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
        get _tryAgainOnClick$Action() {
            return this.hasOwnProperty("__tryAgainOnClick$Action") || (this.__tryAgainOnClick$Action = function(n) {
                var i = this.model,
                    e = this.controller,
                    r = this.idService;
                return t.Logger.startActiveSpan("TryAgainOnClick", function(a) {
                    a && (a.setAttribute("code.function", "TryAgainOnClick"), a.setAttribute("outsystems.function.key", "7bddf69f-c294-45ec-8ab8-14d79aa2243c"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("TryAgainOnClick"), n = e.callContext(n), i.variables.isPriorityWithdrawalErrorVar = !1
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__tryAgainOnClick$Action
        }
        set _tryAgainOnClick$Action(n) {
            this.__tryAgainOnClick$Action = n
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(n) {
                var i = this.model,
                    e = this.controller,
                    r = this.idService;
                return t.Logger.startActiveSpan("OnDestroy", function(a) {
                    a && (a.setAttribute("code.function", "OnDestroy"), a.setAttribute("outsystems.function.key", "85eadef0-ce93-4a97-ab41-6b3483906d25"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnDestroy"), n = e.callContext(n), t.Logger.startActiveSpan("JSDisposeTimerExchangeRate", function(o) {
                            o && (o.setAttribute("code.function", "JSDisposeTimerExchangeRate"), o.setAttribute("outsystems.function.key", "1b09f50c-4838-4939-a718-a117de17eda2"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(E, "JSDisposeTimerExchangeRate", "OnDestroy", null, function(s) {}, {}, {})
                            } finally {
                                o && o.end()
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
        get _assignFinalWithdrawalAmount$Action() {
            return this.hasOwnProperty("__assignFinalWithdrawalAmount$Action") || (this.__assignFinalWithdrawalAmount$Action = function(n, i) {
                var e = this.model,
                    r = this.controller,
                    a = this.idService;
                return t.Logger.startActiveSpan("AssignFinalWithdrawalAmount", function(o) {
                    o && (o.setAttribute("code.function", "AssignFinalWithdrawalAmount"), o.setAttribute("outsystems.function.key", "9dcb0ead-2966-4497-b933-91a7690c5d63"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("AssignFinalWithdrawalAmount"), i = r.callContext(i);
                        var s = new t.DataTypes.VariableHolder(new(r.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsWithdrawal.AssignFinalWithdrawalAmount$vars")));
                        s.value.finalCrpytoAmountInLocal = n, e.variables.finalCryptoAmountVar = s.value.finalCrpytoAmountInLocal
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__assignFinalWithdrawalAmount$Action
        }
        set _assignFinalWithdrawalAmount$Action(n) {
            this.__assignFinalWithdrawalAmount$Action = n
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(n) {
                var i = this.model,
                    e = this.controller,
                    r = this.idService;
                return t.Logger.startActiveSpan("OnReady", function(a) {
                    return a && (a.setAttribute("code.function", "OnReady"), a.setAttribute("outsystems.function.key", "ab26ba76-7de9-4941-8bf7-73bde8185cd0"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        e.ensureControllerAlive("OnReady"), n = e.callContext(n);
                        var o = new t.DataTypes.VariableHolder,
                            s = new t.DataTypes.VariableHolder,
                            l = new t.DataTypes.VariableHolder,
                            f = new t.DataTypes.VariableHolder,
                            m = new t.DataTypes.VariableHolder,
                            w = new t.DataTypes.VariableHolder,
                            N = new t.DataTypes.VariableHolder(new t.DataTypes.JSONSerializeOutputType);
                        return t.Flow.executeAsyncFlow(function() {
                            return i.variables.isLoadingVar = !0, i.flush(), b.getWalletsList$Action(n).then(function(y) {
                                s.value = y
                            }).then(function() {
                                o.value = t.SystemActions.listFilter(s.value.walletsListOut, function(y) {
                                    return y.is_selectedAttr
                                }, n), i.variables.activeWalletVar = o.value.filteredListOut.getCurrent(n.iterationContext), N.value.jSONOut = t.JSONUtils.serializeToJSON(o.value.filteredListOut, !1, !1), C.setActiveWallet(N.value.jSONOut)
                            }).then(function() {
                                return t.Flow.executeSequence(function() {
                                    return i.variables.activeWalletVar.isCrpytoAttr ? (i.flush(), b.postCashierCryptoWithdraw$Action(C.getCode(), "", t.DataTypes.Decimal.defaultValue, "", !0, n).then(function(y) {
                                        m.value = y
                                    }).then(function() {
                                        return t.Flow.executeSequence(function() {
                                            return m.value.responseOut.errorAttr.codeAttr === "InvalidToken" ? t.Flow.returnAsync(t.Navigation.navigateTo(t.Navigation.generateScreenURL("tradershub", "wallets/withdrawal/failed-verification/:Email?", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), n, !0)) : (i.flush(), b.cryptoConfig$Action(n).then(function(y) {
                                                l.value = y
                                            }).then(function() {
                                                w.value = t.Logger.startActiveSpan("SortConfig", function(y) {
                                                    y && (y.setAttribute("code.function", "SortConfig"), y.setAttribute("outsystems.function.key", "53b3ef5a-0563-4841-b1c9-918d88a2aa43"), y.setAttribute("outsystems.function.owner.name", "tradershub"), y.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), y.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                                    try {
                                                        return e.safeExecuteJSNode(D, "SortConfig", "OnReady", {
                                                            ActiveWalletCrypto: t.DataConversion.JSNodeParamConverter.to(i.variables.activeWalletVar.currencyAttr, t.DataTypes.DataTypes.Text),
                                                            CryptoConfigList: t.DataConversion.JSNodeParamConverter.to(l.value.responseOut, t.DataTypes.DataTypes.Text),
                                                            MinimumWithdrawal: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                                                        }, function(G) {
                                                            var P = new(e.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsWithdrawal.OnReady$sortConfigJSResult"));
                                                            return P.minimumWithdrawalOut = t.DataConversion.JSNodeParamConverter.from(G.MinimumWithdrawal, t.DataTypes.DataTypes.Text), P
                                                        }, {}, {})
                                                    } finally {
                                                        y && y.end()
                                                    }
                                                }, 1), i.variables.isLoadingVar = !1, i.variables.cryptoMinimumWthdrawalAmountVar = w.value.minimumWithdrawalOut, i.variables.currencySwitcherVar = i.variables.activeWalletVar.currencyAttr
                                            }))
                                        })
                                    })) : (i.flush(), b.postCashierFiat$Action("withdraw", C.getCode(), n).then(function(y) {
                                        f.value = y
                                    }).then(function() {
                                        i.variables.iframeUrlVar = f.value.responseOut.cashierAttr
                                    }))
                                })
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
        get _convertCryptoToFiat$Action() {
            return this.hasOwnProperty("__convertCryptoToFiat$Action") || (this.__convertCryptoToFiat$Action = function(n, i) {
                var e = this.model,
                    r = this.controller,
                    a = this.idService;
                return t.Logger.startActiveSpan("ConvertCryptoToFiat", function(o) {
                    o && (o.setAttribute("code.function", "ConvertCryptoToFiat"), o.setAttribute("outsystems.function.key", "bcc8aafd-1a98-4e16-b3e9-0d81b80e1365"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("ConvertCryptoToFiat"), i = r.callContext(i);
                        var s = new t.DataTypes.VariableHolder(new(r.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsWithdrawal.ConvertCryptoToFiat$vars")));
                        s.value.amountInLocal = n, t.Logger.startActiveSpan("JavaScript1", function(l) {
                            l && (l.setAttribute("code.function", "JavaScript1"), l.setAttribute("outsystems.function.key", "3bbad6ac-67a1-4603-a1e8-23913d587a60"), l.setAttribute("outsystems.function.owner.name", "tradershub"), l.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), l.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return r.safeExecuteJSNode(x, "JavaScript1", "ConvertCryptoToFiat", {
                                    Amount: t.DataConversion.JSNodeParamConverter.to(s.value.amountInLocal, t.DataTypes.DataTypes.Decimal),
                                    Rate: t.DataConversion.JSNodeParamConverter.to(e.variables.exchangeRateVar, t.DataTypes.DataTypes.Text)
                                }, function(f) {}, {
                                    AssignWithdrawalAmountInFiat: r.clientActionProxies.assignWithdrawalAmountInFiat$Action
                                }, {})
                            } finally {
                                l && l.end()
                            }
                        }, 1)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__convertCryptoToFiat$Action
        }
        set _convertCryptoToFiat$Action(n) {
            this.__convertCryptoToFiat$Action = n
        }
        get _onPriorityCheck$Action() {
            return this.hasOwnProperty("__onPriorityCheck$Action") || (this.__onPriorityCheck$Action = function(n) {
                var i = this.model,
                    e = this.controller,
                    r = this.idService;
                return t.Logger.startActiveSpan("OnPriorityCheck", function(a) {
                    return a && (a.setAttribute("code.function", "OnPriorityCheck"), a.setAttribute("outsystems.function.key", "c414b116-f0be-4c8b-822e-eb4563dbef67"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        e.ensureControllerAlive("OnPriorityCheck"), n = e.callContext(n);
                        var o = new t.DataTypes.VariableHolder,
                            s = new t.DataTypes.VariableHolder,
                            l = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(g)));
                        return t.Flow.executeAsyncFlow(function() {
                            return t.Flow.executeSequence(function() {
                                if (i.variables.isWithdrawalPriorityVar) return e._getPriorityWithdrawalInfo$Action(n).then(function() {
                                    l.value.dataOut = t.JSONUtils.deserializeFromJSON(i.variables.serializePriorityWithdrawalInfoVar, g, !1), i.variables.deserializePriorityWithdrawalInfoVar = l.value.dataOut, o.value = t.Logger.startActiveSpan("CalculateFinalCryptoAmount", function(f) {
                                        f && (f.setAttribute("code.function", "CalculateFinalCryptoAmount"), f.setAttribute("outsystems.function.key", "22d8ad73-2d91-4a89-b431-2b1e10106d90"), f.setAttribute("outsystems.function.owner.name", "tradershub"), f.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), f.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                        try {
                                            return e.safeExecuteJSNode($, "CalculateFinalCryptoAmount", "OnPriorityCheck", {
                                                TransactionFees: t.DataConversion.JSNodeParamConverter.to(t.BuiltinFunctions.decimalToText(i.variables.deserializePriorityWithdrawalInfoVar.valueAttr), t.DataTypes.DataTypes.Text),
                                                CryptoAmount: t.DataConversion.JSNodeParamConverter.to(i.variables.withdrawalAmountInCryptoVar, t.DataTypes.DataTypes.Decimal),
                                                FinalAmount: t.DataConversion.JSNodeParamConverter.to(t.DataTypes.Decimal.defaultValue, t.DataTypes.DataTypes.Decimal)
                                            }, function(m) {
                                                var w = new(e.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsWithdrawal.OnPriorityCheck$calculateFinalCryptoAmountJSResult"));
                                                return w.finalAmountOut = t.DataConversion.JSNodeParamConverter.from(m.FinalAmount, t.DataTypes.DataTypes.Decimal), w
                                            }, {
                                                AssignFinalWithdrawalAmount: e.clientActionProxies.assignFinalWithdrawalAmount$Action
                                            }, {})
                                        } finally {
                                            f && f.end()
                                        }
                                    }, 1), s.value = t.Logger.startActiveSpan("ConvertCryptoToFiat", function(f) {
                                        f && (f.setAttribute("code.function", "ConvertCryptoToFiat"), f.setAttribute("outsystems.function.key", "bc75d33b-05d8-4a3c-92b4-255f1e2466c6"), f.setAttribute("outsystems.function.owner.name", "tradershub"), f.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), f.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                        try {
                                            return e.safeExecuteJSNode(R, "ConvertCryptoToFiat", "OnPriorityCheck", {
                                                CryptoAmount: t.DataConversion.JSNodeParamConverter.to(i.variables.finalCryptoAmountVar, t.DataTypes.DataTypes.Decimal),
                                                ExchangeRates: t.DataConversion.JSNodeParamConverter.to(i.variables.exchangeRateVar, t.DataTypes.DataTypes.Text),
                                                ConvertedAmount: t.DataConversion.JSNodeParamConverter.to(t.DataTypes.Decimal.defaultValue, t.DataTypes.DataTypes.Decimal)
                                            }, function(m) {
                                                var w = new(e.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsWithdrawal.OnPriorityCheck$convertCryptoToFiatJSResult"));
                                                return w.convertedAmountOut = t.DataConversion.JSNodeParamConverter.from(m.ConvertedAmount, t.DataTypes.DataTypes.Decimal), w
                                            }, {}, {})
                                        } finally {
                                            f && f.end()
                                        }
                                    }, 1), i.variables.finalConvertedAmountVar = s.value.convertedAmountOut
                                })
                            })
                        })
                    }, function() {
                        a && a.end()
                    })
                }, 1)
            }), this.__onPriorityCheck$Action
        }
        set _onPriorityCheck$Action(n) {
            this.__onPriorityCheck$Action = n
        }
        get _withdrawOnClick$Action() {
            return this.hasOwnProperty("__withdrawOnClick$Action") || (this.__withdrawOnClick$Action = function(n) {
                var i = this.model,
                    e = this.controller,
                    r = this.idService;
                return t.Logger.startActiveSpan("WithdrawOnClick", function(a) {
                    return a && (a.setAttribute("code.function", "WithdrawOnClick"), a.setAttribute("outsystems.function.key", "c4a029a2-74f4-4056-8f09-3e6837f1ec30"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        e.ensureControllerAlive("WithdrawOnClick"), n = e.callContext(n);
                        var o = new t.DataTypes.VariableHolder,
                            s = new t.DataTypes.VariableHolder;
                        return t.Flow.executeAsyncFlow(function() {
                            return t.Flow.executeSequence(function() {
                                if (i.widgets.get(r.getId("Form1")).validAttr) return t.Flow.executeSequence(function() {
                                    return i.variables.isWithdrawalPriorityVar ? (i.flush(), b.postCashierCryptoWithdraw$Action(C.getCode(), i.variables.cryptoAddressVar, i.variables.withdrawalAmountInCryptoVar, i.variables.deserializePriorityWithdrawalInfoVar.unique_idAttr, !1, n).then(function(l) {
                                        s.value = l
                                    }).then(function() {
                                        return t.Flow.returnAsync(t.Navigation.navigateTo(t.Navigation.generateScreenURL("tradershub", "WalletsReceiptWithdrawal", {
                                            CryptoCurrency: t.DataConversion.ServerDataConverter.to(i.variables.activeWalletVar.currencyAttr, t.DataTypes.DataTypes.Text),
                                            CryptoAmount: t.DataConversion.ServerDataConverter.to(i.variables.withdrawalAmountInCryptoVar, t.DataTypes.DataTypes.Decimal),
                                            CryptoAddress: t.DataConversion.ServerDataConverter.to(i.variables.cryptoAddressVar, t.DataTypes.DataTypes.Text),
                                            TransactionFee: t.DataConversion.ServerDataConverter.to(i.variables.deserializePriorityWithdrawalInfoVar.valueAttr, t.DataTypes.DataTypes.Decimal),
                                            IsPriority: t.DataConversion.ServerDataConverter.to(!0, t.DataTypes.DataTypes.Boolean)
                                        }), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), n, !0))
                                    })) : (i.flush(), b.postCashierCryptoWithdraw$Action(C.getCode(), i.variables.cryptoAddressVar, i.variables.withdrawalAmountInCryptoVar, "", !1, n).then(function(l) {
                                        o.value = l
                                    }).then(function() {
                                        if (!o.value.isErrorOut) return t.Flow.returnAsync(t.Navigation.navigateTo(t.Navigation.generateScreenURL("tradershub", "WalletsReceiptWithdrawal", {
                                            CryptoAddress: t.DataConversion.ServerDataConverter.to(i.variables.cryptoAddressVar, t.DataTypes.DataTypes.Text),
                                            IsPriority: t.DataConversion.ServerDataConverter.to(!1, t.DataTypes.DataTypes.Boolean),
                                            CryptoCurrency: t.DataConversion.ServerDataConverter.to(i.variables.activeWalletVar.currencyAttr, t.DataTypes.DataTypes.Text),
                                            CryptoAmount: t.DataConversion.ServerDataConverter.to(i.variables.withdrawalAmountInCryptoVar, t.DataTypes.DataTypes.Decimal)
                                        }), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), n, !0))
                                    }))
                                })
                            })
                        })
                    }, function() {
                        a && a.end()
                    })
                }, 1)
            }), this.__withdrawOnClick$Action
        }
        set _withdrawOnClick$Action(n) {
            this.__withdrawOnClick$Action = n
        }
        get _assignExchangeRate$Action() {
            return this.hasOwnProperty("__assignExchangeRate$Action") || (this.__assignExchangeRate$Action = function(n, i) {
                var e = this.model,
                    r = this.controller,
                    a = this.idService;
                return t.Logger.startActiveSpan("AssignExchangeRate", function(o) {
                    o && (o.setAttribute("code.function", "AssignExchangeRate"), o.setAttribute("outsystems.function.key", "c5246b56-6f85-44d7-bcd5-a5b94f42a371"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("AssignExchangeRate"), i = r.callContext(i);
                        var s = new t.DataTypes.VariableHolder(new(r.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsWithdrawal.AssignExchangeRate$vars")));
                        s.value.ratefromAPIInLocal = n, e.variables.exchangeRateVar = s.value.ratefromAPIInLocal
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__assignExchangeRate$Action
        }
        set _assignExchangeRate$Action(n) {
            this.__assignExchangeRate$Action = n
        }
        get _assignWithdrawalAmountInFiat$Action() {
            return this.hasOwnProperty("__assignWithdrawalAmountInFiat$Action") || (this.__assignWithdrawalAmountInFiat$Action = function(n, i) {
                var e = this.model,
                    r = this.controller,
                    a = this.idService;
                return t.Logger.startActiveSpan("AssignWithdrawalAmountInFiat", function(o) {
                    o && (o.setAttribute("code.function", "AssignWithdrawalAmountInFiat"), o.setAttribute("outsystems.function.key", "cad6f440-8885-4398-85af-15c632aafb9c"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("AssignWithdrawalAmountInFiat"), i = r.callContext(i);
                        var s = new t.DataTypes.VariableHolder(new(r.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsWithdrawal.AssignWithdrawalAmountInFiat$vars")));
                        s.value.assignWithdrawalAmountInFiatInLocal = n, e.variables.withdrawalAmountInFiatVar = s.value.assignWithdrawalAmountInFiatInLocal
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__assignWithdrawalAmountInFiat$Action
        }
        set _assignWithdrawalAmountInFiat$Action(n) {
            this.__assignWithdrawalAmountInFiat$Action = n
        }
        get _assignPriorityWithdrawalInfo$Action() {
            return this.hasOwnProperty("__assignPriorityWithdrawalInfo$Action") || (this.__assignPriorityWithdrawalInfo$Action = function(n, i) {
                var e = this.model,
                    r = this.controller,
                    a = this.idService;
                return t.Logger.startActiveSpan("AssignPriorityWithdrawalInfo", function(o) {
                    o && (o.setAttribute("code.function", "AssignPriorityWithdrawalInfo"), o.setAttribute("outsystems.function.key", "f21c7944-2ad4-4122-b71b-633a305b7c83"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("AssignPriorityWithdrawalInfo"), i = r.callContext(i);
                        var s = new t.DataTypes.VariableHolder(new(r.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsWithdrawal.AssignPriorityWithdrawalInfo$vars")));
                        s.value.priorityWithdrawalInfoObjInLocal = n, e.variables.serializePriorityWithdrawalInfoVar = s.value.priorityWithdrawalInfoObjInLocal
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__assignPriorityWithdrawalInfo$Action
        }
        set _assignPriorityWithdrawalInfo$Action(n) {
            this.__assignPriorityWithdrawalInfo$Action = n
        }
        get _exchangeRateSwitcherOnChange$Action() {
            return this.hasOwnProperty("__exchangeRateSwitcherOnChange$Action") || (this.__exchangeRateSwitcherOnChange$Action = function(n) {
                var i = this.model,
                    e = this.controller,
                    r = this.idService;
                return t.Logger.startActiveSpan("ExchangeRateSwitcherOnChange", function(a) {
                    a && (a.setAttribute("code.function", "ExchangeRateSwitcherOnChange"), a.setAttribute("outsystems.function.key", "f5443716-0fe8-4bc2-8fac-24f31f3c3edf"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("ExchangeRateSwitcherOnChange"), n = e.callContext(n), i.variables.withdrawalAmountVar = t.BuiltinFunctions.integerToDecimal(0), i.variables.withdrawalAmountInCryptoVar = t.BuiltinFunctions.integerToDecimal(0), i.variables.withdrawalAmountInFiatVar = t.BuiltinFunctions.integerToDecimal(0)
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__exchangeRateSwitcherOnChange$Action
        }
        set _exchangeRateSwitcherOnChange$Action(n) {
            this.__exchangeRateSwitcherOnChange$Action = n
        }
        get _getPriorityWithdrawalInfo$Action() {
            return this.hasOwnProperty("__getPriorityWithdrawalInfo$Action") || (this.__getPriorityWithdrawalInfo$Action = function(n) {
                var i = this.model,
                    e = this.controller,
                    r = this.idService;
                return t.Logger.startActiveSpan("GetPriorityWithdrawalInfo", function(a) {
                    return a && (a.setAttribute("code.function", "GetPriorityWithdrawalInfo"), a.setAttribute("outsystems.function.key", "f8eafddc-12b2-44d7-a100-2cf6a71e4828"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        return e.ensureControllerAlive("GetPriorityWithdrawalInfo"), n = e.callContext(n), t.Flow.executeAsyncFlow(function() {
                            return t.Logger.startActiveSpan("InitPriorityWithdrawalInfo", function(o) {
                                o && (o.setAttribute("code.function", "InitPriorityWithdrawalInfo"), o.setAttribute("outsystems.function.key", "5d9ec4d3-2fc8-4259-87ab-a4363981cd2e"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return e.safeExecuteAsyncJSNode(F, "InitPriorityWithdrawalInfo", "GetPriorityWithdrawalInfo", {
                                        Currency: t.DataConversion.JSNodeParamConverter.to(i.variables.activeWalletVar.currencyAttr, t.DataTypes.DataTypes.Text)
                                    }, function(s) {}, {
                                        CryptoEstimations: b.clientActionProxies.cryptoEstimations$Action,
                                        AssignPriorityWithdrawalInfo: e.clientActionProxies.assignPriorityWithdrawalInfo$Action,
                                        AssignPriorityWithdrawalInfoCountdownTimer: e.clientActionProxies.assignPriorityWithdrawalInfoCountdownTimer$Action
                                    }, {})
                                } finally {
                                    o && o.end()
                                }
                            }, 1)
                        })
                    }, function() {
                        a && a.end()
                    })
                }, 1)
            }), this.__getPriorityWithdrawalInfo$Action
        }
        set _getPriorityWithdrawalInfo$Action(n) {
            this.__getPriorityWithdrawalInfo$Action = n
        }
        get _assignExchangeRateCountdownTimer$Action() {
            return this.hasOwnProperty("__assignExchangeRateCountdownTimer$Action") || (this.__assignExchangeRateCountdownTimer$Action = function(n, i) {
                var e = this.model,
                    r = this.controller,
                    a = this.idService;
                return t.Logger.startActiveSpan("AssignExchangeRateCountdownTimer", function(o) {
                    o && (o.setAttribute("code.function", "AssignExchangeRateCountdownTimer"), o.setAttribute("outsystems.function.key", "fae7e59c-e28b-47a9-ad4f-309fa7f17d44"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("AssignExchangeRateCountdownTimer"), i = r.callContext(i);
                        var s = new t.DataTypes.VariableHolder(new(r.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsWithdrawal.AssignExchangeRateCountdownTimer$vars")));
                        s.value.countdownTimerInLocal = n, e.variables.rateTimerVar = s.value.countdownTimerInLocal
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__assignExchangeRateCountdownTimer$Action
        }
        set _assignExchangeRateCountdownTimer$Action(n) {
            this.__assignExchangeRateCountdownTimer$Action = n
        }
        onChangeAddressInput$Action(n) {
            var i = this.controller;
            return t.Logger.startActiveSpan("OnChangeAddressInput__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnChangeAddressInput"), e.setAttribute("outsystems.function.key", "0a476f32-b4f0-41a5-bc08-13a5e21440c9"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onChangeAddressInput$Action, n)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        convertFiatToCrypto$Action(n, i) {
            var e = this.controller;
            return t.Logger.startActiveSpan("ConvertFiatToCrypto__proxy", function(r) {
                r && (r.setAttribute("code.function", "ConvertFiatToCrypto"), r.setAttribute("outsystems.function.key", "265ecc68-460a-4d12-b98a-d3fc81e4bcc6"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._convertFiatToCrypto$Action, i, n)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        onChangeAmountInput$Action(n) {
            var i = this.controller;
            return t.Logger.startActiveSpan("OnChangeAmountInput__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnChangeAmountInput"), e.setAttribute("outsystems.function.key", "408025f4-061f-4a09-9523-263ca04340df"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onChangeAmountInput$Action, n)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        assignPriorityWithdrawalInfoCountdownTimer$Action(n, i) {
            var e = this.controller;
            return t.Logger.startActiveSpan("AssignPriorityWithdrawalInfoCountdownTimer__proxy", function(r) {
                r && (r.setAttribute("code.function", "AssignPriorityWithdrawalInfoCountdownTimer"), r.setAttribute("outsystems.function.key", "43ec3a56-8414-4766-bbb8-b849bfa273f1"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._assignPriorityWithdrawalInfoCountdownTimer$Action, i, n)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        assignWithdrawalAmountInCrypto$Action(n, i) {
            var e = this.controller;
            return t.Logger.startActiveSpan("AssignWithdrawalAmountInCrypto__proxy", function(r) {
                r && (r.setAttribute("code.function", "AssignWithdrawalAmountInCrypto"), r.setAttribute("outsystems.function.key", "4ffe8a9b-5083-4b84-91db-adbf073c6a32"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._assignWithdrawalAmountInCrypto$Action, i, n)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        getExchangeRate$Action(n) {
            var i = this.controller;
            return t.Logger.startActiveSpan("GetExchangeRate__proxy", function(e) {
                return e && (e.setAttribute("code.function", "GetExchangeRate"), e.setAttribute("outsystems.function.key", "50b90231-50ce-49f7-a8fa-f5316eded1d7"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._getExchangeRate$Action, n)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        tryAgainOnClick$Action(n) {
            var i = this.controller;
            return t.Logger.startActiveSpan("TryAgainOnClick__proxy", function(e) {
                e && (e.setAttribute("code.function", "TryAgainOnClick"), e.setAttribute("outsystems.function.key", "7bddf69f-c294-45ec-8ab8-14d79aa2243c"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._tryAgainOnClick$Action, n)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onDestroy$Action(n) {
            var i = this.controller;
            return t.Logger.startActiveSpan("OnDestroy__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnDestroy"), e.setAttribute("outsystems.function.key", "85eadef0-ce93-4a97-ab41-6b3483906d25"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onDestroy$Action, n)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        assignFinalWithdrawalAmount$Action(n, i) {
            var e = this.controller;
            return t.Logger.startActiveSpan("AssignFinalWithdrawalAmount__proxy", function(r) {
                r && (r.setAttribute("code.function", "AssignFinalWithdrawalAmount"), r.setAttribute("outsystems.function.key", "9dcb0ead-2966-4497-b933-91a7690c5d63"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._assignFinalWithdrawalAmount$Action, i, n)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        onReady$Action(n) {
            var i = this.controller;
            return t.Logger.startActiveSpan("OnReady__proxy", function(e) {
                return e && (e.setAttribute("code.function", "OnReady"), e.setAttribute("outsystems.function.key", "ab26ba76-7de9-4941-8bf7-73bde8185cd0"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._onReady$Action, n)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        convertCryptoToFiat$Action(n, i) {
            var e = this.controller;
            return t.Logger.startActiveSpan("ConvertCryptoToFiat__proxy", function(r) {
                r && (r.setAttribute("code.function", "ConvertCryptoToFiat"), r.setAttribute("outsystems.function.key", "bcc8aafd-1a98-4e16-b3e9-0d81b80e1365"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._convertCryptoToFiat$Action, i, n)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        onPriorityCheck$Action(n) {
            var i = this.controller;
            return t.Logger.startActiveSpan("OnPriorityCheck__proxy", function(e) {
                return e && (e.setAttribute("code.function", "OnPriorityCheck"), e.setAttribute("outsystems.function.key", "c414b116-f0be-4c8b-822e-eb4563dbef67"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._onPriorityCheck$Action, n)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        withdrawOnClick$Action(n) {
            var i = this.controller;
            return t.Logger.startActiveSpan("WithdrawOnClick__proxy", function(e) {
                return e && (e.setAttribute("code.function", "WithdrawOnClick"), e.setAttribute("outsystems.function.key", "c4a029a2-74f4-4056-8f09-3e6837f1ec30"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._withdrawOnClick$Action, n)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        assignExchangeRate$Action(n, i) {
            var e = this.controller;
            return t.Logger.startActiveSpan("AssignExchangeRate__proxy", function(r) {
                r && (r.setAttribute("code.function", "AssignExchangeRate"), r.setAttribute("outsystems.function.key", "c5246b56-6f85-44d7-bcd5-a5b94f42a371"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._assignExchangeRate$Action, i, n)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        assignWithdrawalAmountInFiat$Action(n, i) {
            var e = this.controller;
            return t.Logger.startActiveSpan("AssignWithdrawalAmountInFiat__proxy", function(r) {
                r && (r.setAttribute("code.function", "AssignWithdrawalAmountInFiat"), r.setAttribute("outsystems.function.key", "cad6f440-8885-4398-85af-15c632aafb9c"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._assignWithdrawalAmountInFiat$Action, i, n)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        assignPriorityWithdrawalInfo$Action(n, i) {
            var e = this.controller;
            return t.Logger.startActiveSpan("AssignPriorityWithdrawalInfo__proxy", function(r) {
                r && (r.setAttribute("code.function", "AssignPriorityWithdrawalInfo"), r.setAttribute("outsystems.function.key", "f21c7944-2ad4-4122-b71b-633a305b7c83"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._assignPriorityWithdrawalInfo$Action, i, n)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        exchangeRateSwitcherOnChange$Action(n) {
            var i = this.controller;
            return t.Logger.startActiveSpan("ExchangeRateSwitcherOnChange__proxy", function(e) {
                e && (e.setAttribute("code.function", "ExchangeRateSwitcherOnChange"), e.setAttribute("outsystems.function.key", "f5443716-0fe8-4bc2-8fac-24f31f3c3edf"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._exchangeRateSwitcherOnChange$Action, n)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        getPriorityWithdrawalInfo$Action(n) {
            var i = this.controller;
            return t.Logger.startActiveSpan("GetPriorityWithdrawalInfo__proxy", function(e) {
                return e && (e.setAttribute("code.function", "GetPriorityWithdrawalInfo"), e.setAttribute("outsystems.function.key", "f8eafddc-12b2-44d7-a100-2cf6a71e4828"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._getPriorityWithdrawalInfo$Action, n)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        assignExchangeRateCountdownTimer$Action(n, i) {
            var e = this.controller;
            return t.Logger.startActiveSpan("AssignExchangeRateCountdownTimer__proxy", function(r) {
                r && (r.setAttribute("code.function", "AssignExchangeRateCountdownTimer"), r.setAttribute("outsystems.function.key", "fae7e59c-e28b-47a9-ad4f-309fa7f17d44"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._assignExchangeRateCountdownTimer$Action, i, n)
                } finally {
                    r && r.end()
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
                var i = this.controller,
                    e = this.model,
                    r = this.idService;
                return i.onReady$Action(n)
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
                var i = this.controller,
                    e = this.model,
                    r = this.idService;
                return i.onDestroy$Action(n)
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
                return J.default.handleError(n, this.callContext())
            }), this._handleError
        }
        set handleError(n) {
            this._handleError = n
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return b.defaultTimeout
        }
    };
    u(d, "ControllerInner");
    let c = d;
    A = c, A.registerVariableGroupType("tradershub.WalletFlows.WalletsWithdrawal.ConvertFiatToCrypto$vars", [{
        name: "Amount",
        attrName: "amountInLocal",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Decimal,
        defaultValue: u(function() {
            return t.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }]), A.registerVariableGroupType("tradershub.WalletFlows.WalletsWithdrawal.AssignPriorityWithdrawalInfoCountdownTimer$vars", [{
        name: "CountdownTimer",
        attrName: "countdownTimerInLocal",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Integer,
        defaultValue: u(function() {
            return 0
        }, "defaultValue")
    }]), A.registerVariableGroupType("tradershub.WalletFlows.WalletsWithdrawal.AssignWithdrawalAmountInCrypto$vars", [{
        name: "AssignWithdrawalAmountInCrypto",
        attrName: "assignWithdrawalAmountInCryptoInLocal",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Decimal,
        defaultValue: u(function() {
            return t.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }]), A.registerVariableGroupType("tradershub.WalletFlows.WalletsWithdrawal.AssignFinalWithdrawalAmount$vars", [{
        name: "FinalCrpytoAmount",
        attrName: "finalCrpytoAmountInLocal",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Decimal,
        defaultValue: u(function() {
            return t.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }]), A.registerVariableGroupType("tradershub.WalletFlows.WalletsWithdrawal.OnReady$sortConfigJSResult", [{
        name: "MinimumWithdrawal",
        attrName: "minimumWithdrawalOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }]), A.registerVariableGroupType("tradershub.WalletFlows.WalletsWithdrawal.ConvertCryptoToFiat$vars", [{
        name: "Amount",
        attrName: "amountInLocal",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Currency,
        defaultValue: u(function() {
            return t.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }]), A.registerVariableGroupType("tradershub.WalletFlows.WalletsWithdrawal.OnPriorityCheck$calculateFinalCryptoAmountJSResult", [{
        name: "FinalAmount",
        attrName: "finalAmountOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Decimal,
        defaultValue: u(function() {
            return t.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }]), A.registerVariableGroupType("tradershub.WalletFlows.WalletsWithdrawal.OnPriorityCheck$convertCryptoToFiatJSResult", [{
        name: "ConvertedAmount",
        attrName: "convertedAmountOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Decimal,
        defaultValue: u(function() {
            return t.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }]), A.registerVariableGroupType("tradershub.WalletFlows.WalletsWithdrawal.AssignExchangeRate$vars", [{
        name: "RatefromAPI",
        attrName: "ratefromAPIInLocal",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }]), A.registerVariableGroupType("tradershub.WalletFlows.WalletsWithdrawal.AssignWithdrawalAmountInFiat$vars", [{
        name: "AssignWithdrawalAmountInFiat",
        attrName: "assignWithdrawalAmountInFiatInLocal",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Decimal,
        defaultValue: u(function() {
            return t.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }]), A.registerVariableGroupType("tradershub.WalletFlows.WalletsWithdrawal.AssignPriorityWithdrawalInfo$vars", [{
        name: "PriorityWithdrawalInfoObj",
        attrName: "priorityWithdrawalInfoObjInLocal",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }]), A.registerVariableGroupType("tradershub.WalletFlows.WalletsWithdrawal.AssignExchangeRateCountdownTimer$vars", [{
        name: "CountdownTimer",
        attrName: "countdownTimerInLocal",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Integer,
        defaultValue: u(function() {
            return 0
        }, "defaultValue")
    }])
}
var A, Ft = new t.Controller.ControllerFactory(A, L);
export {
    Ft as a
};