import {
    a as $
} from "./_oschunk-BUTX27QI.js";
import {
    b as E
} from "./_oschunk-GPNNXU3M.js";
import {
    a as H,
    d as C,
    p as S
} from "./_oschunk-M2CKCDBB.js";
import {
    a as N,
    g as T,
    i as _
} from "./_oschunk-WZHUAZJP.js";
import {
    m as c
} from "./_oschunk-KZFTAIEG.js";
import {
    Eg as v
} from "./_oschunk-UATY3RVV.js";
import {
    ia as h
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as l,
    h as R
} from "./_oschunk-QHO7QY6K.js";
var f = R(N());
var w = {};

function O(m, u, g, t) {
    m.OnInitializedHandler = u.InitializedHandler, m.OnToggleHandler = u.OnToggleHandler
}
l(O, "default");
var i = h; {
    let u = class u extends i.Controller.BaseViewController {
        constructor(t, n, e) {
            super(t, n, e, w);
            var o = this.controller;
            this.clientActionProxies = {
                initializedHandler$Action: l(function(r) {
                    return r = r === void 0 ? "" : r, o.executeActionInsideJSNode(o._initializedHandler$Action.bind(o, i.DataConversion.JSNodeParamConverter.from(r, i.DataTypes.DataTypes.Text)), o.callContext(), function(s) {
                        return {}
                    }, function() {}, "InitializedHandler")
                }, "initializedHandler$Action"),
                onToggleHandler$Action: l(function(r, s) {
                    return r = r === void 0 ? "" : r, s = s === void 0 ? !1 : s, o.executeActionInsideJSNode(o._onToggleHandler$Action.bind(o, i.DataConversion.JSNodeParamConverter.from(r, i.DataTypes.DataTypes.Text), i.DataConversion.JSNodeParamConverter.from(s, i.DataTypes.DataTypes.Boolean)), o.callContext(), function(a) {
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
                    o = this.idService;
                return i.Logger.startActiveSpan("OnInitialize", function(r) {
                    r && (r.setAttribute("code.function", "OnInitialize"), r.setAttribute("outsystems.function.key", "2524abba-f9ff-4f1d-9aaf-d7503958a671"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnInitialize"), t = e.callContext(t);
                        var s = new i.DataTypes.VariableHolder,
                            a = new i.DataTypes.VariableHolder(new i.DataTypes.JSONSerializeOutputType);
                        s.value = c.generateUniqueId$Action(n.variables.internalConfigsVar.uniqueIdAttr, t), n.variables.internalConfigsVar.uniqueIdAttr = s.value.unique_IDOut, n.variables.internalConfigsVar.extendedClassAttr = n.variables.extendedClassIn, n.variables.internalConfigsVar.shapeAttr = n.variables.shapeIn, n.variables.internalConfigsVar.showHandlerAttr = n.variables.showHandlerIn, a.value.jSONOut = i.JSONUtils.serializeToJSON(n.variables.internalConfigsVar, !0, !1), c.bottomSheetCreate$Action(n.variables.internalConfigsVar.uniqueIdAttr, a.value.jSONOut, t), e._registerCallback$Action(t)
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
                    o = this.idService;
                return i.Logger.startActiveSpan("RegisterCallback", function(r) {
                    r && (r.setAttribute("code.function", "RegisterCallback"), r.setAttribute("outsystems.function.key", "41f7c14d-a29c-4560-bbd7-9d103cc94b7b"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("RegisterCallback"), t = e.callContext(t);
                        var s = new i.DataTypes.VariableHolder;
                        s.value = i.Logger.startActiveSpan("GetCallbackHandler", function(a) {
                            a && (a.setAttribute("code.function", "GetCallbackHandler"), a.setAttribute("outsystems.function.key", "e152b377-7633-4d47-a17f-69d217822e08"), a.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), a.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(O, "GetCallbackHandler", "RegisterCallback", {
                                    OnInitializedHandler: i.DataConversion.JSNodeParamConverter.to(null, i.DataTypes.DataTypes.Object),
                                    OnToggleHandler: i.DataConversion.JSNodeParamConverter.to(null, i.DataTypes.DataTypes.Object)
                                }, function(d) {
                                    var b = new(e.constructor.getVariableGroupType("OutSystemsUI.Interaction.BottomSheet.RegisterCallback$getCallbackHandlerJSResult"));
                                    return b.onInitializedHandlerOut = i.DataConversion.JSNodeParamConverter.from(d.OnInitializedHandler, i.DataTypes.DataTypes.Object), b.onToggleHandlerOut = i.DataConversion.JSNodeParamConverter.from(d.OnToggleHandler, i.DataTypes.DataTypes.Object), b
                                }, {
                                    InitializedHandler: e.clientActionProxies.initializedHandler$Action,
                                    OnToggleHandler: e.clientActionProxies.onToggleHandler$Action
                                }, {})
                            } finally {
                                a && a.end()
                            }
                        }, 1), c.bottomSheetRegisterCallback$Action(n.variables.internalConfigsVar.uniqueIdAttr, v.registeredCallbackEvents.initialized, s.value.onInitializedHandlerOut, t), c.bottomSheetRegisterCallback$Action(n.variables.internalConfigsVar.uniqueIdAttr, v.registeredCallbackEvents.onToggle, s.value.onToggleHandlerOut, t)
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
                var o = this.model,
                    r = this.controller,
                    s = this.idService;
                return i.Logger.startActiveSpan("OnToggleHandler", function(a) {
                    return a && (a.setAttribute("code.function", "OnToggleHandler"), a.setAttribute("outsystems.function.key", "86105b5d-81c7-4605-b347-cc4da302e909"), a.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), a.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                        r.ensureControllerAlive("OnToggleHandler"), e = r.callContext(e);
                        var d = new i.DataTypes.VariableHolder(new(r.constructor.getVariableGroupType("OutSystemsUI.Interaction.BottomSheet.OnToggleHandler$vars")));
                        return d.value.bottomSheetIdInLocal = t, d.value.isBottomSheetOpenInLocal = n, i.Flow.executeAsyncFlow(function() {
                            return r.onToggle$Action(d.value.bottomSheetIdInLocal, d.value.isBottomSheetOpenInLocal, e)
                        })
                    }, function() {
                        a && a.end()
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
                    o = this.controller,
                    r = this.idService;
                return i.Logger.startActiveSpan("InitializedHandler", function(s) {
                    return s && (s.setAttribute("code.function", "InitializedHandler"), s.setAttribute("outsystems.function.key", "97bf895d-3030-412e-beac-262ac726e410"), s.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), s.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                        o.ensureControllerAlive("InitializedHandler"), n = o.callContext(n);
                        var a = new i.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("OutSystemsUI.Interaction.BottomSheet.InitializedHandler$vars")));
                        return a.value.bottomSheetIdInLocal = t, i.Flow.executeAsyncFlow(function() {
                            return o.initialized$Action(a.value.bottomSheetIdInLocal, n)
                        })
                    }, function() {
                        s && s.end()
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
                    o = this.idService;
                return i.Logger.startActiveSpan("OnDestroy", function(r) {
                    r && (r.setAttribute("code.function", "OnDestroy"), r.setAttribute("outsystems.function.key", "b01252a9-6745-4a78-8c14-0ea28199f6d7"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnDestroy"), t = e.callContext(t), c.bottomSheetDestroy$Action(n.variables.internalConfigsVar.uniqueIdAttr, t)
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
                    o = this.idService;
                return i.Logger.startActiveSpan("OnReady", function(r) {
                    r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "d7309398-de77-4ce8-a165-6aaa09f9d29a"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnReady"), t = e.callContext(t), c.bottomSheetInitialize$Action(n.variables.internalConfigsVar.uniqueIdAttr, t)
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
                    r && (r.setAttribute("code.function", "OnParametersChanged"), r.setAttribute("outsystems.function.key", "f656f73b-6623-4253-abfa-62ad306e2bf1"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnParametersChanged"), t = e.callContext(t), n.variables.internalConfigsVar.shapeAttr !== n.variables.shapeIn && (n.variables.internalConfigsVar.shapeAttr = n.variables.shapeIn, c.bottomSheetChangeTextProperty$Action(n.variables.internalConfigsVar.uniqueIdAttr, "Shape", n.variables.internalConfigsVar.shapeAttr, t)), n.variables.internalConfigsVar.showHandlerAttr !== n.variables.showHandlerIn && (n.variables.internalConfigsVar.showHandlerAttr = n.variables.showHandlerIn, c.bottomSheetChangeBooleanProperty$Action(n.variables.internalConfigsVar.uniqueIdAttr, "ShowHandler", n.variables.internalConfigsVar.showHandlerAttr, t)), n.variables.internalConfigsVar.extendedClassAttr !== n.variables.extendedClassIn && (n.variables.internalConfigsVar.extendedClassAttr = n.variables.extendedClassIn, c.bottomSheetChangeTextProperty$Action(n.variables.internalConfigsVar.uniqueIdAttr, "ExtendedClass", n.variables.internalConfigsVar.extendedClassAttr, t))
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
            var o = this.controller;
            return i.Logger.startActiveSpan("OnToggleHandler__proxy", function(r) {
                return r && (r.setAttribute("code.function", "OnToggleHandler"), r.setAttribute("outsystems.function.key", "86105b5d-81c7-4605-b347-cc4da302e909"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                    return o.safeExecuteClientAction(o._onToggleHandler$Action, e, t, n)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        initializedHandler$Action(t, n) {
            var e = this.controller;
            return i.Logger.startActiveSpan("InitializedHandler__proxy", function(o) {
                return o && (o.setAttribute("code.function", "InitializedHandler"), o.setAttribute("outsystems.function.key", "97bf895d-3030-412e-beac-262ac726e410"), o.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), o.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                    return e.safeExecuteClientAction(e._initializedHandler$Action, n, t)
                }, function() {
                    o && o.end()
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
            return c.defaultTimeout
        }
    };
    l(u, "ControllerInner");
    let m = u;
    A = m, A.registerVariableGroupType("OutSystemsUI.Interaction.BottomSheet.RegisterCallback$getCallbackHandlerJSResult", [{
        name: "OnInitializedHandler",
        attrName: "onInitializedHandlerOut",
        mandatory: !0,
        dataType: i.DataTypes.DataTypes.Object,
        defaultValue: l(function() {
            return null
        }, "defaultValue")
    }, {
        name: "OnToggleHandler",
        attrName: "onToggleHandlerOut",
        mandatory: !0,
        dataType: i.DataTypes.DataTypes.Object,
        defaultValue: l(function() {
            return null
        }, "defaultValue")
    }]), A.registerVariableGroupType("OutSystemsUI.Interaction.BottomSheet.OnToggleHandler$vars", [{
        name: "BottomSheetId",
        attrName: "bottomSheetIdInLocal",
        mandatory: !0,
        dataType: i.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "IsBottomSheetOpen",
        attrName: "isBottomSheetOpenInLocal",
        mandatory: !0,
        dataType: i.DataTypes.DataTypes.Boolean,
        defaultValue: l(function() {
            return !1
        }, "defaultValue")
    }]), A.registerVariableGroupType("OutSystemsUI.Interaction.BottomSheet.InitializedHandler$vars", [{
        name: "BottomSheetId",
        attrName: "bottomSheetIdInLocal",
        mandatory: !1,
        dataType: i.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }])
}
var A, P = new i.Controller.ControllerFactory(A, E);
var K = _.PlaceholderContent,
    Q = _.IteratorPlaceholderContent,
    y = class y extends T.BaseWebBlock {
        static get displayName() {
            return "Interaction.BottomSheet"
        }
        static getAttributes() {
            return {
                codeFunction: "BottomSheet",
                functionKey: "4fb64c61-8941-44be-b854-da0b608a625b",
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
            return $
        }
        get controllerFactory() {
            return P
        }
        get title() {
            return ""
        }
        internalRender() {
            let u = this.model,
                g = this.controller,
                t = this.idService,
                n = g.validationService,
                e = this.widgetsRecordProvider,
                o = g.callContext(),
                r = y.ifWidget,
                s = y.textWidget,
                a = y.asPrimitiveValue,
                d = y.getTranslation,
                b = this;
            return f.createElement("div", this.getRootNodeProperties(), r(!1, !1, this, function() {
                return []
            }, function() {
                return [f.createElement(C, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        name: u.variables.internalConfigsVar.uniqueIdAttr
                    },
                    style: "osui-bottom-sheet",
                    visible: !0,
                    _idProps: {
                        service: t,
                        name: "BottomSheet"
                    },
                    _widgetRecordProvider: e
                }, f.createElement(H, {
                    extendedProperties: {
                        className: "osui-bottom-sheet__header"
                    },
                    tag: "header",
                    _idProps: {
                        service: t,
                        name: "Header"
                    },
                    _widgetRecordProvider: e
                }, f.createElement(S, {
                    align: 0,
                    content: b.props.placeholders.topBar,
                    style: "osui-bottom-sheet__header__top-bar",
                    _idProps: {
                        service: t,
                        name: "TopBar"
                    },
                    _widgetRecordProvider: e
                })), f.createElement(S, {
                    align: 0,
                    content: b.props.placeholders.content,
                    style: "osui-bottom-sheet__content",
                    _idProps: {
                        service: t,
                        name: "Content"
                    },
                    _widgetRecordProvider: e
                })), f.createElement(C, {
                    align: 0,
                    animate: !1,
                    style: "osui-bottom-sheet-overlay",
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "4"
                    },
                    _widgetRecordProvider: e
                })]
            }))
        }
    };
l(y, "View");
var I = y,
    X = I;
export {
    X as a
};