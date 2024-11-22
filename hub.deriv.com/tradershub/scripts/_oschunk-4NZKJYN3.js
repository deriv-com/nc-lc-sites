import {
    h as l,
    j as m,
    w as T,
    y as f
} from "./_oschunk-HUOHOHZB.js";
import {
    a as P
} from "./_oschunk-Y45M2O2K.js";
import {
    a as B,
    g as I,
    i as h
} from "./_oschunk-6LASTRK7.js";
import {
    d as E
} from "./_oschunk-27GDEXUT.js";
import {
    ia as o
} from "./_oschunk-NTQBNJ73.js";
import {
    c as n,
    g as Q
} from "./_oschunk-DVBKI63I.js";
var s = Q(B());
var a = o,
    g = class g extends a.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsRequired", "isRequiredIn", "IsRequired", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isRequiredInDataFetchStatus", "_isRequiredInDataFetchStatus", "_isRequiredInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Page", "pageIn", "Page", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_pageInDataFetchStatus", "_pageInDataFetchStatus", "_pageInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("QuestionText", "questionTextIn", "QuestionText", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_questionTextInDataFetchStatus", "_questionTextInDataFetchStatus", "_questionTextInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HideQuestion", "hideQuestionIn", "HideQuestion", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_hideQuestionInDataFetchStatus", "_hideQuestionInDataFetchStatus", "_hideQuestionInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(a.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
n(g, "VariablesRecord");
var d = g;
d.init();
var _ = class _ extends a.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
n(_, "WidgetsRecord");
var v = _,
    p = class p extends a.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return d
        }
        static getWidgetsRecordConstructor() {
            return v
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "IsRequired" in t && (this.variables.isRequiredIn = t.IsRequired, "_isRequiredInDataFetchStatus" in t && (this.variables._isRequiredInDataFetchStatus = t._isRequiredInDataFetchStatus)), "Page" in t && (this.variables.pageIn = t.Page, "_pageInDataFetchStatus" in t && (this.variables._pageInDataFetchStatus = t._pageInDataFetchStatus)), "QuestionText" in t && (this.variables.questionTextIn = t.QuestionText, "_questionTextInDataFetchStatus" in t && (this.variables._questionTextInDataFetchStatus = t._questionTextInDataFetchStatus)), "HideQuestion" in t && (this.variables.hideQuestionIn = t.HideQuestion, "_hideQuestionInDataFetchStatus" in t && (this.variables._hideQuestionInDataFetchStatus = t._hideQuestionInDataFetchStatus))
        }
    };
n(p, "Model");
var c = p;
c._hasValidationWidgetsValue = void 0;
var x = new a.Model.ModelFactory(c);
var V = {
        "bnbPcWlzJUahOYrXLe3SHw#Value": "Ceci est requis.",
        "8xrddWfZQkOTola2E8E7dg#Value": "\xC9valuation financi\xE8re"
    },
    w = {
        "fr-FR": {
            translations: V,
            isRTL: !1
        }
    };
var H = o; {
    let t = class t extends H.Controller.BaseViewController {
        constructor(e, D, r) {
            super(e, D, r, w);
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
    n(t, "ControllerInner");
    let u = t;
    O = u
}
var O, C = new H.Controller.ControllerFactory(O, P);
var q = o,
    oe = h.PlaceholderContent,
    le = h.IteratorPlaceholderContent,
    i = class i extends I.BaseWebBlock {
        static get displayName() {
            return "FinancialAssessmentFlow.AssessmentBlock"
        }
        static getAttributes() {
            return {
                codeFunction: "AssessmentBlock",
                functionKey: "eb7317af-0205-4115-bb9f-cb95f1ef94b2",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.FinancialAssessmentFlow.AssessmentBlock.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return x
        }
        get controllerFactory() {
            return C
        }
        get title() {
            return ""
        }
        internalRender() {
            let t = this.model,
                F = this.controller,
                e = this.idService,
                D = F.validationService,
                r = this.widgetsRecordProvider,
                W = F.callContext(),
                S = i.ifWidget,
                y = i.textWidget,
                k = i.asPrimitiveValue,
                b = i.getTranslation,
                A = this;
            return s.createElement("div", this.getRootNodeProperties(), s.createElement(l, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: r
            }, s.createElement(l, {
                align: 0,
                animate: !1,
                style: "display-flex align-items-center justify-content-space-between",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "PageNumber"
                },
                _widgetRecordProvider: r
            }, s.createElement(l, {
                align: 0,
                animate: !1,
                style: "financial-assessment-header",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "FinancialAssessmentHeader"
                },
                _widgetRecordProvider: r
            }, s.createElement(f, {
                extendedProperties: {
                    style: "color: #000000; font-size: 18px; font-weight: bold;"
                },
                text: [y(b("8xrddWfZQkOTola2E8E7dg#Value", "Financial assessment"))],
                _idProps: {
                    service: e,
                    uuid: "3"
                },
                _widgetRecordProvider: r
            })), s.createElement(m, {
                style: "page-number",
                value: t.variables.pageIn,
                _idProps: {
                    service: e,
                    uuid: "4"
                },
                _widgetRecordProvider: r,
                value_dataFetchStatus: q.Model.calculateDataFetchStatus(t.variables._pageInDataFetchStatus)
            })), S(t.variables.hideQuestionIn, !1, this, function() {
                return []
            }, function() {
                return [s.createElement(l, {
                    align: 0,
                    animate: !1,
                    style: "question-container",
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "Question"
                    },
                    _widgetRecordProvider: r
                }, S(t.variables.isRequiredIn, !1, this, function() {
                    return [s.createElement(l, {
                        align: 0,
                        animate: !1,
                        style: "required-container",
                        visible: !0,
                        _idProps: {
                            service: e,
                            name: "Required"
                        },
                        _widgetRecordProvider: r
                    }, s.createElement(f, {
                        extendedProperties: {
                            style: "color: #EC3F3F;"
                        },
                        text: [y(b("bnbPcWlzJUahOYrXLe3SHw#Value", "* This is required."))],
                        _idProps: {
                            service: e,
                            uuid: "7"
                        },
                        _widgetRecordProvider: r
                    }))]
                }, function() {
                    return []
                }), s.createElement(m, {
                    style: "question",
                    value: t.variables.questionTextIn,
                    _idProps: {
                        service: e,
                        uuid: "8"
                    },
                    _widgetRecordProvider: r,
                    value_dataFetchStatus: q.Model.calculateDataFetchStatus(t.variables._questionTextInDataFetchStatus)
                }))]
            }), s.createElement(T, {
                align: 0,
                content: A.props.placeholders.content,
                _idProps: {
                    service: e,
                    name: "content"
                },
                _widgetRecordProvider: r
            })))
        }
    };
n(i, "View");
var R = i,
    de = R;
export {
    de as a
};