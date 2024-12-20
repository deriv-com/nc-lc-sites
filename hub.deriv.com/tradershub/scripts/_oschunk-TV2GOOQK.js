import {
    a as o
} from "./_oschunk-HHXALIQU.js";
import {
    a as s
} from "./_oschunk-5N5TJ3ES.js";
import {
    d as i
} from "./_oschunk-VADNKVBQ.js";
import {
    ia as n
} from "./_oschunk-5EPHB76O.js";
import {
    c as a
} from "./_oschunk-DVBKI63I.js";
var _ = {
        "MZs7VpFcU0ujYcDCb2maUA#Title": "\u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0647\u0648\u064A\u0629 | Deriv",
        "MZs7VpFcU0ujYcDCb2maUA#TitleExpression.1272643895.1": "\u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0647\u0648\u064A\u0629 | Deriv"
    },
    D = {
        "MZs7VpFcU0ujYcDCb2maUA#Title": "Identit\xE4tspr\xFCfung | Deriv",
        "MZs7VpFcU0ujYcDCb2maUA#TitleExpression.1272643895.1": "Identit\xE4tspr\xFCfung | Deriv"
    },
    m = {
        "MZs7VpFcU0ujYcDCb2maUA#Title": "Verificaci\xF3n de identidad | Deriv",
        "MZs7VpFcU0ujYcDCb2maUA#TitleExpression.1272643895.1": "Verificaci\xF3n de identidad | Deriv"
    },
    v = {
        "MZs7VpFcU0ujYcDCb2maUA#Title": "V\xE9rification d'identit\xE9 | Deriv",
        "MZs7VpFcU0ujYcDCb2maUA#TitleExpression.1272643895.1": "V\xE9rification d'identit\xE9 | Deriv"
    },
    b = {
        "MZs7VpFcU0ujYcDCb2maUA#Title": "Verifica dell'identit\xE0 | Deriv",
        "MZs7VpFcU0ujYcDCb2maUA#TitleExpression.1272643895.1": "Verifica dell'identit\xE0 | Deriv"
    },
    p = {
        "MZs7VpFcU0ujYcDCb2maUA#Title": "Weryfikacja to\u017Csamo\u015Bci | Deriv",
        "MZs7VpFcU0ujYcDCb2maUA#TitleExpression.1272643895.1": "Weryfikacja to\u017Csamo\u015Bci | Deriv"
    },
    E = {
        "MZs7VpFcU0ujYcDCb2maUA#Title": "Verifica\xE7\xE3o de identidade | Deriv",
        "MZs7VpFcU0ujYcDCb2maUA#TitleExpression.1272643895.1": "Verifica\xE7\xE3o de identidade | Deriv"
    },
    R = {
        "MZs7VpFcU0ujYcDCb2maUA#Title": "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u043B\u0438\u0447\u043D\u043E\u0441\u0442\u0438 | Deriv",
        "MZs7VpFcU0ujYcDCb2maUA#TitleExpression.1272643895.1": "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u043B\u0438\u0447\u043D\u043E\u0441\u0442\u0438 | Deriv"
    },
    l = {
        "ar-001": {
            translations: _,
            isRTL: !0
        },
        "de-DE": {
            translations: D,
            isRTL: !1
        },
        "es-ES": {
            translations: m,
            isRTL: !1
        },
        "fr-FR": {
            translations: v,
            isRTL: !1
        },
        "it-IT": {
            translations: b,
            isRTL: !1
        },
        "pl-PL": {
            translations: p,
            isRTL: !1
        },
        "pt-PT": {
            translations: E,
            isRTL: !1
        },
        "ru-RU": {
            translations: R,
            isRTL: !1
        }
    };
var c = n; {
    let r = class r extends c.Controller.BaseViewController {
        constructor(e, u, h) {
            super(e, u, h, l);
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
            return i.defaultTimeout
        }
    };
    a(r, "ControllerInner");
    let t = r;
    d = t
}
var d, y = new c.Controller.ControllerFactory(d, s);
export {
    y as a
};