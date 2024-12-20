import {
    a as T
} from "./_oschunk-NGLIEBGP.js";
import {
    a as E
} from "./_oschunk-LXV4QDAW.js";
import {
    a as f
} from "./_oschunk-QQ5ZODKK.js";
import "./_oschunk-CDPKYLRY.js";
import {
    a as _
} from "./_oschunk-PON5R23U.js";
import "./_oschunk-KIZC2IWB.js";
import "./_oschunk-U5BVDMC7.js";
import "./_oschunk-GRCLOXGJ.js";
import "./_oschunk-VWJXDAKN.js";
import {
    b as C,
    f as F,
    g as l,
    h as d,
    y as m
} from "./_oschunk-E7JQAU4J.js";
import "./_oschunk-5N5TJ3ES.js";
import {
    a as A,
    g as x,
    i as S
} from "./_oschunk-T77XORCW.js";
import "./_oschunk-2TPJE4AL.js";
import {
    a as P
} from "./_oschunk-VADNKVBQ.js";
import {
    l as h
} from "./_oschunk-OOUVJ7PM.js";
import "./_oschunk-ZKKCTARK.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-KG7LSUIA.js";
import {
    ia as w
} from "./_oschunk-5EPHB76O.js";
import {
    c as s,
    g as W
} from "./_oschunk-DVBKI63I.js";
var t = W(A());
var y = w,
    V = S.PlaceholderContent,
    H = S.IteratorPlaceholderContent,
    n = class n extends x.BaseWebScreen {
        static get displayName() {
            return "TradingAssessmentFlow.FinancialTradeFrequency"
        }
        static getAttributes() {
            return {
                codeFunction: "FinancialTradeFrequency",
                functionKey: "481a4a62-f985-4391-bc54-32c1314e8333",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.TradingAssessmentFlow.FinancialTradeFrequency.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [_, f]
        }
        get modelFactory() {
            return T
        }
        get controllerFactory() {
            return E
        }
        get title() {
            let a = this.model,
                i = this.controller,
                e = this.idService,
                v = i.validationService,
                r = i.callContext(),
                u = n.asPrimitiveValue,
                R = n.getTranslation,
                c = this;
            return "Financial Trade Frequency"
        }
        internalRender() {
            let a = this.model,
                i = this.controller,
                e = this.idService,
                v = i.validationService,
                r = this.widgetsRecordProvider,
                u = i.callContext(),
                R = n.ifWidget,
                c = n.textWidget,
                O = n.asPrimitiveValue,
                g = n.getTranslation,
                p = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(_, {
                getOwnerSpan: s(function() {
                    return p.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return p.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Title: "Trading Assesment",
                    HideTitle: a.getCachedValue(e.getId("PHO870Gpbk6Mrt5d0w9t8A.HideTitle"), function() {
                        return h.isPhone$Action(u).isPhoneOut
                    })
                },
                events: {
                    _handleError: s(function(o) {
                        i.handleError(o)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: v
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: r,
                placeholders: {
                    content: new V(function() {
                        return [t.createElement(d, {
                            align: 0,
                            animate: !1,
                            style: a.getCachedValue(e.getId("EFFxgvw5jEa0Y5sGBKfhXQ.Style"), function() {
                                return "display-flex flex-direction-column " + (h.isPhone$Action(u).isPhoneOut ? "gap-base" : "gap-m")
                            }),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "1"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(f, {
                            getOwnerSpan: s(function() {
                                return p.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: s(function() {
                                return p.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Step: "7"
                            },
                            events: {
                                _handleError: s(function(o) {
                                    i.handleError(o)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: v
                            },
                            _idProps: {
                                service: e,
                                uuid: "2",
                                alias: "2"
                            },
                            _widgetRecordProvider: r,
                            _dependencies: []
                        }), t.createElement(d, {
                            align: 0,
                            animate: !1,
                            style: "display-flex align-items-center justify-content-space-between trading-assessment-steps__desktop",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "3"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(m, {
                            extendedProperties: {
                                style: "font-weight: bold;"
                            },
                            style: "trading-assessment-steps__desktop",
                            text: ["7/10"],
                            _idProps: {
                                service: e,
                                uuid: "4"
                            },
                            _widgetRecordProvider: r
                        })), t.createElement(d, {
                            align: 0,
                            animate: !1,
                            style: a.getCachedValue(e.getId("SLLwXF5ZKU20RdaZkph2xg.Style"), function() {
                                return "display-flex flex-direction-column " + (h.isPhone$Action(u).isPhoneOut ? "gap-base" : "gap-m")
                            }),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "5"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(d, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "6"
                            },
                            _widgetRecordProvider: r
                        }, R(a.variables.isRequiredVar, !1, this, function() {
                            return [t.createElement(m, {
                                style: "text-error display-block",
                                text: [c(g("cPJnBQCHPk6h7ZkB5FZSVw#Value", "* This is required."))],
                                _idProps: {
                                    service: e,
                                    uuid: "7"
                                },
                                _widgetRecordProvider: r
                            })]
                        }, function() {
                            return []
                        }), t.createElement(m, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            text: [c(g("cgLlfinnoEWDQ1+il+r1jA#Value", "How many trades have you placed with other financial instruments in the past 12 months?"))],
                            _idProps: {
                                service: e,
                                uuid: "8"
                            },
                            _widgetRecordProvider: r
                        })), t.createElement(d, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "9"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(F, {
                            _validationProps: {
                                validationService: v
                            },
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: !1,
                            style: "radio-group",
                            variable: a.createVariable(y.DataTypes.DataTypes.Text, P.getTradingAssessmentFinancialTrade_Frequency(), function(o) {
                                P.setTradingAssessmentFinancialTrade_Frequency(o)
                            }),
                            _idProps: {
                                service: e,
                                name: "RadioGroup"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(l, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: "No transactions in the past 12 months",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "A"
                            },
                            _widgetRecordProvider: r
                        }, c(g("hvJy+48xzkKBjScs_SJUWA#Value", "None"))), t.createElement(l, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: "1 - 5 transactions in the past 12 months",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "B"
                            },
                            _widgetRecordProvider: r
                        }, "1 - 5"), t.createElement(l, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: "6 - 10 transactions in the past 12 months",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "C"
                            },
                            _widgetRecordProvider: r
                        }, "6 - 10"), t.createElement(l, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: "11 - 39 transactions in the past 12 months",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "D"
                            },
                            _widgetRecordProvider: r
                        }, "11 - 39"), t.createElement(l, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: y.Injector.resolve(y.ServiceNames.TranslationsService).getMessage("duyGe+0580OxvKbDDQ8r3Q#ValueExpression.861646105.1", "40 transactions or more in the past 12 months"),
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "E"
                            },
                            _widgetRecordProvider: r
                        }, c(g("31QrOCNFwEiQk4iWyb+97Q#Value", "40 or more"))))), t.createElement(d, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "text-align: right;"
                            },
                            style: "btn-container",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "16"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(C, {
                            enabled: !0,
                            isDefault: !1,
                            onClick: s(function() {
                                var o = u.clone();
                                i.nextOnClick$Action(i.callContext(o))
                            }, "onClick"),
                            style: "btn btn-primary",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "17"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(m, {
                            style: "",
                            text: [c(g("5yk9pxNXvUejbfpWGaRjmw#Value", "Next"))],
                            _idProps: {
                                service: e,
                                uuid: "18"
                            },
                            _widgetRecordProvider: r
                        })))))]
                    })
                },
                _dependencies: [O(P.getTradingAssessmentFinancialTrade_Frequency()), O(a.variables.isRequiredVar)]
            }))
        }
    };
s(n, "View");
var b = n,
    K = b;
export {
    K as
    default
};