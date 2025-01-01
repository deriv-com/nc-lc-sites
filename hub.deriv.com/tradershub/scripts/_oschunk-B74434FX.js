import {
    a as L
} from "./_oschunk-RH3OHTQW.js";
import {
    a as F
} from "./_oschunk-DH2DAD37.js";
import "./_oschunk-FF7WZDTZ.js";
import "./_oschunk-ZSU2JK2M.js";
import {
    a as f
} from "./_oschunk-5ETXRNLC.js";
import "./_oschunk-4SG3ZAXH.js";
import {
    a as V
} from "./_oschunk-367MCH7Z.js";
import "./_oschunk-V52U2IZU.js";
import "./_oschunk-MOYCBUII.js";
import "./_oschunk-NYD6CGWS.js";
import {
    a as O
} from "./_oschunk-ALAP5CBN.js";
import "./_oschunk-QVXOCHAU.js";
import "./_oschunk-EROCOLS7.js";
import {
    b as h,
    e as y,
    h as a,
    j as D,
    r as R,
    t as w,
    u as S,
    v as C,
    y as g
} from "./_oschunk-42NACYKQ.js";
import "./_oschunk-2M7PXTSQ.js";
import {
    a as B,
    g as I,
    i as T
} from "./_oschunk-RKYF3TWC.js";
import "./_oschunk-K7AFM7ZW.js";
import {
    a as _
} from "./_oschunk-DOFMR6EA.js";
import {
    l as b
} from "./_oschunk-2ZI4JQLD.js";
import "./_oschunk-IKZJT3AP.js";
import "./_oschunk-X4K3PA43.js";
import {
    a as W,
    wd as U
} from "./_oschunk-MSUVGI3L.js";
import {
    ia as k
} from "./_oschunk-2JKANR6M.js";
import {
    c as n,
    g as N
} from "./_oschunk-DVBKI63I.js";
var t = N(B());
var c = k,
    E = T.PlaceholderContent,
    Z = T.IteratorPlaceholderContent,
    P = class P extends I.BaseWebScreen {
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
            return [V, f, O]
        }
        get modelFactory() {
            return L
        }
        get controllerFactory() {
            return F
        }
        get title() {
            let s = this.model,
                o = this.controller,
                e = this.idService,
                p = o.validationService,
                i = o.callContext(),
                m = P.asPrimitiveValue,
                x = P.getTranslation,
                d = this;
            return c.Injector.resolve(c.ServiceNames.TranslationsService).getMessage("I6ndCk9qJkmgABWJerHPww#TitleExpression.-1562683983.1", "Terms of use | Deriv")
        }
        internalRender() {
            let s = this.model,
                o = this.controller,
                e = this.idService,
                p = o.validationService,
                i = this.widgetsRecordProvider,
                m = o.callContext(),
                x = P.ifWidget,
                d = P.textWidget,
                v = P.asPrimitiveValue,
                l = P.getTranslation,
                u = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(V, {
                getOwnerSpan: n(function() {
                    return u.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: n(function() {
                    return u.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Title: c.Injector.resolve(c.ServiceNames.TranslationsService).getMessage("AexaNo2BOk6KEgnBjMDxDg#Value.945985687.1", "Terms of use"),
                    Analytics: s.getCachedValue(e.getId("VOwsODUdaUKApwXhNIgypg.Analytics"), function() {
                        return function() {
                            var r = new U;
                            return r.stepCodenameAttr = "terms_of_use", r.stepNumberAttr = (_.getIsEuUser() ? 6 : 4).toString(), r
                        }()
                    }, function() {
                        return _.getIsEuUser()
                    })
                },
                events: {
                    _handleError: n(function(r) {
                        o.handleError(r)
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
                    content: new E(function() {
                        return [t.createElement(a, {
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
                        }, t.createElement(a, {
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
                            text: [d(l("VusAJHa2gUa7fnWF5noIAg#Value", "Jurisdiction and choice of law"))],
                            _idProps: {
                                service: e,
                                uuid: "3"
                            },
                            _widgetRecordProvider: i
                        }), x(_.getIsEuUser(), !1, this, function() {
                            return [d(l("_+7WUwQiLk+1FTHzY_qr0A#Value", "Your account will be opened with Deriv Investments (Europe) Limited, regulated by the Malta Financial Services Authority (MFSA) and will be subject to the laws of Malta."))]
                        }, function() {
                            return [d(l("Fqd_hW2T+0ODNWGYkAbScA#Value", "Your account will be opened with Deriv (SVG) LLC, and will be subject to the laws of Saint Vincent and the Grenadines."))]
                        }), t.createElement(f, {
                            getOwnerSpan: n(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: n(function(r) {
                                    o.handleError(r)
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
                        })), t.createElement(a, {
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
                            text: [d(l("eXC3CAxTc0+k6VK++rLwlQ#Value", "Risk warning"))],
                            _idProps: {
                                service: e,
                                uuid: "6"
                            },
                            _widgetRecordProvider: i
                        }), d(l("_x0u+xX_Pk+f6Z01UcVt1g#Value", "The financial trading services offered on this site are only suitable for customers who accept the possibility of losing all the money they invest and who understand and have experience of the risk involved in the purchase of financial contracts. Transactions in financial contracts carry a high degree of risk. If the contracts you purchased expire as worthless, you will lose all your investment, which includes the contract premium.")), t.createElement(f, {
                            getOwnerSpan: n(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: n(function(r) {
                                    o.handleError(r)
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
                        })), t.createElement(a, {
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
                            text: [d(l("ym785UB6uEOv0LxAxfmlwg#Value", "FATCA declaration"))],
                            _idProps: {
                                service: e,
                                uuid: "9"
                            },
                            _widgetRecordProvider: i
                        }), t.createElement(a, {
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
                        }, t.createElement(a, {
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
                        }, t.createElement(y, {
                            _validationProps: {
                                validationService: p
                            },
                            enabled: !0,
                            style: "checkbox",
                            variable: s.createVariable(c.DataTypes.DataTypes.Boolean, s.variables.fATCAVar, function(r) {
                                s.variables.fATCAVar = r
                            }),
                            _idProps: {
                                service: e,
                                name: "Checkbox_FATCA"
                            },
                            _widgetRecordProvider: i
                        }), t.createElement(w, {
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
                            text: [d(l("8KuNfI8SCUK6L1tIHWQu_A#Value", "I declare and confirm that I am not a citizen or resident of the US for tax purposes."))],
                            _idProps: {
                                service: e,
                                uuid: "14"
                            },
                            _widgetRecordProvider: i
                        })))), t.createElement(f, {
                            getOwnerSpan: n(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: n(function(r) {
                                    o.handleError(r)
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
                        })), t.createElement(a, {
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
                            text: [d(l("r2Yxl65wUk+wtwYbEcyPGw#Value", "Real accounts are not available to politically exposed persons (PEPs)"))],
                            _idProps: {
                                service: e,
                                uuid: "17"
                            },
                            _widgetRecordProvider: i
                        }), d(l("pO86_0W3HUmaXyUXXwdp8Q#Value", "A politically exposed person (PEP) is someone appointed with a prominent public position. Close associates and family members of a PEP are also considered to be PEPs.")), t.createElement(f, {
                            getOwnerSpan: n(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: n(function(r) {
                                    o.handleError(r)
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
                        }), t.createElement(a, {
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
                        }, t.createElement(a, {
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
                        }, t.createElement(y, {
                            _validationProps: {
                                validationService: p
                            },
                            enabled: !0,
                            style: "checkbox",
                            variable: s.createVariable(c.DataTypes.DataTypes.Boolean, s.variables.pEPVar, function(r) {
                                s.variables.pEPVar = r
                            }),
                            _idProps: {
                                service: e,
                                name: "Checkbox_PEP"
                            },
                            _widgetRecordProvider: i
                        }), t.createElement(w, {
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
                            text: [d(l("fzXmFrM4eE6Ln7yxgEEoYA#Value", "I am not a PEP and have never been a PEP."))],
                            _idProps: {
                                service: e,
                                uuid: "23"
                            },
                            _widgetRecordProvider: i
                        }))), x(s.variables.validFieldsVar.pEPAttr, !1, this, function() {
                            return []
                        }, function() {
                            return [t.createElement(g, {
                                extendedProperties: {
                                    style: "margin-top: 8px;"
                                },
                                style: "text-primary",
                                text: [d(l("xMC4dNCQPU2RdjpgCxCsqQ#Value", "This is required."))],
                                _idProps: {
                                    service: e,
                                    uuid: "24"
                                },
                                _widgetRecordProvider: i
                            })]
                        })), t.createElement(a, {
                            align: 0,
                            animate: !1,
                            style: "display-flex align-items-center gap-s checkbox-container",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "25"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(y, {
                            _validationProps: {
                                validationService: p
                            },
                            enabled: !0,
                            style: "checkbox",
                            variable: s.createVariable(c.DataTypes.DataTypes.Boolean, s.variables.agreeToTermsVar, function(r) {
                                s.variables.agreeToTermsVar = r
                            }),
                            _idProps: {
                                service: e,
                                name: "Checkbox_AgreeToTerm"
                            },
                            _widgetRecordProvider: i
                        }), t.createElement(a, {
                            align: 0,
                            animate: !1,
                            style: "display-flex align-items-center",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "27"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(w, {
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
                            text: [d(l("D9o14LjBikebVYKurajsQg#Value", "I agree to the"))],
                            _idProps: {
                                service: e,
                                uuid: "29"
                            },
                            _widgetRecordProvider: i
                        })), t.createElement(S, {
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
                            text: [d(l("JPwweFvZvkOanle2ZaHzsQ#Value", "terms and conditions"))],
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
                        }))), x(s.variables.validFieldsVar.agreeToTermsAttr, !1, this, function() {
                            return []
                        }, function() {
                            return [t.createElement(D, {
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
                        }), x(_.getSelectedResidence() === "es", !1, this, function() {
                            return [t.createElement(a, {
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
                            }, t.createElement(a, {
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
                            }, t.createElement(y, {
                                _validationProps: {
                                    validationService: p
                                },
                                enabled: !0,
                                style: "checkbox",
                                variable: s.createVariable(c.DataTypes.DataTypes.Boolean, s.variables.spainAgreementVar, function(r) {
                                    s.variables.spainAgreementVar = r
                                }),
                                _idProps: {
                                    service: e,
                                    name: "Checkbox_Spain"
                                },
                                _widgetRecordProvider: i
                            }), t.createElement(w, {
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
                                text: [d(l("bfzheCJXeUKMukyaueftxg#Value", "I hereby confirm that my request for opening an account with Deriv Investments (Europe) Ltd is made on my own initiative."))],
                                _idProps: {
                                    service: e,
                                    uuid: "38"
                                },
                                _widgetRecordProvider: i
                            }))), x(s.variables.validFieldsVar.spainAgreementAttr, !1, this, function() {
                                return []
                            }, function() {
                                return [t.createElement(g, {
                                    extendedProperties: {
                                        style: "margin-top: 8px;"
                                    },
                                    style: "text-primary",
                                    text: [d(l("UjFQ4fTUAkOlO+3KUyUAHQ#Value", "This is required."))],
                                    _idProps: {
                                        service: e,
                                        uuid: "39"
                                    },
                                    _widgetRecordProvider: i
                                })]
                            }))]
                        }, function() {
                            return []
                        })), t.createElement(a, {
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
                                IsLoading: s.variables.isExecutingVar
                            },
                            events: {
                                _handleError: n(function(r) {
                                    o.handleError(r)
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
                                button: new E(function() {
                                    return [t.createElement(h, {
                                        enabled: !s.variables.isExecutingVar,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        isDefault: !1,
                                        onClick: n(function() {
                                            return Promise.resolve().then(function() {
                                                var r = m.clone();
                                                return o.buttonOnClick$Action(o.callContext(r))
                                            })
                                        }, "onClick"),
                                        style: "btn btn-primary",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "42"
                                        },
                                        _widgetRecordProvider: i
                                    }, t.createElement(a, {
                                        align: 0,
                                        animate: !1,
                                        style: "osui-btn-loading__spinner-animation",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "43"
                                        },
                                        _widgetRecordProvider: i
                                    }), d(l("BWpnlDXN0EGrgGtZ3b9AKw#Value", "Create account")))]
                                })
                            },
                            _dependencies: [v(s.variables.isExecutingVar)]
                        }))), t.createElement(C, {
                            extendedProperties: {
                                style: "border-radius: 8px; padding: 0px;"
                            },
                            showPopup: s.variables.isDuplicateAccountVar,
                            style: "popup-dialog popup_account-already-exists",
                            _idProps: {
                                service: e,
                                uuid: "44"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(a, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "padding: 24px; text-align: center;" + (b.isPhone$Action(m).isPhoneOut ? ` text-align: center;\r
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
                        }, t.createElement(a, {
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
                        }, t.createElement(S, {
                            enabled: !0,
                            onClick: n(function() {
                                var r = m.clone();
                                o.closeDuplicateAccountPopup$Action(o.callContext(r))
                            }, "onClick"),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "47"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(R, {
                            image: c.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneMDClose.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "48"
                            },
                            _widgetRecordProvider: i
                        })), t.createElement(a, {
                            align: 0,
                            animate: !0,
                            visible: s.getCachedValue(e.getId("ieja6jvSJEmadJWTrtmDlg.Visible"), function() {
                                return b.isPhone$Action(m).isPhoneOut
                            }),
                            _idProps: {
                                service: e,
                                uuid: "49"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(f, {
                            getOwnerSpan: n(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Space: W.space.small
                            },
                            events: {
                                _handleError: n(function(r) {
                                    o.handleError(r)
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
                        }))), t.createElement(a, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "51"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(a, {
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
                        }, t.createElement(R, {
                            image: c.Navigation.VersionedURL.getVersionedUrl("img/tradershub.illustration.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "53"
                            },
                            _widgetRecordProvider: i
                        })), t.createElement(a, {
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
                            text: [d(l("PwNGqEkCGECFPIKR3FeqVg#Value", "Account already exists"))],
                            _idProps: {
                                service: e,
                                uuid: "55"
                            },
                            _widgetRecordProvider: i
                        }), d(l("UmktsKX6n0KmYFqdW2oPjA#Value", "If you think this is a mistake, contact us via live chat.")))), t.createElement(a, {
                            align: 0,
                            animate: !1,
                            style: "display-flex flex-direction-column gap-s",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "56"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(a, {
                            align: 0,
                            animate: !0,
                            visible: s.getCachedValue(e.getId("xrIGUibJAEeW4EpJFzC7Ag.Visible"), function() {
                                return b.isPhone$Action(m).isPhoneOut
                            }),
                            _idProps: {
                                service: e,
                                uuid: "57"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(f, {
                            getOwnerSpan: n(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Space: W.space.small
                            },
                            events: {
                                _handleError: n(function(r) {
                                    o.handleError(r)
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
                        })), t.createElement(h, {
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
                            text: [d(l("MuFyNHS4c0+5HdSI5jqy+Q#Value", "Try again"))],
                            _idProps: {
                                service: e,
                                uuid: "60"
                            },
                            _widgetRecordProvider: i
                        })), t.createElement(h, {
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
                                var r = m.clone();
                                o.liveChatOnClick$Action(o.callContext(r))
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
                            text: [d(l("QfmkX07qmkClBghhnPprPA#Value", "Live chat"))],
                            _idProps: {
                                service: e,
                                uuid: "62"
                            },
                            _widgetRecordProvider: i
                        }))))), t.createElement(C, {
                            extendedProperties: {
                                style: "border-radius: 8px; padding: 0px;"
                            },
                            showPopup: s.variables.isAppropriatenessTestWarningPopupOppenVar,
                            style: "popup-dialog",
                            _idProps: {
                                service: e,
                                name: "AppropriatenessTestWarning"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(a, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "padding: 24px; text-align: center;" + (b.isPhone$Action(m).isPhoneOut ? ` text-align: center;\r
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
                                uuid: "64"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(a, {
                            align: 0,
                            animate: !1,
                            style: "display-flex align-items-center justify-content-space-between ",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "65"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(g, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: bold;"
                            },
                            text: ["Appropriateness test warning"],
                            _idProps: {
                                service: e,
                                uuid: "66"
                            },
                            _widgetRecordProvider: i
                        }), t.createElement(S, {
                            enabled: !0,
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter"
                            },
                            onClick: n(function() {
                                var r = m.clone();
                                o.closeLinkOnClick$Action(o.callContext(r))
                            }, "onClick"),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "67"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(R, {
                            image: c.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneMDClose.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "68"
                            },
                            _widgetRecordProvider: i
                        }))), t.createElement(a, {
                            align: 0,
                            animate: !1,
                            style: "margin-y-base",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "69"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(a, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "text-align: left;"
                            },
                            style: "margin-bottom-base",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "70"
                            },
                            _widgetRecordProvider: i
                        }, d(l("kC9ljRCCwUaP_MuYBEhTuA#Value", "In providing our services to you, we are required to obtain information from you in order to assess whether a given product or service is appropriate for you and whether you possess the experience and knowledge to understand the risks involved."))), t.createElement(a, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "text-align: left;"
                            },
                            style: "margin-bottom-base",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "71"
                            },
                            _widgetRecordProvider: i
                        }, d(l("68DTeTs990y3CW9kdJCPvw#Value", "On the basis of the information provided in relation to your knowledge and experience, we consider that the investments available via this website are not appropriate for you."))), t.createElement(a, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "text-align: left;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "72"
                            },
                            _widgetRecordProvider: i
                        }, d(l("fJj1OkN6NUKJ4nIwe_JUQQ#Value", "By clicking \u2018Accept\u2019 and proceeding with the account opening, you should note that you may be exposing yourself to risks. These risks, which may be significant, include the risk of losing the entire sum invested, and you may not have the knowledge and experience to properly assess or mitigate them.")))), t.createElement(a, {
                            align: 0,
                            animate: !1,
                            style: "display-flex flex-direction-column gap-s",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "73"
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
                                ExtendedClass: "full-width",
                                ShowLabelOnLoading: !0,
                                IsLoading: s.variables.isExecutingVar
                            },
                            events: {
                                _handleError: n(function(r) {
                                    o.handleError(r)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: p
                            },
                            _idProps: {
                                service: e,
                                name: "Btn_Accept",
                                alias: "9"
                            },
                            _widgetRecordProvider: i,
                            placeholders: {
                                button: new E(function() {
                                    return [t.createElement(h, {
                                        enabled: !0,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        isDefault: !1,
                                        onClick: n(function() {
                                            return Promise.resolve().then(function() {
                                                var r = m.clone();
                                                return o.assessmentTestWarningAction$Action(1, o.callContext(r))
                                            })
                                        }, "onClick"),
                                        style: "btn btn-primary",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "75"
                                        },
                                        _widgetRecordProvider: i
                                    }, t.createElement(a, {
                                        align: 0,
                                        animate: !1,
                                        style: "osui-btn-loading__spinner-animation",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "76"
                                        },
                                        _widgetRecordProvider: i
                                    }), d(l("39frDMUEfUO2rddGjCTEIA#Value", "Accept")))]
                                })
                            },
                            _dependencies: []
                        }), t.createElement(O, {
                            getOwnerSpan: n(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                ShowLabelOnLoading: !0,
                                ExtendedClass: "full-width",
                                IsLoading: s.variables.isExecutingVar
                            },
                            events: {
                                _handleError: n(function(r) {
                                    o.handleError(r)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: p
                            },
                            _idProps: {
                                service: e,
                                name: "Btn_Decline",
                                alias: "10"
                            },
                            _widgetRecordProvider: i,
                            placeholders: {
                                button: new E(function() {
                                    return [t.createElement(h, {
                                        enabled: !0,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        isDefault: !1,
                                        onClick: n(function() {
                                            return Promise.resolve().then(function() {
                                                var r = m.clone();
                                                return o.assessmentTestWarningAction$Action(0, o.callContext(r))
                                            })
                                        }, "onClick"),
                                        style: "btn",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "78"
                                        },
                                        _widgetRecordProvider: i
                                    }, t.createElement(a, {
                                        align: 0,
                                        animate: !1,
                                        style: "osui-btn-loading__spinner-animation",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "79"
                                        },
                                        _widgetRecordProvider: i
                                    }), d(l("NzM6OAHG9kKww3KWkjNGSw#Value", "Decline")))]
                                })
                            },
                            _dependencies: []
                        })))), t.createElement(C, {
                            extendedProperties: {
                                style: "padding: 16px;"
                            },
                            showPopup: s.variables.isRiskTolerencePopupOpenVar,
                            style: "popup-dialog",
                            _idProps: {
                                service: e,
                                uuid: "80"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(a, {
                            align: 0,
                            animate: !1,
                            style: "content-wrapper",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "ContentWrapper"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(a, {
                            align: 0,
                            animate: !1,
                            style: "",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "82"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(a, {
                            align: 0,
                            animate: !1,
                            style: "display-flex justify-content-space-between",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "83"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(g, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: bold;"
                            },
                            text: ["Risk tolerance warning"],
                            _idProps: {
                                service: e,
                                uuid: "84"
                            },
                            _widgetRecordProvider: i
                        }), t.createElement(S, {
                            enabled: !0,
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter"
                            },
                            onClick: n(function() {
                                var r = m.clone();
                                o.clickOk$Action(o.callContext(r))
                            }, "onClick"),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "85"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(R, {
                            image: c.Navigation.VersionedURL.getVersionedUrl("img/tradershub.xmarksm.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "86"
                            },
                            _widgetRecordProvider: i
                        }))), t.createElement(a, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "87"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(g, {
                            extendedProperties: {
                                style: "font-size: 14px;"
                            },
                            text: [d(l("GYXFnt+QXkuF5NnJM_IWrQ#Value", "CFDs and other financial instruments come with a high risk of losing money rapidly due to leverage. Please consider whether you understand how these instruments work and if you can afford to take the high risk of losing your money."))],
                            _idProps: {
                                service: e,
                                uuid: "88"
                            },
                            _widgetRecordProvider: i
                        })), t.createElement(a, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "89"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(g, {
                            extendedProperties: {
                                style: "font-size: 14px;"
                            },
                            text: [d(l("v2vxqfOKOECEYyRzy6bwIg#Value", "Note that you'll need to wait 24 hours before continuing."))],
                            _idProps: {
                                service: e,
                                uuid: "90"
                            },
                            _widgetRecordProvider: i
                        }))), t.createElement(a, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-top: 16px;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "91"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(h, {
                            enabled: !0,
                            extendedProperties: {
                                style: "height: 32px;"
                            },
                            isDefault: !1,
                            onClick: n(function() {
                                var r = m.clone();
                                o.clickOk$Action(o.callContext(r))
                            }, "onClick"),
                            style: "btn btn-primary full-width",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "92"
                            },
                            _widgetRecordProvider: i
                        }, d(l("_biAPd+_q0OI_G1tq57dmg#Value", "OK"))))))]
                    })
                },
                _dependencies: [v(s.variables.isRiskTolerencePopupOpenVar), v(s.variables.isAppropriatenessTestWarningPopupOppenVar), v(s.variables.isDuplicateAccountVar), v(s.variables.isExecutingVar), v(s.variables.spainAgreementVar), v(_.getSelectedResidence()), v(s.variables.agreeToTermsVar), v(s.variables.validFieldsVar.spainAgreementAttr), v(s.variables.validFieldsVar.agreeToTermsAttr), v(s.variables.validFieldsVar.pEPAttr), v(s.variables.pEPVar), v(s.variables.fATCAVar), v(_.getIsEuUser())]
            }))
        }
    };
n(P, "View");
var A = P,
    ee = A;
export {
    ee as
    default
};