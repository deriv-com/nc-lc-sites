import {
    f as S,
    s as T
} from "./_oschunk-VR5BNL2K.js";
import {
    a as M,
    g as b,
    m as H,
    o as p,
    q as w,
    r as R,
    s as P,
    t as x
} from "./_oschunk-4VHUVDBV.js";
import {
    a as I
} from "./_oschunk-KXORGPRQ.js";
import {
    Qb as y,
    Sb as F
} from "./_oschunk-Z7QRTJDJ.js";
import {
    I as D,
    W as u,
    c as i,
    e as W
} from "./_oschunk-M5BUVJ72.js";
var l = u,
    A = class A extends l.DataTypes.GenericRecord {
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
i(A, "VariablesRecord");
var h = A;
h.init();
var C = class C extends l.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
i(C, "WidgetsRecord");
var E = C,
    g = class g extends l.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return h
        }
        static getWidgetsRecordConstructor() {
            return E
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(n) {
            "EnableAccessibilityFeatures" in n && (this.variables.enableAccessibilityFeaturesIn = n.EnableAccessibilityFeatures, "_enableAccessibilityFeaturesInDataFetchStatus" in n && (this.variables._enableAccessibilityFeaturesInDataFetchStatus = n._enableAccessibilityFeaturesInDataFetchStatus)), "ExtendedClass" in n && (this.variables.extendedClassIn = n.ExtendedClass, "_extendedClassInDataFetchStatus" in n && (this.variables._extendedClassInDataFetchStatus = n._extendedClassInDataFetchStatus))
        }
    };
i(g, "Model");
var v = g;
v._hasValidationWidgetsValue = void 0;
var $ = new l.Model.ModelFactory(v);
var f = W(M());
var V = {};
var o = u; {
    let n = class n extends o.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, V);
            var d = this.controller;
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
                    d = this.idService;
                return o.Logger.startActiveSpan("OnReady", function(a) {
                    return a && (a.setAttribute("code.function", "OnReady"), a.setAttribute("outsystems.function.key", "33212a96-82aa-4973-9d38-6b8189a7cc62"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var O = new o.DataTypes.VariableHolder,
                            m = new o.DataTypes.VariableHolder;
                        return o.Flow.executeAsyncFlow(function() {
                            return r.flush(), y.layoutReady$Action(e).then(function() {
                                O.value = y.setLang$Action("", e), m.value = y.addFavicon$Action("favicon.png", e)
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
                    d = this.idService;
                return o.Logger.startActiveSpan("OnDestroy", function(a) {
                    a && (a.setAttribute("code.function", "OnDestroy"), a.setAttribute("outsystems.function.key", "fe95730a-e897-428d-9b15-07b18ed4c24f"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnDestroy"), e = t.callContext(e), y.layoutDestroy$Action(e)
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
            return o.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "33212a96-82aa-4973-9d38-6b8189a7cc62"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onDestroy$Action(e) {
            var r = this.controller;
            return o.Logger.startActiveSpan("OnDestroy__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnDestroy"), t.setAttribute("outsystems.function.key", "fe95730a-e897-428d-9b15-07b18ed4c24f"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
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
                    d = this.idService;
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
                    d = this.idService;
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
            return F.defaultTimeout
        }
    };
    i(n, "ControllerInner");
    let c = n;
    N = c
}
var N, L = new o.Controller.ControllerFactory(N, I);
var Ae = b.PlaceholderContent,
    Ce = b.IteratorPlaceholderContent,
    B = i(function() {
        var c = p(function(n) {
            var s = n.model,
                e = n.controller,
                r = n.controller.idService,
                t = e.validationService,
                d = e.callContext(),
                a = P,
                O = x,
                m = {
                    props: n,
                    validateWidget: i(function(k) {
                        n.validateWidget(n, k)
                    }, "validateWidget")
                },
                _ = s,
                U = R,
                z = w,
                G = H();
            return f.createElement("div", n.rootNodeProperties, f.createElement(S, {
                align: 0,
                animate: !1,
                style: s.getCachedValue(r.getId("8lEy+z8iXUqB3svMwRxbLw.Style"), function() {
                    return "layout blank" + (s.variables.enableAccessibilityFeaturesIn ? " has-accessible-features" : "") + (s.variables.extendedClassIn === "" ? "" : " " + s.variables.extendedClassIn)
                }, function() {
                    return s.variables.enableAccessibilityFeaturesIn
                }, function() {
                    return s.variables.extendedClassIn
                }),
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "0"
                },
                _widgetRecordProvider: _,
                style_dataFetchStatus: D.calculateDataFetchStatus(s.variables._enableAccessibilityFeaturesInDataFetchStatus, s.variables._extendedClassInDataFetchStatus)
            }, f.createElement(S, {
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
                _widgetRecordProvider: _
            }, f.createElement(T, {
                align: 0,
                content: m.props.placeholders.content,
                style: "main-content",
                _idProps: {
                    service: r,
                    name: "Content"
                },
                _widgetRecordProvider: _
            }))))
        }, {
            topLevelComponent: !1,
            getAttributes: i(function() {
                return {
                    codeFunction: "LayoutBlank",
                    functionKey: "d1f8fc2e-cccb-4a3a-8b10-6e9f5346d872",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Layouts.LayoutBlank",
            modelFactory: $,
            controllerFactory: L
        });
        return c.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"]
        }, c.getJsDependencies = function() {
            return []
        }, c.getBlocks = function() {
            return []
        }, c
    }, "componentFactory"),
    ge = B();
export {
    ge as a
};