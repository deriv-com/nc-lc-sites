import {
    a as I
} from "./_oschunk-S4T4FX3G.js";
import {
    a as x
} from "./_oschunk-22UUXQ4S.js";
import {
    a as L
} from "./_oschunk-QCCZFQH6.js";
import {
    a as M,
    b as W,
    d,
    n as A,
    r as B,
    s as z,
    u as O
} from "./_oschunk-OO36B6PN.js";
import {
    a as $
} from "./_oschunk-6WALBPGV.js";
import {
    a as ee,
    g as N,
    i as S
} from "./_oschunk-IL57OEHH.js";
import {
    a as U,
    o as F,
    p as _
} from "./_oschunk-DW3HXDMW.js";
import {
    a as k
} from "./_oschunk-JXJHSAQS.js";
import {
    ia as h
} from "./_oschunk-5KJVGEL7.js";
import {
    c as a,
    h as X
} from "./_oschunk-QHO7QY6K.js";
var o = X(ee());
var g = h,
    H = class H extends g.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsLogoutModalOpen", "isLogoutModalOpenVar", "IsLogoutModalOpen", !0, !1, g.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("isLoggedin", "isLoggedinVar", "isLoggedin", !0, !1, g.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("HasFixedHeader", "hasFixedHeaderIn", "HasFixedHeader", !0, !1, g.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_hasFixedHeaderInDataFetchStatus", "_hasFixedHeaderInDataFetchStatus", "_hasFixedHeaderInDataFetchStatus", !0, !1, g.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("EnableAccessibilityFeatures", "enableAccessibilityFeaturesIn", "EnableAccessibilityFeatures", !0, !1, g.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_enableAccessibilityFeaturesInDataFetchStatus", "_enableAccessibilityFeaturesInDataFetchStatus", "_enableAccessibilityFeaturesInDataFetchStatus", !0, !1, g.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, g.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, g.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(g.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(H, "VariablesRecord");
var P = H;
P.init();
var T = class T extends g.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(T, "WidgetsRecord");
var w = T,
    b = class b extends g.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return P
        }
        static getWidgetsRecordConstructor() {
            return w
        }
        static get hasValidationWidgets() {
            return b._hasValidationWidgetsValue === void 0 && (b._hasValidationWidgetsValue = void 0 || void 0 || void 0), b._hasValidationWidgetsValue
        }
        setInputs(i) {
            "HasFixedHeader" in i && (this.variables.hasFixedHeaderIn = i.HasFixedHeader, "_hasFixedHeaderInDataFetchStatus" in i && (this.variables._hasFixedHeaderInDataFetchStatus = i._hasFixedHeaderInDataFetchStatus)), "EnableAccessibilityFeatures" in i && (this.variables.enableAccessibilityFeaturesIn = i.EnableAccessibilityFeatures, "_enableAccessibilityFeaturesInDataFetchStatus" in i && (this.variables._enableAccessibilityFeaturesInDataFetchStatus = i._enableAccessibilityFeaturesInDataFetchStatus)), "ExtendedClass" in i && (this.variables.extendedClassIn = i.ExtendedClass, "_extendedClassInDataFetchStatus" in i && (this.variables._extendedClassInDataFetchStatus = i._extendedClassInDataFetchStatus))
        }
    };
