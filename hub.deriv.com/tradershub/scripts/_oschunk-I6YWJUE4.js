import {
    a as C
} from "./_oschunk-U3JY35KM.js";
import {
    a as W
} from "./_oschunk-4CCV4DL4.js";
import {
    a as w
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
    b as h,
    h as l,
    r as R,
    y as b
} from "./_oschunk-HUOHOHZB.js";
import "./_oschunk-Y45M2O2K.js";
import {
    a as E,
    g as y,
    i as f
} from "./_oschunk-6LASTRK7.js";
import "./_oschunk-TIJZDWYD.js";
import "./_oschunk-27GDEXUT.js";
import {
    a as m
} from "./_oschunk-D2MH3QEK.js";
import "./_oschunk-WJ75ZXAT.js";
import "./_oschunk-3WNR72F6.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-HQOLQB4T.js";
import {
    ia as O
} from "./_oschunk-NTQBNJ73.js";
import {
    c as r,
    g as D
} from "./_oschunk-DVBKI63I.js";
var t = D(E());
var o = O,
    P = f.PlaceholderContent,
    H = f.IteratorPlaceholderContent,
    a = class a extends y.BaseWebScreen {
        static get displayName() {
            return "WalletFlows.WalletsDisableDeposit"
        }
        static getAttributes() {
            return {
                codeFunction: "WalletsDisableDeposit",
                functionKey: "7d7ff872-5633-4e23-884d-bea01dad1a60",
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
            return [S, w]
        }
        get modelFactory() {
            return C
        }
        get controllerFactory() {
            return W
        }
        get title() {
            let c = this.model,
                s = this.controller,
                e = this.idService,
                p = s.validationService,
                i = s.callContext(),
                d = a.asPrimitiveValue,
                x = a.getTranslation,
                u = this;
            return "Deposit"
        }
        internalRender() {
            let c = this.model,
                s = this.controller,
                e = this.idService,
                p = s.validationService,
                i = this.widgetsRecordProvider,
                d = s.callContext(),
                x = a.ifWidget,
                u = a.textWidget,
                V = a.asPrimitiveValue,
                v = a.getTranslation,
                g = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(S, {
                getOwnerSpan: r(function() {
                    return g.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: r(function() {
                    return g.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: r(function(n) {
                        s.handleError(n)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: p
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: i,
                placeholders: {
                    content: new P(function() {
                        return [t.createElement(w, {
                            getOwnerSpan: r(function() {
                                return g.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: r(function() {
                                return g.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                PageTitle: "Deposit",
                                HideWalletHeader: !0,
                                HideBackButton: !0
                            },
                            events: {
                                _handleError: r(function(n) {
                                    s.handleError(n)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: p
                            },
                            _idProps: {
                                service: e,
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: i,
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
                                        _widgetRecordProvider: i
                                    }, t.createElement(R, {
                                        image: o.Navigation.VersionedURL.getVersionedUrl("img/tradershub.cashier_down.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "3"
                                        },
                                        _widgetRecordProvider: i
                                    }), t.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex flex-direction-column gap-s text-align-center",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "4"
                                        },
                                        _widgetRecordProvider: i
                                    }, t.createElement(b, {
                                        style: c.getCachedValue(e.getId("Y0+ebZQivEObC+U8jpco3g.Style"), function() {
                                            return "font-bold " + (m.isDesktop$Action(d).isDesktopOut ? "heading5" : "heading4")
                                        }),
                                        text: [u(v("Y0+ebZQivEObC+U8jpco3g#Value", "Deposit is temporarily down"))],
                                        _idProps: {
                                            service: e,
                                            uuid: "5"
                                        },
                                        _widgetRecordProvider: i
                                    }), u(v("XnKA6rBW3ke_P4X4nIbrkA#Value", "Please contact us via live chat for assistance."))), t.createElement(l, {
                                        align: 0,
                                        animate: !0,
                                        visible: c.getCachedValue(e.getId("Isp2i_bKRkOm7fihywrbBg.Visible"), function() {
                                            return m.isDesktop$Action(d).isDesktopOut
                                        }),
                                        _idProps: {
                                            service: e,
                                            uuid: "6"
                                        },
                                        _widgetRecordProvider: i
                                    }, t.createElement(h, {
                                        enabled: !0,
                                        isDefault: !1,
                                        onClick: r(function() {
                                            try {
                                                o.Navigation.navigateTo(o.Navigation.generateScreenURL("tradershub", "wallets/deposit/disable", {}), o.Transitions.createTransition(o.Transitions.TransitionAnimation.Default), null, !0)
                                            } catch (n) {
                                                if (n.name !== "RedirectOccurredException") throw n
                                            }
                                        }, "onClick"),
                                        style: c.getCachedValue(e.getId("hKpbqYOHGUGWOdo6i8JVmA.Style"), function() {
                                            return "btn btn-primary " + (m.isDesktop$Action(d).isDesktopOut ? "" : "full-width")
                                        }),
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: i
                                    }, t.createElement(b, {
                                        extendedProperties: {
                                            style: "font-size: 14px;"
                                        },
                                        text: [u(v("plPzcZctakG9feFYLno3IQ#Value", "Live chat"))],
                                        _idProps: {
                                            service: e,
                                            uuid: "8"
                                        },
                                        _widgetRecordProvider: i
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
                                        _widgetRecordProvider: i
                                    }, t.createElement(h, {
                                        enabled: !0,
                                        isDefault: !1,
                                        onClick: r(function() {
                                            try {
                                                o.Navigation.navigateTo(o.Navigation.generateScreenURL("tradershub", "wallets/withdrawal/disable", {}), o.Transitions.createTransition(o.Transitions.TransitionAnimation.Default), null, !0)
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
                                        _widgetRecordProvider: i
                                    }, "Live chat"))]
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
r(a, "View");
var _ = a,
    Y = _;
export {
    Y as
    default
};