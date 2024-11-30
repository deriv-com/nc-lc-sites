import {
    a as i
} from "./_oschunk-S244237N.js";
import {
    a as o
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
var H = {
        "dyaJiXHbZkyyymUH8Znkog#Value": "Hubs"
    },
    y = {
        "dyaJiXHbZkyyymUH8Znkog#Value": "Hubs"
    },
    v = {
        "dyaJiXHbZkyyymUH8Znkog#Value": "Hubs"
    },
    c = {
        "dyaJiXHbZkyyymUH8Znkog#Value": "Hubs"
    },
    m = {
        "dyaJiXHbZkyyymUH8Znkog#Value": "Hubs"
    },
    E = {
        "dyaJiXHbZkyyymUH8Znkog#Value": "Hub"
    },
    b = {
        "dyaJiXHbZkyyymUH8Znkog#Value": "Hubs"
    },
    R = {
        "dyaJiXHbZkyyymUH8Znkog#Value": "\u0425\u0430\u0431\u044B"
    },
    l = {
        "ar-001": {
            translations: H,
            isRTL: !0
        },
        "de-DE": {
            translations: y,
            isRTL: !1
        },
        "es-ES": {
            translations: v,
            isRTL: !1
        },
        "fr-FR": {
            translations: c,
            isRTL: !1
        },
        "it-IT": {
            translations: m,
            isRTL: !1
        },
        "pl-PL": {
            translations: E,
            isRTL: !1
        },
        "pt-PT": {
            translations: b,
            isRTL: !1
        },
        "ru-RU": {
            translations: R,
            isRTL: !1
        }
    };
var d = n; {
    let r = class r extends d.Controller.BaseViewController {
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
                return i.default.handleError(e, this.callContext())
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
    u = t
}
var u, C = new d.Controller.ControllerFactory(u, o);
export {
    C as a
};