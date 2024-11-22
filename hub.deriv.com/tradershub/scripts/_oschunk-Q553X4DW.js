import {
    a as S
} from "./_oschunk-4NZKJYN3.js";
import {
    a as b
} from "./_oschunk-MDM6SINN.js";
import "./_oschunk-Z3EGUX6T.js";
import "./_oschunk-NJYKWZYU.js";
import "./_oschunk-SW7FWAXZ.js";
import {
    a as h
} from "./_oschunk-YVODYVXN.js";
import {
    a as F
} from "./_oschunk-XEZPTGD7.js";
import "./_oschunk-B7RGCJGD.js";
import "./_oschunk-BHZNFATE.js";
import {
    b as f,
    f as C,
    g as s,
    h as w
} from "./_oschunk-HUOHOHZB.js";
import "./_oschunk-Y45M2O2K.js";
import {
    a as k,
    g as m,
    i as P
} from "./_oschunk-6LASTRK7.js";
import "./_oschunk-TIJZDWYD.js";
import {
    a as c
} from "./_oschunk-27GDEXUT.js";
import "./_oschunk-D2MH3QEK.js";
import "./_oschunk-WJ75ZXAT.js";
import "./_oschunk-3WNR72F6.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-HQOLQB4T.js";
import {
    ia as R
} from "./_oschunk-NTQBNJ73.js";
import {
    c as n,
    g as E
} from "./_oschunk-DVBKI63I.js";
var e = E(k());
var W = R,
    y = P.PlaceholderContent,
    N = P.IteratorPlaceholderContent,
    d = class d extends m.BaseWebScreen {
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
            return [b, S]
        }
        get modelFactory() {
            return h
        }
        get controllerFactory() {
            return F
        }
        get title() {
            return m.BaseWebScreen.getTranslation("3egXPtI6nkKXzip8btytKA#Title", "Occupation")
        }
        internalRender() {
            let v = this.model,
                l = this.controller,
                t = this.idService,
                g = l.validationService,
                r = this.widgetsRecordProvider,
                _ = l.callContext(),
                V = d.ifWidget,
                i = d.textWidget,
                p = d.asPrimitiveValue,
                a = d.getTranslation,
                u = this;
            return e.createElement("div", this.getRootNodeProperties(), e.createElement(b, {
                getOwnerSpan: n(function() {
                    return u.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: n(function() {
                    return u.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Title: "Financial assessment",
                    HideTitle: !0
                },
                events: {
                    _handleError: n(function(o) {
                        l.handleError(o)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: g
                },
                _idProps: {
                    service: t,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: r,
                placeholders: {
                    content: new y(function() {
                        return [e.createElement(S, {
                            getOwnerSpan: n(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                QuestionText: "Occupation",
                                IsRequired: v.variables.isRequiredVar,
                                Page: "3/8"
                            },
                            events: {
                                _handleError: n(function(o) {
                                    l.handleError(o)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: g
                            },
                            _idProps: {
                                service: t,
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: r,
                            placeholders: {
                                content: new y(function() {
                                    return [e.createElement(C, {
                                        _validationProps: {
                                            validationService: g
                                        },
                                        enabled: !0,
                                        extendedEvents: {
                                            onClick: n(function() {
                                                var o = _.clone();
                                                l.nextOnClick$Action(l.callContext(o))
                                            }, "onClick")
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        mandatory: !1,
                                        style: "radio-group",
                                        variable: v.createVariable(W.DataTypes.DataTypes.Text, c.getFinancialAssessmentOccupation(), function(o) {
                                            c.setFinancialAssessmentOccupation(o)
                                        }),
                                        _idProps: {
                                            service: t,
                                            name: "RadioGroup"
                                        },
                                        _widgetRecordProvider: r
                                    }, e.createElement(s, {
                                        enabled: !0,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "radio-button",
                                        value: "Chief Executives, Senior Officials and Legislators",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "ChiefExecutives_SeniorOfficialsandLegislators"
                                        },
                                        _widgetRecordProvider: r
                                    }, i(a("Fcf3VdGnIUuCVSQx27Eumg#Value", "Chief Executives, Senior Officials, and Legislators"))), e.createElement(s, {
                                        enabled: !0,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "radio-button",
                                        value: "Managers",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "Managers"
                                        },
                                        _widgetRecordProvider: r
                                    }, i(a("gc0aeYH1OUuvG0MsFJ7XnQ#Value", "Managers"))), e.createElement(s, {
                                        enabled: !0,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "radio-button",
                                        value: "Professionals",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "Professionals"
                                        },
                                        _widgetRecordProvider: r
                                    }, i(a("kNCjwfeMtkaZ23bg0ZoEhw#Value", "Professionals"))), e.createElement(s, {
                                        enabled: !0,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "radio-button",
                                        value: "Clerks",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "Clerks"
                                        },
                                        _widgetRecordProvider: r
                                    }, i(a("DZvYVsxP00W2wpvBwQ5y5A#Value", "Clerks"))), e.createElement(s, {
                                        enabled: !0,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "radio-button",
                                        value: "Personal Care, Sales and Service Workers",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "PersonalCare_SalesandServiceWorkers"
                                        },
                                        _widgetRecordProvider: r
                                    }, i(a("Ert2K_areUyrLSzCPdowJQ#Value", "Personal Care, Sales and Service Workers"))), e.createElement(s, {
                                        enabled: !0,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "radio-button",
                                        value: "Agricultural, Forestry and Fishery Workers",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "Agricultural_ForestryandFisheryWorkers"
                                        },
                                        _widgetRecordProvider: r
                                    }, i(a("2nlqzhx2UE+5bYGEpX_1Jg#Value", "Agricultural, Forestry and Fishery Workers"))), e.createElement(s, {
                                        enabled: !0,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "radio-button",
                                        value: "Craft, Metal, Electrical and Electronics Workers",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "Craft_Metal_ElectricalandElectronicsWorkers"
                                        },
                                        _widgetRecordProvider: r
                                    }, i(a("kn9OUs6VxkyRoA8budlF6w#Value", "Craft, Metal, Electrical and Electronics Workers"))), e.createElement(s, {
                                        enabled: !0,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "radio-button",
                                        value: "Plant and Machine Operators and Assemblers",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "PlantandMachineOperatorsandAssemblers"
                                        },
                                        _widgetRecordProvider: r
                                    }, i(a("MPgcLZ2VlkKKkXXne3SNBA#Value", "Plant and Machine Operators and Assemblers"))), e.createElement(s, {
                                        enabled: !0,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "radio-button",
                                        value: "Cleaners and Helpers",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "CleanersandHelpers"
                                        },
                                        _widgetRecordProvider: r
                                    }, i(a("bb25E8_mVU6SBk4q6xkVNQ#Value", "Cleaners and Helpers"))), e.createElement(s, {
                                        enabled: !0,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "radio-button",
                                        value: "Mining, Construction, Manufacturing and Transport Workers",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "Mining_Construction_ManufacturingandTransportWorke"
                                        },
                                        _widgetRecordProvider: r
                                    }, i(a("5e7uSzZH4E6krCobCB1k9w#Value", "Mining, Construction, Manufacturing and Transport Workers"))), e.createElement(s, {
                                        enabled: !0,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "radio-button",
                                        value: "Armed Forces",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "ArmedForces"
                                        },
                                        _widgetRecordProvider: r
                                    }, i(a("fPT9HQ6t9UuY3HVCkJ5C_A#Value", "Armed Forces"))), e.createElement(s, {
                                        enabled: !0,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "radio-button",
                                        value: "Students",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "Students"
                                        },
                                        _widgetRecordProvider: r
                                    }, i(a("m3kSpucmpk6VXkCimyb6PA#Value", "Students")))), e.createElement(w, {
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
                                        onClick: n(function() {
                                            var o = _.clone();
                                            l.nextOnClick$Action(l.callContext(o))
                                        }, "onClick"),
                                        style: "btn btn-primary",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "16"
                                        },
                                        _widgetRecordProvider: r
                                    }, i(a("vLdDY7l8jU6wEETuUPfh_g#Value", "Next"))))]
                                })
                            },
                            _dependencies: [p(c.getFinancialAssessmentOccupation())]
                        })]
                    })
                },
                _dependencies: [p(c.getFinancialAssessmentOccupation()), p(v.variables.isRequiredVar)]
            }))
        }
    };
n(d, "View");
var O = d,
    I = O;
export {
    I as
    default
};