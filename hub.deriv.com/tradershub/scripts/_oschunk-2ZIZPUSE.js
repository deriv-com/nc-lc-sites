import {
    a as V
} from "./_oschunk-LFMYWXFL.js";
import {
    a as w
} from "./_oschunk-QW5NCQA5.js";
import {
    a as k
} from "./_oschunk-BDILX4H7.js";
import "./_oschunk-4TEW3KH4.js";
import "./_oschunk-W6ZEDFD5.js";
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
    a as p,
    b as O,
    h as g,
    j as E,
    r as y,
    y as m
} from "./_oschunk-E7JQAU4J.js";
import "./_oschunk-5N5TJ3ES.js";
import {
    a as D,
    g as x,
    i as P
} from "./_oschunk-T77XORCW.js";
import "./_oschunk-2TPJE4AL.js";
import {
    a as h
} from "./_oschunk-VADNKVBQ.js";
import {
    l
} from "./_oschunk-OOUVJ7PM.js";
import "./_oschunk-ZKKCTARK.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-KG7LSUIA.js";
import {
    ia as W
} from "./_oschunk-5EPHB76O.js";
import {
    c as n,
    g as A
} from "./_oschunk-DVBKI63I.js";
var t = A(D());
var v = W,
    R = P.PlaceholderContent,
    N = P.IteratorPlaceholderContent,
    o = class o extends x.BaseWebScreen {
        static get displayName() {
            return "WalletFlows.WalletsEmailWithdrawal"
        }
        static getAttributes() {
            return {
                codeFunction: "WalletsEmailWithdrawal",
                functionKey: "7be9d81c-fb20-4385-b04b-eeb8c2b2bc72",
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
            return k
        }
        get controllerFactory() {
            return V
        }
        get title() {
            let a = this.model,
                r = this.controller,
                e = this.idService,
                S = r.validationService,
                i = r.callContext(),
                s = o.asPrimitiveValue,
                I = o.getTranslation,
                d = this;
            return v.Injector.resolve(v.ServiceNames.TranslationsService).getMessage("HNjpeyD7hUOwS+64wrK8cg#TitleExpression.363878613.1", "Withdrawal")
        }
        internalRender() {
            let a = this.model,
                r = this.controller,
                e = this.idService,
                S = r.validationService,
                i = this.widgetsRecordProvider,
                s = r.callContext(),
                I = o.ifWidget,
                d = o.textWidget,
                C = o.asPrimitiveValue,
                u = o.getTranslation,
                f = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(_, {
                getOwnerSpan: n(function() {
                    return f.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: n(function() {
                    return f.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: n(function(c) {
                        r.handleError(c)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: S
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: i,
                placeholders: {
                    content: new R(function() {
                        return [t.createElement(w, {
                            getOwnerSpan: n(function() {
                                return f.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return f.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                PageTitle: "Withdraw"
                            },
                            events: {
                                _handleError: n(function(c) {
                                    r.handleError(c)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: S
                            },
                            _idProps: {
                                service: e,
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: i,
                            placeholders: {
                                walletOverlayPageContent: new R(function() {
                                    return [t.createElement(g, {
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
                                        image: v.Navigation.VersionedURL.getVersionedUrl("img/tradershub.Wallets_email_open.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "3"
                                        },
                                        _widgetRecordProvider: i
                                    }), t.createElement(E, {
                                        gridProperties: {
                                            classes: "ThemeGrid_MarginGutter"
                                        },
                                        style: a.getCachedValue(e.getId("qYyTyGAqF0KLW_TopIoyaA.Style"), function() {
                                            return "font-bold text-align-center " + (l.isDesktop$Action(s).isDesktopOut ? "heading5" : "heading4")
                                        }),
                                        value: v.Injector.resolve(v.ServiceNames.TranslationsService).getMessage("gufnGqMsbE23O1btUhaO0w#ValueExpression.-1309903677.1", "We\u2019ve sent a verification link to ") + h.getClientEmail(),
                                        _idProps: {
                                            service: e,
                                            uuid: "4"
                                        },
                                        _widgetRecordProvider: i
                                    }), t.createElement(g, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "border-radius: 8px;"
                                        },
                                        style: a.getCachedValue(e.getId("DisclaimerMessage.Style"), function() {
                                            return "display-flex align-items-flex-start gap-s background-info-light full-width " + (l.isDesktop$Action(s).isDesktopOut ? "padding-base" : "padding-s")
                                        }),
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            name: "DisclaimerMessage"
                                        },
                                        _widgetRecordProvider: i
                                    }, t.createElement(y, {
                                        image: v.Navigation.VersionedURL.getVersionedUrl("img/tradershub.info_blue.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "6"
                                        },
                                        _widgetRecordProvider: i
                                    }), t.createElement(g, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex flex-direction-column",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: i
                                    }, t.createElement(m, {
                                        extendedProperties: {
                                            style: "font-weight: normal;"
                                        },
                                        style: a.getCachedValue(e.getId("Mu5Z7QhqtEep5bQxuRMbZg.Style"), function() {
                                            return l.isDesktop$Action(s).isDesktopOut ? "font-size-s" : "font-size-xs"
                                        }),
                                        text: [d(u("Mu5Z7QhqtEep5bQxuRMbZg#Value", "Didn't get an email? "))],
                                        _idProps: {
                                            service: e,
                                            uuid: "8"
                                        },
                                        _widgetRecordProvider: i
                                    }), t.createElement(p, {
                                        tag: "ul",
                                        _idProps: {
                                            service: e,
                                            uuid: "9"
                                        },
                                        _widgetRecordProvider: i
                                    }, t.createElement(p, {
                                        tag: "li",
                                        _idProps: {
                                            service: e,
                                            uuid: "10"
                                        },
                                        _widgetRecordProvider: i
                                    }, t.createElement(m, {
                                        style: a.getCachedValue(e.getId("bMz7RJEhOkKiyHlzwLV23A.Style"), function() {
                                            return l.isDesktop$Action(s).isDesktopOut ? "font-size-s" : "font-size-xs"
                                        }),
                                        text: [d(u("bMz7RJEhOkKiyHlzwLV23A#Value", "Make sure you\u2019ve entered your email correctly."))],
                                        _idProps: {
                                            service: e,
                                            uuid: "11"
                                        },
                                        _widgetRecordProvider: i
                                    })), t.createElement(p, {
                                        tag: "li",
                                        _idProps: {
                                            service: e,
                                            uuid: "12"
                                        },
                                        _widgetRecordProvider: i
                                    }, t.createElement(m, {
                                        style: a.getCachedValue(e.getId("a4IdFkUeqUefd7Og6TWq5A.Style"), function() {
                                            return l.isDesktop$Action(s).isDesktopOut ? "font-size-s" : "font-size-xs"
                                        }),
                                        text: [d(u("a4IdFkUeqUefd7Og6TWq5A#Value", "Check your spam folder."))],
                                        _idProps: {
                                            service: e,
                                            uuid: "13"
                                        },
                                        _widgetRecordProvider: i
                                    })), t.createElement(p, {
                                        tag: "li",
                                        _idProps: {
                                            service: e,
                                            uuid: "14"
                                        },
                                        _widgetRecordProvider: i
                                    }, t.createElement(m, {
                                        style: a.getCachedValue(e.getId("BO3xK8irDUuXyqM2KFFy9w.Style"), function() {
                                            return l.isDesktop$Action(s).isDesktopOut ? "font-size-s" : "font-size-xs"
                                        }),
                                        text: [d(u("BO3xK8irDUuXyqM2KFFy9w#Value", "Make sure the email isn\u2019t blocked by firewalls or filters."))],
                                        _idProps: {
                                            service: e,
                                            uuid: "15"
                                        },
                                        _widgetRecordProvider: i
                                    }))))), t.createElement(g, {
                                        align: 0,
                                        animate: !0,
                                        visible: a.getCachedValue(e.getId("M2rtSyZFKkCkgAUpNLGlPA.Visible"), function() {
                                            return l.isDesktop$Action(s).isDesktopOut
                                        }),
                                        _idProps: {
                                            service: e,
                                            uuid: "16"
                                        },
                                        _widgetRecordProvider: i
                                    }, t.createElement(O, {
                                        enabled: !0,
                                        isDefault: !1,
                                        onClick: n(function() {
                                            return Promise.resolve().then(function() {
                                                var c = s.clone();
                                                return r.resendEmailOnClick$Action(r.callContext(c))
                                            })
                                        }, "onClick"),
                                        style: "btn",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "17"
                                        },
                                        _widgetRecordProvider: i
                                    }, t.createElement(m, {
                                        extendedProperties: {
                                            style: "font-size: 14px;"
                                        },
                                        text: [d(u("6O5vm_YB9UK8aL2IHyVmMA#Value", "Resend email"))],
                                        _idProps: {
                                            service: e,
                                            uuid: "18"
                                        },
                                        _widgetRecordProvider: i
                                    }))))]
                                }),
                                mobileFooterContent: new R(function() {
                                    return [t.createElement(g, {
                                        align: 0,
                                        animate: !1,
                                        style: "padding-base",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "19"
                                        },
                                        _widgetRecordProvider: i
                                    }, t.createElement(O, {
                                        enabled: !0,
                                        isDefault: !1,
                                        onClick: n(function() {
                                            return Promise.resolve().then(function() {
                                                var c = s.clone();
                                                return r.resendEmailOnClick$Action(r.callContext(c))
                                            })
                                        }, "onClick"),
                                        style: "btn full-width",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "20"
                                        },
                                        _widgetRecordProvider: i
                                    }, d(u("kqgMT5c74kGVBtxVl5BbOA#Value", "Resent email"))))]
                                })
                            },
                            _dependencies: [C(h.getClientEmail())]
                        })]
                    })
                },
                _dependencies: [C(h.getClientEmail())]
            }))
        }
    };
n(o, "View");
var b = o,
    G = b;
export {
    G as
    default
};