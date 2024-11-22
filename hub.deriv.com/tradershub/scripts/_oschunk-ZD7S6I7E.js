import {
    a as A
} from "./_oschunk-4XJXSOBG.js";
import {
    a as k
} from "./_oschunk-XYOZX6I7.js";
import "./_oschunk-ILTRYJXV.js";
import {
    a as x
} from "./_oschunk-MDM6SINN.js";
import "./_oschunk-Z3EGUX6T.js";
import "./_oschunk-NJYKWZYU.js";
import "./_oschunk-SW7FWAXZ.js";
import "./_oschunk-BHZNFATE.js";
import {
    b as P,
    f as T,
    g as _,
    h as i,
    j as w,
    r as V,
    u as b,
    v as h,
    y as d
} from "./_oschunk-HUOHOHZB.js";
import "./_oschunk-Y45M2O2K.js";
import {
    a as B,
    g as R,
    i as y
} from "./_oschunk-6LASTRK7.js";
import "./_oschunk-TIJZDWYD.js";
import {
    a as m
} from "./_oschunk-27GDEXUT.js";
import {
    a as f
} from "./_oschunk-D2MH3QEK.js";
import "./_oschunk-WJ75ZXAT.js";
import "./_oschunk-3WNR72F6.js";
import "./_oschunk-X4K3PA43.js";
import {
    sb as E
} from "./_oschunk-HQOLQB4T.js";
import {
    ia as W
} from "./_oschunk-NTQBNJ73.js";
import {
    c,
    g as D
} from "./_oschunk-DVBKI63I.js";
var t = D(B());
var p = W,
    I = y.PlaceholderContent,
    H = y.IteratorPlaceholderContent,
    u = class u extends R.BaseWebScreen {
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
            return A
        }
        get controllerFactory() {
            return k
        }
        get title() {
            return R.BaseWebScreen.getTranslation("95wz6X+LwUmS9wAoKnTPBA#Title", "TradingAssessment")
        }
        internalRender() {
            let l = this.model,
                a = this.controller,
                e = this.idService,
                O = a.validationService,
                r = this.widgetsRecordProvider,
                g = a.callContext(),
                U = u.ifWidget,
                o = u.textWidget,
                v = u.asPrimitiveValue,
                n = u.getTranslation,
                C = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(x, {
                getOwnerSpan: c(function() {
                    return C.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: c(function() {
                    return C.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Analytics: l.getCachedValue(e.getId("pq7UL6Ksl0aaYf3yknBhbw.Analytics"), function() {
                        return function() {
                            var s = new E;
                            return s
                        }()
                    }),
                    HideTitle: l.getCachedValue(e.getId("pq7UL6Ksl0aaYf3yknBhbw.HideTitle"), function() {
                        return f.isPhone$Action(g).isPhoneOut
                    }),
                    Title: "Trading Assesment"
                },
                events: {
                    _handleError: c(function(s) {
                        a.handleError(s)
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
                    content: new I(function() {
                        return [t.createElement(i, {
                            align: 0,
                            animate: !1,
                            style: l.getCachedValue(e.getId("KP9wKlnF4EON3aMhir_47A.Style"), function() {
                                return "display-flex flex-direction-column " + (f.isPhone$Action(g).isPhoneOut ? "gap-base" : "gap-m")
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
                            showPopup: l.variables.whyWeCollectPopupVar,
                            style: "popup-dialog",
                            _idProps: {
                                service: e,
                                uuid: "2"
                            },
                            _widgetRecordProvider: r
                        }, o(n("qeoZZElf60aED+5ABLF_vQ#Value", "To assess your trading experience and if our products are suitable for you, please provide accurate and complete answers. Your responses may affect the outcome of this assessment.")), t.createElement(i, {
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
                            onClick: c(function() {
                                var s = g.clone();
                                a.okOnClick$Action(a.callContext(s))
                            }, "onClick"),
                            style: "btn btn-primary full-width",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "4"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(d, {
                            extendedProperties: {
                                style: 'font-family: "Roboto"; font-weight: normal;'
                            },
                            text: [o(n("oaK9rkBXjUGMTzh_EGskIA#Value", "OK"))],
                            _idProps: {
                                service: e,
                                uuid: "5"
                            },
                            _widgetRecordProvider: r
                        })))), t.createElement(i, {
                            align: 0,
                            animate: !1,
                            style: "display-flex align-items-center justify-content-space-between title-container-mobile",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "6"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(d, {
                            extendedProperties: {
                                style: "font-size: 18px; font-weight: bold;"
                            },
                            text: [o(n("4wYsnyxVo0SonHryyQHEXw#Value", "Trading assessment"))],
                            _idProps: {
                                service: e,
                                uuid: "7"
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
                                uuid: "8"
                            },
                            _widgetRecordProvider: r
                        })), t.createElement(i, {
                            align: 0,
                            animate: !1,
                            style: "display-flex align-items-center justify-content-space-between",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "9"
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
                                uuid: "10"
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
                            onClick: c(function() {
                                var s = g.clone();
                                a.whyDoWeCollectThis_OnClick$Action(a.callContext(s))
                            }, "onClick"),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "11"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(d, {
                            extendedProperties: {
                                style: "font-size: 12px; font-weight: bold; text-decoration: underline;"
                            },
                            text: [o(n("jUYWD6F4N0eByXMIJnY4Dg#Value", "Why do we collect this?"))],
                            _idProps: {
                                service: e,
                                uuid: "12"
                            },
                            _widgetRecordProvider: r
                        }))), t.createElement(i, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "13"
                            },
                            _widgetRecordProvider: r
                        }, U(l.variables.isRequiredVar, !1, this, function() {
                            return [t.createElement(d, {
                                style: "text-error display-block",
                                text: [o(n("K6Dt8OdqM0GMV3bwg5peGg#Value", "* This is required."))],
                                _idProps: {
                                    service: e,
                                    uuid: "14"
                                },
                                _widgetRecordProvider: r
                            })]
                        }, function() {
                            return []
                        }), t.createElement(d, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            text: [o(n("7tZL0ANaDkmPEdwEFUu74A#Value", "Do you understand that you could potentially lose 100% of the money you use to trade?"))],
                            _idProps: {
                                service: e,
                                uuid: "15"
                            },
                            _widgetRecordProvider: r
                        })), t.createElement(i, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "16"
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
                            variable: l.createVariable(p.DataTypes.DataTypes.Text, m.getPotentialLost(), function(s) {
                                m.setPotentialLost(s)
                            }),
                            _idProps: {
                                service: e,
                                name: "RadioGroup1"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(_, {
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
                        }, o(n("TF+Sb+Z600qsauI0w8IuXg#Value", "Yes"))), t.createElement(_, {
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
                        }, o(n("pUstD2ryck+V9Dnzrgtmxw#Value", "No"))))), t.createElement(i, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "text-align: right;"
                            },
                            style: "btn-container",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "20"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(P, {
                            enabled: !0,
                            isDefault: !1,
                            onClick: c(function() {
                                var s = g.clone();
                                a.nextOnClick$Action(a.callContext(s))
                            }, "onClick"),
                            style: "btn btn-primary",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "21"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(d, {
                            extendedProperties: {
                                style: 'font-family: "Roboto", sans-serif; font-weight: 500;'
                            },
                            style: "roboto-medium",
                            text: [o(n("n20JqgCw5kOe+FYG7j6OzA#Value", "Next"))],
                            _idProps: {
                                service: e,
                                uuid: "22"
                            },
                            _widgetRecordProvider: r
                        }))), t.createElement(i, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "text-align: left;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "23"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(h, {
                            extendedProperties: {
                                style: "padding: 16px;"
                            },
                            showPopup: l.variables.notUndrestandCfDLossPopUpVar,
                            style: "popup-dialog",
                            _idProps: {
                                service: e,
                                uuid: "24"
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
                                uuid: "26"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(i, {
                            align: 0,
                            animate: !1,
                            style: "display-flex justify-content-space-between",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "27"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(d, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: bold;"
                            },
                            text: ["Risk tolerance warning"],
                            _idProps: {
                                service: e,
                                uuid: "28"
                            },
                            _widgetRecordProvider: r
                        }), t.createElement(b, {
                            enabled: !0,
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter"
                            },
                            transition: p.Transitions.createTransition(p.Transitions.TransitionAnimation.Fade),
                            url: p.Navigation.generateScreenURL("tradershub", "trading-assessment", {}),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "29"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(V, {
                            image: p.Navigation.VersionedURL.getVersionedUrl("img/tradershub.xmarksm.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "30"
                            },
                            _widgetRecordProvider: r
                        }))), t.createElement(i, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "31"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(d, {
                            extendedProperties: {
                                style: "font-size: 14px;"
                            },
                            text: [o(n("G4aw2ve2eU2cGgWRZh45ow#Value", "CFDs and other financial instruments come with a high risk of losing money rapidly due to leverage. Please consider whether you understand how these instruments work and if you can afford to take the high risk of losing your money."))],
                            _idProps: {
                                service: e,
                                uuid: "32"
                            },
                            _widgetRecordProvider: r
                        })), t.createElement(i, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "33"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(d, {
                            extendedProperties: {
                                style: "font-size: 14px;"
                            },
                            text: [o(n("ZJI+okbpqUiMtDzKUBoxZA#Value", "Note that you'll need to wait 24 hours before continuing."))],
                            _idProps: {
                                service: e,
                                uuid: "34"
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
                                uuid: "35"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(P, {
                            enabled: !0,
                            extendedProperties: {
                                style: "height: 32px;"
                            },
                            isDefault: !1,
                            onClick: c(function() {
                                return Promise.resolve().then(function() {
                                    var s = g.clone();
                                    return a.clickOk$Action(a.callContext(s))
                                })
                            }, "onClick"),
                            style: "btn btn-primary full-width",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "36"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(d, {
                            extendedProperties: {
                                style: 'font-family: "Roboto"; font-weight: normal;'
                            },
                            text: [o(n("NUHQO+NR7E6OnxSW9qi6RQ#Value", "OK"))],
                            _idProps: {
                                service: e,
                                uuid: "37"
                            },
                            _widgetRecordProvider: r
                        })))))))]
                    })
                },
                _dependencies: [v(l.variables.notUndrestandCfDLossPopUpVar), v(m.getPotentialLost()), v(l.variables.isRequiredVar), v(l.variables.whyWeCollectPopupVar)]
            }))
        }
    };
c(u, "View");
var S = u,
    $ = S;
export {
    $ as
    default
};