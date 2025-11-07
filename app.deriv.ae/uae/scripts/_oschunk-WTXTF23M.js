import {
    a as z
} from "./_oschunk-NLNJ5SA5.js";
import {
    a as U
} from "./_oschunk-JF3PYARS.js";
import "./_oschunk-6RCCOD74.js";
import "./_oschunk-7SYLUYK7.js";
import {
    a as G
} from "./_oschunk-UZGD3HJ2.js";
import "./_oschunk-L6JZD7VU.js";
import "./_oschunk-YVFTECWM.js";
import {
    b as ae,
    f as p,
    h as se,
    i as ue,
    j as le,
    n as ce,
    u as H
} from "./_oschunk-VR5BNL2K.js";
import {
    a as ve,
    g as M,
    m as ne,
    n as re,
    q as ie,
    r as oe,
    s as k,
    t as L
} from "./_oschunk-4VHUVDBV.js";
import {
    a as te
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    $ as x,
    Qb as R,
    Sb as O,
    Z as h,
    ab as P,
    b as Z,
    ea as E,
    o as F,
    ob as ee,
    ub as s,
    xa as X
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as T,
    c as u,
    e as _e,
    m as I,
    n as D,
    p as Q,
    w as Y
} from "./_oschunk-M5BUVJ72.js";
var ye = {
        "iZD57Rf3YEiKEI_jkORV+w#Value": "\u0627\u0644\u062A\u0627\u0644\u064A",
        "nEXiO5yfuEiGoCWrNmKQBA#Value": "\u0645\u0627 \u0647\u0648 \u0647\u062F\u0641\u0643 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u061F",
        "n7g7UHFotkOoZsqGhRUHeQ#Value.-792540827.1": "\u062A\u0642\u064A\u064A\u0645 \u0627\u0644\u0645\u0644\u0627\u0621\u0645\u0629",
        "RyVzY7dpiUiK7nUfHlkLow#Title": "\u0627\u0644\u0647\u062F\u0641 \u0627\u0644\u0631\u0626\u064A\u0633\u064A | Deriv",
        "RyVzY7dpiUiK7nUfHlkLow#TitleExpression.244440852.1": "\u0627\u0644\u0647\u062F\u0641 \u0627\u0644\u0631\u0626\u064A\u0633\u064A | Deriv"
    },
    de = {
        "ar-001": {
            translations: ye,
            isRTL: !0
        }
    };

