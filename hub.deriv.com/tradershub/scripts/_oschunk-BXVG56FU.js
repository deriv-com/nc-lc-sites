import {
    a as m
} from "./_oschunk-UK73WSZT.js";
import {
    a as h
} from "./_oschunk-Y45M2O2K.js";
import {
    a as c,
    d as o
} from "./_oschunk-27GDEXUT.js";
import {
    ia as u
} from "./_oschunk-NTQBNJ73.js";
import {
    c as d
} from "./_oschunk-DVBKI63I.js";
var y = {
        "6O5vm_YB9UK8aL2IHyVmMA#Value": "Renvoie l'e-mail",
        "BO3xK8irDUuXyqM2KFFy9w#Value": "Assurez-vous que l'email n'est pas bloqu\xE9 par des pare-feu ou des filtres.",
        "a4IdFkUeqUefd7Og6TWq5A#Value": "V\xE9rifiez votre dossier de spam.",
        "bMz7RJEhOkKiyHlzwLV23A#Value": "Assurez-vous d'avoir correctement saisi votre adresse e-mail.",
        "Mu5Z7QhqtEep5bQxuRMbZg#Value": "Vous n'avez pas re\xE7u d'email ?"
    },
    f = {
        "fr-FR": {
            translations: y,
            isRTL: !1
        }
    };
var r = u; {
    let s = class s extends r.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t, f);
            var v = this.controller;
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
                    v = this.idService;
                return r.Logger.startActiveSpan("ResendEmailOnClick", function(n) {
                    return n && (n.setAttribute("code.function", "ResendEmailOnClick"), n.setAttribute("outsystems.function.key", "76fc34a8-d749-4b98-9318-1123078146b7"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        t.ensureControllerAlive("ResendEmailOnClick"), e = t.callContext(e);
                        var l = new r.DataTypes.VariableHolder;
                        return r.Flow.executeAsyncFlow(function() {
                            return i.flush(), o.verifyEmail$Action("payment_withdraw", c.getSignupEmail(), e).then(function(_) {
                                l.value = _
                            }).then(function() {
                                l.value.isErrorOut ? r.FeedbackMessageService.showFeedbackMessage("Please try again.", 3) : r.FeedbackMessageService.showFeedbackMessage("Email sent.", 1)
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__resendEmailOnClick$Action
        }
        set _resendEmailOnClick$Action(e) {
            this.__resendEmailOnClick$Action = e
        }
        resendEmailOnClick$Action(e) {
            var i = this.controller;
            return r.Logger.startActiveSpan("ResendEmailOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "ResendEmailOnClick"), t.setAttribute("outsystems.function.key", "76fc34a8-d749-4b98-9318-1123078146b7"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
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
                return m.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return o.defaultTimeout
        }
    };
    d(s, "ControllerInner");
    let a = s;
    E = a
}
var E, p = new r.Controller.ControllerFactory(E, h);
export {
    p as a
};