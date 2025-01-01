import {
    a as $
} from "./_oschunk-QVXOCHAU.js";
import {
    a as E
} from "./_oschunk-EROCOLS7.js";
import {
    w as O
} from "./_oschunk-42NACYKQ.js";
import {
    a as H,
    g as S,
    i as g
} from "./_oschunk-RKYF3TWC.js";
import {
    l
} from "./_oschunk-2ZI4JQLD.js";
import {
    bh as b
} from "./_oschunk-MSUVGI3L.js";
import {
    ia as v
} from "./_oschunk-2JKANR6M.js";
import {
    c,
    g as R
} from "./_oschunk-DVBKI63I.js";
var _ = R(H());
var L = {};

function h(f, u, A, t) {
    f.Initialized = u.InitializedHandler
}
c(h, "default");
var r = v; {
    let u = class u extends r.Controller.BaseViewController {
        constructor(t, i, e) {
            super(t, i, e, L);
            var o = this.controller;
            this.clientActionProxies = {
                initializedHandler$Action: c(function(n) {
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
        get _initializedHandler$Action() {
            return this.hasOwnProperty("__initializedHandler$Action") || (this.__initializedHandler$Action = function(t, i) {
                var e = this.model,
                    o = this.controller,
                    n = this.idService;
                return r.Logger.startActiveSpan("InitializedHandler", function(a) {
                    return a && (a.setAttribute("code.function", "InitializedHandler"), a.setAttribute("outsystems.function.key", "0edfd226-b70a-4aaf-8ff2-c0c972952aac"), a.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), a.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        o.ensureControllerAlive("InitializedHandler"), i = o.callContext(i);
                        var s = new r.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("OutSystemsUI.Utilities.ButtonLoading.InitializedHandler$vars")));
                        return s.value.buttonLoadingIdInLocal = t, r.Flow.executeAsyncFlow(function() {
                            return o.initialized$Action(s.value.buttonLoadingIdInLocal, i)
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
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(t) {
                var i = this.model,
                    e = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("OnDestroy", function(n) {
                    n && (n.setAttribute("code.function", "OnDestroy"), n.setAttribute("outsystems.function.key", "80963e7d-89b9-472a-9f6b-c1cfa982a8e0"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnDestroy"), t = e.callContext(t), l.buttonLoadingDestroy$Action(i.variables.internal_ConfigsVar.uniqueIdAttr, t)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(t) {
            this.__onDestroy$Action = t
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(t) {
                var i = this.model,
                    e = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("OnParametersChanged", function(n) {
                    n && (n.setAttribute("code.function", "OnParametersChanged"), n.setAttribute("outsystems.function.key", "db8aafb9-abe6-405b-a7ac-a76048fca091"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnParametersChanged"), t = e.callContext(t), i.variables.isLoadingIn !== i.variables.internal_ConfigsVar.isLoadingAttr && (i.variables.internal_ConfigsVar.isLoadingAttr = i.variables.isLoadingIn, l.buttonLoadingChangeBooleanProperty$Action(i.variables.internal_ConfigsVar.uniqueIdAttr, "IsLoading", i.variables.isLoadingIn, t)), i.variables.showLabelOnLoadingIn !== i.variables.internal_ConfigsVar.showLoadingAndLabelAttr && (i.variables.internal_ConfigsVar.showLoadingAndLabelAttr = i.variables.showLabelOnLoadingIn, l.buttonLoadingChangeBooleanProperty$Action(i.variables.internal_ConfigsVar.uniqueIdAttr, "ShowLoadingAndLabel", i.variables.internal_ConfigsVar.showLoadingAndLabelAttr, t)), i.variables.extendedClassIn !== i.variables.internal_ConfigsVar.extendedClassAttr && (i.variables.internal_ConfigsVar.extendedClassAttr = i.variables.extendedClassIn, l.buttonLoadingChangeTextProperty$Action(i.variables.internal_ConfigsVar.uniqueIdAttr, "ExtendedClass", i.variables.internal_ConfigsVar.extendedClassAttr, t))
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(t) {
            this.__onParametersChanged$Action = t
        }
        get _registerCallbacks$Action() {
            return this.hasOwnProperty("__registerCallbacks$Action") || (this.__registerCallbacks$Action = function(t) {
                var i = this.model,
                    e = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("RegisterCallbacks", function(n) {
                    n && (n.setAttribute("code.function", "RegisterCallbacks"), n.setAttribute("outsystems.function.key", "e9af2ffc-de9d-4700-b1b8-a3f0ad0f9943"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("RegisterCallbacks"), t = e.callContext(t);
                        var a = new r.DataTypes.VariableHolder;
                        a.value = r.Logger.startActiveSpan("GetCallbackHandlers", function(s) {
                            s && (s.setAttribute("code.function", "GetCallbackHandlers"), s.setAttribute("outsystems.function.key", "3c6ce000-aef8-452c-acd4-1bdfdcfa8c7a"), s.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), s.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(h, "GetCallbackHandlers", "RegisterCallbacks", {
                                    Initialized: r.DataConversion.JSNodeParamConverter.to(null, r.DataTypes.DataTypes.Object)
                                }, function(I) {
                                    var y = new(e.constructor.getVariableGroupType("OutSystemsUI.Utilities.ButtonLoading.RegisterCallbacks$getCallbackHandlersJSResult"));
                                    return y.initializedOut = r.DataConversion.JSNodeParamConverter.from(I.Initialized, r.DataTypes.DataTypes.Object), y
                                }, {
                                    InitializedHandler: e.clientActionProxies.initializedHandler$Action
                                }, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1), l.buttonLoadingRegisterCallback$Action(i.variables.internal_ConfigsVar.uniqueIdAttr, b.registeredCallbackEvents.initialized, a.value.initializedOut, t)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__registerCallbacks$Action
        }
        set _registerCallbacks$Action(t) {
            this.__registerCallbacks$Action = t
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(t) {
                var i = this.model,
                    e = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("OnInitialize", function(n) {
                    n && (n.setAttribute("code.function", "OnInitialize"), n.setAttribute("outsystems.function.key", "eb8e028b-e0d2-4a0d-99a7-f97618a1eada"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnInitialize"), t = e.callContext(t);
                        var a = new r.DataTypes.VariableHolder;
                        l.logEvent$Action(b.logType.general, "Going to create ButtonLoading", t), a.value = l.generateUniqueId$Action(i.variables.internal_ConfigsVar.uniqueIdAttr, t), i.variables.internal_ConfigsVar.uniqueIdAttr = a.value.unique_IDOut, i.variables.internal_ConfigsVar.isLoadingAttr = i.variables.isLoadingIn, i.variables.internal_ConfigsVar.showLoadingAndLabelAttr = i.variables.showLabelOnLoadingIn, i.variables.internal_ConfigsVar.extendedClassAttr = i.variables.extendedClassIn, l.buttonLoadingCreate$Action(i.variables.internal_ConfigsVar, t), e._registerCallbacks$Action(t)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(t) {
            this.__onInitialize$Action = t
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(t) {
                var i = this.model,
                    e = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("OnReady", function(n) {
                    n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "ff263e3c-bfcd-47ea-a0b9-96fb1264fae5"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnReady"), t = e.callContext(t), l.buttonLoadingInitialize$Action(i.variables.internal_ConfigsVar.uniqueIdAttr, t), l.logEvent$Action(b.logType.general, "ButtonLoading created", t)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(t) {
            this.__onReady$Action = t
        }
        initializedHandler$Action(t, i) {
            var e = this.controller;
            return r.Logger.startActiveSpan("InitializedHandler__proxy", function(o) {
                return o && (o.setAttribute("code.function", "InitializedHandler"), o.setAttribute("outsystems.function.key", "0edfd226-b70a-4aaf-8ff2-c0c972952aac"), o.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), o.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return e.safeExecuteClientAction(e._initializedHandler$Action, i, t)
                }, function() {
                    o && o.end()
                })
            }, 0)
        }
        onDestroy$Action(t) {
            var i = this.controller;
            return r.Logger.startActiveSpan("OnDestroy__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnDestroy"), e.setAttribute("outsystems.function.key", "80963e7d-89b9-472a-9f6b-c1cfa982a8e0"), e.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), e.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onDestroy$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onParametersChanged$Action(t) {
            var i = this.controller;
            return r.Logger.startActiveSpan("OnParametersChanged__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnParametersChanged"), e.setAttribute("outsystems.function.key", "db8aafb9-abe6-405b-a7ac-a76048fca091"), e.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), e.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onParametersChanged$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        registerCallbacks$Action(t) {
            var i = this.controller;
            return r.Logger.startActiveSpan("RegisterCallbacks__proxy", function(e) {
                e && (e.setAttribute("code.function", "RegisterCallbacks"), e.setAttribute("outsystems.function.key", "e9af2ffc-de9d-4700-b1b8-a3f0ad0f9943"), e.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), e.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._registerCallbacks$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onInitialize$Action(t) {
            var i = this.controller;
            return r.Logger.startActiveSpan("OnInitialize__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnInitialize"), e.setAttribute("outsystems.function.key", "eb8e028b-e0d2-4a0d-99a7-f97618a1eada"), e.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), e.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onInitialize$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onReady$Action(t) {
            var i = this.controller;
            return r.Logger.startActiveSpan("OnReady__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnReady"), e.setAttribute("outsystems.function.key", "ff263e3c-bfcd-47ea-a0b9-96fb1264fae5"), e.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), e.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onReady$Action, t)
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
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
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
            return l.defaultTimeout
        }
    };
    c(u, "ControllerInner");
    let f = u;
    m = f, m.registerVariableGroupType("OutSystemsUI.Utilities.ButtonLoading.InitializedHandler$vars", [{
        name: "ButtonLoadingId",
        attrName: "buttonLoadingIdInLocal",
        mandatory: !1,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }]), m.registerVariableGroupType("OutSystemsUI.Utilities.ButtonLoading.RegisterCallbacks$getCallbackHandlersJSResult", [{
        name: "Initialized",
        attrName: "initializedOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Object,
        defaultValue: c(function() {
            return null
        }, "defaultValue")
    }])
}
var m, w = new r.Controller.ControllerFactory(m, E);
var j = g.PlaceholderContent,
    M = g.IteratorPlaceholderContent,
    d = class d extends S.BaseWebBlock {
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
            return $
        }
        get controllerFactory() {
            return w
        }
        get title() {
            return ""
        }
        internalRender() {
            let u = this.model,
                A = this.controller,
                t = this.idService,
                i = A.validationService,
                e = this.widgetsRecordProvider,
                o = A.callContext(),
                n = d.ifWidget,
                a = d.textWidget,
                s = d.asPrimitiveValue,
                I = d.getTranslation,
                y = this;
            return _.createElement("div", this.getRootNodeProperties(), _.createElement(O, {
                align: 0,
                content: y.props.placeholders.button,
                extendedProperties: {
                    name: u.variables.internal_ConfigsVar.uniqueIdAttr
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
c(d, "View");
var C = d,
    K = C;
export {
    K as a
};