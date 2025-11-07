import {
    a as F
} from "./_oschunk-24WIHVSN.js";
import {
    a as z,
    v as C
} from "./_oschunk-O5KC3WOL.js";
import {
    a as J,
    g as O,
    m as $,
    o as p,
    q as P,
    r as N,
    s as R,
    t as V
} from "./_oschunk-NVHFAAS2.js";
import {
    Ga as d,
    la as b,
    oa as I
} from "./_oschunk-WCMQG33O.js";
import {
    X as A,
    c,
    f as W
} from "./_oschunk-DFKJJKI4.js";
var u = A,
    D = class D extends u.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("InternalConfigs", "internalConfigsVar", "InternalConfigs", !0, !1, u.DataTypes.DataTypes.Record, function() {
                return u.DataTypes.ImmutableBase.getData(new I)
            }, !1, I), this.attr("StartsOpen", "startsOpenIn", "StartsOpen", !0, !1, u.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_startsOpenInDataFetchStatus", "_startsOpenInDataFetchStatus", "_startsOpenInDataFetchStatus", !0, !1, u.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Direction", "directionIn", "Direction", !0, !1, u.DataTypes.DataTypes.Text, function() {
                return b.direction.right
            }, !1), this.attr("_directionInDataFetchStatus", "_directionInDataFetchStatus", "_directionInDataFetchStatus", !0, !1, u.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HasOverlay", "hasOverlayIn", "HasOverlay", !0, !1, u.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_hasOverlayInDataFetchStatus", "_hasOverlayInDataFetchStatus", "_hasOverlayInDataFetchStatus", !0, !1, u.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Width", "widthIn", "Width", !0, !1, u.DataTypes.DataTypes.Text, function() {
                return "500px"
            }, !1), this.attr("_widthInDataFetchStatus", "_widthInDataFetchStatus", "_widthInDataFetchStatus", !0, !1, u.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, u.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, u.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(u.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
c(D, "VariablesRecord");
var g = D;
g.init();
var E = class E extends u.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
c(E, "WidgetsRecord");
var T = E,
    H = class H extends u.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return g
        }
        static getWidgetsRecordConstructor() {
            return T
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(o) {
            "StartsOpen" in o && (this.variables.startsOpenIn = o.StartsOpen, "_startsOpenInDataFetchStatus" in o && (this.variables._startsOpenInDataFetchStatus = o._startsOpenInDataFetchStatus)), "Direction" in o && (this.variables.directionIn = o.Direction, "_directionInDataFetchStatus" in o && (this.variables._directionInDataFetchStatus = o._directionInDataFetchStatus)), "HasOverlay" in o && (this.variables.hasOverlayIn = o.HasOverlay, "_hasOverlayInDataFetchStatus" in o && (this.variables._hasOverlayInDataFetchStatus = o._hasOverlayInDataFetchStatus)), "Width" in o && (this.variables.widthIn = o.Width, "_widthInDataFetchStatus" in o && (this.variables._widthInDataFetchStatus = o._widthInDataFetchStatus)), "ExtendedClass" in o && (this.variables.extendedClassIn = o.ExtendedClass, "_extendedClassInDataFetchStatus" in o && (this.variables._extendedClassInDataFetchStatus = o._extendedClassInDataFetchStatus))
        }
    };
c(H, "Model");
var S = H;
S._hasValidationWidgetsValue = void 0;
var k = new u.Model.ModelFactory(S);
var m = W(J());
var U = {};

function w(f, o, _, t) {
    f.Initialized = o.InitializedHandler, f.OnToggle = o.OnToggleHandler
}
c(w, "default");
var i = A; {
    let o = class o extends i.Controller.BaseViewController {
        constructor(t, e, n) {
            super(t, e, n, U);
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
        get _onToggleHandler$Action() {
            return this.hasOwnProperty("__onToggleHandler$Action") || (this.__onToggleHandler$Action = function(t, e, n) {
                var a = this.model,
                    r = this.controller,
                    l = this.idService;
                return i.Logger.startActiveSpan("OnToggleHandler", function(s) {
                    return s && (s.setAttribute("code.function", "OnToggleHandler"), s.setAttribute("outsystems.function.key", "510b2b7c-68cc-4da8-b7a6-034d2407c2aa"), s.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), s.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                        r.ensureControllerAlive("OnToggleHandler"), n = r.callContext(n);
                        var y = new i.DataTypes.VariableHolder(new(r.constructor.getVariableGroupType("OutSystemsUI.Interaction.Sidebar.OnToggleHandler$vars")));
                        return y.value.sidebarIdInLocal = t, y.value.isSidebarOpenInLocal = e, i.Flow.executeAsyncFlow(function() {
                            return r.onToggle$Action(y.value.sidebarIdInLocal, y.value.isSidebarOpenInLocal, n)
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
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(t) {
                var e = this.model,
                    n = this.controller,
                    a = this.idService;
                return i.Logger.startActiveSpan("OnDestroy", function(r) {
                    r && (r.setAttribute("code.function", "OnDestroy"), r.setAttribute("outsystems.function.key", "6f5d90fa-a1d4-4a3c-9e10-c128e430a035"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("OnDestroy"), t = n.callContext(t), d.sidebarDestroy$Action(e.variables.internalConfigsVar.uniqueIdAttr, t)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(t) {
            this.__onDestroy$Action = t
        }
        get _initializedHandler$Action() {
            return this.hasOwnProperty("__initializedHandler$Action") || (this.__initializedHandler$Action = function(t, e) {
                var n = this.model,
                    a = this.controller,
                    r = this.idService;
                return i.Logger.startActiveSpan("InitializedHandler", function(l) {
                    return l && (l.setAttribute("code.function", "InitializedHandler"), l.setAttribute("outsystems.function.key", "74447a0f-577d-41a7-9f0d-139ad9a6a970"), l.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), l.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                        a.ensureControllerAlive("InitializedHandler"), e = a.callContext(e);
                        var s = new i.DataTypes.VariableHolder(new(a.constructor.getVariableGroupType("OutSystemsUI.Interaction.Sidebar.InitializedHandler$vars")));
                        return s.value.sidebarIdInLocal = t, i.Flow.executeAsyncFlow(function() {
                            return a.initialized$Action(s.value.sidebarIdInLocal, e)
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
        get _registerCallback$Action() {
            return this.hasOwnProperty("__registerCallback$Action") || (this.__registerCallback$Action = function(t) {
                var e = this.model,
                    n = this.controller,
                    a = this.idService;
                return i.Logger.startActiveSpan("RegisterCallback", function(r) {
                    r && (r.setAttribute("code.function", "RegisterCallback"), r.setAttribute("outsystems.function.key", "906c4cfb-5d12-4fac-bfe8-12ed6cb7f6d0"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("RegisterCallback"), t = n.callContext(t);
                        var l = new i.DataTypes.VariableHolder;
                        l.value = i.Logger.startActiveSpan("GetCallbackHandlers", function(s) {
                            s && (s.setAttribute("code.function", "GetCallbackHandlers"), s.setAttribute("outsystems.function.key", "16489112-6d1e-42f0-b19a-98486a8f2949"), s.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), s.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return n.safeExecuteJSNode(w, "GetCallbackHandlers", "RegisterCallback", {
                                    Initialized: i.DataConversion.JSNodeParamConverter.to(null, i.DataTypes.DataTypes.Object),
                                    OnToggle: i.DataConversion.JSNodeParamConverter.to(null, i.DataTypes.DataTypes.Object)
                                }, function(y) {
                                    var v = new(n.constructor.getVariableGroupType("OutSystemsUI.Interaction.Sidebar.RegisterCallback$getCallbackHandlersJSResult"));
                                    return v.initializedOut = i.DataConversion.JSNodeParamConverter.from(y.Initialized, i.DataTypes.DataTypes.Object), v.onToggleOut = i.DataConversion.JSNodeParamConverter.from(y.OnToggle, i.DataTypes.DataTypes.Object), v
                                }, {
                                    InitializedHandler: n.clientActionProxies.initializedHandler$Action,
                                    OnToggleHandler: n.clientActionProxies.onToggleHandler$Action
                                }, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1), d.sidebarRegisterCallback$Action(e.variables.internalConfigsVar.uniqueIdAttr, "Initialized", l.value.initializedOut, t), d.sidebarRegisterCallback$Action(e.variables.internalConfigsVar.uniqueIdAttr, "OnToggle", l.value.onToggleOut, t)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__registerCallback$Action
        }
        set _registerCallback$Action(t) {
            this.__registerCallback$Action = t
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(t) {
                var e = this.model,
                    n = this.controller,
                    a = this.idService;
                return i.Logger.startActiveSpan("OnInitialize", function(r) {
                    r && (r.setAttribute("code.function", "OnInitialize"), r.setAttribute("outsystems.function.key", "b7a6efcc-5270-4ea2-af52-d01d2ef558b1"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("OnInitialize"), t = n.callContext(t);
                        var l = new i.DataTypes.VariableHolder,
                            s = new i.DataTypes.VariableHolder(new i.DataTypes.JSONSerializeOutputType);
                        d.logEvent$Action(b.logType.general, "Going to create Sidebar", t), l.value = d.generateUniqueId$Action(e.variables.internalConfigsVar.uniqueIdAttr, t), e.variables.internalConfigsVar.uniqueIdAttr = l.value.unique_IDOut, e.variables.internalConfigsVar.startsOpenAttr = e.variables.startsOpenIn, e.variables.internalConfigsVar.extendedClassAttr = e.variables.extendedClassIn, e.variables.internalConfigsVar.directionAttr = e.variables.directionIn, e.variables.internalConfigsVar.widthAttr = e.variables.widthIn, e.variables.internalConfigsVar.hasOverlayAttr = e.variables.hasOverlayIn, s.value.jSONOut = i.JSONUtils.serializeToJSON(e.variables.internalConfigsVar, !0, !1), d.sidebarCreate$Action(e.variables.internalConfigsVar.uniqueIdAttr, s.value.jSONOut, t), n._registerCallback$Action(t)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(t) {
            this.__onInitialize$Action = t
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(t) {
                var e = this.model,
                    n = this.controller,
                    a = this.idService;
                return i.Logger.startActiveSpan("OnReady", function(r) {
                    r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "c6021e96-f45c-468e-8681-c1926c06d0ed"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("OnReady"), t = n.callContext(t), d.sidebarInitialize$Action(e.variables.internalConfigsVar.uniqueIdAttr, t), d.logEvent$Action(b.logType.general, "Sidebar created", t)
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
                var e = this.model,
                    n = this.controller,
                    a = this.idService;
                return i.Logger.startActiveSpan("OnParametersChanged", function(r) {
                    r && (r.setAttribute("code.function", "OnParametersChanged"), r.setAttribute("outsystems.function.key", "ff0bbc89-1e1f-440d-ad0b-7c2a0cce3350"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("OnParametersChanged"), t = n.callContext(t), e.variables.internalConfigsVar.startsOpenAttr !== e.variables.startsOpenIn && (e.variables.internalConfigsVar.startsOpenAttr = e.variables.startsOpenIn, d.sidebarChangeBooleanProperty$Action(e.variables.internalConfigsVar.uniqueIdAttr, "StartsOpen", e.variables.internalConfigsVar.startsOpenAttr, t)), e.variables.internalConfigsVar.directionAttr !== e.variables.directionIn && (e.variables.internalConfigsVar.directionAttr = e.variables.directionIn, d.sidebarChangeTextProperty$Action(e.variables.internalConfigsVar.uniqueIdAttr, "Direction", e.variables.internalConfigsVar.directionAttr, t)), e.variables.internalConfigsVar.widthAttr !== e.variables.widthIn && (e.variables.internalConfigsVar.widthAttr = e.variables.widthIn, d.sidebarChangeTextProperty$Action(e.variables.internalConfigsVar.uniqueIdAttr, "Width", e.variables.internalConfigsVar.widthAttr, t)), e.variables.internalConfigsVar.hasOverlayAttr !== e.variables.hasOverlayIn && (e.variables.internalConfigsVar.hasOverlayAttr = e.variables.hasOverlayIn, d.sidebarChangeBooleanProperty$Action(e.variables.internalConfigsVar.uniqueIdAttr, "HasOverlay", e.variables.internalConfigsVar.hasOverlayAttr, t)), e.variables.internalConfigsVar.extendedClassAttr !== e.variables.extendedClassIn && (e.variables.internalConfigsVar.extendedClassAttr = e.variables.extendedClassIn, d.sidebarChangeTextProperty$Action(e.variables.internalConfigsVar.uniqueIdAttr, "ExtendedClass", e.variables.internalConfigsVar.extendedClassAttr, t))
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(t) {
            this.__onParametersChanged$Action = t
        }
        onToggleHandler$Action(t, e, n) {
            var a = this.controller;
            return i.Logger.startActiveSpan("OnToggleHandler__proxy", function(r) {
                return r && (r.setAttribute("code.function", "OnToggleHandler"), r.setAttribute("outsystems.function.key", "510b2b7c-68cc-4da8-b7a6-034d2407c2aa"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                    return a.safeExecuteClientAction(a._onToggleHandler$Action, n, t, e)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        onDestroy$Action(t) {
            var e = this.controller;
            return i.Logger.startActiveSpan("OnDestroy__proxy", function(n) {
                n && (n.setAttribute("code.function", "OnDestroy"), n.setAttribute("outsystems.function.key", "6f5d90fa-a1d4-4a3c-9e10-c128e430a035"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._onDestroy$Action, t)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        initializedHandler$Action(t, e) {
            var n = this.controller;
            return i.Logger.startActiveSpan("InitializedHandler__proxy", function(a) {
                return a && (a.setAttribute("code.function", "InitializedHandler"), a.setAttribute("outsystems.function.key", "74447a0f-577d-41a7-9f0d-139ad9a6a970"), a.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), a.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._initializedHandler$Action, e, t)
                }, function() {
                    a && a.end()
                })
            }, 0)
        }
        registerCallback$Action(t) {
            var e = this.controller;
            return i.Logger.startActiveSpan("RegisterCallback__proxy", function(n) {
                n && (n.setAttribute("code.function", "RegisterCallback"), n.setAttribute("outsystems.function.key", "906c4cfb-5d12-4fac-bfe8-12ed6cb7f6d0"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._registerCallback$Action, t)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        onInitialize$Action(t) {
            var e = this.controller;
            return i.Logger.startActiveSpan("OnInitialize__proxy", function(n) {
                n && (n.setAttribute("code.function", "OnInitialize"), n.setAttribute("outsystems.function.key", "b7a6efcc-5270-4ea2-af52-d01d2ef558b1"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._onInitialize$Action, t)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        onReady$Action(t) {
            var e = this.controller;
            return i.Logger.startActiveSpan("OnReady__proxy", function(n) {
                n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "c6021e96-f45c-468e-8681-c1926c06d0ed"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._onReady$Action, t)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        onParametersChanged$Action(t) {
            var e = this.controller;
            return i.Logger.startActiveSpan("OnParametersChanged__proxy", function(n) {
                n && (n.setAttribute("code.function", "OnParametersChanged"), n.setAttribute("outsystems.function.key", "ff0bbc89-1e1f-440d-ad0b-7c2a0cce3350"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._onParametersChanged$Action, t)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        get onToggle$Action() {
            return this.hasOwnProperty("_onToggle$Action") || (this._onToggle$Action = function() {
                return Promise.resolve()
            }), this._onToggle$Action
        }
        set onToggle$Action(t) {
            this._onToggle$Action = t
        }
        get initialized$Action() {
            return this.hasOwnProperty("_initialized$Action") || (this._initialized$Action = function() {
                return Promise.resolve()
            }), this._initialized$Action
        }
        set initialized$Action(t) {
            this._initialized$Action = t
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(t) {
                var e = this.controller,
                    n = this.model,
                    a = this.idService;
                return e.onInitialize$Action(t)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(t) {
            this._onInitializeEventHandler = t
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(t) {
                var e = this.controller,
                    n = this.model,
                    a = this.idService;
                return e.onReady$Action(t)
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
                var e = this.controller,
                    n = this.model,
                    a = this.idService;
                return e.onDestroy$Action(t)
            }), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(t) {
            this._onDestroyEventHandler = t
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = function(t) {
                var e = this.controller,
                    n = this.model,
                    a = this.idService;
                return e.onParametersChanged$Action(t)
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
            return d.defaultTimeout
        }
    };
    c(o, "ControllerInner");
    let f = o;
    h = f, h.registerVariableGroupType("OutSystemsUI.Interaction.Sidebar.OnToggleHandler$vars", [{
        name: "SidebarId",
        attrName: "sidebarIdInLocal",
        mandatory: !0,
        dataType: i.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "IsSidebarOpen",
        attrName: "isSidebarOpenInLocal",
        mandatory: !0,
        dataType: i.DataTypes.DataTypes.Boolean,
        defaultValue: c(function() {
            return !1
        }, "defaultValue")
    }]), h.registerVariableGroupType("OutSystemsUI.Interaction.Sidebar.InitializedHandler$vars", [{
        name: "SidebarId",
        attrName: "sidebarIdInLocal",
        mandatory: !0,
        dataType: i.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }]), h.registerVariableGroupType("OutSystemsUI.Interaction.Sidebar.RegisterCallback$getCallbackHandlersJSResult", [{
        name: "Initialized",
        attrName: "initializedOut",
        mandatory: !0,
        dataType: i.DataTypes.DataTypes.Object,
        defaultValue: c(function() {
            return null
        }, "defaultValue")
    }, {
        name: "OnToggle",
        attrName: "onToggleOut",
        mandatory: !0,
        dataType: i.DataTypes.DataTypes.Object,
        defaultValue: c(function() {
            return null
        }, "defaultValue")
    }])
}
var h, x = new i.Controller.ControllerFactory(h, F);
var vt = O.PlaceholderContent,
    bt = O.IteratorPlaceholderContent,
    G = c(function() {
        var f = p(function(o) {
            var _ = o.model,
                t = o.controller,
                e = o.controller.idService,
                n = t.validationService,
                a = t.callContext(),
                r = R,
                l = V,
                s = {
                    props: o,
                    validateWidget: c(function(L) {
                        o.validateWidget(o, L)
                    }, "validateWidget")
                },
                y = _,
                v = N,
                M = P,
                B = $();
            return m.createElement("div", o.rootNodeProperties, v(!1, !1, this, function() {
                return []
            }, function() {
                return [m.createElement(z, {
                    extendedProperties: {
                        className: "osui-sidebar",
                        name: _.variables.internalConfigsVar.uniqueIdAttr
                    },
                    tag: "aside",
                    _idProps: {
                        service: e,
                        name: "Sidebar"
                    },
                    _widgetRecordProvider: y
                }, m.createElement(C, {
                    align: 0,
                    content: s.props.placeholders.header,
                    style: "osui-sidebar__header ph",
                    _idProps: {
                        service: e,
                        name: "Header"
                    },
                    _widgetRecordProvider: y
                }), m.createElement(C, {
                    align: 0,
                    content: s.props.placeholders.content,
                    style: "osui-sidebar__content ph",
                    _idProps: {
                        service: e,
                        name: "Content"
                    },
                    _widgetRecordProvider: y
                }))]
            }))
        }, {
            topLevelComponent: !1,
            getAttributes: c(function() {
                return {
                    codeFunction: "Sidebar",
                    functionKey: "8dbd8a4f-a81a-4fe1-9206-f0f7e108babe",
                    functionOwnerName: "OutSystemsUI",
                    functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Interaction.Sidebar",
            modelFactory: k,
            controllerFactory: x
        });
        return f.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"]
        }, f.getJsDependencies = function() {
            return ["scripts/OutSystemsUI.UserScripts.OutSystemsUI.js"]
        }, f.getBlocks = function() {
            return []
        }, f
    }, "componentFactory"),
    ht = G();
export {
    ht as a
};