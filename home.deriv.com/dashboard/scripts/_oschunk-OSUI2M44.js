import {
    a as U
} from "./_oschunk-24WIHVSN.js";
import {
    h as k,
    v as x
} from "./_oschunk-O5KC3WOL.js";
import {
    a as M,
    g as I,
    m as w,
    o as R,
    q as D,
    r as P,
    s as z,
    t as N
} from "./_oschunk-NVHFAAS2.js";
import {
    Ga as d,
    la as C,
    xa as g
} from "./_oschunk-WCMQG33O.js";
import {
    X as b,
    c,
    f as W
} from "./_oschunk-DFKJJKI4.js";
var S = W(M());
var f = b,
    E = class E extends f.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("InternalConfigs", "internalConfigsVar", "InternalConfigs", !0, !1, f.DataTypes.DataTypes.Record, function() {
                return f.DataTypes.ImmutableBase.getData(new g)
            }, !1, g), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, f.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, f.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(f.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
c(E, "VariablesRecord");
var h = E;
h.init();
var $ = class $ extends f.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
c($, "WidgetsRecord");
var O = $,
    H = class H extends f.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return h
        }
        static getWidgetsRecordConstructor() {
            return O
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(a) {
            "ExtendedClass" in a && (this.variables.extendedClassIn = a.ExtendedClass, "_extendedClassInDataFetchStatus" in a && (this.variables._extendedClassInDataFetchStatus = a._extendedClassInDataFetchStatus))
        }
    };
c(H, "Model");
var v = H;
v._hasValidationWidgetsValue = void 0;
var p = new f.Model.ModelFactory(v);
var V = {};

