import {
    a as A
} from "./_oschunk-R45OENLQ.js";
import {
    a as R
} from "./_oschunk-PFCE5QNP.js";
import "./_oschunk-TOVPNB4I.js";
import {
    a as x
} from "./_oschunk-IJCTXODU.js";
import {
    a as S
} from "./_oschunk-MDM6SINN.js";
import "./_oschunk-Z3EGUX6T.js";
import "./_oschunk-NJYKWZYU.js";
import "./_oschunk-SW7FWAXZ.js";
import "./_oschunk-BHZNFATE.js";
import {
    b as O,
    f as C,
    g as u,
    h as o,
    y as m
} from "./_oschunk-HUOHOHZB.js";
import "./_oschunk-Y45M2O2K.js";
import {
    a as E,
    g as h,
    i as _
} from "./_oschunk-6LASTRK7.js";
import "./_oschunk-TIJZDWYD.js";
import {
    a as v
} from "./_oschunk-27GDEXUT.js";
import {
    a as f
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
    g as W
} from "./_oschunk-DVBKI63I.js";
var t = W(E());
var F = y,
    V = _.PlaceholderContent,
    $ = _.IteratorPlaceholderContent,
    d = class d extends h.BaseWebScreen {
        static get displayName() {
            return "TradingAssessmentFlow.TradingAssessmentStepFour"
        }
        static getAttributes() {
            return {
                codeFunction: "TradingAssessmentStepFour",
                functionKey: "01d6ae66-2a10-4fea-94f8-f9ac24387ea8",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.TradingAssessmentFlow.TradingAssessmentStepFour.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [S, R]
        }
        get modelFactory() {
            return x
        }
        get controllerFactory() {
            return A
        }
        get title() {
            return h.BaseWebScreen.getTranslation("Zq7WARAq6k+U+PmsJDh+qA#Title", "TradingAssessmentStepFour")
        }
        internalRender() {
            let l = this.model,
                c = this.controller,
                e = this.idService,
                P = c.validationService,
                r = this.widgetsRecordProvider,
                g = c.callContext(),
                T = d.ifWidget,
                s = d.textWidget,
                b = d.asPrimitiveValue,
                n = d.getTranslation,
                p = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(S, {
                getOwnerSpan: i(function() {
                    return p.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: i(function() {
                    return p.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Title: "Trading Assesment",
                    HideTitle: l.getCachedValue(e.getId("roL67QQKakOYOvVARu5vEQ.HideTitle"), function() {
                        return f.isPhone$Action(g).isPhoneOut
                    })
                },
                events: {
                    _handleError: i(function(a) {
                        c.handleError(a)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: P
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: r,
                placeholders: {
                    content: new V(function() {
                        return [t.createElement(o, {
                            align: 0,
                            animate: !1,
                            style: l.getCachedValue(e.getId("GWncaObXw0CbBLw6nwnxRg.Style"), function() {
                                return "display-flex flex-direction-column " + (f.isPhone$Action(g).isPhoneOut ? "gap-base" : "gap-m")
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
                                Step: "4"
                            },
                            events: {
                                _handleError: i(function(a) {
                                    c.handleError(a)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: P
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
                        }, t.createElement(m, {
                            extendedProperties: {
                                style: "font-weight: bold;"
                            },
                            style: "trading-assessment-steps__desktop",
                            text: ["4/10\xA0"],
                            _idProps: {
                                service: e,
                                uuid: "4"
                            },
                            _widgetRecordProvider: r
                        })), t.createElement(o, {
                            align: 0,
                            animate: !1,
                            style: l.getCachedValue(e.getId("M5xoxH1rLEm5R0e9N_fnbQ.Style"), function() {
                                return "display-flex flex-direction-column " + (f.isPhone$Action(g).isPhoneOut ? "gap-base" : "gap-m")
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
                            return [t.createElement(m, {
                                style: "text-error display-block",
                                text: [s(n("pI_leQ4_QUO6YQ_jPX8eKw#Value", "* This is required."))],
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
                            text: [s(n("lxTf1H25N0iRRo4xpg9FBA#Value", "In your understanding, CFD trading allows you to:"))],
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
                                validationService: P
                            },
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: !1,
                            style: "radio-group",
                            variable: l.createVariable(F.DataTypes.DataTypes.Text, v.getCFDAllow(), function(a) {
                                v.setCFDAllow(a)
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
                            value: "Purchase commodities or shares of a company.",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "A"
                            },
                            _widgetRecordProvider: r
                        }, s(n("QMI4c9RXi0Wn0RWtqAn2FA#Value", "Purchase commodities or shares of a company."))), t.createElement(u, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: "Place a position on the price movement of an asset where the outcome is a fixed return or nothing at all.",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "B"
                            },
                            _widgetRecordProvider: r
                        }, s(n("hmF74z6Ax0OmUiZuGY_5iQ#Value", "Place a position on the price movement of an asset where the outcome is a fixed return or nothing at all."))), t.createElement(u, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: "Speculate on the price movement of an asset without actually owning it.",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "C"
                            },
                            _widgetRecordProvider: r
                        }, s(n("Blb877cLfEWUMg5_7QwkDw#Value", "Speculate on the price movement of an asset without actually owning it."))), t.createElement(u, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: "Make a long-term investment for a guaranteed profit.",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "D"
                            },
                            _widgetRecordProvider: r
                        }, s(n("cX0K1iZruki+htpM6BcE7g#Value", "Make a long-term investment for a guaranteed profit."))))), t.createElement(o, {
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
                        }, t.createElement(O, {
                            enabled: !0,
                            isDefault: !1,
                            onClick: i(function() {
                                var a = g.clone();
                                c.nextOnClick$Action(c.callContext(a))
                            }, "onClick"),
                            style: "btn btn-primary",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "16"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(m, {
                            extendedProperties: {
                                style: 'font-family: "Roboto", sans-serif; font-weight: 500;'
                            },
                            style: "roboto-medium",
                            text: [s(n("CpO5krhR8ky1V4s4o7G68w#Value", "Next"))],
                            _idProps: {
                                service: e,
                                uuid: "17"
                            },
                            _widgetRecordProvider: r
                        })))))]
                    })
                },
                _dependencies: [b(v.getCFDAllow()), b(l.variables.isRequiredVar)]
            }))
        }
    };
i(d, "View");
var w = d,
    G = w;
export {
    G as
    default
};