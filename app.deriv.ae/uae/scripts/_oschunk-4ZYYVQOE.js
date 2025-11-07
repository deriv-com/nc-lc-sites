import {
    a as w
} from "./_oschunk-YVFTECWM.js";
import {
    f as P,
    s as v
} from "./_oschunk-VR5BNL2K.js";
import {
    a as N,
    g as u,
    m as _,
    o as H,
    q as C,
    r as O,
    s as R,
    t as D
} from "./_oschunk-4VHUVDBV.js";
import {
    Qb as I
} from "./_oschunk-Z7QRTJDJ.js";
import {
    I as p,
    W as s,
    c as n,
    e as M
} from "./_oschunk-M5BUVJ72.js";
var l = M(N());
var a = s,
    m = class m extends a.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("AlignIconRight", "alignIconRightIn", "AlignIconRight", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_alignIconRightInDataFetchStatus", "_alignIconRightInDataFetchStatus", "_alignIconRightInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(a.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
n(m, "VariablesRecord");
var d = m;
d.init();
var f = class f extends a.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
n(f, "WidgetsRecord");
var g = f,
    S = class S extends a.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return d
        }
        static getWidgetsRecordConstructor() {
            return g
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "AlignIconRight" in t && (this.variables.alignIconRightIn = t.AlignIconRight, "_alignIconRightInDataFetchStatus" in t && (this.variables._alignIconRightInDataFetchStatus = t._alignIconRightInDataFetchStatus)), "ExtendedClass" in t && (this.variables.extendedClassIn = t.ExtendedClass, "_extendedClassInDataFetchStatus" in t && (this.variables._extendedClassInDataFetchStatus = t._extendedClassInDataFetchStatus))
        }
    };
n(S, "Model");
var c = S;
c._hasValidationWidgetsValue = void 0;
var F = new a.Model.ModelFactory(c);
var x = {};
var W = s; {
    let t = class t extends W.Controller.BaseViewController {
        constructor(e, o, y) {
            super(e, o, y, x);
            var V = this.controller;
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
            return I.defaultTimeout
        }
    };
    n(t, "ControllerInner");
    let r = t;
    T = r
}
var T, b = new W.Controller.ControllerFactory(T, w);
var le = u.PlaceholderContent,
    de = u.IteratorPlaceholderContent,
    U = n(function() {
        var r = H(function(t) {
            var i = t.model,
                e = t.controller,
                o = t.controller.idService,
                y = e.validationService,
                V = e.callContext(),
                B = R,
                z = D,
                E = {
                    props: t,
                    validateWidget: n(function(A) {
                        t.validateWidget(t, A)
                    }, "validateWidget")
                },
                h = i,
                k = O,
                G = C,
                L = _();
            return l.createElement("div", t.rootNodeProperties, l.createElement(P, {
                align: 0,
                animate: !1,
                style: i.getCachedValue(o.getId("InputWithIconWrapper.Style"), function() {
                    return "input-with-icon" + (i.variables.alignIconRightIn ? " input-with-icon-right" : "") + " " + i.variables.extendedClassIn
                }, function() {
                    return i.variables.alignIconRightIn
                }, function() {
                    return i.variables.extendedClassIn
                }),
                visible: !0,
                _idProps: {
                    service: o,
                    name: "InputWithIconWrapper"
                },
                _widgetRecordProvider: h,
                style_dataFetchStatus: p.calculateDataFetchStatus(i.variables._alignIconRightInDataFetchStatus, i.variables._extendedClassInDataFetchStatus)
            }, l.createElement(v, {
                align: 0,
                content: E.props.placeholders.icon,
                style: "input-with-icon-content-icon center ph",
                _idProps: {
                    service: o,
                    name: "Icon"
                },
                _widgetRecordProvider: h
            }), l.createElement(v, {
                align: 0,
                content: E.props.placeholders.input,
                style: "input-with-icon-input",
                _idProps: {
                    service: o,
                    name: "Input"
                },
                _widgetRecordProvider: h
            })))
        }, {
            topLevelComponent: !1,
            getAttributes: n(function() {
                return {
                    codeFunction: "InputWithIcon",
                    functionKey: "1190fddf-d5b0-4a2d-8d23-355f086907fd",
                    functionOwnerName: "OutSystemsUI",
                    functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Interaction.InputWithIcon",
            modelFactory: F,
            controllerFactory: b
        });
        return r.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"]
        }, r.getJsDependencies = function() {
            return []
        }, r.getBlocks = function() {
            return []
        }, r
    }, "componentFactory"),
    ce = U();
export {
    ce as a
};