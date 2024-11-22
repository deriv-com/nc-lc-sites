import {
    a as C
} from "./_oschunk-IRZVWBE5.js";
import {
    a as F
} from "./_oschunk-MV5RHVTN.js";
import {
    a as _
} from "./_oschunk-4NZKJYN3.js";
import {
    a as R
} from "./_oschunk-MDM6SINN.js";
import "./_oschunk-Z3EGUX6T.js";
import "./_oschunk-NJYKWZYU.js";
import "./_oschunk-SW7FWAXZ.js";
import "./_oschunk-B7RGCJGD.js";
import "./_oschunk-BHZNFATE.js";
import {
    b as w,
    f as h,
    g as d,
    h as m,
    y as p
} from "./_oschunk-HUOHOHZB.js";
import "./_oschunk-Y45M2O2K.js";
import {
    a as V,
    g as P,
    i as b
} from "./_oschunk-6LASTRK7.js";
import "./_oschunk-TIJZDWYD.js";
import {
    a as u
} from "./_oschunk-27GDEXUT.js";
import "./_oschunk-D2MH3QEK.js";
import "./_oschunk-WJ75ZXAT.js";
import "./_oschunk-3WNR72F6.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-HQOLQB4T.js";
import {
    ia as O
} from "./_oschunk-NTQBNJ73.js";
import {
    c as s,
    g as W
} from "./_oschunk-DVBKI63I.js";
var e = W(V());
var I = O,
    x = b.PlaceholderContent,
    J = b.IteratorPlaceholderContent,
    c = class c extends P.BaseWebScreen {
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
            return [R, _]
        }
        get modelFactory() {
            return C
        }
        get controllerFactory() {
            return F
        }
        get title() {
            return P.BaseWebScreen.getTranslation("DZLLzDuPDk2lbXPDTHmrVQ#Title", "IncomeSource")
        }
        internalRender() {
            let l = this.model,
                o = this.controller,
                t = this.idService,
                S = o.validationService,
                r = this.widgetsRecordProvider,
                y = o.callContext(),
                E = c.ifWidget,
                i = c.textWidget,
                v = c.asPrimitiveValue,
                n = c.getTranslation,
                g = this;
            return e.createElement("div", this.getRootNodeProperties(), e.createElement(R, {
                getOwnerSpan: s(function() {
                    return g.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return g.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    HideTitle: !0,
                    Title: "Financial assessment"
                },
                events: {
                    _handleError: s(function(a) {
                        o.handleError(a)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: S
                },
                _idProps: {
                    service: t,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: r,
                placeholders: {
                    content: new x(function() {
                        return [e.createElement(_, {
                            getOwnerSpan: s(function() {
                                return g.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: s(function() {
                                return g.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                HideQuestion: !0,
                                IsRequired: l.variables.isRequiredVar,
                                Page: "1/8",
                                QuestionText: "Source of income"
                            },
                            events: {
                                _handleError: s(function(a) {
                                    o.handleError(a)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: S
                            },
                            _idProps: {
                                service: t,
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: r,
                            placeholders: {
                                content: new x(function() {
                                    return [e.createElement(m, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "margin-top: 16px;"
                                        },
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "2"
                                        },
                                        _widgetRecordProvider: r
                                    }, e.createElement(p, {
                                        style: "question",
                                        text: [i(n("FIJo0xP_o0Ol1pn8R5hwJA#Value", "We collect information about your employment as part of our due diligence obligations, as required by anti-money laundering legislation."))],
                                        _idProps: {
                                            service: t,
                                            uuid: "3"
                                        },
                                        _widgetRecordProvider: r
                                    })), e.createElement(m, {
                                        align: 0,
                                        animate: !1,
                                        style: "question-container",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "Question"
                                        },
                                        _widgetRecordProvider: r
                                    }, E(l.variables.isRequiredVar, !1, this, function() {
                                        return [e.createElement(m, {
                                            align: 0,
                                            animate: !1,
                                            style: "required-container",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                name: "Required"
                                            },
                                            _widgetRecordProvider: r
                                        }, e.createElement(p, {
                                            extendedProperties: {
                                                style: "color: #EC3F3F;"
                                            },
                                            text: [i(n("lV4LP_nMCE64a04g24YLdg#Value", "* This is required."))],
                                            _idProps: {
                                                service: t,
                                                uuid: "6"
                                            },
                                            _widgetRecordProvider: r
                                        }))]
                                    }, function() {
                                        return []
                                    }), e.createElement(p, {
                                        extendedProperties: {
                                            style: "color: #333333;"
                                        },
                                        text: [i(n("qIsn3PprSkmGoujBJOftkw#Value", "Source of income"))],
                                        _idProps: {
                                            service: t,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: r
                                    })), e.createElement(h, {
                                        _validationProps: {
                                            validationService: S
                                        },
                                        enabled: !0,
                                        extendedEvents: {
                                            onClick: s(function() {
                                                var a = y.clone();
                                                o.nextOnClick$Action(o.callContext(a))
                                            }, "onClick")
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        mandatory: !1,
                                        style: "radio-group",
                                        variable: l.createVariable(I.DataTypes.DataTypes.Text, u.getFinancialAssessmentIncomeSource(), function(a) {
                                            u.setFinancialAssessmentIncomeSource(a)
                                        }),
                                        _idProps: {
                                            service: t,
                                            name: "RadioGroup"
                                        },
                                        _widgetRecordProvider: r
                                    }, e.createElement(d, {
                                        enabled: !0,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "radio-button",
                                        value: "Salaried Employee",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "SalariedEmployee"
                                        },
                                        _widgetRecordProvider: r
                                    }, i(n("iB1x390ah0KsMFScAXSLkg#Value", "Salaried-employee"))), e.createElement(d, {
                                        enabled: !0,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "radio-button",
                                        value: "Self-Employed",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "SelfEmployed"
                                        },
                                        _widgetRecordProvider: r
                                    }, i(n("e+e4AYFzF0imTjQ+1ILQZQ#Value", "Self-employed"))), e.createElement(d, {
                                        enabled: !0,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "radio-button",
                                        value: "Investments & Dividends",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "InvestmentsDividends"
                                        },
                                        _widgetRecordProvider: r
                                    }, i(n("yICHWcJy_0GJFrpLd+iW4A#Value", "Investments and dividends"))), e.createElement(d, {
                                        enabled: !0,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "radio-button",
                                        value: "Pension",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "Pension"
                                        },
                                        _widgetRecordProvider: r
                                    }, i(n("YHBvAW73k0GgZYi9yMz3vQ#Value", "Pension"))), e.createElement(d, {
                                        enabled: !0,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "radio-button",
                                        value: "State Benefits",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "StateBenefits"
                                        },
                                        _widgetRecordProvider: r
                                    }, i(n("u0QOSW8MPUyOng5BhrlEgw#Value", "State benefits"))), e.createElement(d, {
                                        enabled: !0,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "radio-button",
                                        value: "Savings & Inheritance",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "SavingsInheritance"
                                        },
                                        _widgetRecordProvider: r
                                    }, i(n("PAVKPgJP60WpoGaiydVfHg#Value", "Savings and inheritance")))), e.createElement(m, {
                                        align: 0,
                                        animate: !1,
                                        style: "btn-container",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "Next"
                                        },
                                        _widgetRecordProvider: r
                                    }, e.createElement(w, {
                                        enabled: !0,
                                        isDefault: !1,
                                        onClick: s(function() {
                                            var a = y.clone();
                                            o.nextOnClick$Action(o.callContext(a))
                                        }, "onClick"),
                                        style: "btn btn-primary",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "16"
                                        },
                                        _widgetRecordProvider: r
                                    }, i(n("kO0CxcAkp0+4T8RcVhMfww#Value", "Next"))))]
                                })
                            },
                            _dependencies: [v(u.getFinancialAssessmentIncomeSource()), v(l.variables.isRequiredVar)]
                        })]
                    })
                },
                _dependencies: [v(u.getFinancialAssessmentIncomeSource()), v(l.variables.isRequiredVar)]
            }))
        }
    };
s(c, "View");
var f = c,
    G = f;
export {
    G as
    default
};