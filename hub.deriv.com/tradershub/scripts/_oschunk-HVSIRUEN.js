import {
    a as S
} from "./_oschunk-SZLIT7QD.js";
import {
    a as L
} from "./_oschunk-BFEK3UOJ.js";
import {
    a as E,
    h as l,
    w as y
} from "./_oschunk-WAXNMQCP.js";
import {
    a as C
} from "./_oschunk-LHY3WMNC.js";
import {
    a as F,
    g as P,
    i as p
} from "./_oschunk-J7LCUWB3.js";
import {
    a as g,
    d as f
} from "./_oschunk-XMOR6XCC.js";
import {
    a as h
} from "./_oschunk-H7UK4VZM.js";
import {
    ia as _
} from "./_oschunk-NTQBNJ73.js";
import {
    c as d,
    g as $
} from "./_oschunk-DVBKI63I.js";
var i = $(F());
var k = {
        "LnK5lvJrek6HKpykR6bTZw#Value": "Deriv"
    },
    N = {
        "LnK5lvJrek6HKpykR6bTZw#Value": "Deriv"
    },
    x = {
        "LnK5lvJrek6HKpykR6bTZw#Value": "Deriv"
    },
    W = {
        "LnK5lvJrek6HKpykR6bTZw#Value": "Deriv"
    },
    V = {
        "LnK5lvJrek6HKpykR6bTZw#Value": "Deriv"
    },
    M = {
        "LnK5lvJrek6HKpykR6bTZw#Value": "Deriv"
    },
    z = {
        "LnK5lvJrek6HKpykR6bTZw#Value": "Deriv"
    },
    K = {
        "LnK5lvJrek6HKpykR6bTZw#Value": "\u0414\u0435\u0440\u0438\u0432"
    },
    T = {
        "ar-001": {
            translations: k,
            isRTL: !0
        },
        "de-DE": {
            translations: N,
            isRTL: !1
        },
        "es-ES": {
            translations: x,
            isRTL: !1
        },
        "fr-FR": {
            translations: W,
            isRTL: !1
        },
        "it-IT": {
            translations: V,
            isRTL: !1
        },
        "pl-PL": {
            translations: M,
            isRTL: !1
        },
        "pt-PT": {
            translations: z,
            isRTL: !1
        },
        "ru-RU": {
            translations: K,
            isRTL: !1
        }
    };
