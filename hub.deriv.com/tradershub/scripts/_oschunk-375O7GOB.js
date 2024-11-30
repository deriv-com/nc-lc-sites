import {
    a as z
} from "./_oschunk-PFX6AFR4.js";
import {
    a as k
} from "./_oschunk-WJZQ44Q7.js";
import {
    a as R,
    b as w
} from "./_oschunk-DI7YZ23Z.js";
import "./_oschunk-LEJHR7HF.js";
import "./_oschunk-QXMEMWPP.js";
import {
    a as x
} from "./_oschunk-VIFDIMHB.js";
import "./_oschunk-VG7T2MUB.js";
import "./_oschunk-EFSZ5V4R.js";
import "./_oschunk-7TKCLJO5.js";
import "./_oschunk-EKNLTNCL.js";
import {
    a as P
} from "./_oschunk-SUJQFUF5.js";
import "./_oschunk-LJVZHBJJ.js";
import "./_oschunk-SZLIT7QD.js";
import "./_oschunk-DNFEHUWC.js";
import "./_oschunk-BHZNFATE.js";
import {
    b as T,
    h as d,
    r as _,
    u as L,
    y as h
} from "./_oschunk-WAXNMQCP.js";
import "./_oschunk-LHY3WMNC.js";
import {
    a as B,
    g as I,
    i as b
} from "./_oschunk-J7LCUWB3.js";
import "./_oschunk-ESOYZIPG.js";
import {
    a as v
} from "./_oschunk-XMOR6XCC.js";
import {
    a as W
} from "./_oschunk-H7UK4VZM.js";
import "./_oschunk-JSVFHRDW.js";
import "./_oschunk-LUKJNVXR.js";
import "./_oschunk-X4K3PA43.js";
import {
    Pf as A,
    Wf as C,
    nd as V
} from "./_oschunk-44PT7RP7.js";
import {
    ia as E
} from "./_oschunk-NTQBNJ73.js";
import {
    c as a,
    g as U
} from "./_oschunk-DVBKI63I.js";
var r = U(B());
var o = E,
    N = b.PlaceholderContent,
    ee = b.IteratorPlaceholderContent,
    p = class p extends I.BaseWebScreen {
        static get displayName() {
            return "Signup.Citizenship"
        }
        static getAttributes() {
            return {
                codeFunction: "Citizenship",
                functionKey: "68a5c2f6-7149-4ff3-a42b-5242e6ac9713",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.Signup.Citizenship.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [P, x, R, w]
        }
        get modelFactory() {
            return z
        }
        get controllerFactory() {
            return k
        }
        get title() {
            let t = this.model,
                s = this.controller,
                e = this.idService,
                m = s.validationService,
                n = s.callContext(),
                g = p.asPrimitiveValue,
                y = p.getTranslation,
                S = this;
            return o.Injector.resolve(o.ServiceNames.TranslationsService).getMessage("9sKlaElx80+kK1JC5qyXEw#TitleExpression.-930018914.1", "Citizenship | Deriv")
        }
        internalRender() {
            let t = this.model,
                s = this.controller,
                e = this.idService,
                m = s.validationService,
                n = this.widgetsRecordProvider,
                g = s.callContext(),
                y = p.ifWidget,
                S = p.textWidget,
                l = p.asPrimitiveValue,
                f = p.getTranslation,
                u = this;
            return r.createElement("div", this.getRootNodeProperties(), r.createElement(P, {
                getOwnerSpan: a(function() {
                    return u.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return u.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: a(function(i) {
                        s.handleError(i)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: m
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: n,
                placeholders: {
                    mainContent: new N(function() {
                        return [r.createElement(d, {
                            align: 0,
                            animate: !0,
                            gridProperties: {
                                classes: "OSInline"
                            },
                            style: "main-container",
                            visible: t.getCachedValue(e.getId("hOQkrPIlOEaUyjws5dpyhQ.Visible"), function() {
                                return !W.isPhone$Action(g).isPhoneOut
                            }),
                            _idProps: {
                                service: e,
                                uuid: "1"
                            },
                            _widgetRecordProvider: n
                        }, r.createElement(d, {
                            align: 0,
                            animate: !1,
                            style: "deriv-25years-logo-container",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "LeftSideContainer"
                            },
                            _widgetRecordProvider: n
                        }, r.createElement(_, {
                            image: o.Navigation.VersionedURL.getVersionedUrl("img/tradershub.deriv25years.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "3"
                            },
                            _widgetRecordProvider: n
                        })), r.createElement(d, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "display: flex; flex-direction: column; gap: 24px;"
                            },
                            gridProperties: {
                                classes: "OSInline",
                                width: "352px"
                            },
                            style: "citizenship-container",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "RightSideContainer"
                            },
                            _widgetRecordProvider: n
                        }, r.createElement(d, {
                            align: 0,
                            animate: !1,
                            style: "content-container",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "MainContainer"
                            },
                            _widgetRecordProvider: n
                        }, r.createElement(d, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-right: 0px; margin-top: 10px;"
                            },
                            gridProperties: {
                                marginLeft: "0px"
                            },
                            style: "",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "6"
                            },
                            _widgetRecordProvider: n
                        }, r.createElement(L, {
                            enabled: !0,
                            extendedProperties: {
                                style: "height: 20px;"
                            },
                            transition: o.Transitions.createTransition(o.Transitions.TransitionAnimation.Default),
                            url: o.Navigation.generateScreenURL("tradershub", "signup/country-of-residence", {}),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "7"
                            },
                            _widgetRecordProvider: n
                        }, r.createElement(_, {
                            extendedProperties: {
                                style: "height: 24px;"
                            },
                            gridProperties: {
                                width: "20px"
                            },
                            image: o.Navigation.VersionedURL.getVersionedUrl("img/tradershub.leftArrow.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "8"
                            },
                            _widgetRecordProvider: n
                        }))), r.createElement(d, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "display: flex; flex-direction: column;"
                            },
                            gridProperties: {
                                classes: "OSInline",
                                width: "352px"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "9"
                            },
                            _widgetRecordProvider: n
                        }, r.createElement(d, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "align-items: center; display: flex; gap: 8px; height: auto; margin-bottom: 16px; padding: 0px;"
                            },
                            style: "",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "HeaderContainer"
                            },
                            _widgetRecordProvider: n
                        }, r.createElement(d, {
                            align: 0,
                            animate: !1,
                            gridProperties: {
                                marginLeft: "0px"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "11"
                            },
                            _widgetRecordProvider: n
                        }, r.createElement(h, {
                            extendedProperties: {
                                style: "font-size: 28px; font-weight: bold; margin-top: 0px; width: ;"
                            },
                            text: [S(f("2gz5iEh21EiJAuCNx36XTw#Value", "Citizenship"))],
                            _idProps: {
                                service: e,
                                uuid: "12"
                            },
                            _widgetRecordProvider: n
                        }))), r.createElement(d, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "padding: 0px;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "13"
                            },
                            _widgetRecordProvider: n
                        }, r.createElement(x, {
                            getOwnerSpan: a(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                OptionsList: t.getCachedValue(e.getId("r8glucKCsEqC1W9NlRgQTA.OptionsList"), function() {
                                    return o.DataConversion.JSConversions.typeConvertRecordList(t.variables.residenceListResponseVar.residence_listAttr, new C, function(i, c) {
                                        return c.valueAttr = i.valueAttr, c.labelAttr = i.textAttr, c
                                    })
                                }, function() {
                                    return t.variables.residenceListResponseVar.residence_listAttr
                                }),
                                Prompt: o.Injector.resolve(o.ServiceNames.TranslationsService).getMessage("haOyGh2Q20yyS8jV_7GaTA#Value.-122289221.1", "Select your citizenship"),
                                ExtendedClass: t.getCachedValue(e.getId("r8glucKCsEqC1W9NlRgQTA.ExtendedClass"), function() {
                                    return t.variables.hasUserInteractedVar && o.BuiltinFunctions.length(t.variables.selectedCitizenshipVar) === 0 || !t.variables.hasUserInteractedVar && t.variables.showErrorVar ? "not-valid" : ""
                                }, function() {
                                    return t.variables.hasUserInteractedVar
                                }, function() {
                                    return t.variables.selectedCitizenshipVar
                                }, function() {
                                    return t.variables.showErrorVar
                                }),
                                OptionalConfigs: t.getCachedValue(e.getId("r8glucKCsEqC1W9NlRgQTA.OptionalConfigs"), function() {
                                    return function() {
                                        var i = new V;
                                        return i.allowMultipleSelectionAttr = !1, i.noResultsTextAttr = o.Injector.resolve(o.ServiceNames.TranslationsService).getMessage("l3R1llsvN0mc9mXAOH+jJg#Value.-1726996070.1", "Services not available"), i.noOptionsTextAttr = o.Injector.resolve(o.ServiceNames.TranslationsService).getMessage("_ce41NHWk0mv6T36Ie1qJA#Value.-1726996070.1", "Services not available"), i
                                    }()
                                }),
                                StartingSelection: t.getCachedValue(e.getId("r8glucKCsEqC1W9NlRgQTA.StartingSelection"), function() {
                                    return function() {
                                        var i = new C;
                                        return i.pushAll([function() {
                                            var c = new A;
                                            return c.valueAttr = t.variables.selectedCitizenshipVar !== "" ? t.variables.selectedCitizenshipVar : v.getSelectedResidence(), c.labelAttr = v.getSelectedResidenceLabel(), c
                                        }()]), i
                                    }()
                                }, function() {
                                    return t.variables.selectedCitizenshipVar
                                }, function() {
                                    return v.getSelectedResidence()
                                }, function() {
                                    return v.getSelectedResidenceLabel()
                                })
                            },
                            events: {
                                _handleError: a(function(i) {
                                    s.handleError(i)
                                }, "_handleError"),
                                onChanged$Action: a(function(i, c) {
                                    var M = g.clone();
                                    s.dropdownSearchOnChanged$Action(c, s.callContext(M))
                                }, "onChanged$Action")
                            },
                            _validationProps: {
                                validationService: m
                            },
                            _idProps: {
                                service: e,
                                uuid: "14",
                                alias: "2"
                            },
                            _widgetRecordProvider: n,
                            _dependencies: []
                        }), y(t.variables.showErrorVar, !1, this, function() {
                            return [r.createElement(d, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "height: auto; margin-bottom: 24px; margin-top: 8px;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "15"
                                },
                                _widgetRecordProvider: n
                            }, r.createElement(h, {
                                extendedProperties: {
                                    style: "color: #DC2020; font-size: 12px;"
                                },
                                text: [S(f("i8wRNVo2iU+f8e08+rEzZQ#Value", "Citizenship is required."))],
                                _idProps: {
                                    service: e,
                                    uuid: "16"
                                },
                                _widgetRecordProvider: n
                            }))]
                        }, function() {
                            return [r.createElement(d, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "margin-bottom: 24px;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "17"
                                },
                                _widgetRecordProvider: n
                            }, r.createElement(h, {
                                extendedProperties: {
                                    style: "color: #6A7178; font-size: 12px;"
                                },
                                text: [S(f("LOLRMSrY+0STYMwg3tc+hg#Value", "Choose the citizenship shown on your official ID."))],
                                _idProps: {
                                    service: e,
                                    uuid: "18"
                                },
                                _widgetRecordProvider: n
                            }))]
                        })), r.createElement(d, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "padding: 0px;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "19"
                            },
                            _widgetRecordProvider: n
                        }, r.createElement(T, {
                            enabled: !0,
                            extendedProperties: {
                                style: "border-radius: 100px; height: 40px; margin-top: 0px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            isDefault: !1,
                            onClick: a(function() {
                                u.validateWidget("");
                                var i = g.clone();
                                s.onNextButtonClick$Action(s.callContext(i))
                            }, "onClick"),
                            style: "btn btn-primary ",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "20"
                            },
                            _widgetRecordProvider: n
                        }, r.createElement(h, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            text: [S(f("7LgpL4BSAka2liJWskadYw#Value", "Next"))],
                            _idProps: {
                                service: e,
                                uuid: "21"
                            },
                            _widgetRecordProvider: n
                        }))))))), r.createElement(R, {
                            getOwnerSpan: a(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                HasCloseIcon: !1,
                                Title: o.Injector.resolve(o.ServiceNames.TranslationsService).getMessage("blkXWiGKT0uJHE1RdxiTOQ#Value.-592606844.1", "Citizenship"),
                                HasBackButton: !0
                            },
                            events: {
                                _handleError: a(function(i) {
                                    s.handleError(i)
                                }, "_handleError"),
                                onBack$Action: a(function() {
                                    var i = g.clone();
                                    s.residenceSelectorOnClickBack$Action(s.callContext(i))
                                }, "onBack$Action")
                            },
                            _validationProps: {
                                validationService: m
                            },
                            _idProps: {
                                service: e,
                                uuid: "22",
                                alias: "3"
                            },
                            _widgetRecordProvider: n,
                            placeholders: {
                                content: new N(function() {
                                    return [r.createElement(d, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "background-color: white; border-radius: 8px; display: flex; flex-direction: column; margin-bottom: 0px; padding: 0 16px;"
                                        },
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "23"
                                        },
                                        _widgetRecordProvider: n
                                    }, r.createElement(w, {
                                        getOwnerSpan: a(function() {
                                            return u.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: a(function() {
                                            return u.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            ResidenceList: t.variables.residenceListResponseVar.residence_listAttr,
                                            ShouldShowCitizenshipLabel: !0,
                                            WebsiteStatus: t.variables.websiteStatusResponseVar.website_statusAttr
                                        },
                                        events: {
                                            _handleError: a(function(i) {
                                                s.handleError(i)
                                            }, "_handleError"),
                                            onClickCountry$Action: a(function(i) {
                                                var c = g.clone();
                                                s.onClickCountry$Action(i, s.callContext(c))
                                            }, "onClickCountry$Action"),
                                            onClickBack$Action: a(function() {
                                                var i = g.clone();
                                                s.residenceSelectorOnClickBack$Action(s.callContext(i))
                                            }, "onClickBack$Action")
                                        },
                                        _validationProps: {
                                            validationService: m
                                        },
                                        _idProps: {
                                            service: e,
                                            uuid: "24",
                                            alias: "4"
                                        },
                                        _widgetRecordProvider: n,
                                        _dependencies: []
                                    }))]
                                })
                            },
                            _dependencies: [l(t.variables.websiteStatusResponseVar.website_statusAttr), l(t.variables.residenceListResponseVar.residence_listAttr)]
                        })]
                    })
                },
                _dependencies: [l(t.variables.websiteStatusResponseVar.website_statusAttr), l(v.getSelectedResidenceLabel()), l(v.getSelectedResidence()), l(t.variables.showErrorVar), l(t.variables.selectedCitizenshipVar), l(t.variables.hasUserInteractedVar), l(t.variables.residenceListResponseVar.residence_listAttr)]
            }))
        }
    };
a(p, "View");
var O = p,
    te = O;
export {
    te as
    default
};