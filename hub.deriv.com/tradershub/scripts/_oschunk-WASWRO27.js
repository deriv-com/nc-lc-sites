import {
    a as O
} from "./_oschunk-ZFOWOGVH.js";
import {
    a as _
} from "./_oschunk-2M7PXTSQ.js";
import {
    a as h
} from "./_oschunk-RHGXY5L5.js";
import {
    c as T
} from "./_oschunk-DOFMR6EA.js";
import {
    ia as C
} from "./_oschunk-2JKANR6M.js";
import {
    c
} from "./_oschunk-DVBKI63I.js";
var D = {};

function A(i, u, v, r) {
    let n = localStorage.getItem("config.server_url"),
        t = localStorage.getItem("config.app_id");
    i.ServerURL = n, i.AppId = t
}
c(A, "default");

function g(i, u, v, r) {
    let n = JSON.parse(i.legacytokens);
    localStorage.setItem("token", n.token1), localStorage.setItem("loginId", n.acct1), window.location.href = window.location.origin + "/tradershub/cfds"
}
c(g, "default");

function m(i, u, v, r) {
    function n() {
        let a = ["green.derivws.com", "red.derivws.com", "blue.derivws.com"].includes(i.CurrentServer) ? "oauth.deriv.com" : i.CurrentServer;
        setTimeout(function() {
            window.location.href = `https://${a}/oauth2/authorize?app_id=${i.CurrentAppId}&l=EN&brand=deriv`
        }, 500)
    }
    c(n, "redirecttoOauth"), i.isOIDCOn ? u.RedirectToAuthorizationEndpoint(i.CurrentAppId) : n()
}
c(m, "default");

