import {
    a as W
} from "./_oschunk-NLNJ5SA5.js";
import {
    a as M
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
    f as S,
    h as se,
    i as le,
    j as ue,
    n as ce,
    u as J
} from "./_oschunk-VR5BNL2K.js";
import {
    a as ve,
    g as k,
    m as ne,
    n as re,
    q as ie,
    r as oe,
    s as L,
    t as H
} from "./_oschunk-4VHUVDBV.js";
import {
    a as te
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    $ as E,
    Qb as $,
    Sb as O,
    Z as h,
    ca as T,
    ga as D,
    kb as P,
    qa as X,
    ub as u,
    xa as ee
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as x,
    c as l,
    e as _e,
    m as I,
    n as F,
    p as Q,
    w as Y
} from "./_oschunk-M5BUVJ72.js";
var ge = {
        "9KGfL9MeoUGYFoiwIUDYbA#Value": "\u0627\u0644\u062A\u0627\u0644\u064A",
        "HBDg_fC2QkKcIjw3xIEfeg#Value": "\u062D\u0627\u0644\u0629 \u0627\u0644\u062A\u0648\u0638\u064A\u0641",
        "PEZtpXt9aEGtwg5+o1Fe6A#Value.-1037113639.1": "\u0627\u0644\u062A\u0642\u064A\u064A\u0645 \u0627\u0644\u0645\u0627\u0644\u064A.",
        "+1tde09GREaxoG41OW2u3g#Title": "\u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u0648\u0638\u064A\u0641\u064A\u0629 | Deriv",
        "+1tde09GREaxoG41OW2u3g#TitleExpression.1370304672.1": "\u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u0648\u0638\u064A\u0641\u064A\u0629 | Deriv"
    },
    de = {
        "ar-001": {
            translations: ge,
            isRTL: !0
        }
    };

function z(d, g, m, t) {
    var n, o, r, s, y, a, b, p;
    let i = JSON.parse(d.Response);
    try {
        d.education_level_list = JSON.stringify((n = i.education_level) != null ? n : []), d.estimated_net_worth_list = JSON.stringify((o = i.estimated_net_worth) != null ? o : []), d.industry_of_employment_list = JSON.stringify((r = i.industry_of_employment) != null ? r : []), d.net_annual_income_list = JSON.stringify((s = i.net_annual_income) != null ? s : []), d.occupation_list = JSON.stringify((y = i.occupation) != null ? y : []), d.regular_expenses_list = JSON.stringify((a = i.regular_expenses) != null ? a : []), d.source_of_income_list = JSON.stringify((b = i.source_of_income) != null ? b : []), d.source_of_wealth_list = JSON.stringify((p = i.source_of_wealth) != null ? p : [])
    } catch (_) {
        d.education_level_list = "", d.estimated_net_worth_list = "", d.industry_of_employment_list = "", d.net_annual_income_list = "", d.occupation_list = "", d.regular_expenses_list = "", d.source_of_income_list = "", d.source_of_wealth_list = ""
    }
}
l(z, "default");

