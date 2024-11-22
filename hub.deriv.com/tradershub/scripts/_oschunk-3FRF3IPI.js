import {
    a as C
} from "./_oschunk-DAPNZJVV.js";
import {
    a as x
} from "./_oschunk-E2M2S3NV.js";
import {
    a as h
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
    a as R,
    b as O,
    h as d,
    j as y,
    v as W,
    y as g
} from "./_oschunk-HUOHOHZB.js";
import "./_oschunk-Y45M2O2K.js";
import {
    a as D,
    g as w,
    i as p
} from "./_oschunk-6LASTRK7.js";
import "./_oschunk-TIJZDWYD.js";
import "./_oschunk-27GDEXUT.js";
import "./_oschunk-D2MH3QEK.js";
import "./_oschunk-WJ75ZXAT.js";
import "./_oschunk-3WNR72F6.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-HQOLQB4T.js";
import {
    ia as _
} from "./_oschunk-NTQBNJ73.js";
import {
    c as a,
    g as F
} from "./_oschunk-DVBKI63I.js";
var e = F(D());
var u = _,
    P = p.PlaceholderContent,
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
            return [f, h]
        }
        get modelFactory() {
            return C
        }
        get controllerFactory() {
            return x
        }
        get title() {
            let i = this.model,
                s = this.controller,
                t = this.idService,
                m = s.validationService,
                r = s.callContext(),
                E = o.asPrimitiveValue,
                V = o.getTranslation,
                v = this;
            return "Deposit"
        }
        internalRender() {
            let i = this.model,
                s = this.controller,
                t = this.idService,
                m = s.validationService,
                r = this.widgetsRecordProvider,
                E = s.callContext(),
                V = o.ifWidget,
                v = o.textWidget,
                l = o.asPrimitiveValue,
                S = o.getTranslation,
                c = this;
            return e.createElement("div", this.getRootNodeProperties(), e.createElement(f, {
                getOwnerSpan: a(function() {
                    return c.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return c.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: a(function(n) {
                        s.handleError(n)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: m
                },
                _idProps: {
                    service: t,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: r,
                placeholders: {
                    content: new P(function() {
                        return [e.createElement(W, {
                            showPopup: i.variables.hasErrorVar,
                            style: "popup-dialog",
                            _idProps: {
                                service: t,
                                uuid: "1"
                            },
                            _widgetRecordProvider: r
                        }, e.createElement(d, {
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
                            text: [v(S("eor0I88PGUy7f21cKU12CQ#Value", "Error"))],
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
                        })), e.createElement(d, {
                            align: 0,
                            animate: !1,
                            style: "full-width display-flex justify-content-flex-end",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "5"
                            },
                            _widgetRecordProvider: r
                        }, e.createElement(O, {
                            enabled: !0,
                            extendedProperties: {
                                style: "border-color: #222;"
                            },
                            isDefault: !1,
                            onClick: a(function() {
                                try {
                                    u.Navigation.navigateTo(u.Navigation.generateScreenURL("tradershub", "options", {}), u.Transitions.createTransition(u.Transitions.TransitionAnimation.Fade), null, !0)
                                } catch (n) {
                                    if (n.name !== "RedirectOccurredException") throw n
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
                            text: [v(S("NmldUu41m0mfpe1MMwXCKQ#Value", "Go back"))],
                            _idProps: {
                                service: t,
                                uuid: "7"
                            },
                            _widgetRecordProvider: r
                        })))), e.createElement(h, {
                            getOwnerSpan: a(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                HideBackButton: !0,
                                IsLoading: i.variables.isLoadingVar,
                                PageTitle: "Deposit"
                            },
                            events: {
                                _handleError: a(function(n) {
                                    s.handleError(n)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: m
                            },
                            _idProps: {
                                service: t,
                                uuid: "8",
                                alias: "2"
                            },
                            _widgetRecordProvider: r,
                            placeholders: {
                                walletOverlayPageContent: new P(function() {
                                    return [e.createElement(d, {
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
                                mobileFooterContent: P.Empty
                            },
                            _dependencies: [l(i.variables.iFrameURLVar)]
                        })]
                    })
                },
                _dependencies: [l(i.variables.iFrameURLVar), l(i.variables.isLoadingVar), l(i.variables.errorMessageVar), l(i.variables.hasErrorVar)]
            }))
        }
    };
a(o, "View");
var b = o,
    Q = b;
export {
    Q as
    default
};