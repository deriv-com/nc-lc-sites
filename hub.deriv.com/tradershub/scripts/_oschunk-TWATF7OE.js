import {
    a as s
} from "./_oschunk-5N5TJ3ES.js";
import {
    a as l
} from "./_oschunk-2TPJE4AL.js";
import {
    d as o
} from "./_oschunk-VADNKVBQ.js";
import {
    ia as n
} from "./_oschunk-5EPHB76O.js";
import {
    c as a
} from "./_oschunk-DVBKI63I.js";
var m = {
        "PqK8goSVIkaCNMh+p4RLQQ#Title": "\u0645\u0633\u0627\u0639\u062F \u0627\u0644\u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0645\u0633\u0628\u0642",
        "PqK8goSVIkaCNMh+p4RLQQ#TitleExpression.1885050341.1": "\u0645\u0633\u0627\u0639\u062F \u0627\u0644\u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0645\u0633\u0628\u0642"
    },
    u = {
        "PqK8goSVIkaCNMh+p4RLQQ#Title": "Preload-Helfer",
        "PqK8goSVIkaCNMh+p4RLQQ#TitleExpression.1885050341.1": "Preload-Helfer"
    },
    c = {
        "PqK8goSVIkaCNMh+p4RLQQ#Title": "Ayudante de precarga",
        "PqK8goSVIkaCNMh+p4RLQQ#TitleExpression.1885050341.1": "Ayudante de precarga"
    },
    R = {
        "PqK8goSVIkaCNMh+p4RLQQ#Title": "Aide au pr\xE9chargement",
        "PqK8goSVIkaCNMh+p4RLQQ#TitleExpression.1885050341.1": "Aide au pr\xE9chargement"
    },
    v = {
        "PqK8goSVIkaCNMh+p4RLQQ#Title": "Helper di pre-caricamento",
        "PqK8goSVIkaCNMh+p4RLQQ#TitleExpression.1885050341.1": "Helper di pre-caricamento"
    },
    P = {
        "PqK8goSVIkaCNMh+p4RLQQ#Title": "Pomoc za\u0142adunkowa",
        "PqK8goSVIkaCNMh+p4RLQQ#TitleExpression.1885050341.1": "Pomoc za\u0142adunkowa"
    },
    E = {
        "PqK8goSVIkaCNMh+p4RLQQ#Title": "Preload Helper",
        "PqK8goSVIkaCNMh+p4RLQQ#TitleExpression.1885050341.1": "Preload Helper"
    },
    H = {
        "PqK8goSVIkaCNMh+p4RLQQ#Title": "\u041F\u043E\u043C\u043E\u0449\u043D\u0438\u043A \u043F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438",
        "PqK8goSVIkaCNMh+p4RLQQ#TitleExpression.1885050341.1": "\u041F\u043E\u043C\u043E\u0449\u043D\u0438\u043A \u043F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438"
    },
    i = {
        "ar-001": {
            translations: m,
            isRTL: !0
        },
        "de-DE": {
            translations: u,
            isRTL: !1
        },
        "es-ES": {
            translations: c,
            isRTL: !1
        },
        "fr-FR": {
            translations: R,
            isRTL: !1
        },
        "it-IT": {
            translations: v,
            isRTL: !1
        },
        "pl-PL": {
            translations: P,
            isRTL: !1
        },
        "pt-PT": {
            translations: E,
            isRTL: !1
        },
        "ru-RU": {
            translations: H,
            isRTL: !1
        }
    };
var d = n; {
    let t = class t extends d.Controller.BaseViewController {
        constructor(e, _, p) {
            super(e, _, p, i);
            var C = this.controller;
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
                return l.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return o.defaultTimeout
        }
    };
    a(t, "ControllerInner");
    let r = t;
    h = r
}
var h, S = new d.Controller.ControllerFactory(h, s);
export {
    S as a
};