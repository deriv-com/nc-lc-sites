import {
    a as H,
    b as A
} from "./_oschunk-6RCCOD74.js";
import {
    a as U
} from "./_oschunk-7SYLUYK7.js";
import {
    a as B
} from "./_oschunk-UZGD3HJ2.js";
import {
    a as M
} from "./_oschunk-L6JZD7VU.js";
import {
    f as g,
    h as W,
    m as w,
    n as C,
    p as ee,
    q as L,
    s as te,
    u as R
} from "./_oschunk-VR5BNL2K.js";
import {
    a as ge,
    g as F,
    m as q,
    o as X,
    q as j,
    r as J,
    s as Q,
    t as Y
} from "./_oschunk-4VHUVDBV.js";
import {
    a as Z
} from "./_oschunk-KXORGPRQ.js";
import {
    Hb as z,
    Qb as x,
    Sb as T,
    a as f,
    ub as c
} from "./_oschunk-Z7QRTJDJ.js";
import {
    I as y,
    W as V,
    c as o,
    e as de,
    p as b
} from "./_oschunk-M5BUVJ72.js";
var m = V,
    $ = class $ extends m.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, m.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("ShouldShowStopOnBoarding", "shouldShowStopOnBoardingVar", "ShouldShowStopOnBoarding", !0, !1, m.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("Title", "titleIn", "Title", !0, !1, m.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_titleInDataFetchStatus", "_titleInDataFetchStatus", "_titleInDataFetchStatus", !0, !1, m.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ShouldEmitPreviousEvent", "shouldEmitPreviousEventIn", "ShouldEmitPreviousEvent", !0, !1, m.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_shouldEmitPreviousEventInDataFetchStatus", "_shouldEmitPreviousEventInDataFetchStatus", "_shouldEmitPreviousEventInDataFetchStatus", !0, !1, m.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("shouldShowProgressBarInMobile", "shouldShowProgressBarInMobileIn", "shouldShowProgressBarInMobile", !0, !1, m.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_shouldShowProgressBarInMobileInDataFetchStatus", "_shouldShowProgressBarInMobileInDataFetchStatus", "_shouldShowProgressBarInMobileInDataFetchStatus", !0, !1, m.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ProgressBarPercentage", "progressBarPercentageIn", "ProgressBarPercentage", !0, !1, m.DataTypes.DataTypes.Integer, function() {
                return 0
            }, !1), this.attr("_progressBarPercentageInDataFetchStatus", "_progressBarPercentageInDataFetchStatus", "_progressBarPercentageInDataFetchStatus", !0, !1, m.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HideBackButton", "hideBackButtonIn", "HideBackButton", !0, !1, m.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_hideBackButtonInDataFetchStatus", "_hideBackButtonInDataFetchStatus", "_hideBackButtonInDataFetchStatus", !0, !1, m.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(m.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
o($, "VariablesRecord");
var k = $;
k.init();
var K = class K extends m.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
o(K, "WidgetsRecord");
var N = K,
    I = class I extends m.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return k
        }
        static getWidgetsRecordConstructor() {
            return N
        }
        static get hasValidationWidgets() {
            return I._hasValidationWidgetsValue === void 0 && (I._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0 || void 0), I._hasValidationWidgetsValue
        }
        setInputs(d) {
            "Title" in d && (this.variables.titleIn = d.Title, "_titleInDataFetchStatus" in d && (this.variables._titleInDataFetchStatus = d._titleInDataFetchStatus)), "ShouldEmitPreviousEvent" in d && (this.variables.shouldEmitPreviousEventIn = d.ShouldEmitPreviousEvent, "_shouldEmitPreviousEventInDataFetchStatus" in d && (this.variables._shouldEmitPreviousEventInDataFetchStatus = d._shouldEmitPreviousEventInDataFetchStatus)), "shouldShowProgressBarInMobile" in d && (this.variables.shouldShowProgressBarInMobileIn = d.shouldShowProgressBarInMobile, "_shouldShowProgressBarInMobileInDataFetchStatus" in d && (this.variables._shouldShowProgressBarInMobileInDataFetchStatus = d._shouldShowProgressBarInMobileInDataFetchStatus)), "ProgressBarPercentage" in d && (this.variables.progressBarPercentageIn = d.ProgressBarPercentage, "_progressBarPercentageInDataFetchStatus" in d && (this.variables._progressBarPercentageInDataFetchStatus = d._progressBarPercentageInDataFetchStatus)), "HideBackButton" in d && (this.variables.hideBackButtonIn = d.HideBackButton, "_hideBackButtonInDataFetchStatus" in d && (this.variables._hideBackButtonInDataFetchStatus = d._hideBackButtonInDataFetchStatus))
        }
    };
