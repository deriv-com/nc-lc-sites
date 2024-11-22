import {
    a as I
} from "./_oschunk-AGISAFBQ.js";
import {
    a as D
} from "./_oschunk-Y45M2O2K.js";
import {
    a as y,
    d as A
} from "./_oschunk-27GDEXUT.js";
import {
    ia as w
} from "./_oschunk-NTQBNJ73.js";
import {
    a as V,
    b as O,
    c
} from "./_oschunk-DVBKI63I.js";
var N = {
        "zyBlByP5F0CgLHNTc6KlOQ#Value": "Connexion",
        "h7XhVO804k+k71VcKAnPIA#Value": "Vous avez d\xE9j\xE0 un compte? ",
        "4J8Ai1AzCUOxYayzXXC_pQ#Value": "Ou inscrivez-vous avec",
        "XDpXamh050uW+TdMLWF1vw#Value": "Cr\xE9er des comptes",
        "D4fzBOIpWkih+3xKbmxbFA#Value": ".",
        "O73j_Yx0TEaTLpcDzVvCdA#Value": "Termes et conditions",
        "C0qoxFXHAEaRBSNzTQIjUA#Value": "Vous pouvez vous d\xE9sinscrire \xE0 tout moment dans les param\xE8tres de votre compte. En vous inscrivant, vous acceptez nos",
        "W_n9gEV6oE+etpdg5GqhcA#Value": "En cr\xE9ant un compte, vous confirmez que vous avez plus de 18 ans et comprenez que nous pouvons vous envoyer des mises \xE0 jour et des supports marketing (voir",
        "53iIrc8ky0epygNbeCYIXw#ValueExpression.-374653993.1": "Entrez votre email",
        "CyqOLsdkakiKuMkhWyextw#Value": "Email",
        "qXp+BbsXL06sD7rGH2PhTQ#Value": "Rejoignez plus de 2,5 millions de traders",
        "1nhQquO+GE2mj__O6_cQ0g#Value": "Obtenez votre compte de d\xE9monstration gratuit aujourd'hui.",
        "TAX2+ef6aUO1CPCHQQzvrw#Value": "Tradez n'importe o\xF9, \xE0 tout moment.",
        "3H4XoNMBIkKebT6I3Z916g#Value": "March\xE9s financiers et d\xE9riv\xE9s",
        "sG77cWVczkyLtY7iklbKtg#Value": "Des centaines d'instruments",
        "7qeQtH+RUESDvCAUPupY2w#Value": "Types de trade uniques",
        "i9tEIXEhU0SZAJgfbQhMEw#Value": "Fiable depuis 25 ans",
        "jhRmr81SbEqN1xrqCmqocQ#Message.1785918141.1": "Nombre maximum de tentatives de renvoi atteint. R\xE9essayez dans quelques minutes.",
        "gTuQ9I_ohEiA0LIcjyWQXg#Title": "Inscription facile et gratuite | Trading en ligne | Hub.Deriv.com",
        "gTuQ9I_ohEiA0LIcjyWQXg#TitleExpression.2133226043.1": "Inscription facile et gratuite | Trading en ligne | Hub.Deriv.com"
    },
    R = {
        "fr-FR": {
            translations: N,
            isRTL: !1
        }
    };

function h(d, m, b, i) {
    let n = new URLSearchParams(window.location.search);
    if (n.has("token1") && n.has("acct1")) {
        let t = {},
            o = {},
            r = {};
        for (let a of n) a[0].startsWith("acct") ? o[a[0]] = a[1] : a[0].startsWith("token") && (r[a[0]] = a[1]);
        Object.keys(o).forEach(a => {
            let s = "token" + a.slice(4);
            t[o[a]] = {
                token: r[s]
            }
        }), localStorage.setItem("accountsList", JSON.stringify(t)), localStorage.setItem("client.accounts", JSON.stringify(t)), d.LoginIDTokenPairs = JSON.stringify(t), d.LoginID = n.get("acct1"), d.AuthToken = n.get("token1")
    }
}
c(h, "default");

