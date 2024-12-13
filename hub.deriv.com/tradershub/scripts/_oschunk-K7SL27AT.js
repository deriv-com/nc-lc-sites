import {
    a as E
} from "./_oschunk-H4JFIUYQ.js";
import {
    a as W
} from "./_oschunk-OGGK6SFU.js";
import {
    a as R
} from "./_oschunk-2VLLONPE.js";
import "./_oschunk-26UCIAKC.js";
import {
    a as O
} from "./_oschunk-MD5SGUPG.js";
import "./_oschunk-DFHS2IVF.js";
import "./_oschunk-GEKOGHNU.js";
import "./_oschunk-SW7FWAXZ.js";
import "./_oschunk-BHZNFATE.js";
import {
    b as x,
    f as C,
    g as u,
    h as o,
    y as g
} from "./_oschunk-WAXNMQCP.js";
import "./_oschunk-LHY3WMNC.js";
import {
    a as I,
    g as _,
    i as b
} from "./_oschunk-J7LCUWB3.js";
import "./_oschunk-ESOYZIPG.js";
import {
    a as f
} from "./_oschunk-XMOR6XCC.js";
import {
    a as P
} from "./_oschunk-H7UK4VZM.js";
import "./_oschunk-JSVFHRDW.js";
import "./_oschunk-LUKJNVXR.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-44PT7RP7.js";
import {
    ia as w
} from "./_oschunk-NTQBNJ73.js";
import {
    c as i,
    g as A
} from "./_oschunk-DVBKI63I.js";
var t = A(I());
var m = w,
    F = b.PlaceholderContent,
    J = b.IteratorPlaceholderContent,
    d = class d extends _.BaseWebScreen {
        static get displayName() {
            return "TradingAssessmentFlow.FinancialInstrumentExperience"
        }
        static getAttributes() {
            return {
                codeFunction: "FinancialInstrumentExperience",
                functionKey: "c5bafd98-b32d-4ff4-9e6b-7afc08b7f362",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.TradingAssessmentFlow.FinancialInstrumentExperience.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [O, R]
        }
        get modelFactory() {
            return E
        }
        get controllerFactory() {
            return W
        }
        get title() {
            return _.BaseWebScreen.getTranslation("mP26xS2z9E+ea3r8CLfzYg#Title", "FinancialInstrumentExperience")
        }
        internalRender() {
            let l = this.model,
                c = this.controller,
                e = this.idService,
                S = c.validationService,
                r = this.widgetsRecordProvider,
                v = c.callContext(),
                T = d.ifWidget,
                s = d.textWidget,
                y = d.asPrimitiveValue,
                n = d.getTranslation,
                p = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(O, {
                getOwnerSpan: i(function() {
                    return p.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: i(function() {
                    return p.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Title: "Trading Assesment",
                    HideTitle: l.getCachedValue(e.getId("RCzquCQOLkOmR3rERKmQYQ.HideTitle"), function() {
                        return P.isPhone$Action(v).isPhoneOut
                    })
                },
                events: {
                    _handleError: i(function(a) {
                        c.handleError(a)
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
                    content: new F(function() {
                        return [t.createElement(o, {
                            align: 0,
                            animate: !1,
                            style: l.getCachedValue(e.getId("vSYUOta_rUigM7x+3vf+7g.Style"), function() {
                                return "display-flex flex-direction-column " + (P.isPhone$Action(v).isPhoneOut ? "gap-base" : "gap-m")
                            }),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "1"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(R, {
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
                                validationService: S
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
                                return "display-flex flex-direction-column " + (P.isPhone$Action(v).isPhoneOut ? "gap-base" : "gap-m")
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
                        }, T(l.variables.isRequiredVar, !1, this, function() {
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
                        }, t.createElement(C, {
                            _validationProps: {
                                validationService: S
                            },
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: !1,
                            style: "radio-group",
                            variable: l.createVariable(m.DataTypes.DataTypes.Text, f.getTradingAssessmentFinancialExperience_Instrument(), function(a) {
                                f.setTradingAssessmentFinancialExperience_Instrument(a)
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
                            value: m.Injector.resolve(m.ServiceNames.TranslationsService).getMessage("L9tHICFWukmiIpbE7YANag#ValueExpression.-956287980.1", "Less than a year"),
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
                            value: m.Injector.resolve(m.ServiceNames.TranslationsService).getMessage("VlwY4SRKsEOGOZWZsfJ1Rw#ValueExpression.740719229.1", "Over 3 years"),
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
                        }, t.createElement(x, {
                            enabled: !0,
                            isDefault: !1,
                            onClick: i(function() {
                                var a = v.clone();
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
                _dependencies: [y(f.getTradingAssessmentFinancialExperience_Instrument()), y(l.variables.isRequiredVar)]
            }))
        }
    };
i(d, "View");
var h = d,
    K = h;
export {
    K as
    default
};