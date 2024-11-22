import {
    a as v
} from "./_oschunk-UK73WSZT.js";
import {
    a as m
} from "./_oschunk-Y45M2O2K.js";
import {
    a as u,
    d as a
} from "./_oschunk-27GDEXUT.js";
import {
    ia as f
} from "./_oschunk-NTQBNJ73.js";
import {
    c as h
} from "./_oschunk-DVBKI63I.js";
var A = {
        "cId6qicaTEiKqrbRcL2VhQ#Value": "Envoyer un e-mail",
        "L7Jue7DdRke6vhvwuAbF6g#Value": "Pour confirmer que c'est vous qui faites la demande de retrait, nous vous enverrons par e-mail un lien de v\xE9rification.",
        "bhEAekWznEu_tgMpgMiy7A#Value": "Confirmez votre identit\xE9 pour effectuer un retrait"
    },
    E = {
        "fr-FR": {
            translations: A,
            isRTL: !1
        }
    };
var t = f; {
    let s = class s extends t.Controller.BaseViewController {
        constructor(e, i, n) {
            super(e, i, n, E);
            var y = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _sendEmailOnClick$Action() {
            return this.hasOwnProperty("__sendEmailOnClick$Action") || (this.__sendEmailOnClick$Action = function(e) {
                var i = this.model,
                    n = this.controller,
                    y = this.idService;
                return t.Logger.startActiveSpan("SendEmailOnClick", function(r) {
                    return r && (r.setAttribute("code.function", "SendEmailOnClick"), r.setAttribute("outsystems.function.key", "ec47b6fd-a134-48c3-be96-d3f2ef1eb6c1"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        n.ensureControllerAlive("SendEmailOnClick"), e = n.callContext(e);
                        var l = new t.DataTypes.VariableHolder,
                            c = new t.DataTypes.VariableHolder;
                        return t.Flow.executeAsyncFlow(function() {
                            return i.flush(), a.sendGetSetting$Action(e).then(function(d) {
                                l.value = d
                            }).then(function() {
                                return u.setSignupEmail(l.value.getSettingResponseOut.emailAttr), i.flush(), a.verifyEmail$Action("payment_withdraw", u.getSignupEmail(), e).then(function(d) {
                                    c.value = d
                                })
                            }).then(function() {
                                return c.value.isErrorOut ? t.Flow.returnAsync(t.Navigation.navigateTo(t.Navigation.generateScreenURL("tradershub", "wallets/withdrawal/failed-verification/:Email?", {
                                    Email: t.DataConversion.ServerDataConverter.to(l.value.getSettingResponseOut.emailAttr, t.DataTypes.DataTypes.Email)
                                }), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), e, !0)) : t.Flow.returnAsync(t.Navigation.navigateTo(t.Navigation.generateScreenURL("tradershub", "wallets/withdrawal/email-verification-confirmation", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), e, !0))
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__sendEmailOnClick$Action
        }
        set _sendEmailOnClick$Action(e) {
            this.__sendEmailOnClick$Action = e
        }
        sendEmailOnClick$Action(e) {
            var i = this.controller;
            return t.Logger.startActiveSpan("SendEmailOnClick__proxy", function(n) {
                return n && (n.setAttribute("code.function", "SendEmailOnClick"), n.setAttribute("outsystems.function.key", "ec47b6fd-a134-48c3-be96-d3f2ef1eb6c1"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._sendEmailOnClick$Action, e)
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
                return v.default.handleError(e, this.callContext())
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
    h(s, "ControllerInner");
    let o = s;
    _ = o
}
var _, F = new t.Controller.ControllerFactory(_, m);
export {
    F as a
};