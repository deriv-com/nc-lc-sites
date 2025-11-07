import {
    a as U
} from "./_oschunk-24WIHVSN.js";
import {
    a as k,
    v as x
} from "./_oschunk-O5KC3WOL.js";
import {
    a as W,
    g as I,
    m as w,
    o as R,
    q as N,
    r as D,
    s as P,
    t as z
} from "./_oschunk-NVHFAAS2.js";
import {
    Ga as d,
    la as b,
    sa as g
} from "./_oschunk-WCMQG33O.js";
import {
    X as m,
    c,
    f as M
} from "./_oschunk-DFKJJKI4.js";
var y = m,
    E = class E extends y.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("InternalConfigs", "internalConfigsVar", "InternalConfigs", !0, !1, y.DataTypes.DataTypes.Record, function() {
                return y.DataTypes.ImmutableBase.getData(new g)
            }, !1, g), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, y.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, y.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(y.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
c(E, "VariablesRecord");
var v = E;
v.init();
var T = class T extends y.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
c(T, "WidgetsRecord");
var O = T,
    H = class H extends y.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return v
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
var A = H;
A._hasValidationWidgetsValue = void 0;
var V = new y.Model.ModelFactory(A);
var C = M(W());
var p = {};

function $(u, a, _, t) {
    u.Initialized = a.InitializedHandler
}
c($, "default");
var i = m; {
    let a = class a extends i.Controller.BaseViewController {
        constructor(t, n, e) {
            super(t, n, e, p);
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
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    o = this.idService;
                return i.Logger.startActiveSpan("OnParametersChanged", function(r) {
                    r && (r.setAttribute("code.function", "OnParametersChanged"), r.setAttribute("outsystems.function.key", "1f30b33a-e506-48c8-8af0-bbdb38d5fc79"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnParametersChanged"), t = e.callContext(t), n.variables.extendedClassIn !== n.variables.internalConfigsVar.extendedClassAttr && (n.variables.internalConfigsVar.extendedClassAttr = n.variables.extendedClassIn, d.tabsContentItemChangeTextProperty$Action(n.variables.internalConfigsVar.uniqueIdAttr, "ExtendedClass", n.variables.internalConfigsVar.extendedClassAttr, t))
                    } finally {
                        r && r.end()
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
                    o = this.idService;
                return i.Logger.startActiveSpan("OnReady", function(r) {
                    r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "4538d2ad-bf2d-48dc-a412-84c7f483e78e"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnReady"), t = e.callContext(t), d.tabsContentItemInitialize$Action(n.variables.internalConfigsVar.uniqueIdAttr, t), d.logEvent$Action(b.logType.general, "TabsContentItem created", t)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(t) {
            this.__onReady$Action = t
        }
        get _registerCallbacks$Action() {
            return this.hasOwnProperty("__registerCallbacks$Action") || (this.__registerCallbacks$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    o = this.idService;
                return i.Logger.startActiveSpan("RegisterCallbacks", function(r) {
                    r && (r.setAttribute("code.function", "RegisterCallbacks"), r.setAttribute("outsystems.function.key", "7771df28-da71-4b3d-94d1-5d22b399317e"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("RegisterCallbacks"), t = e.callContext(t);
                        var s = new i.DataTypes.VariableHolder;
                        s.value = i.Logger.startActiveSpan("GetCallbackHandlers", function(l) {
                            l && (l.setAttribute("code.function", "GetCallbackHandlers"), l.setAttribute("outsystems.function.key", "c72e81bc-4d2a-4fe5-aeb6-557101826065"), l.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), l.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), l.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode($, "GetCallbackHandlers", "RegisterCallbacks", {
                                    Initialized: i.DataConversion.JSNodeParamConverter.to(null, i.DataTypes.DataTypes.Object)
                                }, function(f) {
                                    var S = new(e.constructor.getVariableGroupType("OutSystemsUI.Navigation.TabsContentItem.RegisterCallbacks$getCallbackHandlersJSResult"));
                                    return S.initializedOut = i.DataConversion.JSNodeParamConverter.from(f.Initialized, i.DataTypes.DataTypes.Object), S
                                }, {
                                    InitializedHandler: e.clientActionProxies.initializedHandler$Action
                                }, {})
                            } finally {
                                l && l.end()
                            }
                        }, 1), d.tabsContentItemRegisterCallback$Action(n.variables.internalConfigsVar.uniqueIdAttr, b.registeredCallbackEvents.initialized, s.value.initializedOut, t)
                    } finally {
                        r && r.end()
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
                    o = this.idService;
                return i.Logger.startActiveSpan("OnDestroy", function(r) {
                    r && (r.setAttribute("code.function", "OnDestroy"), r.setAttribute("outsystems.function.key", "a9923e42-ceae-41d4-a4e6-5fd8fbbc733d"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnDestroy"), t = e.callContext(t), d.tabsContentItemDestroy$Action(n.variables.internalConfigsVar.uniqueIdAttr, t)
                    } finally {
                        r && r.end()
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
                return i.Logger.startActiveSpan("OnInitialize", function(r) {
                    r && (r.setAttribute("code.function", "OnInitialize"), r.setAttribute("outsystems.function.key", "afd51378-aff3-4465-8923-7251e73145cf"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnInitialize"), t = e.callContext(t);
                        var s = new i.DataTypes.VariableHolder,
                            l = new i.DataTypes.VariableHolder(new i.DataTypes.JSONSerializeOutputType);
                        d.logEvent$Action(b.logType.general, "Going to create TabsContentItem", t), s.value = d.generateUniqueId$Action(n.variables.internalConfigsVar.uniqueIdAttr, t), n.variables.internalConfigsVar.uniqueIdAttr = s.value.unique_IDOut, n.variables.internalConfigsVar.extendedClassAttr = n.variables.extendedClassIn, l.value.jSONOut = i.JSONUtils.serializeToJSON(n.variables.internalConfigsVar, !0, !1), d.tabsContentItemCreate$Action(n.variables.internalConfigsVar.uniqueIdAttr, l.value.jSONOut, t), e._registerCallbacks$Action(t)
                    } finally {
                        r && r.end()
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
                    o = this.controller,
                    r = this.idService;
                return i.Logger.startActiveSpan("InitializedHandler", function(s) {
                    return s && (s.setAttribute("code.function", "InitializedHandler"), s.setAttribute("outsystems.function.key", "da69907d-3252-4c46-b538-41b89fae841b"), s.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), s.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                        o.ensureControllerAlive("InitializedHandler"), n = o.callContext(n);
                        var l = new i.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("OutSystemsUI.Navigation.TabsContentItem.InitializedHandler$vars")));
                        return l.value.tabsContentItemIdInLocal = t, i.Flow.executeAsyncFlow(function() {
                            return o.initialized$Action(l.value.tabsContentItemIdInLocal, n)
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
        onParametersChanged$Action(t) {
            var n = this.controller;
            return i.Logger.startActiveSpan("OnParametersChanged__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnParametersChanged"), e.setAttribute("outsystems.function.key", "1f30b33a-e506-48c8-8af0-bbdb38d5fc79"), e.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), e.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onParametersChanged$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onReady$Action(t) {
            var n = this.controller;
            return i.Logger.startActiveSpan("OnReady__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnReady"), e.setAttribute("outsystems.function.key", "4538d2ad-bf2d-48dc-a412-84c7f483e78e"), e.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), e.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onReady$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        registerCallbacks$Action(t) {
            var n = this.controller;
            return i.Logger.startActiveSpan("RegisterCallbacks__proxy", function(e) {
                e && (e.setAttribute("code.function", "RegisterCallbacks"), e.setAttribute("outsystems.function.key", "7771df28-da71-4b3d-94d1-5d22b399317e"), e.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), e.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._registerCallbacks$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onDestroy$Action(t) {
            var n = this.controller;
            return i.Logger.startActiveSpan("OnDestroy__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnDestroy"), e.setAttribute("outsystems.function.key", "a9923e42-ceae-41d4-a4e6-5fd8fbbc733d"), e.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), e.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onDestroy$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onInitialize$Action(t) {
            var n = this.controller;
            return i.Logger.startActiveSpan("OnInitialize__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnInitialize"), e.setAttribute("outsystems.function.key", "afd51378-aff3-4465-8923-7251e73145cf"), e.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), e.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onInitialize$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        initializedHandler$Action(t, n) {
            var e = this.controller;
            return i.Logger.startActiveSpan("InitializedHandler__proxy", function(o) {
                return o && (o.setAttribute("code.function", "InitializedHandler"), o.setAttribute("outsystems.function.key", "da69907d-3252-4c46-b538-41b89fae841b"), o.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), o.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                    return e.safeExecuteClientAction(e._initializedHandler$Action, n, t)
                }, function() {
                    o && o.end()
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
    h = u, h.registerVariableGroupType("OutSystemsUI.Navigation.TabsContentItem.RegisterCallbacks$getCallbackHandlersJSResult", [{
        name: "Initialized",
        attrName: "initializedOut",
        mandatory: !0,
        dataType: i.DataTypes.DataTypes.Object,
        defaultValue: c(function() {
            return null
        }, "defaultValue")
    }]), h.registerVariableGroupType("OutSystemsUI.Navigation.TabsContentItem.InitializedHandler$vars", [{
        name: "TabsContentItemId",
        attrName: "tabsContentItemIdInLocal",
        mandatory: !1,
        dataType: i.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }])
}
var h, L = new i.Controller.ControllerFactory(h, U);
var mt = I.PlaceholderContent,
    bt = I.IteratorPlaceholderContent,
    J = c(function() {
        var u = R(function(a) {
            var _ = a.model,
                t = a.controller,
                n = a.controller.idService,
                e = t.validationService,
                o = t.callContext(),
                r = P,
                s = z,
                l = {
                    props: a,
                    validateWidget: c(function(F) {
                        a.validateWidget(a, F)
                    }, "validateWidget")
                },
                f = _,
                S = D,
                q = N,
                B = w();
            return C.createElement("div", a.rootNodeProperties, C.createElement(k, {
                extendedProperties: {
                    className: "osui-tabs__content-item",
                    name: _.variables.internalConfigsVar.uniqueIdAttr
                },
                tag: "article",
                _idProps: {
                    service: n,
                    uuid: "0"
                },
                _widgetRecordProvider: f
            }, C.createElement(x, {
                align: 0,
                content: l.props.placeholders.content,
                style: "display-contents",
                _idProps: {
                    service: n,
                    name: "Content"
                },
                _widgetRecordProvider: f
            })))
        }, {
            topLevelComponent: !1,
            getAttributes: c(function() {
                return {
                    codeFunction: "TabsContentItem",
                    functionKey: "ab717706-de5b-407c-9157-5c6a715777bb",
                    functionOwnerName: "OutSystemsUI",
                    functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Navigation.TabsContentItem",
            modelFactory: V,
            controllerFactory: L
        });
        return u.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"]
        }, u.getJsDependencies = function() {
            return []
        }, u.getBlocks = function() {
            return []
        }, u
    }, "componentFactory"),
    vt = J();
export {
    vt as a
};