a(b, "Model");
var p = b;
p._hasValidationWidgetsValue = void 0;
var G = new g.Model.ModelFactory(p);
var te = {
        "W7Kh4ThM_UWNlBaPdD6URg#Value": "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644",
        "oiMnGVHyYUyzhvGIqB3aNQ#Value": "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C",
        "Ki5BxBoDTkOa4g55lJmHrw#Value.2011110042.1": "\u0625\u0644\u063A\u0627\u0621",
        "+by514qXEUmhswcRfSZcJA#Value.-1272307305.1": "\u0646\u0639\u0645\u060C \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C",
        "RzfRPsfq0U+UE_D6UKErng#Value": "\u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0623\u0646\u0643 \u062A\u0631\u064A\u062F \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C\u061F"
    },
    re = {
        "W7Kh4ThM_UWNlBaPdD6URg#Value": "Einloggen",
        "oiMnGVHyYUyzhvGIqB3aNQ#Value": "Abmelden",
        "Ki5BxBoDTkOa4g55lJmHrw#Value.2011110042.1": "Abbrechen",
        "+by514qXEUmhswcRfSZcJA#Value.-1272307305.1": "Ja, abmelden",
        "RzfRPsfq0U+UE_D6UKErng#Value": "Bist du sicher, dass du dich abmelden m\xF6chtest?"
    },
    ne = {
        "W7Kh4ThM_UWNlBaPdD6URg#Value": "Iniciar sesi\xF3n",
        "oiMnGVHyYUyzhvGIqB3aNQ#Value": "Cerrar sesi\xF3n",
        "Ki5BxBoDTkOa4g55lJmHrw#Value.2011110042.1": "Cancelar",
        "+by514qXEUmhswcRfSZcJA#Value.-1272307305.1": "S\xED, cerrar sesi\xF3n",
        "RzfRPsfq0U+UE_D6UKErng#Value": "\xBFEst\xE1s seguro de que quieres cerrar sesi\xF3n?"
    },
    ie = {
        "W7Kh4ThM_UWNlBaPdD6URg#Value": "Se connecter",
        "oiMnGVHyYUyzhvGIqB3aNQ#Value": "Se d\xE9connecter",
        "Ki5BxBoDTkOa4g55lJmHrw#Value.2011110042.1": "Annuler",
        "+by514qXEUmhswcRfSZcJA#Value.-1272307305.1": "Oui, d\xE9connecter",
        "RzfRPsfq0U+UE_D6UKErng#Value": "Souhaitez-vous vraiment vous d\xE9connecter?"
    },
    oe = {
        "W7Kh4ThM_UWNlBaPdD6URg#Value": "Accedi",
        "oiMnGVHyYUyzhvGIqB3aNQ#Value": "Esci",
        "Ki5BxBoDTkOa4g55lJmHrw#Value.2011110042.1": "Annulla",
        "+by514qXEUmhswcRfSZcJA#Value.-1272307305.1": "S\xEC, termina sessione",
        "RzfRPsfq0U+UE_D6UKErng#Value": "Sei sicuro di voler disconnetterti?"
    },
    ae = {
        "W7Kh4ThM_UWNlBaPdD6URg#Value": "Zaloguj si\u0119",
        "oiMnGVHyYUyzhvGIqB3aNQ#Value": "Wyloguj si\u0119",
        "Ki5BxBoDTkOa4g55lJmHrw#Value.2011110042.1": "Anuluj",
        "+by514qXEUmhswcRfSZcJA#Value.-1272307305.1": "Tak, wyloguj",
        "RzfRPsfq0U+UE_D6UKErng#Value": "Czy na pewno chcesz si\u0119 wylogowa\u0107?"
    },
    se = {
        "W7Kh4ThM_UWNlBaPdD6URg#Value": "Iniciar sess\xE3o",
        "oiMnGVHyYUyzhvGIqB3aNQ#Value": "Terminar sess\xE3o",
        "Ki5BxBoDTkOa4g55lJmHrw#Value.2011110042.1": "Cancelar",
        "+by514qXEUmhswcRfSZcJA#Value.-1272307305.1": "Sim, pretendo terminar sess\xE3o",
        "RzfRPsfq0U+UE_D6UKErng#Value": "Tem certeza de que deseja terminar sess\xE3o?"
    },
    le = {
        "W7Kh4ThM_UWNlBaPdD6URg#Value": "\u0412\u0445\u043E\u0434",
        "oiMnGVHyYUyzhvGIqB3aNQ#Value": "\u0412\u044B\u0439\u0442\u0438",
        "Ki5BxBoDTkOa4g55lJmHrw#Value.2011110042.1": "\u041E\u0442\u043C\u0435\u043D\u0430",
        "+by514qXEUmhswcRfSZcJA#Value.-1272307305.1": "\u0414\u0430, \u0432\u044B\u0439\u0442\u0438",
        "RzfRPsfq0U+UE_D6UKErng#Value": "\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0432\u044B\u0439\u0442\u0438?"
    },
    j = {
        "ar-001": {
            translations: te,
            isRTL: !0
        },
        "de-DE": {
            translations: re,
            isRTL: !1
        },
        "es-ES": {
            translations: ne,
            isRTL: !1
        },
        "fr-FR": {
            translations: ie,
            isRTL: !1
        },
        "it-IT": {
            translations: oe,
            isRTL: !1
        },
        "pl-PL": {
            translations: ae,
            isRTL: !1
        },
        "pt-PT": {
            translations: se,
            isRTL: !1
        },
        "ru-RU": {
            translations: le,
            isRTL: !1
        }
    };

