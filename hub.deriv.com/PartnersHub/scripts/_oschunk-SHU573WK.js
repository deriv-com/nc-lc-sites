import {
    a as Qe,
    b as Xe,
    c as et
} from "./_oschunk-C2ZBVOQM.js";
import {
    a as qe,
    b as Ze,
    c as Ye
} from "./_oschunk-NDFBNANG.js";
import "./_oschunk-KMIPHFQV.js";
import "./_oschunk-G4AEHOYU.js";
import {
    a as je
} from "./_oschunk-WGHHTA53.js";
import "./_oschunk-U6JJ2AP7.js";
import "./_oschunk-4GL2OV66.js";
import "./_oschunk-B5ZMBNKS.js";
import {
    a as tr
} from "./_oschunk-JXOV2XVE.js";
import "./_oschunk-WOBRVJRS.js";
import {
    a as er
} from "./_oschunk-V5K7AK4R.js";
import {
    a as Je
} from "./_oschunk-D46IXCWP.js";
import "./_oschunk-EP2LOIZ7.js";
import {
    a as Re
} from "./_oschunk-F3FP5HB2.js";
import "./_oschunk-KURWLJI2.js";
import "./_oschunk-ROAU47YI.js";
import "./_oschunk-2MST7FR4.js";
import {
    a as W
} from "./_oschunk-ZL2HTVZN.js";
import "./_oschunk-CLRE6NFZ.js";
import "./_oschunk-P2MIYWR2.js";
import "./_oschunk-6AFKWBZG.js";
import "./_oschunk-N6CDNE7S.js";
import "./_oschunk-WBJVRGUU.js";
import "./_oschunk-MKEU6QPR.js";
import "./_oschunk-DIXRVE4J.js";
import {
    a as ie
} from "./_oschunk-JNIYO5MF.js";
import "./_oschunk-I6UUKQBK.js";
import "./_oschunk-C75U7DRJ.js";
import "./_oschunk-JHXZLUP2.js";
import "./_oschunk-F2QOJGMT.js";
import "./_oschunk-IYRDNBIZ.js";
import "./_oschunk-O4ORPF6H.js";
import "./_oschunk-6BFNTJQ7.js";
import {
    a as ae
} from "./_oschunk-VDU6C3OQ.js";
import "./_oschunk-TWAMG3Q4.js";
import {
    a as Yt
} from "./_oschunk-LDY7XNSJ.js";
import {
    a as k,
    d as m,
    e as Xt,
    f as I,
    g as jt,
    n as Ce,
    p as qt,
    q as Oe,
    s as Zt,
    u as P
} from "./_oschunk-LWMGEL7F.js";
import "./_oschunk-KWCHY67Z.js";
import {
    a as V
} from "./_oschunk-4GXKK3IG.js";
import {
    a as $,
    g as H,
    i as A
} from "./_oschunk-WZHUAZJP.js";
import "./_oschunk-ZO3X5EQS.js";
import "./_oschunk-QPRDDNSX.js";
import "./_oschunk-5VU7DWFQ.js";
import "./_oschunk-RILYVCVH.js";
import {
    a as E,
    o as Qt,
    q as y
} from "./_oschunk-BDI2RWOA.js";
import "./_oschunk-P3RPGEI5.js";
import {
    Ac as D,
    Rd as Gt,
    Vf as Jt,
    Ye as Kt,
    a as _e,
    kd as ne,
    me as K,
    rd as Ge,
    sd as Ke
} from "./_oschunk-7WCOCYFU.js";
import {
    ia as v
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as n,
    h as B
} from "./_oschunk-QHO7QY6K.js";
var p = B($());
var oe = B($());
var fe = v,
    rt = class rt extends fe.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(fe.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
n(rt, "VariablesRecord");
var we = rt;
we.init();
var nt = class nt extends fe.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
n(nt, "WidgetsRecord");
var tt = nt,
    se = class se extends fe.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return we
        }
        static getWidgetsRecordConstructor() {
            return tt
        }
        static get hasValidationWidgets() {
            return se._hasValidationWidgetsValue === void 0 && (se._hasValidationWidgetsValue = void 0), se._hasValidationWidgetsValue
        }
        setInputs(r) {}
    };
