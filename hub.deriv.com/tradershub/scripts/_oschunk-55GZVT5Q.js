import {
    a as p
} from "./_oschunk-EFUSIMB4.js";
import {
    a as I
} from "./_oschunk-Y45M2O2K.js";
import {
    a as l,
    c as v,
    d as h
} from "./_oschunk-27GDEXUT.js";
import {
    ze as R
} from "./_oschunk-HQOLQB4T.js";
import {
    ia as $
} from "./_oschunk-NTQBNJ73.js";
import {
    c as f
} from "./_oschunk-DVBKI63I.js";
var F = {
        "7v6bg5YzEEaO0ja23TEysA#Value": "Ajouter plus de comptes",
        "NONZJt0gW0+sZ4IXAPIq4Q#Value": "S\xE9lectionner un compte",
        "uKyrCzscnka86elWTeXYXg#Value": "Scannez le code QR pour t\xE9l\xE9charger Deriv GO",
        "HQNXzJrDnUW_Y_u7n_JGYw#Value": "T\xE9l\xE9chargez Deriv GO et plongez dans le trading sur votre mobile.",
        "GZdd9NxHHEm3_2N4R_F7qw#Value": "Deriv GO",
        "BzyRc_7WbESj95bM9dHedA#Value": "Trade with Deriv GO",
        "b02H41d_uUCdlwJgsUp1XA#Value": "T\xE9l\xE9chargez notre application mobile :",
        "GgRGDuCYjUW1MzilRbh91w#Value": "Trader",
        "nVSJowR5Kkir1L0PrqiNiQ#Value": "Multiplicateurs",
        "zCSyKfNfN0ySBwkI7fzobQ#Value": "Options vanille",
        "SBTSUnEXHUu9K6Q+gHiVyQ#Value": "Turbos",
        "K+kpK2OSDEK0gOrMsWOSMA#Value": "Accumulateurs",
        "+sT2nYtfGkmU4Q8tbnfa4Q#Value": "Types de trading :",
        "bnRuapxJ7kWBxK7gVOOlTg#Value": "Options de trading diversifi\xE9es, faibles co\xFBts d'entr\xE9e.",
        "Wql9gnhE6EOluO0PGRlRRA#Value": "Deriv Trader",
        "tYBywluJ6kmvLSoG3Awuqw#Value": "Transfert",
        "DB7Uc9hKmESFIqDzmlZT5g#Value": "Transfert",
        "W31RGGIUvkWN5r9647mLfg#Value": "Solde",
        "daVfdbga4USTPBVggSsdgw#Value": "Ajouter plus de comptes",
        "jG6VFun4h0Wswi+EwOVi7A#Value": "S\xE9lectionner le compte",
        "9ow+XnQp9EeyxEVPpTo5ng#Value": "Transf\xE9rer",
        "pkbvuSgiW0iS0ssRLDRjzg#Value": "Transfert",
        "G5zUJP31nEWIo2MFWeEVcg#Value": "Solde",
        "Q2gQOo4Ojke_T+XVGnIdUg#Value": "Solde",
        "87UEjCWKgEyDAveDBC6OOw#Value": "Pr\xE9voyez le march\xE9 ; profitez si vous avez raison ; ne risquez que ce que vous investissez.",
        "EfSaScn+JkC6q6ZXjwuaGA#Value": "Trading d'options",
        "fQyJTO5UMUWyDTxHyiY_eA#Value": "Remplissez vos informations de compte pour effectuer votre premier d\xE9p\xF4t."
    },
    M = {
        "fr-FR": {
            translations: F,
            isRTL: !1
        }
    };

function D(s, m, _, r) {
    s.IsStaging ? s.BotURL = `${s.BotStaging}/bot` : s.BotURL = `${s.BotProduction}/bot`
}
f(D, "default");

function k(s, m, _, r) {
    var t;
    let n = JSON.parse(s.AvailableAccounts);
    ((t = n == null ? void 0 : n.available_accounts) == null ? void 0 : t.trading.length) > 0 ? s.ShowAddMoreAccount = !0 : s.ShowAddMoreAccount = !1
}
f(k, "default");

function L(s, m, _, r) {
    var d;
    let n = JSON.parse(localStorage.accountsList),
        t = Object.keys(n).find(o => o.startsWith("VRTC"));
    s.Token = (d = n[t]) == null ? void 0 : d.token
}
f(L, "default");

function N(s, m, _, r) {
    let n = "";
    s.IsStaging ? n = s.SmartTraderStaging : n = s.SmartTraderProduction, s.SmartTraderURL = `${n}/${s.Language.toLowerCase()}/trading`
}
f(N, "default");

function V(s, m, _, r) {
    s.IsStaging ? s.DTraderURL = `${s.DerivAppStaging}/dtrader` : s.DTraderURL = `${s.DerivAppProduction}/dtrader`
}
f(V, "default");

