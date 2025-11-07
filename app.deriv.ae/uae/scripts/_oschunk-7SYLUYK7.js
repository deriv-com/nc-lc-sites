import {
    f as o
} from "./_oschunk-VR5BNL2K.js";
import {
    a as B,
    g as v,
    m as y,
    o as S,
    q as H,
    r as C,
    s as P,
    t as O
} from "./_oschunk-4VHUVDBV.js";
import {
    a as g
} from "./_oschunk-KXORGPRQ.js";
import {
    Sb as f
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as d,
    c as r,
    e as T
} from "./_oschunk-M5BUVJ72.js";
var l = d,
    _ = class _ extends l.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(l.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
r(_, "VariablesRecord");
var c = _;
c.init();
var h = class h extends l.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
r(h, "WidgetsRecord");
var m = h,
    p = class p extends l.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return c
        }
        static getWidgetsRecordConstructor() {
            return m
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {}
    };
r(p, "Model");
var u = p;
u._hasValidationWidgetsValue = void 0;
var b = new l.Model.ModelFactory(u);
var a = T(B());
var R = {};
var w = d; {
    let t = class t extends w.Controller.BaseViewController {
        constructor(e, n, E) {
            super(e, n, E, R);
            var F = this.controller;
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
            return f.defaultTimeout
        }
    };
    r(t, "ControllerInner");
    let i = t;
    V = i
}
var V, W = new w.Controller.ControllerFactory(V, g);
var ue = v.PlaceholderContent,
    ve = v.IteratorPlaceholderContent,
    M = r(function() {
        var i = S(function(t) {
            var D = t.model,
                e = t.controller,
                n = t.controller.idService,
                E = e.validationService,
                F = e.callContext(),
                N = P,
                A = O,
                k = {
                    props: t,
                    validateWidget: r(function(x) {
                        t.validateWidget(t, x)
                    }, "validateWidget")
                },
                s = D,
                I = C,
                L = H,
                z = y();
            return a.createElement("div", t.rootNodeProperties, a.createElement(o, {
                align: 0,
                animate: !1,
                style: "initial-loader initial-loader__loading",
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "0"
                },
                _widgetRecordProvider: s
            }, a.createElement(o, {
                align: 0,
                animate: !1,
                style: "initial-loader__barspinner barspinner barspinner-light",
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "1"
                },
                _widgetRecordProvider: s
            }, a.createElement(o, {
                align: 0,
                animate: !1,
                style: "initial-loader__barspinner--rect barspinner__rect barspinner__rect--1 rect1",
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "2"
                },
                _widgetRecordProvider: s
            }), a.createElement(o, {
                align: 0,
                animate: !1,
                style: "initial-loader__barspinner--rect barspinner__rect barspinner__rect--2 rect2",
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "3"
                },
                _widgetRecordProvider: s
            }), a.createElement(o, {
                align: 0,
                animate: !1,
                style: "initial-loader__barspinner--rect barspinner__rect barspinner__rect--3 rect3",
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "4"
                },
                _widgetRecordProvider: s
            }), a.createElement(o, {
                align: 0,
                animate: !1,
                style: "initial-loader__barspinner--rect barspinner__rect barspinner__rect--4 rect4",
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "5"
                },
                _widgetRecordProvider: s
            }), a.createElement(o, {
                align: 0,
                animate: !1,
                style: "initial-loader__barspinner--rect barspinner__rect barspinner__rect--5 rect5",
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "6"
                },
                _widgetRecordProvider: s
            }))))
        }, {
            topLevelComponent: !1,
            getAttributes: r(function() {
                return {
                    codeFunction: "LoaderBlock",
                    functionKey: "c4606479-e2d7-430f-b592-f150b39300f6",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Common.LoaderBlock",
            modelFactory: b,
            controllerFactory: W
        });
        return i.getCssDependencies = function() {
            return ["css/uae.Common.LoaderBlock.css", "css/OutSystemsReactWidgets.css"]
        }, i.getJsDependencies = function() {
            return []
        }, i.getBlocks = function() {
            return []
        }, i
    }, "componentFactory"),
    me = M();
export {
    me as a
};