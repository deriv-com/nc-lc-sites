import {
    a as N,
    b as F
} from "./_oschunk-B6DT67A3.js";
import {
    a as C
} from "./_oschunk-DIUYBKDG.js";
import {
    a as _
} from "./_oschunk-B5VQOPQY.js";
import {
    s as A
} from "./_oschunk-5HXBKFJV.js";
import {
    a as b
} from "./_oschunk-6WALBPGV.js";
import {
    a as I,
    g as H,
    i as v
} from "./_oschunk-2Q3BG5XZ.js";
import {
    a as y,
    p as g
} from "./_oschunk-FZ6FUHBV.js";
import {
    ia as m
} from "./_oschunk-5KJVGEL7.js";
import {
    c as o,
    h as L
} from "./_oschunk-QHO7QY6K.js";
var P = L(I());
var k = {};
var D = m; {
    let s = class s extends D.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, k);
            var d = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
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
            return g.defaultTimeout
        }
    };
    o(s, "ControllerInner");
    let l = s;
    W = l
}
var W, z = new D.Controller.ControllerFactory(W, b);
var p = L(I());
var T = {};
var i = m; {
    let s = class s extends i.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, T);
            var d = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    d = this.idService;
                return i.Logger.startActiveSpan("OnInitialize", function(n) {
                    n && (n.setAttribute("code.function", "OnInitialize"), n.setAttribute("outsystems.function.key", "95815bd8-d820-4a5e-9ed2-f2dc0cf62b0b"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e), y.getIsNotAPartner() && (r.variables.isLoadingVar = !0)
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
                var r = this.model,
                    t = this.controller,
                    d = this.idService;
                return i.Logger.startActiveSpan("OnReady", function(n) {
                    return n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "d85e310f-507f-48ab-bd21-029f79c5e1b8"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var E = new i.DataTypes.VariableHolder;
                        return i.Flow.executeAsyncFlow(function() {
                            return i.Flow.executeSequence(function() {
                                if (y.getIsPartnerAccountCheckEnabled()) return r.flush(), g.checkPartnerAccount$Action(e).then(function(R) {
                                    E.value = R
                                }).then(function() {
                                    if (E.value.shoudRedirectOut) return i.Flow.returnAsync(i.Navigation.navigateTo(i.Navigation.generateScreenURL("PartnersHub", "NonPartnerAccount", {}), i.Transitions.createTransition(i.Transitions.TransitionAnimation.Default), e, !0))
                                })
                            }).then(function() {
                                r.variables.isLoadingVar = !1
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        onInitialize$Action(e) {
            var r = this.controller;
            return i.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "95815bd8-d820-4a5e-9ed2-f2dc0cf62b0b"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onInitialize$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var r = this.controller;
            return i.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "d85e310f-507f-48ab-bd21-029f79c5e1b8"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    d = this.idService;
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
                    d = this.idService;
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
            return g.defaultTimeout
        }
    };
    o(s, "ControllerInner");
    let l = s;
    x = l
}
var x, V = new i.Controller.ControllerFactory(x, b);
var G = v.PlaceholderContent,
    _e = v.IteratorPlaceholderContent,
    h = class h extends H.BaseWebBlock {
        static get displayName() {
            return "Layouts.CheckPartnerAccountWrapper"
        }
        static getAttributes() {
            return {
                codeFunction: "CheckPartnerAccountWrapper",
                functionKey: "09ef37f7-a018-42ce-b738-fc8bb4baa671",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
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
            return [_, C]
        }
        get modelFactory() {
            return N
        }
        get controllerFactory() {
            return V
        }
        get title() {
            return ""
        }
        internalRender() {
            let s = this.model,
                c = this.controller,
                e = this.idService,
                r = c.validationService,
                t = this.widgetsRecordProvider,
                d = c.callContext(),
                n = h.ifWidget,
                E = h.textWidget,
                R = h.asPrimitiveValue,
                $ = h.getTranslation,
                a = this;
            return p.createElement("div", this.getRootNodeProperties(), n(s.variables.isLoadingVar, !1, this, function() {
                return [p.createElement(_, {
                    getOwnerSpan: o(function() {
                        return a.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: o(function() {
                        return a.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: o(function(u) {
                            c.handleError(u)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: e,
                        uuid: "0",
                        alias: "1"
                    },
                    _widgetRecordProvider: t,
                    _dependencies: []
                })]
            }, function() {
                return [p.createElement(C, {
                    getOwnerSpan: o(function() {
                        return a.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: o(function() {
                        return a.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: o(function(u) {
                            c.handleError(u)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: e,
                        uuid: "1",
                        alias: "2"
                    },
                    _widgetRecordProvider: t,
                    placeholders: {
                        mainContent: new G(function() {
                            return [p.createElement(A, {
                                align: 0,
                                content: a.props.placeholders.placeholder,
                                style: "ph-layout-placeholder",
                                _idProps: {
                                    service: e,
                                    name: "Placeholder"
                                },
                                _widgetRecordProvider: t
                            })]
                        })
                    }
                })]
            }))
        }
    };
o(h, "View");
var S = h,
    w = S;
var J = v.PlaceholderContent,
    Ce = v.IteratorPlaceholderContent,
    f = class f extends H.BaseWebBlock {
        static get displayName() {
            return "Layouts.LayoutWithLoaderBlock"
        }
        static getAttributes() {
            return {
                codeFunction: "LayoutWithLoaderBlock",
                functionKey: "4348c5bf-f1f3-47c8-b25a-f370e027077f",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Layouts.LayoutWithLoaderBlock.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [_, w]
        }
        get modelFactory() {
            return F
        }
        get controllerFactory() {
            return z
        }
        get title() {
            return ""
        }
        internalRender() {
            let s = this.model,
                c = this.controller,
                e = this.idService,
                r = c.validationService,
                t = this.widgetsRecordProvider,
                d = c.callContext(),
                n = f.ifWidget,
                E = f.textWidget,
                R = f.asPrimitiveValue,
                $ = f.getTranslation,
                a = this;
            return P.createElement("div", this.getRootNodeProperties(), n(!y.getIsAppReady(), !1, this, function() {
                return [P.createElement(_, {
                    getOwnerSpan: o(function() {
                        return a.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: o(function() {
                        return a.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: o(function(u) {
                            c.handleError(u)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: e,
                        uuid: "0",
                        alias: "1"
                    },
                    _widgetRecordProvider: t,
                    _dependencies: []
                })]
            }, function() {
                return [P.createElement(w, {
                    getOwnerSpan: o(function() {
                        return a.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: o(function() {
                        return a.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: o(function(u) {
                            c.handleError(u)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: e,
                        uuid: "1",
                        alias: "2"
                    },
                    _widgetRecordProvider: t,
                    placeholders: {
                        placeholder: new J(function() {
                            return [P.createElement(A, {
                                align: 0,
                                content: a.props.placeholders.placeholder1,
                                _idProps: {
                                    service: e,
                                    name: "Placeholder1"
                                },
                                _widgetRecordProvider: t
                            })]
                        })
                    }
                })]
            }))
        }
    };
o(f, "View");
var O = f,
    Se = O;
export {
    Se as a
};