import {
    a as Y
} from "./_oschunk-NLNJ5SA5.js";
import {
    a as Z
} from "./_oschunk-JF3PYARS.js";
import "./_oschunk-6RCCOD74.js";
import "./_oschunk-7SYLUYK7.js";
import "./_oschunk-UZGD3HJ2.js";
import {
    a as Pe
} from "./_oschunk-GYGHMTX2.js";
import "./_oschunk-L6JZD7VU.js";
import "./_oschunk-YVFTECWM.js";
import {
    b as De,
    f as w,
    h as K,
    i as Ee,
    j as xe,
    n as Ne,
    u as Re
} from "./_oschunk-VR5BNL2K.js";
import {
    a as Ce,
    g as D,
    m as G,
    n as we,
    o as Oe,
    q as M,
    r as W,
    s as R,
    t as I
} from "./_oschunk-4VHUVDBV.js";
import {
    a as Q
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    L as pe,
    Pa as F,
    Qb as J,
    Sb as C,
    bb as H,
    cb as L,
    sa as P,
    ub as _
} from "./_oschunk-Z7QRTJDJ.js";
import {
    I as N,
    W as O,
    a as me,
    b as Ae,
    c as o,
    e as Te,
    m as V,
    n as k,
    p as _e,
    w as he
} from "./_oschunk-M5BUVJ72.js";
var Le = {
        "td1zCboB50igE6vrVJIfeg#Title": "\u0642\u0627\u0628\u0644\u064A\u0629 \u0627\u0644\u062A\u062F\u0627\u0648\u0644 | Deriv",
        "td1zCboB50igE6vrVJIfeg#TitleExpression.858924792.1": "\u0642\u0627\u0628\u0644\u064A\u0629 \u0627\u0644\u062A\u062F\u0627\u0648\u0644 | Deriv"
    },
    Ie = {
        "ar-001": {
            translations: Le,
            isRTL: !0
        }
    };

function ee(l, d, f) {
    l.PostTradingSuitability()
}
o(ee, "default");

function te(l, d, f, e) {
    var t;
    let r = JSON.parse((t = l.TAValues) != null ? t : "{}");
    l.NewData = JSON.stringify(Ae(me({}, r), {
        [l.Ref]: l.Answer
    }))
}
o(te, "default");

function ne(l, d, f, e) {
    var r, t, i, a;
    if (l.TradingSuitabilitydata) {
        let s = JSON.parse(l.TradingSuitabilitydata);
        l.previous_trading_experience = (r = s.previous_trading_experience) != null ? r : "", l.trading_experience = (t = s.trading_experience) != null ? t : "", l.investment_risk = (i = s.investment_risk) != null ? i : "", l.potential_loss = (a = s.potential_loss) != null ? a : ""
    } else l.previous_trading_experience = "", l.trading_experience = "", l.investment_risk = "", l.potential_loss = ""
}
o(ne, "default");

function ie(l, d, f, e) {
    let r = JSON.parse(l.Config),
        i = o(a => {
            let s = [];
            return a.data && Array.isArray(a.data) && a.data.forEach(u => {
                for (let c in u) {
                    if (!Object.keys(u[c]).length) continue;
                    let y = u[c].question,
                        S = u[c].answer;
                    s.push({
                        question: y,
                        answers: S,
                        ref: c
                    })
                }
            }), s
        }, "convertData")(r);
    l.ParsedData = JSON.stringify(i)
}
o(ie, "default");

function re(l, d, f, e) {
    let r = JSON.parse(l.ConfigData);
    l.SelectedObj = JSON.stringify(r[l.Index])
}
o(re, "default");