function D(C, i, l) {
    function t() {
        var n = "b1-PartnershubTitle",
            e = "/PartnersHub/PartnersHubDashboard",
            u = window.location.pathname;
        if (u.includes(e)) {
            var r = document.getElementById(n);
            r && (r.style.fontWeight = "bold")
        }
    }
    a(t, "styleTitleOnPath"), t()
}
a(D, "default");
var s = h; {
    let i = class i extends s.Controller.BaseViewController {
        constructor(t, n, e) {
            super(t, n, e, j);
            var u = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _onClickRedirectToDashboard$Action() {
            return this.hasOwnProperty("__onClickRedirectToDashboard$Action") || (this.__onClickRedirectToDashboard$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    u = this.idService;
                return s.Logger.startActiveSpan("OnClickRedirectToDashboard", function(r) {
                    r && (r.setAttribute("code.function", "OnClickRedirectToDashboard"), r.setAttribute("outsystems.function.key", "0e6a9c15-74ff-4986-8c3e-2ae56aa98475"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return e.ensureControllerAlive("OnClickRedirectToDashboard"), t = e.callContext(t), s.Navigation.navigateTo(s.Navigation.generateScreenURL("PartnersHub", "PartnersHubDashboard", {}), s.Transitions.createTransition(s.Transitions.TransitionAnimation.Default), t, !0)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onClickRedirectToDashboard$Action
        }
        set _onClickRedirectToDashboard$Action(t) {
            this.__onClickRedirectToDashboard$Action = t
        }
        get _openLogoutModal$Action() {
            return this.hasOwnProperty("__openLogoutModal$Action") || (this.__openLogoutModal$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    u = this.idService;
                return s.Logger.startActiveSpan("OpenLogoutModal", function(r) {
                    r && (r.setAttribute("code.function", "OpenLogoutModal"), r.setAttribute("outsystems.function.key", "0ee17edd-2fdb-4b47-acdf-751c4ee0aa60"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OpenLogoutModal"), t = e.callContext(t), n.variables.isLogoutModalOpenVar = !0
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__openLogoutModal$Action
        }
        set _openLogoutModal$Action(t) {
            this.__openLogoutModal$Action = t
        }
        get _onRender$Action() {
            return this.hasOwnProperty("__onRender$Action") || (this.__onRender$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    u = this.idService;
                return s.Logger.startActiveSpan("OnRender", function(r) {
                    r && (r.setAttribute("code.function", "OnRender"), r.setAttribute("outsystems.function.key", "19bf3675-bf94-49e1-8aea-8342e36d2657"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnRender"), t = e.callContext(t), s.Logger.startActiveSpan("JavaScript1", function(f) {
                            f && (f.setAttribute("code.function", "JavaScript1"), f.setAttribute("outsystems.function.key", "f041a487-5049-48fd-82c4-af82bab66204"), f.setAttribute("outsystems.function.owner.name", "PartnersHub"), f.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), f.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(D, "JavaScript1", "OnRender", null, function(R) {}, {}, {})
                            } finally {
                                f && f.end()
                            }
                        }, 1)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onRender$Action
        }
        set _onRender$Action(t) {
            this.__onRender$Action = t
        }
        get _onClickLogout$Action() {
            return this.hasOwnProperty("__onClickLogout$Action") || (this.__onClickLogout$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    u = this.idService;
                return s.Logger.startActiveSpan("OnClickLogout", function(r) {
                    return r && (r.setAttribute("code.function", "OnClickLogout"), r.setAttribute("outsystems.function.key", "1ef51c0d-d64d-46a5-bcdc-9a0e9c38089e"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), s.Flow.tryFinally(function() {
                        return e.ensureControllerAlive("OnClickLogout"), t = e.callContext(t), s.Flow.executeAsyncFlow(function() {
                            return n.variables.isLogoutModalOpenVar = !0, n.flush(), _.iFrameLogout$Action(t)
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__onClickLogout$Action
        }
        set _onClickLogout$Action(t) {
            this.__onClickLogout$Action = t
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    u = this.idService;
                return s.Logger.startActiveSpan("OnInitialize", function(r) {
                    r && (r.setAttribute("code.function", "OnInitialize"), r.setAttribute("outsystems.function.key", "4d236ec7-2646-43df-a4fb-6ae23a89583e"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnInitialize"), t = e.callContext(t);
                        var f = new s.DataTypes.VariableHolder,
                            R = new s.DataTypes.VariableHolder;
                        _.useDevice$Action(t), _.mountDerivAPIClient$Action(t), f.value = _.isUserLoggedIn$Action(t), n.variables.isLoggedinVar = f.value.isLoggedInOut, R.value = F.addFavicon$Action("favicon.ico", t)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(t) {
            this.__onInitialize$Action = t
        }
        get _logInOnClick$Action() {
            return this.hasOwnProperty("__logInOnClick$Action") || (this.__logInOnClick$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    u = this.idService;
                return s.Logger.startActiveSpan("LogInOnClick", function(r) {
                    r && (r.setAttribute("code.function", "LogInOnClick"), r.setAttribute("outsystems.function.key", "a2a80b23-342d-4a0a-adb7-39bc291294de"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("LogInOnClick"), t = e.callContext(t), _.redirectToOauth$Action(t)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__logInOnClick$Action
        }
        set _logInOnClick$Action(t) {
            this.__logInOnClick$Action = t
        }
        get _closeLogoutModal$Action() {
            return this.hasOwnProperty("__closeLogoutModal$Action") || (this.__closeLogoutModal$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    u = this.idService;
                return s.Logger.startActiveSpan("CloseLogoutModal", function(r) {
                    r && (r.setAttribute("code.function", "CloseLogoutModal"), r.setAttribute("outsystems.function.key", "a5afc795-3048-4c55-9271-2ba0c7d668f6"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("CloseLogoutModal"), t = e.callContext(t), n.variables.isLogoutModalOpenVar = !1
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__closeLogoutModal$Action
        }
        set _closeLogoutModal$Action(t) {
            this.__closeLogoutModal$Action = t
        }
        onClickRedirectToDashboard$Action(t) {
            var n = this.controller;
            return s.Logger.startActiveSpan("OnClickRedirectToDashboard__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnClickRedirectToDashboard"), e.setAttribute("outsystems.function.key", "0e6a9c15-74ff-4986-8c3e-2ae56aa98475"), e.setAttribute("outsystems.function.owner.name", "PartnersHub"), e.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onClickRedirectToDashboard$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        openLogoutModal$Action(t) {
            var n = this.controller;
            return s.Logger.startActiveSpan("OpenLogoutModal__proxy", function(e) {
                e && (e.setAttribute("code.function", "OpenLogoutModal"), e.setAttribute("outsystems.function.key", "0ee17edd-2fdb-4b47-acdf-751c4ee0aa60"), e.setAttribute("outsystems.function.owner.name", "PartnersHub"), e.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._openLogoutModal$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onRender$Action(t) {
            var n = this.controller;
            return s.Logger.startActiveSpan("OnRender__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnRender"), e.setAttribute("outsystems.function.key", "19bf3675-bf94-49e1-8aea-8342e36d2657"), e.setAttribute("outsystems.function.owner.name", "PartnersHub"), e.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onRender$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onClickLogout$Action(t) {
            var n = this.controller;
            return s.Logger.startActiveSpan("OnClickLogout__proxy", function(e) {
                return e && (e.setAttribute("code.function", "OnClickLogout"), e.setAttribute("outsystems.function.key", "1ef51c0d-d64d-46a5-bcdc-9a0e9c38089e"), e.setAttribute("outsystems.function.owner.name", "PartnersHub"), e.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), s.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onClickLogout$Action, t)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        onInitialize$Action(t) {
            var n = this.controller;
            return s.Logger.startActiveSpan("OnInitialize__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnInitialize"), e.setAttribute("outsystems.function.key", "4d236ec7-2646-43df-a4fb-6ae23a89583e"), e.setAttribute("outsystems.function.owner.name", "PartnersHub"), e.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onInitialize$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        logInOnClick$Action(t) {
            var n = this.controller;
            return s.Logger.startActiveSpan("LogInOnClick__proxy", function(e) {
                e && (e.setAttribute("code.function", "LogInOnClick"), e.setAttribute("outsystems.function.key", "a2a80b23-342d-4a0a-adb7-39bc291294de"), e.setAttribute("outsystems.function.owner.name", "PartnersHub"), e.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._logInOnClick$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        closeLogoutModal$Action(t) {
            var n = this.controller;
            return s.Logger.startActiveSpan("CloseLogoutModal__proxy", function(e) {
                e && (e.setAttribute("code.function", "CloseLogoutModal"), e.setAttribute("outsystems.function.key", "a5afc795-3048-4c55-9271-2ba0c7d668f6"), e.setAttribute("outsystems.function.owner.name", "PartnersHub"), e.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._closeLogoutModal$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(t) {
                var n = this.controller,
                    e = this.model,
                    u = this.idService;
                return n.onInitialize$Action(t)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(t) {
            this._onInitializeEventHandler = t
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = null), this._onReadyEventHandler
        }
        set onReadyEventHandler(t) {
            this._onReadyEventHandler = t
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = function(t) {
                var n = this.controller,
                    e = this.model,
                    u = this.idService;
                return n.onRender$Action(t)
            }), this._onRenderEventHandler
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
            return _.defaultTimeout
        }
    };
    a(i, "ControllerInner");
    let C = i;
    Y = C
}
var Y, Z = new s.Controller.ControllerFactory(Y, $);
var m = h,
    Q = S.PlaceholderContent,
    Be = S.IteratorPlaceholderContent,
    v = class v extends N.BaseWebBlock {
        static get displayName() {
            return "Layouts.LayoutEndpointPage"
        }
        static getAttributes() {
            return {
                codeFunction: "LayoutEndpointPage",
                functionKey: "d0ec6690-14da-4144-a86a-1dd09537877f",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Layouts.LayoutEndpointPage.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [L, x, I]
        }
        get modelFactory() {
            return G
        }
        get controllerFactory() {
            return Z
        }
        get title() {
            return ""
        }
        internalRender() {
            let i = this.model,
                l = this.controller,
                t = this.idService,
                n = l.validationService,
                e = this.widgetsRecordProvider,
                u = l.callContext(),
                r = v.ifWidget,
                f = v.textWidget,
                R = v.asPrimitiveValue,
                E = v.getTranslation,
                y = this;
            return o.createElement("div", this.getRootNodeProperties(), o.createElement(B, {
                extendedProperties: {
                    style: "border-radius: 8px; padding: 20px; width: 400px;"
                },
                showPopup: i.variables.isLogoutModalOpenVar,
                style: "popup-dialog",
                _idProps: {
                    service: t,
                    uuid: "0"
                },
                _widgetRecordProvider: e
            }, o.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "display: flex; flex-direction: column; gap: 20px;"
                },
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "1"
                },
                _widgetRecordProvider: e
            }, o.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: center; display: flex; justify-content: space-between;"
                },
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "2"
                },
                _widgetRecordProvider: e
            }, o.createElement(O, {
                extendedProperties: {
                    style: "font-size: 16px; font-weight: bold;"
                },
                text: [f(E("RzfRPsfq0U+UE_D6UKErng#Value", "Are you sure you want to log out?"))],
                _idProps: {
                    service: t,
                    uuid: "3"
                },
                _widgetRecordProvider: e
            }), o.createElement(A, {
                extendedEvents: {
                    onClick: a(function() {
                        var c = u.clone();
                        l.closeLogoutModal$Action(l.callContext(c))
                    }, "onClick")
                },
                extendedProperties: {
                    style: "cursor: pointer;"
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                image: m.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.closenormal.png"),
                type: 0,
                _idProps: {
                    service: t,
                    uuid: "4"
                },
                _widgetRecordProvider: e
            })), o.createElement(d, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: a(function() {
                        return Promise.resolve().then(function() {
                            var c = u.clone();
                            return l.onClickLogout$Action(l.callContext(c))
                        })
                    }, "onClick")
                },
                extendedProperties: {
                    style: "display: flex; flex-direction: column; gap: 8px;"
                },
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "5"
                },
                _widgetRecordProvider: e
            }, o.createElement(d, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "6"
                },
                _widgetRecordProvider: e
            }, o.createElement(L, {
                getOwnerSpan: a(function() {
                    return y.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return y.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Width: "100%",
                    height: "40px",
                    title: m.Injector.resolve(m.ServiceNames.TranslationsService).getMessage("+by514qXEUmhswcRfSZcJA#Value.-1272307305.1", "Yes, log out")
                },
                events: {
                    _handleError: a(function(c) {
                        l.handleError(c)
                    }, "_handleError"),
                    onClick$Action: a(function() {
                        return Promise.resolve().then(function() {
                            var c = u.clone();
                            return l.onClickLogout$Action(l.callContext(c))
                        })
                    }, "onClick$Action")
                },
                _validationProps: {
                    validationService: n
                },
                _idProps: {
                    service: t,
                    uuid: "7",
                    alias: "1"
                },
                _widgetRecordProvider: e,
                _dependencies: []
            })), o.createElement(d, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "8"
                },
                _widgetRecordProvider: e
            }, o.createElement(x, {
                getOwnerSpan: a(function() {
                    return y.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return y.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    BorderColor: "#FF444F",
                    title: m.Injector.resolve(m.ServiceNames.TranslationsService).getMessage("Ki5BxBoDTkOa4g55lJmHrw#Value.2011110042.1", "Cancel"),
                    height: "40px",
                    Width: "100%",
                    borderRadius: "100px"
                },
                events: {
                    _handleError: a(function(c) {
                        l.handleError(c)
                    }, "_handleError"),
                    onClick$Action: a(function() {
                        var c = u.clone();
                        l.closeLogoutModal$Action(l.callContext(c))
                    }, "onClick$Action")
                },
                _validationProps: {
                    validationService: n
                },
                _idProps: {
                    service: t,
                    uuid: "9",
                    alias: "2"
                },
                _widgetRecordProvider: e,
                _dependencies: []
            }))))), o.createElement(d, {
                align: 0,
                animate: !1,
                style: i.getCachedValue(t.getId("LayoutWrapper.Style"), function() {
                    return "layout layout-blank" + (i.variables.hasFixedHeaderIn ? " fixed-header" : "") + (i.variables.enableAccessibilityFeaturesIn ? " has-accessible-features" : "") + (i.variables.extendedClassIn === "" ? "" : " " + i.variables.extendedClassIn)
                }, function() {
                    return i.variables.hasFixedHeaderIn
                }, function() {
                    return i.variables.enableAccessibilityFeaturesIn
                }, function() {
                    return i.variables.extendedClassIn
                }),
                visible: !0,
                _idProps: {
                    service: t,
                    name: "LayoutWrapper"
                },
                _widgetRecordProvider: e,
                style_dataFetchStatus: m.Model.calculateDataFetchStatus(i.variables._hasFixedHeaderInDataFetchStatus, i.variables._enableAccessibilityFeaturesInDataFetchStatus, i.variables._extendedClassInDataFetchStatus)
            }, o.createElement(d, {
                align: 0,
                animate: !1,
                style: "main",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "11"
                },
                _widgetRecordProvider: e
            }, o.createElement(M, {
                extendedProperties: {
                    role: "banner",
                    className: "header"
                },
                tag: "header",
                _idProps: {
                    service: t,
                    name: "Header2"
                },
                _widgetRecordProvider: e
            }, o.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: center; display: flex; flex-shrink: 0; height: 48px; justify-content: space-between; padding: 16px;"
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "100%"
                },
                style: "header-top",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "13"
                },
                _widgetRecordProvider: e
            }, o.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: center; cursor: pointer; display: flex; gap: 16px; text-align: right;"
                },
                style: "left-header",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "14"
                },
                _widgetRecordProvider: e
            }, o.createElement(A, {
                extendedEvents: {
                    onClick: a(function() {
                        var c = u.clone();
                        l.onClickRedirectToDashboard$Action(l.callContext(c))
                    }, "onClick")
                },
                extendedProperties: {
                    style: "height: 18px;"
                },
                gridProperties: {
                    width: "130px",
                    marginLeft: "0"
                },
                image: m.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.DashboardPartnersLogo.svg"),
                type: 0,
                _idProps: {
                    service: t,
                    uuid: "15"
                },
                _widgetRecordProvider: e
            })), r(i.variables.isLoggedinVar, !1, this, function() {
                return [o.createElement(d, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "display: flex; gap: 32px; justify-content: center; margin-right: 10px;"
                    },
                    style: "display-flex align-items-center",
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "16"
                    },
                    _widgetRecordProvider: e
                }, r(U.getIsDesktop(), !1, this, function() {
                    return [o.createElement(I, {
                        getOwnerSpan: a(function() {
                            return y.getChildSpan("render")
                        }, "getOwnerSpan"),
                        getOwnerDisposeSpan: a(function() {
                            return y.getChildSpan("destroy")
                        }, "getOwnerDisposeSpan"),
                        inputs: {
                            Position: k.position.bottom
                        },
                        events: {
                            _handleError: a(function(c) {
                                l.handleError(c)
                            }, "_handleError")
                        },
                        _validationProps: {
                            validationService: n
                        },
                        _idProps: {
                            service: t,
                            uuid: "17",
                            alias: "3"
                        },
                        _widgetRecordProvider: e,
                        placeholders: {
                            content: new Q(function() {
                                return [o.createElement(d, {
                                    align: 0,
                                    animate: !1,
                                    extendedEvents: {
                                        onClick: a(function() {
                                            var c = u.clone();
                                            l.openLogoutModal$Action(l.callContext(c))
                                        }, "onClick")
                                    },
                                    extendedProperties: {
                                        style: "cursor: pointer;"
                                    },
                                    visible: !0,
                                    _idProps: {
                                        service: t,
                                        uuid: "18"
                                    },
                                    _widgetRecordProvider: e
                                }, o.createElement(A, {
                                    gridProperties: {
                                        width: "22px"
                                    },
                                    image: m.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.logout.svg"),
                                    type: 0,
                                    _idProps: {
                                        service: t,
                                        uuid: "19"
                                    },
                                    _widgetRecordProvider: e
                                }))]
                            }),
                            tooltip: new Q(function() {
                                return [o.createElement(d, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "text-align: center;"
                                    },
                                    visible: !0,
                                    _idProps: {
                                        service: t,
                                        uuid: "20"
                                    },
                                    _widgetRecordProvider: e
                                }, f(E("oiMnGVHyYUyzhvGIqB3aNQ#Value", "Log out")))]
                            })
                        },
                        _dependencies: []
                    })]
                }, function() {
                    return [o.createElement(d, {
                        align: 0,
                        animate: !1,
                        extendedEvents: {
                            onClick: a(function() {
                                var c = u.clone();
                                l.openLogoutModal$Action(l.callContext(c))
                            }, "onClick")
                        },
                        extendedProperties: {
                            style: "cursor: pointer;"
                        },
                        visible: !0,
                        _idProps: {
                            service: t,
                            uuid: "21"
                        },
                        _widgetRecordProvider: e
                    }, o.createElement(A, {
                        gridProperties: {
                            width: "22px"
                        },
                        image: m.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.logout.svg"),
                        type: 0,
                        _idProps: {
                            service: t,
                            uuid: "22"
                        },
                        _widgetRecordProvider: e
                    }))]
                }))]
            }, function() {
                return [o.createElement(d, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "display: flex; gap: 32px; justify-content: center;"
                    },
                    style: "display-flex align-items-center",
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "23"
                    },
                    _widgetRecordProvider: e
                }, o.createElement(W, {
                    enabled: !0,
                    isDefault: !1,
                    onClick: a(function() {
                        var c = u.clone();
                        l.logInOnClick$Action(l.callContext(c))
                    }, "onClick"),
                    style: "login-button",
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "24"
                    },
                    _widgetRecordProvider: e
                }, o.createElement(O, {
                    extendedProperties: {
                        style: "color: #FF444F; font-weight: bold;"
                    },
                    text: [f(E("W7Kh4ThM_UWNlBaPdD6URg#Value", "Log in"))],
                    _idProps: {
                        service: t,
                        uuid: "25"
                    },
                    _widgetRecordProvider: e
                })))]
            }))), o.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "height: 100%;"
                },
                style: "",
                visible: !0,
                _idProps: {
                    service: t,
                    name: "Content"
                },
                _widgetRecordProvider: e
            }, o.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    role: "main",
                    style: "height: 100%;"
                },
                style: "main-content",
                visible: !0,
                _idProps: {
                    service: t,
                    name: "MainContentWrapper"
                },
                _widgetRecordProvider: e
            }, o.createElement(z, {
                align: 0,
                content: y.props.placeholders.mainContent,
                style: "dashboard",
                _idProps: {
                    service: t,
                    name: "MainContent"
                },
                _widgetRecordProvider: e
            }))))))
        }
    };
a(v, "View");
var V = v,
    ze = V;
export {
    ze as a
};