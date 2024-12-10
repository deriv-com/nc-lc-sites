import {
    a as $
} from "./_oschunk-NR4KXK35.js";
import {
    d as g,
    s as P
} from "./_oschunk-5HXBKFJV.js";
import {
    a as k,
    g as O,
    i as C
} from "./_oschunk-2Q3BG5XZ.js";
import {
    a as E
} from "./_oschunk-UVWOQOAC.js";
import {
    o as a
} from "./_oschunk-FZ6FUHBV.js";
import {
    jd as b
} from "./_oschunk-5FYEKNKX.js";
import {
    ia as _
} from "./_oschunk-5KJVGEL7.js";
import {
    c,
    h as T
} from "./_oschunk-QHO7QY6K.js";
var f = T(k());
var R = {};

function h(y, u, v, e) {
    y.Initialized = u.InitializedHandler
}
c(h, "default");
var n = _; {
    let u = class u extends n.Controller.BaseViewController {
        constructor(e, t, r) {
            super(e, t, r, R);
            var s = this.controller;
            this.clientActionProxies = {
                initializedHandler$Action: c(function(i) {
                    return i = i === void 0 ? "" : i, s.executeActionInsideJSNode(s._initializedHandler$Action.bind(s, n.DataConversion.JSNodeParamConverter.from(i, n.DataTypes.DataTypes.Text)), s.callContext(), function(o) {
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
                return n.Logger.startActiveSpan("OnInitialize", function(i) {
                    i && (i.setAttribute("code.function", "OnInitialize"), i.setAttribute("outsystems.function.key", "1de7cb36-6298-4f20-a2be-639e58d086c9"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnInitialize"), e = r.callContext(e);
                        var o = new n.DataTypes.VariableHolder;
                        a.logEvent$Action(b.logType.general, "Going to create ProgressBar", e), o.value = a.generateUniqueId$Action(t.variables.internal_ConfigsVar.uniqueIdAttr, e), t.variables.internal_ConfigsVar.uniqueIdAttr = o.value.unique_IDOut, t.variables.internal_ConfigsVar.progressAttr = t.variables.progressIn, t.variables.internal_ConfigsVar.progressColorAttr = t.variables.progressColorIn, t.variables.internal_ConfigsVar.trailColorAttr = t.variables.trailColorIn, t.variables.internal_ConfigsVar.shapeAttr = t.variables.optionalConfigsIn.shapeAttr, t.variables.internal_ConfigsVar.thicknessAttr = t.variables.thicknessIn, t.variables.internal_ConfigsVar.animateInitialProgressAttr = t.variables.optionalConfigsIn.animateInitialProgressAttr, t.variables.internal_ConfigsVar.typeAttr = b.progressType.bar, t.variables.internal_ConfigsVar.extendedClassAttr = t.variables.extendedClassIn, t.variables.internal_ConfigsVar.initialProgressAttr = t.variables.internal_ConfigsVar.progressAttr, a.progressBarCreate$Action(t.variables.internal_ConfigsVar, e), r._registerCallbacks$Action(e)
                    } finally {
                        i && i.end()
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
                return n.Logger.startActiveSpan("OnParametersChanged", function(i) {
                    i && (i.setAttribute("code.function", "OnParametersChanged"), i.setAttribute("outsystems.function.key", "39dd2971-6630-4971-97e5-f83520dec49e"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnParametersChanged"), e = r.callContext(e), t.variables.progressIn !== t.variables.internal_ConfigsVar.progressAttr && (t.variables.internal_ConfigsVar.progressAttr = t.variables.progressIn, a.progressChangeIntegerProperty$Action(t.variables.internal_ConfigsVar.uniqueIdAttr, "Progress", n.BuiltinFunctions.integerToLongInteger(t.variables.internal_ConfigsVar.progressAttr), e)), t.variables.progressColorIn !== t.variables.internal_ConfigsVar.progressColorAttr && (t.variables.internal_ConfigsVar.progressColorAttr = t.variables.progressColorIn, a.progressChangeTextProperty$Action(t.variables.internal_ConfigsVar.uniqueIdAttr, "ProgressColor", t.variables.internal_ConfigsVar.progressColorAttr, e)), t.variables.trailColorIn !== t.variables.internal_ConfigsVar.trailColorAttr && (t.variables.internal_ConfigsVar.trailColorAttr = t.variables.trailColorIn, a.progressChangeTextProperty$Action(t.variables.internal_ConfigsVar.uniqueIdAttr, "TrailColor", t.variables.internal_ConfigsVar.trailColorAttr, e)), t.variables.thicknessIn !== t.variables.internal_ConfigsVar.thicknessAttr && (t.variables.internal_ConfigsVar.thicknessAttr = t.variables.thicknessIn, a.progressChangeIntegerProperty$Action(t.variables.internal_ConfigsVar.uniqueIdAttr, "Thickness", n.BuiltinFunctions.integerToLongInteger(t.variables.internal_ConfigsVar.thicknessAttr), e)), t.variables.optionalConfigsIn.shapeAttr !== t.variables.internal_ConfigsVar.shapeAttr && (t.variables.internal_ConfigsVar.shapeAttr = t.variables.optionalConfigsIn.shapeAttr, a.progressChangeTextProperty$Action(t.variables.internal_ConfigsVar.uniqueIdAttr, "Shape", t.variables.internal_ConfigsVar.shapeAttr, e)), t.variables.extendedClassIn !== t.variables.internal_ConfigsVar.extendedClassAttr && (t.variables.internal_ConfigsVar.extendedClassAttr = t.variables.extendedClassIn, a.progressChangeTextProperty$Action(t.variables.internal_ConfigsVar.uniqueIdAttr, "ExtendedClass", t.variables.internal_ConfigsVar.extendedClassAttr, e))
                    } finally {
                        i && i.end()
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
                    i = this.idService;
                return n.Logger.startActiveSpan("InitializedHandler", function(o) {
                    return o && (o.setAttribute("code.function", "InitializedHandler"), o.setAttribute("outsystems.function.key", "4e9a6be6-5cee-4691-b501-6be035f94ad7"), o.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), o.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                        s.ensureControllerAlive("InitializedHandler"), t = s.callContext(t);
                        var l = new n.DataTypes.VariableHolder(new(s.constructor.getVariableGroupType("OutSystemsUI.Numbers.ProgressBar.InitializedHandler$vars")));
                        return l.value.progressBarIdInLocal = e, n.Flow.executeAsyncFlow(function() {
                            return s.initialized$Action(l.value.progressBarIdInLocal, t)
                        })
                    }, function() {
                        o && o.end()
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
                return n.Logger.startActiveSpan("OnDestroy", function(i) {
                    i && (i.setAttribute("code.function", "OnDestroy"), i.setAttribute("outsystems.function.key", "55939c57-61a6-493f-9c67-9f80c973aae9"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnDestroy"), e = r.callContext(e), a.progressDestroy$Action(t.variables.internal_ConfigsVar.uniqueIdAttr, e)
                    } finally {
                        i && i.end()
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
                return n.Logger.startActiveSpan("OnReady", function(i) {
                    i && (i.setAttribute("code.function", "OnReady"), i.setAttribute("outsystems.function.key", "7c507aba-5536-4c68-874e-506218489593"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnReady"), e = r.callContext(e), a.progressInitialize$Action(t.variables.internal_ConfigsVar.uniqueIdAttr, e), a.logEvent$Action(b.logType.general, "ProgressBar Created", e)
                    } finally {
                        i && i.end()
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
                return n.Logger.startActiveSpan("RegisterCallbacks", function(i) {
                    i && (i.setAttribute("code.function", "RegisterCallbacks"), i.setAttribute("outsystems.function.key", "fca31c93-db44-4023-b3c7-494fd58f2155"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("RegisterCallbacks"), e = r.callContext(e);
                        var o = new n.DataTypes.VariableHolder;
                        o.value = n.Logger.startActiveSpan("GetCallbackHandlers", function(l) {
                            l && (l.setAttribute("code.function", "GetCallbackHandlers"), l.setAttribute("outsystems.function.key", "ea056eea-c384-450c-814b-380c830b6bdc"), l.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), l.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), l.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return r.safeExecuteJSNode(h, "GetCallbackHandlers", "RegisterCallbacks", {
                                    Initialized: n.DataConversion.JSNodeParamConverter.to(null, n.DataTypes.DataTypes.Object)
                                }, function(S) {
                                    var m = new(r.constructor.getVariableGroupType("OutSystemsUI.Numbers.ProgressBar.RegisterCallbacks$getCallbackHandlersJSResult"));
                                    return m.initializedOut = n.DataConversion.JSNodeParamConverter.from(S.Initialized, n.DataTypes.DataTypes.Object), m
                                }, {
                                    InitializedHandler: r.clientActionProxies.initializedHandler$Action
                                }, {})
                            } finally {
                                l && l.end()
                            }
                        }, 1), a.progressRegisterCallback$Action(t.variables.internal_ConfigsVar.uniqueIdAttr, b.registeredCallbackEvents.initialized, o.value.initializedOut, e)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__registerCallbacks$Action
        }
        set _registerCallbacks$Action(e) {
            this.__registerCallbacks$Action = e
        }
        onInitialize$Action(e) {
            var t = this.controller;
            return n.Logger.startActiveSpan("OnInitialize__proxy", function(r) {
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
            return n.Logger.startActiveSpan("OnParametersChanged__proxy", function(r) {
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
            return n.Logger.startActiveSpan("InitializedHandler__proxy", function(s) {
                return s && (s.setAttribute("code.function", "InitializedHandler"), s.setAttribute("outsystems.function.key", "4e9a6be6-5cee-4691-b501-6be035f94ad7"), s.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), s.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._initializedHandler$Action, t, e)
                }, function() {
                    s && s.end()
                })
            }, 0)
        }
        onDestroy$Action(e) {
            var t = this.controller;
            return n.Logger.startActiveSpan("OnDestroy__proxy", function(r) {
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
            return n.Logger.startActiveSpan("OnReady__proxy", function(r) {
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
            return n.Logger.startActiveSpan("RegisterCallbacks__proxy", function(r) {
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
            return a.defaultTimeout
        }
    };
    c(u, "ControllerInner");
    let y = u;
    A = y, A.registerVariableGroupType("OutSystemsUI.Numbers.ProgressBar.InitializedHandler$vars", [{
        name: "ProgressBarId",
        attrName: "progressBarIdInLocal",
        mandatory: !1,
        dataType: n.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }]), A.registerVariableGroupType("OutSystemsUI.Numbers.ProgressBar.RegisterCallbacks$getCallbackHandlersJSResult", [{
        name: "Initialized",
        attrName: "initializedOut",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Object,
        defaultValue: c(function() {
            return null
        }, "defaultValue")
    }])
}
var A, p = new n.Controller.ControllerFactory(A, $);
var j = C.PlaceholderContent,
    K = C.IteratorPlaceholderContent,
    d = class d extends O.BaseWebBlock {
        static get displayName() {
            return "Numbers.ProgressBar"
        }
        static getAttributes() {
            return {
                codeFunction: "ProgressBar",
                functionKey: "aa878163-7d92-4bc9-acce-392b67407218",
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
            return E
        }
        get controllerFactory() {
            return p
        }
        get title() {
            return ""
        }
        internalRender() {
            let u = this.model,
                v = this.controller,
                e = this.idService,
                t = v.validationService,
                r = this.widgetsRecordProvider,
                s = v.callContext(),
                i = d.ifWidget,
                o = d.textWidget,
                l = d.asPrimitiveValue,
                S = d.getTranslation,
                m = this;
            return f.createElement("div", this.getRootNodeProperties(), f.createElement(g, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    name: u.variables.internal_ConfigsVar.uniqueIdAttr
                },
                style: "osui-progress-bar",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ProgressBar"
                },
                _widgetRecordProvider: r
            }, f.createElement(g, {
                align: 0,
                animate: !1,
                style: "osui-progress-bar__container",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ProgressContainer"
                },
                _widgetRecordProvider: r
            }, f.createElement(g, {
                align: 0,
                animate: !1,
                style: "osui-progress-bar__value",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ProgressValue"
                },
                _widgetRecordProvider: r
            }), f.createElement(P, {
                align: 0,
                content: m.props.placeholders.content,
                style: "osui-progress-bar__content ph",
                _idProps: {
                    service: e,
                    name: "Content"
                },
                _widgetRecordProvider: r
            }))))
        }
    };
c(d, "View");
var I = d,
    Q = I;
export {
    Q as a
};