function B(d, g, m) {
    d.CallFinancialAssessment()
}
l(B, "default");
var e = x; {
    let g = class g extends e.Controller.BaseViewController {
        constructor(t, i, n) {
            super(t, i, n, de);
            var o = this.controller;
            this.clientActionProxies = {
                callFinancialAssessment$Action: l(function() {
                    return o.executeActionInsideJSNode(o._callFinancialAssessment$Action.bind(o), o.callContext(), function(r) {
                        return {}
                    }, function() {}, "CallFinancialAssessment")
                }, "callFinancialAssessment$Action")
            }, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get fetchFinancialassessmentConfig$ServerAction() {
            return this.hasOwnProperty("_fetchFinancialassessmentConfig$ServerAction") || (this._fetchFinancialassessmentConfig$ServerAction = function(t, i, n) {
                var o = this.controller;
                return e.Logger.startActiveSpan("FetchFinancialassessmentConfig", function(r) {
                    return r && (r.setAttribute("code.function", "FetchFinancialassessmentConfig"), r.setAttribute("outsystems.function.key", "adc7eeae-d45a-435f-bfa5-3882dc161be5"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
                        var s = {
                            authorization: e.DataConversion.ServerDataConverter.to(t, e.DataTypes.DataTypes.Text),
                            Request: e.DataConversion.ServerDataConverter.to(i, e.DataTypes.DataTypes.Record)
                        };
                        return o.callServerAction("FetchFinancialassessmentConfig", "screenservices/uae/OnboardingFlow/EmploymentStatus/ActionFetchFinancialassessmentConfig", "kVfq3uJ8C0Z7Vk71eT8G7A", s, o.callContext(n), void 0, void 0, !0).then(function(y) {
                            var a = new(o.constructor.getVariableGroupType("uae.OnboardingFlow.EmploymentStatus$ActionFetchFinancialassessmentConfig"));
                            return a.responseOut = e.DataConversion.ServerDataConverter.from(y.Response, D), a
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 0)
            }), this._fetchFinancialassessmentConfig$ServerAction
        }
        set fetchFinancialassessmentConfig$ServerAction(t) {
            this._fetchFinancialassessmentConfig$ServerAction = t
        }
        get getOnboardingConfig$ServerAction() {
            return this.hasOwnProperty("_getOnboardingConfig$ServerAction") || (this._getOnboardingConfig$ServerAction = function(t, i, n) {
                var o = this.controller;
                return e.Logger.startActiveSpan("GetOnboardingConfig", function(r) {
                    return r && (r.setAttribute("code.function", "GetOnboardingConfig"), r.setAttribute("outsystems.function.key", "86c7c527-d6b4-4110-af68-13e28071a825"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
                        var s = {
                            country: e.DataConversion.ServerDataConverter.to(t, e.DataTypes.DataTypes.Text),
                            authorization: e.DataConversion.ServerDataConverter.to(i, e.DataTypes.DataTypes.Text)
                        };
                        return o.callServerAction("GetOnboardingConfig", "screenservices/uae/OnboardingFlow/EmploymentStatus/ActionGetOnboardingConfig", "9mxHf9W_0f9gxqO_bFIMsA", s, o.callContext(n), void 0, void 0, !0).then(function(y) {
                            var a = new(o.constructor.getVariableGroupType("uae.OnboardingFlow.EmploymentStatus$ActionGetOnboardingConfig"));
                            return a.responseOut = e.DataConversion.ServerDataConverter.from(y.Response, E), a
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 0)
            }), this._getOnboardingConfig$ServerAction
        }
        set getOnboardingConfig$ServerAction(t) {
            this._getOnboardingConfig$ServerAction = t
        }
        get getTaxInformation$ServerAction() {
            return this.hasOwnProperty("_getTaxInformation$ServerAction") || (this._getTaxInformation$ServerAction = function(t, i) {
                var n = this.controller;
                return e.Logger.startActiveSpan("GetTaxInformation", function(o) {
                    return o && (o.setAttribute("code.function", "GetTaxInformation"), o.setAttribute("outsystems.function.key", "74f57819-40cd-4b67-893c-6a3fa69c7c77"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
                        var r = {
                            authorization: e.DataConversion.ServerDataConverter.to(t, e.DataTypes.DataTypes.Text)
                        };
                        return n.callServerAction("GetTaxInformation", "screenservices/uae/OnboardingFlow/EmploymentStatus/ActionGetTaxInformation", "4dWw57jDQGedieMTQXJZvg", r, n.callContext(i), void 0, void 0, !0).then(function(s) {
                            var y = new(n.constructor.getVariableGroupType("uae.OnboardingFlow.EmploymentStatus$ActionGetTaxInformation"));
                            return y.responseOut = e.DataConversion.ServerDataConverter.from(s.Response, T), y
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 0)
            }), this._getTaxInformation$ServerAction
        }
        set getTaxInformation$ServerAction(t) {
            this._getTaxInformation$ServerAction = t
        }
        get postTaxinformation$ServerAction() {
            return this.hasOwnProperty("_postTaxinformation$ServerAction") || (this._postTaxinformation$ServerAction = function(t, i, n) {
                var o = this.controller;
                return e.Logger.startActiveSpan("PostTaxinformation", function(r) {
                    return r && (r.setAttribute("code.function", "PostTaxinformation"), r.setAttribute("outsystems.function.key", "b20f3bcc-fc7d-4545-a9e1-fc166f9fa3d8"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
                        var s = {
                            Authorization: e.DataConversion.ServerDataConverter.to(t, e.DataTypes.DataTypes.Text),
                            Request: e.DataConversion.ServerDataConverter.to(i, e.DataTypes.DataTypes.Record)
                        };
                        return o.callServerAction("PostTaxinformation", "screenservices/uae/OnboardingFlow/EmploymentStatus/ActionPostTaxinformation", "9FQ7ykGbZEqCAB_Hert0qg", s, o.callContext(n), void 0, void 0, !0).then(function(y) {
                            var a = new(o.constructor.getVariableGroupType("uae.OnboardingFlow.EmploymentStatus$ActionPostTaxinformation"));
                            return a.responseOut = e.DataConversion.ServerDataConverter.from(y.Response, P), a
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 0)
            }), this._postTaxinformation$ServerAction
        }
        set postTaxinformation$ServerAction(t) {
            this._postTaxinformation$ServerAction = t
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _onClickPrevious$Action() {
            return this.hasOwnProperty("__onClickPrevious$Action") || (this.__onClickPrevious$Action = function(t) {
                var i = this.model,
                    n = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("OnClickPrevious", function(r) {
                    r && (r.setAttribute("code.function", "OnClickPrevious"), r.setAttribute("outsystems.function.key", "0b5ba9bb-8763-45c3-a46f-e8f9c2782015"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return n.ensureControllerAlive("OnClickPrevious"), t = n.callContext(t), e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "address-details", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.None), t, !0)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onClickPrevious$Action
        }
        set _onClickPrevious$Action(t) {
            this.__onClickPrevious$Action = t
        }
        get _callFinancialAssessment$Action() {
            return this.hasOwnProperty("__callFinancialAssessment$Action") || (this.__callFinancialAssessment$Action = function(t) {
                var i = this.model,
                    n = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("CallFinancialAssessment", function(r) {
                    return r && (r.setAttribute("code.function", "CallFinancialAssessment"), r.setAttribute("outsystems.function.key", "0cbde81e-4f18-47f4-9fc4-31a7336e1494"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        n.ensureControllerAlive("CallFinancialAssessment"), t = n.callContext(t);
                        var s = new e.DataTypes.VariableHolder,
                            y = new e.DataTypes.VariableHolder,
                            a = new e.DataTypes.VariableHolder,
                            b = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                            p = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType);
                        return e.Flow.executeAsyncFlow(function() {
                            return y.value = O.getAuth$Action(t), i.flush(), n.fetchFinancialassessmentConfig$ServerAction(y.value.tokenOut, (function() {
                                var _ = new X;
                                return _.employment_statusAttr = u.getemployment_status(), _
                            })(), t).then(function(_) {
                                s.value = _
                            }).then(function() {
                                b.value.jSONOut = e.JSONUtils.serializeToJSON(s.value.responseOut.dataAttr.financial_assessmentAttr, !0, !1), p.value.jSONOut = e.JSONUtils.serializeToJSON(s.value.responseOut, !1, !1), O.consoleLog$Action(p.value.jSONOut, t), a.value = e.Logger.startActiveSpan("GetValues", function(_) {
                                    _ && (_.setAttribute("code.function", "GetValues"), _.setAttribute("outsystems.function.key", "61f815fe-5c5a-4dfc-ae6b-a94344d1bd6a"), _.setAttribute("outsystems.function.owner.name", "uae"), _.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), _.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return n.safeExecuteJSNode(z, "GetValues", "CallFinancialAssessment", {
                                            Response: e.DataConversion.JSNodeParamConverter.to(b.value.jSONOut, e.DataTypes.DataTypes.Text),
                                            education_level_list: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                            estimated_net_worth_list: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                            industry_of_employment_list: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                            net_annual_income_list: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                            occupation_list: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                            regular_expenses_list: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                            source_of_income_list: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                            source_of_wealth_list: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                                        }, function(c) {
                                            var f = new(n.constructor.getVariableGroupType("uae.OnboardingFlow.EmploymentStatus.CallFinancialAssessment$getValuesJSResult"));
                                            return f.education_level_listOut = e.DataConversion.JSNodeParamConverter.from(c.education_level_list, e.DataTypes.DataTypes.Text), f.estimated_net_worth_listOut = e.DataConversion.JSNodeParamConverter.from(c.estimated_net_worth_list, e.DataTypes.DataTypes.Text), f.industry_of_employment_listOut = e.DataConversion.JSNodeParamConverter.from(c.industry_of_employment_list, e.DataTypes.DataTypes.Text), f.net_annual_income_listOut = e.DataConversion.JSNodeParamConverter.from(c.net_annual_income_list, e.DataTypes.DataTypes.Text), f.occupation_listOut = e.DataConversion.JSNodeParamConverter.from(c.occupation_list, e.DataTypes.DataTypes.Text), f.regular_expenses_listOut = e.DataConversion.JSNodeParamConverter.from(c.regular_expenses_list, e.DataTypes.DataTypes.Text), f.source_of_income_listOut = e.DataConversion.JSNodeParamConverter.from(c.source_of_income_list, e.DataTypes.DataTypes.Text), f.source_of_wealth_listOut = e.DataConversion.JSNodeParamConverter.from(c.source_of_wealth_list, e.DataTypes.DataTypes.Text), f
                                        }, {}, {})
                                    } finally {
                                        _ && _.end()
                                    }
                                }, 1), u.seteducation_level_list(a.value.education_level_listOut), u.setestimated_net_worth_list(a.value.estimated_net_worth_listOut), u.setindustry_of_employment_list(a.value.industry_of_employment_listOut), u.setnet_annual_income_list(a.value.net_annual_income_listOut), u.setoccupation_list(a.value.occupation_listOut), u.setregular_expenses_list(a.value.regular_expenses_listOut), u.setsource_of_income_list(a.value.source_of_income_listOut), u.setsource_of_wealth_list(a.value.source_of_wealth_listOut)
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__callFinancialAssessment$Action
        }
        set _callFinancialAssessment$Action(t) {
            this.__callFinancialAssessment$Action = t
        }
        get _stopOnboardingOnContinue$Action() {
            return this.hasOwnProperty("__stopOnboardingOnContinue$Action") || (this.__stopOnboardingOnContinue$Action = function(t) {
                var i = this.model,
                    n = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("StopOnboardingOnContinue", function(r) {
                    r && (r.setAttribute("code.function", "StopOnboardingOnContinue"), r.setAttribute("outsystems.function.key", "41f034b8-9d68-4a50-b882-6b8628a30a3a"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("StopOnboardingOnContinue"), t = n.callContext(t), i.variables.showStopOnboardingVar = !i.variables.showStopOnboardingVar
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__stopOnboardingOnContinue$Action
        }
        set _stopOnboardingOnContinue$Action(t) {
            this.__stopOnboardingOnContinue$Action = t
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(t) {
                var i = this.model,
                    n = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("OnReady", function(r) {
                    return r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "636cf004-f895-4aa2-85b5-4f49a0ac1e22"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        n.ensureControllerAlive("OnReady"), t = n.callContext(t);
                        var s = new e.DataTypes.VariableHolder,
                            y = new e.DataTypes.VariableHolder,
                            a = new e.DataTypes.VariableHolder,
                            b = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                            p = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                            _ = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(e.GenericTypeCache.getGenericList(h)))),
                            c = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(T)));
                        return e.Flow.executeAsyncFlow(function() {
                            return a.value = O.getAuth$Action(t), i.variables.is_loadingVar = !0, O.consoleLog$Action(u.getemployment_status_list(), t), e.Flow.executeSequence(function() {
                                if (u.getemployment_status_list() === e.BuiltinFunctions.nullTextIdentifier()) return i.flush(), n.getOnboardingConfig$ServerAction(u.getresidence(), a.value.tokenOut, t).then(function(f) {
                                    s.value = f
                                }).then(function() {
                                    b.value.jSONOut = e.JSONUtils.serializeToJSON(s.value.responseOut.dataAttr.getCurrent(t.iterationContext).employment_statusAttr, !1, !1), i.variables.employment_status_listVar = s.value.responseOut.dataAttr.getItem(0).employment_statusAttr
                                });
                                _.value.dataOut = e.JSONUtils.deserializeFromJSON(u.getemployment_status_list(), e.GenericTypeCache.getGenericList(h), !1), i.variables.employment_status_listVar = _.value.dataOut
                            }).then(function() {
                                return e.Flow.executeSequence(function() {
                                    if (u.getgetTaxAPIResponse() === e.BuiltinFunctions.nullTextIdentifier()) return i.flush(), n.getTaxInformation$ServerAction(a.value.tokenOut, t).then(function(f) {
                                        y.value = f
                                    }).then(function() {
                                        p.value.jSONOut = e.JSONUtils.serializeToJSON(y.value.responseOut, !1, !1), u.setgetTaxAPIResponse(p.value.jSONOut), u.setemployment_status(u.getemployment_status() === e.BuiltinFunctions.nullTextIdentifier() ? y.value.responseOut.dataAttr.getCurrent(t.iterationContext).tax_informationAttr.employment_statusAttr : u.getemployment_status())
                                    });
                                    c.value.dataOut = e.JSONUtils.deserializeFromJSON(u.getgetTaxAPIResponse(), T, !1), u.setemployment_status(u.getemployment_status() === e.BuiltinFunctions.nullTextIdentifier() ? c.value.dataOut.dataAttr.getCurrent(t.iterationContext).tax_informationAttr.employment_statusAttr : u.getemployment_status())
                                })
                            }).then(function() {
                                i.variables.is_loadingVar = !1
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(t) {
            this.__onReady$Action = t
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(t) {
                var i = this.model,
                    n = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("OnInitialize", function(r) {
                    r && (r.setAttribute("code.function", "OnInitialize"), r.setAttribute("outsystems.function.key", "93f90747-d559-4661-b18e-f20cda975e53"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("OnInitialize"), t = n.callContext(t), u.setRealSignupCurrentStep(4)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(t) {
            this.__onInitialize$Action = t
        }
        get _nextStep$Action() {
            return this.hasOwnProperty("__nextStep$Action") || (this.__nextStep$Action = function(t) {
                var i = this.model,
                    n = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("NextStep", function(r) {
                    r && (r.setAttribute("code.function", "NextStep"), r.setAttribute("outsystems.function.key", "a51eb72b-226a-47b3-984c-2e62ab852ca0"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return n.ensureControllerAlive("NextStep"), t = n.callContext(t), e.Logger.startActiveSpan("JavaScript1", function(s) {
                            s && (s.setAttribute("code.function", "JavaScript1"), s.setAttribute("outsystems.function.key", "884d9ec8-8d76-40ea-9da5-916574b8ff74"), s.setAttribute("outsystems.function.owner.name", "uae"), s.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return n.safeExecuteJSNode(B, "JavaScript1", "NextStep", null, function(y) {}, {
                                    CallFinancialAssessment: n.clientActionProxies.callFinancialAssessment$Action
                                }, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1), e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "foreign-tax", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.None), t, !0)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__nextStep$Action
        }
        set _nextStep$Action(t) {
            this.__nextStep$Action = t
        }
        get _listItemOnClick$Action() {
            return this.hasOwnProperty("__listItemOnClick$Action") || (this.__listItemOnClick$Action = function(t, i) {
                var n = this.model,
                    o = this.controller,
                    r = this.idService;
                return e.Logger.startActiveSpan("ListItemOnClick", function(s) {
                    return s && (s.setAttribute("code.function", "ListItemOnClick"), s.setAttribute("outsystems.function.key", "ffe33dfa-1fc2-4af0-8e0f-28f5e46f3399"), s.setAttribute("outsystems.function.owner.name", "uae"), s.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        o.ensureControllerAlive("ListItemOnClick"), i = o.callContext(i);
                        var y = new e.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("uae.OnboardingFlow.EmploymentStatus.ListItemOnClick$vars")));
                        y.value.selectedInLocal = t;
                        var a = new e.DataTypes.VariableHolder,
                            b = new e.DataTypes.VariableHolder;
                        return e.Flow.executeAsyncFlow(function() {
                            return b.value = O.getAuth$Action(i), u.setemployment_status(y.value.selectedInLocal), n.flush(), o.postTaxinformation$ServerAction(b.value.tokenOut, (function() {
                                var p = new ee;
                                return p.employment_statusAttr = u.getemployment_status(), p
                            })(), i).then(function(p) {
                                a.value = p
                            }).then(function() {
                                n.variables.is_loadingVar = !0, n.variables.is_loadingVar = !1
                            })
                        })
                    }, function() {
                        s && s.end()
                    })
                }, 1)
            }), this.__listItemOnClick$Action
        }
        set _listItemOnClick$Action(t) {
            this.__listItemOnClick$Action = t
        }
        onClickPrevious$Action(t) {
            var i = this.controller;
            return e.Logger.startActiveSpan("OnClickPrevious__proxy", function(n) {
                n && (n.setAttribute("code.function", "OnClickPrevious"), n.setAttribute("outsystems.function.key", "0b5ba9bb-8763-45c3-a46f-e8f9c2782015"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onClickPrevious$Action, t)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        callFinancialAssessment$Action(t) {
            var i = this.controller;
            return e.Logger.startActiveSpan("CallFinancialAssessment__proxy", function(n) {
                return n && (n.setAttribute("code.function", "CallFinancialAssessment"), n.setAttribute("outsystems.function.key", "0cbde81e-4f18-47f4-9fc4-31a7336e1494"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._callFinancialAssessment$Action, t)
                }, function() {
                    n && n.end()
                })
            }, 0)
        }
        stopOnboardingOnContinue$Action(t) {
            var i = this.controller;
            return e.Logger.startActiveSpan("StopOnboardingOnContinue__proxy", function(n) {
                n && (n.setAttribute("code.function", "StopOnboardingOnContinue"), n.setAttribute("outsystems.function.key", "41f034b8-9d68-4a50-b882-6b8628a30a3a"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._stopOnboardingOnContinue$Action, t)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        onReady$Action(t) {
            var i = this.controller;
            return e.Logger.startActiveSpan("OnReady__proxy", function(n) {
                return n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "636cf004-f895-4aa2-85b5-4f49a0ac1e22"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._onReady$Action, t)
                }, function() {
                    n && n.end()
                })
            }, 0)
        }
        onInitialize$Action(t) {
            var i = this.controller;
            return e.Logger.startActiveSpan("OnInitialize__proxy", function(n) {
                n && (n.setAttribute("code.function", "OnInitialize"), n.setAttribute("outsystems.function.key", "93f90747-d559-4661-b18e-f20cda975e53"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onInitialize$Action, t)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        nextStep$Action(t) {
            var i = this.controller;
            return e.Logger.startActiveSpan("NextStep__proxy", function(n) {
                n && (n.setAttribute("code.function", "NextStep"), n.setAttribute("outsystems.function.key", "a51eb72b-226a-47b3-984c-2e62ab852ca0"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._nextStep$Action, t)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        listItemOnClick$Action(t, i) {
            var n = this.controller;
            return e.Logger.startActiveSpan("ListItemOnClick__proxy", function(o) {
                return o && (o.setAttribute("code.function", "ListItemOnClick"), o.setAttribute("outsystems.function.key", "ffe33dfa-1fc2-4af0-8e0f-28f5e46f3399"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._listItemOnClick$Action, i, t)
                }, function() {
                    o && o.end()
                })
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(t) {
                var i = this.controller,
                    n = this.model,
                    o = this.idService;
                return i.onInitialize$Action(t)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(t) {
            this._onInitializeEventHandler = t
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(t) {
                var i = this.controller,
                    n = this.model,
                    o = this.idService;
                return i.onReady$Action(t)
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
                return W.default.handleError(t, this.callContext())
            }), this._handleError
        }
        set handleError(t) {
            this._handleError = t
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return O.defaultTimeout
        }
    };
    l(g, "ControllerInner");
    let d = g;
    C = d, C.registerVariableGroupType("uae.OnboardingFlow.EmploymentStatus$ActionFetchFinancialassessmentConfig", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: e.DataTypes.DataTypes.Record,
        defaultValue: l(function() {
            return new D
        }, "defaultValue"),
        complexType: D
    }]), C.registerVariableGroupType("uae.OnboardingFlow.EmploymentStatus$ActionGetOnboardingConfig", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: e.DataTypes.DataTypes.Record,
        defaultValue: l(function() {
            return new E
        }, "defaultValue"),
        complexType: E
    }]), C.registerVariableGroupType("uae.OnboardingFlow.EmploymentStatus$ActionGetTaxInformation", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: e.DataTypes.DataTypes.Record,
        defaultValue: l(function() {
            return new T
        }, "defaultValue"),
        complexType: T
    }]), C.registerVariableGroupType("uae.OnboardingFlow.EmploymentStatus$ActionPostTaxinformation", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: e.DataTypes.DataTypes.Record,
        defaultValue: l(function() {
            return new P
        }, "defaultValue"),
        complexType: P
    }]), C.registerVariableGroupType("uae.OnboardingFlow.EmploymentStatus.CallFinancialAssessment$getValuesJSResult", [{
        name: "education_level_list",
        attrName: "education_level_listOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "estimated_net_worth_list",
        attrName: "estimated_net_worth_listOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "industry_of_employment_list",
        attrName: "industry_of_employment_listOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "net_annual_income_list",
        attrName: "net_annual_income_listOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "occupation_list",
        attrName: "occupation_listOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "regular_expenses_list",
        attrName: "regular_expenses_listOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "source_of_income_list",
        attrName: "source_of_income_listOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "source_of_wealth_list",
        attrName: "source_of_wealth_listOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }]), C.registerVariableGroupType("uae.OnboardingFlow.EmploymentStatus.ListItemOnClick$vars", [{
        name: "selected",
        attrName: "selectedInLocal",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }])
}
var C, U = new e.Controller.ControllerFactory(C, te);
var v = _e(ve());
var A = x,
    Z = class Z extends A.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("employment_status_list", "employment_status_listVar", "employment_status_list", !0, !1, A.DataTypes.DataTypes.RecordList, function() {
                return A.DataTypes.ImmutableBase.getData(new(A.GenericTypeCache.getGenericList(h)))
            }, !1, A.GenericTypeCache.getGenericList(h)), this.attr("is_loading", "is_loadingVar", "is_loading", !0, !1, A.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("ShowStopOnboarding", "showStopOnboardingVar", "ShowStopOnboarding", !0, !1, A.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1)].concat(A.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
l(Z, "VariablesRecord");
var N = Z;
N.init();
var K = class K extends A.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
l(K, "WidgetsRecord");
var j = K,
    w = class w extends A.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return N
        }
        static getWidgetsRecordConstructor() {
            return j
        }
        static get hasValidationWidgets() {
            return w._hasValidationWidgetsValue === void 0 && (w._hasValidationWidgetsValue = void 0 || void 0), w._hasValidationWidgetsValue
        }
        setInputs(g) {}
    };
l(w, "Model");
var R = w;
R._hasValidationWidgetsValue = void 0;
var q = new A.Model.ModelFactory(R);
var V = k.PlaceholderContent,
    Se = k.IteratorPlaceholderContent,
    Ae = l(function() {
        var d = re(function(g) {
            var m = g.model,
                t = g.controller,
                i = g.controller.idService,
                n = t.validationService,
                o = t.callContext(),
                r = L,
                s = H,
                y = {
                    props: g,
                    validateWidget: l(function(c) {
                        g.validateWidget(g, c)
                    }, "validateWidget")
                },
                a = m,
                b = oe,
                p = ie,
                _ = ne();
            return v.createElement("div", g.rootNodeProperties, v.createElement(M, {
                getOwnerSpan: l(function() {
                    return _.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: l(function() {
                    return _.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ProgressBarPercentage: 50,
                    shouldShowProgressBarInMobile: !0,
                    Title: I.resolve(F.TranslationsService).getMessage("PEZtpXt9aEGtwg5+o1Fe6A#Value.-1037113639.1", "Financial assessment"),
                    ShouldEmitPreviousEvent: !0
                },
                events: {
                    _handleError: l(function(c) {
                        t.handleError(c)
                    }, "_handleError"),
                    onClickPrevious$Action: l(function() {
                        var c = typeof o != "undefined" && o !== null ? o.clone() : t.callContext().clone();
                        t.onClickPrevious$Action(t.callContext(c))
                    }, "onClickPrevious$Action")
                },
                _validationProps: {
                    validationService: n
                },
                _idProps: {
                    service: i,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: a,
                placeholders: {
                    content: new V(function() {
                        return [v.createElement(S, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-bottom: 48px;"
                            },
                            style: "flex flex-col gap-y-4",
                            visible: !0,
                            _idProps: {
                                service: i,
                                name: "FormContainer"
                            },
                            _widgetRecordProvider: a
                        }, v.createElement(S, {
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
                        }, v.createElement(J, {
                            extendedProperties: {
                                style: "font-weight: 900;"
                            },
                            text: [p(s("HBDg_fC2QkKcIjw3xIEfeg#Value", "Your employment status"))],
                            _idProps: {
                                service: i,
                                uuid: "3"
                            },
                            _widgetRecordProvider: a
                        })), b(m.variables.is_loadingVar, !1, this, function() {
                            return [v.createElement(S, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "margin-top: 4px;"
                                },
                                gridProperties: {
                                    classes: "OSInline"
                                },
                                style: "animate-pulse w-full employment list-container",
                                visible: !0,
                                _idProps: {
                                    service: i,
                                    name: "LoaderContainer"
                                },
                                _widgetRecordProvider: a
                            }, v.createElement(S, {
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
                            }), v.createElement(S, {
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
                            }), v.createElement(S, {
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
                                    name: "ListItemPlaceholder3"
                                },
                                _widgetRecordProvider: a
                            }), v.createElement(S, {
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
                                    name: "ListItemPlaceholder4"
                                },
                                _widgetRecordProvider: a
                            }))]
                        }, function() {
                            return [v.createElement(S, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: i,
                                    uuid: "9"
                                },
                                _widgetRecordProvider: a
                            }, v.createElement(le, {
                                animateItems: !0,
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                mode: 0,
                                source: m.variables.employment_status_listVar,
                                style: "employment list-container list list-group",
                                tag: "div",
                                _idProps: {
                                    service: i,
                                    name: "EmploymentStatusList"
                                },
                                _widgetRecordProvider: a,
                                placeholders: {
                                    content: new Se(function(c, f) {
                                        return [v.createElement(ue, {
                                            extendedProperties: {
                                                style: "border: 1px solid rgba(0, 0, 0, 0.04);"
                                            },
                                            onClick: l(function() {
                                                return Promise.resolve().then(function() {
                                                    var ye = typeof f != "undefined" && f !== null ? f.clone() : t.callContext().clone();
                                                    return t.listItemOnClick$Action(m.variables.employment_status_listVar.getCurrent(f.iterationContext).valueAttr, t.callContext(ye))
                                                })
                                            }, "onClick"),
                                            style: m.getCachedValue(c.getId("ListItem.Style"), function() {
                                                return m.variables.employment_status_listVar.getCurrent(f.iterationContext).valueAttr === u.getemployment_status() ? "employment list-item item-selected" : "employment list-item"
                                            }, function() {
                                                return m.variables.employment_status_listVar.getCurrent(f.iterationContext).valueAttr
                                            }, function() {
                                                return u.getemployment_status()
                                            }),
                                            triggerActionOnFullSwipeLeft: !1,
                                            triggerActionOnFullSwipeRight: !1,
                                            _idProps: {
                                                service: c,
                                                name: "ListItem"
                                            },
                                            _widgetRecordProvider: a,
                                            placeholders: {
                                                leftActions: V.Empty,
                                                content: new V(function() {
                                                    return [v.createElement(S, {
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
                                                            service: c,
                                                            uuid: "12"
                                                        },
                                                        _widgetRecordProvider: a
                                                    }, v.createElement(se, {
                                                        value: m.getCachedValue(c.getId("Fk62VdaqZ0ekAUs_FWfWZw.Value"), function() {
                                                            return O.translate$Action(m.variables.employment_status_listVar.getCurrent(f.iterationContext).labelAttr, f).translatedTextOut
                                                        }, function() {
                                                            return m.variables.employment_status_listVar.getCurrent(f.iterationContext).labelAttr
                                                        }),
                                                        _idProps: {
                                                            service: c,
                                                            uuid: "13"
                                                        },
                                                        _widgetRecordProvider: a
                                                    }), v.createElement(S, {
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
                                                            service: c,
                                                            uuid: "14"
                                                        },
                                                        _widgetRecordProvider: a
                                                    }, b(m.variables.employment_status_listVar.getCurrent(f.iterationContext).valueAttr === u.getemployment_status(), !1, this, function() {
                                                        return [v.createElement(ce, {
                                                            image: Q.VersionedURL.getVersionedUrl("img/uae.circlecheck.svg"),
                                                            type: 0,
                                                            _idProps: {
                                                                service: c,
                                                                uuid: "15"
                                                            },
                                                            _widgetRecordProvider: a
                                                        })]
                                                    }, function() {
                                                        return []
                                                    })))]
                                                }),
                                                rightActions: V.Empty
                                            },
                                            _dependencies: [r(u.getemployment_status()), r(m.variables.employment_status_listVar.getCurrent(f.iterationContext).valueAttr), r(m.variables.employment_status_listVar.getCurrent(f.iterationContext).labelAttr)]
                                        })]
                                    }, o, i, "1")
                                },
                                _dependencies: [r(u.getemployment_status())]
                            }))]
                        }), v.createElement(S, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "background: white; margin-top: 24px; text-align: right;"
                            },
                            style: m.getCachedValue(i.getId("ButtonContainer.Style"), function() {
                                return $.isDesktop$Action(o).isDesktopOut ? "flex justify-content-flex-end" : "fixed bottom-0 left-0 w-full flex justify-center p-4"
                            }),
                            visible: !0,
                            _idProps: {
                                service: i,
                                name: "ButtonContainer"
                            },
                            _widgetRecordProvider: a
                        }, v.createElement(ae, {
                            enabled: m.getCachedValue(i.getId("NextButton3.Enabled"), function() {
                                return u.getemployment_status() !== Y.nullTextIdentifier() && !m.variables.is_loadingVar
                            }, function() {
                                return u.getemployment_status()
                            }, function() {
                                return m.variables.is_loadingVar
                            }),
                            extendedProperties: {
                                style: "border-radius: 24px;"
                            },
                            gridProperties: {
                                width: "96px"
                            },
                            isDefault: !1,
                            onClick: l(function() {
                                var c = typeof o != "undefined" && o !== null ? o.clone() : t.callContext().clone();
                                t.nextStep$Action(t.callContext(c))
                            }, "onClick"),
                            style: m.getCachedValue(i.getId("NextButton3.Style"), function() {
                                return $.isDesktop$Action(o).isDesktopOut ? "btn btn-primary" : "btn btn-primary action-button"
                            }),
                            visible: !0,
                            _idProps: {
                                service: i,
                                name: "NextButton3"
                            },
                            _widgetRecordProvider: a
                        }, v.createElement(J, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: bold;"
                            },
                            text: [p(s("9KGfL9MeoUGYFoiwIUDYbA#Value", "Next"))],
                            _idProps: {
                                service: i,
                                uuid: "18"
                            },
                            _widgetRecordProvider: a
                        }))))]
                    })
                },
                _dependencies: [r(u.getemployment_status()), r(m.variables.employment_status_listVar), r(m.variables.is_loadingVar)]
            }), v.createElement(G, {
                getOwnerSpan: l(function() {
                    return _.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: l(function() {
                    return _.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ShouldShow: m.variables.showStopOnboardingVar
                },
                events: {
                    _handleError: l(function(c) {
                        t.handleError(c)
                    }, "_handleError"),
                    onContinue$Action: l(function() {
                        var c = typeof o != "undefined" && o !== null ? o.clone() : t.callContext().clone();
                        t.stopOnboardingOnContinue$Action(t.callContext(c))
                    }, "onContinue$Action")
                },
                _validationProps: {
                    validationService: n
                },
                _idProps: {
                    service: i,
                    uuid: "19",
                    alias: "2"
                },
                _widgetRecordProvider: a,
                _dependencies: []
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: l(function() {
                return {
                    codeFunction: "EmploymentStatus",
                    functionKey: "7b5d5bfb-464f-4644-b1a0-6e35396daede",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "OnboardingFlow.EmploymentStatus",
            modelFactory: q,
            controllerFactory: U,
            getTitle: l(function(g) {
                var m = g.model,
                    t = g.controller,
                    i = g.controller.idService,
                    n = t.validationService,
                    o = t.callContext(),
                    r = L,
                    s = H,
                    y = {
                        props: g,
                        validateWidget: l(function(a) {
                            g.validateWidget(g, a)
                        }, "validateWidget")
                    };
                return I.resolve(F.TranslationsService).getMessage("+1tde09GREaxoG41OW2u3g#TitleExpression.1370304672.1", "Employment status | Deriv")
            }, "getTitle")
        });
        return d.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.OnboardingFlow.EmploymentStatus.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, d.getJsDependencies = function() {
            return []
        }, d.getBlocks = function() {
            return [M, G]
        }, d
    }, "componentFactory"),
    Oe = Ae();
export {
    U as controllerModule, q as modelModule, Oe as viewModule, W as webFlowControllerModule
};