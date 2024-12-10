import {
    a as H
} from "./_oschunk-FS55K4H4.js";
import {
    a as k
} from "./_oschunk-VH5XWWEI.js";
import {
    a as y,
    b as R
} from "./_oschunk-NKEL6DMI.js";
import {
    a as h
} from "./_oschunk-Q33ICBKD.js";
import "./_oschunk-YRXWDPRR.js";
import "./_oschunk-CXNBRKWX.js";
import "./_oschunk-KUPQSJYJ.js";
import {
    a as w
} from "./_oschunk-B5VQOPQY.js";
import "./_oschunk-PISKEOZB.js";
import "./_oschunk-B2TFZ35O.js";
import {
    a as P
} from "./_oschunk-PS756QVO.js";
import "./_oschunk-GPU7XYUR.js";
import {
    a as b
} from "./_oschunk-6ARGEN4O.js";
import "./_oschunk-OOK37A5O.js";
import "./_oschunk-QLPTYLG6.js";
import "./_oschunk-ANY3DTL7.js";
import {
    a as C
} from "./_oschunk-ND5NIK2B.js";
import "./_oschunk-4YFBPYRH.js";
import "./_oschunk-NR4KXK35.js";
import {
    d as v,
    n as I,
    u as L
} from "./_oschunk-5HXBKFJV.js";
import "./_oschunk-D7X2Q6KG.js";
import "./_oschunk-6WALBPGV.js";
import {
    a as q,
    g as S,
    i as _
} from "./_oschunk-2Q3BG5XZ.js";
import "./_oschunk-Y3C3IKDF.js";
import "./_oschunk-GP4JCHX2.js";
import "./_oschunk-FZ6FUHBV.js";
import "./_oschunk-S5DOOZ7G.js";
import {
    Ff as E,
    _c as A,
    qb as V
} from "./_oschunk-5FYEKNKX.js";
import {
    ia as x
} from "./_oschunk-5KJVGEL7.js";
import {
    c as e,
    h as B
} from "./_oschunk-QHO7QY6K.js";
var i = B(q());
var d = x,
    g = _.PlaceholderContent,
    ie = _.IteratorPlaceholderContent,
    p = class p extends S.BaseWebScreen {
        static get displayName() {
            return "VirtualAccountCreation.CountryOfResidence"
        }
        static getAttributes() {
            return {
                codeFunction: "CountryOfResidence",
                functionKey: "2e4266de-7fca-452c-be27-0f1c9135bdbc",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/PartnersHub.PHubTest.css", "css/PartnersHub.VirtualAccountCreation.CountryOfResidence.css", "css/PartnersHub.PHubTest.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [h, b, y, C, P, w, R]
        }
        get modelFactory() {
            return H
        }
        get controllerFactory() {
            return k
        }
        get title() {
            return S.BaseWebScreen.getTranslation("3mZCLsp_LEW+Jw8ckTW9vA#Title", "CountryOfResidence")
        }
        internalRender() {
            let r = this.model,
                s = this.controller,
                n = this.idService,
                l = s.validationService,
                o = this.widgetsRecordProvider,
                f = s.callContext(),
                W = p.ifWidget,
                D = p.textWidget,
                c = p.asPrimitiveValue,
                T = p.getTranslation,
                a = this;
            return i.createElement("div", this.getRootNodeProperties(), i.createElement(h, {
                getOwnerSpan: e(function() {
                    return a.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: e(function() {
                    return a.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    HasHeader: !1,
                    HasNoLogo: !0,
                    BackgroundColor: "white"
                },
                events: {
                    _handleError: e(function(t) {
                        s.handleError(t)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: l
                },
                _idProps: {
                    service: n,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: o,
                placeholders: {
                    mainContent: new g(function() {
                        return [i.createElement(b, {
                            getOwnerSpan: e(function() {
                                return a.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: e(function() {
                                return a.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: e(function(t) {
                                    s.handleError(t)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: l
                            },
                            _idProps: {
                                service: n,
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: o,
                            placeholders: {
                                desktopContent: new g(function() {
                                    return [i.createElement(v, {
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
                                            service: n,
                                            uuid: "2"
                                        },
                                        _widgetRecordProvider: o
                                    }, i.createElement(v, {
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
                                            service: n,
                                            name: "LogoContainer"
                                        },
                                        _widgetRecordProvider: o
                                    }, i.createElement(I, {
                                        extendedProperties: {
                                            style: "height: 32px;"
                                        },
                                        gridProperties: {
                                            width: "286px"
                                        },
                                        image: d.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.deriv25years.png"),
                                        type: 0,
                                        _idProps: {
                                            service: n,
                                            uuid: "4"
                                        },
                                        _widgetRecordProvider: o
                                    })), i.createElement(v, {
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
                                            service: n,
                                            uuid: "5"
                                        },
                                        _widgetRecordProvider: o
                                    }, i.createElement(v, {
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
                                            service: n,
                                            name: "MainContainer"
                                        },
                                        _widgetRecordProvider: o
                                    }, i.createElement(L, {
                                        extendedProperties: {
                                            style: "font-size: 28px; font-weight: bold; margin-top: 0px; width: ;"
                                        },
                                        text: [D(T("Ed8Do_sIpk+7UdUSVVE0Iw#Value", "Country of residence"))],
                                        _idProps: {
                                            service: n,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: o
                                    }), i.createElement(y, {
                                        getOwnerSpan: e(function() {
                                            return a.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: e(function() {
                                            return a.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            Prompt: d.Injector.resolve(d.ServiceNames.TranslationsService).getMessage("tIWqM2ADqkWSsmlZwXgmXQ#Value.830386192.1", "Select your country of residence"),
                                            OptionsList: r.getCachedValue(n.getId("BqrgSmLasUGqq9xf5lIGuQ.OptionsList"), function() {
                                                return d.DataConversion.JSConversions.typeConvertRecordList(r.variables.residenceListResponseVar.residence_listAttr, new E, function(t, u) {
                                                    return u.valueAttr = t.valueAttr, u.labelAttr = t.textAttr, u
                                                })
                                            }, function() {
                                                return r.variables.residenceListResponseVar.residence_listAttr
                                            }),
                                            OptionalConfigs: r.getCachedValue(n.getId("BqrgSmLasUGqq9xf5lIGuQ.OptionalConfigs"), function() {
                                                return function() {
                                                    var t = new A;
                                                    return t.noResultsTextAttr = d.Injector.resolve(d.ServiceNames.TranslationsService).getMessage("T3pPwyl00k64JlPCc3h4ug#Value.-1726996070.1", "Services not available"), t.noOptionsTextAttr = d.Injector.resolve(d.ServiceNames.TranslationsService).getMessage("sr4xc85gqU+3m+jC+yrRCw#Value.-1726996070.1", "Services not available"), t
                                                }()
                                            })
                                        },
                                        events: {
                                            _handleError: e(function(t) {
                                                s.handleError(t)
                                            }, "_handleError"),
                                            onChanged$Action: e(function(t, u) {
                                                var M = f.clone();
                                                s.onChangeDropdownDesktop$Action(d.DataConversion.JSConversions.typeConvertRecord(u.getCurrent(f.iterationContext), new V, function(U, m) {
                                                    return m.valueAttr = U.valueAttr, m.selectedAttr = r.variables.desktopSelectedCountryVar.valueAttr, m
                                                }), s.callContext(M))
                                            }, "onChanged$Action")
                                        },
                                        _validationProps: {
                                            validationService: l
                                        },
                                        _idProps: {
                                            service: n,
                                            uuid: "8",
                                            alias: "3"
                                        },
                                        _widgetRecordProvider: o,
                                        _dependencies: []
                                    }), i.createElement(C, {
                                        getOwnerSpan: e(function() {
                                            return a.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: e(function() {
                                            return a.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            borderRadius: "100px",
                                            enabled: r.getCachedValue(n.getId("WZJqp8M_kUidU6v2VqicUQ.enabled"), function() {
                                                return r.variables.desktopSelectedCountryVar.valueAttr !== ""
                                            }, function() {
                                                return r.variables.desktopSelectedCountryVar.valueAttr
                                            }),
                                            title: "Next",
                                            Width: "100%"
                                        },
                                        events: {
                                            _handleError: e(function(t) {
                                                s.handleError(t)
                                            }, "_handleError"),
                                            onClick$Action: e(function() {
                                                var t = f.clone();
                                                s.onClickCountry$Action(r.variables.desktopSelectedCountryVar, s.callContext(t))
                                            }, "onClick$Action")
                                        },
                                        _validationProps: {
                                            validationService: l
                                        },
                                        _idProps: {
                                            service: n,
                                            uuid: "9",
                                            alias: "4"
                                        },
                                        _widgetRecordProvider: o,
                                        _dependencies: []
                                    }))))]
                                }),
                                tabletContent: g.Empty,
                                mobileContent: new g(function() {
                                    return [i.createElement(P, {
                                        getOwnerSpan: e(function() {
                                            return a.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: e(function() {
                                            return a.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            HasCloseIcon: !1,
                                            Title: d.Injector.resolve(d.ServiceNames.TranslationsService).getMessage("pbfCjWYiFUygNJAPjiikDg#Value.-925459353.1", "Country of residence"),
                                            HasBackButton: !1
                                        },
                                        events: {
                                            _handleError: e(function(t) {
                                                s.handleError(t)
                                            }, "_handleError")
                                        },
                                        _validationProps: {
                                            validationService: l
                                        },
                                        _idProps: {
                                            service: n,
                                            uuid: "10",
                                            alias: "5"
                                        },
                                        _widgetRecordProvider: o,
                                        placeholders: {
                                            content: new g(function() {
                                                return [W(r.variables.isInitialLoadingVar, !1, this, function() {
                                                    return [i.createElement(w, {
                                                        getOwnerSpan: e(function() {
                                                            return a.getChildSpan("render")
                                                        }, "getOwnerSpan"),
                                                        getOwnerDisposeSpan: e(function() {
                                                            return a.getChildSpan("destroy")
                                                        }, "getOwnerDisposeSpan"),
                                                        inputs: {},
                                                        events: {
                                                            _handleError: e(function(t) {
                                                                s.handleError(t)
                                                            }, "_handleError")
                                                        },
                                                        _validationProps: {
                                                            validationService: l
                                                        },
                                                        _idProps: {
                                                            service: n,
                                                            uuid: "11",
                                                            alias: "6"
                                                        },
                                                        _widgetRecordProvider: o,
                                                        _dependencies: []
                                                    })]
                                                }, function() {
                                                    return [i.createElement(v, {
                                                        align: 0,
                                                        animate: !1,
                                                        extendedProperties: {
                                                            style: "background-color: white; border-radius: 8px; display: flex; flex-direction: column; height: 100dvh; padding: 16px 0px 16px 0px;"
                                                        },
                                                        visible: !0,
                                                        _idProps: {
                                                            service: n,
                                                            uuid: "12"
                                                        },
                                                        _widgetRecordProvider: o
                                                    }, i.createElement(R, {
                                                        getOwnerSpan: e(function() {
                                                            return a.getChildSpan("render")
                                                        }, "getOwnerSpan"),
                                                        getOwnerDisposeSpan: e(function() {
                                                            return a.getChildSpan("destroy")
                                                        }, "getOwnerDisposeSpan"),
                                                        inputs: {
                                                            ResidenceList: r.variables.residenceListResponseVar.residence_listAttr,
                                                            WebsiteStatus: r.variables.websiteStatusResponseVar.website_statusAttr
                                                        },
                                                        events: {
                                                            _handleError: e(function(t) {
                                                                s.handleError(t)
                                                            }, "_handleError"),
                                                            onClickCountry$Action: e(function(t) {
                                                                var u = f.clone();
                                                                s.onClickCountry$Action(t, s.callContext(u))
                                                            }, "onClickCountry$Action")
                                                        },
                                                        _validationProps: {
                                                            validationService: l
                                                        },
                                                        _idProps: {
                                                            service: n,
                                                            uuid: "13",
                                                            alias: "7"
                                                        },
                                                        _widgetRecordProvider: o,
                                                        _dependencies: []
                                                    }))]
                                                })]
                                            })
                                        },
                                        _dependencies: [c(r.variables.websiteStatusResponseVar.website_statusAttr), c(r.variables.residenceListResponseVar.residence_listAttr), c(r.variables.isInitialLoadingVar)]
                                    })]
                                })
                            },
                            _dependencies: [c(r.variables.websiteStatusResponseVar.website_statusAttr), c(r.variables.isInitialLoadingVar), c(r.variables.desktopSelectedCountryVar), c(r.variables.residenceListResponseVar.residence_listAttr)]
                        })]
                    })
                },
                _dependencies: [c(r.variables.websiteStatusResponseVar.website_statusAttr), c(r.variables.isInitialLoadingVar), c(r.variables.desktopSelectedCountryVar), c(r.variables.residenceListResponseVar.residence_listAttr)]
            }))
        }
    };
e(p, "View");
var O = p,
    se = O;
export {
    se as
    default
};