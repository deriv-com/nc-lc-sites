import {
    a as P
} from "./_oschunk-VWJXDAKN.js";
import {
    w as H
} from "./_oschunk-E7JQAU4J.js";
import {
    a as x,
    g as R,
    i as C
} from "./_oschunk-T77XORCW.js";
import {
    g as I,
    l as d
} from "./_oschunk-OOUVJ7PM.js";
import {
    Nd as h
} from "./_oschunk-KG7LSUIA.js";
import {
    ia as b
} from "./_oschunk-5EPHB76O.js";
import {
    c as l,
    g as N
} from "./_oschunk-DVBKI63I.js";
var D = N(x());
var c = b,
    O = class O extends c.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Internal_Configs", "internal_ConfigsVar", "Internal_Configs", !0, !1, c.DataTypes.DataTypes.Record, function() {
                return c.DataTypes.ImmutableBase.getData(new I)
            }, !1, I), this.attr("IsLoading", "isLoadingIn", "IsLoading", !0, !1, c.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", !0, !1, c.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ShowLabelOnLoading", "showLabelOnLoadingIn", "ShowLabelOnLoading", !0, !1, c.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_showLabelOnLoadingInDataFetchStatus", "_showLabelOnLoadingInDataFetchStatus", "_showLabelOnLoadingInDataFetchStatus", !0, !1, c.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, c.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, c.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(c.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
l(O, "VariablesRecord");
var g = O;
g.init();
var L = class L extends c.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
l(L, "WidgetsRecord");
var S = L,
    E = class E extends c.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return g
        }
        static getWidgetsRecordConstructor() {
            return S
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(o) {
            "IsLoading" in o && (this.variables.isLoadingIn = o.IsLoading, "_isLoadingInDataFetchStatus" in o && (this.variables._isLoadingInDataFetchStatus = o._isLoadingInDataFetchStatus)), "ShowLabelOnLoading" in o && (this.variables.showLabelOnLoadingIn = o.ShowLabelOnLoading, "_showLabelOnLoadingInDataFetchStatus" in o && (this.variables._showLabelOnLoadingInDataFetchStatus = o._showLabelOnLoadingInDataFetchStatus)), "ExtendedClass" in o && (this.variables.extendedClassIn = o.ExtendedClass, "_extendedClassInDataFetchStatus" in o && (this.variables._extendedClassInDataFetchStatus = o._extendedClassInDataFetchStatus))
        }
    };
l(E, "Model");
var A = E;
A._hasValidationWidgetsValue = void 0;
var z = new c.Model.ModelFactory(A);
var U = {};

