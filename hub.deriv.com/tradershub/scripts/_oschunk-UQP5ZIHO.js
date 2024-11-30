import {
    a as k
} from "./_oschunk-BHZNFATE.js";
import {
    h as N,
    w as O
} from "./_oschunk-WAXNMQCP.js";
import {
    a as V,
    g as H,
    i as S
} from "./_oschunk-J7LCUWB3.js";
import {
    a as u
} from "./_oschunk-H7UK4VZM.js";
import {
    m as I
} from "./_oschunk-JSVFHRDW.js";
import {
    Bd as _
} from "./_oschunk-44PT7RP7.js";
import {
    ia as b
} from "./_oschunk-NTQBNJ73.js";
import {
    c as s,
    g as x
} from "./_oschunk-DVBKI63I.js";
var A = x(V());
var d = b,
    R = class R extends d.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Internal_Configs", "internal_ConfigsVar", "Internal_Configs", !0, !1, d.DataTypes.DataTypes.Record, function() {
                return d.DataTypes.ImmutableBase.getData(new I)
            }, !1, I), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, d.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, d.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(d.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(R, "VariablesRecord");
var h = R;
h.init();
var $ = class $ extends d.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s($, "WidgetsRecord");
var E = $,
    T = class T extends d.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return h
        }
        static getWidgetsRecordConstructor() {
            return E
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(l) {
            "ExtendedClass" in l && (this.variables.extendedClassIn = l.ExtendedClass, "_extendedClassInDataFetchStatus" in l && (this.variables._extendedClassInDataFetchStatus = l._extendedClassInDataFetchStatus))
        }
    };
s(T, "Model");
var v = T;
v._hasValidationWidgetsValue = void 0;
var z = new d.Model.ModelFactory(v);
var L = {};

