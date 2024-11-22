import {
    a as C
} from "./_oschunk-2Z6MBTUC.js";
import {
    a as A
} from "./_oschunk-QE6D74VQ.js";
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
    b as O,
    f as h,
    g as o,
    h as w
} from "./_oschunk-HUOHOHZB.js";
import "./_oschunk-Y45M2O2K.js";
import {
    a as T,
    g,
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
    ia as R
} from "./_oschunk-NTQBNJ73.js";
import {
    c as n,
    g as y
} from "./_oschunk-DVBKI63I.js";
var e = y(T());
var $ = R,
    F = b.PlaceholderContent,
    L = b.IteratorPlaceholderContent,
    a = class a extends g.BaseWebScreen {
        static get displayName() {
            return "FinancialAssessmentFlow.AccountTurnover"
        }
        static getAttributes() {
            return {
                codeFunction: "AccountTurnover",
                functionKey: "89f83a57-3720-473b-b2a4-3d31ed2bec99",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.FinancialAssessmentFlow.AccountTurnover.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [P, S]
        }
        get modelFactory() {
            return A
        }
        get controllerFactory() {
            return C
        }
        get title() {
            return g.BaseWebScreen.getTranslation("Vzr4iSA3O0eypD0x7SvsmQ#Title", "AccountTurnover")
        }
        internalRender() {
            let d = this.model,
                s = this.controller,
                t = this.idService,
                u = s.validationService,
                r = this.widgetsRecordProvider,
                f = s.callContext(),
                x = a.ifWidget,
                v = a.textWidget,
                m = a.asPrimitiveValue,
                p = a.getTranslation,
                l = this;
            return e.createElement("div", this.getRootNodeProperties(), e.createElement(P, {
                getOwnerSpan: n(function() {
                    return l.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: n(function() {
                    return l.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Title: "Financial assessment",
                    HideTitle: !0
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
                    content: new F(function() {
                        return [e.createElement(S, {
                            getOwnerSpan: n(function() {
                                return l.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return l.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                QuestionText: "Anticipated annual turnover",
                                Page: "8/8",
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
                                content: new F(function() {
                                    return [e.createElement(h, {
                                        _validationProps: {
                                            validationService: u
                                        },
                                        enabled: !0,
                                        extendedEvents: {
                                            onClick: n(function() {
                                                var i = f.clone();
                                                s.nextOnClick$Action(s.callContext(i))
                                            }, "onClick")
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        mandatory: !1,
                                        style: "radio-group",
                                        variable: d.createVariable($.DataTypes.DataTypes.Text, c.getFinancialAssessmentAccountTurnover(), function(i) {
                                            c.setFinancialAssessmentAccountTurnover(i)
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
                                    }, v(p("k96b_FFlmkWTNBQBsUG8BQ#Value", "Less than $25,000"))), e.createElement(o, {
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
                                        value: "Over $1,000,000",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "five"
                                        },
                                        _widgetRecordProvider: r
                                    }, v(p("jl7_o9LYVUSWvN+lGef8Bw#Value", "Over $1,000,000")))), e.createElement(w, {
                                        align: 0,
                                        animate: !1,
                                        style: "btn-container",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "Next"
                                        },
                                        _widgetRecordProvider: r
                                    }, e.createElement(O, {
                                        enabled: !0,
                                        isDefault: !1,
                                        onClick: n(function() {
                                            var i = f.clone();
                                            s.nextOnClick$Action(s.callContext(i))
                                        }, "onClick"),
                                        style: "btn btn-primary",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "9"
                                        },
                                        _widgetRecordProvider: r
                                    }, v(p("IHadtlYsUUKItKXQ8+wi4A#Value", "Next"))))]
                                })
                            },
                            _dependencies: [m(c.getFinancialAssessmentAccountTurnover())]
                        })]
                    })
                },
                _dependencies: [m(c.getFinancialAssessmentAccountTurnover()), m(d.variables.isRequiredVar)]
            }))
        }
    };
n(a, "View");
var _ = a,
    Q = _;
export {
    Q as
    default
};