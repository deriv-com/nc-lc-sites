import {
    a as T
} from "./_oschunk-24WIHVSN.js";
import {
    v as O
} from "./_oschunk-O5KC3WOL.js";
import {
    a as M,
    g as c,
    m as E,
    o as _,
    q as I,
    r as g,
    s as D,
    t as H
} from "./_oschunk-NVHFAAS2.js";
import {
    Ga as p
} from "./_oschunk-WCMQG33O.js";
import {
    J as f,
    X as s,
    c as r,
    f as W
} from "./_oschunk-DFKJJKI4.js";
var a = s,
    u = class u extends a.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("AnimationType", "animationTypeIn", "AnimationType", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_animationTypeInDataFetchStatus", "_animationTypeInDataFetchStatus", "_animationTypeInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Delay", "delayIn", "Delay", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 0
            }, !1), this.attr("_delayInDataFetchStatus", "_delayInDataFetchStatus", "_delayInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Speed", "speedIn", "Speed", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_speedInDataFetchStatus", "_speedInDataFetchStatus", "_speedInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(a.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
r(u, "VariablesRecord");
var l = u;
l.init();
var y = class y extends a.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
r(y, "WidgetsRecord");
var h = y,
    m = class m extends a.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return l
        }
        static getWidgetsRecordConstructor() {
            return h
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "AnimationType" in t && (this.variables.animationTypeIn = t.AnimationType, "_animationTypeInDataFetchStatus" in t && (this.variables._animationTypeInDataFetchStatus = t._animationTypeInDataFetchStatus)), "Delay" in t && (this.variables.delayIn = t.Delay, "_delayInDataFetchStatus" in t && (this.variables._delayInDataFetchStatus = t._delayInDataFetchStatus)), "Speed" in t && (this.variables.speedIn = t.Speed, "_speedInDataFetchStatus" in t && (this.variables._speedInDataFetchStatus = t._speedInDataFetchStatus))
        }
    };
r(m, "Model");
var d = m;
d._hasValidationWidgetsValue = void 0;
var F = new a.Model.ModelFactory(d);
var v = W(M());
var C = {};
var P = s; {
    let t = class t extends P.Controller.BaseViewController {
        constructor(e, o, S) {
            super(e, o, S, C);
            var b = this.controller;
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
            return p.defaultTimeout
        }
    };
    r(t, "ControllerInner");
    let i = t;
    w = i
}
var w, R = new P.Controller.ControllerFactory(w, T);
var oe = c.PlaceholderContent,
    le = c.IteratorPlaceholderContent,
    N = r(function() {
        var i = _(function(t) {
            var n = t.model,
                e = t.controller,
                o = t.controller.idService,
                S = e.validationService,
                b = e.callContext(),
                U = D,
                z = H,
                V = {
                    props: t,
                    validateWidget: r(function(A) {
                        t.validateWidget(t, A)
                    }, "validateWidget")
                },
                x = n,
                B = g,
                k = I,
                G = E();
            return v.createElement("div", t.rootNodeProperties, v.createElement(O, {
                align: 0,
                content: V.props.placeholders.content,
                extendedProperties: {
                    style: "-webkit-animation-delay: " + n.variables.delayIn.toString() + "ms;animation-delay: " + n.variables.delayIn.toString() + "ms;"
                },
                style: n.getCachedValue(o.getId("Content.Style"), function() {
                    return "animate" + (" " + n.variables.animationTypeIn + " " + n.variables.speedIn)
                }, function() {
                    return n.variables.animationTypeIn
                }, function() {
                    return n.variables.speedIn
                }),
                _idProps: {
                    service: o,
                    name: "Content"
                },
                _widgetRecordProvider: x,
                style_dataFetchStatus: f.calculateDataFetchStatus(n.variables._animationTypeInDataFetchStatus, n.variables._speedInDataFetchStatus)
            }))
        }, {
            topLevelComponent: !1,
            getAttributes: r(function() {
                return {
                    codeFunction: "Animate",
                    functionKey: "071b5238-628d-49bd-ae22-a392fceff908",
                    functionOwnerName: "OutSystemsUI",
                    functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Interaction.Animate",
            modelFactory: F,
            controllerFactory: R
        });
        return i.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"]
        }, i.getJsDependencies = function() {
            return []
        }, i.getBlocks = function() {
            return []
        }, i
    }, "componentFactory"),
    de = N();
export {
    de as a
};