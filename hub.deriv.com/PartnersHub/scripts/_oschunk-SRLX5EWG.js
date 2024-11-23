import {
    a as de
} from "./_oschunk-K6JXNTSB.js";
import {
    a as Te,
    b as pe,
    c as De,
    d as Re,
    e as we,
    f as He
} from "./_oschunk-AP2KU3H6.js";
import {
    a as $e
} from "./_oschunk-P3LFISEU.js";
import "./_oschunk-CDQG5BIU.js";
import "./_oschunk-4ZTC5CFM.js";
import {
    a as ue
} from "./_oschunk-RNYL55HD.js";
import {
    a as q
} from "./_oschunk-UOGDTLIS.js";
import "./_oschunk-I7KZQPH5.js";
import "./_oschunk-CXWYKNLS.js";
import "./_oschunk-5FKAOJ4S.js";
import "./_oschunk-S4T4FX3G.js";
import "./_oschunk-RL72664U.js";
import "./_oschunk-SELPP7T7.js";
import {
    a as j
} from "./_oschunk-AP2LGV3I.js";
import "./_oschunk-QM6TPNLS.js";
import "./_oschunk-HMQSENZ4.js";
import "./_oschunk-PISKEOZB.js";
import "./_oschunk-XLHEEBMK.js";
import "./_oschunk-ANY3DTL7.js";
import "./_oschunk-22UUXQ4S.js";
import "./_oschunk-QCCZFQH6.js";
import "./_oschunk-4YFBPYRH.js";
import {
    a as M
} from "./_oschunk-NR4KXK35.js";
import {
    a as E,
    d as P,
    f as w,
    g as H,
    m as Ee,
    s as N,
    u as G
} from "./_oschunk-OO36B6PN.js";
import "./_oschunk-7BKGLZMI.js";
import {
    a as re
} from "./_oschunk-6WALBPGV.js";
import {
    a as W,
    g as p,
    i as O
} from "./_oschunk-IL57OEHH.js";
import "./_oschunk-RFCNRBVT.js";
import "./_oschunk-Y3C3IKDF.js";
import "./_oschunk-CMUJJDSY.js";
import {
    a as Pe,
    o as m,
    p as ne
} from "./_oschunk-DW3HXDMW.js";
import "./_oschunk-PNRBOTIK.js";
import {
    ef as ce,
    hd as T,
    kf as Oe
} from "./_oschunk-JXJHSAQS.js";
import {
    ia as S
} from "./_oschunk-5KJVGEL7.js";
import {
    c as s,
    h as B
} from "./_oschunk-QHO7QY6K.js";
var C = B(W());
var $ = B(W());
var Ne = {};

