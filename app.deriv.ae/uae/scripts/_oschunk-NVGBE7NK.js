import {
    a as x
} from "./_oschunk-WJ5PVGKG.js";
import "./_oschunk-JQ2HBHMK.js";
import {
    a as Y
} from "./_oschunk-7ZNALR7E.js";
import {
    a as X
} from "./_oschunk-UZGD3HJ2.js";
import "./_oschunk-L6JZD7VU.js";
import "./_oschunk-HFW3V2GI.js";
import "./_oschunk-YVFTECWM.js";
import {
    b as k,
    f as m,
    h as $,
    i as W,
    j as F,
    n as w,
    u as H
} from "./_oschunk-VR5BNL2K.js";
import {
    a as ve,
    g as j,
    m as ce,
    n as ue,
    q as le,
    r as de,
    s as K,
    t as q
} from "./_oschunk-4VHUVDBV.js";
import {
    a as se
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    $ as D,
    Qb as O,
    Sb as h,
    T as G,
    _ as U,
    aa as z,
    j as E,
    nb as L,
    sb as J,
    ub as l
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as V,
    c as f,
    e as ye,
    m as oe,
    n as ae,
    p as N,
    w as b
} from "./_oschunk-M5BUVJ72.js";
var _e = {
        "JMeDWK2mo0qnbR0j_9lOpA#Value": "\u0627\u0644\u062A\u0627\u0644\u064A",
        "0SsxTlo21kSu3ZPCdtcM+w#Value": "\u0627\u0644\u062A\u0627\u0644\u064A",
        "4KOuecyEgUuqswX7OUbsTQ#Value": "\u0627\u0644\u062A\u0627\u0644\u064A",
        "Xj1WDbY6mkmTVRfmMXKj4A#Title": "\u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0639\u0645\u0644\u0629 | Deriv",
        "Xj1WDbY6mkmTVRfmMXKj4A#TitleExpression.-2098612361.1": "\u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0639\u0645\u0644\u0629 | Deriv"
    },
    fe = {
        "ar-001": {
            translations: _e,
            isRTL: !0
        }
    };

