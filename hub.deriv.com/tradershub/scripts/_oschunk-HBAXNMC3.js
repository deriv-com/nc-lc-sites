import {
    a as T
} from "./_oschunk-ORB74LIK.js";
import {
    a as D
} from "./_oschunk-ABCCPVF5.js";
import {
    a as C
} from "./_oschunk-M2HM6MS3.js";
import "./_oschunk-QIDNIYQN.js";
import "./_oschunk-ESAL6IS4.js";
import "./_oschunk-FRF3DI3V.js";
import "./_oschunk-26LPX23H.js";
import "./_oschunk-QYZYO3AQ.js";
import "./_oschunk-I4HVSXAZ.js";
import {
    a as w
} from "./_oschunk-3DUHVNXP.js";
import {
    b as R
} from "./_oschunk-G7GFWP74.js";
import "./_oschunk-5ETXRNLC.js";
import "./_oschunk-T6VVD72L.js";
import "./_oschunk-O5AQVDN2.js";
import "./_oschunk-4SG3ZAXH.js";
import "./_oschunk-MOYCBUII.js";
import "./_oschunk-NYD6CGWS.js";
import "./_oschunk-EROCOLS7.js";
import {
    a as y,
    b as x,
    h as p,
    j as m,
    r as O,
    v as A,
    y as f
} from "./_oschunk-42NACYKQ.js";
import "./_oschunk-2M7PXTSQ.js";
import {
    a as U,
    g as W,
    i as h
} from "./_oschunk-RKYF3TWC.js";
import "./_oschunk-K7AFM7ZW.js";
import "./_oschunk-DOFMR6EA.js";
import {
    l as c
} from "./_oschunk-2ZI4JQLD.js";
import "./_oschunk-IKZJT3AP.js";
import "./_oschunk-X4K3PA43.js";
import {
    a as _
} from "./_oschunk-MSUVGI3L.js";
import {
    ia as V
} from "./_oschunk-2JKANR6M.js";
import {
    c as o,
    g as z
} from "./_oschunk-DVBKI63I.js";
var t = z(U());
var s = V,
    P = h.PlaceholderContent,
    Z = h.IteratorPlaceholderContent,
    u = class u extends W.BaseWebScreen {
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
            return T
        }
        get controllerFactory() {
            return D
        }
        get title() {
            let i = this.model,
                n = this.controller,
                e = this.idService,
                b = n.validationService,
                r = n.callContext(),
                d = u.asPrimitiveValue,
                I = u.getTranslation,
                g = this;
            return s.Injector.resolve(s.ServiceNames.TranslationsService).getMessage("dnNrjala10i1RPYw1QSXkQ#TitleExpression.-1075859842.1", "Deposit")
        }
        internalRender() {
            let i = this.model,
                n = this.controller,
                e = this.idService,
                b = n.validationService,
                r = this.widgetsRecordProvider,
                d = n.callContext(),
                I = u.ifWidget,
                g = u.textWidget,
                l = u.asPrimitiveValue,
                v = u.getTranslation,
                S = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(R, {
                getOwnerSpan: o(function() {
                    return S.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return S.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: o(function(a) {
                        n.handleError(a)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: b
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: r,
                placeholders: {
                    content: new P(function() {
                        return [t.createElement(A, {
                            showPopup: i.variables.hasErrorVar,
                            style: "popup-dialog",
                            _idProps: {
                                service: e,
                                uuid: "1"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(p, {
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
                            text: [g(v("S_w_+ypGc06GCEGp1JHxFA#Value", "Error"))],
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
                        })), t.createElement(p, {
                            align: 0,
                            animate: !1,
                            style: "full-width display-flex justify-content-flex-end",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "5"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(x, {
                            enabled: !0,
                            extendedProperties: {
                                style: "border-color: #222;"
                            },
                            isDefault: !1,
                            onClick: o(function() {
                                try {
                                    s.Navigation.navigateTo(s.Navigation.generateScreenURL("tradershub", "options", {}), s.Transitions.createTransition(s.Transitions.TransitionAnimation.Fade), null, !0)
                                } catch (a) {
                                    if (a.name !== "RedirectOccurredException") throw a
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
                            text: [g(v("6E1f4sIdD0iz_GdQ_TDn0w#Value", "Go back"))],
                            _idProps: {
                                service: e,
                                uuid: "7"
                            },
                            _widgetRecordProvider: r
                        })))), t.createElement(C, {
                            getOwnerSpan: o(function() {
                                return S.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return S.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                IsLoading: i.variables.isLoadingVar,
                                PageTitle: "Deposits"
                            },
                            events: {
                                _handleError: o(function(a) {
                                    n.handleError(a)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: b
                            },
                            _idProps: {
                                service: e,
                                uuid: "8",
                                alias: "2"
                            },
                            _widgetRecordProvider: r,
                            placeholders: {
                                walletOverlayPageContent: new P(function() {
                                    return [t.createElement(p, {
                                        align: 0,
                                        animate: !1,
                                        style: i.getCachedValue(e.getId("Mc6TfgfTXUqFzyWlAridrw.Style"), function() {
                                            return "display-flex justify-content-space-between align-items-center flex-direction-column gap-m " + (c.isDesktop$Action(d).isDesktopOut ? "margin-top-m" : "margin-top-base")
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
                                        value: s.Injector.resolve(s.ServiceNames.TranslationsService).getMessage("begH1UBRn0aKSQlqBOTzJg#ValueExpression.1013632892.1", "Send only ") + i.variables.currencyVar.nameAttr + " (" + i.variables.currencyVar.codeAttr + ") " + s.Injector.resolve(s.ServiceNames.TranslationsService).getMessage("begH1UBRn0aKSQlqBOTzJg#ValueExpression.-184981001.1", "to this address"),
                                        _idProps: {
                                            service: e,
                                            uuid: "10"
                                        },
                                        _widgetRecordProvider: r
                                    }), t.createElement(p, {
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
                                    }), t.createElement(p, {
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
                                        getOwnerSpan: o(function() {
                                            return S.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: o(function() {
                                            return S.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            Position: _.position.topRight,
                                            Trigger: _.trigger.onClick
                                        },
                                        events: {
                                            _handleError: o(function(a) {
                                                n.handleError(a)
                                            }, "_handleError"),
                                            onToggle$Action: o(function(a, F) {
                                                var k = d.clone();
                                                n.clipboardAction$Action(n.callContext(k))
                                            }, "onToggle$Action")
                                        },
                                        _validationProps: {
                                            validationService: b
                                        },
                                        _idProps: {
                                            service: e,
                                            name: "ClipboardTooltip",
                                            alias: "3"
                                        },
                                        _widgetRecordProvider: r,
                                        placeholders: {
                                            content: new P(function() {
                                                return [t.createElement(x, {
                                                    enabled: !0,
                                                    extendedProperties: {
                                                        style: "background-color: #fff; border-width: 0px;"
                                                    },
                                                    isDefault: !1,
                                                    onClick: o(function() {
                                                        var a = d.clone();
                                                        n.clipboardAction$Action(n.callContext(a))
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
                                                    image: s.Navigation.VersionedURL.getVersionedUrl("img/tradershub.clipboard_bold.svg"),
                                                    type: 0,
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "16"
                                                    },
                                                    _widgetRecordProvider: r
                                                }))]
                                            }),
                                            tooltip: new P(function() {
                                                return [g(v("Lr7hbpVptU2zuSTcnZkrGQ#Value", "Copied"))]
                                            })
                                        },
                                        _dependencies: []
                                    })), t.createElement(p, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "border-radius: 8px;"
                                        },
                                        style: i.getCachedValue(e.getId("DisclaimerMessage.Style"), function() {
                                            return " display-flex align-items-flex-start gap-s background-warning-light " + (c.isDesktop$Action(d).isDesktopOut ? "padding-base" : "padding-s")
                                        }),
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            name: "DisclaimerMessage"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(O, {
                                        image: s.Navigation.VersionedURL.getVersionedUrl("img/tradershub.caution.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "18"
                                        },
                                        _widgetRecordProvider: r
                                    }), t.createElement(p, {
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
                                            return c.isDesktop$Action(d).isDesktopOut ? "font-size-s" : "font-size-xs"
                                        }),
                                        text: [g(v("ZtOd9uYc1UOO3qNrfxQlnA#Value", "To avoid loss of funds:"))],
                                        _idProps: {
                                            service: e,
                                            uuid: "20"
                                        },
                                        _widgetRecordProvider: r
                                    }), t.createElement(y, {
                                        tag: "ul",
                                        _idProps: {
                                            service: e,
                                            uuid: "21"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(y, {
                                        tag: "li",
                                        _idProps: {
                                            service: e,
                                            uuid: "22"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(m, {
                                        style: i.getCachedValue(e.getId("CYOuNT1u_ESRS+iFD5O3JQ.Style"), function() {
                                            return c.isDesktop$Action(d).isDesktopOut ? "font-size-s" : "font-size-xs"
                                        }),
                                        value: s.Injector.resolve(s.ServiceNames.TranslationsService).getMessage("wSFtdOB7B0CnFbTCeoXhaw#ValueExpression.687980612.1", "Only send ") + i.variables.currencyVar.nameAttr + " (" + i.variables.currencyVar.codeAttr + ") " + s.Injector.resolve(s.ServiceNames.TranslationsService).getMessage("wSFtdOB7B0CnFbTCeoXhaw#ValueExpression.-1083206345.1", " to this address."),
                                        _idProps: {
                                            service: e,
                                            uuid: "23"
                                        },
                                        _widgetRecordProvider: r
                                    })), t.createElement(y, {
                                        tag: "li",
                                        _idProps: {
                                            service: e,
                                            uuid: "24"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(m, {
                                        style: i.getCachedValue(e.getId("S6nAczhyqUu2NHtZ1_s2vg.Style"), function() {
                                            return c.isDesktop$Action(d).isDesktopOut ? "font-size-s" : "font-size-xs"
                                        }),
                                        value: s.Injector.resolve(s.ServiceNames.TranslationsService).getMessage("YZhseK4zC0qF09lEfFWJ0A#ValueExpression.-1665609392.1", "Make sure to copy the Deriv ") + i.variables.currencyVar.codeAttr + s.Injector.resolve(s.ServiceNames.TranslationsService).getMessage("YZhseK4zC0qF09lEfFWJ0A#ValueExpression.-1982532655.1", " Wallet address to your crypto wallet."),
                                        _idProps: {
                                            service: e,
                                            uuid: "25"
                                        },
                                        _widgetRecordProvider: r
                                    })), t.createElement(y, {
                                        tag: "li",
                                        _idProps: {
                                            service: e,
                                            uuid: "26"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(f, {
                                        style: i.getCachedValue(e.getId("VdEsO1d1WE+jDaXxwvPUyg.Style"), function() {
                                            return c.isDesktop$Action(d).isDesktopOut ? "font-size-s" : "font-size-xs"
                                        }),
                                        text: [g(v("VdEsO1d1WE+jDaXxwvPUyg#Value", "In your crypto wallet, select the"))],
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
                                            return "font-bold " + (c.isDesktop$Action(d).isDesktopOut ? "font-size-s" : "font-size-xs")
                                        }),
                                        value: i.variables.currencyVar.nameAttr + " (" + i.variables.currencyVar.codeAttr + ") ",
                                        _idProps: {
                                            service: e,
                                            uuid: "28"
                                        },
                                        _widgetRecordProvider: r
                                    }), t.createElement(f, {
                                        style: i.getCachedValue(e.getId("aS0uG5zS+0aboChDFz53Xg.Style"), function() {
                                            return c.isDesktop$Action(d).isDesktopOut ? "font-size-s" : "font-size-xs"
                                        }),
                                        text: [g(v("aS0uG5zS+0aboChDFz53Xg#Value", " network when transferring to Deriv. Incorrect transfers may result in loss of funds."))],
                                        _idProps: {
                                            service: e,
                                            uuid: "29"
                                        },
                                        _widgetRecordProvider: r
                                    }))))), t.createElement(x, {
                                        enabled: !0,
                                        extendedProperties: {
                                            style: "border-color: #272B30; font-size: 14px;"
                                        },
                                        isDefault: !1,
                                        onClick: o(function() {
                                            try {
                                                s.Navigation.navigateTo(s.Navigation.generateScreenURL("tradershub", "wallets/transactions", {}), s.Transitions.createTransition(s.Transitions.TransitionAnimation.Default), null, !0)
                                            } catch (a) {
                                                if (a.name !== "RedirectOccurredException") throw a
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
                                        text: [g(v("VOitC6kJKkW9G1_Ev1yQcA#Value", "View transactions"))],
                                        _idProps: {
                                            service: e,
                                            uuid: "31"
                                        },
                                        _widgetRecordProvider: r
                                    })))]
                                }),
                                mobileFooterContent: P.Empty
                            },
                            _dependencies: [l(i.variables.cryptoAddressVar), l(i.variables.currencyVar.codeAttr), l(i.variables.currencyVar.nameAttr)]
                        })]
                    })
                },
                _dependencies: [l(i.variables.cryptoAddressVar), l(i.variables.currencyVar.codeAttr), l(i.variables.currencyVar.nameAttr), l(i.variables.isLoadingVar), l(i.variables.errorMessageVar), l(i.variables.hasErrorVar)]
            }))
        }
    };
o(u, "View");
var E = u,
    Y = E;
export {
    Y as
    default
};