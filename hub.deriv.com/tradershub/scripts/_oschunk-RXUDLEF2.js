import {
    a as O
} from "./_oschunk-VGZFYPSS.js";
import {
    a as W
} from "./_oschunk-FGBYF37K.js";
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
    a as w
} from "./_oschunk-RRERX77H.js";
import "./_oschunk-HBEXL7KK.js";
import "./_oschunk-NJYKWZYU.js";
import "./_oschunk-SW7FWAXZ.js";
import "./_oschunk-BHZNFATE.js";
import {
    b as p,
    h as l,
    r as C,
    y as h
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
    ia as b
} from "./_oschunk-NTQBNJ73.js";
import {
    c as n,
    g as x
} from "./_oschunk-DVBKI63I.js";
var t = x(E());
var k = b,
    P = f.PlaceholderContent,
    N = f.IteratorPlaceholderContent,
    o = class o extends y.BaseWebScreen {
        static get displayName() {
            return "WalletFlows.WalletsUserVerificationWithdrawal"
        }
        static getAttributes() {
            return {
                codeFunction: "WalletsUserVerificationWithdrawal",
                functionKey: "2baa4064-11b7-4a6c-93a0-c28329db64fe",
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
            return [w, S]
        }
        get modelFactory() {
            return O
        }
        get controllerFactory() {
            return W
        }
        get title() {
            let d = this.model,
                i = this.controller,
                e = this.idService,
                g = i.validationService,
                r = i.callContext(),
                s = o.asPrimitiveValue,
                R = o.getTranslation,
                c = this;
            return "Withdrawal"
        }
        internalRender() {
            let d = this.model,
                i = this.controller,
                e = this.idService,
                g = i.validationService,
                r = this.widgetsRecordProvider,
                s = i.callContext(),
                R = o.ifWidget,
                c = o.textWidget,
                V = o.asPrimitiveValue,
                v = o.getTranslation,
                u = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(w, {
                getOwnerSpan: n(function() {
                    return u.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: n(function() {
                    return u.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: n(function(a) {
                        i.handleError(a)
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
                            getOwnerSpan: n(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                PageTitle: "Withdraw",
                                HideBackButton: !0,
                                HideWalletHeader: !1
                            },
                            events: {
                                _handleError: n(function(a) {
                                    i.handleError(a)
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
                                    }, t.createElement(C, {
                                        image: k.Navigation.VersionedURL.getVersionedUrl("img/tradershub.Wallets_user_verification.svg"),
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
                                    }, t.createElement(h, {
                                        style: d.getCachedValue(e.getId("bhEAekWznEu_tgMpgMiy7A.Style"), function() {
                                            return "font-bold " + (m.isDesktop$Action(s).isDesktopOut ? "heading5" : "heading4")
                                        }),
                                        text: [c(v("bhEAekWznEu_tgMpgMiy7A#Value", "Confirm your identity to make a withdrawal"))],
                                        _idProps: {
                                            service: e,
                                            uuid: "5"
                                        },
                                        _widgetRecordProvider: r
                                    }), c(v("L7Jue7DdRke6vhvwuAbF6g#Value", "To confirm that it\u2019s you making the withdrawal request, we will email you a verification link."))), t.createElement(l, {
                                        align: 0,
                                        animate: !0,
                                        visible: d.getCachedValue(e.getId("l7eaxGYMjkqNiofa5_BZ6w.Visible"), function() {
                                            return m.isDesktop$Action(s).isDesktopOut
                                        }),
                                        _idProps: {
                                            service: e,
                                            uuid: "6"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(p, {
                                        enabled: !0,
                                        gridProperties: {
                                            marginLeft: "0"
                                        },
                                        isDefault: !1,
                                        onClick: n(function() {
                                            return Promise.resolve().then(function() {
                                                var a = s.clone();
                                                return i.sendEmailOnClick$Action(i.callContext(a))
                                            })
                                        }, "onClick"),
                                        style: d.getCachedValue(e.getId("4tRygbqinEust6ILZUug+Q.Style"), function() {
                                            return "btn btn-primary " + (m.isDesktop$Action(s).isDesktopOut ? "" : "full-width")
                                        }),
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(h, {
                                        extendedProperties: {
                                            style: "font-size: 14px;"
                                        },
                                        text: [c(v("cId6qicaTEiKqrbRcL2VhQ#Value", "Send link"))],
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
                                    }, t.createElement(p, {
                                        enabled: !0,
                                        isDefault: !1,
                                        onClick: n(function() {
                                            return Promise.resolve().then(function() {
                                                var a = s.clone();
                                                return i.sendEmailOnClick$Action(i.callContext(a))
                                            })
                                        }, "onClick"),
                                        style: "btn btn-primary full-width",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "10"
                                        },
                                        _widgetRecordProvider: r
                                    }, "Send link"))]
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
var _ = o,
    z = _;
export {
    z as
    default
};