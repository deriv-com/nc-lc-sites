import {
    a as E
} from "./_oschunk-AI7WEO6E.js";
import {
    a as O
} from "./_oschunk-4HCJCSM7.js";
import {
    a as _
} from "./_oschunk-E2M46UKY.js";
import {
    a as P
} from "./_oschunk-MD5SGUPG.js";
import "./_oschunk-DFHS2IVF.js";
import "./_oschunk-GEKOGHNU.js";
import "./_oschunk-SW7FWAXZ.js";
import "./_oschunk-GCNJTPYZ.js";
import "./_oschunk-BHZNFATE.js";
import {
    b as w,
    f as R,
    g as v,
    h as y
} from "./_oschunk-WAXNMQCP.js";
import "./_oschunk-LHY3WMNC.js";
import {
    a as x,
    g as p,
    i as S
} from "./_oschunk-J7LCUWB3.js";
import "./_oschunk-ESOYZIPG.js";
import {
    a as u
} from "./_oschunk-XMOR6XCC.js";
import "./_oschunk-H7UK4VZM.js";
import "./_oschunk-JSVFHRDW.js";
import "./_oschunk-LUKJNVXR.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-44PT7RP7.js";
import {
    ia as h
} from "./_oschunk-NTQBNJ73.js";
import {
    c as r,
    g as T
} from "./_oschunk-DVBKI63I.js";
var t = T(x());
var e = h,
    C = S.PlaceholderContent,
    M = S.IteratorPlaceholderContent,
    n = class n extends p.BaseWebScreen {
        static get displayName() {
            return "FinancialAssessmentFlow.EducationLevel"
        }
        static getAttributes() {
            return {
                codeFunction: "EducationLevel",
                functionKey: "85bf6205-6cd3-45d0-8e39-821fadee03df",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.FinancialAssessmentFlow.EducationLevel.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [P, _]
        }
        get modelFactory() {
            return E
        }
        get controllerFactory() {
            return O
        }
        get title() {
            return p.BaseWebScreen.getTranslation("BWK_hdNs0EWOOYIfre4D3w#Title", "EducationLevel")
        }
        internalRender() {
            let m = this.model,
                o = this.controller,
                i = this.idService,
                g = o.validationService,
                s = this.widgetsRecordProvider,
                F = o.callContext(),
                V = n.ifWidget,
                c = n.textWidget,
                f = n.asPrimitiveValue,
                l = n.getTranslation,
                d = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(P, {
                getOwnerSpan: r(function() {
                    return d.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: r(function() {
                    return d.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    HideTitle: !0,
                    Title: e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("LDl5uZXm2UORT33KrZhjTQ#Value.-1037113639.1", "Financial assessment")
                },
                events: {
                    _handleError: r(function(a) {
                        o.handleError(a)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: g
                },
                _idProps: {
                    service: i,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: s,
                placeholders: {
                    content: new C(function() {
                        return [t.createElement(_, {
                            getOwnerSpan: r(function() {
                                return d.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: r(function() {
                                return d.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                IsRequired: m.variables.isRequiredVar,
                                Page: "5/8",
                                QuestionText: e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("Gv82hUT5akymCrtr7JhT3g#Value.1554542828.1", "Education level")
                            },
                            events: {
                                _handleError: r(function(a) {
                                    o.handleError(a)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: g
                            },
                            _idProps: {
                                service: i,
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: s,
                            placeholders: {
                                content: C.Empty
                            },
                            _dependencies: []
                        }), t.createElement(R, {
                            _validationProps: {
                                validationService: g
                            },
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: !1,
                            style: "radio-group",
                            variable: m.createVariable(e.DataTypes.DataTypes.Text, u.getFinancialAssessmentEducationLevel(), function(a) {
                                u.setFinancialAssessmentEducationLevel(a)
                            }),
                            _idProps: {
                                service: i,
                                name: "RadioGroup"
                            },
                            _widgetRecordProvider: s
                        }, t.createElement(v, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("SfPCrC6BBESjn0JNX+NxqQ#ValueExpression.1349887458.1", "Primary"),
                            visible: !0,
                            _idProps: {
                                service: i,
                                name: "Primary"
                            },
                            _widgetRecordProvider: s
                        }, c(l("TwhUsFd86EaipsowdizWQw#Value", "Primary"))), t.createElement(v, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("n_oQxDML0UyX0__YnJRP8w#ValueExpression.1186369876.1", "Secondary"),
                            visible: !0,
                            _idProps: {
                                service: i,
                                name: "Secondary"
                            },
                            _widgetRecordProvider: s
                        }, c(l("rcbXLgkzgEmNzl6az1_BUQ#Value", "Secondary"))), t.createElement(v, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("SBJkW4PnPU2MF6kEBRWUNw#ValueExpression.-1110152078.1", "Tertiary"),
                            visible: !0,
                            _idProps: {
                                service: i,
                                name: "Tertiary"
                            },
                            _widgetRecordProvider: s
                        }, c(l("8xUgFwxfdkqCMXbKV_16+Q#Value", "Tertiary")))), t.createElement(y, {
                            align: 0,
                            animate: !1,
                            style: "btn-container",
                            visible: !0,
                            _idProps: {
                                service: i,
                                name: "Next"
                            },
                            _widgetRecordProvider: s
                        }, t.createElement(w, {
                            enabled: !0,
                            isDefault: !1,
                            onClick: r(function() {
                                var a = F.clone();
                                o.nextOnClick$Action(o.callContext(a))
                            }, "onClick"),
                            style: "btn btn-primary",
                            visible: !0,
                            _idProps: {
                                service: i,
                                uuid: "7"
                            },
                            _widgetRecordProvider: s
                        }, c(l("0lF+pn17ZkOJDe__I1LhLQ#Value", "Next"))))]
                    })
                },
                _dependencies: [f(u.getFinancialAssessmentEducationLevel()), f(m.variables.isRequiredVar)]
            }))
        }
    };
r(n, "View");
var b = n,
    Q = b;
export {
    Q as
    default
};