import {
    h as _,
    v as x
} from "./_oschunk-O5KC3WOL.js";
import {
    a as M,
    g as b,
    m as I,
    o as H,
    q as R,
    r as w,
    s as p,
    t as P
} from "./_oschunk-NVHFAAS2.js";
import {
    a as F
} from "./_oschunk-AW35UT34.js";
import {
    Ga as h,
    Ka as D
} from "./_oschunk-WCMQG33O.js";
import {
    J as O,
    X as u,
    c as o,
    f as W
} from "./_oschunk-DFKJJKI4.js";
var y = W(M());
var l = u,
    E = class E extends l.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("EnableAccessibilityFeatures", "enableAccessibilityFeaturesIn", "EnableAccessibilityFeatures", !0, !1, l.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_enableAccessibilityFeaturesInDataFetchStatus", "_enableAccessibilityFeaturesInDataFetchStatus", "_enableAccessibilityFeaturesInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, l.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(l.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
o(E, "VariablesRecord");
var f = E;
f.init();
var A = class A extends l.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
o(A, "WidgetsRecord");
var S = A,
    C = class C extends l.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return f
        }
        static getWidgetsRecordConstructor() {
            return S
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(n) {
            "EnableAccessibilityFeatures" in n && (this.variables.enableAccessibilityFeaturesIn = n.EnableAccessibilityFeatures, "_enableAccessibilityFeaturesInDataFetchStatus" in n && (this.variables._enableAccessibilityFeaturesInDataFetchStatus = n._enableAccessibilityFeaturesInDataFetchStatus)), "ExtendedClass" in n && (this.variables.extendedClassIn = n.ExtendedClass, "_extendedClassInDataFetchStatus" in n && (this.variables._extendedClassInDataFetchStatus = n._extendedClassInDataFetchStatus))
        }
    };
o(C, "Model");
var v = C;
v._hasValidationWidgetsValue = void 0;
var T = new l.Model.ModelFactory(v);
var $ = {};
var s = u; {
    let n = class n extends s.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, $);
            var c = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    c = this.idService;
                return s.Logger.startActiveSpan("OnReady", function(a) {
                    return a && (a.setAttribute("code.function", "OnReady"), a.setAttribute("outsystems.function.key", "33212a96-82aa-4973-9d38-6b8189a7cc62"), a.setAttribute("outsystems.function.owner.name", "dashboard"), a.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), s.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var g = new s.DataTypes.VariableHolder;
                        return s.Flow.executeAsyncFlow(function() {
                            return r.flush(), h.layoutReady$Action(e).then(function() {
                                g.value = h.setLang$Action("", e)
                            })
                        })
                    }, function() {
                        a && a.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    c = this.idService;
                return s.Logger.startActiveSpan("OnDestroy", function(a) {
                    a && (a.setAttribute("code.function", "OnDestroy"), a.setAttribute("outsystems.function.key", "fe95730a-e897-428d-9b15-07b18ed4c24f"), a.setAttribute("outsystems.function.owner.name", "dashboard"), a.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnDestroy"), e = t.callContext(e), h.layoutDestroy$Action(e)
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(e) {
            this.__onDestroy$Action = e
        }
        onReady$Action(e) {
            var r = this.controller;
            return s.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "33212a96-82aa-4973-9d38-6b8189a7cc62"), t.setAttribute("outsystems.function.owner.name", "dashboard"), t.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), s.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onDestroy$Action(e) {
            var r = this.controller;
            return s.Logger.startActiveSpan("OnDestroy__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnDestroy"), t.setAttribute("outsystems.function.key", "fe95730a-e897-428d-9b15-07b18ed4c24f"), t.setAttribute("outsystems.function.owner.name", "dashboard"), t.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onDestroy$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    c = this.idService;
                return r.onReady$Action(e)
            }), this._onReadyEventHandler
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
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    c = this.idService;
                return r.onDestroy$Action(e)
            }), this._onDestroyEventHandler
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
            return D.defaultTimeout
        }
    };
    o(n, "ControllerInner");
    let d = n;
    N = d
}
var N, V = new s.Controller.ControllerFactory(N, F);
var Ae = b.PlaceholderContent,
    Ce = b.IteratorPlaceholderContent,
    B = o(function() {
        var d = H(function(n) {
            var i = n.model,
                e = n.controller,
                r = n.controller.idService,
                t = e.validationService,
                c = e.callContext(),
                a = p,
                g = P,
                L = {
                    props: n,
                    validateWidget: o(function(k) {
                        n.validateWidget(n, k)
                    }, "validateWidget")
                },
                m = i,
                U = w,
                z = R,
                G = I();
            return y.createElement("div", n.rootNodeProperties, y.createElement(_, {
                align: 0,
                animate: !1,
                style: i.getCachedValue(r.getId("8lEy+z8iXUqB3svMwRxbLw.Style"), function() {
                    return "layout blank" + (i.variables.enableAccessibilityFeaturesIn ? " has-accessible-features" : "") + (i.variables.extendedClassIn === "" ? "" : " " + i.variables.extendedClassIn)
                }, function() {
                    return i.variables.enableAccessibilityFeaturesIn
                }, function() {
                    return i.variables.extendedClassIn
                }),
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "0"
                },
                _widgetRecordProvider: m,
                style_dataFetchStatus: O.calculateDataFetchStatus(i.variables._enableAccessibilityFeaturesInDataFetchStatus, i.variables._extendedClassInDataFetchStatus)
            }, y.createElement(_, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    role: "main"
                },
                style: "content",
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "1"
                },
                _widgetRecordProvider: m
            }, y.createElement(x, {
                align: 0,
                content: L.props.placeholders.content,
                style: "main-content",
                _idProps: {
                    service: r,
                    name: "Content"
                },
                _widgetRecordProvider: m
            }))))
        }, {
            topLevelComponent: !1,
            getAttributes: o(function() {
                return {
                    codeFunction: "LayoutBlank",
                    functionKey: "d1f8fc2e-cccb-4a3a-8b10-6e9f5346d872",
                    functionOwnerName: "dashboard",
                    functionOwnerKey: "bbed91b8-a741-4694-b61f-b0ef761ba4e2",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Layouts.LayoutBlank",
            modelFactory: T,
            controllerFactory: V
        });
        return d.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"]
        }, d.getJsDependencies = function() {
            return []
        }, d.getBlocks = function() {
            return []
        }, d
    }, "componentFactory"),
    ge = B();
export {
    ge as a
};