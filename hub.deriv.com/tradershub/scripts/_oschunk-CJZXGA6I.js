import {
    a as $
} from "./_oschunk-MDH7HMYN.js";
import {
    a as E
} from "./_oschunk-BHZNFATE.js";
import {
    h as v,
    w as I
} from "./_oschunk-HUOHOHZB.js";
import {
    a as w,
    g as T,
    i as C
} from "./_oschunk-6LASTRK7.js";
import {
    a as l
} from "./_oschunk-D2MH3QEK.js";
import {
    rd as g
} from "./_oschunk-HQOLQB4T.js";
import {
    ia as h
} from "./_oschunk-NTQBNJ73.js";
import {
    c,
    g as P
} from "./_oschunk-DVBKI63I.js";
var f = P(w());
var p = {};

function O(b, u, _, t) {
    b.Initialized = u.InitializedHandler, b.OnToggle = u.OnToggleHandler
}
c(O, "default");
var r = h; {
    let u = class u extends r.Controller.BaseViewController {
        constructor(t, n, e) {
            super(t, n, e, p);
            var o = this.controller;
            this.clientActionProxies = {
                initializedHandler$Action: c(function(i) {
                    return i = i === void 0 ? "" : i, o.executeActionInsideJSNode(o._initializedHandler$Action.bind(o, r.DataConversion.JSNodeParamConverter.from(i, r.DataTypes.DataTypes.Text)), o.callContext(), function(s) {
                        return {}
                    }, function() {}, "InitializedHandler")
                }, "initializedHandler$Action"),
                onToggleHandler$Action: c(function(i, s) {
                    return i = i === void 0 ? "" : i, s = s === void 0 ? !1 : s, o.executeActionInsideJSNode(o._onToggleHandler$Action.bind(o, r.DataConversion.JSNodeParamConverter.from(i, r.DataTypes.DataTypes.Text), r.DataConversion.JSNodeParamConverter.from(s, r.DataTypes.DataTypes.Boolean)), o.callContext(), function(a) {
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
        get _registerCallbacks$Action() {
            return this.hasOwnProperty("__registerCallbacks$Action") || (this.__registerCallbacks$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("RegisterCallbacks", function(i) {
                    i && (i.setAttribute("code.function", "RegisterCallbacks"), i.setAttribute("outsystems.function.key", "1868db6f-bce7-41b4-baaf-661dcfddbf3b"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("RegisterCallbacks"), t = e.callContext(t);
                        var s = new r.DataTypes.VariableHolder;
                        s.value = r.Logger.startActiveSpan("GetCallbackHandlers", function(a) {
                            a && (a.setAttribute("code.function", "GetCallbackHandlers"), a.setAttribute("outsystems.function.key", "64f94e43-11eb-4a7a-9b7b-b8ce6b9709f3"), a.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), a.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(O, "GetCallbackHandlers", "RegisterCallbacks", {
                                    OnToggle: r.DataConversion.JSNodeParamConverter.to(null, r.DataTypes.DataTypes.Object),
                                    Initialized: r.DataConversion.JSNodeParamConverter.to(null, r.DataTypes.DataTypes.Object)
                                }, function(d) {
                                    var m = new(e.constructor.getVariableGroupType("OutSystemsUI.Content.Tooltip.RegisterCallbacks$getCallbackHandlersJSResult"));
                                    return m.onToggleOut = r.DataConversion.JSNodeParamConverter.from(d.OnToggle, r.DataTypes.DataTypes.Object), m.initializedOut = r.DataConversion.JSNodeParamConverter.from(d.Initialized, r.DataTypes.DataTypes.Object), m
                                }, {
                                    InitializedHandler: e.clientActionProxies.initializedHandler$Action,
                                    OnToggleHandler: e.clientActionProxies.onToggleHandler$Action
                                }, {})
                            } finally {
                                a && a.end()
                            }
                        }, 1), l.tooltipRegisterCallback$Action(n.variables.internal_ConfigsVar.uniqueIdAttr, "Initialized", s.value.initializedOut, t), l.tooltipRegisterCallback$Action(n.variables.internal_ConfigsVar.uniqueIdAttr, "OnToggle", s.value.onToggleOut, t)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__registerCallbacks$Action
        }
        set _registerCallbacks$Action(t) {
            this.__registerCallbacks$Action = t
        }
        get _initializedHandler$Action() {
            return this.hasOwnProperty("__initializedHandler$Action") || (this.__initializedHandler$Action = function(t, n) {
                var e = this.model,
                    o = this.controller,
                    i = this.idService;
                return r.Logger.startActiveSpan("InitializedHandler", function(s) {
                    return s && (s.setAttribute("code.function", "InitializedHandler"), s.setAttribute("outsystems.function.key", "3499884e-ed06-42c1-a98d-3539c099867b"), s.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), s.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        o.ensureControllerAlive("InitializedHandler"), n = o.callContext(n);
                        var a = new r.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("OutSystemsUI.Content.Tooltip.InitializedHandler$vars")));
                        return a.value.tooltipIdInLocal = t, r.Flow.executeAsyncFlow(function() {
                            return o.initialized$Action(a.value.tooltipIdInLocal, n)
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
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("OnReady", function(i) {
                    i && (i.setAttribute("code.function", "OnReady"), i.setAttribute("outsystems.function.key", "441e8fed-1d47-4502-8103-23eb63c0c441"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnReady"), t = e.callContext(t), l.tooltipInitialize$Action(n.variables.internal_ConfigsVar.uniqueIdAttr, t), l.logEvent$Action(g.logType.general, "Tooltip created", t)
                    } finally {
                        i && i.end()
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
                return r.Logger.startActiveSpan("OnParametersChanged", function(i) {
                    i && (i.setAttribute("code.function", "OnParametersChanged"), i.setAttribute("outsystems.function.key", "51d2be48-0914-4188-abbe-aab087b2c58b"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnParametersChanged"), t = e.callContext(t), n.variables.positionIn !== n.variables.internal_ConfigsVar.positionAttr && (n.variables.internal_ConfigsVar.positionAttr = n.variables.positionIn, l.tooltipChangeTextProperty$Action(n.variables.internal_ConfigsVar.uniqueIdAttr, "Position", n.variables.internal_ConfigsVar.positionAttr, t)), n.variables.startsOpenIn !== n.variables.internal_ConfigsVar.startVisibleAttr && (n.variables.internal_ConfigsVar.startVisibleAttr = n.variables.startsOpenIn, l.tooltipChangeBooleanProperty$Action(n.variables.internal_ConfigsVar.uniqueIdAttr, "StartVisible", n.variables.internal_ConfigsVar.startVisibleAttr, t)), (n.variables.triggerIn === g.trigger.onHover || n.variables.triggerIn === r.BuiltinFunctions.nullTextIdentifier()) !== n.variables.internal_ConfigsVar.isHoverAttr && (n.variables.internal_ConfigsVar.isHoverAttr = l.isPhone$Action(t).isPhoneOut ? !1 : n.variables.triggerIn === g.trigger.onHover || n.variables.triggerIn === r.BuiltinFunctions.nullTextIdentifier(), l.tooltipChangeBooleanProperty$Action(n.variables.internal_ConfigsVar.uniqueIdAttr, "IsHover", n.variables.internal_ConfigsVar.isHoverAttr, t)), n.variables.extendedClassIn !== n.variables.internal_ConfigsVar.extendedClassAttr && (n.variables.internal_ConfigsVar.extendedClassAttr = n.variables.extendedClassIn, l.tooltipChangeTextProperty$Action(n.variables.internal_ConfigsVar.uniqueIdAttr, "ExtendedClass", n.variables.internal_ConfigsVar.extendedClassAttr, t))
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(t) {
            this.__onParametersChanged$Action = t
        }
        get _onToggleHandler$Action() {
            return this.hasOwnProperty("__onToggleHandler$Action") || (this.__onToggleHandler$Action = function(t, n, e) {
                var o = this.model,
                    i = this.controller,
                    s = this.idService;
                return r.Logger.startActiveSpan("OnToggleHandler", function(a) {
                    return a && (a.setAttribute("code.function", "OnToggleHandler"), a.setAttribute("outsystems.function.key", "c523e5c1-f3f6-4989-9eb6-767bf1b8bf99"), a.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), a.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        i.ensureControllerAlive("OnToggleHandler"), e = i.callContext(e);
                        var d = new r.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("OutSystemsUI.Content.Tooltip.OnToggleHandler$vars")));
                        return d.value.tooltipIdInLocal = t, d.value.isOpenedInLocal = n, r.Flow.executeAsyncFlow(function() {
                            return i.onToggle$Action(d.value.tooltipIdInLocal, d.value.isOpenedInLocal, e)
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
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("OnDestroy", function(i) {
                    i && (i.setAttribute("code.function", "OnDestroy"), i.setAttribute("outsystems.function.key", "d90e4860-cd4d-4de7-b1c6-f643b72a147f"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnDestroy"), t = e.callContext(t), l.tooltipDestroy$Action(n.variables.internal_ConfigsVar.uniqueIdAttr, t)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(t) {
            this.__onDestroy$Action = t
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("OnInitialize", function(i) {
                    i && (i.setAttribute("code.function", "OnInitialize"), i.setAttribute("outsystems.function.key", "ec8c6a72-06d7-46e2-bc50-47c30b54042b"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnInitialize"), t = e.callContext(t);
                        var s = new r.DataTypes.VariableHolder;
                        l.logEvent$Action(g.logType.general, "Going to create Tooltip", t), s.value = l.generateUniqueId$Action(n.variables.internal_ConfigsVar.uniqueIdAttr, t), n.variables.internal_ConfigsVar.uniqueIdAttr = s.value.unique_IDOut, n.variables.internal_ConfigsVar.positionAttr = n.variables.positionIn, n.variables.internal_ConfigsVar.startVisibleAttr = n.variables.startsOpenIn, n.variables.internal_ConfigsVar.isHoverAttr = l.isPhone$Action(t).isPhoneOut ? !1 : n.variables.triggerIn === g.trigger.onHover || n.variables.triggerIn === r.BuiltinFunctions.nullTextIdentifier(), n.variables.internal_ConfigsVar.extendedClassAttr = n.variables.extendedClassIn, l.tooltipCreate$Action(n.variables.internal_ConfigsVar, t), e._registerCallbacks$Action(t)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(t) {
            this.__onInitialize$Action = t
        }
        registerCallbacks$Action(t) {
            var n = this.controller;
            return r.Logger.startActiveSpan("RegisterCallbacks__proxy", function(e) {
                e && (e.setAttribute("code.function", "RegisterCallbacks"), e.setAttribute("outsystems.function.key", "1868db6f-bce7-41b4-baaf-661dcfddbf3b"), e.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), e.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._registerCallbacks$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        initializedHandler$Action(t, n) {
            var e = this.controller;
            return r.Logger.startActiveSpan("InitializedHandler__proxy", function(o) {
                return o && (o.setAttribute("code.function", "InitializedHandler"), o.setAttribute("outsystems.function.key", "3499884e-ed06-42c1-a98d-3539c099867b"), o.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), o.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return e.safeExecuteClientAction(e._initializedHandler$Action, n, t)
                }, function() {
                    o && o.end()
                })
            }, 0)
        }
        onReady$Action(t) {
            var n = this.controller;
            return r.Logger.startActiveSpan("OnReady__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnReady"), e.setAttribute("outsystems.function.key", "441e8fed-1d47-4502-8103-23eb63c0c441"), e.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), e.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onReady$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onParametersChanged$Action(t) {
            var n = this.controller;
            return r.Logger.startActiveSpan("OnParametersChanged__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnParametersChanged"), e.setAttribute("outsystems.function.key", "51d2be48-0914-4188-abbe-aab087b2c58b"), e.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), e.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onParametersChanged$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onToggleHandler$Action(t, n, e) {
            var o = this.controller;
            return r.Logger.startActiveSpan("OnToggleHandler__proxy", function(i) {
                return i && (i.setAttribute("code.function", "OnToggleHandler"), i.setAttribute("outsystems.function.key", "c523e5c1-f3f6-4989-9eb6-767bf1b8bf99"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return o.safeExecuteClientAction(o._onToggleHandler$Action, e, t, n)
                }, function() {
                    i && i.end()
                })
            }, 0)
        }
        onDestroy$Action(t) {
            var n = this.controller;
            return r.Logger.startActiveSpan("OnDestroy__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnDestroy"), e.setAttribute("outsystems.function.key", "d90e4860-cd4d-4de7-b1c6-f643b72a147f"), e.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), e.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onDestroy$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onInitialize$Action(t) {
            var n = this.controller;
            return r.Logger.startActiveSpan("OnInitialize__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnInitialize"), e.setAttribute("outsystems.function.key", "ec8c6a72-06d7-46e2-bc50-47c30b54042b"), e.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), e.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onInitialize$Action, t)
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
            return l.defaultTimeout
        }
    };
    c(u, "ControllerInner");
    let b = u;
    A = b, A.registerVariableGroupType("OutSystemsUI.Content.Tooltip.RegisterCallbacks$getCallbackHandlersJSResult", [{
        name: "OnToggle",
        attrName: "onToggleOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Object,
        defaultValue: c(function() {
            return null
        }, "defaultValue")
    }, {
        name: "Initialized",
        attrName: "initializedOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Object,
        defaultValue: c(function() {
            return null
        }, "defaultValue")
    }]), A.registerVariableGroupType("OutSystemsUI.Content.Tooltip.InitializedHandler$vars", [{
        name: "TooltipId",
        attrName: "tooltipIdInLocal",
        mandatory: !1,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }]), A.registerVariableGroupType("OutSystemsUI.Content.Tooltip.OnToggleHandler$vars", [{
        name: "TooltipId",
        attrName: "tooltipIdInLocal",
        mandatory: !1,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "IsOpened",
        attrName: "isOpenedInLocal",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Boolean,
        defaultValue: c(function() {
            return !1
        }, "defaultValue")
    }])
}
var A, H = new r.Controller.ControllerFactory(A, E);
var M = C.PlaceholderContent,
    K = C.IteratorPlaceholderContent,
    y = class y extends T.BaseWebBlock {
        static get displayName() {
            return "Content.Tooltip"
        }
        static getAttributes() {
            return {
                codeFunction: "Tooltip",
                functionKey: "283641ee-368d-43a2-a20e-4fc47dd869fb",
                functionOwnerName: "OutSystemsUI",
                functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css"]
        }
        static getJsDependencies() {
            return ["scripts/OutSystemsUI.UserScripts.OutSystemsUI.js", "scripts/OutSystemsUI.UserScripts.FloatingUICore.js", "scripts/OutSystemsUI.UserScripts.FloatingUIDom.js"]
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return $
        }
        get controllerFactory() {
            return H
        }
        get title() {
            return ""
        }
        internalRender() {
            let u = this.model,
                _ = this.controller,
                t = this.idService,
                n = _.validationService,
                e = this.widgetsRecordProvider,
                o = _.callContext(),
                i = y.ifWidget,
                s = y.textWidget,
                a = y.asPrimitiveValue,
                d = y.getTranslation,
                m = this;
            return f.createElement("div", this.getRootNodeProperties(), f.createElement(v, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    name: u.variables.internal_ConfigsVar.uniqueIdAttr
                },
                style: "osui-tooltip",
                visible: !0,
                _idProps: {
                    service: t,
                    name: "TooltipWrapper"
                },
                _widgetRecordProvider: e
            }, f.createElement(I, {
                align: 0,
                content: m.props.placeholders.content,
                style: "osui-tooltip__content",
                _idProps: {
                    service: t,
                    name: "Content"
                },
                _widgetRecordProvider: e
            }), i(!1, !1, this, function() {
                return []
            }, function() {
                return [f.createElement(v, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        "data-uniqueid": u.variables.internal_ConfigsVar.uniqueIdAttr
                    },
                    style: "osui-tooltip__balloon-wrapper osui-balloon",
                    visible: !0,
                    _idProps: {
                        service: t,
                        name: "TooltipBallonWrapper"
                    },
                    _widgetRecordProvider: e
                }, f.createElement(I, {
                    align: 0,
                    content: m.props.placeholders.tooltip,
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: "osui-tooltip__balloon-wrapper__balloon",
                    _idProps: {
                        service: t,
                        name: "Tooltip"
                    },
                    _widgetRecordProvider: e
                }), f.createElement(v, {
                    align: 0,
                    animate: !1,
                    style: "osui-tooltip__balloon-arrow",
                    visible: !0,
                    _idProps: {
                        service: t,
                        name: "ArrowElement"
                    },
                    _widgetRecordProvider: e
                }))]
            })))
        }
    };
c(y, "View");
var S = y,
    Q = S;
export {
    Q as a
};