function T(u, a, _, t) {
    u.Initialized = a.InitializedHandler
}
c(T, "default");
var i = b; {
    let a = class a extends i.Controller.BaseViewController {
        constructor(t, n, e) {
            super(t, n, e, V);
            var o = this.controller;
            this.clientActionProxies = {
                initializedHandler$Action: c(function(r) {
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
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    o = this.idService;
                return i.Logger.startActiveSpan("OnInitialize", function(r) {
                    r && (r.setAttribute("code.function", "OnInitialize"), r.setAttribute("outsystems.function.key", "1fda24b2-9038-452c-8866-a057a0c98055"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnInitialize"), t = e.callContext(t);
                        var s = new i.DataTypes.VariableHolder,
                            l = new i.DataTypes.VariableHolder(new i.DataTypes.JSONSerializeOutputType);
                        d.logEvent$Action(C.logType.general, "Going to create Search", t), s.value = d.generateUniqueId$Action(n.variables.internalConfigsVar.uniqueIdAttr, t), n.variables.internalConfigsVar.uniqueIdAttr = s.value.unique_IDOut, n.variables.internalConfigsVar.extendedClassAttr = n.variables.extendedClassIn, l.value.jSONOut = i.JSONUtils.serializeToJSON(n.variables.internalConfigsVar, !0, !1), d.searchCreate$Action(n.variables.internalConfigsVar.uniqueIdAttr, l.value.jSONOut, t), e._registerCallback$Action(t)
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
                var n = this.model,
                    e = this.controller,
                    o = this.idService;
                return i.Logger.startActiveSpan("OnReady", function(r) {
                    r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "4d3f8309-dad2-4bd0-b49f-88ca49029751"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnReady"), t = e.callContext(t), d.searchInitialize$Action(n.variables.internalConfigsVar.uniqueIdAttr, t), d.logEvent$Action(C.logType.general, "Search created", t)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(t) {
            this.__onReady$Action = t
        }
        get _registerCallback$Action() {
            return this.hasOwnProperty("__registerCallback$Action") || (this.__registerCallback$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    o = this.idService;
                return i.Logger.startActiveSpan("RegisterCallback", function(r) {
                    r && (r.setAttribute("code.function", "RegisterCallback"), r.setAttribute("outsystems.function.key", "7f5abbc7-65ec-4f3f-861b-ff22dd1b84dc"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("RegisterCallback"), t = e.callContext(t);
                        var s = new i.DataTypes.VariableHolder;
                        s.value = i.Logger.startActiveSpan("GetCallbackHandlers", function(l) {
                            l && (l.setAttribute("code.function", "GetCallbackHandlers"), l.setAttribute("outsystems.function.key", "9c432a08-c627-4b5d-91f6-501d1160194d"), l.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), l.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), l.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(T, "GetCallbackHandlers", "RegisterCallback", {
                                    Initialized: i.DataConversion.JSNodeParamConverter.to(null, i.DataTypes.DataTypes.Object)
                                }, function(y) {
                                    var m = new(e.constructor.getVariableGroupType("OutSystemsUI.Interaction.Search.RegisterCallback$getCallbackHandlersJSResult"));
                                    return m.initializedOut = i.DataConversion.JSNodeParamConverter.from(y.Initialized, i.DataTypes.DataTypes.Object), m
                                }, {
                                    InitializedHandler: e.clientActionProxies.initializedHandler$Action
                                }, {})
                            } finally {
                                l && l.end()
                            }
                        }, 1), d.searchRegisterCallback$Action(n.variables.internalConfigsVar.uniqueIdAttr, "Initialized", s.value.initializedOut, t)
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
            return this.hasOwnProperty("__initializedHandler$Action") || (this.__initializedHandler$Action = function(t, n) {
                var e = this.model,
                    o = this.controller,
                    r = this.idService;
                return i.Logger.startActiveSpan("InitializedHandler", function(s) {
                    return s && (s.setAttribute("code.function", "InitializedHandler"), s.setAttribute("outsystems.function.key", "85d31c3d-ca1d-4447-b098-cf0bdbab6f80"), s.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), s.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                        o.ensureControllerAlive("InitializedHandler"), n = o.callContext(n);
                        var l = new i.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("OutSystemsUI.Interaction.Search.InitializedHandler$vars")));
                        return l.value.searchIdInLocal = t, i.Flow.executeAsyncFlow(function() {
                            return o.initialized$Action(l.value.searchIdInLocal, n)
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
                    r && (r.setAttribute("code.function", "OnParametersChanged"), r.setAttribute("outsystems.function.key", "ed0f2d76-86e9-415c-a077-407b4e34c58c"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnParametersChanged"), t = e.callContext(t), n.variables.internalConfigsVar.extendedClassAttr !== n.variables.extendedClassIn && (n.variables.internalConfigsVar.extendedClassAttr = n.variables.extendedClassIn, d.searchChangeTextProperty$Action(n.variables.internalConfigsVar.uniqueIdAttr, "ExtendedClass", n.variables.internalConfigsVar.extendedClassAttr, t))
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
                var n = this.model,
                    e = this.controller,
                    o = this.idService;
                return i.Logger.startActiveSpan("OnDestroy", function(r) {
                    r && (r.setAttribute("code.function", "OnDestroy"), r.setAttribute("outsystems.function.key", "eeab6233-b538-4c61-8eeb-44b1a5703172"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnDestroy"), t = e.callContext(t), d.searchDestroy$Action(n.variables.internalConfigsVar.uniqueIdAttr, t)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(t) {
            this.__onDestroy$Action = t
        }
        onInitialize$Action(t) {
            var n = this.controller;
            return i.Logger.startActiveSpan("OnInitialize__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnInitialize"), e.setAttribute("outsystems.function.key", "1fda24b2-9038-452c-8866-a057a0c98055"), e.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), e.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onInitialize$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onReady$Action(t) {
            var n = this.controller;
            return i.Logger.startActiveSpan("OnReady__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnReady"), e.setAttribute("outsystems.function.key", "4d3f8309-dad2-4bd0-b49f-88ca49029751"), e.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), e.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onReady$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        registerCallback$Action(t) {
            var n = this.controller;
            return i.Logger.startActiveSpan("RegisterCallback__proxy", function(e) {
                e && (e.setAttribute("code.function", "RegisterCallback"), e.setAttribute("outsystems.function.key", "7f5abbc7-65ec-4f3f-861b-ff22dd1b84dc"), e.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), e.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._registerCallback$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        initializedHandler$Action(t, n) {
            var e = this.controller;
            return i.Logger.startActiveSpan("InitializedHandler__proxy", function(o) {
                return o && (o.setAttribute("code.function", "InitializedHandler"), o.setAttribute("outsystems.function.key", "85d31c3d-ca1d-4447-b098-cf0bdbab6f80"), o.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), o.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                    return e.safeExecuteClientAction(e._initializedHandler$Action, n, t)
                }, function() {
                    o && o.end()
                })
            }, 0)
        }
        onParametersChanged$Action(t) {
            var n = this.controller;
            return i.Logger.startActiveSpan("OnParametersChanged__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnParametersChanged"), e.setAttribute("outsystems.function.key", "ed0f2d76-86e9-415c-a077-407b4e34c58c"), e.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), e.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onParametersChanged$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onDestroy$Action(t) {
            var n = this.controller;
            return i.Logger.startActiveSpan("OnDestroy__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnDestroy"), e.setAttribute("outsystems.function.key", "eeab6233-b538-4c61-8eeb-44b1a5703172"), e.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), e.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onDestroy$Action, t)
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
    let u = a;
    A = u, A.registerVariableGroupType("OutSystemsUI.Interaction.Search.RegisterCallback$getCallbackHandlersJSResult", [{
        name: "Initialized",
        attrName: "initializedOut",
        mandatory: !0,
        dataType: i.DataTypes.DataTypes.Object,
        defaultValue: c(function() {
            return null
        }, "defaultValue")
    }]), A.registerVariableGroupType("OutSystemsUI.Interaction.Search.InitializedHandler$vars", [{
        name: "SearchId",
        attrName: "searchIdInLocal",
        mandatory: !0,
        dataType: i.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }])
}
var A, L = new i.Controller.ControllerFactory(A, U);
var mt = I.PlaceholderContent,
    bt = I.IteratorPlaceholderContent,
    J = c(function() {
        var u = R(function(a) {
            var _ = a.model,
                t = a.controller,
                n = a.controller.idService,
                e = t.validationService,
                o = t.callContext(),
                r = z,
                s = N,
                l = {
                    props: a,
                    validateWidget: c(function(F) {
                        a.validateWidget(a, F)
                    }, "validateWidget")
                },
                y = _,
                m = P,
                q = D,
                j = w();
            return S.createElement("div", a.rootNodeProperties, m(!1, !1, this, function() {
                return []
            }, function() {
                return [S.createElement(k, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        role: "search",
                        name: _.variables.internalConfigsVar.uniqueIdAttr
                    },
                    style: "osui-search",
                    visible: !0,
                    _idProps: {
                        service: n,
                        uuid: "0"
                    },
                    _widgetRecordProvider: y
                }, S.createElement(x, {
                    align: 0,
                    content: l.props.placeholders.input,
                    style: "osui-search__input",
                    _idProps: {
                        service: n,
                        name: "Input"
                    },
                    _widgetRecordProvider: y
                }))]
            }))
        }, {
            topLevelComponent: !1,
            getAttributes: c(function() {
                return {
                    codeFunction: "Search",
                    functionKey: "4fa4ad57-278f-47ec-9dd8-527c45a0eac9",
                    functionOwnerName: "OutSystemsUI",
                    functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Interaction.Search",
            modelFactory: p,
            controllerFactory: L
        });
        return u.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"]
        }, u.getJsDependencies = function() {
            return ["scripts/OutSystemsUI.UserScripts.OutSystemsUI.js"]
        }, u.getBlocks = function() {
            return []
        }, u
    }, "componentFactory"),
    ht = J();
export {
    ht as a
};