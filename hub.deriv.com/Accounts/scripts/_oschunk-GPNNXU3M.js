import {
    p as i
} from "./_oschunk-M2CKCDBB.js";
import {
    a as E
} from "./_oschunk-NQZZDANH.js";
import {
    a as A,
    g as _,
    i as c
} from "./_oschunk-WZHUAZJP.js";
import {
    a as R
} from "./_oschunk-ZHFHVHFO.js";
import {
    a as f,
    o as y
} from "./_oschunk-KZFTAIEG.js";
import {
    ia as s
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as a,
    h as O
} from "./_oschunk-QHO7QY6K.js";
var o = O(A());
var P = s; {
    let t = class t extends P.Controller.BaseViewController {
        constructor(e, g, n) {
            super(e, g, n);
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
                return controller.handleError(e)
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return y.defaultTimeout
        }
    };
    a(t, "ControllerInner");
    let l = t;
    D = l
}
var D, H = new P.Controller.ControllerFactory(D, E);
var K = c.PlaceholderContent,
    $ = c.IteratorPlaceholderContent,
    r = class r extends _.BaseWebBlock {
        static get displayName() {
            return "Common.DeviceDisplayWrapper"
        }
        static getAttributes() {
            return {
                codeFunction: "DeviceDisplayWrapper",
                functionKey: "7957943c-1e75-440d-a354-03f7bd2d8253",
                functionOwnerName: "Accounts",
                functionOwnerKey: "8a32fa32-34f5-4338-b6db-4f1ce8fdd638",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return R
        }
        get controllerFactory() {
            return H
        }
        get title() {
            return ""
        }
        internalRender() {
            let t = this.model,
                m = this.controller,
                e = this.idService,
                g = m.validationService,
                n = this.widgetsRecordProvider,
                C = m.callContext(),
                v = r.ifWidget,
                S = r.textWidget,
                b = r.asPrimitiveValue,
                I = r.getTranslation,
                d = this;
            return o.createElement("div", this.getRootNodeProperties(), v(t.variables.isDesktopIn || f.getDevice() === "desktop", !1, this, function() {
                return [o.createElement(i, {
                    align: 0,
                    content: d.props.placeholders.desktopLayout,
                    style: "full-height full-width",
                    _idProps: {
                        service: e,
                        name: "DesktopLayout"
                    },
                    _widgetRecordProvider: n
                })]
            }, function() {
                return [v(t.variables.isTabletIn, !1, this, function() {
                    return [o.createElement(i, {
                        align: 0,
                        content: d.props.placeholders.tabletLayout,
                        style: "full-height",
                        _idProps: {
                            service: e,
                            name: "TabletLayout"
                        },
                        _widgetRecordProvider: n
                    })]
                }, function() {
                    return [o.createElement(i, {
                        align: 0,
                        content: d.props.placeholders.defaultLayout,
                        style: "full-height",
                        _idProps: {
                            service: e,
                            name: "DefaultLayout"
                        },
                        _widgetRecordProvider: n
                    })]
                })]
            }))
        }
    };
a(r, "View");
var h = r,
    J = h;
var w = {};
var x = s,
    p = class p extends x.LanguageResources.BaseMessagesProvider {
        constructor(t) {
            super(t), this.setMessage("Validation.Mandatory", "Required field!"), this.setMessage("Validation.Integer", "Integer expected!"), this.setMessage("Validation.LongInteger", "Integer expected!"), this.setMessage("Validation.Decimal", "Decimal expected!"), this.setMessage("Validation.Currency", "Currency expected!"), this.setMessage("Validation.Date", "Date expected!"), this.setMessage("Validation.Time", "Time expected!"), this.setMessage("Validation.DateTime", "DateTime expected!"), this.setMessage("Validation.Text", "Text expected!"), this.setMessage("Validation.PhoneNumber", "Phone Number expected!"), this.setMessage("Validation.Email", "Email expected!"), this.setMessage("UpgradeComplete", "Your application has been updated to the latest version."), this.setMessage("AppInitError.Generic", "An error occurred while trying to update the app. If you want to retry the update, restart the app."), this.setMessage("AppInitError.Resources", "An error occurred while trying to update the app. If you want to retry the update, restart the app."), this.setMessage("AppInitError.DataModel", "An error occurred while trying to update the app. If you want to retry the update, restart the app. If the problem persists you can reinstall, but all local data will be lost."), this.setMessage("UpgradeRequired", "Your application needs to be updated. Tap here to update."), this.setMessage("UpgradeRequiredDataLoss", "Your application needs to be updated. Unsaved data will be lost. Tap here to update.")
        }
    };
a(p, "MessagesProvider");
var u = p,
    ee = new u(w);
export {
    J as a, ee as b
};