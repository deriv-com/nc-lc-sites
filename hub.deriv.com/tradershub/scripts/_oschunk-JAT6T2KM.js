import {
    a as y
} from "./_oschunk-7OHLZSPA.js";
import {
    a as C
} from "./_oschunk-FO25V5PS.js";
import {
    a as S
} from "./_oschunk-DDSAAS3R.js";
import "./_oschunk-3EM3HOK7.js";
import "./_oschunk-4HOLBSDB.js";
import "./_oschunk-KE67QEAX.js";
import "./_oschunk-UK73WSZT.js";
import "./_oschunk-XGQAZLYY.js";
import "./_oschunk-GDCJSJP3.js";
import {
    a as b
} from "./_oschunk-RRERX77H.js";
import "./_oschunk-HBEXL7KK.js";
import "./_oschunk-NJYKWZYU.js";
import "./_oschunk-SW7FWAXZ.js";
import "./_oschunk-BHZNFATE.js";
import {
    b as f,
    h as l,
    r as W,
    y as w
} from "./_oschunk-HUOHOHZB.js";
import "./_oschunk-Y45M2O2K.js";
import {
    a as D,
    g as O,
    i as h
} from "./_oschunk-6LASTRK7.js";
import "./_oschunk-TIJZDWYD.js";
import "./_oschunk-27GDEXUT.js";
import {
    a as p
} from "./_oschunk-D2MH3QEK.js";
import "./_oschunk-WJ75ZXAT.js";
import "./_oschunk-3WNR72F6.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-HQOLQB4T.js";
import {
    ia as R
} from "./_oschunk-NTQBNJ73.js";
import {
    c as i,
    g as E
} from "./_oschunk-DVBKI63I.js";
var t = E(D());
var n = R,
    P = h.PlaceholderContent,
    H = h.IteratorPlaceholderContent,
    o = class o extends O.BaseWebScreen {
        static get displayName() {
            return "WalletFlows.WalletsDisableWithdrawal"
        }
        static getAttributes() {
            return {
                codeFunction: "WalletsDisableWithdrawal",
                functionKey: "e6595a2c-f547-4bd4-bdb3-4ec980398f45",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [b, S]
        }
        get modelFactory() {
            return y
        }
        get controllerFactory() {
            return C
        }
        get title() {
            let u = this.model,
                s = this.controller,
                e = this.idService,
                g = s.validationService,
                r = s.callContext(),
                v = o.asPrimitiveValue,
                x = o.getTranslation,
                d = this;
            return "Withdrawal"
        }
        internalRender() {
            let u = this.model,
                s = this.controller,
                e = this.idService,
                g = s.validationService,
                r = this.widgetsRecordProvider,
                v = s.callContext(),
                x = o.ifWidget,
                d = o.textWidget,
                T = o.asPrimitiveValue,
                m = o.getTranslation,
                c = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(b, {
                getOwnerSpan: i(function() {
                    return c.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: i(function() {
                    return c.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: i(function(a) {
                        s.handleError(a)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: g
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: r,
                placeholders: {
                    content: new P(function() {
                        return [t.createElement(S, {
                            getOwnerSpan: i(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: i(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                HideBackButton: !0,
                                PageTitle: "Withdraw",
                                HideWalletHeader: !0
                            },
                            events: {
                                _handleError: i(function(a) {
                                    s.handleError(a)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: g
                            },
                            _idProps: {
                                service: e,
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: r,
                            placeholders: {
                                walletOverlayPageContent: new P(function() {
                                    return [t.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex flex-direction-column justify-content-center align-items-center full-width gap-m",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "2"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(W, {
                                        image: n.Navigation.VersionedURL.getVersionedUrl("img/tradershub.cashier_down.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "3"
                                        },
                                        _widgetRecordProvider: r
                                    }), t.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex flex-direction-column gap-s text-align-center",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "4"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(w, {
                                        style: u.getCachedValue(e.getId("P6hWXp1jKE69QeM51RZkKw.Style"), function() {
                                            return "font-bold " + (p.isDesktop$Action(v).isDesktopOut ? "heading5" : "heading4")
                                        }),
                                        text: [d(m("P6hWXp1jKE69QeM51RZkKw#Value", "Withdrawals are temporarily down "))],
                                        _idProps: {
                                            service: e,
                                            uuid: "5"
                                        },
                                        _widgetRecordProvider: r
                                    }), d(m("4UA3hh6GH0CpRstvFOn8gg#Value", "Please contact us via live chat for assistance."))), t.createElement(l, {
                                        align: 0,
                                        animate: !0,
                                        visible: u.getCachedValue(e.getId("S547Nds6xUKwUWDecdYx+g.Visible"), function() {
                                            return p.isDesktop$Action(v).isDesktopOut
                                        }),
                                        _idProps: {
                                            service: e,
                                            uuid: "6"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(f, {
                                        enabled: !0,
                                        isDefault: !1,
                                        onClick: i(function() {
                                            try {
                                                n.Navigation.navigateTo(n.Navigation.generateScreenURL("tradershub", "wallets/withdrawal/disable", {}), n.Transitions.createTransition(n.Transitions.TransitionAnimation.Default), null, !0)
                                            } catch (a) {
                                                if (a.name !== "RedirectOccurredException") throw a
                                            }
                                        }, "onClick"),
                                        style: "btn btn-primary ",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(w, {
                                        extendedProperties: {
                                            style: "font-size: 14px;"
                                        },
                                        text: [d(m("3+n4w+zeiEeO6mNYPZELMQ#Value", "Live chat"))],
                                        _idProps: {
                                            service: e,
                                            uuid: "8"
                                        },
                                        _widgetRecordProvider: r
                                    }))))]
                                }),
                                mobileFooterContent: new P(function() {
                                    return [t.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "border-top: 1px solid var(--color-neutral-3);"
                                        },
                                        style: "padding-base",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "9"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(f, {
                                        enabled: !0,
                                        isDefault: !1,
                                        onClick: i(function() {
                                            try {
                                                n.Navigation.navigateTo(n.Navigation.generateScreenURL("tradershub", "wallets/withdrawal/disable", {}), n.Transitions.createTransition(n.Transitions.TransitionAnimation.Default), null, !0)
                                            } catch (a) {
                                                if (a.name !== "RedirectOccurredException") throw a
                                            }
                                        }, "onClick"),
                                        style: "btn btn-primary full-width",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "10"
                                        },
                                        _widgetRecordProvider: r
                                    }, "Live Chat"))]
                                })
                            },
                            _dependencies: []
                        })]
                    })
                },
                _dependencies: []
            }))
        }
    };
i(o, "View");
var _ = o,
    $ = _;
export {
    $ as
    default
};