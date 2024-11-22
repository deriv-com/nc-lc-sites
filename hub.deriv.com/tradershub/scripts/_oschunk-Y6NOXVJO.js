import {
    a as w
} from "./_oschunk-Y45M2O2K.js";
import {
    a as A
} from "./_oschunk-TIJZDWYD.js";
import {
    d as b
} from "./_oschunk-27GDEXUT.js";
import {
    a as f
} from "./_oschunk-D2MH3QEK.js";
import {
    ia as m
} from "./_oschunk-NTQBNJ73.js";
import {
    c
} from "./_oschunk-DVBKI63I.js";
var _ = {
        "4LDnfyb9g0GaneMelrpuhg#Value": "Aller \xE0 la connexion.",
        "U+g_NOruNkeUZxEnphvXbQ#Value": "Pas au bon endroit ?",
        "lDd0coklNEO+7t7X5YyfQA#Value": "Enregistrer le mot de passe",
        "D8SnzXdRCEuo2QnLs_vGRw#Value": "Confirmer le mot de passe",
        "WrZQ2WIh0UejDSX42KwiwA#Value": "Nouveau mot de passe",
        "fyHM5Gx3wkWMLqJccQoLnw#Value": "Code de v\xE9rification",
        "QL1mqWwGjE2zCHgcaf2iCA#Value": "Email",
        "k4KVmCe6QEaS0B56phl+9g#Value": "Si l'adresse e-mail saisie est correcte, nous enverrons un code de v\xE9rification \xE0 cette adresse. Veuillez entrer le code ci-dessous pour v\xE9rifier votre identit\xE9.",
        "RyWkZ2V37k6kDAl2adJqXw#Value": "R\xE9initialiser le mot de passe",
        "TNAEDlc4s0i1nQQFHUByLA#Title": "D\xE9finir un nouveau mot de passe",
        "TNAEDlc4s0i1nQQFHUByLA#TitleExpression.-787762664.1": "D\xE9finir un nouveau mot de passe"
    },
    h = {
        "fr-FR": {
            translations: _,
            isRTL: !1
        }
    };
