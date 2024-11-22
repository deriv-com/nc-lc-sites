import {
    h as b,
    j as P,
    y as R
} from "./_oschunk-HUOHOHZB.js";
import {
    a as T
} from "./_oschunk-Y45M2O2K.js";
import {
    a as I,
    g as y,
    i as h
} from "./_oschunk-6LASTRK7.js";
import {
    d as E
} from "./_oschunk-27GDEXUT.js";
import {
    ia as n
} from "./_oschunk-NTQBNJ73.js";
import {
    c as r,
    g as A
} from "./_oschunk-DVBKI63I.js";
var o = A(I());
var a = n,
    m = class m extends a.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Step", "stepIn", "Step", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_stepInDataFetchStatus", "_stepInDataFetchStatus", "_stepInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(a.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
r(m, "VariablesRecord");
var d = m;
d.init();
var g = class g extends a.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
r(g, "WidgetsRecord");
var u = g,
    p = class p extends a.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return d
        }
        static getWidgetsRecordConstructor() {
            return u
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "Step" in t && (this.variables.stepIn = t.Step, "_stepInDataFetchStatus" in t && (this.variables._stepInDataFetchStatus = t._stepInDataFetchStatus))
        }
    };
r(p, "Model");
var l = p;
l._hasValidationWidgetsValue = void 0;
var S = new a.Model.ModelFactory(l);
var B = {
        "rXpJmX78L0GOXXPzDs9xhQ#Value": "\xC9valuation de trading"
    },
    w = {
        "fr-FR": {
            translations: B,
            isRTL: !1
        }
    };
var D = n; {
    let t = class t extends D.Controller.BaseViewController {
        constructor(e, _, i) {
            super(e, _, i, w);
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
    r(t, "ControllerInner");
    let c = t;
    F = c
}
var F, H = new D.Controller.ControllerFactory(F, T);
var V = n,
    ie = h.PlaceholderContent,
    oe = h.IteratorPlaceholderContent,
    s = class s extends y.BaseWebBlock {
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
            return S
        }
        get controllerFactory() {
            return H
        }
        get title() {
            return ""
        }
        internalRender() {
            let t = this.model,
                f = this.controller,
                e = this.idService,
                _ = f.validationService,
                i = this.widgetsRecordProvider,
                O = f.callContext(),
                W = s.ifWidget,
                C = s.textWidget,
                z = s.asPrimitiveValue,
                x = s.getTranslation,
                M = this;
            return o.createElement("div", this.getRootNodeProperties(), o.createElement(b, {
                align: 0,
                animate: !1,
                style: "display-flex align-items-center justify-content-space-between title-container-mobile",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: i
            }, o.createElement(R, {
                extendedProperties: {
                    style: "font-size: 18px; font-weight: bold;"
                },
                text: [C(x("rXpJmX78L0GOXXPzDs9xhQ#Value", "Trading assessment"))],
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: i
            }), o.createElement(P, {
                extendedProperties: {
                    style: "font-weight: bold;"
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                value: t.variables.stepIn + "/10",
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: i,
                value_dataFetchStatus: V.Model.calculateDataFetchStatus(t.variables._stepInDataFetchStatus)
            })))
        }
    };
r(s, "View");
var v = s,
    de = v;
export {
    de as a
};