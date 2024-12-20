import {
    a as E
} from "./_oschunk-IAMW2WLL.js";
import {
    a as L
} from "./_oschunk-5N5TJ3ES.js";
import {
    a as i,
    b as I,
    d as D
} from "./_oschunk-VADNKVBQ.js";
import {
    ia as S
} from "./_oschunk-5EPHB76O.js";
import {
    c as u
} from "./_oschunk-DVBKI63I.js";
var P = {
        "jdt5E6jUOUOpxBFBIj8EmA#Value": "O",
        "S9hQ1O_oCEWQ1ydlm0jjkg#Value": "Afin d'\xE9valuer votre exp\xE9rience de trading et de d\xE9terminer si nos produits vous conviennent, veuillez fournir des r\xE9ponses pr\xE9cises et compl\xE8tes. Vos r\xE9ponses peuvent influencer le r\xE9sultat de cette \xE9valuation.",
        "Jm6gTdowi0yaSSy1aJv7fA#Value": "Afin d'\xE9valuer votre exp\xE9rience de trading et de d\xE9terminer si nos produits vous conviennent, veuillez fournir des r\xE9ponses pr\xE9cises et compl\xE8tes. Vos r\xE9ponses peuvent influencer le r\xE9sultat de cette \xE9valuation.",
        "sYNqsSZmlE2WXRmrzDktLg#Value": "Afin d'\xE9valuer votre exp\xE9rience de trading et de d\xE9terminer si nos produits vous conviennent, veuillez fournir des r\xE9ponses pr\xE9cises et compl\xE8tes. Vos r\xE9ponses peuvent influencer le r\xE9sultat de cette \xE9valuation.",
        "8XXsAxkvVUCdXwqvWrpo+w#Value": "Afin d'\xE9valuer votre exp\xE9rience de trading et de d\xE9terminer si nos produits vous conviennent, veuillez fournir des r\xE9ponses pr\xE9cises et compl\xE8tes. Vos r\xE9ponses peuvent influencer le r\xE9sultat de cette \xE9valuation.",
        "EwaOanFJYkO6wMssllc+eA#Title": "Redirection | Deriv",
        "EwaOanFJYkO6wMssllc+eA#TitleExpression.-708286336.1": "Redirection | Deriv"
    },
    J = {
        "EwaOanFJYkO6wMssllc+eA#Title": "\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062A\u0648\u062C\u064A\u0647 | Deriv",
        "EwaOanFJYkO6wMssllc+eA#TitleExpression.-708286336.1": "\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062A\u0648\u062C\u064A\u0647 | Deriv"
    },
    x = {
        "EwaOanFJYkO6wMssllc+eA#Title": "Weiterleitung | Deriv",
        "EwaOanFJYkO6wMssllc+eA#TitleExpression.-708286336.1": "Weiterleitung | Deriv"
    },
    V = {
        "EwaOanFJYkO6wMssllc+eA#Title": "Redirigiendo | Deriv",
        "EwaOanFJYkO6wMssllc+eA#TitleExpression.-708286336.1": "Redirigiendo | Deriv"
    },
    M = {
        "EwaOanFJYkO6wMssllc+eA#Title": "Reindirizzamento | Deriv",
        "EwaOanFJYkO6wMssllc+eA#TitleExpression.-708286336.1": "Reindirizzamento | Deriv"
    },
    H = {
        "EwaOanFJYkO6wMssllc+eA#Title": "Przekierowanie | Deriv",
        "EwaOanFJYkO6wMssllc+eA#TitleExpression.-708286336.1": "Przekierowanie | Deriv"
    },
    W = {
        "EwaOanFJYkO6wMssllc+eA#Title": "Reencaminhamento | Deriv",
        "EwaOanFJYkO6wMssllc+eA#TitleExpression.-708286336.1": "Reencaminhamento | Deriv"
    },
    U = {
        "EwaOanFJYkO6wMssllc+eA#Title": "\u041F\u0435\u0440\u0435\u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 | Deriv",
        "EwaOanFJYkO6wMssllc+eA#TitleExpression.-708286336.1": "\u041F\u0435\u0440\u0435\u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 | Deriv"
    },
    N = {
        "fr-FR": {
            translations: P,
            isRTL: !1
        },
        "ar-001": {
            translations: J,
            isRTL: !0
        },
        "de-DE": {
            translations: x,
            isRTL: !1
        },
        "es-ES": {
            translations: V,
            isRTL: !1
        },
        "it-IT": {
            translations: M,
            isRTL: !1
        },
        "pl-PL": {
            translations: H,
            isRTL: !1
        },
        "pt-PT": {
            translations: W,
            isRTL: !1
        },
        "ru-RU": {
            translations: U,
            isRTL: !1
        }
    };

