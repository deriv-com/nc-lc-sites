import {
    a as x
} from "./_oschunk-YVFTECWM.js";
import {
    f as L,
    s as O
} from "./_oschunk-VR5BNL2K.js";
import {
    a as M,
    g as I,
    m as T,
    o as P,
    q as D,
    r as N,
    s as k,
    t as z
} from "./_oschunk-4VHUVDBV.js";
import {
    Eb as g,
    Qb as u,
    vb as A
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as b,
    c as l,
    e as W
} from "./_oschunk-M5BUVJ72.js";
var m = W(M());
var f = b,
    $ = class $ extends f.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Internal_Configs", "internal_ConfigsVar", "Internal_Configs", !0, !1, f.DataTypes.DataTypes.Record, function() {
                return f.DataTypes.ImmutableBase.getData(new g)
            }, !1, g), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, f.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, f.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(f.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
l($, "VariablesRecord");
var v = $;
v.init();
var R = class R extends f.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
l(R, "WidgetsRecord");
var E = R,
    w = class w extends f.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return v
        }
        static getWidgetsRecordConstructor() {
            return E
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(a) {
            "ExtendedClass" in a && (this.variables.extendedClassIn = a.ExtendedClass, "_extendedClassInDataFetchStatus" in a && (this.variables._extendedClassInDataFetchStatus = a._extendedClassInDataFetchStatus))
        }
    };
l(w, "Model");
var _ = w;
_._hasValidationWidgetsValue = void 0;
var U = new f.Model.ModelFactory(_);
var V = {};

