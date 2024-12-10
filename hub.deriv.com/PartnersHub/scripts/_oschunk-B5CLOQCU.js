import {
    a as m
} from "./_oschunk-ACHUDQUN.js";
import {
    a as E
} from "./_oschunk-6WALBPGV.js";
import {
    a as s,
    p as a
} from "./_oschunk-FZ6FUHBV.js";
import {
    Ib as y
} from "./_oschunk-5FYEKNKX.js";
import {
    ia as h
} from "./_oschunk-5KJVGEL7.js";
import {
    c as f
} from "./_oschunk-QHO7QY6K.js";
var v = {};
var r = h; {
    let l = class l extends r.Controller.BaseViewController {
        constructor(e, o, t) {
            super(e, o, t, v);
            var c = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var o = this.model,
                    t = this.controller,
                    c = this.idService;
                return r.Logger.startActiveSpan("OnReady", function(n) {
                    n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "80164ba5-d48e-4ba2-a005-615d59734e09"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e), a.useDevice$Action(e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _sendEmailEvent$Action() {
            return this.hasOwnProperty("__sendEmailEvent$Action") || (this.__sendEmailEvent$Action = function(e) {
                var o = this.model,
                    t = this.controller,
                    c = this.idService;
                return r.Logger.startActiveSpan("SendEmailEvent", function(n) {
                    return n && (n.setAttribute("code.function", "SendEmailEvent"), n.setAttribute("outsystems.function.key", "8a483d62-efe5-47b8-9630-719194bc2149"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        t.ensureControllerAlive("SendEmailEvent"), e = t.callContext(e);
                        var d = new r.DataTypes.VariableHolder;
                        return r.Flow.executeAsyncFlow(function() {
                            return o.flush(), a.sendVerifyEmail$Action(function() {
                                var i = new y;
                                return i.verify_emailAttr = s.getResetEmail(), i.typeAttr = "reset_password", i
                            }(), e).then(function(i) {
                                d.value = i
                            }).then(function() {
                                if (d.value.isErrorOut) s.setIsResetEmailSent(!1), s.setIsSnackBarVisible(!0), r.FeedbackMessageService.showFeedbackMessage(d.value.errorMessageOut, 3);
                                else return s.setIsResetEmailSent(!0), r.FeedbackMessageService.showFeedbackMessage("Email sent", 1), r.Flow.returnAsync(r.Navigation.navigateTo(r.Navigation.generateScreenURL("PartnersHub", "VerificationEmailSent", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default), e, !0))
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__sendEmailEvent$Action
        }
        set _sendEmailEvent$Action(e) {
            this.__sendEmailEvent$Action = e
        }
        get _closePage$Action() {
            return this.hasOwnProperty("__closePage$Action") || (this.__closePage$Action = function(e) {
                var o = this.model,
                    t = this.controller,
                    c = this.idService;
                return r.Logger.startActiveSpan("ClosePage", function(n) {
                    n && (n.setAttribute("code.function", "ClosePage"), n.setAttribute("outsystems.function.key", "a9b0bd0d-e6c3-4106-bef4-8c512c2dc93c"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("ClosePage"), e = t.callContext(e), a.redirectToOauth$Action(e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__closePage$Action
        }
        set _closePage$Action(e) {
            this.__closePage$Action = e
        }
        onReady$Action(e) {
            var o = this.controller;
            return r.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "80164ba5-d48e-4ba2-a005-615d59734e09"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return o.safeExecuteClientAction(o._onReady$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        sendEmailEvent$Action(e) {
            var o = this.controller;
            return r.Logger.startActiveSpan("SendEmailEvent__proxy", function(t) {
                return t && (t.setAttribute("code.function", "SendEmailEvent"), t.setAttribute("outsystems.function.key", "8a483d62-efe5-47b8-9630-719194bc2149"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return o.safeExecuteClientAction(o._sendEmailEvent$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        closePage$Action(e) {
            var o = this.controller;
            return r.Logger.startActiveSpan("ClosePage__proxy", function(t) {
                t && (t.setAttribute("code.function", "ClosePage"), t.setAttribute("outsystems.function.key", "a9b0bd0d-e6c3-4106-bef4-8c512c2dc93c"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return o.safeExecuteClientAction(o._closePage$Action, e)
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
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var o = this.controller,
                    t = this.model,
                    c = this.idService;
                return o.onReady$Action(e)
            }), this._onReadyEventHandler
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
            return a.defaultTimeout
        }
    };
    f(l, "ControllerInner");
    let u = l;
    A = u
}
var A, S = new r.Controller.ControllerFactory(A, E);
export {
    S as a
};