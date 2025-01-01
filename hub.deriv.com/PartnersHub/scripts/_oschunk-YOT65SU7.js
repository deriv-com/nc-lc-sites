import {
    a as C
} from "./_oschunk-LDY7XNSJ.js";
import {
    d as E,
    s as u
} from "./_oschunk-LWMGEL7F.js";
import {
    a as W,
    g as R,
    i as h
} from "./_oschunk-WZHUAZJP.js";
import {
    o as S
} from "./_oschunk-BDI2RWOA.js";
import {
    ia as s
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as a,
    h as w
} from "./_oschunk-QHO7QY6K.js";
var o = w(W());
var n = s,
    m = class m extends n.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("AlignIconRight", "alignIconRightIn", "AlignIconRight", !0, !1, n.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_alignIconRightInDataFetchStatus", "_alignIconRightInDataFetchStatus", "_alignIconRightInDataFetchStatus", !0, !1, n.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, n.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, n.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(n.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(m, "VariablesRecord");
var l = m;
l.init();
var I = class I extends n.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(I, "WidgetsRecord");
var g = I,
    p = class p extends n.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return l
        }
        static getWidgetsRecordConstructor() {
            return g
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(e) {
            "AlignIconRight" in e && (this.variables.alignIconRightIn = e.AlignIconRight, "_alignIconRightInDataFetchStatus" in e && (this.variables._alignIconRightInDataFetchStatus = e._alignIconRightInDataFetchStatus)), "ExtendedClass" in e && (this.variables.extendedClassIn = e.ExtendedClass, "_extendedClassInDataFetchStatus" in e && (this.variables._extendedClassInDataFetchStatus = e._extendedClassInDataFetchStatus))
        }
    };
a(p, "Model");
var c = p;
c._hasValidationWidgetsValue = void 0;
var D = new n.Model.ModelFactory(c);
var O = {};
var P = s; {
    let e = class e extends P.Controller.BaseViewController {
        constructor(t, y, i) {
            super(t, y, i, O);
            var F = this.controller;
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
            return S.defaultTimeout
        }
    };
    a(e, "ControllerInner");
    let d = e;
    x = d
}
var x, H = new P.Controller.ControllerFactory(x, C);
var T = s,
    tt = h.PlaceholderContent,
    et = h.IteratorPlaceholderContent,
    r = class r extends R.BaseWebBlock {
        static get displayName() {
            return "Interaction.InputWithIcon"
        }
        static getAttributes() {
            return {
                codeFunction: "InputWithIcon",
                functionKey: "1190fddf-d5b0-4a2d-8d23-355f086907fd",
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
            return D
        }
        get controllerFactory() {
            return H
        }
        get title() {
            return ""
        }
        internalRender() {
            let e = this.model,
                f = this.controller,
                t = this.idService,
                y = f.validationService,
                i = this.widgetsRecordProvider,
                F = f.callContext(),
                b = r.ifWidget,
                A = r.textWidget,
                U = r.asPrimitiveValue,
                V = r.getTranslation,
                _ = this;
            return o.createElement("div", this.getRootNodeProperties(), o.createElement(E, {
                align: 0,
                animate: !1,
                style: e.getCachedValue(t.getId("InputWithIconWrapper.Style"), function() {
                    return "input-with-icon" + (e.variables.alignIconRightIn ? " input-with-icon-right" : "") + " " + e.variables.extendedClassIn
                }, function() {
                    return e.variables.alignIconRightIn
                }, function() {
                    return e.variables.extendedClassIn
                }),
                visible: !0,
                _idProps: {
                    service: t,
                    name: "InputWithIconWrapper"
                },
                _widgetRecordProvider: i,
                style_dataFetchStatus: T.Model.calculateDataFetchStatus(e.variables._alignIconRightInDataFetchStatus, e.variables._extendedClassInDataFetchStatus)
            }, o.createElement(u, {
                align: 0,
                content: _.props.placeholders.icon,
                style: "input-with-icon-content-icon center ph",
                _idProps: {
                    service: t,
                    name: "Icon"
                },
                _widgetRecordProvider: i
            }), o.createElement(u, {
                align: 0,
                content: _.props.placeholders.input,
                style: "input-with-icon-input",
                _idProps: {
                    service: t,
                    name: "Input"
                },
                _widgetRecordProvider: i
            })))
        }
    };
a(r, "View");
var v = r,
    nt = v;
export {
    nt as a
};