n(se, "Model");
var He = se;
He._hasValidationWidgetsValue = void 0;
var rr = new fe.Model.ModelFactory(He);
var nr = {};
var Te = v; {
    let r = class r extends Te.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t, nr);
            var l = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
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
                return Te.Logger.startActiveSpan("OnClickOpenLiveChat", function(a) {
                    a && (a.setAttribute("code.function", "OnClickOpenLiveChat"), a.setAttribute("outsystems.function.key", "d0a22af0-8000-4d69-b126-ec970a91f7bc"), a.setAttribute("outsystems.function.owner.name", "PartnersHub"), a.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnClickOpenLiveChat"), e = t.callContext(e), y.showLiveChat$Action(e), y.rudderstackTrackEvent$Action(function() {
                            var o = new D;
                            return o.actionAttr = "click_cta", o.cta_nameAttr = "Open livechat", o.cta_placementAttr = "header", o
                        }(), "ce_partnershub_form", e)
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__onClickOpenLiveChat$Action
        }
        set _onClickOpenLiveChat$Action(e) {
            this.__onClickOpenLiveChat$Action = e
        }
        onClickOpenLiveChat$Action(e) {
            var i = this.controller;
            return Te.Logger.startActiveSpan("OnClickOpenLiveChat__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnClickOpenLiveChat"), t.setAttribute("outsystems.function.key", "d0a22af0-8000-4d69-b126-ec970a91f7bc"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onClickOpenLiveChat$Action, e)
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
            return y.defaultTimeout
        }
    };
    n(r, "ControllerInner");
    let g = r;
    ar = g
}
var ar, ir = new Te.Controller.ControllerFactory(ar, V);
var Jn = A.PlaceholderContent,
    Qn = A.IteratorPlaceholderContent,
    J = class J extends H.BaseWebBlock {
        static get displayName() {
            return "Home.NonPartnerBanner"
        }
        static getAttributes() {
            return {
                codeFunction: "NonPartnerBanner",
                functionKey: "a0760b61-ad2b-4dfd-b0f3-773c02dbdc4b",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Home.NonPartnerBanner.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [W]
        }
        get modelFactory() {
            return rr
        }
        get controllerFactory() {
            return ir
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                c = this.controller,
                e = this.idService,
                i = c.validationService,
                t = this.widgetsRecordProvider,
                l = c.callContext(),
                a = J.ifWidget,
                o = J.textWidget,
                d = J.asPrimitiveValue,
                S = J.getTranslation,
                u = this;
            return oe.createElement("div", this.getRootNodeProperties(), oe.createElement(m, {
                align: 0,
                animate: !1,
                style: "non-partner-banner",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, oe.createElement(W, {
                getOwnerSpan: n(function() {
                    return u.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: n(function() {
                    return u.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    SVGCode: `<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\r
  <circle cx="12" cy="12" r="11" fill="none" stroke="#FFA500" stroke-width="2"/>\r
  <circle cx="12" cy="7" r="1.5" fill="#FFA500"/>\r
  <rect x="10.5" y="10" width="3" height="8" fill="#FFA500"/>\r
</svg>`
                },
                events: {
                    _handleError: n(function(s) {
                        c.handleError(s)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: i
                },
                _idProps: {
                    service: e,
                    name: "icon",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                _dependencies: []
            }), oe.createElement(k, {
                extendedProperties: {
                    className: "non-partner-banner-text"
                },
                tag: "p",
                _idProps: {
                    service: e,
                    name: "description"
                },
                _widgetRecordProvider: t
            }, "To get started with Partner\u2019s account or gain full access to Partner\u2019s Hub, contact us via", oe.createElement(Oe, {
                enabled: !0,
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                onClick: n(function() {
                    var s = l.clone();
                    c.onClickOpenLiveChat$Action(c.callContext(s))
                }, "onClick"),
                style: "non-partner-banner-link",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "3"
                },
                _widgetRecordProvider: t
            }, "live chat"))))
        }
    };
n(J, "View");
var at = J,
    it = at;
var ce = B($());
var pe = v,
    ot = class ot extends pe.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(pe.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
n(ot, "VariablesRecord");
var De = ot;
De.init();
var lt = class lt extends pe.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
n(lt, "WidgetsRecord");
var st = lt,
    le = class le extends pe.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return De
        }
        static getWidgetsRecordConstructor() {
            return st
        }
        static get hasValidationWidgets() {
            return le._hasValidationWidgetsValue === void 0 && (le._hasValidationWidgetsValue = void 0), le._hasValidationWidgetsValue
        }
        setInputs(r) {}
    };
n(le, "Model");
var xe = le;
xe._hasValidationWidgetsValue = void 0;
var sr = new pe.Model.ModelFactory(xe);
var Fr = {
        "n+SIcoxXvEGEbzltir8yqg#Value.1524116574.1": "\u0627\u0641\u062A\u062D \u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645",
        "Hl99bwa7AEyH+Ko9HoiQiA#Value": "\u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0631\u0648\u0627\u0628\u0637 \u0627\u0644\u0625\u062D\u0627\u0644\u0629 \u0648\u0627\u0644\u062A\u0642\u0627\u0631\u064A\u0631",
        "yJlOkyJX3kaRZsiWWv3sjw#Value.1524116574.1": "\u0627\u0641\u062A\u062D \u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645"
    },
    Wr = {
        "n+SIcoxXvEGEbzltir8yqg#Value.1524116574.1": "Dashboard \xF6ffnen",
        "Hl99bwa7AEyH+Ko9HoiQiA#Value": "Zugriff auf Ihre Empfehlungslinks und Berichte",
        "yJlOkyJX3kaRZsiWWv3sjw#Value.1524116574.1": "Dashboard \xF6ffnen"
    },
    Nr = {
        "n+SIcoxXvEGEbzltir8yqg#Value.1524116574.1": "Abrir el panel",
        "Hl99bwa7AEyH+Ko9HoiQiA#Value": "Mis enlaces de referencia y reportes",
        "yJlOkyJX3kaRZsiWWv3sjw#Value.1524116574.1": "Abrir el panel"
    },
    Lr = {
        "n+SIcoxXvEGEbzltir8yqg#Value.1524116574.1": "Ouvrir le tableau de bord",
        "Hl99bwa7AEyH+Ko9HoiQiA#Value": "Acc\xE9der \xE0 vos liens de parrainage et rapports",
        "yJlOkyJX3kaRZsiWWv3sjw#Value.1524116574.1": "Ouvrir le tableau de bord"
    },
    Mr = {
        "n+SIcoxXvEGEbzltir8yqg#Value.1524116574.1": "Apri la dashboard",
        "Hl99bwa7AEyH+Ko9HoiQiA#Value": "I miei link di referral e report",
        "yJlOkyJX3kaRZsiWWv3sjw#Value.1524116574.1": "Apri la dashboard"
    },
    Br = {
        "n+SIcoxXvEGEbzltir8yqg#Value.1524116574.1": "Otw\xF3rz pulpit",
        "Hl99bwa7AEyH+Ko9HoiQiA#Value": "Moje linki polecaj\u0105ce i raporty",
        "yJlOkyJX3kaRZsiWWv3sjw#Value.1524116574.1": "Otw\xF3rz pulpit"
    },
    $r = {
        "n+SIcoxXvEGEbzltir8yqg#Value.1524116574.1": "Abrir o painel",
        "Hl99bwa7AEyH+Ko9HoiQiA#Value": "Os meus links de refer\xEAncia e relat\xF3rios",
        "yJlOkyJX3kaRZsiWWv3sjw#Value.1524116574.1": "Abrir o painel"
    },
    Ur = {
        "n+SIcoxXvEGEbzltir8yqg#Value.1524116574.1": "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043A\u0430\u0431\u0438\u043D\u0435\u0442",
        "Hl99bwa7AEyH+Ko9HoiQiA#Value": "\u0414\u043E\u0441\u0442\u0443\u043F \u043A \u0432\u0430\u0448\u0438\u043C \u0440\u0435\u0444\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u043C \u0441\u0441\u044B\u043B\u043A\u0430\u043C \u0438 \u043E\u0442\u0447\u0435\u0442\u0430\u043C",
        "yJlOkyJX3kaRZsiWWv3sjw#Value.1524116574.1": "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043A\u0430\u0431\u0438\u043D\u0435\u0442"
    },
    or = {
        "ar-001": {
            translations: Fr,
            isRTL: !0
        },
        "de-DE": {
            translations: Wr,
            isRTL: !1
        },
        "es-ES": {
            translations: Nr,
            isRTL: !1
        },
        "fr-FR": {
            translations: Lr,
            isRTL: !1
        },
        "it-IT": {
            translations: Mr,
            isRTL: !1
        },
        "pl-PL": {
            translations: Br,
            isRTL: !1
        },
        "pt-PT": {
            translations: $r,
            isRTL: !1
        },
        "ru-RU": {
            translations: Ur,
            isRTL: !1
        }
    };

function ct(g, r, c, e) {
    window.open(g.website_platform_url, "_blank")
}
n(ct, "default");
var M = v; {
    let r = class r extends M.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t, or);
            var l = this.controller;
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
                var i = this.model,
                    t = this.controller,
                    l = this.idService;
                return M.Logger.startActiveSpan("OpenDashboardOnClick", function(a) {
                    a && (a.setAttribute("code.function", "OpenDashboardOnClick"), a.setAttribute("outsystems.function.key", "cf326336-3df0-4481-b9aa-ac47aac55cbb"), a.setAttribute("outsystems.function.owner.name", "PartnersHub"), a.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OpenDashboardOnClick"), e = t.callContext(e), y.rudderstackTrackEvent$Action(function() {
                            var o = new D;
                            return o.actionAttr = "click_cta", o.cta_nameAttr = M.Injector.resolve(M.ServiceNames.TranslationsService).getMessage("yJlOkyJX3kaRZsiWWv3sjw#Value.1524116574.1", "Open dashboard"), o.cta_placementAttr = "referral link report section", o
                        }(), "ce_partnershub_form", e), M.Logger.startActiveSpan("JavaScript1", function(o) {
                            o && (o.setAttribute("code.function", "JavaScript1"), o.setAttribute("outsystems.function.key", "147a346a-c439-4ff9-81b0-b20c19873509"), o.setAttribute("outsystems.function.owner.name", "PartnersHub"), o.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(ct, "JavaScript1", "OpenDashboardOnClick", {
                                    website_platform_url: M.DataConversion.JSNodeParamConverter.to(E.getWebsitePlatformUrl(), M.DataTypes.DataTypes.Text)
                                }, function(d) {}, {}, {})
                            } finally {
                                o && o.end()
                            }
                        }, 1)
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__openDashboardOnClick$Action
        }
        set _openDashboardOnClick$Action(e) {
            this.__openDashboardOnClick$Action = e
        }
        openDashboardOnClick$Action(e) {
            var i = this.controller;
            return M.Logger.startActiveSpan("OpenDashboardOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "OpenDashboardOnClick"), t.setAttribute("outsystems.function.key", "cf326336-3df0-4481-b9aa-ac47aac55cbb"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._openDashboardOnClick$Action, e)
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
            return y.defaultTimeout
        }
    };
    n(r, "ControllerInner");
    let g = r;
    lr = g
}
var lr, cr = new M.Controller.ControllerFactory(lr, V);
var dr = v,
    ha = A.PlaceholderContent,
    pa = A.IteratorPlaceholderContent,
    j = class j extends H.BaseWebBlock {
        static get displayName() {
            return "Home.ReferralLinksReports_Temp_"
        }
        static getAttributes() {
            return {
                codeFunction: "ReferralLinksReports_Temp_",
                functionKey: "6e3a4573-f0de-4d26-a24f-1417aab923e4",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Home.ReferralLinksReports_Temp_.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [ae]
        }
        get modelFactory() {
            return sr
        }
        get controllerFactory() {
            return cr
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                c = this.controller,
                e = this.idService,
                i = c.validationService,
                t = this.widgetsRecordProvider,
                l = c.callContext(),
                a = j.ifWidget,
                o = j.textWidget,
                d = j.asPrimitiveValue,
                S = j.getTranslation,
                u = this;
            return ce.createElement("div", this.getRootNodeProperties(), ce.createElement(m, {
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
            }, ce.createElement(P, {
                extendedProperties: {
                    style: "font-size: 16px; font-weight: normal; padding: 0px 10px 0px 0px;"
                },
                text: [o(S("Hl99bwa7AEyH+Ko9HoiQiA#Value", "Access your referral links and reports"))],
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }), ce.createElement(m, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            }, ce.createElement(ae, {
                getOwnerSpan: n(function() {
                    return u.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: n(function() {
                    return u.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    title: dr.Injector.resolve(dr.ServiceNames.TranslationsService).getMessage("n+SIcoxXvEGEbzltir8yqg#Value.1524116574.1", "Open dashboard"),
                    class: "referral-links-reports__button",
                    borderRadius: "100px"
                },
                events: {
                    _handleError: n(function(s) {
                        c.handleError(s)
                    }, "_handleError"),
                    onClick$Action: n(function() {
                        var s = l.clone();
                        c.openDashboardOnClick$Action(c.callContext(s))
                    }, "onClick$Action")
                },
                _validationProps: {
                    validationService: i
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
n(j, "View");
var dt = j,
    ut = dt;
var h = B($());
var Ee = v,
    mt = class mt extends Ee.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(Ee.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
n(mt, "VariablesRecord");
var Ve = mt;
Ve.init();
var gt = class gt extends Ee.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
n(gt, "WidgetsRecord");
var vt = gt,
    de = class de extends Ee.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return Ve
        }
        static getWidgetsRecordConstructor() {
            return vt
        }
        static get hasValidationWidgets() {
            return de._hasValidationWidgetsValue === void 0 && (de._hasValidationWidgetsValue = void 0 || void 0), de._hasValidationWidgetsValue
        }
        setInputs(r) {}
    };
n(de, "Model");
var ke = de;
ke._hasValidationWidgetsValue = void 0;
var mr = new Ee.Model.ModelFactory(ke);
var zr = {
        "fmSAHAptP0KYtOXYomKxmA#Value": "\u062A\u0639\u0631\u0641 \u0639\u0644\u0649 \u0627\u0644\u0645\u0632\u064A\u062F",
        "Ku29M+DdTE2TpHrrNCpPLA#Value": "\u0627\u0631\u0628\u062D \u0628\u0646\u0627\u0621\u064B \u0639\u0644\u0649 \u0627\u062D\u062A\u0645\u0627\u0644\u064A\u0629 \u062F\u0641\u0639 \u0643\u0644 \u0639\u0642\u062F.",
        "hrkFunwzoECUPWB0IRcDKA#Value": "\u062A\u0639\u0631\u0641 \u0623\u0643\u062B\u0631",
        "j4vWVltZ2U+0ByDizgvLaA#Value": "\u0627\u0631\u0628\u062D \u0645\u0627 \u064A\u0635\u0644 \u0625\u0644\u0649 40% \u0645\u0646 \u0639\u0645\u0648\u0644\u0627\u062A \u062A\u062F\u0627\u0648\u0644 \u0627\u0644\u0639\u0645\u0644\u0627\u0621.",
        "WWVqgcxwK02Qs6tbKp5Mmg#Value": "\u062A\u0639\u0631\u0641 \u0639\u0644\u0649 \u0627\u0644\u0645\u0632\u064A\u062F",
        "rEEPHXMxSkqto6iJFQRDow#Value": "\u0627\u0631\u0628\u062D \u0645\u0639 \u062E\u0637\u0629 \u0627\u0644\u0639\u0645\u0648\u0644\u0629 \u0627\u0644\u0645\u0633\u062A\u0646\u062F\u0629 \u0625\u0644\u0649 \u0627\u0644\u0623\u062F\u0648\u0627\u062A \u0644\u062F\u064A\u0646\u0627.",
        "IOkWIqJMPUO_Lk53vxAtSw#Value": "\u064A\u0645\u0643\u0646\u0643 \u0643\u0633\u0628 \u0639\u0645\u0648\u0644\u0627\u062A \u0645\u0646"
    },
    Gr = {
        "fmSAHAptP0KYtOXYomKxmA#Value": "Mehr erfahren",
        "Ku29M+DdTE2TpHrrNCpPLA#Value": "Verdienen Sie basierend auf der Auszahlungswahrscheinlichkeit jedes Vertrags.",
        "hrkFunwzoECUPWB0IRcDKA#Value": "Mehr erfahren",
        "j4vWVltZ2U+0ByDizgvLaA#Value": "Verdienen Sie bis zu 40 % Provisionen aus den Handelsgesch\xE4ften Ihrer Kunden.",
        "WWVqgcxwK02Qs6tbKp5Mmg#Value": "Mehr erfahren",
        "rEEPHXMxSkqto6iJFQRDow#Value": "Verdienen Sie mit unserem instrumentenbasierten Provisionsplan.",
        "IOkWIqJMPUO_Lk53vxAtSw#Value": "Sie k\xF6nnen Provisionen von verdienen"
    },
    Kr = {
        "fmSAHAptP0KYtOXYomKxmA#Value": "Aprende m\xE1s",
        "Ku29M+DdTE2TpHrrNCpPLA#Value": "Gana seg\xFAn la probabilidad de pago de cada contrato.",
        "hrkFunwzoECUPWB0IRcDKA#Value": "Aprende m\xE1s",
        "j4vWVltZ2U+0ByDizgvLaA#Value": "Gane hasta un 40% de comisiones por las operaciones de los clientes.",
        "WWVqgcxwK02Qs6tbKp5Mmg#Value": "Aprende m\xE1s",
        "rEEPHXMxSkqto6iJFQRDow#Value": "Gana con nuestro plan de comisiones basado en instrumentos.",
        "IOkWIqJMPUO_Lk53vxAtSw#Value": "Puedes ganar comisiones de"
    },
    Jr = {
        "fmSAHAptP0KYtOXYomKxmA#Value": "En savoir plus",
        "Ku29M+DdTE2TpHrrNCpPLA#Value": "Gagnez en fonction de la probabilit\xE9 de paiement de chaque contrat.",
        "hrkFunwzoECUPWB0IRcDKA#Value": "En savoir plus",
        "j4vWVltZ2U+0ByDizgvLaA#Value": "Gagnez jusqu'\xE0 40 % de commissions sur les transactions des clients.",
        "WWVqgcxwK02Qs6tbKp5Mmg#Value": "En savoir plus",
        "rEEPHXMxSkqto6iJFQRDow#Value": "Gagnez avec notre plan de commission bas\xE9 sur les instruments.",
        "IOkWIqJMPUO_Lk53vxAtSw#Value": "Vous pouvez gagner des commissions de"
    },
    Qr = {
        "fmSAHAptP0KYtOXYomKxmA#Value": "Scopri di pi\xF9",
        "Ku29M+DdTE2TpHrrNCpPLA#Value": "Guadagna in base alla probabilit\xE0 di pagamento di ciascun contratto.",
        "hrkFunwzoECUPWB0IRcDKA#Value": "Scopri di pi\xF9",
        "j4vWVltZ2U+0ByDizgvLaA#Value": "Guadagna fino al 40% di commissioni dalle operazioni dei clienti.",
        "WWVqgcxwK02Qs6tbKp5Mmg#Value": "Scopri di pi\xF9",
        "rEEPHXMxSkqto6iJFQRDow#Value": "Guadagna con il nostro piano commissionale basato sugli strumenti.",
        "IOkWIqJMPUO_Lk53vxAtSw#Value": "Puoi guadagnare commissioni da"
    },
    Xr = {
        "fmSAHAptP0KYtOXYomKxmA#Value": "Dowiedz si\u0119 wi\u0119cej",
        "Ku29M+DdTE2TpHrrNCpPLA#Value": "Zarabiaj w oparciu o prawdopodobie\u0144stwo wyp\u0142aty ka\u017Cdego kontraktu.",
        "hrkFunwzoECUPWB0IRcDKA#Value": "Dowiedz si\u0119 wi\u0119cej",
        "j4vWVltZ2U+0ByDizgvLaA#Value": "Zarabiaj do 40% prowizji od transakcji klient\xF3w.",
        "WWVqgcxwK02Qs6tbKp5Mmg#Value": "Dowiedz si\u0119 wi\u0119cej",
        "rEEPHXMxSkqto6iJFQRDow#Value": "Zarabiaj z naszym planem prowizyjnym opartym na instrumentach.",
        "IOkWIqJMPUO_Lk53vxAtSw#Value": "Mo\u017Cesz zarabia\u0107 prowizje z"
    },
    jr = {
        "fmSAHAptP0KYtOXYomKxmA#Value": "Saiba mais",
        "Ku29M+DdTE2TpHrrNCpPLA#Value": "Ganhe com base na probabilidade de pagamento de cada contrato.",
        "hrkFunwzoECUPWB0IRcDKA#Value": "Saiba mais",
        "j4vWVltZ2U+0ByDizgvLaA#Value": "Ganhe at\xE9 40% de comiss\xF5es nas opera\xE7\xF5es dos clientes.",
        "WWVqgcxwK02Qs6tbKp5Mmg#Value": "Saiba mais",
        "rEEPHXMxSkqto6iJFQRDow#Value": "Ganhe com o nosso plano de comiss\xF5es baseado em instrumentos.",
        "IOkWIqJMPUO_Lk53vxAtSw#Value": "Voc\xEA pode ganhar comiss\xF5es de"
    },
    qr = {
        "fmSAHAptP0KYtOXYomKxmA#Value": "\u0423\u0437\u043D\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435",
        "Ku29M+DdTE2TpHrrNCpPLA#Value": "\u0417\u0430\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0439\u0442\u0435 \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0438 \u043E\u0442 \u0432\u0435\u0440\u043E\u044F\u0442\u043D\u043E\u0441\u0442\u0438 \u0432\u044B\u043F\u043B\u0430\u0442\u044B \u043F\u043E \u043A\u0430\u0436\u0434\u043E\u043C\u0443 \u043A\u043E\u043D\u0442\u0440\u0430\u043A\u0442\u0443.",
        "hrkFunwzoECUPWB0IRcDKA#Value": "\u0423\u0437\u043D\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435",
        "j4vWVltZ2U+0ByDizgvLaA#Value": "\u0417\u0430\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0439\u0442\u0435 \u0434\u043E 40% \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u0439 \u043E\u0442 \u0441\u0434\u0435\u043B\u043E\u043A \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432.",
        "WWVqgcxwK02Qs6tbKp5Mmg#Value": "\u0423\u0437\u043D\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435",
        "rEEPHXMxSkqto6iJFQRDow#Value": "\u0417\u0430\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0439\u0442\u0435 \u0441 \u043D\u0430\u0448\u0438\u043C \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u043E\u043D\u043D\u044B\u043C \u043F\u043B\u0430\u043D\u043E\u043C, \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u043D\u044B\u043C \u043D\u0430 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0430\u0445.",
        "IOkWIqJMPUO_Lk53vxAtSw#Value": "\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0437\u0430\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0442\u044C \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u043E\u043D\u043D\u044B\u0435 \u043E\u0442"
    },
    gr = {
        "ar-001": {
            translations: zr,
            isRTL: !0
        },
        "de-DE": {
            translations: Gr,
            isRTL: !1
        },
        "es-ES": {
            translations: Kr,
            isRTL: !1
        },
        "fr-FR": {
            translations: Jr,
            isRTL: !1
        },
        "it-IT": {
            translations: Qr,
            isRTL: !1
        },
        "pl-PL": {
            translations: Xr,
            isRTL: !1
        },
        "pt-PT": {
            translations: jr,
            isRTL: !1
        },
        "ru-RU": {
            translations: qr,
            isRTL: !1
        }
    };
var f = v; {
    let r = class r extends f.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t, gr);
            var l = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get getBDEnableCFDScreens$ServerAction() {
            return this.hasOwnProperty("_getBDEnableCFDScreens$ServerAction") || (this._getBDEnableCFDScreens$ServerAction = function(e) {
                var i = this.controller;
                return f.Logger.startActiveSpan("GetBDEnableCFDScreens", function(t) {
                    return t && (t.setAttribute("code.function", "GetBDEnableCFDScreens"), t.setAttribute("outsystems.function.key", "7eca81a1-5ec3-449c-b6ab-0bca5f9ecfbf"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), f.Flow.tryFinally(function() {
                        return i.callServerAction("GetBDEnableCFDScreens", "screenservices/PartnersHub/Home/CommissionPlans_Temp_/ActionGetBDEnableCFDScreens", "LjNg3yE0AdZRJluRGkzpGw", {}, i.callContext(e), void 0, void 0, !0).then(function(l) {
                            var a = new(i.constructor.getVariableGroupType("PartnersHub.Home.CommissionPlans_Temp_$ActionGetBDEnableCFDScreens"));
                            return a.enableCFDScreensOut = f.DataConversion.ServerDataConverter.from(l.EnableCFDScreens, f.DataTypes.DataTypes.Boolean), a
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
                var i = this.model,
                    t = this.controller,
                    l = this.idService;
                return f.Logger.startActiveSpan("OnClickToTurnoverPlan", function(a) {
                    a && (a.setAttribute("code.function", "OnClickToTurnoverPlan"), a.setAttribute("outsystems.function.key", "57fb401e-36c4-4e08-a29c-be8dbd1c9419"), a.setAttribute("outsystems.function.owner.name", "PartnersHub"), a.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("OnClickToTurnoverPlan"), e = t.callContext(e), y.rudderstackTrackEvent$Action(function() {
                            var o = new D;
                            return o.actionAttr = "click_cta", o.cta_nameAttr = "Learn more", o.cta_placementAttr = "commission plans turnover section", o.timestampAttr = f.BuiltinFunctions.dateTimeToText(f.BuiltinFunctions.currDateTime()), o.show_user_idAttr = !1, o
                        }(), "ce_partnershub_form", e), f.Navigation.navigateTo(f.Navigation.generateScreenURL("PartnersHub", "Turnover", {}), f.Transitions.createTransition(f.Transitions.TransitionAnimation.None), e, !0)
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__onClickToTurnoverPlan$Action
        }
        set _onClickToTurnoverPlan$Action(e) {
            this.__onClickToTurnoverPlan$Action = e
        }
        get _onClickToCFDs$Action() {
            return this.hasOwnProperty("__onClickToCFDs$Action") || (this.__onClickToCFDs$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    l = this.idService;
                return f.Logger.startActiveSpan("OnClickToCFDs", function(a) {
                    return a && (a.setAttribute("code.function", "OnClickToCFDs"), a.setAttribute("outsystems.function.key", "59f039cc-eec2-4cf6-a669-07d1e80b0dd9"), a.setAttribute("outsystems.function.owner.name", "PartnersHub"), a.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), f.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnClickToCFDs"), e = t.callContext(e);
                        var o = new f.DataTypes.VariableHolder;
                        return f.Flow.executeAsyncFlow(function() {
                            return y.rudderstackTrackEvent$Action(function() {
                                var d = new D;
                                return d.actionAttr = "click_cta", d.cta_nameAttr = "Learn more", d.cta_placementAttr = "commission plans cfds section", d.timestampAttr = f.BuiltinFunctions.dateTimeToText(f.BuiltinFunctions.currDateTime()), d.show_user_idAttr = !1, d
                            }(), "ce_partnershub_form", e), i.flush(), t.getBDEnableCFDScreens$ServerAction(e).then(function(d) {
                                o.value = d
                            }).then(function() {
                                if (o.value.enableCFDScreensOut) return f.Flow.returnAsync(f.Navigation.navigateTo(f.Navigation.generateScreenURL("PartnersHub", "CFDs", {}), f.Transitions.createTransition(f.Transitions.TransitionAnimation.None), e, !0));
                                y.redirectToExternalNewTab$Action("https://docs.deriv.com/partners/ib-cfds-commissions-table.pdf", e)
                            })
                        })
                    }, function() {
                        a && a.end()
                    })
                }, 1)
            }), this.__onClickToCFDs$Action
        }
        set _onClickToCFDs$Action(e) {
            this.__onClickToCFDs$Action = e
        }
        get _onClickToRevShare$Action() {
            return this.hasOwnProperty("__onClickToRevShare$Action") || (this.__onClickToRevShare$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    l = this.idService;
                return f.Logger.startActiveSpan("OnClickToRevShare", function(a) {
                    a && (a.setAttribute("code.function", "OnClickToRevShare"), a.setAttribute("outsystems.function.key", "694bcb0b-945e-486a-bcf0-267063a408cd"), a.setAttribute("outsystems.function.owner.name", "PartnersHub"), a.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("OnClickToRevShare"), e = t.callContext(e), y.rudderstackTrackEvent$Action(function() {
                            var o = new D;
                            return o.actionAttr = "click_cta", o.cta_nameAttr = "Learn more", o.cta_placementAttr = "commission plans revshare section", o.timestampAttr = f.BuiltinFunctions.dateTimeToText(f.BuiltinFunctions.currDateTime()), o.show_user_idAttr = !1, o
                        }(), "ce_partnershub_form", e), f.Navigation.navigateTo(f.Navigation.generateScreenURL("PartnersHub", "RevShare", {}), f.Transitions.createTransition(f.Transitions.TransitionAnimation.None), e, !0)
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__onClickToRevShare$Action
        }
        set _onClickToRevShare$Action(e) {
            this.__onClickToRevShare$Action = e
        }
        onClickToTurnoverPlan$Action(e) {
            var i = this.controller;
            return f.Logger.startActiveSpan("OnClickToTurnoverPlan__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnClickToTurnoverPlan"), t.setAttribute("outsystems.function.key", "57fb401e-36c4-4e08-a29c-be8dbd1c9419"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onClickToTurnoverPlan$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onClickToCFDs$Action(e) {
            var i = this.controller;
            return f.Logger.startActiveSpan("OnClickToCFDs__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnClickToCFDs"), t.setAttribute("outsystems.function.key", "59f039cc-eec2-4cf6-a669-07d1e80b0dd9"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), f.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._onClickToCFDs$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onClickToRevShare$Action(e) {
            var i = this.controller;
            return f.Logger.startActiveSpan("OnClickToRevShare__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnClickToRevShare"), t.setAttribute("outsystems.function.key", "694bcb0b-945e-486a-bcf0-267063a408cd"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onClickToRevShare$Action, e)
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
            return y.defaultTimeout
        }
    };
    n(r, "ControllerInner");
    let g = r;
    _t = g, _t.registerVariableGroupType("PartnersHub.Home.CommissionPlans_Temp_$ActionGetBDEnableCFDScreens", [{
        name: "EnableCFDScreens",
        attrName: "enableCFDScreensOut",
        mandatory: !1,
        dataType: f.DataTypes.DataTypes.Boolean,
        defaultValue: n(function() {
            return !1
        }, "defaultValue")
    }])
}
var _t, _r = new f.Controller.ControllerFactory(_t, V);
var Zr = A.PlaceholderContent,
    Ua = A.IteratorPlaceholderContent,
    q = class q extends H.BaseWebBlock {
        static get displayName() {
            return "Home.CommissionPlans_Temp_"
        }
        static getAttributes() {
            return {
                codeFunction: "CommissionPlans_Temp_",
                functionKey: "5fa3ec0e-e03b-4ce3-90a7-e6d76785291b",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Home.CommissionPlans_Temp_.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [je, qe]
        }
        get modelFactory() {
            return mr
        }
        get controllerFactory() {
            return _r
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                c = this.controller,
                e = this.idService,
                i = c.validationService,
                t = this.widgetsRecordProvider,
                l = c.callContext(),
                a = q.ifWidget,
                o = q.textWidget,
                d = q.asPrimitiveValue,
                S = q.getTranslation,
                u = this;
            return h.createElement("div", this.getRootNodeProperties(), a(!0, !1, this, function() {
                return [h.createElement(m, {
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
                }, h.createElement(m, {
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
                }, h.createElement(m, {
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
                }, h.createElement(k, {
                    tag: "h5",
                    _idProps: {
                        service: e,
                        uuid: "3"
                    },
                    _widgetRecordProvider: t
                }, h.createElement(P, {
                    extendedProperties: {
                        OSTagName: "h5"
                    },
                    style: "container-title",
                    text: [o(S("IOkWIqJMPUO_Lk53vxAtSw#Value", "You can earn commissions from"))],
                    _idProps: {
                        service: e,
                        name: "Youcanearncommissionsfrom"
                    },
                    _widgetRecordProvider: t
                })), h.createElement(m, {
                    align: 0,
                    animate: !1,
                    style: "cfd-container",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "5"
                    },
                    _widgetRecordProvider: t
                }, h.createElement(k, {
                    extendedProperties: {
                        value: "CFDs"
                    },
                    tag: "h6",
                    _idProps: {
                        service: e,
                        uuid: "6"
                    },
                    _widgetRecordProvider: t
                }, h.createElement(P, {
                    style: "section-subtitle",
                    text: ["CFDs trading"],
                    _idProps: {
                        service: e,
                        uuid: "7"
                    },
                    _widgetRecordProvider: t
                })), h.createElement(qt, {
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    _idProps: {
                        service: e,
                        uuid: "8"
                    },
                    _widgetRecordProvider: t
                }, h.createElement(P, {
                    style: "description",
                    text: [o(S("rEEPHXMxSkqto6iJFQRDow#Value", "Earn with our instrument-based commission plan."))],
                    _idProps: {
                        service: e,
                        uuid: "9"
                    },
                    _widgetRecordProvider: t
                }), h.createElement(k, {
                    extendedEvents: {
                        onClick: n(function() {
                            return Promise.resolve().then(function() {
                                var s = l.clone();
                                return c.onClickToCFDs$Action(c.callContext(s))
                            })
                        }, "onClick")
                    },
                    tag: "span",
                    _idProps: {
                        service: e,
                        uuid: "10"
                    },
                    _widgetRecordProvider: t
                }, h.createElement(P, {
                    extendedProperties: {
                        style: "color: #222; cursor: pointer; font-weight: bold; margin-left: 4px; text-decoration: underline;"
                    },
                    style: "learn-more",
                    text: [o(S("WWVqgcxwK02Qs6tbKp5Mmg#Value", "Learn more"))],
                    _idProps: {
                        service: e,
                        uuid: "11"
                    },
                    _widgetRecordProvider: t
                })))), h.createElement(je, {
                    getOwnerSpan: n(function() {
                        return u.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: n(function() {
                        return u.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        Space: _e.space.small
                    },
                    events: {
                        _handleError: n(function(s) {
                            c.handleError(s)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: i
                    },
                    _idProps: {
                        service: e,
                        uuid: "12",
                        alias: "1"
                    },
                    _widgetRecordProvider: t,
                    _dependencies: []
                }), h.createElement(m, {
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
                }, h.createElement(k, {
                    tag: "h6",
                    _idProps: {
                        service: e,
                        uuid: "14"
                    },
                    _widgetRecordProvider: t
                }, h.createElement(P, {
                    style: "section-subtitle",
                    text: ["Options trading"],
                    _idProps: {
                        service: e,
                        uuid: "15"
                    },
                    _widgetRecordProvider: t
                })), h.createElement(qe, {
                    getOwnerSpan: n(function() {
                        return u.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: n(function() {
                        return u.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        ItemsPerSlide: r.getCachedValue(e.getId("E2_F7Aw440WyAcZeOeK9Kw.ItemsPerSlide"), function() {
                            return function() {
                                var s = new Jt;
                                return s.desktopAttr = 2, s
                            }()
                        }),
                        Navigation: _e.carouselNavigation.dots,
                        OptionalConfigs: r.getCachedValue(e.getId("E2_F7Aw440WyAcZeOeK9Kw.OptionalConfigs"), function() {
                            return function() {
                                var s = new Gt;
                                return s.autoPlayAttr = !1, s.loopAttr = !1, s.itemsGapAttr = "8px", s
                            }()
                        })
                    },
                    events: {
                        _handleError: n(function(s) {
                            c.handleError(s)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: i
                    },
                    _idProps: {
                        service: e,
                        uuid: "16",
                        alias: "2"
                    },
                    _widgetRecordProvider: t,
                    placeholders: {
                        carouselItems: new Zr(function() {
                            return [h.createElement(m, {
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
                            }, h.createElement(P, {
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
                            }), h.createElement(m, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "19"
                                },
                                _widgetRecordProvider: t
                            }, h.createElement(k, {
                                extendedProperties: {
                                    className: "ph-options-trading-description"
                                },
                                tag: "span",
                                _idProps: {
                                    service: e,
                                    uuid: "20"
                                },
                                _widgetRecordProvider: t
                            }, h.createElement(P, {
                                style: "description",
                                text: [o(S("j4vWVltZ2U+0ByDizgvLaA#Value", "Earn up to 40% commissions from client trades. "))],
                                _idProps: {
                                    service: e,
                                    uuid: "21"
                                },
                                _widgetRecordProvider: t
                            }), h.createElement(k, {
                                extendedEvents: {
                                    onClick: n(function() {
                                        var s = l.clone();
                                        c.onClickToRevShare$Action(c.callContext(s))
                                    }, "onClick")
                                },
                                tag: "span",
                                _idProps: {
                                    service: e,
                                    uuid: "22"
                                },
                                _widgetRecordProvider: t
                            }, h.createElement(P, {
                                style: "learn-more",
                                text: [o(S("hrkFunwzoECUPWB0IRcDKA#Value", "Learn more"))],
                                _idProps: {
                                    service: e,
                                    uuid: "23"
                                },
                                _widgetRecordProvider: t
                            }))))), h.createElement(m, {
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
                            }, h.createElement(P, {
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
                            }), h.createElement(m, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "26"
                                },
                                _widgetRecordProvider: t
                            }, h.createElement(k, {
                                extendedProperties: {
                                    className: "ph-options-trading-description"
                                },
                                tag: "span",
                                _idProps: {
                                    service: e,
                                    uuid: "27"
                                },
                                _widgetRecordProvider: t
                            }, h.createElement(P, {
                                style: "description",
                                text: [o(S("Ku29M+DdTE2TpHrrNCpPLA#Value", "Earn based on each contract's payout probability. "))],
                                _idProps: {
                                    service: e,
                                    uuid: "28"
                                },
                                _widgetRecordProvider: t
                            }), h.createElement(k, {
                                extendedEvents: {
                                    onClick: n(function() {
                                        var s = l.clone();
                                        c.onClickToTurnoverPlan$Action(c.callContext(s))
                                    }, "onClick")
                                },
                                tag: "span",
                                _idProps: {
                                    service: e,
                                    uuid: "29"
                                },
                                _widgetRecordProvider: t
                            }, h.createElement(P, {
                                style: "learn-more",
                                text: [o(S("fmSAHAptP0KYtOXYomKxmA#Value", "Learn more"))],
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
n(q, "View");
var ft = q,
    ht = ft;
var F = B($());
var T = v,
    Et = class Et extends T.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Orientation", "orientationIn", "Orientation", !0, !1, T.DataTypes.DataTypes.Text, function() {
                return ne.orientation.horizontal
            }, !1), this.attr("_orientationInDataFetchStatus", "_orientationInDataFetchStatus", "_orientationInDataFetchStatus", !0, !1, T.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Height", "heightIn", "Height", !0, !1, T.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_heightInDataFetchStatus", "_heightInDataFetchStatus", "_heightInDataFetchStatus", !0, !1, T.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Width", "widthIn", "Width", !0, !1, T.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_widthInDataFetchStatus", "_widthInDataFetchStatus", "_widthInDataFetchStatus", !0, !1, T.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ScrollbarStyle", "scrollbarStyleIn", "ScrollbarStyle", !0, !1, T.DataTypes.DataTypes.Text, function() {
                return ne.scrollbarStyle.default
            }, !1), this.attr("_scrollbarStyleInDataFetchStatus", "_scrollbarStyleInDataFetchStatus", "_scrollbarStyleInDataFetchStatus", !0, !1, T.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, T.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, T.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(T.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
n(Et, "VariablesRecord");
var Ie = Et;
Ie.init();
var At = class At extends T.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
n(At, "WidgetsRecord");
var pt = At,
    yt = class yt extends T.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return Ie
        }
        static getWidgetsRecordConstructor() {
            return pt
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(r) {
            "Orientation" in r && (this.variables.orientationIn = r.Orientation, "_orientationInDataFetchStatus" in r && (this.variables._orientationInDataFetchStatus = r._orientationInDataFetchStatus)), "Height" in r && (this.variables.heightIn = r.Height, "_heightInDataFetchStatus" in r && (this.variables._heightInDataFetchStatus = r._heightInDataFetchStatus)), "Width" in r && (this.variables.widthIn = r.Width, "_widthInDataFetchStatus" in r && (this.variables._widthInDataFetchStatus = r._widthInDataFetchStatus)), "ScrollbarStyle" in r && (this.variables.scrollbarStyleIn = r.ScrollbarStyle, "_scrollbarStyleInDataFetchStatus" in r && (this.variables._scrollbarStyleInDataFetchStatus = r._scrollbarStyleInDataFetchStatus)), "ExtendedClass" in r && (this.variables.extendedClassIn = r.ExtendedClass, "_extendedClassInDataFetchStatus" in r && (this.variables._extendedClassInDataFetchStatus = r._extendedClassInDataFetchStatus))
        }
    };
n(yt, "Model");
var Fe = yt;
Fe._hasValidationWidgetsValue = void 0;
var hr = new T.Model.ModelFactory(Fe);
var C = v,
    Ae = class Ae extends C.Model.AggregateRecord {
        static attributesToDeclare() {
            return [].concat(C.Model.AggregateRecord.attributesToDeclare.call(this))
        }
        static get RecordListType() {
            return Kt
        }
        static fromStructure(r) {
            return new Ae(new Ae.RecordClass({
                RecordListType: C.DataTypes.ImmutableBase.getData(r)
            }))
        }
    };
n(Ae, "GetEventsAggrRec");
var ye = Ae;
ye.init();
var Ct = class Ct extends C.DataTypes.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, C.DataTypes.DataTypes.Boolean, function() {
            return !0
        }, !1), this.attr("MaxEvents", "maxEventsIn", "MaxEvents", !0, !1, C.DataTypes.DataTypes.Integer, function() {
            return 3
        }, !1), this.attr("_maxEventsInDataFetchStatus", "_maxEventsInDataFetchStatus", "_maxEventsInDataFetchStatus", !0, !1, C.DataTypes.DataTypes.Integer, function() {
            return 1
        }, !1), this.attr("EventType", "eventTypeIn", "EventType", !0, !1, C.DataTypes.DataTypes.LongInteger, function() {
            return C.DataTypes.LongInteger.defaultValue
        }, !1), this.attr("_eventTypeInDataFetchStatus", "_eventTypeInDataFetchStatus", "_eventTypeInDataFetchStatus", !0, !1, C.DataTypes.DataTypes.Integer, function() {
            return 1
        }, !1), this.attr("Languages", "languagesIn", "Languages", !0, !1, C.DataTypes.DataTypes.RecordList, function() {
            return C.DataTypes.ImmutableBase.getData(new C.DataTypes.IntegerList)
        }, !1, C.DataTypes.IntegerList), this.attr("_languagesInDataFetchStatus", "_languagesInDataFetchStatus", "_languagesInDataFetchStatus", !0, !1, C.DataTypes.DataTypes.Integer, function() {
            return 1
        }, !1), this.attr("GetEvents", "getEventsAggr", "GetEvents", !0, !0, C.DataTypes.DataTypes.Record, function() {
            return C.DataTypes.ImmutableBase.getData(new ye)
        }, !0, ye)].concat(C.DataTypes.GenericRecord.attributesToDeclare.call(this))
    }
};
n(Ct, "VariablesRecord");
var We = Ct;
We.init();
var Ot = class Ot extends C.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
n(Ot, "WidgetsRecord");
var St = Ot,
    ue = class ue extends C.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return We
        }
        static getWidgetsRecordConstructor() {
            return St
        }
        static get hasValidationWidgets() {
            return ue._hasValidationWidgetsValue === void 0 && (ue._hasValidationWidgetsValue = void 0 || void 0 || void 0), ue._hasValidationWidgetsValue
        }
        setInputs(r) {
            "MaxEvents" in r && (this.variables.maxEventsIn = r.MaxEvents, "_maxEventsInDataFetchStatus" in r && (this.variables._maxEventsInDataFetchStatus = r._maxEventsInDataFetchStatus)), "EventType" in r && (this.variables.eventTypeIn = r.EventType, "_eventTypeInDataFetchStatus" in r && (this.variables._eventTypeInDataFetchStatus = r._eventTypeInDataFetchStatus)), "Languages" in r && (this.variables.languagesIn = r.Languages, "_languagesInDataFetchStatus" in r && (this.variables._languagesInDataFetchStatus = r._languagesInDataFetchStatus))
        }
    };
n(ue, "Model");
var Ne = ue;
Ne._hasValidationWidgetsValue = void 0;
var Er = new C.Model.ModelFactory(Ne);
var z = v,
    Se = class Se extends z.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("NumberOfEvents", "numberOfEventsVar", "NumberOfEvents", !0, !1, z.DataTypes.DataTypes.Record, function() {
                return z.DataTypes.ImmutableBase.getData(new K)
            }, !1, K)].concat(z.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
        static fromStructure(r) {
            return new Se(new Se.RecordClass({
                numberOfEventsVar: z.DataTypes.ImmutableBase.getData(r)
            }))
        }
    };
n(Se, "VariablesRecord");
var Le = Se;
Le.init();
var wt = class wt extends z.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
n(wt, "WidgetsRecord");
var Rt = wt,
    ve = class ve extends z.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return Le
        }
        static getWidgetsRecordConstructor() {
            return Rt
        }
        static get hasValidationWidgets() {
            return ve._hasValidationWidgetsValue === void 0 && (ve._hasValidationWidgetsValue = void 0 || void 0 || void 0), ve._hasValidationWidgetsValue
        }
        setInputs(r) {}
    };
n(ve, "Model");
var Me = ve;
Me._hasValidationWidgetsValue = void 0;
var Ar = new z.Model.ModelFactory(Me);
var Yr = {
        "tN_UWmOs0kGS2m27_Rkz9Q#ValueExpression.-660735948.1": "\u0634\u0627\u0647\u062F \u0627\u0644\u0643\u0644",
        "JTUTHDwmmke37+oqdpbEoQ#Value": "\u064A\u0645\u0643\u0646\u0643 \u0643\u0633\u0628 \u0639\u0645\u0648\u0644\u0627\u062A \u0645\u0646"
    },
    en = {
        "tN_UWmOs0kGS2m27_Rkz9Q#ValueExpression.-660735948.1": "Alle anzeigen",
        "JTUTHDwmmke37+oqdpbEoQ#Value": "Sie k\xF6nnen Provisionen von verdienen"
    },
    tn = {
        "tN_UWmOs0kGS2m27_Rkz9Q#ValueExpression.-660735948.1": "Ver todo",
        "JTUTHDwmmke37+oqdpbEoQ#Value": "Puedes ganar comisiones de"
    },
    rn = {
        "tN_UWmOs0kGS2m27_Rkz9Q#ValueExpression.-660735948.1": "Voir tout",
        "JTUTHDwmmke37+oqdpbEoQ#Value": "Vous pouvez gagner des commissions de"
    },
    nn = {
        "tN_UWmOs0kGS2m27_Rkz9Q#ValueExpression.-660735948.1": "Vedi tutto",
        "JTUTHDwmmke37+oqdpbEoQ#Value": "Puoi guadagnare commissioni da"
    },
    an = {
        "tN_UWmOs0kGS2m27_Rkz9Q#ValueExpression.-660735948.1": "Zobacz wszystko",
        "JTUTHDwmmke37+oqdpbEoQ#Value": "Mo\u017Cesz zarabia\u0107 prowizje z"
    },
    sn = {
        "tN_UWmOs0kGS2m27_Rkz9Q#ValueExpression.-660735948.1": "Ver tudo",
        "JTUTHDwmmke37+oqdpbEoQ#Value": "Voc\xEA pode ganhar comiss\xF5es de"
    },
    on = {
        "tN_UWmOs0kGS2m27_Rkz9Q#ValueExpression.-660735948.1": "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0441\u0435",
        "JTUTHDwmmke37+oqdpbEoQ#Value": "\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0437\u0430\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0442\u044C \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u043E\u043D\u043D\u044B\u0435 \u043E\u0442"
    },
    yr = {
        "ar-001": {
            translations: Yr,
            isRTL: !0
        },
        "de-DE": {
            translations: en,
            isRTL: !1
        },
        "es-ES": {
            translations: tn,
            isRTL: !1
        },
        "fr-FR": {
            translations: rn,
            isRTL: !1
        },
        "it-IT": {
            translations: nn,
            isRTL: !1
        },
        "pl-PL": {
            translations: an,
            isRTL: !1
        },
        "pt-PT": {
            translations: sn,
            isRTL: !1
        },
        "ru-RU": {
            translations: on,
            isRTL: !1
        }
    };
var R = v; {
    let r = class r extends R.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t, yr);
            var l = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get countEvent$ServerAction() {
            return this.hasOwnProperty("_countEvent$ServerAction") || (this._countEvent$ServerAction = function(e, i) {
                var t = this.controller;
                return R.Logger.startActiveSpan("CountEvent", function(l) {
                    return l && (l.setAttribute("code.function", "CountEvent"), l.setAttribute("outsystems.function.key", "91a14e6c-7235-4a96-b4c1-a3167a52ecd7"), l.setAttribute("outsystems.function.owner.name", "PartnersHub"), l.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), l.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), R.Flow.tryFinally(function() {
                        var a = {
                            ShowUnpublishEvent: R.DataConversion.ServerDataConverter.to(e, R.DataTypes.DataTypes.Boolean)
                        };
                        return t.callServerAction("CountEvent", "screenservices/PartnersHub/Events/EventListSection/ActionCountEvent", "zV8oTZGzQLPEcc26KEGkxw", a, t.callContext(i), void 0, void 0, !0).then(function(o) {
                            var d = new(t.constructor.getVariableGroupType("PartnersHub.Events.EventListSection$ActionCountEvent"));
                            return d.numberOfRowOut = R.DataConversion.ServerDataConverter.from(o.NumberOfRow, K), d
                        })
                    }, function() {
                        l && l.end()
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
                var i = this.model,
                    t = this.controller,
                    l = this.idService;
                return R.Logger.startActiveSpan("OnReady", function(a) {
                    return a && (a.setAttribute("code.function", "OnReady"), a.setAttribute("outsystems.function.key", "86118444-f0c3-4f79-86cd-41881b142cb4"), a.setAttribute("outsystems.function.owner.name", "PartnersHub"), a.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), R.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var o = new R.DataTypes.VariableHolder;
                        return R.Flow.executeAsyncFlow(function() {
                            return i.flush(), t.countEvent$ServerAction(E.getshowUnpublishEventFF(), e).then(function(d) {
                                o.value = d
                            }).then(function() {
                                i.variables.numberOfEventsVar = o.value.numberOfRowOut
                            })
                        })
                    }, function() {
                        a && a.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _seeAllOnClick$Action() {
            return this.hasOwnProperty("__seeAllOnClick$Action") || (this.__seeAllOnClick$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    l = this.idService;
                return R.Logger.startActiveSpan("SeeAllOnClick", function(a) {
                    a && (a.setAttribute("code.function", "SeeAllOnClick"), a.setAttribute("outsystems.function.key", "aaf4a9a3-6859-4d89-baf7-bd1c0d7ab4d6"), a.setAttribute("outsystems.function.owner.name", "PartnersHub"), a.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("SeeAllOnClick"), e = t.callContext(e), y.rudderstackTrackEvent$Action(function() {
                            var o = new D;
                            return o.actionAttr = "click_cta", o.cta_nameAttr = "See all", o.cta_placementAttr = "see all in event section", o
                        }(), "ce_partnershub_form", e), R.Navigation.navigateTo(R.Navigation.generateScreenURL("PartnersHub", "AllEvent", {}), R.Transitions.createTransition(R.Transitions.TransitionAnimation.None), e, !0)
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__seeAllOnClick$Action
        }
        set _seeAllOnClick$Action(e) {
            this.__seeAllOnClick$Action = e
        }
        onReady$Action(e) {
            var i = this.controller;
            return R.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "86118444-f0c3-4f79-86cd-41881b142cb4"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), R.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        seeAllOnClick$Action(e) {
            var i = this.controller;
            return R.Logger.startActiveSpan("SeeAllOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "SeeAllOnClick"), t.setAttribute("outsystems.function.key", "aaf4a9a3-6859-4d89-baf7-bd1c0d7ab4d6"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._seeAllOnClick$Action, e)
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
                var i = this.controller,
                    t = this.model,
                    l = this.idService;
                return i.onReady$Action(e)
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
            return y.defaultTimeout
        }
    };
    n(r, "ControllerInner");
    let g = r;
    Ht = g, Ht.registerVariableGroupType("PartnersHub.Events.EventListSection$ActionCountEvent", [{
        name: "NumberOfRow",
        attrName: "numberOfRowOut",
        mandatory: !1,
        dataType: R.DataTypes.DataTypes.Record,
        defaultValue: n(function() {
            return new K
        }, "defaultValue"),
        complexType: K
    }])
}
var Ht, Sr = new R.Controller.ControllerFactory(Ht, V);
var Dt = B($());
var Pr = {};

function Tt(g, r, c, e) {
    var i = document.getElementById(g.WidgetId),
        t = n(function(o) {
            var d;
            return isNaN(o) ? !1 : (d = parseFloat(o), (d | 0) === d)
        }, "checkIfIsInteger"),
        l = t(g.Height) ? g.Height + "px" : g.Height,
        a = t(g.Width) ? g.Width + "px" : g.Width;
    (g.Width !== "" || typeof g.Width != "undefined") && i.style.setProperty("--scrollable-area-width", a), (g.Height !== "" || typeof g.Height != "undefined") && i.style.setProperty("--scrollable-area-height", l)
}
n(Tt, "default");
var x = v; {
    let r = class r extends x.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t, Pr);
            var l = this.controller;
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
                var i = this.model,
                    t = this.controller,
                    l = this.idService;
                return x.Logger.startActiveSpan("OnParametersChanged", function(a) {
                    a && (a.setAttribute("code.function", "OnParametersChanged"), a.setAttribute("outsystems.function.key", "78c192e4-849b-47de-b80d-468eddc930ca"), a.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), a.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnParametersChanged"), e = t.callContext(e), t._onReady$Action(e)
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(e) {
            this.__onParametersChanged$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    l = this.idService;
                return x.Logger.startActiveSpan("OnReady", function(a) {
                    a && (a.setAttribute("code.function", "OnReady"), a.setAttribute("outsystems.function.key", "a6ace38b-3765-45d8-9109-f6f321e459b8"), a.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), a.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e), x.Logger.startActiveSpan("SetClasses", function(o) {
                            o && (o.setAttribute("code.function", "SetClasses"), o.setAttribute("outsystems.function.key", "2e878d6a-5e78-44ab-9ac8-9d78395bf8f1"), o.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), o.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(Tt, "SetClasses", "OnReady", {
                                    Height: x.DataConversion.JSNodeParamConverter.to(i.variables.heightIn, x.DataTypes.DataTypes.Text),
                                    Width: x.DataConversion.JSNodeParamConverter.to(i.variables.widthIn, x.DataTypes.DataTypes.Text),
                                    WidgetId: x.DataConversion.JSNodeParamConverter.to(l.getId("Content"), x.DataTypes.DataTypes.Text)
                                }, function(d) {}, {}, {})
                            } finally {
                                o && o.end()
                            }
                        }, 1)
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        onParametersChanged$Action(e) {
            var i = this.controller;
            return x.Logger.startActiveSpan("OnParametersChanged__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnParametersChanged"), t.setAttribute("outsystems.function.key", "78c192e4-849b-47de-b80d-468eddc930ca"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onParametersChanged$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var i = this.controller;
            return x.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "a6ace38b-3765-45d8-9109-f6f321e459b8"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onReady$Action, e)
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
                var i = this.controller,
                    t = this.model,
                    l = this.idService;
                return i.onReady$Action(e)
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
                var i = this.controller,
                    t = this.model,
                    l = this.idService;
                return i.onParametersChanged$Action(e)
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
            return Qt.defaultTimeout
        }
    };
    n(r, "ControllerInner");
    let g = r;
    Cr = g
}
var Cr, Or = new x.Controller.ControllerFactory(Cr, Yt);
var ln = v,
    bi = A.PlaceholderContent,
    Ei = A.IteratorPlaceholderContent,
    Z = class Z extends H.BaseWebBlock {
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
            return hr
        }
        get controllerFactory() {
            return Or
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                c = this.controller,
                e = this.idService,
                i = c.validationService,
                t = this.widgetsRecordProvider,
                l = c.callContext(),
                a = Z.ifWidget,
                o = Z.textWidget,
                d = Z.asPrimitiveValue,
                S = Z.getTranslation,
                u = this;
            return Dt.createElement("div", this.getRootNodeProperties(), Dt.createElement(Zt, {
                align: 0,
                content: u.props.placeholders.content,
                gridProperties: {
                    classes: "OSInline"
                },
                style: r.getCachedValue(e.getId("Content.Style"), function() {
                    return "scrollable-area-content " + r.variables.orientationIn + "-scroll " + (r.variables.scrollbarStyleIn === ne.scrollbarStyle.compact ? "compact" : r.variables.scrollbarStyleIn === ne.scrollbarStyle.none ? "none" : "") + (r.variables.extendedClassIn === "" ? "" : " " + r.variables.extendedClassIn)
                }, function() {
                    return r.variables.orientationIn
                }, function() {
                    return r.variables.scrollbarStyleIn
                }, function() {
                    return r.variables.extendedClassIn
                }),
                _idProps: {
                    service: e,
                    name: "Content"
                },
                _widgetRecordProvider: t,
                style_dataFetchStatus: ln.Model.calculateDataFetchStatus(r.variables._orientationInDataFetchStatus, r.variables._scrollbarStyleInDataFetchStatus, r.variables._extendedClassInDataFetchStatus)
            }))
        }
    };
n(Z, "View");
var xt = Z,
    Vt = xt;
var O = B($());
var cn = {
        "3RwpAE_deEmOXUgTVGD9TA#Value": "\u0644\u0627 \u062A\u0648\u062C\u062F \u0623\u062D\u062F\u0627\u062B \u0645\u062C\u062F\u0648\u0644\u0629 \u0641\u064A \u0627\u0644\u0648\u0642\u062A \u0627\u0644\u062D\u0627\u0644\u064A."
    },
    dn = {
        "3RwpAE_deEmOXUgTVGD9TA#Value": "Derzeit sind keine Ereignisse geplant."
    },
    un = {
        "3RwpAE_deEmOXUgTVGD9TA#Value": "No hay eventos programados en este momento."
    },
    vn = {
        "3RwpAE_deEmOXUgTVGD9TA#Value": "Aucun \xE9v\xE9nement n'est pr\xE9vu pour le moment."
    },
    mn = {
        "3RwpAE_deEmOXUgTVGD9TA#Value": "Al momento non ci sono eventi programmati."
    },
    gn = {
        "3RwpAE_deEmOXUgTVGD9TA#Value": "Obecnie nie ma zaplanowanych wydarze\u0144."
    },
    _n = {
        "3RwpAE_deEmOXUgTVGD9TA#Value": "N\xE3o h\xE1 eventos agendados no momento."
    },
    fn = {
        "3RwpAE_deEmOXUgTVGD9TA#Value": "\u0412 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0435 \u0432\u0440\u0435\u043C\u044F \u043D\u0435\u0442 \u0437\u0430\u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u0441\u043E\u0431\u044B\u0442\u0438\u0439."
    },
    Rr = {
        "ar-001": {
            translations: cn,
            isRTL: !0
        },
        "de-DE": {
            translations: dn,
            isRTL: !1
        },
        "es-ES": {
            translations: un,
            isRTL: !1
        },
        "fr-FR": {
            translations: vn,
            isRTL: !1
        },
        "it-IT": {
            translations: mn,
            isRTL: !1
        },
        "pl-PL": {
            translations: gn,
            isRTL: !1
        },
        "pt-PT": {
            translations: _n,
            isRTL: !1
        },
        "ru-RU": {
            translations: fn,
            isRTL: !1
        }
    };
var w = v; {
    let r = class r extends w.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t, Rr);
            var l = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {
                getEvents$AggrRefresh: 0
            }, this.dataFetchDependentsGraph = {
                getEvents$AggrRefresh: []
            }, this.shouldSendClientVarsToDataSources = !0
        }
        get getEvents$AggrRefresh() {
            return this.hasOwnProperty("_getEvents$AggrRefresh") || (this._getEvents$AggrRefresh = function() {
                var e = function(i, t, d) {
                    var a = this.model,
                        o = this.controller,
                        d = o.callContext(d);
                    return o.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetEvents", "screenservices/PartnersHub/Events/EventList/ScreenDataSetGetEvents", "2BpRlmgNNe9RwEl1Tu_Xkg", i, t, function(S) {
                        a.variables.getEventsAggr.dataFetchStatusAttr = S
                    }, function(S) {
                        a.variables.getEventsAggr.replaceWith(w.DataConversion.ServerDataConverter.from(S, a.variables.getEventsAggr.constructor))
                    }, void 0, void 0, void 0, d, E, !0).then(function() {
                        o._getEventsOnAfterFetch$Action(o.callContext(d))
                    })
                }.bind(this);
                return w.Logger.startActiveSpan("GetEvents", function(i) {
                    return i && (i.setAttribute("code.function", "GetEvents"), i.setAttribute("outsystems.function.key", "30a51a6b-7320-4f44-8e88-5270e578d5cb"), i.setAttribute("outsystems.function.owner.name", "PartnersHub"), i.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), i.setAttribute("outsystems.function.type", "SCREEN_SERVICE_AGGREGATE_CALL")), w.Flow.tryFinally(function() {
                        return e()
                    }, function() {
                        i && i.end()
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
                var i = this.model,
                    t = this.controller,
                    l = this.idService;
                return w.Logger.startActiveSpan("OnParametersChanged", function(a) {
                    return a && (a.setAttribute("code.function", "OnParametersChanged"), a.setAttribute("outsystems.function.key", "0450cfb4-fd3d-48b1-8d3d-3eee243d9842"), a.setAttribute("outsystems.function.owner.name", "PartnersHub"), a.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), w.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("OnParametersChanged"), e = t.callContext(e), w.Flow.executeAsyncFlow(function() {
                            var o = t.getEvents$AggrRefresh(i.variables.maxEventsIn, 0, e);
                            return i.flush(), o
                        })
                    }, function() {
                        a && a.end()
                    })
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(e) {
            this.__onParametersChanged$Action = e
        }
        get _getEventsOnAfterFetch$Action() {
            return this.hasOwnProperty("__getEventsOnAfterFetch$Action") || (this.__getEventsOnAfterFetch$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    l = this.idService;
                return w.Logger.startActiveSpan("GetEventsOnAfterFetch", function(a) {
                    a && (a.setAttribute("code.function", "GetEventsOnAfterFetch"), a.setAttribute("outsystems.function.key", "93025021-0e45-46a7-82f9-5c679672e504"), a.setAttribute("outsystems.function.owner.name", "PartnersHub"), a.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("GetEventsOnAfterFetch"), e = t.callContext(e), i.variables.isLoadingVar = !1
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__getEventsOnAfterFetch$Action
        }
        set _getEventsOnAfterFetch$Action(e) {
            this.__getEventsOnAfterFetch$Action = e
        }
        get _onClickEvent$Action() {
            return this.hasOwnProperty("__onClickEvent$Action") || (this.__onClickEvent$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    l = this.idService;
                return w.Logger.startActiveSpan("OnClickEvent", function(a) {
                    a && (a.setAttribute("code.function", "OnClickEvent"), a.setAttribute("outsystems.function.key", "f94b253d-c72c-466c-94bd-7269718689ee"), a.setAttribute("outsystems.function.owner.name", "PartnersHub"), a.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("OnClickEvent"), e = t.callContext(e), y.rudderstackTrackEvent$Action(function() {
                            var o = new D;
                            return o.actionAttr = "click_cta", o.cta_nameAttr = i.variables.getEventsAggr.listOut.getCurrent(e.iterationContext).eventAttr.titleAttr + " event", o.cta_placementAttr = "event card in event section", o
                        }(), "ce_partnershub_form", e), w.Navigation.navigateTo(w.Navigation.generateScreenURL("PartnersHub", "EventDetails", {
                            EventId: w.DataConversion.ServerDataConverter.to(i.variables.getEventsAggr.listOut.getCurrent(e.iterationContext).eventAttr.idAttr, w.DataTypes.DataTypes.LongInteger)
                        }), w.Transitions.createTransition(w.Transitions.TransitionAnimation.None), e, !0)
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__onClickEvent$Action
        }
        set _onClickEvent$Action(e) {
            this.__onClickEvent$Action = e
        }
        onParametersChanged$Action(e) {
            var i = this.controller;
            return w.Logger.startActiveSpan("OnParametersChanged__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnParametersChanged"), t.setAttribute("outsystems.function.key", "0450cfb4-fd3d-48b1-8d3d-3eee243d9842"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), w.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._onParametersChanged$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        getEventsOnAfterFetch$Action(e) {
            var i = this.controller;
            return w.Logger.startActiveSpan("GetEventsOnAfterFetch__proxy", function(t) {
                t && (t.setAttribute("code.function", "GetEventsOnAfterFetch"), t.setAttribute("outsystems.function.key", "93025021-0e45-46a7-82f9-5c679672e504"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._getEventsOnAfterFetch$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onClickEvent$Action(e) {
            var i = this.controller;
            return w.Logger.startActiveSpan("OnClickEvent__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnClickEvent"), t.setAttribute("outsystems.function.key", "f94b253d-c72c-466c-94bd-7269718689ee"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onClickEvent$Action, e)
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
                var i = this.controller,
                    t = this.model,
                    l = this.idService;
                return i.onParametersChanged$Action(e)
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
            return y.defaultTimeout
        }
    };
    n(r, "ControllerInner");
    let g = r;
    wr = g
}
var wr, Hr = new w.Controller.ControllerFactory(wr, V);
var b = v,
    hn = A.PlaceholderContent,
    pn = A.IteratorPlaceholderContent,
    Y = class Y extends H.BaseWebBlock {
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
            return [ie, Re, W]
        }
        get modelFactory() {
            return Er
        }
        get controllerFactory() {
            return Hr
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                c = this.controller,
                e = this.idService,
                i = c.validationService,
                t = this.widgetsRecordProvider,
                l = c.callContext(),
                a = Y.ifWidget,
                o = Y.textWidget,
                d = Y.asPrimitiveValue,
                S = Y.getTranslation,
                u = this;
            return O.createElement("div", this.getRootNodeProperties(), O.createElement(ie, {
                getOwnerSpan: n(function() {
                    return u.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: n(function() {
                    return u.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    IsLoading: r.variables.isLoadingVar
                },
                events: {
                    _handleError: n(function(s) {
                        c.handleError(s)
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
                    content: new hn(function() {
                        return [a(r.variables.getEventsAggr.listOut.isEmpty, !1, this, function() {
                            return [O.createElement(P, {
                                style: "ph-text",
                                text: [o(S("3RwpAE_deEmOXUgTVGD9TA#Value", "There are no events scheduled at the moment."))],
                                _idProps: {
                                    service: e,
                                    uuid: "1"
                                },
                                _widgetRecordProvider: t
                            })]
                        }, function() {
                            return [a(r.variables.getEventsAggr.listOut.length > 1, !1, this, function() {
                                return [O.createElement(jt, {
                                    animateItems: !0,
                                    extendedProperties: {
                                        "disable-virtualization": "True"
                                    },
                                    gridProperties: {
                                        classes: "OSFillParent"
                                    },
                                    mode: 0,
                                    source: r.variables.getEventsAggr.listOut,
                                    style: r.getCachedValue(e.getId("EventList.Style"), function() {
                                        return "ph-event-list " + (r.variables.getEventsAggr.listOut.length > 2 ? "ph-event-grid-three" : "ph-event-grid-two")
                                    }, function() {
                                        return r.variables.getEventsAggr.listOut.length
                                    }),
                                    tag: "div",
                                    _idProps: {
                                        service: e,
                                        name: "EventList"
                                    },
                                    _widgetRecordProvider: t,
                                    source_dataFetchStatus: b.Model.calculateDataFetchStatus(r.variables.getEventsAggr.dataFetchStatusAttr),
                                    style_dataFetchStatus: b.Model.calculateDataFetchStatus(r.variables.getEventsAggr.dataFetchStatusAttr),
                                    placeholders: {
                                        content: new pn(function(s, _) {
                                            return [O.createElement(m, {
                                                align: 0,
                                                animate: !1,
                                                extendedEvents: {
                                                    onClick: n(function() {
                                                        var N = _.clone();
                                                        c.onClickEvent$Action(c.callContext(N))
                                                    }, "onClick")
                                                },
                                                style: "ph-event-card-container",
                                                visible: !0,
                                                _idProps: {
                                                    service: s,
                                                    uuid: "3"
                                                },
                                                _widgetRecordProvider: t,
                                                _dependencies: [d(r.variables.getEventsAggr.dataFetchStatusAttr), d(r.variables.getEventsAggr.listOut.getCurrent(_.iterationContext).eventModeAttr.idAttr), d(r.variables.getEventsAggr.listOut.getCurrent(_.iterationContext).countryAttr.nameAttr), d(r.variables.getEventsAggr.listOut.getCurrent(_.iterationContext).countryAttr.timeZoneAttr), d(r.variables.getEventsAggr.listOut.getCurrent(_.iterationContext).eventAttr.startDateTimeAttr), d(r.variables.getEventsAggr.listOut.getCurrent(_.iterationContext).eventAttr.endDateTimeAttr), d(r.variables.getEventsAggr.listOut.getCurrent(_.iterationContext).eventAttr.titleAttr), d(r.variables.getEventsAggr.listOut.getCurrent(_.iterationContext).eventAttr.mobileImageAttr), d(r.variables.getEventsAggr.listOut.getCurrent(_.iterationContext).eventAttr.idAttr)]
                                            }, O.createElement(Re, {
                                                getOwnerSpan: n(function() {
                                                    return u.getChildSpan("render")
                                                }, "getOwnerSpan"),
                                                getOwnerDisposeSpan: n(function() {
                                                    return u.getChildSpan("destroy")
                                                }, "getOwnerDisposeSpan"),
                                                inputs: {
                                                    EventDetails: r.getCachedValue(s.getId("A8vN53M6KEWkcvMmKCq45Q.EventDetails"), function() {
                                                        return function() {
                                                            var N = new Ke;
                                                            return N.idAttr = r.variables.getEventsAggr.listOut.getCurrent(_.iterationContext).eventAttr.idAttr, N.fileNamesAttr = function() {
                                                                var ze = new Ge;
                                                                return ze.desktopImageNameAttr = "", ze.mobileImageNameAttr = r.variables.getEventsAggr.listOut.getCurrent(_.iterationContext).eventAttr.mobileImageAttr, ze
                                                            }(), N
                                                        }()
                                                    }, function() {
                                                        return r.variables.getEventsAggr.listOut.getCurrent(_.iterationContext).eventAttr.idAttr
                                                    }, function() {
                                                        return r.variables.getEventsAggr.listOut.getCurrent(_.iterationContext).eventAttr.mobileImageAttr
                                                    }),
                                                    _eventDetailsInDataFetchStatus: b.Model.calculateDataFetchStatus(r.variables.getEventsAggr.dataFetchStatusAttr)
                                                },
                                                events: {
                                                    _handleError: n(function(N) {
                                                        c.handleError(N)
                                                    }, "_handleError")
                                                },
                                                _validationProps: {
                                                    validationService: i
                                                },
                                                _idProps: {
                                                    service: s,
                                                    uuid: "4",
                                                    alias: "2"
                                                },
                                                _widgetRecordProvider: t,
                                                _dependencies: []
                                            }), O.createElement(m, {
                                                align: 0,
                                                animate: !1,
                                                style: "ph-event-card-info padding-base",
                                                visible: !0,
                                                _idProps: {
                                                    service: s,
                                                    uuid: "5"
                                                },
                                                _widgetRecordProvider: t
                                            }, O.createElement(m, {
                                                align: 0,
                                                animate: !1,
                                                style: "display-flex flex-direction-column  ph-event-card-details-container",
                                                visible: !0,
                                                _idProps: {
                                                    service: s,
                                                    uuid: "6"
                                                },
                                                _widgetRecordProvider: t
                                            }, O.createElement(I, {
                                                extendedProperties: {
                                                    style: "color: var(--Neutral-Neutral-10, #101213); font-size: 14px; font-weight: 700; line-height: 22px; margin-bottom: 4px;"
                                                },
                                                value: r.variables.getEventsAggr.listOut.getCurrent(_.iterationContext).eventAttr.titleAttr,
                                                _idProps: {
                                                    service: s,
                                                    uuid: "7"
                                                },
                                                _widgetRecordProvider: t,
                                                value_dataFetchStatus: b.Model.calculateDataFetchStatus(r.variables.getEventsAggr.dataFetchStatusAttr)
                                            }), O.createElement(I, {
                                                extendedProperties: {
                                                    style: "color: var(--Neutral-Neutral-10, #101213); font-size: 12px; font-weight: 400; line-height: 18px;"
                                                },
                                                gridProperties: {
                                                    marginLeft: "0"
                                                },
                                                value: r.getCachedValue(s.getId("HwkZm2eup0q6igsG0Lv8xQ.Value"), function() {
                                                    return (r.variables.getEventsAggr.listOut.getCurrent(_.iterationContext).eventAttr.endDateTimeAttr === b.BuiltinFunctions.nullTextIdentifier() ? b.BuiltinFunctions.formatDateTime(b.BuiltinFunctions.textToDateTime(r.variables.getEventsAggr.listOut.getCurrent(_.iterationContext).eventAttr.startDateTimeAttr), "d MMM, HH:mm") + " " + r.variables.getEventsAggr.listOut.getCurrent(_.iterationContext).countryAttr.timeZoneAttr : b.BuiltinFunctions.formatDateTime(b.BuiltinFunctions.textToDateTime(r.variables.getEventsAggr.listOut.getCurrent(_.iterationContext).eventAttr.startDateTimeAttr), "d MMM") + " - " + b.BuiltinFunctions.formatDateTime(b.BuiltinFunctions.textToDateTime(r.variables.getEventsAggr.listOut.getCurrent(_.iterationContext).eventAttr.endDateTimeAttr), "d MMM")) + ", " + b.BuiltinFunctions.year(b.BuiltinFunctions.textToDateTime(r.variables.getEventsAggr.listOut.getCurrent(_.iterationContext).eventAttr.startDateTimeAttr)).toString()
                                                }, function() {
                                                    return r.variables.getEventsAggr.listOut.getCurrent(_.iterationContext).eventAttr.endDateTimeAttr
                                                }, function() {
                                                    return r.variables.getEventsAggr.listOut.getCurrent(_.iterationContext).eventAttr.startDateTimeAttr
                                                }, function() {
                                                    return r.variables.getEventsAggr.listOut.getCurrent(_.iterationContext).countryAttr.timeZoneAttr
                                                }),
                                                _idProps: {
                                                    service: s,
                                                    uuid: "8"
                                                },
                                                _widgetRecordProvider: t,
                                                value_dataFetchStatus: b.Model.calculateDataFetchStatus(r.variables.getEventsAggr.dataFetchStatusAttr)
                                            }), O.createElement(I, {
                                                extendedProperties: {
                                                    style: "color: var(--Neutral-Neutral-10, #101213); font-size: 12px; font-weight: 400; line-height: 18px;"
                                                },
                                                gridProperties: {
                                                    marginLeft: "0"
                                                },
                                                value: r.getCachedValue(s.getId("S3ptY+bzwEa+FKD_NtrhYg.Value"), function() {
                                                    return b.BuiltinFunctions.identifierToInteger(r.variables.getEventsAggr.listOut.getCurrent(_.iterationContext).eventModeAttr.idAttr) === 1 ? r.variables.getEventsAggr.listOut.getCurrent(_.iterationContext).countryAttr.nameAttr : "Zoom"
                                                }, function() {
                                                    return r.variables.getEventsAggr.listOut.getCurrent(_.iterationContext).eventModeAttr.idAttr
                                                }, function() {
                                                    return r.variables.getEventsAggr.listOut.getCurrent(_.iterationContext).countryAttr.nameAttr
                                                }),
                                                _idProps: {
                                                    service: s,
                                                    uuid: "9"
                                                },
                                                _widgetRecordProvider: t,
                                                value_dataFetchStatus: b.Model.calculateDataFetchStatus(r.variables.getEventsAggr.dataFetchStatusAttr)
                                            })), O.createElement(W, {
                                                getOwnerSpan: n(function() {
                                                    return u.getChildSpan("render")
                                                }, "getOwnerSpan"),
                                                getOwnerDisposeSpan: n(function() {
                                                    return u.getChildSpan("destroy")
                                                }, "getOwnerDisposeSpan"),
                                                inputs: {
                                                    SVGCode: `<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M7.34375 6.65625C7.53125 6.84375 7.53125 7.1875 7.34375 7.375L1.34375 13.375C1.15625 13.5625 0.8125 13.5625 0.625 13.375C0.4375 13.1875 0.4375 12.8438 0.625 12.6562L6.28125 7L0.625 1.375C0.4375 1.1875 0.4375 0.84375 0.625 0.65625C0.8125 0.46875 1.15625 0.46875 1.34375 0.65625L7.34375 6.65625Z" fill="#101213"/>\r
</svg>`
                                                },
                                                events: {
                                                    _handleError: n(function(N) {
                                                        c.handleError(N)
                                                    }, "_handleError")
                                                },
                                                _validationProps: {
                                                    validationService: i
                                                },
                                                _idProps: {
                                                    service: s,
                                                    uuid: "10",
                                                    alias: "3"
                                                },
                                                _widgetRecordProvider: t,
                                                _dependencies: []
                                            })))]
                                        }, l, e, "1")
                                    },
                                    _dependencies: [d(r.variables.getEventsAggr.dataFetchStatusAttr)]
                                })]
                            }, function() {
                                return [O.createElement(m, {
                                    align: 0,
                                    animate: !1,
                                    extendedEvents: {
                                        onClick: n(function() {
                                            var s = l.clone();
                                            c.onClickEvent$Action(c.callContext(s))
                                        }, "onClick")
                                    },
                                    style: "ph-event-card-container ph-one-event-card-container",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "11"
                                    },
                                    _widgetRecordProvider: t
                                }, O.createElement(Re, {
                                    getOwnerSpan: n(function() {
                                        return u.getChildSpan("render")
                                    }, "getOwnerSpan"),
                                    getOwnerDisposeSpan: n(function() {
                                        return u.getChildSpan("destroy")
                                    }, "getOwnerDisposeSpan"),
                                    inputs: {
                                        EventDetails: r.getCachedValue(e.getId("lc66TWA3tEeXkblM7AV6UQ.EventDetails"), function() {
                                            return function() {
                                                var s = new Ke;
                                                return s.idAttr = r.variables.getEventsAggr.listOut.getCurrent(l.iterationContext).eventAttr.idAttr, s.fileNamesAttr = function() {
                                                    var _ = new Ge;
                                                    return _.desktopImageNameAttr = "", _.mobileImageNameAttr = r.variables.getEventsAggr.listOut.getCurrent(l.iterationContext).eventAttr.mobileImageAttr, _
                                                }(), s
                                            }()
                                        }, function() {
                                            return r.variables.getEventsAggr.listOut.getCurrent(l.iterationContext).eventAttr.idAttr
                                        }, function() {
                                            return r.variables.getEventsAggr.listOut.getCurrent(l.iterationContext).eventAttr.mobileImageAttr
                                        }),
                                        _eventDetailsInDataFetchStatus: b.Model.calculateDataFetchStatus(r.variables.getEventsAggr.dataFetchStatusAttr)
                                    },
                                    events: {
                                        _handleError: n(function(s) {
                                            c.handleError(s)
                                        }, "_handleError")
                                    },
                                    _validationProps: {
                                        validationService: i
                                    },
                                    _idProps: {
                                        service: e,
                                        uuid: "12",
                                        alias: "4"
                                    },
                                    _widgetRecordProvider: t,
                                    _dependencies: []
                                }), O.createElement(m, {
                                    align: 0,
                                    animate: !1,
                                    style: "ph-event-card-info ph-one-event-card-info",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "13"
                                    },
                                    _widgetRecordProvider: t
                                }, O.createElement(m, {
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
                                }, O.createElement(I, {
                                    extendedProperties: {
                                        style: "color: var(--Neutral-Neutral-10, #101213); font-size: 14px; font-weight: 700; line-height: 22px; margin-bottom: 4px;"
                                    },
                                    value: r.variables.getEventsAggr.listOut.getCurrent(l.iterationContext).eventAttr.titleAttr,
                                    _idProps: {
                                        service: e,
                                        uuid: "15"
                                    },
                                    _widgetRecordProvider: t,
                                    value_dataFetchStatus: b.Model.calculateDataFetchStatus(r.variables.getEventsAggr.dataFetchStatusAttr)
                                }), O.createElement(I, {
                                    extendedProperties: {
                                        style: "color: var(--Neutral-Neutral-10, #101213); font-size: 12px; font-weight: 400; line-height: 18px;"
                                    },
                                    gridProperties: {
                                        marginLeft: "0"
                                    },
                                    value: r.getCachedValue(e.getId("WsUiitjqnEO1_AGgEtXukw.Value"), function() {
                                        return (r.variables.getEventsAggr.listOut.getCurrent(l.iterationContext).eventAttr.endDateTimeAttr === b.BuiltinFunctions.nullTextIdentifier() ? b.BuiltinFunctions.formatDateTime(b.BuiltinFunctions.textToDateTime(r.variables.getEventsAggr.listOut.getCurrent(l.iterationContext).eventAttr.startDateTimeAttr), "d MMM, HH:mm") + " " + r.variables.getEventsAggr.listOut.getCurrent(l.iterationContext).countryAttr.timeZoneAttr : b.BuiltinFunctions.formatDateTime(b.BuiltinFunctions.textToDateTime(r.variables.getEventsAggr.listOut.getCurrent(l.iterationContext).eventAttr.startDateTimeAttr), "d MMM") + " - " + b.BuiltinFunctions.formatDateTime(b.BuiltinFunctions.textToDateTime(r.variables.getEventsAggr.listOut.getCurrent(l.iterationContext).eventAttr.endDateTimeAttr), "d MMM")) + ", " + b.BuiltinFunctions.year(b.BuiltinFunctions.textToDateTime(r.variables.getEventsAggr.listOut.getCurrent(l.iterationContext).eventAttr.endDateTimeAttr)).toString()
                                    }, function() {
                                        return r.variables.getEventsAggr.listOut.getCurrent(l.iterationContext).eventAttr.endDateTimeAttr
                                    }, function() {
                                        return r.variables.getEventsAggr.listOut.getCurrent(l.iterationContext).eventAttr.startDateTimeAttr
                                    }, function() {
                                        return r.variables.getEventsAggr.listOut.getCurrent(l.iterationContext).countryAttr.timeZoneAttr
                                    }),
                                    _idProps: {
                                        service: e,
                                        uuid: "16"
                                    },
                                    _widgetRecordProvider: t,
                                    value_dataFetchStatus: b.Model.calculateDataFetchStatus(r.variables.getEventsAggr.dataFetchStatusAttr)
                                }), O.createElement(I, {
                                    extendedProperties: {
                                        style: "color: var(--Neutral-Neutral-10, #101213); font-size: 12px; font-weight: 400; line-height: 18px;"
                                    },
                                    gridProperties: {
                                        marginLeft: "0"
                                    },
                                    value: r.getCachedValue(e.getId("WQ3kyGhGKUqBRtRPs+E__w.Value"), function() {
                                        return b.BuiltinFunctions.identifierToInteger(r.variables.getEventsAggr.listOut.getCurrent(l.iterationContext).eventModeAttr.idAttr) === 1 ? r.variables.getEventsAggr.listOut.getCurrent(l.iterationContext).countryAttr.nameAttr : "Zoom"
                                    }, function() {
                                        return r.variables.getEventsAggr.listOut.getCurrent(l.iterationContext).eventModeAttr.idAttr
                                    }, function() {
                                        return r.variables.getEventsAggr.listOut.getCurrent(l.iterationContext).countryAttr.nameAttr
                                    }),
                                    _idProps: {
                                        service: e,
                                        uuid: "17"
                                    },
                                    _widgetRecordProvider: t,
                                    value_dataFetchStatus: b.Model.calculateDataFetchStatus(r.variables.getEventsAggr.dataFetchStatusAttr)
                                })), O.createElement(W, {
                                    getOwnerSpan: n(function() {
                                        return u.getChildSpan("render")
                                    }, "getOwnerSpan"),
                                    getOwnerDisposeSpan: n(function() {
                                        return u.getChildSpan("destroy")
                                    }, "getOwnerDisposeSpan"),
                                    inputs: {
                                        SVGCode: `<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M7.34375 6.65625C7.53125 6.84375 7.53125 7.1875 7.34375 7.375L1.34375 13.375C1.15625 13.5625 0.8125 13.5625 0.625 13.375C0.4375 13.1875 0.4375 12.8438 0.625 12.6562L6.28125 7L0.625 1.375C0.4375 1.1875 0.4375 0.84375 0.625 0.65625C0.8125 0.46875 1.15625 0.46875 1.34375 0.65625L7.34375 6.65625Z" fill="#101213"/>\r
</svg>`
                                    },
                                    events: {
                                        _handleError: n(function(s) {
                                            c.handleError(s)
                                        }, "_handleError")
                                    },
                                    _validationProps: {
                                        validationService: i
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
                _dependencies: [d(r.variables.getEventsAggr.dataFetchStatusAttr), d(r.variables.getEventsAggr.listOut)]
            }))
        }
    };
n(Y, "View");
var kt = Y,
    It = kt;
var Tr = v,
    bn = A.PlaceholderContent,
    qi = A.IteratorPlaceholderContent,
    ee = class ee extends H.BaseWebBlock {
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
            return [W, Vt, It]
        }
        get modelFactory() {
            return Ar
        }
        get controllerFactory() {
            return Sr
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                c = this.controller,
                e = this.idService,
                i = c.validationService,
                t = this.widgetsRecordProvider,
                l = c.callContext(),
                a = ee.ifWidget,
                o = ee.textWidget,
                d = ee.asPrimitiveValue,
                S = ee.getTranslation,
                u = this;
            return F.createElement("div", this.getRootNodeProperties(), F.createElement(m, {
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
            }, F.createElement(m, {
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
            }, F.createElement(W, {
                getOwnerSpan: n(function() {
                    return u.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: n(function() {
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
                    _handleError: n(function(s) {
                        c.handleError(s)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: i
                },
                _idProps: {
                    service: e,
                    uuid: "2",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                _dependencies: []
            }), F.createElement(P, {
                extendedProperties: {
                    OSTagName: "h5",
                    style: "flex-grow: 1; font-size: 20px; font-style: normal; font-weight: 700; line-height: 30px;"
                },
                style: "container-title",
                text: [o(S("JTUTHDwmmke37+oqdpbEoQ#Value", "Upcoming events"))],
                _idProps: {
                    service: e,
                    name: "Upcomingevents"
                },
                _widgetRecordProvider: t
            }), F.createElement(Oe, {
                enabled: !0,
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                onClick: n(function() {
                    var s = l.clone();
                    c.seeAllOnClick$Action(c.callContext(s))
                }, "onClick"),
                visible: r.variables.numberOfEventsVar.countNumberAttr > 3,
                _idProps: {
                    service: e,
                    name: "SeeAll"
                },
                _widgetRecordProvider: t
            }, F.createElement(I, {
                extendedProperties: {
                    style: "color: var(--Neutral-Neutral-10, #101213); font-size: 14px; font-weight: 400; line-height: 22px; text-decoration-line: underline;"
                },
                value: Tr.Injector.resolve(Tr.ServiceNames.TranslationsService).getMessage("tN_UWmOs0kGS2m27_Rkz9Q#ValueExpression.-660735948.1", "See all") + "(" + r.variables.numberOfEventsVar.countNumberAttr.toString() + ")",
                _idProps: {
                    service: e,
                    uuid: "5"
                },
                _widgetRecordProvider: t
            }))), F.createElement(m, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "6"
                },
                _widgetRecordProvider: t
            }, F.createElement(Vt, {
                getOwnerSpan: n(function() {
                    return u.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: n(function() {
                    return u.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ExtendedClass: "ph-scrollable-events",
                    Orientation: _e.orientation.horizontal
                },
                events: {
                    _handleError: n(function(s) {
                        c.handleError(s)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: i
                },
                _idProps: {
                    service: e,
                    uuid: "7",
                    alias: "2"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    content: new bn(function() {
                        return [F.createElement(It, {
                            getOwnerSpan: n(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                MaxEvents: 3
                            },
                            events: {
                                _handleError: n(function(s) {
                                    c.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: i
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
n(ee, "View");
var Ft = ee,
    Wt = Ft;
var ge = B($());
var Pe = v,
    Lt = class Lt extends Pe.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(Pe.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
n(Lt, "VariablesRecord");
var Be = Lt;
Be.init();
var Mt = class Mt extends Pe.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
n(Mt, "WidgetsRecord");
var Nt = Mt,
    me = class me extends Pe.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return Be
        }
        static getWidgetsRecordConstructor() {
            return Nt
        }
        static get hasValidationWidgets() {
            return me._hasValidationWidgetsValue === void 0 && (me._hasValidationWidgetsValue = void 0), me._hasValidationWidgetsValue
        }
        setInputs(r) {}
    };
n(me, "Model");
var $e = me;
$e._hasValidationWidgetsValue = void 0;
var Dr = new Pe.Model.ModelFactory($e);
var En = {
        "hGrjsVin_k+o09Xv10+QZA#Value.-1338680608.1": "\u0627\u0646\u0636\u0645 \u0627\u0644\u0622\u0646",
        "KglJHT9r9U+AN_RNe7PMbw#Value": "\u062A\u062D\u062F\u064A\u062B\u0627\u062A \u062D\u0635\u0631\u064A\u0629 \u0644\u0644\u0634\u0631\u0643\u0627\u0621 \u0639\u0644\u0649 \u0627\u0644\u0648\u0627\u062A\u0633\u0627\u0628",
        "xmmB3QXapky_a843OQSiSw#Value.582033868.1": "\u0632\u0631 \u0627\u0644\u0627\u0646\u0636\u0645\u0627\u0645 \u0627\u0644\u0622\u0646 \u0641\u064A \u0644\u0627\u0641\u062A\u0629 \u0648\u0627\u062A\u0633\u0627\u0628",
        "PxN9xg9sdEyO006yBWwOxA#Value.-1338680608.1": "\u0627\u0646\u0636\u0645 \u0627\u0644\u0622\u0646"
    },
    An = {
        "hGrjsVin_k+o09Xv10+QZA#Value.-1338680608.1": "Jetzt beitreten",
        "KglJHT9r9U+AN_RNe7PMbw#Value": "WhatsApp-Updates exklusiv f\xFCr Partner",
        "xmmB3QXapky_a843OQSiSw#Value.582033868.1": "WhatsApp-Banner Jetzt beitreten Button",
        "PxN9xg9sdEyO006yBWwOxA#Value.-1338680608.1": "Jetzt beitreten"
    },
    yn = {
        "hGrjsVin_k+o09Xv10+QZA#Value.-1338680608.1": "\xDAnete ahora",
        "KglJHT9r9U+AN_RNe7PMbw#Value": "Actualizaciones de WhatsApp exclusivamente para socios",
        "xmmB3QXapky_a843OQSiSw#Value.582033868.1": "Banner de WhatsApp Bot\xF3n de unirse ahora",
        "PxN9xg9sdEyO006yBWwOxA#Value.-1338680608.1": "\xDAnete ahora"
    },
    Sn = {
        "hGrjsVin_k+o09Xv10+QZA#Value.-1338680608.1": "Rejoindre maintenant",
        "KglJHT9r9U+AN_RNe7PMbw#Value": "Mises \xE0 jour WhatsApp r\xE9serv\xE9es aux partenaires",
        "xmmB3QXapky_a843OQSiSw#Value.582033868.1": "bouton rejoindre maintenant de de banni\xE8re WhatsApp",
        "PxN9xg9sdEyO006yBWwOxA#Value.-1338680608.1": "Rejoindre maintenant"
    },
    Pn = {
        "hGrjsVin_k+o09Xv10+QZA#Value.-1338680608.1": "Iscriviti ora",
        "KglJHT9r9U+AN_RNe7PMbw#Value": "Aggiornamenti WhatsApp esclusivamente per i partner",
        "xmmB3QXapky_a843OQSiSw#Value.582033868.1": 'Banner di WhatsApp pulsante "Unisciti ora"',
        "PxN9xg9sdEyO006yBWwOxA#Value.-1338680608.1": "Iscriviti ora"
    },
    Cn = {
        "hGrjsVin_k+o09Xv10+QZA#Value.-1338680608.1": "Do\u0142\u0105cz teraz",
        "KglJHT9r9U+AN_RNe7PMbw#Value": "Aktualizacje WhatsApp wy\u0142\u0105cznie dla partner\xF3w",
        "xmmB3QXapky_a843OQSiSw#Value.582033868.1": "Baner WhatsApp Przycisk do\u0142\u0105cz teraz",
        "PxN9xg9sdEyO006yBWwOxA#Value.-1338680608.1": "Do\u0142\u0105cz teraz"
    },
    On = {
        "hGrjsVin_k+o09Xv10+QZA#Value.-1338680608.1": "Adira j\xE1",
        "KglJHT9r9U+AN_RNe7PMbw#Value": "Atualiza\xE7\xF5es do WhatsApp exclusivamente para parceiros",
        "xmmB3QXapky_a843OQSiSw#Value.582033868.1": 'Banner do WhatsApp:Bot\xE3o "Adira j\xE1"',
        "PxN9xg9sdEyO006yBWwOxA#Value.-1338680608.1": "Adira j\xE1"
    },
    Rn = {
        "hGrjsVin_k+o09Xv10+QZA#Value.-1338680608.1": "\u041F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u0438\u0442\u044C\u0441\u044F \u0441\u0435\u0439\u0447\u0430\u0441",
        "KglJHT9r9U+AN_RNe7PMbw#Value": "\u041D\u043E\u0432\u043E\u0441\u0442\u0438 \u0432 WhatsApp \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u043E\u0432",
        "xmmB3QXapky_a843OQSiSw#Value.582033868.1": "\u0431\u0430\u043D\u043D\u0435\u0440 WhatsApp \u043A\u043D\u043E\u043F\u043A\u0430 \u043F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u0438\u0442\u044C\u0441\u044F \u0441\u0435\u0439\u0447\u0430\u0441",
        "PxN9xg9sdEyO006yBWwOxA#Value.-1338680608.1": "\u041F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u0438\u0442\u044C\u0441\u044F \u0441\u0435\u0439\u0447\u0430\u0441"
    },
    xr = {
        "ar-001": {
            translations: En,
            isRTL: !0
        },
        "de-DE": {
            translations: An,
            isRTL: !1
        },
        "es-ES": {
            translations: yn,
            isRTL: !1
        },
        "fr-FR": {
            translations: Sn,
            isRTL: !1
        },
        "it-IT": {
            translations: Pn,
            isRTL: !1
        },
        "pl-PL": {
            translations: Cn,
            isRTL: !1
        },
        "pt-PT": {
            translations: On,
            isRTL: !1
        },
        "ru-RU": {
            translations: Rn,
            isRTL: !1
        }
    };
var G = v; {
    let r = class r extends G.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t, xr);
            var l = this.controller;
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
                var i = this.model,
                    t = this.controller,
                    l = this.idService;
                return G.Logger.startActiveSpan("OnClickJoinNow", function(a) {
                    a && (a.setAttribute("code.function", "OnClickJoinNow"), a.setAttribute("outsystems.function.key", "e524bd03-1380-4a32-a549-a330b0d629f1"), a.setAttribute("outsystems.function.owner.name", "PartnersHub"), a.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnClickJoinNow"), e = t.callContext(e), y.rudderstackTrackEvent$Action(function() {
                            var o = new D;
                            return o.actionAttr = "click_cta", o.cta_nameAttr = G.Injector.resolve(G.ServiceNames.TranslationsService).getMessage("PxN9xg9sdEyO006yBWwOxA#Value.-1338680608.1", "Join Now"), o.cta_placementAttr = G.Injector.resolve(G.ServiceNames.TranslationsService).getMessage("xmmB3QXapky_a843OQSiSw#Value.582033868.1", "whatsapp banner join now button"), o
                        }(), "ce_partnershub_form", e), y.redirectToExternalNewTab$Action("https://www.whatsapp.com/channel/0029VajV7cY8fewr35BOkF06", e)
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__onClickJoinNow$Action
        }
        set _onClickJoinNow$Action(e) {
            this.__onClickJoinNow$Action = e
        }
        onClickJoinNow$Action(e) {
            var i = this.controller;
            return G.Logger.startActiveSpan("OnClickJoinNow__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnClickJoinNow"), t.setAttribute("outsystems.function.key", "e524bd03-1380-4a32-a549-a330b0d629f1"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onClickJoinNow$Action, e)
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
            return y.defaultTimeout
        }
    };
    n(r, "ControllerInner");
    let g = r;
    Vr = g
}
var Vr, kr = new G.Controller.ControllerFactory(Vr, V);
var Bt = v,
    ps = A.PlaceholderContent,
    bs = A.IteratorPlaceholderContent,
    te = class te extends H.BaseWebBlock {
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
            return [ae]
        }
        get modelFactory() {
            return Dr
        }
        get controllerFactory() {
            return kr
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                c = this.controller,
                e = this.idService,
                i = c.validationService,
                t = this.widgetsRecordProvider,
                l = c.callContext(),
                a = te.ifWidget,
                o = te.textWidget,
                d = te.asPrimitiveValue,
                S = te.getTranslation,
                u = this;
            return ge.createElement("div", this.getRootNodeProperties(), ge.createElement(m, {
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
            }, ge.createElement(P, {
                style: "banner-description",
                text: [o(S("KglJHT9r9U+AN_RNe7PMbw#Value", "WhatsApp updates exclusively for Partners"))],
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }), ge.createElement(Ce, {
                gridProperties: {
                    classes: "OSFillParent"
                },
                image: Bt.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.phone2501.png"),
                style: "phone-image",
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            }), ge.createElement(ae, {
                getOwnerSpan: n(function() {
                    return u.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: n(function() {
                    return u.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    title: Bt.Injector.resolve(Bt.ServiceNames.TranslationsService).getMessage("hGrjsVin_k+o09Xv10+QZA#Value.-1338680608.1", "Join Now")
                },
                events: {
                    _handleError: n(function(s) {
                        c.handleError(s)
                    }, "_handleError"),
                    onClick$Action: n(function() {
                        var s = l.clone();
                        c.onClickJoinNow$Action(c.callContext(s))
                    }, "onClick$Action")
                },
                _validationProps: {
                    validationService: i
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
n(te, "View");
var $t = te,
    Ut = $t;
var Ue = v,
    Ir = A.PlaceholderContent,
    wn = A.IteratorPlaceholderContent,
    re = class re extends H.BaseWebScreen {
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
            return [Je, Qe, ie, it, ut, Xe, ht, Wt, Ze, Ye, Ut, et]
        }
        get modelFactory() {
            return er
        }
        get controllerFactory() {
            return tr
        }
        get title() {
            return H.BaseWebScreen.getTranslation("ahEfw_OKr0+Qt2fThOcQtA#Title", "PartnersHubDashboard")
        }
        internalRender() {
            let r = this.model,
                c = this.controller,
                e = this.idService,
                i = c.validationService,
                t = this.widgetsRecordProvider,
                l = c.callContext(),
                a = re.ifWidget,
                o = re.textWidget,
                d = re.asPrimitiveValue,
                S = re.getTranslation,
                u = this;
            return p.createElement("div", this.getRootNodeProperties(), p.createElement(Je, {
                getOwnerSpan: n(function() {
                    return u.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: n(function() {
                    return u.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: n(function(s) {
                        c.handleError(s)
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
                    placeholder1: new Ir(function() {
                        return [p.createElement(m, {
                            align: 0,
                            animate: !1,
                            gridProperties: {
                                classes: "OSInline"
                            },
                            style: "partners-hub-dashboard",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "1"
                            },
                            _widgetRecordProvider: t
                        }, p.createElement(m, {
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
                        }, p.createElement(m, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "align-items: center; display: flex; gap: 24px;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "3"
                            },
                            _widgetRecordProvider: t
                        }, p.createElement(P, {
                            extendedProperties: {
                                style: "color: #222; font-size: 24px; font-weight: bold;"
                            },
                            text: ["Partner's Hub"],
                            _idProps: {
                                service: e,
                                uuid: "4"
                            },
                            _widgetRecordProvider: t
                        })), a(E.getisLanguageSwitcherEnabledFF(), !1, this, function() {
                            return [p.createElement(m, {
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
                            }, p.createElement(Xt, {
                                _validationProps: {
                                    validationService: i
                                },
                                dropdownMode: 1,
                                enabled: !0,
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                list: r.variables.getLanguagesByEnabledAggr.listOut,
                                mandatory: !1,
                                onChange: n(function() {
                                    return Promise.resolve().then(function() {
                                        var s = l.clone();
                                        return c.onSwitchLanguage$Action(c.callContext(s))
                                    })
                                }, "onChange"),
                                style: "dropdown",
                                values: n(function(s) {
                                    return s.languagesAttr.codeAttr
                                }, "values"),
                                variable: r.createVariable(Ue.DataTypes.DataTypes.Text, E.getLanguage(), function(s) {
                                    E.setLanguage(s)
                                }),
                                _idProps: {
                                    service: e,
                                    name: "LanguageSwitcherDropdown"
                                },
                                _widgetRecordProvider: t,
                                list_dataFetchStatus: Ue.Model.calculateDataFetchStatus(r.variables.getLanguagesByEnabledAggr.dataFetchStatusAttr),
                                placeholders: {
                                    content: new wn(function(s, _) {
                                        return [p.createElement(m, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "align-items: center; display: flex; gap: 10px;"
                                            },
                                            style: "",
                                            visible: !0,
                                            _idProps: {
                                                service: s,
                                                uuid: "7"
                                            },
                                            _widgetRecordProvider: t,
                                            _dependencies: [d(r.variables.getLanguagesByEnabledAggr.dataFetchStatusAttr), d(r.variables.getLanguagesByEnabledAggr.listOut.getCurrent(_.iterationContext).languagesAttr.nameAttr), d(r.variables.getLanguagesByEnabledAggr.listOut.getCurrent(_.iterationContext).languagesAttr.iconAttr)]
                                        }, p.createElement(Ce, {
                                            gridProperties: {
                                                width: "30px"
                                            },
                                            type: 1,
                                            url: r.variables.getLanguagesByEnabledAggr.listOut.getCurrent(_.iterationContext).languagesAttr.iconAttr,
                                            _idProps: {
                                                service: s,
                                                uuid: "8"
                                            },
                                            _widgetRecordProvider: t,
                                            url_dataFetchStatus: Ue.Model.calculateDataFetchStatus(r.variables.getLanguagesByEnabledAggr.dataFetchStatusAttr)
                                        }), p.createElement(I, {
                                            extendedProperties: {
                                                style: "overflow: visible; text-overflow: unset;"
                                            },
                                            gridProperties: {
                                                classes: "ThemeGrid_MarginGutter"
                                            },
                                            value: r.variables.getLanguagesByEnabledAggr.listOut.getCurrent(_.iterationContext).languagesAttr.nameAttr,
                                            _idProps: {
                                                service: s,
                                                uuid: "9"
                                            },
                                            _widgetRecordProvider: t,
                                            value_dataFetchStatus: Ue.Model.calculateDataFetchStatus(r.variables.getLanguagesByEnabledAggr.dataFetchStatusAttr)
                                        }))]
                                    }, l, e, "1")
                                },
                                _dependencies: [d(r.variables.getLanguagesByEnabledAggr.dataFetchStatusAttr)]
                            }))]
                        }, function() {
                            return []
                        })), p.createElement(m, {
                            align: 0,
                            animate: !0,
                            visible: E.getisCFDCommissionsFormEndabledFF() && E.getshowCFDCommisionBanner(),
                            _idProps: {
                                service: e,
                                name: "CFDBanner"
                            },
                            _widgetRecordProvider: t
                        }, p.createElement(Qe, {
                            getOwnerSpan: n(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: n(function(s) {
                                    c.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: i
                            },
                            _idProps: {
                                service: e,
                                name: "EnableCFDCommissionBanner",
                                alias: "2"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })), p.createElement(m, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "PartnerDashboard"
                            },
                            _widgetRecordProvider: t
                        }, p.createElement(ie, {
                            getOwnerSpan: n(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                IsLoading: E.getIsPartnerChecking()
                            },
                            events: {
                                _handleError: n(function(s) {
                                    c.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: i
                            },
                            _idProps: {
                                service: e,
                                uuid: "13",
                                alias: "3"
                            },
                            _widgetRecordProvider: t,
                            placeholders: {
                                content: new Ir(function() {
                                    return [a(E.getIsNotAPartner(), !1, this, function() {
                                        return [p.createElement(it, {
                                            getOwnerSpan: n(function() {
                                                return u.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: n(function() {
                                                return u.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {},
                                            events: {
                                                _handleError: n(function(s) {
                                                    c.handleError(s)
                                                }, "_handleError")
                                            },
                                            _validationProps: {
                                                validationService: i
                                            },
                                            _idProps: {
                                                service: e,
                                                name: "NonPartnerBanner",
                                                alias: "4"
                                            },
                                            _widgetRecordProvider: t,
                                            _dependencies: []
                                        })]
                                    }, function() {
                                        return [p.createElement(m, {
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
                                        }, p.createElement(m, {
                                            align: 0,
                                            animate: !1,
                                            gridProperties: {
                                                classes: "OSInline",
                                                width: "100%"
                                            },
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                uuid: "16"
                                            },
                                            _widgetRecordProvider: t
                                        }, p.createElement(ut, {
                                            getOwnerSpan: n(function() {
                                                return u.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: n(function() {
                                                return u.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {},
                                            events: {
                                                _handleError: n(function(s) {
                                                    c.handleError(s)
                                                }, "_handleError")
                                            },
                                            _validationProps: {
                                                validationService: i
                                            },
                                            _idProps: {
                                                service: e,
                                                uuid: "17",
                                                alias: "5"
                                            },
                                            _widgetRecordProvider: t,
                                            _dependencies: []
                                        })))]
                                    })]
                                })
                            },
                            _dependencies: [d(E.getIsNotAPartner())]
                        })), p.createElement(m, {
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
                        }, p.createElement(m, {
                            align: 0,
                            animate: !1,
                            gridProperties: {
                                classes: "OSInline",
                                width: "100%"
                            },
                            visible: !1,
                            _idProps: {
                                service: e,
                                uuid: "19"
                            },
                            _widgetRecordProvider: t
                        }, p.createElement(Xe, {
                            getOwnerSpan: n(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: n(function(s) {
                                    c.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: i
                            },
                            _idProps: {
                                service: e,
                                uuid: "20",
                                alias: "6"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })), p.createElement(ht, {
                            getOwnerSpan: n(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: n(function(s) {
                                    c.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: i
                            },
                            _idProps: {
                                service: e,
                                uuid: "21",
                                alias: "7"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })), p.createElement(m, {
                            align: 0,
                            animate: !0,
                            visible: E.getisEventSectionEnabledFF(),
                            _idProps: {
                                service: e,
                                name: "EventSection"
                            },
                            _widgetRecordProvider: t
                        }, p.createElement(Wt, {
                            getOwnerSpan: n(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: n(function(s) {
                                    c.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: i
                            },
                            _idProps: {
                                service: e,
                                uuid: "23",
                                alias: "8"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })), p.createElement(Ze, {
                            getOwnerSpan: n(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: n(function(s) {
                                    c.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: i
                            },
                            _idProps: {
                                service: e,
                                uuid: "24",
                                alias: "9"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        }), p.createElement(m, {
                            align: 0,
                            animate: !1,
                            style: "affiliate-programme-block",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "AffiliateProgramme"
                            },
                            _widgetRecordProvider: t
                        }, p.createElement(Ye, {
                            getOwnerSpan: n(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: n(function(s) {
                                    c.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: i
                            },
                            _idProps: {
                                service: e,
                                uuid: "26",
                                alias: "10"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })), p.createElement(Ut, {
                            getOwnerSpan: n(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: n(function(s) {
                                    c.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: i
                            },
                            _idProps: {
                                service: e,
                                uuid: "27",
                                alias: "11"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })), a(E.getisCFDCommissionsFormEndabledFF(), !0, this, function() {
                            return [p.createElement(et, {
                                getOwnerSpan: n(function() {
                                    return u.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: n(function() {
                                    return u.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {},
                                events: {
                                    _handleError: n(function(s) {
                                        c.handleError(s)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: i
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
                _dependencies: [d(E.getisEventSectionEnabledFF()), d(E.getIsNotAPartner()), d(E.getIsPartnerChecking()), d(E.getshowCFDCommisionBanner()), d(E.getisCFDCommissionsFormEndabledFF()), d(r.variables.getLanguagesByEnabledAggr.dataFetchStatusAttr), d(r.variables.getLanguagesByEnabledAggr.listOut), d(E.getLanguage()), d(E.getisLanguageSwitcherEnabledFF())]
            }))
        }
    };
n(re, "View");
var zt = re,
    Ls = zt;
export {
    Ls as
    default
};