var r = m; {
    let d = class d extends r.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t, h);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onToggleConfirmPasswordVisibility$Action() {
            return this.hasOwnProperty("__onToggleConfirmPasswordVisibility$Action") || (this.__onToggleConfirmPasswordVisibility$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("OnToggleConfirmPasswordVisibility", function(n) {
                    n && (n.setAttribute("code.function", "OnToggleConfirmPasswordVisibility"), n.setAttribute("outsystems.function.key", "1d6f1416-e59d-4785-a0f6-447ea5c5c298"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnToggleConfirmPasswordVisibility"), e = t.callContext(e);
                        var s = new r.DataTypes.VariableHolder;
                        i.variables.isConfirmPasswordVisibleVar = !i.variables.isConfirmPasswordVisibleVar, s.value = f.showPassword$Action(o.getId("Input_ConfirmPassword"), e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onToggleConfirmPasswordVisibility$Action
        }
        set _onToggleConfirmPasswordVisibility$Action(e) {
            this.__onToggleConfirmPasswordVisibility$Action = e
        }
        get _passwordPolicyCompliant$Action() {
            return this.hasOwnProperty("__passwordPolicyCompliant$Action") || (this.__passwordPolicyCompliant$Action = function(e, i) {
                var t = this.model,
                    o = this.controller,
                    n = this.idService;
                return r.Logger.startActiveSpan("PasswordPolicyCompliant", function(s) {
                    s && (s.setAttribute("code.function", "PasswordPolicyCompliant"), s.setAttribute("outsystems.function.key", "5daacc87-042d-496f-b2e5-ceeb36778e92"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("PasswordPolicyCompliant"), i = o.callContext(i);
                        var a = new r.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("tradershub.Common.RecoverPasswordReset.PasswordPolicyCompliant$vars")));
                        a.value.isValidInLocal = e, t.variables.isNewPasswordCompliantVar = a.value.isValidInLocal, o._setIsButtonEnabled$Action(i)
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__passwordPolicyCompliant$Action
        }
        set _passwordPolicyCompliant$Action(e) {
            this.__passwordPolicyCompliant$Action = e
        }
        get _input_ConfirmPasswordOnChange$Action() {
            return this.hasOwnProperty("__input_ConfirmPasswordOnChange$Action") || (this.__input_ConfirmPasswordOnChange$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("Input_ConfirmPasswordOnChange", function(n) {
                    n && (n.setAttribute("code.function", "Input_ConfirmPasswordOnChange"), n.setAttribute("outsystems.function.key", "5eca7252-a4ae-44bb-af74-76a5230b6146"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("Input_ConfirmPasswordOnChange"), e = t.callContext(e), t._setIsButtonEnabled$Action(e), i.variables.confirmPasswordVar === "" && (i.widgets.get(o.getId("Input_ConfirmPassword")).validAttr = !0, i.widgets.get(o.getId("Input_ConfirmPassword")).validationMessageAttr = "")
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__input_ConfirmPasswordOnChange$Action
        }
        set _input_ConfirmPasswordOnChange$Action(e) {
            this.__input_ConfirmPasswordOnChange$Action = e
        }
        get _onToggleNewPasswordVisibility$Action() {
            return this.hasOwnProperty("__onToggleNewPasswordVisibility$Action") || (this.__onToggleNewPasswordVisibility$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("OnToggleNewPasswordVisibility", function(n) {
                    n && (n.setAttribute("code.function", "OnToggleNewPasswordVisibility"), n.setAttribute("outsystems.function.key", "6b47eae9-6b58-4c2a-99b5-a23367bdea3a"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnToggleNewPasswordVisibility"), e = t.callContext(e);
                        var s = new r.DataTypes.VariableHolder;
                        i.variables.isPasswordVisibleVar = !i.variables.isPasswordVisibleVar, s.value = f.showPassword$Action(o.getId("Input_NewPassword"), e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onToggleNewPasswordVisibility$Action
        }
        set _onToggleNewPasswordVisibility$Action(e) {
            this.__onToggleNewPasswordVisibility$Action = e
        }
        get _savePasswordOnClick$Action() {
            return this.hasOwnProperty("__savePasswordOnClick$Action") || (this.__savePasswordOnClick$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("SavePasswordOnClick", function(n) {
                    return n && (n.setAttribute("code.function", "SavePasswordOnClick"), n.setAttribute("outsystems.function.key", "8ee08f37-32b0-43ca-87e0-c49da7dcae74"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        t.ensureControllerAlive("SavePasswordOnClick"), e = t.callContext(e);
                        var s = new r.DataTypes.VariableHolder,
                            a = new r.DataTypes.VariableHolder;
                        return r.Flow.executeAsyncFlow(function() {
                            return r.Flow.executeSequence(function() {
                                if (i.widgets.get(o.getId("PasswordResetForm")).validAttr) return r.Flow.executeSequence(function() {
                                    if (i.variables.isButtonEnabledVar) return i.variables.isExecutingVar = !0, r.Flow.executeSequence(function() {
                                        if (i.variables.newPasswordVar === i.variables.confirmPasswordVar) return i.flush(), r.SystemActions.finishResetPassword(i.variables.emailIn, i.variables.verificationCodeIn, i.variables.newPasswordVar, e).then(function(l) {
                                            a.value = l
                                        }).then(function() {
                                            return r.Flow.executeSequence(function() {
                                                if (a.value.finishResetPasswordResultOut.successAttr) return r.FeedbackMessageService.showFeedbackMessage("Your password was changed successfully!", 1), i.flush(), b.doLogin$Action(i.variables.emailIn, i.variables.newPasswordVar, e).then(function(l) {
                                                    s.value = l
                                                }).then(function() {
                                                    return s.value.successOut ? r.Flow.returnAsync(r.Navigation.navigateTo(r.Navigation.generateScreenURL(r.BuiltinFunctions.getOwnerURLPath(), {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default), e, !0)) : r.Flow.returnAsync(r.Navigation.navigateTo(r.Navigation.generateScreenURL("tradershub", "CommonLogin", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default), e, !0))
                                                });
                                                i.variables.isExecutingVar = !1, a.value.finishResetPasswordResultOut.finishResetPasswordFailureReasonAttr.passwordComplexityPolicyFailedAttr ? (i.widgets.get(o.getId("Input_NewPassword")).validAttr = !1, i.widgets.get(o.getId("Input_NewPassword")).validationMessageAttr = "The password does not meet the requirements.", i.variables.isButtonEnabledVar = !1) : a.value.finishResetPasswordResultOut.finishResetPasswordFailureReasonAttr.invalidVerificationCodeAttr ? (i.widgets.get(o.getId("Input_Code")).validAttr = !1, i.widgets.get(o.getId("Input_Code")).validationMessageAttr = "The code is invalid.") : r.FeedbackMessageService.showFeedbackMessage("An unknown error occured. Please try again later.", 3)
                                            })
                                        });
                                        i.widgets.get(o.getId("Input_ConfirmPassword")).validAttr = !1, i.widgets.get(o.getId("Input_ConfirmPassword")).validationMessageAttr = "Passwords doesn't match.", i.variables.isExecutingVar = !1
                                    })
                                });
                                i.variables.isButtonEnabledVar = !1
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__savePasswordOnClick$Action
        }
        set _savePasswordOnClick$Action(e) {
            this.__savePasswordOnClick$Action = e
        }
        get _input_CodeOnChange$Action() {
            return this.hasOwnProperty("__input_CodeOnChange$Action") || (this.__input_CodeOnChange$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("Input_CodeOnChange", function(n) {
                    n && (n.setAttribute("code.function", "Input_CodeOnChange"), n.setAttribute("outsystems.function.key", "d76a7e1a-9641-4607-8a3d-e1ae1c1ddb89"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("Input_CodeOnChange"), e = t.callContext(e), t._setIsButtonEnabled$Action(e), i.variables.verificationCodeIn === "" && (i.widgets.get(o.getId("Input_Code")).validAttr = !0, i.widgets.get(o.getId("Input_Code")).validationMessageAttr = "")
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__input_CodeOnChange$Action
        }
        set _input_CodeOnChange$Action(e) {
            this.__input_CodeOnChange$Action = e
        }
        get _setIsButtonEnabled$Action() {
            return this.hasOwnProperty("__setIsButtonEnabled$Action") || (this.__setIsButtonEnabled$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("SetIsButtonEnabled", function(n) {
                    n && (n.setAttribute("code.function", "SetIsButtonEnabled"), n.setAttribute("outsystems.function.key", "f0bf0d0f-6564-4593-957b-d6e4b44703ee"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("SetIsButtonEnabled"), e = t.callContext(e), i.variables.verificationCodeIn === "" || i.variables.newPasswordVar === "" ? i.variables.isButtonEnabledVar = !1 : i.variables.isNewPasswordCompliantVar ? i.variables.confirmPasswordVar === "" ? i.variables.isButtonEnabledVar = !1 : i.variables.isButtonEnabledVar = !0 : i.variables.isButtonEnabledVar = !1
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__setIsButtonEnabled$Action
        }
        set _setIsButtonEnabled$Action(e) {
            this.__setIsButtonEnabled$Action = e
        }
        onToggleConfirmPasswordVisibility$Action(e) {
            var i = this.controller;
            return r.Logger.startActiveSpan("OnToggleConfirmPasswordVisibility__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnToggleConfirmPasswordVisibility"), t.setAttribute("outsystems.function.key", "1d6f1416-e59d-4785-a0f6-447ea5c5c298"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onToggleConfirmPasswordVisibility$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        passwordPolicyCompliant$Action(e, i) {
            var t = this.controller;
            return r.Logger.startActiveSpan("PasswordPolicyCompliant__proxy", function(o) {
                o && (o.setAttribute("code.function", "PasswordPolicyCompliant"), o.setAttribute("outsystems.function.key", "5daacc87-042d-496f-b2e5-ceeb36778e92"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._passwordPolicyCompliant$Action, i, e)
                } finally {
                    o && o.end()
                }
            }, 0)
        }
        input_ConfirmPasswordOnChange$Action(e) {
            var i = this.controller;
            return r.Logger.startActiveSpan("Input_ConfirmPasswordOnChange__proxy", function(t) {
                t && (t.setAttribute("code.function", "Input_ConfirmPasswordOnChange"), t.setAttribute("outsystems.function.key", "5eca7252-a4ae-44bb-af74-76a5230b6146"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._input_ConfirmPasswordOnChange$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onToggleNewPasswordVisibility$Action(e) {
            var i = this.controller;
            return r.Logger.startActiveSpan("OnToggleNewPasswordVisibility__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnToggleNewPasswordVisibility"), t.setAttribute("outsystems.function.key", "6b47eae9-6b58-4c2a-99b5-a23367bdea3a"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onToggleNewPasswordVisibility$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        savePasswordOnClick$Action(e) {
            var i = this.controller;
            return r.Logger.startActiveSpan("SavePasswordOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "SavePasswordOnClick"), t.setAttribute("outsystems.function.key", "8ee08f37-32b0-43ca-87e0-c49da7dcae74"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._savePasswordOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        input_CodeOnChange$Action(e) {
            var i = this.controller;
            return r.Logger.startActiveSpan("Input_CodeOnChange__proxy", function(t) {
                t && (t.setAttribute("code.function", "Input_CodeOnChange"), t.setAttribute("outsystems.function.key", "d76a7e1a-9641-4607-8a3d-e1ae1c1ddb89"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._input_CodeOnChange$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        setIsButtonEnabled$Action(e) {
            var i = this.controller;
            return r.Logger.startActiveSpan("SetIsButtonEnabled__proxy", function(t) {
                t && (t.setAttribute("code.function", "SetIsButtonEnabled"), t.setAttribute("outsystems.function.key", "f0bf0d0f-6564-4593-957b-d6e4b44703ee"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._setIsButtonEnabled$Action, e)
                } finally {
                    t && t.end()
                }
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
                return A.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return b.defaultTimeout
        }
    };
    c(d, "ControllerInner");
    let u = d;
    y = u, y.registerVariableGroupType("tradershub.Common.RecoverPasswordReset.PasswordPolicyCompliant$vars", [{
        name: "IsValid",
        attrName: "isValidInLocal",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Boolean,
        defaultValue: c(function() {
            return !1
        }, "defaultValue")
    }])
}
var y, R = new r.Controller.ControllerFactory(y, w);
export {
    R as a
};