import {
    a as k
} from "./_oschunk-O5KC3WOL.js";
import {
    a as K,
    g as v,
    m as x,
    o as p,
    q as T,
    r as H,
    s as R,
    t as $
} from "./_oschunk-NVHFAAS2.js";
import {
    a as N
} from "./_oschunk-AW35UT34.js";
import {
    Ka as y
} from "./_oschunk-WCMQG33O.js";
import {
    X as h,
    c,
    f as W
} from "./_oschunk-DFKJJKI4.js";
var g = h,
    E = class E extends g.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(g.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
c(E, "VariablesRecord");
var m = E;
m.init();
var _ = class _ extends g.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
c(_, "WidgetsRecord");
var A = _,
    O = class O extends g.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return m
        }
        static getWidgetsRecordConstructor() {
            return A
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(i) {}
    };
c(O, "Model");
var b = O;
b._hasValidationWidgetsValue = void 0;
var F = new g.Model.ModelFactory(b);
var S = W(K());
var I = {};

function C(d, i, w, e) {
    let o = document.querySelector(".kyc-iframe-container"),
        t = null,
        a = {
            country: d.Country,
            language: d.Language,
            theme: "light"
        },
        {
            IsProduction: r
        } = i.IsProduction(),
        u = r ? "https://kyc.deriv.com" : "https://staging-kyc.deriv.com";
    t = document.createElement("iframe"), t.src = u + "/poa", t.style.width = "100%", t.style.height = "100%", t.style.border = "none", t.allow = "camera; microphone; fullscreen; geolocation; encrypted-media", t.allowFullscreen = !0, o.appendChild(t), window.addEventListener("message", l => {
        if (l.origin !== u) {
            console.warn("Rejected message from unknown origin:", l.origin);
            return
        }
        let {
            type: s,
            data: f
        } = l.data || {};
        switch (s) {
            case "kyc:iframe:loaded":
                console.log("POA iframe is ready.");
                try {
                    t.contentWindow.postMessage({
                        type: "kyc:init",
                        payload: a
                    }, u)
                } catch (P) {
                    console.log("===> KYC Adaptor", P)
                }
                break;
            case "kyc:init:ack":
                console.log("POA user authenticated successfully:", f);
                break;
            case "kyc:ready":
                console.error("POA authentication failed:", f);
                break;
            case "kyc:steps:completed":
                console.log("Address verification successful:", f), i.TriggerNext();
                break;
            case "kyc:verification:error":
                console.error("Address verification failed:", f), i.TriggerOnError();
                break;
            case "kyc:verification:next":
                console.log("Address verification step completed, can continue:", f), i.TriggerNext();
                break
        }
    })
}
c(C, "default");
var n = h; {
    let i = class i extends n.Controller.BaseViewController {
        constructor(e, o, t) {
            super(e, o, t, I);
            var a = this.controller;
            this.clientActionProxies = {
                triggerNext$Action: c(function() {
                    return a.executeActionInsideJSNode(a._triggerNext$Action.bind(a), a.callContext(), function(r) {
                        return {}
                    }, function() {}, "TriggerNext")
                }, "triggerNext$Action"),
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
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var o = this.model,
                    t = this.controller,
                    a = this.idService;
                return n.Logger.startActiveSpan("OnReady", function(r) {
                    return r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "d431f3df-6115-4d83-b190-092121e3618a"), r.setAttribute("outsystems.function.owner.name", "dashboard"), r.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var u = new n.DataTypes.VariableHolder,
                            l = new n.DataTypes.VariableHolder;
                        return n.Flow.executeAsyncFlow(function() {
                            return o.flush(), y.gET_PII_ClientProfile$Action(e).then(function(s) {
                                u.value = s
                            }).then(function() {
                                l.value = y.languageMapper$Action(!1, "", e), n.Logger.startActiveSpan("POAKYCIframe", function(s) {
                                    s && (s.setAttribute("code.function", "POAKYCIframe"), s.setAttribute("outsystems.function.key", "a65b3dd3-dac9-4106-90e2-102a6d78806b"), s.setAttribute("outsystems.function.owner.name", "dashboard"), s.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return t.safeExecuteJSNode(C, "POAKYCIframe", "OnReady", {
                                            Country: n.DataConversion.JSNodeParamConverter.to(u.value.responseOut.dataAttr.residenceAttr, n.DataTypes.DataTypes.Text),
                                            Language: n.DataConversion.JSNodeParamConverter.to(n.BuiltinFunctions.substr(l.value.charCodeOut, 0, 2) === "zh" ? l.value.charCodeOut : n.BuiltinFunctions.toLower(l.value.charCodeOut), n.DataTypes.DataTypes.Text)
                                        }, function(f) {}, {
                                            IsProduction: y.clientActionProxies.isProduction$Action,
                                            TriggerNext: t.clientActionProxies.triggerNext$Action,
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
        get _triggerNext$Action() {
            return this.hasOwnProperty("__triggerNext$Action") || (this.__triggerNext$Action = function(e) {
                var o = this.model,
                    t = this.controller,
                    a = this.idService;
                return n.Logger.startActiveSpan("TriggerNext", function(r) {
                    return r && (r.setAttribute("code.function", "TriggerNext"), r.setAttribute("outsystems.function.key", "eecd2baf-77be-48ca-9622-ad2cebd6df41"), r.setAttribute("outsystems.function.owner.name", "dashboard"), r.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("TriggerNext"), e = t.callContext(e), n.Flow.executeAsyncFlow(function() {
                            return t.onNext$Action(e)
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__triggerNext$Action
        }
        set _triggerNext$Action(e) {
            this.__triggerNext$Action = e
        }
        get _triggerOnError$Action() {
            return this.hasOwnProperty("__triggerOnError$Action") || (this.__triggerOnError$Action = function(e) {
                var o = this.model,
                    t = this.controller,
                    a = this.idService;
                return n.Logger.startActiveSpan("TriggerOnError", function(r) {
                    return r && (r.setAttribute("code.function", "TriggerOnError"), r.setAttribute("outsystems.function.key", "ff682d0f-0b67-4f47-b5cb-650793eef3a6"), r.setAttribute("outsystems.function.owner.name", "dashboard"), r.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
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
        onReady$Action(e) {
            var o = this.controller;
            return n.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "d431f3df-6115-4d83-b190-092121e3618a"), t.setAttribute("outsystems.function.owner.name", "dashboard"), t.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                    return o.safeExecuteClientAction(o._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        triggerNext$Action(e) {
            var o = this.controller;
            return n.Logger.startActiveSpan("TriggerNext__proxy", function(t) {
                return t && (t.setAttribute("code.function", "TriggerNext"), t.setAttribute("outsystems.function.key", "eecd2baf-77be-48ca-9622-ad2cebd6df41"), t.setAttribute("outsystems.function.owner.name", "dashboard"), t.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                    return o.safeExecuteClientAction(o._triggerNext$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        triggerOnError$Action(e) {
            var o = this.controller;
            return n.Logger.startActiveSpan("TriggerOnError__proxy", function(t) {
                return t && (t.setAttribute("code.function", "TriggerOnError"), t.setAttribute("outsystems.function.key", "ff682d0f-0b67-4f47-b5cb-650793eef3a6"), t.setAttribute("outsystems.function.owner.name", "dashboard"), t.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                    return o.safeExecuteClientAction(o._triggerOnError$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        get onNext$Action() {
            return this.hasOwnProperty("_onNext$Action") || (this._onNext$Action = function() {
                return Promise.resolve()
            }), this._onNext$Action
        }
        set onNext$Action(e) {
            this._onNext$Action = e
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
            return y.defaultTimeout
        }
    };
    c(i, "ControllerInner");
    let d = i;
    D = d
}
var D, V = new n.Controller.ControllerFactory(D, N);
var me = v.PlaceholderContent,
    be = v.IteratorPlaceholderContent,
    M = c(function() {
        var d = p(function(i) {
            var w = i.model,
                e = i.controller,
                o = i.controller.idService,
                t = e.validationService,
                a = e.callContext(),
                r = R,
                u = $,
                l = {
                    props: i,
                    validateWidget: c(function(L) {
                        i.validateWidget(i, L)
                    }, "validateWidget")
                },
                s = w,
                f = H,
                P = T,
                Y = x();
            return S.createElement("div", i.rootNodeProperties, S.createElement(k, {
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
                    codeFunction: "KYCPOA2",
                    functionKey: "36a368a6-fd4c-4ee5-ba83-fdb8e177d7a1",
                    functionOwnerName: "dashboard",
                    functionOwnerKey: "bbed91b8-a741-4694-b61f-b0ef761ba4e2",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Onboarding.KYCPOA2",
            modelFactory: F,
            controllerFactory: V
        });
        return d.getCssDependencies = function() {
            return ["css/dashboard.Onboarding.KYCPOA2.css", "css/OutSystemsReactWidgets.css"]
        }, d.getJsDependencies = function() {
            return []
        }, d.getBlocks = function() {
            return []
        }, d
    }, "componentFactory"),
    ve = M();
export {
    ve as a
};