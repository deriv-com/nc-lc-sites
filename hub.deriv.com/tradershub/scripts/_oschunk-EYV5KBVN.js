import {
    a as v
} from "./_oschunk-Y45M2O2K.js";
import {
    a as m
} from "./_oschunk-TIJZDWYD.js";
import {
    a as b,
    d as u
} from "./_oschunk-27GDEXUT.js";
import {
    a as h
} from "./_oschunk-D2MH3QEK.js";
import {
    ia as A
} from "./_oschunk-NTQBNJ73.js";
import {
    c as y
} from "./_oschunk-DVBKI63I.js";
var w = {
        "p_KjAUhTxkykorMMZGMrOg#Value": "Se connecter",
        "ZqnTDiKdrk22FX5AJbVIvw#Value": "Mot de passe oubli\xE9 ?",
        "yCHbK0e2FkGfIimm0zgofw#Value": "Mot de passe",
        "qDK+3S3XYEGiMltItsRr8Q#Value": "Email",
        "SC9qqiQIAk+74yCwjQZ78Q#Title": "Se connecter",
        "SC9qqiQIAk+74yCwjQZ78Q#TitleExpression.-2013538399.1": "Se connecter"
    },
    _ = {
        "fr-FR": {
            translations: w,
            isRTL: !1
        }
    };
