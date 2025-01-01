import {
    a as f
} from "./_oschunk-OXLHNKTZ.js";
import {
    a as F
} from "./_oschunk-5BOO4FG5.js";
import {
    a as E
} from "./_oschunk-JULUQG2C.js";
import {
    a as b
} from "./_oschunk-367MCH7Z.js";
import "./_oschunk-V52U2IZU.js";
import "./_oschunk-MOYCBUII.js";
import "./_oschunk-NYD6CGWS.js";
import "./_oschunk-7DRW2JCW.js";
import "./_oschunk-EROCOLS7.js";
import {
    b as O,
    f as w,
    g as n,
    h as P
} from "./_oschunk-42NACYKQ.js";
import "./_oschunk-2M7PXTSQ.js";
import {
    a as C,
    g as p,
    i as R
} from "./_oschunk-RKYF3TWC.js";
import "./_oschunk-K7AFM7ZW.js";
import {
    a as u
} from "./_oschunk-DOFMR6EA.js";
import "./_oschunk-2ZI4JQLD.js";
import "./_oschunk-IKZJT3AP.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-MSUVGI3L.js";
import {
    ia as _
} from "./_oschunk-2JKANR6M.js";
import {
    c as o,
    g as h
} from "./_oschunk-DVBKI63I.js";
var t = h(C());
var e = _,
    V = R.PlaceholderContent,
    H = R.IteratorPlaceholderContent,
    c = class c extends p.BaseWebScreen {
        static get displayName() {
            return "FinancialAssessmentFlow.EmploymentIndustry"
        }
        static getAttributes() {
            return {
                codeFunction: "EmploymentIndustry",
                functionKey: "4758cd4e-81de-4953-9c1d-3ed4cd6dd7e3",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.FinancialAssessmentFlow.EmploymentIndustry.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [b, E]
        }
        get modelFactory() {
            return f
        }
        get controllerFactory() {
            return F
        }
        get title() {
            return p.BaseWebScreen.getTranslation("Ts1YR96BU0mcHT7UzW3X4w#Title", "EmploymentIndustry")
        }
        internalRender() {
            let m = this.model,
                d = this.controller,
                r = this.idService,
                g = d.validationService,
                i = this.widgetsRecordProvider,
                I = d.callContext(),
                A = c.ifWidget,
                s = c.textWidget,
                S = c.asPrimitiveValue,
                a = c.getTranslation,
                v = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(b, {
                getOwnerSpan: o(function() {
                    return v.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return v.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    HideTitle: !0,
                    Title: e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("DICGvUSof0SR6eZ4ZHdvHA#Value.-1037113639.1", "Financial assessment")
                },
                events: {
                    _handleError: o(function(l) {
                        d.handleError(l)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: g
                },
                _idProps: {
                    service: r,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: i,
                placeholders: {
                    content: new V(function() {
                        return [t.createElement(E, {
                            getOwnerSpan: o(function() {
                                return v.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return v.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Page: "2/8",
                                IsRequired: m.variables.isRequiredVar,
                                QuestionText: e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("uNY67OVY6Ua1Rh6gzblezA#Value.527036274.1", "Employment industry")
                            },
                            events: {
                                _handleError: o(function(l) {
                                    d.handleError(l)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: g
                            },
                            _idProps: {
                                service: r,
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: i,
                            placeholders: {
                                content: V.Empty
                            },
                            _dependencies: []
                        }), t.createElement(P, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: r,
                                uuid: "2"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(w, {
                            _validationProps: {
                                validationService: g
                            },
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: !1,
                            style: "radio-group",
                            variable: m.createVariable(e.DataTypes.DataTypes.Text, u.getFinancialAssessmentEmploymentIndustry(), function(l) {
                                u.setFinancialAssessmentEmploymentIndustry(l)
                            }),
                            _idProps: {
                                service: r,
                                name: "RadioGroup"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(n, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("GF1KDTkn00KITfpjrJwEIA#ValueExpression.-1831639823.1", "Construction"),
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "Construction"
                            },
                            _widgetRecordProvider: i
                        }, s(a("nbzFLVVofUq8xXdYIQZmrA#Value", "Construction"))), t.createElement(n, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("KsTh_HSx9UO_AZimdqAATw#ValueExpression.1713211272.1", "Education"),
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "Education"
                            },
                            _widgetRecordProvider: i
                        }, s(a("b5psFRKoFUCRkkHXSQC8MQ#Value", "Education"))), t.createElement(n, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("1nEhvjSCsEi_FgePI+2Zzg#ValueExpression.811395002.1", "Finance"),
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "Finance"
                            },
                            _widgetRecordProvider: i
                        }, s(a("7KYHxKTIgkGLue6pIzXrqA#Value", "Finance"))), t.createElement(n, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("JocMiQ7TbUCMrCh_Ij+u9A#ValueExpression.-2137395588.1", "Health"),
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "Health"
                            },
                            _widgetRecordProvider: i
                        }, s(a("71ysmSVN_0KaO36fJRlfMw#Value", "Health"))), t.createElement(n, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("f0jmKjgXEkm_sV7b3NR6Cg#ValueExpression.530286347.1", "Tourism"),
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "Tourism"
                            },
                            _widgetRecordProvider: i
                        }, s(a("IH399vJINEqjloo2LFLj6Q#Value", "Tourism"))), t.createElement(n, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("ry7YrSJ1mUOr0XX3++PRUA#ValueExpression.-1579400927.1", "Information & Communications Technology"),
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "InformationCommunicationsTechnology"
                            },
                            _widgetRecordProvider: i
                        }, s(a("iliqB_oWd0uRcn2yFzlPcw#Value", "Information & Communications Technology"))), t.createElement(n, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("0ZHHE33k30W8_qfZaS9goQ#ValueExpression.1276655901.1", "Science & Engineering"),
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "ScienceEngineering"
                            },
                            _widgetRecordProvider: i
                        }, s(a("EHA+MriLvEa_VnG6CqpWYA#Value", "Science & Engineering"))), t.createElement(n, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("F98e8DkSokqDhxwdLWqN8w#ValueExpression.73298585.1", "Legal"),
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "Legal"
                            },
                            _widgetRecordProvider: i
                        }, s(a("Y12OZ1G2l0qZxIASU+yA7g#Value", "Legal"))), t.createElement(n, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("qekly3r0q0eICjPW6G6vWw#ValueExpression.2077423951.1", "Social & Cultural"),
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "SocialCultural"
                            },
                            _widgetRecordProvider: i
                        }, s(a("b6L+jHuV2EeiC9jujFZHYA#Value", "Social & Cultural"))), t.createElement(n, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("D47_L1tkRU+xCqsFMA99jA#ValueExpression.741896206.1", "Real Estate"),
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "RealEstate"
                            },
                            _widgetRecordProvider: i
                        }, s(a("+WsMa4t+oUi243NvuVaa3Q#Value", "Real Estate"))), t.createElement(n, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("l54EoMcWcUeExsIRNbga4A#ValueExpression.-121268962.1", "Manufacturing"),
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "Manufacturing"
                            },
                            _widgetRecordProvider: i
                        }, s(a("bBgEZX7gpEqRA_SazKvUiQ#Value", "Manufacturing"))), t.createElement(n, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("JpoKDQxr3E+dYivSKfeAow#ValueExpression.-62189039.1", "Agriculture"),
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "Agriculture"
                            },
                            _widgetRecordProvider: i
                        }, s(a("Bo3S9EkfwU+NwRJ1Jyrssw#Value", "Agriculture"))), t.createElement(n, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("FPElFz4pBUymycAqYBmisg#ValueExpression.1750172128.1", "Food Services"),
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "FoodServices"
                            },
                            _widgetRecordProvider: i
                        }, s(a("NfF6vHIth0Su1bhaJLpj4w#Value", "Food Services"))), t.createElement(n, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("ncnggFcRr02i47d_a8SkGA#ValueExpression.418195558.1", "Unemployed"),
                            visible: u.getRealSignupEmployementStatus() !== "Self-Employed",
                            _idProps: {
                                service: r,
                                name: "Unemployed"
                            },
                            _widgetRecordProvider: i
                        }, s(a("47dtaIqxokeE3DRI0HYaAA#Value", "Unemployed")))), t.createElement(P, {
                            align: 0,
                            animate: !1,
                            style: "btn-container",
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "Next"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(O, {
                            enabled: !0,
                            isDefault: !1,
                            onClick: o(function() {
                                var l = I.clone();
                                d.nextOnClick$Action(d.callContext(l))
                            }, "onClick"),
                            style: "btn btn-primary",
                            visible: !0,
                            _idProps: {
                                service: r,
                                uuid: "19"
                            },
                            _widgetRecordProvider: i
                        }, s(a("lsknjixaREemV71e1fqvAQ#Value", "Next")))))]
                    })
                },
                _dependencies: [S(u.getRealSignupEmployementStatus()), S(u.getFinancialAssessmentEmploymentIndustry()), S(m.variables.isRequiredVar)]
            }))
        }
    };
o(c, "View");
var y = c,
    k = y;
export {
    k as
    default
};