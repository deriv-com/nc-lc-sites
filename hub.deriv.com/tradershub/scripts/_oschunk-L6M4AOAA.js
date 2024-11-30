import {
    a as D
} from "./_oschunk-AMYATZI6.js";
import {
    a as F
} from "./_oschunk-JUV7MR4V.js";
import "./_oschunk-RNXGKL75.js";
import {
    a as P
} from "./_oschunk-UHVNGUMG.js";
import "./_oschunk-PSUEQKJH.js";
import {
    a as T
} from "./_oschunk-MD5SGUPG.js";
import "./_oschunk-DFHS2IVF.js";
import "./_oschunk-GEKOGHNU.js";
import "./_oschunk-SW7FWAXZ.js";
import {
    a as O
} from "./_oschunk-R6D7EMWY.js";
import "./_oschunk-BHZNFATE.js";
import {
    b as y,
    e as h,
    h as s,
    j as U,
    r as C,
    t as b,
    u as E,
    v as I,
    y as g
} from "./_oschunk-WAXNMQCP.js";
import "./_oschunk-LHY3WMNC.js";
import {
    a as N,
    g as k,
    i as w
} from "./_oschunk-J7LCUWB3.js";
import "./_oschunk-ESOYZIPG.js";
import {
    a as _
} from "./_oschunk-XMOR6XCC.js";
import {
    a as S
} from "./_oschunk-H7UK4VZM.js";
import "./_oschunk-JSVFHRDW.js";
import "./_oschunk-LUKJNVXR.js";
import "./_oschunk-X4K3PA43.js";
import {
    a as R,
    wb as A
} from "./_oschunk-44PT7RP7.js";
import {
    ia as V
} from "./_oschunk-NTQBNJ73.js";
import {
    c as n,
    g as B
} from "./_oschunk-DVBKI63I.js";
var t = B(N());
var c = V,
    L = w.PlaceholderContent,
    Z = w.IteratorPlaceholderContent,
    m = class m extends k.BaseWebScreen {
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
            return [T, P, O]
        }
        get modelFactory() {
            return D
        }
        get controllerFactory() {
            return F
        }
        get title() {
            let a = this.model,
                d = this.controller,
                e = this.idService,
                p = d.validationService,
                i = d.callContext(),
                f = m.asPrimitiveValue,
                x = m.getTranslation,
                o = this;
            return c.Injector.resolve(c.ServiceNames.TranslationsService).getMessage("I6ndCk9qJkmgABWJerHPww#TitleExpression.-1562683983.1", "Terms of use | Deriv")
        }
        internalRender() {
            let a = this.model,
                d = this.controller,
                e = this.idService,
                p = d.validationService,
                i = this.widgetsRecordProvider,
                f = d.callContext(),
                x = m.ifWidget,
                o = m.textWidget,
                v = m.asPrimitiveValue,
                l = m.getTranslation,
                u = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(T, {
                getOwnerSpan: n(function() {
                    return u.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: n(function() {
                    return u.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Title: c.Injector.resolve(c.ServiceNames.TranslationsService).getMessage("AexaNo2BOk6KEgnBjMDxDg#Value.945985687.1", "Terms of use"),
                    Analytics: a.getCachedValue(e.getId("VOwsODUdaUKApwXhNIgypg.Analytics"), function() {
                        return function() {
                            var r = new A;
                            return r.stepCodenameAttr = "terms_of_use", r.stepNumberAttr = (_.getIsEuUser() ? 6 : 4).toString(), r
                        }()
                    }, function() {
                        return _.getIsEuUser()
                    })
                },
                events: {
                    _handleError: n(function(r) {
                        d.handleError(r)
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
                    content: new L(function() {
                        return [t.createElement(s, {
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
                        }, t.createElement(s, {
                            align: 0,
                            animate: !1,
                            style: "display-flex flex-direction-column",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "2"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(g, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: bold; margin-bottom: 8px;"
                            },
                            text: [o(l("VusAJHa2gUa7fnWF5noIAg#Value", "Jurisdiction and choice of law"))],
                            _idProps: {
                                service: e,
                                uuid: "3"
                            },
                            _widgetRecordProvider: i
                        }), o(l("I3sTK7Z6wE6FTk5+eCFklw#Value", "Your account will be opened with Deriv (SVG) LLC, and will be subject to the laws of Saint Vincent and the Grenadines.")), t.createElement(P, {
                            getOwnerSpan: n(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: n(function(r) {
                                    d.handleError(r)
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
                        })), t.createElement(s, {
                            align: 0,
                            animate: !1,
                            style: "display-flex flex-direction-column",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "5"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(g, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: bold; margin-bottom: 8px;"
                            },
                            text: [o(l("eXC3CAxTc0+k6VK++rLwlQ#Value", "Risk warning"))],
                            _idProps: {
                                service: e,
                                uuid: "6"
                            },
                            _widgetRecordProvider: i
                        }), o(l("_x0u+xX_Pk+f6Z01UcVt1g#Value", "The financial trading services offered on this site are only suitable for customers who accept the possibility of losing all the money they invest and who understand and have experience of the risk involved in the purchase of financial contracts. Transactions in financial contracts carry a high degree of risk. If the contracts you purchased expire as worthless, you will lose all your investment, which includes the contract premium.")), t.createElement(P, {
                            getOwnerSpan: n(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: n(function(r) {
                                    d.handleError(r)
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
                        })), t.createElement(s, {
                            align: 0,
                            animate: !1,
                            style: "display-flex flex-direction-column",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "8"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(g, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: bold; margin-bottom: 8px;"
                            },
                            text: [o(l("ym785UB6uEOv0LxAxfmlwg#Value", "FATCA declaration"))],
                            _idProps: {
                                service: e,
                                uuid: "9"
                            },
                            _widgetRecordProvider: i
                        }), t.createElement(s, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-bottom: 16px;"
                            },
                            style: "display-flex flex-direction-column",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "10"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(s, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-bottom: 0px;"
                            },
                            style: "display-flex align-items-center gap-s checkbox-container",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "11"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(h, {
                            _validationProps: {
                                validationService: p
                            },
                            enabled: !0,
                            style: "checkbox",
                            variable: a.createVariable(c.DataTypes.DataTypes.Boolean, a.variables.fATCAVar, function(r) {
                                a.variables.fATCAVar = r
                            }),
                            _idProps: {
                                service: e,
                                name: "Checkbox_FATCA"
                            },
                            _widgetRecordProvider: i
                        }), t.createElement(b, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "text-neutral-9",
                            targetWidget: "Checkbox_FATCA",
                            _idProps: {
                                service: e,
                                uuid: "13"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(g, {
                            style: "text-neutral-9",
                            text: [o(l("8KuNfI8SCUK6L1tIHWQu_A#Value", "I declare and confirm that I am not a citizen or resident of the US for tax purposes."))],
                            _idProps: {
                                service: e,
                                uuid: "14"
                            },
                            _widgetRecordProvider: i
                        })))), t.createElement(P, {
                            getOwnerSpan: n(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: n(function(r) {
                                    d.handleError(r)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: p
                            },
                            _idProps: {
                                service: e,
                                uuid: "15",
                                alias: "4"
                            },
                            _widgetRecordProvider: i,
                            _dependencies: []
                        })), t.createElement(s, {
                            align: 0,
                            animate: !1,
                            style: "display-flex flex-direction-column",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "16"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(g, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: bold; margin-bottom: 8px;"
                            },
                            text: [o(l("r2Yxl65wUk+wtwYbEcyPGw#Value", "Real accounts are not available to politically exposed persons (PEPs)"))],
                            _idProps: {
                                service: e,
                                uuid: "17"
                            },
                            _widgetRecordProvider: i
                        }), o(l("pO86_0W3HUmaXyUXXwdp8Q#Value", "A politically exposed person (PEP) is someone appointed with a prominent public position. Close associates and family members of a PEP are also considered to be PEPs.")), t.createElement(P, {
                            getOwnerSpan: n(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: n(function(r) {
                                    d.handleError(r)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: p
                            },
                            _idProps: {
                                service: e,
                                uuid: "18",
                                alias: "5"
                            },
                            _widgetRecordProvider: i,
                            _dependencies: []
                        }), t.createElement(s, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-bottom: 16px;"
                            },
                            style: "display-flex flex-direction-column",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "19"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(s, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-bottom: 0px;"
                            },
                            style: "display-flex align-items-center gap-s checkbox-container",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "20"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(h, {
                            _validationProps: {
                                validationService: p
                            },
                            enabled: !0,
                            style: "checkbox",
                            variable: a.createVariable(c.DataTypes.DataTypes.Boolean, a.variables.pEPVar, function(r) {
                                a.variables.pEPVar = r
                            }),
                            _idProps: {
                                service: e,
                                name: "Checkbox_PEP"
                            },
                            _widgetRecordProvider: i
                        }), t.createElement(b, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "text-neutral-9",
                            targetWidget: "Checkbox_PEP",
                            _idProps: {
                                service: e,
                                uuid: "22"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(g, {
                            style: "text-neutral-9",
                            text: [o(l("fzXmFrM4eE6Ln7yxgEEoYA#Value", "I am not a PEP and have never been a PEP."))],
                            _idProps: {
                                service: e,
                                uuid: "23"
                            },
                            _widgetRecordProvider: i
                        }))), x(a.variables.validFieldsVar.pEPAttr, !1, this, function() {
                            return []
                        }, function() {
                            return [t.createElement(g, {
                                extendedProperties: {
                                    style: "margin-top: 8px;"
                                },
                                style: "text-primary",
                                text: [o(l("xMC4dNCQPU2RdjpgCxCsqQ#Value", "This is required."))],
                                _idProps: {
                                    service: e,
                                    uuid: "24"
                                },
                                _widgetRecordProvider: i
                            })]
                        })), t.createElement(s, {
                            align: 0,
                            animate: !1,
                            style: "display-flex align-items-center gap-s checkbox-container",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "25"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(h, {
                            _validationProps: {
                                validationService: p
                            },
                            enabled: !0,
                            style: "checkbox",
                            variable: a.createVariable(c.DataTypes.DataTypes.Boolean, a.variables.agreeToTermsVar, function(r) {
                                a.variables.agreeToTermsVar = r
                            }),
                            _idProps: {
                                service: e,
                                name: "Checkbox_AgreeToTerm"
                            },
                            _widgetRecordProvider: i
                        }), t.createElement(s, {
                            align: 0,
                            animate: !1,
                            style: "display-flex align-items-center",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "27"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(b, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "text-neutral-9",
                            targetWidget: "Checkbox_AgreeToTerm",
                            _idProps: {
                                service: e,
                                uuid: "28"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(g, {
                            style: "text-neutral-9",
                            text: [o(l("D9o14LjBikebVYKurajsQg#Value", "I agree to the"))],
                            _idProps: {
                                service: e,
                                uuid: "29"
                            },
                            _widgetRecordProvider: i
                        })), t.createElement(E, {
                            enabled: !0,
                            extendedProperties: {
                                target: "_blank"
                            },
                            gridProperties: {
                                marginLeft: "4px"
                            },
                            style: "text-neutral-9",
                            transition: c.Transitions.createTransition(c.Transitions.TransitionAnimation.Default),
                            url: c.Navigation.generateScreenURL("https://deriv.com/terms-and-conditions#clients", {}),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "30"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(g, {
                            extendedProperties: {
                                style: "color: #272B30; font-weight: bold; text-decoration: underline;"
                            },
                            style: "text-neutral-9",
                            text: [o(l("JPwweFvZvkOanle2ZaHzsQ#Value", "terms and conditions"))],
                            _idProps: {
                                service: e,
                                uuid: "31"
                            },
                            _widgetRecordProvider: i
                        })), t.createElement(g, {
                            style: "text-neutral-9",
                            text: ["."],
                            _idProps: {
                                service: e,
                                uuid: "32"
                            },
                            _widgetRecordProvider: i
                        }))), x(a.variables.validFieldsVar.agreeToTermsAttr, !1, this, function() {
                            return []
                        }, function() {
                            return [t.createElement(U, {
                                extendedProperties: {
                                    style: "margin-top: 8px;"
                                },
                                style: "text-primary",
                                value: c.Injector.resolve(c.ServiceNames.TranslationsService).getMessage("o0s7JrZCW0WRfnfU6Xgsdg#ValueExpression.-94666981.1", "This is required."),
                                _idProps: {
                                    service: e,
                                    uuid: "33"
                                },
                                _widgetRecordProvider: i
                            })]
                        }), x(_.getIsSpain(), !1, this, function() {
                            return [t.createElement(s, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "margin-bottom: 16px;"
                                },
                                style: "display-flex flex-direction-column",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "34"
                                },
                                _widgetRecordProvider: i
                            }, t.createElement(s, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "margin-bottom: 0px; margin-top: 16px;"
                                },
                                style: "display-flex align-items-center gap-s checkbox-container",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "35"
                                },
                                _widgetRecordProvider: i
                            }, t.createElement(h, {
                                _validationProps: {
                                    validationService: p
                                },
                                enabled: !0,
                                style: "checkbox",
                                variable: a.createVariable(c.DataTypes.DataTypes.Boolean, a.variables.spainAgreementVar, function(r) {
                                    a.variables.spainAgreementVar = r
                                }),
                                _idProps: {
                                    service: e,
                                    name: "Checkbox_Spain"
                                },
                                _widgetRecordProvider: i
                            }), t.createElement(b, {
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                targetWidget: "Checkbox_Spain",
                                _idProps: {
                                    service: e,
                                    uuid: "37"
                                },
                                _widgetRecordProvider: i
                            }, t.createElement(g, {
                                style: "text-neutral-9",
                                text: [o(l("bfzheCJXeUKMukyaueftxg#Value", "I hereby confirm that my request for opening an account with Deriv Investments (Europe) Ltd is made on my own initiative."))],
                                _idProps: {
                                    service: e,
                                    uuid: "38"
                                },
                                _widgetRecordProvider: i
                            }))), x(a.variables.validFieldsVar.spainAgreementAttr, !1, this, function() {
                                return []
                            }, function() {
                                return [t.createElement(g, {
                                    extendedProperties: {
                                        style: "margin-top: 8px;"
                                    },
                                    style: "text-primary",
                                    text: [o(l("UjFQ4fTUAkOlO+3KUyUAHQ#Value", "This is required."))],
                                    _idProps: {
                                        service: e,
                                        uuid: "39"
                                    },
                                    _widgetRecordProvider: i
                                })]
                            }))]
                        }, function() {
                            return []
                        })), t.createElement(s, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "text-align: right;"
                            },
                            style: "btn-container margin-top-base",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "40"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(O, {
                            getOwnerSpan: n(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                ShowLabelOnLoading: !0,
                                IsLoading: a.variables.isExecutingVar
                            },
                            events: {
                                _handleError: n(function(r) {
                                    d.handleError(r)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: p
                            },
                            _idProps: {
                                service: e,
                                uuid: "41",
                                alias: "6"
                            },
                            _widgetRecordProvider: i,
                            placeholders: {
                                button: new L(function() {
                                    return [t.createElement(y, {
                                        enabled: !a.variables.isExecutingVar,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        isDefault: !1,
                                        onClick: n(function() {
                                            return Promise.resolve().then(function() {
                                                var r = f.clone();
                                                return d.buttonOnClick$Action(d.callContext(r))
                                            })
                                        }, "onClick"),
                                        style: "btn btn-primary",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "42"
                                        },
                                        _widgetRecordProvider: i
                                    }, t.createElement(s, {
                                        align: 0,
                                        animate: !1,
                                        style: "osui-btn-loading__spinner-animation",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "43"
                                        },
                                        _widgetRecordProvider: i
                                    }), o(l("BWpnlDXN0EGrgGtZ3b9AKw#Value", "Create account")))]
                                })
                            },
                            _dependencies: [v(a.variables.isExecutingVar)]
                        }))), t.createElement(I, {
                            extendedProperties: {
                                style: "border-radius: 8px; padding: 0px;"
                            },
                            showPopup: a.variables.isDuplicateAccountVar,
                            style: "popup-dialog popup_account-already-exists",
                            _idProps: {
                                service: e,
                                uuid: "44"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(s, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "padding: 24px; text-align: center;" + (S.isPhone$Action(f).isPhoneOut ? ` text-align: center;\r
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
                                uuid: "45"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(s, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-bottom: 24px; text-align: right;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "46"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(E, {
                            enabled: !0,
                            onClick: n(function() {
                                var r = f.clone();
                                d.closeDuplicateAccountPopup$Action(d.callContext(r))
                            }, "onClick"),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "47"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(C, {
                            image: c.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneMDClose.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "48"
                            },
                            _widgetRecordProvider: i
                        })), t.createElement(s, {
                            align: 0,
                            animate: !0,
                            visible: a.getCachedValue(e.getId("ieja6jvSJEmadJWTrtmDlg.Visible"), function() {
                                return S.isPhone$Action(f).isPhoneOut
                            }),
                            _idProps: {
                                service: e,
                                uuid: "49"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(P, {
                            getOwnerSpan: n(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Space: R.space.small
                            },
                            events: {
                                _handleError: n(function(r) {
                                    d.handleError(r)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: p
                            },
                            _idProps: {
                                service: e,
                                uuid: "50",
                                alias: "7"
                            },
                            _widgetRecordProvider: i,
                            _dependencies: []
                        }))), t.createElement(s, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "51"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(s, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-bottom: 24px; text-align: center;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "52"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(C, {
                            image: c.Navigation.VersionedURL.getVersionedUrl("img/tradershub.illustration.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "53"
                            },
                            _widgetRecordProvider: i
                        })), t.createElement(s, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-bottom: 24px;"
                            },
                            style: "display-flex flex-direction-column gap-s",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "54"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(g, {
                            extendedProperties: {
                                style: "font-size: 18px; font-weight: bold;"
                            },
                            text: [o(l("PwNGqEkCGECFPIKR3FeqVg#Value", "Account already exists"))],
                            _idProps: {
                                service: e,
                                uuid: "55"
                            },
                            _widgetRecordProvider: i
                        }), o(l("UmktsKX6n0KmYFqdW2oPjA#Value", "If you think this is a mistake, contact us via live chat.")))), t.createElement(s, {
                            align: 0,
                            animate: !1,
                            style: "display-flex flex-direction-column gap-s",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "56"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(s, {
                            align: 0,
                            animate: !0,
                            visible: a.getCachedValue(e.getId("xrIGUibJAEeW4EpJFzC7Ag.Visible"), function() {
                                return S.isPhone$Action(f).isPhoneOut
                            }),
                            _idProps: {
                                service: e,
                                uuid: "57"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(P, {
                            getOwnerSpan: n(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Space: R.space.small
                            },
                            events: {
                                _handleError: n(function(r) {
                                    d.handleError(r)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: p
                            },
                            _idProps: {
                                service: e,
                                uuid: "58",
                                alias: "8"
                            },
                            _widgetRecordProvider: i,
                            _dependencies: []
                        })), t.createElement(y, {
                            enabled: !0,
                            extendedProperties: {
                                style: "height: 40px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            isDefault: !1,
                            onClick: n(function() {
                                try {
                                    c.Navigation.navigateTo(c.Navigation.generateScreenURL("tradershub", "personal-details", {}), c.Transitions.createTransition(c.Transitions.TransitionAnimation.Fade), null, !0)
                                } catch (r) {
                                    if (r.name !== "RedirectOccurredException") throw r
                                }
                            }, "onClick"),
                            style: "btn btn-primary full-width",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "59"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(g, {
                            extendedProperties: {
                                style: "font-weight: 500;"
                            },
                            text: [o(l("MuFyNHS4c0+5HdSI5jqy+Q#Value", "Try again"))],
                            _idProps: {
                                service: e,
                                uuid: "60"
                            },
                            _widgetRecordProvider: i
                        })), t.createElement(y, {
                            enabled: !0,
                            extendedProperties: {
                                style: "height: 40px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent",
                                marginLeft: "0"
                            },
                            isDefault: !1,
                            onClick: n(function() {
                                var r = f.clone();
                                d.liveChatOnClick$Action(d.callContext(r))
                            }, "onClick"),
                            style: "btn full-width",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "61"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(g, {
                            extendedProperties: {
                                style: "font-weight: 500;"
                            },
                            text: [o(l("QfmkX07qmkClBghhnPprPA#Value", "Live chat"))],
                            _idProps: {
                                service: e,
                                uuid: "62"
                            },
                            _widgetRecordProvider: i
                        })))))]
                    })
                },
                _dependencies: [v(a.variables.isDuplicateAccountVar), v(a.variables.isExecutingVar), v(a.variables.spainAgreementVar), v(_.getIsSpain()), v(a.variables.agreeToTermsVar), v(a.variables.validFieldsVar.spainAgreementAttr), v(a.variables.validFieldsVar.agreeToTermsAttr), v(a.variables.validFieldsVar.pEPAttr), v(a.variables.pEPVar), v(a.variables.fATCAVar)]
            }))
        }
    };
n(m, "View");
var W = m,
    ee = W;
export {
    ee as
    default
};