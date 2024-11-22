import {
    a as p
} from "./_oschunk-AGISAFBQ.js";
import {
    a as S
} from "./_oschunk-Y45M2O2K.js";
import {
    a as A,
    d as m
} from "./_oschunk-27GDEXUT.js";
import {
    ia as g
} from "./_oschunk-NTQBNJ73.js";
import {
    a as b,
    b as _,
    c as u
} from "./_oschunk-DVBKI63I.js";
var T = {
        "z31ULyxXE0iDZK+ggzIy7w#Value": "Assurez-vous que l'email n'est pas bloqu\xE9 par des pare-feu ou des filtres.",
        "oemHAbU4pUWSudfKsqyVzg#Value": "V\xE9rifiez votre dossier de spam.",
        "61zNHxNu502gHhifmmz4IA#Value": "Assurez-vous d'avoir correctement saisi votre adresse e-mail.",
        "sPGv4u2Vf0GhWnR2F+88Lg#Value": "Renvoi de l'email",
        "OlUhS96640KlAujAwJX3GQ#Value": "Vous n'avez pas re\xE7u d'email ?",
        "i5X5nJsCMk+a7Z3SQ9IFSQ#ValueExpression.-1309903677.1": "Nous avons envoy\xE9 un lien de v\xE9rification \xE0",
        "uSJHx7RPj0mqvF6f8n4__w#Message.-1041026628.1": "Email envoy\xE9",
        "vfNGMUJd006SYoq6f5jjEg#Title": "V\xE9rifiez votre e-mail",
        "vfNGMUJd006SYoq6f5jjEg#TitleExpression.-1132290137.1": "V\xE9rifiez votre e-mail"
    },
    V = {
        "fr-FR": {
            translations: T,
            isRTL: !1
        }
    };

function y(l, d, R, e) {
    let n = window.getCookiesFields(),
        r = window.getCookiesObject(n),
        i = window.getDataObjFromCookies(r, n),
        a = window.getCookieValue("affiliate_tracking");
    l.Payload = JSON.stringify({
        verify_email: l.UserEmail,
        type: "account_opening",
        url_parameters: _(b({}, i), {
            affiliate_token: a
        })
    })
}
u(y, "default");
var t = g; {
    let d = class d extends t.Controller.BaseViewController {
        constructor(e, n, r) {
            super(e, n, r, V);
            var i = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _resendVerifyEmail$Action() {
            return this.hasOwnProperty("__resendVerifyEmail$Action") || (this.__resendVerifyEmail$Action = function(e, n) {
                var r = this.model,
                    i = this.controller,
                    a = this.idService;
                return t.Logger.startActiveSpan("ResendVerifyEmail", function(s) {
                    return s && (s.setAttribute("code.function", "ResendVerifyEmail"), s.setAttribute("outsystems.function.key", "1f9835ca-7ad9-41b3-b913-f4026bd32abf"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        i.ensureControllerAlive("ResendVerifyEmail"), n = i.callContext(n);
                        var h = new t.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("tradershub.Signup.EmailSentScreen.ResendVerifyEmail$vars")));
                        h.value.userEmailInLocal = e;
                        var f = new t.DataTypes.VariableHolder,
                            v = new t.DataTypes.VariableHolder;
                        return t.Flow.executeAsyncFlow(function() {
                            return v.value = t.Logger.startActiveSpan("VerifyEmailPayload", function(o) {
                                o && (o.setAttribute("code.function", "VerifyEmailPayload"), o.setAttribute("outsystems.function.key", "a828f095-21c6-4066-98e3-6a0abeac17da"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return i.safeExecuteJSNode(y, "VerifyEmailPayload", "ResendVerifyEmail", {
                                        UserEmail: t.DataConversion.JSNodeParamConverter.to(h.value.userEmailInLocal, t.DataTypes.DataTypes.Email),
                                        Payload: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                                    }, function(w) {
                                        var E = new(i.constructor.getVariableGroupType("tradershub.Signup.EmailSentScreen.ResendVerifyEmail$verifyEmailPayloadJSResult"));
                                        return E.payloadOut = t.DataConversion.JSNodeParamConverter.from(w.Payload, t.DataTypes.DataTypes.Text), E
                                    }, {}, {})
                                } finally {
                                    o && o.end()
                                }
                            }, 1), r.flush(), m.derivApiSendMessage$Action(v.value.payloadOut, "", !1, n).then(function(o) {
                                f.value = o
                            }).then(function() {
                                f.value.isErrorOut ? t.FeedbackMessageService.showFeedbackMessage(f.value.errorCodeOut === "RateLimit" ? "Maximum resend attempts reached. Try again in a few minutes." : "Something went wrong. Please try reloading the page!", 3) : t.FeedbackMessageService.showFeedbackMessage(t.Injector.resolve(t.ServiceNames.TranslationsService).getMessage("uSJHx7RPj0mqvF6f8n4__w#Message.-1041026628.1", "Email sent"), 1)
                            })
                        })
                    }, function() {
                        s && s.end()
                    })
                }, 1)
            }), this.__resendVerifyEmail$Action
        }
        set _resendVerifyEmail$Action(e) {
            this.__resendVerifyEmail$Action = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var n = this.model,
                    r = this.controller,
                    i = this.idService;
                return t.Logger.startActiveSpan("OnInitialize", function(a) {
                    a && (a.setAttribute("code.function", "OnInitialize"), a.setAttribute("outsystems.function.key", "a4e22616-a39a-4e8b-8871-a7bb42b96c53"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        if (r.ensureControllerAlive("OnInitialize"), e = r.callContext(e), A.getSignupEmail() === t.BuiltinFunctions.nullTextIdentifier()) return t.Navigation.navigateTo(t.Navigation.generateScreenURL("tradershub", "signup", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        resendVerifyEmail$Action(e, n) {
            var r = this.controller;
            return t.Logger.startActiveSpan("ResendVerifyEmail__proxy", function(i) {
                return i && (i.setAttribute("code.function", "ResendVerifyEmail"), i.setAttribute("outsystems.function.key", "1f9835ca-7ad9-41b3-b913-f4026bd32abf"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._resendVerifyEmail$Action, n, e)
                }, function() {
                    i && i.end()
                })
            }, 0)
        }
        onInitialize$Action(e) {
            var n = this.controller;
            return t.Logger.startActiveSpan("OnInitialize__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnInitialize"), r.setAttribute("outsystems.function.key", "a4e22616-a39a-4e8b-8871-a7bb42b96c53"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onInitialize$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var n = this.controller,
                    r = this.model,
                    i = this.idService;
                return n.onInitialize$Action(e)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = null), this._onReadyEventHandler
        }
        set onReadyEventHandler(e) {
            this._onReadyEventHandler = e
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(e) {
            this._onRenderEventHandler = e
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = null), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(e) {
            this._onDestroyEventHandler = e
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(e) {
            this._onParametersChangedEventHandler = e
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(e) {
                return p.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return m.defaultTimeout
        }
    };
    u(d, "ControllerInner");
    let l = d;
    c = l, c.registerVariableGroupType("tradershub.Signup.EmailSentScreen.ResendVerifyEmail$vars", [{
        name: "UserEmail",
        attrName: "userEmailInLocal",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Email,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }]), c.registerVariableGroupType("tradershub.Signup.EmailSentScreen.ResendVerifyEmail$verifyEmailPayloadJSResult", [{
        name: "Payload",
        attrName: "payloadOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }])
}
var c, $ = new t.Controller.ControllerFactory(c, S);
export {
    $ as a
};