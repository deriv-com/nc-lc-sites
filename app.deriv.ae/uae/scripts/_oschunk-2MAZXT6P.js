import {
    a as O,
    b as x
} from "./_oschunk-ET63S57K.js";
import "./_oschunk-JQ2HBHMK.js";
import "./_oschunk-L6JZD7VU.js";
import "./_oschunk-HFW3V2GI.js";
import "./_oschunk-YVFTECWM.js";
import {
    b as R,
    f as d,
    h as g,
    n as y
} from "./_oschunk-VR5BNL2K.js";
import {
    a as G,
    g as b,
    m as N,
    n as B,
    q as L,
    r as I,
    s as D,
    t as w
} from "./_oschunk-4VHUVDBV.js";
import {
    a as F
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    Qb as C,
    Sb as T
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as v,
    c as o,
    e as q,
    p
} from "./_oschunk-M5BUVJ72.js";
var $ = {};
var s = v; {
    let u = class u extends s.Controller.BaseViewController {
        constructor(e, t, n) {
            super(e, t, n, $);
            var l = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onClickContinue$Action() {
            return this.hasOwnProperty("__onClickContinue$Action") || (this.__onClickContinue$Action = function(e) {
                var t = this.model,
                    n = this.controller,
                    l = this.idService;
                return s.Logger.startActiveSpan("OnClickContinue", function(a) {
                    a && (a.setAttribute("code.function", "OnClickContinue"), a.setAttribute("outsystems.function.key", "6fc6520c-32b4-4d19-babc-e5999e7f19ba"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return n.ensureControllerAlive("OnClickContinue"), e = n.callContext(e), C.isDesktop$Action(e).isDesktopOut ? s.Navigation.navigateTo(s.Navigation.generateScreenURL("uae", "EmploymentStatus_V2", {}), s.Transitions.createTransition(s.Transitions.TransitionAnimation.None), e, !0) : s.Navigation.navigateTo(s.Navigation.generateScreenURL("uae", "FinancialAssessment_V2", {}), s.Transitions.createTransition(s.Transitions.TransitionAnimation.None), e, !0)
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__onClickContinue$Action
        }
        set _onClickContinue$Action(e) {
            this.__onClickContinue$Action = e
        }
        get _onClickBack$Action() {
            return this.hasOwnProperty("__onClickBack$Action") || (this.__onClickBack$Action = function(e) {
                var t = this.model,
                    n = this.controller,
                    l = this.idService;
                return s.Logger.startActiveSpan("onClickBack", function(a) {
                    a && (a.setAttribute("code.function", "onClickBack"), a.setAttribute("outsystems.function.key", "d71607dd-fc3d-425d-a7cf-d1f604ae9f19"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return n.ensureControllerAlive("onClickBack"), e = n.callContext(e), s.Navigation.navigateTo(s.Navigation.generateScreenURL("uae", "onboarding/personal-details_v2", {}), s.Transitions.createTransition(s.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__onClickBack$Action
        }
        set _onClickBack$Action(e) {
            this.__onClickBack$Action = e
        }
        onClickContinue$Action(e) {
            var t = this.controller;
            return s.Logger.startActiveSpan("OnClickContinue__proxy", function(n) {
                n && (n.setAttribute("code.function", "OnClickContinue"), n.setAttribute("outsystems.function.key", "6fc6520c-32b4-4d19-babc-e5999e7f19ba"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onClickContinue$Action, e)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        onClickBack$Action(e) {
            var t = this.controller;
            return s.Logger.startActiveSpan("onClickBack__proxy", function(n) {
                n && (n.setAttribute("code.function", "onClickBack"), n.setAttribute("outsystems.function.key", "d71607dd-fc3d-425d-a7cf-d1f604ae9f19"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onClickBack$Action, e)
                } finally {
                    n && n.end()
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
                return O.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return T.defaultTimeout
        }
    };
    o(u, "ControllerInner");
    let f = u;
    U = f
}
var U, A = new s.Controller.ControllerFactory(U, F);
var i = q(G());
var _ = v,
    W = class W extends _.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(_.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
o(W, "VariablesRecord");
var P = W;
P.init();
var V = class V extends _.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
o(V, "WidgetsRecord");
var k = V,
    m = class m extends _.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return P
        }
        static getWidgetsRecordConstructor() {
            return k
        }
        static get hasValidationWidgets() {
            return m._hasValidationWidgetsValue === void 0 && (m._hasValidationWidgetsValue = void 0), m._hasValidationWidgetsValue
        }
        setInputs(u) {}
    };
o(m, "Model");
var E = m;
E._hasValidationWidgetsValue = void 0;
var H = new _.Model.ModelFactory(E);
var S = b.PlaceholderContent,
    we = b.IteratorPlaceholderContent,
    Y = o(function() {
        var f = B(function(u) {
            var z = u.model,
                e = u.controller,
                t = u.controller.idService,
                n = e.validationService,
                l = e.callContext(),
                a = D,
                Z = w,
                Q = {
                    props: u,
                    validateWidget: o(function(c) {
                        u.validateWidget(u, c)
                    }, "validateWidget")
                },
                r = z,
                j = I,
                X = L,
                h = N();
            return i.createElement("div", u.rootNodeProperties, j(C.isDesktop$Action(l).isDesktopOut, !1, this, function() {
                return [i.createElement(x, {
                    getOwnerSpan: o(function() {
                        return h.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: o(function() {
                        return h.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        Heading: "Set up your trading profile",
                        Progress: 33,
                        BtnBackVisible: !0
                    },
                    events: {
                        _handleError: o(function(c) {
                            e.handleError(c)
                        }, "_handleError"),
                        event_ClickBtnBack$Action: o(function() {
                            var c = typeof l != "undefined" && l !== null ? l.clone() : e.callContext().clone();
                            e.onClickBack$Action(e.callContext(c))
                        }, "event_ClickBtnBack$Action")
                    },
                    _validationProps: {
                        validationService: n
                    },
                    _idProps: {
                        service: t,
                        uuid: "0",
                        alias: "1"
                    },
                    _widgetRecordProvider: r,
                    placeholders: {
                        content: new S(function() {
                            return [i.createElement(d, {
                                align: 0,
                                animate: !1,
                                style: "display-flex flex-direction-column gap-m",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "1"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(d, {
                                align: 0,
                                animate: !1,
                                style: "display-flex flex-direction-row gap-m",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "2"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(y, {
                                extendedProperties: {
                                    style: "height: 48px;"
                                },
                                gridProperties: {
                                    width: "48px"
                                },
                                image: p.VersionedURL.getVersionedUrl("img/uae.financialassessment.png"),
                                type: 0,
                                _idProps: {
                                    service: t,
                                    uuid: "3"
                                },
                                _widgetRecordProvider: r
                            }), i.createElement(d, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "max-width: 278px;"
                                },
                                style: "display-flex flex-direction-column",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "4"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(g, {
                                extendedProperties: {
                                    style: "font-size: 16px; font-weight: 700;"
                                },
                                value: "Financial assessment",
                                _idProps: {
                                    service: t,
                                    uuid: "5"
                                },
                                _widgetRecordProvider: r
                            }), i.createElement(g, {
                                extendedProperties: {
                                    style: "color: var(--text-default, rgba(0, 0, 0, 0.72));"
                                },
                                gridProperties: {
                                    marginLeft: "0px !important"
                                },
                                value: "Share your income details to help us understand your financial background.",
                                _idProps: {
                                    service: t,
                                    uuid: "6"
                                },
                                _widgetRecordProvider: r
                            }))), i.createElement(d, {
                                align: 0,
                                animate: !1,
                                style: "display-flex flex-direction-row gap-m",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "7"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(y, {
                                extendedProperties: {
                                    style: "height: 48px;"
                                },
                                gridProperties: {
                                    width: "48px"
                                },
                                image: p.VersionedURL.getVersionedUrl("img/uae.tradingsuitability.png"),
                                type: 0,
                                _idProps: {
                                    service: t,
                                    uuid: "8"
                                },
                                _widgetRecordProvider: r
                            }), i.createElement(d, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "max-width: 278px;"
                                },
                                style: "display-flex flex-direction-column",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "9"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(g, {
                                extendedProperties: {
                                    style: "font-size: 16px; font-weight: 700;"
                                },
                                value: "Trading suitability",
                                _idProps: {
                                    service: t,
                                    uuid: "10"
                                },
                                _widgetRecordProvider: r
                            }), i.createElement(g, {
                                extendedProperties: {
                                    style: "color: var(--text-default, rgba(0, 0, 0, 0.72));"
                                },
                                gridProperties: {
                                    marginLeft: "0px !important"
                                },
                                value: "Answer a few questions to help us assess your trading experience.",
                                _idProps: {
                                    service: t,
                                    uuid: "11"
                                },
                                _widgetRecordProvider: r
                            }))), i.createElement(d, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "align-items: center; border: 1px solid var(--core-color-opacity-black-100, rgba(0, 0, 0, 0.08)); border-radius: 8px; display: flex; justify-content: center; padding: 16px;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "12"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(g, {
                                extendedProperties: {
                                    style: "color: var(--component-textIcon-normal-subtle, rgba(0, 0, 0, 0.48)); font-weight: 400;"
                                },
                                value: "Financial regulations require that we collect this information to assess your trading suitability. Your data is encrypted on our secure servers.",
                                _idProps: {
                                    service: t,
                                    uuid: "13"
                                },
                                _widgetRecordProvider: r
                            })))]
                        }),
                        buttonContainer: new S(function() {
                            return [i.createElement(d, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "align-items: flex-end; display: flex; flex-direction: column;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "14"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(R, {
                                enabled: !0,
                                extendedProperties: {
                                    style: "background: var(--component-button-bg-coral-primary-default, #FF444F); border-radius: var(--component-button-border-radius-lg, 24px);"
                                },
                                gridProperties: {
                                    width: "130px"
                                },
                                isDefault: !1,
                                onClick: o(function() {
                                    var c = typeof l != "undefined" && l !== null ? l.clone() : e.callContext().clone();
                                    e.onClickContinue$Action(e.callContext(c))
                                }, "onClick"),
                                style: "btn btn-primary",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "Continue"
                                },
                                _widgetRecordProvider: r
                            }, "Continue"))]
                        })
                    },
                    _dependencies: []
                })]
            }, function() {
                return [i.createElement(x, {
                    getOwnerSpan: o(function() {
                        return h.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: o(function() {
                        return h.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        Progress: 33,
                        Heading: "Set up your trading profile",
                        BtnBackVisible: !0
                    },
                    events: {
                        _handleError: o(function(c) {
                            e.handleError(c)
                        }, "_handleError"),
                        event_ClickBtnBack$Action: o(function() {
                            var c = typeof l != "undefined" && l !== null ? l.clone() : e.callContext().clone();
                            e.onClickBack$Action(e.callContext(c))
                        }, "event_ClickBtnBack$Action")
                    },
                    _validationProps: {
                        validationService: n
                    },
                    _idProps: {
                        service: t,
                        uuid: "16",
                        alias: "2"
                    },
                    _widgetRecordProvider: r,
                    placeholders: {
                        content: new S(function() {
                            return [i.createElement(d, {
                                align: 0,
                                animate: !1,
                                style: "display-flex flex-direction-column gap-m",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "17"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(d, {
                                align: 0,
                                animate: !1,
                                style: "display-flex flex-direction-row gap-m",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "18"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(y, {
                                extendedProperties: {
                                    style: "height: 48px;"
                                },
                                gridProperties: {
                                    width: "48px"
                                },
                                image: p.VersionedURL.getVersionedUrl("img/uae.financialassessment.png"),
                                type: 0,
                                _idProps: {
                                    service: t,
                                    uuid: "19"
                                },
                                _widgetRecordProvider: r
                            }), i.createElement(d, {
                                align: 0,
                                animate: !1,
                                style: "display-flex flex-direction-column",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "20"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(g, {
                                extendedProperties: {
                                    style: "font-size: 16px; font-weight: 700;"
                                },
                                value: "Financial assessment",
                                _idProps: {
                                    service: t,
                                    uuid: "21"
                                },
                                _widgetRecordProvider: r
                            }), i.createElement(g, {
                                extendedProperties: {
                                    style: "color: var(--text-default, rgba(0, 0, 0, 0.72));"
                                },
                                gridProperties: {
                                    marginLeft: "0px !important"
                                },
                                value: "Share your income details to help us understand your financial background.",
                                _idProps: {
                                    service: t,
                                    uuid: "22"
                                },
                                _widgetRecordProvider: r
                            }))), i.createElement(d, {
                                align: 0,
                                animate: !1,
                                style: "display-flex flex-direction-row gap-m",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "23"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(y, {
                                extendedProperties: {
                                    style: "height: 48px;"
                                },
                                gridProperties: {
                                    width: "48px"
                                },
                                image: p.VersionedURL.getVersionedUrl("img/uae.tradingsuitability.png"),
                                type: 0,
                                _idProps: {
                                    service: t,
                                    uuid: "24"
                                },
                                _widgetRecordProvider: r
                            }), i.createElement(d, {
                                align: 0,
                                animate: !1,
                                style: "display-flex flex-direction-column",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "25"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(g, {
                                extendedProperties: {
                                    style: "font-size: 16px; font-weight: 700;"
                                },
                                value: "Trading suitability",
                                _idProps: {
                                    service: t,
                                    uuid: "26"
                                },
                                _widgetRecordProvider: r
                            }), i.createElement(g, {
                                extendedProperties: {
                                    style: "color: var(--text-default, rgba(0, 0, 0, 0.72));"
                                },
                                gridProperties: {
                                    marginLeft: "0px !important"
                                },
                                value: "Answer a few questions to help us assess your trading experience.",
                                _idProps: {
                                    service: t,
                                    uuid: "27"
                                },
                                _widgetRecordProvider: r
                            }))))]
                        }),
                        buttonContainer: new S(function() {
                            return [i.createElement(d, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "align-items: flex-end; display: flex; flex-direction: column;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "28"
                                },
                                _widgetRecordProvider: r
                            }), i.createElement(d, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "background: white; gap: 40px;"
                                },
                                style: "display-flex flex-direction-column fixed bottom-0 left-0 w-full flex justify-center px-6 py-4",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "Footer3"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(d, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "align-items: center; border: 1px solid var(--core-color-opacity-black-100, rgba(0, 0, 0, 0.08)); border-radius: 8px; display: flex; justify-content: center; padding: 16px;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "30"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(g, {
                                extendedProperties: {
                                    style: "color: var(--component-textIcon-normal-subtle, rgba(0, 0, 0, 0.48)); font-weight: 400;"
                                },
                                value: "Financial regulations require that we collect this information to assess your trading suitability. Your data is encrypted on our secure servers.",
                                _idProps: {
                                    service: t,
                                    uuid: "31"
                                },
                                _widgetRecordProvider: r
                            })), i.createElement(d, {
                                align: 0,
                                animate: !1,
                                style: "full-width",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "32"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(R, {
                                enabled: !0,
                                extendedProperties: {
                                    style: "background: var(--component-button-bg-coral-primary-default, #FF444F); border-radius: var(--component-button-border-radius-lg, 24px);"
                                },
                                gridProperties: {
                                    width: "100%"
                                },
                                isDefault: !1,
                                onClick: o(function() {
                                    var c = typeof l != "undefined" && l !== null ? l.clone() : e.callContext().clone();
                                    e.onClickContinue$Action(e.callContext(c))
                                }, "onClick"),
                                style: "btn btn-primary",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "Continue2"
                                },
                                _widgetRecordProvider: r
                            }, "Continue")))]
                        })
                    },
                    _dependencies: []
                })]
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: o(function() {
                return {
                    codeFunction: "FinancialAssessmentSetup_V2",
                    functionKey: "73725066-46f0-468e-a848-3754acbdfba7",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "V2Onboarding.FinancialAssessmentSetup_V2",
            modelFactory: H,
            controllerFactory: A,
            getTitle: o(function() {
                return w("ZlByc_BGjkaoSDdUrL37pw#Title", "FinancialAssessmentSetup_V2")
            }, "getTitle")
        });
        return f.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, f.getJsDependencies = function() {
            return []
        }, f.getBlocks = function() {
            return [x]
        }, f
    }, "componentFactory"),
    J = Y();
export {
    A as controllerModule, H as modelModule, J as viewModule, O as webFlowControllerModule
};