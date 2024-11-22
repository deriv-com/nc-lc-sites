import {
    a as s
} from "./_oschunk-AGISAFBQ.js";
import {
    a as o
} from "./_oschunk-Y45M2O2K.js";
import {
    d as i
} from "./_oschunk-27GDEXUT.js";
import {
    ia as a
} from "./_oschunk-NTQBNJ73.js";
import {
    c as n
} from "./_oschunk-DVBKI63I.js";
var v = {
        "ami+Wu5n+UeeTU8tRrHI6w#Value": "Renvoie l'email",
        "Qz3kVnpsxkWctevjeSCALQ#Value": "Demandez-en un nouveau.",
        "XE1yNfRdJ0iwXRRCn6CYPg#Value": "Lien de v\xE9rification de l'e-mail expir\xE9",
        "p8ucEya1Ik6WcWrl8uciYA#Title": "Lien de v\xE9rification expir\xE9 | Deriv",
        "p8ucEya1Ik6WcWrl8uciYA#TitleExpression.929560286.1": "Lien de v\xE9rification expir\xE9 | Deriv"
    },
    l = {
        "fr-FR": {
            translations: v,
            isRTL: !1
        }
    };
var d = a; {
    let r = class r extends d.Controller.BaseViewController {
        constructor(e, u, c) {
            super(e, u, c, l);
            var E = this.controller;
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
                return s.default.handleError(e, this.callContext())
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
    n(r, "ControllerInner");
    let t = r;
    h = t
}
var h, D = new d.Controller.ControllerFactory(h, o);
export {
    D as a
};