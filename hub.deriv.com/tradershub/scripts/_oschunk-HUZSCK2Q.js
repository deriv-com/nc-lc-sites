import {
    a as N
} from "./_oschunk-7ULIXNLP.js";
import {
    a as J,
    b as q
} from "./_oschunk-JH2WMMWY.js";
import "./_oschunk-V3FFUWJG.js";
import {
    a as K
} from "./_oschunk-2TRPBQ3W.js";
import "./_oschunk-IQUI5AIQ.js";
import "./_oschunk-UHVNGUMG.js";
import {
    a as D
} from "./_oschunk-7DMOHYBT.js";
import "./_oschunk-MAFTJFMD.js";
import {
    a as I
} from "./_oschunk-ODSHDLTB.js";
import "./_oschunk-PSUEQKJH.js";
import "./_oschunk-WER75YAS.js";
import "./_oschunk-BY4KTNYI.js";
import "./_oschunk-HBEXL7KK.js";
import "./_oschunk-GEKOGHNU.js";
import "./_oschunk-SW7FWAXZ.js";
import "./_oschunk-BHZNFATE.js";
import {
    b as R,
    h as a,
    j as x,
    k as F,
    l as G,
    r as g,
    u as j,
    v as Z,
    y as m
} from "./_oschunk-WAXNMQCP.js";
import {
    a as $
} from "./_oschunk-LHY3WMNC.js";
import {
    a as M,
    g as S,
    i as W
} from "./_oschunk-J7LCUWB3.js";
import "./_oschunk-ESOYZIPG.js";
import {
    a as l,
    d as z
} from "./_oschunk-XMOR6XCC.js";
import {
    a as b
} from "./_oschunk-H7UK4VZM.js";
import "./_oschunk-JSVFHRDW.js";
import "./_oschunk-LUKJNVXR.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-44PT7RP7.js";
import {
    ia as E
} from "./_oschunk-NTQBNJ73.js";
import {
    c as s,
    g as B
} from "./_oschunk-DVBKI63I.js";
var r = B(M());
var _ = B(M());
var Q = {};
var O = E; {
    let i = class i extends O.Controller.BaseViewController {
        constructor(e, p, t) {
            super(e, p, t, Q);
            var c = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onClose$Action() {
            return this.hasOwnProperty("__onClose$Action") || (this.__onClose$Action = function(e) {
                var p = this.model,
                    t = this.controller,
                    c = this.idService;
                return O.Logger.startActiveSpan("OnClose", function(u) {
                    u && (u.setAttribute("code.function", "OnClose"), u.setAttribute("outsystems.function.key", "c3a5b38f-fb48-43de-a945-9e4877175cf9"), u.setAttribute("outsystems.function.owner.name", "tradershub"), u.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnClose"), e = t.callContext(e), p.variables.showPopupIn = !1
                    } finally {
                        u && u.end()
                    }
                }, 1)
            }), this.__onClose$Action
        }
        set _onClose$Action(e) {
            this.__onClose$Action = e
        }
        onClose$Action(e) {
            var p = this.controller;
            return O.Logger.startActiveSpan("OnClose__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnClose"), t.setAttribute("outsystems.function.key", "c3a5b38f-fb48-43de-a945-9e4877175cf9"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return p.safeExecuteClientAction(p._onClose$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get depositEvent$Action() {
            return this.hasOwnProperty("_depositEvent$Action") || (this._depositEvent$Action = function() {
                return Promise.resolve()
            }), this._depositEvent$Action
        }
        set depositEvent$Action(e) {
            this._depositEvent$Action = e
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = null), this._onReadyEventHandler
        }
        set onReadyEventHandler(e) {
            this._onReadyEventHandler = e
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(e) {
            this._onRenderEventHandler = e
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = null), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(e) {
            this._onDestroyEventHandler = e
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(e) {
            this._onParametersChangedEventHandler = e
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(e) {
                return controller.handleError(e)
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return z.defaultTimeout
        }
    };
    s(i, "ControllerInner");
    let T = i;
    X = T
}
var X, Y = new O.Controller.ControllerFactory(X, $);
var A = E,
    _e = W.PlaceholderContent,
    he = W.IteratorPlaceholderContent,
    C = class C extends S.BaseWebBlock {
        static get displayName() {
            return "WalletBlocks.NewWalletPopup"
        }
        static getAttributes() {
            return {
                codeFunction: "NewWalletPopup",
                functionKey: "abcefda9-9aa5-46cf-8691-25a34e1f92ba",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.WalletBlocks.NewWalletPopup.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return J
        }
        get controllerFactory() {
            return Y
        }
        get title() {
            return ""
        }
        internalRender() {
            let i = this.model,
                o = this.controller,
                e = this.idService,
                p = o.validationService,
                t = this.widgetsRecordProvider,
                c = o.callContext(),
                u = C.ifWidget,
                f = C.textWidget,
                v = C.asPrimitiveValue,
                h = C.getTranslation,
                y = this;
            return _.createElement("div", this.getRootNodeProperties(), _.createElement(Z, {
                extendedProperties: {
                    style: "margin-left: 0px; margin-right: 0px;"
                },
                showPopup: i.variables.showPopupIn,
                style: "popup-dialog wallet-popup",
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t,
                showPopup_dataFetchStatus: A.Model.calculateDataFetchStatus(i.variables._showPopupInDataFetchStatus)
            }, _.createElement(a, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: s(function() {
                        var n = c.clone();
                        o.onClose$Action(o.callContext(n))
                    }, "onClick")
                },
                style: "header-container",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "CloseModal"
                },
                _widgetRecordProvider: t
            }, _.createElement(m, {
                extendedProperties: {
                    style: "color: #101213; font-size: 20px; font-weight: bold;"
                },
                style: "header-title",
                text: ["New wallet"],
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            }), _.createElement(g, {
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                image: A.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneSMClose.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "3"
                },
                _widgetRecordProvider: t
            })), _.createElement(a, {
                align: 0,
                animate: !1,
                style: "content-container",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "Content"
                },
                _widgetRecordProvider: t
            }, _.createElement(g, {
                image: A.Navigation.VersionedURL.getVersionedUrl("img/tradershub.visual.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "5"
                },
                _widgetRecordProvider: t
            }), _.createElement(x, {
                extendedProperties: {
                    style: "color: #101213; font-size: 18px; font-weight: bold;"
                },
                value: "Your " + i.variables.currencyIn + " is ready",
                _idProps: {
                    service: e,
                    uuid: "6"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: A.Model.calculateDataFetchStatus(i.variables._currencyInDataFetchStatus)
            }), _.createElement(m, {
                extendedProperties: {
                    style: "color: #101213; font-size: 16px; margin-top: 8px;"
                },
                text: ["Make a deposit into your new wallet."],
                _idProps: {
                    service: e,
                    uuid: "7"
                },
                _widgetRecordProvider: t
            })), _.createElement(a, {
                align: 0,
                animate: !1,
                style: "button-container",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ActionButtonsContainer"
                },
                _widgetRecordProvider: t
            }, _.createElement(R, {
                enabled: !0,
                gridProperties: {
                    classes: "OSFillParent"
                },
                isDefault: !1,
                onClick: s(function() {
                    var n = c.clone();
                    o.depositEvent$Action(o.callContext(n))
                }, "onClick"),
                style: "btn btn-primary",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "9"
                },
                _widgetRecordProvider: t
            }, "Deposit"), _.createElement(R, {
                enabled: !0,
                extendedProperties: {
                    style: "margin-top: 8px;"
                },
                gridProperties: {
                    classes: "OSFillParent",
                    marginLeft: "0"
                },
                isDefault: !1,
                onClick: s(function() {
                    var n = c.clone();
                    o.onClose$Action(o.callContext(n))
                }, "onClick"),
                style: "btn",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "10"
                },
                _widgetRecordProvider: t
            }, "Maybe later"))))
        }
    };
