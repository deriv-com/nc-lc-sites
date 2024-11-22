import {
    a as y
} from "./_oschunk-Y45M2O2K.js";
import {
    a as h
} from "./_oschunk-TIJZDWYD.js";
import {
    d as b
} from "./_oschunk-27GDEXUT.js";
import {
    a as f
} from "./_oschunk-D2MH3QEK.js";
import {
    ia as g
} from "./_oschunk-NTQBNJ73.js";
import {
    c
} from "./_oschunk-DVBKI63I.js";
var w = {
        "5N+sd0hFqUeYlA4hxRTJxQ#Value": "D\xE9finir un nouveau mot de passe",
        "3Zyu6HHlq0STeMAHdlBoAg#Value": "Confirmer le mot de passe",
        "MBfigjbMyk2GnnxrepNJ7w#Value": "Nouveau mot de passe",
        "BYvic0iNMkiP6WjAsSwHJg#Value": "Mot de passe actuel",
        "6jR9Gqgm5Ueq0OUOVa5xUQ#Value": "Changez votre mot de passe",
        "wCubOd1o8EWngEEcQZkHUg#Value": "Retour au profil",
        "KRZ4442ho0CmgIxpfhgXAA#Title": "Changer le mot de passe",
        "KRZ4442ho0CmgIxpfhgXAA#TitleExpression.244737259.1": "Changer le mot de passe"
    },
    m = {
        "fr-FR": {
            translations: w,
            isRTL: !1
        }
    };
