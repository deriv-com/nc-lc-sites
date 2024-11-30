import {
    a as h
} from "./_oschunk-2VLLONPE.js";
import {
    a as E
} from "./_oschunk-ICZQJAYM.js";
import {
    a as A
} from "./_oschunk-G75AAOFQ.js";
import "./_oschunk-26UCIAKC.js";
import {
    a as b
} from "./_oschunk-MD5SGUPG.js";
import "./_oschunk-DFHS2IVF.js";
import "./_oschunk-GEKOGHNU.js";
import "./_oschunk-SW7FWAXZ.js";
import "./_oschunk-BHZNFATE.js";
import {
    b as C,
    f as T,
    g as v,
    h as c,
    y as m
} from "./_oschunk-WAXNMQCP.js";
import "./_oschunk-LHY3WMNC.js";
import {
    a as W,
    g as x,
    i as _
} from "./_oschunk-J7LCUWB3.js";
import "./_oschunk-ESOYZIPG.js";
import {
    a as P
} from "./_oschunk-XMOR6XCC.js";
import {
    a as S
} from "./_oschunk-H7UK4VZM.js";
import "./_oschunk-JSVFHRDW.js";
import "./_oschunk-LUKJNVXR.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-44PT7RP7.js";
import {
    ia as w
} from "./_oschunk-NTQBNJ73.js";
import {
    c as s,
    g as V
} from "./_oschunk-DVBKI63I.js";
var t = V(W());
var u = w,
    F = _.PlaceholderContent,
    N = _.IteratorPlaceholderContent,
    a = class a extends x.BaseWebScreen {
        static get displayName() {
            return "TradingAssessmentFlow.Leverage"
        }
        static getAttributes() {
            return {
                codeFunction: "Leverage",
                functionKey: "0bf8e736-2eb4-452b-93ee-c11241eac7b0",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.TradingAssessmentFlow.Leverage.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [b, h]
        }
        get modelFactory() {
            return E
        }
        get controllerFactory() {
            return A
        }
        get title() {
            let o = this.model,
                i = this.controller,
                e = this.idService,
                p = i.validationService,
                r = i.callContext(),
                g = a.asPrimitiveValue,
                R = a.getTranslation,
                n = this;
            return "Leverage"
        }
        internalRender() {
            let o = this.model,
                i = this.controller,
                e = this.idService,
                p = i.validationService,
                r = this.widgetsRecordProvider,
                g = i.callContext(),
                R = a.ifWidget,
                n = a.textWidget,
                O = a.asPrimitiveValue,
                d = a.getTranslation,
                f = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(b, {
                getOwnerSpan: s(function() {
                    return f.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return f.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    HideTitle: o.getCachedValue(e.getId("cnAVbFF12EKklv+q7HBE9w.HideTitle"), function() {
                        return S.isPhone$Action(g).isPhoneOut
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
                    content: new F(function() {
                        return [t.createElement(c, {
                            align: 0,
                            animate: !1,
                            style: o.getCachedValue(e.getId("iFDzXtxJDk+97ATtYrmAqQ.Style"), function() {
                                return "display-flex flex-direction-column " + (S.isPhone$Action(g).isPhoneOut ? "gap-base" : "gap-m")
                            }),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "1"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(h, {
                            getOwnerSpan: s(function() {
                                return f.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: s(function() {
                                return f.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Step: "8"
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
                        }), t.createElement(c, {
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
                            text: ["8/10"],
                            _idProps: {
                                service: e,
                                uuid: "4"
                            },
                            _widgetRecordProvider: r
                        })), t.createElement(c, {
                            align: 0,
                            animate: !1,
                            style: o.getCachedValue(e.getId("7DB1MB2q9UaVSxdHxnFi8A.Style"), function() {
                                return "display-flex flex-direction-column " + (S.isPhone$Action(g).isPhoneOut ? "gap-base" : "gap-m")
                            }),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "5"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(c, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "6"
                            },
                            _widgetRecordProvider: r
                        }, R(o.variables.isRequiredVar, !1, this, function() {
                            return [t.createElement(m, {
                                style: "text-error display-block",
                                text: [n(d("LlGpN5BErU+64X8izT4Oyw#Value", "* This is required."))],
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
                            text: [n(d("sWhRbnuKeU6eX9h5BY00yg#Value", "How does leverage affect CFD trading?"))],
                            _idProps: {
                                service: e,
                                uuid: "8"
                            },
                            _widgetRecordProvider: r
                        })), t.createElement(c, {
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
                            variable: o.createVariable(u.DataTypes.DataTypes.Text, P.getTradingAssessmentLeverageImpactTrading(), function(l) {
                                P.setTradingAssessmentLeverageImpactTrading(l)
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
                            value: u.Injector.resolve(u.ServiceNames.TranslationsService).getMessage("euVQnZVMYkiFuKozGuOUwg#ValueExpression.2039099030.1", "Leverage is a risk mitigation technique"),
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "A"
                            },
                            _widgetRecordProvider: r
                        }, n(d("jA9mMI6fZ0qL_P55O7VGPQ#Value", "Helps to mitigate risk."))), t.createElement(v, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: u.Injector.resolve(u.ServiceNames.TranslationsService).getMessage("Fz62EcKT0Ua9IFMlATOKhw#ValueExpression.436248236.1", "Leverage prevents you from opening large positions."),
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "B"
                            },
                            _widgetRecordProvider: r
                        }, n(d("MHBVR2J56kSD7KvgwmEwPQ#Value", "Prevents you from opening large positions."))), t.createElement(v, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: "Leverage guarantees profits.",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "C"
                            },
                            _widgetRecordProvider: r
                        }, n(d("nbXlysz+g0+O3qNW4+sAmA#Value", "Guarantees profits."))), t.createElement(v, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: u.Injector.resolve(u.ServiceNames.TranslationsService).getMessage("Ddgn+YdEHEKpWyIo0M5ekA#ValueExpression.1444621412.1", "Leverage lets you open larger positions for a fraction of the trade's value."),
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "D"
                            },
                            _widgetRecordProvider: r
                        }, n(d("zA+_iA7I20StyqPr39clOQ#Value", "Lets you open large positions for a fraction of trade value, which may result in increased profit or loss."))))), t.createElement(c, {
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
                            extendedProperties: {
                                style: 'font-family: "Roboto", sans-serif; font-weight: 500;'
                            },
                            style: "roboto-medium",
                            text: [n(d("bylZ1GiF2UOheK_Ui_6n1A#Value", "Next"))],
                            _idProps: {
                                service: e,
                                uuid: "17"
                            },
                            _widgetRecordProvider: r
                        })))))]
                    })
                },
                _dependencies: [O(P.getTradingAssessmentLeverageImpactTrading()), O(o.variables.isRequiredVar)]
            }))
        }
    };
s(a, "View");
var y = a,
    z = y;
export {
    z as
    default
};