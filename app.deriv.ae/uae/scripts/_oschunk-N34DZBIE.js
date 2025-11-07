import {
    a as P
} from "./_oschunk-4CXZFUZT.js";
import {
    a as b
} from "./_oschunk-7ZNALR7E.js";
import "./_oschunk-HFW3V2GI.js";
import "./_oschunk-YVFTECWM.js";
import {
    b as R,
    f as a,
    h as u,
    n as y,
    u as O
} from "./_oschunk-VR5BNL2K.js";
import {
    a as J,
    g as w,
    m as D,
    n as G,
    q as L,
    r as N,
    s as U,
    t as C
} from "./_oschunk-4VHUVDBV.js";
import {
    a as I
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    Qb as F,
    Sb as T
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as g,
    c as n,
    e as K,
    p
} from "./_oschunk-M5BUVJ72.js";
var M = {};
var m = g; {
    let d = class d extends m.Controller.BaseViewController {
        constructor(e, t, o) {
            super(e, t, o, M);
            var s = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onClickGetVerified$Action() {
            return this.hasOwnProperty("__onClickGetVerified$Action") || (this.__onClickGetVerified$Action = function(e) {
                var t = this.model,
                    o = this.controller,
                    s = this.idService;
                return m.Logger.startActiveSpan("onClickGetVerified", function(l) {
                    l && (l.setAttribute("code.function", "onClickGetVerified"), l.setAttribute("outsystems.function.key", "fbaf3db5-15a4-4d1c-a505-c43455f4f05b"), l.setAttribute("outsystems.function.owner.name", "uae"), l.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return o.ensureControllerAlive("onClickGetVerified"), e = o.callContext(e), m.Navigation.navigateTo(m.Navigation.generateScreenURL("uae", "ConfirmPersonalDetails", {}), m.Transitions.createTransition(m.Transitions.TransitionAnimation.None), e, !0)
                    } finally {
                        l && l.end()
                    }
                }, 1)
            }), this.__onClickGetVerified$Action
        }
        set _onClickGetVerified$Action(e) {
            this.__onClickGetVerified$Action = e
        }
        onClickGetVerified$Action(e) {
            var t = this.controller;
            return m.Logger.startActiveSpan("onClickGetVerified__proxy", function(o) {
                o && (o.setAttribute("code.function", "onClickGetVerified"), o.setAttribute("outsystems.function.key", "fbaf3db5-15a4-4d1c-a505-c43455f4f05b"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onClickGetVerified$Action, e)
                } finally {
                    o && o.end()
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
                return b.default.handleError(e, this.callContext())
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
    n(d, "ControllerInner");
    let f = d;
    $ = f
}
var $, V = new m.Controller.ControllerFactory($, I);
var r = K(J());
var h = g,
    A = class A extends h.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(h.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
n(A, "VariablesRecord");
var E = A;
E.init();
var k = class k extends h.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
n(k, "WidgetsRecord");
var H = k,
    v = class v extends h.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return E
        }
        static getWidgetsRecordConstructor() {
            return H
        }
        static get hasValidationWidgets() {
            return v._hasValidationWidgetsValue === void 0 && (v._hasValidationWidgetsValue = void 0), v._hasValidationWidgetsValue
        }
        setInputs(d) {}
    };
n(v, "Model");
var x = v;
x._hasValidationWidgetsValue = void 0;
var W = new h.Model.ModelFactory(x);
var S = w.PlaceholderContent,
    be = w.IteratorPlaceholderContent,
    j = n(function() {
        var f = G(function(d) {
            var z = d.model,
                e = d.controller,
                t = d.controller.idService,
                o = e.validationService,
                s = e.callContext(),
                l = U,
                Q = C,
                X = {
                    props: d,
                    validateWidget: n(function(c) {
                        d.validateWidget(d, c)
                    }, "validateWidget")
                },
                i = z,
                Y = N,
                Z = L,
                _ = D();
            return r.createElement("div", d.rootNodeProperties, Y(F.isDesktop$Action(s).isDesktopOut, !1, this, function() {
                return [r.createElement(P, {
                    getOwnerSpan: n(function() {
                        return _.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: n(function() {
                        return _.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        BtnCloseVisible: !0,
                        BtnBackVisible: !1,
                        Heading: "Verify yourself",
                        SubHeading2: "Two quick steps to secure your account"
                    },
                    events: {
                        _handleError: n(function(c) {
                            e.handleError(c)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: o
                    },
                    _idProps: {
                        service: t,
                        uuid: "0",
                        alias: "1"
                    },
                    _widgetRecordProvider: i,
                    placeholders: {
                        content: new S(function() {
                            return [r.createElement(a, {
                                align: 0,
                                animate: !1,
                                style: "display-flex flex-direction-column gap-m",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "1"
                                },
                                _widgetRecordProvider: i
                            }, r.createElement(a, {
                                align: 0,
                                animate: !1,
                                style: "display-flex flex-direction-row gap-m",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "2"
                                },
                                _widgetRecordProvider: i
                            }, r.createElement(y, {
                                extendedProperties: {
                                    style: "height: 48px;"
                                },
                                gridProperties: {
                                    width: "48px"
                                },
                                image: p.VersionedURL.getVersionedUrl("img/uae.identity.png"),
                                type: 0,
                                _idProps: {
                                    service: t,
                                    uuid: "3"
                                },
                                _widgetRecordProvider: i
                            }), r.createElement(a, {
                                align: 0,
                                animate: !1,
                                style: "display-flex flex-direction-column",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "4"
                                },
                                _widgetRecordProvider: i
                            }, r.createElement(u, {
                                extendedProperties: {
                                    style: "font-size: 16px; font-weight: 700;"
                                },
                                value: "Identity verification",
                                _idProps: {
                                    service: t,
                                    uuid: "5"
                                },
                                _widgetRecordProvider: i
                            }), r.createElement(u, {
                                extendedProperties: {
                                    style: "color: var(--text-default, rgba(0, 0, 0, 0.72));"
                                },
                                gridProperties: {
                                    marginLeft: "0px !important"
                                },
                                value: "Upload a selfie and your official ID document.",
                                _idProps: {
                                    service: t,
                                    uuid: "6"
                                },
                                _widgetRecordProvider: i
                            }))), r.createElement(a, {
                                align: 0,
                                animate: !1,
                                style: "display-flex flex-direction-row gap-m",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "7"
                                },
                                _widgetRecordProvider: i
                            }, r.createElement(y, {
                                extendedProperties: {
                                    style: "height: 48px;"
                                },
                                gridProperties: {
                                    width: "48px"
                                },
                                image: p.VersionedURL.getVersionedUrl("img/uae.house.png"),
                                type: 0,
                                _idProps: {
                                    service: t,
                                    uuid: "8"
                                },
                                _widgetRecordProvider: i
                            }), r.createElement(a, {
                                align: 0,
                                animate: !1,
                                style: "display-flex flex-direction-column",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "9"
                                },
                                _widgetRecordProvider: i
                            }, r.createElement(u, {
                                extendedProperties: {
                                    style: "font-size: 16px; font-weight: 700;"
                                },
                                value: "Address verification",
                                _idProps: {
                                    service: t,
                                    uuid: "10"
                                },
                                _widgetRecordProvider: i
                            }), r.createElement(u, {
                                extendedProperties: {
                                    style: "color: var(--text-default, rgba(0, 0, 0, 0.72));"
                                },
                                gridProperties: {
                                    marginLeft: "0px !important"
                                },
                                value: "Upload a document confirming your current home address.",
                                _idProps: {
                                    service: t,
                                    uuid: "11"
                                },
                                _widgetRecordProvider: i
                            }))))]
                        }),
                        buttonContainer: new S(function() {
                            return [r.createElement(a, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "align-items: flex-end; display: flex; flex-direction: column;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "12"
                                },
                                _widgetRecordProvider: i
                            }, r.createElement(R, {
                                enabled: !0,
                                extendedProperties: {
                                    style: "background: var(--component-button-bg-coral-primary-default, #FF444F); border-radius: var(--component-button-border-radius-lg, 24px); height: 48px;"
                                },
                                gridProperties: {
                                    width: "130px"
                                },
                                isDefault: !1,
                                onClick: n(function() {
                                    var c = typeof s != "undefined" && s !== null ? s.clone() : e.callContext().clone();
                                    e.onClickGetVerified$Action(e.callContext(c))
                                }, "onClick"),
                                style: "btn btn-primary",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "GetVerified"
                                },
                                _widgetRecordProvider: i
                            }, r.createElement(O, {
                                extendedProperties: {
                                    style: "font-weight: 800;"
                                },
                                text: ["Get verified"],
                                _idProps: {
                                    service: t,
                                    uuid: "14"
                                },
                                _widgetRecordProvider: i
                            })))]
                        })
                    },
                    _dependencies: []
                })]
            }, function() {
                return [r.createElement(P, {
                    getOwnerSpan: n(function() {
                        return _.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: n(function() {
                        return _.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        Heading: "Verify yourself",
                        BtnBackVisible: !1
                    },
                    events: {
                        _handleError: n(function(c) {
                            e.handleError(c)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: o
                    },
                    _idProps: {
                        service: t,
                        uuid: "15",
                        alias: "2"
                    },
                    _widgetRecordProvider: i,
                    placeholders: {
                        content: new S(function() {
                            return [r.createElement(a, {
                                align: 0,
                                animate: !1,
                                style: "display-flex flex-direction-column gap-m",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "16"
                                },
                                _widgetRecordProvider: i
                            }, r.createElement(a, {
                                align: 0,
                                animate: !1,
                                style: "display-flex flex-direction-row gap-m",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "17"
                                },
                                _widgetRecordProvider: i
                            }, r.createElement(y, {
                                extendedProperties: {
                                    style: "height: 48px;"
                                },
                                gridProperties: {
                                    width: "48px"
                                },
                                image: p.VersionedURL.getVersionedUrl("img/uae.identity.png"),
                                type: 0,
                                _idProps: {
                                    service: t,
                                    uuid: "18"
                                },
                                _widgetRecordProvider: i
                            }), r.createElement(a, {
                                align: 0,
                                animate: !1,
                                style: "display-flex flex-direction-column",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "19"
                                },
                                _widgetRecordProvider: i
                            }, r.createElement(u, {
                                extendedProperties: {
                                    style: "font-size: 16px; font-weight: 700;"
                                },
                                value: "Identity verification",
                                _idProps: {
                                    service: t,
                                    uuid: "20"
                                },
                                _widgetRecordProvider: i
                            }), r.createElement(u, {
                                extendedProperties: {
                                    style: "color: var(--text-default, rgba(0, 0, 0, 0.72));"
                                },
                                gridProperties: {
                                    marginLeft: "0px !important"
                                },
                                value: "Upload a selfie and your official ID document.",
                                _idProps: {
                                    service: t,
                                    uuid: "21"
                                },
                                _widgetRecordProvider: i
                            }))), r.createElement(a, {
                                align: 0,
                                animate: !1,
                                style: "display-flex flex-direction-row gap-m",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "22"
                                },
                                _widgetRecordProvider: i
                            }, r.createElement(y, {
                                extendedProperties: {
                                    style: "height: 48px;"
                                },
                                gridProperties: {
                                    width: "48px"
                                },
                                image: p.VersionedURL.getVersionedUrl("img/uae.house.png"),
                                type: 0,
                                _idProps: {
                                    service: t,
                                    uuid: "23"
                                },
                                _widgetRecordProvider: i
                            }), r.createElement(a, {
                                align: 0,
                                animate: !1,
                                style: "display-flex flex-direction-column",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "24"
                                },
                                _widgetRecordProvider: i
                            }, r.createElement(u, {
                                extendedProperties: {
                                    style: "font-size: 16px; font-weight: 700;"
                                },
                                value: "Address verification",
                                _idProps: {
                                    service: t,
                                    uuid: "25"
                                },
                                _widgetRecordProvider: i
                            }), r.createElement(u, {
                                extendedProperties: {
                                    style: "color: var(--text-default, rgba(0, 0, 0, 0.72));"
                                },
                                gridProperties: {
                                    marginLeft: "0px !important"
                                },
                                value: "Upload a document confirming your current home address.",
                                _idProps: {
                                    service: t,
                                    uuid: "26"
                                },
                                _widgetRecordProvider: i
                            }))))]
                        }),
                        buttonContainer: new S(function() {
                            return [r.createElement(a, {
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
                                _widgetRecordProvider: i
                            }, r.createElement(a, {
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
                                _widgetRecordProvider: i
                            }, r.createElement(R, {
                                enabled: !0,
                                extendedProperties: {
                                    style: "background: var(--component-button-bg-coral-primary-default, #FF444F); border-radius: var(--component-button-border-radius-lg, 24px);"
                                },
                                gridProperties: {
                                    width: "100%"
                                },
                                isDefault: !1,
                                onClick: n(function() {
                                    var c = typeof s != "undefined" && s !== null ? s.clone() : e.callContext().clone();
                                    e.onClickGetVerified$Action(e.callContext(c))
                                }, "onClick"),
                                style: "btn btn-primary",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "GetVerified2"
                                },
                                _widgetRecordProvider: i
                            }, r.createElement(O, {
                                extendedProperties: {
                                    style: "font-weight: 800;"
                                },
                                text: ["Get verified"],
                                _idProps: {
                                    service: t,
                                    uuid: "30"
                                },
                                _widgetRecordProvider: i
                            }))))]
                        })
                    },
                    _dependencies: []
                })]
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: n(function() {
                return {
                    codeFunction: "VerifyYourself",
                    functionKey: "85214233-7ce9-4de4-a2d8-927ce16f3e7f",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "V2Flow.VerifyYourself",
            modelFactory: W,
            controllerFactory: V,
            getTitle: n(function() {
                return C("M0Ihhel85E2i2JJ84W8+fw#Title", "VerifyYourself")
            }, "getTitle")
        });
        return f.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, f.getJsDependencies = function() {
            return []
        }, f.getBlocks = function() {
            return [P]
        }, f
    }, "componentFactory"),
    q = j();
export {
    V as controllerModule, W as modelModule, q as viewModule, b as webFlowControllerModule
};