import {
    a as f
} from "./_oschunk-7ZNALR7E.js";
import {
    a as m
} from "./_oschunk-SFRA456L.js";
import "./_oschunk-L6JZD7VU.js";
import "./_oschunk-RVD4FS25.js";
import "./_oschunk-4SYOXZNK.js";
import "./_oschunk-YB2J7GTX.js";
import "./_oschunk-HFW3V2GI.js";
import "./_oschunk-LLAHPWP3.js";
import "./_oschunk-YVFTECWM.js";
import "./_oschunk-VR5BNL2K.js";
import {
    a as N,
    g as h,
    m as O,
    n as P,
    q as V,
    r as R,
    s as T,
    t as v
} from "./_oschunk-4VHUVDBV.js";
import {
    a as C
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    Sb as w
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as i,
    c as t,
    e as L
} from "./_oschunk-M5BUVJ72.js";
var M = {};
var F = i; {
    let n = class n extends F.Controller.BaseViewController {
        constructor(e, d, c) {
            super(e, d, c, M);
            var W = this.controller;
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
                return f.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return w.defaultTimeout
        }
    };
    t(n, "ControllerInner");
    let r = n;
    b = r
}
var b, p = new F.Controller.ControllerFactory(b, C);
var S = L(N());
var o = i,
    g = class g extends o.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(o.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
t(g, "VariablesRecord");
var s = g;
s.init();
var _ = class _ extends o.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
t(_, "WidgetsRecord");
var E = _,
    a = class a extends o.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return s
        }
        static getWidgetsRecordConstructor() {
            return E
        }
        static get hasValidationWidgets() {
            return a._hasValidationWidgetsValue === void 0 && (a._hasValidationWidgetsValue = void 0), a._hasValidationWidgetsValue
        }
        setInputs(n) {}
    };
t(a, "Model");
var l = a;
l._hasValidationWidgetsValue = void 0;
var y = new o.Model.ModelFactory(l);
var D = h.PlaceholderContent,
    Ee = h.IteratorPlaceholderContent,
    z = t(function() {
        var r = P(function(n) {
            var A = n.model,
                e = n.controller,
                d = n.controller.idService,
                c = e.validationService,
                W = e.callContext(),
                G = T,
                k = v,
                J = {
                    props: n,
                    validateWidget: t(function(u) {
                        n.validateWidget(n, u)
                    }, "validateWidget")
                },
                I = A,
                K = R,
                U = V,
                H = O();
            return S.createElement("div", n.rootNodeProperties, S.createElement(m, {
                getOwnerSpan: t(function() {
                    return H.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: t(function() {
                    return H.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: t(function(u) {
                        e.handleError(u)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: c
                },
                _idProps: {
                    service: d,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: I,
                placeholders: {
                    content: D.Empty,
                    footer: D.Empty
                },
                _dependencies: []
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: t(function() {
                return {
                    codeFunction: "TradingAccountMT5",
                    functionKey: "f2b00f68-0e36-4bcf-938a-f1bf3e713824",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "V2Flow.TradingAccountMT5",
            modelFactory: y,
            controllerFactory: p,
            getTitle: t(function() {
                return v("aA+w8jYOz0uTivG_PnE4JA#Title", "TradingAccountMT5")
            }, "getTitle")
        });
        return r.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, r.getJsDependencies = function() {
            return []
        }, r.getBlocks = function() {
            return [m]
        }, r
    }, "componentFactory"),
    B = z();
export {
    p as controllerModule, y as modelModule, B as viewModule, f as webFlowControllerModule
};