import {
    a as C
} from "./_oschunk-BDRYCFRN.js";
import {
    a as W
} from "./_oschunk-67Y4G6GY.js";
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
    y as P
} from "./_oschunk-HUOHOHZB.js";
import "./_oschunk-Y45M2O2K.js";
import {
    a as V,
    g as O,
    i as p
} from "./_oschunk-6LASTRK7.js";
import "./_oschunk-TIJZDWYD.js";
import "./_oschunk-27GDEXUT.js";
import {
    a as g
} from "./_oschunk-D2MH3QEK.js";
import "./_oschunk-WJ75ZXAT.js";
import "./_oschunk-3WNR72F6.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-HQOLQB4T.js";
import {
    ia as y
} from "./_oschunk-NTQBNJ73.js";
import {
    c as r,
    g as E
} from "./_oschunk-DVBKI63I.js";
var t = E(V());
var d = y,
    _ = p.PlaceholderContent,
    H = p.IteratorPlaceholderContent,
    a = class a extends O.BaseWebScreen {
        static get displayName() {
            return "WalletFlows.WalletsEmailFailedVerificationWithdrawal"
        }
        static getAttributes() {
            return {
                codeFunction: "WalletsEmailFailedVerificationWithdrawal",
                functionKey: "5065f5a4-2ffe-47dc-8c10-fd4edcd4b447",
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
                n = this.controller,
                e = this.idService,
                v = n.validationService,
                i = n.callContext(),
                s = a.asPrimitiveValue,
                x = a.getTranslation,
                u = this;
            return "Withdrawal"
        }
        internalRender() {
            let c = this.model,
                n = this.controller,
                e = this.idService,
                v = n.validationService,
                i = this.widgetsRecordProvider,
                s = n.callContext(),
                x = a.ifWidget,
                u = a.textWidget,
                k = a.asPrimitiveValue,
                f = a.getTranslation,
                m = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(S, {
                getOwnerSpan: r(function() {
                    return m.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: r(function() {
                    return m.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: r(function(o) {
                        n.handleError(o)
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
                _widgetRecordProvider: i,
                placeholders: {
                    content: new _(function() {
                        return [t.createElement(w, {
                            getOwnerSpan: r(function() {
                                return m.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: r(function() {
                                return m.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                HideBackButton: !0,
                                PageTitle: "Withdraw",
                                HideWalletHeader: !1
                            },
                            events: {
                                _handleError: r(function(o) {
                                    n.handleError(o)
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
                            _widgetRecordProvider: i,
                            placeholders: {
                                walletOverlayPageContent: new _(function() {
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
                                        image: d.Navigation.VersionedURL.getVersionedUrl("img/tradershub.Wallets_fail_email_verification.svg"),
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
                                    }, t.createElement(P, {
                                        style: c.getCachedValue(e.getId("ZMrYkBmxZ0qqFhgYBdciYA.Style"), function() {
                                            return "font-bold " + (g.isDesktop$Action(s).isDesktopOut ? "heading5" : "heading4")
                                        }),
                                        text: [u(f("ZMrYkBmxZ0qqFhgYBdciYA#Value", "Email verification failed"))],
                                        _idProps: {
                                            service: e,
                                            uuid: "5"
                                        },
                                        _widgetRecordProvider: i
                                    }), u(f("qLcKKra05E6HKYefG2t6dA#Value", "The verification link you used is invalid or expired. Please request for a new one."))), t.createElement(l, {
                                        align: 0,
                                        animate: !0,
                                        visible: c.getCachedValue(e.getId("FlWDzbeg00uk59SIhWYPyQ.Visible"), function() {
                                            return g.isDesktop$Action(s).isDesktopOut
                                        }),
                                        _idProps: {
                                            service: e,
                                            uuid: "6"
                                        },
                                        _widgetRecordProvider: i
                                    }, t.createElement(h, {
                                        enabled: !0,
                                        gridProperties: {
                                            marginLeft: "0"
                                        },
                                        isDefault: !1,
                                        onClick: r(function() {
                                            return Promise.resolve().then(function() {
                                                var o = s.clone();
                                                return n.resendEmailOnClick$Action(n.callContext(o))
                                            })
                                        }, "onClick"),
                                        style: c.getCachedValue(e.getId("4Yezkg3ODke8mbAq_5iRPQ.Style"), function() {
                                            return "btn btn-primary " + (g.isDesktop$Action(s).isDesktopOut ? "" : "full-width")
                                        }),
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: i
                                    }, t.createElement(P, {
                                        extendedProperties: {
                                            style: "font-size: 14px;"
                                        },
                                        text: [u(f("D6m0mm4TN0GPFyjvuLFTqA#Value", "Resend email"))],
                                        _idProps: {
                                            service: e,
                                            uuid: "8"
                                        },
                                        _widgetRecordProvider: i
                                    }))))]
                                }),
                                mobileFooterContent: new _(function() {
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
                                                d.Navigation.navigateTo(d.Navigation.generateScreenURL("tradershub", "wallets/withdrawal/disable", {}), d.Transitions.createTransition(d.Transitions.TransitionAnimation.Default), null, !0)
                                            } catch (o) {
                                                if (o.name !== "RedirectOccurredException") throw o
                                            }
                                        }, "onClick"),
                                        style: "btn btn-primary full-width",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "10"
                                        },
                                        _widgetRecordProvider: i
                                    }, "Resend email"))]
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
var b = a,
    K = b;
export {
    K as
    default
};