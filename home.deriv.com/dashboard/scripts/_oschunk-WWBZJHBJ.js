import {
    a as O
} from "./_oschunk-V4BJ7D3I.js";
import {
    a as g
} from "./_oschunk-X4B4R4YZ.js";
import "./_oschunk-O5KC3WOL.js";
import {
    a as z,
    g as H,
    m as L,
    n as M,
    q as I,
    r as J,
    s as W,
    t as C
} from "./_oschunk-NVHFAAS2.js";
import {
    a as $
} from "./_oschunk-AW35UT34.js";
import "./_oschunk-APHDMPWW.js";
import {
    Ka as T,
    V as N
} from "./_oschunk-WCMQG33O.js";
import {
    X as _,
    c as n,
    f as B
} from "./_oschunk-DFKJJKI4.js";
var G = {};

function P(c, s, y, e) {
    let t = new URLSearchParams(window.location.search).get("token");
    window.history.replaceState({}, document.title, window.location.pathname), c.ServiceToken = t
}
n(P, "default");

function V(c, s, y, e) {
    let t = new URLSearchParams(window.location.search).get("redirect_from");
    c.RedirectFrom = t != null ? t : ""
}
n(V, "default");
var r = _; {
    let s = class s extends r.Controller.BaseViewController {
        constructor(e, a, t) {
            super(e, a, t, G);
            var b = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _v1RedirectHandler$Action() {
            return this.hasOwnProperty("__v1RedirectHandler$Action") || (this.__v1RedirectHandler$Action = function(e) {
                var a = this.model,
                    t = this.controller,
                    b = this.idService;
                return r.Logger.startActiveSpan("V1RedirectHandler", function(o) {
                    return o && (o.setAttribute("code.function", "V1RedirectHandler"), o.setAttribute("outsystems.function.key", "1aa62415-6c8e-4fb6-8342-e0780ca9c40b"), o.setAttribute("outsystems.function.owner.name", "dashboard"), o.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        t.ensureControllerAlive("V1RedirectHandler"), e = t.callContext(e);
                        var m = new r.DataTypes.VariableHolder,
                            d = new r.DataTypes.VariableHolder;
                        return r.Flow.executeAsyncFlow(function() {
                            return d.value = r.Logger.startActiveSpan("GetTokenFromUrlParam", function(i) {
                                i && (i.setAttribute("code.function", "GetTokenFromUrlParam"), i.setAttribute("outsystems.function.key", "8e2a6301-0056-4815-8db8-68aa08a744bc"), i.setAttribute("outsystems.function.owner.name", "dashboard"), i.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), i.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return t.safeExecuteJSNode(P, "GetTokenFromUrlParam", "V1RedirectHandler", {
                                        ServiceToken: r.DataConversion.JSNodeParamConverter.to("", r.DataTypes.DataTypes.Text)
                                    }, function(u) {
                                        var A = new(t.constructor.getVariableGroupType("dashboard.MainFlow.Redirect.V1RedirectHandler$getTokenFromUrlParamJSResult"));
                                        return A.serviceTokenOut = r.DataConversion.JSNodeParamConverter.from(u.ServiceToken, r.DataTypes.DataTypes.Text), A
                                    }, {}, {})
                                } finally {
                                    i && i.end()
                                }
                            }, 1), r.Flow.executeSequence(function() {
                                if (d.value.serviceTokenOut !== r.BuiltinFunctions.nullTextIdentifier()) return a.flush(), T.pOST_Verify$Action((function() {
                                    var i = new N;
                                    return i.tokenAttr = d.value.serviceTokenOut, i
                                })(), !0, e).then(function(i) {
                                    m.value = i
                                }).then(function() {
                                    return a.variables.isLoadingVar = !1, r.Flow.returnAsync(r.Navigation.navigateTo(r.Navigation.generateScreenURL("dashboard", "home", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default), e, !0))
                                })
                            })
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 1)
            }), this.__v1RedirectHandler$Action
        }
        set _v1RedirectHandler$Action(e) {
            this.__v1RedirectHandler$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var a = this.model,
                    t = this.controller,
                    b = this.idService;
                return r.Logger.startActiveSpan("OnReady", function(o) {
                    return o && (o.setAttribute("code.function", "OnReady"), o.setAttribute("outsystems.function.key", "6ee4c427-7497-440f-959c-84cae58ec880"), o.setAttribute("outsystems.function.owner.name", "dashboard"), o.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var m = new r.DataTypes.VariableHolder;
                        return r.Flow.executeAsyncFlow(function() {
                            return a.variables.isLoadingVar = !0, m.value = r.Logger.startActiveSpan("GetSearchParams", function(d) {
                                d && (d.setAttribute("code.function", "GetSearchParams"), d.setAttribute("outsystems.function.key", "a5eab113-d1a8-4433-a997-4c78d3bcb6c4"), d.setAttribute("outsystems.function.owner.name", "dashboard"), d.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), d.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return t.safeExecuteJSNode(V, "GetSearchParams", "OnReady", {
                                        RedirectFrom: r.DataConversion.JSNodeParamConverter.to("", r.DataTypes.DataTypes.Text)
                                    }, function(i) {
                                        var u = new(t.constructor.getVariableGroupType("dashboard.MainFlow.Redirect.OnReady$getSearchParamsJSResult"));
                                        return u.redirectFromOut = r.DataConversion.JSNodeParamConverter.from(i.RedirectFrom, r.DataTypes.DataTypes.Text), u
                                    }, {}, {})
                                } finally {
                                    d && d.end()
                                }
                            }, 1), r.Flow.executeSequence(function() {
                                if (m.value.redirectFromOut === "v1") return t._v1RedirectHandler$Action(e);
                                a.variables.isLoadingVar = !1
                            })
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        v1RedirectHandler$Action(e) {
            var a = this.controller;
            return r.Logger.startActiveSpan("V1RedirectHandler__proxy", function(t) {
                return t && (t.setAttribute("code.function", "V1RedirectHandler"), t.setAttribute("outsystems.function.key", "1aa62415-6c8e-4fb6-8342-e0780ca9c40b"), t.setAttribute("outsystems.function.owner.name", "dashboard"), t.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return a.safeExecuteClientAction(a._v1RedirectHandler$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onReady$Action(e) {
            var a = this.controller;
            return r.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "6ee4c427-7497-440f-959c-84cae58ec880"), t.setAttribute("outsystems.function.owner.name", "dashboard"), t.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return a.safeExecuteClientAction(a._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
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
                var a = this.controller,
                    t = this.model,
                    b = this.idService;
                return a.onReady$Action(e)
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
                return O.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return T.defaultTimeout
        }
    };
    n(s, "ControllerInner");
    let c = s;
    R = c, R.registerVariableGroupType("dashboard.MainFlow.Redirect.V1RedirectHandler$getTokenFromUrlParamJSResult", [{
        name: "ServiceToken",
        attrName: "serviceTokenOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: n(function() {
            return ""
        }, "defaultValue")
    }]), R.registerVariableGroupType("dashboard.MainFlow.Redirect.OnReady$getSearchParamsJSResult", [{
        name: "RedirectFrom",
        attrName: "redirectFromOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: n(function() {
            return ""
        }, "defaultValue")
    }])
}
var R, F = new r.Controller.ControllerFactory(R, $);
var p = B(z());
var l = _,
    h = class h extends l.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("isLoading", "isLoadingVar", "isLoading", !0, !1, l.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1)].concat(l.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
        static fromStructure(s) {
            return new h(new h.RecordClass({
                isLoadingVar: l.DataTypes.ImmutableBase.getData(s)
            }))
        }
    };
n(h, "VariablesRecord");
var w = h;
w.init();
var x = class x extends l.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
n(x, "WidgetsRecord");
var D = x,
    f = class f extends l.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return w
        }
        static getWidgetsRecordConstructor() {
            return D
        }
        static get hasValidationWidgets() {
            return f._hasValidationWidgetsValue === void 0 && (f._hasValidationWidgetsValue = void 0), f._hasValidationWidgetsValue
        }
        setInputs(s) {}
    };
n(f, "Model");
var E = f;
E._hasValidationWidgetsValue = void 0;
var k = new l.Model.ModelFactory(E);
var Te = H.PlaceholderContent,
    He = H.IteratorPlaceholderContent,
    j = n(function() {
        var c = M(function(s) {
            var y = s.model,
                e = s.controller,
                a = s.controller.idService,
                t = e.validationService,
                b = e.callContext(),
                o = W,
                m = C,
                d = {
                    props: s,
                    validateWidget: n(function(v) {
                        s.validateWidget(s, v)
                    }, "validateWidget")
                },
                i = y,
                u = J,
                A = I,
                S = L();
            return p.createElement("div", s.rootNodeProperties, p.createElement(g, {
                getOwnerSpan: n(function() {
                    return S.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: n(function() {
                    return S.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: n(function(v) {
                        e.handleError(v)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: t
                },
                _idProps: {
                    service: a,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: i,
                _dependencies: []
            }), u(y.variables.isLoadingVar, !1, this, function() {
                return [p.createElement(g, {
                    getOwnerSpan: n(function() {
                        return S.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: n(function() {
                        return S.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: n(function(v) {
                            e.handleError(v)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: t
                    },
                    _idProps: {
                        service: a,
                        uuid: "1",
                        alias: "2"
                    },
                    _widgetRecordProvider: i,
                    _dependencies: []
                })]
            }, function() {
                return []
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: n(function() {
                return {
                    codeFunction: "Redirect",
                    functionKey: "f962a19f-4d22-44be-bb9a-00a9fda683b4",
                    functionOwnerName: "dashboard",
                    functionOwnerKey: "bbed91b8-a741-4694-b61f-b0ef761ba4e2",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "MainFlow.Redirect",
            modelFactory: k,
            controllerFactory: F,
            getTitle: n(function() {
                return C("n6Fi+SJNvkS7mgCp_aaDtA#Title", "Redirect")
            }, "getTitle")
        });
        return c.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/dashboard.DerivV2.css", "css/dashboard.DerivV2.extra.css", "css/OutSystemsReactWidgets.css"]
        }, c.getJsDependencies = function() {
            return []
        }, c.getBlocks = function() {
            return [g]
        }, c
    }, "componentFactory"),
    q = j();
export {
    F as controllerModule, k as modelModule, q as viewModule, O as webFlowControllerModule
};