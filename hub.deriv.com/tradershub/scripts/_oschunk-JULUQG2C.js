import {
    h as d,
    j as g,
    w as O,
    y as b
} from "./_oschunk-42NACYKQ.js";
import {
    a as A
} from "./_oschunk-2M7PXTSQ.js";
import {
    a as q,
    g as w,
    i as v
} from "./_oschunk-RKYF3TWC.js";
import {
    a as P,
    c as D
} from "./_oschunk-DOFMR6EA.js";
import {
    ia as c
} from "./_oschunk-2JKANR6M.js";
import {
    c as o,
    g as k
} from "./_oschunk-DVBKI63I.js";
var n = k(q());
var s = c,
    R = class R extends s.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsRequired", "isRequiredIn", "IsRequired", !0, !1, s.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isRequiredInDataFetchStatus", "_isRequiredInDataFetchStatus", "_isRequiredInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Page", "pageIn", "Page", !0, !1, s.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_pageInDataFetchStatus", "_pageInDataFetchStatus", "_pageInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("QuestionText", "questionTextIn", "QuestionText", !0, !1, s.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_questionTextInDataFetchStatus", "_questionTextInDataFetchStatus", "_questionTextInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HideQuestion", "hideQuestionIn", "HideQuestion", !0, !1, s.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_hideQuestionInDataFetchStatus", "_hideQuestionInDataFetchStatus", "_hideQuestionInDataFetchStatus", !0, !1, s.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(s.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
o(R, "VariablesRecord");
var u = R;
u.init();
var S = class S extends s.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
o(S, "WidgetsRecord");
var E = S,
    y = class y extends s.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return u
        }
        static getWidgetsRecordConstructor() {
            return E
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "IsRequired" in t && (this.variables.isRequiredIn = t.IsRequired, "_isRequiredInDataFetchStatus" in t && (this.variables._isRequiredInDataFetchStatus = t._isRequiredInDataFetchStatus)), "Page" in t && (this.variables.pageIn = t.Page, "_pageInDataFetchStatus" in t && (this.variables._pageInDataFetchStatus = t._pageInDataFetchStatus)), "QuestionText" in t && (this.variables.questionTextIn = t.QuestionText, "_questionTextInDataFetchStatus" in t && (this.variables._questionTextInDataFetchStatus = t._questionTextInDataFetchStatus)), "HideQuestion" in t && (this.variables.hideQuestionIn = t.HideQuestion, "_hideQuestionInDataFetchStatus" in t && (this.variables._hideQuestionInDataFetchStatus = t._hideQuestionInDataFetchStatus))
        }
    };
o(y, "Model");
var h = y;
h._hasValidationWidgetsValue = void 0;
var x = new s.Model.ModelFactory(h);
var Q = {
        "bnbPcWlzJUahOYrXLe3SHw#Value": "* \u0647\u0630\u0627 \u0645\u0637\u0644\u0648\u0628.",
        "8xrddWfZQkOTola2E8E7dg#Value": "\u0627\u0644\u062A\u0642\u064A\u064A\u0645 \u0627\u0644\u0645\u0627\u0644\u064A"
    },
    L = {
        "bnbPcWlzJUahOYrXLe3SHw#Value": "* Dies ist erforderlich.",
        "8xrddWfZQkOTola2E8E7dg#Value": "Finanzbewertung"
    },
    B = {
        "bnbPcWlzJUahOYrXLe3SHw#Value": "* Esto es requerido.",
        "8xrddWfZQkOTola2E8E7dg#Value": "Evaluaci\xF3n financiera"
    },
    N = {
        "bnbPcWlzJUahOYrXLe3SHw#Value": "Ceci est requis.",
        "8xrddWfZQkOTola2E8E7dg#Value": "\xC9valuation financi\xE8re"
    },
    U = {
        "bnbPcWlzJUahOYrXLe3SHw#Value": "* Questo campo \xE8 obbligatorio.",
        "8xrddWfZQkOTola2E8E7dg#Value": "Valutazione finanziaria"
    },
    $ = {
        "bnbPcWlzJUahOYrXLe3SHw#Value": "* To jest wymagane.",
        "8xrddWfZQkOTola2E8E7dg#Value": "Ocena finansowa"
    },
    J = {
        "bnbPcWlzJUahOYrXLe3SHw#Value": "* Este campo \xE9 obrigat\xF3rio.",
        "8xrddWfZQkOTola2E8E7dg#Value": "Avalia\xE7\xE3o financeira"
    },
    M = {
        "bnbPcWlzJUahOYrXLe3SHw#Value": "\u042D\u0442\u043E \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E.",
        "8xrddWfZQkOTola2E8E7dg#Value": "\u0424\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u0430\u044F \u043E\u0446\u0435\u043D\u043A\u0430"
    },
    H = {
        "ar-001": {
            translations: Q,
            isRTL: !0
        },
        "de-DE": {
            translations: L,
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
            translations: U,
            isRTL: !1
        },
        "pl-PL": {
            translations: $,
            isRTL: !1
        },
        "pt-PT": {
            translations: J,
            isRTL: !1
        },
        "ru-RU": {
            translations: M,
            isRTL: !1
        }
    };
