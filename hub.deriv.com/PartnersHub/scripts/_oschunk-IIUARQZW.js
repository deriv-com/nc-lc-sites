import {
    a as Y
} from "./_oschunk-TO5AYNPX.js";
import {
    a as q
} from "./_oschunk-RNYL55HD.js";
import {
    a as me,
    b as ve,
    c as he,
    d as ge
} from "./_oschunk-2PG5HA6L.js";
import {
    a as W
} from "./_oschunk-S4T4FX3G.js";
import {
    a as j
} from "./_oschunk-HMQSENZ4.js";
import {
    a as G
} from "./_oschunk-XLHEEBMK.js";
import {
    a as J
} from "./_oschunk-22UUXQ4S.js";
import {
    a as x
} from "./_oschunk-QCCZFQH6.js";
import {
    a as le,
    d as m,
    n as C,
    r as de,
    s as B,
    u as ue
} from "./_oschunk-OO36B6PN.js";
import {
    a as b
} from "./_oschunk-6WALBPGV.js";
import {
    a as N,
    g as P,
    i as p
} from "./_oschunk-IL57OEHH.js";
import {
    a as T,
    o as ce,
    p as f
} from "./_oschunk-DW3HXDMW.js";
import {
    a as se
} from "./_oschunk-PNRBOTIK.js";
import {
    a as X,
    yc as L
} from "./_oschunk-JXJHSAQS.js";
import {
    ia as g
} from "./_oschunk-5KJVGEL7.js";
import {
    c as n,
    h as F
} from "./_oschunk-QHO7QY6K.js";
var A = F(N());
var fe = {};
var _e = g; {
    let s = class s extends _e.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t, fe);
            var l = this.controller;
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
            return f.defaultTimeout
        }
    };
    n(s, "ControllerInner");
    let h = s;
    pe = h
}
var pe, Ce = new _e.Controller.ControllerFactory(pe, b);
var ye = g,
    ot = p.PlaceholderContent,
    it = p.IteratorPlaceholderContent,
    E = class E extends P.BaseWebBlock {
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
            return [j]
        }
        get modelFactory() {
            return me
        }
        get controllerFactory() {
            return Ce
        }
        get title() {
            return ""
        }
        internalRender() {
            let s = this.model,
                o = this.controller,
                e = this.idService,
                i = o.validationService,
                t = this.widgetsRecordProvider,
                l = o.callContext(),
                r = E.ifWidget,
                c = E.textWidget,
                y = E.asPrimitiveValue,
                w = E.getTranslation,
                v = this;
            return A.createElement("div", this.getRootNodeProperties(), r(T.getIsAppReady(), !1, this, function() {
                return [A.createElement(m, {
                    align: 0,
                    animate: !1,
                    style: "ph-main-body",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "0"
                    },
                    _widgetRecordProvider: t
                }, A.createElement(B, {
                    align: 0,
                    content: v.props.placeholders.header,
                    style: s.getCachedValue(e.getId("Header.Style"), function() {
                        return s.variables.stickyHeaderIn ? "ph-main-layout-sticky-header" : ""
                    }, function() {
                        return s.variables.stickyHeaderIn
                    }),
                    _idProps: {
                        service: e,
                        name: "Header"
                    },
                    _widgetRecordProvider: t,
                    style_dataFetchStatus: ye.Model.calculateDataFetchStatus(s.variables._stickyHeaderInDataFetchStatus)
                }), A.createElement(m, {
                    align: 0,
                    animate: !1,
                    style: "ph-main-layout-container",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "2"
                    },
                    _widgetRecordProvider: t
                }, A.createElement(B, {
                    align: 0,
                    content: v.props.placeholders.content,
                    _idProps: {
                        service: e,
                        name: "Content"
                    },
                    _widgetRecordProvider: t
                })), A.createElement(B, {
                    align: 0,
                    content: v.props.placeholders.footer,
                    style: s.getCachedValue(e.getId("Footer.Style"), function() {
                        return s.variables.stickyFooterIn ? "ph-main-layout-sticky-footer" : ""
                    }, function() {
                        return s.variables.stickyFooterIn
                    }),
                    _idProps: {
                        service: e,
                        name: "Footer"
                    },
                    _widgetRecordProvider: t,
                    style_dataFetchStatus: ye.Model.calculateDataFetchStatus(s.variables._stickyFooterInDataFetchStatus)
                }))]
            }, function() {
                return [A.createElement(j, {
                    getOwnerSpan: n(function() {
                        return v.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: n(function() {
                        return v.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: n(function(a) {
                            o.handleError(a)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: i
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
n(E, "View");
var Z = E,
    at = Z;
var d = F(N());
var Te = {
        "eFWzD2sGTkaB086XttArKw#Value.2011110042.1": "\u0625\u0644\u063A\u0627\u0621",
        "gDZYqM81kU+e9eXldbfVrw#Value.-1272307305.1": "\u0646\u0639\u0645\u060C \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C",
        "QTTBDC0q7UWDCIIXHDBoJw#Value": "\u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0623\u0646\u0643 \u062A\u0631\u064A\u062F \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C\u061F",
        "_3GsjJ_7XUeN+_hIkr8mYA#Value": "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C",
        "8gKKiuvlaUaxbFCUgp2zKw#Value": "\u062F\u0631\u062F\u0634\u0629 \u062D\u064A\u0629"
    },
    De = {
        "eFWzD2sGTkaB086XttArKw#Value.2011110042.1": "Abbrechen",
        "gDZYqM81kU+e9eXldbfVrw#Value.-1272307305.1": "Ja, abmelden",
        "QTTBDC0q7UWDCIIXHDBoJw#Value": "Bist du dir sicher, dass du dich abmelden m\xF6chtest?",
        "_3GsjJ_7XUeN+_hIkr8mYA#Value": "Abmelden",
        "8gKKiuvlaUaxbFCUgp2zKw#Value": "Live-Chat"
    },
    Ie = {
        "eFWzD2sGTkaB086XttArKw#Value.2011110042.1": "Cancelar",
        "gDZYqM81kU+e9eXldbfVrw#Value.-1272307305.1": "S\xED, cerrar sesi\xF3n",
        "QTTBDC0q7UWDCIIXHDBoJw#Value": "\xBFEst\xE1s seguro de que quieres cerrar sesi\xF3n?",
        "_3GsjJ_7XUeN+_hIkr8mYA#Value": "Cerrar sesi\xF3n",
        "8gKKiuvlaUaxbFCUgp2zKw#Value": "Chat en vivo"
    },
    $e = {
        "eFWzD2sGTkaB086XttArKw#Value.2011110042.1": "Annuler",
        "gDZYqM81kU+e9eXldbfVrw#Value.-1272307305.1": "Oui, d\xE9connecter",
        "QTTBDC0q7UWDCIIXHDBoJw#Value": "\xCAtes-vous s\xFBr de vouloir vous d\xE9connecter?",
        "_3GsjJ_7XUeN+_hIkr8mYA#Value": "Se d\xE9connecter",
        "8gKKiuvlaUaxbFCUgp2zKw#Value": "Chat en direct"
    },
    Ve = {
        "eFWzD2sGTkaB086XttArKw#Value.2011110042.1": "Annulla",
        "gDZYqM81kU+e9eXldbfVrw#Value.-1272307305.1": "S\xEC, termina sessione",
        "QTTBDC0q7UWDCIIXHDBoJw#Value": "Sei sicuro di voler effettuare il logout?",
        "_3GsjJ_7XUeN+_hIkr8mYA#Value": "Disconnettersi",
        "8gKKiuvlaUaxbFCUgp2zKw#Value": "Chat dal vivo"
    },
    Fe = {
        "eFWzD2sGTkaB086XttArKw#Value.2011110042.1": "Anuluj",
        "gDZYqM81kU+e9eXldbfVrw#Value.-1272307305.1": "Tak, wyloguj",
        "QTTBDC0q7UWDCIIXHDBoJw#Value": "Czy jeste\u015B pewien, \u017Ce chcesz si\u0119 wylogowa\u0107?",
        "_3GsjJ_7XUeN+_hIkr8mYA#Value": "Wyloguj si\u0119",
        "8gKKiuvlaUaxbFCUgp2zKw#Value": "Czat na \u017Cywo"
    },
    Ne = {
        "eFWzD2sGTkaB086XttArKw#Value.2011110042.1": "Cancelar",
        "gDZYqM81kU+e9eXldbfVrw#Value.-1272307305.1": "Sim, pretendo terminar sess\xE3o",
        "QTTBDC0q7UWDCIIXHDBoJw#Value": "Tem certeza de que deseja sair?",
        "_3GsjJ_7XUeN+_hIkr8mYA#Value": "Sair",
        "8gKKiuvlaUaxbFCUgp2zKw#Value": "Chat ao vivo"
    },
    Be = {
        "eFWzD2sGTkaB086XttArKw#Value.2011110042.1": "\u041E\u0442\u043C\u0435\u043D\u0430",
        "gDZYqM81kU+e9eXldbfVrw#Value.-1272307305.1": "\u0414\u0430, \u0432\u044B\u0439\u0442\u0438",
        "QTTBDC0q7UWDCIIXHDBoJw#Value": "\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0432\u044B\u0439\u0442\u0438?",
        "_3GsjJ_7XUeN+_hIkr8mYA#Value": "\u0412\u044B\u0439\u0442\u0438",
        "8gKKiuvlaUaxbFCUgp2zKw#Value": "\u0416\u0438\u0432\u043E\u0439 \u0447\u0430\u0442"
    },
    be = {
        "ar-001": {
            translations: Te,
            isRTL: !0
        },
        "de-DE": {
            translations: De,
            isRTL: !1
        },
        "es-ES": {
            translations: Ie,
            isRTL: !1
        },
        "fr-FR": {
            translations: $e,
            isRTL: !1
        },
        "it-IT": {
            translations: Ve,
            isRTL: !1
        },
        "pl-PL": {
            translations: Fe,
            isRTL: !1
        },
        "pt-PT": {
            translations: Ne,
            isRTL: !1
        },
        "ru-RU": {
            translations: Be,
            isRTL: !1
        }
    };

function re(h, s, o, e) {
    return new Promise(function(i, t) {
        let l = localStorage.getItem("loginId"),
            r = localStorage.getItem("token"),
            c = Number(h.CurrentAppId),
            y = h.ServerUrl,
            a = ["green.derivws.com", "red.derivws.com", "blue.derivws.com"].includes(y) ? "oauth.deriv.com" : y;

        function I() {
            l && r && (localStorage.removeItem("loginId"), localStorage.removeItem("token"), localStorage.removeItem("active_user_id"))
        }
        n(I, "removeLocalStorage");

        function xe() {
            var ae;
            s.CloseLogoutModal(), s.ShowLoader(), s.WebsocketLogout(h.ServerUrl, h.CurrentAppId, "EN", r);
            try {
                let $ = window.Analytics.Analytics.getFeatureValue("hydra_be");
                if (!Array.isArray($) || !((ae = $[1]) != null && ae.enabled_for)) throw new Error("Invalid feature value structure");
                if ($[1].enabled_for.includes(c)) {
                    let K = function(V) {
                        V.data === "logout_complete" && (console.log("Logout process completed."), console.log("Redirecting to oauth..."), window.removeEventListener("message", K), i(), I(), s.RedirectToOauth())
                    };
                    n(K, "onMessage"), console.log("Using OAuth2");
                    let S = document.getElementById("logout-iframe");
                    S || (S = document.createElement("iframe"), S.id = "logout-iframe", S.style.display = "none", document.body.appendChild(S), setTimeout(() => {
                        i(), I(), s.RedirectToOauth()
                    }, 1e4)), S.src = `https://${a}/oauth2/sessions/logout`, window.addEventListener("message", K), S.onerror = V => {
                        console.error("There has been a problem with the iframe operation:", V), window.removeEventListener("message", K), t(V)
                    }
                } else i(), I(), s.RedirectToOauth()
            } catch ($) {
                i(), I(), s.RedirectToOauth()
            }
        }
        n(xe, "performLogout"), xe()
    })
}
n(re, "default");
var u = g; {
    let s = class s extends u.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t, be);
            var l = this.controller;
            this.clientActionProxies = {
                closeLogoutModal$Action: n(function() {
                    return l.executeActionInsideJSNode(l._closeLogoutModal$Action.bind(l), l.callContext(), function(r) {
                        return {}
                    }, function() {}, "CloseLogoutModal")
                }, "closeLogoutModal$Action"),
                showLoader$Action: n(function() {
                    return l.executeActionInsideJSNode(l._showLoader$Action.bind(l), l.callContext(), function(r) {
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
                var i = this.model,
                    t = this.controller,
                    l = this.idService;
                return u.Logger.startActiveSpan("OnClickOpenLiveChat", function(r) {
                    r && (r.setAttribute("code.function", "OnClickOpenLiveChat"), r.setAttribute("outsystems.function.key", "1b29f62f-9a81-4ac4-ada5-c4154404dc31"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnClickOpenLiveChat"), e = t.callContext(e), f.showLiveChat$Action(e), f.rudderstackTrackEvent$Action(function() {
                            var c = new L;
                            return c.actionAttr = "click_cta", c.cta_nameAttr = "Open livechat", c.cta_placementAttr = "header", c
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
                var i = this.model,
                    t = this.controller,
                    l = this.idService;
                return u.Logger.startActiveSpan("OpenLogoutModal", function(r) {
                    r && (r.setAttribute("code.function", "OpenLogoutModal"), r.setAttribute("outsystems.function.key", "1f438c7d-3f39-4cec-9be5-eeb2a0279f8b"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OpenLogoutModal"), e = t.callContext(e), i.variables.isLogoutModalOpenVar = !0, f.rudderstackTrackEvent$Action(function() {
                            var c = new L;
                            return c.actionAttr = "click_cta", c.cta_nameAttr = "Open logout modal", c.cta_placementAttr = "header", c
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
                var i = this.model,
                    t = this.controller,
                    l = this.idService;
                return u.Logger.startActiveSpan("OnClickLogout", function(r) {
                    return r && (r.setAttribute("code.function", "OnClickLogout"), r.setAttribute("outsystems.function.key", "6c36a650-5c16-4ad0-a7c3-d5452e960279"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), u.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("OnClickLogout"), e = t.callContext(e), u.Flow.executeAsyncFlow(function() {
                            return i.variables.isLogoutModalOpenVar = !0, f.rudderstackTrackEvent$Action(function() {
                                var c = new L;
                                return c.actionAttr = "click_cta", c.cta_nameAttr = "Logout", c.cta_placementAttr = "header", c
                            }(), "ce_partnershub_form", e), u.Logger.startActiveSpan("HandleLogout", function(c) {
                                c && (c.setAttribute("code.function", "HandleLogout"), c.setAttribute("outsystems.function.key", "540658be-f79b-44d6-b686-f576d4e91d55"), c.setAttribute("outsystems.function.owner.name", "PartnersHub"), c.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return t.safeExecuteAsyncJSNode(re, "HandleLogout", "OnClickLogout", {
                                        ServerUrl: u.DataConversion.JSNodeParamConverter.to(T.getServer(), u.DataTypes.DataTypes.Text),
                                        CurrentAppId: u.DataConversion.JSNodeParamConverter.to(T.getAppId(), u.DataTypes.DataTypes.Text)
                                    }, function(y) {}, {
                                        CloseLogoutModal: t.clientActionProxies.closeLogoutModal$Action,
                                        ShowLoader: t.clientActionProxies.showLoader$Action,
                                        WebsocketLogout: se.clientActionProxies.websocketLogout$Action,
                                        RedirectToOauth: f.clientActionProxies.redirectToOauth$Action
                                    }, {})
                                } finally {
                                    c && c.end()
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
                var i = this.model,
                    t = this.controller,
                    l = this.idService;
                return u.Logger.startActiveSpan("CloseLogoutModal", function(r) {
                    r && (r.setAttribute("code.function", "CloseLogoutModal"), r.setAttribute("outsystems.function.key", "85d4ed6f-5081-4be8-a2e5-c25dde6700b0"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("CloseLogoutModal"), e = t.callContext(e), i.variables.isLogoutModalOpenVar = !1, f.rudderstackTrackEvent$Action(function() {
                            var c = new L;
                            return c.actionAttr = "click_cta", c.cta_nameAttr = "Close logout modal", c.cta_placementAttr = "header", c
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
                var i = this.model,
                    t = this.controller,
                    l = this.idService;
                return u.Logger.startActiveSpan("OnClickOpenSideMenu", function(r) {
                    return r && (r.setAttribute("code.function", "OnClickOpenSideMenu"), r.setAttribute("outsystems.function.key", "8a428d96-cac1-45dd-85ca-e79732fa3992"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), u.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnClickOpenSideMenu"), e = t.callContext(e);
                        var c = new u.DataTypes.VariableHolder;
                        return u.Flow.executeAsyncFlow(function() {
                            return i.flush(), ce.menuShow$Action(e).then(function(y) {
                                c.value = y
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
                var i = this.model,
                    t = this.controller,
                    l = this.idService;
                return u.Logger.startActiveSpan("OnClickRedirectToDerivCom", function(r) {
                    r && (r.setAttribute("code.function", "OnClickRedirectToDerivCom"), r.setAttribute("outsystems.function.key", "b44d1ba3-9f76-449b-bb81-9bc3de3ffc48"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("OnClickRedirectToDerivCom"), e = t.callContext(e), f.rudderstackTrackEvent$Action(function() {
                            var c = new L;
                            return c.actionAttr = "click_cta", c.cta_nameAttr = "Partner logo", c.cta_placementAttr = "header", c
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
                var i = this.model,
                    t = this.controller,
                    l = this.idService;
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
            var i = this.controller;
            return u.Logger.startActiveSpan("OnClickOpenLiveChat__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnClickOpenLiveChat"), t.setAttribute("outsystems.function.key", "1b29f62f-9a81-4ac4-ada5-c4154404dc31"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onClickOpenLiveChat$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        openLogoutModal$Action(e) {
            var i = this.controller;
            return u.Logger.startActiveSpan("OpenLogoutModal__proxy", function(t) {
                t && (t.setAttribute("code.function", "OpenLogoutModal"), t.setAttribute("outsystems.function.key", "1f438c7d-3f39-4cec-9be5-eeb2a0279f8b"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._openLogoutModal$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onClickLogout$Action(e) {
            var i = this.controller;
            return u.Logger.startActiveSpan("OnClickLogout__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnClickLogout"), t.setAttribute("outsystems.function.key", "6c36a650-5c16-4ad0-a7c3-d5452e960279"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), u.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._onClickLogout$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        closeLogoutModal$Action(e) {
            var i = this.controller;
            return u.Logger.startActiveSpan("CloseLogoutModal__proxy", function(t) {
                t && (t.setAttribute("code.function", "CloseLogoutModal"), t.setAttribute("outsystems.function.key", "85d4ed6f-5081-4be8-a2e5-c25dde6700b0"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._closeLogoutModal$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onClickOpenSideMenu$Action(e) {
            var i = this.controller;
            return u.Logger.startActiveSpan("OnClickOpenSideMenu__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnClickOpenSideMenu"), t.setAttribute("outsystems.function.key", "8a428d96-cac1-45dd-85ca-e79732fa3992"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), u.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._onClickOpenSideMenu$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onClickRedirectToDerivCom$Action(e) {
            var i = this.controller;
            return u.Logger.startActiveSpan("OnClickRedirectToDerivCom__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnClickRedirectToDerivCom"), t.setAttribute("outsystems.function.key", "b44d1ba3-9f76-449b-bb81-9bc3de3ffc48"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onClickRedirectToDerivCom$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        showLoader$Action(e) {
            var i = this.controller;
            return u.Logger.startActiveSpan("ShowLoader__proxy", function(t) {
                return t && (t.setAttribute("code.function", "ShowLoader"), t.setAttribute("outsystems.function.key", "c439785f-00f4-430a-bbc6-4ea92c945f22"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), u.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._showLoader$Action, e)
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
            return f.defaultTimeout
        }
    };
    n(s, "ControllerInner");
    let h = s;
    Pe = h
}
var Pe, Ae = new u.Controller.ControllerFactory(Pe, b);
var _ = g,
    R = p.PlaceholderContent,
    $t = p.IteratorPlaceholderContent,
    H = class H extends P.BaseWebBlock {
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
            return [G, W, x, J]
        }
        get modelFactory() {
            return ve
        }
        get controllerFactory() {
            return Ae
        }
        get title() {
            return ""
        }
        internalRender() {
            let s = this.model,
                o = this.controller,
                e = this.idService,
                i = o.validationService,
                t = this.widgetsRecordProvider,
                l = o.callContext(),
                r = H.ifWidget,
                c = H.textWidget,
                y = H.asPrimitiveValue,
                w = H.getTranslation,
                v = this;
            return d.createElement("div", this.getRootNodeProperties(), d.createElement(G, {
                getOwnerSpan: n(function() {
                    return v.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: n(function() {
                    return v.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: n(function(a) {
                        o.handleError(a)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: i
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    onDesktop: new R(function() {
                        return [d.createElement(le, {
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
                        }, d.createElement(m, {
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
                        }, d.createElement(m, {
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
                        }, d.createElement(C, {
                            extendedEvents: {
                                onClick: n(function() {
                                    var a = l.clone();
                                    o.onClickRedirectToDerivCom$Action(o.callContext(a))
                                }, "onClick")
                            },
                            extendedProperties: {
                                style: "height: 24px;"
                            },
                            gridProperties: {
                                width: "130px",
                                marginLeft: "0"
                            },
                            image: _.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.DashboardPartnersLogo.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "4"
                            },
                            _widgetRecordProvider: t
                        })), d.createElement(m, {
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
                        }, d.createElement(W, {
                            getOwnerSpan: n(function() {
                                return v.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return v.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Position: X.position.bottom,
                                ExtendedClass: "tooltip"
                            },
                            events: {
                                _handleError: n(function(a) {
                                    o.handleError(a)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: i
                            },
                            _idProps: {
                                service: e,
                                name: "LivechatTooltip",
                                alias: "2"
                            },
                            _widgetRecordProvider: t,
                            placeholders: {
                                content: new R(function() {
                                    return [d.createElement(m, {
                                        align: 0,
                                        animate: !1,
                                        extendedEvents: {
                                            onClick: n(function() {
                                                var a = l.clone();
                                                o.onClickOpenLiveChat$Action(o.callContext(a))
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
                                    }, d.createElement(C, {
                                        extendedProperties: {
                                            "data-allow-event-propagation": "True"
                                        },
                                        gridProperties: {
                                            width: "28px"
                                        },
                                        image: _.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.livechat2.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "8"
                                        },
                                        _widgetRecordProvider: t
                                    }))]
                                }),
                                tooltip: new R(function() {
                                    return [d.createElement(m, {
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
                                    }, c(w("8gKKiuvlaUaxbFCUgp2zKw#Value", "Live chat")))]
                                })
                            },
                            _dependencies: []
                        }), d.createElement(W, {
                            getOwnerSpan: n(function() {
                                return v.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return v.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Position: X.position.bottom
                            },
                            events: {
                                _handleError: n(function(a) {
                                    o.handleError(a)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: i
                            },
                            _idProps: {
                                service: e,
                                name: "LogoutTooltip",
                                alias: "3"
                            },
                            _widgetRecordProvider: t,
                            placeholders: {
                                content: new R(function() {
                                    return [d.createElement(m, {
                                        align: 0,
                                        animate: !1,
                                        extendedEvents: {
                                            onClick: n(function() {
                                                var a = l.clone();
                                                o.openLogoutModal$Action(o.callContext(a))
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
                                    }, d.createElement(C, {
                                        gridProperties: {
                                            width: "22px"
                                        },
                                        image: _.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.logout.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "12"
                                        },
                                        _widgetRecordProvider: t
                                    }))]
                                }),
                                tooltip: new R(function() {
                                    return [d.createElement(m, {
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
                                    }, c(w("_3GsjJ_7XUeN+_hIkr8mYA#Value", "Log out")))]
                                })
                            },
                            _dependencies: []
                        }))))]
                    }),
                    onTablet: new R(function() {
                        return [d.createElement(m, {
                            align: 0,
                            animate: !1,
                            extendedEvents: {
                                onClick: n(function() {
                                    return Promise.resolve().then(function() {
                                        var a = l.clone();
                                        return o.onClickOpenSideMenu$Action(o.callContext(a))
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
                        }, d.createElement(m, {
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
                        }, d.createElement(C, {
                            extendedEvents: {
                                onClick: n(function() {
                                    var a = l.clone();
                                    o.onClickRedirectToDerivCom$Action(o.callContext(a))
                                }, "onClick")
                            },
                            extendedProperties: {
                                style: "height: 48px;"
                            },
                            gridProperties: {
                                width: "130px"
                            },
                            image: _.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.DashboardPartnersLogo.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "16"
                            },
                            _widgetRecordProvider: t
                        })), d.createElement(m, {
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
                        }, d.createElement(m, {
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
                        }, d.createElement(C, {
                            extendedEvents: {
                                onClick: n(function() {
                                    var a = l.clone();
                                    o.onClickOpenLiveChat$Action(o.callContext(a))
                                }, "onClick")
                            },
                            image: _.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.livechat2.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "19"
                            },
                            _widgetRecordProvider: t
                        })), d.createElement(m, {
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
                        }, d.createElement(C, {
                            extendedEvents: {
                                onClick: n(function() {
                                    var a = l.clone();
                                    o.openLogoutModal$Action(o.callContext(a))
                                }, "onClick")
                            },
                            gridProperties: {
                                width: "22px"
                            },
                            image: _.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.logout.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "21"
                            },
                            _widgetRecordProvider: t
                        }))))]
                    }),
                    onPhone: new R(function() {
                        return [d.createElement(m, {
                            align: 0,
                            animate: !1,
                            extendedEvents: {
                                onClick: n(function() {
                                    return Promise.resolve().then(function() {
                                        var a = l.clone();
                                        return o.onClickOpenSideMenu$Action(o.callContext(a))
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
                        }, d.createElement(m, {
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
                        }, d.createElement(C, {
                            extendedEvents: {
                                onClick: n(function() {
                                    var a = l.clone();
                                    o.onClickRedirectToDerivCom$Action(o.callContext(a))
                                }, "onClick")
                            },
                            extendedProperties: {
                                style: "height: 48px;"
                            },
                            gridProperties: {
                                width: "130px"
                            },
                            image: _.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.DashboardPartnersLogo.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "24"
                            },
                            _widgetRecordProvider: t
                        })), d.createElement(m, {
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
                        }, d.createElement(m, {
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
                        }, d.createElement(C, {
                            extendedEvents: {
                                onClick: n(function() {
                                    var a = l.clone();
                                    o.onClickOpenLiveChat$Action(o.callContext(a))
                                }, "onClick")
                            },
                            image: _.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.livechat2.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "27"
                            },
                            _widgetRecordProvider: t
                        })), d.createElement(m, {
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
                        }, d.createElement(C, {
                            extendedEvents: {
                                onClick: n(function() {
                                    var a = l.clone();
                                    o.openLogoutModal$Action(o.callContext(a))
                                }, "onClick")
                            },
                            gridProperties: {
                                width: "22px"
                            },
                            image: _.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.logout.svg"),
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
            }), d.createElement(de, {
                extendedProperties: {
                    style: "border-radius: 8px; padding: 20px; width: 400px;"
                },
                showPopup: s.variables.isLogoutModalOpenVar,
                style: "popup-dialog",
                _idProps: {
                    service: e,
                    uuid: "30"
                },
                _widgetRecordProvider: t
            }, d.createElement(m, {
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
            }, d.createElement(m, {
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
            }, d.createElement(ue, {
                extendedProperties: {
                    style: "font-size: 16px; font-weight: bold;"
                },
                text: [c(w("QTTBDC0q7UWDCIIXHDBoJw#Value", "Are you sure you want to log out?"))],
                _idProps: {
                    service: e,
                    uuid: "33"
                },
                _widgetRecordProvider: t
            }), d.createElement(C, {
                extendedEvents: {
                    onClick: n(function() {
                        var a = l.clone();
                        o.closeLogoutModal$Action(o.callContext(a))
                    }, "onClick")
                },
                extendedProperties: {
                    style: "cursor: pointer;"
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                image: _.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.closenormal.png"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "34"
                },
                _widgetRecordProvider: t
            })), d.createElement(m, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: n(function() {
                        return Promise.resolve().then(function() {
                            var a = l.clone();
                            return o.onClickLogout$Action(o.callContext(a))
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
            }, d.createElement(m, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "36"
                },
                _widgetRecordProvider: t
            }, d.createElement(x, {
                getOwnerSpan: n(function() {
                    return v.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: n(function() {
                    return v.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    height: "40px",
                    title: _.Injector.resolve(_.ServiceNames.TranslationsService).getMessage("gDZYqM81kU+e9eXldbfVrw#Value.-1272307305.1", "Yes, log out"),
                    Width: "100%"
                },
                events: {
                    _handleError: n(function(a) {
                        o.handleError(a)
                    }, "_handleError"),
                    onClick$Action: n(function() {
                        return Promise.resolve().then(function() {
                            var a = l.clone();
                            return o.onClickLogout$Action(o.callContext(a))
                        })
                    }, "onClick$Action")
                },
                _validationProps: {
                    validationService: i
                },
                _idProps: {
                    service: e,
                    uuid: "37",
                    alias: "4"
                },
                _widgetRecordProvider: t,
                _dependencies: []
            })), d.createElement(m, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "38"
                },
                _widgetRecordProvider: t
            }, d.createElement(J, {
                getOwnerSpan: n(function() {
                    return v.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: n(function() {
                    return v.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    title: _.Injector.resolve(_.ServiceNames.TranslationsService).getMessage("eFWzD2sGTkaB086XttArKw#Value.2011110042.1", "Cancel"),
                    Width: "100%",
                    height: "40px",
                    borderRadius: "100px"
                },
                events: {
                    _handleError: n(function(a) {
                        o.handleError(a)
                    }, "_handleError"),
                    onClick$Action: n(function() {
                        var a = l.clone();
                        o.closeLogoutModal$Action(o.callContext(a))
                    }, "onClick$Action")
                },
                _validationProps: {
                    validationService: i
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
n(H, "View");
var ne = H,
    Vt = ne;
var U = F(N());
var we = {};
var Se = g; {
    let s = class s extends Se.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t, we);
            var l = this.controller;
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
            return f.defaultTimeout
        }
    };
    n(s, "ControllerInner");
    let h = s;
    Ee = h
}
var Ee, Re = new Se.Controller.ControllerFactory(Ee, b);
var M = g,
    tr = p.PlaceholderContent,
    rr = p.IteratorPlaceholderContent,
    O = class O extends P.BaseWebBlock {
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
            return [q]
        }
        get modelFactory() {
            return he
        }
        get controllerFactory() {
            return Re
        }
        get title() {
            return ""
        }
        internalRender() {
            let s = this.model,
                o = this.controller,
                e = this.idService,
                i = o.validationService,
                t = this.widgetsRecordProvider,
                l = o.callContext(),
                r = O.ifWidget,
                c = O.textWidget,
                y = O.asPrimitiveValue,
                w = O.getTranslation,
                v = this;
            return U.createElement("div", this.getRootNodeProperties(), U.createElement(m, {
                align: 0,
                animate: !1,
                style: "ph-new-title-block-container",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, U.createElement(q, {
                getOwnerSpan: n(function() {
                    return v.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: n(function() {
                    return v.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Title: s.variables.titleIn,
                    _titleInDataFetchStatus: M.Model.calculateDataFetchStatus(s.variables._titleInDataFetchStatus),
                    ShowRightButton: s.variables.showRightButtonIn,
                    _showRightButtonInDataFetchStatus: M.Model.calculateDataFetchStatus(s.variables._showRightButtonInDataFetchStatus),
                    ShowLeftButton: s.variables.showLeftButtonIn,
                    _showLeftButtonInDataFetchStatus: M.Model.calculateDataFetchStatus(s.variables._showLeftButtonInDataFetchStatus),
                    CustomRightIcon: s.variables.customRightIconIn,
                    _customRightIconInDataFetchStatus: M.Model.calculateDataFetchStatus(s.variables._customRightIconInDataFetchStatus)
                },
                events: {
                    _handleError: n(function(a) {
                        o.handleError(a)
                    }, "_handleError"),
                    leftButtonAction$Action: n(function() {
                        var a = l.clone();
                        o.onClickLeftButton$Action(o.callContext(a))
                    }, "leftButtonAction$Action"),
                    rightButtonAction$Action: n(function() {
                        var a = l.clone();
                        o.onClickRightButton$Action(o.callContext(a))
                    }, "rightButtonAction$Action")
                },
                _validationProps: {
                    validationService: i
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
n(O, "View");
var oe = O,
    nr = oe;
var D = F(N());
var He = {};
var Oe = g; {
    let s = class s extends Oe.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t, He);
            var l = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get secondaryOnClick$Action() {
            return this.hasOwnProperty("_secondaryOnClick$Action") || (this._secondaryOnClick$Action = function() {
                return Promise.resolve()
            }), this._secondaryOnClick$Action
        }
        set secondaryOnClick$Action(e) {
            this._secondaryOnClick$Action = e
        }
        get primaryOnClick$Action() {
            return this.hasOwnProperty("_primaryOnClick$Action") || (this._primaryOnClick$Action = function() {
                return Promise.resolve()
            }), this._primaryOnClick$Action
        }
        set primaryOnClick$Action(e) {
            this._primaryOnClick$Action = e
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
            return f.defaultTimeout
        }
    };
    n(s, "ControllerInner");
    let h = s;
    ke = h
}
var ke, Le = new Oe.Controller.ControllerFactory(ke, b);
var z = g,
    Pr = p.PlaceholderContent,
    Ar = p.IteratorPlaceholderContent,
    k = class k extends P.BaseWebBlock {
        static get displayName() {
            return "Common.StickyButtonBottom"
        }
        static getAttributes() {
            return {
                codeFunction: "StickyButtonBottom",
                functionKey: "9fb2371c-6d33-49e9-af47-2d06e295e4fe",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Common.StickyButtonBottom.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [x, Y]
        }
        get modelFactory() {
            return ge
        }
        get controllerFactory() {
            return Le
        }
        get title() {
            return ""
        }
        internalRender() {
            let s = this.model,
                o = this.controller,
                e = this.idService,
                i = o.validationService,
                t = this.widgetsRecordProvider,
                l = o.callContext(),
                r = k.ifWidget,
                c = k.textWidget,
                y = k.asPrimitiveValue,
                w = k.getTranslation,
                v = this;
            return D.createElement("div", this.getRootNodeProperties(), D.createElement(m, {
                align: 0,
                animate: !1,
                style: s.getCachedValue(e.getId("Aa7gmU1kFUi4Ef8S5DS2lQ.Style"), function() {
                    return "ph-sticky-btn-bottom display-flex gap-s " + (s.variables.shouldHideOnDesktopIn === !0 ? "ph-should-hide-on-desktop" : "")
                }, function() {
                    return s.variables.shouldHideOnDesktopIn
                }),
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t,
                style_dataFetchStatus: z.Model.calculateDataFetchStatus(s.variables._shouldHideOnDesktopInDataFetchStatus)
            }, D.createElement(x, {
                getOwnerSpan: n(function() {
                    return v.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: n(function() {
                    return v.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    title: s.variables.primaryButtonLabelIn,
                    _titleInDataFetchStatus: z.Model.calculateDataFetchStatus(s.variables._primaryButtonLabelInDataFetchStatus),
                    borderRadius: "100px",
                    Width: "100%"
                },
                events: {
                    _handleError: n(function(a) {
                        o.handleError(a)
                    }, "_handleError"),
                    onClick$Action: n(function() {
                        var a = l.clone();
                        o.primaryOnClick$Action(o.callContext(a))
                    }, "onClick$Action")
                },
                _validationProps: {
                    validationService: i
                },
                _idProps: {
                    service: e,
                    name: "PrimaryButton",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                _dependencies: []
            }), r(s.variables.secondaryButtonLabelIn !== z.BuiltinFunctions.nullTextIdentifier(), !1, this, function() {
                return [D.createElement(Y, {
                    getOwnerSpan: n(function() {
                        return v.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: n(function() {
                        return v.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        title: s.variables.secondaryButtonLabelIn,
                        _titleInDataFetchStatus: z.Model.calculateDataFetchStatus(s.variables._secondaryButtonLabelInDataFetchStatus),
                        Width: "100%",
                        borderRadius: "100px"
                    },
                    events: {
                        _handleError: n(function(a) {
                            o.handleError(a)
                        }, "_handleError"),
                        onClick$Action: n(function() {
                            var a = l.clone();
                            o.secondaryOnClick$Action(o.callContext(a))
                        }, "onClick$Action")
                    },
                    _validationProps: {
                        validationService: i
                    },
                    _idProps: {
                        service: e,
                        name: "SecondaryButton",
                        alias: "2"
                    },
                    _widgetRecordProvider: t,
                    _dependencies: []
                })]
            }, function() {
                return []
            })))
        }
    };
n(k, "View");
var ie = k,
    wr = ie;
export {
    at as a, Vt as b, nr as c, wr as d
};