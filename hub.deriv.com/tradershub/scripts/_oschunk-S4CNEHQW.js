import {
    a as g
} from "./_oschunk-FEIYDBQO.js";
import {
    a as w
} from "./_oschunk-Y45M2O2K.js";
import {
    a as c,
    d as b
} from "./_oschunk-27GDEXUT.js";
import {
    ia as h
} from "./_oschunk-NTQBNJ73.js";
import {
    c as d
} from "./_oschunk-DVBKI63I.js";
var P = {
        "09iHoosI3EOO1J1ZuaNREQ#Value": "Envoyer un e-mail",
        "tfgAz1CTZEqDT0xqPoAasw#ValueExpression.-374653993.1": "Entrez votre email",
        "tnc4I59H8EWTUtsAmaUo3g#Value": "Email",
        "Iajy_eY9VE2jhnVtWwOoJA#Value": "Nous vous enverrons par e-mail des instructions pour r\xE9initialiser votre mot de passe.",
        "0IkcMMYNI0GR1RUiDfqppQ#Value": "Mot de passe oubli\xE9",
        "5pu5z3ZK+EiWjaMEqLXNGg#Value": "Vous n'avez pas re\xE7u l'email ?",
        "hEgP0XzXt0GFIZ+GN6xHLw#Value": "Cliquez sur le lien dans l'e-mail pour r\xE9initialiser votre mot de passe.",
        "up3wQNU3ZEqij9XsmzAtCQ#Value": "Nous vous avons envoy\xE9 un e-mail",
        "Gk_WKj61ak+6jvGljsSOJg#Value": "Renvoyer l'e-mail",
        "8hADf5elLkudl1qmCaGIqA#ValueExpression.-374653993.1": "Entrez votre e-mail",
        "XM4pjsgDxESM9R3bguC1Ag#Value": "Email",
        "T4vKH2zfpEmuS3eFMNHQng#Value": "Assurez-vous d'utiliser le lien dans notre dernier email. Ou saisissez votre email ci-dessous pour recevoir un nouveau lien.",
        "Pxzixhjcl0S05rq_pbc7ZA#Value": "Lien expir\xE9",
        "DsieOgAZnkiDeMc7ClkiYQ#Value.2117503773.1": "L'email est requis.",
        "J_YImVX9qEKVIltJ9uDXrA#Value.-6690446.1": "Cela ne ressemble pas \xE0 une adresse e-mail."
    },
    C = {
        "fr-FR": {
            translations: P,
            isRTL: !1
        }
    };

function E(u, f, S, t) {
    let n = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/;
    u.IsEmailValid = n.test(u.Email)
}
d(E, "default");