var n = g; {
    let l = class l extends n.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, m);
            var s = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {
                getUserDetail$AggrRefresh: 0
            }, this.dataFetchDependentsGraph = {
                getUserDetail$AggrRefresh: []
            }, this.shouldSendClientVarsToDataSources = !1
        }
        get getUserDetail$AggrRefresh() {
            return this.hasOwnProperty("_getUserDetail$AggrRefresh") || (this._getUserDetail$AggrRefresh = function() {
                var e = function(r, t, a) {
                    var i = this.model,
                        o = this.controller,
                        a = o.callContext(a);
                    return o.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetUserDetail", "screenservices/tradershub/Common/ChangePassword/ScreenDataSetGetUserDetail", "Vkw62r1ZUud4EmSrR_Th1Q", r, t, function(u) {
                        i.variables.getUserDetailAggr.dataFetchStatusAttr = u
                    }, function(u) {
                        i.variables.getUserDetailAggr.replaceWith(n.DataConversion.ServerDataConverter.from(u, i.variables.getUserDetailAggr.constructor))
                    }, void 0, void 0, void 0, a, void 0, !0)
                }.bind(this);
                return n.Logger.startActiveSpan("GetUserDetail", function(r) {
                    return r && (r.setAttribute("code.function", "GetUserDetail"), r.setAttribute("outsystems.function.key", "99935c79-947f-49d9-a2bc-096c0afc7b20"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "SCREEN_SERVICE_AGGREGATE_CALL")), n.Flow.tryFinally(function() {
                        return e()
                    }, function() {
                        r && r.end()
                    })
                }, 0)
            }), this._getUserDetail$AggrRefresh
        }
        set getUserDetail$AggrRefresh(e) {
            this._getUserDetail$AggrRefresh = e
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = ["getUserDetail$AggrRefresh"]), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _passwordPolicyCompliant$Action() {
            return this.hasOwnProperty("__passwordPolicyCompliant$Action") || (this.__passwordPolicyCompliant$Action = function(e, r) {
                var t = this.model,
                    s = this.controller,
                    i = this.idService;
                return n.Logger.startActiveSpan("PasswordPolicyCompliant", function(o) {
                    o && (o.setAttribute("code.function", "PasswordPolicyCompliant"), o.setAttribute("outsystems.function.key", "07728f75-ef37-4ffd-849b-433e8232002e"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        s.ensureControllerAlive("PasswordPolicyCompliant"), r = s.callContext(r);
                        var a = new n.DataTypes.VariableHolder(new(s.constructor.getVariableGroupType("tradershub.Common.ChangePassword.PasswordPolicyCompliant$vars")));
                        a.value.isValidInLocal = e, t.variables.isNewPasswordCompliantVar = a.value.isValidInLocal, s._setIsButtonEnabled$Action(r)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__passwordPolicyCompliant$Action
        }
        set _passwordPolicyCompliant$Action(e) {
            this.__passwordPolicyCompliant$Action = e
        }
        get _input_OldPasswordOnChange$Action() {
            return this.hasOwnProperty("__input_OldPasswordOnChange$Action") || (this.__input_OldPasswordOnChange$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    s = this.idService;
                return n.Logger.startActiveSpan("Input_OldPasswordOnChange", function(i) {
                    i && (i.setAttribute("code.function", "Input_OldPasswordOnChange"), i.setAttribute("outsystems.function.key", "63c4eaad-2473-4408-859f-e6820a94c7a3"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("Input_OldPasswordOnChange"), e = t.callContext(e), t._setIsButtonEnabled$Action(e)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__input_OldPasswordOnChange$Action
        }
        set _input_OldPasswordOnChange$Action(e) {
            this.__input_OldPasswordOnChange$Action = e
        }
        get _setNewPasswordOnClick$Action() {
            return this.hasOwnProperty("__setNewPasswordOnClick$Action") || (this.__setNewPasswordOnClick$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    s = this.idService;
                return n.Logger.startActiveSpan("SetNewPasswordOnClick", function(i) {
                    return i && (i.setAttribute("code.function", "SetNewPasswordOnClick"), i.setAttribute("outsystems.function.key", "944ade75-c90e-4b11-8da9-58b8d75db121"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                        t.ensureControllerAlive("SetNewPasswordOnClick"), e = t.callContext(e);
                        var o = new n.DataTypes.VariableHolder;
                        return n.Flow.executeAsyncFlow(function() {
                            return n.Flow.executeSequence(function() {
                                if (r.widgets.get(s.getId("Form")).validAttr) return r.variables.isExecutingVar = !0, n.Flow.executeSequence(function() {
                                    if (r.variables.newPasswordVar === r.variables.confirmPasswordVar) return r.flush(), n.SystemActions.changePassword(r.variables.getUserDetailAggr.listOut.getCurrent(e.iterationContext).userAttr.emailAttr, r.variables.newPasswordVar, r.variables.oldPasswordVar, e).then(function(a) {
                                        o.value = a
                                    }).then(function() {
                                        if (o.value.changePasswordResultOut.successAttr) return n.FeedbackMessageService.showFeedbackMessage("Password successfully changed!", 1), n.Flow.returnAsync(n.Navigation.navigateTo(n.Navigation.generateScreenURL("tradershub", "UserProfile", {}), n.Transitions.createTransition(n.Transitions.TransitionAnimation.Default), e, !0));
                                        r.variables.isExecutingVar = !1, o.value.changePasswordResultOut.changePasswordFailureReasonAttr.invalidCredentialsAttr ? (r.widgets.get(s.getId("Input_OldPassword")).validAttr = !1, r.widgets.get(s.getId("Input_OldPassword")).validationMessageAttr = "Incorrect password.") : o.value.changePasswordResultOut.changePasswordFailureReasonAttr.passwordComplexityPolicyFailedAttr ? (r.widgets.get(s.getId("Input_NewPassword")).validAttr = !1, r.widgets.get(s.getId("Input_NewPassword")).validationMessageAttr = "Password doesn't meet the requirements.", r.variables.isButtonEnabledVar = !1) : o.value.changePasswordResultOut.changePasswordFailureReasonAttr.tooManyFailedAttemptsAttr ? n.FeedbackMessageService.showFeedbackMessage("Too many failed attempts, please try again after some time.", 3) : n.FeedbackMessageService.showFeedbackMessage("An unknown error occurred. Please try again later.", 3)
                                    });
                                    r.widgets.get(s.getId("Input_ConfirmPassword")).validAttr = !1, r.widgets.get(s.getId("Input_ConfirmPassword")).validationMessageAttr = "Password and Confirm password don't match.", r.variables.isExecutingVar = !1
                                })
                            })
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__setNewPasswordOnClick$Action
        }
        set _setNewPasswordOnClick$Action(e) {
            this.__setNewPasswordOnClick$Action = e
        }
        get _setIsButtonEnabled$Action() {
            return this.hasOwnProperty("__setIsButtonEnabled$Action") || (this.__setIsButtonEnabled$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    s = this.idService;
                return n.Logger.startActiveSpan("SetIsButtonEnabled", function(i) {
                    i && (i.setAttribute("code.function", "SetIsButtonEnabled"), i.setAttribute("outsystems.function.key", "98a42af6-fda1-4ebd-9c87-d5c7dee35c93"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("SetIsButtonEnabled"), e = t.callContext(e), r.variables.oldPasswordVar === "" || r.variables.newPasswordVar === "" ? r.variables.isButtonEnabledVar = !1 : r.variables.isNewPasswordCompliantVar ? r.variables.confirmPasswordVar === "" ? r.variables.isButtonEnabledVar = !1 : r.variables.isButtonEnabledVar = !0 : r.variables.isButtonEnabledVar = !1
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__setIsButtonEnabled$Action
        }
        set _setIsButtonEnabled$Action(e) {
            this.__setIsButtonEnabled$Action = e
        }
        get _onToggleConfirmPasswordVisibility$Action() {
            return this.hasOwnProperty("__onToggleConfirmPasswordVisibility$Action") || (this.__onToggleConfirmPasswordVisibility$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    s = this.idService;
                return n.Logger.startActiveSpan("OnToggleConfirmPasswordVisibility", function(i) {
                    i && (i.setAttribute("code.function", "OnToggleConfirmPasswordVisibility"), i.setAttribute("outsystems.function.key", "b8ed2f84-1636-4cb8-ba83-794fb7df506b"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnToggleConfirmPasswordVisibility"), e = t.callContext(e);
                        var o = new n.DataTypes.VariableHolder;
                        r.variables.isConfirmPasswordVisibleVar = !r.variables.isConfirmPasswordVisibleVar, o.value = f.showPassword$Action(s.getId("Input_ConfirmPassword"), e)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onToggleConfirmPasswordVisibility$Action
        }
        set _onToggleConfirmPasswordVisibility$Action(e) {
            this.__onToggleConfirmPasswordVisibility$Action = e
        }
        get _onToggleNewPasswordVisibility$Action() {
            return this.hasOwnProperty("__onToggleNewPasswordVisibility$Action") || (this.__onToggleNewPasswordVisibility$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    s = this.idService;
                return n.Logger.startActiveSpan("OnToggleNewPasswordVisibility", function(i) {
                    i && (i.setAttribute("code.function", "OnToggleNewPasswordVisibility"), i.setAttribute("outsystems.function.key", "bb2480a2-2568-4d6b-bd97-9e3a21650114"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnToggleNewPasswordVisibility"), e = t.callContext(e);
                        var o = new n.DataTypes.VariableHolder;
                        r.variables.isPasswordVisibleVar = !r.variables.isPasswordVisibleVar, o.value = f.showPassword$Action(s.getId("Input_NewPassword"), e)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onToggleNewPasswordVisibility$Action
        }
        set _onToggleNewPasswordVisibility$Action(e) {
            this.__onToggleNewPasswordVisibility$Action = e
        }
        get _input_ConfirmPasswordOnChange$Action() {
            return this.hasOwnProperty("__input_ConfirmPasswordOnChange$Action") || (this.__input_ConfirmPasswordOnChange$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    s = this.idService;
                return n.Logger.startActiveSpan("Input_ConfirmPasswordOnChange", function(i) {
                    i && (i.setAttribute("code.function", "Input_ConfirmPasswordOnChange"), i.setAttribute("outsystems.function.key", "da321b80-6d94-4e9d-916d-2c73bb41746a"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("Input_ConfirmPasswordOnChange"), e = t.callContext(e), t._setIsButtonEnabled$Action(e), r.variables.confirmPasswordVar === "" && (r.widgets.get(s.getId("Input_ConfirmPassword")).validAttr = !0, r.widgets.get(s.getId("Input_ConfirmPassword")).validationMessageAttr = "")
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__input_ConfirmPasswordOnChange$Action
        }
        set _input_ConfirmPasswordOnChange$Action(e) {
            this.__input_ConfirmPasswordOnChange$Action = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    s = this.idService;
                return n.Logger.startActiveSpan("OnInitialize", function(i) {
                    i && (i.setAttribute("code.function", "OnInitialize"), i.setAttribute("outsystems.function.key", "f3b60a7a-65ad-4ea9-97f6-9b913c5ba8d9"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        if (t.ensureControllerAlive("OnInitialize"), e = t.callContext(e), n.SystemActions.isExternalUser(e).isExternalUserOut) return n.Navigation.navigateTo(n.Navigation.generateScreenURL("tradershub", "InvalidPermissions", {}), n.Transitions.createTransition(n.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        passwordPolicyCompliant$Action(e, r) {
            var t = this.controller;
            return n.Logger.startActiveSpan("PasswordPolicyCompliant__proxy", function(s) {
                s && (s.setAttribute("code.function", "PasswordPolicyCompliant"), s.setAttribute("outsystems.function.key", "07728f75-ef37-4ffd-849b-433e8232002e"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._passwordPolicyCompliant$Action, r, e)
                } finally {
                    s && s.end()
                }
            }, 0)
        }
        input_OldPasswordOnChange$Action(e) {
            var r = this.controller;
            return n.Logger.startActiveSpan("Input_OldPasswordOnChange__proxy", function(t) {
                t && (t.setAttribute("code.function", "Input_OldPasswordOnChange"), t.setAttribute("outsystems.function.key", "63c4eaad-2473-4408-859f-e6820a94c7a3"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._input_OldPasswordOnChange$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        setNewPasswordOnClick$Action(e) {
            var r = this.controller;
            return n.Logger.startActiveSpan("SetNewPasswordOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "SetNewPasswordOnClick"), t.setAttribute("outsystems.function.key", "944ade75-c90e-4b11-8da9-58b8d75db121"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._setNewPasswordOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        setIsButtonEnabled$Action(e) {
            var r = this.controller;
            return n.Logger.startActiveSpan("SetIsButtonEnabled__proxy", function(t) {
                t && (t.setAttribute("code.function", "SetIsButtonEnabled"), t.setAttribute("outsystems.function.key", "98a42af6-fda1-4ebd-9c87-d5c7dee35c93"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._setIsButtonEnabled$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onToggleConfirmPasswordVisibility$Action(e) {
            var r = this.controller;
            return n.Logger.startActiveSpan("OnToggleConfirmPasswordVisibility__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnToggleConfirmPasswordVisibility"), t.setAttribute("outsystems.function.key", "b8ed2f84-1636-4cb8-ba83-794fb7df506b"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onToggleConfirmPasswordVisibility$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onToggleNewPasswordVisibility$Action(e) {
            var r = this.controller;
            return n.Logger.startActiveSpan("OnToggleNewPasswordVisibility__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnToggleNewPasswordVisibility"), t.setAttribute("outsystems.function.key", "bb2480a2-2568-4d6b-bd97-9e3a21650114"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onToggleNewPasswordVisibility$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        input_ConfirmPasswordOnChange$Action(e) {
            var r = this.controller;
            return n.Logger.startActiveSpan("Input_ConfirmPasswordOnChange__proxy", function(t) {
                t && (t.setAttribute("code.function", "Input_ConfirmPasswordOnChange"), t.setAttribute("outsystems.function.key", "da321b80-6d94-4e9d-916d-2c73bb41746a"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._input_ConfirmPasswordOnChange$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onInitialize$Action(e) {
            var r = this.controller;
            return n.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "f3b60a7a-65ad-4ea9-97f6-9b913c5ba8d9"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onInitialize$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    s = this.idService;
                return r.onInitialize$Action(e)
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
                return h.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {
            n.Authorization.ensureUserHasRole({
                roles: [b.roles.tradershub]
            })
        }
        getDefaultTimeout() {
            return b.defaultTimeout
        }
    };
    c(l, "ControllerInner");
    let d = l;
    A = d, A.registerVariableGroupType("tradershub.Common.ChangePassword.PasswordPolicyCompliant$vars", [{
        name: "IsValid",
        attrName: "isValidInLocal",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Boolean,
        defaultValue: c(function() {
            return !1
        }, "defaultValue")
    }])
}
var A, R = new n.Controller.ControllerFactory(A, y);
export {
    R as a
};