import {
    b as q
} from "./_oschunk-GPNNXU3M.js";
import {
    d as p,
    k as _,
    n as P,
    p as I,
    r as C
} from "./_oschunk-M2CKCDBB.js";
import {
    a as T
} from "./_oschunk-NQZZDANH.js";
import {
    a as x,
    g as S,
    i as y
} from "./_oschunk-WZHUAZJP.js";
import {
    a as J,
    b as G,
    c as K
} from "./_oschunk-5MMGFCSA.js";
import {
    m as k,
    o as H
} from "./_oschunk-KZFTAIEG.js";
import {
    ia as f
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as i,
    h as N
} from "./_oschunk-QHO7QY6K.js";
var w = N(x());
var Q = {};

function $(d, o, u, e) {
    var r = document.body,
        t = {
            attributes: !0
        },
        a = i(function() {
            o.OnInitialize()
        }, "callback"),
        n = new MutationObserver(a);
    n.observe(r, t), d.ObserverObject = n
}
i($, "default");

function L(d, o, u, e) {
    d.ObserverObj.disconnect()
}
i(L, "default");
var s = f; {
    let o = class o extends s.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, Q);
            var a = this.controller;
            this.clientActionProxies = {
                onInitialize$Action: i(function() {
                    return a.executeActionInsideJSNode(a._onInitialize$Action.bind(a), a.callContext(), function(n) {
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
                var r = this.model,
                    t = this.controller,
                    a = this.idService;
                return s.Logger.startActiveSpan("OnReady", function(n) {
                    n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "3a59998d-3d1e-438e-aa1d-db0acfb7eac0"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var l = new s.DataTypes.VariableHolder;
                        l.value = s.Logger.startActiveSpan("SetMutationObserver", function(v) {
                            v && (v.setAttribute("code.function", "SetMutationObserver"), v.setAttribute("outsystems.function.key", "17fc1e21-6f89-445f-826c-66b3f0e037e1"), v.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), v.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), v.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode($, "SetMutationObserver", "OnReady", {
                                    ObserverObject: s.DataConversion.JSNodeParamConverter.to(null, s.DataTypes.DataTypes.Object)
                                }, function(D) {
                                    var h = new(t.constructor.getVariableGroupType("OutSystemsUI.Adaptive.DisplayOnDevice.OnReady$setMutationObserverJSResult"));
                                    return h.observerObjectOut = s.DataConversion.JSNodeParamConverter.from(D.ObserverObject, s.DataTypes.DataTypes.Object), h
                                }, {
                                    OnInitialize: t.clientActionProxies.onInitialize$Action
                                }, {})
                            } finally {
                                v && v.end()
                            }
                        }, 1), r.variables.observerObjVar = l.value.observerObjectOut
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    a = this.idService;
                return s.Logger.startActiveSpan("OnInitialize", function(n) {
                    n && (n.setAttribute("code.function", "OnInitialize"), n.setAttribute("outsystems.function.key", "aa6965a4-a4bb-450f-81b9-b30965be2c54"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e);
                        var l = new s.DataTypes.VariableHolder;
                        l.value = k.getDeviceType$Action(e), r.variables.deviceVar = l.value.deviceOut
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    a = this.idService;
                return s.Logger.startActiveSpan("OnDestroy", function(n) {
                    n && (n.setAttribute("code.function", "OnDestroy"), n.setAttribute("outsystems.function.key", "ab246169-3e95-4086-a1d3-3ba8a82eb2dc"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnDestroy"), e = t.callContext(e), s.Logger.startActiveSpan("StopObserver", function(l) {
                            l && (l.setAttribute("code.function", "StopObserver"), l.setAttribute("outsystems.function.key", "02e1979d-774c-4d7f-b036-c14402c6d16a"), l.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), l.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), l.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(L, "StopObserver", "OnDestroy", {
                                    ObserverObj: s.DataConversion.JSNodeParamConverter.to(r.variables.observerObjVar, s.DataTypes.DataTypes.Object)
                                }, function(v) {}, {}, {})
                            } finally {
                                l && l.end()
                            }
                        }, 1)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(e) {
            this.__onDestroy$Action = e
        }
        onReady$Action(e) {
            var r = this.controller;
            return s.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "3a59998d-3d1e-438e-aa1d-db0acfb7eac0"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onInitialize$Action(e) {
            var r = this.controller;
            return s.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "aa6965a4-a4bb-450f-81b9-b30965be2c54"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onInitialize$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onDestroy$Action(e) {
            var r = this.controller;
            return s.Logger.startActiveSpan("OnDestroy__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnDestroy"), t.setAttribute("outsystems.function.key", "ab246169-3e95-4086-a1d3-3ba8a82eb2dc"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onDestroy$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    a = this.idService;
                return r.onInitialize$Action(e)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    a = this.idService;
                return r.onReady$Action(e)
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
                var r = this.controller,
                    t = this.model,
                    a = this.idService;
                return r.onDestroy$Action(e)
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
            return k.defaultTimeout
        }
    };
    i(o, "ControllerInner");
    let d = o;
    V = d, V.registerVariableGroupType("OutSystemsUI.Adaptive.DisplayOnDevice.OnReady$setMutationObserverJSResult", [{
        name: "ObserverObject",
        attrName: "observerObjectOut",
        mandatory: !0,
        dataType: s.DataTypes.DataTypes.Object,
        defaultValue: i(function() {
            return null
        }, "defaultValue")
    }])
}
var V, X = new s.Controller.ControllerFactory(V, q);
var Ee = y.PlaceholderContent,
    Se = y.IteratorPlaceholderContent,
    A = class A extends S.BaseWebBlock {
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
            return J
        }
        get controllerFactory() {
            return X
        }
        get title() {
            return ""
        }
        internalRender() {
            let o = this.model,
                u = this.controller,
                e = this.idService,
                r = u.validationService,
                t = this.widgetsRecordProvider,
                a = u.callContext(),
                n = A.ifWidget,
                l = A.textWidget,
                v = A.asPrimitiveValue,
                D = A.getTranslation,
                h = this;
            return w.createElement("div", this.getRootNodeProperties(), n(o.variables.deviceVar === "desktop", !1, this, function() {
                return [w.createElement(I, {
                    align: 0,
                    content: h.props.placeholders.onDesktop,
                    style: "display-on-device-desktop",
                    _idProps: {
                        service: e,
                        name: "OnDesktop"
                    },
                    _widgetRecordProvider: t
                })]
            }, function() {
                return []
            }), n(o.variables.deviceVar === "tablet", !1, this, function() {
                return [w.createElement(I, {
                    align: 0,
                    content: h.props.placeholders.onTablet,
                    style: "display-on-device-tablet",
                    _idProps: {
                        service: e,
                        name: "OnTablet"
                    },
                    _widgetRecordProvider: t
                })]
            }, function() {
                return []
            }), n(o.variables.deviceVar === "phone", !1, this, function() {
                return [w.createElement(I, {
                    align: 0,
                    content: h.props.placeholders.onPhone,
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
i(A, "View");
var W = A,
    U = W;
var O = N(x());
var g = f; {
    let o = class o extends g.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t);
            var a = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _applicationNameOnClick$Action() {
            return this.hasOwnProperty("__applicationNameOnClick$Action") || (this.__applicationNameOnClick$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    a = this.idService;
                return g.Logger.startActiveSpan("ApplicationNameOnClick", function(n) {
                    n && (n.setAttribute("code.function", "ApplicationNameOnClick"), n.setAttribute("outsystems.function.key", "cc810bf7-d904-4d64-9043-7ed6198ce78b"), n.setAttribute("outsystems.function.owner.name", "Accounts"), n.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("ApplicationNameOnClick"), e = t.callContext(e), g.Navigation.navigateTo(g.Navigation.generateScreenURL(g.BuiltinFunctions.getOwnerURLPath(), {}), g.Transitions.createTransition(g.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__applicationNameOnClick$Action
        }
        set _applicationNameOnClick$Action(e) {
            this.__applicationNameOnClick$Action = e
        }
        applicationNameOnClick$Action(e) {
            var r = this.controller;
            return g.Logger.startActiveSpan("ApplicationNameOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "ApplicationNameOnClick"), t.setAttribute("outsystems.function.key", "cc810bf7-d904-4d64-9043-7ed6198ce78b"), t.setAttribute("outsystems.function.owner.name", "Accounts"), t.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._applicationNameOnClick$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = null), this._onReadyEventHandler
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
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = null), this._onDestroyEventHandler
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
            return H.defaultTimeout
        }
    };
    i(o, "ControllerInner");
    let d = o;
    ee = d
}
var ee, te = new g.Controller.ControllerFactory(ee, T);
var F = f,
    z = y.PlaceholderContent,
    Ue = y.IteratorPlaceholderContent,
    b = class b extends S.BaseWebBlock {
        static get displayName() {
            return "Common.ApplicationTitle"
        }
        static getAttributes() {
            return {
                codeFunction: "ApplicationTitle",
                functionKey: "99261221-5631-4dea-b701-80292a8a29bf",
                functionOwnerName: "Accounts",
                functionOwnerKey: "8a32fa32-34f5-4338-b6db-4f1ce8fdd638",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/Accounts.Common.ApplicationTitle.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [U]
        }
        get modelFactory() {
            return G
        }
        get controllerFactory() {
            return te
        }
        get title() {
            return ""
        }
        internalRender() {
            let o = this.model,
                u = this.controller,
                e = this.idService,
                r = u.validationService,
                t = this.widgetsRecordProvider,
                a = u.callContext(),
                n = b.ifWidget,
                l = b.textWidget,
                v = b.asPrimitiveValue,
                D = b.getTranslation,
                h = this;
            return O.createElement("div", this.getRootNodeProperties(), O.createElement(p, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: i(function() {
                        var R = a.clone();
                        u.applicationNameOnClick$Action(u.callContext(R))
                    }, "onClick")
                },
                extendedProperties: {
                    role: "button",
                    tabIndex: "0"
                },
                style: "application-name",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ApplicationTitleWrapper"
                },
                _widgetRecordProvider: t
            }, O.createElement(U, {
                getOwnerSpan: i(function() {
                    return h.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: i(function() {
                    return h.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: i(function(R) {
                        u.handleError(R)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: r
                },
                _idProps: {
                    service: e,
                    uuid: "1",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    onDesktop: new z(function() {
                        return [O.createElement(_, {
                            extendedProperties: {
                                alt: "",
                                style: "height: 32px;"
                            },
                            image: F.Navigation.VersionedURL.getVersionedUrl("img/Accounts.DerivLogo_32.png"),
                            type: 0,
                            _idProps: {
                                service: e,
                                name: "AppLogoDesktop"
                            },
                            _widgetRecordProvider: t
                        })]
                    }),
                    onTablet: new z(function() {
                        return [O.createElement(_, {
                            extendedProperties: {
                                alt: "",
                                style: "height: 32px;"
                            },
                            image: F.Navigation.VersionedURL.getVersionedUrl("img/Accounts.DerivLogo_32.png"),
                            type: 0,
                            _idProps: {
                                service: e,
                                name: "AppLogoTablet"
                            },
                            _widgetRecordProvider: t
                        })]
                    }),
                    onPhone: new z(function() {
                        return [O.createElement(_, {
                            image: F.Navigation.VersionedURL.getVersionedUrl("img/Accounts.DerivLogo_24.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                name: "AppLogoMobile"
                            },
                            _widgetRecordProvider: t
                        })]
                    })
                },
                _dependencies: []
            })))
        }
    };
i(b, "View");
var M = b,
    B = M;
var c = N(x());
var ne = f; {
    let o = class o extends ne.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t);
            var a = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = null), this._onReadyEventHandler
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
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = null), this._onDestroyEventHandler
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
            return H.defaultTimeout
        }
    };
    i(o, "ControllerInner");
    let d = o;
    re = d
}
var re, ie = new ne.Controller.ControllerFactory(re, T);
var m = f,
    nt = y.PlaceholderContent,
    rt = y.IteratorPlaceholderContent,
    E = class E extends S.BaseWebBlock {
        static get displayName() {
            return "Layouts.DesktopLayoutTop"
        }
        static getAttributes() {
            return {
                codeFunction: "DesktopLayoutTop",
                functionKey: "d9cb31df-6cca-4b84-bd77-d5c86a222108",
                functionOwnerName: "Accounts",
                functionOwnerKey: "8a32fa32-34f5-4338-b6db-4f1ce8fdd638",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/Accounts.Layouts.DesktopLayoutTop.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [B]
        }
        get modelFactory() {
            return K
        }
        get controllerFactory() {
            return ie
        }
        get title() {
            return ""
        }
        internalRender() {
            let o = this.model,
                u = this.controller,
                e = this.idService,
                r = u.validationService,
                t = this.widgetsRecordProvider,
                a = u.callContext(),
                n = E.ifWidget,
                l = E.textWidget,
                v = E.asPrimitiveValue,
                D = E.getTranslation,
                h = this;
            return c.createElement("div", this.getRootNodeProperties(), c.createElement(p, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "height: 56px;"
                },
                style: "layout-header-dektop header-top",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, c.createElement(p, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }, c.createElement(B, {
                getOwnerSpan: i(function() {
                    return h.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: i(function() {
                    return h.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: i(function(R) {
                        u.handleError(R)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: r
                },
                _idProps: {
                    service: e,
                    uuid: "2",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                _dependencies: []
            })), c.createElement(p, {
                align: 0,
                animate: !1,
                style: "full-width display-flex",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "3"
                },
                _widgetRecordProvider: t
            }, c.createElement(p, {
                align: 0,
                animate: !1,
                style: "full-width",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "4"
                },
                _widgetRecordProvider: t
            }, c.createElement(P, {
                enabled: !0,
                transition: m.Transitions.createTransition(m.Transitions.TransitionAnimation.Default),
                url: m.Navigation.generateScreenURL("Accounts", "Profile", {}),
                visible: !0,
                _idProps: {
                    service: e,
                    name: "Hub"
                },
                _widgetRecordProvider: t
            }, c.createElement(C, {
                style: "layout-header-desktop--link",
                text: ["Hub"],
                _idProps: {
                    service: e,
                    uuid: "6"
                },
                _widgetRecordProvider: t
            })), c.createElement(P, {
                enabled: !0,
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                transition: m.Transitions.createTransition(m.Transitions.TransitionAnimation.Default),
                url: m.Navigation.generateScreenURL("Accounts", "Profile", {}),
                visible: !0,
                _idProps: {
                    service: e,
                    name: "CFDs"
                },
                _widgetRecordProvider: t
            }, c.createElement(C, {
                style: "layout-header-desktop--link",
                text: ["CFDs"],
                _idProps: {
                    service: e,
                    uuid: "8"
                },
                _widgetRecordProvider: t
            })), c.createElement(P, {
                enabled: !0,
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                transition: m.Transitions.createTransition(m.Transitions.TransitionAnimation.Default),
                url: m.Navigation.generateScreenURL("Accounts", "Profile", {}),
                visible: !0,
                _idProps: {
                    service: e,
                    name: "Options"
                },
                _widgetRecordProvider: t
            }, c.createElement(C, {
                style: "layout-header-desktop--link",
                text: ["Options"],
                _idProps: {
                    service: e,
                    uuid: "10"
                },
                _widgetRecordProvider: t
            })), c.createElement(P, {
                enabled: !0,
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                transition: m.Transitions.createTransition(m.Transitions.TransitionAnimation.Default),
                url: m.Navigation.generateScreenURL("Accounts", "Profile", {}),
                visible: !0,
                _idProps: {
                    service: e,
                    name: "Wallets"
                },
                _widgetRecordProvider: t
            }, c.createElement(C, {
                style: "layout-header-desktop--link",
                text: ["Wallets"],
                _idProps: {
                    service: e,
                    uuid: "12"
                },
                _widgetRecordProvider: t
            }))), c.createElement(p, {
                align: 0,
                animate: !1,
                style: "display-flex column-gap-m",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "13"
                },
                _widgetRecordProvider: t
            }, c.createElement(_, {
                image: m.Navigation.VersionedURL.getVersionedUrl("img/Accounts.LabelPairedBellMdRegularIcon.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    name: "NotificationIcon"
                },
                _widgetRecordProvider: t
            }), c.createElement(_, {
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                image: m.Navigation.VersionedURL.getVersionedUrl("img/Accounts.LabelPairedCircleUserMdBoldIcon.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    name: "User"
                },
                _widgetRecordProvider: t
            })))))
        }
    };
i(E, "View");
var j = E,
    it = j;
export {
    U as a, B as b, it as c
};