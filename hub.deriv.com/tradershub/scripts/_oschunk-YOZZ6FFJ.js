import {
    a as P
} from "./_oschunk-4NZKJYN3.js";
import {
    a as h
} from "./_oschunk-MDM6SINN.js";
import "./_oschunk-Z3EGUX6T.js";
import "./_oschunk-NJYKWZYU.js";
import "./_oschunk-SW7FWAXZ.js";
import {
    a as E
} from "./_oschunk-VDAUUIXR.js";
import {
    a as y
} from "./_oschunk-MPY3X5JH.js";
import "./_oschunk-B7RGCJGD.js";
import "./_oschunk-BHZNFATE.js";
import {
    b as _,
    f as w,
    g as o,
    h as O
} from "./_oschunk-HUOHOHZB.js";
import "./_oschunk-Y45M2O2K.js";
import {
    a as F,
    g as p,
    i as b
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
    ia as f
} from "./_oschunk-NTQBNJ73.js";
import {
    c as i,
    g as W
} from "./_oschunk-DVBKI63I.js";
var e = W(F());
var $ = f,
    C = b.PlaceholderContent,
    H = b.IteratorPlaceholderContent,
    a = class a extends p.BaseWebScreen {
        static get displayName() {
            return "FinancialAssessmentFlow.EstimatedNetWorth"
        }
        static getAttributes() {
            return {
                codeFunction: "EstimatedNetWorth",
                functionKey: "30652b7d-065b-4e1f-9d0c-71ab9a546aac",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.FinancialAssessmentFlow.EstimatedNetWorth.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [h, P]
        }
        get modelFactory() {
            return E
        }
        get controllerFactory() {
            return y
        }
        get title() {
            return p.BaseWebScreen.getTranslation("fStlMFsGH06dDHGrmlRqrA#Title", "EstimatedNetWorth")
        }
        internalRender() {
            let l = this.model,
                n = this.controller,
                t = this.idService,
                u = n.validationService,
                r = this.widgetsRecordProvider,
                R = n.callContext(),
                x = a.ifWidget,
                m = a.textWidget,
                v = a.asPrimitiveValue,
                g = a.getTranslation,
                c = this;
            return e.createElement("div", this.getRootNodeProperties(), e.createElement(h, {
                getOwnerSpan: i(function() {
                    return c.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: i(function() {
                    return c.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    HideTitle: !0,
                    Title: "Financial assessment"
                },
                events: {
                    _handleError: i(function(s) {
                        n.handleError(s)
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
                    content: new C(function() {
                        return [e.createElement(P, {
                            getOwnerSpan: i(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: i(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Page: "7/8",
                                QuestionText: "Estimated net worth",
                                IsRequired: l.variables.isRequiredVar
                            },
                            events: {
                                _handleError: i(function(s) {
                                    n.handleError(s)
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
                                content: new C(function() {
                                    return [e.createElement(w, {
                                        _validationProps: {
                                            validationService: u
                                        },
                                        enabled: !0,
                                        extendedEvents: {
                                            onClick: i(function() {
                                                var s = R.clone();
                                                n.nextOnClick$Action(n.callContext(s))
                                            }, "onClick")
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        mandatory: !1,
                                        style: "radio-group",
                                        variable: l.createVariable($.DataTypes.DataTypes.Text, d.getFinancialAssessmentEstimatedWorth(), function(s) {
                                            d.setFinancialAssessmentEstimatedWorth(s)
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
                                        value: "Less than $100,000",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "one"
                                        },
                                        _widgetRecordProvider: r
                                    }, m(g("AdUWRjokxESubgQehy5Gbg#Value", "Less than $100,000"))), e.createElement(o, {
                                        enabled: !0,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "radio-button",
                                        value: "$100,000 - $250,000",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "two"
                                        },
                                        _widgetRecordProvider: r
                                    }, "$100,000 - $250,000"), e.createElement(o, {
                                        enabled: !0,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "radio-button",
                                        value: "$250,001 - $500,000",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "three"
                                        },
                                        _widgetRecordProvider: r
                                    }, "$250,001 - $500,000"), e.createElement(o, {
                                        enabled: !0,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "radio-button",
                                        value: "$500,001 - $1,000,000",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "four"
                                        },
                                        _widgetRecordProvider: r
                                    }, "$500,001 - $1,000,000"), e.createElement(o, {
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
                                    }, m(g("TNI9GzKdmkGVUPcPiGKwIQ#Value", "Over $1,000,000")))), e.createElement(O, {
                                        align: 0,
                                        animate: !1,
                                        style: "btn-container",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "Next"
                                        },
                                        _widgetRecordProvider: r
                                    }, e.createElement(_, {
                                        enabled: !0,
                                        isDefault: !1,
                                        onClick: i(function() {
                                            var s = R.clone();
                                            n.nextOnClick$Action(n.callContext(s))
                                        }, "onClick"),
                                        style: "btn btn-primary",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "9"
                                        },
                                        _widgetRecordProvider: r
                                    }, m(g("V57yT7yCqk633nH0+vZ78Q#Value", "Next"))))]
                                })
                            },
                            _dependencies: [v(d.getFinancialAssessmentEstimatedWorth())]
                        })]
                    })
                },
                _dependencies: [v(d.getFinancialAssessmentEstimatedWorth()), v(l.variables.isRequiredVar)]
            }))
        }
    };
i(a, "View");
var S = a,
    q = S;
export {
    q as
    default
};