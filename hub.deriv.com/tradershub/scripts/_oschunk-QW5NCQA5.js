import {
    a as I
} from "./_oschunk-4TEW3KH4.js";
import {
    a as O
} from "./_oschunk-W6ZEDFD5.js";
import {
    a as w
} from "./_oschunk-U5BVDMC7.js";
import {
    b as C,
    h as u,
    j as A,
    r as b,
    v as V,
    w as E,
    y as B
} from "./_oschunk-E7JQAU4J.js";
import {
    a as W
} from "./_oschunk-5N5TJ3ES.js";
import {
    a as H,
    g as T,
    i as P
} from "./_oschunk-T77XORCW.js";
import {
    a as S,
    d as x
} from "./_oschunk-VADNKVBQ.js";
import {
    l as R
} from "./_oschunk-OOUVJ7PM.js";
import {
    Gc as y
} from "./_oschunk-KG7LSUIA.js";
import {
    ia as m
} from "./_oschunk-5EPHB76O.js";
import {
    c as a,
    g as F
} from "./_oschunk-DVBKI63I.js";
var n = F(H());
var z = {
        "7TVEltewTk2h_Ff+u7t7JQ#Value": "\u062E\u0631\u0648\u062C",
        "s2zzph7vgE2t3w8m+wFl4Q#Value": "\u062A\u0627\u0628\u0639 \u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u0633\u062D\u0628",
        "yJ+9Ed+kK065SM+ntACkLQ#ValueExpression.-1803756575.1": "\u0633\u0648\u0641 \u062A\u0639\u0648\u062F \u0625\u0644\u0649",
        "gbWs8cOBvU26IjP_kuzJFw#Value": "\u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u0633\u062D\u0628"
    },
    D = {
        "7TVEltewTk2h_Ff+u7t7JQ#Value": "Beenden",
        "s2zzph7vgE2t3w8m+wFl4Q#Value": "Abhebung fortsetzen",
        "yJ+9Ed+kK065SM+ntACkLQ#ValueExpression.-1803756575.1": "Sie kehren zur\xFCck zu Ihrem",
        "gbWs8cOBvU26IjP_kuzJFw#Value": "Abhebung stornieren"
    },
    J = {
        "7TVEltewTk2h_Ff+u7t7JQ#Value": "Salir",
        "s2zzph7vgE2t3w8m+wFl4Q#Value": "Continuar el retiro",
        "yJ+9Ed+kK065SM+ntACkLQ#ValueExpression.-1803756575.1": "Volver\xE1 a su",
        "gbWs8cOBvU26IjP_kuzJFw#Value": "Cancelar retiro"
    },
    Q = {
        "7TVEltewTk2h_Ff+u7t7JQ#Value": "Esci",
        "s2zzph7vgE2t3w8m+wFl4Q#Value": "Continua il prelievo",
        "yJ+9Ed+kK065SM+ntACkLQ#ValueExpression.-1803756575.1": "Tornerai al tuo",
        "gbWs8cOBvU26IjP_kuzJFw#Value": "Annulla il prelievo"
    },
    U = {
        "7TVEltewTk2h_Ff+u7t7JQ#Value": "Wyjd\u017A",
        "s2zzph7vgE2t3w8m+wFl4Q#Value": "Kontynuuj wyp\u0142at\u0119",
        "yJ+9Ed+kK065SM+ntACkLQ#ValueExpression.-1803756575.1": "Wr\xF3cisz do swojego",
        "gbWs8cOBvU26IjP_kuzJFw#Value": "Anuluj wyp\u0142at\u0119"
    },
    M = {
        "7TVEltewTk2h_Ff+u7t7JQ#Value": "Sair",
        "s2zzph7vgE2t3w8m+wFl4Q#Value": "Continuar com o levantamento",
        "yJ+9Ed+kK065SM+ntACkLQ#ValueExpression.-1803756575.1": "Voltar para a sua conta",
        "gbWs8cOBvU26IjP_kuzJFw#Value": "Cancelar levantamento"
    },
    N = {
        "ar-001": {
            translations: z,
            isRTL: !0
        },
        "de-DE": {
            translations: D,
            isRTL: !1
        },
        "es-ES": {
            translations: J,
            isRTL: !1
        },
        "it-IT": {
            translations: Q,
            isRTL: !1
        },
        "pl-PL": {
            translations: U,
            isRTL: !1
        },
        "pt-PT": {
            translations: M,
            isRTL: !1
        }
    };
