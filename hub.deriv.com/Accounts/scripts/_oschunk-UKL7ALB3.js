import {
    a as E
} from "./_oschunk-FX7ZCYVH.js";
import {
    a as y
} from "./_oschunk-NQZZDANH.js";
import {
    a as i,
    n as h,
    o as a
} from "./_oschunk-KZFTAIEG.js";
import {
    hj as v
} from "./_oschunk-UATY3RVV.js";
import {
    ia as A
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as d
} from "./_oschunk-QHO7QY6K.js";
var o = A; {
    let u = class u extends o.Controller.BaseViewController {
        constructor(t, r, e) {
            super(t, r, e);
            var s = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _onEventClose$Action() {
            return this.hasOwnProperty("__onEventClose$Action") || (this.__onEventClose$Action = function(t) {
                var r = this.model,
                    e = this.controller,
                    s = this.idService;
                return o.Logger.startActiveSpan("OnEventClose", function(n) {
                    n && (n.setAttribute("code.function", "OnEventClose"), n.setAttribute("outsystems.function.key", "5dade621-a98a-4eb8-abf5-735c5c766445"), n.setAttribute("outsystems.function.owner.name", "Accounts"), n.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        if (e.ensureControllerAlive("OnEventClose"), t = e.callContext(t), i.getIsWorkflow()) a.closeTab$Action(t);
                        else return o.Navigation.navigateTo(o.Navigation.generateScreenURL("Accounts", "Verification", {}), o.Transitions.createTransition(o.Transitions.TransitionAnimation.Default), t, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onEventClose$Action
        }
        set _onEventClose$Action(t) {
            this.__onEventClose$Action = t
        }
        get _onEventBack$Action() {
            return this.hasOwnProperty("__onEventBack$Action") || (this.__onEventBack$Action = function(t) {
                var r = this.model,
                    e = this.controller,
                    s = this.idService;
                return o.Logger.startActiveSpan("OnEventBack", function(n) {
                    n && (n.setAttribute("code.function", "OnEventBack"), n.setAttribute("outsystems.function.key", "86961fae-bc99-4c62-8f89-bc43bbfd616f"), n.setAttribute("outsystems.function.owner.name", "Accounts"), n.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        if (e.ensureControllerAlive("OnEventBack"), t = e.callContext(t), i.getIsWorkflow()) a.closeTab$Action(t);
                        else return o.Navigation.navigateTo(o.Navigation.generateScreenURL("Accounts", "Verification", {}), o.Transitions.createTransition(o.Transitions.TransitionAnimation.Default), t, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onEventBack$Action
        }
        set _onEventBack$Action(t) {
            this.__onEventBack$Action = t
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(t) {
                var r = this.model,
                    e = this.controller,
                    s = this.idService;
                return o.Logger.startActiveSpan("OnReady", function(n) {
                    return n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "bde5aba0-028f-4c75-93bf-8694661b96f3"), n.setAttribute("outsystems.function.owner.name", "Accounts"), n.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                        e.ensureControllerAlive("OnReady"), t = e.callContext(t);
                        var l = new o.DataTypes.VariableHolder;
                        return o.Flow.executeAsyncFlow(function() {
                            return r.variables.isLoadingVar = !0, r.flush(), h.kYCAuthStatus$Action(i.getServer(), i.getAuthToken(), i.getAppId(), "en", function() {
                                var f = new v;
                                return f
                            }(), t).then(function(f) {
                                l.value = f
                            }).then(function() {
                                r.variables.kYCAuthStatusDataVar = l.value.responseOut.kYCAuthStatusAttr, r.variables.isLoadingVar = !1
                            }).then(function() {
                                if (o.BuiltinFunctions.index("none required", l.value.responseOut.kYCAuthStatusAttr.identityAttr.statusAttr, 0, !1, !0) > -1) return o.Flow.returnAsync(o.Navigation.navigateTo(o.Navigation.generateScreenURL("Accounts", "ProofOfIdentity", {}), o.Transitions.createTransition(o.Transitions.TransitionAnimation.Default), t, !0))
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
        onEventClose$Action(t) {
            var r = this.controller;
            return o.Logger.startActiveSpan("OnEventClose__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnEventClose"), e.setAttribute("outsystems.function.key", "5dade621-a98a-4eb8-abf5-735c5c766445"), e.setAttribute("outsystems.function.owner.name", "Accounts"), e.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onEventClose$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onEventBack$Action(t) {
            var r = this.controller;
            return o.Logger.startActiveSpan("OnEventBack__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnEventBack"), e.setAttribute("outsystems.function.key", "86961fae-bc99-4c62-8f89-bc43bbfd616f"), e.setAttribute("outsystems.function.owner.name", "Accounts"), e.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onEventBack$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onReady$Action(t) {
            var r = this.controller;
            return o.Logger.startActiveSpan("OnReady__proxy", function(e) {
                return e && (e.setAttribute("code.function", "OnReady"), e.setAttribute("outsystems.function.key", "bde5aba0-028f-4c75-93bf-8694661b96f3"), e.setAttribute("outsystems.function.owner.name", "Accounts"), e.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
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
                    s = this.idService;
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
                return E.default.handleError(t, this.callContext())
            }), this._handleError
        }
        set handleError(t) {
            this._handleError = t
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return a.defaultTimeout
        }
    };
    d(u, "ControllerInner");
    let c = u;
    _ = c
}
var _, k = new o.Controller.ControllerFactory(_, y);
export {
    k as a
};