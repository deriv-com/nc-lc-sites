import {
    a as V
} from "./_oschunk-OWG424DW.js";
import {
    a as R
} from "./_oschunk-SFRA456L.js";
import "./_oschunk-L6JZD7VU.js";
import {
    a as H
} from "./_oschunk-SNXHD6UR.js";
import "./_oschunk-RVD4FS25.js";
import "./_oschunk-4SYOXZNK.js";
import "./_oschunk-YB2J7GTX.js";
import "./_oschunk-HFW3V2GI.js";
import "./_oschunk-LLAHPWP3.js";
import "./_oschunk-YVFTECWM.js";
import {
    b as P,
    f as u,
    n as b,
    u as y
} from "./_oschunk-VR5BNL2K.js";
import {
    a as ee,
    g as x,
    m as B,
    n as j,
    q as $,
    r as z,
    s as O,
    t as w
} from "./_oschunk-4VHUVDBV.js";
import {
    a as Q
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    Qb as I,
    Sb as U
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as p,
    c as n,
    e as J,
    m as L,
    n as M,
    p as C
} from "./_oschunk-M5BUVJ72.js";
var te = {
        "lQr_L3NC9EKDCgC0TajtBQ#Value": "\u062A\u0645",
        "ltZBkH2M7UqlLADCoQLEVQ#Value": "\u064A\u0645\u0643\u0646\u0643 \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u062D\u0627\u0644\u0629 \u0641\u064A \u0635\u0641\u062D\u0629 Hub \u0623\u0648 Profile.",
        "QScc60VWkkS3_wfhoj9ruA#Value": "\u062C\u0627\u0631\u064A \u0645\u0631\u0627\u062C\u0639\u0629 \u0645\u0633\u062A\u0646\u062F\u0627\u062A\u0643",
        "yygZJfVP30a9Vfs_NBpu3Q#Value": "\u062A\u0645",
        "Bk3FvjiQfEWxIiXybXN58g#Value": "\u064A\u0645\u0643\u0646\u0643 \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u062D\u0627\u0644\u0629 \u0641\u064A \u0635\u0641\u062D\u0629 Hub \u0623\u0648 Profile.",
        "HcbGqdXZUky_yScq4nvcjw#Value": "\u062C\u0627\u0631\u064A \u0645\u0631\u0627\u062C\u0639\u0629 \u0645\u0633\u062A\u0646\u062F\u0627\u062A\u0643",
        "Y8fwpFUTLEC7fOqpNOlgxQ#Title": "\u0623\u0643\u0645\u0644 \u0627\u0644\u062A\u0642\u064A\u064A\u0645 \u0627\u0644\u0645\u0627\u0644\u064A | Deriv",
        "Y8fwpFUTLEC7fOqpNOlgxQ#TitleExpression.-1670909126.1": "\u0623\u0643\u0645\u0644 \u0627\u0644\u062A\u0642\u064A\u064A\u0645 \u0627\u0644\u0645\u0627\u0644\u064A | Deriv"
    },
    q = {
        "ar-001": {
            translations: te,
            isRTL: !0
        }
    };