function w(y, o, v, t) {
    y.Initialized = o.InitializedHandler
}
l(w, "default");
var r = b; {
    let o = class o extends r.Controller.BaseViewController {
        constructor(t, n, e) {
            super(t, n, e, U);
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
        get _initializedHandler$Action() {
            return this.hasOwnProperty("__initializedHandler$Action") || (this.__initializedHandler$Action = function(t, n) {
                var e = this.model,
                    a = this.controller,
                    i = this.idService;
                return r.Logger.startActiveSpan("InitializedHandler", function(s) {
                    return s && (s.setAttribute("code.function", "InitializedHandler"), s.setAttribute("outsystems.function.key", "0edfd226-b70a-4aaf-8ff2-c0c972952aac"), s.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), s.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        a.ensureControllerAlive("InitializedHandler"), n = a.callContext(n);
                        var u = new r.DataTypes.VariableHolder(new(a.constructor.getVariableGroupType("OutSystemsUI.Utilities.ButtonLoading.InitializedHandler$vars")));
                        return u.value.buttonLoadingIdInLocal = t, r.Flow.executeAsyncFlow(function() {
                            return a.initialized$Action(u.value.buttonLoadingIdInLocal, n)
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
                    a = this.idService;
                return r.Logger.startActiveSpan("OnDestroy", function(i) {
                    i && (i.setAttribute("code.function", "OnDestroy"), i.setAttribute("outsystems.function.key", "80963e7d-89b9-472a-9f6b-c1cfa982a8e0"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnDestroy"), t = e.callContext(t), d.buttonLoadingDestroy$Action(n.variables.internal_ConfigsVar.uniqueIdAttr, t)
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
                    i && (i.setAttribute("code.function", "OnParametersChanged"), i.setAttribute("outsystems.function.key", "db8aafb9-abe6-405b-a7ac-a76048fca091"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnParametersChanged"), t = e.callContext(t), n.variables.isLoadingIn !== n.variables.internal_ConfigsVar.isLoadingAttr && (n.variables.internal_ConfigsVar.isLoadingAttr = n.variables.isLoadingIn, d.buttonLoadingChangeBooleanProperty$Action(n.variables.internal_ConfigsVar.uniqueIdAttr, "IsLoading", n.variables.isLoadingIn, t)), n.variables.showLabelOnLoadingIn !== n.variables.internal_ConfigsVar.showLoadingAndLabelAttr && (n.variables.internal_ConfigsVar.showLoadingAndLabelAttr = n.variables.showLabelOnLoadingIn, d.buttonLoadingChangeBooleanProperty$Action(n.variables.internal_ConfigsVar.uniqueIdAttr, "ShowLoadingAndLabel", n.variables.internal_ConfigsVar.showLoadingAndLabelAttr, t)), n.variables.extendedClassIn !== n.variables.internal_ConfigsVar.extendedClassAttr && (n.variables.internal_ConfigsVar.extendedClassAttr = n.variables.extendedClassIn, d.buttonLoadingChangeTextProperty$Action(n.variables.internal_ConfigsVar.uniqueIdAttr, "ExtendedClass", n.variables.internal_ConfigsVar.extendedClassAttr, t))
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(t) {
            this.__onParametersChanged$Action = t
        }
        get _registerCallbacks$Action() {
            return this.hasOwnProperty("__registerCallbacks$Action") || (this.__registerCallbacks$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    a = this.idService;
                return r.Logger.startActiveSpan("RegisterCallbacks", function(i) {
                    i && (i.setAttribute("code.function", "RegisterCallbacks"), i.setAttribute("outsystems.function.key", "e9af2ffc-de9d-4700-b1b8-a3f0ad0f9943"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("RegisterCallbacks"), t = e.callContext(t);
                        var s = new r.DataTypes.VariableHolder;
                        s.value = r.Logger.startActiveSpan("GetCallbackHandlers", function(u) {
                            u && (u.setAttribute("code.function", "GetCallbackHandlers"), u.setAttribute("outsystems.function.key", "3c6ce000-aef8-452c-acd4-1bdfdcfa8c7a"), u.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), u.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), u.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(w, "GetCallbackHandlers", "RegisterCallbacks", {
                                    Initialized: r.DataConversion.JSNodeParamConverter.to(null, r.DataTypes.DataTypes.Object)
                                }, function(T) {
                                    var m = new(e.constructor.getVariableGroupType("OutSystemsUI.Utilities.ButtonLoading.RegisterCallbacks$getCallbackHandlersJSResult"));
                                    return m.initializedOut = r.DataConversion.JSNodeParamConverter.from(T.Initialized, r.DataTypes.DataTypes.Object), m
                                }, {
                                    InitializedHandler: e.clientActionProxies.initializedHandler$Action
                                }, {})
                            } finally {
                                u && u.end()
                            }
                        }, 1), d.buttonLoadingRegisterCallback$Action(n.variables.internal_ConfigsVar.uniqueIdAttr, h.registeredCallbackEvents.initialized, s.value.initializedOut, t)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__registerCallbacks$Action
        }
        set _registerCallbacks$Action(t) {
            this.__registerCallbacks$Action = t
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    a = this.idService;
                return r.Logger.startActiveSpan("OnInitialize", function(i) {
                    i && (i.setAttribute("code.function", "OnInitialize"), i.setAttribute("outsystems.function.key", "eb8e028b-e0d2-4a0d-99a7-f97618a1eada"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnInitialize"), t = e.callContext(t);
                        var s = new r.DataTypes.VariableHolder;
                        d.logEvent$Action(h.logType.general, "Going to create ButtonLoading", t), s.value = d.generateUniqueId$Action(n.variables.internal_ConfigsVar.uniqueIdAttr, t), n.variables.internal_ConfigsVar.uniqueIdAttr = s.value.unique_IDOut, n.variables.internal_ConfigsVar.isLoadingAttr = n.variables.isLoadingIn, n.variables.internal_ConfigsVar.showLoadingAndLabelAttr = n.variables.showLabelOnLoadingIn, n.variables.internal_ConfigsVar.extendedClassAttr = n.variables.extendedClassIn, d.buttonLoadingCreate$Action(n.variables.internal_ConfigsVar, t), e._registerCallbacks$Action(t)
                    } finally {
                        i && i.end()
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
                    a = this.idService;
                return r.Logger.startActiveSpan("OnReady", function(i) {
                    i && (i.setAttribute("code.function", "OnReady"), i.setAttribute("outsystems.function.key", "ff263e3c-bfcd-47ea-a0b9-96fb1264fae5"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnReady"), t = e.callContext(t), d.buttonLoadingInitialize$Action(n.variables.internal_ConfigsVar.uniqueIdAttr, t), d.logEvent$Action(h.logType.general, "ButtonLoading created", t)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(t) {
            this.__onReady$Action = t
        }
        initializedHandler$Action(t, n) {
            var e = this.controller;
            return r.Logger.startActiveSpan("InitializedHandler__proxy", function(a) {
                return a && (a.setAttribute("code.function", "InitializedHandler"), a.setAttribute("outsystems.function.key", "0edfd226-b70a-4aaf-8ff2-c0c972952aac"), a.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), a.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return e.safeExecuteClientAction(e._initializedHandler$Action, n, t)
                }, function() {
                    a && a.end()
                })
            }, 0)
        }
        onDestroy$Action(t) {
            var n = this.controller;
            return r.Logger.startActiveSpan("OnDestroy__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnDestroy"), e.setAttribute("outsystems.function.key", "80963e7d-89b9-472a-9f6b-c1cfa982a8e0"), e.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), e.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
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
                e && (e.setAttribute("code.function", "OnParametersChanged"), e.setAttribute("outsystems.function.key", "db8aafb9-abe6-405b-a7ac-a76048fca091"), e.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), e.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onParametersChanged$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        registerCallbacks$Action(t) {
            var n = this.controller;
            return r.Logger.startActiveSpan("RegisterCallbacks__proxy", function(e) {
                e && (e.setAttribute("code.function", "RegisterCallbacks"), e.setAttribute("outsystems.function.key", "e9af2ffc-de9d-4700-b1b8-a3f0ad0f9943"), e.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), e.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._registerCallbacks$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onInitialize$Action(t) {
            var n = this.controller;
            return r.Logger.startActiveSpan("OnInitialize__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnInitialize"), e.setAttribute("outsystems.function.key", "eb8e028b-e0d2-4a0d-99a7-f97618a1eada"), e.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), e.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onInitialize$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onReady$Action(t) {
            var n = this.controller;
            return r.Logger.startActiveSpan("OnReady__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnReady"), e.setAttribute("outsystems.function.key", "ff263e3c-bfcd-47ea-a0b9-96fb1264fae5"), e.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), e.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
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
    l(o, "ControllerInner");
    let y = o;
    _ = y, _.registerVariableGroupType("OutSystemsUI.Utilities.ButtonLoading.InitializedHandler$vars", [{
        name: "ButtonLoadingId",
        attrName: "buttonLoadingIdInLocal",
        mandatory: !1,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }]), _.registerVariableGroupType("OutSystemsUI.Utilities.ButtonLoading.RegisterCallbacks$getCallbackHandlersJSResult", [{
        name: "Initialized",
        attrName: "initializedOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Object,
        defaultValue: l(function() {
            return null
        }, "defaultValue")
    }])
}
var _, k = new r.Controller.ControllerFactory(_, P);
var rt = C.PlaceholderContent,
    at = C.IteratorPlaceholderContent,
    f = class f extends R.BaseWebBlock {
        static get displayName() {
            return "Utilities.ButtonLoading"
        }
        static getAttributes() {
            return {
                codeFunction: "ButtonLoading",
                functionKey: "b6fb29b1-5745-4f43-b887-e98b7a5eb5d1",
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
            return k
        }
        get title() {
            return ""
        }
        internalRender() {
            let o = this.model,
                v = this.controller,
                t = this.idService,
                n = v.validationService,
                e = this.widgetsRecordProvider,
                a = v.callContext(),
                i = f.ifWidget,
                s = f.textWidget,
                u = f.asPrimitiveValue,
                T = f.getTranslation,
                m = this;
            return D.createElement("div", this.getRootNodeProperties(), D.createElement(H, {
                align: 0,
                content: m.props.placeholders.button,
                extendedProperties: {
                    name: o.variables.internal_ConfigsVar.uniqueIdAttr
                },
                gridProperties: {
                    classes: "OSInline"
                },
                style: "osui-btn-loading",
                _idProps: {
                    service: t,
                    name: "Button"
                },
                _widgetRecordProvider: e
            }))
        }
    };
l(f, "View");
var $ = f,
    ot = $;
export {
    ot as a
};