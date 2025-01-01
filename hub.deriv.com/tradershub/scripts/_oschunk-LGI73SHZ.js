import {
    a as h
} from "./_oschunk-PUOXXZFX.js";
import {
    a as V
} from "./_oschunk-MTGD7EKO.js";
import {
    a as R
} from "./_oschunk-JULUQG2C.js";
import {
    a as _
} from "./_oschunk-367MCH7Z.js";
import "./_oschunk-V52U2IZU.js";
import "./_oschunk-MOYCBUII.js";
import "./_oschunk-NYD6CGWS.js";
import "./_oschunk-7DRW2JCW.js";
import "./_oschunk-EROCOLS7.js";
import {
    b as E,
    f as O,
    g as c,
    h as u,
    y as S
} from "./_oschunk-42NACYKQ.js";
import "./_oschunk-2M7PXTSQ.js";
import {
    a as T,
    g as P,
    i as b
} from "./_oschunk-RKYF3TWC.js";
import "./_oschunk-K7AFM7ZW.js";
import {
    a as g
} from "./_oschunk-DOFMR6EA.js";
import "./_oschunk-2ZI4JQLD.js";
import "./_oschunk-IKZJT3AP.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-MSUVGI3L.js";
import {
    ia as w
} from "./_oschunk-2JKANR6M.js";
import {
    c as a,
    g as I
} from "./_oschunk-DVBKI63I.js";
var e = I(T());
var i = w,
    x = b.PlaceholderContent,
    Q = b.IteratorPlaceholderContent,
    l = class l extends P.BaseWebScreen {
        static get displayName() {
            return "FinancialAssessmentFlow.IncomeSource"
        }
        static getAttributes() {
            return {
                codeFunction: "IncomeSource",
                functionKey: "cccb920d-8f3b-4d0e-a56d-73c34c79ab55",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.FinancialAssessmentFlow.IncomeSource.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [_, R]
        }
        get modelFactory() {
            return h
        }
        get controllerFactory() {
            return V
        }
        get title() {
            return P.BaseWebScreen.getTranslation("DZLLzDuPDk2lbXPDTHmrVQ#Title", "IncomeSource")
        }
        internalRender() {
            let v = this.model,
                d = this.controller,
                t = this.idService,
                p = d.validationService,
                r = this.widgetsRecordProvider,
                C = d.callContext(),
                F = l.ifWidget,
                s = l.textWidget,
                y = l.asPrimitiveValue,
                n = l.getTranslation,
                m = this;
            return e.createElement("div", this.getRootNodeProperties(), e.createElement(_, {
                getOwnerSpan: a(function() {
                    return m.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return m.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    HideTitle: !0,
                    Title: i.Injector.resolve(i.ServiceNames.TranslationsService).getMessage("Tz288xoNkU+JWnjyJnKznQ#Value.-1037113639.1", "Financial assessment")
                },
                events: {
                    _handleError: a(function(o) {
                        d.handleError(o)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: p
                },
                _idProps: {
                    service: t,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: r,
                placeholders: {
                    content: new x(function() {
                        return [e.createElement(R, {
                            getOwnerSpan: a(function() {
                                return m.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return m.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                HideQuestion: !0,
                                IsRequired: v.variables.isRequiredVar,
                                Page: "1/8",
                                QuestionText: i.Injector.resolve(i.ServiceNames.TranslationsService).getMessage("FAQkfES11EukvKHMs7dspw#Value.-841697683.1", "Source of income")
                            },
                            events: {
                                _handleError: a(function(o) {
                                    d.handleError(o)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: p
                            },
                            _idProps: {
                                service: t,
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: r,
                            placeholders: {
                                content: x.Empty
                            },
                            _dependencies: []
                        }), e.createElement(u, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "2"
                            },
                            _widgetRecordProvider: r
                        }, e.createElement(u, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-top: 16px;"
                            },
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "3"
                            },
                            _widgetRecordProvider: r
                        }, e.createElement(S, {
                            style: "question",
                            text: [s(n("bQ8dXA19VEyNVVMNKHYwSQ#Value", "We collect information about your employment as part of our due diligence obligations, as required by anti-money laundering legislation."))],
                            _idProps: {
                                service: t,
                                uuid: "4"
                            },
                            _widgetRecordProvider: r
                        })), e.createElement(u, {
                            align: 0,
                            animate: !1,
                            style: "question-container",
                            visible: !0,
                            _idProps: {
                                service: t,
                                name: "Question"
                            },
                            _widgetRecordProvider: r
                        }, F(v.variables.isRequiredVar, !1, this, function() {
                            return [e.createElement(u, {
                                align: 0,
                                animate: !1,
                                style: "required-container",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "Required"
                                },
                                _widgetRecordProvider: r
                            }, e.createElement(S, {
                                extendedProperties: {
                                    style: "color: #EC3F3F;"
                                },
                                text: [s(n("0GGhDfwVUkqkfgwNJjeSJw#Value", "* This is required."))],
                                _idProps: {
                                    service: t,
                                    uuid: "7"
                                },
                                _widgetRecordProvider: r
                            }))]
                        }, function() {
                            return []
                        }), e.createElement(S, {
                            extendedProperties: {
                                style: "color: #333333;"
                            },
                            text: [s(n("IiaUSJEwhEuKO1fpTUcGVQ#Value", "Source of income"))],
                            _idProps: {
                                service: t,
                                uuid: "8"
                            },
                            _widgetRecordProvider: r
                        })), e.createElement(O, {
                            _validationProps: {
                                validationService: p
                            },
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: !0,
                            style: "radio-group",
                            variable: v.createVariable(i.DataTypes.DataTypes.Text, g.getFinancialAssessmentIncomeSource(), function(o) {
                                g.setFinancialAssessmentIncomeSource(o)
                            }),
                            _idProps: {
                                service: t,
                                name: "RadioGroup"
                            },
                            _widgetRecordProvider: r
                        }, e.createElement(c, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: i.Injector.resolve(i.ServiceNames.TranslationsService).getMessage("2aohuv28k0Kl2X4cv7Fqgg#ValueExpression.2040389397.1", "Salaried Employee"),
                            visible: !0,
                            _idProps: {
                                service: t,
                                name: "SalariedEmployee"
                            },
                            _widgetRecordProvider: r
                        }, s(n("RynFGsSi_kuk6CoOMQCySQ#Value", "Salaried-employee"))), e.createElement(c, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: i.Injector.resolve(i.ServiceNames.TranslationsService).getMessage("IpjZZ0_b1kaDbbU56GGzPA#ValueExpression.-564878322.1", "Self-Employed"),
                            visible: !0,
                            _idProps: {
                                service: t,
                                name: "SelfEmployed"
                            },
                            _widgetRecordProvider: r
                        }, s(n("Nu8rZgVE3UCc8gdDqoMUoQ#Value", "Self-employed"))), e.createElement(c, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: i.Injector.resolve(i.ServiceNames.TranslationsService).getMessage("ft2AU_bTAUmK9xD9RoTvsw#ValueExpression.-1091033462.1", "Investments & Dividends"),
                            visible: !0,
                            _idProps: {
                                service: t,
                                name: "InvestmentsDividends"
                            },
                            _widgetRecordProvider: r
                        }, s(n("RyQxg0ozBkKb9w8Z4tla_g#Value", "Investments and dividends"))), e.createElement(c, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: i.Injector.resolve(i.ServiceNames.TranslationsService).getMessage("GBTTyuefeEayut9Mu6Uueg#ValueExpression.982512430.1", "Pension"),
                            visible: !0,
                            _idProps: {
                                service: t,
                                name: "Pension"
                            },
                            _widgetRecordProvider: r
                        }, s(n("E_Ld47VmEker5fmVATPbkg#Value", "Pension"))), e.createElement(c, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: i.Injector.resolve(i.ServiceNames.TranslationsService).getMessage("iyMZpSJG+Umt1xfC_InbtA#ValueExpression.35044779.1", "State Benefits"),
                            visible: !0,
                            _idProps: {
                                service: t,
                                name: "StateBenefits"
                            },
                            _widgetRecordProvider: r
                        }, s(n("_Ng1cIBC9keUTmEZXnHzGg#Value", "State benefits"))), e.createElement(c, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: i.Injector.resolve(i.ServiceNames.TranslationsService).getMessage("NszuXMS0rEi+AVC4o8MJLA#ValueExpression.-1802182551.1", "Savings & Inheritance"),
                            visible: !0,
                            _idProps: {
                                service: t,
                                name: "SavingsInheritance"
                            },
                            _widgetRecordProvider: r
                        }, s(n("3qm59Xsl90mnEvqA1FU1eQ#Value", "Savings and inheritance")))), e.createElement(u, {
                            align: 0,
                            animate: !1,
                            style: "btn-container",
                            visible: !0,
                            _idProps: {
                                service: t,
                                name: "Next"
                            },
                            _widgetRecordProvider: r
                        }, e.createElement(E, {
                            enabled: !0,
                            isDefault: !1,
                            onClick: a(function() {
                                var o = C.clone();
                                d.nextOnClick$Action(d.callContext(o))
                            }, "onClick"),
                            style: "btn btn-primary",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "17"
                            },
                            _widgetRecordProvider: r
                        }, s(n("lOlrOD4l_02vMSWgiF3Y9w#Value", "Next")))))]
                    })
                },
                _dependencies: [y(g.getFinancialAssessmentIncomeSource()), y(v.variables.isRequiredVar)]
            }))
        }
    };
a(l, "View");
var f = l,
    j = f;
export {
    j as
    default
};