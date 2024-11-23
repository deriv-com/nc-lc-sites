import {
    a as w
} from "./_oschunk-F6X2OBKA.js";
import {
    a as x
} from "./_oschunk-5QCDF3B6.js";
import "./_oschunk-PES4FCGG.js";
import {
    a as f
} from "./_oschunk-NQ24OQU5.js";
import "./_oschunk-CXNBRKWX.js";
import {
    a as v
} from "./_oschunk-22UUXQ4S.js";
import {
    a as g
} from "./_oschunk-QCCZFQH6.js";
import "./_oschunk-4YFBPYRH.js";
import {
    d as m,
    n as _,
    u as C
} from "./_oschunk-OO36B6PN.js";
import "./_oschunk-7BKGLZMI.js";
import "./_oschunk-6WALBPGV.js";
import {
    a as R,
    g as u,
    i as p
} from "./_oschunk-IL57OEHH.js";
import "./_oschunk-RFCNRBVT.js";
import "./_oschunk-Y3C3IKDF.js";
import "./_oschunk-CMUJJDSY.js";
import "./_oschunk-DW3HXDMW.js";
import "./_oschunk-PNRBOTIK.js";
import "./_oschunk-JXJHSAQS.js";
import {
    ia as S
} from "./_oschunk-5KJVGEL7.js";
import {
    c as e,
    h as O
} from "./_oschunk-QHO7QY6K.js";
var n = O(R());
var c = S,
    y = p.PlaceholderContent,
    G = p.IteratorPlaceholderContent,
    a = class a extends u.BaseWebScreen {
        static get displayName() {
            return "Home.NonPartnerAccount"
        }
        static getAttributes() {
            return {
                codeFunction: "NonPartnerAccount",
                functionKey: "d681fd12-042f-4a14-80ba-42fd0360c053",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/PartnersHub.PHubTest.css", "css/PartnersHub.Home.NonPartnerAccount.css", "css/PartnersHub.PHubTest.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [f, g, v]
        }
        get modelFactory() {
            return w
        }
        get controllerFactory() {
            return x
        }
        get title() {
            return u.BaseWebScreen.getTranslation("Ev2B1i8EFEqAukL9A2DAUw#Title", "NonPartnerAccount")
        }
        internalRender() {
            let H = this.model,
                t = this.controller,
                i = this.idService,
                d = t.validationService,
                o = this.widgetsRecordProvider,
                l = t.callContext(),
                E = a.ifWidget,
                h = a.textWidget,
                A = a.asPrimitiveValue,
                b = a.getTranslation,
                s = this;
            return n.createElement("div", this.getRootNodeProperties(), n.createElement(f, {
                getOwnerSpan: e(function() {
                    return s.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: e(function() {
                    return s.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    NoRedirect: !0
                },
                events: {
                    _handleError: e(function(r) {
                        t.handleError(r)
                    }, "_handleError"),
                    event$Action: e(function() {
                        var r = l.clone();
                        t.closePage$Action(t.callContext(r))
                    }, "event$Action")
                },
                _validationProps: {
                    validationService: d
                },
                _idProps: {
                    service: i,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: o,
                placeholders: {
                    mainContent: new y(function() {
                        return [n.createElement(m, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "background-color: #ffffff;"
                            },
                            style: "login-screen",
                            visible: !0,
                            _idProps: {
                                service: i,
                                uuid: "1"
                            },
                            _widgetRecordProvider: o
                        }, n.createElement(m, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "align-items: center; border-radius: 8px; display: flex; flex-direction: column; gap: 24px; justify-content: center; max-width: 368px; padding: 0 16px; text-align: center;"
                            },
                            gridProperties: {
                                classes: "OSInline"
                            },
                            style: "signup",
                            visible: !0,
                            _idProps: {
                                service: i,
                                uuid: "2"
                            },
                            _widgetRecordProvider: o
                        }, n.createElement(_, {
                            gridProperties: {
                                width: "73px"
                            },
                            image: c.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.warning.svg"),
                            type: 0,
                            _idProps: {
                                service: i,
                                uuid: "3"
                            },
                            _widgetRecordProvider: o
                        }), n.createElement(C, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            text: [h(b("GSXpn47RvUqEYNp1DnG_0Q#Value", "We couldn\u2019t find a partner account with this email address."))],
                            _idProps: {
                                service: i,
                                uuid: "4"
                            },
                            _widgetRecordProvider: o
                        }), n.createElement(g, {
                            getOwnerSpan: e(function() {
                                return s.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: e(function() {
                                return s.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Width: "100%",
                                borderRadius: "100px",
                                title: c.Injector.resolve(c.ServiceNames.TranslationsService).getMessage("tVgE7jGJE0Oq21D8rvGSew#Value.-1386031319.1", "Create account")
                            },
                            events: {
                                _handleError: e(function(r) {
                                    t.handleError(r)
                                }, "_handleError"),
                                onClick$Action: e(function() {
                                    var r = l.clone();
                                    t.createAccount$Action(t.callContext(r))
                                }, "onClick$Action")
                            },
                            _validationProps: {
                                validationService: d
                            },
                            _idProps: {
                                service: i,
                                uuid: "5",
                                alias: "2"
                            },
                            _widgetRecordProvider: o,
                            _dependencies: []
                        }), n.createElement(v, {
                            getOwnerSpan: e(function() {
                                return s.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: e(function() {
                                return s.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Width: "100%",
                                borderRadius: "100px",
                                title: c.Injector.resolve(c.ServiceNames.TranslationsService).getMessage("Yazb6YJMUkSyFpO67JmetQ#Value.1229945724.1", "Go to Trader's Hub"),
                                BorderColor: "#FF444F",
                                TextColor: "#FF444F"
                            },
                            events: {
                                _handleError: e(function(r) {
                                    t.handleError(r)
                                }, "_handleError"),
                                onClick$Action: e(function() {
                                    var r = l.clone();
                                    t.goToTradersHub$Action(t.callContext(r))
                                }, "onClick$Action")
                            },
                            _validationProps: {
                                validationService: d
                            },
                            _idProps: {
                                service: i,
                                uuid: "6",
                                alias: "3"
                            },
                            _widgetRecordProvider: o,
                            _dependencies: []
                        })))]
                    })
                },
                _dependencies: []
            }))
        }
    };
e(a, "View");
var P = a,
    j = P;
export {
    j as
    default
};