var o = _; {
    let s = class s extends o.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, T);
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
                return o.Logger.startActiveSpan("OnReady", function(r) {
                    return r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "0dd25fbd-04c6-4147-8a6d-fe6a1eb5c2e3"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var v = new o.DataTypes.VariableHolder,
                            m = new o.DataTypes.VariableHolder,
                            A = new o.DataTypes.VariableHolder;
                        return o.Flow.executeAsyncFlow(function() {
                            return n.flush(), h.layoutReady$Action(e).then(function() {
                                return v.value = h.setLang$Action("", e), A.value = h.addFavicon$Action("favicon.png", e), n.flush(), f.sendResidenceList$Action(!1, e).then(function(c) {
                                    m.value = c
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
                return o.Logger.startActiveSpan("OnRender", function(r) {
                    return r && (r.setAttribute("code.function", "OnRender"), r.setAttribute("outsystems.function.key", "667ea626-fcae-46c3-a4fd-d4886b78e110"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnRender"), e = t.callContext(e);
                        var v = new o.DataTypes.VariableHolder;
                        return o.Flow.executeAsyncFlow(function() {
                            return o.Flow.executeSequence(function() {
                                return o.BuiltinFunctions.length(g.getRawResidenceListResponse()) === 0 ? (n.flush(), f.sendResidenceList$Action(!1, e).then(function(m) {
                                    v.value = m
                                })) : o.Flow.executeSequence(function() {
                                    if (o.BuiltinFunctions.length(g.getRawWebsiteStatusResponse()) === 0) return n.flush(), f.getWebsiteStatus$Action(e)
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
                return o.Logger.startActiveSpan("OnDestroy", function(r) {
                    r && (r.setAttribute("code.function", "OnDestroy"), r.setAttribute("outsystems.function.key", "d81492e2-6667-493c-ad7b-44058fac470d"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnDestroy"), e = t.callContext(e), h.layoutDestroy$Action(e)
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
                return o.Logger.startActiveSpan("OnInitialize", function(r) {
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
            return o.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "0dd25fbd-04c6-4147-8a6d-fe6a1eb5c2e3"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onRender$Action(e) {
            var n = this.controller;
            return o.Logger.startActiveSpan("OnRender__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnRender"), t.setAttribute("outsystems.function.key", "667ea626-fcae-46c3-a4fd-d4886b78e110"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onRender$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onDestroy$Action(e) {
            var n = this.controller;
            return o.Logger.startActiveSpan("OnDestroy__proxy", function(t) {
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
            return o.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
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
    d(s, "ControllerInner");
    let b = s;
    I = b
}
var I, D = new o.Controller.ControllerFactory(I, C);
var U = _,
    w = p.PlaceholderContent,
    he = p.IteratorPlaceholderContent,
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
            return [S]
        }
        get modelFactory() {
            return L
        }
        get controllerFactory() {
            return D
        }
        get title() {
            return ""
        }
        internalRender() {
            let s = this.model,
                R = this.controller,
                e = this.idService,
                n = R.validationService,
                t = this.widgetsRecordProvider,
                a = R.callContext(),
                r = u.ifWidget,
                v = u.textWidget,
                m = u.asPrimitiveValue,
                A = u.getTranslation,
                c = this;
            return i.createElement("div", this.getRootNodeProperties(), i.createElement(l, {
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
                style_dataFetchStatus: U.Model.calculateDataFetchStatus(s.variables._hasFixedHeaderInDataFetchStatus, s.variables._enableAccessibilityFeaturesInDataFetchStatus, s.variables._extendedClassInDataFetchStatus)
            }, i.createElement(l, {
                align: 0,
                animate: !1,
                style: "main",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }, i.createElement(E, {
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
            }, i.createElement(S, {
                getOwnerSpan: d(function() {
                    return c.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: d(function() {
                    return c.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: d(function(H) {
                        R.handleError(H)
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
                    onDesktop: new w(function() {
                        return [i.createElement(l, {
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
                        }, v(A("LnK5lvJrek6HKpykR6bTZw#Value", "Deriv")))]
                    }),
                    onTablet: w.Empty,
                    onPhone: w.Empty
                },
                _dependencies: []
            })), i.createElement(l, {
                align: 0,
                animate: !1,
                style: "content",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "Content"
                },
                _widgetRecordProvider: t
            }, i.createElement(l, {
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
            }, i.createElement(y, {
                align: 0,
                content: c.props.placeholders.breadcrumbs,
                style: "content-breadcrumbs ph",
                _idProps: {
                    service: e,
                    name: "Breadcrumbs"
                },
                _widgetRecordProvider: t
            }), i.createElement(l, {
                align: 0,
                animate: !1,
                style: "content-top display-flex align-items-center",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "8"
                },
                _widgetRecordProvider: t
            }, i.createElement(y, {
                align: 0,
                content: c.props.placeholders.title,
                style: "content-top-title heading1 ph",
                _idProps: {
                    service: e,
                    name: "Title"
                },
                _widgetRecordProvider: t
            }), i.createElement(y, {
                align: 0,
                content: c.props.placeholders.actions,
                style: "content-top-actions ph",
                _idProps: {
                    service: e,
                    name: "Actions"
                },
                _widgetRecordProvider: t
            })), i.createElement(y, {
                align: 0,
                content: c.props.placeholders.mainContent,
                style: "content-middle",
                _idProps: {
                    service: e,
                    name: "MainContent"
                },
                _widgetRecordProvider: t
            })), i.createElement(E, {
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
            }, i.createElement(y, {
                align: 0,
                content: c.props.placeholders.footer,
                style: "footer ThemeGrid_Container ph",
                _idProps: {
                    service: e,
                    name: "Footer"
                },
                _widgetRecordProvider: t
            }))))))
        }
    };
d(u, "View");
var O = u,
    me = O;
export {
    me as a
};