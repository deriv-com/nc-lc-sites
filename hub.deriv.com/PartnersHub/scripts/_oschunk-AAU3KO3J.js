import {
    a as Y,
    b as Z,
    c as ee
} from "./_oschunk-7VEVREKX.js";
import {
    b as x
} from "./_oschunk-M6PGXRNF.js";
import {
    b as k
} from "./_oschunk-JIDGT34X.js";
import {
    a as B
} from "./_oschunk-6Y6HK4H4.js";
import {
    a as X
} from "./_oschunk-NR4KXK35.js";
import {
    a as K,
    d as T,
    n as Q,
    s as P
} from "./_oschunk-5HXBKFJV.js";
import {
    a as $
} from "./_oschunk-6WALBPGV.js";
import {
    a as F,
    g as E,
    i as b
} from "./_oschunk-2Q3BG5XZ.js";
import {
    o as m,
    p as w
} from "./_oschunk-FZ6FUHBV.js";
import {
    Zc as R,
    jd as V,
    qd as q,
    rd as j
} from "./_oschunk-5FYEKNKX.js";
import {
    ia as g
} from "./_oschunk-5KJVGEL7.js";
import {
    c as s,
    h as N
} from "./_oschunk-QHO7QY6K.js";
var A = N(F());
var te = {};
var S = g; {
    let a = class a extends S.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, te);
            var i = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
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
                    i = this.idService;
                return S.Logger.startActiveSpan("OnReady", function(r) {
                    return r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "4acb3ddd-8cbc-49df-9625-3ccdd7d0a758"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), S.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("OnReady"), e = t.callContext(e), S.Flow.executeAsyncFlow(function() {
                            return t.setModalId$Action(i.getId("SideModal"), e)
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
            return S.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "4acb3ddd-8cbc-49df-9625-3ccdd7d0a758"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), S.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        get headerLeftButtonAction$Action() {
            return this.hasOwnProperty("_headerLeftButtonAction$Action") || (this._headerLeftButtonAction$Action = function() {
                return Promise.resolve()
            }), this._headerLeftButtonAction$Action
        }
        set headerLeftButtonAction$Action(e) {
            this._headerLeftButtonAction$Action = e
        }
        get secondaryButtonAction$Action() {
            return this.hasOwnProperty("_secondaryButtonAction$Action") || (this._secondaryButtonAction$Action = function() {
                return Promise.resolve()
            }), this._secondaryButtonAction$Action
        }
        set secondaryButtonAction$Action(e) {
            this._secondaryButtonAction$Action = e
        }
        get primaryButtonAction$Action() {
            return this.hasOwnProperty("_primaryButtonAction$Action") || (this._primaryButtonAction$Action = function() {
                return Promise.resolve()
            }), this._primaryButtonAction$Action
        }
        set primaryButtonAction$Action(e) {
            this._primaryButtonAction$Action = e
        }
        get headerRightButtonAction$Action() {
            return this.hasOwnProperty("_headerRightButtonAction$Action") || (this._headerRightButtonAction$Action = function() {
                return Promise.resolve()
            }), this._headerRightButtonAction$Action
        }
        set headerRightButtonAction$Action(e) {
            this._headerRightButtonAction$Action = e
        }
        get setModalId$Action() {
            return this.hasOwnProperty("_setModalId$Action") || (this._setModalId$Action = function() {
                return Promise.resolve()
            }), this._setModalId$Action
        }
        set setModalId$Action(e) {
            this._setModalId$Action = e
        }
        get toggleSidebar$Action() {
            return this.hasOwnProperty("_toggleSidebar$Action") || (this._toggleSidebar$Action = function() {
                return Promise.resolve()
            }), this._toggleSidebar$Action
        }
        set toggleSidebar$Action(e) {
            this._toggleSidebar$Action = e
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
                    i = this.idService;
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
                return controller.handleError(e)
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return w.defaultTimeout
        }
    };
    s(a, "ControllerInner");
    let h = a;
    ne = h
}
var ne, re = new S.Controller.ControllerFactory(ne, $);
var H = N(F());
var ie = {};