function H(d, a, C, t) {
    d.Initialized = a.InitializedHandler
}
l(H, "default");
var i = b; {
    let a = class a extends i.Controller.BaseViewController {
        constructor(t, n, e) {
            super(t, n, e, V);
            var o = this.controller;
            this.clientActionProxies = {
                initializedHandler$Action: l(function(r) {
                    return r = r === void 0 ? "" : r, o.executeActionInsideJSNode(o._initializedHandler$Action.bind(o, i.DataConversion.JSNodeParamConverter.from(r, i.DataTypes.DataTypes.Text)), o.callContext(), function(s) {
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
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    o = this.idService;
                return i.Logger.startActiveSpan("OnReady", function(r) {
                    r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "35efb4d4-01ac-4d9e-b8ba-875deae1c220"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnReady"), t = e.callContext(t), u.animatedLabelInitialize$Action(n.variables.internal_ConfigsVar.uniqueIdAttr, t), u.logEvent$Action(A.logType.general, "AnimatedLabel created", t)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(t) {
            this.__onReady$Action = t
        }
        get _initializedHandler$Action() {
            return this.hasOwnProperty("__initializedHandler$Action") || (this.__initializedHandler$Action = function(t, n) {
                var e = this.model,
                    o = this.controller,
                    r = this.idService;
                return i.Logger.startActiveSpan("InitializedHandler", function(s) {
                    return s && (s.setAttribute("code.function", "InitializedHandler"), s.setAttribute("outsystems.function.key", "a43dc40d-123f-445b-ab0c-7822b981e977"), s.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), s.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                        o.ensureControllerAlive("InitializedHandler"), n = o.callContext(n);
                        var c = new i.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("OutSystemsUI.Interaction.AnimatedLabel.InitializedHandler$vars")));
                        return c.value.animatedLabelIdInLocal = t, i.Flow.executeAsyncFlow(function() {
                            return o.initialized$Action(c.value.animatedLabelIdInLocal, n)
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
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    o = this.idService;
                return i.Logger.startActiveSpan("OnParametersChanged", function(r) {
                    r && (r.setAttribute("code.function", "OnParametersChanged"), r.setAttribute("outsystems.function.key", "ac55a81a-4ce9-4fe1-9fb2-65e8ff3ee800"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnParametersChanged"), t = e.callContext(t), n.variables.extendedClassIn !== n.variables.internal_ConfigsVar.extendedClassAttr && (n.variables.internal_ConfigsVar.extendedClassAttr = n.variables.extendedClassIn, u.animatedLabelChangeTextProperty$Action(n.variables.internal_ConfigsVar.uniqueIdAttr, "ExtendedClass", n.variables.internal_ConfigsVar.extendedClassAttr, t))
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(t) {
            this.__onParametersChanged$Action = t
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    o = this.idService;
                return i.Logger.startActiveSpan("OnInitialize", function(r) {
                    r && (r.setAttribute("code.function", "OnInitialize"), r.setAttribute("outsystems.function.key", "b83a68f0-0a4b-48c6-8982-9f0b6dd99a34"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnInitialize"), t = e.callContext(t);
                        var s = new i.DataTypes.VariableHolder;
                        u.logEvent$Action(A.logType.general, "Going to create AnimatedLabel", t), s.value = u.generateUniqueId$Action(n.variables.internal_ConfigsVar.uniqueIdAttr, t), n.variables.internal_ConfigsVar.uniqueIdAttr = s.value.unique_IDOut, n.variables.internal_ConfigsVar.extendedClassAttr = n.variables.extendedClassIn, u.animatedLabelCreate$Action(n.variables.internal_ConfigsVar, t), e._registerCallbacks$Action(t)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(t) {
            this.__onInitialize$Action = t
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    o = this.idService;
                return i.Logger.startActiveSpan("OnDestroy", function(r) {
                    r && (r.setAttribute("code.function", "OnDestroy"), r.setAttribute("outsystems.function.key", "ba249c69-655b-4a98-b2f1-3b6a57f79e36"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnDestroy"), t = e.callContext(t), u.animatedLabelDestroy$Action(n.variables.internal_ConfigsVar.uniqueIdAttr, t)
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
                var n = this.model,
                    e = this.controller,
                    o = this.idService;
                return i.Logger.startActiveSpan("RegisterCallbacks", function(r) {
                    r && (r.setAttribute("code.function", "RegisterCallbacks"), r.setAttribute("outsystems.function.key", "bbf7a664-bfa9-42f3-a68d-d5305c0db7a8"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("RegisterCallbacks"), t = e.callContext(t);
                        var s = new i.DataTypes.VariableHolder;
                        s.value = i.Logger.startActiveSpan("GetCallbackHandlers", function(c) {
                            c && (c.setAttribute("code.function", "GetCallbackHandlers"), c.setAttribute("outsystems.function.key", "10982705-6bff-49d4-9cca-04aafbcecd33"), c.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), c.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(H, "GetCallbackHandlers", "RegisterCallbacks", {
                                    Initialized: i.DataConversion.JSNodeParamConverter.to(null, i.DataTypes.DataTypes.Object)
                                }, function(y) {
                                    var S = new(e.constructor.getVariableGroupType("OutSystemsUI.Interaction.AnimatedLabel.RegisterCallbacks$getCallbackHandlersJSResult"));
                                    return S.initializedOut = i.DataConversion.JSNodeParamConverter.from(y.Initialized, i.DataTypes.DataTypes.Object), S
                                }, {
                                    InitializedHandler: e.clientActionProxies.initializedHandler$Action
                                }, {})
                            } finally {
                                c && c.end()
                            }
                        }, 1), u.animatedLabelRegisterCallback$Action(n.variables.internal_ConfigsVar.uniqueIdAttr, A.registeredCallbackEvents.initialized, s.value.initializedOut, t)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__registerCallbacks$Action
        }
        set _registerCallbacks$Action(t) {
            this.__registerCallbacks$Action = t
        }
        get _onRender$Action() {
            return this.hasOwnProperty("__onRender$Action") || (this.__onRender$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    o = this.idService;
                return i.Logger.startActiveSpan("OnRender", function(r) {
                    r && (r.setAttribute("code.function", "OnRender"), r.setAttribute("outsystems.function.key", "cf87313e-0ebf-43cb-a2b8-e0a844bec3c8"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnRender"), t = e.callContext(t), u.animatedLabelUpdateOnRender$Action(n.variables.internal_ConfigsVar.uniqueIdAttr, t)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onRender$Action
        }
        set _onRender$Action(t) {
            this.__onRender$Action = t
        }
        onReady$Action(t) {
            var n = this.controller;
            return i.Logger.startActiveSpan("OnReady__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnReady"), e.setAttribute("outsystems.function.key", "35efb4d4-01ac-4d9e-b8ba-875deae1c220"), e.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), e.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onReady$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        initializedHandler$Action(t, n) {
            var e = this.controller;
            return i.Logger.startActiveSpan("InitializedHandler__proxy", function(o) {
                return o && (o.setAttribute("code.function", "InitializedHandler"), o.setAttribute("outsystems.function.key", "a43dc40d-123f-445b-ab0c-7822b981e977"), o.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), o.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                    return e.safeExecuteClientAction(e._initializedHandler$Action, n, t)
                }, function() {
                    o && o.end()
                })
            }, 0)
        }
        onParametersChanged$Action(t) {
            var n = this.controller;
            return i.Logger.startActiveSpan("OnParametersChanged__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnParametersChanged"), e.setAttribute("outsystems.function.key", "ac55a81a-4ce9-4fe1-9fb2-65e8ff3ee800"), e.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), e.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onParametersChanged$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onInitialize$Action(t) {
            var n = this.controller;
            return i.Logger.startActiveSpan("OnInitialize__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnInitialize"), e.setAttribute("outsystems.function.key", "b83a68f0-0a4b-48c6-8982-9f0b6dd99a34"), e.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), e.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onInitialize$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onDestroy$Action(t) {
            var n = this.controller;
            return i.Logger.startActiveSpan("OnDestroy__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnDestroy"), e.setAttribute("outsystems.function.key", "ba249c69-655b-4a98-b2f1-3b6a57f79e36"), e.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), e.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onDestroy$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        registerCallbacks$Action(t) {
            var n = this.controller;
            return i.Logger.startActiveSpan("RegisterCallbacks__proxy", function(e) {
                e && (e.setAttribute("code.function", "RegisterCallbacks"), e.setAttribute("outsystems.function.key", "bbf7a664-bfa9-42f3-a68d-d5305c0db7a8"), e.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), e.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._registerCallbacks$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onRender$Action(t) {
            var n = this.controller;
            return i.Logger.startActiveSpan("OnRender__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnRender"), e.setAttribute("outsystems.function.key", "cf87313e-0ebf-43cb-a2b8-e0a844bec3c8"), e.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), e.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onRender$Action, t)
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
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = function(t) {
                var n = this.controller,
                    e = this.model,
                    o = this.idService;
                return n.onRender$Action(t)
            }), this._onRenderEventHandler
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
            return u.defaultTimeout
        }
    };
    l(a, "ControllerInner");
    let d = a;
    h = d, h.registerVariableGroupType("OutSystemsUI.Interaction.AnimatedLabel.InitializedHandler$vars", [{
        name: "AnimatedLabelId",
        attrName: "animatedLabelIdInLocal",
        mandatory: !1,
        dataType: i.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }]), h.registerVariableGroupType("OutSystemsUI.Interaction.AnimatedLabel.RegisterCallbacks$getCallbackHandlersJSResult", [{
        name: "Initialized",
        attrName: "initializedOut",
        mandatory: !0,
        dataType: i.DataTypes.DataTypes.Object,
        defaultValue: l(function() {
            return null
        }, "defaultValue")
    }])
}
var h, p = new i.Controller.ControllerFactory(h, x);
var mt = I.PlaceholderContent,
    bt = I.IteratorPlaceholderContent,
    q = l(function() {
        var d = P(function(a) {
            var C = a.model,
                t = a.controller,
                n = a.controller.idService,
                e = t.validationService,
                o = t.callContext(),
                r = k,
                s = z,
                c = {
                    props: a,
                    validateWidget: l(function(F) {
                        a.validateWidget(a, F)
                    }, "validateWidget")
                },
                y = C,
                S = N,
                J = D,
                B = T();
            return m.createElement("div", a.rootNodeProperties, m.createElement(L, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    name: C.variables.internal_ConfigsVar.uniqueIdAttr
                },
                style: "animated-label",
                visible: !0,
                _idProps: {
                    service: n,
                    name: "AnimatedLabel"
                },
                _widgetRecordProvider: y
            }, m.createElement(O, {
                align: 0,
                content: c.props.placeholders.label,
                style: "animated-label-text",
                _idProps: {
                    service: n,
                    name: "Label"
                },
                _widgetRecordProvider: y
            }), m.createElement(O, {
                align: 0,
                content: c.props.placeholders.input,
                style: "animated-label-input",
                _idProps: {
                    service: n,
                    name: "Input"
                },
                _widgetRecordProvider: y
            })))
        }, {
            topLevelComponent: !1,
            getAttributes: l(function() {
                return {
                    codeFunction: "AnimatedLabel",
                    functionKey: "24da8401-f5f4-46bb-b63a-32f0e5f522cd",
                    functionOwnerName: "OutSystemsUI",
                    functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Interaction.AnimatedLabel",
            modelFactory: U,
            controllerFactory: p
        });
        return d.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"]
        }, d.getJsDependencies = function() {
            return ["scripts/OutSystemsUI.UserScripts.OutSystemsUI.js"]
        }, d.getBlocks = function() {
            return []
        }, d
    }, "componentFactory"),
    At = q();
export {
    At as a
};