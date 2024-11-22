import {
    a as x
} from "./_oschunk-ES35EB5F.js";
import {
    a as W
} from "./_oschunk-YZQYWHVK.js";
import {
    a as P
} from "./_oschunk-DDSAAS3R.js";
import "./_oschunk-3EM3HOK7.js";
import "./_oschunk-4HOLBSDB.js";
import "./_oschunk-KE67QEAX.js";
import "./_oschunk-UK73WSZT.js";
import "./_oschunk-XGQAZLYY.js";
import "./_oschunk-GDCJSJP3.js";
import {
    a as f
} from "./_oschunk-RRERX77H.js";
import "./_oschunk-HBEXL7KK.js";
import "./_oschunk-NJYKWZYU.js";
import "./_oschunk-SW7FWAXZ.js";
import "./_oschunk-BHZNFATE.js";
import {
    b as m,
    h as a,
    j as c,
    r as S,
    y as b
} from "./_oschunk-HUOHOHZB.js";
import "./_oschunk-Y45M2O2K.js";
import {
    a as I,
    g as v,
    i as p
} from "./_oschunk-6LASTRK7.js";
import "./_oschunk-TIJZDWYD.js";
import "./_oschunk-27GDEXUT.js";
import {
    a as h
} from "./_oschunk-D2MH3QEK.js";
import "./_oschunk-WJ75ZXAT.js";
import "./_oschunk-3WNR72F6.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-HQOLQB4T.js";
import {
    ia as R
} from "./_oschunk-NTQBNJ73.js";
import {
    c as o,
    g as E
} from "./_oschunk-DVBKI63I.js";
var r = E(I());
var s = R,
    w = p.PlaceholderContent,
    H = p.IteratorPlaceholderContent,
    l = class l extends v.BaseWebScreen {
        static get displayName() {
            return "WalletFlows.WalletsReceiptWithdrawal"
        }
        static getAttributes() {
            return {
                codeFunction: "WalletsReceiptWithdrawal",
                functionKey: "b8c17b41-e432-4ad9-af82-64ccd0a19bd7",
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
            return [f, P]
        }
        get modelFactory() {
            return x
        }
        get controllerFactory() {
            return W
        }
        get title() {
            return v.BaseWebScreen.getTranslation("QXvBuDLk2UqvgmTM0KGb1w#Title", "WalletsReceiptWithdrawal")
        }
        internalRender() {
            let e = this.model,
                u = this.controller,
                t = this.idService,
                _ = u.validationService,
                i = this.widgetsRecordProvider,
                C = u.callContext(),
                O = l.ifWidget,
                V = l.textWidget,
                n = l.asPrimitiveValue,
                T = l.getTranslation,
                g = this;
            return r.createElement("div", this.getRootNodeProperties(), r.createElement(f, {
                getOwnerSpan: o(function() {
                    return g.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return g.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: o(function(d) {
                        u.handleError(d)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: _
                },
                _idProps: {
                    service: t,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: i,
                placeholders: {
                    content: new w(function() {
                        return [r.createElement(P, {
                            getOwnerSpan: o(function() {
                                return g.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return g.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                PageTitle: "Withdraw",
                                IsLoading: e.variables.isLoadingVar,
                                HideWalletHeader: !0,
                                HideBackButton: !0
                            },
                            events: {
                                _handleError: o(function(d) {
                                    u.handleError(d)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: _
                            },
                            _idProps: {
                                service: t,
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: i,
                            placeholders: {
                                walletOverlayPageContent: new w(function() {
                                    return [r.createElement(a, {
                                        align: 0,
                                        animate: !1,
                                        style: "full-width display-flex flex-direction-column justify-content-center align-items-center gap-base",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "2"
                                        },
                                        _widgetRecordProvider: i
                                    }, r.createElement(a, {
                                        align: 0,
                                        animate: !1,
                                        style: "padding-base",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "3"
                                        },
                                        _widgetRecordProvider: i
                                    }, r.createElement(a, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "text-align: center;"
                                        },
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "4"
                                        },
                                        _widgetRecordProvider: i
                                    }, r.createElement(S, {
                                        image: s.Navigation.VersionedURL.getVersionedUrl("img/tradershub.WithdrawalReceipt.svg"),
                                        style: "margin-bottom-m",
                                        type: 0,
                                        _idProps: {
                                            service: t,
                                            uuid: "5"
                                        },
                                        _widgetRecordProvider: i
                                    })), r.createElement(a, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "text-align: center;"
                                        },
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "6"
                                        },
                                        _widgetRecordProvider: i
                                    }, r.createElement(b, {
                                        extendedProperties: {
                                            style: "font-size: 18px; font-weight: bold;"
                                        },
                                        text: ["Withdrawal in review"],
                                        _idProps: {
                                            service: t,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: i
                                    })), r.createElement(a, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "text-align: center;"
                                        },
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "8"
                                        },
                                        _widgetRecordProvider: i
                                    }, r.createElement(b, {
                                        extendedProperties: {
                                            style: "font-size: 16px;"
                                        },
                                        text: ["Your withdrawal will be processed within 24 hours. We'll email you once it's complete."],
                                        _idProps: {
                                            service: t,
                                            uuid: "9"
                                        },
                                        _widgetRecordProvider: i
                                    }))), r.createElement(a, {
                                        align: 0,
                                        animate: !1,
                                        style: "full-width display-flex flex-direction-column gap-s",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "10"
                                        },
                                        _widgetRecordProvider: i
                                    }, O(e.variables.isPriorityIn, !1, this, function() {
                                        return [r.createElement(a, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "border-radius: 8px;"
                                            },
                                            style: "background-neutral-1 padding-base display-flex align-items-center justify-content-space-between",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "11"
                                            },
                                            _widgetRecordProvider: i
                                        }, "Transaction Fee", r.createElement(c, {
                                            gridProperties: {
                                                classes: "ThemeGrid_MarginGutter"
                                            },
                                            value: e.getCachedValue(t.getId("fRAHvAtI_kKjuTU7oCOQWw.Value"), function() {
                                                return s.BuiltinFunctions.formatDecimal(e.variables.transactionFeeIn, 8, ",", ",") + " " + e.variables.cryptoCurrencyIn
                                            }, function() {
                                                return e.variables.transactionFeeIn
                                            }, function() {
                                                return e.variables.cryptoCurrencyIn
                                            }),
                                            _idProps: {
                                                service: t,
                                                uuid: "12"
                                            },
                                            _widgetRecordProvider: i
                                        })), r.createElement(a, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "border-radius: 8px;"
                                            },
                                            style: "background-neutral-1 padding-base display-flex align-items-center justify-content-space-between",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "13"
                                            },
                                            _widgetRecordProvider: i
                                        }, "Amount received", r.createElement(c, {
                                            gridProperties: {
                                                classes: "ThemeGrid_MarginGutter"
                                            },
                                            value: e.getCachedValue(t.getId("F7BSZVYCBkKd0WiDtEgAtg.Value"), function() {
                                                return s.BuiltinFunctions.formatDecimal(e.variables.amountAfterFeesVar, 8, ".", ".") + " " + e.variables.cryptoCurrencyIn + " " + e.variables.cryptoCurrencyIn
                                            }, function() {
                                                return e.variables.amountAfterFeesVar
                                            }, function() {
                                                return e.variables.cryptoCurrencyIn
                                            }),
                                            _idProps: {
                                                service: t,
                                                uuid: "14"
                                            },
                                            _widgetRecordProvider: i
                                        })), r.createElement(a, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "border-radius: 8px;"
                                            },
                                            style: "background-neutral-1 padding-base display-flex align-items-center justify-content-space-between",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "15"
                                            },
                                            _widgetRecordProvider: i
                                        }, "Destination address", r.createElement(c, {
                                            extendedProperties: {
                                                style: "font-weight: bold; text-decoration: underline;"
                                            },
                                            gridProperties: {
                                                classes: "ThemeGrid_MarginGutter"
                                            },
                                            value: e.variables.formattedAddressVar,
                                            _idProps: {
                                                service: t,
                                                uuid: "16"
                                            },
                                            _widgetRecordProvider: i
                                        }))]
                                    }, function() {
                                        return [r.createElement(a, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "border-radius: 8px;"
                                            },
                                            style: "background-neutral-1 padding-base display-flex align-items-center justify-content-space-between",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "17"
                                            },
                                            _widgetRecordProvider: i
                                        }, "Withdrawal amount", r.createElement(c, {
                                            gridProperties: {
                                                classes: "ThemeGrid_MarginGutter"
                                            },
                                            value: e.getCachedValue(t.getId("42b0e_9qFkCcQptoxa8wvw.Value"), function() {
                                                return s.BuiltinFunctions.formatDecimal(e.variables.cryptoAmountIn, 8, ".", ".") + " " + e.variables.cryptoCurrencyIn
                                            }, function() {
                                                return e.variables.cryptoAmountIn
                                            }, function() {
                                                return e.variables.cryptoCurrencyIn
                                            }),
                                            _idProps: {
                                                service: t,
                                                uuid: "18"
                                            },
                                            _widgetRecordProvider: i
                                        })), r.createElement(a, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "border-radius: 8px;"
                                            },
                                            style: "background-neutral-1 padding-base display-flex align-items-center justify-content-space-between",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "19"
                                            },
                                            _widgetRecordProvider: i
                                        }, "Destination address", r.createElement(c, {
                                            extendedProperties: {
                                                style: "font-weight: bold; text-decoration: underline;"
                                            },
                                            gridProperties: {
                                                classes: "ThemeGrid_MarginGutter"
                                            },
                                            value: e.variables.formattedAddressVar,
                                            _idProps: {
                                                service: t,
                                                uuid: "20"
                                            },
                                            _widgetRecordProvider: i
                                        }))]
                                    })), r.createElement(a, {
                                        align: 0,
                                        animate: !0,
                                        visible: e.getCachedValue(t.getId("5HTbtCU+PUe6ECoAh2YrPg.Visible"), function() {
                                            return h.isDesktop$Action(C).isDesktopOut
                                        }),
                                        _idProps: {
                                            service: t,
                                            uuid: "21"
                                        },
                                        _widgetRecordProvider: i
                                    }, r.createElement(m, {
                                        enabled: !0,
                                        isDefault: !1,
                                        onClick: o(function() {
                                            try {
                                                s.Navigation.navigateTo(s.Navigation.generateScreenURL("tradershub", "wallets/transactions", {}), s.Transitions.createTransition(s.Transitions.TransitionAnimation.Default), null, !0)
                                            } catch (d) {
                                                if (d.name !== "RedirectOccurredException") throw d
                                            }
                                        }, "onClick"),
                                        style: "btn btn-cancel",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "22"
                                        },
                                        _widgetRecordProvider: i
                                    }, "View transactions")))]
                                }),
                                mobileFooterContent: new w(function() {
                                    return [r.createElement(a, {
                                        align: 0,
                                        animate: !1,
                                        style: "padding-base",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "23"
                                        },
                                        _widgetRecordProvider: i
                                    }, r.createElement(m, {
                                        enabled: !0,
                                        isDefault: !1,
                                        onClick: o(function() {
                                            try {
                                                s.Navigation.navigateTo(s.Navigation.generateScreenURL("tradershub", "wallets/transactions", {}), s.Transitions.createTransition(s.Transitions.TransitionAnimation.Default), null, !0)
                                            } catch (d) {
                                                if (d.name !== "RedirectOccurredException") throw d
                                            }
                                        }, "onClick"),
                                        style: "btn btn-cancel full-width",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "24"
                                        },
                                        _widgetRecordProvider: i
                                    }, "View transactions"))]
                                })
                            },
                            _dependencies: [n(e.variables.cryptoAmountIn), n(e.variables.formattedAddressVar), n(e.variables.amountAfterFeesVar), n(e.variables.cryptoCurrencyIn), n(e.variables.transactionFeeIn), n(e.variables.isPriorityIn)]
                        })]
                    })
                },
                _dependencies: [n(e.variables.cryptoAmountIn), n(e.variables.formattedAddressVar), n(e.variables.amountAfterFeesVar), n(e.variables.cryptoCurrencyIn), n(e.variables.transactionFeeIn), n(e.variables.isPriorityIn), n(e.variables.isLoadingVar)]
            }))
        }
    };
o(l, "View");
var y = l,
    K = y;
export {
    K as
    default
};