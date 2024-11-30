import {
    a as V
} from "./_oschunk-MA7XYJKH.js";
import {
    a as T
} from "./_oschunk-5RLFPCNQ.js";
import {
    a as y
} from "./_oschunk-7ULIXNLP.js";
import "./_oschunk-V3FFUWJG.js";
import {
    a as h
} from "./_oschunk-6LHMKEZD.js";
import "./_oschunk-IDZWQMUL.js";
import "./_oschunk-4HOLBSDB.js";
import "./_oschunk-VLOO5HJV.js";
import "./_oschunk-IQUI5AIQ.js";
import "./_oschunk-FVTZGXVK.js";
import "./_oschunk-GDCJSJP3.js";
import "./_oschunk-UHVNGUMG.js";
import "./_oschunk-MAFTJFMD.js";
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
    b as _,
    h as a,
    j as R,
    r as p,
    y as g
} from "./_oschunk-WAXNMQCP.js";
import "./_oschunk-LHY3WMNC.js";
import {
    a as I,
    g as E,
    i as w
} from "./_oschunk-J7LCUWB3.js";
import "./_oschunk-ESOYZIPG.js";
import "./_oschunk-XMOR6XCC.js";
import {
    a as C
} from "./_oschunk-H7UK4VZM.js";
import "./_oschunk-JSVFHRDW.js";
import "./_oschunk-LUKJNVXR.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-44PT7RP7.js";
import {
    ia as O
} from "./_oschunk-NTQBNJ73.js";
import {
    c as n,
    g as A
} from "./_oschunk-DVBKI63I.js";
var t = A(I());
var d = O,
    S = w.PlaceholderContent,
    G = w.IteratorPlaceholderContent,
    c = class c extends E.BaseWebScreen {
        static get displayName() {
            return "WalletFlows.WalletsRecentTransactions"
        }
        static getAttributes() {
            return {
                codeFunction: "WalletsRecentTransactions",
                functionKey: "cbb4d6ff-b419-485f-9940-81c40e1fbae3",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.WalletFlows.WalletsRecentTransactions.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [x, h, y]
        }
        get modelFactory() {
            return V
        }
        get controllerFactory() {
            return T
        }
        get title() {
            let i = this.model,
                s = this.controller,
                e = this.idService,
                f = s.validationService,
                r = s.callContext(),
                P = c.asPrimitiveValue,
                b = c.getTranslation,
                u = this;
            return d.Injector.resolve(d.ServiceNames.TranslationsService).getMessage("_9a0yxm0X0iZQIHEDh+64w#TitleExpression.2118442357.1", "Transactions")
        }
        internalRender() {
            let i = this.model,
                s = this.controller,
                e = this.idService,
                f = s.validationService,
                r = this.widgetsRecordProvider,
                P = s.callContext(),
                b = c.ifWidget,
                u = c.textWidget,
                l = c.asPrimitiveValue,
                v = c.getTranslation,
                m = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(x, {
                getOwnerSpan: n(function() {
                    return m.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: n(function() {
                    return m.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: n(function(o) {
                        s.handleError(o)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: f
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: r,
                placeholders: {
                    content: new S(function() {
                        return [t.createElement(h, {
                            getOwnerSpan: n(function() {
                                return m.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return m.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                HideCloseButton: !0,
                                PageTitle: i.variables.activeWalletVar.nameAttr,
                                HideWalletHeader: !0
                            },
                            events: {
                                _handleError: n(function(o) {
                                    s.handleError(o)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: f
                            },
                            _idProps: {
                                service: e,
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: r,
                            placeholders: {
                                walletOverlayPageContent: new S(function() {
                                    return [t.createElement(a, {
                                        align: 0,
                                        animate: !1,
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            name: "ContentWrapper"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(a, {
                                        align: 0,
                                        animate: !1,
                                        style: "wallets-transaction-header margin-bottom-m",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            name: "WalletTransactionHeader"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(a, {
                                        align: 0,
                                        animate: !1,
                                        style: "wallets-transaction-currency",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "4"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(p, {
                                        extendedProperties: {
                                            style: "height: 32px;"
                                        },
                                        gridProperties: {
                                            width: "32px"
                                        },
                                        type: 1,
                                        url: i.variables.activeWalletVar.iconAttr,
                                        _idProps: {
                                            service: e,
                                            uuid: "5"
                                        },
                                        _widgetRecordProvider: r
                                    }), t.createElement(a, {
                                        align: 0,
                                        animate: !1,
                                        style: "wallets-transaction-info",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "6"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(R, {
                                        extendedProperties: {
                                            style: "font-size: 12px;"
                                        },
                                        style: i.getCachedValue(e.getId("TrtjDSdAG0OP7iILlybFyA.Style"), function() {
                                            return C.isDesktop$Action(P).isDesktopOut ? "font-size-s" : "font-size-xs"
                                        }),
                                        value: i.variables.activeWalletVar.nameAttr,
                                        _idProps: {
                                            service: e,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: r
                                    }), t.createElement(R, {
                                        extendedProperties: {
                                            style: "font-size: 18px;"
                                        },
                                        gridProperties: {
                                            marginLeft: "0px"
                                        },
                                        style: "font-bold heading5 full-width",
                                        value: i.variables.activeWalletVar.formattedBalanceAttr,
                                        _idProps: {
                                            service: e,
                                            uuid: "8"
                                        },
                                        _widgetRecordProvider: r
                                    }))), t.createElement(a, {
                                        align: 0,
                                        animate: !1,
                                        style: "wallets-transaction-actions",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "9"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(a, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex flex-direction-column align-items-center",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "10"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(_, {
                                        enabled: !0,
                                        isDefault: !1,
                                        onClick: n(function() {
                                            return Promise.resolve().then(function() {
                                                var o = P.clone();
                                                return s.depositbtnOnClick$Action(s.callContext(o))
                                            })
                                        }, "onClick"),
                                        style: "wallet-header-btn wallet-header-btn-primary",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            name: "DepositBtn2"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(p, {
                                        image: d.Navigation.VersionedURL.getVersionedUrl("img/tradershub.plussmwhite.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "12"
                                        },
                                        _widgetRecordProvider: r
                                    })), t.createElement(g, {
                                        extendedProperties: {
                                            style: "font-size: 12px;"
                                        },
                                        style: "margin-top-xs",
                                        text: [u(v("s9NNwNCXZ0CvWcJ5FqloYw#Value", "Deposit"))],
                                        _idProps: {
                                            service: e,
                                            uuid: "13"
                                        },
                                        _widgetRecordProvider: r
                                    })), t.createElement(a, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex flex-direction-column align-items-center",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "14"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(_, {
                                        enabled: !0,
                                        extendedProperties: {
                                            style: "border-color: #101213; border-width: 1px; margin-bottom: 0px; margin-right: 0px; margin-top: 0px;"
                                        },
                                        gridProperties: {
                                            marginLeft: "0px"
                                        },
                                        isDefault: !1,
                                        onClick: n(function() {
                                            return Promise.resolve().then(function() {
                                                var o = P.clone();
                                                return s.withdrawbtnOnClick$Action(s.callContext(o))
                                            })
                                        }, "onClick"),
                                        style: "wallet-header-btn",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            name: "WithdrawBtn3"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(p, {
                                        image: d.Navigation.VersionedURL.getVersionedUrl("img/tradershub.minussm.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "16"
                                        },
                                        _widgetRecordProvider: r
                                    })), t.createElement(g, {
                                        extendedProperties: {
                                            style: "font-size: 12px;"
                                        },
                                        style: "margin-top-xs",
                                        text: [u(v("fCvYKaeAIkC05YQyQv5bfw#Value", "Withdraw"))],
                                        _idProps: {
                                            service: e,
                                            uuid: "17"
                                        },
                                        _widgetRecordProvider: r
                                    })), t.createElement(a, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex flex-direction-column align-items-center",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "18"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(_, {
                                        enabled: !0,
                                        extendedProperties: {
                                            style: "border-color: #101213; border-width: 1px; padding: 0px 16px 0px 16px;"
                                        },
                                        isDefault: !1,
                                        onClick: n(function() {
                                            try {
                                                d.Navigation.navigateTo(d.Navigation.generateScreenURL("tradershub", "wallets/transactions", {}), d.Transitions.createTransition(d.Transitions.TransitionAnimation.Default), null, !0)
                                            } catch (o) {
                                                if (o.name !== "RedirectOccurredException") throw o
                                            }
                                        }, "onClick"),
                                        style: "wallet-header-btn",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            name: "TransferBtn2"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(p, {
                                        extendedProperties: {
                                            style: "color: #222;"
                                        },
                                        image: d.Navigation.VersionedURL.getVersionedUrl("img/tradershub.arrowuparrowdownsm.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "20"
                                        },
                                        _widgetRecordProvider: r
                                    })), t.createElement(g, {
                                        extendedProperties: {
                                            style: "font-size: 12px;"
                                        },
                                        style: "margin-top-xs",
                                        text: [u(v("36I4v+f8ckKzWPDKEate7g#Value", "Transfer"))],
                                        _idProps: {
                                            service: e,
                                            uuid: "21"
                                        },
                                        _widgetRecordProvider: r
                                    })))), t.createElement(a, {
                                        align: 0,
                                        animate: !1,
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            name: "TransactionsWrapper"
                                        },
                                        _widgetRecordProvider: r
                                    }, b(i.variables.isLoadingVar, !1, this, function() {
                                        return [t.createElement(a, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "border-radius: 8px;"
                                            },
                                            style: "wallets-recent-transactions-skeleton wallet-skeleton margin-top",
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                uuid: "23"
                                            },
                                            _widgetRecordProvider: r
                                        })]
                                    }, function() {
                                        return [b(i.variables.transactionsVar.isEmpty, !1, this, function() {
                                            return [t.createElement(a, {
                                                align: 0,
                                                animate: !1,
                                                style: "display-flex flex-direction-column align-items-center justify-content-center",
                                                visible: !0,
                                                _idProps: {
                                                    service: e,
                                                    name: "EmptyTransactionContainer"
                                                },
                                                _widgetRecordProvider: r
                                            }, t.createElement(a, {
                                                align: 0,
                                                animate: !1,
                                                extendedProperties: {
                                                    style: "text-align: center;"
                                                },
                                                visible: !0,
                                                _idProps: {
                                                    service: e,
                                                    uuid: "25"
                                                },
                                                _widgetRecordProvider: r
                                            }, t.createElement(p, {
                                                gridProperties: {
                                                    width: "36px"
                                                },
                                                image: d.Navigation.VersionedURL.getVersionedUrl("img/tradershub.warningneutral.svg"),
                                                style: "margin-bottom-base",
                                                type: 0,
                                                _idProps: {
                                                    service: e,
                                                    uuid: "26"
                                                },
                                                _widgetRecordProvider: r
                                            })), t.createElement(g, {
                                                extendedProperties: {
                                                    style: "font-size: 18px;"
                                                },
                                                style: "font-bold margin-bottom-s",
                                                text: [u(v("K8vQm62PtEKjuxDpZl6z2Q#Value", "No transactions found"))],
                                                _idProps: {
                                                    service: e,
                                                    uuid: "27"
                                                },
                                                _widgetRecordProvider: r
                                            }), t.createElement(g, {
                                                extendedProperties: {
                                                    style: "font-size: 16px;"
                                                },
                                                text: [u(v("ZQ_nxfAG9UusGyQPWO49BA#Value", "Your transactions will appear here."))],
                                                _idProps: {
                                                    service: e,
                                                    name: "EmptyTransactionContentContainer"
                                                },
                                                _widgetRecordProvider: r
                                            }))]
                                        }, function() {
                                            return [t.createElement(a, {
                                                align: 0,
                                                animate: !1,
                                                visible: !0,
                                                _idProps: {
                                                    service: e,
                                                    uuid: "29"
                                                },
                                                _widgetRecordProvider: r
                                            }, t.createElement(g, {
                                                extendedProperties: {
                                                    style: "font-size: 16px;"
                                                },
                                                style: "font-bold",
                                                text: [u(v("+ULi2IGhtkOlm8HQkYpl7g#Value", "Transactions"))],
                                                _idProps: {
                                                    service: e,
                                                    uuid: "30"
                                                },
                                                _widgetRecordProvider: r
                                            }), t.createElement(a, {
                                                align: 0,
                                                animate: !1,
                                                style: "margin-top-base",
                                                visible: !0,
                                                _idProps: {
                                                    service: e,
                                                    uuid: "31"
                                                },
                                                _widgetRecordProvider: r
                                            }, t.createElement(y, {
                                                getOwnerSpan: n(function() {
                                                    return m.getChildSpan("render")
                                                }, "getOwnerSpan"),
                                                getOwnerDisposeSpan: n(function() {
                                                    return m.getChildSpan("destroy")
                                                }, "getOwnerDisposeSpan"),
                                                inputs: {
                                                    TransactionsList: i.variables.transactionsVar
                                                },
                                                events: {
                                                    _handleError: n(function(o) {
                                                        s.handleError(o)
                                                    }, "_handleError")
                                                },
                                                _validationProps: {
                                                    validationService: f
                                                },
                                                _idProps: {
                                                    service: e,
                                                    uuid: "32",
                                                    alias: "3"
                                                },
                                                _widgetRecordProvider: r,
                                                _dependencies: []
                                            })))]
                                        })]
                                    })))]
                                }),
                                mobileFooterContent: S.Empty
                            },
                            _dependencies: [l(i.variables.transactionsVar), l(i.variables.isLoadingVar), l(i.variables.activeWalletVar.formattedBalanceAttr), l(i.variables.activeWalletVar.nameAttr), l(i.variables.activeWalletVar.iconAttr)]
                        })]
                    })
                },
                _dependencies: [l(i.variables.transactionsVar), l(i.variables.isLoadingVar), l(i.variables.activeWalletVar.formattedBalanceAttr), l(i.variables.activeWalletVar.iconAttr), l(i.variables.activeWalletVar.nameAttr)]
            }))
        }
    };
n(c, "View");
var W = c,
    M = W;
export {
    M as
    default
};