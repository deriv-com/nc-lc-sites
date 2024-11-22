import {
    a as h
} from "./_oschunk-UK73WSZT.js";
import {
    a as u
} from "./_oschunk-Y45M2O2K.js";
import {
    d as s
} from "./_oschunk-27GDEXUT.js";
import {
    ia as c
} from "./_oschunk-NTQBNJ73.js";
import {
    c as d
} from "./_oschunk-DVBKI63I.js";
var _ = {
        "D6m0mm4TN0GPFyjvuLFTqA#Value": "Renvoie l'email",
        "qLcKKra05E6HKYefG2t6dA#Value": "Le lien de v\xE9rification que vous avez utilis\xE9 est invalide ou a expir\xE9. Veuillez en demander un nouveau.",
        "ZMrYkBmxZ0qqFhgYBdciYA#Value": "\xC9chec de la v\xE9rification de l'e-mail"
    },
    m = {
        "fr-FR": {
            translations: _,
            isRTL: !1
        }
    };
var n = c; {
    let o = class o extends n.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t, m);
            var E = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _resendEmailOnClick$Action() {
            return this.hasOwnProperty("__resendEmailOnClick$Action") || (this.__resendEmailOnClick$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    E = this.idService;
                return n.Logger.startActiveSpan("ResendEmailOnClick", function(r) {
                    return r && (r.setAttribute("code.function", "ResendEmailOnClick"), r.setAttribute("outsystems.function.key", "57a67421-18fe-485d-be59-8ec4e96e5e2c"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                        t.ensureControllerAlive("ResendEmailOnClick"), e = t.callContext(e);
                        var l = new n.DataTypes.VariableHolder;
                        return n.Flow.executeAsyncFlow(function() {
                            return i.flush(), s.verifyEmail$Action("payment_withdraw", i.variables.emailIn, e).then(function(v) {
                                l.value = v
                            }).then(function() {
                                l.value.isErrorOut ? n.FeedbackMessageService.showFeedbackMessage("Please try again.", 3) : n.FeedbackMessageService.showFeedbackMessage("Email sent.", 1)
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__resendEmailOnClick$Action
        }
        set _resendEmailOnClick$Action(e) {
            this.__resendEmailOnClick$Action = e
        }
        resendEmailOnClick$Action(e) {
            var i = this.controller;
            return n.Logger.startActiveSpan("ResendEmailOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "ResendEmailOnClick"), t.setAttribute("outsystems.function.key", "57a67421-18fe-485d-be59-8ec4e96e5e2c"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._resendEmailOnClick$Action, e)
                }, function() {
                    t && t.end()
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
                return h.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return s.defaultTimeout
        }
    };
    d(o, "ControllerInner");
    let a = o;
    f = a
}
var f, P = new n.Controller.ControllerFactory(f, u);
export {
    P as a
};