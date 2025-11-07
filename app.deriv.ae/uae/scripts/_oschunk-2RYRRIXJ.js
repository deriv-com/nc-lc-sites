import {
    a as E
} from "./_oschunk-J6UGFGPZ.js";
import {
    a as _
} from "./_oschunk-SFRA456L.js";
import "./_oschunk-L6JZD7VU.js";
import "./_oschunk-RVD4FS25.js";
import "./_oschunk-4SYOXZNK.js";
import "./_oschunk-YB2J7GTX.js";
import "./_oschunk-HFW3V2GI.js";
import "./_oschunk-LLAHPWP3.js";
import "./_oschunk-YVFTECWM.js";
import {
    f as p,
    u as b
} from "./_oschunk-VR5BNL2K.js";
import {
    a as Q,
    g as m,
    m as V,
    n as R,
    q as x,
    r as W,
    s as F,
    t as f
} from "./_oschunk-4VHUVDBV.js";
import {
    a as O
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    Sb as C
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as d,
    c as t,
    e as G
} from "./_oschunk-M5BUVJ72.js";
var k = {
        "cAQWssuWRkWVQGFxSYU5ig#Value": "\u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u062D\u0633\u0627\u0628"
    },
    A = {
        "ar-001": {
            translations: k,
            isRTL: !0
        }
    };
var M = d; {
    let r = class r extends M.Controller.BaseViewController {
        constructor(e, a, v) {
            super(e, a, v, A);
            var N = this.controller;
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
                return E.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return C.defaultTimeout
        }
    };
    t(r, "ControllerInner");
    let n = r;
    D = n
}
var D, g = new M.Controller.ControllerFactory(D, O);
var i = G(Q());
var s = d,
    H = class H extends s.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(s.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
t(H, "VariablesRecord");
var c = H;
c.init();
var w = class w extends s.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
t(w, "WidgetsRecord");
var y = w,
    o = class o extends s.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return c
        }
        static getWidgetsRecordConstructor() {
            return y
        }
        static get hasValidationWidgets() {
            return o._hasValidationWidgetsValue === void 0 && (o._hasValidationWidgetsValue = void 0), o._hasValidationWidgetsValue
        }
        setInputs(r) {}
    };
t(o, "Model");
var u = o;
u._hasValidationWidgetsValue = void 0;
var S = new s.Model.ModelFactory(u);
var I = m.PlaceholderContent,
    ye = m.IteratorPlaceholderContent,
    B = t(function() {
        var n = R(function(r) {
            var L = r.model,
                e = r.controller,
                a = r.controller.idService,
                v = e.validationService,
                N = e.callContext(),
                K = F,
                U = f,
                Y = {
                    props: r,
                    validateWidget: t(function(h) {
                        r.validateWidget(r, h)
                    }, "validateWidget")
                },
                l = L,
                $ = W,
                z = x,
                P = V();
            return i.createElement("div", r.rootNodeProperties, i.createElement(_, {
                getOwnerSpan: t(function() {
                    return P.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: t(function() {
                    return P.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    has_close_icon: !0
                },
                events: {
                    _handleError: t(function(h) {
                        e.handleError(h)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: v
                },
                _idProps: {
                    service: a,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: l,
                placeholders: {
                    content: new I(function() {
                        return [i.createElement(p, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: a,
                                uuid: "1"
                            },
                            _widgetRecordProvider: l
                        }, i.createElement(p, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: a,
                                uuid: "2"
                            },
                            _widgetRecordProvider: l
                        }, i.createElement(b, {
                            extendedProperties: {
                                style: "color: var(--text-brandPrimaryProminent); font-size: 24px; font-style: normal; font-weight: 900; line-height: normal;"
                            },
                            style: "margin-bottom-l",
                            text: [z(U("cAQWssuWRkWVQGFxSYU5ig#Value", "Account verification"))],
                            _idProps: {
                                service: a,
                                uuid: "3"
                            },
                            _widgetRecordProvider: l
                        })))]
                    }),
                    footer: I.Empty
                },
                _dependencies: []
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: t(function() {
                return {
                    codeFunction: "AccountVerification",
                    functionKey: "56cd8fa0-773a-4c6d-881a-acea41f5e20b",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "UserProfileFlow.AccountVerification",
            modelFactory: S,
            controllerFactory: g,
            getTitle: t(function() {
                return f("oI_NVjp3bUyIGqzqQfXiCw#Title", "AccountVerification")
            }, "getTitle")
        });
        return n.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, n.getJsDependencies = function() {
            return []
        }, n.getBlocks = function() {
            return [_]
        }, n
    }, "componentFactory"),
    q = B();
export {
    g as controllerModule, S as modelModule, q as viewModule, E as webFlowControllerModule
};