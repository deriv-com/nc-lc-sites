import {
    a as T
} from "./_oschunk-EC55YTGZ.js";
import {
    a as A
} from "./_oschunk-FHWE3RU5.js";
import {
    a as w
} from "./_oschunk-QQ5ZODKK.js";
import "./_oschunk-CDPKYLRY.js";
import {
    a as b
} from "./_oschunk-PON5R23U.js";
import "./_oschunk-KIZC2IWB.js";
import "./_oschunk-U5BVDMC7.js";
import "./_oschunk-GRCLOXGJ.js";
import "./_oschunk-VWJXDAKN.js";
import {
    b as E,
    f as C,
    g as u,
    h as g,
    y as v
} from "./_oschunk-E7JQAU4J.js";
import "./_oschunk-5N5TJ3ES.js";
import {
    a as V,
    g as y,
    i as h
} from "./_oschunk-T77XORCW.js";
import "./_oschunk-2TPJE4AL.js";
import {
    a as P
} from "./_oschunk-VADNKVBQ.js";
import {
    l as f
} from "./_oschunk-OOUVJ7PM.js";
import "./_oschunk-ZKKCTARK.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-KG7LSUIA.js";
import {
    ia as O
} from "./_oschunk-5EPHB76O.js";
import {
    c as a,
    g as I
} from "./_oschunk-DVBKI63I.js";
var t = I(V());
var i = O,
    W = h.PlaceholderContent,
    q = h.IteratorPlaceholderContent,
    o = class o extends y.BaseWebScreen {
        static get displayName() {
            return "TradingAssessmentFlow.KnowledgeAndExperience"
        }
        static getAttributes() {
            return {
                codeFunction: "KnowledgeAndExperience",
                functionKey: "abfb21b9-f8f5-44e0-8542-599c4cb92ee9",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.TradingAssessmentFlow.KnowledgeAndExperience.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [b, w]
        }
        get modelFactory() {
            return T
        }
        get controllerFactory() {
            return A
        }
        get title() {
            let c = this.model,
                s = this.controller,
                e = this.idService,
                m = s.validationService,
                r = s.callContext(),
                p = o.asPrimitiveValue,
                x = o.getTranslation,
                n = this;
            return "Trading Knowledge"
        }
        internalRender() {
            let c = this.model,
                s = this.controller,
                e = this.idService,
                m = s.validationService,
                r = this.widgetsRecordProvider,
                p = s.callContext(),
                x = o.ifWidget,
                n = o.textWidget,
                R = o.asPrimitiveValue,
                d = o.getTranslation,
                S = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(b, {
                getOwnerSpan: a(function() {
                    return S.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return S.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    HideTitle: c.getCachedValue(e.getId("tYtGIsurj0aphpIeSyccRw.HideTitle"), function() {
                        return f.isPhone$Action(p).isPhoneOut
                    }),
                    Title: "Trading Assesment"
                },
                events: {
                    _handleError: a(function(l) {
                        s.handleError(l)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: m
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: r,
                placeholders: {
                    content: new W(function() {
                        return [t.createElement(g, {
                            align: 0,
                            animate: !1,
                            style: c.getCachedValue(e.getId("Hw8iGMOgg0eKgzb4Ybgz2A.Style"), function() {
                                return "display-flex flex-direction-column " + (f.isPhone$Action(p).isPhoneOut ? "gap-base" : "gap-m")
                            }),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "1"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(w, {
                            getOwnerSpan: a(function() {
                                return S.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return S.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Step: "2"
                            },
                            events: {
                                _handleError: a(function(l) {
                                    s.handleError(l)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: m
                            },
                            _idProps: {
                                service: e,
                                uuid: "2",
                                alias: "2"
                            },
                            _widgetRecordProvider: r,
                            _dependencies: []
                        }), t.createElement(g, {
                            align: 0,
                            animate: !1,
                            style: "display-flex align-items-center justify-content-space-between trading-assessment-steps__desktop",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "3"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(v, {
                            extendedProperties: {
                                style: "font-weight: bold;"
                            },
                            style: "trading-assessment-steps__desktop",
                            text: ["2/10"],
                            _idProps: {
                                service: e,
                                uuid: "4"
                            },
                            _widgetRecordProvider: r
                        })), t.createElement(g, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "5"
                            },
                            _widgetRecordProvider: r
                        }, x(c.variables.isRequiredVar, !1, this, function() {
                            return [t.createElement(v, {
                                style: "text-error display-block",
                                text: [n(d("cizIPtCQWkm763_wpzyEbA#Value", "* This is required."))],
                                _idProps: {
                                    service: e,
                                    uuid: "6"
                                },
                                _widgetRecordProvider: r
                            })]
                        }, function() {
                            return []
                        }), t.createElement(v, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            text: [n(d("5pVkQZgBDE6kx+kb9XGmdQ#Value", "How much knowledge and experience do you have in relation to online trading?"))],
                            _idProps: {
                                service: e,
                                uuid: "7"
                            },
                            _widgetRecordProvider: r
                        })), t.createElement(g, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "8"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(C, {
                            _validationProps: {
                                validationService: m
                            },
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: !1,
                            style: "radio-group",
                            variable: c.createVariable(i.DataTypes.DataTypes.Text, P.getTradingAssessmentSourceOfExperience(), function(l) {
                                P.setTradingAssessmentSourceOfExperience(l)
                            }),
                            _idProps: {
                                service: e,
                                name: "RadioGroupTwo"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(u, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: i.Injector.resolve(i.ServiceNames.TranslationsService).getMessage("Qcp_plJUbEW16jPbsm_znw#ValueExpression.-1040567938.1", "I have an academic degree, professional certification, and/or work experience."),
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "A"
                            },
                            _widgetRecordProvider: r
                        }, n(d("Qs2G1Z17TUKEg1faFJaR0w#Value", "I have an academic degree, professional certification, and/or work experience related to financial services."))), t.createElement(u, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: i.Injector.resolve(i.ServiceNames.TranslationsService).getMessage("YEcrJEEYQkyj3KWQjj9qhg#ValueExpression.-566205447.1", "I trade forex CFDs and other complex financial instruments."),
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "B"
                            },
                            _widgetRecordProvider: r
                        }, n(d("nTI4557840uam56OQwEPxg#Value", "I trade forex CFDs and other complex financial instruments regularly on other platforms."))), t.createElement(u, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: i.Injector.resolve(i.ServiceNames.TranslationsService).getMessage("6Ae85Zrtq0aPpuoy89JA8g#ValueExpression.-234077475.1", "I have attended seminars, training, and/or workshops."),
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "C"
                            },
                            _widgetRecordProvider: r
                        }, n(d("GmelWQIS+kqx5OZqixhoGA#Value", "I have attended seminars, training, and/or workshops related to trading."))), t.createElement(u, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: i.Injector.resolve(i.ServiceNames.TranslationsService).getMessage("LsEJAJSz90e0x19ieNCGhQ#ValueExpression.-511115077.1", "I have little experience."),
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "D"
                            },
                            _widgetRecordProvider: r
                        }, n(d("ISuqsvjyakGJ8NmU1675GQ#Value", "I am interested in trading but have very little experience."))), t.createElement(u, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: i.Injector.resolve(i.ServiceNames.TranslationsService).getMessage("_EbFVxl7KEimatICwXQilA#ValueExpression.1968125870.1", "I have no knowledge."),
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "E"
                            },
                            _widgetRecordProvider: r
                        }, n(d("Xu4N7wMHlUOypBsg0CaEow#Value", "I have no knowledge and experience in trading at all."))))), t.createElement(g, {
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
                        }, t.createElement(E, {
                            enabled: !0,
                            isDefault: !1,
                            onClick: a(function() {
                                var l = p.clone();
                                s.nextOnClick$Action(s.callContext(l))
                            }, "onClick"),
                            style: "btn btn-primary",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "16"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(v, {
                            style: "",
                            text: [n(d("OSYAkKbxmkSP61DAdyA6mQ#Value", "Next"))],
                            _idProps: {
                                service: e,
                                uuid: "17"
                            },
                            _widgetRecordProvider: r
                        }))))]
                    })
                },
                _dependencies: [R(P.getTradingAssessmentSourceOfExperience()), R(c.variables.isRequiredVar)]
            }))
        }
    };
a(o, "View");
var _ = o,
    J = _;
export {
    J as
    default
};