function ae(l, d, f, e) {
    let r = o((a, s) => a.reduce((u, c) => {
        let [y, S] = Object.entries(c)[0], v = Object.values(s).find(b => b.question === S.question);
        return v && (u[y] = v.answer), u
    }, {}), "transformResult");
    console.log("test", JSON.parse(l.config)), console.log("teszzt", JSON.parse(l.resultData));
    let t = JSON.parse(l.config).data,
        i = r(t, JSON.parse(l.resultData));
    console.log(i), l.finalResult = JSON.stringify(i)
}
o(ae, "default");
var n = O; {
    let d = class d extends n.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, Ie);
            var i = this.controller;
            this.clientActionProxies = {
                postTradingSuitability$Action: o(function() {
                    return i.executeActionInsideJSNode(i._postTradingSuitability$Action.bind(i), i.callContext(), function(a) {
                        return {}
                    }, function() {}, "PostTradingSuitability")
                }, "postTradingSuitability$Action")
            }, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get pOSTTradingAssessment$ServerAction() {
            return this.hasOwnProperty("_pOSTTradingAssessment$ServerAction") || (this._pOSTTradingAssessment$ServerAction = function(e, r, t) {
                var i = this.controller;
                return n.Logger.startActiveSpan("POSTTradingAssessment", function(a) {
                    return a && (a.setAttribute("code.function", "POSTTradingAssessment"), a.setAttribute("outsystems.function.key", "5ae9ccc0-2939-4ce8-a493-fe73ecf3d308"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), n.Flow.tryFinally(function() {
                        var s = {
                            Authorization: n.DataConversion.ServerDataConverter.to(e, n.DataTypes.DataTypes.Text),
                            Request: n.DataConversion.ServerDataConverter.to(r, n.DataTypes.DataTypes.Record)
                        };
                        return i.callServerAction("POSTTradingAssessment", "screenservices/uae/OnboardingFlow/TradingSuitablity/ActionPOSTTradingAssessment", "KUXoXX+YsGaG1QbYmstVFQ", s, i.callContext(t), void 0, void 0, !0).then(function(u) {
                            var c = new(i.constructor.getVariableGroupType("uae.OnboardingFlow.TradingSuitablity$ActionPOSTTradingAssessment"));
                            return c.responseOut = n.DataConversion.ServerDataConverter.from(u.Response, H), c
                        })
                    }, function() {
                        a && a.end()
                    })
                }, 0)
            }), this._pOSTTradingAssessment$ServerAction
        }
        set pOSTTradingAssessment$ServerAction(e) {
            this._pOSTTradingAssessment$ServerAction = e
        }
        get getTradingSuitabilityConfig$ServerAction() {
            return this.hasOwnProperty("_getTradingSuitabilityConfig$ServerAction") || (this._getTradingSuitabilityConfig$ServerAction = function(e, r) {
                var t = this.controller;
                return n.Logger.startActiveSpan("GetTradingSuitabilityConfig", function(i) {
                    return i && (i.setAttribute("code.function", "GetTradingSuitabilityConfig"), i.setAttribute("outsystems.function.key", "42d9d282-5ef4-47d9-adb6-3d29dbaf22bd"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), n.Flow.tryFinally(function() {
                        var a = {
                            Authorization: n.DataConversion.ServerDataConverter.to(e, n.DataTypes.DataTypes.Text)
                        };
                        return t.callServerAction("GetTradingSuitabilityConfig", "screenservices/uae/OnboardingFlow/TradingSuitablity/ActionGetTradingSuitabilityConfig", "kbU0NMdf6ssgJmGZ3Nq3MA", a, t.callContext(r), void 0, void 0, !0).then(function(s) {
                            var u = new(t.constructor.getVariableGroupType("uae.OnboardingFlow.TradingSuitablity$ActionGetTradingSuitabilityConfig"));
                            return u.responseOut = n.DataConversion.ServerDataConverter.from(s.Response, L), u
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 0)
            }), this._getTradingSuitabilityConfig$ServerAction
        }
        set getTradingSuitabilityConfig$ServerAction(e) {
            this._getTradingSuitabilityConfig$ServerAction = e
        }
        get getTradingAssessmentResults$ServerAction() {
            return this.hasOwnProperty("_getTradingAssessmentResults$ServerAction") || (this._getTradingAssessmentResults$ServerAction = function(e, r) {
                var t = this.controller;
                return n.Logger.startActiveSpan("GetTradingAssessmentResults", function(i) {
                    return i && (i.setAttribute("code.function", "GetTradingAssessmentResults"), i.setAttribute("outsystems.function.key", "a38011a4-e9b3-48f8-86b3-b3f724d4ce4d"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), n.Flow.tryFinally(function() {
                        var a = {
                            authorization: n.DataConversion.ServerDataConverter.to(e, n.DataTypes.DataTypes.Text)
                        };
                        return t.callServerAction("GetTradingAssessmentResults", "screenservices/uae/OnboardingFlow/TradingSuitablity/ActionGetTradingAssessmentResults", "B+SZ8U0IPpsoTpiKO+p57Q", a, t.callContext(r), void 0, void 0, !0).then(function(s) {
                            var u = new(t.constructor.getVariableGroupType("uae.OnboardingFlow.TradingSuitablity$ActionGetTradingAssessmentResults"));
                            return u.responseOut = n.DataConversion.ServerDataConverter.from(s.Response, F), u
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 0)
            }), this._getTradingAssessmentResults$ServerAction
        }
        set getTradingAssessmentResults$ServerAction(e) {
            this._getTradingAssessmentResults$ServerAction = e
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _tradingSuitabilityQuestionHandlePrevious$Action() {
            return this.hasOwnProperty("__tradingSuitabilityQuestionHandlePrevious$Action") || (this.__tradingSuitabilityQuestionHandlePrevious$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return n.Logger.startActiveSpan("TradingSuitabilityQuestionHandlePrevious", function(a) {
                    a && (a.setAttribute("code.function", "TradingSuitabilityQuestionHandlePrevious"), a.setAttribute("outsystems.function.key", "03e11e75-0d1f-489d-8ce1-8f7b137b0089"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        if (t.ensureControllerAlive("TradingSuitabilityQuestionHandlePrevious"), e = t.callContext(e), C.consoleLog$Action("CurrentPos" + r.variables.currentPosIn.toString(), e), r.variables.currentPosIn - 1 < 0) return n.Navigation.navigateTo(n.Navigation.generateScreenURL("uae", "monthly-essential-expenditure", {}), n.Transitions.createTransition(n.Transitions.TransitionAnimation.None), e, !0);
                        r.variables.currentPosIn = r.variables.currentPosIn - 1, t._pickQuestion$Action(r.variables.currentPosIn, e)
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__tradingSuitabilityQuestionHandlePrevious$Action
        }
        set _tradingSuitabilityQuestionHandlePrevious$Action(e) {
            this.__tradingSuitabilityQuestionHandlePrevious$Action = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return n.Logger.startActiveSpan("OnInitialize", function(a) {
                    a && (a.setAttribute("code.function", "OnInitialize"), a.setAttribute("outsystems.function.key", "0d846533-332b-41d9-ac48-da8ea1705640"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e), _.setRealSignupCurrentStep(5)
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        get _submitTradingSuitability$Action() {
            return this.hasOwnProperty("__submitTradingSuitability$Action") || (this.__submitTradingSuitability$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return n.Logger.startActiveSpan("SubmitTradingSuitability", function(a) {
                    a && (a.setAttribute("code.function", "SubmitTradingSuitability"), a.setAttribute("outsystems.function.key", "0f5243b5-c180-4717-9e7a-2bb7c9537a0e"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("SubmitTradingSuitability"), e = t.callContext(e);
                        var s = new n.DataTypes.VariableHolder;
                        s.value = C.getAuth$Action(e), n.Logger.startActiveSpan("AsyncPostTradingSuitability", function(u) {
                            u && (u.setAttribute("code.function", "AsyncPostTradingSuitability"), u.setAttribute("outsystems.function.key", "11f8ace4-ddff-4ac1-89c6-5e16fd0c59f8"), u.setAttribute("outsystems.function.owner.name", "uae"), u.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), u.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(ee, "AsyncPostTradingSuitability", "SubmitTradingSuitability", null, function(c) {}, {
                                    PostTradingSuitability: t.clientActionProxies.postTradingSuitability$Action
                                }, {})
                            } finally {
                                u && u.end()
                            }
                        }, 1)
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__submitTradingSuitability$Action
        }
        set _submitTradingSuitability$Action(e) {
            this.__submitTradingSuitability$Action = e
        }
        get _tradingSuitabilityQuestionSelectedAnswer$Action() {
            return this.hasOwnProperty("__tradingSuitabilityQuestionSelectedAnswer$Action") || (this.__tradingSuitabilityQuestionSelectedAnswer$Action = function(e, r) {
                var t = this.model,
                    i = this.controller,
                    a = this.idService;
                return n.Logger.startActiveSpan("TradingSuitabilityQuestionSelectedAnswer", function(s) {
                    return s && (s.setAttribute("code.function", "TradingSuitabilityQuestionSelectedAnswer"), s.setAttribute("outsystems.function.key", "3498b508-cc92-4be2-910f-b9335eb8bc01"), s.setAttribute("outsystems.function.owner.name", "uae"), s.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                        i.ensureControllerAlive("TradingSuitabilityQuestionSelectedAnswer"), r = i.callContext(r);
                        var u = new n.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("uae.OnboardingFlow.TradingSuitablity.TradingSuitabilityQuestionSelectedAnswer$vars")));
                        u.value.answerInLocal = e;
                        var c = new n.DataTypes.VariableHolder;
                        return n.Flow.executeAsyncFlow(function() {
                            return c.value = n.Logger.startActiveSpan("Storingdata", function(y) {
                                y && (y.setAttribute("code.function", "Storingdata"), y.setAttribute("outsystems.function.key", "5f6dbe97-1474-48ee-8cd1-aeedfc31f8fc"), y.setAttribute("outsystems.function.owner.name", "uae"), y.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), y.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return i.safeExecuteJSNode(te, "Storingdata", "TradingSuitabilityQuestionSelectedAnswer", {
                                        TAValues: n.DataConversion.JSNodeParamConverter.to(_.gettrading_suitability() !== n.BuiltinFunctions.nullTextIdentifier() ? _.gettrading_suitability() : "{}", n.DataTypes.DataTypes.Text),
                                        Answer: n.DataConversion.JSNodeParamConverter.to(u.value.answerInLocal, n.DataTypes.DataTypes.Text),
                                        Ref: n.DataConversion.JSNodeParamConverter.to(t.variables.selectedTAConfigVar.refAttr, n.DataTypes.DataTypes.Text),
                                        NewData: n.DataConversion.JSNodeParamConverter.to("", n.DataTypes.DataTypes.Text)
                                    }, function(S) {
                                        var v = new(i.constructor.getVariableGroupType("uae.OnboardingFlow.TradingSuitablity.TradingSuitabilityQuestionSelectedAnswer$storingdataJSResult"));
                                        return v.newDataOut = n.DataConversion.JSNodeParamConverter.from(S.NewData, n.DataTypes.DataTypes.Text), v
                                    }, {}, {})
                                } finally {
                                    y && y.end()
                                }
                            }, 1), _.settrading_suitability(c.value.newDataOut), i._onReady$Action(r)
                        })
                    }, function() {
                        s && s.end()
                    })
                }, 1)
            }), this.__tradingSuitabilityQuestionSelectedAnswer$Action
        }
        set _tradingSuitabilityQuestionSelectedAnswer$Action(e) {
            this.__tradingSuitabilityQuestionSelectedAnswer$Action = e
        }
        get _postTradingSuitability$Action() {
            return this.hasOwnProperty("__postTradingSuitability$Action") || (this.__postTradingSuitability$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return n.Logger.startActiveSpan("PostTradingSuitability", function(a) {
                    return a && (a.setAttribute("code.function", "PostTradingSuitability"), a.setAttribute("outsystems.function.key", "72563338-cecc-4ae7-8b6a-3bf6c2483403"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                        t.ensureControllerAlive("PostTradingSuitability"), e = t.callContext(e);
                        var s = new n.DataTypes.VariableHolder,
                            u = new n.DataTypes.VariableHolder,
                            c = new n.DataTypes.VariableHolder;
                        return n.Flow.executeAsyncFlow(function() {
                            return u.value = C.getAuth$Action(e), c.value = n.Logger.startActiveSpan("GeneratePayload", function(y) {
                                y && (y.setAttribute("code.function", "GeneratePayload"), y.setAttribute("outsystems.function.key", "e8b6eaf1-0bda-4739-9d47-ad972e120613"), y.setAttribute("outsystems.function.owner.name", "uae"), y.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), y.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return t.safeExecuteJSNode(ne, "GeneratePayload", "PostTradingSuitability", {
                                        TradingSuitabilitydata: n.DataConversion.JSNodeParamConverter.to(_.gettrading_suitability(), n.DataTypes.DataTypes.Text),
                                        previous_trading_experience: n.DataConversion.JSNodeParamConverter.to("", n.DataTypes.DataTypes.Text),
                                        trading_experience: n.DataConversion.JSNodeParamConverter.to("", n.DataTypes.DataTypes.Text),
                                        investment_risk: n.DataConversion.JSNodeParamConverter.to("", n.DataTypes.DataTypes.Text),
                                        potential_loss: n.DataConversion.JSNodeParamConverter.to("", n.DataTypes.DataTypes.Text)
                                    }, function(S) {
                                        var v = new(t.constructor.getVariableGroupType("uae.OnboardingFlow.TradingSuitablity.PostTradingSuitability$generatePayloadJSResult"));
                                        return v.previous_trading_experienceOut = n.DataConversion.JSNodeParamConverter.from(S.previous_trading_experience, n.DataTypes.DataTypes.Text), v.trading_experienceOut = n.DataConversion.JSNodeParamConverter.from(S.trading_experience, n.DataTypes.DataTypes.Text), v.investment_riskOut = n.DataConversion.JSNodeParamConverter.from(S.investment_risk, n.DataTypes.DataTypes.Text), v.potential_lossOut = n.DataConversion.JSNodeParamConverter.from(S.potential_loss, n.DataTypes.DataTypes.Text), v
                                    }, {}, {})
                                } finally {
                                    y && y.end()
                                }
                            }, 1), r.flush(), t.pOSTTradingAssessment$ServerAction(u.value.tokenOut, (function() {
                                var y = new pe;
                                return y.trading_experienceAttr = c.value.trading_experienceOut, y.previous_trading_experienceAttr = c.value.previous_trading_experienceOut, y.potential_lossAttr = c.value.potential_lossOut, y.investment_riskAttr = c.value.investment_riskOut, y
                            })(), e).then(function(y) {
                                s.value = y
                            })
                        })
                    }, function() {
                        a && a.end()
                    })
                }, 1)
            }), this.__postTradingSuitability$Action
        }
        set _postTradingSuitability$Action(e) {
            this.__postTradingSuitability$Action = e
        }
        get _processConfig$Action() {
            return this.hasOwnProperty("__processConfig$Action") || (this.__processConfig$Action = function(e, r) {
                var t = this.model,
                    i = this.controller,
                    a = this.idService;
                return n.Logger.startActiveSpan("ProcessConfig", function(s) {
                    s && (s.setAttribute("code.function", "ProcessConfig"), s.setAttribute("outsystems.function.key", "8623a08d-082f-4caa-8b45-f1aa883dfc38"), s.setAttribute("outsystems.function.owner.name", "uae"), s.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("ProcessConfig"), r = i.callContext(r);
                        var u = new n.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("uae.OnboardingFlow.TradingSuitablity.ProcessConfig$vars")));
                        u.value.inputInLocal = e;
                        var c = new n.DataTypes.VariableHolder,
                            y = new n.DataTypes.VariableHolder(new(n.Controller.BaseController.getJSONDeserializeOutputType(n.GenericTypeCache.getGenericList(P))));
                        c.value = n.Logger.startActiveSpan("JavaScript1", function(S) {
                            S && (S.setAttribute("code.function", "JavaScript1"), S.setAttribute("outsystems.function.key", "1b53774c-e008-42e2-a37f-882538c85f5f"), S.setAttribute("outsystems.function.owner.name", "uae"), S.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), S.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return i.safeExecuteJSNode(ie, "JavaScript1", "ProcessConfig", {
                                    Config: n.DataConversion.JSNodeParamConverter.to(u.value.inputInLocal, n.DataTypes.DataTypes.Text),
                                    ParsedData: n.DataConversion.JSNodeParamConverter.to("", n.DataTypes.DataTypes.Text)
                                }, function(v) {
                                    var b = new(i.constructor.getVariableGroupType("uae.OnboardingFlow.TradingSuitablity.ProcessConfig$javaScript1JSResult"));
                                    return b.parsedDataOut = n.DataConversion.JSNodeParamConverter.from(v.ParsedData, n.DataTypes.DataTypes.Text), b
                                }, {}, {})
                            } finally {
                                S && S.end()
                            }
                        }, 1), y.value.dataOut = n.JSONUtils.deserializeFromJSON(c.value.parsedDataOut, n.GenericTypeCache.getGenericList(P), !1), t.variables.tradingSuitabilityConfigVar = y.value.dataOut
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__processConfig$Action
        }
        set _processConfig$Action(e) {
            this.__processConfig$Action = e
        }
        get _checkNext$Action() {
            return this.hasOwnProperty("__checkNext$Action") || (this.__checkNext$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return n.Logger.startActiveSpan("CheckNext", function(a) {
                    a && (a.setAttribute("code.function", "CheckNext"), a.setAttribute("outsystems.function.key", "9ebb4036-a135-40f0-861b-9931a22481d0"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        if (t.ensureControllerAlive("CheckNext"), e = t.callContext(e), r.variables.currentPosIn + 1 >= r.variables.tradingSuitabilityConfigVar.length) return t._submitTradingSuitability$Action(e), n.Navigation.navigateTo(n.Navigation.generateScreenURL("uae", "main-goal", {}), n.Transitions.createTransition(n.Transitions.TransitionAnimation.None), e, !0);
                        r.variables.currentPosIn = r.variables.currentPosIn + 1, t._pickQuestion$Action(r.variables.currentPosIn, e)
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__checkNext$Action
        }
        set _checkNext$Action(e) {
            this.__checkNext$Action = e
        }
        get _pickQuestion$Action() {
            return this.hasOwnProperty("__pickQuestion$Action") || (this.__pickQuestion$Action = function(e, r) {
                var t = this.model,
                    i = this.controller,
                    a = this.idService;
                return n.Logger.startActiveSpan("PickQuestion", function(s) {
                    s && (s.setAttribute("code.function", "PickQuestion"), s.setAttribute("outsystems.function.key", "c68cb671-d328-4b9a-9d45-66545a4daddd"), s.setAttribute("outsystems.function.owner.name", "uae"), s.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("PickQuestion"), r = i.callContext(r);
                        var u = new n.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("uae.OnboardingFlow.TradingSuitablity.PickQuestion$vars")));
                        u.value.indexInLocal = e;
                        var c = new n.DataTypes.VariableHolder,
                            y = new n.DataTypes.VariableHolder(new n.DataTypes.JSONSerializeOutputType),
                            S = new n.DataTypes.VariableHolder(new(n.Controller.BaseController.getJSONDeserializeOutputType(P)));
                        y.value.jSONOut = n.JSONUtils.serializeToJSON(t.variables.tradingSuitabilityConfigVar, !1, !1), c.value = n.Logger.startActiveSpan("JavaScript1", function(v) {
                            v && (v.setAttribute("code.function", "JavaScript1"), v.setAttribute("outsystems.function.key", "a8922553-6215-4e2e-8fb9-cf16c756d2c4"), v.setAttribute("outsystems.function.owner.name", "uae"), v.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), v.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return i.safeExecuteJSNode(re, "JavaScript1", "PickQuestion", {
                                    ConfigData: n.DataConversion.JSNodeParamConverter.to(y.value.jSONOut, n.DataTypes.DataTypes.Text),
                                    Index: n.DataConversion.JSNodeParamConverter.to(u.value.indexInLocal, n.DataTypes.DataTypes.Integer),
                                    SelectedObj: n.DataConversion.JSNodeParamConverter.to("", n.DataTypes.DataTypes.Text)
                                }, function(b) {
                                    var A = new(i.constructor.getVariableGroupType("uae.OnboardingFlow.TradingSuitablity.PickQuestion$javaScript1JSResult"));
                                    return A.selectedObjOut = n.DataConversion.JSNodeParamConverter.from(b.SelectedObj, n.DataTypes.DataTypes.Text), A
                                }, {}, {})
                            } finally {
                                v && v.end()
                            }
                        }, 1), S.value.dataOut = n.JSONUtils.deserializeFromJSON(c.value.selectedObjOut, P, !1), t.variables.selectedTAConfigVar = S.value.dataOut
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__pickQuestion$Action
        }
        set _pickQuestion$Action(e) {
            this.__pickQuestion$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return n.Logger.startActiveSpan("OnReady", function(a) {
                    return a && (a.setAttribute("code.function", "OnReady"), a.setAttribute("outsystems.function.key", "e51ca138-81a7-4632-9015-faccedbf87fb"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var s = new n.DataTypes.VariableHolder,
                            u = new n.DataTypes.VariableHolder,
                            c = new n.DataTypes.VariableHolder,
                            y = new n.DataTypes.VariableHolder,
                            S = new n.DataTypes.VariableHolder(new n.DataTypes.JSONSerializeOutputType),
                            v = new n.DataTypes.VariableHolder(new n.DataTypes.JSONSerializeOutputType);
                        return n.Flow.executeAsyncFlow(function() {
                            return c.value = C.getAuth$Action(e), n.Flow.executeSequence(function() {
                                if (_.gettrading_assessment_list() !== n.BuiltinFunctions.nullTextIdentifier()) t._processConfig$Action(_.gettrading_assessment_list(), e);
                                else return r.variables.isLoadingVar = !0, r.flush(), t.getTradingSuitabilityConfig$ServerAction(c.value.tokenOut, e).then(function(b) {
                                    s.value = b
                                }).then(function() {
                                    if (s.value.responseOut.dataAttr.isEmpty) return n.Flow.returnAsync();
                                    v.value.jSONOut = n.JSONUtils.serializeToJSON(s.value.responseOut, !1, !1), _.settrading_assessment_list(v.value.jSONOut), t._processConfig$Action(v.value.jSONOut, e)
                                })
                            }).then(function() {
                                return n.Flow.executeSequence(function() {
                                    if (_.gettrading_suitability() === n.BuiltinFunctions.nullTextIdentifier()) return r.flush(), t.getTradingAssessmentResults$ServerAction(c.value.tokenOut, e).then(function(b) {
                                        u.value = b
                                    }).then(function() {
                                        u.value.responseOut.dataAttr.isEmpty !== !0 && (S.value.jSONOut = n.JSONUtils.serializeToJSON(u.value.responseOut.dataAttr.getCurrent(e.iterationContext).responsesAttr, !1, !1), C.consoleLog$Action(_.gettrading_assessment_list(), e), y.value = n.Logger.startActiveSpan("JavaScript1", function(b) {
                                            b && (b.setAttribute("code.function", "JavaScript1"), b.setAttribute("outsystems.function.key", "07558259-c0d4-4a92-a279-39eebb8160c0"), b.setAttribute("outsystems.function.owner.name", "uae"), b.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), b.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                            try {
                                                return t.safeExecuteJSNode(ae, "JavaScript1", "OnReady", {
                                                    config: n.DataConversion.JSNodeParamConverter.to(_.gettrading_assessment_list(), n.DataTypes.DataTypes.Text),
                                                    resultData: n.DataConversion.JSNodeParamConverter.to(S.value.jSONOut, n.DataTypes.DataTypes.Text),
                                                    finalResult: n.DataConversion.JSNodeParamConverter.to("", n.DataTypes.DataTypes.Text)
                                                }, function(A) {
                                                    var $ = new(t.constructor.getVariableGroupType("uae.OnboardingFlow.TradingSuitablity.OnReady$javaScript1JSResult"));
                                                    return $.finalResultOut = n.DataConversion.JSNodeParamConverter.from(A.finalResult, n.DataTypes.DataTypes.Text), $
                                                }, {}, {})
                                            } finally {
                                                b && b.end()
                                            }
                                        }, 1), _.settrading_suitability(y.value.finalResultOut))
                                    })
                                })
                            }).then(function() {
                                t._pickQuestion$Action(r.variables.currentPosIn, e), r.variables.isLoadingVar = !1
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
        tradingSuitabilityQuestionHandlePrevious$Action(e) {
            var r = this.controller;
            return n.Logger.startActiveSpan("TradingSuitabilityQuestionHandlePrevious__proxy", function(t) {
                t && (t.setAttribute("code.function", "TradingSuitabilityQuestionHandlePrevious"), t.setAttribute("outsystems.function.key", "03e11e75-0d1f-489d-8ce1-8f7b137b0089"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._tradingSuitabilityQuestionHandlePrevious$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onInitialize$Action(e) {
            var r = this.controller;
            return n.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "0d846533-332b-41d9-ac48-da8ea1705640"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onInitialize$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        submitTradingSuitability$Action(e) {
            var r = this.controller;
            return n.Logger.startActiveSpan("SubmitTradingSuitability__proxy", function(t) {
                t && (t.setAttribute("code.function", "SubmitTradingSuitability"), t.setAttribute("outsystems.function.key", "0f5243b5-c180-4717-9e7a-2bb7c9537a0e"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._submitTradingSuitability$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        tradingSuitabilityQuestionSelectedAnswer$Action(e, r) {
            var t = this.controller;
            return n.Logger.startActiveSpan("TradingSuitabilityQuestionSelectedAnswer__proxy", function(i) {
                return i && (i.setAttribute("code.function", "TradingSuitabilityQuestionSelectedAnswer"), i.setAttribute("outsystems.function.key", "3498b508-cc92-4be2-910f-b9335eb8bc01"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._tradingSuitabilityQuestionSelectedAnswer$Action, r, e)
                }, function() {
                    i && i.end()
                })
            }, 0)
        }
        postTradingSuitability$Action(e) {
            var r = this.controller;
            return n.Logger.startActiveSpan("PostTradingSuitability__proxy", function(t) {
                return t && (t.setAttribute("code.function", "PostTradingSuitability"), t.setAttribute("outsystems.function.key", "72563338-cecc-4ae7-8b6a-3bf6c2483403"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._postTradingSuitability$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        processConfig$Action(e, r) {
            var t = this.controller;
            return n.Logger.startActiveSpan("ProcessConfig__proxy", function(i) {
                i && (i.setAttribute("code.function", "ProcessConfig"), i.setAttribute("outsystems.function.key", "8623a08d-082f-4caa-8b45-f1aa883dfc38"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._processConfig$Action, r, e)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        checkNext$Action(e) {
            var r = this.controller;
            return n.Logger.startActiveSpan("CheckNext__proxy", function(t) {
                t && (t.setAttribute("code.function", "CheckNext"), t.setAttribute("outsystems.function.key", "9ebb4036-a135-40f0-861b-9931a22481d0"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._checkNext$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        pickQuestion$Action(e, r) {
            var t = this.controller;
            return n.Logger.startActiveSpan("PickQuestion__proxy", function(i) {
                i && (i.setAttribute("code.function", "PickQuestion"), i.setAttribute("outsystems.function.key", "c68cb671-d328-4b9a-9d45-66545a4daddd"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._pickQuestion$Action, r, e)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var r = this.controller;
            return n.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "e51ca138-81a7-4632-9015-faccedbf87fb"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    i = this.idService;
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
                    i = this.idService;
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
            return C.defaultTimeout
        }
    };
    o(d, "ControllerInner");
    let l = d;
    p = l, p.registerVariableGroupType("uae.OnboardingFlow.TradingSuitablity$ActionPOSTTradingAssessment", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: n.DataTypes.DataTypes.Record,
        defaultValue: o(function() {
            return new H
        }, "defaultValue"),
        complexType: H
    }]), p.registerVariableGroupType("uae.OnboardingFlow.TradingSuitablity$ActionGetTradingSuitabilityConfig", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: n.DataTypes.DataTypes.Record,
        defaultValue: o(function() {
            return new L
        }, "defaultValue"),
        complexType: L
    }]), p.registerVariableGroupType("uae.OnboardingFlow.TradingSuitablity$ActionGetTradingAssessmentResults", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: n.DataTypes.DataTypes.Record,
        defaultValue: o(function() {
            return new F
        }, "defaultValue"),
        complexType: F
    }]), p.registerVariableGroupType("uae.OnboardingFlow.TradingSuitablity.TradingSuitabilityQuestionSelectedAnswer$vars", [{
        name: "Answer",
        attrName: "answerInLocal",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }]), p.registerVariableGroupType("uae.OnboardingFlow.TradingSuitablity.TradingSuitabilityQuestionSelectedAnswer$storingdataJSResult", [{
        name: "NewData",
        attrName: "newDataOut",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }]), p.registerVariableGroupType("uae.OnboardingFlow.TradingSuitablity.PostTradingSuitability$generatePayloadJSResult", [{
        name: "previous_trading_experience",
        attrName: "previous_trading_experienceOut",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "trading_experience",
        attrName: "trading_experienceOut",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "investment_risk",
        attrName: "investment_riskOut",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "potential_loss",
        attrName: "potential_lossOut",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }]), p.registerVariableGroupType("uae.OnboardingFlow.TradingSuitablity.ProcessConfig$vars", [{
        name: "Input",
        attrName: "inputInLocal",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }]), p.registerVariableGroupType("uae.OnboardingFlow.TradingSuitablity.ProcessConfig$javaScript1JSResult", [{
        name: "ParsedData",
        attrName: "parsedDataOut",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }]), p.registerVariableGroupType("uae.OnboardingFlow.TradingSuitablity.PickQuestion$vars", [{
        name: "Index",
        attrName: "indexInLocal",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Integer,
        defaultValue: o(function() {
            return 0
        }, "defaultValue")
    }]), p.registerVariableGroupType("uae.OnboardingFlow.TradingSuitablity.PickQuestion$javaScript1JSResult", [{
        name: "SelectedObj",
        attrName: "selectedObjOut",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }]), p.registerVariableGroupType("uae.OnboardingFlow.TradingSuitablity.OnReady$javaScript1JSResult", [{
        name: "finalResult",
        attrName: "finalResultOut",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }])
}
var p, oe = new n.Controller.ControllerFactory(p, Q);
var Se = Te(Ce());
var h = O,
    ce = class ce extends h.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("TAAnswer", "tAAnswerVar", "TAAnswer", !0, !1, h.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("Question", "questionIn", "Question", !0, !1, h.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_questionInDataFetchStatus", "_questionInDataFetchStatus", "_questionInDataFetchStatus", !0, !1, h.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Answers", "answersIn", "Answers", !0, !1, h.DataTypes.DataTypes.RecordList, function() {
                return h.DataTypes.ImmutableBase.getData(new h.DataTypes.TextList)
            }, !1, h.DataTypes.TextList), this.attr("_answersInDataFetchStatus", "_answersInDataFetchStatus", "_answersInDataFetchStatus", !0, !1, h.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("TARef", "tARefIn", "TARef", !0, !1, h.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_tARefInDataFetchStatus", "_tARefInDataFetchStatus", "_tARefInDataFetchStatus", !0, !1, h.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(h.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
o(ce, "VariablesRecord");
var z = ce;
z.init();
var le = class le extends h.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
o(le, "WidgetsRecord");
var se = le,
    E = class E extends h.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return z
        }
        static getWidgetsRecordConstructor() {
            return se
        }
        static get hasValidationWidgets() {
            return E._hasValidationWidgetsValue === void 0 && (E._hasValidationWidgetsValue = void 0), E._hasValidationWidgetsValue
        }
        setInputs(d) {
            "Question" in d && (this.variables.questionIn = d.Question, "_questionInDataFetchStatus" in d && (this.variables._questionInDataFetchStatus = d._questionInDataFetchStatus)), "Answers" in d && (this.variables.answersIn = d.Answers, "_answersInDataFetchStatus" in d && (this.variables._answersInDataFetchStatus = d._answersInDataFetchStatus)), "TARef" in d && (this.variables.tARefIn = d.TARef, "_tARefInDataFetchStatus" in d && (this.variables._tARefInDataFetchStatus = d._tARefInDataFetchStatus))
        }
    };
o(E, "Model");
var B = E;
B._hasValidationWidgetsValue = void 0;
var ke = new h.Model.ModelFactory(B);
var T = O,
    ye = class ye extends T.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("TradingSuitabilityConfig", "tradingSuitabilityConfigVar", "TradingSuitabilityConfig", !0, !1, T.DataTypes.DataTypes.RecordList, function() {
                return T.DataTypes.ImmutableBase.getData(new(T.GenericTypeCache.getGenericList(P)))
            }, !1, T.GenericTypeCache.getGenericList(P)), this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, T.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("SelectedTAConfig", "selectedTAConfigVar", "SelectedTAConfig", !0, !1, T.DataTypes.DataTypes.Record, function() {
                return T.DataTypes.ImmutableBase.getData(new P)
            }, !1, P), this.attr("CurrentPos", "currentPosIn", "CurrentPos", !0, !1, T.DataTypes.DataTypes.Integer, function() {
                return 0
            }, !1), this.attr("_currentPosInDataFetchStatus", "_currentPosInDataFetchStatus", "_currentPosInDataFetchStatus", !0, !1, T.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(T.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
o(ye, "VariablesRecord");
var j = ye;
j.init();
var be = class be extends T.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
o(be, "WidgetsRecord");
var de = be,
    x = class x extends T.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return j
        }
        static getWidgetsRecordConstructor() {
            return de
        }
        static get hasValidationWidgets() {
            return x._hasValidationWidgetsValue === void 0 && (x._hasValidationWidgetsValue = void 0), x._hasValidationWidgetsValue
        }
        setInputs(d) {
            "CurrentPos" in d && (this.variables.currentPosIn = T.DataConversion.ServerDataConverter.from(d.CurrentPos, T.DataTypes.DataTypes.Integer))
        }
    };
o(x, "Model");
var U = x;
U._hasValidationWidgetsValue = void 0;
var fe = new T.Model.ModelFactory(U);
var m = Te(Ce());
var Qe = {
        "ygULMX5cQ0STOiR6cuf8MQ#Value": "\u0627\u0644\u062A\u0627\u0644\u064A",
        "cVQGdFBQ9kCtqeEWRZEgtg#Value.-792540827.1": "\u062A\u0642\u064A\u064A\u0645 \u0627\u0644\u0645\u0644\u0627\u0621\u0645\u0629"
    },
    Fe = {
        "ar-001": {
            translations: Qe,
            isRTL: !0
        }
    };

function ve(l, d, f, e) {
    var r;
    if (l.TradingSuitability) {
        let t = JSON.parse(l.TradingSuitability);
        l.UserAnswer = (r = t[l.Ref]) != null ? r : ""
    }
}
o(ve, "default");
var g = O; {
    let d = class d extends g.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, Fe);
            var i = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onClickNext$Action() {
            return this.hasOwnProperty("__onClickNext$Action") || (this.__onClickNext$Action = function(e, r) {
                var t = this.model,
                    i = this.controller,
                    a = this.idService;
                return g.Logger.startActiveSpan("OnClickNext", function(s) {
                    return s && (s.setAttribute("code.function", "OnClickNext"), s.setAttribute("outsystems.function.key", "0467f93d-398d-497f-9338-9751745f52b7"), s.setAttribute("outsystems.function.owner.name", "uae"), s.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), g.Flow.tryFinally(function() {
                        i.ensureControllerAlive("OnClickNext"), r = i.callContext(r);
                        var u = new g.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("uae.TradingSuitability.TradingSuitabilityQuestion.OnClickNext$vars")));
                        return u.value.answerInLocal = e, g.Flow.executeAsyncFlow(function() {
                            return t.flush(), Pe.sleep$Action("10", r).then(function() {
                                return i.selectedAnswer$Action(u.value.answerInLocal, r)
                            })
                        })
                    }, function() {
                        s && s.end()
                    })
                }, 1)
            }), this.__onClickNext$Action
        }
        set _onClickNext$Action(e) {
            this.__onClickNext$Action = e
        }
        get _nextStep$Action() {
            return this.hasOwnProperty("__nextStep$Action") || (this.__nextStep$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return g.Logger.startActiveSpan("NextStep", function(a) {
                    return a && (a.setAttribute("code.function", "NextStep"), a.setAttribute("outsystems.function.key", "2c5ef517-f3eb-45b0-a408-19eb6b670f08"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), g.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("NextStep"), e = t.callContext(e), g.Flow.executeAsyncFlow(function() {
                            return t.handleNextButton$Action(e)
                        })
                    }, function() {
                        a && a.end()
                    })
                }, 1)
            }), this.__nextStep$Action
        }
        set _nextStep$Action(e) {
            this.__nextStep$Action = e
        }
        get _onClickPrevious$Action() {
            return this.hasOwnProperty("__onClickPrevious$Action") || (this.__onClickPrevious$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return g.Logger.startActiveSpan("OnClickPrevious", function(a) {
                    return a && (a.setAttribute("code.function", "OnClickPrevious"), a.setAttribute("outsystems.function.key", "323764d8-6b84-4b41-8af3-82d20ca203ac"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), g.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("OnClickPrevious"), e = t.callContext(e), g.Flow.executeAsyncFlow(function() {
                            return t.handlePrevious$Action(e)
                        })
                    }, function() {
                        a && a.end()
                    })
                }, 1)
            }), this.__onClickPrevious$Action
        }
        set _onClickPrevious$Action(e) {
            this.__onClickPrevious$Action = e
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return g.Logger.startActiveSpan("OnParametersChanged", function(a) {
                    a && (a.setAttribute("code.function", "OnParametersChanged"), a.setAttribute("outsystems.function.key", "d1536a26-95d4-468a-ab98-b550007527c1"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnParametersChanged"), e = t.callContext(e);
                        var s = new g.DataTypes.VariableHolder;
                        s.value = g.Logger.startActiveSpan("JavaScript1", function(u) {
                            u && (u.setAttribute("code.function", "JavaScript1"), u.setAttribute("outsystems.function.key", "9fa75a0f-7284-467f-982b-9b58e3bac957"), u.setAttribute("outsystems.function.owner.name", "uae"), u.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), u.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(ve, "JavaScript1", "OnParametersChanged", {
                                    Ref: g.DataConversion.JSNodeParamConverter.to(r.variables.tARefIn, g.DataTypes.DataTypes.Text),
                                    TradingSuitability: g.DataConversion.JSNodeParamConverter.to(_.gettrading_suitability(), g.DataTypes.DataTypes.Text),
                                    UserAnswer: g.DataConversion.JSNodeParamConverter.to("", g.DataTypes.DataTypes.Text)
                                }, function(c) {
                                    var y = new(t.constructor.getVariableGroupType("uae.TradingSuitability.TradingSuitabilityQuestion.OnParametersChanged$javaScript1JSResult"));
                                    return y.userAnswerOut = g.DataConversion.JSNodeParamConverter.from(c.UserAnswer, g.DataTypes.DataTypes.Text), y
                                }, {}, {})
                            } finally {
                                u && u.end()
                            }
                        }, 1), r.variables.tAAnswerVar = s.value.userAnswerOut
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(e) {
            this.__onParametersChanged$Action = e
        }
        onClickNext$Action(e, r) {
            var t = this.controller;
            return g.Logger.startActiveSpan("OnClickNext__proxy", function(i) {
                return i && (i.setAttribute("code.function", "OnClickNext"), i.setAttribute("outsystems.function.key", "0467f93d-398d-497f-9338-9751745f52b7"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), g.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._onClickNext$Action, r, e)
                }, function() {
                    i && i.end()
                })
            }, 0)
        }
        nextStep$Action(e) {
            var r = this.controller;
            return g.Logger.startActiveSpan("NextStep__proxy", function(t) {
                return t && (t.setAttribute("code.function", "NextStep"), t.setAttribute("outsystems.function.key", "2c5ef517-f3eb-45b0-a408-19eb6b670f08"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), g.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._nextStep$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onClickPrevious$Action(e) {
            var r = this.controller;
            return g.Logger.startActiveSpan("OnClickPrevious__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnClickPrevious"), t.setAttribute("outsystems.function.key", "323764d8-6b84-4b41-8af3-82d20ca203ac"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), g.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onClickPrevious$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onParametersChanged$Action(e) {
            var r = this.controller;
            return g.Logger.startActiveSpan("OnParametersChanged__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnParametersChanged"), t.setAttribute("outsystems.function.key", "d1536a26-95d4-468a-ab98-b550007527c1"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onParametersChanged$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get handlePrevious$Action() {
            return this.hasOwnProperty("_handlePrevious$Action") || (this._handlePrevious$Action = function() {
                return Promise.resolve()
            }), this._handlePrevious$Action
        }
        set handlePrevious$Action(e) {
            this._handlePrevious$Action = e
        }
        get handleNextButton$Action() {
            return this.hasOwnProperty("_handleNextButton$Action") || (this._handleNextButton$Action = function() {
                return Promise.resolve()
            }), this._handleNextButton$Action
        }
        set handleNextButton$Action(e) {
            this._handleNextButton$Action = e
        }
        get selectedAnswer$Action() {
            return this.hasOwnProperty("_selectedAnswer$Action") || (this._selectedAnswer$Action = function() {
                return Promise.resolve()
            }), this._selectedAnswer$Action
        }
        set selectedAnswer$Action(e) {
            this._selectedAnswer$Action = e
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = null), this._onReadyEventHandler
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
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    i = this.idService;
                return r.onParametersChanged$Action(e)
            }), this._onParametersChangedEventHandler
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
            return C.defaultTimeout
        }
    };
    o(d, "ControllerInner");
    let l = d;
    q = l, q.registerVariableGroupType("uae.TradingSuitability.TradingSuitabilityQuestion.OnClickNext$vars", [{
        name: "Answer",
        attrName: "answerInLocal",
        mandatory: !0,
        dataType: g.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }]), q.registerVariableGroupType("uae.TradingSuitability.TradingSuitabilityQuestion.OnParametersChanged$javaScript1JSResult", [{
        name: "UserAnswer",
        attrName: "userAnswerOut",
        mandatory: !0,
        dataType: g.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }])
}
var q, He = new g.Controller.ControllerFactory(q, Q);
var X = D.PlaceholderContent,
    Me = D.IteratorPlaceholderContent,
    We = o(function() {
        var l = Oe(function(d) {
            var f = d.model,
                e = d.controller,
                r = d.controller.idService,
                t = e.validationService,
                i = e.callContext(),
                a = R,
                s = I,
                u = {
                    props: d,
                    validateWidget: o(function(b) {
                        d.validateWidget(d, b)
                    }, "validateWidget")
                },
                c = f,
                y = W,
                S = M,
                v = G();
            return m.createElement("div", d.rootNodeProperties, m.createElement(Z, {
                getOwnerSpan: o(function() {
                    return v.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return v.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ShouldEmitPreviousEvent: !0,
                    Title: V.resolve(k.TranslationsService).getMessage("cVQGdFBQ9kCtqeEWRZEgtg#Value.-792540827.1", "Suitability assessment"),
                    ProgressBarPercentage: 83,
                    shouldShowProgressBarInMobile: !0
                },
                events: {
                    _handleError: o(function(b) {
                        e.handleError(b)
                    }, "_handleError"),
                    onClickPrevious$Action: o(function() {
                        return Promise.resolve().then(function() {
                            var b = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                            return e.onClickPrevious$Action(e.callContext(b))
                        })
                    }, "onClickPrevious$Action")
                },
                _validationProps: {
                    validationService: t
                },
                _idProps: {
                    service: r,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: c,
                placeholders: {
                    content: new X(function() {
                        return [m.createElement(w, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "padding-bottom: 40px;"
                            },
                            style: "flex flex-col",
                            visible: !0,
                            _idProps: {
                                service: r,
                                uuid: "1"
                            },
                            _widgetRecordProvider: c
                        }, m.createElement(K, {
                            extendedProperties: {
                                style: "font-size: 24px;"
                            },
                            style: f.getCachedValue(r.getId("1GGaULoZaUWXaw555dgCiw.Style"), function() {
                                return J.isDesktop$Action(i).isDesktopOut ? "margin-bottom-base text-xl font-extra-bold" : "margin-bottom-base text-2xl font-extra-bold"
                            }),
                            value: f.getCachedValue(r.getId("1GGaULoZaUWXaw555dgCiw.Value"), function() {
                                return C.translate$Action(f.variables.questionIn, i).translatedTextOut
                            }, function() {
                                return f.variables.questionIn
                            }),
                            _idProps: {
                                service: r,
                                uuid: "2"
                            },
                            _widgetRecordProvider: c,
                            value_dataFetchStatus: N.calculateDataFetchStatus(f.variables._questionInDataFetchStatus)
                        }), m.createElement(w, {
                            align: 0,
                            animate: !1,
                            style: "mb-6",
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "SourceOfIncomeSelectionContainer"
                            },
                            _widgetRecordProvider: c
                        }, y(f.variables.answersIn.length < 1, !1, this, function() {
                            return [m.createElement(w, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "height: fit-content; margin-top: 4px;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                style: "animate-pulse w-full currency list-container",
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    name: "LoaderContainer2"
                                },
                                _widgetRecordProvider: c
                            }, m.createElement(w, {
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
                                    name: "ListItemPlaceholder2"
                                },
                                _widgetRecordProvider: c
                            }), m.createElement(w, {
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
                                    name: "ListItemPlaceholder3"
                                },
                                _widgetRecordProvider: c
                            }), m.createElement(w, {
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
                                    name: "ListItemPlaceholder4"
                                },
                                _widgetRecordProvider: c
                            }), m.createElement(w, {
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
                                    name: "ListItemPlaceholder5"
                                },
                                _widgetRecordProvider: c
                            }))]
                        }, function() {
                            return [m.createElement(Ee, {
                                animateItems: !1,
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                mode: 0,
                                source: f.variables.answersIn,
                                style: "currency list-container list list-group",
                                tag: "div",
                                _idProps: {
                                    service: r,
                                    name: "AnswerList"
                                },
                                _widgetRecordProvider: c,
                                source_dataFetchStatus: N.calculateDataFetchStatus(f.variables._answersInDataFetchStatus),
                                placeholders: {
                                    content: new Me(function(b, A) {
                                        return [m.createElement(xe, {
                                            extendedProperties: {
                                                style: "border: 1px solid rgba(0, 0, 0, 0.04);"
                                            },
                                            onClick: o(function() {
                                                return Promise.resolve().then(function() {
                                                    var $ = typeof A != "undefined" && A !== null ? A.clone() : e.callContext().clone();
                                                    return e.onClickNext$Action(f.variables.answersIn.getCurrent(A.iterationContext), e.callContext($))
                                                })
                                            }, "onClick"),
                                            style: f.getCachedValue(b.getId("AnswerListItems.Style"), function() {
                                                return f.variables.answersIn.getCurrent(A.iterationContext) === f.variables.tAAnswerVar ? "currency list-item item-selected" : "currency list-item"
                                            }, function() {
                                                return f.variables.answersIn.getCurrent(A.iterationContext)
                                            }, function() {
                                                return f.variables.tAAnswerVar
                                            }),
                                            triggerActionOnFullSwipeLeft: !1,
                                            triggerActionOnFullSwipeRight: !1,
                                            _idProps: {
                                                service: b,
                                                name: "AnswerListItems"
                                            },
                                            _widgetRecordProvider: c,
                                            style_dataFetchStatus: N.calculateDataFetchStatus(f.variables._answersInDataFetchStatus),
                                            placeholders: {
                                                leftActions: X.Empty,
                                                content: new X(function() {
                                                    return [m.createElement(w, {
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
                                                            service: b,
                                                            uuid: "11"
                                                        },
                                                        _widgetRecordProvider: c
                                                    }, m.createElement(K, {
                                                        extendedProperties: {
                                                            style: "font-size: 16px;"
                                                        },
                                                        value: f.getCachedValue(b.getId("MBvM1vkXjkqYL+7nRSyQbg.Value"), function() {
                                                            return C.translate$Action(f.variables.answersIn.getCurrent(A.iterationContext), A).translatedTextOut
                                                        }, function() {
                                                            return f.variables.answersIn.getCurrent(A.iterationContext)
                                                        }),
                                                        _idProps: {
                                                            service: b,
                                                            uuid: "12"
                                                        },
                                                        _widgetRecordProvider: c,
                                                        value_dataFetchStatus: N.calculateDataFetchStatus(f.variables._answersInDataFetchStatus)
                                                    }), m.createElement(w, {
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
                                                            service: b,
                                                            uuid: "13"
                                                        },
                                                        _widgetRecordProvider: c
                                                    }, y(f.variables.answersIn.getCurrent(A.iterationContext) === f.variables.tAAnswerVar, !1, this, function() {
                                                        return [m.createElement(Ne, {
                                                            image: _e.VersionedURL.getVersionedUrl("img/uae.circlecheck.svg"),
                                                            type: 0,
                                                            _idProps: {
                                                                service: b,
                                                                uuid: "14"
                                                            },
                                                            _widgetRecordProvider: c
                                                        })]
                                                    }, function() {
                                                        return []
                                                    })))]
                                                }),
                                                rightActions: X.Empty
                                            },
                                            _dependencies: [a(f.variables.tAAnswerVar), a(f.variables._answersInDataFetchStatus), a(f.variables.answersIn.getCurrent(A.iterationContext))]
                                        })]
                                    }, i, r, "1")
                                },
                                _dependencies: [a(f.variables._answersInDataFetchStatus), a(f.variables.tAAnswerVar)]
                            })]
                        })), m.createElement(w, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-top: 24px; text-align: right;"
                            },
                            style: f.getCachedValue(r.getId("ButtonContainer.Style"), function() {
                                return "onboarding-flow__button " + (J.isDesktop$Action(i).isDesktopOut ? "flex justify-content-flex-end" : "fixed bottom-0 left-0 w-full flex justify-center p-4")
                            }),
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "ButtonContainer"
                            },
                            _widgetRecordProvider: c
                        }, m.createElement(De, {
                            enabled: f.getCachedValue(r.getId("NextButton3.Enabled"), function() {
                                return f.variables.tAAnswerVar !== he.nullTextIdentifier()
                            }, function() {
                                return f.variables.tAAnswerVar
                            }),
                            extendedProperties: {
                                style: "border-radius: 24px;"
                            },
                            gridProperties: {
                                width: "96px"
                            },
                            isDefault: !1,
                            onClick: o(function() {
                                return Promise.resolve().then(function() {
                                    var b = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                                    return e.nextStep$Action(e.callContext(b))
                                })
                            }, "onClick"),
                            style: f.getCachedValue(r.getId("NextButton3.Style"), function() {
                                return J.isDesktop$Action(i).isDesktopOut ? "btn btn-primary" : "btn btn-primary action-button"
                            }),
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "NextButton3"
                            },
                            _widgetRecordProvider: c
                        }, m.createElement(Re, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: bold;"
                            },
                            text: [S(s("ygULMX5cQ0STOiR6cuf8MQ#Value", "Next"))],
                            _idProps: {
                                service: r,
                                uuid: "17"
                            },
                            _widgetRecordProvider: c
                        }))))]
                    })
                },
                _dependencies: [a(f.variables.tAAnswerVar), a(f.variables.answersIn), a(f.variables._answersInDataFetchStatus), a(f.variables._questionInDataFetchStatus), a(f.variables.questionIn)]
            }))
        }, {
            topLevelComponent: !1,
            getAttributes: o(function() {
                return {
                    codeFunction: "TradingSuitabilityQuestion",
                    functionKey: "2e67c209-8f42-4f3e-9fcc-a0968bfc4bac",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "TradingSuitability.TradingSuitabilityQuestion",
            modelFactory: ke,
            controllerFactory: He
        });
        return l.getCssDependencies = function() {
            return ["css/uae.TradingSuitability.TradingSuitabilityQuestion.css", "css/OutSystemsReactWidgets.css"]
        }, l.getJsDependencies = function() {
            return []
        }, l.getBlocks = function() {
            return [Z]
        }, l
    }, "componentFactory"),
    ge = We();
var un = D.PlaceholderContent,
    cn = D.IteratorPlaceholderContent,
    ze = o(function() {
        var l = we(function(d) {
            var f = d.model,
                e = d.controller,
                r = d.controller.idService,
                t = e.validationService,
                i = e.callContext(),
                a = R,
                s = I,
                u = {
                    props: d,
                    validateWidget: o(function(b) {
                        d.validateWidget(d, b)
                    }, "validateWidget")
                },
                c = f,
                y = W,
                S = M,
                v = G();
            return Se.createElement("div", d.rootNodeProperties, Se.createElement(ge, {
                getOwnerSpan: o(function() {
                    return v.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return v.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Question: f.variables.selectedTAConfigVar.questionAttr,
                    TARef: f.variables.selectedTAConfigVar.refAttr,
                    Answers: f.variables.selectedTAConfigVar.answersAttr
                },
                events: {
                    _handleError: o(function(b) {
                        e.handleError(b)
                    }, "_handleError"),
                    handleNextButton$Action: o(function() {
                        var b = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                        e.checkNext$Action(e.callContext(b))
                    }, "handleNextButton$Action"),
                    handlePrevious$Action: o(function() {
                        var b = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                        e.tradingSuitabilityQuestionHandlePrevious$Action(e.callContext(b))
                    }, "handlePrevious$Action"),
                    selectedAnswer$Action: o(function(b) {
                        return Promise.resolve().then(function() {
                            var A = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                            return e.tradingSuitabilityQuestionSelectedAnswer$Action(b, e.callContext(A))
                        })
                    }, "selectedAnswer$Action")
                },
                _validationProps: {
                    validationService: t
                },
                _idProps: {
                    service: r,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: c,
                _dependencies: []
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: o(function() {
                return {
                    codeFunction: "TradingSuitablity",
                    functionKey: "0973ddb5-01ba-48e7-a013-abeb54921f7a",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "OnboardingFlow.TradingSuitablity",
            modelFactory: fe,
            controllerFactory: oe,
            getTitle: o(function(d) {
                var f = d.model,
                    e = d.controller,
                    r = d.controller.idService,
                    t = e.validationService,
                    i = e.callContext(),
                    a = R,
                    s = I,
                    u = {
                        props: d,
                        validateWidget: o(function(c) {
                            d.validateWidget(d, c)
                        }, "validateWidget")
                    };
                return V.resolve(k.TranslationsService).getMessage("td1zCboB50igE6vrVJIfeg#TitleExpression.858924792.1", "Trading suitability | Deriv")
            }, "getTitle")
        });
        return l.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, l.getJsDependencies = function() {
            return []
        }, l.getBlocks = function() {
            return [ge]
        }, l
    }, "componentFactory"),
    Be = ze();
export {
    oe as controllerModule, fe as modelModule, Be as viewModule, Y as webFlowControllerModule
};