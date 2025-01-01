import {
    a as p
} from "./_oschunk-P4MP6R5V.js";
import {
    a as C,
    d as l,
    n as R,
    s as E
} from "./_oschunk-LWMGEL7F.js";
import {
    a as P
} from "./_oschunk-4GXKK3IG.js";
import {
    a as L,
    g as S,
    i as v
} from "./_oschunk-WZHUAZJP.js";
import {
    a as h,
    o as A,
    q as b
} from "./_oschunk-BDI2RWOA.js";
import {
    ia as y
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as d,
    h as $
} from "./_oschunk-QHO7QY6K.js";
var a = $(L());
var H = {};

function _(m, n, f) {
    window.location.href = "/partnershub"
}
d(_, "default");
var s = y; {
    let n = class n extends s.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t, H);
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
                var i = this.model,
                    t = this.controller,
                    c = this.idService;
                return s.Logger.startActiveSpan("OnReady", function(r) {
                    r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "07c736bb-41c1-4503-994e-827c244b8d0c"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var o = new s.DataTypes.VariableHolder;
                        o.value = A.setLang$Action("", e)
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
                var i = this.model,
                    t = this.controller,
                    c = this.idService;
                return s.Logger.startActiveSpan("OnInitialize", function(r) {
                    r && (r.setAttribute("code.function", "OnInitialize"), r.setAttribute("outsystems.function.key", "3676e77c-7967-4201-8d17-5b86abd351c0"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e), b.mountDerivAPIClient$Action(e)
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
                var i = this.model,
                    t = this.controller,
                    c = this.idService;
                return s.Logger.startActiveSpan("RedirectToDashboard", function(r) {
                    r && (r.setAttribute("code.function", "RedirectToDashboard"), r.setAttribute("outsystems.function.key", "530fed17-5000-44cd-863b-7af35219f29e"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("RedirectToDashboard"), e = t.callContext(e), i.variables.noRedirectIn || s.Logger.startActiveSpan("JavaScript1", function(o) {
                            o && (o.setAttribute("code.function", "JavaScript1"), o.setAttribute("outsystems.function.key", "5afcf9f1-15bc-408f-84a1-f6139e9d4036"), o.setAttribute("outsystems.function.owner.name", "PartnersHub"), o.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(_, "JavaScript1", "RedirectToDashboard", null, function(x) {}, {}, {})
                            } finally {
                                o && o.end()
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
        onReady$Action(e) {
            var i = this.controller;
            return s.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "07c736bb-41c1-4503-994e-827c244b8d0c"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onReady$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onInitialize$Action(e) {
            var i = this.controller;
            return s.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "3676e77c-7967-4201-8d17-5b86abd351c0"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onInitialize$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        redirectToDashboard$Action(e) {
            var i = this.controller;
            return s.Logger.startActiveSpan("RedirectToDashboard__proxy", function(t) {
                t && (t.setAttribute("code.function", "RedirectToDashboard"), t.setAttribute("outsystems.function.key", "530fed17-5000-44cd-863b-7af35219f29e"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._redirectToDashboard$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var i = this.controller,
                    t = this.model,
                    c = this.idService;
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
                    c = this.idService;
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
            return b.defaultTimeout
        }
    };
    d(n, "ControllerInner");
    let m = n;
    I = m
}
var I, O = new s.Controller.ControllerFactory(I, P);
var w = y,
    se = v.PlaceholderContent,
    ce = v.IteratorPlaceholderContent,
    u = class u extends S.BaseWebBlock {
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
            return p
        }
        get controllerFactory() {
            return O
        }
        get title() {
            return ""
        }
        internalRender() {
            let n = this.model,
                f = this.controller,
                e = this.idService,
                i = f.validationService,
                t = this.widgetsRecordProvider,
                c = f.callContext(),
                r = u.ifWidget,
                o = u.textWidget,
                x = u.asPrimitiveValue,
                N = u.getTranslation,
                D = this;
            return a.createElement("div", this.getRootNodeProperties(), a.createElement(l, {
                align: 0,
                animate: !1,
                style: n.getCachedValue(e.getId("LayoutWrapper.Style"), function() {
                    return "layout layout-blank" + (n.variables.hasFixedHeaderIn ? " fixed-header" : "") + (n.variables.enableAccessibilityFeaturesIn ? " has-accessible-features" : "") + (n.variables.extendedClassIn === "" ? "" : " " + n.variables.extendedClassIn)
                }, function() {
                    return n.variables.hasFixedHeaderIn
                }, function() {
                    return n.variables.enableAccessibilityFeaturesIn
                }, function() {
                    return n.variables.extendedClassIn
                }),
                visible: !0,
                _idProps: {
                    service: e,
                    name: "LayoutWrapper"
                },
                _widgetRecordProvider: t,
                style_dataFetchStatus: w.Model.calculateDataFetchStatus(n.variables._hasFixedHeaderInDataFetchStatus, n.variables._enableAccessibilityFeaturesInDataFetchStatus, n.variables._extendedClassInDataFetchStatus)
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
            }, r(n.variables.hasHeaderIn, !1, this, function() {
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
                }, r(n.variables.hasNoLogoIn, !1, this, function() {
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
                    return [a.createElement(R, {
                        extendedEvents: {
                            onClick: d(function() {
                                var T = c.clone();
                                f.redirectToDashboard$Action(f.callContext(T))
                            }, "onClick")
                        },
                        image: w.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.deriv25years.png"),
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
                    style: "background-color:" + n.variables.backgroundColorIn
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
            }, a.createElement(E, {
                align: 0,
                content: D.props.placeholders.mainContent,
                extendedProperties: {
                    style: n.getCachedValue(e.getId("MainContent.style"), function() {
                        return h.getIsDesktop() ? "background:" + n.variables.backgroundColorIn + ";" : ""
                    }, function() {
                        return h.getIsDesktop()
                    }, function() {
                        return n.variables.backgroundColorIn
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
d(u, "View");
var g = u,
    de = g;
export {
    de as a
};