function Z(C, v, a) {
    C.GetConfigAndResults()
}
f(Z, "default");
var t = V; {
    let v = class v extends t.Controller.BaseViewController {
        constructor(e, r, i) {
            super(e, r, i, fe);
            var u = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get getOnboardingConfig$ServerAction() {
            return this.hasOwnProperty("_getOnboardingConfig$ServerAction") || (this._getOnboardingConfig$ServerAction = function(e, r, i) {
                var u = this.controller;
                return t.Logger.startActiveSpan("GetOnboardingConfig", function(n) {
                    return n && (n.setAttribute("code.function", "GetOnboardingConfig"), n.setAttribute("outsystems.function.key", "86c7c527-d6b4-4110-af68-13e28071a825"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), t.Flow.tryFinally(function() {
                        var g = {
                            country: t.DataConversion.ServerDataConverter.to(e, t.DataTypes.DataTypes.Text),
                            authorization: t.DataConversion.ServerDataConverter.to(r, t.DataTypes.DataTypes.Text)
                        };
                        return u.callServerAction("GetOnboardingConfig", "screenservices/uae/V2Flow/CurrencySelection_V2/ActionGetOnboardingConfig", "9mxHf9W_0f9gxqO_bFIMsA", g, u.callContext(i), void 0, void 0, !0).then(function(y) {
                            var o = new(u.constructor.getVariableGroupType("uae.V2Flow.CurrencySelection_V2$ActionGetOnboardingConfig"));
                            return o.responseOut = t.DataConversion.ServerDataConverter.from(y.Response, D), o
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 0)
            }), this._getOnboardingConfig$ServerAction
        }
        set getOnboardingConfig$ServerAction(e) {
            this._getOnboardingConfig$ServerAction = e
        }
        get postWallets$ServerAction() {
            return this.hasOwnProperty("_postWallets$ServerAction") || (this._postWallets$ServerAction = function(e, r, i) {
                var u = this.controller;
                return t.Logger.startActiveSpan("PostWallets", function(n) {
                    return n && (n.setAttribute("code.function", "PostWallets"), n.setAttribute("outsystems.function.key", "5845eb09-25fe-4708-b6d5-4db07ff0e39a"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), t.Flow.tryFinally(function() {
                        var g = {
                            authorization: t.DataConversion.ServerDataConverter.to(e, t.DataTypes.DataTypes.Text),
                            Request: t.DataConversion.ServerDataConverter.to(r, t.DataTypes.DataTypes.Record)
                        };
                        return u.callServerAction("PostWallets", "screenservices/uae/V2Flow/CurrencySelection_V2/ActionPostWallets", "TKNVFu+4FInQfxWXdmw8Uw", g, u.callContext(i), void 0, void 0, !0).then(function(y) {
                            var o = new(u.constructor.getVariableGroupType("uae.V2Flow.CurrencySelection_V2$ActionPostWallets"));
                            return o.responseOut = t.DataConversion.ServerDataConverter.from(y.Response, L), o
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 0)
            }), this._postWallets$ServerAction
        }
        set postWallets$ServerAction(e) {
            this._postWallets$ServerAction = e
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
                    i = this.controller,
                    u = this.idService;
                return t.Logger.startActiveSpan("OnReady", function(n) {
                    return n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "04df0662-28b8-4907-96e7-575335c2c7f5"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        i.ensureControllerAlive("OnReady"), e = i.callContext(e);
                        var g = new t.DataTypes.VariableHolder,
                            y = new t.DataTypes.VariableHolder,
                            o = new t.DataTypes.VariableHolder(new t.DataTypes.JSONSerializeOutputType),
                            S = new t.DataTypes.VariableHolder(new t.DataTypes.JSONSerializeOutputType),
                            P = new t.DataTypes.VariableHolder(new t.DataTypes.JSONSerializeOutputType),
                            A = new t.DataTypes.VariableHolder(new t.DataTypes.JSONSerializeOutputType),
                            s = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(t.GenericTypeCache.getGenericList(U))));
                        return t.Flow.executeAsyncFlow(function() {
                            return t.Flow.executeSequence(function() {
                                if (l.getonboarding_config_data() !== t.BuiltinFunctions.nullTextIdentifier()) s.value.dataOut = t.JSONUtils.deserializeFromJSON(l.getonboarding_config_data(), t.GenericTypeCache.getGenericList(U), !1), r.variables.other_currenciesVar = s.value.dataOut.getCurrent(e.iterationContext).currency_selectionAttr.otherAttr, r.variables.recommended_currenciesVar = s.value.dataOut.getCurrent(e.iterationContext).currency_selectionAttr.recommendedAttr, A.value.jSONOut = t.JSONUtils.serializeToJSON(s.value.dataOut.getCurrent(e.iterationContext).main_goalAttr, !1, !1), S.value.jSONOut = t.JSONUtils.serializeToJSON(s.value.dataOut.getCurrent(e.iterationContext).employment_statusAttr, !1, !1), l.setmain_goal_list(A.value.jSONOut), l.setemployment_status_list(S.value.jSONOut), t.SystemActions.listAppendAll(r.variables.recommended_currenciesVar, r.variables.other_currenciesVar, e);
                                else return y.value = h.getAuth$Action(e), r.variables.is_loadingVar = !0, r.flush(), i.getOnboardingConfig$ServerAction(l.getresidence(), y.value.tokenOut, e).then(function(d) {
                                    g.value = d
                                }).then(function() {
                                    r.variables.other_currenciesVar = g.value.responseOut.dataAttr.getItem(0).currency_selectionAttr.otherAttr, r.variables.recommended_currenciesVar = g.value.responseOut.dataAttr.getItem(0).currency_selectionAttr.recommendedAttr, o.value.jSONOut = t.JSONUtils.serializeToJSON(g.value.responseOut.dataAttr.getCurrent(e.iterationContext).main_goalAttr, !1, !1), P.value.jSONOut = t.JSONUtils.serializeToJSON(g.value.responseOut.dataAttr.getItem(0).employment_statusAttr, !1, !1), l.setmain_goal_list(o.value.jSONOut), l.setemployment_status_list(P.value.jSONOut), t.SystemActions.listAppendAll(r.variables.recommended_currenciesVar, r.variables.other_currenciesVar, e), r.variables.is_loadingVar = !1
                                })
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _keepGoingOnClick$Action() {
            return this.hasOwnProperty("__keepGoingOnClick$Action") || (this.__keepGoingOnClick$Action = function(e) {
                var r = this.model,
                    i = this.controller,
                    u = this.idService;
                return t.Logger.startActiveSpan("KeepGoingOnClick", function(n) {
                    n && (n.setAttribute("code.function", "KeepGoingOnClick"), n.setAttribute("outsystems.function.key", "092bf85b-391d-4437-bc2e-47b9d9c119d4"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("KeepGoingOnClick"), e = i.callContext(e), r.variables.is_are_you_sure_modal_openVar = !1
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__keepGoingOnClick$Action
        }
        set _keepGoingOnClick$Action(e) {
            this.__keepGoingOnClick$Action = e
        }
        get _onSelectCurrency$Action() {
            return this.hasOwnProperty("__onSelectCurrency$Action") || (this.__onSelectCurrency$Action = function(e, r) {
                var i = this.model,
                    u = this.controller,
                    n = this.idService;
                return t.Logger.startActiveSpan("OnSelectCurrency", function(g) {
                    g && (g.setAttribute("code.function", "OnSelectCurrency"), g.setAttribute("outsystems.function.key", "2f1a3f2b-6881-4195-a7d3-bade397494e3"), g.setAttribute("outsystems.function.owner.name", "uae"), g.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), g.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        u.ensureControllerAlive("OnSelectCurrency"), r = u.callContext(r);
                        var y = new t.DataTypes.VariableHolder(new(u.constructor.getVariableGroupType("uae.V2Flow.CurrencySelection_V2.OnSelectCurrency$vars")));
                        y.value.currencyInLocal = e;
                        var o = new t.DataTypes.VariableHolder;
                        o.value = h.getAuth$Action(r), l.setcurrency(y.value.currencyInLocal), i.variables.post_wallet_requestVar.currencyAttr = y.value.currencyInLocal, i.variables.post_wallet_requestVar.counterpartyAttr = "dsvg"
                    } finally {
                        g && g.end()
                    }
                }, 1)
            }), this.__onSelectCurrency$Action
        }
        set _onSelectCurrency$Action(e) {
            this.__onSelectCurrency$Action = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var r = this.model,
                    i = this.controller,
                    u = this.idService;
                return t.Logger.startActiveSpan("OnInitialize", function(n) {
                    n && (n.setAttribute("code.function", "OnInitialize"), n.setAttribute("outsystems.function.key", "5d2ee623-10c1-4ba4-a806-d086a3e32efd"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("OnInitialize"), e = i.callContext(e);
                        var g = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(J)));
                        if (h.consoleLog$Action("test" + (l.getenableMobileOnboarding() ? "True" : "False"), e), l.getenableMobileOnboarding() && t.Logger.startActiveSpan("JavaScript2", function(y) {
                                y && (y.setAttribute("code.function", "JavaScript2"), y.setAttribute("outsystems.function.key", "803a9e42-0ca1-404a-b1cf-5be5cbb228f0"), y.setAttribute("outsystems.function.owner.name", "uae"), y.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), y.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return i.safeExecuteJSNode(Z, "JavaScript2", "OnInitialize", null, function(o) {}, {
                                        GetConfigAndResults: h.clientActionProxies.getConfigAndResults$Action
                                    }, {})
                                } finally {
                                    y && y.end()
                                }
                            }, 1), g.value.dataOut = t.JSONUtils.deserializeFromJSON(l.getonboardingstatus(), J, !1), l.setRealSignupCurrentStep(1), r.variables.is_tnc_acceptedVar = g.value.dataOut.dataAttr.getCurrent(e.iterationContext).tncAttr.acceptedAttr === !0 && g.value.dataOut.dataAttr.getCurrent(e.iterationContext).walletAttr.createdAttr === !1, r.variables.onboardingstatusVar = g.value.dataOut.dataAttr.getCurrent(e.iterationContext), l.getenableMobileOnboarding() && (h.consoleLog$Action("cccc" + r.variables.onboardingstatusVar.profileAttr.statusAttr == "complete" ? "True" : "False", e), l.setshould_skip_currency_selection(!1), r.variables.onboardingstatusVar.walletAttr.createdAttr)) return r.variables.onboardingstatusVar.mt5_accountsAttr.demoAttr.createdAttr || r.variables.onboardingstatusVar.mt5_accountsAttr.realAttr.createdAttr ? r.variables.onboardingstatusVar.financial_assessmentAttr.statusAttr === "complete" ? r.variables.onboardingstatusVar.trading_assessmentAttr.statusAttr === "complete" ? r.variables.onboardingstatusVar.tncAttr.acceptedAttr ? r.variables.onboardingstatusVar.trading_assessmentAttr.isSuitableAttr === !1 && r.variables.onboardingstatusVar.trading_assessmentAttr.riskAcceptanceAttr === "accepted" ? r.variables.onboardingstatusVar.kycAttr.main_statusAttr === "verified" ? t.Navigation.navigateTo(t.Navigation.generateScreenURL("uae", "wallet", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), e, !0) : r.variables.onboardingstatusVar.kycAttr.poi_statusAttr === "verified" ? (l.setkyc_flow_from("banner_add_funds"), t.Navigation.navigateTo(t.Navigation.generateScreenURL("uae", "verify-poa", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), e, !0)) : t.Navigation.navigateTo(t.Navigation.generateScreenURL("uae", "verify-your-identity", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), e, !0) : t.Navigation.navigateTo(t.Navigation.generateScreenURL("uae", "suitability-test-warning", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), e, !0) : t.Navigation.navigateTo(t.Navigation.generateScreenURL("uae", "terms-and-condition", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), e, !0) : t.Navigation.navigateTo(t.Navigation.generateScreenURL("uae", "suitability-assessment", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), e, !0) : t.Navigation.navigateTo(t.Navigation.generateScreenURL("uae", "employment-status", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.None), e, !0) : t.Navigation.navigateTo(t.Navigation.generateScreenURL("uae", "MT5AccountType", {
                            is_demo: t.DataConversion.ServerDataConverter.to(!1, t.DataTypes.DataTypes.Boolean)
                        }), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        get _nextStep$Action() {
            return this.hasOwnProperty("__nextStep$Action") || (this.__nextStep$Action = function(e) {
                var r = this.model,
                    i = this.controller,
                    u = this.idService;
                return t.Logger.startActiveSpan("NextStep", function(n) {
                    return n && (n.setAttribute("code.function", "NextStep"), n.setAttribute("outsystems.function.key", "de63180d-9bd1-4a86-940d-81d425d3d13c"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        i.ensureControllerAlive("NextStep"), e = i.callContext(e);
                        var g = new t.DataTypes.VariableHolder,
                            y = new t.DataTypes.VariableHolder;
                        return t.Flow.executeAsyncFlow(function() {
                            return y.value = h.getAuth$Action(e), r.variables.post_wallet_requestVar.currencyAttr = l.getcurrency(), r.flush(), i.postWallets$ServerAction(y.value.tokenOut, r.variables.post_wallet_requestVar, e).then(function(o) {
                                g.value = o
                            }).then(function() {
                                h.updateWalletListCache$Action(g.value.responseOut.dataAttr, e)
                            }).then(function() {
                                if (!(!g.value.responseOut.errorsAttr.isEmpty && g.value.responseOut.errorsAttr.getCurrent(e.iterationContext).codeAttr !== t.BuiltinFunctions.nullTextIdentifier())) return r.variables.is_loadingVar = !1, t.Flow.returnAsync(t.Navigation.navigateTo(t.Navigation.generateScreenURL("uae", "MT5AccountType", {
                                    is_demo: t.DataConversion.ServerDataConverter.to(!1, t.DataTypes.DataTypes.Boolean)
                                }), t.Transitions.createTransition(t.Transitions.TransitionAnimation.None), e, !0))
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__nextStep$Action
        }
        set _nextStep$Action(e) {
            this.__nextStep$Action = e
        }
        get _realAccountCreationLayoutOnClickPrevious$Action() {
            return this.hasOwnProperty("__realAccountCreationLayoutOnClickPrevious$Action") || (this.__realAccountCreationLayoutOnClickPrevious$Action = function(e) {
                var r = this.model,
                    i = this.controller,
                    u = this.idService;
                return t.Logger.startActiveSpan("RealAccountCreationLayoutOnClickPrevious", function(n) {
                    n && (n.setAttribute("code.function", "RealAccountCreationLayoutOnClickPrevious"), n.setAttribute("outsystems.function.key", "e6421d89-c327-4d7b-b035-b6dcf4449a3a"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return i.ensureControllerAlive("RealAccountCreationLayoutOnClickPrevious"), e = i.callContext(e), t.Navigation.navigateTo(t.Navigation.generateScreenURL("uae", "home", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__realAccountCreationLayoutOnClickPrevious$Action
        }
        set _realAccountCreationLayoutOnClickPrevious$Action(e) {
            this.__realAccountCreationLayoutOnClickPrevious$Action = e
        }
        onReady$Action(e) {
            var r = this.controller;
            return t.Logger.startActiveSpan("OnReady__proxy", function(i) {
                return i && (i.setAttribute("code.function", "OnReady"), i.setAttribute("outsystems.function.key", "04df0662-28b8-4907-96e7-575335c2c7f5"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                }, function() {
                    i && i.end()
                })
            }, 0)
        }
        keepGoingOnClick$Action(e) {
            var r = this.controller;
            return t.Logger.startActiveSpan("KeepGoingOnClick__proxy", function(i) {
                i && (i.setAttribute("code.function", "KeepGoingOnClick"), i.setAttribute("outsystems.function.key", "092bf85b-391d-4437-bc2e-47b9d9c119d4"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._keepGoingOnClick$Action, e)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        onSelectCurrency$Action(e, r) {
            var i = this.controller;
            return t.Logger.startActiveSpan("OnSelectCurrency__proxy", function(u) {
                u && (u.setAttribute("code.function", "OnSelectCurrency"), u.setAttribute("outsystems.function.key", "2f1a3f2b-6881-4195-a7d3-bade397494e3"), u.setAttribute("outsystems.function.owner.name", "uae"), u.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onSelectCurrency$Action, r, e)
                } finally {
                    u && u.end()
                }
            }, 0)
        }
        onInitialize$Action(e) {
            var r = this.controller;
            return t.Logger.startActiveSpan("OnInitialize__proxy", function(i) {
                i && (i.setAttribute("code.function", "OnInitialize"), i.setAttribute("outsystems.function.key", "5d2ee623-10c1-4ba4-a806-d086a3e32efd"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onInitialize$Action, e)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        nextStep$Action(e) {
            var r = this.controller;
            return t.Logger.startActiveSpan("NextStep__proxy", function(i) {
                return i && (i.setAttribute("code.function", "NextStep"), i.setAttribute("outsystems.function.key", "de63180d-9bd1-4a86-940d-81d425d3d13c"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._nextStep$Action, e)
                }, function() {
                    i && i.end()
                })
            }, 0)
        }
        realAccountCreationLayoutOnClickPrevious$Action(e) {
            var r = this.controller;
            return t.Logger.startActiveSpan("RealAccountCreationLayoutOnClickPrevious__proxy", function(i) {
                i && (i.setAttribute("code.function", "RealAccountCreationLayoutOnClickPrevious"), i.setAttribute("outsystems.function.key", "e6421d89-c327-4d7b-b035-b6dcf4449a3a"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._realAccountCreationLayoutOnClickPrevious$Action, e)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var r = this.controller,
                    i = this.model,
                    u = this.idService;
                return r.onInitialize$Action(e)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var r = this.controller,
                    i = this.model,
                    u = this.idService;
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
                return Y.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return h.defaultTimeout
        }
    };
    f(v, "ControllerInner");
    let C = v;
    I = C, I.registerVariableGroupType("uae.V2Flow.CurrencySelection_V2$ActionGetOnboardingConfig", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: t.DataTypes.DataTypes.Record,
        defaultValue: f(function() {
            return new D
        }, "defaultValue"),
        complexType: D
    }]), I.registerVariableGroupType("uae.V2Flow.CurrencySelection_V2$ActionPostWallets", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: t.DataTypes.DataTypes.Record,
        defaultValue: f(function() {
            return new L
        }, "defaultValue"),
        complexType: L
    }]), I.registerVariableGroupType("uae.V2Flow.CurrencySelection_V2.OnSelectCurrency$vars", [{
        name: "currency",
        attrName: "currencyInLocal",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: f(function() {
            return ""
        }, "defaultValue")
    }])
}
var I, Q = new t.Controller.ControllerFactory(I, se);
var c = ye(ve());
var _ = V,
    re = class re extends _.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("is_loading", "is_loadingVar", "is_loading", !0, !1, _.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("other_currencies", "other_currenciesVar", "other_currencies", !0, !1, _.DataTypes.DataTypes.RecordList, function() {
                return _.DataTypes.ImmutableBase.getData(new(_.GenericTypeCache.getGenericList(E)))
            }, !1, _.GenericTypeCache.getGenericList(E)), this.attr("recommended_currencies", "recommended_currenciesVar", "recommended_currencies", !0, !1, _.DataTypes.DataTypes.RecordList, function() {
                return _.DataTypes.ImmutableBase.getData(new(_.GenericTypeCache.getGenericList(E)))
            }, !1, _.GenericTypeCache.getGenericList(E)), this.attr("post_wallet_request", "post_wallet_requestVar", "post_wallet_request", !0, !1, _.DataTypes.DataTypes.Record, function() {
                return _.DataTypes.ImmutableBase.getData(new z)
            }, !1, z), this.attr("is_are_you_sure_modal_open", "is_are_you_sure_modal_openVar", "is_are_you_sure_modal_open", !0, !1, _.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("is_tnc_accepted", "is_tnc_acceptedVar", "is_tnc_accepted", !0, !1, _.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("onboardingstatus", "onboardingstatusVar", "onboardingstatus", !0, !1, _.DataTypes.DataTypes.Record, function() {
                return _.DataTypes.ImmutableBase.getData(new G)
            }, !1, G)].concat(_.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
f(re, "VariablesRecord");
var B = re;
B.init();
var ne = class ne extends _.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
f(ne, "WidgetsRecord");
var ee = ne,
    T = class T extends _.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return B
        }
        static getWidgetsRecordConstructor() {
            return ee
        }
        static get hasValidationWidgets() {
            return T._hasValidationWidgetsValue === void 0 && (T._hasValidationWidgetsValue = void 0 || void 0), T._hasValidationWidgetsValue
        }
        setInputs(v) {}
    };
f(T, "Model");
var M = T;
M._hasValidationWidgetsValue = void 0;
var te = new _.Model.ModelFactory(M);
var p = j.PlaceholderContent,
    ie = j.IteratorPlaceholderContent,
    be = f(function() {
        var C = ue(function(v) {
            var a = v.model,
                e = v.controller,
                r = v.controller.idService,
                i = e.validationService,
                u = e.callContext(),
                n = K,
                g = q,
                y = {
                    props: v,
                    validateWidget: f(function(s) {
                        v.validateWidget(v, s)
                    }, "validateWidget")
                },
                o = a,
                S = de,
                P = le,
                A = ce();
            return c.createElement("div", v.rootNodeProperties, c.createElement(X, {
                getOwnerSpan: f(function() {
                    return A.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: f(function() {
                    return A.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ShouldShow: a.variables.is_are_you_sure_modal_openVar
                },
                events: {
                    _handleError: f(function(s) {
                        e.handleError(s)
                    }, "_handleError"),
                    onContinue$Action: f(function() {
                        var s = typeof u != "undefined" && u !== null ? u.clone() : e.callContext().clone();
                        e.keepGoingOnClick$Action(e.callContext(s))
                    }, "onContinue$Action")
                },
                _validationProps: {
                    validationService: i
                },
                _idProps: {
                    service: r,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: o,
                _dependencies: []
            }), S(a.variables.is_tnc_acceptedVar, !1, this, function() {
                return [S(O.isDesktop$Action(u).isDesktopOut, !1, this, function() {
                    return [c.createElement(x, {
                        getOwnerSpan: f(function() {
                            return A.getChildSpan("render")
                        }, "getOwnerSpan"),
                        getOwnerDisposeSpan: f(function() {
                            return A.getChildSpan("destroy")
                        }, "getOwnerDisposeSpan"),
                        inputs: {
                            BtnSkipVisible: !1,
                            Progress: 33,
                            BtnBackVisible: !0,
                            Heading: "Choose your account currency",
                            SubHeading2: "This will be used for your Wallet and trading account.",
                            BtnCloseVisible: !0
                        },
                        events: {
                            _handleError: f(function(s) {
                                e.handleError(s)
                            }, "_handleError")
                        },
                        _validationProps: {
                            validationService: i
                        },
                        _idProps: {
                            service: r,
                            uuid: "1",
                            alias: "2"
                        },
                        _widgetRecordProvider: o,
                        placeholders: {
                            content: new p(function() {
                                return [c.createElement(m, {
                                    align: 0,
                                    animate: !1,
                                    style: "display-flex justify-content-center",
                                    visible: !0,
                                    _idProps: {
                                        service: r,
                                        name: "BodyContainer"
                                    },
                                    _widgetRecordProvider: o
                                }, c.createElement(m, {
                                    align: 0,
                                    animate: !1,
                                    gridProperties: {
                                        classes: "OSInline",
                                        width: "600px"
                                    },
                                    style: "currency-container",
                                    visible: !0,
                                    _idProps: {
                                        service: r,
                                        name: "CurrencyListContainer5"
                                    },
                                    _widgetRecordProvider: o
                                }, c.createElement(m, {
                                    align: 0,
                                    animate: !1,
                                    style: "category-container",
                                    visible: !0,
                                    _idProps: {
                                        service: r,
                                        name: "Currencies2"
                                    },
                                    _widgetRecordProvider: o
                                }, S(a.variables.is_loadingVar, !1, this, function() {
                                    return [c.createElement(m, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "margin-top: 4px;"
                                        },
                                        gridProperties: {
                                            classes: "OSInline"
                                        },
                                        style: "animate-pulse w-full currency list-container",
                                        visible: !0,
                                        _idProps: {
                                            service: r,
                                            name: "LoaderContainer4"
                                        },
                                        _widgetRecordProvider: o
                                    }, c.createElement(m, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "background: #e5e7eb; border-radius: 8px; height: 56px;"
                                        },
                                        gridProperties: {
                                            classes: "OSInline"
                                        },
                                        style: "w-full",
                                        visible: !0,
                                        _idProps: {
                                            service: r,
                                            name: "ListItemPlaceholder7"
                                        },
                                        _widgetRecordProvider: o
                                    }))]
                                }, function() {
                                    return [c.createElement(W, {
                                        animateItems: !1,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        mode: 0,
                                        source: a.variables.recommended_currenciesVar,
                                        style: "currency list-container list list-group",
                                        tag: "div",
                                        _idProps: {
                                            service: r,
                                            name: "RecommendedCurrencyList3"
                                        },
                                        _widgetRecordProvider: o,
                                        placeholders: {
                                            content: new ie(function(s, d) {
                                                return [c.createElement(F, {
                                                    extendedProperties: {
                                                        style: "border: 1px solid rgba(0, 0, 0, 0.04);"
                                                    },
                                                    onClick: f(function() {
                                                        var R = typeof d != "undefined" && d !== null ? d.clone() : e.callContext().clone();
                                                        e.onSelectCurrency$Action(a.variables.recommended_currenciesVar.getCurrent(d.iterationContext).codeAttr, e.callContext(R))
                                                    }, "onClick"),
                                                    style: a.getCachedValue(s.getId("CurrencyListItem3.Style"), function() {
                                                        return a.variables.recommended_currenciesVar.getCurrent(d.iterationContext).codeAttr === l.getcurrency() ? "currency list-item item-selected" : "currency list-item"
                                                    }, function() {
                                                        return a.variables.recommended_currenciesVar.getCurrent(d.iterationContext).codeAttr
                                                    }, function() {
                                                        return l.getcurrency()
                                                    }),
                                                    triggerActionOnFullSwipeLeft: !0,
                                                    triggerActionOnFullSwipeRight: !0,
                                                    _idProps: {
                                                        service: s,
                                                        name: "CurrencyListItem3"
                                                    },
                                                    _widgetRecordProvider: o,
                                                    placeholders: {
                                                        leftActions: p.Empty,
                                                        content: new p(function() {
                                                            return [c.createElement(m, {
                                                                align: 0,
                                                                animate: !1,
                                                                extendedProperties: {
                                                                    style: "align-items: center; display: flex;"
                                                                },
                                                                gridProperties: {
                                                                    classes: "OSInline",
                                                                    width: "100%"
                                                                },
                                                                visible: !0,
                                                                _idProps: {
                                                                    service: s,
                                                                    uuid: "9"
                                                                },
                                                                _widgetRecordProvider: o
                                                            }, c.createElement(m, {
                                                                align: 0,
                                                                animate: !1,
                                                                extendedProperties: {
                                                                    style: "height: 24px; margin-right: 16px;"
                                                                },
                                                                gridProperties: {
                                                                    classes: "OSInline",
                                                                    width: "24px"
                                                                },
                                                                visible: !0,
                                                                _idProps: {
                                                                    service: s,
                                                                    uuid: "10"
                                                                },
                                                                _widgetRecordProvider: o
                                                            }, c.createElement(w, {
                                                                extendedProperties: {
                                                                    style: "height: fit-content;"
                                                                },
                                                                gridProperties: {
                                                                    width: "fit-content"
                                                                },
                                                                type: 1,
                                                                url: a.getCachedValue(s.getId("5OMrZFjE90qYCn2KonLRjw.Url"), function() {
                                                                    return "/" + b.getAppName() + "/img/" + b.getAppName() + ".currency" + b.toLower(a.variables.recommended_currenciesVar.getCurrent(d.iterationContext).codeAttr) + ".svg"
                                                                }, function() {
                                                                    return a.variables.recommended_currenciesVar.getCurrent(d.iterationContext).codeAttr
                                                                }),
                                                                _idProps: {
                                                                    service: s,
                                                                    uuid: "11"
                                                                },
                                                                _widgetRecordProvider: o
                                                            })), c.createElement($, {
                                                                gridProperties: {
                                                                    classes: "ThemeGrid_MarginGutter"
                                                                },
                                                                value: a.variables.recommended_currenciesVar.getCurrent(d.iterationContext).labelAttr,
                                                                _idProps: {
                                                                    service: s,
                                                                    uuid: "12"
                                                                },
                                                                _widgetRecordProvider: o
                                                            }), c.createElement(m, {
                                                                align: 0,
                                                                animate: !1,
                                                                extendedProperties: {
                                                                    style: "align-items: center; display: flex; justify-content: center; margin-inline-start: auto;"
                                                                },
                                                                gridProperties: {
                                                                    classes: "OSInline",
                                                                    width: "32px"
                                                                },
                                                                visible: !0,
                                                                _idProps: {
                                                                    service: s,
                                                                    uuid: "13"
                                                                },
                                                                _widgetRecordProvider: o
                                                            }, S(a.variables.recommended_currenciesVar.getCurrent(d.iterationContext).codeAttr === l.getcurrency(), !1, this, function() {
                                                                return [c.createElement(w, {
                                                                    image: N.VersionedURL.getVersionedUrl("img/uae.circlecheck.svg"),
                                                                    type: 0,
                                                                    _idProps: {
                                                                        service: s,
                                                                        uuid: "14"
                                                                    },
                                                                    _widgetRecordProvider: o
                                                                })]
                                                            }, function() {
                                                                return []
                                                            })))]
                                                        }),
                                                        rightActions: p.Empty
                                                    },
                                                    _dependencies: [n(l.getcurrency()), n(a.variables.recommended_currenciesVar.getCurrent(d.iterationContext).labelAttr), n(a.variables.recommended_currenciesVar.getCurrent(d.iterationContext).codeAttr)]
                                                })]
                                            }, u, r, "1")
                                        },
                                        _dependencies: [n(l.getcurrency())]
                                    })]
                                })), c.createElement(m, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "margin-top: 24px; text-align: right;"
                                    },
                                    style: a.getCachedValue(r.getId("ButtonContainer3.Style"), function() {
                                        return O.isDesktop$Action(u).isDesktopOut ? "flex justify-content-flex-end" : "fixed bottom-0 left-0 w-full flex justify-center p-4"
                                    }),
                                    visible: !0,
                                    _idProps: {
                                        service: r,
                                        name: "ButtonContainer3"
                                    },
                                    _widgetRecordProvider: o
                                }, c.createElement(k, {
                                    enabled: a.getCachedValue(r.getId("NextButton5.Enabled"), function() {
                                        return l.getcurrency() !== b.nullTextIdentifier()
                                    }, function() {
                                        return l.getcurrency()
                                    }),
                                    extendedProperties: {
                                        style: "border-radius: 24px;"
                                    },
                                    gridProperties: {
                                        width: "96px"
                                    },
                                    isDefault: !1,
                                    onClick: f(function() {
                                        return Promise.resolve().then(function() {
                                            var s = typeof u != "undefined" && u !== null ? u.clone() : e.callContext().clone();
                                            return e.nextStep$Action(e.callContext(s))
                                        })
                                    }, "onClick"),
                                    style: a.getCachedValue(r.getId("NextButton5.Style"), function() {
                                        return O.isDesktop$Action(u).isDesktopOut ? "btn btn-primary" : "btn btn-primary action-button"
                                    }),
                                    visible: !0,
                                    _idProps: {
                                        service: r,
                                        name: "NextButton5"
                                    },
                                    _widgetRecordProvider: o
                                }, c.createElement(H, {
                                    extendedProperties: {
                                        style: "font-size: 16px; font-weight: bold;"
                                    },
                                    text: [P(g("4KOuecyEgUuqswX7OUbsTQ#Value", "Next"))],
                                    _idProps: {
                                        service: r,
                                        uuid: "17"
                                    },
                                    _widgetRecordProvider: o
                                })))))]
                            }),
                            buttonContainer: p.Empty
                        },
                        _dependencies: [n(l.getcurrency()), n(a.variables.recommended_currenciesVar), n(a.variables.is_loadingVar)]
                    })]
                }, function() {
                    return [c.createElement(x, {
                        getOwnerSpan: f(function() {
                            return A.getChildSpan("render")
                        }, "getOwnerSpan"),
                        getOwnerDisposeSpan: f(function() {
                            return A.getChildSpan("destroy")
                        }, "getOwnerDisposeSpan"),
                        inputs: {
                            SubHeading2: "This will be used for your Wallet and trading account.",
                            BtnCloseVisible: !0,
                            Heading: "Choose your account currency",
                            BtnBackVisible: !0,
                            ShowProgressBar: !0,
                            Progress: 33
                        },
                        events: {
                            _handleError: f(function(s) {
                                e.handleError(s)
                            }, "_handleError")
                        },
                        _validationProps: {
                            validationService: i
                        },
                        _idProps: {
                            service: r,
                            uuid: "18",
                            alias: "3"
                        },
                        _widgetRecordProvider: o,
                        placeholders: {
                            content: new p(function() {
                                return [c.createElement(m, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "margin: 30px 8px; text-align: left;"
                                    },
                                    style: "currency-container ",
                                    visible: !0,
                                    _idProps: {
                                        service: r,
                                        name: "CurrencyListContainer7"
                                    },
                                    _widgetRecordProvider: o
                                }, c.createElement(m, {
                                    align: 0,
                                    animate: !1,
                                    style: "category-container",
                                    visible: !0,
                                    _idProps: {
                                        service: r,
                                        name: "RecommendedCurrenciesContainer4"
                                    },
                                    _widgetRecordProvider: o
                                }, S(a.variables.is_loadingVar, !1, this, function() {
                                    return [c.createElement(m, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "margin-top: 4px;"
                                        },
                                        gridProperties: {
                                            classes: "OSInline"
                                        },
                                        style: "animate-pulse w-full currency list-container",
                                        visible: !0,
                                        _idProps: {
                                            service: r,
                                            name: "LoaderContainer7"
                                        },
                                        _widgetRecordProvider: o
                                    }, c.createElement(m, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "background: #e5e7eb; border-radius: 8px; height: 56px;"
                                        },
                                        gridProperties: {
                                            classes: "OSInline"
                                        },
                                        style: "w-full",
                                        visible: !0,
                                        _idProps: {
                                            service: r,
                                            name: "ListItemPlaceholder16"
                                        },
                                        _widgetRecordProvider: o
                                    }))]
                                }, function() {
                                    return [c.createElement(W, {
                                        animateItems: !1,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        mode: 0,
                                        source: a.variables.recommended_currenciesVar,
                                        style: "currency list-container list list-group",
                                        tag: "div",
                                        _idProps: {
                                            service: r,
                                            name: "RecommendedCurrencyList4"
                                        },
                                        _widgetRecordProvider: o,
                                        placeholders: {
                                            content: new ie(function(s, d) {
                                                return [c.createElement(F, {
                                                    extendedProperties: {
                                                        style: "border: 1px solid rgba(0, 0, 0, 0.04);"
                                                    },
                                                    onClick: f(function() {
                                                        var R = typeof d != "undefined" && d !== null ? d.clone() : e.callContext().clone();
                                                        e.onSelectCurrency$Action(a.variables.recommended_currenciesVar.getCurrent(d.iterationContext).codeAttr, e.callContext(R))
                                                    }, "onClick"),
                                                    style: a.getCachedValue(s.getId("CurrencyListItem4.Style"), function() {
                                                        return a.variables.recommended_currenciesVar.getCurrent(d.iterationContext).codeAttr === l.getcurrency() ? "currency list-item item-selected" : "currency list-item"
                                                    }, function() {
                                                        return a.variables.recommended_currenciesVar.getCurrent(d.iterationContext).codeAttr
                                                    }, function() {
                                                        return l.getcurrency()
                                                    }),
                                                    triggerActionOnFullSwipeLeft: !0,
                                                    triggerActionOnFullSwipeRight: !0,
                                                    _idProps: {
                                                        service: s,
                                                        name: "CurrencyListItem4"
                                                    },
                                                    _widgetRecordProvider: o,
                                                    placeholders: {
                                                        leftActions: p.Empty,
                                                        content: new p(function() {
                                                            return [c.createElement(m, {
                                                                align: 0,
                                                                animate: !1,
                                                                extendedProperties: {
                                                                    style: "align-items: center; display: flex;"
                                                                },
                                                                gridProperties: {
                                                                    classes: "OSInline",
                                                                    width: "100%"
                                                                },
                                                                visible: !0,
                                                                _idProps: {
                                                                    service: s,
                                                                    uuid: "25"
                                                                },
                                                                _widgetRecordProvider: o
                                                            }, c.createElement(m, {
                                                                align: 0,
                                                                animate: !1,
                                                                extendedProperties: {
                                                                    style: "height: 24px; margin-right: 16px;"
                                                                },
                                                                gridProperties: {
                                                                    classes: "OSInline",
                                                                    width: "24px"
                                                                },
                                                                visible: !0,
                                                                _idProps: {
                                                                    service: s,
                                                                    uuid: "26"
                                                                },
                                                                _widgetRecordProvider: o
                                                            }, c.createElement(w, {
                                                                extendedProperties: {
                                                                    style: "height: fit-content;"
                                                                },
                                                                gridProperties: {
                                                                    width: "fit-content"
                                                                },
                                                                type: 1,
                                                                url: a.getCachedValue(s.getId("IssV_1+bjkGIIwEfoPf4Jw.Url"), function() {
                                                                    return "/" + b.getAppName() + "/img/" + b.getAppName() + ".currency" + b.toLower(a.variables.recommended_currenciesVar.getCurrent(d.iterationContext).codeAttr) + ".svg"
                                                                }, function() {
                                                                    return a.variables.recommended_currenciesVar.getCurrent(d.iterationContext).codeAttr
                                                                }),
                                                                _idProps: {
                                                                    service: s,
                                                                    uuid: "27"
                                                                },
                                                                _widgetRecordProvider: o
                                                            })), c.createElement($, {
                                                                gridProperties: {
                                                                    classes: "ThemeGrid_MarginGutter"
                                                                },
                                                                value: a.variables.recommended_currenciesVar.getCurrent(d.iterationContext).labelAttr,
                                                                _idProps: {
                                                                    service: s,
                                                                    uuid: "28"
                                                                },
                                                                _widgetRecordProvider: o
                                                            }), c.createElement(m, {
                                                                align: 0,
                                                                animate: !1,
                                                                extendedProperties: {
                                                                    style: "align-items: center; display: flex; justify-content: center;"
                                                                },
                                                                gridProperties: {
                                                                    classes: "OSInline",
                                                                    width: "32px",
                                                                    marginLeft: "auto"
                                                                },
                                                                visible: !0,
                                                                _idProps: {
                                                                    service: s,
                                                                    uuid: "29"
                                                                },
                                                                _widgetRecordProvider: o
                                                            }, S(a.variables.recommended_currenciesVar.getCurrent(d.iterationContext).codeAttr === l.getcurrency(), !1, this, function() {
                                                                return [c.createElement(w, {
                                                                    image: N.VersionedURL.getVersionedUrl("img/uae.circlecheck.svg"),
                                                                    type: 0,
                                                                    _idProps: {
                                                                        service: s,
                                                                        uuid: "30"
                                                                    },
                                                                    _widgetRecordProvider: o
                                                                })]
                                                            }, function() {
                                                                return []
                                                            })))]
                                                        }),
                                                        rightActions: p.Empty
                                                    },
                                                    _dependencies: [n(l.getcurrency()), n(a.variables.recommended_currenciesVar.getCurrent(d.iterationContext).labelAttr), n(a.variables.recommended_currenciesVar.getCurrent(d.iterationContext).codeAttr)]
                                                })]
                                            }, u, r, "2")
                                        },
                                        _dependencies: [n(l.getcurrency())]
                                    })]
                                })), c.createElement(m, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "margin-top: 24px; padding-bottom: 80px; text-align: right;"
                                    },
                                    style: "fixed bottom-0 left-0 w-full flex justify-center p-4",
                                    visible: !0,
                                    _idProps: {
                                        service: r,
                                        name: "ButtonContainer2"
                                    },
                                    _widgetRecordProvider: o
                                }, c.createElement(k, {
                                    enabled: a.getCachedValue(r.getId("NextButton4.Enabled"), function() {
                                        return l.getcurrency() !== b.nullTextIdentifier()
                                    }, function() {
                                        return l.getcurrency()
                                    }),
                                    extendedProperties: {
                                        style: "border-radius: 24px;"
                                    },
                                    gridProperties: {
                                        width: "96px"
                                    },
                                    isDefault: !1,
                                    onClick: f(function() {
                                        return Promise.resolve().then(function() {
                                            var s = typeof u != "undefined" && u !== null ? u.clone() : e.callContext().clone();
                                            return e.nextStep$Action(e.callContext(s))
                                        })
                                    }, "onClick"),
                                    style: a.getCachedValue(r.getId("NextButton4.Style"), function() {
                                        return O.isDesktop$Action(u).isDesktopOut ? "btn btn-primary" : "btn btn-primary action-button"
                                    }),
                                    visible: !0,
                                    _idProps: {
                                        service: r,
                                        name: "NextButton4"
                                    },
                                    _widgetRecordProvider: o
                                }, c.createElement(H, {
                                    extendedProperties: {
                                        style: "font-size: 16px; font-weight: bold;"
                                    },
                                    text: [P(g("0SsxTlo21kSu3ZPCdtcM+w#Value", "Next"))],
                                    _idProps: {
                                        service: r,
                                        uuid: "33"
                                    },
                                    _widgetRecordProvider: o
                                }))))]
                            }),
                            buttonContainer: p.Empty
                        },
                        _dependencies: [n(l.getcurrency()), n(a.variables.recommended_currenciesVar), n(a.variables.is_loadingVar)]
                    })]
                })]
            }, function() {
                return [c.createElement(x, {
                    getOwnerSpan: f(function() {
                        return A.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: f(function() {
                        return A.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        ShowProgressBar: !0,
                        BtnCloseVisible: !0,
                        Progress: 33,
                        BtnBackVisible: !0,
                        Heading: "Choose your account currency",
                        SubHeading2: "This will be used for your Wallet and trading account."
                    },
                    events: {
                        _handleError: f(function(s) {
                            e.handleError(s)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: i
                    },
                    _idProps: {
                        service: r,
                        uuid: "34",
                        alias: "4"
                    },
                    _widgetRecordProvider: o,
                    placeholders: {
                        content: new p(function() {
                            return [c.createElement(m, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "text-align: start;"
                                },
                                style: "currency-container",
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    name: "CurrencyListContainer3"
                                },
                                _widgetRecordProvider: o
                            }, c.createElement(m, {
                                align: 0,
                                animate: !1,
                                style: "category-container",
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    name: "Currencies"
                                },
                                _widgetRecordProvider: o
                            }, S(a.variables.is_loadingVar, !1, this, function() {
                                return [c.createElement(m, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "margin-top: 4px;"
                                    },
                                    gridProperties: {
                                        classes: "OSInline"
                                    },
                                    style: "animate-pulse w-full currency list-container",
                                    visible: !0,
                                    _idProps: {
                                        service: r,
                                        name: "LoaderContainer3"
                                    },
                                    _widgetRecordProvider: o
                                }, c.createElement(m, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "background: #e5e7eb; border-radius: 8px; height: 56px;"
                                    },
                                    gridProperties: {
                                        classes: "OSInline"
                                    },
                                    style: "w-full",
                                    visible: !0,
                                    _idProps: {
                                        service: r,
                                        name: "ListItemPlaceholder6"
                                    },
                                    _widgetRecordProvider: o
                                }))]
                            }, function() {
                                return [c.createElement(W, {
                                    animateItems: !1,
                                    gridProperties: {
                                        classes: "OSFillParent"
                                    },
                                    mode: 0,
                                    source: a.variables.recommended_currenciesVar,
                                    style: "currency list-container list list-group",
                                    tag: "div",
                                    _idProps: {
                                        service: r,
                                        name: "RecommendedCurrencyList2"
                                    },
                                    _widgetRecordProvider: o,
                                    placeholders: {
                                        content: new ie(function(s, d) {
                                            return [c.createElement(F, {
                                                extendedProperties: {
                                                    style: "border: 1px solid rgba(0, 0, 0, 0.04);"
                                                },
                                                onClick: f(function() {
                                                    var R = typeof d != "undefined" && d !== null ? d.clone() : e.callContext().clone();
                                                    e.onSelectCurrency$Action(a.variables.recommended_currenciesVar.getCurrent(d.iterationContext).codeAttr, e.callContext(R))
                                                }, "onClick"),
                                                style: a.getCachedValue(s.getId("CurrencyListItem2.Style"), function() {
                                                    return a.variables.recommended_currenciesVar.getCurrent(d.iterationContext).codeAttr === l.getcurrency() ? "currency list-item item-selected" : "currency list-item"
                                                }, function() {
                                                    return a.variables.recommended_currenciesVar.getCurrent(d.iterationContext).codeAttr
                                                }, function() {
                                                    return l.getcurrency()
                                                }),
                                                triggerActionOnFullSwipeLeft: !0,
                                                triggerActionOnFullSwipeRight: !0,
                                                _idProps: {
                                                    service: s,
                                                    name: "CurrencyListItem2"
                                                },
                                                _widgetRecordProvider: o,
                                                placeholders: {
                                                    leftActions: p.Empty,
                                                    content: new p(function() {
                                                        return [c.createElement(m, {
                                                            align: 0,
                                                            animate: !1,
                                                            extendedProperties: {
                                                                style: "align-items: center; display: flex;"
                                                            },
                                                            gridProperties: {
                                                                classes: "OSInline",
                                                                width: "100%"
                                                            },
                                                            visible: !0,
                                                            _idProps: {
                                                                service: s,
                                                                uuid: "41"
                                                            },
                                                            _widgetRecordProvider: o
                                                        }, c.createElement(m, {
                                                            align: 0,
                                                            animate: !1,
                                                            extendedProperties: {
                                                                style: "height: 24px; margin-right: 16px;"
                                                            },
                                                            gridProperties: {
                                                                classes: "OSInline",
                                                                width: "24px"
                                                            },
                                                            visible: !0,
                                                            _idProps: {
                                                                service: s,
                                                                uuid: "42"
                                                            },
                                                            _widgetRecordProvider: o
                                                        }, c.createElement(w, {
                                                            extendedProperties: {
                                                                style: "height: fit-content;"
                                                            },
                                                            gridProperties: {
                                                                width: "fit-content"
                                                            },
                                                            type: 1,
                                                            url: a.getCachedValue(s.getId("ZUGi_pfXokite8wRxRsLFw.Url"), function() {
                                                                return "/" + b.getAppName() + "/img/" + b.getAppName() + ".currency" + b.toLower(a.variables.recommended_currenciesVar.getCurrent(d.iterationContext).codeAttr) + ".svg"
                                                            }, function() {
                                                                return a.variables.recommended_currenciesVar.getCurrent(d.iterationContext).codeAttr
                                                            }),
                                                            _idProps: {
                                                                service: s,
                                                                uuid: "43"
                                                            },
                                                            _widgetRecordProvider: o
                                                        })), c.createElement($, {
                                                            gridProperties: {
                                                                classes: "ThemeGrid_MarginGutter"
                                                            },
                                                            value: a.variables.recommended_currenciesVar.getCurrent(d.iterationContext).labelAttr,
                                                            _idProps: {
                                                                service: s,
                                                                uuid: "44"
                                                            },
                                                            _widgetRecordProvider: o
                                                        }), c.createElement(m, {
                                                            align: 0,
                                                            animate: !1,
                                                            extendedProperties: {
                                                                style: "align-items: center; display: flex; justify-content: center; margin-inline-start: auto;"
                                                            },
                                                            gridProperties: {
                                                                classes: "OSInline",
                                                                width: "32px"
                                                            },
                                                            visible: !0,
                                                            _idProps: {
                                                                service: s,
                                                                uuid: "45"
                                                            },
                                                            _widgetRecordProvider: o
                                                        }, S(a.variables.recommended_currenciesVar.getCurrent(d.iterationContext).codeAttr === l.getcurrency(), !1, this, function() {
                                                            return [c.createElement(w, {
                                                                image: N.VersionedURL.getVersionedUrl("img/uae.circlecheck.svg"),
                                                                type: 0,
                                                                _idProps: {
                                                                    service: s,
                                                                    uuid: "46"
                                                                },
                                                                _widgetRecordProvider: o
                                                            })]
                                                        }, function() {
                                                            return []
                                                        })))]
                                                    }),
                                                    rightActions: p.Empty
                                                },
                                                _dependencies: [n(l.getcurrency()), n(a.variables.recommended_currenciesVar.getCurrent(d.iterationContext).labelAttr), n(a.variables.recommended_currenciesVar.getCurrent(d.iterationContext).codeAttr)]
                                            })]
                                        }, u, r, "3")
                                    },
                                    _dependencies: [n(l.getcurrency())]
                                })]
                            })), c.createElement(m, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "margin-top: 24px; text-align: right;"
                                },
                                style: a.getCachedValue(r.getId("ButtonContainer.Style"), function() {
                                    return O.isDesktop$Action(u).isDesktopOut ? "flex justify-content-flex-end" : "fixed bottom-0 left-0 w-full flex justify-center p-4"
                                }),
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    name: "ButtonContainer"
                                },
                                _widgetRecordProvider: o
                            }, c.createElement(k, {
                                enabled: a.getCachedValue(r.getId("NextButton3.Enabled"), function() {
                                    return l.getcurrency() !== b.nullTextIdentifier()
                                }, function() {
                                    return l.getcurrency()
                                }),
                                extendedProperties: {
                                    style: "border-radius: 24px;"
                                },
                                gridProperties: {
                                    width: "96px"
                                },
                                isDefault: !1,
                                onClick: f(function() {
                                    return Promise.resolve().then(function() {
                                        var s = typeof u != "undefined" && u !== null ? u.clone() : e.callContext().clone();
                                        return e.nextStep$Action(e.callContext(s))
                                    })
                                }, "onClick"),
                                style: a.getCachedValue(r.getId("NextButton3.Style"), function() {
                                    return O.isDesktop$Action(u).isDesktopOut ? "btn btn-primary" : "btn btn-primary action-button"
                                }),
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    name: "NextButton3"
                                },
                                _widgetRecordProvider: o
                            }, c.createElement(H, {
                                extendedProperties: {
                                    style: "font-size: 16px; font-weight: bold;"
                                },
                                text: [P(g("JMeDWK2mo0qnbR0j_9lOpA#Value", "Next"))],
                                _idProps: {
                                    service: r,
                                    uuid: "49"
                                },
                                _widgetRecordProvider: o
                            }))))]
                        }),
                        buttonContainer: p.Empty
                    },
                    _dependencies: [n(l.getcurrency()), n(a.variables.recommended_currenciesVar), n(a.variables.is_loadingVar)]
                })]
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: f(function() {
                return {
                    codeFunction: "CurrencySelection_V2",
                    functionKey: "0d563d5e-3ab6-499a-9355-17e63172a3e0",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "V2Flow.CurrencySelection_V2",
            modelFactory: te,
            controllerFactory: Q,
            getTitle: f(function(v) {
                var a = v.model,
                    e = v.controller,
                    r = v.controller.idService,
                    i = e.validationService,
                    u = e.callContext(),
                    n = K,
                    g = q,
                    y = {
                        props: v,
                        validateWidget: f(function(o) {
                            v.validateWidget(v, o)
                        }, "validateWidget")
                    };
                return oe.resolve(ae.TranslationsService).getMessage("Xj1WDbY6mkmTVRfmMXKj4A#TitleExpression.-2098612361.1", "Currency selection | Deriv")
            }, "getTitle")
        });
        return C.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.V2Flow.CurrencySelection_V2.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, C.getJsDependencies = function() {
            return []
        }, C.getBlocks = function() {
            return [X, x]
        }, C
    }, "componentFactory"),
    Se = be();
export {
    Q as controllerModule, te as modelModule, Se as viewModule, Y as webFlowControllerModule
};