o(I, "Model");
var D = I;
D._hasValidationWidgetsValue = void 0;
var se = new m.Model.ModelFactory(D);
var r = de(ge());
var ve = {
        "MrRqGvgp30enckXLK3d+lg#Value": "\u0634\u0631\u0648\u0637 \u0627\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645",
        "VQ0IXGgWsUybKqmZFAVIvA#Value": "\u0627\u0644\u062A\u0642\u064A\u064A\u0645 \u0627\u0644\u062A\u062F\u0627\u0648\u0644\u064A",
        "UmPyxFTC9UKw0fHc0PkgIA#Value": "\u0627\u0644\u062A\u0642\u064A\u064A\u0645 \u0627\u0644\u0645\u0627\u0644\u064A",
        "AY52qWvZN0u1P7Ub55oLvA#Value": "\u0627\u0644\u0639\u0646\u0648\u0627\u0646",
        "KOfJvF9ZZECMIej_Oahf9A#Value": "\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0634\u062E\u0635\u064A\u0629",
        "JSI9jX7vEka5tlKNDishsg#Value": "\u0639\u0645\u0644\u0629 \u0627\u0644\u062D\u0633\u0627\u0628",
        "Q8peGLSftEGpW9TzvhP2kw#Value": "\u062A\u0641\u0639\u064A\u0644 \u0627\u0644\u0645\u062D\u0641\u0638\u0629"
    },
    fe = {
        "MrRqGvgp30enckXLK3d+lg#Value": "Nutzungsbedingungen",
        "VQ0IXGgWsUybKqmZFAVIvA#Value": "Handelsbewertung",
        "UmPyxFTC9UKw0fHc0PkgIA#Value": "Finanzbewertung",
        "AY52qWvZN0u1P7Ub55oLvA#Value": "Pers\xF6nliche Daten",
        "KOfJvF9ZZECMIej_Oahf9A#Value": "Pers\xF6nliche Daten",
        "JSI9jX7vEka5tlKNDishsg#Value": "Kontow\xE4hrung",
        "Q8peGLSftEGpW9TzvhP2kw#Value": "Ein echtes Konto hinzuf\xFCgen"
    },
    pe = {
        "MrRqGvgp30enckXLK3d+lg#Value": "T\xE9rminos de uso",
        "VQ0IXGgWsUybKqmZFAVIvA#Value": "Evaluaci\xF3n de trading",
        "UmPyxFTC9UKw0fHc0PkgIA#Value": "Evaluaci\xF3n financiera",
        "AY52qWvZN0u1P7Ub55oLvA#Value": "Detalles personales",
        "KOfJvF9ZZECMIej_Oahf9A#Value": "Detalles personales",
        "JSI9jX7vEka5tlKNDishsg#Value": "Divisa de la Cuenta",
        "Q8peGLSftEGpW9TzvhP2kw#Value": "Agregar una cuenta real"
    },
    me = {
        "MrRqGvgp30enckXLK3d+lg#Value": "Conditions d'utilisation",
        "VQ0IXGgWsUybKqmZFAVIvA#Value": "\xC9valuation du trading",
        "UmPyxFTC9UKw0fHc0PkgIA#Value": "D\xE9tails de l'adresse",
        "AY52qWvZN0u1P7Ub55oLvA#Value": "D\xE9tails personnels",
        "KOfJvF9ZZECMIej_Oahf9A#Value": "D\xE9tails personnels",
        "JSI9jX7vEka5tlKNDishsg#Value": "Devise du compte",
        "Q8peGLSftEGpW9TzvhP2kw#Value": "Ajouter un compte r\xE9el"
    },
    _e = {
        "MrRqGvgp30enckXLK3d+lg#Value": "Termini di utilizzo",
        "VQ0IXGgWsUybKqmZFAVIvA#Value": "Valutazione del trading",
        "UmPyxFTC9UKw0fHc0PkgIA#Value": "Valutazione finanziaria",
        "AY52qWvZN0u1P7Ub55oLvA#Value": "Dettagli personali",
        "KOfJvF9ZZECMIej_Oahf9A#Value": "Dettagli personali",
        "JSI9jX7vEka5tlKNDishsg#Value": "Valuta del conto",
        "Q8peGLSftEGpW9TzvhP2kw#Value": "Aggiungi un conto reale"
    },
    Se = {
        "MrRqGvgp30enckXLK3d+lg#Value": "Warunki u\u017Cytkowania",
        "VQ0IXGgWsUybKqmZFAVIvA#Value": "Ocena handlu",
        "UmPyxFTC9UKw0fHc0PkgIA#Value": "Ocena finansowa",
        "AY52qWvZN0u1P7Ub55oLvA#Value": "Dane osobowe",
        "KOfJvF9ZZECMIej_Oahf9A#Value": "Dane osobowe",
        "JSI9jX7vEka5tlKNDishsg#Value": "Waluta konta",
        "Q8peGLSftEGpW9TzvhP2kw#Value": "Dodaj konto rzeczywiste"
    },
    he = {
        "MrRqGvgp30enckXLK3d+lg#Value": "Termos de utiliza\xE7\xE3o",
        "VQ0IXGgWsUybKqmZFAVIvA#Value": "Avalia\xE7\xE3o de trading",
        "UmPyxFTC9UKw0fHc0PkgIA#Value": "Avalia\xE7\xE3o financeira",
        "AY52qWvZN0u1P7Ub55oLvA#Value": "Dados pessoais",
        "KOfJvF9ZZECMIej_Oahf9A#Value": "Dados pessoais",
        "JSI9jX7vEka5tlKNDishsg#Value": "Moeda da conta",
        "Q8peGLSftEGpW9TzvhP2kw#Value": "Adicionar uma conta real"
    },
    ye = {
        "MrRqGvgp30enckXLK3d+lg#Value": "\u0423\u0441\u043B\u043E\u0432\u0438\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F",
        "VQ0IXGgWsUybKqmZFAVIvA#Value": "\u041E\u0446\u0435\u043D\u043A\u0430 \u0442\u043E\u0440\u0433\u043E\u0432\u043B\u0438",
        "UmPyxFTC9UKw0fHc0PkgIA#Value": "\u0424\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u0430\u044F \u043E\u0446\u0435\u043D\u043A\u0430",
        "AY52qWvZN0u1P7Ub55oLvA#Value": "\u041B\u0438\u0447\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435",
        "KOfJvF9ZZECMIej_Oahf9A#Value": "\u041B\u0438\u0447\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435",
        "JSI9jX7vEka5tlKNDishsg#Value": "\u0412\u0430\u043B\u044E\u0442\u0430 \u0441\u0447\u0435\u0442\u0430",
        "Q8peGLSftEGpW9TzvhP2kw#Value": "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0440\u0435\u0430\u043B\u044C\u043D\u044B\u0439 \u0441\u0447\u0435\u0442"
    },
    le = {
        "ar-001": {
            translations: ve,
            isRTL: !0
        },
        "de-DE": {
            translations: fe,
            isRTL: !1
        },
        "es-ES": {
            translations: pe,
            isRTL: !1
        },
        "fr-FR": {
            translations: me,
            isRTL: !1
        },
        "it-IT": {
            translations: _e,
            isRTL: !1
        },
        "pl-PL": {
            translations: Se,
            isRTL: !1
        },
        "pt-PT": {
            translations: he,
            isRTL: !1
        },
        "ru-RU": {
            translations: ye,
            isRTL: !1
        }
    };

