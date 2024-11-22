import {
    a as x
} from "./_oschunk-YFTFDNKN.js";
import {
    a as C
} from "./_oschunk-24SGS4ZV.js";
import {
    a as R
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
    h as o,
    r as g,
    u as h,
    y as l
} from "./_oschunk-HUOHOHZB.js";
import "./_oschunk-Y45M2O2K.js";
import {
    a as T,
    g as O,
    i as P
} from "./_oschunk-6LASTRK7.js";
import "./_oschunk-TIJZDWYD.js";
import "./_oschunk-27GDEXUT.js";
import {
    a as _
} from "./_oschunk-D2MH3QEK.js";
import "./_oschunk-WJ75ZXAT.js";
import "./_oschunk-3WNR72F6.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-HQOLQB4T.js";
import {
    ia as S
} from "./_oschunk-NTQBNJ73.js";
import {
    c as a,
    g as V
} from "./_oschunk-DVBKI63I.js";
var t = V(T());
var i = S,
    w = P.PlaceholderContent,
    q = P.IteratorPlaceholderContent,
    s = class s extends O.BaseWebScreen {
        static get displayName() {
            return "WalletFlows.WalletsCryptoOptionDeposit"
        }
        static getAttributes() {
            return {
                codeFunction: "WalletsCryptoOptionDeposit",
                functionKey: "26c76b5f-5fdd-4e96-9a96-8ba58284af57",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.WalletFlows.WalletsCryptoOptionDeposit.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [y, R]
        }
        get modelFactory() {
            return x
        }
        get controllerFactory() {
            return C
        }
        get title() {
            let c = this.model,
                n = this.controller,
                e = this.idService,
                m = n.validationService,
                r = n.callContext(),
                v = s.asPrimitiveValue,
                E = s.getTranslation,
                d = this;
            return "Deposit"
        }
        internalRender() {
            let c = this.model,
                n = this.controller,
                e = this.idService,
                m = n.validationService,
                r = this.widgetsRecordProvider,
                v = n.callContext(),
                E = s.ifWidget,
                d = s.textWidget,
                W = s.asPrimitiveValue,
                u = s.getTranslation,
                p = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(y, {
                getOwnerSpan: a(function() {
                    return p.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return p.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: a(function(f) {
                        n.handleError(f)
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
                _widgetRecordProvider: r,
                placeholders: {
                    content: new w(function() {
                        return [t.createElement(R, {
                            getOwnerSpan: a(function() {
                                return p.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return p.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                HideBackButton: !0,
                                IsLoading: c.variables.isLoadingVar,
                                PageTitle: "Deposit"
                            },
                            events: {
                                _handleError: a(function(f) {
                                    n.handleError(f)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: m
                            },
                            _idProps: {
                                service: e,
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: r,
                            placeholders: {
                                walletOverlayPageContent: new w(function() {
                                    return [t.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        style: c.getCachedValue(e.getId("4vN4aIhBokevvzV9IGzhqQ.Style"), function() {
                                            return "display-flex flex-direction-column gap-base " + (_.isDesktop$Action(v).isDesktopOut ? "margin-top-md" : "margin-top-base")
                                        }),
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "2"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(l, {
                                        extendedProperties: {
                                            style: "font-size: 16px;"
                                        },
                                        style: "font-bold",
                                        text: [d(u("Ab183c9suEedzb1BWs6Ysw#Value", "Choose a deposit method"))],
                                        _idProps: {
                                            service: e,
                                            uuid: "3"
                                        },
                                        _widgetRecordProvider: r
                                    }), t.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        style: c.getCachedValue(e.getId("oIX6gxLBUEqOEesNdTo8zQ.Style"), function() {
                                            return "display-flex gap-base " + (_.isDesktop$Action(v).isDesktopOut ? "flex-direction-row" : "flex-direction-column")
                                        }),
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "4"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(h, {
                                        enabled: !0,
                                        style: "wallet-deposit-method-link",
                                        transition: i.Transitions.createTransition(i.Transitions.TransitionAnimation.Default),
                                        url: i.Navigation.generateScreenURL("tradershub", "wallets/deposit/deposit-crypto", {}),
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "5"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "border-color: #DEE2E6; border-radius: 8px; border-style: solid; border-width: 1px; color: #222;"
                                        },
                                        style: "wallet-deposit-method-option",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "6"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex align-items-center full-width gap-xs",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        style: "wallet-deposit-method-icon",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "8"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(g, {
                                        image: i.Navigation.VersionedURL.getVersionedUrl("img/tradershub.qr_code.svg"),
                                        style: "display-grid",
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "9"
                                        },
                                        _widgetRecordProvider: r
                                    })), t.createElement(l, {
                                        style: "font-bold flex-1",
                                        text: [d(u("jRPFvbY5eEyDrJZgFojEIg#Value", "Crypto transfer"))],
                                        _idProps: {
                                            service: e,
                                            uuid: "10"
                                        },
                                        _widgetRecordProvider: r
                                    }), t.createElement(g, {
                                        gridProperties: {
                                            classes: "ThemeGrid_MarginGutter"
                                        },
                                        image: i.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_sm.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "11"
                                        },
                                        _widgetRecordProvider: r
                                    })), t.createElement(l, {
                                        extendedProperties: {
                                            style: "font-size: 12px;"
                                        },
                                        text: [d(u("g9ntE1AR_EadkKSwzfgewQ#Value", "Scan QR code to deposit or copy wallet address."))],
                                        _idProps: {
                                            service: e,
                                            uuid: "12"
                                        },
                                        _widgetRecordProvider: r
                                    }))), t.createElement(h, {
                                        enabled: !0,
                                        gridProperties: {
                                            marginLeft: "0px"
                                        },
                                        style: "wallet-deposit-method-link",
                                        transition: i.Transitions.createTransition(i.Transitions.TransitionAnimation.Default),
                                        url: i.Navigation.generateScreenURL("tradershub", "wallets/deposit/fiat-onramp", {}),
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "13"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "border-color: #DEE2E6; border-radius: 8px; border-style: solid; border-width: 1px; color: #222;"
                                        },
                                        style: "wallet-deposit-method-option",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "14"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex align-items-center full-width gap-xs",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "15"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        style: "wallet-deposit-method-icon",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "16"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(g, {
                                        image: i.Navigation.VersionedURL.getVersionedUrl("img/tradershub.Wallets_fiat_on_ramp.svg"),
                                        style: "display-grid",
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "17"
                                        },
                                        _widgetRecordProvider: r
                                    })), t.createElement(l, {
                                        style: "font-bold flex-1",
                                        text: [d(u("GZRV+onPd02s7Z+XK9y+bA#Value", "Fiat onramp"))],
                                        _idProps: {
                                            service: e,
                                            uuid: "18"
                                        },
                                        _widgetRecordProvider: r
                                    }), t.createElement(g, {
                                        gridProperties: {
                                            classes: "ThemeGrid_MarginGutter"
                                        },
                                        image: i.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_sm.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "19"
                                        },
                                        _widgetRecordProvider: r
                                    })), t.createElement(l, {
                                        extendedProperties: {
                                            style: "font-size: 12px;"
                                        },
                                        text: [d(u("2RqfO2mffECfYPxFy2dpLA#Value", "Convert fiat to crypto to fund your wallet."))],
                                        _idProps: {
                                            service: e,
                                            uuid: "20"
                                        },
                                        _widgetRecordProvider: r
                                    })))))]
                                }),
                                mobileFooterContent: w.Empty
                            },
                            _dependencies: []
                        })]
                    })
                },
                _dependencies: [W(c.variables.isLoadingVar)]
            }))
        }
    };
a(s, "View");
var b = s,
    K = b;
export {
    K as
    default
};