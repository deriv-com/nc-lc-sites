import {
    a as T
} from "./_oschunk-FB56ZDZV.js";
import {
    a as x
} from "./_oschunk-G2B7XJOR.js";
import {
    a as R
} from "./_oschunk-PFCE5QNP.js";
import "./_oschunk-TOVPNB4I.js";
import {
    a as f
} from "./_oschunk-MDM6SINN.js";
import "./_oschunk-Z3EGUX6T.js";
import "./_oschunk-NJYKWZYU.js";
import "./_oschunk-SW7FWAXZ.js";
import "./_oschunk-BHZNFATE.js";
import {
    b as w,
    f as C,
    g as l,
    h as a,
    y as g
} from "./_oschunk-HUOHOHZB.js";
import "./_oschunk-Y45M2O2K.js";
import {
    a as W,
    g as S,
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
    g as F
} from "./_oschunk-DVBKI63I.js";
var t = F(W());
var A = y,
    V = _.PlaceholderContent,
    $ = _.IteratorPlaceholderContent,
    n = class n extends S.BaseWebScreen {
        static get displayName() {
            return "TradingAssessmentFlow.TradingAssessmentStepFive"
        }
        static getAttributes() {
            return {
                codeFunction: "TradingAssessmentStepFive",
                functionKey: "a5eb5168-831e-415d-8ee9-b8935b0f91bc",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.TradingAssessmentFlow.TradingAssessmentStepFive.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [f, R]
        }
        get modelFactory() {
            return x
        }
        get controllerFactory() {
            return T
        }
        get title() {
            return S.BaseWebScreen.getTranslation("aFHrpR6DXUGO6biTWw+RvA#Title", "TradingAssessmentStepFive")
        }
        internalRender() {
            let o = this.model,
                d = this.controller,
                e = this.idService,
                b = d.validationService,
                r = this.widgetsRecordProvider,
                m = d.callContext(),
                E = n.ifWidget,
                c = n.textWidget,
                h = n.asPrimitiveValue,
                u = n.getTranslation,
                v = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(f, {
                getOwnerSpan: i(function() {
                    return v.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: i(function() {
                    return v.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    HideTitle: o.getCachedValue(e.getId("dqiHv27FiE6LUmQMUe9ZRA.HideTitle"), function() {
                        return P.isPhone$Action(m).isPhoneOut
                    }),
                    Title: "Trading Assesment"
                },
                events: {
                    _handleError: i(function(s) {
                        d.handleError(s)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: b
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: r,
                placeholders: {
                    content: new V(function() {
                        return [t.createElement(a, {
                            align: 0,
                            animate: !1,
                            style: o.getCachedValue(e.getId("6OHdZcClKUKvXGubDhLOPQ.Style"), function() {
                                return "display-flex flex-direction-column " + (P.isPhone$Action(m).isPhoneOut ? "gap-base" : "gap-m")
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
                                Step: "5"
                            },
                            events: {
                                _handleError: i(function(s) {
                                    d.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: b
                            },
                            _idProps: {
                                service: e,
                                uuid: "2",
                                alias: "2"
                            },
                            _widgetRecordProvider: r,
                            _dependencies: []
                        }), t.createElement(a, {
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
                        })), t.createElement(a, {
                            align: 0,
                            animate: !1,
                            style: o.getCachedValue(e.getId("gU6f_Bb69kmJmx8EeG6oDg.Style"), function() {
                                return "display-flex flex-direction-column " + (P.isPhone$Action(m).isPhoneOut ? "gap-base" : "gap-m")
                            }),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "5"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(a, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "6"
                            },
                            _widgetRecordProvider: r
                        }, E(o.variables.isRequiredVar, !1, this, function() {
                            return [t.createElement(g, {
                                style: "text-error display-block",
                                text: [c(u("TJUDXv98ekG+VZ34iKZN3g#Value", "* This is required."))],
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
                            text: [c(u("+xKtXzp84Uus79ghdp1rOA#Value", "How many CFD trades have you placed in the past 12 months?"))],
                            _idProps: {
                                service: e,
                                uuid: "8"
                            },
                            _widgetRecordProvider: r
                        })), t.createElement(a, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "9"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(C, {
                            _validationProps: {
                                validationService: b
                            },
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: !1,
                            style: "radio-group",
                            variable: o.createVariable(A.DataTypes.DataTypes.Text, p.getCFDTradePastYear(), function(s) {
                                p.setCFDTradePastYear(s)
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
                        }, c(u("0EzdZkEGF0Kcc_l9uPrUoQ#Value", "None"))), t.createElement(l, {
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
                        }, c(u("0KovP9HIxEmkHReDYdmJ1Q#Value", "40 or more"))))), t.createElement(a, {
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
                        }, t.createElement(w, {
                            enabled: !0,
                            isDefault: !1,
                            onClick: i(function() {
                                var s = m.clone();
                                d.nextOnClick$Action(d.callContext(s))
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
                            text: [c(u("3Ebq8ThUQ0+M9DW+uQdVew#Value", "Next"))],
                            _idProps: {
                                service: e,
                                uuid: "18"
                            },
                            _widgetRecordProvider: r
                        })))))]
                    })
                },
                _dependencies: [h(p.getCFDTradePastYear()), h(o.variables.isRequiredVar)]
            }))
        }
    };
i(n, "View");
var O = n,
    q = O;
export {
    q as
    default
};