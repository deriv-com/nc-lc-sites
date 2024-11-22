import {
    a as V
} from "./_oschunk-X2V7XQCM.js";
import "./_oschunk-RAL2ZUKY.js";
import {
    a as N
} from "./_oschunk-MBGIZS76.js";
import {
    a as z
} from "./_oschunk-TXPNLTP2.js";
import {
    a as E
} from "./_oschunk-NFB2422O.js";
import "./_oschunk-3T2MUKOP.js";
import "./_oschunk-ILTRYJXV.js";
import {
    a as A
} from "./_oschunk-MDM6SINN.js";
import "./_oschunk-Z3EGUX6T.js";
import "./_oschunk-NJYKWZYU.js";
import "./_oschunk-SW7FWAXZ.js";
import {
    a as w
} from "./_oschunk-2FL724PB.js";
import "./_oschunk-BHZNFATE.js";
import {
    b as B,
    h as d,
    i as M,
    j as F,
    p as $,
    r as b,
    s as y,
    t as h,
    u as x,
    v as H,
    y as _
} from "./_oschunk-HUOHOHZB.js";
import "./_oschunk-Y45M2O2K.js";
import {
    a as G,
    g as U,
    i as C
} from "./_oschunk-6LASTRK7.js";
import "./_oschunk-TIJZDWYD.js";
import {
    a as m
} from "./_oschunk-27GDEXUT.js";
import {
    a as P
} from "./_oschunk-D2MH3QEK.js";
import "./_oschunk-WJ75ZXAT.js";
import "./_oschunk-3WNR72F6.js";
import "./_oschunk-X4K3PA43.js";
import {
    Ef as O,
    fd as T,
    sb as k,
    xf as L
} from "./_oschunk-HQOLQB4T.js";
import {
    ia as W
} from "./_oschunk-NTQBNJ73.js";
import {
    c as a,
    g as j
} from "./_oschunk-DVBKI63I.js";
var r = j(G());
var l = W,
    D = C.PlaceholderContent,
    J = C.IteratorPlaceholderContent,
    g = class g extends U.BaseWebScreen {
        static get displayName() {
            return "RealAccountCreation.PersonalDetailsAdditional"
        }
        static getAttributes() {
            return {
                codeFunction: "PersonalDetailsAdditional",
                functionKey: "d5ec31a8-36fc-44e7-89e0-1d6cf9910ecc",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.RealAccountCreation.PersonalDetailsAdditional.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [A, V, w, E]
        }
        get modelFactory() {
            return N
        }
        get controllerFactory() {
            return z
        }
        get title() {
            let n = this.model,
                o = this.controller,
                e = this.idService,
                u = o.validationService,
                i = o.callContext(),
                s = g.asPrimitiveValue,
                Q = g.getTranslation,
                f = this;
            return l.Injector.resolve(l.ServiceNames.TranslationsService).getMessage("qDHs1fw250SJ4B1s+ZEOzA#TitleExpression.-545367396.1", "Personal details | Deriv")
        }
        internalRender() {
            let n = this.model,
                o = this.controller,
                e = this.idService,
                u = o.validationService,
                i = this.widgetsRecordProvider,
                s = o.callContext(),
                Q = g.ifWidget,
                f = g.textWidget,
                p = g.asPrimitiveValue,
                S = g.getTranslation,
                v = this;
            return r.createElement("div", this.getRootNodeProperties(), r.createElement(A, {
                getOwnerSpan: a(function() {
                    return v.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return v.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Analytics: n.getCachedValue(e.getId("7MOohYur40+aBXzcHTPYkQ.Analytics"), function() {
                        return function() {
                            var t = new k;
                            return t.stepCodenameAttr = P.isDesktop$Action(s).isDesktopOut ? "personal_details" : "personal_details_3", t.stepNumberAttr = l.BuiltinFunctions.decimalToText(P.isDesktop$Action(s).isDesktopOut ? l.BuiltinFunctions.integerToDecimal(1) : new l.DataTypes.Decimal("0.75")), t
                        }()
                    }),
                    Title: "Personal details"
                },
                events: {
                    _handleError: a(function(t) {
                        o.handleError(t)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: u
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: i,
                placeholders: {
                    content: new D(function() {
                        return [r.createElement($, {
                            _validationProps: {
                                validationService: u
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "",
                            _idProps: {
                                service: e,
                                name: "DesktopForm"
                            },
                            _widgetRecordProvider: i
                        }, r.createElement(d, {
                            align: 0,
                            animate: !1,
                            style: "display-flex align-items-center justify-content-space-between",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "Form"
                            },
                            _widgetRecordProvider: i
                        }, r.createElement(d, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "gap: 16px;"
                            },
                            style: "display-flex flex-direction-column flex-1",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "3"
                            },
                            _widgetRecordProvider: i
                        }, r.createElement(d, {
                            align: 0,
                            animate: !1,
                            style: "",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "PlaceOfBirth"
                            },
                            _widgetRecordProvider: i
                        }, r.createElement(h, {
                            extendedProperties: {
                                style: "margin-bottom: 8px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            _idProps: {
                                service: e,
                                uuid: "5"
                            },
                            _widgetRecordProvider: i
                        }, r.createElement(_, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            text: [f(S("EHR40idFyUC47faET5+B_w#Value", "Place of birth"))],
                            _idProps: {
                                service: e,
                                uuid: "6"
                            },
                            _widgetRecordProvider: i
                        })), r.createElement(d, {
                            align: 0,
                            animate: !0,
                            visible: n.getCachedValue(e.getId("sTkhBx4csEigJzTvlNLTgQ.Visible"), function() {
                                return P.isDesktop$Action(s).isDesktopOut
                            }),
                            _idProps: {
                                service: e,
                                uuid: "7"
                            },
                            _widgetRecordProvider: i
                        }, r.createElement(V, {
                            getOwnerSpan: a(function() {
                                return v.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return v.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                StartingSelection: n.getCachedValue(e.getId("Search_PlaceOfBirth.StartingSelection"), function() {
                                    return function() {
                                        var t = new O;
                                        return t.pushAll([function() {
                                            var c = new L;
                                            return c.valueAttr = n.variables.currentResidenceVar.valueAttr, c.labelAttr = n.variables.currentResidenceVar.textAttr, c
                                        }()]), t
                                    }()
                                }, function() {
                                    return n.variables.currentResidenceVar.valueAttr
                                }, function() {
                                    return n.variables.currentResidenceVar.textAttr
                                }),
                                OptionsList: n.getCachedValue(e.getId("Search_PlaceOfBirth.OptionsList"), function() {
                                    return l.DataConversion.JSConversions.typeConvertRecordList(n.variables.residenceListVar, new O, function(t, c) {
                                        return c.valueAttr = t.valueAttr, c.labelAttr = t.textAttr, c
                                    })
                                }, function() {
                                    return n.variables.residenceListVar
                                }),
                                OptionalConfigs: n.getCachedValue(e.getId("Search_PlaceOfBirth.OptionalConfigs"), function() {
                                    return function() {
                                        var t = new T;
                                        return t.allowMultipleSelectionAttr = !1, t.isDisabledAttr = !1, t.noResultsTextAttr = "No results found", t.searchPromptAttr = "Search", t.noOptionsTextAttr = "There are no options to show", t
                                    }()
                                }),
                                Prompt: "Choose your place of birth"
                            },
                            events: {
                                _handleError: a(function(t) {
                                    o.handleError(t)
                                }, "_handleError"),
                                onChanged$Action: a(function(t, c) {
                                    var R = s.clone();
                                    o.dropdownSearchOnChanged$Action(c, o.callContext(R))
                                }, "onChanged$Action")
                            },
                            _validationProps: {
                                validationService: u,
                                validationParentId: e.getId("DesktopForm")
                            },
                            _idProps: {
                                service: e,
                                name: "Search_PlaceOfBirth",
                                alias: "2"
                            },
                            _widgetRecordProvider: i,
                            _dependencies: []
                        })), r.createElement(d, {
                            align: 0,
                            animate: !0,
                            visible: n.getCachedValue(e.getId("TL9Dse6e_EOMMwWYDkMCsg.Visible"), function() {
                                return !P.isDesktop$Action(s).isDesktopOut
                            }),
                            _idProps: {
                                service: e,
                                uuid: "9"
                            },
                            _widgetRecordProvider: i
                        }, r.createElement(w, {
                            getOwnerSpan: a(function() {
                                return v.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return v.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                AlignIconRight: !0
                            },
                            events: {
                                _handleError: a(function(t) {
                                    o.handleError(t)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: u,
                                validationParentId: e.getId("DesktopForm")
                            },
                            _idProps: {
                                service: e,
                                uuid: "10",
                                alias: "3"
                            },
                            _widgetRecordProvider: i,
                            placeholders: {
                                icon: D.Empty,
                                input: new D(function() {
                                    return [r.createElement(y, {
                                        _validationProps: {
                                            validationService: u,
                                            validationParentId: e.getId("DesktopForm")
                                        },
                                        enabled: !0,
                                        extendedEvents: {
                                            onClick: a(function() {
                                                var t = s.clone();
                                                o.openCountrySelectorPopup$Action(o.callContext(t))
                                            }, "onClick")
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        inputType: 0,
                                        mandatory: !0,
                                        maxLength: 50,
                                        prompt: "Select your place of birth",
                                        style: "form-control",
                                        variable: n.createVariable(l.DataTypes.DataTypes.Text, n.variables.selectedPlaceOfBirth_MobileVar, function(t) {
                                            n.variables.selectedPlaceOfBirth_MobileVar = t
                                        }),
                                        _idProps: {
                                            service: e,
                                            name: "Input_PlaceOfBirth"
                                        },
                                        _widgetRecordProvider: i
                                    }), r.createElement(b, {
                                        extendedEvents: {
                                            onClick: a(function() {
                                                var t = s.clone();
                                                o.openCountrySelectorPopup$Action(o.callContext(t))
                                            }, "onClick")
                                        },
                                        image: l.Navigation.VersionedURL.getVersionedUrl("img/tradershub.arrowdown.svg"),
                                        style: "cursor-pointer",
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "12"
                                        },
                                        _widgetRecordProvider: i
                                    })]
                                })
                            },
                            _dependencies: [p(n.variables.selectedPlaceOfBirth_MobileVar)]
                        }))), r.createElement(d, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-top: 0px;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "Phone"
                            },
                            _widgetRecordProvider: i
                        }, r.createElement(h, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: !0,
                            targetWidget: "Input_Phonenumber",
                            _idProps: {
                                service: e,
                                uuid: "14"
                            },
                            _widgetRecordProvider: i
                        }, r.createElement(_, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            text: [f(S("A7lrn7aDcUmg6dqEz_HCsA#Value", "Phone number"))],
                            _idProps: {
                                service: e,
                                uuid: "15"
                            },
                            _widgetRecordProvider: i
                        })), r.createElement(y, {
                            _validationProps: {
                                validationService: u,
                                validationParentId: e.getId("DesktopForm")
                            },
                            enabled: !0,
                            extendedProperties: {
                                style: "font-size: 16px; height: 48px; margin-top: 8px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: 0,
                            mandatory: !0,
                            maxLength: 50,
                            prompt: "Enter your phone number",
                            style: "form-control",
                            variable: n.createVariable(l.DataTypes.DataTypes.Text, m.getRealSignupPhone(), function(t) {
                                m.setRealSignupPhone(t)
                            }),
                            _idProps: {
                                service: e,
                                name: "Input_Phonenumber"
                            },
                            _widgetRecordProvider: i
                        })), r.createElement(d, {
                            align: 0,
                            animate: !0,
                            extendedProperties: {
                                style: "margin-top: 0px;"
                            },
                            style: "display-flex flex-direction-column gap-s position-relative date-input",
                            visible: n.getCachedValue(e.getId("AccountPurposeDesktop.Visible"), function() {
                                return P.isDesktop$Action(s).isDesktopOut
                            }),
                            _idProps: {
                                service: e,
                                name: "AccountPurposeDesktop"
                            },
                            _widgetRecordProvider: i
                        }, r.createElement(h, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: !0,
                            targetWidget: "Dropdown_AccountPurpose",
                            _idProps: {
                                service: e,
                                uuid: "18"
                            },
                            _widgetRecordProvider: i
                        }, r.createElement(_, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            text: [f(S("PIW+CcE_v0K9LPp3h3klkA#Value", "Account purpose"))],
                            _idProps: {
                                service: e,
                                uuid: "19"
                            },
                            _widgetRecordProvider: i
                        })), r.createElement(M, {
                            _validationProps: {
                                validationService: u,
                                validationParentId: e.getId("DesktopForm")
                            },
                            dropdownMode: 1,
                            emptyValue: "Choose your account purpose",
                            enabled: !0,
                            list: n.variables.accountPurposeListVar,
                            mandatory: !0,
                            style: "dropdown",
                            values: a(function(t) {
                                return t.valueAttr
                            }, "values"),
                            variable: n.createVariable(l.DataTypes.DataTypes.Text, m.getRealSignupAccountOpeningReason(), function(t) {
                                m.setRealSignupAccountOpeningReason(t)
                            }),
                            _idProps: {
                                service: e,
                                name: "Dropdown_AccountPurpose"
                            },
                            _widgetRecordProvider: i,
                            placeholders: {
                                content: new J(function(t, c) {
                                    return [r.createElement(F, {
                                        value: n.variables.accountPurposeListVar.getCurrent(c.iterationContext).labelAttr,
                                        _idProps: {
                                            service: t,
                                            uuid: "21"
                                        },
                                        _widgetRecordProvider: i,
                                        _dependencies: []
                                    })]
                                }, s, e, "1")
                            },
                            _dependencies: []
                        })))), r.createElement(d, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-top: 24px;"
                            },
                            style: "display-flex justify-content-flex-end btn-container",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "22"
                            },
                            _widgetRecordProvider: i
                        }, r.createElement(B, {
                            enabled: !0,
                            extendedProperties: {
                                style: "border-radius: 100px; border-width: 0px;"
                            },
                            isDefault: !0,
                            onClick: a(function() {
                                v.validateWidget(e.getId("DesktopForm"));
                                var t = s.clone();
                                o.saveOnClick$Action(o.callContext(t))
                            }, "onClick"),
                            style: "btn btn-primary",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "23"
                            },
                            _widgetRecordProvider: i
                        }, f(S("+k9kMWO1RUGw6xs5GGMd3A#Value", "Next"))))), r.createElement(d, {
                            align: 0,
                            animate: !0,
                            visible: n.getCachedValue(e.getId("TvVcIyb1gE6yQkhdWSKxcQ.Visible"), function() {
                                return !P.isDesktop$Action(s).isDesktopOut
                            }),
                            _idProps: {
                                service: e,
                                uuid: "24"
                            },
                            _widgetRecordProvider: i
                        }, r.createElement(H, {
                            showPopup: n.variables.isCountrySelectorPopupOpenVar,
                            style: "popup-dialog popup-dialog__mobile",
                            _idProps: {
                                service: e,
                                name: "PlaceOfBirthSelector_MobilePopup"
                            },
                            _widgetRecordProvider: i
                        }, r.createElement(d, {
                            align: 0,
                            animate: !1,
                            style: "display-flex align-items-center justify-content-space-between",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "26"
                            },
                            _widgetRecordProvider: i
                        }, r.createElement(d, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "27"
                            },
                            _widgetRecordProvider: i
                        }, r.createElement(x, {
                            enabled: !0,
                            onClick: a(function() {
                                var t = s.clone();
                                o.closeStateSelectionPopupOnClick$Action(o.callContext(t))
                            }, "onClick"),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "28"
                            },
                            _widgetRecordProvider: i
                        }, r.createElement(b, {
                            image: l.Navigation.VersionedURL.getVersionedUrl("img/tradershub.arrowleft.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "29"
                            },
                            _widgetRecordProvider: i
                        })), r.createElement(_, {
                            extendedProperties: {
                                style: "font-size: 18px; font-weight: bold;"
                            },
                            style: "margin-left-base",
                            text: [f(S("4HG04M3yyUCexTUnbew7iQ#Value", "Place of birth"))],
                            _idProps: {
                                service: e,
                                uuid: "30"
                            },
                            _widgetRecordProvider: i
                        })), r.createElement(x, {
                            enabled: !0,
                            onClick: a(function() {
                                var t = s.clone();
                                o.closeStateSelectionPopupOnClick$Action(o.callContext(t))
                            }, "onClick"),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "31"
                            },
                            _widgetRecordProvider: i
                        }, r.createElement(b, {
                            image: l.Navigation.VersionedURL.getVersionedUrl("img/tradershub.closeicon.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "32"
                            },
                            _widgetRecordProvider: i
                        }))), r.createElement(E, {
                            getOwnerSpan: a(function() {
                                return v.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return v.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                ResidenceList: n.variables.residenceListVar
                            },
                            events: {
                                _handleError: a(function(t) {
                                    o.handleError(t)
                                }, "_handleError"),
                                onClickCountry$Action: a(function(t, c) {
                                    var R = s.clone();
                                    o.placeofBirthSelectorOnClickCountry$Action(t, c, o.callContext(R))
                                }, "onClickCountry$Action")
                            },
                            _validationProps: {
                                validationService: u
                            },
                            _idProps: {
                                service: e,
                                name: "PlaceOfBirthSelector_Mobile",
                                alias: "4"
                            },
                            _widgetRecordProvider: i,
                            _dependencies: []
                        })))]
                    })
                },
                _dependencies: [p(n.variables.isCountrySelectorPopupOpenVar), p(n.variables.accountPurposeListVar), p(m.getRealSignupAccountOpeningReason()), p(m.getRealSignupPhone()), p(n.variables.selectedPlaceOfBirth_MobileVar), p(n.variables.residenceListVar), p(n.variables.currentResidenceVar.textAttr), p(n.variables.currentResidenceVar.valueAttr)]
            }))
        }
    };
a(g, "View");
var I = g,
    ce = I;
export {
    ce as
    default
};