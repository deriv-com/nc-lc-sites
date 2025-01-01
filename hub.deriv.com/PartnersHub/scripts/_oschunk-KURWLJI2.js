import {
    a as U,
    b as M
} from "./_oschunk-ROAU47YI.js";
import {
    b as R
} from "./_oschunk-2MST7FR4.js";
import {
    b as H
} from "./_oschunk-ZL2HTVZN.js";
import {
    a as L
} from "./_oschunk-LDY7XNSJ.js";
import {
    a as x,
    d as P,
    s as g
} from "./_oschunk-LWMGEL7F.js";
import {
    a as V
} from "./_oschunk-4GXKK3IG.js";
import {
    a as z,
    g as $,
    i as I
} from "./_oschunk-WZHUAZJP.js";
import {
    o as f,
    q as k
} from "./_oschunk-BDI2RWOA.js";
import {
    kd as p
} from "./_oschunk-7WCOCYFU.js";
import {
    ia as b
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as s,
    h as F
} from "./_oschunk-QHO7QY6K.js";
var y = F(z());
var W = {};
var _ = b; {
    let a = class a extends _.Controller.BaseViewController {
        constructor(t, n, e) {
            super(t, n, e, W);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    o = this.idService;
                return _.Logger.startActiveSpan("OnReady", function(r) {
                    return r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "4acb3ddd-8cbc-49df-9625-3ccdd7d0a758"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), _.Flow.tryFinally(function() {
                        return e.ensureControllerAlive("OnReady"), t = e.callContext(t), _.Flow.executeAsyncFlow(function() {
                            return e.setModalId$Action(o.getId("SideModal"), t)
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(t) {
            this.__onReady$Action = t
        }
        onReady$Action(t) {
            var n = this.controller;
            return _.Logger.startActiveSpan("OnReady__proxy", function(e) {
                return e && (e.setAttribute("code.function", "OnReady"), e.setAttribute("outsystems.function.key", "4acb3ddd-8cbc-49df-9625-3ccdd7d0a758"), e.setAttribute("outsystems.function.owner.name", "PartnersHub"), e.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), _.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onReady$Action, t)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        get headerLeftButtonAction$Action() {
            return this.hasOwnProperty("_headerLeftButtonAction$Action") || (this._headerLeftButtonAction$Action = function() {
                return Promise.resolve()
            }), this._headerLeftButtonAction$Action
        }
        set headerLeftButtonAction$Action(t) {
            this._headerLeftButtonAction$Action = t
        }
        get secondaryButtonAction$Action() {
            return this.hasOwnProperty("_secondaryButtonAction$Action") || (this._secondaryButtonAction$Action = function() {
                return Promise.resolve()
            }), this._secondaryButtonAction$Action
        }
        set secondaryButtonAction$Action(t) {
            this._secondaryButtonAction$Action = t
        }
        get primaryButtonAction$Action() {
            return this.hasOwnProperty("_primaryButtonAction$Action") || (this._primaryButtonAction$Action = function() {
                return Promise.resolve()
            }), this._primaryButtonAction$Action
        }
        set primaryButtonAction$Action(t) {
            this._primaryButtonAction$Action = t
        }
        get headerRightButtonAction$Action() {
            return this.hasOwnProperty("_headerRightButtonAction$Action") || (this._headerRightButtonAction$Action = function() {
                return Promise.resolve()
            }), this._headerRightButtonAction$Action
        }
        set headerRightButtonAction$Action(t) {
            this._headerRightButtonAction$Action = t
        }
        get setModalId$Action() {
            return this.hasOwnProperty("_setModalId$Action") || (this._setModalId$Action = function() {
                return Promise.resolve()
            }), this._setModalId$Action
        }
        set setModalId$Action(t) {
            this._setModalId$Action = t
        }
        get toggleSidebar$Action() {
            return this.hasOwnProperty("_toggleSidebar$Action") || (this._toggleSidebar$Action = function() {
                return Promise.resolve()
            }), this._toggleSidebar$Action
        }
        set toggleSidebar$Action(t) {
            this._toggleSidebar$Action = t
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(t) {
            this._onInitializeEventHandler = t
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(t) {
                var n = this.controller,
                    e = this.model,
                    o = this.idService;
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
                return controller.handleError(t)
            }), this._handleError
        }
        set handleError(t) {
            this._handleError = t
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return k.defaultTimeout
        }
    };
    s(a, "ControllerInner");
    let m = a;
    J = m
}
var J, q = new _.Controller.ControllerFactory(J, V);
var E = F(z());
var G = {};

function w(m, a, d, t) {
    m.Initialized = a.InitializedHandler, m.OnToggle = a.OnToggleHandler
}
s(w, "default");
var i = b; {
    let a = class a extends i.Controller.BaseViewController {
        constructor(t, n, e) {
            super(t, n, e, G);
            var o = this.controller;
            this.clientActionProxies = {
                initializedHandler$Action: s(function(r) {
                    return r = r === void 0 ? "" : r, o.executeActionInsideJSNode(o._initializedHandler$Action.bind(o, i.DataConversion.JSNodeParamConverter.from(r, i.DataTypes.DataTypes.Text)), o.callContext(), function(c) {
                        return {}
                    }, function() {}, "InitializedHandler")
                }, "initializedHandler$Action"),
                onToggleHandler$Action: s(function(r, c) {
                    return r = r === void 0 ? "" : r, c = c === void 0 ? !1 : c, o.executeActionInsideJSNode(o._onToggleHandler$Action.bind(o, i.DataConversion.JSNodeParamConverter.from(r, i.DataTypes.DataTypes.Text), i.DataConversion.JSNodeParamConverter.from(c, i.DataTypes.DataTypes.Boolean)), o.callContext(), function(l) {
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
            return this.hasOwnProperty("__onToggleHandler$Action") || (this.__onToggleHandler$Action = function(t, n, e) {
                var o = this.model,
                    r = this.controller,
                    c = this.idService;
                return i.Logger.startActiveSpan("OnToggleHandler", function(l) {
                    return l && (l.setAttribute("code.function", "OnToggleHandler"), l.setAttribute("outsystems.function.key", "510b2b7c-68cc-4da8-b7a6-034d2407c2aa"), l.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), l.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                        r.ensureControllerAlive("OnToggleHandler"), e = r.callContext(e);
                        var A = new i.DataTypes.VariableHolder(new(r.constructor.getVariableGroupType("OutSystemsUI.Interaction.Sidebar.OnToggleHandler$vars")));
                        return A.value.sidebarIdInLocal = t, A.value.isSidebarOpenInLocal = n, i.Flow.executeAsyncFlow(function() {
                            return r.onToggle$Action(A.value.sidebarIdInLocal, A.value.isSidebarOpenInLocal, e)
                        })
                    }, function() {
                        l && l.end()
                    })
                }, 1)
            }), this.__onToggleHandler$Action
        }
        set _onToggleHandler$Action(t) {
            this.__onToggleHandler$Action = t
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    o = this.idService;
                return i.Logger.startActiveSpan("OnDestroy", function(r) {
                    r && (r.setAttribute("code.function", "OnDestroy"), r.setAttribute("outsystems.function.key", "6f5d90fa-a1d4-4a3c-9e10-c128e430a035"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnDestroy"), t = e.callContext(t), f.sidebarDestroy$Action(n.variables.internalConfigsVar.uniqueIdAttr, t)
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
            return this.hasOwnProperty("__initializedHandler$Action") || (this.__initializedHandler$Action = function(t, n) {
                var e = this.model,
                    o = this.controller,
                    r = this.idService;
                return i.Logger.startActiveSpan("InitializedHandler", function(c) {
                    return c && (c.setAttribute("code.function", "InitializedHandler"), c.setAttribute("outsystems.function.key", "74447a0f-577d-41a7-9f0d-139ad9a6a970"), c.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), c.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                        o.ensureControllerAlive("InitializedHandler"), n = o.callContext(n);
                        var l = new i.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("OutSystemsUI.Interaction.Sidebar.InitializedHandler$vars")));
                        return l.value.sidebarIdInLocal = t, i.Flow.executeAsyncFlow(function() {
                            return o.initialized$Action(l.value.sidebarIdInLocal, n)
                        })
                    }, function() {
                        c && c.end()
                    })
                }, 1)
            }), this.__initializedHandler$Action
        }
        set _initializedHandler$Action(t) {
            this.__initializedHandler$Action = t
        }
        get _registerCallback$Action() {
            return this.hasOwnProperty("__registerCallback$Action") || (this.__registerCallback$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    o = this.idService;
                return i.Logger.startActiveSpan("RegisterCallback", function(r) {
                    r && (r.setAttribute("code.function", "RegisterCallback"), r.setAttribute("outsystems.function.key", "906c4cfb-5d12-4fac-bfe8-12ed6cb7f6d0"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("RegisterCallback"), t = e.callContext(t);
                        var c = new i.DataTypes.VariableHolder;
                        c.value = i.Logger.startActiveSpan("GetCallbackHandlers", function(l) {
                            l && (l.setAttribute("code.function", "GetCallbackHandlers"), l.setAttribute("outsystems.function.key", "16489112-6d1e-42f0-b19a-98486a8f2949"), l.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), l.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), l.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(w, "GetCallbackHandlers", "RegisterCallback", {
                                    Initialized: i.DataConversion.JSNodeParamConverter.to(null, i.DataTypes.DataTypes.Object),
                                    OnToggle: i.DataConversion.JSNodeParamConverter.to(null, i.DataTypes.DataTypes.Object)
                                }, function(A) {
                                    var u = new(e.constructor.getVariableGroupType("OutSystemsUI.Interaction.Sidebar.RegisterCallback$getCallbackHandlersJSResult"));
                                    return u.initializedOut = i.DataConversion.JSNodeParamConverter.from(A.Initialized, i.DataTypes.DataTypes.Object), u.onToggleOut = i.DataConversion.JSNodeParamConverter.from(A.OnToggle, i.DataTypes.DataTypes.Object), u
                                }, {
                                    InitializedHandler: e.clientActionProxies.initializedHandler$Action,
                                    OnToggleHandler: e.clientActionProxies.onToggleHandler$Action
                                }, {})
                            } finally {
                                l && l.end()
                            }
                        }, 1), f.sidebarRegisterCallback$Action(n.variables.internalConfigsVar.uniqueIdAttr, "Initialized", c.value.initializedOut, t), f.sidebarRegisterCallback$Action(n.variables.internalConfigsVar.uniqueIdAttr, "OnToggle", c.value.onToggleOut, t)
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
                var n = this.model,
                    e = this.controller,
                    o = this.idService;
                return i.Logger.startActiveSpan("OnInitialize", function(r) {
                    r && (r.setAttribute("code.function", "OnInitialize"), r.setAttribute("outsystems.function.key", "b7a6efcc-5270-4ea2-af52-d01d2ef558b1"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnInitialize"), t = e.callContext(t);
                        var c = new i.DataTypes.VariableHolder,
                            l = new i.DataTypes.VariableHolder(new i.DataTypes.JSONSerializeOutputType);
                        f.logEvent$Action(p.logType.general, "Going to create Sidebar", t), c.value = f.generateUniqueId$Action(n.variables.internalConfigsVar.uniqueIdAttr, t), n.variables.internalConfigsVar.uniqueIdAttr = c.value.unique_IDOut, n.variables.internalConfigsVar.startsOpenAttr = n.variables.startsOpenIn, n.variables.internalConfigsVar.extendedClassAttr = n.variables.extendedClassIn, n.variables.internalConfigsVar.directionAttr = n.variables.directionIn, n.variables.internalConfigsVar.widthAttr = n.variables.widthIn, n.variables.internalConfigsVar.hasOverlayAttr = n.variables.hasOverlayIn, l.value.jSONOut = i.JSONUtils.serializeToJSON(n.variables.internalConfigsVar, !0, !1), f.sidebarCreate$Action(n.variables.internalConfigsVar.uniqueIdAttr, l.value.jSONOut, t), e._registerCallback$Action(t)
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
                var n = this.model,
                    e = this.controller,
                    o = this.idService;
                return i.Logger.startActiveSpan("OnReady", function(r) {
                    r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "c6021e96-f45c-468e-8681-c1926c06d0ed"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnReady"), t = e.callContext(t), f.sidebarInitialize$Action(n.variables.internalConfigsVar.uniqueIdAttr, t), f.logEvent$Action(p.logType.general, "Sidebar created", t)
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
                    o = this.idService;
                return i.Logger.startActiveSpan("OnParametersChanged", function(r) {
                    r && (r.setAttribute("code.function", "OnParametersChanged"), r.setAttribute("outsystems.function.key", "ff0bbc89-1e1f-440d-ad0b-7c2a0cce3350"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnParametersChanged"), t = e.callContext(t), n.variables.internalConfigsVar.startsOpenAttr !== n.variables.startsOpenIn && (n.variables.internalConfigsVar.startsOpenAttr = n.variables.startsOpenIn, f.sidebarChangeBooleanProperty$Action(n.variables.internalConfigsVar.uniqueIdAttr, "StartsOpen", n.variables.internalConfigsVar.startsOpenAttr, t)), n.variables.internalConfigsVar.directionAttr !== n.variables.directionIn && (n.variables.internalConfigsVar.directionAttr = n.variables.directionIn, f.sidebarChangeTextProperty$Action(n.variables.internalConfigsVar.uniqueIdAttr, "Direction", n.variables.internalConfigsVar.directionAttr, t)), n.variables.internalConfigsVar.widthAttr !== n.variables.widthIn && (n.variables.internalConfigsVar.widthAttr = n.variables.widthIn, f.sidebarChangeTextProperty$Action(n.variables.internalConfigsVar.uniqueIdAttr, "Width", n.variables.internalConfigsVar.widthAttr, t)), n.variables.internalConfigsVar.hasOverlayAttr !== n.variables.hasOverlayIn && (n.variables.internalConfigsVar.hasOverlayAttr = n.variables.hasOverlayIn, f.sidebarChangeBooleanProperty$Action(n.variables.internalConfigsVar.uniqueIdAttr, "HasOverlay", n.variables.internalConfigsVar.hasOverlayAttr, t)), n.variables.internalConfigsVar.extendedClassAttr !== n.variables.extendedClassIn && (n.variables.internalConfigsVar.extendedClassAttr = n.variables.extendedClassIn, f.sidebarChangeTextProperty$Action(n.variables.internalConfigsVar.uniqueIdAttr, "ExtendedClass", n.variables.internalConfigsVar.extendedClassAttr, t))
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(t) {
            this.__onParametersChanged$Action = t
        }
        onToggleHandler$Action(t, n, e) {
            var o = this.controller;
            return i.Logger.startActiveSpan("OnToggleHandler__proxy", function(r) {
                return r && (r.setAttribute("code.function", "OnToggleHandler"), r.setAttribute("outsystems.function.key", "510b2b7c-68cc-4da8-b7a6-034d2407c2aa"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                    return o.safeExecuteClientAction(o._onToggleHandler$Action, e, t, n)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        onDestroy$Action(t) {
            var n = this.controller;
            return i.Logger.startActiveSpan("OnDestroy__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnDestroy"), e.setAttribute("outsystems.function.key", "6f5d90fa-a1d4-4a3c-9e10-c128e430a035"), e.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), e.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onDestroy$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        initializedHandler$Action(t, n) {
            var e = this.controller;
            return i.Logger.startActiveSpan("InitializedHandler__proxy", function(o) {
                return o && (o.setAttribute("code.function", "InitializedHandler"), o.setAttribute("outsystems.function.key", "74447a0f-577d-41a7-9f0d-139ad9a6a970"), o.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), o.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                    return e.safeExecuteClientAction(e._initializedHandler$Action, n, t)
                }, function() {
                    o && o.end()
                })
            }, 0)
        }
        registerCallback$Action(t) {
            var n = this.controller;
            return i.Logger.startActiveSpan("RegisterCallback__proxy", function(e) {
                e && (e.setAttribute("code.function", "RegisterCallback"), e.setAttribute("outsystems.function.key", "906c4cfb-5d12-4fac-bfe8-12ed6cb7f6d0"), e.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), e.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._registerCallback$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onInitialize$Action(t) {
            var n = this.controller;
            return i.Logger.startActiveSpan("OnInitialize__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnInitialize"), e.setAttribute("outsystems.function.key", "b7a6efcc-5270-4ea2-af52-d01d2ef558b1"), e.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), e.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onInitialize$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onReady$Action(t) {
            var n = this.controller;
            return i.Logger.startActiveSpan("OnReady__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnReady"), e.setAttribute("outsystems.function.key", "c6021e96-f45c-468e-8681-c1926c06d0ed"), e.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), e.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
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
                e && (e.setAttribute("code.function", "OnParametersChanged"), e.setAttribute("outsystems.function.key", "ff0bbc89-1e1f-440d-ad0b-7c2a0cce3350"), e.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), e.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onParametersChanged$Action, t)
                } finally {
                    e && e.end()
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
                var n = this.controller,
                    e = this.model,
                    o = this.idService;
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
                    o = this.idService;
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
                    o = this.idService;
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
                    o = this.idService;
                return n.onParametersChanged$Action(t)
            }), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(t) {
            this._onParametersChangedEventHandler = t
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
            return f.defaultTimeout
        }
    };
    s(a, "ControllerInner");
    let m = a;
    O = m, O.registerVariableGroupType("OutSystemsUI.Interaction.Sidebar.OnToggleHandler$vars", [{
        name: "SidebarId",
        attrName: "sidebarIdInLocal",
        mandatory: !0,
        dataType: i.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "IsSidebarOpen",
        attrName: "isSidebarOpenInLocal",
        mandatory: !0,
        dataType: i.DataTypes.DataTypes.Boolean,
        defaultValue: s(function() {
            return !1
        }, "defaultValue")
    }]), O.registerVariableGroupType("OutSystemsUI.Interaction.Sidebar.InitializedHandler$vars", [{
        name: "SidebarId",
        attrName: "sidebarIdInLocal",
        mandatory: !0,
        dataType: i.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }]), O.registerVariableGroupType("OutSystemsUI.Interaction.Sidebar.RegisterCallback$getCallbackHandlersJSResult", [{
        name: "Initialized",
        attrName: "initializedOut",
        mandatory: !0,
        dataType: i.DataTypes.DataTypes.Object,
        defaultValue: s(function() {
            return null
        }, "defaultValue")
    }, {
        name: "OnToggle",
        attrName: "onToggleOut",
        mandatory: !0,
        dataType: i.DataTypes.DataTypes.Object,
        defaultValue: s(function() {
            return null
        }, "defaultValue")
    }])
}
var O, j = new i.Controller.ControllerFactory(O, L);
var Ct = I.PlaceholderContent,
    It = I.IteratorPlaceholderContent,
    S = class S extends $.BaseWebBlock {
        static get displayName() {
            return "Interaction.Sidebar"
        }
        static getAttributes() {
            return {
                codeFunction: "Sidebar",
                functionKey: "8dbd8a4f-a81a-4fe1-9206-f0f7e108babe",
                functionOwnerName: "OutSystemsUI",
                functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css"]
        }
        static getJsDependencies() {
            return ["scripts/OutSystemsUI.UserScripts.OutSystemsUI.js"]
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return U
        }
        get controllerFactory() {
            return j
        }
        get title() {
            return ""
        }
        internalRender() {
            let a = this.model,
                d = this.controller,
                t = this.idService,
                n = d.validationService,
                e = this.widgetsRecordProvider,
                o = d.callContext(),
                r = S.ifWidget,
                c = S.textWidget,
                l = S.asPrimitiveValue,
                A = S.getTranslation,
                u = this;
            return E.createElement("div", this.getRootNodeProperties(), r(!1, !1, this, function() {
                return []
            }, function() {
                return [E.createElement(x, {
                    extendedProperties: {
                        className: "osui-sidebar",
                        name: a.variables.internalConfigsVar.uniqueIdAttr
                    },
                    tag: "aside",
                    _idProps: {
                        service: t,
                        name: "Sidebar"
                    },
                    _widgetRecordProvider: e
                }, E.createElement(g, {
                    align: 0,
                    content: u.props.placeholders.header,
                    style: "osui-sidebar__header ph",
                    _idProps: {
                        service: t,
                        name: "Header"
                    },
                    _widgetRecordProvider: e
                }), E.createElement(g, {
                    align: 0,
                    content: u.props.placeholders.content,
                    style: "osui-sidebar__content ph",
                    _idProps: {
                        service: t,
                        name: "Content"
                    },
                    _widgetRecordProvider: e
                }))]
            }))
        }
    };
s(S, "View");
var T = S,
    D = T;
var v = b,
    N = I.PlaceholderContent,
    Bt = I.IteratorPlaceholderContent,
    C = class C extends $.BaseWebBlock {
        static get displayName() {
            return "Common.SideBar"
        }
        static getAttributes() {
            return {
                codeFunction: "SideBar",
                functionKey: "df8824c3-c71f-48cd-80bc-936280695177",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Common.SideBar.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [D, H, R]
        }
        get modelFactory() {
            return M
        }
        get controllerFactory() {
            return q
        }
        get title() {
            return ""
        }
        internalRender() {
            let a = this.model,
                d = this.controller,
                t = this.idService,
                n = d.validationService,
                e = this.widgetsRecordProvider,
                o = d.callContext(),
                r = C.ifWidget,
                c = C.textWidget,
                l = C.asPrimitiveValue,
                A = C.getTranslation,
                u = this;
            return y.createElement("div", this.getRootNodeProperties(), y.createElement(D, {
                getOwnerSpan: s(function() {
                    return u.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return u.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Width: "",
                    HasOverlay: !0,
                    ExtendedClass: "ph-filter-sidebar " + a.variables.customExtendedClassIn,
                    _extendedClassInDataFetchStatus: v.Model.calculateDataFetchStatus(a.variables._customExtendedClassInDataFetchStatus),
                    StartsOpen: !1
                },
                events: {
                    _handleError: s(function(h) {
                        d.handleError(h)
                    }, "_handleError"),
                    onToggle$Action: s(function(h, K) {
                        var Q = o.clone();
                        d.toggleSidebar$Action(a.variables.isSidebarOpenIn, K, d.callContext(Q))
                    }, "onToggle$Action")
                },
                _validationProps: {
                    validationService: n
                },
                _idProps: {
                    service: t,
                    name: "SideModal",
                    alias: "1"
                },
                _widgetRecordProvider: e,
                placeholders: {
                    header: new N(function() {
                        return [r(!a.variables.hasCustomHeaderIn, !1, this, function() {
                            return [y.createElement(P, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "1"
                                },
                                _widgetRecordProvider: e
                            }, y.createElement(H, {
                                getOwnerSpan: s(function() {
                                    return u.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: s(function() {
                                    return u.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    IsSidebarTitle: !0,
                                    CustomRightIcon: a.variables.headerInfoIn.customRightIconAttr,
                                    _customRightIconInDataFetchStatus: v.Model.calculateDataFetchStatus(a.variables._headerInfoInDataFetchStatus),
                                    ShowLeftButton: a.variables.headerInfoIn.showLeftButtonAttr,
                                    _showLeftButtonInDataFetchStatus: v.Model.calculateDataFetchStatus(a.variables._headerInfoInDataFetchStatus),
                                    Title: a.variables.headerInfoIn.titleAttr,
                                    _titleInDataFetchStatus: v.Model.calculateDataFetchStatus(a.variables._headerInfoInDataFetchStatus),
                                    ShowRightButton: a.variables.headerInfoIn.showRightButtonAttr,
                                    _showRightButtonInDataFetchStatus: v.Model.calculateDataFetchStatus(a.variables._headerInfoInDataFetchStatus)
                                },
                                events: {
                                    _handleError: s(function(h) {
                                        d.handleError(h)
                                    }, "_handleError"),
                                    rightButtonAction$Action: s(function() {
                                        var h = o.clone();
                                        d.headerRightButtonAction$Action(d.callContext(h))
                                    }, "rightButtonAction$Action"),
                                    leftButtonAction$Action: s(function() {
                                        var h = o.clone();
                                        d.headerLeftButtonAction$Action(d.callContext(h))
                                    }, "leftButtonAction$Action")
                                },
                                _validationProps: {
                                    validationService: n
                                },
                                _idProps: {
                                    service: t,
                                    uuid: "2",
                                    alias: "2"
                                },
                                _widgetRecordProvider: e,
                                _dependencies: []
                            }))]
                        }, function() {
                            return [y.createElement(g, {
                                align: 0,
                                content: u.props.placeholders.customHeader,
                                _idProps: {
                                    service: t,
                                    name: "CustomHeader"
                                },
                                _widgetRecordProvider: e
                            })]
                        })]
                    }),
                    content: new N(function() {
                        return [y.createElement(P, {
                            align: 0,
                            animate: !1,
                            style: "ph-sidebar-content-container",
                            visible: !0,
                            _idProps: {
                                service: t,
                                name: "SidebarContentContainer"
                            },
                            _widgetRecordProvider: e
                        }, y.createElement(g, {
                            align: 0,
                            content: u.props.placeholders.bodyContent,
                            style: a.variables.contentClassNameIn,
                            _idProps: {
                                service: t,
                                name: "BodyContent"
                            },
                            _widgetRecordProvider: e,
                            style_dataFetchStatus: v.Model.calculateDataFetchStatus(a.variables._contentClassNameInDataFetchStatus)
                        })), r(a.variables.hasFooterIn, !1, this, function() {
                            return [y.createElement(P, {
                                align: 0,
                                animate: !1,
                                style: "ph-sidebar-sticky-button",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "6"
                                },
                                _widgetRecordProvider: e
                            }, y.createElement(R, {
                                getOwnerSpan: s(function() {
                                    return u.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: s(function() {
                                    return u.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    PrimaryButtonLabel: a.variables.footerInfoIn.primaryButtonLabelAttr,
                                    _primaryButtonLabelInDataFetchStatus: v.Model.calculateDataFetchStatus(a.variables._footerInfoInDataFetchStatus),
                                    HasCustomButton: a.variables.hasCustomButtonIn,
                                    _hasCustomButtonInDataFetchStatus: v.Model.calculateDataFetchStatus(a.variables._hasCustomButtonInDataFetchStatus),
                                    ShouldHideOnDesktop: a.variables.footerInfoIn.shouldHideOnDesktopAttr,
                                    _shouldHideOnDesktopInDataFetchStatus: v.Model.calculateDataFetchStatus(a.variables._footerInfoInDataFetchStatus),
                                    SecondaryButtonLabel: a.variables.footerInfoIn.secondaryButtonLabelAttr,
                                    _secondaryButtonLabelInDataFetchStatus: v.Model.calculateDataFetchStatus(a.variables._footerInfoInDataFetchStatus)
                                },
                                events: {
                                    _handleError: s(function(h) {
                                        d.handleError(h)
                                    }, "_handleError"),
                                    secondaryOnClick$Action: s(function() {
                                        var h = o.clone();
                                        d.secondaryButtonAction$Action(d.callContext(h))
                                    }, "secondaryOnClick$Action"),
                                    primaryOnClick$Action: s(function() {
                                        var h = o.clone();
                                        d.primaryButtonAction$Action(d.callContext(h))
                                    }, "primaryOnClick$Action")
                                },
                                _validationProps: {
                                    validationService: n
                                },
                                _idProps: {
                                    service: t,
                                    uuid: "7",
                                    alias: "3"
                                },
                                _widgetRecordProvider: e,
                                placeholders: {
                                    customButton: new N(function() {
                                        return [y.createElement(g, {
                                            align: 0,
                                            content: u.props.placeholders.customButton,
                                            _idProps: {
                                                service: t,
                                                name: "CustomButton"
                                            },
                                            _widgetRecordProvider: e
                                        })]
                                    })
                                }
                            }))]
                        }, function() {
                            return []
                        })]
                    })
                }
            }))
        }
    };
s(C, "View");
var B = C,
    Ft = B;
export {
    Ft as a
};