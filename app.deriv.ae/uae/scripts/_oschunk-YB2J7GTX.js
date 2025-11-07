import {
    a as w
} from "./_oschunk-LLAHPWP3.js";
import {
    a as b,
    g as l,
    m as E,
    o as y,
    q as f,
    r as S,
    s as H,
    t as _
} from "./_oschunk-4VHUVDBV.js";
import {
    W as a,
    c as r,
    e as z
} from "./_oschunk-M5BUVJ72.js";
var M = z(b());
var i = a,
    c = class c extends i.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(i.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
r(c, "VariablesRecord");
var o = c;
o.init();
var h = class h extends i.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
r(h, "WidgetsRecord");
var d = h,
    u = class u extends i.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return o
        }
        static getWidgetsRecordConstructor() {
            return d
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {}
    };
r(u, "Model");
var s = u;
s._hasValidationWidgetsValue = void 0;
var T = new i.Model.ModelFactory(s);
var F = a,
    v = class v extends F.LanguageResources.BaseMessagesProvider {
        constructor(t) {
            super(t), this.setMessage("Validation.Mandatory", "Required field!"), this.setMessage("Validation.Integer", "Integer expected!"), this.setMessage("Validation.LongInteger", "Integer expected!"), this.setMessage("Validation.Decimal", "Decimal expected!"), this.setMessage("Validation.Currency", "Currency expected!"), this.setMessage("Validation.Date", "Date expected!"), this.setMessage("Validation.Time", "Time expected!"), this.setMessage("Validation.DateTime", "DateTime expected!"), this.setMessage("Validation.Text", "Text expected!"), this.setMessage("Validation.PhoneNumber", "Phone Number expected!"), this.setMessage("Validation.Email", "Email expected!"), this.setMessage("UpgradeComplete", "Your application has been updated to the latest version."), this.setMessage("AppInitError.Generic", "An error occurred while trying to update the app. If you want to retry the update, restart the app."), this.setMessage("AppInitError.Resources", "An error occurred while trying to update the app. If you want to retry the update, restart the app."), this.setMessage("AppInitError.DataModel", "An error occurred while trying to update the app. If you want to retry the update, restart the app. If the problem persists you can reinstall, but all local data will be lost."), this.setMessage("UpgradeRequired", "Your application needs to be updated. Tap here to update."), this.setMessage("UpgradeRequiredDataLoss", "Your application needs to be updated. Unsaved data will be lost. Tap here to update.")
        }
    };
r(v, "MessagesProvider");
var p = v,
    C = new p;
var O = a; {
    let t = class t extends O.Controller.BaseViewController {
        constructor(e, m, g) {
            super(e, m, g);
            var R = this.controller;
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
        get onSyncStartEventHandler() {
            return this.hasOwnProperty("_onSyncStartEventHandler") || (this._onSyncStartEventHandler = null), this._onSyncStartEventHandler
        }
        set onSyncStartEventHandler(e) {
            this._onSyncStartEventHandler = e
        }
        get onSyncCompleteEventHandler() {
            return this.hasOwnProperty("_onSyncCompleteEventHandler") || (this._onSyncCompleteEventHandler = null), this._onSyncCompleteEventHandler
        }
        set onSyncCompleteEventHandler(e) {
            this._onSyncCompleteEventHandler = e
        }
        get onSyncErrorEventHandler() {
            return this.hasOwnProperty("_onSyncErrorEventHandler") || (this._onSyncErrorEventHandler = null), this._onSyncErrorEventHandler
        }
        set onSyncErrorEventHandler(e) {
            this._onSyncErrorEventHandler = e
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(e) {
                return controller.handleError(e)
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return w.defaultTimeout
        }
    };
    r(t, "ControllerInner");
    let n = t;
    P = n
}
var P, V = new O.Controller.ControllerFactory(P, C);
var le = l.PlaceholderContent,
    de = l.IteratorPlaceholderContent,
    A = r(function() {
        var n = y(function(t) {
            var x = t.model,
                e = t.controller,
                m = t.controller.idService,
                g = e.validationService,
                R = e.callContext(),
                N = H,
                W = _,
                B = {
                    props: t,
                    validateWidget: r(function(I) {
                        t.validateWidget(t, I)
                    }, "validateWidget")
                },
                L = x,
                D = S,
                U = f,
                G = E();
            return M.createElement("div", t.rootNodeProperties, D(!1, !1, this, function() {
                return []
            }, function() {
                return []
            }))
        }, {
            topLevelComponent: !1,
            getAttributes: r(function() {
                return {
                    codeFunction: "InstantiateIziToast",
                    functionKey: "8774742a-6767-4327-90dc-bed7b20491bc",
                    functionOwnerName: "iziToast",
                    functionOwnerKey: "4bb7c1d3-7175-4fd0-a1f9-a888b337636b",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "iziToast.InstantiateIziToast",
            modelFactory: T,
            controllerFactory: V
        });
        return n.getCssDependencies = function() {
            return ["css/iziToast.iziToast.InstantiateIziToast.css"]
        }, n.getJsDependencies = function() {
            return ["scripts/iziToast.UserScripts.iziToast_min.js"]
        }, n.getBlocks = function() {
            return []
        }, n
    }, "componentFactory"),
    ce = A();
export {
    ce as a
};