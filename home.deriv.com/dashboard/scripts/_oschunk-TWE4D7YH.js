import {
    a as k,
    g as y,
    m as C,
    o as w,
    q as I,
    r as x,
    s as T,
    t as H
} from "./_oschunk-NVHFAAS2.js";
import {
    X as l,
    c as o,
    f as L
} from "./_oschunk-DFKJJKI4.js";
var M = L(k());
var J = {
        staticEntities: {}
    },
    B = J.staticEntities;
var u = l,
    D = class D extends u.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("WidgetId", "widgetIdIn", "WidgetId", !0, !1, u.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_widgetIdInDataFetchStatus", "_widgetIdInDataFetchStatus", "_widgetIdInDataFetchStatus", !0, !1, u.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("DebounceDelay", "debounceDelayIn", "DebounceDelay", !0, !1, u.DataTypes.DataTypes.Integer, function() {
                return 350
            }, !1), this.attr("_debounceDelayInDataFetchStatus", "_debounceDelayInDataFetchStatus", "_debounceDelayInDataFetchStatus", !0, !1, u.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(u.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
o(D, "VariablesRecord");
var f = D;
f.init();
var b = class b extends u.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
o(b, "WidgetsRecord");
var m = b,
    E = class E extends u.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return f
        }
        static getWidgetsRecordConstructor() {
            return m
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "WidgetId" in t && (this.variables.widgetIdIn = t.WidgetId, "_widgetIdInDataFetchStatus" in t && (this.variables._widgetIdInDataFetchStatus = t._widgetIdInDataFetchStatus)), "DebounceDelay" in t && (this.variables.debounceDelayIn = t.DebounceDelay, "_debounceDelayInDataFetchStatus" in t && (this.variables._debounceDelayInDataFetchStatus = t._debounceDelayInDataFetchStatus))
        }
    };
o(E, "Model");
var v = E;
v._hasValidationWidgetsValue = void 0;
var O = new u.Model.ModelFactory(v);
var z = l,
    p = class p extends z.Controller.BaseModuleController {
        constructor(t, h, e, a) {
            super(t, h, e, a)
        }
        get clientActionProxies() {
            return this.hasOwnProperty("_clientActionProxies") || (this._clientActionProxies = {}), this._clientActionProxies
        }
        set clientActionProxies(t) {
            this._clientActionProxies = t
        }
        get roles() {
            return this.hasOwnProperty("_roles") || (this._roles = {}), this._roles
        }
        set roles(t) {
            this._roles = t
        }
        get defaultTimeout() {
            return this.hasOwnProperty("_defaultTimeout") || (this._defaultTimeout = 10), this._defaultTimeout
        }
        set defaultTimeout(t) {
            this._defaultTimeout = t
        }
        getDefaultTimeout() {
            return this.defaultTimeout
        }
    };
o(p, "Controller");
var g = p,
    U = new g;
var P = U;
var q = l,
    S = class S extends q.LanguageResources.BaseMessagesProvider {
        constructor(t) {
            super(t), this.setMessage("Validation.Mandatory", "Required field!"), this.setMessage("Validation.Integer", "Integer expected!"), this.setMessage("Validation.LongInteger", "Integer expected!"), this.setMessage("Validation.Decimal", "Decimal expected!"), this.setMessage("Validation.Currency", "Currency expected!"), this.setMessage("Validation.Date", "Date expected!"), this.setMessage("Validation.Time", "Time expected!"), this.setMessage("Validation.DateTime", "DateTime expected!"), this.setMessage("Validation.Text", "Text expected!"), this.setMessage("Validation.PhoneNumber", "Phone Number expected!"), this.setMessage("Validation.Email", "Email expected!"), this.setMessage("UpgradeComplete", "Your application has been updated to the latest version."), this.setMessage("AppInitError.Generic", "An error occurred while trying to update the app. If you want to retry the update, restart the app."), this.setMessage("AppInitError.Resources", "An error occurred while trying to update the app. If you want to retry the update, restart the app."), this.setMessage("AppInitError.DataModel", "An error occurred while trying to update the app. If you want to retry the update, restart the app. If the problem persists you can reinstall, but all local data will be lost."), this.setMessage("UpgradeRequired", "Your application needs to be updated. Tap here to update."), this.setMessage("UpgradeRequiredDataLoss", "Your application needs to be updated. Unsaved data will be lost. Tap here to update.")
        }
    };