function G(P, d, u) {
    function e(t) {
        var n = document.querySelector('meta[name="viewport"]');
        n ? n.content = t : (n = document.createElement("meta"), n.name = "viewport", n.content = t, document.head.appendChild(n))
    }
    o(e, "updateViewportMeta"), e("width=device-width, initial-scale=1.0, maximum-scale=1.0")
}
o(G, "default");
var p = V; {
    let d = class d extends p.Controller.BaseViewController {
        constructor(e, t, n) {
            super(e, t, n, le);
            var l = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _stopOnboardingOnContinue$Action() {
            return this.hasOwnProperty("__stopOnboardingOnContinue$Action") || (this.__stopOnboardingOnContinue$Action = function(e) {
                var t = this.model,
                    n = this.controller,
                    l = this.idService;
                return p.Logger.startActiveSpan("StopOnboardingOnContinue", function(a) {
                    a && (a.setAttribute("code.function", "StopOnboardingOnContinue"), a.setAttribute("outsystems.function.key", "3d40dcf7-48cf-4d53-9a88-32921e20a5aa"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("StopOnboardingOnContinue"), e = n.callContext(e), t.variables.shouldShowStopOnBoardingVar = !t.variables.shouldShowStopOnBoardingVar
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__stopOnboardingOnContinue$Action
        }
        set _stopOnboardingOnContinue$Action(e) {
            this.__stopOnboardingOnContinue$Action = e
        }
        get _onEmitPreviousEvent$Action() {
            return this.hasOwnProperty("__onEmitPreviousEvent$Action") || (this.__onEmitPreviousEvent$Action = function(e) {
                var t = this.model,
                    n = this.controller,
                    l = this.idService;
                return p.Logger.startActiveSpan("OnEmitPreviousEvent", function(a) {
                    return a && (a.setAttribute("code.function", "OnEmitPreviousEvent"), a.setAttribute("outsystems.function.key", "723554f2-61f4-4661-8e1d-09b0f6ea64be"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), p.Flow.tryFinally(function() {
                        return n.ensureControllerAlive("OnEmitPreviousEvent"), e = n.callContext(e), p.Flow.executeAsyncFlow(function() {
                            return n.onClickPrevious$Action(e)
                        })
                    }, function() {
                        a && a.end()
                    })
                }, 1)
            }), this.__onEmitPreviousEvent$Action
        }
        set _onEmitPreviousEvent$Action(e) {
            this.__onEmitPreviousEvent$Action = e
        }
        get _onClickClose$Action() {
            return this.hasOwnProperty("__onClickClose$Action") || (this.__onClickClose$Action = function(e) {
                var t = this.model,
                    n = this.controller,
                    l = this.idService;
                return p.Logger.startActiveSpan("OnClickClose", function(a) {
                    a && (a.setAttribute("code.function", "OnClickClose"), a.setAttribute("outsystems.function.key", "9f775005-1d44-4d0e-91ee-b8f999f858dc"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("OnClickClose"), e = n.callContext(e), t.variables.shouldShowStopOnBoardingVar = !0
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__onClickClose$Action
        }
        set _onClickClose$Action(e) {
            this.__onClickClose$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var t = this.model,
                    n = this.controller,
                    l = this.idService;
                return p.Logger.startActiveSpan("OnReady", function(a) {
                    a && (a.setAttribute("code.function", "OnReady"), a.setAttribute("outsystems.function.key", "ca401e14-c85a-4f96-a3b8-a30a30b6eabb"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("OnReady"), e = n.callContext(e);
                        var E = new p.DataTypes.VariableHolder;
                        E.value = T.getAuth$Action(e), p.Logger.startActiveSpan("UpdateMetatag", function(h) {
                            h && (h.setAttribute("code.function", "UpdateMetatag"), h.setAttribute("outsystems.function.key", "e9bb32d4-b90f-4043-84e1-49c4313d4e82"), h.setAttribute("outsystems.function.owner.name", "uae"), h.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), h.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return n.safeExecuteJSNode(G, "UpdateMetatag", "OnReady", null, function(i) {}, {}, {})
                            } finally {
                                h && h.end()
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
        get _gotoPreviousScreen$Action() {
            return this.hasOwnProperty("__gotoPreviousScreen$Action") || (this.__gotoPreviousScreen$Action = function(e) {
                var t = this.model,
                    n = this.controller,
                    l = this.idService;
                return p.Logger.startActiveSpan("GotoPreviousScreen", function(a) {
                    a && (a.setAttribute("code.function", "GotoPreviousScreen"), a.setAttribute("outsystems.function.key", "ca8fa58f-23f7-4d21-b4d5-e6a2ff4ada97"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return n.ensureControllerAlive("GotoPreviousScreen"), e = n.callContext(e), p.Navigation.navigateBack(null, e, !0)
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__gotoPreviousScreen$Action
        }
        set _gotoPreviousScreen$Action(e) {
            this.__gotoPreviousScreen$Action = e
        }
        stopOnboardingOnContinue$Action(e) {
            var t = this.controller;
            return p.Logger.startActiveSpan("StopOnboardingOnContinue__proxy", function(n) {
                n && (n.setAttribute("code.function", "StopOnboardingOnContinue"), n.setAttribute("outsystems.function.key", "3d40dcf7-48cf-4d53-9a88-32921e20a5aa"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._stopOnboardingOnContinue$Action, e)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        onEmitPreviousEvent$Action(e) {
            var t = this.controller;
            return p.Logger.startActiveSpan("OnEmitPreviousEvent__proxy", function(n) {
                return n && (n.setAttribute("code.function", "OnEmitPreviousEvent"), n.setAttribute("outsystems.function.key", "723554f2-61f4-4661-8e1d-09b0f6ea64be"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), p.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._onEmitPreviousEvent$Action, e)
                }, function() {
                    n && n.end()
                })
            }, 0)
        }
        onClickClose$Action(e) {
            var t = this.controller;
            return p.Logger.startActiveSpan("OnClickClose__proxy", function(n) {
                n && (n.setAttribute("code.function", "OnClickClose"), n.setAttribute("outsystems.function.key", "9f775005-1d44-4d0e-91ee-b8f999f858dc"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onClickClose$Action, e)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var t = this.controller;
            return p.Logger.startActiveSpan("OnReady__proxy", function(n) {
                n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "ca401e14-c85a-4f96-a3b8-a30a30b6eabb"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onReady$Action, e)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        gotoPreviousScreen$Action(e) {
            var t = this.controller;
            return p.Logger.startActiveSpan("GotoPreviousScreen__proxy", function(n) {
                n && (n.setAttribute("code.function", "GotoPreviousScreen"), n.setAttribute("outsystems.function.key", "ca8fa58f-23f7-4d21-b4d5-e6a2ff4ada97"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._gotoPreviousScreen$Action, e)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        get onClickPrevious$Action() {
            return this.hasOwnProperty("_onClickPrevious$Action") || (this._onClickPrevious$Action = function() {
                return Promise.resolve()
            }), this._onClickPrevious$Action
        }
        set onClickPrevious$Action(e) {
            this._onClickPrevious$Action = e
        }
        get infoTrigger$Action() {
            return this.hasOwnProperty("_infoTrigger$Action") || (this._infoTrigger$Action = function() {
                return Promise.resolve()
            }), this._infoTrigger$Action
        }
        set infoTrigger$Action(e) {
            this._infoTrigger$Action = e
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var t = this.controller,
                    n = this.model,
                    l = this.idService;
                return t.onReady$Action(e)
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
        get onSyncStartEventHandler() {
            return this.hasOwnProperty("_onSyncStartEventHandler") || (this._onSyncStartEventHandler = null), this._onSyncStartEventHandler
        }
        set onSyncStartEventHandler(e) {
            this._onSyncStartEventHandler = e
        }
        get onSyncCompleteEventHandler() {
            return this.hasOwnProperty("_onSyncCompleteEventHandler") || (this._onSyncCompleteEventHandler = null), this._onSyncCompleteEventHandler
        }
        set onSyncCompleteEventHandler(e) {
            this._onSyncCompleteEventHandler = e
        }
        get onSyncErrorEventHandler() {
            return this.hasOwnProperty("_onSyncErrorEventHandler") || (this._onSyncErrorEventHandler = null), this._onSyncErrorEventHandler
        }
        set onSyncErrorEventHandler(e) {
            this._onSyncErrorEventHandler = e
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
            return T.defaultTimeout
        }
    };
    o(d, "ControllerInner");
    let P = d;
    ce = P
}
var ce, ue = new p.Controller.ControllerFactory(ce, Z);
var _ = F.PlaceholderContent,
    at = F.IteratorPlaceholderContent,
    Pe = o(function() {
        var P = X(function(d) {
            var u = d.model,
                e = d.controller,
                t = d.controller.idService,
                n = e.validationService,
                l = e.callContext(),
                a = Q,
                E = Y,
                h = {
                    props: d,
                    validateWidget: o(function(s) {
                        d.validateWidget(d, s)
                    }, "validateWidget")
                },
                i = u,
                S = J,
                O = j,
                v = q();
            return r.createElement("div", d.rootNodeProperties, r.createElement(g, {
                align: 0,
                animate: !1,
                gridProperties: {
                    classes: "OSInline"
                },
                style: "display-flex",
                visible: !0,
                _idProps: {
                    service: t,
                    name: "Container"
                },
                _widgetRecordProvider: i
            }, r.createElement(g, {
                align: 0,
                animate: !1,
                style: "real-account-signup-layout__sidebar",
                visible: u.getCachedValue(t.getId("SidebarMenu.Visible"), function() {
                    return x.isDesktop$Action(l).isDesktopOut
                }),
                _idProps: {
                    service: t,
                    name: "SidebarMenu"
                },
                _widgetRecordProvider: i
            }, r.createElement(ee, {
                extendedProperties: {
                    style: "margin-bottom: 24px; margin-right: 0px; margin-top: 0px;"
                },
                gridProperties: {
                    classes: "OSFillParent",
                    marginLeft: "0px"
                },
                _idProps: {
                    service: t,
                    name: "AddRealAccount"
                },
                _widgetRecordProvider: i
            }, r.createElement(R, {
                extendedProperties: {
                    style: "color: #333333; font-size: 20px; font-weight: 900;"
                },
                text: [O(E("Q8peGLSftEGpW9TzvhP2kw#Value", "Activate Wallet"))],
                _idProps: {
                    service: t,
                    uuid: "3"
                },
                _widgetRecordProvider: i
            })), r.createElement(H, {
                getOwnerSpan: o(function() {
                    return v.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return v.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    IsVertical: !0
                },
                events: {
                    _handleError: o(function(s) {
                        e.handleError(s)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: n
                },
                _idProps: {
                    service: t,
                    uuid: "4",
                    alias: "1"
                },
                _widgetRecordProvider: i,
                placeholders: {
                    content: new _(function() {
                        return [r.createElement(g, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: t,
                                name: "Sidebar"
                            },
                            _widgetRecordProvider: i
                        }, r.createElement(g, {
                            align: 0,
                            animate: !0,
                            visible: !c.getshould_skip_currency_selection(),
                            _idProps: {
                                service: t,
                                uuid: "6"
                            },
                            _widgetRecordProvider: i
                        }, r.createElement(A, {
                            getOwnerSpan: o(function() {
                                return v.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return v.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Status: u.getCachedValue(t.getId("AccountCurrency4.Status"), function() {
                                    return c.getRealSignupCurrentStep() === 1 ? f.steps.active : c.getRealSignupCurrentStep() < 1 ? f.steps.next : f.steps.past
                                }, function() {
                                    return c.getRealSignupCurrentStep()
                                })
                            },
                            events: {
                                _handleError: o(function(s) {
                                    e.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: n
                            },
                            _idProps: {
                                service: t,
                                name: "AccountCurrency4",
                                alias: "2"
                            },
                            _widgetRecordProvider: i,
                            placeholders: {
                                icon: new _(function() {
                                    return [S(c.getRealSignupCurrentStep() > 1, !1, this, function() {
                                        return [r.createElement(w, {
                                            extendedProperties: {
                                                style: "font-size: 12px;"
                                            },
                                            icon: "check",
                                            iconSize: 1,
                                            style: "icon",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "8"
                                            },
                                            _widgetRecordProvider: i
                                        })]
                                    }, function() {
                                        return []
                                    })]
                                }),
                                label: new _(function() {
                                    return [r.createElement(g, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "text-align: left;"
                                        },
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "9"
                                        },
                                        _widgetRecordProvider: i
                                    }, r.createElement(R, {
                                        extendedProperties: {
                                            style: "color: #101213;"
                                        },
                                        text: [O(E("JSI9jX7vEka5tlKNDishsg#Value", "Account currency"))],
                                        _idProps: {
                                            service: t,
                                            uuid: "10"
                                        },
                                        _widgetRecordProvider: i
                                    }))]
                                })
                            },
                            _dependencies: [a(c.getRealSignupCurrentStep())]
                        })), r.createElement(A, {
                            getOwnerSpan: o(function() {
                                return v.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return v.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Status: u.getCachedValue(t.getId("PersonalDetails4.Status"), function() {
                                    return c.getRealSignupCurrentStep() === 2 ? f.steps.active : c.getRealSignupCurrentStep() < 2 ? f.steps.next : f.steps.past
                                }, function() {
                                    return c.getRealSignupCurrentStep()
                                })
                            },
                            events: {
                                _handleError: o(function(s) {
                                    e.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: n
                            },
                            _idProps: {
                                service: t,
                                name: "PersonalDetails4",
                                alias: "3"
                            },
                            _widgetRecordProvider: i,
                            placeholders: {
                                icon: new _(function() {
                                    return [S(c.getRealSignupCurrentStep() > 2, !1, this, function() {
                                        return [r.createElement(w, {
                                            extendedProperties: {
                                                style: "font-size: 12px;"
                                            },
                                            icon: "check",
                                            iconSize: 1,
                                            style: "icon",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "12"
                                            },
                                            _widgetRecordProvider: i
                                        })]
                                    }, function() {
                                        return []
                                    })]
                                }),
                                label: new _(function() {
                                    return [r.createElement(g, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "text-align: left;"
                                        },
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "13"
                                        },
                                        _widgetRecordProvider: i
                                    }, r.createElement(R, {
                                        extendedProperties: {
                                            style: "color: #101213;"
                                        },
                                        text: [O(E("KOfJvF9ZZECMIej_Oahf9A#Value", "Personal details"))],
                                        _idProps: {
                                            service: t,
                                            uuid: "14"
                                        },
                                        _widgetRecordProvider: i
                                    }))]
                                })
                            },
                            _dependencies: [a(c.getRealSignupCurrentStep())]
                        }), r.createElement(A, {
                            getOwnerSpan: o(function() {
                                return v.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return v.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Status: u.getCachedValue(t.getId("Addressdetails5.Status"), function() {
                                    return c.getRealSignupCurrentStep() === 3 ? f.steps.active : c.getRealSignupCurrentStep() < 3 ? f.steps.next : f.steps.past
                                }, function() {
                                    return c.getRealSignupCurrentStep()
                                })
                            },
                            events: {
                                _handleError: o(function(s) {
                                    e.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: n
                            },
                            _idProps: {
                                service: t,
                                name: "Addressdetails5",
                                alias: "4"
                            },
                            _widgetRecordProvider: i,
                            placeholders: {
                                icon: new _(function() {
                                    return [S(c.getRealSignupCurrentStep() > 3, !1, this, function() {
                                        return [r.createElement(w, {
                                            extendedProperties: {
                                                style: "font-size: 12px;"
                                            },
                                            icon: "check",
                                            iconSize: 1,
                                            style: "icon",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "16"
                                            },
                                            _widgetRecordProvider: i
                                        })]
                                    }, function() {
                                        return []
                                    })]
                                }),
                                label: new _(function() {
                                    return [r.createElement(g, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "text-align: left;"
                                        },
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "17"
                                        },
                                        _widgetRecordProvider: i
                                    }, r.createElement(R, {
                                        extendedProperties: {
                                            style: "color: #101213;"
                                        },
                                        text: [O(E("AY52qWvZN0u1P7Ub55oLvA#Value", "Address"))],
                                        _idProps: {
                                            service: t,
                                            uuid: "18"
                                        },
                                        _widgetRecordProvider: i
                                    }))]
                                })
                            },
                            _dependencies: [a(c.getRealSignupCurrentStep())]
                        }), r.createElement(A, {
                            getOwnerSpan: o(function() {
                                return v.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return v.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Status: u.getCachedValue(t.getId("FinancialAssessment2.Status"), function() {
                                    return c.getRealSignupCurrentStep() === 4 ? f.steps.active : c.getRealSignupCurrentStep() < 4 ? f.steps.next : f.steps.past
                                }, function() {
                                    return c.getRealSignupCurrentStep()
                                })
                            },
                            events: {
                                _handleError: o(function(s) {
                                    e.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: n
                            },
                            _idProps: {
                                service: t,
                                name: "FinancialAssessment2",
                                alias: "5"
                            },
                            _widgetRecordProvider: i,
                            placeholders: {
                                icon: new _(function() {
                                    return [S(c.getRealSignupCurrentStep() > 4, !1, this, function() {
                                        return [r.createElement(w, {
                                            extendedProperties: {
                                                style: "font-size: 12px;"
                                            },
                                            icon: "check",
                                            iconSize: 1,
                                            style: "icon",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "20"
                                            },
                                            _widgetRecordProvider: i
                                        })]
                                    }, function() {
                                        return []
                                    })]
                                }),
                                label: new _(function() {
                                    return [r.createElement(g, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "text-align: left;"
                                        },
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "21"
                                        },
                                        _widgetRecordProvider: i
                                    }, r.createElement(R, {
                                        extendedProperties: {
                                            style: "color: #101213;"
                                        },
                                        text: [O(E("UmPyxFTC9UKw0fHc0PkgIA#Value", "Financial assessment"))],
                                        _idProps: {
                                            service: t,
                                            uuid: "22"
                                        },
                                        _widgetRecordProvider: i
                                    }))]
                                })
                            },
                            _dependencies: [a(c.getRealSignupCurrentStep())]
                        }), r.createElement(A, {
                            getOwnerSpan: o(function() {
                                return v.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return v.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Status: u.getCachedValue(t.getId("TradingAssessment2.Status"), function() {
                                    return c.getRealSignupCurrentStep() === 5 ? f.steps.active : c.getRealSignupCurrentStep() < 5 ? f.steps.next : f.steps.past
                                }, function() {
                                    return c.getRealSignupCurrentStep()
                                })
                            },
                            events: {
                                _handleError: o(function(s) {
                                    e.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: n
                            },
                            _idProps: {
                                service: t,
                                name: "TradingAssessment2",
                                alias: "6"
                            },
                            _widgetRecordProvider: i,
                            placeholders: {
                                icon: new _(function() {
                                    return [S(c.getRealSignupCurrentStep() > 5, !1, this, function() {
                                        return [r.createElement(w, {
                                            extendedProperties: {
                                                style: "font-size: 12px;"
                                            },
                                            icon: "check",
                                            iconSize: 1,
                                            style: "icon",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "24"
                                            },
                                            _widgetRecordProvider: i
                                        })]
                                    }, function() {
                                        return []
                                    })]
                                }),
                                label: new _(function() {
                                    return [r.createElement(g, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "text-align: left;"
                                        },
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "25"
                                        },
                                        _widgetRecordProvider: i
                                    }, r.createElement(R, {
                                        extendedProperties: {
                                            style: "color: #101213;"
                                        },
                                        text: [O(E("VQ0IXGgWsUybKqmZFAVIvA#Value", "Suitability assessment"))],
                                        _idProps: {
                                            service: t,
                                            uuid: "26"
                                        },
                                        _widgetRecordProvider: i
                                    }))]
                                })
                            },
                            _dependencies: [a(c.getRealSignupCurrentStep())]
                        }), r.createElement(A, {
                            getOwnerSpan: o(function() {
                                return v.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return v.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Status: u.getCachedValue(t.getId("TermsOfUse4.Status"), function() {
                                    return c.getRealSignupCurrentStep() === 6 ? f.steps.active : c.getRealSignupCurrentStep() < 6 ? f.steps.next : f.steps.past
                                }, function() {
                                    return c.getRealSignupCurrentStep()
                                })
                            },
                            events: {
                                _handleError: o(function(s) {
                                    e.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: n
                            },
                            _idProps: {
                                service: t,
                                name: "TermsOfUse4",
                                alias: "7"
                            },
                            _widgetRecordProvider: i,
                            placeholders: {
                                icon: new _(function() {
                                    return [S(c.getRealSignupCurrentStep() > 6, !1, this, function() {
                                        return [r.createElement(w, {
                                            extendedProperties: {
                                                style: "font-size: 12px;"
                                            },
                                            icon: "check",
                                            iconSize: 1,
                                            style: "icon",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "28"
                                            },
                                            _widgetRecordProvider: i
                                        })]
                                    }, function() {
                                        return []
                                    })]
                                }),
                                label: new _(function() {
                                    return [r.createElement(g, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "text-align: left;"
                                        },
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "29"
                                        },
                                        _widgetRecordProvider: i
                                    }, r.createElement(R, {
                                        extendedProperties: {
                                            style: "color: #101213;"
                                        },
                                        text: [O(E("MrRqGvgp30enckXLK3d+lg#Value", "Terms of use"))],
                                        _idProps: {
                                            service: t,
                                            uuid: "30"
                                        },
                                        _widgetRecordProvider: i
                                    }))]
                                })
                            },
                            _dependencies: [a(c.getRealSignupCurrentStep())]
                        }))]
                    })
                },
                _dependencies: [a(c.getRealSignupCurrentStep()), a(c.getshould_skip_currency_selection())]
            })), r.createElement(g, {
                align: 0,
                animate: !1,
                gridProperties: {
                    classes: "OSInline"
                },
                style: "real-account-signup-layout__main-content show-scrollbar",
                visible: !0,
                _idProps: {
                    service: t,
                    name: "MainContent"
                },
                _widgetRecordProvider: i
            }, r.createElement(g, {
                align: 0,
                animate: !1,
                gridProperties: {
                    classes: "OSInline"
                },
                style: "real-account-signup-layout__content",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "32"
                },
                _widgetRecordProvider: i
            }, r.createElement(g, {
                align: 0,
                animate: !1,
                style: "real-account-signup-layout__header-mobile flex",
                visible: u.getCachedValue(t.getId("MobileHeader.Visible"), function() {
                    return !x.isDesktop$Action(l).isDesktopOut
                }),
                _idProps: {
                    service: t,
                    name: "MobileHeader"
                },
                _widgetRecordProvider: i
            }, r.createElement(g, {
                align: 0,
                animate: !1,
                style: "header-container-progress-bar",
                visible: !0,
                _idProps: {
                    service: t,
                    name: "HeaderContainer"
                },
                _widgetRecordProvider: i
            }, r.createElement(g, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "padding: 20px 16px;"
                },
                style: "display-flex align-items-center justify-content-space-between",
                visible: !0,
                _idProps: {
                    service: t,
                    name: "HeaderContainerMobile"
                },
                _widgetRecordProvider: i
            }, r.createElement(g, {
                align: 0,
                animate: !0,
                style: "display-flex",
                visible: !u.variables.hideBackButtonIn,
                _idProps: {
                    service: t,
                    name: "LeftArrowContainer2"
                },
                _widgetRecordProvider: i,
                visible_dataFetchStatus: y.calculateDataFetchStatus(u.variables._hideBackButtonInDataFetchStatus)
            }, S(c.getRealSignupCurrentStep() > 1, !1, this, function() {
                return [S(u.variables.shouldEmitPreviousEventIn, !1, this, function() {
                    return [r.createElement(g, {
                        align: 0,
                        animate: !1,
                        extendedEvents: {
                            onClick: o(function() {
                                return Promise.resolve().then(function() {
                                    var s = typeof l != "undefined" && l !== null ? l.clone() : e.callContext().clone();
                                    return e.onEmitPreviousEvent$Action(e.callContext(s))
                                })
                            }, "onClick")
                        },
                        style: "cursor-pointer mirror-flip back-button",
                        visible: !0,
                        _idProps: {
                            service: t,
                            name: "Backbutton"
                        },
                        _widgetRecordProvider: i
                    }, r.createElement(C, {
                        image: b.VersionedURL.getVersionedUrl("img/uae.backarrow.svg"),
                        type: 0,
                        _idProps: {
                            service: t,
                            uuid: "38"
                        },
                        _widgetRecordProvider: i
                    }))]
                }, function() {
                    return [r.createElement(L, {
                        enabled: !0,
                        onClick: o(function() {
                            var s = typeof l != "undefined" && l !== null ? l.clone() : e.callContext().clone();
                            e.gotoPreviousScreen$Action(e.callContext(s))
                        }, "onClick"),
                        style: "display-flex mirror-flip back-button",
                        visible: !u.variables.shouldEmitPreviousEventIn,
                        _idProps: {
                            service: t,
                            uuid: "39"
                        },
                        _widgetRecordProvider: i,
                        visible_dataFetchStatus: y.calculateDataFetchStatus(u.variables._shouldEmitPreviousEventInDataFetchStatus)
                    }, r.createElement(C, {
                        image: b.VersionedURL.getVersionedUrl("img/uae.backarrow.svg"),
                        type: 0,
                        _idProps: {
                            service: t,
                            uuid: "40"
                        },
                        _widgetRecordProvider: i
                    }))]
                })]
            }, function() {
                return []
            })), r.createElement(g, {
                align: 0,
                animate: !0,
                extendedProperties: {
                    style: "padding: 0px 16px;"
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "100%"
                },
                visible: u.variables.shouldShowProgressBarInMobileIn,
                _idProps: {
                    service: t,
                    name: "ProgressBarContainer2"
                },
                _widgetRecordProvider: i,
                visible_dataFetchStatus: y.calculateDataFetchStatus(u.variables._shouldShowProgressBarInMobileInDataFetchStatus)
            }, r.createElement(M, {
                getOwnerSpan: o(function() {
                    return v.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return v.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    OptionalConfigs: u.getCachedValue(t.getId("Progressbar.OptionalConfigs"), function() {
                        return (function() {
                            var s = new z;
                            return s.animateInitialProgressAttr = !1, s
                        })()
                    }),
                    Progress: u.variables.progressBarPercentageIn,
                    _progressInDataFetchStatus: y.calculateDataFetchStatus(u.variables._progressBarPercentageInDataFetchStatus),
                    ProgressColor: f.color.primary,
                    ExtendedClass: "eu",
                    Thickness: 8
                },
                events: {
                    _handleError: o(function(s) {
                        e.handleError(s)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: n
                },
                _idProps: {
                    service: t,
                    name: "Progressbar",
                    alias: "8"
                },
                _widgetRecordProvider: i,
                placeholders: {
                    content: _.Empty
                },
                _dependencies: []
            })), r.createElement(g, {
                align: 0,
                animate: !0,
                extendedEvents: {
                    onClick: o(function() {
                        var s = typeof l != "undefined" && l !== null ? l.clone() : e.callContext().clone();
                        e.infoTrigger$Action(e.callContext(s))
                    }, "onClick")
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "40px"
                },
                style: "back-button margin-right-s",
                visible: u.variables.hideBackButtonIn,
                _idProps: {
                    service: t,
                    uuid: "43"
                },
                _widgetRecordProvider: i,
                visible_dataFetchStatus: y.calculateDataFetchStatus(u.variables._hideBackButtonInDataFetchStatus)
            }, r.createElement(C, {
                image: b.VersionedURL.getVersionedUrl("img/uae.infoicon.svg"),
                type: 0,
                _idProps: {
                    service: t,
                    uuid: "44"
                },
                _widgetRecordProvider: i
            })), r.createElement(C, {
                extendedEvents: {
                    onClick: o(function() {
                        var s = typeof l != "undefined" && l !== null ? l.clone() : e.callContext().clone();
                        e.onClickClose$Action(e.callContext(s))
                    }, "onClick")
                },
                extendedProperties: {
                    style: "height: 30px; margin: 0; padding: 0;"
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                image: b.VersionedURL.getVersionedUrl("img/uae.buttonclose.svg"),
                style: "cursor-pointer",
                type: 0,
                _idProps: {
                    service: t,
                    uuid: "45"
                },
                _widgetRecordProvider: i
            }))), r.createElement(g, {
                align: 0,
                animate: !1,
                visible: !1,
                _idProps: {
                    service: t,
                    uuid: "46"
                },
                _widgetRecordProvider: i
            }, r.createElement(g, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "padding: 16px; padding-bottom: 0;"
                },
                style: "display-flex align-items-center justify-content-space-between",
                visible: !0,
                _idProps: {
                    service: t,
                    name: "TitleContainerMobile"
                },
                _widgetRecordProvider: i
            }, r.createElement(W, {
                extendedProperties: {
                    style: "color: #101213; font-size: 18px; font-weight: bold;"
                },
                value: u.variables.titleIn,
                _idProps: {
                    service: t,
                    uuid: "48"
                },
                _widgetRecordProvider: i,
                value_dataFetchStatus: y.calculateDataFetchStatus(u.variables._titleInDataFetchStatus)
            })))), r.createElement(g, {
                align: 0,
                animate: !1,
                style: "real-account-signup-layout__header-desktop",
                visible: u.getCachedValue(t.getId("DesktopHeader.Visible"), function() {
                    return x.isDesktop$Action(l).isDesktopOut
                }),
                _idProps: {
                    service: t,
                    name: "DesktopHeader"
                },
                _widgetRecordProvider: i
            }, S(c.getRealSignupCurrentStep() > 1 && !u.variables.hideBackButtonIn, !1, this, function() {
                return [S(u.variables.shouldEmitPreviousEventIn, !1, this, function() {
                    return [r.createElement(g, {
                        align: 0,
                        animate: !1,
                        extendedEvents: {
                            onClick: o(function() {
                                return Promise.resolve().then(function() {
                                    var s = typeof l != "undefined" && l !== null ? l.clone() : e.callContext().clone();
                                    return e.onEmitPreviousEvent$Action(e.callContext(s))
                                })
                            }, "onClick")
                        },
                        style: "cursor-pointer mirror-flip back-button",
                        visible: !0,
                        _idProps: {
                            service: t,
                            name: "Backbutton2"
                        },
                        _widgetRecordProvider: i
                    }, r.createElement(C, {
                        image: b.VersionedURL.getVersionedUrl("img/uae.backarrow.svg"),
                        type: 0,
                        _idProps: {
                            service: t,
                            uuid: "51"
                        },
                        _widgetRecordProvider: i
                    }))]
                }, function() {
                    return [r.createElement(L, {
                        enabled: !0,
                        onClick: o(function() {
                            var s = typeof l != "undefined" && l !== null ? l.clone() : e.callContext().clone();
                            e.gotoPreviousScreen$Action(e.callContext(s))
                        }, "onClick"),
                        style: "display-flex mirror-flip back-button",
                        visible: !u.variables.shouldEmitPreviousEventIn,
                        _idProps: {
                            service: t,
                            uuid: "52"
                        },
                        _widgetRecordProvider: i,
                        visible_dataFetchStatus: y.calculateDataFetchStatus(u.variables._shouldEmitPreviousEventInDataFetchStatus)
                    }, r.createElement(C, {
                        image: b.VersionedURL.getVersionedUrl("img/uae.backarrow.svg"),
                        type: 0,
                        _idProps: {
                            service: t,
                            uuid: "53"
                        },
                        _widgetRecordProvider: i
                    }))]
                })]
            }, function() {
                return [r.createElement(g, {
                    align: 0,
                    animate: !1,
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "54"
                    },
                    _widgetRecordProvider: i
                })]
            }), r.createElement(W, {
                extendedProperties: {
                    style: "color: #333333; font-size: 20px; font-weight: 900;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                value: u.variables.titleIn,
                _idProps: {
                    service: t,
                    uuid: "55"
                },
                _widgetRecordProvider: i,
                value_dataFetchStatus: y.calculateDataFetchStatus(u.variables._titleInDataFetchStatus)
            }), r.createElement(g, {
                align: 0,
                animate: !1,
                style: "display-flex",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "56"
                },
                _widgetRecordProvider: i
            }, r.createElement(g, {
                align: 0,
                animate: !0,
                extendedEvents: {
                    onClick: o(function() {
                        var s = typeof l != "undefined" && l !== null ? l.clone() : e.callContext().clone();
                        e.infoTrigger$Action(e.callContext(s))
                    }, "onClick")
                },
                gridProperties: {
                    classes: "OSInline"
                },
                style: "back-button margin-right-s",
                visible: u.variables.hideBackButtonIn,
                _idProps: {
                    service: t,
                    uuid: "57"
                },
                _widgetRecordProvider: i,
                visible_dataFetchStatus: y.calculateDataFetchStatus(u.variables._hideBackButtonInDataFetchStatus)
            }, r.createElement(C, {
                image: b.VersionedURL.getVersionedUrl("img/uae.infoicon.svg"),
                type: 0,
                _idProps: {
                    service: t,
                    uuid: "58"
                },
                _widgetRecordProvider: i
            })), r.createElement(C, {
                extendedEvents: {
                    onClick: o(function() {
                        var s = typeof l != "undefined" && l !== null ? l.clone() : e.callContext().clone();
                        e.onClickClose$Action(e.callContext(s))
                    }, "onClick")
                },
                extendedProperties: {
                    style: "height: 30px; margin: 0; padding: 0;"
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                image: b.VersionedURL.getVersionedUrl("img/uae.buttonclose.svg"),
                style: "cursor-pointer",
                type: 0,
                _idProps: {
                    service: t,
                    uuid: "59"
                },
                _widgetRecordProvider: i
            }))), S(u.variables.isLoadingVar, !1, this, function() {
                return [r.createElement(U, {
                    getOwnerSpan: o(function() {
                        return v.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: o(function() {
                        return v.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: o(function(s) {
                            e.handleError(s)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: n
                    },
                    _idProps: {
                        service: t,
                        uuid: "60",
                        alias: "9"
                    },
                    _widgetRecordProvider: i,
                    _dependencies: []
                })]
            }, function() {
                return [r.createElement(te, {
                    align: 0,
                    content: h.props.placeholders.content,
                    style: "real-account-signup-layout__placeholder",
                    _idProps: {
                        service: t,
                        name: "Content"
                    },
                    _widgetRecordProvider: i
                })]
            })))), r.createElement(B, {
                getOwnerSpan: o(function() {
                    return v.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return v.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ShouldShow: u.variables.shouldShowStopOnBoardingVar
                },
                events: {
                    _handleError: o(function(s) {
                        e.handleError(s)
                    }, "_handleError"),
                    onContinue$Action: o(function() {
                        var s = typeof l != "undefined" && l !== null ? l.clone() : e.callContext().clone();
                        e.stopOnboardingOnContinue$Action(e.callContext(s))
                    }, "onContinue$Action")
                },
                _validationProps: {
                    validationService: n
                },
                _idProps: {
                    service: t,
                    uuid: "62",
                    alias: "10"
                },
                _widgetRecordProvider: i,
                _dependencies: []
            }))
        }, {
            topLevelComponent: !1,
            getAttributes: o(function() {
                return {
                    codeFunction: "RealAccountCreationLayout",
                    functionKey: "1a69c42d-9a58-4ba6-90bc-8710d1395e52",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Layouts.RealAccountCreationLayout",
            modelFactory: se,
            controllerFactory: ue
        });
        return P.getCssDependencies = function() {
            return ["css/uae.Layouts.RealAccountCreationLayout.css", "css/OutSystemsReactWidgets.css"]
        }, P.getJsDependencies = function() {
            return []
        }, P.getBlocks = function() {
            return [H, A, M, U, B]
        }, P
    }, "componentFactory"),
    ot = Pe();
export {
    ot as a
};