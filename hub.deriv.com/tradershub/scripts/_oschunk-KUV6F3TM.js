import {
    a as V
} from "./_oschunk-STDGRQTX.js";
import {
    a as k
} from "./_oschunk-GO2IFRLH.js";
import "./_oschunk-JTBJ32DE.js";
import {
    a as x
} from "./_oschunk-PON5R23U.js";
import "./_oschunk-KIZC2IWB.js";
import "./_oschunk-U5BVDMC7.js";
import "./_oschunk-GRCLOXGJ.js";
import "./_oschunk-VWJXDAKN.js";
import {
    b as P,
    f as T,
    g as y,
    h as i,
    j as w,
    r as A,
    u as b,
    v as h,
    y as c
} from "./_oschunk-E7JQAU4J.js";
import "./_oschunk-5N5TJ3ES.js";
import {
    a as L,
    g as _,
    i as R
} from "./_oschunk-T77XORCW.js";
import "./_oschunk-2TPJE4AL.js";
import {
    a as m
} from "./_oschunk-VADNKVBQ.js";
import {
    l as f
} from "./_oschunk-OOUVJ7PM.js";
import "./_oschunk-ZKKCTARK.js";
import "./_oschunk-X4K3PA43.js";
import {
    Jb as E
} from "./_oschunk-KG7LSUIA.js";
import {
    ia as W
} from "./_oschunk-5EPHB76O.js";
import {
    c as l,
    g as D
} from "./_oschunk-DVBKI63I.js";
var t = D(L());
var u = W,
    B = R.PlaceholderContent,
    H = R.IteratorPlaceholderContent,
    g = class g extends _.BaseWebScreen {
        static get displayName() {
            return "RealAccountCreation.TradingAssessment"
        }
        static getAttributes() {
            return {
                codeFunction: "TradingAssessment",
                functionKey: "e9339cf7-8b7f-49c1-92f7-00282a74cf04",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.RealAccountCreation.TradingAssessment.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [x]
        }
        get modelFactory() {
            return V
        }
        get controllerFactory() {
            return k
        }
        get title() {
            return _.BaseWebScreen.getTranslation("95wz6X+LwUmS9wAoKnTPBA#Title", "TradingAssessment")
        }
        internalRender() {
            let d = this.model,
                o = this.controller,
                e = this.idService,
                O = o.validationService,
                r = this.widgetsRecordProvider,
                p = o.callContext(),
                U = g.ifWidget,
                n = g.textWidget,
                v = g.asPrimitiveValue,
                a = g.getTranslation,
                C = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(x, {
                getOwnerSpan: l(function() {
                    return C.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: l(function() {
                    return C.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Analytics: d.getCachedValue(e.getId("pq7UL6Ksl0aaYf3yknBhbw.Analytics"), function() {
                        return function() {
                            var s = new E;
                            return s
                        }()
                    }),
                    HideTitle: d.getCachedValue(e.getId("pq7UL6Ksl0aaYf3yknBhbw.HideTitle"), function() {
                        return f.isPhone$Action(p).isPhoneOut
                    }),
                    Title: u.Injector.resolve(u.ServiceNames.TranslationsService).getMessage("L_pn9wXxvkifCWOoyMYLzA#Value.-1970174898.1", "Trading Assesment")
                },
                events: {
                    _handleError: l(function(s) {
                        o.handleError(s)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: O
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: r,
                placeholders: {
                    content: new B(function() {
                        return [t.createElement(i, {
                            align: 0,
                            animate: !1,
                            style: d.getCachedValue(e.getId("KP9wKlnF4EON3aMhir_47A.Style"), function() {
                                return "display-flex flex-direction-column " + (f.isPhone$Action(p).isPhoneOut ? "gap-base" : "gap-m")
                            }),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "1"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(h, {
                            extendedProperties: {
                                style: "padding: 16px;"
                            },
                            showPopup: d.variables.whyWeCollectPopupVar,
                            style: "popup-dialog",
                            _idProps: {
                                service: e,
                                uuid: "2"
                            },
                            _widgetRecordProvider: r
                        }, n(a("qeoZZElf60aED+5ABLF_vQ#Value", "To assess your trading experience and if our products are suitable for you, please provide accurate and complete answers. Your responses may affect the outcome of this assessment.")), t.createElement(i, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-top: 16px;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "3"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(P, {
                            enabled: !0,
                            extendedProperties: {
                                style: "height: 32px;"
                            },
                            isDefault: !1,
                            onClick: l(function() {
                                var s = p.clone();
                                o.okOnClick$Action(o.callContext(s))
                            }, "onClick"),
                            style: "btn btn-primary full-width",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "4"
                            },
                            _widgetRecordProvider: r
                        }, n(a("oaK9rkBXjUGMTzh_EGskIA#Value", "OK"))))), t.createElement(i, {
                            align: 0,
                            animate: !1,
                            style: "display-flex align-items-center justify-content-space-between title-container-mobile",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "5"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(c, {
                            extendedProperties: {
                                style: "font-size: 18px; font-weight: bold;"
                            },
                            text: [n(a("4wYsnyxVo0SonHryyQHEXw#Value", "Trading assessment"))],
                            _idProps: {
                                service: e,
                                uuid: "6"
                            },
                            _widgetRecordProvider: r
                        }), t.createElement(w, {
                            extendedProperties: {
                                style: "font-weight: bold;"
                            },
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter"
                            },
                            value: "1/10",
                            _idProps: {
                                service: e,
                                uuid: "7"
                            },
                            _widgetRecordProvider: r
                        })), t.createElement(i, {
                            align: 0,
                            animate: !1,
                            style: "display-flex align-items-center justify-content-space-between",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "8"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(w, {
                            extendedProperties: {
                                style: "font-weight: bold;"
                            },
                            style: "trading-assessment-steps__desktop",
                            value: "1/10",
                            _idProps: {
                                service: e,
                                uuid: "9"
                            },
                            _widgetRecordProvider: r
                        }), t.createElement(b, {
                            enabled: !0,
                            extendedProperties: {
                                style: "color: #222;"
                            },
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter"
                            },
                            onClick: l(function() {
                                var s = p.clone();
                                o.whyDoWeCollectThis_OnClick$Action(o.callContext(s))
                            }, "onClick"),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "10"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(c, {
                            extendedProperties: {
                                style: "font-size: 12px; font-weight: bold; text-decoration: underline;"
                            },
                            text: [n(a("jUYWD6F4N0eByXMIJnY4Dg#Value", "Why do we collect this?"))],
                            _idProps: {
                                service: e,
                                uuid: "11"
                            },
                            _widgetRecordProvider: r
                        }))), t.createElement(i, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "12"
                            },
                            _widgetRecordProvider: r
                        }, U(d.variables.isRequiredVar, !1, this, function() {
                            return [t.createElement(c, {
                                style: "text-error display-block",
                                text: [n(a("K6Dt8OdqM0GMV3bwg5peGg#Value", "* This is required."))],
                                _idProps: {
                                    service: e,
                                    uuid: "13"
                                },
                                _widgetRecordProvider: r
                            })]
                        }, function() {
                            return []
                        }), t.createElement(c, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            text: [n(a("7tZL0ANaDkmPEdwEFUu74A#Value", "Do you understand that you could potentially lose 100% of the money you use to trade?"))],
                            _idProps: {
                                service: e,
                                uuid: "14"
                            },
                            _widgetRecordProvider: r
                        })), t.createElement(i, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "15"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(T, {
                            _validationProps: {
                                validationService: O
                            },
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: !1,
                            style: "radio-group",
                            variable: d.createVariable(u.DataTypes.DataTypes.Text, m.getTradingAssessment_PotentialLost(), function(s) {
                                m.setTradingAssessment_PotentialLost(s)
                            }),
                            _idProps: {
                                service: e,
                                name: "RadioGroup1"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(y, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: "Yes",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "Yes"
                            },
                            _widgetRecordProvider: r
                        }, n(a("TF+Sb+Z600qsauI0w8IuXg#Value", "Yes"))), t.createElement(y, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: "No",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "No"
                            },
                            _widgetRecordProvider: r
                        }, n(a("pUstD2ryck+V9Dnzrgtmxw#Value", "No"))))), t.createElement(i, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "text-align: right;"
                            },
                            style: "btn-container",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "19"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(P, {
                            enabled: !0,
                            isDefault: !1,
                            onClick: l(function() {
                                return Promise.resolve().then(function() {
                                    var s = p.clone();
                                    return o.nextOnClick$Action(o.callContext(s))
                                })
                            }, "onClick"),
                            style: "btn btn-primary",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "20"
                            },
                            _widgetRecordProvider: r
                        }, n(a("n20JqgCw5kOe+FYG7j6OzA#Value", "Next")))), t.createElement(i, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "text-align: left;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "21"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(h, {
                            extendedProperties: {
                                style: "padding: 16px;"
                            },
                            showPopup: d.variables.notUndrestandCfDLossPopUpVar,
                            style: "popup-dialog",
                            _idProps: {
                                service: e,
                                uuid: "22"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(i, {
                            align: 0,
                            animate: !1,
                            style: "content-wrapper",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "ContentWrapper"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(i, {
                            align: 0,
                            animate: !1,
                            style: "",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "24"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(i, {
                            align: 0,
                            animate: !1,
                            style: "display-flex justify-content-space-between",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "25"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(c, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: bold;"
                            },
                            text: ["Risk tolerance warning"],
                            _idProps: {
                                service: e,
                                uuid: "26"
                            },
                            _widgetRecordProvider: r
                        }), t.createElement(b, {
                            enabled: !0,
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter"
                            },
                            transition: u.Transitions.createTransition(u.Transitions.TransitionAnimation.Fade),
                            url: u.Navigation.generateScreenURL("tradershub", "trading-assessment", {}),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "27"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(A, {
                            image: u.Navigation.VersionedURL.getVersionedUrl("img/tradershub.xmarksm.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "28"
                            },
                            _widgetRecordProvider: r
                        }))), t.createElement(i, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "29"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(c, {
                            extendedProperties: {
                                style: "font-size: 14px;"
                            },
                            text: [n(a("G4aw2ve2eU2cGgWRZh45ow#Value", "CFDs and other financial instruments come with a high risk of losing money rapidly due to leverage. Please consider whether you understand how these instruments work and if you can afford to take the high risk of losing your money."))],
                            _idProps: {
                                service: e,
                                uuid: "30"
                            },
                            _widgetRecordProvider: r
                        })), t.createElement(i, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "31"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(c, {
                            extendedProperties: {
                                style: "font-size: 14px;"
                            },
                            text: [n(a("ZJI+okbpqUiMtDzKUBoxZA#Value", "Note that you'll need to wait 24 hours before continuing."))],
                            _idProps: {
                                service: e,
                                uuid: "32"
                            },
                            _widgetRecordProvider: r
                        }))), t.createElement(i, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-top: 16px;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "33"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(P, {
                            enabled: !0,
                            extendedProperties: {
                                style: "height: 32px;"
                            },
                            isDefault: !1,
                            onClick: l(function() {
                                return Promise.resolve().then(function() {
                                    var s = p.clone();
                                    return o.clickOk$Action(o.callContext(s))
                                })
                            }, "onClick"),
                            style: "btn btn-primary full-width",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "34"
                            },
                            _widgetRecordProvider: r
                        }, n(a("NUHQO+NR7E6OnxSW9qi6RQ#Value", "OK"))))))))]
                    })
                },
                _dependencies: [v(d.variables.notUndrestandCfDLossPopUpVar), v(m.getTradingAssessment_PotentialLost()), v(d.variables.isRequiredVar), v(d.variables.whyWeCollectPopupVar)]
            }))
        }
    };
l(g, "View");
var S = g,
    $ = S;
export {
    $ as
    default
};