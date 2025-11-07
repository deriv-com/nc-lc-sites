import {
    a as N
} from "./_oschunk-YVFTECWM.js";
import {
    f as k
} from "./_oschunk-VR5BNL2K.js";
import {
    a as L,
    g as I,
    m as T,
    o as w,
    q as D,
    r as R,
    s as P,
    t as z
} from "./_oschunk-4VHUVDBV.js";
import {
    Ab as C,
    Qb as u,
    vb as v
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as m,
    c as l,
    e as p
} from "./_oschunk-M5BUVJ72.js";
var d = m,
    O = class O extends d.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Internal_Configs", "internal_ConfigsVar", "Internal_Configs", !0, !1, d.DataTypes.DataTypes.Record, function() {
                return d.DataTypes.ImmutableBase.getData(new C)
            }, !1, C), this.attr("SVGCode", "sVGCodeIn", "SVGCode", !0, !1, d.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_sVGCodeInDataFetchStatus", "_sVGCodeInDataFetchStatus", "_sVGCodeInDataFetchStatus", !0, !1, d.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, d.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, d.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(d.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
l(O, "VariablesRecord");
var b = O;
b.init();
var E = class E extends d.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
l(E, "WidgetsRecord");
var g = E,
    $ = class $ extends d.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return b
        }
        static getWidgetsRecordConstructor() {
            return g
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(o) {
            "SVGCode" in o && (this.variables.sVGCodeIn = o.SVGCode, "_sVGCodeInDataFetchStatus" in o && (this.variables._sVGCodeInDataFetchStatus = o._sVGCodeInDataFetchStatus)), "ExtendedClass" in o && (this.variables.extendedClassIn = o.ExtendedClass, "_extendedClassInDataFetchStatus" in o && (this.variables._extendedClassInDataFetchStatus = o._extendedClassInDataFetchStatus))
        }
    };
l($, "Model");
var A = $;
A._hasValidationWidgetsValue = void 0;
var U = new d.Model.ModelFactory(A);
var H = p(L());
var G = {};

