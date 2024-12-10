import {
    a as Jt,
    b as qt,
    c as Qt,
    d as Gt,
    e as Kt,
    f as jt,
    g as Zt,
    h as Xt,
    i as Yt,
    j as er,
    k as tr,
    l as rr,
    m as nr
} from "./_oschunk-6ORR26LH.js";
import {
    a as je,
    b as Fe
} from "./_oschunk-AAU3KO3J.js";
import {
    a as Ke
} from "./_oschunk-M6PGXRNF.js";
import {
    a as I
} from "./_oschunk-JIDGT34X.js";
import {
    a as Ge
} from "./_oschunk-6Y6HK4H4.js";
import {
    a as Qe
} from "./_oschunk-MQYFLHOB.js";
import {
    a as Y
} from "./_oschunk-ND5NIK2B.js";
import {
    a as Pe
} from "./_oschunk-NR4KXK35.js";
import {
    a as P,
    b as De,
    d as h,
    f as j,
    g as Ne,
    h as zt,
    m as oe,
    n as Q,
    o as Bt,
    p as D,
    q as Ut,
    s as Le,
    u as C
} from "./_oschunk-5HXBKFJV.js";
import {
    a as F
} from "./_oschunk-6WALBPGV.js";
import {
    a as q,
    g as V,
    i as E
} from "./_oschunk-2Q3BG5XZ.js";
import {
    a as _,
    o as R,
    p as H
} from "./_oschunk-FZ6FUHBV.js";
import {
    a as we
} from "./_oschunk-S5DOOZ7G.js";
import {
    Ac as z,
    Hf as Mt,
    Qd as Ve,
    Qf as xe,
    Tc as Be,
    Te as Ft,
    a as re,
    jd as ne,
    le as Ie,
    qd as Ue,
    rd as Je,
    tf as $t,
    ue as qe,
    vd as Lt,
    vf as Wt
} from "./_oschunk-5FYEKNKX.js";
import {
    ia as p
} from "./_oschunk-5KJVGEL7.js";
import {
    c as o,
    h as J
} from "./_oschunk-QHO7QY6K.js";
var Te = J(q());
var ir = {};
var Re = p; {
    let i = class i extends Re.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, ir);
            var s = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _secondaryButtononClick$Action() {
            return this.hasOwnProperty("__secondaryButtononClick$Action") || (this.__secondaryButtononClick$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    s = this.idService;
                return Re.Logger.startActiveSpan("SecondaryButtononClick", function(n) {
                    n && (n.setAttribute("code.function", "SecondaryButtononClick"), n.setAttribute("outsystems.function.key", "85847702-398c-43ad-9623-8dd03380c9b8"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("SecondaryButtononClick"), e = t.callContext(e);
                        var a = new Re.DataTypes.VariableHolder;
                        a.value = R.sidebarOpen$Action(_.getCFDsModalId(), e), _.setshowCFDCommissionModal(!0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__secondaryButtononClick$Action
        }
        set _secondaryButtononClick$Action(e) {
            this.__secondaryButtononClick$Action = e
        }
        secondaryButtononClick$Action(e) {
            var r = this.controller;
            return Re.Logger.startActiveSpan("SecondaryButtononClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "SecondaryButtononClick"), t.setAttribute("outsystems.function.key", "85847702-398c-43ad-9623-8dd03380c9b8"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._secondaryButtononClick$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
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
            return H.defaultTimeout
        }
    };
    o(i, "ControllerInner");
    let u = i;
    ar = u
}
var ar, or = new Re.Controller.ControllerFactory(ar, F);
var Si = E.PlaceholderContent,
    Ei = E.IteratorPlaceholderContent,
    le = class le extends V.BaseWebBlock {
        static get displayName() {
            return "Home.EnableCFDCommissionBanner"
        }
        static getAttributes() {
            return {
                codeFunction: "EnableCFDCommissionBanner",
                functionKey: "ee13d23b-3a63-4aac-8e2c-e43343ae9feb",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Home.EnableCFDCommissionBanner.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [Ke]
        }
        get modelFactory() {
            return Jt
        }
        get controllerFactory() {
            return or
        }
        get title() {
            return ""
        }
        internalRender() {
            let i = this.model,
                d = this.controller,
                e = this.idService,
                r = d.validationService,
                t = this.widgetsRecordProvider,
                s = d.callContext(),
                n = le.ifWidget,
                a = le.textWidget,
                c = le.asPrimitiveValue,
                f = le.getTranslation,
                m = this;
            return Te.createElement("div", this.getRootNodeProperties(), Te.createElement(h, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    className: "cfd-commission-banner"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, Te.createElement(C, {
                style: "cfd-commission-banner-title",
                text: ["Enable CFD commissions now!"],
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }), Te.createElement(Ke, {
                getOwnerSpan: o(function() {
                    return m.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return m.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    height: i.getCachedValue(e.getId("_Nh3bgxvkkOOaqGVDacy_w.height"), function() {
                        return R.isDesktop$Action(s).isDesktopOut ? "48px" : "32px"
                    }),
                    borderRadius: "35px",
                    title: "Let\u2019s go",
                    Width: i.getCachedValue(e.getId("_Nh3bgxvkkOOaqGVDacy_w.Width"), function() {
                        return R.isDesktop$Action(s).isDesktopOut ? "136px" : "78px"
                    })
                },
                events: {
                    _handleError: o(function(l) {
                        d.handleError(l)
                    }, "_handleError"),
                    onClick$Action: o(function() {
                        var l = s.clone();
                        d.secondaryButtononClick$Action(d.callContext(l))
                    }, "onClick$Action")
                },
                _validationProps: {
                    validationService: r
                },
                _idProps: {
                    service: e,
                    uuid: "2",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                _dependencies: []
            })))
        }
    };
o(le, "View");
var Ze = le,
    Oi = Ze;
var Se = J(q());
var Mr = {
        "sVTo9kryAEepay7RxEd2MA#Value.1524116574.1": "\u0627\u0641\u062A\u062D \u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645",
        "J5lNcrQnik2aXzdyKncEuA#Value": "\u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0631\u0648\u0627\u0628\u0637 \u0627\u0644\u0625\u062D\u0627\u0644\u0629 \u0648\u0627\u0644\u062A\u0642\u0627\u0631\u064A\u0631",
        "lpEobJwz70WribG+jUqf7g#Value.1524116574.1": "\u0627\u0641\u062A\u062D \u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645"
    },
    zr = {
        "sVTo9kryAEepay7RxEd2MA#Value.1524116574.1": "Dashboard \xF6ffnen",
        "J5lNcrQnik2aXzdyKncEuA#Value": "Zugriff auf Ihre Empfehlungslinks und Berichte",
        "lpEobJwz70WribG+jUqf7g#Value.1524116574.1": "Dashboard \xF6ffnen"
    },
    Br = {
        "sVTo9kryAEepay7RxEd2MA#Value.1524116574.1": "Abrir el panel",
        "J5lNcrQnik2aXzdyKncEuA#Value": "Mis enlaces de referencia y reportes",
        "lpEobJwz70WribG+jUqf7g#Value.1524116574.1": "Abrir el panel"
    },
    Ur = {
        "sVTo9kryAEepay7RxEd2MA#Value.1524116574.1": "Ouvrir le tableau de bord",
        "J5lNcrQnik2aXzdyKncEuA#Value": "Acc\xE9der \xE0 vos liens de parrainage et rapports",
        "lpEobJwz70WribG+jUqf7g#Value.1524116574.1": "Ouvrir le tableau de bord"
    },
    Jr = {
        "sVTo9kryAEepay7RxEd2MA#Value.1524116574.1": "Apri la dashboard",
        "J5lNcrQnik2aXzdyKncEuA#Value": "I miei link di referral e report",
        "lpEobJwz70WribG+jUqf7g#Value.1524116574.1": "Apri la dashboard"
    },
    qr = {
        "sVTo9kryAEepay7RxEd2MA#Value.1524116574.1": "Otw\xF3rz pulpit",
        "J5lNcrQnik2aXzdyKncEuA#Value": "Moje linki polecaj\u0105ce i raporty",
        "lpEobJwz70WribG+jUqf7g#Value.1524116574.1": "Otw\xF3rz pulpit"
    },
    Qr = {
        "sVTo9kryAEepay7RxEd2MA#Value.1524116574.1": "Abrir o painel",
        "J5lNcrQnik2aXzdyKncEuA#Value": "Os meus links de refer\xEAncia e relat\xF3rios",
        "lpEobJwz70WribG+jUqf7g#Value.1524116574.1": "Abrir o painel"
    },
    Gr = {
        "sVTo9kryAEepay7RxEd2MA#Value.1524116574.1": "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043A\u0430\u0431\u0438\u043D\u0435\u0442",
        "J5lNcrQnik2aXzdyKncEuA#Value": "\u0414\u043E\u0441\u0442\u0443\u043F \u043A \u0432\u0430\u0448\u0438\u043C \u0440\u0435\u0444\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u043C \u0441\u0441\u044B\u043B\u043A\u0430\u043C \u0438 \u043E\u0442\u0447\u0435\u0442\u0430\u043C",
        "lpEobJwz70WribG+jUqf7g#Value.1524116574.1": "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043A\u0430\u0431\u0438\u043D\u0435\u0442"
    },
    sr = {
        "ar-001": {
            translations: Mr,
            isRTL: !0
        },
        "de-DE": {
            translations: zr,
            isRTL: !1
        },
        "es-ES": {
            translations: Br,
            isRTL: !1
        },
        "fr-FR": {
            translations: Ur,
            isRTL: !1
        },
        "it-IT": {
            translations: Jr,
            isRTL: !1
        },
        "pl-PL": {
            translations: qr,
            isRTL: !1
        },
        "pt-PT": {
            translations: Qr,
            isRTL: !1
        },
        "ru-RU": {
            translations: Gr,
            isRTL: !1
        }
    };

function Xe(u, i, d, e) {
    window.open(u.website_platform_url, "_blank")
}
o(Xe, "default");
var ae = p; {
    let i = class i extends ae.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, sr);
            var s = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _openDashboardOnClick$Action() {
            return this.hasOwnProperty("__openDashboardOnClick$Action") || (this.__openDashboardOnClick$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    s = this.idService;
                return ae.Logger.startActiveSpan("OpenDashboardOnClick", function(n) {
                    n && (n.setAttribute("code.function", "OpenDashboardOnClick"), n.setAttribute("outsystems.function.key", "488cfb74-db54-422f-af82-92748ec9c8ec"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OpenDashboardOnClick"), e = t.callContext(e), H.rudderstackTrackEvent$Action(function() {
                            var a = new z;
                            return a.actionAttr = "click_cta", a.cta_nameAttr = ae.Injector.resolve(ae.ServiceNames.TranslationsService).getMessage("lpEobJwz70WribG+jUqf7g#Value.1524116574.1", "Open dashboard"), a.cta_placementAttr = "referral link report section", a
                        }(), "ce_partnershub_form", e), ae.Logger.startActiveSpan("JavaScript1", function(a) {
                            a && (a.setAttribute("code.function", "JavaScript1"), a.setAttribute("outsystems.function.key", "e3701746-0dc3-495a-a017-76f77ceee82f"), a.setAttribute("outsystems.function.owner.name", "PartnersHub"), a.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(Xe, "JavaScript1", "OpenDashboardOnClick", {
                                    website_platform_url: ae.DataConversion.JSNodeParamConverter.to(_.getWebsitePlatformUrl(), ae.DataTypes.DataTypes.Text)
                                }, function(c) {}, {}, {})
                            } finally {
                                a && a.end()
                            }
                        }, 1)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__openDashboardOnClick$Action
        }
        set _openDashboardOnClick$Action(e) {
            this.__openDashboardOnClick$Action = e
        }
        openDashboardOnClick$Action(e) {
            var r = this.controller;
            return ae.Logger.startActiveSpan("OpenDashboardOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "OpenDashboardOnClick"), t.setAttribute("outsystems.function.key", "488cfb74-db54-422f-af82-92748ec9c8ec"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._openDashboardOnClick$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
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
            return H.defaultTimeout
        }
    };
    o(i, "ControllerInner");
    let u = i;
    lr = u
}
var lr, cr = new ae.Controller.ControllerFactory(lr, F);
var dr = p,
    Ji = E.PlaceholderContent,
    qi = E.IteratorPlaceholderContent,
    ce = class ce extends V.BaseWebBlock {
        static get displayName() {
            return "Home.ReferralLinksReports"
        }
        static getAttributes() {
            return {
                codeFunction: "ReferralLinksReports",
                functionKey: "14185b0f-a933-423b-ae2c-38067830aa85",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Home.ReferralLinksReports.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [Y]
        }
        get modelFactory() {
            return qt
        }
        get controllerFactory() {
            return cr
        }
        get title() {
            return ""
        }
        internalRender() {
            let i = this.model,
                d = this.controller,
                e = this.idService,
                r = d.validationService,
                t = this.widgetsRecordProvider,
                s = d.callContext(),
                n = ce.ifWidget,
                a = ce.textWidget,
                c = ce.asPrimitiveValue,
                f = ce.getTranslation,
                m = this;
            return Se.createElement("div", this.getRootNodeProperties(), Se.createElement(h, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "background: var(--Neutral-Neutral-1, #F8F9FA); border: 1px solid var(--Neutral-Neutral-2, #F1F3F5); border-radius: 8px; display: flex; gap: 16px; padding: 16px;"
                },
                style: "referral-links-reports",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, Se.createElement(C, {
                extendedProperties: {
                    style: "font-size: 16px; font-weight: normal; padding: 0px 10px 0px 0px;"
                },
                text: [a(f("J5lNcrQnik2aXzdyKncEuA#Value", "Access your referral links and reports"))],
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }), Se.createElement(h, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            }, Se.createElement(Y, {
                getOwnerSpan: o(function() {
                    return m.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return m.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    borderRadius: "100px",
                    class: "referral-links-reports__button",
                    title: dr.Injector.resolve(dr.ServiceNames.TranslationsService).getMessage("sVTo9kryAEepay7RxEd2MA#Value.1524116574.1", "Open dashboard")
                },
                events: {
                    _handleError: o(function(l) {
                        d.handleError(l)
                    }, "_handleError"),
                    onClick$Action: o(function() {
                        var l = s.clone();
                        d.openDashboardOnClick$Action(d.callContext(l))
                    }, "onClick$Action")
                },
                _validationProps: {
                    validationService: r
                },
                _idProps: {
                    service: e,
                    uuid: "3",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                _dependencies: []
            }))))
        }
    };
o(ce, "View");
var Ye = ce,
    Qi = Ye;
var G = J(q());
var Kr = {
        "zkE0A_QNHUO3f5+rZyPegQ#Value": "\u062E\u0637\u0648\u0629",
        "V_f6UFrIQkCuMDCeq35TIQ#Value": "\u0623\u0643\u0645\u0644 \u0645\u0644\u0641\u064A \u0627\u0644\u0634\u062E\u0635\u064A"
    },
    jr = {
        "zkE0A_QNHUO3f5+rZyPegQ#Value": "Schritt",
        "V_f6UFrIQkCuMDCeq35TIQ#Value": "Mein Profil vervollst\xE4ndigen"
    },
    Zr = {
        "zkE0A_QNHUO3f5+rZyPegQ#Value": "Step",
        "V_f6UFrIQkCuMDCeq35TIQ#Value": "Completar mi perfil"
    },
    Xr = {
        "zkE0A_QNHUO3f5+rZyPegQ#Value": "\xC9tape",
        "V_f6UFrIQkCuMDCeq35TIQ#Value": "Compl\xE9ter mon profil"
    },
    Yr = {
        "zkE0A_QNHUO3f5+rZyPegQ#Value": "Passo",
        "V_f6UFrIQkCuMDCeq35TIQ#Value": "Completa il mio profilo"
    },
    en = {
        "zkE0A_QNHUO3f5+rZyPegQ#Value": "Krok",
        "V_f6UFrIQkCuMDCeq35TIQ#Value": "Uzupe\u0142nij m\xF3j profil"
    },
    tn = {
        "zkE0A_QNHUO3f5+rZyPegQ#Value": "Step",
        "V_f6UFrIQkCuMDCeq35TIQ#Value": "Concluir o meu perfil"
    },
    rn = {
        "zkE0A_QNHUO3f5+rZyPegQ#Value": "\u0428\u0430\u0433",
        "V_f6UFrIQkCuMDCeq35TIQ#Value": "\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u043C\u043E\u0439 \u043F\u0440\u043E\u0444\u0438\u043B\u044C"
    },
    ur = {
        "ar-001": {
            translations: Kr,
            isRTL: !0
        },
        "de-DE": {
            translations: jr,
            isRTL: !1
        },
        "es-ES": {
            translations: Zr,
            isRTL: !1
        },
        "fr-FR": {
            translations: Xr,
            isRTL: !1
        },
        "it-IT": {
            translations: Yr,
            isRTL: !1
        },
        "pl-PL": {
            translations: en,
            isRTL: !1
        },
        "pt-PT": {
            translations: tn,
            isRTL: !1
        },
        "ru-RU": {
            translations: rn,
            isRTL: !1
        }
    };

function et(u, i, d, e) {
    var t, s, n;
    let r = JSON.parse(u.ResidenceList || JSON.stringify([])).residence_list.find(a => a.value == u.SelectedCitizenship);
    u.isIDVSupported = !!((n = (s = (t = r == null ? void 0 : r.identity) == null ? void 0 : t.services) == null ? void 0 : s.idv) != null && n.is_country_supported)
}
o(et, "default");

function tt(u, i, d, e) {
    u.Token = localStorage.getItem("token")
}
o(tt, "default");
var O = p; {
    let i = class i extends O.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, ur);
            var s = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onClick$Action() {
            return this.hasOwnProperty("__onClick$Action") || (this.__onClick$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    s = this.idService;
                return O.Logger.startActiveSpan("OnClick", function(n) {
                    n && (n.setAttribute("code.function", "OnClick"), n.setAttribute("outsystems.function.key", "7d66109f-ce4d-4eb3-8707-7b6b5fc8a588"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("OnClick"), e = t.callContext(e), O.Navigation.navigateTo(O.Navigation.generateScreenURL("PartnersHub", "RealAccountCreation", {}), O.Transitions.createTransition(O.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onClick$Action
        }
        set _onClick$Action(e) {
            this.__onClick$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    s = this.idService;
                return O.Logger.startActiveSpan("OnReady", function(n) {
                    return n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "9a5b194f-d2cb-43ce-80c6-390c7eeebaa3"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), O.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var a = new O.DataTypes.VariableHolder,
                            c = new O.DataTypes.VariableHolder,
                            f = new O.DataTypes.VariableHolder,
                            m = new O.DataTypes.VariableHolder,
                            l = new O.DataTypes.VariableHolder(new O.DataTypes.JSONSerializeOutputType);
                        return O.Flow.executeAsyncFlow(function() {
                            return m.value = O.Logger.startActiveSpan("GetAuthToken", function(g) {
                                g && (g.setAttribute("code.function", "GetAuthToken"), g.setAttribute("outsystems.function.key", "a90a2d60-98b8-48c2-8c6d-aad580e7b181"), g.setAttribute("outsystems.function.owner.name", "PartnersHub"), g.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), g.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return t.safeExecuteJSNode(tt, "GetAuthToken", "OnReady", {
                                        Token: O.DataConversion.JSNodeParamConverter.to("", O.DataTypes.DataTypes.Text)
                                    }, function(k) {
                                        var B = new(t.constructor.getVariableGroupType("PartnersHub.Home.CompleteMyProfile.OnReady$getAuthTokenJSResult"));
                                        return B.tokenOut = O.DataConversion.JSNodeParamConverter.from(k.Token, O.DataTypes.DataTypes.Text), B
                                    }, {}, {})
                                } finally {
                                    g && g.end()
                                }
                            }, 1), r.flush(), H.sendResidenceList$Action(e).then(function(g) {
                                c.value = g
                            }).then(function() {
                                return r.flush(), we.getSettings$Action(_.getServer(), m.value.tokenOut, _.getAppId(), "EN", e).then(function(g) {
                                    a.value = g
                                })
                            }).then(function() {
                                r.variables.residenceListResponseVar = c.value.residenceListResponseOut, l.value.jSONOut = O.JSONUtils.serializeToJSON(c.value.residenceListResponseOut, !1, !1), f.value = O.Logger.startActiveSpan("CheckIfIDVIsSupportedJS", function(g) {
                                    g && (g.setAttribute("code.function", "CheckIfIDVIsSupportedJS"), g.setAttribute("outsystems.function.key", "33193da3-481b-4435-9672-2e26c0b62d9e"), g.setAttribute("outsystems.function.owner.name", "PartnersHub"), g.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), g.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return t.safeExecuteJSNode(et, "CheckIfIDVIsSupportedJS", "OnReady", {
                                            ResidenceList: O.DataConversion.JSNodeParamConverter.to(l.value.jSONOut, O.DataTypes.DataTypes.Text),
                                            SelectedCitizenship: O.DataConversion.JSNodeParamConverter.to(a.value.responseOut.get_settingsAttr.citizenAttr, O.DataTypes.DataTypes.Text),
                                            isIDVSupported: O.DataConversion.JSNodeParamConverter.to(!1, O.DataTypes.DataTypes.Boolean)
                                        }, function(k) {
                                            var B = new(t.constructor.getVariableGroupType("PartnersHub.Home.CompleteMyProfile.OnReady$checkIfIDVIsSupportedJSJSResult"));
                                            return B.isIDVSupportedOut = O.DataConversion.JSNodeParamConverter.from(k.isIDVSupported, O.DataTypes.DataTypes.Boolean), B
                                        }, {}, {})
                                    } finally {
                                        g && g.end()
                                    }
                                }, 1), _.setRealSignupIsIDVSupported(f.value.isIDVSupportedOut)
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        onClick$Action(e) {
            var r = this.controller;
            return O.Logger.startActiveSpan("OnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnClick"), t.setAttribute("outsystems.function.key", "7d66109f-ce4d-4eb3-8707-7b6b5fc8a588"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onClick$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var r = this.controller;
            return O.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "9a5b194f-d2cb-43ce-80c6-390c7eeebaa3"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), O.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    s = this.idService;
                return r.onReady$Action(e)
            }), this._onInitializeEventHandler
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
            return H.defaultTimeout
        }
    };
    o(i, "ControllerInner");
    let u = i;
    $e = u, $e.registerVariableGroupType("PartnersHub.Home.CompleteMyProfile.OnReady$checkIfIDVIsSupportedJSJSResult", [{
        name: "isIDVSupported",
        attrName: "isIDVSupportedOut",
        mandatory: !0,
        dataType: O.DataTypes.DataTypes.Boolean,
        defaultValue: o(function() {
            return !1
        }, "defaultValue")
    }]), $e.registerVariableGroupType("PartnersHub.Home.CompleteMyProfile.OnReady$getAuthTokenJSResult", [{
        name: "Token",
        attrName: "tokenOut",
        mandatory: !0,
        dataType: O.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }])
}
var $e, mr = new O.Controller.ControllerFactory($e, F);
var an = p,
    on = E.PlaceholderContent,
    Aa = E.IteratorPlaceholderContent,
    de = class de extends V.BaseWebBlock {
        static get displayName() {
            return "Home.CompleteMyProfile"
        }
        static getAttributes() {
            return {
                codeFunction: "CompleteMyProfile",
                functionKey: "77fd153f-1428-463d-ab51-f305d3b0dfae",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Home.CompleteMyProfile.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [Qe]
        }
        get modelFactory() {
            return Qt
        }
        get controllerFactory() {
            return mr
        }
        get title() {
            return ""
        }
        internalRender() {
            let i = this.model,
                d = this.controller,
                e = this.idService,
                r = d.validationService,
                t = this.widgetsRecordProvider,
                s = d.callContext(),
                n = de.ifWidget,
                a = de.textWidget,
                c = de.asPrimitiveValue,
                f = de.getTranslation,
                m = this;
            return G.createElement("div", this.getRootNodeProperties(), G.createElement(h, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: o(function() {
                        var l = s.clone();
                        d.onClick$Action(d.callContext(l))
                    }, "onClick")
                },
                gridProperties: {
                    classes: "OSInline"
                },
                style: "complete-my-profile",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, G.createElement(h, {
                align: 0,
                animate: !1,
                style: "display-flex justify-content-space-between align-items-center",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }, G.createElement(C, {
                extendedProperties: {
                    style: "font-size: 16px; font-weight: bold;"
                },
                text: [a(f("V_f6UFrIQkCuMDCeq35TIQ#Value", "Complete my profile"))],
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            }), G.createElement(Q, {
                gridProperties: {
                    marginLeft: "0"
                },
                image: an.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.rightIcon.png"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "3"
                },
                _widgetRecordProvider: t
            })), G.createElement(h, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "margin-top: 0px;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "4"
                },
                _widgetRecordProvider: t
            }, G.createElement(h, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "5"
                },
                _widgetRecordProvider: t
            }, G.createElement(D, {
                gridProperties: {
                    classes: "OSFillParent"
                },
                _idProps: {
                    service: e,
                    uuid: "6"
                },
                _widgetRecordProvider: t
            }, a(f("zkE0A_QNHUO3f5+rZyPegQ#Value", "Step ")), G.createElement(j, {
                gridProperties: {
                    marginLeft: "0"
                },
                value: i.getCachedValue(e.getId("5lO5Y__sL0CwhX2+9HxxdQ.Value"), function() {
                    return _.getRealSignupCurrentStep().toString() + "/" + (_.getRealSignupIsIDVSupported() ? 8 : 7).toString() + ":"
                }, function() {
                    return _.getRealSignupCurrentStep()
                }, function() {
                    return _.getRealSignupIsIDVSupported()
                }),
                _idProps: {
                    service: e,
                    uuid: "7"
                },
                _widgetRecordProvider: t
            }), G.createElement(j, {
                gridProperties: {
                    marginLeft: "5px"
                },
                value: _.getCurrentStepTitle(),
                _idProps: {
                    service: e,
                    uuid: "8"
                },
                _widgetRecordProvider: t
            })))), G.createElement(h, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "9"
                },
                _widgetRecordProvider: t
            }, G.createElement(Qe, {
                getOwnerSpan: o(function() {
                    return m.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return m.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Progress: _.getProgressBarLength(),
                    ProgressColor: re.color.primary,
                    Thickness: 10
                },
                events: {
                    _handleError: o(function(l) {
                        d.handleError(l)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: r
                },
                _idProps: {
                    service: e,
                    uuid: "10",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    content: on.Empty
                },
                _dependencies: []
            }))))
        }
    };
o(de, "View");
var rt = de,
    pa = rt;
var T = J(q());
var sn = {
        "fmSAHAptP0KYtOXYomKxmA#Value": "\u062A\u0639\u0631\u0641 \u0639\u0644\u0649 \u0627\u0644\u0645\u0632\u064A\u062F",
        "Ku29M+DdTE2TpHrrNCpPLA#Value": "\u0627\u0631\u0628\u062D \u0628\u0646\u0627\u0621\u064B \u0639\u0644\u0649 \u0627\u062D\u062A\u0645\u0627\u0644\u064A\u0629 \u062F\u0641\u0639 \u0643\u0644 \u0639\u0642\u062F.",
        "hrkFunwzoECUPWB0IRcDKA#Value": "\u062A\u0639\u0631\u0641 \u0623\u0643\u062B\u0631",
        "j4vWVltZ2U+0ByDizgvLaA#Value": "\u0627\u0631\u0628\u062D \u0645\u0627 \u064A\u0635\u0644 \u0625\u0644\u0649 40% \u0645\u0646 \u0639\u0645\u0648\u0644\u0627\u062A \u062A\u062F\u0627\u0648\u0644 \u0627\u0644\u0639\u0645\u0644\u0627\u0621.",
        "WWVqgcxwK02Qs6tbKp5Mmg#Value": "\u062A\u0639\u0631\u0641 \u0639\u0644\u0649 \u0627\u0644\u0645\u0632\u064A\u062F",
        "rEEPHXMxSkqto6iJFQRDow#Value": "\u0627\u0631\u0628\u062D \u0645\u0639 \u062E\u0637\u0629 \u0627\u0644\u0639\u0645\u0648\u0644\u0629 \u0627\u0644\u0645\u0633\u062A\u0646\u062F\u0629 \u0625\u0644\u0649 \u0627\u0644\u0623\u062F\u0648\u0627\u062A \u0644\u062F\u064A\u0646\u0627.",
        "IOkWIqJMPUO_Lk53vxAtSw#Value": "\u064A\u0645\u0643\u0646\u0643 \u0643\u0633\u0628 \u0639\u0645\u0648\u0644\u0627\u062A \u0645\u0646"
    },
    ln = {
        "fmSAHAptP0KYtOXYomKxmA#Value": "Mehr erfahren",
        "Ku29M+DdTE2TpHrrNCpPLA#Value": "Verdienen Sie basierend auf der Auszahlungswahrscheinlichkeit jedes Vertrags.",
        "hrkFunwzoECUPWB0IRcDKA#Value": "Mehr erfahren",
        "j4vWVltZ2U+0ByDizgvLaA#Value": "Verdienen Sie bis zu 40 % Provisionen aus den Handelsgesch\xE4ften Ihrer Kunden.",
        "WWVqgcxwK02Qs6tbKp5Mmg#Value": "Mehr erfahren",
        "rEEPHXMxSkqto6iJFQRDow#Value": "Verdienen Sie mit unserem instrumentenbasierten Provisionsplan.",
        "IOkWIqJMPUO_Lk53vxAtSw#Value": "Sie k\xF6nnen Provisionen von verdienen"
    },
    cn = {
        "fmSAHAptP0KYtOXYomKxmA#Value": "Aprende m\xE1s",
        "Ku29M+DdTE2TpHrrNCpPLA#Value": "Gana seg\xFAn la probabilidad de pago de cada contrato.",
        "hrkFunwzoECUPWB0IRcDKA#Value": "Aprende m\xE1s",
        "j4vWVltZ2U+0ByDizgvLaA#Value": "Gane hasta un 40% de comisiones por las operaciones de los clientes.",
        "WWVqgcxwK02Qs6tbKp5Mmg#Value": "Aprende m\xE1s",
        "rEEPHXMxSkqto6iJFQRDow#Value": "Gana con nuestro plan de comisiones basado en instrumentos.",
        "IOkWIqJMPUO_Lk53vxAtSw#Value": "Puedes ganar comisiones de"
    },
    dn = {
        "fmSAHAptP0KYtOXYomKxmA#Value": "En savoir plus",
        "Ku29M+DdTE2TpHrrNCpPLA#Value": "Gagnez en fonction de la probabilit\xE9 de paiement de chaque contrat.",
        "hrkFunwzoECUPWB0IRcDKA#Value": "En savoir plus",
        "j4vWVltZ2U+0ByDizgvLaA#Value": "Gagnez jusqu'\xE0 40 % de commissions sur les transactions des clients.",
        "WWVqgcxwK02Qs6tbKp5Mmg#Value": "En savoir plus",
        "rEEPHXMxSkqto6iJFQRDow#Value": "Gagnez avec notre plan de commission bas\xE9 sur les instruments.",
        "IOkWIqJMPUO_Lk53vxAtSw#Value": "Vous pouvez gagner des commissions de"
    },
    un = {
        "fmSAHAptP0KYtOXYomKxmA#Value": "Scopri di pi\xF9",
        "Ku29M+DdTE2TpHrrNCpPLA#Value": "Guadagna in base alla probabilit\xE0 di pagamento di ciascun contratto.",
        "hrkFunwzoECUPWB0IRcDKA#Value": "Scopri di pi\xF9",
        "j4vWVltZ2U+0ByDizgvLaA#Value": "Guadagna fino al 40% di commissioni dalle operazioni dei clienti.",
        "WWVqgcxwK02Qs6tbKp5Mmg#Value": "Scopri di pi\xF9",
        "rEEPHXMxSkqto6iJFQRDow#Value": "Guadagna con il nostro piano commissionale basato sugli strumenti.",
        "IOkWIqJMPUO_Lk53vxAtSw#Value": "Puoi guadagnare commissioni da"
    },
    mn = {
        "fmSAHAptP0KYtOXYomKxmA#Value": "Dowiedz si\u0119 wi\u0119cej",
        "Ku29M+DdTE2TpHrrNCpPLA#Value": "Zarabiaj w oparciu o prawdopodobie\u0144stwo wyp\u0142aty ka\u017Cdego kontraktu.",
        "hrkFunwzoECUPWB0IRcDKA#Value": "Dowiedz si\u0119 wi\u0119cej",
        "j4vWVltZ2U+0ByDizgvLaA#Value": "Zarabiaj do 40% prowizji od transakcji klient\xF3w.",
        "WWVqgcxwK02Qs6tbKp5Mmg#Value": "Dowiedz si\u0119 wi\u0119cej",
        "rEEPHXMxSkqto6iJFQRDow#Value": "Zarabiaj z naszym planem prowizyjnym opartym na instrumentach.",
        "IOkWIqJMPUO_Lk53vxAtSw#Value": "Mo\u017Cesz zarabia\u0107 prowizje z"
    },
    fn = {
        "fmSAHAptP0KYtOXYomKxmA#Value": "Saiba mais",
        "Ku29M+DdTE2TpHrrNCpPLA#Value": "Ganhe com base na probabilidade de pagamento de cada contrato.",
        "hrkFunwzoECUPWB0IRcDKA#Value": "Saiba mais",
        "j4vWVltZ2U+0ByDizgvLaA#Value": "Ganhe at\xE9 40% de comiss\xF5es nas opera\xE7\xF5es dos clientes.",
        "WWVqgcxwK02Qs6tbKp5Mmg#Value": "Saiba mais",
        "rEEPHXMxSkqto6iJFQRDow#Value": "Ganhe com o nosso plano de comiss\xF5es baseado em instrumentos.",
        "IOkWIqJMPUO_Lk53vxAtSw#Value": "Voc\xEA pode ganhar comiss\xF5es de"
    },
    vn = {
        "fmSAHAptP0KYtOXYomKxmA#Value": "\u0423\u0437\u043D\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435",
        "Ku29M+DdTE2TpHrrNCpPLA#Value": "\u0417\u0430\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0439\u0442\u0435 \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0438 \u043E\u0442 \u0432\u0435\u0440\u043E\u044F\u0442\u043D\u043E\u0441\u0442\u0438 \u0432\u044B\u043F\u043B\u0430\u0442\u044B \u043F\u043E \u043A\u0430\u0436\u0434\u043E\u043C\u0443 \u043A\u043E\u043D\u0442\u0440\u0430\u043A\u0442\u0443.",
        "hrkFunwzoECUPWB0IRcDKA#Value": "\u0423\u0437\u043D\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435",
        "j4vWVltZ2U+0ByDizgvLaA#Value": "\u0417\u0430\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0439\u0442\u0435 \u0434\u043E 40% \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u0439 \u043E\u0442 \u0441\u0434\u0435\u043B\u043E\u043A \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432.",
        "WWVqgcxwK02Qs6tbKp5Mmg#Value": "\u0423\u0437\u043D\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435",
        "rEEPHXMxSkqto6iJFQRDow#Value": "\u0417\u0430\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0439\u0442\u0435 \u0441 \u043D\u0430\u0448\u0438\u043C \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u043E\u043D\u043D\u044B\u043C \u043F\u043B\u0430\u043D\u043E\u043C, \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u043D\u044B\u043C \u043D\u0430 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0430\u0445.",
        "IOkWIqJMPUO_Lk53vxAtSw#Value": "\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0437\u0430\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0442\u044C \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u043E\u043D\u043D\u044B\u0435 \u043E\u0442"
    },
    fr = {
        "ar-001": {
            translations: sn,
            isRTL: !0
        },
        "de-DE": {
            translations: ln,
            isRTL: !1
        },
        "es-ES": {
            translations: cn,
            isRTL: !1
        },
        "fr-FR": {
            translations: dn,
            isRTL: !1
        },
        "it-IT": {
            translations: un,
            isRTL: !1
        },
        "pl-PL": {
            translations: mn,
            isRTL: !1
        },
        "pt-PT": {
            translations: fn,
            isRTL: !1
        },
        "ru-RU": {
            translations: vn,
            isRTL: !1
        }
    };
var w = p; {
    let i = class i extends w.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, fr);
            var s = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get getBDEnableCFDScreens$ServerAction() {
            return this.hasOwnProperty("_getBDEnableCFDScreens$ServerAction") || (this._getBDEnableCFDScreens$ServerAction = function(e) {
                var r = this.controller;
                return w.Logger.startActiveSpan("GetBDEnableCFDScreens", function(t) {
                    return t && (t.setAttribute("code.function", "GetBDEnableCFDScreens"), t.setAttribute("outsystems.function.key", "7eca81a1-5ec3-449c-b6ab-0bca5f9ecfbf"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), w.Flow.tryFinally(function() {
                        return r.callServerAction("GetBDEnableCFDScreens", "screenservices/PartnersHub/Home/CommissionPlans/ActionGetBDEnableCFDScreens", "LjNg3yE0AdZRJluRGkzpGw", {}, r.callContext(e), void 0, void 0, !0).then(function(s) {
                            var n = new(r.constructor.getVariableGroupType("PartnersHub.Home.CommissionPlans$ActionGetBDEnableCFDScreens"));
                            return n.enableCFDScreensOut = w.DataConversion.ServerDataConverter.from(s.EnableCFDScreens, w.DataTypes.DataTypes.Boolean), n
                        })
                    }, function() {
                        t && t.end()
                    })
                }, 0)
            }), this._getBDEnableCFDScreens$ServerAction
        }
        set getBDEnableCFDScreens$ServerAction(e) {
            this._getBDEnableCFDScreens$ServerAction = e
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onClickToTurnoverPlan$Action() {
            return this.hasOwnProperty("__onClickToTurnoverPlan$Action") || (this.__onClickToTurnoverPlan$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    s = this.idService;
                return w.Logger.startActiveSpan("OnClickToTurnoverPlan", function(n) {
                    n && (n.setAttribute("code.function", "OnClickToTurnoverPlan"), n.setAttribute("outsystems.function.key", "57fb401e-36c4-4e08-a29c-be8dbd1c9419"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("OnClickToTurnoverPlan"), e = t.callContext(e), H.rudderstackTrackEvent$Action(function() {
                            var a = new z;
                            return a.actionAttr = "click_cta", a.cta_nameAttr = "Learn more", a.cta_placementAttr = "commission plans turnover section", a.timestampAttr = w.BuiltinFunctions.dateTimeToText(w.BuiltinFunctions.currDateTime()), a.show_user_idAttr = !1, a
                        }(), "ce_partnershub_form", e), w.Navigation.navigateTo(w.Navigation.generateScreenURL("PartnersHub", "Turnover", {}), w.Transitions.createTransition(w.Transitions.TransitionAnimation.None), e, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onClickToTurnoverPlan$Action
        }
        set _onClickToTurnoverPlan$Action(e) {
            this.__onClickToTurnoverPlan$Action = e
        }
        get _onClickToCFDs$Action() {
            return this.hasOwnProperty("__onClickToCFDs$Action") || (this.__onClickToCFDs$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    s = this.idService;
                return w.Logger.startActiveSpan("OnClickToCFDs", function(n) {
                    return n && (n.setAttribute("code.function", "OnClickToCFDs"), n.setAttribute("outsystems.function.key", "59f039cc-eec2-4cf6-a669-07d1e80b0dd9"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), w.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnClickToCFDs"), e = t.callContext(e);
                        var a = new w.DataTypes.VariableHolder;
                        return w.Flow.executeAsyncFlow(function() {
                            return H.rudderstackTrackEvent$Action(function() {
                                var c = new z;
                                return c.actionAttr = "click_cta", c.cta_nameAttr = "Learn more", c.cta_placementAttr = "commission plans cfds section", c.timestampAttr = w.BuiltinFunctions.dateTimeToText(w.BuiltinFunctions.currDateTime()), c.show_user_idAttr = !1, c
                            }(), "ce_partnershub_form", e), r.flush(), t.getBDEnableCFDScreens$ServerAction(e).then(function(c) {
                                a.value = c
                            }).then(function() {
                                if (a.value.enableCFDScreensOut) return w.Flow.returnAsync(w.Navigation.navigateTo(w.Navigation.generateScreenURL("PartnersHub", "CFDs", {}), w.Transitions.createTransition(w.Transitions.TransitionAnimation.None), e, !0));
                                H.redirectToExternalNewTab$Action("https://docs.deriv.com/partners/ib-cfds-commissions-table.pdf", e)
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__onClickToCFDs$Action
        }
        set _onClickToCFDs$Action(e) {
            this.__onClickToCFDs$Action = e
        }
        get _onClickToRevShare$Action() {
            return this.hasOwnProperty("__onClickToRevShare$Action") || (this.__onClickToRevShare$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    s = this.idService;
                return w.Logger.startActiveSpan("OnClickToRevShare", function(n) {
                    n && (n.setAttribute("code.function", "OnClickToRevShare"), n.setAttribute("outsystems.function.key", "694bcb0b-945e-486a-bcf0-267063a408cd"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("OnClickToRevShare"), e = t.callContext(e), H.rudderstackTrackEvent$Action(function() {
                            var a = new z;
                            return a.actionAttr = "click_cta", a.cta_nameAttr = "Learn more", a.cta_placementAttr = "commission plans revshare section", a.timestampAttr = w.BuiltinFunctions.dateTimeToText(w.BuiltinFunctions.currDateTime()), a.show_user_idAttr = !1, a
                        }(), "ce_partnershub_form", e), w.Navigation.navigateTo(w.Navigation.generateScreenURL("PartnersHub", "RevShare", {}), w.Transitions.createTransition(w.Transitions.TransitionAnimation.None), e, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onClickToRevShare$Action
        }
        set _onClickToRevShare$Action(e) {
            this.__onClickToRevShare$Action = e
        }
        onClickToTurnoverPlan$Action(e) {
            var r = this.controller;
            return w.Logger.startActiveSpan("OnClickToTurnoverPlan__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnClickToTurnoverPlan"), t.setAttribute("outsystems.function.key", "57fb401e-36c4-4e08-a29c-be8dbd1c9419"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onClickToTurnoverPlan$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onClickToCFDs$Action(e) {
            var r = this.controller;
            return w.Logger.startActiveSpan("OnClickToCFDs__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnClickToCFDs"), t.setAttribute("outsystems.function.key", "59f039cc-eec2-4cf6-a669-07d1e80b0dd9"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), w.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onClickToCFDs$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onClickToRevShare$Action(e) {
            var r = this.controller;
            return w.Logger.startActiveSpan("OnClickToRevShare__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnClickToRevShare"), t.setAttribute("outsystems.function.key", "694bcb0b-945e-486a-bcf0-267063a408cd"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onClickToRevShare$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
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
            return H.defaultTimeout
        }
    };
    o(i, "ControllerInner");
    let u = i;
    nt = u, nt.registerVariableGroupType("PartnersHub.Home.CommissionPlans$ActionGetBDEnableCFDScreens", [{
        name: "EnableCFDScreens",
        attrName: "enableCFDScreensOut",
        mandatory: !1,
        dataType: w.DataTypes.DataTypes.Boolean,
        defaultValue: o(function() {
            return !1
        }, "defaultValue")
    }])
}
var nt, vr = new w.Controller.ControllerFactory(nt, F);
var We = J(q());
var gr = {};
var hr = p; {
    let i = class i extends hr.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, gr);
            var s = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
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
            return R.defaultTimeout
        }
    };
    o(i, "ControllerInner");
    let u = i;
    _r = u
}
var _r, br = new hr.Controller.ControllerFactory(_r, Pe);
var yr = p,
    Ba = E.PlaceholderContent,
    Ua = E.IteratorPlaceholderContent,
    ue = class ue extends V.BaseWebBlock {
        static get displayName() {
            return "Utilities.Separator"
        }
        static getAttributes() {
            return {
                codeFunction: "Separator",
                functionKey: "39080a9d-eba3-40c0-bcd0-df9437a23bd4",
                functionOwnerName: "OutSystemsUI",
                functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return Gt
        }
        get controllerFactory() {
            return br
        }
        get title() {
            return ""
        }
        internalRender() {
            let i = this.model,
                d = this.controller,
                e = this.idService,
                r = d.validationService,
                t = this.widgetsRecordProvider,
                s = d.callContext(),
                n = ue.ifWidget,
                a = ue.textWidget,
                c = ue.asPrimitiveValue,
                f = ue.getTranslation,
                m = this;
            return We.createElement("div", this.getRootNodeProperties(), We.createElement(h, {
                align: 0,
                animate: !1,
                style: i.getCachedValue(e.getId("kWhV3I81UUyymP3TLEExTA.Style"), function() {
                    return i.variables.isVerticalIn ? "separator-wrapper full-height padding-right-" + i.variables.spaceIn + " padding-left-" + i.variables.spaceIn : "padding-top-" + i.variables.spaceIn + " padding-bottom-" + i.variables.spaceIn
                }, function() {
                    return i.variables.isVerticalIn
                }, function() {
                    return i.variables.spaceIn
                }),
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t,
                style_dataFetchStatus: yr.Model.calculateDataFetchStatus(i.variables._isVerticalInDataFetchStatus, i.variables._spaceInDataFetchStatus)
            }, We.createElement(h, {
                align: 0,
                animate: !1,
                style: i.getCachedValue(e.getId("2yAyXVm9l0qeV2aJqaE2cw.Style"), function() {
                    return "separator" + (i.variables.isVerticalIn ? " separator-vertical" : " separator-horizontal") + " background-" + i.variables.colorIn + " " + i.variables.extendedClassIn
                }, function() {
                    return i.variables.isVerticalIn
                }, function() {
                    return i.variables.colorIn
                }, function() {
                    return i.variables.extendedClassIn
                }),
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t,
                style_dataFetchStatus: yr.Model.calculateDataFetchStatus(i.variables._isVerticalInDataFetchStatus, i.variables._colorInDataFetchStatus, i.variables._extendedClassInDataFetchStatus)
            })))
        }
    };
o(ue, "View");
var it = ue,
    at = it;
var W = J(q());
var Ar = {};

function ot(u, i, d, e) {
    u.OnSlideMovedObj = i.OnSlideMovedHandler, u.OnCarouselInitializedObj = i.InitializeHandler
}
o(ot, "default");
var A = p; {
    let i = class i extends A.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, Ar);
            var s = this.controller;
            this.clientActionProxies = {
                onSlideMovedHandler$Action: o(function(n, a) {
                    return n = n === void 0 ? "" : n, a = a === void 0 ? 0 : a, s.executeActionInsideJSNode(s._onSlideMovedHandler$Action.bind(s, A.DataConversion.JSNodeParamConverter.from(n, A.DataTypes.DataTypes.Text), A.DataConversion.JSNodeParamConverter.from(a, A.DataTypes.DataTypes.Integer)), s.callContext(), function(c) {
                        return {}
                    }, function() {}, "OnSlideMovedHandler")
                }, "onSlideMovedHandler$Action"),
                initializeHandler$Action: o(function(n) {
                    return n = n === void 0 ? "" : n, s.executeActionInsideJSNode(s._initializeHandler$Action.bind(s, A.DataConversion.JSNodeParamConverter.from(n, A.DataTypes.DataTypes.Text)), s.callContext(), function(a) {
                        return {}
                    }, function() {}, "InitializeHandler")
                }, "initializeHandler$Action")
            }, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    s = this.idService;
                return A.Logger.startActiveSpan("OnDestroy", function(n) {
                    n && (n.setAttribute("code.function", "OnDestroy"), n.setAttribute("outsystems.function.key", "1c69d0f1-3724-475c-b06f-bae9655df488"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnDestroy"), e = t.callContext(e), R.carouselDestroy$Action(r.variables.internalConfigsVar.uniqueIdAttr, e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(e) {
            this.__onDestroy$Action = e
        }
        get _initializeHandler$Action() {
            return this.hasOwnProperty("__initializeHandler$Action") || (this.__initializeHandler$Action = function(e, r) {
                var t = this.model,
                    s = this.controller,
                    n = this.idService;
                return A.Logger.startActiveSpan("InitializeHandler", function(a) {
                    return a && (a.setAttribute("code.function", "InitializeHandler"), a.setAttribute("outsystems.function.key", "2878f020-349a-4095-92b5-64914bdbefc7"), a.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), a.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), A.Flow.tryFinally(function() {
                        s.ensureControllerAlive("InitializeHandler"), r = s.callContext(r);
                        var c = new A.DataTypes.VariableHolder(new(s.constructor.getVariableGroupType("OutSystemsUI.Interaction.Carousel.InitializeHandler$vars")));
                        return c.value.carouselIdInLocal = e, A.Flow.executeAsyncFlow(function() {
                            return s.initialized$Action(c.value.carouselIdInLocal, r)
                        })
                    }, function() {
                        a && a.end()
                    })
                }, 1)
            }), this.__initializeHandler$Action
        }
        set _initializeHandler$Action(e) {
            this.__initializeHandler$Action = e
        }
        get _onSlideMovedHandler$Action() {
            return this.hasOwnProperty("__onSlideMovedHandler$Action") || (this.__onSlideMovedHandler$Action = function(e, r, t) {
                var s = this.model,
                    n = this.controller,
                    a = this.idService;
                return A.Logger.startActiveSpan("OnSlideMovedHandler", function(c) {
                    return c && (c.setAttribute("code.function", "OnSlideMovedHandler"), c.setAttribute("outsystems.function.key", "2b489ae5-936e-4624-b650-e33d88fbc446"), c.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), c.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), A.Flow.tryFinally(function() {
                        n.ensureControllerAlive("OnSlideMovedHandler"), t = n.callContext(t);
                        var f = new A.DataTypes.VariableHolder(new(n.constructor.getVariableGroupType("OutSystemsUI.Interaction.Carousel.OnSlideMovedHandler$vars")));
                        return f.value.carouselIdInLocal = e, f.value.indexInLocal = r, A.Flow.executeAsyncFlow(function() {
                            return n.onSlideMoved$Action(f.value.carouselIdInLocal, f.value.indexInLocal, t)
                        })
                    }, function() {
                        c && c.end()
                    })
                }, 1)
            }), this.__onSlideMovedHandler$Action
        }
        set _onSlideMovedHandler$Action(e) {
            this.__onSlideMovedHandler$Action = e
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    s = this.idService;
                return A.Logger.startActiveSpan("OnParametersChanged", function(n) {
                    n && (n.setAttribute("code.function", "OnParametersChanged"), n.setAttribute("outsystems.function.key", "4c5a128f-3f2a-4cb0-b2f3-031aef45cb2d"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnParametersChanged"), e = t.callContext(e), r.variables.navigationIn !== r.variables.internalConfigsVar.navigationAttr && (r.variables.internalConfigsVar.navigationAttr = r.variables.navigationIn, R.carouselChangeTextProperty$Action(r.variables.internalConfigsVar.uniqueIdAttr, "Navigation", r.variables.internalConfigsVar.navigationAttr, e)), r.variables.itemsPerSlideIn.desktopAttr !== r.variables.internalConfigsVar.itemsDesktopAttr && (r.variables.internalConfigsVar.itemsDesktopAttr = r.variables.itemsPerSlideIn.desktopAttr, R.carouselChangeIntegerProp$Action(r.variables.internalConfigsVar.uniqueIdAttr, "ItemsDesktop", r.variables.internalConfigsVar.itemsDesktopAttr, e)), r.variables.itemsPerSlideIn.tabletAttr !== r.variables.internalConfigsVar.itemsTabletAttr && (r.variables.internalConfigsVar.itemsTabletAttr = r.variables.itemsPerSlideIn.tabletAttr, R.carouselChangeIntegerProp$Action(r.variables.internalConfigsVar.uniqueIdAttr, "ItemsTablet", r.variables.internalConfigsVar.itemsTabletAttr, e)), r.variables.itemsPerSlideIn.phoneAttr !== r.variables.internalConfigsVar.itemsPhoneAttr && (r.variables.internalConfigsVar.itemsPhoneAttr = r.variables.itemsPerSlideIn.phoneAttr, R.carouselChangeIntegerProp$Action(r.variables.internalConfigsVar.uniqueIdAttr, "ItemsPhone", r.variables.internalConfigsVar.itemsPhoneAttr, e)), r.variables.optionalConfigsIn.autoPlayAttr !== r.variables.internalConfigsVar.autoPlayAttr && (r.variables.internalConfigsVar.autoPlayAttr = r.variables.optionalConfigsIn.autoPlayAttr, R.carouselChangeBooleanProperty$Action(r.variables.internalConfigsVar.uniqueIdAttr, "AutoPlay", r.variables.internalConfigsVar.autoPlayAttr, e)), r.variables.optionalConfigsIn.loopAttr !== r.variables.internalConfigsVar.loopAttr && (r.variables.internalConfigsVar.loopAttr = r.variables.optionalConfigsIn.loopAttr, R.carouselChangeBooleanProperty$Action(r.variables.internalConfigsVar.uniqueIdAttr, "Loop", r.variables.internalConfigsVar.loopAttr, e)), r.variables.optionalConfigsIn.paddingAttr !== r.variables.internalConfigsVar.paddingAttr && (r.variables.internalConfigsVar.paddingAttr = r.variables.optionalConfigsIn.paddingAttr, R.carouselChangeTextProperty$Action(r.variables.internalConfigsVar.uniqueIdAttr, "Padding", r.variables.internalConfigsVar.paddingAttr, e)), r.variables.optionalConfigsIn.itemsGapAttr !== r.variables.internalConfigsVar.itemsGapAttr && (r.variables.internalConfigsVar.itemsGapAttr = r.variables.optionalConfigsIn.itemsGapAttr, R.carouselChangeTextProperty$Action(r.variables.internalConfigsVar.uniqueIdAttr, "ItemsGap", r.variables.internalConfigsVar.itemsGapAttr, e)), r.variables.optionalConfigsIn.startingPositionAttr !== r.variables.internalConfigsVar.startingPositionAttr && (r.variables.internalConfigsVar.startingPositionAttr = r.variables.optionalConfigsIn.startingPositionAttr, R.carouselChangeIntegerProp$Action(r.variables.internalConfigsVar.uniqueIdAttr, "StartingPosition", r.variables.internalConfigsVar.startingPositionAttr, e)), r.variables.heightIn !== r.variables.internalConfigsVar.heightAttr && (r.variables.internalConfigsVar.heightAttr = r.variables.heightIn, R.carouselChangeTextProperty$Action(r.variables.internalConfigsVar.uniqueIdAttr, "Height", r.variables.internalConfigsVar.heightAttr, e)), r.variables.extendedClassIn !== r.variables.internalConfigsVar.extendedClassAttr && (r.variables.internalConfigsVar.extendedClassAttr = r.variables.extendedClassIn, R.carouselChangeTextProperty$Action(r.variables.internalConfigsVar.uniqueIdAttr, "ExtendedClass", r.variables.internalConfigsVar.extendedClassAttr, e))
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(e) {
            this.__onParametersChanged$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    s = this.idService;
                return A.Logger.startActiveSpan("OnReady", function(n) {
                    n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "55a88d23-f92e-4195-9c3a-18901ac10ad0"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e), R.carouselInitialize$Action(r.variables.internalConfigsVar.uniqueIdAttr, e), R.logEvent$Action(ne.logType.general, "Carousel created", e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    s = this.idService;
                return A.Logger.startActiveSpan("OnInitialize", function(n) {
                    n && (n.setAttribute("code.function", "OnInitialize"), n.setAttribute("outsystems.function.key", "dafe53b9-d39c-4d96-baa2-2002b3bd13b5"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e);
                        var a = new A.DataTypes.VariableHolder,
                            c = new A.DataTypes.VariableHolder(new A.DataTypes.JSONSerializeOutputType);
                        R.logEvent$Action(ne.logType.general, "Going to create Carousel", e), a.value = R.generateUniqueId$Action(r.variables.internalConfigsVar.uniqueIdAttr, e), r.variables.internalConfigsVar.uniqueIdAttr = a.value.unique_IDOut, r.variables.internalConfigsVar.extendedClassAttr = r.variables.extendedClassIn, r.variables.internalConfigsVar.navigationAttr = r.variables.navigationIn, r.variables.internalConfigsVar.heightAttr = r.variables.heightIn, r.variables.internalConfigsVar.autoPlayAttr = r.variables.optionalConfigsIn.autoPlayAttr, r.variables.internalConfigsVar.loopAttr = r.variables.optionalConfigsIn.loopAttr, r.variables.internalConfigsVar.paddingAttr = r.variables.optionalConfigsIn.paddingAttr, r.variables.internalConfigsVar.itemsGapAttr = r.variables.optionalConfigsIn.itemsGapAttr, r.variables.internalConfigsVar.startingPositionAttr = r.variables.optionalConfigsIn.startingPositionAttr, r.variables.internalConfigsVar.itemsDesktopAttr = r.variables.itemsPerSlideIn.desktopAttr, r.variables.internalConfigsVar.itemsTabletAttr = r.variables.itemsPerSlideIn.tabletAttr, r.variables.internalConfigsVar.itemsPhoneAttr = r.variables.itemsPerSlideIn.phoneAttr, c.value.jSONOut = A.JSONUtils.serializeToJSON(r.variables.internalConfigsVar, !0, !1), R.carouselCreate$Action(r.variables.internalConfigsVar.uniqueIdAttr, c.value.jSONOut, ne.carouselProvider.splide, e), t._registerCallbacks$Action(e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        get _registerCallbacks$Action() {
            return this.hasOwnProperty("__registerCallbacks$Action") || (this.__registerCallbacks$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    s = this.idService;
                return A.Logger.startActiveSpan("RegisterCallbacks", function(n) {
                    n && (n.setAttribute("code.function", "RegisterCallbacks"), n.setAttribute("outsystems.function.key", "e67db216-47ed-4faa-9f19-6598ecde7b6f"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("RegisterCallbacks"), e = t.callContext(e);
                        var a = new A.DataTypes.VariableHolder;
                        a.value = A.Logger.startActiveSpan("GetCallbackHandlers", function(c) {
                            c && (c.setAttribute("code.function", "GetCallbackHandlers"), c.setAttribute("outsystems.function.key", "12086b05-e58f-48cd-bdd4-a449983a20de"), c.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), c.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(ot, "GetCallbackHandlers", "RegisterCallbacks", {
                                    OnSlideMovedObj: A.DataConversion.JSNodeParamConverter.to(null, A.DataTypes.DataTypes.Object),
                                    OnCarouselInitializedObj: A.DataConversion.JSNodeParamConverter.to(null, A.DataTypes.DataTypes.Object)
                                }, function(f) {
                                    var m = new(t.constructor.getVariableGroupType("OutSystemsUI.Interaction.Carousel.RegisterCallbacks$getCallbackHandlersJSResult"));
                                    return m.onSlideMovedObjOut = A.DataConversion.JSNodeParamConverter.from(f.OnSlideMovedObj, A.DataTypes.DataTypes.Object), m.onCarouselInitializedObjOut = A.DataConversion.JSNodeParamConverter.from(f.OnCarouselInitializedObj, A.DataTypes.DataTypes.Object), m
                                }, {
                                    OnSlideMovedHandler: t.clientActionProxies.onSlideMovedHandler$Action,
                                    InitializeHandler: t.clientActionProxies.initializeHandler$Action
                                }, {})
                            } finally {
                                c && c.end()
                            }
                        }, 1), R.carouselRegisterCallback$Action(r.variables.internalConfigsVar.uniqueIdAttr, ne.registeredCallbackEvents.carousel_OnSlideMoved, a.value.onSlideMovedObjOut, e), R.carouselRegisterCallback$Action(r.variables.internalConfigsVar.uniqueIdAttr, ne.registeredCallbackEvents.initialized, a.value.onCarouselInitializedObjOut, e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__registerCallbacks$Action
        }
        set _registerCallbacks$Action(e) {
            this.__registerCallbacks$Action = e
        }
        get _onRender$Action() {
            return this.hasOwnProperty("__onRender$Action") || (this.__onRender$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    s = this.idService;
                return A.Logger.startActiveSpan("OnRender", function(n) {
                    n && (n.setAttribute("code.function", "OnRender"), n.setAttribute("outsystems.function.key", "ff217726-3e54-4696-a30d-8293d473e1b0"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnRender"), e = t.callContext(e), R.carouselUpdateOnRender$Action(r.variables.internalConfigsVar.uniqueIdAttr, e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onRender$Action
        }
        set _onRender$Action(e) {
            this.__onRender$Action = e
        }
        onDestroy$Action(e) {
            var r = this.controller;
            return A.Logger.startActiveSpan("OnDestroy__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnDestroy"), t.setAttribute("outsystems.function.key", "1c69d0f1-3724-475c-b06f-bae9655df488"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onDestroy$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        initializeHandler$Action(e, r) {
            var t = this.controller;
            return A.Logger.startActiveSpan("InitializeHandler__proxy", function(s) {
                return s && (s.setAttribute("code.function", "InitializeHandler"), s.setAttribute("outsystems.function.key", "2878f020-349a-4095-92b5-64914bdbefc7"), s.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), s.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), A.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._initializeHandler$Action, r, e)
                }, function() {
                    s && s.end()
                })
            }, 0)
        }
        onSlideMovedHandler$Action(e, r, t) {
            var s = this.controller;
            return A.Logger.startActiveSpan("OnSlideMovedHandler__proxy", function(n) {
                return n && (n.setAttribute("code.function", "OnSlideMovedHandler"), n.setAttribute("outsystems.function.key", "2b489ae5-936e-4624-b650-e33d88fbc446"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), A.Flow.tryFinally(function() {
                    return s.safeExecuteClientAction(s._onSlideMovedHandler$Action, t, e, r)
                }, function() {
                    n && n.end()
                })
            }, 0)
        }
        onParametersChanged$Action(e) {
            var r = this.controller;
            return A.Logger.startActiveSpan("OnParametersChanged__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnParametersChanged"), t.setAttribute("outsystems.function.key", "4c5a128f-3f2a-4cb0-b2f3-031aef45cb2d"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onParametersChanged$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var r = this.controller;
            return A.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "55a88d23-f92e-4195-9c3a-18901ac10ad0"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onInitialize$Action(e) {
            var r = this.controller;
            return A.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "dafe53b9-d39c-4d96-baa2-2002b3bd13b5"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onInitialize$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        registerCallbacks$Action(e) {
            var r = this.controller;
            return A.Logger.startActiveSpan("RegisterCallbacks__proxy", function(t) {
                t && (t.setAttribute("code.function", "RegisterCallbacks"), t.setAttribute("outsystems.function.key", "e67db216-47ed-4faa-9f19-6598ecde7b6f"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._registerCallbacks$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onRender$Action(e) {
            var r = this.controller;
            return A.Logger.startActiveSpan("OnRender__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnRender"), t.setAttribute("outsystems.function.key", "ff217726-3e54-4696-a30d-8293d473e1b0"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onRender$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get onSlideMoved$Action() {
            return this.hasOwnProperty("_onSlideMoved$Action") || (this._onSlideMoved$Action = function() {
                return Promise.resolve()
            }), this._onSlideMoved$Action
        }
        set onSlideMoved$Action(e) {
            this._onSlideMoved$Action = e
        }
        get initialized$Action() {
            return this.hasOwnProperty("_initialized$Action") || (this._initialized$Action = function() {
                return Promise.resolve()
            }), this._initialized$Action
        }
        set initialized$Action(e) {
            this._initialized$Action = e
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    s = this.idService;
                return r.onInitialize$Action(e)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    s = this.idService;
                return r.onReady$Action(e)
            }), this._onReadyEventHandler
        }
        set onReadyEventHandler(e) {
            this._onReadyEventHandler = e
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    s = this.idService;
                return r.onRender$Action(e)
            }), this._onRenderEventHandler
        }
        set onRenderEventHandler(e) {
            this._onRenderEventHandler = e
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    s = this.idService;
                return r.onDestroy$Action(e)
            }), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(e) {
            this._onDestroyEventHandler = e
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    s = this.idService;
                return r.onParametersChanged$Action(e)
            }), this._onParametersChangedEventHandler
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
            return R.defaultTimeout
        }
    };
    o(i, "ControllerInner");
    let u = i;
    ke = u, ke.registerVariableGroupType("OutSystemsUI.Interaction.Carousel.InitializeHandler$vars", [{
        name: "CarouselId",
        attrName: "carouselIdInLocal",
        mandatory: !0,
        dataType: A.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }]), ke.registerVariableGroupType("OutSystemsUI.Interaction.Carousel.OnSlideMovedHandler$vars", [{
        name: "CarouselId",
        attrName: "carouselIdInLocal",
        mandatory: !0,
        dataType: A.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "Index",
        attrName: "indexInLocal",
        mandatory: !1,
        dataType: A.DataTypes.DataTypes.Integer,
        defaultValue: o(function() {
            return 0
        }, "defaultValue")
    }]), ke.registerVariableGroupType("OutSystemsUI.Interaction.Carousel.RegisterCallbacks$getCallbackHandlersJSResult", [{
        name: "OnSlideMovedObj",
        attrName: "onSlideMovedObjOut",
        mandatory: !0,
        dataType: A.DataTypes.DataTypes.Object,
        defaultValue: o(function() {
            return null
        }, "defaultValue")
    }, {
        name: "OnCarouselInitializedObj",
        attrName: "onCarouselInitializedObjOut",
        mandatory: !0,
        dataType: A.DataTypes.DataTypes.Object,
        defaultValue: o(function() {
            return null
        }, "defaultValue")
    }])
}
var ke, pr = new A.Controller.ControllerFactory(ke, Pe);
var ao = E.PlaceholderContent,
    oo = E.IteratorPlaceholderContent,
    me = class me extends V.BaseWebBlock {
        static get displayName() {
            return "Interaction.Carousel"
        }
        static getAttributes() {
            return {
                codeFunction: "Carousel",
                functionKey: "322c145b-0e8d-472c-b394-9fc44623687f",
                functionOwnerName: "OutSystemsUI",
                functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css"]
        }
        static getJsDependencies() {
            return ["scripts/OutSystemsUI.UserScripts.Splide.js", "scripts/OutSystemsUI.UserScripts.OutSystemsUI.js"]
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return Kt
        }
        get controllerFactory() {
            return pr
        }
        get title() {
            return ""
        }
        internalRender() {
            let i = this.model,
                d = this.controller,
                e = this.idService,
                r = d.validationService,
                t = this.widgetsRecordProvider,
                s = d.callContext(),
                n = me.ifWidget,
                a = me.textWidget,
                c = me.asPrimitiveValue,
                f = me.getTranslation,
                m = this;
            return W.createElement("div", this.getRootNodeProperties(), W.createElement(h, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    name: i.variables.internalConfigsVar.uniqueIdAttr
                },
                style: "osui-carousel",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, W.createElement(h, {
                align: 0,
                animate: !1,
                style: "osui-carousel__track",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }, n(!1, !1, this, function() {
                return []
            }, function() {
                return [W.createElement(Le, {
                    align: 0,
                    content: m.props.placeholders.carouselItems,
                    style: "osui-carousel__content",
                    _idProps: {
                        service: e,
                        name: "CarouselItems"
                    },
                    _widgetRecordProvider: t
                }), W.createElement(h, {
                    align: 0,
                    animate: !1,
                    style: "splide__arrows",
                    visible: !1,
                    _idProps: {
                        service: e,
                        name: "Arrows"
                    },
                    _widgetRecordProvider: t
                }, W.createElement(h, {
                    align: 0,
                    animate: !1,
                    style: "splide__arrow splide__arrow--prev background-neutral-0",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "4"
                    },
                    _widgetRecordProvider: t
                }, W.createElement(oe, {
                    extendedProperties: {
                        style: "font-size: 18px;"
                    },
                    icon: "angle-left",
                    iconSize: 0,
                    style: "icon text-neutral-7",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "5"
                    },
                    _widgetRecordProvider: t
                })), W.createElement(h, {
                    align: 0,
                    animate: !1,
                    style: "splide__arrow splide__arrow--next background-neutral-0",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "6"
                    },
                    _widgetRecordProvider: t
                }, W.createElement(oe, {
                    extendedProperties: {
                        style: "font-size: 18px;"
                    },
                    icon: "angle-right",
                    iconSize: 0,
                    style: "icon text-neutral-7",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "7"
                    },
                    _widgetRecordProvider: t
                }))), W.createElement(h, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "text-align: center;"
                    },
                    style: "splide__pagination",
                    visible: !1,
                    _idProps: {
                        service: e,
                        name: "Pagination"
                    },
                    _widgetRecordProvider: t
                }, W.createElement(P, {
                    tag: "li",
                    _idProps: {
                        service: e,
                        uuid: "9"
                    },
                    _widgetRecordProvider: t
                }, W.createElement(h, {
                    align: 0,
                    animate: !1,
                    style: "splide__pagination__page is-active",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "10"
                    },
                    _widgetRecordProvider: t
                }), W.createElement(h, {
                    align: 0,
                    animate: !1,
                    style: "splide__pagination__page",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "11"
                    },
                    _widgetRecordProvider: t
                }), W.createElement(h, {
                    align: 0,
                    animate: !1,
                    style: "splide__pagination__page",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "12"
                    },
                    _widgetRecordProvider: t
                }), W.createElement(h, {
                    align: 0,
                    animate: !1,
                    style: "splide__pagination__page",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "13"
                    },
                    _widgetRecordProvider: t
                }), W.createElement(h, {
                    align: 0,
                    animate: !1,
                    style: "splide__pagination__page",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "14"
                    },
                    _widgetRecordProvider: t
                }), W.createElement(h, {
                    align: 0,
                    animate: !1,
                    style: "splide__pagination__page",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "15"
                    },
                    _widgetRecordProvider: t
                })))]
            }))))
        }
    };
o(me, "View");
var lt = me,
    Ee = lt;
var gn = E.PlaceholderContent,
    _o = E.IteratorPlaceholderContent,
    fe = class fe extends V.BaseWebBlock {
        static get displayName() {
            return "Home.CommissionPlans"
        }
        static getAttributes() {
            return {
                codeFunction: "CommissionPlans",
                functionKey: "5fa3ec0e-e03b-4ce3-90a7-e6d76785291b",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Home.CommissionPlans.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [at, Ee]
        }
        get modelFactory() {
            return jt
        }
        get controllerFactory() {
            return vr
        }
        get title() {
            return ""
        }
        internalRender() {
            let i = this.model,
                d = this.controller,
                e = this.idService,
                r = d.validationService,
                t = this.widgetsRecordProvider,
                s = d.callContext(),
                n = fe.ifWidget,
                a = fe.textWidget,
                c = fe.asPrimitiveValue,
                f = fe.getTranslation,
                m = this;
            return T.createElement("div", this.getRootNodeProperties(), n(!0, !1, this, function() {
                return [T.createElement(h, {
                    align: 0,
                    animate: !1,
                    gridProperties: {
                        classes: "OSInline",
                        width: "100%"
                    },
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "0"
                    },
                    _widgetRecordProvider: t
                }, T.createElement(h, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "border: 1px solid #DEE2E6; border-radius: 8px; gap: 16px; padding: 16px;"
                    },
                    gridProperties: {
                        classes: "OSInline",
                        width: "100%"
                    },
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "1"
                    },
                    _widgetRecordProvider: t
                }, T.createElement(h, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "display: flex; flex-direction: column; gap: 16px;"
                    },
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "2"
                    },
                    _widgetRecordProvider: t
                }, T.createElement(P, {
                    tag: "h5",
                    _idProps: {
                        service: e,
                        uuid: "3"
                    },
                    _widgetRecordProvider: t
                }, T.createElement(C, {
                    extendedProperties: {
                        OSTagName: "h5"
                    },
                    style: "container-title",
                    text: [a(f("IOkWIqJMPUO_Lk53vxAtSw#Value", "You can earn commissions from"))],
                    _idProps: {
                        service: e,
                        name: "Youcanearncommissionsfrom"
                    },
                    _widgetRecordProvider: t
                })), T.createElement(h, {
                    align: 0,
                    animate: !1,
                    style: "cfd-container",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "5"
                    },
                    _widgetRecordProvider: t
                }, T.createElement(P, {
                    extendedProperties: {
                        value: "CFDs"
                    },
                    tag: "h6",
                    _idProps: {
                        service: e,
                        uuid: "6"
                    },
                    _widgetRecordProvider: t
                }, T.createElement(C, {
                    style: "section-subtitle",
                    text: ["CFDs trading"],
                    _idProps: {
                        service: e,
                        uuid: "7"
                    },
                    _widgetRecordProvider: t
                })), T.createElement(D, {
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    _idProps: {
                        service: e,
                        uuid: "8"
                    },
                    _widgetRecordProvider: t
                }, T.createElement(C, {
                    style: "description",
                    text: [a(f("rEEPHXMxSkqto6iJFQRDow#Value", "Earn with our instrument-based commission plan."))],
                    _idProps: {
                        service: e,
                        uuid: "9"
                    },
                    _widgetRecordProvider: t
                }), T.createElement(P, {
                    extendedEvents: {
                        onClick: o(function() {
                            return Promise.resolve().then(function() {
                                var l = s.clone();
                                return d.onClickToCFDs$Action(d.callContext(l))
                            })
                        }, "onClick")
                    },
                    tag: "span",
                    _idProps: {
                        service: e,
                        uuid: "10"
                    },
                    _widgetRecordProvider: t
                }, T.createElement(C, {
                    extendedProperties: {
                        style: "color: #222; cursor: pointer; font-weight: bold; margin-left: 4px; text-decoration: underline;"
                    },
                    style: "learn-more",
                    text: [a(f("WWVqgcxwK02Qs6tbKp5Mmg#Value", "Learn more"))],
                    _idProps: {
                        service: e,
                        uuid: "11"
                    },
                    _widgetRecordProvider: t
                })))), T.createElement(at, {
                    getOwnerSpan: o(function() {
                        return m.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: o(function() {
                        return m.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        Space: re.space.small
                    },
                    events: {
                        _handleError: o(function(l) {
                            d.handleError(l)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: e,
                        uuid: "12",
                        alias: "1"
                    },
                    _widgetRecordProvider: t,
                    _dependencies: []
                }), T.createElement(h, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "display: flex; flex-direction: column; gap: 8px;"
                    },
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "13"
                    },
                    _widgetRecordProvider: t
                }, T.createElement(P, {
                    tag: "h6",
                    _idProps: {
                        service: e,
                        uuid: "14"
                    },
                    _widgetRecordProvider: t
                }, T.createElement(C, {
                    style: "section-subtitle",
                    text: ["Options trading"],
                    _idProps: {
                        service: e,
                        uuid: "15"
                    },
                    _widgetRecordProvider: t
                })), T.createElement(Ee, {
                    getOwnerSpan: o(function() {
                        return m.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: o(function() {
                        return m.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        ItemsPerSlide: i.getCachedValue(e.getId("E2_F7Aw440WyAcZeOeK9Kw.ItemsPerSlide"), function() {
                            return function() {
                                var l = new xe;
                                return l.desktopAttr = 2, l
                            }()
                        }),
                        Navigation: re.carouselNavigation.dots,
                        OptionalConfigs: i.getCachedValue(e.getId("E2_F7Aw440WyAcZeOeK9Kw.OptionalConfigs"), function() {
                            return function() {
                                var l = new Ve;
                                return l.autoPlayAttr = !1, l.loopAttr = !1, l.itemsGapAttr = "8px", l
                            }()
                        })
                    },
                    events: {
                        _handleError: o(function(l) {
                            d.handleError(l)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: e,
                        uuid: "16",
                        alias: "2"
                    },
                    _widgetRecordProvider: t,
                    placeholders: {
                        carouselItems: new gn(function() {
                            return [T.createElement(h, {
                                align: 0,
                                animate: !1,
                                gridProperties: {
                                    classes: "OSInline"
                                },
                                style: "options-trading-container",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    name: "RevShare2"
                                },
                                _widgetRecordProvider: t
                            }, T.createElement(C, {
                                extendedProperties: {
                                    style: "padding: 0px;"
                                },
                                style: "ph-card-title",
                                text: ["RevShare plan"],
                                _idProps: {
                                    service: e,
                                    uuid: "18"
                                },
                                _widgetRecordProvider: t
                            }), T.createElement(h, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "19"
                                },
                                _widgetRecordProvider: t
                            }, T.createElement(P, {
                                extendedProperties: {
                                    className: "ph-options-trading-description"
                                },
                                tag: "span",
                                _idProps: {
                                    service: e,
                                    uuid: "20"
                                },
                                _widgetRecordProvider: t
                            }, T.createElement(C, {
                                style: "description",
                                text: [a(f("j4vWVltZ2U+0ByDizgvLaA#Value", "Earn up to 40% commissions from client trades. "))],
                                _idProps: {
                                    service: e,
                                    uuid: "21"
                                },
                                _widgetRecordProvider: t
                            }), T.createElement(P, {
                                extendedEvents: {
                                    onClick: o(function() {
                                        var l = s.clone();
                                        d.onClickToRevShare$Action(d.callContext(l))
                                    }, "onClick")
                                },
                                tag: "span",
                                _idProps: {
                                    service: e,
                                    uuid: "22"
                                },
                                _widgetRecordProvider: t
                            }, T.createElement(C, {
                                style: "learn-more",
                                text: [a(f("hrkFunwzoECUPWB0IRcDKA#Value", "Learn more"))],
                                _idProps: {
                                    service: e,
                                    uuid: "23"
                                },
                                _widgetRecordProvider: t
                            }))))), T.createElement(h, {
                                align: 0,
                                animate: !1,
                                gridProperties: {
                                    classes: "OSInline"
                                },
                                style: "options-trading-container",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    name: "Turnover2"
                                },
                                _widgetRecordProvider: t
                            }, T.createElement(C, {
                                extendedProperties: {
                                    style: "padding: 0px;"
                                },
                                style: "ph-card-title",
                                text: ["Turnover plan"],
                                _idProps: {
                                    service: e,
                                    uuid: "25"
                                },
                                _widgetRecordProvider: t
                            }), T.createElement(h, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "26"
                                },
                                _widgetRecordProvider: t
                            }, T.createElement(P, {
                                extendedProperties: {
                                    className: "ph-options-trading-description"
                                },
                                tag: "span",
                                _idProps: {
                                    service: e,
                                    uuid: "27"
                                },
                                _widgetRecordProvider: t
                            }, T.createElement(C, {
                                style: "description",
                                text: [a(f("Ku29M+DdTE2TpHrrNCpPLA#Value", "Earn based on each contract's payout probability. "))],
                                _idProps: {
                                    service: e,
                                    uuid: "28"
                                },
                                _widgetRecordProvider: t
                            }), T.createElement(P, {
                                extendedEvents: {
                                    onClick: o(function() {
                                        var l = s.clone();
                                        d.onClickToTurnoverPlan$Action(d.callContext(l))
                                    }, "onClick")
                                },
                                tag: "span",
                                _idProps: {
                                    service: e,
                                    uuid: "29"
                                },
                                _widgetRecordProvider: t
                            }, T.createElement(C, {
                                style: "learn-more",
                                text: [a(f("fmSAHAptP0KYtOXYomKxmA#Value", "Learn more"))],
                                _idProps: {
                                    service: e,
                                    uuid: "30"
                                },
                                _widgetRecordProvider: t
                            })))))]
                        })
                    },
                    _dependencies: []
                })))))]
            }, function() {
                return []
            }))
        }
    };
o(fe, "View");
var ct = fe,
    bo = ct;
var te = J(q());
var hn = {
        "tN_UWmOs0kGS2m27_Rkz9Q#ValueExpression.-660735948.1": "\u0634\u0627\u0647\u062F \u0627\u0644\u0643\u0644",
        "JTUTHDwmmke37+oqdpbEoQ#Value": "\u064A\u0645\u0643\u0646\u0643 \u0643\u0633\u0628 \u0639\u0645\u0648\u0644\u0627\u062A \u0645\u0646"
    },
    _n = {
        "tN_UWmOs0kGS2m27_Rkz9Q#ValueExpression.-660735948.1": "Alle anzeigen",
        "JTUTHDwmmke37+oqdpbEoQ#Value": "Sie k\xF6nnen Provisionen von verdienen"
    },
    bn = {
        "tN_UWmOs0kGS2m27_Rkz9Q#ValueExpression.-660735948.1": "Ver todo",
        "JTUTHDwmmke37+oqdpbEoQ#Value": "Puedes ganar comisiones de"
    },
    yn = {
        "tN_UWmOs0kGS2m27_Rkz9Q#ValueExpression.-660735948.1": "Voir tout",
        "JTUTHDwmmke37+oqdpbEoQ#Value": "Vous pouvez gagner des commissions de"
    },
    An = {
        "tN_UWmOs0kGS2m27_Rkz9Q#ValueExpression.-660735948.1": "Vedi tutto",
        "JTUTHDwmmke37+oqdpbEoQ#Value": "Puoi guadagnare commissioni da"
    },
    pn = {
        "tN_UWmOs0kGS2m27_Rkz9Q#ValueExpression.-660735948.1": "Zobacz wszystko",
        "JTUTHDwmmke37+oqdpbEoQ#Value": "Mo\u017Cesz zarabia\u0107 prowizje z"
    },
    Cn = {
        "tN_UWmOs0kGS2m27_Rkz9Q#ValueExpression.-660735948.1": "Ver tudo",
        "JTUTHDwmmke37+oqdpbEoQ#Value": "Voc\xEA pode ganhar comiss\xF5es de"
    },
    Pn = {
        "tN_UWmOs0kGS2m27_Rkz9Q#ValueExpression.-660735948.1": "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0441\u0435",
        "JTUTHDwmmke37+oqdpbEoQ#Value": "\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0437\u0430\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0442\u044C \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u043E\u043D\u043D\u044B\u0435 \u043E\u0442"
    },
    Cr = {
        "ar-001": {
            translations: hn,
            isRTL: !0
        },
        "de-DE": {
            translations: _n,
            isRTL: !1
        },
        "es-ES": {
            translations: bn,
            isRTL: !1
        },
        "fr-FR": {
            translations: yn,
            isRTL: !1
        },
        "it-IT": {
            translations: An,
            isRTL: !1
        },
        "pl-PL": {
            translations: pn,
            isRTL: !1
        },
        "pt-PT": {
            translations: Cn,
            isRTL: !1
        },
        "ru-RU": {
            translations: Pn,
            isRTL: !1
        }
    };
var $ = p; {
    let i = class i extends $.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, Cr);
            var s = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get countEvent$ServerAction() {
            return this.hasOwnProperty("_countEvent$ServerAction") || (this._countEvent$ServerAction = function(e, r) {
                var t = this.controller;
                return $.Logger.startActiveSpan("CountEvent", function(s) {
                    return s && (s.setAttribute("code.function", "CountEvent"), s.setAttribute("outsystems.function.key", "91a14e6c-7235-4a96-b4c1-a3167a52ecd7"), s.setAttribute("outsystems.function.owner.name", "PartnersHub"), s.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), s.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), $.Flow.tryFinally(function() {
                        var n = {
                            ShowUnpublishEvent: $.DataConversion.ServerDataConverter.to(e, $.DataTypes.DataTypes.Boolean)
                        };
                        return t.callServerAction("CountEvent", "screenservices/PartnersHub/Events/EventListSection/ActionCountEvent", "zV8oTZGzQLPEcc26KEGkxw", n, t.callContext(r), void 0, void 0, !0).then(function(a) {
                            var c = new(t.constructor.getVariableGroupType("PartnersHub.Events.EventListSection$ActionCountEvent"));
                            return c.numberOfRowOut = $.DataConversion.ServerDataConverter.from(a.NumberOfRow, Ie), c
                        })
                    }, function() {
                        s && s.end()
                    })
                }, 0)
            }), this._countEvent$ServerAction
        }
        set countEvent$ServerAction(e) {
            this._countEvent$ServerAction = e
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    s = this.idService;
                return $.Logger.startActiveSpan("OnReady", function(n) {
                    return n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "86118444-f0c3-4f79-86cd-41881b142cb4"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), $.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var a = new $.DataTypes.VariableHolder;
                        return $.Flow.executeAsyncFlow(function() {
                            return r.flush(), t.countEvent$ServerAction(_.getshowUnpublishEventFF(), e).then(function(c) {
                                a.value = c
                            }).then(function() {
                                r.variables.numberOfEventsVar = a.value.numberOfRowOut
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _seeAllOnClick$Action() {
            return this.hasOwnProperty("__seeAllOnClick$Action") || (this.__seeAllOnClick$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    s = this.idService;
                return $.Logger.startActiveSpan("SeeAllOnClick", function(n) {
                    n && (n.setAttribute("code.function", "SeeAllOnClick"), n.setAttribute("outsystems.function.key", "aaf4a9a3-6859-4d89-baf7-bd1c0d7ab4d6"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("SeeAllOnClick"), e = t.callContext(e), H.rudderstackTrackEvent$Action(function() {
                            var a = new z;
                            return a.actionAttr = "click_cta", a.cta_nameAttr = "See all", a.cta_placementAttr = "see all in event section", a
                        }(), "ce_partnershub_form", e), $.Navigation.navigateTo($.Navigation.generateScreenURL("PartnersHub", "AllEvent", {}), $.Transitions.createTransition($.Transitions.TransitionAnimation.None), e, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__seeAllOnClick$Action
        }
        set _seeAllOnClick$Action(e) {
            this.__seeAllOnClick$Action = e
        }
        onReady$Action(e) {
            var r = this.controller;
            return $.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "86118444-f0c3-4f79-86cd-41881b142cb4"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), $.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        seeAllOnClick$Action(e) {
            var r = this.controller;
            return $.Logger.startActiveSpan("SeeAllOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "SeeAllOnClick"), t.setAttribute("outsystems.function.key", "aaf4a9a3-6859-4d89-baf7-bd1c0d7ab4d6"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._seeAllOnClick$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    s = this.idService;
                return r.onReady$Action(e)
            }), this._onReadyEventHandler
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
            return H.defaultTimeout
        }
    };
    o(i, "ControllerInner");
    let u = i;
    dt = u, dt.registerVariableGroupType("PartnersHub.Events.EventListSection$ActionCountEvent", [{
        name: "NumberOfRow",
        attrName: "numberOfRowOut",
        mandatory: !1,
        dataType: $.DataTypes.DataTypes.Record,
        defaultValue: o(function() {
            return new Ie
        }, "defaultValue"),
        complexType: Ie
    }])
}
var dt, Pr = new $.Controller.ControllerFactory(dt, F);
var mt = J(q());
var Sr = {};

function ut(u, i, d, e) {
    var r = document.getElementById(u.WidgetId),
        t = o(function(a) {
            var c;
            return isNaN(a) ? !1 : (c = parseFloat(a), (c | 0) === c)
        }, "checkIfIsInteger"),
        s = t(u.Height) ? u.Height + "px" : u.Height,
        n = t(u.Width) ? u.Width + "px" : u.Width;
    (u.Width !== "" || typeof u.Width != "undefined") && r.style.setProperty("--scrollable-area-width", n), (u.Height !== "" || typeof u.Height != "undefined") && r.style.setProperty("--scrollable-area-height", s)
}
o(ut, "default");
var K = p; {
    let i = class i extends K.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, Sr);
            var s = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    s = this.idService;
                return K.Logger.startActiveSpan("OnParametersChanged", function(n) {
                    n && (n.setAttribute("code.function", "OnParametersChanged"), n.setAttribute("outsystems.function.key", "78c192e4-849b-47de-b80d-468eddc930ca"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnParametersChanged"), e = t.callContext(e), t._onReady$Action(e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(e) {
            this.__onParametersChanged$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    s = this.idService;
                return K.Logger.startActiveSpan("OnReady", function(n) {
                    n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "a6ace38b-3765-45d8-9109-f6f321e459b8"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e), K.Logger.startActiveSpan("SetClasses", function(a) {
                            a && (a.setAttribute("code.function", "SetClasses"), a.setAttribute("outsystems.function.key", "2e878d6a-5e78-44ab-9ac8-9d78395bf8f1"), a.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), a.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(ut, "SetClasses", "OnReady", {
                                    Height: K.DataConversion.JSNodeParamConverter.to(r.variables.heightIn, K.DataTypes.DataTypes.Text),
                                    Width: K.DataConversion.JSNodeParamConverter.to(r.variables.widthIn, K.DataTypes.DataTypes.Text),
                                    WidgetId: K.DataConversion.JSNodeParamConverter.to(s.getId("Content"), K.DataTypes.DataTypes.Text)
                                }, function(c) {}, {}, {})
                            } finally {
                                a && a.end()
                            }
                        }, 1)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        onParametersChanged$Action(e) {
            var r = this.controller;
            return K.Logger.startActiveSpan("OnParametersChanged__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnParametersChanged"), t.setAttribute("outsystems.function.key", "78c192e4-849b-47de-b80d-468eddc930ca"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onParametersChanged$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var r = this.controller;
            return K.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "a6ace38b-3765-45d8-9109-f6f321e459b8"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    s = this.idService;
                return r.onReady$Action(e)
            }), this._onReadyEventHandler
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
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    s = this.idService;
                return r.onParametersChanged$Action(e)
            }), this._onParametersChangedEventHandler
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
            return R.defaultTimeout
        }
    };
    o(i, "ControllerInner");
    let u = i;
    Er = u
}
var Er, Or = new K.Controller.ControllerFactory(Er, Pe);
var Sn = p,
    $o = E.PlaceholderContent,
    Wo = E.IteratorPlaceholderContent,
    ve = class ve extends V.BaseWebBlock {
        static get displayName() {
            return "Interaction.ScrollableArea"
        }
        static getAttributes() {
            return {
                codeFunction: "ScrollableArea",
                functionKey: "52c33e9f-72b4-4d92-9f0c-01c51e409a2b",
                functionOwnerName: "OutSystemsUI",
                functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return Zt
        }
        get controllerFactory() {
            return Or
        }
        get title() {
            return ""
        }
        internalRender() {
            let i = this.model,
                d = this.controller,
                e = this.idService,
                r = d.validationService,
                t = this.widgetsRecordProvider,
                s = d.callContext(),
                n = ve.ifWidget,
                a = ve.textWidget,
                c = ve.asPrimitiveValue,
                f = ve.getTranslation,
                m = this;
            return mt.createElement("div", this.getRootNodeProperties(), mt.createElement(Le, {
                align: 0,
                content: m.props.placeholders.content,
                gridProperties: {
                    classes: "OSInline"
                },
                style: i.getCachedValue(e.getId("Content.Style"), function() {
                    return "scrollable-area-content " + i.variables.orientationIn + "-scroll " + (i.variables.scrollbarStyleIn === ne.scrollbarStyle.compact ? "compact" : i.variables.scrollbarStyleIn === ne.scrollbarStyle.none ? "none" : "") + (i.variables.extendedClassIn === "" ? "" : " " + i.variables.extendedClassIn)
                }, function() {
                    return i.variables.orientationIn
                }, function() {
                    return i.variables.scrollbarStyleIn
                }, function() {
                    return i.variables.extendedClassIn
                }),
                _idProps: {
                    service: e,
                    name: "Content"
                },
                _widgetRecordProvider: t,
                style_dataFetchStatus: Sn.Model.calculateDataFetchStatus(i.variables._orientationInDataFetchStatus, i.variables._scrollbarStyleInDataFetchStatus, i.variables._extendedClassInDataFetchStatus)
            }))
        }
    };
o(ve, "View");
var ft = ve,
    vt = ft;
var N = J(q());
var En = {
        "3RwpAE_deEmOXUgTVGD9TA#Value": "\u0644\u0627 \u062A\u0648\u062C\u062F \u0623\u062D\u062F\u0627\u062B \u0645\u062C\u062F\u0648\u0644\u0629 \u0641\u064A \u0627\u0644\u0648\u0642\u062A \u0627\u0644\u062D\u0627\u0644\u064A."
    },
    On = {
        "3RwpAE_deEmOXUgTVGD9TA#Value": "Derzeit sind keine Ereignisse geplant."
    },
    wn = {
        "3RwpAE_deEmOXUgTVGD9TA#Value": "No hay eventos programados en este momento."
    },
    Rn = {
        "3RwpAE_deEmOXUgTVGD9TA#Value": "Aucun \xE9v\xE9nement n'est pr\xE9vu pour le moment."
    },
    Hn = {
        "3RwpAE_deEmOXUgTVGD9TA#Value": "Al momento non ci sono eventi programmati."
    },
    Tn = {
        "3RwpAE_deEmOXUgTVGD9TA#Value": "Obecnie nie ma zaplanowanych wydarze\u0144."
    },
    kn = {
        "3RwpAE_deEmOXUgTVGD9TA#Value": "N\xE3o h\xE1 eventos agendados no momento."
    },
    Vn = {
        "3RwpAE_deEmOXUgTVGD9TA#Value": "\u0412 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0435 \u0432\u0440\u0435\u043C\u044F \u043D\u0435\u0442 \u0437\u0430\u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u0441\u043E\u0431\u044B\u0442\u0438\u0439."
    },
    wr = {
        "ar-001": {
            translations: En,
            isRTL: !0
        },
        "de-DE": {
            translations: On,
            isRTL: !1
        },
        "es-ES": {
            translations: wn,
            isRTL: !1
        },
        "fr-FR": {
            translations: Rn,
            isRTL: !1
        },
        "it-IT": {
            translations: Hn,
            isRTL: !1
        },
        "pl-PL": {
            translations: Tn,
            isRTL: !1
        },
        "pt-PT": {
            translations: kn,
            isRTL: !1
        },
        "ru-RU": {
            translations: Vn,
            isRTL: !1
        }
    };

function gt(u, i, d, e) {
    let r = JSON.parse(u.EventList),
        t = JSON.parse(u.Languages),
        s = u.EventType === 0 ? r : r.filter(a => a.Event.EventTypeId === u.EventType),
        n = t.length === 0 ? s : s.filter(a => a.Event && t.includes(a.Event.LanguageId));
    u.Events = JSON.stringify(n)
}
o(gt, "default");
var S = p; {
    let i = class i extends S.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, wr);
            var s = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {
                getEvents$AggrRefresh: 0
            }, this.dataFetchDependentsGraph = {
                getEvents$AggrRefresh: []
            }, this.shouldSendClientVarsToDataSources = !0
        }
        get getEvents$AggrRefresh() {
            return this.hasOwnProperty("_getEvents$AggrRefresh") || (this._getEvents$AggrRefresh = function() {
                var e = function(r, t, c) {
                    var n = this.model,
                        a = this.controller,
                        c = a.callContext(c);
                    return a.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetEvents", "screenservices/PartnersHub/Events/EventList/ScreenDataSetGetEvents", "c9hUUFkOi+A4wYy2C5XKTA", r, t, function(f) {
                        n.variables.getEventsAggr.dataFetchStatusAttr = f
                    }, function(f) {
                        n.variables.getEventsAggr.replaceWith(S.DataConversion.ServerDataConverter.from(f, n.variables.getEventsAggr.constructor))
                    }, void 0, void 0, void 0, c, _, !0).then(function() {
                        a._getEventsOnAfterFetch$Action(a.callContext(c))
                    })
                }.bind(this);
                return S.Logger.startActiveSpan("GetEvents", function(r) {
                    return r && (r.setAttribute("code.function", "GetEvents"), r.setAttribute("outsystems.function.key", "30a51a6b-7320-4f44-8e88-5270e578d5cb"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "SCREEN_SERVICE_AGGREGATE_CALL")), S.Flow.tryFinally(function() {
                        return e()
                    }, function() {
                        r && r.end()
                    })
                }, 0)
            }), this._getEvents$AggrRefresh
        }
        set getEvents$AggrRefresh(e) {
            this._getEvents$AggrRefresh = e
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = ["getEvents$AggrRefresh"]), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    s = this.idService;
                return S.Logger.startActiveSpan("OnParametersChanged", function(n) {
                    return n && (n.setAttribute("code.function", "OnParametersChanged"), n.setAttribute("outsystems.function.key", "0450cfb4-fd3d-48b1-8d3d-3eee243d9842"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), S.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("OnParametersChanged"), e = t.callContext(e), S.Flow.executeAsyncFlow(function() {
                            var a = t.getEvents$AggrRefresh(r.variables.maxEventsIn, 0, e);
                            return r.flush(), a
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(e) {
            this.__onParametersChanged$Action = e
        }
        get _getEventsOnAfterFetch$Action() {
            return this.hasOwnProperty("__getEventsOnAfterFetch$Action") || (this.__getEventsOnAfterFetch$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    s = this.idService;
                return S.Logger.startActiveSpan("GetEventsOnAfterFetch", function(n) {
                    n && (n.setAttribute("code.function", "GetEventsOnAfterFetch"), n.setAttribute("outsystems.function.key", "93025021-0e45-46a7-82f9-5c679672e504"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("GetEventsOnAfterFetch"), e = t.callContext(e);
                        var a = new S.DataTypes.VariableHolder,
                            c = new S.DataTypes.VariableHolder(new S.DataTypes.JSONSerializeOutputType),
                            f = new S.DataTypes.VariableHolder(new S.DataTypes.JSONSerializeOutputType),
                            m = new S.DataTypes.VariableHolder(new(S.Controller.BaseController.getJSONDeserializeOutputType(Be)));
                        f.value.jSONOut = S.JSONUtils.serializeToJSON(r.variables.getEventsAggr.listOut, !1, !1), c.value.jSONOut = S.JSONUtils.serializeToJSON(r.variables.languagesIn, !1, !1, S.DataTypes.DataTypes.LanguagesIdentifier), a.value = S.Logger.startActiveSpan("JavaScript1", function(l) {
                            l && (l.setAttribute("code.function", "JavaScript1"), l.setAttribute("outsystems.function.key", "ac6d1f70-1f0e-4cf7-a39c-55d41413e29f"), l.setAttribute("outsystems.function.owner.name", "PartnersHub"), l.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), l.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(gt, "JavaScript1", "GetEventsOnAfterFetch", {
                                    Languages: S.DataConversion.JSNodeParamConverter.to(c.value.jSONOut, S.DataTypes.DataTypes.Text),
                                    EventList: S.DataConversion.JSNodeParamConverter.to(f.value.jSONOut, S.DataTypes.DataTypes.Text),
                                    EventType: S.DataConversion.JSNodeParamConverter.to(r.variables.eventTypeIn, S.DataTypes.DataTypes.LongInteger),
                                    Events: S.DataConversion.JSNodeParamConverter.to("", S.DataTypes.DataTypes.Text)
                                }, function(g) {
                                    var k = new(t.constructor.getVariableGroupType("PartnersHub.Events.EventList.GetEventsOnAfterFetch$javaScript1JSResult"));
                                    return k.eventsOut = S.DataConversion.JSNodeParamConverter.from(g.Events, S.DataTypes.DataTypes.Text), k
                                }, {}, {})
                            } finally {
                                l && l.end()
                            }
                        }, 1), m.value.dataOut = S.JSONUtils.deserializeFromJSON(a.value.eventsOut, Be, !1), r.variables.getEventsAggr.listOut = S.DataConversion.JSConversions.typeConvertRecordList(m.value.dataOut, new Mt, function(l, g) {
                            return g.countryAttr = l.countryAttr, g.eventAttr = l.eventAttr, g
                        }), r.variables.isLoadingVar = !1
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__getEventsOnAfterFetch$Action
        }
        set _getEventsOnAfterFetch$Action(e) {
            this.__getEventsOnAfterFetch$Action = e
        }
        get _onClickEvent$Action() {
            return this.hasOwnProperty("__onClickEvent$Action") || (this.__onClickEvent$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    s = this.idService;
                return S.Logger.startActiveSpan("OnClickEvent", function(n) {
                    n && (n.setAttribute("code.function", "OnClickEvent"), n.setAttribute("outsystems.function.key", "f94b253d-c72c-466c-94bd-7269718689ee"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("OnClickEvent"), e = t.callContext(e), H.rudderstackTrackEvent$Action(function() {
                            var a = new z;
                            return a.actionAttr = "click_cta", a.cta_nameAttr = r.variables.getEventsAggr.listOut.getCurrent(e.iterationContext).eventAttr.titleAttr + " event", a.cta_placementAttr = "event card in event section", a
                        }(), "ce_partnershub_form", e), S.Navigation.navigateTo(S.Navigation.generateScreenURL("PartnersHub", "EventDetails", {
                            EventId: S.DataConversion.ServerDataConverter.to(r.variables.getEventsAggr.listOut.getCurrent(e.iterationContext).eventAttr.idAttr, S.DataTypes.DataTypes.LongInteger)
                        }), S.Transitions.createTransition(S.Transitions.TransitionAnimation.None), e, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onClickEvent$Action
        }
        set _onClickEvent$Action(e) {
            this.__onClickEvent$Action = e
        }
        onParametersChanged$Action(e) {
            var r = this.controller;
            return S.Logger.startActiveSpan("OnParametersChanged__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnParametersChanged"), t.setAttribute("outsystems.function.key", "0450cfb4-fd3d-48b1-8d3d-3eee243d9842"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), S.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onParametersChanged$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        getEventsOnAfterFetch$Action(e) {
            var r = this.controller;
            return S.Logger.startActiveSpan("GetEventsOnAfterFetch__proxy", function(t) {
                t && (t.setAttribute("code.function", "GetEventsOnAfterFetch"), t.setAttribute("outsystems.function.key", "93025021-0e45-46a7-82f9-5c679672e504"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._getEventsOnAfterFetch$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onClickEvent$Action(e) {
            var r = this.controller;
            return S.Logger.startActiveSpan("OnClickEvent__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnClickEvent"), t.setAttribute("outsystems.function.key", "f94b253d-c72c-466c-94bd-7269718689ee"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onClickEvent$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
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
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    s = this.idService;
                return r.onParametersChanged$Action(e)
            }), this._onParametersChangedEventHandler
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
            return H.defaultTimeout
        }
    };
    o(i, "ControllerInner");
    let u = i;
    ht = u, ht.registerVariableGroupType("PartnersHub.Events.EventList.GetEventsOnAfterFetch$javaScript1JSResult", [{
        name: "Events",
        attrName: "eventsOut",
        mandatory: !0,
        dataType: S.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }])
}
var ht, Rr = new S.Controller.ControllerFactory(ht, F);
var M = p,
    In = E.PlaceholderContent,
    xn = E.IteratorPlaceholderContent,
    ge = class ge extends V.BaseWebBlock {
        static get displayName() {
            return "Events.EventList"
        }
        static getAttributes() {
            return {
                codeFunction: "EventList",
                functionKey: "6e033614-d09f-4d02-bd9b-6a0d49e4cb7f",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Events.EventList.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [Ge, Fe, I]
        }
        get modelFactory() {
            return Xt
        }
        get controllerFactory() {
            return Rr
        }
        get title() {
            return ""
        }
        internalRender() {
            let i = this.model,
                d = this.controller,
                e = this.idService,
                r = d.validationService,
                t = this.widgetsRecordProvider,
                s = d.callContext(),
                n = ge.ifWidget,
                a = ge.textWidget,
                c = ge.asPrimitiveValue,
                f = ge.getTranslation,
                m = this;
            return N.createElement("div", this.getRootNodeProperties(), N.createElement(Ge, {
                getOwnerSpan: o(function() {
                    return m.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return m.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    IsLoading: i.variables.isLoadingVar
                },
                events: {
                    _handleError: o(function(l) {
                        d.handleError(l)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: r
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    content: new In(function() {
                        return [n(i.variables.getEventsAggr.listOut.isEmpty, !1, this, function() {
                            return [N.createElement(C, {
                                style: "ph-text",
                                text: [a(f("3RwpAE_deEmOXUgTVGD9TA#Value", "There are no events scheduled at the moment."))],
                                _idProps: {
                                    service: e,
                                    uuid: "1"
                                },
                                _widgetRecordProvider: t
                            })]
                        }, function() {
                            return [n(i.variables.getEventsAggr.listOut.length > 1, !1, this, function() {
                                return [N.createElement(Ne, {
                                    animateItems: !0,
                                    extendedProperties: {
                                        "disable-virtualization": "True"
                                    },
                                    gridProperties: {
                                        classes: "OSFillParent"
                                    },
                                    mode: 0,
                                    source: i.variables.getEventsAggr.listOut,
                                    style: i.getCachedValue(e.getId("EventList.Style"), function() {
                                        return "ph-event-list " + (i.variables.getEventsAggr.listOut.length > 2 ? "ph-event-grid-three" : "ph-event-grid-two")
                                    }, function() {
                                        return i.variables.getEventsAggr.listOut.length
                                    }),
                                    tag: "div",
                                    _idProps: {
                                        service: e,
                                        name: "EventList"
                                    },
                                    _widgetRecordProvider: t,
                                    source_dataFetchStatus: M.Model.calculateDataFetchStatus(i.variables.getEventsAggr.dataFetchStatusAttr),
                                    style_dataFetchStatus: M.Model.calculateDataFetchStatus(i.variables.getEventsAggr.dataFetchStatusAttr),
                                    placeholders: {
                                        content: new xn(function(l, g) {
                                            return [N.createElement(h, {
                                                align: 0,
                                                animate: !1,
                                                extendedEvents: {
                                                    onClick: o(function() {
                                                        var k = g.clone();
                                                        d.onClickEvent$Action(d.callContext(k))
                                                    }, "onClick")
                                                },
                                                style: "ph-event-card-container",
                                                visible: !0,
                                                _idProps: {
                                                    service: l,
                                                    uuid: "3"
                                                },
                                                _widgetRecordProvider: t,
                                                _dependencies: [c(i.variables.getEventsAggr.dataFetchStatusAttr), c(i.variables.getEventsAggr.listOut.getCurrent(g.iterationContext).countryAttr.nameAttr), c(i.variables.getEventsAggr.listOut.getCurrent(g.iterationContext).countryAttr.timeZoneAttr), c(i.variables.getEventsAggr.listOut.getCurrent(g.iterationContext).eventAttr.startDateTimeAttr), c(i.variables.getEventsAggr.listOut.getCurrent(g.iterationContext).eventAttr.titleAttr), c(i.variables.getEventsAggr.listOut.getCurrent(g.iterationContext).eventAttr.mobileImageAttr), c(i.variables.getEventsAggr.listOut.getCurrent(g.iterationContext).eventAttr.idAttr)]
                                            }, N.createElement(Fe, {
                                                getOwnerSpan: o(function() {
                                                    return m.getChildSpan("render")
                                                }, "getOwnerSpan"),
                                                getOwnerDisposeSpan: o(function() {
                                                    return m.getChildSpan("destroy")
                                                }, "getOwnerDisposeSpan"),
                                                inputs: {
                                                    EventDetails: i.getCachedValue(l.getId("A8vN53M6KEWkcvMmKCq45Q.EventDetails"), function() {
                                                        return function() {
                                                            var k = new Je;
                                                            return k.idAttr = i.variables.getEventsAggr.listOut.getCurrent(g.iterationContext).eventAttr.idAttr, k.fileNamesAttr = function() {
                                                                var B = new Ue;
                                                                return B.desktopImageNameAttr = "", B.mobileImageNameAttr = i.variables.getEventsAggr.listOut.getCurrent(g.iterationContext).eventAttr.mobileImageAttr, B
                                                            }(), k
                                                        }()
                                                    }, function() {
                                                        return i.variables.getEventsAggr.listOut.getCurrent(g.iterationContext).eventAttr.idAttr
                                                    }, function() {
                                                        return i.variables.getEventsAggr.listOut.getCurrent(g.iterationContext).eventAttr.mobileImageAttr
                                                    }),
                                                    _eventDetailsInDataFetchStatus: M.Model.calculateDataFetchStatus(i.variables.getEventsAggr.dataFetchStatusAttr)
                                                },
                                                events: {
                                                    _handleError: o(function(k) {
                                                        d.handleError(k)
                                                    }, "_handleError")
                                                },
                                                _validationProps: {
                                                    validationService: r
                                                },
                                                _idProps: {
                                                    service: l,
                                                    uuid: "4",
                                                    alias: "2"
                                                },
                                                _widgetRecordProvider: t,
                                                _dependencies: []
                                            }), N.createElement(h, {
                                                align: 0,
                                                animate: !1,
                                                style: "ph-event-card-info padding-base",
                                                visible: !0,
                                                _idProps: {
                                                    service: l,
                                                    uuid: "5"
                                                },
                                                _widgetRecordProvider: t
                                            }, N.createElement(h, {
                                                align: 0,
                                                animate: !1,
                                                style: "display-flex flex-direction-column  ph-event-card-details-container",
                                                visible: !0,
                                                _idProps: {
                                                    service: l,
                                                    uuid: "6"
                                                },
                                                _widgetRecordProvider: t
                                            }, N.createElement(j, {
                                                extendedProperties: {
                                                    style: "color: var(--Neutral-Neutral-10, #101213); font-size: 14px; font-weight: 700; line-height: 22px; margin-bottom: 4px;"
                                                },
                                                value: i.getCachedValue(l.getId("_C9emkrC2km3ZNgWMI6Uuw.Value"), function() {
                                                    return i.variables.getEventsAggr.listOut.getCurrent(g.iterationContext).eventAttr.titleAttr + ", " + M.BuiltinFunctions.year(M.BuiltinFunctions.textToDateTime(i.variables.getEventsAggr.listOut.getCurrent(g.iterationContext).eventAttr.startDateTimeAttr)).toString()
                                                }, function() {
                                                    return i.variables.getEventsAggr.listOut.getCurrent(g.iterationContext).eventAttr.titleAttr
                                                }, function() {
                                                    return i.variables.getEventsAggr.listOut.getCurrent(g.iterationContext).eventAttr.startDateTimeAttr
                                                }),
                                                _idProps: {
                                                    service: l,
                                                    uuid: "7"
                                                },
                                                _widgetRecordProvider: t,
                                                value_dataFetchStatus: M.Model.calculateDataFetchStatus(i.variables.getEventsAggr.dataFetchStatusAttr)
                                            }), N.createElement(j, {
                                                extendedProperties: {
                                                    style: "color: var(--Neutral-Neutral-10, #101213); font-size: 12px; font-weight: 400; line-height: 18px;"
                                                },
                                                gridProperties: {
                                                    marginLeft: "0"
                                                },
                                                value: i.getCachedValue(l.getId("HwkZm2eup0q6igsG0Lv8xQ.Value"), function() {
                                                    return M.BuiltinFunctions.formatDateTime(M.BuiltinFunctions.textToDateTime(i.variables.getEventsAggr.listOut.getCurrent(g.iterationContext).eventAttr.startDateTimeAttr), "d MMM, HH:mm") + " " + i.variables.getEventsAggr.listOut.getCurrent(g.iterationContext).countryAttr.timeZoneAttr
                                                }, function() {
                                                    return i.variables.getEventsAggr.listOut.getCurrent(g.iterationContext).eventAttr.startDateTimeAttr
                                                }, function() {
                                                    return i.variables.getEventsAggr.listOut.getCurrent(g.iterationContext).countryAttr.timeZoneAttr
                                                }),
                                                _idProps: {
                                                    service: l,
                                                    uuid: "8"
                                                },
                                                _widgetRecordProvider: t,
                                                value_dataFetchStatus: M.Model.calculateDataFetchStatus(i.variables.getEventsAggr.dataFetchStatusAttr)
                                            }), N.createElement(j, {
                                                extendedProperties: {
                                                    style: "color: var(--Neutral-Neutral-10, #101213); font-size: 12px; font-weight: 400; line-height: 18px;"
                                                },
                                                gridProperties: {
                                                    marginLeft: "0"
                                                },
                                                value: i.variables.getEventsAggr.listOut.getCurrent(g.iterationContext).countryAttr.nameAttr,
                                                _idProps: {
                                                    service: l,
                                                    uuid: "9"
                                                },
                                                _widgetRecordProvider: t,
                                                value_dataFetchStatus: M.Model.calculateDataFetchStatus(i.variables.getEventsAggr.dataFetchStatusAttr)
                                            })), N.createElement(I, {
                                                getOwnerSpan: o(function() {
                                                    return m.getChildSpan("render")
                                                }, "getOwnerSpan"),
                                                getOwnerDisposeSpan: o(function() {
                                                    return m.getChildSpan("destroy")
                                                }, "getOwnerDisposeSpan"),
                                                inputs: {
                                                    SVGCode: `<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M7.34375 6.65625C7.53125 6.84375 7.53125 7.1875 7.34375 7.375L1.34375 13.375C1.15625 13.5625 0.8125 13.5625 0.625 13.375C0.4375 13.1875 0.4375 12.8438 0.625 12.6562L6.28125 7L0.625 1.375C0.4375 1.1875 0.4375 0.84375 0.625 0.65625C0.8125 0.46875 1.15625 0.46875 1.34375 0.65625L7.34375 6.65625Z" fill="#101213"/>\r
</svg>`
                                                },
                                                events: {
                                                    _handleError: o(function(k) {
                                                        d.handleError(k)
                                                    }, "_handleError")
                                                },
                                                _validationProps: {
                                                    validationService: r
                                                },
                                                _idProps: {
                                                    service: l,
                                                    uuid: "10",
                                                    alias: "3"
                                                },
                                                _widgetRecordProvider: t,
                                                _dependencies: []
                                            })))]
                                        }, s, e, "1")
                                    },
                                    _dependencies: [c(i.variables.getEventsAggr.dataFetchStatusAttr)]
                                })]
                            }, function() {
                                return [N.createElement(h, {
                                    align: 0,
                                    animate: !1,
                                    extendedEvents: {
                                        onClick: o(function() {
                                            var l = s.clone();
                                            d.onClickEvent$Action(d.callContext(l))
                                        }, "onClick")
                                    },
                                    style: "ph-event-card-container ph-one-event-card-container",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "11"
                                    },
                                    _widgetRecordProvider: t
                                }, N.createElement(Fe, {
                                    getOwnerSpan: o(function() {
                                        return m.getChildSpan("render")
                                    }, "getOwnerSpan"),
                                    getOwnerDisposeSpan: o(function() {
                                        return m.getChildSpan("destroy")
                                    }, "getOwnerDisposeSpan"),
                                    inputs: {
                                        EventDetails: i.getCachedValue(e.getId("lc66TWA3tEeXkblM7AV6UQ.EventDetails"), function() {
                                            return function() {
                                                var l = new Je;
                                                return l.idAttr = i.variables.getEventsAggr.listOut.getCurrent(s.iterationContext).eventAttr.idAttr, l.fileNamesAttr = function() {
                                                    var g = new Ue;
                                                    return g.desktopImageNameAttr = "", g.mobileImageNameAttr = i.variables.getEventsAggr.listOut.getCurrent(s.iterationContext).eventAttr.mobileImageAttr, g
                                                }(), l
                                            }()
                                        }, function() {
                                            return i.variables.getEventsAggr.listOut.getCurrent(s.iterationContext).eventAttr.idAttr
                                        }, function() {
                                            return i.variables.getEventsAggr.listOut.getCurrent(s.iterationContext).eventAttr.mobileImageAttr
                                        }),
                                        _eventDetailsInDataFetchStatus: M.Model.calculateDataFetchStatus(i.variables.getEventsAggr.dataFetchStatusAttr)
                                    },
                                    events: {
                                        _handleError: o(function(l) {
                                            d.handleError(l)
                                        }, "_handleError")
                                    },
                                    _validationProps: {
                                        validationService: r
                                    },
                                    _idProps: {
                                        service: e,
                                        uuid: "12",
                                        alias: "4"
                                    },
                                    _widgetRecordProvider: t,
                                    _dependencies: []
                                }), N.createElement(h, {
                                    align: 0,
                                    animate: !1,
                                    style: "ph-event-card-info ph-one-event-card-info",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "13"
                                    },
                                    _widgetRecordProvider: t
                                }, N.createElement(h, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "flex-grow: 1;"
                                    },
                                    style: "display-flex flex-direction-column ph-event-card-details-container",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "14"
                                    },
                                    _widgetRecordProvider: t
                                }, N.createElement(j, {
                                    extendedProperties: {
                                        style: "color: var(--Neutral-Neutral-10, #101213); font-size: 14px; font-weight: 700; line-height: 22px; margin-bottom: 4px;"
                                    },
                                    value: i.getCachedValue(e.getId("Bj40UThxkUeS9BGg1QFjyQ.Value"), function() {
                                        return i.variables.getEventsAggr.listOut.getCurrent(s.iterationContext).eventAttr.titleAttr + ", " + M.BuiltinFunctions.year(M.BuiltinFunctions.textToDateTime(i.variables.getEventsAggr.listOut.getCurrent(s.iterationContext).eventAttr.startDateTimeAttr)).toString()
                                    }, function() {
                                        return i.variables.getEventsAggr.listOut.getCurrent(s.iterationContext).eventAttr.titleAttr
                                    }, function() {
                                        return i.variables.getEventsAggr.listOut.getCurrent(s.iterationContext).eventAttr.startDateTimeAttr
                                    }),
                                    _idProps: {
                                        service: e,
                                        uuid: "15"
                                    },
                                    _widgetRecordProvider: t,
                                    value_dataFetchStatus: M.Model.calculateDataFetchStatus(i.variables.getEventsAggr.dataFetchStatusAttr)
                                }), N.createElement(j, {
                                    extendedProperties: {
                                        style: "color: var(--Neutral-Neutral-10, #101213); font-size: 12px; font-weight: 400; line-height: 18px;"
                                    },
                                    gridProperties: {
                                        marginLeft: "0"
                                    },
                                    value: i.getCachedValue(e.getId("WsUiitjqnEO1_AGgEtXukw.Value"), function() {
                                        return M.BuiltinFunctions.formatDateTime(M.BuiltinFunctions.textToDateTime(i.variables.getEventsAggr.listOut.getCurrent(s.iterationContext).eventAttr.startDateTimeAttr), "d MMM, HH:mm") + " " + i.variables.getEventsAggr.listOut.getCurrent(s.iterationContext).countryAttr.timeZoneAttr
                                    }, function() {
                                        return i.variables.getEventsAggr.listOut.getCurrent(s.iterationContext).eventAttr.startDateTimeAttr
                                    }, function() {
                                        return i.variables.getEventsAggr.listOut.getCurrent(s.iterationContext).countryAttr.timeZoneAttr
                                    }),
                                    _idProps: {
                                        service: e,
                                        uuid: "16"
                                    },
                                    _widgetRecordProvider: t,
                                    value_dataFetchStatus: M.Model.calculateDataFetchStatus(i.variables.getEventsAggr.dataFetchStatusAttr)
                                }), N.createElement(j, {
                                    extendedProperties: {
                                        style: "color: var(--Neutral-Neutral-10, #101213); font-size: 12px; font-weight: 400; line-height: 18px;"
                                    },
                                    gridProperties: {
                                        marginLeft: "0"
                                    },
                                    value: i.variables.getEventsAggr.listOut.getCurrent(s.iterationContext).countryAttr.nameAttr,
                                    _idProps: {
                                        service: e,
                                        uuid: "17"
                                    },
                                    _widgetRecordProvider: t,
                                    value_dataFetchStatus: M.Model.calculateDataFetchStatus(i.variables.getEventsAggr.dataFetchStatusAttr)
                                })), N.createElement(I, {
                                    getOwnerSpan: o(function() {
                                        return m.getChildSpan("render")
                                    }, "getOwnerSpan"),
                                    getOwnerDisposeSpan: o(function() {
                                        return m.getChildSpan("destroy")
                                    }, "getOwnerDisposeSpan"),
                                    inputs: {
                                        SVGCode: `<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M7.34375 6.65625C7.53125 6.84375 7.53125 7.1875 7.34375 7.375L1.34375 13.375C1.15625 13.5625 0.8125 13.5625 0.625 13.375C0.4375 13.1875 0.4375 12.8438 0.625 12.6562L6.28125 7L0.625 1.375C0.4375 1.1875 0.4375 0.84375 0.625 0.65625C0.8125 0.46875 1.15625 0.46875 1.34375 0.65625L7.34375 6.65625Z" fill="#101213"/>\r
</svg>`
                                    },
                                    events: {
                                        _handleError: o(function(l) {
                                            d.handleError(l)
                                        }, "_handleError")
                                    },
                                    _validationProps: {
                                        validationService: r
                                    },
                                    _idProps: {
                                        service: e,
                                        uuid: "18",
                                        alias: "5"
                                    },
                                    _widgetRecordProvider: t,
                                    _dependencies: []
                                })))]
                            })]
                        })]
                    })
                },
                _dependencies: [c(i.variables.getEventsAggr.dataFetchStatusAttr), c(i.variables.getEventsAggr.listOut)]
            }))
        }
    };
o(ge, "View");
var _t = ge,
    bt = _t;
var Hr = p,
    Dn = E.PlaceholderContent,
    Cs = E.IteratorPlaceholderContent,
    he = class he extends V.BaseWebBlock {
        static get displayName() {
            return "Events.EventListSection"
        }
        static getAttributes() {
            return {
                codeFunction: "EventListSection",
                functionKey: "da2835a1-a2e9-4364-917e-3fb7ac76ea3d",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Events.EventListSection.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [I, vt, bt]
        }
        get modelFactory() {
            return Yt
        }
        get controllerFactory() {
            return Pr
        }
        get title() {
            return ""
        }
        internalRender() {
            let i = this.model,
                d = this.controller,
                e = this.idService,
                r = d.validationService,
                t = this.widgetsRecordProvider,
                s = d.callContext(),
                n = he.ifWidget,
                a = he.textWidget,
                c = he.asPrimitiveValue,
                f = he.getTranslation,
                m = this;
            return te.createElement("div", this.getRootNodeProperties(), te.createElement(h, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "display: flex; flex-direction: column; gap: 16px;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, te.createElement(h, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: center; display: flex; gap: 8px;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }, te.createElement(I, {
                getOwnerSpan: o(function() {
                    return m.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return m.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    SVGCode: `<svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<g clip-path="url(#clip0_18405_12110)">\r
<path d="M6.625 2.5C6.9375 2.5 7.25 2.8125 7.25 3.125V5H14.75V3.125C14.75 2.8125 15.0234 2.5 15.375 2.5C15.6875 2.5 16 2.8125 16 3.125V5H17.25C18.6172 5 19.75 6.13281 19.75 7.5V8.75V10V20C19.75 21.4062 18.6172 22.5 17.25 22.5H4.75C3.34375 22.5 2.25 21.4062 2.25 20V10V8.75V7.5C2.25 6.13281 3.34375 5 4.75 5H6V3.125C6 2.8125 6.27344 2.5 6.625 2.5ZM18.5 10H3.5V20C3.5 20.7031 4.04688 21.25 4.75 21.25H17.25C17.9141 21.25 18.5 20.7031 18.5 20V10ZM17.25 6.25H4.75C4.04688 6.25 3.5 6.83594 3.5 7.5V8.75H18.5V7.5C18.5 6.83594 17.9141 6.25 17.25 6.25Z" fill="#101213"/>\r
</g>\r
<defs>\r
<clipPath id="clip0_18405_12110">\r
<rect width="22.3448" height="24" fill="white"/>\r
</clipPath>\r
</defs>\r
</svg>`
                },
                events: {
                    _handleError: o(function(l) {
                        d.handleError(l)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: r
                },
                _idProps: {
                    service: e,
                    uuid: "2",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                _dependencies: []
            }), te.createElement(C, {
                extendedProperties: {
                    OSTagName: "h5",
                    style: "flex-grow: 1; font-size: 20px; font-style: normal; font-weight: 700; line-height: 30px;"
                },
                style: "container-title",
                text: [a(f("JTUTHDwmmke37+oqdpbEoQ#Value", "Upcoming events"))],
                _idProps: {
                    service: e,
                    name: "Upcomingevents"
                },
                _widgetRecordProvider: t
            }), te.createElement(Ut, {
                enabled: !0,
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                onClick: o(function() {
                    var l = s.clone();
                    d.seeAllOnClick$Action(d.callContext(l))
                }, "onClick"),
                visible: i.variables.numberOfEventsVar.countNumberAttr > 3,
                _idProps: {
                    service: e,
                    name: "SeeAll"
                },
                _widgetRecordProvider: t
            }, te.createElement(j, {
                extendedProperties: {
                    style: "color: var(--Neutral-Neutral-10, #101213); font-size: 14px; font-weight: 400; line-height: 22px; text-decoration-line: underline;"
                },
                value: Hr.Injector.resolve(Hr.ServiceNames.TranslationsService).getMessage("tN_UWmOs0kGS2m27_Rkz9Q#ValueExpression.-660735948.1", "See all") + "(" + i.variables.numberOfEventsVar.countNumberAttr.toString() + ")",
                _idProps: {
                    service: e,
                    uuid: "5"
                },
                _widgetRecordProvider: t
            }))), te.createElement(h, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "6"
                },
                _widgetRecordProvider: t
            }, te.createElement(vt, {
                getOwnerSpan: o(function() {
                    return m.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return m.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ExtendedClass: "ph-scrollable-events",
                    Orientation: re.orientation.horizontal
                },
                events: {
                    _handleError: o(function(l) {
                        d.handleError(l)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: r
                },
                _idProps: {
                    service: e,
                    uuid: "7",
                    alias: "2"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    content: new Dn(function() {
                        return [te.createElement(bt, {
                            getOwnerSpan: o(function() {
                                return m.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return m.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: o(function(l) {
                                    d.handleError(l)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "8",
                                alias: "3"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })]
                    })
                },
                _dependencies: []
            }))))
        }
    };
o(he, "View");
var yt = he,
    Ps = yt;
var y = J(q());
var Nn = {
        "zkMPCyO8E0aYnIYzzJSMng#Value": "\u0627\u0641\u062A\u062D \u062A\u0637\u0628\u064A\u0642 \u0623\u0643\u0627\u062F\u064A\u0645\u064A\u0629",
        "mxqBfVnviEmFswLgQBO7ug#Value": "\u0643\u0644 \u0645\u0627 \u062A\u062D\u062A\u0627\u062C\u0647 \u0644\u062A\u0633\u0648\u064A\u0642 \u0627\u0644\u0634\u0631\u0643\u0627\u0621 \u0628\u0646\u062C\u0627\u062D.",
        "bDqMK2mJ7kacvPDTaOF8rg#Value": "\u0627\u0644\u0631\u0633\u0648\u0645 \u0627\u0644\u0628\u064A\u0627\u0646\u064A\u0629",
        "uS0lZPuU6kOmtCwieNWUtg#Value": "\u0643\u062A\u064A\u0628\u0627\u062A \u0627\u0644\u062A\u0633\u0648\u064A\u0642",
        "C987V+27QE+VKjDqaJ0p2w#Value": "\u0627\u0644\u0643\u062A\u0628 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u0629",
        "FweTDdT9dkSF1or4BJf5JA#Value": "\u0643\u062A\u064A\u0628\u0627\u062A \u0627\u0644\u062A\u0633\u0648\u064A\u0642",
        "83dGwifhKk+YOiXkvULi4A#Value": "\u062F\u0648\u0631\u0627\u062A",
        "kwwc0W9pKE64IAQBhqqlsg#Value": "\u0627\u0633\u062A\u0645\u0639\u060C \u062A\u0639\u0644\u0645\u060C \u0627\u0642\u0631\u0623.",
        "Neo6uN8N9UasJcJdTgmUJg#Value": "\u0627\u0645\u0633\u062D \u0644\u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u062A\u0637\u0628\u064A\u0642 \u0627\u0644\u0645\u062D\u0645\u0648\u0644",
        "1adaFkSs6Eu8LQA1B4Z56w#Value": "\u0643\u0644 \u0645\u0627 \u062A\u062D\u062A\u0627\u062C\u0647 \u0644\u062A\u0633\u0648\u064A\u0642 \u0627\u0644\u0634\u0631\u0643\u0627\u0621 \u0628\u0646\u062C\u0627\u062D.",
        "DZSAqbT4jkWfN4OqxOKCFA#Value": "\u0627\u0644\u0631\u0633\u0648\u0645\u0627\u062A \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A\u064A\u0629",
        "QNt3K4z9s0mjesfDRLpl7A#Value": "\u0627\u0644\u0643\u062A\u0628 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u0629",
        "FLk8QSyiOkuIqtmBfVo4Yw#Value": "\u0643\u062A\u064A\u0628\u0627\u062A \u0627\u0644\u062A\u0633\u0648\u064A\u0642",
        "bM7PjZ4q_EuS25rccTySQg#Value": "\u0643\u062A\u064A\u0628\u0627\u062A \u0627\u0644\u062A\u0633\u0648\u064A\u0642",
        "uHFImDRVWE2MA_64Li66Ww#Value": "\u0627\u0644\u062F\u0648\u0631\u0627\u062A",
        "sse4z6h_sU6gso1w6w59LA#Value": "\u0627\u0633\u062A\u0645\u0639\u060C \u062A\u0639\u0644\u0645\u060C \u0627\u0642\u0631\u0623."
    },
    Ln = {
        "zkMPCyO8E0aYnIYzzJSMng#Value": "Open Academy App",
        "mxqBfVnviEmFswLgQBO7ug#Value": "Alles, was Sie f\xFCr erfolgreiches Partner-Marketing ben\xF6tigen.",
        "bDqMK2mJ7kacvPDTaOF8rg#Value": "Infografiken",
        "uS0lZPuU6kOmtCwieNWUtg#Value": "Marketingbrosch\xFCren",
        "C987V+27QE+VKjDqaJ0p2w#Value": "E-Books",
        "FweTDdT9dkSF1or4BJf5JA#Value": "Marketinghandb\xFCcher",
        "83dGwifhKk+YOiXkvULi4A#Value": "Kurse",
        "kwwc0W9pKE64IAQBhqqlsg#Value": "H\xF6ren, Lernen, Lesen.",
        "Neo6uN8N9UasJcJdTgmUJg#Value": "Scannen, um die mobile App herunterzuladen",
        "1adaFkSs6Eu8LQA1B4Z56w#Value": "Alles, was Sie f\xFCr erfolgreiches Partner-Marketing ben\xF6tigen.",
        "DZSAqbT4jkWfN4OqxOKCFA#Value": "Infografiken",
        "QNt3K4z9s0mjesfDRLpl7A#Value": "E-Books",
        "FLk8QSyiOkuIqtmBfVo4Yw#Value": "Marketingbrosch\xFCren",
        "bM7PjZ4q_EuS25rccTySQg#Value": "Marketinghandb\xFCcher",
        "uHFImDRVWE2MA_64Li66Ww#Value": "Kurse",
        "sse4z6h_sU6gso1w6w59LA#Value": "H\xF6ren, Lernen, Lesen."
    },
    Fn = {
        "zkMPCyO8E0aYnIYzzJSMng#Value": "Open Academy App",
        "mxqBfVnviEmFswLgQBO7ug#Value": "Todo lo que necesitas para un marketing de socios exitoso.",
        "bDqMK2mJ7kacvPDTaOF8rg#Value": "Infograf\xEDas",
        "uS0lZPuU6kOmtCwieNWUtg#Value": "Folletos de marketing",
        "C987V+27QE+VKjDqaJ0p2w#Value": "E-books",
        "FweTDdT9dkSF1or4BJf5JA#Value": "Manuales de marketing",
        "83dGwifhKk+YOiXkvULi4A#Value": "Cursos",
        "kwwc0W9pKE64IAQBhqqlsg#Value": "Escuchar, Aprender, Leer.",
        "Neo6uN8N9UasJcJdTgmUJg#Value": "Escanea para descargar la aplicaci\xF3n m\xF3vil",
        "1adaFkSs6Eu8LQA1B4Z56w#Value": "Todo lo que necesitas para un marketing de socios exitoso.",
        "DZSAqbT4jkWfN4OqxOKCFA#Value": "Infograf\xEDas",
        "QNt3K4z9s0mjesfDRLpl7A#Value": "Libros electr\xF3nicos",
        "FLk8QSyiOkuIqtmBfVo4Yw#Value": "Folletos de marketing",
        "bM7PjZ4q_EuS25rccTySQg#Value": "Manuales de marketing",
        "uHFImDRVWE2MA_64Li66Ww#Value": "Cursos",
        "sse4z6h_sU6gso1w6w59LA#Value": "Escuchar, Aprender, Leer."
    },
    $n = {
        "zkMPCyO8E0aYnIYzzJSMng#Value": "Ouvrir l'application Academy ",
        "mxqBfVnviEmFswLgQBO7ug#Value": "Tout ce dont vous avez besoin pour r\xE9ussir un marketing aux partenaires.",
        "bDqMK2mJ7kacvPDTaOF8rg#Value": "Infographies",
        "uS0lZPuU6kOmtCwieNWUtg#Value": "Brochures marketing",
        "C987V+27QE+VKjDqaJ0p2w#Value": "E-books",
        "FweTDdT9dkSF1or4BJf5JA#Value": "Manuels de marketing",
        "83dGwifhKk+YOiXkvULi4A#Value": "Cours",
        "kwwc0W9pKE64IAQBhqqlsg#Value": "\xC9couter, apprendre, lire.",
        "Neo6uN8N9UasJcJdTgmUJg#Value": "Scannez pour t\xE9l\xE9charger l'application mobile",
        "1adaFkSs6Eu8LQA1B4Z56w#Value": "Tout ce dont vous avez besoin pour r\xE9ussir un marketing aux partenaires.",
        "DZSAqbT4jkWfN4OqxOKCFA#Value": "Infographies",
        "QNt3K4z9s0mjesfDRLpl7A#Value": "E-books",
        "FLk8QSyiOkuIqtmBfVo4Yw#Value": "Brochures marketing",
        "bM7PjZ4q_EuS25rccTySQg#Value": "Manuels de marketing",
        "uHFImDRVWE2MA_64Li66Ww#Value": "Cours",
        "sse4z6h_sU6gso1w6w59LA#Value": "\xC9couter, apprendre, lire."
    },
    Wn = {
        "zkMPCyO8E0aYnIYzzJSMng#Value": "Open Academy App",
        "mxqBfVnviEmFswLgQBO7ug#Value": "Tutto ci\xF2 di cui hai bisogno per un partner marketing di successo.",
        "bDqMK2mJ7kacvPDTaOF8rg#Value": "Infografiche",
        "uS0lZPuU6kOmtCwieNWUtg#Value": "Brochure di marketing",
        "C987V+27QE+VKjDqaJ0p2w#Value": "E-book",
        "FweTDdT9dkSF1or4BJf5JA#Value": "Manuali di marketing",
        "83dGwifhKk+YOiXkvULi4A#Value": "Corsi",
        "kwwc0W9pKE64IAQBhqqlsg#Value": "Ascoltare, Imparare, Leggere.",
        "Neo6uN8N9UasJcJdTgmUJg#Value": "Scansiona per scaricare l'app mobile",
        "1adaFkSs6Eu8LQA1B4Z56w#Value": "Tutto ci\xF2 di cui hai bisogno per un partner marketing di successo.",
        "DZSAqbT4jkWfN4OqxOKCFA#Value": "Infografiche",
        "QNt3K4z9s0mjesfDRLpl7A#Value": "E-book",
        "FLk8QSyiOkuIqtmBfVo4Yw#Value": "Brochure di marketing",
        "bM7PjZ4q_EuS25rccTySQg#Value": "Manuali di marketing",
        "uHFImDRVWE2MA_64Li66Ww#Value": "Corsi",
        "sse4z6h_sU6gso1w6w59LA#Value": "Ascoltare, Imparare, Leggere."
    },
    Mn = {
        "zkMPCyO8E0aYnIYzzJSMng#Value": "Otw\xF3rz aplikacj\u0119 Academy",
        "mxqBfVnviEmFswLgQBO7ug#Value": "Wszystko, czego potrzebujesz do udanego marketingu partnerskiego.",
        "bDqMK2mJ7kacvPDTaOF8rg#Value": "Infografiki",
        "uS0lZPuU6kOmtCwieNWUtg#Value": "Broszury marketingowe",
        "C987V+27QE+VKjDqaJ0p2w#Value": "E-booki",
        "FweTDdT9dkSF1or4BJf5JA#Value": "Podr\u0119czniki marketingowe",
        "83dGwifhKk+YOiXkvULi4A#Value": "Kursy",
        "kwwc0W9pKE64IAQBhqqlsg#Value": "S\u0142uchaj, ucz si\u0119, czytaj.",
        "Neo6uN8N9UasJcJdTgmUJg#Value": "Skanuj, aby pobra\u0107 aplikacj\u0119 mobiln\u0105",
        "1adaFkSs6Eu8LQA1B4Z56w#Value": "Wszystko, czego potrzebujesz do udanego marketingu partnerskiego.",
        "DZSAqbT4jkWfN4OqxOKCFA#Value": "Infografiki",
        "QNt3K4z9s0mjesfDRLpl7A#Value": "E-booki",
        "FLk8QSyiOkuIqtmBfVo4Yw#Value": "Broszury marketingowe",
        "bM7PjZ4q_EuS25rccTySQg#Value": "Podr\u0119czniki marketingowe",
        "uHFImDRVWE2MA_64Li66Ww#Value": "Kursy",
        "sse4z6h_sU6gso1w6w59LA#Value": "S\u0142uchaj, ucz si\u0119, czytaj."
    },
    zn = {
        "zkMPCyO8E0aYnIYzzJSMng#Value": "Abrir a aplica\xE7\xE3o Academy",
        "mxqBfVnviEmFswLgQBO7ug#Value": "Tudo o que voc\xEA precisa para um marketing de parceiros bem-sucedido.",
        "bDqMK2mJ7kacvPDTaOF8rg#Value": "Infografias",
        "uS0lZPuU6kOmtCwieNWUtg#Value": "Brochuras de marketing",
        "C987V+27QE+VKjDqaJ0p2w#Value": "E-books",
        "FweTDdT9dkSF1or4BJf5JA#Value": "Guias de marketing",
        "83dGwifhKk+YOiXkvULi4A#Value": "Cursos",
        "kwwc0W9pKE64IAQBhqqlsg#Value": "Ou\xE7a, Aprenda, Leia.",
        "Neo6uN8N9UasJcJdTgmUJg#Value": "Digitalize para descarregar a aplica\xE7\xE3o m\xF3vel",
        "1adaFkSs6Eu8LQA1B4Z56w#Value": "Tudo o que precisa para um marketing de parceiros eficaz.",
        "DZSAqbT4jkWfN4OqxOKCFA#Value": "Infografias",
        "QNt3K4z9s0mjesfDRLpl7A#Value": "E-books",
        "FLk8QSyiOkuIqtmBfVo4Yw#Value": "Brochuras de marketing",
        "bM7PjZ4q_EuS25rccTySQg#Value": "Guias de marketing",
        "uHFImDRVWE2MA_64Li66Ww#Value": "Cursos",
        "sse4z6h_sU6gso1w6w59LA#Value": "Ou\xE7a, Aprenda, Leia."
    },
    Bn = {
        "zkMPCyO8E0aYnIYzzJSMng#Value": "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 Academy",
        "mxqBfVnviEmFswLgQBO7ug#Value": "\u0412\u0441\u0435, \u0447\u0442\u043E \u0432\u0430\u043C \u043D\u0443\u0436\u043D\u043E \u0434\u043B\u044F \u0443\u0441\u043F\u0435\u0448\u043D\u043E\u0433\u043E \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u0441\u043A\u043E\u0433\u043E \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u0430.",
        "bDqMK2mJ7kacvPDTaOF8rg#Value": "\u0418\u043D\u0444\u043E\u0433\u0440\u0430\u0444\u0438\u043A\u0430",
        "uS0lZPuU6kOmtCwieNWUtg#Value": "\u041C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u043E\u0432\u044B\u0435 \u0431\u0440\u043E\u0448\u044E\u0440\u044B",
        "C987V+27QE+VKjDqaJ0p2w#Value": "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0435 \u043A\u043D\u0438\u0433\u0438",
        "FweTDdT9dkSF1or4BJf5JA#Value": "\u041C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u043E\u0432\u044B\u0435 \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u0430",
        "83dGwifhKk+YOiXkvULi4A#Value": "\u041A\u0443\u0440\u0441\u044B",
        "kwwc0W9pKE64IAQBhqqlsg#Value": "\u0421\u043B\u0443\u0448\u0430\u0439\u0442\u0435, \u0443\u0447\u0438\u0442\u0435\u0441\u044C, \u0447\u0438\u0442\u0430\u0439\u0442\u0435.",
        "Neo6uN8N9UasJcJdTgmUJg#Value": "\u0421\u043A\u0430\u043D\u0438\u0440\u0443\u0439\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0441\u043A\u0430\u0447\u0430\u0442\u044C \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435",
        "1adaFkSs6Eu8LQA1B4Z56w#Value": "\u0412\u0441\u0435, \u0447\u0442\u043E \u0432\u0430\u043C \u043D\u0443\u0436\u043D\u043E \u0434\u043B\u044F \u0443\u0441\u043F\u0435\u0448\u043D\u043E\u0433\u043E \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u0441\u043A\u043E\u0433\u043E \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u0430.",
        "DZSAqbT4jkWfN4OqxOKCFA#Value": "\u0418\u043D\u0444\u043E\u0433\u0440\u0430\u0444\u0438\u043A\u0430",
        "QNt3K4z9s0mjesfDRLpl7A#Value": "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0435 \u043A\u043D\u0438\u0433\u0438",
        "FLk8QSyiOkuIqtmBfVo4Yw#Value": "\u041C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u043E\u0432\u044B\u0435 \u0431\u0440\u043E\u0448\u044E\u0440\u044B",
        "bM7PjZ4q_EuS25rccTySQg#Value": "\u041C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u043E\u0432\u044B\u0435 \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u0430",
        "uHFImDRVWE2MA_64Li66Ww#Value": "\u041A\u0443\u0440\u0441\u044B",
        "sse4z6h_sU6gso1w6w59LA#Value": "\u0421\u043B\u0443\u0448\u0430\u0439\u0442\u0435, \u0443\u0447\u0438\u0442\u0435\u0441\u044C, \u0447\u0438\u0442\u0430\u0439\u0442\u0435."
    },
    Tr = {
        "ar-001": {
            translations: Nn,
            isRTL: !0
        },
        "de-DE": {
            translations: Ln,
            isRTL: !1
        },
        "es-ES": {
            translations: Fn,
            isRTL: !1
        },
        "fr-FR": {
            translations: $n,
            isRTL: !1
        },
        "it-IT": {
            translations: Wn,
            isRTL: !1
        },
        "pl-PL": {
            translations: Mn,
            isRTL: !1
        },
        "pt-PT": {
            translations: zn,
            isRTL: !1
        },
        "ru-RU": {
            translations: Bn,
            isRTL: !1
        }
    };

function At(u, i, d, e) {
    /iP(hone|od|ad)|mac(intosh|intel|ppc|68k|os)/i.test(navigator.userAgent) ? u.OS = "iOS" : u.OS = "Android"
}
o(At, "default");
var L = p; {
    let i = class i extends L.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, Tr);
            var s = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    s = this.idService;
                return L.Logger.startActiveSpan("OnReady", function(n) {
                    n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "0f057c13-4978-41cc-bf39-42d191e2cbc2"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e), t._checkOS$Action(e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _checkOS$Action() {
            return this.hasOwnProperty("__checkOS$Action") || (this.__checkOS$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    s = this.idService;
                return L.Logger.startActiveSpan("CheckOS", function(n) {
                    n && (n.setAttribute("code.function", "CheckOS"), n.setAttribute("outsystems.function.key", "39dfbbfb-ca9f-4c2e-8898-6a22e5f9d13b"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("CheckOS"), e = t.callContext(e);
                        var a = new L.DataTypes.VariableHolder;
                        a.value = L.Logger.startActiveSpan("JavaScript1", function(c) {
                            c && (c.setAttribute("code.function", "JavaScript1"), c.setAttribute("outsystems.function.key", "e586a3b2-7d04-4dd3-b3cc-ec53710175fc"), c.setAttribute("outsystems.function.owner.name", "PartnersHub"), c.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(At, "JavaScript1", "CheckOS", {
                                    OS: L.DataConversion.JSNodeParamConverter.to("", L.DataTypes.DataTypes.Text)
                                }, function(f) {
                                    var m = new(t.constructor.getVariableGroupType("PartnersHub.Home.PartnersAcademy.CheckOS$javaScript1JSResult"));
                                    return m.oSOut = L.DataConversion.JSNodeParamConverter.from(f.OS, L.DataTypes.DataTypes.Text), m
                                }, {}, {})
                            } finally {
                                c && c.end()
                            }
                        }, 1), r.variables.oSVar = a.value.oSOut
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__checkOS$Action
        }
        set _checkOS$Action(e) {
            this.__checkOS$Action = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    s = this.idService;
                return L.Logger.startActiveSpan("OnInitialize", function(n) {
                    n && (n.setAttribute("code.function", "OnInitialize"), n.setAttribute("outsystems.function.key", "7739673d-2852-42d3-b19a-7e30bc3a3a9e"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        get _buttonOnClick$Action() {
            return this.hasOwnProperty("__buttonOnClick$Action") || (this.__buttonOnClick$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    s = this.idService;
                return L.Logger.startActiveSpan("ButtonOnClick", function(n) {
                    n && (n.setAttribute("code.function", "ButtonOnClick"), n.setAttribute("outsystems.function.key", "77e19678-9f9b-43c8-9626-f339e5c2d617"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("ButtonOnClick"), e = t.callContext(e), H.rudderstackTrackEvent$Action(function() {
                            var a = new z;
                            return a.actionAttr = "click_cta", a.cta_nameAttr = "Open academy app", a.cta_placementAttr = "partner academy section", a
                        }(), "ce_partnershub_form", e), L.Navigation.navigateTo(L.Navigation.generateScreenURL("https://static.deriv.com/scripts/storeRedirect?app=partnershub", {}), L.Transitions.createTransition(L.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__buttonOnClick$Action
        }
        set _buttonOnClick$Action(e) {
            this.__buttonOnClick$Action = e
        }
        onReady$Action(e) {
            var r = this.controller;
            return L.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "0f057c13-4978-41cc-bf39-42d191e2cbc2"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        checkOS$Action(e) {
            var r = this.controller;
            return L.Logger.startActiveSpan("CheckOS__proxy", function(t) {
                t && (t.setAttribute("code.function", "CheckOS"), t.setAttribute("outsystems.function.key", "39dfbbfb-ca9f-4c2e-8898-6a22e5f9d13b"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._checkOS$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onInitialize$Action(e) {
            var r = this.controller;
            return L.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "7739673d-2852-42d3-b19a-7e30bc3a3a9e"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onInitialize$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        buttonOnClick$Action(e) {
            var r = this.controller;
            return L.Logger.startActiveSpan("ButtonOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "ButtonOnClick"), t.setAttribute("outsystems.function.key", "77e19678-9f9b-43c8-9626-f339e5c2d617"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._buttonOnClick$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    s = this.idService;
                return r.onInitialize$Action(e)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    s = this.idService;
                return r.onReady$Action(e)
            }), this._onReadyEventHandler
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
            return H.defaultTimeout
        }
    };
    o(i, "ControllerInner");
    let u = i;
    pt = u, pt.registerVariableGroupType("PartnersHub.Home.PartnersAcademy.CheckOS$javaScript1JSResult", [{
        name: "OS",
        attrName: "oSOut",
        mandatory: !0,
        dataType: L.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }])
}
var pt, kr = new L.Controller.ControllerFactory(pt, F);
var Ct = p,
    Ms = E.PlaceholderContent,
    zs = E.IteratorPlaceholderContent,
    _e = class _e extends V.BaseWebBlock {
        static get displayName() {
            return "Home.PartnersAcademy"
        }
        static getAttributes() {
            return {
                codeFunction: "PartnersAcademy",
                functionKey: "27efcd5b-6c0e-47a5-b336-6bec1dc79753",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Home.PartnersAcademy.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return er
        }
        get controllerFactory() {
            return kr
        }
        get title() {
            return ""
        }
        internalRender() {
            let i = this.model,
                d = this.controller,
                e = this.idService,
                r = d.validationService,
                t = this.widgetsRecordProvider,
                s = d.callContext(),
                n = _e.ifWidget,
                a = _e.textWidget,
                c = _e.asPrimitiveValue,
                f = _e.getTranslation,
                m = this;
            return y.createElement("div", this.getRootNodeProperties(), n(_.getIsDesktop(), !1, this, function() {
                return [y.createElement(h, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "display: flex; flex-direction: column; gap: 16px;"
                    },
                    gridProperties: {
                        classes: "OSInline"
                    },
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "DesktopPartnersAcademy"
                    },
                    _widgetRecordProvider: t
                }, y.createElement(D, {
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    _idProps: {
                        service: e,
                        uuid: "1"
                    },
                    _widgetRecordProvider: t
                }, y.createElement(C, {
                    extendedProperties: {
                        style: "color: #222; font-size: 20px; font-weight: bold;"
                    },
                    text: ["Partner's Academy"],
                    _idProps: {
                        service: e,
                        uuid: "2"
                    },
                    _widgetRecordProvider: t
                })), y.createElement(h, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "display: flex; gap: 24px; height: 186px; justify-content: space-between; text-align: left;"
                    },
                    gridProperties: {
                        classes: "OSInline",
                        width: "100%"
                    },
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "3"
                    },
                    _widgetRecordProvider: t
                }, y.createElement(h, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-items: center; background: #E9ECEF; border-radius: 8px; display: flex; gap: 24px; height: 186px; overflow: hidden;"
                    },
                    gridProperties: {
                        classes: "OSInline",
                        width: "280px"
                    },
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "4"
                    },
                    _widgetRecordProvider: t
                }, y.createElement(h, {
                    align: 0,
                    animate: !1,
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: "ph-academy-image-text",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "5"
                    },
                    _widgetRecordProvider: t
                }, y.createElement(C, {
                    extendedProperties: {
                        style: "font-size: 20px; font-weight: bold;"
                    },
                    text: [a(f("sse4z6h_sU6gso1w6w59LA#Value", "Listen, Learn, Read."))],
                    _idProps: {
                        service: e,
                        uuid: "6"
                    },
                    _widgetRecordProvider: t
                })), y.createElement(Q, {
                    gridProperties: {
                        classes: "ThemeGrid_MarginGutter"
                    },
                    image: Ct.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.partnershand.png"),
                    style: "ph-academy-image",
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "7"
                    },
                    _widgetRecordProvider: t
                })), y.createElement(h, {
                    align: 0,
                    animate: !1,
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: "ph-academy-content",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "8"
                    },
                    _widgetRecordProvider: t
                }, y.createElement(h, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px;"
                    },
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "BadgesContainer2"
                    },
                    _widgetRecordProvider: t
                }, y.createElement(h, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "background-color: #E7F2F4;"
                    },
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: "ph-badge-label",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "10"
                    },
                    _widgetRecordProvider: t
                }, y.createElement(D, {
                    extendedProperties: {
                        style: "color: #095A66; font-size: 0px; font-weight: bold;"
                    },
                    _idProps: {
                        service: e,
                        uuid: "11"
                    },
                    _widgetRecordProvider: t
                }, y.createElement(C, {
                    extendedProperties: {
                        style: "font-size: 12px;"
                    },
                    text: [a(f("uHFImDRVWE2MA_64Li66Ww#Value", "Courses"))],
                    _idProps: {
                        service: e,
                        uuid: "12"
                    },
                    _widgetRecordProvider: t
                }))), y.createElement(h, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "background-color: #E6F2EF;"
                    },
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: "ph-badge-label",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "13"
                    },
                    _widgetRecordProvider: t
                }, y.createElement(D, {
                    extendedProperties: {
                        style: "color: #065940; font-size: 0px; font-weight: bold;"
                    },
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    _idProps: {
                        service: e,
                        uuid: "14"
                    },
                    _widgetRecordProvider: t
                }, y.createElement(C, {
                    extendedProperties: {
                        style: "font-size: 12px;"
                    },
                    text: [a(f("bM7PjZ4q_EuS25rccTySQg#Value", "Marketing handbooks"))],
                    _idProps: {
                        service: e,
                        uuid: "15"
                    },
                    _widgetRecordProvider: t
                }))), y.createElement(h, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "background-color: #E5F0FE;"
                    },
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: "ph-badge-label",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "16"
                    },
                    _widgetRecordProvider: t
                }, y.createElement(D, {
                    extendedProperties: {
                        style: "color: #12558E; font-size: 0px; font-weight: bold;"
                    },
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    _idProps: {
                        service: e,
                        uuid: "17"
                    },
                    _widgetRecordProvider: t
                }, y.createElement(C, {
                    extendedProperties: {
                        style: "font-size: 12px;"
                    },
                    text: [a(f("FLk8QSyiOkuIqtmBfVo4Yw#Value", "Marketing brochures"))],
                    _idProps: {
                        service: e,
                        uuid: "18"
                    },
                    _widgetRecordProvider: t
                }))), y.createElement(h, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "background-color: #FEF0E6;"
                    },
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: "ph-badge-label",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "19"
                    },
                    _widgetRecordProvider: t
                }, y.createElement(D, {
                    extendedProperties: {
                        style: "color: #AD4805; font-size: 0px; font-weight: bold;"
                    },
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    _idProps: {
                        service: e,
                        uuid: "20"
                    },
                    _widgetRecordProvider: t
                }, y.createElement(C, {
                    extendedProperties: {
                        style: "font-size: 12px;"
                    },
                    text: [a(f("QNt3K4z9s0mjesfDRLpl7A#Value", "E-books"))],
                    _idProps: {
                        service: e,
                        uuid: "21"
                    },
                    _widgetRecordProvider: t
                }))), y.createElement(h, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "background-color: #F1EDFD;"
                    },
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: "ph-badge-label",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "22"
                    },
                    _widgetRecordProvider: t
                }, y.createElement(D, {
                    extendedProperties: {
                        style: "color: #4E32A2; font-size: 0px; font-weight: bold;"
                    },
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    _idProps: {
                        service: e,
                        uuid: "23"
                    },
                    _widgetRecordProvider: t
                }, y.createElement(C, {
                    extendedProperties: {
                        style: "font-size: 12px;"
                    },
                    text: [a(f("DZSAqbT4jkWfN4OqxOKCFA#Value", "Infographics"))],
                    _idProps: {
                        service: e,
                        uuid: "24"
                    },
                    _widgetRecordProvider: t
                })))), y.createElement(C, {
                    extendedProperties: {
                        style: "font-size: 14px;"
                    },
                    text: [a(f("1adaFkSs6Eu8LQA1B4Z56w#Value", "Everything you need for successful partner marketing."))],
                    _idProps: {
                        service: e,
                        uuid: "25"
                    },
                    _widgetRecordProvider: t
                })), y.createElement(h, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-items: center; border: 1px solid #DEE2E6; border-radius: 8px; display: flex; flex-direction: column; justify-content: center; padding: 32px; text-align: center;"
                    },
                    gridProperties: {
                        classes: "OSInline",
                        width: "166px"
                    },
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "26"
                    },
                    _widgetRecordProvider: t
                }, y.createElement(Q, {
                    extendedProperties: {
                        style: "height: 102px;"
                    },
                    gridProperties: {
                        width: "102px"
                    },
                    image: Ct.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.academypartnershub.png"),
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "27"
                    },
                    _widgetRecordProvider: t
                }), y.createElement(C, {
                    extendedProperties: {
                        style: "font-size: 12px; width: 102px;"
                    },
                    text: [a(f("Neo6uN8N9UasJcJdTgmUJg#Value", "Scan to download mobile app"))],
                    _idProps: {
                        service: e,
                        uuid: "28"
                    },
                    _widgetRecordProvider: t
                }))))]
            }, function() {
                return [y.createElement(h, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "display: flex; flex-direction: column; gap: 16px; height: 100%;"
                    },
                    gridProperties: {
                        classes: "OSInline",
                        width: "100%"
                    },
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "MobilePartnersAcademy"
                    },
                    _widgetRecordProvider: t
                }, y.createElement(D, {
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    _idProps: {
                        service: e,
                        uuid: "30"
                    },
                    _widgetRecordProvider: t
                }, y.createElement(C, {
                    extendedProperties: {
                        style: "color: #222; font-size: 20px; font-weight: bold;"
                    },
                    text: ["Partner's Academy"],
                    _idProps: {
                        service: e,
                        uuid: "31"
                    },
                    _widgetRecordProvider: t
                })), y.createElement(h, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-items: center; background: #E9ECEF; border-radius: 8px; display: flex; gap: 48px; height: 200px; justify-content: center;"
                    },
                    gridProperties: {
                        classes: "OSInline",
                        width: "100%"
                    },
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "32"
                    },
                    _widgetRecordProvider: t
                }, y.createElement(h, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "padding-left: 48px;"
                    },
                    gridProperties: {
                        classes: "OSInline",
                        width: "100px"
                    },
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "33"
                    },
                    _widgetRecordProvider: t
                }, y.createElement(C, {
                    extendedProperties: {
                        style: "font-size: 20px; font-weight: bold;"
                    },
                    text: [a(f("kwwc0W9pKE64IAQBhqqlsg#Value", "Listen, Learn, Read."))],
                    _idProps: {
                        service: e,
                        uuid: "34"
                    },
                    _widgetRecordProvider: t
                })), y.createElement(h, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "height: 100%; padding-top: 16px;"
                    },
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "35"
                    },
                    _widgetRecordProvider: t
                }, y.createElement(Q, {
                    extendedProperties: {
                        style: "height: 100%;"
                    },
                    image: Ct.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.partnershand.png"),
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "36"
                    },
                    _widgetRecordProvider: t
                }))), y.createElement(h, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "display: flex; flex-wrap: wrap; gap: 8px;"
                    },
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "BadgesContainer"
                    },
                    _widgetRecordProvider: t
                }, y.createElement(h, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "background-color: #E7F2F4; border-radius: 50px; padding: 10px 12px;"
                    },
                    gridProperties: {
                        classes: "OSInline",
                        width: "fit-content"
                    },
                    style: "partners-academy-badges__badge",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "38"
                    },
                    _widgetRecordProvider: t
                }, y.createElement(D, {
                    extendedProperties: {
                        style: "color: #095A66; font-size: 16px; font-weight: bold;"
                    },
                    _idProps: {
                        service: e,
                        uuid: "39"
                    },
                    _widgetRecordProvider: t
                }, y.createElement(C, {
                    extendedProperties: {
                        style: "font-size: 14px;"
                    },
                    text: [a(f("83dGwifhKk+YOiXkvULi4A#Value", "Courses"))],
                    _idProps: {
                        service: e,
                        uuid: "40"
                    },
                    _widgetRecordProvider: t
                }))), y.createElement(h, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "background-color: #E6F2EF; border-radius: 50px; padding: 10px 12px;"
                    },
                    gridProperties: {
                        classes: "OSInline",
                        width: "fit-content"
                    },
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "41"
                    },
                    _widgetRecordProvider: t
                }, y.createElement(D, {
                    extendedProperties: {
                        style: "color: #065940; font-size: 16px; font-weight: bold;"
                    },
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    _idProps: {
                        service: e,
                        uuid: "42"
                    },
                    _widgetRecordProvider: t
                }, y.createElement(C, {
                    extendedProperties: {
                        style: "font-size: 14px;"
                    },
                    text: [a(f("FweTDdT9dkSF1or4BJf5JA#Value", "Marketing handbooks"))],
                    _idProps: {
                        service: e,
                        uuid: "43"
                    },
                    _widgetRecordProvider: t
                }))), y.createElement(h, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "background-color: #FEF0E6; border-radius: 50px; padding: 10px 12px;"
                    },
                    gridProperties: {
                        classes: "OSInline",
                        width: "fit-content"
                    },
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "44"
                    },
                    _widgetRecordProvider: t
                }, y.createElement(D, {
                    extendedProperties: {
                        style: "color: #AD4805; font-size: 16px; font-weight: bold;"
                    },
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    _idProps: {
                        service: e,
                        uuid: "45"
                    },
                    _widgetRecordProvider: t
                }, y.createElement(C, {
                    extendedProperties: {
                        style: "font-size: 14px;"
                    },
                    text: [a(f("C987V+27QE+VKjDqaJ0p2w#Value", "E-books"))],
                    _idProps: {
                        service: e,
                        uuid: "46"
                    },
                    _widgetRecordProvider: t
                }))), y.createElement(h, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "background-color: #E5F0FE; border-radius: 50px; padding: 10px 12px;"
                    },
                    gridProperties: {
                        classes: "OSInline",
                        width: "fit-content"
                    },
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "47"
                    },
                    _widgetRecordProvider: t
                }, y.createElement(D, {
                    extendedProperties: {
                        style: "color: #12558E; font-size: 16px; font-weight: bold;"
                    },
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    _idProps: {
                        service: e,
                        uuid: "48"
                    },
                    _widgetRecordProvider: t
                }, y.createElement(C, {
                    extendedProperties: {
                        style: "font-size: 14px;"
                    },
                    text: [a(f("uS0lZPuU6kOmtCwieNWUtg#Value", "Marketing brochures"))],
                    _idProps: {
                        service: e,
                        uuid: "49"
                    },
                    _widgetRecordProvider: t
                }))), y.createElement(h, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "background-color: #F1EDFD; border-radius: 50px; padding: 10px 12px;"
                    },
                    gridProperties: {
                        classes: "OSInline",
                        width: "fit-content"
                    },
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "50"
                    },
                    _widgetRecordProvider: t
                }, y.createElement(D, {
                    extendedProperties: {
                        style: "color: #4E32A2; font-size: 16px; font-weight: bold;"
                    },
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    _idProps: {
                        service: e,
                        uuid: "51"
                    },
                    _widgetRecordProvider: t
                }, y.createElement(C, {
                    extendedProperties: {
                        style: "font-size: 14px;"
                    },
                    text: [a(f("bDqMK2mJ7kacvPDTaOF8rg#Value", "Infographics"))],
                    _idProps: {
                        service: e,
                        uuid: "52"
                    },
                    _widgetRecordProvider: t
                })))), a(f("mxqBfVnviEmFswLgQBO7ug#Value", "Everything you need for successful partner marketing.")), y.createElement(De, {
                    enabled: !0,
                    extendedProperties: {
                        style: "background-color: inherit; border-radius: 50px; color: #ff4450;"
                    },
                    gridProperties: {
                        marginLeft: "0"
                    },
                    isDefault: !1,
                    onClick: o(function() {
                        var l = s.clone();
                        d.buttonOnClick$Action(d.callContext(l))
                    }, "onClick"),
                    style: "btn btn-primary affiliates-programme__button affiliates-programme__button--mobile",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "53"
                    },
                    _widgetRecordProvider: t
                }, y.createElement(h, {
                    align: 0,
                    animate: !1,
                    style: "display-flex align-items-center gap-s",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "54"
                    },
                    _widgetRecordProvider: t
                }, n(i.variables.oSVar === "iOS", !1, this, function() {
                    return [y.createElement(oe, {
                        extendedProperties: {
                            style: "font-size: 18px; height: 18px; margin-right: 6px; width: 18px;"
                        },
                        gridProperties: {
                            marginLeft: "6px"
                        },
                        icon: "apple",
                        iconSize: 1,
                        style: "icon",
                        visible: !0,
                        _idProps: {
                            service: e,
                            uuid: "55"
                        },
                        _widgetRecordProvider: t
                    })]
                }, function() {
                    return [n(i.variables.oSVar === "Android", !1, this, function() {
                        return [y.createElement(oe, {
                            extendedProperties: {
                                style: "font-size: 18px;"
                            },
                            icon: "android",
                            iconSize: 1,
                            style: "icon",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "56"
                            },
                            _widgetRecordProvider: t
                        })]
                    }, function() {
                        return []
                    })]
                }), a(f("zkMPCyO8E0aYnIYzzJSMng#Value", "Open Academy app")))))]
            }))
        }
    };
o(_e, "View");
var Pt = _e,
    Bs = Pt;
var U = J(q());
var Un = {
        "hKoas_JkdUqaXBT9HahADw#Value": "\u0634\u0627\u0647\u062F \u062C\u0645\u064A\u0639 \u0627\u0644\u0641\u064A\u062F\u064A\u0648\u0647\u0627\u062A",
        "T7D85Ou3vE61yWtLCd1Qjw#Value": "\u062A\u0639\u0631\u0641 \u0639\u0644\u0649 \u0627\u0644\u0645\u0632\u064A\u062F \u0639\u0644\u0649 \u064A\u0648\u062A\u064A\u0648\u0628"
    },
    Jn = {
        "hKoas_JkdUqaXBT9HahADw#Value": "Alle Videos ansehen",
        "T7D85Ou3vE61yWtLCd1Qjw#Value": "Erfahren Sie mehr auf YouTube"
    },
    qn = {
        "hKoas_JkdUqaXBT9HahADw#Value": "Ver todos los videos",
        "T7D85Ou3vE61yWtLCd1Qjw#Value": "Biblioteca de videos"
    },
    Qn = {
        "hKoas_JkdUqaXBT9HahADw#Value": "Voir toutes les vid\xE9os",
        "T7D85Ou3vE61yWtLCd1Qjw#Value": "D\xE9couvrez-en plus sur YouTube"
    },
    Gn = {
        "hKoas_JkdUqaXBT9HahADw#Value": "Vedi tutti i video",
        "T7D85Ou3vE61yWtLCd1Qjw#Value": "Scopri di pi\xF9 su YouTube"
    },
    Kn = {
        "hKoas_JkdUqaXBT9HahADw#Value": "Zobacz wszystkie nagrania",
        "T7D85Ou3vE61yWtLCd1Qjw#Value": "Dowiedz si\u0119 wi\u0119cej na YouTube"
    },
    jn = {
        "hKoas_JkdUqaXBT9HahADw#Value": "Ver todos os v\xEDdeos",
        "T7D85Ou3vE61yWtLCd1Qjw#Value": "Saiba mais no YouTube"
    },
    Zn = {
        "hKoas_JkdUqaXBT9HahADw#Value": "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0441\u0435 \u0432\u0438\u0434\u0435\u043E",
        "T7D85Ou3vE61yWtLCd1Qjw#Value": "\u0423\u0437\u043D\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0430 YouTube"
    },
    Vr = {
        "ar-001": {
            translations: Un,
            isRTL: !0
        },
        "de-DE": {
            translations: Jn,
            isRTL: !1
        },
        "es-ES": {
            translations: qn,
            isRTL: !1
        },
        "fr-FR": {
            translations: Qn,
            isRTL: !1
        },
        "it-IT": {
            translations: Gn,
            isRTL: !1
        },
        "pl-PL": {
            translations: Kn,
            isRTL: !1
        },
        "pt-PT": {
            translations: jn,
            isRTL: !1
        },
        "ru-RU": {
            translations: Zn,
            isRTL: !1
        }
    };

function St(u, i, d) {
    window.open("https://www.youtube.com/@Deriv.partners")
}
o(St, "default");

function Et(u, i, d, e) {
    var t;
    let r = document.getElementById(u.CarouselId);
    if (r) {
        let s = r.getElementsByClassName("splide__slide--clone is-visible");
        s.length && ((t = Array.from(s)) == null || t.forEach(n => {
            if (!n.getAttribute("data-is-attached-el")) {
                n.setAttribute("data-is-attached-el", "true");
                let c = n.getElementsByClassName("affiliates-programme-list__item");
                if (c.length) {
                    let f = c[0].getAttribute("data-link");
                    n.addEventListener("click", () => {
                        window.open(f)
                    })
                }
            }
        }))
    }
}
o(Et, "default");

function Ot(u, i, d, e) {
    window.open(u.VideoLink)
}
o(Ot, "default");
var x = p; {
    let i = class i extends x.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, Vr);
            var s = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {
                getAffiliateLinks$AggrRefresh: 0
            }, this.dataFetchDependentsGraph = {
                getAffiliateLinks$AggrRefresh: []
            }, this.shouldSendClientVarsToDataSources = !0
        }
        get getAffiliateLinks$AggrRefresh() {
            return this.hasOwnProperty("_getAffiliateLinks$AggrRefresh") || (this._getAffiliateLinks$AggrRefresh = function() {
                var e = function(r, t, c) {
                    var n = this.model,
                        a = this.controller,
                        c = a.callContext(c);
                    return a.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetAffiliateLinks", "screenservices/PartnersHub/Home/AffiliateProgramme/ScreenDataSetGetAffiliateLinks", "JMrcPRhoMR0hxr2x8YPJcA", r, t, function(f) {
                        n.variables.getAffiliateLinksAggr.dataFetchStatusAttr = f
                    }, function(f) {
                        n.variables.getAffiliateLinksAggr.replaceWith(x.DataConversion.ServerDataConverter.from(f, n.variables.getAffiliateLinksAggr.constructor))
                    }, void 0, void 0, void 0, c, _, !0)
                }.bind(this);
                return x.Logger.startActiveSpan("GetAffiliateLinks", function(r) {
                    return r && (r.setAttribute("code.function", "GetAffiliateLinks"), r.setAttribute("outsystems.function.key", "2edbd258-b25d-46e7-9056-5234ab10cd62"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "SCREEN_SERVICE_AGGREGATE_CALL")), x.Flow.tryFinally(function() {
                        return e()
                    }, function() {
                        r && r.end()
                    })
                }, 0)
            }), this._getAffiliateLinks$AggrRefresh
        }
        set getAffiliateLinks$AggrRefresh(e) {
            this._getAffiliateLinks$AggrRefresh = e
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = ["getAffiliateLinks$AggrRefresh"]), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onClickSeeAllVideo$Action() {
            return this.hasOwnProperty("__onClickSeeAllVideo$Action") || (this.__onClickSeeAllVideo$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    s = this.idService;
                return x.Logger.startActiveSpan("OnClickSeeAllVideo", function(n) {
                    n && (n.setAttribute("code.function", "OnClickSeeAllVideo"), n.setAttribute("outsystems.function.key", "5ec8c717-2ae8-4f70-ae06-253260196a65"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnClickSeeAllVideo"), e = t.callContext(e), H.rudderstackTrackEvent$Action(function() {
                            var a = new z;
                            return a.actionAttr = "click_cta", a.cta_nameAttr = "See all Videos", a.cta_placementAttr = "affiliate programme youtube section", a
                        }(), "ce_partnershub_form", e), x.Logger.startActiveSpan("JavaScript1", function(a) {
                            a && (a.setAttribute("code.function", "JavaScript1"), a.setAttribute("outsystems.function.key", "10cafe4c-4a4e-4a78-98d4-1bbfc00fbd20"), a.setAttribute("outsystems.function.owner.name", "PartnersHub"), a.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(St, "JavaScript1", "OnClickSeeAllVideo", null, function(c) {}, {}, {})
                            } finally {
                                a && a.end()
                            }
                        }, 1)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onClickSeeAllVideo$Action
        }
        set _onClickSeeAllVideo$Action(e) {
            this.__onClickSeeAllVideo$Action = e
        }
        get _onSlideMove$Action() {
            return this.hasOwnProperty("__onSlideMove$Action") || (this.__onSlideMove$Action = function(e, r) {
                var t = this.model,
                    s = this.controller,
                    n = this.idService;
                return x.Logger.startActiveSpan("OnSlideMove", function(a) {
                    a && (a.setAttribute("code.function", "OnSlideMove"), a.setAttribute("outsystems.function.key", "c6921f1f-f2b9-44d5-afcf-92db69c87462"), a.setAttribute("outsystems.function.owner.name", "PartnersHub"), a.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        s.ensureControllerAlive("OnSlideMove"), r = s.callContext(r);
                        var c = new x.DataTypes.VariableHolder(new(s.constructor.getVariableGroupType("PartnersHub.Home.AffiliateProgramme.OnSlideMove$vars")));
                        c.value.carouselIdInLocal = e, x.Logger.startActiveSpan("AttachClickHandlersToCarouselClones", function(f) {
                            f && (f.setAttribute("code.function", "AttachClickHandlersToCarouselClones"), f.setAttribute("outsystems.function.key", "7321ab2f-c3a3-4ab8-8a41-4201a35dffc0"), f.setAttribute("outsystems.function.owner.name", "PartnersHub"), f.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), f.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return s.safeExecuteJSNode(Et, "AttachClickHandlersToCarouselClones", "OnSlideMove", {
                                    CarouselId: x.DataConversion.JSNodeParamConverter.to(c.value.carouselIdInLocal, x.DataTypes.DataTypes.Text)
                                }, function(m) {}, {}, {})
                            } finally {
                                f && f.end()
                            }
                        }, 1)
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__onSlideMove$Action
        }
        set _onSlideMove$Action(e) {
            this.__onSlideMove$Action = e
        }
        get _onClickVideo$Action() {
            return this.hasOwnProperty("__onClickVideo$Action") || (this.__onClickVideo$Action = function(e, r) {
                var t = this.model,
                    s = this.controller,
                    n = this.idService;
                return x.Logger.startActiveSpan("OnClickVideo", function(a) {
                    a && (a.setAttribute("code.function", "OnClickVideo"), a.setAttribute("outsystems.function.key", "d21b2024-3c64-4a1b-8bd7-316ab899ed6a"), a.setAttribute("outsystems.function.owner.name", "PartnersHub"), a.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        s.ensureControllerAlive("OnClickVideo"), r = s.callContext(r);
                        var c = new x.DataTypes.VariableHolder(new(s.constructor.getVariableGroupType("PartnersHub.Home.AffiliateProgramme.OnClickVideo$vars")));
                        c.value.videoLinkInLocal = e.clone(), H.rudderstackTrackEvent$Action(function() {
                            var f = new z;
                            return f.actionAttr = "click_cta", f.cta_nameAttr = "Video click", f.cta_placementAttr = c.value.videoLinkInLocal.titleAttr, f
                        }(), "ce_partnershub_form", r), x.Logger.startActiveSpan("JavaScript1", function(f) {
                            f && (f.setAttribute("code.function", "JavaScript1"), f.setAttribute("outsystems.function.key", "3ebe742d-75db-4b77-8238-d446f8d94762"), f.setAttribute("outsystems.function.owner.name", "PartnersHub"), f.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), f.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return s.safeExecuteJSNode(Ot, "JavaScript1", "OnClickVideo", {
                                    VideoLink: x.DataConversion.JSNodeParamConverter.to(c.value.videoLinkInLocal.linkAttr, x.DataTypes.DataTypes.Text)
                                }, function(m) {}, {}, {})
                            } finally {
                                f && f.end()
                            }
                        }, 1)
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__onClickVideo$Action
        }
        set _onClickVideo$Action(e) {
            this.__onClickVideo$Action = e
        }
        onClickSeeAllVideo$Action(e) {
            var r = this.controller;
            return x.Logger.startActiveSpan("OnClickSeeAllVideo__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnClickSeeAllVideo"), t.setAttribute("outsystems.function.key", "5ec8c717-2ae8-4f70-ae06-253260196a65"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onClickSeeAllVideo$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onSlideMove$Action(e, r) {
            var t = this.controller;
            return x.Logger.startActiveSpan("OnSlideMove__proxy", function(s) {
                s && (s.setAttribute("code.function", "OnSlideMove"), s.setAttribute("outsystems.function.key", "c6921f1f-f2b9-44d5-afcf-92db69c87462"), s.setAttribute("outsystems.function.owner.name", "PartnersHub"), s.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onSlideMove$Action, r, e)
                } finally {
                    s && s.end()
                }
            }, 0)
        }
        onClickVideo$Action(e, r) {
            var t = this.controller;
            return x.Logger.startActiveSpan("OnClickVideo__proxy", function(s) {
                s && (s.setAttribute("code.function", "OnClickVideo"), s.setAttribute("outsystems.function.key", "d21b2024-3c64-4a1b-8bd7-316ab899ed6a"), s.setAttribute("outsystems.function.owner.name", "PartnersHub"), s.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onClickVideo$Action, r, e)
                } finally {
                    s && s.end()
                }
            }, 0)
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
            return H.defaultTimeout
        }
    };
    o(i, "ControllerInner");
    let u = i;
    Me = u, Me.registerVariableGroupType("PartnersHub.Home.AffiliateProgramme.OnSlideMove$vars", [{
        name: "CarouselId",
        attrName: "carouselIdInLocal",
        mandatory: !0,
        dataType: x.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }]), Me.registerVariableGroupType("PartnersHub.Home.AffiliateProgramme.OnClickVideo$vars", [{
        name: "VideoLink",
        attrName: "videoLinkInLocal",
        mandatory: !0,
        dataType: x.DataTypes.DataTypes.Record,
        defaultValue: o(function() {
            return new qe
        }, "defaultValue"),
        complexType: qe
    }])
}
var Me, Ir = new x.Controller.ControllerFactory(Me, F);
var xr = p,
    ze = E.PlaceholderContent,
    Xn = E.IteratorPlaceholderContent,
    be = class be extends V.BaseWebBlock {
        static get displayName() {
            return "Home.AffiliateProgramme"
        }
        static getAttributes() {
            return {
                codeFunction: "AffiliateProgramme",
                functionKey: "c7d7a8dc-e9ee-4d86-8c08-2e3ffd919b34",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Home.AffiliateProgramme.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [Ee]
        }
        get modelFactory() {
            return tr
        }
        get controllerFactory() {
            return Ir
        }
        get title() {
            return ""
        }
        internalRender() {
            let i = this.model,
                d = this.controller,
                e = this.idService,
                r = d.validationService,
                t = this.widgetsRecordProvider,
                s = d.callContext(),
                n = be.ifWidget,
                a = be.textWidget,
                c = be.asPrimitiveValue,
                f = be.getTranslation,
                m = this;
            return U.createElement("div", this.getRootNodeProperties(), U.createElement(h, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "display: flex; flex-direction: column; gap: 16px;"
                },
                style: "affiliates-programme",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "AffiliatesProgrammeContainer"
                },
                _widgetRecordProvider: t
            }, U.createElement(D, {
                extendedProperties: {
                    style: "font-weight: bold;"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }, U.createElement(C, {
                extendedProperties: {
                    style: "color: #222; font-size: 20px;"
                },
                text: [a(f("T7D85Ou3vE61yWtLCd1Qjw#Value", "Learn more on YouTube"))],
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            })), U.createElement(h, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "3"
                },
                _widgetRecordProvider: t
            }, U.createElement(Ee, {
                getOwnerSpan: o(function() {
                    return m.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return m.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Navigation: re.carouselNavigation.arrows,
                    ItemsPerSlide: i.getCachedValue(e.getId("AffliliateProgrammeCarousel.ItemsPerSlide"), function() {
                        return function() {
                            var l = new xe;
                            return l.desktopAttr = 3, l.tabletAttr = 3, l.phoneAttr = 1, l
                        }()
                    }),
                    ExtendedClass: "affiliates-programme__carousel",
                    OptionalConfigs: i.getCachedValue(e.getId("AffliliateProgrammeCarousel.OptionalConfigs"), function() {
                        return function() {
                            var l = new Ve;
                            return l.autoPlayAttr = !1, l.paddingAttr = "16px", l.itemsGapAttr = "16px", l
                        }()
                    })
                },
                events: {
                    _handleError: o(function(l) {
                        d.handleError(l)
                    }, "_handleError"),
                    onSlideMoved$Action: o(function(l, g) {
                        var k = s.clone();
                        d.onSlideMove$Action(l, d.callContext(k))
                    }, "onSlideMoved$Action")
                },
                _validationProps: {
                    validationService: r
                },
                _idProps: {
                    service: e,
                    name: "AffliliateProgrammeCarousel",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    carouselItems: new ze(function() {
                        return [U.createElement(Ne, {
                            animateItems: !1,
                            extendedProperties: {
                                "disable-virtualization": "True"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mode: 0,
                            source: i.variables.getAffiliateLinksAggr.listOut,
                            style: "list list-group",
                            tag: "div",
                            _idProps: {
                                service: e,
                                uuid: "5"
                            },
                            _widgetRecordProvider: t,
                            source_dataFetchStatus: xr.Model.calculateDataFetchStatus(i.variables.getAffiliateLinksAggr.dataFetchStatusAttr),
                            placeholders: {
                                content: new Xn(function(l, g) {
                                    return [U.createElement(zt, {
                                        onClick: o(function() {
                                            var k = g.clone();
                                            d.onClickVideo$Action(i.variables.getAffiliateLinksAggr.listOut.getCurrent(g.iterationContext).affiliateLinksAttr, d.callContext(k))
                                        }, "onClick"),
                                        style: "list-item custom-ph-list-item",
                                        triggerActionOnFullSwipeLeft: !0,
                                        triggerActionOnFullSwipeRight: !0,
                                        _idProps: {
                                            service: l,
                                            name: "ListItem1"
                                        },
                                        _widgetRecordProvider: t,
                                        placeholders: {
                                            leftActions: ze.Empty,
                                            content: new ze(function() {
                                                return [U.createElement(h, {
                                                    align: 0,
                                                    animate: !1,
                                                    extendedProperties: {
                                                        "data-link": i.variables.getAffiliateLinksAggr.listOut.getCurrent(g.iterationContext).affiliateLinksAttr.linkAttr
                                                    },
                                                    gridProperties: {
                                                        classes: "OSInline"
                                                    },
                                                    style: "affiliates-programme-list__item",
                                                    visible: !0,
                                                    _idProps: {
                                                        service: l,
                                                        uuid: "7"
                                                    },
                                                    _widgetRecordProvider: t
                                                }, U.createElement(Q, {
                                                    style: "affiliates-programme-list__item-image",
                                                    type: 1,
                                                    url: i.variables.getAffiliateLinksAggr.listOut.getCurrent(g.iterationContext).affiliateLinksAttr.thumbnail3Attr,
                                                    _idProps: {
                                                        service: l,
                                                        uuid: "8"
                                                    },
                                                    _widgetRecordProvider: t,
                                                    url_dataFetchStatus: xr.Model.calculateDataFetchStatus(i.variables.getAffiliateLinksAggr.dataFetchStatusAttr)
                                                }))]
                                            }),
                                            rightActions: ze.Empty
                                        },
                                        _dependencies: [c(i.variables.getAffiliateLinksAggr.dataFetchStatusAttr), c(i.variables.getAffiliateLinksAggr.listOut.getCurrent(g.iterationContext).affiliateLinksAttr.thumbnail3Attr), c(i.variables.getAffiliateLinksAggr.listOut.getCurrent(g.iterationContext).affiliateLinksAttr.linkAttr)]
                                    })]
                                }, s, e, "1")
                            },
                            _dependencies: [c(i.variables.getAffiliateLinksAggr.dataFetchStatusAttr)]
                        })]
                    })
                },
                _dependencies: [c(i.variables.getAffiliateLinksAggr.dataFetchStatusAttr), c(i.variables.getAffiliateLinksAggr.listOut)]
            })), U.createElement(h, {
                align: 0,
                animate: !1,
                style: i.getCachedValue(e.getId("KtcZzRXm8kOYY6oTOwYdMQ.Style"), function() {
                    return _.getIsDesktop() ? "affiliates-programme__footer--desktop" : "affiliates-programme__footer--mobile"
                }, function() {
                    return _.getIsDesktop()
                }),
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "9"
                },
                _widgetRecordProvider: t
            }, U.createElement(De, {
                enabled: !0,
                isDefault: !1,
                onClick: o(function() {
                    var l = s.clone();
                    d.onClickSeeAllVideo$Action(d.callContext(l))
                }, "onClick"),
                style: i.getCachedValue(e.getId("kuZ9VeU8zEieBtAXXXwrVQ.Style"), function() {
                    return _.getIsDesktop() ? "btn btn-primary affiliates-programme__button affiliates-programme__button--desktop" : "btn btn-primary affiliates-programme__button affiliates-programme__button--mobile"
                }, function() {
                    return _.getIsDesktop()
                }),
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "10"
                },
                _widgetRecordProvider: t
            }, U.createElement(h, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: center; display: flex; gap: 8px;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "11"
                },
                _widgetRecordProvider: t
            }, U.createElement(oe, {
                extendedProperties: {
                    style: "font-size: 18px; height: 18px; margin-right: 6px; width: 18px;"
                },
                gridProperties: {
                    marginLeft: "6px"
                },
                icon: "youtube-play",
                iconSize: 1,
                style: "icon",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "12"
                },
                _widgetRecordProvider: t
            }), a(f("hKoas_JkdUqaXBT9HahADw#Value", "See all videos")))))))
        }
    };
o(be, "View");
var wt = be,
    vl = wt;
var Oe = J(q());
var Yn = {
        "hGrjsVin_k+o09Xv10+QZA#Value.-1338680608.1": "\u0627\u0646\u0636\u0645 \u0627\u0644\u0622\u0646",
        "KglJHT9r9U+AN_RNe7PMbw#Value": "\u062A\u062D\u062F\u064A\u062B\u0627\u062A \u062D\u0635\u0631\u064A\u0629 \u0644\u0644\u0634\u0631\u0643\u0627\u0621 \u0639\u0644\u0649 \u0627\u0644\u0648\u0627\u062A\u0633\u0627\u0628",
        "xmmB3QXapky_a843OQSiSw#Value.582033868.1": "\u0632\u0631 \u0627\u0644\u0627\u0646\u0636\u0645\u0627\u0645 \u0627\u0644\u0622\u0646 \u0641\u064A \u0644\u0627\u0641\u062A\u0629 \u0648\u0627\u062A\u0633\u0627\u0628",
        "PxN9xg9sdEyO006yBWwOxA#Value.-1338680608.1": "\u0627\u0646\u0636\u0645 \u0627\u0644\u0622\u0646"
    },
    ei = {
        "hGrjsVin_k+o09Xv10+QZA#Value.-1338680608.1": "Jetzt beitreten",
        "KglJHT9r9U+AN_RNe7PMbw#Value": "WhatsApp-Updates exklusiv f\xFCr Partner",
        "xmmB3QXapky_a843OQSiSw#Value.582033868.1": "WhatsApp-Banner Jetzt beitreten Button",
        "PxN9xg9sdEyO006yBWwOxA#Value.-1338680608.1": "Jetzt beitreten"
    },
    ti = {
        "hGrjsVin_k+o09Xv10+QZA#Value.-1338680608.1": "\xDAnete ahora",
        "KglJHT9r9U+AN_RNe7PMbw#Value": "Actualizaciones de WhatsApp exclusivamente para socios",
        "xmmB3QXapky_a843OQSiSw#Value.582033868.1": "Banner de WhatsApp Bot\xF3n de unirse ahora",
        "PxN9xg9sdEyO006yBWwOxA#Value.-1338680608.1": "\xDAnete ahora"
    },
    ri = {
        "hGrjsVin_k+o09Xv10+QZA#Value.-1338680608.1": "Rejoindre maintenant",
        "KglJHT9r9U+AN_RNe7PMbw#Value": "Mises \xE0 jour WhatsApp r\xE9serv\xE9es aux partenaires",
        "xmmB3QXapky_a843OQSiSw#Value.582033868.1": "bouton rejoindre maintenant de de banni\xE8re WhatsApp",
        "PxN9xg9sdEyO006yBWwOxA#Value.-1338680608.1": "Rejoindre maintenant"
    },
    ni = {
        "hGrjsVin_k+o09Xv10+QZA#Value.-1338680608.1": "Iscriviti ora",
        "KglJHT9r9U+AN_RNe7PMbw#Value": "Aggiornamenti WhatsApp esclusivamente per i partner",
        "xmmB3QXapky_a843OQSiSw#Value.582033868.1": 'Banner di WhatsApp pulsante "Unisciti ora"',
        "PxN9xg9sdEyO006yBWwOxA#Value.-1338680608.1": "Iscriviti ora"
    },
    ii = {
        "hGrjsVin_k+o09Xv10+QZA#Value.-1338680608.1": "Do\u0142\u0105cz teraz",
        "KglJHT9r9U+AN_RNe7PMbw#Value": "Aktualizacje WhatsApp wy\u0142\u0105cznie dla partner\xF3w",
        "xmmB3QXapky_a843OQSiSw#Value.582033868.1": "Baner WhatsApp Przycisk do\u0142\u0105cz teraz",
        "PxN9xg9sdEyO006yBWwOxA#Value.-1338680608.1": "Do\u0142\u0105cz teraz"
    },
    ai = {
        "hGrjsVin_k+o09Xv10+QZA#Value.-1338680608.1": "Adira j\xE1",
        "KglJHT9r9U+AN_RNe7PMbw#Value": "Atualiza\xE7\xF5es do WhatsApp exclusivamente para parceiros",
        "xmmB3QXapky_a843OQSiSw#Value.582033868.1": 'Banner do WhatsApp:Bot\xE3o "Adira j\xE1"',
        "PxN9xg9sdEyO006yBWwOxA#Value.-1338680608.1": "Adira j\xE1"
    },
    oi = {
        "hGrjsVin_k+o09Xv10+QZA#Value.-1338680608.1": "\u041F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u0438\u0442\u044C\u0441\u044F \u0441\u0435\u0439\u0447\u0430\u0441",
        "KglJHT9r9U+AN_RNe7PMbw#Value": "\u041D\u043E\u0432\u043E\u0441\u0442\u0438 \u0432 WhatsApp \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u043E\u0432",
        "xmmB3QXapky_a843OQSiSw#Value.582033868.1": "\u0431\u0430\u043D\u043D\u0435\u0440 WhatsApp \u043A\u043D\u043E\u043F\u043A\u0430 \u043F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u0438\u0442\u044C\u0441\u044F \u0441\u0435\u0439\u0447\u0430\u0441",
        "PxN9xg9sdEyO006yBWwOxA#Value.-1338680608.1": "\u041F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u0438\u0442\u044C\u0441\u044F \u0441\u0435\u0439\u0447\u0430\u0441"
    },
    Dr = {
        "ar-001": {
            translations: Yn,
            isRTL: !0
        },
        "de-DE": {
            translations: ei,
            isRTL: !1
        },
        "es-ES": {
            translations: ti,
            isRTL: !1
        },
        "fr-FR": {
            translations: ri,
            isRTL: !1
        },
        "it-IT": {
            translations: ni,
            isRTL: !1
        },
        "pl-PL": {
            translations: ii,
            isRTL: !1
        },
        "pt-PT": {
            translations: ai,
            isRTL: !1
        },
        "ru-RU": {
            translations: oi,
            isRTL: !1
        }
    };
var se = p; {
    let i = class i extends se.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, Dr);
            var s = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onClickJoinNow$Action() {
            return this.hasOwnProperty("__onClickJoinNow$Action") || (this.__onClickJoinNow$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    s = this.idService;
                return se.Logger.startActiveSpan("OnClickJoinNow", function(n) {
                    n && (n.setAttribute("code.function", "OnClickJoinNow"), n.setAttribute("outsystems.function.key", "e524bd03-1380-4a32-a549-a330b0d629f1"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnClickJoinNow"), e = t.callContext(e), H.rudderstackTrackEvent$Action(function() {
                            var a = new z;
                            return a.actionAttr = "click_cta", a.cta_nameAttr = se.Injector.resolve(se.ServiceNames.TranslationsService).getMessage("PxN9xg9sdEyO006yBWwOxA#Value.-1338680608.1", "Join Now"), a.cta_placementAttr = se.Injector.resolve(se.ServiceNames.TranslationsService).getMessage("xmmB3QXapky_a843OQSiSw#Value.582033868.1", "whatsapp banner join now button"), a
                        }(), "ce_partnershub_form", e), H.redirectToExternalNewTab$Action("https://www.whatsapp.com/channel/0029VajV7cY8fewr35BOkF06", e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onClickJoinNow$Action
        }
        set _onClickJoinNow$Action(e) {
            this.__onClickJoinNow$Action = e
        }
        onClickJoinNow$Action(e) {
            var r = this.controller;
            return se.Logger.startActiveSpan("OnClickJoinNow__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnClickJoinNow"), t.setAttribute("outsystems.function.key", "e524bd03-1380-4a32-a549-a330b0d629f1"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onClickJoinNow$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
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
            return H.defaultTimeout
        }
    };
    o(i, "ControllerInner");
    let u = i;
    Nr = u
}
var Nr, Lr = new se.Controller.ControllerFactory(Nr, F);
var Rt = p,
    kl = E.PlaceholderContent,
    Vl = E.IteratorPlaceholderContent,
    ye = class ye extends V.BaseWebBlock {
        static get displayName() {
            return "Home.WhatsAppBanner"
        }
        static getAttributes() {
            return {
                codeFunction: "WhatsAppBanner",
                functionKey: "7faebb1e-157d-40a8-b3ae-58cda0cd0dff",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Home.WhatsAppBanner.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [Y]
        }
        get modelFactory() {
            return rr
        }
        get controllerFactory() {
            return Lr
        }
        get title() {
            return ""
        }
        internalRender() {
            let i = this.model,
                d = this.controller,
                e = this.idService,
                r = d.validationService,
                t = this.widgetsRecordProvider,
                s = d.callContext(),
                n = ye.ifWidget,
                a = ye.textWidget,
                c = ye.asPrimitiveValue,
                f = ye.getTranslation,
                m = this;
            return Oe.createElement("div", this.getRootNodeProperties(), Oe.createElement(h, {
                align: 0,
                animate: !1,
                gridProperties: {
                    classes: "OSInline"
                },
                style: "whatsapp-banner-container",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "WhatsappSection"
                },
                _widgetRecordProvider: t
            }, Oe.createElement(C, {
                style: "banner-description",
                text: [a(f("KglJHT9r9U+AN_RNe7PMbw#Value", "WhatsApp updates exclusively for Partners"))],
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }), Oe.createElement(Q, {
                gridProperties: {
                    classes: "OSFillParent"
                },
                image: Rt.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.phone2501.png"),
                style: "phone-image",
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            }), Oe.createElement(Y, {
                getOwnerSpan: o(function() {
                    return m.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return m.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    title: Rt.Injector.resolve(Rt.ServiceNames.TranslationsService).getMessage("hGrjsVin_k+o09Xv10+QZA#Value.-1338680608.1", "Join Now")
                },
                events: {
                    _handleError: o(function(l) {
                        d.handleError(l)
                    }, "_handleError"),
                    onClick$Action: o(function() {
                        var l = s.clone();
                        d.onClickJoinNow$Action(d.callContext(l))
                    }, "onClick$Action")
                },
                _validationProps: {
                    validationService: r
                },
                _idProps: {
                    service: e,
                    uuid: "3",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                _dependencies: []
            })))
        }
    };
o(ye, "View");
var Ht = ye,
    Il = Ht;
var b = J(q());
var Fr = {};

function Tt(u, i, d, e) {
    let r = JSON.parse(u.Response);
    r != null && r.Error || r != null && r.error ? u.isCFDPasswordCreationFailed = !0 : u.isCFDPasswordCreationFailed = !1
}
o(Tt, "default");

function kt(u, i, d, e) {
    let r = localStorage.getItem("token");
    r && (u.AuthToken = r)
}
o(kt, "default");

function Vt(u, i, d) {
    let e = document.querySelector(".cfd-modal-is-open");
    e == null || e.classList.remove("cfd-modal-is-open")
}
o(Vt, "default");

function It(u, i, d, e) {
    let r = document.getElementById(u.eyeButtonId),
        t = document.getElementById(u.passwordInputId),
        s = document.getElementById(u.passwordHiddenIcon),
        n = document.getElementById(u.passwordVisibleIcon);
    t.type === "text" ? (t.type = "password", n.classList.remove("hidden"), s.classList.add("hidden")) : (t.type = "text", n.classList.add("hidden"), s.classList.remove("hidden"))
}
o(It, "default");

function xt(u, i, d, e) {
    let r = localStorage.getItem("token");
    u.Token = r
}
o(xt, "default");

function Dt(u, i, d, e) {
    let r = {
            LengthCheck: u.password,
            UpperAndLowerCaseCheck: u.password,
            NumberCheck: u.password,
            SpecialCharacterCheck: u.password,
            RequiredCheck: u.password
        },
        t = yup.object().shape({
            UpperAndLowerCaseCheck: yup.string().matches(/(?=.*[A-Z])(?=.*[a-z])/, "HasAtLeastOneUppercaseAndOneLowercase"),
            LengthCheck: yup.string().min(8, "minLength").max(25, "maxLength"),
            NumberCheck: yup.string().matches(/[0-9]/, "HasAtLeastOneNumber"),
            SpecialCharacterCheck: yup.string().matches(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/, "HasAtLeastOneSpecialCharacter"),
            RequiredCheck: yup.string().required()
        }),
        {
            errors: s
        } = validate(t, r);
    u.LengthError = s.LengthCheck ? "true" : "false", u.UppercaseAndLowercaseError = s.UpperAndLowerCaseCheck ? "true" : "false", u.NumberError = s.NumberCheck ? "true" : "false", u.SpecialCharacterError = s.SpecialCharacterCheck ? "true" : "false", u.RequiredError = !!s.RequiredCheck
}
o(Dt, "default");
var v = p; {
    let i = class i extends v.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, Fr);
            var s = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _submitHandler$Action() {
            return this.hasOwnProperty("__submitHandler$Action") || (this.__submitHandler$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    s = this.idService;
                return v.Logger.startActiveSpan("SubmitHandler", function(n) {
                    return n && (n.setAttribute("code.function", "SubmitHandler"), n.setAttribute("outsystems.function.key", "33ccdc6d-5f83-4e81-a45c-7f4e92f08556"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), v.Flow.tryFinally(function() {
                        t.ensureControllerAlive("SubmitHandler"), e = t.callContext(e);
                        var a = new v.DataTypes.VariableHolder,
                            c = new v.DataTypes.VariableHolder,
                            f = new v.DataTypes.VariableHolder,
                            m = new v.DataTypes.VariableHolder,
                            l = new v.DataTypes.VariableHolder(new v.DataTypes.JSONSerializeOutputType);
                        return v.Flow.executeAsyncFlow(function() {
                            return v.Flow.executeSequence(function() {
                                if (v.BuiltinFunctions.length(r.variables.userInputVar) > 0) return v.Flow.executeSequence(function() {
                                    if (!(r.variables.cfdCommissionsPasswordErrorsVar.lengthAttr === "true" || r.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneUppercaseAndOneLowercaseAttr === "true" || r.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneNumberAttr === "true")) return r.variables.isSubmittingVar = !0, m.value = v.Logger.startActiveSpan("JavaScript1", function(g) {
                                        g && (g.setAttribute("code.function", "JavaScript1"), g.setAttribute("outsystems.function.key", "ace35d5a-8d78-4bac-8b49-5ccc28d85e94"), g.setAttribute("outsystems.function.owner.name", "PartnersHub"), g.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), g.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                        try {
                                            return t.safeExecuteJSNode(kt, "JavaScript1", "SubmitHandler", {
                                                AuthToken: v.DataConversion.JSNodeParamConverter.to("", v.DataTypes.DataTypes.Text)
                                            }, function(k) {
                                                var B = new(t.constructor.getVariableGroupType("PartnersHub.CFDs.CFDCommissionsModal.SubmitHandler$javaScript1JSResult"));
                                                return B.authTokenOut = v.DataConversion.JSNodeParamConverter.from(k.AuthToken, v.DataTypes.DataTypes.Text), B
                                            }, {}, {})
                                        } finally {
                                            g && g.end()
                                        }
                                    }, 1), r.flush(), we.postTradingPlatformPasswordChange$Action(_.getServer(), function() {
                                        var g = new Wt;
                                        return g.new_passwordAttr = r.variables.userInputVar, g.platformAttr = "mt5", g
                                    }(), m.value.authTokenOut, _.getAppId(), "EN", e).then(function(g) {
                                        c.value = g
                                    }).then(function() {
                                        return r.flush(), we.postMT5NewAccount$Action(function() {
                                            var g = new Lt;
                                            return g.mt5_new_accountAttr = "1", g.account_typeAttr = "gaming", g.nameAttr = _.getname(), g.emailAttr = _.getemail(), g.leverageAttr = v.BuiltinFunctions.integerToLongInteger(500), g.mainPasswordAttr = r.variables.userInputVar, g.productAttr = "standard", g
                                        }(), m.value.authTokenOut, _.getAppId(), "EN", _.getServer(), e).then(function(g) {
                                            a.value = g
                                        })
                                    }).then(function() {
                                        l.value.jSONOut = v.JSONUtils.serializeToJSON(a.value.responseOut, !1, !1), f.value = v.Logger.startActiveSpan("JavaScript2", function(g) {
                                            g && (g.setAttribute("code.function", "JavaScript2"), g.setAttribute("outsystems.function.key", "73aeb36f-b0b2-4044-8979-ec6d7689feaa"), g.setAttribute("outsystems.function.owner.name", "PartnersHub"), g.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), g.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                            try {
                                                return t.safeExecuteJSNode(Tt, "JavaScript2", "SubmitHandler", {
                                                    Response: v.DataConversion.JSNodeParamConverter.to(l.value.jSONOut, v.DataTypes.DataTypes.Text),
                                                    isCFDPasswordCreationFailed: v.DataConversion.JSNodeParamConverter.to(!1, v.DataTypes.DataTypes.Boolean)
                                                }, function(k) {
                                                    var B = new(t.constructor.getVariableGroupType("PartnersHub.CFDs.CFDCommissionsModal.SubmitHandler$javaScript2JSResult"));
                                                    return B.isCFDPasswordCreationFailedOut = v.DataConversion.JSNodeParamConverter.from(k.isCFDPasswordCreationFailed, v.DataTypes.DataTypes.Boolean), B
                                                }, {}, {})
                                            } finally {
                                                g && g.end()
                                            }
                                        }, 1), r.variables.isSubmittingVar = !1
                                    }).then(function() {
                                        f.value.isCFDPasswordCreationFailedOut === !1 ? _.setisCFDPasswordCreationSucceeded(!0) : _.setisCFDPasswordCreationFailed(!0)
                                    })
                                });
                                r.variables.requiredInputErrorVar = !0
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__submitHandler$Action
        }
        set _submitHandler$Action(e) {
            this.__submitHandler$Action = e
        }
        get _onToggleSidebar$Action() {
            return this.hasOwnProperty("__onToggleSidebar$Action") || (this.__onToggleSidebar$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    s = this.idService;
                return v.Logger.startActiveSpan("OnToggleSidebar", function(n) {
                    n && (n.setAttribute("code.function", "OnToggleSidebar"), n.setAttribute("outsystems.function.key", "5a712797-1ea4-48dc-aaf3-64e51aff42ec"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnToggleSidebar"), e = t.callContext(e), _.setshowCFDCommissionModal(!1), _.setshowCFDCommisionBanner(!_.getisCFDPasswordCreationSucceeded())
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onToggleSidebar$Action
        }
        set _onToggleSidebar$Action(e) {
            this.__onToggleSidebar$Action = e
        }
        get _sideBarSetModalId$Action() {
            return this.hasOwnProperty("__sideBarSetModalId$Action") || (this.__sideBarSetModalId$Action = function(e, r) {
                var t = this.model,
                    s = this.controller,
                    n = this.idService;
                return v.Logger.startActiveSpan("SideBarSetModalId", function(a) {
                    a && (a.setAttribute("code.function", "SideBarSetModalId"), a.setAttribute("outsystems.function.key", "7e8f1ef5-8c5c-4008-b7b5-49b59e9f8b89"), a.setAttribute("outsystems.function.owner.name", "PartnersHub"), a.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        s.ensureControllerAlive("SideBarSetModalId"), r = s.callContext(r);
                        var c = new v.DataTypes.VariableHolder(new(s.constructor.getVariableGroupType("PartnersHub.CFDs.CFDCommissionsModal.SideBarSetModalId$vars")));
                        c.value.modalIdInLocal = e, _.setCFDsModalId(c.value.modalIdInLocal)
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__sideBarSetModalId$Action
        }
        set _sideBarSetModalId$Action(e) {
            this.__sideBarSetModalId$Action = e
        }
        get _okHandler$Action() {
            return this.hasOwnProperty("__okHandler$Action") || (this.__okHandler$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    s = this.idService;
                return v.Logger.startActiveSpan("OkHandler", function(n) {
                    n && (n.setAttribute("code.function", "OkHandler"), n.setAttribute("outsystems.function.key", "9495fee5-304f-4c70-a9d3-abb8d5922f14"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OkHandler"), e = t.callContext(e);
                        var a = new v.DataTypes.VariableHolder;
                        a.value = R.sidebarClose$Action(_.getCFDsModalId(), e), _.setisCFDPasswordCreationSucceeded(!1), _.setshowCFDCommissionModal(!1), _.setshowCFDCommisionBanner(!1), v.Logger.startActiveSpan("JavaScript1", function(c) {
                            c && (c.setAttribute("code.function", "JavaScript1"), c.setAttribute("outsystems.function.key", "d4391505-887e-4c16-8a0d-c22424dc2785"), c.setAttribute("outsystems.function.owner.name", "PartnersHub"), c.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(Vt, "JavaScript1", "OkHandler", null, function(f) {}, {}, {})
                            } finally {
                                c && c.end()
                            }
                        }, 1)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__okHandler$Action
        }
        set _okHandler$Action(e) {
            this.__okHandler$Action = e
        }
        get _tryAgainHandler$Action() {
            return this.hasOwnProperty("__tryAgainHandler$Action") || (this.__tryAgainHandler$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    s = this.idService;
                return v.Logger.startActiveSpan("TryAgainHandler", function(n) {
                    n && (n.setAttribute("code.function", "TryAgainHandler"), n.setAttribute("outsystems.function.key", "9ce69f26-e83e-4c3b-93ab-12c31902fef3"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("TryAgainHandler"), e = t.callContext(e), _.setisCFDPasswordCreationFailed(!1), r.variables.userInputVar = "", r.variables.cfdCommissionsPasswordErrorsVar.lengthAttr = "", r.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneUppercaseAndOneLowercaseAttr = "", r.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneNumberAttr = "", r.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneSpecialCharacterAttr = ""
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__tryAgainHandler$Action
        }
        set _tryAgainHandler$Action(e) {
            this.__tryAgainHandler$Action = e
        }
        get _eyeButtonHandler$Action() {
            return this.hasOwnProperty("__eyeButtonHandler$Action") || (this.__eyeButtonHandler$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    s = this.idService;
                return v.Logger.startActiveSpan("EyeButtonHandler", function(n) {
                    n && (n.setAttribute("code.function", "EyeButtonHandler"), n.setAttribute("outsystems.function.key", "b0a6056d-e53f-4698-877f-11494e9bd2e5"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("EyeButtonHandler"), e = t.callContext(e), v.Logger.startActiveSpan("JavaScript1", function(a) {
                            a && (a.setAttribute("code.function", "JavaScript1"), a.setAttribute("outsystems.function.key", "f1746020-d948-4b2d-b91e-ed43cab0b9e8"), a.setAttribute("outsystems.function.owner.name", "PartnersHub"), a.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(It, "JavaScript1", "EyeButtonHandler", {
                                    eyeButtonId: v.DataConversion.JSNodeParamConverter.to(s.getId("EyeButton"), v.DataTypes.DataTypes.Text),
                                    passwordHiddenIcon: v.DataConversion.JSNodeParamConverter.to(s.getId("HidePassword"), v.DataTypes.DataTypes.Text),
                                    passwordInputId: v.DataConversion.JSNodeParamConverter.to(s.getId("CFDPasswordInput"), v.DataTypes.DataTypes.Text),
                                    passwordVisibleIcon: v.DataConversion.JSNodeParamConverter.to(s.getId("ShowPassword"), v.DataTypes.DataTypes.Text)
                                }, function(c) {}, {}, {})
                            } finally {
                                a && a.end()
                            }
                        }, 1)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__eyeButtonHandler$Action
        }
        set _eyeButtonHandler$Action(e) {
            this.__eyeButtonHandler$Action = e
        }
        get _closeButtonHandler$Action() {
            return this.hasOwnProperty("__closeButtonHandler$Action") || (this.__closeButtonHandler$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    s = this.idService;
                return v.Logger.startActiveSpan("CloseButtonHandler", function(n) {
                    n && (n.setAttribute("code.function", "CloseButtonHandler"), n.setAttribute("outsystems.function.key", "b382129d-cbda-485b-b0ec-7368c47cce8d"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("CloseButtonHandler"), e = t.callContext(e);
                        var a = new v.DataTypes.VariableHolder;
                        a.value = R.sidebarClose$Action(_.getCFDsModalId(), e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__closeButtonHandler$Action
        }
        set _closeButtonHandler$Action(e) {
            this.__closeButtonHandler$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    s = this.idService;
                return v.Logger.startActiveSpan("OnReady", function(n) {
                    return n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "d72911e0-d32e-47cc-8248-857ca91dc943"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), v.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var a = new v.DataTypes.VariableHolder;
                        return v.Flow.executeAsyncFlow(function() {
                            return a.value = v.Logger.startActiveSpan("GetAuthToken", function(c) {
                                c && (c.setAttribute("code.function", "GetAuthToken"), c.setAttribute("outsystems.function.key", "25a5ed18-bcc0-40d0-8870-d56dce645ff8"), c.setAttribute("outsystems.function.owner.name", "PartnersHub"), c.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return t.safeExecuteJSNode(xt, "GetAuthToken", "OnReady", {
                                        Token: v.DataConversion.JSNodeParamConverter.to("", v.DataTypes.DataTypes.Text)
                                    }, function(f) {
                                        var m = new(t.constructor.getVariableGroupType("PartnersHub.CFDs.CFDCommissionsModal.OnReady$getAuthTokenJSResult"));
                                        return m.tokenOut = v.DataConversion.JSNodeParamConverter.from(f.Token, v.DataTypes.DataTypes.Text), m
                                    }, {}, {})
                                } finally {
                                    c && c.end()
                                }
                            }, 1), r.flush(), H.cFDCommissionModalFlow$Action(a.value.tokenOut, e)
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _cFDPasswordInputOnChange$Action() {
            return this.hasOwnProperty("__cFDPasswordInputOnChange$Action") || (this.__cFDPasswordInputOnChange$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    s = this.idService;
                return v.Logger.startActiveSpan("CFDPasswordInputOnChange", function(n) {
                    n && (n.setAttribute("code.function", "CFDPasswordInputOnChange"), n.setAttribute("outsystems.function.key", "f0f6420d-3eaf-4684-92b3-26b6da744d0a"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("CFDPasswordInputOnChange"), e = t.callContext(e);
                        var a = new v.DataTypes.VariableHolder;
                        a.value = v.Logger.startActiveSpan("JavaScript1", function(c) {
                            c && (c.setAttribute("code.function", "JavaScript1"), c.setAttribute("outsystems.function.key", "a0a24214-f1da-4023-bf69-9ca9afc3b960"), c.setAttribute("outsystems.function.owner.name", "PartnersHub"), c.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(Dt, "JavaScript1", "CFDPasswordInputOnChange", {
                                    password: v.DataConversion.JSNodeParamConverter.to(r.variables.userInputVar, v.DataTypes.DataTypes.Text),
                                    LengthError: v.DataConversion.JSNodeParamConverter.to("", v.DataTypes.DataTypes.Text),
                                    UppercaseAndLowercaseError: v.DataConversion.JSNodeParamConverter.to("", v.DataTypes.DataTypes.Text),
                                    NumberError: v.DataConversion.JSNodeParamConverter.to("", v.DataTypes.DataTypes.Text),
                                    SpecialCharacterError: v.DataConversion.JSNodeParamConverter.to("", v.DataTypes.DataTypes.Text),
                                    RequiredError: v.DataConversion.JSNodeParamConverter.to(!1, v.DataTypes.DataTypes.Boolean)
                                }, function(f) {
                                    var m = new(t.constructor.getVariableGroupType("PartnersHub.CFDs.CFDCommissionsModal.CFDPasswordInputOnChange$javaScript1JSResult"));
                                    return m.lengthErrorOut = v.DataConversion.JSNodeParamConverter.from(f.LengthError, v.DataTypes.DataTypes.Text), m.uppercaseAndLowercaseErrorOut = v.DataConversion.JSNodeParamConverter.from(f.UppercaseAndLowercaseError, v.DataTypes.DataTypes.Text), m.numberErrorOut = v.DataConversion.JSNodeParamConverter.from(f.NumberError, v.DataTypes.DataTypes.Text), m.specialCharacterErrorOut = v.DataConversion.JSNodeParamConverter.from(f.SpecialCharacterError, v.DataTypes.DataTypes.Text), m.requiredErrorOut = v.DataConversion.JSNodeParamConverter.from(f.RequiredError, v.DataTypes.DataTypes.Boolean), m
                                }, {}, {})
                            } finally {
                                c && c.end()
                            }
                        }, 1), r.variables.cfdCommissionsPasswordErrorsVar.lengthAttr = a.value.lengthErrorOut, r.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneUppercaseAndOneLowercaseAttr = a.value.uppercaseAndLowercaseErrorOut, r.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneNumberAttr = a.value.numberErrorOut, r.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneSpecialCharacterAttr = a.value.specialCharacterErrorOut, r.variables.requiredInputErrorVar = a.value.requiredErrorOut
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__cFDPasswordInputOnChange$Action
        }
        set _cFDPasswordInputOnChange$Action(e) {
            this.__cFDPasswordInputOnChange$Action = e
        }
        submitHandler$Action(e) {
            var r = this.controller;
            return v.Logger.startActiveSpan("SubmitHandler__proxy", function(t) {
                return t && (t.setAttribute("code.function", "SubmitHandler"), t.setAttribute("outsystems.function.key", "33ccdc6d-5f83-4e81-a45c-7f4e92f08556"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), v.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._submitHandler$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onToggleSidebar$Action(e) {
            var r = this.controller;
            return v.Logger.startActiveSpan("OnToggleSidebar__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnToggleSidebar"), t.setAttribute("outsystems.function.key", "5a712797-1ea4-48dc-aaf3-64e51aff42ec"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onToggleSidebar$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        sideBarSetModalId$Action(e, r) {
            var t = this.controller;
            return v.Logger.startActiveSpan("SideBarSetModalId__proxy", function(s) {
                s && (s.setAttribute("code.function", "SideBarSetModalId"), s.setAttribute("outsystems.function.key", "7e8f1ef5-8c5c-4008-b7b5-49b59e9f8b89"), s.setAttribute("outsystems.function.owner.name", "PartnersHub"), s.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._sideBarSetModalId$Action, r, e)
                } finally {
                    s && s.end()
                }
            }, 0)
        }
        okHandler$Action(e) {
            var r = this.controller;
            return v.Logger.startActiveSpan("OkHandler__proxy", function(t) {
                t && (t.setAttribute("code.function", "OkHandler"), t.setAttribute("outsystems.function.key", "9495fee5-304f-4c70-a9d3-abb8d5922f14"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._okHandler$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        tryAgainHandler$Action(e) {
            var r = this.controller;
            return v.Logger.startActiveSpan("TryAgainHandler__proxy", function(t) {
                t && (t.setAttribute("code.function", "TryAgainHandler"), t.setAttribute("outsystems.function.key", "9ce69f26-e83e-4c3b-93ab-12c31902fef3"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._tryAgainHandler$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        eyeButtonHandler$Action(e) {
            var r = this.controller;
            return v.Logger.startActiveSpan("EyeButtonHandler__proxy", function(t) {
                t && (t.setAttribute("code.function", "EyeButtonHandler"), t.setAttribute("outsystems.function.key", "b0a6056d-e53f-4698-877f-11494e9bd2e5"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._eyeButtonHandler$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        closeButtonHandler$Action(e) {
            var r = this.controller;
            return v.Logger.startActiveSpan("CloseButtonHandler__proxy", function(t) {
                t && (t.setAttribute("code.function", "CloseButtonHandler"), t.setAttribute("outsystems.function.key", "b382129d-cbda-485b-b0ec-7368c47cce8d"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._closeButtonHandler$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var r = this.controller;
            return v.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "d72911e0-d32e-47cc-8248-857ca91dc943"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), v.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        cFDPasswordInputOnChange$Action(e) {
            var r = this.controller;
            return v.Logger.startActiveSpan("CFDPasswordInputOnChange__proxy", function(t) {
                t && (t.setAttribute("code.function", "CFDPasswordInputOnChange"), t.setAttribute("outsystems.function.key", "f0f6420d-3eaf-4684-92b3-26b6da744d0a"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._cFDPasswordInputOnChange$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    s = this.idService;
                return r.onReady$Action(e)
            }), this._onReadyEventHandler
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
            return H.defaultTimeout
        }
    };
    o(i, "ControllerInner");
    let u = i;
    Ae = u, Ae.registerVariableGroupType("PartnersHub.CFDs.CFDCommissionsModal.SubmitHandler$javaScript2JSResult", [{
        name: "isCFDPasswordCreationFailed",
        attrName: "isCFDPasswordCreationFailedOut",
        mandatory: !0,
        dataType: v.DataTypes.DataTypes.Boolean,
        defaultValue: o(function() {
            return !1
        }, "defaultValue")
    }]), Ae.registerVariableGroupType("PartnersHub.CFDs.CFDCommissionsModal.SubmitHandler$javaScript1JSResult", [{
        name: "AuthToken",
        attrName: "authTokenOut",
        mandatory: !0,
        dataType: v.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }]), Ae.registerVariableGroupType("PartnersHub.CFDs.CFDCommissionsModal.SideBarSetModalId$vars", [{
        name: "ModalId",
        attrName: "modalIdInLocal",
        mandatory: !0,
        dataType: v.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }]), Ae.registerVariableGroupType("PartnersHub.CFDs.CFDCommissionsModal.OnReady$getAuthTokenJSResult", [{
        name: "Token",
        attrName: "tokenOut",
        mandatory: !0,
        dataType: v.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }]), Ae.registerVariableGroupType("PartnersHub.CFDs.CFDCommissionsModal.CFDPasswordInputOnChange$javaScript1JSResult", [{
        name: "LengthError",
        attrName: "lengthErrorOut",
        mandatory: !0,
        dataType: v.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "UppercaseAndLowercaseError",
        attrName: "uppercaseAndLowercaseErrorOut",
        mandatory: !0,
        dataType: v.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "NumberError",
        attrName: "numberErrorOut",
        mandatory: !0,
        dataType: v.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "SpecialCharacterError",
        attrName: "specialCharacterErrorOut",
        mandatory: !0,
        dataType: v.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "RequiredError",
        attrName: "requiredErrorOut",
        mandatory: !0,
        dataType: v.DataTypes.DataTypes.Boolean,
        defaultValue: o(function() {
            return !1
        }, "defaultValue")
    }])
}
var Ae, $r = new v.Controller.ControllerFactory(Ae, F);
var pe = p,
    Wr = E.PlaceholderContent,
    pc = E.IteratorPlaceholderContent,
    Ce = class Ce extends V.BaseWebBlock {
        static get displayName() {
            return "CFDs.CFDCommissionsModal"
        }
        static getAttributes() {
            return {
                codeFunction: "CFDCommissionsModal",
                functionKey: "3ed098a3-b19e-4e15-9db5-0c4360b2963c",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.CFDs.CFDCommissionsModal.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [je, I, Y]
        }
        get modelFactory() {
            return nr
        }
        get controllerFactory() {
            return $r
        }
        get title() {
            return ""
        }
        internalRender() {
            let i = this.model,
                d = this.controller,
                e = this.idService,
                r = d.validationService,
                t = this.widgetsRecordProvider,
                s = d.callContext(),
                n = Ce.ifWidget,
                a = Ce.textWidget,
                c = Ce.asPrimitiveValue,
                f = Ce.getTranslation,
                m = this;
            return b.createElement("div", this.getRootNodeProperties(), b.createElement(je, {
                getOwnerSpan: o(function() {
                    return m.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return m.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    FooterInfo: i.getCachedValue(e.getId("gaYdsQI1P0KfVe44QwZicQ.FooterInfo"), function() {
                        return function() {
                            var l = new Ft;
                            return l
                        }()
                    }),
                    HasCustomButton: !0,
                    IsSidebarOpen: _.getshowCFDCommissionModal(),
                    ContentClassName: "cfd-commissions-modal-body",
                    HeaderInfo: i.getCachedValue(e.getId("gaYdsQI1P0KfVe44QwZicQ.HeaderInfo"), function() {
                        return function() {
                            var l = new $t;
                            return l.customRightIconAttr = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M16.125 16.875L12 12.7188L7.84375 16.875C7.65625 17.0625 7.34375 17.0625 7.125 16.875C6.9375 16.6562 6.9375 16.3438 7.125 16.1562L11.2812 12L7.15625 7.875C6.9375 7.6875 6.9375 7.375 7.15625 7.15625C7.34375 6.96875 7.65625 6.96875 7.84375 7.15625L12 11.3125L16.125 7.15625C16.3125 6.96875 16.625 6.96875 16.8438 7.15625C17.0312 7.375 17.0312 7.6875 16.8438 7.875L12.6875 12L16.8438 16.1562C17.0312 16.3438 17.0312 16.6562 16.8438 16.875C16.625 17.0625 16.3125 17.0625 16.125 16.875Z" fill="black" fill-opacity="0.72"/>\r
</svg>`, l.showLeftButtonAttr = !1, l.showRightButtonAttr = !0, l.titleAttr = "Enable CFDs commissions", l
                        }()
                    })
                },
                events: {
                    _handleError: o(function(l) {
                        d.handleError(l)
                    }, "_handleError"),
                    toggleSidebar$Action: o(function(l, g) {
                        var k = s.clone();
                        d.onToggleSidebar$Action(d.callContext(k))
                    }, "toggleSidebar$Action"),
                    headerRightButtonAction$Action: o(function() {
                        var l = s.clone();
                        d.closeButtonHandler$Action(d.callContext(l))
                    }, "headerRightButtonAction$Action"),
                    setModalId$Action: o(function(l) {
                        var g = s.clone();
                        d.sideBarSetModalId$Action(l, d.callContext(g))
                    }, "setModalId$Action")
                },
                _validationProps: {
                    validationService: r
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    bodyContent: new Wr(function() {
                        return [b.createElement(h, {
                            align: 0,
                            animate: !1,
                            style: "cfd-commissions-modal-content",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "content"
                            },
                            _widgetRecordProvider: t
                        }, b.createElement(P, {
                            extendedProperties: {
                                className: i.getCachedValue(e.getId("PasswordScreen.class"), function() {
                                    return _.getisCFDPasswordCreationFailed() === !0 || _.getisCFDPasswordCreationSucceeded() === !0 ? "hidden" : ""
                                }, function() {
                                    return _.getisCFDPasswordCreationFailed()
                                }, function() {
                                    return _.getisCFDPasswordCreationSucceeded()
                                })
                            },
                            tag: "div",
                            _idProps: {
                                service: e,
                                name: "PasswordScreen"
                            },
                            _widgetRecordProvider: t
                        }, b.createElement(C, {
                            style: "cfd-commissions-modal-text font-size-s display-block",
                            text: ["Your MT5 account is ready for receiving commissions. Set a password to enable it."],
                            _idProps: {
                                service: e,
                                uuid: "3"
                            },
                            _widgetRecordProvider: t
                        }), b.createElement(D, {
                            extendedProperties: {
                                className: "font-size-s margin-bottom-s password-input-label"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            _idProps: {
                                service: e,
                                uuid: "4"
                            },
                            _widgetRecordProvider: t
                        }, b.createElement(C, {
                            text: ["Password"],
                            _idProps: {
                                service: e,
                                name: "InputLabel"
                            },
                            _widgetRecordProvider: t
                        })), b.createElement(h, {
                            align: 0,
                            animate: !1,
                            style: "padding-bottom-base",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "6"
                            },
                            _widgetRecordProvider: t
                        }, b.createElement(P, {
                            extendedProperties: {
                                className: "password-input"
                            },
                            tag: "div",
                            _idProps: {
                                service: e,
                                name: "InputField"
                            },
                            _widgetRecordProvider: t
                        }, b.createElement(Bt, {
                            _validationProps: {
                                validationService: r
                            },
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: 1,
                            mandatory: !0,
                            maxLength: 25,
                            onChange: o(function() {
                                var l = s.clone();
                                d.cFDPasswordInputOnChange$Action(d.callContext(l))
                            }, "onChange"),
                            prompt: "Enter your password",
                            style: i.getCachedValue(e.getId("CFDPasswordInput.Style"), function() {
                                return i.variables.requiredInputErrorVar ? "form-control padding-right-xxl not-valid" : "form-control padding-right-xxl"
                            }, function() {
                                return i.variables.requiredInputErrorVar
                            }),
                            variable: i.createVariable(pe.DataTypes.DataTypes.Text, i.variables.userInputVar, function(l) {
                                i.variables.userInputVar = l
                            }),
                            _idProps: {
                                service: e,
                                name: "CFDPasswordInput"
                            },
                            _widgetRecordProvider: t
                        }), b.createElement(P, {
                            extendedEvents: {
                                onClick: o(function() {
                                    var l = s.clone();
                                    d.eyeButtonHandler$Action(d.callContext(l))
                                }, "onClick")
                            },
                            extendedProperties: {
                                className: "password-input-button"
                            },
                            tag: "button",
                            _idProps: {
                                service: e,
                                name: "EyeButton"
                            },
                            _widgetRecordProvider: t
                        }, b.createElement(P, {
                            extendedProperties: {
                                className: "hidden"
                            },
                            tag: "span",
                            _idProps: {
                                service: e,
                                name: "HidePassword"
                            },
                            _widgetRecordProvider: t
                        }, b.createElement(I, {
                            getOwnerSpan: o(function() {
                                return m.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return m.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                SVGCode: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24px" height="24px" role="img"><path d="M9.32 11.813C7.64 13.375 6.508 15.25 6 16.5c.508 1.25 1.64 3.125 3.32 4.688S13.227 24 16 24c2.734 0 4.96-1.25 6.64-2.812 1.68-1.563 2.813-3.438 3.36-4.688-.547-1.25-1.68-3.125-3.36-4.687S18.735 9 16 9c-2.773 0-5 1.25-6.68 2.813M16 7.75c3.125 0 5.664 1.445 7.5 3.164 1.836 1.68 3.047 3.711 3.633 5.117a1.4 1.4 0 0 1 0 .977c-.586 1.367-1.797 3.398-3.633 5.117S19.125 25.25 16 25.25c-3.164 0-5.703-1.406-7.54-3.125-1.835-1.719-3.046-3.75-3.632-5.117a1.4 1.4 0 0 1 0-.977c.586-1.406 1.797-3.437 3.633-5.117C10.297 9.195 12.836 7.75 16 7.75m-3.75 8.75c0 1.367.703 2.578 1.875 3.281 1.133.664 2.578.664 3.75 0 1.133-.703 1.875-1.914 1.875-3.281 0-1.328-.742-2.54-1.875-3.242-1.172-.664-2.617-.664-3.75 0-1.172.703-1.875 1.914-1.875 3.242m8.75 0c0 1.797-.977 3.438-2.5 4.336-1.562.898-3.477.898-5 0A4.97 4.97 0 0 1 11 16.5c0-1.758.938-3.398 2.5-4.297 1.523-.898 3.438-.898 5 0 1.523.899 2.5 2.54 2.5 4.297"></path></svg>'
                            },
                            events: {
                                _handleError: o(function(l) {
                                    d.handleError(l)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "11",
                                alias: "2"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })), b.createElement(P, {
                            tag: "span",
                            _idProps: {
                                service: e,
                                name: "ShowPassword"
                            },
                            _widgetRecordProvider: t
                        }, b.createElement(I, {
                            getOwnerSpan: o(function() {
                                return m.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return m.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                SVGCode: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24px" height="24px" role="img"><path d="m4.477 6.656 23.789 18.75c.234.196.312.625.078.86a.584.584 0 0 1-.86.117L3.734 7.633c-.273-.195-.351-.625-.117-.86.196-.273.625-.351.86-.117m22.656 10.352c-.39.937-1.094 2.226-2.11 3.476l-.976-.78A14.4 14.4 0 0 0 26 16.5c-.547-1.25-1.68-3.125-3.36-4.687S18.735 9 16 9c-1.562 0-2.969.43-4.18 1.055l-1.054-.86C12.25 8.335 13.969 7.75 16 7.75c3.125 0 5.664 1.445 7.5 3.164 1.836 1.68 3.047 3.711 3.633 5.117a1.4 1.4 0 0 1 0 .977M6.938 12.555l.976.78A12.6 12.6 0 0 0 6 16.5c.508 1.25 1.64 3.125 3.32 4.688S13.227 24 16 24c1.523 0 2.93-.39 4.14-1.016l1.055.86A10.1 10.1 0 0 1 16 25.25c-3.164 0-5.703-1.406-7.54-3.125-1.835-1.719-3.046-3.75-3.632-5.117a1.4 1.4 0 0 1 0-.977c.39-.937 1.094-2.226 2.11-3.476M16 21.5c-2.773 0-5-2.227-5-5 0-.234 0-.469.04-.703l1.21.937A3.73 3.73 0 0 0 16 20.25c.195 0 .43 0 .625-.04l1.21.938A5 5 0 0 1 16 21.5m5-5v.04c0 .233-.04.468-.078.702l-1.211-.937c-.117-1.992-1.719-3.516-3.711-3.516-.234 0-.469 0-.664.04l-1.211-.938c.586-.235 1.21-.391 1.875-.391 2.734 0 5 2.266 5 5"></path></svg>'
                            },
                            events: {
                                _handleError: o(function(l) {
                                    d.handleError(l)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "13",
                                alias: "3"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })))), n(i.variables.requiredInputErrorVar, !1, this, function() {
                            return [b.createElement(C, {
                                extendedProperties: {
                                    className: "font-size-xs margin-top-s display-block password-input-error"
                                },
                                text: ["Password is required."],
                                _idProps: {
                                    service: e,
                                    name: "RequiredErrorOnSubmit"
                                },
                                _widgetRecordProvider: t
                            })]
                        }, function() {
                            return []
                        })), b.createElement(P, {
                            extendedProperties: {
                                className: "cfd-commissions-password-policy"
                            },
                            tag: "ul",
                            _idProps: {
                                service: e,
                                name: "Validations"
                            },
                            _widgetRecordProvider: t
                        }, b.createElement(P, {
                            extendedProperties: {
                                className: i.getCachedValue(e.getId("4g6BY5kaa0WX_FwBJqokBg.class"), function() {
                                    return i.variables.cfdCommissionsPasswordErrorsVar.lengthAttr === "false" ? "cfd-input-validation valid" : i.variables.cfdCommissionsPasswordErrorsVar.lengthAttr === "true" ? "cfd-input-validation not-valid" : "cfd-input-validation"
                                }, function() {
                                    return i.variables.cfdCommissionsPasswordErrorsVar.lengthAttr
                                })
                            },
                            tag: "li",
                            _idProps: {
                                service: e,
                                uuid: "16"
                            },
                            _widgetRecordProvider: t
                        }, b.createElement(P, {
                            extendedProperties: {
                                className: i.getCachedValue(e.getId("ErrorIcon.class"), function() {
                                    return i.variables.cfdCommissionsPasswordErrorsVar.lengthAttr === "true" ? "display-block" : "hidden"
                                }, function() {
                                    return i.variables.cfdCommissionsPasswordErrorsVar.lengthAttr
                                })
                            },
                            tag: "span",
                            _idProps: {
                                service: e,
                                name: "ErrorIcon"
                            },
                            _widgetRecordProvider: t
                        }, b.createElement(I, {
                            getOwnerSpan: o(function() {
                                return m.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return m.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                SVGCode: `<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M6 12.5C3.84375 12.5 1.875 11.375 0.796875 9.5C-0.28125 7.64844 -0.28125 5.375 0.796875 3.5C1.875 1.64844 3.84375 0.5 6 0.5C8.13281 0.5 10.1016 1.64844 11.1797 3.5C12.2578 5.375 12.2578 7.64844 11.1797 9.5C10.1016 11.375 8.13281 12.5 6 12.5ZM4.10156 4.60156C3.86719 4.83594 3.86719 5.1875 4.10156 5.39844L5.20312 6.5L4.10156 7.60156C3.86719 7.83594 3.86719 8.1875 4.10156 8.39844C4.3125 8.63281 4.66406 8.63281 4.875 8.39844L5.97656 7.29688L7.07812 8.39844C7.3125 8.63281 7.66406 8.63281 7.875 8.39844C8.10938 8.1875 8.10938 7.83594 7.875 7.60156L6.77344 6.5L7.875 5.39844C8.10938 5.1875 8.10938 4.83594 7.875 4.60156C7.66406 4.39062 7.3125 4.39062 7.07812 4.60156L5.97656 5.70312L4.875 4.60156C4.66406 4.39062 4.3125 4.39062 4.10156 4.60156Z" fill="#DC2020"/>\r
</svg>`
                            },
                            events: {
                                _handleError: o(function(l) {
                                    d.handleError(l)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "18",
                                alias: "4"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })), b.createElement(P, {
                            extendedProperties: {
                                className: i.getCachedValue(e.getId("SuccessIcon.class"), function() {
                                    return i.variables.cfdCommissionsPasswordErrorsVar.lengthAttr === "false" ? "display-block" : "hidden"
                                }, function() {
                                    return i.variables.cfdCommissionsPasswordErrorsVar.lengthAttr
                                })
                            },
                            tag: "span",
                            _idProps: {
                                service: e,
                                name: "SuccessIcon"
                            },
                            _widgetRecordProvider: t
                        }, b.createElement(I, {
                            getOwnerSpan: o(function() {
                                return m.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return m.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                SVGCode: `<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M6 12.5C3.84375 12.5 1.875 11.375 0.796875 9.5C-0.28125 7.64844 -0.28125 5.375 0.796875 3.5C1.875 1.64844 3.84375 0.5 6 0.5C8.13281 0.5 10.1016 1.64844 11.1797 3.5C12.2578 5.375 12.2578 7.64844 11.1797 9.5C10.1016 11.375 8.13281 12.5 6 12.5ZM8.64844 5.39844H8.625C8.85938 5.1875 8.85938 4.83594 8.625 4.60156C8.41406 4.39062 8.0625 4.39062 7.85156 4.60156L5.25 7.22656L4.14844 6.125C3.91406 5.89062 3.5625 5.89062 3.35156 6.125C3.11719 6.33594 3.11719 6.6875 3.35156 6.89844L4.85156 8.39844C5.0625 8.63281 5.41406 8.63281 5.64844 8.39844L8.64844 5.39844Z" fill="#29823B"/>\r
</svg>`
                            },
                            events: {
                                _handleError: o(function(l) {
                                    d.handleError(l)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "20",
                                alias: "5"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })), b.createElement(P, {
                            extendedProperties: {
                                className: i.getCachedValue(e.getId("OutlineIcon.class"), function() {
                                    return pe.BuiltinFunctions.length(i.variables.cfdCommissionsPasswordErrorsVar.lengthAttr) === 0 ? "display-block" : "hidden"
                                }, function() {
                                    return i.variables.cfdCommissionsPasswordErrorsVar.lengthAttr
                                })
                            },
                            tag: "span",
                            _idProps: {
                                service: e,
                                name: "OutlineIcon"
                            },
                            _widgetRecordProvider: t
                        }, b.createElement(I, {
                            getOwnerSpan: o(function() {
                                return m.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return m.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                SVGCode: `<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M10.875 6.5C10.875 4.76562 9.9375 3.17188 8.4375 2.28125C6.91406 1.41406 5.0625 1.41406 3.5625 2.28125C2.03906 3.17188 1.125 4.76562 1.125 6.5C1.125 8.25781 2.03906 9.85156 3.5625 10.7422C5.0625 11.6094 6.91406 11.6094 8.4375 10.7422C9.9375 9.85156 10.875 8.25781 10.875 6.5ZM0 6.5C0 4.36719 1.125 2.39844 3 1.32031C4.85156 0.242188 7.125 0.242188 9 1.32031C10.8516 2.39844 12 4.36719 12 6.5C12 8.65625 10.8516 10.625 9 11.7031C7.125 12.7812 4.85156 12.7812 3 11.7031C1.125 10.625 0 8.65625 0 6.5Z" fill="black" fill-opacity="0.72"/>\r
</svg>`
                            },
                            events: {
                                _handleError: o(function(l) {
                                    d.handleError(l)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "22",
                                alias: "6"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })), b.createElement(P, {
                            extendedProperties: {
                                className: "font-size-xs margin-none"
                            },
                            tag: "p",
                            _idProps: {
                                service: e,
                                uuid: "23"
                            },
                            _widgetRecordProvider: t
                        }, "8\u201325 characters long")), b.createElement(P, {
                            extendedProperties: {
                                className: i.getCachedValue(e.getId("Mri_HZEegkmyoDpEbszaPw.class"), function() {
                                    return i.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneUppercaseAndOneLowercaseAttr === "false" ? "cfd-input-validation valid" : i.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneUppercaseAndOneLowercaseAttr === "true" ? "cfd-input-validation not-valid" : "cfd-input-validation"
                                }, function() {
                                    return i.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneUppercaseAndOneLowercaseAttr
                                })
                            },
                            tag: "li",
                            _idProps: {
                                service: e,
                                uuid: "24"
                            },
                            _widgetRecordProvider: t
                        }, b.createElement(P, {
                            extendedProperties: {
                                className: i.getCachedValue(e.getId("ErrorIcon2.class"), function() {
                                    return i.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneUppercaseAndOneLowercaseAttr === "true" ? "display-block" : "hidden"
                                }, function() {
                                    return i.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneUppercaseAndOneLowercaseAttr
                                })
                            },
                            tag: "span",
                            _idProps: {
                                service: e,
                                name: "ErrorIcon2"
                            },
                            _widgetRecordProvider: t
                        }, b.createElement(I, {
                            getOwnerSpan: o(function() {
                                return m.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return m.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                SVGCode: `<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M6 12.5C3.84375 12.5 1.875 11.375 0.796875 9.5C-0.28125 7.64844 -0.28125 5.375 0.796875 3.5C1.875 1.64844 3.84375 0.5 6 0.5C8.13281 0.5 10.1016 1.64844 11.1797 3.5C12.2578 5.375 12.2578 7.64844 11.1797 9.5C10.1016 11.375 8.13281 12.5 6 12.5ZM4.10156 4.60156C3.86719 4.83594 3.86719 5.1875 4.10156 5.39844L5.20312 6.5L4.10156 7.60156C3.86719 7.83594 3.86719 8.1875 4.10156 8.39844C4.3125 8.63281 4.66406 8.63281 4.875 8.39844L5.97656 7.29688L7.07812 8.39844C7.3125 8.63281 7.66406 8.63281 7.875 8.39844C8.10938 8.1875 8.10938 7.83594 7.875 7.60156L6.77344 6.5L7.875 5.39844C8.10938 5.1875 8.10938 4.83594 7.875 4.60156C7.66406 4.39062 7.3125 4.39062 7.07812 4.60156L5.97656 5.70312L4.875 4.60156C4.66406 4.39062 4.3125 4.39062 4.10156 4.60156Z" fill="#DC2020"/>\r
</svg>`
                            },
                            events: {
                                _handleError: o(function(l) {
                                    d.handleError(l)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "26",
                                alias: "7"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })), b.createElement(P, {
                            extendedProperties: {
                                className: i.getCachedValue(e.getId("SuccessIcon2.class"), function() {
                                    return i.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneUppercaseAndOneLowercaseAttr === "false" ? "display-block" : "hidden"
                                }, function() {
                                    return i.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneUppercaseAndOneLowercaseAttr
                                })
                            },
                            tag: "span",
                            _idProps: {
                                service: e,
                                name: "SuccessIcon2"
                            },
                            _widgetRecordProvider: t
                        }, b.createElement(I, {
                            getOwnerSpan: o(function() {
                                return m.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return m.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                SVGCode: `<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M6 12.5C3.84375 12.5 1.875 11.375 0.796875 9.5C-0.28125 7.64844 -0.28125 5.375 0.796875 3.5C1.875 1.64844 3.84375 0.5 6 0.5C8.13281 0.5 10.1016 1.64844 11.1797 3.5C12.2578 5.375 12.2578 7.64844 11.1797 9.5C10.1016 11.375 8.13281 12.5 6 12.5ZM8.64844 5.39844H8.625C8.85938 5.1875 8.85938 4.83594 8.625 4.60156C8.41406 4.39062 8.0625 4.39062 7.85156 4.60156L5.25 7.22656L4.14844 6.125C3.91406 5.89062 3.5625 5.89062 3.35156 6.125C3.11719 6.33594 3.11719 6.6875 3.35156 6.89844L4.85156 8.39844C5.0625 8.63281 5.41406 8.63281 5.64844 8.39844L8.64844 5.39844Z" fill="#29823B"/>\r
</svg>`
                            },
                            events: {
                                _handleError: o(function(l) {
                                    d.handleError(l)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "28",
                                alias: "8"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })), b.createElement(P, {
                            extendedProperties: {
                                className: i.getCachedValue(e.getId("OutlineIcon2.class"), function() {
                                    return pe.BuiltinFunctions.length(i.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneUppercaseAndOneLowercaseAttr) === 0 ? "display-block" : "hidden"
                                }, function() {
                                    return i.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneUppercaseAndOneLowercaseAttr
                                })
                            },
                            tag: "span",
                            _idProps: {
                                service: e,
                                name: "OutlineIcon2"
                            },
                            _widgetRecordProvider: t
                        }, b.createElement(I, {
                            getOwnerSpan: o(function() {
                                return m.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return m.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                SVGCode: `<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M10.875 6.5C10.875 4.76562 9.9375 3.17188 8.4375 2.28125C6.91406 1.41406 5.0625 1.41406 3.5625 2.28125C2.03906 3.17188 1.125 4.76562 1.125 6.5C1.125 8.25781 2.03906 9.85156 3.5625 10.7422C5.0625 11.6094 6.91406 11.6094 8.4375 10.7422C9.9375 9.85156 10.875 8.25781 10.875 6.5ZM0 6.5C0 4.36719 1.125 2.39844 3 1.32031C4.85156 0.242188 7.125 0.242188 9 1.32031C10.8516 2.39844 12 4.36719 12 6.5C12 8.65625 10.8516 10.625 9 11.7031C7.125 12.7812 4.85156 12.7812 3 11.7031C1.125 10.625 0 8.65625 0 6.5Z" fill="black" fill-opacity="0.72"/>\r
</svg>`
                            },
                            events: {
                                _handleError: o(function(l) {
                                    d.handleError(l)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "30",
                                alias: "9"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })), b.createElement(P, {
                            extendedProperties: {
                                className: "font-size-xs margin-none"
                            },
                            tag: "p",
                            _idProps: {
                                service: e,
                                uuid: "31"
                            },
                            _widgetRecordProvider: t
                        }, "At least one uppercase and one lowercase letter")), b.createElement(P, {
                            extendedProperties: {
                                className: i.getCachedValue(e.getId("QMibd+0FZESCvOe7b2HM+A.class"), function() {
                                    return i.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneNumberAttr === "false" ? "cfd-input-validation valid" : i.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneNumberAttr === "true" ? "cfd-input-validation not-valid" : "cfd-input-validation"
                                }, function() {
                                    return i.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneNumberAttr
                                })
                            },
                            tag: "li",
                            _idProps: {
                                service: e,
                                uuid: "32"
                            },
                            _widgetRecordProvider: t
                        }, b.createElement(P, {
                            extendedProperties: {
                                className: i.getCachedValue(e.getId("ErrorIcon3.class"), function() {
                                    return i.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneNumberAttr === "true" ? "display-block" : "hidden"
                                }, function() {
                                    return i.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneNumberAttr
                                })
                            },
                            tag: "span",
                            _idProps: {
                                service: e,
                                name: "ErrorIcon3"
                            },
                            _widgetRecordProvider: t
                        }, b.createElement(I, {
                            getOwnerSpan: o(function() {
                                return m.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return m.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                SVGCode: `<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M6 12.5C3.84375 12.5 1.875 11.375 0.796875 9.5C-0.28125 7.64844 -0.28125 5.375 0.796875 3.5C1.875 1.64844 3.84375 0.5 6 0.5C8.13281 0.5 10.1016 1.64844 11.1797 3.5C12.2578 5.375 12.2578 7.64844 11.1797 9.5C10.1016 11.375 8.13281 12.5 6 12.5ZM4.10156 4.60156C3.86719 4.83594 3.86719 5.1875 4.10156 5.39844L5.20312 6.5L4.10156 7.60156C3.86719 7.83594 3.86719 8.1875 4.10156 8.39844C4.3125 8.63281 4.66406 8.63281 4.875 8.39844L5.97656 7.29688L7.07812 8.39844C7.3125 8.63281 7.66406 8.63281 7.875 8.39844C8.10938 8.1875 8.10938 7.83594 7.875 7.60156L6.77344 6.5L7.875 5.39844C8.10938 5.1875 8.10938 4.83594 7.875 4.60156C7.66406 4.39062 7.3125 4.39062 7.07812 4.60156L5.97656 5.70312L4.875 4.60156C4.66406 4.39062 4.3125 4.39062 4.10156 4.60156Z" fill="#DC2020"/>\r
</svg>`
                            },
                            events: {
                                _handleError: o(function(l) {
                                    d.handleError(l)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "34",
                                alias: "10"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })), b.createElement(P, {
                            extendedProperties: {
                                className: i.getCachedValue(e.getId("SuccessIcon3.class"), function() {
                                    return i.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneNumberAttr === "false" ? "display-block" : "hidden"
                                }, function() {
                                    return i.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneNumberAttr
                                })
                            },
                            tag: "span",
                            _idProps: {
                                service: e,
                                name: "SuccessIcon3"
                            },
                            _widgetRecordProvider: t
                        }, b.createElement(I, {
                            getOwnerSpan: o(function() {
                                return m.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return m.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                SVGCode: `<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M6 12.5C3.84375 12.5 1.875 11.375 0.796875 9.5C-0.28125 7.64844 -0.28125 5.375 0.796875 3.5C1.875 1.64844 3.84375 0.5 6 0.5C8.13281 0.5 10.1016 1.64844 11.1797 3.5C12.2578 5.375 12.2578 7.64844 11.1797 9.5C10.1016 11.375 8.13281 12.5 6 12.5ZM8.64844 5.39844H8.625C8.85938 5.1875 8.85938 4.83594 8.625 4.60156C8.41406 4.39062 8.0625 4.39062 7.85156 4.60156L5.25 7.22656L4.14844 6.125C3.91406 5.89062 3.5625 5.89062 3.35156 6.125C3.11719 6.33594 3.11719 6.6875 3.35156 6.89844L4.85156 8.39844C5.0625 8.63281 5.41406 8.63281 5.64844 8.39844L8.64844 5.39844Z" fill="#29823B"/>\r
</svg>`
                            },
                            events: {
                                _handleError: o(function(l) {
                                    d.handleError(l)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "36",
                                alias: "11"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })), b.createElement(P, {
                            extendedProperties: {
                                className: i.getCachedValue(e.getId("OutlineIcon3.class"), function() {
                                    return pe.BuiltinFunctions.length(i.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneNumberAttr) === 0 ? "display-block" : "hidden"
                                }, function() {
                                    return i.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneNumberAttr
                                })
                            },
                            tag: "span",
                            _idProps: {
                                service: e,
                                name: "OutlineIcon3"
                            },
                            _widgetRecordProvider: t
                        }, b.createElement(I, {
                            getOwnerSpan: o(function() {
                                return m.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return m.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                SVGCode: `<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M10.875 6.5C10.875 4.76562 9.9375 3.17188 8.4375 2.28125C6.91406 1.41406 5.0625 1.41406 3.5625 2.28125C2.03906 3.17188 1.125 4.76562 1.125 6.5C1.125 8.25781 2.03906 9.85156 3.5625 10.7422C5.0625 11.6094 6.91406 11.6094 8.4375 10.7422C9.9375 9.85156 10.875 8.25781 10.875 6.5ZM0 6.5C0 4.36719 1.125 2.39844 3 1.32031C4.85156 0.242188 7.125 0.242188 9 1.32031C10.8516 2.39844 12 4.36719 12 6.5C12 8.65625 10.8516 10.625 9 11.7031C7.125 12.7812 4.85156 12.7812 3 11.7031C1.125 10.625 0 8.65625 0 6.5Z" fill="black" fill-opacity="0.72"/>\r
</svg>`
                            },
                            events: {
                                _handleError: o(function(l) {
                                    d.handleError(l)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "38",
                                alias: "12"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })), b.createElement(P, {
                            extendedProperties: {
                                className: "font-size-xs margin-none"
                            },
                            tag: "p",
                            _idProps: {
                                service: e,
                                uuid: "39"
                            },
                            _widgetRecordProvider: t
                        }, "At least one number")), b.createElement(P, {
                            extendedProperties: {
                                className: i.getCachedValue(e.getId("E7sKJY+FXUeVAT1O1Q2z0A.class"), function() {
                                    return i.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneSpecialCharacterAttr === "false" ? "cfd-input-validation valid" : i.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneSpecialCharacterAttr === "true" ? "cfd-input-validation not-valid" : "cfd-input-validation"
                                }, function() {
                                    return i.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneSpecialCharacterAttr
                                })
                            },
                            tag: "li",
                            _idProps: {
                                service: e,
                                uuid: "40"
                            },
                            _widgetRecordProvider: t
                        }, b.createElement(P, {
                            extendedProperties: {
                                className: i.getCachedValue(e.getId("ErrorIcon4.class"), function() {
                                    return i.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneSpecialCharacterAttr === "true" ? "display-block" : "hidden"
                                }, function() {
                                    return i.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneSpecialCharacterAttr
                                })
                            },
                            tag: "span",
                            _idProps: {
                                service: e,
                                name: "ErrorIcon4"
                            },
                            _widgetRecordProvider: t
                        }, b.createElement(I, {
                            getOwnerSpan: o(function() {
                                return m.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return m.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                SVGCode: `<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M6 12.5C3.84375 12.5 1.875 11.375 0.796875 9.5C-0.28125 7.64844 -0.28125 5.375 0.796875 3.5C1.875 1.64844 3.84375 0.5 6 0.5C8.13281 0.5 10.1016 1.64844 11.1797 3.5C12.2578 5.375 12.2578 7.64844 11.1797 9.5C10.1016 11.375 8.13281 12.5 6 12.5ZM4.10156 4.60156C3.86719 4.83594 3.86719 5.1875 4.10156 5.39844L5.20312 6.5L4.10156 7.60156C3.86719 7.83594 3.86719 8.1875 4.10156 8.39844C4.3125 8.63281 4.66406 8.63281 4.875 8.39844L5.97656 7.29688L7.07812 8.39844C7.3125 8.63281 7.66406 8.63281 7.875 8.39844C8.10938 8.1875 8.10938 7.83594 7.875 7.60156L6.77344 6.5L7.875 5.39844C8.10938 5.1875 8.10938 4.83594 7.875 4.60156C7.66406 4.39062 7.3125 4.39062 7.07812 4.60156L5.97656 5.70312L4.875 4.60156C4.66406 4.39062 4.3125 4.39062 4.10156 4.60156Z" fill="#DC2020"/>\r
</svg>`
                            },
                            events: {
                                _handleError: o(function(l) {
                                    d.handleError(l)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "42",
                                alias: "13"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })), b.createElement(P, {
                            extendedProperties: {
                                className: i.getCachedValue(e.getId("SuccessIcon4.class"), function() {
                                    return i.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneSpecialCharacterAttr === "false" ? "display-block" : "hidden"
                                }, function() {
                                    return i.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneSpecialCharacterAttr
                                })
                            },
                            tag: "span",
                            _idProps: {
                                service: e,
                                name: "SuccessIcon4"
                            },
                            _widgetRecordProvider: t
                        }, b.createElement(I, {
                            getOwnerSpan: o(function() {
                                return m.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return m.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                SVGCode: `<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M6 12.5C3.84375 12.5 1.875 11.375 0.796875 9.5C-0.28125 7.64844 -0.28125 5.375 0.796875 3.5C1.875 1.64844 3.84375 0.5 6 0.5C8.13281 0.5 10.1016 1.64844 11.1797 3.5C12.2578 5.375 12.2578 7.64844 11.1797 9.5C10.1016 11.375 8.13281 12.5 6 12.5ZM8.64844 5.39844H8.625C8.85938 5.1875 8.85938 4.83594 8.625 4.60156C8.41406 4.39062 8.0625 4.39062 7.85156 4.60156L5.25 7.22656L4.14844 6.125C3.91406 5.89062 3.5625 5.89062 3.35156 6.125C3.11719 6.33594 3.11719 6.6875 3.35156 6.89844L4.85156 8.39844C5.0625 8.63281 5.41406 8.63281 5.64844 8.39844L8.64844 5.39844Z" fill="#29823B"/>\r
</svg>`
                            },
                            events: {
                                _handleError: o(function(l) {
                                    d.handleError(l)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "44",
                                alias: "14"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })), b.createElement(P, {
                            extendedProperties: {
                                className: i.getCachedValue(e.getId("OutlineIcon4.class"), function() {
                                    return pe.BuiltinFunctions.length(i.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneSpecialCharacterAttr) === 0 ? "display-block" : "hidden"
                                }, function() {
                                    return i.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneSpecialCharacterAttr
                                })
                            },
                            tag: "span",
                            _idProps: {
                                service: e,
                                name: "OutlineIcon4"
                            },
                            _widgetRecordProvider: t
                        }, b.createElement(I, {
                            getOwnerSpan: o(function() {
                                return m.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return m.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                SVGCode: `<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M10.875 6.5C10.875 4.76562 9.9375 3.17188 8.4375 2.28125C6.91406 1.41406 5.0625 1.41406 3.5625 2.28125C2.03906 3.17188 1.125 4.76562 1.125 6.5C1.125 8.25781 2.03906 9.85156 3.5625 10.7422C5.0625 11.6094 6.91406 11.6094 8.4375 10.7422C9.9375 9.85156 10.875 8.25781 10.875 6.5ZM0 6.5C0 4.36719 1.125 2.39844 3 1.32031C4.85156 0.242188 7.125 0.242188 9 1.32031C10.8516 2.39844 12 4.36719 12 6.5C12 8.65625 10.8516 10.625 9 11.7031C7.125 12.7812 4.85156 12.7812 3 11.7031C1.125 10.625 0 8.65625 0 6.5Z" fill="black" fill-opacity="0.72"/>\r
</svg>`
                            },
                            events: {
                                _handleError: o(function(l) {
                                    d.handleError(l)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "46",
                                alias: "15"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })), b.createElement(P, {
                            extendedProperties: {
                                className: "font-size-xs margin-none"
                            },
                            tag: "p",
                            _idProps: {
                                service: e,
                                uuid: "47"
                            },
                            _widgetRecordProvider: t
                        }, "At least one special character")))), b.createElement(P, {
                            extendedProperties: {
                                className: i.getCachedValue(e.getId("FailedScreen.class"), function() {
                                    return _.getisCFDPasswordCreationFailed() === !0 ? "cfd-commissions-modal-screen" : "hidden"
                                }, function() {
                                    return _.getisCFDPasswordCreationFailed()
                                })
                            },
                            tag: "div",
                            _idProps: {
                                service: e,
                                name: "FailedScreen"
                            },
                            _widgetRecordProvider: t
                        }, b.createElement(Q, {
                            extendedProperties: {
                                className: "cfd-commissions-modal-screen-img"
                            },
                            image: pe.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.SpreadRisks.png"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "49"
                            },
                            _widgetRecordProvider: t
                        }), b.createElement(P, {
                            extendedProperties: {
                                className: "cfd-commissions-modal-screen-heading"
                            },
                            tag: "h4",
                            _idProps: {
                                service: e,
                                uuid: "50"
                            },
                            _widgetRecordProvider: t
                        }, "Password creation failed"), b.createElement(P, {
                            extendedProperties: {
                                className: "cfd-commissions-modal-screen-text"
                            },
                            tag: "p",
                            _idProps: {
                                service: e,
                                uuid: "51"
                            },
                            _widgetRecordProvider: t
                        }, "There was an issue creating your password.")), b.createElement(P, {
                            extendedProperties: {
                                className: i.getCachedValue(e.getId("SuccessScreen.class"), function() {
                                    return _.getisCFDPasswordCreationSucceeded() === !0 ? "cfd-commissions-modal-screen" : "hidden"
                                }, function() {
                                    return _.getisCFDPasswordCreationSucceeded()
                                })
                            },
                            tag: "div",
                            _idProps: {
                                service: e,
                                name: "SuccessScreen"
                            },
                            _widgetRecordProvider: t
                        }, b.createElement(Q, {
                            extendedProperties: {
                                className: "cfd-commissions-modal-screen-img"
                            },
                            image: pe.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.twentyfourhourstrading.png"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "53"
                            },
                            _widgetRecordProvider: t
                        }), b.createElement(P, {
                            extendedProperties: {
                                className: "cfd-commissions-modal-screen-heading"
                            },
                            tag: "h4",
                            _idProps: {
                                service: e,
                                uuid: "54"
                            },
                            _widgetRecordProvider: t
                        }, "Almost there"), b.createElement(P, {
                            extendedProperties: {
                                className: "cfd-commissions-modal-screen-text"
                            },
                            tag: "p",
                            _idProps: {
                                service: e,
                                uuid: "55"
                            },
                            _widgetRecordProvider: t
                        }, "Your account manager will contact you soon.")))]
                    }),
                    customButton: new Wr(function() {
                        return [n(_.getisCFDPasswordCreationFailed() === !1 && _.getisCFDPasswordCreationSucceeded() === !1, !1, this, function() {
                            return [b.createElement(Y, {
                                getOwnerSpan: o(function() {
                                    return m.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: o(function() {
                                    return m.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    title: "Set up password",
                                    borderRadius: "35px",
                                    Width: "100%",
                                    enabled: i.variables.isSubmittingVar === !1,
                                    isLoading: i.variables.isSubmittingVar
                                },
                                events: {
                                    _handleError: o(function(l) {
                                        d.handleError(l)
                                    }, "_handleError"),
                                    onClick$Action: o(function() {
                                        return Promise.resolve().then(function() {
                                            var l = s.clone();
                                            return d.submitHandler$Action(d.callContext(l))
                                        })
                                    }, "onClick$Action")
                                },
                                _validationProps: {
                                    validationService: r
                                },
                                _idProps: {
                                    service: e,
                                    name: "SubmitButton2",
                                    alias: "16"
                                },
                                _widgetRecordProvider: t,
                                _dependencies: []
                            })]
                        }, function() {
                            return []
                        }), n(_.getisCFDPasswordCreationFailed() === !0, !1, this, function() {
                            return [b.createElement(Y, {
                                getOwnerSpan: o(function() {
                                    return m.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: o(function() {
                                    return m.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    title: "Try again",
                                    borderRadius: "35px",
                                    Width: "100%"
                                },
                                events: {
                                    _handleError: o(function(l) {
                                        d.handleError(l)
                                    }, "_handleError"),
                                    onClick$Action: o(function() {
                                        var l = s.clone();
                                        d.tryAgainHandler$Action(d.callContext(l))
                                    }, "onClick$Action")
                                },
                                _validationProps: {
                                    validationService: r
                                },
                                _idProps: {
                                    service: e,
                                    name: "TryAgainButton2",
                                    alias: "17"
                                },
                                _widgetRecordProvider: t,
                                _dependencies: []
                            })]
                        }, function() {
                            return []
                        }), n(_.getisCFDPasswordCreationSucceeded() === !0, !1, this, function() {
                            return [b.createElement(Y, {
                                getOwnerSpan: o(function() {
                                    return m.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: o(function() {
                                    return m.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    title: "OK",
                                    Width: "100%",
                                    borderRadius: "35px"
                                },
                                events: {
                                    _handleError: o(function(l) {
                                        d.handleError(l)
                                    }, "_handleError"),
                                    onClick$Action: o(function() {
                                        var l = s.clone();
                                        d.okHandler$Action(d.callContext(l))
                                    }, "onClick$Action")
                                },
                                _validationProps: {
                                    validationService: r
                                },
                                _idProps: {
                                    service: e,
                                    name: "OkButton2",
                                    alias: "18"
                                },
                                _widgetRecordProvider: t,
                                _dependencies: []
                            })]
                        }, function() {
                            return []
                        })]
                    })
                },
                _dependencies: [c(i.variables.isSubmittingVar), c(i.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneSpecialCharacterAttr), c(i.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneNumberAttr), c(i.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneUppercaseAndOneLowercaseAttr), c(i.variables.cfdCommissionsPasswordErrorsVar.lengthAttr), c(i.variables.requiredInputErrorVar), c(i.variables.userInputVar), c(_.getisCFDPasswordCreationSucceeded()), c(_.getisCFDPasswordCreationFailed())]
            }))
        }
    };
o(Ce, "View");
var Nt = Ce,
    Cc = Nt;
export {
    Oi as a, Qi as b, pa as c, at as d, bo as e, Ps as f, Bs as g, vl as h, Il as i, Cc as j
};