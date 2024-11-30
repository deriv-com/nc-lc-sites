import {
    a as o
} from "./_oschunk-HBQEEZVM.js";
import {
    a as i
} from "./_oschunk-LHY3WMNC.js";
import {
    d as s
} from "./_oschunk-XMOR6XCC.js";
import {
    ia as n
} from "./_oschunk-NTQBNJ73.js";
import {
    c as a
} from "./_oschunk-DVBKI63I.js";
var c = {
        "p75OmenE7EeaAGyCxVEKHw#Title": "\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0634\u062E\u0635\u064A\u0629 | Deriv",
        "p75OmenE7EeaAGyCxVEKHw#TitleExpression.-545367396.1": "\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0634\u062E\u0635\u064A\u0629 | Deriv"
    },
    u = {
        "p75OmenE7EeaAGyCxVEKHw#Title": "Pers\xF6nliche Daten | Deriv",
        "p75OmenE7EeaAGyCxVEKHw#TitleExpression.-545367396.1": "Pers\xF6nliche Daten | Deriv"
    },
    v = {
        "p75OmenE7EeaAGyCxVEKHw#Title": "Detalles personales | Deriv",
        "p75OmenE7EeaAGyCxVEKHw#TitleExpression.-545367396.1": "Detalles personales | Deriv"
    },
    D = {
        "p75OmenE7EeaAGyCxVEKHw#Title": "D\xE9tails personnels | Deriv",
        "p75OmenE7EeaAGyCxVEKHw#TitleExpression.-545367396.1": "D\xE9tails personnels | Deriv"
    },
    p = {
        "p75OmenE7EeaAGyCxVEKHw#Title": "Dettagli personali | Deriv",
        "p75OmenE7EeaAGyCxVEKHw#TitleExpression.-545367396.1": "Dettagli personali | Deriv"
    },
    m = {
        "p75OmenE7EeaAGyCxVEKHw#Title": "Dane osobowe | Deriv",
        "p75OmenE7EeaAGyCxVEKHw#TitleExpression.-545367396.1": "Dane osobowe | Deriv"
    },
    H = {
        "p75OmenE7EeaAGyCxVEKHw#Title": "Dados pessoais | Deriv",
        "p75OmenE7EeaAGyCxVEKHw#TitleExpression.-545367396.1": "Dados pessoais | Deriv"
    },
    R = {
        "p75OmenE7EeaAGyCxVEKHw#Title": "\u041B\u0438\u0447\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 | Deriv",
        "p75OmenE7EeaAGyCxVEKHw#TitleExpression.-545367396.1": "\u041B\u0438\u0447\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 | Deriv"
    },
    l = {
        "ar-001": {
            translations: c,
            isRTL: !0
        },
        "de-DE": {
            translations: u,
            isRTL: !1
        },
        "es-ES": {
            translations: v,
            isRTL: !1
        },
        "fr-FR": {
            translations: D,
            isRTL: !1
        },
        "it-IT": {
            translations: p,
            isRTL: !1
        },
        "pl-PL": {
            translations: m,
            isRTL: !1
        },
        "pt-PT": {
            translations: H,
            isRTL: !1
        },
        "ru-RU": {
            translations: R,
            isRTL: !1
        }
    };
var E = n; {
    let r = class r extends E.Controller.BaseViewController {
        constructor(e, h, _) {
            super(e, h, _, l);
            var f = this.controller;
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
                return o.default.handleError(e, this.callContext())
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
    a(r, "ControllerInner");
    let t = r;
    d = t
}
var d, w = new E.Controller.ControllerFactory(d, i);
export {
    w as a
};