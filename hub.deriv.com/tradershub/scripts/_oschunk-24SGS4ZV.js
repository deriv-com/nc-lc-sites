import {
    a as l
} from "./_oschunk-UK73WSZT.js";
import {
    a as s
} from "./_oschunk-Y45M2O2K.js";
import {
    d as o
} from "./_oschunk-27GDEXUT.js";
import {
    ia as a
} from "./_oschunk-NTQBNJ73.js";
import {
    c as n
} from "./_oschunk-DVBKI63I.js";
var c = {
        "2RqfO2mffECfYPxFy2dpLA#Value": "Convertir des fiat en crypto pour alimenter votre portefeuille.",
        "GZRV+onPd02s7Z+XK9y+bA#Value": "passerelle Fiat",
        "g9ntE1AR_EadkKSwzfgewQ#Value": "Scannez le code QR pour d\xE9poser ou copiez l'adresse du portefeuille.",
        "jRPFvbY5eEyDrJZgFojEIg#Value": "Transfert crypto",
        "Ab183c9suEedzb1BWs6Ysw#Value": "Choisissez un mode de d\xE9p\xF4t"
    },
    i = {
        "fr-FR": {
            translations: c,
            isRTL: !1
        }
    };
var d = a; {
    let r = class r extends d.Controller.BaseViewController {
        constructor(e, u, E) {
            super(e, u, E, i);
            var m = this.controller;
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
    n(r, "ControllerInner");
    let t = r;
    h = t
}
var h, P = new d.Controller.ControllerFactory(h, s);
export {
    P as a
};