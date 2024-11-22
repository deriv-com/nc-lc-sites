import {
    a as O
} from "./_oschunk-GONR5GZF.js";
import {
    a as W
} from "./_oschunk-BSO3QC5J.js";
import {
    a as _
} from "./_oschunk-DDSAAS3R.js";
import "./_oschunk-3EM3HOK7.js";
import "./_oschunk-4HOLBSDB.js";
import "./_oschunk-KE67QEAX.js";
import "./_oschunk-UK73WSZT.js";
import "./_oschunk-XGQAZLYY.js";
import "./_oschunk-GDCJSJP3.js";
import {
    a as y
} from "./_oschunk-RRERX77H.js";
import "./_oschunk-HBEXL7KK.js";
import "./_oschunk-NJYKWZYU.js";
import "./_oschunk-SW7FWAXZ.js";
import "./_oschunk-BHZNFATE.js";
import {
    b as x,
    h as o,
    r as p,
    y as d
} from "./_oschunk-HUOHOHZB.js";
import "./_oschunk-Y45M2O2K.js";
import {
    a as D,
    g as S,
    i as P
} from "./_oschunk-6LASTRK7.js";
import "./_oschunk-TIJZDWYD.js";
import "./_oschunk-27GDEXUT.js";
import {
    a as h
} from "./_oschunk-D2MH3QEK.js";
import "./_oschunk-WJ75ZXAT.js";
import "./_oschunk-3WNR72F6.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-HQOLQB4T.js";
import {
    ia as w
} from "./_oschunk-NTQBNJ73.js";
import {
    c as a,
    g as V
} from "./_oschunk-DVBKI63I.js";
var t = V(D());
var v = w,
    b = P.PlaceholderContent,
    G = P.IteratorPlaceholderContent,
    s = class s extends S.BaseWebScreen {
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
            return [y, _]
        }
        get modelFactory() {
            return O
        }
        get controllerFactory() {
            return W
        }
        get title() {
            let l = this.model,
                i = this.controller,
                e = this.idService,
                f = i.validationService,
                r = i.callContext(),
                g = s.asPrimitiveValue,
                C = s.getTranslation,
                n = this;
            return "Deposit"
        }
        internalRender() {
            let l = this.model,
                i = this.controller,
                e = this.idService,
                f = i.validationService,
                r = this.widgetsRecordProvider,
                g = i.callContext(),
                C = s.ifWidget,
                n = s.textWidget,
                E = s.asPrimitiveValue,
                c = s.getTranslation,
                m = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(y, {
                getOwnerSpan: a(function() {
                    return m.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return m.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: a(function(u) {
                        i.handleError(u)
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
                    content: new b(function() {
                        return [t.createElement(_, {
                            getOwnerSpan: a(function() {
                                return m.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return m.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                PageTitle: "Deposit",
                                HideBackButton: !1,
                                IsLoading: l.variables.isLoadingVar
                            },
                            events: {
                                _handleError: a(function(u) {
                                    i.handleError(u)
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
                                walletOverlayPageContent: new b(function() {
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
                                    }, t.createElement(d, {
                                        extendedProperties: {
                                            style: "font-size: 16px;"
                                        },
                                        style: "font-bold",
                                        text: [n(c("1j4prjO3B0eLco4M5zq4zw#Value", "Choose a deposit method"))],
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
                                        style: l.getCachedValue(e.getId("BanxaCard.Style"), function() {
                                            return "full-width display-flex gap-xs padding-base display-flex align-items-flex-start gap-base " + (h.isDesktop$Action(g).isDesktopOut ? "flex-direction-row" : "flex-direction-column")
                                        }),
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            name: "BanxaCard"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(p, {
                                        image: v.Navigation.VersionedURL.getVersionedUrl("img/tradershub.banxa.svg"),
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
                                    }, t.createElement(d, {
                                        extendedProperties: {
                                            style: "font-size: 12px;"
                                        },
                                        text: [n(c("gXsNRFN1nU2i1pOS5Gt18w#Value", "Banxa is a fast, secure service for fiat-to-crypto payments. Deposit cryptocurrencies with credit/debit cards or bank transfers from around the world."))],
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
                                        image: v.Navigation.VersionedURL.getVersionedUrl("img/tradershub.apple_pay.svg"),
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
                                        image: v.Navigation.VersionedURL.getVersionedUrl("img/tradershub.mastercard.svg"),
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
                                        image: v.Navigation.VersionedURL.getVersionedUrl("img/tradershub.visa.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "12"
                                        },
                                        _widgetRecordProvider: r
                                    })), t.createElement(x, {
                                        enabled: !0,
                                        isDefault: !1,
                                        onClick: a(function() {
                                            return Promise.resolve().then(function() {
                                                var u = g.clone();
                                                return i.onReady$Action(i.callContext(u))
                                            })
                                        }, "onClick"),
                                        style: "btn btn-primary",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "13"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(d, {
                                        extendedProperties: {
                                            style: "font-weight: normal;"
                                        },
                                        text: [n(c("V4YpRKl8+kiGkX6PZmwYeg#Value", "Deposit"))],
                                        _idProps: {
                                            service: e,
                                            uuid: "14"
                                        },
                                        _widgetRecordProvider: r
                                    }))))), t.createElement(o, {
                                        align: 0,
                                        animate: !0,
                                        visible: l.getCachedValue(e.getId("UuSaM2TWbE6H_QVb8Kh7JA.Visible"), function() {
                                            return h.isDesktop$Action(g).isDesktopOut
                                        }),
                                        _idProps: {
                                            service: e,
                                            uuid: "15"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(d, {
                                        extendedProperties: {
                                            style: "color: #6A7178; font-size: 12px;"
                                        },
                                        style: "wallet-fiat-onramp-message",
                                        text: [n(c("BmOvDM51wUer1gBWKjA2eA#Value", "Fiat-to-crypto lets you fund your Deriv crypto Wallet(s). The above listed are third-party exchanges, so you'll need to create an account with them to use their services."))],
                                        _idProps: {
                                            service: e,
                                            uuid: "16"
                                        },
                                        _widgetRecordProvider: r
                                    })))]
                                }),
                                mobileFooterContent: new b(function() {
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
                                    }, t.createElement(d, {
                                        extendedProperties: {
                                            style: "color: #6A7178; font-size: 12px;"
                                        },
                                        style: "wallet-fiat-onramp-message",
                                        text: [n(c("yKJ5BTxlZ0+SY556pcWLQA#Value", "Fiat-to-crypto lets you fund your Deriv crypto Wallet(s). The above listed are third-party exchanges, so you'll need to create an account with them to use their services."))],
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
                _dependencies: [E(l.variables.isLoadingVar)]
            }))
        }
    };
a(s, "View");
var R = s,
    K = R;
export {
    K as
    default
};