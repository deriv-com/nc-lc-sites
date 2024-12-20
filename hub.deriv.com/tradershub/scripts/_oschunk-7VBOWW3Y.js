import {
    a as W
} from "./_oschunk-DJVKWFBR.js";
import {
    a as E
} from "./_oschunk-OMX3PN5W.js";
import {
    a as _
} from "./_oschunk-QQ5ZODKK.js";
import "./_oschunk-CDPKYLRY.js";
import {
    a as h
} from "./_oschunk-PON5R23U.js";
import "./_oschunk-KIZC2IWB.js";
import "./_oschunk-U5BVDMC7.js";
import "./_oschunk-GRCLOXGJ.js";
import "./_oschunk-VWJXDAKN.js";
import {
    b as x,
    f as T,
    g as v,
    h as u,
    y as m
} from "./_oschunk-E7JQAU4J.js";
import "./_oschunk-5N5TJ3ES.js";
import {
    a as V,
    g as C,
    i as R
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
    g as A
} from "./_oschunk-DVBKI63I.js";
var t = A(V());
var n = w,
    I = R.PlaceholderContent,
    Q = R.IteratorPlaceholderContent,
    a = class a extends C.BaseWebScreen {
        static get displayName() {
            return "TradingAssessmentFlow.InitialMargin"
        }
        static getAttributes() {
            return {
                codeFunction: "InitialMargin",
                functionKey: "ba00dc20-683e-4dcc-af47-f7e144518147",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.TradingAssessmentFlow.InitialMargin.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [h, _]
        }
        get modelFactory() {
            return W
        }
        get controllerFactory() {
            return E
        }
        get title() {
            let d = this.model,
                i = this.controller,
                e = this.idService,
                p = i.validationService,
                r = i.callContext(),
                g = a.asPrimitiveValue,
                y = a.getTranslation,
                o = this;
            return "Initial Margin"
        }
        internalRender() {
            let d = this.model,
                i = this.controller,
                e = this.idService,
                p = i.validationService,
                r = this.widgetsRecordProvider,
                g = i.callContext(),
                y = a.ifWidget,
                o = a.textWidget,
                O = a.asPrimitiveValue,
                l = a.getTranslation,
                P = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(h, {
                getOwnerSpan: s(function() {
                    return P.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return P.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    HideTitle: d.getCachedValue(e.getId("e0v1zOeTokO5p7p0g39EXQ.HideTitle"), function() {
                        return f.isPhone$Action(g).isPhoneOut
                    }),
                    Title: "Trading Assesment"
                },
                events: {
                    _handleError: s(function(c) {
                        i.handleError(c)
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
                    content: new I(function() {
                        return [t.createElement(u, {
                            align: 0,
                            animate: !1,
                            style: d.getCachedValue(e.getId("kVE4Gz3kPkKFkQUfZmaT0g.Style"), function() {
                                return "display-flex flex-direction-column " + (f.isPhone$Action(g).isPhoneOut ? "gap-base" : "gap-m")
                            }),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "1"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(_, {
                            getOwnerSpan: s(function() {
                                return P.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: s(function() {
                                return P.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Step: "10"
                            },
                            events: {
                                _handleError: s(function(c) {
                                    i.handleError(c)
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
                            text: ["10/10"],
                            _idProps: {
                                service: e,
                                uuid: "4"
                            },
                            _widgetRecordProvider: r
                        })), t.createElement(u, {
                            align: 0,
                            animate: !1,
                            style: d.getCachedValue(e.getId("g84iS+4CeEG4a1ycKgT+fw.Style"), function() {
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
                        }, y(d.variables.isRequiredVar, !1, this, function() {
                            return [t.createElement(m, {
                                style: "text-error display-block",
                                text: [o(l("1I+UMKI5rUKpLMA8FWKF2w#Value", "* This is required."))],
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
                            text: [o(l("CeAiAxURt0+Io030q4CvMQ#Value", "When are you required to pay an initial margin?"))],
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
                            variable: d.createVariable(n.DataTypes.DataTypes.Text, S.getTradingAssessmentRequireInitialMargin(), function(c) {
                                S.setTradingAssessmentRequireInitialMargin(c)
                            }),
                            _idProps: {
                                service: e,
                                name: "RadioGroup"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(v, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: n.Injector.resolve(n.ServiceNames.TranslationsService).getMessage("cZR7a725Dk2U9GT_k3+iBA#ValueExpression.1066954439.1", "When opening a Leveraged CFD trade."),
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "A"
                            },
                            _widgetRecordProvider: r
                        }, o(l("RxBG7mSHAkWxwNVdWLjcyQ#Value", "When opening a leveraged CFD trade."))), t.createElement(v, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: n.Injector.resolve(n.ServiceNames.TranslationsService).getMessage("Fq9MqP4+g0uLU7cY+0n5Fw#ValueExpression.1728817505.1", "When trading Multipliers."),
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "B"
                            },
                            _widgetRecordProvider: r
                        }, o(l("KTh+4DRTEkKyPjN7LZnxaw#Value", "When trading multipliers."))), t.createElement(v, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: n.Injector.resolve(n.ServiceNames.TranslationsService).getMessage("5+pugjR6wkmHVnBgDOxenw#ValueExpression.-1055323733.1", "When buying shares of a company."),
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "C"
                            },
                            _widgetRecordProvider: r
                        }, o(l("YUQNTqtA2Eeq0U_5Qxs3VA#Value", "When buying shares of a company."))), t.createElement(v, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: n.Injector.resolve(n.ServiceNames.TranslationsService).getMessage("54S5V+Wu+UWF7KR77+5RRg#ValueExpression.301257802.1", "All of the above."),
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "D"
                            },
                            _widgetRecordProvider: r
                        }, o(l("cs5ANllQhkCgcApdtJOk4Q#Value", "All of the above."))))), t.createElement(u, {
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
                            onClick: s(function() {
                                var c = g.clone();
                                i.nextOnClick$Action(i.callContext(c))
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
                            text: [o(l("68dZI0WdbkCekiAObcC18g#Value", "Next"))],
                            _idProps: {
                                service: e,
                                uuid: "17"
                            },
                            _widgetRecordProvider: r
                        })))))]
                    })
                },
                _dependencies: [O(S.getTradingAssessmentRequireInitialMargin()), O(d.variables.isRequiredVar)]
            }))
        }
    };
s(a, "View");
var b = a,
    L = b;
export {
    L as
    default
};