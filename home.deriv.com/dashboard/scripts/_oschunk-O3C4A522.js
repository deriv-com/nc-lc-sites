import {
    a as x
} from "./_oschunk-24WIHVSN.js";
import {
    a as V,
    h as O,
    v as T
} from "./_oschunk-O5KC3WOL.js";
import {
    a as J,
    g as I,
    m as p,
    o as P,
    q as R,
    r as N,
    s as k,
    t as z
} from "./_oschunk-NVHFAAS2.js";
import {
    Ga as y,
    la as b,
    na as C
} from "./_oschunk-WCMQG33O.js";
import {
    X as A,
    c,
    f as W
} from "./_oschunk-DFKJJKI4.js";
var d = A,
    E = class E extends d.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("InternalConfigs", "internalConfigsVar", "InternalConfigs", !0, !1, d.DataTypes.DataTypes.Record, function() {
                return d.DataTypes.ImmutableBase.getData(new C)
            }, !1, C), this.attr("Shape", "shapeIn", "Shape", !0, !1, d.DataTypes.DataTypes.Text, function() {
                return b.shape.softRounded
            }, !1), this.attr("_shapeInDataFetchStatus", "_shapeInDataFetchStatus", "_shapeInDataFetchStatus", !0, !1, d.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ShowHandler", "showHandlerIn", "ShowHandler", !0, !1, d.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_showHandlerInDataFetchStatus", "_showHandlerInDataFetchStatus", "_showHandlerInDataFetchStatus", !0, !1, d.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, d.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, d.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(d.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
c(E, "VariablesRecord");
var g = E;
g.init();
var w = class w extends d.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
c(w, "WidgetsRecord");
var H = w,
    D = class D extends d.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return g
        }
        static getWidgetsRecordConstructor() {
            return H
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(o) {
            "Shape" in o && (this.variables.shapeIn = o.Shape, "_shapeInDataFetchStatus" in o && (this.variables._shapeInDataFetchStatus = o._shapeInDataFetchStatus)), "ShowHandler" in o && (this.variables.showHandlerIn = o.ShowHandler, "_showHandlerInDataFetchStatus" in o && (this.variables._showHandlerInDataFetchStatus = o._showHandlerInDataFetchStatus)), "ExtendedClass" in o && (this.variables.extendedClassIn = o.ExtendedClass, "_extendedClassInDataFetchStatus" in o && (this.variables._extendedClassInDataFetchStatus = o._extendedClassInDataFetchStatus))
        }
    };
c(D, "Model");
var S = D;
S._hasValidationWidgetsValue = void 0;
var U = new d.Model.ModelFactory(S);
var m = W(J());
var F = {};

function $(f, o, _, t) {
    f.OnInitializedHandler = o.InitializedHandler, f.OnToggleHandler = o.OnToggleHandler
}
c($, "default");
var i = A; {
    let o = class o extends i.Controller.BaseViewController {
        constructor(t, n, e) {
            super(t, n, e, F);
            var a = this.controller;
            this.clientActionProxies = {
                initializedHandler$Action: c(function(r) {
                    return r = r === void 0 ? "" : r, a.executeActionInsideJSNode(a._initializedHandler$Action.bind(a, i.DataConversion.JSNodeParamConverter.from(r, i.DataTypes.DataTypes.Text)), a.callContext(), function(l) {
                        return {}
                    }, function() {}, "InitializedHandler")
                }, "initializedHandler$Action"),
                onToggleHandler$Action: c(function(r, l) {
                    return r = r === void 0 ? "" : r, l = l === void 0 ? !1 : l, a.executeActionInsideJSNode(a._onToggleHandler$Action.bind(a, i.DataConversion.JSNodeParamConverter.from(r, i.DataTypes.DataTypes.Text), i.DataConversion.JSNodeParamConverter.from(l, i.DataTypes.DataTypes.Boolean)), a.callContext(), function(s) {
                        return {}
                    }, function() {}, "OnToggleHandler")
                }, "onToggleHandler$Action")
            }, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    a = this.idService;
                return i.Logger.startActiveSpan("OnInitialize", function(r) {
                    r && (r.setAttribute("code.function", "OnInitialize"), r.setAttribute("outsystems.function.key", "2524abba-f9ff-4f1d-9aaf-d7503958a671"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnInitialize"), t = e.callContext(t);
                        var l = new i.DataTypes.VariableHolder,
                            s = new i.DataTypes.VariableHolder(new i.DataTypes.JSONSerializeOutputType);
                        l.value = y.generateUniqueId$Action(n.variables.internalConfigsVar.uniqueIdAttr, t), n.variables.internalConfigsVar.uniqueIdAttr = l.value.unique_IDOut, n.variables.internalConfigsVar.extendedClassAttr = n.variables.extendedClassIn, n.variables.internalConfigsVar.shapeAttr = n.variables.shapeIn, n.variables.internalConfigsVar.showHandlerAttr = n.variables.showHandlerIn, s.value.jSONOut = i.JSONUtils.serializeToJSON(n.variables.internalConfigsVar, !0, !1), y.bottomSheetCreate$Action(n.variables.internalConfigsVar.uniqueIdAttr, s.value.jSONOut, t), e._registerCallback$Action(t)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(t) {
            this.__onInitialize$Action = t
        }
        get _registerCallback$Action() {
            return this.hasOwnProperty("__registerCallback$Action") || (this.__registerCallback$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    a = this.idService;
                return i.Logger.startActiveSpan("RegisterCallback", function(r) {
                    r && (r.setAttribute("code.function", "RegisterCallback"), r.setAttribute("outsystems.function.key", "41f7c14d-a29c-4560-bbd7-9d103cc94b7b"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("RegisterCallback"), t = e.callContext(t);
                        var l = new i.DataTypes.VariableHolder;
                        l.value = i.Logger.startActiveSpan("GetCallbackHandler", function(s) {
                            s && (s.setAttribute("code.function", "GetCallbackHandler"), s.setAttribute("outsystems.function.key", "e152b377-7633-4d47-a17f-69d217822e08"), s.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), s.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode($, "GetCallbackHandler", "RegisterCallback", {
                                    OnInitializedHandler: i.DataConversion.JSNodeParamConverter.to(null, i.DataTypes.DataTypes.Object),
                                    OnToggleHandler: i.DataConversion.JSNodeParamConverter.to(null, i.DataTypes.DataTypes.Object)
                                }, function(u) {
                                    var h = new(e.constructor.getVariableGroupType("OutSystemsUI.Interaction.BottomSheet.RegisterCallback$getCallbackHandlerJSResult"));
                                    return h.onInitializedHandlerOut = i.DataConversion.JSNodeParamConverter.from(u.OnInitializedHandler, i.DataTypes.DataTypes.Object), h.onToggleHandlerOut = i.DataConversion.JSNodeParamConverter.from(u.OnToggleHandler, i.DataTypes.DataTypes.Object), h
                                }, {
                                    InitializedHandler: e.clientActionProxies.initializedHandler$Action,
                                    OnToggleHandler: e.clientActionProxies.onToggleHandler$Action
                                }, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1), y.bottomSheetRegisterCallback$Action(n.variables.internalConfigsVar.uniqueIdAttr, b.registeredCallbackEvents.initialized, l.value.onInitializedHandlerOut, t), y.bottomSheetRegisterCallback$Action(n.variables.internalConfigsVar.uniqueIdAttr, b.registeredCallbackEvents.onToggle, l.value.onToggleHandlerOut, t)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__registerCallback$Action
        }
        set _registerCallback$Action(t) {
            this.__registerCallback$Action = t
        }
        get _onToggleHandler$Action() {
            return this.hasOwnProperty("__onToggleHandler$Action") || (this.__onToggleHandler$Action = function(t, n, e) {
                var a = this.model,
                    r = this.controller,
                    l = this.idService;
                return i.Logger.startActiveSpan("OnToggleHandler", function(s) {
                    return s && (s.setAttribute("code.function", "OnToggleHandler"), s.setAttribute("outsystems.function.key", "86105b5d-81c7-4605-b347-cc4da302e909"), s.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), s.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                        r.ensureControllerAlive("OnToggleHandler"), e = r.callContext(e);
                        var u = new i.DataTypes.VariableHolder(new(r.constructor.getVariableGroupType("OutSystemsUI.Interaction.BottomSheet.OnToggleHandler$vars")));
                        return u.value.bottomSheetIdInLocal = t, u.value.isBottomSheetOpenInLocal = n, i.Flow.executeAsyncFlow(function() {
                            return r.onToggle$Action(u.value.bottomSheetIdInLocal, u.value.isBottomSheetOpenInLocal, e)
                        })
                    }, function() {
                        s && s.end()
                    })
                }, 1)
            }), this.__onToggleHandler$Action
        }
        set _onToggleHandler$Action(t) {
            this.__onToggleHandler$Action = t
        }
        get _initializedHandler$Action() {
            return this.hasOwnProperty("__initializedHandler$Action") || (this.__initializedHandler$Action = function(t, n) {
                var e = this.model,
                    a = this.controller,
                    r = this.idService;
                return i.Logger.startActiveSpan("InitializedHandler", function(l) {
                    return l && (l.setAttribute("code.function", "InitializedHandler"), l.setAttribute("outsystems.function.key", "97bf895d-3030-412e-beac-262ac726e410"), l.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), l.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                        a.ensureControllerAlive("InitializedHandler"), n = a.callContext(n);
                        var s = new i.DataTypes.VariableHolder(new(a.constructor.getVariableGroupType("OutSystemsUI.Interaction.BottomSheet.InitializedHandler$vars")));
                        return s.value.bottomSheetIdInLocal = t, i.Flow.executeAsyncFlow(function() {
                            return a.initialized$Action(s.value.bottomSheetIdInLocal, n)
                        })
                    }, function() {
                        l && l.end()
                    })
                }, 1)
            }), this.__initializedHandler$Action
        }
        set _initializedHandler$Action(t) {
            this.__initializedHandler$Action = t
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    a = this.idService;
                return i.Logger.startActiveSpan("OnDestroy", function(r) {
                    r && (r.setAttribute("code.function", "OnDestroy"), r.setAttribute("outsystems.function.key", "b01252a9-6745-4a78-8c14-0ea28199f6d7"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnDestroy"), t = e.callContext(t), y.bottomSheetDestroy$Action(n.variables.internalConfigsVar.uniqueIdAttr, t)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(t) {
            this.__onDestroy$Action = t
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    a = this.idService;
                return i.Logger.startActiveSpan("OnReady", function(r) {
                    r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "d7309398-de77-4ce8-a165-6aaa09f9d29a"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnReady"), t = e.callContext(t), y.bottomSheetInitialize$Action(n.variables.internalConfigsVar.uniqueIdAttr, t)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(t) {
            this.__onReady$Action = t
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    a = this.idService;
                return i.Logger.startActiveSpan("OnParametersChanged", function(r) {
                    r && (r.setAttribute("code.function", "OnParametersChanged"), r.setAttribute("outsystems.function.key", "f656f73b-6623-4253-abfa-62ad306e2bf1"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnParametersChanged"), t = e.callContext(t), n.variables.internalConfigsVar.shapeAttr !== n.variables.shapeIn && (n.variables.internalConfigsVar.shapeAttr = n.variables.shapeIn, y.bottomSheetChangeTextProperty$Action(n.variables.internalConfigsVar.uniqueIdAttr, "Shape", n.variables.internalConfigsVar.shapeAttr, t)), n.variables.internalConfigsVar.showHandlerAttr !== n.variables.showHandlerIn && (n.variables.internalConfigsVar.showHandlerAttr = n.variables.showHandlerIn, y.bottomSheetChangeBooleanProperty$Action(n.variables.internalConfigsVar.uniqueIdAttr, "ShowHandler", n.variables.internalConfigsVar.showHandlerAttr, t)), n.variables.internalConfigsVar.extendedClassAttr !== n.variables.extendedClassIn && (n.variables.internalConfigsVar.extendedClassAttr = n.variables.extendedClassIn, y.bottomSheetChangeTextProperty$Action(n.variables.internalConfigsVar.uniqueIdAttr, "ExtendedClass", n.variables.internalConfigsVar.extendedClassAttr, t))
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(t) {
            this.__onParametersChanged$Action = t
        }
        onInitialize$Action(t) {
            var n = this.controller;
            return i.Logger.startActiveSpan("OnInitialize__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnInitialize"), e.setAttribute("outsystems.function.key", "2524abba-f9ff-4f1d-9aaf-d7503958a671"), e.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), e.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onInitialize$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        registerCallback$Action(t) {
            var n = this.controller;
            return i.Logger.startActiveSpan("RegisterCallback__proxy", function(e) {
                e && (e.setAttribute("code.function", "RegisterCallback"), e.setAttribute("outsystems.function.key", "41f7c14d-a29c-4560-bbd7-9d103cc94b7b"), e.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), e.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._registerCallback$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onToggleHandler$Action(t, n, e) {
            var a = this.controller;
            return i.Logger.startActiveSpan("OnToggleHandler__proxy", function(r) {
                return r && (r.setAttribute("code.function", "OnToggleHandler"), r.setAttribute("outsystems.function.key", "86105b5d-81c7-4605-b347-cc4da302e909"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                    return a.safeExecuteClientAction(a._onToggleHandler$Action, e, t, n)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        initializedHandler$Action(t, n) {
            var e = this.controller;
            return i.Logger.startActiveSpan("InitializedHandler__proxy", function(a) {
                return a && (a.setAttribute("code.function", "InitializedHandler"), a.setAttribute("outsystems.function.key", "97bf895d-3030-412e-beac-262ac726e410"), a.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), a.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                    return e.safeExecuteClientAction(e._initializedHandler$Action, n, t)
                }, function() {
                    a && a.end()
                })
            }, 0)
        }
        onDestroy$Action(t) {
            var n = this.controller;
            return i.Logger.startActiveSpan("OnDestroy__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnDestroy"), e.setAttribute("outsystems.function.key", "b01252a9-6745-4a78-8c14-0ea28199f6d7"), e.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), e.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onDestroy$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onReady$Action(t) {
            var n = this.controller;
            return i.Logger.startActiveSpan("OnReady__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnReady"), e.setAttribute("outsystems.function.key", "d7309398-de77-4ce8-a165-6aaa09f9d29a"), e.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), e.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onReady$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onParametersChanged$Action(t) {
            var n = this.controller;
            return i.Logger.startActiveSpan("OnParametersChanged__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnParametersChanged"), e.setAttribute("outsystems.function.key", "f656f73b-6623-4253-abfa-62ad306e2bf1"), e.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), e.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onParametersChanged$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        get initialized$Action() {
            return this.hasOwnProperty("_initialized$Action") || (this._initialized$Action = function() {
                return Promise.resolve()
            }), this._initialized$Action
        }
        set initialized$Action(t) {
            this._initialized$Action = t
        }
        get onToggle$Action() {
            return this.hasOwnProperty("_onToggle$Action") || (this._onToggle$Action = function() {
                return Promise.resolve()
            }), this._onToggle$Action
        }
        set onToggle$Action(t) {
            this._onToggle$Action = t
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(t) {
                var n = this.controller,
                    e = this.model,
                    a = this.idService;
                return n.onInitialize$Action(t)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(t) {
            this._onInitializeEventHandler = t
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(t) {
                var n = this.controller,
                    e = this.model,
                    a = this.idService;
                return n.onReady$Action(t)
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
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = function(t) {
                var n = this.controller,
                    e = this.model,
                    a = this.idService;
                return n.onDestroy$Action(t)
            }), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(t) {
            this._onDestroyEventHandler = t
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = function(t) {
                var n = this.controller,
                    e = this.model,
                    a = this.idService;
                return n.onParametersChanged$Action(t)
            }), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(t) {
            this._onParametersChangedEventHandler = t
        }
        get onSyncStartEventHandler() {
            return this.hasOwnProperty("_onSyncStartEventHandler") || (this._onSyncStartEventHandler = null), this._onSyncStartEventHandler
        }
        set onSyncStartEventHandler(t) {
            this._onSyncStartEventHandler = t
        }
        get onSyncCompleteEventHandler() {
            return this.hasOwnProperty("_onSyncCompleteEventHandler") || (this._onSyncCompleteEventHandler = null), this._onSyncCompleteEventHandler
        }
        set onSyncCompleteEventHandler(t) {
            this._onSyncCompleteEventHandler = t
        }
        get onSyncErrorEventHandler() {
            return this.hasOwnProperty("_onSyncErrorEventHandler") || (this._onSyncErrorEventHandler = null), this._onSyncErrorEventHandler
        }
        set onSyncErrorEventHandler(t) {
            this._onSyncErrorEventHandler = t
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(t) {
                return controller.handleError(t)
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
    c(o, "ControllerInner");
    let f = o;
    v = f, v.registerVariableGroupType("OutSystemsUI.Interaction.BottomSheet.RegisterCallback$getCallbackHandlerJSResult", [{
        name: "OnInitializedHandler",
        attrName: "onInitializedHandlerOut",
        mandatory: !0,
        dataType: i.DataTypes.DataTypes.Object,
        defaultValue: c(function() {
            return null
        }, "defaultValue")
    }, {
        name: "OnToggleHandler",
        attrName: "onToggleHandlerOut",
        mandatory: !0,
        dataType: i.DataTypes.DataTypes.Object,
        defaultValue: c(function() {
            return null
        }, "defaultValue")
    }]), v.registerVariableGroupType("OutSystemsUI.Interaction.BottomSheet.OnToggleHandler$vars", [{
        name: "BottomSheetId",
        attrName: "bottomSheetIdInLocal",
        mandatory: !0,
        dataType: i.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "IsBottomSheetOpen",
        attrName: "isBottomSheetOpenInLocal",
        mandatory: !0,
        dataType: i.DataTypes.DataTypes.Boolean,
        defaultValue: c(function() {
            return !1
        }, "defaultValue")
    }]), v.registerVariableGroupType("OutSystemsUI.Interaction.BottomSheet.InitializedHandler$vars", [{
        name: "BottomSheetId",
        attrName: "bottomSheetIdInLocal",
        mandatory: !1,
        dataType: i.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }])
}
var v, L = new i.Controller.ControllerFactory(v, x);
var ht = I.PlaceholderContent,
    bt = I.IteratorPlaceholderContent,
    G = c(function() {
        var f = P(function(o) {
            var _ = o.model,
                t = o.controller,
                n = o.controller.idService,
                e = t.validationService,
                a = t.callContext(),
                r = k,
                l = z,
                s = {
                    props: o,
                    validateWidget: c(function(B) {
                        o.validateWidget(o, B)
                    }, "validateWidget")
                },
                u = _,
                h = N,
                q = R,
                j = p();
            return m.createElement("div", o.rootNodeProperties, h(!1, !1, this, function() {
                return []
            }, function() {
                return [m.createElement(O, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        name: _.variables.internalConfigsVar.uniqueIdAttr
                    },
                    style: "osui-bottom-sheet",
                    visible: !0,
                    _idProps: {
                        service: n,
                        name: "BottomSheet"
                    },
                    _widgetRecordProvider: u
                }, m.createElement(V, {
                    extendedProperties: {
                        className: "osui-bottom-sheet__header"
                    },
                    tag: "header",
                    _idProps: {
                        service: n,
                        name: "Header"
                    },
                    _widgetRecordProvider: u
                }, m.createElement(T, {
                    align: 0,
                    content: s.props.placeholders.topBar,
                    style: "osui-bottom-sheet__header__top-bar",
                    _idProps: {
                        service: n,
                        name: "TopBar"
                    },
                    _widgetRecordProvider: u
                })), m.createElement(T, {
                    align: 0,
                    content: s.props.placeholders.content,
                    style: "osui-bottom-sheet__content",
                    _idProps: {
                        service: n,
                        name: "Content"
                    },
                    _widgetRecordProvider: u
                })), m.createElement(O, {
                    align: 0,
                    animate: !1,
                    style: "osui-bottom-sheet-overlay",
                    visible: !0,
                    _idProps: {
                        service: n,
                        uuid: "4"
                    },
                    _widgetRecordProvider: u
                })]
            }))
        }, {
            topLevelComponent: !1,
            getAttributes: c(function() {
                return {
                    codeFunction: "BottomSheet",
                    functionKey: "4fb64c61-8941-44be-b854-da0b608a625b",
                    functionOwnerName: "OutSystemsUI",
                    functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Interaction.BottomSheet",
            modelFactory: U,
            controllerFactory: L
        });
        return f.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"]
        }, f.getJsDependencies = function() {
            return ["scripts/OutSystemsUI.UserScripts.OutSystemsUI.js"]
        }, f.getBlocks = function() {
            return []
        }, f
    }, "componentFactory"),
    vt = G();
export {
    vt as a
};