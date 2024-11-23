import {
    a as ee
} from "./_oschunk-LZORWQX2.js";
import "./_oschunk-TLLBW66U.js";
import {
    a as Z
} from "./_oschunk-JQL7OSCK.js";
import {
    a as H
} from "./_oschunk-NQ24OQU5.js";
import "./_oschunk-CXNBRKWX.js";
import {
    a as W
} from "./_oschunk-QCCZFQH6.js";
import "./_oschunk-4YFBPYRH.js";
import {
    a as Y
} from "./_oschunk-NR4KXK35.js";
import {
    a as D,
    b as X,
    d as o,
    l as V,
    n as h,
    o as U,
    q as w,
    s as K,
    u as v
} from "./_oschunk-OO36B6PN.js";
import "./_oschunk-7BKGLZMI.js";
import "./_oschunk-6WALBPGV.js";
import {
    a as Q,
    g as R,
    i as A
} from "./_oschunk-IL57OEHH.js";
import "./_oschunk-Y3C3IKDF.js";
import "./_oschunk-CMUJJDSY.js";
import {
    a as P,
    h as k,
    o as _
} from "./_oschunk-DW3HXDMW.js";
import "./_oschunk-PNRBOTIK.js";
import {
    hd as I
} from "./_oschunk-JXJHSAQS.js";
import {
    ia as S
} from "./_oschunk-5KJVGEL7.js";
import {
    c as l,
    h as J
} from "./_oschunk-QHO7QY6K.js";
var r = J(Q());
var G = J(Q());
var p = S,
    z = class z extends p.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Internal_Configs", "internal_ConfigsVar", "Internal_Configs", !0, !1, p.DataTypes.DataTypes.Record, function() {
                return p.DataTypes.ImmutableBase.getData(new k)
            }, !1, k), this.attr("IsLoading", "isLoadingIn", "IsLoading", !0, !1, p.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", !0, !1, p.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ShowLabelOnLoading", "showLabelOnLoadingIn", "ShowLabelOnLoading", !0, !1, p.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_showLabelOnLoadingInDataFetchStatus", "_showLabelOnLoadingInDataFetchStatus", "_showLabelOnLoadingInDataFetchStatus", !0, !1, p.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, p.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, p.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(p.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
l(z, "VariablesRecord");
var E = z;
E.init();
var N = class N extends p.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
l(N, "WidgetsRecord");
var $ = N,
    F = class F extends p.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return E
        }
        static getWidgetsRecordConstructor() {
            return $
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(c) {
            "IsLoading" in c && (this.variables.isLoadingIn = c.IsLoading, "_isLoadingInDataFetchStatus" in c && (this.variables._isLoadingInDataFetchStatus = c._isLoadingInDataFetchStatus)), "ShowLabelOnLoading" in c && (this.variables.showLabelOnLoadingIn = c.ShowLabelOnLoading, "_showLabelOnLoadingInDataFetchStatus" in c && (this.variables._showLabelOnLoadingInDataFetchStatus = c._showLabelOnLoadingInDataFetchStatus)), "ExtendedClass" in c && (this.variables.extendedClassIn = c.ExtendedClass, "_extendedClassInDataFetchStatus" in c && (this.variables._extendedClassInDataFetchStatus = c._extendedClassInDataFetchStatus))
        }
    };
l(F, "Model");
var L = F;
L._hasValidationWidgetsValue = void 0;
var te = new p.Model.ModelFactory(L);
var ie = {};

