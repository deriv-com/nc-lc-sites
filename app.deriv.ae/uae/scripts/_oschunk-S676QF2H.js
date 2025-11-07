import {
    a as Y
} from "./_oschunk-NLNJ5SA5.js";
import {
    a as K
} from "./_oschunk-MELU7BED.js";
import {
    b as Q
} from "./_oschunk-CVQITZ7X.js";
import "./_oschunk-TLJXDQWQ.js";
import "./_oschunk-RVD4FS25.js";
import "./_oschunk-4SYOXZNK.js";
import "./_oschunk-HFW3V2GI.js";
import "./_oschunk-YVFTECWM.js";
import {
    b as J,
    f as y,
    h as q,
    i as X,
    j,
    n as x,
    u as T
} from "./_oschunk-VR5BNL2K.js";
import {
    a as pe,
    g as U,
    m as ce,
    n as ue,
    q as le,
    r as de,
    s as z,
    t as B
} from "./_oschunk-4VHUVDBV.js";
import {
    a as se
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    $ as D,
    Qb as O,
    Sb as h,
    T as k,
    _ as H,
    aa as M,
    j as V,
    nb as N,
    sb as G,
    tb as I,
    ub as l
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as E,
    c as g,
    e as ye,
    m as ae,
    n as oe,
    p as $,
    w as A
} from "./_oschunk-M5BUVJ72.js";
var _e = {
        "FJdXZEb7XE241NvO_hDk_w#Value": "\u0627\u0644\u062A\u0627\u0644\u064A",
        "sK7sy8+8cESfIQ9DHwxkpQ#Value": "\u0627\u062E\u062A\u0631 \u0627\u0644\u0639\u0645\u0644\u0629 \u0627\u0644\u0645\u0641\u0636\u0644\u0629 \u0644\u062F\u064A\u0643.",
        "mOxU2dH0L0qJ2OkhWexIDQ#Value": "\u0627\u0644\u0645\u062D\u0627\u0641\u0638",
        "Oey+LLVYf0GQMjPlTwj4PA#Value": "\u0627\u0644\u062A\u0627\u0644\u064A",
        "xXQXb7+msESUL7K1rvhASA#Value": "\u0627\u062E\u062A\u0631 \u0627\u0644\u0639\u0645\u0644\u0629 \u0627\u0644\u0645\u0641\u0636\u0644\u0629 \u0644\u062F\u064A\u0643.",
        "MGng_oLeTECySTjdXff5sQ#Value": "\u0627\u0644\u0645\u062D\u0627\u0641\u0638",
        "8qXwMN2U7kmxin6O+v3XEA#Value": "\u0627\u0644\u062A\u0627\u0644\u064A",
        "qaE9ahci9Uugx3cFXsGq0g#Value": "\u0627\u062E\u062A\u0631 \u0627\u0644\u0639\u0645\u0644\u0629 \u0627\u0644\u0645\u0641\u0636\u0644\u0629 \u0644\u062F\u064A\u0643.",
        "0mhC+3QFmka_VDTRbQ1f+w#Value": "\u0627\u0644\u0645\u062D\u0627\u0641\u0638",
        "uLYWV0rLz0+6qDgSjBqJRw#Title": "\u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0639\u0645\u0644\u0629 | Deriv",
        "uLYWV0rLz0+6qDgSjBqJRw#TitleExpression.-2098612361.1": "\u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0639\u0645\u0644\u0629 | Deriv"
    },
    fe = {
        "ar-001": {
            translations: _e,
            isRTL: !0
        }
    };

