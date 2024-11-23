import {
    a as yi
} from "./_oschunk-KDN7NWSL.js";
import {
    a as bi
} from "./_oschunk-UTCQ4N5S.js";
import "./_oschunk-PES4FCGG.js";
import {
    a as pr
} from "./_oschunk-K6JXNTSB.js";
import "./_oschunk-CDQG5BIU.js";
import {
    a as St
} from "./_oschunk-ZDT7T2SV.js";
import {
    a as gr
} from "./_oschunk-TO5AYNPX.js";
import {
    a as k
} from "./_oschunk-UOGDTLIS.js";
import "./_oschunk-EK5A3TSV.js";
import "./_oschunk-CXWYKNLS.js";
import "./_oschunk-5FKAOJ4S.js";
import "./_oschunk-S4T4FX3G.js";
import "./_oschunk-RL72664U.js";
import "./_oschunk-SELPP7T7.js";
import "./_oschunk-CPXZZQHI.js";
import "./_oschunk-COGS3DBX.js";
import {
    a as vr
} from "./_oschunk-AP2LGV3I.js";
import "./_oschunk-QM6TPNLS.js";
import "./_oschunk-HMQSENZ4.js";
import "./_oschunk-PISKEOZB.js";
import {
    a as fr
} from "./_oschunk-XLHEEBMK.js";
import "./_oschunk-ANY3DTL7.js";
import {
    a as ur
} from "./_oschunk-SLDZWO3Q.js";
import {
    a as mr
} from "./_oschunk-22UUXQ4S.js";
import {
    a as te
} from "./_oschunk-QCCZFQH6.js";
import "./_oschunk-4YFBPYRH.js";
import {
    a as Ne
} from "./_oschunk-NR4KXK35.js";
import {
    a as P,
    b as Fe,
    d as m,
    e as vi,
    f as ee,
    g as bt,
    h as gi,
    m as ve,
    n as z,
    o as pi,
    p as x,
    q as hi,
    r as _i,
    s as At,
    u as A
} from "./_oschunk-OO36B6PN.js";
import "./_oschunk-7BKGLZMI.js";
import {
    a as L
} from "./_oschunk-6WALBPGV.js";
import {
    a as Z,
    g as V,
    i as E
} from "./_oschunk-IL57OEHH.js";
import "./_oschunk-4XEIQ5YX.js";
import "./_oschunk-RFCNRBVT.js";
import "./_oschunk-Y3C3IKDF.js";
import "./_oschunk-CMUJJDSY.js";
import {
    a as _,
    b as dr,
    o as I,
    p as O
} from "./_oschunk-DW3HXDMW.js";
import {
    a as et
} from "./_oschunk-PNRBOTIK.js";
import {
    Ff as yt,
    If as fi,
    Od as _e,
    Of as Ye,
    Rc as or,
    a as ue,
    ea as ir,
    hd as Q,
    je as ye,
    od as sr,
    pd as lr,
    sb as ar,
    se as cr,
    td as ui,
    tf as mi,
    yc as B
} from "./_oschunk-JXJHSAQS.js";
import {
    ia as h
} from "./_oschunk-5KJVGEL7.js";
import {
    c as a,
    h as K
} from "./_oschunk-QHO7QY6K.js";
var H = K(Z());
var rt = K(Z());
var tt = h,
    _r = class _r extends tt.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(tt.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(_r, "VariablesRecord");
var Ct = _r;
Ct.init();
var yr = class yr extends tt.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(yr, "WidgetsRecord");
var hr = yr,
    We = class We extends tt.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return Ct
        }
        static getWidgetsRecordConstructor() {
            return hr
        }
        static get hasValidationWidgets() {
            return We._hasValidationWidgetsValue === void 0 && (We._hasValidationWidgetsValue = void 0), We._hasValidationWidgetsValue
        }
        setInputs(i) {}
    };
