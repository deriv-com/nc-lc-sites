import {
    a as L
} from "./_oschunk-FB3IEU2E.js";
import {
    a as H
} from "./_oschunk-PKVHTZQW.js";
import {
    a as I
} from "./_oschunk-YAX3MK4Q.js";
import "./_oschunk-HJ3WOUOW.js";
import {
    a as A
} from "./_oschunk-R6VX6FEB.js";
import "./_oschunk-IDZWQMUL.js";
import "./_oschunk-VLOO5HJV.js";
import "./_oschunk-RFENF4ST.js";
import "./_oschunk-IQUI5AIQ.js";
import "./_oschunk-FVTZGXVK.js";
import "./_oschunk-GDCJSJP3.js";
import {
    a as R
} from "./_oschunk-UHVNGUMG.js";
import {
    a as E
} from "./_oschunk-MAFTJFMD.js";
import {
    a as x
} from "./_oschunk-ODSHDLTB.js";
import "./_oschunk-PSUEQKJH.js";
import "./_oschunk-BY4KTNYI.js";
import "./_oschunk-HBEXL7KK.js";
import "./_oschunk-GEKOGHNU.js";
import "./_oschunk-SW7FWAXZ.js";
import "./_oschunk-BHZNFATE.js";
import {
    a as U,
    b as _,
    c as W,
    d as P,
    e as k,
    h as l,
    j as v,
    p as M,
    r as b,
    s as C,
    t as V,
    v as G,
    y as w
} from "./_oschunk-WAXNMQCP.js";
import "./_oschunk-LHY3WMNC.js";
import {
    a as N,
    g as B,
    i as S
} from "./_oschunk-J7LCUWB3.js";
import "./_oschunk-ESOYZIPG.js";
import "./_oschunk-XMOR6XCC.js";
import {
    a as D
} from "./_oschunk-H7UK4VZM.js";
import "./_oschunk-JSVFHRDW.js";
import "./_oschunk-LUKJNVXR.js";
import "./_oschunk-X4K3PA43.js";
import {
    a as y
} from "./_oschunk-44PT7RP7.js";
import {
    ia as F
} from "./_oschunk-NTQBNJ73.js";
import {
    c as o,
    g as j
} from "./_oschunk-DVBKI63I.js";
var r = j(N());
var n = F,
    h = S.PlaceholderContent,
    le = S.IteratorPlaceholderContent,
    f = class f extends B.BaseWebScreen {
        static get displayName() {
            return "WalletFlows.WalletsWithdrawal"
        }
        static getAttributes() {
            return {
                codeFunction: "WalletsWithdrawal",
                functionKey: "97bad0a0-2ffc-4c16-9cd0-e3e220356024",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.WalletFlows.WalletsWithdrawal.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return ["scripts/tradershub.UserScripts.yupumd.js"]
        }
        static getBlocks() {
            return [x, I, A, E, R]
        }
        get modelFactory() {
            return L
        }
        get controllerFactory() {
            return H
        }
        get title() {
            let e = this.model,
                d = this.controller,
                t = this.idService,
                g = d.validationService,
                i = d.callContext(),
                p = f.asPrimitiveValue,
                T = f.getTranslation,
                c = this;
            return n.Injector.resolve(n.ServiceNames.TranslationsService).getMessage("oNC6l_wvFkyc0OPiIDVgJA#TitleExpression.-1475808591.1", "Witdrawal")
        }
        internalRender() {
            let e = this.model,
                d = this.controller,
                t = this.idService,
                g = d.validationService,
                i = this.widgetsRecordProvider,
                p = d.callContext(),
                T = f.ifWidget,
                c = f.textWidget,
                a = f.asPrimitiveValue,
                u = f.getTranslation,
                m = this;
            return r.createElement("div", this.getRootNodeProperties(), r.createElement(x, {
                getOwnerSpan: o(function() {
                    return m.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return m.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: o(function(s) {
                        d.handleError(s)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: g
                },
                _idProps: {
                    service: t,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: i,
                placeholders: {
                    content: new h(function() {
                        return [r.createElement(I, {
                            getOwnerSpan: o(function() {
                                return m.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return m.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                HideMobileStickyFooter: !e.variables.activeWalletVar.isCrpytoAttr,
                                PageTitle: "Withdraw",
                                IsLoading: e.variables.isLoadingVar
                            },
                            events: {
                                _handleError: o(function(s) {
                                    d.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: g
                            },
                            _idProps: {
                                service: t,
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: i,
                            placeholders: {
                                walletOverlayPageContent: new h(function() {
                                    return [T(e.variables.activeWalletVar.isCrpytoAttr, !1, this, function() {
                                        return [r.createElement(l, {
                                            align: 0,
                                            animate: !1,
                                            style: "display-flex flex-direction-column",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                name: "WithdrawalCryptoContainer"
                                            },
                                            _widgetRecordProvider: i
                                        }, r.createElement(G, {
                                            showPopup: e.variables.isPriorityWithdrawalErrorVar,
                                            style: "popup-dialog",
                                            _idProps: {
                                                service: t,
                                                uuid: "3"
                                            },
                                            _widgetRecordProvider: i
                                        }, r.createElement(l, {
                                            align: 0,
                                            animate: !1,
                                            style: "full-width display-flex justify-content-flex-end",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                name: "ModalHeader"
                                            },
                                            _widgetRecordProvider: i
                                        }, r.createElement(b, {
                                            image: n.Navigation.VersionedURL.getVersionedUrl("img/tradershub.close.png"),
                                            type: 0,
                                            _idProps: {
                                                service: t,
                                                uuid: "5"
                                            },
                                            _widgetRecordProvider: i
                                        })), r.createElement(l, {
                                            align: 0,
                                            animate: !1,
                                            style: "display-flex justify-content-center align-items flex-direction-column gap-m ",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                name: "ModalContent"
                                            },
                                            _widgetRecordProvider: i
                                        }, r.createElement(l, {
                                            align: 0,
                                            animate: !1,
                                            style: `display-flex justify-content-center align-items-\r
 `,
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                name: "ContentImage"
                                            },
                                            _widgetRecordProvider: i
                                        }, r.createElement(l, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "height: 56px;"
                                            },
                                            gridProperties: {
                                                classes: "OSInline",
                                                width: "56px"
                                            },
                                            style: "background-yellow-lightest border-radius-rounded",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "8"
                                            },
                                            _widgetRecordProvider: i
                                        }, r.createElement(b, {
                                            gridProperties: {
                                                classes: "ThemeGrid_Width1"
                                            },
                                            image: n.Navigation.VersionedURL.getVersionedUrl("img/tradershub.WarningLight.svg"),
                                            type: 0,
                                            _idProps: {
                                                service: t,
                                                uuid: "9"
                                            },
                                            _widgetRecordProvider: i
                                        }))), r.createElement(l, {
                                            align: 0,
                                            animate: !1,
                                            style: "full-width display-flex flex-direction-column justify-content-center align-items-center",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "10"
                                            },
                                            _widgetRecordProvider: i
                                        }, r.createElement(w, {
                                            style: "font-size-h6 font-bold",
                                            text: [c(u("lQAljLB5h0KKTAwhWDbz4g#Value", "Priority withdrawal error"))],
                                            _idProps: {
                                                service: t,
                                                uuid: "11"
                                            },
                                            _widgetRecordProvider: i
                                        }), r.createElement(v, {
                                            gridProperties: {
                                                classes: "ThemeGrid_MarginGutter"
                                            },
                                            style: "text-align-center",
                                            value: n.Injector.resolve(n.ServiceNames.TranslationsService).getMessage("O_5iO8gPaE2hZXNv_mMYwQ#ValueExpression.2121957993.1", "The estimated withdrawal fee for ") + e.variables.activeWalletVar.currencyAttr + n.Injector.resolve(n.ServiceNames.TranslationsService).getMessage("O_5iO8gPaE2hZXNv_mMYwQ#ValueExpression.-1958743410.1", " is currently unavailable."),
                                            _idProps: {
                                                service: t,
                                                uuid: "12"
                                            },
                                            _widgetRecordProvider: i
                                        })), r.createElement(l, {
                                            align: 0,
                                            animate: !1,
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                name: "ModalFooter"
                                            },
                                            _widgetRecordProvider: i
                                        }, r.createElement(_, {
                                            enabled: !0,
                                            isDefault: !1,
                                            onClick: o(function() {
                                                var s = p.clone();
                                                d.tryAgainOnClick$Action(d.callContext(s))
                                            }, "onClick"),
                                            style: "btn btn-primary full-width",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "14"
                                            },
                                            _widgetRecordProvider: i
                                        }, c(u("dIH65ztrAkWd92UpQL+J+Q#Value", "Try again")))))), r.createElement(l, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "border-radius: 8px;"
                                            },
                                            style: "padding-base background-warning-light display-flex gap-s align-items-flex-start",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                name: "WithdrawalDisclaimerMessage"
                                            },
                                            _widgetRecordProvider: i
                                        }, r.createElement(b, {
                                            gridProperties: {
                                                width: "24px"
                                            },
                                            image: n.Navigation.VersionedURL.getVersionedUrl("img/tradershub.WarningLight.svg"),
                                            type: 0,
                                            _idProps: {
                                                service: t,
                                                uuid: "16"
                                            },
                                            _widgetRecordProvider: i
                                        }), r.createElement(w, {
                                            extendedProperties: {
                                                style: "font-size: 12px;"
                                            },
                                            text: [c(u("SJpkKA85T0qI19QaKUediA#Value", "Do not use initial coin offering (ICO) linked addresses. ICO tokens will not be credited to this wallet."))],
                                            _idProps: {
                                                service: t,
                                                uuid: "17"
                                            },
                                            _widgetRecordProvider: i
                                        })), r.createElement(l, {
                                            align: 0,
                                            animate: !1,
                                            style: "margin-top-m",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                name: "WithdrawalCryptoForm"
                                            },
                                            _widgetRecordProvider: i
                                        }, r.createElement(M, {
                                            _validationProps: {
                                                validationService: g
                                            },
                                            gridProperties: {
                                                classes: "OSFillParent"
                                            },
                                            style: "display-flex flex-direction-column gap-m",
                                            _idProps: {
                                                service: t,
                                                name: "Form1"
                                            },
                                            _widgetRecordProvider: i
                                        }, r.createElement(l, {
                                            align: 0,
                                            animate: !1,
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                name: "CryptoAddressContainer"
                                            },
                                            _widgetRecordProvider: i
                                        }, r.createElement(V, {
                                            gridProperties: {
                                                classes: "OSFillParent"
                                            },
                                            mandatory: !1,
                                            style: "margin-bottom-s",
                                            targetWidget: "Input_CryptoAddress",
                                            _idProps: {
                                                service: t,
                                                uuid: "21"
                                            },
                                            _widgetRecordProvider: i
                                        }, r.createElement(v, {
                                            extendedProperties: {
                                                style: "font-size: 16px;"
                                            },
                                            value: n.Injector.resolve(n.ServiceNames.TranslationsService).getMessage("9yCQmSiljUiCX+SEVZWhsg#ValueExpression.85616173.1", "Your ") + e.variables.activeWalletVar.currencyAttr + " wallet address",
                                            _idProps: {
                                                service: t,
                                                uuid: "22"
                                            },
                                            _widgetRecordProvider: i
                                        })), r.createElement(C, {
                                            _validationProps: {
                                                validationService: g,
                                                validationParentId: t.getId("Form1")
                                            },
                                            enabled: !0,
                                            gridProperties: {
                                                classes: "OSFillParent"
                                            },
                                            inputType: 0,
                                            mandatory: !1,
                                            maxLength: 0,
                                            onChange: o(function() {
                                                var s = p.clone();
                                                d.onChangeAddressInput$Action(d.callContext(s))
                                            }, "onChange"),
                                            prompt: n.Injector.resolve(n.ServiceNames.TranslationsService).getMessage("1ccevNF4VkqFvVXMzDuPYQ#ValueExpression.-1759222307.1", "Enter the address"),
                                            style: "form-control",
                                            variable: e.createVariable(n.DataTypes.DataTypes.Text, e.variables.cryptoAddressVar, function(s) {
                                                e.variables.cryptoAddressVar = s
                                            }),
                                            _idProps: {
                                                service: t,
                                                name: "Input_CryptoAddress"
                                            },
                                            _widgetRecordProvider: i
                                        })), r.createElement(l, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "margin-top: 10px;"
                                            },
                                            style: "display-flex flex-direction-column",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                name: "CryptoAmountContainer"
                                            },
                                            _widgetRecordProvider: i
                                        }, r.createElement(V, {
                                            gridProperties: {
                                                classes: "OSFillParent"
                                            },
                                            mandatory: !1,
                                            targetWidget: "Input_CryptoAmount",
                                            _idProps: {
                                                service: t,
                                                uuid: "25"
                                            },
                                            _widgetRecordProvider: i
                                        }, r.createElement(w, {
                                            extendedProperties: {
                                                style: "font-size: 16px;"
                                            },
                                            text: [c(u("LnY55di0OUipnayWyL6+GA#Value", "Amount"))],
                                            _idProps: {
                                                service: t,
                                                uuid: "26"
                                            },
                                            _widgetRecordProvider: i
                                        })), r.createElement(W, {
                                            _validationProps: {
                                                validationService: g,
                                                validationParentId: t.getId("Form1")
                                            },
                                            enabled: !0,
                                            mandatory: !1,
                                            onChange: o(function() {
                                                var s = p.clone();
                                                d.onChangeAmountInput$Action(d.callContext(s))
                                            }, "onChange"),
                                            style: "margin-y-base",
                                            variable: e.createVariable(n.DataTypes.DataTypes.Decimal, e.variables.withdrawalAmountVar, function(s) {
                                                e.variables.withdrawalAmountVar = s
                                            }),
                                            _idProps: {
                                                service: t,
                                                name: "ButtonGroup"
                                            },
                                            _widgetRecordProvider: i
                                        }, r.createElement(P, {
                                            enabled: !0,
                                            style: "wallets-crypto-amount-btn",
                                            value: new n.DataTypes.Decimal("0.25").times(e.variables.walletBalanceVar),
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                name: "ButtonGroupItem1"
                                            },
                                            _widgetRecordProvider: i
                                        }, "25%"), r.createElement(P, {
                                            enabled: !0,
                                            style: "wallets-crypto-amount-btn margin-left-s",
                                            value: new n.DataTypes.Decimal("0.50").times(e.variables.walletBalanceVar),
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                name: "ButtonGroupItem2"
                                            },
                                            _widgetRecordProvider: i
                                        }, "50%"), r.createElement(P, {
                                            enabled: !0,
                                            style: "wallets-crypto-amount-btn margin-left-s",
                                            value: new n.DataTypes.Decimal("0.75").times(e.variables.walletBalanceVar),
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                name: "ButtonGroupItem3"
                                            },
                                            _widgetRecordProvider: i
                                        }, "75%"), r.createElement(P, {
                                            enabled: !0,
                                            style: "wallets-crypto-amount-btn margin-left-s",
                                            value: new n.DataTypes.Decimal("1.0").times(e.variables.walletBalanceVar),
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                name: "ButtonGroupItem4"
                                            },
                                            _widgetRecordProvider: i
                                        }, "100%")), r.createElement(l, {
                                            align: 0,
                                            animate: !1,
                                            style: "display-flex gap-s full-width align-items-flex-start",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                name: "InputAmountContainer"
                                            },
                                            _widgetRecordProvider: i
                                        }, r.createElement(C, {
                                            _validationProps: {
                                                validationService: g,
                                                validationParentId: t.getId("Form1")
                                            },
                                            enabled: !0,
                                            extendedProperties: {
                                                "data-dirty": "False",
                                                pattern: "[0-9]*",
                                                "show-default-value": "True"
                                            },
                                            gridProperties: {
                                                classes: "OSFillParent"
                                            },
                                            inputType: 2,
                                            mandatory: !1,
                                            maxLength: 0,
                                            onChange: o(function() {
                                                var s = p.clone();
                                                d.onChangeAmountInput$Action(d.callContext(s))
                                            }, "onChange"),
                                            style: "form-control full-height",
                                            variable: e.createVariable(n.DataTypes.DataTypes.Decimal, e.variables.withdrawalAmountVar, function(s) {
                                                e.variables.withdrawalAmountVar = s
                                            }),
                                            _idProps: {
                                                service: t,
                                                name: "Input_CryptoAmount"
                                            },
                                            _widgetRecordProvider: i
                                        }), r.createElement(A, {
                                            getOwnerSpan: o(function() {
                                                return m.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: o(function() {
                                                return m.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                UseNumericInput: !0,
                                                AlwaysShowDecimalDigits: !0,
                                                PrefixText: "",
                                                DecimalDigits: e.getCachedValue(t.getId("IzZ3DujAKkWCrP20dA+E6A.DecimalDigits"), function() {
                                                    return n.BuiltinFunctions.integerToDecimal(e.variables.currencySwitcherVar === e.variables.activeWalletVar.currencyAttr ? 8 : 2)
                                                }, function() {
                                                    return e.variables.currencySwitcherVar
                                                }, function() {
                                                    return e.variables.activeWalletVar.currencyAttr
                                                }),
                                                GroupSeparator: e.getCachedValue(t.getId("IzZ3DujAKkWCrP20dA+E6A.GroupSeparator"), function() {
                                                    return e.variables.currencySwitcherVar === e.variables.activeWalletVar.currencyAttr ? "" : ","
                                                }, function() {
                                                    return e.variables.currencySwitcherVar
                                                }, function() {
                                                    return e.variables.activeWalletVar.currencyAttr
                                                }),
                                                DecimalSeparator: ".",
                                                InputId: t.getId("Input_CryptoAmount"),
                                                SuffixText: ""
                                            },
                                            events: {
                                                _handleError: o(function(s) {
                                                    d.handleError(s)
                                                }, "_handleError")
                                            },
                                            _validationProps: {
                                                validationService: g,
                                                validationParentId: t.getId("Form1")
                                            },
                                            _idProps: {
                                                service: t,
                                                uuid: "34",
                                                alias: "3"
                                            },
                                            _widgetRecordProvider: i,
                                            _dependencies: []
                                        }), r.createElement(W, {
                                            _validationProps: {
                                                validationService: g,
                                                validationParentId: t.getId("Form1")
                                            },
                                            enabled: e.getCachedValue(t.getId("ExchangeRateSwitcher.Enabled"), function() {
                                                return e.variables.exchangeRateVar !== n.BuiltinFunctions.nullIdentifier().toString()
                                            }, function() {
                                                return e.variables.exchangeRateVar
                                            }),
                                            gridProperties: {
                                                classes: "ThemeGrid_MarginGutter"
                                            },
                                            mandatory: !1,
                                            onChange: o(function() {
                                                var s = p.clone();
                                                d.exchangeRateSwitcherOnChange$Action(d.callContext(s))
                                            }, "onChange"),
                                            style: "real-demo-switcher",
                                            variable: e.createVariable(n.DataTypes.DataTypes.Text, e.variables.currencySwitcherVar, function(s) {
                                                e.variables.currencySwitcherVar = s
                                            }),
                                            _idProps: {
                                                service: t,
                                                name: "ExchangeRateSwitcher"
                                            },
                                            _widgetRecordProvider: i
                                        }, r.createElement(P, {
                                            enabled: !0,
                                            style: "real-demo-switcher-item",
                                            value: e.variables.activeWalletVar.currencyAttr,
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                name: "CryptoSwithcer"
                                            },
                                            _widgetRecordProvider: i
                                        }, r.createElement(v, {
                                            value: e.variables.activeWalletVar.currencyAttr,
                                            _idProps: {
                                                service: t,
                                                uuid: "37"
                                            },
                                            _widgetRecordProvider: i
                                        })), r.createElement(P, {
                                            enabled: !0,
                                            style: "real-demo-switcher-item",
                                            value: "USD",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                name: "USDSwithcer"
                                            },
                                            _widgetRecordProvider: i
                                        }, "USD")))), r.createElement(l, {
                                            align: 0,
                                            animate: !1,
                                            style: "display-flex align-items-center",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                name: "CheckboxContainer"
                                            },
                                            _widgetRecordProvider: i
                                        }, r.createElement(l, {
                                            align: 0,
                                            animate: !1,
                                            style: "margin-right-s",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "40"
                                            },
                                            _widgetRecordProvider: i
                                        }, r.createElement(k, {
                                            _validationProps: {
                                                validationService: g,
                                                validationParentId: t.getId("Form1")
                                            },
                                            enabled: !0,
                                            extendedProperties: {
                                                style: "height: 24px; width: 24px;"
                                            },
                                            gridProperties: {
                                                marginLeft: "0px"
                                            },
                                            onChange: o(function() {
                                                return Promise.resolve().then(function() {
                                                    var s = p.clone();
                                                    return d.onPriorityCheck$Action(d.callContext(s))
                                                })
                                            }, "onChange"),
                                            style: "checkbox",
                                            variable: e.createVariable(n.DataTypes.DataTypes.Boolean, e.variables.isWithdrawalPriorityVar, function(s) {
                                                e.variables.isWithdrawalPriorityVar = s
                                            }),
                                            _idProps: {
                                                service: t,
                                                name: "Checkbox1"
                                            },
                                            _widgetRecordProvider: i
                                        })), r.createElement(V, {
                                            gridProperties: {
                                                classes: "OSFillParent"
                                            },
                                            style: "margin-right-s",
                                            _idProps: {
                                                service: t,
                                                uuid: "42"
                                            },
                                            _widgetRecordProvider: i
                                        }, c(u("FaXM_4XOlk6OhP1iW1w0XQ#Value", "Priority withdrawal"))), r.createElement(E, {
                                            getOwnerSpan: o(function() {
                                                return m.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: o(function() {
                                                return m.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                Trigger: y.trigger.onHover,
                                                Position: y.position.top
                                            },
                                            events: {
                                                _handleError: o(function(s) {
                                                    d.handleError(s)
                                                }, "_handleError")
                                            },
                                            _validationProps: {
                                                validationService: g,
                                                validationParentId: t.getId("Form1")
                                            },
                                            _idProps: {
                                                service: t,
                                                uuid: "43",
                                                alias: "4"
                                            },
                                            _widgetRecordProvider: i,
                                            placeholders: {
                                                content: new h(function() {
                                                    return [r.createElement(b, {
                                                        gridProperties: {
                                                            width: "14px"
                                                        },
                                                        image: n.Navigation.VersionedURL.getVersionedUrl("img/tradershub.information.png"),
                                                        type: 0,
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "44"
                                                        },
                                                        _widgetRecordProvider: i
                                                    })]
                                                }),
                                                tooltip: new h(function() {
                                                    return [c(u("wruro+maqUOWBaiIkVpHaQ#Value", "Pay a small fee to prioritise your withdrawal. The fee will be deducted from the withdrawal amount."))]
                                                })
                                            },
                                            _dependencies: []
                                        })), r.createElement(l, {
                                            align: 0,
                                            animate: !0,
                                            style: "display-flex flex-direction-column gap-base margin-y-base",
                                            visible: e.getCachedValue(t.getId("BottomContainer.Visible"), function() {
                                                return D.isDesktop$Action(p).isDesktopOut
                                            }),
                                            _idProps: {
                                                service: t,
                                                name: "BottomContainer"
                                            },
                                            _widgetRecordProvider: i
                                        }, r.createElement(l, {
                                            align: 0,
                                            animate: !1,
                                            style: "display-flex justify-content-space-between",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                name: "WithdrawalTextContainer"
                                            },
                                            _widgetRecordProvider: i
                                        }, r.createElement(w, {
                                            style: "text-neutral-8 full-width",
                                            text: [c(u("r+NW8PHyl0GSS_t3scx5MQ#Value", "Withdrawal amount"))],
                                            _idProps: {
                                                service: t,
                                                uuid: "47"
                                            },
                                            _widgetRecordProvider: i
                                        }), r.createElement(l, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "text-align: right;"
                                            },
                                            style: "full-width",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "48"
                                            },
                                            _widgetRecordProvider: i
                                        }, r.createElement(v, {
                                            style: "margin-right-s",
                                            value: e.getCachedValue(t.getId("9qTMRkqDfU+CGDOa4qec0w.Value"), function() {
                                                return n.BuiltinFunctions.formatDecimal(e.variables.withdrawalAmountInCryptoVar, 8, ".", ".") + " " + e.variables.activeWalletVar.currencyAttr + " \u2248 $" + n.BuiltinFunctions.formatDecimal(e.variables.withdrawalAmountInFiatVar, 2, ".", ".") + " (" + e.variables.rateTimerVar.toString() + "s)"
                                            }, function() {
                                                return e.variables.withdrawalAmountInCryptoVar
                                            }, function() {
                                                return e.variables.activeWalletVar.currencyAttr
                                            }, function() {
                                                return e.variables.withdrawalAmountInFiatVar
                                            }, function() {
                                                return e.variables.rateTimerVar
                                            }),
                                            _idProps: {
                                                service: t,
                                                uuid: "49"
                                            },
                                            _widgetRecordProvider: i
                                        }))), r.createElement(l, {
                                            align: 0,
                                            animate: !0,
                                            style: "display-flex justify-content-space-between",
                                            visible: e.variables.isWithdrawalPriorityVar,
                                            _idProps: {
                                                service: t,
                                                name: "PriorityWithdrawalFee"
                                            },
                                            _widgetRecordProvider: i
                                        }, r.createElement(l, {
                                            align: 0,
                                            animate: !1,
                                            style: "full-width",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "51"
                                            },
                                            _widgetRecordProvider: i
                                        }, r.createElement(w, {
                                            style: "text-neutral-8",
                                            text: [c(u("tuTJgEOL1UqMyaf19TrtPQ#Value", "Transaction fee"))],
                                            _idProps: {
                                                service: t,
                                                uuid: "52"
                                            },
                                            _widgetRecordProvider: i
                                        }), r.createElement(v, {
                                            gridProperties: {
                                                classes: "ThemeGrid_MarginGutter"
                                            },
                                            value: " (" + e.variables.priorityWithdrawalTimerVar.toString() + "s)",
                                            _idProps: {
                                                service: t,
                                                uuid: "53"
                                            },
                                            _widgetRecordProvider: i
                                        })), r.createElement(l, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "text-align: right;"
                                            },
                                            style: "full-width",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "54"
                                            },
                                            _widgetRecordProvider: i
                                        }, r.createElement(v, {
                                            style: "margin-right-s",
                                            value: e.getCachedValue(t.getId("srSvmYraHUqHC7lQMVR6EA.Value"), function() {
                                                return "- " + n.BuiltinFunctions.formatDecimal(e.variables.withdrawalFeesInfoVar.valueAttr, 8, ",", ".") + " " + e.variables.activeWalletVar.currencyAttr
                                            }, function() {
                                                return e.variables.withdrawalFeesInfoVar.valueAttr
                                            }, function() {
                                                return e.variables.activeWalletVar.currencyAttr
                                            }),
                                            _idProps: {
                                                service: t,
                                                uuid: "55"
                                            },
                                            _widgetRecordProvider: i
                                        }))), r.createElement(l, {
                                            align: 0,
                                            animate: !0,
                                            visible: e.variables.isWithdrawalPriorityVar,
                                            _idProps: {
                                                service: t,
                                                uuid: "56"
                                            },
                                            _widgetRecordProvider: i
                                        }, r.createElement(R, {
                                            getOwnerSpan: o(function() {
                                                return m.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: o(function() {
                                                return m.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                Color: y.color.neutral2,
                                                Space: y.space.small
                                            },
                                            events: {
                                                _handleError: o(function(s) {
                                                    d.handleError(s)
                                                }, "_handleError")
                                            },
                                            _validationProps: {
                                                validationService: g,
                                                validationParentId: t.getId("Form1")
                                            },
                                            _idProps: {
                                                service: t,
                                                uuid: "57",
                                                alias: "5"
                                            },
                                            _widgetRecordProvider: i,
                                            _dependencies: []
                                        })), r.createElement(l, {
                                            align: 0,
                                            animate: !0,
                                            style: "display-flex justify-content-space-between",
                                            visible: e.variables.isWithdrawalPriorityVar,
                                            _idProps: {
                                                service: t,
                                                name: "FinalWithdrawalAmount"
                                            },
                                            _widgetRecordProvider: i
                                        }, r.createElement(w, {
                                            style: "text-neutral-8 full-width",
                                            text: [c(u("OqyRMM3vNE+WRLBjRqTRCw#Value", "Amount received"))],
                                            _idProps: {
                                                service: t,
                                                uuid: "59"
                                            },
                                            _widgetRecordProvider: i
                                        }), r.createElement(l, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "text-align: right;"
                                            },
                                            style: "full-width",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "60"
                                            },
                                            _widgetRecordProvider: i
                                        }, r.createElement(v, {
                                            style: "margin-right-s",
                                            value: e.getCachedValue(t.getId("OHI9tPGW2ESEe+2jW9pXzA.Value"), function() {
                                                return n.BuiltinFunctions.formatDecimal(e.variables.withdrawalAmountInCryptoVar, 8, ".", ".") + " " + e.variables.activeWalletVar.currencyAttr + " \u2248 $" + n.BuiltinFunctions.formatDecimal(e.variables.withdrawalAmountInFiatVar, 2, ",", ".") + " (" + e.variables.rateTimerVar.toString() + "s)"
                                            }, function() {
                                                return e.variables.withdrawalAmountInCryptoVar
                                            }, function() {
                                                return e.variables.activeWalletVar.currencyAttr
                                            }, function() {
                                                return e.variables.withdrawalAmountInFiatVar
                                            }, function() {
                                                return e.variables.rateTimerVar
                                            }),
                                            _idProps: {
                                                service: t,
                                                uuid: "61"
                                            },
                                            _widgetRecordProvider: i
                                        }))), r.createElement(l, {
                                            align: 0,
                                            animate: !1,
                                            gridProperties: {
                                                marginLeft: "Auto"
                                            },
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                name: "WithdrawalButtonContainer"
                                            },
                                            _widgetRecordProvider: i
                                        }, r.createElement(_, {
                                            enabled: e.getCachedValue(t.getId("TbUHtV+5ZUGHfWAHw9w8YQ.Enabled"), function() {
                                                return e.widgets.get(t.getId("Input_CryptoAddress")).validAttr && e.widgets.get(t.getId("Input_CryptoAmount")).validAttr && !e.variables.withdrawalAmountVar.equals(n.BuiltinFunctions.integerToDecimal(0)) && e.variables.cryptoAddressVar !== n.BuiltinFunctions.nullTextIdentifier()
                                            }, function() {
                                                return e.widgets.get(t.getId("Input_CryptoAddress")).validAttr
                                            }, function() {
                                                return e.widgets.get(t.getId("Input_CryptoAmount")).validAttr
                                            }, function() {
                                                return e.variables.withdrawalAmountVar
                                            }, function() {
                                                return e.variables.cryptoAddressVar
                                            }),
                                            isDefault: !0,
                                            onClick: o(function() {
                                                return m.validateWidget(t.getId("Form1")), Promise.resolve().then(function() {
                                                    var s = p.clone();
                                                    return d.withdrawOnClick$Action(d.callContext(s))
                                                })
                                            }, "onClick"),
                                            style: "btn btn-primary",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "63"
                                            },
                                            _widgetRecordProvider: i
                                        }, c(u("6c05wVr2OUSVta1ZRqa7sg#Value", "Withdraw"))))))))]
                                    }, function() {
                                        return [r.createElement(l, {
                                            align: 0,
                                            animate: !1,
                                            style: "full-width",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                name: "IframeContainer"
                                            },
                                            _widgetRecordProvider: i
                                        }, r.createElement(U, {
                                            extendedProperties: {
                                                src: e.variables.iframeUrlVar
                                            },
                                            tag: "iframe",
                                            _idProps: {
                                                service: t,
                                                name: "WithdrawalIframe"
                                            },
                                            _widgetRecordProvider: i
                                        }))]
                                    })]
                                }),
                                mobileFooterContent: new h(function() {
                                    return [r.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        style: "padding-base",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "66"
                                        },
                                        _widgetRecordProvider: i
                                    }, r.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex flex-direction-column margin-bottom-base",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "BottomContainer2"
                                        },
                                        _widgetRecordProvider: i
                                    }, r.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex justify-content-space-between",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "WithdrawalTextContainer2"
                                        },
                                        _widgetRecordProvider: i
                                    }, r.createElement(w, {
                                        style: e.getCachedValue(t.getId("dLKRqWf0JUme1oeyQKmHWQ.Style"), function() {
                                            return "text-neutral-8 full-width " + (e.variables.isWithdrawalPriorityVar ? "font-size-xs" : "font-size-s")
                                        }, function() {
                                            return e.variables.isWithdrawalPriorityVar
                                        }),
                                        text: [c(u("dLKRqWf0JUme1oeyQKmHWQ#Value", "Withdrawal amount"))],
                                        _idProps: {
                                            service: t,
                                            uuid: "69"
                                        },
                                        _widgetRecordProvider: i
                                    }), r.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex flex-direction-column align-items-flex-end full-width",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "70"
                                        },
                                        _widgetRecordProvider: i
                                    }, r.createElement(v, {
                                        extendedProperties: {
                                            style: "margin-right: 0px;"
                                        },
                                        style: e.getCachedValue(t.getId("TVR8tnhXckyNVhA+aHpYwg.Style"), function() {
                                            return e.variables.isWithdrawalPriorityVar === !0 ? "font-size-xs" : "font-size-s"
                                        }, function() {
                                            return e.variables.isWithdrawalPriorityVar
                                        }),
                                        value: e.getCachedValue(t.getId("TVR8tnhXckyNVhA+aHpYwg.Value"), function() {
                                            return n.BuiltinFunctions.formatDecimal(e.variables.withdrawalAmountInCryptoVar, 8, ".", ".") + " " + e.variables.activeWalletVar.currencyAttr
                                        }, function() {
                                            return e.variables.withdrawalAmountInCryptoVar
                                        }, function() {
                                            return e.variables.activeWalletVar.currencyAttr
                                        }),
                                        _idProps: {
                                            service: t,
                                            uuid: "71"
                                        },
                                        _widgetRecordProvider: i
                                    }), r.createElement(v, {
                                        extendedProperties: {
                                            style: "font-size: 12px;"
                                        },
                                        gridProperties: {
                                            classes: "ThemeGrid_MarginGutter"
                                        },
                                        style: e.getCachedValue(t.getId("iCNeasWcHE23ExuamRCKVw.Style"), function() {
                                            return e.variables.isWithdrawalPriorityVar === !0 ? "display-none" : "display-block"
                                        }, function() {
                                            return e.variables.isWithdrawalPriorityVar
                                        }),
                                        value: e.getCachedValue(t.getId("iCNeasWcHE23ExuamRCKVw.Value"), function() {
                                            return " \u2248 $" + n.BuiltinFunctions.formatDecimal(e.variables.withdrawalAmountInFiatVar, 2, ".", ".") + " (" + e.variables.rateTimerVar.toString() + "s)"
                                        }, function() {
                                            return e.variables.withdrawalAmountInFiatVar
                                        }, function() {
                                            return e.variables.rateTimerVar
                                        }),
                                        _idProps: {
                                            service: t,
                                            uuid: "72"
                                        },
                                        _widgetRecordProvider: i
                                    }))), r.createElement(l, {
                                        align: 0,
                                        animate: !0,
                                        style: "display-flex justify-content-space-between",
                                        visible: e.variables.isWithdrawalPriorityVar,
                                        _idProps: {
                                            service: t,
                                            name: "PriorityWithdrawalFee2"
                                        },
                                        _widgetRecordProvider: i
                                    }, r.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex margin-right-xs full-width",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "74"
                                        },
                                        _widgetRecordProvider: i
                                    }, r.createElement(w, {
                                        extendedProperties: {
                                            style: "font-size: 12px;"
                                        },
                                        style: "text-neutral-8",
                                        text: [c(u("qRVk1RpdMEaNn8aPR_vViw#Value", "Transaction fee"))],
                                        _idProps: {
                                            service: t,
                                            uuid: "75"
                                        },
                                        _widgetRecordProvider: i
                                    }), r.createElement(v, {
                                        extendedProperties: {
                                            style: "font-size: 12px;"
                                        },
                                        gridProperties: {
                                            classes: "ThemeGrid_MarginGutter"
                                        },
                                        value: " (" + e.variables.priorityWithdrawalTimerVar.toString() + "s)",
                                        _idProps: {
                                            service: t,
                                            uuid: "76"
                                        },
                                        _widgetRecordProvider: i
                                    })), r.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "text-align: right;"
                                        },
                                        style: "full-width",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "77"
                                        },
                                        _widgetRecordProvider: i
                                    }, r.createElement(v, {
                                        extendedProperties: {
                                            style: "font-size: 12px;"
                                        },
                                        value: e.getCachedValue(t.getId("nO+AXZEqLUGSUj+CAvzvgw.Value"), function() {
                                            return "- " + n.BuiltinFunctions.formatDecimal(e.variables.withdrawalFeesInfoVar.valueAttr, 8, ".", ".") + " " + e.variables.activeWalletVar.currencyAttr
                                        }, function() {
                                            return e.variables.withdrawalFeesInfoVar.valueAttr
                                        }, function() {
                                            return e.variables.activeWalletVar.currencyAttr
                                        }),
                                        _idProps: {
                                            service: t,
                                            uuid: "78"
                                        },
                                        _widgetRecordProvider: i
                                    }))), r.createElement(l, {
                                        align: 0,
                                        animate: !0,
                                        visible: e.variables.isWithdrawalPriorityVar,
                                        _idProps: {
                                            service: t,
                                            uuid: "79"
                                        },
                                        _widgetRecordProvider: i
                                    }, r.createElement(R, {
                                        getOwnerSpan: o(function() {
                                            return m.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: o(function() {
                                            return m.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            Space: y.space.small,
                                            Color: y.color.neutral2
                                        },
                                        events: {
                                            _handleError: o(function(s) {
                                                d.handleError(s)
                                            }, "_handleError")
                                        },
                                        _validationProps: {
                                            validationService: g
                                        },
                                        _idProps: {
                                            service: t,
                                            uuid: "80",
                                            alias: "6"
                                        },
                                        _widgetRecordProvider: i,
                                        _dependencies: []
                                    })), r.createElement(l, {
                                        align: 0,
                                        animate: !0,
                                        style: "display-flex justify-content-space-between",
                                        visible: e.variables.isWithdrawalPriorityVar,
                                        _idProps: {
                                            service: t,
                                            name: "FinalWithdrawalAmount2"
                                        },
                                        _widgetRecordProvider: i
                                    }, r.createElement(w, {
                                        style: "text-neutral-8 full-width",
                                        text: [c(u("tK2qb8pF4kua37YyP9_8dQ#Value", "Amount received"))],
                                        _idProps: {
                                            service: t,
                                            uuid: "82"
                                        },
                                        _widgetRecordProvider: i
                                    }), r.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex flex-direction-column align-items-flex-end full-width",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "83"
                                        },
                                        _widgetRecordProvider: i
                                    }, r.createElement(v, {
                                        gridProperties: {
                                            marginLeft: "0px"
                                        },
                                        style: "margin-right-s",
                                        value: e.getCachedValue(t.getId("6VU5jjHWwEG9Te1FvME5bw.Value"), function() {
                                            return n.BuiltinFunctions.formatDecimal(e.variables.finalCryptoAmountVar, 8, ".", ".") + " " + e.variables.activeWalletVar.currencyAttr
                                        }, function() {
                                            return e.variables.finalCryptoAmountVar
                                        }, function() {
                                            return e.variables.activeWalletVar.currencyAttr
                                        }),
                                        _idProps: {
                                            service: t,
                                            uuid: "84"
                                        },
                                        _widgetRecordProvider: i
                                    }), r.createElement(v, {
                                        extendedProperties: {
                                            style: "font-size: 12px;"
                                        },
                                        gridProperties: {
                                            marginLeft: "0px"
                                        },
                                        value: e.getCachedValue(t.getId("T819qEVP+U6_CWXkxpLb3g.Value"), function() {
                                            return "\u2248 $" + n.BuiltinFunctions.formatDecimal(e.variables.finalConvertedAmountVar, 2, ".", ".") + " (" + e.variables.rateTimerVar.toString() + "s)"
                                        }, function() {
                                            return e.variables.finalConvertedAmountVar
                                        }, function() {
                                            return e.variables.rateTimerVar
                                        }),
                                        _idProps: {
                                            service: t,
                                            uuid: "85"
                                        },
                                        _widgetRecordProvider: i
                                    })))), r.createElement(_, {
                                        enabled: e.getCachedValue(t.getId("S8toFJNEx0S4Ka2PGHlm2w.Enabled"), function() {
                                            return e.widgets.get(t.getId("Input_CryptoAddress")).validAttr && e.widgets.get(t.getId("Input_CryptoAmount")).validAttr && !e.variables.withdrawalAmountVar.equals(n.BuiltinFunctions.integerToDecimal(0)) && e.variables.cryptoAddressVar !== n.BuiltinFunctions.nullTextIdentifier()
                                        }, function() {
                                            return e.widgets.get(t.getId("Input_CryptoAddress")).validAttr
                                        }, function() {
                                            return e.widgets.get(t.getId("Input_CryptoAmount")).validAttr
                                        }, function() {
                                            return e.variables.withdrawalAmountVar
                                        }, function() {
                                            return e.variables.cryptoAddressVar
                                        }),
                                        isDefault: !1,
                                        onClick: o(function() {
                                            return Promise.resolve().then(function() {
                                                var s = p.clone();
                                                return d.withdrawOnClick$Action(d.callContext(s))
                                            })
                                        }, "onClick"),
                                        style: "btn btn-primary full-width",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "86"
                                        },
                                        _widgetRecordProvider: i
                                    }, c(u("6Ao5ZgOf5Ue8bHVpXs2IyA#Value", "Withdraw"))))]
                                })
                            },
                            _dependencies: [a(e.variables.finalConvertedAmountVar), a(e.variables.finalCryptoAmountVar), a(e.variables.iframeUrlVar), a(e.widgets.get(t.getId("Input_CryptoAmount")).validAttr), a(e.widgets.get(t.getId("Input_CryptoAddress")).validAttr), a(e.variables.withdrawalFeesInfoVar.valueAttr), a(e.variables.priorityWithdrawalTimerVar), a(e.variables.rateTimerVar), a(e.variables.withdrawalAmountInFiatVar), a(e.variables.withdrawalAmountInCryptoVar), a(e.variables.isWithdrawalPriorityVar), a(e.variables.exchangeRateVar), a(e.variables.currencySwitcherVar), a(e.variables.walletBalanceVar), a(e.variables.withdrawalAmountVar), a(e.variables.cryptoAddressVar), a(e.variables.isPriorityWithdrawalErrorVar), a(e.variables.activeWalletVar.currencyAttr), a(e.variables.activeWalletVar.isCrpytoAttr)]
                        })]
                    })
                },
                _dependencies: [a(e.variables.finalConvertedAmountVar), a(e.variables.finalCryptoAmountVar), a(e.variables.iframeUrlVar), a(e.widgets.get(t.getId("Input_CryptoAmount")).validAttr), a(e.widgets.get(t.getId("Input_CryptoAddress")).validAttr), a(e.variables.withdrawalFeesInfoVar.valueAttr), a(e.variables.priorityWithdrawalTimerVar), a(e.variables.rateTimerVar), a(e.variables.withdrawalAmountInFiatVar), a(e.variables.withdrawalAmountInCryptoVar), a(e.variables.isWithdrawalPriorityVar), a(e.variables.exchangeRateVar), a(e.variables.currencySwitcherVar), a(e.variables.walletBalanceVar), a(e.variables.withdrawalAmountVar), a(e.variables.cryptoAddressVar), a(e.variables.isPriorityWithdrawalErrorVar), a(e.variables.isLoadingVar), a(e.variables.activeWalletVar.currencyAttr), a(e.variables.activeWalletVar.isCrpytoAttr)]
            }))
        }
    };
o(f, "View");
var O = f,
    oe = O;
export {
    oe as
    default
};