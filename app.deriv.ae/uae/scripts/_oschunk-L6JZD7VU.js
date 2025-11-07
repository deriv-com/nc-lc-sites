import {
    a as z
} from "./_oschunk-YVFTECWM.js";
import {
    f as v,
    s as N
} from "./_oschunk-VR5BNL2K.js";
import {
    a as W,
    g as E,
    m as H,
    o as w,
    q as k,
    r as R,
    s as V,
    t as F
} from "./_oschunk-4VHUVDBV.js";
import {
    Hb as O,
    Qb as u,
    vb as y,
    zb as S
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as h,
    c,
    e as M
} from "./_oschunk-M5BUVJ72.js";
var o = h,
    D = class D extends o.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Internal_Configs", "internal_ConfigsVar", "Internal_Configs", !0, !1, o.DataTypes.DataTypes.Record, function() {
                return o.DataTypes.ImmutableBase.getData(new S)
            }, !1, S), this.attr("Progress", "progressIn", "Progress", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 0
            }, !1), this.attr("_progressInDataFetchStatus", "_progressInDataFetchStatus", "_progressInDataFetchStatus", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ProgressColor", "progressColorIn", "ProgressColor", !0, !1, o.DataTypes.DataTypes.Text, function() {
                return y.color.primary
            }, !1), this.attr("_progressColorInDataFetchStatus", "_progressColorInDataFetchStatus", "_progressColorInDataFetchStatus", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("TrailColor", "trailColorIn", "TrailColor", !0, !1, o.DataTypes.DataTypes.Text, function() {
                return y.color.neutral4
            }, !1), this.attr("_trailColorInDataFetchStatus", "_trailColorInDataFetchStatus", "_trailColorInDataFetchStatus", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Thickness", "thicknessIn", "Thickness", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 12
            }, !1), this.attr("_thicknessInDataFetchStatus", "_thicknessInDataFetchStatus", "_thicknessInDataFetchStatus", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("OptionalConfigs", "optionalConfigsIn", "OptionalConfigs", !0, !1, o.DataTypes.DataTypes.Record, function() {
                return o.DataTypes.ImmutableBase.getData(new O)
            }, !1, O), this.attr("_optionalConfigsInDataFetchStatus", "_optionalConfigsInDataFetchStatus", "_optionalConfigsInDataFetchStatus", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, o.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(o.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
c(D, "VariablesRecord");
var m = D;
m.init();
var T = class T extends o.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
c(T, "WidgetsRecord");
var p = T,
    P = class P extends o.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return m
        }
        static getWidgetsRecordConstructor() {
            return p
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(i) {
            "Progress" in i && (this.variables.progressIn = i.Progress, "_progressInDataFetchStatus" in i && (this.variables._progressInDataFetchStatus = i._progressInDataFetchStatus)), "ProgressColor" in i && (this.variables.progressColorIn = i.ProgressColor, "_progressColorInDataFetchStatus" in i && (this.variables._progressColorInDataFetchStatus = i._progressColorInDataFetchStatus)), "TrailColor" in i && (this.variables.trailColorIn = i.TrailColor, "_trailColorInDataFetchStatus" in i && (this.variables._trailColorInDataFetchStatus = i._trailColorInDataFetchStatus)), "Thickness" in i && (this.variables.thicknessIn = i.Thickness, "_thicknessInDataFetchStatus" in i && (this.variables._thicknessInDataFetchStatus = i._thicknessInDataFetchStatus)), "OptionalConfigs" in i && (this.variables.optionalConfigsIn = i.OptionalConfigs, "_optionalConfigsInDataFetchStatus" in i && (this.variables._optionalConfigsInDataFetchStatus = i._optionalConfigsInDataFetchStatus)), "ExtendedClass" in i && (this.variables.extendedClassIn = i.ExtendedClass, "_extendedClassInDataFetchStatus" in i && (this.variables._extendedClassInDataFetchStatus = i._extendedClassInDataFetchStatus))
        }
    };
c(P, "Model");
var C = P;
C._hasValidationWidgetsValue = void 0;
var U = new o.Model.ModelFactory(C);
var b = M(W());
var x = {};

function $(f, i, A, e) {
    f.Initialized = i.InitializedHandler
}
c($, "default");
var a = h; {
    let i = class i extends a.Controller.BaseViewController {
        constructor(e, t, r) {
            super(e, t, r, x);
            var s = this.controller;
            this.clientActionProxies = {
                initializedHandler$Action: c(function(n) {
                    return n = n === void 0 ? "" : n, s.executeActionInsideJSNode(s._initializedHandler$Action.bind(s, a.DataConversion.JSNodeParamConverter.from(n, a.DataTypes.DataTypes.Text)), s.callContext(), function(l) {
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
                var t = this.model,
                    r = this.controller,
                    s = this.idService;
                return a.Logger.startActiveSpan("OnInitialize", function(n) {
                    n && (n.setAttribute("code.function", "OnInitialize"), n.setAttribute("outsystems.function.key", "1de7cb36-6298-4f20-a2be-639e58d086c9"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnInitialize"), e = r.callContext(e);
                        var l = new a.DataTypes.VariableHolder;
                        u.logEvent$Action(y.logType.general, "Going to create ProgressBar", e), l.value = u.generateUniqueId$Action(t.variables.internal_ConfigsVar.uniqueIdAttr, e), t.variables.internal_ConfigsVar.uniqueIdAttr = l.value.unique_IDOut, t.variables.internal_ConfigsVar.progressAttr = t.variables.progressIn, t.variables.internal_ConfigsVar.progressColorAttr = t.variables.progressColorIn, t.variables.internal_ConfigsVar.trailColorAttr = t.variables.trailColorIn, t.variables.internal_ConfigsVar.shapeAttr = t.variables.optionalConfigsIn.shapeAttr, t.variables.internal_ConfigsVar.thicknessAttr = t.variables.thicknessIn, t.variables.internal_ConfigsVar.animateInitialProgressAttr = t.variables.optionalConfigsIn.animateInitialProgressAttr, t.variables.internal_ConfigsVar.typeAttr = y.progressType.bar, t.variables.internal_ConfigsVar.extendedClassAttr = t.variables.extendedClassIn, t.variables.internal_ConfigsVar.initialProgressAttr = t.variables.internal_ConfigsVar.progressAttr, u.progressBarCreate$Action(t.variables.internal_ConfigsVar, e), r._registerCallbacks$Action(e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    s = this.idService;
                return a.Logger.startActiveSpan("OnParametersChanged", function(n) {
                    n && (n.setAttribute("code.function", "OnParametersChanged"), n.setAttribute("outsystems.function.key", "39dd2971-6630-4971-97e5-f83520dec49e"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnParametersChanged"), e = r.callContext(e), t.variables.progressIn !== t.variables.internal_ConfigsVar.progressAttr && (t.variables.internal_ConfigsVar.progressAttr = t.variables.progressIn, u.progressChangeIntegerProperty$Action(t.variables.internal_ConfigsVar.uniqueIdAttr, "Progress", a.BuiltinFunctions.integerToLongInteger(t.variables.internal_ConfigsVar.progressAttr), e)), t.variables.progressColorIn !== t.variables.internal_ConfigsVar.progressColorAttr && (t.variables.internal_ConfigsVar.progressColorAttr = t.variables.progressColorIn, u.progressChangeTextProperty$Action(t.variables.internal_ConfigsVar.uniqueIdAttr, "ProgressColor", t.variables.internal_ConfigsVar.progressColorAttr, e)), t.variables.trailColorIn !== t.variables.internal_ConfigsVar.trailColorAttr && (t.variables.internal_ConfigsVar.trailColorAttr = t.variables.trailColorIn, u.progressChangeTextProperty$Action(t.variables.internal_ConfigsVar.uniqueIdAttr, "TrailColor", t.variables.internal_ConfigsVar.trailColorAttr, e)), t.variables.thicknessIn !== t.variables.internal_ConfigsVar.thicknessAttr && (t.variables.internal_ConfigsVar.thicknessAttr = t.variables.thicknessIn, u.progressChangeIntegerProperty$Action(t.variables.internal_ConfigsVar.uniqueIdAttr, "Thickness", a.BuiltinFunctions.integerToLongInteger(t.variables.internal_ConfigsVar.thicknessAttr), e)), t.variables.optionalConfigsIn.shapeAttr !== t.variables.internal_ConfigsVar.shapeAttr && (t.variables.internal_ConfigsVar.shapeAttr = t.variables.optionalConfigsIn.shapeAttr, u.progressChangeTextProperty$Action(t.variables.internal_ConfigsVar.uniqueIdAttr, "Shape", t.variables.internal_ConfigsVar.shapeAttr, e)), t.variables.extendedClassIn !== t.variables.internal_ConfigsVar.extendedClassAttr && (t.variables.internal_ConfigsVar.extendedClassAttr = t.variables.extendedClassIn, u.progressChangeTextProperty$Action(t.variables.internal_ConfigsVar.uniqueIdAttr, "ExtendedClass", t.variables.internal_ConfigsVar.extendedClassAttr, e))
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(e) {
            this.__onParametersChanged$Action = e
        }
        get _initializedHandler$Action() {
            return this.hasOwnProperty("__initializedHandler$Action") || (this.__initializedHandler$Action = function(e, t) {
                var r = this.model,
                    s = this.controller,
                    n = this.idService;
                return a.Logger.startActiveSpan("InitializedHandler", function(l) {
                    return l && (l.setAttribute("code.function", "InitializedHandler"), l.setAttribute("outsystems.function.key", "4e9a6be6-5cee-4691-b501-6be035f94ad7"), l.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), l.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                        s.ensureControllerAlive("InitializedHandler"), t = s.callContext(t);
                        var d = new a.DataTypes.VariableHolder(new(s.constructor.getVariableGroupType("OutSystemsUI.Numbers.ProgressBar.InitializedHandler$vars")));
                        return d.value.progressBarIdInLocal = e, a.Flow.executeAsyncFlow(function() {
                            return s.initialized$Action(d.value.progressBarIdInLocal, t)
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
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    s = this.idService;
                return a.Logger.startActiveSpan("OnDestroy", function(n) {
                    n && (n.setAttribute("code.function", "OnDestroy"), n.setAttribute("outsystems.function.key", "55939c57-61a6-493f-9c67-9f80c973aae9"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnDestroy"), e = r.callContext(e), u.progressDestroy$Action(t.variables.internal_ConfigsVar.uniqueIdAttr, e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(e) {
            this.__onDestroy$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    s = this.idService;
                return a.Logger.startActiveSpan("OnReady", function(n) {
                    n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "7c507aba-5536-4c68-874e-506218489593"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnReady"), e = r.callContext(e), u.progressInitialize$Action(t.variables.internal_ConfigsVar.uniqueIdAttr, e), u.logEvent$Action(y.logType.general, "ProgressBar Created", e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _registerCallbacks$Action() {
            return this.hasOwnProperty("__registerCallbacks$Action") || (this.__registerCallbacks$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    s = this.idService;
                return a.Logger.startActiveSpan("RegisterCallbacks", function(n) {
                    n && (n.setAttribute("code.function", "RegisterCallbacks"), n.setAttribute("outsystems.function.key", "fca31c93-db44-4023-b3c7-494fd58f2155"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("RegisterCallbacks"), e = r.callContext(e);
                        var l = new a.DataTypes.VariableHolder;
                        l.value = a.Logger.startActiveSpan("GetCallbackHandlers", function(d) {
                            d && (d.setAttribute("code.function", "GetCallbackHandlers"), d.setAttribute("outsystems.function.key", "ea056eea-c384-450c-814b-380c830b6bdc"), d.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), d.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), d.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return r.safeExecuteJSNode($, "GetCallbackHandlers", "RegisterCallbacks", {
                                    Initialized: a.DataConversion.JSNodeParamConverter.to(null, a.DataTypes.DataTypes.Object)
                                }, function(g) {
                                    var I = new(r.constructor.getVariableGroupType("OutSystemsUI.Numbers.ProgressBar.RegisterCallbacks$getCallbackHandlersJSResult"));
                                    return I.initializedOut = a.DataConversion.JSNodeParamConverter.from(g.Initialized, a.DataTypes.DataTypes.Object), I
                                }, {
                                    InitializedHandler: r.clientActionProxies.initializedHandler$Action
                                }, {})
                            } finally {
                                d && d.end()
                            }
                        }, 1), u.progressRegisterCallback$Action(t.variables.internal_ConfigsVar.uniqueIdAttr, y.registeredCallbackEvents.initialized, l.value.initializedOut, e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__registerCallbacks$Action
        }
        set _registerCallbacks$Action(e) {
            this.__registerCallbacks$Action = e
        }
        onInitialize$Action(e) {
            var t = this.controller;
            return a.Logger.startActiveSpan("OnInitialize__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnInitialize"), r.setAttribute("outsystems.function.key", "1de7cb36-6298-4f20-a2be-639e58d086c9"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onInitialize$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        onParametersChanged$Action(e) {
            var t = this.controller;
            return a.Logger.startActiveSpan("OnParametersChanged__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnParametersChanged"), r.setAttribute("outsystems.function.key", "39dd2971-6630-4971-97e5-f83520dec49e"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onParametersChanged$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        initializedHandler$Action(e, t) {
            var r = this.controller;
            return a.Logger.startActiveSpan("InitializedHandler__proxy", function(s) {
                return s && (s.setAttribute("code.function", "InitializedHandler"), s.setAttribute("outsystems.function.key", "4e9a6be6-5cee-4691-b501-6be035f94ad7"), s.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), s.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._initializedHandler$Action, t, e)
                }, function() {
                    s && s.end()
                })
            }, 0)
        }
        onDestroy$Action(e) {
            var t = this.controller;
            return a.Logger.startActiveSpan("OnDestroy__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnDestroy"), r.setAttribute("outsystems.function.key", "55939c57-61a6-493f-9c67-9f80c973aae9"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onDestroy$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var t = this.controller;
            return a.Logger.startActiveSpan("OnReady__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "7c507aba-5536-4c68-874e-506218489593"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onReady$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        registerCallbacks$Action(e) {
            var t = this.controller;
            return a.Logger.startActiveSpan("RegisterCallbacks__proxy", function(r) {
                r && (r.setAttribute("code.function", "RegisterCallbacks"), r.setAttribute("outsystems.function.key", "fca31c93-db44-4023-b3c7-494fd58f2155"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._registerCallbacks$Action, e)
                } finally {
                    r && r.end()
                }
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
                var t = this.controller,
                    r = this.model,
                    s = this.idService;
                return t.onInitialize$Action(e)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var t = this.controller,
                    r = this.model,
                    s = this.idService;
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
                    r = this.model,
                    s = this.idService;
                return t.onDestroy$Action(e)
            }), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(e) {
            this._onDestroyEventHandler = e
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = function(e) {
                var t = this.controller,
                    r = this.model,
                    s = this.idService;
                return t.onParametersChanged$Action(e)
            }), this._onParametersChangedEventHandler
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
            return u.defaultTimeout
        }
    };
    c(i, "ControllerInner");
    let f = i;
    _ = f, _.registerVariableGroupType("OutSystemsUI.Numbers.ProgressBar.InitializedHandler$vars", [{
        name: "ProgressBarId",
        attrName: "progressBarIdInLocal",
        mandatory: !1,
        dataType: a.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }]), _.registerVariableGroupType("OutSystemsUI.Numbers.ProgressBar.RegisterCallbacks$getCallbackHandlersJSResult", [{
        name: "Initialized",
        attrName: "initializedOut",
        mandatory: !0,
        dataType: a.DataTypes.DataTypes.Object,
        defaultValue: c(function() {
            return null
        }, "defaultValue")
    }])
}
var _, L = new a.Controller.ControllerFactory(_, z);
var bt = E.PlaceholderContent,
    ht = E.IteratorPlaceholderContent,
    G = c(function() {
        var f = w(function(i) {
            var A = i.model,
                e = i.controller,
                t = i.controller.idService,
                r = e.validationService,
                s = e.callContext(),
                n = V,
                l = F,
                d = {
                    props: i,
                    validateWidget: c(function(B) {
                        i.validateWidget(i, B)
                    }, "validateWidget")
                },
                g = A,
                I = R,
                J = k,
                j = H();
            return b.createElement("div", i.rootNodeProperties, b.createElement(v, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    name: A.variables.internal_ConfigsVar.uniqueIdAttr
                },
                style: "osui-progress-bar",
                visible: !0,
                _idProps: {
                    service: t,
                    name: "ProgressBar"
                },
                _widgetRecordProvider: g
            }, b.createElement(v, {
                align: 0,
                animate: !1,
                style: "osui-progress-bar__container",
                visible: !0,
                _idProps: {
                    service: t,
                    name: "ProgressContainer"
                },
                _widgetRecordProvider: g
            }, b.createElement(v, {
                align: 0,
                animate: !1,
                style: "osui-progress-bar__value",
                visible: !0,
                _idProps: {
                    service: t,
                    name: "ProgressValue"
                },
                _widgetRecordProvider: g
            }), b.createElement(N, {
                align: 0,
                content: d.props.placeholders.content,
                style: "osui-progress-bar__content ph",
                _idProps: {
                    service: t,
                    name: "Content"
                },
                _widgetRecordProvider: g
            }))))
        }, {
            topLevelComponent: !1,
            getAttributes: c(function() {
                return {
                    codeFunction: "ProgressBar",
                    functionKey: "aa878163-7d92-4bc9-acce-392b67407218",
                    functionOwnerName: "OutSystemsUI",
                    functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Numbers.ProgressBar",
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