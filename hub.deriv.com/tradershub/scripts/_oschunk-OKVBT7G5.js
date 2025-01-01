import {
    h as S,
    j as w,
    y as O
} from "./_oschunk-42NACYKQ.js";
import {
    a as R
} from "./_oschunk-2M7PXTSQ.js";
import {
    a as z,
    g as P,
    i as v
} from "./_oschunk-RKYF3TWC.js";
import {
    a as A,
    c as E
} from "./_oschunk-DOFMR6EA.js";
import {
    ia as l
} from "./_oschunk-2JKANR6M.js";
import {
    c as a,
    g as H
} from "./_oschunk-DVBKI63I.js";
var d = H(z());
var i = l,
    g = class g extends i.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Step", "stepIn", "Step", !0, !1, i.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_stepInDataFetchStatus", "_stepInDataFetchStatus", "_stepInDataFetchStatus", !0, !1, i.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(i.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(g, "VariablesRecord");
var c = g;
c.init();
var p = class p extends i.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(p, "WidgetsRecord");
var f = p,
    T = class T extends i.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return c
        }
        static getWidgetsRecordConstructor() {
            return f
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(r) {
            "Step" in r && (this.variables.stepIn = r.Step, "_stepInDataFetchStatus" in r && (this.variables._stepInDataFetchStatus = r._stepInDataFetchStatus))
        }
    };
a(T, "Model");
var u = T;
u._hasValidationWidgetsValue = void 0;
var D = new i.Model.ModelFactory(u);
var L = {
        "rXpJmX78L0GOXXPzDs9xhQ#Value": "\u062A\u0642\u064A\u064A\u0645 \u0627\u0644\u062A\u062F\u0627\u0648\u0644"
    },
    V = {
        "rXpJmX78L0GOXXPzDs9xhQ#Value": "Handelsbewertung"
    },
    B = {
        "rXpJmX78L0GOXXPzDs9xhQ#Value": "Evaluaci\xF3n de trading"
    },
    N = {
        "rXpJmX78L0GOXXPzDs9xhQ#Value": "\xC9valuation de trading"
    },
    G = {
        "rXpJmX78L0GOXXPzDs9xhQ#Value": "Valutazione del commercio"
    },
    W = {
        "rXpJmX78L0GOXXPzDs9xhQ#Value": "Ocena inwestycji"
    },
    $ = {
        "rXpJmX78L0GOXXPzDs9xhQ#Value": "Avalia\xE7\xE3o da negocia\xE7\xE3o"
    },
    I = {
        "ar-001": {
            translations: L,
            isRTL: !0
        },
        "de-DE": {
            translations: V,
            isRTL: !1
        },
        "es-ES": {
            translations: B,
            isRTL: !1
        },
        "fr-FR": {
            translations: N,
            isRTL: !1
        },
        "it-IT": {
            translations: G,
            isRTL: !1
        },
        "pl-PL": {
            translations: W,
            isRTL: !1
        },
        "pt-PT": {
            translations: $,
            isRTL: !1
        }
    };
var h = l; {
    let r = class r extends h.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, I);
            var _ = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    _ = this.idService;
                return h.Logger.startActiveSpan("OnInitialize", function(s) {
                    s && (s.setAttribute("code.function", "OnInitialize"), s.setAttribute("outsystems.function.key", "2cc62dcb-329a-4757-ae3e-e4196a50a771"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e), A.setRealSignupCurrentStep(5)
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        onInitialize$Action(e) {
            var n = this.controller;
            return h.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "2cc62dcb-329a-4757-ae3e-e4196a50a771"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
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
                    _ = this.idService;
                return n.onInitialize$Action(e)
            }), this._onInitializeEventHandler
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
            return E.defaultTimeout
        }
    };
    a(r, "ControllerInner");
    let m = r;
    F = m
}
var F, C = new h.Controller.ControllerFactory(F, R);
var J = l,
    he = v.PlaceholderContent,
    me = v.IteratorPlaceholderContent,
    o = class o extends P.BaseWebBlock {
        static get displayName() {
            return "TradingAssessmentFlow.TradingAssessmentTitleBar"
        }
        static getAttributes() {
            return {
                codeFunction: "TradingAssessmentTitleBar",
                functionKey: "6e2d8187-b987-4a50-a234-8195dbbf8c68",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.TradingAssessmentFlow.TradingAssessmentTitleBar.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return D
        }
        get controllerFactory() {
            return C
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                y = this.controller,
                e = this.idService,
                n = y.validationService,
                t = this.widgetsRecordProvider,
                _ = y.callContext(),
                s = o.ifWidget,
                x = o.textWidget,
                M = o.asPrimitiveValue,
                X = o.getTranslation,
                Q = this;
            return d.createElement("div", this.getRootNodeProperties(), d.createElement(S, {
                align: 0,
                animate: !1,
                style: "display-flex align-items-center justify-content-space-between title-container-mobile",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, d.createElement(O, {
                extendedProperties: {
                    style: "font-size: 18px; font-weight: bold;"
                },
                text: [x(X("rXpJmX78L0GOXXPzDs9xhQ#Value", "Trading assessment"))],
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }), d.createElement(w, {
                extendedProperties: {
                    style: "font-weight: bold;"
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                value: r.variables.stepIn + "/10",
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: J.Model.calculateDataFetchStatus(r.variables._stepInDataFetchStatus)
            })))
        }
    };
a(o, "View");
var b = o,
    _e = b;
export {
    _e as a
};