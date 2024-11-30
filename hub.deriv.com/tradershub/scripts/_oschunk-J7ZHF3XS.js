import {
    a as T
} from "./_oschunk-UGHFNMAE.js";
import {
    a as F
} from "./_oschunk-AYWTLMTX.js";
import {
    a as S
} from "./_oschunk-2VLLONPE.js";
import "./_oschunk-26UCIAKC.js";
import {
    a as f
} from "./_oschunk-MD5SGUPG.js";
import "./_oschunk-DFHS2IVF.js";
import "./_oschunk-GEKOGHNU.js";
import "./_oschunk-SW7FWAXZ.js";
import "./_oschunk-BHZNFATE.js";
import {
    b as x,
    f as E,
    g as c,
    h as d,
    y as g
} from "./_oschunk-WAXNMQCP.js";
import "./_oschunk-LHY3WMNC.js";
import {
    a as A,
    g as C,
    i as b
} from "./_oschunk-J7LCUWB3.js";
import "./_oschunk-ESOYZIPG.js";
import {
    a as P
} from "./_oschunk-XMOR6XCC.js";
import {
    a as h
} from "./_oschunk-H7UK4VZM.js";
import "./_oschunk-JSVFHRDW.js";
import "./_oschunk-LUKJNVXR.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-44PT7RP7.js";
import {
    ia as w
} from "./_oschunk-NTQBNJ73.js";
import {
    c as s,
    g as W
} from "./_oschunk-DVBKI63I.js";
var t = W(A());
var _ = w,
    V = b.PlaceholderContent,
    G = b.IteratorPlaceholderContent,
    n = class n extends C.BaseWebScreen {
        static get displayName() {
            return "TradingAssessmentFlow.Frequency"
        }
        static getAttributes() {
            return {
                codeFunction: "Frequency",
                functionKey: "a5eb5168-831e-415d-8ee9-b8935b0f91bc",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.TradingAssessmentFlow.Frequency.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [f, S]
        }
        get modelFactory() {
            return F
        }
        get controllerFactory() {
            return T
        }
        get title() {
            let a = this.model,
                i = this.controller,
                e = this.idService,
                v = i.validationService,
                r = i.callContext(),
                u = n.asPrimitiveValue,
                y = n.getTranslation,
                l = this;
            return "Trade Frequency"
        }
        internalRender() {
            let a = this.model,
                i = this.controller,
                e = this.idService,
                v = i.validationService,
                r = this.widgetsRecordProvider,
                u = i.callContext(),
                y = n.ifWidget,
                l = n.textWidget,
                O = n.asPrimitiveValue,
                m = n.getTranslation,
                p = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(f, {
                getOwnerSpan: s(function() {
                    return p.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return p.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    HideTitle: a.getCachedValue(e.getId("dqiHv27FiE6LUmQMUe9ZRA.HideTitle"), function() {
                        return h.isPhone$Action(u).isPhoneOut
                    }),
                    Title: "Trading Assesment"
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
                            style: a.getCachedValue(e.getId("6OHdZcClKUKvXGubDhLOPQ.Style"), function() {
                                return "display-flex flex-direction-column " + (h.isPhone$Action(u).isPhoneOut ? "gap-base" : "gap-m")
                            }),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "1"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(S, {
                            getOwnerSpan: s(function() {
                                return p.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: s(function() {
                                return p.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Step: "5"
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
                        }, t.createElement(g, {
                            extendedProperties: {
                                style: "font-weight: bold;"
                            },
                            style: "trading-assessment-steps__desktop",
                            text: ["5/10"],
                            _idProps: {
                                service: e,
                                uuid: "4"
                            },
                            _widgetRecordProvider: r
                        })), t.createElement(d, {
                            align: 0,
                            animate: !1,
                            style: a.getCachedValue(e.getId("gU6f_Bb69kmJmx8EeG6oDg.Style"), function() {
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
                        }, y(a.variables.isRequiredVar, !1, this, function() {
                            return [t.createElement(g, {
                                style: "text-error display-block",
                                text: [l(m("TJUDXv98ekG+VZ34iKZN3g#Value", "* This is required."))],
                                _idProps: {
                                    service: e,
                                    uuid: "7"
                                },
                                _widgetRecordProvider: r
                            })]
                        }, function() {
                            return []
                        }), t.createElement(g, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            text: [l(m("+xKtXzp84Uus79ghdp1rOA#Value", "How many CFD trades have you placed in the past 12 months?"))],
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
                        }, t.createElement(E, {
                            _validationProps: {
                                validationService: v
                            },
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: !1,
                            style: "radio-group",
                            variable: a.createVariable(_.DataTypes.DataTypes.Text, P.getTradingAssessmentCFDFrequency(), function(o) {
                                P.setTradingAssessmentCFDFrequency(o)
                            }),
                            _idProps: {
                                service: e,
                                name: "RadioGroup"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(c, {
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
                        }, l(m("0EzdZkEGF0Kcc_l9uPrUoQ#Value", "None"))), t.createElement(c, {
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
                        }, "1 - 5"), t.createElement(c, {
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
                        }, "6 - 10"), t.createElement(c, {
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
                        }, "11 - 39"), t.createElement(c, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: _.Injector.resolve(_.ServiceNames.TranslationsService).getMessage("Q06A4mBFN02B2vUnlNgUKQ#ValueExpression.861646105.1", "40 transactions or more in the past 12 months"),
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "E"
                            },
                            _widgetRecordProvider: r
                        }, l(m("0KovP9HIxEmkHReDYdmJ1Q#Value", "40 or more"))))), t.createElement(d, {
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
                        }, t.createElement(x, {
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
                        }, t.createElement(g, {
                            extendedProperties: {
                                style: 'font-family: "Roboto", sans-serif; font-weight: 500;'
                            },
                            style: "roboto-medium",
                            text: [l(m("3Ebq8ThUQ0+M9DW+uQdVew#Value", "Next"))],
                            _idProps: {
                                service: e,
                                uuid: "18"
                            },
                            _widgetRecordProvider: r
                        })))))]
                    })
                },
                _dependencies: [O(P.getTradingAssessmentCFDFrequency()), O(a.variables.isRequiredVar)]
            }))
        }
    };
s(n, "View");
var R = n,
    $ = R;
export {
    $ as
    default
};