function fe(A, a, f, e) {
    A.IntializedHandler = a.InitializedHandler, A.OnChange = a.OnTabChangeHandler
}
s(fe, "default");
var d = S; {
    let a = class a extends d.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, Ne);
            var i = this.controller;
            this.clientActionProxies = {
                initializedHandler$Action: s(function(r) {
                    return r = r === void 0 ? "" : r, i.executeActionInsideJSNode(i._initializedHandler$Action.bind(i, d.DataConversion.JSNodeParamConverter.from(r, d.DataTypes.DataTypes.Text)), i.callContext(), function(l) {
                        return {}
                    }, function() {}, "InitializedHandler")
                }, "initializedHandler$Action"),
                onTabChangeHandler$Action: s(function(r, l) {
                    return r = r === void 0 ? "" : r, l = l === void 0 ? 0 : l, i.executeActionInsideJSNode(i._onTabChangeHandler$Action.bind(i, d.DataConversion.JSNodeParamConverter.from(r, d.DataTypes.DataTypes.Text), d.DataConversion.JSNodeParamConverter.from(l, d.DataTypes.DataTypes.Integer)), i.callContext(), function(o) {
                        return {}
                    }, function() {}, "OnTabChangeHandler")
                }, "onTabChangeHandler$Action")
            }, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _registerCallback$Action() {
            return this.hasOwnProperty("__registerCallback$Action") || (this.__registerCallback$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    i = this.idService;
                return d.Logger.startActiveSpan("RegisterCallback", function(r) {
                    r && (r.setAttribute("code.function", "RegisterCallback"), r.setAttribute("outsystems.function.key", "11e96aaa-70a8-4668-8df4-3d7e25b3a75e"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("RegisterCallback"), e = t.callContext(e);
                        var l = new d.DataTypes.VariableHolder;
                        l.value = d.Logger.startActiveSpan("GetCallbackHandler", function(o) {
                            o && (o.setAttribute("code.function", "GetCallbackHandler"), o.setAttribute("outsystems.function.key", "66849ead-107e-48e5-a2b7-7e242c30a66b"), o.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), o.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(fe, "GetCallbackHandler", "RegisterCallback", {
                                    IntializedHandler: d.DataConversion.JSNodeParamConverter.to(null, d.DataTypes.DataTypes.Object),
                                    OnChange: d.DataConversion.JSNodeParamConverter.to(null, d.DataTypes.DataTypes.Object)
                                }, function(y) {
                                    var u = new(t.constructor.getVariableGroupType("OutSystemsUI.Navigation.Tabs.RegisterCallback$getCallbackHandlerJSResult"));
                                    return u.intializedHandlerOut = d.DataConversion.JSNodeParamConverter.from(y.IntializedHandler, d.DataTypes.DataTypes.Object), u.onChangeOut = d.DataConversion.JSNodeParamConverter.from(y.OnChange, d.DataTypes.DataTypes.Object), u
                                }, {
                                    InitializedHandler: t.clientActionProxies.initializedHandler$Action,
                                    OnTabChangeHandler: t.clientActionProxies.onTabChangeHandler$Action
                                }, {})
                            } finally {
                                o && o.end()
                            }
                        }, 1), m.tabsRegisterCallback$Action(n.variables.internalConfigsVar.uniqueIdAttr, T.registeredCallbackEvents.initialized, l.value.intializedHandlerOut, e), m.tabsRegisterCallback$Action(n.variables.internalConfigsVar.uniqueIdAttr, T.registeredCallbackEvents.onChange, l.value.onChangeOut, e)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__registerCallback$Action
        }
        set _registerCallback$Action(e) {
            this.__registerCallback$Action = e
        }
        get _initializedHandler$Action() {
            return this.hasOwnProperty("__initializedHandler$Action") || (this.__initializedHandler$Action = function(e, n) {
                var t = this.model,
                    i = this.controller,
                    r = this.idService;
                return d.Logger.startActiveSpan("InitializedHandler", function(l) {
                    return l && (l.setAttribute("code.function", "InitializedHandler"), l.setAttribute("outsystems.function.key", "27280cce-f4dc-4adf-9fba-cf1482e03854"), l.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), l.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), d.Flow.tryFinally(function() {
                        i.ensureControllerAlive("InitializedHandler"), n = i.callContext(n);
                        var o = new d.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("OutSystemsUI.Navigation.Tabs.InitializedHandler$vars")));
                        return o.value.tabsIdInLocal = e, d.Flow.executeAsyncFlow(function() {
                            return i.initialized$Action(o.value.tabsIdInLocal, n)
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
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    i = this.idService;
                return d.Logger.startActiveSpan("OnInitialize", function(r) {
                    r && (r.setAttribute("code.function", "OnInitialize"), r.setAttribute("outsystems.function.key", "42ccda6f-41b3-4660-986f-b34150a4d85c"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e);
                        var l = new d.DataTypes.VariableHolder,
                            o = new d.DataTypes.VariableHolder(new d.DataTypes.JSONSerializeOutputType);
                        m.logEvent$Action(T.logType.general, "Going to create Tabs", e), l.value = m.generateUniqueId$Action(n.variables.internalConfigsVar.uniqueIdAttr, e), n.variables.internalConfigsVar.uniqueIdAttr = l.value.unique_IDOut, n.variables.internalConfigsVar.extendedClassAttr = n.variables.extendedClassIn, n.variables.internalConfigsVar.startingTabAttr = n.variables.startingTabIn, n.variables.internalConfigsVar.tabsOrientationAttr = n.variables.tabsOrientationIn, n.variables.internalConfigsVar.tabsVerticalPositionAttr = n.variables.tabsVerticalPositionIn, n.variables.internalConfigsVar.heightAttr = n.variables.heightIn, n.variables.internalConfigsVar.justifyHeadersAttr = n.variables.optionalConfigsIn.justifyHeadersAttr, n.variables.internalConfigsVar.contentAutoHeightAttr = n.variables.optionalConfigsIn.contentAutoHeightAttr, o.value.jSONOut = d.JSONUtils.serializeToJSON(n.variables.internalConfigsVar, !0, !1), m.tabsCreate$Action(n.variables.internalConfigsVar.uniqueIdAttr, o.value.jSONOut, e), t._registerCallback$Action(e)
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
                return d.Logger.startActiveSpan("OnReady", function(r) {
                    r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "7d14b681-7504-4541-ae36-f5406edf8efe"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e), m.tabsInitialize$Action(n.variables.internalConfigsVar.uniqueIdAttr, e), m.logEvent$Action(T.logType.general, "Tabs created", e)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    i = this.idService;
                return d.Logger.startActiveSpan("OnDestroy", function(r) {
                    r && (r.setAttribute("code.function", "OnDestroy"), r.setAttribute("outsystems.function.key", "890346e2-f639-4266-b0d5-1db2ea681631"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnDestroy"), e = t.callContext(e), m.tabsDestroy$Action(n.variables.internalConfigsVar.uniqueIdAttr, e)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(e) {
            this.__onDestroy$Action = e
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    i = this.idService;
                return d.Logger.startActiveSpan("OnParametersChanged", function(r) {
                    r && (r.setAttribute("code.function", "OnParametersChanged"), r.setAttribute("outsystems.function.key", "f0d416cc-e6c0-4332-bf4e-41f84d176769"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnParametersChanged"), e = t.callContext(e), n.variables.startingTabIn !== n.variables.internalConfigsVar.startingTabAttr && (n.variables.internalConfigsVar.startingTabAttr = n.variables.startingTabIn, m.tabsChangeIntegerProperty$Action(n.variables.internalConfigsVar.uniqueIdAttr, "StartingTab", n.variables.internalConfigsVar.startingTabAttr, e)), n.variables.tabsOrientationIn !== n.variables.internalConfigsVar.tabsOrientationAttr && (n.variables.internalConfigsVar.tabsOrientationAttr = n.variables.tabsOrientationIn, m.tabsChangeTextProperty$Action(n.variables.internalConfigsVar.uniqueIdAttr, "TabsOrientation", n.variables.internalConfigsVar.tabsOrientationAttr, e)), n.variables.tabsVerticalPositionIn !== n.variables.internalConfigsVar.tabsVerticalPositionAttr && (n.variables.internalConfigsVar.tabsVerticalPositionAttr = n.variables.tabsVerticalPositionIn, m.tabsChangeTextProperty$Action(n.variables.internalConfigsVar.uniqueIdAttr, "TabsVerticalPosition", n.variables.internalConfigsVar.tabsVerticalPositionAttr, e)), n.variables.heightIn !== n.variables.internalConfigsVar.heightAttr && (n.variables.internalConfigsVar.heightAttr = n.variables.heightIn, m.tabsChangeTextProperty$Action(n.variables.internalConfigsVar.uniqueIdAttr, "Height", n.variables.internalConfigsVar.heightAttr, e)), n.variables.optionalConfigsIn.contentAutoHeightAttr !== n.variables.internalConfigsVar.contentAutoHeightAttr && (n.variables.internalConfigsVar.contentAutoHeightAttr = n.variables.optionalConfigsIn.contentAutoHeightAttr, m.tabsChangeBooleanProperty$Action(n.variables.internalConfigsVar.uniqueIdAttr, "ContentAutoHeight", n.variables.internalConfigsVar.contentAutoHeightAttr, e)), n.variables.optionalConfigsIn.justifyHeadersAttr !== n.variables.internalConfigsVar.justifyHeadersAttr && (n.variables.internalConfigsVar.justifyHeadersAttr = n.variables.optionalConfigsIn.justifyHeadersAttr, m.tabsChangeBooleanProperty$Action(n.variables.internalConfigsVar.uniqueIdAttr, "JustifyHeaders", n.variables.internalConfigsVar.justifyHeadersAttr, e)), n.variables.extendedClassIn !== n.variables.internalConfigsVar.extendedClassAttr && (n.variables.internalConfigsVar.extendedClassAttr = n.variables.extendedClassIn, m.tabsChangeTextProperty$Action(n.variables.internalConfigsVar.uniqueIdAttr, "ExtendedClass", n.variables.extendedClassIn, e))
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(e) {
            this.__onParametersChanged$Action = e
        }
        get _onTabChangeHandler$Action() {
            return this.hasOwnProperty("__onTabChangeHandler$Action") || (this.__onTabChangeHandler$Action = function(e, n, t) {
                var i = this.model,
                    r = this.controller,
                    l = this.idService;
                return d.Logger.startActiveSpan("OnTabChangeHandler", function(o) {
                    return o && (o.setAttribute("code.function", "OnTabChangeHandler"), o.setAttribute("outsystems.function.key", "f65fe446-321a-4141-9258-6ebd704cc406"), o.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), o.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), d.Flow.tryFinally(function() {
                        r.ensureControllerAlive("OnTabChangeHandler"), t = r.callContext(t);
                        var y = new d.DataTypes.VariableHolder(new(r.constructor.getVariableGroupType("OutSystemsUI.Navigation.Tabs.OnTabChangeHandler$vars")));
                        return y.value.tabsIdInLocal = e, y.value.currentActiveTabInLocal = n, d.Flow.executeAsyncFlow(function() {
                            return i.variables.internalConfigsVar.startingTabAttr = y.value.currentActiveTabInLocal, r.onTabChange$Action(y.value.tabsIdInLocal, y.value.currentActiveTabInLocal, t)
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 1)
            }), this.__onTabChangeHandler$Action
        }
        set _onTabChangeHandler$Action(e) {
            this.__onTabChangeHandler$Action = e
        }
        registerCallback$Action(e) {
            var n = this.controller;
            return d.Logger.startActiveSpan("RegisterCallback__proxy", function(t) {
                t && (t.setAttribute("code.function", "RegisterCallback"), t.setAttribute("outsystems.function.key", "11e96aaa-70a8-4668-8df4-3d7e25b3a75e"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._registerCallback$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        initializedHandler$Action(e, n) {
            var t = this.controller;
            return d.Logger.startActiveSpan("InitializedHandler__proxy", function(i) {
                return i && (i.setAttribute("code.function", "InitializedHandler"), i.setAttribute("outsystems.function.key", "27280cce-f4dc-4adf-9fba-cf1482e03854"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), d.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._initializedHandler$Action, n, e)
                }, function() {
                    i && i.end()
                })
            }, 0)
        }
        onInitialize$Action(e) {
            var n = this.controller;
            return d.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "42ccda6f-41b3-4660-986f-b34150a4d85c"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onInitialize$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var n = this.controller;
            return d.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "7d14b681-7504-4541-ae36-f5406edf8efe"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onReady$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onDestroy$Action(e) {
            var n = this.controller;
            return d.Logger.startActiveSpan("OnDestroy__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnDestroy"), t.setAttribute("outsystems.function.key", "890346e2-f639-4266-b0d5-1db2ea681631"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onDestroy$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onParametersChanged$Action(e) {
            var n = this.controller;
            return d.Logger.startActiveSpan("OnParametersChanged__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnParametersChanged"), t.setAttribute("outsystems.function.key", "f0d416cc-e6c0-4332-bf4e-41f84d176769"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onParametersChanged$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onTabChangeHandler$Action(e, n, t) {
            var i = this.controller;
            return d.Logger.startActiveSpan("OnTabChangeHandler__proxy", function(r) {
                return r && (r.setAttribute("code.function", "OnTabChangeHandler"), r.setAttribute("outsystems.function.key", "f65fe446-321a-4141-9258-6ebd704cc406"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), d.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._onTabChangeHandler$Action, t, e, n)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        get onTabChange$Action() {
            return this.hasOwnProperty("_onTabChange$Action") || (this._onTabChange$Action = function() {
                return Promise.resolve()
            }), this._onTabChange$Action
        }
        set onTabChange$Action(e) {
            this._onTabChange$Action = e
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
    let A = a;
    Z = A, Z.registerVariableGroupType("OutSystemsUI.Navigation.Tabs.RegisterCallback$getCallbackHandlerJSResult", [{
        name: "IntializedHandler",
        attrName: "intializedHandlerOut",
        mandatory: !0,
        dataType: d.DataTypes.DataTypes.Object,
        defaultValue: s(function() {
            return null
        }, "defaultValue")
    }, {
        name: "OnChange",
        attrName: "onChangeOut",
        mandatory: !0,
        dataType: d.DataTypes.DataTypes.Object,
        defaultValue: s(function() {
            return null
        }, "defaultValue")
    }]), Z.registerVariableGroupType("OutSystemsUI.Navigation.Tabs.InitializedHandler$vars", [{
        name: "TabsId",
        attrName: "tabsIdInLocal",
        mandatory: !1,
        dataType: d.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }]), Z.registerVariableGroupType("OutSystemsUI.Navigation.Tabs.OnTabChangeHandler$vars", [{
        name: "TabsId",
        attrName: "tabsIdInLocal",
        mandatory: !1,
        dataType: d.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "CurrentActiveTab",
        attrName: "currentActiveTabInLocal",
        mandatory: !0,
        dataType: d.DataTypes.DataTypes.Integer,
        defaultValue: s(function() {
            return 0
        }, "defaultValue")
    }])
}
var Z, Ve = new d.Controller.ControllerFactory(Z, M);
var Ct = O.PlaceholderContent,
    _t = O.IteratorPlaceholderContent,
    F = class F extends p.BaseWebBlock {
        static get displayName() {
            return "Navigation.Tabs"
        }
        static getAttributes() {
            return {
                codeFunction: "Tabs",
                functionKey: "3025cc59-1e44-46a6-b0d0-ec1a339f36d6",
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
            return Te
        }
        get controllerFactory() {
            return Ve
        }
        get title() {
            return ""
        }
        internalRender() {
            let a = this.model,
                f = this.controller,
                e = this.idService,
                n = f.validationService,
                t = this.widgetsRecordProvider,
                i = f.callContext(),
                r = F.ifWidget,
                l = F.textWidget,
                o = F.asPrimitiveValue,
                y = F.getTranslation,
                u = this;
            return $.createElement("div", this.getRootNodeProperties(), $.createElement(E, {
                extendedProperties: {
                    className: "osui-tabs",
                    name: a.variables.internalConfigsVar.uniqueIdAttr
                },
                tag: "section",
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, $.createElement(E, {
                extendedProperties: {
                    className: "osui-tabs__header"
                },
                tag: "header",
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }, $.createElement(N, {
                align: 0,
                content: u.props.placeholders.header,
                style: "display-contents ph",
                _idProps: {
                    service: e,
                    name: "Header"
                },
                _widgetRecordProvider: t
            }), $.createElement(P, {
                align: 0,
                animate: !1,
                style: "osui-tabs__header__indicator",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "3"
                },
                _widgetRecordProvider: t
            })), $.createElement(E, {
                extendedProperties: {
                    className: "osui-tabs__content"
                },
                tag: "section",
                _idProps: {
                    service: e,
                    uuid: "4"
                },
                _widgetRecordProvider: t
            }, r(!1, !1, this, function() {
                return []
            }, function() {
                return [$.createElement(N, {
                    align: 0,
                    content: u.props.placeholders.content,
                    style: "display-contents ph",
                    _idProps: {
                        service: e,
                        name: "Content"
                    },
                    _widgetRecordProvider: t
                })]
            }))))
        }
    };
s(F, "View");
var be = F,
    J = be;
var ae = B(W());
var ke = {};

function me(A, a, f, e) {
    A.Initialized = a.InitializedHandler
}
s(me, "default");
var v = S; {
    let a = class a extends v.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, ke);
            var i = this.controller;
            this.clientActionProxies = {
                initializedHandler$Action: s(function(r) {
                    return r = r === void 0 ? "" : r, i.executeActionInsideJSNode(i._initializedHandler$Action.bind(i, v.DataConversion.JSNodeParamConverter.from(r, v.DataTypes.DataTypes.Text)), i.callContext(), function(l) {
                        return {}
                    }, function() {}, "InitializedHandler")
                }, "initializedHandler$Action")
            }, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    i = this.idService;
                return v.Logger.startActiveSpan("OnInitialize", function(r) {
                    r && (r.setAttribute("code.function", "OnInitialize"), r.setAttribute("outsystems.function.key", "16c877c3-ccfa-48ad-9437-de6ffe08639b"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e);
                        var l = new v.DataTypes.VariableHolder,
                            o = new v.DataTypes.VariableHolder(new v.DataTypes.JSONSerializeOutputType);
                        m.logEvent$Action(T.logType.general, "Going to create TabsHeaderItem", e), l.value = m.generateUniqueId$Action(n.variables.internalConfigsVar.uniqueIdAttr, e), n.variables.internalConfigsVar.uniqueIdAttr = l.value.unique_IDOut, n.variables.internalConfigsVar.extendedClassAttr = n.variables.extendedClassIn, o.value.jSONOut = v.JSONUtils.serializeToJSON(n.variables.internalConfigsVar, !0, !1), m.tabsHeaderItemCreate$Action(n.variables.internalConfigsVar.uniqueIdAttr, o.value.jSONOut, e), t._registerCallbacks$Action(e)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    i = this.idService;
                return v.Logger.startActiveSpan("OnParametersChanged", function(r) {
                    r && (r.setAttribute("code.function", "OnParametersChanged"), r.setAttribute("outsystems.function.key", "359296be-65d4-4fac-9ef5-9b97a2d3bd47"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnParametersChanged"), e = t.callContext(e), n.variables.extendedClassIn !== n.variables.internalConfigsVar.extendedClassAttr && (n.variables.internalConfigsVar.extendedClassAttr = n.variables.extendedClassIn, m.tabsHeaderItemChangeTextProperty$Action(n.variables.internalConfigsVar.uniqueIdAttr, "ExtendedClass", n.variables.internalConfigsVar.extendedClassAttr, e))
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(e) {
            this.__onParametersChanged$Action = e
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    i = this.idService;
                return v.Logger.startActiveSpan("OnDestroy", function(r) {
                    r && (r.setAttribute("code.function", "OnDestroy"), r.setAttribute("outsystems.function.key", "3b54d088-34f3-4b94-8d30-13ebdd356031"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnDestroy"), e = t.callContext(e), m.tabsHeaderItemDestroy$Action(n.variables.internalConfigsVar.uniqueIdAttr, e)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(e) {
            this.__onDestroy$Action = e
        }
        get _registerCallbacks$Action() {
            return this.hasOwnProperty("__registerCallbacks$Action") || (this.__registerCallbacks$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    i = this.idService;
                return v.Logger.startActiveSpan("RegisterCallbacks", function(r) {
                    r && (r.setAttribute("code.function", "RegisterCallbacks"), r.setAttribute("outsystems.function.key", "72f9d790-da7a-446b-a74f-e7a755b7e24b"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("RegisterCallbacks"), e = t.callContext(e);
                        var l = new v.DataTypes.VariableHolder;
                        l.value = v.Logger.startActiveSpan("GetCallbackHandlers", function(o) {
                            o && (o.setAttribute("code.function", "GetCallbackHandlers"), o.setAttribute("outsystems.function.key", "30484a9c-6187-4066-95d0-79ba8fb35004"), o.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), o.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(me, "GetCallbackHandlers", "RegisterCallbacks", {
                                    Initialized: v.DataConversion.JSNodeParamConverter.to(null, v.DataTypes.DataTypes.Object)
                                }, function(y) {
                                    var u = new(t.constructor.getVariableGroupType("OutSystemsUI.Navigation.TabsHeaderItem.RegisterCallbacks$getCallbackHandlersJSResult"));
                                    return u.initializedOut = v.DataConversion.JSNodeParamConverter.from(y.Initialized, v.DataTypes.DataTypes.Object), u
                                }, {
                                    InitializedHandler: t.clientActionProxies.initializedHandler$Action
                                }, {})
                            } finally {
                                o && o.end()
                            }
                        }, 1), m.tabsHeaderItemRegisterCallback$Action(n.variables.internalConfigsVar.uniqueIdAttr, T.registeredCallbackEvents.initialized, l.value.initializedOut, e)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__registerCallbacks$Action
        }
        set _registerCallbacks$Action(e) {
            this.__registerCallbacks$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    i = this.idService;
                return v.Logger.startActiveSpan("OnReady", function(r) {
                    r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "760b7a71-cd84-4275-9826-8b3f7f39bf08"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e), m.tabsHeaderItemInitialize$Action(n.variables.internalConfigsVar.uniqueIdAttr, e), m.logEvent$Action(T.logType.general, "TabsHeaderItem created", e)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _onRender$Action() {
            return this.hasOwnProperty("__onRender$Action") || (this.__onRender$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    i = this.idService;
                return v.Logger.startActiveSpan("OnRender", function(r) {
                    r && (r.setAttribute("code.function", "OnRender"), r.setAttribute("outsystems.function.key", "b472db5a-d91f-40d4-be62-ed26e1090687"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnRender"), e = t.callContext(e), m.tabsHeaderItemUpdateOnRender$Action(n.variables.internalConfigsVar.uniqueIdAttr, e)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onRender$Action
        }
        set _onRender$Action(e) {
            this.__onRender$Action = e
        }
        get _initializedHandler$Action() {
            return this.hasOwnProperty("__initializedHandler$Action") || (this.__initializedHandler$Action = function(e, n) {
                var t = this.model,
                    i = this.controller,
                    r = this.idService;
                return v.Logger.startActiveSpan("InitializedHandler", function(l) {
                    return l && (l.setAttribute("code.function", "InitializedHandler"), l.setAttribute("outsystems.function.key", "caa520b8-6af4-454e-99e4-3955ba5b6776"), l.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), l.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), v.Flow.tryFinally(function() {
                        i.ensureControllerAlive("InitializedHandler"), n = i.callContext(n);
                        var o = new v.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("OutSystemsUI.Navigation.TabsHeaderItem.InitializedHandler$vars")));
                        return o.value.tabsHeaderItemIdInLocal = e, v.Flow.executeAsyncFlow(function() {
                            return i.initialized$Action(o.value.tabsHeaderItemIdInLocal, n)
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
        onInitialize$Action(e) {
            var n = this.controller;
            return v.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "16c877c3-ccfa-48ad-9437-de6ffe08639b"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onInitialize$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onParametersChanged$Action(e) {
            var n = this.controller;
            return v.Logger.startActiveSpan("OnParametersChanged__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnParametersChanged"), t.setAttribute("outsystems.function.key", "359296be-65d4-4fac-9ef5-9b97a2d3bd47"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onParametersChanged$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onDestroy$Action(e) {
            var n = this.controller;
            return v.Logger.startActiveSpan("OnDestroy__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnDestroy"), t.setAttribute("outsystems.function.key", "3b54d088-34f3-4b94-8d30-13ebdd356031"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onDestroy$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        registerCallbacks$Action(e) {
            var n = this.controller;
            return v.Logger.startActiveSpan("RegisterCallbacks__proxy", function(t) {
                t && (t.setAttribute("code.function", "RegisterCallbacks"), t.setAttribute("outsystems.function.key", "72f9d790-da7a-446b-a74f-e7a755b7e24b"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._registerCallbacks$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var n = this.controller;
            return v.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "760b7a71-cd84-4275-9826-8b3f7f39bf08"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onReady$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onRender$Action(e) {
            var n = this.controller;
            return v.Logger.startActiveSpan("OnRender__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnRender"), t.setAttribute("outsystems.function.key", "b472db5a-d91f-40d4-be62-ed26e1090687"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onRender$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        initializedHandler$Action(e, n) {
            var t = this.controller;
            return v.Logger.startActiveSpan("InitializedHandler__proxy", function(i) {
                return i && (i.setAttribute("code.function", "InitializedHandler"), i.setAttribute("outsystems.function.key", "caa520b8-6af4-454e-99e4-3955ba5b6776"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), v.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._initializedHandler$Action, n, e)
                }, function() {
                    i && i.end()
                })
            }, 0)
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
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = function(e) {
                var n = this.controller,
                    t = this.model,
                    i = this.idService;
                return n.onRender$Action(e)
            }), this._onRenderEventHandler
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
    let A = a;
    ie = A, ie.registerVariableGroupType("OutSystemsUI.Navigation.TabsHeaderItem.RegisterCallbacks$getCallbackHandlersJSResult", [{
        name: "Initialized",
        attrName: "initializedOut",
        mandatory: !0,
        dataType: v.DataTypes.DataTypes.Object,
        defaultValue: s(function() {
            return null
        }, "defaultValue")
    }]), ie.registerVariableGroupType("OutSystemsUI.Navigation.TabsHeaderItem.InitializedHandler$vars", [{
        name: "TabsHeaderItemId",
        attrName: "tabsHeaderItemIdInLocal",
        mandatory: !1,
        dataType: v.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }])
}
var ie, ze = new v.Controller.ControllerFactory(ie, M);
var xt = O.PlaceholderContent,
    Vt = O.IteratorPlaceholderContent,
    x = class x extends p.BaseWebBlock {
        static get displayName() {
            return "Navigation.TabsHeaderItem"
        }
        static getAttributes() {
            return {
                codeFunction: "TabsHeaderItem",
                functionKey: "e79bc3ad-4d68-4711-9fd2-e7269cd2ec87",
                functionOwnerName: "OutSystemsUI",
                functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return pe
        }
        get controllerFactory() {
            return ze
        }
        get title() {
            return ""
        }
        internalRender() {
            let a = this.model,
                f = this.controller,
                e = this.idService,
                n = f.validationService,
                t = this.widgetsRecordProvider,
                i = f.callContext(),
                r = x.ifWidget,
                l = x.textWidget,
                o = x.asPrimitiveValue,
                y = x.getTranslation,
                u = this;
            return ae.createElement("div", this.getRootNodeProperties(), ae.createElement(E, {
                extendedProperties: {
                    className: "osui-tabs__header-item",
                    name: a.variables.internalConfigsVar.uniqueIdAttr
                },
                tag: "button",
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, ae.createElement(N, {
                align: 0,
                content: u.props.placeholders.title,
                style: "display-contents ph",
                _idProps: {
                    service: e,
                    name: "Title"
                },
                _widgetRecordProvider: t
            })))
        }
    };
s(x, "View");
var ve = x,
    Q = ve;
var se = B(W());
var Le = {};

function ge(A, a, f, e) {
    A.Initialized = a.InitializedHandler
}
s(ge, "default");
var g = S; {
    let a = class a extends g.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, Le);
            var i = this.controller;
            this.clientActionProxies = {
                initializedHandler$Action: s(function(r) {
                    return r = r === void 0 ? "" : r, i.executeActionInsideJSNode(i._initializedHandler$Action.bind(i, g.DataConversion.JSNodeParamConverter.from(r, g.DataTypes.DataTypes.Text)), i.callContext(), function(l) {
                        return {}
                    }, function() {}, "InitializedHandler")
                }, "initializedHandler$Action")
            }, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    i = this.idService;
                return g.Logger.startActiveSpan("OnParametersChanged", function(r) {
                    r && (r.setAttribute("code.function", "OnParametersChanged"), r.setAttribute("outsystems.function.key", "1f30b33a-e506-48c8-8af0-bbdb38d5fc79"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnParametersChanged"), e = t.callContext(e), n.variables.extendedClassIn !== n.variables.internalConfigsVar.extendedClassAttr && (n.variables.internalConfigsVar.extendedClassAttr = n.variables.extendedClassIn, m.tabsContentItemChangeTextProperty$Action(n.variables.internalConfigsVar.uniqueIdAttr, "ExtendedClass", n.variables.internalConfigsVar.extendedClassAttr, e))
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(e) {
            this.__onParametersChanged$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    i = this.idService;
                return g.Logger.startActiveSpan("OnReady", function(r) {
                    r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "4538d2ad-bf2d-48dc-a412-84c7f483e78e"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e), m.tabsContentItemInitialize$Action(n.variables.internalConfigsVar.uniqueIdAttr, e), m.logEvent$Action(T.logType.general, "TabsContentItem created", e)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _registerCallbacks$Action() {
            return this.hasOwnProperty("__registerCallbacks$Action") || (this.__registerCallbacks$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    i = this.idService;
                return g.Logger.startActiveSpan("RegisterCallbacks", function(r) {
                    r && (r.setAttribute("code.function", "RegisterCallbacks"), r.setAttribute("outsystems.function.key", "7771df28-da71-4b3d-94d1-5d22b399317e"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("RegisterCallbacks"), e = t.callContext(e);
                        var l = new g.DataTypes.VariableHolder;
                        l.value = g.Logger.startActiveSpan("GetCallbackHandlers", function(o) {
                            o && (o.setAttribute("code.function", "GetCallbackHandlers"), o.setAttribute("outsystems.function.key", "c72e81bc-4d2a-4fe5-aeb6-557101826065"), o.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), o.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(ge, "GetCallbackHandlers", "RegisterCallbacks", {
                                    Initialized: g.DataConversion.JSNodeParamConverter.to(null, g.DataTypes.DataTypes.Object)
                                }, function(y) {
                                    var u = new(t.constructor.getVariableGroupType("OutSystemsUI.Navigation.TabsContentItem.RegisterCallbacks$getCallbackHandlersJSResult"));
                                    return u.initializedOut = g.DataConversion.JSNodeParamConverter.from(y.Initialized, g.DataTypes.DataTypes.Object), u
                                }, {
                                    InitializedHandler: t.clientActionProxies.initializedHandler$Action
                                }, {})
                            } finally {
                                o && o.end()
                            }
                        }, 1), m.tabsContentItemRegisterCallback$Action(n.variables.internalConfigsVar.uniqueIdAttr, T.registeredCallbackEvents.initialized, l.value.initializedOut, e)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__registerCallbacks$Action
        }
        set _registerCallbacks$Action(e) {
            this.__registerCallbacks$Action = e
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    i = this.idService;
                return g.Logger.startActiveSpan("OnDestroy", function(r) {
                    r && (r.setAttribute("code.function", "OnDestroy"), r.setAttribute("outsystems.function.key", "a9923e42-ceae-41d4-a4e6-5fd8fbbc733d"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnDestroy"), e = t.callContext(e), m.tabsContentItemDestroy$Action(n.variables.internalConfigsVar.uniqueIdAttr, e)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(e) {
            this.__onDestroy$Action = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    i = this.idService;
                return g.Logger.startActiveSpan("OnInitialize", function(r) {
                    r && (r.setAttribute("code.function", "OnInitialize"), r.setAttribute("outsystems.function.key", "afd51378-aff3-4465-8923-7251e73145cf"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e);
                        var l = new g.DataTypes.VariableHolder,
                            o = new g.DataTypes.VariableHolder(new g.DataTypes.JSONSerializeOutputType);
                        m.logEvent$Action(T.logType.general, "Going to create TabsContentItem", e), l.value = m.generateUniqueId$Action(n.variables.internalConfigsVar.uniqueIdAttr, e), n.variables.internalConfigsVar.uniqueIdAttr = l.value.unique_IDOut, n.variables.internalConfigsVar.extendedClassAttr = n.variables.extendedClassIn, o.value.jSONOut = g.JSONUtils.serializeToJSON(n.variables.internalConfigsVar, !0, !1), m.tabsContentItemCreate$Action(n.variables.internalConfigsVar.uniqueIdAttr, o.value.jSONOut, e), t._registerCallbacks$Action(e)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        get _initializedHandler$Action() {
            return this.hasOwnProperty("__initializedHandler$Action") || (this.__initializedHandler$Action = function(e, n) {
                var t = this.model,
                    i = this.controller,
                    r = this.idService;
                return g.Logger.startActiveSpan("InitializedHandler", function(l) {
                    return l && (l.setAttribute("code.function", "InitializedHandler"), l.setAttribute("outsystems.function.key", "da69907d-3252-4c46-b538-41b89fae841b"), l.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), l.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), g.Flow.tryFinally(function() {
                        i.ensureControllerAlive("InitializedHandler"), n = i.callContext(n);
                        var o = new g.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("OutSystemsUI.Navigation.TabsContentItem.InitializedHandler$vars")));
                        return o.value.tabsContentItemIdInLocal = e, g.Flow.executeAsyncFlow(function() {
                            return i.initialized$Action(o.value.tabsContentItemIdInLocal, n)
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
        onParametersChanged$Action(e) {
            var n = this.controller;
            return g.Logger.startActiveSpan("OnParametersChanged__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnParametersChanged"), t.setAttribute("outsystems.function.key", "1f30b33a-e506-48c8-8af0-bbdb38d5fc79"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onParametersChanged$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var n = this.controller;
            return g.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "4538d2ad-bf2d-48dc-a412-84c7f483e78e"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onReady$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        registerCallbacks$Action(e) {
            var n = this.controller;
            return g.Logger.startActiveSpan("RegisterCallbacks__proxy", function(t) {
                t && (t.setAttribute("code.function", "RegisterCallbacks"), t.setAttribute("outsystems.function.key", "7771df28-da71-4b3d-94d1-5d22b399317e"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._registerCallbacks$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onDestroy$Action(e) {
            var n = this.controller;
            return g.Logger.startActiveSpan("OnDestroy__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnDestroy"), t.setAttribute("outsystems.function.key", "a9923e42-ceae-41d4-a4e6-5fd8fbbc733d"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onDestroy$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onInitialize$Action(e) {
            var n = this.controller;
            return g.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "afd51378-aff3-4465-8923-7251e73145cf"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onInitialize$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        initializedHandler$Action(e, n) {
            var t = this.controller;
            return g.Logger.startActiveSpan("InitializedHandler__proxy", function(i) {
                return i && (i.setAttribute("code.function", "InitializedHandler"), i.setAttribute("outsystems.function.key", "da69907d-3252-4c46-b538-41b89fae841b"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), g.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._initializedHandler$Action, n, e)
                }, function() {
                    i && i.end()
                })
            }, 0)
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
    let A = a;
    oe = A, oe.registerVariableGroupType("OutSystemsUI.Navigation.TabsContentItem.RegisterCallbacks$getCallbackHandlersJSResult", [{
        name: "Initialized",
        attrName: "initializedOut",
        mandatory: !0,
        dataType: g.DataTypes.DataTypes.Object,
        defaultValue: s(function() {
            return null
        }, "defaultValue")
    }]), oe.registerVariableGroupType("OutSystemsUI.Navigation.TabsContentItem.InitializedHandler$vars", [{
        name: "TabsContentItemId",
        attrName: "tabsContentItemIdInLocal",
        mandatory: !1,
        dataType: g.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }])
}
var oe, Ue = new g.Controller.ControllerFactory(oe, M);
var Yt = O.PlaceholderContent,
    Zt = O.IteratorPlaceholderContent,
    V = class V extends p.BaseWebBlock {
        static get displayName() {
            return "Navigation.TabsContentItem"
        }
        static getAttributes() {
            return {
                codeFunction: "TabsContentItem",
                functionKey: "ab717706-de5b-407c-9157-5c6a715777bb",
                functionOwnerName: "OutSystemsUI",
                functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return De
        }
        get controllerFactory() {
            return Ue
        }
        get title() {
            return ""
        }
        internalRender() {
            let a = this.model,
                f = this.controller,
                e = this.idService,
                n = f.validationService,
                t = this.widgetsRecordProvider,
                i = f.callContext(),
                r = V.ifWidget,
                l = V.textWidget,
                o = V.asPrimitiveValue,
                y = V.getTranslation,
                u = this;
            return se.createElement("div", this.getRootNodeProperties(), se.createElement(E, {
                extendedProperties: {
                    className: "osui-tabs__content-item",
                    name: a.variables.internalConfigsVar.uniqueIdAttr
                },
                tag: "article",
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, se.createElement(N, {
                align: 0,
                content: u.props.placeholders.content,
                style: "display-contents",
                _idProps: {
                    service: e,
                    name: "Content"
                },
                _widgetRecordProvider: t
            })))
        }
    };
s(V, "View");
var ye = V,
    K = ye;
var k = B(W());
var Be = {};
var b = S; {
    let a = class a extends b.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, Be);
            var i = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {
                getCFDsAllPlansByTabID$AggrRefresh: 0
            }, this.dataFetchDependentsGraph = {
                getCFDsAllPlansByTabID$AggrRefresh: []
            }, this.shouldSendClientVarsToDataSources = !0
        }
        get getCFDsAllPlansByTabID$AggrRefresh() {
            return this.hasOwnProperty("_getCFDsAllPlansByTabID$AggrRefresh") || (this._getCFDsAllPlansByTabID$AggrRefresh = function() {
                var e = function(n, t, o) {
                    var r = this.model,
                        l = this.controller,
                        o = l.callContext(o);
                    return l.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetCFDsAllPlansByTabID", "screenservices/PartnersHub/CommissionPlans/ActionBox/ScreenDataSetGetCFDsAllPlansByTabID", "vodODdryIVet8me3wa5N_A", n, t, function(y) {
                        r.variables.getCFDsAllPlansByTabIDAggr.dataFetchStatusAttr = y
                    }, function(y) {
                        r.variables.getCFDsAllPlansByTabIDAggr.replaceWith(b.DataConversion.ServerDataConverter.from(y, r.variables.getCFDsAllPlansByTabIDAggr.constructor))
                    }, void 0, void 0, void 0, o, Pe, !0).then(function() {
                        l._onAfterFetchPlans$Action(l.callContext(o))
                    })
                }.bind(this);
                return b.Logger.startActiveSpan("GetCFDsAllPlansByTabID", function(n) {
                    return n && (n.setAttribute("code.function", "GetCFDsAllPlansByTabID"), n.setAttribute("outsystems.function.key", "775ef1c1-5809-4945-b63f-e8a6b510dd74"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "SCREEN_SERVICE_AGGREGATE_CALL")), b.Flow.tryFinally(function() {
                        return e()
                    }, function() {
                        n && n.end()
                    })
                }, 0)
            }), this._getCFDsAllPlansByTabID$AggrRefresh
        }
        set getCFDsAllPlansByTabID$AggrRefresh(e) {
            this._getCFDsAllPlansByTabID$AggrRefresh = e
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = ["getCFDsAllPlansByTabID$AggrRefresh"]), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onClickActionBox$Action() {
            return this.hasOwnProperty("__onClickActionBox$Action") || (this.__onClickActionBox$Action = function(e, n) {
                var t = this.model,
                    i = this.controller,
                    r = this.idService;
                return b.Logger.startActiveSpan("OnClickActionBox", function(l) {
                    l && (l.setAttribute("code.function", "OnClickActionBox"), l.setAttribute("outsystems.function.key", "28951d0e-d68a-4ff5-9876-bc293d81fbde"), l.setAttribute("outsystems.function.owner.name", "PartnersHub"), l.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("OnClickActionBox"), n = i.callContext(n);
                        var o = new b.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("PartnersHub.CommissionPlans.ActionBox.OnClickActionBox$vars")));
                        return o.value.plansDataInLocal = e.clone(), t.variables.getCFDsAllPlansByTabIDAggr.listOut.getCurrent(n.iterationContext).cFDsAllPlansAttr.commissionTypesIdAttr === b.BuiltinFunctions.nullIdentifier() ? b.Navigation.navigateTo(b.Navigation.generateScreenURL("PartnersHub", "Plans/:Title/:PlanId", {
                            PlanId: b.DataConversion.ServerDataConverter.to(o.value.plansDataInLocal.idAttr, b.DataTypes.DataTypes.Integer),
                            Title: b.DataConversion.ServerDataConverter.to(o.value.plansDataInLocal.labelAttr, b.DataTypes.DataTypes.Text)
                        }), b.Transitions.createTransition(b.Transitions.TransitionAnimation.Default), n, !0) : b.Navigation.navigateTo(b.Navigation.generateScreenURL("PartnersHub", "PlanDetails", {
                            Note: b.DataConversion.ServerDataConverter.to(o.value.plansDataInLocal.noteAttr, b.DataTypes.DataTypes.Text),
                            PlanId: b.DataConversion.ServerDataConverter.to(o.value.plansDataInLocal.idAttr, b.DataTypes.DataTypes.Integer),
                            Title: b.DataConversion.ServerDataConverter.to(o.value.plansDataInLocal.labelAttr, b.DataTypes.DataTypes.Text),
                            IsSubPlan: b.DataConversion.ServerDataConverter.to(!1, b.DataTypes.DataTypes.Boolean),
                            CommissionType: b.DataConversion.ServerDataConverter.to(t.variables.getCFDsAllPlansByTabIDAggr.listOut.getCurrent(n.iterationContext).commissionTypeAttr.typeAttr, b.DataTypes.DataTypes.Text)
                        }), b.Transitions.createTransition(b.Transitions.TransitionAnimation.Default), n, !0)
                    } finally {
                        l && l.end()
                    }
                }, 1)
            }), this.__onClickActionBox$Action
        }
        set _onClickActionBox$Action(e) {
            this.__onClickActionBox$Action = e
        }
        get _onAfterFetchPlans$Action() {
            return this.hasOwnProperty("__onAfterFetchPlans$Action") || (this.__onAfterFetchPlans$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    i = this.idService;
                return b.Logger.startActiveSpan("OnAfterFetchPlans", function(r) {
                    r && (r.setAttribute("code.function", "OnAfterFetchPlans"), r.setAttribute("outsystems.function.key", "5802910c-ca8c-49da-8ff1-210c987fcb5a"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnAfterFetchPlans"), e = t.callContext(e), n.variables.isLoadingVar = !1
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onAfterFetchPlans$Action
        }
        set _onAfterFetchPlans$Action(e) {
            this.__onAfterFetchPlans$Action = e
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    i = this.idService;
                return b.Logger.startActiveSpan("OnParametersChanged", function(r) {
                    return r && (r.setAttribute("code.function", "OnParametersChanged"), r.setAttribute("outsystems.function.key", "8add6b6c-55b9-422d-a894-bf3c479fd73a"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), b.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("OnParametersChanged"), e = t.callContext(e), b.Flow.executeAsyncFlow(function() {
                            var l = t.getCFDsAllPlansByTabID$AggrRefresh(50, 0, e);
                            return n.flush(), l
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(e) {
            this.__onParametersChanged$Action = e
        }
        onClickActionBox$Action(e, n) {
            var t = this.controller;
            return b.Logger.startActiveSpan("OnClickActionBox__proxy", function(i) {
                i && (i.setAttribute("code.function", "OnClickActionBox"), i.setAttribute("outsystems.function.key", "28951d0e-d68a-4ff5-9876-bc293d81fbde"), i.setAttribute("outsystems.function.owner.name", "PartnersHub"), i.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onClickActionBox$Action, n, e)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        onAfterFetchPlans$Action(e) {
            var n = this.controller;
            return b.Logger.startActiveSpan("OnAfterFetchPlans__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnAfterFetchPlans"), t.setAttribute("outsystems.function.key", "5802910c-ca8c-49da-8ff1-210c987fcb5a"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onAfterFetchPlans$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onParametersChanged$Action(e) {
            var n = this.controller;
            return b.Logger.startActiveSpan("OnParametersChanged__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnParametersChanged"), t.setAttribute("outsystems.function.key", "8add6b6c-55b9-422d-a894-bf3c479fd73a"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), b.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onParametersChanged$Action, e)
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
            return ne.defaultTimeout
        }
    };
    s(a, "ControllerInner");
    let A = a;
    Ae = A, Ae.registerVariableGroupType("PartnersHub.CommissionPlans.ActionBox.OnClickActionBox$vars", [{
        name: "PlansData",
        attrName: "plansDataInLocal",
        mandatory: !0,
        dataType: b.DataTypes.DataTypes.Record,
        defaultValue: s(function() {
            return new ce
        }, "defaultValue"),
        complexType: ce
    }])
}
var Ae, We = new b.Controller.ControllerFactory(Ae, re);
var he = S,
    Ye = O.PlaceholderContent,
    Ze = O.IteratorPlaceholderContent,
    z = class z extends p.BaseWebBlock {
        static get displayName() {
            return "CommissionPlans.ActionBox"
        }
        static getAttributes() {
            return {
                codeFunction: "ActionBox",
                functionKey: "88f652fd-95fb-453a-9def-ea33366203da",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.CommissionPlans.ActionBox.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [j]
        }
        get modelFactory() {
            return Re
        }
        get controllerFactory() {
            return We
        }
        get title() {
            return ""
        }
        internalRender() {
            let a = this.model,
                f = this.controller,
                e = this.idService,
                n = f.validationService,
                t = this.widgetsRecordProvider,
                i = f.callContext(),
                r = z.ifWidget,
                l = z.textWidget,
                o = z.asPrimitiveValue,
                y = z.getTranslation,
                u = this;
            return k.createElement("div", this.getRootNodeProperties(), k.createElement(j, {
                getOwnerSpan: s(function() {
                    return u.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return u.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    IsLoading: a.variables.isLoadingVar
                },
                events: {
                    _handleError: s(function(c) {
                        f.handleError(c)
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
                    content: new Ye(function() {
                        return [k.createElement(H, {
                            animateItems: !0,
                            extendedProperties: {
                                "disable-virtualization": "True"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mode: 0,
                            source: a.variables.getCFDsAllPlansByTabIDAggr.listOut,
                            style: a.getCachedValue(e.getId("xsTaDLEKWkmI+RtY3oLfQg.Style"), function() {
                                return "action-box-container " + (a.variables.getCFDsAllPlansByTabIDAggr.listOut.length <= 4 ? "two-column-container" : "three-column-container")
                            }, function() {
                                return a.variables.getCFDsAllPlansByTabIDAggr.listOut.length
                            }),
                            tag: "div",
                            _idProps: {
                                service: e,
                                uuid: "1"
                            },
                            _widgetRecordProvider: t,
                            source_dataFetchStatus: he.Model.calculateDataFetchStatus(a.variables.getCFDsAllPlansByTabIDAggr.dataFetchStatusAttr),
                            style_dataFetchStatus: he.Model.calculateDataFetchStatus(a.variables.getCFDsAllPlansByTabIDAggr.dataFetchStatusAttr),
                            placeholders: {
                                content: new Ze(function(c, h) {
                                    return [k.createElement(P, {
                                        align: 0,
                                        animate: !1,
                                        extendedEvents: {
                                            onClick: s(function() {
                                                var _ = h.clone();
                                                f.onClickActionBox$Action(a.variables.getCFDsAllPlansByTabIDAggr.listOut.getCurrent(h.iterationContext).cFDsAllPlansAttr, f.callContext(_))
                                            }, "onClick")
                                        },
                                        style: "action-box",
                                        visible: !0,
                                        _idProps: {
                                            service: c,
                                            uuid: "2"
                                        },
                                        _widgetRecordProvider: t,
                                        _dependencies: [o(a.variables.getCFDsAllPlansByTabIDAggr.dataFetchStatusAttr), o(a.variables.getCFDsAllPlansByTabIDAggr.listOut.getCurrent(h.iterationContext).cFDsAllPlansAttr.labelAttr)]
                                    }, k.createElement(w, {
                                        value: a.variables.getCFDsAllPlansByTabIDAggr.listOut.getCurrent(h.iterationContext).cFDsAllPlansAttr.labelAttr,
                                        _idProps: {
                                            service: c,
                                            uuid: "3"
                                        },
                                        _widgetRecordProvider: t,
                                        value_dataFetchStatus: he.Model.calculateDataFetchStatus(a.variables.getCFDsAllPlansByTabIDAggr.dataFetchStatusAttr)
                                    }), k.createElement(Ee, {
                                        gridProperties: {
                                            classes: "ThemeGrid_MarginGutter"
                                        },
                                        icon: "angle-right",
                                        iconSize: 1,
                                        style: "icon",
                                        visible: !0,
                                        _idProps: {
                                            service: c,
                                            uuid: "4"
                                        },
                                        _widgetRecordProvider: t
                                    }))]
                                }, i, e, "1")
                            },
                            _dependencies: [o(a.variables.getCFDsAllPlansByTabIDAggr.dataFetchStatusAttr)]
                        })]
                    })
                },
                _dependencies: [o(a.variables.getCFDsAllPlansByTabIDAggr.dataFetchStatusAttr), o(a.variables.getCFDsAllPlansByTabIDAggr.listOut)]
            }))
        }
    };
s(z, "View");
var Ce = z,
    X = Ce;
var I = B(W());
var et = {
        "lGVMjowhlESn00LuWQ6SJg#Value": "\u0647\u0630\u0647 \u0627\u0644\u062E\u0637\u0629 \u063A\u064A\u0631 \u0645\u062A\u0627\u062D\u0629 \u0644\u0644\u0634\u0631\u0643\u0627\u0621 \u0627\u0644\u0630\u064A\u0646 \u064A\u0631\u0648\u062C\u0648\u0646 \u0644\u0644\u0639\u0645\u0644\u0627\u0621 \u0627\u0644\u0645\u0642\u064A\u0645\u064A\u0646 \u0641\u064A \u0627\u0644\u0627\u062A\u062D\u0627\u062F \u0627\u0644\u0623\u0648\u0631\u0648\u0628\u064A.",
        "HvaQTXeMqEy7LlNODOdKuQ#Value": "\u062A\u0646\u0628\u064A\u0647:",
        "+YlNXA3x3ECK3VjGGX+CEA#ValueExpression.-486072707.1": "\u0627\u0631\u0628\u062D \u0639\u0646\u062F\u0645\u0627 \u064A\u062A\u062F\u0627\u0648\u0644 \u0639\u0645\u0644\u0627\u0624\u0643 \u0639\u0644\u0649",
        "+YlNXA3x3ECK3VjGGX+CEA#ValueExpression.153852865.1": "\u0645\u0646\u0635\u0629.",
        "sQvdRiufbkqbBbseWgsSDg#Value": "\u0625\u0630\u0627 \u0643\u0627\u0646\u062A \u0639\u0645\u0648\u0644\u0627\u062A \u0639\u0642\u0648\u062F \u0627\u0644\u0641\u0631\u0648\u0642\u0627\u062A (CFDs) \u0644\u062F\u064A\u0643 \u063A\u064A\u0631 \u0645\u0641\u0639\u0644\u0629\u060C \u062A\u0648\u0627\u0635\u0644 \u0645\u0639 \u0645\u062F\u064A\u0631 \u062D\u0633\u0627\u0628\u0643."
    },
    tt = {
        "lGVMjowhlESn00LuWQ6SJg#Value": "Dieser Plan ist f\xFCr Partner, die Kunden mit Wohnsitz in der EU anwerben, nicht verf\xFCgbar.",
        "HvaQTXeMqEy7LlNODOdKuQ#Value": "Haftungsausschluss:",
        "+YlNXA3x3ECK3VjGGX+CEA#ValueExpression.-486072707.1": "Verdienen Sie, wenn Ihre Kunden mit einem",
        "sQvdRiufbkqbBbseWgsSDg#Value": "Falls Ihre CFD-Provisionen nicht aktiviert sind, wenden Sie sich an Ihren Kundenbetreuer."
    },
    nt = {
        "lGVMjowhlESn00LuWQ6SJg#Value": "Este plan no est\xE1 disponible para socios que promocionen a clientes residentes en la UE.",
        "HvaQTXeMqEy7LlNODOdKuQ#Value": "Deslinde de responsabilidad:",
        "+YlNXA3x3ECK3VjGGX+CEA#ValueExpression.-486072707.1": "Gana cuando tus clientes operan en una",
        "+YlNXA3x3ECK3VjGGX+CEA#ValueExpression.153852865.1": "cuenta",
        "sQvdRiufbkqbBbseWgsSDg#Value": "Si tu plan de volumen de ventas no est\xE1 activado, contacta a tu gerente de cuenta."
    },
    rt = {
        "lGVMjowhlESn00LuWQ6SJg#Value": "Ce plan n'est pas disponible pour les partenaires qui font la promotion \xE0 des clients r\xE9sidant dans l'UE.",
        "HvaQTXeMqEy7LlNODOdKuQ#Value": "Avertissement :",
        "+YlNXA3x3ECK3VjGGX+CEA#ValueExpression.-486072707.1": "Faites des gains lorsque vos clients tradent sur un",
        "sQvdRiufbkqbBbseWgsSDg#Value": "Si vous ne recevez pas de commissions sur les CFD, contactez votre gestionnaire de compte."
    },
    it = {
        "lGVMjowhlESn00LuWQ6SJg#Value": "Questo piano non \xE8 disponibile per i partner che fanno promozione a clienti residenti nell'UE.",
        "HvaQTXeMqEy7LlNODOdKuQ#Value": "Dichiarazione di non responsabilit\xE0:",
        "+YlNXA3x3ECK3VjGGX+CEA#ValueExpression.-486072707.1": "Guadagna quando i tuoi clienti fanno trading su",
        "sQvdRiufbkqbBbseWgsSDg#Value": "Se le commissioni per CFD non sono attivata, contatta il tuo account manager."
    },
    at = {
        "lGVMjowhlESn00LuWQ6SJg#Value": "Ten plan nie jest dost\u0119pny dla partner\xF3w, kt\xF3rzy promuj\u0105 klient\xF3w zamieszka\u0142ych w UE.",
        "HvaQTXeMqEy7LlNODOdKuQ#Value": "Zastrze\u017Cenie:",
        "+YlNXA3x3ECK3VjGGX+CEA#ValueExpression.-486072707.1": "Zarabiaj, gdy Twoi klienci inwestuj\u0105 na",
        "sQvdRiufbkqbBbseWgsSDg#Value": "Je\u015Bli prowizje od kontrakt\xF3w CFD nie s\u0105 aktywowane, skontaktuj si\u0119 ze swoim mened\u017Cerem konta."
    },
    ot = {
        "lGVMjowhlESn00LuWQ6SJg#Value": "Este plano n\xE3o est\xE1 dispon\xEDvel para parceiros que promovam a clientes residentes na UE.",
        "HvaQTXeMqEy7LlNODOdKuQ#Value": "Isen\xE7\xE3o de responsabilidade:",
        "+YlNXA3x3ECK3VjGGX+CEA#ValueExpression.-486072707.1": "Ganhe quando os seus clientes negociarem numa",
        "sQvdRiufbkqbBbseWgsSDg#Value": "Se o plano de Volume de Neg\xF3cios n\xE3o estiver ativo, contacte o seu gestor de conta."
    },
    st = {
        "lGVMjowhlESn00LuWQ6SJg#Value": "\u042D\u0442\u043E\u0442 \u043F\u043B\u0430\u043D \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D \u0434\u043B\u044F \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u0440\u0438\u0432\u043B\u0435\u043A\u0430\u044E\u0442 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u0438\u0437 \u0415\u0421.",
        "HvaQTXeMqEy7LlNODOdKuQ#Value": "\u041E\u0442\u043A\u0430\u0437 \u043E\u0442 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438:",
        "+YlNXA3x3ECK3VjGGX+CEA#ValueExpression.-486072707.1": "\u0417\u0430\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0439\u0442\u0435, \u043A\u043E\u0433\u0434\u0430 \u0432\u0430\u0448\u0438 \u043A\u043B\u0438\u0435\u043D\u0442\u044B \u0442\u043E\u0440\u0433\u0443\u044E\u0442 \u043D\u0430",
        "sQvdRiufbkqbBbseWgsSDg#Value": "\u0415\u0441\u043B\u0438 \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u0438 \u043F\u043E CFD \u043D\u0435 \u0430\u043A\u0442\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D\u044B, \u0441\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u0432\u0430\u0448\u0438\u043C \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u043E\u043C."
    },
    Ge = {
        "ar-001": {
            translations: et,
            isRTL: !0
        },
        "de-DE": {
            translations: tt,
            isRTL: !1
        },
        "es-ES": {
            translations: nt,
            isRTL: !1
        },
        "fr-FR": {
            translations: rt,
            isRTL: !1
        },
        "it-IT": {
            translations: it,
            isRTL: !1
        },
        "pl-PL": {
            translations: at,
            isRTL: !1
        },
        "pt-PT": {
            translations: ot,
            isRTL: !1
        },
        "ru-RU": {
            translations: st,
            isRTL: !1
        }
    };
var Me = S; {
    let a = class a extends Me.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, Ge);
            var i = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get onTabChange$Action() {
            return this.hasOwnProperty("_onTabChange$Action") || (this._onTabChange$Action = function() {
                return Promise.resolve()
            }), this._onTabChange$Action
        }
        set onTabChange$Action(e) {
            this._onTabChange$Action = e
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
            return ne.defaultTimeout
        }
    };
    s(a, "ControllerInner");
    let A = a;
    je = A
}
var je, qe = new Me.Controller.ControllerFactory(je, re);
var R = S,
    le = O.PlaceholderContent,
    Je = O.IteratorPlaceholderContent,
    L = class L extends p.BaseWebBlock {
        static get displayName() {
            return "CommissionPlans.CFDsTab"
        }
        static getAttributes() {
            return {
                codeFunction: "CFDsTab",
                functionKey: "e3cfc581-ab9c-4b67-871f-8718546f538e",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.CommissionPlans.CFDsTab.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [J, Q, K, q, X]
        }
        get modelFactory() {
            return we
        }
        get controllerFactory() {
            return qe
        }
        get title() {
            return ""
        }
        internalRender() {
            let a = this.model,
                f = this.controller,
                e = this.idService,
                n = f.validationService,
                t = this.widgetsRecordProvider,
                i = f.callContext(),
                r = L.ifWidget,
                l = L.textWidget,
                o = L.asPrimitiveValue,
                y = L.getTranslation,
                u = this;
            return I.createElement("div", this.getRootNodeProperties(), I.createElement(J, {
                getOwnerSpan: s(function() {
                    return u.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return u.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    StartingTab: a.variables.activeTabIn,
                    _startingTabInDataFetchStatus: R.Model.calculateDataFetchStatus(a.variables._activeTabInDataFetchStatus)
                },
                events: {
                    _handleError: s(function(c) {
                        f.handleError(c)
                    }, "_handleError"),
                    onTabChange$Action: s(function(c, h) {
                        var _ = i.clone();
                        f.onTabChange$Action(f.callContext(_))
                    }, "onTabChange$Action")
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
                    header: new le(function() {
                        return [I.createElement(H, {
                            animateItems: !0,
                            extendedProperties: {
                                "disable-virtualization": "True"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mode: 0,
                            source: a.variables.tabDataIn,
                            style: "custom-tab-header",
                            tag: "div",
                            _idProps: {
                                service: e,
                                uuid: "1"
                            },
                            _widgetRecordProvider: t,
                            source_dataFetchStatus: R.Model.calculateDataFetchStatus(a.variables._tabDataInDataFetchStatus),
                            placeholders: {
                                content: new Je(function(c, h) {
                                    return [I.createElement(Q, {
                                        getOwnerSpan: s(function() {
                                            return u.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: s(function() {
                                            return u.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {},
                                        events: {
                                            _handleError: s(function(_) {
                                                f.handleError(_)
                                            }, "_handleError")
                                        },
                                        _validationProps: {
                                            validationService: n
                                        },
                                        _idProps: {
                                            service: c,
                                            uuid: "2",
                                            alias: "2"
                                        },
                                        _widgetRecordProvider: t,
                                        placeholders: {
                                            title: new le(function() {
                                                return [I.createElement(w, {
                                                    value: a.variables.tabDataIn.getCurrent(h.iterationContext).tabsAttr,
                                                    _idProps: {
                                                        service: c,
                                                        uuid: "3"
                                                    },
                                                    _widgetRecordProvider: t,
                                                    value_dataFetchStatus: R.Model.calculateDataFetchStatus(a.variables._tabDataInDataFetchStatus)
                                                })]
                                            })
                                        },
                                        _dependencies: [o(a.variables._tabDataInDataFetchStatus), o(a.variables.tabDataIn.getCurrent(h.iterationContext).tabsAttr)]
                                    })]
                                }, i, e, "1")
                            },
                            _dependencies: [o(a.variables._tabDataInDataFetchStatus)]
                        })]
                    }),
                    content: new le(function() {
                        return [I.createElement(H, {
                            animateItems: !0,
                            extendedProperties: {
                                "disable-virtualization": "True"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mode: 0,
                            source: a.variables.tabDataIn,
                            style: "list list-group",
                            tag: "div",
                            _idProps: {
                                service: e,
                                uuid: "4"
                            },
                            _widgetRecordProvider: t,
                            source_dataFetchStatus: R.Model.calculateDataFetchStatus(a.variables._tabDataInDataFetchStatus),
                            placeholders: {
                                content: new Je(function(c, h) {
                                    return [I.createElement(K, {
                                        getOwnerSpan: s(function() {
                                            return u.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: s(function() {
                                            return u.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {},
                                        events: {
                                            _handleError: s(function(_) {
                                                f.handleError(_)
                                            }, "_handleError")
                                        },
                                        _validationProps: {
                                            validationService: n
                                        },
                                        _idProps: {
                                            service: c,
                                            uuid: "5",
                                            alias: "3"
                                        },
                                        _widgetRecordProvider: t,
                                        placeholders: {
                                            content: new le(function() {
                                                return [I.createElement(P, {
                                                    align: 0,
                                                    animate: !1,
                                                    extendedProperties: {
                                                        style: "display: flex; flex-direction: column; gap: 16px;"
                                                    },
                                                    visible: !0,
                                                    _idProps: {
                                                        service: c,
                                                        uuid: "6"
                                                    },
                                                    _widgetRecordProvider: t
                                                }, I.createElement(P, {
                                                    align: 0,
                                                    animate: !1,
                                                    gridProperties: {
                                                        classes: "OSInline"
                                                    },
                                                    style: "notification-banner",
                                                    visible: !0,
                                                    _idProps: {
                                                        service: c,
                                                        uuid: "7"
                                                    },
                                                    _widgetRecordProvider: t
                                                }, I.createElement(q, {
                                                    getOwnerSpan: s(function() {
                                                        return u.getChildSpan("render")
                                                    }, "getOwnerSpan"),
                                                    getOwnerDisposeSpan: s(function() {
                                                        return u.getChildSpan("destroy")
                                                    }, "getOwnerDisposeSpan"),
                                                    inputs: {
                                                        SVGCode: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 5.5C9.65625 5.5 7.53125 6.75 6.34375 8.75C5.1875 10.7812 5.1875 13.25 6.34375 15.25C7.53125 17.2812 9.65625 18.5 12 18.5C14.3125 18.5 16.4375 17.2812 17.625 15.25C18.7812 13.25 18.7812 10.7812 17.625 8.75C16.4375 6.75 14.3125 5.5 12 5.5ZM12 20C9.125 20 6.5 18.5 5.0625 16C3.625 13.5312 3.625 10.5 5.0625 8C6.5 5.53125 9.125 4 12 4C14.8438 4 17.4688 5.53125 18.9062 8C20.3438 10.5 20.3438 13.5312 18.9062 16C17.4688 18.5 14.8438 20 12 20ZM10.75 14.5H11.5V12.5H10.75C10.3125 12.5 10 12.1875 10 11.75C10 11.3438 10.3125 11 10.75 11H12.25C12.6562 11 13 11.3438 13 11.75V14.5H13.25C13.6562 14.5 14 14.8438 14 15.25C14 15.6875 13.6562 16 13.25 16H10.75C10.3125 16 10 15.6875 10 15.25C10 14.8438 10.3125 14.5 10.75 14.5ZM12 10C11.4375 10 11 9.5625 11 9C11 8.46875 11.4375 8 12 8C12.5312 8 13 8.46875 13 9C13 9.5625 12.5312 10 12 10Z" fill="#017AAD"/></svg>',
                                                        ExtendedClass: "custom-svg"
                                                    },
                                                    events: {
                                                        _handleError: s(function(_) {
                                                            f.handleError(_)
                                                        }, "_handleError")
                                                    },
                                                    _validationProps: {
                                                        validationService: n
                                                    },
                                                    _idProps: {
                                                        service: c,
                                                        uuid: "8",
                                                        alias: "4"
                                                    },
                                                    _widgetRecordProvider: t,
                                                    _dependencies: []
                                                }), I.createElement(G, {
                                                    style: "to-description",
                                                    text: [l(y("sQvdRiufbkqbBbseWgsSDg#Value", "If your CFDs commissions aren\u2019t activated, contact your account manager."))],
                                                    _idProps: {
                                                        service: c,
                                                        uuid: "9"
                                                    },
                                                    _widgetRecordProvider: t
                                                })), I.createElement(P, {
                                                    align: 0,
                                                    animate: !1,
                                                    extendedProperties: {
                                                        style: "text-align: left;"
                                                    },
                                                    visible: !0,
                                                    _idProps: {
                                                        service: c,
                                                        uuid: "10"
                                                    },
                                                    _widgetRecordProvider: t
                                                }, I.createElement(w, {
                                                    style: "to-description",
                                                    value: R.Injector.resolve(R.ServiceNames.TranslationsService).getMessage("+YlNXA3x3ECK3VjGGX+CEA#ValueExpression.-486072707.1", "Earn when your clients trade on a ") + a.variables.tabDataIn.getCurrent(h.iterationContext).tabsAttr + R.Injector.resolve(R.ServiceNames.TranslationsService).getMessage("+YlNXA3x3ECK3VjGGX+CEA#ValueExpression.153852865.1", " account."),
                                                    _idProps: {
                                                        service: c,
                                                        uuid: "11"
                                                    },
                                                    _widgetRecordProvider: t,
                                                    value_dataFetchStatus: R.Model.calculateDataFetchStatus(a.variables._tabDataInDataFetchStatus)
                                                })), I.createElement(X, {
                                                    getOwnerSpan: s(function() {
                                                        return u.getChildSpan("render")
                                                    }, "getOwnerSpan"),
                                                    getOwnerDisposeSpan: s(function() {
                                                        return u.getChildSpan("destroy")
                                                    }, "getOwnerDisposeSpan"),
                                                    inputs: {
                                                        PlanId: a.variables.tabDataIn.getCurrent(h.iterationContext).idAttr,
                                                        _planIdInDataFetchStatus: R.Model.calculateDataFetchStatus(a.variables._tabDataInDataFetchStatus)
                                                    },
                                                    events: {
                                                        _handleError: s(function(_) {
                                                            f.handleError(_)
                                                        }, "_handleError")
                                                    },
                                                    _validationProps: {
                                                        validationService: n
                                                    },
                                                    _idProps: {
                                                        service: c,
                                                        uuid: "12",
                                                        alias: "5"
                                                    },
                                                    _widgetRecordProvider: t,
                                                    _dependencies: []
                                                }), I.createElement(P, {
                                                    align: 0,
                                                    animate: !1,
                                                    extendedProperties: {
                                                        style: "display: flex; flex-direction: column;"
                                                    },
                                                    visible: !0,
                                                    _idProps: {
                                                        service: c,
                                                        uuid: "13"
                                                    },
                                                    _widgetRecordProvider: t
                                                }, I.createElement(G, {
                                                    style: "to-subtitle",
                                                    text: [l(y("HvaQTXeMqEy7LlNODOdKuQ#Value", "Disclaimer: "))],
                                                    _idProps: {
                                                        service: c,
                                                        uuid: "14"
                                                    },
                                                    _widgetRecordProvider: t
                                                }), I.createElement(E, {
                                                    extendedProperties: {
                                                        className: "disclaimer"
                                                    },
                                                    tag: "ul",
                                                    _idProps: {
                                                        service: c,
                                                        uuid: "15"
                                                    },
                                                    _widgetRecordProvider: t
                                                }, I.createElement(E, {
                                                    tag: "li",
                                                    _idProps: {
                                                        service: c,
                                                        uuid: "16"
                                                    },
                                                    _widgetRecordProvider: t
                                                }, l(y("lGVMjowhlESn00LuWQ6SJg#Value", "This plan is not available for partners who promote to clients residing in the EU."))))))]
                                            })
                                        },
                                        _dependencies: [o(a.variables._tabDataInDataFetchStatus), o(a.variables.tabDataIn.getCurrent(h.iterationContext).idAttr), o(a.variables.tabDataIn.getCurrent(h.iterationContext).tabsAttr)]
                                    })]
                                }, i, e, "2")
                            },
                            _dependencies: [o(a.variables._tabDataInDataFetchStatus)]
                        })]
                    })
                },
                _dependencies: [o(a.variables._tabDataInDataFetchStatus), o(a.variables.tabDataIn)]
            }))
        }
    };
s(L, "View");
var _e = L,
    Se = _e;
var D = S,
    Y = O.PlaceholderContent,
    Qe = O.IteratorPlaceholderContent,
    U = class U extends p.BaseWebScreen {
        static get displayName() {
            return "CommissionPlans.CFDs"
        }
        static getAttributes() {
            return {
                codeFunction: "CFDs",
                functionKey: "dc84b70f-206a-4d60-bd43-e0a2711b7cf5",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/PartnersHub.PHubTest.css", "css/PartnersHub.CommissionPlans.CFDs.css", "css/PartnersHub.PHubTest.extra.css"]
        }
        static getJsDependencies() {
            return ["scripts/PartnersHub.UserScripts.DerivAnalytics.js"]
        }
        static getBlocks() {
            return [de, ue, j, J, Q, K, q, X, Se]
        }
        get modelFactory() {
            return He
        }
        get controllerFactory() {
            return $e
        }
        get title() {
            return p.BaseWebScreen.getTranslation("D7eE3GogYE29Q+CicRt89Q#Title", "CFDs")
        }
        internalRender() {
            let a = this.model,
                f = this.controller,
                e = this.idService,
                n = f.validationService,
                t = this.widgetsRecordProvider,
                i = f.callContext(),
                r = U.ifWidget,
                l = U.textWidget,
                o = U.asPrimitiveValue,
                y = U.getTranslation,
                u = this;
            return C.createElement("div", this.getRootNodeProperties(), C.createElement(de, {
                getOwnerSpan: s(function() {
                    return u.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return u.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: s(function(c) {
                        f.handleError(c)
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
                    placeholder: new Y(function() {
                        return [C.createElement(P, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                className: "partners-hub-dashboard"
                            },
                            gridProperties: {
                                classes: "OSInline"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "1"
                            },
                            _widgetRecordProvider: t
                        }, C.createElement(ue, {
                            getOwnerSpan: s(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: s(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Title: "CFDs",
                                ShowLeftButton: !1
                            },
                            events: {
                                _handleError: s(function(c) {
                                    f.handleError(c)
                                }, "_handleError"),
                                rightButtonAction$Action: s(function() {
                                    var c = i.clone();
                                    f.onClickCloseButton$Action(f.callContext(c))
                                }, "rightButtonAction$Action")
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
                        }), C.createElement(j, {
                            getOwnerSpan: s(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: s(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                IsLoading: a.variables.isLoadingVar
                            },
                            events: {
                                _handleError: s(function(c) {
                                    f.handleError(c)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: n
                            },
                            _idProps: {
                                service: e,
                                uuid: "3",
                                alias: "3"
                            },
                            _widgetRecordProvider: t,
                            placeholders: {
                                content: new Y(function() {
                                    return [C.createElement(J, {
                                        getOwnerSpan: s(function() {
                                            return u.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: s(function() {
                                            return u.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            StartingTab: a.variables.activeTab1Var
                                        },
                                        events: {
                                            _handleError: s(function(c) {
                                                f.handleError(c)
                                            }, "_handleError"),
                                            onTabChange$Action: s(function(c, h) {
                                                var _ = i.clone();
                                                f.onTabChange$Action(h, f.callContext(_))
                                            }, "onTabChange$Action")
                                        },
                                        _validationProps: {
                                            validationService: n
                                        },
                                        _idProps: {
                                            service: e,
                                            uuid: "4",
                                            alias: "4"
                                        },
                                        _widgetRecordProvider: t,
                                        placeholders: {
                                            header: new Y(function() {
                                                return [C.createElement(H, {
                                                    animateItems: !0,
                                                    extendedProperties: {
                                                        "disable-virtualization": "True"
                                                    },
                                                    gridProperties: {
                                                        classes: "OSFillParent"
                                                    },
                                                    mode: 0,
                                                    source: a.variables.getCFDsTabInfoAggr.listOut,
                                                    style: "custom-tab-header",
                                                    tag: "div",
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "5"
                                                    },
                                                    _widgetRecordProvider: t,
                                                    source_dataFetchStatus: D.Model.calculateDataFetchStatus(a.variables.getCFDsTabInfoAggr.dataFetchStatusAttr),
                                                    placeholders: {
                                                        content: new Qe(function(c, h) {
                                                            return [C.createElement(Q, {
                                                                getOwnerSpan: s(function() {
                                                                    return u.getChildSpan("render")
                                                                }, "getOwnerSpan"),
                                                                getOwnerDisposeSpan: s(function() {
                                                                    return u.getChildSpan("destroy")
                                                                }, "getOwnerDisposeSpan"),
                                                                inputs: {},
                                                                events: {
                                                                    _handleError: s(function(_) {
                                                                        f.handleError(_)
                                                                    }, "_handleError")
                                                                },
                                                                _validationProps: {
                                                                    validationService: n
                                                                },
                                                                _idProps: {
                                                                    service: c,
                                                                    uuid: "6",
                                                                    alias: "5"
                                                                },
                                                                _widgetRecordProvider: t,
                                                                placeholders: {
                                                                    title: new Y(function() {
                                                                        return [C.createElement(w, {
                                                                            value: a.variables.getCFDsTabInfoAggr.listOut.getCurrent(h.iterationContext).cFDsTabInfoAttr.tabsAttr,
                                                                            _idProps: {
                                                                                service: c,
                                                                                uuid: "7"
                                                                            },
                                                                            _widgetRecordProvider: t,
                                                                            value_dataFetchStatus: D.Model.calculateDataFetchStatus(a.variables.getCFDsTabInfoAggr.dataFetchStatusAttr)
                                                                        })]
                                                                    })
                                                                },
                                                                _dependencies: [o(a.variables.getCFDsTabInfoAggr.dataFetchStatusAttr), o(a.variables.getCFDsTabInfoAggr.listOut.getCurrent(h.iterationContext).cFDsTabInfoAttr.tabsAttr)]
                                                            })]
                                                        }, i, e, "1")
                                                    },
                                                    _dependencies: [o(a.variables.getCFDsTabInfoAggr.dataFetchStatusAttr)]
                                                })]
                                            }),
                                            content: new Y(function() {
                                                return [C.createElement(H, {
                                                    animateItems: !0,
                                                    extendedProperties: {
                                                        "disable-virtualization": "True"
                                                    },
                                                    gridProperties: {
                                                        classes: "OSFillParent"
                                                    },
                                                    mode: 0,
                                                    source: a.variables.getCFDsTabInfoAggr.listOut,
                                                    style: "list list-group",
                                                    tag: "div",
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "8"
                                                    },
                                                    _widgetRecordProvider: t,
                                                    source_dataFetchStatus: D.Model.calculateDataFetchStatus(a.variables.getCFDsTabInfoAggr.dataFetchStatusAttr),
                                                    placeholders: {
                                                        content: new Qe(function(c, h) {
                                                            return [C.createElement(K, {
                                                                getOwnerSpan: s(function() {
                                                                    return u.getChildSpan("render")
                                                                }, "getOwnerSpan"),
                                                                getOwnerDisposeSpan: s(function() {
                                                                    return u.getChildSpan("destroy")
                                                                }, "getOwnerDisposeSpan"),
                                                                inputs: {},
                                                                events: {
                                                                    _handleError: s(function(_) {
                                                                        f.handleError(_)
                                                                    }, "_handleError")
                                                                },
                                                                _validationProps: {
                                                                    validationService: n
                                                                },
                                                                _idProps: {
                                                                    service: c,
                                                                    uuid: "9",
                                                                    alias: "6"
                                                                },
                                                                _widgetRecordProvider: t,
                                                                placeholders: {
                                                                    content: new Y(function() {
                                                                        return [C.createElement(P, {
                                                                            align: 0,
                                                                            animate: !1,
                                                                            extendedProperties: {
                                                                                style: "display: flex; flex-direction: column; gap: 16px;"
                                                                            },
                                                                            visible: !0,
                                                                            _idProps: {
                                                                                service: c,
                                                                                uuid: "10"
                                                                            },
                                                                            _widgetRecordProvider: t
                                                                        }, C.createElement(P, {
                                                                            align: 0,
                                                                            animate: !1,
                                                                            gridProperties: {
                                                                                classes: "OSInline"
                                                                            },
                                                                            style: "notification-banner",
                                                                            visible: !0,
                                                                            _idProps: {
                                                                                service: c,
                                                                                uuid: "11"
                                                                            },
                                                                            _widgetRecordProvider: t
                                                                        }, C.createElement(q, {
                                                                            getOwnerSpan: s(function() {
                                                                                return u.getChildSpan("render")
                                                                            }, "getOwnerSpan"),
                                                                            getOwnerDisposeSpan: s(function() {
                                                                                return u.getChildSpan("destroy")
                                                                            }, "getOwnerDisposeSpan"),
                                                                            inputs: {
                                                                                ExtendedClass: "custom-svg",
                                                                                SVGCode: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 5.5C9.65625 5.5 7.53125 6.75 6.34375 8.75C5.1875 10.7812 5.1875 13.25 6.34375 15.25C7.53125 17.2812 9.65625 18.5 12 18.5C14.3125 18.5 16.4375 17.2812 17.625 15.25C18.7812 13.25 18.7812 10.7812 17.625 8.75C16.4375 6.75 14.3125 5.5 12 5.5ZM12 20C9.125 20 6.5 18.5 5.0625 16C3.625 13.5312 3.625 10.5 5.0625 8C6.5 5.53125 9.125 4 12 4C14.8438 4 17.4688 5.53125 18.9062 8C20.3438 10.5 20.3438 13.5312 18.9062 16C17.4688 18.5 14.8438 20 12 20ZM10.75 14.5H11.5V12.5H10.75C10.3125 12.5 10 12.1875 10 11.75C10 11.3438 10.3125 11 10.75 11H12.25C12.6562 11 13 11.3438 13 11.75V14.5H13.25C13.6562 14.5 14 14.8438 14 15.25C14 15.6875 13.6562 16 13.25 16H10.75C10.3125 16 10 15.6875 10 15.25C10 14.8438 10.3125 14.5 10.75 14.5ZM12 10C11.4375 10 11 9.5625 11 9C11 8.46875 11.4375 8 12 8C12.5312 8 13 8.46875 13 9C13 9.5625 12.5312 10 12 10Z" fill="#017AAD"/></svg>'
                                                                            },
                                                                            events: {
                                                                                _handleError: s(function(_) {
                                                                                    f.handleError(_)
                                                                                }, "_handleError")
                                                                            },
                                                                            _validationProps: {
                                                                                validationService: n
                                                                            },
                                                                            _idProps: {
                                                                                service: c,
                                                                                uuid: "12",
                                                                                alias: "7"
                                                                            },
                                                                            _widgetRecordProvider: t,
                                                                            _dependencies: []
                                                                        }), C.createElement(G, {
                                                                            style: "to-description",
                                                                            text: [l(y("NICzHwuOdE6bB6Y_yndHiQ#Value", "If your CFDs commissions aren\u2019t activated, contact your account manager."))],
                                                                            _idProps: {
                                                                                service: c,
                                                                                uuid: "13"
                                                                            },
                                                                            _widgetRecordProvider: t
                                                                        })), C.createElement(P, {
                                                                            align: 0,
                                                                            animate: !1,
                                                                            extendedProperties: {
                                                                                style: "text-align: left;"
                                                                            },
                                                                            visible: !0,
                                                                            _idProps: {
                                                                                service: c,
                                                                                uuid: "14"
                                                                            },
                                                                            _widgetRecordProvider: t
                                                                        }, C.createElement(w, {
                                                                            style: "to-description",
                                                                            value: D.Injector.resolve(D.ServiceNames.TranslationsService).getMessage("Qb27PET050OY1Flxp96nsg#ValueExpression.-486072707.1", "Earn when your clients trade on a ") + a.variables.getCFDsTabInfoAggr.listOut.getCurrent(h.iterationContext).cFDsTabInfoAttr.tabsAttr + D.Injector.resolve(D.ServiceNames.TranslationsService).getMessage("Qb27PET050OY1Flxp96nsg#ValueExpression.153852865.1", " account."),
                                                                            _idProps: {
                                                                                service: c,
                                                                                uuid: "15"
                                                                            },
                                                                            _widgetRecordProvider: t,
                                                                            value_dataFetchStatus: D.Model.calculateDataFetchStatus(a.variables.getCFDsTabInfoAggr.dataFetchStatusAttr)
                                                                        })), C.createElement(X, {
                                                                            getOwnerSpan: s(function() {
                                                                                return u.getChildSpan("render")
                                                                            }, "getOwnerSpan"),
                                                                            getOwnerDisposeSpan: s(function() {
                                                                                return u.getChildSpan("destroy")
                                                                            }, "getOwnerDisposeSpan"),
                                                                            inputs: {
                                                                                PlanId: a.variables.getCFDsTabInfoAggr.listOut.getCurrent(h.iterationContext).cFDsTabInfoAttr.idAttr,
                                                                                _planIdInDataFetchStatus: D.Model.calculateDataFetchStatus(a.variables.getCFDsTabInfoAggr.dataFetchStatusAttr)
                                                                            },
                                                                            events: {
                                                                                _handleError: s(function(_) {
                                                                                    f.handleError(_)
                                                                                }, "_handleError")
                                                                            },
                                                                            _validationProps: {
                                                                                validationService: n
                                                                            },
                                                                            _idProps: {
                                                                                service: c,
                                                                                uuid: "16",
                                                                                alias: "8"
                                                                            },
                                                                            _widgetRecordProvider: t,
                                                                            _dependencies: []
                                                                        }), C.createElement(P, {
                                                                            align: 0,
                                                                            animate: !1,
                                                                            extendedProperties: {
                                                                                style: "display: flex; flex-direction: column;"
                                                                            },
                                                                            visible: !0,
                                                                            _idProps: {
                                                                                service: c,
                                                                                uuid: "17"
                                                                            },
                                                                            _widgetRecordProvider: t
                                                                        }, C.createElement(G, {
                                                                            style: "to-subtitle",
                                                                            text: [l(y("iOfsmBYxGEa8DKR5xjdxbQ#Value", "Disclaimer: "))],
                                                                            _idProps: {
                                                                                service: c,
                                                                                uuid: "18"
                                                                            },
                                                                            _widgetRecordProvider: t
                                                                        }), C.createElement(E, {
                                                                            extendedProperties: {
                                                                                className: "disclaimer"
                                                                            },
                                                                            tag: "ul",
                                                                            _idProps: {
                                                                                service: c,
                                                                                uuid: "19"
                                                                            },
                                                                            _widgetRecordProvider: t
                                                                        }, C.createElement(E, {
                                                                            tag: "li",
                                                                            _idProps: {
                                                                                service: c,
                                                                                uuid: "20"
                                                                            },
                                                                            _widgetRecordProvider: t
                                                                        }, l(y("UsWwYOVIS0ShP4gJ7G1PPw#Value", "This plan is not available for partners who promote to clients residing in the EU."))))))]
                                                                    })
                                                                },
                                                                _dependencies: [o(a.variables.getCFDsTabInfoAggr.dataFetchStatusAttr), o(a.variables.getCFDsTabInfoAggr.listOut.getCurrent(h.iterationContext).cFDsTabInfoAttr.idAttr), o(a.variables.getCFDsTabInfoAggr.listOut.getCurrent(h.iterationContext).cFDsTabInfoAttr.tabsAttr)]
                                                            })]
                                                        }, i, e, "2")
                                                    },
                                                    _dependencies: [o(a.variables.getCFDsTabInfoAggr.dataFetchStatusAttr)]
                                                })]
                                            })
                                        },
                                        _dependencies: [o(a.variables.getCFDsTabInfoAggr.dataFetchStatusAttr), o(a.variables.getCFDsTabInfoAggr.listOut)]
                                    }), C.createElement(P, {
                                        align: 0,
                                        animate: !1,
                                        gridProperties: {
                                            classes: "ThemeGrid_Width1 ThemeGrid_MarginGutter"
                                        },
                                        visible: !1,
                                        _idProps: {
                                            service: e,
                                            uuid: "21"
                                        },
                                        _widgetRecordProvider: t
                                    }, C.createElement(Se, {
                                        getOwnerSpan: s(function() {
                                            return u.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: s(function() {
                                            return u.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            TabData: a.getCachedValue(e.getId("v3lfUW0IgE+PQgxOavj6xQ.TabData"), function() {
                                                return D.DataConversion.JSConversions.typeConvertRecordList(a.variables.getCFDsTabInfoAggr.listOut, new Oe, function(c, h) {
                                                    return h = c.cFDsTabInfoAttr, h
                                                })
                                            }, function() {
                                                return a.variables.getCFDsTabInfoAggr.listOut
                                            }),
                                            _tabDataInDataFetchStatus: D.Model.calculateDataFetchStatus(a.variables.getCFDsTabInfoAggr.dataFetchStatusAttr),
                                            ActiveTab: a.variables.activeTab1Var
                                        },
                                        events: {
                                            _handleError: s(function(c) {
                                                f.handleError(c)
                                            }, "_handleError"),
                                            onTabChange$Action: s(function() {
                                                var c = i.clone();
                                                f.onTabChange$Action(a.variables.activeTab1Var, f.callContext(c))
                                            }, "onTabChange$Action")
                                        },
                                        _validationProps: {
                                            validationService: n
                                        },
                                        _idProps: {
                                            service: e,
                                            uuid: "22",
                                            alias: "9"
                                        },
                                        _widgetRecordProvider: t,
                                        _dependencies: []
                                    }))]
                                })
                            },
                            _dependencies: [o(a.variables.getCFDsTabInfoAggr.dataFetchStatusAttr), o(a.variables.getCFDsTabInfoAggr.listOut), o(a.variables.activeTab1Var)]
                        }))]
                    })
                },
                _dependencies: [o(a.variables.getCFDsTabInfoAggr.dataFetchStatusAttr), o(a.variables.getCFDsTabInfoAggr.listOut), o(a.variables.activeTab1Var), o(a.variables.isLoadingVar)]
            }))
        }
    };
s(U, "View");
var Ie = U,
    rr = Ie;
export {
    rr as
    default
};