import {
    a as x
} from "./_oschunk-T5X4DRIW.js";
import {
    a as W
} from "./_oschunk-OLT4AVHH.js";
import {
    a as b
} from "./_oschunk-MQ3SXFQ7.js";
import "./_oschunk-W6ZEDFD5.js";
import "./_oschunk-AKPRKE3L.js";
import "./_oschunk-7EJDEKFB.js";
import "./_oschunk-EK7BIWKQ.js";
import "./_oschunk-RAZ4EXDC.js";
import "./_oschunk-PCMUJO6C.js";
import {
    a as w
} from "./_oschunk-ZGZGC7WW.js";
import "./_oschunk-GSA6MIEZ.js";
import "./_oschunk-PASQVAVD.js";
import "./_oschunk-TMT5K6IM.js";
import "./_oschunk-U5BVDMC7.js";
import "./_oschunk-GRCLOXGJ.js";
import "./_oschunk-VWJXDAKN.js";
import {
    b as c,
    h as u,
    r as O,
    y as p
} from "./_oschunk-E7JQAU4J.js";
import "./_oschunk-5N5TJ3ES.js";
import {
    a as E,
    g as y,
    i as S
} from "./_oschunk-T77XORCW.js";
import "./_oschunk-2TPJE4AL.js";
import "./_oschunk-VADNKVBQ.js";
import {
    l as f
} from "./_oschunk-OOUVJ7PM.js";
import "./_oschunk-ZKKCTARK.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-KG7LSUIA.js";
import {
    ia as _
} from "./_oschunk-5EPHB76O.js";
import {
    c as a,
    g as T
} from "./_oschunk-DVBKI63I.js";
var i = T(E());
var e = _,
    P = S.PlaceholderContent,
    H = S.IteratorPlaceholderContent,
    o = class o extends y.BaseWebScreen {
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
            return [w, b]
        }
        get modelFactory() {
            return x
        }
        get controllerFactory() {
            return W
        }
        get title() {
            let g = this.model,
                s = this.controller,
                t = this.idService,
                h = s.validationService,
                r = s.callContext(),
                v = o.asPrimitiveValue,
                C = o.getTranslation,
                l = this;
            return e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("THg2IZaM4Um0F3_Sfiutzg#TitleExpression.363878613.1", "Withdrawal")
        }
        internalRender() {
            let g = this.model,
                s = this.controller,
                t = this.idService,
                h = s.validationService,
                r = this.widgetsRecordProvider,
                v = s.callContext(),
                C = o.ifWidget,
                l = o.textWidget,
                V = o.asPrimitiveValue,
                d = o.getTranslation,
                m = this;
            return i.createElement("div", this.getRootNodeProperties(), i.createElement(w, {
                getOwnerSpan: a(function() {
                    return m.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return m.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: a(function(n) {
                        s.handleError(n)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: h
                },
                _idProps: {
                    service: t,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: r,
                placeholders: {
                    content: new P(function() {
                        return [i.createElement(b, {
                            getOwnerSpan: a(function() {
                                return m.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return m.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                HideBackButton: !0,
                                PageTitle: "Withdraw",
                                HideWalletHeader: !1
                            },
                            events: {
                                _handleError: a(function(n) {
                                    s.handleError(n)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: h
                            },
                            _idProps: {
                                service: t,
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: r,
                            placeholders: {
                                walletOverlayPageContent: new P(function() {
                                    return [i.createElement(u, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex flex-direction-column justify-content-center align-items-center full-width gap-m",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "2"
                                        },
                                        _widgetRecordProvider: r
                                    }, i.createElement(O, {
                                        image: e.Navigation.VersionedURL.getVersionedUrl("img/tradershub.Wallets_no_funds.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: t,
                                            uuid: "3"
                                        },
                                        _widgetRecordProvider: r
                                    }), i.createElement(u, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex flex-direction-column gap-s text-align-center",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "4"
                                        },
                                        _widgetRecordProvider: r
                                    }, i.createElement(p, {
                                        style: g.getCachedValue(t.getId("Nns+JaALTUi4i4cdCikCRw.Style"), function() {
                                            return "font-bold " + (f.isDesktop$Action(v).isDesktopOut ? "heading5" : "heading4")
                                        }),
                                        text: [l(d("Nns+JaALTUi4i4cdCikCRw#Value", "You have no funds in your wallet!"))],
                                        _idProps: {
                                            service: t,
                                            uuid: "5"
                                        },
                                        _widgetRecordProvider: r
                                    }), l(d("IJvkxuQfT02m5I_2VNSZvA#Value", "Make a deposit or transfer funds from another account."))), i.createElement(u, {
                                        align: 0,
                                        animate: !0,
                                        style: "display-flex gap-s",
                                        visible: g.getCachedValue(t.getId("Q574o7VrvEegS0fxHmmDLA.Visible"), function() {
                                            return f.isDesktop$Action(v).isDesktopOut
                                        }),
                                        _idProps: {
                                            service: t,
                                            uuid: "6"
                                        },
                                        _widgetRecordProvider: r
                                    }, i.createElement(c, {
                                        enabled: !0,
                                        isDefault: !1,
                                        onClick: a(function() {
                                            try {
                                                e.Navigation.navigateTo(e.Navigation.generateScreenURL("tradershub", "wallets/transfer/:to?", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), null, !0)
                                            } catch (n) {
                                                if (n.name !== "RedirectOccurredException") throw n
                                            }
                                        }, "onClick"),
                                        style: "btn",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: r
                                    }, i.createElement(p, {
                                        extendedProperties: {
                                            style: "font-size: 14px;"
                                        },
                                        text: [l(d("u8bRYj2AjUmGSYQ++Wwucw#Value", "Transfer funds"))],
                                        _idProps: {
                                            service: t,
                                            uuid: "8"
                                        },
                                        _widgetRecordProvider: r
                                    })), i.createElement(c, {
                                        enabled: !0,
                                        gridProperties: {
                                            marginLeft: "0"
                                        },
                                        isDefault: !1,
                                        onClick: a(function() {
                                            try {
                                                e.Navigation.navigateTo(e.Navigation.generateScreenURL("tradershub", "wallets/deposit", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), null, !0)
                                            } catch (n) {
                                                if (n.name !== "RedirectOccurredException") throw n
                                            }
                                        }, "onClick"),
                                        style: g.getCachedValue(t.getId("WbyhlQgtG0KWY27lb3vTOA.Style"), function() {
                                            return "btn btn-primary " + (f.isDesktop$Action(v).isDesktopOut ? "" : "full-width")
                                        }),
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "9"
                                        },
                                        _widgetRecordProvider: r
                                    }, i.createElement(p, {
                                        extendedProperties: {
                                            style: "font-size: 14px;"
                                        },
                                        text: [l(d("SLcjXZbMpEScscntKKD3kw#Value", "Make a deposit"))],
                                        _idProps: {
                                            service: t,
                                            uuid: "10"
                                        },
                                        _widgetRecordProvider: r
                                    }))))]
                                }),
                                mobileFooterContent: new P(function() {
                                    return [i.createElement(u, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "border-top: 1px solid var(--color-neutral-3);"
                                        },
                                        style: "display-flex flex-direction-column align-items-center gap-s padding-base",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "11"
                                        },
                                        _widgetRecordProvider: r
                                    }, i.createElement(c, {
                                        enabled: !0,
                                        isDefault: !1,
                                        onClick: a(function() {
                                            try {
                                                e.Navigation.navigateTo(e.Navigation.generateScreenURL("tradershub", "wallets/deposit", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), null, !0)
                                            } catch (n) {
                                                if (n.name !== "RedirectOccurredException") throw n
                                            }
                                        }, "onClick"),
                                        style: "btn btn-primary full-width",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "12"
                                        },
                                        _widgetRecordProvider: r
                                    }, l(d("iP5y4kZWiUC4t7dR2JPhjg#Value", "Make a deposit"))), i.createElement(c, {
                                        enabled: !0,
                                        gridProperties: {
                                            marginLeft: "0px"
                                        },
                                        isDefault: !1,
                                        onClick: a(function() {
                                            try {
                                                e.Navigation.navigateTo(e.Navigation.generateScreenURL("tradershub", "wallets/transfer/:to?", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), null, !0)
                                            } catch (n) {
                                                if (n.name !== "RedirectOccurredException") throw n
                                            }
                                        }, "onClick"),
                                        style: "btn full-width",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "13"
                                        },
                                        _widgetRecordProvider: r
                                    }, l(d("JSQR4gbhnEia2_HWdlrl4w#Value", "Transfer funds"))))]
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
a(o, "View");
var R = o,
    J = R;
export {
    J as
    default
};