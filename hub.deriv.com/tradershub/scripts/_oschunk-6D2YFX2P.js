import {
    a as w
} from "./_oschunk-NFB2422O.js";
import "./_oschunk-3T2MUKOP.js";
import {
    a as F
} from "./_oschunk-7V6SLI4C.js";
import {
    a as L
} from "./_oschunk-43HUXDAG.js";
import "./_oschunk-FCTT25EN.js";
import {
    a as h
} from "./_oschunk-MDM6SINN.js";
import "./_oschunk-Z3EGUX6T.js";
import "./_oschunk-NJYKWZYU.js";
import "./_oschunk-SW7FWAXZ.js";
import {
    a as C
} from "./_oschunk-2FL724PB.js";
import "./_oschunk-BHZNFATE.js";
import {
    b as k,
    e as D,
    h as d,
    p as V,
    r as x,
    s as b,
    t as S,
    u as _,
    v as A,
    y as f
} from "./_oschunk-HUOHOHZB.js";
import "./_oschunk-Y45M2O2K.js";
import {
    a as M,
    g as T,
    i as y
} from "./_oschunk-6LASTRK7.js";
import "./_oschunk-TIJZDWYD.js";
import {
    a
} from "./_oschunk-27GDEXUT.js";
import "./_oschunk-D2MH3QEK.js";
import "./_oschunk-WJ75ZXAT.js";
import "./_oschunk-3WNR72F6.js";
import "./_oschunk-X4K3PA43.js";
import {
    sb as W
} from "./_oschunk-HQOLQB4T.js";
import {
    ia as I
} from "./_oschunk-NTQBNJ73.js";
import {
    c as o,
    g as H
} from "./_oschunk-DVBKI63I.js";
var t = H(M());
var c = I,
    O = y.PlaceholderContent,
    Y = y.IteratorPlaceholderContent,
    u = class u extends T.BaseWebScreen {
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
            let s = this.model,
                n = this.controller,
                e = this.idService,
                p = n.validationService,
                i = n.callContext(),
                g = u.asPrimitiveValue,
                R = u.getTranslation,
                l = this;
            return c.Injector.resolve(c.ServiceNames.TranslationsService).getMessage("0rK82E5ELUGWAt438LMshQ#TitleExpression.1571453000.1", "Employment details | Deriv")
        }
        internalRender() {
            let s = this.model,
                n = this.controller,
                e = this.idService,
                p = n.validationService,
                i = this.widgetsRecordProvider,
                g = n.callContext(),
                R = u.ifWidget,
                l = u.textWidget,
                P = u.asPrimitiveValue,
                m = u.getTranslation,
                v = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(h, {
                getOwnerSpan: o(function() {
                    return v.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return v.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Analytics: s.getCachedValue(e.getId("GMvQsZq7rk+6xhWKLSgkIg.Analytics"), function() {
                        return function() {
                            var r = new W;
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
                        }, t.createElement(d, {
                            align: 0,
                            animate: !1,
                            style: "display-flex column-gap-s",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "2"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(d, {
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
                        }, t.createElement(d, {
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
                            text: [l(m("p+_xQizsGk2ycU2im806yA#Value", "Employment details"))],
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
                                v.validateWidget(e.getId("Form"));
                                var r = g.clone();
                                n.skipOnClick$Action(n.callContext(r))
                            }, "onClick"),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "6"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(f, {
                            extendedProperties: {
                                style: "color: #333; font-style: normal; font-weight: 700; text-decoration: underline;"
                            },
                            text: [l(m("whfLQWHd4kWoMpsFqiCuJg#Value", "Skip"))],
                            _idProps: {
                                service: e,
                                uuid: "7"
                            },
                            _widgetRecordProvider: i
                        }))), t.createElement(d, {
                            align: 0,
                            animate: !1,
                            style: "display-flex flex-direction-column gap-s",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "8"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(S, {
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
                            text: [l(m("sIti02rdk0SUqtm_huV6CA#Value", "Country of tax residence"))],
                            _idProps: {
                                service: e,
                                uuid: "10"
                            },
                            _widgetRecordProvider: i
                        })), t.createElement(C, {
                            getOwnerSpan: o(function() {
                                return v.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return v.getChildSpan("destroy")
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
                                        prompt: "Select your country of tax residence",
                                        style: "form-control",
                                        variable: s.createVariable(c.DataTypes.DataTypes.Text, a.getRealSignupTaxResidenceLabel(), function(r) {
                                            a.setRealSignupTaxResidenceLabel(r)
                                        }),
                                        _idProps: {
                                            service: e,
                                            name: "Input_InputState"
                                        },
                                        _widgetRecordProvider: i
                                    }), t.createElement(x, {
                                        extendedEvents: {
                                            onClick: o(function() {
                                                var r = g.clone();
                                                n.openCountrySelectorPopup$Action(n.callContext(r))
                                            }, "onClick")
                                        },
                                        image: c.Navigation.VersionedURL.getVersionedUrl("img/tradershub.arrowdown.svg"),
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
                            _dependencies: [P(a.getRealSignupTaxResidenceLabel())]
                        })), t.createElement(d, {
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
                        }, t.createElement(S, {
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
                        }, l(m("SDAz2eej7kKk2dlZUvZTQA#Value", "Tax identification number"))), t.createElement(b, {
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
                            prompt: "Enter your tax identification number",
                            style: "form-control",
                            variable: s.createVariable(c.DataTypes.DataTypes.Text, a.getRealSignupTIDNumber(), function(r) {
                                a.setRealSignupTIDNumber(r)
                            }),
                            _idProps: {
                                service: e,
                                name: "Input_TIDNumber"
                            },
                            _widgetRecordProvider: i
                        })), t.createElement(d, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "17"
                            },
                            _widgetRecordProvider: i
                        }))), R(a.getRealSignupTIDNumber() !== c.BuiltinFunctions.nullTextIdentifier(), !1, this, function() {
                            return [t.createElement(d, {
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
                                variable: s.createVariable(c.DataTypes.DataTypes.Boolean, a.getRealSignupTaxIDConfirmation(), function(r) {
                                    a.setRealSignupTaxIDConfirmation(r)
                                }),
                                _idProps: {
                                    service: e,
                                    name: "TaxIDConfirmationCheckbox"
                                },
                                _widgetRecordProvider: i
                            }), t.createElement(S, {
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                targetWidget: "TaxIDConfirmationCheckbox",
                                _idProps: {
                                    service: e,
                                    uuid: "20"
                                },
                                _widgetRecordProvider: i
                            }, l(m("xElRVABJckWYpqQKe3AYDw#Value", "I confirm that my tax information is accurate and complete.")))), R(!s.widgets.get(e.getId("TaxIDConfirmationCheckbox")).validAttr, !1, this, function() {
                                return [t.createElement(f, {
                                    style: "text-primary",
                                    text: [l(m("isWmNsmdLEW1wfFg_Hf_DA#Value", "This is required."))],
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
                        }), t.createElement(d, {
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
                                v.validateWidget(e.getId("Form"));
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
                        }, l(m("rCVIeWryX0mkEeuLZFiPaw#Value", "Next"))))), t.createElement(A, {
                            showPopup: s.variables.isCountrySelectorPopupOpenVar,
                            style: "popup-dialog popup-dialog__mobile",
                            _idProps: {
                                service: e,
                                uuid: "24"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(d, {
                            align: 0,
                            animate: !1,
                            style: "display-flex align-items-center justify-content-space-between",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "25"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(d, {
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
                        }, t.createElement(x, {
                            image: c.Navigation.VersionedURL.getVersionedUrl("img/tradershub.arrowleft.svg"),
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
                            text: [l(m("ShgNhbHOO0yw0oREmi8uGg#Value", "Country of tax residence"))],
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
                        }, t.createElement(x, {
                            image: c.Navigation.VersionedURL.getVersionedUrl("img/tradershub.closeicon.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "31"
                            },
                            _widgetRecordProvider: i
                        }))), t.createElement(w, {
                            getOwnerSpan: o(function() {
                                return v.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return v.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                ResidenceList: s.variables.residenceListVar
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
                _dependencies: [P(s.variables.residenceListVar), P(s.variables.isCountrySelectorPopupOpenVar), P(s.widgets.get(e.getId("TaxIDConfirmationCheckbox")).validAttr), P(a.getRealSignupTaxIDConfirmation()), P(a.getRealSignupTIDNumber()), P(a.getRealSignupTaxResidenceLabel())]
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