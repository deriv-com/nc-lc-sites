import {
    a as O
} from "./_oschunk-RUJ7RXVX.js";
import {
    a as x
} from "./_oschunk-STDLAWUQ.js";
import {
    a as P
} from "./_oschunk-6LHMKEZD.js";
import "./_oschunk-IDZWQMUL.js";
import "./_oschunk-4HOLBSDB.js";
import "./_oschunk-VLOO5HJV.js";
import "./_oschunk-IQUI5AIQ.js";
import "./_oschunk-FVTZGXVK.js";
import "./_oschunk-GDCJSJP3.js";
import {
    a as w
} from "./_oschunk-ODSHDLTB.js";
import "./_oschunk-HBEXL7KK.js";
import "./_oschunk-GEKOGHNU.js";
import "./_oschunk-SW7FWAXZ.js";
import "./_oschunk-BHZNFATE.js";
import {
    b as u,
    h as g,
    r as y,
    y as p
} from "./_oschunk-WAXNMQCP.js";
import "./_oschunk-LHY3WMNC.js";
import {
    a as k,
    g as R,
    i as S
} from "./_oschunk-J7LCUWB3.js";
import "./_oschunk-ESOYZIPG.js";
import "./_oschunk-XMOR6XCC.js";
import {
    a as f
} from "./_oschunk-H7UK4VZM.js";
import "./_oschunk-JSVFHRDW.js";
import "./_oschunk-LUKJNVXR.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-44PT7RP7.js";
import {
    ia as C
} from "./_oschunk-NTQBNJ73.js";
import {
    c as n,
    g as T
} from "./_oschunk-DVBKI63I.js";
var t = T(k());
var o = C,
    _ = S.PlaceholderContent,
    $ = S.IteratorPlaceholderContent,
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
            return [w, P]
        }
        get modelFactory() {
            return O
        }
        get controllerFactory() {
            return x
        }
        get title() {
            let v = this.model,
                a = this.controller,
                e = this.idService,
                h = a.validationService,
                r = a.callContext(),
                d = s.asPrimitiveValue,
                W = s.getTranslation,
                l = this;
            return o.Injector.resolve(o.ServiceNames.TranslationsService).getMessage("THg2IZaM4Um0F3_Sfiutzg#TitleExpression.363878613.1", "Withdrawal")
        }
        internalRender() {
            let v = this.model,
                a = this.controller,
                e = this.idService,
                h = a.validationService,
                r = this.widgetsRecordProvider,
                d = a.callContext(),
                W = s.ifWidget,
                l = s.textWidget,
                E = s.asPrimitiveValue,
                c = s.getTranslation,
                m = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(w, {
                getOwnerSpan: n(function() {
                    return m.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: n(function() {
                    return m.getChildSpan("destroy")
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
                    content: new _(function() {
                        return [t.createElement(P, {
                            getOwnerSpan: n(function() {
                                return m.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return m.getChildSpan("destroy")
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
                                walletOverlayPageContent: new _(function() {
                                    return [t.createElement(g, {
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
                                    }), t.createElement(g, {
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
                                        style: v.getCachedValue(e.getId("Nns+JaALTUi4i4cdCikCRw.Style"), function() {
                                            return "font-bold " + (f.isDesktop$Action(d).isDesktopOut ? "heading5" : "heading4")
                                        }),
                                        text: [l(c("Nns+JaALTUi4i4cdCikCRw#Value", "You have no funds in your wallet!"))],
                                        _idProps: {
                                            service: e,
                                            uuid: "5"
                                        },
                                        _widgetRecordProvider: r
                                    }), l(c("IJvkxuQfT02m5I_2VNSZvA#Value", "Make a deposit or transfer funds from another account."))), t.createElement(g, {
                                        align: 0,
                                        animate: !0,
                                        style: "display-flex gap-s",
                                        visible: v.getCachedValue(e.getId("Q574o7VrvEegS0fxHmmDLA.Visible"), function() {
                                            return f.isDesktop$Action(d).isDesktopOut
                                        }),
                                        _idProps: {
                                            service: e,
                                            uuid: "6"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(u, {
                                        enabled: !0,
                                        isDefault: !1,
                                        onClick: n(function() {
                                            try {
                                                o.Navigation.navigateTo(o.Navigation.generateScreenURL("tradershub", "wallets/transfer/:to?", {}), o.Transitions.createTransition(o.Transitions.TransitionAnimation.Default), null, !0)
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
                                        text: [l(c("u8bRYj2AjUmGSYQ++Wwucw#Value", "Transfer funds"))],
                                        _idProps: {
                                            service: e,
                                            uuid: "8"
                                        },
                                        _widgetRecordProvider: r
                                    })), t.createElement(u, {
                                        enabled: !0,
                                        gridProperties: {
                                            marginLeft: "0"
                                        },
                                        isDefault: !1,
                                        onClick: n(function() {
                                            var i = d.clone();
                                            a.makeADepositOnClick$Action(a.callContext(i))
                                        }, "onClick"),
                                        style: v.getCachedValue(e.getId("WbyhlQgtG0KWY27lb3vTOA.Style"), function() {
                                            return "btn btn-primary " + (f.isDesktop$Action(d).isDesktopOut ? "" : "full-width")
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
                                        text: [l(c("SLcjXZbMpEScscntKKD3kw#Value", "Make a deposit"))],
                                        _idProps: {
                                            service: e,
                                            uuid: "10"
                                        },
                                        _widgetRecordProvider: r
                                    }))))]
                                }),
                                mobileFooterContent: new _(function() {
                                    return [t.createElement(g, {
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
                                    }, t.createElement(u, {
                                        enabled: !0,
                                        isDefault: !1,
                                        onClick: n(function() {
                                            var i = d.clone();
                                            a.makeADepositOnClick$Action(a.callContext(i))
                                        }, "onClick"),
                                        style: "btn btn-primary full-width",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "12"
                                        },
                                        _widgetRecordProvider: r
                                    }, l(c("iP5y4kZWiUC4t7dR2JPhjg#Value", "Make a deposit"))), t.createElement(u, {
                                        enabled: !0,
                                        gridProperties: {
                                            marginLeft: "0px"
                                        },
                                        isDefault: !1,
                                        onClick: n(function() {
                                            try {
                                                o.Navigation.navigateTo(o.Navigation.generateScreenURL("tradershub", "wallets/transfer/:to?", {}), o.Transitions.createTransition(o.Transitions.TransitionAnimation.Default), null, !0)
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
                                    }, l(c("JSQR4gbhnEia2_HWdlrl4w#Value", "Transfer funds"))))]
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
var b = s,
    j = b;
export {
    j as
    default
};