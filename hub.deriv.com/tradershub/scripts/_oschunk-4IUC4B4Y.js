import {
    a as C
} from "./_oschunk-B62CZND3.js";
import {
    a as O
} from "./_oschunk-NJBZFVJK.js";
import {
    a as w
} from "./_oschunk-MQ3SXFQ7.js";
import "./_oschunk-W6ZEDFD5.js";
import "./_oschunk-AKPRKE3L.js";
import "./_oschunk-7EJDEKFB.js";
import "./_oschunk-EK7BIWKQ.js";
import "./_oschunk-RAZ4EXDC.js";
import "./_oschunk-PCMUJO6C.js";
import {
    a as y
} from "./_oschunk-ZGZGC7WW.js";
import "./_oschunk-GSA6MIEZ.js";
import "./_oschunk-PASQVAVD.js";
import "./_oschunk-TMT5K6IM.js";
import "./_oschunk-U5BVDMC7.js";
import "./_oschunk-GRCLOXGJ.js";
import "./_oschunk-VWJXDAKN.js";
import {
    b as f,
    h as a,
    j as g,
    r as S,
    y as P
} from "./_oschunk-E7JQAU4J.js";
import "./_oschunk-5N5TJ3ES.js";
import {
    a as A,
    g as m,
    i as b
} from "./_oschunk-T77XORCW.js";
import "./_oschunk-2TPJE4AL.js";
import "./_oschunk-VADNKVBQ.js";
import {
    l as x
} from "./_oschunk-OOUVJ7PM.js";
import "./_oschunk-ZKKCTARK.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-KG7LSUIA.js";
import {
    ia as W
} from "./_oschunk-5EPHB76O.js";
import {
    c as o,
    g as I
} from "./_oschunk-DVBKI63I.js";
var r = I(A());
var s = W,
    _ = b.PlaceholderContent,
    Q = b.IteratorPlaceholderContent,
    u = class u extends m.BaseWebScreen {
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
            return [y, w]
        }
        get modelFactory() {
            return C
        }
        get controllerFactory() {
            return O
        }
        get title() {
            return m.BaseWebScreen.getTranslation("QXvBuDLk2UqvgmTM0KGb1w#Title", "WalletsReceiptWithdrawal")
        }
        internalRender() {
            let e = this.model,
                v = this.controller,
                t = this.idService,
                h = v.validationService,
                i = this.widgetsRecordProvider,
                E = v.callContext(),
                V = u.ifWidget,
                d = u.textWidget,
                n = u.asPrimitiveValue,
                l = u.getTranslation,
                p = this;
            return r.createElement("div", this.getRootNodeProperties(), r.createElement(y, {
                getOwnerSpan: o(function() {
                    return p.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return p.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: o(function(c) {
                        v.handleError(c)
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
                _widgetRecordProvider: i,
                placeholders: {
                    content: new _(function() {
                        return [r.createElement(w, {
                            getOwnerSpan: o(function() {
                                return p.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return p.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                PageTitle: "Withdraw",
                                IsLoading: e.variables.isLoadingVar,
                                HideWalletHeader: !0,
                                HideBackButton: !0
                            },
                            events: {
                                _handleError: o(function(c) {
                                    v.handleError(c)
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
                            _widgetRecordProvider: i,
                            placeholders: {
                                walletOverlayPageContent: new _(function() {
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
                                    }, r.createElement(P, {
                                        extendedProperties: {
                                            style: "font-size: 18px; font-weight: bold;"
                                        },
                                        text: [d(l("_k8+JuWJUEGaRxtX2hqywA#Value", "Withdrawal in review"))],
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
                                    }, r.createElement(P, {
                                        extendedProperties: {
                                            style: "font-size: 16px;"
                                        },
                                        text: [d(l("Lx9SBssYbU6NWztP6xicOg#Value", "Your withdrawal will be processed within 24 hours. We'll email you once it's complete."))],
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
                                    }, V(e.variables.isPriorityIn, !1, this, function() {
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
                                        }, d(l("Lx06kYrW_0uY20CSgYImfg#Value", "Transaction Fee")), r.createElement(g, {
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
                                        }, d(l("_N_vvuA+ME+wqaXQtLmpyA#Value", "Amount received")), r.createElement(g, {
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
                                        }, d(l("sJJIIykqQEWFWsM38NRFWA#Value", "Destination address")), r.createElement(g, {
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
                                        }, d(l("sfLQkiOkA0uC6rfAr3QWkg#Value", "Withdrawal amount")), r.createElement(g, {
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
                                        }, d(l("g4Wao6D0xUu6BTGjn87SWw#Value", "Destination address")), r.createElement(g, {
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
                                            return x.isDesktop$Action(E).isDesktopOut
                                        }),
                                        _idProps: {
                                            service: t,
                                            uuid: "21"
                                        },
                                        _widgetRecordProvider: i
                                    }, r.createElement(f, {
                                        enabled: !0,
                                        isDefault: !1,
                                        onClick: o(function() {
                                            try {
                                                s.Navigation.navigateTo(s.Navigation.generateScreenURL("tradershub", "wallets/transactions", {}), s.Transitions.createTransition(s.Transitions.TransitionAnimation.Default), null, !0)
                                            } catch (c) {
                                                if (c.name !== "RedirectOccurredException") throw c
                                            }
                                        }, "onClick"),
                                        style: "btn btn-cancel",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "22"
                                        },
                                        _widgetRecordProvider: i
                                    }, d(l("N54kiZP9xE6pBIZ+kyg6NQ#Value", "View transactions")))))]
                                }),
                                mobileFooterContent: new _(function() {
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
                                    }, r.createElement(f, {
                                        enabled: !0,
                                        isDefault: !1,
                                        onClick: o(function() {
                                            try {
                                                s.Navigation.navigateTo(s.Navigation.generateScreenURL("tradershub", "wallets/transactions", {}), s.Transitions.createTransition(s.Transitions.TransitionAnimation.Default), null, !0)
                                            } catch (c) {
                                                if (c.name !== "RedirectOccurredException") throw c
                                            }
                                        }, "onClick"),
                                        style: "btn btn-cancel full-width",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "24"
                                        },
                                        _widgetRecordProvider: i
                                    }, d(l("SjekiIfFi0maP8X1ToOIHg#Value", "View transactions"))))]
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
o(u, "View");
var R = u,
    Y = R;
export {
    Y as
    default
};