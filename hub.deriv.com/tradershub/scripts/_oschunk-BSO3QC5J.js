import {
    a as c
} from "./_oschunk-UK73WSZT.js";
import {
    a as u
} from "./_oschunk-Y45M2O2K.js";
import {
    d as a
} from "./_oschunk-27GDEXUT.js";
import {
    ia as d
} from "./_oschunk-NTQBNJ73.js";
import {
    c as l
} from "./_oschunk-DVBKI63I.js";
var _ = {
        "yKJ5BTxlZ0+SY556pcWLQA#Value": "La conversion fiat-crypto vous permet de financer votre(s) portefeuille(s) crypto Deriv. Les \xE9changes list\xE9s ci-dessus sont des tiers, vous devrez donc cr\xE9er un compte chez eux pour utiliser leurs services.",
        "BmOvDM51wUer1gBWKjA2eA#Value": "La conversion fiat-crypto vous permet de financer votre(s) portefeuille(s) crypto Deriv. Les \xE9changes list\xE9s ci-dessus sont des tiers, vous devrez donc cr\xE9er un compte chez eux pour utiliser leurs services.",
        "V4YpRKl8+kiGkX6PZmwYeg#Value": "D\xE9p\xF4t",
        "gXsNRFN1nU2i1pOS5Gt18w#Value": "Banxa est un service rapide et s\xE9curis\xE9 pour les paiements en fiat vers crypto. D\xE9posez des cryptomonnaies avec des cartes de cr\xE9dit/d\xE9bit ou des virements bancaires du monde entier.",
        "1j4prjO3B0eLco4M5zq4zw#Value": "Choisir un mode de d\xE9p\xF4t"
    },
    h = {
        "fr-FR": {
            translations: _,
            isRTL: !1
        }
    };
var n = d; {
    let i = class i extends n.Controller.BaseViewController {
        constructor(e, o, t) {
            super(e, o, t, h);
            var v = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
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
                    v = this.idService;
                return n.Logger.startActiveSpan("OnReady", function(r) {
                    return r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "1677587e-9dc6-489f-8184-6035ae71bb47"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var y = new n.DataTypes.VariableHolder;
                        return n.Flow.executeAsyncFlow(function() {
                            return o.flush(), a.serviceToken$Action(e).then(function(m) {
                                y.value = m
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        onReady$Action(e) {
            var o = this.controller;
            return n.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "1677587e-9dc6-489f-8184-6035ae71bb47"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                    return o.safeExecuteClientAction(o._onReady$Action, e)
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
                return c.default.handleError(e, this.callContext())
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
    l(i, "ControllerInner");
    let s = i;
    f = s
}
var f, F = new n.Controller.ControllerFactory(f, u);
export {
    F as a
};