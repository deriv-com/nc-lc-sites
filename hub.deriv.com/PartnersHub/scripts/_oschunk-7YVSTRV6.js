import {
    a as Z,
    b as ee
} from "./_oschunk-COLLTQW4.js";
import {
    a as D
} from "./_oschunk-N6CDNE7S.js";
import {
    a as U
} from "./_oschunk-C75U7DRJ.js";
import {
    a as W
} from "./_oschunk-F2QOJGMT.js";
import {
    a as M
} from "./_oschunk-6BFNTJQ7.js";
import {
    a as $
} from "./_oschunk-VDU6C3OQ.js";
import {
    a as q,
    d as v,
    n as h,
    r as Y,
    s as I,
    u as Q
} from "./_oschunk-LWMGEL7F.js";
import {
    a as x
} from "./_oschunk-4GXKK3IG.js";
import {
    a as j,
    g as T,
    i as E
} from "./_oschunk-WZHUAZJP.js";
import {
    a as O,
    o as J,
    q as _
} from "./_oschunk-BDI2RWOA.js";
import {
    a as G
} from "./_oschunk-P3RPGEI5.js";
import {
    Ac as S,
    a as N
} from "./_oschunk-7WCOCYFU.js";
import {
    ia as p
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as o,
    h as z
} from "./_oschunk-QHO7QY6K.js";
var C = z(j());
var te = {};
var re = p; {
    let u = class u extends re.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, te);
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
            return _.defaultTimeout
        }
    };
    o(u, "ControllerInner");
    let f = u;
    ne = f
}
var ne, oe = new re.Controller.ControllerFactory(ne, x);
var ie = p,
    $e = E.PlaceholderContent,
    Me = E.IteratorPlaceholderContent,
    A = class A extends T.BaseWebBlock {
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
            return [U]
        }
        get modelFactory() {
            return Z
        }
        get controllerFactory() {
            return oe
        }
        get title() {
            return ""
        }
        internalRender() {
            let u = this.model,
                a = this.controller,
                e = this.idService,
                n = a.validationService,
                t = this.widgetsRecordProvider,
                l = a.callContext(),
                r = A.ifWidget,
                s = A.textWidget,
                y = A.asPrimitiveValue,
                R = A.getTranslation,
                m = this;
            return C.createElement("div", this.getRootNodeProperties(), r(O.getIsAppReady(), !1, this, function() {
                return [C.createElement(v, {
                    align: 0,
                    animate: !1,
                    style: "ph-main-body",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "0"
                    },
                    _widgetRecordProvider: t
                }, C.createElement(I, {
                    align: 0,
                    content: m.props.placeholders.header,
                    style: u.getCachedValue(e.getId("Header.Style"), function() {
                        return u.variables.stickyHeaderIn ? "ph-main-layout-sticky-header" : ""
                    }, function() {
                        return u.variables.stickyHeaderIn
                    }),
                    _idProps: {
                        service: e,
                        name: "Header"
                    },
                    _widgetRecordProvider: t,
                    style_dataFetchStatus: ie.Model.calculateDataFetchStatus(u.variables._stickyHeaderInDataFetchStatus)
                }), C.createElement(v, {
                    align: 0,
                    animate: !1,
                    style: "ph-main-layout-container",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "2"
                    },
                    _widgetRecordProvider: t
                }, C.createElement(I, {
                    align: 0,
                    content: m.props.placeholders.content,
                    _idProps: {
                        service: e,
                        name: "Content"
                    },
                    _widgetRecordProvider: t
                })), C.createElement(I, {
                    align: 0,
                    content: m.props.placeholders.footer,
                    style: u.getCachedValue(e.getId("Footer.Style"), function() {
                        return u.variables.stickyFooterIn ? "ph-main-layout-sticky-footer" : ""
                    }, function() {
                        return u.variables.stickyFooterIn
                    }),
                    _idProps: {
                        service: e,
                        name: "Footer"
                    },
                    _widgetRecordProvider: t,
                    style_dataFetchStatus: ie.Model.calculateDataFetchStatus(u.variables._stickyFooterInDataFetchStatus)
                }))]
            }, function() {
                return [C.createElement(U, {
                    getOwnerSpan: o(function() {
                        return m.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: o(function() {
                        return m.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: o(function(i) {
                            a.handleError(i)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: n
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
o(A, "View");
var F = A,
    We = F;
var c = z(j());
var me = {
        "eFWzD2sGTkaB086XttArKw#Value.2011110042.1": "\u0625\u0644\u063A\u0627\u0621",
        "gDZYqM81kU+e9eXldbfVrw#Value.-1272307305.1": "\u0646\u0639\u0645\u060C \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C",
        "QTTBDC0q7UWDCIIXHDBoJw#Value": "\u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0623\u0646\u0643 \u062A\u0631\u064A\u062F \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C\u061F",
        "_3GsjJ_7XUeN+_hIkr8mYA#Value": "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C",
        "8gKKiuvlaUaxbFCUgp2zKw#Value": "\u062F\u0631\u062F\u0634\u0629 \u062D\u064A\u0629"
    },
    ge = {
        "eFWzD2sGTkaB086XttArKw#Value.2011110042.1": "Abbrechen",
        "gDZYqM81kU+e9eXldbfVrw#Value.-1272307305.1": "Ja, abmelden",
        "QTTBDC0q7UWDCIIXHDBoJw#Value": "Bist du dir sicher, dass du dich abmelden m\xF6chtest?",
        "_3GsjJ_7XUeN+_hIkr8mYA#Value": "Abmelden",
        "8gKKiuvlaUaxbFCUgp2zKw#Value": "Live-Chat"
    },
    fe = {
        "eFWzD2sGTkaB086XttArKw#Value.2011110042.1": "Cancelar",
        "gDZYqM81kU+e9eXldbfVrw#Value.-1272307305.1": "S\xED, cerrar sesi\xF3n",
        "QTTBDC0q7UWDCIIXHDBoJw#Value": "\xBFEst\xE1s seguro de que quieres cerrar sesi\xF3n?",
        "_3GsjJ_7XUeN+_hIkr8mYA#Value": "Cerrar sesi\xF3n",
        "8gKKiuvlaUaxbFCUgp2zKw#Value": "Chat en vivo"
    },
    _e = {
        "eFWzD2sGTkaB086XttArKw#Value.2011110042.1": "Annuler",
        "gDZYqM81kU+e9eXldbfVrw#Value.-1272307305.1": "Oui, d\xE9connecter",
        "QTTBDC0q7UWDCIIXHDBoJw#Value": "\xCAtes-vous s\xFBr de vouloir vous d\xE9connecter?",
        "_3GsjJ_7XUeN+_hIkr8mYA#Value": "Se d\xE9connecter",
        "8gKKiuvlaUaxbFCUgp2zKw#Value": "Chat en direct"
    },
    he = {
        "eFWzD2sGTkaB086XttArKw#Value.2011110042.1": "Annulla",
        "gDZYqM81kU+e9eXldbfVrw#Value.-1272307305.1": "S\xEC, termina sessione",
        "QTTBDC0q7UWDCIIXHDBoJw#Value": "Sei sicuro di voler effettuare il logout?",
        "_3GsjJ_7XUeN+_hIkr8mYA#Value": "Disconnettersi",
        "8gKKiuvlaUaxbFCUgp2zKw#Value": "Chat dal vivo"
    },
    pe = {
        "eFWzD2sGTkaB086XttArKw#Value.2011110042.1": "Anuluj",
        "gDZYqM81kU+e9eXldbfVrw#Value.-1272307305.1": "Tak, wyloguj",
        "QTTBDC0q7UWDCIIXHDBoJw#Value": "Czy jeste\u015B pewien, \u017Ce chcesz si\u0119 wylogowa\u0107?",
        "_3GsjJ_7XUeN+_hIkr8mYA#Value": "Wyloguj si\u0119",
        "8gKKiuvlaUaxbFCUgp2zKw#Value": "Czat na \u017Cywo"
    },
    Ce = {
        "eFWzD2sGTkaB086XttArKw#Value.2011110042.1": "Cancelar",
        "gDZYqM81kU+e9eXldbfVrw#Value.-1272307305.1": "Sim, pretendo terminar sess\xE3o",
        "QTTBDC0q7UWDCIIXHDBoJw#Value": "Tem certeza de que deseja sair?",
        "_3GsjJ_7XUeN+_hIkr8mYA#Value": "Sair",
        "8gKKiuvlaUaxbFCUgp2zKw#Value": "Chat ao vivo"
    },
    ye = {
        "eFWzD2sGTkaB086XttArKw#Value.2011110042.1": "\u041E\u0442\u043C\u0435\u043D\u0430",
        "gDZYqM81kU+e9eXldbfVrw#Value.-1272307305.1": "\u0414\u0430, \u0432\u044B\u0439\u0442\u0438",
        "QTTBDC0q7UWDCIIXHDBoJw#Value": "\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0432\u044B\u0439\u0442\u0438?",
        "_3GsjJ_7XUeN+_hIkr8mYA#Value": "\u0412\u044B\u0439\u0442\u0438",
        "8gKKiuvlaUaxbFCUgp2zKw#Value": "\u0416\u0438\u0432\u043E\u0439 \u0447\u0430\u0442"
    },
    ae = {
        "ar-001": {
            translations: me,
            isRTL: !0
        },
        "de-DE": {
            translations: ge,
            isRTL: !1
        },
        "es-ES": {
            translations: fe,
            isRTL: !1
        },
        "fr-FR": {
            translations: _e,
            isRTL: !1
        },
        "it-IT": {
            translations: he,
            isRTL: !1
        },
        "pl-PL": {
            translations: pe,
            isRTL: !1
        },
        "pt-PT": {
            translations: Ce,
            isRTL: !1
        },
        "ru-RU": {
            translations: ye,
            isRTL: !1
        }
    };

function B(f, u, a, e) {
    return new Promise(function(n, t) {
        let l = localStorage.getItem("loginId"),
            r = localStorage.getItem("token"),
            s = Number(f.CurrentAppId),
            y = f.ServerUrl,
            i = ["green.derivws.com", "red.derivws.com", "blue.derivws.com"].includes(y) ? "oauth.deriv.com" : y;

        function L() {
            l && r && (localStorage.removeItem("loginId"), localStorage.removeItem("token"), localStorage.removeItem("active_user_id"))
        }
        o(L, "removeLocalStorage");

        function le() {
            var X;
            u.CloseLogoutModal(), u.ShowLoader(), u.WebsocketLogout(f.ServerUrl, f.CurrentAppId, "EN", r);
            try {
                let H = window.Analytics.Analytics.getFeatureValue("hydra_be");
                if (!Array.isArray(H) || !((X = H[1]) != null && X.enabled_for)) throw new Error("Invalid feature value structure");
                if (H[1].enabled_for.includes(s)) {
                    let V = function(k) {
                        k.data === "logout_complete" && (console.log("Logout process completed."), console.log("Redirecting to oauth..."), window.removeEventListener("message", V), n(), L(), u.RedirectToOauth())
                    };
                    o(V, "onMessage"), console.log("Using OAuth2");
                    let b = document.getElementById("logout-iframe");
                    b || (b = document.createElement("iframe"), b.id = "logout-iframe", b.style.display = "none", document.body.appendChild(b), setTimeout(() => {
                        n(), L(), u.RedirectToOauth()
                    }, 1e4)), b.src = `https://${i}/oauth2/sessions/logout`, window.addEventListener("message", V), b.onerror = k => {
                        console.error("There has been a problem with the iframe operation:", k), window.removeEventListener("message", V), t(k)
                    }
                } else n(), L(), u.RedirectToOauth()
            } catch (H) {
                n(), L(), u.RedirectToOauth()
            }
        }
        o(le, "performLogout"), le()
    })
}
o(B, "default");
var d = p; {
    let u = class u extends d.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, ae);
            var l = this.controller;
            this.clientActionProxies = {
                closeLogoutModal$Action: o(function() {
                    return l.executeActionInsideJSNode(l._closeLogoutModal$Action.bind(l), l.callContext(), function(r) {
                        return {}
                    }, function() {}, "CloseLogoutModal")
                }, "closeLogoutModal$Action"),
                showLoader$Action: o(function() {
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
                var n = this.model,
                    t = this.controller,
                    l = this.idService;
                return d.Logger.startActiveSpan("OnClickOpenLiveChat", function(r) {
                    r && (r.setAttribute("code.function", "OnClickOpenLiveChat"), r.setAttribute("outsystems.function.key", "1b29f62f-9a81-4ac4-ada5-c4154404dc31"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnClickOpenLiveChat"), e = t.callContext(e), _.showLiveChat$Action(e), _.rudderstackTrackEvent$Action(function() {
                            var s = new S;
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
                var n = this.model,
                    t = this.controller,
                    l = this.idService;
                return d.Logger.startActiveSpan("OpenLogoutModal", function(r) {
                    r && (r.setAttribute("code.function", "OpenLogoutModal"), r.setAttribute("outsystems.function.key", "1f438c7d-3f39-4cec-9be5-eeb2a0279f8b"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OpenLogoutModal"), e = t.callContext(e), n.variables.isLogoutModalOpenVar = !0, _.rudderstackTrackEvent$Action(function() {
                            var s = new S;
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
                var n = this.model,
                    t = this.controller,
                    l = this.idService;
                return d.Logger.startActiveSpan("OnClickLogout", function(r) {
                    return r && (r.setAttribute("code.function", "OnClickLogout"), r.setAttribute("outsystems.function.key", "6c36a650-5c16-4ad0-a7c3-d5452e960279"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), d.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("OnClickLogout"), e = t.callContext(e), d.Flow.executeAsyncFlow(function() {
                            return n.variables.isLogoutModalOpenVar = !0, _.rudderstackTrackEvent$Action(function() {
                                var s = new S;
                                return s.actionAttr = "click_cta", s.cta_nameAttr = "Logout", s.cta_placementAttr = "header", s
                            }(), "ce_partnershub_form", e), d.Logger.startActiveSpan("HandleLogout", function(s) {
                                s && (s.setAttribute("code.function", "HandleLogout"), s.setAttribute("outsystems.function.key", "540658be-f79b-44d6-b686-f576d4e91d55"), s.setAttribute("outsystems.function.owner.name", "PartnersHub"), s.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return t.safeExecuteAsyncJSNode(B, "HandleLogout", "OnClickLogout", {
                                        ServerUrl: d.DataConversion.JSNodeParamConverter.to(O.getServer(), d.DataTypes.DataTypes.Text),
                                        CurrentAppId: d.DataConversion.JSNodeParamConverter.to(O.getAppId(), d.DataTypes.DataTypes.Text)
                                    }, function(y) {}, {
                                        CloseLogoutModal: t.clientActionProxies.closeLogoutModal$Action,
                                        ShowLoader: t.clientActionProxies.showLoader$Action,
                                        WebsocketLogout: G.clientActionProxies.websocketLogout$Action,
                                        RedirectToOauth: _.clientActionProxies.redirectToOauth$Action
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
                var n = this.model,
                    t = this.controller,
                    l = this.idService;
                return d.Logger.startActiveSpan("CloseLogoutModal", function(r) {
                    r && (r.setAttribute("code.function", "CloseLogoutModal"), r.setAttribute("outsystems.function.key", "85d4ed6f-5081-4be8-a2e5-c25dde6700b0"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("CloseLogoutModal"), e = t.callContext(e), n.variables.isLogoutModalOpenVar = !1, _.rudderstackTrackEvent$Action(function() {
                            var s = new S;
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
                var n = this.model,
                    t = this.controller,
                    l = this.idService;
                return d.Logger.startActiveSpan("OnClickOpenSideMenu", function(r) {
                    return r && (r.setAttribute("code.function", "OnClickOpenSideMenu"), r.setAttribute("outsystems.function.key", "8a428d96-cac1-45dd-85ca-e79732fa3992"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), d.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnClickOpenSideMenu"), e = t.callContext(e);
                        var s = new d.DataTypes.VariableHolder;
                        return d.Flow.executeAsyncFlow(function() {
                            return n.flush(), J.menuShow$Action(e).then(function(y) {
                                s.value = y
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
                var n = this.model,
                    t = this.controller,
                    l = this.idService;
                return d.Logger.startActiveSpan("OnClickRedirectToDerivCom", function(r) {
                    r && (r.setAttribute("code.function", "OnClickRedirectToDerivCom"), r.setAttribute("outsystems.function.key", "b44d1ba3-9f76-449b-bb81-9bc3de3ffc48"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("OnClickRedirectToDerivCom"), e = t.callContext(e), _.rudderstackTrackEvent$Action(function() {
                            var s = new S;
                            return s.actionAttr = "click_cta", s.cta_nameAttr = "Partner logo", s.cta_placementAttr = "header", s
                        }(), "ce_partnershub_form", e), d.Navigation.navigateTo(d.Navigation.generateScreenURL("https://deriv.com/partners/affiliate-ib/", {}), d.Transitions.createTransition(d.Transitions.TransitionAnimation.Default), e, !0)
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
                var n = this.model,
                    t = this.controller,
                    l = this.idService;
                return d.Logger.startActiveSpan("ShowLoader", function(r) {
                    return r && (r.setAttribute("code.function", "ShowLoader"), r.setAttribute("outsystems.function.key", "c439785f-00f4-430a-bbc6-4ea92c945f22"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), d.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("ShowLoader"), e = t.callContext(e), d.Flow.executeAsyncFlow(function() {
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
            var n = this.controller;
            return d.Logger.startActiveSpan("OnClickOpenLiveChat__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnClickOpenLiveChat"), t.setAttribute("outsystems.function.key", "1b29f62f-9a81-4ac4-ada5-c4154404dc31"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onClickOpenLiveChat$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        openLogoutModal$Action(e) {
            var n = this.controller;
            return d.Logger.startActiveSpan("OpenLogoutModal__proxy", function(t) {
                t && (t.setAttribute("code.function", "OpenLogoutModal"), t.setAttribute("outsystems.function.key", "1f438c7d-3f39-4cec-9be5-eeb2a0279f8b"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._openLogoutModal$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onClickLogout$Action(e) {
            var n = this.controller;
            return d.Logger.startActiveSpan("OnClickLogout__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnClickLogout"), t.setAttribute("outsystems.function.key", "6c36a650-5c16-4ad0-a7c3-d5452e960279"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), d.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onClickLogout$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        closeLogoutModal$Action(e) {
            var n = this.controller;
            return d.Logger.startActiveSpan("CloseLogoutModal__proxy", function(t) {
                t && (t.setAttribute("code.function", "CloseLogoutModal"), t.setAttribute("outsystems.function.key", "85d4ed6f-5081-4be8-a2e5-c25dde6700b0"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._closeLogoutModal$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onClickOpenSideMenu$Action(e) {
            var n = this.controller;
            return d.Logger.startActiveSpan("OnClickOpenSideMenu__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnClickOpenSideMenu"), t.setAttribute("outsystems.function.key", "8a428d96-cac1-45dd-85ca-e79732fa3992"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), d.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onClickOpenSideMenu$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onClickRedirectToDerivCom$Action(e) {
            var n = this.controller;
            return d.Logger.startActiveSpan("OnClickRedirectToDerivCom__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnClickRedirectToDerivCom"), t.setAttribute("outsystems.function.key", "b44d1ba3-9f76-449b-bb81-9bc3de3ffc48"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onClickRedirectToDerivCom$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        showLoader$Action(e) {
            var n = this.controller;
            return d.Logger.startActiveSpan("ShowLoader__proxy", function(t) {
                return t && (t.setAttribute("code.function", "ShowLoader"), t.setAttribute("outsystems.function.key", "c439785f-00f4-430a-bbc6-4ea92c945f22"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), d.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._showLoader$Action, e)
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
            return _.defaultTimeout
        }
    };
    o(u, "ControllerInner");
    let f = u;
    se = f
}
var se, ce = new d.Controller.ControllerFactory(se, x);
var g = p,
    P = E.PlaceholderContent,
    _t = E.IteratorPlaceholderContent,
    w = class w extends T.BaseWebBlock {
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
            return [W, D, $, M]
        }
        get modelFactory() {
            return ee
        }
        get controllerFactory() {
            return ce
        }
        get title() {
            return ""
        }
        internalRender() {
            let u = this.model,
                a = this.controller,
                e = this.idService,
                n = a.validationService,
                t = this.widgetsRecordProvider,
                l = a.callContext(),
                r = w.ifWidget,
                s = w.textWidget,
                y = w.asPrimitiveValue,
                R = w.getTranslation,
                m = this;
            return c.createElement("div", this.getRootNodeProperties(), c.createElement(W, {
                getOwnerSpan: o(function() {
                    return m.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return m.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: o(function(i) {
                        a.handleError(i)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: n
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    onDesktop: new P(function() {
                        return [c.createElement(q, {
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
                        }, c.createElement(h, {
                            extendedEvents: {
                                onClick: o(function() {
                                    var i = l.clone();
                                    a.onClickRedirectToDerivCom$Action(a.callContext(i))
                                }, "onClick")
                            },
                            extendedProperties: {
                                style: "height: 24px;"
                            },
                            gridProperties: {
                                width: "130px",
                                marginLeft: "0"
                            },
                            image: g.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.DashboardPartnersLogo.svg"),
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
                        }, c.createElement(D, {
                            getOwnerSpan: o(function() {
                                return m.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return m.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Position: N.position.bottom,
                                ExtendedClass: "tooltip"
                            },
                            events: {
                                _handleError: o(function(i) {
                                    a.handleError(i)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: n
                            },
                            _idProps: {
                                service: e,
                                name: "LivechatTooltip",
                                alias: "2"
                            },
                            _widgetRecordProvider: t,
                            placeholders: {
                                content: new P(function() {
                                    return [c.createElement(v, {
                                        align: 0,
                                        animate: !1,
                                        extendedEvents: {
                                            onClick: o(function() {
                                                var i = l.clone();
                                                a.onClickOpenLiveChat$Action(a.callContext(i))
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
                                    }, c.createElement(h, {
                                        extendedProperties: {
                                            "data-allow-event-propagation": "True"
                                        },
                                        gridProperties: {
                                            width: "28px"
                                        },
                                        image: g.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.livechat2.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "8"
                                        },
                                        _widgetRecordProvider: t
                                    }))]
                                }),
                                tooltip: new P(function() {
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
                        }), c.createElement(D, {
                            getOwnerSpan: o(function() {
                                return m.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return m.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Position: N.position.bottom
                            },
                            events: {
                                _handleError: o(function(i) {
                                    a.handleError(i)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: n
                            },
                            _idProps: {
                                service: e,
                                name: "LogoutTooltip",
                                alias: "3"
                            },
                            _widgetRecordProvider: t,
                            placeholders: {
                                content: new P(function() {
                                    return [c.createElement(v, {
                                        align: 0,
                                        animate: !1,
                                        extendedEvents: {
                                            onClick: o(function() {
                                                var i = l.clone();
                                                a.openLogoutModal$Action(a.callContext(i))
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
                                    }, c.createElement(h, {
                                        gridProperties: {
                                            width: "22px"
                                        },
                                        image: g.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.logout.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "12"
                                        },
                                        _widgetRecordProvider: t
                                    }))]
                                }),
                                tooltip: new P(function() {
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
                    onTablet: new P(function() {
                        return [c.createElement(v, {
                            align: 0,
                            animate: !1,
                            extendedEvents: {
                                onClick: o(function() {
                                    return Promise.resolve().then(function() {
                                        var i = l.clone();
                                        return a.onClickOpenSideMenu$Action(a.callContext(i))
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
                        }, c.createElement(h, {
                            extendedEvents: {
                                onClick: o(function() {
                                    var i = l.clone();
                                    a.onClickRedirectToDerivCom$Action(a.callContext(i))
                                }, "onClick")
                            },
                            extendedProperties: {
                                style: "height: 48px;"
                            },
                            gridProperties: {
                                width: "130px"
                            },
                            image: g.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.DashboardPartnersLogo.svg"),
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
                        }, c.createElement(h, {
                            extendedEvents: {
                                onClick: o(function() {
                                    var i = l.clone();
                                    a.onClickOpenLiveChat$Action(a.callContext(i))
                                }, "onClick")
                            },
                            image: g.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.livechat2.svg"),
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
                        }, c.createElement(h, {
                            extendedEvents: {
                                onClick: o(function() {
                                    var i = l.clone();
                                    a.openLogoutModal$Action(a.callContext(i))
                                }, "onClick")
                            },
                            gridProperties: {
                                width: "22px"
                            },
                            image: g.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.logout.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "21"
                            },
                            _widgetRecordProvider: t
                        }))))]
                    }),
                    onPhone: new P(function() {
                        return [c.createElement(v, {
                            align: 0,
                            animate: !1,
                            extendedEvents: {
                                onClick: o(function() {
                                    return Promise.resolve().then(function() {
                                        var i = l.clone();
                                        return a.onClickOpenSideMenu$Action(a.callContext(i))
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
                        }, c.createElement(h, {
                            extendedEvents: {
                                onClick: o(function() {
                                    var i = l.clone();
                                    a.onClickRedirectToDerivCom$Action(a.callContext(i))
                                }, "onClick")
                            },
                            extendedProperties: {
                                style: "height: 48px;"
                            },
                            gridProperties: {
                                width: "130px"
                            },
                            image: g.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.DashboardPartnersLogo.svg"),
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
                        }, c.createElement(h, {
                            extendedEvents: {
                                onClick: o(function() {
                                    var i = l.clone();
                                    a.onClickOpenLiveChat$Action(a.callContext(i))
                                }, "onClick")
                            },
                            image: g.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.livechat2.svg"),
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
                        }, c.createElement(h, {
                            extendedEvents: {
                                onClick: o(function() {
                                    var i = l.clone();
                                    a.openLogoutModal$Action(a.callContext(i))
                                }, "onClick")
                            },
                            gridProperties: {
                                width: "22px"
                            },
                            image: g.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.logout.svg"),
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
            }), c.createElement(Y, {
                extendedProperties: {
                    style: "border-radius: 8px; padding: 20px; width: 400px;"
                },
                showPopup: u.variables.isLogoutModalOpenVar,
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
            }, c.createElement(Q, {
                extendedProperties: {
                    style: "font-size: 16px; font-weight: bold;"
                },
                text: [s(R("QTTBDC0q7UWDCIIXHDBoJw#Value", "Are you sure you want to log out?"))],
                _idProps: {
                    service: e,
                    uuid: "33"
                },
                _widgetRecordProvider: t
            }), c.createElement(h, {
                extendedEvents: {
                    onClick: o(function() {
                        var i = l.clone();
                        a.closeLogoutModal$Action(a.callContext(i))
                    }, "onClick")
                },
                extendedProperties: {
                    style: "cursor: pointer;"
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                image: g.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.closenormal.png"),
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
                    onClick: o(function() {
                        return Promise.resolve().then(function() {
                            var i = l.clone();
                            return a.onClickLogout$Action(a.callContext(i))
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
            }, c.createElement($, {
                getOwnerSpan: o(function() {
                    return m.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return m.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    height: "40px",
                    title: g.Injector.resolve(g.ServiceNames.TranslationsService).getMessage("gDZYqM81kU+e9eXldbfVrw#Value.-1272307305.1", "Yes, log out"),
                    Width: "100%"
                },
                events: {
                    _handleError: o(function(i) {
                        a.handleError(i)
                    }, "_handleError"),
                    onClick$Action: o(function() {
                        return Promise.resolve().then(function() {
                            var i = l.clone();
                            return a.onClickLogout$Action(a.callContext(i))
                        })
                    }, "onClick$Action")
                },
                _validationProps: {
                    validationService: n
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
            }, c.createElement(M, {
                getOwnerSpan: o(function() {
                    return m.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return m.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    title: g.Injector.resolve(g.ServiceNames.TranslationsService).getMessage("eFWzD2sGTkaB086XttArKw#Value.2011110042.1", "Cancel"),
                    Width: "100%",
                    height: "40px",
                    borderRadius: "100px"
                },
                events: {
                    _handleError: o(function(i) {
                        a.handleError(i)
                    }, "_handleError"),
                    onClick$Action: o(function() {
                        var i = l.clone();
                        a.closeLogoutModal$Action(a.callContext(i))
                    }, "onClick$Action")
                },
                _validationProps: {
                    validationService: n
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
o(w, "View");
var K = w,
    ht = K;
export {
    We as a, ht as b
};