function b(l, h, C) {
    history.back()
}
u(b, "default");

function w(l, h, C, a) {
    let d = new Date(l.Timestamp * 1e3);

    function n(s, c) {
        let t = s.getUTCDate().toString().padStart(2, "0"),
            r = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][s.getUTCMonth()],
            T = s.getUTCHours().toString().padStart(2, "0"),
            v = s.getUTCMinutes().toString().padStart(2, "0");
        return c.replace("DD", t).replace("MMMM", r).replace("hh", T).replace("mm", v).replace("[GMT]", "GMT")
    }
    u(n, "formatDateTime"), l.FormattedTimestamp = n(d, "DD MMMM at hh:mm [GMT]")
}
u(w, "default");

function O(l, h, C, a) {
    var t, o, r, T, v, m, p, g;
    let d = window.location.search,
        n = new URLSearchParams(d),
        s, c;
    if (n.has("token1") && n.has("acct1")) {
        let A = {},
            y = {},
            _ = {};
        for (let f of n) f[0].startsWith("acct") ? (!s && (f[1].startsWith("VRW") || f[1].startsWith("CRW") || f[1].startsWith("MFW")) ? s = f[1] : !c && (f[1].startsWith("CR") || f[1].startsWith("MF") || f[1].startsWith("VRTC")) && (c = f[1]), y[f[0]] = f[1]) : f[0].startsWith("token") && (_[f[0]] = f[1]);
        Object.keys(y).forEach(f => {
            let F = "token" + f.slice(4);
            A[y[f]] = {
                token: _[F]
            }
        }), s || (window.location.href = `https://oauth.deriv.com/oauth2/authorize?app_id=${location.host==="hub.deriv.com"?"16929":"16303"}`, l.RedirectToDerivApp = !0), l.HasRealAccount = Object.keys(A).some(f => f.includes("CRW") || f.includes("MF@")), localStorage.setItem("accountsList", JSON.stringify(A)), localStorage.setItem("client.accounts", JSON.stringify(A)), l.LoginIDTokenPairs = JSON.stringify(A), l.LoginID = c != null ? c : "", l.AuthToken = (t = n.get("token1")) != null ? t : "", l.WalletLoginId = s != null ? s : ""
    }
    if (((o = n.get("action")) != null ? o : "").toLowerCase() === "real-account-signup" && JSCookies.get("os_auth_tokens")) {
        l.RACTarget_IsEU = ((r = n.get("target")) != null ? r : "").toLowerCase() === "maltainvest", l.TargetCurrency = ((T = n.get("currency")) != null ? T : "").toUpperCase();
        let A = JSON.parse(JSCookies.get("os_auth_tokens"));
        l.WalletLoginId = (v = Object.keys(A).find(y => y.startsWith("VRW"))) != null ? v : "", l.LoginID = (m = Object.keys(A).find(y => y.startsWith("VRTC"))) != null ? m : "", l.AuthToken = (g = (p = A[l.WalletLoginId]) == null ? void 0 : p.token) != null ? g : "", localStorage.setItem("accountsList", JSCookies.get("os_auth_tokens")), localStorage.setItem("client.accounts", JSCookies.get("os_auth_tokens")), l.RedirectToRAC = !0
    }
    l.Code = n.get("code") || "", l.Action = n.get("action") || "", l.Lang = n.get("lang") || "", l.Token = n.get("token1") || "", l.WithdrawalWalletLoginId = n.get("loginid") || ""
}
u(O, "default");

