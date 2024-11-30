import {
    a as O
} from "./_oschunk-GONR5GZF.js";
import {
    a as W
} from "./_oschunk-ANUAOM5N.js";
import {
    a as b
} from "./_oschunk-6LHMKEZD.js";
import "./_oschunk-IDZWQMUL.js";
import "./_oschunk-4HOLBSDB.js";
import "./_oschunk-VLOO5HJV.js";
import "./_oschunk-IQUI5AIQ.js";
import "./_oschunk-FVTZGXVK.js";
import "./_oschunk-GDCJSJP3.js";
import {
    a as y
} from "./_oschunk-ODSHDLTB.js";
import "./_oschunk-HBEXL7KK.js";
import "./_oschunk-GEKOGHNU.js";
import "./_oschunk-SW7FWAXZ.js";
import "./_oschunk-BHZNFATE.js";
import {
    b as x,
    h as o,
    r as p,
    y as l
} from "./_oschunk-WAXNMQCP.js";
import "./_oschunk-LHY3WMNC.js";
import {
    a as D,
    g as S,
    i as P
} from "./_oschunk-J7LCUWB3.js";
import "./_oschunk-ESOYZIPG.js";
import "./_oschunk-XMOR6XCC.js";
import {
    a as h
} from "./_oschunk-H7UK4VZM.js";
import "./_oschunk-JSVFHRDW.js";
import "./_oschunk-LUKJNVXR.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-44PT7RP7.js";
import {
    ia as w
} from "./_oschunk-NTQBNJ73.js";
import {
    c as s,
    g as V
} from "./_oschunk-DVBKI63I.js";
var t = V(D());
var n = w,
    R = P.PlaceholderContent,
    z = P.IteratorPlaceholderContent,
    a = class a extends S.BaseWebScreen {
        static get displayName() {
            return "WalletFlows.WalletsFiatOnRampDeposit"
        }
        static getAttributes() {
            return {
                codeFunction: "WalletsFiatOnRampDeposit",
                functionKey: "edba8971-f205-4b6b-abd5-ec44b6dbad5a",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.WalletFlows.WalletsFiatOnRampDeposit.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [y, b]
        }
        get modelFactory() {
            return O
        }
        get controllerFactory() {
            return W
        }
        get title() {
            let c = this.model,
                i = this.controller,
                e = this.idService,
                f = i.validationService,
                r = i.callContext(),
                m = a.asPrimitiveValue,
                C = a.getTranslation,
                d = this;
            return n.Injector.resolve(n.ServiceNames.TranslationsService).getMessage("cYm67QXya0ur1exEttutWg#TitleExpression.-1075859842.1", "Deposit")
        }
        internalRender() {
            let c = this.model,
                i = this.controller,
                e = this.idService,
                f = i.validationService,
                r = this.widgetsRecordProvider,
                m = i.callContext(),
                C = a.ifWidget,
                d = a.textWidget,
                E = a.asPrimitiveValue,
                u = a.getTranslation,
                v = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(y, {
                getOwnerSpan: s(function() {
                    return v.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return v.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: s(function(g) {
                        i.handleError(g)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: f
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: r,
                placeholders: {
                    content: new R(function() {
                        return [t.createElement(b, {
                            getOwnerSpan: s(function() {
                                return v.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: s(function() {
                                return v.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                PageTitle: n.Injector.resolve(n.ServiceNames.TranslationsService).getMessage("nlhlYFZx8UeLRZYfbMO2Ew#Value.-1075859842.1", "Deposit"),
                                HideBackButton: !1,
                                IsLoading: c.variables.isLoadingVar
                            },
                            events: {
                                _handleError: s(function(g) {
                                    i.handleError(g)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: f
                            },
                            _idProps: {
                                service: e,
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: r,
                            placeholders: {
                                walletOverlayPageContent: new R(function() {
                                    return [t.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        style: "wallet-fiat-onramp-content",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            name: "MainWrapper"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(l, {
                                        extendedProperties: {
                                            style: "font-size: 16px;"
                                        },
                                        style: "font-bold",
                                        text: [d(u("1j4prjO3B0eLco4M5zq4zw#Value", "Choose a deposit method"))],
                                        _idProps: {
                                            service: e,
                                            uuid: "3"
                                        },
                                        _widgetRecordProvider: r
                                    }), t.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "border-color: #DEE2E6; border-radius: 8px; border-style: solid; border-width: 1px; color: #222;"
                                        },
                                        style: c.getCachedValue(e.getId("BanxaCard.Style"), function() {
                                            return "full-width display-flex gap-xs padding-base display-flex align-items-flex-start gap-base " + (h.isDesktop$Action(m).isDesktopOut ? "flex-direction-row" : "flex-direction-column")
                                        }),
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            name: "BanxaCard"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(p, {
                                        image: n.Navigation.VersionedURL.getVersionedUrl("img/tradershub.banxa.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "5"
                                        },
                                        _widgetRecordProvider: r
                                    }), t.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "6"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(l, {
                                        extendedProperties: {
                                            style: "font-size: 12px;"
                                        },
                                        text: [d(u("gXsNRFN1nU2i1pOS5Gt18w#Value", "Banxa is a fast, secure service for fiat-to-crypto payments. Deposit cryptocurrencies with credit/debit cards or bank transfers from around the world."))],
                                        _idProps: {
                                            service: e,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: r
                                    }), t.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "margin-top: 8px;"
                                        },
                                        style: "display-flex justify-content-space-between",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "8"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex column-gap-xs",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "9"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(p, {
                                        image: n.Navigation.VersionedURL.getVersionedUrl("img/tradershub.apple_pay.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "10"
                                        },
                                        _widgetRecordProvider: r
                                    }), t.createElement(p, {
                                        gridProperties: {
                                            classes: "ThemeGrid_MarginGutter"
                                        },
                                        image: n.Navigation.VersionedURL.getVersionedUrl("img/tradershub.mastercard.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "11"
                                        },
                                        _widgetRecordProvider: r
                                    }), t.createElement(p, {
                                        gridProperties: {
                                            classes: "ThemeGrid_MarginGutter"
                                        },
                                        image: n.Navigation.VersionedURL.getVersionedUrl("img/tradershub.visa.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "12"
                                        },
                                        _widgetRecordProvider: r
                                    })), t.createElement(x, {
                                        enabled: !0,
                                        isDefault: !1,
                                        onClick: s(function() {
                                            return Promise.resolve().then(function() {
                                                var g = m.clone();
                                                return i.onReady$Action(i.callContext(g))
                                            })
                                        }, "onClick"),
                                        style: "btn btn-primary",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "13"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(l, {
                                        extendedProperties: {
                                            style: "font-weight: normal;"
                                        },
                                        text: [d(u("V4YpRKl8+kiGkX6PZmwYeg#Value", "Deposit"))],
                                        _idProps: {
                                            service: e,
                                            uuid: "14"
                                        },
                                        _widgetRecordProvider: r
                                    }))))), t.createElement(o, {
                                        align: 0,
                                        animate: !0,
                                        visible: c.getCachedValue(e.getId("UuSaM2TWbE6H_QVb8Kh7JA.Visible"), function() {
                                            return h.isDesktop$Action(m).isDesktopOut
                                        }),
                                        _idProps: {
                                            service: e,
                                            uuid: "15"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(l, {
                                        extendedProperties: {
                                            style: "color: #6A7178; font-size: 12px;"
                                        },
                                        style: "wallet-fiat-onramp-message",
                                        text: [d(u("BmOvDM51wUer1gBWKjA2eA#Value", "Fiat-to-crypto lets you fund your Deriv crypto Wallet(s). The above listed are third-party exchanges, so you'll need to create an account with them to use their services."))],
                                        _idProps: {
                                            service: e,
                                            uuid: "16"
                                        },
                                        _widgetRecordProvider: r
                                    })))]
                                }),
                                mobileFooterContent: new R(function() {
                                    return [t.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        style: "padding-base",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "17"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(l, {
                                        extendedProperties: {
                                            style: "color: #6A7178; font-size: 12px;"
                                        },
                                        style: "wallet-fiat-onramp-message",
                                        text: [d(u("yKJ5BTxlZ0+SY556pcWLQA#Value", "Fiat-to-crypto lets you fund your Deriv crypto Wallet(s). The above listed are third-party exchanges, so you'll need to create an account with them to use their services."))],
                                        _idProps: {
                                            service: e,
                                            uuid: "18"
                                        },
                                        _widgetRecordProvider: r
                                    }))]
                                })
                            },
                            _dependencies: []
                        })]
                    })
                },
                _dependencies: [E(c.variables.isLoadingVar)]
            }))
        }
    };
s(a, "View");
var _ = a,
    G = _;
export {
    G as
    default
};