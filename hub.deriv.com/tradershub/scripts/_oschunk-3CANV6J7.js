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
var m = {
        "qP+gusWZAEy3JrN6qtLweQ#Value": "Nous n'avons pas pu trouver cette page. Elle n'est peut-\xEAtre pas disponible dans votre pays, ou un lien bris\xE9 vous a amen\xE9 ici.",
        "Og0eU7daFE28e51Sg0JB6w#Value": "Il se peut qu'il ne soit pas disponible dans votre pays, ou qu'un lien bris\xE9 vous ait amen\xE9 ici.",
        "stOWzv_CDkKd6Bu+k37e7w#Value": "Nous n'avons pas pu trouver cette page",
        "UNSUqsFml02eH_fgK5zqeA#Title": "404 - Page non trouv\xE9e",
        "UNSUqsFml02eH_fgK5zqeA#TitleExpression.1091591615.1": "404 - Page non trouv\xE9e"
    },
    l = {
        "fr-FR": {
            translations: m,
            isRTL: !1
        }
    };
var d = a; {
    let n = class n extends d.Controller.BaseViewController {
        constructor(e, u, v) {
            super(e, u, v, l);
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
var h, R = new d.Controller.ControllerFactory(h, o);
export {
    R as a
};