function L(h, a, d, e) {
    h.Initialized = a.InitializedHandler, h.OnToggle = a.OnToggleHandler
}
s(L, "default");
var o = g; {
    let a = class a extends o.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, ie);
            var i = this.controller;
            this.clientActionProxies = {
                initializedHandler$Action: s(function(r) {
                    return r = r === void 0 ? "" : r, i.executeActionInsideJSNode(i._initializedHandler$Action.bind(i, o.DataConversion.JSNodeParamConverter.from(r, o.DataTypes.DataTypes.Text)), i.callContext(), function(l) {
                        return {}
                    }, function() {}, "InitializedHandler")
                }, "initializedHandler$Action"),
                onToggleHandler$Action: s(function(r, l) {
                    return r = r === void 0 ? "" : r, l = l === void 0 ? !1 : l, i.executeActionInsideJSNode(i._onToggleHandler$Action.bind(i, o.DataConversion.JSNodeParamConverter.from(r, o.DataTypes.DataTypes.Text), o.DataConversion.JSNodeParamConverter.from(l, o.DataTypes.DataTypes.Boolean)), i.callContext(), function(c) {
                        return {}
                    }, function() {}, "OnToggleHandler")
                }, "onToggleHandler$Action")
            }, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onToggleHandler$Action() {
            return this.hasOwnProperty("__onToggleHandler$Action") || (this.__onToggleHandler$Action = function(e, n, t) {
                var i = this.model,
                    r = this.controller,
                    l = this.idService;
                return o.Logger.startActiveSpan("OnToggleHandler", function(c) {
                    return c && (c.setAttribute("code.function", "OnToggleHandler"), c.setAttribute("outsystems.function.key", "510b2b7c-68cc-4da8-b7a6-034d2407c2aa"), c.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), c.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                        r.ensureControllerAlive("OnToggleHandler"), t = r.callContext(t);
                        var v = new o.DataTypes.VariableHolder(new(r.constructor.getVariableGroupType("OutSystemsUI.Interaction.Sidebar.OnToggleHandler$vars")));
                        return v.value.sidebarIdInLocal = e, v.value.isSidebarOpenInLocal = n, o.Flow.executeAsyncFlow(function() {
                            return r.onToggle$Action(v.value.sidebarIdInLocal, v.value.isSidebarOpenInLocal, t)
                        })
                    }, function() {
                        c && c.end()
                    })
                }, 1)
            }), this.__onToggleHandler$Action
        }
        set _onToggleHandler$Action(e) {
            this.__onToggleHandler$Action = e
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("OnDestroy", function(r) {
                    r && (r.setAttribute("code.function", "OnDestroy"), r.setAttribute("outsystems.function.key", "6f5d90fa-a1d4-4a3c-9e10-c128e430a035"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnDestroy"), e = t.callContext(e), m.sidebarDestroy$Action(n.variables.internalConfigsVar.uniqueIdAttr, e)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(e) {
            this.__onDestroy$Action = e
        }
        get _initializedHandler$Action() {
            return this.hasOwnProperty("__initializedHandler$Action") || (this.__initializedHandler$Action = function(e, n) {
                var t = this.model,
                    i = this.controller,
                    r = this.idService;
                return o.Logger.startActiveSpan("InitializedHandler", function(l) {
                    return l && (l.setAttribute("code.function", "InitializedHandler"), l.setAttribute("outsystems.function.key", "74447a0f-577d-41a7-9f0d-139ad9a6a970"), l.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), l.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                        i.ensureControllerAlive("InitializedHandler"), n = i.callContext(n);
                        var c = new o.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("OutSystemsUI.Interaction.Sidebar.InitializedHandler$vars")));
                        return c.value.sidebarIdInLocal = e, o.Flow.executeAsyncFlow(function() {
                            return i.initialized$Action(c.value.sidebarIdInLocal, n)
                        })
                    }, function() {
                        l && l.end()
                    })
                }, 1)
            }), this.__initializedHandler$Action
        }
        set _initializedHandler$Action(e) {
            this.__initializedHandler$Action = e
        }
        get _registerCallback$Action() {
            return this.hasOwnProperty("__registerCallback$Action") || (this.__registerCallback$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("RegisterCallback", function(r) {
                    r && (r.setAttribute("code.function", "RegisterCallback"), r.setAttribute("outsystems.function.key", "906c4cfb-5d12-4fac-bfe8-12ed6cb7f6d0"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("RegisterCallback"), e = t.callContext(e);
                        var l = new o.DataTypes.VariableHolder;
                        l.value = o.Logger.startActiveSpan("GetCallbackHandlers", function(c) {
                            c && (c.setAttribute("code.function", "GetCallbackHandlers"), c.setAttribute("outsystems.function.key", "16489112-6d1e-42f0-b19a-98486a8f2949"), c.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), c.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(L, "GetCallbackHandlers", "RegisterCallback", {
                                    Initialized: o.DataConversion.JSNodeParamConverter.to(null, o.DataTypes.DataTypes.Object),
                                    OnToggle: o.DataConversion.JSNodeParamConverter.to(null, o.DataTypes.DataTypes.Object)
                                }, function(v) {
                                    var u = new(t.constructor.getVariableGroupType("OutSystemsUI.Interaction.Sidebar.RegisterCallback$getCallbackHandlersJSResult"));
                                    return u.initializedOut = o.DataConversion.JSNodeParamConverter.from(v.Initialized, o.DataTypes.DataTypes.Object), u.onToggleOut = o.DataConversion.JSNodeParamConverter.from(v.OnToggle, o.DataTypes.DataTypes.Object), u
                                }, {
                                    InitializedHandler: t.clientActionProxies.initializedHandler$Action,
                                    OnToggleHandler: t.clientActionProxies.onToggleHandler$Action
                                }, {})
                            } finally {
                                c && c.end()
                            }
                        }, 1), m.sidebarRegisterCallback$Action(n.variables.internalConfigsVar.uniqueIdAttr, "Initialized", l.value.initializedOut, e), m.sidebarRegisterCallback$Action(n.variables.internalConfigsVar.uniqueIdAttr, "OnToggle", l.value.onToggleOut, e)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__registerCallback$Action
        }
        set _registerCallback$Action(e) {
            this.__registerCallback$Action = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("OnInitialize", function(r) {
                    r && (r.setAttribute("code.function", "OnInitialize"), r.setAttribute("outsystems.function.key", "b7a6efcc-5270-4ea2-af52-d01d2ef558b1"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e);
                        var l = new o.DataTypes.VariableHolder,
                            c = new o.DataTypes.VariableHolder(new o.DataTypes.JSONSerializeOutputType);
                        m.logEvent$Action(V.logType.general, "Going to create Sidebar", e), l.value = m.generateUniqueId$Action(n.variables.internalConfigsVar.uniqueIdAttr, e), n.variables.internalConfigsVar.uniqueIdAttr = l.value.unique_IDOut, n.variables.internalConfigsVar.startsOpenAttr = n.variables.startsOpenIn, n.variables.internalConfigsVar.extendedClassAttr = n.variables.extendedClassIn, n.variables.internalConfigsVar.directionAttr = n.variables.directionIn, n.variables.internalConfigsVar.widthAttr = n.variables.widthIn, n.variables.internalConfigsVar.hasOverlayAttr = n.variables.hasOverlayIn, c.value.jSONOut = o.JSONUtils.serializeToJSON(n.variables.internalConfigsVar, !0, !1), m.sidebarCreate$Action(n.variables.internalConfigsVar.uniqueIdAttr, c.value.jSONOut, e), t._registerCallback$Action(e)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("OnReady", function(r) {
                    r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "c6021e96-f45c-468e-8681-c1926c06d0ed"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e), m.sidebarInitialize$Action(n.variables.internalConfigsVar.uniqueIdAttr, e), m.logEvent$Action(V.logType.general, "Sidebar created", e)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("OnParametersChanged", function(r) {
                    r && (r.setAttribute("code.function", "OnParametersChanged"), r.setAttribute("outsystems.function.key", "ff0bbc89-1e1f-440d-ad0b-7c2a0cce3350"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnParametersChanged"), e = t.callContext(e), n.variables.internalConfigsVar.startsOpenAttr !== n.variables.startsOpenIn && (n.variables.internalConfigsVar.startsOpenAttr = n.variables.startsOpenIn, m.sidebarChangeBooleanProperty$Action(n.variables.internalConfigsVar.uniqueIdAttr, "StartsOpen", n.variables.internalConfigsVar.startsOpenAttr, e)), n.variables.internalConfigsVar.directionAttr !== n.variables.directionIn && (n.variables.internalConfigsVar.directionAttr = n.variables.directionIn, m.sidebarChangeTextProperty$Action(n.variables.internalConfigsVar.uniqueIdAttr, "Direction", n.variables.internalConfigsVar.directionAttr, e)), n.variables.internalConfigsVar.widthAttr !== n.variables.widthIn && (n.variables.internalConfigsVar.widthAttr = n.variables.widthIn, m.sidebarChangeTextProperty$Action(n.variables.internalConfigsVar.uniqueIdAttr, "Width", n.variables.internalConfigsVar.widthAttr, e)), n.variables.internalConfigsVar.hasOverlayAttr !== n.variables.hasOverlayIn && (n.variables.internalConfigsVar.hasOverlayAttr = n.variables.hasOverlayIn, m.sidebarChangeBooleanProperty$Action(n.variables.internalConfigsVar.uniqueIdAttr, "HasOverlay", n.variables.internalConfigsVar.hasOverlayAttr, e)), n.variables.internalConfigsVar.extendedClassAttr !== n.variables.extendedClassIn && (n.variables.internalConfigsVar.extendedClassAttr = n.variables.extendedClassIn, m.sidebarChangeTextProperty$Action(n.variables.internalConfigsVar.uniqueIdAttr, "ExtendedClass", n.variables.internalConfigsVar.extendedClassAttr, e))
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(e) {
            this.__onParametersChanged$Action = e
        }
        onToggleHandler$Action(e, n, t) {
            var i = this.controller;
            return o.Logger.startActiveSpan("OnToggleHandler__proxy", function(r) {
                return r && (r.setAttribute("code.function", "OnToggleHandler"), r.setAttribute("outsystems.function.key", "510b2b7c-68cc-4da8-b7a6-034d2407c2aa"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._onToggleHandler$Action, t, e, n)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        onDestroy$Action(e) {
            var n = this.controller;
            return o.Logger.startActiveSpan("OnDestroy__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnDestroy"), t.setAttribute("outsystems.function.key", "6f5d90fa-a1d4-4a3c-9e10-c128e430a035"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onDestroy$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        initializedHandler$Action(e, n) {
            var t = this.controller;
            return o.Logger.startActiveSpan("InitializedHandler__proxy", function(i) {
                return i && (i.setAttribute("code.function", "InitializedHandler"), i.setAttribute("outsystems.function.key", "74447a0f-577d-41a7-9f0d-139ad9a6a970"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._initializedHandler$Action, n, e)
                }, function() {
                    i && i.end()
                })
            }, 0)
        }
        registerCallback$Action(e) {
            var n = this.controller;
            return o.Logger.startActiveSpan("RegisterCallback__proxy", function(t) {
                t && (t.setAttribute("code.function", "RegisterCallback"), t.setAttribute("outsystems.function.key", "906c4cfb-5d12-4fac-bfe8-12ed6cb7f6d0"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._registerCallback$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onInitialize$Action(e) {
            var n = this.controller;
            return o.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "b7a6efcc-5270-4ea2-af52-d01d2ef558b1"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onInitialize$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var n = this.controller;
            return o.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "c6021e96-f45c-468e-8681-c1926c06d0ed"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onReady$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onParametersChanged$Action(e) {
            var n = this.controller;
            return o.Logger.startActiveSpan("OnParametersChanged__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnParametersChanged"), t.setAttribute("outsystems.function.key", "ff0bbc89-1e1f-440d-ad0b-7c2a0cce3350"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onParametersChanged$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get onToggle$Action() {
            return this.hasOwnProperty("_onToggle$Action") || (this._onToggle$Action = function() {
                return Promise.resolve()
            }), this._onToggle$Action
        }
        set onToggle$Action(e) {
            this._onToggle$Action = e
        }
        get initialized$Action() {
            return this.hasOwnProperty("_initialized$Action") || (this._initialized$Action = function() {
                return Promise.resolve()
            }), this._initialized$Action
        }
        set initialized$Action(e) {
            this._initialized$Action = e
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var n = this.controller,
                    t = this.model,
                    i = this.idService;
                return n.onInitialize$Action(e)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var n = this.controller,
                    t = this.model,
                    i = this.idService;
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
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = function(e) {
                var n = this.controller,
                    t = this.model,
                    i = this.idService;
                return n.onDestroy$Action(e)
            }), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(e) {
            this._onDestroyEventHandler = e
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = function(e) {
                var n = this.controller,
                    t = this.model,
                    i = this.idService;
                return n.onParametersChanged$Action(e)
            }), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(e) {
            this._onParametersChangedEventHandler = e
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
            return m.defaultTimeout
        }
    };
    s(a, "ControllerInner");
    let h = a;
    p = h, p.registerVariableGroupType("OutSystemsUI.Interaction.Sidebar.OnToggleHandler$vars", [{
        name: "SidebarId",
        attrName: "sidebarIdInLocal",
        mandatory: !0,
        dataType: o.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "IsSidebarOpen",
        attrName: "isSidebarOpenInLocal",
        mandatory: !0,
        dataType: o.DataTypes.DataTypes.Boolean,
        defaultValue: s(function() {
            return !1
        }, "defaultValue")
    }]), p.registerVariableGroupType("OutSystemsUI.Interaction.Sidebar.InitializedHandler$vars", [{
        name: "SidebarId",
        attrName: "sidebarIdInLocal",
        mandatory: !0,
        dataType: o.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }]), p.registerVariableGroupType("OutSystemsUI.Interaction.Sidebar.RegisterCallback$getCallbackHandlersJSResult", [{
        name: "Initialized",
        attrName: "initializedOut",
        mandatory: !0,
        dataType: o.DataTypes.DataTypes.Object,
        defaultValue: s(function() {
            return null
        }, "defaultValue")
    }, {
        name: "OnToggle",
        attrName: "onToggleOut",
        mandatory: !0,
        dataType: o.DataTypes.DataTypes.Object,
        defaultValue: s(function() {
            return null
        }, "defaultValue")
    }])
}
var p, oe = new o.Controller.ControllerFactory(p, X);
var Fe = b.PlaceholderContent,
    Be = b.IteratorPlaceholderContent,
    C = class C extends E.BaseWebBlock {
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
            return Y
        }
        get controllerFactory() {
            return oe
        }
        get title() {
            return ""
        }
        internalRender() {
            let a = this.model,
                d = this.controller,
                e = this.idService,
                n = d.validationService,
                t = this.widgetsRecordProvider,
                i = d.callContext(),
                r = C.ifWidget,
                l = C.textWidget,
                c = C.asPrimitiveValue,
                v = C.getTranslation,
                u = this;
            return H.createElement("div", this.getRootNodeProperties(), r(!1, !1, this, function() {
                return []
            }, function() {
                return [H.createElement(K, {
                    extendedProperties: {
                        className: "osui-sidebar",
                        name: a.variables.internalConfigsVar.uniqueIdAttr
                    },
                    tag: "aside",
                    _idProps: {
                        service: e,
                        name: "Sidebar"
                    },
                    _widgetRecordProvider: t
                }, H.createElement(P, {
                    align: 0,
                    content: u.props.placeholders.header,
                    style: "osui-sidebar__header ph",
                    _idProps: {
                        service: e,
                        name: "Header"
                    },
                    _widgetRecordProvider: t
                }), H.createElement(P, {
                    align: 0,
                    content: u.props.placeholders.content,
                    style: "osui-sidebar__content ph",
                    _idProps: {
                        service: e,
                        name: "Content"
                    },
                    _widgetRecordProvider: t
                }))]
            }))
        }
    };
s(C, "View");
var z = C,
    U = z;
var _ = g,
    W = b.PlaceholderContent,
    Ke = b.IteratorPlaceholderContent,
    I = class I extends E.BaseWebBlock {
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
            return [U, k, x]
        }
        get modelFactory() {
            return Z
        }
        get controllerFactory() {
            return re
        }
        get title() {
            return ""
        }
        internalRender() {
            let a = this.model,
                d = this.controller,
                e = this.idService,
                n = d.validationService,
                t = this.widgetsRecordProvider,
                i = d.callContext(),
                r = I.ifWidget,
                l = I.textWidget,
                c = I.asPrimitiveValue,
                v = I.getTranslation,
                u = this;
            return A.createElement("div", this.getRootNodeProperties(), A.createElement(U, {
                getOwnerSpan: s(function() {
                    return u.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return u.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Width: "",
                    HasOverlay: !0,
                    ExtendedClass: "ph-filter-sidebar",
                    StartsOpen: !1
                },
                events: {
                    _handleError: s(function(f) {
                        d.handleError(f)
                    }, "_handleError"),
                    onToggle$Action: s(function(f, de) {
                        var ue = i.clone();
                        d.toggleSidebar$Action(a.variables.isSidebarOpenIn, de, d.callContext(ue))
                    }, "onToggle$Action")
                },
                _validationProps: {
                    validationService: n
                },
                _idProps: {
                    service: e,
                    name: "SideModal",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    header: new W(function() {
                        return [A.createElement(T, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "1"
                            },
                            _widgetRecordProvider: t
                        }, A.createElement(k, {
                            getOwnerSpan: s(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: s(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Title: a.variables.headerInfoIn.titleAttr,
                                _titleInDataFetchStatus: _.Model.calculateDataFetchStatus(a.variables._headerInfoInDataFetchStatus),
                                ShowLeftButton: a.variables.headerInfoIn.showLeftButtonAttr,
                                _showLeftButtonInDataFetchStatus: _.Model.calculateDataFetchStatus(a.variables._headerInfoInDataFetchStatus),
                                CustomRightIcon: a.variables.headerInfoIn.customRightIconAttr,
                                _customRightIconInDataFetchStatus: _.Model.calculateDataFetchStatus(a.variables._headerInfoInDataFetchStatus),
                                ShowRightButton: a.variables.headerInfoIn.showRightButtonAttr,
                                _showRightButtonInDataFetchStatus: _.Model.calculateDataFetchStatus(a.variables._headerInfoInDataFetchStatus)
                            },
                            events: {
                                _handleError: s(function(f) {
                                    d.handleError(f)
                                }, "_handleError"),
                                rightButtonAction$Action: s(function() {
                                    var f = i.clone();
                                    d.headerRightButtonAction$Action(d.callContext(f))
                                }, "rightButtonAction$Action"),
                                leftButtonAction$Action: s(function() {
                                    var f = i.clone();
                                    d.headerLeftButtonAction$Action(d.callContext(f))
                                }, "leftButtonAction$Action")
                            },
                            _validationProps: {
                                validationService: n
                            },
                            _idProps: {
                                service: e,
                                uuid: "2",
                                alias: "2"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        }))]
                    }),
                    content: new W(function() {
                        return [A.createElement(T, {
                            align: 0,
                            animate: !1,
                            style: "ph-sidebar-content-container",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "SidebarContentContainer"
                            },
                            _widgetRecordProvider: t
                        }, A.createElement(P, {
                            align: 0,
                            content: u.props.placeholders.bodyContent,
                            style: a.variables.contentClassNameIn,
                            _idProps: {
                                service: e,
                                name: "BodyContent"
                            },
                            _widgetRecordProvider: t,
                            style_dataFetchStatus: _.Model.calculateDataFetchStatus(a.variables._contentClassNameInDataFetchStatus)
                        })), r(a.variables.hasFooterIn, !1, this, function() {
                            return [A.createElement(T, {
                                align: 0,
                                animate: !1,
                                style: "ph-sidebar-sticky-button",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "5"
                                },
                                _widgetRecordProvider: t
                            }, A.createElement(x, {
                                getOwnerSpan: s(function() {
                                    return u.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: s(function() {
                                    return u.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    PrimaryButtonLabel: a.variables.footerInfoIn.primaryButtonLabelAttr,
                                    _primaryButtonLabelInDataFetchStatus: _.Model.calculateDataFetchStatus(a.variables._footerInfoInDataFetchStatus),
                                    HasCustomButton: a.variables.hasCustomButtonIn,
                                    _hasCustomButtonInDataFetchStatus: _.Model.calculateDataFetchStatus(a.variables._hasCustomButtonInDataFetchStatus),
                                    ShouldHideOnDesktop: a.variables.footerInfoIn.shouldHideOnDesktopAttr,
                                    _shouldHideOnDesktopInDataFetchStatus: _.Model.calculateDataFetchStatus(a.variables._footerInfoInDataFetchStatus),
                                    SecondaryButtonLabel: a.variables.footerInfoIn.secondaryButtonLabelAttr,
                                    _secondaryButtonLabelInDataFetchStatus: _.Model.calculateDataFetchStatus(a.variables._footerInfoInDataFetchStatus)
                                },
                                events: {
                                    _handleError: s(function(f) {
                                        d.handleError(f)
                                    }, "_handleError"),
                                    secondaryOnClick$Action: s(function() {
                                        var f = i.clone();
                                        d.secondaryButtonAction$Action(d.callContext(f))
                                    }, "secondaryOnClick$Action"),
                                    primaryOnClick$Action: s(function() {
                                        var f = i.clone();
                                        d.primaryButtonAction$Action(d.callContext(f))
                                    }, "primaryOnClick$Action")
                                },
                                _validationProps: {
                                    validationService: n
                                },
                                _idProps: {
                                    service: e,
                                    uuid: "6",
                                    alias: "3"
                                },
                                _widgetRecordProvider: t,
                                placeholders: {
                                    customButton: new W(function() {
                                        return [A.createElement(P, {
                                            align: 0,
                                            content: u.props.placeholders.customButton,
                                            _idProps: {
                                                service: e,
                                                name: "CustomButton"
                                            },
                                            _widgetRecordProvider: t
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
s(I, "View");
var M = I,
    Qe = M;
var D = N(F());
var ce = {};
var y = g; {
    let a = class a extends y.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, ce);
            var i = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get getImage$ServerAction() {
            return this.hasOwnProperty("_getImage$ServerAction") || (this._getImage$ServerAction = function(e, n) {
                var t = this.controller;
                return y.Logger.startActiveSpan("GetImage", function(i) {
                    return i && (i.setAttribute("code.function", "GetImage"), i.setAttribute("outsystems.function.key", "e685222a-663e-4f5c-820d-16fd548ee409"), i.setAttribute("outsystems.function.owner.name", "PartnersHub"), i.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), i.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), y.Flow.tryFinally(function() {
                        var r = {
                            BucketObject: y.DataConversion.ServerDataConverter.to(e, y.DataTypes.DataTypes.Record)
                        };
                        return t.callServerAction("GetImage", "screenservices/PartnersHub/Events/EventBannerImage/ActionGetImage", "ULoHOeBreyU_Ww8a99xVaw", r, t.callContext(n), void 0, void 0, !0).then(function(l) {
                            var c = new(t.constructor.getVariableGroupType("PartnersHub.Events.EventBannerImage$ActionGetImage"));
                            return c.eventImagesOut = y.DataConversion.ServerDataConverter.from(l.EventImages, R), c
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 0)
            }), this._getImage$ServerAction
        }
        set getImage$ServerAction(e) {
            this._getImage$ServerAction = e
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
                    i = this.idService;
                return y.Logger.startActiveSpan("OnReady", function(r) {
                    return r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "9c87b409-78ec-49ba-908b-4668c0c0b2b4"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), y.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var l = new y.DataTypes.VariableHolder;
                        return y.Flow.executeAsyncFlow(function() {
                            return n.flush(), t.getImage$ServerAction(function() {
                                var c = new j;
                                return c.idAttr = n.variables.eventDetailsIn.idAttr, c.fileNamesAttr = function() {
                                    var v = new q;
                                    return v.desktopImageNameAttr = n.variables.eventDetailsIn.fileNamesAttr.desktopImageNameAttr, v.mobileImageNameAttr = n.variables.eventDetailsIn.fileNamesAttr.mobileImageNameAttr, v
                                }(), c
                            }(), e).then(function(c) {
                                l.value = c
                            }).then(function() {
                                n.variables.eventImagesVar = l.value.eventImagesOut, n.variables.isLoadingVar = !1
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
            return y.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "9c87b409-78ec-49ba-908b-4668c0c0b2b4"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), y.Flow.tryFinally(function() {
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
                    i = this.idService;
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
                return controller.handleError(e)
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return w.defaultTimeout
        }
    };
    s(a, "ControllerInner");
    let h = a;
    G = h, G.registerVariableGroupType("PartnersHub.Events.EventBannerImage$ActionGetImage", [{
        name: "EventImages",
        attrName: "eventImagesOut",
        mandatory: !1,
        dataType: y.DataTypes.DataTypes.Record,
        defaultValue: s(function() {
            return new R
        }, "defaultValue"),
        complexType: R
    }])
}
var G, le = new y.Controller.ControllerFactory(G, $);
var me = b.PlaceholderContent,
    gt = b.IteratorPlaceholderContent,
    O = class O extends E.BaseWebBlock {
        static get displayName() {
            return "Events.EventBannerImage"
        }
        static getAttributes() {
            return {
                codeFunction: "EventBannerImage",
                functionKey: "0eee1dbe-5cb3-43bc-b84b-c57a97a31b50",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Events.EventBannerImage.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [B]
        }
        get modelFactory() {
            return ee
        }
        get controllerFactory() {
            return le
        }
        get title() {
            return ""
        }
        internalRender() {
            let a = this.model,
                d = this.controller,
                e = this.idService,
                n = d.validationService,
                t = this.widgetsRecordProvider,
                i = d.callContext(),
                r = O.ifWidget,
                l = O.textWidget,
                c = O.asPrimitiveValue,
                v = O.getTranslation,
                u = this;
            return D.createElement("div", this.getRootNodeProperties(), D.createElement(B, {
                getOwnerSpan: s(function() {
                    return u.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return u.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    IsLoading: a.variables.isLoadingVar,
                    ClassName: "ph-event-image",
                    SkeletonHeight: "154px"
                },
                events: {
                    _handleError: s(function(f) {
                        d.handleError(f)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: n
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    content: new me(function() {
                        return [D.createElement(Q, {
                            imageContent: a.variables.eventImagesVar.mobileImageAttr,
                            style: "ph-event-card-image",
                            type: 2,
                            _idProps: {
                                service: e,
                                uuid: "1"
                            },
                            _widgetRecordProvider: t
                        })]
                    })
                },
                _dependencies: [c(a.variables.eventImagesVar.mobileImageAttr)]
            }))
        }
    };
s(O, "View");
var J = O,
    At = J;
export {
    Qe as a, At as b
};