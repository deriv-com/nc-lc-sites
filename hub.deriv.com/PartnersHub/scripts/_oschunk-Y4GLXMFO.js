import {
    a as v
} from "./_oschunk-KUE727AO.js";
import {
    a as A
} from "./_oschunk-4GXKK3IG.js";
import {
    a as d,
    p as b,
    q as y
} from "./_oschunk-BDI2RWOA.js";
import {
    ia as h
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as l
} from "./_oschunk-QHO7QY6K.js";
var m = {};

function f(a, s, g, t) {
    let r = JSON.parse(a.legacytokens);
    localStorage.setItem("token", r.token1), localStorage.setItem("loginId", r.acct1), window.location.href = window.location.origin + "/PartnersHub/PartnersHubDashboard"
}
l(f, "default");
var o = h; {
    let s = class s extends o.Controller.BaseViewController {
        constructor(t, r, e) {
            super(t, r, e, m);
            var u = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _callbackLogicTryAgainEvent$Action() {
            return this.hasOwnProperty("__callbackLogicTryAgainEvent$Action") || (this.__callbackLogicTryAgainEvent$Action = function(t) {
                var r = this.model,
                    e = this.controller,
                    u = this.idService;
                return o.Logger.startActiveSpan("CallbackLogicTryAgainEvent", function(n) {
                    n && (n.setAttribute("code.function", "CallbackLogicTryAgainEvent"), n.setAttribute("outsystems.function.key", "5cf16cba-fe77-41eb-8cbe-3aabb4ade4c6"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("CallbackLogicTryAgainEvent"), t = e.callContext(t), y.redirectToOauth$Action(t)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__callbackLogicTryAgainEvent$Action
        }
        set _callbackLogicTryAgainEvent$Action(t) {
            this.__callbackLogicTryAgainEvent$Action = t
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(t) {
                var r = this.model,
                    e = this.controller,
                    u = this.idService;
                return o.Logger.startActiveSpan("OnReady", function(n) {
                    return n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "5fbcb489-9502-4307-b01a-8397f58ba673"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                        e.ensureControllerAlive("OnReady"), t = e.callContext(t);
                        var c = new o.DataTypes.VariableHolder;
                        return o.Flow.executeAsyncFlow(function() {
                            return r.flush(), b.handleCallbackPage$Action(d.getAppId(), d.getServer(), t).then(function(i) {
                                c.value = i
                            }).then(function() {
                                c.value.isErrorOut ? r.variables.isErrorVar = c.value.isErrorOut : o.Logger.startActiveSpan("SetTokensLocalStorage", function(i) {
                                    i && (i.setAttribute("code.function", "SetTokensLocalStorage"), i.setAttribute("outsystems.function.key", "5fe16c69-77ee-4467-9821-3d2b11698472"), i.setAttribute("outsystems.function.owner.name", "PartnersHub"), i.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), i.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return e.safeExecuteJSNode(f, "SetTokensLocalStorage", "OnReady", {
                                            legacytokens: o.DataConversion.JSNodeParamConverter.to(c.value.legacyTokensOut, o.DataTypes.DataTypes.Text)
                                        }, function(E) {}, {}, {})
                                    } finally {
                                        i && i.end()
                                    }
                                }, 1)
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(t) {
            this.__onReady$Action = t
        }
        callbackLogicTryAgainEvent$Action(t) {
            var r = this.controller;
            return o.Logger.startActiveSpan("CallbackLogicTryAgainEvent__proxy", function(e) {
                e && (e.setAttribute("code.function", "CallbackLogicTryAgainEvent"), e.setAttribute("outsystems.function.key", "5cf16cba-fe77-41eb-8cbe-3aabb4ade4c6"), e.setAttribute("outsystems.function.owner.name", "PartnersHub"), e.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._callbackLogicTryAgainEvent$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onReady$Action(t) {
            var r = this.controller;
            return o.Logger.startActiveSpan("OnReady__proxy", function(e) {
                return e && (e.setAttribute("code.function", "OnReady"), e.setAttribute("outsystems.function.key", "5fbcb489-9502-4307-b01a-8397f58ba673"), e.setAttribute("outsystems.function.owner.name", "PartnersHub"), e.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onReady$Action, t)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(t) {
            this._onInitializeEventHandler = t
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(t) {
                var r = this.controller,
                    e = this.model,
                    u = this.idService;
                return r.onReady$Action(t)
            }), this._onReadyEventHandler
        }
        set onReadyEventHandler(t) {
            this._onReadyEventHandler = t
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(t) {
            this._onRenderEventHandler = t
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = null), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(t) {
            this._onDestroyEventHandler = t
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(t) {
            this._onParametersChangedEventHandler = t
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(t) {
                return v.default.handleError(t, this.callContext())
            }), this._handleError
        }
        set handleError(t) {
            this._handleError = t
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return y.defaultTimeout
        }
    };
    l(s, "ControllerInner");
    let a = s;
    _ = a
}
var _, N = new o.Controller.ControllerFactory(_, A);
export {
    N as a
};