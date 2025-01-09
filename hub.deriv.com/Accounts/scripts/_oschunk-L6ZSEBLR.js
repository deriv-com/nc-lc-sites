import {
    a as O
} from "./_oschunk-ZP2LGY5A.js";
import {
    a as ee,
    b as te,
    c as ne
} from "./_oschunk-3XYEQKDO.js";
import "./_oschunk-5LFNVMPX.js";
import {
    a as re
} from "./_oschunk-SXCMGN7O.js";
import {
    a as B
} from "./_oschunk-4KQJW2FJ.js";
import "./_oschunk-IBUKHOCS.js";
import "./_oschunk-7TZ3KR6K.js";
import {
    a as J
} from "./_oschunk-FNNSC7KD.js";
import {
    a as W
} from "./_oschunk-FSPIWF67.js";
import "./_oschunk-FSWTA5WV.js";
import "./_oschunk-VZCHS3W5.js";
import "./_oschunk-ENDX3VJY.js";
import {
    a as C
} from "./_oschunk-FTYAL2B7.js";
import {
    a as F,
    b as Z
} from "./_oschunk-GPNNXU3M.js";
import {
    a as X,
    d as T,
    p as z,
    r as U
} from "./_oschunk-M2CKCDBB.js";
import "./_oschunk-FX7ZCYVH.js";
import {
    a as Q
} from "./_oschunk-NQZZDANH.js";
import {
    a as x,
    g as P,
    i as b
} from "./_oschunk-WZHUAZJP.js";
import "./_oschunk-Q6J66ALP.js";
import "./_oschunk-YIVLIJ7Z.js";
import "./_oschunk-NRRLMT6C.js";
import "./_oschunk-XBVY76NY.js";
import "./_oschunk-V2VV7FMU.js";
import "./_oschunk-TGM73NNA.js";
import "./_oschunk-4PNSWRUJ.js";
import "./_oschunk-BTXBTSZ3.js";
import "./_oschunk-5MMGFCSA.js";
import "./_oschunk-ZHFHVHFO.js";
import "./_oschunk-P7KMMADX.js";
import {
    a as k,
    m,
    o as D
} from "./_oschunk-KZFTAIEG.js";
import {
    Eg as L
} from "./_oschunk-UATY3RVV.js";
import {
    ia as p
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as r,
    h as V
} from "./_oschunk-QHO7QY6K.js";
var _ = V(x());
var v = V(x());
var f = p; {
    let y = class y extends f.Controller.BaseViewController {
        constructor(e, t, n) {
            super(e, t, n);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _verificationListItemSelectedItem$Action() {
            return this.hasOwnProperty("__verificationListItemSelectedItem$Action") || (this.__verificationListItemSelectedItem$Action = function(e, t) {
                var n = this.model,
                    o = this.controller,
                    i = this.idService;
                return f.Logger.startActiveSpan("VerificationListItemSelectedItem", function(d) {
                    d && (d.setAttribute("code.function", "VerificationListItemSelectedItem"), d.setAttribute("outsystems.function.key", "11d81f54-32e0-46a4-bc69-4370ac3e9de1"), d.setAttribute("outsystems.function.owner.name", "Accounts"), d.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), d.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("VerificationListItemSelectedItem"), t = o.callContext(t);
                        var u = new f.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("Accounts.Security.SecurityItems.VerificationListItemSelectedItem$vars")));
                        u.value.refInLocal = e;
                        var g = new f.DataTypes.VariableHolder;
                        if (u.value.refInLocal === "loginhistory") return f.Navigation.navigateTo(f.Navigation.generateScreenURL("Accounts", "LoginHistory", {}), f.Transitions.createTransition(f.Transitions.TransitionAnimation.Default), t, !0);
                        if (u.value.refInLocal === "passkeys") return f.Navigation.navigateTo(f.Navigation.generateScreenURL("Accounts", "Passkeys", {}), f.Transitions.createTransition(f.Transitions.TransitionAnimation.Default), t, !0);
                        if (u.value.refInLocal === "2fa")
                            if (m.isDesktop$Action(t).isDesktopOut) g.value = m.sidebarOpen$Action(i.getId("TwoFaSidebar"), t);
                            else return f.Navigation.navigateTo(f.Navigation.generateScreenURL("Accounts", "TwoFactorAuthentication", {}), f.Transitions.createTransition(f.Transitions.TransitionAnimation.Default), t, !0)
                    } finally {
                        d && d.end()
                    }
                }, 1)
            }), this.__verificationListItemSelectedItem$Action
        }
        set _verificationListItemSelectedItem$Action(e) {
            this.__verificationListItemSelectedItem$Action = e
        }
        verificationListItemSelectedItem$Action(e, t) {
            var n = this.controller;
            return f.Logger.startActiveSpan("VerificationListItemSelectedItem__proxy", function(o) {
                o && (o.setAttribute("code.function", "VerificationListItemSelectedItem"), o.setAttribute("outsystems.function.key", "11d81f54-32e0-46a4-bc69-4370ac3e9de1"), o.setAttribute("outsystems.function.owner.name", "Accounts"), o.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._verificationListItemSelectedItem$Action, t, e)
                } finally {
                    o && o.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = null), this._onReadyEventHandler
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
            return D.defaultTimeout
        }
    };
    r(y, "ControllerInner");
    let A = y;
    G = A, G.registerVariableGroupType("Accounts.Security.SecurityItems.VerificationListItemSelectedItem$vars", [{
        name: "Ref",
        attrName: "refInLocal",
        mandatory: !0,
        dataType: f.DataTypes.DataTypes.Text,
        defaultValue: r(function() {
            return ""
        }, "defaultValue")
    }])
}
var G, ie = new f.Controller.ControllerFactory(G, Q);
var H = V(x());
var oe = {};

