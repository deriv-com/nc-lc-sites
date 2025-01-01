import {
    a as C
} from "./_oschunk-4QCIRPK2.js";
import {
    a as I
} from "./_oschunk-PJLKL3AI.js";
import "./_oschunk-6AY6CAR2.js";
import {
    a as k
} from "./_oschunk-KPQZA2FQ.js";
import "./_oschunk-QIDNIYQN.js";
import "./_oschunk-FRF3DI3V.js";
import "./_oschunk-26LPX23H.js";
import "./_oschunk-QYZYO3AQ.js";
import "./_oschunk-I4HVSXAZ.js";
import {
    b as y
} from "./_oschunk-G7GFWP74.js";
import "./_oschunk-5ETXRNLC.js";
import "./_oschunk-O5AQVDN2.js";
import "./_oschunk-4SG3ZAXH.js";
import "./_oschunk-MOYCBUII.js";
import "./_oschunk-NYD6CGWS.js";
import "./_oschunk-EROCOLS7.js";
import {
    a as h,
    b as O,
    h as g,
    j as S,
    r as w,
    y as v
} from "./_oschunk-42NACYKQ.js";
import "./_oschunk-2M7PXTSQ.js";
import {
    a as T,
    g as V,
    i as R
} from "./_oschunk-RKYF3TWC.js";
import "./_oschunk-K7AFM7ZW.js";
import {
    a as P
} from "./_oschunk-DOFMR6EA.js";
import {
    l as c
} from "./_oschunk-2ZI4JQLD.js";
import "./_oschunk-IKZJT3AP.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-MSUVGI3L.js";
import {
    ia as W
} from "./_oschunk-2JKANR6M.js";
import {
    c as a,
    g as D
} from "./_oschunk-DVBKI63I.js";
var t = D(T());
var s = W,
    E = R.PlaceholderContent,
    j = R.IteratorPlaceholderContent,
    l = class l extends V.BaseWebScreen {
        static get displayName() {
            return "WalletFlows.WalletsEmailWithdrawal"
        }
        static getAttributes() {
            return {
                codeFunction: "WalletsEmailWithdrawal",
                functionKey: "7be9d81c-fb20-4385-b04b-eeb8c2b2bc72",
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
            return [y, C]
        }
        get modelFactory() {
            return I
        }
        get controllerFactory() {
            return k
        }
        get title() {
            let r = this.model,
                n = this.controller,
                e = this.idService,
                _ = n.validationService,
                i = n.callContext(),
                o = l.asPrimitiveValue,
                b = l.getTranslation,
                u = this;
            return s.Injector.resolve(s.ServiceNames.TranslationsService).getMessage("HNjpeyD7hUOwS+64wrK8cg#TitleExpression.363878613.1", "Withdrawal")
        }
        internalRender() {
            let r = this.model,
                n = this.controller,
                e = this.idService,
                _ = n.validationService,
                i = this.widgetsRecordProvider,
                o = n.callContext(),
                b = l.ifWidget,
                u = l.textWidget,
                f = l.asPrimitiveValue,
                m = l.getTranslation,
                p = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(y, {
                getOwnerSpan: a(function() {
                    return p.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return p.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: a(function(d) {
                        n.handleError(d)
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
                _widgetRecordProvider: i,
                placeholders: {
                    content: new E(function() {
                        return [t.createElement(C, {
                            getOwnerSpan: a(function() {
                                return p.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return p.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                PageTitle: "Withdraw"
                            },
                            events: {
                                _handleError: a(function(d) {
                                    n.handleError(d)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: _
                            },
                            _idProps: {
                                service: e,
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: i,
                            placeholders: {
                                walletOverlayPageContent: new E(function() {
                                    return [t.createElement(g, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex flex-direction-column justify-content-center align-items-center full-width gap-m",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "2"
                                        },
                                        _widgetRecordProvider: i
                                    }, t.createElement(w, {
                                        image: s.Navigation.VersionedURL.getVersionedUrl("img/tradershub.Wallets_email_open.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "3"
                                        },
                                        _widgetRecordProvider: i
                                    }), t.createElement(S, {
                                        gridProperties: {
                                            classes: "ThemeGrid_MarginGutter"
                                        },
                                        style: r.getCachedValue(e.getId("o36UWYv2Pk+4Y50ofLH0qQ.Style"), function() {
                                            return "font-bold text-align-center " + (c.isDesktop$Action(o).isDesktopOut ? "heading5" : "heading4")
                                        }),
                                        value: s.Injector.resolve(s.ServiceNames.TranslationsService).getMessage("zr+Y24otRUuERqRRF6uD3g#ValueExpression.-1309903677.1", "We\u2019ve sent a verification link to ") + P.getClientEmail(),
                                        _idProps: {
                                            service: e,
                                            uuid: "4"
                                        },
                                        _widgetRecordProvider: i
                                    }), t.createElement(g, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "border-radius: 8px;"
                                        },
                                        style: r.getCachedValue(e.getId("DisclaimerMessage.Style"), function() {
                                            return "display-flex align-items-flex-start gap-s background-info-light full-width " + (c.isDesktop$Action(o).isDesktopOut ? "padding-base" : "padding-s")
                                        }),
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            name: "DisclaimerMessage"
                                        },
                                        _widgetRecordProvider: i
                                    }, t.createElement(w, {
                                        image: s.Navigation.VersionedURL.getVersionedUrl("img/tradershub.info_blue.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "6"
                                        },
                                        _widgetRecordProvider: i
                                    }), t.createElement(g, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex flex-direction-column",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: i
                                    }, t.createElement(v, {
                                        extendedProperties: {
                                            style: "font-weight: normal;"
                                        },
                                        style: r.getCachedValue(e.getId("J9AcuFIIlU6MShOZq6E87A.Style"), function() {
                                            return c.isDesktop$Action(o).isDesktopOut ? "font-size-s" : "font-size-xs"
                                        }),
                                        text: [u(m("J9AcuFIIlU6MShOZq6E87A#Value", "Didn't get an email? "))],
                                        _idProps: {
                                            service: e,
                                            uuid: "8"
                                        },
                                        _widgetRecordProvider: i
                                    }), t.createElement(h, {
                                        tag: "ul",
                                        _idProps: {
                                            service: e,
                                            uuid: "9"
                                        },
                                        _widgetRecordProvider: i
                                    }, t.createElement(h, {
                                        tag: "li",
                                        _idProps: {
                                            service: e,
                                            uuid: "10"
                                        },
                                        _widgetRecordProvider: i
                                    }, t.createElement(v, {
                                        style: r.getCachedValue(e.getId("zbaMsryyx0OGIc8oR23ebQ.Style"), function() {
                                            return c.isDesktop$Action(o).isDesktopOut ? "font-size-s" : "font-size-xs"
                                        }),
                                        text: [u(m("zbaMsryyx0OGIc8oR23ebQ#Value", "Check your spam folder."))],
                                        _idProps: {
                                            service: e,
                                            uuid: "11"
                                        },
                                        _widgetRecordProvider: i
                                    })), t.createElement(h, {
                                        tag: "li",
                                        _idProps: {
                                            service: e,
                                            uuid: "12"
                                        },
                                        _widgetRecordProvider: i
                                    }, t.createElement(v, {
                                        style: r.getCachedValue(e.getId("KCPMcvEMbUmXYxkMm3yhlQ.Style"), function() {
                                            return c.isDesktop$Action(o).isDesktopOut ? "font-size-s" : "font-size-xs"
                                        }),
                                        text: [u(m("KCPMcvEMbUmXYxkMm3yhlQ#Value", "Make sure the email isn\u2019t blocked by firewalls or filters."))],
                                        _idProps: {
                                            service: e,
                                            uuid: "13"
                                        },
                                        _widgetRecordProvider: i
                                    }))))), t.createElement(g, {
                                        align: 0,
                                        animate: !0,
                                        visible: r.getCachedValue(e.getId("NwZj05_ymECX6KG_nJcLgw.Visible"), function() {
                                            return c.isDesktop$Action(o).isDesktopOut
                                        }),
                                        _idProps: {
                                            service: e,
                                            uuid: "14"
                                        },
                                        _widgetRecordProvider: i
                                    }, t.createElement(O, {
                                        enabled: r.variables.timeLeftVar.lte(s.BuiltinFunctions.integerToDecimal(0)),
                                        isDefault: !1,
                                        onClick: a(function() {
                                            return Promise.resolve().then(function() {
                                                var d = o.clone();
                                                return n.resendEmailOnClick$Action(n.callContext(d))
                                            })
                                        }, "onClick"),
                                        style: "btn",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "15"
                                        },
                                        _widgetRecordProvider: i
                                    }, t.createElement(v, {
                                        extendedProperties: {
                                            style: "font-size: 14px;"
                                        },
                                        text: [u(m("O18Kb8B3Okubauj7vIrrPg#Value", "Resend email"))],
                                        _idProps: {
                                            service: e,
                                            uuid: "16"
                                        },
                                        _widgetRecordProvider: i
                                    }), b(r.variables.timeLeftVar.gt(s.BuiltinFunctions.integerToDecimal(0)), !1, this, function() {
                                        return [t.createElement(S, {
                                            gridProperties: {
                                                marginLeft: "0"
                                            },
                                            value: " in " + s.BuiltinFunctions.decimalToText(r.variables.timeLeftVar) + "s",
                                            _idProps: {
                                                service: e,
                                                uuid: "17"
                                            },
                                            _widgetRecordProvider: i
                                        })]
                                    }, function() {
                                        return []
                                    }))))]
                                }),
                                mobileFooterContent: new E(function() {
                                    return [t.createElement(g, {
                                        align: 0,
                                        animate: !1,
                                        style: "padding-base",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "18"
                                        },
                                        _widgetRecordProvider: i
                                    }, t.createElement(O, {
                                        enabled: r.variables.timeLeftVar.lte(s.BuiltinFunctions.integerToDecimal(0)),
                                        isDefault: !1,
                                        onClick: a(function() {
                                            return Promise.resolve().then(function() {
                                                var d = o.clone();
                                                return n.resendEmailOnClick$Action(n.callContext(d))
                                            })
                                        }, "onClick"),
                                        style: "btn full-width",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "19"
                                        },
                                        _widgetRecordProvider: i
                                    }, u(m("2pC4XGU5MUurWeE_9FgAhA#Value", "Resent email")), b(r.variables.timeLeftVar.gt(s.BuiltinFunctions.integerToDecimal(0)), !1, this, function() {
                                        return [t.createElement(S, {
                                            gridProperties: {
                                                marginLeft: "0"
                                            },
                                            value: " in " + s.BuiltinFunctions.decimalToText(r.variables.timeLeftVar) + "s",
                                            _idProps: {
                                                service: e,
                                                uuid: "20"
                                            },
                                            _widgetRecordProvider: i
                                        })]
                                    }, function() {
                                        return []
                                    })))]
                                })
                            },
                            _dependencies: [f(r.variables.timeLeftVar), f(P.getClientEmail())]
                        })]
                    })
                },
                _dependencies: [f(r.variables.timeLeftVar), f(P.getClientEmail())]
            }))
        }
    };
a(l, "View");
var x = l,
    G = x;
export {
    G as
    default
};