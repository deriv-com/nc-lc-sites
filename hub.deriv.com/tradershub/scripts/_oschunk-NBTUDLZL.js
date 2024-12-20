import {
    a as R
} from "./_oschunk-CLU62SR7.js";
import {
    a as W
} from "./_oschunk-INCX5IND.js";
import {
    a as w
} from "./_oschunk-MQ3SXFQ7.js";
import "./_oschunk-W6ZEDFD5.js";
import "./_oschunk-AKPRKE3L.js";
import "./_oschunk-7EJDEKFB.js";
import "./_oschunk-EK7BIWKQ.js";
import "./_oschunk-RAZ4EXDC.js";
import "./_oschunk-PCMUJO6C.js";
import {
    a as _
} from "./_oschunk-ZGZGC7WW.js";
import "./_oschunk-GSA6MIEZ.js";
import "./_oschunk-PASQVAVD.js";
import "./_oschunk-TMT5K6IM.js";
import "./_oschunk-U5BVDMC7.js";
import "./_oschunk-GRCLOXGJ.js";
import "./_oschunk-VWJXDAKN.js";
import {
    b as h,
    h as c,
    r as O,
    y as S
} from "./_oschunk-E7JQAU4J.js";
import "./_oschunk-5N5TJ3ES.js";
import {
    a as V,
    g as C,
    i as p
} from "./_oschunk-T77XORCW.js";
import "./_oschunk-2TPJE4AL.js";
import "./_oschunk-VADNKVBQ.js";
import {
    l as m
} from "./_oschunk-OOUVJ7PM.js";
import "./_oschunk-ZKKCTARK.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-KG7LSUIA.js";
import {
    ia as y
} from "./_oschunk-5EPHB76O.js";
import {
    c as n,
    g as x
} from "./_oschunk-DVBKI63I.js";
var t = x(V());
var d = y,
    P = p.PlaceholderContent,
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
            return [_, w]
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
                E = o.getTranslation,
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
                E = o.ifWidget,
                l = o.textWidget,
                k = o.asPrimitiveValue,
                g = o.getTranslation,
                v = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(_, {
                getOwnerSpan: n(function() {
                    return v.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: n(function() {
                    return v.getChildSpan("destroy")
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
                    content: new P(function() {
                        return [t.createElement(w, {
                            getOwnerSpan: n(function() {
                                return v.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return v.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                HideBackButton: !0,
                                PageTitle: d.Injector.resolve(d.ServiceNames.TranslationsService).getMessage("NRiYgU2eNkezn_86LNSDtQ#Value.-875598038.1", "Withdraw"),
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
                                walletOverlayPageContent: new P(function() {
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
                                            return "font-bold " + (m.isDesktop$Action(s).isDesktopOut ? "heading5" : "heading4")
                                        }),
                                        text: [l(g("bhEAekWznEu_tgMpgMiy7A#Value", "Verification needed"))],
                                        _idProps: {
                                            service: e,
                                            uuid: "5"
                                        },
                                        _widgetRecordProvider: r
                                    }), l(g("L7Jue7DdRke6vhvwuAbF6g#Value", "To continue withdrawal, verify it\u2019s you. We will send a verification link to your email."))), t.createElement(c, {
                                        align: 0,
                                        animate: !0,
                                        visible: u.getCachedValue(e.getId("l7eaxGYMjkqNiofa5_BZ6w.Visible"), function() {
                                            return m.isDesktop$Action(s).isDesktopOut
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
                                            return "btn btn-primary " + (m.isDesktop$Action(s).isDesktopOut ? "" : "full-width")
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
                                mobileFooterContent: new P(function() {
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