function w(y, l, g, t) {
    y.Initialized = l.InitializedHandler
}
s(w, "default");
var r = b; {
    let l = class l extends r.Controller.BaseViewController {
        constructor(t, i, e) {
            super(t, i, e, L);
            var o = this.controller;
            this.clientActionProxies = {
                initializedHandler$Action: s(function(n) {
                    return n = n === void 0 ? "" : n, o.executeActionInsideJSNode(o._initializedHandler$Action.bind(o, r.DataConversion.JSNodeParamConverter.from(n, r.DataTypes.DataTypes.Text)), o.callContext(), function(a) {
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
                var i = this.model,
                    e = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("OnReady", function(n) {
                    n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "35efb4d4-01ac-4d9e-b8ba-875deae1c220"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnReady"), t = e.callContext(t), u.animatedLabelInitialize$Action(i.variables.internal_ConfigsVar.uniqueIdAttr, t), u.logEvent$Action(_.logType.general, "AnimatedLabel created", t)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(t) {
            this.__onReady$Action = t
        }
        get _initializedHandler$Action() {
            return this.hasOwnProperty("__initializedHandler$Action") || (this.__initializedHandler$Action = function(t, i) {
                var e = this.model,
                    o = this.controller,
                    n = this.idService;
                return r.Logger.startActiveSpan("InitializedHandler", function(a) {
                    return a && (a.setAttribute("code.function", "InitializedHandler"), a.setAttribute("outsystems.function.key", "a43dc40d-123f-445b-ab0c-7822b981e977"), a.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), a.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        o.ensureControllerAlive("InitializedHandler"), i = o.callContext(i);
                        var c = new r.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("OutSystemsUI.Interaction.AnimatedLabel.InitializedHandler$vars")));
                        return c.value.animatedLabelIdInLocal = t, r.Flow.executeAsyncFlow(function() {
                            return o.initialized$Action(c.value.animatedLabelIdInLocal, i)
                        })
                    }, function() {
                        a && a.end()
                    })
                }, 1)
            }), this.__initializedHandler$Action
        }
        set _initializedHandler$Action(t) {
            this.__initializedHandler$Action = t
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(t) {
                var i = this.model,
                    e = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("OnParametersChanged", function(n) {
                    n && (n.setAttribute("code.function", "OnParametersChanged"), n.setAttribute("outsystems.function.key", "ac55a81a-4ce9-4fe1-9fb2-65e8ff3ee800"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnParametersChanged"), t = e.callContext(t), i.variables.extendedClassIn !== i.variables.internal_ConfigsVar.extendedClassAttr && (i.variables.internal_ConfigsVar.extendedClassAttr = i.variables.extendedClassIn, u.animatedLabelChangeTextProperty$Action(i.variables.internal_ConfigsVar.uniqueIdAttr, "ExtendedClass", i.variables.internal_ConfigsVar.extendedClassAttr, t))
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(t) {
            this.__onParametersChanged$Action = t
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(t) {
                var i = this.model,
                    e = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("OnInitialize", function(n) {
                    n && (n.setAttribute("code.function", "OnInitialize"), n.setAttribute("outsystems.function.key", "b83a68f0-0a4b-48c6-8982-9f0b6dd99a34"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnInitialize"), t = e.callContext(t);
                        var a = new r.DataTypes.VariableHolder;
                        u.logEvent$Action(_.logType.general, "Going to create AnimatedLabel", t), a.value = u.generateUniqueId$Action(i.variables.internal_ConfigsVar.uniqueIdAttr, t), i.variables.internal_ConfigsVar.uniqueIdAttr = a.value.unique_IDOut, i.variables.internal_ConfigsVar.extendedClassAttr = i.variables.extendedClassIn, u.animatedLabelCreate$Action(i.variables.internal_ConfigsVar, t), e._registerCallbacks$Action(t)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(t) {
            this.__onInitialize$Action = t
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(t) {
                var i = this.model,
                    e = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("OnDestroy", function(n) {
                    n && (n.setAttribute("code.function", "OnDestroy"), n.setAttribute("outsystems.function.key", "ba249c69-655b-4a98-b2f1-3b6a57f79e36"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnDestroy"), t = e.callContext(t), u.animatedLabelDestroy$Action(i.variables.internal_ConfigsVar.uniqueIdAttr, t)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(t) {
            this.__onDestroy$Action = t
        }
        get _registerCallbacks$Action() {
            return this.hasOwnProperty("__registerCallbacks$Action") || (this.__registerCallbacks$Action = function(t) {
                var i = this.model,
                    e = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("RegisterCallbacks", function(n) {
                    n && (n.setAttribute("code.function", "RegisterCallbacks"), n.setAttribute("outsystems.function.key", "bbf7a664-bfa9-42f3-a68d-d5305c0db7a8"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("RegisterCallbacks"), t = e.callContext(t);
                        var a = new r.DataTypes.VariableHolder;
                        a.value = r.Logger.startActiveSpan("GetCallbackHandlers", function(c) {
                            c && (c.setAttribute("code.function", "GetCallbackHandlers"), c.setAttribute("outsystems.function.key", "10982705-6bff-49d4-9cca-04aafbcecd33"), c.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), c.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(w, "GetCallbackHandlers", "RegisterCallbacks", {
                                    Initialized: r.DataConversion.JSNodeParamConverter.to(null, r.DataTypes.DataTypes.Object)
                                }, function(P) {
                                    var m = new(e.constructor.getVariableGroupType("OutSystemsUI.Interaction.AnimatedLabel.RegisterCallbacks$getCallbackHandlersJSResult"));
                                    return m.initializedOut = r.DataConversion.JSNodeParamConverter.from(P.Initialized, r.DataTypes.DataTypes.Object), m
                                }, {
                                    InitializedHandler: e.clientActionProxies.initializedHandler$Action
                                }, {})
                            } finally {
                                c && c.end()
                            }
                        }, 1), u.animatedLabelRegisterCallback$Action(i.variables.internal_ConfigsVar.uniqueIdAttr, _.registeredCallbackEvents.initialized, a.value.initializedOut, t)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__registerCallbacks$Action
        }
        set _registerCallbacks$Action(t) {
            this.__registerCallbacks$Action = t
        }
        get _onRender$Action() {
            return this.hasOwnProperty("__onRender$Action") || (this.__onRender$Action = function(t) {
                var i = this.model,
                    e = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("OnRender", function(n) {
                    n && (n.setAttribute("code.function", "OnRender"), n.setAttribute("outsystems.function.key", "cf87313e-0ebf-43cb-a2b8-e0a844bec3c8"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnRender"), t = e.callContext(t), u.animatedLabelUpdateOnRender$Action(i.variables.internal_ConfigsVar.uniqueIdAttr, t)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onRender$Action
        }
        set _onRender$Action(t) {
            this.__onRender$Action = t
        }
        onReady$Action(t) {
            var i = this.controller;
            return r.Logger.startActiveSpan("OnReady__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnReady"), e.setAttribute("outsystems.function.key", "35efb4d4-01ac-4d9e-b8ba-875deae1c220"), e.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), e.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onReady$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        initializedHandler$Action(t, i) {
            var e = this.controller;
            return r.Logger.startActiveSpan("InitializedHandler__proxy", function(o) {
                return o && (o.setAttribute("code.function", "InitializedHandler"), o.setAttribute("outsystems.function.key", "a43dc40d-123f-445b-ab0c-7822b981e977"), o.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), o.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return e.safeExecuteClientAction(e._initializedHandler$Action, i, t)
                }, function() {
                    o && o.end()
                })
            }, 0)
        }
        onParametersChanged$Action(t) {
            var i = this.controller;
            return r.Logger.startActiveSpan("OnParametersChanged__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnParametersChanged"), e.setAttribute("outsystems.function.key", "ac55a81a-4ce9-4fe1-9fb2-65e8ff3ee800"), e.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), e.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onParametersChanged$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onInitialize$Action(t) {
            var i = this.controller;
            return r.Logger.startActiveSpan("OnInitialize__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnInitialize"), e.setAttribute("outsystems.function.key", "b83a68f0-0a4b-48c6-8982-9f0b6dd99a34"), e.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), e.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onInitialize$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onDestroy$Action(t) {
            var i = this.controller;
            return r.Logger.startActiveSpan("OnDestroy__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnDestroy"), e.setAttribute("outsystems.function.key", "ba249c69-655b-4a98-b2f1-3b6a57f79e36"), e.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), e.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onDestroy$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        registerCallbacks$Action(t) {
            var i = this.controller;
            return r.Logger.startActiveSpan("RegisterCallbacks__proxy", function(e) {
                e && (e.setAttribute("code.function", "RegisterCallbacks"), e.setAttribute("outsystems.function.key", "bbf7a664-bfa9-42f3-a68d-d5305c0db7a8"), e.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), e.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._registerCallbacks$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onRender$Action(t) {
            var i = this.controller;
            return r.Logger.startActiveSpan("OnRender__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnRender"), e.setAttribute("outsystems.function.key", "cf87313e-0ebf-43cb-a2b8-e0a844bec3c8"), e.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), e.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onRender$Action, t)
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
                var i = this.controller,
                    e = this.model,
                    o = this.idService;
                return i.onInitialize$Action(t)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(t) {
            this._onInitializeEventHandler = t
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(t) {
                var i = this.controller,
                    e = this.model,
                    o = this.idService;
                return i.onReady$Action(t)
            }), this._onReadyEventHandler
        }
        set onReadyEventHandler(t) {
            this._onReadyEventHandler = t
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = function(t) {
                var i = this.controller,
                    e = this.model,
                    o = this.idService;
                return i.onRender$Action(t)
            }), this._onRenderEventHandler
        }
        set onRenderEventHandler(t) {
            this._onRenderEventHandler = t
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = function(t) {
                var i = this.controller,
                    e = this.model,
                    o = this.idService;
                return i.onDestroy$Action(t)
            }), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(t) {
            this._onDestroyEventHandler = t
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = function(t) {
                var i = this.controller,
                    e = this.model,
                    o = this.idService;
                return i.onParametersChanged$Action(t)
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
            return u.defaultTimeout
        }
    };
    s(l, "ControllerInner");
    let y = l;
    C = y, C.registerVariableGroupType("OutSystemsUI.Interaction.AnimatedLabel.InitializedHandler$vars", [{
        name: "AnimatedLabelId",
        attrName: "animatedLabelIdInLocal",
        mandatory: !1,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }]), C.registerVariableGroupType("OutSystemsUI.Interaction.AnimatedLabel.RegisterCallbacks$getCallbackHandlersJSResult", [{
        name: "Initialized",
        attrName: "initializedOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Object,
        defaultValue: s(function() {
            return null
        }, "defaultValue")
    }])
}
var C, U = new r.Controller.ControllerFactory(C, k);
var ot = S.PlaceholderContent,
    at = S.IteratorPlaceholderContent,
    f = class f extends H.BaseWebBlock {
        static get displayName() {
            return "Interaction.AnimatedLabel"
        }
        static getAttributes() {
            return {
                codeFunction: "AnimatedLabel",
                functionKey: "24da8401-f5f4-46bb-b63a-32f0e5f522cd",
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
            return z
        }
        get controllerFactory() {
            return U
        }
        get title() {
            return ""
        }
        internalRender() {
            let l = this.model,
                g = this.controller,
                t = this.idService,
                i = g.validationService,
                e = this.widgetsRecordProvider,
                o = g.callContext(),
                n = f.ifWidget,
                a = f.textWidget,
                c = f.asPrimitiveValue,
                P = f.getTranslation,
                m = this;
            return A.createElement("div", this.getRootNodeProperties(), A.createElement(N, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    name: l.variables.internal_ConfigsVar.uniqueIdAttr
                },
                style: "animated-label",
                visible: !0,
                _idProps: {
                    service: t,
                    name: "AnimatedLabel"
                },
                _widgetRecordProvider: e
            }, A.createElement(O, {
                align: 0,
                content: m.props.placeholders.label,
                style: "animated-label-text",
                _idProps: {
                    service: t,
                    name: "Label"
                },
                _widgetRecordProvider: e
            }), A.createElement(O, {
                align: 0,
                content: m.props.placeholders.input,
                style: "animated-label-input",
                _idProps: {
                    service: t,
                    name: "Input"
                },
                _widgetRecordProvider: e
            })))
        }
    };
s(f, "View");
var D = f,
    st = D;
export {
    st as a
};