s(C, "View");
var L = C,
    U = L;
var d = E,
    V = W.PlaceholderContent,
    re = W.IteratorPlaceholderContent,
    w = class w extends S.BaseWebScreen {
        static get displayName() {
            return "WalletFlows.Wallets"
        }
        static getAttributes() {
            return {
                codeFunction: "Wallets",
                functionKey: "1089ee43-f5d0-45b1-99c6-5fafb2195171",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.WalletFlows.Wallets.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [I, D, N, U]
        }
        get modelFactory() {
            return q
        }
        get controllerFactory() {
            return K
        }
        get title() {
            let i = this.model,
                o = this.controller,
                e = this.idService,
                p = o.validationService,
                t = o.callContext(),
                c = w.asPrimitiveValue,
                u = w.getTranslation,
                f = this;
            return d.Injector.resolve(d.ServiceNames.TranslationsService).getMessage("Q+6JEND1sUWZxl+vshlRcQ#TitleExpression.-1511472262.1", "Wallets")
        }
        internalRender() {
            let i = this.model,
                o = this.controller,
                e = this.idService,
                p = o.validationService,
                t = this.widgetsRecordProvider,
                c = o.callContext(),
                u = w.ifWidget,
                f = w.textWidget,
                v = w.asPrimitiveValue,
                h = w.getTranslation,
                y = this;
            return r.createElement("div", this.getRootNodeProperties(), r.createElement(I, {
                getOwnerSpan: s(function() {
                    return y.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return y.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: s(function(n) {
                        o.handleError(n)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: p
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    content: new V(function() {
                        return [r.createElement(a, {
                            align: 0,
                            animate: !1,
                            style: "wallet-heading-container",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "WalletSwitcher"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement(m, {
                            style: "wallet-heading-title",
                            text: [f(h("RQvPFO3D5Ey7wIZANpJN1Q#Value", "My Wallets"))],
                            _idProps: {
                                service: e,
                                uuid: "2"
                            },
                            _widgetRecordProvider: t
                        }), r.createElement(D, {
                            getOwnerSpan: s(function() {
                                return y.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: s(function() {
                                return y.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: s(function(n) {
                                    o.handleError(n)
                                }, "_handleError"),
                                realClickEvent$Action: s(function() {
                                    return Promise.resolve().then(function() {
                                        var n = c.clone();
                                        return o.realClickEvent$Action(o.callContext(n))
                                    })
                                }, "realClickEvent$Action"),
                                demoClickEvent$Action: s(function() {
                                    return Promise.resolve().then(function() {
                                        var n = c.clone();
                                        return o.demoClickEvent$Action(o.callContext(n))
                                    })
                                }, "demoClickEvent$Action")
                            },
                            _validationProps: {
                                validationService: p
                            },
                            _idProps: {
                                service: e,
                                uuid: "3",
                                alias: "2"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })), r.createElement(a, {
                            align: 0,
                            animate: !1,
                            style: i.getCachedValue(e.getId("WalletContent.Style"), function() {
                                return l.getAccountType() === "demo" ? "demo-wallet-container" : "real-wallet-container"
                            }, function() {
                                return l.getAccountType()
                            }),
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "WalletContent"
                            },
                            _widgetRecordProvider: t
                        }, u(i.variables.hasRealAccountVar, !1, this, function() {
                            return []
                        }, function() {
                            return [r.createElement(j, {
                                enabled: !0,
                                extendedProperties: {
                                    style: "text-decoration: none;"
                                },
                                gridProperties: {
                                    classes: "OSFillParent",
                                    marginLeft: "0"
                                },
                                transition: d.Transitions.createTransition(d.Transitions.TransitionAnimation.Default),
                                url: d.Navigation.generateScreenURL("tradershub", "currency-selection", {}),
                                visible: !i.variables.isLoadingVar,
                                _idProps: {
                                    service: e,
                                    uuid: "5"
                                },
                                _widgetRecordProvider: t
                            }, r.createElement(a, {
                                align: 0,
                                animate: !1,
                                style: "demo-blue-container",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    name: "BlueContainer"
                                },
                                _widgetRecordProvider: t
                            }, r.createElement(m, {
                                extendedProperties: {
                                    style: "color: #101213; font-weight: 400;"
                                },
                                text: [f(h("LZPZzxY8NkaLmDTV87g9Dg#Value", "Fill in your account details to make your first deposit."))],
                                _idProps: {
                                    service: e,
                                    uuid: "7"
                                },
                                _widgetRecordProvider: t
                            }), r.createElement(a, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "padding: 0 11px;"
                                },
                                gridProperties: {
                                    marginLeft: "4px"
                                },
                                style: "display-flex align-items-center justify-content-center",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    name: "ChevronIcon"
                                },
                                _widgetRecordProvider: t
                            }, r.createElement(g, {
                                image: d.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_sm.svg"),
                                type: 0,
                                _idProps: {
                                    service: e,
                                    uuid: "9"
                                },
                                _widgetRecordProvider: t
                            }))))]
                        }), r.createElement(a, {
                            align: 0,
                            animate: !1,
                            style: i.getCachedValue(e.getId("LeftContent.Style"), function() {
                                return l.getAccountType() === "demo" ? "demo-wallet-left-side" : "real-wallet-left-side"
                            }, function() {
                                return l.getAccountType()
                            }),
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "LeftContent"
                            },
                            _widgetRecordProvider: t
                        }, u(i.variables.isLoadingVar, !1, this, function() {
                            return [r.createElement(a, {
                                align: 0,
                                animate: !1,
                                style: i.getCachedValue(e.getId("JiaNZUZ0CUuWBhWqTxKG8A.Style"), function() {
                                    return l.getAccountType() === "demo" ? "wallet-header-skeleton-demo skeleton" : "wallet-header-skeleton skeleton"
                                }, function() {
                                    return l.getAccountType()
                                }),
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "11"
                                },
                                _widgetRecordProvider: t
                            })]
                        }, function() {
                            return [r.createElement(a, {
                                align: 0,
                                animate: !1,
                                extendedEvents: {
                                    onClick: s(function() {
                                        var n = c.clone();
                                        o.walletHeaderOnClick$Action(o.callContext(n))
                                    }, "onClick")
                                },
                                style: i.getCachedValue(e.getId("WalletHeader.Style"), function() {
                                    return l.getAccountType() === "demo" ? "wallet-header wallet-header-secondary" : "wallet-header wallet-header-primary"
                                }, function() {
                                    return l.getAccountType()
                                }),
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    name: "WalletHeader"
                                },
                                _widgetRecordProvider: t
                            }, r.createElement(a, {
                                align: 0,
                                animate: !1,
                                style: "wallet-header-info-wrapper",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    name: "WalletHeaderInfoWrapper"
                                },
                                _widgetRecordProvider: t
                            }, r.createElement(a, {
                                align: 0,
                                animate: !1,
                                style: "wallet-header-currency-icon",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "14"
                                },
                                _widgetRecordProvider: t
                            }, u(l.getAccountType() === "demo", !1, this, function() {
                                return [r.createElement(g, {
                                    image: d.Navigation.VersionedURL.getVersionedUrl("img/tradershub.CurrencyDemo2.svg"),
                                    type: 0,
                                    _idProps: {
                                        service: e,
                                        uuid: "15"
                                    },
                                    _widgetRecordProvider: t
                                })]
                            }, function() {
                                return [r.createElement(g, {
                                    type: 1,
                                    url: i.variables.activeWalletVar.iconAttr,
                                    _idProps: {
                                        service: e,
                                        uuid: "16"
                                    },
                                    _widgetRecordProvider: t
                                })]
                            })), r.createElement(a, {
                                align: 0,
                                animate: !1,
                                style: "flex-1",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "17"
                                },
                                _widgetRecordProvider: t
                            }, r.createElement(a, {
                                align: 0,
                                animate: !1,
                                style: "display-flex flex-direction-column",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "18"
                                },
                                _widgetRecordProvider: t
                            }, r.createElement(x, {
                                style: i.getCachedValue(e.getId("IljfK0_NpUW5RvX7JGWhiA.Style"), function() {
                                    return b.isDesktop$Action(c).isDesktopOut ? "font-size-s" : "font-size-xs"
                                }),
                                value: i.getCachedValue(e.getId("IljfK0_NpUW5RvX7JGWhiA.Value"), function() {
                                    return l.getAccountType() === "real" ? i.variables.activeWalletVar.nameAttr : "Demo Wallet"
                                }, function() {
                                    return l.getAccountType()
                                }, function() {
                                    return i.variables.activeWalletVar.nameAttr
                                }),
                                _idProps: {
                                    service: e,
                                    uuid: "19"
                                },
                                _widgetRecordProvider: t
                            }), r.createElement(x, {
                                extendedProperties: {
                                    style: "font-size: 20px;"
                                },
                                gridProperties: {
                                    marginLeft: "0px"
                                },
                                style: "font-bold heading5 full-width",
                                value: i.getCachedValue(e.getId("NRyrsZrrckuxtYYP7_4yQA.Value"), function() {
                                    return l.getAccountType() === "real" ? i.variables.activeWalletVar.formattedBalanceAttr : i.variables.demoAccountBalanceVar
                                }, function() {
                                    return l.getAccountType()
                                }, function() {
                                    return i.variables.activeWalletVar.formattedBalanceAttr
                                }, function() {
                                    return i.variables.demoAccountBalanceVar
                                }),
                                _idProps: {
                                    service: e,
                                    uuid: "20"
                                },
                                _widgetRecordProvider: t
                            }))), r.createElement(a, {
                                align: 0,
                                animate: !1,
                                visible: i.getCachedValue(e.getId("wqyIEkbVhE+nB8e8ExJ9Vg.Visible"), function() {
                                    return !b.isDesktop$Action(c).isDesktopOut && l.getAccountType() === "real"
                                }, function() {
                                    return l.getAccountType()
                                }),
                                _idProps: {
                                    service: e,
                                    uuid: "21"
                                },
                                _widgetRecordProvider: t
                            }, r.createElement(g, {
                                extendedEvents: {
                                    onClick: s(function() {
                                        var n = c.clone();
                                        o.onClick$Action(o.callContext(n))
                                    }, "onClick")
                                },
                                image: d.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_md.svg"),
                                style: "cursor-pointer",
                                type: 0,
                                _idProps: {
                                    service: e,
                                    uuid: "22"
                                },
                                _widgetRecordProvider: t
                            }))), r.createElement(a, {
                                align: 0,
                                animate: !0,
                                style: "wallet-header-actions",
                                visible: i.getCachedValue(e.getId("RealWalletHeaderActions.Visible"), function() {
                                    return l.getAccountType() === "real"
                                }, function() {
                                    return l.getAccountType()
                                }),
                                _idProps: {
                                    service: e,
                                    name: "RealWalletHeaderActions"
                                },
                                _widgetRecordProvider: t
                            }, r.createElement(a, {
                                align: 0,
                                animate: !1,
                                style: "display-flex flex-direction-column align-items-center",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "24"
                                },
                                _widgetRecordProvider: t
                            }, r.createElement(R, {
                                enabled: !0,
                                isDefault: !1,
                                onClick: s(function() {
                                    return Promise.resolve().then(function() {
                                        var n = c.clone();
                                        return o.depositbtnOnClick$Action(o.callContext(n))
                                    })
                                }, "onClick"),
                                style: "wallet-header-btn wallet-header-btn-primary",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    name: "DepositBtn2"
                                },
                                _widgetRecordProvider: t
                            }, r.createElement(g, {
                                image: d.Navigation.VersionedURL.getVersionedUrl("img/tradershub.plussmwhite.svg"),
                                type: 0,
                                _idProps: {
                                    service: e,
                                    uuid: "26"
                                },
                                _widgetRecordProvider: t
                            })), r.createElement(m, {
                                extendedProperties: {
                                    style: "font-size: 12px;"
                                },
                                style: "margin-top-xs",
                                text: [f(h("SpbUlBoceU6jG6hzDX6j6g#Value", "Deposit"))],
                                _idProps: {
                                    service: e,
                                    uuid: "27"
                                },
                                _widgetRecordProvider: t
                            })), r.createElement(a, {
                                align: 0,
                                animate: !1,
                                style: "display-flex flex-direction-column align-items-center margin-x-s",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "28"
                                },
                                _widgetRecordProvider: t
                            }, r.createElement(R, {
                                enabled: !0,
                                extendedProperties: {
                                    style: "border-color: #101213; border-width: 1px; margin-bottom: 0px; margin-right: 0px; margin-top: 0px;"
                                },
                                gridProperties: {
                                    marginLeft: "0px"
                                },
                                isDefault: !1,
                                onClick: s(function() {
                                    return Promise.resolve().then(function() {
                                        var n = c.clone();
                                        return o.withdrawbtnOnClick$Action(o.callContext(n))
                                    })
                                }, "onClick"),
                                style: "wallet-header-btn",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    name: "WithdrawBtn3"
                                },
                                _widgetRecordProvider: t
                            }, r.createElement(g, {
                                image: d.Navigation.VersionedURL.getVersionedUrl("img/tradershub.minussm.svg"),
                                type: 0,
                                _idProps: {
                                    service: e,
                                    uuid: "30"
                                },
                                _widgetRecordProvider: t
                            })), r.createElement(m, {
                                extendedProperties: {
                                    style: "font-size: 12px;"
                                },
                                style: "margin-top-xs",
                                text: [f(h("DTAZ+dCgI0m2OluPNDuNsg#Value", "Withdraw"))],
                                _idProps: {
                                    service: e,
                                    uuid: "31"
                                },
                                _widgetRecordProvider: t
                            })), r.createElement(a, {
                                align: 0,
                                animate: !1,
                                style: "display-flex flex-direction-column align-items-center",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "32"
                                },
                                _widgetRecordProvider: t
                            }, r.createElement(R, {
                                enabled: !0,
                                extendedProperties: {
                                    style: "border-color: #101213; border-width: 1px; padding: 0px 16px 0px 16px;"
                                },
                                isDefault: !1,
                                onClick: s(function() {
                                    try {
                                        d.Navigation.navigateTo(d.Navigation.generateScreenURL("tradershub", "wallets/transfer/:to?", {}), d.Transitions.createTransition(d.Transitions.TransitionAnimation.Default), null, !0)
                                    } catch (n) {
                                        if (n.name !== "RedirectOccurredException") throw n
                                    }
                                }, "onClick"),
                                style: "wallet-header-btn",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    name: "TransferBtn2"
                                },
                                _widgetRecordProvider: t
                            }, r.createElement(g, {
                                extendedProperties: {
                                    style: "color: #222;"
                                },
                                image: d.Navigation.VersionedURL.getVersionedUrl("img/tradershub.arrowuparrowdownsm.svg"),
                                type: 0,
                                _idProps: {
                                    service: e,
                                    uuid: "34"
                                },
                                _widgetRecordProvider: t
                            })), r.createElement(m, {
                                extendedProperties: {
                                    style: "font-size: 12px;"
                                },
                                style: "margin-top-xs",
                                text: [f(h("9_TOkB7S6k+7IU0LwZmXyA#Value", "Transfer"))],
                                _idProps: {
                                    service: e,
                                    uuid: "35"
                                },
                                _widgetRecordProvider: t
                            })), r.createElement(a, {
                                align: 0,
                                animate: !1,
                                visible: i.getCachedValue(e.getId("x7praXqGWUGVMNTNO+Zoqw.Visible"), function() {
                                    return b.isDesktop$Action(c).isDesktopOut
                                }),
                                _idProps: {
                                    service: e,
                                    uuid: "36"
                                },
                                _widgetRecordProvider: t
                            }, r.createElement(g, {
                                extendedEvents: {
                                    onClick: s(function() {
                                        var n = c.clone();
                                        o.onClick$Action(o.callContext(n))
                                    }, "onClick")
                                },
                                image: d.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_md.svg"),
                                style: "cursor-pointer",
                                type: 0,
                                _idProps: {
                                    service: e,
                                    uuid: "37"
                                },
                                _widgetRecordProvider: t
                            }))), r.createElement(a, {
                                align: 0,
                                animate: !0,
                                style: "wallet-header-actions",
                                visible: i.getCachedValue(e.getId("DemoWalletHeaderActions.Visible"), function() {
                                    return l.getAccountType() === "demo"
                                }, function() {
                                    return l.getAccountType()
                                }),
                                _idProps: {
                                    service: e,
                                    name: "DemoWalletHeaderActions"
                                },
                                _widgetRecordProvider: t
                            }, r.createElement(a, {
                                align: 0,
                                animate: !0,
                                style: "display-flex flex-direction-column align-items-center",
                                visible: !i.variables.activeWalletVar.balanceAttr.equals(d.BuiltinFunctions.integerToDecimal(1e4)),
                                _idProps: {
                                    service: e,
                                    uuid: "39"
                                },
                                _widgetRecordProvider: t
                            }, r.createElement(R, {
                                enabled: !0,
                                extendedProperties: {
                                    style: "border-color: #101213; border-width: 1px; padding: 0px 16px 0px 16px;"
                                },
                                isDefault: !1,
                                onClick: s(function() {
                                    return Promise.resolve().then(function() {
                                        var n = c.clone();
                                        return o.resetBalance$Action(o.callContext(n))
                                    })
                                }, "onClick"),
                                style: "wallet-header-btn",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    name: "ResetBalanceBtn"
                                },
                                _widgetRecordProvider: t
                            }, r.createElement(g, {
                                extendedProperties: {
                                    style: "color: #222;"
                                },
                                image: d.Navigation.VersionedURL.getVersionedUrl("img/tradershub.ArrowsRotateSM2.svg"),
                                type: 0,
                                _idProps: {
                                    service: e,
                                    uuid: "41"
                                },
                                _widgetRecordProvider: t
                            })), r.createElement(m, {
                                extendedProperties: {
                                    style: "font-size: 12px;"
                                },
                                style: "margin-top-xs",
                                text: [f(h("I1OguVU0e0q5qa25EEBlYA#Value", "Reset balance"))],
                                _idProps: {
                                    service: e,
                                    uuid: "42"
                                },
                                _widgetRecordProvider: t
                            })), r.createElement(a, {
                                align: 0,
                                animate: !1,
                                style: "display-flex flex-direction-column align-items-center",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "43"
                                },
                                _widgetRecordProvider: t
                            }, r.createElement(R, {
                                enabled: !0,
                                extendedProperties: {
                                    style: "border-color: #101213; border-width: 1px; padding: 0px 16px 0px 16px;"
                                },
                                isDefault: !1,
                                onClick: s(function() {
                                    try {
                                        d.Navigation.navigateTo(d.Navigation.generateScreenURL("tradershub", "wallets/transfer/:to?", {}), d.Transitions.createTransition(d.Transitions.TransitionAnimation.Default), null, !0)
                                    } catch (n) {
                                        if (n.name !== "RedirectOccurredException") throw n
                                    }
                                }, "onClick"),
                                style: "wallet-header-btn",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    name: "TransferBtn4"
                                },
                                _widgetRecordProvider: t
                            }, r.createElement(g, {
                                extendedProperties: {
                                    style: "color: #222;"
                                },
                                image: d.Navigation.VersionedURL.getVersionedUrl("img/tradershub.arrowuparrowdownsm.svg"),
                                type: 0,
                                _idProps: {
                                    service: e,
                                    uuid: "45"
                                },
                                _widgetRecordProvider: t
                            })), r.createElement(m, {
                                extendedProperties: {
                                    style: "font-size: 12px;"
                                },
                                style: "margin-top-xs",
                                text: [f(h("ntQ9jD2Mt0ypULrGyaH1CA#Value", "Transfer"))],
                                _idProps: {
                                    service: e,
                                    uuid: "46"
                                },
                                _widgetRecordProvider: t
                            }))))]
                        }), r.createElement(a, {
                            align: 0,
                            animate: !0,
                            visible: i.getCachedValue(e.getId("MoreWallet.Visible"), function() {
                                return l.getAccountType() !== "demo"
                            }, function() {
                                return l.getAccountType()
                            }),
                            _idProps: {
                                service: e,
                                name: "MoreWallet"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement(m, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: bold;"
                            },
                            text: [f(h("aAttT756MUGHBnojnz64XA#Value", "More wallets"))],
                            _idProps: {
                                service: e,
                                uuid: "48"
                            },
                            _widgetRecordProvider: t
                        }), r.createElement(a, {
                            align: 0,
                            animate: !1,
                            style: "full-width full-height margin-top-base",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "49"
                            },
                            _widgetRecordProvider: t
                        }, u(i.variables.isLoadingVar, !1, this, function() {
                            return [r.createElement(a, {
                                align: 0,
                                animate: !1,
                                style: "wallets-add-more-section",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "50"
                                },
                                _widgetRecordProvider: t
                            }, r.createElement(a, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "border-radius: 8px;"
                                },
                                style: "wallets-add-more-cards wallet-skeleton",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "51"
                                },
                                _widgetRecordProvider: t
                            }), r.createElement(a, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "border-radius: 8px;"
                                },
                                style: "wallets-add-more-cards wallet-skeleton",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "52"
                                },
                                _widgetRecordProvider: t
                            }), r.createElement(a, {
                                align: 0,
                                animate: !0,
                                extendedProperties: {
                                    style: "border-radius: 8px;"
                                },
                                style: "wallets-add-more-cards wallet-skeleton",
                                visible: i.getCachedValue(e.getId("bJTU3G0Khku8gQJaOfEWKg.Visible"), function() {
                                    return b.isDesktop$Action(c).isDesktopOut
                                }),
                                _idProps: {
                                    service: e,
                                    uuid: "53"
                                },
                                _widgetRecordProvider: t
                            }), r.createElement(a, {
                                align: 0,
                                animate: !0,
                                extendedProperties: {
                                    style: "border-radius: 8px;"
                                },
                                style: "wallets-add-more-cards wallet-skeleton",
                                visible: i.getCachedValue(e.getId("gdebbk9vNE6L8v_ARTiquQ.Visible"), function() {
                                    return b.isDesktop$Action(c).isDesktopOut
                                }),
                                _idProps: {
                                    service: e,
                                    uuid: "54"
                                },
                                _widgetRecordProvider: t
                            }), r.createElement(a, {
                                align: 0,
                                animate: !0,
                                extendedProperties: {
                                    style: "border-radius: 8px;"
                                },
                                style: "wallets-add-more-cards wallet-skeleton",
                                visible: i.getCachedValue(e.getId("v86qg19dj0eucJk8zdZHXg.Visible"), function() {
                                    return b.isDesktop$Action(c).isDesktopOut
                                }),
                                _idProps: {
                                    service: e,
                                    uuid: "55"
                                },
                                _widgetRecordProvider: t
                            }), r.createElement(a, {
                                align: 0,
                                animate: !0,
                                extendedProperties: {
                                    style: "border-radius: 8px;"
                                },
                                style: "wallets-add-more-cards wallet-skeleton",
                                visible: i.getCachedValue(e.getId("dyGoen9pBkOb9H444kcwqg.Visible"), function() {
                                    return b.isDesktop$Action(c).isDesktopOut
                                }),
                                _idProps: {
                                    service: e,
                                    uuid: "56"
                                },
                                _widgetRecordProvider: t
                            }))]
                        }, function() {
                            return [r.createElement(F, {
                                animateItems: !0,
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                mode: 0,
                                source: i.variables.deserializeAddMoreWalletsListVar,
                                style: "wallets-add-more-section",
                                tag: "div",
                                _idProps: {
                                    service: e,
                                    uuid: "57"
                                },
                                _widgetRecordProvider: t,
                                placeholders: {
                                    content: new re(function(n, P) {
                                        return [r.createElement(G, {
                                            extendedProperties: {
                                                style: "border-color: #F1F3F5; border-radius: 8px; border-style: solid; border-width: 1px; font-size: 12px; font-weight: normal;"
                                            },
                                            style: '"list-item"',
                                            triggerActionOnFullSwipeLeft: !0,
                                            triggerActionOnFullSwipeRight: !0,
                                            _idProps: {
                                                service: n,
                                                name: "ListItem1"
                                            },
                                            _widgetRecordProvider: t,
                                            placeholders: {
                                                leftActions: V.Empty,
                                                content: new V(function() {
                                                    return [u(i.variables.deserializeAddMoreWalletsListVar.getCurrent(P.iterationContext).is_addedAttr, !1, this, function() {
                                                        return [r.createElement(a, {
                                                            align: 0,
                                                            animate: !1,
                                                            extendedEvents: {
                                                                onClick: s(function() {
                                                                    return Promise.resolve().then(function() {
                                                                        var k = P.clone();
                                                                        return o.onAddedWalletClick$Action(o.callContext(k))
                                                                    })
                                                                }, "onClick")
                                                            },
                                                            style: "background-neutral-1 padding-base display-flex flex-direction-column gap-base wallets-add-more-cards cursor-pointer",
                                                            visible: !0,
                                                            _idProps: {
                                                                service: n,
                                                                uuid: "59"
                                                            },
                                                            _widgetRecordProvider: t
                                                        }, r.createElement(a, {
                                                            align: 0,
                                                            animate: !1,
                                                            style: "display-flex justify-content-space-between align-items-center",
                                                            visible: !0,
                                                            _idProps: {
                                                                service: n,
                                                                uuid: "60"
                                                            },
                                                            _widgetRecordProvider: t
                                                        }, r.createElement(g, {
                                                            extendedProperties: {
                                                                style: "height: 24px;"
                                                            },
                                                            gridProperties: {
                                                                width: "24px"
                                                            },
                                                            type: 1,
                                                            url: i.variables.deserializeAddMoreWalletsListVar.getCurrent(P.iterationContext).iconAttr,
                                                            _idProps: {
                                                                service: n,
                                                                uuid: "61"
                                                            },
                                                            _widgetRecordProvider: t
                                                        }), r.createElement(g, {
                                                            gridProperties: {
                                                                classes: "ThemeGrid_MarginGutter"
                                                            },
                                                            image: d.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_sm.svg"),
                                                            type: 0,
                                                            _idProps: {
                                                                service: n,
                                                                uuid: "62"
                                                            },
                                                            _widgetRecordProvider: t
                                                        })), r.createElement(a, {
                                                            align: 0,
                                                            animate: !1,
                                                            style: "display-flex flex-direction-column full-width",
                                                            visible: !0,
                                                            _idProps: {
                                                                service: n,
                                                                uuid: "63"
                                                            },
                                                            _widgetRecordProvider: t
                                                        }, r.createElement(x, {
                                                            extendedProperties: {
                                                                style: "font-size: 12px;"
                                                            },
                                                            value: i.variables.deserializeAddMoreWalletsListVar.getCurrent(P.iterationContext).nameAttr,
                                                            _idProps: {
                                                                service: n,
                                                                uuid: "64"
                                                            },
                                                            _widgetRecordProvider: t
                                                        }), r.createElement(x, {
                                                            extendedProperties: {
                                                                style: "font-size: 12px; font-weight: bold;"
                                                            },
                                                            gridProperties: {
                                                                marginLeft: "0px"
                                                            },
                                                            value: i.variables.deserializeAddMoreWalletsListVar.getCurrent(P.iterationContext).formattedBalanceAttr,
                                                            _idProps: {
                                                                service: n,
                                                                uuid: "65"
                                                            },
                                                            _widgetRecordProvider: t
                                                        })))]
                                                    }, function() {
                                                        return [r.createElement(a, {
                                                            align: 0,
                                                            animate: !1,
                                                            extendedEvents: {
                                                                onClick: s(function() {
                                                                    return Promise.resolve().then(function() {
                                                                        var k = P.clone();
                                                                        return o.addWalletOnClick$Action(i.variables.deserializeAddMoreWalletsListVar.getCurrent(P.iterationContext), o.callContext(k))
                                                                    })
                                                                }, "onClick")
                                                            },
                                                            style: "padding-base display-flex flex-direction-column gap-base wallets-add-more-cards cursor-pointer",
                                                            visible: !0,
                                                            _idProps: {
                                                                service: n,
                                                                uuid: "66"
                                                            },
                                                            _widgetRecordProvider: t
                                                        }, r.createElement(a, {
                                                            align: 0,
                                                            animate: !1,
                                                            style: "display-flex justify-content-space-between align-items-center",
                                                            visible: !0,
                                                            _idProps: {
                                                                service: n,
                                                                uuid: "67"
                                                            },
                                                            _widgetRecordProvider: t
                                                        }, r.createElement(g, {
                                                            extendedProperties: {
                                                                style: "height: 24px;"
                                                            },
                                                            gridProperties: {
                                                                width: "24px"
                                                            },
                                                            type: 1,
                                                            url: i.variables.deserializeAddMoreWalletsListVar.getCurrent(P.iterationContext).iconAttr,
                                                            _idProps: {
                                                                service: n,
                                                                uuid: "68"
                                                            },
                                                            _widgetRecordProvider: t
                                                        }), r.createElement(g, {
                                                            gridProperties: {
                                                                classes: "ThemeGrid_MarginGutter",
                                                                width: "32px"
                                                            },
                                                            image: d.Navigation.VersionedURL.getVersionedUrl("img/tradershub.circleplusmd.svg"),
                                                            type: 0,
                                                            _idProps: {
                                                                service: n,
                                                                uuid: "69"
                                                            },
                                                            _widgetRecordProvider: t
                                                        })), r.createElement(a, {
                                                            align: 0,
                                                            animate: !1,
                                                            style: "display-flex flex-direction-column full-width",
                                                            visible: !0,
                                                            _idProps: {
                                                                service: n,
                                                                uuid: "70"
                                                            },
                                                            _widgetRecordProvider: t
                                                        }, r.createElement(x, {
                                                            extendedProperties: {
                                                                style: "font-size: 12px;"
                                                            },
                                                            value: i.variables.deserializeAddMoreWalletsListVar.getCurrent(P.iterationContext).nameAttr,
                                                            _idProps: {
                                                                service: n,
                                                                uuid: "71"
                                                            },
                                                            _widgetRecordProvider: t
                                                        })))]
                                                    })]
                                                }),
                                                rightActions: V.Empty
                                            },
                                            _dependencies: [v(i.variables.deserializeAddMoreWalletsListVar.getCurrent(P.iterationContext).formattedBalanceAttr), v(i.variables.deserializeAddMoreWalletsListVar.getCurrent(P.iterationContext).nameAttr), v(i.variables.deserializeAddMoreWalletsListVar.getCurrent(P.iterationContext).iconAttr), v(i.variables.deserializeAddMoreWalletsListVar.getCurrent(P.iterationContext).is_addedAttr)]
                                        })]
                                    }, c, e, "1")
                                },
                                _dependencies: []
                            })]
                        })))), r.createElement(a, {
                            align: 0,
                            animate: !1,
                            style: i.getCachedValue(e.getId("WalletRecentTransaction.Style"), function() {
                                return l.getAccountType() === "demo" ? "wallets-recent-transactions-demo" : "wallets-recent-transactions"
                            }, function() {
                                return l.getAccountType()
                            }),
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "WalletRecentTransaction"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement(a, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "TransactionsWrapper"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement(m, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            style: "font-bold",
                            text: [f(h("USKz7WqSTUWswCfeXEZXPw#Value", "Recent transactions"))],
                            _idProps: {
                                service: e,
                                uuid: "74"
                            },
                            _widgetRecordProvider: t
                        }), r.createElement(a, {
                            align: 0,
                            animate: !1,
                            style: "margin-top-base",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "75"
                            },
                            _widgetRecordProvider: t
                        }, u(i.variables.isLoadingVar, !1, this, function() {
                            return [r.createElement(a, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "border-radius: 8px;"
                                },
                                style: "wallets-recent-transactions-skeleton skeleton",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "76"
                                },
                                _widgetRecordProvider: t
                            })]
                        }, function() {
                            return [u(i.variables.transactionsVar.isEmpty, !1, this, function() {
                                return [u(l.getAccountType() === "demo", !1, this, function() {
                                    return [r.createElement(a, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "padding: 24px 0;"
                                        },
                                        style: "display-flex flex-direction-column align-items-center justify-content-center",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            name: "EmptyTransactionContainer2"
                                        },
                                        _widgetRecordProvider: t
                                    }, r.createElement(g, {
                                        gridProperties: {
                                            marginLeft: "0"
                                        },
                                        image: d.Navigation.VersionedURL.getVersionedUrl("img/tradershub.CircleExclamationSM.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "78"
                                        },
                                        _widgetRecordProvider: t
                                    }), r.createElement(m, {
                                        extendedProperties: {
                                            style: "color: #101213; font-size: 18px; font-weight: bold; margin-top: 16px;"
                                        },
                                        text: [f(h("pYkBlQ3BEE2bKx3f4ju6+A#Value", "No transactions found"))],
                                        _idProps: {
                                            service: e,
                                            uuid: "79"
                                        },
                                        _widgetRecordProvider: t
                                    }), r.createElement(m, {
                                        extendedProperties: {
                                            style: "color: #101213; font-size: 16px; margin-top: 8px;"
                                        },
                                        text: ["Your transactions will appear here."],
                                        _idProps: {
                                            service: e,
                                            uuid: "80"
                                        },
                                        _widgetRecordProvider: t
                                    }))]
                                }, function() {
                                    return [r.createElement(a, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex flex-direction-column align-items-center justify-content-center",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            name: "EmptyTransactionContainer"
                                        },
                                        _widgetRecordProvider: t
                                    }, r.createElement(m, {
                                        extendedProperties: {
                                            style: "border-color: #6a7178; font-size: 14px;"
                                        },
                                        text: [f(h("ZY9JvV88Rk67M8l7IrdVDw#Value", "No transactions found"))],
                                        _idProps: {
                                            service: e,
                                            uuid: "82"
                                        },
                                        _widgetRecordProvider: t
                                    }))]
                                })]
                            }, function() {
                                return [r.createElement(N, {
                                    getOwnerSpan: s(function() {
                                        return y.getChildSpan("render")
                                    }, "getOwnerSpan"),
                                    getOwnerDisposeSpan: s(function() {
                                        return y.getChildSpan("destroy")
                                    }, "getOwnerDisposeSpan"),
                                    inputs: {
                                        TransactionsList: i.variables.transactionsVar
                                    },
                                    events: {
                                        _handleError: s(function(n) {
                                            o.handleError(n)
                                        }, "_handleError")
                                    },
                                    _validationProps: {
                                        validationService: p
                                    },
                                    _idProps: {
                                        service: e,
                                        uuid: "83",
                                        alias: "3"
                                    },
                                    _widgetRecordProvider: t,
                                    _dependencies: []
                                })]
                            })]
                        }))))), r.createElement(U, {
                            getOwnerSpan: s(function() {
                                return y.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: s(function() {
                                return y.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                ShowPopup: i.variables.showNewWalletModalVar,
                                Currency: i.variables.activeWalletVar.nameAttr
                            },
                            events: {
                                _handleError: s(function(n) {
                                    o.handleError(n)
                                }, "_handleError"),
                                depositEvent$Action: s(function() {
                                    return Promise.resolve().then(function() {
                                        var n = c.clone();
                                        return o.depositbtnOnClick$Action(o.callContext(n))
                                    })
                                }, "depositEvent$Action")
                            },
                            _validationProps: {
                                validationService: p
                            },
                            _idProps: {
                                service: e,
                                uuid: "84",
                                alias: "4"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })]
                    })
                },
                _dependencies: [v(i.variables.showNewWalletModalVar), v(i.variables.transactionsVar), v(i.variables.deserializeAddMoreWalletsListVar), v(i.variables.demoAccountBalanceVar), v(i.variables.activeWalletVar.balanceAttr), v(i.variables.activeWalletVar.formattedBalanceAttr), v(i.variables.activeWalletVar.nameAttr), v(i.variables.activeWalletVar.iconAttr), v(i.variables.isLoadingVar), v(i.variables.hasRealAccountVar), v(l.getAccountType())]
            }))
        }
    };
s(w, "View");
var H = w,
    Ie = H;
export {
    Ie as
    default
};