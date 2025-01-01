import {
    a as K
} from "./_oschunk-RRHQSMAE.js";
import "./_oschunk-OCLFI2KS.js";
import {
    a as ve
} from "./_oschunk-FFD2WLYD.js";
import {
    a as _e
} from "./_oschunk-GJIFMXTM.js";
import "./_oschunk-FF7WZDTZ.js";
import {
    a as M
} from "./_oschunk-367MCH7Z.js";
import "./_oschunk-V52U2IZU.js";
import {
    a as H
} from "./_oschunk-MOYCBUII.js";
import "./_oschunk-NYD6CGWS.js";
import "./_oschunk-EROCOLS7.js";
import {
    b as k,
    e as B,
    h as y,
    i as ce,
    j as w,
    k as ue,
    l as de,
    p as me,
    r as $,
    s as fe,
    t as P,
    u as pe,
    v as ge,
    y as S
} from "./_oschunk-42NACYKQ.js";
import {
    a as se
} from "./_oschunk-2M7PXTSQ.js";
import {
    a as le,
    g as E,
    i as x
} from "./_oschunk-RKYF3TWC.js";
import "./_oschunk-K7AFM7ZW.js";
import {
    a as o,
    c as ae
} from "./_oschunk-DOFMR6EA.js";
import {
    l as O
} from "./_oschunk-2ZI4JQLD.js";
import "./_oschunk-IKZJT3AP.js";
import "./_oschunk-X4K3PA43.js";
import {
    Cg as ne,
    Dk as F,
    kd as L,
    qk as W,
    uk as oe,
    wd as re
} from "./_oschunk-MSUVGI3L.js";
import {
    ia as A
} from "./_oschunk-2JKANR6M.js";
import {
    c as l,
    g as ie
} from "./_oschunk-DVBKI63I.js";
var m = ie(le());
var v = ie(le());
var h = A,
    j = class j extends h.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ShowTaxConfirmationPopup", "showTaxConfirmationPopupVar", "ShowTaxConfirmationPopup", !0, !1, h.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("TINValidationsResponse", "tINValidationsResponseIn", "TINValidationsResponse", !0, !1, h.DataTypes.DataTypes.Record, function() {
                return h.DataTypes.ImmutableBase.getData(new L)
            }, !1, L), this.attr("_tINValidationsResponseInDataFetchStatus", "_tINValidationsResponseInDataFetchStatus", "_tINValidationsResponseInDataFetchStatus", !0, !1, h.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("EmploymentStatusList", "employmentStatusListIn", "EmploymentStatusList", !0, !1, h.DataTypes.DataTypes.RecordList, function() {
                return h.DataTypes.ImmutableBase.getData(new W)
            }, !1, W), this.attr("_employmentStatusListInDataFetchStatus", "_employmentStatusListInDataFetchStatus", "_employmentStatusListInDataFetchStatus", !0, !1, h.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(h.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
l(j, "VariablesRecord");
var T = j;
T.init();
var z = class z extends h.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
l(z, "WidgetsRecord");
var U = z,
    Q = class Q extends h.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return T
        }
        static getWidgetsRecordConstructor() {
            return U
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(r) {
            "TINValidationsResponse" in r && (this.variables.tINValidationsResponseIn = r.TINValidationsResponse, "_tINValidationsResponseInDataFetchStatus" in r && (this.variables._tINValidationsResponseInDataFetchStatus = r._tINValidationsResponseInDataFetchStatus)), "EmploymentStatusList" in r && (this.variables.employmentStatusListIn = r.EmploymentStatusList, "_employmentStatusListInDataFetchStatus" in r && (this.variables._employmentStatusListInDataFetchStatus = r._employmentStatusListInDataFetchStatus))
        }
    };
l(Q, "Model");
var V = Q;
V._hasValidationWidgetsValue = void 0;
var be = new h.Model.ModelFactory(V);
var Ce = {
        "vpfH7XxuIUaK72wKI4KFng#Value": "\u0644\u0627",
        "UjgOn49vA0i5j0q_u3WkMQ#Value": "\u0646\u0639\u0645",
        "8lnK3Aap7EuKYmmhAQjX3Q#Value": "\u0647\u0644 \u0644\u062F\u064A\u0643 \u0631\u0642\u0645 \u062A\u0639\u0631\u064A\u0641 \u0636\u0631\u064A\u0628\u064A\u061F",
        "dIuE3Avork6tOWGN7Vxl_w#Value": "\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0636\u0631\u0627\u0626\u0628",
        "HragfIjHc0Cps6Am_01KOw#Value": "\u062D\u062F\u062F \u062D\u0627\u0644\u0629 \u0639\u0645\u0644\u0643"
    },
    Ae = {
        "vpfH7XxuIUaK72wKI4KFng#Value": "Nein",
        "UjgOn49vA0i5j0q_u3WkMQ#Value": "Ja",
        "8lnK3Aap7EuKYmmhAQjX3Q#Value": "Haben Sie eine Steueridentifikationsnummer?",
        "dIuE3Avork6tOWGN7Vxl_w#Value": "Steuerinformationen",
        "HragfIjHc0Cps6Am_01KOw#Value": "W\xE4hlen Sie Ihren Besch\xE4ftigungsstatus"
    },
    Re = {
        "vpfH7XxuIUaK72wKI4KFng#Value": "No",
        "UjgOn49vA0i5j0q_u3WkMQ#Value": "S\xED",
        "8lnK3Aap7EuKYmmhAQjX3Q#Value": "\xBFTiene un n\xFAmero de identificaci\xF3n fiscal?",
        "dIuE3Avork6tOWGN7Vxl_w#Value": "Informaci\xF3n fiscal",
        "HragfIjHc0Cps6Am_01KOw#Value": "Seleccione su estado laboral"
    },
    Ie = {
        "vpfH7XxuIUaK72wKI4KFng#Value": "Non",
        "UjgOn49vA0i5j0q_u3WkMQ#Value": "Oui",
        "8lnK3Aap7EuKYmmhAQjX3Q#Value": "Avez-vous un num\xE9ro d'identification fiscale ?",
        "dIuE3Avork6tOWGN7Vxl_w#Value": "Informations fiscales",
        "HragfIjHc0Cps6Am_01KOw#Value": "S\xE9lectionnez votre statut d'emploi"
    },
    Oe = {
        "vpfH7XxuIUaK72wKI4KFng#Value": "No",
        "UjgOn49vA0i5j0q_u3WkMQ#Value": "S\xEC",
        "8lnK3Aap7EuKYmmhAQjX3Q#Value": "Hai un codice fiscale?",
        "dIuE3Avork6tOWGN7Vxl_w#Value": "Informazioni fiscali",
        "HragfIjHc0Cps6Am_01KOw#Value": "Seleziona il tuo stato di occupazione"
    },
    xe = {
        "vpfH7XxuIUaK72wKI4KFng#Value": "Nie",
        "UjgOn49vA0i5j0q_u3WkMQ#Value": "Tak",
        "8lnK3Aap7EuKYmmhAQjX3Q#Value": "Czy masz numer identyfikacji podatkowej?",
        "dIuE3Avork6tOWGN7Vxl_w#Value": "Informacje podatkowe",
        "HragfIjHc0Cps6Am_01KOw#Value": "Wybierz sw\xF3j status zatrudnienia"
    },
    Pe = {
        "vpfH7XxuIUaK72wKI4KFng#Value": "N\xE3o",
        "UjgOn49vA0i5j0q_u3WkMQ#Value": "Sim",
        "8lnK3Aap7EuKYmmhAQjX3Q#Value": "Possui um n\xFAmero de identifica\xE7\xE3o fiscal?",
        "dIuE3Avork6tOWGN7Vxl_w#Value": "Dados fiscais",
        "HragfIjHc0Cps6Am_01KOw#Value": "Selecione a sua situa\xE7\xE3o profissional"
    },
    ke = {
        "vpfH7XxuIUaK72wKI4KFng#Value": "\u041D\u0435\u0442",
        "UjgOn49vA0i5j0q_u3WkMQ#Value": "\u0414\u0430",
        "dIuE3Avork6tOWGN7Vxl_w#Value": "\u041D\u0430\u043B\u043E\u0433\u043E\u0432\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",
        "HragfIjHc0Cps6Am_01KOw#Value": "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0430\u0448 \u0441\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u043D\u044F\u0442\u043E\u0441\u0442\u0438"
    },
    ye = {
        "ar-001": {
            translations: Ce,
            isRTL: !0
        },
        "de-DE": {
            translations: Ae,
            isRTL: !1
        },
        "es-ES": {
            translations: Re,
            isRTL: !1
        },
        "fr-FR": {
            translations: Ie,
            isRTL: !1
        },
        "it-IT": {
            translations: Oe,
            isRTL: !1
        },
        "pl-PL": {
            translations: xe,
            isRTL: !1
        },
        "pt-PT": {
            translations: Pe,
            isRTL: !1
        },
        "ru-RU": {
            translations: ke,
            isRTL: !1
        }
    };

function G(I, r, u) {
    cacheTrackEvents.track({
        name: "ce_real_account_signup_form",
        properties: {
            action: "step_passed",
            step_num: 2,
            step_codename: "employment_details",
            form_name: "real_account_signup_form_outsystems"
        }
    })
}
l(G, "default");

function J(I, r, u) {
    cacheTrackEvents.track({
        name: "ce_real_account_signup_form",
        properties: {
            action: "step_passed",
            step_num: 1.5,
            step_codename: "employment_details_1",
            form_name: "real_account_signup_form_outsystems"
        }
    })
}
l(J, "default");

function X(I, r, u) {
    cacheTrackEvents.track({
        name: "ce_real_account_signup_form",
        properties: {
            action: "step_passed",
            step_num: 1.5,
            step_codename: "employment_details_1",
            form_name: "real_account_signup_form_outsystems"
        }
    })
}
l(X, "default");
var d = A; {
    let r = class r extends d.Controller.BaseViewController {
        constructor(e, s, t) {
            super(e, s, t, ye);
            var c = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _noOnClick$Action() {
            return this.hasOwnProperty("__noOnClick$Action") || (this.__noOnClick$Action = function(e) {
                var s = this.model,
                    t = this.controller,
                    c = this.idService;
                return d.Logger.startActiveSpan("NoOnClick", function(n) {
                    n && (n.setAttribute("code.function", "NoOnClick"), n.setAttribute("outsystems.function.key", "555d2383-12a3-4cb8-a51b-a675199148c6"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("NoOnClick"), e = t.callContext(e), o.setRealSignupNoTaxInformation(!0), d.Logger.startActiveSpan("RudderStack", function(a) {
                            a && (a.setAttribute("code.function", "RudderStack"), a.setAttribute("outsystems.function.key", "dd37f678-8cef-4156-9b9a-207254e9d6e9"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(G, "RudderStack", "NoOnClick", null, function(p) {}, {}, {})
                            } finally {
                                a && a.end()
                            }
                        }, 1), d.Navigation.navigateTo(d.Navigation.generateScreenURL("tradershub", "address-details", {}), d.Transitions.createTransition(d.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__noOnClick$Action
        }
        set _noOnClick$Action(e) {
            this.__noOnClick$Action = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var s = this.model,
                    t = this.controller,
                    c = this.idService;
                return d.Logger.startActiveSpan("OnInitialize", function(n) {
                    n && (n.setAttribute("code.function", "OnInitialize"), n.setAttribute("outsystems.function.key", "638d5f52-6058-44e6-8dac-22dcd9a12ab1"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e), s.variables.showTaxConfirmationPopupVar = !1
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        get _yesOnClick$Action() {
            return this.hasOwnProperty("__yesOnClick$Action") || (this.__yesOnClick$Action = function(e) {
                var s = this.model,
                    t = this.controller,
                    c = this.idService;
                return d.Logger.startActiveSpan("YesOnClick", function(n) {
                    n && (n.setAttribute("code.function", "YesOnClick"), n.setAttribute("outsystems.function.key", "7b2de32b-8ad0-46e6-bd9b-90ce2631f6ec"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("YesOnClick"), e = t.callContext(e), o.setRealSignupNoTaxInformation(!1), d.Logger.startActiveSpan("RudderStack", function(a) {
                            a && (a.setAttribute("code.function", "RudderStack"), a.setAttribute("outsystems.function.key", "b4a53941-a376-4adf-9908-f7ce648bbb0a"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(J, "RudderStack", "YesOnClick", null, function(p) {}, {}, {})
                            } finally {
                                a && a.end()
                            }
                        }, 1), d.Navigation.navigateTo(d.Navigation.generateScreenURL("tradershub", "employment-details/form", {}), d.Transitions.createTransition(d.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__yesOnClick$Action
        }
        set _yesOnClick$Action(e) {
            this.__yesOnClick$Action = e
        }
        get _listItemOnClick$Action() {
            return this.hasOwnProperty("__listItemOnClick$Action") || (this.__listItemOnClick$Action = function(e, s) {
                var t = this.model,
                    c = this.controller,
                    n = this.idService;
                return d.Logger.startActiveSpan("ListItemOnClick", function(a) {
                    a && (a.setAttribute("code.function", "ListItemOnClick"), a.setAttribute("outsystems.function.key", "8fb9ca14-2de1-46ba-91d0-e47772d8e8a4"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        c.ensureControllerAlive("ListItemOnClick"), s = c.callContext(s);
                        var p = new d.DataTypes.VariableHolder(new(c.constructor.getVariableGroupType("tradershub.RealAccountCreationBlocks.EmploymentDetailsMobileBlock.ListItemOnClick$vars")));
                        p.value.statusInLocal = e;
                        var _ = new d.DataTypes.VariableHolder;
                        if (o.setRealSignupEmployementStatus(p.value.statusInLocal), _.value = d.SystemActions.listIndexOf(t.variables.tINValidationsResponseIn.tin_validationsAttr.tin_employment_status_bypassAttr, function(g) {
                                return o.getRealSignupEmployementStatus() === g
                            }, s), _.value.positionOut > -1) t.variables.showTaxConfirmationPopupVar = !0;
                        else return d.Logger.startActiveSpan("RudderStack", function(g) {
                            g && (g.setAttribute("code.function", "RudderStack"), g.setAttribute("outsystems.function.key", "1752a726-f4c1-421c-becb-16ec83cfa759"), g.setAttribute("outsystems.function.owner.name", "tradershub"), g.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), g.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return c.safeExecuteJSNode(X, "RudderStack", "ListItemOnClick", null, function(i) {}, {}, {})
                            } finally {
                                g && g.end()
                            }
                        }, 1), o.setRealSignupPassedStepCount(o.getRealSignupIsIDVSupported() ? 4 : 3), d.Navigation.navigateTo(d.Navigation.generateScreenURL("tradershub", "employment-details/form", {}), d.Transitions.createTransition(d.Transitions.TransitionAnimation.Default), s, !0)
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__listItemOnClick$Action
        }
        set _listItemOnClick$Action(e) {
            this.__listItemOnClick$Action = e
        }
        get _popupCloseOnClick$Action() {
            return this.hasOwnProperty("__popupCloseOnClick$Action") || (this.__popupCloseOnClick$Action = function(e) {
                var s = this.model,
                    t = this.controller,
                    c = this.idService;
                return d.Logger.startActiveSpan("PopupCloseOnClick", function(n) {
                    n && (n.setAttribute("code.function", "PopupCloseOnClick"), n.setAttribute("outsystems.function.key", "96c4a22f-ff21-43bd-a194-eb82e2eff670"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("PopupCloseOnClick"), e = t.callContext(e), o.setRealSignupEmployementStatus(d.BuiltinFunctions.nullTextIdentifier()), s.variables.showTaxConfirmationPopupVar = !1
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__popupCloseOnClick$Action
        }
        set _popupCloseOnClick$Action(e) {
            this.__popupCloseOnClick$Action = e
        }
        noOnClick$Action(e) {
            var s = this.controller;
            return d.Logger.startActiveSpan("NoOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "NoOnClick"), t.setAttribute("outsystems.function.key", "555d2383-12a3-4cb8-a51b-a675199148c6"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return s.safeExecuteClientAction(s._noOnClick$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onInitialize$Action(e) {
            var s = this.controller;
            return d.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "638d5f52-6058-44e6-8dac-22dcd9a12ab1"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return s.safeExecuteClientAction(s._onInitialize$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        yesOnClick$Action(e) {
            var s = this.controller;
            return d.Logger.startActiveSpan("YesOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "YesOnClick"), t.setAttribute("outsystems.function.key", "7b2de32b-8ad0-46e6-bd9b-90ce2631f6ec"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return s.safeExecuteClientAction(s._yesOnClick$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        listItemOnClick$Action(e, s) {
            var t = this.controller;
            return d.Logger.startActiveSpan("ListItemOnClick__proxy", function(c) {
                c && (c.setAttribute("code.function", "ListItemOnClick"), c.setAttribute("outsystems.function.key", "8fb9ca14-2de1-46ba-91d0-e47772d8e8a4"), c.setAttribute("outsystems.function.owner.name", "tradershub"), c.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._listItemOnClick$Action, s, e)
                } finally {
                    c && c.end()
                }
            }, 0)
        }
        popupCloseOnClick$Action(e) {
            var s = this.controller;
            return d.Logger.startActiveSpan("PopupCloseOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "PopupCloseOnClick"), t.setAttribute("outsystems.function.key", "96c4a22f-ff21-43bd-a194-eb82e2eff670"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return s.safeExecuteClientAction(s._popupCloseOnClick$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var s = this.controller,
                    t = this.model,
                    c = this.idService;
                return s.onInitialize$Action(e)
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
            return ae.defaultTimeout
        }
    };
    l(r, "ControllerInner");
    let I = r;
    Y = I, Y.registerVariableGroupType("tradershub.RealAccountCreationBlocks.EmploymentDetailsMobileBlock.ListItemOnClick$vars", [{
        name: "Status",
        attrName: "statusInLocal",
        mandatory: !0,
        dataType: d.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }])
}
var Y, he = new d.Controller.ControllerFactory(Y, se);
var D = A,
    q = x.PlaceholderContent,
    Te = x.IteratorPlaceholderContent,
    R = class R extends E.BaseWebBlock {
        static get displayName() {
            return "RealAccountCreationBlocks.EmploymentDetailsMobileBlock"
        }
        static getAttributes() {
            return {
                codeFunction: "EmploymentDetailsMobileBlock",
                functionKey: "240ce745-2028-4274-a608-b6558e6a2b29",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.RealAccountCreationBlocks.EmploymentDetailsMobileBlock.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return be
        }
        get controllerFactory() {
            return he
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                u = this.controller,
                e = this.idService,
                s = u.validationService,
                t = this.widgetsRecordProvider,
                c = u.callContext(),
                n = R.ifWidget,
                a = R.textWidget,
                p = R.asPrimitiveValue,
                _ = R.getTranslation,
                g = this;
            return v.createElement("div", this.getRootNodeProperties(), v.createElement(y, {
                align: 0,
                animate: !1,
                style: "full-width",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, v.createElement(S, {
                extendedProperties: {
                    style: "font-size: 16px; margin-bottom: 0px;"
                },
                text: [a(_("HragfIjHc0Cps6Am_01KOw#Value", "Select your employment status"))],
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }), v.createElement(ue, {
                animateItems: !0,
                extendedProperties: {
                    style: "margin-top: 16px;"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                mode: 0,
                source: r.variables.employmentStatusListIn,
                style: "list list-group display-flex flex-direction-column gap-base",
                tag: "div",
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t,
                source_dataFetchStatus: D.Model.calculateDataFetchStatus(r.variables._employmentStatusListInDataFetchStatus),
                placeholders: {
                    content: new Te(function(i, b) {
                        return [v.createElement(de, {
                            extendedProperties: {
                                style: "background-color: #F8F9FA; border-color: #F1F3F5; border-radius: 4px; border-style: solid; border-width: 1px; cursor: pointer; padding: 16px;"
                            },
                            onClick: l(function() {
                                var N = b.clone();
                                u.listItemOnClick$Action(r.variables.employmentStatusListIn.getCurrent(b.iterationContext).labelAttr, u.callContext(N))
                            }, "onClick"),
                            style: "list-item",
                            triggerActionOnFullSwipeLeft: !1,
                            triggerActionOnFullSwipeRight: !1,
                            _idProps: {
                                service: i,
                                name: "ListItem1"
                            },
                            _widgetRecordProvider: t,
                            placeholders: {
                                leftActions: q.Empty,
                                content: new q(function() {
                                    return [v.createElement(y, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex justify-content-space-between align-items-center ",
                                        visible: !0,
                                        _idProps: {
                                            service: i,
                                            uuid: "4"
                                        },
                                        _widgetRecordProvider: t
                                    }, v.createElement(w, {
                                        extendedProperties: {
                                            style: "font-weight: 500;"
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        value: r.variables.employmentStatusListIn.getCurrent(b.iterationContext).labelAttr,
                                        _idProps: {
                                            service: i,
                                            uuid: "5"
                                        },
                                        _widgetRecordProvider: t,
                                        value_dataFetchStatus: D.Model.calculateDataFetchStatus(r.variables._employmentStatusListInDataFetchStatus)
                                    }), v.createElement($, {
                                        image: D.Navigation.VersionedURL.getVersionedUrl("img/tradershub.iconarrow.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: i,
                                            uuid: "6"
                                        },
                                        _widgetRecordProvider: t
                                    }))]
                                }),
                                rightActions: q.Empty
                            },
                            _dependencies: [p(r.variables._employmentStatusListInDataFetchStatus), p(r.variables.employmentStatusListIn.getCurrent(b.iterationContext).labelAttr)]
                        })]
                    }, c, e, "1")
                },
                _dependencies: [p(r.variables._employmentStatusListInDataFetchStatus)]
            })), v.createElement(ge, {
                extendedProperties: {
                    style: "border-radius: 8px; padding: 16px; width: calc(100% - 32px);"
                },
                showPopup: r.variables.showTaxConfirmationPopupVar,
                style: "popup-dialog ",
                _idProps: {
                    service: e,
                    uuid: "7"
                },
                _widgetRecordProvider: t
            }, v.createElement(y, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column gap-base",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "8"
                },
                _widgetRecordProvider: t
            }, v.createElement(y, {
                align: 0,
                animate: !1,
                style: "display-flex align-items-center justify-content-space-between",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "9"
                },
                _widgetRecordProvider: t
            }, v.createElement(S, {
                extendedProperties: {
                    style: "font-size: 16px; font-weight: bold;"
                },
                text: [a(_("dIuE3Avork6tOWGN7Vxl_w#Value", "Tax information"))],
                _idProps: {
                    service: e,
                    uuid: "10"
                },
                _widgetRecordProvider: t
            }), v.createElement(pe, {
                enabled: !0,
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                onClick: l(function() {
                    var i = c.clone();
                    u.popupCloseOnClick$Action(u.callContext(i))
                }, "onClick"),
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "11"
                },
                _widgetRecordProvider: t
            }, v.createElement($, {
                image: D.Navigation.VersionedURL.getVersionedUrl("img/tradershub.close.png"),
                style: "cursor-pointer",
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "12"
                },
                _widgetRecordProvider: t
            }))), a(_("8lnK3Aap7EuKYmmhAQjX3Q#Value", "Do you have a tax identification number?")), v.createElement(y, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column gap-s",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "13"
                },
                _widgetRecordProvider: t
            }, v.createElement(k, {
                enabled: !0,
                extendedProperties: {
                    style: "height: 32px;"
                },
                isDefault: !1,
                onClick: l(function() {
                    var i = c.clone();
                    u.yesOnClick$Action(u.callContext(i))
                }, "onClick"),
                style: "btn btn-primary",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "14"
                },
                _widgetRecordProvider: t
            }, a(_("UjgOn49vA0i5j0q_u3WkMQ#Value", "Yes"))), v.createElement(k, {
                enabled: !0,
                extendedProperties: {
                    style: "border-width: 1px; height: 32px;"
                },
                gridProperties: {
                    marginLeft: "0px"
                },
                isDefault: !1,
                onClick: l(function() {
                    var i = c.clone();
                    u.noOnClick$Action(u.callContext(i))
                }, "onClick"),
                style: "btn full-width",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "15"
                },
                _widgetRecordProvider: t
            }, a(_("vpfH7XxuIUaK72wKI4KFng#Value", "No")))))))
        }
    };
l(R, "View");
var Z = R,
    ee = Z;
var f = A,
    Ve = x.PlaceholderContent,
    De = x.IteratorPlaceholderContent,
    C = class C extends E.BaseWebScreen {
        static get displayName() {
            return "RealAccountCreation.EmploymentDetails"
        }
        static getAttributes() {
            return {
                codeFunction: "EmploymentDetails",
                functionKey: "a130d4db-0e20-4fc9-bdc5-c91a5dcbe757",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.RealAccountCreation.EmploymentDetails.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [M, H, K, ee]
        }
        get modelFactory() {
            return ve
        }
        get controllerFactory() {
            return _e
        }
        get title() {
            let r = this.model,
                u = this.controller,
                e = this.idService,
                s = u.validationService,
                t = u.callContext(),
                c = C.asPrimitiveValue,
                n = C.getTranslation,
                a = this;
            return f.Injector.resolve(f.ServiceNames.TranslationsService).getMessage("29QwoSAOyU+9xckaXcvnVw#TitleExpression.1571453000.1", "Employment details | Deriv")
        }
        internalRender() {
            let r = this.model,
                u = this.controller,
                e = this.idService,
                s = u.validationService,
                t = this.widgetsRecordProvider,
                c = u.callContext(),
                n = C.ifWidget,
                a = C.textWidget,
                p = C.asPrimitiveValue,
                _ = C.getTranslation,
                g = this;
            return m.createElement("div", this.getRootNodeProperties(), m.createElement(M, {
                getOwnerSpan: l(function() {
                    return g.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: l(function() {
                    return g.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Title: f.Injector.resolve(f.ServiceNames.TranslationsService).getMessage("Sf3eqgHzYEKXbrbmE0cN2g#Value.462242350.1", "Employment details"),
                    Analytics: r.getCachedValue(e.getId("7fJAmptkfkee4aRrg0ciVQ.Analytics"), function() {
                        return function() {
                            var i = new re;
                            return i.stepCodenameAttr = O.isDesktop$Action(c).isDesktopOut ? "employment_details" : "employment_details_1", i.stepNumberAttr = f.BuiltinFunctions.decimalToText(O.isDesktop$Action(c).isDesktopOut ? f.BuiltinFunctions.integerToDecimal(2) : new f.DataTypes.Decimal("1.5")), i
                        }()
                    }),
                    HideTitle: r.getCachedValue(e.getId("7fJAmptkfkee4aRrg0ciVQ.HideTitle"), function() {
                        return O.isPhone$Action(c).isPhoneOut
                    })
                },
                events: {
                    _handleError: l(function(i) {
                        u.handleError(i)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: s
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    content: new Ve(function() {
                        return [n(r.variables.isLoadingVar, !1, this, function() {
                            return [m.createElement(H, {
                                getOwnerSpan: l(function() {
                                    return g.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: l(function() {
                                    return g.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {},
                                events: {
                                    _handleError: l(function(i) {
                                        u.handleError(i)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: s
                                },
                                _idProps: {
                                    service: e,
                                    uuid: "1",
                                    alias: "2"
                                },
                                _widgetRecordProvider: t,
                                _dependencies: []
                            })]
                        }, function() {
                            return [m.createElement(y, {
                                align: 0,
                                animate: !0,
                                style: "full-width employment-details-section__desktop",
                                visible: r.getCachedValue(e.getId("msOK4dFT6U6zD5FQVOI44A.Visible"), function() {
                                    return O.isDesktop$Action(c).isDesktopOut
                                }),
                                _idProps: {
                                    service: e,
                                    uuid: "2"
                                },
                                _widgetRecordProvider: t
                            }, m.createElement(me, {
                                _validationProps: {
                                    validationService: s
                                },
                                extendedProperties: {
                                    style: "margin-top: 24px;"
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                style: "",
                                _idProps: {
                                    service: e,
                                    name: "Form"
                                },
                                _widgetRecordProvider: t
                            }, m.createElement(y, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "gap: 16px;"
                                },
                                style: "",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "4"
                                },
                                _widgetRecordProvider: t
                            }, m.createElement(y, {
                                align: 0,
                                animate: !1,
                                style: "",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    name: "EmploymentStatus"
                                },
                                _widgetRecordProvider: t
                            }, m.createElement(P, {
                                extendedProperties: {
                                    style: "font-size: 16px;"
                                },
                                mandatory: !0,
                                targetWidget: "EmployementStatusDropdown",
                                _idProps: {
                                    service: e,
                                    uuid: "6"
                                },
                                _widgetRecordProvider: t
                            }, m.createElement(S, {
                                extendedProperties: {
                                    style: "font-size: 16px;"
                                },
                                text: [a(_("5SP7yQndiUK8ROjQz1PMNQ#Value", "Employment status"))],
                                _idProps: {
                                    service: e,
                                    uuid: "7"
                                },
                                _widgetRecordProvider: t
                            }), m.createElement(S, {
                                extendedProperties: {
                                    style: "color: #DC2020; font-size: 16px;"
                                },
                                text: [a(_("ezIslYgwbE27zSK5JS29GQ#Value", "*"))],
                                _idProps: {
                                    service: e,
                                    uuid: "8"
                                },
                                _widgetRecordProvider: t
                            })), m.createElement(ce, {
                                _validationProps: {
                                    validationService: s,
                                    validationParentId: e.getId("Form")
                                },
                                dropdownMode: 1,
                                emptyValue: f.Injector.resolve(f.ServiceNames.TranslationsService).getMessage("iNTUIxji_kWGnwURD9BokQ#ValueExpression.1901430653.1", "Select your employment status"),
                                enabled: !0,
                                extendedProperties: {
                                    style: "font-size: 16px; margin-top: 8px;"
                                },
                                list: r.variables.employmentStatusLIstVar,
                                mandatory: !0,
                                onChange: l(function() {
                                    var i = c.clone();
                                    u.employementStatusDropdownOnChange$Action(!1, u.callContext(i))
                                }, "onChange"),
                                style: "dropdown",
                                values: l(function(i) {
                                    return i.labelAttr
                                }, "values"),
                                variable: r.createVariable(f.DataTypes.DataTypes.Text, o.getRealSignupEmployementStatus(), function(i) {
                                    o.setRealSignupEmployementStatus(i)
                                }),
                                _idProps: {
                                    service: e,
                                    name: "EmployementStatusDropdown"
                                },
                                _widgetRecordProvider: t,
                                placeholders: {
                                    content: new De(function(i, b) {
                                        return [m.createElement(w, {
                                            extendedProperties: {
                                                style: "font-size: 16px;"
                                            },
                                            value: r.variables.employmentStatusLIstVar.getCurrent(b.iterationContext).labelAttr,
                                            _idProps: {
                                                service: i,
                                                uuid: "10"
                                            },
                                            _widgetRecordProvider: t,
                                            _dependencies: []
                                        })]
                                    }, c, e, "1")
                                },
                                _dependencies: []
                            })), n(r.variables.canBypassTINStatusVar, !0, this, function() {
                                return [m.createElement(y, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "margin-top: 24px;"
                                    },
                                    style: "display-flex align-items-center checkbox-container",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "11"
                                    },
                                    _widgetRecordProvider: t
                                }, m.createElement(B, {
                                    _validationProps: {
                                        validationService: s,
                                        validationParentId: e.getId("Form")
                                    },
                                    enabled: !0,
                                    onChange: l(function() {
                                        var i = c.clone();
                                        u.noTaxIDNumberAvailableOnChange$Action(u.callContext(i))
                                    }, "onChange"),
                                    style: "checkbox",
                                    variable: r.createVariable(f.DataTypes.DataTypes.Boolean, o.getRealSignupNoTaxInformation(), function(i) {
                                        o.setRealSignupNoTaxInformation(i)
                                    }),
                                    _idProps: {
                                        service: e,
                                        name: "NoTaxIDNumberAvailable"
                                    },
                                    _widgetRecordProvider: t
                                }), m.createElement(P, {
                                    gridProperties: {
                                        classes: "OSFillParent",
                                        marginLeft: "8px"
                                    },
                                    style: "width-auto",
                                    targetWidget: "NoTaxIDNumberAvailable",
                                    _idProps: {
                                        service: e,
                                        uuid: "13"
                                    },
                                    _widgetRecordProvider: t
                                }, a(_("2jh9BaauS0u3Lm1QnLKoaQ#Value", "I don't have tax identification number."))))]
                            }, function() {
                                return []
                            }), m.createElement(y, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "margin-top: 24px;"
                                },
                                style: "",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    name: "TaxResidence"
                                },
                                _widgetRecordProvider: t
                            }, m.createElement(P, {
                                extendedProperties: {
                                    style: "font-size: 16px; margin-bottom: 8px;"
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                _idProps: {
                                    service: e,
                                    uuid: "15"
                                },
                                _widgetRecordProvider: t
                            }, m.createElement(S, {
                                extendedProperties: {
                                    style: "margin-bottom: 0px;"
                                },
                                text: [a(_("lB26u5rlDUi74ywSgRgf4g#Value", "Country of tax residence"))],
                                _idProps: {
                                    service: e,
                                    uuid: "16"
                                },
                                _widgetRecordProvider: t
                            }))), m.createElement(K, {
                                getOwnerSpan: l(function() {
                                    return g.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: l(function() {
                                    return g.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    OptionsList: r.getCachedValue(e.getId("ZDgxOoJ6BUGBMuO4tAjaWQ.OptionsList"), function() {
                                        return f.DataConversion.JSConversions.typeConvertRecordList(r.variables.residenceListVar, new F, function(i, b) {
                                            return b.valueAttr = i.valueAttr, b.labelAttr = i.textAttr, b
                                        })
                                    }, function() {
                                        return r.variables.residenceListVar
                                    }),
                                    StartingSelection: r.getCachedValue(e.getId("ZDgxOoJ6BUGBMuO4tAjaWQ.StartingSelection"), function() {
                                        return function() {
                                            var i = new F;
                                            return i.pushAll([function() {
                                                var b = new oe;
                                                return b.valueAttr = o.getRealSignupTaxResidence() !== f.BuiltinFunctions.nullTextIdentifier() ? o.getRealSignupTaxResidence() : o.getSelectedResidence(), b.labelAttr = o.getRealSignupTaxResidenceLabel() !== f.BuiltinFunctions.nullTextIdentifier() ? o.getRealSignupTaxResidenceLabel() : o.getSelectedResidenceLabel(), b
                                            }()]), i
                                        }()
                                    }, function() {
                                        return o.getRealSignupTaxResidence()
                                    }, function() {
                                        return o.getSelectedResidence()
                                    }, function() {
                                        return o.getRealSignupTaxResidenceLabel()
                                    }, function() {
                                        return o.getSelectedResidenceLabel()
                                    }),
                                    OptionalConfigs: r.getCachedValue(e.getId("ZDgxOoJ6BUGBMuO4tAjaWQ.OptionalConfigs"), function() {
                                        return function() {
                                            var i = new ne;
                                            return i.allowMultipleSelectionAttr = !1, i.isDisabledAttr = o.getRealSignupNoTaxInformation(), i.noResultsTextAttr = f.Injector.resolve(f.ServiceNames.TranslationsService).getMessage("VPODkQjDcEyzF7kF6kz2kA#Value.-397496305.1", "Nothing to show"), i.searchPromptAttr = f.Injector.resolve(f.ServiceNames.TranslationsService).getMessage("tmNWCG+8mkCIFutUeQUEVw#Value.-1822469688.1", "Search"), i.noOptionsTextAttr = f.Injector.resolve(f.ServiceNames.TranslationsService).getMessage("AezMJOsM+EuSgAsKB4hlVw#Value.-1076950967.1", "There are no options to show"), i
                                        }()
                                    }, function() {
                                        return o.getRealSignupNoTaxInformation()
                                    })
                                },
                                events: {
                                    _handleError: l(function(i) {
                                        u.handleError(i)
                                    }, "_handleError"),
                                    onChanged$Action: l(function(i, b) {
                                        return Promise.resolve().then(function() {
                                            var N = c.clone();
                                            return u.dropdownSearchOnChanged$Action(b, u.callContext(N))
                                        })
                                    }, "onChanged$Action")
                                },
                                _validationProps: {
                                    validationService: s,
                                    validationParentId: e.getId("Form")
                                },
                                _idProps: {
                                    service: e,
                                    uuid: "17",
                                    alias: "3"
                                },
                                _widgetRecordProvider: t,
                                _dependencies: []
                            }), m.createElement(y, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "margin-top: 24px;"
                                },
                                style: "",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    name: "TaxIdentificationNumber"
                                },
                                _widgetRecordProvider: t
                            }, m.createElement(P, {
                                mandatory: o.getIsEuUser(),
                                targetWidget: "Input_TIDNumber",
                                _idProps: {
                                    service: e,
                                    uuid: "19"
                                },
                                _widgetRecordProvider: t
                            }, m.createElement(S, {
                                extendedProperties: {
                                    style: "font-size: 16px;"
                                },
                                text: [a(_("AocUpANsh0W_CWSiruK04Q#Value", "Tax identification number"))],
                                _idProps: {
                                    service: e,
                                    uuid: "20"
                                },
                                _widgetRecordProvider: t
                            })), m.createElement(fe, {
                                _validationProps: {
                                    validationService: s,
                                    validationParentId: e.getId("Form")
                                },
                                enabled: !o.getRealSignupNoTaxInformation(),
                                extendedProperties: {
                                    style: "font-size: 16px; height: 48px; margin-top: 8px;"
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                inputType: 0,
                                mandatory: o.getIsEuUser(),
                                maxLength: 50,
                                onChange: l(function() {
                                    var i = c.clone();
                                    u.input_TIDNumberOnChange$Action(u.callContext(i))
                                }, "onChange"),
                                prompt: f.Injector.resolve(f.ServiceNames.TranslationsService).getMessage("oFr0gocw40CC3PYARYcV0Q#ValueExpression.135839553.1", "Enter your tax identification number"),
                                style: "form-control",
                                variable: r.createVariable(f.DataTypes.DataTypes.Text, o.getRealSignupTIDNumber(), function(i) {
                                    o.setRealSignupTIDNumber(i)
                                }),
                                _idProps: {
                                    service: e,
                                    name: "Input_TIDNumber"
                                },
                                _widgetRecordProvider: t
                            }))), n(o.getRealSignupTIDNumber() !== f.BuiltinFunctions.nullTextIdentifier() && !o.getRealSignupNoTaxInformation(), !1, this, function() {
                                return [m.createElement(y, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "margin-top: 24px;"
                                    },
                                    style: "display-flex gap-s align-items-center checkbox-container",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "22"
                                    },
                                    _widgetRecordProvider: t
                                }, m.createElement(B, {
                                    _validationProps: {
                                        validationService: s,
                                        validationParentId: e.getId("Form")
                                    },
                                    enabled: !0,
                                    style: "checkbox",
                                    variable: r.createVariable(f.DataTypes.DataTypes.Boolean, o.getRealSignupTaxIDConfirmation(), function(i) {
                                        o.setRealSignupTaxIDConfirmation(i)
                                    }),
                                    _idProps: {
                                        service: e,
                                        name: "TaxIDConfirmationCheckbox"
                                    },
                                    _widgetRecordProvider: t
                                }), m.createElement(P, {
                                    gridProperties: {
                                        classes: "OSFillParent"
                                    },
                                    style: "width-auto",
                                    targetWidget: "TaxIDConfirmationCheckbox",
                                    _idProps: {
                                        service: e,
                                        uuid: "24"
                                    },
                                    _widgetRecordProvider: t
                                }, a(_("GPnJGrYvDkSxDs3mRu7vfQ#Value", "I confirm that my tax information is accurate and complete.")))), n(!r.widgets.get(e.getId("TaxIDConfirmationCheckbox")).validAttr, !1, this, function() {
                                    return [m.createElement(S, {
                                        style: "text-primary",
                                        text: [a(_("ACqa4GSE9US9jN0w8J0CqQ#Value", "This is required."))],
                                        _idProps: {
                                            service: e,
                                            uuid: "25"
                                        },
                                        _widgetRecordProvider: t
                                    })]
                                }, function() {
                                    return []
                                })]
                            }, function() {
                                return []
                            }), m.createElement(y, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "margin-top: 24px;"
                                },
                                style: "display-flex justify-content-flex-end",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "26"
                                },
                                _widgetRecordProvider: t
                            }, m.createElement(k, {
                                enabled: !0,
                                extendedProperties: {
                                    style: "border-radius: 100px; border-width: 0px;"
                                },
                                gridProperties: {
                                    width: "100px"
                                },
                                isDefault: !0,
                                onClick: l(function() {
                                    g.validateWidget(e.getId("Form"));
                                    var i = c.clone();
                                    u.saveOnClick$Action(u.callContext(i))
                                }, "onClick"),
                                style: "btn btn-primary",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "27"
                                },
                                _widgetRecordProvider: t
                            }, a(_("wX+DwyzsU0W+0GXXbiOMiQ#Value", "Next")))))), m.createElement(y, {
                                align: 0,
                                animate: !0,
                                style: "full-width employment-details-section__mobile",
                                visible: r.getCachedValue(e.getId("AUqJK2AJRUCSqsrK2QbmRw.Visible"), function() {
                                    return !O.isDesktop$Action(c).isDesktopOut
                                }),
                                _idProps: {
                                    service: e,
                                    uuid: "28"
                                },
                                _widgetRecordProvider: t
                            }, m.createElement(ee, {
                                getOwnerSpan: l(function() {
                                    return g.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: l(function() {
                                    return g.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    EmploymentStatusList: r.variables.employmentStatusLIstVar,
                                    TINValidationsResponse: r.variables.tINValidationsResponseVar
                                },
                                events: {
                                    _handleError: l(function(i) {
                                        u.handleError(i)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: s
                                },
                                _idProps: {
                                    service: e,
                                    uuid: "29",
                                    alias: "4"
                                },
                                _widgetRecordProvider: t,
                                _dependencies: []
                            }))]
                        })]
                    })
                },
                _dependencies: [p(r.variables.tINValidationsResponseVar), p(r.widgets.get(e.getId("TaxIDConfirmationCheckbox")).validAttr), p(o.getRealSignupTaxIDConfirmation()), p(o.getRealSignupTIDNumber()), p(o.getIsEuUser()), p(o.getSelectedResidenceLabel()), p(o.getRealSignupTaxResidenceLabel()), p(o.getSelectedResidence()), p(o.getRealSignupTaxResidence()), p(r.variables.residenceListVar), p(o.getRealSignupNoTaxInformation()), p(r.variables.canBypassTINStatusVar), p(r.variables.employmentStatusLIstVar), p(o.getRealSignupEmployementStatus()), p(r.variables.isLoadingVar)]
            }))
        }
    };
l(C, "View");
var te = C,
    bt = te;
export {
    bt as
    default
};