function v(u, f, S, t) {
    u.Payload = JSON.stringify({
        verify_email: u.UserEmail,
        type: "reset_password"
    })
}
d(v, "default");
var r = h; {
    let f = class f extends r.Controller.BaseViewController {
        constructor(t, n, e) {
            super(t, n, e, C);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _reset$Action() {
            return this.hasOwnProperty("__reset$Action") || (this.__reset$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("Reset", function(i) {
                    i && (i.setAttribute("code.function", "Reset"), i.setAttribute("outsystems.function.key", "7006f7ef-3f55-414b-aaf0-ba97045caf6b"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("Reset"), t = e.callContext(t), c.setResetPasswordEmailSent(!1)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__reset$Action
        }
        set _reset$Action(t) {
            this.__reset$Action = t
        }
        get _clickOnClose$Action() {
            return this.hasOwnProperty("__clickOnClose$Action") || (this.__clickOnClose$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("ClickOnClose", function(i) {
                    i && (i.setAttribute("code.function", "ClickOnClose"), i.setAttribute("outsystems.function.key", "88bcd105-aa01-4fdc-8c0f-ae888504be15"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("ClickOnClose"), t = e.callContext(t), c.setResetPasswordLinkExpired(!1)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__clickOnClose$Action
        }
        set _clickOnClose$Action(t) {
            this.__clickOnClose$Action = t
        }
        get _sendEmailOnClick$Action() {
            return this.hasOwnProperty("__sendEmailOnClick$Action") || (this.__sendEmailOnClick$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("SendEmailOnClick", function(i) {
                    return i && (i.setAttribute("code.function", "SendEmailOnClick"), i.setAttribute("outsystems.function.key", "c4fecd5d-9631-479c-b8be-787caab11a59"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        e.ensureControllerAlive("SendEmailOnClick"), t = e.callContext(t);
                        var s = new r.DataTypes.VariableHolder;
                        return r.Flow.executeAsyncFlow(function() {
                            return r.Flow.executeSequence(function() {
                                if (r.BuiltinFunctions.length(n.variables.emailVar) < 1) n.widgets.get(o.getId("Email_Input")).validAttr = !1, n.widgets.get(o.getId("Email_Input")).validationMessageAttr = r.Injector.resolve(r.ServiceNames.TranslationsService).getMessage("DsieOgAZnkiDeMc7ClkiYQ#Value.2117503773.1", "Email is required.");
                                else return s.value = r.Logger.startActiveSpan("ValidateEmail", function(a) {
                                    a && (a.setAttribute("code.function", "ValidateEmail"), a.setAttribute("outsystems.function.key", "126bcd74-8978-4641-8f6e-1f87ba3203a3"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return e.safeExecuteJSNode(E, "ValidateEmail", "SendEmailOnClick", {
                                            Email: r.DataConversion.JSNodeParamConverter.to(n.variables.emailVar, r.DataTypes.DataTypes.Email),
                                            IsEmailValid: r.DataConversion.JSNodeParamConverter.to(!1, r.DataTypes.DataTypes.Boolean)
                                        }, function(A) {
                                            var m = new(e.constructor.getVariableGroupType("tradershub.ForgotAndResetPassword.ForgotPassword.SendEmailOnClick$validateEmailJSResult"));
                                            return m.isEmailValidOut = r.DataConversion.JSNodeParamConverter.from(A.IsEmailValid, r.DataTypes.DataTypes.Boolean), m
                                        }, {}, {})
                                    } finally {
                                        a && a.end()
                                    }
                                }, 1), r.Flow.executeSequence(function() {
                                    if (s.value.isEmailValidOut) return r.Flow.executeSequence(function() {
                                        if (n.widgets.get(o.getId("Form")).validAttr) return e._sendResetPasswordEmail$Action(n.variables.emailVar, t)
                                    });
                                    n.widgets.get(o.getId("Email_Input")).validAttr = !1, n.widgets.get(o.getId("Email_Input")).validationMessageAttr = r.Injector.resolve(r.ServiceNames.TranslationsService).getMessage("J_YImVX9qEKVIltJ9uDXrA#Value.-6690446.1", "That doesn't look like an email address.")
                                })
                            })
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__sendEmailOnClick$Action
        }
        set _sendEmailOnClick$Action(t) {
            this.__sendEmailOnClick$Action = t
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("OnInitialize", function(i) {
                    i && (i.setAttribute("code.function", "OnInitialize"), i.setAttribute("outsystems.function.key", "e794aa91-02da-40e5-b79e-2c4ede2a7d83"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnInitialize"), t = e.callContext(t), c.setResetPasswordEmailSent(!1)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(t) {
            this.__onInitialize$Action = t
        }
        get _sendResetPasswordEmail$Action() {
            return this.hasOwnProperty("__sendResetPasswordEmail$Action") || (this.__sendResetPasswordEmail$Action = function(t, n) {
                var e = this.model,
                    o = this.controller,
                    i = this.idService;
                return r.Logger.startActiveSpan("SendResetPasswordEmail", function(s) {
                    return s && (s.setAttribute("code.function", "SendResetPasswordEmail"), s.setAttribute("outsystems.function.key", "fa654e67-30d2-45df-9e4b-37f1ffb1275e"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        o.ensureControllerAlive("SendResetPasswordEmail"), n = o.callContext(n);
                        var a = new r.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("tradershub.ForgotAndResetPassword.ForgotPassword.SendResetPasswordEmail$vars")));
                        a.value.userEmailInLocal = t;
                        var A = new r.DataTypes.VariableHolder,
                            m = new r.DataTypes.VariableHolder;
                        return r.Flow.executeAsyncFlow(function() {
                            return m.value = r.Logger.startActiveSpan("verify_email_payload", function(l) {
                                l && (l.setAttribute("code.function", "verify_email_payload"), l.setAttribute("outsystems.function.key", "a16c9536-cc9e-4dc4-9be0-37e4543063bd"), l.setAttribute("outsystems.function.owner.name", "tradershub"), l.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), l.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return o.safeExecuteJSNode(v, "verify_email_payload", "SendResetPasswordEmail", {
                                        UserEmail: r.DataConversion.JSNodeParamConverter.to(a.value.userEmailInLocal, r.DataTypes.DataTypes.Email),
                                        Payload: r.DataConversion.JSNodeParamConverter.to("", r.DataTypes.DataTypes.Text)
                                    }, function(R) {
                                        var _ = new(o.constructor.getVariableGroupType("tradershub.ForgotAndResetPassword.ForgotPassword.SendResetPasswordEmail$verify_email_payloadJSResult"));
                                        return _.payloadOut = r.DataConversion.JSNodeParamConverter.from(R.Payload, r.DataTypes.DataTypes.Text), _
                                    }, {}, {})
                                } finally {
                                    l && l.end()
                                }
                            }, 1), e.flush(), b.derivApiSendMessage$Action(m.value.payloadOut, "", !1, n).then(function(l) {
                                A.value = l
                            }).then(function() {
                                A.value.isErrorOut ? c.setResetPasswordLinkExpired(!0) : c.setResetPasswordEmailSent(!0)
                            })
                        })
                    }, function() {
                        s && s.end()
                    })
                }, 1)
            }), this.__sendResetPasswordEmail$Action
        }
        set _sendResetPasswordEmail$Action(t) {
            this.__sendResetPasswordEmail$Action = t
        }
        reset$Action(t) {
            var n = this.controller;
            return r.Logger.startActiveSpan("Reset__proxy", function(e) {
                e && (e.setAttribute("code.function", "Reset"), e.setAttribute("outsystems.function.key", "7006f7ef-3f55-414b-aaf0-ba97045caf6b"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._reset$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        clickOnClose$Action(t) {
            var n = this.controller;
            return r.Logger.startActiveSpan("ClickOnClose__proxy", function(e) {
                e && (e.setAttribute("code.function", "ClickOnClose"), e.setAttribute("outsystems.function.key", "88bcd105-aa01-4fdc-8c0f-ae888504be15"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._clickOnClose$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        sendEmailOnClick$Action(t) {
            var n = this.controller;
            return r.Logger.startActiveSpan("SendEmailOnClick__proxy", function(e) {
                return e && (e.setAttribute("code.function", "SendEmailOnClick"), e.setAttribute("outsystems.function.key", "c4fecd5d-9631-479c-b8be-787caab11a59"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._sendEmailOnClick$Action, t)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        onInitialize$Action(t) {
            var n = this.controller;
            return r.Logger.startActiveSpan("OnInitialize__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnInitialize"), e.setAttribute("outsystems.function.key", "e794aa91-02da-40e5-b79e-2c4ede2a7d83"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onInitialize$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        sendResetPasswordEmail$Action(t, n) {
            var e = this.controller;
            return r.Logger.startActiveSpan("SendResetPasswordEmail__proxy", function(o) {
                return o && (o.setAttribute("code.function", "SendResetPasswordEmail"), o.setAttribute("outsystems.function.key", "fa654e67-30d2-45df-9e4b-37f1ffb1275e"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return e.safeExecuteClientAction(e._sendResetPasswordEmail$Action, n, t)
                }, function() {
                    o && o.end()
                })
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(t) {
                var n = this.controller,
                    e = this.model,
                    o = this.idService;
                return n.onInitialize$Action(t)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(t) {
            this._onInitializeEventHandler = t
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = null), this._onReadyEventHandler
        }
        set onReadyEventHandler(t) {
            this._onReadyEventHandler = t
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(t) {
            this._onRenderEventHandler = t
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = null), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(t) {
            this._onDestroyEventHandler = t
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(t) {
            this._onParametersChangedEventHandler = t
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(t) {
                return g.default.handleError(t, this.callContext())
            }), this._handleError
        }
        set handleError(t) {
            this._handleError = t
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return b.defaultTimeout
        }
    };
    d(f, "ControllerInner");
    let u = f;
    y = u, y.registerVariableGroupType("tradershub.ForgotAndResetPassword.ForgotPassword.SendEmailOnClick$validateEmailJSResult", [{
        name: "IsEmailValid",
        attrName: "isEmailValidOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Boolean,
        defaultValue: d(function() {
            return !1
        }, "defaultValue")
    }]), y.registerVariableGroupType("tradershub.ForgotAndResetPassword.ForgotPassword.SendResetPasswordEmail$vars", [{
        name: "UserEmail",
        attrName: "userEmailInLocal",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Email,
        defaultValue: d(function() {
            return ""
        }, "defaultValue")
    }]), y.registerVariableGroupType("tradershub.ForgotAndResetPassword.ForgotPassword.SendResetPasswordEmail$verify_email_payloadJSResult", [{
        name: "Payload",
        attrName: "payloadOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: d(function() {
            return ""
        }, "defaultValue")
    }])
}
var y, L = new r.Controller.ControllerFactory(y, w);
export {
    L as a
};