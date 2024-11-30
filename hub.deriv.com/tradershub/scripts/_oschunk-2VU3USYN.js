import {
    a as W
} from "./_oschunk-7OHLZSPA.js";
import {
    a as C
} from "./_oschunk-HH4MSN7X.js";
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
    a as S
} from "./_oschunk-ODSHDLTB.js";
import "./_oschunk-HBEXL7KK.js";
import "./_oschunk-GEKOGHNU.js";
import "./_oschunk-SW7FWAXZ.js";
import "./_oschunk-BHZNFATE.js";
import {
    b as f,
    h as d,
    r as y,
    y as w
} from "./_oschunk-WAXNMQCP.js";
import "./_oschunk-LHY3WMNC.js";
import {
    a as D,
    g as O,
    i as h
} from "./_oschunk-J7LCUWB3.js";
import "./_oschunk-ESOYZIPG.js";
import "./_oschunk-XMOR6XCC.js";
import {
    a as p
} from "./_oschunk-H7UK4VZM.js";
import "./_oschunk-JSVFHRDW.js";
import "./_oschunk-LUKJNVXR.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-44PT7RP7.js";
import {
    ia as R
} from "./_oschunk-NTQBNJ73.js";
import {
    c as a,
    g as E
} from "./_oschunk-DVBKI63I.js";
var t = E(D());
var i = R,
    P = h.PlaceholderContent,
    j = h.IteratorPlaceholderContent,
    s = class s extends O.BaseWebScreen {
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
            return [S, b]
        }
        get modelFactory() {
            return W
        }
        get controllerFactory() {
            return C
        }
        get title() {
            let g = this.model,
                o = this.controller,
                e = this.idService,
                v = o.validationService,
                r = o.callContext(),
                m = s.asPrimitiveValue,
                x = s.getTranslation,
                l = this;
            return i.Injector.resolve(i.ServiceNames.TranslationsService).getMessage("LFpZ5kf11Eu9s07JgDmPRQ#TitleExpression.363878613.1", "Withdrawal")
        }
        internalRender() {
            let g = this.model,
                o = this.controller,
                e = this.idService,
                v = o.validationService,
                r = this.widgetsRecordProvider,
                m = o.callContext(),
                x = s.ifWidget,
                l = s.textWidget,
                T = s.asPrimitiveValue,
                c = s.getTranslation,
                u = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(S, {
                getOwnerSpan: a(function() {
                    return u.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return u.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: a(function(n) {
                        o.handleError(n)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: v
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: r,
                placeholders: {
                    content: new P(function() {
                        return [t.createElement(b, {
                            getOwnerSpan: a(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                HideBackButton: !0,
                                PageTitle: "Withdraw",
                                HideWalletHeader: !0
                            },
                            events: {
                                _handleError: a(function(n) {
                                    o.handleError(n)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: v
                            },
                            _idProps: {
                                service: e,
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: r,
                            placeholders: {
                                walletOverlayPageContent: new P(function() {
                                    return [t.createElement(d, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex flex-direction-column justify-content-center align-items-center full-width gap-m",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "2"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(y, {
                                        image: i.Navigation.VersionedURL.getVersionedUrl("img/tradershub.cashier_down.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "3"
                                        },
                                        _widgetRecordProvider: r
                                    }), t.createElement(d, {
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
                                        style: g.getCachedValue(e.getId("P6hWXp1jKE69QeM51RZkKw.Style"), function() {
                                            return "font-bold " + (p.isDesktop$Action(m).isDesktopOut ? "heading5" : "heading4")
                                        }),
                                        text: [l(c("P6hWXp1jKE69QeM51RZkKw#Value", "Withdrawals are temporarily down "))],
                                        _idProps: {
                                            service: e,
                                            uuid: "5"
                                        },
                                        _widgetRecordProvider: r
                                    }), l(c("4UA3hh6GH0CpRstvFOn8gg#Value", "Please contact us via live chat for assistance."))), t.createElement(d, {
                                        align: 0,
                                        animate: !0,
                                        visible: g.getCachedValue(e.getId("S547Nds6xUKwUWDecdYx+g.Visible"), function() {
                                            return p.isDesktop$Action(m).isDesktopOut
                                        }),
                                        _idProps: {
                                            service: e,
                                            uuid: "6"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(f, {
                                        enabled: !0,
                                        isDefault: !1,
                                        onClick: a(function() {
                                            try {
                                                i.Navigation.navigateTo(i.Navigation.generateScreenURL("tradershub", "wallets/withdrawal/disable", {}), i.Transitions.createTransition(i.Transitions.TransitionAnimation.Default), null, !0)
                                            } catch (n) {
                                                if (n.name !== "RedirectOccurredException") throw n
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
                                        text: [l(c("3+n4w+zeiEeO6mNYPZELMQ#Value", "Live chat"))],
                                        _idProps: {
                                            service: e,
                                            uuid: "8"
                                        },
                                        _widgetRecordProvider: r
                                    }))))]
                                }),
                                mobileFooterContent: new P(function() {
                                    return [t.createElement(d, {
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
                                        onClick: a(function() {
                                            try {
                                                i.Navigation.navigateTo(i.Navigation.generateScreenURL("tradershub", "wallets/withdrawal/disable", {}), i.Transitions.createTransition(i.Transitions.TransitionAnimation.Default), null, !0)
                                            } catch (n) {
                                                if (n.name !== "RedirectOccurredException") throw n
                                            }
                                        }, "onClick"),
                                        style: "btn btn-primary full-width",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "10"
                                        },
                                        _widgetRecordProvider: r
                                    }, l(c("gyzUmDtrOUeXmhAvxGselg#Value", "Live Chat"))))]
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
a(s, "View");
var _ = s,
    H = _;
export {
    H as
    default
};