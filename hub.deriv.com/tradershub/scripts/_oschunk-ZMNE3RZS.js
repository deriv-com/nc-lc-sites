import {
    a as C
} from "./_oschunk-PP7KEP36.js";
import {
    a as E
} from "./_oschunk-CMOMKMXO.js";
import {
    a as w
} from "./_oschunk-M2HM6MS3.js";
import "./_oschunk-QIDNIYQN.js";
import "./_oschunk-ESAL6IS4.js";
import "./_oschunk-FRF3DI3V.js";
import "./_oschunk-26LPX23H.js";
import "./_oschunk-QYZYO3AQ.js";
import "./_oschunk-I4HVSXAZ.js";
import {
    b as S
} from "./_oschunk-G7GFWP74.js";
import "./_oschunk-5ETXRNLC.js";
import "./_oschunk-O5AQVDN2.js";
import "./_oschunk-4SG3ZAXH.js";
import "./_oschunk-MOYCBUII.js";
import "./_oschunk-NYD6CGWS.js";
import {
    a as y
} from "./_oschunk-ALAP5CBN.js";
import "./_oschunk-QVXOCHAU.js";
import "./_oschunk-EROCOLS7.js";
import {
    b as W,
    h as o,
    r as v,
    y as u
} from "./_oschunk-42NACYKQ.js";
import "./_oschunk-2M7PXTSQ.js";
import {
    a as T,
    g as x,
    i as P
} from "./_oschunk-RKYF3TWC.js";
import "./_oschunk-K7AFM7ZW.js";
import "./_oschunk-DOFMR6EA.js";
import {
    l as _
} from "./_oschunk-2ZI4JQLD.js";
import "./_oschunk-IKZJT3AP.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-MSUVGI3L.js";
import {
    ia as O
} from "./_oschunk-2JKANR6M.js";
import {
    c as i,
    g as D
} from "./_oschunk-DVBKI63I.js";
var t = D(T());
var d = O,
    b = P.PlaceholderContent,
    K = P.IteratorPlaceholderContent,
    n = class n extends x.BaseWebScreen {
        static get displayName() {
            return "WalletFlows.WalletsFiatOnRampDeposit"
        }
        static getAttributes() {
            return {
                codeFunction: "WalletsFiatOnRampDeposit",
                functionKey: "edba8971-f205-4b6b-abd5-ec44b6dbad5a",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.WalletFlows.WalletsFiatOnRampDeposit.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [S, w, y]
        }
        get modelFactory() {
            return C
        }
        get controllerFactory() {
            return E
        }
        get title() {
            let a = this.model,
                s = this.controller,
                e = this.idService,
                m = s.validationService,
                r = s.callContext(),
                f = n.asPrimitiveValue,
                V = n.getTranslation,
                g = this;
            return d.Injector.resolve(d.ServiceNames.TranslationsService).getMessage("cYm67QXya0ur1exEttutWg#TitleExpression.-1075859842.1", "Deposit")
        }
        internalRender() {
            let a = this.model,
                s = this.controller,
                e = this.idService,
                m = s.validationService,
                r = this.widgetsRecordProvider,
                f = s.callContext(),
                V = n.ifWidget,
                g = n.textWidget,
                p = n.asPrimitiveValue,
                h = n.getTranslation,
                c = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(S, {
                getOwnerSpan: i(function() {
                    return c.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: i(function() {
                    return c.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: i(function(l) {
                        s.handleError(l)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: m
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: r,
                placeholders: {
                    content: new b(function() {
                        return [t.createElement(w, {
                            getOwnerSpan: i(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: i(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                PageTitle: d.Injector.resolve(d.ServiceNames.TranslationsService).getMessage("nlhlYFZx8UeLRZYfbMO2Ew#Value.-1075859842.1", "Deposit"),
                                HideBackButton: !1
                            },
                            events: {
                                _handleError: i(function(l) {
                                    s.handleError(l)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: m
                            },
                            _idProps: {
                                service: e,
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: r,
                            placeholders: {
                                walletOverlayPageContent: new b(function() {
                                    return [t.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        style: "wallet-fiat-onramp-content",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            name: "MainWrapper"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(u, {
                                        extendedProperties: {
                                            style: "font-size: 16px;"
                                        },
                                        style: "font-bold",
                                        text: [g(h("1j4prjO3B0eLco4M5zq4zw#Value", "Choose a deposit method"))],
                                        _idProps: {
                                            service: e,
                                            uuid: "3"
                                        },
                                        _widgetRecordProvider: r
                                    }), t.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "border-color: #DEE2E6; border-radius: 8px; border-style: solid; border-width: 1px; color: #222;"
                                        },
                                        style: a.getCachedValue(e.getId("BanxaCard.Style"), function() {
                                            return "full-width display-flex gap-xs padding-base display-flex align-items-flex-start gap-base " + (_.isDesktop$Action(f).isDesktopOut ? "flex-direction-row" : "flex-direction-column")
                                        }),
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            name: "BanxaCard"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(v, {
                                        image: d.Navigation.VersionedURL.getVersionedUrl("img/tradershub.banxa.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "5"
                                        },
                                        _widgetRecordProvider: r
                                    }), t.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "6"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(u, {
                                        extendedProperties: {
                                            style: "font-size: 12px;"
                                        },
                                        text: [g(h("gXsNRFN1nU2i1pOS5Gt18w#Value", "Banxa is a fast, secure service for fiat-to-crypto payments. Deposit cryptocurrencies with credit/debit cards or bank transfers from around the world."))],
                                        _idProps: {
                                            service: e,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: r
                                    }), t.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "margin-top: 8px;"
                                        },
                                        style: "display-flex justify-content-space-between",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "8"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex column-gap-xs",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "9"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(v, {
                                        image: d.Navigation.VersionedURL.getVersionedUrl("img/tradershub.apple_pay.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "10"
                                        },
                                        _widgetRecordProvider: r
                                    }), t.createElement(v, {
                                        gridProperties: {
                                            classes: "ThemeGrid_MarginGutter"
                                        },
                                        image: d.Navigation.VersionedURL.getVersionedUrl("img/tradershub.mastercard.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "11"
                                        },
                                        _widgetRecordProvider: r
                                    }), t.createElement(v, {
                                        gridProperties: {
                                            classes: "ThemeGrid_MarginGutter"
                                        },
                                        image: d.Navigation.VersionedURL.getVersionedUrl("img/tradershub.visa.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "12"
                                        },
                                        _widgetRecordProvider: r
                                    })), t.createElement(y, {
                                        getOwnerSpan: i(function() {
                                            return c.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: i(function() {
                                            return c.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            IsLoading: a.variables.isLoadingVar,
                                            ShowLabelOnLoading: !0
                                        },
                                        events: {
                                            _handleError: i(function(l) {
                                                s.handleError(l)
                                            }, "_handleError")
                                        },
                                        _validationProps: {
                                            validationService: m
                                        },
                                        _idProps: {
                                            service: e,
                                            uuid: "13",
                                            alias: "3"
                                        },
                                        _widgetRecordProvider: r,
                                        placeholders: {
                                            button: new b(function() {
                                                return [t.createElement(W, {
                                                    enabled: !a.variables.isDisabledVar,
                                                    gridProperties: {
                                                        classes: "OSFillParent"
                                                    },
                                                    isDefault: !1,
                                                    onClick: i(function() {
                                                        return Promise.resolve().then(function() {
                                                            var l = f.clone();
                                                            return s.depositOnClick$Action(s.callContext(l))
                                                        })
                                                    }, "onClick"),
                                                    style: "btn btn-primary btn-small",
                                                    visible: !0,
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "14"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, t.createElement(o, {
                                                    align: 0,
                                                    animate: !1,
                                                    style: "osui-btn-loading__spinner-animation",
                                                    visible: !0,
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "15"
                                                    },
                                                    _widgetRecordProvider: r
                                                }), t.createElement(u, {
                                                    extendedProperties: {
                                                        style: "height: 12px;"
                                                    },
                                                    text: ["Deposit"],
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "16"
                                                    },
                                                    _widgetRecordProvider: r
                                                }))]
                                            })
                                        },
                                        _dependencies: [p(a.variables.isDisabledVar)]
                                    })))), t.createElement(o, {
                                        align: 0,
                                        animate: !0,
                                        visible: a.getCachedValue(e.getId("UuSaM2TWbE6H_QVb8Kh7JA.Visible"), function() {
                                            return _.isDesktop$Action(f).isDesktopOut
                                        }),
                                        _idProps: {
                                            service: e,
                                            uuid: "17"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(u, {
                                        extendedProperties: {
                                            style: "color: #6A7178; font-size: 12px;"
                                        },
                                        style: "wallet-fiat-onramp-message",
                                        text: [g(h("BmOvDM51wUer1gBWKjA2eA#Value", "Fiat-to-crypto lets you fund your Deriv crypto Wallet(s). The above listed are third-party exchanges, so you'll need to create an account with them to use their services."))],
                                        _idProps: {
                                            service: e,
                                            uuid: "18"
                                        },
                                        _widgetRecordProvider: r
                                    })))]
                                }),
                                mobileFooterContent: new b(function() {
                                    return [t.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        style: "padding-base",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "19"
                                        },
                                        _widgetRecordProvider: r
                                    }, t.createElement(u, {
                                        extendedProperties: {
                                            style: "color: #6A7178; font-size: 12px;"
                                        },
                                        style: "wallet-fiat-onramp-message",
                                        text: [g(h("yKJ5BTxlZ0+SY556pcWLQA#Value", "Fiat-to-crypto lets you fund your Deriv crypto Wallet(s). The above listed are third-party exchanges, so you'll need to create an account with them to use their services."))],
                                        _idProps: {
                                            service: e,
                                            uuid: "20"
                                        },
                                        _widgetRecordProvider: r
                                    }))]
                                })
                            },
                            _dependencies: [p(a.variables.isDisabledVar), p(a.variables.isLoadingVar)]
                        })]
                    })
                },
                _dependencies: [p(a.variables.isDisabledVar), p(a.variables.isLoadingVar)]
            }))
        }
    };
i(n, "View");
var R = n,
    $ = R;
export {
    $ as
    default
};