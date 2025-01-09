import {
    a as v
} from "./_oschunk-FX7ZCYVH.js";
import {
    a as y
} from "./_oschunk-NQZZDANH.js";
import {
    a as s,
    n as h,
    o as f
} from "./_oschunk-KZFTAIEG.js";
import {
    ia as u
} from "./_oschunk-3RH6DZJJ.js";
import {
    c
} from "./_oschunk-QHO7QY6K.js";
var o = u; {
    let a = class a extends o.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t);
            var d = this.controller;
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
                var n = this.model,
                    t = this.controller,
                    d = this.idService;
                return o.Logger.startActiveSpan("OnReady", function(r) {
                    return r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "f5cd7633-9179-4a73-94ec-7d1d0da0e80c"), r.setAttribute("outsystems.function.owner.name", "Accounts"), r.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var l = new o.DataTypes.VariableHolder;
                        return o.Flow.executeAsyncFlow(function() {
                            return n.flush(), h.residenceList$Action(s.getServer(), s.getAppId(), "en", e).then(function(A) {
                                l.value = A
                            }).then(function() {
                                n.variables.residenceListDataVar = l.value.responseOut.residence_listAttr
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
            var n = this.controller;
            return o.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "f5cd7633-9179-4a73-94ec-7d1d0da0e80c"), t.setAttribute("outsystems.function.owner.name", "Accounts"), t.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onReady$Action, e)
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
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var n = this.controller,
                    t = this.model,
                    d = this.idService;
                return n.onReady$Action(e)
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
                return v.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return f.defaultTimeout
        }
    };
    c(a, "ControllerInner");
    let i = a;
    m = i
}
var m, w = new o.Controller.ControllerFactory(m, y);
export {
    w as a
};