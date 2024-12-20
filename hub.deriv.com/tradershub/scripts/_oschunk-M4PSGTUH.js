import {
    a as T
} from "./_oschunk-EK7BIWKQ.js";
import {
    a as A
} from "./_oschunk-5N5TJ3ES.js";
import {
    a as h,
    c as E,
    d as i
} from "./_oschunk-VADNKVBQ.js";
import {
    vc as d
} from "./_oschunk-KG7LSUIA.js";
import {
    ia as b
} from "./_oschunk-5EPHB76O.js";
import {
    c as m
} from "./_oschunk-DVBKI63I.js";
var H = {
        "_9a0yxm0X0iZQIHEDh+64w#Title": "\u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062A",
        "_9a0yxm0X0iZQIHEDh+64w#TitleExpression.2118442357.1": "\u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062A"
    },
    g = {
        "_9a0yxm0X0iZQIHEDh+64w#Title": "Transaktionen",
        "_9a0yxm0X0iZQIHEDh+64w#TitleExpression.2118442357.1": "Transaktionen"
    },
    O = {
        "_9a0yxm0X0iZQIHEDh+64w#Title": "Transacciones",
        "_9a0yxm0X0iZQIHEDh+64w#TitleExpression.2118442357.1": "Transacciones"
    },
    D = {
        "_9a0yxm0X0iZQIHEDh+64w#Title": "Transazioni",
        "_9a0yxm0X0iZQIHEDh+64w#TitleExpression.2118442357.1": "Transazioni"
    },
    S = {
        "_9a0yxm0X0iZQIHEDh+64w#Title": "Transakcje",
        "_9a0yxm0X0iZQIHEDh+64w#TitleExpression.2118442357.1": "Transakcje"
    },
    C = {
        "_9a0yxm0X0iZQIHEDh+64w#Title": "Transa\xE7\xF5es",
        "_9a0yxm0X0iZQIHEDh+64w#TitleExpression.2118442357.1": "Transa\xE7\xF5es"
    },
    R = {
        "ar-001": {
            translations: H,
            isRTL: !0
        },
        "de-DE": {
            translations: g,
            isRTL: !1
        },
        "es-ES": {
            translations: O,
            isRTL: !1
        },
        "it-IT": {
            translations: D,
            isRTL: !1
        },
        "pl-PL": {
            translations: S,
            isRTL: !1
        },
        "pt-PT": {
            translations: C,
            isRTL: !1
        }
    };
var n = b; {
    let u = class u extends n.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, R);
            var s = this.controller;
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
                    s = this.idService;
                return n.Logger.startActiveSpan("OnReady", function(a) {
                    return a && (a.setAttribute("code.function", "OnReady"), a.setAttribute("outsystems.function.key", "b73a1376-9602-49de-8fb3-41cb4767b1ed"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var f = new n.DataTypes.VariableHolder,
                            _ = new n.DataTypes.VariableHolder,
                            I = new n.DataTypes.VariableHolder,
                            o = new n.DataTypes.VariableHolder,
                            v = new n.DataTypes.VariableHolder,
                            y = new n.DataTypes.VariableHolder(new(n.Controller.BaseController.getJSONDeserializeOutputType(d)));
                        return n.Flow.executeAsyncFlow(function() {
                            return r.variables.isLoadingVar = !0, r.flush(), i.sendAuthorize$Action(!1, e).then(function(c) {
                                I.value = c
                            }).then(function() {
                                return o.value = i.getBalanceByLoginId$Action(h.getActiveWalletLoginId(), e), _.value = E.formatMoney$Action(o.value.balanceOut, o.value.currencyOut, "en-US", "", e), f.value = i.getIcon$Action(o.value.currencyOut, e), r.flush(), i.getWalletStatement$Action(e).then(function(c) {
                                    v.value = c
                                })
                            }).then(function() {
                                y.value.dataOut = n.JSONUtils.deserializeFromJSON(v.value.walletTransactionsOut, d, !1), r.variables.transactionsVar = y.value.dataOut, r.variables.isLoadingVar = !1, r.variables.currencyVar = o.value.currencyOut, r.variables.iconVar = f.value.currencyIconOut, r.variables.balanceVar = _.value.formattedNumberOut
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
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    s = this.idService;
                return n.Logger.startActiveSpan("OnInitialize", function(a) {
                    a && (a.setAttribute("code.function", "OnInitialize"), a.setAttribute("outsystems.function.key", "b91f9e9f-e4e0-4c43-a9d1-3ac2eafc42f3"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        if (t.ensureControllerAlive("OnInitialize"), e = t.callContext(e), h.getAuthToken() === n.BuiltinFunctions.nullTextIdentifier()) return n.Navigation.navigateTo(n.Navigation.generateScreenURL("tradershub", "cfds/:ProductIdentifier?", {}), n.Transitions.createTransition(n.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        onReady$Action(e) {
            var r = this.controller;
            return n.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "b73a1376-9602-49de-8fb3-41cb4767b1ed"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onInitialize$Action(e) {
            var r = this.controller;
            return n.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "b91f9e9f-e4e0-4c43-a9d1-3ac2eafc42f3"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onInitialize$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    s = this.idService;
                return r.onInitialize$Action(e)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    s = this.idService;
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
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(e) {
                return T.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return i.defaultTimeout
        }
    };
    m(u, "ControllerInner");
    let l = u;
    w = l
}
var w, W = new n.Controller.ControllerFactory(w, A);
export {
    W as a
};