import {
    d as n
} from "./_oschunk-M2CKCDBB.js";
import {
    a as g
} from "./_oschunk-DSZRJG3L.js";
import {
    a as h
} from "./_oschunk-NQZZDANH.js";
import {
    a as y,
    g as v,
    i as d
} from "./_oschunk-WZHUAZJP.js";
import {
    o as _
} from "./_oschunk-KZFTAIEG.js";
import {
    ia as l
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as o,
    h as R
} from "./_oschunk-QHO7QY6K.js";
var r = R(y());
var p = l; {
    let a = class a extends p.Controller.BaseViewController {
        constructor(e, m, t) {
            super(e, m, t);
            var P = this.controller;
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
            return _.defaultTimeout
        }
    };
    o(a, "ControllerInner");
    let s = a;
    f = s
}
var f, E = new p.Controller.ControllerFactory(f, h);
var M = d.PlaceholderContent,
    $ = d.IteratorPlaceholderContent,
    i = class i extends v.BaseWebBlock {
        static get displayName() {
            return "Common.Loader"
        }
        static getAttributes() {
            return {
                codeFunction: "Loader",
                functionKey: "c49ce1e6-af35-422b-8e37-15160de89864",
                functionOwnerName: "Accounts",
                functionOwnerKey: "8a32fa32-34f5-4338-b6db-4f1ce8fdd638",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/Accounts.Common.Loader.css"]
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
            return E
        }
        get title() {
            return ""
        }
        internalRender() {
            let a = this.model,
                u = this.controller,
                e = this.idService,
                m = u.validationService,
                t = this.widgetsRecordProvider,
                P = u.callContext(),
                b = i.ifWidget,
                C = i.textWidget,
                H = i.asPrimitiveValue,
                O = i.getTranslation,
                w = this;
            return r.createElement("div", this.getRootNodeProperties(), r.createElement(n, {
                align: 0,
                animate: !1,
                style: "initial-loader initial-loader__loading",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, r.createElement(n, {
                align: 0,
                animate: !1,
                style: "initial-loader__barspinner barspinner barspinner-light",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }, r.createElement(n, {
                align: 0,
                animate: !1,
                style: "initial-loader__barspinner--rect barspinner__rect barspinner__rect--1 rect1",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            }), r.createElement(n, {
                align: 0,
                animate: !1,
                style: "initial-loader__barspinner--rect barspinner__rect barspinner__rect--2 rect2",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "3"
                },
                _widgetRecordProvider: t
            }), r.createElement(n, {
                align: 0,
                animate: !1,
                style: "initial-loader__barspinner--rect barspinner__rect barspinner__rect--3 rect3",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "4"
                },
                _widgetRecordProvider: t
            }), r.createElement(n, {
                align: 0,
                animate: !1,
                style: "initial-loader__barspinner--rect barspinner__rect barspinner__rect--4 rect4",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "5"
                },
                _widgetRecordProvider: t
            }), r.createElement(n, {
                align: 0,
                animate: !1,
                style: "initial-loader__barspinner--rect barspinner__rect barspinner__rect--5 rect5",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "6"
                },
                _widgetRecordProvider: t
            }))))
        }
    };
o(i, "View");
var c = i,
    G = c;
export {
    G as a
};