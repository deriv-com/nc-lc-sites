import {
    a as T
} from "./_oschunk-YVFTECWM.js";
import {
    f as P,
    s as S
} from "./_oschunk-VR5BNL2K.js";
import {
    a as U,
    g as v,
    m as D,
    o as C,
    q as H,
    r as F,
    s as O,
    t as b
} from "./_oschunk-4VHUVDBV.js";
import {
    Qb as I,
    vb as d
} from "./_oschunk-Z7QRTJDJ.js";
import {
    I as p,
    W as i,
    c as n,
    e as M
} from "./_oschunk-M5BUVJ72.js";
var l = M(U());
var a = i,
    f = class f extends a.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("GutterSize", "gutterSizeIn", "GutterSize", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return d.gutterSize.base
            }, !1), this.attr("_gutterSizeInDataFetchStatus", "_gutterSizeInDataFetchStatus", "_gutterSizeInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("TabletBehavior", "tabletBehaviorIn", "TabletBehavior", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return d.breakColumns.none
            }, !1), this.attr("_tabletBehaviorInDataFetchStatus", "_tabletBehaviorInDataFetchStatus", "_tabletBehaviorInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("PhoneBehavior", "phoneBehaviorIn", "PhoneBehavior", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return d.breakColumns.none
            }, !1), this.attr("_phoneBehaviorInDataFetchStatus", "_phoneBehaviorInDataFetchStatus", "_phoneBehaviorInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(a.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
n(f, "VariablesRecord");
var c = f;
c.init();
var y = class y extends a.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
n(y, "WidgetsRecord");
var m = y,
    _ = class _ extends a.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return c
        }
        static getWidgetsRecordConstructor() {
            return m
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(e) {
            "GutterSize" in e && (this.variables.gutterSizeIn = e.GutterSize, "_gutterSizeInDataFetchStatus" in e && (this.variables._gutterSizeInDataFetchStatus = e._gutterSizeInDataFetchStatus)), "TabletBehavior" in e && (this.variables.tabletBehaviorIn = e.TabletBehavior, "_tabletBehaviorInDataFetchStatus" in e && (this.variables._tabletBehaviorInDataFetchStatus = e._tabletBehaviorInDataFetchStatus)), "PhoneBehavior" in e && (this.variables.phoneBehaviorIn = e.PhoneBehavior, "_phoneBehaviorInDataFetchStatus" in e && (this.variables._phoneBehaviorInDataFetchStatus = e._phoneBehaviorInDataFetchStatus)), "ExtendedClass" in e && (this.variables.extendedClassIn = e.ExtendedClass, "_extendedClassInDataFetchStatus" in e && (this.variables._extendedClassInDataFetchStatus = e._extendedClassInDataFetchStatus))
        }
    };
n(_, "Model");
var h = _;
h._hasValidationWidgetsValue = void 0;
var B = new a.Model.ModelFactory(h);
var x = {};
var w = i; {
    let e = class e extends w.Controller.BaseViewController {
        constructor(t, o, E) {
            super(t, o, E, x);
            var V = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(t) {
            this._onInitializeEventHandler = t
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = null), this._onReadyEventHandler
        }
        set onReadyEventHandler(t) {
            this._onReadyEventHandler = t
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(t) {
            this._onRenderEventHandler = t
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = null), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(t) {
            this._onDestroyEventHandler = t
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(t) {
            this._onParametersChangedEventHandler = t
        }
        get onSyncStartEventHandler() {
            return this.hasOwnProperty("_onSyncStartEventHandler") || (this._onSyncStartEventHandler = null), this._onSyncStartEventHandler
        }
        set onSyncStartEventHandler(t) {
            this._onSyncStartEventHandler = t
        }
        get onSyncCompleteEventHandler() {
            return this.hasOwnProperty("_onSyncCompleteEventHandler") || (this._onSyncCompleteEventHandler = null), this._onSyncCompleteEventHandler
        }
        set onSyncCompleteEventHandler(t) {
            this._onSyncCompleteEventHandler = t
        }
        get onSyncErrorEventHandler() {
            return this.hasOwnProperty("_onSyncErrorEventHandler") || (this._onSyncErrorEventHandler = null), this._onSyncErrorEventHandler
        }
        set onSyncErrorEventHandler(t) {
            this._onSyncErrorEventHandler = t
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(t) {
                return controller.handleError(t)
            }), this._handleError
        }
        set handleError(t) {
            this._handleError = t
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return I.defaultTimeout
        }
    };
    n(e, "ControllerInner");
    let s = e;
    R = s
}
var R, z = new w.Controller.ControllerFactory(R, T);
var de = v.PlaceholderContent,
    ce = v.IteratorPlaceholderContent,
    A = n(function() {
        var s = C(function(e) {
            var r = e.model,
                t = e.controller,
                o = e.controller.idService,
                E = t.validationService,
                V = t.callContext(),
                N = O,
                G = b,
                g = {
                    props: e,
                    validateWidget: n(function(W) {
                        e.validateWidget(e, W)
                    }, "validateWidget")
                },
                u = r,
                k = F,
                L = H,
                K = D();
            return l.createElement("div", e.rootNodeProperties, l.createElement(P, {
                align: 0,
                animate: !1,
                style: "columns columns2 " + r.variables.gutterSizeIn + " tablet-" + r.variables.tabletBehaviorIn + " phone-" + r.variables.phoneBehaviorIn + " " + r.variables.extendedClassIn,
                visible: !0,
                _idProps: {
                    service: o,
                    uuid: "0"
                },
                _widgetRecordProvider: u,
                style_dataFetchStatus: p.calculateDataFetchStatus(r.variables._gutterSizeInDataFetchStatus, r.variables._tabletBehaviorInDataFetchStatus, r.variables._phoneBehaviorInDataFetchStatus, r.variables._extendedClassInDataFetchStatus)
            }, l.createElement(S, {
                align: 0,
                content: g.props.placeholders.column1,
                style: "columns-item",
                _idProps: {
                    service: o,
                    name: "Column1"
                },
                _widgetRecordProvider: u
            }), l.createElement(S, {
                align: 0,
                content: g.props.placeholders.column2,
                style: "columns-item",
                _idProps: {
                    service: o,
                    name: "Column2"
                },
                _widgetRecordProvider: u
            })))
        }, {
            topLevelComponent: !1,
            getAttributes: n(function() {
                return {
                    codeFunction: "Columns2",
                    functionKey: "84239fde-5c20-41b9-b32f-bcc9c73e85f9",
                    functionOwnerName: "OutSystemsUI",
                    functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Adaptive.Columns2",
            modelFactory: B,
            controllerFactory: z
        });
        return s.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"]
        }, s.getJsDependencies = function() {
            return []
        }, s.getBlocks = function() {
            return []
        }, s
    }, "componentFactory"),
    he = A();
export {
    he as a
};