function W(A, m, d) {
    A.PutUpdateTaxinformation()
}
u(W, "default");
var r = T; {
    let m = class m extends r.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t, de);
            var o = this.controller;
            this.clientActionProxies = {
                putUpdateTaxinformation$Action: u(function() {
                    return o.executeActionInsideJSNode(o._putUpdateTaxinformation$Action.bind(o), o.callContext(), function(n) {
                        return {}
                    }, function() {}, "PutUpdateTaxinformation")
                }, "putUpdateTaxinformation$Action")
            }, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get putUpdateTaxinformation$ServerAction() {
            return this.hasOwnProperty("_putUpdateTaxinformation$ServerAction") || (this._putUpdateTaxinformation$ServerAction = function(e, i, t) {
                var o = this.controller;
                return r.Logger.startActiveSpan("PutUpdateTaxinformation", function(n) {
                    return n && (n.setAttribute("code.function", "PutUpdateTaxinformation"), n.setAttribute("outsystems.function.key", "f8289fee-7331-4fd5-bdb1-ebb2a75092e2"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), r.Flow.tryFinally(function() {
                        var l = {
                            Authorization: r.DataConversion.ServerDataConverter.to(e, r.DataTypes.DataTypes.Text),
                            Request: r.DataConversion.ServerDataConverter.to(i, r.DataTypes.DataTypes.Record)
                        };
                        return o.callServerAction("PutUpdateTaxinformation", "screenservices/uae/OnboardingFlow/MainGoal/ActionPutUpdateTaxinformation", "OZTyiktQjNCb5MN3N_A0AA", l, o.callContext(t), void 0, void 0, !0).then(function(v) {
                            var a = new(o.constructor.getVariableGroupType("uae.OnboardingFlow.MainGoal$ActionPutUpdateTaxinformation"));
                            return a.responseOut = r.DataConversion.ServerDataConverter.from(v.Response, P), a
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 0)
            }), this._putUpdateTaxinformation$ServerAction
        }
        set putUpdateTaxinformation$ServerAction(e) {
            this._putUpdateTaxinformation$ServerAction = e
        }
        get postFinancialassessment$ServerAction() {
            return this.hasOwnProperty("_postFinancialassessment$ServerAction") || (this._postFinancialassessment$ServerAction = function(e, i, t) {
                var o = this.controller;
                return r.Logger.startActiveSpan("PostFinancialassessment", function(n) {
                    return n && (n.setAttribute("code.function", "PostFinancialassessment"), n.setAttribute("outsystems.function.key", "1c69db20-6171-41b3-90f3-6daa906d8ec0"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), r.Flow.tryFinally(function() {
                        var l = {
                            Authorization: r.DataConversion.ServerDataConverter.to(e, r.DataTypes.DataTypes.Text),
                            Request: r.DataConversion.ServerDataConverter.to(i, r.DataTypes.DataTypes.Record)
                        };
                        return o.callServerAction("PostFinancialassessment", "screenservices/uae/OnboardingFlow/MainGoal/ActionPostFinancialassessment", "QDSx8Jmrv0qpM_KIZkDjYA", l, o.callContext(t), void 0, void 0, !0).then(function(v) {
                            var a = new(o.constructor.getVariableGroupType("uae.OnboardingFlow.MainGoal$ActionPostFinancialassessment"));
                            return a.responseOut = r.DataConversion.ServerDataConverter.from(v.Response, E), a
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 0)
            }), this._postFinancialassessment$ServerAction
        }
        set postFinancialassessment$ServerAction(e) {
            this._postFinancialassessment$ServerAction = e
        }
        get getOnboardingConfig$ServerAction() {
            return this.hasOwnProperty("_getOnboardingConfig$ServerAction") || (this._getOnboardingConfig$ServerAction = function(e, i, t) {
                var o = this.controller;
                return r.Logger.startActiveSpan("GetOnboardingConfig", function(n) {
                    return n && (n.setAttribute("code.function", "GetOnboardingConfig"), n.setAttribute("outsystems.function.key", "86c7c527-d6b4-4110-af68-13e28071a825"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), r.Flow.tryFinally(function() {
                        var l = {
                            country: r.DataConversion.ServerDataConverter.to(e, r.DataTypes.DataTypes.Text),
                            authorization: r.DataConversion.ServerDataConverter.to(i, r.DataTypes.DataTypes.Text)
                        };
                        return o.callServerAction("GetOnboardingConfig", "screenservices/uae/OnboardingFlow/MainGoal/ActionGetOnboardingConfig", "9mxHf9W_0f9gxqO_bFIMsA", l, o.callContext(t), void 0, void 0, !0).then(function(v) {
                            var a = new(o.constructor.getVariableGroupType("uae.OnboardingFlow.MainGoal$ActionGetOnboardingConfig"));
                            return a.responseOut = r.DataConversion.ServerDataConverter.from(v.Response, x), a
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
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onSelectMainGoal$Action() {
            return this.hasOwnProperty("__onSelectMainGoal$Action") || (this.__onSelectMainGoal$Action = function(e, i) {
                var t = this.model,
                    o = this.controller,
                    n = this.idService;
                return r.Logger.startActiveSpan("OnSelectMainGoal", function(l) {
                    l && (l.setAttribute("code.function", "OnSelectMainGoal"), l.setAttribute("outsystems.function.key", "460fef3b-7480-45bf-a66a-b10b22660581"), l.setAttribute("outsystems.function.owner.name", "uae"), l.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("OnSelectMainGoal"), i = o.callContext(i);
                        var v = new r.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("uae.OnboardingFlow.MainGoal.OnSelectMainGoal$vars")));
                        v.value.maingoalInLocal = e, s.setmain_goal(v.value.maingoalInLocal), s.getenableMobileOnboarding() || r.Logger.startActiveSpan("JavaScript1", function(a) {
                            a && (a.setAttribute("code.function", "JavaScript1"), a.setAttribute("outsystems.function.key", "e0b56bcb-fba3-421d-9004-22679b0db0ac"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return o.safeExecuteJSNode(W, "JavaScript1", "OnSelectMainGoal", null, function(c) {}, {
                                    PutUpdateTaxinformation: o.clientActionProxies.putUpdateTaxinformation$Action
                                }, {})
                            } finally {
                                a && a.end()
                            }
                        }, 1)
                    } finally {
                        l && l.end()
                    }
                }, 1)
            }), this.__onSelectMainGoal$Action
        }
        set _onSelectMainGoal$Action(e) {
            this.__onSelectMainGoal$Action = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("OnInitialize", function(n) {
                    n && (n.setAttribute("code.function", "OnInitialize"), n.setAttribute("outsystems.function.key", "5134e1eb-7fc3-405d-90f2-17fceba76ddb"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e), s.setRealSignupCurrentStep(5)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        get _onClickPrevious$Action() {
            return this.hasOwnProperty("__onClickPrevious$Action") || (this.__onClickPrevious$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("OnClickPrevious", function(n) {
                    n && (n.setAttribute("code.function", "OnClickPrevious"), n.setAttribute("outsystems.function.key", "59e4b09b-e2e4-4b83-b1f6-bf15ce669675"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("OnClickPrevious"), e = t.callContext(e), r.Navigation.navigateTo(r.Navigation.generateScreenURL("uae", "suitability-assessment", {
                            CurrentPos: r.DataConversion.ServerDataConverter.to(3, r.DataTypes.DataTypes.Integer)
                        }), r.Transitions.createTransition(r.Transitions.TransitionAnimation.None), e, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onClickPrevious$Action
        }
        set _onClickPrevious$Action(e) {
            this.__onClickPrevious$Action = e
        }
        get _putUpdateTaxinformation$Action() {
            return this.hasOwnProperty("__putUpdateTaxinformation$Action") || (this.__putUpdateTaxinformation$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("PutUpdateTaxinformation", function(n) {
                    return n && (n.setAttribute("code.function", "PutUpdateTaxinformation"), n.setAttribute("outsystems.function.key", "63f835f5-6351-4c5a-b88b-981c9bc74ba5"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        t.ensureControllerAlive("PutUpdateTaxinformation"), e = t.callContext(e);
                        var l = new r.DataTypes.VariableHolder,
                            v = new r.DataTypes.VariableHolder,
                            a = new r.DataTypes.VariableHolder;
                        return r.Flow.executeAsyncFlow(function() {
                            return a.value = O.getAuth$Action(e), r.Flow.executeSequence(function() {
                                return s.getcallFinancialAssessmentAPI() ? (i.flush(), t.postFinancialassessment$ServerAction(a.value.tokenOut, (function() {
                                    var c = new ee;
                                    return c.source_of_wealthAttr = s.getsource_of_wealth(), c.occupationAttr = s.getjob_title(), c.net_annual_incomeAttr = s.getannual_income(), c.industry_of_employmentAttr = s.getemployment_industry(), c.source_of_incomeAttr = s.getsource_of_income(), c.estimated_net_worthAttr = s.getnet_worth(), c.educational_LevelAttr = s.geteducation_level(), c.employer_nameAttr = s.getemployer_name(), c.regular_expensesAttr = s.getessential_expenditure(), c
                                })(), e).then(function(c) {
                                    v.value = c
                                })) : (i.flush(), t.putUpdateTaxinformation$ServerAction(a.value.tokenOut, (function() {
                                    var c = new X;
                                    return c.financial_assessmentAttr = (function() {
                                        var _ = new Z;
                                        return _.source_of_wealthAttr = s.getsource_of_wealth(), _.occupationAttr = s.getjob_title(), _.net_annual_incomeAttr = s.getannual_income(), _.industry_of_employmentAttr = s.getemployment_industry(), _.source_of_incomeAttr = s.getsource_of_income(), _.estimated_net_worthAttr = s.getnet_worth(), _.educational_LevelAttr = s.geteducation_level(), _.employer_nameAttr = r.BuiltinFunctions.trim(s.getemployer_name()), _.regular_expensesAttr = s.getessential_expenditure(), _.job_titleAttr = s.getjob_title_other_input(), _
                                    })(), c.account_opening_reasonAttr = s.getmain_goal(), c
                                })(), e).then(function(c) {
                                    l.value = c
                                }))
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__putUpdateTaxinformation$Action
        }
        set _putUpdateTaxinformation$Action(e) {
            this.__putUpdateTaxinformation$Action = e
        }
        get _nextStep$Action() {
            return this.hasOwnProperty("__nextStep$Action") || (this.__nextStep$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("NextStep", function(n) {
                    return n && (n.setAttribute("code.function", "NextStep"), n.setAttribute("outsystems.function.key", "b2a6d66f-9a94-4f36-98cf-a55c6ed61102"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("NextStep"), e = t.callContext(e), r.Flow.executeAsyncFlow(function() {
                            return r.Flow.executeSequence(function() {
                                if (s.getenableMobileOnboarding()) return t._putUpdateTaxinformation$Action(e)
                            }).then(function() {
                                return r.Flow.returnAsync(r.Navigation.navigateTo(r.Navigation.generateScreenURL("uae", "terms-and-condition", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.None), e, !0))
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
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("OnReady", function(n) {
                    return n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "b57cc67c-7cf4-4df9-9290-40e1f940c76e"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var l = new r.DataTypes.VariableHolder,
                            v = new r.DataTypes.VariableHolder,
                            a = new r.DataTypes.VariableHolder(new r.DataTypes.JSONSerializeOutputType),
                            c = new r.DataTypes.VariableHolder(new r.DataTypes.JSONSerializeOutputType),
                            _ = new r.DataTypes.VariableHolder(new(r.Controller.BaseController.getJSONDeserializeOutputType(r.GenericTypeCache.getGenericList(h)))),
                            S = new r.DataTypes.VariableHolder(new(r.Controller.BaseController.getJSONDeserializeOutputType(F)));
                        return r.Flow.executeAsyncFlow(function() {
                            return v.value = O.getAuth$Action(e), i.variables.is_loadingVar = !0, r.Flow.executeSequence(function() {
                                if (s.getmain_goal_list() !== r.BuiltinFunctions.nullTextIdentifier()) _.value.dataOut = r.JSONUtils.deserializeFromJSON(s.getmain_goal_list(), r.GenericTypeCache.getGenericList(h), !1), i.variables.main_goal_item_listVar = _.value.dataOut;
                                else return i.flush(), t.getOnboardingConfig$ServerAction(s.getresidence(), v.value.tokenOut, e).then(function(f) {
                                    l.value = f
                                }).then(function() {
                                    c.value.jSONOut = r.JSONUtils.serializeToJSON(l.value.responseOut.dataAttr.getCurrent(e.iterationContext).main_goalAttr, !1, !1), a.value.jSONOut = r.JSONUtils.serializeToJSON(l.value.responseOut.dataAttr.getCurrent(e.iterationContext).employment_statusAttr, !1, !1), s.setmain_goal_list(c.value.jSONOut), s.setemployment_status_list(a.value.jSONOut), i.variables.main_goal_item_listVar = l.value.responseOut.dataAttr.getCurrent(e.iterationContext).main_goalAttr
                                })
                            }).then(function() {
                                s.getmain_goal() === r.BuiltinFunctions.nullTextIdentifier() && s.getgetTaxAPIResponse() !== r.BuiltinFunctions.nullTextIdentifier() && (S.value.dataOut = r.JSONUtils.deserializeFromJSON(s.getgetTaxAPIResponse(), F, !1), s.setmain_goal(S.value.dataOut.tax_informationAttr.account_opening_reasonAttr)), i.variables.is_loadingVar = !1
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
        get _stopOnboardingOnContinue$Action() {
            return this.hasOwnProperty("__stopOnboardingOnContinue$Action") || (this.__stopOnboardingOnContinue$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("StopOnboardingOnContinue", function(n) {
                    n && (n.setAttribute("code.function", "StopOnboardingOnContinue"), n.setAttribute("outsystems.function.key", "deff9de8-6e72-4601-a100-3c4bb274c5ff"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("StopOnboardingOnContinue"), e = t.callContext(e), i.variables.showStopOnBoardingVar = !i.variables.showStopOnBoardingVar
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__stopOnboardingOnContinue$Action
        }
        set _stopOnboardingOnContinue$Action(e) {
            this.__stopOnboardingOnContinue$Action = e
        }
        onSelectMainGoal$Action(e, i) {
            var t = this.controller;
            return r.Logger.startActiveSpan("OnSelectMainGoal__proxy", function(o) {
                o && (o.setAttribute("code.function", "OnSelectMainGoal"), o.setAttribute("outsystems.function.key", "460fef3b-7480-45bf-a66a-b10b22660581"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onSelectMainGoal$Action, i, e)
                } finally {
                    o && o.end()
                }
            }, 0)
        }
        onInitialize$Action(e) {
            var i = this.controller;
            return r.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "5134e1eb-7fc3-405d-90f2-17fceba76ddb"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onInitialize$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onClickPrevious$Action(e) {
            var i = this.controller;
            return r.Logger.startActiveSpan("OnClickPrevious__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnClickPrevious"), t.setAttribute("outsystems.function.key", "59e4b09b-e2e4-4b83-b1f6-bf15ce669675"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onClickPrevious$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        putUpdateTaxinformation$Action(e) {
            var i = this.controller;
            return r.Logger.startActiveSpan("PutUpdateTaxinformation__proxy", function(t) {
                return t && (t.setAttribute("code.function", "PutUpdateTaxinformation"), t.setAttribute("outsystems.function.key", "63f835f5-6351-4c5a-b88b-981c9bc74ba5"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._putUpdateTaxinformation$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        nextStep$Action(e) {
            var i = this.controller;
            return r.Logger.startActiveSpan("NextStep__proxy", function(t) {
                return t && (t.setAttribute("code.function", "NextStep"), t.setAttribute("outsystems.function.key", "b2a6d66f-9a94-4f36-98cf-a55c6ed61102"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._nextStep$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onReady$Action(e) {
            var i = this.controller;
            return r.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "b57cc67c-7cf4-4df9-9290-40e1f940c76e"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        stopOnboardingOnContinue$Action(e) {
            var i = this.controller;
            return r.Logger.startActiveSpan("StopOnboardingOnContinue__proxy", function(t) {
                t && (t.setAttribute("code.function", "StopOnboardingOnContinue"), t.setAttribute("outsystems.function.key", "deff9de8-6e72-4601-a100-3c4bb274c5ff"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._stopOnboardingOnContinue$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var i = this.controller,
                    t = this.model,
                    o = this.idService;
                return i.onInitialize$Action(e)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var i = this.controller,
                    t = this.model,
                    o = this.idService;
                return i.onReady$Action(e)
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
                return z.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return O.defaultTimeout
        }
    };
    u(m, "ControllerInner");
    let A = m;
    C = A, C.registerVariableGroupType("uae.OnboardingFlow.MainGoal$ActionPutUpdateTaxinformation", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: r.DataTypes.DataTypes.Record,
        defaultValue: u(function() {
            return new P
        }, "defaultValue"),
        complexType: P
    }]), C.registerVariableGroupType("uae.OnboardingFlow.MainGoal$ActionPostFinancialassessment", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: r.DataTypes.DataTypes.Record,
        defaultValue: u(function() {
            return new E
        }, "defaultValue"),
        complexType: E
    }]), C.registerVariableGroupType("uae.OnboardingFlow.MainGoal$ActionGetOnboardingConfig", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: r.DataTypes.DataTypes.Record,
        defaultValue: u(function() {
            return new x
        }, "defaultValue"),
        complexType: x
    }]), C.registerVariableGroupType("uae.OnboardingFlow.MainGoal.OnSelectMainGoal$vars", [{
        name: "maingoal",
        attrName: "maingoalInLocal",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }])
}
var C, B = new r.Controller.ControllerFactory(C, te);
var g = _e(ve());
var b = T,
    K = class K extends b.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("main_goal_item_list", "main_goal_item_listVar", "main_goal_item_list", !0, !1, b.DataTypes.DataTypes.RecordList, function() {
                return b.DataTypes.ImmutableBase.getData(new(b.GenericTypeCache.getGenericList(h)))
            }, !1, b.GenericTypeCache.getGenericList(h)), this.attr("is_loading", "is_loadingVar", "is_loading", !0, !1, b.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("ShowStopOnBoarding", "showStopOnBoardingVar", "ShowStopOnBoarding", !0, !1, b.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1)].concat(b.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
u(K, "VariablesRecord");
var V = K;
V.init();
var q = class q extends b.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
u(q, "WidgetsRecord");
var J = q,
    w = class w extends b.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return V
        }
        static getWidgetsRecordConstructor() {
            return J
        }
        static get hasValidationWidgets() {
            return w._hasValidationWidgetsValue === void 0 && (w._hasValidationWidgetsValue = void 0 || void 0), w._hasValidationWidgetsValue
        }
        setInputs(m) {}
    };
u(w, "Model");
var $ = w;
$._hasValidationWidgetsValue = void 0;
var j = new b.Model.ModelFactory($);
var N = M.PlaceholderContent,
    pe = M.IteratorPlaceholderContent,
    Se = u(function() {
        var A = re(function(m) {
            var d = m.model,
                e = m.controller,
                i = m.controller.idService,
                t = e.validationService,
                o = e.callContext(),
                n = k,
                l = L,
                v = {
                    props: m,
                    validateWidget: u(function(f) {
                        m.validateWidget(m, f)
                    }, "validateWidget")
                },
                a = d,
                c = oe,
                _ = ie,
                S = ne();
            return g.createElement("div", m.rootNodeProperties, g.createElement(U, {
                getOwnerSpan: u(function() {
                    return S.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: u(function() {
                    return S.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    shouldShowProgressBarInMobile: !0,
                    ShouldEmitPreviousEvent: !0,
                    Title: I.resolve(D.TranslationsService).getMessage("n7g7UHFotkOoZsqGhRUHeQ#Value.-792540827.1", "Suitability assessment"),
                    ProgressBarPercentage: 95
                },
                events: {
                    _handleError: u(function(f) {
                        e.handleError(f)
                    }, "_handleError"),
                    onClickPrevious$Action: u(function() {
                        var f = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                        e.onClickPrevious$Action(e.callContext(f))
                    }, "onClickPrevious$Action")
                },
                _validationProps: {
                    validationService: t
                },
                _idProps: {
                    service: i,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: a,
                placeholders: {
                    content: new N(function() {
                        return [g.createElement(p, {
                            align: 0,
                            animate: !1,
                            style: "relative",
                            visible: !0,
                            _idProps: {
                                service: i,
                                uuid: "1"
                            },
                            _widgetRecordProvider: a
                        }, g.createElement(p, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "font-size: 24px; font-style: normal; font-weight: 900; line-height: normal; margin-bottom: 16px;"
                            },
                            visible: !0,
                            _idProps: {
                                service: i,
                                name: "PageHeading"
                            },
                            _widgetRecordProvider: a
                        }, g.createElement(H, {
                            extendedProperties: {
                                style: "font-size: 24px; font-weight: 900;"
                            },
                            style: d.getCachedValue(i.getId("nEXiO5yfuEiGoCWrNmKQBA.Style"), function() {
                                return R.isDesktop$Action(o).isDesktopOut ? "margin-bottom-base text-xl font-extra-bold" : "margin-bottom-base text-2xl font-extra-bold"
                            }),
                            text: [_(l("nEXiO5yfuEiGoCWrNmKQBA#Value", "What's your main goal?"))],
                            _idProps: {
                                service: i,
                                uuid: "3"
                            },
                            _widgetRecordProvider: a
                        })), g.createElement(p, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-bottom: 48px;"
                            },
                            style: "flex flex-col gap-y-4",
                            visible: !0,
                            _idProps: {
                                service: i,
                                name: "ListContainer"
                            },
                            _widgetRecordProvider: a
                        }, c(d.variables.is_loadingVar, !1, this, function() {
                            return [g.createElement(p, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "margin-top: 4px;"
                                },
                                gridProperties: {
                                    classes: "OSInline"
                                },
                                style: "animate-pulse w-full main-goal list-container",
                                visible: !0,
                                _idProps: {
                                    service: i,
                                    name: "LoaderContainer"
                                },
                                _widgetRecordProvider: a
                            }, g.createElement(p, {
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
                                    service: i,
                                    name: "ListItemPlaceholder"
                                },
                                _widgetRecordProvider: a
                            }), g.createElement(p, {
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
                                    service: i,
                                    name: "ListItemPlaceholder2"
                                },
                                _widgetRecordProvider: a
                            }))]
                        }, function() {
                            return [g.createElement(ue, {
                                animateItems: !0,
                                extendedProperties: {
                                    style: "display: flex; flex-direction: column; row-gap: 8px;"
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                mode: 0,
                                source: d.variables.main_goal_item_listVar,
                                style: "list list-group",
                                tag: "div",
                                _idProps: {
                                    service: i,
                                    name: "Container2"
                                },
                                _widgetRecordProvider: a,
                                placeholders: {
                                    content: new pe(function(f, y) {
                                        return [g.createElement(le, {
                                            extendedProperties: {
                                                className: d.getCachedValue(f.getId("ListItem1.class"), function() {
                                                    return d.variables.main_goal_item_listVar.getCurrent(y.iterationContext).labelAttr === s.getmain_goal() ? "item item-selected" : "item"
                                                }, function() {
                                                    return d.variables.main_goal_item_listVar.getCurrent(y.iterationContext).labelAttr
                                                }, function() {
                                                    return s.getmain_goal()
                                                })
                                            },
                                            onClick: u(function() {
                                                var ge = typeof y != "undefined" && y !== null ? y.clone() : e.callContext().clone();
                                                e.onSelectMainGoal$Action(d.variables.main_goal_item_listVar.getCurrent(y.iterationContext).labelAttr, e.callContext(ge))
                                            }, "onClick"),
                                            style: '"list-item"',
                                            triggerActionOnFullSwipeLeft: !0,
                                            triggerActionOnFullSwipeRight: !0,
                                            _idProps: {
                                                service: f,
                                                name: "ListItem1"
                                            },
                                            _widgetRecordProvider: a,
                                            placeholders: {
                                                leftActions: N.Empty,
                                                content: new N(function() {
                                                    return [g.createElement(p, {
                                                        align: 0,
                                                        animate: !1,
                                                        extendedProperties: {
                                                            style: "align-items: center; align-self: stretch; display: flex; gap: 16px;"
                                                        },
                                                        gridProperties: {
                                                            classes: "OSInline",
                                                            width: "100%"
                                                        },
                                                        visible: !0,
                                                        _idProps: {
                                                            service: f,
                                                            uuid: "10"
                                                        },
                                                        _widgetRecordProvider: a
                                                    }, g.createElement(se, {
                                                        gridProperties: {
                                                            marginLeft: "0"
                                                        },
                                                        value: d.getCachedValue(f.getId("x7Hv_kfo+0a751bQEbGQaw.Value"), function() {
                                                            return O.translate$Action(d.variables.main_goal_item_listVar.getCurrent(y.iterationContext).labelAttr, y).translatedTextOut
                                                        }, function() {
                                                            return d.variables.main_goal_item_listVar.getCurrent(y.iterationContext).labelAttr
                                                        }),
                                                        _idProps: {
                                                            service: f,
                                                            uuid: "11"
                                                        },
                                                        _widgetRecordProvider: a
                                                    }), g.createElement(p, {
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
                                                            service: f,
                                                            uuid: "12"
                                                        },
                                                        _widgetRecordProvider: a
                                                    }, c(d.variables.main_goal_item_listVar.getCurrent(y.iterationContext).labelAttr === s.getmain_goal(), !1, this, function() {
                                                        return [g.createElement(ce, {
                                                            image: Q.VersionedURL.getVersionedUrl("img/uae.circlecheck.svg"),
                                                            type: 0,
                                                            _idProps: {
                                                                service: f,
                                                                uuid: "13"
                                                            },
                                                            _widgetRecordProvider: a
                                                        })]
                                                    }, function() {
                                                        return []
                                                    })))]
                                                }),
                                                rightActions: N.Empty
                                            },
                                            _dependencies: [n(s.getmain_goal()), n(d.variables.main_goal_item_listVar.getCurrent(y.iterationContext).labelAttr)]
                                        })]
                                    }, o, i, "1")
                                },
                                _dependencies: [n(s.getmain_goal())]
                            })]
                        })), g.createElement(p, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-top: 24px; text-align: right;"
                            },
                            style: d.getCachedValue(i.getId("ButtonContainer.Style"), function() {
                                return R.isDesktop$Action(o).isDesktopOut ? "flex justify-content-flex-end" : "fixed bottom-0 left-0 w-full flex justify-center p-4"
                            }),
                            visible: !0,
                            _idProps: {
                                service: i,
                                name: "ButtonContainer"
                            },
                            _widgetRecordProvider: a
                        }, g.createElement(ae, {
                            enabled: d.getCachedValue(i.getId("NextButton3.Enabled"), function() {
                                return s.getmain_goal() !== Y.nullTextIdentifier()
                            }, function() {
                                return s.getmain_goal()
                            }),
                            extendedProperties: {
                                style: "border-radius: 24px;"
                            },
                            gridProperties: {
                                width: "96px"
                            },
                            isDefault: !1,
                            onClick: u(function() {
                                return Promise.resolve().then(function() {
                                    var f = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                                    return e.nextStep$Action(e.callContext(f))
                                })
                            }, "onClick"),
                            style: d.getCachedValue(i.getId("NextButton3.Style"), function() {
                                return R.isDesktop$Action(o).isDesktopOut ? "btn btn-primary" : "btn btn-primary action-button"
                            }),
                            visible: !0,
                            _idProps: {
                                service: i,
                                name: "NextButton3"
                            },
                            _widgetRecordProvider: a
                        }, g.createElement(H, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: bold;"
                            },
                            text: [_(l("iZD57Rf3YEiKEI_jkORV+w#Value", "Next"))],
                            _idProps: {
                                service: i,
                                uuid: "16"
                            },
                            _widgetRecordProvider: a
                        }))))]
                    })
                },
                _dependencies: [n(s.getmain_goal()), n(d.variables.main_goal_item_listVar), n(d.variables.is_loadingVar)]
            }), g.createElement(G, {
                getOwnerSpan: u(function() {
                    return S.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: u(function() {
                    return S.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ShouldShow: d.variables.showStopOnBoardingVar
                },
                events: {
                    _handleError: u(function(f) {
                        e.handleError(f)
                    }, "_handleError"),
                    onContinue$Action: u(function() {
                        var f = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                        e.stopOnboardingOnContinue$Action(e.callContext(f))
                    }, "onContinue$Action")
                },
                _validationProps: {
                    validationService: t
                },
                _idProps: {
                    service: i,
                    uuid: "17",
                    alias: "2"
                },
                _widgetRecordProvider: a,
                _dependencies: []
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: u(function() {
                return {
                    codeFunction: "MainGoal",
                    functionKey: "63732547-69b7-4889-8aee-751f1e590ba3",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "OnboardingFlow.MainGoal",
            modelFactory: j,
            controllerFactory: B,
            getTitle: u(function(m) {
                var d = m.model,
                    e = m.controller,
                    i = m.controller.idService,
                    t = e.validationService,
                    o = e.callContext(),
                    n = k,
                    l = L,
                    v = {
                        props: m,
                        validateWidget: u(function(a) {
                            m.validateWidget(m, a)
                        }, "validateWidget")
                    };
                return I.resolve(D.TranslationsService).getMessage("RyVzY7dpiUiK7nUfHlkLow#TitleExpression.244440852.1", "Main goal | Deriv")
            }, "getTitle")
        });
        return A.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.OnboardingFlow.MainGoal.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, A.getJsDependencies = function() {
            return []
        }, A.getBlocks = function() {
            return [U, G]
        }, A
    }, "componentFactory"),
    he = Se();
export {
    B as controllerModule, j as modelModule, he as viewModule, z as webFlowControllerModule
};