var v = p; {
    let r = class r extends v.Controller.BaseViewController {
        constructor(e, t, a) {
            super(e, t, a, q);
            var s = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _nextOnClick$Action() {
            return this.hasOwnProperty("__nextOnClick$Action") || (this.__nextOnClick$Action = function(e) {
                var t = this.model,
                    a = this.controller,
                    s = this.idService;
                return v.Logger.startActiveSpan("NextOnClick", function(l) {
                    l && (l.setAttribute("code.function", "NextOnClick"), l.setAttribute("outsystems.function.key", "3f1556f6-c2a4-4785-8bb6-af1570a590b7"), l.setAttribute("outsystems.function.owner.name", "uae"), l.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return a.ensureControllerAlive("NextOnClick"), e = a.callContext(e), v.Navigation.navigateTo(v.Navigation.generateScreenURL("uae", "home", {}), v.Transitions.createTransition(v.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        l && l.end()
                    }
                }, 1)
            }), this.__nextOnClick$Action
        }
        set _nextOnClick$Action(e) {
            this.__nextOnClick$Action = e
        }
        nextOnClick$Action(e) {
            var t = this.controller;
            return v.Logger.startActiveSpan("NextOnClick__proxy", function(a) {
                a && (a.setAttribute("code.function", "NextOnClick"), a.setAttribute("outsystems.function.key", "3f1556f6-c2a4-4785-8bb6-af1570a590b7"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._nextOnClick$Action, e)
                } finally {
                    a && a.end()
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
                return V.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return U.defaultTimeout
        }
    };
    n(r, "ControllerInner");
    let d = r;
    Y = d
}
var Y, A = new v.Controller.ControllerFactory(Y, Q);
var o = J(ee());
var h = p,
    W = class W extends h.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(h.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
n(W, "VariablesRecord");
var E = W;
E.init();
var D = class D extends h.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
n(D, "WidgetsRecord");
var k = D,
    g = class g extends h.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return E
        }
        static getWidgetsRecordConstructor() {
            return k
        }
        static get hasValidationWidgets() {
            return g._hasValidationWidgetsValue === void 0 && (g._hasValidationWidgetsValue = void 0 || void 0), g._hasValidationWidgetsValue
        }
        setInputs(r) {}
    };
n(g, "Model");
var S = g;
S._hasValidationWidgetsValue = void 0;
var T = new h.Model.ModelFactory(S);
var F = x.PlaceholderContent,
    Te = x.IteratorPlaceholderContent,
    ne = n(function() {
        var d = j(function(r) {
            var N = r.model,
                e = r.controller,
                t = r.controller.idService,
                a = e.validationService,
                s = e.callContext(),
                l = O,
                f = w,
                G = {
                    props: r,
                    validateWidget: n(function(c) {
                        r.validateWidget(r, c)
                    }, "validateWidget")
                },
                i = N,
                K = z,
                m = $,
                _ = B();
            return o.createElement("div", r.rootNodeProperties, K(I.isDesktop$Action(s).isDesktopOut, !1, this, function() {
                return [o.createElement(H, {
                    getOwnerSpan: n(function() {
                        return _.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: n(function() {
                        return _.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: n(function(c) {
                            e.handleError(c)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: a
                    },
                    _idProps: {
                        service: t,
                        uuid: "0",
                        alias: "1"
                    },
                    _widgetRecordProvider: i,
                    placeholders: {
                        contentbody: new F(function() {
                            return [o.createElement(u, {
                                align: 0,
                                animate: !1,
                                style: "display-flex flex-direction-column",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "1"
                                },
                                _widgetRecordProvider: i
                            }, o.createElement(u, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "margin-top: 150px;"
                                },
                                style: "flex flex-col justify-content-center align-items-center gap-6",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "2"
                                },
                                _widgetRecordProvider: i
                            }, o.createElement(b, {
                                gridProperties: {
                                    width: "50px"
                                },
                                image: C.VersionedURL.getVersionedUrl("img/uae.document.svg"),
                                type: 0,
                                _idProps: {
                                    service: t,
                                    uuid: "3"
                                },
                                _widgetRecordProvider: i
                            }), o.createElement(u, {
                                align: 0,
                                animate: !1,
                                style: "flex flex-col gap-2 align-items-center justify-content-center text-align-center",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "4"
                                },
                                _widgetRecordProvider: i
                            }, o.createElement(y, {
                                extendedProperties: {
                                    style: "font-size: 24px; font-weight: 900;"
                                },
                                text: [m(f("HcbGqdXZUky_yScq4nvcjw#Value", "Your documents are in review"))],
                                _idProps: {
                                    service: t,
                                    uuid: "5"
                                },
                                _widgetRecordProvider: i
                            }), m(f("Bk3FvjiQfEWxIiXybXN58g#Value", "You may check the status on the Hub or Profile page.")))), o.createElement(u, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "background: white; padding: 16px;"
                                },
                                style: "fixed bottom-0 left-0 w-full flex justify-center",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "ActionButton2"
                                },
                                _widgetRecordProvider: i
                            }, o.createElement(P, {
                                enabled: !0,
                                isDefault: !1,
                                onClick: n(function() {
                                    var c = typeof s != "undefined" && s !== null ? s.clone() : e.callContext().clone();
                                    e.nextOnClick$Action(e.callContext(c))
                                }, "onClick"),
                                style: "btn btn-primary action-button",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "7"
                                },
                                _widgetRecordProvider: i
                            }, o.createElement(y, {
                                extendedProperties: {
                                    style: "font-size: 16px; font-weight: bold;"
                                },
                                text: [m(f("yygZJfVP30a9Vfs_NBpu3Q#Value", "Done"))],
                                _idProps: {
                                    service: t,
                                    uuid: "8"
                                },
                                _widgetRecordProvider: i
                            }))))]
                        })
                    },
                    _dependencies: []
                })]
            }, function() {
                return [o.createElement(R, {
                    getOwnerSpan: n(function() {
                        return _.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: n(function() {
                        return _.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        hasRighAction: !1,
                        has_back_button: !1
                    },
                    events: {
                        _handleError: n(function(c) {
                            e.handleError(c)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: a
                    },
                    _idProps: {
                        service: t,
                        uuid: "9",
                        alias: "2"
                    },
                    _widgetRecordProvider: i,
                    placeholders: {
                        content: new F(function() {
                            return [o.createElement(u, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "margin-top: 150px;"
                                },
                                style: "flex flex-col justify-content-center align-items-center gap-6",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "10"
                                },
                                _widgetRecordProvider: i
                            }, o.createElement(b, {
                                gridProperties: {
                                    width: "50px"
                                },
                                image: C.VersionedURL.getVersionedUrl("img/uae.document.svg"),
                                type: 0,
                                _idProps: {
                                    service: t,
                                    uuid: "11"
                                },
                                _widgetRecordProvider: i
                            }), o.createElement(u, {
                                align: 0,
                                animate: !1,
                                style: "flex flex-col gap-2 align-items-center justify-content-center text-align-center",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "12"
                                },
                                _widgetRecordProvider: i
                            }, o.createElement(y, {
                                extendedProperties: {
                                    style: "font-size: 24px; font-weight: 900;"
                                },
                                text: [m(f("QScc60VWkkS3_wfhoj9ruA#Value", "Your documents are in review"))],
                                _idProps: {
                                    service: t,
                                    uuid: "13"
                                },
                                _widgetRecordProvider: i
                            }), m(f("ltZBkH2M7UqlLADCoQLEVQ#Value", "You may check the status on the Hub or Profile page.")))), o.createElement(u, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "background: white; padding: 16px;"
                                },
                                style: "fixed bottom-0 left-0 w-full flex justify-center",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "ActionButton"
                                },
                                _widgetRecordProvider: i
                            }, o.createElement(P, {
                                enabled: !0,
                                isDefault: !1,
                                onClick: n(function() {
                                    var c = typeof s != "undefined" && s !== null ? s.clone() : e.callContext().clone();
                                    e.nextOnClick$Action(e.callContext(c))
                                }, "onClick"),
                                style: "btn btn-primary action-button",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "15"
                                },
                                _widgetRecordProvider: i
                            }, o.createElement(y, {
                                extendedProperties: {
                                    style: "font-size: 16px; font-weight: bold;"
                                },
                                text: [m(f("lQr_L3NC9EKDCgC0TajtBQ#Value", "Done"))],
                                _idProps: {
                                    service: t,
                                    uuid: "16"
                                },
                                _widgetRecordProvider: i
                            })))]
                        }),
                        footer: F.Empty
                    },
                    _dependencies: []
                })]
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: n(function() {
                return {
                    codeFunction: "UserFinancialAssessmentCompletion",
                    functionKey: "a4f0c763-1355-402c-bb7c-eaa934e960c5",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "FinancialAssessmentFlow.UserFinancialAssessmentCompletion",
            modelFactory: T,
            controllerFactory: A,
            getTitle: n(function(r) {
                var N = r.model,
                    e = r.controller,
                    t = r.controller.idService,
                    a = e.validationService,
                    s = e.callContext(),
                    l = O,
                    f = w,
                    G = {
                        props: r,
                        validateWidget: n(function(i) {
                            r.validateWidget(r, i)
                        }, "validateWidget")
                    };
                return L.resolve(M.TranslationsService).getMessage("Y8fwpFUTLEC7fOqpNOlgxQ#TitleExpression.-1670909126.1", "Complete financial assessment | Deriv")
            }, "getTitle")
        });
        return d.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, d.getJsDependencies = function() {
            return []
        }, d.getBlocks = function() {
            return [H, R]
        }, d
    }, "componentFactory"),
    re = ne();
export {
    A as controllerModule, T as modelModule, re as viewModule, V as webFlowControllerModule
};