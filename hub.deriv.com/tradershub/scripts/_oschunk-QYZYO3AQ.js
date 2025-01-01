import {
    a as g
} from "./_oschunk-I4HVSXAZ.js";
import {
    h as f
} from "./_oschunk-42NACYKQ.js";
import {
    a as u
} from "./_oschunk-2M7PXTSQ.js";
import {
    a as P,
    g as v,
    i
} from "./_oschunk-RKYF3TWC.js";
import {
    c as m
} from "./_oschunk-DOFMR6EA.js";
import {
    ia as s
} from "./_oschunk-2JKANR6M.js";
import {
    c as n,
    g as C
} from "./_oschunk-DVBKI63I.js";
var l = C(P());
var E = {};
var _ = s; {
    let r = class r extends _.Controller.BaseViewController {
        constructor(e, h, o) {
            super(e, h, o, E);
            var y = this.controller;
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
            return m.defaultTimeout
        }
    };
    n(r, "ControllerInner");
    let a = r;
    p = a
}
var p, H = new _.Controller.ControllerFactory(p, u);
var J = i.PlaceholderContent,
    j = i.IteratorPlaceholderContent,
    t = class t extends v.BaseWebBlock {
        static get displayName() {
            return "Common.BalanceSkeletonLoader"
        }
        static getAttributes() {
            return {
                codeFunction: "BalanceSkeletonLoader",
                functionKey: "34c290f1-aec8-4946-84d5-541c24387f57",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.Common.BalanceSkeletonLoader.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return g
        }
        get controllerFactory() {
            return H
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                c = this.controller,
                e = this.idService,
                h = c.validationService,
                o = this.widgetsRecordProvider,
                y = c.callContext(),
                R = t.ifWidget,
                S = t.textWidget,
                b = t.asPrimitiveValue,
                O = t.getTranslation,
                w = this;
            return l.createElement("div", this.getRootNodeProperties(), l.createElement(f, {
                align: 0,
                animate: !1,
                style: "skeleton balance-loader",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: o
            }))
        }
    };
n(t, "View");
var d = t,
    q = d;
export {
    q as a
};