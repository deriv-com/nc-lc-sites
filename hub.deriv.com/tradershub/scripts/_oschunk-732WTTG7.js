import {
    a as C
} from "./_oschunk-RCBCQRYE.js";
import {
    a as E
} from "./_oschunk-AFFQ3UML.js";
import {
    a as h
} from "./_oschunk-PFCE5QNP.js";
import "./_oschunk-TOVPNB4I.js";
import {
    a as _
} from "./_oschunk-MDM6SINN.js";
import "./_oschunk-Z3EGUX6T.js";
import "./_oschunk-NJYKWZYU.js";
import "./_oschunk-SW7FWAXZ.js";
import "./_oschunk-BHZNFATE.js";
import {
    b as y,
    f as O,
    g as l,
    h as c,
    y as g
} from "./_oschunk-HUOHOHZB.js";
import "./_oschunk-Y45M2O2K.js";
import {
    a as V,
    g as w,
    i as b
} from "./_oschunk-6LASTRK7.js";
import "./_oschunk-TIJZDWYD.js";
import {
    a as p
} from "./_oschunk-27GDEXUT.js";
import {
    a as P
} from "./_oschunk-D2MH3QEK.js";
import "./_oschunk-WJ75ZXAT.js";
import "./_oschunk-3WNR72F6.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-HQOLQB4T.js";
import {
    ia as x
} from "./_oschunk-NTQBNJ73.js";
import {
    c as i,
    g as W
} from "./_oschunk-DVBKI63I.js";
var t = W(V());
var T = x,
    k = b.PlaceholderContent,
    q = b.IteratorPlaceholderContent,
    o = class o extends w.BaseWebScreen {
        static get displayName() {
            return "TradingAssessmentFlow.KnowledgeAndExperience"
        }
        static getAttributes() {
            return {
                codeFunction: "KnowledgeAndExperience",
                functionKey: "abfb21b9-f8f5-44e0-8542-599c4cb92ee9",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.TradingAssessmentFlow.KnowledgeAndExperience.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [_, h]
        }
        get modelFactory() {
            return C
        }
        get controllerFactory() {
            return E
        }
        get title() {
            return w.BaseWebScreen.getTranslation("uSH7q_X44ESFQlmcTLku6Q#Title", "KnowledgeAndExperience")
        }
        internalRender() {
            let u = this.model,
                d = this.controller,
                e = this.idService,
                v = d.validationService,
                r = this.widgetsRecordProvider,
                f = d.callContext(),
                A = o.ifWidget,
                n = o.textWidget,
                R = o.asPrimitiveValue,
                a = o.getTranslation,
                m = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(_, {
                getOwnerSpan: i(function() {
                    return m.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: i(function() {
                    return m.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    HideTitle: u.getCachedValue(e.getId("tYtGIsurj0aphpIeSyccRw.HideTitle"), function() {
                        return P.isPhone$Action(f).isPhoneOut
                    }),
                    Title: "Trading Assesment"
                },
                events: {
                    _handleError: i(function(s) {
                        d.handleError(s)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: v
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: r,
                placeholders: {
                    content: new k(function() {
                        return [t.createElement(c, {
                            align: 0,
                            animate: !1,
                            style: u.getCachedValue(e.getId("Hw8iGMOgg0eKgzb4Ybgz2A.Style"), function() {
                                return "display-flex flex-direction-column " + (P.isPhone$Action(f).isPhoneOut ? "gap-base" : "gap-m")
                            }),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "1"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(h, {
                            getOwnerSpan: i(function() {
                                return m.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: i(function() {
                                return m.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Step: "2"
                            },
                            events: {
                                _handleError: i(function(s) {
                                    d.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: v
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
                        }, t.createElement(g, {
                            extendedProperties: {
                                style: "font-weight: bold;"
                            },
                            style: "trading-assessment-steps__desktop",
                            text: ["2/10"],
                            _idProps: {
                                service: e,
                                uuid: "4"
                            },
                            _widgetRecordProvider: r
                        })), t.createElement(c, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "5"
                            },
                            _widgetRecordProvider: r
                        }, A(u.variables.isRequiredVar, !1, this, function() {
                            return [t.createElement(g, {
                                style: "text-error display-block",
                                text: [n(a("cizIPtCQWkm763_wpzyEbA#Value", "* This is required."))],
                                _idProps: {
                                    service: e,
                                    uuid: "6"
                                },
                                _widgetRecordProvider: r
                            })]
                        }, function() {
                            return []
                        }), t.createElement(g, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            text: [n(a("5pVkQZgBDE6kx+kb9XGmdQ#Value", "How much knowledge and experience do you have in relation to online trading?"))],
                            _idProps: {
                                service: e,
                                uuid: "7"
                            },
                            _widgetRecordProvider: r
                        })), t.createElement(c, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "8"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(O, {
                            _validationProps: {
                                validationService: v
                            },
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: !1,
                            style: "radio-group",
                            variable: u.createVariable(T.DataTypes.DataTypes.Text, p.getKnowledgeAnExperience(), function(s) {
                                p.setKnowledgeAnExperience(s)
                            }),
                            _idProps: {
                                service: e,
                                name: "RadioGroupTwo"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(l, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: "I have an academic degree, professional certification, and/or work experience related to financial services.",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "A"
                            },
                            _widgetRecordProvider: r
                        }, n(a("9FpGVDsgmUORhWcCtnlktw#Value", "I have an academic degree, professional certification, and/or work experience related to financial services."))), t.createElement(l, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: "I trade forex CFDs and other complex financial instruments regularly on other platforms.",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "B"
                            },
                            _widgetRecordProvider: r
                        }, n(a("szxSrhoPBkiV5cirwIf+RQ#Value", "I trade forex CFDs and other complex financial instruments regularly on other platforms."))), t.createElement(l, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: "I have attended seminars, training, and/or workshops related to trading.",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "C"
                            },
                            _widgetRecordProvider: r
                        }, n(a("e87vR5cZ4kKs1LnOgCl6KQ#Value", "I have attended seminars, training, and/or workshops related to trading."))), t.createElement(l, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: "I am interested in trading but have very little experience.",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "D"
                            },
                            _widgetRecordProvider: r
                        }, n(a("2JI3JF+6dEWqVn4Ajxiy_A#Value", "I am interested in trading but have very little experience."))), t.createElement(l, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: "I have no knowledge and experience in trading at all.",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "E"
                            },
                            _widgetRecordProvider: r
                        }, n(a("tOVawln2DkmldN9+eMjcXg#Value", "I have no knowledge and experience in trading at all."))))), t.createElement(c, {
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
                        }, t.createElement(y, {
                            enabled: !0,
                            isDefault: !1,
                            onClick: i(function() {
                                var s = f.clone();
                                d.nextOnClick$Action(d.callContext(s))
                            }, "onClick"),
                            style: "btn btn-primary",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "16"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(g, {
                            extendedProperties: {
                                style: 'font-family: "Roboto", sans-serif; font-weight: 500;'
                            },
                            style: "roboto-medium",
                            text: [n(a("OSYAkKbxmkSP61DAdyA6mQ#Value", "Next"))],
                            _idProps: {
                                service: e,
                                uuid: "17"
                            },
                            _widgetRecordProvider: r
                        }))))]
                    })
                },
                _dependencies: [R(p.getKnowledgeAnExperience()), R(u.variables.isRequiredVar)]
            }))
        }
    };
i(o, "View");
var S = o,
    N = S;
export {
    N as
    default
};