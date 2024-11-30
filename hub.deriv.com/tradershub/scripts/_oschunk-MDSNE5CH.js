import {
    a as E
} from "./_oschunk-6Y3OPMMR.js";
import {
    a as h
} from "./_oschunk-E2M46UKY.js";
import {
    a as b
} from "./_oschunk-MD5SGUPG.js";
import "./_oschunk-DFHS2IVF.js";
import "./_oschunk-GEKOGHNU.js";
import "./_oschunk-SW7FWAXZ.js";
import "./_oschunk-GCNJTPYZ.js";
import {
    a as y
} from "./_oschunk-VM7HZ2IM.js";
import "./_oschunk-BHZNFATE.js";
import {
    b as _,
    f as w,
    g as o,
    h as P
} from "./_oschunk-WAXNMQCP.js";
import "./_oschunk-LHY3WMNC.js";
import {
    a as I,
    g as S,
    i as p
} from "./_oschunk-J7LCUWB3.js";
import "./_oschunk-ESOYZIPG.js";
import {
    a as v
} from "./_oschunk-XMOR6XCC.js";
import "./_oschunk-H7UK4VZM.js";
import "./_oschunk-JSVFHRDW.js";
import "./_oschunk-LUKJNVXR.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-44PT7RP7.js";
import {
    ia as R
} from "./_oschunk-NTQBNJ73.js";
import {
    c as s,
    g as W
} from "./_oschunk-DVBKI63I.js";
var t = W(I());
var e = R,
    C = p.PlaceholderContent,
    k = p.IteratorPlaceholderContent,
    c = class c extends S.BaseWebScreen {
        static get displayName() {
            return "FinancialAssessmentFlow.SourceOfWealth"
        }
        static getAttributes() {
            return {
                codeFunction: "SourceOfWealth",
                functionKey: "28aba5e4-124a-4816-afc1-b9546632ef6d",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.FinancialAssessmentFlow.SourceOfWealth.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [b, h]
        }
        get modelFactory() {
            return y
        }
        get controllerFactory() {
            return E
        }
        get title() {
            return S.BaseWebScreen.getTranslation("5KWrKEoSFkivwblUZjLvbQ#Title", "SourceOfWealth")
        }
        internalRender() {
            let m = this.model,
                d = this.controller,
                r = this.idService,
                g = d.validationService,
                i = this.widgetsRecordProvider,
                V = d.callContext(),
                A = c.ifWidget,
                a = c.textWidget,
                O = c.asPrimitiveValue,
                n = c.getTranslation,
                u = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(b, {
                getOwnerSpan: s(function() {
                    return u.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return u.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Title: e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("Qt04z0M4RE+CB9vkCOGZ8Q#Value.-1037113639.1", "Financial assessment"),
                    HideTitle: !0
                },
                events: {
                    _handleError: s(function(l) {
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
                    content: new C(function() {
                        return [t.createElement(h, {
                            getOwnerSpan: s(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: s(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                QuestionText: e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("5_Z4Dlaj0Um8RupiYBeNBQ#Value.-449263503.1", "Source of wealth"),
                                IsRequired: m.variables.isRequiredVar,
                                Page: "4/8"
                            },
                            events: {
                                _handleError: s(function(l) {
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
                                content: C.Empty
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
                            variable: m.createVariable(e.DataTypes.DataTypes.Text, v.getFinancialAssessmentSourceOfWealth(), function(l) {
                                v.setFinancialAssessmentSourceOfWealth(l)
                            }),
                            _idProps: {
                                service: r,
                                name: "RadioGroup"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(o, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("tz7eyT2UgEO6Px23xPCLdw#ValueExpression.-2085338559.1", "Accumulation of Income/Savings"),
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "AccumulationofIncome_Savings"
                            },
                            _widgetRecordProvider: i
                        }, a(n("Q6z5zahILkeAkretEADl1A#Value", "Accumulation of income/savings"))), t.createElement(o, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("jGhUecHKq06BqVJaLabOEw#ValueExpression.-1086742003.1", "Cash Business"),
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "CashBusiness"
                            },
                            _widgetRecordProvider: i
                        }, a(n("A0nsFbhH0EK7Ld2TIPiSCA#Value", "Cash business"))), t.createElement(o, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("c+JTS8EhW0SQXoYJN1TLMQ#ValueExpression.234308428.1", "Company Ownership"),
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "CompanyOwnership"
                            },
                            _widgetRecordProvider: i
                        }, a(n("I3wZBYm5Y0qgolfyhTb2lA#Value", "Company ownership"))), t.createElement(o, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("Dpi0GNz_kUy83zRyreYUPQ#ValueExpression.773832243.1", "Divorce Settlement"),
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "DivorceSettlement"
                            },
                            _widgetRecordProvider: i
                        }, a(n("cHJWGOSqikquIehqC5Vx9Q#Value", "Divorce settlement"))), t.createElement(o, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("9Q8KDQgN1UeA4TvJSOlbwA#ValueExpression.-324205398.1", "Inheritance"),
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "Inheritance"
                            },
                            _widgetRecordProvider: i
                        }, a(n("xGHE5IhLd06Jij6D3VEdVA#Value", "Inheritance"))), t.createElement(o, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("h+6mmdNPw0SLjWAKYifVcw#ValueExpression.-1015300202.1", "Investment Income"),
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "InvestmentIncome"
                            },
                            _widgetRecordProvider: i
                        }, a(n("dQdmaruM6UmKoIBnicuV8w#Value", "Investment income"))), t.createElement(o, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("03lwXT9efkm5Mndlxq0TYA#ValueExpression.-1115147291.1", "Sale of Property"),
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "SaleofProperty"
                            },
                            _widgetRecordProvider: i
                        }, a(n("7BTKJir26E6R2Ejqu8_A0g#Value", "Property sale")))), t.createElement(P, {
                            align: 0,
                            animate: !1,
                            style: "btn-container",
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "Next"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(_, {
                            enabled: !0,
                            isDefault: !1,
                            onClick: s(function() {
                                var l = V.clone();
                                d.nextOnClick$Action(d.callContext(l))
                            }, "onClick"),
                            style: "btn btn-primary",
                            visible: !0,
                            _idProps: {
                                service: r,
                                uuid: "12"
                            },
                            _widgetRecordProvider: i
                        }, a(n("UOotexUuJ0y_okeB1lYTDQ#Value", "Next")))))]
                    })
                },
                _dependencies: [O(v.getFinancialAssessmentSourceOfWealth()), O(m.variables.isRequiredVar)]
            }))
        }
    };
s(c, "View");
var f = c,
    U = f;
export {
    U as
    default
};