function E(s, m, _, r) {
    var u;
    let n = JSON.parse(s.AuthorizeResponse),
        t = (u = n == null ? void 0 : n.authorize) == null ? void 0 : u.account_list,
        d = JSON.parse(s.AllAccountsBalance);
    t.length > 1 ? s.HasRealAccount = !0 : s.HasRealAccount = !1;
    let o = t == null ? void 0 : t.filter(a => a.broker !== "CRW" && a.broker !== "VRW" && a.broker !== "VRTC"),
        c = o == null ? void 0 : o.map(a => {
            var T, b, C, S;
            let i = a.currency,
                y = (T = m.GetCurrencyIcon(i, s.CurrenciesList)) == null ? void 0 : T.CurrencyIcon,
                A = a.loginid,
                O = (b = d == null ? void 0 : d.balance) == null ? void 0 : b.accounts,
                w = (S = m.FormatMoney((C = O[A]) == null ? void 0 : C.balance, i)) == null ? void 0 : S.FormattedNumber;
            return {
                icon: y,
                is_disabled: a.is_disabled,
                loginid: A,
                currency: i,
                balance: w,
                linkedTo: a.linked_to
            }
        });
    s.modifiedAccountList = JSON.stringify(c)
}
f(E, "default");
var e = $; {
    let m = class m extends e.Controller.BaseViewController {
        constructor(r, n, t) {
            super(r, n, t, M);
            var d = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {
                getCurrencies$AggrRefresh: 0
            }, this.dataFetchDependentsGraph = {
                getCurrencies$AggrRefresh: []
            }, this.shouldSendClientVarsToDataSources = !1
        }
        get getCurrencies$AggrRefresh() {
            return this.hasOwnProperty("_getCurrencies$AggrRefresh") || (this._getCurrencies$AggrRefresh = function() {
                var r = function(n, t, u) {
                    var o = this.model,
                        c = this.controller,
                        u = c.callContext(u);
                    return c.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetCurrencies", "screenservices/tradershub/MainFlow/Options/ScreenDataSetGetCurrencies", "npjMYW44GFvhkxw14gO3vA", n, t, function(a) {
                        o.variables.getCurrenciesAggr.dataFetchStatusAttr = a
                    }, function(a) {
                        o.variables.getCurrenciesAggr.replaceWith(e.DataConversion.ServerDataConverter.from(a, o.variables.getCurrenciesAggr.constructor))
                    }, void 0, void 0, void 0, u, void 0, !0).then(function() {
                        return c._onAfterFetch$Action(c.callContext(u))
                    })
                }.bind(this);
                return e.Logger.startActiveSpan("GetCurrencies", function(n) {
                    return n && (n.setAttribute("code.function", "GetCurrencies"), n.setAttribute("outsystems.function.key", "5ca5553a-205a-4b9f-9f91-b0cfa26538cc"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "SCREEN_SERVICE_AGGREGATE_CALL")), e.Flow.tryFinally(function() {
                        return r()
                    }, function() {
                        n && n.end()
                    })
                }, 0)
            }), this._getCurrencies$AggrRefresh
        }
        set getCurrencies$AggrRefresh(r) {
            this._getCurrencies$AggrRefresh = r
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = ["getCurrencies$AggrRefresh"]), this._dataFetchActionNames
        }
        set dataFetchActionNames(r) {
            this._dataFetchActionNames = r
        }
        get _botRedirection$Action() {
            return this.hasOwnProperty("__botRedirection$Action") || (this.__botRedirection$Action = function(r) {
                var n = this.model,
                    t = this.controller,
                    d = this.idService;
                return e.Logger.startActiveSpan("BotRedirection", function(o) {
                    o && (o.setAttribute("code.function", "BotRedirection"), o.setAttribute("outsystems.function.key", "1de9b0e4-a8a4-4569-bb42-e8965f6c3559"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("BotRedirection"), r = t.callContext(r);
                        var c = new e.DataTypes.VariableHolder,
                            u = new e.DataTypes.VariableHolder,
                            a = new e.DataTypes.VariableHolder;
                        if (!n.variables.backOfficeLocksVar.isTradingDisabledAttr) return c.value = v.getPlatformFromURL$Action("", r), u.value = v.getURL$Action(r), a.value = e.Logger.startActiveSpan("GenerateRedirectURL", function(i) {
                            i && (i.setAttribute("code.function", "GenerateRedirectURL"), i.setAttribute("outsystems.function.key", "0b4ff3b1-bf3e-4954-8862-feb5da9a63b5"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(D, "GenerateRedirectURL", "BotRedirection", {
                                    BotStaging: e.DataConversion.JSNodeParamConverter.to(u.value.uRLsOut.binaryBotStagingAttr, e.DataTypes.DataTypes.Text),
                                    IsStaging: e.DataConversion.JSNodeParamConverter.to(c.value.isStagingOut, e.DataTypes.DataTypes.Boolean),
                                    BotProduction: e.DataConversion.JSNodeParamConverter.to(u.value.uRLsOut.binaryBotProductionAttr, e.DataTypes.DataTypes.Text),
                                    BotURL: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                                }, function(y) {
                                    var A = new(t.constructor.getVariableGroupType("tradershub.MainFlow.Options.BotRedirection$generateRedirectURLJSResult"));
                                    return A.botURLOut = e.DataConversion.JSNodeParamConverter.from(y.BotURL, e.DataTypes.DataTypes.Text), A
                                }, {}, {})
                            } finally {
                                i && i.end()
                            }
                        }, 1), e.Navigation.navigateTo(e.Navigation.generateScreenURL(a.value.botURLOut, {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), r, !0)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__botRedirection$Action
        }
        set _botRedirection$Action(r) {
            this.__botRedirection$Action = r
        }
        get _checkShowAddMoreAccount$Action() {
            return this.hasOwnProperty("__checkShowAddMoreAccount$Action") || (this.__checkShowAddMoreAccount$Action = function(r) {
                var n = this.model,
                    t = this.controller,
                    d = this.idService;
                return e.Logger.startActiveSpan("CheckShowAddMoreAccount", function(o) {
                    return o && (o.setAttribute("code.function", "CheckShowAddMoreAccount"), o.setAttribute("outsystems.function.key", "2f09bd65-eb6e-43fb-ba87-3f604bedecd4"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        t.ensureControllerAlive("CheckShowAddMoreAccount"), r = t.callContext(r);
                        var c = new e.DataTypes.VariableHolder,
                            u = new e.DataTypes.VariableHolder;
                        return e.Flow.executeAsyncFlow(function() {
                            return n.flush(), h.getAvailableAccounts$Action(r).then(function(a) {
                                c.value = a
                            }).then(function() {
                                u.value = e.Logger.startActiveSpan("CheckShowAddMoreAccount", function(a) {
                                    a && (a.setAttribute("code.function", "CheckShowAddMoreAccount"), a.setAttribute("outsystems.function.key", "ffcdd2cc-cdab-49df-8312-3e3c2ebabb19"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return t.safeExecuteJSNode(k, "CheckShowAddMoreAccount", "CheckShowAddMoreAccount", {
                                            AvailableAccounts: e.DataConversion.JSNodeParamConverter.to(c.value.responseOut, e.DataTypes.DataTypes.Text),
                                            ShowAddMoreAccount: e.DataConversion.JSNodeParamConverter.to(!0, e.DataTypes.DataTypes.Boolean)
                                        }, function(i) {
                                            var y = new(t.constructor.getVariableGroupType("tradershub.MainFlow.Options.CheckShowAddMoreAccount$checkShowAddMoreAccountJSResult"));
                                            return y.showAddMoreAccountOut = e.DataConversion.JSNodeParamConverter.from(i.ShowAddMoreAccount, e.DataTypes.DataTypes.Boolean), y
                                        }, {}, {})
                                    } finally {
                                        a && a.end()
                                    }
                                }, 1), n.variables.showAddMoreAccountVar = u.value.showAddMoreAccountOut
                            })
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 1)
            }), this.__checkShowAddMoreAccount$Action
        }
        set _checkShowAddMoreAccount$Action(r) {
            this.__checkShowAddMoreAccount$Action = r
        }
        get _closeDerivGoModal$Action() {
            return this.hasOwnProperty("__closeDerivGoModal$Action") || (this.__closeDerivGoModal$Action = function(r) {
                var n = this.model,
                    t = this.controller,
                    d = this.idService;
                return e.Logger.startActiveSpan("CloseDerivGoModal", function(o) {
                    o && (o.setAttribute("code.function", "CloseDerivGoModal"), o.setAttribute("outsystems.function.key", "63d65366-894e-4940-8ca4-b9c0b3839019"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("CloseDerivGoModal"), r = t.callContext(r), n.variables.isDerivGoModalVisibleVar = !1
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__closeDerivGoModal$Action
        }
        set _closeDerivGoModal$Action(r) {
            this.__closeDerivGoModal$Action = r
        }
        get _setDemoValue$Action() {
            return this.hasOwnProperty("__setDemoValue$Action") || (this.__setDemoValue$Action = function(r) {
                var n = this.model,
                    t = this.controller,
                    d = this.idService;
                return e.Logger.startActiveSpan("SetDemoValue", function(o) {
                    return o && (o.setAttribute("code.function", "SetDemoValue"), o.setAttribute("outsystems.function.key", "6d23b402-d193-433a-92ee-91b0fe0415cb"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        t.ensureControllerAlive("SetDemoValue"), r = t.callContext(r);
                        var c = new e.DataTypes.VariableHolder,
                            u = new e.DataTypes.VariableHolder,
                            a = new e.DataTypes.VariableHolder;
                        return e.Flow.executeAsyncFlow(function() {
                            return e.Flow.executeSequence(function() {
                                if (l.getAccountType() !== "demo") return l.setAccountType("demo"), a.value = e.Logger.startActiveSpan("GenerateDemoAccountToken", function(i) {
                                    i && (i.setAttribute("code.function", "GenerateDemoAccountToken"), i.setAttribute("outsystems.function.key", "9ede4f3f-ba3a-4921-b749-af69f8b99121"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return t.safeExecuteJSNode(L, "GenerateDemoAccountToken", "SetDemoValue", {
                                            Token: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                                        }, function(y) {
                                            var A = new(t.constructor.getVariableGroupType("tradershub.MainFlow.Options.SetDemoValue$generateDemoAccountTokenJSResult"));
                                            return A.tokenOut = e.DataConversion.JSNodeParamConverter.from(y.Token, e.DataTypes.DataTypes.Text), A
                                        }, {}, {})
                                    } finally {
                                        i && i.end()
                                    }
                                }, 1), l.setAuthToken(a.value.tokenOut), n.variables.isBalanceLoadingVar = !0, n.flush(), h.sendAuthorize$Action(!1, r).then(function(i) {
                                    c.value = i
                                }).then(function() {
                                    return u.value = v.formatMoney$Action(c.value.responseOut.authorizeAttr.balanceAttr, c.value.responseOut.authorizeAttr.currencyAttr, "en-US", "", r), t._getBOLocks$Action(r)
                                }).then(function() {
                                    n.variables.selectedAccountCurrencyVar = c.value.responseOut.authorizeAttr.currencyAttr, n.variables.selectedAccountBalanceVar = u.value.formattedNumberOut, n.variables.isBalanceLoadingVar = !1, l.setDemoLoginId(c.value.responseOut.authorizeAttr.loginidAttr)
                                })
                            })
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 1)
            }), this.__setDemoValue$Action
        }
        set _setDemoValue$Action(r) {
            this.__setDemoValue$Action = r
        }
        get _titleContainerMobileOnClick$Action() {
            return this.hasOwnProperty("__titleContainerMobileOnClick$Action") || (this.__titleContainerMobileOnClick$Action = function(r) {
                var n = this.model,
                    t = this.controller,
                    d = this.idService;
                return e.Logger.startActiveSpan("TitleContainerMobileOnClick", function(o) {
                    o && (o.setAttribute("code.function", "TitleContainerMobileOnClick"), o.setAttribute("outsystems.function.key", "914be576-b183-4eb7-9117-3dd64799a0e9"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("TitleContainerMobileOnClick"), r = t.callContext(r), n.variables.openAccountSwitcherModalVar = !1
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__titleContainerMobileOnClick$Action
        }
        set _titleContainerMobileOnClick$Action(r) {
            this.__titleContainerMobileOnClick$Action = r
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(r) {
                var n = this.model,
                    t = this.controller,
                    d = this.idService;
                return e.Logger.startActiveSpan("OnInitialize", function(o) {
                    o && (o.setAttribute("code.function", "OnInitialize"), o.setAttribute("outsystems.function.key", "b762faea-95cc-488e-b6cd-93dedfe33962"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), r = t.callContext(r);
                        var c = new e.DataTypes.VariableHolder;
                        if (c.value = h.featureFlagValueByName$Action("Options", r), c.value.isEnabledOut) n.variables.isAccountSwitcherOpenVar = !1, n.variables.openAccountSwitcherModalVar = !1;
                        else return e.Navigation.navigateTo(e.Navigation.generateScreenURL("https://app.deriv.com", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), r, !0)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(r) {
            this.__onInitialize$Action = r
        }
        get _setRealValue$Action() {
            return this.hasOwnProperty("__setRealValue$Action") || (this.__setRealValue$Action = function(r) {
                var n = this.model,
                    t = this.controller,
                    d = this.idService;
                return e.Logger.startActiveSpan("SetRealValue", function(o) {
                    return o && (o.setAttribute("code.function", "SetRealValue"), o.setAttribute("outsystems.function.key", "b8147e75-d97a-4bc7-b4e3-ae175ee9f3a0"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        t.ensureControllerAlive("SetRealValue"), r = t.callContext(r);
                        var c = new e.DataTypes.VariableHolder,
                            u = new e.DataTypes.VariableHolder;
                        return e.Flow.executeAsyncFlow(function() {
                            return e.Flow.executeSequence(function() {
                                if (l.getAccountType() !== "real") return e.Flow.executeSequence(function() {
                                    return n.variables.hasRealAccountVar ? (l.setAccountType("real"), n.variables.isBalanceLoadingVar = !0, l.setDemoLoginId(""), n.flush(), h.setTokenByLoginId$Action(l.getActiveLoginId(), r).then(function(a) {
                                        u.value = a
                                    }).then(function() {
                                        return c.value = v.formatMoney$Action(u.value.responseOut.authorizeAttr.balanceAttr, u.value.responseOut.authorizeAttr.currencyAttr, "en-US", "", r), t._getBOLocks$Action(r)
                                    }).then(function() {
                                        n.variables.selectedAccountCurrencyVar = u.value.responseOut.authorizeAttr.currencyAttr, n.variables.selectedAccountBalanceVar = c.value.formattedNumberOut, n.variables.isBalanceLoadingVar = !1
                                    })) : (l.setInitializeRealSignup(!0), e.Flow.returnAsync(e.Navigation.navigateTo(e.Navigation.generateScreenURL("tradershub", "currency-selection", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), r, !0)))
                                })
                            })
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 1)
            }), this.__setRealValue$Action
        }
        set _setRealValue$Action(r) {
            this.__setRealValue$Action = r
        }
        get _toggleDerivGoModal$Action() {
            return this.hasOwnProperty("__toggleDerivGoModal$Action") || (this.__toggleDerivGoModal$Action = function(r) {
                var n = this.model,
                    t = this.controller,
                    d = this.idService;
                return e.Logger.startActiveSpan("ToggleDerivGoModal", function(o) {
                    o && (o.setAttribute("code.function", "ToggleDerivGoModal"), o.setAttribute("outsystems.function.key", "c5b4eb28-605c-46d0-ac5f-cad5bd5f50e8"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("ToggleDerivGoModal"), r = t.callContext(r), n.variables.isDerivGoModalVisibleVar ? n.variables.isDerivGoModalVisibleVar = !1 : n.variables.isDerivGoModalVisibleVar = !0
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__toggleDerivGoModal$Action
        }
        set _toggleDerivGoModal$Action(r) {
            this.__toggleDerivGoModal$Action = r
        }
        get _smarttraderRedirection$Action() {
            return this.hasOwnProperty("__smarttraderRedirection$Action") || (this.__smarttraderRedirection$Action = function(r) {
                var n = this.model,
                    t = this.controller,
                    d = this.idService;
                return e.Logger.startActiveSpan("SmarttraderRedirection", function(o) {
                    o && (o.setAttribute("code.function", "SmarttraderRedirection"), o.setAttribute("outsystems.function.key", "c6b3987a-000b-4194-931b-a693602e19fc"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("SmarttraderRedirection"), r = t.callContext(r);
                        var c = new e.DataTypes.VariableHolder,
                            u = new e.DataTypes.VariableHolder,
                            a = new e.DataTypes.VariableHolder;
                        if (!n.variables.backOfficeLocksVar.isTradingDisabledAttr) return u.value = v.getPlatformFromURL$Action("", r), c.value = v.getURL$Action(r), a.value = e.Logger.startActiveSpan("GenerateRedirectURL", function(i) {
                            i && (i.setAttribute("code.function", "GenerateRedirectURL"), i.setAttribute("outsystems.function.key", "a6a19897-89cd-4d4c-8c86-58b20f617e2d"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(N, "GenerateRedirectURL", "SmarttraderRedirection", {
                                    IsStaging: e.DataConversion.JSNodeParamConverter.to(u.value.isStagingOut, e.DataTypes.DataTypes.Boolean),
                                    Language: e.DataConversion.JSNodeParamConverter.to(l.getLang(), e.DataTypes.DataTypes.Text),
                                    SmartTraderStaging: e.DataConversion.JSNodeParamConverter.to(c.value.uRLsOut.smartTraderStagingAttr, e.DataTypes.DataTypes.Text),
                                    SmartTraderProduction: e.DataConversion.JSNodeParamConverter.to(c.value.uRLsOut.smartTraderProductionAttr, e.DataTypes.DataTypes.Text),
                                    SmartTraderURL: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                                }, function(y) {
                                    var A = new(t.constructor.getVariableGroupType("tradershub.MainFlow.Options.SmarttraderRedirection$generateRedirectURLJSResult"));
                                    return A.smartTraderURLOut = e.DataConversion.JSNodeParamConverter.from(y.SmartTraderURL, e.DataTypes.DataTypes.Text), A
                                }, {}, {})
                            } finally {
                                i && i.end()
                            }
                        }, 1), e.Navigation.navigateTo(e.Navigation.generateScreenURL(a.value.smartTraderURLOut, {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), r, !0)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__smarttraderRedirection$Action
        }
        set _smarttraderRedirection$Action(r) {
            this.__smarttraderRedirection$Action = r
        }
        get _dTraderRedirection$Action() {
            return this.hasOwnProperty("__dTraderRedirection$Action") || (this.__dTraderRedirection$Action = function(r) {
                var n = this.model,
                    t = this.controller,
                    d = this.idService;
                return e.Logger.startActiveSpan("DTraderRedirection", function(o) {
                    o && (o.setAttribute("code.function", "DTraderRedirection"), o.setAttribute("outsystems.function.key", "c7004687-ecb0-439f-882d-5e8665d0b80a"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("DTraderRedirection"), r = t.callContext(r);
                        var c = new e.DataTypes.VariableHolder,
                            u = new e.DataTypes.VariableHolder,
                            a = new e.DataTypes.VariableHolder;
                        if (!n.variables.backOfficeLocksVar.isTradingDisabledAttr) return u.value = v.getPlatformFromURL$Action("", r), c.value = v.getURL$Action(r), a.value = e.Logger.startActiveSpan("GenerateRedirectURL", function(i) {
                            i && (i.setAttribute("code.function", "GenerateRedirectURL"), i.setAttribute("outsystems.function.key", "e7a5bc8a-073b-4f06-97be-53ddb87bd860"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(V, "GenerateRedirectURL", "DTraderRedirection", {
                                    IsStaging: e.DataConversion.JSNodeParamConverter.to(u.value.isStagingOut, e.DataTypes.DataTypes.Boolean),
                                    DerivAppProduction: e.DataConversion.JSNodeParamConverter.to(c.value.uRLsOut.derivAppProductionAttr, e.DataTypes.DataTypes.Text),
                                    DerivAppStaging: e.DataConversion.JSNodeParamConverter.to(c.value.uRLsOut.derivAppStagingAttr, e.DataTypes.DataTypes.Text),
                                    DTraderURL: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                                }, function(y) {
                                    var A = new(t.constructor.getVariableGroupType("tradershub.MainFlow.Options.DTraderRedirection$generateRedirectURLJSResult"));
                                    return A.dTraderURLOut = e.DataConversion.JSNodeParamConverter.from(y.DTraderURL, e.DataTypes.DataTypes.Text), A
                                }, {}, {})
                            } finally {
                                i && i.end()
                            }
                        }, 1), e.Navigation.navigateTo(e.Navigation.generateScreenURL(a.value.dTraderURLOut, {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), r, !0)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__dTraderRedirection$Action
        }
        set _dTraderRedirection$Action(r) {
            this.__dTraderRedirection$Action = r
        }
        get _onAfterFetch$Action() {
            return this.hasOwnProperty("__onAfterFetch$Action") || (this.__onAfterFetch$Action = function(r) {
                var n = this.model,
                    t = this.controller,
                    d = this.idService;
                return e.Logger.startActiveSpan("OnAfterFetch", function(o) {
                    return o && (o.setAttribute("code.function", "OnAfterFetch"), o.setAttribute("outsystems.function.key", "c8ca48b3-64fd-4078-b6ca-984ca31166a3"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnAfterFetch"), r = t.callContext(r);
                        var c = new e.DataTypes.VariableHolder,
                            u = new e.DataTypes.VariableHolder,
                            a = new e.DataTypes.VariableHolder,
                            i = new e.DataTypes.VariableHolder,
                            y = new e.DataTypes.VariableHolder,
                            A = new e.DataTypes.VariableHolder,
                            O = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                            w = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                            T = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(R)));
                        return e.Flow.executeAsyncFlow(function() {
                            return n.variables.isLoadingVar = !0, n.variables.isBalanceLoadingVar = !0, l.setTempClientCountry(""), n.flush(), h.getWebsiteStatus$Action(r).then(function() {
                                return e.Flow.executeSequence(function() {
                                    if (l.getAuthToken() !== e.BuiltinFunctions.nullTextIdentifier()) return t._getBOLocks$Action(r).then(function() {
                                        return n.flush(), h.setTokenByLoginId$Action(l.getDemoLoginId() === "" ? l.getActiveLoginId() : l.getDemoLoginId(), r).then(function(b) {
                                            a.value = b
                                        })
                                    }).then(function() {
                                        return c.value = v.formatMoney$Action(a.value.responseOut.authorizeAttr.balanceAttr, a.value.responseOut.authorizeAttr.currencyAttr, "en-US", "", r), n.variables.selectedAccountCurrencyVar = a.value.responseOut.authorizeAttr.currencyAttr, n.variables.selectedAccountBalanceVar = c.value.formattedNumberOut, O.value.jSONOut = e.JSONUtils.serializeToJSON(a.value.responseOut, !0, !1), n.flush(), h.getAllAccountsBalance$Action(r).then(function(b) {
                                            y.value = b
                                        })
                                    }).then(function() {
                                        return w.value.jSONOut = e.JSONUtils.serializeToJSON(n.variables.getCurrenciesAggr.listOut, !1, !1), A.value = e.Logger.startActiveSpan("FilterAccountList", function(b) {
                                            b && (b.setAttribute("code.function", "FilterAccountList"), b.setAttribute("outsystems.function.key", "67a17f15-b3e2-47ab-b230-c06052743047"), b.setAttribute("outsystems.function.owner.name", "tradershub"), b.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), b.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                            try {
                                                return t.safeExecuteJSNode(E, "FilterAccountList", "OnAfterFetch", {
                                                    AllAccountsBalance: e.DataConversion.JSNodeParamConverter.to(y.value.responseOut, e.DataTypes.DataTypes.Text),
                                                    CurrenciesList: e.DataConversion.JSNodeParamConverter.to(w.value.jSONOut, e.DataTypes.DataTypes.Text),
                                                    AuthorizeResponse: e.DataConversion.JSNodeParamConverter.to(O.value.jSONOut, e.DataTypes.DataTypes.Text),
                                                    modifiedAccountList: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                                    HasRealAccount: e.DataConversion.JSNodeParamConverter.to(!0, e.DataTypes.DataTypes.Boolean)
                                                }, function(C) {
                                                    var S = new(t.constructor.getVariableGroupType("tradershub.MainFlow.Options.OnAfterFetch$filterAccountListJSResult"));
                                                    return S.modifiedAccountListOut = e.DataConversion.JSNodeParamConverter.from(C.modifiedAccountList, e.DataTypes.DataTypes.Text), S.hasRealAccountOut = e.DataConversion.JSNodeParamConverter.from(C.HasRealAccount, e.DataTypes.DataTypes.Boolean), S
                                                }, {
                                                    GetCurrencyIcon: h.clientActionProxies.getCurrencyIcon$Action,
                                                    FormatMoney: v.clientActionProxies.formatMoney$Action
                                                }, {})
                                            } finally {
                                                b && b.end()
                                            }
                                        }, 1), T.value.dataOut = e.JSONUtils.deserializeFromJSON(A.value.modifiedAccountListOut, R, !1), n.variables.filteredAccountListVar = T.value.dataOut, n.variables.hasRealAccountVar = A.value.hasRealAccountOut, l.setAccountType(A.value.hasRealAccountOut && l.getDemoLoginId() === "" ? "real" : "demo"), l.setClientCountry(a.value.responseOut.authorizeAttr.countryAttr), t._checkShowAddMoreAccount$Action(r)
                                    })
                                })
                            }).then(function() {
                                return n.flush(), h.tradingPlatformProductListing$Action(l.getClientCountry(), r).then(function(b) {
                                    i.value = b
                                })
                            }).then(function() {
                                return e.Flow.executeSequence(function() {
                                    if (i.value.responseOut.isTradingAllowedAttr) n.variables.tradingPlatformProductListingResponseVar = i.value.responseOut;
                                    else return l.getConfirmedNotResident() || (n.variables.shouldShowWarningPopupVar = !0), l.setTempClientCountry("id"), n.flush(), h.tradingPlatformProductListing$Action(l.getClientCountry(), r).then(function(b) {
                                        u.value = b
                                    }).then(function() {
                                        n.variables.tradingPlatformProductListingResponseVar = u.value.responseOut
                                    })
                                })
                            }).then(function() {
                                n.variables.isLoadingVar = !1, n.variables.isBalanceLoadingVar = !1
                            })
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 1)
            }), this.__onAfterFetch$Action
        }
        set _onAfterFetch$Action(r) {
            this.__onAfterFetch$Action = r
        }
        get _mobileAccountSwitcherOnClick$Action() {
            return this.hasOwnProperty("__mobileAccountSwitcherOnClick$Action") || (this.__mobileAccountSwitcherOnClick$Action = function(r) {
                var n = this.model,
                    t = this.controller,
                    d = this.idService;
                return e.Logger.startActiveSpan("MobileAccountSwitcherOnClick", function(o) {
                    o && (o.setAttribute("code.function", "MobileAccountSwitcherOnClick"), o.setAttribute("outsystems.function.key", "d1da44cc-b8ee-42c7-9e9b-9a28108531a6"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("MobileAccountSwitcherOnClick"), r = t.callContext(r), n.variables.openAccountSwitcherModalVar = !n.variables.isAccountSwitcherOpenVar
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__mobileAccountSwitcherOnClick$Action
        }
        set _mobileAccountSwitcherOnClick$Action(r) {
            this.__mobileAccountSwitcherOnClick$Action = r
        }
        get _accountListItemOnClick$Action() {
            return this.hasOwnProperty("__accountListItemOnClick$Action") || (this.__accountListItemOnClick$Action = function(r) {
                var n = this.model,
                    t = this.controller,
                    d = this.idService;
                return e.Logger.startActiveSpan("AccountListItemOnClick", function(o) {
                    return o && (o.setAttribute("code.function", "AccountListItemOnClick"), o.setAttribute("outsystems.function.key", "df02d2d7-eabb-4d17-b734-90a01240b10c"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        t.ensureControllerAlive("AccountListItemOnClick"), r = t.callContext(r);
                        var c = new e.DataTypes.VariableHolder,
                            u = new e.DataTypes.VariableHolder,
                            a = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType);
                        return e.Flow.executeAsyncFlow(function() {
                            return e.Flow.executeSequence(function() {
                                if (l.getActiveLoginId() !== n.variables.filteredAccountListVar.getCurrent(r.iterationContext).loginidAttr) return n.variables.isAccountSwitcherOpenVar = !1, n.variables.openAccountSwitcherModalVar = !1, n.flush(), h.setTokenByLoginId$Action(n.variables.filteredAccountListVar.getCurrent(r.iterationContext).loginidAttr, r).then(function(i) {
                                    c.value = i
                                }).then(function() {
                                    n.variables.isBalanceLoadingVar = !0
                                }).then(function() {
                                    c.value.isErrorOut ? n.variables.isBalanceLoadingVar = !1 : (u.value = v.formatMoney$Action(c.value.responseOut.authorizeAttr.balanceAttr, c.value.responseOut.authorizeAttr.currencyAttr, "en-US", "", r), a.value.jSONOut = e.JSONUtils.serializeToJSON(n.variables.filteredAccountListVar.getCurrent(r.iterationContext).linkedToAttr, !1, !1), n.variables.selectedAccountCurrencyVar = c.value.responseOut.authorizeAttr.currencyAttr, n.variables.selectedAccountBalanceVar = u.value.formattedNumberOut, l.setActiveLoginId(n.variables.filteredAccountListVar.getCurrent(r.iterationContext).loginidAttr), n.variables.isBalanceLoadingVar = !1, l.setLinkedTo(a.value.jSONOut))
                                })
                            })
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 1)
            }), this.__accountListItemOnClick$Action
        }
        set _accountListItemOnClick$Action(r) {
            this.__accountListItemOnClick$Action = r
        }
        get _openAccountSwitcherOnClick$Action() {
            return this.hasOwnProperty("__openAccountSwitcherOnClick$Action") || (this.__openAccountSwitcherOnClick$Action = function(r) {
                var n = this.model,
                    t = this.controller,
                    d = this.idService;
                return e.Logger.startActiveSpan("OpenAccountSwitcherOnClick", function(o) {
                    o && (o.setAttribute("code.function", "OpenAccountSwitcherOnClick"), o.setAttribute("outsystems.function.key", "e39b3dc6-6a25-4cab-88f7-0d9c911c931a"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OpenAccountSwitcherOnClick"), r = t.callContext(r), n.variables.isAccountSwitcherOpenVar = !n.variables.isAccountSwitcherOpenVar
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__openAccountSwitcherOnClick$Action
        }
        set _openAccountSwitcherOnClick$Action(r) {
            this.__openAccountSwitcherOnClick$Action = r
        }
        get _getBOLocks$Action() {
            return this.hasOwnProperty("__getBOLocks$Action") || (this.__getBOLocks$Action = function(r) {
                var n = this.model,
                    t = this.controller,
                    d = this.idService;
                return e.Logger.startActiveSpan("GetBOLocks", function(o) {
                    return o && (o.setAttribute("code.function", "GetBOLocks"), o.setAttribute("outsystems.function.key", "f6e83c42-f57b-4248-99a1-ac5dd7b8eb1f"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        t.ensureControllerAlive("GetBOLocks"), r = t.callContext(r);
                        var c = new e.DataTypes.VariableHolder;
                        return e.Flow.executeAsyncFlow(function() {
                            return n.flush(), h.getBackOfficeLocks$Action(r).then(function(u) {
                                c.value = u
                            }).then(function() {
                                n.variables.backOfficeLocksVar = c.value.responseOut
                            })
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 1)
            }), this.__getBOLocks$Action
        }
        set _getBOLocks$Action(r) {
            this.__getBOLocks$Action = r
        }
        get _confirmedNotResidentOnClick$Action() {
            return this.hasOwnProperty("__confirmedNotResidentOnClick$Action") || (this.__confirmedNotResidentOnClick$Action = function(r) {
                var n = this.model,
                    t = this.controller,
                    d = this.idService;
                return e.Logger.startActiveSpan("confirmedNotResidentOnClick", function(o) {
                    o && (o.setAttribute("code.function", "confirmedNotResidentOnClick"), o.setAttribute("outsystems.function.key", "fae9c095-fd91-4443-82bc-66e2f1ffcae4"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("confirmedNotResidentOnClick"), r = t.callContext(r), l.setConfirmedNotResident(!0), n.variables.shouldShowWarningPopupVar = !1
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__confirmedNotResidentOnClick$Action
        }
        set _confirmedNotResidentOnClick$Action(r) {
            this.__confirmedNotResidentOnClick$Action = r
        }
        botRedirection$Action(r) {
            var n = this.controller;
            return e.Logger.startActiveSpan("BotRedirection__proxy", function(t) {
                t && (t.setAttribute("code.function", "BotRedirection"), t.setAttribute("outsystems.function.key", "1de9b0e4-a8a4-4569-bb42-e8965f6c3559"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._botRedirection$Action, r)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        checkShowAddMoreAccount$Action(r) {
            var n = this.controller;
            return e.Logger.startActiveSpan("CheckShowAddMoreAccount__proxy", function(t) {
                return t && (t.setAttribute("code.function", "CheckShowAddMoreAccount"), t.setAttribute("outsystems.function.key", "2f09bd65-eb6e-43fb-ba87-3f604bedecd4"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._checkShowAddMoreAccount$Action, r)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        closeDerivGoModal$Action(r) {
            var n = this.controller;
            return e.Logger.startActiveSpan("CloseDerivGoModal__proxy", function(t) {
                t && (t.setAttribute("code.function", "CloseDerivGoModal"), t.setAttribute("outsystems.function.key", "63d65366-894e-4940-8ca4-b9c0b3839019"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._closeDerivGoModal$Action, r)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        setDemoValue$Action(r) {
            var n = this.controller;
            return e.Logger.startActiveSpan("SetDemoValue__proxy", function(t) {
                return t && (t.setAttribute("code.function", "SetDemoValue"), t.setAttribute("outsystems.function.key", "6d23b402-d193-433a-92ee-91b0fe0415cb"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._setDemoValue$Action, r)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        titleContainerMobileOnClick$Action(r) {
            var n = this.controller;
            return e.Logger.startActiveSpan("TitleContainerMobileOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "TitleContainerMobileOnClick"), t.setAttribute("outsystems.function.key", "914be576-b183-4eb7-9117-3dd64799a0e9"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._titleContainerMobileOnClick$Action, r)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onInitialize$Action(r) {
            var n = this.controller;
            return e.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "b762faea-95cc-488e-b6cd-93dedfe33962"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onInitialize$Action, r)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        setRealValue$Action(r) {
            var n = this.controller;
            return e.Logger.startActiveSpan("SetRealValue__proxy", function(t) {
                return t && (t.setAttribute("code.function", "SetRealValue"), t.setAttribute("outsystems.function.key", "b8147e75-d97a-4bc7-b4e3-ae175ee9f3a0"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._setRealValue$Action, r)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        toggleDerivGoModal$Action(r) {
            var n = this.controller;
            return e.Logger.startActiveSpan("ToggleDerivGoModal__proxy", function(t) {
                t && (t.setAttribute("code.function", "ToggleDerivGoModal"), t.setAttribute("outsystems.function.key", "c5b4eb28-605c-46d0-ac5f-cad5bd5f50e8"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._toggleDerivGoModal$Action, r)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        smarttraderRedirection$Action(r) {
            var n = this.controller;
            return e.Logger.startActiveSpan("SmarttraderRedirection__proxy", function(t) {
                t && (t.setAttribute("code.function", "SmarttraderRedirection"), t.setAttribute("outsystems.function.key", "c6b3987a-000b-4194-931b-a693602e19fc"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._smarttraderRedirection$Action, r)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        dTraderRedirection$Action(r) {
            var n = this.controller;
            return e.Logger.startActiveSpan("DTraderRedirection__proxy", function(t) {
                t && (t.setAttribute("code.function", "DTraderRedirection"), t.setAttribute("outsystems.function.key", "c7004687-ecb0-439f-882d-5e8665d0b80a"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._dTraderRedirection$Action, r)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onAfterFetch$Action(r) {
            var n = this.controller;
            return e.Logger.startActiveSpan("OnAfterFetch__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnAfterFetch"), t.setAttribute("outsystems.function.key", "c8ca48b3-64fd-4078-b6ca-984ca31166a3"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onAfterFetch$Action, r)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        mobileAccountSwitcherOnClick$Action(r) {
            var n = this.controller;
            return e.Logger.startActiveSpan("MobileAccountSwitcherOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "MobileAccountSwitcherOnClick"), t.setAttribute("outsystems.function.key", "d1da44cc-b8ee-42c7-9e9b-9a28108531a6"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._mobileAccountSwitcherOnClick$Action, r)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        accountListItemOnClick$Action(r) {
            var n = this.controller;
            return e.Logger.startActiveSpan("AccountListItemOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "AccountListItemOnClick"), t.setAttribute("outsystems.function.key", "df02d2d7-eabb-4d17-b734-90a01240b10c"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._accountListItemOnClick$Action, r)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        openAccountSwitcherOnClick$Action(r) {
            var n = this.controller;
            return e.Logger.startActiveSpan("OpenAccountSwitcherOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "OpenAccountSwitcherOnClick"), t.setAttribute("outsystems.function.key", "e39b3dc6-6a25-4cab-88f7-0d9c911c931a"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._openAccountSwitcherOnClick$Action, r)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        getBOLocks$Action(r) {
            var n = this.controller;
            return e.Logger.startActiveSpan("GetBOLocks__proxy", function(t) {
                return t && (t.setAttribute("code.function", "GetBOLocks"), t.setAttribute("outsystems.function.key", "f6e83c42-f57b-4248-99a1-ac5dd7b8eb1f"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._getBOLocks$Action, r)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        confirmedNotResidentOnClick$Action(r) {
            var n = this.controller;
            return e.Logger.startActiveSpan("confirmedNotResidentOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "confirmedNotResidentOnClick"), t.setAttribute("outsystems.function.key", "fae9c095-fd91-4443-82bc-66e2f1ffcae4"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._confirmedNotResidentOnClick$Action, r)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(r) {
                var n = this.controller,
                    t = this.model,
                    d = this.idService;
                return n.onInitialize$Action(r)
            }), this._onInitializeEventHandler
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
                return p.default.handleError(r, this.callContext())
            }), this._handleError
        }
        set handleError(r) {
            this._handleError = r
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return h.defaultTimeout
        }
    };
    f(m, "ControllerInner");
    let s = m;
    g = s, g.registerVariableGroupType("tradershub.MainFlow.Options.BotRedirection$generateRedirectURLJSResult", [{
        name: "BotURL",
        attrName: "botURLOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: f(function() {
            return ""
        }, "defaultValue")
    }]), g.registerVariableGroupType("tradershub.MainFlow.Options.CheckShowAddMoreAccount$checkShowAddMoreAccountJSResult", [{
        name: "ShowAddMoreAccount",
        attrName: "showAddMoreAccountOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Boolean,
        defaultValue: f(function() {
            return !0
        }, "defaultValue")
    }]), g.registerVariableGroupType("tradershub.MainFlow.Options.SetDemoValue$generateDemoAccountTokenJSResult", [{
        name: "Token",
        attrName: "tokenOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: f(function() {
            return ""
        }, "defaultValue")
    }]), g.registerVariableGroupType("tradershub.MainFlow.Options.SmarttraderRedirection$generateRedirectURLJSResult", [{
        name: "SmartTraderURL",
        attrName: "smartTraderURLOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: f(function() {
            return ""
        }, "defaultValue")
    }]), g.registerVariableGroupType("tradershub.MainFlow.Options.DTraderRedirection$generateRedirectURLJSResult", [{
        name: "DTraderURL",
        attrName: "dTraderURLOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: f(function() {
            return ""
        }, "defaultValue")
    }]), g.registerVariableGroupType("tradershub.MainFlow.Options.OnAfterFetch$filterAccountListJSResult", [{
        name: "modifiedAccountList",
        attrName: "modifiedAccountListOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: f(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "HasRealAccount",
        attrName: "hasRealAccountOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Boolean,
        defaultValue: f(function() {
            return !0
        }, "defaultValue")
    }])
}
var g, ft = new e.Controller.ControllerFactory(g, I);
export {
    ft as a
};