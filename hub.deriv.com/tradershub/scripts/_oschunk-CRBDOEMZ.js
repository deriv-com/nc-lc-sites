import {
    a as w
} from "./_oschunk-7FUR4HNA.js";
import "./_oschunk-BJEMSMDT.js";
import {
    a as F
} from "./_oschunk-67EMFMCL.js";
import {
    a as L
} from "./_oschunk-MSHCEDC6.js";
import "./_oschunk-HHXALIQU.js";
import {
    a as h
} from "./_oschunk-PON5R23U.js";
import "./_oschunk-KIZC2IWB.js";
import "./_oschunk-U5BVDMC7.js";
import "./_oschunk-GRCLOXGJ.js";
import {
    a as C
} from "./_oschunk-LURWXPZ6.js";
import "./_oschunk-VWJXDAKN.js";
import {
    b as k,
    e as D,
    h as l,
    p as V,
    r as S,
    s as b,
    t as x,
    u as _,
    v as A,
    y as f
} from "./_oschunk-E7JQAU4J.js";
import "./_oschunk-5N5TJ3ES.js";
import {
    a as H,
    g as W,
    i as y
} from "./_oschunk-T77XORCW.js";
import "./_oschunk-2TPJE4AL.js";
import {
    a
} from "./_oschunk-VADNKVBQ.js";
import "./_oschunk-OOUVJ7PM.js";
import "./_oschunk-ZKKCTARK.js";
import "./_oschunk-X4K3PA43.js";
import {
    Jb as T
} from "./_oschunk-KG7LSUIA.js";
import {
    ia as I
} from "./_oschunk-5EPHB76O.js";
import {
    c as o,
    g as M
} from "./_oschunk-DVBKI63I.js";
var t = M(H());
var s = I,
    O = y.PlaceholderContent,
    Y = y.IteratorPlaceholderContent,
    u = class u extends W.BaseWebScreen {
        static get displayName() {
            return "RealAccountCreationMobile.EmploymentDetailsForm"
        }
        static getAttributes() {
            return {
                codeFunction: "EmploymentDetailsForm",
                functionKey: "d8bcb2d2-444e-412d-9602-de37f0b32c85",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.RealAccountCreationMobile.EmploymentDetailsForm.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [h, C, w]
        }
        get modelFactory() {
            return F
        }
        get controllerFactory() {
            return L
        }
        get title() {
            let d = this.model,
                n = this.controller,
                e = this.idService,
                p = n.validationService,
                i = n.callContext(),
                g = u.asPrimitiveValue,
                R = u.getTranslation,
                c = this;
            return s.Injector.resolve(s.ServiceNames.TranslationsService).getMessage("0rK82E5ELUGWAt438LMshQ#TitleExpression.1571453000.1", "Employment details | Deriv")
        }
        internalRender() {
            let d = this.model,
                n = this.controller,
                e = this.idService,
                p = n.validationService,
                i = this.widgetsRecordProvider,
                g = n.callContext(),
                R = u.ifWidget,
                c = u.textWidget,
                m = u.asPrimitiveValue,
                v = u.getTranslation,
                P = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(h, {
                getOwnerSpan: o(function() {
                    return P.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return P.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Analytics: d.getCachedValue(e.getId("GMvQsZq7rk+6xhWKLSgkIg.Analytics"), function() {
                        return function() {
                            var r = new T;
                            return r.stepCodenameAttr = "employment_details", r.stepNumberAttr = "2", r
                        }()
                    }),
                    HideTitle: !0,
                    Title: "Employment details"
                },
                events: {
                    _handleError: o(function(r) {
                        n.handleError(r)
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
                    content: new O(function() {
                        return [t.createElement(V, {
                            _validationProps: {
                                validationService: p
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "display-flex flex-direction-column ",
                            _idProps: {
                                service: e,
                                name: "Form"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(l, {
                            align: 0,
                            animate: !1,
                            style: "display-flex column-gap-s",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "2"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(l, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "gap: 16px;"
                            },
                            style: "flex-1 display-flex flex-direction-column",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "3"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(l, {
                            align: 0,
                            animate: !1,
                            style: "display-flex justify-content-space-between",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "4"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(f, {
                            extendedProperties: {
                                style: "font-size: 18px; font-style: normal; font-weight: 700; line-height: normal;"
                            },
                            text: [c(v("p+_xQizsGk2ycU2im806yA#Value", "Employment details"))],
                            _idProps: {
                                service: e,
                                uuid: "5"
                            },
                            _widgetRecordProvider: i
                        }), t.createElement(_, {
                            enabled: !0,
                            extendedProperties: {
                                style: "border-color: #333; border-style: solid; border-width: 0px;"
                            },
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter"
                            },
                            onClick: o(function() {
                                P.validateWidget(e.getId("Form"));
                                var r = g.clone();
                                n.skipOnClick$Action(n.callContext(r))
                            }, "onClick"),
                            visible: !a.getIsEuUser(),
                            _idProps: {
                                service: e,
                                uuid: "6"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(f, {
                            extendedProperties: {
                                style: "color: #333; font-style: normal; font-weight: 700; text-decoration: underline;"
                            },
                            text: [c(v("whfLQWHd4kWoMpsFqiCuJg#Value", "Skip"))],
                            _idProps: {
                                service: e,
                                uuid: "7"
                            },
                            _widgetRecordProvider: i
                        }))), t.createElement(l, {
                            align: 0,
                            animate: !1,
                            style: "display-flex flex-direction-column gap-s",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "8"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(x, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            _idProps: {
                                service: e,
                                uuid: "9"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(f, {
                            extendedProperties: {
                                style: "margin-bottom: 0px;"
                            },
                            text: [c(v("sIti02rdk0SUqtm_huV6CA#Value", "Country of tax residence"))],
                            _idProps: {
                                service: e,
                                uuid: "10"
                            },
                            _widgetRecordProvider: i
                        })), t.createElement(C, {
                            getOwnerSpan: o(function() {
                                return P.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return P.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                AlignIconRight: !0
                            },
                            events: {
                                _handleError: o(function(r) {
                                    n.handleError(r)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: p,
                                validationParentId: e.getId("Form")
                            },
                            _idProps: {
                                service: e,
                                uuid: "11",
                                alias: "2"
                            },
                            _widgetRecordProvider: i,
                            placeholders: {
                                icon: O.Empty,
                                input: new O(function() {
                                    return [t.createElement(b, {
                                        _validationProps: {
                                            validationService: p,
                                            validationParentId: e.getId("Form")
                                        },
                                        enabled: !0,
                                        extendedEvents: {
                                            onClick: o(function() {
                                                var r = g.clone();
                                                n.openCountrySelectorPopup$Action(n.callContext(r))
                                            }, "onClick")
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        inputType: 0,
                                        mandatory: !1,
                                        maxLength: 50,
                                        prompt: s.Injector.resolve(s.ServiceNames.TranslationsService).getMessage("mNaZ9lCypEmbotMSFfYDQw#ValueExpression.535405787.1", "Select your country of tax residence"),
                                        style: "form-control",
                                        variable: d.createVariable(s.DataTypes.DataTypes.Text, a.getRealSignupTaxResidenceLabel(), function(r) {
                                            a.setRealSignupTaxResidenceLabel(r)
                                        }),
                                        _idProps: {
                                            service: e,
                                            name: "Input_InputState"
                                        },
                                        _widgetRecordProvider: i
                                    }), t.createElement(S, {
                                        extendedEvents: {
                                            onClick: o(function() {
                                                var r = g.clone();
                                                n.openCountrySelectorPopup$Action(n.callContext(r))
                                            }, "onClick")
                                        },
                                        image: s.Navigation.VersionedURL.getVersionedUrl("img/tradershub.arrowdown.svg"),
                                        style: "cursor-pointer",
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "13"
                                        },
                                        _widgetRecordProvider: i
                                    })]
                                })
                            },
                            _dependencies: [m(a.getRealSignupTaxResidenceLabel())]
                        })), t.createElement(l, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-top: 0px;"
                            },
                            style: "display-flex flex-direction-column gap-s",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "14"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(x, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: !1,
                            targetWidget: "Input_TIDNumber",
                            _idProps: {
                                service: e,
                                uuid: "15"
                            },
                            _widgetRecordProvider: i
                        }, c(v("SDAz2eej7kKk2dlZUvZTQA#Value", "Tax identification number"))), t.createElement(b, {
                            _validationProps: {
                                validationService: p,
                                validationParentId: e.getId("Form")
                            },
                            enabled: !0,
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: 0,
                            mandatory: !1,
                            maxLength: 50,
                            prompt: s.Injector.resolve(s.ServiceNames.TranslationsService).getMessage("BAFe8PBq6keXbkoDVK7AZA#ValueExpression.135839553.1", "Enter your tax identification number"),
                            style: "form-control",
                            variable: d.createVariable(s.DataTypes.DataTypes.Text, a.getRealSignupTIDNumber(), function(r) {
                                a.setRealSignupTIDNumber(r)
                            }),
                            _idProps: {
                                service: e,
                                name: "Input_TIDNumber"
                            },
                            _widgetRecordProvider: i
                        })), t.createElement(l, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "17"
                            },
                            _widgetRecordProvider: i
                        }))), R(a.getRealSignupTIDNumber() !== s.BuiltinFunctions.nullTextIdentifier(), !1, this, function() {
                            return [t.createElement(l, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "margin-bottom: 0px; margin-top: 16px;"
                                },
                                style: "display-flex gap-s align-items-center checkbox-container",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "18"
                                },
                                _widgetRecordProvider: i
                            }, t.createElement(D, {
                                _validationProps: {
                                    validationService: p,
                                    validationParentId: e.getId("Form")
                                },
                                enabled: !0,
                                style: "checkbox",
                                variable: d.createVariable(s.DataTypes.DataTypes.Boolean, a.getRealSignupTaxIDConfirmation(), function(r) {
                                    a.setRealSignupTaxIDConfirmation(r)
                                }),
                                _idProps: {
                                    service: e,
                                    name: "TaxIDConfirmationCheckbox"
                                },
                                _widgetRecordProvider: i
                            }), t.createElement(x, {
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                targetWidget: "TaxIDConfirmationCheckbox",
                                _idProps: {
                                    service: e,
                                    uuid: "20"
                                },
                                _widgetRecordProvider: i
                            }, c(v("xElRVABJckWYpqQKe3AYDw#Value", "I confirm that my tax information is accurate and complete.")))), R(!d.widgets.get(e.getId("TaxIDConfirmationCheckbox")).validAttr, !1, this, function() {
                                return [t.createElement(f, {
                                    style: "text-primary",
                                    text: [c(v("isWmNsmdLEW1wfFg_Hf_DA#Value", "This is required."))],
                                    _idProps: {
                                        service: e,
                                        uuid: "21"
                                    },
                                    _widgetRecordProvider: i
                                })]
                            }, function() {
                                return []
                            })]
                        }, function() {
                            return []
                        }), t.createElement(l, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-top: 0px;"
                            },
                            style: "full-width",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "22"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(k, {
                            enabled: !0,
                            extendedProperties: {
                                style: "border-width: 0px; margin-top: 16px;"
                            },
                            isDefault: !0,
                            onClick: o(function() {
                                P.validateWidget(e.getId("Form"));
                                var r = g.clone();
                                n.saveOnClick$Action(n.callContext(r))
                            }, "onClick"),
                            style: "btn btn-primary full-width",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "23"
                            },
                            _widgetRecordProvider: i
                        }, c(v("rCVIeWryX0mkEeuLZFiPaw#Value", "Next"))))), t.createElement(A, {
                            showPopup: d.variables.isCountrySelectorPopupOpenVar,
                            style: "popup-dialog popup-dialog__mobile",
                            _idProps: {
                                service: e,
                                uuid: "24"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(l, {
                            align: 0,
                            animate: !1,
                            style: "display-flex align-items-center justify-content-space-between",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "25"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(l, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "26"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(_, {
                            enabled: !0,
                            onClick: o(function() {
                                var r = g.clone();
                                n.closeStateSelectionPopupOnClick$Action(n.callContext(r))
                            }, "onClick"),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "27"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(S, {
                            image: s.Navigation.VersionedURL.getVersionedUrl("img/tradershub.arrowleft.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "28"
                            },
                            _widgetRecordProvider: i
                        })), t.createElement(f, {
                            extendedProperties: {
                                style: "font-size: 18px; font-weight: bold;"
                            },
                            style: "margin-left-base",
                            text: [c(v("ShgNhbHOO0yw0oREmi8uGg#Value", "Country of tax residence"))],
                            _idProps: {
                                service: e,
                                uuid: "29"
                            },
                            _widgetRecordProvider: i
                        })), t.createElement(_, {
                            enabled: !0,
                            onClick: o(function() {
                                var r = g.clone();
                                n.closeStateSelectionPopupOnClick$Action(n.callContext(r))
                            }, "onClick"),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "30"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(S, {
                            image: s.Navigation.VersionedURL.getVersionedUrl("img/tradershub.closeicon.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "31"
                            },
                            _widgetRecordProvider: i
                        }))), t.createElement(w, {
                            getOwnerSpan: o(function() {
                                return P.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return P.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                ResidenceList: d.variables.residenceListVar
                            },
                            events: {
                                _handleError: o(function(r) {
                                    n.handleError(r)
                                }, "_handleError"),
                                onClickCountry$Action: o(function(r, N) {
                                    return Promise.resolve().then(function() {
                                        var U = g.clone();
                                        return n.countryOfTaxResidenceSelectorOnClickCountry$Action(r, N, n.callContext(U))
                                    })
                                }, "onClickCountry$Action")
                            },
                            _validationProps: {
                                validationService: p
                            },
                            _idProps: {
                                service: e,
                                uuid: "32",
                                alias: "3"
                            },
                            _widgetRecordProvider: i,
                            _dependencies: []
                        }))]
                    })
                },
                _dependencies: [m(d.variables.residenceListVar), m(d.variables.isCountrySelectorPopupOpenVar), m(d.widgets.get(e.getId("TaxIDConfirmationCheckbox")).validAttr), m(a.getRealSignupTaxIDConfirmation()), m(a.getRealSignupTIDNumber()), m(a.getRealSignupTaxResidenceLabel()), m(a.getIsEuUser())]
            }))
        }
    };
o(u, "View");
var E = u,
    X = E;
export {
    X as
    default
};