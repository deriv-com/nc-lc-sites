import {
    a as E
} from "./_oschunk-OW5V4P4X.js";
import {
    a as I
} from "./_oschunk-FZSN4WRR.js";
import {
    a as p,
    h as l,
    w as h
} from "./_oschunk-HUOHOHZB.js";
import {
    a as w
} from "./_oschunk-Y45M2O2K.js";
import {
    a as T,
    g as P,
    i as S
} from "./_oschunk-6LASTRK7.js";
import {
    a as R,
    d as f
} from "./_oschunk-27GDEXUT.js";
import {
    a as m
} from "./_oschunk-D2MH3QEK.js";
import {
    ia as b
} from "./_oschunk-NTQBNJ73.js";
import {
    c,
    g as L
} from "./_oschunk-DVBKI63I.js";
var o = L(T());
var N = {
        "LnK5lvJrek6HKpykR6bTZw#Value": "Deriv"
    },
    $ = {
        "fr-FR": {
            translations: N,
            isRTL: !1
        }
    };
var i = b; {
    let s = class s extends i.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, $);
            var a = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
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
                    a = this.idService;
                return i.Logger.startActiveSpan("OnReady", function(r) {
                    return r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "0dd25fbd-04c6-4147-8a6d-fe6a1eb5c2e3"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var y = new i.DataTypes.VariableHolder,
                            v = new i.DataTypes.VariableHolder,
                            g = new i.DataTypes.VariableHolder;
                        return i.Flow.executeAsyncFlow(function() {
                            return n.flush(), m.layoutReady$Action(e).then(function() {
                                return y.value = m.setLang$Action("", e), g.value = m.addFavicon$Action("favicon.png", e), n.flush(), f.sendResidenceList$Action(!1, e).then(function(d) {
                                    v.value = d
                                })
                            }).then(function() {
                                return n.flush(), f.getWebsiteStatus$Action(e)
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
        get _onRender$Action() {
            return this.hasOwnProperty("__onRender$Action") || (this.__onRender$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    a = this.idService;
                return i.Logger.startActiveSpan("OnRender", function(r) {
                    return r && (r.setAttribute("code.function", "OnRender"), r.setAttribute("outsystems.function.key", "667ea626-fcae-46c3-a4fd-d4886b78e110"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnRender"), e = t.callContext(e);
                        var y = new i.DataTypes.VariableHolder;
                        return i.Flow.executeAsyncFlow(function() {
                            return i.Flow.executeSequence(function() {
                                return i.BuiltinFunctions.length(R.getRawResidenceListResponse()) === 0 ? (n.flush(), f.sendResidenceList$Action(!1, e).then(function(v) {
                                    y.value = v
                                })) : i.Flow.executeSequence(function() {
                                    if (i.BuiltinFunctions.length(R.getRawWebsiteStatusResponse()) === 0) return n.flush(), f.getWebsiteStatus$Action(e)
                                })
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__onRender$Action
        }
        set _onRender$Action(e) {
            this.__onRender$Action = e
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    a = this.idService;
                return i.Logger.startActiveSpan("OnDestroy", function(r) {
                    r && (r.setAttribute("code.function", "OnDestroy"), r.setAttribute("outsystems.function.key", "d81492e2-6667-493c-ad7b-44058fac470d"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
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
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    a = this.idService;
                return i.Logger.startActiveSpan("OnInitialize", function(r) {
                    r && (r.setAttribute("code.function", "OnInitialize"), r.setAttribute("outsystems.function.key", "fb159ad3-b8fc-4d10-8e90-999e19c55191"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        onReady$Action(e) {
            var n = this.controller;
            return i.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "0dd25fbd-04c6-4147-8a6d-fe6a1eb5c2e3"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onRender$Action(e) {
            var n = this.controller;
            return i.Logger.startActiveSpan("OnRender__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnRender"), t.setAttribute("outsystems.function.key", "667ea626-fcae-46c3-a4fd-d4886b78e110"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onRender$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onDestroy$Action(e) {
            var n = this.controller;
            return i.Logger.startActiveSpan("OnDestroy__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnDestroy"), t.setAttribute("outsystems.function.key", "d81492e2-6667-493c-ad7b-44058fac470d"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onDestroy$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onInitialize$Action(e) {
            var n = this.controller;
            return i.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "fb159ad3-b8fc-4d10-8e90-999e19c55191"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onInitialize$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var n = this.controller,
                    t = this.model,
                    a = this.idService;
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
                    a = this.idService;
                return n.onReady$Action(e)
            }), this._onReadyEventHandler
        }
        set onReadyEventHandler(e) {
            this._onReadyEventHandler = e
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = function(e) {
                var n = this.controller,
                    t = this.model,
                    a = this.idService;
                return n.onRender$Action(e)
            }), this._onRenderEventHandler
        }
        set onRenderEventHandler(e) {
            this._onRenderEventHandler = e
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = function(e) {
                var n = this.controller,
                    t = this.model,
                    a = this.idService;
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
            return f.defaultTimeout
        }
    };
    c(s, "ControllerInner");
    let _ = s;
    F = _
}
var F, H = new i.Controller.ControllerFactory(F, w);
var x = b,
    O = S.PlaceholderContent,
    se = S.IteratorPlaceholderContent,
    u = class u extends P.BaseWebBlock {
        static get displayName() {
            return "Layouts.LayoutTopMenu"
        }
        static getAttributes() {
            return {
                codeFunction: "LayoutTopMenu",
                functionKey: "2cc2a24c-0ee3-4a4e-b7ef-32c7feff1982",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
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
            return [E]
        }
        get modelFactory() {
            return I
        }
        get controllerFactory() {
            return H
        }
        get title() {
            return ""
        }
        internalRender() {
            let s = this.model,
                A = this.controller,
                e = this.idService,
                n = A.validationService,
                t = this.widgetsRecordProvider,
                a = A.callContext(),
                r = u.ifWidget,
                y = u.textWidget,
                v = u.asPrimitiveValue,
                g = u.getTranslation,
                d = this;
            return o.createElement("div", this.getRootNodeProperties(), o.createElement(l, {
                align: 0,
                animate: !1,
                style: s.getCachedValue(e.getId("LayoutWrapper.Style"), function() {
                    return "layout layout-top" + (s.variables.hasFixedHeaderIn ? " fixed-header" : "") + (s.variables.enableAccessibilityFeaturesIn ? " has-accessible-features" : "") + (s.variables.extendedClassIn === "" ? "" : " " + s.variables.extendedClassIn)
                }, function() {
                    return s.variables.hasFixedHeaderIn
                }, function() {
                    return s.variables.enableAccessibilityFeaturesIn
                }, function() {
                    return s.variables.extendedClassIn
                }),
                visible: !0,
                _idProps: {
                    service: e,
                    name: "LayoutWrapper"
                },
                _widgetRecordProvider: t,
                style_dataFetchStatus: x.Model.calculateDataFetchStatus(s.variables._hasFixedHeaderInDataFetchStatus, s.variables._enableAccessibilityFeaturesInDataFetchStatus, s.variables._extendedClassInDataFetchStatus)
            }, o.createElement(l, {
                align: 0,
                animate: !1,
                style: "main",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }, o.createElement(p, {
                extendedProperties: {
                    role: "banner",
                    className: "header"
                },
                tag: "header",
                _idProps: {
                    service: e,
                    name: "Header2"
                },
                _widgetRecordProvider: t
            }, o.createElement(E, {
                getOwnerSpan: c(function() {
                    return d.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: c(function() {
                    return d.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: c(function(D) {
                        A.handleError(D)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: n
                },
                _idProps: {
                    service: e,
                    uuid: "3",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    onDesktop: new O(function() {
                        return [o.createElement(l, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "text-align: center;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "4"
                            },
                            _widgetRecordProvider: t
                        }, y(g("LnK5lvJrek6HKpykR6bTZw#Value", "Deriv")))]
                    }),
                    onTablet: O.Empty,
                    onPhone: O.Empty
                },
                _dependencies: []
            })), o.createElement(l, {
                align: 0,
                animate: !1,
                style: "content",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "Content"
                },
                _widgetRecordProvider: t
            }, o.createElement(l, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    role: "main"
                },
                style: "main-content ThemeGrid_Container",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "MainContentWrapper"
                },
                _widgetRecordProvider: t
            }, o.createElement(h, {
                align: 0,
                content: d.props.placeholders.breadcrumbs,
                style: "content-breadcrumbs ph",
                _idProps: {
                    service: e,
                    name: "Breadcrumbs"
                },
                _widgetRecordProvider: t
            }), o.createElement(l, {
                align: 0,
                animate: !1,
                style: "content-top display-flex align-items-center",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "8"
                },
                _widgetRecordProvider: t
            }, o.createElement(h, {
                align: 0,
                content: d.props.placeholders.title,
                style: "content-top-title heading1 ph",
                _idProps: {
                    service: e,
                    name: "Title"
                },
                _widgetRecordProvider: t
            }), o.createElement(h, {
                align: 0,
                content: d.props.placeholders.actions,
                style: "content-top-actions ph",
                _idProps: {
                    service: e,
                    name: "Actions"
                },
                _widgetRecordProvider: t
            })), o.createElement(h, {
                align: 0,
                content: d.props.placeholders.mainContent,
                style: "content-middle",
                _idProps: {
                    service: e,
                    name: "MainContent"
                },
                _widgetRecordProvider: t
            })), o.createElement(p, {
                extendedProperties: {
                    role: "contentinfo",
                    className: "content-bottom"
                },
                tag: "footer",
                _idProps: {
                    service: e,
                    uuid: "12"
                },
                _widgetRecordProvider: t
            }, o.createElement(h, {
                align: 0,
                content: d.props.placeholders.footer,
                style: "footer ThemeGrid_Container ph",
                _idProps: {
                    service: e,
                    name: "Footer"
                },
                _widgetRecordProvider: t
            }))))))
        }
    };
c(u, "View");
var C = u,
    ae = C;
export {
    ae as a
};