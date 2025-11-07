import {
    a as P
} from "./_oschunk-24WIHVSN.js";
import {
    a as S,
    h as et,
    v as I
} from "./_oschunk-O5KC3WOL.js";
import {
    a as tt,
    g as _,
    m as T,
    o as E,
    q as H,
    r as D,
    s as $,
    t as w
} from "./_oschunk-NVHFAAS2.js";
import {
    Ea as L,
    Ga as d,
    la as m,
    ra as x,
    za as F
} from "./_oschunk-WCMQG33O.js";
import {
    X as A,
    c,
    f as Z
} from "./_oschunk-DFKJJKI4.js";
var b = A,
    J = class J extends b.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("InternalConfigs", "internalConfigsVar", "InternalConfigs", !0, !1, b.DataTypes.DataTypes.Record, function() {
                return b.DataTypes.ImmutableBase.getData(new x)
            }, !1, x), this.attr("TabsOrientation", "tabsOrientationIn", "TabsOrientation", !0, !1, b.DataTypes.DataTypes.Text, function() {
                return m.orientation.horizontal
            }, !1), this.attr("_tabsOrientationInDataFetchStatus", "_tabsOrientationInDataFetchStatus", "_tabsOrientationInDataFetchStatus", !0, !1, b.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("StartingTab", "startingTabIn", "StartingTab", !0, !1, b.DataTypes.DataTypes.Integer, function() {
                return 0
            }, !1), this.attr("_startingTabInDataFetchStatus", "_startingTabInDataFetchStatus", "_startingTabInDataFetchStatus", !0, !1, b.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Height", "heightIn", "Height", !0, !1, b.DataTypes.DataTypes.Text, function() {
                return "auto"
            }, !1), this.attr("_heightInDataFetchStatus", "_heightInDataFetchStatus", "_heightInDataFetchStatus", !0, !1, b.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("TabsVerticalPosition", "tabsVerticalPositionIn", "TabsVerticalPosition", !0, !1, b.DataTypes.DataTypes.Text, function() {
                return m.direction.left
            }, !1), this.attr("_tabsVerticalPositionInDataFetchStatus", "_tabsVerticalPositionInDataFetchStatus", "_tabsVerticalPositionInDataFetchStatus", !0, !1, b.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("OptionalConfigs", "optionalConfigsIn", "OptionalConfigs", !0, !1, b.DataTypes.DataTypes.Record, function() {
                return b.DataTypes.ImmutableBase.getData(new L)
            }, !1, L), this.attr("_optionalConfigsInDataFetchStatus", "_optionalConfigsInDataFetchStatus", "_optionalConfigsInDataFetchStatus", !0, !1, b.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, b.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, b.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(b.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
c(J, "VariablesRecord");
var R = J;
R.init();
var q = class q extends b.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
c(q, "WidgetsRecord");
var M = q,
    G = class G extends b.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return R
        }
        static getWidgetsRecordConstructor() {
            return M
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(a) {
            "TabsOrientation" in a && (this.variables.tabsOrientationIn = a.TabsOrientation, "_tabsOrientationInDataFetchStatus" in a && (this.variables._tabsOrientationInDataFetchStatus = a._tabsOrientationInDataFetchStatus)), "StartingTab" in a && (this.variables.startingTabIn = a.StartingTab, "_startingTabInDataFetchStatus" in a && (this.variables._startingTabInDataFetchStatus = a._startingTabInDataFetchStatus)), "Height" in a && (this.variables.heightIn = a.Height, "_heightInDataFetchStatus" in a && (this.variables._heightInDataFetchStatus = a._heightInDataFetchStatus)), "TabsVerticalPosition" in a && (this.variables.tabsVerticalPositionIn = a.TabsVerticalPosition, "_tabsVerticalPositionInDataFetchStatus" in a && (this.variables._tabsVerticalPositionInDataFetchStatus = a._tabsVerticalPositionInDataFetchStatus)), "OptionalConfigs" in a && (this.variables.optionalConfigsIn = a.OptionalConfigs, "_optionalConfigsInDataFetchStatus" in a && (this.variables._optionalConfigsInDataFetchStatus = a._optionalConfigsInDataFetchStatus)), "ExtendedClass" in a && (this.variables.extendedClassIn = a.ExtendedClass, "_extendedClassInDataFetchStatus" in a && (this.variables._extendedClassInDataFetchStatus = a._extendedClassInDataFetchStatus))
        }
    };
c(G, "Model");
var N = G;
N._hasValidationWidgetsValue = void 0;
var nt = new b.Model.ModelFactory(N);
var h = A,
    B = class B extends h.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("InternalConfigs", "internalConfigsVar", "InternalConfigs", !0, !1, h.DataTypes.DataTypes.Record, function() {
                return h.DataTypes.ImmutableBase.getData(new F)
            }, !1, F), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, h.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, h.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(h.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
c(B, "VariablesRecord");
var V = B;
V.init();
var K = class K extends h.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
c(K, "WidgetsRecord");
var j = K,
    Q = class Q extends h.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return V
        }
        static getWidgetsRecordConstructor() {
            return j
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(a) {
            "ExtendedClass" in a && (this.variables.extendedClassIn = a.ExtendedClass, "_extendedClassInDataFetchStatus" in a && (this.variables._extendedClassInDataFetchStatus = a._extendedClassInDataFetchStatus))
        }
    };
c(Q, "Model");
var p = Q;
p._hasValidationWidgetsValue = void 0;
var rt = new h.Model.ModelFactory(p);
var g = Z(tt());
var it = {};

function X(f, a, C, t) {
    f.IntializedHandler = a.InitializedHandler, f.OnChange = a.OnTabChangeHandler
}
c(X, "default");
var o = A; {
    let a = class a extends o.Controller.BaseViewController {
        constructor(t, e, n) {
            super(t, e, n, it);
            var i = this.controller;
            this.clientActionProxies = {
                initializedHandler$Action: c(function(r) {
                    return r = r === void 0 ? "" : r, i.executeActionInsideJSNode(i._initializedHandler$Action.bind(i, o.DataConversion.JSNodeParamConverter.from(r, o.DataTypes.DataTypes.Text)), i.callContext(), function(l) {
                        return {}
                    }, function() {}, "InitializedHandler")
                }, "initializedHandler$Action"),
                onTabChangeHandler$Action: c(function(r, l) {
                    return r = r === void 0 ? "" : r, l = l === void 0 ? 0 : l, i.executeActionInsideJSNode(i._onTabChangeHandler$Action.bind(i, o.DataConversion.JSNodeParamConverter.from(r, o.DataTypes.DataTypes.Text), o.DataConversion.JSNodeParamConverter.from(l, o.DataTypes.DataTypes.Integer)), i.callContext(), function(s) {
                        return {}
                    }, function() {}, "OnTabChangeHandler")
                }, "onTabChangeHandler$Action")
            }, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _registerCallback$Action() {
            return this.hasOwnProperty("__registerCallback$Action") || (this.__registerCallback$Action = function(t) {
                var e = this.model,
                    n = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("RegisterCallback", function(r) {
                    r && (r.setAttribute("code.function", "RegisterCallback"), r.setAttribute("outsystems.function.key", "11e96aaa-70a8-4668-8df4-3d7e25b3a75e"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("RegisterCallback"), t = n.callContext(t);
                        var l = new o.DataTypes.VariableHolder;
                        l.value = o.Logger.startActiveSpan("GetCallbackHandler", function(s) {
                            s && (s.setAttribute("code.function", "GetCallbackHandler"), s.setAttribute("outsystems.function.key", "66849ead-107e-48e5-a2b7-7e242c30a66b"), s.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), s.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return n.safeExecuteJSNode(X, "GetCallbackHandler", "RegisterCallback", {
                                    IntializedHandler: o.DataConversion.JSNodeParamConverter.to(null, o.DataTypes.DataTypes.Object),
                                    OnChange: o.DataConversion.JSNodeParamConverter.to(null, o.DataTypes.DataTypes.Object)
                                }, function(y) {
                                    var v = new(n.constructor.getVariableGroupType("OutSystemsUI.Navigation.Tabs.RegisterCallback$getCallbackHandlerJSResult"));
                                    return v.intializedHandlerOut = o.DataConversion.JSNodeParamConverter.from(y.IntializedHandler, o.DataTypes.DataTypes.Object), v.onChangeOut = o.DataConversion.JSNodeParamConverter.from(y.OnChange, o.DataTypes.DataTypes.Object), v
                                }, {
                                    InitializedHandler: n.clientActionProxies.initializedHandler$Action,
                                    OnTabChangeHandler: n.clientActionProxies.onTabChangeHandler$Action
                                }, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1), d.tabsRegisterCallback$Action(e.variables.internalConfigsVar.uniqueIdAttr, m.registeredCallbackEvents.initialized, l.value.intializedHandlerOut, t), d.tabsRegisterCallback$Action(e.variables.internalConfigsVar.uniqueIdAttr, m.registeredCallbackEvents.onChange, l.value.onChangeOut, t)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__registerCallback$Action
        }
        set _registerCallback$Action(t) {
            this.__registerCallback$Action = t
        }
        get _initializedHandler$Action() {
            return this.hasOwnProperty("__initializedHandler$Action") || (this.__initializedHandler$Action = function(t, e) {
                var n = this.model,
                    i = this.controller,
                    r = this.idService;
                return o.Logger.startActiveSpan("InitializedHandler", function(l) {
                    return l && (l.setAttribute("code.function", "InitializedHandler"), l.setAttribute("outsystems.function.key", "27280cce-f4dc-4adf-9fba-cf1482e03854"), l.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), l.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                        i.ensureControllerAlive("InitializedHandler"), e = i.callContext(e);
                        var s = new o.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("OutSystemsUI.Navigation.Tabs.InitializedHandler$vars")));
                        return s.value.tabsIdInLocal = t, o.Flow.executeAsyncFlow(function() {
                            return i.initialized$Action(s.value.tabsIdInLocal, e)
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
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(t) {
                var e = this.model,
                    n = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("OnInitialize", function(r) {
                    r && (r.setAttribute("code.function", "OnInitialize"), r.setAttribute("outsystems.function.key", "42ccda6f-41b3-4660-986f-b34150a4d85c"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("OnInitialize"), t = n.callContext(t);
                        var l = new o.DataTypes.VariableHolder,
                            s = new o.DataTypes.VariableHolder(new o.DataTypes.JSONSerializeOutputType);
                        d.logEvent$Action(m.logType.general, "Going to create Tabs", t), l.value = d.generateUniqueId$Action(e.variables.internalConfigsVar.uniqueIdAttr, t), e.variables.internalConfigsVar.uniqueIdAttr = l.value.unique_IDOut, e.variables.internalConfigsVar.extendedClassAttr = e.variables.extendedClassIn, e.variables.internalConfigsVar.startingTabAttr = e.variables.startingTabIn, e.variables.internalConfigsVar.tabsOrientationAttr = e.variables.tabsOrientationIn, e.variables.internalConfigsVar.tabsVerticalPositionAttr = e.variables.tabsVerticalPositionIn, e.variables.internalConfigsVar.heightAttr = e.variables.heightIn, e.variables.internalConfigsVar.justifyHeadersAttr = e.variables.optionalConfigsIn.justifyHeadersAttr, e.variables.internalConfigsVar.contentAutoHeightAttr = e.variables.optionalConfigsIn.contentAutoHeightAttr, s.value.jSONOut = o.JSONUtils.serializeToJSON(e.variables.internalConfigsVar, !0, !1), d.tabsCreate$Action(e.variables.internalConfigsVar.uniqueIdAttr, s.value.jSONOut, t), n._registerCallback$Action(t)
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
                    i = this.idService;
                return o.Logger.startActiveSpan("OnReady", function(r) {
                    r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "7d14b681-7504-4541-ae36-f5406edf8efe"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("OnReady"), t = n.callContext(t), d.tabsInitialize$Action(e.variables.internalConfigsVar.uniqueIdAttr, t), d.logEvent$Action(m.logType.general, "Tabs created", t)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(t) {
            this.__onReady$Action = t
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(t) {
                var e = this.model,
                    n = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("OnDestroy", function(r) {
                    r && (r.setAttribute("code.function", "OnDestroy"), r.setAttribute("outsystems.function.key", "890346e2-f639-4266-b0d5-1db2ea681631"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("OnDestroy"), t = n.callContext(t), d.tabsDestroy$Action(e.variables.internalConfigsVar.uniqueIdAttr, t)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(t) {
            this.__onDestroy$Action = t
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(t) {
                var e = this.model,
                    n = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("OnParametersChanged", function(r) {
                    r && (r.setAttribute("code.function", "OnParametersChanged"), r.setAttribute("outsystems.function.key", "f0d416cc-e6c0-4332-bf4e-41f84d176769"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("OnParametersChanged"), t = n.callContext(t), e.variables.startingTabIn !== e.variables.internalConfigsVar.startingTabAttr && (e.variables.internalConfigsVar.startingTabAttr = e.variables.startingTabIn, d.tabsChangeIntegerProperty$Action(e.variables.internalConfigsVar.uniqueIdAttr, "StartingTab", e.variables.internalConfigsVar.startingTabAttr, t)), e.variables.tabsOrientationIn !== e.variables.internalConfigsVar.tabsOrientationAttr && (e.variables.internalConfigsVar.tabsOrientationAttr = e.variables.tabsOrientationIn, d.tabsChangeTextProperty$Action(e.variables.internalConfigsVar.uniqueIdAttr, "TabsOrientation", e.variables.internalConfigsVar.tabsOrientationAttr, t)), e.variables.tabsVerticalPositionIn !== e.variables.internalConfigsVar.tabsVerticalPositionAttr && (e.variables.internalConfigsVar.tabsVerticalPositionAttr = e.variables.tabsVerticalPositionIn, d.tabsChangeTextProperty$Action(e.variables.internalConfigsVar.uniqueIdAttr, "TabsVerticalPosition", e.variables.internalConfigsVar.tabsVerticalPositionAttr, t)), e.variables.heightIn !== e.variables.internalConfigsVar.heightAttr && (e.variables.internalConfigsVar.heightAttr = e.variables.heightIn, d.tabsChangeTextProperty$Action(e.variables.internalConfigsVar.uniqueIdAttr, "Height", e.variables.internalConfigsVar.heightAttr, t)), e.variables.optionalConfigsIn.contentAutoHeightAttr !== e.variables.internalConfigsVar.contentAutoHeightAttr && (e.variables.internalConfigsVar.contentAutoHeightAttr = e.variables.optionalConfigsIn.contentAutoHeightAttr, d.tabsChangeBooleanProperty$Action(e.variables.internalConfigsVar.uniqueIdAttr, "ContentAutoHeight", e.variables.internalConfigsVar.contentAutoHeightAttr, t)), e.variables.optionalConfigsIn.justifyHeadersAttr !== e.variables.internalConfigsVar.justifyHeadersAttr && (e.variables.internalConfigsVar.justifyHeadersAttr = e.variables.optionalConfigsIn.justifyHeadersAttr, d.tabsChangeBooleanProperty$Action(e.variables.internalConfigsVar.uniqueIdAttr, "JustifyHeaders", e.variables.internalConfigsVar.justifyHeadersAttr, t)), e.variables.extendedClassIn !== e.variables.internalConfigsVar.extendedClassAttr && (e.variables.internalConfigsVar.extendedClassAttr = e.variables.extendedClassIn, d.tabsChangeTextProperty$Action(e.variables.internalConfigsVar.uniqueIdAttr, "ExtendedClass", e.variables.extendedClassIn, t))
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(t) {
            this.__onParametersChanged$Action = t
        }
        get _onTabChangeHandler$Action() {
            return this.hasOwnProperty("__onTabChangeHandler$Action") || (this.__onTabChangeHandler$Action = function(t, e, n) {
                var i = this.model,
                    r = this.controller,
                    l = this.idService;
                return o.Logger.startActiveSpan("OnTabChangeHandler", function(s) {
                    return s && (s.setAttribute("code.function", "OnTabChangeHandler"), s.setAttribute("outsystems.function.key", "f65fe446-321a-4141-9258-6ebd704cc406"), s.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), s.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                        r.ensureControllerAlive("OnTabChangeHandler"), n = r.callContext(n);
                        var y = new o.DataTypes.VariableHolder(new(r.constructor.getVariableGroupType("OutSystemsUI.Navigation.Tabs.OnTabChangeHandler$vars")));
                        return y.value.tabsIdInLocal = t, y.value.currentActiveTabInLocal = e, o.Flow.executeAsyncFlow(function() {
                            return i.variables.internalConfigsVar.startingTabAttr = y.value.currentActiveTabInLocal, r.onTabChange$Action(y.value.tabsIdInLocal, y.value.currentActiveTabInLocal, n)
                        })
                    }, function() {
                        s && s.end()
                    })
                }, 1)
            }), this.__onTabChangeHandler$Action
        }
        set _onTabChangeHandler$Action(t) {
            this.__onTabChangeHandler$Action = t
        }
        registerCallback$Action(t) {
            var e = this.controller;
            return o.Logger.startActiveSpan("RegisterCallback__proxy", function(n) {
                n && (n.setAttribute("code.function", "RegisterCallback"), n.setAttribute("outsystems.function.key", "11e96aaa-70a8-4668-8df4-3d7e25b3a75e"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._registerCallback$Action, t)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        initializedHandler$Action(t, e) {
            var n = this.controller;
            return o.Logger.startActiveSpan("InitializedHandler__proxy", function(i) {
                return i && (i.setAttribute("code.function", "InitializedHandler"), i.setAttribute("outsystems.function.key", "27280cce-f4dc-4adf-9fba-cf1482e03854"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._initializedHandler$Action, e, t)
                }, function() {
                    i && i.end()
                })
            }, 0)
        }
        onInitialize$Action(t) {
            var e = this.controller;
            return o.Logger.startActiveSpan("OnInitialize__proxy", function(n) {
                n && (n.setAttribute("code.function", "OnInitialize"), n.setAttribute("outsystems.function.key", "42ccda6f-41b3-4660-986f-b34150a4d85c"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._onInitialize$Action, t)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        onReady$Action(t) {
            var e = this.controller;
            return o.Logger.startActiveSpan("OnReady__proxy", function(n) {
                n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "7d14b681-7504-4541-ae36-f5406edf8efe"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._onReady$Action, t)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        onDestroy$Action(t) {
            var e = this.controller;
            return o.Logger.startActiveSpan("OnDestroy__proxy", function(n) {
                n && (n.setAttribute("code.function", "OnDestroy"), n.setAttribute("outsystems.function.key", "890346e2-f639-4266-b0d5-1db2ea681631"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._onDestroy$Action, t)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        onParametersChanged$Action(t) {
            var e = this.controller;
            return o.Logger.startActiveSpan("OnParametersChanged__proxy", function(n) {
                n && (n.setAttribute("code.function", "OnParametersChanged"), n.setAttribute("outsystems.function.key", "f0d416cc-e6c0-4332-bf4e-41f84d176769"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._onParametersChanged$Action, t)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        onTabChangeHandler$Action(t, e, n) {
            var i = this.controller;
            return o.Logger.startActiveSpan("OnTabChangeHandler__proxy", function(r) {
                return r && (r.setAttribute("code.function", "OnTabChangeHandler"), r.setAttribute("outsystems.function.key", "f65fe446-321a-4141-9258-6ebd704cc406"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._onTabChangeHandler$Action, n, t, e)
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
        set onTabChange$Action(t) {
            this._onTabChange$Action = t
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
                    i = this.idService;
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
                    i = this.idService;
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
                    i = this.idService;
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
                    i = this.idService;
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
    c(a, "ControllerInner");
    let f = a;
    O = f, O.registerVariableGroupType("OutSystemsUI.Navigation.Tabs.RegisterCallback$getCallbackHandlerJSResult", [{
        name: "IntializedHandler",
        attrName: "intializedHandlerOut",
        mandatory: !0,
        dataType: o.DataTypes.DataTypes.Object,
        defaultValue: c(function() {
            return null
        }, "defaultValue")
    }, {
        name: "OnChange",
        attrName: "onChangeOut",
        mandatory: !0,
        dataType: o.DataTypes.DataTypes.Object,
        defaultValue: c(function() {
            return null
        }, "defaultValue")
    }]), O.registerVariableGroupType("OutSystemsUI.Navigation.Tabs.InitializedHandler$vars", [{
        name: "TabsId",
        attrName: "tabsIdInLocal",
        mandatory: !1,
        dataType: o.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }]), O.registerVariableGroupType("OutSystemsUI.Navigation.Tabs.OnTabChangeHandler$vars", [{
        name: "TabsId",
        attrName: "tabsIdInLocal",
        mandatory: !1,
        dataType: o.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "CurrentActiveTab",
        attrName: "currentActiveTabInLocal",
        mandatory: !0,
        dataType: o.DataTypes.DataTypes.Integer,
        defaultValue: c(function() {
            return 0
        }, "defaultValue")
    }])
}
var O, at = new o.Controller.ControllerFactory(O, P);
var pt = _.PlaceholderContent,
    kt = _.IteratorPlaceholderContent,
    yt = c(function() {
        var f = E(function(a) {
            var C = a.model,
                t = a.controller,
                e = a.controller.idService,
                n = t.validationService,
                i = t.callContext(),
                r = $,
                l = w,
                s = {
                    props: a,
                    validateWidget: c(function(U) {
                        a.validateWidget(a, U)
                    }, "validateWidget")
                },
                y = C,
                v = D,
                lt = H,
                ct = T();
            return g.createElement("div", a.rootNodeProperties, g.createElement(S, {
                extendedProperties: {
                    className: "osui-tabs",
                    name: C.variables.internalConfigsVar.uniqueIdAttr
                },
                tag: "section",
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: y
            }, g.createElement(S, {
                extendedProperties: {
                    className: "osui-tabs__header"
                },
                tag: "header",
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: y
            }, g.createElement(I, {
                align: 0,
                content: s.props.placeholders.header,
                style: "display-contents ph",
                _idProps: {
                    service: e,
                    name: "Header"
                },
                _widgetRecordProvider: y
            }), g.createElement(et, {
                align: 0,
                animate: !1,
                style: "osui-tabs__header__indicator",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "3"
                },
                _widgetRecordProvider: y
            })), g.createElement(S, {
                extendedProperties: {
                    className: "osui-tabs__content"
                },
                tag: "section",
                _idProps: {
                    service: e,
                    uuid: "4"
                },
                _widgetRecordProvider: y
            }, v(!1, !1, this, function() {
                return []
            }, function() {
                return [g.createElement(I, {
                    align: 0,
                    content: s.props.placeholders.content,
                    style: "display-contents ph",
                    _idProps: {
                        service: e,
                        name: "Content"
                    },
                    _widgetRecordProvider: y
                })]
            }))))
        }, {
            topLevelComponent: !1,
            getAttributes: c(function() {
                return {
                    codeFunction: "Tabs",
                    functionKey: "3025cc59-1e44-46a6-b0d0-ec1a339f36d6",
                    functionOwnerName: "OutSystemsUI",
                    functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Navigation.Tabs",
            modelFactory: nt,
            controllerFactory: at
        });
        return f.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"]
        }, f.getJsDependencies = function() {
            return ["scripts/OutSystemsUI.UserScripts.OutSystemsUI.js"]
        }, f.getBlocks = function() {
            return []
        }, f
    }, "componentFactory"),
    zt = yt();
var z = Z(tt());
var ot = {};

function Y(f, a, C, t) {
    f.Initialized = a.InitializedHandler
}
c(Y, "default");
var u = A; {
    let a = class a extends u.Controller.BaseViewController {
        constructor(t, e, n) {
            super(t, e, n, ot);
            var i = this.controller;
            this.clientActionProxies = {
                initializedHandler$Action: c(function(r) {
                    return r = r === void 0 ? "" : r, i.executeActionInsideJSNode(i._initializedHandler$Action.bind(i, u.DataConversion.JSNodeParamConverter.from(r, u.DataTypes.DataTypes.Text)), i.callContext(), function(l) {
                        return {}
                    }, function() {}, "InitializedHandler")
                }, "initializedHandler$Action")
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
                var e = this.model,
                    n = this.controller,
                    i = this.idService;
                return u.Logger.startActiveSpan("OnInitialize", function(r) {
                    r && (r.setAttribute("code.function", "OnInitialize"), r.setAttribute("outsystems.function.key", "16c877c3-ccfa-48ad-9437-de6ffe08639b"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("OnInitialize"), t = n.callContext(t);
                        var l = new u.DataTypes.VariableHolder,
                            s = new u.DataTypes.VariableHolder(new u.DataTypes.JSONSerializeOutputType);
                        d.logEvent$Action(m.logType.general, "Going to create TabsHeaderItem", t), l.value = d.generateUniqueId$Action(e.variables.internalConfigsVar.uniqueIdAttr, t), e.variables.internalConfigsVar.uniqueIdAttr = l.value.unique_IDOut, e.variables.internalConfigsVar.extendedClassAttr = e.variables.extendedClassIn, s.value.jSONOut = u.JSONUtils.serializeToJSON(e.variables.internalConfigsVar, !0, !1), d.tabsHeaderItemCreate$Action(e.variables.internalConfigsVar.uniqueIdAttr, s.value.jSONOut, t), n._registerCallbacks$Action(t)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(t) {
            this.__onInitialize$Action = t
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(t) {
                var e = this.model,
                    n = this.controller,
                    i = this.idService;
                return u.Logger.startActiveSpan("OnParametersChanged", function(r) {
                    r && (r.setAttribute("code.function", "OnParametersChanged"), r.setAttribute("outsystems.function.key", "359296be-65d4-4fac-9ef5-9b97a2d3bd47"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("OnParametersChanged"), t = n.callContext(t), e.variables.extendedClassIn !== e.variables.internalConfigsVar.extendedClassAttr && (e.variables.internalConfigsVar.extendedClassAttr = e.variables.extendedClassIn, d.tabsHeaderItemChangeTextProperty$Action(e.variables.internalConfigsVar.uniqueIdAttr, "ExtendedClass", e.variables.internalConfigsVar.extendedClassAttr, t))
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(t) {
            this.__onParametersChanged$Action = t
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(t) {
                var e = this.model,
                    n = this.controller,
                    i = this.idService;
                return u.Logger.startActiveSpan("OnDestroy", function(r) {
                    r && (r.setAttribute("code.function", "OnDestroy"), r.setAttribute("outsystems.function.key", "3b54d088-34f3-4b94-8d30-13ebdd356031"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("OnDestroy"), t = n.callContext(t), d.tabsHeaderItemDestroy$Action(e.variables.internalConfigsVar.uniqueIdAttr, t)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(t) {
            this.__onDestroy$Action = t
        }
        get _registerCallbacks$Action() {
            return this.hasOwnProperty("__registerCallbacks$Action") || (this.__registerCallbacks$Action = function(t) {
                var e = this.model,
                    n = this.controller,
                    i = this.idService;
                return u.Logger.startActiveSpan("RegisterCallbacks", function(r) {
                    r && (r.setAttribute("code.function", "RegisterCallbacks"), r.setAttribute("outsystems.function.key", "72f9d790-da7a-446b-a74f-e7a755b7e24b"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("RegisterCallbacks"), t = n.callContext(t);
                        var l = new u.DataTypes.VariableHolder;
                        l.value = u.Logger.startActiveSpan("GetCallbackHandlers", function(s) {
                            s && (s.setAttribute("code.function", "GetCallbackHandlers"), s.setAttribute("outsystems.function.key", "30484a9c-6187-4066-95d0-79ba8fb35004"), s.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), s.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return n.safeExecuteJSNode(Y, "GetCallbackHandlers", "RegisterCallbacks", {
                                    Initialized: u.DataConversion.JSNodeParamConverter.to(null, u.DataTypes.DataTypes.Object)
                                }, function(y) {
                                    var v = new(n.constructor.getVariableGroupType("OutSystemsUI.Navigation.TabsHeaderItem.RegisterCallbacks$getCallbackHandlersJSResult"));
                                    return v.initializedOut = u.DataConversion.JSNodeParamConverter.from(y.Initialized, u.DataTypes.DataTypes.Object), v
                                }, {
                                    InitializedHandler: n.clientActionProxies.initializedHandler$Action
                                }, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1), d.tabsHeaderItemRegisterCallback$Action(e.variables.internalConfigsVar.uniqueIdAttr, m.registeredCallbackEvents.initialized, l.value.initializedOut, t)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__registerCallbacks$Action
        }
        set _registerCallbacks$Action(t) {
            this.__registerCallbacks$Action = t
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(t) {
                var e = this.model,
                    n = this.controller,
                    i = this.idService;
                return u.Logger.startActiveSpan("OnReady", function(r) {
                    r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "760b7a71-cd84-4275-9826-8b3f7f39bf08"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("OnReady"), t = n.callContext(t), d.tabsHeaderItemInitialize$Action(e.variables.internalConfigsVar.uniqueIdAttr, t), d.logEvent$Action(m.logType.general, "TabsHeaderItem created", t)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(t) {
            this.__onReady$Action = t
        }
        get _onRender$Action() {
            return this.hasOwnProperty("__onRender$Action") || (this.__onRender$Action = function(t) {
                var e = this.model,
                    n = this.controller,
                    i = this.idService;
                return u.Logger.startActiveSpan("OnRender", function(r) {
                    r && (r.setAttribute("code.function", "OnRender"), r.setAttribute("outsystems.function.key", "b472db5a-d91f-40d4-be62-ed26e1090687"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("OnRender"), t = n.callContext(t), d.tabsHeaderItemUpdateOnRender$Action(e.variables.internalConfigsVar.uniqueIdAttr, t)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onRender$Action
        }
        set _onRender$Action(t) {
            this.__onRender$Action = t
        }
        get _initializedHandler$Action() {
            return this.hasOwnProperty("__initializedHandler$Action") || (this.__initializedHandler$Action = function(t, e) {
                var n = this.model,
                    i = this.controller,
                    r = this.idService;
                return u.Logger.startActiveSpan("InitializedHandler", function(l) {
                    return l && (l.setAttribute("code.function", "InitializedHandler"), l.setAttribute("outsystems.function.key", "caa520b8-6af4-454e-99e4-3955ba5b6776"), l.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), l.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), u.Flow.tryFinally(function() {
                        i.ensureControllerAlive("InitializedHandler"), e = i.callContext(e);
                        var s = new u.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("OutSystemsUI.Navigation.TabsHeaderItem.InitializedHandler$vars")));
                        return s.value.tabsHeaderItemIdInLocal = t, u.Flow.executeAsyncFlow(function() {
                            return i.initialized$Action(s.value.tabsHeaderItemIdInLocal, e)
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
        onInitialize$Action(t) {
            var e = this.controller;
            return u.Logger.startActiveSpan("OnInitialize__proxy", function(n) {
                n && (n.setAttribute("code.function", "OnInitialize"), n.setAttribute("outsystems.function.key", "16c877c3-ccfa-48ad-9437-de6ffe08639b"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._onInitialize$Action, t)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        onParametersChanged$Action(t) {
            var e = this.controller;
            return u.Logger.startActiveSpan("OnParametersChanged__proxy", function(n) {
                n && (n.setAttribute("code.function", "OnParametersChanged"), n.setAttribute("outsystems.function.key", "359296be-65d4-4fac-9ef5-9b97a2d3bd47"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._onParametersChanged$Action, t)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        onDestroy$Action(t) {
            var e = this.controller;
            return u.Logger.startActiveSpan("OnDestroy__proxy", function(n) {
                n && (n.setAttribute("code.function", "OnDestroy"), n.setAttribute("outsystems.function.key", "3b54d088-34f3-4b94-8d30-13ebdd356031"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._onDestroy$Action, t)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        registerCallbacks$Action(t) {
            var e = this.controller;
            return u.Logger.startActiveSpan("RegisterCallbacks__proxy", function(n) {
                n && (n.setAttribute("code.function", "RegisterCallbacks"), n.setAttribute("outsystems.function.key", "72f9d790-da7a-446b-a74f-e7a755b7e24b"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._registerCallbacks$Action, t)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        onReady$Action(t) {
            var e = this.controller;
            return u.Logger.startActiveSpan("OnReady__proxy", function(n) {
                n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "760b7a71-cd84-4275-9826-8b3f7f39bf08"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._onReady$Action, t)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        onRender$Action(t) {
            var e = this.controller;
            return u.Logger.startActiveSpan("OnRender__proxy", function(n) {
                n && (n.setAttribute("code.function", "OnRender"), n.setAttribute("outsystems.function.key", "b472db5a-d91f-40d4-be62-ed26e1090687"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._onRender$Action, t)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        initializedHandler$Action(t, e) {
            var n = this.controller;
            return u.Logger.startActiveSpan("InitializedHandler__proxy", function(i) {
                return i && (i.setAttribute("code.function", "InitializedHandler"), i.setAttribute("outsystems.function.key", "caa520b8-6af4-454e-99e4-3955ba5b6776"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), u.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._initializedHandler$Action, e, t)
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
        set initialized$Action(t) {
            this._initialized$Action = t
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(t) {
                var e = this.controller,
                    n = this.model,
                    i = this.idService;
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
                    i = this.idService;
                return e.onReady$Action(t)
            }), this._onReadyEventHandler
        }
        set onReadyEventHandler(t) {
            this._onReadyEventHandler = t
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = function(t) {
                var e = this.controller,
                    n = this.model,
                    i = this.idService;
                return e.onRender$Action(t)
            }), this._onRenderEventHandler
        }
        set onRenderEventHandler(t) {
            this._onRenderEventHandler = t
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = function(t) {
                var e = this.controller,
                    n = this.model,
                    i = this.idService;
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
                    i = this.idService;
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
    c(a, "ControllerInner");
    let f = a;
    k = f, k.registerVariableGroupType("OutSystemsUI.Navigation.TabsHeaderItem.RegisterCallbacks$getCallbackHandlersJSResult", [{
        name: "Initialized",
        attrName: "initializedOut",
        mandatory: !0,
        dataType: u.DataTypes.DataTypes.Object,
        defaultValue: c(function() {
            return null
        }, "defaultValue")
    }]), k.registerVariableGroupType("OutSystemsUI.Navigation.TabsHeaderItem.InitializedHandler$vars", [{
        name: "TabsHeaderItemId",
        attrName: "tabsHeaderItemIdInLocal",
        mandatory: !1,
        dataType: u.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }])
}
var k, st = new u.Controller.ControllerFactory(k, P);
var te = _.PlaceholderContent,
    ee = _.IteratorPlaceholderContent,
    bt = c(function() {
        var f = E(function(a) {
            var C = a.model,
                t = a.controller,
                e = a.controller.idService,
                n = t.validationService,
                i = t.callContext(),
                r = $,
                l = w,
                s = {
                    props: a,
                    validateWidget: c(function(U) {
                        a.validateWidget(a, U)
                    }, "validateWidget")
                },
                y = C,
                v = D,
                lt = H,
                ct = T();
            return z.createElement("div", a.rootNodeProperties, z.createElement(S, {
                extendedProperties: {
                    className: "osui-tabs__header-item",
                    name: C.variables.internalConfigsVar.uniqueIdAttr
                },
                tag: "button",
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: y
            }, z.createElement(I, {
                align: 0,
                content: s.props.placeholders.title,
                style: "display-contents ph",
                _idProps: {
                    service: e,
                    name: "Title"
                },
                _widgetRecordProvider: y
            })))
        }, {
            topLevelComponent: !1,
            getAttributes: c(function() {
                return {
                    codeFunction: "TabsHeaderItem",
                    functionKey: "e79bc3ad-4d68-4711-9fd2-e7269cd2ec87",
                    functionOwnerName: "OutSystemsUI",
                    functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Navigation.TabsHeaderItem",
            modelFactory: rt,
            controllerFactory: st
        });
        return f.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"]
        }, f.getJsDependencies = function() {
            return []
        }, f.getBlocks = function() {
            return []
        }, f
    }, "componentFactory"),
    ne = bt();
export {
    zt as a, ne as b
};