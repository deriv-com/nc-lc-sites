import {
    a as f
} from "./_oschunk-Y45M2O2K.js";
import {
    a as E
} from "./_oschunk-TIJZDWYD.js";
import {
    d as v
} from "./_oschunk-27GDEXUT.js";
import {
    ia as m
} from "./_oschunk-NTQBNJ73.js";
import {
    c as u
} from "./_oschunk-DVBKI63I.js";
var w = {
        "3cAzE2Oh9ECwxvvUAuXtsg#Value": "Allez \xE0 la connexion.",
        "SSZdvN4LY0mknFVm_QDoDA#Value": "Pas au bon endroit ?",
        "g2hmwzo5HUW5So+cLVujgw#Value": "R\xE9initialiser le mot de passe",
        "9KAkoQwQdUqTW+OsCHiWkA#Value": "E-mail",
        "70mE3canp0eMGAjJbbLBUg#Value": "Ne vous inqui\xE9tez pas, nous vous enverrons un e-mail avec des instructions.",
        "YkmG5_QATkSEW2787SKgvg#Value": "Mot de passe oubli\xE9 ?",
        "ppvqP2sM50+rLmUCKpg5wA#Title": "R\xE9cup\xE9rer le mot de passe",
        "ppvqP2sM50+rLmUCKpg5wA#TitleExpression.1539801591.1": "R\xE9cup\xE9rer le mot de passe"
    },
    A = {
        "fr-FR": {
            translations: w,
            isRTL: !1
        }
    };
var t = m; {
    let l = class l extends t.Controller.BaseViewController {
        constructor(e, s, n) {
            super(e, s, n, A);
            var a = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get sendResetPasswordEmail$ServerAction() {
            return this.hasOwnProperty("_sendResetPasswordEmail$ServerAction") || (this._sendResetPasswordEmail$ServerAction = function(e, s, n) {
                var a = this.controller;
                return t.Logger.startActiveSpan("SendResetPasswordEmail", function(r) {
                    return r && (r.setAttribute("code.function", "SendResetPasswordEmail"), r.setAttribute("outsystems.function.key", "82e5273e-87b6-4b68-8444-51cff0af2c32"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), t.Flow.tryFinally(function() {
                        var o = {
                            ApplicationName: t.DataConversion.ServerDataConverter.to(e, t.DataTypes.DataTypes.Text),
                            CustomerEmail: t.DataConversion.ServerDataConverter.to(s, t.DataTypes.DataTypes.Email)
                        };
                        return a.callServerAction("SendResetPasswordEmail", "screenservices/tradershub/Common/RecoverPasswordRequest/ActionSendResetPasswordEmail", "ZQ3JIWE5Y0g+GWpXfIJc8A", o, a.callContext(n), void 0, void 0, !0).then(function(d) {
                            var h = new(a.constructor.getVariableGroupType("tradershub.Common.RecoverPasswordRequest$ActionSendResetPasswordEmail"));
                            return h.successOut = t.DataConversion.ServerDataConverter.from(d.Success, t.DataTypes.DataTypes.Boolean), h
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 0)
            }), this._sendResetPasswordEmail$ServerAction
        }
        set sendResetPasswordEmail$ServerAction(e) {
            this._sendResetPasswordEmail$ServerAction = e
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _resetPasswordOnClick$Action() {
            return this.hasOwnProperty("__resetPasswordOnClick$Action") || (this.__resetPasswordOnClick$Action = function(e) {
                var s = this.model,
                    n = this.controller,
                    a = this.idService;
                return t.Logger.startActiveSpan("ResetPasswordOnClick", function(r) {
                    return r && (r.setAttribute("code.function", "ResetPasswordOnClick"), r.setAttribute("outsystems.function.key", "3aad2e06-92b3-4cc7-8b61-e9d6e85af93b"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        n.ensureControllerAlive("ResetPasswordOnClick"), e = n.callContext(e);
                        var o = new t.DataTypes.VariableHolder;
                        return t.Flow.executeAsyncFlow(function() {
                            return t.Flow.executeSequence(function() {
                                if (s.widgets.get(a.getId("RecoverPasswordForm")).validAttr) return s.variables.isExecutingVar = !0, s.flush(), n.sendResetPasswordEmail$ServerAction(t.BuiltinFunctions.getAppName(), s.variables.emailVar, e).then(function(d) {
                                    o.value = d
                                }).then(function() {
                                    if (o.value.successOut) return s.variables.isExecutingVar = !1, t.Flow.returnAsync(t.Navigation.navigateTo(t.Navigation.generateScreenURL("tradershub", "RecoverPasswordReset", {
                                        Email: t.DataConversion.ServerDataConverter.to(s.variables.emailVar, t.DataTypes.DataTypes.Email)
                                    }), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), e, !0));
                                    t.FeedbackMessageService.showFeedbackMessage("An error has occured. Please try again later.", 3), s.variables.isExecutingVar = !1
                                })
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__resetPasswordOnClick$Action
        }
        set _resetPasswordOnClick$Action(e) {
            this.__resetPasswordOnClick$Action = e
        }
        resetPasswordOnClick$Action(e) {
            var s = this.controller;
            return t.Logger.startActiveSpan("ResetPasswordOnClick__proxy", function(n) {
                return n && (n.setAttribute("code.function", "ResetPasswordOnClick"), n.setAttribute("outsystems.function.key", "3aad2e06-92b3-4cc7-8b61-e9d6e85af93b"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return s.safeExecuteClientAction(s._resetPasswordOnClick$Action, e)
                }, function() {
                    n && n.end()
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
                return E.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return v.defaultTimeout
        }
    };
    u(l, "ControllerInner");
    let i = l;
    c = i, c.registerVariableGroupType("tradershub.Common.RecoverPasswordRequest$ActionSendResetPasswordEmail", [{
        name: "Success",
        attrName: "successOut",
        mandatory: !1,
        dataType: t.DataTypes.DataTypes.Boolean,
        defaultValue: u(function() {
            return !1
        }, "defaultValue")
    }])
}
var c, S = new t.Controller.ControllerFactory(c, f);
export {
    S as a
};