import {
    a as $
} from "./_oschunk-CXWYKNLS.js";
import {
    a as E
} from "./_oschunk-NR4KXK35.js";
import {
    d as O
} from "./_oschunk-OO36B6PN.js";
import {
    a as V,
    g as S,
    i as _
} from "./_oschunk-IL57OEHH.js";
import {
    o as l
} from "./_oschunk-DW3HXDMW.js";
import {
    hd as y
} from "./_oschunk-JXJHSAQS.js";
import {
    ia as v
} from "./_oschunk-5KJVGEL7.js";
import {
    c,
    h as H
} from "./_oschunk-QHO7QY6K.js";
var C = H(V());
var R = {};

function h(f, u, A, t) {
    f.OnInitialize = u.InitializedHandler
}
c(h, "default");
var r = v; {
    let u = class u extends r.Controller.BaseViewController {
        constructor(t, i, e) {
            super(t, i, e, R);
            var o = this.controller;
            this.clientActionProxies = {
                initializedHandler$Action: c(function(n) {
                    return n = n === void 0 ? "" : n, o.executeActionInsideJSNode(o._initializedHandler$Action.bind(o, r.DataConversion.JSNodeParamConverter.from(n, r.DataTypes.DataTypes.Text)), o.callContext(), function(s) {
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
                var i = this.model,
                    e = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("OnInitialize", function(n) {
                    n && (n.setAttribute("code.function", "OnInitialize"), n.setAttribute("outsystems.function.key", "16d8197c-f524-454b-87e8-248b777f7a19"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnInitialize"), t = e.callContext(t);
                        var s = new r.DataTypes.VariableHolder;
                        l.logEvent$Action(y.logType.general, "Going to create InlineSVG", t), s.value = l.generateUniqueId$Action(i.variables.internal_ConfigsVar.uniqueIdAttr, t), i.variables.internal_ConfigsVar.uniqueIdAttr = s.value.unique_IDOut, i.variables.internal_ConfigsVar.sVGCodeAttr = i.variables.sVGCodeIn, i.variables.internal_ConfigsVar.extendedClassAttr = i.variables.extendedClassIn, l.inlineSVGCreate$Action(i.variables.internal_ConfigsVar, t), e._registerCallbacks$Action(t)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(t) {
            this.__onInitialize$Action = t
        }
        get _initializedHandler$Action() {
            return this.hasOwnProperty("__initializedHandler$Action") || (this.__initializedHandler$Action = function(t, i) {
                var e = this.model,
                    o = this.controller,
                    n = this.idService;
                return r.Logger.startActiveSpan("InitializedHandler", function(s) {
                    return s && (s.setAttribute("code.function", "InitializedHandler"), s.setAttribute("outsystems.function.key", "23325e27-1714-4616-ba98-0a2043f685a1"), s.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), s.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        o.ensureControllerAlive("InitializedHandler"), i = o.callContext(i);
                        var a = new r.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("OutSystemsUI.Utilities.InlineSVG.InitializedHandler$vars")));
                        return a.value.inlineSVGIdInLocal = t, r.Flow.executeAsyncFlow(function() {
                            return o.initialized$Action(a.value.inlineSVGIdInLocal, i)
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
                var i = this.model,
                    e = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("RegisterCallbacks", function(n) {
                    n && (n.setAttribute("code.function", "RegisterCallbacks"), n.setAttribute("outsystems.function.key", "8537c7ac-98fa-46d2-99b7-0bb80061b601"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("RegisterCallbacks"), t = e.callContext(t);
                        var s = new r.DataTypes.VariableHolder;
                        s.value = r.Logger.startActiveSpan("GetCallbackHandlers", function(a) {
                            a && (a.setAttribute("code.function", "GetCallbackHandlers"), a.setAttribute("outsystems.function.key", "9b91d794-4429-4af6-b0bd-2a7253bbdfa6"), a.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), a.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(h, "GetCallbackHandlers", "RegisterCallbacks", {
                                    OnInitialize: r.DataConversion.JSNodeParamConverter.to(null, r.DataTypes.DataTypes.Object)
                                }, function(I) {
                                    var b = new(e.constructor.getVariableGroupType("OutSystemsUI.Utilities.InlineSVG.RegisterCallbacks$getCallbackHandlersJSResult"));
                                    return b.onInitializeOut = r.DataConversion.JSNodeParamConverter.from(I.OnInitialize, r.DataTypes.DataTypes.Object), b
                                }, {
                                    InitializedHandler: e.clientActionProxies.initializedHandler$Action
                                }, {})
                            } finally {
                                a && a.end()
                            }
                        }, 1), l.inlineSVGRegisterCallback$Action(i.variables.internal_ConfigsVar.uniqueIdAttr, y.registeredCallbackEvents.initialized, s.value.onInitializeOut, t)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__registerCallbacks$Action
        }
        set _registerCallbacks$Action(t) {
            this.__registerCallbacks$Action = t
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(t) {
                var i = this.model,
                    e = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("OnDestroy", function(n) {
                    n && (n.setAttribute("code.function", "OnDestroy"), n.setAttribute("outsystems.function.key", "a086a83f-7dcf-4c12-9aca-f940817a1ff0"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnDestroy"), t = e.callContext(t), l.inlineSVGDestroy$Action(i.variables.internal_ConfigsVar.uniqueIdAttr, t)
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
                    n && (n.setAttribute("code.function", "OnParametersChanged"), n.setAttribute("outsystems.function.key", "a2ff6ca3-3e20-4772-b3c1-180a72b4024f"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnParametersChanged"), t = e.callContext(t), i.variables.sVGCodeIn !== i.variables.internal_ConfigsVar.sVGCodeAttr && (i.variables.internal_ConfigsVar.sVGCodeAttr = i.variables.sVGCodeIn, l.inlineSVGChangeTextProperty$Action(i.variables.internal_ConfigsVar.uniqueIdAttr, "SVGCode", i.variables.sVGCodeIn, t)), i.variables.extendedClassIn !== i.variables.internal_ConfigsVar.extendedClassAttr && (i.variables.internal_ConfigsVar.extendedClassAttr = i.variables.extendedClassIn, l.inlineSVGChangeTextProperty$Action(i.variables.internal_ConfigsVar.uniqueIdAttr, "ExtendedClass", i.variables.extendedClassIn, t))
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(t) {
            this.__onParametersChanged$Action = t
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(t) {
                var i = this.model,
                    e = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("OnReady", function(n) {
                    n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "f87f2c0b-771a-45fe-953d-27cd08e51f3e"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnReady"), t = e.callContext(t), l.inlineSVGInitialize$Action(i.variables.internal_ConfigsVar.uniqueIdAttr, t), l.logEvent$Action(y.logType.general, "InlineSVG created", t)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(t) {
            this.__onReady$Action = t
        }
        onInitialize$Action(t) {
            var i = this.controller;
            return r.Logger.startActiveSpan("OnInitialize__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnInitialize"), e.setAttribute("outsystems.function.key", "16d8197c-f524-454b-87e8-248b777f7a19"), e.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), e.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onInitialize$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        initializedHandler$Action(t, i) {
            var e = this.controller;
            return r.Logger.startActiveSpan("InitializedHandler__proxy", function(o) {
                return o && (o.setAttribute("code.function", "InitializedHandler"), o.setAttribute("outsystems.function.key", "23325e27-1714-4616-ba98-0a2043f685a1"), o.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), o.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return e.safeExecuteClientAction(e._initializedHandler$Action, i, t)
                }, function() {
                    o && o.end()
                })
            }, 0)
        }
        registerCallbacks$Action(t) {
            var i = this.controller;
            return r.Logger.startActiveSpan("RegisterCallbacks__proxy", function(e) {
                e && (e.setAttribute("code.function", "RegisterCallbacks"), e.setAttribute("outsystems.function.key", "8537c7ac-98fa-46d2-99b7-0bb80061b601"), e.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), e.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._registerCallbacks$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onDestroy$Action(t) {
            var i = this.controller;
            return r.Logger.startActiveSpan("OnDestroy__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnDestroy"), e.setAttribute("outsystems.function.key", "a086a83f-7dcf-4c12-9aca-f940817a1ff0"), e.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), e.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
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
                e && (e.setAttribute("code.function", "OnParametersChanged"), e.setAttribute("outsystems.function.key", "a2ff6ca3-3e20-4772-b3c1-180a72b4024f"), e.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), e.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onParametersChanged$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onReady$Action(t) {
            var i = this.controller;
            return r.Logger.startActiveSpan("OnReady__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnReady"), e.setAttribute("outsystems.function.key", "f87f2c0b-771a-45fe-953d-27cd08e51f3e"), e.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), e.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
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
    m = f, m.registerVariableGroupType("OutSystemsUI.Utilities.InlineSVG.InitializedHandler$vars", [{
        name: "InlineSVGId",
        attrName: "inlineSVGIdInLocal",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }]), m.registerVariableGroupType("OutSystemsUI.Utilities.InlineSVG.RegisterCallbacks$getCallbackHandlersJSResult", [{
        name: "OnInitialize",
        attrName: "onInitializeOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Object,
        defaultValue: c(function() {
            return null
        }, "defaultValue")
    }])
}
var m, w = new r.Controller.ControllerFactory(m, E);
var B = _.PlaceholderContent,
    M = _.IteratorPlaceholderContent,
    d = class d extends S.BaseWebBlock {
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
                s = d.textWidget,
                a = d.asPrimitiveValue,
                I = d.getTranslation,
                b = this;
            return C.createElement("div", this.getRootNodeProperties(), n(!1, !1, this, function() {
                return []
            }, function() {
                return [C.createElement(O, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        name: u.variables.internal_ConfigsVar.uniqueIdAttr,
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
c(d, "View");
var g = d,
    K = g;
export {
    K as a
};