function g(d, m, b) {
    window.cacheTrackEvents.track({
        name: "ce_virtual_signup_form",
        properties: {
            action: "open",
            form_name: "virtual_signup_form_outsystems"
        }
    }, !0)
}
c(g, "default");

function E(d, m, b) {
    cacheTrackEvents.track({
        name: "ce_virtual_signup_form",
        properties: {
            action: "started",
            signup_provider: "email",
            form_name: "virtual_signup_form_outsystems"
        }
    }), cacheTrackEvents.track({
        name: "ce_virtual_signup_form",
        properties: {
            action: "email_confirmation_sent",
            form_name: "virtual_signup_form_outsystems"
        }
    })
}
c(E, "default");

function S(d, m, b, i) {
    let n = window.getCookiesFields(),
        t = window.getCookiesObject(n),
        o = window.getDataObjFromCookies(t, n),
        r = window.getCookieValue("affiliate_tracking");
    d.Payload = JSON.stringify({
        verify_email: d.UserEmail,
        type: "account_opening",
        url_parameters: O(V({}, o), {
            affiliate_token: r
        })
    })
}
c(S, "default");

function T(d, m, b) {
    cacheTrackEvents.track({
        name: "ce_virtual_signup_form",
        properties: {
            action: "signup_flow_error",
            form_name: "virtual_signup_form_outsystems",
            error_message: "account_creation_failed"
        }
    })
}
c(T, "default");

function k(d, m, b, i) {
    let n = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/,
        t = {
            Email: ""
        },
        o = {
            Email: !0
        };
    d.Email ? n.test(d.Email) || (t.Email = "That doesn't look like an email address.", o.Email = !1) : (t.Email = "Email is required.", o.Email = !1), d.IsEmailValid = o.Email, d.ValidationError = t.Email
}
c(k, "default");

