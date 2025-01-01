import {
    a as y
} from "./_oschunk-NE3W7ZYH.js";
import {
    a as E
} from "./_oschunk-GD4NBFGJ.js";
import {
    a as P
} from "./_oschunk-JULUQG2C.js";
import {
    a as b
} from "./_oschunk-367MCH7Z.js";
import "./_oschunk-V52U2IZU.js";
import "./_oschunk-MOYCBUII.js";
import "./_oschunk-NYD6CGWS.js";
import "./_oschunk-7DRW2JCW.js";
import "./_oschunk-EROCOLS7.js";
import {
    b as w,
    f as O,
    g as d,
    h as f
} from "./_oschunk-42NACYKQ.js";
import "./_oschunk-2M7PXTSQ.js";
import {
    a as C,
    g as p,
    i as S
} from "./_oschunk-RKYF3TWC.js";
import "./_oschunk-K7AFM7ZW.js";
import {
    a as v
} from "./_oschunk-DOFMR6EA.js";
import "./_oschunk-2ZI4JQLD.js";
import "./_oschunk-IKZJT3AP.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-MSUVGI3L.js";
import {
    ia as h
} from "./_oschunk-2JKANR6M.js";
import {
    c as i,
    g as V
} from "./_oschunk-DVBKI63I.js";
var t = V(C());
var e = h,
    A = S.PlaceholderContent,
    j = S.IteratorPlaceholderContent,
    a = class a extends p.BaseWebScreen {
        static get displayName() {
            return "FinancialAssessmentFlow.AccountTurnover"
        }
        static getAttributes() {
            return {
                codeFunction: "AccountTurnover",
                functionKey: "89f83a57-3720-473b-b2a4-3d31ed2bec99",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.FinancialAssessmentFlow.AccountTurnover.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [b, P]
        }
        get modelFactory() {
            return y
        }
        get controllerFactory() {
            return E
        }
        get title() {
            return p.BaseWebScreen.getTranslation("Vzr4iSA3O0eypD0x7SvsmQ#Title", "AccountTurnover")
        }
        internalRender() {
            let m = this.model,
                o = this.controller,
                r = this.idService,
                g = o.validationService,
                s = this.widgetsRecordProvider,
                T = o.callContext(),
                F = a.ifWidget,
                c = a.textWidget,
                R = a.asPrimitiveValue,
                l = a.getTranslation,
                u = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(b, {
                getOwnerSpan: i(function() {
                    return u.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: i(function() {
                    return u.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Title: "Financial assessment",
                    HideTitle: !0
                },
                events: {
                    _handleError: i(function(n) {
                        o.handleError(n)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: g
                },
                _idProps: {
                    service: r,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: s,
                placeholders: {
                    content: new A(function() {
                        return [t.createElement(P, {
                            getOwnerSpan: i(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: i(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                QuestionText: e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("VUTCDk9oNkCGA+tLGZurmA#Value.1481027052.1", "Anticipated annual turnover"),
                                Page: "8/8",
                                IsRequired: m.variables.isRequiredVar
                            },
                            events: {
                                _handleError: i(function(n) {
                                    o.handleError(n)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: g
                            },
                            _idProps: {
                                service: r,
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: s,
                            placeholders: {
                                content: A.Empty
                            },
                            _dependencies: []
                        }), t.createElement(O, {
                            _validationProps: {
                                validationService: g
                            },
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: !1,
                            style: "radio-group",
                            variable: m.createVariable(e.DataTypes.DataTypes.Text, v.getFinancialAssessmentAccountTurnover(), function(n) {
                                v.setFinancialAssessmentAccountTurnover(n)
                            }),
                            _idProps: {
                                service: r,
                                name: "RadioGroup"
                            },
                            _widgetRecordProvider: s
                        }, t.createElement(d, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("e1cVbSV_5EW3YBjm+rX_pA#ValueExpression.-1727495181.1", "Less than $25,000"),
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "A"
                            },
                            _widgetRecordProvider: s
                        }, c(l("qgFODo3t_U2waHQP_pycSQ#Value", "Less than $25,000"))), t.createElement(d, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("KHwSsm7Jmk6QY6nuygLoKg#ValueExpression.1251182171.1", "$25,000 - $50,000"),
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "B"
                            },
                            _widgetRecordProvider: s
                        }, c(l("vbhsiTK4yEyu7hl5Jynonw#Value", "$25,000 - $50,000"))), t.createElement(d, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("UgZmpvYqdkWyfREw+d+rJw#ValueExpression.-967782720.1", "$50,001 - $100,000"),
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "C"
                            },
                            _widgetRecordProvider: s
                        }, c(l("B5EaKv6hNEymZoXk4vJrlQ#Value", "$50,001 - $100,000"))), t.createElement(d, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("c0Q+8T2QiEG5JHLSxEH5Eg#ValueExpression.-302604170.1", "$100,001 - $500,000"),
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "D"
                            },
                            _widgetRecordProvider: s
                        }, c(l("iBj2mSaesEmIVq5Xg+ivow#Value", "$100,001 - $500,000"))), t.createElement(d, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("dl9gUifZY0ik3nvpEhX4WQ#ValueExpression.432297473.1", "Over $500,000"),
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "E"
                            },
                            _widgetRecordProvider: s
                        }, c(l("ba04TswW9kiyTDGHI3vgrA#Value", "Over $500,000")))), t.createElement(f, {
                            align: 0,
                            animate: !1,
                            style: "btn-container",
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "Next"
                            },
                            _widgetRecordProvider: s
                        }, t.createElement(w, {
                            enabled: !0,
                            isDefault: !1,
                            onClick: i(function() {
                                var n = T.clone();
                                o.nextOnClick$Action(o.callContext(n))
                            }, "onClick"),
                            style: "btn btn-primary",
                            visible: !0,
                            _idProps: {
                                service: r,
                                uuid: "9"
                            },
                            _widgetRecordProvider: s
                        }, c(l("NJIlEu9RxEGebO8Dg0yMvA#Value", "Next"))))]
                    })
                },
                _dependencies: [R(v.getFinancialAssessmentAccountTurnover()), R(m.variables.isRequiredVar)]
            }))
        }
    };
i(a, "View");
var _ = a,
    M = _;
export {
    M as
    default
};