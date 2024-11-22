import {
    a as f
} from "./_oschunk-ZG3JTFL3.js";
import {
    a as C
} from "./_oschunk-JX6BHFFP.js";
import {
    a as S
} from "./_oschunk-4NZKJYN3.js";
import {
    a as R
} from "./_oschunk-MDM6SINN.js";
import "./_oschunk-Z3EGUX6T.js";
import "./_oschunk-NJYKWZYU.js";
import "./_oschunk-SW7FWAXZ.js";
import "./_oschunk-B7RGCJGD.js";
import "./_oschunk-BHZNFATE.js";
import {
    b as E,
    f as O,
    g as a,
    h as w
} from "./_oschunk-HUOHOHZB.js";
import "./_oschunk-Y45M2O2K.js";
import {
    a as W,
    g as p,
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
    ia as _
} from "./_oschunk-NTQBNJ73.js";
import {
    c as s,
    g as F
} from "./_oschunk-DVBKI63I.js";
var e = F(W());
var V = _,
    h = P.PlaceholderContent,
    M = P.IteratorPlaceholderContent,
    d = class d extends p.BaseWebScreen {
        static get displayName() {
            return "FinancialAssessmentFlow.EmploymentIndustry"
        }
        static getAttributes() {
            return {
                codeFunction: "EmploymentIndustry",
                functionKey: "4758cd4e-81de-4953-9c1d-3ed4cd6dd7e3",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.FinancialAssessmentFlow.EmploymentIndustry.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [R, S]
        }
        get modelFactory() {
            return f
        }
        get controllerFactory() {
            return C
        }
        get title() {
            return p.BaseWebScreen.getTranslation("Ts1YR96BU0mcHT7UzW3X4w#Title", "EmploymentIndustry")
        }
        internalRender() {
            let m = this.model,
                l = this.controller,
                t = this.idService,
                v = l.validationService,
                r = this.widgetsRecordProvider,
                y = l.callContext(),
                I = d.ifWidget,
                i = d.textWidget,
                g = d.asPrimitiveValue,
                n = d.getTranslation,
                u = this;
            return e.createElement("div", this.getRootNodeProperties(), e.createElement(R, {
                getOwnerSpan: s(function() {
                    return u.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return u.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    HideTitle: !0,
                    Title: "Financial assessment"
                },
                events: {
                    _handleError: s(function(o) {
                        l.handleError(o)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: v
                },
                _idProps: {
                    service: t,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: r,
                placeholders: {
                    content: new h(function() {
                        return [e.createElement(S, {
                            getOwnerSpan: s(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: s(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Page: "2/8",
                                IsRequired: m.variables.isRequiredVar,
                                QuestionText: "Employment industry"
                            },
                            events: {
                                _handleError: s(function(o) {
                                    l.handleError(o)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: v
                            },
                            _idProps: {
                                service: t,
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: r,
                            placeholders: {
                                content: new h(function() {
                                    return [e.createElement(O, {
                                        _validationProps: {
                                            validationService: v
                                        },
                                        enabled: !0,
                                        extendedEvents: {
                                            onClick: s(function() {
                                                var o = y.clone();
                                                l.nextOnClick$Action(l.callContext(o))
                                            }, "onClick")
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        mandatory: !1,
                                        style: "radio-group",
                                        variable: m.createVariable(V.DataTypes.DataTypes.Text, c.getFinancialAssessmentEmploymentIndustry(), function(o) {
                                            c.setFinancialAssessmentEmploymentIndustry(o)
                                        }),
                                        _idProps: {
                                            service: t,
                                            name: "RadioGroup"
                                        },
                                        _widgetRecordProvider: r
                                    }, e.createElement(a, {
                                        enabled: !0,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "radio-button",
                                        value: "Construction",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "Construction"
                                        },
                                        _widgetRecordProvider: r
                                    }, i(n("xvUAsCqDVEaaD3RVnQLR+Q#Value", "Construction"))), e.createElement(a, {
                                        enabled: !0,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "radio-button",
                                        value: "Education",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "Education"
                                        },
                                        _widgetRecordProvider: r
                                    }, i(n("RTO7XMI5MECNucE7X1Yalw#Value", "Education"))), e.createElement(a, {
                                        enabled: !0,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "radio-button",
                                        value: "Finance",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "Finance"
                                        },
                                        _widgetRecordProvider: r
                                    }, i(n("xCvZ_gRiqUqq7EySzyw1Yw#Value", "Finance"))), e.createElement(a, {
                                        enabled: !0,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "radio-button",
                                        value: "Health",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "Health"
                                        },
                                        _widgetRecordProvider: r
                                    }, i(n("1hNcnutiqkSM5maEmoL2nw#Value", "Health"))), e.createElement(a, {
                                        enabled: !0,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "radio-button",
                                        value: "Tourism",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "Tourism"
                                        },
                                        _widgetRecordProvider: r
                                    }, i(n("Drs9c4vzeECR2gNmWHqv7w#Value", "Tourism"))), e.createElement(a, {
                                        enabled: !0,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "radio-button",
                                        value: "Information & Communications Technology",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "InformationCommunicationsTechnology"
                                        },
                                        _widgetRecordProvider: r
                                    }, i(n("ITkUljOIUE++RSn6qeHPzw#Value", "Information & Communications Technology"))), e.createElement(a, {
                                        enabled: !0,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "radio-button",
                                        value: "Science & Engineering",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "ScienceEngineering"
                                        },
                                        _widgetRecordProvider: r
                                    }, i(n("Hi1pXtNFMkKDQ127YldaEQ#Value", "Science & Engineering"))), e.createElement(a, {
                                        enabled: !0,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "radio-button",
                                        value: "Legal",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "Legal"
                                        },
                                        _widgetRecordProvider: r
                                    }, i(n("PCwdh5yRJkWIl2zYlrRjtg#Value", "Legal"))), e.createElement(a, {
                                        enabled: !0,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "radio-button",
                                        value: "Social & Cultural",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "SocialCultural"
                                        },
                                        _widgetRecordProvider: r
                                    }, i(n("+fsTzagydUW7RVZnM8Egng#Value", "Social & Cultural"))), e.createElement(a, {
                                        enabled: !0,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "radio-button",
                                        value: "Real Estate",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "RealEstate"
                                        },
                                        _widgetRecordProvider: r
                                    }, i(n("O4k9Y65UUk6kDsYRlEWpZw#Value", "Real Estate"))), e.createElement(a, {
                                        enabled: !0,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "radio-button",
                                        value: "Manufacturing",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "Manufacturing"
                                        },
                                        _widgetRecordProvider: r
                                    }, i(n("3KIzOASKZ0megMp4HSrftA#Value", "Manufacturing"))), e.createElement(a, {
                                        enabled: !0,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "radio-button",
                                        value: "Unemployed",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "Unemployed"
                                        },
                                        _widgetRecordProvider: r
                                    }, i(n("LmtTAzg13ka03T5vWKPyNQ#Value", "Unemployed")))), e.createElement(w, {
                                        align: 0,
                                        animate: !1,
                                        style: "btn-container",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "Next"
                                        },
                                        _widgetRecordProvider: r
                                    }, e.createElement(E, {
                                        enabled: !0,
                                        isDefault: !1,
                                        onClick: s(function() {
                                            var o = y.clone();
                                            l.nextOnClick$Action(l.callContext(o))
                                        }, "onClick"),
                                        style: "btn btn-primary",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "16"
                                        },
                                        _widgetRecordProvider: r
                                    }, i(n("QSG_knSeeUilaZ5O6CZ_bg#Value", "Next"))))]
                                })
                            },
                            _dependencies: [g(c.getFinancialAssessmentEmploymentIndustry())]
                        })]
                    })
                },
                _dependencies: [g(c.getFinancialAssessmentEmploymentIndustry()), g(m.variables.isRequiredVar)]
            }))
        }
    };
s(d, "View");
var b = d,
    N = b;
export {
    N as
    default
};