import {
    a as N
} from "./_oschunk-RMHZVZ2H.js";
import {
    a as H
} from "./_oschunk-4GZDJGJ4.js";
import "./_oschunk-ILTRYJXV.js";
import {
    a as f
} from "./_oschunk-XFSPMJPV.js";
import "./_oschunk-MZYHHGAU.js";
import {
    a as A
} from "./_oschunk-MDM6SINN.js";
import "./_oschunk-Z3EGUX6T.js";
import "./_oschunk-NJYKWZYU.js";
import "./_oschunk-SW7FWAXZ.js";
import {
    a as T
} from "./_oschunk-DOI3HIHZ.js";
import "./_oschunk-BHZNFATE.js";
import {
    a as _,
    b as S,
    e as b,
    f as I,
    g as O,
    h as d,
    j as E,
    r as C,
    t as W,
    u as V,
    v as L,
    y as c
} from "./_oschunk-HUOHOHZB.js";
import "./_oschunk-Y45M2O2K.js";
import {
    a as J,
    g as F,
    i as y
} from "./_oschunk-6LASTRK7.js";
import "./_oschunk-TIJZDWYD.js";
import {
    a as P
} from "./_oschunk-27GDEXUT.js";
import {
    a as R
} from "./_oschunk-D2MH3QEK.js";
import "./_oschunk-WJ75ZXAT.js";
import "./_oschunk-3WNR72F6.js";
import "./_oschunk-X4K3PA43.js";
import {
    a as w,
    sb as D
} from "./_oschunk-HQOLQB4T.js";
import {
    ia as k
} from "./_oschunk-NTQBNJ73.js";
import {
    c as o,
    g as z
} from "./_oschunk-DVBKI63I.js";
var t = z(J());
var g = k,
    B = y.PlaceholderContent,
    te = y.IteratorPlaceholderContent,
    m = class m extends F.BaseWebScreen {
        static get displayName() {
            return "RealAccountCreation.TermsOfUse"
        }
        static getAttributes() {
            return {
                codeFunction: "TermsOfUse",
                functionKey: "0adda923-6a4f-4926-a000-15897ab1cfc3",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.RealAccountCreation.TermsOfUse.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return ["scripts/tradershub.UserScripts.CachingScript.js"]
        }
        static getBlocks() {
            return [A, f, T]
        }
        get modelFactory() {
            return N
        }
        get controllerFactory() {
            return H
        }
        get title() {
            let a = this.model,
                l = this.controller,
                e = this.idService,
                p = l.validationService,
                i = l.callContext(),
                h = m.asPrimitiveValue,
                x = m.getTranslation,
                n = this;
            return g.Injector.resolve(g.ServiceNames.TranslationsService).getMessage("I6ndCk9qJkmgABWJerHPww#TitleExpression.-1562683983.1", "Terms of use | Deriv")
        }
        internalRender() {
            let a = this.model,
                l = this.controller,
                e = this.idService,
                p = l.validationService,
                i = this.widgetsRecordProvider,
                h = l.callContext(),
                x = m.ifWidget,
                n = m.textWidget,
                v = m.asPrimitiveValue,
                s = m.getTranslation,
                u = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(A, {
                getOwnerSpan: o(function() {
                    return u.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return u.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Title: "Terms of use",
                    Analytics: a.getCachedValue(e.getId("VOwsODUdaUKApwXhNIgypg.Analytics"), function() {
                        return function() {
                            var r = new D;
                            return r.stepCodenameAttr = "terms_of_use", r.stepNumberAttr = (P.getIsEuUser() ? 6 : 4).toString(), r
                        }()
                    }, function() {
                        return P.getIsEuUser()
                    })
                },
                events: {
                    _handleError: o(function(r) {
                        l.handleError(r)
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
                _widgetRecordProvider: i,
                placeholders: {
                    content: new B(function() {
                        return [t.createElement(d, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "height: auto;"
                            },
                            style: "full-width",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "1"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(d, {
                            align: 0,
                            animate: !1,
                            style: "display-flex flex-direction-column",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "2"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(c, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: bold; margin-bottom: 8px;"
                            },
                            text: [n(s("VusAJHa2gUa7fnWF5noIAg#Value", "Jurisdiction and choice of law"))],
                            _idProps: {
                                service: e,
                                uuid: "3"
                            },
                            _widgetRecordProvider: i
                        }), n(s("I3sTK7Z6wE6FTk5+eCFklw#Value", "Your account will be opened with Deriv (SVG) LLC, and will be subject to the laws of Saint Vincent and the Grenadines.")), t.createElement(f, {
                            getOwnerSpan: o(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: o(function(r) {
                                    l.handleError(r)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: p
                            },
                            _idProps: {
                                service: e,
                                uuid: "4",
                                alias: "2"
                            },
                            _widgetRecordProvider: i,
                            _dependencies: []
                        })), t.createElement(d, {
                            align: 0,
                            animate: !1,
                            style: "display-flex flex-direction-column",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "5"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(c, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: bold; margin-bottom: 8px;"
                            },
                            text: [n(s("eXC3CAxTc0+k6VK++rLwlQ#Value", "Risk warning"))],
                            _idProps: {
                                service: e,
                                uuid: "6"
                            },
                            _widgetRecordProvider: i
                        }), n(s("_x0u+xX_Pk+f6Z01UcVt1g#Value", "The financial trading services offered on this site are only suitable for customers who accept the possibility of losing all the money they invest and who understand and have experience of the risk involved in the purchase of financial contracts. Transactions in financial contracts carry a high degree of risk. If the contracts you purchased expire as worthless, you will lose all your investment, which includes the contract premium.")), t.createElement(f, {
                            getOwnerSpan: o(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: o(function(r) {
                                    l.handleError(r)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: p
                            },
                            _idProps: {
                                service: e,
                                uuid: "7",
                                alias: "3"
                            },
                            _widgetRecordProvider: i,
                            _dependencies: []
                        })), t.createElement(d, {
                            align: 0,
                            animate: !1,
                            style: "display-flex flex-direction-column",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "8"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(c, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: bold; margin-bottom: 8px;"
                            },
                            text: [n(s("ym785UB6uEOv0LxAxfmlwg#Value", "FATCA declaration"))],
                            _idProps: {
                                service: e,
                                uuid: "9"
                            },
                            _widgetRecordProvider: i
                        }), t.createElement(_, {
                            tag: "ol",
                            _idProps: {
                                service: e,
                                uuid: "10"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(_, {
                            tag: "li",
                            _idProps: {
                                service: e,
                                uuid: "11"
                            },
                            _widgetRecordProvider: i
                        }, n(s("BMx7bOIxzUezmaiP7uJzNA#Value", "US citizenship or lawful permanent resident (green card) status"))), t.createElement(_, {
                            tag: "li",
                            _idProps: {
                                service: e,
                                uuid: "12"
                            },
                            _widgetRecordProvider: i
                        }, n(s("91iofZa7LUu0QF2w2HZr5g#Value", "A US birthplace"))), t.createElement(_, {
                            tag: "li",
                            _idProps: {
                                service: e,
                                uuid: "13"
                            },
                            _widgetRecordProvider: i
                        }, n(s("UDoEQvO1_UiDZGRjPCadow#Value", "A US residence address or a US correspondence address (including a US PO box)"))), t.createElement(_, {
                            tag: "li",
                            _idProps: {
                                service: e,
                                uuid: "14"
                            },
                            _widgetRecordProvider: i
                        }, n(s("hOVLqMM7LUC4cFFFmAzhDQ#Value", "Standing instructions to transfer funds to an account maintained in the United States, or directions regularly received from a US address"))), t.createElement(_, {
                            tag: "li",
                            _idProps: {
                                service: e,
                                uuid: "15"
                            },
                            _widgetRecordProvider: i
                        }, n(s("7he_rjhVW0WJl65CjTu67g#Value", "An \u201Cin care of\u201D address or a \u201Chold mail\u201D address that is the sole address with respect to the client"))), t.createElement(_, {
                            tag: "li",
                            _idProps: {
                                service: e,
                                uuid: "16"
                            },
                            _widgetRecordProvider: i
                        }, n(s("RquJsScZek2gVLMPonVWtg#Value", "A power of attorney or signatory authority granted to a person with a US address")))), t.createElement(d, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "17"
                            },
                            _widgetRecordProvider: i
                        }, n(s("Yt8YpD6lJUyGEx4M60aN1g#Value", "If any of the above applies to you, select ")), t.createElement(c, {
                            extendedProperties: {
                                style: "font-weight: bold;"
                            },
                            text: [n(s("NJ4r1N8vaEm5zYwJXiea9A#Value", "Yes"))],
                            _idProps: {
                                service: e,
                                uuid: "18"
                            },
                            _widgetRecordProvider: i
                        }), n(s("5qoceU1ez0yLpAeHjUX7RQ#Value", ". Otherwise, select ")), t.createElement(c, {
                            extendedProperties: {
                                style: "font-weight: bold;"
                            },
                            text: [n(s("4gpmc3q+30WgOIUdx+UR+A#Value", "No"))],
                            _idProps: {
                                service: e,
                                uuid: "19"
                            },
                            _widgetRecordProvider: i
                        }), "."), t.createElement(d, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "text-align: left;"
                            },
                            style: "",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "20"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(I, {
                            _validationProps: {
                                validationService: p
                            },
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: !1,
                            style: "radio-group",
                            variable: a.createVariable(g.DataTypes.DataTypes.Text, P.getRealSignupFatcaDeclaration(), function(r) {
                                P.setRealSignupFatcaDeclaration(r)
                            }),
                            _idProps: {
                                service: e,
                                name: "FatcaDeclaration"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(O, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: "1",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "Yes"
                            },
                            _widgetRecordProvider: i
                        }, n(s("pRjPQzGlgUSZxMS3u7A8+w#Value", "Yes"))), t.createElement(O, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: "0",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "No"
                            },
                            _widgetRecordProvider: i
                        }, n(s("WZWbOH6yRkai3UAR8iY76A#Value", "No")))), x(a.variables.validFieldsVar.fatcaDeclareAttr, !1, this, function() {
                            return []
                        }, function() {
                            return [t.createElement(E, {
                                style: "text-primary",
                                value: "This is required.",
                                _idProps: {
                                    service: e,
                                    uuid: "24"
                                },
                                _widgetRecordProvider: i
                            })]
                        })), t.createElement(f, {
                            getOwnerSpan: o(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: o(function(r) {
                                    l.handleError(r)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: p
                            },
                            _idProps: {
                                service: e,
                                uuid: "25",
                                alias: "4"
                            },
                            _widgetRecordProvider: i,
                            _dependencies: []
                        })), t.createElement(d, {
                            align: 0,
                            animate: !1,
                            style: "display-flex flex-direction-column",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "26"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(c, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: bold; margin-bottom: 8px;"
                            },
                            text: [n(s("r2Yxl65wUk+wtwYbEcyPGw#Value", "Real accounts are not available to politically exposed persons (PEPs)"))],
                            _idProps: {
                                service: e,
                                uuid: "27"
                            },
                            _widgetRecordProvider: i
                        }), n(s("pO86_0W3HUmaXyUXXwdp8Q#Value", "A politically exposed person (PEP) is someone appointed with a prominent public position. Close associates and family members of a PEP are also considered to be PEPs.")), t.createElement(f, {
                            getOwnerSpan: o(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: o(function(r) {
                                    l.handleError(r)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: p
                            },
                            _idProps: {
                                service: e,
                                uuid: "28",
                                alias: "5"
                            },
                            _widgetRecordProvider: i,
                            _dependencies: []
                        }), t.createElement(d, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-bottom: 16px;"
                            },
                            style: "display-flex flex-direction-column",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "29"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(d, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-bottom: 0px;"
                            },
                            style: "display-flex align-items-center gap-s checkbox-container",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "30"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(b, {
                            _validationProps: {
                                validationService: p
                            },
                            enabled: !0,
                            style: "checkbox",
                            variable: a.createVariable(g.DataTypes.DataTypes.Boolean, a.variables.pEPVar, function(r) {
                                a.variables.pEPVar = r
                            }),
                            _idProps: {
                                service: e,
                                name: "Checkbox_PEP"
                            },
                            _widgetRecordProvider: i
                        }), t.createElement(W, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "text-neutral-9",
                            targetWidget: "Checkbox_PEP",
                            _idProps: {
                                service: e,
                                uuid: "32"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(c, {
                            style: "text-neutral-9",
                            text: [n(s("fzXmFrM4eE6Ln7yxgEEoYA#Value", "I am not a PEP and have never been a PEP."))],
                            _idProps: {
                                service: e,
                                uuid: "33"
                            },
                            _widgetRecordProvider: i
                        }))), x(a.variables.validFieldsVar.pEPAttr, !1, this, function() {
                            return []
                        }, function() {
                            return [t.createElement(c, {
                                extendedProperties: {
                                    style: "margin-top: 8px;"
                                },
                                style: "text-primary",
                                text: [n(s("xMC4dNCQPU2RdjpgCxCsqQ#Value", "This is required."))],
                                _idProps: {
                                    service: e,
                                    uuid: "34"
                                },
                                _widgetRecordProvider: i
                            })]
                        })), t.createElement(d, {
                            align: 0,
                            animate: !1,
                            style: "display-flex align-items-center gap-s checkbox-container",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "35"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(b, {
                            _validationProps: {
                                validationService: p
                            },
                            enabled: !0,
                            style: "checkbox",
                            variable: a.createVariable(g.DataTypes.DataTypes.Boolean, a.variables.agreeToTermsVar, function(r) {
                                a.variables.agreeToTermsVar = r
                            }),
                            _idProps: {
                                service: e,
                                name: "Checkbox_AgreeToTerm"
                            },
                            _widgetRecordProvider: i
                        }), t.createElement(d, {
                            align: 0,
                            animate: !1,
                            style: "display-flex align-items-center",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "37"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(c, {
                            style: "text-neutral-9",
                            text: [n(s("QOwN3wQrYEW0TKYCWSMUpQ#Value", "I agree to the"))],
                            _idProps: {
                                service: e,
                                uuid: "38"
                            },
                            _widgetRecordProvider: i
                        }), t.createElement(V, {
                            enabled: !0,
                            extendedProperties: {
                                target: "_blank"
                            },
                            gridProperties: {
                                marginLeft: "4px"
                            },
                            style: "text-neutral-9",
                            transition: g.Transitions.createTransition(g.Transitions.TransitionAnimation.Default),
                            url: g.Navigation.generateScreenURL("https://deriv.com/terms-and-conditions#clients", {}),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "39"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(c, {
                            extendedProperties: {
                                style: "color: #272B30; font-weight: bold; text-decoration: underline;"
                            },
                            style: "text-neutral-9",
                            text: [n(s("JPwweFvZvkOanle2ZaHzsQ#Value", "terms and conditions"))],
                            _idProps: {
                                service: e,
                                uuid: "40"
                            },
                            _widgetRecordProvider: i
                        })), t.createElement(c, {
                            style: "text-neutral-9",
                            text: ["."],
                            _idProps: {
                                service: e,
                                uuid: "41"
                            },
                            _widgetRecordProvider: i
                        }))), x(a.variables.validFieldsVar.agreeToTermsAttr, !1, this, function() {
                            return []
                        }, function() {
                            return [t.createElement(E, {
                                extendedProperties: {
                                    style: "margin-top: 8px;"
                                },
                                style: "text-primary",
                                value: "This is required.",
                                _idProps: {
                                    service: e,
                                    uuid: "42"
                                },
                                _widgetRecordProvider: i
                            })]
                        }), x(P.getIsSpain(), !1, this, function() {
                            return [t.createElement(d, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "margin-bottom: 16px;"
                                },
                                style: "display-flex flex-direction-column",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "43"
                                },
                                _widgetRecordProvider: i
                            }, t.createElement(d, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "margin-bottom: 0px; margin-top: 16px;"
                                },
                                style: "display-flex align-items-center gap-s checkbox-container",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "44"
                                },
                                _widgetRecordProvider: i
                            }, t.createElement(b, {
                                _validationProps: {
                                    validationService: p
                                },
                                enabled: !0,
                                style: "checkbox",
                                variable: a.createVariable(g.DataTypes.DataTypes.Boolean, a.variables.spainAgreementVar, function(r) {
                                    a.variables.spainAgreementVar = r
                                }),
                                _idProps: {
                                    service: e,
                                    name: "Checkbox_Spain"
                                },
                                _widgetRecordProvider: i
                            }), t.createElement(W, {
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                targetWidget: "Checkbox_Spain",
                                _idProps: {
                                    service: e,
                                    uuid: "46"
                                },
                                _widgetRecordProvider: i
                            }, t.createElement(c, {
                                style: "text-neutral-9",
                                text: [n(s("bfzheCJXeUKMukyaueftxg#Value", "I hereby confirm that my request for opening an account with Deriv Investments (Europe) Ltd is made on my own initiative."))],
                                _idProps: {
                                    service: e,
                                    uuid: "47"
                                },
                                _widgetRecordProvider: i
                            }))), x(a.variables.validFieldsVar.spainAgreementAttr, !1, this, function() {
                                return []
                            }, function() {
                                return [t.createElement(c, {
                                    extendedProperties: {
                                        style: "margin-top: 8px;"
                                    },
                                    style: "text-primary",
                                    text: [n(s("UjFQ4fTUAkOlO+3KUyUAHQ#Value", "This is required."))],
                                    _idProps: {
                                        service: e,
                                        uuid: "48"
                                    },
                                    _widgetRecordProvider: i
                                })]
                            }))]
                        }, function() {
                            return []
                        })), t.createElement(d, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "text-align: right;"
                            },
                            style: "btn-container margin-top-base",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "49"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(T, {
                            getOwnerSpan: o(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                ShowLabelOnLoading: !0,
                                IsLoading: a.variables.isExecutingVar
                            },
                            events: {
                                _handleError: o(function(r) {
                                    l.handleError(r)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: p
                            },
                            _idProps: {
                                service: e,
                                uuid: "50",
                                alias: "6"
                            },
                            _widgetRecordProvider: i,
                            placeholders: {
                                button: new B(function() {
                                    return [t.createElement(S, {
                                        enabled: !a.variables.isExecutingVar,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        isDefault: !1,
                                        onClick: o(function() {
                                            return Promise.resolve().then(function() {
                                                var r = h.clone();
                                                return l.buttonOnClick$Action(l.callContext(r))
                                            })
                                        }, "onClick"),
                                        style: "btn btn-primary",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "51"
                                        },
                                        _widgetRecordProvider: i
                                    }, t.createElement(d, {
                                        align: 0,
                                        animate: !1,
                                        style: "osui-btn-loading__spinner-animation",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "52"
                                        },
                                        _widgetRecordProvider: i
                                    }), n(s("BWpnlDXN0EGrgGtZ3b9AKw#Value", "Create account")))]
                                })
                            },
                            _dependencies: [v(a.variables.isExecutingVar)]
                        }))), t.createElement(L, {
                            extendedProperties: {
                                style: "border-radius: 8px; padding: 0px;"
                            },
                            showPopup: a.variables.isDuplicateAccountVar,
                            style: "popup-dialog popup_account-already-exists",
                            _idProps: {
                                service: e,
                                uuid: "53"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(d, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "padding: 24px; text-align: center;" + (R.isPhone$Action(h).isPhoneOut ? ` text-align: center;\r
  padding: 16px;\r
  height: 100%;\r
  display: flex;\r
  flex-direction: column;\r
  justify-content: space-between;\r
  min-height: 0;\r
  max-height: 100%;\r
  ` : "")
                            },
                            style: "full-width full-height",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "54"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(d, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-bottom: 24px; text-align: right;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "55"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(V, {
                            enabled: !0,
                            onClick: o(function() {
                                var r = h.clone();
                                l.closeDuplicateAccountPopup$Action(l.callContext(r))
                            }, "onClick"),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "56"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(C, {
                            image: g.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneMDClose.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "57"
                            },
                            _widgetRecordProvider: i
                        })), t.createElement(d, {
                            align: 0,
                            animate: !0,
                            visible: a.getCachedValue(e.getId("ieja6jvSJEmadJWTrtmDlg.Visible"), function() {
                                return R.isPhone$Action(h).isPhoneOut
                            }),
                            _idProps: {
                                service: e,
                                uuid: "58"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(f, {
                            getOwnerSpan: o(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Space: w.space.small
                            },
                            events: {
                                _handleError: o(function(r) {
                                    l.handleError(r)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: p
                            },
                            _idProps: {
                                service: e,
                                uuid: "59",
                                alias: "7"
                            },
                            _widgetRecordProvider: i,
                            _dependencies: []
                        }))), t.createElement(d, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "60"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(d, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-bottom: 24px; text-align: center;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "61"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(C, {
                            image: g.Navigation.VersionedURL.getVersionedUrl("img/tradershub.illustration.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "62"
                            },
                            _widgetRecordProvider: i
                        })), t.createElement(d, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-bottom: 24px;"
                            },
                            style: "display-flex flex-direction-column gap-s",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "63"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(c, {
                            extendedProperties: {
                                style: "font-size: 18px; font-weight: bold;"
                            },
                            text: [n(s("PwNGqEkCGECFPIKR3FeqVg#Value", "Account already exists"))],
                            _idProps: {
                                service: e,
                                uuid: "64"
                            },
                            _widgetRecordProvider: i
                        }), n(s("UmktsKX6n0KmYFqdW2oPjA#Value", "If you think this is a mistake, contact us via live chat.")))), t.createElement(d, {
                            align: 0,
                            animate: !1,
                            style: "display-flex flex-direction-column gap-s",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "65"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(d, {
                            align: 0,
                            animate: !0,
                            visible: a.getCachedValue(e.getId("xrIGUibJAEeW4EpJFzC7Ag.Visible"), function() {
                                return R.isPhone$Action(h).isPhoneOut
                            }),
                            _idProps: {
                                service: e,
                                uuid: "66"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(f, {
                            getOwnerSpan: o(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Space: w.space.small
                            },
                            events: {
                                _handleError: o(function(r) {
                                    l.handleError(r)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: p
                            },
                            _idProps: {
                                service: e,
                                uuid: "67",
                                alias: "8"
                            },
                            _widgetRecordProvider: i,
                            _dependencies: []
                        })), t.createElement(S, {
                            enabled: !0,
                            extendedProperties: {
                                style: "height: 40px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            isDefault: !1,
                            onClick: o(function() {
                                try {
                                    g.Navigation.navigateTo(g.Navigation.generateScreenURL("tradershub", "personal-details", {}), g.Transitions.createTransition(g.Transitions.TransitionAnimation.Fade), null, !0)
                                } catch (r) {
                                    if (r.name !== "RedirectOccurredException") throw r
                                }
                            }, "onClick"),
                            style: "btn btn-primary full-width",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "68"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(c, {
                            extendedProperties: {
                                style: "font-weight: 500;"
                            },
                            text: [n(s("MuFyNHS4c0+5HdSI5jqy+Q#Value", "Try again"))],
                            _idProps: {
                                service: e,
                                uuid: "69"
                            },
                            _widgetRecordProvider: i
                        })), t.createElement(S, {
                            enabled: !0,
                            extendedProperties: {
                                style: "height: 40px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent",
                                marginLeft: "0"
                            },
                            isDefault: !1,
                            onClick: o(function() {
                                var r = h.clone();
                                l.liveChatOnClick$Action(l.callContext(r))
                            }, "onClick"),
                            style: "btn full-width",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "70"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(c, {
                            extendedProperties: {
                                style: "font-weight: 500;"
                            },
                            text: [n(s("QfmkX07qmkClBghhnPprPA#Value", "Live chat"))],
                            _idProps: {
                                service: e,
                                uuid: "71"
                            },
                            _widgetRecordProvider: i
                        })))))]
                    })
                },
                _dependencies: [v(a.variables.isDuplicateAccountVar), v(a.variables.isExecutingVar), v(a.variables.spainAgreementVar), v(P.getIsSpain()), v(a.variables.agreeToTermsVar), v(a.variables.pEPVar), v(a.variables.validFieldsVar.spainAgreementAttr), v(a.variables.validFieldsVar.agreeToTermsAttr), v(a.variables.validFieldsVar.pEPAttr), v(a.variables.validFieldsVar.fatcaDeclareAttr), v(P.getRealSignupFatcaDeclaration())]
            }))
        }
    };
o(m, "View");
var U = m,
    ie = U;
export {
    ie as
    default
};