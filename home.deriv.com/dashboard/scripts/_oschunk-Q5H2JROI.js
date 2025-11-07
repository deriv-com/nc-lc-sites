import {
    h as P
} from "./_oschunk-O5KC3WOL.js";
import {
    a as L,
    g as v,
    m as p,
    o as C,
    q as O,
    r as A,
    s as w,
    t as T
} from "./_oschunk-NVHFAAS2.js";
import {
    a as R
} from "./_oschunk-AW35UT34.js";
import {
    Ka as H
} from "./_oschunk-WCMQG33O.js";
import {
    X as u,
    c as a,
    f as $
} from "./_oschunk-DFKJJKI4.js";
var c = u,
    m = class m extends c.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(c.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(m, "VariablesRecord");
var h = m;
h.init();
var E = class E extends c.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(E, "WidgetsRecord");
var y = E,
    b = class b extends c.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return h
        }
        static getWidgetsRecordConstructor() {
            return y
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(r) {}
    };
a(b, "Model");
var f = b;
f._hasValidationWidgetsValue = void 0;
var x = new c.Model.ModelFactory(f);
var S = $(L());
var I = {};

function _(i, r, g, e) {
    var n, t, d, o;
    (t = (n = window.ReactLibs) == null ? void 0 : n.ReactHotToast) != null && t.renderToaster ? (o = (d = window.ReactLibs) == null ? void 0 : d.ReactHotToast) == null || o.renderToaster(document.getElementById(i.WidgetId)) : console.error("renderToaster function not found")
}
a(_, "default");
var l = u; {
    let r = class r extends l.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, I);
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
                var n = this.model,
                    t = this.controller,
                    d = this.idService;
                return l.Logger.startActiveSpan("OnReady", function(o) {
                    o && (o.setAttribute("code.function", "OnReady"), o.setAttribute("outsystems.function.key", "14f7dcbe-a3a2-400f-808d-de70ff451f73"), o.setAttribute("outsystems.function.owner.name", "dashboard"), o.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e), l.Logger.startActiveSpan("InitializeToast", function(s) {
                            s && (s.setAttribute("code.function", "InitializeToast"), s.setAttribute("outsystems.function.key", "62aad7cc-4c69-4e63-9f09-3926ac96508f"), s.setAttribute("outsystems.function.owner.name", "dashboard"), s.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(_, "InitializeToast", "OnReady", {
                                    WidgetId: l.DataConversion.JSNodeParamConverter.to(d.getId("ToastContainer"), l.DataTypes.DataTypes.Text)
                                }, function(N) {}, {}, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        onReady$Action(e) {
            var n = this.controller;
            return l.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "14f7dcbe-a3a2-400f-808d-de70ff451f73"), t.setAttribute("outsystems.function.owner.name", "dashboard"), t.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onReady$Action, e)
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
                var n = this.controller,
                    t = this.model,
                    d = this.idService;
                return n.onReady$Action(e)
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
            return H.defaultTimeout
        }
    };
    a(r, "ControllerInner");
    let i = r;
    V = i
}
var V, D = new l.Controller.ControllerFactory(V, R);
var ye = v.PlaceholderContent,
    me = v.IteratorPlaceholderContent,
    z = a(function() {
        var i = C(function(r) {
            var g = r.model,
                e = r.controller,
                n = r.controller.idService,
                t = e.validationService,
                d = e.callContext(),
                o = w,
                s = T,
                N = {
                    props: r,
                    validateWidget: a(function(W) {
                        r.validateWidget(r, W)
                    }, "validateWidget")
                },
                F = g,
                k = A,
                M = O,
                B = p();
            return S.createElement("div", r.rootNodeProperties, S.createElement(P, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "height: 0px;"
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "0px"
                },
                style: "toast-container",
                visible: !0,
                _idProps: {
                    service: n,
                    name: "ToastContainer"
                },
                _widgetRecordProvider: F
            }))
        }, {
            topLevelComponent: !1,
            getAttributes: a(function() {
                return {
                    codeFunction: "Toast",
                    functionKey: "00678084-0156-432a-8cf2-2e6a3db22c03",
                    functionOwnerName: "dashboard",
                    functionOwnerKey: "bbed91b8-a741-4694-b61f-b0ef761ba4e2",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Toast.Toast",
            modelFactory: x,
            controllerFactory: D
        });
        return i.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"]
        }, i.getJsDependencies = function() {
            return ["scripts/dashboard.UserScripts.ReactLibs.js"]
        }, i.getBlocks = function() {
            return []
        }, i
    }, "componentFactory"),
    Ee = z();
export {
    Ee as a
};