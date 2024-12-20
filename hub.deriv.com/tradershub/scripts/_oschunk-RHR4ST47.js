import {
    a as E
} from "./_oschunk-LKTGMV2Q.js";
import {
    a as V
} from "./_oschunk-PSXT45PE.js";
import {
    a as y
} from "./_oschunk-QQ5ZODKK.js";
import "./_oschunk-CDPKYLRY.js";
import {
    a as R
} from "./_oschunk-PON5R23U.js";
import "./_oschunk-KIZC2IWB.js";
import "./_oschunk-U5BVDMC7.js";
import "./_oschunk-GRCLOXGJ.js";
import "./_oschunk-VWJXDAKN.js";
import {
    b as C,
    f as T,
    g as v,
    h as u,
    y as m
} from "./_oschunk-E7JQAU4J.js";
import "./_oschunk-5N5TJ3ES.js";
import {
    a as A,
    g as x,
    i as _
} from "./_oschunk-T77XORCW.js";
import "./_oschunk-2TPJE4AL.js";
import {
    a as S
} from "./_oschunk-VADNKVBQ.js";
import {
    l as f
} from "./_oschunk-OOUVJ7PM.js";
import "./_oschunk-ZKKCTARK.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-KG7LSUIA.js";
import {
    ia as w
} from "./_oschunk-5EPHB76O.js";
import {
    c as s,
    g as F
} from "./_oschunk-DVBKI63I.js";
var t = F(A());
var n = w,
    W = _.PlaceholderContent,
    q = _.IteratorPlaceholderContent,
    a = class a extends x.BaseWebScreen {
        static get displayName() {
            return "TradingAssessmentFlow.CFDTradingExperience"
        }
        static getAttributes() {
            return {
                codeFunction: "CFDTradingExperience",
                functionKey: "1cecac3e-6196-4b96-8d73-d1cfdc79349f",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.TradingAssessmentFlow.CFDTradingExperience.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [R, y]
        }
        get modelFactory() {
            return E
        }
        get controllerFactory() {
            return V
        }
        get title() {
            let d = this.model,
                i = this.controller,
                e = this.idService,
                p = i.validationService,
                r = i.callContext(),
                g = a.asPrimitiveValue,
                h = a.getTranslation,
                o = this;
            return "Trading Experience"
        }
        internalRender() {
            let d = this.model,
                i = this.controller,
                e = this.idService,
                p = i.validationService,
                r = this.widgetsRecordProvider,
                g = i.callContext(),
                h = a.ifWidget,
                o = a.textWidget,
                O = a.asPrimitiveValue,
                c = a.getTranslation,
                P = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(R, {
                getOwnerSpan: s(function() {
                    return P.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return P.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    HideTitle: d.getCachedValue(e.getId("TFSfjkHgbU26VLpngsJmXA.HideTitle"), function() {
                        return f.isPhone$Action(g).isPhoneOut
                    }),
                    Title: "Trading Assesment"
                },
                events: {
                    _handleError: s(function(l) {
                        i.handleError(l)
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
                _widgetRecordProvider: r,
                placeholders: {
                    content: new W(function() {
                        return [t.createElement(u, {
                            align: 0,
                            animate: !1,
                            style: d.getCachedValue(e.getId("AMfNmOmxyE+nTw8jYZ8vmg.Style"), function() {
                                return "display-flex flex-direction-column " + (f.isPhone$Action(g).isPhoneOut ? "gap-base" : "gap-m")
                            }),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "1"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(y, {
                            getOwnerSpan: s(function() {
                                return P.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: s(function() {
                                return P.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Step: "3"
                            },
                            events: {
                                _handleError: s(function(l) {
                                    i.handleError(l)
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
                            _widgetRecordProvider: r,
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
                            _widgetRecordProvider: r
                        }, t.createElement(m, {
                            extendedProperties: {
                                style: "font-weight: bold;"
                            },
                            style: "trading-assessment-steps__desktop",
                            text: ["3/10"],
                            _idProps: {
                                service: e,
                                uuid: "4"
                            },
                            _widgetRecordProvider: r
                        })), t.createElement(u, {
                            align: 0,
                            animate: !1,
                            style: d.getCachedValue(e.getId("ywWKDgt1qEyq2KJGMnudCQ.Style"), function() {
                                return "display-flex flex-direction-column " + (f.isPhone$Action(g).isPhoneOut ? "gap-base" : "gap-m")
                            }),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "5"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(u, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "6"
                            },
                            _widgetRecordProvider: r
                        }, h(d.variables.isRequiredVar, !1, this, function() {
                            return [t.createElement(m, {
                                style: "text-error display-block",
                                text: [o(c("RB+HjOmM5k2P6CW73ksE+w#Value", "* This is required."))],
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
                            text: [o(c("R1ygciMWtUm0qwTQ4yvGew#Value", "How much experience do you have in CFD trading?"))],
                            _idProps: {
                                service: e,
                                uuid: "8"
                            },
                            _widgetRecordProvider: r
                        })), t.createElement(u, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "9"
                            },
                            _widgetRecordProvider: r
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
                            variable: d.createVariable(n.DataTypes.DataTypes.Text, S.getTradingAssessmentCFDExperience(), function(l) {
                                S.setTradingAssessmentCFDExperience(l)
                            }),
                            _idProps: {
                                service: e,
                                name: "RadioGroupTwo"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(v, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: n.Injector.resolve(n.ServiceNames.TranslationsService).getMessage("7Xq+dg8f70OrdA0yj6AM7w#ValueExpression.-1720753911.1", "No experience"),
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "A"
                            },
                            _widgetRecordProvider: r
                        }, o(c("2BZKbacdAUCBqNtvbfCYIw#Value", "No experience"))), t.createElement(v, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: n.Injector.resolve(n.ServiceNames.TranslationsService).getMessage("ZJl3IOoTNkGlHT9PttjaeA#ValueExpression.-956287980.1", "Less than a year"),
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "B"
                            },
                            _widgetRecordProvider: r
                        }, o(c("nBpM_Qf2KkisVigNjl5wKQ#Value", "Less than a year"))), t.createElement(v, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: n.Injector.resolve(n.ServiceNames.TranslationsService).getMessage("PPETKjKajUKyztMd3Qyeww#ValueExpression.-1483956154.1", "1 - 2 years"),
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "C"
                            },
                            _widgetRecordProvider: r
                        }, o(c("C0+ZZcUXU0+0zFTTGR9Ktg#Value", "1 - 2 years"))), t.createElement(v, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: n.Injector.resolve(n.ServiceNames.TranslationsService).getMessage("JDPGfRV6_0GBGFd66C3RxA#ValueExpression.740719229.1", "Over 3 years"),
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "D"
                            },
                            _widgetRecordProvider: r
                        }, o(c("oK88dYIDOEGuO9F5bLQnUw#Value", "Over 3 years"))))), t.createElement(u, {
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
                        }, t.createElement(C, {
                            enabled: !0,
                            isDefault: !1,
                            onClick: s(function() {
                                var l = g.clone();
                                i.nextOnClick$Action(i.callContext(l))
                            }, "onClick"),
                            style: "btn btn-primary",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "16"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(m, {
                            style: "",
                            text: [o(c("48Sgrs2DQEm+RbohMo8FxQ#Value", "Next"))],
                            _idProps: {
                                service: e,
                                uuid: "17"
                            },
                            _widgetRecordProvider: r
                        })))))]
                    })
                },
                _dependencies: [O(S.getTradingAssessmentCFDExperience()), O(d.variables.isRequiredVar)]
            }))
        }
    };
s(a, "View");
var b = a,
    Q = b;
export {
    Q as
    default
};