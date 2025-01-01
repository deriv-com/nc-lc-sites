import {
    a as H
} from "./_oschunk-K7EK3A2N.js";
import {
    a as N
} from "./_oschunk-7LKZRZXR.js";
import {
    a as T
} from "./_oschunk-4QCIRPK2.js";
import "./_oschunk-6AY6CAR2.js";
import {
    a as I
} from "./_oschunk-QM25DKMW.js";
import "./_oschunk-QIDNIYQN.js";
import "./_oschunk-FJZMBCV5.js";
import "./_oschunk-FRF3DI3V.js";
import "./_oschunk-26LPX23H.js";
import "./_oschunk-QYZYO3AQ.js";
import "./_oschunk-I4HVSXAZ.js";
import {
    a as O
} from "./_oschunk-3DUHVNXP.js";
import {
    b as A
} from "./_oschunk-G7GFWP74.js";
import {
    a as R
} from "./_oschunk-5ETXRNLC.js";
import "./_oschunk-T6VVD72L.js";
import "./_oschunk-O5AQVDN2.js";
import "./_oschunk-4SG3ZAXH.js";
import "./_oschunk-MOYCBUII.js";
import "./_oschunk-NYD6CGWS.js";
import {
    a as E
} from "./_oschunk-ALAP5CBN.js";
import "./_oschunk-QVXOCHAU.js";
import "./_oschunk-EROCOLS7.js";
import {
    a as L,
    b as _,
    c as W,
    d as P,
    e as M,
    h as s,
    j as g,
    p as G,
    r as b,
    s as C,
    t as V,
    v as x,
    y as w
} from "./_oschunk-42NACYKQ.js";
import "./_oschunk-2M7PXTSQ.js";
import {
    a as z,
    g as k,
    i as S
} from "./_oschunk-RKYF3TWC.js";
import "./_oschunk-K7AFM7ZW.js";
import "./_oschunk-DOFMR6EA.js";
import {
    l as U
} from "./_oschunk-2ZI4JQLD.js";
import "./_oschunk-IKZJT3AP.js";
import "./_oschunk-X4K3PA43.js";
import {
    a as f
} from "./_oschunk-MSUVGI3L.js";
import {
    ia as B
} from "./_oschunk-2JKANR6M.js";
import {
    c as o,
    g as j
} from "./_oschunk-DVBKI63I.js";
var r = j(z());
var l = B,
    h = S.PlaceholderContent,
    de = S.IteratorPlaceholderContent,
    y = class y extends k.BaseWebScreen {
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
            return [A, T, I, O, R, E]
        }
        get modelFactory() {
            return H
        }
        get controllerFactory() {
            return N
        }
        get title() {
            let e = this.model,
                d = this.controller,
                t = this.idService,
                u = d.validationService,
                i = d.callContext(),
                m = y.asPrimitiveValue,
                D = y.getTranslation,
                v = this;
            return l.Injector.resolve(l.ServiceNames.TranslationsService).getMessage("oNC6l_wvFkyc0OPiIDVgJA#TitleExpression.-1475808591.1", "Witdrawal")
        }
        internalRender() {
            let e = this.model,
                d = this.controller,
                t = this.idService,
                u = d.validationService,
                i = this.widgetsRecordProvider,
                m = d.callContext(),
                D = y.ifWidget,
                v = y.textWidget,
                a = y.asPrimitiveValue,
                p = y.getTranslation,
                c = this;
            return r.createElement("div", this.getRootNodeProperties(), r.createElement(A, {
                getOwnerSpan: o(function() {
                    return c.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return c.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: o(function(n) {
                        d.handleError(n)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: u
                },
                _idProps: {
                    service: t,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: i,
                placeholders: {
                    content: new h(function() {
                        return [r.createElement(T, {
                            getOwnerSpan: o(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                PageTitle: "Withdraw",
                                IsLoading: e.variables.isLoadingVar
                            },
                            events: {
                                _handleError: o(function(n) {
                                    d.handleError(n)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: u
                            },
                            _idProps: {
                                service: t,
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: i,
                            placeholders: {
                                walletOverlayPageContent: new h(function() {
                                    return [D(e.variables.activeWalletVar.is_cryptoAttr, !1, this, function() {
                                        return [r.createElement(s, {
                                            align: 0,
                                            animate: !1,
                                            style: "display-flex flex-direction-column",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                name: "WithdrawalCryptoContainer"
                                            },
                                            _widgetRecordProvider: i
                                        }, r.createElement(x, {
                                            showPopup: e.variables.isPriorityWithdrawalErrorVar,
                                            style: "popup-dialog",
                                            _idProps: {
                                                service: t,
                                                uuid: "3"
                                            },
                                            _widgetRecordProvider: i
                                        }, r.createElement(s, {
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
                                            image: l.Navigation.VersionedURL.getVersionedUrl("img/tradershub.close.png"),
                                            type: 0,
                                            _idProps: {
                                                service: t,
                                                uuid: "5"
                                            },
                                            _widgetRecordProvider: i
                                        })), r.createElement(s, {
                                            align: 0,
                                            animate: !1,
                                            style: "display-flex justify-content-center align-items flex-direction-column gap-m ",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                name: "ModalContent"
                                            },
                                            _widgetRecordProvider: i
                                        }, r.createElement(s, {
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
                                        }, r.createElement(s, {
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
                                            image: l.Navigation.VersionedURL.getVersionedUrl("img/tradershub.WarningLight.svg"),
                                            type: 0,
                                            _idProps: {
                                                service: t,
                                                uuid: "9"
                                            },
                                            _widgetRecordProvider: i
                                        }))), r.createElement(s, {
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
                                            text: [v(p("lQAljLB5h0KKTAwhWDbz4g#Value", "Priority withdrawal error"))],
                                            _idProps: {
                                                service: t,
                                                uuid: "11"
                                            },
                                            _widgetRecordProvider: i
                                        }), r.createElement(g, {
                                            gridProperties: {
                                                classes: "ThemeGrid_MarginGutter"
                                            },
                                            style: "text-align-center",
                                            value: l.Injector.resolve(l.ServiceNames.TranslationsService).getMessage("O_5iO8gPaE2hZXNv_mMYwQ#ValueExpression.2121957993.1", "The estimated withdrawal fee for ") + e.variables.activeWalletVar.currencyAttr + l.Injector.resolve(l.ServiceNames.TranslationsService).getMessage("O_5iO8gPaE2hZXNv_mMYwQ#ValueExpression.-1958743410.1", " is currently unavailable."),
                                            _idProps: {
                                                service: t,
                                                uuid: "12"
                                            },
                                            _widgetRecordProvider: i
                                        })), r.createElement(s, {
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
                                                var n = m.clone();
                                                d.tryAgainOnClick$Action(d.callContext(n))
                                            }, "onClick"),
                                            style: "btn btn-primary full-width",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "14"
                                            },
                                            _widgetRecordProvider: i
                                        }, v(p("dIH65ztrAkWd92UpQL+J+Q#Value", "Try again")))))), r.createElement(s, {
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
                                            image: l.Navigation.VersionedURL.getVersionedUrl("img/tradershub.WarningLight.svg"),
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
                                            text: [v(p("SJpkKA85T0qI19QaKUediA#Value", "Do not use initial coin offering (ICO) linked addresses. ICO tokens will not be credited to this wallet."))],
                                            _idProps: {
                                                service: t,
                                                uuid: "17"
                                            },
                                            _widgetRecordProvider: i
                                        })), r.createElement(s, {
                                            align: 0,
                                            animate: !1,
                                            style: "margin-top-m",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                name: "WithdrawalCryptoForm"
                                            },
                                            _widgetRecordProvider: i
                                        }, r.createElement(G, {
                                            _validationProps: {
                                                validationService: u
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
                                        }, r.createElement(s, {
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
                                        }, r.createElement(g, {
                                            extendedProperties: {
                                                style: "font-size: 16px;"
                                            },
                                            value: l.Injector.resolve(l.ServiceNames.TranslationsService).getMessage("9yCQmSiljUiCX+SEVZWhsg#ValueExpression.85616173.1", "Your ") + e.variables.activeWalletVar.currencyAttr + " wallet address",
                                            _idProps: {
                                                service: t,
                                                uuid: "22"
                                            },
                                            _widgetRecordProvider: i
                                        })), r.createElement(C, {
                                            _validationProps: {
                                                validationService: u,
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
                                                var n = m.clone();
                                                d.onChangeAddressInput$Action(d.callContext(n))
                                            }, "onChange"),
                                            prompt: l.Injector.resolve(l.ServiceNames.TranslationsService).getMessage("1ccevNF4VkqFvVXMzDuPYQ#ValueExpression.-1759222307.1", "Enter the address"),
                                            style: "form-control",
                                            variable: e.createVariable(l.DataTypes.DataTypes.Text, e.variables.cryptoAddressVar, function(n) {
                                                e.variables.cryptoAddressVar = n
                                            }),
                                            _idProps: {
                                                service: t,
                                                name: "Input_CryptoAddress"
                                            },
                                            _widgetRecordProvider: i
                                        })), r.createElement(s, {
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
                                            text: [v(p("LnY55di0OUipnayWyL6+GA#Value", "Amount"))],
                                            _idProps: {
                                                service: t,
                                                uuid: "26"
                                            },
                                            _widgetRecordProvider: i
                                        })), r.createElement(W, {
                                            _validationProps: {
                                                validationService: u,
                                                validationParentId: t.getId("Form1")
                                            },
                                            enabled: !0,
                                            mandatory: !1,
                                            onChange: o(function() {
                                                var n = m.clone();
                                                d.onChangeAmountInput$Action(d.callContext(n))
                                            }, "onChange"),
                                            style: "margin-y-base",
                                            variable: e.createVariable(l.DataTypes.DataTypes.Decimal, e.variables.withdrawalAmountVar, function(n) {
                                                e.variables.withdrawalAmountVar = n
                                            }),
                                            _idProps: {
                                                service: t,
                                                name: "ButtonGroup"
                                            },
                                            _widgetRecordProvider: i
                                        }, r.createElement(P, {
                                            enabled: !0,
                                            style: "wallets-crypto-amount-btn",
                                            value: new l.DataTypes.Decimal("0.25").times(e.variables.walletBalanceVar),
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                name: "ButtonGroupItem1"
                                            },
                                            _widgetRecordProvider: i
                                        }, "25%"), r.createElement(P, {
                                            enabled: !0,
                                            style: "wallets-crypto-amount-btn margin-left-s",
                                            value: new l.DataTypes.Decimal("0.50").times(e.variables.walletBalanceVar),
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                name: "ButtonGroupItem2"
                                            },
                                            _widgetRecordProvider: i
                                        }, "50%"), r.createElement(P, {
                                            enabled: !0,
                                            style: "wallets-crypto-amount-btn margin-left-s",
                                            value: new l.DataTypes.Decimal("0.75").times(e.variables.walletBalanceVar),
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                name: "ButtonGroupItem3"
                                            },
                                            _widgetRecordProvider: i
                                        }, "75%"), r.createElement(P, {
                                            enabled: !0,
                                            style: "wallets-crypto-amount-btn margin-left-s",
                                            value: new l.DataTypes.Decimal("1.0").times(e.variables.walletBalanceVar),
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                name: "ButtonGroupItem4"
                                            },
                                            _widgetRecordProvider: i
                                        }, "100%")), r.createElement(s, {
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
                                                validationService: u,
                                                validationParentId: t.getId("Form1")
                                            },
                                            enabled: !0,
                                            extendedProperties: {
                                                "data-dirty": "False"
                                            },
                                            gridProperties: {
                                                classes: "OSFillParent"
                                            },
                                            inputType: 2,
                                            mandatory: !1,
                                            maxLength: 0,
                                            onChange: o(function() {
                                                var n = m.clone();
                                                d.onChangeAmountInput$Action(d.callContext(n))
                                            }, "onChange"),
                                            style: "form-control full-height",
                                            variable: e.createVariable(l.DataTypes.DataTypes.Decimal, e.variables.withdrawalAmountVar, function(n) {
                                                e.variables.withdrawalAmountVar = n
                                            }),
                                            _idProps: {
                                                service: t,
                                                name: "Input_CryptoAmount"
                                            },
                                            _widgetRecordProvider: i
                                        }), r.createElement(I, {
                                            getOwnerSpan: o(function() {
                                                return c.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: o(function() {
                                                return c.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                UseNumericInput: !0,
                                                AlwaysShowDecimalDigits: !0,
                                                PrefixText: "",
                                                DecimalDigits: e.getCachedValue(t.getId("IzZ3DujAKkWCrP20dA+E6A.DecimalDigits"), function() {
                                                    return l.BuiltinFunctions.integerToDecimal(e.variables.currencySwitcherVar === e.variables.activeWalletVar.currencyAttr ? e.variables.cryptoFractionalDigitsVar : 2)
                                                }, function() {
                                                    return e.variables.currencySwitcherVar
                                                }, function() {
                                                    return e.variables.activeWalletVar.currencyAttr
                                                }, function() {
                                                    return e.variables.cryptoFractionalDigitsVar
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
                                                _handleError: o(function(n) {
                                                    d.handleError(n)
                                                }, "_handleError")
                                            },
                                            _validationProps: {
                                                validationService: u,
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
                                                validationService: u,
                                                validationParentId: t.getId("Form1")
                                            },
                                            enabled: e.getCachedValue(t.getId("ExchangeRateSwitcher.Enabled"), function() {
                                                return e.variables.exchangeRateVar !== l.BuiltinFunctions.nullIdentifier().toString()
                                            }, function() {
                                                return e.variables.exchangeRateVar
                                            }),
                                            gridProperties: {
                                                classes: "ThemeGrid_MarginGutter"
                                            },
                                            mandatory: !1,
                                            onChange: o(function() {
                                                var n = m.clone();
                                                d.exchangeRateSwitcherOnChange$Action(d.callContext(n))
                                            }, "onChange"),
                                            style: "real-demo-switcher",
                                            variable: e.createVariable(l.DataTypes.DataTypes.Text, e.variables.currencySwitcherVar, function(n) {
                                                e.variables.currencySwitcherVar = n
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
                                        }, r.createElement(g, {
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
                                        }, "USD")))), r.createElement(s, {
                                            align: 0,
                                            animate: !1,
                                            style: "display-flex align-items-center",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                name: "CheckboxContainer"
                                            },
                                            _widgetRecordProvider: i
                                        }, r.createElement(s, {
                                            align: 0,
                                            animate: !1,
                                            style: "margin-right-s",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "40"
                                            },
                                            _widgetRecordProvider: i
                                        }, r.createElement(M, {
                                            _validationProps: {
                                                validationService: u,
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
                                                    var n = m.clone();
                                                    return d.onPriorityCheck$Action(d.callContext(n))
                                                })
                                            }, "onChange"),
                                            style: "checkbox",
                                            variable: e.createVariable(l.DataTypes.DataTypes.Boolean, e.variables.isWithdrawalPriorityVar, function(n) {
                                                e.variables.isWithdrawalPriorityVar = n
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
                                        }, v(p("FaXM_4XOlk6OhP1iW1w0XQ#Value", "Priority withdrawal"))), r.createElement(O, {
                                            getOwnerSpan: o(function() {
                                                return c.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: o(function() {
                                                return c.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                Trigger: f.trigger.onHover,
                                                Position: f.position.top
                                            },
                                            events: {
                                                _handleError: o(function(n) {
                                                    d.handleError(n)
                                                }, "_handleError")
                                            },
                                            _validationProps: {
                                                validationService: u,
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
                                                        image: l.Navigation.VersionedURL.getVersionedUrl("img/tradershub.information.png"),
                                                        type: 0,
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "44"
                                                        },
                                                        _widgetRecordProvider: i
                                                    })]
                                                }),
                                                tooltip: new h(function() {
                                                    return [v(p("wruro+maqUOWBaiIkVpHaQ#Value", "Pay a small fee to prioritise your withdrawal. The fee will be deducted from the withdrawal amount."))]
                                                })
                                            },
                                            _dependencies: []
                                        })), r.createElement(s, {
                                            align: 0,
                                            animate: !0,
                                            style: "display-flex flex-direction-column gap-base margin-y-base",
                                            visible: e.getCachedValue(t.getId("BottomContainer.Visible"), function() {
                                                return U.isDesktop$Action(m).isDesktopOut
                                            }),
                                            _idProps: {
                                                service: t,
                                                name: "BottomContainer"
                                            },
                                            _widgetRecordProvider: i
                                        }, r.createElement(s, {
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
                                            text: [v(p("r+NW8PHyl0GSS_t3scx5MQ#Value", "Withdrawal amount"))],
                                            _idProps: {
                                                service: t,
                                                uuid: "47"
                                            },
                                            _widgetRecordProvider: i
                                        }), r.createElement(s, {
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
                                        }, r.createElement(g, {
                                            style: "margin-right-s",
                                            value: e.getCachedValue(t.getId("9qTMRkqDfU+CGDOa4qec0w.Value"), function() {
                                                return l.BuiltinFunctions.formatDecimal(e.variables.withdrawalAmountInCryptoVar, e.variables.cryptoFractionalDigitsVar, ".", ".") + " " + e.variables.activeWalletVar.currencyAttr + " \u2248 $" + l.BuiltinFunctions.formatDecimal(e.variables.withdrawalAmountInFiatVar, 2, ".", ".") + " (" + e.variables.rateTimerVar.toString() + "s)"
                                            }, function() {
                                                return e.variables.withdrawalAmountInCryptoVar
                                            }, function() {
                                                return e.variables.cryptoFractionalDigitsVar
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
                                        }))), r.createElement(s, {
                                            align: 0,
                                            animate: !0,
                                            style: "display-flex justify-content-space-between",
                                            visible: e.variables.isWithdrawalPriorityVar,
                                            _idProps: {
                                                service: t,
                                                name: "PriorityWithdrawalFee"
                                            },
                                            _widgetRecordProvider: i
                                        }, r.createElement(s, {
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
                                            text: [v(p("tuTJgEOL1UqMyaf19TrtPQ#Value", "Transaction fee"))],
                                            _idProps: {
                                                service: t,
                                                uuid: "52"
                                            },
                                            _widgetRecordProvider: i
                                        }), r.createElement(g, {
                                            gridProperties: {
                                                classes: "ThemeGrid_MarginGutter"
                                            },
                                            value: " (" + e.variables.priorityWithdrawalTimerVar.toString() + "s)",
                                            _idProps: {
                                                service: t,
                                                uuid: "53"
                                            },
                                            _widgetRecordProvider: i
                                        })), r.createElement(s, {
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
                                        }, r.createElement(g, {
                                            style: "margin-right-s",
                                            value: e.getCachedValue(t.getId("srSvmYraHUqHC7lQMVR6EA.Value"), function() {
                                                return "- " + l.BuiltinFunctions.formatDecimal(e.variables.withdrawalFeesInfoVar.valueAttr, e.variables.cryptoFractionalDigitsVar, ",", ".") + " " + e.variables.activeWalletVar.currencyAttr
                                            }, function() {
                                                return e.variables.withdrawalFeesInfoVar.valueAttr
                                            }, function() {
                                                return e.variables.cryptoFractionalDigitsVar
                                            }, function() {
                                                return e.variables.activeWalletVar.currencyAttr
                                            }),
                                            _idProps: {
                                                service: t,
                                                uuid: "55"
                                            },
                                            _widgetRecordProvider: i
                                        }))), r.createElement(s, {
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
                                                return c.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: o(function() {
                                                return c.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                Color: f.color.neutral2,
                                                Space: f.space.small
                                            },
                                            events: {
                                                _handleError: o(function(n) {
                                                    d.handleError(n)
                                                }, "_handleError")
                                            },
                                            _validationProps: {
                                                validationService: u,
                                                validationParentId: t.getId("Form1")
                                            },
                                            _idProps: {
                                                service: t,
                                                uuid: "57",
                                                alias: "5"
                                            },
                                            _widgetRecordProvider: i,
                                            _dependencies: []
                                        })), r.createElement(s, {
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
                                            text: [v(p("OqyRMM3vNE+WRLBjRqTRCw#Value", "Amount received"))],
                                            _idProps: {
                                                service: t,
                                                uuid: "59"
                                            },
                                            _widgetRecordProvider: i
                                        }), r.createElement(s, {
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
                                        }, r.createElement(g, {
                                            style: "margin-right-s",
                                            value: e.getCachedValue(t.getId("OHI9tPGW2ESEe+2jW9pXzA.Value"), function() {
                                                return l.BuiltinFunctions.formatDecimal(e.variables.withdrawalAmountInCryptoVar, e.variables.cryptoFractionalDigitsVar, ".", ".") + " " + e.variables.activeWalletVar.currencyAttr + " \u2248 $" + l.BuiltinFunctions.formatDecimal(e.variables.withdrawalAmountInFiatVar, 2, ",", ".") + " (" + e.variables.rateTimerVar.toString() + "s)"
                                            }, function() {
                                                return e.variables.withdrawalAmountInCryptoVar
                                            }, function() {
                                                return e.variables.cryptoFractionalDigitsVar
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
                                        }))), r.createElement(s, {
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
                                                return e.widgets.get(t.getId("Input_CryptoAddress")).validAttr && e.widgets.get(t.getId("Input_CryptoAmount")).validAttr && !e.variables.withdrawalAmountVar.equals(l.BuiltinFunctions.integerToDecimal(0)) && e.variables.cryptoAddressVar !== l.BuiltinFunctions.nullTextIdentifier()
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
                                                return c.validateWidget(t.getId("Form1")), Promise.resolve().then(function() {
                                                    var n = m.clone();
                                                    return d.withdrawOnClick$Action(d.callContext(n))
                                                })
                                            }, "onClick"),
                                            style: "btn btn-primary",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "63"
                                            },
                                            _widgetRecordProvider: i
                                        }, v(p("6c05wVr2OUSVta1ZRqa7sg#Value", "Withdraw"))))))))]
                                    }, function() {
                                        return [r.createElement(s, {
                                            align: 0,
                                            animate: !1,
                                            style: "full-width",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                name: "IframeContainer"
                                            },
                                            _widgetRecordProvider: i
                                        }, r.createElement(L, {
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
                                    return [r.createElement(s, {
                                        align: 0,
                                        animate: !0,
                                        style: "padding-base",
                                        visible: e.variables.activeWalletVar.is_cryptoAttr && !e.variables.isLoadingVar,
                                        _idProps: {
                                            service: t,
                                            uuid: "66"
                                        },
                                        _widgetRecordProvider: i
                                    }, r.createElement(s, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex flex-direction-column margin-bottom-base",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "BottomContainer2"
                                        },
                                        _widgetRecordProvider: i
                                    }, r.createElement(s, {
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
                                        text: [v(p("dLKRqWf0JUme1oeyQKmHWQ#Value", "Withdrawal amount"))],
                                        _idProps: {
                                            service: t,
                                            uuid: "69"
                                        },
                                        _widgetRecordProvider: i
                                    }), r.createElement(s, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex flex-direction-column align-items-flex-end full-width",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "70"
                                        },
                                        _widgetRecordProvider: i
                                    }, r.createElement(g, {
                                        extendedProperties: {
                                            style: "margin-right: 0px;"
                                        },
                                        style: e.getCachedValue(t.getId("TVR8tnhXckyNVhA+aHpYwg.Style"), function() {
                                            return e.variables.isWithdrawalPriorityVar === !0 ? "font-size-xs" : "font-size-s"
                                        }, function() {
                                            return e.variables.isWithdrawalPriorityVar
                                        }),
                                        value: e.getCachedValue(t.getId("TVR8tnhXckyNVhA+aHpYwg.Value"), function() {
                                            return l.BuiltinFunctions.formatDecimal(e.variables.withdrawalAmountInCryptoVar, e.variables.cryptoFractionalDigitsVar, ".", ".") + " " + e.variables.activeWalletVar.currencyAttr
                                        }, function() {
                                            return e.variables.withdrawalAmountInCryptoVar
                                        }, function() {
                                            return e.variables.cryptoFractionalDigitsVar
                                        }, function() {
                                            return e.variables.activeWalletVar.currencyAttr
                                        }),
                                        _idProps: {
                                            service: t,
                                            uuid: "71"
                                        },
                                        _widgetRecordProvider: i
                                    }), r.createElement(g, {
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
                                            return " \u2248 $" + l.BuiltinFunctions.formatDecimal(e.variables.withdrawalAmountInFiatVar, 2, ".", ".") + " (" + e.variables.rateTimerVar.toString() + "s)"
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
                                    }))), r.createElement(s, {
                                        align: 0,
                                        animate: !0,
                                        style: "display-flex justify-content-space-between",
                                        visible: e.variables.isWithdrawalPriorityVar,
                                        _idProps: {
                                            service: t,
                                            name: "PriorityWithdrawalFee2"
                                        },
                                        _widgetRecordProvider: i
                                    }, r.createElement(s, {
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
                                        text: [v(p("qRVk1RpdMEaNn8aPR_vViw#Value", "Transaction fee"))],
                                        _idProps: {
                                            service: t,
                                            uuid: "75"
                                        },
                                        _widgetRecordProvider: i
                                    }), r.createElement(g, {
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
                                    })), r.createElement(s, {
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
                                    }, r.createElement(g, {
                                        extendedProperties: {
                                            style: "font-size: 12px;"
                                        },
                                        value: e.getCachedValue(t.getId("nO+AXZEqLUGSUj+CAvzvgw.Value"), function() {
                                            return "- " + l.BuiltinFunctions.formatDecimal(e.variables.withdrawalFeesInfoVar.valueAttr, e.variables.cryptoFractionalDigitsVar, ".", ".") + " " + e.variables.activeWalletVar.currencyAttr
                                        }, function() {
                                            return e.variables.withdrawalFeesInfoVar.valueAttr
                                        }, function() {
                                            return e.variables.cryptoFractionalDigitsVar
                                        }, function() {
                                            return e.variables.activeWalletVar.currencyAttr
                                        }),
                                        _idProps: {
                                            service: t,
                                            uuid: "78"
                                        },
                                        _widgetRecordProvider: i
                                    }))), r.createElement(s, {
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
                                            return c.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: o(function() {
                                            return c.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            Space: f.space.small,
                                            Color: f.color.neutral2
                                        },
                                        events: {
                                            _handleError: o(function(n) {
                                                d.handleError(n)
                                            }, "_handleError")
                                        },
                                        _validationProps: {
                                            validationService: u
                                        },
                                        _idProps: {
                                            service: t,
                                            uuid: "80",
                                            alias: "6"
                                        },
                                        _widgetRecordProvider: i,
                                        _dependencies: []
                                    })), r.createElement(s, {
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
                                        text: [v(p("tK2qb8pF4kua37YyP9_8dQ#Value", "Amount received"))],
                                        _idProps: {
                                            service: t,
                                            uuid: "82"
                                        },
                                        _widgetRecordProvider: i
                                    }), r.createElement(s, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex flex-direction-column align-items-flex-end full-width",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "83"
                                        },
                                        _widgetRecordProvider: i
                                    }, r.createElement(g, {
                                        gridProperties: {
                                            marginLeft: "0px"
                                        },
                                        style: "margin-right-s",
                                        value: e.getCachedValue(t.getId("6VU5jjHWwEG9Te1FvME5bw.Value"), function() {
                                            return l.BuiltinFunctions.formatDecimal(e.variables.finalCryptoAmountVar, e.variables.cryptoFractionalDigitsVar, ".", ".") + " " + e.variables.activeWalletVar.currencyAttr
                                        }, function() {
                                            return e.variables.finalCryptoAmountVar
                                        }, function() {
                                            return e.variables.cryptoFractionalDigitsVar
                                        }, function() {
                                            return e.variables.activeWalletVar.currencyAttr
                                        }),
                                        _idProps: {
                                            service: t,
                                            uuid: "84"
                                        },
                                        _widgetRecordProvider: i
                                    }), r.createElement(g, {
                                        extendedProperties: {
                                            style: "font-size: 12px;"
                                        },
                                        gridProperties: {
                                            marginLeft: "0px"
                                        },
                                        value: e.getCachedValue(t.getId("T819qEVP+U6_CWXkxpLb3g.Value"), function() {
                                            return "\u2248 $" + l.BuiltinFunctions.formatDecimal(e.variables.finalConvertedAmountVar, 2, ",", ".") + " (" + e.variables.rateTimerVar.toString() + "s)"
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
                                    })))), r.createElement(E, {
                                        getOwnerSpan: o(function() {
                                            return c.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: o(function() {
                                            return c.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            ExtendedClass: "full-width",
                                            IsLoading: e.variables.isButtonLoadingVar
                                        },
                                        events: {
                                            _handleError: o(function(n) {
                                                d.handleError(n)
                                            }, "_handleError")
                                        },
                                        _validationProps: {
                                            validationService: u
                                        },
                                        _idProps: {
                                            service: t,
                                            uuid: "86",
                                            alias: "7"
                                        },
                                        _widgetRecordProvider: i,
                                        placeholders: {
                                            button: new h(function() {
                                                return [r.createElement(_, {
                                                    enabled: e.getCachedValue(t.getId("rmx3h1Dk6kS_VEvUVtPYxg.Enabled"), function() {
                                                        return e.widgets.get(t.getId("Input_CryptoAddress")).validAttr && e.widgets.get(t.getId("Input_CryptoAmount")).validAttr && !e.variables.withdrawalAmountVar.equals(l.BuiltinFunctions.integerToDecimal(0)) && e.variables.cryptoAddressVar !== l.BuiltinFunctions.nullTextIdentifier()
                                                    }, function() {
                                                        return e.widgets.get(t.getId("Input_CryptoAddress")).validAttr
                                                    }, function() {
                                                        return e.widgets.get(t.getId("Input_CryptoAmount")).validAttr
                                                    }, function() {
                                                        return e.variables.withdrawalAmountVar
                                                    }, function() {
                                                        return e.variables.cryptoAddressVar
                                                    }),
                                                    gridProperties: {
                                                        classes: "OSFillParent"
                                                    },
                                                    isDefault: !1,
                                                    onClick: o(function() {
                                                        return Promise.resolve().then(function() {
                                                            var n = m.clone();
                                                            return d.withdrawOnClick$Action(d.callContext(n))
                                                        })
                                                    }, "onClick"),
                                                    style: "btn btn-primary",
                                                    visible: !0,
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "87"
                                                    },
                                                    _widgetRecordProvider: i
                                                }, r.createElement(s, {
                                                    align: 0,
                                                    animate: !1,
                                                    style: "osui-btn-loading__spinner-animation",
                                                    visible: !0,
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "88"
                                                    },
                                                    _widgetRecordProvider: i
                                                }), "Withdraw")]
                                            })
                                        },
                                        _dependencies: [a(e.variables.cryptoAddressVar), a(e.variables.withdrawalAmountVar), a(e.widgets.get(t.getId("Input_CryptoAmount")).validAttr), a(e.widgets.get(t.getId("Input_CryptoAddress")).validAttr)]
                                    }))]
                                })
                            },
                            _dependencies: [a(e.variables.isButtonLoadingVar), a(e.variables.finalConvertedAmountVar), a(e.variables.finalCryptoAmountVar), a(e.variables.isLoadingVar), a(e.variables.iframeUrlVar), a(e.widgets.get(t.getId("Input_CryptoAmount")).validAttr), a(e.widgets.get(t.getId("Input_CryptoAddress")).validAttr), a(e.variables.withdrawalFeesInfoVar.valueAttr), a(e.variables.priorityWithdrawalTimerVar), a(e.variables.rateTimerVar), a(e.variables.withdrawalAmountInFiatVar), a(e.variables.withdrawalAmountInCryptoVar), a(e.variables.isWithdrawalPriorityVar), a(e.variables.exchangeRateVar), a(e.variables.cryptoFractionalDigitsVar), a(e.variables.currencySwitcherVar), a(e.variables.walletBalanceVar), a(e.variables.withdrawalAmountVar), a(e.variables.cryptoAddressVar), a(e.variables.isPriorityWithdrawalErrorVar), a(e.variables.activeWalletVar.currencyAttr), a(e.variables.activeWalletVar.is_cryptoAttr)]
                        })]
                    })
                },
                _dependencies: [a(e.variables.isButtonLoadingVar), a(e.variables.finalConvertedAmountVar), a(e.variables.finalCryptoAmountVar), a(e.variables.iframeUrlVar), a(e.widgets.get(t.getId("Input_CryptoAmount")).validAttr), a(e.widgets.get(t.getId("Input_CryptoAddress")).validAttr), a(e.variables.withdrawalFeesInfoVar.valueAttr), a(e.variables.priorityWithdrawalTimerVar), a(e.variables.rateTimerVar), a(e.variables.withdrawalAmountInFiatVar), a(e.variables.withdrawalAmountInCryptoVar), a(e.variables.isWithdrawalPriorityVar), a(e.variables.exchangeRateVar), a(e.variables.cryptoFractionalDigitsVar), a(e.variables.currencySwitcherVar), a(e.variables.walletBalanceVar), a(e.variables.withdrawalAmountVar), a(e.variables.cryptoAddressVar), a(e.variables.isPriorityWithdrawalErrorVar), a(e.variables.activeWalletVar.currencyAttr), a(e.variables.activeWalletVar.is_cryptoAttr), a(e.variables.isLoadingVar)]
            }), r.createElement(x, {
                showPopup: e.variables.isTransactionLimitModalOpenVar,
                style: "popup-dialog",
                _idProps: {
                    service: t,
                    uuid: "89"
                },
                _widgetRecordProvider: i
            }, r.createElement(s, {
                align: 0,
                animate: !1,
                style: "popup-wrapper",
                visible: !0,
                _idProps: {
                    service: t,
                    name: "ModalWrapper"
                },
                _widgetRecordProvider: i
            }, r.createElement(s, {
                align: 0,
                animate: !1,
                style: "popup-title",
                visible: !0,
                _idProps: {
                    service: t,
                    name: "HeaderContainer"
                },
                _widgetRecordProvider: i
            }, r.createElement(_, {
                enabled: !0,
                extendedProperties: {
                    style: "background-color: unset; border-width: 0px;"
                },
                isDefault: !1,
                onClick: o(function() {
                    var n = m.clone();
                    d.closeTransactionLimitModal$Action(d.callContext(n))
                }, "onClick"),
                style: '"btn"',
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "92"
                },
                _widgetRecordProvider: i
            }, r.createElement(b, {
                image: l.Navigation.VersionedURL.getVersionedUrl("img/tradershub.close.png"),
                type: 0,
                _idProps: {
                    service: t,
                    uuid: "93"
                },
                _widgetRecordProvider: i
            }))), r.createElement(s, {
                align: 0,
                animate: !1,
                style: "popup-info",
                visible: !0,
                _idProps: {
                    service: t,
                    name: "ContentContainer"
                },
                _widgetRecordProvider: i
            }, r.createElement(b, {
                gridProperties: {
                    width: "128px"
                },
                image: l.Navigation.VersionedURL.getVersionedUrl("img/tradershub.usererror.svg"),
                type: 0,
                _idProps: {
                    service: t,
                    uuid: "95"
                },
                _widgetRecordProvider: i
            }), r.createElement(s, {
                align: 0,
                animate: !1,
                style: "text-align-center display-flex flex-direction-column",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "96"
                },
                _widgetRecordProvider: i
            }, r.createElement(w, {
                extendedProperties: {
                    style: "font-size: 18px; font-weight: bold;"
                },
                text: ["Transaction limit reached"],
                _idProps: {
                    service: t,
                    uuid: "97"
                },
                _widgetRecordProvider: i
            }), " Extend your transaction limit by verifying your account.")), r.createElement(s, {
                align: 0,
                animate: !1,
                style: "full-width popup-footer",
                visible: !0,
                _idProps: {
                    service: t,
                    name: "FooterContainer"
                },
                _widgetRecordProvider: i
            }, r.createElement(_, {
                enabled: !0,
                isDefault: !1,
                onClick: o(function() {
                    var n = m.clone();
                    d.closeTransactionLimitModal$Action(d.callContext(n))
                }, "onClick"),
                style: "btn btn-primary full-width",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "99"
                },
                _widgetRecordProvider: i
            }, "Verify Account")))))
        }
    };
o(y, "View");
var F = y,
    ce = F;
export {
    ce as
    default
};