function M(A, y, l, e) {
    A.Initialized = y.InitializedHandler, A.OnToggle = y.OnToggleHandler
}
r(M, "default");
var a = p; {
    let y = class y extends a.Controller.BaseViewController {
        constructor(e, t, n) {
            super(e, t, n, oe);
            var o = this.controller;
            this.clientActionProxies = {
                initializedHandler$Action: r(function(i) {
                    return i = i === void 0 ? "" : i, o.executeActionInsideJSNode(o._initializedHandler$Action.bind(o, a.DataConversion.JSNodeParamConverter.from(i, a.DataTypes.DataTypes.Text)), o.callContext(), function(d) {
                        return {}
                    }, function() {}, "InitializedHandler")
                }, "initializedHandler$Action"),
                onToggleHandler$Action: r(function(i, d) {
                    return i = i === void 0 ? "" : i, d = d === void 0 ? !1 : d, o.executeActionInsideJSNode(o._onToggleHandler$Action.bind(o, a.DataConversion.JSNodeParamConverter.from(i, a.DataTypes.DataTypes.Text), a.DataConversion.JSNodeParamConverter.from(d, a.DataTypes.DataTypes.Boolean)), o.callContext(), function(u) {
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
            return this.hasOwnProperty("__onToggleHandler$Action") || (this.__onToggleHandler$Action = function(e, t, n) {
                var o = this.model,
                    i = this.controller,
                    d = this.idService;
                return a.Logger.startActiveSpan("OnToggleHandler", function(u) {
                    return u && (u.setAttribute("code.function", "OnToggleHandler"), u.setAttribute("outsystems.function.key", "510b2b7c-68cc-4da8-b7a6-034d2407c2aa"), u.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), u.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                        i.ensureControllerAlive("OnToggleHandler"), n = i.callContext(n);
                        var g = new a.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("OutSystemsUI.Interaction.Sidebar.OnToggleHandler$vars")));
                        return g.value.sidebarIdInLocal = e, g.value.isSidebarOpenInLocal = t, a.Flow.executeAsyncFlow(function() {
                            return i.onToggle$Action(g.value.sidebarIdInLocal, g.value.isSidebarOpenInLocal, n)
                        })
                    }, function() {
                        u && u.end()
                    })
                }, 1)
            }), this.__onToggleHandler$Action
        }
        set _onToggleHandler$Action(e) {
            this.__onToggleHandler$Action = e
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(e) {
                var t = this.model,
                    n = this.controller,
                    o = this.idService;
                return a.Logger.startActiveSpan("OnDestroy", function(i) {
                    i && (i.setAttribute("code.function", "OnDestroy"), i.setAttribute("outsystems.function.key", "6f5d90fa-a1d4-4a3c-9e10-c128e430a035"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("OnDestroy"), e = n.callContext(e), m.sidebarDestroy$Action(t.variables.internalConfigsVar.uniqueIdAttr, e)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(e) {
            this.__onDestroy$Action = e
        }
        get _initializedHandler$Action() {
            return this.hasOwnProperty("__initializedHandler$Action") || (this.__initializedHandler$Action = function(e, t) {
                var n = this.model,
                    o = this.controller,
                    i = this.idService;
                return a.Logger.startActiveSpan("InitializedHandler", function(d) {
                    return d && (d.setAttribute("code.function", "InitializedHandler"), d.setAttribute("outsystems.function.key", "74447a0f-577d-41a7-9f0d-139ad9a6a970"), d.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), d.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), d.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                        o.ensureControllerAlive("InitializedHandler"), t = o.callContext(t);
                        var u = new a.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("OutSystemsUI.Interaction.Sidebar.InitializedHandler$vars")));
                        return u.value.sidebarIdInLocal = e, a.Flow.executeAsyncFlow(function() {
                            return o.initialized$Action(u.value.sidebarIdInLocal, t)
                        })
                    }, function() {
                        d && d.end()
                    })
                }, 1)
            }), this.__initializedHandler$Action
        }
        set _initializedHandler$Action(e) {
            this.__initializedHandler$Action = e
        }
        get _registerCallback$Action() {
            return this.hasOwnProperty("__registerCallback$Action") || (this.__registerCallback$Action = function(e) {
                var t = this.model,
                    n = this.controller,
                    o = this.idService;
                return a.Logger.startActiveSpan("RegisterCallback", function(i) {
                    i && (i.setAttribute("code.function", "RegisterCallback"), i.setAttribute("outsystems.function.key", "906c4cfb-5d12-4fac-bfe8-12ed6cb7f6d0"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("RegisterCallback"), e = n.callContext(e);
                        var d = new a.DataTypes.VariableHolder;
                        d.value = a.Logger.startActiveSpan("GetCallbackHandlers", function(u) {
                            u && (u.setAttribute("code.function", "GetCallbackHandlers"), u.setAttribute("outsystems.function.key", "16489112-6d1e-42f0-b19a-98486a8f2949"), u.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), u.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), u.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return n.safeExecuteJSNode(M, "GetCallbackHandlers", "RegisterCallback", {
                                    Initialized: a.DataConversion.JSNodeParamConverter.to(null, a.DataTypes.DataTypes.Object),
                                    OnToggle: a.DataConversion.JSNodeParamConverter.to(null, a.DataTypes.DataTypes.Object)
                                }, function(g) {
                                    var c = new(n.constructor.getVariableGroupType("OutSystemsUI.Interaction.Sidebar.RegisterCallback$getCallbackHandlersJSResult"));
                                    return c.initializedOut = a.DataConversion.JSNodeParamConverter.from(g.Initialized, a.DataTypes.DataTypes.Object), c.onToggleOut = a.DataConversion.JSNodeParamConverter.from(g.OnToggle, a.DataTypes.DataTypes.Object), c
                                }, {
                                    InitializedHandler: n.clientActionProxies.initializedHandler$Action,
                                    OnToggleHandler: n.clientActionProxies.onToggleHandler$Action
                                }, {})
                            } finally {
                                u && u.end()
                            }
                        }, 1), m.sidebarRegisterCallback$Action(t.variables.internalConfigsVar.uniqueIdAttr, "Initialized", d.value.initializedOut, e), m.sidebarRegisterCallback$Action(t.variables.internalConfigsVar.uniqueIdAttr, "OnToggle", d.value.onToggleOut, e)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__registerCallback$Action
        }
        set _registerCallback$Action(e) {
            this.__registerCallback$Action = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var t = this.model,
                    n = this.controller,
                    o = this.idService;
                return a.Logger.startActiveSpan("OnInitialize", function(i) {
                    i && (i.setAttribute("code.function", "OnInitialize"), i.setAttribute("outsystems.function.key", "b7a6efcc-5270-4ea2-af52-d01d2ef558b1"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("OnInitialize"), e = n.callContext(e);
                        var d = new a.DataTypes.VariableHolder,
                            u = new a.DataTypes.VariableHolder(new a.DataTypes.JSONSerializeOutputType);
                        m.logEvent$Action(L.logType.general, "Going to create Sidebar", e), d.value = m.generateUniqueId$Action(t.variables.internalConfigsVar.uniqueIdAttr, e), t.variables.internalConfigsVar.uniqueIdAttr = d.value.unique_IDOut, t.variables.internalConfigsVar.startsOpenAttr = t.variables.startsOpenIn, t.variables.internalConfigsVar.extendedClassAttr = t.variables.extendedClassIn, t.variables.internalConfigsVar.directionAttr = t.variables.directionIn, t.variables.internalConfigsVar.widthAttr = t.variables.widthIn, t.variables.internalConfigsVar.hasOverlayAttr = t.variables.hasOverlayIn, u.value.jSONOut = a.JSONUtils.serializeToJSON(t.variables.internalConfigsVar, !0, !1), m.sidebarCreate$Action(t.variables.internalConfigsVar.uniqueIdAttr, u.value.jSONOut, e), n._registerCallback$Action(e)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var t = this.model,
                    n = this.controller,
                    o = this.idService;
                return a.Logger.startActiveSpan("OnReady", function(i) {
                    i && (i.setAttribute("code.function", "OnReady"), i.setAttribute("outsystems.function.key", "c6021e96-f45c-468e-8681-c1926c06d0ed"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("OnReady"), e = n.callContext(e), m.sidebarInitialize$Action(t.variables.internalConfigsVar.uniqueIdAttr, e), m.logEvent$Action(L.logType.general, "Sidebar created", e)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(e) {
                var t = this.model,
                    n = this.controller,
                    o = this.idService;
                return a.Logger.startActiveSpan("OnParametersChanged", function(i) {
                    i && (i.setAttribute("code.function", "OnParametersChanged"), i.setAttribute("outsystems.function.key", "ff0bbc89-1e1f-440d-ad0b-7c2a0cce3350"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("OnParametersChanged"), e = n.callContext(e), t.variables.internalConfigsVar.startsOpenAttr !== t.variables.startsOpenIn && (t.variables.internalConfigsVar.startsOpenAttr = t.variables.startsOpenIn, m.sidebarChangeBooleanProperty$Action(t.variables.internalConfigsVar.uniqueIdAttr, "StartsOpen", t.variables.internalConfigsVar.startsOpenAttr, e)), t.variables.internalConfigsVar.directionAttr !== t.variables.directionIn && (t.variables.internalConfigsVar.directionAttr = t.variables.directionIn, m.sidebarChangeTextProperty$Action(t.variables.internalConfigsVar.uniqueIdAttr, "Direction", t.variables.internalConfigsVar.directionAttr, e)), t.variables.internalConfigsVar.widthAttr !== t.variables.widthIn && (t.variables.internalConfigsVar.widthAttr = t.variables.widthIn, m.sidebarChangeTextProperty$Action(t.variables.internalConfigsVar.uniqueIdAttr, "Width", t.variables.internalConfigsVar.widthAttr, e)), t.variables.internalConfigsVar.hasOverlayAttr !== t.variables.hasOverlayIn && (t.variables.internalConfigsVar.hasOverlayAttr = t.variables.hasOverlayIn, m.sidebarChangeBooleanProperty$Action(t.variables.internalConfigsVar.uniqueIdAttr, "HasOverlay", t.variables.internalConfigsVar.hasOverlayAttr, e)), t.variables.internalConfigsVar.extendedClassAttr !== t.variables.extendedClassIn && (t.variables.internalConfigsVar.extendedClassAttr = t.variables.extendedClassIn, m.sidebarChangeTextProperty$Action(t.variables.internalConfigsVar.uniqueIdAttr, "ExtendedClass", t.variables.internalConfigsVar.extendedClassAttr, e))
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(e) {
            this.__onParametersChanged$Action = e
        }
        onToggleHandler$Action(e, t, n) {
            var o = this.controller;
            return a.Logger.startActiveSpan("OnToggleHandler__proxy", function(i) {
                return i && (i.setAttribute("code.function", "OnToggleHandler"), i.setAttribute("outsystems.function.key", "510b2b7c-68cc-4da8-b7a6-034d2407c2aa"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                    return o.safeExecuteClientAction(o._onToggleHandler$Action, n, e, t)
                }, function() {
                    i && i.end()
                })
            }, 0)
        }
        onDestroy$Action(e) {
            var t = this.controller;
            return a.Logger.startActiveSpan("OnDestroy__proxy", function(n) {
                n && (n.setAttribute("code.function", "OnDestroy"), n.setAttribute("outsystems.function.key", "6f5d90fa-a1d4-4a3c-9e10-c128e430a035"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onDestroy$Action, e)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        initializedHandler$Action(e, t) {
            var n = this.controller;
            return a.Logger.startActiveSpan("InitializedHandler__proxy", function(o) {
                return o && (o.setAttribute("code.function", "InitializedHandler"), o.setAttribute("outsystems.function.key", "74447a0f-577d-41a7-9f0d-139ad9a6a970"), o.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), o.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._initializedHandler$Action, t, e)
                }, function() {
                    o && o.end()
                })
            }, 0)
        }
        registerCallback$Action(e) {
            var t = this.controller;
            return a.Logger.startActiveSpan("RegisterCallback__proxy", function(n) {
                n && (n.setAttribute("code.function", "RegisterCallback"), n.setAttribute("outsystems.function.key", "906c4cfb-5d12-4fac-bfe8-12ed6cb7f6d0"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._registerCallback$Action, e)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        onInitialize$Action(e) {
            var t = this.controller;
            return a.Logger.startActiveSpan("OnInitialize__proxy", function(n) {
                n && (n.setAttribute("code.function", "OnInitialize"), n.setAttribute("outsystems.function.key", "b7a6efcc-5270-4ea2-af52-d01d2ef558b1"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onInitialize$Action, e)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var t = this.controller;
            return a.Logger.startActiveSpan("OnReady__proxy", function(n) {
                n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "c6021e96-f45c-468e-8681-c1926c06d0ed"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onReady$Action, e)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        onParametersChanged$Action(e) {
            var t = this.controller;
            return a.Logger.startActiveSpan("OnParametersChanged__proxy", function(n) {
                n && (n.setAttribute("code.function", "OnParametersChanged"), n.setAttribute("outsystems.function.key", "ff0bbc89-1e1f-440d-ad0b-7c2a0cce3350"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onParametersChanged$Action, e)
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
                var t = this.controller,
                    n = this.model,
                    o = this.idService;
                return t.onInitialize$Action(e)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var t = this.controller,
                    n = this.model,
                    o = this.idService;
                return t.onReady$Action(e)
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
                var t = this.controller,
                    n = this.model,
                    o = this.idService;
                return t.onDestroy$Action(e)
            }), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(e) {
            this._onDestroyEventHandler = e
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = function(e) {
                var t = this.controller,
                    n = this.model,
                    o = this.idService;
                return t.onParametersChanged$Action(e)
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
    r(y, "ControllerInner");
    let A = y;
    $ = A, $.registerVariableGroupType("OutSystemsUI.Interaction.Sidebar.OnToggleHandler$vars", [{
        name: "SidebarId",
        attrName: "sidebarIdInLocal",
        mandatory: !0,
        dataType: a.DataTypes.DataTypes.Text,
        defaultValue: r(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "IsSidebarOpen",
        attrName: "isSidebarOpenInLocal",
        mandatory: !0,
        dataType: a.DataTypes.DataTypes.Boolean,
        defaultValue: r(function() {
            return !1
        }, "defaultValue")
    }]), $.registerVariableGroupType("OutSystemsUI.Interaction.Sidebar.InitializedHandler$vars", [{
        name: "SidebarId",
        attrName: "sidebarIdInLocal",
        mandatory: !0,
        dataType: a.DataTypes.DataTypes.Text,
        defaultValue: r(function() {
            return ""
        }, "defaultValue")
    }]), $.registerVariableGroupType("OutSystemsUI.Interaction.Sidebar.RegisterCallback$getCallbackHandlersJSResult", [{
        name: "Initialized",
        attrName: "initializedOut",
        mandatory: !0,
        dataType: a.DataTypes.DataTypes.Object,
        defaultValue: r(function() {
            return null
        }, "defaultValue")
    }, {
        name: "OnToggle",
        attrName: "onToggleOut",
        mandatory: !0,
        dataType: a.DataTypes.DataTypes.Object,
        defaultValue: r(function() {
            return null
        }, "defaultValue")
    }])
}
var $, ae = new a.Controller.ControllerFactory($, Z);
var He = b.PlaceholderContent,
    De = b.IteratorPlaceholderContent,
    I = class I extends P.BaseWebBlock {
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
            return ee
        }
        get controllerFactory() {
            return ae
        }
        get title() {
            return ""
        }
        internalRender() {
            let y = this.model,
                l = this.controller,
                e = this.idService,
                t = l.validationService,
                n = this.widgetsRecordProvider,
                o = l.callContext(),
                i = I.ifWidget,
                d = I.textWidget,
                u = I.asPrimitiveValue,
                g = I.getTranslation,
                c = this;
            return H.createElement("div", this.getRootNodeProperties(), i(!1, !1, this, function() {
                return []
            }, function() {
                return [H.createElement(X, {
                    extendedProperties: {
                        className: "osui-sidebar",
                        name: y.variables.internalConfigsVar.uniqueIdAttr
                    },
                    tag: "aside",
                    _idProps: {
                        service: e,
                        name: "Sidebar"
                    },
                    _widgetRecordProvider: n
                }, H.createElement(z, {
                    align: 0,
                    content: c.props.placeholders.header,
                    style: "osui-sidebar__header ph",
                    _idProps: {
                        service: e,
                        name: "Header"
                    },
                    _widgetRecordProvider: n
                }), H.createElement(z, {
                    align: 0,
                    content: c.props.placeholders.content,
                    style: "osui-sidebar__content ph",
                    _idProps: {
                        service: e,
                        name: "Content"
                    },
                    _widgetRecordProvider: n
                }))]
            }))
        }
    };
r(I, "View");
var q = I,
    j = q;
var h = b.PlaceholderContent,
    Me = b.IteratorPlaceholderContent,
    E = class E extends P.BaseWebBlock {
        static get displayName() {
            return "Security.SecurityItems"
        }
        static getAttributes() {
            return {
                codeFunction: "SecurityItems",
                functionKey: "bfb5cb6c-67e5-49ba-a045-16efc6848674",
                functionOwnerName: "Accounts",
                functionOwnerKey: "8a32fa32-34f5-4338-b6db-4f1ce8fdd638",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css"]
        }
        static getJsDependencies() {
            return ["scripts/Accounts.UserScripts.simplewebauth.js"]
        }
        static getBlocks() {
            return [O, C, j, B]
        }
        get modelFactory() {
            return te
        }
        get controllerFactory() {
            return ie
        }
        get title() {
            return ""
        }
        internalRender() {
            let y = this.model,
                l = this.controller,
                e = this.idService,
                t = l.validationService,
                n = this.widgetsRecordProvider,
                o = l.callContext(),
                i = E.ifWidget,
                d = E.textWidget,
                u = E.asPrimitiveValue,
                g = E.getTranslation,
                c = this;
            return v.createElement("div", this.getRootNodeProperties(), v.createElement(T, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: n
            }, v.createElement(O, {
                getOwnerSpan: r(function() {
                    return c.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: r(function() {
                    return c.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Ref: "emailpassword"
                },
                events: {
                    _handleError: r(function(s) {
                        l.handleError(s)
                    }, "_handleError"),
                    selectedItem$Action: r(function(s) {
                        var S = o.clone();
                        l.verificationListItemSelectedItem$Action(s, l.callContext(S))
                    }, "selectedItem$Action")
                },
                _validationProps: {
                    validationService: t
                },
                _idProps: {
                    service: e,
                    uuid: "1",
                    alias: "1"
                },
                _widgetRecordProvider: n,
                placeholders: {
                    text: new h(function() {
                        return ["Email and Passwords"]
                    }),
                    badge: h.Empty
                },
                _dependencies: []
            }), v.createElement(C, {
                getOwnerSpan: r(function() {
                    return c.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: r(function() {
                    return c.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: r(function(s) {
                        l.handleError(s)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: t
                },
                _idProps: {
                    service: e,
                    uuid: "2",
                    alias: "2"
                },
                _widgetRecordProvider: n,
                _dependencies: []
            }), v.createElement(O, {
                getOwnerSpan: r(function() {
                    return c.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: r(function() {
                    return c.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Ref: "phonenumber"
                },
                events: {
                    _handleError: r(function(s) {
                        l.handleError(s)
                    }, "_handleError"),
                    selectedItem$Action: r(function(s) {
                        var S = o.clone();
                        l.verificationListItemSelectedItem$Action(s, l.callContext(S))
                    }, "selectedItem$Action")
                },
                _validationProps: {
                    validationService: t
                },
                _idProps: {
                    service: e,
                    uuid: "3",
                    alias: "3"
                },
                _widgetRecordProvider: n,
                placeholders: {
                    text: new h(function() {
                        return ["Phone number"]
                    }),
                    badge: h.Empty
                },
                _dependencies: []
            }), v.createElement(C, {
                getOwnerSpan: r(function() {
                    return c.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: r(function() {
                    return c.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: r(function(s) {
                        l.handleError(s)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: t
                },
                _idProps: {
                    service: e,
                    uuid: "4",
                    alias: "4"
                },
                _widgetRecordProvider: n,
                _dependencies: []
            }), v.createElement(O, {
                getOwnerSpan: r(function() {
                    return c.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: r(function() {
                    return c.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Ref: "2fa"
                },
                events: {
                    _handleError: r(function(s) {
                        l.handleError(s)
                    }, "_handleError"),
                    selectedItem$Action: r(function(s) {
                        var S = o.clone();
                        l.verificationListItemSelectedItem$Action(s, l.callContext(S))
                    }, "selectedItem$Action")
                },
                _validationProps: {
                    validationService: t
                },
                _idProps: {
                    service: e,
                    uuid: "5",
                    alias: "5"
                },
                _widgetRecordProvider: n,
                placeholders: {
                    text: new h(function() {
                        return ["Two-factor authentication (2FA)"]
                    }),
                    badge: h.Empty
                },
                _dependencies: []
            }), v.createElement(C, {
                getOwnerSpan: r(function() {
                    return c.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: r(function() {
                    return c.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: r(function(s) {
                        l.handleError(s)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: t
                },
                _idProps: {
                    service: e,
                    uuid: "6",
                    alias: "6"
                },
                _widgetRecordProvider: n,
                _dependencies: []
            }), v.createElement(T, {
                align: 0,
                animate: !0,
                visible: y.getCachedValue(e.getId("AFzwKGDMEk+dnnvVOYtsBw.Visible"), function() {
                    return D.isPasskeysSupported$Action(o).isPasskeysSupportedOut && k.getDevice() !== "desktop"
                }, function() {
                    return k.getDevice()
                }),
                _idProps: {
                    service: e,
                    uuid: "7"
                },
                _widgetRecordProvider: n
            }, v.createElement(O, {
                getOwnerSpan: r(function() {
                    return c.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: r(function() {
                    return c.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Ref: "passkeys"
                },
                events: {
                    _handleError: r(function(s) {
                        l.handleError(s)
                    }, "_handleError"),
                    selectedItem$Action: r(function(s) {
                        var S = o.clone();
                        l.verificationListItemSelectedItem$Action(s, l.callContext(S))
                    }, "selectedItem$Action")
                },
                _validationProps: {
                    validationService: t
                },
                _idProps: {
                    service: e,
                    uuid: "8",
                    alias: "7"
                },
                _widgetRecordProvider: n,
                placeholders: {
                    text: new h(function() {
                        return ["Passkeys"]
                    }),
                    badge: h.Empty
                },
                _dependencies: []
            }), v.createElement(C, {
                getOwnerSpan: r(function() {
                    return c.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: r(function() {
                    return c.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: r(function(s) {
                        l.handleError(s)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: t
                },
                _idProps: {
                    service: e,
                    uuid: "9",
                    alias: "8"
                },
                _widgetRecordProvider: n,
                _dependencies: []
            })), v.createElement(O, {
                getOwnerSpan: r(function() {
                    return c.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: r(function() {
                    return c.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Ref: "loginhistory"
                },
                events: {
                    _handleError: r(function(s) {
                        l.handleError(s)
                    }, "_handleError"),
                    selectedItem$Action: r(function(s) {
                        var S = o.clone();
                        l.verificationListItemSelectedItem$Action(s, l.callContext(S))
                    }, "selectedItem$Action")
                },
                _validationProps: {
                    validationService: t
                },
                _idProps: {
                    service: e,
                    uuid: "10",
                    alias: "9"
                },
                _widgetRecordProvider: n,
                placeholders: {
                    text: new h(function() {
                        return ["Login activity"]
                    }),
                    badge: h.Empty
                },
                _dependencies: []
            }), v.createElement(C, {
                getOwnerSpan: r(function() {
                    return c.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: r(function() {
                    return c.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: r(function(s) {
                        l.handleError(s)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: t
                },
                _idProps: {
                    service: e,
                    uuid: "11",
                    alias: "10"
                },
                _widgetRecordProvider: n,
                _dependencies: []
            }), v.createElement(j, {
                getOwnerSpan: r(function() {
                    return c.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: r(function() {
                    return c.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    HasOverlay: !0
                },
                events: {
                    _handleError: r(function(s) {
                        l.handleError(s)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: t
                },
                _idProps: {
                    service: e,
                    name: "TwoFaSidebar",
                    alias: "11"
                },
                _widgetRecordProvider: n,
                placeholders: {
                    header: h.Empty,
                    content: new h(function() {
                        return [v.createElement(B, {
                            getOwnerSpan: r(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: r(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: r(function(s) {
                                    l.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: t
                            },
                            _idProps: {
                                service: e,
                                uuid: "13",
                                alias: "12"
                            },
                            _widgetRecordProvider: n,
                            _dependencies: []
                        })]
                    })
                },
                _dependencies: []
            })))
        }
    };
r(E, "View");
var K = E,
    N = K;
var R = b.PlaceholderContent,
    ot = b.IteratorPlaceholderContent,
    w = class w extends P.BaseWebScreen {
        static get displayName() {
            return "MainFlow.Security"
        }
        static getAttributes() {
            return {
                codeFunction: "Security",
                functionKey: "2276f195-0d9f-405f-ab1f-2ae0c98ff84c",
                functionOwnerName: "Accounts",
                functionOwnerKey: "8a32fa32-34f5-4338-b6db-4f1ce8fdd638",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/Accounts.DerivAccounts.css", "css/Accounts.MainFlow.Security.css", "css/Accounts.DerivAccounts.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [F, W, N, J]
        }
        get modelFactory() {
            return ne
        }
        get controllerFactory() {
            return re
        }
        get title() {
            return "Security"
        }
        internalRender() {
            let y = this.model,
                l = this.controller,
                e = this.idService,
                t = l.validationService,
                n = this.widgetsRecordProvider,
                o = l.callContext(),
                i = w.ifWidget,
                d = w.textWidget,
                u = w.asPrimitiveValue,
                g = w.getTranslation,
                c = this;
            return _.createElement("div", this.getRootNodeProperties(), _.createElement(F, {
                getOwnerSpan: r(function() {
                    return c.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: r(function() {
                    return c.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: r(function(s) {
                        l.handleError(s)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: t
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: n,
                placeholders: {
                    desktopLayout: new R(function() {
                        return [_.createElement(W, {
                            getOwnerSpan: r(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: r(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                SelectedSection: "security"
                            },
                            events: {
                                _handleError: r(function(s) {
                                    l.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: t
                            },
                            _idProps: {
                                service: e,
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: n,
                            placeholders: {
                                content: new R(function() {
                                    return [_.createElement(T, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex flex-direction-column row-gap-s security-content",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "2"
                                        },
                                        _widgetRecordProvider: n
                                    }, _.createElement(U, {
                                        style: "font-size-h5 font-bold",
                                        text: ["Security"],
                                        _idProps: {
                                            service: e,
                                            uuid: "3"
                                        },
                                        _widgetRecordProvider: n
                                    }), _.createElement(N, {
                                        getOwnerSpan: r(function() {
                                            return c.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: r(function() {
                                            return c.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {},
                                        events: {
                                            _handleError: r(function(s) {
                                                l.handleError(s)
                                            }, "_handleError")
                                        },
                                        _validationProps: {
                                            validationService: t
                                        },
                                        _idProps: {
                                            service: e,
                                            uuid: "4",
                                            alias: "3"
                                        },
                                        _widgetRecordProvider: n,
                                        _dependencies: []
                                    }))]
                                })
                            },
                            _dependencies: []
                        })]
                    }),
                    tabletLayout: R.Empty,
                    defaultLayout: new R(function() {
                        return [_.createElement(J, {
                            getOwnerSpan: r(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: r(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                DisplayBackButton: !0,
                                DisplayCloseButton: !1
                            },
                            events: {
                                _handleError: r(function(s) {
                                    l.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: t
                            },
                            _idProps: {
                                service: e,
                                uuid: "5",
                                alias: "4"
                            },
                            _widgetRecordProvider: n,
                            placeholders: {
                                title: new R(function() {
                                    return [_.createElement(U, {
                                        style: "font-size-h6 font-bold",
                                        text: ["Security"],
                                        _idProps: {
                                            service: e,
                                            name: "Security"
                                        },
                                        _widgetRecordProvider: n
                                    })]
                                }),
                                sectioncontent: new R(function() {
                                    return [_.createElement(T, {
                                        align: 0,
                                        animate: !1,
                                        style: "security-section__items",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: n
                                    }, _.createElement(N, {
                                        getOwnerSpan: r(function() {
                                            return c.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: r(function() {
                                            return c.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {},
                                        events: {
                                            _handleError: r(function(s) {
                                                l.handleError(s)
                                            }, "_handleError")
                                        },
                                        _validationProps: {
                                            validationService: t
                                        },
                                        _idProps: {
                                            service: e,
                                            uuid: "8",
                                            alias: "5"
                                        },
                                        _widgetRecordProvider: n,
                                        _dependencies: []
                                    }))]
                                })
                            },
                            _dependencies: []
                        })]
                    })
                },
                _dependencies: []
            }))
        }
    };
r(w, "View");
var Y = w,
    at = Y;
export {
    at as
    default
};