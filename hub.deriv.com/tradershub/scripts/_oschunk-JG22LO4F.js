import {
    a as O
} from "./_oschunk-6DQPODKZ.js";
import {
    a as k
} from "./_oschunk-BXVG56FU.js";
import {
    a as E
} from "./_oschunk-5PHEXL35.js";
import "./_oschunk-Z23XQ5V7.js";
import "./_oschunk-3EM3HOK7.js";
import "./_oschunk-KE67QEAX.js";
import "./_oschunk-UK73WSZT.js";
import "./_oschunk-XGQAZLYY.js";
import "./_oschunk-GDCJSJP3.js";
import {
    a as y
} from "./_oschunk-RRERX77H.js";
import "./_oschunk-HBEXL7KK.js";
import "./_oschunk-NJYKWZYU.js";
import "./_oschunk-SW7FWAXZ.js";
import "./_oschunk-BHZNFATE.js";
import {
    a as v,
    b as S,
    h as u,
    j as x,
    r as _,
    y as g
} from "./_oschunk-HUOHOHZB.js";
import "./_oschunk-Y45M2O2K.js";
import {
    a as D,
    g as W,
    i as P
} from "./_oschunk-6LASTRK7.js";
import "./_oschunk-TIJZDWYD.js";
import {
    a as f
} from "./_oschunk-27GDEXUT.js";
import {
    a as l
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
    g as I
} from "./_oschunk-DVBKI63I.js";
var t = I(D());
var V = C,
    R = P.PlaceholderContent,
    N = P.IteratorPlaceholderContent,
    o = class o extends W.BaseWebScreen {
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
            return [y, O]
        }
        get modelFactory() {
            return E
        }
        get controllerFactory() {
            return k
        }
        get title() {
            let a = this.model,
                r = this.controller,
                e = this.idService,
                h = r.validationService,
                i = r.callContext(),
                s = o.asPrimitiveValue,
                A = o.getTranslation,
                c = this;
            return "Withdrawal"
        }
        internalRender() {
            let a = this.model,
                r = this.controller,
                e = this.idService,
                h = r.validationService,
                i = this.widgetsRecordProvider,
                s = r.callContext(),
                A = o.ifWidget,
                c = o.textWidget,
                b = o.asPrimitiveValue,
                m = o.getTranslation,
                p = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(y, {
                getOwnerSpan: n(function() {
                    return p.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: n(function() {
                    return p.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: n(function(d) {
                        r.handleError(d)
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
                _widgetRecordProvider: i,
                placeholders: {
                    content: new R(function() {
                        return [t.createElement(O, {
                            getOwnerSpan: n(function() {
                                return p.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return p.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                PageTitle: "Withdraw"
                            },
                            events: {
                                _handleError: n(function(d) {
                                    r.handleError(d)
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
                            _widgetRecordProvider: i,
                            placeholders: {
                                walletOverlayPageContent: new R(function() {
                                    return [t.createElement(u, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex flex-direction-column justify-content-center align-items-center full-width gap-m",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "2"
                                        },
                                        _widgetRecordProvider: i
                                    }, t.createElement(_, {
                                        image: V.Navigation.VersionedURL.getVersionedUrl("img/tradershub.Wallets_email_open.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "3"
                                        },
                                        _widgetRecordProvider: i
                                    }), t.createElement(x, {
                                        gridProperties: {
                                            classes: "ThemeGrid_MarginGutter"
                                        },
                                        style: a.getCachedValue(e.getId("qYyTyGAqF0KLW_TopIoyaA.Style"), function() {
                                            return "font-bold text-align-center " + (l.isDesktop$Action(s).isDesktopOut ? "heading5" : "heading4")
                                        }),
                                        value: "We\u2019ve sent a verification link to " + f.getSignupEmail(),
                                        _idProps: {
                                            service: e,
                                            uuid: "4"
                                        },
                                        _widgetRecordProvider: i
                                    }), t.createElement(u, {
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
                                    }, t.createElement(_, {
                                        image: V.Navigation.VersionedURL.getVersionedUrl("img/tradershub.info_blue.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "6"
                                        },
                                        _widgetRecordProvider: i
                                    }), t.createElement(u, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex flex-direction-column",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: i
                                    }, t.createElement(g, {
                                        extendedProperties: {
                                            style: "font-weight: normal;"
                                        },
                                        style: a.getCachedValue(e.getId("Mu5Z7QhqtEep5bQxuRMbZg.Style"), function() {
                                            return l.isDesktop$Action(s).isDesktopOut ? "font-size-s" : "font-size-xs"
                                        }),
                                        text: [c(m("Mu5Z7QhqtEep5bQxuRMbZg#Value", "Didn't get an email? "))],
                                        _idProps: {
                                            service: e,
                                            uuid: "8"
                                        },
                                        _widgetRecordProvider: i
                                    }), t.createElement(v, {
                                        tag: "ul",
                                        _idProps: {
                                            service: e,
                                            uuid: "9"
                                        },
                                        _widgetRecordProvider: i
                                    }, t.createElement(v, {
                                        tag: "li",
                                        _idProps: {
                                            service: e,
                                            uuid: "10"
                                        },
                                        _widgetRecordProvider: i
                                    }, t.createElement(g, {
                                        style: a.getCachedValue(e.getId("bMz7RJEhOkKiyHlzwLV23A.Style"), function() {
                                            return l.isDesktop$Action(s).isDesktopOut ? "font-size-s" : "font-size-xs"
                                        }),
                                        text: [c(m("bMz7RJEhOkKiyHlzwLV23A#Value", "Make sure you\u2019ve entered your email correctly."))],
                                        _idProps: {
                                            service: e,
                                            uuid: "11"
                                        },
                                        _widgetRecordProvider: i
                                    })), t.createElement(v, {
                                        tag: "li",
                                        _idProps: {
                                            service: e,
                                            uuid: "12"
                                        },
                                        _widgetRecordProvider: i
                                    }, t.createElement(g, {
                                        style: a.getCachedValue(e.getId("a4IdFkUeqUefd7Og6TWq5A.Style"), function() {
                                            return l.isDesktop$Action(s).isDesktopOut ? "font-size-s" : "font-size-xs"
                                        }),
                                        text: [c(m("a4IdFkUeqUefd7Og6TWq5A#Value", "Check your spam folder."))],
                                        _idProps: {
                                            service: e,
                                            uuid: "13"
                                        },
                                        _widgetRecordProvider: i
                                    })), t.createElement(v, {
                                        tag: "li",
                                        _idProps: {
                                            service: e,
                                            uuid: "14"
                                        },
                                        _widgetRecordProvider: i
                                    }, t.createElement(g, {
                                        style: a.getCachedValue(e.getId("BO3xK8irDUuXyqM2KFFy9w.Style"), function() {
                                            return l.isDesktop$Action(s).isDesktopOut ? "font-size-s" : "font-size-xs"
                                        }),
                                        text: [c(m("BO3xK8irDUuXyqM2KFFy9w#Value", "Make sure the email isn\u2019t blocked by firewalls or filters."))],
                                        _idProps: {
                                            service: e,
                                            uuid: "15"
                                        },
                                        _widgetRecordProvider: i
                                    }))))), t.createElement(u, {
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
                                    }, t.createElement(S, {
                                        enabled: !0,
                                        isDefault: !1,
                                        onClick: n(function() {
                                            return Promise.resolve().then(function() {
                                                var d = s.clone();
                                                return r.resendEmailOnClick$Action(r.callContext(d))
                                            })
                                        }, "onClick"),
                                        style: "btn",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "17"
                                        },
                                        _widgetRecordProvider: i
                                    }, t.createElement(g, {
                                        extendedProperties: {
                                            style: "font-size: 14px;"
                                        },
                                        text: [c(m("6O5vm_YB9UK8aL2IHyVmMA#Value", "Resend email"))],
                                        _idProps: {
                                            service: e,
                                            uuid: "18"
                                        },
                                        _widgetRecordProvider: i
                                    }))))]
                                }),
                                mobileFooterContent: new R(function() {
                                    return [t.createElement(u, {
                                        align: 0,
                                        animate: !1,
                                        style: "padding-base",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "19"
                                        },
                                        _widgetRecordProvider: i
                                    }, t.createElement(S, {
                                        enabled: !0,
                                        isDefault: !1,
                                        onClick: n(function() {
                                            return Promise.resolve().then(function() {
                                                var d = s.clone();
                                                return r.resendEmailOnClick$Action(r.callContext(d))
                                            })
                                        }, "onClick"),
                                        style: "btn full-width",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "20"
                                        },
                                        _widgetRecordProvider: i
                                    }, "Resent email"))]
                                })
                            },
                            _dependencies: [b(f.getSignupEmail())]
                        })]
                    })
                },
                _dependencies: [b(f.getSignupEmail())]
            }))
        }
    };
n(o, "View");
var w = o,
    Z = w;
export {
    Z as
    default
};