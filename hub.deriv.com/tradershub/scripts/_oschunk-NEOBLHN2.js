import {
    a as R
} from "./_oschunk-KCZY3LEZ.js";
import {
    a as W
} from "./_oschunk-X524R2L4.js";
import {
    a as S
} from "./_oschunk-MQ3SXFQ7.js";
import "./_oschunk-W6ZEDFD5.js";
import "./_oschunk-AKPRKE3L.js";
import "./_oschunk-7EJDEKFB.js";
import "./_oschunk-EK7BIWKQ.js";
import "./_oschunk-RAZ4EXDC.js";
import "./_oschunk-PCMUJO6C.js";
import {
    a as P
} from "./_oschunk-ZGZGC7WW.js";
import "./_oschunk-GSA6MIEZ.js";
import "./_oschunk-PASQVAVD.js";
import "./_oschunk-TMT5K6IM.js";
import "./_oschunk-U5BVDMC7.js";
import "./_oschunk-GRCLOXGJ.js";
import "./_oschunk-VWJXDAKN.js";
import {
    b as p,
    h as d,
    r as y,
    y as h
} from "./_oschunk-E7JQAU4J.js";
import "./_oschunk-5N5TJ3ES.js";
import {
    a as V,
    g as b,
    i as f
} from "./_oschunk-T77XORCW.js";
import "./_oschunk-2TPJE4AL.js";
import "./_oschunk-VADNKVBQ.js";
import {
    l as g
} from "./_oschunk-OOUVJ7PM.js";
import "./_oschunk-ZKKCTARK.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-KG7LSUIA.js";
import {
    ia as C
} from "./_oschunk-5EPHB76O.js";
import {
    c as n,
    g as E
} from "./_oschunk-DVBKI63I.js";
var t = E(V());
var _ = C,
    w = f.PlaceholderContent,
    $ = f.IteratorPlaceholderContent,
    o = class o extends b.BaseWebScreen {
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
            return [P, S]
        }
        get modelFactory() {
            return R
        }
        get controllerFactory() {
            return W
        }
        get title() {
            let c = this.model,
                r = this.controller,
                e = this.idService,
                v = r.validationService,
                i = r.callContext(),
                s = o.asPrimitiveValue,
                x = o.getTranslation,
                l = this;
            return _.Injector.resolve(_.ServiceNames.TranslationsService).getMessage("pPVlUP4v3EeMEP1O3NS0Rw#TitleExpression.363878613.1", "Withdrawal")
        }
        internalRender() {
            let c = this.model,
                r = this.controller,
                e = this.idService,
                v = r.validationService,
                i = this.widgetsRecordProvider,
                s = r.callContext(),
                x = o.ifWidget,
                l = o.textWidget,
                k = o.asPrimitiveValue,
                u = o.getTranslation,
                m = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(P, {
                getOwnerSpan: n(function() {
                    return m.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: n(function() {
                    return m.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: n(function(a) {
                        r.handleError(a)
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
                    content: new w(function() {
                        return [t.createElement(S, {
                            getOwnerSpan: n(function() {
                                return m.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return m.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                HideBackButton: !0,
                                PageTitle: "Withdraw",
                                HideWalletHeader: !0
                            },
                            events: {
                                _handleError: n(function(a) {
                                    r.handleError(a)
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
                                walletOverlayPageContent: new w(function() {
                                    return [t.createElement(d, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex flex-direction-column justify-content-center align-items-center full-width gap-m",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "2"
                                        },
                                        _widgetRecordProvider: i
                                    }, t.createElement(y, {
                                        image: _.Navigation.VersionedURL.getVersionedUrl("img/tradershub.Wallets_fail_email_verification.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "3"
                                        },
                                        _widgetRecordProvider: i
                                    }), t.createElement(d, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex flex-direction-column gap-s text-align-center",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "4"
                                        },
                                        _widgetRecordProvider: i
                                    }, t.createElement(h, {
                                        style: c.getCachedValue(e.getId("ZMrYkBmxZ0qqFhgYBdciYA.Style"), function() {
                                            return "font-bold " + (g.isDesktop$Action(s).isDesktopOut ? "heading5" : "heading4")
                                        }),
                                        text: [l(u("ZMrYkBmxZ0qqFhgYBdciYA#Value", "Email verification failed"))],
                                        _idProps: {
                                            service: e,
                                            uuid: "5"
                                        },
                                        _widgetRecordProvider: i
                                    }), l(u("qLcKKra05E6HKYefG2t6dA#Value", "The verification link you used is invalid or expired. Please request for a new one."))), t.createElement(d, {
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
                                    }, t.createElement(p, {
                                        enabled: !0,
                                        gridProperties: {
                                            marginLeft: "0"
                                        },
                                        isDefault: !1,
                                        onClick: n(function() {
                                            return Promise.resolve().then(function() {
                                                var a = s.clone();
                                                return r.resendEmailOnClick$Action(r.callContext(a))
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
                                    }, t.createElement(h, {
                                        extendedProperties: {
                                            style: "font-size: 14px;"
                                        },
                                        text: [l(u("D6m0mm4TN0GPFyjvuLFTqA#Value", "Resend email"))],
                                        _idProps: {
                                            service: e,
                                            uuid: "8"
                                        },
                                        _widgetRecordProvider: i
                                    }))))]
                                }),
                                mobileFooterContent: new w(function() {
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
                                        _widgetRecordProvider: i
                                    }, t.createElement(p, {
                                        enabled: !0,
                                        isDefault: !1,
                                        onClick: n(function() {
                                            return Promise.resolve().then(function() {
                                                var a = s.clone();
                                                return r.resendEmailOnClick$Action(r.callContext(a))
                                            })
                                        }, "onClick"),
                                        style: "btn btn-primary full-width",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "10"
                                        },
                                        _widgetRecordProvider: i
                                    }, l(u("rodV2KnBO06xiML1rAd+cg#Value", "Resend email"))))]
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
var O = o,
    H = O;
export {
    H as
    default
};