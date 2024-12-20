import {
    a as D
} from "./_oschunk-JGA2446S.js";
import {
    a as p
} from "./_oschunk-VWJXDAKN.js";
import {
    w as m
} from "./_oschunk-E7JQAU4J.js";
import {
    a as w,
    g as I,
    i as h
} from "./_oschunk-T77XORCW.js";
import {
    l as O
} from "./_oschunk-OOUVJ7PM.js";
import {
    ia as b
} from "./_oschunk-5EPHB76O.js";
import {
    c as a,
    g as P
} from "./_oschunk-DVBKI63I.js";
var v = P(w());
var R = {};

function A(u, c, f, e) {
    var n = document.body,
        t = {
            attributes: !0
        },
        s = a(function() {
            c.OnInitialize()
        }, "callback"),
        r = new MutationObserver(s);
    r.observe(n, t), u.ObserverObject = r
}
a(A, "default");

function _(u, c, f, e) {
    u.ObserverObj.disconnect()
}
a(_, "default");
var i = b; {
    let c = class c extends i.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, R);
            var s = this.controller;
            this.clientActionProxies = {
                onInitialize$Action: a(function() {
                    return s.executeActionInsideJSNode(s._onInitialize$Action.bind(s), s.callContext(), function(r) {
                        return {}
                    }, function() {}, "OnInitialize")
                }, "onInitialize$Action")
            }, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    s = this.idService;
                return i.Logger.startActiveSpan("OnReady", function(r) {
                    r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "3a59998d-3d1e-438e-aa1d-db0acfb7eac0"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var o = new i.DataTypes.VariableHolder;
                        o.value = i.Logger.startActiveSpan("SetMutationObserver", function(l) {
                            l && (l.setAttribute("code.function", "SetMutationObserver"), l.setAttribute("outsystems.function.key", "17fc1e21-6f89-445f-826c-66b3f0e037e1"), l.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), l.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), l.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(A, "SetMutationObserver", "OnReady", {
                                    ObserverObject: i.DataConversion.JSNodeParamConverter.to(null, i.DataTypes.DataTypes.Object)
                                }, function(E) {
                                    var y = new(t.constructor.getVariableGroupType("OutSystemsUI.Adaptive.DisplayOnDevice.OnReady$setMutationObserverJSResult"));
                                    return y.observerObjectOut = i.DataConversion.JSNodeParamConverter.from(E.ObserverObject, i.DataTypes.DataTypes.Object), y
                                }, {
                                    OnInitialize: t.clientActionProxies.onInitialize$Action
                                }, {})
                            } finally {
                                l && l.end()
                            }
                        }, 1), n.variables.observerObjVar = o.value.observerObjectOut
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    s = this.idService;
                return i.Logger.startActiveSpan("OnInitialize", function(r) {
                    r && (r.setAttribute("code.function", "OnInitialize"), r.setAttribute("outsystems.function.key", "aa6965a4-a4bb-450f-81b9-b30965be2c54"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e);
                        var o = new i.DataTypes.VariableHolder;
                        o.value = O.getDeviceType$Action(e), n.variables.deviceVar = o.value.deviceOut
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    s = this.idService;
                return i.Logger.startActiveSpan("OnDestroy", function(r) {
                    r && (r.setAttribute("code.function", "OnDestroy"), r.setAttribute("outsystems.function.key", "ab246169-3e95-4086-a1d3-3ba8a82eb2dc"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnDestroy"), e = t.callContext(e), i.Logger.startActiveSpan("StopObserver", function(o) {
                            o && (o.setAttribute("code.function", "StopObserver"), o.setAttribute("outsystems.function.key", "02e1979d-774c-4d7f-b036-c14402c6d16a"), o.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), o.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(_, "StopObserver", "OnDestroy", {
                                    ObserverObj: i.DataConversion.JSNodeParamConverter.to(n.variables.observerObjVar, i.DataTypes.DataTypes.Object)
                                }, function(l) {}, {}, {})
                            } finally {
                                o && o.end()
                            }
                        }, 1)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(e) {
            this.__onDestroy$Action = e
        }
        onReady$Action(e) {
            var n = this.controller;
            return i.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "3a59998d-3d1e-438e-aa1d-db0acfb7eac0"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onReady$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onInitialize$Action(e) {
            var n = this.controller;
            return i.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "aa6965a4-a4bb-450f-81b9-b30965be2c54"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onInitialize$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onDestroy$Action(e) {
            var n = this.controller;
            return i.Logger.startActiveSpan("OnDestroy__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnDestroy"), t.setAttribute("outsystems.function.key", "ab246169-3e95-4086-a1d3-3ba8a82eb2dc"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onDestroy$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var n = this.controller,
                    t = this.model,
                    s = this.idService;
                return n.onInitialize$Action(e)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var n = this.controller,
                    t = this.model,
                    s = this.idService;
                return n.onReady$Action(e)
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
                var n = this.controller,
                    t = this.model,
                    s = this.idService;
                return n.onDestroy$Action(e)
            }), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(e) {
            this._onDestroyEventHandler = e
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
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
            return O.defaultTimeout
        }
    };
    a(c, "ControllerInner");
    let u = c;
    S = u, S.registerVariableGroupType("OutSystemsUI.Adaptive.DisplayOnDevice.OnReady$setMutationObserverJSResult", [{
        name: "ObserverObject",
        attrName: "observerObjectOut",
        mandatory: !0,
        dataType: i.DataTypes.DataTypes.Object,
        defaultValue: a(function() {
            return null
        }, "defaultValue")
    }])
}
var S, C = new i.Controller.ControllerFactory(S, p);
var Q = h.PlaceholderContent,
    X = h.IteratorPlaceholderContent,
    d = class d extends I.BaseWebBlock {
        static get displayName() {
            return "Adaptive.DisplayOnDevice"
        }
        static getAttributes() {
            return {
                codeFunction: "DisplayOnDevice",
                functionKey: "558f2ce5-0350-4196-8060-44e236bc40af",
                functionOwnerName: "OutSystemsUI",
                functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return D
        }
        get controllerFactory() {
            return C
        }
        get title() {
            return ""
        }
        internalRender() {
            let c = this.model,
                f = this.controller,
                e = this.idService,
                n = f.validationService,
                t = this.widgetsRecordProvider,
                s = f.callContext(),
                r = d.ifWidget,
                o = d.textWidget,
                l = d.asPrimitiveValue,
                E = d.getTranslation,
                y = this;
            return v.createElement("div", this.getRootNodeProperties(), r(c.variables.deviceVar === "desktop", !1, this, function() {
                return [v.createElement(m, {
                    align: 0,
                    content: y.props.placeholders.onDesktop,
                    style: "display-on-device-desktop",
                    _idProps: {
                        service: e,
                        name: "OnDesktop"
                    },
                    _widgetRecordProvider: t
                })]
            }, function() {
                return []
            }), r(c.variables.deviceVar === "tablet", !1, this, function() {
                return [v.createElement(m, {
                    align: 0,
                    content: y.props.placeholders.onTablet,
                    style: "display-on-device-tablet",
                    _idProps: {
                        service: e,
                        name: "OnTablet"
                    },
                    _widgetRecordProvider: t
                })]
            }, function() {
                return []
            }), r(c.variables.deviceVar === "phone", !1, this, function() {
                return [v.createElement(m, {
                    align: 0,
                    content: y.props.placeholders.onPhone,
                    style: "display-on-device-phone",
                    _idProps: {
                        service: e,
                        name: "OnPhone"
                    },
                    _widgetRecordProvider: t
                })]
            }, function() {
                return []
            }))
        }
    };
a(d, "View");
var g = d,
    Y = g;
export {
    Y as a
};