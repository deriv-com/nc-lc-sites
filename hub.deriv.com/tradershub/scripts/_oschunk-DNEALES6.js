import {
    a as x
} from "./_oschunk-XPY4557L.js";
import {
    a as T
} from "./_oschunk-7UXJON47.js";
import {
    a as _
} from "./_oschunk-PFCE5QNP.js";
import "./_oschunk-TOVPNB4I.js";
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
    i as y
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
    ia as w
} from "./_oschunk-NTQBNJ73.js";
import {
    c as i,
    g as A
} from "./_oschunk-DVBKI63I.js";
var t = A(E());
var q = w,
    k = y.PlaceholderContent,
    L = y.IteratorPlaceholderContent,
    d = class d extends h.BaseWebScreen {
        static get displayName() {
            return "TradingAssessmentFlow.TradingAssessmentStepNine"
        }
        static getAttributes() {
            return {
                codeFunction: "TradingAssessmentStepNine",
                functionKey: "5ba2fdf4-56c8-4732-a281-b699e72950bc",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.TradingAssessmentFlow.TradingAssessmentStepNine.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [S, _]
        }
        get modelFactory() {
            return x
        }
        get controllerFactory() {
            return T
        }
        get title() {
            return h.BaseWebScreen.getTranslation("9P2iW8hWMkeigbaZ5ylQvA#Title", "TradingAssessmentStepNine")
        }
        internalRender() {
            let l = this.model,
                c = this.controller,
                e = this.idService,
                P = c.validationService,
                r = this.widgetsRecordProvider,
                g = c.callContext(),
                W = d.ifWidget,
                s = d.textWidget,
                R = d.asPrimitiveValue,
                a = d.getTranslation,
                p = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(S, {
                getOwnerSpan: i(function() {
                    return p.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: i(function() {
                    return p.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    HideTitle: l.getCachedValue(e.getId("9sqRcQOtBUiPn6y2wXzSnQ.HideTitle"), function() {
                        return f.isPhone$Action(g).isPhoneOut
                    }),
                    Title: "Trading Assesment"
                },
                events: {
                    _handleError: i(function(n) {
                        c.handleError(n)
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
                    content: new k(function() {
                        return [t.createElement(o, {
                            align: 0,
                            animate: !1,
                            style: l.getCachedValue(e.getId("ZdNsv1ZO6kWI1OhbDzX6rw.Style"), function() {
                                return "display-flex flex-direction-column " + (f.isPhone$Action(g).isPhoneOut ? "gap-base" : "gap-m")
                            }),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "1"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(_, {
                            getOwnerSpan: i(function() {
                                return p.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: i(function() {
                                return p.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Step: "9"
                            },
                            events: {
                                _handleError: i(function(n) {
                                    c.handleError(n)
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
                            text: ["9/10"],
                            _idProps: {
                                service: e,
                                uuid: "4"
                            },
                            _widgetRecordProvider: r
                        })), t.createElement(o, {
                            align: 0,
                            animate: !1,
                            style: l.getCachedValue(e.getId("rjZ_F__PtEOhRQ9qaiEG1A.Style"), function() {
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
                        }, W(l.variables.isRequiredVar, !1, this, function() {
                            return [t.createElement(m, {
                                style: "text-error display-block",
                                text: [s(a("Fun9OLd4NEOB_6Swxqtppg#Value", "* This is required."))],
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
                            text: [s(a("lIDTnAWQhEiGOHfJ6Uj8XQ#Value", "Leverage trading is high-risk, so it\u2019s a good idea to use risk management features such as stop loss. Stop loss allows you to: "))],
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
                            variable: l.createVariable(q.DataTypes.DataTypes.Text, v.getRiskManagement(), function(n) {
                                v.setRiskManagement(n)
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
                            value: "Cancel your trade at any time within a specified timeframe.",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "A"
                            },
                            _widgetRecordProvider: r
                        }, s(a("ZQ9Na4t30kWoQBj66ezbaw#Value", "Cancel your trade at any time within a specified timeframe."))), t.createElement(u, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: "Close your trade automatically when the loss is equal to or more than a specified amount, as long as there is adequate market liquidity.",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "B"
                            },
                            _widgetRecordProvider: r
                        }, s(a("k_rqwowylUiKGTwa9TdX4A#Value", "Close your trade automatically when the loss is equal to or more than a specified amount, as long as there is adequate market liquidity."))), t.createElement(u, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: "Close your trade automatically when the profit is equal to or more than a specified amount, as long as there is adequate market liquidity.",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "C"
                            },
                            _widgetRecordProvider: r
                        }, s(a("3ajtRoM6e0eDIDOxf0pe5w#Value", "Close your trade automatically when the profit is equal to or more than a specified amount, as long as there is adequate market liquidity."))), t.createElement(u, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: "Make a guaranteed profit on your trade.",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "D"
                            },
                            _widgetRecordProvider: r
                        }, s(a("qgLWumCBI0Wo6ilynXrMRA#Value", "Make a guaranteed profit on your trade."))))), t.createElement(o, {
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
                                var n = g.clone();
                                c.nextOnClick$Action(c.callContext(n))
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
                            text: [s(a("fOqnLCbG6UqdbCnzWq7tCA#Value", "Next"))],
                            _idProps: {
                                service: e,
                                uuid: "17"
                            },
                            _widgetRecordProvider: r
                        })))))]
                    })
                },
                _dependencies: [R(v.getRiskManagement()), R(l.variables.isRequiredVar)]
            }))
        }
    };
i(d, "View");
var b = d,
    $ = b;
export {
    $ as
    default
};