function Z(_, m, c) {
    _.GetConfigAndResults()
}
g(Z, "default");
var e = E; {
    let m = class m extends e.Controller.BaseViewController {
        constructor(t, r, i) {
            super(t, r, i, fe);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get getOnboardingConfig$ServerAction() {
            return this.hasOwnProperty("_getOnboardingConfig$ServerAction") || (this._getOnboardingConfig$ServerAction = function(t, r, i) {
                var o = this.controller;
                return e.Logger.startActiveSpan("GetOnboardingConfig", function(n) {
                    return n && (n.setAttribute("code.function", "GetOnboardingConfig"), n.setAttribute("outsystems.function.key", "86c7c527-d6b4-4110-af68-13e28071a825"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
                        var u = {
                            country: e.DataConversion.ServerDataConverter.to(t, e.DataTypes.DataTypes.Text),
                            authorization: e.DataConversion.ServerDataConverter.to(r, e.DataTypes.DataTypes.Text)
                        };
                        return o.callServerAction("GetOnboardingConfig", "screenservices/uae/OnboardingFlow/CurrencySelectionForWallets/ActionGetOnboardingConfig", "9mxHf9W_0f9gxqO_bFIMsA", u, o.callContext(i), void 0, void 0, !0).then(function(f) {
                            var a = new(o.constructor.getVariableGroupType("uae.OnboardingFlow.CurrencySelectionForWallets$ActionGetOnboardingConfig"));
                            return a.responseOut = e.DataConversion.ServerDataConverter.from(f.Response, D), a
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 0)
            }), this._getOnboardingConfig$ServerAction
        }
        set getOnboardingConfig$ServerAction(t) {
            this._getOnboardingConfig$ServerAction = t
        }
        get getClientProfile$ServerAction() {
            return this.hasOwnProperty("_getClientProfile$ServerAction") || (this._getClientProfile$ServerAction = function(t, r) {
                var i = this.controller;
                return e.Logger.startActiveSpan("GetClientProfile", function(o) {
                    return o && (o.setAttribute("code.function", "GetClientProfile"), o.setAttribute("outsystems.function.key", "5ded5548-621f-4be6-bb2a-1e7a68f5c035"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
                        var n = {
                            authorization: e.DataConversion.ServerDataConverter.to(t, e.DataTypes.DataTypes.Text)
                        };
                        return i.callServerAction("GetClientProfile", "screenservices/uae/OnboardingFlow/CurrencySelectionForWallets/ActionGetClientProfile", "XyCUwmGl8eh0OBf6WziXgw", n, i.callContext(r), void 0, void 0, !0).then(function(u) {
                            var f = new(i.constructor.getVariableGroupType("uae.OnboardingFlow.CurrencySelectionForWallets$ActionGetClientProfile"));
                            return f.responseOut = e.DataConversion.ServerDataConverter.from(u.Response, I), f
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 0)
            }), this._getClientProfile$ServerAction
        }
        set getClientProfile$ServerAction(t) {
            this._getClientProfile$ServerAction = t
        }
        get postWallets$ServerAction() {
            return this.hasOwnProperty("_postWallets$ServerAction") || (this._postWallets$ServerAction = function(t, r, i) {
                var o = this.controller;
                return e.Logger.startActiveSpan("PostWallets", function(n) {
                    return n && (n.setAttribute("code.function", "PostWallets"), n.setAttribute("outsystems.function.key", "5845eb09-25fe-4708-b6d5-4db07ff0e39a"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
                        var u = {
                            authorization: e.DataConversion.ServerDataConverter.to(t, e.DataTypes.DataTypes.Text),
                            Request: e.DataConversion.ServerDataConverter.to(r, e.DataTypes.DataTypes.Record)
                        };
                        return o.callServerAction("PostWallets", "screenservices/uae/OnboardingFlow/CurrencySelectionForWallets/ActionPostWallets", "TKNVFu+4FInQfxWXdmw8Uw", u, o.callContext(i), void 0, void 0, !0).then(function(f) {
                            var a = new(o.constructor.getVariableGroupType("uae.OnboardingFlow.CurrencySelectionForWallets$ActionPostWallets"));
                            return a.responseOut = e.DataConversion.ServerDataConverter.from(f.Response, N), a
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 0)
            }), this._postWallets$ServerAction
        }
        set postWallets$ServerAction(t) {
            this._postWallets$ServerAction = t
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(t) {
                var r = this.model,
                    i = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("OnReady", function(n) {
                    return n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "0ccc527a-ac65-4f90-9e25-4642d44752d1"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        i.ensureControllerAlive("OnReady"), t = i.callContext(t);
                        var u = new e.DataTypes.VariableHolder,
                            f = new e.DataTypes.VariableHolder,
                            a = new e.DataTypes.VariableHolder,
                            C = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                            S = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                            b = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(e.GenericTypeCache.getGenericList(H))));
                        return e.Flow.executeAsyncFlow(function() {
                            return e.Flow.executeSequence(function() {
                                if (l.getonboarding_config_data() !== e.BuiltinFunctions.nullTextIdentifier()) r.variables.is_loadingVar = !0, b.value.dataOut = e.JSONUtils.deserializeFromJSON(l.getonboarding_config_data(), e.GenericTypeCache.getGenericList(H), !1), r.variables.other_currenciesVar = b.value.dataOut.getCurrent(t.iterationContext).currency_selectionAttr.otherAttr, r.variables.recommended_currenciesVar = b.value.dataOut.getCurrent(t.iterationContext).currency_selectionAttr.recommendedAttr, S.value.jSONOut = e.JSONUtils.serializeToJSON(b.value.dataOut.getCurrent(t.iterationContext).main_goalAttr, !1, !1), C.value.jSONOut = e.JSONUtils.serializeToJSON(b.value.dataOut.getCurrent(t.iterationContext).employment_statusAttr, !1, !1), l.setmain_goal_list(S.value.jSONOut), l.setemployment_status_list(C.value.jSONOut), e.SystemActions.listAppendAll(r.variables.recommended_currenciesVar, r.variables.other_currenciesVar, t), r.variables.is_loadingVar = !1;
                                else return a.value = h.getAuth$Action(t), r.variables.is_loadingVar = !0, r.flush(), i.getClientProfile$ServerAction(a.value.tokenOut, t).then(function(d) {
                                    f.value = d
                                }).then(function() {
                                    return r.flush(), i.getOnboardingConfig$ServerAction(f.value.responseOut.dataAttr.getCurrent(t.iterationContext).residence_countryAttr !== "" ? f.value.responseOut.dataAttr.getCurrent(t.iterationContext).residence_countryAttr : l.getresidence(), a.value.tokenOut, t).then(function(d) {
                                        u.value = d
                                    })
                                }).then(function() {
                                    r.variables.other_currenciesVar = u.value.responseOut.dataAttr.getItem(0).currency_selectionAttr.otherAttr, r.variables.recommended_currenciesVar = u.value.responseOut.dataAttr.getItem(0).currency_selectionAttr.recommendedAttr, e.SystemActions.listAppendAll(r.variables.recommended_currenciesVar, r.variables.other_currenciesVar, t), r.variables.is_loadingVar = !1
                                })
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(t) {
            this.__onReady$Action = t
        }
        get _onSelectCurrency$Action() {
            return this.hasOwnProperty("__onSelectCurrency$Action") || (this.__onSelectCurrency$Action = function(t, r) {
                var i = this.model,
                    o = this.controller,
                    n = this.idService;
                return e.Logger.startActiveSpan("OnSelectCurrency", function(u) {
                    u && (u.setAttribute("code.function", "OnSelectCurrency"), u.setAttribute("outsystems.function.key", "1f6eb04b-adad-47a7-bc12-8b38d6c25621"), u.setAttribute("outsystems.function.owner.name", "uae"), u.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("OnSelectCurrency"), r = o.callContext(r);
                        var f = new e.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("uae.OnboardingFlow.CurrencySelectionForWallets.OnSelectCurrency$vars")));
                        f.value.currencyInLocal = t;
                        var a = new e.DataTypes.VariableHolder;
                        a.value = h.getAuth$Action(r), l.setcurrency(f.value.currencyInLocal), i.variables.post_wallet_requestVar.currencyAttr = f.value.currencyInLocal, i.variables.post_wallet_requestVar.counterpartyAttr = "dsvg"
                    } finally {
                        u && u.end()
                    }
                }, 1)
            }), this.__onSelectCurrency$Action
        }
        set _onSelectCurrency$Action(t) {
            this.__onSelectCurrency$Action = t
        }
        get _nextStep$Action() {
            return this.hasOwnProperty("__nextStep$Action") || (this.__nextStep$Action = function(t) {
                var r = this.model,
                    i = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("NextStep", function(n) {
                    return n && (n.setAttribute("code.function", "NextStep"), n.setAttribute("outsystems.function.key", "77549f94-3d0d-416d-902a-973dc20102ed"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        i.ensureControllerAlive("NextStep"), t = i.callContext(t);
                        var u = new e.DataTypes.VariableHolder,
                            f = new e.DataTypes.VariableHolder;
                        return e.Flow.executeAsyncFlow(function() {
                            return e.Flow.executeSequence(function() {
                                return r.variables.is_tnc_acceptedVar && l.getenableMobileOnboarding() ? (f.value = h.getAuth$Action(t), r.variables.post_wallet_requestVar.currencyAttr = l.getcurrency(), r.flush(), i.postWallets$ServerAction(f.value.tokenOut, r.variables.post_wallet_requestVar, t).then(function(a) {
                                    u.value = a
                                }).then(function() {
                                    h.updateWalletListCache$Action(u.value.responseOut.dataAttr, t)
                                }).then(function() {
                                    if (!(!u.value.responseOut.errorsAttr.isEmpty && u.value.responseOut.errorsAttr.getCurrent(t.iterationContext).codeAttr !== e.BuiltinFunctions.nullTextIdentifier())) return r.variables.is_loadingVar = !1, h.clearOnboardingFromStore$Action(!1, t), r.variables.onboardingstatusVar.trading_assessmentAttr.isSuitableAttr === !1 && r.variables.onboardingstatusVar.trading_assessmentAttr.riskAcceptanceAttr !== "accepted" ? e.Flow.returnAsync(e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "suitability-test-warning", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.None), t, !0)) : e.Flow.returnAsync(e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "wallet-activated", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), t, !0))
                                })) : O.isDesktop$Action(t).isDesktopOut ? (l.setshould_skip_currency_selection(!0), e.Flow.returnAsync(e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "personal-details", {
                                    ShouldSkipCurrencySelector: e.DataConversion.ServerDataConverter.to(!0, e.DataTypes.DataTypes.Boolean)
                                }), e.Transitions.createTransition(e.Transitions.TransitionAnimation.None), t, !0))) : e.Flow.returnAsync(e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "user-name", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.None), t, !0))
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__nextStep$Action
        }
        set _nextStep$Action(t) {
            this.__nextStep$Action = t
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(t) {
                var r = this.model,
                    i = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("OnInitialize", function(n) {
                    n && (n.setAttribute("code.function", "OnInitialize"), n.setAttribute("outsystems.function.key", "e8be0e4c-6cef-4ded-9346-71adc970a057"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("OnInitialize"), t = i.callContext(t);
                        var u = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(G)));
                        if (l.getenableMobileOnboarding() && e.Logger.startActiveSpan("JavaScript2", function(f) {
                                f && (f.setAttribute("code.function", "JavaScript2"), f.setAttribute("outsystems.function.key", "6ec0b719-5d20-4ffc-9089-d90ef8901554"), f.setAttribute("outsystems.function.owner.name", "uae"), f.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), f.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return i.safeExecuteJSNode(Z, "JavaScript2", "OnInitialize", null, function(a) {}, {
                                        GetConfigAndResults: h.clientActionProxies.getConfigAndResults$Action
                                    }, {})
                                } finally {
                                    f && f.end()
                                }
                            }, 1), u.value.dataOut = e.JSONUtils.deserializeFromJSON(l.getonboardingstatus(), G, !1), l.setRealSignupCurrentStep(1), r.variables.is_tnc_acceptedVar = u.value.dataOut.dataAttr.getCurrent(t.iterationContext).tncAttr.acceptedAttr === !0 && u.value.dataOut.dataAttr.getCurrent(t.iterationContext).walletAttr.createdAttr === !1, r.variables.onboardingstatusVar = u.value.dataOut.dataAttr.getCurrent(t.iterationContext), l.getenableMobileOnboarding() && (h.consoleLog$Action("cccc" + r.variables.onboardingstatusVar.profileAttr.statusAttr == "complete" ? "True" : "False", t), l.setshould_skip_currency_selection(!0), r.variables.onboardingstatusVar.walletAttr.createdAttr)) return r.variables.onboardingstatusVar.profileAttr.statusAttr === "complete" ? r.variables.onboardingstatusVar.addressAttr.statusAttr === "complete" ? r.variables.onboardingstatusVar.financial_assessmentAttr.statusAttr === "complete" ? r.variables.onboardingstatusVar.trading_assessmentAttr.statusAttr === "complete" ? r.variables.onboardingstatusVar.tncAttr.acceptedAttr ? r.variables.onboardingstatusVar.trading_assessmentAttr.isSuitableAttr === !1 && r.variables.onboardingstatusVar.trading_assessmentAttr.riskAcceptanceAttr === "accepted" && !r.variables.onboardingstatusVar.walletAttr.createdAttr ? r.variables.onboardingstatusVar.kycAttr.main_statusAttr === "verified" ? e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "wallet", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), t, !0) : r.variables.onboardingstatusVar.kycAttr.poi_statusAttr === "verified" ? (l.setkyc_flow_from("banner_add_funds"), e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "verify-poa", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), t, !0)) : e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "verify-your-identity", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), t, !0) : e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "suitability-test-warning", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), t, !0) : e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "terms-and-condition", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), t, !0) : e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "suitability-assessment", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), t, !0) : e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "employment-status", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.None), t, !0) : e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "address-details", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), t, !0) : O.isDesktop$Action(t).isDesktopOut ? (l.setshould_skip_currency_selection(!0), e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "personal-details", {
                            ShouldSkipCurrencySelector: e.DataConversion.ServerDataConverter.to(!0, e.DataTypes.DataTypes.Boolean)
                        }), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), t, !0)) : e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "user-name", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), t, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(t) {
            this.__onInitialize$Action = t
        }
        onReady$Action(t) {
            var r = this.controller;
            return e.Logger.startActiveSpan("OnReady__proxy", function(i) {
                return i && (i.setAttribute("code.function", "OnReady"), i.setAttribute("outsystems.function.key", "0ccc527a-ac65-4f90-9e25-4642d44752d1"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onReady$Action, t)
                }, function() {
                    i && i.end()
                })
            }, 0)
        }
        onSelectCurrency$Action(t, r) {
            var i = this.controller;
            return e.Logger.startActiveSpan("OnSelectCurrency__proxy", function(o) {
                o && (o.setAttribute("code.function", "OnSelectCurrency"), o.setAttribute("outsystems.function.key", "1f6eb04b-adad-47a7-bc12-8b38d6c25621"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onSelectCurrency$Action, r, t)
                } finally {
                    o && o.end()
                }
            }, 0)
        }
        nextStep$Action(t) {
            var r = this.controller;
            return e.Logger.startActiveSpan("NextStep__proxy", function(i) {
                return i && (i.setAttribute("code.function", "NextStep"), i.setAttribute("outsystems.function.key", "77549f94-3d0d-416d-902a-973dc20102ed"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._nextStep$Action, t)
                }, function() {
                    i && i.end()
                })
            }, 0)
        }
        onInitialize$Action(t) {
            var r = this.controller;
            return e.Logger.startActiveSpan("OnInitialize__proxy", function(i) {
                i && (i.setAttribute("code.function", "OnInitialize"), i.setAttribute("outsystems.function.key", "e8be0e4c-6cef-4ded-9346-71adc970a057"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onInitialize$Action, t)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(t) {
                var r = this.controller,
                    i = this.model,
                    o = this.idService;
                return r.onInitialize$Action(t)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(t) {
            this._onInitializeEventHandler = t
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(t) {
                var r = this.controller,
                    i = this.model,
                    o = this.idService;
                return r.onReady$Action(t)
            }), this._onReadyEventHandler
        }
        set onReadyEventHandler(t) {
            this._onReadyEventHandler = t
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(t) {
            this._onRenderEventHandler = t
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = null), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(t) {
            this._onDestroyEventHandler = t
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(t) {
            this._onParametersChangedEventHandler = t
        }
        get onSyncStartEventHandler() {
            return this.hasOwnProperty("_onSyncStartEventHandler") || (this._onSyncStartEventHandler = null), this._onSyncStartEventHandler
        }
        set onSyncStartEventHandler(t) {
            this._onSyncStartEventHandler = t
        }
        get onSyncCompleteEventHandler() {
            return this.hasOwnProperty("_onSyncCompleteEventHandler") || (this._onSyncCompleteEventHandler = null), this._onSyncCompleteEventHandler
        }
        set onSyncCompleteEventHandler(t) {
            this._onSyncCompleteEventHandler = t
        }
        get onSyncErrorEventHandler() {
            return this.hasOwnProperty("_onSyncErrorEventHandler") || (this._onSyncErrorEventHandler = null), this._onSyncErrorEventHandler
        }
        set onSyncErrorEventHandler(t) {
            this._onSyncErrorEventHandler = t
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(t) {
                return Y.default.handleError(t, this.callContext())
            }), this._handleError
        }
        set handleError(t) {
            this._handleError = t
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return h.defaultTimeout
        }
    };
    g(m, "ControllerInner");
    let _ = m;
    P = _, P.registerVariableGroupType("uae.OnboardingFlow.CurrencySelectionForWallets$ActionGetOnboardingConfig", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: e.DataTypes.DataTypes.Record,
        defaultValue: g(function() {
            return new D
        }, "defaultValue"),
        complexType: D
    }]), P.registerVariableGroupType("uae.OnboardingFlow.CurrencySelectionForWallets$ActionGetClientProfile", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: e.DataTypes.DataTypes.Record,
        defaultValue: g(function() {
            return new I
        }, "defaultValue"),
        complexType: I
    }]), P.registerVariableGroupType("uae.OnboardingFlow.CurrencySelectionForWallets$ActionPostWallets", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: e.DataTypes.DataTypes.Record,
        defaultValue: g(function() {
            return new N
        }, "defaultValue"),
        complexType: N
    }]), P.registerVariableGroupType("uae.OnboardingFlow.CurrencySelectionForWallets.OnSelectCurrency$vars", [{
        name: "currency",
        attrName: "currencyInLocal",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: g(function() {
            return ""
        }, "defaultValue")
    }])
}
var P, ee = new e.Controller.ControllerFactory(P, se);
var s = ye(pe());
var p = E,
    ne = class ne extends p.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("is_loading", "is_loadingVar", "is_loading", !0, !1, p.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("other_currencies", "other_currenciesVar", "other_currencies", !0, !1, p.DataTypes.DataTypes.RecordList, function() {
                return p.DataTypes.ImmutableBase.getData(new(p.GenericTypeCache.getGenericList(V)))
            }, !1, p.GenericTypeCache.getGenericList(V)), this.attr("recommended_currencies", "recommended_currenciesVar", "recommended_currencies", !0, !1, p.DataTypes.DataTypes.RecordList, function() {
                return p.DataTypes.ImmutableBase.getData(new(p.GenericTypeCache.getGenericList(V)))
            }, !1, p.GenericTypeCache.getGenericList(V)), this.attr("post_wallet_request", "post_wallet_requestVar", "post_wallet_request", !0, !1, p.DataTypes.DataTypes.Record, function() {
                return p.DataTypes.ImmutableBase.getData(new M)
            }, !1, M), this.attr("is_tnc_accepted", "is_tnc_acceptedVar", "is_tnc_accepted", !0, !1, p.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("onboardingstatus", "onboardingstatusVar", "onboardingstatus", !0, !1, p.DataTypes.DataTypes.Record, function() {
                return p.DataTypes.ImmutableBase.getData(new k)
            }, !1, k)].concat(p.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
g(ne, "VariablesRecord");
var L = ne;
L.init();
var ie = class ie extends p.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
g(ie, "WidgetsRecord");
var te = ie,
    R = class R extends p.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return L
        }
        static getWidgetsRecordConstructor() {
            return te
        }
        static get hasValidationWidgets() {
            return R._hasValidationWidgetsValue === void 0 && (R._hasValidationWidgetsValue = void 0 || void 0), R._hasValidationWidgetsValue
        }
        setInputs(m) {}
    };
g(R, "Model");
var F = R;
F._hasValidationWidgetsValue = void 0;
var re = new p.Model.ModelFactory(F);
var w = U.PlaceholderContent,
    me = U.IteratorPlaceholderContent,
    Ae = g(function() {
        var _ = ue(function(m) {
            var c = m.model,
                t = m.controller,
                r = m.controller.idService,
                i = t.validationService,
                o = t.callContext(),
                n = z,
                u = B,
                f = {
                    props: m,
                    validateWidget: g(function(d) {
                        m.validateWidget(m, d)
                    }, "validateWidget")
                },
                a = c,
                C = de,
                S = le,
                b = ce();
            return s.createElement("div", m.rootNodeProperties, C(O.isDesktop$Action(o).isDesktopOut, !1, this, function() {
                return [s.createElement(Q, {
                    getOwnerSpan: g(function() {
                        return b.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: g(function() {
                        return b.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        MenuRef: "wallets"
                    },
                    events: {
                        _handleError: g(function(d) {
                            t.handleError(d)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: i
                    },
                    _idProps: {
                        service: r,
                        uuid: "0",
                        alias: "1"
                    },
                    _widgetRecordProvider: a,
                    placeholders: {
                        content: new w(function() {
                            return [s.createElement(y, {
                                align: 0,
                                animate: !1,
                                style: "display-flex justify-content-center",
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    name: "BodyContainer"
                                },
                                _widgetRecordProvider: a
                            }, s.createElement(y, {
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
                                _widgetRecordProvider: a
                            }, s.createElement(y, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "font-size: 24px; font-style: normal; font-weight: 900; line-height: normal; margin-bottom: 0px;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    name: "PageHeading3"
                                },
                                _widgetRecordProvider: a
                            }, s.createElement(T, {
                                extendedProperties: {
                                    style: "font-weight: 900;"
                                },
                                text: [S(u("MGng_oLeTECySTjdXff5sQ#Value", "Wallets"))],
                                _idProps: {
                                    service: r,
                                    uuid: "4"
                                },
                                _widgetRecordProvider: a
                            })), s.createElement(y, {
                                align: 0,
                                animate: !1,
                                style: "category-container",
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    name: "Currencies"
                                },
                                _widgetRecordProvider: a
                            }, s.createElement(T, {
                                extendedProperties: {
                                    style: "color: rgba(0, 0, 0, 0.96); font-size: 16px; font-weight: 400; line-height: 24px;"
                                },
                                text: [S(u("xXQXb7+msESUL7K1rvhASA#Value", "Select your preferred currency."))],
                                _idProps: {
                                    service: r,
                                    uuid: "6"
                                },
                                _widgetRecordProvider: a
                            }), C(c.variables.is_loadingVar, !1, this, function() {
                                return [s.createElement(y, {
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
                                    _widgetRecordProvider: a
                                }, s.createElement(y, {
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
                                    _widgetRecordProvider: a
                                }))]
                            }, function() {
                                return [s.createElement(X, {
                                    animateItems: !1,
                                    gridProperties: {
                                        classes: "OSFillParent"
                                    },
                                    mode: 0,
                                    source: c.variables.recommended_currenciesVar,
                                    style: "currency list-container list list-group",
                                    tag: "div",
                                    _idProps: {
                                        service: r,
                                        name: "RecommendedCurrencyList2"
                                    },
                                    _widgetRecordProvider: a,
                                    placeholders: {
                                        content: new me(function(d, v) {
                                            return [s.createElement(j, {
                                                extendedProperties: {
                                                    style: "border: 1px solid rgba(0, 0, 0, 0.04);"
                                                },
                                                onClick: g(function() {
                                                    var W = typeof v != "undefined" && v !== null ? v.clone() : t.callContext().clone();
                                                    t.onSelectCurrency$Action(c.variables.recommended_currenciesVar.getCurrent(v.iterationContext).codeAttr, t.callContext(W))
                                                }, "onClick"),
                                                style: c.getCachedValue(d.getId("CurrencyListItem2.Style"), function() {
                                                    return c.variables.recommended_currenciesVar.getCurrent(v.iterationContext).codeAttr === l.getcurrency() ? "currency list-item item-selected" : "currency list-item"
                                                }, function() {
                                                    return c.variables.recommended_currenciesVar.getCurrent(v.iterationContext).codeAttr
                                                }, function() {
                                                    return l.getcurrency()
                                                }),
                                                triggerActionOnFullSwipeLeft: !0,
                                                triggerActionOnFullSwipeRight: !0,
                                                _idProps: {
                                                    service: d,
                                                    name: "CurrencyListItem2"
                                                },
                                                _widgetRecordProvider: a,
                                                placeholders: {
                                                    leftActions: w.Empty,
                                                    content: new w(function() {
                                                        return [s.createElement(y, {
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
                                                                service: d,
                                                                uuid: "11"
                                                            },
                                                            _widgetRecordProvider: a
                                                        }, s.createElement(y, {
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
                                                                service: d,
                                                                uuid: "12"
                                                            },
                                                            _widgetRecordProvider: a
                                                        }, s.createElement(x, {
                                                            extendedProperties: {
                                                                style: "height: fit-content;"
                                                            },
                                                            gridProperties: {
                                                                width: "fit-content"
                                                            },
                                                            type: 1,
                                                            url: c.getCachedValue(d.getId("d+X6ReJllUemXXyN_HEZsA.Url"), function() {
                                                                return "/" + A.getAppName() + "/img/" + A.getAppName() + ".currency" + A.toLower(c.variables.recommended_currenciesVar.getCurrent(v.iterationContext).codeAttr) + ".svg"
                                                            }, function() {
                                                                return c.variables.recommended_currenciesVar.getCurrent(v.iterationContext).codeAttr
                                                            }),
                                                            _idProps: {
                                                                service: d,
                                                                uuid: "13"
                                                            },
                                                            _widgetRecordProvider: a
                                                        })), s.createElement(q, {
                                                            gridProperties: {
                                                                classes: "ThemeGrid_MarginGutter"
                                                            },
                                                            value: c.variables.recommended_currenciesVar.getCurrent(v.iterationContext).labelAttr,
                                                            _idProps: {
                                                                service: d,
                                                                uuid: "14"
                                                            },
                                                            _widgetRecordProvider: a
                                                        }), s.createElement(y, {
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
                                                                service: d,
                                                                uuid: "15"
                                                            },
                                                            _widgetRecordProvider: a
                                                        }, C(c.variables.recommended_currenciesVar.getCurrent(v.iterationContext).codeAttr === l.getcurrency(), !1, this, function() {
                                                            return [s.createElement(x, {
                                                                image: $.VersionedURL.getVersionedUrl("img/uae.circlecheck.svg"),
                                                                type: 0,
                                                                _idProps: {
                                                                    service: d,
                                                                    uuid: "16"
                                                                },
                                                                _widgetRecordProvider: a
                                                            })]
                                                        }, function() {
                                                            return []
                                                        })))]
                                                    }),
                                                    rightActions: w.Empty
                                                },
                                                _dependencies: [n(l.getcurrency()), n(c.variables.recommended_currenciesVar.getCurrent(v.iterationContext).labelAttr), n(c.variables.recommended_currenciesVar.getCurrent(v.iterationContext).codeAttr)]
                                            })]
                                        }, o, r, "1")
                                    },
                                    _dependencies: [n(l.getcurrency())]
                                })]
                            })), s.createElement(y, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "margin-top: 24px; text-align: right;"
                                },
                                style: c.getCachedValue(r.getId("ButtonContainer.Style"), function() {
                                    return O.isDesktop$Action(o).isDesktopOut ? "flex justify-content-flex-end" : "fixed bottom-0 left-0 w-full flex justify-center p-4"
                                }),
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    name: "ButtonContainer"
                                },
                                _widgetRecordProvider: a
                            }, s.createElement(J, {
                                enabled: c.getCachedValue(r.getId("NextButton3.Enabled"), function() {
                                    return l.getcurrency() !== A.nullTextIdentifier()
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
                                onClick: g(function() {
                                    return Promise.resolve().then(function() {
                                        var d = typeof o != "undefined" && o !== null ? o.clone() : t.callContext().clone();
                                        return t.nextStep$Action(t.callContext(d))
                                    })
                                }, "onClick"),
                                style: c.getCachedValue(r.getId("NextButton3.Style"), function() {
                                    return O.isDesktop$Action(o).isDesktopOut ? "btn btn-primary" : "btn btn-primary action-button"
                                }),
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    name: "NextButton3"
                                },
                                _widgetRecordProvider: a
                            }, s.createElement(T, {
                                extendedProperties: {
                                    style: "font-size: 16px; font-weight: bold;"
                                },
                                text: [S(u("Oey+LLVYf0GQMjPlTwj4PA#Value", "Next"))],
                                _idProps: {
                                    service: r,
                                    uuid: "19"
                                },
                                _widgetRecordProvider: a
                            })))))]
                        })
                    },
                    _dependencies: [n(l.getcurrency()), n(c.variables.recommended_currenciesVar), n(c.variables.is_loadingVar)]
                })]
            }, function() {
                return [s.createElement(K, {
                    getOwnerSpan: g(function() {
                        return b.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: g(function() {
                        return b.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        active_nav: "wallets"
                    },
                    events: {
                        _handleError: g(function(d) {
                            t.handleError(d)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: i
                    },
                    _idProps: {
                        service: r,
                        uuid: "20",
                        alias: "2"
                    },
                    _widgetRecordProvider: a,
                    placeholders: {
                        content: new w(function() {
                            return [s.createElement(y, {
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
                                _widgetRecordProvider: a
                            }, s.createElement(y, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "font-size: 24px; font-style: normal; font-weight: 900; line-height: normal; margin-bottom: 0px;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    name: "PageHeading4"
                                },
                                _widgetRecordProvider: a
                            }, s.createElement(T, {
                                extendedProperties: {
                                    style: "font-weight: 900;"
                                },
                                text: [S(u("mOxU2dH0L0qJ2OkhWexIDQ#Value", "Wallets"))],
                                _idProps: {
                                    service: r,
                                    uuid: "23"
                                },
                                _widgetRecordProvider: a
                            })), s.createElement(y, {
                                align: 0,
                                animate: !1,
                                style: "category-container",
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    name: "RecommendedCurrenciesContainer4"
                                },
                                _widgetRecordProvider: a
                            }, s.createElement(T, {
                                extendedProperties: {
                                    style: "color: rgba(0, 0, 0, 0.96); font-size: 16px; font-weight: 400; line-height: 24px;"
                                },
                                text: [S(u("sK7sy8+8cESfIQ9DHwxkpQ#Value", "Select your preferred currency."))],
                                _idProps: {
                                    service: r,
                                    uuid: "25"
                                },
                                _widgetRecordProvider: a
                            }), C(c.variables.is_loadingVar, !1, this, function() {
                                return [s.createElement(y, {
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
                                    _widgetRecordProvider: a
                                }, s.createElement(y, {
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
                                    _widgetRecordProvider: a
                                }))]
                            }, function() {
                                return [s.createElement(X, {
                                    animateItems: !1,
                                    gridProperties: {
                                        classes: "OSFillParent"
                                    },
                                    mode: 0,
                                    source: c.variables.recommended_currenciesVar,
                                    style: "currency list-container list list-group",
                                    tag: "div",
                                    _idProps: {
                                        service: r,
                                        name: "RecommendedCurrencyList4"
                                    },
                                    _widgetRecordProvider: a,
                                    placeholders: {
                                        content: new me(function(d, v) {
                                            return [s.createElement(j, {
                                                extendedProperties: {
                                                    style: "border: 1px solid rgba(0, 0, 0, 0.04);"
                                                },
                                                onClick: g(function() {
                                                    var W = typeof v != "undefined" && v !== null ? v.clone() : t.callContext().clone();
                                                    t.onSelectCurrency$Action(c.variables.recommended_currenciesVar.getCurrent(v.iterationContext).codeAttr, t.callContext(W))
                                                }, "onClick"),
                                                style: c.getCachedValue(d.getId("CurrencyListItem4.Style"), function() {
                                                    return c.variables.recommended_currenciesVar.getCurrent(v.iterationContext).codeAttr === l.getcurrency() ? "currency list-item item-selected" : "currency list-item"
                                                }, function() {
                                                    return c.variables.recommended_currenciesVar.getCurrent(v.iterationContext).codeAttr
                                                }, function() {
                                                    return l.getcurrency()
                                                }),
                                                triggerActionOnFullSwipeLeft: !0,
                                                triggerActionOnFullSwipeRight: !0,
                                                _idProps: {
                                                    service: d,
                                                    name: "CurrencyListItem4"
                                                },
                                                _widgetRecordProvider: a,
                                                placeholders: {
                                                    leftActions: w.Empty,
                                                    content: new w(function() {
                                                        return [s.createElement(y, {
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
                                                                service: d,
                                                                uuid: "30"
                                                            },
                                                            _widgetRecordProvider: a
                                                        }, s.createElement(y, {
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
                                                                service: d,
                                                                uuid: "31"
                                                            },
                                                            _widgetRecordProvider: a
                                                        }, s.createElement(x, {
                                                            extendedProperties: {
                                                                style: "height: fit-content;"
                                                            },
                                                            gridProperties: {
                                                                width: "fit-content"
                                                            },
                                                            type: 1,
                                                            url: c.getCachedValue(d.getId("GgIzpuCHakGhVeQD+UkrSQ.Url"), function() {
                                                                return "/" + A.getAppName() + "/img/" + A.getAppName() + ".currency" + A.toLower(c.variables.recommended_currenciesVar.getCurrent(v.iterationContext).codeAttr) + ".svg"
                                                            }, function() {
                                                                return c.variables.recommended_currenciesVar.getCurrent(v.iterationContext).codeAttr
                                                            }),
                                                            _idProps: {
                                                                service: d,
                                                                uuid: "32"
                                                            },
                                                            _widgetRecordProvider: a
                                                        })), s.createElement(q, {
                                                            gridProperties: {
                                                                classes: "ThemeGrid_MarginGutter"
                                                            },
                                                            value: c.variables.recommended_currenciesVar.getCurrent(v.iterationContext).labelAttr,
                                                            _idProps: {
                                                                service: d,
                                                                uuid: "33"
                                                            },
                                                            _widgetRecordProvider: a
                                                        }), s.createElement(y, {
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
                                                                service: d,
                                                                uuid: "34"
                                                            },
                                                            _widgetRecordProvider: a
                                                        }, C(c.variables.recommended_currenciesVar.getCurrent(v.iterationContext).codeAttr === l.getcurrency(), !1, this, function() {
                                                            return [s.createElement(x, {
                                                                image: $.VersionedURL.getVersionedUrl("img/uae.circlecheck.svg"),
                                                                type: 0,
                                                                _idProps: {
                                                                    service: d,
                                                                    uuid: "35"
                                                                },
                                                                _widgetRecordProvider: a
                                                            })]
                                                        }, function() {
                                                            return []
                                                        })))]
                                                    }),
                                                    rightActions: w.Empty
                                                },
                                                _dependencies: [n(l.getcurrency()), n(c.variables.recommended_currenciesVar.getCurrent(v.iterationContext).labelAttr), n(c.variables.recommended_currenciesVar.getCurrent(v.iterationContext).codeAttr)]
                                            })]
                                        }, o, r, "2")
                                    },
                                    _dependencies: [n(l.getcurrency())]
                                })]
                            })), s.createElement(y, {
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
                                _widgetRecordProvider: a
                            }, s.createElement(J, {
                                enabled: c.getCachedValue(r.getId("NextButton4.Enabled"), function() {
                                    return l.getcurrency() !== A.nullTextIdentifier()
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
                                onClick: g(function() {
                                    return Promise.resolve().then(function() {
                                        var d = typeof o != "undefined" && o !== null ? o.clone() : t.callContext().clone();
                                        return t.nextStep$Action(t.callContext(d))
                                    })
                                }, "onClick"),
                                style: c.getCachedValue(r.getId("NextButton4.Style"), function() {
                                    return O.isDesktop$Action(o).isDesktopOut ? "btn btn-primary" : "btn btn-primary action-button"
                                }),
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    name: "NextButton4"
                                },
                                _widgetRecordProvider: a
                            }, s.createElement(T, {
                                extendedProperties: {
                                    style: "font-size: 16px; font-weight: bold;"
                                },
                                text: [S(u("FJdXZEb7XE241NvO_hDk_w#Value", "Next"))],
                                _idProps: {
                                    service: r,
                                    uuid: "38"
                                },
                                _widgetRecordProvider: a
                            }))))]
                        })
                    },
                    _dependencies: [n(l.getcurrency()), n(c.variables.recommended_currenciesVar), n(c.variables.is_loadingVar)]
                })]
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: g(function() {
                return {
                    codeFunction: "CurrencySelectionForWallets",
                    functionKey: "5716b6b8-cb4a-4fcf-baa8-38128c1a8947",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "OnboardingFlow.CurrencySelectionForWallets",
            modelFactory: re,
            controllerFactory: ee,
            getTitle: g(function(m) {
                var c = m.model,
                    t = m.controller,
                    r = m.controller.idService,
                    i = t.validationService,
                    o = t.callContext(),
                    n = z,
                    u = B,
                    f = {
                        props: m,
                        validateWidget: g(function(a) {
                            m.validateWidget(m, a)
                        }, "validateWidget")
                    };
                return ae.resolve(oe.TranslationsService).getMessage("uLYWV0rLz0+6qDgSjBqJRw#TitleExpression.-2098612361.1", "Currency selection | Deriv")
            }, "getTitle")
        });
        return _.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.OnboardingFlow.CurrencySelectionForWallets.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, _.getJsDependencies = function() {
            return []
        }, _.getBlocks = function() {
            return [Q, K]
        }, _
    }, "componentFactory"),
    he = Ae();
export {
    ee as controllerModule, re as modelModule, he as viewModule, Y as webFlowControllerModule
};