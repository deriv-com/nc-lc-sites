import {
    a as I
} from "./_oschunk-VIFDIMHB.js";
import "./_oschunk-VG7T2MUB.js";
import {
    a as j
} from "./_oschunk-FFLPAMP4.js";
import {
    a as H
} from "./_oschunk-X3NX5Z6Y.js";
import {
    a as V
} from "./_oschunk-JDTDLRUP.js";
import "./_oschunk-EFSZ5V4R.js";
import "./_oschunk-RNXGKL75.js";
import {
    a as A
} from "./_oschunk-MD5SGUPG.js";
import "./_oschunk-DFHS2IVF.js";
import "./_oschunk-GEKOGHNU.js";
import "./_oschunk-SW7FWAXZ.js";
import {
    a as w
} from "./_oschunk-5D6SYFW4.js";
import "./_oschunk-BHZNFATE.js";
import {
    b as L,
    h as d,
    i as B,
    j as F,
    p as N,
    r as b,
    s as y,
    t as h,
    u as x,
    v as $,
    y as _
} from "./_oschunk-WAXNMQCP.js";
import "./_oschunk-LHY3WMNC.js";
import {
    a as J,
    g as U,
    i as C
} from "./_oschunk-J7LCUWB3.js";
import "./_oschunk-ESOYZIPG.js";
import {
    a as m
} from "./_oschunk-XMOR6XCC.js";
import {
    a as P
} from "./_oschunk-H7UK4VZM.js";
import "./_oschunk-JSVFHRDW.js";
import "./_oschunk-LUKJNVXR.js";
import "./_oschunk-X4K3PA43.js";
import {
    Pf as M,
    Wf as R,
    nd as k,
    wb as W
} from "./_oschunk-44PT7RP7.js";
import {
    ia as T
} from "./_oschunk-NTQBNJ73.js";
import {
    c as s,
    g as K
} from "./_oschunk-DVBKI63I.js";
var r = K(J());
var o = T,
    E = C.PlaceholderContent,
    Q = C.IteratorPlaceholderContent,
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
            return [A, I, w, V]
        }
        get modelFactory() {
            return j
        }
        get controllerFactory() {
            return H
        }
        get title() {
            let n = this.model,
                a = this.controller,
                e = this.idService,
                u = a.validationService,
                i = a.callContext(),
                c = g.asPrimitiveValue,
                z = g.getTranslation,
                S = this;
            return o.Injector.resolve(o.ServiceNames.TranslationsService).getMessage("qDHs1fw250SJ4B1s+ZEOzA#TitleExpression.-545367396.1", "Personal details | Deriv")
        }
        internalRender() {
            let n = this.model,
                a = this.controller,
                e = this.idService,
                u = a.validationService,
                i = this.widgetsRecordProvider,
                c = a.callContext(),
                z = g.ifWidget,
                S = g.textWidget,
                p = g.asPrimitiveValue,
                f = g.getTranslation,
                v = this;
            return r.createElement("div", this.getRootNodeProperties(), r.createElement(A, {
                getOwnerSpan: s(function() {
                    return v.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return v.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Analytics: n.getCachedValue(e.getId("7MOohYur40+aBXzcHTPYkQ.Analytics"), function() {
                        return function() {
                            var t = new W;
                            return t.stepCodenameAttr = P.isDesktop$Action(c).isDesktopOut ? "personal_details" : "personal_details_3", t.stepNumberAttr = o.BuiltinFunctions.decimalToText(P.isDesktop$Action(c).isDesktopOut ? o.BuiltinFunctions.integerToDecimal(1) : new o.DataTypes.Decimal("0.75")), t
                        }()
                    }),
                    Title: "Personal details"
                },
                events: {
                    _handleError: s(function(t) {
                        a.handleError(t)
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
                    content: new E(function() {
                        return [r.createElement(N, {
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
                            text: [S(f("EHR40idFyUC47faET5+B_w#Value", "Place of birth"))],
                            _idProps: {
                                service: e,
                                uuid: "6"
                            },
                            _widgetRecordProvider: i
                        })), r.createElement(d, {
                            align: 0,
                            animate: !0,
                            visible: n.getCachedValue(e.getId("sTkhBx4csEigJzTvlNLTgQ.Visible"), function() {
                                return P.isDesktop$Action(c).isDesktopOut
                            }),
                            _idProps: {
                                service: e,
                                uuid: "7"
                            },
                            _widgetRecordProvider: i
                        }, r.createElement(I, {
                            getOwnerSpan: s(function() {
                                return v.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: s(function() {
                                return v.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                StartingSelection: n.getCachedValue(e.getId("Search_PlaceOfBirth.StartingSelection"), function() {
                                    return function() {
                                        var t = new R;
                                        return t.pushAll([function() {
                                            var l = new M;
                                            return l.valueAttr = n.variables.currentResidenceVar.valueAttr, l.labelAttr = n.variables.currentResidenceVar.textAttr, l
                                        }()]), t
                                    }()
                                }, function() {
                                    return n.variables.currentResidenceVar.valueAttr
                                }, function() {
                                    return n.variables.currentResidenceVar.textAttr
                                }),
                                OptionsList: n.getCachedValue(e.getId("Search_PlaceOfBirth.OptionsList"), function() {
                                    return o.DataConversion.JSConversions.typeConvertRecordList(n.variables.residenceListVar, new R, function(t, l) {
                                        return l.valueAttr = t.valueAttr, l.labelAttr = t.textAttr, l
                                    })
                                }, function() {
                                    return n.variables.residenceListVar
                                }),
                                OptionalConfigs: n.getCachedValue(e.getId("Search_PlaceOfBirth.OptionalConfigs"), function() {
                                    return function() {
                                        var t = new k;
                                        return t.allowMultipleSelectionAttr = !1, t.isDisabledAttr = !1, t.noResultsTextAttr = o.Injector.resolve(o.ServiceNames.TranslationsService).getMessage("3B_KQjog60OiMfXJXUcumA#Value.1389000409.1", "No results found"), t.searchPromptAttr = o.Injector.resolve(o.ServiceNames.TranslationsService).getMessage("GVNRIPtOSkKnY8KasZJW6A#Value.-1822469688.1", "Search"), t.noOptionsTextAttr = o.Injector.resolve(o.ServiceNames.TranslationsService).getMessage("fuIOv5pzKEa3pZNOm0pMEw#Value.-1076950967.1", "There are no options to show"), t
                                    }()
                                }),
                                Prompt: o.Injector.resolve(o.ServiceNames.TranslationsService).getMessage("53vhobuvXU2JMDFX1_9IOw#Value.709464147.1", "Choose your place of birth")
                            },
                            events: {
                                _handleError: s(function(t) {
                                    a.handleError(t)
                                }, "_handleError"),
                                onChanged$Action: s(function(t, l) {
                                    var O = c.clone();
                                    a.dropdownSearchOnChanged$Action(l, a.callContext(O))
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
                                return !P.isDesktop$Action(c).isDesktopOut
                            }),
                            _idProps: {
                                service: e,
                                uuid: "9"
                            },
                            _widgetRecordProvider: i
                        }, r.createElement(w, {
                            getOwnerSpan: s(function() {
                                return v.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: s(function() {
                                return v.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                AlignIconRight: !0
                            },
                            events: {
                                _handleError: s(function(t) {
                                    a.handleError(t)
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
                                icon: E.Empty,
                                input: new E(function() {
                                    return [r.createElement(y, {
                                        _validationProps: {
                                            validationService: u,
                                            validationParentId: e.getId("DesktopForm")
                                        },
                                        enabled: !0,
                                        extendedEvents: {
                                            onClick: s(function() {
                                                var t = c.clone();
                                                a.openCountrySelectorPopup$Action(a.callContext(t))
                                            }, "onClick")
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        inputType: 0,
                                        mandatory: !0,
                                        maxLength: 50,
                                        prompt: o.Injector.resolve(o.ServiceNames.TranslationsService).getMessage("1FUisOaa4UWRwNj9WihmNw#ValueExpression.905177784.1", "Select your place of birth"),
                                        style: "form-control",
                                        variable: n.createVariable(o.DataTypes.DataTypes.Text, n.variables.selectedPlaceOfBirth_MobileVar, function(t) {
                                            n.variables.selectedPlaceOfBirth_MobileVar = t
                                        }),
                                        _idProps: {
                                            service: e,
                                            name: "Input_PlaceOfBirth"
                                        },
                                        _widgetRecordProvider: i
                                    }), r.createElement(b, {
                                        extendedEvents: {
                                            onClick: s(function() {
                                                var t = c.clone();
                                                a.openCountrySelectorPopup$Action(a.callContext(t))
                                            }, "onClick")
                                        },
                                        image: o.Navigation.VersionedURL.getVersionedUrl("img/tradershub.arrowdown.svg"),
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
                            text: [S(f("A7lrn7aDcUmg6dqEz_HCsA#Value", "Phone number"))],
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
                            prompt: o.Injector.resolve(o.ServiceNames.TranslationsService).getMessage("ayW46rY600+rT4OocSXPiw#ValueExpression.1223038368.1", "Enter your phone number"),
                            style: "form-control",
                            variable: n.createVariable(o.DataTypes.DataTypes.Text, m.getRealSignupPhone(), function(t) {
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
                                return P.isDesktop$Action(c).isDesktopOut
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
                            text: [S(f("PIW+CcE_v0K9LPp3h3klkA#Value", "Account purpose"))],
                            _idProps: {
                                service: e,
                                uuid: "19"
                            },
                            _widgetRecordProvider: i
                        })), r.createElement(B, {
                            _validationProps: {
                                validationService: u,
                                validationParentId: e.getId("DesktopForm")
                            },
                            dropdownMode: 1,
                            emptyValue: o.Injector.resolve(o.ServiceNames.TranslationsService).getMessage("o8V5bFpTZkiQ7esMMkXs9A#ValueExpression.115798663.1", "Choose your account purpose"),
                            enabled: !0,
                            list: n.variables.accountPurposeListVar,
                            mandatory: !0,
                            style: "dropdown",
                            values: s(function(t) {
                                return t.valueAttr
                            }, "values"),
                            variable: n.createVariable(o.DataTypes.DataTypes.Text, m.getRealSignupAccountOpeningReason(), function(t) {
                                m.setRealSignupAccountOpeningReason(t)
                            }),
                            _idProps: {
                                service: e,
                                name: "Dropdown_AccountPurpose"
                            },
                            _widgetRecordProvider: i,
                            placeholders: {
                                content: new Q(function(t, l) {
                                    return [r.createElement(F, {
                                        value: n.variables.accountPurposeListVar.getCurrent(l.iterationContext).labelAttr,
                                        _idProps: {
                                            service: t,
                                            uuid: "21"
                                        },
                                        _widgetRecordProvider: i,
                                        _dependencies: []
                                    })]
                                }, c, e, "1")
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
                        }, r.createElement(L, {
                            enabled: !0,
                            extendedProperties: {
                                style: "border-radius: 100px; border-width: 0px;"
                            },
                            isDefault: !0,
                            onClick: s(function() {
                                v.validateWidget(e.getId("DesktopForm"));
                                var t = c.clone();
                                a.saveOnClick$Action(a.callContext(t))
                            }, "onClick"),
                            style: "btn btn-primary",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "23"
                            },
                            _widgetRecordProvider: i
                        }, S(f("+k9kMWO1RUGw6xs5GGMd3A#Value", "Next"))))), r.createElement(d, {
                            align: 0,
                            animate: !0,
                            visible: n.getCachedValue(e.getId("TvVcIyb1gE6yQkhdWSKxcQ.Visible"), function() {
                                return !P.isDesktop$Action(c).isDesktopOut
                            }),
                            _idProps: {
                                service: e,
                                uuid: "24"
                            },
                            _widgetRecordProvider: i
                        }, r.createElement($, {
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
                            onClick: s(function() {
                                var t = c.clone();
                                a.closeStateSelectionPopupOnClick$Action(a.callContext(t))
                            }, "onClick"),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "28"
                            },
                            _widgetRecordProvider: i
                        }, r.createElement(b, {
                            image: o.Navigation.VersionedURL.getVersionedUrl("img/tradershub.arrowleft.svg"),
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
                            text: [S(f("4HG04M3yyUCexTUnbew7iQ#Value", "Place of birth"))],
                            _idProps: {
                                service: e,
                                uuid: "30"
                            },
                            _widgetRecordProvider: i
                        })), r.createElement(x, {
                            enabled: !0,
                            onClick: s(function() {
                                var t = c.clone();
                                a.closeStateSelectionPopupOnClick$Action(a.callContext(t))
                            }, "onClick"),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "31"
                            },
                            _widgetRecordProvider: i
                        }, r.createElement(b, {
                            image: o.Navigation.VersionedURL.getVersionedUrl("img/tradershub.closeicon.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "32"
                            },
                            _widgetRecordProvider: i
                        }))), r.createElement(V, {
                            getOwnerSpan: s(function() {
                                return v.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: s(function() {
                                return v.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                ResidenceList: n.variables.residenceListVar
                            },
                            events: {
                                _handleError: s(function(t) {
                                    a.handleError(t)
                                }, "_handleError"),
                                onClickCountry$Action: s(function(t, l) {
                                    var O = c.clone();
                                    a.placeofBirthSelectorOnClickCountry$Action(t, l, a.callContext(O))
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
s(g, "View");
var D = g,
    ce = D;
export {
    ce as
    default
};