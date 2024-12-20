import {
    a as b
} from "./_oschunk-VWJXDAKN.js";
import {
    h as C,
    w as v
} from "./_oschunk-E7JQAU4J.js";
import {
    a as H,
    g as E,
    i as u
} from "./_oschunk-T77XORCW.js";
import {
    l as D
} from "./_oschunk-OOUVJ7PM.js";
import {
    Nd as l
} from "./_oschunk-KG7LSUIA.js";
import {
    ia as s
} from "./_oschunk-5EPHB76O.js";
import {
    c as r,
    g as R
} from "./_oschunk-DVBKI63I.js";
var o = R(H());
var a = s,
    S = class S extends a.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("GutterSize", "gutterSizeIn", "GutterSize", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return l.gutterSize.base
            }, !1), this.attr("_gutterSizeInDataFetchStatus", "_gutterSizeInDataFetchStatus", "_gutterSizeInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("TabletBehavior", "tabletBehaviorIn", "TabletBehavior", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return l.breakColumns.none
            }, !1), this.attr("_tabletBehaviorInDataFetchStatus", "_tabletBehaviorInDataFetchStatus", "_tabletBehaviorInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("PhoneBehavior", "phoneBehaviorIn", "PhoneBehavior", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return l.breakColumns.none
            }, !1), this.attr("_phoneBehaviorInDataFetchStatus", "_phoneBehaviorInDataFetchStatus", "_phoneBehaviorInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(a.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
r(S, "VariablesRecord");
var d = S;
d.init();
var f = class f extends a.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
r(f, "WidgetsRecord");
var m = f,
    _ = class _ extends a.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return d
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
r(_, "Model");
var c = _;
c._hasValidationWidgetsValue = void 0;
var F = new a.Model.ModelFactory(c);
var O = {};
var P = s; {
    let e = class e extends P.Controller.BaseViewController {
        constructor(t, p, i) {
            super(t, p, i, O);
            var x = this.controller;
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
            return D.defaultTimeout
        }
    };
    r(e, "ControllerInner");
    let h = e;
    B = h
}
var B, T = new P.Controller.ControllerFactory(B, b);
var w = s,
    te = u.PlaceholderContent,
    ae = u.IteratorPlaceholderContent,
    n = class n extends E.BaseWebBlock {
        static get displayName() {
            return "Adaptive.Columns2"
        }
        static getAttributes() {
            return {
                codeFunction: "Columns2",
                functionKey: "84239fde-5c20-41b9-b32f-bcc9c73e85f9",
                functionOwnerName: "OutSystemsUI",
                functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
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
            return F
        }
        get controllerFactory() {
            return T
        }
        get title() {
            return ""
        }
        internalRender() {
            let e = this.model,
                I = this.controller,
                t = this.idService,
                p = I.validationService,
                i = this.widgetsRecordProvider,
                x = I.callContext(),
                z = n.ifWidget,
                U = n.textWidget,
                W = n.asPrimitiveValue,
                A = n.getTranslation,
                y = this;
            return o.createElement("div", this.getRootNodeProperties(), o.createElement(C, {
                align: 0,
                animate: !1,
                style: "columns columns2 " + e.variables.gutterSizeIn + " tablet-" + e.variables.tabletBehaviorIn + " phone-" + e.variables.phoneBehaviorIn + " " + e.variables.extendedClassIn,
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "0"
                },
                _widgetRecordProvider: i,
                style_dataFetchStatus: w.Model.calculateDataFetchStatus(e.variables._gutterSizeInDataFetchStatus, e.variables._tabletBehaviorInDataFetchStatus, e.variables._phoneBehaviorInDataFetchStatus, e.variables._extendedClassInDataFetchStatus)
            }, o.createElement(v, {
                align: 0,
                content: y.props.placeholders.column1,
                style: "columns-item",
                _idProps: {
                    service: t,
                    name: "Column1"
                },
                _widgetRecordProvider: i
            }), o.createElement(v, {
                align: 0,
                content: y.props.placeholders.column2,
                style: "columns-item",
                _idProps: {
                    service: t,
                    name: "Column2"
                },
                _widgetRecordProvider: i
            })))
        }
    };
r(n, "View");
var g = n,
    re = g;
export {
    re as a
};