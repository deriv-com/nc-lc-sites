import {
    a as R,
    b as y
} from "./_oschunk-7TW32SKN.js";
import {
    a as L
} from "./_oschunk-TQRUSMVL.js";
import "./_oschunk-2C76GG44.js";
import {
    a as U
} from "./_oschunk-OCXXXLWR.js";
import "./_oschunk-RETOQD5Z.js";
import {
    a as w
} from "./_oschunk-RRHQSMAE.js";
import "./_oschunk-OCLFI2KS.js";
import "./_oschunk-QBWPQPXH.js";
import "./_oschunk-FLQXSIWE.js";
import "./_oschunk-ZPOVFLPT.js";
import {
    a as _
} from "./_oschunk-MOYCBUII.js";
import "./_oschunk-NYD6CGWS.js";
import {
    a as x
} from "./_oschunk-YSRNYYPJ.js";
import "./_oschunk-7MRMUFUM.js";
import "./_oschunk-BWDLGS7Q.js";
import "./_oschunk-EROCOLS7.js";
import {
    b as C,
    h as d,
    r as T,
    v as k,
    y as g
} from "./_oschunk-42NACYKQ.js";
import "./_oschunk-I4RPHWEA.js";
import "./_oschunk-2M7PXTSQ.js";
import {
    a as N,
    g as I,
    i as P
} from "./_oschunk-RKYF3TWC.js";
import "./_oschunk-K7AFM7ZW.js";
import "./_oschunk-DOFMR6EA.js";
import {
    l as W
} from "./_oschunk-2ZI4JQLD.js";
import "./_oschunk-IKZJT3AP.js";
import "./_oschunk-X4K3PA43.js";
import {
    Cg as E,
    Dk as h,
    uk as A
} from "./_oschunk-MSUVGI3L.js";
import {
    ia as V
} from "./_oschunk-2JKANR6M.js";
import {
    c as a,
    g as F
} from "./_oschunk-DVBKI63I.js";
var r = F(N());
var o = V,
    M = P.PlaceholderContent,
    re = P.IteratorPlaceholderContent,
    m = class m extends I.BaseWebScreen {
        static get displayName() {
            return "Signup.CountryOfResidence"
        }
        static getAttributes() {
            return {
                codeFunction: "CountryOfResidence",
                functionKey: "16f4f725-38a5-4717-8399-55444140dd23",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.Signup.CountryOfResidence.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [x, _, w, R, y]
        }
        get modelFactory() {
            return L
        }
        get controllerFactory() {
            return U
        }
        get title() {
            let e = this.model,
                s = this.controller,
                t = this.idService,
                S = s.validationService,
                i = s.callContext(),
                l = m.asPrimitiveValue,
                b = m.getTranslation,
                p = this;
            return o.Injector.resolve(o.ServiceNames.TranslationsService).getMessage("Jff0FqU4F0eDmVVEQUDdIw#TitleExpression.-1003058815.1", "Country of residence | Deriv")
        }
        internalRender() {
            let e = this.model,
                s = this.controller,
                t = this.idService,
                S = s.validationService,
                i = this.widgetsRecordProvider,
                l = s.callContext(),
                b = m.ifWidget,
                p = m.textWidget,
                v = m.asPrimitiveValue,
                f = m.getTranslation,
                c = this;
            return r.createElement("div", this.getRootNodeProperties(), r.createElement(x, {
                getOwnerSpan: a(function() {
                    return c.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return c.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: a(function(n) {
                        s.handleError(n)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: S
                },
                _idProps: {
                    service: t,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: i,
                placeholders: {
                    mainContent: new M(function() {
                        return [b(e.variables.isLoadingVar, !1, this, function() {
                            return [r.createElement(_, {
                                getOwnerSpan: a(function() {
                                    return c.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: a(function() {
                                    return c.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {},
                                events: {
                                    _handleError: a(function(n) {
                                        s.handleError(n)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: S
                                },
                                _idProps: {
                                    service: t,
                                    uuid: "1",
                                    alias: "2"
                                },
                                _widgetRecordProvider: i,
                                _dependencies: []
                            })]
                        }, function() {
                            return [r.createElement(d, {
                                align: 0,
                                animate: !0,
                                style: "main-container",
                                visible: e.getCachedValue(t.getId("XkvjI0aEVEKO99o6+SvsfA.Visible"), function() {
                                    return !W.isPhone$Action(l).isPhoneOut
                                }),
                                _idProps: {
                                    service: t,
                                    uuid: "2"
                                },
                                _widgetRecordProvider: i
                            }, r.createElement(d, {
                                align: 0,
                                animate: !1,
                                style: "deriv-25years-logo-container",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "LeftSideContainer"
                                },
                                _widgetRecordProvider: i
                            }, r.createElement(T, {
                                image: o.Navigation.VersionedURL.getVersionedUrl("img/tradershub.deriv25years.svg"),
                                type: 0,
                                _idProps: {
                                    service: t,
                                    uuid: "4"
                                },
                                _widgetRecordProvider: i
                            })), r.createElement(d, {
                                align: 0,
                                animate: !1,
                                gridProperties: {
                                    classes: "OSInline"
                                },
                                style: "country-of-residence-container",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "RightSideContainer"
                                },
                                _widgetRecordProvider: i
                            }, r.createElement(d, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "display: flex; flex-direction: column; gap: 24px;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "352px"
                                },
                                style: "country-of-residence-dropdown",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "MainContainer"
                                },
                                _widgetRecordProvider: i
                            }, r.createElement(d, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "HeaderContainer"
                                },
                                _widgetRecordProvider: i
                            }, r.createElement(g, {
                                extendedProperties: {
                                    style: "font-size: 28px; font-weight: bold; margin-top: 0px;"
                                },
                                text: [p(f("sR7Yo0m3s0eNLkqsdI+gkA#Value", "Country of residence"))],
                                _idProps: {
                                    service: t,
                                    uuid: "8"
                                },
                                _widgetRecordProvider: i
                            })), r.createElement(d, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "padding: 0px;"
                                },
                                style: "",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "9"
                                },
                                _widgetRecordProvider: i
                            }, r.createElement(w, {
                                getOwnerSpan: a(function() {
                                    return c.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: a(function() {
                                    return c.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    OptionalConfigs: e.getCachedValue(t.getId("ti5l9nPyNkG05hKkI9Fl+g.OptionalConfigs"), function() {
                                        return function() {
                                            var n = new E;
                                            return n.allowMultipleSelectionAttr = !1, n.isDisabledAttr = !1, n.noResultsTextAttr = o.Injector.resolve(o.ServiceNames.TranslationsService).getMessage("PwA5m7KEv0+nTrl+mxRorw#Value.-517233753.1", "No result was found"), n.noOptionsTextAttr = o.Injector.resolve(o.ServiceNames.TranslationsService).getMessage("4ohRNLrJzUuSpgd_ZzFtgw#Value.-1076950967.1", "There are no options to show"), n
                                        }()
                                    }),
                                    ExtendedClass: e.getCachedValue(t.getId("ti5l9nPyNkG05hKkI9Fl+g.ExtendedClass"), function() {
                                        return e.variables.showErrorVar || e.variables.showUnavailableServiceErrorVar ? "not-valid" : ""
                                    }, function() {
                                        return e.variables.showErrorVar
                                    }, function() {
                                        return e.variables.showUnavailableServiceErrorVar
                                    }),
                                    Prompt: o.Injector.resolve(o.ServiceNames.TranslationsService).getMessage("nLtVd0C+0U6Ot+cJMU65hg#Value.830386192.1", "Select your country of residence"),
                                    StartingSelection: e.getCachedValue(t.getId("ti5l9nPyNkG05hKkI9Fl+g.StartingSelection"), function() {
                                        return function() {
                                            var n = new h;
                                            return n.pushAll([function() {
                                                var u = new A;
                                                return u.valueAttr = e.variables.selectedResidenceVar !== "" ? e.variables.selectedResidenceVar : e.variables.websiteStatusClientCountryVar.getCurrent(l.iterationContext).valueAttr, u.labelAttr = e.variables.selectedResidenceVar !== "" ? e.variables.selectedResidenceVar : e.variables.websiteStatusClientCountryVar.getCurrent(l.iterationContext).labelAttr, u
                                            }()]), n
                                        }()
                                    }, function() {
                                        return e.variables.selectedResidenceVar
                                    }, function() {
                                        return e.variables.websiteStatusClientCountryVar.getCurrent(l.iterationContext).valueAttr
                                    }, function() {
                                        return e.variables.websiteStatusClientCountryVar.getCurrent(l.iterationContext).labelAttr
                                    }),
                                    OptionsList: e.getCachedValue(t.getId("ti5l9nPyNkG05hKkI9Fl+g.OptionsList"), function() {
                                        return o.DataConversion.JSConversions.typeConvertRecordList(e.variables.residenceListResponseVar.residence_listAttr, new h, function(n, u) {
                                            return u.valueAttr = n.valueAttr, u.labelAttr = n.textAttr, u
                                        })
                                    }, function() {
                                        return e.variables.residenceListResponseVar.residence_listAttr
                                    })
                                },
                                events: {
                                    _handleError: a(function(n) {
                                        s.handleError(n)
                                    }, "_handleError"),
                                    onChanged$Action: a(function(n, u) {
                                        var D = l.clone();
                                        s.dropdownSearchOnChanged$Action(u, u.getCurrent(l.iterationContext).valueAttr, s.callContext(D))
                                    }, "onChanged$Action")
                                },
                                _validationProps: {
                                    validationService: S
                                },
                                _idProps: {
                                    service: t,
                                    uuid: "10",
                                    alias: "3"
                                },
                                _widgetRecordProvider: i,
                                _dependencies: []
                            }), b(e.variables.showUnavailableServiceErrorVar, !1, this, function() {
                                return [r.createElement(d, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "margin-top: 8px;"
                                    },
                                    visible: !0,
                                    _idProps: {
                                        service: t,
                                        uuid: "11"
                                    },
                                    _widgetRecordProvider: i
                                }, r.createElement(g, {
                                    extendedProperties: {
                                        style: "color: #DC2020; font-size: 12px;"
                                    },
                                    text: [p(f("2408L6o770mGuWQSZcKfZg#Value", "Services not available"))],
                                    _idProps: {
                                        service: t,
                                        uuid: "12"
                                    },
                                    _widgetRecordProvider: i
                                }))]
                            }, function() {
                                return [b(e.variables.showErrorVar, !1, this, function() {
                                    return [r.createElement(d, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "margin-top: 8px;"
                                        },
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "13"
                                        },
                                        _widgetRecordProvider: i
                                    }, r.createElement(g, {
                                        extendedProperties: {
                                            style: "color: #DC2020; font-size: 12px;"
                                        },
                                        text: [p(f("iOuHZkvkTUuFZiee8Sr1lA#Value", "Country of residence is required."))],
                                        _idProps: {
                                            service: t,
                                            uuid: "14"
                                        },
                                        _widgetRecordProvider: i
                                    }))]
                                }, function() {
                                    return []
                                })]
                            })), r.createElement(d, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "padding: 0px;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "15"
                                },
                                _widgetRecordProvider: i
                            }, r.createElement(C, {
                                enabled: !0,
                                extendedProperties: {
                                    style: "border-radius: 100px; height: 40px; margin-top: 0px;"
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                isDefault: !1,
                                onClick: a(function() {
                                    c.validateWidget("");
                                    var n = l.clone();
                                    s.onNextButtonClick$Action(s.callContext(n))
                                }, "onClick"),
                                style: "btn btn-primary ",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "16"
                                },
                                _widgetRecordProvider: i
                            }, r.createElement(g, {
                                extendedProperties: {
                                    style: "font-size: 16px;"
                                },
                                text: [p(f("SJ_chKdt+kiCDNK3Szj_cQ#Value", "Next"))],
                                _idProps: {
                                    service: t,
                                    uuid: "17"
                                },
                                _widgetRecordProvider: i
                            })))))), r.createElement(k, {
                                extendedProperties: {
                                    style: "border-radius: 8px; padding: 16px;"
                                },
                                showPopup: e.variables.showPopupVar,
                                style: "popup-dialog",
                                _idProps: {
                                    service: t,
                                    uuid: "18"
                                },
                                _widgetRecordProvider: i
                            }, r.createElement(d, {
                                align: 0,
                                animate: !1,
                                style: "popup-container",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "19"
                                },
                                _widgetRecordProvider: i
                            }, r.createElement(d, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "font-size: 16px;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "Header"
                                },
                                _widgetRecordProvider: i
                            }, r.createElement(g, {
                                extendedProperties: {
                                    style: "font-weight: bold;"
                                },
                                text: [p(f("QbxMAt2pjUS9L6xrI65SSw#Value", "Confirmation"))],
                                _idProps: {
                                    service: t,
                                    uuid: "21"
                                },
                                _widgetRecordProvider: i
                            })), r.createElement(d, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "22"
                                },
                                _widgetRecordProvider: i
                            }, r.createElement(g, {
                                extendedProperties: {
                                    style: "line-height: 22px;"
                                },
                                style: "",
                                text: [p(f("OgMmeF3pdUu8w8pIePT0qw#Value", `I confirm that I initiated the request to open an account with Deriv to trade OTC products issued and offered exclusively outside Brazil. I understand that Deriv is not regulated by the CVM, and I am establishing a relationship with a foreign company.
Confirmation is required.`))],
                                _idProps: {
                                    service: t,
                                    uuid: "23"
                                },
                                _widgetRecordProvider: i
                            })), r.createElement(d, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "border-radius: 0px;"
                                },
                                style: "button-container",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "24"
                                },
                                _widgetRecordProvider: i
                            }, r.createElement(C, {
                                enabled: !0,
                                extendedProperties: {
                                    style: "border-radius: 100px; color: #FF444F; height: 32px; padding: 0px 8px 0px 8px;"
                                },
                                gridProperties: {
                                    width: "76px",
                                    marginLeft: "0"
                                },
                                isDefault: !1,
                                onClick: a(function() {
                                    c.validateWidget("");
                                    var n = l.clone();
                                    s.onCancelClick$Action(s.callContext(n))
                                }, "onClick"),
                                style: "btn",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "CancelButton"
                                },
                                _widgetRecordProvider: i
                            }, r.createElement(g, {
                                extendedProperties: {
                                    style: "color: #FF444F; font-size: 12px;"
                                },
                                text: [p(f("MWeiXqNTnka9q3inbFZ9mg#Value", "Cancel"))],
                                _idProps: {
                                    service: t,
                                    uuid: "26"
                                },
                                _widgetRecordProvider: i
                            })), r.createElement(C, {
                                enabled: !0,
                                extendedProperties: {
                                    style: "border-radius: 100px; height: 32px; padding: 0px 8px 0px 8px;"
                                },
                                gridProperties: {
                                    width: "76px",
                                    marginLeft: "8px"
                                },
                                isDefault: !1,
                                onClick: a(function() {
                                    try {
                                        o.Navigation.navigateTo(o.Navigation.generateScreenURL("tradershub", "signup/citizenship", {}), o.Transitions.createTransition(o.Transitions.TransitionAnimation.Fade), null, !0)
                                    } catch (n) {
                                        if (n.name !== "RedirectOccurredException") throw n
                                    }
                                }, "onClick"),
                                style: "btn-primary btn",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "ConfirmButton"
                                },
                                _widgetRecordProvider: i
                            }, r.createElement(g, {
                                extendedProperties: {
                                    style: "border-style: solid; border-width: 0px; font-size: 12px; font-weight: 500;"
                                },
                                text: [p(f("n6p+_0cjbkSzOWGYz9OGaA#Value", "Confirm"))],
                                _idProps: {
                                    service: t,
                                    uuid: "28"
                                },
                                _widgetRecordProvider: i
                            }))))), r.createElement(R, {
                                getOwnerSpan: a(function() {
                                    return c.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: a(function() {
                                    return c.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    HasCloseIcon: !1,
                                    Title: o.Injector.resolve(o.ServiceNames.TranslationsService).getMessage("DbsG4eAw00iUDHHl7ueYvg#Value.-925459353.1", "Country of residence"),
                                    HasBackButton: !1
                                },
                                events: {
                                    _handleError: a(function(n) {
                                        s.handleError(n)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: S
                                },
                                _idProps: {
                                    service: t,
                                    uuid: "29",
                                    alias: "4"
                                },
                                _widgetRecordProvider: i,
                                placeholders: {
                                    content: new M(function() {
                                        return [r.createElement(d, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "background-color: white; border-radius: 8px; display: flex; flex-direction: column; margin-bottom: 0px; padding: 0 16px;"
                                            },
                                            style: "",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "30"
                                            },
                                            _widgetRecordProvider: i
                                        }, r.createElement(y, {
                                            getOwnerSpan: a(function() {
                                                return c.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: a(function() {
                                                return c.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                WebsiteStatus: e.variables.websiteStatusResponseVar.website_statusAttr,
                                                ShouldShowUnaviableMessage: !0,
                                                ResidenceList: e.variables.residenceListResponseVar.residence_listAttr
                                            },
                                            events: {
                                                _handleError: a(function(n) {
                                                    s.handleError(n)
                                                }, "_handleError"),
                                                onClickCountry$Action: a(function(n) {
                                                    var u = l.clone();
                                                    s.onClickCountry$Action(n, s.callContext(u))
                                                }, "onClickCountry$Action")
                                            },
                                            _validationProps: {
                                                validationService: S
                                            },
                                            _idProps: {
                                                service: t,
                                                uuid: "31",
                                                alias: "5"
                                            },
                                            _widgetRecordProvider: i,
                                            _dependencies: []
                                        }))]
                                    })
                                },
                                _dependencies: [v(e.variables.residenceListResponseVar.residence_listAttr), v(e.variables.websiteStatusResponseVar.website_statusAttr)]
                            })]
                        })]
                    })
                },
                _dependencies: [v(e.variables.websiteStatusResponseVar.website_statusAttr), v(e.variables.showPopupVar), v(e.variables.residenceListResponseVar.residence_listAttr), v(e.variables.websiteStatusClientCountryVar.getCurrent(l.iterationContext).labelAttr), v(e.variables.websiteStatusClientCountryVar.getCurrent(l.iterationContext).valueAttr), v(e.variables.selectedResidenceVar), v(e.variables.showUnavailableServiceErrorVar), v(e.variables.showErrorVar), v(e.variables.isLoadingVar)]
            }))
        }
    };
a(m, "View");
var O = m,
    ie = O;
export {
    ie as
    default
};