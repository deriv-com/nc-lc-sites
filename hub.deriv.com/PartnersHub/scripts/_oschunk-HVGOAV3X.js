import {
    a as y,
    b as O
} from "./_oschunk-NKEL6DMI.js";
import {
    a as R
} from "./_oschunk-Q33ICBKD.js";
import {
    a as L
} from "./_oschunk-GFZL4NE3.js";
import "./_oschunk-YRXWDPRR.js";
import "./_oschunk-CXNBRKWX.js";
import {
    a as D
} from "./_oschunk-JLAUK5EG.js";
import "./_oschunk-KUPQSJYJ.js";
import {
    a as x
} from "./_oschunk-B5VQOPQY.js";
import "./_oschunk-PISKEOZB.js";
import "./_oschunk-B2TFZ35O.js";
import {
    a as b
} from "./_oschunk-PS756QVO.js";
import "./_oschunk-GPU7XYUR.js";
import {
    a as w
} from "./_oschunk-6ARGEN4O.js";
import "./_oschunk-OOK37A5O.js";
import "./_oschunk-QLPTYLG6.js";
import "./_oschunk-ANY3DTL7.js";
import {
    a as P
} from "./_oschunk-ND5NIK2B.js";
import "./_oschunk-4YFBPYRH.js";
import "./_oschunk-NR4KXK35.js";
import {
    d as l,
    n as C,
    u as h
} from "./_oschunk-5HXBKFJV.js";
import "./_oschunk-D7X2Q6KG.js";
import "./_oschunk-6WALBPGV.js";
import {
    a as U,
    g as f,
    i as _
} from "./_oschunk-2Q3BG5XZ.js";
import "./_oschunk-Y3C3IKDF.js";
import "./_oschunk-GP4JCHX2.js";
import "./_oschunk-FZ6FUHBV.js";
import "./_oschunk-S5DOOZ7G.js";
import {
    Ff as k,
    _c as W,
    qb as H
} from "./_oschunk-5FYEKNKX.js";
import {
    ia as I
} from "./_oschunk-5KJVGEL7.js";
import {
    c as t,
    h as M
} from "./_oschunk-QHO7QY6K.js";
var n = M(U());
var d = I,
    m = _.PlaceholderContent,
    ne = _.IteratorPlaceholderContent,
    v = class v extends f.BaseWebScreen {
        static get displayName() {
            return "VirtualAccountCreation.Citizenship"
        }
        static getAttributes() {
            return {
                codeFunction: "Citizenship",
                functionKey: "54768bfe-ce10-49c4-920d-75aeed09cbaa",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/PartnersHub.PHubTest.css", "css/PartnersHub.VirtualAccountCreation.Citizenship.css", "css/PartnersHub.PHubTest.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [R, w, y, P, b, x, O]
        }
        get modelFactory() {
            return L
        }
        get controllerFactory() {
            return D
        }
        get title() {
            return f.BaseWebScreen.getTranslation("_ot2VBDOxEmSDXWu7QnLqg#Title", "Citizenship")
        }
        internalRender() {
            let i = this.model,
                a = this.controller,
                r = this.idService,
                u = a.validationService,
                s = this.widgetsRecordProvider,
                g = a.callContext(),
                z = v.ifWidget,
                A = v.textWidget,
                c = v.asPrimitiveValue,
                E = v.getTranslation,
                o = this;
            return n.createElement("div", this.getRootNodeProperties(), n.createElement(R, {
                getOwnerSpan: t(function() {
                    return o.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: t(function() {
                    return o.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: t(function(e) {
                        a.handleError(e)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: u
                },
                _idProps: {
                    service: r,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: s,
                placeholders: {
                    mainContent: new m(function() {
                        return [n.createElement(w, {
                            getOwnerSpan: t(function() {
                                return o.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: t(function() {
                                return o.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: t(function(e) {
                                    a.handleError(e)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: u
                            },
                            _idProps: {
                                service: r,
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: s,
                            placeholders: {
                                desktopContent: new m(function() {
                                    return [n.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "display: flex;"
                                        },
                                        gridProperties: {
                                            classes: "OSInline"
                                        },
                                        visible: !0,
                                        _idProps: {
                                            service: r,
                                            uuid: "2"
                                        },
                                        _widgetRecordProvider: s
                                    }, n.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "align-items: center; display: flex; height: 100vh; justify-content: center;"
                                        },
                                        gridProperties: {
                                            classes: "OSInline",
                                            width: "50vw"
                                        },
                                        visible: !0,
                                        _idProps: {
                                            service: r,
                                            name: "LogoContainer"
                                        },
                                        _widgetRecordProvider: s
                                    }, n.createElement(C, {
                                        extendedProperties: {
                                            style: "height: 32px;"
                                        },
                                        gridProperties: {
                                            width: "286px"
                                        },
                                        image: d.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.deriv25years.png"),
                                        type: 0,
                                        _idProps: {
                                            service: r,
                                            uuid: "4"
                                        },
                                        _widgetRecordProvider: s
                                    })), n.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "align-items: center; background-color: #F8F9FA; display: flex; height: 100vh; justify-content: center;"
                                        },
                                        gridProperties: {
                                            classes: "OSInline",
                                            width: "50vw"
                                        },
                                        visible: !0,
                                        _idProps: {
                                            service: r,
                                            uuid: "5"
                                        },
                                        _widgetRecordProvider: s
                                    }, n.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "display: flex;"
                                        },
                                        gridProperties: {
                                            classes: "OSInline",
                                            width: "392px"
                                        },
                                        visible: !0,
                                        _idProps: {
                                            service: r,
                                            uuid: "6"
                                        },
                                        _widgetRecordProvider: s
                                    }, n.createElement(C, {
                                        extendedEvents: {
                                            onClick: t(function() {
                                                var e = g.clone();
                                                a.onClickBack$Action(a.callContext(e))
                                            }, "onClick")
                                        },
                                        extendedProperties: {
                                            style: "cursor: pointer; height: 34px; margin-right: 16px; margin-top: 4px;"
                                        },
                                        gridProperties: {
                                            width: "14px"
                                        },
                                        image: d.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.arrowleft.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: r,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: s
                                    }), n.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "display: flex; flex-direction: column; gap: 24px;"
                                        },
                                        gridProperties: {
                                            classes: "OSInline",
                                            width: "100%"
                                        },
                                        style: "country-of-residence-dropdown",
                                        visible: !0,
                                        _idProps: {
                                            service: r,
                                            name: "MainContainer"
                                        },
                                        _widgetRecordProvider: s
                                    }, n.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "align-items: center; display: flex; gap: 8px; height: auto; margin-bottom: 0px;"
                                        },
                                        visible: !0,
                                        _idProps: {
                                            service: r,
                                            name: "HeaderContainer"
                                        },
                                        _widgetRecordProvider: s
                                    }, n.createElement(h, {
                                        extendedProperties: {
                                            style: "font-size: 28px; font-weight: bold; margin-top: 0px; width: ;"
                                        },
                                        text: [A(E("Dvlnn52Fpkygi+VBXSS2Dw#Value", "Citizenship"))],
                                        _idProps: {
                                            service: r,
                                            uuid: "10"
                                        },
                                        _widgetRecordProvider: s
                                    })), n.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "display: flex; flex-direction: column; gap: 8px;"
                                        },
                                        visible: !0,
                                        _idProps: {
                                            service: r,
                                            uuid: "11"
                                        },
                                        _widgetRecordProvider: s
                                    }, n.createElement(y, {
                                        getOwnerSpan: t(function() {
                                            return o.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: t(function() {
                                            return o.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            Prompt: d.Injector.resolve(d.ServiceNames.TranslationsService).getMessage("e0ZkSI_tx0C4JE2x_02BfA#Value.-122289221.1", "Select your citizenship"),
                                            OptionsList: i.getCachedValue(r.getId("OKXvRvi6wECG5a3i1SGcWg.OptionsList"), function() {
                                                return d.DataConversion.JSConversions.typeConvertRecordList(i.variables.residenceListResponseVar.residence_listAttr, new k, function(e, p) {
                                                    return p.valueAttr = e.valueAttr, p.labelAttr = e.textAttr, p
                                                })
                                            }, function() {
                                                return i.variables.residenceListResponseVar.residence_listAttr
                                            }),
                                            OptionalConfigs: i.getCachedValue(r.getId("OKXvRvi6wECG5a3i1SGcWg.OptionalConfigs"), function() {
                                                return function() {
                                                    var e = new W;
                                                    return e.noResultsTextAttr = d.Injector.resolve(d.ServiceNames.TranslationsService).getMessage("mZWPxcZ8pUaBV52DCuAaPg#Value.-1726996070.1", "Services not available"), e.noOptionsTextAttr = d.Injector.resolve(d.ServiceNames.TranslationsService).getMessage("VOklgSMAAUC0R0Un9xFeBw#Value.-1726996070.1", "Services not available"), e
                                                }()
                                            })
                                        },
                                        events: {
                                            _handleError: t(function(e) {
                                                a.handleError(e)
                                            }, "_handleError"),
                                            onChanged$Action: t(function(e, p) {
                                                var T = g.clone();
                                                a.dropdownSearchOnChanged$Action(d.DataConversion.JSConversions.typeConvertRecord(p.getCurrent(g.iterationContext), new H, function(B, S) {
                                                    return S.valueAttr = B.valueAttr, S.selectedAttr = i.variables.desktopSelectedCitizenshipVar.valueAttr, S
                                                }), a.callContext(T))
                                            }, "onChanged$Action")
                                        },
                                        _validationProps: {
                                            validationService: u
                                        },
                                        _idProps: {
                                            service: r,
                                            uuid: "12",
                                            alias: "3"
                                        },
                                        _widgetRecordProvider: s,
                                        _dependencies: []
                                    }), n.createElement(h, {
                                        extendedProperties: {
                                            style: "color: #6A7178; font-weight: 400; line-height: 21px;"
                                        },
                                        text: [A(E("ErifJ+AR6Eax2K9Df+hCjQ#Value", "Choose the citizenship/nationality shown on your official ID."))],
                                        _idProps: {
                                            service: r,
                                            uuid: "13"
                                        },
                                        _widgetRecordProvider: s
                                    })), n.createElement(P, {
                                        getOwnerSpan: t(function() {
                                            return o.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: t(function() {
                                            return o.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            enabled: i.getCachedValue(r.getId("Rtj6gyJbz0WOdwkq2J0+hw.enabled"), function() {
                                                return i.variables.desktopSelectedCitizenshipVar.valueAttr !== ""
                                            }, function() {
                                                return i.variables.desktopSelectedCitizenshipVar.valueAttr
                                            }),
                                            title: "Next"
                                        },
                                        events: {
                                            _handleError: t(function(e) {
                                                a.handleError(e)
                                            }, "_handleError"),
                                            onClick$Action: t(function() {
                                                var e = g.clone();
                                                a.onClickCountry$Action(i.variables.desktopSelectedCitizenshipVar, a.callContext(e))
                                            }, "onClick$Action")
                                        },
                                        _validationProps: {
                                            validationService: u
                                        },
                                        _idProps: {
                                            service: r,
                                            uuid: "14",
                                            alias: "4"
                                        },
                                        _widgetRecordProvider: s,
                                        _dependencies: []
                                    })))))]
                                }),
                                tabletContent: m.Empty,
                                mobileContent: new m(function() {
                                    return [n.createElement(b, {
                                        getOwnerSpan: t(function() {
                                            return o.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: t(function() {
                                            return o.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            HasBackButton: !1,
                                            HasCloseIcon: !1,
                                            Title: d.Injector.resolve(d.ServiceNames.TranslationsService).getMessage("Qk41zaQoA0Ct2VwQgZt1FA#Value.-592606844.1", "Citizenship")
                                        },
                                        events: {
                                            _handleError: t(function(e) {
                                                a.handleError(e)
                                            }, "_handleError")
                                        },
                                        _validationProps: {
                                            validationService: u
                                        },
                                        _idProps: {
                                            service: r,
                                            uuid: "15",
                                            alias: "5"
                                        },
                                        _widgetRecordProvider: s,
                                        placeholders: {
                                            content: new m(function() {
                                                return [z(i.variables.isInitialLoadingVar, !1, this, function() {
                                                    return [n.createElement(x, {
                                                        getOwnerSpan: t(function() {
                                                            return o.getChildSpan("render")
                                                        }, "getOwnerSpan"),
                                                        getOwnerDisposeSpan: t(function() {
                                                            return o.getChildSpan("destroy")
                                                        }, "getOwnerDisposeSpan"),
                                                        inputs: {},
                                                        events: {
                                                            _handleError: t(function(e) {
                                                                a.handleError(e)
                                                            }, "_handleError")
                                                        },
                                                        _validationProps: {
                                                            validationService: u
                                                        },
                                                        _idProps: {
                                                            service: r,
                                                            uuid: "16",
                                                            alias: "6"
                                                        },
                                                        _widgetRecordProvider: s,
                                                        _dependencies: []
                                                    })]
                                                }, function() {
                                                    return [n.createElement(l, {
                                                        align: 0,
                                                        animate: !1,
                                                        extendedProperties: {
                                                            style: "background-color: white; border-radius: 8px; display: flex; flex-direction: column; height: 100dvh; padding: 16px 0px 16px 0px;"
                                                        },
                                                        visible: !0,
                                                        _idProps: {
                                                            service: r,
                                                            uuid: "17"
                                                        },
                                                        _widgetRecordProvider: s
                                                    }, n.createElement(O, {
                                                        getOwnerSpan: t(function() {
                                                            return o.getChildSpan("render")
                                                        }, "getOwnerSpan"),
                                                        getOwnerDisposeSpan: t(function() {
                                                            return o.getChildSpan("destroy")
                                                        }, "getOwnerDisposeSpan"),
                                                        inputs: {
                                                            Subtitle: "Choose the citizenship/nationality shown on your official ID.",
                                                            ResidenceList: i.variables.residenceListResponseVar.residence_listAttr,
                                                            WebsiteStatus: i.variables.websiteStatusResponseVar.website_statusAttr
                                                        },
                                                        events: {
                                                            _handleError: t(function(e) {
                                                                a.handleError(e)
                                                            }, "_handleError"),
                                                            onClickCountry$Action: t(function(e) {
                                                                var p = g.clone();
                                                                a.onClickCountry$Action(e, a.callContext(p))
                                                            }, "onClickCountry$Action")
                                                        },
                                                        _validationProps: {
                                                            validationService: u
                                                        },
                                                        _idProps: {
                                                            service: r,
                                                            uuid: "18",
                                                            alias: "7"
                                                        },
                                                        _widgetRecordProvider: s,
                                                        _dependencies: []
                                                    }))]
                                                })]
                                            })
                                        },
                                        _dependencies: [c(i.variables.websiteStatusResponseVar.website_statusAttr), c(i.variables.residenceListResponseVar.residence_listAttr), c(i.variables.isInitialLoadingVar)]
                                    })]
                                })
                            },
                            _dependencies: [c(i.variables.websiteStatusResponseVar.website_statusAttr), c(i.variables.isInitialLoadingVar), c(i.variables.desktopSelectedCitizenshipVar), c(i.variables.residenceListResponseVar.residence_listAttr)]
                        })]
                    })
                },
                _dependencies: [c(i.variables.websiteStatusResponseVar.website_statusAttr), c(i.variables.isInitialLoadingVar), c(i.variables.desktopSelectedCitizenshipVar), c(i.variables.residenceListResponseVar.residence_listAttr)]
            }))
        }
    };
t(v, "View");
var V = v,
    se = V;
export {
    se as
    default
};