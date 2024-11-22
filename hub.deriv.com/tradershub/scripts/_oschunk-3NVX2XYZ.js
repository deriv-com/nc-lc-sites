import {
    a as o
} from "./_oschunk-Y45M2O2K.js";
import {
    a as i
} from "./_oschunk-TIJZDWYD.js";
import {
    d as s
} from "./_oschunk-27GDEXUT.js";
import {
    ia as a
} from "./_oschunk-NTQBNJ73.js";
import {
    c as r
} from "./_oschunk-DVBKI63I.js";
var v = {
        "Ok0_TnXGtUi0Kpgc0Z60Pg#Value": "Aller \xE0 la connexion",
        "QGbT7R8uHkmdaWHw9qRphw#Value": "Veuillez contacter votre administrateur syst\xE8me.",
        "33gIhDYS6E6qIKReu+2PmA#Value": "Vous n'avez pas la permission n\xE9cessaire pour voir cet \xE9cran.",
        "5nVIK0JIkEq75V4SgIpFYw#Title": "Autorisations invalides",
        "5nVIK0JIkEq75V4SgIpFYw#TitleExpression.-1269489733.1": "Autorisations invalides"
    },
    l = {
        "fr-FR": {
            translations: v,
            isRTL: !1
        }
    };
var d = a; {
    let n = class n extends d.Controller.BaseViewController {
        constructor(e, u, m) {
            super(e, u, m, l);
            var c = this.controller;
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
    r(n, "ControllerInner");
    let t = n;
    h = t
}
var h, P = new d.Controller.ControllerFactory(h, o);
export {
    P as a
};