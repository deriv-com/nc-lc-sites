import {
    a as C
} from "./_oschunk-DAPNZJVV.js";
import {
    a as x
} from "./_oschunk-XXSNSDHC.js";
import {
    a as P
} from "./_oschunk-6LHMKEZD.js";
import "./_oschunk-IDZWQMUL.js";
import "./_oschunk-4HOLBSDB.js";
import "./_oschunk-VLOO5HJV.js";
import "./_oschunk-IQUI5AIQ.js";
import "./_oschunk-FVTZGXVK.js";
import "./_oschunk-GDCJSJP3.js";
import {
    a as f
} from "./_oschunk-ODSHDLTB.js";
import "./_oschunk-HBEXL7KK.js";
import "./_oschunk-GEKOGHNU.js";
import "./_oschunk-SW7FWAXZ.js";
import "./_oschunk-BHZNFATE.js";
import {
    a as R,
    b as W,
    h as u,
    j as y,
    v as O,
    y as g
} from "./_oschunk-WAXNMQCP.js";
import "./_oschunk-LHY3WMNC.js";
import {
    a as T,
    g as w,
    i as p
} from "./_oschunk-J7LCUWB3.js";
import "./_oschunk-ESOYZIPG.js";
import "./_oschunk-XMOR6XCC.js";
import "./_oschunk-H7UK4VZM.js";
import "./_oschunk-JSVFHRDW.js";
import "./_oschunk-LUKJNVXR.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-44PT7RP7.js";
import {
    ia as _
} from "./_oschunk-NTQBNJ73.js";
import {
    c as a,
    g as F
} from "./_oschunk-DVBKI63I.js";
var e = F(T());
var s = _,
    h = p.PlaceholderContent,
    H = p.IteratorPlaceholderContent,
    o = class o extends w.BaseWebScreen {
        static get displayName() {
            return "WalletFlows.WalletsFiatDeposit"
        }
        static getAttributes() {
            return {
                codeFunction: "WalletsFiatDeposit",
                functionKey: "625a13c9-6ece-450c-87b5-6482a1def74b",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.WalletFlows.WalletsFiatDeposit.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [f, P]
        }
        get modelFactory() {
            return C
        }
        get controllerFactory() {
            return x
        }
        get title() {
            let i = this.model,
                n = this.controller,
                t = this.idService,
                v = n.validationService,
                r = n.callContext(),
                E = o.asPrimitiveValue,
                V = o.getTranslation,
                m = this;
            return s.Injector.resolve(s.ServiceNames.TranslationsService).getMessage("yRNaYs5uDEWHtWSCod73Sw#TitleExpression.-1075859842.1", "Deposit")
        }
        internalRender() {
            let i = this.model,
                n = this.controller,
                t = this.idService,
                v = n.validationService,
                r = this.widgetsRecordProvider,
                E = n.callContext(),
                V = o.ifWidget,
                m = o.textWidget,
                c = o.asPrimitiveValue,
                b = o.getTranslation,
                d = this;
            return e.createElement("div", this.getRootNodeProperties(), e.createElement(f, {
                getOwnerSpan: a(function() {
                    return d.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return d.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: a(function(l) {
                        n.handleError(l)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: v
                },
                _idProps: {
                    service: t,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: r,
                placeholders: {
                    content: new h(function() {
                        return [e.createElement(O, {
                            showPopup: i.variables.hasErrorVar,
                            style: "popup-dialog",
                            _idProps: {
                                service: t,
                                uuid: "1"
                            },
                            _widgetRecordProvider: r
                        }, e.createElement(u, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "2"
                            },
                            _widgetRecordProvider: r
                        }, e.createElement(g, {
                            style: "font-bold font-size-h3 margin-bottom-s",
                            text: [m(b("eor0I88PGUy7f21cKU12CQ#Value", "Error"))],
                            _idProps: {
                                service: t,
                                uuid: "3"
                            },
                            _widgetRecordProvider: r
                        }), e.createElement(y, {
                            gridProperties: {
                                marginLeft: "0px"
                            },
                            style: "display-flex flex-direction-column margin-bottom-base",
                            value: i.variables.errorMessageVar,
                            _idProps: {
                                service: t,
                                uuid: "4"
                            },
                            _widgetRecordProvider: r
                        })), e.createElement(u, {
                            align: 0,
                            animate: !1,
                            style: "full-width display-flex justify-content-flex-end",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "5"
                            },
                            _widgetRecordProvider: r
                        }, e.createElement(W, {
                            enabled: !0,
                            extendedProperties: {
                                style: "border-color: #222;"
                            },
                            isDefault: !1,
                            onClick: a(function() {
                                try {
                                    s.Navigation.navigateTo(s.Navigation.generateScreenURL("tradershub", "options", {}), s.Transitions.createTransition(s.Transitions.TransitionAnimation.Fade), null, !0)
                                } catch (l) {
                                    if (l.name !== "RedirectOccurredException") throw l
                                }
                            }, "onClick"),
                            style: "btn",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "6"
                            },
                            _widgetRecordProvider: r
                        }, e.createElement(g, {
                            extendedProperties: {
                                style: "color: #222;"
                            },
                            text: [m(b("NmldUu41m0mfpe1MMwXCKQ#Value", "Go back"))],
                            _idProps: {
                                service: t,
                                uuid: "7"
                            },
                            _widgetRecordProvider: r
                        })))), e.createElement(P, {
                            getOwnerSpan: a(function() {
                                return d.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return d.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                HideBackButton: !0,
                                IsLoading: i.variables.isLoadingVar,
                                PageTitle: s.Injector.resolve(s.ServiceNames.TranslationsService).getMessage("5W6RPzXMB02rBNpMInyjsw#Value.-1075859842.1", "Deposit")
                            },
                            events: {
                                _handleError: a(function(l) {
                                    n.handleError(l)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: v
                            },
                            _idProps: {
                                service: t,
                                uuid: "8",
                                alias: "2"
                            },
                            _widgetRecordProvider: r,
                            placeholders: {
                                walletOverlayPageContent: new h(function() {
                                    return [e.createElement(u, {
                                        align: 0,
                                        animate: !1,
                                        style: "full-width",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "IframeContainer"
                                        },
                                        _widgetRecordProvider: r
                                    }, e.createElement(R, {
                                        extendedProperties: {
                                            src: i.variables.iFrameURLVar
                                        },
                                        tag: "iframe",
                                        _idProps: {
                                            service: t,
                                            name: "DepositIframe"
                                        },
                                        _widgetRecordProvider: r
                                    }))]
                                }),
                                mobileFooterContent: h.Empty
                            },
                            _dependencies: [c(i.variables.iFrameURLVar)]
                        })]
                    })
                },
                _dependencies: [c(i.variables.iFrameURLVar), c(i.variables.isLoadingVar), c(i.variables.errorMessageVar), c(i.variables.hasErrorVar)]
            }))
        }
    };
a(o, "View");
var S = o,
    z = S;
export {
    z as
    default
};