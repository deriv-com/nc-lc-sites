import {
    b as M,
    c as k
} from "./_oschunk-I5JGASAI.js";
import "./_oschunk-3MOYZQ2C.js";
import {
    a as ue
} from "./_oschunk-YVFTECWM.js";
import {
    f as m,
    m as le,
    q as de,
    s as R,
    u as ce
} from "./_oschunk-VR5BNL2K.js";
import {
    a as ie,
    g,
    m as P,
    n as oe,
    o as se,
    q as w,
    r as I,
    s as E,
    t as y
} from "./_oschunk-4VHUVDBV.js";
import {
    a as ae
} from "./_oschunk-KXORGPRQ.js";
import {
    a as W
} from "./_oschunk-ZM75JAVW.js";
import {
    Qb as ne,
    Sb as re
} from "./_oschunk-Z7QRTJDJ.js";
import {
    I as te,
    W as l,
    c as n,
    e as Q,
    h as T,
    m as X,
    n as Z,
    p as ee,
    w as b
} from "./_oschunk-M5BUVJ72.js";
var He = {
        "Ok0_TnXGtUi0Kpgc0Z60Pg#Value": "\u0627\u0630\u0647\u0628 \u0625\u0644\u0649 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644",
        "QGbT7R8uHkmdaWHw9qRphw#Value": "\u064A\u0631\u062C\u0649 \u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0628\u0645\u0633\u0624\u0648\u0644 \u0627\u0644\u0646\u0638\u0627\u0645 \u0644\u062F\u064A\u0643.",
        "33gIhDYS6E6qIKReu+2PmA#Value": "\u0644\u064A\u0633 \u0644\u062F\u064A\u0643 \u0627\u0644\u0635\u0644\u0627\u062D\u064A\u0629 \u0627\u0644\u0644\u0627\u0632\u0645\u0629 \u0644\u0631\u0624\u064A\u0629 \u0647\u0630\u0647 \u0627\u0644\u0634\u0627\u0634\u0629.",
        "5nVIK0JIkEq75V4SgIpFYw#Title": "\u0623\u0630\u0648\u0646\u0627\u062A \u063A\u064A\u0631 \u0635\u0627\u0644\u062D\u0629",
        "5nVIK0JIkEq75V4SgIpFYw#TitleExpression.-1269489733.1": "\u0623\u0630\u0648\u0646\u0627\u062A \u063A\u064A\u0631 \u0635\u0627\u0644\u062D\u0629"
    },
    ve = {
        "ar-001": {
            translations: He,
            isRTL: !0
        }
    };
var he = l; {
    let t = class t extends he.Controller.BaseViewController {
        constructor(e, r, d) {
            super(e, r, d, ve);
            var C = this.controller;
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
        get onSyncStartEventHandler() {
            return this.hasOwnProperty("_onSyncStartEventHandler") || (this._onSyncStartEventHandler = null), this._onSyncStartEventHandler
        }
        set onSyncStartEventHandler(e) {
            this._onSyncStartEventHandler = e
        }
        get onSyncCompleteEventHandler() {
            return this.hasOwnProperty("_onSyncCompleteEventHandler") || (this._onSyncCompleteEventHandler = null), this._onSyncCompleteEventHandler
        }
        set onSyncCompleteEventHandler(e) {
            this._onSyncCompleteEventHandler = e
        }
        get onSyncErrorEventHandler() {
            return this.hasOwnProperty("_onSyncErrorEventHandler") || (this._onSyncErrorEventHandler = null), this._onSyncErrorEventHandler
        }
        set onSyncErrorEventHandler(e) {
            this._onSyncErrorEventHandler = e
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(e) {
                return W.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return re.defaultTimeout
        }
    };
    n(t, "ControllerInner");
    let a = t;
    me = a
}
var me, A = new he.Controller.ControllerFactory(me, ae);
var s = Q(ie());
var u = l,
    N = class N extends u.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("FullHeight", "fullHeightIn", "FullHeight", !0, !1, u.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_fullHeightInDataFetchStatus", "_fullHeightInDataFetchStatus", "_fullHeightInDataFetchStatus", !0, !1, u.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, u.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, u.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(u.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
n(N, "VariablesRecord");
var D = N;
D.init();
var L = class L extends u.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
n(L, "WidgetsRecord");
var B = L,
    z = class z extends u.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return D
        }
        static getWidgetsRecordConstructor() {
            return B
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "FullHeight" in t && (this.variables.fullHeightIn = t.FullHeight, "_fullHeightInDataFetchStatus" in t && (this.variables._fullHeightInDataFetchStatus = t._fullHeightInDataFetchStatus)), "ExtendedClass" in t && (this.variables.extendedClassIn = t.ExtendedClass, "_extendedClassInDataFetchStatus" in t && (this.variables._extendedClassInDataFetchStatus = t._extendedClassInDataFetchStatus))
        }
    };
n(z, "Model");
var V = z;
V._hasValidationWidgetsValue = void 0;
var fe = new u.Model.ModelFactory(V);
var H = l,
    q = class q extends H.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(H.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
n(q, "VariablesRecord");
var x = q;
x.init();
var Y = class Y extends H.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
n(Y, "WidgetsRecord");
var G = Y,
    S = class S extends H.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return x
        }
        static getWidgetsRecordConstructor() {
            return G
        }
        static get hasValidationWidgets() {
            return S._hasValidationWidgetsValue === void 0 && (S._hasValidationWidgetsValue = void 0 || void 0 || void 0), S._hasValidationWidgetsValue
        }
        setInputs(t) {}
    };
