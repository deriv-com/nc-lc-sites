import {
    a as N,
    b as x
} from "./_oschunk-D47O3LMJ.js";
import {
    a as z
} from "./_oschunk-NR4KXK35.js";
import {
    d as _,
    f as k
} from "./_oschunk-5HXBKFJV.js";
import {
    a as T
} from "./_oschunk-6WALBPGV.js";
import {
    a as D,
    g as I,
    i as g
} from "./_oschunk-2Q3BG5XZ.js";
import {
    o as d,
    p as V
} from "./_oschunk-FZ6FUHBV.js";
import {
    jd as S
} from "./_oschunk-5FYEKNKX.js";
import {
    ia as v
} from "./_oschunk-5KJVGEL7.js";
import {
    c as a,
    h as p
} from "./_oschunk-QHO7QY6K.js";
var H = p(D());
var U = {};

function R(f, s, u, t) {
    f.OnInitialize = s.InitializedHandler
}
a(R, "default");
var o = v; {
    let s = class s extends o.Controller.BaseViewController {
        constructor(t, n, e) {
            super(t, n, e, U);
            var r = this.controller;
            this.clientActionProxies = {
                initializedHandler$Action: a(function(i) {
                    return i = i === void 0 ? "" : i, r.executeActionInsideJSNode(r._initializedHandler$Action.bind(r, o.DataConversion.JSNodeParamConverter.from(i, o.DataTypes.DataTypes.Text)), r.callContext(), function(l) {
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
                    r = this.idService;
                return o.Logger.startActiveSpan("OnInitialize", function(i) {
                    i && (i.setAttribute("code.function", "OnInitialize"), i.setAttribute("outsystems.function.key", "16d8197c-f524-454b-87e8-248b777f7a19"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnInitialize"), t = e.callContext(t);
                        var l = new o.DataTypes.VariableHolder;
                        d.logEvent$Action(S.logType.general, "Going to create InlineSVG", t), l.value = d.generateUniqueId$Action(n.variables.internal_ConfigsVar.uniqueIdAttr, t), n.variables.internal_ConfigsVar.uniqueIdAttr = l.value.unique_IDOut, n.variables.internal_ConfigsVar.sVGCodeAttr = n.variables.sVGCodeIn, n.variables.internal_ConfigsVar.extendedClassAttr = n.variables.extendedClassIn, d.inlineSVGCreate$Action(n.variables.internal_ConfigsVar, t), e._registerCallbacks$Action(t)
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
                    r = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("InitializedHandler", function(l) {
                    return l && (l.setAttribute("code.function", "InitializedHandler"), l.setAttribute("outsystems.function.key", "23325e27-1714-4616-ba98-0a2043f685a1"), l.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), l.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                        r.ensureControllerAlive("InitializedHandler"), n = r.callContext(n);
                        var c = new o.DataTypes.VariableHolder(new(r.constructor.getVariableGroupType("OutSystemsUI.Utilities.InlineSVG.InitializedHandler$vars")));
                        return c.value.inlineSVGIdInLocal = t, o.Flow.executeAsyncFlow(function() {
                            return r.initialized$Action(c.value.inlineSVGIdInLocal, n)
                        })
                    }, function() {
                        l && l.end()
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
                    r = this.idService;
                return o.Logger.startActiveSpan("RegisterCallbacks", function(i) {
                    i && (i.setAttribute("code.function", "RegisterCallbacks"), i.setAttribute("outsystems.function.key", "8537c7ac-98fa-46d2-99b7-0bb80061b601"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("RegisterCallbacks"), t = e.callContext(t);
                        var l = new o.DataTypes.VariableHolder;
                        l.value = o.Logger.startActiveSpan("GetCallbackHandlers", function(c) {
                            c && (c.setAttribute("code.function", "GetCallbackHandlers"), c.setAttribute("outsystems.function.key", "9b91d794-4429-4af6-b0bd-2a7253bbdfa6"), c.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), c.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(R, "GetCallbackHandlers", "RegisterCallbacks", {
                                    OnInitialize: o.DataConversion.JSNodeParamConverter.to(null, o.DataTypes.DataTypes.Object)
                                }, function(P) {
                                    var h = new(e.constructor.getVariableGroupType("OutSystemsUI.Utilities.InlineSVG.RegisterCallbacks$getCallbackHandlersJSResult"));
                                    return h.onInitializeOut = o.DataConversion.JSNodeParamConverter.from(P.OnInitialize, o.DataTypes.DataTypes.Object), h
                                }, {
                                    InitializedHandler: e.clientActionProxies.initializedHandler$Action
                                }, {})
                            } finally {
                                c && c.end()
                            }
                        }, 1), d.inlineSVGRegisterCallback$Action(n.variables.internal_ConfigsVar.uniqueIdAttr, S.registeredCallbackEvents.initialized, l.value.onInitializeOut, t)
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
                    r = this.idService;
                return o.Logger.startActiveSpan("OnDestroy", function(i) {
                    i && (i.setAttribute("code.function", "OnDestroy"), i.setAttribute("outsystems.function.key", "a086a83f-7dcf-4c12-9aca-f940817a1ff0"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnDestroy"), t = e.callContext(t), d.inlineSVGDestroy$Action(n.variables.internal_ConfigsVar.uniqueIdAttr, t)
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
                    r = this.idService;
                return o.Logger.startActiveSpan("OnParametersChanged", function(i) {
                    i && (i.setAttribute("code.function", "OnParametersChanged"), i.setAttribute("outsystems.function.key", "a2ff6ca3-3e20-4772-b3c1-180a72b4024f"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnParametersChanged"), t = e.callContext(t), n.variables.sVGCodeIn !== n.variables.internal_ConfigsVar.sVGCodeAttr && (n.variables.internal_ConfigsVar.sVGCodeAttr = n.variables.sVGCodeIn, d.inlineSVGChangeTextProperty$Action(n.variables.internal_ConfigsVar.uniqueIdAttr, "SVGCode", n.variables.sVGCodeIn, t)), n.variables.extendedClassIn !== n.variables.internal_ConfigsVar.extendedClassAttr && (n.variables.internal_ConfigsVar.extendedClassAttr = n.variables.extendedClassIn, d.inlineSVGChangeTextProperty$Action(n.variables.internal_ConfigsVar.uniqueIdAttr, "ExtendedClass", n.variables.extendedClassIn, t))
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
                    r = this.idService;
                return o.Logger.startActiveSpan("OnReady", function(i) {
                    i && (i.setAttribute("code.function", "OnReady"), i.setAttribute("outsystems.function.key", "f87f2c0b-771a-45fe-953d-27cd08e51f3e"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnReady"), t = e.callContext(t), d.inlineSVGInitialize$Action(n.variables.internal_ConfigsVar.uniqueIdAttr, t), d.logEvent$Action(S.logType.general, "InlineSVG created", t)
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
            return o.Logger.startActiveSpan("OnInitialize__proxy", function(e) {
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
            return o.Logger.startActiveSpan("InitializedHandler__proxy", function(r) {
                return r && (r.setAttribute("code.function", "InitializedHandler"), r.setAttribute("outsystems.function.key", "23325e27-1714-4616-ba98-0a2043f685a1"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                    return e.safeExecuteClientAction(e._initializedHandler$Action, n, t)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        registerCallbacks$Action(t) {
            var n = this.controller;
            return o.Logger.startActiveSpan("RegisterCallbacks__proxy", function(e) {
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
            return o.Logger.startActiveSpan("OnDestroy__proxy", function(e) {
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
            return o.Logger.startActiveSpan("OnParametersChanged__proxy", function(e) {
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
            return o.Logger.startActiveSpan("OnReady__proxy", function(e) {
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
                    r = this.idService;
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
                    r = this.idService;
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
                    r = this.idService;
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
                    r = this.idService;
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
    a(s, "ControllerInner");
    let f = s;
    O = f, O.registerVariableGroupType("OutSystemsUI.Utilities.InlineSVG.InitializedHandler$vars", [{
        name: "InlineSVGId",
        attrName: "inlineSVGIdInLocal",
        mandatory: !0,
        dataType: o.DataTypes.DataTypes.Text,
        defaultValue: a(function() {
            return ""
        }, "defaultValue")
    }]), O.registerVariableGroupType("OutSystemsUI.Utilities.InlineSVG.RegisterCallbacks$getCallbackHandlersJSResult", [{
        name: "OnInitialize",
        attrName: "onInitializeOut",
        mandatory: !0,
        dataType: o.DataTypes.DataTypes.Object,
        defaultValue: a(function() {
            return null
        }, "defaultValue")
    }])
}
var O, G = new o.Controller.ControllerFactory(O, z);
var at = g.PlaceholderContent,
    lt = g.IteratorPlaceholderContent,
    A = class A extends I.BaseWebBlock {
        static get displayName() {
            return "Utilities.InlineSVG"
        }
        static getAttributes() {
            return {
                codeFunction: "InlineSVG",
                functionKey: "58181461-a594-47fd-bfd1-2188b1380220",
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
            return N
        }
        get controllerFactory() {
            return G
        }
        get title() {
            return ""
        }
        internalRender() {
            let s = this.model,
                u = this.controller,
                t = this.idService,
                n = u.validationService,
                e = this.widgetsRecordProvider,
                r = u.callContext(),
                i = A.ifWidget,
                l = A.textWidget,
                c = A.asPrimitiveValue,
                P = A.getTranslation,
                h = this;
            return H.createElement("div", this.getRootNodeProperties(), i(!1, !1, this, function() {
                return []
            }, function() {
                return [H.createElement(_, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        name: s.variables.internal_ConfigsVar.uniqueIdAttr,
                        style: "height: 100%;"
                    },
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: "osui-inline-svg svg-wrapper",
                    visible: !0,
                    _idProps: {
                        service: t,
                        name: "SVG"
                    },
                    _widgetRecordProvider: e
                })]
            }))
        }
    };
a(A, "View");
var w = A,
    E = w;
var m = p(D());
var L = {};
var F = v; {
    let s = class s extends F.Controller.BaseViewController {
        constructor(t, n, e) {
            super(t, n, e, L);
            var r = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get leftButtonAction$Action() {
            return this.hasOwnProperty("_leftButtonAction$Action") || (this._leftButtonAction$Action = function() {
                return Promise.resolve()
            }), this._leftButtonAction$Action
        }
        set leftButtonAction$Action(t) {
            this._leftButtonAction$Action = t
        }
        get rightButtonAction$Action() {
            return this.hasOwnProperty("_rightButtonAction$Action") || (this._rightButtonAction$Action = function() {
                return Promise.resolve()
            }), this._rightButtonAction$Action
        }
        set rightButtonAction$Action(t) {
            this._rightButtonAction$Action = t
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(t) {
            this._onInitializeEventHandler = t
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = null), this._onReadyEventHandler
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
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = null), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(t) {
            this._onDestroyEventHandler = t
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
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
            return V.defaultTimeout
        }
    };
    a(s, "ControllerInner");
    let f = s;
    B = f
}
var B, W = new F.Controller.ControllerFactory(B, T);
var C = v,
    Rt = g.PlaceholderContent,
    Ht = g.IteratorPlaceholderContent,
    b = class b extends I.BaseWebBlock {
        static get displayName() {
            return "Common.TitleBlock"
        }
        static getAttributes() {
            return {
                codeFunction: "TitleBlock",
                functionKey: "74ea9030-1992-4562-872b-8ca2e4a9e63c",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Common.TitleBlock.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [E]
        }
        get modelFactory() {
            return x
        }
        get controllerFactory() {
            return W
        }
        get title() {
            return ""
        }
        internalRender() {
            let s = this.model,
                u = this.controller,
                t = this.idService,
                n = u.validationService,
                e = this.widgetsRecordProvider,
                r = u.callContext(),
                i = b.ifWidget,
                l = b.textWidget,
                c = b.asPrimitiveValue,
                P = b.getTranslation,
                h = this;
            return m.createElement("div", this.getRootNodeProperties(), m.createElement(_, {
                align: 0,
                animate: !1,
                style: "custom-title-container",
                visible: !0,
                _idProps: {
                    service: t,
                    name: "Container"
                },
                _widgetRecordProvider: e
            }, m.createElement(_, {
                align: 0,
                animate: !0,
                extendedEvents: {
                    onClick: a(function() {
                        var y = r.clone();
                        u.leftButtonAction$Action(u.callContext(y))
                    }, "onClick")
                },
                visible: s.variables.showLeftButtonIn,
                _idProps: {
                    service: t,
                    uuid: "1"
                },
                _widgetRecordProvider: e,
                visible_dataFetchStatus: C.Model.calculateDataFetchStatus(s.variables._showLeftButtonInDataFetchStatus)
            }, m.createElement(E, {
                getOwnerSpan: a(function() {
                    return h.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return h.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    SVGCode: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M0.125 6.65625L5.625 1.15625C5.8125 0.96875 6.15625 0.96875 6.34375 1.15625C6.53125 1.34375 6.53125 1.6875 6.34375 1.875L1.6875 6.5H13.5C13.75 6.5 14 6.75 14 7C14 7.28125 13.75 7.5 13.5 7.5H1.6875L6.34375 12.1562C6.53125 12.3438 6.53125 12.6875 6.34375 12.875C6.15625 13.0625 5.8125 13.0625 5.625 12.875L0.125 7.375C-0.0625 7.1875 -0.0625 6.84375 0.125 6.65625Z" fill="#101213"/>\r
</svg>`,
                    ExtendedClass: "custom-svg"
                },
                events: {
                    _handleError: a(function(y) {
                        u.handleError(y)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: n
                },
                _idProps: {
                    service: t,
                    uuid: "2",
                    alias: "1"
                },
                _widgetRecordProvider: e,
                _dependencies: []
            })), m.createElement(_, {
                align: 0,
                animate: !1,
                style: "title",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "3"
                },
                _widgetRecordProvider: e
            }, m.createElement(k, {
                value: s.variables.titleIn,
                _idProps: {
                    service: t,
                    uuid: "4"
                },
                _widgetRecordProvider: e,
                value_dataFetchStatus: C.Model.calculateDataFetchStatus(s.variables._titleInDataFetchStatus)
            })), m.createElement(_, {
                align: 0,
                animate: !0,
                extendedEvents: {
                    onClick: a(function() {
                        var y = r.clone();
                        u.rightButtonAction$Action(u.callContext(y))
                    }, "onClick")
                },
                extendedProperties: {
                    style: "cursor: pointer;"
                },
                visible: s.variables.showRightButtonIn,
                _idProps: {
                    service: t,
                    uuid: "5"
                },
                _widgetRecordProvider: e,
                visible_dataFetchStatus: C.Model.calculateDataFetchStatus(s.variables._showRightButtonInDataFetchStatus)
            }, m.createElement(E, {
                getOwnerSpan: a(function() {
                    return h.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return h.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    SVGCode: s.getCachedValue(t.getId("nrjRP77vN0iTdukCDHG8WA.SVGCode"), function() {
                        return s.variables.customRightIconIn !== C.BuiltinFunctions.nullTextIdentifier() ? s.variables.customRightIconIn : `<svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M12.1562 12.5938L7 7.39844L1.80469 12.5938C1.57031 12.8281 1.17969 12.8281 0.90625 12.5938C0.671875 12.3203 0.671875 11.9297 0.90625 11.6953L6.10156 6.5L0.945312 1.34375C0.671875 1.10938 0.671875 0.71875 0.945312 0.445312C1.17969 0.210938 1.57031 0.210938 1.80469 0.445312L7 5.64062L12.1562 0.445312C12.3906 0.210938 12.7812 0.210938 13.0547 0.445312C13.2891 0.71875 13.2891 1.10938 13.0547 1.34375L7.85938 6.5L13.0547 11.6953C13.2891 11.9297 13.2891 12.3203 13.0547 12.5938C12.7812 12.8281 12.3906 12.8281 12.1562 12.5938Z" fill="#101213"/>\r
</svg>\r
`
                    }, function() {
                        return s.variables.customRightIconIn
                    }),
                    _sVGCodeInDataFetchStatus: C.Model.calculateDataFetchStatus(s.variables._customRightIconInDataFetchStatus),
                    ExtendedClass: "custom-svg"
                },
                events: {
                    _handleError: a(function(y) {
                        u.handleError(y)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: n
                },
                _idProps: {
                    service: t,
                    uuid: "6",
                    alias: "2"
                },
                _widgetRecordProvider: e,
                _dependencies: []
            }))))
        }
    };
a(b, "View");
var $ = b,
    wt = $;
export {
    E as a, wt as b
};