o(S, "MessagesProvider");
var _ = S,
    F = new _;

function A(s, t, h, e) {
    osDebounce(t.CallEvent, s.WidgetId, s.DebounceDelay)
}
o(A, "default");
var i = l; {
    let t = class t extends i.Controller.BaseViewController {
        constructor(e, a, n) {
            super(e, a, n);
            var d = this.controller;
            this.clientActionProxies = {
                callEvent$Action: o(function() {
                    return d.executeActionInsideJSNode(d._callEvent$Action.bind(d), d.callContext(), function(r) {
                        return {}
                    }, function() {}, "CallEvent")
                }, "callEvent$Action")
            }, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _createDebounce$Action() {
            return this.hasOwnProperty("__createDebounce$Action") || (this.__createDebounce$Action = function(e) {
                var a = this.model,
                    n = this.controller,
                    d = this.idService;
                return i.Logger.startActiveSpan("CreateDebounce", function(r) {
                    r && (r.setAttribute("code.function", "CreateDebounce"), r.setAttribute("outsystems.function.key", "15c53537-c68d-4891-9f9e-67819d1106ce"), r.setAttribute("outsystems.function.owner.name", "Debounce"), r.setAttribute("outsystems.function.owner.key", "008872e1-91c9-4afc-a574-05e40cf41c95"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("CreateDebounce"), e = n.callContext(e), i.Logger.startActiveSpan("JavaScript1", function(c) {
                            c && (c.setAttribute("code.function", "JavaScript1"), c.setAttribute("outsystems.function.key", "a9f1c2db-1e20-40ad-a0dc-92e5ac7b3f47"), c.setAttribute("outsystems.function.owner.name", "Debounce"), c.setAttribute("outsystems.function.owner.key", "008872e1-91c9-4afc-a574-05e40cf41c95"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return n.safeExecuteJSNode(A, "JavaScript1", "CreateDebounce", {
                                    DebounceDelay: i.DataConversion.JSNodeParamConverter.to(a.variables.debounceDelayIn.toString(), i.DataTypes.DataTypes.Text),
                                    WidgetId: i.DataConversion.JSNodeParamConverter.to(a.variables.widgetIdIn, i.DataTypes.DataTypes.Text)
                                }, function(V) {}, {
                                    CallEvent: n.clientActionProxies.callEvent$Action
                                }, {})
                            } finally {
                                c && c.end()
                            }
                        }, 1)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__createDebounce$Action
        }
        set _createDebounce$Action(e) {
            this.__createDebounce$Action = e
        }
        get _callEvent$Action() {
            return this.hasOwnProperty("__callEvent$Action") || (this.__callEvent$Action = function(e) {
                var a = this.model,
                    n = this.controller,
                    d = this.idService;
                return i.Logger.startActiveSpan("CallEvent", function(r) {
                    return r && (r.setAttribute("code.function", "CallEvent"), r.setAttribute("outsystems.function.key", "19934aac-97d0-46e7-90db-909d7f8a4e86"), r.setAttribute("outsystems.function.owner.name", "Debounce"), r.setAttribute("outsystems.function.owner.key", "008872e1-91c9-4afc-a574-05e40cf41c95"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                        return n.ensureControllerAlive("CallEvent"), e = n.callContext(e), i.Flow.executeAsyncFlow(function() {
                            return n.onDebounce$Action(e)
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__callEvent$Action
        }
        set _callEvent$Action(e) {
            this.__callEvent$Action = e
        }
        createDebounce$Action(e) {
            var a = this.controller;
            return i.Logger.startActiveSpan("CreateDebounce__proxy", function(n) {
                n && (n.setAttribute("code.function", "CreateDebounce"), n.setAttribute("outsystems.function.key", "15c53537-c68d-4891-9f9e-67819d1106ce"), n.setAttribute("outsystems.function.owner.name", "Debounce"), n.setAttribute("outsystems.function.owner.key", "008872e1-91c9-4afc-a574-05e40cf41c95"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._createDebounce$Action, e)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        callEvent$Action(e) {
            var a = this.controller;
            return i.Logger.startActiveSpan("CallEvent__proxy", function(n) {
                return n && (n.setAttribute("code.function", "CallEvent"), n.setAttribute("outsystems.function.key", "19934aac-97d0-46e7-90db-909d7f8a4e86"), n.setAttribute("outsystems.function.owner.name", "Debounce"), n.setAttribute("outsystems.function.owner.key", "008872e1-91c9-4afc-a574-05e40cf41c95"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                    return a.safeExecuteClientAction(a._callEvent$Action, e)
                }, function() {
                    n && n.end()
                })
            }, 0)
        }
        get onDebounce$Action() {
            return this.hasOwnProperty("_onDebounce$Action") || (this._onDebounce$Action = function() {
                return Promise.resolve()
            }), this._onDebounce$Action
        }
        set onDebounce$Action(e) {
            this._onDebounce$Action = e
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var a = this.controller,
                    n = this.model,
                    d = this.idService;
                return a.createDebounce$Action(e)
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
        get onSyncStartEventHandler() {
            return this.hasOwnProperty("_onSyncStartEventHandler") || (this._onSyncStartEventHandler = null), this._onSyncStartEventHandler
        }
        set onSyncStartEventHandler(e) {
            this._onSyncStartEventHandler = e
        }
        get onSyncCompleteEventHandler() {
            return this.hasOwnProperty("_onSyncCompleteEventHandler") || (this._onSyncCompleteEventHandler = null), this._onSyncCompleteEventHandler
        }
        set onSyncCompleteEventHandler(e) {
            this._onSyncCompleteEventHandler = e
        }
        get onSyncErrorEventHandler() {
            return this.hasOwnProperty("_onSyncErrorEventHandler") || (this._onSyncErrorEventHandler = null), this._onSyncErrorEventHandler
        }
        set onSyncErrorEventHandler(e) {
            this._onSyncErrorEventHandler = e
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(e) {
                return controller.handleError(e)
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return P.defaultTimeout
        }
    };
    o(t, "ControllerInner");
    let s = t;
    R = s
}
var R, $ = new i.Controller.ControllerFactory(R, F);
var Te = y.PlaceholderContent,
    He = y.IteratorPlaceholderContent,
    Y = o(function() {
        var s = w(function(t) {
            var h = t.model,
                e = t.controller,
                a = t.controller.idService,
                n = e.validationService,
                d = e.callContext(),
                r = T,
                c = H,
                V = {
                    props: t,
                    validateWidget: o(function(W) {
                        t.validateWidget(t, W)
                    }, "validateWidget")
                },
                K = h,
                N = x,
                j = I,
                Q = C();
            return M.createElement("div", t.rootNodeProperties, N(!1, !1, this, function() {
                return []
            }, function() {
                return []
            }))
        }, {
            topLevelComponent: !1,
            getAttributes: o(function() {
                return {
                    codeFunction: "Debounce",
                    functionKey: "8c28650d-1f20-4665-b74b-a4b35455ffbf",
                    functionOwnerName: "Debounce",
                    functionOwnerKey: "008872e1-91c9-4afc-a574-05e40cf41c95",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "DebounceFlow.Debounce",
            modelFactory: O,
            controllerFactory: $
        });
        return s.getCssDependencies = function() {
            return []
        }, s.getJsDependencies = function() {
            return ["scripts/Debounce.UserScripts.Debounce.js"]
        }, s.getBlocks = function() {
            return []
        }, s
    }, "componentFactory"),
    Oe = Y();
export {
    Oe as a
};