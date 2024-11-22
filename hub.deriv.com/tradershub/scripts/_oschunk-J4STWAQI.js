import {
    a as C
} from "./_oschunk-4IUK64LJ.js";
import {
    a as A
} from "./_oschunk-YZKLMUFT.js";
import {
    a as O
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
    b as w,
    f as x,
    g as u,
    h as o,
    y as g
} from "./_oschunk-HUOHOHZB.js";
import "./_oschunk-Y45M2O2K.js";
import {
    a as W,
    g as P,
    i as _
} from "./_oschunk-6LASTRK7.js";
import "./_oschunk-TIJZDWYD.js";
import {
    a as v
} from "./_oschunk-27GDEXUT.js";
import {
    a as S
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
    g as T
} from "./_oschunk-DVBKI63I.js";
var t = T(W());
var V = y,
    F = _.PlaceholderContent,
    j = _.IteratorPlaceholderContent,
    d = class d extends P.BaseWebScreen {
        static get displayName() {
            return "TradingAssessmentFlow.TradingAssessmentStepSix"
        }
        static getAttributes() {
            return {
                codeFunction: "TradingAssessmentStepSix",
                functionKey: "c5bafd98-b32d-4ff4-9e6b-7afc08b7f362",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.TradingAssessmentFlow.TradingAssessmentStepSix.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [b, O]
        }
        get modelFactory() {
            return C
        }
        get controllerFactory() {
            return A
        }
        get title() {
            return P.BaseWebScreen.getTranslation("mP26xS2z9E+ea3r8CLfzYg#Title", "TradingAssessmentStepSix")
        }
        internalRender() {
            let l = this.model,
                c = this.controller,
                e = this.idService,
                f = c.validationService,
                r = this.widgetsRecordProvider,
                m = c.callContext(),
                E = d.ifWidget,
                s = d.textWidget,
                h = d.asPrimitiveValue,
                n = d.getTranslation,
                p = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(b, {
                getOwnerSpan: i(function() {
                    return p.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: i(function() {
                    return p.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Title: "Trading Assesment",
                    HideTitle: l.getCachedValue(e.getId("RCzquCQOLkOmR3rERKmQYQ.HideTitle"), function() {
                        return S.isPhone$Action(m).isPhoneOut
                    })
                },
                events: {
                    _handleError: i(function(a) {
                        c.handleError(a)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: f
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: r,
                placeholders: {
                    content: new F(function() {
                        return [t.createElement(o, {
                            align: 0,
                            animate: !1,
                            style: l.getCachedValue(e.getId("vSYUOta_rUigM7x+3vf+7g.Style"), function() {
                                return "display-flex flex-direction-column " + (S.isPhone$Action(m).isPhoneOut ? "gap-base" : "gap-m")
                            }),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "1"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(O, {
                            getOwnerSpan: i(function() {
                                return p.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: i(function() {
                                return p.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Step: "6"
                            },
                            events: {
                                _handleError: i(function(a) {
                                    c.handleError(a)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: f
                            },
                            _idProps: {
                                service: e,
                                uuid: "2",
                                alias: "2"
                            },
                            _widgetRecordProvider: r,
                            _dependencies: []
                        }), t.createElement(o, {
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
                            text: ["6/10"],
                            _idProps: {
                                service: e,
                                uuid: "4"
                            },
                            _widgetRecordProvider: r
                        })), t.createElement(o, {
                            align: 0,
                            animate: !1,
                            style: l.getCachedValue(e.getId("_19f1j5tZU2XfjXrwGahNA.Style"), function() {
                                return "display-flex flex-direction-column " + (S.isPhone$Action(m).isPhoneOut ? "gap-base" : "gap-m")
                            }),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "5"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(o, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "6"
                            },
                            _widgetRecordProvider: r
                        }, E(l.variables.isRequiredVar, !1, this, function() {
                            return [t.createElement(g, {
                                style: "text-error display-block",
                                text: [s(n("MlAVXNRh6UieebOExXC3DA#Value", "* This is required."))],
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
                            text: [s(n("OhVF1ApOAkO43PErOeQjHQ#Value", "How much experience do you have with other financial instruments?"))],
                            _idProps: {
                                service: e,
                                uuid: "8"
                            },
                            _widgetRecordProvider: r
                        })), t.createElement(o, {
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
                                validationService: f
                            },
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: !1,
                            style: "radio-group",
                            variable: l.createVariable(V.DataTypes.DataTypes.Text, v.getFinancialExperience(), function(a) {
                                v.setFinancialExperience(a)
                            }),
                            _idProps: {
                                service: e,
                                name: "RadioGroup"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(u, {
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
                        }, s(n("xJZHiO3CLUSjJfGIJuF+MA#Value", "None"))), t.createElement(u, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: "Less than a year",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "B"
                            },
                            _widgetRecordProvider: r
                        }, s(n("J_qlmWzWIkaeo12C92bLOQ#Value", "Less than a year"))), t.createElement(u, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: "1 - 2 years",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "C"
                            },
                            _widgetRecordProvider: r
                        }, s(n("0L62fki_gkiTl0eIAS0_xg#Value", "1 - 2 years"))), t.createElement(u, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: "Over 3 years",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "D"
                            },
                            _widgetRecordProvider: r
                        }, s(n("wbKUQPnZ9kyhafIRsKv3Wg#Value", "Over 3 years"))))), t.createElement(o, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "text-align: right;"
                            },
                            style: "btn-container",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "15"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(w, {
                            enabled: !0,
                            isDefault: !1,
                            onClick: i(function() {
                                var a = m.clone();
                                c.nextOnClick$Action(c.callContext(a))
                            }, "onClick"),
                            style: "btn btn-primary",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "16"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(g, {
                            extendedProperties: {
                                style: 'font-family: "Roboto", sans-serif; font-weight: 500;'
                            },
                            style: "roboto-medium",
                            text: [s(n("DsWS5OWSmU+FvbQgaZAwDQ#Value", "Next"))],
                            _idProps: {
                                service: e,
                                uuid: "17"
                            },
                            _widgetRecordProvider: r
                        })))))]
                    })
                },
                _dependencies: [h(v.getFinancialExperience()), h(l.variables.isRequiredVar)]
            }))
        }
    };
i(d, "View");
var R = d,
    q = R;
export {
    q as
    default
};