import {
    a as W
} from "./_oschunk-BQ6D7ECN.js";
import {
    a as E
} from "./_oschunk-ATQFXA6Z.js";
import {
    a as _
} from "./_oschunk-QQ5ZODKK.js";
import "./_oschunk-CDPKYLRY.js";
import {
    a as y
} from "./_oschunk-PON5R23U.js";
import "./_oschunk-KIZC2IWB.js";
import "./_oschunk-U5BVDMC7.js";
import "./_oschunk-GRCLOXGJ.js";
import "./_oschunk-VWJXDAKN.js";
import {
    b as C,
    f as x,
    g,
    h as d,
    y as m
} from "./_oschunk-E7JQAU4J.js";
import "./_oschunk-5N5TJ3ES.js";
import {
    a as A,
    g as P,
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
    ia as O
} from "./_oschunk-5EPHB76O.js";
import {
    c as i,
    g as k
} from "./_oschunk-DVBKI63I.js";
var t = k(A());
var s = O,
    V = R.PlaceholderContent,
    M = R.IteratorPlaceholderContent,
    l = class l extends P.BaseWebScreen {
        static get displayName() {
            return "TradingAssessmentFlow.RiskStopLoss"
        }
        static getAttributes() {
            return {
                codeFunction: "RiskStopLoss",
                functionKey: "5ba2fdf4-56c8-4732-a281-b699e72950bc",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.TradingAssessmentFlow.RiskStopLoss.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [y, _]
        }
        get modelFactory() {
            return E
        }
        get controllerFactory() {
            return W
        }
        get title() {
            return P.BaseWebScreen.getTranslation("9P2iW8hWMkeigbaZ5ylQvA#Title", "RiskStopLoss")
        }
        internalRender() {
            let c = this.model,
                u = this.controller,
                e = this.idService,
                h = u.validationService,
                r = this.widgetsRecordProvider,
                p = u.callContext(),
                T = l.ifWidget,
                a = l.textWidget,
                w = l.asPrimitiveValue,
                o = l.getTranslation,
                v = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(y, {
                getOwnerSpan: i(function() {
                    return v.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: i(function() {
                    return v.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    HideTitle: c.getCachedValue(e.getId("9sqRcQOtBUiPn6y2wXzSnQ.HideTitle"), function() {
                        return f.isPhone$Action(p).isPhoneOut
                    }),
                    Title: "Trading Assesment"
                },
                events: {
                    _handleError: i(function(n) {
                        u.handleError(n)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: h
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: r,
                placeholders: {
                    content: new V(function() {
                        return [t.createElement(d, {
                            align: 0,
                            animate: !1,
                            style: c.getCachedValue(e.getId("ZdNsv1ZO6kWI1OhbDzX6rw.Style"), function() {
                                return "display-flex flex-direction-column " + (f.isPhone$Action(p).isPhoneOut ? "gap-base" : "gap-m")
                            }),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "1"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(_, {
                            getOwnerSpan: i(function() {
                                return v.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: i(function() {
                                return v.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Step: "9"
                            },
                            events: {
                                _handleError: i(function(n) {
                                    u.handleError(n)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: h
                            },
                            _idProps: {
                                service: e,
                                uuid: "2",
                                alias: "2"
                            },
                            _widgetRecordProvider: r,
                            _dependencies: []
                        }), t.createElement(d, {
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
                            text: ["9/10"],
                            _idProps: {
                                service: e,
                                uuid: "4"
                            },
                            _widgetRecordProvider: r
                        })), t.createElement(d, {
                            align: 0,
                            animate: !1,
                            style: c.getCachedValue(e.getId("rjZ_F__PtEOhRQ9qaiEG1A.Style"), function() {
                                return "display-flex flex-direction-column " + (f.isPhone$Action(p).isPhoneOut ? "gap-base" : "gap-m")
                            }),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "5"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(d, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "6"
                            },
                            _widgetRecordProvider: r
                        }, T(c.variables.isRequiredVar, !1, this, function() {
                            return [t.createElement(m, {
                                style: "text-error display-block",
                                text: [a(o("Fun9OLd4NEOB_6Swxqtppg#Value", "* This is required."))],
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
                            text: [a(o("lIDTnAWQhEiGOHfJ6Uj8XQ#Value", "Leverage trading is high-risk, so it\u2019s a good idea to use risk management features such as stop loss. Stop loss allows you to: "))],
                            _idProps: {
                                service: e,
                                uuid: "8"
                            },
                            _widgetRecordProvider: r
                        })), t.createElement(d, {
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
                                validationService: h
                            },
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: !1,
                            style: "radio-group",
                            variable: c.createVariable(s.DataTypes.DataTypes.Text, S.getTradingAssessmentHighRiskStopLoss(), function(n) {
                                S.setTradingAssessmentHighRiskStopLoss(n)
                            }),
                            _idProps: {
                                service: e,
                                name: "RadioGroup"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(g, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: s.Injector.resolve(s.ServiceNames.TranslationsService).getMessage("FkLNtXua8ECueUE+1a_nIg#ValueExpression.1280652349.1", "Cancel your trade at any time within a chosen timeframe."),
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "A"
                            },
                            _widgetRecordProvider: r
                        }, a(o("ZQ9Na4t30kWoQBj66ezbaw#Value", "Cancel your trade at any time within a specified timeframe."))), t.createElement(g, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: s.Injector.resolve(s.ServiceNames.TranslationsService).getMessage("PRsUsHztik2iy3hl2NjgZA#ValueExpression.-115586361.1", "Close your trade automatically when the loss is more than or equal to a specific amount."),
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "B"
                            },
                            _widgetRecordProvider: r
                        }, a(o("k_rqwowylUiKGTwa9TdX4A#Value", "Close your trade automatically when the loss is equal to or more than a specified amount, as long as there is adequate market liquidity."))), t.createElement(g, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: s.Injector.resolve(s.ServiceNames.TranslationsService).getMessage("hCI+sHurgk+fmWnypXQVNg#ValueExpression.382216872.1", "Close your trade automatically when the profit is more than or equal to a specific amount."),
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "C"
                            },
                            _widgetRecordProvider: r
                        }, a(o("3ajtRoM6e0eDIDOxf0pe5w#Value", "Close your trade automatically when the profit is equal to or more than a specified amount, as long as there is adequate market liquidity."))), t.createElement(g, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: s.Injector.resolve(s.ServiceNames.TranslationsService).getMessage("ApzcuB4eiE6PlQ7+aEWQdg#ValueExpression.190889311.1", "Make a guaranteed profit on your trade."),
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "D"
                            },
                            _widgetRecordProvider: r
                        }, a(o("qgLWumCBI0Wo6ilynXrMRA#Value", "Make a guaranteed profit on your trade."))))), t.createElement(d, {
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
                            onClick: i(function() {
                                var n = p.clone();
                                u.nextOnClick$Action(u.callContext(n))
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
                            text: [a(o("fOqnLCbG6UqdbCnzWq7tCA#Value", "Next"))],
                            _idProps: {
                                service: e,
                                uuid: "17"
                            },
                            _widgetRecordProvider: r
                        })))))]
                    })
                },
                _dependencies: [w(S.getTradingAssessmentHighRiskStopLoss()), w(c.variables.isRequiredVar)]
            }))
        }
    };
i(l, "View");
var b = l,
    H = b;
export {
    H as
    default
};