import {
    a as y
} from "./_oschunk-FX7ZCYVH.js";
import {
    a as f
} from "./_oschunk-NQZZDANH.js";
import {
    o as c
} from "./_oschunk-KZFTAIEG.js";
import {
    ia as d
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as u
} from "./_oschunk-QHO7QY6K.js";
var o = d; {
    let a = class a extends o.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t);
            var i = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _handleLearnMore$Action() {
            return this.hasOwnProperty("__handleLearnMore$Action") || (this.__handleLearnMore$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("HandleLearnMore", function(n) {
                    n && (n.setAttribute("code.function", "HandleLearnMore"), n.setAttribute("outsystems.function.key", "2345901d-59a6-4f71-a5ea-ad0836e3201a"), n.setAttribute("outsystems.function.owner.name", "Accounts"), n.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("HandleLearnMore"), e = t.callContext(e), r.variables.showLearnMoreVar = !r.variables.showLearnMoreVar, r.variables.showPasskeysCreateVar = !1
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__handleLearnMore$Action
        }
        set _handleLearnMore$Action(e) {
            this.__handleLearnMore$Action = e
        }
        get _onCloseInMobile$Action() {
            return this.hasOwnProperty("__onCloseInMobile$Action") || (this.__onCloseInMobile$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("OnCloseInMobile", function(n) {
                    n && (n.setAttribute("code.function", "OnCloseInMobile"), n.setAttribute("outsystems.function.key", "2890d4cf-cf39-4cd2-a8db-a581871f26aa"), n.setAttribute("outsystems.function.owner.name", "Accounts"), n.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("OnCloseInMobile"), e = t.callContext(e), o.Navigation.navigateTo(o.Navigation.generateScreenURL("Accounts", "Security", {}), o.Transitions.createTransition(o.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onCloseInMobile$Action
        }
        set _onCloseInMobile$Action(e) {
            this.__onCloseInMobile$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("OnReady", function(n) {
                    return n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "4903a58c-51cf-48bc-8e75-44909ad022b9"), n.setAttribute("outsystems.function.owner.name", "Accounts"), n.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var l = new o.DataTypes.VariableHolder;
                        return o.Flow.executeAsyncFlow(function() {
                            return r.flush(), c.getPasskeysList$Action(e).then(function(h) {
                                l.value = h
                            }).then(function() {
                                r.variables.passkeysListVar = l.value.passkeysListOut.passkeysListAttr, r.variables.isLoadingVar = !1
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("OnInitialize", function(n) {
                    n && (n.setAttribute("code.function", "OnInitialize"), n.setAttribute("outsystems.function.key", "9ec7bb77-a04f-40c1-a4c0-a3fcfb95e12c"), n.setAttribute("outsystems.function.owner.name", "Accounts"), n.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e), r.variables.isLoadingVar = !0
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        get _handleCreatePasskeys$Action() {
            return this.hasOwnProperty("__handleCreatePasskeys$Action") || (this.__handleCreatePasskeys$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("HandleCreatePasskeys", function(n) {
                    n && (n.setAttribute("code.function", "HandleCreatePasskeys"), n.setAttribute("outsystems.function.key", "a51924d2-d1b6-4692-9c6c-b5637538ca0c"), n.setAttribute("outsystems.function.owner.name", "Accounts"), n.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("HandleCreatePasskeys"), e = t.callContext(e), r.variables.showPasskeysCreateVar = !r.variables.showPasskeysCreateVar, r.variables.showLearnMoreVar = !1
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__handleCreatePasskeys$Action
        }
        set _handleCreatePasskeys$Action(e) {
            this.__handleCreatePasskeys$Action = e
        }
        handleLearnMore$Action(e) {
            var r = this.controller;
            return o.Logger.startActiveSpan("HandleLearnMore__proxy", function(t) {
                t && (t.setAttribute("code.function", "HandleLearnMore"), t.setAttribute("outsystems.function.key", "2345901d-59a6-4f71-a5ea-ad0836e3201a"), t.setAttribute("outsystems.function.owner.name", "Accounts"), t.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._handleLearnMore$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onCloseInMobile$Action(e) {
            var r = this.controller;
            return o.Logger.startActiveSpan("OnCloseInMobile__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnCloseInMobile"), t.setAttribute("outsystems.function.key", "2890d4cf-cf39-4cd2-a8db-a581871f26aa"), t.setAttribute("outsystems.function.owner.name", "Accounts"), t.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onCloseInMobile$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var r = this.controller;
            return o.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "4903a58c-51cf-48bc-8e75-44909ad022b9"), t.setAttribute("outsystems.function.owner.name", "Accounts"), t.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onInitialize$Action(e) {
            var r = this.controller;
            return o.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "9ec7bb77-a04f-40c1-a4c0-a3fcfb95e12c"), t.setAttribute("outsystems.function.owner.name", "Accounts"), t.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onInitialize$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        handleCreatePasskeys$Action(e) {
            var r = this.controller;
            return o.Logger.startActiveSpan("HandleCreatePasskeys__proxy", function(t) {
                t && (t.setAttribute("code.function", "HandleCreatePasskeys"), t.setAttribute("outsystems.function.key", "a51924d2-d1b6-4692-9c6c-b5637538ca0c"), t.setAttribute("outsystems.function.owner.name", "Accounts"), t.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._handleCreatePasskeys$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    i = this.idService;
                return r.onInitialize$Action(e)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    i = this.idService;
                return r.onReady$Action(e)
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
                return y.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return c.defaultTimeout
        }
    };
    u(a, "ControllerInner");
    let s = a;
    A = s
}
var A, w = new o.Controller.ControllerFactory(A, f);
export {
    w as a
};