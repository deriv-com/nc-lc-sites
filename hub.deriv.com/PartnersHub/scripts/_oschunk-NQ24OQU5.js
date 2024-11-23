import {
    a as I
} from "./_oschunk-CXNBRKWX.js";
import {
    a as C,
    d as l,
    n as E,
    s as R
} from "./_oschunk-OO36B6PN.js";
import {
    a as S
} from "./_oschunk-6WALBPGV.js";
import {
    a as L,
    g as P,
    i as _
} from "./_oschunk-IL57OEHH.js";
import {
    a as h,
    o as m,
    p as v
} from "./_oschunk-DW3HXDMW.js";
import {
    ia as b
} from "./_oschunk-5KJVGEL7.js";
import {
    c as u,
    h as x
} from "./_oschunk-QHO7QY6K.js";
var a = x(L());
var O = {};

function A(y, i, f) {
    window.location.href = "/partnershub"
}
u(A, "default");
var o = b; {
    let i = class i extends o.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, O);
            var c = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
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
                    c = this.idService;
                return o.Logger.startActiveSpan("OnReady", function(r) {
                    return r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "07c736bb-41c1-4503-994e-827c244b8d0c"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var s = new o.DataTypes.VariableHolder;
                        return o.Flow.executeAsyncFlow(function() {
                            return n.flush(), m.layoutReady$Action(e).then(function() {
                                s.value = m.setLang$Action("", e)
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
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
                    c = this.idService;
                return o.Logger.startActiveSpan("OnInitialize", function(r) {
                    r && (r.setAttribute("code.function", "OnInitialize"), r.setAttribute("outsystems.function.key", "3676e77c-7967-4201-8d17-5b86abd351c0"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e), v.mountDerivAPIClient$Action(e)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        get _redirectToDashboard$Action() {
            return this.hasOwnProperty("__redirectToDashboard$Action") || (this.__redirectToDashboard$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    c = this.idService;
                return o.Logger.startActiveSpan("RedirectToDashboard", function(r) {
                    r && (r.setAttribute("code.function", "RedirectToDashboard"), r.setAttribute("outsystems.function.key", "530fed17-5000-44cd-863b-7af35219f29e"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("RedirectToDashboard"), e = t.callContext(e), n.variables.noRedirectIn || o.Logger.startActiveSpan("JavaScript1", function(s) {
                            s && (s.setAttribute("code.function", "JavaScript1"), s.setAttribute("outsystems.function.key", "5afcf9f1-15bc-408f-84a1-f6139e9d4036"), s.setAttribute("outsystems.function.owner.name", "PartnersHub"), s.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(A, "JavaScript1", "RedirectToDashboard", null, function($) {}, {}, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__redirectToDashboard$Action
        }
        set _redirectToDashboard$Action(e) {
            this.__redirectToDashboard$Action = e
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    c = this.idService;
                return o.Logger.startActiveSpan("OnDestroy", function(r) {
                    r && (r.setAttribute("code.function", "OnDestroy"), r.setAttribute("outsystems.function.key", "a7b81f73-6a43-434a-999b-be93553550b9"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnDestroy"), e = t.callContext(e), m.layoutDestroy$Action(e)
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
            return o.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "07c736bb-41c1-4503-994e-827c244b8d0c"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onInitialize$Action(e) {
            var n = this.controller;
            return o.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "3676e77c-7967-4201-8d17-5b86abd351c0"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onInitialize$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        redirectToDashboard$Action(e) {
            var n = this.controller;
            return o.Logger.startActiveSpan("RedirectToDashboard__proxy", function(t) {
                t && (t.setAttribute("code.function", "RedirectToDashboard"), t.setAttribute("outsystems.function.key", "530fed17-5000-44cd-863b-7af35219f29e"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._redirectToDashboard$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onDestroy$Action(e) {
            var n = this.controller;
            return o.Logger.startActiveSpan("OnDestroy__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnDestroy"), t.setAttribute("outsystems.function.key", "a7b81f73-6a43-434a-999b-be93553550b9"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onDestroy$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get event$Action() {
            return this.hasOwnProperty("_event$Action") || (this._event$Action = function() {
                return Promise.resolve()
            }), this._event$Action
        }
        set event$Action(e) {
            this._event$Action = e
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var n = this.controller,
                    t = this.model,
                    c = this.idService;
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
                    c = this.idService;
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
                    c = this.idService;
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
            return v.defaultTimeout
        }
    };
    u(i, "ControllerInner");
    let y = i;
    H = y
}
var H, w = new o.Controller.ControllerFactory(H, S);
var p = b,
    ae = _.PlaceholderContent,
    ce = _.IteratorPlaceholderContent,
    d = class d extends P.BaseWebBlock {
        static get displayName() {
            return "Layouts.LayoutSignup"
        }
        static getAttributes() {
            return {
                codeFunction: "LayoutSignup",
                functionKey: "de4ea337-c663-4edc-a148-27951072bd07",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Layouts.LayoutSignup.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return I
        }
        get controllerFactory() {
            return w
        }
        get title() {
            return ""
        }
        internalRender() {
            let i = this.model,
                f = this.controller,
                e = this.idService,
                n = f.validationService,
                t = this.widgetsRecordProvider,
                c = f.callContext(),
                r = d.ifWidget,
                s = d.textWidget,
                $ = d.asPrimitiveValue,
                N = d.getTranslation,
                D = this;
            return a.createElement("div", this.getRootNodeProperties(), a.createElement(l, {
                align: 0,
                animate: !1,
                style: i.getCachedValue(e.getId("LayoutWrapper.Style"), function() {
                    return "layout layout-blank" + (i.variables.hasFixedHeaderIn ? " fixed-header" : "") + (i.variables.enableAccessibilityFeaturesIn ? " has-accessible-features" : "") + (i.variables.extendedClassIn === "" ? "" : " " + i.variables.extendedClassIn)
                }, function() {
                    return i.variables.hasFixedHeaderIn
                }, function() {
                    return i.variables.enableAccessibilityFeaturesIn
                }, function() {
                    return i.variables.extendedClassIn
                }),
                visible: !0,
                _idProps: {
                    service: e,
                    name: "LayoutWrapper"
                },
                _widgetRecordProvider: t,
                style_dataFetchStatus: p.Model.calculateDataFetchStatus(i.variables._hasFixedHeaderInDataFetchStatus, i.variables._enableAccessibilityFeaturesInDataFetchStatus, i.variables._extendedClassInDataFetchStatus)
            }, a.createElement(l, {
                align: 0,
                animate: !1,
                style: "main",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }, r(i.variables.hasHeaderIn, !1, this, function() {
                return [a.createElement(C, {
                    tag: "header",
                    _idProps: {
                        service: e,
                        name: "Header2"
                    },
                    _widgetRecordProvider: t
                }, a.createElement(l, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-items: center; border: none; display: flex; flex-shrink: 0; height: 72px; justify-content: center; padding: 16px 16px;"
                    },
                    gridProperties: {
                        classes: "OSInline",
                        width: "100%"
                    },
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "3"
                    },
                    _widgetRecordProvider: t
                }, r(i.variables.hasNoLogoIn, !1, this, function() {
                    return [a.createElement(l, {
                        align: 0,
                        animate: !1,
                        visible: !0,
                        _idProps: {
                            service: e,
                            uuid: "4"
                        },
                        _widgetRecordProvider: t
                    })]
                }, function() {
                    return [a.createElement(E, {
                        extendedEvents: {
                            onClick: u(function() {
                                var T = c.clone();
                                f.redirectToDashboard$Action(f.callContext(T))
                            }, "onClick")
                        },
                        image: p.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.deriv25years.png"),
                        style: "logo-partner",
                        type: 0,
                        _idProps: {
                            service: e,
                            uuid: "5"
                        },
                        _widgetRecordProvider: t
                    })]
                })))]
            }, function() {
                return []
            }), a.createElement(l, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "background-color:" + i.variables.backgroundColorIn
                },
                style: "content",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "Content"
                },
                _widgetRecordProvider: t
            }, a.createElement(l, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    role: "main"
                },
                style: "wrapper-container",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "MainContentWrapper"
                },
                _widgetRecordProvider: t
            }, a.createElement(R, {
                align: 0,
                content: D.props.placeholders.mainContent,
                extendedProperties: {
                    style: i.getCachedValue(e.getId("MainContent.style"), function() {
                        return h.getIsDesktop() ? "background:" + i.variables.backgroundColorIn + ";" : ""
                    }, function() {
                        return h.getIsDesktop()
                    }, function() {
                        return i.variables.backgroundColorIn
                    })
                },
                style: "main-container",
                _idProps: {
                    service: e,
                    name: "MainContent"
                },
                _widgetRecordProvider: t
            }))))))
        }
    };
u(d, "View");
var g = d,
    ue = g;
export {
    ue as a
};