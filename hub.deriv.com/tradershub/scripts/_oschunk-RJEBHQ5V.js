import {
    a as C
} from "./_oschunk-U3JY35KM.js";
import {
    a as W
} from "./_oschunk-J3KZDE74.js";
import {
    a as w
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
    b as h,
    h as c,
    r as R,
    y as b
} from "./_oschunk-WAXNMQCP.js";
import "./_oschunk-LHY3WMNC.js";
import {
    a as E,
    g as y,
    i as f
} from "./_oschunk-J7LCUWB3.js";
import "./_oschunk-ESOYZIPG.js";
import "./_oschunk-XMOR6XCC.js";
import {
    a as m
} from "./_oschunk-H7UK4VZM.js";
import "./_oschunk-JSVFHRDW.js";
import "./_oschunk-LUKJNVXR.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-44PT7RP7.js";
import {
    ia as O
} from "./_oschunk-NTQBNJ73.js";
import {
    c as n,
    g as D
} from "./_oschunk-DVBKI63I.js";
var t = D(E());
var r = O,
    _ = f.PlaceholderContent,
    K = f.IteratorPlaceholderContent,
    o = class o extends y.BaseWebScreen {
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
            let d = this.model,
                s = this.controller,
                e = this.idService,
                p = s.validationService,
                i = s.callContext(),
                u = o.asPrimitiveValue,
                x = o.getTranslation,
                l = this;
            return r.Injector.resolve(r.ServiceNames.TranslationsService).getMessage("cvh_fTNWI06ITb6gHa0aYA#TitleExpression.-1075859842.1", "Deposit")
        }
        internalRender() {
            let d = this.model,
                s = this.controller,
                e = this.idService,
                p = s.validationService,
                i = this.widgetsRecordProvider,
                u = s.callContext(),
                x = o.ifWidget,
                l = o.textWidget,
                T = o.asPrimitiveValue,
                g = o.getTranslation,
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
                    _handleError: n(function(a) {
                        s.handleError(a)
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
                    content: new _(function() {
                        return [t.createElement(w, {
                            getOwnerSpan: n(function() {
                                return v.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return v.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                PageTitle: "Deposit",
                                HideWalletHeader: !0,
                                HideBackButton: !0
                            },
                            events: {
                                _handleError: n(function(a) {
                                    s.handleError(a)
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
                                walletOverlayPageContent: new _(function() {
                                    return [t.createElement(c, {
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
                                        image: r.Navigation.VersionedURL.getVersionedUrl("img/tradershub.cashier_down.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "3"
                                        },
                                        _widgetRecordProvider: i
                                    }), t.createElement(c, {
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
                                        style: d.getCachedValue(e.getId("Y0+ebZQivEObC+U8jpco3g.Style"), function() {
                                            return "font-bold " + (m.isDesktop$Action(u).isDesktopOut ? "heading5" : "heading4")
                                        }),
                                        text: [l(g("Y0+ebZQivEObC+U8jpco3g#Value", "Deposit is temporarily down"))],
                                        _idProps: {
                                            service: e,
                                            uuid: "5"
                                        },
                                        _widgetRecordProvider: i
                                    }), l(g("XnKA6rBW3ke_P4X4nIbrkA#Value", "Please contact us via live chat for assistance."))), t.createElement(c, {
                                        align: 0,
                                        animate: !0,
                                        visible: d.getCachedValue(e.getId("Isp2i_bKRkOm7fihywrbBg.Visible"), function() {
                                            return m.isDesktop$Action(u).isDesktopOut
                                        }),
                                        _idProps: {
                                            service: e,
                                            uuid: "6"
                                        },
                                        _widgetRecordProvider: i
                                    }, t.createElement(h, {
                                        enabled: !0,
                                        isDefault: !1,
                                        onClick: n(function() {
                                            try {
                                                r.Navigation.navigateTo(r.Navigation.generateScreenURL("tradershub", "wallets/deposit/disable", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default), null, !0)
                                            } catch (a) {
                                                if (a.name !== "RedirectOccurredException") throw a
                                            }
                                        }, "onClick"),
                                        style: d.getCachedValue(e.getId("hKpbqYOHGUGWOdo6i8JVmA.Style"), function() {
                                            return "btn btn-primary " + (m.isDesktop$Action(u).isDesktopOut ? "" : "full-width")
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
                                        text: [l(g("plPzcZctakG9feFYLno3IQ#Value", "Live chat"))],
                                        _idProps: {
                                            service: e,
                                            uuid: "8"
                                        },
                                        _widgetRecordProvider: i
                                    }))))]
                                }),
                                mobileFooterContent: new _(function() {
                                    return [t.createElement(c, {
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
                                        onClick: n(function() {
                                            try {
                                                r.Navigation.navigateTo(r.Navigation.generateScreenURL("tradershub", "wallets/withdrawal/disable", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default), null, !0)
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
                                        _widgetRecordProvider: i
                                    }, l(g("tBuFdr80V02e+uw1j_O2QQ#Value", "Live chat"))))]
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
n(o, "View");
var P = o,
    Q = P;
export {
    Q as
    default
};