var o = m; {
    let s = class s extends o.Controller.BaseViewController {
        constructor(t, i, e) {
            super(t, i, e, N);
            var c = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _backBtnOnClick$Action() {
            return this.hasOwnProperty("__backBtnOnClick$Action") || (this.__backBtnOnClick$Action = function(t) {
                var i = this.model,
                    e = this.controller,
                    c = this.idService;
                return o.Logger.startActiveSpan("BackBtnOnClick", function(r) {
                    r && (r.setAttribute("code.function", "BackBtnOnClick"), r.setAttribute("outsystems.function.key", "00657de4-cb4f-44d5-b8dd-3e83b16405e4"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return e.ensureControllerAlive("BackBtnOnClick"), t = e.callContext(t), o.Navigation.navigateTo(o.Navigation.generateScreenURL("tradershub", "wallets/withdrawal/user-verification", {}), o.Transitions.createTransition(o.Transitions.TransitionAnimation.None), t, !0)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__backBtnOnClick$Action
        }
        set _backBtnOnClick$Action(t) {
            this.__backBtnOnClick$Action = t
        }
        get _closePopup$Action() {
            return this.hasOwnProperty("__closePopup$Action") || (this.__closePopup$Action = function(t) {
                var i = this.model,
                    e = this.controller,
                    c = this.idService;
                return o.Logger.startActiveSpan("ClosePopup", function(r) {
                    r && (r.setAttribute("code.function", "ClosePopup"), r.setAttribute("outsystems.function.key", "0d588b77-f05a-459f-a7b4-83c231c7335b"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("ClosePopup"), t = e.callContext(t), i.variables.showPopupVar = !1
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__closePopup$Action
        }
        set _closePopup$Action(t) {
            this.__closePopup$Action = t
        }
        get _showPopup$Action() {
            return this.hasOwnProperty("__showPopup$Action") || (this.__showPopup$Action = function(t) {
                var i = this.model,
                    e = this.controller,
                    c = this.idService;
                return o.Logger.startActiveSpan("ShowPopup", function(r) {
                    r && (r.setAttribute("code.function", "ShowPopup"), r.setAttribute("outsystems.function.key", "8a7d5513-4569-4f67-aaa7-1a86b8fa7a3c"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("ShowPopup"), t = e.callContext(t), i.variables.showPopupVar = !0
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__showPopup$Action
        }
        set _showPopup$Action(t) {
            this.__showPopup$Action = t
        }
        get _exitOnClick$Action() {
            return this.hasOwnProperty("__exitOnClick$Action") || (this.__exitOnClick$Action = function(t) {
                var i = this.model,
                    e = this.controller,
                    c = this.idService;
                return o.Logger.startActiveSpan("ExitOnClick", function(r) {
                    r && (r.setAttribute("code.function", "ExitOnClick"), r.setAttribute("outsystems.function.key", "8eb7afde-977c-4130-b2c9-5ab7fbba83fe"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return e.ensureControllerAlive("ExitOnClick"), t = e.callContext(t), o.Navigation.navigateTo(o.Navigation.generateScreenURL("tradershub", "wallets", {}), o.Transitions.createTransition(o.Transitions.TransitionAnimation.Default), t, !0)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__exitOnClick$Action
        }
        set _exitOnClick$Action(t) {
            this.__exitOnClick$Action = t
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(t) {
                var i = this.model,
                    e = this.controller,
                    c = this.idService;
                return o.Logger.startActiveSpan("OnReady", function(r) {
                    r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "bad48e99-a6d2-4670-91d8-48c085e1928b"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnReady"), t = e.callContext(t);
                        var h = new o.DataTypes.VariableHolder(new(o.Controller.BaseController.getJSONDeserializeOutputType(y)));
                        h.value.dataOut = o.JSONUtils.deserializeFromJSON(S.getActiveWallet(), y, !1), i.variables.walletNameVar = h.value.dataOut.nameAttr
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(t) {
            this.__onReady$Action = t
        }
        backBtnOnClick$Action(t) {
            var i = this.controller;
            return o.Logger.startActiveSpan("BackBtnOnClick__proxy", function(e) {
                e && (e.setAttribute("code.function", "BackBtnOnClick"), e.setAttribute("outsystems.function.key", "00657de4-cb4f-44d5-b8dd-3e83b16405e4"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._backBtnOnClick$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        closePopup$Action(t) {
            var i = this.controller;
            return o.Logger.startActiveSpan("ClosePopup__proxy", function(e) {
                e && (e.setAttribute("code.function", "ClosePopup"), e.setAttribute("outsystems.function.key", "0d588b77-f05a-459f-a7b4-83c231c7335b"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._closePopup$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        showPopup$Action(t) {
            var i = this.controller;
            return o.Logger.startActiveSpan("ShowPopup__proxy", function(e) {
                e && (e.setAttribute("code.function", "ShowPopup"), e.setAttribute("outsystems.function.key", "8a7d5513-4569-4f67-aaa7-1a86b8fa7a3c"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._showPopup$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        exitOnClick$Action(t) {
            var i = this.controller;
            return o.Logger.startActiveSpan("ExitOnClick__proxy", function(e) {
                e && (e.setAttribute("code.function", "ExitOnClick"), e.setAttribute("outsystems.function.key", "8eb7afde-977c-4130-b2c9-5ab7fbba83fe"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._exitOnClick$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onReady$Action(t) {
            var i = this.controller;
            return o.Logger.startActiveSpan("OnReady__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnReady"), e.setAttribute("outsystems.function.key", "bad48e99-a6d2-4670-91d8-48c085e1928b"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onReady$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(t) {
            this._onInitializeEventHandler = t
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(t) {
                var i = this.controller,
                    e = this.model,
                    c = this.idService;
                return i.onReady$Action(t)
            }), this._onReadyEventHandler
        }
        set onReadyEventHandler(t) {
            this._onReadyEventHandler = t
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(t) {
            this._onRenderEventHandler = t
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = null), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(t) {
            this._onDestroyEventHandler = t
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(t) {
            this._onParametersChangedEventHandler = t
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(t) {
                return controller.handleError(t)
            }), this._handleError
        }
        set handleError(t) {
            this._handleError = t
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return x.defaultTimeout
        }
    };
    a(s, "ControllerInner");
    let p = s;
    $ = p
}
var $, L = new o.Controller.ControllerFactory($, W);
var f = m,
    _e = P.PlaceholderContent,
    me = P.IteratorPlaceholderContent,
    v = class v extends T.BaseWebBlock {
        static get displayName() {
            return "WalletBlocks.WalletsOverlayPageWithPopup"
        }
        static getAttributes() {
            return {
                codeFunction: "WalletsOverlayPageWithPopup",
                functionKey: "f6119a02-b472-4f72-a7c6-5fcf433dd142",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.WalletBlocks.WalletsOverlayPageWithPopup.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [O, w]
        }
        get modelFactory() {
            return I
        }
        get controllerFactory() {
            return L
        }
        get title() {
            return ""
        }
        internalRender() {
            let s = this.model,
                l = this.controller,
                t = this.idService,
                i = l.validationService,
                e = this.widgetsRecordProvider,
                c = l.callContext(),
                r = v.ifWidget,
                h = v.textWidget,
                j = v.asPrimitiveValue,
                g = v.getTranslation,
                _ = this;
            return n.createElement("div", this.getRootNodeProperties(), n.createElement(u, {
                align: 0,
                animate: !1,
                style: "wallet-overlay-container",
                visible: !0,
                _idProps: {
                    service: t,
                    name: "PageWrapper"
                },
                _widgetRecordProvider: e
            }, n.createElement(u, {
                align: 0,
                animate: !1,
                style: "wallet-title-container",
                visible: !0,
                _idProps: {
                    service: t,
                    name: "TitleWrapper"
                },
                _widgetRecordProvider: e
            }, n.createElement(b, {
                extendedEvents: {
                    onClick: a(function() {
                        var d = c.clone();
                        l.backBtnOnClick$Action(l.callContext(d))
                    }, "onClick")
                },
                extendedProperties: {
                    style: "font-size: 16px;"
                },
                image: f.Navigation.VersionedURL.getVersionedUrl("img/tradershub.backicon2.png"),
                style: "cursor-pointer",
                type: 0,
                _idProps: {
                    service: t,
                    name: "BackBtn"
                },
                _widgetRecordProvider: e
            }), n.createElement(u, {
                align: 0,
                animate: !1,
                gridProperties: {
                    classes: "ThemeGrid_Width1 ThemeGrid_MarginGutter"
                },
                style: "flex-1",
                visible: !0,
                _idProps: {
                    service: t,
                    name: "TitleContainer"
                },
                _widgetRecordProvider: e
            }, n.createElement(A, {
                extendedProperties: {
                    style: "font-size: 18px; font-weight: bold;"
                },
                value: s.variables.pageTitleIn,
                _idProps: {
                    service: t,
                    name: "OverlayTItle"
                },
                _widgetRecordProvider: e,
                value_dataFetchStatus: f.Model.calculateDataFetchStatus(s.variables._pageTitleInDataFetchStatus)
            })), r(s.variables.hideCloseButtonIn, !1, this, function() {
                return []
            }, function() {
                return [n.createElement(b, {
                    extendedEvents: {
                        onClick: a(function() {
                            var d = c.clone();
                            l.showPopup$Action(l.callContext(d))
                        }, "onClick")
                    },
                    extendedProperties: {
                        style: "font-size: 16px; padding: 0px 6px 0px 0px;"
                    },
                    image: f.Navigation.VersionedURL.getVersionedUrl("img/tradershub.close.png"),
                    style: "cursor-pointer",
                    type: 0,
                    _idProps: {
                        service: t,
                        name: "CloseBtn"
                    },
                    _widgetRecordProvider: e
                })]
            })), n.createElement(u, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "margin-right: (Auto);"
                },
                style: "wallet-overlay-content",
                visible: !0,
                _idProps: {
                    service: t,
                    name: "ContentWrapper"
                },
                _widgetRecordProvider: e
            }, n.createElement(O, {
                getOwnerSpan: a(function() {
                    return _.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return _.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: a(function(d) {
                        l.handleError(d)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: i
                },
                _idProps: {
                    service: t,
                    uuid: "7",
                    alias: "1"
                },
                _widgetRecordProvider: e,
                _dependencies: []
            }), r(s.variables.isLoadingIn, !1, this, function() {
                return [n.createElement(u, {
                    align: 0,
                    animate: !1,
                    style: "wallet-loading-container",
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "8"
                    },
                    _widgetRecordProvider: e
                }, n.createElement(w, {
                    getOwnerSpan: a(function() {
                        return _.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: a(function() {
                        return _.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: a(function(d) {
                            l.handleError(d)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: i
                    },
                    _idProps: {
                        service: t,
                        uuid: "9",
                        alias: "2"
                    },
                    _widgetRecordProvider: e,
                    _dependencies: []
                }))]
            }, function() {
                return [n.createElement(E, {
                    align: 0,
                    content: _.props.placeholders.walletOverlayPageContent,
                    style: s.getCachedValue(t.getId("WalletOverlayPageContent.Style"), function() {
                        return "full-width " + (R.isDesktop$Action(c).isDesktopOut ? "margin-top-m" : "margin-top-base")
                    }),
                    _idProps: {
                        service: t,
                        name: "WalletOverlayPageContent"
                    },
                    _widgetRecordProvider: e
                })]
            })), r(s.variables.hideMobileStickyFooterIn, !1, this, function() {
                return []
            }, function() {
                return [n.createElement(u, {
                    align: 0,
                    animate: !0,
                    style: "wallet-overlay-footer",
                    visible: !s.variables.isLoadingIn,
                    _idProps: {
                        service: t,
                        name: "FooterWrapper"
                    },
                    _widgetRecordProvider: e,
                    visible_dataFetchStatus: f.Model.calculateDataFetchStatus(s.variables._isLoadingInDataFetchStatus)
                }, n.createElement(E, {
                    align: 0,
                    content: _.props.placeholders.mobileFooterContent,
                    _idProps: {
                        service: t,
                        name: "MobileFooterContent"
                    },
                    _widgetRecordProvider: e
                }))]
            }), n.createElement(V, {
                extendedProperties: {
                    style: "border-radius: 8px;"
                },
                showPopup: s.variables.showPopupVar,
                style: "popup-dialog",
                _idProps: {
                    service: t,
                    uuid: "13"
                },
                _widgetRecordProvider: e
            }, n.createElement(u, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column gap-base",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "14"
                },
                _widgetRecordProvider: e
            }, n.createElement(u, {
                align: 0,
                animate: !1,
                style: "display-flex align-items-center",
                visible: !0,
                _idProps: {
                    service: t,
                    name: "PopupTitleContainer"
                },
                _widgetRecordProvider: e
            }, n.createElement(B, {
                extendedProperties: {
                    style: "font-size: 18px; font-weight: bold;"
                },
                style: "flex-1",
                text: [h(g("gbWs8cOBvU26IjP_kuzJFw#Value", "Cancel withdrawal"))],
                _idProps: {
                    service: t,
                    uuid: "16"
                },
                _widgetRecordProvider: e
            }), n.createElement(b, {
                extendedEvents: {
                    onClick: a(function() {
                        var d = c.clone();
                        l.closePopup$Action(l.callContext(d))
                    }, "onClick")
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                image: f.Navigation.VersionedURL.getVersionedUrl("img/tradershub.close.png"),
                style: "cursor-pointer",
                type: 0,
                _idProps: {
                    service: t,
                    uuid: "17"
                },
                _widgetRecordProvider: e
            })), n.createElement(A, {
                value: f.Injector.resolve(f.ServiceNames.TranslationsService).getMessage("yJ+9Ed+kK065SM+ntACkLQ#ValueExpression.-1803756575.1", "You'll go back to your ") + s.variables.walletNameVar + ".",
                _idProps: {
                    service: t,
                    uuid: "18"
                },
                _widgetRecordProvider: e
            }), n.createElement(u, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column gap-s",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "19"
                },
                _widgetRecordProvider: e
            }, n.createElement(C, {
                enabled: !0,
                gridProperties: {
                    marginLeft: "0px"
                },
                isDefault: !1,
                onClick: a(function() {
                    var d = c.clone();
                    l.closePopup$Action(l.callContext(d))
                }, "onClick"),
                style: "btn btn-primary",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "20"
                },
                _widgetRecordProvider: e
            }, h(g("s2zzph7vgE2t3w8m+wFl4Q#Value", "Continue withdrawal"))), n.createElement(C, {
                enabled: !0,
                gridProperties: {
                    marginLeft: "0px"
                },
                isDefault: !1,
                onClick: a(function() {
                    var d = c.clone();
                    l.exitOnClick$Action(l.callContext(d))
                }, "onClick"),
                style: "btn",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "21"
                },
                _widgetRecordProvider: e
            }, h(g("7TVEltewTk2h_Ff+u7t7JQ#Value", "Exit"))))))))
        }
    };
a(v, "View");
var k = v,
    be = k;
export {
    be as a
};