function p(d, m, b) {
    cacheTrackEvents.track({
        name: "ce_virtual_signup_form",
        properties: {
            action: "continue_attempt",
            signup_provider: "email",
            form_name: "virtual_signup_form_outsystems"
        }
    })
}
c(p, "default");
var e = w; {
    let m = class m extends e.Controller.BaseViewController {
        constructor(i, n, t) {
            super(i, n, t, R);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(i) {
            this._dataFetchActionNames = i
        }
        get _linkOnClick$Action() {
            return this.hasOwnProperty("__linkOnClick$Action") || (this.__linkOnClick$Action = function(i) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("LinkOnClick", function(r) {
                    r && (r.setAttribute("code.function", "LinkOnClick"), r.setAttribute("outsystems.function.key", "1a3750cf-61d4-4cfe-9d28-5d187e343532"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("LinkOnClick"), i = t.callContext(i), y.getIsEuUser() ? A.redirectToExternalURL$Action("https://docs.deriv.com/tnc/eu/security-and-privacy.pdf", !0, i) : A.redirectToExternalURL$Action("https://docs.deriv.com/tnc/security-and-privacy.pdf", !0, i)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__linkOnClick$Action
        }
        set _linkOnClick$Action(i) {
            this.__linkOnClick$Action = i
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(i) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("OnReady", function(r) {
                    r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "3792df27-9242-4773-bc62-60fef5ade3e0"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), i = t.callContext(i);
                        var a = new e.DataTypes.VariableHolder;
                        if (a.value = e.Logger.startActiveSpan("CheckAuthURLParam", function(s) {
                                s && (s.setAttribute("code.function", "CheckAuthURLParam"), s.setAttribute("outsystems.function.key", "1659c3fe-da35-4ff4-930d-7718801fc9e9"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return t.safeExecuteJSNode(h, "CheckAuthURLParam", "OnReady", {
                                        LoginID: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                        AuthToken: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                        LoginIDTokenPairs: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                                    }, function(l) {
                                        var f = new(t.constructor.getVariableGroupType("tradershub.Signup.signup.OnReady$checkAuthURLParamJSResult"));
                                        return f.loginIDOut = e.DataConversion.JSNodeParamConverter.from(l.LoginID, e.DataTypes.DataTypes.Text), f.authTokenOut = e.DataConversion.JSNodeParamConverter.from(l.AuthToken, e.DataTypes.DataTypes.Text), f.loginIDTokenPairsOut = e.DataConversion.JSNodeParamConverter.from(l.LoginIDTokenPairs, e.DataTypes.DataTypes.Text), f
                                    }, {}, {})
                                } finally {
                                    s && s.end()
                                }
                            }, 1), a.value.authTokenOut !== e.BuiltinFunctions.nullTextIdentifier()) return y.setActiveLoginId(a.value.loginIDOut), y.setAuthToken(a.value.authTokenOut), e.Navigation.navigateTo(e.Navigation.generateScreenURL("tradershub", "options", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), i, !0);
                        y.setSignupEmail(""), e.Logger.startActiveSpan("RudderStack", function(s) {
                            s && (s.setAttribute("code.function", "RudderStack"), s.setAttribute("outsystems.function.key", "2bfd512f-c457-43eb-8062-08362996b33b"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(g, "RudderStack", "OnReady", null, function(l) {}, {}, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(i) {
            this.__onReady$Action = i
        }
        get _sendVerifyEmail$Action() {
            return this.hasOwnProperty("__sendVerifyEmail$Action") || (this.__sendVerifyEmail$Action = function(i, n) {
                var t = this.model,
                    o = this.controller,
                    r = this.idService;
                return e.Logger.startActiveSpan("SendVerifyEmail", function(a) {
                    return a && (a.setAttribute("code.function", "SendVerifyEmail"), a.setAttribute("outsystems.function.key", "60f673ea-c86f-4f2d-8f06-eea51054e450"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        o.ensureControllerAlive("SendVerifyEmail"), n = o.callContext(n);
                        var s = new e.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("tradershub.Signup.signup.SendVerifyEmail$vars")));
                        s.value.userEmailInLocal = i;
                        var l = new e.DataTypes.VariableHolder,
                            f = new e.DataTypes.VariableHolder;
                        return e.Flow.executeAsyncFlow(function() {
                            return f.value = e.Logger.startActiveSpan("VerifyEmailPayload", function(u) {
                                u && (u.setAttribute("code.function", "VerifyEmailPayload"), u.setAttribute("outsystems.function.key", "91044e38-0849-45c3-8f0b-ede07a47afd9"), u.setAttribute("outsystems.function.owner.name", "tradershub"), u.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), u.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return o.safeExecuteJSNode(S, "VerifyEmailPayload", "SendVerifyEmail", {
                                        UserEmail: e.DataConversion.JSNodeParamConverter.to(s.value.userEmailInLocal, e.DataTypes.DataTypes.Email),
                                        Payload: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                                    }, function(_) {
                                        var C = new(o.constructor.getVariableGroupType("tradershub.Signup.signup.SendVerifyEmail$verifyEmailPayloadJSResult"));
                                        return C.payloadOut = e.DataConversion.JSNodeParamConverter.from(_.Payload, e.DataTypes.DataTypes.Text), C
                                    }, {}, {})
                                } finally {
                                    u && u.end()
                                }
                            }, 1), t.flush(), A.derivApiSendMessage$Action(f.value.payloadOut, "", !1, n).then(function(u) {
                                l.value = u
                            }).then(function() {
                                if (l.value.isErrorOut) t.variables.isSubmittingVar = !1, e.Logger.startActiveSpan("RudderStackError", function(u) {
                                    u && (u.setAttribute("code.function", "RudderStackError"), u.setAttribute("outsystems.function.key", "9e938825-3503-4b17-afe2-6f2115bfec96"), u.setAttribute("outsystems.function.owner.name", "tradershub"), u.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), u.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return o.safeExecuteJSNode(T, "RudderStackError", "SendVerifyEmail", null, function(_) {}, {}, {})
                                    } finally {
                                        u && u.end()
                                    }
                                }, 1), e.FeedbackMessageService.showFeedbackMessage(l.value.errorCodeOut === "RateLimit" ? e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("jhRmr81SbEqN1xrqCmqocQ#Message.1785918141.1", "Maximum resend attempts reached. Try again in a few minutes.") : "Something went wrong. Please try reloading the page!", 3);
                                else return e.Logger.startActiveSpan("RudderStack", function(u) {
                                    u && (u.setAttribute("code.function", "RudderStack"), u.setAttribute("outsystems.function.key", "3baf9bf4-6ec1-4d32-b2b4-24ebfc30cd5d"), u.setAttribute("outsystems.function.owner.name", "tradershub"), u.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), u.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return o.safeExecuteJSNode(E, "RudderStack", "SendVerifyEmail", null, function(_) {}, {}, {})
                                    } finally {
                                        u && u.end()
                                    }
                                }, 1), e.Flow.returnAsync(e.Navigation.navigateTo(e.Navigation.generateScreenURL("tradershub", "signup/email-verification", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), n, !0))
                            })
                        })
                    }, function() {
                        a && a.end()
                    })
                }, 1)
            }), this.__sendVerifyEmail$Action
        }
        set _sendVerifyEmail$Action(i) {
            this.__sendVerifyEmail$Action = i
        }
        get _validate$Action() {
            return this.hasOwnProperty("__validate$Action") || (this.__validate$Action = function(i) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("Validate", function(r) {
                    r && (r.setAttribute("code.function", "Validate"), r.setAttribute("outsystems.function.key", "75dc102f-72f9-4f53-9ebb-cd8239263cd1"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("Validate"), i = t.callContext(i);
                        var a = new e.DataTypes.VariableHolder;
                        a.value = e.Logger.startActiveSpan("ValidateEmail", function(s) {
                            s && (s.setAttribute("code.function", "ValidateEmail"), s.setAttribute("outsystems.function.key", "1e20ae90-69fb-4b93-bd46-3a9707878464"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(k, "ValidateEmail", "Validate", {
                                    Email: e.DataConversion.JSNodeParamConverter.to(y.getSignupEmail(), e.DataTypes.DataTypes.Email),
                                    IsEmailValid: e.DataConversion.JSNodeParamConverter.to(!1, e.DataTypes.DataTypes.Boolean),
                                    ValidationError: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                                }, function(l) {
                                    var f = new(t.constructor.getVariableGroupType("tradershub.Signup.signup.Validate$validateEmailJSResult"));
                                    return f.isEmailValidOut = e.DataConversion.JSNodeParamConverter.from(l.IsEmailValid, e.DataTypes.DataTypes.Boolean), f.validationErrorOut = e.DataConversion.JSNodeParamConverter.from(l.ValidationError, e.DataTypes.DataTypes.Text), f
                                }, {}, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1), n.widgets.get(o.getId("Input_Email")).validAttr = a.value.isEmailValidOut, n.widgets.get(o.getId("Input_Email")).validationMessageAttr = a.value.validationErrorOut
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__validate$Action
        }
        set _validate$Action(i) {
            this.__validate$Action = i
        }
        get _submitOnClick$Action() {
            return this.hasOwnProperty("__submitOnClick$Action") || (this.__submitOnClick$Action = function(i) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("SubmitOnClick", function(r) {
                    return r && (r.setAttribute("code.function", "SubmitOnClick"), r.setAttribute("outsystems.function.key", "9577063a-fff2-418e-8535-95c79ecc795e"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("SubmitOnClick"), i = t.callContext(i), e.Flow.executeAsyncFlow(function() {
                            return t._validate$Action(i), e.Flow.executeSequence(function() {
                                if (n.widgets.get(o.getId("Form")).validAttr) return n.variables.isSubmittingVar = !0, t._sendVerifyEmail$Action(y.getSignupEmail(), i);
                                e.Logger.startActiveSpan("RudderStack", function(a) {
                                    a && (a.setAttribute("code.function", "RudderStack"), a.setAttribute("outsystems.function.key", "c8b28505-df7d-4d39-97db-83a312abc574"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return t.safeExecuteJSNode(p, "RudderStack", "SubmitOnClick", null, function(s) {}, {}, {})
                                    } finally {
                                        a && a.end()
                                    }
                                }, 1), n.variables.isSubmittingVar = !1
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__submitOnClick$Action
        }
        set _submitOnClick$Action(i) {
            this.__submitOnClick$Action = i
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(i) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("OnInitialize", function(r) {
                    r && (r.setAttribute("code.function", "OnInitialize"), r.setAttribute("outsystems.function.key", "c2f6facd-c9d5-4a9e-9299-84dbd4547ddf"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), i = t.callContext(i), n.variables.isSubmittingVar = !1
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(i) {
            this.__onInitialize$Action = i
        }
        linkOnClick$Action(i) {
            var n = this.controller;
            return e.Logger.startActiveSpan("LinkOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "LinkOnClick"), t.setAttribute("outsystems.function.key", "1a3750cf-61d4-4cfe-9d28-5d187e343532"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._linkOnClick$Action, i)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onReady$Action(i) {
            var n = this.controller;
            return e.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "3792df27-9242-4773-bc62-60fef5ade3e0"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onReady$Action, i)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        sendVerifyEmail$Action(i, n) {
            var t = this.controller;
            return e.Logger.startActiveSpan("SendVerifyEmail__proxy", function(o) {
                return o && (o.setAttribute("code.function", "SendVerifyEmail"), o.setAttribute("outsystems.function.key", "60f673ea-c86f-4f2d-8f06-eea51054e450"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._sendVerifyEmail$Action, n, i)
                }, function() {
                    o && o.end()
                })
            }, 0)
        }
        validate$Action(i) {
            var n = this.controller;
            return e.Logger.startActiveSpan("Validate__proxy", function(t) {
                t && (t.setAttribute("code.function", "Validate"), t.setAttribute("outsystems.function.key", "75dc102f-72f9-4f53-9ebb-cd8239263cd1"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._validate$Action, i)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        submitOnClick$Action(i) {
            var n = this.controller;
            return e.Logger.startActiveSpan("SubmitOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "SubmitOnClick"), t.setAttribute("outsystems.function.key", "9577063a-fff2-418e-8535-95c79ecc795e"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._submitOnClick$Action, i)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onInitialize$Action(i) {
            var n = this.controller;
            return e.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "c2f6facd-c9d5-4a9e-9299-84dbd4547ddf"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onInitialize$Action, i)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(i) {
                var n = this.controller,
                    t = this.model,
                    o = this.idService;
                return n.onInitialize$Action(i)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(i) {
            this._onInitializeEventHandler = i
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(i) {
                var n = this.controller,
                    t = this.model,
                    o = this.idService;
                return n.onReady$Action(i)
            }), this._onReadyEventHandler
        }
        set onReadyEventHandler(i) {
            this._onReadyEventHandler = i
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(i) {
            this._onRenderEventHandler = i
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = null), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(i) {
            this._onDestroyEventHandler = i
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(i) {
            this._onParametersChangedEventHandler = i
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(i) {
                return I.default.handleError(i, this.callContext())
            }), this._handleError
        }
        set handleError(i) {
            this._handleError = i
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return A.defaultTimeout
        }
    };
    c(m, "ControllerInner");
    let d = m;
    v = d, v.registerVariableGroupType("tradershub.Signup.signup.OnReady$checkAuthURLParamJSResult", [{
        name: "LoginID",
        attrName: "loginIDOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "AuthToken",
        attrName: "authTokenOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "LoginIDTokenPairs",
        attrName: "loginIDTokenPairsOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }]), v.registerVariableGroupType("tradershub.Signup.signup.SendVerifyEmail$vars", [{
        name: "UserEmail",
        attrName: "userEmailInLocal",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Email,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }]), v.registerVariableGroupType("tradershub.Signup.signup.SendVerifyEmail$verifyEmailPayloadJSResult", [{
        name: "Payload",
        attrName: "payloadOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }]), v.registerVariableGroupType("tradershub.Signup.signup.Validate$validateEmailJSResult", [{
        name: "IsEmailValid",
        attrName: "isEmailValidOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Boolean,
        defaultValue: c(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "ValidationError",
        attrName: "validationErrorOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }])
}
var v, dt = new e.Controller.ControllerFactory(v, D);
export {
    dt as a
};