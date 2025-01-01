import {
    a as h
} from "./_oschunk-E6DSWJLT.js";
import {
    a as c
} from "./_oschunk-2M7PXTSQ.js";
import {
    c as s
} from "./_oschunk-DOFMR6EA.js";
import {
    ia as u
} from "./_oschunk-2JKANR6M.js";
import {
    c as d
} from "./_oschunk-DVBKI63I.js";
var E = {
        "rfiKVwHAFU6oeVY1C3zBEg#Value": "\u0639\u0631\u0636 \u0627\u0644\u0645\u0648\u0627\u0635\u0641\u0627\u062A",
        "fAKgyKCJXE6pkJc3DrOa4w#Value": "\u0627\u0644\u062D\u0633\u0627\u0628\u0627\u062A \u0627\u0644\u0645\u062A\u0627\u062D\u0629"
    },
    C = {
        "rfiKVwHAFU6oeVY1C3zBEg#Value": "Spezifikationen anzeigen",
        "fAKgyKCJXE6pkJc3DrOa4w#Value": "Verf\xFCgbare Konten"
    },
    m = {
        "rfiKVwHAFU6oeVY1C3zBEg#Value": "Ver especificaciones",
        "fAKgyKCJXE6pkJc3DrOa4w#Value": "Cuentas disponibles"
    },
    w = {
        "rfiKVwHAFU6oeVY1C3zBEg#Value": "Voir les sp\xE9cifications",
        "fAKgyKCJXE6pkJc3DrOa4w#Value": "Comptes disponibles"
    },
    R = {
        "rfiKVwHAFU6oeVY1C3zBEg#Value": "Visualizza le specifiche",
        "fAKgyKCJXE6pkJc3DrOa4w#Value": "Conti disponibili"
    },
    A = {
        "rfiKVwHAFU6oeVY1C3zBEg#Value": "Wy\u015Bwietl specyfikacje",
        "fAKgyKCJXE6pkJc3DrOa4w#Value": "Dost\u0119pne konta"
    },
    b = {
        "rfiKVwHAFU6oeVY1C3zBEg#Value": "Consultar especifica\xE7\xF5es",
        "fAKgyKCJXE6pkJc3DrOa4w#Value": "Contas dispon\xEDveis"
    },
    D = {
        "rfiKVwHAFU6oeVY1C3zBEg#Value": "\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438",
        "fAKgyKCJXE6pkJc3DrOa4w#Value": "\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u0441\u0447\u0435\u0442\u0430"
    },
    f = {
        "ar-001": {
            translations: E,
            isRTL: !0
        },
        "de-DE": {
            translations: C,
            isRTL: !1
        },
        "es-ES": {
            translations: m,
            isRTL: !1
        },
        "fr-FR": {
            translations: w,
            isRTL: !1
        },
        "it-IT": {
            translations: R,
            isRTL: !1
        },
        "pl-PL": {
            translations: A,
            isRTL: !1
        },
        "pt-PT": {
            translations: b,
            isRTL: !1
        },
        "ru-RU": {
            translations: D,
            isRTL: !1
        }
    };
var a = u; {
    let i = class i extends a.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, f);
            var l = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    l = this.idService;
                return a.Logger.startActiveSpan("OnReady", function(r) {
                    r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "f3783c5f-3da7-4433-bb5c-fa67a21b2718"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var v = new a.DataTypes.VariableHolder,
                            y = new a.DataTypes.VariableHolder;
                        v.value = s.performanceNow$Action(!0, "CFD", e), y.value = s.performanceNow$Action(!1, "CFD", e)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        onReady$Action(e) {
            var n = this.controller;
            return a.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "f3783c5f-3da7-4433-bb5c-fa67a21b2718"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onReady$Action, e)
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
                var n = this.controller,
                    t = this.model,
                    l = this.idService;
                return n.onReady$Action(e)
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
                return h.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return s.defaultTimeout
        }
    };
    d(i, "ControllerInner");
    let o = i;
    _ = o
}
var _, T = new a.Controller.ControllerFactory(_, c);
export {
    T as a
};