import {
    a as i
} from "./_oschunk-UK73WSZT.js";
import {
    a as o
} from "./_oschunk-Y45M2O2K.js";
import {
    d as s
} from "./_oschunk-27GDEXUT.js";
import {
    ia as a
} from "./_oschunk-NTQBNJ73.js";
import {
    c as n
} from "./_oschunk-DVBKI63I.js";
var m = {
        "plPzcZctakG9feFYLno3IQ#Value": "Chat en direct",
        "XnKA6rBW3ke_P4X4nIbrkA#Value": "Veuillez nous contacter via le chat en direct pour obtenir de l'aide.",
        "Y0+ebZQivEObC+U8jpco3g#Value": "Le d\xE9p\xF4t est temporairement indisponible"
    },
    l = {
        "fr-FR": {
            translations: m,
            isRTL: !1
        }
    };
var d = a; {
    let r = class r extends d.Controller.BaseViewController {
        constructor(e, u, c) {
            super(e, u, c, l);
            var v = this.controller;
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
    n(r, "ControllerInner");
    let t = r;
    h = t
}
var h, C = new d.Controller.ControllerFactory(h, o);
export {
    C as a
};