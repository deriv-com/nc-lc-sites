import {
    a as b
} from "./_oschunk-E2M46UKY.js";
import {
    a as P
} from "./_oschunk-MD5SGUPG.js";
import "./_oschunk-DFHS2IVF.js";
import "./_oschunk-GEKOGHNU.js";
import "./_oschunk-SW7FWAXZ.js";
import {
    a as E
} from "./_oschunk-VDAUUIXR.js";
import {
    a as W
} from "./_oschunk-EZNN3WTJ.js";
import "./_oschunk-GCNJTPYZ.js";
import "./_oschunk-BHZNFATE.js";
import {
    b as f,
    f as w,
    g as d,
    h as O
} from "./_oschunk-WAXNMQCP.js";
import "./_oschunk-LHY3WMNC.js";
import {
    a as A,
    g as p,
    i as S
} from "./_oschunk-J7LCUWB3.js";
import "./_oschunk-ESOYZIPG.js";
import {
    a as c
} from "./_oschunk-XMOR6XCC.js";
import "./_oschunk-H7UK4VZM.js";
import "./_oschunk-JSVFHRDW.js";
import "./_oschunk-LUKJNVXR.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-44PT7RP7.js";
import {
    ia as _
} from "./_oschunk-NTQBNJ73.js";
import {
    c as i,
    g as F
} from "./_oschunk-DVBKI63I.js";
var e = F(A());
var s = _,
    y = S.PlaceholderContent,
    M = S.IteratorPlaceholderContent,
    n = class n extends p.BaseWebScreen {
        static get displayName() {
            return "FinancialAssessmentFlow.EstimatedNetWorth"
        }
        static getAttributes() {
            return {
                codeFunction: "EstimatedNetWorth",
                functionKey: "30652b7d-065b-4e1f-9d0c-71ab9a546aac",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.FinancialAssessmentFlow.EstimatedNetWorth.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [P, b]
        }
        get modelFactory() {
            return E
        }
        get controllerFactory() {
            return W
        }
        get title() {
            return p.BaseWebScreen.getTranslation("fStlMFsGH06dDHGrmlRqrA#Title", "EstimatedNetWorth")
        }
        internalRender() {
            let u = this.model,
                o = this.controller,
                t = this.idService,
                m = o.validationService,
                r = this.widgetsRecordProvider,
                C = o.callContext(),
                x = n.ifWidget,
                v = n.textWidget,
                R = n.asPrimitiveValue,
                g = n.getTranslation,
                l = this;
            return e.createElement("div", this.getRootNodeProperties(), e.createElement(P, {
                getOwnerSpan: i(function() {
                    return l.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: i(function() {
                    return l.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    HideTitle: !0,
                    Title: s.Injector.resolve(s.ServiceNames.TranslationsService).getMessage("zUfB+PlD0EWaIWHiG5AJmQ#Value.-1037113639.1", "Financial assessment")
                },
                events: {
                    _handleError: i(function(a) {
                        o.handleError(a)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: m
                },
                _idProps: {
                    service: t,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: r,
                placeholders: {
                    content: new y(function() {
                        return [e.createElement(b, {
                            getOwnerSpan: i(function() {
                                return l.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: i(function() {
                                return l.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Page: "7/8",
                                QuestionText: s.Injector.resolve(s.ServiceNames.TranslationsService).getMessage("IT3xivne7U+F_eQfmTdygA#Value.1537065287.1", "Estimated net worth"),
                                IsRequired: u.variables.isRequiredVar
                            },
                            events: {
                                _handleError: i(function(a) {
                                    o.handleError(a)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: m
                            },
                            _idProps: {
                                service: t,
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: r,
                            placeholders: {
                                content: y.Empty
                            },
                            _dependencies: []
                        }), e.createElement(w, {
                            _validationProps: {
                                validationService: m
                            },
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: !1,
                            style: "radio-group",
                            variable: u.createVariable(s.DataTypes.DataTypes.Text, c.getFinancialAssessmentEstimatedWorth(), function(a) {
                                c.setFinancialAssessmentEstimatedWorth(a)
                            }),
                            _idProps: {
                                service: t,
                                name: "RadioGroup"
                            },
                            _widgetRecordProvider: r
                        }, e.createElement(d, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: s.Injector.resolve(s.ServiceNames.TranslationsService).getMessage("4Mv13AxMhkK5TeLXAtQL3w#ValueExpression.1255149769.1", "Less than $100,000"),
                            visible: !0,
                            _idProps: {
                                service: t,
                                name: "one"
                            },
                            _widgetRecordProvider: r
                        }, v(g("GPgydZJh9kOer0artamHKQ#Value", "Less than $100,000"))), e.createElement(d, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: "$100,000 - $250,000",
                            visible: !0,
                            _idProps: {
                                service: t,
                                name: "two"
                            },
                            _widgetRecordProvider: r
                        }, "$100,000 - $250,000"), e.createElement(d, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: "$250,001 - $500,000",
                            visible: !0,
                            _idProps: {
                                service: t,
                                name: "three"
                            },
                            _widgetRecordProvider: r
                        }, "$250,001 - $500,000"), e.createElement(d, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: "$500,001 - $1,000,000",
                            visible: !0,
                            _idProps: {
                                service: t,
                                name: "four"
                            },
                            _widgetRecordProvider: r
                        }, "$500,001 - $1,000,000"), e.createElement(d, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: s.Injector.resolve(s.ServiceNames.TranslationsService).getMessage("ZWWaiqVc90KLglPgPJ96_w#ValueExpression.-800980671.1", "Over $1,000,000"),
                            visible: !0,
                            _idProps: {
                                service: t,
                                name: "five"
                            },
                            _widgetRecordProvider: r
                        }, v(g("w7kYqdnwCUqtlvqWSRCNmQ#Value", "Over $1,000,000")))), e.createElement(O, {
                            align: 0,
                            animate: !1,
                            style: "btn-container",
                            visible: !0,
                            _idProps: {
                                service: t,
                                name: "Next"
                            },
                            _widgetRecordProvider: r
                        }, e.createElement(f, {
                            enabled: !0,
                            isDefault: !1,
                            onClick: i(function() {
                                var a = C.clone();
                                o.nextOnClick$Action(o.callContext(a))
                            }, "onClick"),
                            style: "btn btn-primary",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "9"
                            },
                            _widgetRecordProvider: r
                        }, v(g("EAJHxjbCuEWILwmYrEeTgw#Value", "Next"))))]
                    })
                },
                _dependencies: [R(c.getFinancialAssessmentEstimatedWorth()), R(u.variables.isRequiredVar)]
            }))
        }
    };
i(n, "View");
var h = n,
    k = h;
export {
    k as
    default
};