function k(l, h, C) {
    let a = new URLSearchParams(window.location.search);
    a.delete("code");
    let d = "signup/country-of-residence?" + a.toString();
    window.location.replace(d)
}
u(k, "default");
var e = S; {
    let h = class h extends e.Controller.BaseViewController {
        constructor(a, d, n) {
            super(a, d, n, N);
            var s = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(a) {
            this._dataFetchActionNames = a
        }
        get _okOnClick$Action() {
            return this.hasOwnProperty("__okOnClick$Action") || (this.__okOnClick$Action = function(a) {
                var d = this.model,
                    n = this.controller,
                    s = this.idService;
                return e.Logger.startActiveSpan("OkOnClick", function(c) {
                    c && (c.setAttribute("code.function", "OkOnClick"), c.setAttribute("outsystems.function.key", "1dbc01fd-9ba4-47b8-88ad-ea6bf1ff446a"), c.setAttribute("outsystems.function.owner.name", "tradershub"), c.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("OkOnClick"), a = n.callContext(a), e.Logger.startActiveSpan("GoBack", function(t) {
                            t && (t.setAttribute("code.function", "GoBack"), t.setAttribute("outsystems.function.key", "ffd0110f-7eca-4fb9-a317-05bc1c708609"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return n.safeExecuteJSNode(b, "GoBack", "OkOnClick", null, function(o) {}, {}, {})
                            } finally {
                                t && t.end()
                            }
                        }, 1)
                    } finally {
                        c && c.end()
                    }
                }, 1)
            }), this.__okOnClick$Action
        }
        set _okOnClick$Action(a) {
            this.__okOnClick$Action = a
        }
        get _redirectToRAC$Action() {
            return this.hasOwnProperty("__redirectToRAC$Action") || (this.__redirectToRAC$Action = function(a, d, n, s, c, t) {
                var o = this.model,
                    r = this.controller,
                    T = this.idService;
                return e.Logger.startActiveSpan("RedirectToRAC", function(v) {
                    return v && (v.setAttribute("code.function", "RedirectToRAC"), v.setAttribute("outsystems.function.key", "3c56c68a-14d5-41a1-8486-cfca37c21d9c"), v.setAttribute("outsystems.function.owner.name", "tradershub"), v.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), v.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        r.ensureControllerAlive("RedirectToRAC"), t = r.callContext(t);
                        var m = new e.DataTypes.VariableHolder(new(r.constructor.getVariableGroupType("tradershub.MainFlow.Redirect.RedirectToRAC$vars")));
                        m.value.authTokenInLocal = a, m.value.walletLoginIdInLocal = d, m.value.loginIDInLocal = n, m.value.rACTarget_IsEUInLocal = s, m.value.targetCurrencyInLocal = c;
                        var p = new e.DataTypes.VariableHolder,
                            g = new e.DataTypes.VariableHolder,
                            A = new e.DataTypes.VariableHolder;
                        return e.Flow.executeAsyncFlow(function() {
                            return D.cleanupAfterRealSignup$Action(t), i.setSelectedCurrencyCode(m.value.targetCurrencyInLocal), i.setRealSignupWalletAccountType("doughflow"), i.setInitializeRealSignup(!0), i.setIsWallet(!0), i.setAuthToken(m.value.authTokenInLocal), i.setActiveWalletLoginId(m.value.walletLoginIdInLocal), i.setActiveTradingLoginId(m.value.loginIDInLocal), i.setIsEuUser(m.value.rACTarget_IsEUInLocal), o.flush(), D.sendAuthorize$Action(!0, t).then(function(y) {
                                p.value = y
                            }).then(function() {
                                return o.flush(), D.sendGetSetting$Action(t).then(function(y) {
                                    g.value = y
                                })
                            }).then(function() {
                                if (g.value.getSettingResponseOut.cooling_off_expiration_dateAttr.gt(e.BuiltinFunctions.integerToLongInteger(0))) A.value = e.Logger.startActiveSpan("FormatDateTime", function(y) {
                                    y && (y.setAttribute("code.function", "FormatDateTime"), y.setAttribute("outsystems.function.key", "6a603272-9e52-43fd-80f8-a8b919e8ccfa"), y.setAttribute("outsystems.function.owner.name", "tradershub"), y.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), y.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return r.safeExecuteJSNode(w, "FormatDateTime", "RedirectToRAC", {
                                            Timestamp: e.DataConversion.JSNodeParamConverter.to(g.value.getSettingResponseOut.cooling_off_expiration_dateAttr, e.DataTypes.DataTypes.LongInteger),
                                            FormattedTimestamp: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                                        }, function(_) {
                                            var f = new(r.constructor.getVariableGroupType("tradershub.MainFlow.Redirect.RedirectToRAC$formatDateTimeJSResult"));
                                            return f.formattedTimestampOut = e.DataConversion.JSNodeParamConverter.from(_.FormattedTimestamp, e.DataTypes.DataTypes.Text), f
                                        }, {}, {})
                                    } finally {
                                        y && y.end()
                                    }
                                }, 1), o.variables.isCoolingOffPopupOpenVar = !0, o.variables.timestampVar = A.value.formattedTimestampOut;
                                else return m.value.targetCurrencyInLocal === e.BuiltinFunctions.nullTextIdentifier() ? e.Flow.returnAsync(e.Navigation.navigateTo(e.Navigation.generateScreenURL("tradershub", "currency-selection", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), t, !0)) : e.Flow.returnAsync(e.Navigation.navigateTo(e.Navigation.generateScreenURL("tradershub", "personal-details", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), t, !0))
                            })
                        })
                    }, function() {
                        v && v.end()
                    })
                }, 1)
            }), this.__redirectToRAC$Action
        }
        set _redirectToRAC$Action(a) {
            this.__redirectToRAC$Action = a
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(a) {
                var d = this.model,
                    n = this.controller,
                    s = this.idService;
                return e.Logger.startActiveSpan("OnReady", function(c) {
                    return c && (c.setAttribute("code.function", "OnReady"), c.setAttribute("outsystems.function.key", "91f3ee53-09b2-4379-bce5-2c8c139c42a9"), c.setAttribute("outsystems.function.owner.name", "tradershub"), c.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        n.ensureControllerAlive("OnReady"), a = n.callContext(a);
                        var t = new e.DataTypes.VariableHolder;
                        return e.Flow.executeAsyncFlow(function() {
                            return i.setOnInitialPageLoad(!0), t.value = e.Logger.startActiveSpan("GetURLParams", function(o) {
                                o && (o.setAttribute("code.function", "GetURLParams"), o.setAttribute("outsystems.function.key", "5aa2b169-5162-4466-800d-5453884090fa"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return n.safeExecuteJSNode(O, "GetURLParams", "OnReady", {
                                        Code: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                        Action: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                        Lang: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                        Token: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                        WalletLoginId: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                        LoginID: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                        AuthToken: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                        LoginIDTokenPairs: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                        WithdrawalWalletLoginId: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                        RedirectToDerivApp: e.DataConversion.JSNodeParamConverter.to(!1, e.DataTypes.DataTypes.Boolean),
                                        RACTarget_IsEU: e.DataConversion.JSNodeParamConverter.to(!1, e.DataTypes.DataTypes.Boolean),
                                        TargetCurrency: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                        RedirectToRAC: e.DataConversion.JSNodeParamConverter.to(!1, e.DataTypes.DataTypes.Boolean),
                                        HasRealAccount: e.DataConversion.JSNodeParamConverter.to(!1, e.DataTypes.DataTypes.Boolean)
                                    }, function(r) {
                                        var T = new(n.constructor.getVariableGroupType("tradershub.MainFlow.Redirect.OnReady$getURLParamsJSResult"));
                                        return T.codeOut = e.DataConversion.JSNodeParamConverter.from(r.Code, e.DataTypes.DataTypes.Text), T.actionOut = e.DataConversion.JSNodeParamConverter.from(r.Action, e.DataTypes.DataTypes.Text), T.langOut = e.DataConversion.JSNodeParamConverter.from(r.Lang, e.DataTypes.DataTypes.Text), T.tokenOut = e.DataConversion.JSNodeParamConverter.from(r.Token, e.DataTypes.DataTypes.Text), T.walletLoginIdOut = e.DataConversion.JSNodeParamConverter.from(r.WalletLoginId, e.DataTypes.DataTypes.Text), T.loginIDOut = e.DataConversion.JSNodeParamConverter.from(r.LoginID, e.DataTypes.DataTypes.Text), T.authTokenOut = e.DataConversion.JSNodeParamConverter.from(r.AuthToken, e.DataTypes.DataTypes.Text), T.loginIDTokenPairsOut = e.DataConversion.JSNodeParamConverter.from(r.LoginIDTokenPairs, e.DataTypes.DataTypes.Text), T.withdrawalWalletLoginIdOut = e.DataConversion.JSNodeParamConverter.from(r.WithdrawalWalletLoginId, e.DataTypes.DataTypes.Text), T.redirectToDerivAppOut = e.DataConversion.JSNodeParamConverter.from(r.RedirectToDerivApp, e.DataTypes.DataTypes.Boolean), T.rACTarget_IsEUOut = e.DataConversion.JSNodeParamConverter.from(r.RACTarget_IsEU, e.DataTypes.DataTypes.Boolean), T.targetCurrencyOut = e.DataConversion.JSNodeParamConverter.from(r.TargetCurrency, e.DataTypes.DataTypes.Text), T.redirectToRACOut = e.DataConversion.JSNodeParamConverter.from(r.RedirectToRAC, e.DataTypes.DataTypes.Boolean), T.hasRealAccountOut = e.DataConversion.JSNodeParamConverter.from(r.HasRealAccount, e.DataTypes.DataTypes.Boolean), T
                                    }, {}, {})
                                } finally {
                                    o && o.end()
                                }
                            }, 1), e.Flow.executeSequence(function() {
                                if (t.value.redirectToRACOut) return n._redirectToRAC$Action(t.value.authTokenOut, t.value.walletLoginIdOut, t.value.loginIDOut, t.value.rACTarget_IsEUOut, t.value.targetCurrencyOut, a);
                                if (!t.value.redirectToDerivAppOut)
                                    if (i.setCode(t.value.codeOut), i.setAction(t.value.actionOut), i.setLang(t.value.langOut), t.value.actionOut === "signup") i.setAuthToken(e.BuiltinFunctions.nullTextIdentifier()), i.setSelectedResidence(e.BuiltinFunctions.nullTextIdentifier()), i.setSelectedResidenceLabel(e.BuiltinFunctions.nullTextIdentifier()), i.setSelectedCitizenship(e.BuiltinFunctions.nullTextIdentifier()), e.Logger.startActiveSpan("RedirectURLWithQueryParam", function(o) {
                                        o && (o.setAttribute("code.function", "RedirectURLWithQueryParam"), o.setAttribute("outsystems.function.key", "d756ed6b-7408-4ce2-a1ed-b033076ff594"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                        try {
                                            return n.safeExecuteJSNode(k, "RedirectURLWithQueryParam", "OnReady", null, function(r) {}, {}, {})
                                        } finally {
                                            o && o.end()
                                        }
                                    }, 1);
                                    else {
                                        if (I.consoleLog$Action("Client.ActiveWalletLoginId " + i.getActiveWalletLoginId(), 0, a), t.value.authTokenOut !== e.BuiltinFunctions.nullTextIdentifier()) return i.setActiveTradingLoginId(t.value.loginIDOut === e.BuiltinFunctions.nullTextIdentifier() ? i.getActiveTradingLoginId() : t.value.loginIDOut), i.setAuthToken(t.value.authTokenOut === e.BuiltinFunctions.nullTextIdentifier() ? i.getAuthToken() : t.value.authTokenOut), i.setActiveWalletLoginId(t.value.walletLoginIdOut === e.BuiltinFunctions.nullTextIdentifier() ? i.getActiveWalletLoginId() : t.value.walletLoginIdOut), i.setIsWallet(!0), e.Flow.returnAsync(e.Navigation.navigateTo(e.Navigation.generateScreenURL("tradershub", "cfds/:ProductIdentifier?", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), a, !0));
                                        if (t.value.actionOut === "reset_password") return e.Flow.returnAsync(e.Navigation.navigateTo(e.Navigation.generateScreenURL("tradershub", "reset-password", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), a, !0));
                                        if (t.value.actionOut === "payment_withdraw") return i.setActiveWalletLoginId(t.value.withdrawalWalletLoginIdOut), e.Flow.returnAsync(e.Navigation.navigateTo(e.Navigation.generateScreenURL("tradershub", "wallets/withdrawal", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), a, !0));
                                        if (t.value.tokenOut !== "") return e.Flow.returnAsync(e.Navigation.navigateTo(e.Navigation.generateScreenURL("tradershub", "cfds/:ProductIdentifier?", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), a, !0));
                                        if (t.value.actionOut === "trading_platform_dxtrade_password_reset") i.setTradingPlatformDxtradePasswordReset(t.value.codeOut);
                                        else if (t.value.actionOut === "trading_platform_mt5_password_reset") i.setTradingPlatformMt5PasswordReset(t.value.codeOut);
                                        else if (t.value.actionOut === "trading_platform_investor_password_reset") i.setTradingPlatformInvestorPasswordReset(t.value.codeOut);
                                        else return e.Flow.returnAsync();
                                        return e.Flow.returnAsync(e.Navigation.navigateTo(e.Navigation.generateScreenURL("tradershub", "cfds/:ProductIdentifier?", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), a, !0))
                                    }
                            })
                        })
                    }, function() {
                        c && c.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(a) {
            this.__onReady$Action = a
        }
        get _checkHasRealAccountAction$Action() {
            return this.hasOwnProperty("__checkHasRealAccountAction$Action") || (this.__checkHasRealAccountAction$Action = function(a, d) {
                var n = this.model,
                    s = this.controller,
                    c = this.idService;
                return e.Logger.startActiveSpan("CheckHasRealAccountAction", function(t) {
                    t && (t.setAttribute("code.function", "CheckHasRealAccountAction"), t.setAttribute("outsystems.function.key", "d9955007-4e50-4059-80be-8e63b709fd23"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        s.ensureControllerAlive("CheckHasRealAccountAction"), d = s.callContext(d);
                        var o = new e.DataTypes.VariableHolder(new(s.constructor.getVariableGroupType("tradershub.MainFlow.Redirect.CheckHasRealAccountAction$vars")));
                        o.value.hasRealAccountInLocal = a, i.setNoRealAccount(o.value.hasRealAccountInLocal), i.getNoRealAccount() ? i.setAccountType("demo") : i.setAccountType("real")
                    } finally {
                        t && t.end()
                    }
                }, 1)
            }), this.__checkHasRealAccountAction$Action
        }
        set _checkHasRealAccountAction$Action(a) {
            this.__checkHasRealAccountAction$Action = a
        }
        okOnClick$Action(a) {
            var d = this.controller;
            return e.Logger.startActiveSpan("OkOnClick__proxy", function(n) {
                n && (n.setAttribute("code.function", "OkOnClick"), n.setAttribute("outsystems.function.key", "1dbc01fd-9ba4-47b8-88ad-ea6bf1ff446a"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return d.safeExecuteClientAction(d._okOnClick$Action, a)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        redirectToRAC$Action(a, d, n, s, c, t) {
            var o = this.controller;
            return e.Logger.startActiveSpan("RedirectToRAC__proxy", function(r) {
                return r && (r.setAttribute("code.function", "RedirectToRAC"), r.setAttribute("outsystems.function.key", "3c56c68a-14d5-41a1-8486-cfca37c21d9c"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return o.safeExecuteClientAction(o._redirectToRAC$Action, t, a, d, n, s, c)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        onReady$Action(a) {
            var d = this.controller;
            return e.Logger.startActiveSpan("OnReady__proxy", function(n) {
                return n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "91f3ee53-09b2-4379-bce5-2c8c139c42a9"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return d.safeExecuteClientAction(d._onReady$Action, a)
                }, function() {
                    n && n.end()
                })
            }, 0)
        }
        checkHasRealAccountAction$Action(a, d) {
            var n = this.controller;
            return e.Logger.startActiveSpan("CheckHasRealAccountAction__proxy", function(s) {
                s && (s.setAttribute("code.function", "CheckHasRealAccountAction"), s.setAttribute("outsystems.function.key", "d9955007-4e50-4059-80be-8e63b709fd23"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._checkHasRealAccountAction$Action, d, a)
                } finally {
                    s && s.end()
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
                var d = this.controller,
                    n = this.model,
                    s = this.idService;
                return d.onReady$Action(a)
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
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = null), this._onDestroyEventHandler
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
                return E.default.handleError(a, this.callContext())
            }), this._handleError
        }
        set handleError(a) {
            this._handleError = a
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return D.defaultTimeout
        }
    };
    u(h, "ControllerInner");
    let l = h;
    R = l, R.registerVariableGroupType("tradershub.MainFlow.Redirect.RedirectToRAC$vars", [{
        name: "AuthToken",
        attrName: "authTokenInLocal",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "WalletLoginId",
        attrName: "walletLoginIdInLocal",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "LoginID",
        attrName: "loginIDInLocal",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "RACTarget_IsEU",
        attrName: "rACTarget_IsEUInLocal",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Boolean,
        defaultValue: u(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "TargetCurrency",
        attrName: "targetCurrencyInLocal",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }]), R.registerVariableGroupType("tradershub.MainFlow.Redirect.RedirectToRAC$formatDateTimeJSResult", [{
        name: "FormattedTimestamp",
        attrName: "formattedTimestampOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }]), R.registerVariableGroupType("tradershub.MainFlow.Redirect.OnReady$getURLParamsJSResult", [{
        name: "Code",
        attrName: "codeOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "Action",
        attrName: "actionOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "Lang",
        attrName: "langOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "Token",
        attrName: "tokenOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "WalletLoginId",
        attrName: "walletLoginIdOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "LoginID",
        attrName: "loginIDOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "AuthToken",
        attrName: "authTokenOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "LoginIDTokenPairs",
        attrName: "loginIDTokenPairsOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "WithdrawalWalletLoginId",
        attrName: "withdrawalWalletLoginIdOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "RedirectToDerivApp",
        attrName: "redirectToDerivAppOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Boolean,
        defaultValue: u(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "RACTarget_IsEU",
        attrName: "rACTarget_IsEUOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Boolean,
        defaultValue: u(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "TargetCurrency",
        attrName: "targetCurrencyOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "RedirectToRAC",
        attrName: "redirectToRACOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Boolean,
        defaultValue: u(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "HasRealAccount",
        attrName: "hasRealAccountOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Boolean,
        defaultValue: u(function() {
            return !1
        }, "defaultValue")
    }]), R.registerVariableGroupType("tradershub.MainFlow.Redirect.CheckHasRealAccountAction$vars", [{
        name: "HasRealAccount",
        attrName: "hasRealAccountInLocal",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Boolean,
        defaultValue: u(function() {
            return !1
        }, "defaultValue")
    }])
}
var R, le = new e.Controller.ControllerFactory(R, L);
export {
    le as a
};