function V(f, o, _, t) {
    f.OnInitialize = o.InitializedHandler
}
l(V, "default");
var r = m; {
    let o = class o extends r.Controller.BaseViewController {
        constructor(t, n, e) {
            super(t, n, e, G);
            var a = this.controller;
            this.clientActionProxies = {
                initializedHandler$Action: l(function(i) {
                    return i = i === void 0 ? "" : i, a.executeActionInsideJSNode(a._initializedHandler$Action.bind(a, r.DataConversion.JSNodeParamConverter.from(i, r.DataTypes.DataTypes.Text)), a.callContext(), function(s) {
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
                var n = this.model,
                    e = this.controller,
                    a = this.idService;
                return r.Logger.startActiveSpan("OnInitialize", function(i) {
                    i && (i.setAttribute("code.function", "OnInitialize"), i.setAttribute("outsystems.function.key", "16d8197c-f524-454b-87e8-248b777f7a19"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnInitialize"), t = e.callContext(t);
                        var s = new r.DataTypes.VariableHolder;
                        u.logEvent$Action(v.logType.general, "Going to create InlineSVG", t), s.value = u.generateUniqueId$Action(n.variables.internal_ConfigsVar.uniqueIdAttr, t), n.variables.internal_ConfigsVar.uniqueIdAttr = s.value.unique_IDOut, n.variables.internal_ConfigsVar.sVGCodeAttr = n.variables.sVGCodeIn, n.variables.internal_ConfigsVar.extendedClassAttr = n.variables.extendedClassIn, u.inlineSVGCreate$Action(n.variables.internal_ConfigsVar, t), e._registerCallbacks$Action(t)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(t) {
            this.__onInitialize$Action = t
        }
        get _initializedHandler$Action() {
            return this.hasOwnProperty("__initializedHandler$Action") || (this.__initializedHandler$Action = function(t, n) {
                var e = this.model,
                    a = this.controller,
                    i = this.idService;
                return r.Logger.startActiveSpan("InitializedHandler", function(s) {
                    return s && (s.setAttribute("code.function", "InitializedHandler"), s.setAttribute("outsystems.function.key", "23325e27-1714-4616-ba98-0a2043f685a1"), s.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), s.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        a.ensureControllerAlive("InitializedHandler"), n = a.callContext(n);
                        var c = new r.DataTypes.VariableHolder(new(a.constructor.getVariableGroupType("OutSystemsUI.Utilities.InlineSVG.InitializedHandler$vars")));
                        return c.value.inlineSVGIdInLocal = t, r.Flow.executeAsyncFlow(function() {
                            return a.initialized$Action(c.value.inlineSVGIdInLocal, n)
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
        get _registerCallbacks$Action() {
            return this.hasOwnProperty("__registerCallbacks$Action") || (this.__registerCallbacks$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    a = this.idService;
                return r.Logger.startActiveSpan("RegisterCallbacks", function(i) {
                    i && (i.setAttribute("code.function", "RegisterCallbacks"), i.setAttribute("outsystems.function.key", "8537c7ac-98fa-46d2-99b7-0bb80061b601"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("RegisterCallbacks"), t = e.callContext(t);
                        var s = new r.DataTypes.VariableHolder;
                        s.value = r.Logger.startActiveSpan("GetCallbackHandlers", function(c) {
                            c && (c.setAttribute("code.function", "GetCallbackHandlers"), c.setAttribute("outsystems.function.key", "9b91d794-4429-4af6-b0bd-2a7253bbdfa6"), c.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), c.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(V, "GetCallbackHandlers", "RegisterCallbacks", {
                                    OnInitialize: r.DataConversion.JSNodeParamConverter.to(null, r.DataTypes.DataTypes.Object)
                                }, function(S) {
                                    var y = new(e.constructor.getVariableGroupType("OutSystemsUI.Utilities.InlineSVG.RegisterCallbacks$getCallbackHandlersJSResult"));
                                    return y.onInitializeOut = r.DataConversion.JSNodeParamConverter.from(S.OnInitialize, r.DataTypes.DataTypes.Object), y
                                }, {
                                    InitializedHandler: e.clientActionProxies.initializedHandler$Action
                                }, {})
                            } finally {
                                c && c.end()
                            }
                        }, 1), u.inlineSVGRegisterCallback$Action(n.variables.internal_ConfigsVar.uniqueIdAttr, v.registeredCallbackEvents.initialized, s.value.onInitializeOut, t)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__registerCallbacks$Action
        }
        set _registerCallbacks$Action(t) {
            this.__registerCallbacks$Action = t
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    a = this.idService;
                return r.Logger.startActiveSpan("OnDestroy", function(i) {
                    i && (i.setAttribute("code.function", "OnDestroy"), i.setAttribute("outsystems.function.key", "a086a83f-7dcf-4c12-9aca-f940817a1ff0"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnDestroy"), t = e.callContext(t), u.inlineSVGDestroy$Action(n.variables.internal_ConfigsVar.uniqueIdAttr, t)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(t) {
            this.__onDestroy$Action = t
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    a = this.idService;
                return r.Logger.startActiveSpan("OnParametersChanged", function(i) {
                    i && (i.setAttribute("code.function", "OnParametersChanged"), i.setAttribute("outsystems.function.key", "a2ff6ca3-3e20-4772-b3c1-180a72b4024f"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnParametersChanged"), t = e.callContext(t), n.variables.sVGCodeIn !== n.variables.internal_ConfigsVar.sVGCodeAttr && (n.variables.internal_ConfigsVar.sVGCodeAttr = n.variables.sVGCodeIn, u.inlineSVGChangeTextProperty$Action(n.variables.internal_ConfigsVar.uniqueIdAttr, "SVGCode", n.variables.sVGCodeIn, t)), n.variables.extendedClassIn !== n.variables.internal_ConfigsVar.extendedClassAttr && (n.variables.internal_ConfigsVar.extendedClassAttr = n.variables.extendedClassIn, u.inlineSVGChangeTextProperty$Action(n.variables.internal_ConfigsVar.uniqueIdAttr, "ExtendedClass", n.variables.extendedClassIn, t))
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(t) {
            this.__onParametersChanged$Action = t
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    a = this.idService;
                return r.Logger.startActiveSpan("OnReady", function(i) {
                    i && (i.setAttribute("code.function", "OnReady"), i.setAttribute("outsystems.function.key", "f87f2c0b-771a-45fe-953d-27cd08e51f3e"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnReady"), t = e.callContext(t), u.inlineSVGInitialize$Action(n.variables.internal_ConfigsVar.uniqueIdAttr, t), u.logEvent$Action(v.logType.general, "InlineSVG created", t)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(t) {
            this.__onReady$Action = t
        }
        onInitialize$Action(t) {
            var n = this.controller;
            return r.Logger.startActiveSpan("OnInitialize__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnInitialize"), e.setAttribute("outsystems.function.key", "16d8197c-f524-454b-87e8-248b777f7a19"), e.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), e.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onInitialize$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        initializedHandler$Action(t, n) {
            var e = this.controller;
            return r.Logger.startActiveSpan("InitializedHandler__proxy", function(a) {
                return a && (a.setAttribute("code.function", "InitializedHandler"), a.setAttribute("outsystems.function.key", "23325e27-1714-4616-ba98-0a2043f685a1"), a.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), a.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return e.safeExecuteClientAction(e._initializedHandler$Action, n, t)
                }, function() {
                    a && a.end()
                })
            }, 0)
        }
        registerCallbacks$Action(t) {
            var n = this.controller;
            return r.Logger.startActiveSpan("RegisterCallbacks__proxy", function(e) {
                e && (e.setAttribute("code.function", "RegisterCallbacks"), e.setAttribute("outsystems.function.key", "8537c7ac-98fa-46d2-99b7-0bb80061b601"), e.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), e.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._registerCallbacks$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onDestroy$Action(t) {
            var n = this.controller;
            return r.Logger.startActiveSpan("OnDestroy__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnDestroy"), e.setAttribute("outsystems.function.key", "a086a83f-7dcf-4c12-9aca-f940817a1ff0"), e.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), e.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onDestroy$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onParametersChanged$Action(t) {
            var n = this.controller;
            return r.Logger.startActiveSpan("OnParametersChanged__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnParametersChanged"), e.setAttribute("outsystems.function.key", "a2ff6ca3-3e20-4772-b3c1-180a72b4024f"), e.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), e.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onParametersChanged$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onReady$Action(t) {
            var n = this.controller;
            return r.Logger.startActiveSpan("OnReady__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnReady"), e.setAttribute("outsystems.function.key", "f87f2c0b-771a-45fe-953d-27cd08e51f3e"), e.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), e.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onReady$Action, t)
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
                    a = this.idService;
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
                    a = this.idService;
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
                    a = this.idService;
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
                    a = this.idService;
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
    l(o, "ControllerInner");
    let f = o;
    h = f, h.registerVariableGroupType("OutSystemsUI.Utilities.InlineSVG.InitializedHandler$vars", [{
        name: "InlineSVGId",
        attrName: "inlineSVGIdInLocal",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }]), h.registerVariableGroupType("OutSystemsUI.Utilities.InlineSVG.RegisterCallbacks$getCallbackHandlersJSResult", [{
        name: "OnInitialize",
        attrName: "onInitializeOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Object,
        defaultValue: l(function() {
            return null
        }, "defaultValue")
    }])
}
var h, x = new r.Controller.ControllerFactory(h, N);
var yt = I.PlaceholderContent,
    mt = I.IteratorPlaceholderContent,
    W = l(function() {
        var f = w(function(o) {
            var _ = o.model,
                t = o.controller,
                n = o.controller.idService,
                e = t.validationService,
                a = t.callContext(),
                i = P,
                s = z,
                c = {
                    props: o,
                    validateWidget: l(function(F) {
                        o.validateWidget(o, F)
                    }, "validateWidget")
                },
                S = _,
                y = R,
                q = D,
                J = T();
            return H.createElement("div", o.rootNodeProperties, y(!1, !1, this, function() {
                return []
            }, function() {
                return [H.createElement(k, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        name: _.variables.internal_ConfigsVar.uniqueIdAttr,
                        style: "height: 100%;"
                    },
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: "osui-inline-svg svg-wrapper",
                    visible: !0,
                    _idProps: {
                        service: n,
                        name: "SVG"
                    },
                    _widgetRecordProvider: S
                })]
            }))
        }, {
            topLevelComponent: !1,
            getAttributes: l(function() {
                return {
                    codeFunction: "InlineSVG",
                    functionKey: "58181461-a594-47fd-bfd1-2188b1380220",
                    functionOwnerName: "OutSystemsUI",
                    functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Utilities.InlineSVG",
            modelFactory: U,
            controllerFactory: x
        });
        return f.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"]
        }, f.getJsDependencies = function() {
            return ["scripts/OutSystemsUI.UserScripts.OutSystemsUI.js"]
        }, f.getBlocks = function() {
            return []
        }, f
    }, "componentFactory"),
    vt = W();
export {
    vt as a
};