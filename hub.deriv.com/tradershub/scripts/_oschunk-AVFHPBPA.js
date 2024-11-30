import {
    a as R
} from "./_oschunk-VGZFYPSS.js";
import {
    a as W
} from "./_oschunk-PXJWYVY2.js";
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
    b as h,
    h as c,
    r as O,
    y as S
} from "./_oschunk-WAXNMQCP.js";
import "./_oschunk-LHY3WMNC.js";
import {
    a as k,
    g as C,
    i as p
} from "./_oschunk-J7LCUWB3.js";
import "./_oschunk-ESOYZIPG.js";
import "./_oschunk-XMOR6XCC.js";
import {
    a as v
} from "./_oschunk-H7UK4VZM.js";
import "./_oschunk-JSVFHRDW.js";
import "./_oschunk-LUKJNVXR.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-44PT7RP7.js";
import {
    ia as y
} from "./_oschunk-NTQBNJ73.js";
import {
    c as n,
    g as E
} from "./_oschunk-DVBKI63I.js";
var t = E(k());
var d = y,
    _ = p.PlaceholderContent,
    H = p.IteratorPlaceholderContent,
    o = class o extends C.BaseWebScreen {
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
            return [w, P]
        }
        get modelFactory() {
            return R
        }
        get controllerFactory() {
            return W
        }
        get title() {
            let u = this.model,
                i = this.controller,
                e = this.idService,
                f = i.validationService,
                r = i.callContext(),
                s = o.asPrimitiveValue,
                x = o.getTranslation,
                l = this;
            return d.Injector.resolve(d.ServiceNames.TranslationsService).getMessage("ZECqK7cRbEqToMKDKdtk_g#TitleExpression.363878613.1", "Withdrawal")
        }
        internalRender() {
            let u = this.model,
                i = this.controller,
                e = this.idService,
                f = i.validationService,
                r = this.widgetsRecordProvider,
                s = i.callContext(),
                x = o.ifWidget,
                l = o.textWidget,
                V = o.asPrimitiveValue,
                g = o.getTranslation,
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
                    _handleError: n(function(a) {
                        i.handleError(a)
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
                    content: new _(function() {
                        return [t.createElement(P, {
                            getOwnerSpan: n(function() {
                                return m.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return m.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                PageTitle: d.Injector.resolve(d.ServiceNames.TranslationsService).getMessage("3xrroemtO0WUpeBYVGkQ6Q#Value.-875598038.1", "Withdraw"),
                                HideBackButton: !0,
                                HideWalletHeader: !1
                            },
                            events: {
                                _handleError: n(function(a) {
                                    i.handleError(a)
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
                                        _widgetRecordProvider: r
                                    }, t.createElement(O, {
                                        image: d.Navigation.VersionedURL.getVersionedUrl("img/tradershub.Wallets_user_verification.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "3"
                                        },
                                        _widgetRecordProvider: r
                                    }), t.createElement(c, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex flex-direction-column gap-s text-align-center",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "4"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(S, {
                                        style: u.getCachedValue(e.getId("bhEAekWznEu_tgMpgMiy7A.Style"), function() {
                                            return "font-bold " + (v.isDesktop$Action(s).isDesktopOut ? "heading5" : "heading4")
                                        }),
                                        text: [l(g("bhEAekWznEu_tgMpgMiy7A#Value", "Confirm your identity to make a withdrawal"))],
                                        _idProps: {
                                            service: e,
                                            uuid: "5"
                                        },
                                        _widgetRecordProvider: r
                                    }), l(g("L7Jue7DdRke6vhvwuAbF6g#Value", "To confirm that it\u2019s you making the withdrawal request, we will email you a verification link."))), t.createElement(c, {
                                        align: 0,
                                        animate: !0,
                                        visible: u.getCachedValue(e.getId("l7eaxGYMjkqNiofa5_BZ6w.Visible"), function() {
                                            return v.isDesktop$Action(s).isDesktopOut
                                        }),
                                        _idProps: {
                                            service: e,
                                            uuid: "6"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(h, {
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
                                        style: u.getCachedValue(e.getId("4tRygbqinEust6ILZUug+Q.Style"), function() {
                                            return "btn btn-primary " + (v.isDesktop$Action(s).isDesktopOut ? "" : "full-width")
                                        }),
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(S, {
                                        extendedProperties: {
                                            style: "font-size: 14px;"
                                        },
                                        text: [l(g("cId6qicaTEiKqrbRcL2VhQ#Value", "Send link"))],
                                        _idProps: {
                                            service: e,
                                            uuid: "8"
                                        },
                                        _widgetRecordProvider: r
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
                                        _widgetRecordProvider: r
                                    }, t.createElement(h, {
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
                                    }, l(g("FhPXN3cH+EaReugMOq3JNQ#Value", "Send link"))))]
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
var b = o,
    K = b;
export {
    K as
    default
};