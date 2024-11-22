import {
    a as v
} from "./_oschunk-FEIYDBQO.js";
import {
    a as m
} from "./_oschunk-Y45M2O2K.js";
import {
    a as w,
    d as y
} from "./_oschunk-27GDEXUT.js";
import {
    ia as _
} from "./_oschunk-NTQBNJ73.js";
import {
    c
} from "./_oschunk-DVBKI63I.js";
var S = {
        "kOrypI4zEkCt9ac3Ju1B1Q#Value": "R\xE9initialiser mon mot de passe",
        "dyHdmnqwXUiccPCTPcJsdg#Value": "R\xE9initialiser le mot de passe"
    },
    C = {
        "fr-FR": {
            translations: S,
            isRTL: !1
        }
    };

function h(d, f, E, e) {
    d.Payload = JSON.stringify({
        verification_code: d.VerificationCode,
        new_password: d.NewPassword
    })
}
c(h, "default");
var t = _; {
    let f = class f extends t.Controller.BaseViewController {
        constructor(e, o, r) {
            super(e, o, r, C);
            var s = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _passwordPolicyCompliant$Action() {
            return this.hasOwnProperty("__passwordPolicyCompliant$Action") || (this.__passwordPolicyCompliant$Action = function(e, o) {
                var r = this.model,
                    s = this.controller,
                    n = this.idService;
                return t.Logger.startActiveSpan("PasswordPolicyCompliant", function(a) {
                    a && (a.setAttribute("code.function", "PasswordPolicyCompliant"), a.setAttribute("outsystems.function.key", "0f82ecea-8e17-439b-9ee1-4b6d644e0615"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        s.ensureControllerAlive("PasswordPolicyCompliant"), o = s.callContext(o);
                        var u = new t.DataTypes.VariableHolder(new(s.constructor.getVariableGroupType("tradershub.ForgotAndResetPassword.ResetPassword.PasswordPolicyCompliant$vars")));
                        u.value.isValidInLocal = e, r.variables.isPasswordValidVar = u.value.isValidInLocal
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__passwordPolicyCompliant$Action
        }
        set _passwordPolicyCompliant$Action(e) {
            this.__passwordPolicyCompliant$Action = e
        }
        get _onClickShowPassword$Action() {
            return this.hasOwnProperty("__onClickShowPassword$Action") || (this.__onClickShowPassword$Action = function(e) {
                var o = this.model,
                    r = this.controller,
                    s = this.idService;
                return t.Logger.startActiveSpan("OnClickShowPassword", function(n) {
                    n && (n.setAttribute("code.function", "OnClickShowPassword"), n.setAttribute("outsystems.function.key", "2081c48a-42fd-42e9-95e0-2fdcd2ca8408"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnClickShowPassword"), e = r.callContext(e), o.variables.showPasswordVar ? o.variables.showPasswordVar = !1 : o.variables.showPasswordVar = !0
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onClickShowPassword$Action
        }
        set _onClickShowPassword$Action(e) {
            this.__onClickShowPassword$Action = e
        }
        get _sendNewPassword$Action() {
            return this.hasOwnProperty("__sendNewPassword$Action") || (this.__sendNewPassword$Action = function(e, o) {
                var r = this.model,
                    s = this.controller,
                    n = this.idService;
                return t.Logger.startActiveSpan("SendNewPassword", function(a) {
                    return a && (a.setAttribute("code.function", "SendNewPassword"), a.setAttribute("outsystems.function.key", "3ffdf30b-aab9-432c-8988-1a04c5033c92"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        s.ensureControllerAlive("SendNewPassword"), o = s.callContext(o);
                        var u = new t.DataTypes.VariableHolder(new(s.constructor.getVariableGroupType("tradershub.ForgotAndResetPassword.ResetPassword.SendNewPassword$vars")));
                        u.value.newPasswordInLocal = e;
                        var b = new t.DataTypes.VariableHolder,
                            A = new t.DataTypes.VariableHolder;
                        return t.Flow.executeAsyncFlow(function() {
                            return A.value = t.Logger.startActiveSpan("reset_password_payload", function(i) {
                                i && (i.setAttribute("code.function", "reset_password_payload"), i.setAttribute("outsystems.function.key", "e3c260d4-d5dd-4754-b80c-c23ed11eb338"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return s.safeExecuteJSNode(h, "reset_password_payload", "SendNewPassword", {
                                        NewPassword: t.DataConversion.JSNodeParamConverter.to(u.value.newPasswordInLocal, t.DataTypes.DataTypes.Text),
                                        VerificationCode: t.DataConversion.JSNodeParamConverter.to(w.getCode(), t.DataTypes.DataTypes.Text),
                                        Payload: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                                    }, function(g) {
                                        var P = new(s.constructor.getVariableGroupType("tradershub.ForgotAndResetPassword.ResetPassword.SendNewPassword$reset_password_payloadJSResult"));
                                        return P.payloadOut = t.DataConversion.JSNodeParamConverter.from(g.Payload, t.DataTypes.DataTypes.Text), P
                                    }, {}, {})
                                } finally {
                                    i && i.end()
                                }
                            }, 1), r.flush(), y.derivApiSendMessage$Action(A.value.payloadOut, "reset_password", !1, o).then(function(i) {
                                b.value = i
                            }).then(function() {
                                return b.value.isErrorOut ? (w.setResetPasswordEmailSent(!1), w.setResetPasswordLinkExpired(!0), t.Flow.returnAsync(t.Navigation.navigateTo(t.Navigation.generateScreenURL("tradershub", "ForgotPassword", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), o, !0))) : (t.FeedbackMessageService.showFeedbackMessage("Password has been updated!", 1), y.cleanupAfterResetPassword$Action(o), t.Flow.returnAsync(t.Navigation.navigateTo(t.Navigation.generateScreenURL("tradershub", "login", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), o, !0)))
                            })
                        })
                    }, function() {
                        a && a.end()
                    })
                }, 1)
            }), this.__sendNewPassword$Action
        }
        set _sendNewPassword$Action(e) {
            this.__sendNewPassword$Action = e
        }
        get _resetMyPasswordOnClick$Action() {
            return this.hasOwnProperty("__resetMyPasswordOnClick$Action") || (this.__resetMyPasswordOnClick$Action = function(e) {
                var o = this.model,
                    r = this.controller,
                    s = this.idService;
                return t.Logger.startActiveSpan("ResetMyPasswordOnClick", function(n) {
                    return n && (n.setAttribute("code.function", "ResetMyPasswordOnClick"), n.setAttribute("outsystems.function.key", "f845f332-ce0a-473c-a3b6-96edc2fdca50"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        return r.ensureControllerAlive("ResetMyPasswordOnClick"), e = r.callContext(e), t.Flow.executeAsyncFlow(function() {
                            return t.Flow.executeSequence(function() {
                                if (o.variables.isPasswordValidVar) return r._sendNewPassword$Action(o.variables.passwordVar, e)
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__resetMyPasswordOnClick$Action
        }
        set _resetMyPasswordOnClick$Action(e) {
            this.__resetMyPasswordOnClick$Action = e
        }
        passwordPolicyCompliant$Action(e, o) {
            var r = this.controller;
            return t.Logger.startActiveSpan("PasswordPolicyCompliant__proxy", function(s) {
                s && (s.setAttribute("code.function", "PasswordPolicyCompliant"), s.setAttribute("outsystems.function.key", "0f82ecea-8e17-439b-9ee1-4b6d644e0615"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._passwordPolicyCompliant$Action, o, e)
                } finally {
                    s && s.end()
                }
            }, 0)
        }
        onClickShowPassword$Action(e) {
            var o = this.controller;
            return t.Logger.startActiveSpan("OnClickShowPassword__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnClickShowPassword"), r.setAttribute("outsystems.function.key", "2081c48a-42fd-42e9-95e0-2fdcd2ca8408"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return o.safeExecuteClientAction(o._onClickShowPassword$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        sendNewPassword$Action(e, o) {
            var r = this.controller;
            return t.Logger.startActiveSpan("SendNewPassword__proxy", function(s) {
                return s && (s.setAttribute("code.function", "SendNewPassword"), s.setAttribute("outsystems.function.key", "3ffdf30b-aab9-432c-8988-1a04c5033c92"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._sendNewPassword$Action, o, e)
                }, function() {
                    s && s.end()
                })
            }, 0)
        }
        resetMyPasswordOnClick$Action(e) {
            var o = this.controller;
            return t.Logger.startActiveSpan("ResetMyPasswordOnClick__proxy", function(r) {
                return r && (r.setAttribute("code.function", "ResetMyPasswordOnClick"), r.setAttribute("outsystems.function.key", "f845f332-ce0a-473c-a3b6-96edc2fdca50"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return o.safeExecuteClientAction(o._resetMyPasswordOnClick$Action, e)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
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
                return v.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return y.defaultTimeout
        }
    };
    c(f, "ControllerInner");
    let d = f;
    l = d, l.registerVariableGroupType("tradershub.ForgotAndResetPassword.ResetPassword.PasswordPolicyCompliant$vars", [{
        name: "IsValid",
        attrName: "isValidInLocal",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Boolean,
        defaultValue: c(function() {
            return !1
        }, "defaultValue")
    }]), l.registerVariableGroupType("tradershub.ForgotAndResetPassword.ResetPassword.SendNewPassword$vars", [{
        name: "NewPassword",
        attrName: "newPasswordInLocal",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }]), l.registerVariableGroupType("tradershub.ForgotAndResetPassword.ResetPassword.SendNewPassword$reset_password_payloadJSResult", [{
        name: "Payload",
        attrName: "payloadOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }])
}
var l, V = new t.Controller.ControllerFactory(l, m);
export {
    V as a
};