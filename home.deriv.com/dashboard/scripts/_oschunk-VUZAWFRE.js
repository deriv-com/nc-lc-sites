import {
    a as N
} from "./_oschunk-O5KC3WOL.js";
import {
    a as K,
    g as v,
    m as T,
    o as H,
    q as R,
    r as I,
    s as $,
    t as F
} from "./_oschunk-NVHFAAS2.js";
import {
    a as P
} from "./_oschunk-AW35UT34.js";
import {
    a as k
} from "./_oschunk-APHDMPWW.js";
import {
    Ka as g
} from "./_oschunk-WCMQG33O.js";
import {
    X as y,
    c,
    f as B
} from "./_oschunk-DFKJJKI4.js";
var m = y,
    C = class C extends m.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(m.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
c(C, "VariablesRecord");
var h = C;
h.init();
var E = class E extends m.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
c(E, "WidgetsRecord");
var A = E,
    _ = class _ extends m.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return h
        }
        static getWidgetsRecordConstructor() {
            return A
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(i) {}
    };
c(_, "Model");
var b = _;
b._hasValidationWidgetsValue = void 0;
var x = new m.Model.ModelFactory(b);
var p = B(K());
var L = {};

function O(l, i, S, e) {
    let o = document.querySelector(".kyc-iframe-container");
    console.log("language", l.Language);
    let t = null,
        a = {
            country: l.Country,
            language: l.Language,
            theme: "light"
        },
        {
            IsProduction: r
        } = i.IsProduction(),
        d = r ? "https://kyc.deriv.com" : "https://staging-kyc.deriv.com";
    t = document.createElement("iframe"), t.src = d + "/poi", t.style.width = "100%", t.style.height = "100%", t.style.border = "none", t.allow = "camera; microphone; fullscreen; geolocation; encrypted-media", t.allowFullscreen = !0, o.appendChild(t), window.addEventListener("message", u => {
        if (u.origin !== d) {
            console.warn("Rejected message from unknown origin:", u.origin);
            return
        }
        let {
            type: s,
            data: f
        } = u.data || {};
        switch (s) {
            case "kyc:iframe:loaded":
                console.log("POI iframe is ready.");
                try {
                    t.contentWindow.postMessage({
                        type: "kyc:init",
                        payload: a
                    }, d)
                } catch (w) {
                    console.log("===> KYC Adaptor", w)
                }
                break;
            case "kyc:init:ack":
                console.log("POI user authenticated successfully:", f);
                break;
            case "kyc:ready":
                console.error("POI authentication failed:", f);
                break;
            case "kyc:steps:completed":
                console.log("Identity verification successful:", f), i.TriggerOnComplete();
                break;
            case "kyc:verification:error":
                console.error("Identity verification failed:", f), i.TriggerOnError();
                break;
            case "kyc:verification:next":
                console.log("Identity verification step completed, can continue:", f), i.TriggerOnComplete();
                break
        }
    })
}
c(O, "default");
var n = y; {
    let i = class i extends n.Controller.BaseViewController {
        constructor(e, o, t) {
            super(e, o, t, L);
            var a = this.controller;
            this.clientActionProxies = {
                triggerOnComplete$Action: c(function() {
                    return a.executeActionInsideJSNode(a._triggerOnComplete$Action.bind(a), a.callContext(), function(r) {
                        return {}
                    }, function() {}, "TriggerOnComplete")
                }, "triggerOnComplete$Action"),
                triggerOnError$Action: c(function() {
                    return a.executeActionInsideJSNode(a._triggerOnError$Action.bind(a), a.callContext(), function(r) {
                        return {}
                    }, function() {}, "TriggerOnError")
                }, "triggerOnError$Action")
            }, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _triggerOnComplete$Action() {
            return this.hasOwnProperty("__triggerOnComplete$Action") || (this.__triggerOnComplete$Action = function(e) {
                var o = this.model,
                    t = this.controller,
                    a = this.idService;
                return n.Logger.startActiveSpan("TriggerOnComplete", function(r) {
                    return r && (r.setAttribute("code.function", "TriggerOnComplete"), r.setAttribute("outsystems.function.key", "4bd5c0da-aa4c-4292-a11e-1639cb4e5709"), r.setAttribute("outsystems.function.owner.name", "dashboard"), r.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("TriggerOnComplete"), e = t.callContext(e), n.Flow.executeAsyncFlow(function() {
                            return t.onComplete$Action(e)
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__triggerOnComplete$Action
        }
        set _triggerOnComplete$Action(e) {
            this.__triggerOnComplete$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var o = this.model,
                    t = this.controller,
                    a = this.idService;
                return n.Logger.startActiveSpan("OnReady", function(r) {
                    return r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "57bba9d7-5134-4e5d-b538-4b759738bec8"), r.setAttribute("outsystems.function.owner.name", "dashboard"), r.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var d = new n.DataTypes.VariableHolder,
                            u = new n.DataTypes.VariableHolder;
                        return n.Flow.executeAsyncFlow(function() {
                            return o.flush(), g.gET_PII_ClientProfile$Action(e).then(function(s) {
                                u.value = s
                            }).then(function() {
                                d.value = g.languageMapper$Action(!1, "", e), k.consoleLog$Action("language: " + n.BuiltinFunctions.substr(d.value.charCodeOut, 0, 2), 0, e), n.Logger.startActiveSpan("POIKYCIframe", function(s) {
                                    s && (s.setAttribute("code.function", "POIKYCIframe"), s.setAttribute("outsystems.function.key", "ca07ed50-53f8-424f-b63d-4d9805ac62de"), s.setAttribute("outsystems.function.owner.name", "dashboard"), s.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return t.safeExecuteJSNode(O, "POIKYCIframe", "OnReady", {
                                            Language: n.DataConversion.JSNodeParamConverter.to(n.BuiltinFunctions.substr(d.value.charCodeOut, 0, 2) === "zh" ? d.value.charCodeOut : n.BuiltinFunctions.toLower(d.value.charCodeOut), n.DataTypes.DataTypes.Text),
                                            Country: n.DataConversion.JSNodeParamConverter.to(u.value.responseOut.dataAttr.residenceAttr, n.DataTypes.DataTypes.Text)
                                        }, function(f) {}, {
                                            IsProduction: g.clientActionProxies.isProduction$Action,
                                            TriggerOnComplete: t.clientActionProxies.triggerOnComplete$Action,
                                            TriggerOnError: t.clientActionProxies.triggerOnError$Action
                                        }, {})
                                    } finally {
                                        s && s.end()
                                    }
                                }, 1)
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _triggerOnError$Action() {
            return this.hasOwnProperty("__triggerOnError$Action") || (this.__triggerOnError$Action = function(e) {
                var o = this.model,
                    t = this.controller,
                    a = this.idService;
                return n.Logger.startActiveSpan("TriggerOnError", function(r) {
                    return r && (r.setAttribute("code.function", "TriggerOnError"), r.setAttribute("outsystems.function.key", "e6d01ccb-5432-4913-8dfb-4313ebae9c4a"), r.setAttribute("outsystems.function.owner.name", "dashboard"), r.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("TriggerOnError"), e = t.callContext(e), n.Flow.executeAsyncFlow(function() {
                            return t.onError$Action(e)
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__triggerOnError$Action
        }
        set _triggerOnError$Action(e) {
            this.__triggerOnError$Action = e
        }
        triggerOnComplete$Action(e) {
            var o = this.controller;
            return n.Logger.startActiveSpan("TriggerOnComplete__proxy", function(t) {
                return t && (t.setAttribute("code.function", "TriggerOnComplete"), t.setAttribute("outsystems.function.key", "4bd5c0da-aa4c-4292-a11e-1639cb4e5709"), t.setAttribute("outsystems.function.owner.name", "dashboard"), t.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                    return o.safeExecuteClientAction(o._triggerOnComplete$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onReady$Action(e) {
            var o = this.controller;
            return n.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "57bba9d7-5134-4e5d-b538-4b759738bec8"), t.setAttribute("outsystems.function.owner.name", "dashboard"), t.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                    return o.safeExecuteClientAction(o._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        triggerOnError$Action(e) {
            var o = this.controller;
            return n.Logger.startActiveSpan("TriggerOnError__proxy", function(t) {
                return t && (t.setAttribute("code.function", "TriggerOnError"), t.setAttribute("outsystems.function.key", "e6d01ccb-5432-4913-8dfb-4313ebae9c4a"), t.setAttribute("outsystems.function.owner.name", "dashboard"), t.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                    return o.safeExecuteClientAction(o._triggerOnError$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        get onComplete$Action() {
            return this.hasOwnProperty("_onComplete$Action") || (this._onComplete$Action = function() {
                return Promise.resolve()
            }), this._onComplete$Action
        }
        set onComplete$Action(e) {
            this._onComplete$Action = e
        }
        get onError$Action() {
            return this.hasOwnProperty("_onError$Action") || (this._onError$Action = function() {
                return Promise.resolve()
            }), this._onError$Action
        }
        set onError$Action(e) {
            this._onError$Action = e
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var o = this.controller,
                    t = this.model,
                    a = this.idService;
                return o.onReady$Action(e)
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
            return g.defaultTimeout
        }
    };
    c(i, "ControllerInner");
    let l = i;
    D = l
}
var D, V = new n.Controller.ControllerFactory(D, P);
var _e = v.PlaceholderContent,
    Oe = v.IteratorPlaceholderContent,
    M = c(function() {
        var l = H(function(i) {
            var S = i.model,
                e = i.controller,
                o = i.controller.idService,
                t = e.validationService,
                a = e.callContext(),
                r = $,
                d = F,
                u = {
                    props: i,
                    validateWidget: c(function(W) {
                        i.validateWidget(i, W)
                    }, "validateWidget")
                },
                s = S,
                f = I,
                w = R,
                Y = T();
            return p.createElement("div", i.rootNodeProperties, p.createElement(N, {
                extendedProperties: {
                    className: "kyc-iframe-container full-width"
                },
                tag: "div",
                _idProps: {
                    service: o,
                    uuid: "0"
                },
                _widgetRecordProvider: s
            }))
        }, {
            topLevelComponent: !1,
            getAttributes: c(function() {
                return {
                    codeFunction: "KYCPOI2",
                    functionKey: "3f1bd3e0-f2b1-4de8-b7c1-5e66e4218601",
                    functionOwnerName: "dashboard",
                    functionOwnerKey: "bbed91b8-a741-4694-b61f-b0ef761ba4e2",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Onboarding.KYCPOI2",
            modelFactory: x,
            controllerFactory: V
        });
        return l.getCssDependencies = function() {
            return ["css/dashboard.Onboarding.KYCPOI2.css", "css/OutSystemsReactWidgets.css"]
        }, l.getJsDependencies = function() {
            return []
        }, l.getBlocks = function() {
            return []
        }, l
    }, "componentFactory"),
    pe = M();
export {
    pe as a
};