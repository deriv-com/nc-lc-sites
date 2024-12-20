import {
    a as y
} from "./_oschunk-UJGM5JR2.js";
import {
    a as A
} from "./_oschunk-D5VCT547.js";
import {
    a as P
} from "./_oschunk-GIRVNG7K.js";
import {
    a as b
} from "./_oschunk-PON5R23U.js";
import "./_oschunk-KIZC2IWB.js";
import "./_oschunk-U5BVDMC7.js";
import "./_oschunk-GRCLOXGJ.js";
import "./_oschunk-EX4MYIQ3.js";
import "./_oschunk-VWJXDAKN.js";
import {
    b as h,
    f as O,
    g as c,
    h as w
} from "./_oschunk-E7JQAU4J.js";
import "./_oschunk-5N5TJ3ES.js";
import {
    a as N,
    g as p,
    i as S
} from "./_oschunk-T77XORCW.js";
import "./_oschunk-2TPJE4AL.js";
import {
    a as d
} from "./_oschunk-VADNKVBQ.js";
import "./_oschunk-OOUVJ7PM.js";
import "./_oschunk-ZKKCTARK.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-KG7LSUIA.js";
import {
    ia as f
} from "./_oschunk-5EPHB76O.js";
import {
    c as i,
    g as F
} from "./_oschunk-DVBKI63I.js";
var e = F(N());
var n = f,
    C = S.PlaceholderContent,
    G = S.IteratorPlaceholderContent,
    a = class a extends p.BaseWebScreen {
        static get displayName() {
            return "FinancialAssessmentFlow.NetAnnualIncome"
        }
        static getAttributes() {
            return {
                codeFunction: "NetAnnualIncome",
                functionKey: "a8842c05-7237-4865-8bd9-0b6462144d0f",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.FinancialAssessmentFlow.NetAnnualIncome.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [b, P]
        }
        get modelFactory() {
            return y
        }
        get controllerFactory() {
            return A
        }
        get title() {
            return p.BaseWebScreen.getTranslation("BSyEqDdyZUiL2QtkYhRNDw#Title", "NetAnnualIncome")
        }
        internalRender() {
            let u = this.model,
                o = this.controller,
                t = this.idService,
                m = o.validationService,
                r = this.widgetsRecordProvider,
                E = o.callContext(),
                V = a.ifWidget,
                v = a.textWidget,
                _ = a.asPrimitiveValue,
                g = a.getTranslation,
                l = this;
            return e.createElement("div", this.getRootNodeProperties(), e.createElement(b, {
                getOwnerSpan: i(function() {
                    return l.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: i(function() {
                    return l.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    HideTitle: !0,
                    Title: n.Injector.resolve(n.ServiceNames.TranslationsService).getMessage("mmo48l74kUi5Rqge_3kjHQ#Value.-1037113639.1", "Financial assessment")
                },
                events: {
                    _handleError: i(function(s) {
                        o.handleError(s)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: m
                },
                _idProps: {
                    service: t,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: r,
                placeholders: {
                    content: new C(function() {
                        return [e.createElement(P, {
                            getOwnerSpan: i(function() {
                                return l.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: i(function() {
                                return l.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                QuestionText: n.Injector.resolve(n.ServiceNames.TranslationsService).getMessage("dPjbMX3byUatnPoGeRgkYQ#Value.711038375.1", "Net annual income"),
                                Page: "6/8",
                                IsRequired: u.variables.isRequiredVar
                            },
                            events: {
                                _handleError: i(function(s) {
                                    o.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: m
                            },
                            _idProps: {
                                service: t,
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: r,
                            placeholders: {
                                content: C.Empty
                            },
                            _dependencies: []
                        }), e.createElement(O, {
                            _validationProps: {
                                validationService: m
                            },
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: !1,
                            style: "radio-group",
                            variable: u.createVariable(n.DataTypes.DataTypes.Text, d.getFinancialAssessmentNetIncome(), function(s) {
                                d.setFinancialAssessmentNetIncome(s)
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
                            value: n.Injector.resolve(n.ServiceNames.TranslationsService).getMessage("UQzAyjTbf0eCnEVS2KB4OA#ValueExpression.-1727495181.1", "Less than $25,000"),
                            visible: !0,
                            _idProps: {
                                service: t,
                                name: "one"
                            },
                            _widgetRecordProvider: r
                        }, v(g("Ge3wyJhqmk+O9TYYJMfAtg#Value", "Less than $25,000"))), e.createElement(c, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: "$25,000 - $50,000",
                            visible: !0,
                            _idProps: {
                                service: t,
                                name: "two"
                            },
                            _widgetRecordProvider: r
                        }, "$25,000 - $50,000"), e.createElement(c, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: "$50,001 - $100,000",
                            visible: !0,
                            _idProps: {
                                service: t,
                                name: "three"
                            },
                            _widgetRecordProvider: r
                        }, "$50,001 - $100,000"), e.createElement(c, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: "$100,001 - $500,000",
                            visible: !0,
                            _idProps: {
                                service: t,
                                name: "four"
                            },
                            _widgetRecordProvider: r
                        }, "$100,001 - $500,000"), e.createElement(c, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: n.Injector.resolve(n.ServiceNames.TranslationsService).getMessage("vqPrrStG_ECTX6YAA6_Kaw#ValueExpression.432297473.1", "Over $500,000"),
                            visible: !0,
                            _idProps: {
                                service: t,
                                name: "five"
                            },
                            _widgetRecordProvider: r
                        }, v(g("1YQGjP6Y4EOGOmXU12LwzA#Value", "Over $500,000")))), e.createElement(w, {
                            align: 0,
                            animate: !1,
                            style: "btn-container",
                            visible: !0,
                            _idProps: {
                                service: t,
                                name: "Next"
                            },
                            _widgetRecordProvider: r
                        }, e.createElement(h, {
                            enabled: !0,
                            isDefault: !1,
                            onClick: i(function() {
                                var s = E.clone();
                                o.nextOnClick$Action(o.callContext(s))
                            }, "onClick"),
                            style: "btn btn-primary",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "9"
                            },
                            _widgetRecordProvider: r
                        }, v(g("700GCWkEok6lji4heDk42w#Value", "Next"))))]
                    })
                },
                _dependencies: [_(d.getFinancialAssessmentNetIncome()), _(u.variables.isRequiredVar)]
            }))
        }
    };
i(a, "View");
var R = a,
    q = R;
export {
    q as
    default
};