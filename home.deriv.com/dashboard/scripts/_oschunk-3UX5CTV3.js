import {
    a as b
} from "./_oschunk-24WIHVSN.js";
import {
    h as S
} from "./_oschunk-O5KC3WOL.js";
import {
    a as M,
    g as v,
    m as g,
    o as D,
    q as C,
    r as F,
    s as H,
    t as O
} from "./_oschunk-NVHFAAS2.js";
import {
    Ga as E,
    la as h
} from "./_oschunk-WCMQG33O.js";
import {
    J as u,
    X as o,
    c as n,
    f as W
} from "./_oschunk-DFKJJKI4.js";
var r = o,
    y = class y extends r.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsVertical", "isVerticalIn", "IsVertical", !0, !1, r.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isVerticalInDataFetchStatus", "_isVerticalInDataFetchStatus", "_isVerticalInDataFetchStatus", !0, !1, r.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Space", "spaceIn", "Space", !0, !1, r.DataTypes.DataTypes.Text, function() {
                return h.space.base
            }, !1), this.attr("_spaceInDataFetchStatus", "_spaceInDataFetchStatus", "_spaceInDataFetchStatus", !0, !1, r.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Color", "colorIn", "Color", !0, !1, r.DataTypes.DataTypes.Text, function() {
                return h.color.neutral4
            }, !1), this.attr("_colorInDataFetchStatus", "_colorInDataFetchStatus", "_colorInDataFetchStatus", !0, !1, r.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, r.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, r.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(r.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
n(y, "VariablesRecord");
var l = y;
l.init();
var m = class m extends r.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
n(m, "WidgetsRecord");
var f = m,
    p = class p extends r.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return l
        }
        static getWidgetsRecordConstructor() {
            return f
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(e) {
            "IsVertical" in e && (this.variables.isVerticalIn = e.IsVertical, "_isVerticalInDataFetchStatus" in e && (this.variables._isVerticalInDataFetchStatus = e._isVerticalInDataFetchStatus)), "Space" in e && (this.variables.spaceIn = e.Space, "_spaceInDataFetchStatus" in e && (this.variables._spaceInDataFetchStatus = e._spaceInDataFetchStatus)), "Color" in e && (this.variables.colorIn = e.Color, "_colorInDataFetchStatus" in e && (this.variables._colorInDataFetchStatus = e._colorInDataFetchStatus)), "ExtendedClass" in e && (this.variables.extendedClassIn = e.ExtendedClass, "_extendedClassInDataFetchStatus" in e && (this.variables._extendedClassInDataFetchStatus = e._extendedClassInDataFetchStatus))
        }
    };
n(p, "Model");
var c = p;
c._hasValidationWidgetsValue = void 0;
var V = new r.Model.ModelFactory(c);
var d = W(M());
var T = {};
var x = o; {
    let e = class e extends x.Controller.BaseViewController {
        constructor(t, i, I) {
            super(t, i, I, T);
            var R = this.controller;
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
            return E.defaultTimeout
        }
    };
    n(e, "ControllerInner");
    let s = e;
    P = s
}
var P, w = new x.Controller.ControllerFactory(P, b);
var le = v.PlaceholderContent,
    ce = v.IteratorPlaceholderContent,
    A = n(function() {
        var s = D(function(e) {
            var a = e.model,
                t = e.controller,
                i = e.controller.idService,
                I = t.validationService,
                R = t.callContext(),
                N = H,
                z = O,
                B = {
                    props: e,
                    validateWidget: n(function(U) {
                        e.validateWidget(e, U)
                    }, "validateWidget")
                },
                _ = a,
                k = F,
                L = C,
                G = g();
            return d.createElement("div", e.rootNodeProperties, d.createElement(S, {
                align: 0,
                animate: !1,
                style: a.getCachedValue(i.getId("kWhV3I81UUyymP3TLEExTA.Style"), function() {
                    return a.variables.isVerticalIn ? "separator-wrapper full-height padding-right-" + a.variables.spaceIn + " padding-left-" + a.variables.spaceIn : "padding-top-" + a.variables.spaceIn + " padding-bottom-" + a.variables.spaceIn
                }, function() {
                    return a.variables.isVerticalIn
                }, function() {
                    return a.variables.spaceIn
                }),
                visible: !0,
                _idProps: {
                    service: i,
                    uuid: "0"
                },
                _widgetRecordProvider: _,
                style_dataFetchStatus: u.calculateDataFetchStatus(a.variables._isVerticalInDataFetchStatus, a.variables._spaceInDataFetchStatus)
            }, d.createElement(S, {
                align: 0,
                animate: !1,
                style: a.getCachedValue(i.getId("2yAyXVm9l0qeV2aJqaE2cw.Style"), function() {
                    return "separator" + (a.variables.isVerticalIn ? " separator-vertical" : " separator-horizontal") + " background-" + a.variables.colorIn + " " + a.variables.extendedClassIn
                }, function() {
                    return a.variables.isVerticalIn
                }, function() {
                    return a.variables.colorIn
                }, function() {
                    return a.variables.extendedClassIn
                }),
                visible: !0,
                _idProps: {
                    service: i,
                    uuid: "1"
                },
                _widgetRecordProvider: _,
                style_dataFetchStatus: u.calculateDataFetchStatus(a.variables._isVerticalInDataFetchStatus, a.variables._colorInDataFetchStatus, a.variables._extendedClassInDataFetchStatus)
            })))
        }, {
            topLevelComponent: !1,
            getAttributes: n(function() {
                return {
                    codeFunction: "Separator",
                    functionKey: "39080a9d-eba3-40c0-bcd0-df9437a23bd4",
                    functionOwnerName: "OutSystemsUI",
                    functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Utilities.Separator",
            modelFactory: V,
            controllerFactory: w
        });
        return s.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"]
        }, s.getJsDependencies = function() {
            return []
        }, s.getBlocks = function() {
            return []
        }, s
    }, "componentFactory"),
    de = A();
export {
    de as a
};