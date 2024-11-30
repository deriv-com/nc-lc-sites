import {
    a as _
} from "./_oschunk-IQUI5AIQ.js";
import {
    a as f
} from "./_oschunk-LHY3WMNC.js";
import {
    d as s
} from "./_oschunk-XMOR6XCC.js";
import {
    ia as h
} from "./_oschunk-NTQBNJ73.js";
import {
    c
} from "./_oschunk-DVBKI63I.js";
var v = {
        "5W6RPzXMB02rBNpMInyjsw#Value.-1075859842.1": "\u0627\u0644\u0625\u064A\u062F\u0627\u0639",
        "NmldUu41m0mfpe1MMwXCKQ#Value": "\u0631\u062C\u0648\u0639",
        "eor0I88PGUy7f21cKU12CQ#Value": "\u062D\u062F\u062B \u062E\u0637\u0623",
        "yRNaYs5uDEWHtWSCod73Sw#Title": "\u0627\u0644\u0625\u064A\u062F\u0627\u0639",
        "yRNaYs5uDEWHtWSCod73Sw#TitleExpression.-1075859842.1": "\u0627\u0644\u0625\u064A\u062F\u0627\u0639"
    },
    R = {
        "5W6RPzXMB02rBNpMInyjsw#Value.-1075859842.1": "Einzahlung",
        "NmldUu41m0mfpe1MMwXCKQ#Value": "Zur\xFCckgehen",
        "eor0I88PGUy7f21cKU12CQ#Value": "Fehler",
        "yRNaYs5uDEWHtWSCod73Sw#Title": "Einzahlung",
        "yRNaYs5uDEWHtWSCod73Sw#TitleExpression.-1075859842.1": "Einzahlung"
    },
    p = {
        "5W6RPzXMB02rBNpMInyjsw#Value.-1075859842.1": "Dep\xF3sito",
        "NmldUu41m0mfpe1MMwXCKQ#Value": "Volver",
        "eor0I88PGUy7f21cKU12CQ#Value": "Error",
        "yRNaYs5uDEWHtWSCod73Sw#Title": "Dep\xF3sito",
        "yRNaYs5uDEWHtWSCod73Sw#TitleExpression.-1075859842.1": "Dep\xF3sito"
    },
    w = {
        "5W6RPzXMB02rBNpMInyjsw#Value.-1075859842.1": "Deposita",
        "NmldUu41m0mfpe1MMwXCKQ#Value": "Torna indietro",
        "eor0I88PGUy7f21cKU12CQ#Value": "Errore",
        "yRNaYs5uDEWHtWSCod73Sw#Title": "Deposita",
        "yRNaYs5uDEWHtWSCod73Sw#TitleExpression.-1075859842.1": "Deposita"
    },
    W = {
        "5W6RPzXMB02rBNpMInyjsw#Value.-1075859842.1": "Wp\u0142ata",
        "NmldUu41m0mfpe1MMwXCKQ#Value": "Wstecz",
        "eor0I88PGUy7f21cKU12CQ#Value": "B\u0142\u0105d",
        "yRNaYs5uDEWHtWSCod73Sw#Title": "Wp\u0142ata",
        "yRNaYs5uDEWHtWSCod73Sw#TitleExpression.-1075859842.1": "Wp\u0142ata"
    },
    C = {
        "5W6RPzXMB02rBNpMInyjsw#Value.-1075859842.1": "Dep\xF3sitos",
        "NmldUu41m0mfpe1MMwXCKQ#Value": "Voltar",
        "eor0I88PGUy7f21cKU12CQ#Value": "Erro",
        "yRNaYs5uDEWHtWSCod73Sw#Title": "Dep\xF3sitos",
        "yRNaYs5uDEWHtWSCod73Sw#TitleExpression.-1075859842.1": "Dep\xF3sitos"
    },
    b = {
        "NmldUu41m0mfpe1MMwXCKQ#Value": "Retour",
        "eor0I88PGUy7f21cKU12CQ#Value": "Erreur"
    },
    y = {
        "ar-001": {
            translations: v,
            isRTL: !0
        },
        "de-DE": {
            translations: R,
            isRTL: !1
        },
        "es-ES": {
            translations: p,
            isRTL: !1
        },
        "it-IT": {
            translations: w,
            isRTL: !1
        },
        "pl-PL": {
            translations: W,
            isRTL: !1
        },
        "pt-PT": {
            translations: C,
            isRTL: !1
        },
        "fr-FR": {
            translations: b,
            isRTL: !1
        }
    };
var a = h; {
    let i = class i extends a.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, y);
            var u = this.controller;
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
                var r = this.model,
                    t = this.controller,
                    u = this.idService;
                return a.Logger.startActiveSpan("OnReady", function(n) {
                    return n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "b6a06f12-151c-470b-95a6-467977f36c10"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var E = new a.DataTypes.VariableHolder,
                            d = new a.DataTypes.VariableHolder;
                        return a.Flow.executeAsyncFlow(function() {
                            return r.variables.isLoadingVar = !0, r.flush(), s.sendAuthorize$Action(!1, e).then(function(l) {
                                E.value = l
                            }).then(function() {
                                return r.flush(), s.postCashierFiat$Action("deposit", "", e).then(function(l) {
                                    d.value = l
                                })
                            }).then(function() {
                                r.variables.iFrameURLVar = d.value.responseOut.cashierAttr, r.variables.isLoadingVar = !1
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
        onReady$Action(e) {
            var r = this.controller;
            return a.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "b6a06f12-151c-470b-95a6-467977f36c10"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
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
                    u = this.idService;
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
                return _.default.handleError(e, this.callContext())
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
    c(i, "ControllerInner");
    let o = i;
    m = o
}
var m, M = new a.Controller.ControllerFactory(m, f);
export {
    M as a
};