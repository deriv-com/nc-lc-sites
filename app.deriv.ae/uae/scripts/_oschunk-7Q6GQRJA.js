import {
    a as p
} from "./_oschunk-RTFWHKPU.js";
import {
    a as g
} from "./_oschunk-SFRA456L.js";
import "./_oschunk-L6JZD7VU.js";
import "./_oschunk-RVD4FS25.js";
import "./_oschunk-4SYOXZNK.js";
import "./_oschunk-YB2J7GTX.js";
import "./_oschunk-HFW3V2GI.js";
import "./_oschunk-LLAHPWP3.js";
import "./_oschunk-YVFTECWM.js";
import {
    f as A,
    p as L,
    u as k
} from "./_oschunk-VR5BNL2K.js";
import {
    a as X,
    g as h,
    m as M,
    n as W,
    q as D,
    r as F,
    s as f,
    t as E
} from "./_oschunk-4VHUVDBV.js";
import {
    a as b
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    Sb as R
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as l,
    c as r,
    e as K,
    m as V,
    n as x
} from "./_oschunk-M5BUVJ72.js";
var $ = {
        "BEqXku+kE0WeZ0Wq5xVC9w#Value": "\u0645\u0628\u0644\u063A \u0627\u0644\u062A\u062D\u0648\u064A\u0644",
        "kan+xZdiTUi41qqEtWgbbA#Title": "\u0625\u064A\u062F\u0627\u0639 MT5 | Deriv",
        "kan+xZdiTUi41qqEtWgbbA#TitleExpression.1092954118.1": "\u0625\u064A\u062F\u0627\u0639 MT5 | Deriv"
    },
    q = {
        "ar-001": {
            translations: $,
            isRTL: !0
        }
    };
var I = l; {
    let t = class t extends I.Controller.BaseViewController {
        constructor(e, a, c) {
            super(e, a, c, q);
            var O = this.controller;
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
                return p.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return R.defaultTimeout
        }
    };
    r(t, "ControllerInner");
    let n = t;
    N = n
}
var N, S = new I.Controller.ControllerFactory(N, b);
var s = K(X());
var d = l,
    H = class H extends d.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(d.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
r(H, "VariablesRecord");
var u = H;
u.init();
var w = class w extends d.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
r(w, "WidgetsRecord");
var _ = w,
    i = class i extends d.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return u
        }
        static getWidgetsRecordConstructor() {
            return _
        }
        static get hasValidationWidgets() {
            return i._hasValidationWidgetsValue === void 0 && (i._hasValidationWidgetsValue = void 0), i._hasValidationWidgetsValue
        }
        setInputs(t) {}
    };
r(i, "Model");
var v = i;
v._hasValidationWidgetsValue = void 0;
var y = new d.Model.ModelFactory(v);
var B = h.PlaceholderContent,
    He = h.IteratorPlaceholderContent,
    j = r(function() {
        var n = W(function(t) {
            var C = t.model,
                e = t.controller,
                a = t.controller.idService,
                c = e.validationService,
                O = e.callContext(),
                U = f,
                P = E,
                Z = {
                    props: t,
                    validateWidget: r(function(m) {
                        t.validateWidget(t, m)
                    }, "validateWidget")
                },
                o = C,
                Q = F,
                G = D,
                T = M();
            return s.createElement("div", t.rootNodeProperties, s.createElement(g, {
                getOwnerSpan: r(function() {
                    return T.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: r(function() {
                    return T.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    has_back_button: !0
                },
                events: {
                    _handleError: r(function(m) {
                        e.handleError(m)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: c
                },
                _idProps: {
                    service: a,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: o,
                placeholders: {
                    content: new B(function() {
                        return [s.createElement(A, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: a,
                                uuid: "1"
                            },
                            _widgetRecordProvider: o
                        }, s.createElement(L, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            _idProps: {
                                service: a,
                                uuid: "2"
                            },
                            _widgetRecordProvider: o
                        }, s.createElement(k, {
                            extendedProperties: {
                                style: "color: var(--text-brandPrimaryProminent, #00375C); font-size: 24px; font-style: normal; font-weight: 900; line-height: normal;"
                            },
                            text: [G(P("BEqXku+kE0WeZ0Wq5xVC9w#Value", "Transfer amount"))],
                            _idProps: {
                                service: a,
                                uuid: "3"
                            },
                            _widgetRecordProvider: o
                        })))]
                    }),
                    footer: B.Empty
                },
                _dependencies: []
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: r(function() {
                return {
                    codeFunction: "MT5DepositScreen",
                    functionKey: "c5fea991-6297-484d-b8d6-aa84b5681b6c",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "MT5Flow.MT5DepositScreen",
            modelFactory: y,
            controllerFactory: S,
            getTitle: r(function(t) {
                var C = t.model,
                    e = t.controller,
                    a = t.controller.idService,
                    c = e.validationService,
                    O = e.callContext(),
                    U = f,
                    P = E,
                    Z = {
                        props: t,
                        validateWidget: r(function(o) {
                            t.validateWidget(t, o)
                        }, "validateWidget")
                    };
                return V.resolve(x.TranslationsService).getMessage("kan+xZdiTUi41qqEtWgbbA#TitleExpression.1092954118.1", "MT5 deposit | Deriv")
            }, "getTitle")
        });
        return n.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, n.getJsDependencies = function() {
            return []
        }, n.getBlocks = function() {
            return [g]
        }, n
    }, "componentFactory"),
    J = j();
export {
    S as controllerModule, y as modelModule, J as viewModule, p as webFlowControllerModule
};