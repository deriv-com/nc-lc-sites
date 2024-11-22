import {
    a as R
} from "./_oschunk-AGISAFBQ.js";
import {
    a as D
} from "./_oschunk-Y45M2O2K.js";
import {
    a as b,
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
var I = {
        "d34maTX7wE28Z5PYuw9DRA#Value": "Connexion",
        "flfhQzisOk+ZymHc1m3y_w#Value": "Vous avez d\xE9j\xE0 un compte? ",
        "O56+jipAfE+aU6be+VlLfQ#Value": "Ou inscrivez-vous avec",
        "3naFX9uKU0aE8_79mMTKag#Value": "Cr\xE9er des comptes",
        "Wlh71Z9bc0KUSa4kmDKh_g#Value": ".",
        "fETa_D8xhkG3TyJDcHNr+w#Value": "Termes et conditions",
        "2fJvOwaWWUmrhLCTXpGdjQ#Value": "Vous pouvez vous d\xE9sinscrire \xE0 tout moment dans les param\xE8tres de votre compte. En vous inscrivant, vous acceptez nos",
        "rXtNkvhkaEaHS7yFhnwtFg#Value": "En cr\xE9ant un compte, vous confirmez que vous avez plus de 18 ans et comprenez que nous pouvons vous envoyer des mises \xE0 jour et des supports marketing (voir",
        "yF8cEKbcxUaOlH9ylne2QQ#ValueExpression.-374653993.1": "Entrez votre email",
        "WRRMOhzgcUGfKMbStruX_A#Value": "Email",
        "ELYPhzuj3k+9yt5SFTagNw#Value": "Rejoignez plus de 2,5 millions de traders",
        "eJ_8ZW44tECsuVJyhA8MBA#Value": "Obtenez votre compte de d\xE9monstration gratuit aujourd'hui.",
        "JDNCstSMOEmuqZa708daBw#Value": "Tradez n'importe o\xF9, \xE0 tout moment.",
        "GFsgudxbk0q6DwAHVnmXHQ#Value": "March\xE9s financiers et d\xE9riv\xE9s",
        "r7rG1gEr7kSsy7JKpLm4Fw#Value": "Des centaines d'instruments",
        "jArPalEju0eZL+HgJ5ymVA#Value": "Types de trade uniques",
        "F64XxsEC80ypnRKs+2DXOQ#Value": "Fiable depuis 25 ans",
        "irrPcCB+h0m7iZuyy8DxPw#Message.1785918141.1": "Nombre maximum de tentatives de renvoi atteint. R\xE9essayez dans quelques minutes.",
        "FkAFqM0xE065+QFlMmJYcg#Title": "Inscription facile et gratuite | Trading en ligne | Hub.Deriv.com",
        "FkAFqM0xE065+QFlMmJYcg#TitleExpression.2133226043.1": "Inscription facile et gratuite | Trading en ligne | Hub.Deriv.com"
    },
    N = {
        "fr-FR": {
            translations: I,
            isRTL: !1
        }
    };

function h(l, m, y, i) {
    let n = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/,
        t = {
            Email: ""
        },
        o = {
            Email: !0
        };
    l.Email ? n.test(l.Email) || (t.Email = "That doesn't look like an email address.", o.Email = !1) : (t.Email = "Email is required.", o.Email = !1), l.IsEmailValid = o.Email, l.ValidationError = t.Email
}
c(h, "default");

function E(l, m, y) {
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

function g(l, m, y, i) {
    let n = window.getCookiesFields(),
        t = window.getCookiesObject(n),
        o = window.getDataObjFromCookies(t, n),
        r = window.getCookieValue("affiliate_tracking");
    l.Payload = JSON.stringify({
        verify_email: l.UserEmail,
        type: "account_opening",
        url_parameters: O(V({}, o), {
            affiliate_token: r
        })
    })
}
c(g, "default");

function S(l, m, y) {
    cacheTrackEvents.track({
        name: "ce_virtual_signup_form",
        properties: {
            action: "signup_flow_error",
            form_name: "virtual_signup_form_outsystems",
            error_message: "account_creation_failed"
        }
    })
}
c(S, "default");

function T(l, m, y) {
    cacheTrackEvents.track({
        name: "ce_virtual_signup_form",
        properties: {
            action: "continue_attempt",
            signup_provider: "email",
            form_name: "virtual_signup_form_outsystems"
        }
    })
}
c(T, "default");

function k(l, m, y) {
    window.cacheTrackEvents.track({
        name: "ce_virtual_signup_form",
        properties: {
            action: "open",
            form_name: "virtual_signup_form_outsystems"
        }
    }, !0)
}
c(k, "default");

function p(l, m, y, i) {
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
        }), localStorage.setItem("accountsList", JSON.stringify(t)), localStorage.setItem("client.accounts", JSON.stringify(t)), l.LoginIDTokenPairs = JSON.stringify(t), l.LoginID = n.get("acct1"), l.AuthToken = n.get("token1")
    }
}
c(p, "default");
var e = w; {
    let m = class m extends e.Controller.BaseViewController {
        constructor(i, n, t) {
            super(i, n, t, N);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(i) {
            this._dataFetchActionNames = i
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(i) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("OnInitialize", function(r) {
                    r && (r.setAttribute("code.function", "OnInitialize"), r.setAttribute("outsystems.function.key", "19dae12c-a515-439b-8e28-5ea8ec4b1f33"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
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
        get _validate$Action() {
            return this.hasOwnProperty("__validate$Action") || (this.__validate$Action = function(i) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("Validate", function(r) {
                    r && (r.setAttribute("code.function", "Validate"), r.setAttribute("outsystems.function.key", "1fb5dd34-767b-4397-b460-9f33a93c8998"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("Validate"), i = t.callContext(i);
                        var a = new e.DataTypes.VariableHolder;
                        a.value = e.Logger.startActiveSpan("ValidateEmail", function(s) {
                            s && (s.setAttribute("code.function", "ValidateEmail"), s.setAttribute("outsystems.function.key", "ace2bd61-e214-43c3-9cee-e1756f182fb1"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(h, "ValidateEmail", "Validate", {
                                    Email: e.DataConversion.JSNodeParamConverter.to(b.getSignupEmail(), e.DataTypes.DataTypes.Email),
                                    IsEmailValid: e.DataConversion.JSNodeParamConverter.to(!1, e.DataTypes.DataTypes.Boolean),
                                    ValidationError: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                                }, function(d) {
                                    var f = new(t.constructor.getVariableGroupType("tradershub.Signup.EUSignup.Validate$validateEmailJSResult"));
                                    return f.isEmailValidOut = e.DataConversion.JSNodeParamConverter.from(d.IsEmailValid, e.DataTypes.DataTypes.Boolean), f.validationErrorOut = e.DataConversion.JSNodeParamConverter.from(d.ValidationError, e.DataTypes.DataTypes.Text), f
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
        get _sendVerifyEmail$Action() {
            return this.hasOwnProperty("__sendVerifyEmail$Action") || (this.__sendVerifyEmail$Action = function(i, n) {
                var t = this.model,
                    o = this.controller,
                    r = this.idService;
                return e.Logger.startActiveSpan("SendVerifyEmail", function(a) {
                    return a && (a.setAttribute("code.function", "SendVerifyEmail"), a.setAttribute("outsystems.function.key", "68a24437-507c-4979-89b7-f40ce225c6db"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        o.ensureControllerAlive("SendVerifyEmail"), n = o.callContext(n);
                        var s = new e.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("tradershub.Signup.EUSignup.SendVerifyEmail$vars")));
                        s.value.userEmailInLocal = i;
                        var d = new e.DataTypes.VariableHolder,
                            f = new e.DataTypes.VariableHolder;
                        return e.Flow.executeAsyncFlow(function() {
                            return f.value = e.Logger.startActiveSpan("VerifyEmailPayload", function(u) {
                                u && (u.setAttribute("code.function", "VerifyEmailPayload"), u.setAttribute("outsystems.function.key", "585e5e70-8fd1-4084-b7ac-c95284bf91df"), u.setAttribute("outsystems.function.owner.name", "tradershub"), u.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), u.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return o.safeExecuteJSNode(g, "VerifyEmailPayload", "SendVerifyEmail", {
                                        UserEmail: e.DataConversion.JSNodeParamConverter.to(s.value.userEmailInLocal, e.DataTypes.DataTypes.Email),
                                        Payload: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                                    }, function(_) {
                                        var C = new(o.constructor.getVariableGroupType("tradershub.Signup.EUSignup.SendVerifyEmail$verifyEmailPayloadJSResult"));
                                        return C.payloadOut = e.DataConversion.JSNodeParamConverter.from(_.Payload, e.DataTypes.DataTypes.Text), C
                                    }, {}, {})
                                } finally {
                                    u && u.end()
                                }
                            }, 1), t.flush(), A.derivApiSendMessage$Action(f.value.payloadOut, "", !1, n).then(function(u) {
                                d.value = u
                            }).then(function() {
                                if (d.value.isErrorOut) t.variables.isSubmittingVar = !1, e.Logger.startActiveSpan("RudderStackError", function(u) {
                                    u && (u.setAttribute("code.function", "RudderStackError"), u.setAttribute("outsystems.function.key", "807818b6-6572-439f-898f-1c866e6c696d"), u.setAttribute("outsystems.function.owner.name", "tradershub"), u.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), u.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return o.safeExecuteJSNode(S, "RudderStackError", "SendVerifyEmail", null, function(_) {}, {}, {})
                                    } finally {
                                        u && u.end()
                                    }
                                }, 1), e.FeedbackMessageService.showFeedbackMessage(d.value.errorCodeOut === "RateLimit" ? e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("irrPcCB+h0m7iZuyy8DxPw#Message.1785918141.1", "Maximum resend attempts reached. Try again in a few minutes.") : "Something went wrong. Please try reloading the page!", 3);
                                else return e.Logger.startActiveSpan("RudderStack", function(u) {
                                    u && (u.setAttribute("code.function", "RudderStack"), u.setAttribute("outsystems.function.key", "25f89adf-3fd7-4452-b61b-1729dedea4bb"), u.setAttribute("outsystems.function.owner.name", "tradershub"), u.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), u.setAttribute("outsystems.function.type", "JAVASCRIPT"));
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
        get _submitOnClick$Action() {
            return this.hasOwnProperty("__submitOnClick$Action") || (this.__submitOnClick$Action = function(i) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("SubmitOnClick", function(r) {
                    return r && (r.setAttribute("code.function", "SubmitOnClick"), r.setAttribute("outsystems.function.key", "88292a94-49bb-4ff8-9dc6-f039899f2d1b"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("SubmitOnClick"), i = t.callContext(i), e.Flow.executeAsyncFlow(function() {
                            return t._validate$Action(i), e.Flow.executeSequence(function() {
                                if (n.widgets.get(o.getId("Form")).validAttr) return n.variables.isSubmittingVar = !0, t._sendVerifyEmail$Action(b.getSignupEmail(), i);
                                e.Logger.startActiveSpan("RudderStack", function(a) {
                                    a && (a.setAttribute("code.function", "RudderStack"), a.setAttribute("outsystems.function.key", "68ce2e3a-6d81-47db-b2c7-bda7b3458460"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return t.safeExecuteJSNode(T, "RudderStack", "SubmitOnClick", null, function(s) {}, {}, {})
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
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(i) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("OnReady", function(r) {
                    r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "c05eb112-ca29-47cf-9984-d6fe8f12c02c"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), i = t.callContext(i);
                        var a = new e.DataTypes.VariableHolder;
                        if (a.value = e.Logger.startActiveSpan("CheckAuthURLParam", function(s) {
                                s && (s.setAttribute("code.function", "CheckAuthURLParam"), s.setAttribute("outsystems.function.key", "40f5af77-7810-4a12-9cf1-0915ced8216d"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return t.safeExecuteJSNode(p, "CheckAuthURLParam", "OnReady", {
                                        LoginID: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                        AuthToken: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                        LoginIDTokenPairs: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                                    }, function(d) {
                                        var f = new(t.constructor.getVariableGroupType("tradershub.Signup.EUSignup.OnReady$checkAuthURLParamJSResult"));
                                        return f.loginIDOut = e.DataConversion.JSNodeParamConverter.from(d.LoginID, e.DataTypes.DataTypes.Text), f.authTokenOut = e.DataConversion.JSNodeParamConverter.from(d.AuthToken, e.DataTypes.DataTypes.Text), f.loginIDTokenPairsOut = e.DataConversion.JSNodeParamConverter.from(d.LoginIDTokenPairs, e.DataTypes.DataTypes.Text), f
                                    }, {}, {})
                                } finally {
                                    s && s.end()
                                }
                            }, 1), a.value.authTokenOut !== e.BuiltinFunctions.nullTextIdentifier()) return b.setActiveLoginId(a.value.loginIDOut), b.setAuthToken(a.value.authTokenOut), e.Navigation.navigateTo(e.Navigation.generateScreenURL("tradershub", "options", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), i, !0);
                        b.setSignupEmail(""), e.Logger.startActiveSpan("RudderStack", function(s) {
                            s && (s.setAttribute("code.function", "RudderStack"), s.setAttribute("outsystems.function.key", "3b959c08-c736-4073-86b4-deb517d8a5d7"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(k, "RudderStack", "OnReady", null, function(d) {}, {}, {})
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
        get _linkOnClick$Action() {
            return this.hasOwnProperty("__linkOnClick$Action") || (this.__linkOnClick$Action = function(i) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("LinkOnClick", function(r) {
                    r && (r.setAttribute("code.function", "LinkOnClick"), r.setAttribute("outsystems.function.key", "d738fccc-83a9-403e-84e8-eb9f4a86c683"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("LinkOnClick"), i = t.callContext(i), A.redirectToExternalURL$Action("https://docs.deriv.com/tnc/eu/security-and-privacy.pdf", !0, i)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__linkOnClick$Action
        }
        set _linkOnClick$Action(i) {
            this.__linkOnClick$Action = i
        }
        onInitialize$Action(i) {
            var n = this.controller;
            return e.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "19dae12c-a515-439b-8e28-5ea8ec4b1f33"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onInitialize$Action, i)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        validate$Action(i) {
            var n = this.controller;
            return e.Logger.startActiveSpan("Validate__proxy", function(t) {
                t && (t.setAttribute("code.function", "Validate"), t.setAttribute("outsystems.function.key", "1fb5dd34-767b-4397-b460-9f33a93c8998"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._validate$Action, i)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        sendVerifyEmail$Action(i, n) {
            var t = this.controller;
            return e.Logger.startActiveSpan("SendVerifyEmail__proxy", function(o) {
                return o && (o.setAttribute("code.function", "SendVerifyEmail"), o.setAttribute("outsystems.function.key", "68a24437-507c-4979-89b7-f40ce225c6db"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._sendVerifyEmail$Action, n, i)
                }, function() {
                    o && o.end()
                })
            }, 0)
        }
        submitOnClick$Action(i) {
            var n = this.controller;
            return e.Logger.startActiveSpan("SubmitOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "SubmitOnClick"), t.setAttribute("outsystems.function.key", "88292a94-49bb-4ff8-9dc6-f039899f2d1b"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._submitOnClick$Action, i)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onReady$Action(i) {
            var n = this.controller;
            return e.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "c05eb112-ca29-47cf-9984-d6fe8f12c02c"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onReady$Action, i)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        linkOnClick$Action(i) {
            var n = this.controller;
            return e.Logger.startActiveSpan("LinkOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "LinkOnClick"), t.setAttribute("outsystems.function.key", "d738fccc-83a9-403e-84e8-eb9f4a86c683"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._linkOnClick$Action, i)
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
                return R.default.handleError(i, this.callContext())
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
    let l = m;
    v = l, v.registerVariableGroupType("tradershub.Signup.EUSignup.Validate$validateEmailJSResult", [{
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
    }]), v.registerVariableGroupType("tradershub.Signup.EUSignup.SendVerifyEmail$vars", [{
        name: "UserEmail",
        attrName: "userEmailInLocal",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Email,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }]), v.registerVariableGroupType("tradershub.Signup.EUSignup.SendVerifyEmail$verifyEmailPayloadJSResult", [{
        name: "Payload",
        attrName: "payloadOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }]), v.registerVariableGroupType("tradershub.Signup.EUSignup.OnReady$checkAuthURLParamJSResult", [{
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
    }])
}
var v, lt = new e.Controller.ControllerFactory(v, D);
export {
    lt as a
};