a(We, "Model");
var Pt = We;
Pt._hasValidationWidgetsValue = void 0;
var Si = new tt.Model.ModelFactory(Pt);
var Ci = {};
var Et = h; {
    let i = class i extends Et.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, Ci);
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
                return Et.Logger.startActiveSpan("SecondaryButtononClick", function(n) {
                    n && (n.setAttribute("code.function", "SecondaryButtononClick"), n.setAttribute("outsystems.function.key", "85847702-398c-43ad-9623-8dd03380c9b8"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("SecondaryButtononClick"), e = t.callContext(e), _.setshowCFDCommissionModal(!0)
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
            return Et.Logger.startActiveSpan("SecondaryButtononClick__proxy", function(t) {
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
            return O.defaultTimeout
        }
    };
    a(i, "ControllerInner");
    let f = i;
    Pi = f
}
var Pi, Ei = new Et.Controller.ControllerFactory(Pi, L);
var Ss = E.PlaceholderContent,
    Cs = E.IteratorPlaceholderContent,
    be = class be extends V.BaseWebBlock {
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
            return [gr]
        }
        get modelFactory() {
            return Si
        }
        get controllerFactory() {
            return Ei
        }
        get title() {
            return ""
        }
        internalRender() {
            let i = this.model,
                c = this.controller,
                e = this.idService,
                r = c.validationService,
                t = this.widgetsRecordProvider,
                s = c.callContext(),
                n = be.ifWidget,
                o = be.textWidget,
                d = be.asPrimitiveValue,
                v = be.getTranslation,
                u = this;
            return rt.createElement("div", this.getRootNodeProperties(), rt.createElement(m, {
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
            }, rt.createElement(A, {
                style: "cfd-commission-banner-title",
                text: ["Enable CFD commissions now!"],
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }), rt.createElement(gr, {
                getOwnerSpan: a(function() {
                    return u.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return u.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    height: i.getCachedValue(e.getId("_Nh3bgxvkkOOaqGVDacy_w.height"), function() {
                        return I.isDesktop$Action(s).isDesktopOut ? "48px" : "32px"
                    }),
                    borderRadius: "35px",
                    title: "Let\u2019s go",
                    Width: i.getCachedValue(e.getId("_Nh3bgxvkkOOaqGVDacy_w.Width"), function() {
                        return I.isDesktop$Action(s).isDesktopOut ? "136px" : "78px"
                    })
                },
                events: {
                    _handleError: a(function(l) {
                        c.handleError(l)
                    }, "_handleError"),
                    onClick$Action: a(function() {
                        var l = s.clone();
                        c.secondaryButtononClick$Action(c.callContext(l))
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
a(be, "View");
var br = be,
    Sr = br;
var $e = K(Z());
var nt = h,
    Pr = class Pr extends nt.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(nt.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(Pr, "VariablesRecord");
var wt = Pr;
wt.init();
var Er = class Er extends nt.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(Er, "WidgetsRecord");
var Cr = Er,
    Me = class Me extends nt.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return wt
        }
        static getWidgetsRecordConstructor() {
            return Cr
        }
        static get hasValidationWidgets() {
            return Me._hasValidationWidgetsValue === void 0 && (Me._hasValidationWidgetsValue = void 0), Me._hasValidationWidgetsValue
        }
        setInputs(i) {}
    };
a(Me, "Model");
var Ot = Me;
Ot._hasValidationWidgetsValue = void 0;
var wi = new nt.Model.ModelFactory(Ot);
var wa = {
        "sVTo9kryAEepay7RxEd2MA#Value.1524116574.1": "\u0627\u0641\u062A\u062D \u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645",
        "J5lNcrQnik2aXzdyKncEuA#Value": "\u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0631\u0648\u0627\u0628\u0637 \u0627\u0644\u0625\u062D\u0627\u0644\u0629 \u0648\u0627\u0644\u062A\u0642\u0627\u0631\u064A\u0631",
        "lpEobJwz70WribG+jUqf7g#Value.1524116574.1": "\u0627\u0641\u062A\u062D \u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645"
    },
    Oa = {
        "sVTo9kryAEepay7RxEd2MA#Value.1524116574.1": "Dashboard \xF6ffnen",
        "J5lNcrQnik2aXzdyKncEuA#Value": "Zugriff auf Ihre Empfehlungslinks und Berichte",
        "lpEobJwz70WribG+jUqf7g#Value.1524116574.1": "Dashboard \xF6ffnen"
    },
    Ra = {
        "sVTo9kryAEepay7RxEd2MA#Value.1524116574.1": "Abrir el panel",
        "J5lNcrQnik2aXzdyKncEuA#Value": "Mis enlaces de referencia y reportes",
        "lpEobJwz70WribG+jUqf7g#Value.1524116574.1": "Abrir el panel"
    },
    Ta = {
        "sVTo9kryAEepay7RxEd2MA#Value.1524116574.1": "Ouvrir le tableau de bord",
        "J5lNcrQnik2aXzdyKncEuA#Value": "Acc\xE9der \xE0 vos liens de parrainage et rapports",
        "lpEobJwz70WribG+jUqf7g#Value.1524116574.1": "Ouvrir le tableau de bord"
    },
    Ha = {
        "sVTo9kryAEepay7RxEd2MA#Value.1524116574.1": "Apri la dashboard",
        "J5lNcrQnik2aXzdyKncEuA#Value": "I miei link di referral e report",
        "lpEobJwz70WribG+jUqf7g#Value.1524116574.1": "Apri la dashboard"
    },
    Va = {
        "sVTo9kryAEepay7RxEd2MA#Value.1524116574.1": "Otw\xF3rz pulpit",
        "J5lNcrQnik2aXzdyKncEuA#Value": "Moje linki polecaj\u0105ce i raporty",
        "lpEobJwz70WribG+jUqf7g#Value.1524116574.1": "Otw\xF3rz pulpit"
    },
    Ia = {
        "sVTo9kryAEepay7RxEd2MA#Value.1524116574.1": "Abrir o painel",
        "J5lNcrQnik2aXzdyKncEuA#Value": "Os meus links de refer\xEAncia e relat\xF3rios",
        "lpEobJwz70WribG+jUqf7g#Value.1524116574.1": "Abrir o painel"
    },
    xa = {
        "sVTo9kryAEepay7RxEd2MA#Value.1524116574.1": "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043A\u0430\u0431\u0438\u043D\u0435\u0442",
        "J5lNcrQnik2aXzdyKncEuA#Value": "\u0414\u043E\u0441\u0442\u0443\u043F \u043A \u0432\u0430\u0448\u0438\u043C \u0440\u0435\u0444\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u043C \u0441\u0441\u044B\u043B\u043A\u0430\u043C \u0438 \u043E\u0442\u0447\u0435\u0442\u0430\u043C",
        "lpEobJwz70WribG+jUqf7g#Value.1524116574.1": "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043A\u0430\u0431\u0438\u043D\u0435\u0442"
    },
    Oi = {
        "ar-001": {
            translations: wa,
            isRTL: !0
        },
        "de-DE": {
            translations: Oa,
            isRTL: !1
        },
        "es-ES": {
            translations: Ra,
            isRTL: !1
        },
        "fr-FR": {
            translations: Ta,
            isRTL: !1
        },
        "it-IT": {
            translations: Ha,
            isRTL: !1
        },
        "pl-PL": {
            translations: Va,
            isRTL: !1
        },
        "pt-PT": {
            translations: Ia,
            isRTL: !1
        },
        "ru-RU": {
            translations: xa,
            isRTL: !1
        }
    };

function wr(f, i, c, e) {
    window.open(f.website_platform_url, "_blank")
}
a(wr, "default");
var me = h; {
    let i = class i extends me.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, Oi);
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
                return me.Logger.startActiveSpan("OpenDashboardOnClick", function(n) {
                    n && (n.setAttribute("code.function", "OpenDashboardOnClick"), n.setAttribute("outsystems.function.key", "488cfb74-db54-422f-af82-92748ec9c8ec"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OpenDashboardOnClick"), e = t.callContext(e), O.rudderstackTrackEvent$Action(function() {
                            var o = new B;
                            return o.actionAttr = "click_cta", o.cta_nameAttr = me.Injector.resolve(me.ServiceNames.TranslationsService).getMessage("lpEobJwz70WribG+jUqf7g#Value.1524116574.1", "Open dashboard"), o.cta_placementAttr = "referral link report section", o
                        }(), "ce_partnershub_form", e), me.Logger.startActiveSpan("JavaScript1", function(o) {
                            o && (o.setAttribute("code.function", "JavaScript1"), o.setAttribute("outsystems.function.key", "e3701746-0dc3-495a-a017-76f77ceee82f"), o.setAttribute("outsystems.function.owner.name", "PartnersHub"), o.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(wr, "JavaScript1", "OpenDashboardOnClick", {
                                    website_platform_url: me.DataConversion.JSNodeParamConverter.to(_.getWebsitePlatformUrl(), me.DataTypes.DataTypes.Text)
                                }, function(d) {}, {}, {})
                            } finally {
                                o && o.end()
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
            return me.Logger.startActiveSpan("OpenDashboardOnClick__proxy", function(t) {
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
            return O.defaultTimeout
        }
    };
    a(i, "ControllerInner");
    let f = i;
    Ri = f
}
var Ri, Ti = new me.Controller.ControllerFactory(Ri, L);
var Hi = h,
    Gs = E.PlaceholderContent,
    Qs = E.IteratorPlaceholderContent,
    Ae = class Ae extends V.BaseWebBlock {
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
            return [te]
        }
        get modelFactory() {
            return wi
        }
        get controllerFactory() {
            return Ti
        }
        get title() {
            return ""
        }
        internalRender() {
            let i = this.model,
                c = this.controller,
                e = this.idService,
                r = c.validationService,
                t = this.widgetsRecordProvider,
                s = c.callContext(),
                n = Ae.ifWidget,
                o = Ae.textWidget,
                d = Ae.asPrimitiveValue,
                v = Ae.getTranslation,
                u = this;
            return $e.createElement("div", this.getRootNodeProperties(), $e.createElement(m, {
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
            }, $e.createElement(A, {
                extendedProperties: {
                    style: "font-size: 16px; font-weight: bold; padding: 0px 10px 0px 0px;"
                },
                text: [o(v("J5lNcrQnik2aXzdyKncEuA#Value", "Access your referral links and reports"))],
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }), $e.createElement(m, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            }, $e.createElement(te, {
                getOwnerSpan: a(function() {
                    return u.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return u.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    borderRadius: "100px",
                    class: "referral-links-reports__button",
                    title: Hi.Injector.resolve(Hi.ServiceNames.TranslationsService).getMessage("sVTo9kryAEepay7RxEd2MA#Value.1524116574.1", "Open dashboard")
                },
                events: {
                    _handleError: a(function(l) {
                        c.handleError(l)
                    }, "_handleError"),
                    onClick$Action: a(function() {
                        var l = s.clone();
                        c.openDashboardOnClick$Action(c.callContext(l))
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
a(Ae, "View");
var Or = Ae,
    Rr = Or;
var ie = K(Z());
var ge = h,
    at = class at extends ge.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ResidenceListResponse", "residenceListResponseVar", "ResidenceListResponse", !0, !1, ge.DataTypes.DataTypes.Record, function() {
                return ge.DataTypes.ImmutableBase.getData(new ar)
            }, !1, ar)].concat(ge.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
        static fromStructure(i) {
            return new at(new at.RecordClass({
                residenceListResponseVar: ge.DataTypes.ImmutableBase.getData(i)
            }))
        }
    };
a(at, "VariablesRecord");
var Rt = at;
Rt.init();
var Hr = class Hr extends ge.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(Hr, "WidgetsRecord");
var Tr = Hr,
    Be = class Be extends ge.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return Rt
        }
        static getWidgetsRecordConstructor() {
            return Tr
        }
        static get hasValidationWidgets() {
            return Be._hasValidationWidgetsValue === void 0 && (Be._hasValidationWidgetsValue = void 0), Be._hasValidationWidgetsValue
        }
        setInputs(i) {}
    };
a(Be, "Model");
var Tt = Be;
Tt._hasValidationWidgetsValue = void 0;
var Ii = new ge.Model.ModelFactory(Tt);
var Da = {
        "zkE0A_QNHUO3f5+rZyPegQ#Value": "\u062E\u0637\u0648\u0629",
        "V_f6UFrIQkCuMDCeq35TIQ#Value": "\u0623\u0643\u0645\u0644 \u0645\u0644\u0641\u064A \u0627\u0644\u0634\u062E\u0635\u064A"
    },
    ka = {
        "zkE0A_QNHUO3f5+rZyPegQ#Value": "Schritt",
        "V_f6UFrIQkCuMDCeq35TIQ#Value": "Mein Profil vervollst\xE4ndigen"
    },
    La = {
        "zkE0A_QNHUO3f5+rZyPegQ#Value": "Step",
        "V_f6UFrIQkCuMDCeq35TIQ#Value": "Completar mi perfil"
    },
    Fa = {
        "zkE0A_QNHUO3f5+rZyPegQ#Value": "\xC9tape",
        "V_f6UFrIQkCuMDCeq35TIQ#Value": "Compl\xE9ter mon profil"
    },
    Na = {
        "zkE0A_QNHUO3f5+rZyPegQ#Value": "Passo",
        "V_f6UFrIQkCuMDCeq35TIQ#Value": "Completa il mio profilo"
    },
    Wa = {
        "zkE0A_QNHUO3f5+rZyPegQ#Value": "Krok",
        "V_f6UFrIQkCuMDCeq35TIQ#Value": "Uzupe\u0142nij m\xF3j profil"
    },
    Ma = {
        "zkE0A_QNHUO3f5+rZyPegQ#Value": "Step",
        "V_f6UFrIQkCuMDCeq35TIQ#Value": "Concluir o meu perfil"
    },
    $a = {
        "zkE0A_QNHUO3f5+rZyPegQ#Value": "\u0428\u0430\u0433",
        "V_f6UFrIQkCuMDCeq35TIQ#Value": "\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u043C\u043E\u0439 \u043F\u0440\u043E\u0444\u0438\u043B\u044C"
    },
    xi = {
        "ar-001": {
            translations: Da,
            isRTL: !0
        },
        "de-DE": {
            translations: ka,
            isRTL: !1
        },
        "es-ES": {
            translations: La,
            isRTL: !1
        },
        "fr-FR": {
            translations: Fa,
            isRTL: !1
        },
        "it-IT": {
            translations: Na,
            isRTL: !1
        },
        "pl-PL": {
            translations: Wa,
            isRTL: !1
        },
        "pt-PT": {
            translations: Ma,
            isRTL: !1
        },
        "ru-RU": {
            translations: $a,
            isRTL: !1
        }
    };

function Vr(f, i, c, e) {
    var t, s, n;
    let r = JSON.parse(f.ResidenceList || JSON.stringify([])).residence_list.find(o => o.value == f.SelectedCitizenship);
    f.isIDVSupported = !!((n = (s = (t = r == null ? void 0 : r.identity) == null ? void 0 : t.services) == null ? void 0 : s.idv) != null && n.is_country_supported)
}
a(Vr, "default");

function Ir(f, i, c, e) {
    f.Token = localStorage.getItem("token")
}
a(Ir, "default");
var R = h; {
    let i = class i extends R.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, xi);
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
                return R.Logger.startActiveSpan("OnClick", function(n) {
                    n && (n.setAttribute("code.function", "OnClick"), n.setAttribute("outsystems.function.key", "7d66109f-ce4d-4eb3-8707-7b6b5fc8a588"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("OnClick"), e = t.callContext(e), R.Navigation.navigateTo(R.Navigation.generateScreenURL("PartnersHub", "RealAccountCreation", {}), R.Transitions.createTransition(R.Transitions.TransitionAnimation.Default), e, !0)
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
                return R.Logger.startActiveSpan("OnReady", function(n) {
                    return n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "9a5b194f-d2cb-43ce-80c6-390c7eeebaa3"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), R.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var o = new R.DataTypes.VariableHolder,
                            d = new R.DataTypes.VariableHolder,
                            v = new R.DataTypes.VariableHolder,
                            u = new R.DataTypes.VariableHolder,
                            l = new R.DataTypes.VariableHolder(new R.DataTypes.JSONSerializeOutputType);
                        return R.Flow.executeAsyncFlow(function() {
                            return u.value = R.Logger.startActiveSpan("GetAuthToken", function(g) {
                                g && (g.setAttribute("code.function", "GetAuthToken"), g.setAttribute("outsystems.function.key", "a90a2d60-98b8-48c2-8c6d-aad580e7b181"), g.setAttribute("outsystems.function.owner.name", "PartnersHub"), g.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), g.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return t.safeExecuteJSNode(Ir, "GetAuthToken", "OnReady", {
                                        Token: R.DataConversion.JSNodeParamConverter.to("", R.DataTypes.DataTypes.Text)
                                    }, function(D) {
                                        var j = new(t.constructor.getVariableGroupType("PartnersHub.Home.CompleteMyProfile.OnReady$getAuthTokenJSResult"));
                                        return j.tokenOut = R.DataConversion.JSNodeParamConverter.from(D.Token, R.DataTypes.DataTypes.Text), j
                                    }, {}, {})
                                } finally {
                                    g && g.end()
                                }
                            }, 1), r.flush(), O.sendResidenceList$Action(e).then(function(g) {
                                d.value = g
                            }).then(function() {
                                return r.flush(), et.getSettings$Action(_.getServer(), u.value.tokenOut, _.getAppId(), "EN", e).then(function(g) {
                                    o.value = g
                                })
                            }).then(function() {
                                r.variables.residenceListResponseVar = d.value.residenceListResponseOut, l.value.jSONOut = R.JSONUtils.serializeToJSON(d.value.residenceListResponseOut, !1, !1), v.value = R.Logger.startActiveSpan("CheckIfIDVIsSupportedJS", function(g) {
                                    g && (g.setAttribute("code.function", "CheckIfIDVIsSupportedJS"), g.setAttribute("outsystems.function.key", "33193da3-481b-4435-9672-2e26c0b62d9e"), g.setAttribute("outsystems.function.owner.name", "PartnersHub"), g.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), g.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return t.safeExecuteJSNode(Vr, "CheckIfIDVIsSupportedJS", "OnReady", {
                                            ResidenceList: R.DataConversion.JSNodeParamConverter.to(l.value.jSONOut, R.DataTypes.DataTypes.Text),
                                            SelectedCitizenship: R.DataConversion.JSNodeParamConverter.to(o.value.responseOut.get_settingsAttr.citizenAttr, R.DataTypes.DataTypes.Text),
                                            isIDVSupported: R.DataConversion.JSNodeParamConverter.to(!1, R.DataTypes.DataTypes.Boolean)
                                        }, function(D) {
                                            var j = new(t.constructor.getVariableGroupType("PartnersHub.Home.CompleteMyProfile.OnReady$checkIfIDVIsSupportedJSJSResult"));
                                            return j.isIDVSupportedOut = R.DataConversion.JSNodeParamConverter.from(D.isIDVSupported, R.DataTypes.DataTypes.Boolean), j
                                        }, {}, {})
                                    } finally {
                                        g && g.end()
                                    }
                                }, 1), _.setRealSignupIsIDVSupported(v.value.isIDVSupportedOut)
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
            return R.Logger.startActiveSpan("OnClick__proxy", function(t) {
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
            return R.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "9a5b194f-d2cb-43ce-80c6-390c7eeebaa3"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), R.Flow.tryFinally(function() {
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
            return O.defaultTimeout
        }
    };
    a(i, "ControllerInner");
    let f = i;
    Ht = f, Ht.registerVariableGroupType("PartnersHub.Home.CompleteMyProfile.OnReady$checkIfIDVIsSupportedJSJSResult", [{
        name: "isIDVSupported",
        attrName: "isIDVSupportedOut",
        mandatory: !0,
        dataType: R.DataTypes.DataTypes.Boolean,
        defaultValue: a(function() {
            return !1
        }, "defaultValue")
    }]), Ht.registerVariableGroupType("PartnersHub.Home.CompleteMyProfile.OnReady$getAuthTokenJSResult", [{
        name: "Token",
        attrName: "tokenOut",
        mandatory: !0,
        dataType: R.DataTypes.DataTypes.Text,
        defaultValue: a(function() {
            return ""
        }, "defaultValue")
    }])
}
var Ht, Di = new R.Controller.ControllerFactory(Ht, L);
var Ua = h,
    za = E.PlaceholderContent,
    Ol = E.IteratorPlaceholderContent,
    Se = class Se extends V.BaseWebBlock {
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
            return [ur]
        }
        get modelFactory() {
            return Ii
        }
        get controllerFactory() {
            return Di
        }
        get title() {
            return ""
        }
        internalRender() {
            let i = this.model,
                c = this.controller,
                e = this.idService,
                r = c.validationService,
                t = this.widgetsRecordProvider,
                s = c.callContext(),
                n = Se.ifWidget,
                o = Se.textWidget,
                d = Se.asPrimitiveValue,
                v = Se.getTranslation,
                u = this;
            return ie.createElement("div", this.getRootNodeProperties(), ie.createElement(m, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: a(function() {
                        var l = s.clone();
                        c.onClick$Action(c.callContext(l))
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
            }, ie.createElement(m, {
                align: 0,
                animate: !1,
                style: "display-flex justify-content-space-between align-items-center",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }, ie.createElement(A, {
                extendedProperties: {
                    style: "font-size: 16px; font-weight: bold;"
                },
                text: [o(v("V_f6UFrIQkCuMDCeq35TIQ#Value", "Complete my profile"))],
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            }), ie.createElement(z, {
                gridProperties: {
                    marginLeft: "0"
                },
                image: Ua.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.rightIcon.png"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "3"
                },
                _widgetRecordProvider: t
            })), ie.createElement(m, {
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
            }, ie.createElement(m, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "5"
                },
                _widgetRecordProvider: t
            }, ie.createElement(x, {
                gridProperties: {
                    classes: "OSFillParent"
                },
                _idProps: {
                    service: e,
                    uuid: "6"
                },
                _widgetRecordProvider: t
            }, o(v("zkE0A_QNHUO3f5+rZyPegQ#Value", "Step ")), ie.createElement(ee, {
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
            }), ie.createElement(ee, {
                gridProperties: {
                    marginLeft: "5px"
                },
                value: _.getCurrentStepTitle(),
                _idProps: {
                    service: e,
                    uuid: "8"
                },
                _widgetRecordProvider: t
            })))), ie.createElement(m, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "9"
                },
                _widgetRecordProvider: t
            }, ie.createElement(ur, {
                getOwnerSpan: a(function() {
                    return u.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return u.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Progress: _.getProgressBarLength(),
                    ProgressColor: ue.color.primary,
                    Thickness: 10
                },
                events: {
                    _handleError: a(function(l) {
                        c.handleError(l)
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
                    content: za.Empty
                },
                _dependencies: []
            }))))
        }
    };
a(Se, "View");
var xr = Se,
    Dr = xr;
var b = K(Z());
var ae = h,
    Fr = class Fr extends ae.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsVertical", "isVerticalIn", "IsVertical", !0, !1, ae.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isVerticalInDataFetchStatus", "_isVerticalInDataFetchStatus", "_isVerticalInDataFetchStatus", !0, !1, ae.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Space", "spaceIn", "Space", !0, !1, ae.DataTypes.DataTypes.Text, function() {
                return Q.space.base
            }, !1), this.attr("_spaceInDataFetchStatus", "_spaceInDataFetchStatus", "_spaceInDataFetchStatus", !0, !1, ae.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Color", "colorIn", "Color", !0, !1, ae.DataTypes.DataTypes.Text, function() {
                return Q.color.neutral4
            }, !1), this.attr("_colorInDataFetchStatus", "_colorInDataFetchStatus", "_colorInDataFetchStatus", !0, !1, ae.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, ae.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, ae.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(ae.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(Fr, "VariablesRecord");
var Vt = Fr;
Vt.init();
var Nr = class Nr extends ae.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(Nr, "WidgetsRecord");
var kr = Nr,
    Wr = class Wr extends ae.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return Vt
        }
        static getWidgetsRecordConstructor() {
            return kr
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(i) {
            "IsVertical" in i && (this.variables.isVerticalIn = i.IsVertical, "_isVerticalInDataFetchStatus" in i && (this.variables._isVerticalInDataFetchStatus = i._isVerticalInDataFetchStatus)), "Space" in i && (this.variables.spaceIn = i.Space, "_spaceInDataFetchStatus" in i && (this.variables._spaceInDataFetchStatus = i._spaceInDataFetchStatus)), "Color" in i && (this.variables.colorIn = i.Color, "_colorInDataFetchStatus" in i && (this.variables._colorInDataFetchStatus = i._colorInDataFetchStatus)), "ExtendedClass" in i && (this.variables.extendedClassIn = i.ExtendedClass, "_extendedClassInDataFetchStatus" in i && (this.variables._extendedClassInDataFetchStatus = i._extendedClassInDataFetchStatus))
        }
    };
a(Wr, "Model");
var It = Wr;
It._hasValidationWidgetsValue = void 0;
var ki = new ae.Model.ModelFactory(It);
var U = h,
    $r = class $r extends U.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("InternalConfigs", "internalConfigsVar", "InternalConfigs", !0, !1, U.DataTypes.DataTypes.Record, function() {
                return U.DataTypes.ImmutableBase.getData(new dr)
            }, !1, dr), this.attr("Navigation", "navigationIn", "Navigation", !0, !1, U.DataTypes.DataTypes.Text, function() {
                return Q.carouselNavigation.both
            }, !1), this.attr("_navigationInDataFetchStatus", "_navigationInDataFetchStatus", "_navigationInDataFetchStatus", !0, !1, U.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Height", "heightIn", "Height", !0, !1, U.DataTypes.DataTypes.Text, function() {
                return "auto"
            }, !1), this.attr("_heightInDataFetchStatus", "_heightInDataFetchStatus", "_heightInDataFetchStatus", !0, !1, U.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ItemsPerSlide", "itemsPerSlideIn", "ItemsPerSlide", !0, !1, U.DataTypes.DataTypes.Record, function() {
                return U.DataTypes.ImmutableBase.getData(new Ye)
            }, !1, Ye), this.attr("_itemsPerSlideInDataFetchStatus", "_itemsPerSlideInDataFetchStatus", "_itemsPerSlideInDataFetchStatus", !0, !1, U.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("OptionalConfigs", "optionalConfigsIn", "OptionalConfigs", !0, !1, U.DataTypes.DataTypes.Record, function() {
                return U.DataTypes.ImmutableBase.getData(new _e)
            }, !1, _e), this.attr("_optionalConfigsInDataFetchStatus", "_optionalConfigsInDataFetchStatus", "_optionalConfigsInDataFetchStatus", !0, !1, U.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, U.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, U.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(U.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a($r, "VariablesRecord");
var xt = $r;
xt.init();
var Br = class Br extends U.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(Br, "WidgetsRecord");
var Mr = Br,
    Ur = class Ur extends U.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return xt
        }
        static getWidgetsRecordConstructor() {
            return Mr
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(i) {
            "Navigation" in i && (this.variables.navigationIn = i.Navigation, "_navigationInDataFetchStatus" in i && (this.variables._navigationInDataFetchStatus = i._navigationInDataFetchStatus)), "Height" in i && (this.variables.heightIn = i.Height, "_heightInDataFetchStatus" in i && (this.variables._heightInDataFetchStatus = i._heightInDataFetchStatus)), "ItemsPerSlide" in i && (this.variables.itemsPerSlideIn = i.ItemsPerSlide, "_itemsPerSlideInDataFetchStatus" in i && (this.variables._itemsPerSlideInDataFetchStatus = i._itemsPerSlideInDataFetchStatus)), "OptionalConfigs" in i && (this.variables.optionalConfigsIn = i.OptionalConfigs, "_optionalConfigsInDataFetchStatus" in i && (this.variables._optionalConfigsInDataFetchStatus = i._optionalConfigsInDataFetchStatus)), "ExtendedClass" in i && (this.variables.extendedClassIn = i.ExtendedClass, "_extendedClassInDataFetchStatus" in i && (this.variables._extendedClassInDataFetchStatus = i._extendedClassInDataFetchStatus))
        }
    };
a(Ur, "Model");
var Dt = Ur;
Dt._hasValidationWidgetsValue = void 0;
var Li = new U.Model.ModelFactory(Dt);
var ot = h,
    Gr = class Gr extends ot.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(ot.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(Gr, "VariablesRecord");
var kt = Gr;
kt.init();
var Qr = class Qr extends ot.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(Qr, "WidgetsRecord");
var zr = Qr,
    qr = class qr extends ot.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return kt
        }
        static getWidgetsRecordConstructor() {
            return zr
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(i) {}
    };
a(qr, "Model");
var Lt = qr;
Lt._hasValidationWidgetsValue = void 0;
var Fi = new ot.Model.ModelFactory(Lt);
var st = h,
    Kr = class Kr extends st.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(st.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(Kr, "VariablesRecord");
var Ft = Kr;
Ft.init();
var Zr = class Zr extends st.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(Zr, "WidgetsRecord");
var jr = Zr,
    Je = class Je extends st.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return Ft
        }
        static getWidgetsRecordConstructor() {
            return jr
        }
        static get hasValidationWidgets() {
            return Je._hasValidationWidgetsValue === void 0 && (Je._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0), Je._hasValidationWidgetsValue
        }
        setInputs(i) {}
    };
a(Je, "Model");
var Nt = Je;
Nt._hasValidationWidgetsValue = void 0;
var Wi = new st.Model.ModelFactory(Nt);
var Ja = {
        "rsT4IPLlZkie9KkQmxX5rw#Value": "\u062A\u0639\u0631\u0641 \u0639\u0644\u0649 \u0627\u0644\u0645\u0632\u064A\u062F",
        "qTIgKtxxeUyfC2jIbHnPRg#Value": "\u0627\u0631\u0628\u062D \u0628\u0646\u0627\u0621\u064B \u0639\u0644\u0649 \u0627\u062D\u062A\u0645\u0627\u0644\u064A\u0629 \u062F\u0641\u0639 \u0643\u0644 \u0639\u0642\u062F.",
        "HonwjG9X0kymyBgfrA6GHw#Value": "\u062A\u0639\u0631\u0641 \u0623\u0643\u062B\u0631",
        "XJlYjScU5EGNahb_Fsa1lw#Value": "\u0627\u0631\u0628\u062D \u0645\u0627 \u064A\u0635\u0644 \u0625\u0644\u0649 40% \u0645\u0646 \u0639\u0645\u0648\u0644\u0627\u062A \u062A\u062F\u0627\u0648\u0644 \u0627\u0644\u0639\u0645\u0644\u0627\u0621.",
        "n+i_Qvrm2kCUpA6OBct+Aw#Value": "\u062A\u0639\u0631\u0641 \u0639\u0644\u0649 \u0627\u0644\u0645\u0632\u064A\u062F",
        "8PuQXxeY_kWA63n55v6LWw#Value": "\u0627\u0631\u0628\u062D \u0628\u0646\u0627\u0621\u064B \u0639\u0644\u0649 \u0627\u062D\u062A\u0645\u0627\u0644\u064A\u0629 \u062F\u0641\u0639 \u0643\u0644 \u0639\u0642\u062F.",
        "re4x2mAFAUCi0Uzf_QD9jQ#Value": "\u062A\u0639\u0631\u0641 \u0639\u0644\u0649 \u0627\u0644\u0645\u0632\u064A\u062F",
        "fyGSjsifXUe_gnMUYXyUwQ#Value": "\u0627\u0631\u0628\u062D \u0645\u0627 \u064A\u0635\u0644 \u0625\u0644\u0649 40% \u0639\u0645\u0648\u0644\u0627\u062A \u0645\u0646 \u062A\u062F\u0627\u0648\u0644\u0627\u062A \u0627\u0644\u0639\u0645\u0644\u0627\u0621.",
        "pcZDJsFxJE6u6Dad3I_6lw#Value": "\u062A\u0639\u0644\u0651\u0645 \u0627\u0644\u0645\u0632\u064A\u062F",
        "kh4sLye1VkediZ_papE5UA#Value": "\u0643\u0633\u0628 \u0628\u0646\u0627\u0621\u064B \u0639\u0644\u0649 \u0627\u062D\u062A\u0645\u0627\u0644\u064A\u0629 \u062F\u0641\u0639 \u0643\u0644 \u0639\u0642\u062F.",
        "gqFqY_hmtEqB00VisGJ7PA#Value": "\u062A\u0639\u0631\u0641 \u0639\u0644\u0649 \u0627\u0644\u0645\u0632\u064A\u062F",
        "SLerLFjvfkWtG9Y9RHDzJQ#Value": "\u0627\u062D\u0635\u0644 \u0639\u0644\u0649 \u0639\u0645\u0648\u0644\u0627\u062A \u062A\u0635\u0644 \u0625\u0644\u0649 40% \u0645\u0646 \u062A\u062F\u0627\u0648\u0644\u0627\u062A \u0627\u0644\u0639\u0645\u0644\u0627\u0621.",
        "WWVqgcxwK02Qs6tbKp5Mmg#Value": "\u062A\u0639\u0631\u0641 \u0639\u0644\u0649 \u0627\u0644\u0645\u0632\u064A\u062F",
        "rEEPHXMxSkqto6iJFQRDow#Value": "\u0627\u0631\u0628\u062D \u0645\u0639 \u062E\u0637\u0629 \u0627\u0644\u0639\u0645\u0648\u0644\u0629 \u0627\u0644\u0645\u0633\u062A\u0646\u062F\u0629 \u0625\u0644\u0649 \u0627\u0644\u0623\u062F\u0648\u0627\u062A \u0644\u062F\u064A\u0646\u0627.",
        "IOkWIqJMPUO_Lk53vxAtSw#Value": "\u064A\u0645\u0643\u0646\u0643 \u0643\u0633\u0628 \u0639\u0645\u0648\u0644\u0627\u062A \u0645\u0646"
    },
    Ga = {
        "rsT4IPLlZkie9KkQmxX5rw#Value": "Mehr erfahren",
        "qTIgKtxxeUyfC2jIbHnPRg#Value": "Verdienen Sie basierend auf der Auszahlungswahrscheinlichkeit jedes Vertrags.",
        "HonwjG9X0kymyBgfrA6GHw#Value": "Mehr erfahren",
        "XJlYjScU5EGNahb_Fsa1lw#Value": "Verdienen Sie bis zu 40 % Provisionen aus den Handelsgesch\xE4ften Ihrer Kunden.",
        "n+i_Qvrm2kCUpA6OBct+Aw#Value": "Mehr erfahren",
        "8PuQXxeY_kWA63n55v6LWw#Value": "Verdienen Sie basierend auf der Auszahlungswahrscheinlichkeit jedes Vertrags.",
        "re4x2mAFAUCi0Uzf_QD9jQ#Value": "Erfahren Sie mehr",
        "fyGSjsifXUe_gnMUYXyUwQ#Value": "Verdienen Sie bis zu 40 % Provisionen aus den Trades von Kunden.",
        "pcZDJsFxJE6u6Dad3I_6lw#Value": "Mehr erfahren",
        "kh4sLye1VkediZ_papE5UA#Value": "Verdienen Sie basierend auf der Auszahlungwahrscheinlichkeit jedes Vertrags.",
        "gqFqY_hmtEqB00VisGJ7PA#Value": "Mehr erfahren",
        "SLerLFjvfkWtG9Y9RHDzJQ#Value": "Verdienen Sie bis zu 40 % Provisionen aus den Trades Ihrer Kunden.",
        "WWVqgcxwK02Qs6tbKp5Mmg#Value": "Mehr erfahren",
        "rEEPHXMxSkqto6iJFQRDow#Value": "Verdienen Sie mit unserem instrumentenbasierten Provisionsplan.",
        "IOkWIqJMPUO_Lk53vxAtSw#Value": "Sie k\xF6nnen Provisionen von verdienen"
    },
    Qa = {
        "rsT4IPLlZkie9KkQmxX5rw#Value": "Aprende m\xE1s",
        "qTIgKtxxeUyfC2jIbHnPRg#Value": "Gana seg\xFAn la probabilidad de pago de cada contrato.",
        "HonwjG9X0kymyBgfrA6GHw#Value": "Aprende m\xE1s",
        "XJlYjScU5EGNahb_Fsa1lw#Value": "Gane hasta un 40% de comisiones por las operaciones de los clientes.",
        "n+i_Qvrm2kCUpA6OBct+Aw#Value": "Aprender m\xE1s",
        "8PuQXxeY_kWA63n55v6LWw#Value": "Gana seg\xFAn la probabilidad de pago de cada contrato.",
        "re4x2mAFAUCi0Uzf_QD9jQ#Value": "Aprende m\xE1s",
        "fyGSjsifXUe_gnMUYXyUwQ#Value": "Gana hasta un 40 % de comisiones por las operaciones de los clientes.",
        "pcZDJsFxJE6u6Dad3I_6lw#Value": "Aprende m\xE1s",
        "kh4sLye1VkediZ_papE5UA#Value": "Gana seg\xFAn la probabilidad de pago de cada contrato.",
        "gqFqY_hmtEqB00VisGJ7PA#Value": "Aprende m\xE1s",
        "SLerLFjvfkWtG9Y9RHDzJQ#Value": "Gana hasta un 40% de comisiones por las operaciones de los clientes.",
        "WWVqgcxwK02Qs6tbKp5Mmg#Value": "Aprende m\xE1s",
        "rEEPHXMxSkqto6iJFQRDow#Value": "Gana con nuestro plan de comisiones basado en instrumentos.",
        "IOkWIqJMPUO_Lk53vxAtSw#Value": "Puedes ganar comisiones de"
    },
    qa = {
        "rsT4IPLlZkie9KkQmxX5rw#Value": "En savoir plus",
        "qTIgKtxxeUyfC2jIbHnPRg#Value": "Gagnez en fonction de la probabilit\xE9 de paiement de chaque contrat.",
        "HonwjG9X0kymyBgfrA6GHw#Value": "En savoir plus",
        "XJlYjScU5EGNahb_Fsa1lw#Value": "Gagnez jusqu'\xE0 40 % de commissions sur les transactions des clients.",
        "n+i_Qvrm2kCUpA6OBct+Aw#Value": "En savoir plus",
        "8PuQXxeY_kWA63n55v6LWw#Value": "Gagnez en fonction de la probabilit\xE9 de paiement de chaque contrat.",
        "re4x2mAFAUCi0Uzf_QD9jQ#Value": "En savoir plus",
        "fyGSjsifXUe_gnMUYXyUwQ#Value": "Gagnez jusqu'\xE0 40 % de commissions sur les transactions des clients.",
        "pcZDJsFxJE6u6Dad3I_6lw#Value": "En savoir plus",
        "kh4sLye1VkediZ_papE5UA#Value": "Gagnez en fonction de la probabilit\xE9 de paiement de chaque contrat.",
        "gqFqY_hmtEqB00VisGJ7PA#Value": "En savoir plus",
        "SLerLFjvfkWtG9Y9RHDzJQ#Value": "Gagnez jusqu'\xE0 40 % de commissions sur les transactions des clients.",
        "WWVqgcxwK02Qs6tbKp5Mmg#Value": "En savoir plus",
        "rEEPHXMxSkqto6iJFQRDow#Value": "Gagnez avec notre plan de commission bas\xE9 sur les instruments.",
        "IOkWIqJMPUO_Lk53vxAtSw#Value": "Vous pouvez gagner des commissions de"
    },
    ja = {
        "rsT4IPLlZkie9KkQmxX5rw#Value": "Scopri di pi\xF9",
        "qTIgKtxxeUyfC2jIbHnPRg#Value": "Guadagna in base alla probabilit\xE0 di pagamento di ciascun contratto.",
        "HonwjG9X0kymyBgfrA6GHw#Value": "Scopri di pi\xF9",
        "XJlYjScU5EGNahb_Fsa1lw#Value": "Guadagna fino al 40% di commissioni dalle operazioni dei clienti.",
        "n+i_Qvrm2kCUpA6OBct+Aw#Value": "Scopri di pi\xF9",
        "8PuQXxeY_kWA63n55v6LWw#Value": "Guadagna in base alla probabilit\xE0 di pagamento di ciascun contratto.",
        "re4x2mAFAUCi0Uzf_QD9jQ#Value": "Scopri di pi\xF9",
        "fyGSjsifXUe_gnMUYXyUwQ#Value": "Guadagna fino al 40% di commissioni dai trade dei clienti.",
        "pcZDJsFxJE6u6Dad3I_6lw#Value": "Scopri di pi\xF9",
        "kh4sLye1VkediZ_papE5UA#Value": "Guadagna in base alla probabilit\xE0 di pagamento di ciascun contratto.",
        "gqFqY_hmtEqB00VisGJ7PA#Value": "Scopri di pi\xF9",
        "SLerLFjvfkWtG9Y9RHDzJQ#Value": "Guadagna fino al 40% di commissioni dai trade dei tuoi clienti.",
        "WWVqgcxwK02Qs6tbKp5Mmg#Value": "Scopri di pi\xF9",
        "rEEPHXMxSkqto6iJFQRDow#Value": "Guadagna con il nostro piano commissionale basato sugli strumenti.",
        "IOkWIqJMPUO_Lk53vxAtSw#Value": "Puoi guadagnare commissioni da"
    },
    Ka = {
        "rsT4IPLlZkie9KkQmxX5rw#Value": "Dowiedz si\u0119 wi\u0119cej",
        "qTIgKtxxeUyfC2jIbHnPRg#Value": "Zarabiaj w oparciu o prawdopodobie\u0144stwo wyp\u0142aty ka\u017Cdego kontraktu.",
        "HonwjG9X0kymyBgfrA6GHw#Value": "Dowiedz si\u0119 wi\u0119cej",
        "XJlYjScU5EGNahb_Fsa1lw#Value": "Zarabiaj do 40% prowizji od transakcji klient\xF3w.",
        "n+i_Qvrm2kCUpA6OBct+Aw#Value": "Dowiedz si\u0119 wi\u0119cej",
        "8PuQXxeY_kWA63n55v6LWw#Value": "Zarabiaj na podstawie prawdopodobie\u0144stwa wyp\u0142aty ka\u017Cdego kontraktu.",
        "re4x2mAFAUCi0Uzf_QD9jQ#Value": "Dowiedz si\u0119 wi\u0119cej",
        "fyGSjsifXUe_gnMUYXyUwQ#Value": "Zarabiaj do 40% prowizji od transakcji klient\xF3w.",
        "pcZDJsFxJE6u6Dad3I_6lw#Value": "Dowiedz si\u0119 wi\u0119cej",
        "kh4sLye1VkediZ_papE5UA#Value": "Zarabiaj w oparciu o prawdopodobie\u0144stwo wyp\u0142aty ka\u017Cdego kontraktu.",
        "gqFqY_hmtEqB00VisGJ7PA#Value": "Dowiedz si\u0119 wi\u0119cej",
        "SLerLFjvfkWtG9Y9RHDzJQ#Value": "Zarabiaj do 40% prowizji od transakcji klient\xF3w.",
        "WWVqgcxwK02Qs6tbKp5Mmg#Value": "Dowiedz si\u0119 wi\u0119cej",
        "rEEPHXMxSkqto6iJFQRDow#Value": "Zarabiaj z naszym planem prowizyjnym opartym na instrumentach.",
        "IOkWIqJMPUO_Lk53vxAtSw#Value": "Mo\u017Cesz zarabia\u0107 prowizje z"
    },
    Za = {
        "rsT4IPLlZkie9KkQmxX5rw#Value": "Saiba mais",
        "qTIgKtxxeUyfC2jIbHnPRg#Value": "Ganhe com base na probabilidade de pagamento de cada contrato.",
        "HonwjG9X0kymyBgfrA6GHw#Value": "Saiba mais",
        "XJlYjScU5EGNahb_Fsa1lw#Value": "Ganhe at\xE9 40% de comiss\xF5es nas opera\xE7\xF5es dos clientes.",
        "n+i_Qvrm2kCUpA6OBct+Aw#Value": "Saber mais",
        "8PuQXxeY_kWA63n55v6LWw#Value": "Ganhe com base na probabilidade de pagamento de cada contrato.",
        "re4x2mAFAUCi0Uzf_QD9jQ#Value": "Saiba mais",
        "fyGSjsifXUe_gnMUYXyUwQ#Value": "Ganhe at\xE9 40% de comiss\xF5es com as opera\xE7\xF5es dos clientes.",
        "pcZDJsFxJE6u6Dad3I_6lw#Value": "Saiba mais",
        "kh4sLye1VkediZ_papE5UA#Value": "Ganhe com base na probabilidade de pagamento de cada contrato.",
        "gqFqY_hmtEqB00VisGJ7PA#Value": "Saiba mais",
        "SLerLFjvfkWtG9Y9RHDzJQ#Value": "Ganhe at\xE9 40% de comiss\xF5es com as opera\xE7\xF5es dos clientes.",
        "WWVqgcxwK02Qs6tbKp5Mmg#Value": "Saiba mais",
        "rEEPHXMxSkqto6iJFQRDow#Value": "Ganhe com o nosso plano de comiss\xF5es baseado em instrumentos.",
        "IOkWIqJMPUO_Lk53vxAtSw#Value": "Voc\xEA pode ganhar comiss\xF5es de"
    },
    Xa = {
        "rsT4IPLlZkie9KkQmxX5rw#Value": "\u0423\u0437\u043D\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435",
        "qTIgKtxxeUyfC2jIbHnPRg#Value": "\u0417\u0430\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0439\u0442\u0435 \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0438 \u043E\u0442 \u0432\u0435\u0440\u043E\u044F\u0442\u043D\u043E\u0441\u0442\u0438 \u0432\u044B\u043F\u043B\u0430\u0442\u044B \u043F\u043E \u043A\u0430\u0436\u0434\u043E\u043C\u0443 \u043A\u043E\u043D\u0442\u0440\u0430\u043A\u0442\u0443.",
        "HonwjG9X0kymyBgfrA6GHw#Value": "\u0423\u0437\u043D\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435",
        "XJlYjScU5EGNahb_Fsa1lw#Value": "\u0417\u0430\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0439\u0442\u0435 \u0434\u043E 40% \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u0439 \u043E\u0442 \u0441\u0434\u0435\u043B\u043E\u043A \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432.",
        "n+i_Qvrm2kCUpA6OBct+Aw#Value": "\u0423\u0437\u043D\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435",
        "8PuQXxeY_kWA63n55v6LWw#Value": "\u0417\u0430\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0439\u0442\u0435 \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0438 \u043E\u0442 \u0432\u0435\u0440\u043E\u044F\u0442\u043D\u043E\u0441\u0442\u0438 \u0432\u044B\u043F\u043B\u0430\u0442\u044B \u043F\u043E \u043A\u0430\u0436\u0434\u043E\u043C\u0443 \u043A\u043E\u043D\u0442\u0440\u0430\u043A\u0442\u0443.",
        "re4x2mAFAUCi0Uzf_QD9jQ#Value": "\u0423\u0437\u043D\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435",
        "fyGSjsifXUe_gnMUYXyUwQ#Value": "\u0417\u0430\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0439\u0442\u0435 \u0434\u043E 40% \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u0439 \u0441 \u0442\u043E\u0440\u0433\u043E\u0432 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432.",
        "pcZDJsFxJE6u6Dad3I_6lw#Value": "\u0423\u0437\u043D\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435",
        "kh4sLye1VkediZ_papE5UA#Value": "\u0417\u0430\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0439\u0442\u0435 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 \u0432\u0435\u0440\u043E\u044F\u0442\u043D\u043E\u0441\u0442\u0438 \u0432\u044B\u043F\u043B\u0430\u0442\u044B \u043F\u043E \u043A\u0430\u0436\u0434\u043E\u043C\u0443 \u043A\u043E\u043D\u0442\u0440\u0430\u043A\u0442\u0443.",
        "gqFqY_hmtEqB00VisGJ7PA#Value": "\u0423\u0437\u043D\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435",
        "SLerLFjvfkWtG9Y9RHDzJQ#Value": "\u0417\u0430\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0439\u0442\u0435 \u0434\u043E 40% \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u0439 \u0441 \u0442\u043E\u0440\u0433\u043E\u0432 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432.",
        "WWVqgcxwK02Qs6tbKp5Mmg#Value": "\u0423\u0437\u043D\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435",
        "rEEPHXMxSkqto6iJFQRDow#Value": "\u0417\u0430\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0439\u0442\u0435 \u0441 \u043D\u0430\u0448\u0438\u043C \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u043E\u043D\u043D\u044B\u043C \u043F\u043B\u0430\u043D\u043E\u043C, \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u043D\u044B\u043C \u043D\u0430 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0430\u0445.",
        "IOkWIqJMPUO_Lk53vxAtSw#Value": "\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0437\u0430\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0442\u044C \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u043E\u043D\u043D\u044B\u0435 \u043E\u0442"
    },
    Mi = {
        "ar-001": {
            translations: Ja,
            isRTL: !0
        },
        "de-DE": {
            translations: Ga,
            isRTL: !1
        },
        "es-ES": {
            translations: Qa,
            isRTL: !1
        },
        "fr-FR": {
            translations: qa,
            isRTL: !1
        },
        "it-IT": {
            translations: ja,
            isRTL: !1
        },
        "pl-PL": {
            translations: Ka,
            isRTL: !1
        },
        "pt-PT": {
            translations: Za,
            isRTL: !1
        },
        "ru-RU": {
            translations: Xa,
            isRTL: !1
        }
    };
var T = h; {
    let i = class i extends T.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, Mi);
            var s = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get getBDEnableCFDScreens$ServerAction() {
            return this.hasOwnProperty("_getBDEnableCFDScreens$ServerAction") || (this._getBDEnableCFDScreens$ServerAction = function(e) {
                var r = this.controller;
                return T.Logger.startActiveSpan("GetBDEnableCFDScreens", function(t) {
                    return t && (t.setAttribute("code.function", "GetBDEnableCFDScreens"), t.setAttribute("outsystems.function.key", "7eca81a1-5ec3-449c-b6ab-0bca5f9ecfbf"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), T.Flow.tryFinally(function() {
                        return r.callServerAction("GetBDEnableCFDScreens", "screenservices/PartnersHub/Home/CommissionPlans/ActionGetBDEnableCFDScreens", "LjNg3yE0AdZRJluRGkzpGw", {}, r.callContext(e), void 0, void 0, !0).then(function(s) {
                            var n = new(r.constructor.getVariableGroupType("PartnersHub.Home.CommissionPlans$ActionGetBDEnableCFDScreens"));
                            return n.enableCFDScreensOut = T.DataConversion.ServerDataConverter.from(s.EnableCFDScreens, T.DataTypes.DataTypes.Boolean), n
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
                return T.Logger.startActiveSpan("OnClickToTurnoverPlan", function(n) {
                    n && (n.setAttribute("code.function", "OnClickToTurnoverPlan"), n.setAttribute("outsystems.function.key", "57fb401e-36c4-4e08-a29c-be8dbd1c9419"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("OnClickToTurnoverPlan"), e = t.callContext(e), O.rudderstackTrackEvent$Action(function() {
                            var o = new B;
                            return o.actionAttr = "click_cta", o.cta_nameAttr = "Learn more", o.cta_placementAttr = "commission plans turnover section", o.timestampAttr = T.BuiltinFunctions.dateTimeToText(T.BuiltinFunctions.currDateTime()), o.show_user_idAttr = !1, o
                        }(), "ce_partnershub_form", e), T.Navigation.navigateTo(T.Navigation.generateScreenURL("PartnersHub", "Turnover", {}), T.Transitions.createTransition(T.Transitions.TransitionAnimation.None), e, !0)
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
                return T.Logger.startActiveSpan("OnClickToCFDs", function(n) {
                    return n && (n.setAttribute("code.function", "OnClickToCFDs"), n.setAttribute("outsystems.function.key", "59f039cc-eec2-4cf6-a669-07d1e80b0dd9"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), T.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnClickToCFDs"), e = t.callContext(e);
                        var o = new T.DataTypes.VariableHolder;
                        return T.Flow.executeAsyncFlow(function() {
                            return O.rudderstackTrackEvent$Action(function() {
                                var d = new B;
                                return d.actionAttr = "click_cta", d.cta_nameAttr = "Learn more", d.cta_placementAttr = "commission plans cfds section", d.timestampAttr = T.BuiltinFunctions.dateTimeToText(T.BuiltinFunctions.currDateTime()), d.show_user_idAttr = !1, d
                            }(), "ce_partnershub_form", e), r.flush(), t.getBDEnableCFDScreens$ServerAction(e).then(function(d) {
                                o.value = d
                            }).then(function() {
                                if (o.value.enableCFDScreensOut) return T.Flow.returnAsync(T.Navigation.navigateTo(T.Navigation.generateScreenURL("PartnersHub", "CFDs", {}), T.Transitions.createTransition(T.Transitions.TransitionAnimation.None), e, !0));
                                O.redirectToExternalNewTab$Action("https://docs.deriv.com/partners/ib-cfds-commissions-table.pdf", e)
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
                return T.Logger.startActiveSpan("OnClickToRevShare", function(n) {
                    n && (n.setAttribute("code.function", "OnClickToRevShare"), n.setAttribute("outsystems.function.key", "694bcb0b-945e-486a-bcf0-267063a408cd"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("OnClickToRevShare"), e = t.callContext(e), O.rudderstackTrackEvent$Action(function() {
                            var o = new B;
                            return o.actionAttr = "click_cta", o.cta_nameAttr = "Learn more", o.cta_placementAttr = "commission plans revshare section", o.timestampAttr = T.BuiltinFunctions.dateTimeToText(T.BuiltinFunctions.currDateTime()), o.show_user_idAttr = !1, o
                        }(), "ce_partnershub_form", e), T.Navigation.navigateTo(T.Navigation.generateScreenURL("PartnersHub", "RevShare", {}), T.Transitions.createTransition(T.Transitions.TransitionAnimation.None), e, !0)
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
            return T.Logger.startActiveSpan("OnClickToTurnoverPlan__proxy", function(t) {
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
            return T.Logger.startActiveSpan("OnClickToCFDs__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnClickToCFDs"), t.setAttribute("outsystems.function.key", "59f039cc-eec2-4cf6-a669-07d1e80b0dd9"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), T.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onClickToCFDs$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onClickToRevShare$Action(e) {
            var r = this.controller;
            return T.Logger.startActiveSpan("OnClickToRevShare__proxy", function(t) {
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
            return O.defaultTimeout
        }
    };
    a(i, "ControllerInner");
    let f = i;
    Xr = f, Xr.registerVariableGroupType("PartnersHub.Home.CommissionPlans$ActionGetBDEnableCFDScreens", [{
        name: "EnableCFDScreens",
        attrName: "enableCFDScreensOut",
        mandatory: !1,
        dataType: T.DataTypes.DataTypes.Boolean,
        defaultValue: a(function() {
            return !1
        }, "defaultValue")
    }])
}
var Xr, $i = new T.Controller.ControllerFactory(Xr, L);
var Wt = K(Z());
var Bi = {};
var Ui = h; {
    let i = class i extends Ui.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, Bi);
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
            return I.defaultTimeout
        }
    };
    a(i, "ControllerInner");
    let f = i;
    zi = f
}
var zi, Ji = new Ui.Controller.ControllerFactory(zi, Ne);
var Gi = h,
    sc = E.PlaceholderContent,
    lc = E.IteratorPlaceholderContent,
    Ce = class Ce extends V.BaseWebBlock {
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
            return ki
        }
        get controllerFactory() {
            return Ji
        }
        get title() {
            return ""
        }
        internalRender() {
            let i = this.model,
                c = this.controller,
                e = this.idService,
                r = c.validationService,
                t = this.widgetsRecordProvider,
                s = c.callContext(),
                n = Ce.ifWidget,
                o = Ce.textWidget,
                d = Ce.asPrimitiveValue,
                v = Ce.getTranslation,
                u = this;
            return Wt.createElement("div", this.getRootNodeProperties(), Wt.createElement(m, {
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
                style_dataFetchStatus: Gi.Model.calculateDataFetchStatus(i.variables._isVerticalInDataFetchStatus, i.variables._spaceInDataFetchStatus)
            }, Wt.createElement(m, {
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
                style_dataFetchStatus: Gi.Model.calculateDataFetchStatus(i.variables._isVerticalInDataFetchStatus, i.variables._colorInDataFetchStatus, i.variables._extendedClassInDataFetchStatus)
            })))
        }
    };
a(Ce, "View");
var Yr = Ce,
    en = Yr;
var J = K(Z());
var Qi = {};

function tn(f, i, c, e) {
    f.OnSlideMovedObj = i.OnSlideMovedHandler, f.OnCarouselInitializedObj = i.InitializeHandler
}
a(tn, "default");
var C = h; {
    let i = class i extends C.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, Qi);
            var s = this.controller;
            this.clientActionProxies = {
                onSlideMovedHandler$Action: a(function(n, o) {
                    return n = n === void 0 ? "" : n, o = o === void 0 ? 0 : o, s.executeActionInsideJSNode(s._onSlideMovedHandler$Action.bind(s, C.DataConversion.JSNodeParamConverter.from(n, C.DataTypes.DataTypes.Text), C.DataConversion.JSNodeParamConverter.from(o, C.DataTypes.DataTypes.Integer)), s.callContext(), function(d) {
                        return {}
                    }, function() {}, "OnSlideMovedHandler")
                }, "onSlideMovedHandler$Action"),
                initializeHandler$Action: a(function(n) {
                    return n = n === void 0 ? "" : n, s.executeActionInsideJSNode(s._initializeHandler$Action.bind(s, C.DataConversion.JSNodeParamConverter.from(n, C.DataTypes.DataTypes.Text)), s.callContext(), function(o) {
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
                return C.Logger.startActiveSpan("OnDestroy", function(n) {
                    n && (n.setAttribute("code.function", "OnDestroy"), n.setAttribute("outsystems.function.key", "1c69d0f1-3724-475c-b06f-bae9655df488"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnDestroy"), e = t.callContext(e), I.carouselDestroy$Action(r.variables.internalConfigsVar.uniqueIdAttr, e)
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
                return C.Logger.startActiveSpan("InitializeHandler", function(o) {
                    return o && (o.setAttribute("code.function", "InitializeHandler"), o.setAttribute("outsystems.function.key", "2878f020-349a-4095-92b5-64914bdbefc7"), o.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), o.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), C.Flow.tryFinally(function() {
                        s.ensureControllerAlive("InitializeHandler"), r = s.callContext(r);
                        var d = new C.DataTypes.VariableHolder(new(s.constructor.getVariableGroupType("OutSystemsUI.Interaction.Carousel.InitializeHandler$vars")));
                        return d.value.carouselIdInLocal = e, C.Flow.executeAsyncFlow(function() {
                            return s.initialized$Action(d.value.carouselIdInLocal, r)
                        })
                    }, function() {
                        o && o.end()
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
                    o = this.idService;
                return C.Logger.startActiveSpan("OnSlideMovedHandler", function(d) {
                    return d && (d.setAttribute("code.function", "OnSlideMovedHandler"), d.setAttribute("outsystems.function.key", "2b489ae5-936e-4624-b650-e33d88fbc446"), d.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), d.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), d.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), C.Flow.tryFinally(function() {
                        n.ensureControllerAlive("OnSlideMovedHandler"), t = n.callContext(t);
                        var v = new C.DataTypes.VariableHolder(new(n.constructor.getVariableGroupType("OutSystemsUI.Interaction.Carousel.OnSlideMovedHandler$vars")));
                        return v.value.carouselIdInLocal = e, v.value.indexInLocal = r, C.Flow.executeAsyncFlow(function() {
                            return n.onSlideMoved$Action(v.value.carouselIdInLocal, v.value.indexInLocal, t)
                        })
                    }, function() {
                        d && d.end()
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
                return C.Logger.startActiveSpan("OnParametersChanged", function(n) {
                    n && (n.setAttribute("code.function", "OnParametersChanged"), n.setAttribute("outsystems.function.key", "4c5a128f-3f2a-4cb0-b2f3-031aef45cb2d"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnParametersChanged"), e = t.callContext(e), r.variables.navigationIn !== r.variables.internalConfigsVar.navigationAttr && (r.variables.internalConfigsVar.navigationAttr = r.variables.navigationIn, I.carouselChangeTextProperty$Action(r.variables.internalConfigsVar.uniqueIdAttr, "Navigation", r.variables.internalConfigsVar.navigationAttr, e)), r.variables.itemsPerSlideIn.desktopAttr !== r.variables.internalConfigsVar.itemsDesktopAttr && (r.variables.internalConfigsVar.itemsDesktopAttr = r.variables.itemsPerSlideIn.desktopAttr, I.carouselChangeIntegerProp$Action(r.variables.internalConfigsVar.uniqueIdAttr, "ItemsDesktop", r.variables.internalConfigsVar.itemsDesktopAttr, e)), r.variables.itemsPerSlideIn.tabletAttr !== r.variables.internalConfigsVar.itemsTabletAttr && (r.variables.internalConfigsVar.itemsTabletAttr = r.variables.itemsPerSlideIn.tabletAttr, I.carouselChangeIntegerProp$Action(r.variables.internalConfigsVar.uniqueIdAttr, "ItemsTablet", r.variables.internalConfigsVar.itemsTabletAttr, e)), r.variables.itemsPerSlideIn.phoneAttr !== r.variables.internalConfigsVar.itemsPhoneAttr && (r.variables.internalConfigsVar.itemsPhoneAttr = r.variables.itemsPerSlideIn.phoneAttr, I.carouselChangeIntegerProp$Action(r.variables.internalConfigsVar.uniqueIdAttr, "ItemsPhone", r.variables.internalConfigsVar.itemsPhoneAttr, e)), r.variables.optionalConfigsIn.autoPlayAttr !== r.variables.internalConfigsVar.autoPlayAttr && (r.variables.internalConfigsVar.autoPlayAttr = r.variables.optionalConfigsIn.autoPlayAttr, I.carouselChangeBooleanProperty$Action(r.variables.internalConfigsVar.uniqueIdAttr, "AutoPlay", r.variables.internalConfigsVar.autoPlayAttr, e)), r.variables.optionalConfigsIn.loopAttr !== r.variables.internalConfigsVar.loopAttr && (r.variables.internalConfigsVar.loopAttr = r.variables.optionalConfigsIn.loopAttr, I.carouselChangeBooleanProperty$Action(r.variables.internalConfigsVar.uniqueIdAttr, "Loop", r.variables.internalConfigsVar.loopAttr, e)), r.variables.optionalConfigsIn.paddingAttr !== r.variables.internalConfigsVar.paddingAttr && (r.variables.internalConfigsVar.paddingAttr = r.variables.optionalConfigsIn.paddingAttr, I.carouselChangeTextProperty$Action(r.variables.internalConfigsVar.uniqueIdAttr, "Padding", r.variables.internalConfigsVar.paddingAttr, e)), r.variables.optionalConfigsIn.itemsGapAttr !== r.variables.internalConfigsVar.itemsGapAttr && (r.variables.internalConfigsVar.itemsGapAttr = r.variables.optionalConfigsIn.itemsGapAttr, I.carouselChangeTextProperty$Action(r.variables.internalConfigsVar.uniqueIdAttr, "ItemsGap", r.variables.internalConfigsVar.itemsGapAttr, e)), r.variables.optionalConfigsIn.startingPositionAttr !== r.variables.internalConfigsVar.startingPositionAttr && (r.variables.internalConfigsVar.startingPositionAttr = r.variables.optionalConfigsIn.startingPositionAttr, I.carouselChangeIntegerProp$Action(r.variables.internalConfigsVar.uniqueIdAttr, "StartingPosition", r.variables.internalConfigsVar.startingPositionAttr, e)), r.variables.heightIn !== r.variables.internalConfigsVar.heightAttr && (r.variables.internalConfigsVar.heightAttr = r.variables.heightIn, I.carouselChangeTextProperty$Action(r.variables.internalConfigsVar.uniqueIdAttr, "Height", r.variables.internalConfigsVar.heightAttr, e)), r.variables.extendedClassIn !== r.variables.internalConfigsVar.extendedClassAttr && (r.variables.internalConfigsVar.extendedClassAttr = r.variables.extendedClassIn, I.carouselChangeTextProperty$Action(r.variables.internalConfigsVar.uniqueIdAttr, "ExtendedClass", r.variables.internalConfigsVar.extendedClassAttr, e))
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
                return C.Logger.startActiveSpan("OnReady", function(n) {
                    n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "55a88d23-f92e-4195-9c3a-18901ac10ad0"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e), I.carouselInitialize$Action(r.variables.internalConfigsVar.uniqueIdAttr, e), I.logEvent$Action(Q.logType.general, "Carousel created", e)
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
                return C.Logger.startActiveSpan("OnInitialize", function(n) {
                    n && (n.setAttribute("code.function", "OnInitialize"), n.setAttribute("outsystems.function.key", "dafe53b9-d39c-4d96-baa2-2002b3bd13b5"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e);
                        var o = new C.DataTypes.VariableHolder,
                            d = new C.DataTypes.VariableHolder(new C.DataTypes.JSONSerializeOutputType);
                        I.logEvent$Action(Q.logType.general, "Going to create Carousel", e), o.value = I.generateUniqueId$Action(r.variables.internalConfigsVar.uniqueIdAttr, e), r.variables.internalConfigsVar.uniqueIdAttr = o.value.unique_IDOut, r.variables.internalConfigsVar.extendedClassAttr = r.variables.extendedClassIn, r.variables.internalConfigsVar.navigationAttr = r.variables.navigationIn, r.variables.internalConfigsVar.heightAttr = r.variables.heightIn, r.variables.internalConfigsVar.autoPlayAttr = r.variables.optionalConfigsIn.autoPlayAttr, r.variables.internalConfigsVar.loopAttr = r.variables.optionalConfigsIn.loopAttr, r.variables.internalConfigsVar.paddingAttr = r.variables.optionalConfigsIn.paddingAttr, r.variables.internalConfigsVar.itemsGapAttr = r.variables.optionalConfigsIn.itemsGapAttr, r.variables.internalConfigsVar.startingPositionAttr = r.variables.optionalConfigsIn.startingPositionAttr, r.variables.internalConfigsVar.itemsDesktopAttr = r.variables.itemsPerSlideIn.desktopAttr, r.variables.internalConfigsVar.itemsTabletAttr = r.variables.itemsPerSlideIn.tabletAttr, r.variables.internalConfigsVar.itemsPhoneAttr = r.variables.itemsPerSlideIn.phoneAttr, d.value.jSONOut = C.JSONUtils.serializeToJSON(r.variables.internalConfigsVar, !0, !1), I.carouselCreate$Action(r.variables.internalConfigsVar.uniqueIdAttr, d.value.jSONOut, Q.carouselProvider.splide, e), t._registerCallbacks$Action(e)
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
                return C.Logger.startActiveSpan("RegisterCallbacks", function(n) {
                    n && (n.setAttribute("code.function", "RegisterCallbacks"), n.setAttribute("outsystems.function.key", "e67db216-47ed-4faa-9f19-6598ecde7b6f"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("RegisterCallbacks"), e = t.callContext(e);
                        var o = new C.DataTypes.VariableHolder;
                        o.value = C.Logger.startActiveSpan("GetCallbackHandlers", function(d) {
                            d && (d.setAttribute("code.function", "GetCallbackHandlers"), d.setAttribute("outsystems.function.key", "12086b05-e58f-48cd-bdd4-a449983a20de"), d.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), d.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), d.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(tn, "GetCallbackHandlers", "RegisterCallbacks", {
                                    OnSlideMovedObj: C.DataConversion.JSNodeParamConverter.to(null, C.DataTypes.DataTypes.Object),
                                    OnCarouselInitializedObj: C.DataConversion.JSNodeParamConverter.to(null, C.DataTypes.DataTypes.Object)
                                }, function(v) {
                                    var u = new(t.constructor.getVariableGroupType("OutSystemsUI.Interaction.Carousel.RegisterCallbacks$getCallbackHandlersJSResult"));
                                    return u.onSlideMovedObjOut = C.DataConversion.JSNodeParamConverter.from(v.OnSlideMovedObj, C.DataTypes.DataTypes.Object), u.onCarouselInitializedObjOut = C.DataConversion.JSNodeParamConverter.from(v.OnCarouselInitializedObj, C.DataTypes.DataTypes.Object), u
                                }, {
                                    OnSlideMovedHandler: t.clientActionProxies.onSlideMovedHandler$Action,
                                    InitializeHandler: t.clientActionProxies.initializeHandler$Action
                                }, {})
                            } finally {
                                d && d.end()
                            }
                        }, 1), I.carouselRegisterCallback$Action(r.variables.internalConfigsVar.uniqueIdAttr, Q.registeredCallbackEvents.carousel_OnSlideMoved, o.value.onSlideMovedObjOut, e), I.carouselRegisterCallback$Action(r.variables.internalConfigsVar.uniqueIdAttr, Q.registeredCallbackEvents.initialized, o.value.onCarouselInitializedObjOut, e)
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
                return C.Logger.startActiveSpan("OnRender", function(n) {
                    n && (n.setAttribute("code.function", "OnRender"), n.setAttribute("outsystems.function.key", "ff217726-3e54-4696-a30d-8293d473e1b0"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnRender"), e = t.callContext(e), I.carouselUpdateOnRender$Action(r.variables.internalConfigsVar.uniqueIdAttr, e)
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
            return C.Logger.startActiveSpan("OnDestroy__proxy", function(t) {
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
            return C.Logger.startActiveSpan("InitializeHandler__proxy", function(s) {
                return s && (s.setAttribute("code.function", "InitializeHandler"), s.setAttribute("outsystems.function.key", "2878f020-349a-4095-92b5-64914bdbefc7"), s.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), s.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), C.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._initializeHandler$Action, r, e)
                }, function() {
                    s && s.end()
                })
            }, 0)
        }
        onSlideMovedHandler$Action(e, r, t) {
            var s = this.controller;
            return C.Logger.startActiveSpan("OnSlideMovedHandler__proxy", function(n) {
                return n && (n.setAttribute("code.function", "OnSlideMovedHandler"), n.setAttribute("outsystems.function.key", "2b489ae5-936e-4624-b650-e33d88fbc446"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), C.Flow.tryFinally(function() {
                    return s.safeExecuteClientAction(s._onSlideMovedHandler$Action, t, e, r)
                }, function() {
                    n && n.end()
                })
            }, 0)
        }
        onParametersChanged$Action(e) {
            var r = this.controller;
            return C.Logger.startActiveSpan("OnParametersChanged__proxy", function(t) {
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
            return C.Logger.startActiveSpan("OnReady__proxy", function(t) {
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
            return C.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
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
            return C.Logger.startActiveSpan("RegisterCallbacks__proxy", function(t) {
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
            return C.Logger.startActiveSpan("OnRender__proxy", function(t) {
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
            return I.defaultTimeout
        }
    };
    a(i, "ControllerInner");
    let f = i;
    lt = f, lt.registerVariableGroupType("OutSystemsUI.Interaction.Carousel.InitializeHandler$vars", [{
        name: "CarouselId",
        attrName: "carouselIdInLocal",
        mandatory: !0,
        dataType: C.DataTypes.DataTypes.Text,
        defaultValue: a(function() {
            return ""
        }, "defaultValue")
    }]), lt.registerVariableGroupType("OutSystemsUI.Interaction.Carousel.OnSlideMovedHandler$vars", [{
        name: "CarouselId",
        attrName: "carouselIdInLocal",
        mandatory: !0,
        dataType: C.DataTypes.DataTypes.Text,
        defaultValue: a(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "Index",
        attrName: "indexInLocal",
        mandatory: !1,
        dataType: C.DataTypes.DataTypes.Integer,
        defaultValue: a(function() {
            return 0
        }, "defaultValue")
    }]), lt.registerVariableGroupType("OutSystemsUI.Interaction.Carousel.RegisterCallbacks$getCallbackHandlersJSResult", [{
        name: "OnSlideMovedObj",
        attrName: "onSlideMovedObjOut",
        mandatory: !0,
        dataType: C.DataTypes.DataTypes.Object,
        defaultValue: a(function() {
            return null
        }, "defaultValue")
    }, {
        name: "OnCarouselInitializedObj",
        attrName: "onCarouselInitializedObjOut",
        mandatory: !0,
        dataType: C.DataTypes.DataTypes.Object,
        defaultValue: a(function() {
            return null
        }, "defaultValue")
    }])
}
var lt, qi = new C.Controller.ControllerFactory(lt, Ne);
var Cc = E.PlaceholderContent,
    Pc = E.IteratorPlaceholderContent,
    Pe = class Pe extends V.BaseWebBlock {
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
            return Li
        }
        get controllerFactory() {
            return qi
        }
        get title() {
            return ""
        }
        internalRender() {
            let i = this.model,
                c = this.controller,
                e = this.idService,
                r = c.validationService,
                t = this.widgetsRecordProvider,
                s = c.callContext(),
                n = Pe.ifWidget,
                o = Pe.textWidget,
                d = Pe.asPrimitiveValue,
                v = Pe.getTranslation,
                u = this;
            return J.createElement("div", this.getRootNodeProperties(), J.createElement(m, {
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
            }, J.createElement(m, {
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
                return [J.createElement(At, {
                    align: 0,
                    content: u.props.placeholders.carouselItems,
                    style: "osui-carousel__content",
                    _idProps: {
                        service: e,
                        name: "CarouselItems"
                    },
                    _widgetRecordProvider: t
                }), J.createElement(m, {
                    align: 0,
                    animate: !1,
                    style: "splide__arrows",
                    visible: !1,
                    _idProps: {
                        service: e,
                        name: "Arrows"
                    },
                    _widgetRecordProvider: t
                }, J.createElement(m, {
                    align: 0,
                    animate: !1,
                    style: "splide__arrow splide__arrow--prev background-neutral-0",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "4"
                    },
                    _widgetRecordProvider: t
                }, J.createElement(ve, {
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
                })), J.createElement(m, {
                    align: 0,
                    animate: !1,
                    style: "splide__arrow splide__arrow--next background-neutral-0",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "6"
                    },
                    _widgetRecordProvider: t
                }, J.createElement(ve, {
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
                }))), J.createElement(m, {
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
                }, J.createElement(P, {
                    tag: "li",
                    _idProps: {
                        service: e,
                        uuid: "9"
                    },
                    _widgetRecordProvider: t
                }, J.createElement(m, {
                    align: 0,
                    animate: !1,
                    style: "splide__pagination__page is-active",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "10"
                    },
                    _widgetRecordProvider: t
                }), J.createElement(m, {
                    align: 0,
                    animate: !1,
                    style: "splide__pagination__page",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "11"
                    },
                    _widgetRecordProvider: t
                }), J.createElement(m, {
                    align: 0,
                    animate: !1,
                    style: "splide__pagination__page",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "12"
                    },
                    _widgetRecordProvider: t
                }), J.createElement(m, {
                    align: 0,
                    animate: !1,
                    style: "splide__pagination__page",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "13"
                    },
                    _widgetRecordProvider: t
                }), J.createElement(m, {
                    align: 0,
                    animate: !1,
                    style: "splide__pagination__page",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "14"
                    },
                    _widgetRecordProvider: t
                }), J.createElement(m, {
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
a(Pe, "View");
var rn = Pe,
    Ge = rn;
var fe = K(Z());
var Ya = {
        "dZs_UaLNzkKgTcMnmeLywA#Value": "\u062A\u0639\u0631\u0641 \u0639\u0644\u0649 \u0627\u0644\u0645\u0632\u064A\u062F",
        "fbMhprVBJUKl1tI+9HqV4w#Value": "\u0643\u064A\u0641\u064A\u0629 \u062D\u0633\u0627\u0628 \u0627\u0644\u0639\u0645\u0648\u0644\u0627\u062A"
    },
    eo = {
        "dZs_UaLNzkKgTcMnmeLywA#Value": "Mehr erfahren",
        "fbMhprVBJUKl1tI+9HqV4w#Value": "Wie Provisionen berechnet werden"
    },
    to = {
        "dZs_UaLNzkKgTcMnmeLywA#Value": "Aprende m\xE1s",
        "fbMhprVBJUKl1tI+9HqV4w#Value": "C\xF3mo se calculan las comisiones"
    },
    ro = {
        "dZs_UaLNzkKgTcMnmeLywA#Value": "En savoir plus",
        "fbMhprVBJUKl1tI+9HqV4w#Value": "Comment les commissions sont calcul\xE9es"
    },
    no = {
        "dZs_UaLNzkKgTcMnmeLywA#Value": "Scopri di pi\xF9",
        "fbMhprVBJUKl1tI+9HqV4w#Value": "Come vengono calcolate le commissioni"
    },
    io = {
        "dZs_UaLNzkKgTcMnmeLywA#Value": "Dowiedz si\u0119 wi\u0119cej",
        "fbMhprVBJUKl1tI+9HqV4w#Value": "Jak s\u0105 obliczane prowizje"
    },
    ao = {
        "dZs_UaLNzkKgTcMnmeLywA#Value": "Saiba mais",
        "fbMhprVBJUKl1tI+9HqV4w#Value": "Como s\xE3o calculadas as comiss\xF5es"
    },
    oo = {
        "dZs_UaLNzkKgTcMnmeLywA#Value": "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435",
        "fbMhprVBJUKl1tI+9HqV4w#Value": "\u041A\u0430\u043A \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u0438"
    },
    ji = {
        "ar-001": {
            translations: Ya,
            isRTL: !0
        },
        "de-DE": {
            translations: eo,
            isRTL: !1
        },
        "es-ES": {
            translations: to,
            isRTL: !1
        },
        "fr-FR": {
            translations: ro,
            isRTL: !1
        },
        "it-IT": {
            translations: no,
            isRTL: !1
        },
        "pl-PL": {
            translations: io,
            isRTL: !1
        },
        "pt-PT": {
            translations: ao,
            isRTL: !1
        },
        "ru-RU": {
            translations: oo,
            isRTL: !1
        }
    };

function nn(f, i, c) {
    window.open("https://deriv.com/help-centre/affiliate-programme#id-commission-plans")
}
a(nn, "default");
var ct = h; {
    let i = class i extends ct.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, ji);
            var s = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onClickLearnMore$Action() {
            return this.hasOwnProperty("__onClickLearnMore$Action") || (this.__onClickLearnMore$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    s = this.idService;
                return ct.Logger.startActiveSpan("OnClickLearnMore", function(n) {
                    n && (n.setAttribute("code.function", "OnClickLearnMore"), n.setAttribute("outsystems.function.key", "c552f8c8-233b-4d7e-be75-4f3a01fcb16f"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnClickLearnMore"), e = t.callContext(e), O.rudderstackTrackEvent$Action(function() {
                            var o = new B;
                            return o.actionAttr = "click_cta", o.cta_nameAttr = "Learn more", o.cta_placementAttr = "commission calculation section", o
                        }(), "ce_partnershub_form", e), ct.Logger.startActiveSpan("JavaScript1", function(o) {
                            o && (o.setAttribute("code.function", "JavaScript1"), o.setAttribute("outsystems.function.key", "079da253-b4e7-4d34-bb0a-abf0bae25d20"), o.setAttribute("outsystems.function.owner.name", "PartnersHub"), o.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(nn, "JavaScript1", "OnClickLearnMore", null, function(d) {}, {}, {})
                            } finally {
                                o && o.end()
                            }
                        }, 1)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onClickLearnMore$Action
        }
        set _onClickLearnMore$Action(e) {
            this.__onClickLearnMore$Action = e
        }
        onClickLearnMore$Action(e) {
            var r = this.controller;
            return ct.Logger.startActiveSpan("OnClickLearnMore__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnClickLearnMore"), t.setAttribute("outsystems.function.key", "c552f8c8-233b-4d7e-be75-4f3a01fcb16f"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onClickLearnMore$Action, e)
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
            return O.defaultTimeout
        }
    };
    a(i, "ControllerInner");
    let f = i;
    Ki = f
}
var Ki, Zi = new ct.Controller.ControllerFactory(Ki, L);
var Xi = h,
    Uc = E.PlaceholderContent,
    zc = E.IteratorPlaceholderContent,
    Ee = class Ee extends V.BaseWebBlock {
        static get displayName() {
            return "Home.CommissionBanner"
        }
        static getAttributes() {
            return {
                codeFunction: "CommissionBanner",
                functionKey: "d4ea40cd-9795-4f8f-add6-5946911c0c4e",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Home.CommissionBanner.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return Fi
        }
        get controllerFactory() {
            return Zi
        }
        get title() {
            return ""
        }
        internalRender() {
            let i = this.model,
                c = this.controller,
                e = this.idService,
                r = c.validationService,
                t = this.widgetsRecordProvider,
                s = c.callContext(),
                n = Ee.ifWidget,
                o = Ee.textWidget,
                d = Ee.asPrimitiveValue,
                v = Ee.getTranslation,
                u = this;
            return fe.createElement("div", this.getRootNodeProperties(), fe.createElement(m, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "background-color: #e9ecef; border-radius: 8px; display: inline-block; height: 153px; max-height: 130px; overflow: hidden; position: relative;"
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "100%"
                },
                style: "commission-banner",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, fe.createElement(z, {
                extendedProperties: {
                    style: "height: 100%; position: absolute; z-index: 0;"
                },
                gridProperties: {
                    width: "100vw"
                },
                image: Xi.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.GraphBackground.png"),
                type: 0,
                _idProps: {
                    service: e,
                    name: "GraphBackground"
                },
                _widgetRecordProvider: t
            }), fe.createElement(z, {
                extendedProperties: {
                    style: "height: 120px; position: absolute; right: 10%;"
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                image: Xi.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.CommisionStructureIcon.svg"),
                style: "commission-icon",
                type: 0,
                _idProps: {
                    service: e,
                    name: "CommisionStructureIcon"
                },
                _widgetRecordProvider: t
            }), fe.createElement(m, {
                align: 0,
                animate: !1,
                style: "text-container",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "3"
                },
                _widgetRecordProvider: t
            }, fe.createElement(m, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "display: flex; flex-direction: column; gap: 8px; justify-content: center; z-index: 2;"
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "50%"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "4"
                },
                _widgetRecordProvider: t
            }, fe.createElement(A, {
                extendedProperties: {
                    style: "font-size: 16px; font-weight: bold; text-wrap: wrap;"
                },
                style: "commission-text",
                text: [o(v("fbMhprVBJUKl1tI+9HqV4w#Value", "How commissions are calculated"))],
                _idProps: {
                    service: e,
                    uuid: "5"
                },
                _widgetRecordProvider: t
            }), fe.createElement(Fe, {
                enabled: !0,
                extendedProperties: {
                    style: "z-index: 2;"
                },
                gridProperties: {
                    width: "110px",
                    marginLeft: "0"
                },
                isDefault: !1,
                onClick: a(function() {
                    var l = s.clone();
                    c.onClickLearnMore$Action(c.callContext(l))
                }, "onClick"),
                style: "learn-more-button",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "6"
                },
                _widgetRecordProvider: t
            }, o(v("dZs_UaLNzkKgTcMnmeLywA#Value", "Learn more")))))))
        }
    };
a(Ee, "View");
var an = Ee,
    on = an;
var Mt = E.PlaceholderContent,
    td = E.IteratorPlaceholderContent,
    we = class we extends V.BaseWebBlock {
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
            return [en, fr, Ge, on]
        }
        get modelFactory() {
            return Wi
        }
        get controllerFactory() {
            return $i
        }
        get title() {
            return ""
        }
        internalRender() {
            let i = this.model,
                c = this.controller,
                e = this.idService,
                r = c.validationService,
                t = this.widgetsRecordProvider,
                s = c.callContext(),
                n = we.ifWidget,
                o = we.textWidget,
                d = we.asPrimitiveValue,
                v = we.getTranslation,
                u = this;
            return b.createElement("div", this.getRootNodeProperties(), n(_.getisCommisionsPlansEnabledFF(), !1, this, function() {
                return [b.createElement(m, {
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
                }, b.createElement(m, {
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
                }, b.createElement(m, {
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
                }, b.createElement(P, {
                    tag: "h5",
                    _idProps: {
                        service: e,
                        uuid: "3"
                    },
                    _widgetRecordProvider: t
                }, b.createElement(A, {
                    extendedProperties: {
                        OSTagName: "h5"
                    },
                    style: "container-title",
                    text: [o(v("IOkWIqJMPUO_Lk53vxAtSw#Value", "You can earn commissions from"))],
                    _idProps: {
                        service: e,
                        name: "Youcanearncommissionsfrom"
                    },
                    _widgetRecordProvider: t
                })), b.createElement(m, {
                    align: 0,
                    animate: !1,
                    style: "cfd-container",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "5"
                    },
                    _widgetRecordProvider: t
                }, b.createElement(P, {
                    extendedProperties: {
                        value: "CFDs"
                    },
                    tag: "h6",
                    _idProps: {
                        service: e,
                        uuid: "6"
                    },
                    _widgetRecordProvider: t
                }, b.createElement(A, {
                    style: "section-subtitle",
                    text: ["CFDs trading"],
                    _idProps: {
                        service: e,
                        uuid: "7"
                    },
                    _widgetRecordProvider: t
                })), b.createElement(x, {
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    _idProps: {
                        service: e,
                        uuid: "8"
                    },
                    _widgetRecordProvider: t
                }, b.createElement(A, {
                    style: "description",
                    text: [o(v("rEEPHXMxSkqto6iJFQRDow#Value", "Earn with our instrument-based commission plan."))],
                    _idProps: {
                        service: e,
                        uuid: "9"
                    },
                    _widgetRecordProvider: t
                }), b.createElement(P, {
                    extendedEvents: {
                        onClick: a(function() {
                            return Promise.resolve().then(function() {
                                var l = s.clone();
                                return c.onClickToCFDs$Action(c.callContext(l))
                            })
                        }, "onClick")
                    },
                    tag: "span",
                    _idProps: {
                        service: e,
                        uuid: "10"
                    },
                    _widgetRecordProvider: t
                }, b.createElement(A, {
                    extendedProperties: {
                        style: "color: #222; cursor: pointer; font-weight: bold; margin-left: 4px; text-decoration: underline;"
                    },
                    style: "learn-more",
                    text: [o(v("WWVqgcxwK02Qs6tbKp5Mmg#Value", "Learn more"))],
                    _idProps: {
                        service: e,
                        uuid: "11"
                    },
                    _widgetRecordProvider: t
                })))), b.createElement(en, {
                    getOwnerSpan: a(function() {
                        return u.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: a(function() {
                        return u.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        Space: ue.space.small
                    },
                    events: {
                        _handleError: a(function(l) {
                            c.handleError(l)
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
                }), b.createElement(m, {
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
                }, b.createElement(P, {
                    tag: "h6",
                    _idProps: {
                        service: e,
                        uuid: "14"
                    },
                    _widgetRecordProvider: t
                }, b.createElement(A, {
                    style: "section-subtitle",
                    text: ["Options trading"],
                    _idProps: {
                        service: e,
                        uuid: "15"
                    },
                    _widgetRecordProvider: t
                })), b.createElement(fr, {
                    getOwnerSpan: a(function() {
                        return u.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: a(function() {
                        return u.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: a(function(l) {
                            c.handleError(l)
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
                        onDesktop: new Mt(function() {
                            return [b.createElement(m, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "display: flex; gap: 8px;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "17"
                                },
                                _widgetRecordProvider: t
                            }, b.createElement(m, {
                                align: 0,
                                animate: !1,
                                gridProperties: {
                                    classes: "OSInline"
                                },
                                style: "options-trading-container",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    name: "RevShare"
                                },
                                _widgetRecordProvider: t
                            }, b.createElement(A, {
                                extendedProperties: {
                                    style: "padding: 0;"
                                },
                                style: "ph-card-title",
                                text: ["RevShare plan"],
                                _idProps: {
                                    service: e,
                                    uuid: "19"
                                },
                                _widgetRecordProvider: t
                            }), b.createElement(m, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "20"
                                },
                                _widgetRecordProvider: t
                            }, b.createElement(x, {
                                extendedProperties: {
                                    style: "display: flex; flex-direction: column;"
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                _idProps: {
                                    service: e,
                                    uuid: "21"
                                },
                                _widgetRecordProvider: t
                            }, b.createElement(A, {
                                style: "description",
                                text: [o(v("SLerLFjvfkWtG9Y9RHDzJQ#Value", "Earn up to 40% commissions from client trades. "))],
                                _idProps: {
                                    service: e,
                                    uuid: "22"
                                },
                                _widgetRecordProvider: t
                            }), b.createElement(m, {
                                align: 0,
                                animate: !1,
                                extendedEvents: {
                                    onClick: a(function() {
                                        var l = s.clone();
                                        c.onClickToRevShare$Action(c.callContext(l))
                                    }, "onClick")
                                },
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "23"
                                },
                                _widgetRecordProvider: t
                            }, b.createElement(A, {
                                extendedProperties: {
                                    style: "color: #222; cursor: pointer; font-weight: bold; text-decoration: underline;"
                                },
                                style: "learn-more",
                                text: [o(v("gqFqY_hmtEqB00VisGJ7PA#Value", "Learn more"))],
                                _idProps: {
                                    service: e,
                                    uuid: "24"
                                },
                                _widgetRecordProvider: t
                            }))))), b.createElement(m, {
                                align: 0,
                                animate: !1,
                                gridProperties: {
                                    classes: "OSInline"
                                },
                                style: "options-trading-container",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    name: "Turnover"
                                },
                                _widgetRecordProvider: t
                            }, b.createElement(A, {
                                extendedProperties: {
                                    style: "font-weight: 700;"
                                },
                                style: "ph-card-title",
                                text: ["Turnover plan"],
                                _idProps: {
                                    service: e,
                                    uuid: "26"
                                },
                                _widgetRecordProvider: t
                            }), b.createElement(m, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "27"
                                },
                                _widgetRecordProvider: t
                            }, b.createElement(x, {
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                _idProps: {
                                    service: e,
                                    uuid: "28"
                                },
                                _widgetRecordProvider: t
                            }, b.createElement(A, {
                                style: "description",
                                text: [o(v("kh4sLye1VkediZ_papE5UA#Value", "Earn based on each contract's payout probability. "))],
                                _idProps: {
                                    service: e,
                                    uuid: "29"
                                },
                                _widgetRecordProvider: t
                            }), b.createElement(m, {
                                align: 0,
                                animate: !1,
                                extendedEvents: {
                                    onClick: a(function() {
                                        var l = s.clone();
                                        c.onClickToTurnoverPlan$Action(c.callContext(l))
                                    }, "onClick")
                                },
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "30"
                                },
                                _widgetRecordProvider: t
                            }, b.createElement(A, {
                                extendedProperties: {
                                    style: "color: #222; cursor: pointer; font-weight: bold; text-decoration: underline;"
                                },
                                style: "learn-more",
                                text: [o(v("pcZDJsFxJE6u6Dad3I_6lw#Value", "Learn more"))],
                                _idProps: {
                                    service: e,
                                    uuid: "31"
                                },
                                _widgetRecordProvider: t
                            }))))))]
                        }),
                        onTablet: new Mt(function() {
                            return [b.createElement(m, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "display: flex; gap: 8px;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "32"
                                },
                                _widgetRecordProvider: t
                            }, b.createElement(m, {
                                align: 0,
                                animate: !1,
                                gridProperties: {
                                    classes: "OSInline"
                                },
                                style: "options-trading-container",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    name: "RevShare3"
                                },
                                _widgetRecordProvider: t
                            }, b.createElement(A, {
                                extendedProperties: {
                                    style: "padding: 0px;"
                                },
                                style: "ph-card-title",
                                text: ["RevShare plan"],
                                _idProps: {
                                    service: e,
                                    uuid: "34"
                                },
                                _widgetRecordProvider: t
                            }), b.createElement(m, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "35"
                                },
                                _widgetRecordProvider: t
                            }, b.createElement(x, {
                                extendedProperties: {
                                    style: "display: flex; flex-direction: column;"
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                _idProps: {
                                    service: e,
                                    uuid: "36"
                                },
                                _widgetRecordProvider: t
                            }, b.createElement(A, {
                                style: "description",
                                text: [o(v("fyGSjsifXUe_gnMUYXyUwQ#Value", "Earn up to 40% commissions from client trades. "))],
                                _idProps: {
                                    service: e,
                                    uuid: "37"
                                },
                                _widgetRecordProvider: t
                            }), b.createElement(m, {
                                align: 0,
                                animate: !1,
                                extendedEvents: {
                                    onClick: a(function() {
                                        var l = s.clone();
                                        c.onClickToRevShare$Action(c.callContext(l))
                                    }, "onClick")
                                },
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "38"
                                },
                                _widgetRecordProvider: t
                            }, b.createElement(A, {
                                extendedProperties: {
                                    style: "width: 400px;"
                                },
                                style: "learn-more",
                                text: [o(v("re4x2mAFAUCi0Uzf_QD9jQ#Value", "Learn more"))],
                                _idProps: {
                                    service: e,
                                    uuid: "39"
                                },
                                _widgetRecordProvider: t
                            }))))), b.createElement(m, {
                                align: 0,
                                animate: !1,
                                gridProperties: {
                                    classes: "OSInline"
                                },
                                style: "options-trading-container",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    name: "Turnover3"
                                },
                                _widgetRecordProvider: t
                            }, b.createElement(A, {
                                extendedProperties: {
                                    style: "padding: 0px;"
                                },
                                style: "ph-card-title",
                                text: ["Turnover plan"],
                                _idProps: {
                                    service: e,
                                    uuid: "41"
                                },
                                _widgetRecordProvider: t
                            }), b.createElement(m, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "42"
                                },
                                _widgetRecordProvider: t
                            }, b.createElement(x, {
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                _idProps: {
                                    service: e,
                                    uuid: "43"
                                },
                                _widgetRecordProvider: t
                            }, b.createElement(A, {
                                style: "description",
                                text: [o(v("8PuQXxeY_kWA63n55v6LWw#Value", "Earn based on each contract's payout probability. "))],
                                _idProps: {
                                    service: e,
                                    uuid: "44"
                                },
                                _widgetRecordProvider: t
                            }), b.createElement(m, {
                                align: 0,
                                animate: !1,
                                extendedEvents: {
                                    onClick: a(function() {
                                        var l = s.clone();
                                        c.onClickToTurnoverPlan$Action(c.callContext(l))
                                    }, "onClick")
                                },
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "45"
                                },
                                _widgetRecordProvider: t
                            }, b.createElement(A, {
                                style: "learn-more",
                                text: [o(v("n+i_Qvrm2kCUpA6OBct+Aw#Value", "Learn more"))],
                                _idProps: {
                                    service: e,
                                    uuid: "46"
                                },
                                _widgetRecordProvider: t
                            }))))))]
                        }),
                        onPhone: new Mt(function() {
                            return [b.createElement(Ge, {
                                getOwnerSpan: a(function() {
                                    return u.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: a(function() {
                                    return u.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    Navigation: ue.carouselNavigation.dots,
                                    OptionalConfigs: i.getCachedValue(e.getId("OoMZK4WfKEK1HTTf55TPtQ.OptionalConfigs"), function() {
                                        return function() {
                                            var l = new _e;
                                            return l.autoPlayAttr = !1, l.loopAttr = !1, l.itemsGapAttr = "8px", l
                                        }()
                                    })
                                },
                                events: {
                                    _handleError: a(function(l) {
                                        c.handleError(l)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: r
                                },
                                _idProps: {
                                    service: e,
                                    uuid: "47",
                                    alias: "3"
                                },
                                _widgetRecordProvider: t,
                                placeholders: {
                                    carouselItems: new Mt(function() {
                                        return [b.createElement(m, {
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
                                        }, b.createElement(A, {
                                            extendedProperties: {
                                                style: "padding: 0px;"
                                            },
                                            style: "ph-card-title",
                                            text: ["RevShare plan"],
                                            _idProps: {
                                                service: e,
                                                uuid: "49"
                                            },
                                            _widgetRecordProvider: t
                                        }), b.createElement(m, {
                                            align: 0,
                                            animate: !1,
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                uuid: "50"
                                            },
                                            _widgetRecordProvider: t
                                        }, b.createElement(P, {
                                            tag: "span",
                                            _idProps: {
                                                service: e,
                                                uuid: "51"
                                            },
                                            _widgetRecordProvider: t
                                        }, b.createElement(A, {
                                            style: "description",
                                            text: [o(v("XJlYjScU5EGNahb_Fsa1lw#Value", "Earn up to 40% commissions from client trades. "))],
                                            _idProps: {
                                                service: e,
                                                uuid: "52"
                                            },
                                            _widgetRecordProvider: t
                                        }), b.createElement(P, {
                                            extendedEvents: {
                                                onClick: a(function() {
                                                    var l = s.clone();
                                                    c.onClickToRevShare$Action(c.callContext(l))
                                                }, "onClick")
                                            },
                                            tag: "span",
                                            _idProps: {
                                                service: e,
                                                uuid: "53"
                                            },
                                            _widgetRecordProvider: t
                                        }, b.createElement(A, {
                                            style: "learn-more",
                                            text: [o(v("HonwjG9X0kymyBgfrA6GHw#Value", "Learn more"))],
                                            _idProps: {
                                                service: e,
                                                uuid: "54"
                                            },
                                            _widgetRecordProvider: t
                                        }))))), b.createElement(m, {
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
                                        }, b.createElement(A, {
                                            extendedProperties: {
                                                style: "padding: 0px;"
                                            },
                                            style: "ph-card-title",
                                            text: ["Turnover plan"],
                                            _idProps: {
                                                service: e,
                                                uuid: "56"
                                            },
                                            _widgetRecordProvider: t
                                        }), b.createElement(m, {
                                            align: 0,
                                            animate: !1,
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                uuid: "57"
                                            },
                                            _widgetRecordProvider: t
                                        }, b.createElement(P, {
                                            tag: "span",
                                            _idProps: {
                                                service: e,
                                                uuid: "58"
                                            },
                                            _widgetRecordProvider: t
                                        }, b.createElement(A, {
                                            style: "description",
                                            text: [o(v("qTIgKtxxeUyfC2jIbHnPRg#Value", "Earn based on each contract's payout probability. "))],
                                            _idProps: {
                                                service: e,
                                                uuid: "59"
                                            },
                                            _widgetRecordProvider: t
                                        }), b.createElement(P, {
                                            extendedEvents: {
                                                onClick: a(function() {
                                                    var l = s.clone();
                                                    c.onClickToTurnoverPlan$Action(c.callContext(l))
                                                }, "onClick")
                                            },
                                            tag: "span",
                                            _idProps: {
                                                service: e,
                                                uuid: "60"
                                            },
                                            _widgetRecordProvider: t
                                        }, b.createElement(A, {
                                            style: "learn-more",
                                            text: [o(v("rsT4IPLlZkie9KkQmxX5rw#Value", "Learn more"))],
                                            _idProps: {
                                                service: e,
                                                uuid: "61"
                                            },
                                            _widgetRecordProvider: t
                                        })))))]
                                    })
                                },
                                _dependencies: []
                            })]
                        })
                    },
                    _dependencies: []
                })))))]
            }, function() {
                return [b.createElement(m, {
                    align: 0,
                    animate: !1,
                    gridProperties: {
                        classes: "OSInline",
                        width: "100%"
                    },
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "62"
                    },
                    _widgetRecordProvider: t
                }, b.createElement(on, {
                    getOwnerSpan: a(function() {
                        return u.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: a(function() {
                        return u.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: a(function(l) {
                            c.handleError(l)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: e,
                        uuid: "63",
                        alias: "4"
                    },
                    _widgetRecordProvider: t,
                    _dependencies: []
                }))]
            }))
        }
    };
a(we, "View");
var sn = we,
    ln = sn;
var se = K(Z());
var X = h,
    un = class un extends X.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Orientation", "orientationIn", "Orientation", !0, !1, X.DataTypes.DataTypes.Text, function() {
                return Q.orientation.horizontal
            }, !1), this.attr("_orientationInDataFetchStatus", "_orientationInDataFetchStatus", "_orientationInDataFetchStatus", !0, !1, X.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Height", "heightIn", "Height", !0, !1, X.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_heightInDataFetchStatus", "_heightInDataFetchStatus", "_heightInDataFetchStatus", !0, !1, X.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Width", "widthIn", "Width", !0, !1, X.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_widthInDataFetchStatus", "_widthInDataFetchStatus", "_widthInDataFetchStatus", !0, !1, X.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ScrollbarStyle", "scrollbarStyleIn", "ScrollbarStyle", !0, !1, X.DataTypes.DataTypes.Text, function() {
                return Q.scrollbarStyle.default
            }, !1), this.attr("_scrollbarStyleInDataFetchStatus", "_scrollbarStyleInDataFetchStatus", "_scrollbarStyleInDataFetchStatus", !0, !1, X.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, X.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, X.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(X.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(un, "VariablesRecord");
var $t = un;
$t.init();
var mn = class mn extends X.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(mn, "WidgetsRecord");
var cn = mn,
    fn = class fn extends X.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return $t
        }
        static getWidgetsRecordConstructor() {
            return cn
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(i) {
            "Orientation" in i && (this.variables.orientationIn = i.Orientation, "_orientationInDataFetchStatus" in i && (this.variables._orientationInDataFetchStatus = i._orientationInDataFetchStatus)), "Height" in i && (this.variables.heightIn = i.Height, "_heightInDataFetchStatus" in i && (this.variables._heightInDataFetchStatus = i._heightInDataFetchStatus)), "Width" in i && (this.variables.widthIn = i.Width, "_widthInDataFetchStatus" in i && (this.variables._widthInDataFetchStatus = i._widthInDataFetchStatus)), "ScrollbarStyle" in i && (this.variables.scrollbarStyleIn = i.ScrollbarStyle, "_scrollbarStyleInDataFetchStatus" in i && (this.variables._scrollbarStyleInDataFetchStatus = i._scrollbarStyleInDataFetchStatus)), "ExtendedClass" in i && (this.variables.extendedClassIn = i.ExtendedClass, "_extendedClassInDataFetchStatus" in i && (this.variables._extendedClassInDataFetchStatus = i._extendedClassInDataFetchStatus))
        }
    };
a(fn, "Model");
var Bt = fn;
Bt._hasValidationWidgetsValue = void 0;
var Yi = new X.Model.ModelFactory(Bt);
var N = h,
    dt = class dt extends N.Model.AggregateRecord {
        static attributesToDeclare() {
            return [].concat(N.Model.AggregateRecord.attributesToDeclare.call(this))
        }
        static get RecordListType() {
            return yt
        }
        static fromStructure(i) {
            return new dt(new dt.RecordClass({
                RecordListType: N.DataTypes.ImmutableBase.getData(i)
            }))
        }
    };
a(dt, "GetEventsAggrRec");
var ut = dt;
ut.init();
var pn = class pn extends N.DataTypes.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, N.DataTypes.DataTypes.Boolean, function() {
            return !0
        }, !1), this.attr("MaxEvents", "maxEventsIn", "MaxEvents", !0, !1, N.DataTypes.DataTypes.Integer, function() {
            return 3
        }, !1), this.attr("_maxEventsInDataFetchStatus", "_maxEventsInDataFetchStatus", "_maxEventsInDataFetchStatus", !0, !1, N.DataTypes.DataTypes.Integer, function() {
            return 1
        }, !1), this.attr("EventType", "eventTypeIn", "EventType", !0, !1, N.DataTypes.DataTypes.LongInteger, function() {
            return N.DataTypes.LongInteger.defaultValue
        }, !1), this.attr("_eventTypeInDataFetchStatus", "_eventTypeInDataFetchStatus", "_eventTypeInDataFetchStatus", !0, !1, N.DataTypes.DataTypes.Integer, function() {
            return 1
        }, !1), this.attr("Languages", "languagesIn", "Languages", !0, !1, N.DataTypes.DataTypes.RecordList, function() {
            return N.DataTypes.ImmutableBase.getData(new N.DataTypes.IntegerList)
        }, !1, N.DataTypes.IntegerList), this.attr("_languagesInDataFetchStatus", "_languagesInDataFetchStatus", "_languagesInDataFetchStatus", !0, !1, N.DataTypes.DataTypes.Integer, function() {
            return 1
        }, !1), this.attr("GetEvents", "getEventsAggr", "GetEvents", !0, !0, N.DataTypes.DataTypes.Record, function() {
            return N.DataTypes.ImmutableBase.getData(new ut)
        }, !0, ut)].concat(N.DataTypes.GenericRecord.attributesToDeclare.call(this))
    }
};
a(pn, "VariablesRecord");
var Ut = pn;
Ut.init();
var hn = class hn extends N.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(hn, "WidgetsRecord");
var vn = hn,
    Qe = class Qe extends N.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return Ut
        }
        static getWidgetsRecordConstructor() {
            return vn
        }
        static get hasValidationWidgets() {
            return Qe._hasValidationWidgetsValue === void 0 && (Qe._hasValidationWidgetsValue = void 0 || void 0 || void 0), Qe._hasValidationWidgetsValue
        }
        setInputs(i) {
            "MaxEvents" in i && (this.variables.maxEventsIn = i.MaxEvents, "_maxEventsInDataFetchStatus" in i && (this.variables._maxEventsInDataFetchStatus = i._maxEventsInDataFetchStatus)), "EventType" in i && (this.variables.eventTypeIn = i.EventType, "_eventTypeInDataFetchStatus" in i && (this.variables._eventTypeInDataFetchStatus = i._eventTypeInDataFetchStatus)), "Languages" in i && (this.variables.languagesIn = i.Languages, "_languagesInDataFetchStatus" in i && (this.variables._languagesInDataFetchStatus = i._languagesInDataFetchStatus))
        }
    };
a(Qe, "Model");
var zt = Qe;
zt._hasValidationWidgetsValue = void 0;
var ra = new N.Model.ModelFactory(zt);
var pe = h,
    ft = class ft extends pe.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("NumberOfEvents", "numberOfEventsVar", "NumberOfEvents", !0, !1, pe.DataTypes.DataTypes.Record, function() {
                return pe.DataTypes.ImmutableBase.getData(new ye)
            }, !1, ye)].concat(pe.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
        static fromStructure(i) {
            return new ft(new ft.RecordClass({
                numberOfEventsVar: pe.DataTypes.ImmutableBase.getData(i)
            }))
        }
    };
a(ft, "VariablesRecord");
var Jt = ft;
Jt.init();
var yn = class yn extends pe.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(yn, "WidgetsRecord");
var _n = yn,
    qe = class qe extends pe.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return Jt
        }
        static getWidgetsRecordConstructor() {
            return _n
        }
        static get hasValidationWidgets() {
            return qe._hasValidationWidgetsValue === void 0 && (qe._hasValidationWidgetsValue = void 0 || void 0 || void 0), qe._hasValidationWidgetsValue
        }
        setInputs(i) {}
    };
a(qe, "Model");
var Gt = qe;
Gt._hasValidationWidgetsValue = void 0;
var na = new pe.Model.ModelFactory(Gt);
var so = {
        "tN_UWmOs0kGS2m27_Rkz9Q#ValueExpression.-660735948.1": "\u0634\u0627\u0647\u062F \u0627\u0644\u0643\u0644",
        "JTUTHDwmmke37+oqdpbEoQ#Value": "\u064A\u0645\u0643\u0646\u0643 \u0643\u0633\u0628 \u0639\u0645\u0648\u0644\u0627\u062A \u0645\u0646"
    },
    lo = {
        "tN_UWmOs0kGS2m27_Rkz9Q#ValueExpression.-660735948.1": "Alle anzeigen",
        "JTUTHDwmmke37+oqdpbEoQ#Value": "Sie k\xF6nnen Provisionen von verdienen"
    },
    co = {
        "tN_UWmOs0kGS2m27_Rkz9Q#ValueExpression.-660735948.1": "Ver todo",
        "JTUTHDwmmke37+oqdpbEoQ#Value": "Puedes ganar comisiones de"
    },
    uo = {
        "tN_UWmOs0kGS2m27_Rkz9Q#ValueExpression.-660735948.1": "Voir tout",
        "JTUTHDwmmke37+oqdpbEoQ#Value": "Vous pouvez gagner des commissions de"
    },
    mo = {
        "tN_UWmOs0kGS2m27_Rkz9Q#ValueExpression.-660735948.1": "Vedi tutto",
        "JTUTHDwmmke37+oqdpbEoQ#Value": "Puoi guadagnare commissioni da"
    },
    fo = {
        "tN_UWmOs0kGS2m27_Rkz9Q#ValueExpression.-660735948.1": "Zobacz wszystko",
        "JTUTHDwmmke37+oqdpbEoQ#Value": "Mo\u017Cesz zarabia\u0107 prowizje z"
    },
    vo = {
        "tN_UWmOs0kGS2m27_Rkz9Q#ValueExpression.-660735948.1": "Ver tudo",
        "JTUTHDwmmke37+oqdpbEoQ#Value": "Voc\xEA pode ganhar comiss\xF5es de"
    },
    go = {
        "tN_UWmOs0kGS2m27_Rkz9Q#ValueExpression.-660735948.1": "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0441\u0435",
        "JTUTHDwmmke37+oqdpbEoQ#Value": "\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0437\u0430\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0442\u044C \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u043E\u043D\u043D\u044B\u0435 \u043E\u0442"
    },
    ia = {
        "ar-001": {
            translations: so,
            isRTL: !0
        },
        "de-DE": {
            translations: lo,
            isRTL: !1
        },
        "es-ES": {
            translations: co,
            isRTL: !1
        },
        "fr-FR": {
            translations: uo,
            isRTL: !1
        },
        "it-IT": {
            translations: mo,
            isRTL: !1
        },
        "pl-PL": {
            translations: fo,
            isRTL: !1
        },
        "pt-PT": {
            translations: vo,
            isRTL: !1
        },
        "ru-RU": {
            translations: go,
            isRTL: !1
        }
    };
var $ = h; {
    let i = class i extends $.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, ia);
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
                        return t.callServerAction("CountEvent", "screenservices/PartnersHub/Events/EventListSection/ActionCountEvent", "zV8oTZGzQLPEcc26KEGkxw", n, t.callContext(r), void 0, void 0, !0).then(function(o) {
                            var d = new(t.constructor.getVariableGroupType("PartnersHub.Events.EventListSection$ActionCountEvent"));
                            return d.numberOfRowOut = $.DataConversion.ServerDataConverter.from(o.NumberOfRow, ye), d
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
                        var o = new $.DataTypes.VariableHolder;
                        return $.Flow.executeAsyncFlow(function() {
                            return r.flush(), t.countEvent$ServerAction(_.getshowUnpublishEventFF(), e).then(function(d) {
                                o.value = d
                            }).then(function() {
                                r.variables.numberOfEventsVar = o.value.numberOfRowOut
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
                        return t.ensureControllerAlive("SeeAllOnClick"), e = t.callContext(e), O.rudderstackTrackEvent$Action(function() {
                            var o = new B;
                            return o.actionAttr = "click_cta", o.cta_nameAttr = "See all", o.cta_placementAttr = "see all in event section", o
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
            return O.defaultTimeout
        }
    };
    a(i, "ControllerInner");
    let f = i;
    bn = f, bn.registerVariableGroupType("PartnersHub.Events.EventListSection$ActionCountEvent", [{
        name: "NumberOfRow",
        attrName: "numberOfRowOut",
        mandatory: !1,
        dataType: $.DataTypes.DataTypes.Record,
        defaultValue: a(function() {
            return new ye
        }, "defaultValue"),
        complexType: ye
    }])
}
var bn, aa = new $.Controller.ControllerFactory(bn, L);
var Sn = K(Z());
var oa = {};

function An(f, i, c, e) {
    var r = document.getElementById(f.WidgetId),
        t = a(function(o) {
            var d;
            return isNaN(o) ? !1 : (d = parseFloat(o), (d | 0) === d)
        }, "checkIfIsInteger"),
        s = t(f.Height) ? f.Height + "px" : f.Height,
        n = t(f.Width) ? f.Width + "px" : f.Width;
    (f.Width !== "" || typeof f.Width != "undefined") && r.style.setProperty("--scrollable-area-width", n), (f.Height !== "" || typeof f.Height != "undefined") && r.style.setProperty("--scrollable-area-height", s)
}
a(An, "default");
var oe = h; {
    let i = class i extends oe.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, oa);
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
                return oe.Logger.startActiveSpan("OnParametersChanged", function(n) {
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
                return oe.Logger.startActiveSpan("OnReady", function(n) {
                    n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "a6ace38b-3765-45d8-9109-f6f321e459b8"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e), oe.Logger.startActiveSpan("SetClasses", function(o) {
                            o && (o.setAttribute("code.function", "SetClasses"), o.setAttribute("outsystems.function.key", "2e878d6a-5e78-44ab-9ac8-9d78395bf8f1"), o.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), o.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(An, "SetClasses", "OnReady", {
                                    Height: oe.DataConversion.JSNodeParamConverter.to(r.variables.heightIn, oe.DataTypes.DataTypes.Text),
                                    Width: oe.DataConversion.JSNodeParamConverter.to(r.variables.widthIn, oe.DataTypes.DataTypes.Text),
                                    WidgetId: oe.DataConversion.JSNodeParamConverter.to(s.getId("Content"), oe.DataTypes.DataTypes.Text)
                                }, function(d) {}, {}, {})
                            } finally {
                                o && o.end()
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
            return oe.Logger.startActiveSpan("OnParametersChanged__proxy", function(t) {
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
            return oe.Logger.startActiveSpan("OnReady__proxy", function(t) {
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
            return I.defaultTimeout
        }
    };
    a(i, "ControllerInner");
    let f = i;
    sa = f
}
var sa, la = new oe.Controller.ControllerFactory(sa, Ne);
var po = h,
    Vd = E.PlaceholderContent,
    Id = E.IteratorPlaceholderContent,
    Oe = class Oe extends V.BaseWebBlock {
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
            return Yi
        }
        get controllerFactory() {
            return la
        }
        get title() {
            return ""
        }
        internalRender() {
            let i = this.model,
                c = this.controller,
                e = this.idService,
                r = c.validationService,
                t = this.widgetsRecordProvider,
                s = c.callContext(),
                n = Oe.ifWidget,
                o = Oe.textWidget,
                d = Oe.asPrimitiveValue,
                v = Oe.getTranslation,
                u = this;
            return Sn.createElement("div", this.getRootNodeProperties(), Sn.createElement(At, {
                align: 0,
                content: u.props.placeholders.content,
                gridProperties: {
                    classes: "OSInline"
                },
                style: i.getCachedValue(e.getId("Content.Style"), function() {
                    return "scrollable-area-content " + i.variables.orientationIn + "-scroll " + (i.variables.scrollbarStyleIn === Q.scrollbarStyle.compact ? "compact" : i.variables.scrollbarStyleIn === Q.scrollbarStyle.none ? "none" : "") + (i.variables.extendedClassIn === "" ? "" : " " + i.variables.extendedClassIn)
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
                style_dataFetchStatus: po.Model.calculateDataFetchStatus(i.variables._orientationInDataFetchStatus, i.variables._scrollbarStyleInDataFetchStatus, i.variables._extendedClassInDataFetchStatus)
            }))
        }
    };
a(Oe, "View");
var Cn = Oe,
    Pn = Cn;
var W = K(Z());
var ho = {
        "3RwpAE_deEmOXUgTVGD9TA#Value": "\u0644\u0627 \u062A\u0648\u062C\u062F \u0623\u062D\u062F\u0627\u062B \u0645\u062C\u062F\u0648\u0644\u0629 \u0641\u064A \u0627\u0644\u0648\u0642\u062A \u0627\u0644\u062D\u0627\u0644\u064A."
    },
    _o = {
        "3RwpAE_deEmOXUgTVGD9TA#Value": "Derzeit sind keine Ereignisse geplant."
    },
    yo = {
        "3RwpAE_deEmOXUgTVGD9TA#Value": "No hay eventos programados en este momento."
    },
    bo = {
        "3RwpAE_deEmOXUgTVGD9TA#Value": "Aucun \xE9v\xE9nement n'est pr\xE9vu pour le moment."
    },
    Ao = {
        "3RwpAE_deEmOXUgTVGD9TA#Value": "Al momento non ci sono eventi programmati."
    },
    So = {
        "3RwpAE_deEmOXUgTVGD9TA#Value": "Obecnie nie ma zaplanowanych wydarze\u0144."
    },
    Co = {
        "3RwpAE_deEmOXUgTVGD9TA#Value": "N\xE3o h\xE1 eventos agendados no momento."
    },
    Po = {
        "3RwpAE_deEmOXUgTVGD9TA#Value": "\u0412 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0435 \u0432\u0440\u0435\u043C\u044F \u043D\u0435\u0442 \u0437\u0430\u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u0441\u043E\u0431\u044B\u0442\u0438\u0439."
    },
    ca = {
        "ar-001": {
            translations: ho,
            isRTL: !0
        },
        "de-DE": {
            translations: _o,
            isRTL: !1
        },
        "es-ES": {
            translations: yo,
            isRTL: !1
        },
        "fr-FR": {
            translations: bo,
            isRTL: !1
        },
        "it-IT": {
            translations: Ao,
            isRTL: !1
        },
        "pl-PL": {
            translations: So,
            isRTL: !1
        },
        "pt-PT": {
            translations: Co,
            isRTL: !1
        },
        "ru-RU": {
            translations: Po,
            isRTL: !1
        }
    };

function En(f, i, c, e) {
    let r = JSON.parse(f.EventList),
        t = JSON.parse(f.Languages),
        s = f.EventType === 0 ? r : r.filter(o => o.Event.EventTypeId === f.EventType),
        n = t.length === 0 ? s : s.filter(o => o.Event && t.includes(o.Event.LanguageId));
    f.Events = JSON.stringify(n)
}
a(En, "default");
var w = h; {
    let i = class i extends w.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, ca);
            var s = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {
                getEvents$AggrRefresh: 0
            }, this.dataFetchDependentsGraph = {
                getEvents$AggrRefresh: []
            }, this.shouldSendClientVarsToDataSources = !0
        }
        get getEvents$AggrRefresh() {
            return this.hasOwnProperty("_getEvents$AggrRefresh") || (this._getEvents$AggrRefresh = function() {
                var e = function(r, t, d) {
                    var n = this.model,
                        o = this.controller,
                        d = o.callContext(d);
                    return o.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetEvents", "screenservices/PartnersHub/Events/EventList/ScreenDataSetGetEvents", "BhipjVRlgfMImSn7wzourg", r, t, function(v) {
                        n.variables.getEventsAggr.dataFetchStatusAttr = v
                    }, function(v) {
                        n.variables.getEventsAggr.replaceWith(w.DataConversion.ServerDataConverter.from(v, n.variables.getEventsAggr.constructor))
                    }, void 0, void 0, void 0, d, _, !0).then(function() {
                        o._getEventsOnAfterFetch$Action(o.callContext(d))
                    })
                }.bind(this);
                return w.Logger.startActiveSpan("GetEvents", function(r) {
                    return r && (r.setAttribute("code.function", "GetEvents"), r.setAttribute("outsystems.function.key", "30a51a6b-7320-4f44-8e88-5270e578d5cb"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "SCREEN_SERVICE_AGGREGATE_CALL")), w.Flow.tryFinally(function() {
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
                return w.Logger.startActiveSpan("OnParametersChanged", function(n) {
                    return n && (n.setAttribute("code.function", "OnParametersChanged"), n.setAttribute("outsystems.function.key", "0450cfb4-fd3d-48b1-8d3d-3eee243d9842"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), w.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("OnParametersChanged"), e = t.callContext(e), w.Flow.executeAsyncFlow(function() {
                            var o = t.getEvents$AggrRefresh(r.variables.maxEventsIn, 0, e);
                            return r.flush(), o
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
                return w.Logger.startActiveSpan("GetEventsOnAfterFetch", function(n) {
                    n && (n.setAttribute("code.function", "GetEventsOnAfterFetch"), n.setAttribute("outsystems.function.key", "93025021-0e45-46a7-82f9-5c679672e504"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("GetEventsOnAfterFetch"), e = t.callContext(e);
                        var o = new w.DataTypes.VariableHolder,
                            d = new w.DataTypes.VariableHolder(new w.DataTypes.JSONSerializeOutputType),
                            v = new w.DataTypes.VariableHolder(new w.DataTypes.JSONSerializeOutputType),
                            u = new w.DataTypes.VariableHolder(new(w.Controller.BaseController.getJSONDeserializeOutputType(or)));
                        v.value.jSONOut = w.JSONUtils.serializeToJSON(r.variables.getEventsAggr.listOut, !1, !1), d.value.jSONOut = w.JSONUtils.serializeToJSON(r.variables.languagesIn, !1, !1, w.DataTypes.DataTypes.LanguagesIdentifier), o.value = w.Logger.startActiveSpan("JavaScript1", function(l) {
                            l && (l.setAttribute("code.function", "JavaScript1"), l.setAttribute("outsystems.function.key", "ac6d1f70-1f0e-4cf7-a39c-55d41413e29f"), l.setAttribute("outsystems.function.owner.name", "PartnersHub"), l.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), l.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(En, "JavaScript1", "GetEventsOnAfterFetch", {
                                    Languages: w.DataConversion.JSNodeParamConverter.to(d.value.jSONOut, w.DataTypes.DataTypes.Text),
                                    EventList: w.DataConversion.JSNodeParamConverter.to(v.value.jSONOut, w.DataTypes.DataTypes.Text),
                                    EventType: w.DataConversion.JSNodeParamConverter.to(r.variables.eventTypeIn, w.DataTypes.DataTypes.LongInteger),
                                    Events: w.DataConversion.JSNodeParamConverter.to("", w.DataTypes.DataTypes.Text)
                                }, function(g) {
                                    var D = new(t.constructor.getVariableGroupType("PartnersHub.Events.EventList.GetEventsOnAfterFetch$javaScript1JSResult"));
                                    return D.eventsOut = w.DataConversion.JSNodeParamConverter.from(g.Events, w.DataTypes.DataTypes.Text), D
                                }, {}, {})
                            } finally {
                                l && l.end()
                            }
                        }, 1), u.value.dataOut = w.JSONUtils.deserializeFromJSON(o.value.eventsOut, or, !1), r.variables.getEventsAggr.listOut = w.DataConversion.JSConversions.typeConvertRecordList(u.value.dataOut, new yt, function(l, g) {
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
                return w.Logger.startActiveSpan("OnClickEvent", function(n) {
                    n && (n.setAttribute("code.function", "OnClickEvent"), n.setAttribute("outsystems.function.key", "f94b253d-c72c-466c-94bd-7269718689ee"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("OnClickEvent"), e = t.callContext(e), O.rudderstackTrackEvent$Action(function() {
                            var o = new B;
                            return o.actionAttr = "click_cta", o.cta_nameAttr = r.variables.getEventsAggr.listOut.getCurrent(e.iterationContext).eventAttr.titleAttr + " event", o.cta_placementAttr = "event card in event section", o
                        }(), "ce_partnershub_form", e), w.Navigation.navigateTo(w.Navigation.generateScreenURL("PartnersHub", "EventDetails", {
                            EventId: w.DataConversion.ServerDataConverter.to(r.variables.getEventsAggr.listOut.getCurrent(e.iterationContext).eventAttr.idAttr, w.DataTypes.DataTypes.LongInteger)
                        }), w.Transitions.createTransition(w.Transitions.TransitionAnimation.None), e, !0)
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
            return w.Logger.startActiveSpan("OnParametersChanged__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnParametersChanged"), t.setAttribute("outsystems.function.key", "0450cfb4-fd3d-48b1-8d3d-3eee243d9842"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), w.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onParametersChanged$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        getEventsOnAfterFetch$Action(e) {
            var r = this.controller;
            return w.Logger.startActiveSpan("GetEventsOnAfterFetch__proxy", function(t) {
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
            return w.Logger.startActiveSpan("OnClickEvent__proxy", function(t) {
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
            return O.defaultTimeout
        }
    };
    a(i, "ControllerInner");
    let f = i;
    wn = f, wn.registerVariableGroupType("PartnersHub.Events.EventList.GetEventsOnAfterFetch$javaScript1JSResult", [{
        name: "Events",
        attrName: "eventsOut",
        mandatory: !0,
        dataType: w.DataTypes.DataTypes.Text,
        defaultValue: a(function() {
            return ""
        }, "defaultValue")
    }])
}
var wn, da = new w.Controller.ControllerFactory(wn, L);
var G = h,
    Eo = E.PlaceholderContent,
    wo = E.IteratorPlaceholderContent,
    Re = class Re extends V.BaseWebBlock {
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
            return [vr, St, k]
        }
        get modelFactory() {
            return ra
        }
        get controllerFactory() {
            return da
        }
        get title() {
            return ""
        }
        internalRender() {
            let i = this.model,
                c = this.controller,
                e = this.idService,
                r = c.validationService,
                t = this.widgetsRecordProvider,
                s = c.callContext(),
                n = Re.ifWidget,
                o = Re.textWidget,
                d = Re.asPrimitiveValue,
                v = Re.getTranslation,
                u = this;
            return W.createElement("div", this.getRootNodeProperties(), W.createElement(vr, {
                getOwnerSpan: a(function() {
                    return u.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return u.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    IsLoading: i.variables.isLoadingVar
                },
                events: {
                    _handleError: a(function(l) {
                        c.handleError(l)
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
                    content: new Eo(function() {
                        return [n(i.variables.getEventsAggr.listOut.isEmpty, !1, this, function() {
                            return [W.createElement(A, {
                                style: "ph-text",
                                text: [o(v("3RwpAE_deEmOXUgTVGD9TA#Value", "There are no events scheduled at the moment."))],
                                _idProps: {
                                    service: e,
                                    uuid: "1"
                                },
                                _widgetRecordProvider: t
                            })]
                        }, function() {
                            return [n(i.variables.getEventsAggr.listOut.length > 1, !1, this, function() {
                                return [W.createElement(bt, {
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
                                    source_dataFetchStatus: G.Model.calculateDataFetchStatus(i.variables.getEventsAggr.dataFetchStatusAttr),
                                    style_dataFetchStatus: G.Model.calculateDataFetchStatus(i.variables.getEventsAggr.dataFetchStatusAttr),
                                    placeholders: {
                                        content: new wo(function(l, g) {
                                            return [W.createElement(m, {
                                                align: 0,
                                                animate: !1,
                                                extendedEvents: {
                                                    onClick: a(function() {
                                                        var D = g.clone();
                                                        c.onClickEvent$Action(c.callContext(D))
                                                    }, "onClick")
                                                },
                                                style: "ph-event-card-container",
                                                visible: !0,
                                                _idProps: {
                                                    service: l,
                                                    uuid: "3"
                                                },
                                                _widgetRecordProvider: t,
                                                _dependencies: [d(i.variables.getEventsAggr.dataFetchStatusAttr), d(i.variables.getEventsAggr.listOut.getCurrent(g.iterationContext).countryAttr.nameAttr), d(i.variables.getEventsAggr.listOut.getCurrent(g.iterationContext).countryAttr.timeZoneAttr), d(i.variables.getEventsAggr.listOut.getCurrent(g.iterationContext).eventAttr.dateTimeAttr), d(i.variables.getEventsAggr.listOut.getCurrent(g.iterationContext).eventAttr.titleAttr), d(i.variables.getEventsAggr.listOut.getCurrent(g.iterationContext).eventAttr.mobileImageAttr), d(i.variables.getEventsAggr.listOut.getCurrent(g.iterationContext).eventAttr.idAttr)]
                                            }, W.createElement(St, {
                                                getOwnerSpan: a(function() {
                                                    return u.getChildSpan("render")
                                                }, "getOwnerSpan"),
                                                getOwnerDisposeSpan: a(function() {
                                                    return u.getChildSpan("destroy")
                                                }, "getOwnerDisposeSpan"),
                                                inputs: {
                                                    EventDetails: i.getCachedValue(l.getId("A8vN53M6KEWkcvMmKCq45Q.EventDetails"), function() {
                                                        return function() {
                                                            var D = new lr;
                                                            return D.idAttr = i.variables.getEventsAggr.listOut.getCurrent(g.iterationContext).eventAttr.idAttr, D.fileNamesAttr = function() {
                                                                var j = new sr;
                                                                return j.desktopImageNameAttr = "", j.mobileImageNameAttr = i.variables.getEventsAggr.listOut.getCurrent(g.iterationContext).eventAttr.mobileImageAttr, j
                                                            }(), D
                                                        }()
                                                    }, function() {
                                                        return i.variables.getEventsAggr.listOut.getCurrent(g.iterationContext).eventAttr.idAttr
                                                    }, function() {
                                                        return i.variables.getEventsAggr.listOut.getCurrent(g.iterationContext).eventAttr.mobileImageAttr
                                                    }),
                                                    _eventDetailsInDataFetchStatus: G.Model.calculateDataFetchStatus(i.variables.getEventsAggr.dataFetchStatusAttr)
                                                },
                                                events: {
                                                    _handleError: a(function(D) {
                                                        c.handleError(D)
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
                                            }), W.createElement(m, {
                                                align: 0,
                                                animate: !1,
                                                style: "ph-event-card-info padding-base",
                                                visible: !0,
                                                _idProps: {
                                                    service: l,
                                                    uuid: "5"
                                                },
                                                _widgetRecordProvider: t
                                            }, W.createElement(m, {
                                                align: 0,
                                                animate: !1,
                                                style: "display-flex flex-direction-column  ph-event-card-details-container",
                                                visible: !0,
                                                _idProps: {
                                                    service: l,
                                                    uuid: "6"
                                                },
                                                _widgetRecordProvider: t
                                            }, W.createElement(ee, {
                                                extendedProperties: {
                                                    style: "color: var(--Neutral-Neutral-10, #101213); font-size: 14px; font-weight: 700; line-height: 22px; margin-bottom: 4px;"
                                                },
                                                value: i.getCachedValue(l.getId("_C9emkrC2km3ZNgWMI6Uuw.Value"), function() {
                                                    return i.variables.getEventsAggr.listOut.getCurrent(g.iterationContext).eventAttr.titleAttr + ", " + G.BuiltinFunctions.year(G.BuiltinFunctions.textToDateTime(i.variables.getEventsAggr.listOut.getCurrent(g.iterationContext).eventAttr.dateTimeAttr)).toString()
                                                }, function() {
                                                    return i.variables.getEventsAggr.listOut.getCurrent(g.iterationContext).eventAttr.titleAttr
                                                }, function() {
                                                    return i.variables.getEventsAggr.listOut.getCurrent(g.iterationContext).eventAttr.dateTimeAttr
                                                }),
                                                _idProps: {
                                                    service: l,
                                                    uuid: "7"
                                                },
                                                _widgetRecordProvider: t,
                                                value_dataFetchStatus: G.Model.calculateDataFetchStatus(i.variables.getEventsAggr.dataFetchStatusAttr)
                                            }), W.createElement(ee, {
                                                extendedProperties: {
                                                    style: "color: var(--Neutral-Neutral-10, #101213); font-size: 12px; font-weight: 400; line-height: 18px;"
                                                },
                                                gridProperties: {
                                                    marginLeft: "0"
                                                },
                                                value: i.getCachedValue(l.getId("HwkZm2eup0q6igsG0Lv8xQ.Value"), function() {
                                                    return G.BuiltinFunctions.formatDateTime(G.BuiltinFunctions.textToDateTime(i.variables.getEventsAggr.listOut.getCurrent(g.iterationContext).eventAttr.dateTimeAttr), "d MMM, HH:mm") + " " + i.variables.getEventsAggr.listOut.getCurrent(g.iterationContext).countryAttr.timeZoneAttr
                                                }, function() {
                                                    return i.variables.getEventsAggr.listOut.getCurrent(g.iterationContext).eventAttr.dateTimeAttr
                                                }, function() {
                                                    return i.variables.getEventsAggr.listOut.getCurrent(g.iterationContext).countryAttr.timeZoneAttr
                                                }),
                                                _idProps: {
                                                    service: l,
                                                    uuid: "8"
                                                },
                                                _widgetRecordProvider: t,
                                                value_dataFetchStatus: G.Model.calculateDataFetchStatus(i.variables.getEventsAggr.dataFetchStatusAttr)
                                            }), W.createElement(ee, {
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
                                                value_dataFetchStatus: G.Model.calculateDataFetchStatus(i.variables.getEventsAggr.dataFetchStatusAttr)
                                            })), W.createElement(k, {
                                                getOwnerSpan: a(function() {
                                                    return u.getChildSpan("render")
                                                }, "getOwnerSpan"),
                                                getOwnerDisposeSpan: a(function() {
                                                    return u.getChildSpan("destroy")
                                                }, "getOwnerDisposeSpan"),
                                                inputs: {
                                                    SVGCode: `<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M7.34375 6.65625C7.53125 6.84375 7.53125 7.1875 7.34375 7.375L1.34375 13.375C1.15625 13.5625 0.8125 13.5625 0.625 13.375C0.4375 13.1875 0.4375 12.8438 0.625 12.6562L6.28125 7L0.625 1.375C0.4375 1.1875 0.4375 0.84375 0.625 0.65625C0.8125 0.46875 1.15625 0.46875 1.34375 0.65625L7.34375 6.65625Z" fill="#101213"/>\r
</svg>`
                                                },
                                                events: {
                                                    _handleError: a(function(D) {
                                                        c.handleError(D)
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
                                    _dependencies: [d(i.variables.getEventsAggr.dataFetchStatusAttr)]
                                })]
                            }, function() {
                                return [W.createElement(m, {
                                    align: 0,
                                    animate: !1,
                                    extendedEvents: {
                                        onClick: a(function() {
                                            var l = s.clone();
                                            c.onClickEvent$Action(c.callContext(l))
                                        }, "onClick")
                                    },
                                    style: "ph-event-card-container ph-one-event-card-container",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "11"
                                    },
                                    _widgetRecordProvider: t
                                }, W.createElement(St, {
                                    getOwnerSpan: a(function() {
                                        return u.getChildSpan("render")
                                    }, "getOwnerSpan"),
                                    getOwnerDisposeSpan: a(function() {
                                        return u.getChildSpan("destroy")
                                    }, "getOwnerDisposeSpan"),
                                    inputs: {
                                        EventDetails: i.getCachedValue(e.getId("lc66TWA3tEeXkblM7AV6UQ.EventDetails"), function() {
                                            return function() {
                                                var l = new lr;
                                                return l.idAttr = i.variables.getEventsAggr.listOut.getCurrent(s.iterationContext).eventAttr.idAttr, l.fileNamesAttr = function() {
                                                    var g = new sr;
                                                    return g.desktopImageNameAttr = "", g.mobileImageNameAttr = i.variables.getEventsAggr.listOut.getCurrent(s.iterationContext).eventAttr.mobileImageAttr, g
                                                }(), l
                                            }()
                                        }, function() {
                                            return i.variables.getEventsAggr.listOut.getCurrent(s.iterationContext).eventAttr.idAttr
                                        }, function() {
                                            return i.variables.getEventsAggr.listOut.getCurrent(s.iterationContext).eventAttr.mobileImageAttr
                                        }),
                                        _eventDetailsInDataFetchStatus: G.Model.calculateDataFetchStatus(i.variables.getEventsAggr.dataFetchStatusAttr)
                                    },
                                    events: {
                                        _handleError: a(function(l) {
                                            c.handleError(l)
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
                                }), W.createElement(m, {
                                    align: 0,
                                    animate: !1,
                                    style: "ph-event-card-info ph-one-event-card-info",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "13"
                                    },
                                    _widgetRecordProvider: t
                                }, W.createElement(m, {
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
                                }, W.createElement(ee, {
                                    extendedProperties: {
                                        style: "color: var(--Neutral-Neutral-10, #101213); font-size: 14px; font-weight: 700; line-height: 22px; margin-bottom: 4px;"
                                    },
                                    value: i.getCachedValue(e.getId("Bj40UThxkUeS9BGg1QFjyQ.Value"), function() {
                                        return i.variables.getEventsAggr.listOut.getCurrent(s.iterationContext).eventAttr.titleAttr + ", " + G.BuiltinFunctions.year(G.BuiltinFunctions.textToDateTime(i.variables.getEventsAggr.listOut.getCurrent(s.iterationContext).eventAttr.dateTimeAttr)).toString()
                                    }, function() {
                                        return i.variables.getEventsAggr.listOut.getCurrent(s.iterationContext).eventAttr.titleAttr
                                    }, function() {
                                        return i.variables.getEventsAggr.listOut.getCurrent(s.iterationContext).eventAttr.dateTimeAttr
                                    }),
                                    _idProps: {
                                        service: e,
                                        uuid: "15"
                                    },
                                    _widgetRecordProvider: t,
                                    value_dataFetchStatus: G.Model.calculateDataFetchStatus(i.variables.getEventsAggr.dataFetchStatusAttr)
                                }), W.createElement(ee, {
                                    extendedProperties: {
                                        style: "color: var(--Neutral-Neutral-10, #101213); font-size: 12px; font-weight: 400; line-height: 18px;"
                                    },
                                    gridProperties: {
                                        marginLeft: "0"
                                    },
                                    value: i.getCachedValue(e.getId("WsUiitjqnEO1_AGgEtXukw.Value"), function() {
                                        return G.BuiltinFunctions.formatDateTime(G.BuiltinFunctions.textToDateTime(i.variables.getEventsAggr.listOut.getCurrent(s.iterationContext).eventAttr.dateTimeAttr), "d MMM, HH:mm") + " " + i.variables.getEventsAggr.listOut.getCurrent(s.iterationContext).countryAttr.timeZoneAttr
                                    }, function() {
                                        return i.variables.getEventsAggr.listOut.getCurrent(s.iterationContext).eventAttr.dateTimeAttr
                                    }, function() {
                                        return i.variables.getEventsAggr.listOut.getCurrent(s.iterationContext).countryAttr.timeZoneAttr
                                    }),
                                    _idProps: {
                                        service: e,
                                        uuid: "16"
                                    },
                                    _widgetRecordProvider: t,
                                    value_dataFetchStatus: G.Model.calculateDataFetchStatus(i.variables.getEventsAggr.dataFetchStatusAttr)
                                }), W.createElement(ee, {
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
                                    value_dataFetchStatus: G.Model.calculateDataFetchStatus(i.variables.getEventsAggr.dataFetchStatusAttr)
                                })), W.createElement(k, {
                                    getOwnerSpan: a(function() {
                                        return u.getChildSpan("render")
                                    }, "getOwnerSpan"),
                                    getOwnerDisposeSpan: a(function() {
                                        return u.getChildSpan("destroy")
                                    }, "getOwnerDisposeSpan"),
                                    inputs: {
                                        SVGCode: `<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M7.34375 6.65625C7.53125 6.84375 7.53125 7.1875 7.34375 7.375L1.34375 13.375C1.15625 13.5625 0.8125 13.5625 0.625 13.375C0.4375 13.1875 0.4375 12.8438 0.625 12.6562L6.28125 7L0.625 1.375C0.4375 1.1875 0.4375 0.84375 0.625 0.65625C0.8125 0.46875 1.15625 0.46875 1.34375 0.65625L7.34375 6.65625Z" fill="#101213"/>\r
</svg>`
                                    },
                                    events: {
                                        _handleError: a(function(l) {
                                            c.handleError(l)
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
                _dependencies: [d(i.variables.getEventsAggr.dataFetchStatusAttr), d(i.variables.getEventsAggr.listOut)]
            }))
        }
    };
a(Re, "View");
var On = Re,
    Rn = On;
var ua = h,
    Oo = E.PlaceholderContent,
    vu = E.IteratorPlaceholderContent,
    Te = class Te extends V.BaseWebBlock {
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
            return [k, Pn, Rn]
        }
        get modelFactory() {
            return na
        }
        get controllerFactory() {
            return aa
        }
        get title() {
            return ""
        }
        internalRender() {
            let i = this.model,
                c = this.controller,
                e = this.idService,
                r = c.validationService,
                t = this.widgetsRecordProvider,
                s = c.callContext(),
                n = Te.ifWidget,
                o = Te.textWidget,
                d = Te.asPrimitiveValue,
                v = Te.getTranslation,
                u = this;
            return se.createElement("div", this.getRootNodeProperties(), se.createElement(m, {
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
            }, se.createElement(m, {
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
            }, se.createElement(k, {
                getOwnerSpan: a(function() {
                    return u.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return u.getChildSpan("destroy")
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
                    _handleError: a(function(l) {
                        c.handleError(l)
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
            }), se.createElement(A, {
                extendedProperties: {
                    OSTagName: "h5",
                    style: "flex-grow: 1; font-size: 20px; font-style: normal; font-weight: 700; line-height: 30px;"
                },
                style: "container-title",
                text: [o(v("JTUTHDwmmke37+oqdpbEoQ#Value", "Upcoming events"))],
                _idProps: {
                    service: e,
                    name: "Upcomingevents"
                },
                _widgetRecordProvider: t
            }), se.createElement(hi, {
                enabled: !0,
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                onClick: a(function() {
                    var l = s.clone();
                    c.seeAllOnClick$Action(c.callContext(l))
                }, "onClick"),
                visible: i.variables.numberOfEventsVar.countNumberAttr > 3,
                _idProps: {
                    service: e,
                    name: "SeeAll"
                },
                _widgetRecordProvider: t
            }, se.createElement(ee, {
                extendedProperties: {
                    style: "color: var(--Neutral-Neutral-10, #101213); font-size: 14px; font-weight: 400; line-height: 22px; text-decoration-line: underline;"
                },
                value: ua.Injector.resolve(ua.ServiceNames.TranslationsService).getMessage("tN_UWmOs0kGS2m27_Rkz9Q#ValueExpression.-660735948.1", "See all") + "(" + i.variables.numberOfEventsVar.countNumberAttr.toString() + ")",
                _idProps: {
                    service: e,
                    uuid: "5"
                },
                _widgetRecordProvider: t
            }))), se.createElement(m, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "6"
                },
                _widgetRecordProvider: t
            }, se.createElement(Pn, {
                getOwnerSpan: a(function() {
                    return u.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return u.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ExtendedClass: "ph-scrollable-events",
                    Orientation: ue.orientation.horizontal
                },
                events: {
                    _handleError: a(function(l) {
                        c.handleError(l)
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
                    content: new Oo(function() {
                        return [se.createElement(Rn, {
                            getOwnerSpan: a(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: a(function(l) {
                                    c.handleError(l)
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
a(Te, "View");
var Tn = Te,
    Hn = Tn;
var S = K(Z());
var He = h,
    vt = class vt extends He.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("OS", "oSVar", "OS", !0, !1, He.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1)].concat(He.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
        static fromStructure(i) {
            return new vt(new vt.RecordClass({
                oSVar: He.DataTypes.ImmutableBase.getData(i)
            }))
        }
    };
a(vt, "VariablesRecord");
var Qt = vt;
Qt.init();
var In = class In extends He.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(In, "WidgetsRecord");
var Vn = In,
    xn = class xn extends He.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return Qt
        }
        static getWidgetsRecordConstructor() {
            return Vn
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(i) {}
    };
a(xn, "Model");
var qt = xn;
qt._hasValidationWidgetsValue = void 0;
var ma = new He.Model.ModelFactory(qt);
var Ro = {
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
    To = {
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
    Ho = {
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
    Vo = {
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
    Io = {
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
    xo = {
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
    Do = {
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
    ko = {
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
    fa = {
        "ar-001": {
            translations: Ro,
            isRTL: !0
        },
        "de-DE": {
            translations: To,
            isRTL: !1
        },
        "es-ES": {
            translations: Ho,
            isRTL: !1
        },
        "fr-FR": {
            translations: Vo,
            isRTL: !1
        },
        "it-IT": {
            translations: Io,
            isRTL: !1
        },
        "pl-PL": {
            translations: xo,
            isRTL: !1
        },
        "pt-PT": {
            translations: Do,
            isRTL: !1
        },
        "ru-RU": {
            translations: ko,
            isRTL: !1
        }
    };

function Dn(f, i, c, e) {
    /iP(hone|od|ad)|mac(intosh|intel|ppc|68k|os)/i.test(navigator.userAgent) ? f.OS = "iOS" : f.OS = "Android"
}
a(Dn, "default");
var M = h; {
    let i = class i extends M.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, fa);
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
                return M.Logger.startActiveSpan("OnReady", function(n) {
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
                return M.Logger.startActiveSpan("CheckOS", function(n) {
                    n && (n.setAttribute("code.function", "CheckOS"), n.setAttribute("outsystems.function.key", "39dfbbfb-ca9f-4c2e-8898-6a22e5f9d13b"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("CheckOS"), e = t.callContext(e);
                        var o = new M.DataTypes.VariableHolder;
                        o.value = M.Logger.startActiveSpan("JavaScript1", function(d) {
                            d && (d.setAttribute("code.function", "JavaScript1"), d.setAttribute("outsystems.function.key", "e586a3b2-7d04-4dd3-b3cc-ec53710175fc"), d.setAttribute("outsystems.function.owner.name", "PartnersHub"), d.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), d.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(Dn, "JavaScript1", "CheckOS", {
                                    OS: M.DataConversion.JSNodeParamConverter.to("", M.DataTypes.DataTypes.Text)
                                }, function(v) {
                                    var u = new(t.constructor.getVariableGroupType("PartnersHub.Home.PartnersAcademy.CheckOS$javaScript1JSResult"));
                                    return u.oSOut = M.DataConversion.JSNodeParamConverter.from(v.OS, M.DataTypes.DataTypes.Text), u
                                }, {}, {})
                            } finally {
                                d && d.end()
                            }
                        }, 1), r.variables.oSVar = o.value.oSOut
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
                return M.Logger.startActiveSpan("OnInitialize", function(n) {
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
                return M.Logger.startActiveSpan("ButtonOnClick", function(n) {
                    n && (n.setAttribute("code.function", "ButtonOnClick"), n.setAttribute("outsystems.function.key", "77e19678-9f9b-43c8-9626-f339e5c2d617"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("ButtonOnClick"), e = t.callContext(e), O.rudderstackTrackEvent$Action(function() {
                            var o = new B;
                            return o.actionAttr = "click_cta", o.cta_nameAttr = "Open academy app", o.cta_placementAttr = "partner academy section", o
                        }(), "ce_partnershub_form", e), M.Navigation.navigateTo(M.Navigation.generateScreenURL("https://static.deriv.com/scripts/storeRedirect?app=partnershub", {}), M.Transitions.createTransition(M.Transitions.TransitionAnimation.Default), e, !0)
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
            return M.Logger.startActiveSpan("OnReady__proxy", function(t) {
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
            return M.Logger.startActiveSpan("CheckOS__proxy", function(t) {
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
            return M.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
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
            return M.Logger.startActiveSpan("ButtonOnClick__proxy", function(t) {
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
            return O.defaultTimeout
        }
    };
    a(i, "ControllerInner");
    let f = i;
    kn = f, kn.registerVariableGroupType("PartnersHub.Home.PartnersAcademy.CheckOS$javaScript1JSResult", [{
        name: "OS",
        attrName: "oSOut",
        mandatory: !0,
        dataType: M.DataTypes.DataTypes.Text,
        defaultValue: a(function() {
            return ""
        }, "defaultValue")
    }])
}
var kn, va = new M.Controller.ControllerFactory(kn, L);
var Ln = h,
    Lu = E.PlaceholderContent,
    Fu = E.IteratorPlaceholderContent,
    Ve = class Ve extends V.BaseWebBlock {
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
            return ma
        }
        get controllerFactory() {
            return va
        }
        get title() {
            return ""
        }
        internalRender() {
            let i = this.model,
                c = this.controller,
                e = this.idService,
                r = c.validationService,
                t = this.widgetsRecordProvider,
                s = c.callContext(),
                n = Ve.ifWidget,
                o = Ve.textWidget,
                d = Ve.asPrimitiveValue,
                v = Ve.getTranslation,
                u = this;
            return S.createElement("div", this.getRootNodeProperties(), n(_.getIsDesktop(), !1, this, function() {
                return [S.createElement(m, {
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
                }, S.createElement(x, {
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    _idProps: {
                        service: e,
                        uuid: "1"
                    },
                    _widgetRecordProvider: t
                }, S.createElement(A, {
                    extendedProperties: {
                        style: "color: #222; font-size: 20px; font-weight: bold;"
                    },
                    text: ["Partner's Academy"],
                    _idProps: {
                        service: e,
                        uuid: "2"
                    },
                    _widgetRecordProvider: t
                })), S.createElement(m, {
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
                }, S.createElement(m, {
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
                }, S.createElement(m, {
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
                }, S.createElement(A, {
                    extendedProperties: {
                        style: "font-size: 20px; font-weight: bold;"
                    },
                    text: [o(v("sse4z6h_sU6gso1w6w59LA#Value", "Listen, Learn, Read."))],
                    _idProps: {
                        service: e,
                        uuid: "6"
                    },
                    _widgetRecordProvider: t
                })), S.createElement(z, {
                    gridProperties: {
                        classes: "ThemeGrid_MarginGutter"
                    },
                    image: Ln.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.partnershand.png"),
                    style: "ph-academy-image",
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "7"
                    },
                    _widgetRecordProvider: t
                })), S.createElement(m, {
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
                }, S.createElement(m, {
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
                }, S.createElement(m, {
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
                }, S.createElement(x, {
                    extendedProperties: {
                        style: "color: #095A66; font-size: 0px; font-weight: bold;"
                    },
                    _idProps: {
                        service: e,
                        uuid: "11"
                    },
                    _widgetRecordProvider: t
                }, S.createElement(A, {
                    extendedProperties: {
                        style: "font-size: 12px;"
                    },
                    text: [o(v("uHFImDRVWE2MA_64Li66Ww#Value", "Courses"))],
                    _idProps: {
                        service: e,
                        uuid: "12"
                    },
                    _widgetRecordProvider: t
                }))), S.createElement(m, {
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
                }, S.createElement(x, {
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
                }, S.createElement(A, {
                    extendedProperties: {
                        style: "font-size: 12px;"
                    },
                    text: [o(v("bM7PjZ4q_EuS25rccTySQg#Value", "Marketing handbooks"))],
                    _idProps: {
                        service: e,
                        uuid: "15"
                    },
                    _widgetRecordProvider: t
                }))), S.createElement(m, {
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
                }, S.createElement(x, {
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
                }, S.createElement(A, {
                    extendedProperties: {
                        style: "font-size: 12px;"
                    },
                    text: [o(v("FLk8QSyiOkuIqtmBfVo4Yw#Value", "Marketing brochures"))],
                    _idProps: {
                        service: e,
                        uuid: "18"
                    },
                    _widgetRecordProvider: t
                }))), S.createElement(m, {
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
                }, S.createElement(x, {
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
                }, S.createElement(A, {
                    extendedProperties: {
                        style: "font-size: 12px;"
                    },
                    text: [o(v("QNt3K4z9s0mjesfDRLpl7A#Value", "E-books"))],
                    _idProps: {
                        service: e,
                        uuid: "21"
                    },
                    _widgetRecordProvider: t
                }))), S.createElement(m, {
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
                }, S.createElement(x, {
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
                }, S.createElement(A, {
                    extendedProperties: {
                        style: "font-size: 12px;"
                    },
                    text: [o(v("DZSAqbT4jkWfN4OqxOKCFA#Value", "Infographics"))],
                    _idProps: {
                        service: e,
                        uuid: "24"
                    },
                    _widgetRecordProvider: t
                })))), S.createElement(A, {
                    extendedProperties: {
                        style: "font-size: 14px;"
                    },
                    text: [o(v("1adaFkSs6Eu8LQA1B4Z56w#Value", "Everything you need for successful partner marketing."))],
                    _idProps: {
                        service: e,
                        uuid: "25"
                    },
                    _widgetRecordProvider: t
                })), S.createElement(m, {
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
                }, S.createElement(z, {
                    extendedProperties: {
                        style: "height: 102px;"
                    },
                    gridProperties: {
                        width: "102px"
                    },
                    image: Ln.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.academypartnershub.png"),
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "27"
                    },
                    _widgetRecordProvider: t
                }), S.createElement(A, {
                    extendedProperties: {
                        style: "font-size: 12px; width: 102px;"
                    },
                    text: [o(v("Neo6uN8N9UasJcJdTgmUJg#Value", "Scan to download mobile app"))],
                    _idProps: {
                        service: e,
                        uuid: "28"
                    },
                    _widgetRecordProvider: t
                }))))]
            }, function() {
                return [S.createElement(m, {
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
                }, S.createElement(x, {
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    _idProps: {
                        service: e,
                        uuid: "30"
                    },
                    _widgetRecordProvider: t
                }, S.createElement(A, {
                    extendedProperties: {
                        style: "color: #222; font-size: 20px; font-weight: bold;"
                    },
                    text: ["Partner's Academy"],
                    _idProps: {
                        service: e,
                        uuid: "31"
                    },
                    _widgetRecordProvider: t
                })), S.createElement(m, {
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
                }, S.createElement(m, {
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
                }, S.createElement(A, {
                    extendedProperties: {
                        style: "font-size: 20px; font-weight: bold;"
                    },
                    text: [o(v("kwwc0W9pKE64IAQBhqqlsg#Value", "Listen, Learn, Read."))],
                    _idProps: {
                        service: e,
                        uuid: "34"
                    },
                    _widgetRecordProvider: t
                })), S.createElement(m, {
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
                }, S.createElement(z, {
                    extendedProperties: {
                        style: "height: 100%;"
                    },
                    image: Ln.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.partnershand.png"),
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "36"
                    },
                    _widgetRecordProvider: t
                }))), S.createElement(m, {
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
                }, S.createElement(m, {
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
                }, S.createElement(x, {
                    extendedProperties: {
                        style: "color: #095A66; font-size: 16px; font-weight: bold;"
                    },
                    _idProps: {
                        service: e,
                        uuid: "39"
                    },
                    _widgetRecordProvider: t
                }, S.createElement(A, {
                    extendedProperties: {
                        style: "font-size: 14px;"
                    },
                    text: [o(v("83dGwifhKk+YOiXkvULi4A#Value", "Courses"))],
                    _idProps: {
                        service: e,
                        uuid: "40"
                    },
                    _widgetRecordProvider: t
                }))), S.createElement(m, {
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
                }, S.createElement(x, {
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
                }, S.createElement(A, {
                    extendedProperties: {
                        style: "font-size: 14px;"
                    },
                    text: [o(v("FweTDdT9dkSF1or4BJf5JA#Value", "Marketing handbooks"))],
                    _idProps: {
                        service: e,
                        uuid: "43"
                    },
                    _widgetRecordProvider: t
                }))), S.createElement(m, {
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
                }, S.createElement(x, {
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
                }, S.createElement(A, {
                    extendedProperties: {
                        style: "font-size: 14px;"
                    },
                    text: [o(v("C987V+27QE+VKjDqaJ0p2w#Value", "E-books"))],
                    _idProps: {
                        service: e,
                        uuid: "46"
                    },
                    _widgetRecordProvider: t
                }))), S.createElement(m, {
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
                }, S.createElement(x, {
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
                }, S.createElement(A, {
                    extendedProperties: {
                        style: "font-size: 14px;"
                    },
                    text: [o(v("uS0lZPuU6kOmtCwieNWUtg#Value", "Marketing brochures"))],
                    _idProps: {
                        service: e,
                        uuid: "49"
                    },
                    _widgetRecordProvider: t
                }))), S.createElement(m, {
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
                }, S.createElement(x, {
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
                }, S.createElement(A, {
                    extendedProperties: {
                        style: "font-size: 14px;"
                    },
                    text: [o(v("bDqMK2mJ7kacvPDTaOF8rg#Value", "Infographics"))],
                    _idProps: {
                        service: e,
                        uuid: "52"
                    },
                    _widgetRecordProvider: t
                })))), o(v("mxqBfVnviEmFswLgQBO7ug#Value", "Everything you need for successful partner marketing.")), S.createElement(Fe, {
                    enabled: !0,
                    extendedProperties: {
                        style: "background-color: inherit; border-radius: 50px; color: #ff4450;"
                    },
                    gridProperties: {
                        marginLeft: "0"
                    },
                    isDefault: !1,
                    onClick: a(function() {
                        var l = s.clone();
                        c.buttonOnClick$Action(c.callContext(l))
                    }, "onClick"),
                    style: "btn btn-primary affiliates-programme__button affiliates-programme__button--mobile",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "53"
                    },
                    _widgetRecordProvider: t
                }, S.createElement(m, {
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
                    return [S.createElement(ve, {
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
                        return [S.createElement(ve, {
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
                }), o(v("zkMPCyO8E0aYnIYzzJSMng#Value", "Open Academy app")))))]
            }))
        }
    };
a(Ve, "View");
var Fn = Ve,
    Nn = Fn;
var Y = K(Z());
var le = h,
    gt = class gt extends le.Model.AggregateRecord {
        static attributesToDeclare() {
            return [].concat(le.Model.AggregateRecord.attributesToDeclare.call(this))
        }
        static get RecordListType() {
            return fi
        }
        static fromStructure(i) {
            return new gt(new gt.RecordClass({
                RecordListType: le.DataTypes.ImmutableBase.getData(i)
            }))
        }
    };
a(gt, "GetAffiliateLinksAggrRec");
var ht = gt;
ht.init();
var pt = class pt extends le.DataTypes.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("GetAffiliateLinks", "getAffiliateLinksAggr", "GetAffiliateLinks", !0, !0, le.DataTypes.DataTypes.Record, function() {
            return le.DataTypes.ImmutableBase.getData(new ht)
        }, !0, ht)].concat(le.DataTypes.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(i) {
        return new pt(new pt.RecordClass({
            getAffiliateLinksAggr: le.DataTypes.ImmutableBase.getData(i)
        }))
    }
};
a(pt, "VariablesRecord");
var jt = pt;
jt.init();
var Mn = class Mn extends le.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(Mn, "WidgetsRecord");
var Wn = Mn,
    je = class je extends le.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return jt
        }
        static getWidgetsRecordConstructor() {
            return Wn
        }
        static get hasValidationWidgets() {
            return je._hasValidationWidgetsValue === void 0 && (je._hasValidationWidgetsValue = void 0), je._hasValidationWidgetsValue
        }
        setInputs(i) {}
    };
a(je, "Model");
var Kt = je;
Kt._hasValidationWidgetsValue = void 0;
var ga = new le.Model.ModelFactory(Kt);
var Lo = {
        "hKoas_JkdUqaXBT9HahADw#Value": "\u0634\u0627\u0647\u062F \u062C\u0645\u064A\u0639 \u0627\u0644\u0641\u064A\u062F\u064A\u0648\u0647\u0627\u062A",
        "T7D85Ou3vE61yWtLCd1Qjw#Value": "\u062A\u0639\u0631\u0641 \u0639\u0644\u0649 \u0627\u0644\u0645\u0632\u064A\u062F \u0639\u0644\u0649 \u064A\u0648\u062A\u064A\u0648\u0628"
    },
    Fo = {
        "hKoas_JkdUqaXBT9HahADw#Value": "Alle Videos ansehen",
        "T7D85Ou3vE61yWtLCd1Qjw#Value": "Erfahren Sie mehr auf YouTube"
    },
    No = {
        "hKoas_JkdUqaXBT9HahADw#Value": "Ver todos los videos",
        "T7D85Ou3vE61yWtLCd1Qjw#Value": "Biblioteca de videos"
    },
    Wo = {
        "hKoas_JkdUqaXBT9HahADw#Value": "Voir toutes les vid\xE9os",
        "T7D85Ou3vE61yWtLCd1Qjw#Value": "D\xE9couvrez-en plus sur YouTube"
    },
    Mo = {
        "hKoas_JkdUqaXBT9HahADw#Value": "Vedi tutti i video",
        "T7D85Ou3vE61yWtLCd1Qjw#Value": "Scopri di pi\xF9 su YouTube"
    },
    $o = {
        "hKoas_JkdUqaXBT9HahADw#Value": "Zobacz wszystkie nagrania",
        "T7D85Ou3vE61yWtLCd1Qjw#Value": "Dowiedz si\u0119 wi\u0119cej na YouTube"
    },
    Bo = {
        "hKoas_JkdUqaXBT9HahADw#Value": "Ver todos os v\xEDdeos",
        "T7D85Ou3vE61yWtLCd1Qjw#Value": "Saiba mais no YouTube"
    },
    Uo = {
        "hKoas_JkdUqaXBT9HahADw#Value": "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0441\u0435 \u0432\u0438\u0434\u0435\u043E",
        "T7D85Ou3vE61yWtLCd1Qjw#Value": "\u0423\u0437\u043D\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0430 YouTube"
    },
    pa = {
        "ar-001": {
            translations: Lo,
            isRTL: !0
        },
        "de-DE": {
            translations: Fo,
            isRTL: !1
        },
        "es-ES": {
            translations: No,
            isRTL: !1
        },
        "fr-FR": {
            translations: Wo,
            isRTL: !1
        },
        "it-IT": {
            translations: Mo,
            isRTL: !1
        },
        "pl-PL": {
            translations: $o,
            isRTL: !1
        },
        "pt-PT": {
            translations: Bo,
            isRTL: !1
        },
        "ru-RU": {
            translations: Uo,
            isRTL: !1
        }
    };

function $n(f, i, c) {
    window.open("https://www.youtube.com/@Deriv.partners")
}
a($n, "default");

function Bn(f, i, c, e) {
    var t;
    let r = document.getElementById(f.CarouselId);
    if (r) {
        let s = r.getElementsByClassName("splide__slide--clone is-visible");
        s.length && ((t = Array.from(s)) == null || t.forEach(n => {
            if (!n.getAttribute("data-is-attached-el")) {
                n.setAttribute("data-is-attached-el", "true");
                let d = n.getElementsByClassName("affiliates-programme-list__item");
                if (d.length) {
                    let v = d[0].getAttribute("data-link");
                    n.addEventListener("click", () => {
                        window.open(v)
                    })
                }
            }
        }))
    }
}
a(Bn, "default");

function Un(f, i, c, e) {
    window.open(f.VideoLink)
}
a(Un, "default");
var F = h; {
    let i = class i extends F.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, pa);
            var s = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {
                getAffiliateLinks$AggrRefresh: 0
            }, this.dataFetchDependentsGraph = {
                getAffiliateLinks$AggrRefresh: []
            }, this.shouldSendClientVarsToDataSources = !0
        }
        get getAffiliateLinks$AggrRefresh() {
            return this.hasOwnProperty("_getAffiliateLinks$AggrRefresh") || (this._getAffiliateLinks$AggrRefresh = function() {
                var e = function(r, t, d) {
                    var n = this.model,
                        o = this.controller,
                        d = o.callContext(d);
                    return o.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetAffiliateLinks", "screenservices/PartnersHub/Home/AffiliateProgramme/ScreenDataSetGetAffiliateLinks", "JMrcPRhoMR0hxr2x8YPJcA", r, t, function(v) {
                        n.variables.getAffiliateLinksAggr.dataFetchStatusAttr = v
                    }, function(v) {
                        n.variables.getAffiliateLinksAggr.replaceWith(F.DataConversion.ServerDataConverter.from(v, n.variables.getAffiliateLinksAggr.constructor))
                    }, void 0, void 0, void 0, d, _, !0)
                }.bind(this);
                return F.Logger.startActiveSpan("GetAffiliateLinks", function(r) {
                    return r && (r.setAttribute("code.function", "GetAffiliateLinks"), r.setAttribute("outsystems.function.key", "2edbd258-b25d-46e7-9056-5234ab10cd62"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "SCREEN_SERVICE_AGGREGATE_CALL")), F.Flow.tryFinally(function() {
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
                return F.Logger.startActiveSpan("OnClickSeeAllVideo", function(n) {
                    n && (n.setAttribute("code.function", "OnClickSeeAllVideo"), n.setAttribute("outsystems.function.key", "5ec8c717-2ae8-4f70-ae06-253260196a65"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnClickSeeAllVideo"), e = t.callContext(e), O.rudderstackTrackEvent$Action(function() {
                            var o = new B;
                            return o.actionAttr = "click_cta", o.cta_nameAttr = "See all Videos", o.cta_placementAttr = "affiliate programme youtube section", o
                        }(), "ce_partnershub_form", e), F.Logger.startActiveSpan("JavaScript1", function(o) {
                            o && (o.setAttribute("code.function", "JavaScript1"), o.setAttribute("outsystems.function.key", "10cafe4c-4a4e-4a78-98d4-1bbfc00fbd20"), o.setAttribute("outsystems.function.owner.name", "PartnersHub"), o.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode($n, "JavaScript1", "OnClickSeeAllVideo", null, function(d) {}, {}, {})
                            } finally {
                                o && o.end()
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
                return F.Logger.startActiveSpan("OnSlideMove", function(o) {
                    o && (o.setAttribute("code.function", "OnSlideMove"), o.setAttribute("outsystems.function.key", "c6921f1f-f2b9-44d5-afcf-92db69c87462"), o.setAttribute("outsystems.function.owner.name", "PartnersHub"), o.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        s.ensureControllerAlive("OnSlideMove"), r = s.callContext(r);
                        var d = new F.DataTypes.VariableHolder(new(s.constructor.getVariableGroupType("PartnersHub.Home.AffiliateProgramme.OnSlideMove$vars")));
                        d.value.carouselIdInLocal = e, F.Logger.startActiveSpan("AttachClickHandlersToCarouselClones", function(v) {
                            v && (v.setAttribute("code.function", "AttachClickHandlersToCarouselClones"), v.setAttribute("outsystems.function.key", "7321ab2f-c3a3-4ab8-8a41-4201a35dffc0"), v.setAttribute("outsystems.function.owner.name", "PartnersHub"), v.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), v.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return s.safeExecuteJSNode(Bn, "AttachClickHandlersToCarouselClones", "OnSlideMove", {
                                    CarouselId: F.DataConversion.JSNodeParamConverter.to(d.value.carouselIdInLocal, F.DataTypes.DataTypes.Text)
                                }, function(u) {}, {}, {})
                            } finally {
                                v && v.end()
                            }
                        }, 1)
                    } finally {
                        o && o.end()
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
                return F.Logger.startActiveSpan("OnClickVideo", function(o) {
                    o && (o.setAttribute("code.function", "OnClickVideo"), o.setAttribute("outsystems.function.key", "d21b2024-3c64-4a1b-8bd7-316ab899ed6a"), o.setAttribute("outsystems.function.owner.name", "PartnersHub"), o.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        s.ensureControllerAlive("OnClickVideo"), r = s.callContext(r);
                        var d = new F.DataTypes.VariableHolder(new(s.constructor.getVariableGroupType("PartnersHub.Home.AffiliateProgramme.OnClickVideo$vars")));
                        d.value.videoLinkInLocal = e.clone(), O.rudderstackTrackEvent$Action(function() {
                            var v = new B;
                            return v.actionAttr = "click_cta", v.cta_nameAttr = "Video click", v.cta_placementAttr = d.value.videoLinkInLocal.titleAttr, v
                        }(), "ce_partnershub_form", r), F.Logger.startActiveSpan("JavaScript1", function(v) {
                            v && (v.setAttribute("code.function", "JavaScript1"), v.setAttribute("outsystems.function.key", "3ebe742d-75db-4b77-8238-d446f8d94762"), v.setAttribute("outsystems.function.owner.name", "PartnersHub"), v.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), v.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return s.safeExecuteJSNode(Un, "JavaScript1", "OnClickVideo", {
                                    VideoLink: F.DataConversion.JSNodeParamConverter.to(d.value.videoLinkInLocal.linkAttr, F.DataTypes.DataTypes.Text)
                                }, function(u) {}, {}, {})
                            } finally {
                                v && v.end()
                            }
                        }, 1)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__onClickVideo$Action
        }
        set _onClickVideo$Action(e) {
            this.__onClickVideo$Action = e
        }
        onClickSeeAllVideo$Action(e) {
            var r = this.controller;
            return F.Logger.startActiveSpan("OnClickSeeAllVideo__proxy", function(t) {
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
            return F.Logger.startActiveSpan("OnSlideMove__proxy", function(s) {
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
            return F.Logger.startActiveSpan("OnClickVideo__proxy", function(s) {
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
            return O.defaultTimeout
        }
    };
    a(i, "ControllerInner");
    let f = i;
    Zt = f, Zt.registerVariableGroupType("PartnersHub.Home.AffiliateProgramme.OnSlideMove$vars", [{
        name: "CarouselId",
        attrName: "carouselIdInLocal",
        mandatory: !0,
        dataType: F.DataTypes.DataTypes.Text,
        defaultValue: a(function() {
            return ""
        }, "defaultValue")
    }]), Zt.registerVariableGroupType("PartnersHub.Home.AffiliateProgramme.OnClickVideo$vars", [{
        name: "VideoLink",
        attrName: "videoLinkInLocal",
        mandatory: !0,
        dataType: F.DataTypes.DataTypes.Record,
        defaultValue: a(function() {
            return new cr
        }, "defaultValue"),
        complexType: cr
    }])
}
var Zt, ha = new F.Controller.ControllerFactory(Zt, L);
var _a = h,
    Xt = E.PlaceholderContent,
    zo = E.IteratorPlaceholderContent,
    Ie = class Ie extends V.BaseWebBlock {
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
            return [Ge]
        }
        get modelFactory() {
            return ga
        }
        get controllerFactory() {
            return ha
        }
        get title() {
            return ""
        }
        internalRender() {
            let i = this.model,
                c = this.controller,
                e = this.idService,
                r = c.validationService,
                t = this.widgetsRecordProvider,
                s = c.callContext(),
                n = Ie.ifWidget,
                o = Ie.textWidget,
                d = Ie.asPrimitiveValue,
                v = Ie.getTranslation,
                u = this;
            return Y.createElement("div", this.getRootNodeProperties(), Y.createElement(m, {
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
            }, Y.createElement(x, {
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
            }, Y.createElement(A, {
                extendedProperties: {
                    style: "color: #222; font-size: 20px;"
                },
                text: [o(v("T7D85Ou3vE61yWtLCd1Qjw#Value", "Learn more on YouTube"))],
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            })), Y.createElement(m, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "3"
                },
                _widgetRecordProvider: t
            }, Y.createElement(Ge, {
                getOwnerSpan: a(function() {
                    return u.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return u.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Navigation: ue.carouselNavigation.arrows,
                    ItemsPerSlide: i.getCachedValue(e.getId("AffliliateProgrammeCarousel.ItemsPerSlide"), function() {
                        return function() {
                            var l = new Ye;
                            return l.desktopAttr = 3, l.tabletAttr = 3, l.phoneAttr = 1, l
                        }()
                    }),
                    ExtendedClass: "affiliates-programme__carousel",
                    OptionalConfigs: i.getCachedValue(e.getId("AffliliateProgrammeCarousel.OptionalConfigs"), function() {
                        return function() {
                            var l = new _e;
                            return l.autoPlayAttr = !1, l.paddingAttr = "16px", l.itemsGapAttr = "16px", l
                        }()
                    })
                },
                events: {
                    _handleError: a(function(l) {
                        c.handleError(l)
                    }, "_handleError"),
                    onSlideMoved$Action: a(function(l, g) {
                        var D = s.clone();
                        c.onSlideMove$Action(l, c.callContext(D))
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
                    carouselItems: new Xt(function() {
                        return [Y.createElement(bt, {
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
                            source_dataFetchStatus: _a.Model.calculateDataFetchStatus(i.variables.getAffiliateLinksAggr.dataFetchStatusAttr),
                            placeholders: {
                                content: new zo(function(l, g) {
                                    return [Y.createElement(gi, {
                                        onClick: a(function() {
                                            var D = g.clone();
                                            c.onClickVideo$Action(i.variables.getAffiliateLinksAggr.listOut.getCurrent(g.iterationContext).affiliateLinksAttr, c.callContext(D))
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
                                            leftActions: Xt.Empty,
                                            content: new Xt(function() {
                                                return [Y.createElement(m, {
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
                                                }, Y.createElement(z, {
                                                    style: "affiliates-programme-list__item-image",
                                                    type: 1,
                                                    url: i.variables.getAffiliateLinksAggr.listOut.getCurrent(g.iterationContext).affiliateLinksAttr.thumbnail3Attr,
                                                    _idProps: {
                                                        service: l,
                                                        uuid: "8"
                                                    },
                                                    _widgetRecordProvider: t,
                                                    url_dataFetchStatus: _a.Model.calculateDataFetchStatus(i.variables.getAffiliateLinksAggr.dataFetchStatusAttr)
                                                }))]
                                            }),
                                            rightActions: Xt.Empty
                                        },
                                        _dependencies: [d(i.variables.getAffiliateLinksAggr.dataFetchStatusAttr), d(i.variables.getAffiliateLinksAggr.listOut.getCurrent(g.iterationContext).affiliateLinksAttr.thumbnail3Attr), d(i.variables.getAffiliateLinksAggr.listOut.getCurrent(g.iterationContext).affiliateLinksAttr.linkAttr)]
                                    })]
                                }, s, e, "1")
                            },
                            _dependencies: [d(i.variables.getAffiliateLinksAggr.dataFetchStatusAttr)]
                        })]
                    })
                },
                _dependencies: [d(i.variables.getAffiliateLinksAggr.dataFetchStatusAttr), d(i.variables.getAffiliateLinksAggr.listOut)]
            })), Y.createElement(m, {
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
            }, Y.createElement(Fe, {
                enabled: !0,
                isDefault: !1,
                onClick: a(function() {
                    var l = s.clone();
                    c.onClickSeeAllVideo$Action(c.callContext(l))
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
            }, Y.createElement(m, {
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
            }, Y.createElement(ve, {
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
            }), o(v("hKoas_JkdUqaXBT9HahADw#Value", "See all videos")))))))
        }
    };
a(Ie, "View");
var zn = Ie,
    Jn = zn;
var Ze = K(Z());
var _t = h,
    Qn = class Qn extends _t.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(_t.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(Qn, "VariablesRecord");
var Yt = Qn;
Yt.init();
var qn = class qn extends _t.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(qn, "WidgetsRecord");
var Gn = qn,
    Ke = class Ke extends _t.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return Yt
        }
        static getWidgetsRecordConstructor() {
            return Gn
        }
        static get hasValidationWidgets() {
            return Ke._hasValidationWidgetsValue === void 0 && (Ke._hasValidationWidgetsValue = void 0), Ke._hasValidationWidgetsValue
        }
        setInputs(i) {}
    };
a(Ke, "Model");
var er = Ke;
er._hasValidationWidgetsValue = void 0;
var ya = new _t.Model.ModelFactory(er);
var Jo = {
        "hGrjsVin_k+o09Xv10+QZA#Value.-1338680608.1": "\u0627\u0646\u0636\u0645 \u0627\u0644\u0622\u0646",
        "KglJHT9r9U+AN_RNe7PMbw#Value": "\u062A\u062D\u062F\u064A\u062B\u0627\u062A \u062D\u0635\u0631\u064A\u0629 \u0644\u0644\u0634\u0631\u0643\u0627\u0621 \u0639\u0644\u0649 \u0627\u0644\u0648\u0627\u062A\u0633\u0627\u0628",
        "xmmB3QXapky_a843OQSiSw#Value.582033868.1": "\u0632\u0631 \u0627\u0644\u0627\u0646\u0636\u0645\u0627\u0645 \u0627\u0644\u0622\u0646 \u0641\u064A \u0644\u0627\u0641\u062A\u0629 \u0648\u0627\u062A\u0633\u0627\u0628",
        "PxN9xg9sdEyO006yBWwOxA#Value.-1338680608.1": "\u0627\u0646\u0636\u0645 \u0627\u0644\u0622\u0646"
    },
    Go = {
        "hGrjsVin_k+o09Xv10+QZA#Value.-1338680608.1": "Jetzt beitreten",
        "KglJHT9r9U+AN_RNe7PMbw#Value": "WhatsApp-Updates exklusiv f\xFCr Partner",
        "xmmB3QXapky_a843OQSiSw#Value.582033868.1": "WhatsApp-Banner Jetzt beitreten Button",
        "PxN9xg9sdEyO006yBWwOxA#Value.-1338680608.1": "Jetzt beitreten"
    },
    Qo = {
        "hGrjsVin_k+o09Xv10+QZA#Value.-1338680608.1": "\xDAnete ahora",
        "KglJHT9r9U+AN_RNe7PMbw#Value": "Actualizaciones de WhatsApp exclusivamente para socios",
        "xmmB3QXapky_a843OQSiSw#Value.582033868.1": "Banner de WhatsApp Bot\xF3n de unirse ahora",
        "PxN9xg9sdEyO006yBWwOxA#Value.-1338680608.1": "\xDAnete ahora"
    },
    qo = {
        "hGrjsVin_k+o09Xv10+QZA#Value.-1338680608.1": "Rejoindre maintenant",
        "KglJHT9r9U+AN_RNe7PMbw#Value": "Mises \xE0 jour WhatsApp r\xE9serv\xE9es aux partenaires",
        "xmmB3QXapky_a843OQSiSw#Value.582033868.1": "bouton rejoindre maintenant de de banni\xE8re WhatsApp",
        "PxN9xg9sdEyO006yBWwOxA#Value.-1338680608.1": "Rejoindre maintenant"
    },
    jo = {
        "hGrjsVin_k+o09Xv10+QZA#Value.-1338680608.1": "Iscriviti ora",
        "KglJHT9r9U+AN_RNe7PMbw#Value": "Aggiornamenti WhatsApp esclusivamente per i partner",
        "xmmB3QXapky_a843OQSiSw#Value.582033868.1": 'Banner di WhatsApp pulsante "Unisciti ora"',
        "PxN9xg9sdEyO006yBWwOxA#Value.-1338680608.1": "Iscriviti ora"
    },
    Ko = {
        "hGrjsVin_k+o09Xv10+QZA#Value.-1338680608.1": "Do\u0142\u0105cz teraz",
        "KglJHT9r9U+AN_RNe7PMbw#Value": "Aktualizacje WhatsApp wy\u0142\u0105cznie dla partner\xF3w",
        "xmmB3QXapky_a843OQSiSw#Value.582033868.1": "Baner WhatsApp Przycisk do\u0142\u0105cz teraz",
        "PxN9xg9sdEyO006yBWwOxA#Value.-1338680608.1": "Do\u0142\u0105cz teraz"
    },
    Zo = {
        "hGrjsVin_k+o09Xv10+QZA#Value.-1338680608.1": "Adira j\xE1",
        "KglJHT9r9U+AN_RNe7PMbw#Value": "Atualiza\xE7\xF5es do WhatsApp exclusivamente para parceiros",
        "xmmB3QXapky_a843OQSiSw#Value.582033868.1": 'Banner do WhatsApp:Bot\xE3o "Adira j\xE1"',
        "PxN9xg9sdEyO006yBWwOxA#Value.-1338680608.1": "Adira j\xE1"
    },
    Xo = {
        "hGrjsVin_k+o09Xv10+QZA#Value.-1338680608.1": "\u041F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u0438\u0442\u044C\u0441\u044F \u0441\u0435\u0439\u0447\u0430\u0441",
        "KglJHT9r9U+AN_RNe7PMbw#Value": "\u041D\u043E\u0432\u043E\u0441\u0442\u0438 \u0432 WhatsApp \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u043E\u0432",
        "xmmB3QXapky_a843OQSiSw#Value.582033868.1": "\u0431\u0430\u043D\u043D\u0435\u0440 WhatsApp \u043A\u043D\u043E\u043F\u043A\u0430 \u043F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u0438\u0442\u044C\u0441\u044F \u0441\u0435\u0439\u0447\u0430\u0441",
        "PxN9xg9sdEyO006yBWwOxA#Value.-1338680608.1": "\u041F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u0438\u0442\u044C\u0441\u044F \u0441\u0435\u0439\u0447\u0430\u0441"
    },
    ba = {
        "ar-001": {
            translations: Jo,
            isRTL: !0
        },
        "de-DE": {
            translations: Go,
            isRTL: !1
        },
        "es-ES": {
            translations: Qo,
            isRTL: !1
        },
        "fr-FR": {
            translations: qo,
            isRTL: !1
        },
        "it-IT": {
            translations: jo,
            isRTL: !1
        },
        "pl-PL": {
            translations: Ko,
            isRTL: !1
        },
        "pt-PT": {
            translations: Zo,
            isRTL: !1
        },
        "ru-RU": {
            translations: Xo,
            isRTL: !1
        }
    };
var he = h; {
    let i = class i extends he.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, ba);
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
                return he.Logger.startActiveSpan("OnClickJoinNow", function(n) {
                    n && (n.setAttribute("code.function", "OnClickJoinNow"), n.setAttribute("outsystems.function.key", "e524bd03-1380-4a32-a549-a330b0d629f1"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnClickJoinNow"), e = t.callContext(e), O.rudderstackTrackEvent$Action(function() {
                            var o = new B;
                            return o.actionAttr = "click_cta", o.cta_nameAttr = he.Injector.resolve(he.ServiceNames.TranslationsService).getMessage("PxN9xg9sdEyO006yBWwOxA#Value.-1338680608.1", "Join Now"), o.cta_placementAttr = he.Injector.resolve(he.ServiceNames.TranslationsService).getMessage("xmmB3QXapky_a843OQSiSw#Value.582033868.1", "whatsapp banner join now button"), o
                        }(), "ce_partnershub_form", e), O.redirectToExternalNewTab$Action("https://www.whatsapp.com/channel/0029VajV7cY8fewr35BOkF06", e)
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
            return he.Logger.startActiveSpan("OnClickJoinNow__proxy", function(t) {
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
            return O.defaultTimeout
        }
    };
    a(i, "ControllerInner");
    let f = i;
    Aa = f
}
var Aa, Sa = new he.Controller.ControllerFactory(Aa, L);
var jn = h,
    xm = E.PlaceholderContent,
    Dm = E.IteratorPlaceholderContent,
    xe = class xe extends V.BaseWebBlock {
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
            return [te]
        }
        get modelFactory() {
            return ya
        }
        get controllerFactory() {
            return Sa
        }
        get title() {
            return ""
        }
        internalRender() {
            let i = this.model,
                c = this.controller,
                e = this.idService,
                r = c.validationService,
                t = this.widgetsRecordProvider,
                s = c.callContext(),
                n = xe.ifWidget,
                o = xe.textWidget,
                d = xe.asPrimitiveValue,
                v = xe.getTranslation,
                u = this;
            return Ze.createElement("div", this.getRootNodeProperties(), Ze.createElement(m, {
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
            }, Ze.createElement(A, {
                style: "banner-description",
                text: [o(v("KglJHT9r9U+AN_RNe7PMbw#Value", "WhatsApp updates exclusively for Partners"))],
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }), Ze.createElement(z, {
                gridProperties: {
                    classes: "OSFillParent"
                },
                image: jn.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.phone2501.png"),
                style: "phone-image",
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            }), Ze.createElement(te, {
                getOwnerSpan: a(function() {
                    return u.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return u.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    title: jn.Injector.resolve(jn.ServiceNames.TranslationsService).getMessage("hGrjsVin_k+o09Xv10+QZA#Value.-1338680608.1", "Join Now")
                },
                events: {
                    _handleError: a(function(l) {
                        c.handleError(l)
                    }, "_handleError"),
                    onClick$Action: a(function() {
                        var l = s.clone();
                        c.onClickJoinNow$Action(c.callContext(l))
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
a(xe, "View");
var Kn = xe,
    Zn = Kn;
var y = K(Z());
var ce = h,
    Yn = class Yn extends ce.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("userInput", "userInputVar", "userInput", !0, !1, ce.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("cfdCommissionsPasswordErrors", "cfdCommissionsPasswordErrorsVar", "cfdCommissionsPasswordErrors", !0, !1, ce.DataTypes.DataTypes.Record, function() {
                return ce.DataTypes.ImmutableBase.getData(new ir)
            }, !1, ir), this.attr("requiredInputError", "requiredInputErrorVar", "requiredInputError", !0, !1, ce.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("isSubmitting", "isSubmittingVar", "isSubmitting", !0, !1, ce.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1)].concat(ce.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(Yn, "VariablesRecord");
var tr = Yn;
tr.init();
var ei = class ei extends ce.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            CFDPasswordInput: ce.Model.ValidationWidgetRecord
        }
    }
};
a(ei, "WidgetsRecord");
var Xn = ei,
    ti = class ti extends ce.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return tr
        }
        static getWidgetsRecordConstructor() {
            return Xn
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(i) {}
    };
a(ti, "Model");
var rr = ti;
rr._hasValidationWidgetsValue = void 0;
var Ca = new ce.Model.ModelFactory(rr);
var Pa = {};

function ri(f, i, c, e) {
    let r = document.getElementById(f.eyeButtonId),
        t = document.getElementById(f.passwordInputId),
        s = document.getElementById(f.passwordHiddenIcon),
        n = document.getElementById(f.passwordVisibleIcon);
    t.type === "text" ? (t.type = "password", n.classList.remove("hidden"), s.classList.add("hidden")) : (t.type = "text", n.classList.add("hidden"), s.classList.remove("hidden"))
}
a(ri, "default");

function ni(f, i, c) {
    let e = document.querySelector(".cfd-modal-is-open");
    e == null || e.classList.remove("cfd-modal-is-open")
}
a(ni, "default");

function ii(f, i, c, e) {
    let r = localStorage.getItem("token");
    f.Token = r
}
a(ii, "default");

function ai(f, i, c, e) {
    let r = JSON.parse(f.Response);
    r != null && r.Error || r != null && r.error ? f.isCFDPasswordCreationFailed = !0 : f.isCFDPasswordCreationFailed = !1
}
a(ai, "default");

function oi(f, i, c, e) {
    let r = localStorage.getItem("token");
    r && (f.AuthToken = r)
}
a(oi, "default");

function si(f, i, c, e) {
    let r = {
            LengthCheck: f.password,
            UpperAndLowerCaseCheck: f.password,
            NumberCheck: f.password,
            SpecialCharacterCheck: f.password,
            RequiredCheck: f.password
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
    f.LengthError = s.LengthCheck ? "true" : "false", f.UppercaseAndLowercaseError = s.UpperAndLowerCaseCheck ? "true" : "false", f.NumberError = s.NumberCheck ? "true" : "false", f.SpecialCharacterError = s.SpecialCharacterCheck ? "true" : "false", f.RequiredError = !!s.RequiredCheck
}
a(si, "default");
var p = h; {
    let i = class i extends p.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, Pa);
            var s = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _eyeButtonHandler$Action() {
            return this.hasOwnProperty("__eyeButtonHandler$Action") || (this.__eyeButtonHandler$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    s = this.idService;
                return p.Logger.startActiveSpan("EyeButtonHandler", function(n) {
                    n && (n.setAttribute("code.function", "EyeButtonHandler"), n.setAttribute("outsystems.function.key", "10e80d12-44c2-4963-a129-6873b4b99ba5"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("EyeButtonHandler"), e = t.callContext(e), p.Logger.startActiveSpan("JavaScript1", function(o) {
                            o && (o.setAttribute("code.function", "JavaScript1"), o.setAttribute("outsystems.function.key", "b30871fe-c97e-4880-9c9e-7d8148a93498"), o.setAttribute("outsystems.function.owner.name", "PartnersHub"), o.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(ri, "JavaScript1", "EyeButtonHandler", {
                                    passwordVisibleIcon: p.DataConversion.JSNodeParamConverter.to(s.getId("ShowPassword"), p.DataTypes.DataTypes.Text),
                                    passwordInputId: p.DataConversion.JSNodeParamConverter.to(s.getId("CFDPasswordInput"), p.DataTypes.DataTypes.Text),
                                    passwordHiddenIcon: p.DataConversion.JSNodeParamConverter.to(s.getId("HidePassword"), p.DataTypes.DataTypes.Text),
                                    eyeButtonId: p.DataConversion.JSNodeParamConverter.to(s.getId("EyeButton"), p.DataTypes.DataTypes.Text)
                                }, function(d) {}, {}, {})
                            } finally {
                                o && o.end()
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
        get _okHandler$Action() {
            return this.hasOwnProperty("__okHandler$Action") || (this.__okHandler$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    s = this.idService;
                return p.Logger.startActiveSpan("OkHandler", function(n) {
                    n && (n.setAttribute("code.function", "OkHandler"), n.setAttribute("outsystems.function.key", "2b78deb1-8d7b-45bd-a8c3-70a8a80e87b1"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OkHandler"), e = t.callContext(e), _.setisCFDPasswordCreationSucceeded(!1), _.setshowCFDCommissionModal(!1), _.setshowCFDCommisionBanner(!1), p.Logger.startActiveSpan("JavaScript1", function(o) {
                            o && (o.setAttribute("code.function", "JavaScript1"), o.setAttribute("outsystems.function.key", "f490d99a-f2a6-48f3-8b55-4a077029de1d"), o.setAttribute("outsystems.function.owner.name", "PartnersHub"), o.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(ni, "JavaScript1", "OkHandler", null, function(d) {}, {}, {})
                            } finally {
                                o && o.end()
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
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    s = this.idService;
                return p.Logger.startActiveSpan("OnReady", function(n) {
                    return n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "7069e413-0502-457b-a90f-e5c6ff0e6a0d"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), p.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var o = new p.DataTypes.VariableHolder;
                        return p.Flow.executeAsyncFlow(function() {
                            return o.value = p.Logger.startActiveSpan("GetAuthToken", function(d) {
                                d && (d.setAttribute("code.function", "GetAuthToken"), d.setAttribute("outsystems.function.key", "98cf65c8-86dc-4c64-b1fd-fd2330310f10"), d.setAttribute("outsystems.function.owner.name", "PartnersHub"), d.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), d.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return t.safeExecuteJSNode(ii, "GetAuthToken", "OnReady", {
                                        Token: p.DataConversion.JSNodeParamConverter.to("", p.DataTypes.DataTypes.Text)
                                    }, function(v) {
                                        var u = new(t.constructor.getVariableGroupType("PartnersHub.Common.CFDCommissionsModal.OnReady$getAuthTokenJSResult"));
                                        return u.tokenOut = p.DataConversion.JSNodeParamConverter.from(v.Token, p.DataTypes.DataTypes.Text), u
                                    }, {}, {})
                                } finally {
                                    d && d.end()
                                }
                            }, 1), r.flush(), O.cFDCommissionModalFlow$Action(o.value.tokenOut, e)
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
        get _submitHandler$Action() {
            return this.hasOwnProperty("__submitHandler$Action") || (this.__submitHandler$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    s = this.idService;
                return p.Logger.startActiveSpan("SubmitHandler", function(n) {
                    return n && (n.setAttribute("code.function", "SubmitHandler"), n.setAttribute("outsystems.function.key", "8c6b76d9-4275-4f3b-8658-1be696701c82"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), p.Flow.tryFinally(function() {
                        t.ensureControllerAlive("SubmitHandler"), e = t.callContext(e);
                        var o = new p.DataTypes.VariableHolder,
                            d = new p.DataTypes.VariableHolder,
                            v = new p.DataTypes.VariableHolder,
                            u = new p.DataTypes.VariableHolder,
                            l = new p.DataTypes.VariableHolder(new p.DataTypes.JSONSerializeOutputType);
                        return p.Flow.executeAsyncFlow(function() {
                            return p.Flow.executeSequence(function() {
                                if (p.BuiltinFunctions.length(r.variables.userInputVar) > 0) return p.Flow.executeSequence(function() {
                                    if (!(r.variables.cfdCommissionsPasswordErrorsVar.lengthAttr === "true" || r.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneUppercaseAndOneLowercaseAttr === "true" || r.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneNumberAttr === "true")) return r.variables.isSubmittingVar = !0, u.value = p.Logger.startActiveSpan("JavaScript1", function(g) {
                                        g && (g.setAttribute("code.function", "JavaScript1"), g.setAttribute("outsystems.function.key", "f120356a-8fce-4a1e-b3bd-dcc463570474"), g.setAttribute("outsystems.function.owner.name", "PartnersHub"), g.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), g.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                        try {
                                            return t.safeExecuteJSNode(oi, "JavaScript1", "SubmitHandler", {
                                                AuthToken: p.DataConversion.JSNodeParamConverter.to("", p.DataTypes.DataTypes.Text)
                                            }, function(D) {
                                                var j = new(t.constructor.getVariableGroupType("PartnersHub.Common.CFDCommissionsModal.SubmitHandler$javaScript1JSResult"));
                                                return j.authTokenOut = p.DataConversion.JSNodeParamConverter.from(D.AuthToken, p.DataTypes.DataTypes.Text), j
                                            }, {}, {})
                                        } finally {
                                            g && g.end()
                                        }
                                    }, 1), r.flush(), et.postTradingPlatformPasswordChange$Action(_.getServer(), function() {
                                        var g = new mi;
                                        return g.new_passwordAttr = r.variables.userInputVar, g.platformAttr = "mt5", g
                                    }(), u.value.authTokenOut, _.getAppId(), "EN", e).then(function(g) {
                                        o.value = g
                                    }).then(function() {
                                        return r.flush(), et.postMT5NewAccount$Action(function() {
                                            var g = new ui;
                                            return g.mt5_new_accountAttr = "1", g.account_typeAttr = "gaming", g.nameAttr = _.getname(), g.emailAttr = _.getemail(), g.leverageAttr = p.BuiltinFunctions.integerToLongInteger(500), g.mainPasswordAttr = r.variables.userInputVar, g.productAttr = "standard", g
                                        }(), u.value.authTokenOut, _.getAppId(), "EN", _.getServer(), e).then(function(g) {
                                            d.value = g
                                        })
                                    }).then(function() {
                                        l.value.jSONOut = p.JSONUtils.serializeToJSON(d.value.responseOut, !1, !1), v.value = p.Logger.startActiveSpan("JavaScript2", function(g) {
                                            g && (g.setAttribute("code.function", "JavaScript2"), g.setAttribute("outsystems.function.key", "34237c21-e0e8-4dc0-bf09-3acdfd69a87b"), g.setAttribute("outsystems.function.owner.name", "PartnersHub"), g.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), g.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                            try {
                                                return t.safeExecuteJSNode(ai, "JavaScript2", "SubmitHandler", {
                                                    Response: p.DataConversion.JSNodeParamConverter.to(l.value.jSONOut, p.DataTypes.DataTypes.Text),
                                                    isCFDPasswordCreationFailed: p.DataConversion.JSNodeParamConverter.to(!1, p.DataTypes.DataTypes.Boolean)
                                                }, function(D) {
                                                    var j = new(t.constructor.getVariableGroupType("PartnersHub.Common.CFDCommissionsModal.SubmitHandler$javaScript2JSResult"));
                                                    return j.isCFDPasswordCreationFailedOut = p.DataConversion.JSNodeParamConverter.from(D.isCFDPasswordCreationFailed, p.DataTypes.DataTypes.Boolean), j
                                                }, {}, {})
                                            } finally {
                                                g && g.end()
                                            }
                                        }, 1), r.variables.isSubmittingVar = !1
                                    }).then(function() {
                                        v.value.isCFDPasswordCreationFailedOut === !1 ? _.setisCFDPasswordCreationSucceeded(!0) : _.setisCFDPasswordCreationFailed(!0)
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
        get _cFDPasswordInputOnChange$Action() {
            return this.hasOwnProperty("__cFDPasswordInputOnChange$Action") || (this.__cFDPasswordInputOnChange$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    s = this.idService;
                return p.Logger.startActiveSpan("CFDPasswordInputOnChange", function(n) {
                    n && (n.setAttribute("code.function", "CFDPasswordInputOnChange"), n.setAttribute("outsystems.function.key", "a1c2f66b-5af9-4a2a-90ff-56857ca61b6c"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("CFDPasswordInputOnChange"), e = t.callContext(e);
                        var o = new p.DataTypes.VariableHolder;
                        o.value = p.Logger.startActiveSpan("JavaScript1", function(d) {
                            d && (d.setAttribute("code.function", "JavaScript1"), d.setAttribute("outsystems.function.key", "637064bb-864a-4559-9053-f0bef07a7842"), d.setAttribute("outsystems.function.owner.name", "PartnersHub"), d.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), d.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(si, "JavaScript1", "CFDPasswordInputOnChange", {
                                    password: p.DataConversion.JSNodeParamConverter.to(r.variables.userInputVar, p.DataTypes.DataTypes.Text),
                                    LengthError: p.DataConversion.JSNodeParamConverter.to("", p.DataTypes.DataTypes.Text),
                                    UppercaseAndLowercaseError: p.DataConversion.JSNodeParamConverter.to("", p.DataTypes.DataTypes.Text),
                                    NumberError: p.DataConversion.JSNodeParamConverter.to("", p.DataTypes.DataTypes.Text),
                                    SpecialCharacterError: p.DataConversion.JSNodeParamConverter.to("", p.DataTypes.DataTypes.Text),
                                    RequiredError: p.DataConversion.JSNodeParamConverter.to(!1, p.DataTypes.DataTypes.Boolean)
                                }, function(v) {
                                    var u = new(t.constructor.getVariableGroupType("PartnersHub.Common.CFDCommissionsModal.CFDPasswordInputOnChange$javaScript1JSResult"));
                                    return u.lengthErrorOut = p.DataConversion.JSNodeParamConverter.from(v.LengthError, p.DataTypes.DataTypes.Text), u.uppercaseAndLowercaseErrorOut = p.DataConversion.JSNodeParamConverter.from(v.UppercaseAndLowercaseError, p.DataTypes.DataTypes.Text), u.numberErrorOut = p.DataConversion.JSNodeParamConverter.from(v.NumberError, p.DataTypes.DataTypes.Text), u.specialCharacterErrorOut = p.DataConversion.JSNodeParamConverter.from(v.SpecialCharacterError, p.DataTypes.DataTypes.Text), u.requiredErrorOut = p.DataConversion.JSNodeParamConverter.from(v.RequiredError, p.DataTypes.DataTypes.Boolean), u
                                }, {}, {})
                            } finally {
                                d && d.end()
                            }
                        }, 1), r.variables.cfdCommissionsPasswordErrorsVar.lengthAttr = o.value.lengthErrorOut, r.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneUppercaseAndOneLowercaseAttr = o.value.uppercaseAndLowercaseErrorOut, r.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneNumberAttr = o.value.numberErrorOut, r.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneSpecialCharacterAttr = o.value.specialCharacterErrorOut, r.variables.requiredInputErrorVar = o.value.requiredErrorOut
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__cFDPasswordInputOnChange$Action
        }
        set _cFDPasswordInputOnChange$Action(e) {
            this.__cFDPasswordInputOnChange$Action = e
        }
        get _tryAgainHandler$Action() {
            return this.hasOwnProperty("__tryAgainHandler$Action") || (this.__tryAgainHandler$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    s = this.idService;
                return p.Logger.startActiveSpan("TryAgainHandler", function(n) {
                    n && (n.setAttribute("code.function", "TryAgainHandler"), n.setAttribute("outsystems.function.key", "b42a406c-d09a-4270-b443-2dc0b40c5c0e"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
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
        get _closeButtonHandler$Action() {
            return this.hasOwnProperty("__closeButtonHandler$Action") || (this.__closeButtonHandler$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    s = this.idService;
                return p.Logger.startActiveSpan("CloseButtonHandler", function(n) {
                    n && (n.setAttribute("code.function", "CloseButtonHandler"), n.setAttribute("outsystems.function.key", "eb2baca7-48d4-45f7-99a0-de25814e37ae"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("CloseButtonHandler"), e = t.callContext(e), _.setshowCFDCommissionModal(!1), _.setshowCFDCommisionBanner(_.getisCFDPasswordCreationSucceeded() !== !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__closeButtonHandler$Action
        }
        set _closeButtonHandler$Action(e) {
            this.__closeButtonHandler$Action = e
        }
        eyeButtonHandler$Action(e) {
            var r = this.controller;
            return p.Logger.startActiveSpan("EyeButtonHandler__proxy", function(t) {
                t && (t.setAttribute("code.function", "EyeButtonHandler"), t.setAttribute("outsystems.function.key", "10e80d12-44c2-4963-a129-6873b4b99ba5"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._eyeButtonHandler$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        okHandler$Action(e) {
            var r = this.controller;
            return p.Logger.startActiveSpan("OkHandler__proxy", function(t) {
                t && (t.setAttribute("code.function", "OkHandler"), t.setAttribute("outsystems.function.key", "2b78deb1-8d7b-45bd-a8c3-70a8a80e87b1"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._okHandler$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var r = this.controller;
            return p.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "7069e413-0502-457b-a90f-e5c6ff0e6a0d"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), p.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        submitHandler$Action(e) {
            var r = this.controller;
            return p.Logger.startActiveSpan("SubmitHandler__proxy", function(t) {
                return t && (t.setAttribute("code.function", "SubmitHandler"), t.setAttribute("outsystems.function.key", "8c6b76d9-4275-4f3b-8658-1be696701c82"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), p.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._submitHandler$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        cFDPasswordInputOnChange$Action(e) {
            var r = this.controller;
            return p.Logger.startActiveSpan("CFDPasswordInputOnChange__proxy", function(t) {
                t && (t.setAttribute("code.function", "CFDPasswordInputOnChange"), t.setAttribute("outsystems.function.key", "a1c2f66b-5af9-4a2a-90ff-56857ca61b6c"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._cFDPasswordInputOnChange$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        tryAgainHandler$Action(e) {
            var r = this.controller;
            return p.Logger.startActiveSpan("TryAgainHandler__proxy", function(t) {
                t && (t.setAttribute("code.function", "TryAgainHandler"), t.setAttribute("outsystems.function.key", "b42a406c-d09a-4270-b443-2dc0b40c5c0e"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._tryAgainHandler$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        closeButtonHandler$Action(e) {
            var r = this.controller;
            return p.Logger.startActiveSpan("CloseButtonHandler__proxy", function(t) {
                t && (t.setAttribute("code.function", "CloseButtonHandler"), t.setAttribute("outsystems.function.key", "eb2baca7-48d4-45f7-99a0-de25814e37ae"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._closeButtonHandler$Action, e)
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
            return O.defaultTimeout
        }
    };
    a(i, "ControllerInner");
    let f = i;
    Xe = f, Xe.registerVariableGroupType("PartnersHub.Common.CFDCommissionsModal.OnReady$getAuthTokenJSResult", [{
        name: "Token",
        attrName: "tokenOut",
        mandatory: !0,
        dataType: p.DataTypes.DataTypes.Text,
        defaultValue: a(function() {
            return ""
        }, "defaultValue")
    }]), Xe.registerVariableGroupType("PartnersHub.Common.CFDCommissionsModal.SubmitHandler$javaScript2JSResult", [{
        name: "isCFDPasswordCreationFailed",
        attrName: "isCFDPasswordCreationFailedOut",
        mandatory: !0,
        dataType: p.DataTypes.DataTypes.Boolean,
        defaultValue: a(function() {
            return !1
        }, "defaultValue")
    }]), Xe.registerVariableGroupType("PartnersHub.Common.CFDCommissionsModal.SubmitHandler$javaScript1JSResult", [{
        name: "AuthToken",
        attrName: "authTokenOut",
        mandatory: !0,
        dataType: p.DataTypes.DataTypes.Text,
        defaultValue: a(function() {
            return ""
        }, "defaultValue")
    }]), Xe.registerVariableGroupType("PartnersHub.Common.CFDCommissionsModal.CFDPasswordInputOnChange$javaScript1JSResult", [{
        name: "LengthError",
        attrName: "lengthErrorOut",
        mandatory: !0,
        dataType: p.DataTypes.DataTypes.Text,
        defaultValue: a(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "UppercaseAndLowercaseError",
        attrName: "uppercaseAndLowercaseErrorOut",
        mandatory: !0,
        dataType: p.DataTypes.DataTypes.Text,
        defaultValue: a(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "NumberError",
        attrName: "numberErrorOut",
        mandatory: !0,
        dataType: p.DataTypes.DataTypes.Text,
        defaultValue: a(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "SpecialCharacterError",
        attrName: "specialCharacterErrorOut",
        mandatory: !0,
        dataType: p.DataTypes.DataTypes.Text,
        defaultValue: a(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "RequiredError",
        attrName: "requiredErrorOut",
        mandatory: !0,
        dataType: p.DataTypes.DataTypes.Boolean,
        defaultValue: a(function() {
            return !1
        }, "defaultValue")
    }])
}
var Xe, Ea = new p.Controller.ControllerFactory(Xe, L);
var De = h,
    wf = E.PlaceholderContent,
    Of = E.IteratorPlaceholderContent,
    ke = class ke extends V.BaseWebBlock {
        static get displayName() {
            return "Common.CFDCommissionsModal"
        }
        static getAttributes() {
            return {
                codeFunction: "CFDCommissionsModal",
                functionKey: "79f7b6d0-e884-4e66-8e61-7fa9de160bf1",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Common.CFDCommissionsModal.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [k, te]
        }
        get modelFactory() {
            return Ca
        }
        get controllerFactory() {
            return Ea
        }
        get title() {
            return ""
        }
        internalRender() {
            let i = this.model,
                c = this.controller,
                e = this.idService,
                r = c.validationService,
                t = this.widgetsRecordProvider,
                s = c.callContext(),
                n = ke.ifWidget,
                o = ke.textWidget,
                d = ke.asPrimitiveValue,
                v = ke.getTranslation,
                u = this;
            return y.createElement("div", this.getRootNodeProperties(), y.createElement(m, {
                align: 0,
                animate: !0,
                style: "absolute-left absolute-top fixed full-width-vw full-height-vh popup-backdrop cfd-commissions-modal",
                visible: _.getshowCFDCommissionModal(),
                _idProps: {
                    service: e,
                    name: "CFDCommissionModalContainer"
                },
                _widgetRecordProvider: t
            }, y.createElement(m, {
                align: 0,
                animate: !0,
                style: "cfd-commissions-modal-dialog",
                visible: _.getshowCFDCommissionModal(),
                _idProps: {
                    service: e,
                    name: "dialog"
                },
                _widgetRecordProvider: t
            }, y.createElement(m, {
                align: 0,
                animate: !1,
                style: "cfd-commissions-modal-header",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "header"
                },
                _widgetRecordProvider: t
            }, y.createElement(A, {
                style: "ph-section-title",
                text: ["Enable CFDs commissions"],
                _idProps: {
                    service: e,
                    uuid: "3"
                },
                _widgetRecordProvider: t
            }), y.createElement(P, {
                extendedEvents: {
                    onClick: a(function() {
                        var l = s.clone();
                        c.closeButtonHandler$Action(c.callContext(l))
                    }, "onClick")
                },
                extendedProperties: {
                    className: "cfd-commissions-modal-close"
                },
                tag: "button",
                _idProps: {
                    service: e,
                    uuid: "4"
                },
                _widgetRecordProvider: t
            }, y.createElement(k, {
                getOwnerSpan: a(function() {
                    return u.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return u.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    SVGCode: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M16.125 16.875L12 12.7188L7.84375 16.875C7.65625 17.0625 7.34375 17.0625 7.125 16.875C6.9375 16.6562 6.9375 16.3438 7.125 16.1562L11.2812 12L7.15625 7.875C6.9375 7.6875 6.9375 7.375 7.15625 7.15625C7.34375 6.96875 7.65625 6.96875 7.84375 7.15625L12 11.3125L16.125 7.15625C16.3125 6.96875 16.625 6.96875 16.8438 7.15625C17.0312 7.375 17.0312 7.6875 16.8438 7.875L12.6875 12L16.8438 16.1562C17.0312 16.3438 17.0312 16.6562 16.8438 16.875C16.625 17.0625 16.3125 17.0625 16.125 16.875Z" fill="black" fill-opacity="0.72"/>\r
</svg>`
                },
                events: {
                    _handleError: a(function(l) {
                        c.handleError(l)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: r
                },
                _idProps: {
                    service: e,
                    uuid: "5",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                _dependencies: []
            }))), y.createElement(m, {
                align: 0,
                animate: !1,
                style: "cfd-commissions-modal-body",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "body"
                },
                _widgetRecordProvider: t
            }, y.createElement(m, {
                align: 0,
                animate: !1,
                style: "cfd-commissions-modal-content",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "content"
                },
                _widgetRecordProvider: t
            }, y.createElement(P, {
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
            }, y.createElement(A, {
                style: "cfd-commissions-modal-text font-size-s display-block",
                text: ["Your MT5 account is ready for receiving commissions. Set a password to enable it."],
                _idProps: {
                    service: e,
                    uuid: "9"
                },
                _widgetRecordProvider: t
            }), y.createElement(x, {
                extendedProperties: {
                    className: "font-size-s margin-bottom-s password-input-label"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                _idProps: {
                    service: e,
                    uuid: "10"
                },
                _widgetRecordProvider: t
            }, y.createElement(A, {
                text: ["Password"],
                _idProps: {
                    service: e,
                    name: "InputLabel"
                },
                _widgetRecordProvider: t
            })), y.createElement(P, {
                extendedProperties: {
                    className: "password-input"
                },
                tag: "div",
                _idProps: {
                    service: e,
                    name: "InputField"
                },
                _widgetRecordProvider: t
            }, y.createElement(pi, {
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
                onChange: a(function() {
                    var l = s.clone();
                    c.cFDPasswordInputOnChange$Action(c.callContext(l))
                }, "onChange"),
                prompt: "Enter your password",
                style: i.getCachedValue(e.getId("CFDPasswordInput.Style"), function() {
                    return i.variables.requiredInputErrorVar ? "form-control padding-right-xxl not-valid" : "form-control padding-right-xxl"
                }, function() {
                    return i.variables.requiredInputErrorVar
                }),
                variable: i.createVariable(De.DataTypes.DataTypes.Text, i.variables.userInputVar, function(l) {
                    i.variables.userInputVar = l
                }),
                _idProps: {
                    service: e,
                    name: "CFDPasswordInput"
                },
                _widgetRecordProvider: t
            }), y.createElement(P, {
                extendedEvents: {
                    onClick: a(function() {
                        var l = s.clone();
                        c.eyeButtonHandler$Action(c.callContext(l))
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
            }, y.createElement(P, {
                extendedProperties: {
                    className: "hidden"
                },
                tag: "span",
                _idProps: {
                    service: e,
                    name: "HidePassword"
                },
                _widgetRecordProvider: t
            }, y.createElement(k, {
                getOwnerSpan: a(function() {
                    return u.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return u.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    SVGCode: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24px" height="24px" role="img"><path d="M9.32 11.813C7.64 13.375 6.508 15.25 6 16.5c.508 1.25 1.64 3.125 3.32 4.688S13.227 24 16 24c2.734 0 4.96-1.25 6.64-2.812 1.68-1.563 2.813-3.438 3.36-4.688-.547-1.25-1.68-3.125-3.36-4.687S18.735 9 16 9c-2.773 0-5 1.25-6.68 2.813M16 7.75c3.125 0 5.664 1.445 7.5 3.164 1.836 1.68 3.047 3.711 3.633 5.117a1.4 1.4 0 0 1 0 .977c-.586 1.367-1.797 3.398-3.633 5.117S19.125 25.25 16 25.25c-3.164 0-5.703-1.406-7.54-3.125-1.835-1.719-3.046-3.75-3.632-5.117a1.4 1.4 0 0 1 0-.977c.586-1.406 1.797-3.437 3.633-5.117C10.297 9.195 12.836 7.75 16 7.75m-3.75 8.75c0 1.367.703 2.578 1.875 3.281 1.133.664 2.578.664 3.75 0 1.133-.703 1.875-1.914 1.875-3.281 0-1.328-.742-2.54-1.875-3.242-1.172-.664-2.617-.664-3.75 0-1.172.703-1.875 1.914-1.875 3.242m8.75 0c0 1.797-.977 3.438-2.5 4.336-1.562.898-3.477.898-5 0A4.97 4.97 0 0 1 11 16.5c0-1.758.938-3.398 2.5-4.297 1.523-.898 3.438-.898 5 0 1.523.899 2.5 2.54 2.5 4.297"></path></svg>'
                },
                events: {
                    _handleError: a(function(l) {
                        c.handleError(l)
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
                _dependencies: []
            })), y.createElement(P, {
                tag: "span",
                _idProps: {
                    service: e,
                    name: "ShowPassword"
                },
                _widgetRecordProvider: t
            }, y.createElement(k, {
                getOwnerSpan: a(function() {
                    return u.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return u.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    SVGCode: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24px" height="24px" role="img"><path d="m4.477 6.656 23.789 18.75c.234.196.312.625.078.86a.584.584 0 0 1-.86.117L3.734 7.633c-.273-.195-.351-.625-.117-.86.196-.273.625-.351.86-.117m22.656 10.352c-.39.937-1.094 2.226-2.11 3.476l-.976-.78A14.4 14.4 0 0 0 26 16.5c-.547-1.25-1.68-3.125-3.36-4.687S18.735 9 16 9c-1.562 0-2.969.43-4.18 1.055l-1.054-.86C12.25 8.335 13.969 7.75 16 7.75c3.125 0 5.664 1.445 7.5 3.164 1.836 1.68 3.047 3.711 3.633 5.117a1.4 1.4 0 0 1 0 .977M6.938 12.555l.976.78A12.6 12.6 0 0 0 6 16.5c.508 1.25 1.64 3.125 3.32 4.688S13.227 24 16 24c1.523 0 2.93-.39 4.14-1.016l1.055.86A10.1 10.1 0 0 1 16 25.25c-3.164 0-5.703-1.406-7.54-3.125-1.835-1.719-3.046-3.75-3.632-5.117a1.4 1.4 0 0 1 0-.977c.39-.937 1.094-2.226 2.11-3.476M16 21.5c-2.773 0-5-2.227-5-5 0-.234 0-.469.04-.703l1.21.937A3.73 3.73 0 0 0 16 20.25c.195 0 .43 0 .625-.04l1.21.938A5 5 0 0 1 16 21.5m5-5v.04c0 .233-.04.468-.078.702l-1.211-.937c-.117-1.992-1.719-3.516-3.711-3.516-.234 0-.469 0-.664.04l-1.211-.938c.586-.235 1.21-.391 1.875-.391 2.734 0 5 2.266 5 5"></path></svg>'
                },
                events: {
                    _handleError: a(function(l) {
                        c.handleError(l)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: r
                },
                _idProps: {
                    service: e,
                    uuid: "18",
                    alias: "3"
                },
                _widgetRecordProvider: t,
                _dependencies: []
            })))), n(i.variables.requiredInputErrorVar, !1, this, function() {
                return [y.createElement(A, {
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
            }), y.createElement(P, {
                extendedProperties: {
                    className: "cfd-commissions-password-policy"
                },
                tag: "ul",
                _idProps: {
                    service: e,
                    name: "Validations"
                },
                _widgetRecordProvider: t
            }, y.createElement(P, {
                extendedProperties: {
                    className: i.getCachedValue(e.getId("9btDZAIVhUi0K2cF2_7eyg.class"), function() {
                        return i.variables.cfdCommissionsPasswordErrorsVar.lengthAttr === "false" ? "cfd-input-validation valid" : i.variables.cfdCommissionsPasswordErrorsVar.lengthAttr === "true" ? "cfd-input-validation not-valid" : "cfd-input-validation"
                    }, function() {
                        return i.variables.cfdCommissionsPasswordErrorsVar.lengthAttr
                    })
                },
                tag: "li",
                _idProps: {
                    service: e,
                    uuid: "21"
                },
                _widgetRecordProvider: t
            }, y.createElement(P, {
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
            }, y.createElement(k, {
                getOwnerSpan: a(function() {
                    return u.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return u.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    SVGCode: `<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M6 12.5C3.84375 12.5 1.875 11.375 0.796875 9.5C-0.28125 7.64844 -0.28125 5.375 0.796875 3.5C1.875 1.64844 3.84375 0.5 6 0.5C8.13281 0.5 10.1016 1.64844 11.1797 3.5C12.2578 5.375 12.2578 7.64844 11.1797 9.5C10.1016 11.375 8.13281 12.5 6 12.5ZM4.10156 4.60156C3.86719 4.83594 3.86719 5.1875 4.10156 5.39844L5.20312 6.5L4.10156 7.60156C3.86719 7.83594 3.86719 8.1875 4.10156 8.39844C4.3125 8.63281 4.66406 8.63281 4.875 8.39844L5.97656 7.29688L7.07812 8.39844C7.3125 8.63281 7.66406 8.63281 7.875 8.39844C8.10938 8.1875 8.10938 7.83594 7.875 7.60156L6.77344 6.5L7.875 5.39844C8.10938 5.1875 8.10938 4.83594 7.875 4.60156C7.66406 4.39062 7.3125 4.39062 7.07812 4.60156L5.97656 5.70312L4.875 4.60156C4.66406 4.39062 4.3125 4.39062 4.10156 4.60156Z" fill="#DC2020"/>\r
</svg>`
                },
                events: {
                    _handleError: a(function(l) {
                        c.handleError(l)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: r
                },
                _idProps: {
                    service: e,
                    uuid: "23",
                    alias: "4"
                },
                _widgetRecordProvider: t,
                _dependencies: []
            })), y.createElement(P, {
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
            }, y.createElement(k, {
                getOwnerSpan: a(function() {
                    return u.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return u.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    SVGCode: `<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M6 12.5C3.84375 12.5 1.875 11.375 0.796875 9.5C-0.28125 7.64844 -0.28125 5.375 0.796875 3.5C1.875 1.64844 3.84375 0.5 6 0.5C8.13281 0.5 10.1016 1.64844 11.1797 3.5C12.2578 5.375 12.2578 7.64844 11.1797 9.5C10.1016 11.375 8.13281 12.5 6 12.5ZM8.64844 5.39844H8.625C8.85938 5.1875 8.85938 4.83594 8.625 4.60156C8.41406 4.39062 8.0625 4.39062 7.85156 4.60156L5.25 7.22656L4.14844 6.125C3.91406 5.89062 3.5625 5.89062 3.35156 6.125C3.11719 6.33594 3.11719 6.6875 3.35156 6.89844L4.85156 8.39844C5.0625 8.63281 5.41406 8.63281 5.64844 8.39844L8.64844 5.39844Z" fill="#29823B"/>\r
</svg>`
                },
                events: {
                    _handleError: a(function(l) {
                        c.handleError(l)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: r
                },
                _idProps: {
                    service: e,
                    uuid: "25",
                    alias: "5"
                },
                _widgetRecordProvider: t,
                _dependencies: []
            })), y.createElement(P, {
                extendedProperties: {
                    className: i.getCachedValue(e.getId("OutlineIcon.class"), function() {
                        return De.BuiltinFunctions.length(i.variables.cfdCommissionsPasswordErrorsVar.lengthAttr) === 0 ? "display-block" : "hidden"
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
            }, y.createElement(k, {
                getOwnerSpan: a(function() {
                    return u.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return u.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    SVGCode: `<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M10.875 6.5C10.875 4.76562 9.9375 3.17188 8.4375 2.28125C6.91406 1.41406 5.0625 1.41406 3.5625 2.28125C2.03906 3.17188 1.125 4.76562 1.125 6.5C1.125 8.25781 2.03906 9.85156 3.5625 10.7422C5.0625 11.6094 6.91406 11.6094 8.4375 10.7422C9.9375 9.85156 10.875 8.25781 10.875 6.5ZM0 6.5C0 4.36719 1.125 2.39844 3 1.32031C4.85156 0.242188 7.125 0.242188 9 1.32031C10.8516 2.39844 12 4.36719 12 6.5C12 8.65625 10.8516 10.625 9 11.7031C7.125 12.7812 4.85156 12.7812 3 11.7031C1.125 10.625 0 8.65625 0 6.5Z" fill="black" fill-opacity="0.72"/>\r
</svg>`
                },
                events: {
                    _handleError: a(function(l) {
                        c.handleError(l)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: r
                },
                _idProps: {
                    service: e,
                    uuid: "27",
                    alias: "6"
                },
                _widgetRecordProvider: t,
                _dependencies: []
            })), y.createElement(P, {
                extendedProperties: {
                    className: "font-size-xs margin-none"
                },
                tag: "p",
                _idProps: {
                    service: e,
                    uuid: "28"
                },
                _widgetRecordProvider: t
            }, "8\u201325 characters long")), y.createElement(P, {
                extendedProperties: {
                    className: i.getCachedValue(e.getId("XQJAJ73C+ESA1lMuxSPoFw.class"), function() {
                        return i.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneUppercaseAndOneLowercaseAttr === "false" ? "cfd-input-validation valid" : i.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneUppercaseAndOneLowercaseAttr === "true" ? "cfd-input-validation not-valid" : "cfd-input-validation"
                    }, function() {
                        return i.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneUppercaseAndOneLowercaseAttr
                    })
                },
                tag: "li",
                _idProps: {
                    service: e,
                    uuid: "29"
                },
                _widgetRecordProvider: t
            }, y.createElement(P, {
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
            }, y.createElement(k, {
                getOwnerSpan: a(function() {
                    return u.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return u.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    SVGCode: `<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M6 12.5C3.84375 12.5 1.875 11.375 0.796875 9.5C-0.28125 7.64844 -0.28125 5.375 0.796875 3.5C1.875 1.64844 3.84375 0.5 6 0.5C8.13281 0.5 10.1016 1.64844 11.1797 3.5C12.2578 5.375 12.2578 7.64844 11.1797 9.5C10.1016 11.375 8.13281 12.5 6 12.5ZM4.10156 4.60156C3.86719 4.83594 3.86719 5.1875 4.10156 5.39844L5.20312 6.5L4.10156 7.60156C3.86719 7.83594 3.86719 8.1875 4.10156 8.39844C4.3125 8.63281 4.66406 8.63281 4.875 8.39844L5.97656 7.29688L7.07812 8.39844C7.3125 8.63281 7.66406 8.63281 7.875 8.39844C8.10938 8.1875 8.10938 7.83594 7.875 7.60156L6.77344 6.5L7.875 5.39844C8.10938 5.1875 8.10938 4.83594 7.875 4.60156C7.66406 4.39062 7.3125 4.39062 7.07812 4.60156L5.97656 5.70312L4.875 4.60156C4.66406 4.39062 4.3125 4.39062 4.10156 4.60156Z" fill="#DC2020"/>\r
</svg>`
                },
                events: {
                    _handleError: a(function(l) {
                        c.handleError(l)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: r
                },
                _idProps: {
                    service: e,
                    uuid: "31",
                    alias: "7"
                },
                _widgetRecordProvider: t,
                _dependencies: []
            })), y.createElement(P, {
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
            }, y.createElement(k, {
                getOwnerSpan: a(function() {
                    return u.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return u.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    SVGCode: `<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M6 12.5C3.84375 12.5 1.875 11.375 0.796875 9.5C-0.28125 7.64844 -0.28125 5.375 0.796875 3.5C1.875 1.64844 3.84375 0.5 6 0.5C8.13281 0.5 10.1016 1.64844 11.1797 3.5C12.2578 5.375 12.2578 7.64844 11.1797 9.5C10.1016 11.375 8.13281 12.5 6 12.5ZM8.64844 5.39844H8.625C8.85938 5.1875 8.85938 4.83594 8.625 4.60156C8.41406 4.39062 8.0625 4.39062 7.85156 4.60156L5.25 7.22656L4.14844 6.125C3.91406 5.89062 3.5625 5.89062 3.35156 6.125C3.11719 6.33594 3.11719 6.6875 3.35156 6.89844L4.85156 8.39844C5.0625 8.63281 5.41406 8.63281 5.64844 8.39844L8.64844 5.39844Z" fill="#29823B"/>\r
</svg>`
                },
                events: {
                    _handleError: a(function(l) {
                        c.handleError(l)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: r
                },
                _idProps: {
                    service: e,
                    uuid: "33",
                    alias: "8"
                },
                _widgetRecordProvider: t,
                _dependencies: []
            })), y.createElement(P, {
                extendedProperties: {
                    className: i.getCachedValue(e.getId("OutlineIcon2.class"), function() {
                        return De.BuiltinFunctions.length(i.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneUppercaseAndOneLowercaseAttr) === 0 ? "display-block" : "hidden"
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
            }, y.createElement(k, {
                getOwnerSpan: a(function() {
                    return u.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return u.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    SVGCode: `<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M10.875 6.5C10.875 4.76562 9.9375 3.17188 8.4375 2.28125C6.91406 1.41406 5.0625 1.41406 3.5625 2.28125C2.03906 3.17188 1.125 4.76562 1.125 6.5C1.125 8.25781 2.03906 9.85156 3.5625 10.7422C5.0625 11.6094 6.91406 11.6094 8.4375 10.7422C9.9375 9.85156 10.875 8.25781 10.875 6.5ZM0 6.5C0 4.36719 1.125 2.39844 3 1.32031C4.85156 0.242188 7.125 0.242188 9 1.32031C10.8516 2.39844 12 4.36719 12 6.5C12 8.65625 10.8516 10.625 9 11.7031C7.125 12.7812 4.85156 12.7812 3 11.7031C1.125 10.625 0 8.65625 0 6.5Z" fill="black" fill-opacity="0.72"/>\r
</svg>`
                },
                events: {
                    _handleError: a(function(l) {
                        c.handleError(l)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: r
                },
                _idProps: {
                    service: e,
                    uuid: "35",
                    alias: "9"
                },
                _widgetRecordProvider: t,
                _dependencies: []
            })), y.createElement(P, {
                extendedProperties: {
                    className: "font-size-xs margin-none"
                },
                tag: "p",
                _idProps: {
                    service: e,
                    uuid: "36"
                },
                _widgetRecordProvider: t
            }, "At least one uppercase and one lowercase letter")), y.createElement(P, {
                extendedProperties: {
                    className: i.getCachedValue(e.getId("umoSJMOu+EGo2dtUQlWQAw.class"), function() {
                        return i.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneNumberAttr === "false" ? "cfd-input-validation valid" : i.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneNumberAttr === "true" ? "cfd-input-validation not-valid" : "cfd-input-validation"
                    }, function() {
                        return i.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneNumberAttr
                    })
                },
                tag: "li",
                _idProps: {
                    service: e,
                    uuid: "37"
                },
                _widgetRecordProvider: t
            }, y.createElement(P, {
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
            }, y.createElement(k, {
                getOwnerSpan: a(function() {
                    return u.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return u.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    SVGCode: `<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M6 12.5C3.84375 12.5 1.875 11.375 0.796875 9.5C-0.28125 7.64844 -0.28125 5.375 0.796875 3.5C1.875 1.64844 3.84375 0.5 6 0.5C8.13281 0.5 10.1016 1.64844 11.1797 3.5C12.2578 5.375 12.2578 7.64844 11.1797 9.5C10.1016 11.375 8.13281 12.5 6 12.5ZM4.10156 4.60156C3.86719 4.83594 3.86719 5.1875 4.10156 5.39844L5.20312 6.5L4.10156 7.60156C3.86719 7.83594 3.86719 8.1875 4.10156 8.39844C4.3125 8.63281 4.66406 8.63281 4.875 8.39844L5.97656 7.29688L7.07812 8.39844C7.3125 8.63281 7.66406 8.63281 7.875 8.39844C8.10938 8.1875 8.10938 7.83594 7.875 7.60156L6.77344 6.5L7.875 5.39844C8.10938 5.1875 8.10938 4.83594 7.875 4.60156C7.66406 4.39062 7.3125 4.39062 7.07812 4.60156L5.97656 5.70312L4.875 4.60156C4.66406 4.39062 4.3125 4.39062 4.10156 4.60156Z" fill="#DC2020"/>\r
</svg>`
                },
                events: {
                    _handleError: a(function(l) {
                        c.handleError(l)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: r
                },
                _idProps: {
                    service: e,
                    uuid: "39",
                    alias: "10"
                },
                _widgetRecordProvider: t,
                _dependencies: []
            })), y.createElement(P, {
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
            }, y.createElement(k, {
                getOwnerSpan: a(function() {
                    return u.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return u.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    SVGCode: `<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M6 12.5C3.84375 12.5 1.875 11.375 0.796875 9.5C-0.28125 7.64844 -0.28125 5.375 0.796875 3.5C1.875 1.64844 3.84375 0.5 6 0.5C8.13281 0.5 10.1016 1.64844 11.1797 3.5C12.2578 5.375 12.2578 7.64844 11.1797 9.5C10.1016 11.375 8.13281 12.5 6 12.5ZM8.64844 5.39844H8.625C8.85938 5.1875 8.85938 4.83594 8.625 4.60156C8.41406 4.39062 8.0625 4.39062 7.85156 4.60156L5.25 7.22656L4.14844 6.125C3.91406 5.89062 3.5625 5.89062 3.35156 6.125C3.11719 6.33594 3.11719 6.6875 3.35156 6.89844L4.85156 8.39844C5.0625 8.63281 5.41406 8.63281 5.64844 8.39844L8.64844 5.39844Z" fill="#29823B"/>\r
</svg>`
                },
                events: {
                    _handleError: a(function(l) {
                        c.handleError(l)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: r
                },
                _idProps: {
                    service: e,
                    uuid: "41",
                    alias: "11"
                },
                _widgetRecordProvider: t,
                _dependencies: []
            })), y.createElement(P, {
                extendedProperties: {
                    className: i.getCachedValue(e.getId("OutlineIcon3.class"), function() {
                        return De.BuiltinFunctions.length(i.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneNumberAttr) === 0 ? "display-block" : "hidden"
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
            }, y.createElement(k, {
                getOwnerSpan: a(function() {
                    return u.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return u.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    SVGCode: `<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M10.875 6.5C10.875 4.76562 9.9375 3.17188 8.4375 2.28125C6.91406 1.41406 5.0625 1.41406 3.5625 2.28125C2.03906 3.17188 1.125 4.76562 1.125 6.5C1.125 8.25781 2.03906 9.85156 3.5625 10.7422C5.0625 11.6094 6.91406 11.6094 8.4375 10.7422C9.9375 9.85156 10.875 8.25781 10.875 6.5ZM0 6.5C0 4.36719 1.125 2.39844 3 1.32031C4.85156 0.242188 7.125 0.242188 9 1.32031C10.8516 2.39844 12 4.36719 12 6.5C12 8.65625 10.8516 10.625 9 11.7031C7.125 12.7812 4.85156 12.7812 3 11.7031C1.125 10.625 0 8.65625 0 6.5Z" fill="black" fill-opacity="0.72"/>\r
</svg>`
                },
                events: {
                    _handleError: a(function(l) {
                        c.handleError(l)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: r
                },
                _idProps: {
                    service: e,
                    uuid: "43",
                    alias: "12"
                },
                _widgetRecordProvider: t,
                _dependencies: []
            })), y.createElement(P, {
                extendedProperties: {
                    className: "font-size-xs margin-none"
                },
                tag: "p",
                _idProps: {
                    service: e,
                    uuid: "44"
                },
                _widgetRecordProvider: t
            }, "At least one number")), y.createElement(P, {
                extendedProperties: {
                    className: i.getCachedValue(e.getId("OPVjyA7S20aZWRfndL24mQ.class"), function() {
                        return i.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneSpecialCharacterAttr === "false" ? "cfd-input-validation valid" : i.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneSpecialCharacterAttr === "true" ? "cfd-input-validation not-valid" : "cfd-input-validation"
                    }, function() {
                        return i.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneSpecialCharacterAttr
                    })
                },
                tag: "li",
                _idProps: {
                    service: e,
                    uuid: "45"
                },
                _widgetRecordProvider: t
            }, y.createElement(P, {
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
            }, y.createElement(k, {
                getOwnerSpan: a(function() {
                    return u.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return u.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    SVGCode: `<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M6 12.5C3.84375 12.5 1.875 11.375 0.796875 9.5C-0.28125 7.64844 -0.28125 5.375 0.796875 3.5C1.875 1.64844 3.84375 0.5 6 0.5C8.13281 0.5 10.1016 1.64844 11.1797 3.5C12.2578 5.375 12.2578 7.64844 11.1797 9.5C10.1016 11.375 8.13281 12.5 6 12.5ZM4.10156 4.60156C3.86719 4.83594 3.86719 5.1875 4.10156 5.39844L5.20312 6.5L4.10156 7.60156C3.86719 7.83594 3.86719 8.1875 4.10156 8.39844C4.3125 8.63281 4.66406 8.63281 4.875 8.39844L5.97656 7.29688L7.07812 8.39844C7.3125 8.63281 7.66406 8.63281 7.875 8.39844C8.10938 8.1875 8.10938 7.83594 7.875 7.60156L6.77344 6.5L7.875 5.39844C8.10938 5.1875 8.10938 4.83594 7.875 4.60156C7.66406 4.39062 7.3125 4.39062 7.07812 4.60156L5.97656 5.70312L4.875 4.60156C4.66406 4.39062 4.3125 4.39062 4.10156 4.60156Z" fill="#DC2020"/>\r
</svg>`
                },
                events: {
                    _handleError: a(function(l) {
                        c.handleError(l)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: r
                },
                _idProps: {
                    service: e,
                    uuid: "47",
                    alias: "13"
                },
                _widgetRecordProvider: t,
                _dependencies: []
            })), y.createElement(P, {
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
            }, y.createElement(k, {
                getOwnerSpan: a(function() {
                    return u.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return u.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    SVGCode: `<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M6 12.5C3.84375 12.5 1.875 11.375 0.796875 9.5C-0.28125 7.64844 -0.28125 5.375 0.796875 3.5C1.875 1.64844 3.84375 0.5 6 0.5C8.13281 0.5 10.1016 1.64844 11.1797 3.5C12.2578 5.375 12.2578 7.64844 11.1797 9.5C10.1016 11.375 8.13281 12.5 6 12.5ZM8.64844 5.39844H8.625C8.85938 5.1875 8.85938 4.83594 8.625 4.60156C8.41406 4.39062 8.0625 4.39062 7.85156 4.60156L5.25 7.22656L4.14844 6.125C3.91406 5.89062 3.5625 5.89062 3.35156 6.125C3.11719 6.33594 3.11719 6.6875 3.35156 6.89844L4.85156 8.39844C5.0625 8.63281 5.41406 8.63281 5.64844 8.39844L8.64844 5.39844Z" fill="#29823B"/>\r
</svg>`
                },
                events: {
                    _handleError: a(function(l) {
                        c.handleError(l)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: r
                },
                _idProps: {
                    service: e,
                    uuid: "49",
                    alias: "14"
                },
                _widgetRecordProvider: t,
                _dependencies: []
            })), y.createElement(P, {
                extendedProperties: {
                    className: i.getCachedValue(e.getId("OutlineIcon4.class"), function() {
                        return De.BuiltinFunctions.length(i.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneSpecialCharacterAttr) === 0 ? "display-block" : "hidden"
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
            }, y.createElement(k, {
                getOwnerSpan: a(function() {
                    return u.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return u.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    SVGCode: `<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M10.875 6.5C10.875 4.76562 9.9375 3.17188 8.4375 2.28125C6.91406 1.41406 5.0625 1.41406 3.5625 2.28125C2.03906 3.17188 1.125 4.76562 1.125 6.5C1.125 8.25781 2.03906 9.85156 3.5625 10.7422C5.0625 11.6094 6.91406 11.6094 8.4375 10.7422C9.9375 9.85156 10.875 8.25781 10.875 6.5ZM0 6.5C0 4.36719 1.125 2.39844 3 1.32031C4.85156 0.242188 7.125 0.242188 9 1.32031C10.8516 2.39844 12 4.36719 12 6.5C12 8.65625 10.8516 10.625 9 11.7031C7.125 12.7812 4.85156 12.7812 3 11.7031C1.125 10.625 0 8.65625 0 6.5Z" fill="black" fill-opacity="0.72"/>\r
</svg>`
                },
                events: {
                    _handleError: a(function(l) {
                        c.handleError(l)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: r
                },
                _idProps: {
                    service: e,
                    uuid: "51",
                    alias: "15"
                },
                _widgetRecordProvider: t,
                _dependencies: []
            })), y.createElement(P, {
                extendedProperties: {
                    className: "font-size-xs margin-none"
                },
                tag: "p",
                _idProps: {
                    service: e,
                    uuid: "52"
                },
                _widgetRecordProvider: t
            }, "At least one special character")))), y.createElement(P, {
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
            }, y.createElement(z, {
                extendedProperties: {
                    className: "cfd-commissions-modal-screen-img"
                },
                image: De.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.SpreadRisks.png"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "54"
                },
                _widgetRecordProvider: t
            }), y.createElement(P, {
                extendedProperties: {
                    className: "cfd-commissions-modal-screen-heading"
                },
                tag: "h4",
                _idProps: {
                    service: e,
                    uuid: "55"
                },
                _widgetRecordProvider: t
            }, "Password creation failed"), y.createElement(P, {
                extendedProperties: {
                    className: "cfd-commissions-modal-screen-text"
                },
                tag: "p",
                _idProps: {
                    service: e,
                    uuid: "56"
                },
                _widgetRecordProvider: t
            }, "There was an issue creating your password.")), y.createElement(P, {
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
            }, y.createElement(z, {
                extendedProperties: {
                    className: "cfd-commissions-modal-screen-img"
                },
                image: De.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.twentyfourhourstrading.png"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "58"
                },
                _widgetRecordProvider: t
            }), y.createElement(P, {
                extendedProperties: {
                    className: "cfd-commissions-modal-screen-heading"
                },
                tag: "h4",
                _idProps: {
                    service: e,
                    uuid: "59"
                },
                _widgetRecordProvider: t
            }, "Almost there"), y.createElement(P, {
                extendedProperties: {
                    className: "cfd-commissions-modal-screen-text"
                },
                tag: "p",
                _idProps: {
                    service: e,
                    uuid: "60"
                },
                _widgetRecordProvider: t
            }, "Your account manager will contact you soon."))), y.createElement(P, {
                extendedProperties: {
                    className: "cfd-commissions-modal-footer"
                },
                tag: "div",
                _idProps: {
                    service: e,
                    name: "footer"
                },
                _widgetRecordProvider: t
            }, n(_.getisCFDPasswordCreationFailed() === !1 && _.getisCFDPasswordCreationSucceeded() === !1, !1, this, function() {
                return [y.createElement(te, {
                    getOwnerSpan: a(function() {
                        return u.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: a(function() {
                        return u.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        Width: "100%",
                        isLoading: i.variables.isSubmittingVar,
                        enabled: i.variables.isSubmittingVar === !1,
                        borderRadius: "35px",
                        title: "Set up password"
                    },
                    events: {
                        _handleError: a(function(l) {
                            c.handleError(l)
                        }, "_handleError"),
                        onClick$Action: a(function() {
                            return Promise.resolve().then(function() {
                                var l = s.clone();
                                return c.submitHandler$Action(c.callContext(l))
                            })
                        }, "onClick$Action")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: e,
                        name: "SubmitButton",
                        alias: "16"
                    },
                    _widgetRecordProvider: t,
                    _dependencies: []
                })]
            }, function() {
                return []
            }), n(_.getisCFDPasswordCreationFailed() === !0, !1, this, function() {
                return [y.createElement(te, {
                    getOwnerSpan: a(function() {
                        return u.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: a(function() {
                        return u.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        title: "Try again",
                        borderRadius: "35px",
                        Width: "100%"
                    },
                    events: {
                        _handleError: a(function(l) {
                            c.handleError(l)
                        }, "_handleError"),
                        onClick$Action: a(function() {
                            var l = s.clone();
                            c.tryAgainHandler$Action(c.callContext(l))
                        }, "onClick$Action")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: e,
                        name: "TryAgainButton",
                        alias: "17"
                    },
                    _widgetRecordProvider: t,
                    _dependencies: []
                })]
            }, function() {
                return []
            }), n(_.getisCFDPasswordCreationSucceeded() === !0, !1, this, function() {
                return [y.createElement(te, {
                    getOwnerSpan: a(function() {
                        return u.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: a(function() {
                        return u.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        borderRadius: "35px",
                        Width: "100%",
                        title: "OK"
                    },
                    events: {
                        _handleError: a(function(l) {
                            c.handleError(l)
                        }, "_handleError"),
                        onClick$Action: a(function() {
                            var l = s.clone();
                            c.okHandler$Action(c.callContext(l))
                        }, "onClick$Action")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: e,
                        name: "OkButton",
                        alias: "18"
                    },
                    _widgetRecordProvider: t,
                    _dependencies: []
                })]
            }, function() {
                return []
            }))))))
        }
    };
a(ke, "View");
var li = ke,
    ci = li;
var nr = h,
    Yo = E.PlaceholderContent,
    es = E.IteratorPlaceholderContent,
    Le = class Le extends V.BaseWebScreen {
        static get displayName() {
            return "Home.PartnersHubDashboard"
        }
        static getAttributes() {
            return {
                codeFunction: "PartnersHubDashboard",
                functionKey: "c31f116a-8af3-4faf-90b7-67d384e710b4",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/PartnersHub.PHubTest.css", "css/PartnersHub.Home.PartnersHubDashboard.css", "css/PartnersHub.PHubTest.extra.css"]
        }
        static getJsDependencies() {
            return ["scripts/PartnersHub.UserScripts.DerivAnalytics.js"]
        }
        static getBlocks() {
            return [pr, te, mr, Sr, Rr, Dr, ln, Hn, Nn, Jn, Zn, ci]
        }
        get modelFactory() {
            return yi
        }
        get controllerFactory() {
            return bi
        }
        get title() {
            return V.BaseWebScreen.getTranslation("ahEfw_OKr0+Qt2fThOcQtA#Title", "PartnersHubDashboard")
        }
        internalRender() {
            let i = this.model,
                c = this.controller,
                e = this.idService,
                r = c.validationService,
                t = this.widgetsRecordProvider,
                s = c.callContext(),
                n = Le.ifWidget,
                o = Le.textWidget,
                d = Le.asPrimitiveValue,
                v = Le.getTranslation,
                u = this;
            return H.createElement("div", this.getRootNodeProperties(), H.createElement(pr, {
                getOwnerSpan: a(function() {
                    return u.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return u.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: a(function(l) {
                        c.handleError(l)
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
                    placeholder: new Yo(function() {
                        return [H.createElement(_i, {
                            extendedProperties: {
                                style: "border-radius: 8px; padding: 20px;"
                            },
                            showPopup: _.getIsNotAPartner(),
                            style: "popup-dialog",
                            _idProps: {
                                service: e,
                                uuid: "1"
                            },
                            _widgetRecordProvider: t
                        }, H.createElement(m, {
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
                        }, H.createElement(A, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: bold;"
                            },
                            text: [o(v("+cMjKEMeO0+xPg0MYrxs_Q#Value", "Welcome to the Partner Hub!"))],
                            _idProps: {
                                service: e,
                                uuid: "3"
                            },
                            _widgetRecordProvider: t
                        }), o(v("VM1sYo9Hq065DYlD1_+8Jw#Value", "It looks like you haven't signed up as a partner yet. To access our partner dashboard, please continue with your signup process.")), H.createElement(m, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "display: flex; gap: 16px;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "4"
                            },
                            _widgetRecordProvider: t
                        }, H.createElement(te, {
                            getOwnerSpan: a(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                title: "Continue signup"
                            },
                            events: {
                                _handleError: a(function(l) {
                                    c.handleError(l)
                                }, "_handleError"),
                                onClick$Action: a(function() {
                                    var l = s.clone();
                                    c.continueSignupOnClick$Action(c.callContext(l))
                                }, "onClick$Action")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "5",
                                alias: "2"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        }), H.createElement(mr, {
                            getOwnerSpan: a(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                title: "Log out"
                            },
                            events: {
                                _handleError: a(function(l) {
                                    c.handleError(l)
                                }, "_handleError"),
                                onClick$Action: a(function() {
                                    return Promise.resolve().then(function() {
                                        var l = s.clone();
                                        return c.onClickLogout$Action(c.callContext(l))
                                    })
                                }, "onClick$Action")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "6",
                                alias: "3"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })))), H.createElement(m, {
                            align: 0,
                            animate: !1,
                            gridProperties: {
                                classes: "OSInline"
                            },
                            style: "partners-hub-dashboard",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "7"
                            },
                            _widgetRecordProvider: t
                        }, H.createElement(m, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "display: flex;"
                            },
                            style: "partners-hub-title-container",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "PartnersHubTitle"
                            },
                            _widgetRecordProvider: t
                        }, H.createElement(m, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "align-items: center; display: flex; gap: 24px;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "9"
                            },
                            _widgetRecordProvider: t
                        }, H.createElement(A, {
                            extendedProperties: {
                                style: "color: #222; font-size: 24px; font-weight: bold;"
                            },
                            text: ["Partner's Hub"],
                            _idProps: {
                                service: e,
                                uuid: "10"
                            },
                            _widgetRecordProvider: t
                        })), n(_.getisLanguageSwitcherEnabledFF(), !1, this, function() {
                            return [H.createElement(m, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "display: flex;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "300px"
                                },
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    name: "LanguageSwitcher"
                                },
                                _widgetRecordProvider: t
                            }, H.createElement(vi, {
                                _validationProps: {
                                    validationService: r
                                },
                                dropdownMode: 1,
                                enabled: !0,
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                list: i.variables.getLanguagesByEnabledAggr.listOut,
                                mandatory: !1,
                                onChange: a(function() {
                                    return Promise.resolve().then(function() {
                                        var l = s.clone();
                                        return c.onSwitchLanguage$Action(c.callContext(l))
                                    })
                                }, "onChange"),
                                style: "dropdown",
                                values: a(function(l) {
                                    return l.languagesAttr.codeAttr
                                }, "values"),
                                variable: i.createVariable(nr.DataTypes.DataTypes.Text, _.getLanguage(), function(l) {
                                    _.setLanguage(l)
                                }),
                                _idProps: {
                                    service: e,
                                    name: "LanguageSwitcherDropdown"
                                },
                                _widgetRecordProvider: t,
                                list_dataFetchStatus: nr.Model.calculateDataFetchStatus(i.variables.getLanguagesByEnabledAggr.dataFetchStatusAttr),
                                placeholders: {
                                    content: new es(function(l, g) {
                                        return [H.createElement(m, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "align-items: center; display: flex; gap: 10px;"
                                            },
                                            style: "",
                                            visible: !0,
                                            _idProps: {
                                                service: l,
                                                uuid: "13"
                                            },
                                            _widgetRecordProvider: t,
                                            _dependencies: [d(i.variables.getLanguagesByEnabledAggr.dataFetchStatusAttr), d(i.variables.getLanguagesByEnabledAggr.listOut.getCurrent(g.iterationContext).languagesAttr.nameAttr), d(i.variables.getLanguagesByEnabledAggr.listOut.getCurrent(g.iterationContext).languagesAttr.iconAttr)]
                                        }, H.createElement(z, {
                                            gridProperties: {
                                                width: "30px"
                                            },
                                            type: 1,
                                            url: i.variables.getLanguagesByEnabledAggr.listOut.getCurrent(g.iterationContext).languagesAttr.iconAttr,
                                            _idProps: {
                                                service: l,
                                                uuid: "14"
                                            },
                                            _widgetRecordProvider: t,
                                            url_dataFetchStatus: nr.Model.calculateDataFetchStatus(i.variables.getLanguagesByEnabledAggr.dataFetchStatusAttr)
                                        }), H.createElement(ee, {
                                            extendedProperties: {
                                                style: "overflow: visible; text-overflow: unset;"
                                            },
                                            gridProperties: {
                                                classes: "ThemeGrid_MarginGutter"
                                            },
                                            value: i.variables.getLanguagesByEnabledAggr.listOut.getCurrent(g.iterationContext).languagesAttr.nameAttr,
                                            _idProps: {
                                                service: l,
                                                uuid: "15"
                                            },
                                            _widgetRecordProvider: t,
                                            value_dataFetchStatus: nr.Model.calculateDataFetchStatus(i.variables.getLanguagesByEnabledAggr.dataFetchStatusAttr)
                                        }))]
                                    }, s, e, "1")
                                },
                                _dependencies: [d(i.variables.getLanguagesByEnabledAggr.dataFetchStatusAttr)]
                            }))]
                        }, function() {
                            return []
                        })), H.createElement(m, {
                            align: 0,
                            animate: !0,
                            visible: _.getisCFDCommissionsFormEndabledFF(),
                            _idProps: {
                                service: e,
                                name: "CFDBanner"
                            },
                            _widgetRecordProvider: t
                        }, H.createElement(Sr, {
                            getOwnerSpan: a(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: a(function(l) {
                                    c.handleError(l)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                name: "EnableCFDCommissionBanner",
                                alias: "4"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })), H.createElement(m, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "display: flex; gap: 16px;"
                            },
                            style: "referral-links-reports-whatsapp",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "DashboarSection"
                            },
                            _widgetRecordProvider: t
                        }, H.createElement(m, {
                            align: 0,
                            animate: !1,
                            gridProperties: {
                                classes: "OSInline",
                                width: "100%"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "19"
                            },
                            _widgetRecordProvider: t
                        }, H.createElement(Rr, {
                            getOwnerSpan: a(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: a(function(l) {
                                    c.handleError(l)
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
                        }))), H.createElement(m, {
                            align: 0,
                            animate: !1,
                            gridProperties: {
                                classes: "OSInline",
                                width: "100%"
                            },
                            style: "complete-profile-commission-banner",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "LesgoBanner"
                            },
                            _widgetRecordProvider: t
                        }, H.createElement(m, {
                            align: 0,
                            animate: !1,
                            gridProperties: {
                                classes: "OSInline",
                                width: "100%"
                            },
                            visible: !1,
                            _idProps: {
                                service: e,
                                uuid: "22"
                            },
                            _widgetRecordProvider: t
                        }, H.createElement(Dr, {
                            getOwnerSpan: a(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: a(function(l) {
                                    c.handleError(l)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "23",
                                alias: "6"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })), H.createElement(ln, {
                            getOwnerSpan: a(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: a(function(l) {
                                    c.handleError(l)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "24",
                                alias: "7"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })), H.createElement(m, {
                            align: 0,
                            animate: !0,
                            visible: _.getisEventSectionEnabledFF(),
                            _idProps: {
                                service: e,
                                name: "EventSection"
                            },
                            _widgetRecordProvider: t
                        }, H.createElement(Hn, {
                            getOwnerSpan: a(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: a(function(l) {
                                    c.handleError(l)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "26",
                                alias: "8"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })), H.createElement(Nn, {
                            getOwnerSpan: a(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: a(function(l) {
                                    c.handleError(l)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "27",
                                alias: "9"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        }), H.createElement(m, {
                            align: 0,
                            animate: !1,
                            style: "affiliate-programme-block",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "AffiliateProgramme"
                            },
                            _widgetRecordProvider: t
                        }, H.createElement(Jn, {
                            getOwnerSpan: a(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: a(function(l) {
                                    c.handleError(l)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "29",
                                alias: "10"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })), H.createElement(Zn, {
                            getOwnerSpan: a(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: a(function(l) {
                                    c.handleError(l)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "30",
                                alias: "11"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })), n(_.getisCFDCommissionsFormEndabledFF(), !0, this, function() {
                            return [H.createElement(ci, {
                                getOwnerSpan: a(function() {
                                    return u.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: a(function() {
                                    return u.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {},
                                events: {
                                    _handleError: a(function(l) {
                                        c.handleError(l)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: r
                                },
                                _idProps: {
                                    service: e,
                                    name: "CFDCommissionsModal",
                                    alias: "12"
                                },
                                _widgetRecordProvider: t,
                                _dependencies: []
                            })]
                        }, function() {
                            return []
                        })]
                    })
                },
                _dependencies: [d(_.getisEventSectionEnabledFF()), d(_.getisCFDCommissionsFormEndabledFF()), d(i.variables.getLanguagesByEnabledAggr.dataFetchStatusAttr), d(i.variables.getLanguagesByEnabledAggr.listOut), d(_.getLanguage()), d(_.getisLanguageSwitcherEnabledFF()), d(_.getIsNotAPartner())]
            }))
        }
    };
a(Le, "View");
var di = Le,
    Qf = di;
export {
    Qf as
    default
};