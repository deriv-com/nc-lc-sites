import {
    a as b
} from "./_oschunk-GIRVNG7K.js";
import {
    a as P
} from "./_oschunk-PON5R23U.js";
import "./_oschunk-KIZC2IWB.js";
import "./_oschunk-U5BVDMC7.js";
import "./_oschunk-GRCLOXGJ.js";
import {
    a as h
} from "./_oschunk-X3RQCUMU.js";
import {
    a as W
} from "./_oschunk-KVIU62OT.js";
import "./_oschunk-EX4MYIQ3.js";
import "./_oschunk-VWJXDAKN.js";
import {
    b as f,
    f as w,
    g as n,
    h as E
} from "./_oschunk-E7JQAU4J.js";
import "./_oschunk-5N5TJ3ES.js";
import {
    a as F,
    g as p,
    i as S
} from "./_oschunk-T77XORCW.js";
import "./_oschunk-2TPJE4AL.js";
import {
    a as v
} from "./_oschunk-VADNKVBQ.js";
import "./_oschunk-OOUVJ7PM.js";
import "./_oschunk-ZKKCTARK.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-KG7LSUIA.js";
import {
    ia as R
} from "./_oschunk-5EPHB76O.js";
import {
    c as o,
    g as C
} from "./_oschunk-DVBKI63I.js";
var r = C(F());
var e = R,
    V = S.PlaceholderContent,
    K = S.IteratorPlaceholderContent,
    c = class c extends p.BaseWebScreen {
        static get displayName() {
            return "FinancialAssessmentFlow.Occupation"
        }
        static getAttributes() {
            return {
                codeFunction: "Occupation",
                functionKey: "3e17e8dd-3ad2-429e-97ce-2a7c6edcad28",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.FinancialAssessmentFlow.Occupation.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [P, b]
        }
        get modelFactory() {
            return h
        }
        get controllerFactory() {
            return W
        }
        get title() {
            return p.BaseWebScreen.getTranslation("3egXPtI6nkKXzip8btytKA#Title", "Occupation")
        }
        internalRender() {
            let g = this.model,
                d = this.controller,
                t = this.idService,
                m = d.validationService,
                s = this.widgetsRecordProvider,
                y = d.callContext(),
                M = c.ifWidget,
                a = c.textWidget,
                _ = c.asPrimitiveValue,
                i = c.getTranslation,
                u = this;
            return r.createElement("div", this.getRootNodeProperties(), r.createElement(P, {
                getOwnerSpan: o(function() {
                    return u.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return u.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Title: e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("qJuuoH22FUK6hYeSZtmaTA#Value.-1037113639.1", "Financial assessment"),
                    HideTitle: !0
                },
                events: {
                    _handleError: o(function(l) {
                        d.handleError(l)
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
                _widgetRecordProvider: s,
                placeholders: {
                    content: new V(function() {
                        return [r.createElement(b, {
                            getOwnerSpan: o(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                QuestionText: e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("umFbG8lRakW1bfYruL1mTA#Value.-686144149.1", "Occupation"),
                                IsRequired: g.variables.isRequiredVar,
                                Page: "3/8"
                            },
                            events: {
                                _handleError: o(function(l) {
                                    d.handleError(l)
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
                            _widgetRecordProvider: s,
                            placeholders: {
                                content: V.Empty
                            },
                            _dependencies: []
                        }), r.createElement(w, {
                            _validationProps: {
                                validationService: m
                            },
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: !1,
                            style: "radio-group",
                            variable: g.createVariable(e.DataTypes.DataTypes.Text, v.getFinancialAssessmentOccupation(), function(l) {
                                v.setFinancialAssessmentOccupation(l)
                            }),
                            _idProps: {
                                service: t,
                                name: "RadioGroup"
                            },
                            _widgetRecordProvider: s
                        }, r.createElement(n, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("MPU4KcxWwUWOaBZEwBde2g#ValueExpression.1295324946.1", "Chief Executives, Senior Officials and Legislators"),
                            visible: !0,
                            _idProps: {
                                service: t,
                                name: "ChiefExecutives_SeniorOfficialsandLegislators"
                            },
                            _widgetRecordProvider: s
                        }, a(i("DVJGg++CDkWLbY+pmy3xBA#Value", "Chief Executives, Senior Officials, and Legislators"))), r.createElement(n, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("x7gMJtanzU+U+zp+2Z6LLw#ValueExpression.187910790.1", "Managers"),
                            visible: !0,
                            _idProps: {
                                service: t,
                                name: "Managers"
                            },
                            _widgetRecordProvider: s
                        }, a(i("7DwW9aZMvUOU8pISmoW0wg#Value", "Managers"))), r.createElement(n, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("jJbgBW_KN0ODWNhglSPS8A#ValueExpression.-2138417396.1", "Professionals"),
                            visible: !0,
                            _idProps: {
                                service: t,
                                name: "Professionals"
                            },
                            _widgetRecordProvider: s
                        }, a(i("vkqABEWCnUGO9EoZJ_fPbg#Value", "Professionals"))), r.createElement(n, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("_pY3iXmhMEOrGoqiJHJooQ#ValueExpression.2021015262.1", "Clerks"),
                            visible: !0,
                            _idProps: {
                                service: t,
                                name: "Clerks"
                            },
                            _widgetRecordProvider: s
                        }, a(i("urr35ZqclEmHYKmGVcgKgg#Value", "Clerks"))), r.createElement(n, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("1q+rz3iKKU6uo2ZBkJ8_8g#ValueExpression.-99103224.1", "Personal Care, Sales and Service Workers"),
                            visible: !0,
                            _idProps: {
                                service: t,
                                name: "PersonalCare_SalesandServiceWorkers"
                            },
                            _widgetRecordProvider: s
                        }, a(i("av66OhTNwE+dhf5rTNzn8Q#Value", "Personal Care, Sales and Service Workers"))), r.createElement(n, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("i3JqnYazuUO3pvYAP1c5WA#ValueExpression.-588716937.1", "Agricultural, Forestry and Fishery Workers"),
                            visible: !0,
                            _idProps: {
                                service: t,
                                name: "Agricultural_ForestryandFisheryWorkers"
                            },
                            _widgetRecordProvider: s
                        }, a(i("VIRnVeju1EKNfINA52Hn8w#Value", "Agricultural, Forestry and Fishery Workers"))), r.createElement(n, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("LZ94wAbymEOwhWwDX8TlBw#ValueExpression.-781449230.1", "Craft, Metal, Electrical and Electronics Workers"),
                            visible: !0,
                            _idProps: {
                                service: t,
                                name: "Craft_Metal_ElectricalandElectronicsWorkers"
                            },
                            _widgetRecordProvider: s
                        }, a(i("tnRnbC1hz02UcQBzOqRa0g#Value", "Craft, Metal, Electrical and Electronics Workers"))), r.createElement(n, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("33xSMSq3YUu5V9u1PBBeMg#ValueExpression.785910116.1", "Plant and Machine Operators and Assemblers"),
                            visible: !0,
                            _idProps: {
                                service: t,
                                name: "PlantandMachineOperatorsandAssemblers"
                            },
                            _widgetRecordProvider: s
                        }, a(i("Kex_HKsPu0+YRRDlKjRlRA#Value", "Plant and Machine Operators and Assemblers"))), r.createElement(n, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("t_p6VTc67Uq6XZpGP_Rjog#ValueExpression.1838291993.1", "Cleaners and Helpers"),
                            visible: !0,
                            _idProps: {
                                service: t,
                                name: "CleanersandHelpers"
                            },
                            _widgetRecordProvider: s
                        }, a(i("MeBxIUv7dESKhBOZwSWryw#Value", "Cleaners and Helpers"))), r.createElement(n, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("_aIZ5NhUDUuLfAM8v13KWg#ValueExpression.242449738.1", "Mining, Construction, Manufacturing and Transport Workers"),
                            visible: !0,
                            _idProps: {
                                service: t,
                                name: "Mining_Construction_ManufacturingandTransportWorke"
                            },
                            _widgetRecordProvider: s
                        }, a(i("oslluAahi0624H7gFKizSQ#Value", "Mining, Construction, Manufacturing and Transport Workers"))), r.createElement(n, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("IOMPv3wLME2wPw9YjU5OgQ#ValueExpression.1924741869.1", "Armed Forces"),
                            visible: !0,
                            _idProps: {
                                service: t,
                                name: "ArmedForces"
                            },
                            _widgetRecordProvider: s
                        }, a(i("j0314EfT_UWJHbz23nIqcg#Value", "Armed Forces"))), r.createElement(n, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("kJQqn0iak0SPxtHSiDTcnA#ValueExpression.1940662712.1", "Students"),
                            visible: !0,
                            _idProps: {
                                service: t,
                                name: "Students"
                            },
                            _widgetRecordProvider: s
                        }, a(i("PKUyJe5Uh0i4qWlcQ+Wyqw#Value", "Students"))), r.createElement(n, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("u7D30+LIok6_MtWkXpvwNA#ValueExpression.613670732.1", "Government Officers"),
                            visible: !0,
                            _idProps: {
                                service: t,
                                name: "GovernmentOfficers"
                            },
                            _widgetRecordProvider: s
                        }, a(i("adpwBkrnJU261chE+_jKwA#Value", "Government Officers")))), r.createElement(E, {
                            align: 0,
                            animate: !1,
                            style: "btn-container",
                            visible: !0,
                            _idProps: {
                                service: t,
                                name: "Next"
                            },
                            _widgetRecordProvider: s
                        }, r.createElement(f, {
                            enabled: !0,
                            isDefault: !1,
                            onClick: o(function() {
                                var l = y.clone();
                                d.nextOnClick$Action(d.callContext(l))
                            }, "onClick"),
                            style: "btn btn-primary",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "17"
                            },
                            _widgetRecordProvider: s
                        }, a(i("KJ+kU9bPDUq1HeQmhxG7oA#Value", "Next"))))]
                    })
                },
                _dependencies: [_(v.getFinancialAssessmentOccupation()), _(g.variables.isRequiredVar)]
            }))
        }
    };
o(c, "View");
var O = c,
    q = O;
export {
    q as
    default
};