import {
    a as O
} from "./_oschunk-YVFTECWM.js";
import {
    s as I
} from "./_oschunk-VR5BNL2K.js";
import {
    a as M,
    g as c,
    m as g,
    o as _,
    q as C,
    r as p,
    s as H,
    t as P
} from "./_oschunk-4VHUVDBV.js";
import {
    Qb as E
} from "./_oschunk-Z7QRTJDJ.js";
import {
    I as f,
    W as o,
    c as n,
    e as W
} from "./_oschunk-M5BUVJ72.js";
var S = W(M());
var r = o,
    h = class h extends r.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("UsePadding", "usePaddingIn", "UsePadding", !0, !1, r.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_usePaddingInDataFetchStatus", "_usePaddingInDataFetchStatus", "_usePaddingInDataFetchStatus", !0, !1, r.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, r.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, r.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(r.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
n(h, "VariablesRecord");
var d = h;
d.init();
var v = class v extends r.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
n(v, "WidgetsRecord");
var u = v,
    m = class m extends r.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return d
        }
        static getWidgetsRecordConstructor() {
            return u
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "UsePadding" in t && (this.variables.usePaddingIn = t.UsePadding, "_usePaddingInDataFetchStatus" in t && (this.variables._usePaddingInDataFetchStatus = t._usePaddingInDataFetchStatus)), "ExtendedClass" in t && (this.variables.extendedClassIn = t.ExtendedClass, "_extendedClassInDataFetchStatus" in t && (this.variables._extendedClassInDataFetchStatus = t._extendedClassInDataFetchStatus))
        }
    };
n(m, "Model");
var l = m;
l._hasValidationWidgetsValue = void 0;
var D = new r.Model.ModelFactory(l);
var F = {};
var x = o; {
    let t = class t extends x.Controller.BaseViewController {
        constructor(e, i, y) {
            super(e, i, y, F);
            var T = this.controller;
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
            return E.defaultTimeout
        }
    };
    n(t, "ControllerInner");
    let s = t;
    w = s
}
var w, R = new x.Controller.ControllerFactory(w, O);
var ie = c.PlaceholderContent,
    de = c.IteratorPlaceholderContent,
    N = n(function() {
        var s = _(function(t) {
            var a = t.model,
                e = t.controller,
                i = t.controller.idService,
                y = e.validationService,
                T = e.callContext(),
                A = H,
                B = P,
                b = {
                    props: t,
                    validateWidget: n(function(U) {
                        t.validateWidget(t, U)
                    }, "validateWidget")
                },
                V = a,
                z = p,
                k = C,
                G = g();
            return S.createElement("div", t.rootNodeProperties, S.createElement(I, {
                align: 0,
                content: b.props.placeholders.content,
                style: a.getCachedValue(i.getId("Content.Style"), function() {
                    return "ph card card-content" + (a.variables.usePaddingIn ? "" : " padding-none ") + (a.variables.extendedClassIn === "" ? "" : " " + a.variables.extendedClassIn)
                }, function() {
                    return a.variables.usePaddingIn
                }, function() {
                    return a.variables.extendedClassIn
                }),
                _idProps: {
                    service: i,
                    name: "Content"
                },
                _widgetRecordProvider: V,
                style_dataFetchStatus: f.calculateDataFetchStatus(a.variables._usePaddingInDataFetchStatus, a.variables._extendedClassInDataFetchStatus)
            }))
        }, {
            topLevelComponent: !1,
            getAttributes: n(function() {
                return {
                    codeFunction: "Card",
                    functionKey: "57a5fe1e-02aa-4ada-89ca-750832d53968",
                    functionOwnerName: "OutSystemsUI",
                    functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Content.Card",
            modelFactory: D,
            controllerFactory: R
        });
        return s.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"]
        }, s.getJsDependencies = function() {
            return []
        }, s.getBlocks = function() {
            return []
        }, s
    }, "componentFactory"),
    le = N();
export {
    le as a
};