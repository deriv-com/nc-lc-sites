import {
    a as y
} from "./_oschunk-JKREDINH.js";
import {
    a as C
} from "./_oschunk-UHNBP75D.js";
import {
    a as S
} from "./_oschunk-4NZKJYN3.js";
import {
    a as P
} from "./_oschunk-MDM6SINN.js";
import "./_oschunk-Z3EGUX6T.js";
import "./_oschunk-NJYKWZYU.js";
import "./_oschunk-SW7FWAXZ.js";
import "./_oschunk-B7RGCJGD.js";
import "./_oschunk-BHZNFATE.js";
import {
    b as f,
    f as O,
    g as o,
    h as w
} from "./_oschunk-HUOHOHZB.js";
import "./_oschunk-Y45M2O2K.js";
import {
    a as $,
    g as p,
    i as b
} from "./_oschunk-6LASTRK7.js";
import "./_oschunk-TIJZDWYD.js";
import {
    a as c
} from "./_oschunk-27GDEXUT.js";
import "./_oschunk-D2MH3QEK.js";
import "./_oschunk-WJ75ZXAT.js";
import "./_oschunk-3WNR72F6.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-HQOLQB4T.js";
import {
    ia as h
} from "./_oschunk-NTQBNJ73.js";
import {
    c as n,
    g as F
} from "./_oschunk-DVBKI63I.js";
var e = F($());
var N = h,
    A = b.PlaceholderContent,
    U = b.IteratorPlaceholderContent,
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
            return [P, S]
        }
        get modelFactory() {
            return y
        }
        get controllerFactory() {
            return C
        }
        get title() {
            return p.BaseWebScreen.getTranslation("BSyEqDdyZUiL2QtkYhRNDw#Title", "NetAnnualIncome")
        }
        internalRender() {
            let d = this.model,
                s = this.controller,
                t = this.idService,
                u = s.validationService,
                r = this.widgetsRecordProvider,
                _ = s.callContext(),
                x = a.ifWidget,
                m = a.textWidget,
                v = a.asPrimitiveValue,
                g = a.getTranslation,
                l = this;
            return e.createElement("div", this.getRootNodeProperties(), e.createElement(P, {
                getOwnerSpan: n(function() {
                    return l.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: n(function() {
                    return l.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    HideTitle: !0,
                    Title: "Financial assessment"
                },
                events: {
                    _handleError: n(function(i) {
                        s.handleError(i)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: u
                },
                _idProps: {
                    service: t,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: r,
                placeholders: {
                    content: new A(function() {
                        return [e.createElement(S, {
                            getOwnerSpan: n(function() {
                                return l.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return l.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                QuestionText: "Net annual income",
                                Page: "6/8",
                                IsRequired: d.variables.isRequiredVar
                            },
                            events: {
                                _handleError: n(function(i) {
                                    s.handleError(i)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: u
                            },
                            _idProps: {
                                service: t,
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: r,
                            placeholders: {
                                content: new A(function() {
                                    return [e.createElement(O, {
                                        _validationProps: {
                                            validationService: u
                                        },
                                        enabled: !0,
                                        extendedEvents: {
                                            onClick: n(function() {
                                                var i = _.clone();
                                                s.nextOnClick$Action(s.callContext(i))
                                            }, "onClick")
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        mandatory: !1,
                                        style: "radio-group",
                                        variable: d.createVariable(N.DataTypes.DataTypes.Text, c.getFinancialAssessmentNetIncome(), function(i) {
                                            c.setFinancialAssessmentNetIncome(i)
                                        }),
                                        _idProps: {
                                            service: t,
                                            name: "RadioGroup"
                                        },
                                        _widgetRecordProvider: r
                                    }, e.createElement(o, {
                                        enabled: !0,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "radio-button",
                                        value: "Less than $25,000",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "one"
                                        },
                                        _widgetRecordProvider: r
                                    }, m(g("NrI6m+mcyUaTbUrhn_mqJA#Value", "Less than $25,000"))), e.createElement(o, {
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
                                    }, "$25,000 - $50,000"), e.createElement(o, {
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
                                    }, "$50,001 - $100,000"), e.createElement(o, {
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
                                    }, "$100,001 - $500,000"), e.createElement(o, {
                                        enabled: !0,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "radio-button",
                                        value: "Over $500,000",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "five"
                                        },
                                        _widgetRecordProvider: r
                                    }, m(g("ObuyPy2cPUCqh+I2byA+dg#Value", "Over $500,000")))), e.createElement(w, {
                                        align: 0,
                                        animate: !1,
                                        style: "btn-container",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "Next"
                                        },
                                        _widgetRecordProvider: r
                                    }, e.createElement(f, {
                                        enabled: !0,
                                        isDefault: !1,
                                        onClick: n(function() {
                                            var i = _.clone();
                                            s.nextOnClick$Action(s.callContext(i))
                                        }, "onClick"),
                                        style: "btn btn-primary",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "9"
                                        },
                                        _widgetRecordProvider: r
                                    }, m(g("aAUhjeJNn0ycsskRT8qw7Q#Value", "Next"))))]
                                })
                            },
                            _dependencies: [v(c.getFinancialAssessmentNetIncome())]
                        })]
                    })
                },
                _dependencies: [v(c.getFinancialAssessmentNetIncome()), v(d.variables.isRequiredVar)]
            }))
        }
    };
n(a, "View");
var R = a,
    L = R;
export {
    L as
    default
};