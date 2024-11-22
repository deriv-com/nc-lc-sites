import {
    a as O
} from "./_oschunk-RUJ7RXVX.js";
import {
    a as x
} from "./_oschunk-IEYTGB6Y.js";
import {
    a as b
} from "./_oschunk-DDSAAS3R.js";
import "./_oschunk-3EM3HOK7.js";
import "./_oschunk-4HOLBSDB.js";
import "./_oschunk-KE67QEAX.js";
import "./_oschunk-UK73WSZT.js";
import "./_oschunk-XGQAZLYY.js";
import "./_oschunk-GDCJSJP3.js";
import {
    a as S
} from "./_oschunk-RRERX77H.js";
import "./_oschunk-HBEXL7KK.js";
import "./_oschunk-NJYKWZYU.js";
import "./_oschunk-SW7FWAXZ.js";
import "./_oschunk-BHZNFATE.js";
import {
    b as c,
    h as u,
    r as y,
    y as p
} from "./_oschunk-HUOHOHZB.js";
import "./_oschunk-Y45M2O2K.js";
import {
    a as T,
    g as R,
    i as w
} from "./_oschunk-6LASTRK7.js";
import "./_oschunk-TIJZDWYD.js";
import "./_oschunk-27GDEXUT.js";
import {
    a as f
} from "./_oschunk-D2MH3QEK.js";
import "./_oschunk-WJ75ZXAT.js";
import "./_oschunk-3WNR72F6.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-HQOLQB4T.js";
import {
    ia as C
} from "./_oschunk-NTQBNJ73.js";
import {
    c as n,
    g as k
} from "./_oschunk-DVBKI63I.js";
var t = k(T());
var o = C,
    P = w.PlaceholderContent,
    M = w.IteratorPlaceholderContent,
    s = class s extends R.BaseWebScreen {
        static get displayName() {
            return "WalletFlows.WalletsNoBalanceWithdrawal"
        }
        static getAttributes() {
            return {
                codeFunction: "WalletsNoBalanceWithdrawal",
                functionKey: "2136784c-8c96-49e1-b417-7fd27e2badce",
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
            return O
        }
        get controllerFactory() {
            return x
        }
        get title() {
            let g = this.model,
                a = this.controller,
                e = this.idService,
                h = a.validationService,
                r = a.callContext(),
                l = s.asPrimitiveValue,
                W = s.getTranslation,
                d = this;
            return "Withdrawal"
        }
        internalRender() {
            let g = this.model,
                a = this.controller,
                e = this.idService,
                h = a.validationService,
                r = this.widgetsRecordProvider,
                l = a.callContext(),
                W = s.ifWidget,
                d = s.textWidget,
                E = s.asPrimitiveValue,
                m = s.getTranslation,
                v = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(S, {
                getOwnerSpan: n(function() {
                    return v.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: n(function() {
                    return v.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: n(function(i) {
                        a.handleError(i)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: h
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
                            getOwnerSpan: n(function() {
                                return v.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return v.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                HideBackButton: !0,
                                HideWalletHeader: !1,
                                PageTitle: "Withdraw"
                            },
                            events: {
                                _handleError: n(function(i) {
                                    a.handleError(i)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: h
                            },
                            _idProps: {
                                service: e,
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: r,
                            placeholders: {
                                walletOverlayPageContent: new P(function() {
                                    return [t.createElement(u, {
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
                                        image: o.Navigation.VersionedURL.getVersionedUrl("img/tradershub.Wallets_no_funds.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "3"
                                        },
                                        _widgetRecordProvider: r
                                    }), t.createElement(u, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex flex-direction-column gap-s text-align-center",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "4"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(p, {
                                        style: g.getCachedValue(e.getId("Nns+JaALTUi4i4cdCikCRw.Style"), function() {
                                            return "font-bold " + (f.isDesktop$Action(l).isDesktopOut ? "heading5" : "heading4")
                                        }),
                                        text: [d(m("Nns+JaALTUi4i4cdCikCRw#Value", "You have no funds in your wallet!"))],
                                        _idProps: {
                                            service: e,
                                            uuid: "5"
                                        },
                                        _widgetRecordProvider: r
                                    }), d(m("IJvkxuQfT02m5I_2VNSZvA#Value", "Make a deposit or transfer funds from another account."))), t.createElement(u, {
                                        align: 0,
                                        animate: !0,
                                        visible: g.getCachedValue(e.getId("Q574o7VrvEegS0fxHmmDLA.Visible"), function() {
                                            return f.isDesktop$Action(l).isDesktopOut
                                        }),
                                        _idProps: {
                                            service: e,
                                            uuid: "6"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(c, {
                                        enabled: !0,
                                        isDefault: !1,
                                        onClick: n(function() {
                                            try {
                                                o.Navigation.navigateTo(o.Navigation.generateScreenURL("tradershub", "wallets/withdrawal/no-balance", {}), o.Transitions.createTransition(o.Transitions.TransitionAnimation.Default), null, !0)
                                            } catch (i) {
                                                if (i.name !== "RedirectOccurredException") throw i
                                            }
                                        }, "onClick"),
                                        style: "btn",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(p, {
                                        extendedProperties: {
                                            style: "font-size: 14px;"
                                        },
                                        text: [d(m("u8bRYj2AjUmGSYQ++Wwucw#Value", "Transfer funds"))],
                                        _idProps: {
                                            service: e,
                                            uuid: "8"
                                        },
                                        _widgetRecordProvider: r
                                    })), t.createElement(c, {
                                        enabled: !0,
                                        gridProperties: {
                                            marginLeft: "0"
                                        },
                                        isDefault: !1,
                                        onClick: n(function() {
                                            var i = l.clone();
                                            a.makeADepositOnClick$Action(a.callContext(i))
                                        }, "onClick"),
                                        style: g.getCachedValue(e.getId("WbyhlQgtG0KWY27lb3vTOA.Style"), function() {
                                            return "btn btn-primary " + (f.isDesktop$Action(l).isDesktopOut ? "" : "full-width")
                                        }),
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "9"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(p, {
                                        extendedProperties: {
                                            style: "font-size: 14px;"
                                        },
                                        text: [d(m("SLcjXZbMpEScscntKKD3kw#Value", "Make a deposit"))],
                                        _idProps: {
                                            service: e,
                                            uuid: "10"
                                        },
                                        _widgetRecordProvider: r
                                    }))))]
                                }),
                                mobileFooterContent: new P(function() {
                                    return [t.createElement(u, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "border-top: 1px solid var(--color-neutral-3);"
                                        },
                                        style: "display-flex flex-direction-column align-items-center gap-s padding-base",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "11"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(c, {
                                        enabled: !0,
                                        isDefault: !1,
                                        onClick: n(function() {
                                            var i = l.clone();
                                            a.makeADepositOnClick$Action(a.callContext(i))
                                        }, "onClick"),
                                        style: "btn btn-primary full-width",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "12"
                                        },
                                        _widgetRecordProvider: r
                                    }, "Make a deposit"), t.createElement(c, {
                                        enabled: !0,
                                        gridProperties: {
                                            marginLeft: "0px"
                                        },
                                        isDefault: !1,
                                        onClick: n(function() {
                                            try {
                                                o.Navigation.navigateTo(o.Navigation.generateScreenURL("tradershub", "wallets/withdrawal/no-balance", {}), o.Transitions.createTransition(o.Transitions.TransitionAnimation.Default), null, !0)
                                            } catch (i) {
                                                if (i.name !== "RedirectOccurredException") throw i
                                            }
                                        }, "onClick"),
                                        style: "btn full-width",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "13"
                                        },
                                        _widgetRecordProvider: r
                                    }, "Transfer funds"))]
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
n(s, "View");
var _ = s,
    K = _;
export {
    K as
    default
};