n(S, "Model");
var F = S;
F._hasValidationWidgetsValue = void 0;
var K = new H.Model.ModelFactory(F);
var f = Q(ie());
var _e = {};
var pe = l; {
    let t = class t extends pe.Controller.BaseViewController {
        constructor(e, r, d) {
            super(e, r, d, _e);
            var C = this.controller;
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
        get onSyncStartEventHandler() {
            return this.hasOwnProperty("_onSyncStartEventHandler") || (this._onSyncStartEventHandler = null), this._onSyncStartEventHandler
        }
        set onSyncStartEventHandler(e) {
            this._onSyncStartEventHandler = e
        }
        get onSyncCompleteEventHandler() {
            return this.hasOwnProperty("_onSyncCompleteEventHandler") || (this._onSyncCompleteEventHandler = null), this._onSyncCompleteEventHandler
        }
        set onSyncCompleteEventHandler(e) {
            this._onSyncCompleteEventHandler = e
        }
        get onSyncErrorEventHandler() {
            return this.hasOwnProperty("_onSyncErrorEventHandler") || (this._onSyncErrorEventHandler = null), this._onSyncErrorEventHandler
        }
        set onSyncErrorEventHandler(e) {
            this._onSyncErrorEventHandler = e
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
            return ne.defaultTimeout
        }
    };
    n(t, "ControllerInner");
    let a = t;
    Ee = a
}
var Ee, ye = new pe.Controller.ControllerFactory(Ee, ue);
var tt = g.PlaceholderContent,
    nt = g.IteratorPlaceholderContent,
    Pe = n(function() {
        var a = se(function(t) {
            var o = t.model,
                e = t.controller,
                r = t.controller.idService,
                d = e.validationService,
                C = e.callContext(),
                $ = E,
                _ = y,
                p = {
                    props: t,
                    validateWidget: n(function(c) {
                        t.validateWidget(t, c)
                    }, "validateWidget")
                },
                i = o,
                j = I,
                O = w,
                h = P();
            return f.createElement("div", t.rootNodeProperties, f.createElement(m, {
                align: 0,
                animate: !1,
                style: o.getCachedValue(r.getId("BlankState.Style"), function() {
                    return "blank-slate" + (o.variables.fullHeightIn ? " large" : "") + " " + o.variables.extendedClassIn
                }, function() {
                    return o.variables.fullHeightIn
                }, function() {
                    return o.variables.extendedClassIn
                }),
                visible: !0,
                _idProps: {
                    service: r,
                    name: "BlankState"
                },
                _widgetRecordProvider: i,
                style_dataFetchStatus: te.calculateDataFetchStatus(o.variables._fullHeightInDataFetchStatus, o.variables._extendedClassInDataFetchStatus)
            }, f.createElement(m, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "1"
                },
                _widgetRecordProvider: i
            }, f.createElement(R, {
                align: 0,
                content: p.props.placeholders.icon,
                style: "ph blank-slate-icon",
                _idProps: {
                    service: r,
                    name: "Icon"
                },
                _widgetRecordProvider: i
            }), f.createElement(R, {
                align: 0,
                content: p.props.placeholders.content,
                style: "ph blank-slate-description",
                _idProps: {
                    service: r,
                    name: "Content"
                },
                _widgetRecordProvider: i
            }), f.createElement(R, {
                align: 0,
                content: p.props.placeholders.actions,
                style: "ph blank-slate-actions",
                _idProps: {
                    service: r,
                    name: "Actions"
                },
                _widgetRecordProvider: i
            }))))
        }, {
            topLevelComponent: !1,
            getAttributes: n(function() {
                return {
                    codeFunction: "BlankSlate",
                    functionKey: "7dafe718-172c-4583-aefa-0c9bd4823126",
                    functionOwnerName: "OutSystemsUI",
                    functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Content.BlankSlate",
            modelFactory: fe,
            controllerFactory: ye
        });
        return a.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"]
        }, a.getJsDependencies = function() {
            return []
        }, a.getBlocks = function() {
            return []
        }, a
    }, "componentFactory"),
    J = Pe();
var v = g.PlaceholderContent,
    ft = g.IteratorPlaceholderContent,
    we = n(function() {
        var a = oe(function(t) {
            var o = t.model,
                e = t.controller,
                r = t.controller.idService,
                d = e.validationService,
                C = e.callContext(),
                $ = E,
                _ = y,
                p = {
                    props: t,
                    validateWidget: n(function(c) {
                        t.validateWidget(t, c)
                    }, "validateWidget")
                },
                i = o,
                j = I,
                O = w,
                h = P();
            return s.createElement("div", t.rootNodeProperties, s.createElement(M, {
                getOwnerSpan: n(function() {
                    return h.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: n(function() {
                    return h.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: n(function(c) {
                        e.handleError(c)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: d
                },
                _idProps: {
                    service: r,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: i,
                placeholders: {
                    header: new v(function() {
                        return [s.createElement(m, {
                            align: 0,
                            animate: !1,
                            style: "full-height display-flex align-items-center justify-content-flex-end",
                            visible: !0,
                            _idProps: {
                                service: r,
                                uuid: "1"
                            },
                            _widgetRecordProvider: i
                        }, s.createElement(k, {
                            getOwnerSpan: n(function() {
                                return h.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return h.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: n(function(c) {
                                    e.handleError(c)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: d
                            },
                            _idProps: {
                                service: r,
                                uuid: "2",
                                alias: "2"
                            },
                            _widgetRecordProvider: i,
                            _dependencies: []
                        }))]
                    }),
                    breadcrumbs: v.Empty,
                    title: v.Empty,
                    actions: v.Empty,
                    mainContent: new v(function() {
                        return [s.createElement(J, {
                            getOwnerSpan: n(function() {
                                return h.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return h.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                FullHeight: !0
                            },
                            events: {
                                _handleError: n(function(c) {
                                    e.handleError(c)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: d
                            },
                            _idProps: {
                                service: r,
                                uuid: "3",
                                alias: "3"
                            },
                            _widgetRecordProvider: i,
                            placeholders: {
                                icon: new v(function() {
                                    return [s.createElement(le, {
                                        icon: "lock",
                                        iconSize: 0,
                                        style: "icon text-neutral-4",
                                        visible: !0,
                                        _idProps: {
                                            service: r,
                                            name: "Icon1"
                                        },
                                        _widgetRecordProvider: i
                                    })]
                                }),
                                content: new v(function() {
                                    return [s.createElement(m, {
                                        align: 0,
                                        animate: !1,
                                        visible: !0,
                                        _idProps: {
                                            service: r,
                                            uuid: "5"
                                        },
                                        _widgetRecordProvider: i
                                    }, s.createElement(ce, {
                                        style: "heading6",
                                        text: [O(_("33gIhDYS6E6qIKReu+2PmA#Value", "You don't have the necessary permission to see this screen."))],
                                        _idProps: {
                                            service: r,
                                            uuid: "6"
                                        },
                                        _widgetRecordProvider: i
                                    })), s.createElement(m, {
                                        align: 0,
                                        animate: !1,
                                        style: "margin-top-s",
                                        visible: !0,
                                        _idProps: {
                                            service: r,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: i
                                    }, O(_("QGbT7R8uHkmdaWHw9qRphw#Value", "Please contact your system administrator.")))]
                                }),
                                actions: new v(function() {
                                    return [j(b.getUserId().toString() === b.nullTextIdentifier(), !1, this, function() {
                                        return [s.createElement(de, {
                                            enabled: !0,
                                            extendedProperties: {
                                                tabIndex: "1"
                                            },
                                            transition: T.createTransition(T.TransitionAnimation.Default),
                                            url: ee.generateScreenURL("uae", "signup", {}),
                                            visible: !0,
                                            _idProps: {
                                                service: r,
                                                uuid: "8"
                                            },
                                            _widgetRecordProvider: i
                                        }, O(_("Ok0_TnXGtUi0Kpgc0Z60Pg#Value", "Go to login")))]
                                    }, function() {
                                        return []
                                    })]
                                })
                            },
                            _dependencies: []
                        })]
                    }),
                    footer: v.Empty
                },
                _dependencies: []
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: n(function() {
                return {
                    codeFunction: "InvalidPermissions",
                    functionKey: "2b4875e6-4842-4a90-bbe5-5e12808a4563",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Common.InvalidPermissions",
            modelFactory: K,
            controllerFactory: A,
            getTitle: n(function(t) {
                var o = t.model,
                    e = t.controller,
                    r = t.controller.idService,
                    d = e.validationService,
                    C = e.callContext(),
                    $ = E,
                    _ = y,
                    p = {
                        props: t,
                        validateWidget: n(function(i) {
                            t.validateWidget(t, i)
                        }, "validateWidget")
                    };
                return X.resolve(Z.TranslationsService).getMessage("5nVIK0JIkEq75V4SgIpFYw#TitleExpression.-1269489733.1", "Invalid permissions")
            }, "getTitle")
        });
        return a.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, a.getJsDependencies = function() {
            return []
        }, a.getBlocks = function() {
            return [M, k, J]
        }, a
    }, "componentFactory"),
    Ie = we();
export {
    A as controllerModule, K as modelModule, Ie as viewModule, W as webFlowControllerModule
};