function S(i, u, v, r) {
    let n = localStorage.getItem("config.server_url"),
        t = localStorage.getItem("config.app_id");
    i.ServerURL = n, i.AppId = t
}
c(S, "default");
var e = C; {
    let u = class u extends e.Controller.BaseViewController {
        constructor(r, n, t) {
            super(r, n, t, D);
            var s = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get getOIDCSettings$ServerAction() {
            return this.hasOwnProperty("_getOIDCSettings$ServerAction") || (this._getOIDCSettings$ServerAction = function(r) {
                var n = this.controller;
                return e.Logger.startActiveSpan("GetOIDCSettings", function(t) {
                    return t && (t.setAttribute("code.function", "GetOIDCSettings"), t.setAttribute("outsystems.function.key", "015a277f-7555-48b9-9379-851b8e44f3eb"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
                        return n.callServerAction("GetOIDCSettings", "screenservices/tradershub/OIDCFlow/callback/ActionGetOIDCSettings", "2SRj_NXaTqcYAI8QxCnERQ", {}, n.callContext(r), void 0, void 0, !0).then(function(s) {
                            var a = new(n.constructor.getVariableGroupType("tradershub.OIDCFlow.callback$ActionGetOIDCSettings"));
                            return a.enableOIDCOut = e.DataConversion.ServerDataConverter.from(s.EnableOIDC, e.DataTypes.DataTypes.Boolean), a
                        })
                    }, function() {
                        t && t.end()
                    })
                }, 0)
            }), this._getOIDCSettings$ServerAction
        }
        set getOIDCSettings$ServerAction(r) {
            this._getOIDCSettings$ServerAction = r
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(r) {
            this._dataFetchActionNames = r
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(r) {
                var n = this.model,
                    t = this.controller,
                    s = this.idService;
                return e.Logger.startActiveSpan("OnReady", function(a) {
                    return a && (a.setAttribute("code.function", "OnReady"), a.setAttribute("outsystems.function.key", "4ec232fc-eea2-4361-a88d-3c27c74cca42"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), r = t.callContext(r);
                        var l = new e.DataTypes.VariableHolder,
                            d = new e.DataTypes.VariableHolder;
                        return e.Flow.executeAsyncFlow(function() {
                            return d.value = e.Logger.startActiveSpan("GetLocalStorageConfig", function(o) {
                                o && (o.setAttribute("code.function", "GetLocalStorageConfig"), o.setAttribute("outsystems.function.key", "a8c3f0f5-6424-49c5-84e4-83b4072cd8c7"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return t.safeExecuteJSNode(A, "GetLocalStorageConfig", "OnReady", {
                                        AppId: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                        ServerURL: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                                    }, function(f) {
                                        var y = new(t.constructor.getVariableGroupType("tradershub.OIDCFlow.callback.OnReady$getLocalStorageConfigJSResult"));
                                        return y.appIdOut = e.DataConversion.JSNodeParamConverter.from(f.AppId, e.DataTypes.DataTypes.Text), y.serverURLOut = e.DataConversion.JSNodeParamConverter.from(f.ServerURL, e.DataTypes.DataTypes.Text), y
                                    }, {}, {})
                                } finally {
                                    o && o.end()
                                }
                            }, 1), n.flush(), h.handleCallbackPage$Action(d.value.appIdOut, d.value.serverURLOut, r).then(function(o) {
                                l.value = o
                            }).then(function() {
                                l.value.isErrorOut ? n.variables.isErrorVar = l.value.isErrorOut : e.Logger.startActiveSpan("SetTokensLocalStorage", function(o) {
                                    o && (o.setAttribute("code.function", "SetTokensLocalStorage"), o.setAttribute("outsystems.function.key", "b03280a0-2fcd-4ee7-b2cd-d065149505c3"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return t.safeExecuteJSNode(g, "SetTokensLocalStorage", "OnReady", {
                                            legacytokens: e.DataConversion.JSNodeParamConverter.to(l.value.legacyTokensOut, e.DataTypes.DataTypes.Text)
                                        }, function(f) {}, {}, {})
                                    } finally {
                                        o && o.end()
                                    }
                                }, 1)
                            })
                        })
                    }, function() {
                        a && a.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(r) {
            this.__onReady$Action = r
        }
        get _callbackLogicTryAgainEvent$Action() {
            return this.hasOwnProperty("__callbackLogicTryAgainEvent$Action") || (this.__callbackLogicTryAgainEvent$Action = function(r) {
                var n = this.model,
                    t = this.controller,
                    s = this.idService;
                return e.Logger.startActiveSpan("CallbackLogicTryAgainEvent", function(a) {
                    return a && (a.setAttribute("code.function", "CallbackLogicTryAgainEvent"), a.setAttribute("outsystems.function.key", "b6d7b5ae-4867-490d-af58-f39ad143fc23"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("CallbackLogicTryAgainEvent"), r = t.callContext(r), e.Flow.executeAsyncFlow(function() {
                            return t._redirectToOauth$Action(r)
                        })
                    }, function() {
                        a && a.end()
                    })
                }, 1)
            }), this.__callbackLogicTryAgainEvent$Action
        }
        set _callbackLogicTryAgainEvent$Action(r) {
            this.__callbackLogicTryAgainEvent$Action = r
        }
        get _redirectToOauth$Action() {
            return this.hasOwnProperty("__redirectToOauth$Action") || (this.__redirectToOauth$Action = function(r) {
                var n = this.model,
                    t = this.controller,
                    s = this.idService;
                return e.Logger.startActiveSpan("RedirectToOauth", function(a) {
                    return a && (a.setAttribute("code.function", "RedirectToOauth"), a.setAttribute("outsystems.function.key", "d388d842-131d-4b35-b89e-65b86286addc"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        t.ensureControllerAlive("RedirectToOauth"), r = t.callContext(r);
                        var l = new e.DataTypes.VariableHolder,
                            d = new e.DataTypes.VariableHolder;
                        return e.Flow.executeAsyncFlow(function() {
                            return n.flush(), t.getOIDCSettings$ServerAction(r).then(function(o) {
                                l.value = o
                            }).then(function() {
                                d.value = e.Logger.startActiveSpan("GetLocalStorageConfig", function(o) {
                                    o && (o.setAttribute("code.function", "GetLocalStorageConfig"), o.setAttribute("outsystems.function.key", "ea942eec-3fa5-41dd-b6ac-db78e3c6967c"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return t.safeExecuteJSNode(S, "GetLocalStorageConfig", "RedirectToOauth", {
                                            AppId: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                            ServerURL: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                                        }, function(f) {
                                            var y = new(t.constructor.getVariableGroupType("tradershub.OIDCFlow.callback.RedirectToOauth$getLocalStorageConfigJSResult"));
                                            return y.appIdOut = e.DataConversion.JSNodeParamConverter.from(f.AppId, e.DataTypes.DataTypes.Text), y.serverURLOut = e.DataConversion.JSNodeParamConverter.from(f.ServerURL, e.DataTypes.DataTypes.Text), y
                                        }, {}, {})
                                    } finally {
                                        o && o.end()
                                    }
                                }, 1), e.Logger.startActiveSpan("JavaScript1", function(o) {
                                    o && (o.setAttribute("code.function", "JavaScript1"), o.setAttribute("outsystems.function.key", "3020d000-8e8c-4711-92b7-f6a7db140488"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return t.safeExecuteJSNode(m, "JavaScript1", "RedirectToOauth", {
                                            CurrentAppId: e.DataConversion.JSNodeParamConverter.to(d.value.appIdOut, e.DataTypes.DataTypes.Text),
                                            CurrentServer: e.DataConversion.JSNodeParamConverter.to(d.value.serverURLOut, e.DataTypes.DataTypes.Text),
                                            isOIDCOn: e.DataConversion.JSNodeParamConverter.to(l.value.enableOIDCOut, e.DataTypes.DataTypes.Boolean)
                                        }, function(f) {}, {
                                            RedirectToAuthorizationEndpoint: h.clientActionProxies.redirectToAuthorizationEndpoint$Action
                                        }, {})
                                    } finally {
                                        o && o.end()
                                    }
                                }, 1)
                            })
                        })
                    }, function() {
                        a && a.end()
                    })
                }, 1)
            }), this.__redirectToOauth$Action
        }
        set _redirectToOauth$Action(r) {
            this.__redirectToOauth$Action = r
        }
        onReady$Action(r) {
            var n = this.controller;
            return e.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "4ec232fc-eea2-4361-a88d-3c27c74cca42"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onReady$Action, r)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        callbackLogicTryAgainEvent$Action(r) {
            var n = this.controller;
            return e.Logger.startActiveSpan("CallbackLogicTryAgainEvent__proxy", function(t) {
                return t && (t.setAttribute("code.function", "CallbackLogicTryAgainEvent"), t.setAttribute("outsystems.function.key", "b6d7b5ae-4867-490d-af58-f39ad143fc23"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._callbackLogicTryAgainEvent$Action, r)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        redirectToOauth$Action(r) {
            var n = this.controller;
            return e.Logger.startActiveSpan("RedirectToOauth__proxy", function(t) {
                return t && (t.setAttribute("code.function", "RedirectToOauth"), t.setAttribute("outsystems.function.key", "d388d842-131d-4b35-b89e-65b86286addc"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._redirectToOauth$Action, r)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(r) {
            this._onInitializeEventHandler = r
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(r) {
                var n = this.controller,
                    t = this.model,
                    s = this.idService;
                return n.onReady$Action(r)
            }), this._onReadyEventHandler
        }
        set onReadyEventHandler(r) {
            this._onReadyEventHandler = r
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(r) {
            this._onRenderEventHandler = r
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = null), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(r) {
            this._onDestroyEventHandler = r
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(r) {
            this._onParametersChangedEventHandler = r
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(r) {
                return O.default.handleError(r, this.callContext())
            }), this._handleError
        }
        set handleError(r) {
            this._handleError = r
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return T.defaultTimeout
        }
    };
    c(u, "ControllerInner");
    let i = u;
    b = i, b.registerVariableGroupType("tradershub.OIDCFlow.callback$ActionGetOIDCSettings", [{
        name: "EnableOIDC",
        attrName: "enableOIDCOut",
        mandatory: !1,
        dataType: e.DataTypes.DataTypes.Boolean,
        defaultValue: c(function() {
            return !1
        }, "defaultValue")
    }]), b.registerVariableGroupType("tradershub.OIDCFlow.callback.OnReady$getLocalStorageConfigJSResult", [{
        name: "AppId",
        attrName: "appIdOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "ServerURL",
        attrName: "serverURLOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }]), b.registerVariableGroupType("tradershub.OIDCFlow.callback.RedirectToOauth$getLocalStorageConfigJSResult", [{
        name: "AppId",
        attrName: "appIdOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "ServerURL",
        attrName: "serverURLOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }])
}
var b, M = new e.Controller.ControllerFactory(b, _);
export {
    M as a
};