var t = A; {
    let d = class d extends t.Controller.BaseViewController {
        constructor(e, n, i) {
            super(e, n, i, _);
            var a = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var n = this.model,
                    i = this.controller,
                    a = this.idService;
                return t.Logger.startActiveSpan("OnInitialize", function(r) {
                    r && (r.setAttribute("code.function", "OnInitialize"), r.setAttribute("outsystems.function.key", "14355f2d-bb2f-44a7-acd2-29acfb5b2ded"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        if (i.ensureControllerAlive("OnInitialize"), e = i.callContext(e), t.BuiltinFunctions.getUserId().toString() !== t.BuiltinFunctions.nullTextIdentifier()) return t.Navigation.navigateTo(t.Navigation.generateScreenURL(t.BuiltinFunctions.getOwnerURLPath(), {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        get _onTogglePasswordVisibility$Action() {
            return this.hasOwnProperty("__onTogglePasswordVisibility$Action") || (this.__onTogglePasswordVisibility$Action = function(e) {
                var n = this.model,
                    i = this.controller,
                    a = this.idService;
                return t.Logger.startActiveSpan("OnTogglePasswordVisibility", function(r) {
                    r && (r.setAttribute("code.function", "OnTogglePasswordVisibility"), r.setAttribute("outsystems.function.key", "26c085d1-acb2-40e4-8d40-9d907dc2e86d"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("OnTogglePasswordVisibility"), e = i.callContext(e);
                        var l = new t.DataTypes.VariableHolder;
                        n.variables.isPasswordVisibleVar = !n.variables.isPasswordVisibleVar, l.value = h.showPassword$Action("", e)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onTogglePasswordVisibility$Action
        }
        set _onTogglePasswordVisibility$Action(e) {
            this.__onTogglePasswordVisibility$Action = e
        }
        get _loginOnClick$Action() {
            return this.hasOwnProperty("__loginOnClick$Action") || (this.__loginOnClick$Action = function(e) {
                var n = this.model,
                    i = this.controller,
                    a = this.idService;
                return t.Logger.startActiveSpan("LoginOnClick", function(r) {
                    return r && (r.setAttribute("code.function", "LoginOnClick"), r.setAttribute("outsystems.function.key", "fb636e0c-5502-414e-8a4e-7a424b00b5b4"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        i.ensureControllerAlive("LoginOnClick"), e = i.callContext(e);
                        var l = new t.DataTypes.VariableHolder(new t.DataTypes.ErrorHandlerOutputType),
                            g = new t.DataTypes.VariableHolder,
                            f = new t.DataTypes.VariableHolder;
                        return t.Flow.executeAsyncFlow(function() {
                            return t.Flow.executeSequence(function() {
                                if (n.widgets.get(a.getId("LoginForm")).validAttr) return n.variables.isExecutingVar = !0, h.feedbackMessageClose$Action(e), n.flush(), u.doLogin$Action(n.variables.userEmailVar, n.variables.passwordVar, e).then(function(s) {
                                    f.value = s
                                }).then(function() {
                                    return t.Flow.executeSequence(function() {
                                        if (f.value.successOut) return g.value = u.checktradershubRole$Action(e), t.Flow.executeSequence(function() {
                                            return g.value.hasRoleOut ? t.Flow.returnAsync(t.Navigation.navigateTo(t.Navigation.generateScreenURL(b.getLastURL() === "" ? t.BuiltinFunctions.getOwnerURLPath() : b.getLastURL(), {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Fade), e, !0)) : (n.variables.passwordVar = "", n.variables.isExecutingVar = !1, t.FeedbackMessageService.showFeedbackMessage("No permissions.", 3), n.flush(), t.SystemActions.logout(e))
                                        });
                                        n.variables.passwordVar = "", n.variables.isExecutingVar = !1, t.FeedbackMessageService.showFeedbackMessage(f.value.errorMessageOut, 3)
                                    })
                                })
                            })
                        }).catch(function(s) {
                            if (t.Logger.debug("Login.LoginOnClick", t.Exceptions.getMessage(s)), !t.Exceptions.isSystem(s)) return t.Logger.error(null, s, null, null, 1), l.value.exceptionMessageAttr = t.Exceptions.getMessage(s), t.Logger.startActiveSpan("AllExceptions", function(o) {
                                return o && (o.setAttribute("code.function", "AllExceptions"), o.setAttribute("outsystems.function.key", "599d7676-eda3-4dbe-a7d9-f1bd2acf9a02"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), t.Flow.tryFinally(function() {
                                    return t.Flow.executeAsyncFlow(function() {
                                        return n.variables.passwordVar = "", n.variables.isExecutingVar = !1, t.FeedbackMessageService.showFeedbackMessage(l.value.exceptionMessageAttr, 3), t.Flow.returnAsync()
                                    })
                                }, function() {
                                    o && o.end()
                                })
                            }, 1);
                            throw s
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__loginOnClick$Action
        }
        set _loginOnClick$Action(e) {
            this.__loginOnClick$Action = e
        }
        onInitialize$Action(e) {
            var n = this.controller;
            return t.Logger.startActiveSpan("OnInitialize__proxy", function(i) {
                i && (i.setAttribute("code.function", "OnInitialize"), i.setAttribute("outsystems.function.key", "14355f2d-bb2f-44a7-acd2-29acfb5b2ded"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onInitialize$Action, e)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        onTogglePasswordVisibility$Action(e) {
            var n = this.controller;
            return t.Logger.startActiveSpan("OnTogglePasswordVisibility__proxy", function(i) {
                i && (i.setAttribute("code.function", "OnTogglePasswordVisibility"), i.setAttribute("outsystems.function.key", "26c085d1-acb2-40e4-8d40-9d907dc2e86d"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onTogglePasswordVisibility$Action, e)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        loginOnClick$Action(e) {
            var n = this.controller;
            return t.Logger.startActiveSpan("LoginOnClick__proxy", function(i) {
                return i && (i.setAttribute("code.function", "LoginOnClick"), i.setAttribute("outsystems.function.key", "fb636e0c-5502-414e-8a4e-7a424b00b5b4"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._loginOnClick$Action, e)
                }, function() {
                    i && i.end()
                })
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var n = this.controller,
                    i = this.model,
                    a = this.idService;
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
                return m.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return u.defaultTimeout
        }
    };
    y(d, "ControllerInner");
    let c = d;
    E = c
}
var E, P = new t.Controller.ControllerFactory(E, v);
export {
    P as a
};