function B(C, c, m, e) {
    C.Initialized = c.InitializedHandler
}
l(B, "default");
var d = S; {
    let c = class c extends d.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t, ie);
            var s = this.controller;
            this.clientActionProxies = {
                initializedHandler$Action: l(function(n) {
                    return n = n === void 0 ? "" : n, s.executeActionInsideJSNode(s._initializedHandler$Action.bind(s, d.DataConversion.JSNodeParamConverter.from(n, d.DataTypes.DataTypes.Text)), s.callContext(), function(a) {
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
        get _initializedHandler$Action() {
            return this.hasOwnProperty("__initializedHandler$Action") || (this.__initializedHandler$Action = function(e, i) {
                var t = this.model,
                    s = this.controller,
                    n = this.idService;
                return d.Logger.startActiveSpan("InitializedHandler", function(a) {
                    return a && (a.setAttribute("code.function", "InitializedHandler"), a.setAttribute("outsystems.function.key", "0edfd226-b70a-4aaf-8ff2-c0c972952aac"), a.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), a.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), d.Flow.tryFinally(function() {
                        s.ensureControllerAlive("InitializedHandler"), i = s.callContext(i);
                        var y = new d.DataTypes.VariableHolder(new(s.constructor.getVariableGroupType("OutSystemsUI.Utilities.ButtonLoading.InitializedHandler$vars")));
                        return y.value.buttonLoadingIdInLocal = e, d.Flow.executeAsyncFlow(function() {
                            return s.initialized$Action(y.value.buttonLoadingIdInLocal, i)
                        })
                    }, function() {
                        a && a.end()
                    })
                }, 1)
            }), this.__initializedHandler$Action
        }
        set _initializedHandler$Action(e) {
            this.__initializedHandler$Action = e
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    s = this.idService;
                return d.Logger.startActiveSpan("OnDestroy", function(n) {
                    n && (n.setAttribute("code.function", "OnDestroy"), n.setAttribute("outsystems.function.key", "80963e7d-89b9-472a-9f6b-c1cfa982a8e0"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnDestroy"), e = t.callContext(e), _.buttonLoadingDestroy$Action(i.variables.internal_ConfigsVar.uniqueIdAttr, e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(e) {
            this.__onDestroy$Action = e
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    s = this.idService;
                return d.Logger.startActiveSpan("OnParametersChanged", function(n) {
                    n && (n.setAttribute("code.function", "OnParametersChanged"), n.setAttribute("outsystems.function.key", "db8aafb9-abe6-405b-a7ac-a76048fca091"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnParametersChanged"), e = t.callContext(e), i.variables.isLoadingIn !== i.variables.internal_ConfigsVar.isLoadingAttr && (i.variables.internal_ConfigsVar.isLoadingAttr = i.variables.isLoadingIn, _.buttonLoadingChangeBooleanProperty$Action(i.variables.internal_ConfigsVar.uniqueIdAttr, "IsLoading", i.variables.isLoadingIn, e)), i.variables.showLabelOnLoadingIn !== i.variables.internal_ConfigsVar.showLoadingAndLabelAttr && (i.variables.internal_ConfigsVar.showLoadingAndLabelAttr = i.variables.showLabelOnLoadingIn, _.buttonLoadingChangeBooleanProperty$Action(i.variables.internal_ConfigsVar.uniqueIdAttr, "ShowLoadingAndLabel", i.variables.internal_ConfigsVar.showLoadingAndLabelAttr, e)), i.variables.extendedClassIn !== i.variables.internal_ConfigsVar.extendedClassAttr && (i.variables.internal_ConfigsVar.extendedClassAttr = i.variables.extendedClassIn, _.buttonLoadingChangeTextProperty$Action(i.variables.internal_ConfigsVar.uniqueIdAttr, "ExtendedClass", i.variables.internal_ConfigsVar.extendedClassAttr, e))
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(e) {
            this.__onParametersChanged$Action = e
        }
        get _registerCallbacks$Action() {
            return this.hasOwnProperty("__registerCallbacks$Action") || (this.__registerCallbacks$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    s = this.idService;
                return d.Logger.startActiveSpan("RegisterCallbacks", function(n) {
                    n && (n.setAttribute("code.function", "RegisterCallbacks"), n.setAttribute("outsystems.function.key", "e9af2ffc-de9d-4700-b1b8-a3f0ad0f9943"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("RegisterCallbacks"), e = t.callContext(e);
                        var a = new d.DataTypes.VariableHolder;
                        a.value = d.Logger.startActiveSpan("GetCallbackHandlers", function(y) {
                            y && (y.setAttribute("code.function", "GetCallbackHandlers"), y.setAttribute("outsystems.function.key", "3c6ce000-aef8-452c-acd4-1bdfdcfa8c7a"), y.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), y.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), y.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(B, "GetCallbackHandlers", "RegisterCallbacks", {
                                    Initialized: d.DataConversion.JSNodeParamConverter.to(null, d.DataTypes.DataTypes.Object)
                                }, function(u) {
                                    var b = new(t.constructor.getVariableGroupType("OutSystemsUI.Utilities.ButtonLoading.RegisterCallbacks$getCallbackHandlersJSResult"));
                                    return b.initializedOut = d.DataConversion.JSNodeParamConverter.from(u.Initialized, d.DataTypes.DataTypes.Object), b
                                }, {
                                    InitializedHandler: t.clientActionProxies.initializedHandler$Action
                                }, {})
                            } finally {
                                y && y.end()
                            }
                        }, 1), _.buttonLoadingRegisterCallback$Action(i.variables.internal_ConfigsVar.uniqueIdAttr, I.registeredCallbackEvents.initialized, a.value.initializedOut, e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__registerCallbacks$Action
        }
        set _registerCallbacks$Action(e) {
            this.__registerCallbacks$Action = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    s = this.idService;
                return d.Logger.startActiveSpan("OnInitialize", function(n) {
                    n && (n.setAttribute("code.function", "OnInitialize"), n.setAttribute("outsystems.function.key", "eb8e028b-e0d2-4a0d-99a7-f97618a1eada"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e);
                        var a = new d.DataTypes.VariableHolder;
                        _.logEvent$Action(I.logType.general, "Going to create ButtonLoading", e), a.value = _.generateUniqueId$Action(i.variables.internal_ConfigsVar.uniqueIdAttr, e), i.variables.internal_ConfigsVar.uniqueIdAttr = a.value.unique_IDOut, i.variables.internal_ConfigsVar.isLoadingAttr = i.variables.isLoadingIn, i.variables.internal_ConfigsVar.showLoadingAndLabelAttr = i.variables.showLabelOnLoadingIn, i.variables.internal_ConfigsVar.extendedClassAttr = i.variables.extendedClassIn, _.buttonLoadingCreate$Action(i.variables.internal_ConfigsVar, e), t._registerCallbacks$Action(e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    s = this.idService;
                return d.Logger.startActiveSpan("OnReady", function(n) {
                    n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "ff263e3c-bfcd-47ea-a0b9-96fb1264fae5"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e), _.buttonLoadingInitialize$Action(i.variables.internal_ConfigsVar.uniqueIdAttr, e), _.logEvent$Action(I.logType.general, "ButtonLoading created", e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        initializedHandler$Action(e, i) {
            var t = this.controller;
            return d.Logger.startActiveSpan("InitializedHandler__proxy", function(s) {
                return s && (s.setAttribute("code.function", "InitializedHandler"), s.setAttribute("outsystems.function.key", "0edfd226-b70a-4aaf-8ff2-c0c972952aac"), s.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), s.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), d.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._initializedHandler$Action, i, e)
                }, function() {
                    s && s.end()
                })
            }, 0)
        }
        onDestroy$Action(e) {
            var i = this.controller;
            return d.Logger.startActiveSpan("OnDestroy__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnDestroy"), t.setAttribute("outsystems.function.key", "80963e7d-89b9-472a-9f6b-c1cfa982a8e0"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onDestroy$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onParametersChanged$Action(e) {
            var i = this.controller;
            return d.Logger.startActiveSpan("OnParametersChanged__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnParametersChanged"), t.setAttribute("outsystems.function.key", "db8aafb9-abe6-405b-a7ac-a76048fca091"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onParametersChanged$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        registerCallbacks$Action(e) {
            var i = this.controller;
            return d.Logger.startActiveSpan("RegisterCallbacks__proxy", function(t) {
                t && (t.setAttribute("code.function", "RegisterCallbacks"), t.setAttribute("outsystems.function.key", "e9af2ffc-de9d-4700-b1b8-a3f0ad0f9943"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._registerCallbacks$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onInitialize$Action(e) {
            var i = this.controller;
            return d.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "eb8e028b-e0d2-4a0d-99a7-f97618a1eada"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onInitialize$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var i = this.controller;
            return d.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "ff263e3c-bfcd-47ea-a0b9-96fb1264fae5"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onReady$Action, e)
                } finally {
                    t && t.end()
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
                var i = this.controller,
                    t = this.model,
                    s = this.idService;
                return i.onInitialize$Action(e)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var i = this.controller,
                    t = this.model,
                    s = this.idService;
                return i.onReady$Action(e)
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
                var i = this.controller,
                    t = this.model,
                    s = this.idService;
                return i.onDestroy$Action(e)
            }), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(e) {
            this._onDestroyEventHandler = e
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = function(e) {
                var i = this.controller,
                    t = this.model,
                    s = this.idService;
                return i.onParametersChanged$Action(e)
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
            return _.defaultTimeout
        }
    };
    l(c, "ControllerInner");
    let C = c;
    T = C, T.registerVariableGroupType("OutSystemsUI.Utilities.ButtonLoading.InitializedHandler$vars", [{
        name: "ButtonLoadingId",
        attrName: "buttonLoadingIdInLocal",
        mandatory: !1,
        dataType: d.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }]), T.registerVariableGroupType("OutSystemsUI.Utilities.ButtonLoading.RegisterCallbacks$getCallbackHandlersJSResult", [{
        name: "Initialized",
        attrName: "initializedOut",
        mandatory: !0,
        dataType: d.DataTypes.DataTypes.Object,
        defaultValue: l(function() {
            return null
        }, "defaultValue")
    }])
}
var T, re = new d.Controller.ControllerFactory(T, Y);
var Oe = A.PlaceholderContent,
    Ae = A.IteratorPlaceholderContent,
    x = class x extends R.BaseWebBlock {
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
            return te
        }
        get controllerFactory() {
            return re
        }
        get title() {
            return ""
        }
        internalRender() {
            let c = this.model,
                m = this.controller,
                e = this.idService,
                i = m.validationService,
                t = this.widgetsRecordProvider,
                s = m.callContext(),
                n = x.ifWidget,
                a = x.textWidget,
                y = x.asPrimitiveValue,
                u = x.getTranslation,
                b = this;
            return G.createElement("div", this.getRootNodeProperties(), G.createElement(K, {
                align: 0,
                content: b.props.placeholders.button,
                extendedProperties: {
                    name: c.variables.internal_ConfigsVar.uniqueIdAttr
                },
                gridProperties: {
                    classes: "OSInline"
                },
                style: "osui-btn-loading",
                _idProps: {
                    service: e,
                    name: "Button"
                },
                _widgetRecordProvider: t
            }))
        }
    };
l(x, "View");
var M = x,
    j = M;
var g = S,
    ne = A.PlaceholderContent,
    He = A.IteratorPlaceholderContent,
    O = class O extends R.BaseWebScreen {
        static get displayName() {
            return "Signup.Signup"
        }
        static getAttributes() {
            return {
                codeFunction: "Signup",
                functionKey: "7409996c-f250-4bc9-85ba-321f8f6c0516",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/PartnersHub.PHubTest.css", "css/PartnersHub.Signup.Signup.css", "css/PartnersHub.PHubTest.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [H, j, W]
        }
        get modelFactory() {
            return Z
        }
        get controllerFactory() {
            return ee
        }
        get title() {
            return R.BaseWebScreen.getTranslation("bJkJdFDyyUuFujIfj2wFFg#Title", "Signup")
        }
        internalRender() {
            let c = this.model,
                m = this.controller,
                e = this.idService,
                i = m.validationService,
                t = this.widgetsRecordProvider,
                s = m.callContext(),
                n = O.ifWidget,
                a = O.textWidget,
                y = O.asPrimitiveValue,
                u = O.getTranslation,
                b = this;
            return r.createElement("div", this.getRootNodeProperties(), r.createElement(H, {
                getOwnerSpan: l(function() {
                    return b.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: l(function() {
                    return b.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    BackgroundColor: "white"
                },
                events: {
                    _handleError: l(function(f) {
                        m.handleError(f)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: i
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    mainContent: new ne(function() {
                        return [n(P.getIsDesktop(), !1, this, function() {
                            return [r.createElement(o, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "margin-top: 0px;"
                                },
                                style: "login-screen",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "1"
                                },
                                _widgetRecordProvider: t
                            }, r.createElement(o, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "margin-right: 16px; max-width: 486px;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "2"
                                },
                                _widgetRecordProvider: t
                            }, r.createElement(v, {
                                extendedProperties: {
                                    style: "color: #414652; font-size: 32px; font-style: normal; font-weight: 700; line-height: 40px;"
                                },
                                text: [a(u("H5ORjX4MREGP9PO_Fsleqw#Value", "Join a global network of over 60,000 partners today!"))],
                                _idProps: {
                                    service: e,
                                    uuid: "3"
                                },
                                _widgetRecordProvider: t
                            }), r.createElement(o, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "margin-bottom: 16px; margin-top: 16px;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "4"
                                },
                                _widgetRecordProvider: t
                            }, r.createElement(o, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "5"
                                },
                                _widgetRecordProvider: t
                            }, r.createElement(h, {
                                image: g.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.checkmark.svg"),
                                type: 0,
                                _idProps: {
                                    service: e,
                                    uuid: "6"
                                },
                                _widgetRecordProvider: t
                            }), r.createElement(v, {
                                extendedProperties: {
                                    style: "color: #414652; font-size: 16px; margin-left: 8px;"
                                },
                                text: [a(u("cm5WkDzsTUGV432ue4a_Mw#Value", "USD 47m+ paid out, withdraw anytime"))],
                                _idProps: {
                                    service: e,
                                    uuid: "7"
                                },
                                _widgetRecordProvider: t
                            })), r.createElement(o, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "8"
                                },
                                _widgetRecordProvider: t
                            }, r.createElement(h, {
                                image: g.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.checkmark.svg"),
                                type: 0,
                                _idProps: {
                                    service: e,
                                    uuid: "9"
                                },
                                _widgetRecordProvider: t
                            }), r.createElement(v, {
                                extendedProperties: {
                                    style: "color: #414652; font-size: 16px; margin-left: 8px;"
                                },
                                text: [a(u("HFo2TwnWNkq34L7I6n52ag#Value", "1m+ clients across 190 countries"))],
                                _idProps: {
                                    service: e,
                                    uuid: "10"
                                },
                                _widgetRecordProvider: t
                            })), r.createElement(o, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "11"
                                },
                                _widgetRecordProvider: t
                            }, r.createElement(h, {
                                image: g.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.checkmark.svg"),
                                type: 0,
                                _idProps: {
                                    service: e,
                                    uuid: "12"
                                },
                                _widgetRecordProvider: t
                            }), r.createElement(v, {
                                extendedProperties: {
                                    style: "color: #414652; font-size: 16px; margin-left: 8px;"
                                },
                                text: [a(u("8emUWCB8GkGEI0nX00eBAA#Value", "24/7 support, whenever you need it"))],
                                _idProps: {
                                    service: e,
                                    uuid: "13"
                                },
                                _widgetRecordProvider: t
                            }))), r.createElement(v, {
                                extendedProperties: {
                                    style: "color: #414652; font-size: 20px; font-style: normal; font-weight: 700; line-height: 30px;"
                                },
                                text: [a(u("dqQQL1AfRkWrhX_057RFtQ#Value", "Refer traders and earn up to 45% commissions."))],
                                _idProps: {
                                    service: e,
                                    uuid: "14"
                                },
                                _widgetRecordProvider: t
                            })), r.createElement(o, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "max-width: 486px;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "486px"
                                },
                                style: "signup",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "15"
                                },
                                _widgetRecordProvider: t
                            }, r.createElement(V, {
                                _validationProps: {
                                    validationService: i
                                },
                                extendedProperties: {
                                    style: "align-items: flex-start; display: flex; flex-direction: column; gap: 24px; padding: 16px;"
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                style: "",
                                _idProps: {
                                    service: e,
                                    name: "Form3"
                                },
                                _widgetRecordProvider: t
                            }, r.createElement(v, {
                                extendedProperties: {
                                    style: "color: #414652; font-size: 24px; font-weight: bold;"
                                },
                                text: [a(u("xKYtyF2ZAEC5BFyvUCEUZQ#Value", "Become a Deriv partner"))],
                                _idProps: {
                                    service: e,
                                    uuid: "17"
                                },
                                _widgetRecordProvider: t
                            }), r.createElement(o, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "display: flex; flex-direction: column; gap: 8px;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "18"
                                },
                                _widgetRecordProvider: t
                            }, r.createElement(v, {
                                extendedProperties: {
                                    style: "color: #4F575E;"
                                },
                                text: [a(u("rds1k5TSDES69x+yqh7kWw#Value", "Email"))],
                                _idProps: {
                                    service: e,
                                    uuid: "19"
                                },
                                _widgetRecordProvider: t
                            }), r.createElement(U, {
                                _validationProps: {
                                    validationService: i,
                                    validationParentId: e.getId("Form3")
                                },
                                enabled: !0,
                                extendedProperties: {
                                    style: "font-size: 16px; height: 48px;"
                                },
                                gridProperties: {
                                    width: "100%"
                                },
                                inputType: 0,
                                mandatory: !0,
                                maxLength: 50,
                                prompt: g.Injector.resolve(g.ServiceNames.TranslationsService).getMessage("djEM5nSQdEuRP1YwHhFkfA#ValueExpression.-374653993.1", "Enter your email"),
                                style: "form-control",
                                variable: c.createVariable(g.DataTypes.DataTypes.Text, P.getSignupEmail(), function(f) {
                                    P.setSignupEmail(f)
                                }),
                                _idProps: {
                                    service: e,
                                    name: "Email3"
                                },
                                _widgetRecordProvider: t
                            })), r.createElement(o, {
                                align: 0,
                                animate: !1,
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "21"
                                },
                                _widgetRecordProvider: t
                            }, r.createElement(v, {
                                style: "ph-terms",
                                text: [a(u("0L9t5V69GUWqH4EBUFv2IA#Value", "By creating an account, you confirm you are 18+ and understand we may send you updates and marketing materials (see\xA0"))],
                                _idProps: {
                                    service: e,
                                    uuid: "22"
                                },
                                _widgetRecordProvider: t
                            }), r.createElement(D, {
                                extendedProperties: {
                                    href: "https://docs.deriv.com/tnc/security-and-privacy.pdf",
                                    target: "_blank"
                                },
                                tag: "a",
                                _idProps: {
                                    service: e,
                                    uuid: "23"
                                },
                                _widgetRecordProvider: t
                            }, r.createElement(v, {
                                style: "ph-terms-link",
                                text: ["Security and privacy"],
                                _idProps: {
                                    service: e,
                                    uuid: "24"
                                },
                                _widgetRecordProvider: t
                            })), r.createElement(v, {
                                style: "ph-terms",
                                text: ["). Unsubscribe in your account settings anytime.\u2028By signing up, you agree to our "],
                                _idProps: {
                                    service: e,
                                    uuid: "25"
                                },
                                _widgetRecordProvider: t
                            }), r.createElement(D, {
                                extendedProperties: {
                                    href: "https://deriv.com/terms-and-conditions#clients",
                                    target: "_blank"
                                },
                                tag: "a",
                                _idProps: {
                                    service: e,
                                    uuid: "26"
                                },
                                _widgetRecordProvider: t
                            }, r.createElement(v, {
                                style: "ph-terms-link",
                                text: ["Terms and conditions"],
                                _idProps: {
                                    service: e,
                                    uuid: "27"
                                },
                                _widgetRecordProvider: t
                            })), r.createElement(v, {
                                style: "ph-terms",
                                text: [a(u("05+Idh4XEUuXubQDn_Jaqw#Value", "."))],
                                _idProps: {
                                    service: e,
                                    uuid: "28"
                                },
                                _widgetRecordProvider: t
                            })), r.createElement(j, {
                                getOwnerSpan: l(function() {
                                    return b.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: l(function() {
                                    return b.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    IsLoading: c.variables.isCreateAccountLoadingVar
                                },
                                events: {
                                    _handleError: l(function(f) {
                                        m.handleError(f)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: i,
                                    validationParentId: e.getId("Form3")
                                },
                                _idProps: {
                                    service: e,
                                    uuid: "29",
                                    alias: "2"
                                },
                                _widgetRecordProvider: t,
                                placeholders: {
                                    button: new ne(function() {
                                        return [r.createElement(X, {
                                            enabled: !0,
                                            extendedProperties: {
                                                style: "border-radius: 100px; height: 48px;"
                                            },
                                            gridProperties: {
                                                width: "100%"
                                            },
                                            isDefault: !1,
                                            onClick: l(function() {
                                                return b.validateWidget(e.getId("Form3")), Promise.resolve().then(function() {
                                                    var f = s.clone();
                                                    return m.createPartnerAccountOnClick$Action(m.callContext(f))
                                                })
                                            }, "onClick"),
                                            style: "btn btn-primary primary-button",
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                uuid: "30"
                                            },
                                            _widgetRecordProvider: t
                                        }, r.createElement(o, {
                                            align: 0,
                                            animate: !1,
                                            style: "osui-btn-loading__spinner-animation",
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                uuid: "31"
                                            },
                                            _widgetRecordProvider: t
                                        }), a(u("viLAwbFCgEykFfLz6nIlEw#Value", "Continue")))]
                                    })
                                },
                                _dependencies: []
                            }), r.createElement(o, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "align-items: center; display: flex; justify-content: center;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "32"
                                },
                                _widgetRecordProvider: t
                            }, r.createElement(o, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "background: #6A7178; height: 1px;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "33"
                                },
                                _widgetRecordProvider: t
                            }), r.createElement(v, {
                                extendedProperties: {
                                    style: "color: #6A7178; text-align: center; width: 100%;"
                                },
                                text: [a(u("sk9Hv6_X+UaRUOHB88t1Hg#Value", "Or sign up with"))],
                                _idProps: {
                                    service: e,
                                    uuid: "34"
                                },
                                _widgetRecordProvider: t
                            }), r.createElement(o, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "background: #6A7178; height: 1px;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "35"
                                },
                                _widgetRecordProvider: t
                            })), r.createElement(o, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "align-items: center; display: flex; justify-content: center;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "36"
                                },
                                _widgetRecordProvider: t
                            }, r.createElement(o, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "align-items: center; border: 0.5px solid #414652; border-radius: 100px; display: flex; flex-shrink: 0; gap: 8px; height: 48px; justify-content: center; padding: 8px 16px;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "72px"
                                },
                                style: "social-btn",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "37"
                                },
                                _widgetRecordProvider: t
                            }, r.createElement(h, {
                                image: g.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.google_md.png"),
                                type: 0,
                                _idProps: {
                                    service: e,
                                    uuid: "38"
                                },
                                _widgetRecordProvider: t
                            })), r.createElement(o, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "align-items: center; border: 0.5px solid #414652; border-radius: 100px; display: flex; flex-shrink: 0; gap: 8px; height: 48px; justify-content: center; margin-right: 16px; padding: 8px 16px;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "72px",
                                    marginLeft: "16px"
                                },
                                style: "social-btn",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "39"
                                },
                                _widgetRecordProvider: t
                            }, r.createElement(h, {
                                image: g.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.facebook_md.png"),
                                type: 0,
                                _idProps: {
                                    service: e,
                                    uuid: "40"
                                },
                                _widgetRecordProvider: t
                            })), r.createElement(o, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "align-items: center; border: 0.5px solid #414652; border-radius: 100px; display: flex; flex-shrink: 0; gap: 8px; height: 48px; justify-content: center; padding: 8px 16px;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "72px"
                                },
                                style: "social-btn",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "41"
                                },
                                _widgetRecordProvider: t
                            }, r.createElement(h, {
                                image: g.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.apple_md.png"),
                                type: 0,
                                _idProps: {
                                    service: e,
                                    uuid: "42"
                                },
                                _widgetRecordProvider: t
                            }))), r.createElement(o, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "text-align: center;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "43"
                                },
                                _widgetRecordProvider: t
                            }, a(u("4SgkofLBVkmPS+sdVNO+ew#Value", "Already have an account?")), r.createElement(w, {
                                enabled: !0,
                                extendedProperties: {
                                    style: "border: none; color: #000; font-weight: bold; text-decoration: underline;"
                                },
                                gridProperties: {
                                    classes: "ThemeGrid_MarginGutter"
                                },
                                onClick: l(function() {
                                    var f = s.clone();
                                    m.redirectOAuth$Action(m.callContext(f))
                                }, "onClick"),
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "44"
                                },
                                _widgetRecordProvider: t
                            }, a(u("nkGOS_qDGke94U1sfqY2Bw#Value", "Log in")))))))]
                        }, function() {
                            return [r.createElement(o, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "45"
                                },
                                _widgetRecordProvider: t
                            }, r.createElement(V, {
                                _validationProps: {
                                    validationService: i
                                },
                                extendedProperties: {
                                    style: "align-items: flex-start; display: flex; flex-direction: column; gap: 24px; padding: 16px;"
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                style: "",
                                _idProps: {
                                    service: e,
                                    name: "Form2"
                                },
                                _widgetRecordProvider: t
                            }, r.createElement(v, {
                                extendedProperties: {
                                    style: "color: #222; font-size: 20px; font-weight: bold; margin-top: -8px;"
                                },
                                text: [a(u("JFUJhSppXkCG+NL7xoSBoA#Value", "Become a Deriv partner"))],
                                _idProps: {
                                    service: e,
                                    uuid: "47"
                                },
                                _widgetRecordProvider: t
                            }), r.createElement(o, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "display: flex; flex-direction: column;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "48"
                                },
                                _widgetRecordProvider: t
                            }, r.createElement(v, {
                                extendedProperties: {
                                    style: "font-size: 16px; margin-bottom: 8px;"
                                },
                                text: [a(u("YLEukSC4ZkC9qdBghyW4Gg#Value", "Email"))],
                                _idProps: {
                                    service: e,
                                    uuid: "49"
                                },
                                _widgetRecordProvider: t
                            }), r.createElement(U, {
                                _validationProps: {
                                    validationService: i,
                                    validationParentId: e.getId("Form2")
                                },
                                enabled: !0,
                                extendedProperties: {
                                    style: "font-size: 16px; height: 48px;"
                                },
                                gridProperties: {
                                    width: "100%"
                                },
                                inputType: 0,
                                mandatory: !0,
                                maxLength: 50,
                                prompt: g.Injector.resolve(g.ServiceNames.TranslationsService).getMessage("_CmBqDw0B0GBdlmS6oCbwA#ValueExpression.-374653993.1", "Enter your email"),
                                style: "form-control",
                                variable: c.createVariable(g.DataTypes.DataTypes.Text, P.getSignupEmail(), function(f) {
                                    P.setSignupEmail(f)
                                }),
                                _idProps: {
                                    service: e,
                                    name: "Email2"
                                },
                                _widgetRecordProvider: t
                            })), r.createElement(o, {
                                align: 0,
                                animate: !1,
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "51"
                                },
                                _widgetRecordProvider: t
                            }, a(u("wCzi7gRCQUixy+Qxm4YQ7g#Value", "By pressing \u201CCreate account\u201D, I agree to the")), r.createElement(w, {
                                enabled: !0,
                                extendedProperties: {
                                    target: "_blank",
                                    rel: "noopener",
                                    style: "border: none; color: #000; font-weight: bold; text-decoration: underline;"
                                },
                                gridProperties: {
                                    classes: "ThemeGrid_MarginGutter"
                                },
                                transition: g.Transitions.createTransition(g.Transitions.TransitionAnimation.Default),
                                url: g.Navigation.generateScreenURL("https://deriv.com/terms-and-conditions#clients", {}),
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "52"
                                },
                                _widgetRecordProvider: t
                            }, a(u("WAJkSKH+U0CFX3WEtz2o2w#Value", "terms and conditions.")))), r.createElement(W, {
                                getOwnerSpan: l(function() {
                                    return b.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: l(function() {
                                    return b.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    title: g.Injector.resolve(g.ServiceNames.TranslationsService).getMessage("N4BuCTIOUEychHYpQGiLkg#Value.-1386031319.1", "Create account"),
                                    Width: "100%",
                                    isLoading: c.variables.isCreateAccountLoadingVar
                                },
                                events: {
                                    _handleError: l(function(f) {
                                        m.handleError(f)
                                    }, "_handleError"),
                                    onClick$Action: l(function() {
                                        return Promise.resolve().then(function() {
                                            var f = s.clone();
                                            return m.createPartnerAccountOnClick$Action(m.callContext(f))
                                        })
                                    }, "onClick$Action")
                                },
                                _validationProps: {
                                    validationService: i,
                                    validationParentId: e.getId("Form2")
                                },
                                _idProps: {
                                    service: e,
                                    uuid: "53",
                                    alias: "3"
                                },
                                _widgetRecordProvider: t,
                                _dependencies: []
                            }), r.createElement(o, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "align-items: center; display: flex; justify-content: center;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "54"
                                },
                                _widgetRecordProvider: t
                            }, r.createElement(o, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "background: #6A7178; height: 1px;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "55"
                                },
                                _widgetRecordProvider: t
                            }), r.createElement(v, {
                                extendedProperties: {
                                    style: "color: #6A7178; text-align: center; width: 100%;"
                                },
                                text: [a(u("0zW1LO+dMEyUa1rhdaLzGA#Value", "Or sign up with"))],
                                _idProps: {
                                    service: e,
                                    uuid: "56"
                                },
                                _widgetRecordProvider: t
                            }), r.createElement(o, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "background: #6A7178; height: 1px;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "57"
                                },
                                _widgetRecordProvider: t
                            })), r.createElement(o, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "align-items: center; display: flex; justify-content: center;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "58"
                                },
                                _widgetRecordProvider: t
                            }, r.createElement(o, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "align-items: flex-start; border: 0.5px solid #414652; border-radius: 100px; display: flex; flex-shrink: 0; gap: 8px; justify-content: center; padding: 8px 16px;"
                                },
                                gridProperties: {
                                    classes: "OSInline"
                                },
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "59"
                                },
                                _widgetRecordProvider: t
                            }, r.createElement(h, {
                                image: g.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.google_md.png"),
                                type: 0,
                                _idProps: {
                                    service: e,
                                    uuid: "60"
                                },
                                _widgetRecordProvider: t
                            })), r.createElement(o, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "align-items: flex-start; border: 0.5px solid #414652; border-radius: 100px; display: flex; flex-shrink: 0; gap: 8px; justify-content: center; margin-right: 24px; padding: 8px 16px;"
                                },
                                gridProperties: {
                                    marginLeft: "24px"
                                },
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "61"
                                },
                                _widgetRecordProvider: t
                            }, r.createElement(h, {
                                image: g.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.facebook_md.png"),
                                type: 0,
                                _idProps: {
                                    service: e,
                                    uuid: "62"
                                },
                                _widgetRecordProvider: t
                            })), r.createElement(o, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "align-items: flex-start; border: 0.5px solid #414652; border-radius: 100px; display: flex; flex-shrink: 0; gap: 8px; justify-content: center; padding: 8px 16px;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "63"
                                },
                                _widgetRecordProvider: t
                            }, r.createElement(h, {
                                image: g.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.apple_md.png"),
                                type: 0,
                                _idProps: {
                                    service: e,
                                    uuid: "64"
                                },
                                _widgetRecordProvider: t
                            }))), r.createElement(o, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "text-align: center;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "65"
                                },
                                _widgetRecordProvider: t
                            }, a(u("slSCZLC1Ck+qFlC2cFbkcg#Value", "Already have an account?")), r.createElement(w, {
                                enabled: !0,
                                extendedProperties: {
                                    style: "border: none; color: #000; font-weight: bold; text-decoration: underline;"
                                },
                                gridProperties: {
                                    classes: "ThemeGrid_MarginGutter"
                                },
                                onClick: l(function() {
                                    var f = s.clone();
                                    m.redirectOAuth$Action(m.callContext(f))
                                }, "onClick"),
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "66"
                                },
                                _widgetRecordProvider: t
                            }, a(u("lmOiOFXHYUe5iEXKvSI4+Q#Value", "Log in"))))))]
                        })]
                    })
                },
                _dependencies: [y(c.variables.isCreateAccountLoadingVar), y(P.getSignupEmail()), y(P.getIsDesktop())]
            }))
        }
    };
l(O, "View");
var q = O,
    $e = q;
export {
    $e as
    default
};