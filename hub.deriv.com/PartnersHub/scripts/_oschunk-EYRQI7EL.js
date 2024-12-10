import {
    b as J
} from "./_oschunk-JIDGT34X.js";
import {
    a as oe,
    b as ie,
    c as ae
} from "./_oschunk-EMBKZDDX.js";
import {
    a as V
} from "./_oschunk-UCNPNPZ6.js";
import {
    a as X
} from "./_oschunk-B5VQOPQY.js";
import {
    a as z
} from "./_oschunk-OOK37A5O.js";
import {
    a as K
} from "./_oschunk-MUB32TUL.js";
import {
    a as U
} from "./_oschunk-ND5NIK2B.js";
import {
    a as te,
    d as v,
    n as p,
    r as re,
    s as D,
    u as ne
} from "./_oschunk-5HXBKFJV.js";
import {
    a as O
} from "./_oschunk-6WALBPGV.js";
import {
    a as B,
    g as k,
    i as C
} from "./_oschunk-2Q3BG5XZ.js";
import {
    a as L,
    o as Z,
    p as h
} from "./_oschunk-FZ6FUHBV.js";
import {
    a as ee
} from "./_oschunk-S5DOOZ7G.js";
import {
    Ac as H,
    a as W
} from "./_oschunk-5FYEKNKX.js";
import {
    ia as _
} from "./_oschunk-5KJVGEL7.js";
import {
    c as n,
    h as M
} from "./_oschunk-QHO7QY6K.js";
var y = M(B());
var se = {};
var le = _; {
    let l = class l extends le.Controller.BaseViewController {
        constructor(e, o, t) {
            super(e, o, t, se);
            var d = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
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
            return h.defaultTimeout
        }
    };
    n(l, "ControllerInner");
    let g = l;
    de = g
}
var de, ue = new le.Controller.ControllerFactory(de, O);
var ve = _,
    Ge = C.PlaceholderContent,
    je = C.IteratorPlaceholderContent,
    A = class A extends k.BaseWebBlock {
        static get displayName() {
            return "Layouts.LayoutContainer"
        }
        static getAttributes() {
            return {
                codeFunction: "LayoutContainer",
                functionKey: "915b877a-ff71-4340-97a3-8109eb46f379",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Layouts.LayoutContainer.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [X]
        }
        get modelFactory() {
            return oe
        }
        get controllerFactory() {
            return ue
        }
        get title() {
            return ""
        }
        internalRender() {
            let l = this.model,
                i = this.controller,
                e = this.idService,
                o = i.validationService,
                t = this.widgetsRecordProvider,
                d = i.callContext(),
                r = A.ifWidget,
                s = A.textWidget,
                b = A.asPrimitiveValue,
                R = A.getTranslation,
                m = this;
            return y.createElement("div", this.getRootNodeProperties(), r(L.getIsAppReady(), !1, this, function() {
                return [y.createElement(v, {
                    align: 0,
                    animate: !1,
                    style: "ph-main-body",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "0"
                    },
                    _widgetRecordProvider: t
                }, y.createElement(D, {
                    align: 0,
                    content: m.props.placeholders.header,
                    style: l.getCachedValue(e.getId("Header.Style"), function() {
                        return l.variables.stickyHeaderIn ? "ph-main-layout-sticky-header" : ""
                    }, function() {
                        return l.variables.stickyHeaderIn
                    }),
                    _idProps: {
                        service: e,
                        name: "Header"
                    },
                    _widgetRecordProvider: t,
                    style_dataFetchStatus: ve.Model.calculateDataFetchStatus(l.variables._stickyHeaderInDataFetchStatus)
                }), y.createElement(v, {
                    align: 0,
                    animate: !1,
                    style: "ph-main-layout-container",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "2"
                    },
                    _widgetRecordProvider: t
                }, y.createElement(D, {
                    align: 0,
                    content: m.props.placeholders.content,
                    _idProps: {
                        service: e,
                        name: "Content"
                    },
                    _widgetRecordProvider: t
                })), y.createElement(D, {
                    align: 0,
                    content: m.props.placeholders.footer,
                    style: l.getCachedValue(e.getId("Footer.Style"), function() {
                        return l.variables.stickyFooterIn ? "ph-main-layout-sticky-footer" : ""
                    }, function() {
                        return l.variables.stickyFooterIn
                    }),
                    _idProps: {
                        service: e,
                        name: "Footer"
                    },
                    _widgetRecordProvider: t,
                    style_dataFetchStatus: ve.Model.calculateDataFetchStatus(l.variables._stickyFooterInDataFetchStatus)
                }))]
            }, function() {
                return [y.createElement(X, {
                    getOwnerSpan: n(function() {
                        return m.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: n(function() {
                        return m.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: n(function(a) {
                            i.handleError(a)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: o
                    },
                    _idProps: {
                        service: e,
                        uuid: "5",
                        alias: "1"
                    },
                    _widgetRecordProvider: t,
                    _dependencies: []
                })]
            }))
        }
    };
n(A, "View");
var G = A,
    qe = G;
var c = M(B());
var Ae = {
        "eFWzD2sGTkaB086XttArKw#Value.2011110042.1": "\u0625\u0644\u063A\u0627\u0621",
        "gDZYqM81kU+e9eXldbfVrw#Value.-1272307305.1": "\u0646\u0639\u0645\u060C \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C",
        "QTTBDC0q7UWDCIIXHDBoJw#Value": "\u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0623\u0646\u0643 \u062A\u0631\u064A\u062F \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C\u061F",
        "_3GsjJ_7XUeN+_hIkr8mYA#Value": "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C",
        "8gKKiuvlaUaxbFCUgp2zKw#Value": "\u062F\u0631\u062F\u0634\u0629 \u062D\u064A\u0629"
    },
    we = {
        "eFWzD2sGTkaB086XttArKw#Value.2011110042.1": "Abbrechen",
        "gDZYqM81kU+e9eXldbfVrw#Value.-1272307305.1": "Ja, abmelden",
        "QTTBDC0q7UWDCIIXHDBoJw#Value": "Bist du dir sicher, dass du dich abmelden m\xF6chtest?",
        "_3GsjJ_7XUeN+_hIkr8mYA#Value": "Abmelden",
        "8gKKiuvlaUaxbFCUgp2zKw#Value": "Live-Chat"
    },
    Se = {
        "eFWzD2sGTkaB086XttArKw#Value.2011110042.1": "Cancelar",
        "gDZYqM81kU+e9eXldbfVrw#Value.-1272307305.1": "S\xED, cerrar sesi\xF3n",
        "QTTBDC0q7UWDCIIXHDBoJw#Value": "\xBFEst\xE1s seguro de que quieres cerrar sesi\xF3n?",
        "_3GsjJ_7XUeN+_hIkr8mYA#Value": "Cerrar sesi\xF3n",
        "8gKKiuvlaUaxbFCUgp2zKw#Value": "Chat en vivo"
    },
    Ee = {
        "eFWzD2sGTkaB086XttArKw#Value.2011110042.1": "Annuler",
        "gDZYqM81kU+e9eXldbfVrw#Value.-1272307305.1": "Oui, d\xE9connecter",
        "QTTBDC0q7UWDCIIXHDBoJw#Value": "\xCAtes-vous s\xFBr de vouloir vous d\xE9connecter?",
        "_3GsjJ_7XUeN+_hIkr8mYA#Value": "Se d\xE9connecter",
        "8gKKiuvlaUaxbFCUgp2zKw#Value": "Chat en direct"
    },
    Re = {
        "eFWzD2sGTkaB086XttArKw#Value.2011110042.1": "Annulla",
        "gDZYqM81kU+e9eXldbfVrw#Value.-1272307305.1": "S\xEC, termina sessione",
        "QTTBDC0q7UWDCIIXHDBoJw#Value": "Sei sicuro di voler effettuare il logout?",
        "_3GsjJ_7XUeN+_hIkr8mYA#Value": "Disconnettersi",
        "8gKKiuvlaUaxbFCUgp2zKw#Value": "Chat dal vivo"
    },
    He = {
        "eFWzD2sGTkaB086XttArKw#Value.2011110042.1": "Anuluj",
        "gDZYqM81kU+e9eXldbfVrw#Value.-1272307305.1": "Tak, wyloguj",
        "QTTBDC0q7UWDCIIXHDBoJw#Value": "Czy jeste\u015B pewien, \u017Ce chcesz si\u0119 wylogowa\u0107?",
        "_3GsjJ_7XUeN+_hIkr8mYA#Value": "Wyloguj si\u0119",
        "8gKKiuvlaUaxbFCUgp2zKw#Value": "Czat na \u017Cywo"
    },
    Oe = {
        "eFWzD2sGTkaB086XttArKw#Value.2011110042.1": "Cancelar",
        "gDZYqM81kU+e9eXldbfVrw#Value.-1272307305.1": "Sim, pretendo terminar sess\xE3o",
        "QTTBDC0q7UWDCIIXHDBoJw#Value": "Tem certeza de que deseja sair?",
        "_3GsjJ_7XUeN+_hIkr8mYA#Value": "Sair",
        "8gKKiuvlaUaxbFCUgp2zKw#Value": "Chat ao vivo"
    },
    ke = {
        "eFWzD2sGTkaB086XttArKw#Value.2011110042.1": "\u041E\u0442\u043C\u0435\u043D\u0430",
        "gDZYqM81kU+e9eXldbfVrw#Value.-1272307305.1": "\u0414\u0430, \u0432\u044B\u0439\u0442\u0438",
        "QTTBDC0q7UWDCIIXHDBoJw#Value": "\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0432\u044B\u0439\u0442\u0438?",
        "_3GsjJ_7XUeN+_hIkr8mYA#Value": "\u0412\u044B\u0439\u0442\u0438",
        "8gKKiuvlaUaxbFCUgp2zKw#Value": "\u0416\u0438\u0432\u043E\u0439 \u0447\u0430\u0442"
    },
    fe = {
        "ar-001": {
            translations: Ae,
            isRTL: !0
        },
        "de-DE": {
            translations: we,
            isRTL: !1
        },
        "es-ES": {
            translations: Se,
            isRTL: !1
        },
        "fr-FR": {
            translations: Ee,
            isRTL: !1
        },
        "it-IT": {
            translations: Re,
            isRTL: !1
        },
        "pl-PL": {
            translations: He,
            isRTL: !1
        },
        "pt-PT": {
            translations: Oe,
            isRTL: !1
        },
        "ru-RU": {
            translations: ke,
            isRTL: !1
        }
    };

function j(g, l, i, e) {
    return new Promise(function(o, t) {
        let d = localStorage.getItem("loginId"),
            r = localStorage.getItem("token"),
            s = Number(g.CurrentAppId),
            b = g.ServerUrl,
            a = ["green.derivws.com", "red.derivws.com", "blue.derivws.com"].includes(b) ? "oauth.deriv.com" : b;

        function x() {
            d && r && (localStorage.removeItem("loginId"), localStorage.removeItem("token"), localStorage.removeItem("active_user_id"))
        }
        n(x, "removeLocalStorage");

        function Pe() {
            var Q;
            l.CloseLogoutModal(), l.ShowLoader(), l.WebsocketLogout(g.ServerUrl, g.CurrentAppId, "EN", r);
            try {
                let T = window.Analytics.Analytics.getFeatureValue("hydra_be");
                if (!Array.isArray(T) || !((Q = T[1]) != null && Q.enabled_for)) throw new Error("Invalid feature value structure");
                if (T[1].enabled_for.includes(s)) {
                    let F = function(I) {
                        I.data === "logout_complete" && (console.log("Logout process completed."), console.log("Redirecting to oauth..."), window.removeEventListener("message", F), o(), x(), l.RedirectToOauth())
                    };
                    n(F, "onMessage"), console.log("Using OAuth2");
                    let P = document.getElementById("logout-iframe");
                    P || (P = document.createElement("iframe"), P.id = "logout-iframe", P.style.display = "none", document.body.appendChild(P), setTimeout(() => {
                        o(), x(), l.RedirectToOauth()
                    }, 1e4)), P.src = `https://${a}/oauth2/sessions/logout`, window.addEventListener("message", F), P.onerror = I => {
                        console.error("There has been a problem with the iframe operation:", I), window.removeEventListener("message", F), t(I)
                    }
                } else o(), x(), l.RedirectToOauth()
            } catch (T) {
                o(), x(), l.RedirectToOauth()
            }
        }
        n(Pe, "performLogout"), Pe()
    })
}
n(j, "default");
var u = _; {
    let l = class l extends u.Controller.BaseViewController {
        constructor(e, o, t) {
            super(e, o, t, fe);
            var d = this.controller;
            this.clientActionProxies = {
                closeLogoutModal$Action: n(function() {
                    return d.executeActionInsideJSNode(d._closeLogoutModal$Action.bind(d), d.callContext(), function(r) {
                        return {}
                    }, function() {}, "CloseLogoutModal")
                }, "closeLogoutModal$Action"),
                showLoader$Action: n(function() {
                    return d.executeActionInsideJSNode(d._showLoader$Action.bind(d), d.callContext(), function(r) {
                        return {}
                    }, function() {}, "ShowLoader")
                }, "showLoader$Action")
            }, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onClickOpenLiveChat$Action() {
            return this.hasOwnProperty("__onClickOpenLiveChat$Action") || (this.__onClickOpenLiveChat$Action = function(e) {
                var o = this.model,
                    t = this.controller,
                    d = this.idService;
                return u.Logger.startActiveSpan("OnClickOpenLiveChat", function(r) {
                    r && (r.setAttribute("code.function", "OnClickOpenLiveChat"), r.setAttribute("outsystems.function.key", "1b29f62f-9a81-4ac4-ada5-c4154404dc31"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnClickOpenLiveChat"), e = t.callContext(e), h.showLiveChat$Action(e), h.rudderstackTrackEvent$Action(function() {
                            var s = new H;
                            return s.actionAttr = "click_cta", s.cta_nameAttr = "Open livechat", s.cta_placementAttr = "header", s
                        }(), "ce_partnershub_form", e)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onClickOpenLiveChat$Action
        }
        set _onClickOpenLiveChat$Action(e) {
            this.__onClickOpenLiveChat$Action = e
        }
        get _openLogoutModal$Action() {
            return this.hasOwnProperty("__openLogoutModal$Action") || (this.__openLogoutModal$Action = function(e) {
                var o = this.model,
                    t = this.controller,
                    d = this.idService;
                return u.Logger.startActiveSpan("OpenLogoutModal", function(r) {
                    r && (r.setAttribute("code.function", "OpenLogoutModal"), r.setAttribute("outsystems.function.key", "1f438c7d-3f39-4cec-9be5-eeb2a0279f8b"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OpenLogoutModal"), e = t.callContext(e), o.variables.isLogoutModalOpenVar = !0, h.rudderstackTrackEvent$Action(function() {
                            var s = new H;
                            return s.actionAttr = "click_cta", s.cta_nameAttr = "Open logout modal", s.cta_placementAttr = "header", s
                        }(), "ce_partnershub_form", e)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__openLogoutModal$Action
        }
        set _openLogoutModal$Action(e) {
            this.__openLogoutModal$Action = e
        }
        get _onClickLogout$Action() {
            return this.hasOwnProperty("__onClickLogout$Action") || (this.__onClickLogout$Action = function(e) {
                var o = this.model,
                    t = this.controller,
                    d = this.idService;
                return u.Logger.startActiveSpan("OnClickLogout", function(r) {
                    return r && (r.setAttribute("code.function", "OnClickLogout"), r.setAttribute("outsystems.function.key", "6c36a650-5c16-4ad0-a7c3-d5452e960279"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), u.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("OnClickLogout"), e = t.callContext(e), u.Flow.executeAsyncFlow(function() {
                            return o.variables.isLogoutModalOpenVar = !0, h.rudderstackTrackEvent$Action(function() {
                                var s = new H;
                                return s.actionAttr = "click_cta", s.cta_nameAttr = "Logout", s.cta_placementAttr = "header", s
                            }(), "ce_partnershub_form", e), u.Logger.startActiveSpan("HandleLogout", function(s) {
                                s && (s.setAttribute("code.function", "HandleLogout"), s.setAttribute("outsystems.function.key", "540658be-f79b-44d6-b686-f576d4e91d55"), s.setAttribute("outsystems.function.owner.name", "PartnersHub"), s.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return t.safeExecuteAsyncJSNode(j, "HandleLogout", "OnClickLogout", {
                                        ServerUrl: u.DataConversion.JSNodeParamConverter.to(L.getServer(), u.DataTypes.DataTypes.Text),
                                        CurrentAppId: u.DataConversion.JSNodeParamConverter.to(L.getAppId(), u.DataTypes.DataTypes.Text)
                                    }, function(b) {}, {
                                        CloseLogoutModal: t.clientActionProxies.closeLogoutModal$Action,
                                        ShowLoader: t.clientActionProxies.showLoader$Action,
                                        WebsocketLogout: ee.clientActionProxies.websocketLogout$Action,
                                        RedirectToOauth: h.clientActionProxies.redirectToOauth$Action
                                    }, {})
                                } finally {
                                    s && s.end()
                                }
                            }, 1)
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__onClickLogout$Action
        }
        set _onClickLogout$Action(e) {
            this.__onClickLogout$Action = e
        }
        get _closeLogoutModal$Action() {
            return this.hasOwnProperty("__closeLogoutModal$Action") || (this.__closeLogoutModal$Action = function(e) {
                var o = this.model,
                    t = this.controller,
                    d = this.idService;
                return u.Logger.startActiveSpan("CloseLogoutModal", function(r) {
                    r && (r.setAttribute("code.function", "CloseLogoutModal"), r.setAttribute("outsystems.function.key", "85d4ed6f-5081-4be8-a2e5-c25dde6700b0"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("CloseLogoutModal"), e = t.callContext(e), o.variables.isLogoutModalOpenVar = !1, h.rudderstackTrackEvent$Action(function() {
                            var s = new H;
                            return s.actionAttr = "click_cta", s.cta_nameAttr = "Close logout modal", s.cta_placementAttr = "header", s
                        }(), "ce_partnershub_form", e)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__closeLogoutModal$Action
        }
        set _closeLogoutModal$Action(e) {
            this.__closeLogoutModal$Action = e
        }
        get _onClickOpenSideMenu$Action() {
            return this.hasOwnProperty("__onClickOpenSideMenu$Action") || (this.__onClickOpenSideMenu$Action = function(e) {
                var o = this.model,
                    t = this.controller,
                    d = this.idService;
                return u.Logger.startActiveSpan("OnClickOpenSideMenu", function(r) {
                    return r && (r.setAttribute("code.function", "OnClickOpenSideMenu"), r.setAttribute("outsystems.function.key", "8a428d96-cac1-45dd-85ca-e79732fa3992"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), u.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnClickOpenSideMenu"), e = t.callContext(e);
                        var s = new u.DataTypes.VariableHolder;
                        return u.Flow.executeAsyncFlow(function() {
                            return o.flush(), Z.menuShow$Action(e).then(function(b) {
                                s.value = b
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__onClickOpenSideMenu$Action
        }
        set _onClickOpenSideMenu$Action(e) {
            this.__onClickOpenSideMenu$Action = e
        }
        get _onClickRedirectToDerivCom$Action() {
            return this.hasOwnProperty("__onClickRedirectToDerivCom$Action") || (this.__onClickRedirectToDerivCom$Action = function(e) {
                var o = this.model,
                    t = this.controller,
                    d = this.idService;
                return u.Logger.startActiveSpan("OnClickRedirectToDerivCom", function(r) {
                    r && (r.setAttribute("code.function", "OnClickRedirectToDerivCom"), r.setAttribute("outsystems.function.key", "b44d1ba3-9f76-449b-bb81-9bc3de3ffc48"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("OnClickRedirectToDerivCom"), e = t.callContext(e), h.rudderstackTrackEvent$Action(function() {
                            var s = new H;
                            return s.actionAttr = "click_cta", s.cta_nameAttr = "Partner logo", s.cta_placementAttr = "header", s
                        }(), "ce_partnershub_form", e), u.Navigation.navigateTo(u.Navigation.generateScreenURL("https://deriv.com/partners/affiliate-ib/", {}), u.Transitions.createTransition(u.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onClickRedirectToDerivCom$Action
        }
        set _onClickRedirectToDerivCom$Action(e) {
            this.__onClickRedirectToDerivCom$Action = e
        }
        get _showLoader$Action() {
            return this.hasOwnProperty("__showLoader$Action") || (this.__showLoader$Action = function(e) {
                var o = this.model,
                    t = this.controller,
                    d = this.idService;
                return u.Logger.startActiveSpan("ShowLoader", function(r) {
                    return r && (r.setAttribute("code.function", "ShowLoader"), r.setAttribute("outsystems.function.key", "c439785f-00f4-430a-bbc6-4ea92c945f22"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), u.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("ShowLoader"), e = t.callContext(e), u.Flow.executeAsyncFlow(function() {
                            return t.showLoaderEvent$Action(e)
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__showLoader$Action
        }
        set _showLoader$Action(e) {
            this.__showLoader$Action = e
        }
        onClickOpenLiveChat$Action(e) {
            var o = this.controller;
            return u.Logger.startActiveSpan("OnClickOpenLiveChat__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnClickOpenLiveChat"), t.setAttribute("outsystems.function.key", "1b29f62f-9a81-4ac4-ada5-c4154404dc31"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return o.safeExecuteClientAction(o._onClickOpenLiveChat$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        openLogoutModal$Action(e) {
            var o = this.controller;
            return u.Logger.startActiveSpan("OpenLogoutModal__proxy", function(t) {
                t && (t.setAttribute("code.function", "OpenLogoutModal"), t.setAttribute("outsystems.function.key", "1f438c7d-3f39-4cec-9be5-eeb2a0279f8b"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return o.safeExecuteClientAction(o._openLogoutModal$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onClickLogout$Action(e) {
            var o = this.controller;
            return u.Logger.startActiveSpan("OnClickLogout__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnClickLogout"), t.setAttribute("outsystems.function.key", "6c36a650-5c16-4ad0-a7c3-d5452e960279"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), u.Flow.tryFinally(function() {
                    return o.safeExecuteClientAction(o._onClickLogout$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        closeLogoutModal$Action(e) {
            var o = this.controller;
            return u.Logger.startActiveSpan("CloseLogoutModal__proxy", function(t) {
                t && (t.setAttribute("code.function", "CloseLogoutModal"), t.setAttribute("outsystems.function.key", "85d4ed6f-5081-4be8-a2e5-c25dde6700b0"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return o.safeExecuteClientAction(o._closeLogoutModal$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onClickOpenSideMenu$Action(e) {
            var o = this.controller;
            return u.Logger.startActiveSpan("OnClickOpenSideMenu__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnClickOpenSideMenu"), t.setAttribute("outsystems.function.key", "8a428d96-cac1-45dd-85ca-e79732fa3992"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), u.Flow.tryFinally(function() {
                    return o.safeExecuteClientAction(o._onClickOpenSideMenu$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onClickRedirectToDerivCom$Action(e) {
            var o = this.controller;
            return u.Logger.startActiveSpan("OnClickRedirectToDerivCom__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnClickRedirectToDerivCom"), t.setAttribute("outsystems.function.key", "b44d1ba3-9f76-449b-bb81-9bc3de3ffc48"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return o.safeExecuteClientAction(o._onClickRedirectToDerivCom$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        showLoader$Action(e) {
            var o = this.controller;
            return u.Logger.startActiveSpan("ShowLoader__proxy", function(t) {
                return t && (t.setAttribute("code.function", "ShowLoader"), t.setAttribute("outsystems.function.key", "c439785f-00f4-430a-bbc6-4ea92c945f22"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), u.Flow.tryFinally(function() {
                    return o.safeExecuteClientAction(o._showLoader$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        get showLoaderEvent$Action() {
            return this.hasOwnProperty("_showLoaderEvent$Action") || (this._showLoaderEvent$Action = function() {
                return Promise.resolve()
            }), this._showLoaderEvent$Action
        }
        set showLoaderEvent$Action(e) {
            this._showLoaderEvent$Action = e
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
            return h.defaultTimeout
        }
    };
    n(l, "ControllerInner");
    let g = l;
    he = g
}
var he, _e = new u.Controller.ControllerFactory(he, O);
var f = _,
    w = C.PlaceholderContent,
    Et = C.IteratorPlaceholderContent,
    S = class S extends k.BaseWebBlock {
        static get displayName() {
            return "Common.Headers"
        }
        static getAttributes() {
            return {
                codeFunction: "Headers",
                functionKey: "be56ce2e-cb4b-4fa4-b89b-08bb58edf029",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Common.Headers.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [z, V, U, K]
        }
        get modelFactory() {
            return ie
        }
        get controllerFactory() {
            return _e
        }
        get title() {
            return ""
        }
        internalRender() {
            let l = this.model,
                i = this.controller,
                e = this.idService,
                o = i.validationService,
                t = this.widgetsRecordProvider,
                d = i.callContext(),
                r = S.ifWidget,
                s = S.textWidget,
                b = S.asPrimitiveValue,
                R = S.getTranslation,
                m = this;
            return c.createElement("div", this.getRootNodeProperties(), c.createElement(z, {
                getOwnerSpan: n(function() {
                    return m.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: n(function() {
                    return m.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: n(function(a) {
                        i.handleError(a)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: o
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    onDesktop: new w(function() {
                        return [c.createElement(te, {
                            extendedProperties: {
                                role: "banner",
                                className: "header"
                            },
                            tag: "header",
                            _idProps: {
                                service: e,
                                name: "Header2"
                            },
                            _widgetRecordProvider: t
                        }, c.createElement(v, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "align-items: center; display: flex; flex-shrink: 0; height: 56px; justify-content: space-between; padding: 16px 40px;"
                            },
                            gridProperties: {
                                classes: "OSInline",
                                width: "100%"
                            },
                            style: "header-top",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "2"
                            },
                            _widgetRecordProvider: t
                        }, c.createElement(v, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "align-items: center; display: flex; gap: 16px; text-align: right;"
                            },
                            style: "left-header",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "3"
                            },
                            _widgetRecordProvider: t
                        }, c.createElement(p, {
                            extendedEvents: {
                                onClick: n(function() {
                                    var a = d.clone();
                                    i.onClickRedirectToDerivCom$Action(i.callContext(a))
                                }, "onClick")
                            },
                            extendedProperties: {
                                style: "height: 24px;"
                            },
                            gridProperties: {
                                width: "130px",
                                marginLeft: "0"
                            },
                            image: f.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.DashboardPartnersLogo.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "4"
                            },
                            _widgetRecordProvider: t
                        })), c.createElement(v, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "display: flex; gap: 32px; justify-content: center;"
                            },
                            style: "display-flex align-items-center",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "5"
                            },
                            _widgetRecordProvider: t
                        }, c.createElement(V, {
                            getOwnerSpan: n(function() {
                                return m.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return m.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Position: W.position.bottom,
                                ExtendedClass: "tooltip"
                            },
                            events: {
                                _handleError: n(function(a) {
                                    i.handleError(a)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: o
                            },
                            _idProps: {
                                service: e,
                                name: "LivechatTooltip",
                                alias: "2"
                            },
                            _widgetRecordProvider: t,
                            placeholders: {
                                content: new w(function() {
                                    return [c.createElement(v, {
                                        align: 0,
                                        animate: !1,
                                        extendedEvents: {
                                            onClick: n(function() {
                                                var a = d.clone();
                                                i.onClickOpenLiveChat$Action(i.callContext(a))
                                            }, "onClick")
                                        },
                                        extendedProperties: {
                                            "data-allow-event-propagation": "True",
                                            style: "cursor: pointer;"
                                        },
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: t
                                    }, c.createElement(p, {
                                        extendedProperties: {
                                            "data-allow-event-propagation": "True"
                                        },
                                        gridProperties: {
                                            width: "28px"
                                        },
                                        image: f.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.livechat2.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "8"
                                        },
                                        _widgetRecordProvider: t
                                    }))]
                                }),
                                tooltip: new w(function() {
                                    return [c.createElement(v, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            "data-allow-event-propagation": "True",
                                            style: "text-align: center;"
                                        },
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "9"
                                        },
                                        _widgetRecordProvider: t
                                    }, s(R("8gKKiuvlaUaxbFCUgp2zKw#Value", "Live chat")))]
                                })
                            },
                            _dependencies: []
                        }), c.createElement(V, {
                            getOwnerSpan: n(function() {
                                return m.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return m.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Position: W.position.bottom
                            },
                            events: {
                                _handleError: n(function(a) {
                                    i.handleError(a)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: o
                            },
                            _idProps: {
                                service: e,
                                name: "LogoutTooltip",
                                alias: "3"
                            },
                            _widgetRecordProvider: t,
                            placeholders: {
                                content: new w(function() {
                                    return [c.createElement(v, {
                                        align: 0,
                                        animate: !1,
                                        extendedEvents: {
                                            onClick: n(function() {
                                                var a = d.clone();
                                                i.openLogoutModal$Action(i.callContext(a))
                                            }, "onClick")
                                        },
                                        extendedProperties: {
                                            style: "cursor: pointer;"
                                        },
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "11"
                                        },
                                        _widgetRecordProvider: t
                                    }, c.createElement(p, {
                                        gridProperties: {
                                            width: "22px"
                                        },
                                        image: f.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.logout.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "12"
                                        },
                                        _widgetRecordProvider: t
                                    }))]
                                }),
                                tooltip: new w(function() {
                                    return [c.createElement(v, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "text-align: center;"
                                        },
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "13"
                                        },
                                        _widgetRecordProvider: t
                                    }, s(R("_3GsjJ_7XUeN+_hIkr8mYA#Value", "Log out")))]
                                })
                            },
                            _dependencies: []
                        }))))]
                    }),
                    onTablet: new w(function() {
                        return [c.createElement(v, {
                            align: 0,
                            animate: !1,
                            extendedEvents: {
                                onClick: n(function() {
                                    return Promise.resolve().then(function() {
                                        var a = d.clone();
                                        return i.onClickOpenSideMenu$Action(i.callContext(a))
                                    })
                                }, "onClick")
                            },
                            extendedProperties: {
                                style: "padding: 16px;"
                            },
                            style: "dashboard-mobile-header",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "14"
                            },
                            _widgetRecordProvider: t
                        }, c.createElement(v, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "align-items: center; display: flex;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "15"
                            },
                            _widgetRecordProvider: t
                        }, c.createElement(p, {
                            extendedEvents: {
                                onClick: n(function() {
                                    var a = d.clone();
                                    i.onClickRedirectToDerivCom$Action(i.callContext(a))
                                }, "onClick")
                            },
                            extendedProperties: {
                                style: "height: 48px;"
                            },
                            gridProperties: {
                                width: "130px"
                            },
                            image: f.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.DashboardPartnersLogo.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "16"
                            },
                            _widgetRecordProvider: t
                        })), c.createElement(v, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "display: flex; gap: 32px; justify-content: center;"
                            },
                            style: "display-flex align-items-center",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "17"
                            },
                            _widgetRecordProvider: t
                        }, c.createElement(v, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "cursor: pointer;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "18"
                            },
                            _widgetRecordProvider: t
                        }, c.createElement(p, {
                            extendedEvents: {
                                onClick: n(function() {
                                    var a = d.clone();
                                    i.onClickOpenLiveChat$Action(i.callContext(a))
                                }, "onClick")
                            },
                            image: f.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.livechat2.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "19"
                            },
                            _widgetRecordProvider: t
                        })), c.createElement(v, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "cursor: pointer;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "20"
                            },
                            _widgetRecordProvider: t
                        }, c.createElement(p, {
                            extendedEvents: {
                                onClick: n(function() {
                                    var a = d.clone();
                                    i.openLogoutModal$Action(i.callContext(a))
                                }, "onClick")
                            },
                            gridProperties: {
                                width: "22px"
                            },
                            image: f.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.logout.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "21"
                            },
                            _widgetRecordProvider: t
                        }))))]
                    }),
                    onPhone: new w(function() {
                        return [c.createElement(v, {
                            align: 0,
                            animate: !1,
                            extendedEvents: {
                                onClick: n(function() {
                                    return Promise.resolve().then(function() {
                                        var a = d.clone();
                                        return i.onClickOpenSideMenu$Action(i.callContext(a))
                                    })
                                }, "onClick")
                            },
                            extendedProperties: {
                                style: "padding: 16px;"
                            },
                            style: "dashboard-mobile-header",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "22"
                            },
                            _widgetRecordProvider: t
                        }, c.createElement(v, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "align-items: center; display: flex;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "23"
                            },
                            _widgetRecordProvider: t
                        }, c.createElement(p, {
                            extendedEvents: {
                                onClick: n(function() {
                                    var a = d.clone();
                                    i.onClickRedirectToDerivCom$Action(i.callContext(a))
                                }, "onClick")
                            },
                            extendedProperties: {
                                style: "height: 48px;"
                            },
                            gridProperties: {
                                width: "130px"
                            },
                            image: f.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.DashboardPartnersLogo.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "24"
                            },
                            _widgetRecordProvider: t
                        })), c.createElement(v, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "display: flex; gap: 32px; justify-content: center;"
                            },
                            style: "display-flex align-items-center",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "25"
                            },
                            _widgetRecordProvider: t
                        }, c.createElement(v, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "cursor: pointer;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "26"
                            },
                            _widgetRecordProvider: t
                        }, c.createElement(p, {
                            extendedEvents: {
                                onClick: n(function() {
                                    var a = d.clone();
                                    i.onClickOpenLiveChat$Action(i.callContext(a))
                                }, "onClick")
                            },
                            image: f.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.livechat2.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "27"
                            },
                            _widgetRecordProvider: t
                        })), c.createElement(v, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "cursor: pointer;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "28"
                            },
                            _widgetRecordProvider: t
                        }, c.createElement(p, {
                            extendedEvents: {
                                onClick: n(function() {
                                    var a = d.clone();
                                    i.openLogoutModal$Action(i.callContext(a))
                                }, "onClick")
                            },
                            gridProperties: {
                                width: "22px"
                            },
                            image: f.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.logout.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "29"
                            },
                            _widgetRecordProvider: t
                        }))))]
                    })
                },
                _dependencies: []
            }), c.createElement(re, {
                extendedProperties: {
                    style: "border-radius: 8px; padding: 20px; width: 400px;"
                },
                showPopup: l.variables.isLogoutModalOpenVar,
                style: "popup-dialog",
                _idProps: {
                    service: e,
                    uuid: "30"
                },
                _widgetRecordProvider: t
            }, c.createElement(v, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "display: flex; flex-direction: column; gap: 20px;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "31"
                },
                _widgetRecordProvider: t
            }, c.createElement(v, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: center; display: flex; justify-content: space-between;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "32"
                },
                _widgetRecordProvider: t
            }, c.createElement(ne, {
                extendedProperties: {
                    style: "font-size: 16px; font-weight: bold;"
                },
                text: [s(R("QTTBDC0q7UWDCIIXHDBoJw#Value", "Are you sure you want to log out?"))],
                _idProps: {
                    service: e,
                    uuid: "33"
                },
                _widgetRecordProvider: t
            }), c.createElement(p, {
                extendedEvents: {
                    onClick: n(function() {
                        var a = d.clone();
                        i.closeLogoutModal$Action(i.callContext(a))
                    }, "onClick")
                },
                extendedProperties: {
                    style: "cursor: pointer;"
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                image: f.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.closenormal.png"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "34"
                },
                _widgetRecordProvider: t
            })), c.createElement(v, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: n(function() {
                        return Promise.resolve().then(function() {
                            var a = d.clone();
                            return i.onClickLogout$Action(i.callContext(a))
                        })
                    }, "onClick")
                },
                extendedProperties: {
                    style: "display: flex; flex-direction: column; gap: 8px;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "35"
                },
                _widgetRecordProvider: t
            }, c.createElement(v, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "36"
                },
                _widgetRecordProvider: t
            }, c.createElement(U, {
                getOwnerSpan: n(function() {
                    return m.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: n(function() {
                    return m.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    height: "40px",
                    title: f.Injector.resolve(f.ServiceNames.TranslationsService).getMessage("gDZYqM81kU+e9eXldbfVrw#Value.-1272307305.1", "Yes, log out"),
                    Width: "100%"
                },
                events: {
                    _handleError: n(function(a) {
                        i.handleError(a)
                    }, "_handleError"),
                    onClick$Action: n(function() {
                        return Promise.resolve().then(function() {
                            var a = d.clone();
                            return i.onClickLogout$Action(i.callContext(a))
                        })
                    }, "onClick$Action")
                },
                _validationProps: {
                    validationService: o
                },
                _idProps: {
                    service: e,
                    uuid: "37",
                    alias: "4"
                },
                _widgetRecordProvider: t,
                _dependencies: []
            })), c.createElement(v, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "38"
                },
                _widgetRecordProvider: t
            }, c.createElement(K, {
                getOwnerSpan: n(function() {
                    return m.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: n(function() {
                    return m.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    title: f.Injector.resolve(f.ServiceNames.TranslationsService).getMessage("eFWzD2sGTkaB086XttArKw#Value.2011110042.1", "Cancel"),
                    Width: "100%",
                    height: "40px",
                    borderRadius: "100px"
                },
                events: {
                    _handleError: n(function(a) {
                        i.handleError(a)
                    }, "_handleError"),
                    onClick$Action: n(function() {
                        var a = d.clone();
                        i.closeLogoutModal$Action(i.callContext(a))
                    }, "onClick$Action")
                },
                _validationProps: {
                    validationService: o
                },
                _idProps: {
                    service: e,
                    uuid: "39",
                    alias: "5"
                },
                _widgetRecordProvider: t,
                _dependencies: []
            }))))))
        }
    };
n(S, "View");
var q = S,
    Rt = q;
var N = M(B());
var pe = {};
var Ce = _; {
    let l = class l extends Ce.Controller.BaseViewController {
        constructor(e, o, t) {
            super(e, o, t, pe);
            var d = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get onClickLeftButton$Action() {
            return this.hasOwnProperty("_onClickLeftButton$Action") || (this._onClickLeftButton$Action = function() {
                return Promise.resolve()
            }), this._onClickLeftButton$Action
        }
        set onClickLeftButton$Action(e) {
            this._onClickLeftButton$Action = e
        }
        get onClickRightButton$Action() {
            return this.hasOwnProperty("_onClickRightButton$Action") || (this._onClickRightButton$Action = function() {
                return Promise.resolve()
            }), this._onClickRightButton$Action
        }
        set onClickRightButton$Action(e) {
            this._onClickRightButton$Action = e
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
            return h.defaultTimeout
        }
    };
    n(l, "ControllerInner");
    let g = l;
    be = g
}
var be, ye = new Ce.Controller.ControllerFactory(be, O);
var $ = _,
    zt = C.PlaceholderContent,
    Xt = C.IteratorPlaceholderContent,
    E = class E extends k.BaseWebBlock {
        static get displayName() {
            return "Common.NewHeaderTitleBlock"
        }
        static getAttributes() {
            return {
                codeFunction: "NewHeaderTitleBlock",
                functionKey: "bae5d7e4-a65c-483b-8ecd-35cf70dbb6c0",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Common.NewHeaderTitleBlock.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [J]
        }
        get modelFactory() {
            return ae
        }
        get controllerFactory() {
            return ye
        }
        get title() {
            return ""
        }
        internalRender() {
            let l = this.model,
                i = this.controller,
                e = this.idService,
                o = i.validationService,
                t = this.widgetsRecordProvider,
                d = i.callContext(),
                r = E.ifWidget,
                s = E.textWidget,
                b = E.asPrimitiveValue,
                R = E.getTranslation,
                m = this;
            return N.createElement("div", this.getRootNodeProperties(), N.createElement(v, {
                align: 0,
                animate: !1,
                style: "ph-new-title-block-container",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, N.createElement(J, {
                getOwnerSpan: n(function() {
                    return m.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: n(function() {
                    return m.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Title: l.variables.titleIn,
                    _titleInDataFetchStatus: $.Model.calculateDataFetchStatus(l.variables._titleInDataFetchStatus),
                    ShowRightButton: l.variables.showRightButtonIn,
                    _showRightButtonInDataFetchStatus: $.Model.calculateDataFetchStatus(l.variables._showRightButtonInDataFetchStatus),
                    ShowLeftButton: l.variables.showLeftButtonIn,
                    _showLeftButtonInDataFetchStatus: $.Model.calculateDataFetchStatus(l.variables._showLeftButtonInDataFetchStatus),
                    CustomRightIcon: l.variables.customRightIconIn,
                    _customRightIconInDataFetchStatus: $.Model.calculateDataFetchStatus(l.variables._customRightIconInDataFetchStatus)
                },
                events: {
                    _handleError: n(function(a) {
                        i.handleError(a)
                    }, "_handleError"),
                    leftButtonAction$Action: n(function() {
                        var a = d.clone();
                        i.onClickLeftButton$Action(i.callContext(a))
                    }, "leftButtonAction$Action"),
                    rightButtonAction$Action: n(function() {
                        var a = d.clone();
                        i.onClickRightButton$Action(i.callContext(a))
                    }, "rightButtonAction$Action")
                },
                _validationProps: {
                    validationService: o
                },
                _idProps: {
                    service: e,
                    uuid: "1",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                _dependencies: []
            })))
        }
    };
n(E, "View");
var Y = E,
    Jt = Y;
export {
    qe as a, Rt as b, Jt as c
};