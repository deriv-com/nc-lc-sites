import {
    a as D
} from "./_oschunk-LMG3CZJ7.js";
import {
    a as I
} from "./_oschunk-ZBYBA5NX.js";
import {
    a as C
} from "./_oschunk-DDSAAS3R.js";
import "./_oschunk-3EM3HOK7.js";
import "./_oschunk-4HOLBSDB.js";
import "./_oschunk-KE67QEAX.js";
import "./_oschunk-UK73WSZT.js";
import "./_oschunk-XGQAZLYY.js";
import "./_oschunk-GDCJSJP3.js";
import {
    a as w
} from "./_oschunk-CJZXGA6I.js";
import {
    a as R
} from "./_oschunk-RRERX77H.js";
import "./_oschunk-MDH7HMYN.js";
import "./_oschunk-HBEXL7KK.js";
import "./_oschunk-NJYKWZYU.js";
import "./_oschunk-SW7FWAXZ.js";
import "./_oschunk-BHZNFATE.js";
import {
    a as P,
    b,
    h as g,
    j as m,
    r as O,
    v as A,
    y as f
} from "./_oschunk-HUOHOHZB.js";
import "./_oschunk-Y45M2O2K.js";
import {
    a as U,
    g as V,
    i as h
} from "./_oschunk-6LASTRK7.js";
import "./_oschunk-TIJZDWYD.js";
import "./_oschunk-27GDEXUT.js";
import {
    a as c
} from "./_oschunk-D2MH3QEK.js";
import "./_oschunk-WJ75ZXAT.js";
import "./_oschunk-3WNR72F6.js";
import "./_oschunk-X4K3PA43.js";
import {
    a as x
} from "./_oschunk-HQOLQB4T.js";
import {
    ia as W
} from "./_oschunk-NTQBNJ73.js";
import {
    c as s,
    g as z
} from "./_oschunk-DVBKI63I.js";
var t = z(U());
var d = W,
    S = h.PlaceholderContent,
    K = h.IteratorPlaceholderContent,
    u = class u extends V.BaseWebScreen {
        static get displayName() {
            return "WalletFlows.WalletsCryptoDeposit"
        }
        static getAttributes() {
            return {
                codeFunction: "WalletsCryptoDeposit",
                functionKey: "8d6b7376-5aa9-48d7-b544-f630d5049791",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.WalletFlows.WalletsCryptoDeposit.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return ["scripts/tradershub.UserScripts.QRCodeJS.js"]
        }
        static getBlocks() {
            return [R, C, w]
        }
        get modelFactory() {
            return D
        }
        get controllerFactory() {
            return I
        }
        get title() {
            let i = this.model,
                a = this.controller,
                e = this.idService,
                _ = a.validationService,
                r = a.callContext(),
                n = u.asPrimitiveValue,
                T = u.getTranslation,
                p = this;
            return "Deposit"
        }
        internalRender() {
            let i = this.model,
                a = this.controller,
                e = this.idService,
                _ = a.validationService,
                r = this.widgetsRecordProvider,
                n = a.callContext(),
                T = u.ifWidget,
                p = u.textWidget,
                l = u.asPrimitiveValue,
                v = u.getTranslation,
                y = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(R, {
                getOwnerSpan: s(function() {
                    return y.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return y.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: s(function(o) {
                        a.handleError(o)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: _
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: r,
                placeholders: {
                    content: new S(function() {
                        return [t.createElement(A, {
                            showPopup: i.variables.hasErrorVar,
                            style: "popup-dialog",
                            _idProps: {
                                service: e,
                                uuid: "1"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(g, {
                            align: 0,
                            animate: !1,
                            style: "display-flex flex-direction-column margin-bottom-base",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "2"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(f, {
                            extendedProperties: {
                                style: "font-size: 24px; padding: 0px 0px 16px 0px;"
                            },
                            style: "font-bold",
                            text: [p(v("S_w_+ypGc06GCEGp1JHxFA#Value", "Error"))],
                            _idProps: {
                                service: e,
                                uuid: "3"
                            },
                            _widgetRecordProvider: r
                        }), t.createElement(m, {
                            gridProperties: {
                                marginLeft: "0"
                            },
                            value: i.variables.errorMessageVar,
                            _idProps: {
                                service: e,
                                uuid: "4"
                            },
                            _widgetRecordProvider: r
                        })), t.createElement(g, {
                            align: 0,
                            animate: !1,
                            style: "full-width display-flex justify-content-flex-end",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "5"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(b, {
                            enabled: !0,
                            extendedProperties: {
                                style: "border-color: #222;"
                            },
                            isDefault: !1,
                            onClick: s(function() {
                                try {
                                    d.Navigation.navigateTo(d.Navigation.generateScreenURL("tradershub", "options", {}), d.Transitions.createTransition(d.Transitions.TransitionAnimation.Fade), null, !0)
                                } catch (o) {
                                    if (o.name !== "RedirectOccurredException") throw o
                                }
                            }, "onClick"),
                            style: "btn",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "6"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(f, {
                            extendedProperties: {
                                style: "color: #222; margin-left: Auto;"
                            },
                            text: [p(v("6E1f4sIdD0iz_GdQ_TDn0w#Value", "Go back"))],
                            _idProps: {
                                service: e,
                                uuid: "7"
                            },
                            _widgetRecordProvider: r
                        })))), t.createElement(C, {
                            getOwnerSpan: s(function() {
                                return y.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: s(function() {
                                return y.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                IsLoading: i.variables.isLoadingVar,
                                PageTitle: "Deposits"
                            },
                            events: {
                                _handleError: s(function(o) {
                                    a.handleError(o)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: _
                            },
                            _idProps: {
                                service: e,
                                uuid: "8",
                                alias: "2"
                            },
                            _widgetRecordProvider: r,
                            placeholders: {
                                walletOverlayPageContent: new S(function() {
                                    return [t.createElement(g, {
                                        align: 0,
                                        animate: !1,
                                        style: i.getCachedValue(e.getId("Mc6TfgfTXUqFzyWlAridrw.Style"), function() {
                                            return "display-flex justify-content-space-between align-items-center flex-direction-column gap-m " + (c.isDesktop$Action(n).isDesktopOut ? "margin-top-m" : "margin-top-base")
                                        }),
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "9"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(m, {
                                        extendedProperties: {
                                            style: "font-size: 16px;"
                                        },
                                        style: "font-bold",
                                        value: "Send only " + i.variables.currencyVar.nameAttr + " (" + i.variables.currencyVar.codeAttr + ") to this address",
                                        _idProps: {
                                            service: e,
                                            uuid: "10"
                                        },
                                        _widgetRecordProvider: r
                                    }), t.createElement(g, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "height: 156px;"
                                        },
                                        gridProperties: {
                                            classes: "OSInline",
                                            width: "156px"
                                        },
                                        style: "QRContainer",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            name: "QRCode"
                                        },
                                        _widgetRecordProvider: r
                                    }), t.createElement(g, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "border-color: #CED4DA; border-style: solid; border-width: 1px; padding-bottom: 9.5px; padding-left: var(--space-base); padding-right: var(--space-base); padding-top: 9.5px; text-align: left;"
                                        },
                                        gridProperties: {
                                            classes: "OSInline",
                                            width: "full",
                                            marginLeft: "0px"
                                        },
                                        style: "padding-x-base display-flex align-items-center border-radius-soft full-width crypto-address-container",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            name: "CryptoAddressContainer"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(m, {
                                        style: "flex-1 font-size-s crypto-address-input",
                                        value: i.variables.cryptoAddressVar,
                                        _idProps: {
                                            service: e,
                                            uuid: "13"
                                        },
                                        _widgetRecordProvider: r
                                    }), t.createElement(w, {
                                        getOwnerSpan: s(function() {
                                            return y.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: s(function() {
                                            return y.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            Position: x.position.topRight,
                                            Trigger: x.trigger.onClick
                                        },
                                        events: {
                                            _handleError: s(function(o) {
                                                a.handleError(o)
                                            }, "_handleError"),
                                            onToggle$Action: s(function(o, F) {
                                                var k = n.clone();
                                                a.clipboardAction$Action(a.callContext(k))
                                            }, "onToggle$Action")
                                        },
                                        _validationProps: {
                                            validationService: _
                                        },
                                        _idProps: {
                                            service: e,
                                            name: "ClipboardTooltip",
                                            alias: "3"
                                        },
                                        _widgetRecordProvider: r,
                                        placeholders: {
                                            content: new S(function() {
                                                return [t.createElement(b, {
                                                    enabled: !0,
                                                    extendedProperties: {
                                                        style: "background-color: #fff; border-width: 0px;"
                                                    },
                                                    isDefault: !1,
                                                    onClick: s(function() {
                                                        var o = n.clone();
                                                        a.clipboardAction$Action(a.callContext(o))
                                                    }, "onClick"),
                                                    style: "cursor-pointer",
                                                    visible: !0,
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "15"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, t.createElement(O, {
                                                    extendedProperties: {
                                                        style: "font-size: 16px;"
                                                    },
                                                    gridProperties: {
                                                        width: "14px"
                                                    },
                                                    image: d.Navigation.VersionedURL.getVersionedUrl("img/tradershub.clipboard_bold.svg"),
                                                    type: 0,
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "16"
                                                    },
                                                    _widgetRecordProvider: r
                                                }))]
                                            }),
                                            tooltip: new S(function() {
                                                return [p(v("Lr7hbpVptU2zuSTcnZkrGQ#Value", "Copied"))]
                                            })
                                        },
                                        _dependencies: []
                                    })), t.createElement(g, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "border-radius: 8px;"
                                        },
                                        style: i.getCachedValue(e.getId("DisclaimerMessage.Style"), function() {
                                            return " display-flex align-items-flex-start gap-s background-warning-light " + (c.isDesktop$Action(n).isDesktopOut ? "padding-base" : "padding-s")
                                        }),
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            name: "DisclaimerMessage"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(O, {
                                        image: d.Navigation.VersionedURL.getVersionedUrl("img/tradershub.caution.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "18"
                                        },
                                        _widgetRecordProvider: r
                                    }), t.createElement(g, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex flex-direction-column",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "19"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(f, {
                                        extendedProperties: {
                                            style: "font-weight: bold;"
                                        },
                                        style: i.getCachedValue(e.getId("ZtOd9uYc1UOO3qNrfxQlnA.Style"), function() {
                                            return c.isDesktop$Action(n).isDesktopOut ? "font-size-s" : "font-size-xs"
                                        }),
                                        text: [p(v("ZtOd9uYc1UOO3qNrfxQlnA#Value", "To avoid loss of funds:"))],
                                        _idProps: {
                                            service: e,
                                            uuid: "20"
                                        },
                                        _widgetRecordProvider: r
                                    }), t.createElement(P, {
                                        tag: "ul",
                                        _idProps: {
                                            service: e,
                                            uuid: "21"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(P, {
                                        tag: "li",
                                        _idProps: {
                                            service: e,
                                            uuid: "22"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(m, {
                                        style: i.getCachedValue(e.getId("CYOuNT1u_ESRS+iFD5O3JQ.Style"), function() {
                                            return c.isDesktop$Action(n).isDesktopOut ? "font-size-s" : "font-size-xs"
                                        }),
                                        value: "Only send " + i.variables.currencyVar.nameAttr + " (" + i.variables.currencyVar.codeAttr + ")  to this address.",
                                        _idProps: {
                                            service: e,
                                            uuid: "23"
                                        },
                                        _widgetRecordProvider: r
                                    })), t.createElement(P, {
                                        tag: "li",
                                        _idProps: {
                                            service: e,
                                            uuid: "24"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(m, {
                                        style: i.getCachedValue(e.getId("S6nAczhyqUu2NHtZ1_s2vg.Style"), function() {
                                            return c.isDesktop$Action(n).isDesktopOut ? "font-size-s" : "font-size-xs"
                                        }),
                                        value: "Make sure to copy the Deriv " + i.variables.currencyVar.codeAttr + " Wallet address to your crypto wallet.",
                                        _idProps: {
                                            service: e,
                                            uuid: "25"
                                        },
                                        _widgetRecordProvider: r
                                    })), t.createElement(P, {
                                        tag: "li",
                                        _idProps: {
                                            service: e,
                                            uuid: "26"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(f, {
                                        style: i.getCachedValue(e.getId("VdEsO1d1WE+jDaXxwvPUyg.Style"), function() {
                                            return c.isDesktop$Action(n).isDesktopOut ? "font-size-s" : "font-size-xs"
                                        }),
                                        text: [p(v("VdEsO1d1WE+jDaXxwvPUyg#Value", "In your crypto wallet, select the"))],
                                        _idProps: {
                                            service: e,
                                            uuid: "27"
                                        },
                                        _widgetRecordProvider: r
                                    }), t.createElement(m, {
                                        gridProperties: {
                                            classes: "ThemeGrid_MarginGutter"
                                        },
                                        style: i.getCachedValue(e.getId("8P4vj3ghhEORPTkZ7ojqqA.Style"), function() {
                                            return "font-bold " + (c.isDesktop$Action(n).isDesktopOut ? "font-size-s" : "font-size-xs")
                                        }),
                                        value: i.variables.currencyVar.nameAttr + " (" + i.variables.currencyVar.codeAttr + ") ",
                                        _idProps: {
                                            service: e,
                                            uuid: "28"
                                        },
                                        _widgetRecordProvider: r
                                    }), t.createElement(f, {
                                        style: i.getCachedValue(e.getId("aS0uG5zS+0aboChDFz53Xg.Style"), function() {
                                            return c.isDesktop$Action(n).isDesktopOut ? "font-size-s" : "font-size-xs"
                                        }),
                                        text: [p(v("aS0uG5zS+0aboChDFz53Xg#Value", " network when transferring to Deriv. Incorrect transfers may result in loss of funds."))],
                                        _idProps: {
                                            service: e,
                                            uuid: "29"
                                        },
                                        _widgetRecordProvider: r
                                    }))))), t.createElement(b, {
                                        enabled: !0,
                                        extendedProperties: {
                                            style: "border-color: #272B30; font-size: 14px;"
                                        },
                                        isDefault: !1,
                                        onClick: s(function() {
                                            try {
                                                d.Navigation.navigateTo(d.Navigation.generateScreenURL("tradershub", "wallets/transactions", {}), d.Transitions.createTransition(d.Transitions.TransitionAnimation.Default), null, !0)
                                            } catch (o) {
                                                if (o.name !== "RedirectOccurredException") throw o
                                            }
                                        }, "onClick"),
                                        style: "btn btn-cancel",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "30"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(f, {
                                        extendedProperties: {
                                            style: "color: #101213; font-size: 14px;"
                                        },
                                        text: [p(v("VOitC6kJKkW9G1_Ev1yQcA#Value", "View transactions"))],
                                        _idProps: {
                                            service: e,
                                            uuid: "31"
                                        },
                                        _widgetRecordProvider: r
                                    })))]
                                }),
                                mobileFooterContent: S.Empty
                            },
                            _dependencies: [l(i.variables.cryptoAddressVar), l(i.variables.currencyVar.codeAttr), l(i.variables.currencyVar.nameAttr)]
                        })]
                    })
                },
                _dependencies: [l(i.variables.cryptoAddressVar), l(i.variables.currencyVar.codeAttr), l(i.variables.currencyVar.nameAttr), l(i.variables.isLoadingVar), l(i.variables.errorMessageVar), l(i.variables.hasErrorVar)]
            }))
        }
    };
s(u, "View");
var E = u,
    Y = E;
export {
    Y as
    default
};