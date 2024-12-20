import {
    a as T
} from "./_oschunk-JILUF5DZ.js";
import {
    a as D
} from "./_oschunk-MNORGKDG.js";
import {
    a as W
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
    a as E,
    b as y,
    h as o,
    j as b,
    r as p,
    u as S,
    y as m
} from "./_oschunk-E7JQAU4J.js";
import "./_oschunk-5N5TJ3ES.js";
import {
    a as U,
    g as C,
    i as R
} from "./_oschunk-T77XORCW.js";
import "./_oschunk-2TPJE4AL.js";
import "./_oschunk-VADNKVBQ.js";
import {
    l as v
} from "./_oschunk-OOUVJ7PM.js";
import "./_oschunk-ZKKCTARK.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-KG7LSUIA.js";
import {
    ia as V
} from "./_oschunk-5EPHB76O.js";
import {
    c as n,
    g as k
} from "./_oschunk-DVBKI63I.js";
var t = k(U());
var a = V,
    O = R.PlaceholderContent,
    K = R.IteratorPlaceholderContent,
    l = class l extends C.BaseWebScreen {
        static get displayName() {
            return "WalletFlows.WalletsDeposit"
        }
        static getAttributes() {
            return {
                codeFunction: "WalletsDeposit",
                functionKey: "f7a2cc86-394e-4d84-bff3-c293ba96e875",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.WalletFlows.WalletsDeposit.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [w, W]
        }
        get modelFactory() {
            return T
        }
        get controllerFactory() {
            return D
        }
        get title() {
            let i = this.model,
                c = this.controller,
                e = this.idService,
                P = c.validationService,
                r = c.callContext(),
                u = l.asPrimitiveValue,
                h = l.getTranslation,
                g = this;
            return a.Injector.resolve(a.ServiceNames.TranslationsService).getMessage("hsyi9045hE2_88KTupbodQ#TitleExpression.-1075859842.1", "Deposit")
        }
        internalRender() {
            let i = this.model,
                c = this.controller,
                e = this.idService,
                P = c.validationService,
                r = this.widgetsRecordProvider,
                u = c.callContext(),
                h = l.ifWidget,
                g = l.textWidget,
                s = l.asPrimitiveValue,
                f = l.getTranslation,
                _ = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(w, {
                getOwnerSpan: n(function() {
                    return _.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: n(function() {
                    return _.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: n(function(d) {
                        c.handleError(d)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: P
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: r,
                placeholders: {
                    content: new O(function() {
                        return [t.createElement(W, {
                            getOwnerSpan: n(function() {
                                return _.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return _.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                PageTitle: a.Injector.resolve(a.ServiceNames.TranslationsService).getMessage("quxDHWtHv0SxvHf+C0fFoA#Value.-1075859842.1", "Deposit"),
                                IsLoading: i.variables.isLoadingVar,
                                HideBackButton: !0
                            },
                            events: {
                                _handleError: n(function(d) {
                                    c.handleError(d)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: P
                            },
                            _idProps: {
                                service: e,
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: r,
                            placeholders: {
                                walletOverlayPageContent: new O(function() {
                                    return [h(i.variables.isDepositLockVar, !1, this, function() {
                                        return [t.createElement(o, {
                                            align: 0,
                                            animate: !1,
                                            style: "display-flex flex-direction-column justify-content-center align-items-center full-width gap-m",
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                name: "ContentWrapper"
                                            },
                                            _widgetRecordProvider: r
                                        }, t.createElement(p, {
                                            image: a.Navigation.VersionedURL.getVersionedUrl("img/tradershub.cashier_down.svg"),
                                            type: 0,
                                            _idProps: {
                                                service: e,
                                                uuid: "3"
                                            },
                                            _widgetRecordProvider: r
                                        }), t.createElement(o, {
                                            align: 0,
                                            animate: !1,
                                            style: "display-flex flex-direction-column gap-s text-align-center",
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                name: "DescriptionWrapper"
                                            },
                                            _widgetRecordProvider: r
                                        }, t.createElement(b, {
                                            style: i.getCachedValue(e.getId("qUdT8CncSUuug6eX9tlIUg.Style"), function() {
                                                return "font-bold " + (v.isDesktop$Action(u).isDesktopOut ? "heading5" : "heading4")
                                            }),
                                            value: i.getCachedValue(e.getId("qUdT8CncSUuug6eX9tlIUg.Value"), function() {
                                                return i.variables.isCashierLockVar ? "Deposit is temporarily down" : "Deposits into your " + i.variables.activeWalletVar.currencyAttr + " wallet are temporarily locked."
                                            }, function() {
                                                return i.variables.isCashierLockVar
                                            }, function() {
                                                return i.variables.activeWalletVar.currencyAttr
                                            }),
                                            _idProps: {
                                                service: e,
                                                uuid: "5"
                                            },
                                            _widgetRecordProvider: r
                                        }), t.createElement(b, {
                                            gridProperties: {
                                                classes: "ThemeGrid_MarginGutter"
                                            },
                                            value: i.variables.descriptionVar,
                                            _idProps: {
                                                service: e,
                                                uuid: "6"
                                            },
                                            _widgetRecordProvider: r
                                        })), t.createElement(o, {
                                            align: 0,
                                            animate: !0,
                                            visible: i.getCachedValue(e.getId("ButtonWrapper.Visible"), function() {
                                                return v.isDesktop$Action(u).isDesktopOut
                                            }),
                                            _idProps: {
                                                service: e,
                                                name: "ButtonWrapper"
                                            },
                                            _widgetRecordProvider: r
                                        }, t.createElement(y, {
                                            enabled: !0,
                                            isDefault: !1,
                                            onClick: n(function() {
                                                try {
                                                    a.Navigation.navigateTo(a.Navigation.generateScreenURL("tradershub", "wallets", {}), a.Transitions.createTransition(a.Transitions.TransitionAnimation.Default), null, !0)
                                                } catch (d) {
                                                    if (d.name !== "RedirectOccurredException") throw d
                                                }
                                            }, "onClick"),
                                            style: i.getCachedValue(e.getId("GhljtN64r0mLAWLCJ5NS2A.Style"), function() {
                                                return "btn btn-primary " + (v.isDesktop$Action(u).isDesktopOut ? "" : "full-width")
                                            }),
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                uuid: "8"
                                            },
                                            _widgetRecordProvider: r
                                        }, t.createElement(b, {
                                            value: i.variables.buttonTextVar,
                                            _idProps: {
                                                service: e,
                                                uuid: "9"
                                            },
                                            _widgetRecordProvider: r
                                        }))))]
                                    }, function() {
                                        return [h(i.variables.activeWalletVar.is_cryptoAttr, !1, this, function() {
                                            return [t.createElement(o, {
                                                align: 0,
                                                animate: !1,
                                                style: i.getCachedValue(e.getId("sVgWxQsb9k63+XjKnuLrCQ.Style"), function() {
                                                    return "display-flex flex-direction-column gap-base " + (v.isDesktop$Action(u).isDesktopOut ? "margin-top-md" : "margin-top-base")
                                                }),
                                                visible: !0,
                                                _idProps: {
                                                    service: e,
                                                    uuid: "10"
                                                },
                                                _widgetRecordProvider: r
                                            }, t.createElement(m, {
                                                extendedProperties: {
                                                    style: "font-size: 16px;"
                                                },
                                                style: "font-bold",
                                                text: [g(f("1jOSy6gnrE26sup_HwEHfQ#Value", "Choose a deposit method"))],
                                                _idProps: {
                                                    service: e,
                                                    uuid: "11"
                                                },
                                                _widgetRecordProvider: r
                                            }), t.createElement(o, {
                                                align: 0,
                                                animate: !1,
                                                style: i.getCachedValue(e.getId("JVjGogHP4kWyuWRSQQOOuQ.Style"), function() {
                                                    return "display-flex gap-base " + (v.isDesktop$Action(u).isDesktopOut ? "flex-direction-row" : "flex-direction-column")
                                                }),
                                                visible: !0,
                                                _idProps: {
                                                    service: e,
                                                    uuid: "12"
                                                },
                                                _widgetRecordProvider: r
                                            }, t.createElement(S, {
                                                enabled: !0,
                                                style: "wallet-deposit-method-link",
                                                transition: a.Transitions.createTransition(a.Transitions.TransitionAnimation.Default),
                                                url: a.Navigation.generateScreenURL("tradershub", "wallets/deposit/deposit-crypto", {}),
                                                visible: !0,
                                                _idProps: {
                                                    service: e,
                                                    uuid: "13"
                                                },
                                                _widgetRecordProvider: r
                                            }, t.createElement(o, {
                                                align: 0,
                                                animate: !1,
                                                extendedProperties: {
                                                    style: "border-color: #DEE2E6; border-radius: 8px; border-style: solid; border-width: 1px; color: #222;"
                                                },
                                                style: "wallet-deposit-method-option",
                                                visible: !0,
                                                _idProps: {
                                                    service: e,
                                                    uuid: "14"
                                                },
                                                _widgetRecordProvider: r
                                            }, t.createElement(o, {
                                                align: 0,
                                                animate: !1,
                                                style: "display-flex align-items-center full-width gap-xs",
                                                visible: !0,
                                                _idProps: {
                                                    service: e,
                                                    uuid: "15"
                                                },
                                                _widgetRecordProvider: r
                                            }, t.createElement(o, {
                                                align: 0,
                                                animate: !1,
                                                style: "wallet-deposit-method-icon",
                                                visible: !0,
                                                _idProps: {
                                                    service: e,
                                                    uuid: "16"
                                                },
                                                _widgetRecordProvider: r
                                            }, t.createElement(p, {
                                                image: a.Navigation.VersionedURL.getVersionedUrl("img/tradershub.qr_code.svg"),
                                                style: "display-grid",
                                                type: 0,
                                                _idProps: {
                                                    service: e,
                                                    uuid: "17"
                                                },
                                                _widgetRecordProvider: r
                                            })), t.createElement(m, {
                                                style: "font-bold flex-1",
                                                text: [g(f("C4MEdPayrkye27Oc2r9eKg#Value", "Crypto transfer"))],
                                                _idProps: {
                                                    service: e,
                                                    uuid: "18"
                                                },
                                                _widgetRecordProvider: r
                                            }), t.createElement(p, {
                                                gridProperties: {
                                                    classes: "ThemeGrid_MarginGutter"
                                                },
                                                image: a.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_sm.svg"),
                                                type: 0,
                                                _idProps: {
                                                    service: e,
                                                    uuid: "19"
                                                },
                                                _widgetRecordProvider: r
                                            })), t.createElement(m, {
                                                extendedProperties: {
                                                    style: "font-size: 12px;"
                                                },
                                                text: [g(f("tah4UlGXWkarRWpdFblU0g#Value", "Scan QR code to deposit or copy wallet address."))],
                                                _idProps: {
                                                    service: e,
                                                    uuid: "20"
                                                },
                                                _widgetRecordProvider: r
                                            }))), t.createElement(S, {
                                                enabled: !0,
                                                gridProperties: {
                                                    marginLeft: "0px"
                                                },
                                                style: "wallet-deposit-method-link",
                                                transition: a.Transitions.createTransition(a.Transitions.TransitionAnimation.Default),
                                                url: a.Navigation.generateScreenURL("tradershub", "wallets/deposit/fiat-onramp", {}),
                                                visible: !0,
                                                _idProps: {
                                                    service: e,
                                                    uuid: "21"
                                                },
                                                _widgetRecordProvider: r
                                            }, t.createElement(o, {
                                                align: 0,
                                                animate: !1,
                                                extendedProperties: {
                                                    style: "border-color: #DEE2E6; border-radius: 8px; border-style: solid; border-width: 1px; color: #222;"
                                                },
                                                style: "wallet-deposit-method-option",
                                                visible: !0,
                                                _idProps: {
                                                    service: e,
                                                    uuid: "22"
                                                },
                                                _widgetRecordProvider: r
                                            }, t.createElement(o, {
                                                align: 0,
                                                animate: !1,
                                                style: "display-flex align-items-center full-width gap-xs",
                                                visible: !0,
                                                _idProps: {
                                                    service: e,
                                                    uuid: "23"
                                                },
                                                _widgetRecordProvider: r
                                            }, t.createElement(o, {
                                                align: 0,
                                                animate: !1,
                                                style: "wallet-deposit-method-icon",
                                                visible: !0,
                                                _idProps: {
                                                    service: e,
                                                    uuid: "24"
                                                },
                                                _widgetRecordProvider: r
                                            }, t.createElement(p, {
                                                image: a.Navigation.VersionedURL.getVersionedUrl("img/tradershub.Wallets_fiat_on_ramp.svg"),
                                                style: "display-grid",
                                                type: 0,
                                                _idProps: {
                                                    service: e,
                                                    uuid: "25"
                                                },
                                                _widgetRecordProvider: r
                                            })), t.createElement(m, {
                                                style: "font-bold flex-1",
                                                text: [g(f("M6V1ptDOs0uUakesLhqymQ#Value", "Fiat onramp"))],
                                                _idProps: {
                                                    service: e,
                                                    uuid: "26"
                                                },
                                                _widgetRecordProvider: r
                                            }), t.createElement(p, {
                                                gridProperties: {
                                                    classes: "ThemeGrid_MarginGutter"
                                                },
                                                image: a.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_sm.svg"),
                                                type: 0,
                                                _idProps: {
                                                    service: e,
                                                    uuid: "27"
                                                },
                                                _widgetRecordProvider: r
                                            })), t.createElement(m, {
                                                extendedProperties: {
                                                    style: "font-size: 12px;"
                                                },
                                                text: [g(f("GDKSZXk2DUi4bTioWlTPVw#Value", "Convert fiat to crypto to fund your wallet."))],
                                                _idProps: {
                                                    service: e,
                                                    uuid: "28"
                                                },
                                                _widgetRecordProvider: r
                                            })))))]
                                        }, function() {
                                            return [t.createElement(o, {
                                                align: 0,
                                                animate: !1,
                                                style: "full-width",
                                                visible: !0,
                                                _idProps: {
                                                    service: e,
                                                    name: "IframeContainer"
                                                },
                                                _widgetRecordProvider: r
                                            }, t.createElement(E, {
                                                extendedProperties: {
                                                    src: i.variables.iFrameURLVar
                                                },
                                                tag: "iframe",
                                                _idProps: {
                                                    service: e,
                                                    name: "DepositIframe"
                                                },
                                                _widgetRecordProvider: r
                                            }))]
                                        })]
                                    })]
                                }),
                                mobileFooterContent: new O(function() {
                                    return [t.createElement(o, {
                                        align: 0,
                                        animate: !0,
                                        extendedProperties: {
                                            style: "border-top: 1px solid var(--color-neutral-3);"
                                        },
                                        style: "padding-base",
                                        visible: i.variables.isDepositLockVar,
                                        _idProps: {
                                            service: e,
                                            uuid: "31"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(y, {
                                        enabled: !0,
                                        isDefault: !1,
                                        onClick: n(function() {
                                            try {
                                                a.Navigation.navigateTo(a.Navigation.generateScreenURL("tradershub", "wallets/withdrawal/disable", {}), a.Transitions.createTransition(a.Transitions.TransitionAnimation.Default), null, !0)
                                            } catch (d) {
                                                if (d.name !== "RedirectOccurredException") throw d
                                            }
                                        }, "onClick"),
                                        style: "btn btn-primary full-width",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "32"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(b, {
                                        value: i.variables.buttonTextVar,
                                        _idProps: {
                                            service: e,
                                            uuid: "33"
                                        },
                                        _widgetRecordProvider: r
                                    })))]
                                })
                            },
                            _dependencies: [s(i.variables.iFrameURLVar), s(i.variables.buttonTextVar), s(i.variables.descriptionVar), s(i.variables.activeWalletVar.is_cryptoAttr), s(i.variables.activeWalletVar.currencyAttr), s(i.variables.isCashierLockVar), s(i.variables.isDepositLockVar)]
                        })]
                    })
                },
                _dependencies: [s(i.variables.iFrameURLVar), s(i.variables.buttonTextVar), s(i.variables.descriptionVar), s(i.variables.activeWalletVar.is_cryptoAttr), s(i.variables.activeWalletVar.currencyAttr), s(i.variables.isCashierLockVar), s(i.variables.isDepositLockVar), s(i.variables.isLoadingVar)]
            }))
        }
    };
n(l, "View");
var x = l,
    q = x;
export {
    q as
    default
};