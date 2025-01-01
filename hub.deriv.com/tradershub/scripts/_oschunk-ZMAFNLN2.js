import {
    a as W
} from "./_oschunk-XB27SB4X.js";
import {
    a as R
} from "./_oschunk-OKVBT7G5.js";
import {
    a as E
} from "./_oschunk-MG2NJOPX.js";
import "./_oschunk-HVD7ANHY.js";
import {
    a as _
} from "./_oschunk-367MCH7Z.js";
import "./_oschunk-V52U2IZU.js";
import "./_oschunk-MOYCBUII.js";
import "./_oschunk-NYD6CGWS.js";
import "./_oschunk-EROCOLS7.js";
import {
    b as C,
    f as T,
    g as m,
    h as u,
    y as v
} from "./_oschunk-42NACYKQ.js";
import "./_oschunk-2M7PXTSQ.js";
import {
    a as A,
    g as x,
    i as h
} from "./_oschunk-RKYF3TWC.js";
import "./_oschunk-K7AFM7ZW.js";
import {
    a as P
} from "./_oschunk-DOFMR6EA.js";
import {
    l as S
} from "./_oschunk-2ZI4JQLD.js";
import "./_oschunk-IKZJT3AP.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-MSUVGI3L.js";
import {
    ia as O
} from "./_oschunk-2JKANR6M.js";
import {
    c as s,
    g as V
} from "./_oschunk-DVBKI63I.js";
var t = V(A());
var n = O,
    D = h.PlaceholderContent,
    G = h.IteratorPlaceholderContent,
    a = class a extends x.BaseWebScreen {
        static get displayName() {
            return "TradingAssessmentFlow.TradingDefinition"
        }
        static getAttributes() {
            return {
                codeFunction: "TradingDefinition",
                functionKey: "01d6ae66-2a10-4fea-94f8-f9ac24387ea8",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.TradingAssessmentFlow.TradingDefinition.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [_, R]
        }
        get modelFactory() {
            return E
        }
        get controllerFactory() {
            return W
        }
        get title() {
            let d = this.model,
                r = this.controller,
                e = this.idService,
                p = r.validationService,
                i = r.callContext(),
                g = a.asPrimitiveValue,
                y = a.getTranslation,
                o = this;
            return "Trading Definition"
        }
        internalRender() {
            let d = this.model,
                r = this.controller,
                e = this.idService,
                p = r.validationService,
                i = this.widgetsRecordProvider,
                g = r.callContext(),
                y = a.ifWidget,
                o = a.textWidget,
                w = a.asPrimitiveValue,
                l = a.getTranslation,
                f = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(_, {
                getOwnerSpan: s(function() {
                    return f.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return f.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Title: "Trading Assesment",
                    HideTitle: d.getCachedValue(e.getId("roL67QQKakOYOvVARu5vEQ.HideTitle"), function() {
                        return S.isPhone$Action(g).isPhoneOut
                    })
                },
                events: {
                    _handleError: s(function(c) {
                        r.handleError(c)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: p
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: i,
                placeholders: {
                    content: new D(function() {
                        return [t.createElement(u, {
                            align: 0,
                            animate: !1,
                            style: d.getCachedValue(e.getId("GWncaObXw0CbBLw6nwnxRg.Style"), function() {
                                return "display-flex flex-direction-column " + (S.isPhone$Action(g).isPhoneOut ? "gap-base" : "gap-m")
                            }),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "1"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(R, {
                            getOwnerSpan: s(function() {
                                return f.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: s(function() {
                                return f.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Step: "4"
                            },
                            events: {
                                _handleError: s(function(c) {
                                    r.handleError(c)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: p
                            },
                            _idProps: {
                                service: e,
                                uuid: "2",
                                alias: "2"
                            },
                            _widgetRecordProvider: i,
                            _dependencies: []
                        }), t.createElement(u, {
                            align: 0,
                            animate: !1,
                            style: "display-flex align-items-center justify-content-space-between trading-assessment-steps__desktop",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "3"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(v, {
                            extendedProperties: {
                                style: "font-weight: bold;"
                            },
                            style: "trading-assessment-steps__desktop",
                            text: ["4/10\xA0"],
                            _idProps: {
                                service: e,
                                uuid: "4"
                            },
                            _widgetRecordProvider: i
                        })), t.createElement(u, {
                            align: 0,
                            animate: !1,
                            style: d.getCachedValue(e.getId("M5xoxH1rLEm5R0e9N_fnbQ.Style"), function() {
                                return "display-flex flex-direction-column " + (S.isPhone$Action(g).isPhoneOut ? "gap-base" : "gap-m")
                            }),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "5"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(u, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "6"
                            },
                            _widgetRecordProvider: i
                        }, y(d.variables.isRequiredVar, !1, this, function() {
                            return [t.createElement(v, {
                                style: "text-error display-block",
                                text: [o(l("pI_leQ4_QUO6YQ_jPX8eKw#Value", "* This is required."))],
                                _idProps: {
                                    service: e,
                                    uuid: "7"
                                },
                                _widgetRecordProvider: i
                            })]
                        }, function() {
                            return []
                        }), t.createElement(v, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            text: [o(l("lxTf1H25N0iRRo4xpg9FBA#Value", "In your understanding, CFD trading allows you to:"))],
                            _idProps: {
                                service: e,
                                uuid: "8"
                            },
                            _widgetRecordProvider: i
                        })), t.createElement(u, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "9"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(T, {
                            _validationProps: {
                                validationService: p
                            },
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: !1,
                            style: "radio-group",
                            variable: d.createVariable(n.DataTypes.DataTypes.Text, P.getTradingAssessmentCFDTradingDefinition(), function(c) {
                                P.setTradingAssessmentCFDTradingDefinition(c)
                            }),
                            _idProps: {
                                service: e,
                                name: "RadioGroupTwo"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(m, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: n.Injector.resolve(n.ServiceNames.TranslationsService).getMessage("Sxtx9_jJ2Eaylk9tm0AufQ#ValueExpression.1419545133.1", "Purchase shares of a company or physical commodities."),
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "A"
                            },
                            _widgetRecordProvider: i
                        }, o(l("QMI4c9RXi0Wn0RWtqAn2FA#Value", "Purchase commodities or shares of a company."))), t.createElement(m, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: n.Injector.resolve(n.ServiceNames.TranslationsService).getMessage("f14cqPpSaE2_yFGppPWSuw#ValueExpression.160092671.1", "Place a bet on the price movement."),
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "B"
                            },
                            _widgetRecordProvider: i
                        }, o(l("hmF74z6Ax0OmUiZuGY_5iQ#Value", "Place a position on the price movement of an asset where the outcome is a fixed return or nothing at all."))), t.createElement(m, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: n.Injector.resolve(n.ServiceNames.TranslationsService).getMessage("RfXHkO8y8kykuWVFUIwf5w#ValueExpression.318443608.1", "Speculate on the price movement."),
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "C"
                            },
                            _widgetRecordProvider: i
                        }, o(l("Blb877cLfEWUMg5_7QwkDw#Value", "Speculate on the price movement of an asset without actually owning it."))), t.createElement(m, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: n.Injector.resolve(n.ServiceNames.TranslationsService).getMessage("dqbnuqz2VUO26KI6AAhyWQ#ValueExpression.-1822536025.1", "Make a long-term investment."),
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "D"
                            },
                            _widgetRecordProvider: i
                        }, o(l("cX0K1iZruki+htpM6BcE7g#Value", "Make a long-term investment for a guaranteed profit."))))), t.createElement(u, {
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
                            _widgetRecordProvider: i
                        }, t.createElement(C, {
                            enabled: !0,
                            isDefault: !1,
                            onClick: s(function() {
                                var c = g.clone();
                                r.nextOnClick$Action(r.callContext(c))
                            }, "onClick"),
                            style: "btn btn-primary",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "16"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(v, {
                            style: "",
                            text: [o(l("CpO5krhR8ky1V4s4o7G68w#Value", "Next"))],
                            _idProps: {
                                service: e,
                                uuid: "17"
                            },
                            _widgetRecordProvider: i
                        })))))]
                    })
                },
                _dependencies: [w(P.getTradingAssessmentCFDTradingDefinition()), w(d.variables.isRequiredVar)]
            }))
        }
    };
s(a, "View");
var b = a,
    H = b;
export {
    H as
    default
};