var f = c; {
    let t = class t extends f.Controller.BaseViewController {
        constructor(e, i, a) {
            super(e, i, a, H);
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
                var i = this.model,
                    a = this.controller,
                    _ = this.idService;
                return f.Logger.startActiveSpan("OnInitialize", function(r) {
                    r && (r.setAttribute("code.function", "OnInitialize"), r.setAttribute("outsystems.function.key", "718e5e3f-714d-48a2-967b-fb327e332ddd"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        a.ensureControllerAlive("OnInitialize"), e = a.callContext(e), P.setRealSignupCurrentStep(6)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        onInitialize$Action(e) {
            var i = this.controller;
            return f.Logger.startActiveSpan("OnInitialize__proxy", function(a) {
                a && (a.setAttribute("code.function", "OnInitialize"), a.setAttribute("outsystems.function.key", "718e5e3f-714d-48a2-967b-fb327e332ddd"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onInitialize$Action, e)
                } finally {
                    a && a.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var i = this.controller,
                    a = this.model,
                    _ = this.idService;
                return i.onInitialize$Action(e)
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
            return D.defaultTimeout
        }
    };
    o(t, "ControllerInner");
    let m = t;
    C = m
}
var C, W = new f.Controller.ControllerFactory(C, A);
var z = c,
    me = v.PlaceholderContent,
    _e = v.IteratorPlaceholderContent,
    l = class l extends w.BaseWebBlock {
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
            return W
        }
        get title() {
            return ""
        }
        internalRender() {
            let t = this.model,
                p = this.controller,
                e = this.idService,
                i = p.validationService,
                a = this.widgetsRecordProvider,
                _ = p.callContext(),
                r = l.ifWidget,
                I = l.textWidget,
                X = l.asPrimitiveValue,
                T = l.getTranslation,
                V = this;
            return n.createElement("div", this.getRootNodeProperties(), n.createElement(d, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: a
            }, n.createElement(d, {
                align: 0,
                animate: !1,
                style: "display-flex align-items-center justify-content-space-between",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "PageNumber"
                },
                _widgetRecordProvider: a
            }, n.createElement(d, {
                align: 0,
                animate: !1,
                style: "financial-assessment-header",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "FinancialAssessmentHeader"
                },
                _widgetRecordProvider: a
            }, n.createElement(b, {
                extendedProperties: {
                    style: "color: #000000; font-size: 18px; font-weight: bold;"
                },
                text: [I(T("8xrddWfZQkOTola2E8E7dg#Value", "Financial assessment"))],
                _idProps: {
                    service: e,
                    uuid: "3"
                },
                _widgetRecordProvider: a
            })), n.createElement(g, {
                style: "page-number",
                value: t.variables.pageIn,
                _idProps: {
                    service: e,
                    uuid: "4"
                },
                _widgetRecordProvider: a,
                value_dataFetchStatus: z.Model.calculateDataFetchStatus(t.variables._pageInDataFetchStatus)
            })), r(t.variables.hideQuestionIn, !1, this, function() {
                return []
            }, function() {
                return [n.createElement(d, {
                    align: 0,
                    animate: !1,
                    style: "question-container",
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "Question"
                    },
                    _widgetRecordProvider: a
                }, r(t.variables.isRequiredIn, !1, this, function() {
                    return [n.createElement(d, {
                        align: 0,
                        animate: !1,
                        style: "required-container",
                        visible: !0,
                        _idProps: {
                            service: e,
                            name: "Required"
                        },
                        _widgetRecordProvider: a
                    }, n.createElement(b, {
                        extendedProperties: {
                            style: "color: #EC3F3F;"
                        },
                        text: [I(T("bnbPcWlzJUahOYrXLe3SHw#Value", "* This is required."))],
                        _idProps: {
                            service: e,
                            uuid: "7"
                        },
                        _widgetRecordProvider: a
                    }))]
                }, function() {
                    return []
                }), n.createElement(g, {
                    style: "question",
                    value: t.variables.questionTextIn,
                    _idProps: {
                        service: e,
                        uuid: "8"
                    },
                    _widgetRecordProvider: a,
                    value_dataFetchStatus: z.Model.calculateDataFetchStatus(t.variables._questionTextInDataFetchStatus)
                }))]
            }), n.createElement(O, {
                align: 0,
                content: V.props.placeholders.content,
                _idProps: {
                    service: e,
                    name: "content"
                },
                _widgetRecordProvider: a
            })))
        }
    };
o(l, "View");
var F = l,
    ve = F;
export {
    ve as a
};