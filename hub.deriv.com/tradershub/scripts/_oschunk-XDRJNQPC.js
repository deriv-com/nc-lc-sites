import {
    a as W
} from "./_oschunk-4DLUFYVZ.js";
import {
    a as T
} from "./_oschunk-SY5AZAFR.js";
import {
    a as v
} from "./_oschunk-HQIWX2S2.js";
import "./_oschunk-CYRJE4ZJ.js";
import {
    a as b
} from "./_oschunk-M2HM6MS3.js";
import "./_oschunk-QIDNIYQN.js";
import "./_oschunk-ESAL6IS4.js";
import "./_oschunk-FRF3DI3V.js";
import "./_oschunk-26LPX23H.js";
import "./_oschunk-QYZYO3AQ.js";
import "./_oschunk-I4HVSXAZ.js";
import {
    b as w
} from "./_oschunk-G7GFWP74.js";
import "./_oschunk-5ETXRNLC.js";
import "./_oschunk-O5AQVDN2.js";
import "./_oschunk-4SG3ZAXH.js";
import "./_oschunk-MOYCBUII.js";
import "./_oschunk-NYD6CGWS.js";
import "./_oschunk-EROCOLS7.js";
import {
    a as V,
    h as l,
    r as h,
    u as S,
    y as _
} from "./_oschunk-42NACYKQ.js";
import "./_oschunk-2M7PXTSQ.js";
import {
    a as D,
    g as x,
    i as C
} from "./_oschunk-RKYF3TWC.js";
import "./_oschunk-K7AFM7ZW.js";
import "./_oschunk-DOFMR6EA.js";
import {
    l as P
} from "./_oschunk-2ZI4JQLD.js";
import "./_oschunk-IKZJT3AP.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-MSUVGI3L.js";
import {
    ia as O
} from "./_oschunk-2JKANR6M.js";
import {
    c as t,
    g as k
} from "./_oschunk-DVBKI63I.js";
var r = k(D());
var u = O,
    y = C.PlaceholderContent,
    G = C.IteratorPlaceholderContent,
    p = class p extends x.BaseWebScreen {
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
            return [w, b, v]
        }
        get modelFactory() {
            return T
        }
        get controllerFactory() {
            return W
        }
        get title() {
            let e = this.model,
                o = this.controller,
                i = this.idService,
                d = o.validationService,
                a = o.callContext(),
                c = p.asPrimitiveValue,
                E = p.getTranslation,
                m = this;
            return u.Injector.resolve(u.ServiceNames.TranslationsService).getMessage("hsyi9045hE2_88KTupbodQ#TitleExpression.-1075859842.1", "Deposit")
        }
        internalRender() {
            let e = this.model,
                o = this.controller,
                i = this.idService,
                d = o.validationService,
                a = this.widgetsRecordProvider,
                c = o.callContext(),
                E = p.ifWidget,
                m = p.textWidget,
                g = p.asPrimitiveValue,
                f = p.getTranslation,
                s = this;
            return r.createElement("div", this.getRootNodeProperties(), r.createElement(w, {
                getOwnerSpan: t(function() {
                    return s.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: t(function() {
                    return s.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    IsLoading: e.variables.isLoadingVar
                },
                events: {
                    _handleError: t(function(n) {
                        o.handleError(n)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: d
                },
                _idProps: {
                    service: i,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: a,
                placeholders: {
                    content: new y(function() {
                        return [r.createElement(l, {
                            align: 0,
                            animate: !0,
                            visible: e.variables.showContentVar === "NoErrors",
                            _idProps: {
                                service: i,
                                name: "NoErrors"
                            },
                            _widgetRecordProvider: a
                        }, r.createElement(b, {
                            getOwnerSpan: t(function() {
                                return s.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: t(function() {
                                return s.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                HideBackButton: !0,
                                IsLoading: e.variables.isLoadingVar,
                                PageTitle: u.Injector.resolve(u.ServiceNames.TranslationsService).getMessage("a4nwjCsNjEW8vXYoaOcMZw#Value.-1075859842.1", "Deposit")
                            },
                            events: {
                                _handleError: t(function(n) {
                                    o.handleError(n)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: d
                            },
                            _idProps: {
                                service: i,
                                uuid: "2",
                                alias: "2"
                            },
                            _widgetRecordProvider: a,
                            placeholders: {
                                walletOverlayPageContent: new y(function() {
                                    return [E(e.variables.activeWalletVar.is_cryptoAttr, !1, this, function() {
                                        return [r.createElement(l, {
                                            align: 0,
                                            animate: !1,
                                            style: e.getCachedValue(i.getId("CryptoDeposit.Style"), function() {
                                                return "display-flex flex-direction-column gap-base " + (P.isDesktop$Action(c).isDesktopOut ? "margin-top-md" : "margin-top-base")
                                            }),
                                            visible: !0,
                                            _idProps: {
                                                service: i,
                                                name: "CryptoDeposit"
                                            },
                                            _widgetRecordProvider: a
                                        }, r.createElement(_, {
                                            extendedProperties: {
                                                style: "font-size: 16px;"
                                            },
                                            style: "font-bold",
                                            text: [m(f("fDWH9R+7fUmq3Epp6AJzJQ#Value", "Choose a deposit method"))],
                                            _idProps: {
                                                service: i,
                                                uuid: "4"
                                            },
                                            _widgetRecordProvider: a
                                        }), r.createElement(l, {
                                            align: 0,
                                            animate: !1,
                                            style: e.getCachedValue(i.getId("X4s3SZ8AoEGPnULaz9EstA.Style"), function() {
                                                return "display-flex gap-base " + (P.isDesktop$Action(c).isDesktopOut ? "flex-direction-row" : "flex-direction-column")
                                            }),
                                            visible: !0,
                                            _idProps: {
                                                service: i,
                                                uuid: "5"
                                            },
                                            _widgetRecordProvider: a
                                        }, r.createElement(S, {
                                            enabled: !0,
                                            style: "wallet-deposit-method-link",
                                            transition: u.Transitions.createTransition(u.Transitions.TransitionAnimation.Default),
                                            url: u.Navigation.generateScreenURL("tradershub", "wallets/deposit/deposit-crypto", {}),
                                            visible: !0,
                                            _idProps: {
                                                service: i,
                                                uuid: "6"
                                            },
                                            _widgetRecordProvider: a
                                        }, r.createElement(l, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "border-color: #DEE2E6; border-radius: 8px; border-style: solid; border-width: 1px; color: #222;"
                                            },
                                            style: "wallet-deposit-method-option",
                                            visible: !0,
                                            _idProps: {
                                                service: i,
                                                uuid: "7"
                                            },
                                            _widgetRecordProvider: a
                                        }, r.createElement(l, {
                                            align: 0,
                                            animate: !1,
                                            style: "display-flex align-items-center full-width gap-xs",
                                            visible: !0,
                                            _idProps: {
                                                service: i,
                                                uuid: "8"
                                            },
                                            _widgetRecordProvider: a
                                        }, r.createElement(l, {
                                            align: 0,
                                            animate: !1,
                                            style: "wallet-deposit-method-icon",
                                            visible: !0,
                                            _idProps: {
                                                service: i,
                                                uuid: "9"
                                            },
                                            _widgetRecordProvider: a
                                        }, r.createElement(h, {
                                            image: u.Navigation.VersionedURL.getVersionedUrl("img/tradershub.qr_code.svg"),
                                            style: "display-grid",
                                            type: 0,
                                            _idProps: {
                                                service: i,
                                                uuid: "10"
                                            },
                                            _widgetRecordProvider: a
                                        })), r.createElement(_, {
                                            style: "font-bold flex-1",
                                            text: [m(f("yCkk9049rU+KV+uZAgP5Jg#Value", "Crypto transfer"))],
                                            _idProps: {
                                                service: i,
                                                uuid: "11"
                                            },
                                            _widgetRecordProvider: a
                                        }), r.createElement(h, {
                                            gridProperties: {
                                                classes: "ThemeGrid_MarginGutter"
                                            },
                                            image: u.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_sm.svg"),
                                            type: 0,
                                            _idProps: {
                                                service: i,
                                                uuid: "12"
                                            },
                                            _widgetRecordProvider: a
                                        })), r.createElement(_, {
                                            extendedProperties: {
                                                style: "font-size: 12px;"
                                            },
                                            text: [m(f("mWUx4RZD5Eiey993uR_anQ#Value", "Scan QR code to deposit or copy wallet address."))],
                                            _idProps: {
                                                service: i,
                                                uuid: "13"
                                            },
                                            _widgetRecordProvider: a
                                        }))), r.createElement(S, {
                                            enabled: !0,
                                            gridProperties: {
                                                marginLeft: "0px"
                                            },
                                            style: "wallet-deposit-method-link",
                                            transition: u.Transitions.createTransition(u.Transitions.TransitionAnimation.Default),
                                            url: u.Navigation.generateScreenURL("tradershub", "wallets/deposit/fiat-onramp", {}),
                                            visible: !0,
                                            _idProps: {
                                                service: i,
                                                uuid: "14"
                                            },
                                            _widgetRecordProvider: a
                                        }, r.createElement(l, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "border-color: #DEE2E6; border-radius: 8px; border-style: solid; border-width: 1px; color: #222;"
                                            },
                                            style: "wallet-deposit-method-option",
                                            visible: !0,
                                            _idProps: {
                                                service: i,
                                                uuid: "15"
                                            },
                                            _widgetRecordProvider: a
                                        }, r.createElement(l, {
                                            align: 0,
                                            animate: !1,
                                            style: "display-flex align-items-center full-width gap-xs",
                                            visible: !0,
                                            _idProps: {
                                                service: i,
                                                uuid: "16"
                                            },
                                            _widgetRecordProvider: a
                                        }, r.createElement(l, {
                                            align: 0,
                                            animate: !1,
                                            style: "wallet-deposit-method-icon",
                                            visible: !0,
                                            _idProps: {
                                                service: i,
                                                uuid: "17"
                                            },
                                            _widgetRecordProvider: a
                                        }, r.createElement(h, {
                                            image: u.Navigation.VersionedURL.getVersionedUrl("img/tradershub.Wallets_fiat_on_ramp.svg"),
                                            style: "display-grid",
                                            type: 0,
                                            _idProps: {
                                                service: i,
                                                uuid: "18"
                                            },
                                            _widgetRecordProvider: a
                                        })), r.createElement(_, {
                                            style: "font-bold flex-1",
                                            text: [m(f("gI5X+Z+3Skm1Pr_wEla00A#Value", "Fiat onramp"))],
                                            _idProps: {
                                                service: i,
                                                uuid: "19"
                                            },
                                            _widgetRecordProvider: a
                                        }), r.createElement(h, {
                                            gridProperties: {
                                                classes: "ThemeGrid_MarginGutter"
                                            },
                                            image: u.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_sm.svg"),
                                            type: 0,
                                            _idProps: {
                                                service: i,
                                                uuid: "20"
                                            },
                                            _widgetRecordProvider: a
                                        })), r.createElement(_, {
                                            extendedProperties: {
                                                style: "font-size: 12px;"
                                            },
                                            text: [m(f("viI0HtvPOUSjAxAZZaD3NA#Value", "Convert fiat to crypto to fund your wallet."))],
                                            _idProps: {
                                                service: i,
                                                uuid: "21"
                                            },
                                            _widgetRecordProvider: a
                                        })))))]
                                    }, function() {
                                        return [r.createElement(l, {
                                            align: 0,
                                            animate: !1,
                                            style: "full-width",
                                            visible: !0,
                                            _idProps: {
                                                service: i,
                                                name: "IframeContainer"
                                            },
                                            _widgetRecordProvider: a
                                        }, r.createElement(V, {
                                            extendedProperties: {
                                                src: e.variables.iFrameURLVar
                                            },
                                            tag: "iframe",
                                            _idProps: {
                                                service: i,
                                                name: "DepositIframe"
                                            },
                                            _widgetRecordProvider: a
                                        }))]
                                    })]
                                }),
                                mobileFooterContent: y.Empty
                            },
                            _dependencies: [g(e.variables.iFrameURLVar), g(e.variables.activeWalletVar.is_cryptoAttr)]
                        })), r.createElement(l, {
                            align: 0,
                            animate: !0,
                            visible: e.variables.showContentVar === "CashierLockStatus",
                            _idProps: {
                                service: i,
                                name: "CashierLockStatus"
                            },
                            _widgetRecordProvider: a
                        }, r.createElement(v, {
                            getOwnerSpan: t(function() {
                                return s.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: t(function() {
                                return s.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Title: "Deposit is temporarily locked.",
                                PageTitle: e.variables.pageTitleVar,
                                ButtonText: "Live chat",
                                Description: "Please contact us via live chat for assistance.",
                                IsLoading: e.variables.isLoadingVar
                            },
                            events: {
                                _handleError: t(function(n) {
                                    o.handleError(n)
                                }, "_handleError"),
                                onClick$Action: t(function() {
                                    var n = c.clone();
                                    o.cashierLockOnClick$Action(o.callContext(n))
                                }, "onClick$Action")
                            },
                            _validationProps: {
                                validationService: d
                            },
                            _idProps: {
                                service: i,
                                uuid: "25",
                                alias: "3"
                            },
                            _widgetRecordProvider: a,
                            _dependencies: []
                        })), r.createElement(l, {
                            align: 0,
                            animate: !0,
                            visible: e.variables.showContentVar === "FixDetails",
                            _idProps: {
                                service: i,
                                name: "FixDetails"
                            },
                            _widgetRecordProvider: a
                        }, r.createElement(v, {
                            getOwnerSpan: t(function() {
                                return s.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: t(function() {
                                return s.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                PageTitle: e.variables.pageTitleVar,
                                Description: "Your personal details are incomplete. Please go to your account settings and complete your personal details to enable deposits.",
                                IsLoading: e.variables.isLoadingVar,
                                Title: "Deposits into your " + e.variables.activeWalletVar.currencyAttr + " wallet are temporarily locked.",
                                ButtonText: "Complete now"
                            },
                            events: {
                                _handleError: t(function(n) {
                                    o.handleError(n)
                                }, "_handleError"),
                                onClick$Action: t(function() {
                                    var n = c.clone();
                                    o.cashierLockOnClick$Action(o.callContext(n))
                                }, "onClick$Action")
                            },
                            _validationProps: {
                                validationService: d
                            },
                            _idProps: {
                                service: i,
                                uuid: "27",
                                alias: "4"
                            },
                            _widgetRecordProvider: a,
                            _dependencies: []
                        })), r.createElement(l, {
                            align: 0,
                            animate: !0,
                            visible: e.variables.showContentVar === "UnwelcomeStatus",
                            _idProps: {
                                service: i,
                                name: "UnwelcomeStatus"
                            },
                            _widgetRecordProvider: a
                        }, r.createElement(v, {
                            getOwnerSpan: t(function() {
                                return s.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: t(function() {
                                return s.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Description: "Please contact us via live chat.",
                                ButtonText: "Live chat",
                                Title: "Deposits into your " + e.variables.activeWalletVar.currencyAttr + " wallet are temporarily locked.",
                                PageTitle: e.variables.pageTitleVar,
                                IsLoading: e.variables.isLoadingVar
                            },
                            events: {
                                _handleError: t(function(n) {
                                    o.handleError(n)
                                }, "_handleError"),
                                onClick$Action: t(function() {
                                    var n = c.clone();
                                    o.cashierLockOnClick$Action(o.callContext(n))
                                }, "onClick$Action")
                            },
                            _validationProps: {
                                validationService: d
                            },
                            _idProps: {
                                service: i,
                                uuid: "29",
                                alias: "5"
                            },
                            _widgetRecordProvider: a,
                            _dependencies: []
                        })), r.createElement(l, {
                            align: 0,
                            animate: !0,
                            visible: e.variables.showContentVar === "POANotVerified",
                            _idProps: {
                                service: i,
                                name: "POANotVerified"
                            },
                            _widgetRecordProvider: a
                        }, r.createElement(v, {
                            getOwnerSpan: t(function() {
                                return s.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: t(function() {
                                return s.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Title: "Deposits into your " + e.variables.activeWalletVar.currencyAttr + " wallet are temporarily locked.",
                                Description: "To enable deposits, you must check your proof of address document verification status.",
                                PageTitle: e.variables.pageTitleVar,
                                IsLoading: e.variables.isLoadingVar,
                                ButtonText: "Verify now"
                            },
                            events: {
                                _handleError: t(function(n) {
                                    o.handleError(n)
                                }, "_handleError"),
                                onClick$Action: t(function() {
                                    var n = c.clone();
                                    o.cashierLockOnClick$Action(o.callContext(n))
                                }, "onClick$Action")
                            },
                            _validationProps: {
                                validationService: d
                            },
                            _idProps: {
                                service: i,
                                uuid: "31",
                                alias: "6"
                            },
                            _widgetRecordProvider: a,
                            _dependencies: []
                        })), r.createElement(l, {
                            align: 0,
                            animate: !0,
                            visible: e.variables.showContentVar === "IsPoaNeeded",
                            _idProps: {
                                service: i,
                                name: "IsPoaNeeded"
                            },
                            _widgetRecordProvider: a
                        }, r.createElement(v, {
                            getOwnerSpan: t(function() {
                                return s.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: t(function() {
                                return s.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                PageTitle: e.variables.pageTitleVar,
                                IsLoading: e.variables.isLoadingVar,
                                Title: "Deposits into your " + e.variables.activeWalletVar.currencyAttr + " wallet are temporarily locked.",
                                ButtonText: "Verify now",
                                Description: "To enable deposits, you must check your proof of address document verification status."
                            },
                            events: {
                                _handleError: t(function(n) {
                                    o.handleError(n)
                                }, "_handleError"),
                                onClick$Action: t(function() {
                                    var n = c.clone();
                                    o.cashierLockOnClick$Action(o.callContext(n))
                                }, "onClick$Action")
                            },
                            _validationProps: {
                                validationService: d
                            },
                            _idProps: {
                                service: i,
                                uuid: "33",
                                alias: "7"
                            },
                            _widgetRecordProvider: a,
                            _dependencies: []
                        })), r.createElement(l, {
                            align: 0,
                            animate: !0,
                            visible: e.variables.showContentVar === "IsPoiNeeded",
                            _idProps: {
                                service: i,
                                name: "IsPoiNeeded"
                            },
                            _widgetRecordProvider: a
                        }, r.createElement(v, {
                            getOwnerSpan: t(function() {
                                return s.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: t(function() {
                                return s.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                IsLoading: e.variables.isLoadingVar,
                                PageTitle: e.variables.pageTitleVar,
                                Title: "Deposits into your " + e.variables.activeWalletVar.currencyAttr + " wallet are temporarily locked.",
                                ButtonText: "Verify now",
                                Description: "To enable deposits, you must check your proof of identity document verification status."
                            },
                            events: {
                                _handleError: t(function(n) {
                                    o.handleError(n)
                                }, "_handleError"),
                                onClick$Action: t(function() {
                                    var n = c.clone();
                                    o.cashierLockOnClick$Action(o.callContext(n))
                                }, "onClick$Action")
                            },
                            _validationProps: {
                                validationService: d
                            },
                            _idProps: {
                                service: i,
                                uuid: "35",
                                alias: "8"
                            },
                            _widgetRecordProvider: a,
                            _dependencies: []
                        })), r.createElement(l, {
                            align: 0,
                            animate: !0,
                            visible: e.variables.showContentVar === "TradingExperienceNotComplete",
                            _idProps: {
                                service: i,
                                name: "TradingExperienceNotComplete"
                            },
                            _widgetRecordProvider: a
                        }, r.createElement(v, {
                            getOwnerSpan: t(function() {
                                return s.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: t(function() {
                                return s.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Description: "To enable deposits, you must complete the financial assessment form.",
                                ButtonText: "Complete financial assessment",
                                PageTitle: e.variables.pageTitleVar,
                                Title: "Deposits into your " + e.variables.activeWalletVar.currencyAttr + " wallet are temporarily locked."
                            },
                            events: {
                                _handleError: t(function(n) {
                                    o.handleError(n)
                                }, "_handleError"),
                                onClick$Action: t(function() {
                                    var n = c.clone();
                                    o.cashierLockOnClick$Action(o.callContext(n))
                                }, "onClick$Action")
                            },
                            _validationProps: {
                                validationService: d
                            },
                            _idProps: {
                                service: i,
                                uuid: "37",
                                alias: "9"
                            },
                            _widgetRecordProvider: a,
                            _dependencies: []
                        })), r.createElement(l, {
                            align: 0,
                            animate: !0,
                            visible: e.variables.showContentVar === "IsTradingExperienceNotComplete",
                            _idProps: {
                                service: i,
                                name: "IsTradingExperienceNotComplete"
                            },
                            _widgetRecordProvider: a
                        }, r.createElement(v, {
                            getOwnerSpan: t(function() {
                                return s.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: t(function() {
                                return s.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Description: "To enable deposits, you must complete the financial assessment form.",
                                Title: "Deposits into your " + e.variables.activeWalletVar.currencyAttr + " wallet are temporarily locked.",
                                ButtonText: "Complete financial assessment",
                                IsLoading: e.variables.isLoadingVar,
                                PageTitle: e.variables.pageTitleVar
                            },
                            events: {
                                _handleError: t(function(n) {
                                    o.handleError(n)
                                }, "_handleError"),
                                onClick$Action: t(function() {
                                    var n = c.clone();
                                    o.cashierLockOnClick$Action(o.callContext(n))
                                }, "onClick$Action")
                            },
                            _validationProps: {
                                validationService: d
                            },
                            _idProps: {
                                service: i,
                                uuid: "39",
                                alias: "10"
                            },
                            _widgetRecordProvider: a,
                            _dependencies: []
                        })), r.createElement(l, {
                            align: 0,
                            animate: !0,
                            visible: e.variables.showContentVar === "SelfExclusion",
                            _idProps: {
                                service: i,
                                name: "SelfExlusion"
                            },
                            _widgetRecordProvider: a
                        }, r.createElement(v, {
                            getOwnerSpan: t(function() {
                                return s.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: t(function() {
                                return s.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                PageTitle: e.variables.pageTitleVar,
                                ButtonText: "Live chat",
                                Title: "Deposits into your " + e.variables.activeWalletVar.currencyAttr + " wallet are temporarily locked.",
                                Description: "You have chosen to exclude yourself from trading on our website until [date]. If you are unable to place a trade or deposit after your self-exclusion period, please contact us via live chat."
                            },
                            events: {
                                _handleError: t(function(n) {
                                    o.handleError(n)
                                }, "_handleError"),
                                onClick$Action: t(function() {
                                    var n = c.clone();
                                    o.cashierLockOnClick$Action(o.callContext(n))
                                }, "onClick$Action")
                            },
                            _validationProps: {
                                validationService: d
                            },
                            _idProps: {
                                service: i,
                                uuid: "41",
                                alias: "11"
                            },
                            _widgetRecordProvider: a,
                            _dependencies: []
                        })), r.createElement(l, {
                            align: 0,
                            animate: !0,
                            visible: e.variables.showContentVar === "ServerError",
                            _idProps: {
                                service: i,
                                name: "ServerError"
                            },
                            _widgetRecordProvider: a
                        }, r.createElement(v, {
                            getOwnerSpan: t(function() {
                                return s.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: t(function() {
                                return s.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                ButtonText: "Live chat",
                                PageTitle: e.variables.pageTitleVar,
                                Description: "Please contact us via live chat for assistance.",
                                Title: "Deposit is temporarily down"
                            },
                            events: {
                                _handleError: t(function(n) {
                                    o.handleError(n)
                                }, "_handleError"),
                                onClick$Action: t(function() {
                                    var n = c.clone();
                                    o.cashierLockOnClick$Action(o.callContext(n))
                                }, "onClick$Action")
                            },
                            _validationProps: {
                                validationService: d
                            },
                            _idProps: {
                                service: i,
                                uuid: "43",
                                alias: "12"
                            },
                            _widgetRecordProvider: a,
                            _dependencies: []
                        })), r.createElement(l, {
                            align: 0,
                            animate: !0,
                            visible: e.variables.showContentVar === "IsSystemMaintenance",
                            _idProps: {
                                service: i,
                                name: "IsSystemMaintenance"
                            },
                            _widgetRecordProvider: a
                        }, r.createElement(v, {
                            getOwnerSpan: t(function() {
                                return s.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: t(function() {
                                return s.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                ButtonText: "Ok",
                                PageTitle: e.variables.pageTitleVar,
                                Title: "Deposit paused",
                                Description: "Deposits and withdrawals are temporarily unavailable due to system maintenance. Try again later.",
                                IsLoading: e.variables.isLoadingVar
                            },
                            events: {
                                _handleError: t(function(n) {
                                    o.handleError(n)
                                }, "_handleError"),
                                onClick$Action: t(function() {
                                    var n = c.clone();
                                    o.cashierLockOnClick$Action(o.callContext(n))
                                }, "onClick$Action")
                            },
                            _validationProps: {
                                validationService: d
                            },
                            _idProps: {
                                service: i,
                                uuid: "45",
                                alias: "13"
                            },
                            _widgetRecordProvider: a,
                            _dependencies: []
                        }))]
                    })
                },
                _dependencies: [g(e.variables.pageTitleVar), g(e.variables.iFrameURLVar), g(e.variables.activeWalletVar.currencyAttr), g(e.variables.activeWalletVar.is_cryptoAttr), g(e.variables.isLoadingVar), g(e.variables.showContentVar)]
            }))
        }
    };
t(p, "View");
var R = p,
    J = R;
export {
    J as
    default
};