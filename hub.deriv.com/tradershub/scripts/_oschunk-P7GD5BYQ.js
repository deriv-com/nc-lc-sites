import {
    a as M
} from "./_oschunk-F74JB3ZC.js";
import {
    a as G
} from "./_oschunk-EGBB6ZOU.js";
import "./_oschunk-RFENF4ST.js";
import {
    a as A
} from "./_oschunk-6DQPODKZ.js";
import "./_oschunk-Z23XQ5V7.js";
import {
    a as x
} from "./_oschunk-IWEUGVST.js";
import "./_oschunk-3EM3HOK7.js";
import "./_oschunk-KE67QEAX.js";
import "./_oschunk-UK73WSZT.js";
import "./_oschunk-XGQAZLYY.js";
import "./_oschunk-GDCJSJP3.js";
import {
    a as _
} from "./_oschunk-XFSPMJPV.js";
import {
    a as V
} from "./_oschunk-CJZXGA6I.js";
import {
    a as C
} from "./_oschunk-RRERX77H.js";
import "./_oschunk-MZYHHGAU.js";
import "./_oschunk-MDH7HMYN.js";
import "./_oschunk-HBEXL7KK.js";
import "./_oschunk-NJYKWZYU.js";
import "./_oschunk-SW7FWAXZ.js";
import "./_oschunk-BHZNFATE.js";
import {
    a as F,
    b,
    c as W,
    d as f,
    e as B,
    h as l,
    j as c,
    p as U,
    r as y,
    s as S,
    t as h,
    v as k,
    y as m
} from "./_oschunk-HUOHOHZB.js";
import "./_oschunk-Y45M2O2K.js";
import {
    a as H,
    g as D,
    i as R
} from "./_oschunk-6LASTRK7.js";
import "./_oschunk-TIJZDWYD.js";
import "./_oschunk-27GDEXUT.js";
import {
    a as T
} from "./_oschunk-D2MH3QEK.js";
import "./_oschunk-WJ75ZXAT.js";
import "./_oschunk-3WNR72F6.js";
import "./_oschunk-X4K3PA43.js";
import {
    a as w
} from "./_oschunk-HQOLQB4T.js";
import {
    ia as O
} from "./_oschunk-NTQBNJ73.js";
import {
    c as o,
    g as L
} from "./_oschunk-DVBKI63I.js";
var r = L(H());
var s = O,
    P = R.PlaceholderContent,
    se = R.IteratorPlaceholderContent,
    p = class p extends D.BaseWebScreen {
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
            return [C, A, x, V, _]
        }
        get modelFactory() {
            return M
        }
        get controllerFactory() {
            return G
        }
        get title() {
            let e = this.model,
                d = this.controller,
                t = this.idService,
                u = d.validationService,
                i = d.callContext(),
                g = p.asPrimitiveValue,
                I = p.getTranslation,
                z = this;
            return "Witdrawal"
        }
        internalRender() {
            let e = this.model,
                d = this.controller,
                t = this.idService,
                u = d.validationService,
                i = this.widgetsRecordProvider,
                g = d.callContext(),
                I = p.ifWidget,
                z = p.textWidget,
                a = p.asPrimitiveValue,
                j = p.getTranslation,
                v = this;
            return r.createElement("div", this.getRootNodeProperties(), r.createElement(C, {
                getOwnerSpan: o(function() {
                    return v.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return v.getChildSpan("destroy")
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
                    content: new P(function() {
                        return [r.createElement(A, {
                            getOwnerSpan: o(function() {
                                return v.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return v.getChildSpan("destroy")
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
                                walletOverlayPageContent: new P(function() {
                                    return [I(e.variables.activeWalletVar.isCrpytoAttr, !1, this, function() {
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
                                        }, r.createElement(k, {
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
                                        }, r.createElement(y, {
                                            image: s.Navigation.VersionedURL.getVersionedUrl("img/tradershub.close.png"),
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
                                        }, r.createElement(y, {
                                            gridProperties: {
                                                classes: "ThemeGrid_Width1"
                                            },
                                            image: s.Navigation.VersionedURL.getVersionedUrl("img/tradershub.WarningLight.svg"),
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
                                        }, r.createElement(m, {
                                            style: "font-size-h6 font-bold",
                                            text: ["Priority withdrawal error"],
                                            _idProps: {
                                                service: t,
                                                uuid: "11"
                                            },
                                            _widgetRecordProvider: i
                                        }), r.createElement(c, {
                                            gridProperties: {
                                                classes: "ThemeGrid_MarginGutter"
                                            },
                                            style: "text-align-center",
                                            value: "The estimated withdrawal fee for " + e.variables.activeWalletVar.currencyAttr + " is currently unavailable.",
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
                                        }, r.createElement(b, {
                                            enabled: !0,
                                            isDefault: !1,
                                            onClick: o(function() {
                                                var n = g.clone();
                                                d.tryAgainOnClick$Action(d.callContext(n))
                                            }, "onClick"),
                                            style: "btn btn-primary full-width",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "14"
                                            },
                                            _widgetRecordProvider: i
                                        }, "Try again")))), r.createElement(l, {
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
                                        }, r.createElement(y, {
                                            gridProperties: {
                                                width: "24px"
                                            },
                                            image: s.Navigation.VersionedURL.getVersionedUrl("img/tradershub.WarningLight.svg"),
                                            type: 0,
                                            _idProps: {
                                                service: t,
                                                uuid: "16"
                                            },
                                            _widgetRecordProvider: i
                                        }), r.createElement(m, {
                                            extendedProperties: {
                                                style: "font-size: 12px;"
                                            },
                                            text: ["Do not use initial coin offering (ICO) linked addresses. ICO tokens will not be credited to this wallet."],
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
                                        }, r.createElement(U, {
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
                                        }, r.createElement(l, {
                                            align: 0,
                                            animate: !1,
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                name: "CryptoAddressContainer"
                                            },
                                            _widgetRecordProvider: i
                                        }, r.createElement(h, {
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
                                        }, r.createElement(c, {
                                            extendedProperties: {
                                                style: "font-size: 16px;"
                                            },
                                            value: "Your " + e.variables.activeWalletVar.currencyAttr + " wallet address",
                                            _idProps: {
                                                service: t,
                                                uuid: "22"
                                            },
                                            _widgetRecordProvider: i
                                        })), r.createElement(S, {
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
                                                var n = g.clone();
                                                d.onChangeAddressInput$Action(d.callContext(n))
                                            }, "onChange"),
                                            prompt: "Enter the address",
                                            style: "form-control",
                                            variable: e.createVariable(s.DataTypes.DataTypes.Text, e.variables.cryptoAddressVar, function(n) {
                                                e.variables.cryptoAddressVar = n
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
                                        }, r.createElement(h, {
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
                                        }, r.createElement(m, {
                                            extendedProperties: {
                                                style: "font-size: 16px;"
                                            },
                                            text: ["Amount"],
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
                                                var n = g.clone();
                                                d.onChangeAmountInput$Action(d.callContext(n))
                                            }, "onChange"),
                                            style: "margin-y-base",
                                            variable: e.createVariable(s.DataTypes.DataTypes.Decimal, e.variables.withdrawalAmountVar, function(n) {
                                                e.variables.withdrawalAmountVar = n
                                            }),
                                            _idProps: {
                                                service: t,
                                                name: "ButtonGroup"
                                            },
                                            _widgetRecordProvider: i
                                        }, r.createElement(f, {
                                            enabled: !0,
                                            style: "wallets-crypto-amount-btn",
                                            value: new s.DataTypes.Decimal("0.25").times(e.variables.activeWalletVar.balanceAttr),
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                name: "ButtonGroupItem1"
                                            },
                                            _widgetRecordProvider: i
                                        }, "25%"), r.createElement(f, {
                                            enabled: !0,
                                            style: "wallets-crypto-amount-btn margin-left-s",
                                            value: new s.DataTypes.Decimal("0.50").times(e.variables.activeWalletVar.balanceAttr),
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                name: "ButtonGroupItem2"
                                            },
                                            _widgetRecordProvider: i
                                        }, "50%"), r.createElement(f, {
                                            enabled: !0,
                                            style: "wallets-crypto-amount-btn margin-left-s",
                                            value: new s.DataTypes.Decimal("0.75").times(e.variables.activeWalletVar.balanceAttr),
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                name: "ButtonGroupItem3"
                                            },
                                            _widgetRecordProvider: i
                                        }, "75%"), r.createElement(f, {
                                            enabled: !0,
                                            style: "wallets-crypto-amount-btn margin-left-s",
                                            value: new s.DataTypes.Decimal("1.0").times(e.variables.activeWalletVar.balanceAttr),
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
                                        }, r.createElement(S, {
                                            _validationProps: {
                                                validationService: u,
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
                                                var n = g.clone();
                                                d.onChangeAmountInput$Action(d.callContext(n))
                                            }, "onChange"),
                                            style: "form-control full-height",
                                            variable: e.createVariable(s.DataTypes.DataTypes.Decimal, e.variables.withdrawalAmountVar, function(n) {
                                                e.variables.withdrawalAmountVar = n
                                            }),
                                            _idProps: {
                                                service: t,
                                                name: "Input_CryptoAmount"
                                            },
                                            _widgetRecordProvider: i
                                        }), r.createElement(x, {
                                            getOwnerSpan: o(function() {
                                                return v.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: o(function() {
                                                return v.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                UseNumericInput: !0,
                                                AlwaysShowDecimalDigits: !0,
                                                PrefixText: "",
                                                DecimalDigits: e.getCachedValue(t.getId("IzZ3DujAKkWCrP20dA+E6A.DecimalDigits"), function() {
                                                    return s.BuiltinFunctions.integerToDecimal(e.variables.currencySwitcherVar === e.variables.activeWalletVar.currencyAttr ? 8 : 2)
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
                                                return e.variables.exchangeRateVar !== s.BuiltinFunctions.nullIdentifier().toString()
                                            }, function() {
                                                return e.variables.exchangeRateVar
                                            }),
                                            gridProperties: {
                                                classes: "ThemeGrid_MarginGutter"
                                            },
                                            mandatory: !1,
                                            onChange: o(function() {
                                                var n = g.clone();
                                                d.exchangeRateSwitcherOnChange$Action(d.callContext(n))
                                            }, "onChange"),
                                            style: "real-demo-switcher",
                                            variable: e.createVariable(s.DataTypes.DataTypes.Text, e.variables.currencySwitcherVar, function(n) {
                                                e.variables.currencySwitcherVar = n
                                            }),
                                            _idProps: {
                                                service: t,
                                                name: "ExchangeRateSwitcher"
                                            },
                                            _widgetRecordProvider: i
                                        }, r.createElement(f, {
                                            enabled: !0,
                                            style: "real-demo-switcher-item",
                                            value: e.variables.activeWalletVar.currencyAttr,
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                name: "CryptoSwithcer"
                                            },
                                            _widgetRecordProvider: i
                                        }, r.createElement(c, {
                                            value: e.variables.activeWalletVar.currencyAttr,
                                            _idProps: {
                                                service: t,
                                                uuid: "37"
                                            },
                                            _widgetRecordProvider: i
                                        })), r.createElement(f, {
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
                                        }, r.createElement(B, {
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
                                                    var n = g.clone();
                                                    return d.onPriorityCheck$Action(d.callContext(n))
                                                })
                                            }, "onChange"),
                                            style: "checkbox",
                                            variable: e.createVariable(s.DataTypes.DataTypes.Boolean, e.variables.isWithdrawalPriorityVar, function(n) {
                                                e.variables.isWithdrawalPriorityVar = n
                                            }),
                                            _idProps: {
                                                service: t,
                                                name: "Checkbox1"
                                            },
                                            _widgetRecordProvider: i
                                        })), r.createElement(h, {
                                            gridProperties: {
                                                classes: "OSFillParent"
                                            },
                                            style: "margin-right-s",
                                            _idProps: {
                                                service: t,
                                                uuid: "42"
                                            },
                                            _widgetRecordProvider: i
                                        }, "Priority withdrawal"), r.createElement(V, {
                                            getOwnerSpan: o(function() {
                                                return v.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: o(function() {
                                                return v.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                Trigger: w.trigger.onHover,
                                                Position: w.position.top
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
                                                content: new P(function() {
                                                    return [r.createElement(y, {
                                                        gridProperties: {
                                                            width: "14px"
                                                        },
                                                        image: s.Navigation.VersionedURL.getVersionedUrl("img/tradershub.information.png"),
                                                        type: 0,
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "44"
                                                        },
                                                        _widgetRecordProvider: i
                                                    })]
                                                }),
                                                tooltip: new P(function() {
                                                    return ["Pay a small fee to prioritise your withdrawal. The fee will be deducted from the withdrawal amount."]
                                                })
                                            },
                                            _dependencies: []
                                        })), r.createElement(l, {
                                            align: 0,
                                            animate: !0,
                                            style: "display-flex flex-direction-column gap-base margin-y-base",
                                            visible: e.getCachedValue(t.getId("BottomContainer.Visible"), function() {
                                                return T.isDesktop$Action(g).isDesktopOut
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
                                        }, r.createElement(m, {
                                            style: "text-neutral-8 full-width",
                                            text: ["Withdrawal amount"],
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
                                        }, r.createElement(c, {
                                            style: "margin-right-s",
                                            value: e.getCachedValue(t.getId("9qTMRkqDfU+CGDOa4qec0w.Value"), function() {
                                                return s.BuiltinFunctions.formatDecimal(e.variables.withdrawalAmountInCryptoVar, 8, ".", ".") + " " + e.variables.activeWalletVar.currencyAttr + " \u2248 $" + s.BuiltinFunctions.formatDecimal(e.variables.withdrawalAmountInFiatVar, 2, ".", ".") + " (" + e.variables.rateTimerVar.toString() + "s)"
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
                                        }, r.createElement(m, {
                                            style: "text-neutral-8",
                                            text: ["Transaction fee"],
                                            _idProps: {
                                                service: t,
                                                uuid: "52"
                                            },
                                            _widgetRecordProvider: i
                                        }), r.createElement(c, {
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
                                        }, r.createElement(c, {
                                            style: "margin-right-s",
                                            value: e.getCachedValue(t.getId("srSvmYraHUqHC7lQMVR6EA.Value"), function() {
                                                return "- " + s.BuiltinFunctions.formatDecimal(e.variables.deserializePriorityWithdrawalInfoVar.valueAttr, 8, ",", ".") + " " + e.variables.activeWalletVar.currencyAttr
                                            }, function() {
                                                return e.variables.deserializePriorityWithdrawalInfoVar.valueAttr
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
                                        }, r.createElement(_, {
                                            getOwnerSpan: o(function() {
                                                return v.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: o(function() {
                                                return v.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                Color: w.color.neutral2,
                                                Space: w.space.small
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
                                        }, r.createElement(m, {
                                            style: "text-neutral-8 full-width",
                                            text: ["Amount received"],
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
                                        }, r.createElement(c, {
                                            style: "margin-right-s",
                                            value: e.getCachedValue(t.getId("OHI9tPGW2ESEe+2jW9pXzA.Value"), function() {
                                                return s.BuiltinFunctions.formatDecimal(e.variables.withdrawalAmountInCryptoVar, 8, ".", ".") + " " + e.variables.activeWalletVar.currencyAttr + " \u2248 $" + s.BuiltinFunctions.formatDecimal(e.variables.withdrawalAmountInFiatVar, 2, ",", ".") + " (" + e.variables.rateTimerVar.toString() + "s)"
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
                                        }, r.createElement(b, {
                                            enabled: e.getCachedValue(t.getId("TbUHtV+5ZUGHfWAHw9w8YQ.Enabled"), function() {
                                                return e.widgets.get(t.getId("Input_CryptoAddress")).validAttr && e.widgets.get(t.getId("Input_CryptoAmount")).validAttr && !e.variables.withdrawalAmountVar.equals(s.BuiltinFunctions.integerToDecimal(0)) && e.variables.cryptoAddressVar !== s.BuiltinFunctions.nullTextIdentifier()
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
                                                return v.validateWidget(t.getId("Form1")), Promise.resolve().then(function() {
                                                    var n = g.clone();
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
                                        }, "Withdraw"))))))]
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
                                        }, r.createElement(F, {
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
                                mobileFooterContent: new P(function() {
                                    return [r.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "border-top: 1px solid var(--color-neutral-3);"
                                        },
                                        style: "padding-base background-neutral-0",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "66"
                                        },
                                        _widgetRecordProvider: i
                                    }, r.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex flex-direction-column gap- margin-bottom-base",
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
                                    }, r.createElement(m, {
                                        style: e.getCachedValue(t.getId("IjKVD0JsykyUrHSmpLRZxw.Style"), function() {
                                            return "text-neutral-8 full-width " + (e.variables.isWithdrawalPriorityVar ? "font-size-xs" : "font-size-s")
                                        }, function() {
                                            return e.variables.isWithdrawalPriorityVar
                                        }),
                                        text: ["Withdrawal amount"],
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
                                    }, r.createElement(c, {
                                        extendedProperties: {
                                            style: "margin-right: 0px;"
                                        },
                                        style: e.getCachedValue(t.getId("KVdeA+yLoUyi98IMj_VS8w.Style"), function() {
                                            return e.variables.isWithdrawalPriorityVar === !0 ? "font-size-xs" : "font-size-s"
                                        }, function() {
                                            return e.variables.isWithdrawalPriorityVar
                                        }),
                                        value: e.getCachedValue(t.getId("KVdeA+yLoUyi98IMj_VS8w.Value"), function() {
                                            return s.BuiltinFunctions.formatDecimal(e.variables.withdrawalAmountInCryptoVar, 8, ".", ".") + " " + e.variables.activeWalletVar.currencyAttr
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
                                    }), r.createElement(c, {
                                        extendedProperties: {
                                            style: "font-size: 12px;"
                                        },
                                        gridProperties: {
                                            classes: "ThemeGrid_MarginGutter"
                                        },
                                        style: e.getCachedValue(t.getId("4tmEVDfe3k+ZzMXE3dC0Sw.Style"), function() {
                                            return e.variables.isWithdrawalPriorityVar === !0 ? "display-none" : "display-block"
                                        }, function() {
                                            return e.variables.isWithdrawalPriorityVar
                                        }),
                                        value: e.getCachedValue(t.getId("4tmEVDfe3k+ZzMXE3dC0Sw.Value"), function() {
                                            return " \u2248 $" + s.BuiltinFunctions.formatDecimal(e.variables.withdrawalAmountInFiatVar, 2, ".", ".") + " (" + e.variables.rateTimerVar.toString() + "s)"
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
                                    }, r.createElement(m, {
                                        extendedProperties: {
                                            style: "font-size: 12px;"
                                        },
                                        style: "text-neutral-8",
                                        text: ["Transaction fee"],
                                        _idProps: {
                                            service: t,
                                            uuid: "75"
                                        },
                                        _widgetRecordProvider: i
                                    }), r.createElement(c, {
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
                                    }, r.createElement(c, {
                                        extendedProperties: {
                                            style: "font-size: 12px;"
                                        },
                                        value: e.getCachedValue(t.getId("dw37671EIUKzqCcVazMrTg.Value"), function() {
                                            return "- " + s.BuiltinFunctions.formatDecimal(e.variables.deserializePriorityWithdrawalInfoVar.valueAttr, 8, ".", ".") + " " + e.variables.activeWalletVar.currencyAttr
                                        }, function() {
                                            return e.variables.deserializePriorityWithdrawalInfoVar.valueAttr
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
                                    }, r.createElement(_, {
                                        getOwnerSpan: o(function() {
                                            return v.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: o(function() {
                                            return v.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            Space: w.space.small,
                                            Color: w.color.neutral2
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
                                    }, r.createElement(m, {
                                        style: "text-neutral-8 full-width",
                                        text: ["Amount received"],
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
                                    }, r.createElement(c, {
                                        gridProperties: {
                                            marginLeft: "0px"
                                        },
                                        style: "margin-right-s",
                                        value: e.getCachedValue(t.getId("LpGt9tMAQEWAQ9McUC3PFA.Value"), function() {
                                            return s.BuiltinFunctions.formatDecimal(e.variables.finalCryptoAmountVar, 8, ".", ".") + " " + e.variables.activeWalletVar.currencyAttr
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
                                    }), r.createElement(c, {
                                        extendedProperties: {
                                            style: "font-size: 12px;"
                                        },
                                        gridProperties: {
                                            marginLeft: "0px"
                                        },
                                        value: e.getCachedValue(t.getId("i6DAf1nD7UmPFnMZE40Huw.Value"), function() {
                                            return "\u2248 $" + s.BuiltinFunctions.formatDecimal(e.variables.finalConvertedAmountVar, 2, ".", ".") + " (" + e.variables.rateTimerVar.toString() + "s)"
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
                                    })))), r.createElement(b, {
                                        enabled: e.getCachedValue(t.getId("6umDgojwqEmJOA_S2bj7Hw.Enabled"), function() {
                                            return e.widgets.get(t.getId("Input_CryptoAddress")).validAttr && e.widgets.get(t.getId("Input_CryptoAmount")).validAttr && !e.variables.withdrawalAmountVar.equals(s.BuiltinFunctions.integerToDecimal(0)) && e.variables.cryptoAddressVar !== s.BuiltinFunctions.nullTextIdentifier()
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
                                                var n = g.clone();
                                                return d.withdrawOnClick$Action(d.callContext(n))
                                            })
                                        }, "onClick"),
                                        style: "btn btn-primary full-width",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "86"
                                        },
                                        _widgetRecordProvider: i
                                    }, "Withdraw"))]
                                })
                            },
                            _dependencies: [a(e.variables.finalConvertedAmountVar), a(e.variables.finalCryptoAmountVar), a(e.variables.iframeUrlVar), a(e.widgets.get(t.getId("Input_CryptoAmount")).validAttr), a(e.widgets.get(t.getId("Input_CryptoAddress")).validAttr), a(e.variables.deserializePriorityWithdrawalInfoVar.valueAttr), a(e.variables.priorityWithdrawalTimerVar), a(e.variables.rateTimerVar), a(e.variables.withdrawalAmountInFiatVar), a(e.variables.withdrawalAmountInCryptoVar), a(e.variables.isWithdrawalPriorityVar), a(e.variables.exchangeRateVar), a(e.variables.currencySwitcherVar), a(e.variables.withdrawalAmountVar), a(e.variables.cryptoAddressVar), a(e.variables.isPriorityWithdrawalErrorVar), a(e.variables.activeWalletVar.balanceAttr), a(e.variables.activeWalletVar.currencyAttr), a(e.variables.activeWalletVar.isCrpytoAttr)]
                        })]
                    })
                },
                _dependencies: [a(e.variables.finalConvertedAmountVar), a(e.variables.finalCryptoAmountVar), a(e.variables.iframeUrlVar), a(e.widgets.get(t.getId("Input_CryptoAmount")).validAttr), a(e.widgets.get(t.getId("Input_CryptoAddress")).validAttr), a(e.variables.deserializePriorityWithdrawalInfoVar.valueAttr), a(e.variables.priorityWithdrawalTimerVar), a(e.variables.rateTimerVar), a(e.variables.withdrawalAmountInFiatVar), a(e.variables.withdrawalAmountInCryptoVar), a(e.variables.isWithdrawalPriorityVar), a(e.variables.exchangeRateVar), a(e.variables.currencySwitcherVar), a(e.variables.withdrawalAmountVar), a(e.variables.cryptoAddressVar), a(e.variables.isPriorityWithdrawalErrorVar), a(e.variables.activeWalletVar.balanceAttr), a(e.variables.activeWalletVar.currencyAttr), a(e.variables.activeWalletVar.isCrpytoAttr), a(e.variables.isLoadingVar)]
            }))
        }
    };
o(p, "View");
var E = p,
    oe = E;
export {
    oe as
    default
};