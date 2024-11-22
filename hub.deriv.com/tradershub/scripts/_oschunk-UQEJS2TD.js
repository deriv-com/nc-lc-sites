import {
    a as C
} from "./_oschunk-SBPTJ2IM.js";
import {
    a as T
} from "./_oschunk-FNXQZ5MO.js";
import {
    a as R
} from "./_oschunk-PFCE5QNP.js";
import "./_oschunk-TOVPNB4I.js";
import {
    a as b
} from "./_oschunk-MDM6SINN.js";
import "./_oschunk-Z3EGUX6T.js";
import "./_oschunk-NJYKWZYU.js";
import "./_oschunk-SW7FWAXZ.js";
import "./_oschunk-BHZNFATE.js";
import {
    b as O,
    f as x,
    g as l,
    h as n,
    y as c
} from "./_oschunk-HUOHOHZB.js";
import "./_oschunk-Y45M2O2K.js";
import {
    a as A,
    g as f,
    i as _
} from "./_oschunk-6LASTRK7.js";
import "./_oschunk-TIJZDWYD.js";
import {
    a as p
} from "./_oschunk-27GDEXUT.js";
import {
    a as P
} from "./_oschunk-D2MH3QEK.js";
import "./_oschunk-WJ75ZXAT.js";
import "./_oschunk-3WNR72F6.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-HQOLQB4T.js";
import {
    ia as y
} from "./_oschunk-NTQBNJ73.js";
import {
    c as i,
    g as W
} from "./_oschunk-DVBKI63I.js";
var t = W(A());
var F = y,
    V = _.PlaceholderContent,
    G = _.IteratorPlaceholderContent,
    a = class a extends f.BaseWebScreen {
        static get displayName() {
            return "TradingAssessmentFlow.TradingAssessmentStepSeven"
        }
        static getAttributes() {
            return {
                codeFunction: "TradingAssessmentStepSeven",
                functionKey: "481a4a62-f985-4391-bc54-32c1314e8333",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.TradingAssessmentFlow.TradingAssessmentStepSeven.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [b, R]
        }
        get modelFactory() {
            return C
        }
        get controllerFactory() {
            return T
        }
        get title() {
            return f.BaseWebScreen.getTranslation("YkoaSIX5kUO8VDLBMU6DMw#Title", "TradingAssessmentStepSeven")
        }
        internalRender() {
            let o = this.model,
                d = this.controller,
                e = this.idService,
                S = d.validationService,
                r = this.widgetsRecordProvider,
                u = d.callContext(),
                E = a.ifWidget,
                g = a.textWidget,
                w = a.asPrimitiveValue,
                m = a.getTranslation,
                v = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(b, {
                getOwnerSpan: i(function() {
                    return v.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: i(function() {
                    return v.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Title: "Trading Assesment",
                    HideTitle: o.getCachedValue(e.getId("PHO870Gpbk6Mrt5d0w9t8A.HideTitle"), function() {
                        return P.isPhone$Action(u).isPhoneOut
                    })
                },
                events: {
                    _handleError: i(function(s) {
                        d.handleError(s)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: S
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: r,
                placeholders: {
                    content: new V(function() {
                        return [t.createElement(n, {
                            align: 0,
                            animate: !1,
                            style: o.getCachedValue(e.getId("EFFxgvw5jEa0Y5sGBKfhXQ.Style"), function() {
                                return "display-flex flex-direction-column " + (P.isPhone$Action(u).isPhoneOut ? "gap-base" : "gap-m")
                            }),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "1"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(R, {
                            getOwnerSpan: i(function() {
                                return v.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: i(function() {
                                return v.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Step: "7"
                            },
                            events: {
                                _handleError: i(function(s) {
                                    d.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: S
                            },
                            _idProps: {
                                service: e,
                                uuid: "2",
                                alias: "2"
                            },
                            _widgetRecordProvider: r,
                            _dependencies: []
                        }), t.createElement(n, {
                            align: 0,
                            animate: !1,
                            style: "display-flex align-items-center justify-content-space-between trading-assessment-steps__desktop",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "3"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(c, {
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
                        })), t.createElement(n, {
                            align: 0,
                            animate: !1,
                            style: o.getCachedValue(e.getId("SLLwXF5ZKU20RdaZkph2xg.Style"), function() {
                                return "display-flex flex-direction-column " + (P.isPhone$Action(u).isPhoneOut ? "gap-base" : "gap-m")
                            }),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "5"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(n, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "6"
                            },
                            _widgetRecordProvider: r
                        }, E(o.variables.isRequiredVar, !1, this, function() {
                            return [t.createElement(c, {
                                style: "text-error display-block",
                                text: [g(m("cPJnBQCHPk6h7ZkB5FZSVw#Value", "* This is required."))],
                                _idProps: {
                                    service: e,
                                    uuid: "7"
                                },
                                _widgetRecordProvider: r
                            })]
                        }, function() {
                            return []
                        }), t.createElement(c, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            text: [g(m("cgLlfinnoEWDQ1+il+r1jA#Value", "How many trades have you placed with other financial instruments in the past 12 months?"))],
                            _idProps: {
                                service: e,
                                uuid: "8"
                            },
                            _widgetRecordProvider: r
                        })), t.createElement(n, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "9"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(x, {
                            _validationProps: {
                                validationService: S
                            },
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: !1,
                            style: "radio-group",
                            variable: o.createVariable(F.DataTypes.DataTypes.Text, p.getFinancialTradePastYear(), function(s) {
                                p.setFinancialTradePastYear(s)
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
                            value: "None",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "A"
                            },
                            _widgetRecordProvider: r
                        }, g(m("hvJy+48xzkKBjScs_SJUWA#Value", "None"))), t.createElement(l, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: "1 - 5",
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
                            value: "6 - 10",
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
                            value: "11 - 39",
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
                            value: "40 or more",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "E"
                            },
                            _widgetRecordProvider: r
                        }, "40 or more"))), t.createElement(n, {
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
                        }, t.createElement(O, {
                            enabled: !0,
                            isDefault: !1,
                            onClick: i(function() {
                                var s = u.clone();
                                d.nextOnClick$Action(d.callContext(s))
                            }, "onClick"),
                            style: "btn btn-primary",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "17"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(c, {
                            extendedProperties: {
                                style: 'font-family: "Roboto", sans-serif; font-weight: 500;'
                            },
                            style: "roboto-medium",
                            text: [g(m("5yk9pxNXvUejbfpWGaRjmw#Value", "Next"))],
                            _idProps: {
                                service: e,
                                uuid: "18"
                            },
                            _widgetRecordProvider: r
                        })))))]
                    })
                },
                _dependencies: [w(p.getFinancialTradePastYear()), w(o.variables.isRequiredVar)]
            }))
        }
    };
i(a, "View");
var h = a,
    K = h;
export {
    K as
    default
};