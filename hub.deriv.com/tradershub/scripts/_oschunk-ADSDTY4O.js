import {
    a as y
} from "./_oschunk-4S7AP6NV.js";
import {
    a as f
} from "./_oschunk-4NZKJYN3.js";
import {
    a as h
} from "./_oschunk-MDM6SINN.js";
import "./_oschunk-Z3EGUX6T.js";
import "./_oschunk-NJYKWZYU.js";
import "./_oschunk-SW7FWAXZ.js";
import "./_oschunk-B7RGCJGD.js";
import {
    a as C
} from "./_oschunk-VM7HZ2IM.js";
import "./_oschunk-BHZNFATE.js";
import {
    b as R,
    f as _,
    g as c,
    h as w
} from "./_oschunk-HUOHOHZB.js";
import "./_oschunk-Y45M2O2K.js";
import {
    a as E,
    g,
    i as S
} from "./_oschunk-6LASTRK7.js";
import "./_oschunk-TIJZDWYD.js";
import {
    a as d
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
    c as i,
    g as F
} from "./_oschunk-DVBKI63I.js";
var e = F(E());
var A = O,
    W = S.PlaceholderContent,
    G = S.IteratorPlaceholderContent,
    l = class l extends g.BaseWebScreen {
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
            return [h, f]
        }
        get modelFactory() {
            return C
        }
        get controllerFactory() {
            return y
        }
        get title() {
            return g.BaseWebScreen.getTranslation("5KWrKEoSFkivwblUZjLvbQ#Title", "SourceOfWealth")
        }
        internalRender() {
            let m = this.model,
                a = this.controller,
                t = this.idService,
                v = a.validationService,
                r = this.widgetsRecordProvider,
                b = a.callContext(),
                V = l.ifWidget,
                s = l.textWidget,
                p = l.asPrimitiveValue,
                o = l.getTranslation,
                u = this;
            return e.createElement("div", this.getRootNodeProperties(), e.createElement(h, {
                getOwnerSpan: i(function() {
                    return u.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: i(function() {
                    return u.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Title: "Financial assessment",
                    HideTitle: !0
                },
                events: {
                    _handleError: i(function(n) {
                        a.handleError(n)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: v
                },
                _idProps: {
                    service: t,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: r,
                placeholders: {
                    content: new W(function() {
                        return [e.createElement(f, {
                            getOwnerSpan: i(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: i(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Page: "4/8",
                                IsRequired: m.variables.isRequiredVar,
                                QuestionText: "Source of wealth"
                            },
                            events: {
                                _handleError: i(function(n) {
                                    a.handleError(n)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: v
                            },
                            _idProps: {
                                service: t,
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: r,
                            placeholders: {
                                content: new W(function() {
                                    return [e.createElement(_, {
                                        _validationProps: {
                                            validationService: v
                                        },
                                        enabled: !0,
                                        extendedEvents: {
                                            onClick: i(function() {
                                                var n = b.clone();
                                                a.nextOnClick$Action(a.callContext(n))
                                            }, "onClick")
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        mandatory: !1,
                                        style: "radio-group",
                                        variable: m.createVariable(A.DataTypes.DataTypes.Text, d.getFinancialAssessmentSourceOfWealth(), function(n) {
                                            d.setFinancialAssessmentSourceOfWealth(n)
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
                                        value: "Accumulation of Income/Savings",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "AccumulationofIncome_Savings"
                                        },
                                        _widgetRecordProvider: r
                                    }, s(o("DJk4hMNbpUSkJhingQXV+w#Value", "Accumulation of income/savings"))), e.createElement(c, {
                                        enabled: !0,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "radio-button",
                                        value: "Cash Business",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "CashBusiness"
                                        },
                                        _widgetRecordProvider: r
                                    }, s(o("1uNRefncPkSdOVpyVTc0Jg#Value", "Cash business"))), e.createElement(c, {
                                        enabled: !0,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "radio-button",
                                        value: "Company Ownership",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "CompanyOwnership"
                                        },
                                        _widgetRecordProvider: r
                                    }, s(o("apxtEGv8jUyowjZ2x8JgEw#Value", "Company ownership"))), e.createElement(c, {
                                        enabled: !0,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "radio-button",
                                        value: "Divorce Settlement",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "DivorceSettlement"
                                        },
                                        _widgetRecordProvider: r
                                    }, s(o("Y3tfOv74mE2f4NA5wQF3Jw#Value", "Divorce settlement"))), e.createElement(c, {
                                        enabled: !0,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "radio-button",
                                        value: "Inheritance",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "Inheritance"
                                        },
                                        _widgetRecordProvider: r
                                    }, s(o("LChIN6Uh6UakbGiZMI_ENA#Value", "Inheritance"))), e.createElement(c, {
                                        enabled: !0,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "radio-button",
                                        value: "Investment Income",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "InvestmentIncome"
                                        },
                                        _widgetRecordProvider: r
                                    }, s(o("kF_hzh1JJkquIxiRKa1cSg#Value", "Investment income"))), e.createElement(c, {
                                        enabled: !0,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "radio-button",
                                        value: "Sale of Property",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "SaleofProperty"
                                        },
                                        _widgetRecordProvider: r
                                    }, s(o("phGPrWaCT0S+0CzYUa3mGA#Value", "Property sale")))), e.createElement(w, {
                                        align: 0,
                                        animate: !1,
                                        style: "btn-container",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "Next"
                                        },
                                        _widgetRecordProvider: r
                                    }, e.createElement(R, {
                                        enabled: !0,
                                        isDefault: !1,
                                        onClick: i(function() {
                                            var n = b.clone();
                                            a.nextOnClick$Action(a.callContext(n))
                                        }, "onClick"),
                                        style: "btn btn-primary",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "11"
                                        },
                                        _widgetRecordProvider: r
                                    }, s(o("qVhWw8a3kEOQ8fj2fMzAsQ#Value", "Next"))))]
                                })
                            },
                            _dependencies: [p(d.getFinancialAssessmentSourceOfWealth())]
                        })]
                    })
                },
                _dependencies: [p(d.getFinancialAssessmentSourceOfWealth()), p(m.variables.isRequiredVar)]
            }))
        }
    };
i(l, "View");
var P = l,
    Q = P;
export {
    Q as
    default
};