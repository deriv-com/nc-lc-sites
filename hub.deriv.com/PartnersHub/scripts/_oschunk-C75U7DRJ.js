import {
    a as g
} from "./_oschunk-JHXZLUP2.js";
import {
    d as n
} from "./_oschunk-LWMGEL7F.js";
import {
    a as h
} from "./_oschunk-4GXKK3IG.js";
import {
    a as R,
    g as v,
    i as d
} from "./_oschunk-WZHUAZJP.js";
import {
    q as _
} from "./_oschunk-BDI2RWOA.js";
import {
    ia as l
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as o,
    h as H
} from "./_oschunk-QHO7QY6K.js";
var r = H(R());
var p = {};
var P = l; {
    let i = class i extends P.Controller.BaseViewController {
        constructor(e, u, t) {
            super(e, u, t, p);
            var E = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
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
    o(i, "ControllerInner");
    let s = i;
    b = s
}
var b, f = new P.Controller.ControllerFactory(b, h);
var J = d.PlaceholderContent,
    j = d.IteratorPlaceholderContent,
    a = class a extends v.BaseWebBlock {
        static get displayName() {
            return "Common.LoaderBlock"
        }
        static getAttributes() {
            return {
                codeFunction: "LoaderBlock",
                functionKey: "403a5f85-01c7-4e0b-9def-b69c2b3f8850",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Common.LoaderBlock.css"]
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
            return f
        }
        get title() {
            return ""
        }
        internalRender() {
            let i = this.model,
                m = this.controller,
                e = this.idService,
                u = m.validationService,
                t = this.widgetsRecordProvider,
                E = m.callContext(),
                y = a.ifWidget,
                C = a.textWidget,
                O = a.asPrimitiveValue,
                w = a.getTranslation,
                S = this;
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
o(a, "View");
var c = a,
    q = c;
export {
    q as a
};