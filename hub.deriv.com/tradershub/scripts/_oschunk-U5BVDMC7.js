import {
    a as g
} from "./_oschunk-GRCLOXGJ.js";
import {
    h as n
} from "./_oschunk-E7JQAU4J.js";
import {
    a as _
} from "./_oschunk-5N5TJ3ES.js";
import {
    a as y,
    g as v,
    i as l
} from "./_oschunk-T77XORCW.js";
import {
    d as u
} from "./_oschunk-VADNKVBQ.js";
import {
    ia as d
} from "./_oschunk-5EPHB76O.js";
import {
    c as o,
    g as R
} from "./_oschunk-DVBKI63I.js";
var r = R(y());
var p = {};
var b = d; {
    let i = class i extends b.Controller.BaseViewController {
        constructor(e, m, t) {
            super(e, m, t, p);
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
            return u.defaultTimeout
        }
    };
    o(i, "ControllerInner");
    let s = i;
    f = s
}
var f, E = new b.Controller.ControllerFactory(f, _);
var J = l.PlaceholderContent,
    j = l.IteratorPlaceholderContent,
    a = class a extends v.BaseWebBlock {
        static get displayName() {
            return "Common.LoaderBlock"
        }
        static getAttributes() {
            return {
                codeFunction: "LoaderBlock",
                functionKey: "ce2d99b7-707f-4c68-a682-8e9d39410d00",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.Common.LoaderBlock.css"]
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
            let i = this.model,
                h = this.controller,
                e = this.idService,
                m = h.validationService,
                t = this.widgetsRecordProvider,
                P = h.callContext(),
                C = a.ifWidget,
                H = a.textWidget,
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