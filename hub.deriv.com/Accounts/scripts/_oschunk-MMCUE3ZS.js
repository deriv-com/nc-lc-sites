import {
    a as _
} from "./_oschunk-FX7ZCYVH.js";
import {
    a as v
} from "./_oschunk-NQZZDANH.js";
import {
    o as m
} from "./_oschunk-KZFTAIEG.js";
import {
    ia as A
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as a
} from "./_oschunk-QHO7QY6K.js";

function f(i, c, g, e) {
    window.dayjs ? i.IsDayJSPresent = !0 : i.IsDayJSPresent = !1, window.bowser ? i.isBowserPresent = !0 : i.isBowserPresent = !1
}
a(f, "default");
var n = A; {
    let c = class c extends n.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t);
            var u = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onLoadLogin$Action() {
            return this.hasOwnProperty("__onLoadLogin$Action") || (this.__onLoadLogin$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    u = this.idService;
                return n.Logger.startActiveSpan("onLoadLogin", function(o) {
                    return o && (o.setAttribute("code.function", "onLoadLogin"), o.setAttribute("outsystems.function.key", "7c21514f-8135-47f0-a9d3-4029211e848f"), o.setAttribute("outsystems.function.owner.name", "Accounts"), o.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                        t.ensureControllerAlive("onLoadLogin"), e = t.callContext(e);
                        var d = new n.DataTypes.VariableHolder;
                        return n.Flow.executeAsyncFlow(function() {
                            return d.value = n.Logger.startActiveSpan("CheckDependency", function(s) {
                                s && (s.setAttribute("code.function", "CheckDependency"), s.setAttribute("outsystems.function.key", "76aab769-bd23-4d50-a221-073aaa5d74c6"), s.setAttribute("outsystems.function.owner.name", "Accounts"), s.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return t.safeExecuteJSNode(f, "CheckDependency", "onLoadLogin", {
                                        IsDayJSPresent: n.DataConversion.JSNodeParamConverter.to(!1, n.DataTypes.DataTypes.Boolean),
                                        isBowserPresent: n.DataConversion.JSNodeParamConverter.to(!1, n.DataTypes.DataTypes.Boolean)
                                    }, function(h) {
                                        var l = new(t.constructor.getVariableGroupType("Accounts.MainFlow.LoginHistory.onLoadLogin$checkDependencyJSResult"));
                                        return l.isDayJSPresentOut = n.DataConversion.JSNodeParamConverter.from(h.IsDayJSPresent, n.DataTypes.DataTypes.Boolean), l.isBowserPresentOut = n.DataConversion.JSNodeParamConverter.from(h.isBowserPresent, n.DataTypes.DataTypes.Boolean), l
                                    }, {}, {})
                                } finally {
                                    s && s.end()
                                }
                            }, 1), n.Flow.executeSequence(function() {
                                if (!d.value.isDayJSPresentOut) return r.flush(), n.SystemActions.requireScript("https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.11.13/dayjs.min.js", e)
                            }).then(function() {
                                return n.Flow.executeSequence(function() {
                                    if (!d.value.isBowserPresentOut) return r.flush(), n.SystemActions.requireScript("https://cdnjs.cloudflare.com/ajax/libs/bowser/2.11.0/bundled.min.js", e)
                                })
                            })
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 1)
            }), this.__onLoadLogin$Action
        }
        set _onLoadLogin$Action(e) {
            this.__onLoadLogin$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    u = this.idService;
                return n.Logger.startActiveSpan("OnReady", function(o) {
                    return o && (o.setAttribute("code.function", "OnReady"), o.setAttribute("outsystems.function.key", "b439ce09-8535-4fb9-ae38-5f8ec3fc3954"), o.setAttribute("outsystems.function.owner.name", "Accounts"), o.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("OnReady"), e = t.callContext(e), n.Flow.executeAsyncFlow(function() {
                            return t._onLoadLogin$Action(e)
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        onLoadLogin$Action(e) {
            var r = this.controller;
            return n.Logger.startActiveSpan("onLoadLogin__proxy", function(t) {
                return t && (t.setAttribute("code.function", "onLoadLogin"), t.setAttribute("outsystems.function.key", "7c21514f-8135-47f0-a9d3-4029211e848f"), t.setAttribute("outsystems.function.owner.name", "Accounts"), t.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onLoadLogin$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onReady$Action(e) {
            var r = this.controller;
            return n.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "b439ce09-8535-4fb9-ae38-5f8ec3fc3954"), t.setAttribute("outsystems.function.owner.name", "Accounts"), t.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
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
                var r = this.controller,
                    t = this.model,
                    u = this.idService;
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
                return _.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return m.defaultTimeout
        }
    };
    a(c, "ControllerInner");
    let i = c;
    y = i, y.registerVariableGroupType("Accounts.MainFlow.LoginHistory.onLoadLogin$checkDependencyJSResult", [{
        name: "IsDayJSPresent",
        attrName: "isDayJSPresentOut",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Boolean,
        defaultValue: a(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "isBowserPresent",
        attrName: "isBowserPresentOut",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Boolean,
        defaultValue: a(function() {
            return !1
        }, "defaultValue")
    }])
}
var y, H = new n.Controller.ControllerFactory(y, v);
export {
    H as a
};