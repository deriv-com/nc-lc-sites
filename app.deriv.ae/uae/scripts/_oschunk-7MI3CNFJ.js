import {
    a as re,
    b as X
} from "./_oschunk-ET63S57K.js";
import "./_oschunk-JQ2HBHMK.js";
import {
    a as Fe
} from "./_oschunk-GYGHMTX2.js";
import "./_oschunk-L6JZD7VU.js";
import "./_oschunk-HFW3V2GI.js";
import "./_oschunk-YVFTECWM.js";
import {
    b as qe,
    f as C,
    g as Q,
    h as w,
    i as Be,
    j as We,
    n as je,
    u as ze
} from "./_oschunk-VR5BNL2K.js";
import {
    a as Le,
    g as R,
    m as G,
    n as Qe,
    o as He,
    q as M,
    r as U,
    s as K,
    t as L
} from "./_oschunk-4VHUVDBV.js";
import {
    a as z
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    L as Je,
    Pa as B,
    Qb as N,
    Sb as m,
    bb as W,
    cb as j,
    sa as P,
    ub as o
} from "./_oschunk-Z7QRTJDJ.js";
import {
    I as $e,
    W as V,
    a as Ee,
    b as Re,
    c as u,
    e as Ie,
    m as k,
    n as $,
    p as ke,
    v as J,
    w as x
} from "./_oschunk-M5BUVJ72.js";
var Ge = {};
var Ue = V; {
    let g = class g extends Ue.Controller.BaseViewController {
        constructor(t, n, i) {
            super(t, n, i, Ge);
            var a = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(t) {
            this._onInitializeEventHandler = t
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = null), this._onReadyEventHandler
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
                return re.default.handleError(t, this.callContext())
            }), this._handleError
        }
        set handleError(t) {
            this._handleError = t
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return m.defaultTimeout
        }
    };
    u(g, "ControllerInner");
    let c = g;
    Ke = c
}
var Ke, ae = new Ue.Controller.ControllerFactory(Ke, z);
var he = Ie(Le());
var b = V,
    ue = class ue extends b.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("TAAnswer", "tAAnswerVar", "TAAnswer", !0, !1, b.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("TradingSuitabilityConfig", "tradingSuitabilityConfigVar", "TradingSuitabilityConfig", !0, !1, b.DataTypes.DataTypes.RecordList, function() {
                return b.DataTypes.ImmutableBase.getData(new(b.GenericTypeCache.getGenericList(P)))
            }, !1, b.GenericTypeCache.getGenericList(P)), this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, b.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("SelectedTAConfig", "selectedTAConfigVar", "SelectedTAConfig", !0, !1, b.DataTypes.DataTypes.Record, function() {
                return b.DataTypes.ImmutableBase.getData(new P)
            }, !1, P), this.attr("Question1", "question1Var", "Question1", !0, !1, b.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("Question2", "question2Var", "Question2", !0, !1, b.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("Question3", "question3Var", "Question3", !0, !1, b.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("Question4", "question4Var", "Question4", !0, !1, b.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("TAAnswer1", "tAAnswer1Var", "TAAnswer1", !0, !1, b.DataTypes.DataTypes.RecordList, function() {
                return b.DataTypes.ImmutableBase.getData(new b.DataTypes.TextList)
            }, !1, b.DataTypes.TextList), this.attr("TAAnswer2", "tAAnswer2Var", "TAAnswer2", !0, !1, b.DataTypes.DataTypes.RecordList, function() {
                return b.DataTypes.ImmutableBase.getData(new b.DataTypes.TextList)
            }, !1, b.DataTypes.TextList), this.attr("TAAnswer3", "tAAnswer3Var", "TAAnswer3", !0, !1, b.DataTypes.DataTypes.RecordList, function() {
                return b.DataTypes.ImmutableBase.getData(new b.DataTypes.TextList)
            }, !1, b.DataTypes.TextList), this.attr("TAAnswer4", "tAAnswer4Var", "TAAnswer4", !0, !1, b.DataTypes.DataTypes.RecordList, function() {
                return b.DataTypes.ImmutableBase.getData(new b.DataTypes.TextList)
            }, !1, b.DataTypes.TextList), this.attr("Question", "questionIn", "Question", !0, !1, b.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_questionInDataFetchStatus", "_questionInDataFetchStatus", "_questionInDataFetchStatus", !0, !1, b.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Answers", "answersIn", "Answers", !0, !1, b.DataTypes.DataTypes.RecordList, function() {
                return b.DataTypes.ImmutableBase.getData(new b.DataTypes.TextList)
            }, !1, b.DataTypes.TextList), this.attr("_answersInDataFetchStatus", "_answersInDataFetchStatus", "_answersInDataFetchStatus", !0, !1, b.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("TARef", "tARefIn", "TARef", !0, !1, b.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_tARefInDataFetchStatus", "_tARefInDataFetchStatus", "_tARefInDataFetchStatus", !0, !1, b.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("CurrentPos", "currentPosIn", "CurrentPos", !0, !1, b.DataTypes.DataTypes.Integer, function() {
                return 0
            }, !1), this.attr("_currentPosInDataFetchStatus", "_currentPosInDataFetchStatus", "_currentPosInDataFetchStatus", !0, !1, b.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(b.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
u(ue, "VariablesRecord");
var Z = ue;
Z.init();
var le = class le extends b.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Dropdown8: b.Model.ValidationWidgetRecord,
            Dropdown9: b.Model.ValidationWidgetRecord,
            Dropdown10: b.Model.ValidationWidgetRecord,
            Dropdown11: b.Model.ValidationWidgetRecord
        }
    }
};
u(le, "WidgetsRecord");
var oe = le,
    ce = class ce extends b.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return Z
        }
        static getWidgetsRecordConstructor() {
            return oe
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(g) {
            "Question" in g && (this.variables.questionIn = g.Question, "_questionInDataFetchStatus" in g && (this.variables._questionInDataFetchStatus = g._questionInDataFetchStatus)), "Answers" in g && (this.variables.answersIn = g.Answers, "_answersInDataFetchStatus" in g && (this.variables._answersInDataFetchStatus = g._answersInDataFetchStatus)), "TARef" in g && (this.variables.tARefIn = g.TARef, "_tARefInDataFetchStatus" in g && (this.variables._tARefInDataFetchStatus = g._tARefInDataFetchStatus)), "CurrentPos" in g && (this.variables.currentPosIn = g.CurrentPos, "_currentPosInDataFetchStatus" in g && (this.variables._currentPosInDataFetchStatus = g._currentPosInDataFetchStatus))
        }
    };
u(ce, "Model");
var Y = ce;
Y._hasValidationWidgetsValue = void 0;
var Xe = new b.Model.ModelFactory(Y);
var H = V,
    ye = class ye extends H.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(H.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
u(ye, "VariablesRecord");
var ee = ye;
ee.init();
var ge = class ge extends H.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
u(ge, "WidgetsRecord");
var de = ge,
    I = class I extends H.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return ee
        }
        static getWidgetsRecordConstructor() {
            return de
        }
        static get hasValidationWidgets() {
            return I._hasValidationWidgetsValue === void 0 && (I._hasValidationWidgetsValue = void 0), I._hasValidationWidgetsValue
        }
        setInputs(g) {}
    };
u(I, "Model");
var te = I;
te._hasValidationWidgetsValue = void 0;
var fe = new H.Model.ModelFactory(te);
var v = Ie(Le());
var tt = {
        "37_luJVzBEeKnHtGqWvEjg#Value": "\u0627\u0644\u062A\u0627\u0644\u064A",
        "84d6miht20ilgeg_Cjqi6Q#ValueExpression.-1822154468.1": "\u0627\u062E\u062A\u0631",
        "GX+VwFw+lUSlFz2GpY9LgQ#ValueExpression.-1822154468.1": "\u0627\u062E\u062A\u0631",
        "isj8GepmzUuQnkN6L0aJ1A#ValueExpression.-1822154468.1": "\u0627\u062E\u062A\u0631",
        "ZNcIAx75q0Ku6r8bkuCpSw#ValueExpression.-1822154468.1": "\u0627\u062E\u062A\u0631"
    },
    Ze = {
        "ar-001": {
            translations: tt,
            isRTL: !0
        }
    };

function be(c, g, s) {
    c.PostTradingSuitability()
}
u(be, "default");

function ve(c, g, s, t) {
    var i;
    let n = JSON.parse((i = c.TAValues) != null ? i : "{}");
    c.NewData = JSON.stringify(Re(Ee({}, n), {
        [c.Ref]: c.Answer
    }))
}
u(ve, "default");

function Ae(c, g, s, t) {
    let n = u((r, y) => r.reduce((f, l) => {
        let [_, T] = Object.entries(l)[0], S = Object.values(y).find(d => d.question === T.question);
        return S && (f[_] = S.answer), f
    }, {}), "transformResult");
    console.log("test", JSON.parse(c.config)), console.log("teszzt", JSON.parse(c.resultData));
    let i = JSON.parse(c.config).data,
        a = n(i, JSON.parse(c.resultData));
    console.log(a), c.finalResult = JSON.stringify(a)
}
u(Ae, "default");

function Te(c, g, s, t) {
    let n = JSON.parse(c.ConfigData);
    console.log("Full response:", n);
    let i = n.data || n.body || n;
    console.log("jsondata", i), console.log("1st element", i[0]), console.log(JSON.stringify(i[0].investment_risk.answer)), c.Q1 = i[0].investment_risk.question, c.A1 = JSON.stringify(i[0].investment_risk.answer), c.Q2 = i[1].potential_loss.question, c.A2 = JSON.stringify(i[1].potential_loss.answer), c.Q3 = i[2].previous_trading_experience.question, c.A3 = JSON.stringify(i[2].previous_trading_experience.answer), c.Q4 = i[3].trading_experience.question, c.A4 = JSON.stringify(i[3].trading_experience.answer), console.log("answers" + c.Q1, c.A1, c.A2, c.A3, c.A4)
}
u(Te, "default");

function Se(c, g, s, t) {
    let n = JSON.parse(c.ConfigData);
    console.log("Full response:", n);
    let i = n.data || n.body || n;
    console.log("jsondata", i), console.log("1st element", i[0]), console.log(JSON.stringify(i[0].investment_risk.answer)), c.Q1 = i[0].investment_risk.question, c.A1 = JSON.stringify(i[0].investment_risk.answer), c.Q2 = i[1].potential_loss.question, c.A2 = JSON.stringify(i[1].potential_loss.answer), c.Q3 = i[2].previous_trading_experience.question, c.A3 = JSON.stringify(i[2].previous_trading_experience.answer), c.Q4 = i[3].trading_experience.question, c.A4 = JSON.stringify(i[3].trading_experience.answer), console.log("answers" + c.Q1, c.A1, c.A2, c.A3, c.A4)
}
u(Se, "default");

function me(c, g, s, t) {
    let n = JSON.parse(c.Config),
        a = u(r => {
            let y = [];
            return r.data && Array.isArray(r.data) && r.data.forEach(f => {
                for (let l in f) {
                    if (!Object.keys(f[l]).length) continue;
                    let _ = f[l].question,
                        T = f[l].answer;
                    y.push({
                        question: _,
                        answers: T,
                        ref: l
                    })
                }
            }), y
        }, "convertData")(n);
    c.ParsedData = JSON.stringify(a)
}
u(me, "default");

function pe(c, g, s, t) {
    var n;
    if (c.TradingSuitability) {
        let i = JSON.parse(c.TradingSuitability);
        c.UserAnswer = (n = i[c.Ref]) != null ? n : ""
    }
}
u(pe, "default");

function _e(c, g, s, t) {
    let n = JSON.parse(c.ConfigData);
    c.SelectedObj = JSON.stringify(n[c.Index])
}
u(_e, "default");
var e = V; {
    let g = class g extends e.Controller.BaseViewController {
        constructor(t, n, i) {
            super(t, n, i, Ze);
            var a = this.controller;
            this.clientActionProxies = {
                postTradingSuitability$Action: u(function() {
                    return a.executeActionInsideJSNode(a._postTradingSuitability$Action.bind(a), a.callContext(), function(r) {
                        return {}
                    }, function() {}, "PostTradingSuitability")
                }, "postTradingSuitability$Action")
            }, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get getTradingSuitabilityConfig$ServerAction() {
            return this.hasOwnProperty("_getTradingSuitabilityConfig$ServerAction") || (this._getTradingSuitabilityConfig$ServerAction = function(t, n) {
                var i = this.controller;
                return e.Logger.startActiveSpan("GetTradingSuitabilityConfig", function(a) {
                    return a && (a.setAttribute("code.function", "GetTradingSuitabilityConfig"), a.setAttribute("outsystems.function.key", "42d9d282-5ef4-47d9-adb6-3d29dbaf22bd"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
                        var r = {
                            Authorization: e.DataConversion.ServerDataConverter.to(t, e.DataTypes.DataTypes.Text)
                        };
                        return i.callServerAction("GetTradingSuitabilityConfig", "screenservices/uae/V2Onboarding/TradingSuitabilityQuestion/ActionGetTradingSuitabilityConfig", "kbU0NMdf6ssgJmGZ3Nq3MA", r, i.callContext(n), void 0, void 0, !0).then(function(y) {
                            var f = new(i.constructor.getVariableGroupType("uae.V2Onboarding.TradingSuitabilityQuestion$ActionGetTradingSuitabilityConfig"));
                            return f.responseOut = e.DataConversion.ServerDataConverter.from(y.Response, j), f
                        })
                    }, function() {
                        a && a.end()
                    })
                }, 0)
            }), this._getTradingSuitabilityConfig$ServerAction
        }
        set getTradingSuitabilityConfig$ServerAction(t) {
            this._getTradingSuitabilityConfig$ServerAction = t
        }
        get getTradingAssessmentResults$ServerAction() {
            return this.hasOwnProperty("_getTradingAssessmentResults$ServerAction") || (this._getTradingAssessmentResults$ServerAction = function(t, n) {
                var i = this.controller;
                return e.Logger.startActiveSpan("GetTradingAssessmentResults", function(a) {
                    return a && (a.setAttribute("code.function", "GetTradingAssessmentResults"), a.setAttribute("outsystems.function.key", "a38011a4-e9b3-48f8-86b3-b3f724d4ce4d"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
                        var r = {
                            authorization: e.DataConversion.ServerDataConverter.to(t, e.DataTypes.DataTypes.Text)
                        };
                        return i.callServerAction("GetTradingAssessmentResults", "screenservices/uae/V2Onboarding/TradingSuitabilityQuestion/ActionGetTradingAssessmentResults", "B+SZ8U0IPpsoTpiKO+p57Q", r, i.callContext(n), void 0, void 0, !0).then(function(y) {
                            var f = new(i.constructor.getVariableGroupType("uae.V2Onboarding.TradingSuitabilityQuestion$ActionGetTradingAssessmentResults"));
                            return f.responseOut = e.DataConversion.ServerDataConverter.from(y.Response, B), f
                        })
                    }, function() {
                        a && a.end()
                    })
                }, 0)
            }), this._getTradingAssessmentResults$ServerAction
        }
        set getTradingAssessmentResults$ServerAction(t) {
            this._getTradingAssessmentResults$ServerAction = t
        }
        get pOSTTradingAssessment$ServerAction() {
            return this.hasOwnProperty("_pOSTTradingAssessment$ServerAction") || (this._pOSTTradingAssessment$ServerAction = function(t, n, i) {
                var a = this.controller;
                return e.Logger.startActiveSpan("POSTTradingAssessment", function(r) {
                    return r && (r.setAttribute("code.function", "POSTTradingAssessment"), r.setAttribute("outsystems.function.key", "5ae9ccc0-2939-4ce8-a493-fe73ecf3d308"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
                        var y = {
                            Authorization: e.DataConversion.ServerDataConverter.to(t, e.DataTypes.DataTypes.Text),
                            Request: e.DataConversion.ServerDataConverter.to(n, e.DataTypes.DataTypes.Record)
                        };
                        return a.callServerAction("POSTTradingAssessment", "screenservices/uae/V2Onboarding/TradingSuitabilityQuestion/ActionPOSTTradingAssessment", "KUXoXX+YsGaG1QbYmstVFQ", y, a.callContext(i), void 0, void 0, !0).then(function(f) {
                            var l = new(a.constructor.getVariableGroupType("uae.V2Onboarding.TradingSuitabilityQuestion$ActionPOSTTradingAssessment"));
                            return l.responseOut = e.DataConversion.ServerDataConverter.from(f.Response, W), l
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 0)
            }), this._pOSTTradingAssessment$ServerAction
        }
        set pOSTTradingAssessment$ServerAction(t) {
            this._pOSTTradingAssessment$ServerAction = t
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _onClickPrevious$Action() {
            return this.hasOwnProperty("__onClickPrevious$Action") || (this.__onClickPrevious$Action = function(t) {
                var n = this.model,
                    i = this.controller,
                    a = this.idService;
                return e.Logger.startActiveSpan("OnClickPrevious", function(r) {
                    r && (r.setAttribute("code.function", "OnClickPrevious"), r.setAttribute("outsystems.function.key", "12ff074d-650d-48d3-acb9-37fbcf37a19f"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("OnClickPrevious"), t = i.callContext(t), i._tradingSuitabilityQuestionHandlePrevious$Action(t)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onClickPrevious$Action
        }
        set _onClickPrevious$Action(t) {
            this.__onClickPrevious$Action = t
        }
        get _submitTradingSuitability$Action() {
            return this.hasOwnProperty("__submitTradingSuitability$Action") || (this.__submitTradingSuitability$Action = function(t) {
                var n = this.model,
                    i = this.controller,
                    a = this.idService;
                return e.Logger.startActiveSpan("SubmitTradingSuitability", function(r) {
                    r && (r.setAttribute("code.function", "SubmitTradingSuitability"), r.setAttribute("outsystems.function.key", "219d3498-3966-4901-8be0-d0b48344c08b"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("SubmitTradingSuitability"), t = i.callContext(t);
                        var y = new e.DataTypes.VariableHolder;
                        return y.value = m.getAuth$Action(t), e.Logger.startActiveSpan("AsyncPostTradingSuitability", function(f) {
                            f && (f.setAttribute("code.function", "AsyncPostTradingSuitability"), f.setAttribute("outsystems.function.key", "e52df14d-3cd7-4ac1-ba02-0736d0bed863"), f.setAttribute("outsystems.function.owner.name", "uae"), f.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), f.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return i.safeExecuteJSNode(be, "AsyncPostTradingSuitability", "SubmitTradingSuitability", null, function(l) {}, {
                                    PostTradingSuitability: i.clientActionProxies.postTradingSuitability$Action
                                }, {})
                            } finally {
                                f && f.end()
                            }
                        }, 1), e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "TermsOfUse_V2", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.None), t, !0)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__submitTradingSuitability$Action
        }
        set _submitTradingSuitability$Action(t) {
            this.__submitTradingSuitability$Action = t
        }
        get _onClickBack$Action() {
            return this.hasOwnProperty("__onClickBack$Action") || (this.__onClickBack$Action = function(t) {
                var n = this.model,
                    i = this.controller,
                    a = this.idService;
                return e.Logger.startActiveSpan("OnClickBack", function(r) {
                    r && (r.setAttribute("code.function", "OnClickBack"), r.setAttribute("outsystems.function.key", "23f86157-4cf7-41e8-b9ae-3c842d4a2d1f"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        if (i.ensureControllerAlive("OnClickBack"), t = i.callContext(t), N.isDesktop$Action(t).isDesktopOut) return e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "FinancialAssessment_V2", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.None), t, !0);
                        if (n.variables.currentPosIn > 0) n.variables.currentPosIn = n.variables.currentPosIn - 1, m.consoleLog$Action("current_step" + n.variables.currentPosIn.toString(), t), i._pickQuestion$Action(n.variables.currentPosIn, t);
                        else return e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "FinancialAssessment_V2", {
                            current_step: e.DataConversion.ServerDataConverter.to(o.getfa_current_step(), e.DataTypes.DataTypes.Integer)
                        }), e.Transitions.createTransition(e.Transitions.TransitionAnimation.None), t, !0)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onClickBack$Action
        }
        set _onClickBack$Action(t) {
            this.__onClickBack$Action = t
        }
        get _tradingSuitabilityQuestionSelectedAnswer$Action() {
            return this.hasOwnProperty("__tradingSuitabilityQuestionSelectedAnswer$Action") || (this.__tradingSuitabilityQuestionSelectedAnswer$Action = function(t, n, i) {
                var a = this.model,
                    r = this.controller,
                    y = this.idService;
                return e.Logger.startActiveSpan("TradingSuitabilityQuestionSelectedAnswer", function(f) {
                    f && (f.setAttribute("code.function", "TradingSuitabilityQuestionSelectedAnswer"), f.setAttribute("outsystems.function.key", "269224a1-60a9-4e56-906b-aea5a75c612e"), f.setAttribute("outsystems.function.owner.name", "uae"), f.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), f.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("TradingSuitabilityQuestionSelectedAnswer"), i = r.callContext(i);
                        var l = new e.DataTypes.VariableHolder(new(r.constructor.getVariableGroupType("uae.V2Onboarding.TradingSuitabilityQuestion.TradingSuitabilityQuestionSelectedAnswer$vars")));
                        l.value.answerInLocal = t, l.value.questionNumInLocal = n;
                        var _ = new e.DataTypes.VariableHolder;
                        if (_.value = e.Logger.startActiveSpan("Storingdata", function(T) {
                                T && (T.setAttribute("code.function", "Storingdata"), T.setAttribute("outsystems.function.key", "81ff2163-311f-411d-a6d6-6f2420c9c0ce"), T.setAttribute("outsystems.function.owner.name", "uae"), T.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), T.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return r.safeExecuteJSNode(ve, "Storingdata", "TradingSuitabilityQuestionSelectedAnswer", {
                                        TAValues: e.DataConversion.JSNodeParamConverter.to(o.gettrading_suitability() !== e.BuiltinFunctions.nullTextIdentifier() ? o.gettrading_suitability() : "{}", e.DataTypes.DataTypes.Text),
                                        Ref: e.DataConversion.JSNodeParamConverter.to(a.variables.selectedTAConfigVar.refAttr, e.DataTypes.DataTypes.Text),
                                        Answer: e.DataConversion.JSNodeParamConverter.to(l.value.answerInLocal, e.DataTypes.DataTypes.Text),
                                        NewData: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                                    }, function(S) {
                                        var d = new(r.constructor.getVariableGroupType("uae.V2Onboarding.TradingSuitabilityQuestion.TradingSuitabilityQuestionSelectedAnswer$storingdataJSResult"));
                                        return d.newDataOut = e.DataConversion.JSNodeParamConverter.from(S.NewData, e.DataTypes.DataTypes.Text), d
                                    }, {}, {})
                                } finally {
                                    T && T.end()
                                }
                            }, 1), N.isDesktop$Action(i).isDesktopOut) m.consoleLog$Action("A1" + o.getTradingSuitability_A1() + "A2" + o.getTradingSuitability_A2() + "A3" + o.getTradingSuitability_A3() + "A4" + o.getTradingSuitability_A4(), i);
                        else if (o.settrading_suitability(_.value.newDataOut), a.variables.currentPosIn < a.variables.tradingSuitabilityConfigVar.length) {
                            if (m.consoleLog$Action(a.variables.currentPosIn.toString() + "Current pos next", i), a.variables.currentPosIn === 0) o.setTradingSuitability_A1(a.variables.selectedTAConfigVar.answersAttr.getCurrent(i.iterationContext));
                            else if (a.variables.currentPosIn === 1) o.setTradingSuitability_A2(a.variables.selectedTAConfigVar.answersAttr.getCurrent(i.iterationContext));
                            else if (a.variables.currentPosIn === 2) o.setTradingSuitability_A3(a.variables.selectedTAConfigVar.answersAttr.getCurrent(i.iterationContext));
                            else if (a.variables.currentPosIn === 3) {
                                o.setTradingSuitability_A4(a.variables.selectedTAConfigVar.answersAttr.getCurrent(i.iterationContext)), r._submitTradingSuitability$Action(i);
                                return
                            }
                            a.variables.currentPosIn = a.variables.currentPosIn + 1, m.consoleLog$Action(a.variables.currentPosIn.toString() + "Current pos next2", i), r._pickQuestion$Action(a.variables.currentPosIn, i)
                        } else r._submitTradingSuitability$Action(i)
                    } finally {
                        f && f.end()
                    }
                }, 1)
            }), this.__tradingSuitabilityQuestionSelectedAnswer$Action
        }
        set _tradingSuitabilityQuestionSelectedAnswer$Action(t) {
            this.__tradingSuitabilityQuestionSelectedAnswer$Action = t
        }
        get _nextStep$Action() {
            return this.hasOwnProperty("__nextStep$Action") || (this.__nextStep$Action = function(t) {
                var n = this.model,
                    i = this.controller,
                    a = this.idService;
                return e.Logger.startActiveSpan("NextStep", function(r) {
                    r && (r.setAttribute("code.function", "NextStep"), r.setAttribute("outsystems.function.key", "2ee90c68-d6a2-4d12-a481-fdc051528d39"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("NextStep"), t = i.callContext(t), i._checkNext$Action(t)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__nextStep$Action
        }
        set _nextStep$Action(t) {
            this.__nextStep$Action = t
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(t) {
                var n = this.model,
                    i = this.controller,
                    a = this.idService;
                return e.Logger.startActiveSpan("OnReady", function(r) {
                    return r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "341d43a5-3281-4a16-b493-faaa22978f3b"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        i.ensureControllerAlive("OnReady"), t = i.callContext(t);
                        var y = new e.DataTypes.VariableHolder,
                            f = new e.DataTypes.VariableHolder,
                            l = new e.DataTypes.VariableHolder,
                            _ = new e.DataTypes.VariableHolder,
                            T = new e.DataTypes.VariableHolder,
                            S = new e.DataTypes.VariableHolder,
                            d = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                            A = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                            q = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                            Oe = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                            De = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(e.DataTypes.TextList))),
                            ie = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(e.DataTypes.TextList))),
                            we = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(e.DataTypes.TextList))),
                            Pe = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(e.DataTypes.TextList))),
                            xe = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(e.DataTypes.TextList))),
                            Ve = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(e.DataTypes.TextList))),
                            ne = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(e.DataTypes.TextList))),
                            Ne = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(e.DataTypes.TextList)));
                        return e.Flow.executeAsyncFlow(function() {
                            return l.value = m.getAuth$Action(t), m.consoleLog$Action(o.gettrading_assessment_list() + "trading assessment list", t), e.Flow.executeSequence(function() {
                                if (o.gettrading_assessment_list() !== e.BuiltinFunctions.nullTextIdentifier()) i._processConfig$Action(o.gettrading_assessment_list(), t), N.isDesktop$Action(t).isDesktopOut && (o.setTradingSuitability_A1(o.getTradingSuitability_A1() === e.BuiltinFunctions.nullTextIdentifier() ? "" : o.getTradingSuitability_A1()), o.setTradingSuitability_A2(o.getTradingSuitability_A2() === e.BuiltinFunctions.nullTextIdentifier() ? "" : o.getTradingSuitability_A2()), o.setTradingSuitability_A3(o.getTradingSuitability_A3() === e.BuiltinFunctions.nullTextIdentifier() ? "" : o.getTradingSuitability_A3()), o.setTradingSuitability_A4(o.getTradingSuitability_A4() === e.BuiltinFunctions.nullTextIdentifier() ? "" : o.getTradingSuitability_A4()), S.value = e.Logger.startActiveSpan("JavaScript3", function(p) {
                                    p && (p.setAttribute("code.function", "JavaScript3"), p.setAttribute("outsystems.function.key", "e9ea980e-34b8-40b7-943e-755758214731"), p.setAttribute("outsystems.function.owner.name", "uae"), p.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), p.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return i.safeExecuteJSNode(Se, "JavaScript3", "OnReady", {
                                            ConfigData: e.DataConversion.JSNodeParamConverter.to(o.gettrading_assessment_list(), e.DataTypes.DataTypes.Text),
                                            Q1: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                            Q2: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                            Q3: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                            Q4: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                            A1: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                            A2: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                            A3: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                            A4: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                                        }, function(O) {
                                            var h = new(i.constructor.getVariableGroupType("uae.V2Onboarding.TradingSuitabilityQuestion.OnReady$javaScript3JSResult"));
                                            return h.q1Out = e.DataConversion.JSNodeParamConverter.from(O.Q1, e.DataTypes.DataTypes.Text), h.q2Out = e.DataConversion.JSNodeParamConverter.from(O.Q2, e.DataTypes.DataTypes.Text), h.q3Out = e.DataConversion.JSNodeParamConverter.from(O.Q3, e.DataTypes.DataTypes.Text), h.q4Out = e.DataConversion.JSNodeParamConverter.from(O.Q4, e.DataTypes.DataTypes.Text), h.a1Out = e.DataConversion.JSNodeParamConverter.from(O.A1, e.DataTypes.DataTypes.Text), h.a2Out = e.DataConversion.JSNodeParamConverter.from(O.A2, e.DataTypes.DataTypes.Text), h.a3Out = e.DataConversion.JSNodeParamConverter.from(O.A3, e.DataTypes.DataTypes.Text), h.a4Out = e.DataConversion.JSNodeParamConverter.from(O.A4, e.DataTypes.DataTypes.Text), h
                                        }, {}, {})
                                    } finally {
                                        p && p.end()
                                    }
                                }, 1), ie.value.dataOut = e.JSONUtils.deserializeFromJSON(S.value.a1Out, e.DataTypes.TextList, !1), Ne.value.dataOut = e.JSONUtils.deserializeFromJSON(S.value.a2Out, e.DataTypes.TextList, !1), Ve.value.dataOut = e.JSONUtils.deserializeFromJSON(S.value.a3Out, e.DataTypes.TextList, !1), Pe.value.dataOut = e.JSONUtils.deserializeFromJSON(S.value.a4Out, e.DataTypes.TextList, !1), n.variables.question1Var = S.value.q1Out, n.variables.question2Var = S.value.q2Out, n.variables.question3Var = S.value.q3Out, n.variables.question4Var = S.value.q4Out, m.consoleLog$Action("1st question " + n.variables.question1Var + "2nd question" + n.variables.question2Var, t), n.variables.tAAnswer1Var = ie.value.dataOut, n.variables.tAAnswer2Var = Ne.value.dataOut, n.variables.tAAnswer3Var = Ve.value.dataOut, n.variables.tAAnswer4Var = Pe.value.dataOut, Oe.value.jSONOut = e.JSONUtils.serializeToJSON(ie.value.dataOut, !1, !1, e.DataTypes.DataTypes.Text), m.consoleLog$Action("1st answer" + Oe.value.jSONOut, t));
                                else return n.variables.isLoadingVar = !0, n.flush(), i.getTradingSuitabilityConfig$ServerAction(l.value.tokenOut, t).then(function(p) {
                                    y.value = p
                                }).then(function() {
                                    if (y.value.responseOut.dataAttr.isEmpty) return m.consoleLog$Action("error", t), e.Flow.returnAsync();
                                    A.value.jSONOut = e.JSONUtils.serializeToJSON(y.value.responseOut, !1, !1), m.consoleLog$Action("trading assessment list" + A.value.jSONOut, t), o.settrading_assessment_list(A.value.jSONOut), i._processConfig$Action(A.value.jSONOut, t), N.isDesktop$Action(t).isDesktopOut && (o.setTradingSuitability_A1(o.getTradingSuitability_A1() === e.BuiltinFunctions.nullTextIdentifier() ? "" : o.getTradingSuitability_A1()), o.setTradingSuitability_A2(o.getTradingSuitability_A2() === e.BuiltinFunctions.nullTextIdentifier() ? "" : o.getTradingSuitability_A2()), o.setTradingSuitability_A3(o.getTradingSuitability_A3() === e.BuiltinFunctions.nullTextIdentifier() ? "" : o.getTradingSuitability_A3()), o.setTradingSuitability_A4(o.getTradingSuitability_A4() === e.BuiltinFunctions.nullTextIdentifier() ? "" : o.getTradingSuitability_A4()), T.value = e.Logger.startActiveSpan("JavaScript4", function(p) {
                                        p && (p.setAttribute("code.function", "JavaScript4"), p.setAttribute("outsystems.function.key", "73486953-96d1-44b6-8a5d-1aa89433c9dd"), p.setAttribute("outsystems.function.owner.name", "uae"), p.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), p.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                        try {
                                            return i.safeExecuteJSNode(Te, "JavaScript4", "OnReady", {
                                                ConfigData: e.DataConversion.JSNodeParamConverter.to(o.gettrading_assessment_list(), e.DataTypes.DataTypes.Text),
                                                Q1: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                                Q2: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                                Q3: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                                Q4: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                                A1: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                                A2: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                                A3: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                                A4: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                                            }, function(O) {
                                                var h = new(i.constructor.getVariableGroupType("uae.V2Onboarding.TradingSuitabilityQuestion.OnReady$javaScript4JSResult"));
                                                return h.q1Out = e.DataConversion.JSNodeParamConverter.from(O.Q1, e.DataTypes.DataTypes.Text), h.q2Out = e.DataConversion.JSNodeParamConverter.from(O.Q2, e.DataTypes.DataTypes.Text), h.q3Out = e.DataConversion.JSNodeParamConverter.from(O.Q3, e.DataTypes.DataTypes.Text), h.q4Out = e.DataConversion.JSNodeParamConverter.from(O.Q4, e.DataTypes.DataTypes.Text), h.a1Out = e.DataConversion.JSNodeParamConverter.from(O.A1, e.DataTypes.DataTypes.Text), h.a2Out = e.DataConversion.JSNodeParamConverter.from(O.A2, e.DataTypes.DataTypes.Text), h.a3Out = e.DataConversion.JSNodeParamConverter.from(O.A3, e.DataTypes.DataTypes.Text), h.a4Out = e.DataConversion.JSNodeParamConverter.from(O.A4, e.DataTypes.DataTypes.Text), h
                                            }, {}, {})
                                        } finally {
                                            p && p.end()
                                        }
                                    }, 1), ne.value.dataOut = e.JSONUtils.deserializeFromJSON(T.value.a1Out, e.DataTypes.TextList, !1), we.value.dataOut = e.JSONUtils.deserializeFromJSON(T.value.a2Out, e.DataTypes.TextList, !1), De.value.dataOut = e.JSONUtils.deserializeFromJSON(T.value.a3Out, e.DataTypes.TextList, !1), xe.value.dataOut = e.JSONUtils.deserializeFromJSON(T.value.a4Out, e.DataTypes.TextList, !1), n.variables.question1Var = T.value.q1Out, n.variables.question2Var = T.value.q2Out, n.variables.question3Var = T.value.q3Out, n.variables.question4Var = T.value.q4Out, m.consoleLog$Action("1st question " + n.variables.question1Var + "2nd question" + n.variables.question2Var, t), n.variables.tAAnswer1Var = ne.value.dataOut, n.variables.tAAnswer2Var = we.value.dataOut, n.variables.tAAnswer3Var = De.value.dataOut, n.variables.tAAnswer4Var = xe.value.dataOut, q.value.jSONOut = e.JSONUtils.serializeToJSON(ne.value.dataOut, !1, !1, e.DataTypes.DataTypes.Text), m.consoleLog$Action("1st answer" + q.value.jSONOut, t))
                                })
                            }).then(function() {
                                return e.Flow.executeSequence(function() {
                                    if (o.gettrading_suitability() === e.BuiltinFunctions.nullTextIdentifier()) return n.flush(), i.getTradingAssessmentResults$ServerAction(l.value.tokenOut, t).then(function(p) {
                                        f.value = p
                                    }).then(function() {
                                        f.value.responseOut.dataAttr.isEmpty !== !0 && (d.value.jSONOut = e.JSONUtils.serializeToJSON(f.value.responseOut.dataAttr.getCurrent(t.iterationContext).responsesAttr, !1, !1), m.consoleLog$Action(o.gettrading_assessment_list(), t), _.value = e.Logger.startActiveSpan("JavaScript1", function(p) {
                                            p && (p.setAttribute("code.function", "JavaScript1"), p.setAttribute("outsystems.function.key", "0994c974-6ff9-4978-b8aa-f936da8875ff"), p.setAttribute("outsystems.function.owner.name", "uae"), p.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), p.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                            try {
                                                return i.safeExecuteJSNode(Ae, "JavaScript1", "OnReady", {
                                                    resultData: e.DataConversion.JSNodeParamConverter.to(d.value.jSONOut, e.DataTypes.DataTypes.Text),
                                                    config: e.DataConversion.JSNodeParamConverter.to(o.gettrading_assessment_list(), e.DataTypes.DataTypes.Text),
                                                    finalResult: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                                                }, function(O) {
                                                    var h = new(i.constructor.getVariableGroupType("uae.V2Onboarding.TradingSuitabilityQuestion.OnReady$javaScript1JSResult"));
                                                    return h.finalResultOut = e.DataConversion.JSNodeParamConverter.from(O.finalResult, e.DataTypes.DataTypes.Text), h
                                                }, {}, {})
                                            } finally {
                                                p && p.end()
                                            }
                                        }, 1), o.settrading_suitability(_.value.finalResultOut))
                                    })
                                })
                            }).then(function() {
                                i._pickQuestion$Action(n.variables.currentPosIn, t), n.variables.isLoadingVar = !1
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
        get _tradingSuitabilityQuestionHandlePrevious$Action() {
            return this.hasOwnProperty("__tradingSuitabilityQuestionHandlePrevious$Action") || (this.__tradingSuitabilityQuestionHandlePrevious$Action = function(t) {
                var n = this.model,
                    i = this.controller,
                    a = this.idService;
                return e.Logger.startActiveSpan("TradingSuitabilityQuestionHandlePrevious", function(r) {
                    r && (r.setAttribute("code.function", "TradingSuitabilityQuestionHandlePrevious"), r.setAttribute("outsystems.function.key", "3c129a06-a810-4d1c-b99a-22161e3d413a"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        if (i.ensureControllerAlive("TradingSuitabilityQuestionHandlePrevious"), t = i.callContext(t), m.consoleLog$Action("CurrentPos" + n.variables.currentPosIn.toString(), t), n.variables.currentPosIn - 1 < 0) return e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "monthly-essential-expenditure", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.None), t, !0);
                        n.variables.currentPosIn = n.variables.currentPosIn - 1, i._pickQuestion$Action(n.variables.currentPosIn, t)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__tradingSuitabilityQuestionHandlePrevious$Action
        }
        set _tradingSuitabilityQuestionHandlePrevious$Action(t) {
            this.__tradingSuitabilityQuestionHandlePrevious$Action = t
        }
        get _processConfig$Action() {
            return this.hasOwnProperty("__processConfig$Action") || (this.__processConfig$Action = function(t, n) {
                var i = this.model,
                    a = this.controller,
                    r = this.idService;
                return e.Logger.startActiveSpan("ProcessConfig", function(y) {
                    y && (y.setAttribute("code.function", "ProcessConfig"), y.setAttribute("outsystems.function.key", "624487a0-8c4d-4a44-a437-772eb0327503"), y.setAttribute("outsystems.function.owner.name", "uae"), y.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), y.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        a.ensureControllerAlive("ProcessConfig"), n = a.callContext(n);
                        var f = new e.DataTypes.VariableHolder(new(a.constructor.getVariableGroupType("uae.V2Onboarding.TradingSuitabilityQuestion.ProcessConfig$vars")));
                        f.value.inputInLocal = t;
                        var l = new e.DataTypes.VariableHolder,
                            _ = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(e.GenericTypeCache.getGenericList(P))));
                        l.value = e.Logger.startActiveSpan("JavaScript1", function(T) {
                            T && (T.setAttribute("code.function", "JavaScript1"), T.setAttribute("outsystems.function.key", "20748b02-c4bb-41ec-bfc1-8c3d64d33992"), T.setAttribute("outsystems.function.owner.name", "uae"), T.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), T.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return a.safeExecuteJSNode(me, "JavaScript1", "ProcessConfig", {
                                    Config: e.DataConversion.JSNodeParamConverter.to(f.value.inputInLocal, e.DataTypes.DataTypes.Text),
                                    ParsedData: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                                }, function(S) {
                                    var d = new(a.constructor.getVariableGroupType("uae.V2Onboarding.TradingSuitabilityQuestion.ProcessConfig$javaScript1JSResult"));
                                    return d.parsedDataOut = e.DataConversion.JSNodeParamConverter.from(S.ParsedData, e.DataTypes.DataTypes.Text), d
                                }, {}, {})
                            } finally {
                                T && T.end()
                            }
                        }, 1), _.value.dataOut = e.JSONUtils.deserializeFromJSON(l.value.parsedDataOut, e.GenericTypeCache.getGenericList(P), !1), i.variables.tradingSuitabilityConfigVar = _.value.dataOut
                    } finally {
                        y && y.end()
                    }
                }, 1)
            }), this.__processConfig$Action
        }
        set _processConfig$Action(t) {
            this.__processConfig$Action = t
        }
        get _onClickValueDesktop$Action() {
            return this.hasOwnProperty("__onClickValueDesktop$Action") || (this.__onClickValueDesktop$Action = function(t) {
                var n = this.model,
                    i = this.controller,
                    a = this.idService;
                return e.Logger.startActiveSpan("OnClickValueDesktop", function(r) {
                    r && (r.setAttribute("code.function", "OnClickValueDesktop"), r.setAttribute("outsystems.function.key", "6c51c5e4-b5fb-42e1-8b6e-1a497aba465d"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("OnClickValueDesktop"), t = i.callContext(t), i._tradingSuitabilityQuestionSelectedAnswer$Action(n.variables.selectedTAConfigVar.answersAttr.getCurrent(t.iterationContext), "", t)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onClickValueDesktop$Action
        }
        set _onClickValueDesktop$Action(t) {
            this.__onClickValueDesktop$Action = t
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(t) {
                var n = this.model,
                    i = this.controller,
                    a = this.idService;
                return e.Logger.startActiveSpan("OnParametersChanged", function(r) {
                    r && (r.setAttribute("code.function", "OnParametersChanged"), r.setAttribute("outsystems.function.key", "91753a78-4ebc-4210-abb5-60961244cac0"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("OnParametersChanged"), t = i.callContext(t);
                        var y = new e.DataTypes.VariableHolder;
                        y.value = e.Logger.startActiveSpan("JavaScript1", function(f) {
                            f && (f.setAttribute("code.function", "JavaScript1"), f.setAttribute("outsystems.function.key", "357fe6c2-5179-4e28-839d-2509ef1eb289"), f.setAttribute("outsystems.function.owner.name", "uae"), f.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), f.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return i.safeExecuteJSNode(pe, "JavaScript1", "OnParametersChanged", {
                                    Ref: e.DataConversion.JSNodeParamConverter.to(n.variables.selectedTAConfigVar.refAttr, e.DataTypes.DataTypes.Text),
                                    TradingSuitability: e.DataConversion.JSNodeParamConverter.to(o.gettrading_suitability(), e.DataTypes.DataTypes.Text),
                                    UserAnswer: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                                }, function(l) {
                                    var _ = new(i.constructor.getVariableGroupType("uae.V2Onboarding.TradingSuitabilityQuestion.OnParametersChanged$javaScript1JSResult"));
                                    return _.userAnswerOut = e.DataConversion.JSNodeParamConverter.from(l.UserAnswer, e.DataTypes.DataTypes.Text), _
                                }, {}, {})
                            } finally {
                                f && f.end()
                            }
                        }, 1), n.variables.tAAnswerVar = y.value.userAnswerOut
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(t) {
            this.__onParametersChanged$Action = t
        }
        get _dropdownOnChange$Action() {
            return this.hasOwnProperty("__dropdownOnChange$Action") || (this.__dropdownOnChange$Action = function(t) {
                var n = this.model,
                    i = this.controller,
                    a = this.idService;
                return e.Logger.startActiveSpan("DropdownOnChange", function(r) {
                    r && (r.setAttribute("code.function", "DropdownOnChange"), r.setAttribute("outsystems.function.key", "94a3d927-846d-4f92-ade2-33d0c6dc7349"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("DropdownOnChange"), t = i.callContext(t)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__dropdownOnChange$Action
        }
        set _dropdownOnChange$Action(t) {
            this.__dropdownOnChange$Action = t
        }
        get _onClickNext$Action() {
            return this.hasOwnProperty("__onClickNext$Action") || (this.__onClickNext$Action = function(t, n) {
                var i = this.model,
                    a = this.controller,
                    r = this.idService;
                return e.Logger.startActiveSpan("OnClickNext", function(y) {
                    return y && (y.setAttribute("code.function", "OnClickNext"), y.setAttribute("outsystems.function.key", "a55a24ba-1a22-4e94-be5e-929579719fa8"), y.setAttribute("outsystems.function.owner.name", "uae"), y.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), y.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        a.ensureControllerAlive("OnClickNext"), n = a.callContext(n);
                        var f = new e.DataTypes.VariableHolder(new(a.constructor.getVariableGroupType("uae.V2Onboarding.TradingSuitabilityQuestion.OnClickNext$vars")));
                        return f.value.answerInLocal = t, e.Flow.executeAsyncFlow(function() {
                            return i.flush(), Fe.sleep$Action("10", n).then(function() {
                                a._tradingSuitabilityQuestionSelectedAnswer$Action(i.variables.selectedTAConfigVar.answersAttr.getCurrent(n.iterationContext), "", n)
                            })
                        })
                    }, function() {
                        y && y.end()
                    })
                }, 1)
            }), this.__onClickNext$Action
        }
        set _onClickNext$Action(t) {
            this.__onClickNext$Action = t
        }
        get _pickQuestion$Action() {
            return this.hasOwnProperty("__pickQuestion$Action") || (this.__pickQuestion$Action = function(t, n) {
                var i = this.model,
                    a = this.controller,
                    r = this.idService;
                return e.Logger.startActiveSpan("PickQuestion", function(y) {
                    y && (y.setAttribute("code.function", "PickQuestion"), y.setAttribute("outsystems.function.key", "b3900aed-2690-45b3-9424-982afe2f54dd"), y.setAttribute("outsystems.function.owner.name", "uae"), y.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), y.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        a.ensureControllerAlive("PickQuestion"), n = a.callContext(n);
                        var f = new e.DataTypes.VariableHolder(new(a.constructor.getVariableGroupType("uae.V2Onboarding.TradingSuitabilityQuestion.PickQuestion$vars")));
                        f.value.indexInLocal = t;
                        var l = new e.DataTypes.VariableHolder,
                            _ = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                            T = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(P)));
                        _.value.jSONOut = e.JSONUtils.serializeToJSON(i.variables.tradingSuitabilityConfigVar, !1, !1), l.value = e.Logger.startActiveSpan("JavaScript1", function(S) {
                            S && (S.setAttribute("code.function", "JavaScript1"), S.setAttribute("outsystems.function.key", "defdc697-513c-447f-b337-e347b6e41e27"), S.setAttribute("outsystems.function.owner.name", "uae"), S.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), S.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return a.safeExecuteJSNode(_e, "JavaScript1", "PickQuestion", {
                                    ConfigData: e.DataConversion.JSNodeParamConverter.to(_.value.jSONOut, e.DataTypes.DataTypes.Text),
                                    Index: e.DataConversion.JSNodeParamConverter.to(f.value.indexInLocal, e.DataTypes.DataTypes.Integer),
                                    SelectedObj: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                                }, function(d) {
                                    var A = new(a.constructor.getVariableGroupType("uae.V2Onboarding.TradingSuitabilityQuestion.PickQuestion$javaScript1JSResult"));
                                    return A.selectedObjOut = e.DataConversion.JSNodeParamConverter.from(d.SelectedObj, e.DataTypes.DataTypes.Text), A
                                }, {}, {})
                            } finally {
                                S && S.end()
                            }
                        }, 1), T.value.dataOut = e.JSONUtils.deserializeFromJSON(l.value.selectedObjOut, P, !1), i.variables.selectedTAConfigVar = T.value.dataOut, m.consoleLog$Action(i.variables.selectedTAConfigVar.questionAttr + "TA config question", n)
                    } finally {
                        y && y.end()
                    }
                }, 1)
            }), this.__pickQuestion$Action
        }
        set _pickQuestion$Action(t) {
            this.__pickQuestion$Action = t
        }
        get _postTradingSuitability$Action() {
            return this.hasOwnProperty("__postTradingSuitability$Action") || (this.__postTradingSuitability$Action = function(t) {
                var n = this.model,
                    i = this.controller,
                    a = this.idService;
                return e.Logger.startActiveSpan("PostTradingSuitability", function(r) {
                    return r && (r.setAttribute("code.function", "PostTradingSuitability"), r.setAttribute("outsystems.function.key", "ba6d9223-9471-4d41-bc7a-e87992af861a"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        i.ensureControllerAlive("PostTradingSuitability"), t = i.callContext(t);
                        var y = new e.DataTypes.VariableHolder,
                            f = new e.DataTypes.VariableHolder;
                        return e.Flow.executeAsyncFlow(function() {
                            return f.value = m.getAuth$Action(t), n.flush(), i.pOSTTradingAssessment$ServerAction(f.value.tokenOut, (function() {
                                var l = new Je;
                                return l.trading_experienceAttr = o.getTradingSuitability_A3(), l.previous_trading_experienceAttr = o.getTradingSuitability_A4(), l.potential_lossAttr = o.getTradingSuitability_A2(), l.investment_riskAttr = o.getTradingSuitability_A1(), l
                            })(), t).then(function(l) {
                                y.value = l
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__postTradingSuitability$Action
        }
        set _postTradingSuitability$Action(t) {
            this.__postTradingSuitability$Action = t
        }
        get _checkNext$Action() {
            return this.hasOwnProperty("__checkNext$Action") || (this.__checkNext$Action = function(t) {
                var n = this.model,
                    i = this.controller,
                    a = this.idService;
                return e.Logger.startActiveSpan("CheckNext", function(r) {
                    r && (r.setAttribute("code.function", "CheckNext"), r.setAttribute("outsystems.function.key", "ff8cac8a-87e0-449d-82a4-89d1574cd6cb"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        if (i.ensureControllerAlive("CheckNext"), t = i.callContext(t), n.variables.currentPosIn + 1 >= n.variables.tradingSuitabilityConfigVar.length) return i._submitTradingSuitability$Action(t), e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "main-goal", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.None), t, !0);
                        n.variables.currentPosIn = n.variables.currentPosIn + 1, i._pickQuestion$Action(n.variables.currentPosIn, t)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__checkNext$Action
        }
        set _checkNext$Action(t) {
            this.__checkNext$Action = t
        }
        onClickPrevious$Action(t) {
            var n = this.controller;
            return e.Logger.startActiveSpan("OnClickPrevious__proxy", function(i) {
                i && (i.setAttribute("code.function", "OnClickPrevious"), i.setAttribute("outsystems.function.key", "12ff074d-650d-48d3-acb9-37fbcf37a19f"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onClickPrevious$Action, t)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        submitTradingSuitability$Action(t) {
            var n = this.controller;
            return e.Logger.startActiveSpan("SubmitTradingSuitability__proxy", function(i) {
                i && (i.setAttribute("code.function", "SubmitTradingSuitability"), i.setAttribute("outsystems.function.key", "219d3498-3966-4901-8be0-d0b48344c08b"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._submitTradingSuitability$Action, t)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        onClickBack$Action(t) {
            var n = this.controller;
            return e.Logger.startActiveSpan("OnClickBack__proxy", function(i) {
                i && (i.setAttribute("code.function", "OnClickBack"), i.setAttribute("outsystems.function.key", "23f86157-4cf7-41e8-b9ae-3c842d4a2d1f"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onClickBack$Action, t)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        tradingSuitabilityQuestionSelectedAnswer$Action(t, n, i) {
            var a = this.controller;
            return e.Logger.startActiveSpan("TradingSuitabilityQuestionSelectedAnswer__proxy", function(r) {
                r && (r.setAttribute("code.function", "TradingSuitabilityQuestionSelectedAnswer"), r.setAttribute("outsystems.function.key", "269224a1-60a9-4e56-906b-aea5a75c612e"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._tradingSuitabilityQuestionSelectedAnswer$Action, i, t, n)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        nextStep$Action(t) {
            var n = this.controller;
            return e.Logger.startActiveSpan("NextStep__proxy", function(i) {
                i && (i.setAttribute("code.function", "NextStep"), i.setAttribute("outsystems.function.key", "2ee90c68-d6a2-4d12-a481-fdc051528d39"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._nextStep$Action, t)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        onReady$Action(t) {
            var n = this.controller;
            return e.Logger.startActiveSpan("OnReady__proxy", function(i) {
                return i && (i.setAttribute("code.function", "OnReady"), i.setAttribute("outsystems.function.key", "341d43a5-3281-4a16-b493-faaa22978f3b"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onReady$Action, t)
                }, function() {
                    i && i.end()
                })
            }, 0)
        }
        tradingSuitabilityQuestionHandlePrevious$Action(t) {
            var n = this.controller;
            return e.Logger.startActiveSpan("TradingSuitabilityQuestionHandlePrevious__proxy", function(i) {
                i && (i.setAttribute("code.function", "TradingSuitabilityQuestionHandlePrevious"), i.setAttribute("outsystems.function.key", "3c129a06-a810-4d1c-b99a-22161e3d413a"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._tradingSuitabilityQuestionHandlePrevious$Action, t)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        processConfig$Action(t, n) {
            var i = this.controller;
            return e.Logger.startActiveSpan("ProcessConfig__proxy", function(a) {
                a && (a.setAttribute("code.function", "ProcessConfig"), a.setAttribute("outsystems.function.key", "624487a0-8c4d-4a44-a437-772eb0327503"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._processConfig$Action, n, t)
                } finally {
                    a && a.end()
                }
            }, 0)
        }
        onClickValueDesktop$Action(t) {
            var n = this.controller;
            return e.Logger.startActiveSpan("OnClickValueDesktop__proxy", function(i) {
                i && (i.setAttribute("code.function", "OnClickValueDesktop"), i.setAttribute("outsystems.function.key", "6c51c5e4-b5fb-42e1-8b6e-1a497aba465d"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onClickValueDesktop$Action, t)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        onParametersChanged$Action(t) {
            var n = this.controller;
            return e.Logger.startActiveSpan("OnParametersChanged__proxy", function(i) {
                i && (i.setAttribute("code.function", "OnParametersChanged"), i.setAttribute("outsystems.function.key", "91753a78-4ebc-4210-abb5-60961244cac0"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onParametersChanged$Action, t)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        dropdownOnChange$Action(t) {
            var n = this.controller;
            return e.Logger.startActiveSpan("DropdownOnChange__proxy", function(i) {
                i && (i.setAttribute("code.function", "DropdownOnChange"), i.setAttribute("outsystems.function.key", "94a3d927-846d-4f92-ade2-33d0c6dc7349"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._dropdownOnChange$Action, t)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        onClickNext$Action(t, n) {
            var i = this.controller;
            return e.Logger.startActiveSpan("OnClickNext__proxy", function(a) {
                return a && (a.setAttribute("code.function", "OnClickNext"), a.setAttribute("outsystems.function.key", "a55a24ba-1a22-4e94-be5e-929579719fa8"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._onClickNext$Action, n, t)
                }, function() {
                    a && a.end()
                })
            }, 0)
        }
        pickQuestion$Action(t, n) {
            var i = this.controller;
            return e.Logger.startActiveSpan("PickQuestion__proxy", function(a) {
                a && (a.setAttribute("code.function", "PickQuestion"), a.setAttribute("outsystems.function.key", "b3900aed-2690-45b3-9424-982afe2f54dd"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._pickQuestion$Action, n, t)
                } finally {
                    a && a.end()
                }
            }, 0)
        }
        postTradingSuitability$Action(t) {
            var n = this.controller;
            return e.Logger.startActiveSpan("PostTradingSuitability__proxy", function(i) {
                return i && (i.setAttribute("code.function", "PostTradingSuitability"), i.setAttribute("outsystems.function.key", "ba6d9223-9471-4d41-bc7a-e87992af861a"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._postTradingSuitability$Action, t)
                }, function() {
                    i && i.end()
                })
            }, 0)
        }
        checkNext$Action(t) {
            var n = this.controller;
            return e.Logger.startActiveSpan("CheckNext__proxy", function(i) {
                i && (i.setAttribute("code.function", "CheckNext"), i.setAttribute("outsystems.function.key", "ff8cac8a-87e0-449d-82a4-89d1574cd6cb"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._checkNext$Action, t)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        get handlePrevious$Action() {
            return this.hasOwnProperty("_handlePrevious$Action") || (this._handlePrevious$Action = function() {
                return Promise.resolve()
            }), this._handlePrevious$Action
        }
        set handlePrevious$Action(t) {
            this._handlePrevious$Action = t
        }
        get selectedAnswer$Action() {
            return this.hasOwnProperty("_selectedAnswer$Action") || (this._selectedAnswer$Action = function() {
                return Promise.resolve()
            }), this._selectedAnswer$Action
        }
        set selectedAnswer$Action(t) {
            this._selectedAnswer$Action = t
        }
        get handleNextButton$Action() {
            return this.hasOwnProperty("_handleNextButton$Action") || (this._handleNextButton$Action = function() {
                return Promise.resolve()
            }), this._handleNextButton$Action
        }
        set handleNextButton$Action(t) {
            this._handleNextButton$Action = t
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(t) {
            this._onInitializeEventHandler = t
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(t) {
                var n = this.controller,
                    i = this.model,
                    a = this.idService;
                return n.onReady$Action(t)
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
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = function(t) {
                var n = this.controller,
                    i = this.model,
                    a = this.idService;
                return n.onParametersChanged$Action(t)
            }), this._onParametersChangedEventHandler
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
                return controller.handleError(t)
            }), this._handleError
        }
        set handleError(t) {
            this._handleError = t
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return m.defaultTimeout
        }
    };
    u(g, "ControllerInner");
    let c = g;
    D = c, D.registerVariableGroupType("uae.V2Onboarding.TradingSuitabilityQuestion$ActionGetTradingSuitabilityConfig", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: e.DataTypes.DataTypes.Record,
        defaultValue: u(function() {
            return new j
        }, "defaultValue"),
        complexType: j
    }]), D.registerVariableGroupType("uae.V2Onboarding.TradingSuitabilityQuestion$ActionGetTradingAssessmentResults", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: e.DataTypes.DataTypes.Record,
        defaultValue: u(function() {
            return new B
        }, "defaultValue"),
        complexType: B
    }]), D.registerVariableGroupType("uae.V2Onboarding.TradingSuitabilityQuestion$ActionPOSTTradingAssessment", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: e.DataTypes.DataTypes.Record,
        defaultValue: u(function() {
            return new W
        }, "defaultValue"),
        complexType: W
    }]), D.registerVariableGroupType("uae.V2Onboarding.TradingSuitabilityQuestion.TradingSuitabilityQuestionSelectedAnswer$vars", [{
        name: "Answer",
        attrName: "answerInLocal",
        mandatory: !1,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "QuestionNum",
        attrName: "questionNumInLocal",
        mandatory: !1,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }]), D.registerVariableGroupType("uae.V2Onboarding.TradingSuitabilityQuestion.TradingSuitabilityQuestionSelectedAnswer$storingdataJSResult", [{
        name: "NewData",
        attrName: "newDataOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }]), D.registerVariableGroupType("uae.V2Onboarding.TradingSuitabilityQuestion.OnReady$javaScript1JSResult", [{
        name: "finalResult",
        attrName: "finalResultOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }]), D.registerVariableGroupType("uae.V2Onboarding.TradingSuitabilityQuestion.OnReady$javaScript4JSResult", [{
        name: "Q1",
        attrName: "q1Out",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "Q2",
        attrName: "q2Out",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "Q3",
        attrName: "q3Out",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "Q4",
        attrName: "q4Out",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "A1",
        attrName: "a1Out",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "A2",
        attrName: "a2Out",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "A3",
        attrName: "a3Out",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "A4",
        attrName: "a4Out",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }]), D.registerVariableGroupType("uae.V2Onboarding.TradingSuitabilityQuestion.OnReady$javaScript3JSResult", [{
        name: "Q1",
        attrName: "q1Out",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "Q2",
        attrName: "q2Out",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "Q3",
        attrName: "q3Out",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "Q4",
        attrName: "q4Out",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "A1",
        attrName: "a1Out",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "A2",
        attrName: "a2Out",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "A3",
        attrName: "a3Out",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "A4",
        attrName: "a4Out",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }]), D.registerVariableGroupType("uae.V2Onboarding.TradingSuitabilityQuestion.ProcessConfig$vars", [{
        name: "Input",
        attrName: "inputInLocal",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }]), D.registerVariableGroupType("uae.V2Onboarding.TradingSuitabilityQuestion.ProcessConfig$javaScript1JSResult", [{
        name: "ParsedData",
        attrName: "parsedDataOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }]), D.registerVariableGroupType("uae.V2Onboarding.TradingSuitabilityQuestion.OnParametersChanged$javaScript1JSResult", [{
        name: "UserAnswer",
        attrName: "userAnswerOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }]), D.registerVariableGroupType("uae.V2Onboarding.TradingSuitabilityQuestion.OnClickNext$vars", [{
        name: "Answer",
        attrName: "answerInLocal",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }]), D.registerVariableGroupType("uae.V2Onboarding.TradingSuitabilityQuestion.PickQuestion$vars", [{
        name: "Index",
        attrName: "indexInLocal",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Integer,
        defaultValue: u(function() {
            return 0
        }, "defaultValue")
    }]), D.registerVariableGroupType("uae.V2Onboarding.TradingSuitabilityQuestion.PickQuestion$javaScript1JSResult", [{
        name: "SelectedObj",
        attrName: "selectedObjOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }])
}
var D, Ye = new e.Controller.ControllerFactory(D, z);
var E = R.PlaceholderContent,
    F = R.IteratorPlaceholderContent,
    rt = u(function() {
        var c = He(function(g) {
            var s = g.model,
                t = g.controller,
                n = g.controller.idService,
                i = t.validationService,
                a = t.callContext(),
                r = K,
                y = L,
                f = {
                    props: g,
                    validateWidget: u(function(d) {
                        g.validateWidget(g, d)
                    }, "validateWidget")
                },
                l = s,
                _ = U,
                T = M,
                S = G();
            return v.createElement("div", g.rootNodeProperties, _(N.isDesktop$Action(a).isDesktopOut, !1, this, function() {
                return [v.createElement(X, {
                    getOwnerSpan: u(function() {
                        return S.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: u(function() {
                        return S.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        Heading: "Trading suitability",
                        Progress: 66,
                        BtnBackVisible: !0
                    },
                    events: {
                        _handleError: u(function(d) {
                            t.handleError(d)
                        }, "_handleError"),
                        event_ClickBtnBack$Action: u(function() {
                            var d = typeof a != "undefined" && a !== null ? a.clone() : t.callContext().clone();
                            t.onClickBack$Action(t.callContext(d))
                        }, "event_ClickBtnBack$Action")
                    },
                    _validationProps: {
                        validationService: i
                    },
                    _idProps: {
                        service: n,
                        uuid: "0",
                        alias: "1"
                    },
                    _widgetRecordProvider: l,
                    placeholders: {
                        content: new E(function() {
                            return [v.createElement(C, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "padding-bottom: 40px;"
                                },
                                style: "flex flex-col",
                                visible: !0,
                                _idProps: {
                                    service: n,
                                    uuid: "1"
                                },
                                _widgetRecordProvider: l
                            }, v.createElement(C, {
                                align: 0,
                                animate: !1,
                                style: "mb-6",
                                visible: !0,
                                _idProps: {
                                    service: n,
                                    name: "SourceOfIncomeSelectionContainer2"
                                },
                                _widgetRecordProvider: l
                            }, _(s.variables.selectedTAConfigVar.answersAttr.length < 1, !1, this, function() {
                                return [v.createElement(C, {
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
                                        service: n,
                                        name: "LoaderContainer3"
                                    },
                                    _widgetRecordProvider: l
                                }, v.createElement(C, {
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
                                        service: n,
                                        name: "ListItemPlaceholder6"
                                    },
                                    _widgetRecordProvider: l
                                }), v.createElement(C, {
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
                                        service: n,
                                        name: "ListItemPlaceholder7"
                                    },
                                    _widgetRecordProvider: l
                                }), v.createElement(C, {
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
                                        service: n,
                                        name: "ListItemPlaceholder8"
                                    },
                                    _widgetRecordProvider: l
                                }), v.createElement(C, {
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
                                        service: n,
                                        name: "ListItemPlaceholder9"
                                    },
                                    _widgetRecordProvider: l
                                }))]
                            }, function() {
                                return [v.createElement(C, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "gap: 24px;"
                                    },
                                    style: "display-flex flex-direction-column",
                                    visible: !0,
                                    _idProps: {
                                        service: n,
                                        uuid: "8"
                                    },
                                    _widgetRecordProvider: l
                                }, v.createElement(C, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "display: flex; flex-direction: column; gap: 8px;"
                                    },
                                    visible: !0,
                                    _idProps: {
                                        service: n,
                                        name: "Question_1"
                                    },
                                    _widgetRecordProvider: l
                                }, v.createElement(w, {
                                    value: s.getCachedValue(n.getId("wC1CkDrKt0+rl00zLoPUPA.Value"), function() {
                                        return m.translate$Action(s.variables.question1Var, a).translatedTextOut
                                    }, function() {
                                        return s.variables.question1Var
                                    }),
                                    _idProps: {
                                        service: n,
                                        uuid: "10"
                                    },
                                    _widgetRecordProvider: l
                                }), v.createElement(Q, {
                                    _validationProps: {
                                        validationService: i
                                    },
                                    dropdownMode: 1,
                                    emptyValue: s.getCachedValue(n.getId("Dropdown8.EmptyValue"), function() {
                                        return o.getTradingSuitability_A1() === x.nullTextIdentifier() ? k.resolve($.TranslationsService).getMessage("ZNcIAx75q0Ku6r8bkuCpSw#ValueExpression.-1822154468.1", "Select") : ""
                                    }, function() {
                                        return o.getTradingSuitability_A1()
                                    }),
                                    enabled: !0,
                                    list: s.variables.tAAnswer1Var,
                                    mandatory: !1,
                                    onChange: u(function() {
                                        var d = typeof a != "undefined" && a !== null ? a.clone() : t.callContext().clone();
                                        t.tradingSuitabilityQuestionSelectedAnswer$Action("", "1", t.callContext(d))
                                    }, "onChange"),
                                    style: "dropdown",
                                    values: u(function(d) {
                                        return d
                                    }, "values"),
                                    variable: s.createVariable(J.DataTypes.Text, o.getTradingSuitability_A1(), function(d) {
                                        o.setTradingSuitability_A1(d)
                                    }),
                                    _idProps: {
                                        service: n,
                                        name: "Dropdown8"
                                    },
                                    _widgetRecordProvider: l,
                                    placeholders: {
                                        content: new F(function(d, A) {
                                            return [v.createElement(w, {
                                                value: s.getCachedValue(d.getId("FizBG+zhLEOJybjaNlCIAw.Value"), function() {
                                                    return m.translate$Action(s.variables.tAAnswer1Var.getCurrent(A.iterationContext), A).translatedTextOut
                                                }, function() {
                                                    return s.variables.tAAnswer1Var.getCurrent(A.iterationContext)
                                                }),
                                                _idProps: {
                                                    service: d,
                                                    uuid: "12"
                                                },
                                                _widgetRecordProvider: l,
                                                _dependencies: []
                                            })]
                                        }, a, n, "1")
                                    },
                                    _dependencies: []
                                })), v.createElement(C, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "display: flex; flex-direction: column; gap: 8px;"
                                    },
                                    visible: !0,
                                    _idProps: {
                                        service: n,
                                        name: "Question_2"
                                    },
                                    _widgetRecordProvider: l
                                }, v.createElement(w, {
                                    value: s.getCachedValue(n.getId("W9MkZuciH0O3zFtyjln8Cw.Value"), function() {
                                        return m.translate$Action(s.variables.question2Var, a).translatedTextOut
                                    }, function() {
                                        return s.variables.question2Var
                                    }),
                                    _idProps: {
                                        service: n,
                                        uuid: "14"
                                    },
                                    _widgetRecordProvider: l
                                }), v.createElement(Q, {
                                    _validationProps: {
                                        validationService: i
                                    },
                                    dropdownMode: 1,
                                    emptyValue: s.getCachedValue(n.getId("Dropdown9.EmptyValue"), function() {
                                        return o.getTradingSuitability_A2() === x.nullTextIdentifier() ? k.resolve($.TranslationsService).getMessage("isj8GepmzUuQnkN6L0aJ1A#ValueExpression.-1822154468.1", "Select") : ""
                                    }, function() {
                                        return o.getTradingSuitability_A2()
                                    }),
                                    enabled: !0,
                                    list: s.variables.tAAnswer2Var,
                                    mandatory: !1,
                                    onChange: u(function() {
                                        var d = typeof a != "undefined" && a !== null ? a.clone() : t.callContext().clone();
                                        t.tradingSuitabilityQuestionSelectedAnswer$Action("", "2", t.callContext(d))
                                    }, "onChange"),
                                    style: "dropdown",
                                    values: u(function(d) {
                                        return d
                                    }, "values"),
                                    variable: s.createVariable(J.DataTypes.Text, o.getTradingSuitability_A2(), function(d) {
                                        o.setTradingSuitability_A2(d)
                                    }),
                                    _idProps: {
                                        service: n,
                                        name: "Dropdown9"
                                    },
                                    _widgetRecordProvider: l,
                                    placeholders: {
                                        content: new F(function(d, A) {
                                            return [v.createElement(w, {
                                                value: s.getCachedValue(d.getId("5Vu08cvqSUaKAzgHQB5TIQ.Value"), function() {
                                                    return m.translate$Action(s.variables.tAAnswer2Var.getCurrent(A.iterationContext), A).translatedTextOut
                                                }, function() {
                                                    return s.variables.tAAnswer2Var.getCurrent(A.iterationContext)
                                                }),
                                                _idProps: {
                                                    service: d,
                                                    uuid: "16"
                                                },
                                                _widgetRecordProvider: l,
                                                _dependencies: []
                                            })]
                                        }, a, n, "2")
                                    },
                                    _dependencies: []
                                })), v.createElement(C, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "display: flex; flex-direction: column; gap: 8px;"
                                    },
                                    visible: !0,
                                    _idProps: {
                                        service: n,
                                        name: "Question_3"
                                    },
                                    _widgetRecordProvider: l
                                }, v.createElement(w, {
                                    value: s.getCachedValue(n.getId("Q1STlbhApESRUlk_ly4RBw.Value"), function() {
                                        return m.translate$Action(s.variables.question3Var, a).translatedTextOut
                                    }, function() {
                                        return s.variables.question3Var
                                    }),
                                    _idProps: {
                                        service: n,
                                        uuid: "18"
                                    },
                                    _widgetRecordProvider: l
                                }), v.createElement(Q, {
                                    _validationProps: {
                                        validationService: i
                                    },
                                    dropdownMode: 1,
                                    emptyValue: s.getCachedValue(n.getId("Dropdown10.EmptyValue"), function() {
                                        return o.getTradingSuitability_A3() === x.nullTextIdentifier() ? k.resolve($.TranslationsService).getMessage("GX+VwFw+lUSlFz2GpY9LgQ#ValueExpression.-1822154468.1", "Select") : ""
                                    }, function() {
                                        return o.getTradingSuitability_A3()
                                    }),
                                    enabled: !0,
                                    list: s.variables.tAAnswer3Var,
                                    mandatory: !1,
                                    onChange: u(function() {
                                        var d = typeof a != "undefined" && a !== null ? a.clone() : t.callContext().clone();
                                        t.tradingSuitabilityQuestionSelectedAnswer$Action("", "3", t.callContext(d))
                                    }, "onChange"),
                                    style: "dropdown",
                                    values: u(function(d) {
                                        return d
                                    }, "values"),
                                    variable: s.createVariable(J.DataTypes.Text, o.getTradingSuitability_A3(), function(d) {
                                        o.setTradingSuitability_A3(d)
                                    }),
                                    _idProps: {
                                        service: n,
                                        name: "Dropdown10"
                                    },
                                    _widgetRecordProvider: l,
                                    placeholders: {
                                        content: new F(function(d, A) {
                                            return [v.createElement(w, {
                                                value: s.getCachedValue(d.getId("DhbE31jwwk+rHizgMgj+xg.Value"), function() {
                                                    return m.translate$Action(s.variables.tAAnswer3Var.getCurrent(A.iterationContext), A).translatedTextOut
                                                }, function() {
                                                    return s.variables.tAAnswer3Var.getCurrent(A.iterationContext)
                                                }),
                                                _idProps: {
                                                    service: d,
                                                    uuid: "20"
                                                },
                                                _widgetRecordProvider: l,
                                                _dependencies: []
                                            })]
                                        }, a, n, "3")
                                    },
                                    _dependencies: []
                                })), v.createElement(C, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "display: flex; flex-direction: column; gap: 8px;"
                                    },
                                    visible: !0,
                                    _idProps: {
                                        service: n,
                                        name: "Question_4"
                                    },
                                    _widgetRecordProvider: l
                                }, v.createElement(w, {
                                    value: s.getCachedValue(n.getId("XvxgkjuodEa0Smqcr+MkCA.Value"), function() {
                                        return m.translate$Action(s.variables.question4Var, a).translatedTextOut
                                    }, function() {
                                        return s.variables.question4Var
                                    }),
                                    _idProps: {
                                        service: n,
                                        uuid: "22"
                                    },
                                    _widgetRecordProvider: l
                                }), v.createElement(Q, {
                                    _validationProps: {
                                        validationService: i
                                    },
                                    dropdownMode: 1,
                                    emptyValue: s.getCachedValue(n.getId("Dropdown11.EmptyValue"), function() {
                                        return o.getTradingSuitability_A4() === x.nullTextIdentifier() ? k.resolve($.TranslationsService).getMessage("84d6miht20ilgeg_Cjqi6Q#ValueExpression.-1822154468.1", "Select") : ""
                                    }, function() {
                                        return o.getTradingSuitability_A4()
                                    }),
                                    enabled: !0,
                                    list: s.variables.tAAnswer4Var,
                                    mandatory: !1,
                                    onChange: u(function() {
                                        var d = typeof a != "undefined" && a !== null ? a.clone() : t.callContext().clone();
                                        t.tradingSuitabilityQuestionSelectedAnswer$Action("", "4", t.callContext(d))
                                    }, "onChange"),
                                    style: "dropdown",
                                    values: u(function(d) {
                                        return d
                                    }, "values"),
                                    variable: s.createVariable(J.DataTypes.Text, o.getTradingSuitability_A4(), function(d) {
                                        o.setTradingSuitability_A4(d)
                                    }),
                                    _idProps: {
                                        service: n,
                                        name: "Dropdown11"
                                    },
                                    _widgetRecordProvider: l,
                                    placeholders: {
                                        content: new F(function(d, A) {
                                            return [v.createElement(w, {
                                                value: s.getCachedValue(d.getId("62X4gonJ_kebpnpXM1nYJQ.Value"), function() {
                                                    return m.translate$Action(s.variables.tAAnswer4Var.getCurrent(A.iterationContext), A).translatedTextOut
                                                }, function() {
                                                    return s.variables.tAAnswer4Var.getCurrent(A.iterationContext)
                                                }),
                                                _idProps: {
                                                    service: d,
                                                    uuid: "24"
                                                },
                                                _widgetRecordProvider: l,
                                                _dependencies: []
                                            })]
                                        }, a, n, "4")
                                    },
                                    _dependencies: []
                                })))]
                            })))]
                        }),
                        buttonContainer: new E(function() {
                            return [v.createElement(C, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "align-items: flex-end; display: flex; flex-direction: column;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: n,
                                    uuid: "25"
                                },
                                _widgetRecordProvider: l
                            }, v.createElement(qe, {
                                enabled: s.getCachedValue(n.getId("NextButton4.Enabled"), function() {
                                    return o.getTradingSuitability_A1() !== x.nullTextIdentifier() && o.getTradingSuitability_A2() !== x.nullTextIdentifier() && o.getTradingSuitability_A3() !== x.nullTextIdentifier() && o.getTradingSuitability_A4() !== x.nullTextIdentifier()
                                }, function() {
                                    return o.getTradingSuitability_A1()
                                }, function() {
                                    return o.getTradingSuitability_A2()
                                }, function() {
                                    return o.getTradingSuitability_A3()
                                }, function() {
                                    return o.getTradingSuitability_A4()
                                }),
                                extendedProperties: {
                                    style: "border-radius: 24px; height: 48px;"
                                },
                                gridProperties: {
                                    width: "130px"
                                },
                                isDefault: !1,
                                onClick: u(function() {
                                    var d = typeof a != "undefined" && a !== null ? a.clone() : t.callContext().clone();
                                    t.submitTradingSuitability$Action(t.callContext(d))
                                }, "onClick"),
                                style: s.getCachedValue(n.getId("NextButton4.Style"), function() {
                                    return N.isDesktop$Action(a).isDesktopOut ? "btn btn-primary" : "btn btn-primary action-button"
                                }),
                                visible: !0,
                                _idProps: {
                                    service: n,
                                    name: "NextButton4"
                                },
                                _widgetRecordProvider: l
                            }, v.createElement(ze, {
                                extendedProperties: {
                                    style: "font-size: 16px; font-weight: bold;"
                                },
                                text: [T(y("37_luJVzBEeKnHtGqWvEjg#Value", "Continue"))],
                                _idProps: {
                                    service: n,
                                    uuid: "27"
                                },
                                _widgetRecordProvider: l
                            })))]
                        })
                    },
                    _dependencies: [r(s.variables.tAAnswer4Var), r(o.getTradingSuitability_A4()), r(s.variables.question4Var), r(s.variables.tAAnswer3Var), r(o.getTradingSuitability_A3()), r(s.variables.question3Var), r(s.variables.tAAnswer2Var), r(o.getTradingSuitability_A2()), r(s.variables.question2Var), r(s.variables.tAAnswer1Var), r(o.getTradingSuitability_A1()), r(s.variables.question1Var), r(s.variables.selectedTAConfigVar.answersAttr.length)]
                })]
            }, function() {
                return [v.createElement(X, {
                    getOwnerSpan: u(function() {
                        return S.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: u(function() {
                        return S.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        BtnBackVisible: !0,
                        Progress: 66,
                        Heading: "Trading suitability"
                    },
                    events: {
                        _handleError: u(function(d) {
                            t.handleError(d)
                        }, "_handleError"),
                        event_ClickBtnBack$Action: u(function() {
                            var d = typeof a != "undefined" && a !== null ? a.clone() : t.callContext().clone();
                            t.onClickBack$Action(t.callContext(d))
                        }, "event_ClickBtnBack$Action")
                    },
                    _validationProps: {
                        validationService: i
                    },
                    _idProps: {
                        service: n,
                        uuid: "28",
                        alias: "2"
                    },
                    _widgetRecordProvider: l,
                    placeholders: {
                        content: new E(function() {
                            return [v.createElement(C, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "padding-bottom: 40px;"
                                },
                                style: "flex flex-col",
                                visible: !0,
                                _idProps: {
                                    service: n,
                                    uuid: "29"
                                },
                                _widgetRecordProvider: l
                            }, v.createElement(w, {
                                extendedProperties: {
                                    style: "font-size: 24px;"
                                },
                                style: s.getCachedValue(n.getId("rPpQDHqZaUqsdLldko1vEA.Style"), function() {
                                    return N.isDesktop$Action(a).isDesktopOut ? "margin-bottom-base text-xl font-extra-bold" : "margin-bottom-base text-2xl font-extra-bold"
                                }),
                                value: s.getCachedValue(n.getId("rPpQDHqZaUqsdLldko1vEA.Value"), function() {
                                    return m.translate$Action(s.variables.selectedTAConfigVar.questionAttr, a).translatedTextOut
                                }, function() {
                                    return s.variables.selectedTAConfigVar.questionAttr
                                }),
                                _idProps: {
                                    service: n,
                                    uuid: "30"
                                },
                                _widgetRecordProvider: l
                            }), v.createElement(C, {
                                align: 0,
                                animate: !1,
                                style: "mb-6",
                                visible: !0,
                                _idProps: {
                                    service: n,
                                    name: "SourceOfIncomeSelectionContainer"
                                },
                                _widgetRecordProvider: l
                            }, _(s.variables.selectedTAConfigVar.answersAttr.length < 1, !1, this, function() {
                                return [v.createElement(C, {
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
                                        service: n,
                                        name: "LoaderContainer2"
                                    },
                                    _widgetRecordProvider: l
                                }, v.createElement(C, {
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
                                        service: n,
                                        name: "ListItemPlaceholder2"
                                    },
                                    _widgetRecordProvider: l
                                }), v.createElement(C, {
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
                                        service: n,
                                        name: "ListItemPlaceholder3"
                                    },
                                    _widgetRecordProvider: l
                                }), v.createElement(C, {
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
                                        service: n,
                                        name: "ListItemPlaceholder4"
                                    },
                                    _widgetRecordProvider: l
                                }), v.createElement(C, {
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
                                        service: n,
                                        name: "ListItemPlaceholder5"
                                    },
                                    _widgetRecordProvider: l
                                }))]
                            }, function() {
                                return [v.createElement(Be, {
                                    animateItems: !1,
                                    gridProperties: {
                                        classes: "OSFillParent"
                                    },
                                    mode: 0,
                                    source: s.variables.selectedTAConfigVar.answersAttr,
                                    style: "currency list-container list list-group",
                                    tag: "div",
                                    _idProps: {
                                        service: n,
                                        name: "AnswerList"
                                    },
                                    _widgetRecordProvider: l,
                                    placeholders: {
                                        content: new F(function(d, A) {
                                            return [v.createElement(We, {
                                                extendedProperties: {
                                                    style: "border: 1px solid rgba(0, 0, 0, 0.04);"
                                                },
                                                onClick: u(function() {
                                                    return Promise.resolve().then(function() {
                                                        var q = typeof A != "undefined" && A !== null ? A.clone() : t.callContext().clone();
                                                        return t.onClickNext$Action(s.variables.selectedTAConfigVar.answersAttr.getCurrent(A.iterationContext), t.callContext(q))
                                                    })
                                                }, "onClick"),
                                                style: s.getCachedValue(d.getId("AnswerListItems.Style"), function() {
                                                    return s.variables.currentPosIn === 0 && s.variables.selectedTAConfigVar.answersAttr.getCurrent(A.iterationContext) === o.getTradingSuitability_A1() || s.variables.currentPosIn === 1 && s.variables.selectedTAConfigVar.answersAttr.getCurrent(A.iterationContext) === o.getTradingSuitability_A2() || s.variables.currentPosIn === 2 && s.variables.selectedTAConfigVar.answersAttr.getCurrent(A.iterationContext) === o.getTradingSuitability_A3() || s.variables.currentPosIn === 3 && s.variables.selectedTAConfigVar.answersAttr.getCurrent(A.iterationContext) === o.getTradingSuitability_A4() ? "currency list-item item-selected" : "currency list-item"
                                                }, function() {
                                                    return s.variables.currentPosIn
                                                }, function() {
                                                    return s.variables.selectedTAConfigVar.answersAttr.getCurrent(A.iterationContext)
                                                }, function() {
                                                    return o.getTradingSuitability_A1()
                                                }, function() {
                                                    return o.getTradingSuitability_A2()
                                                }, function() {
                                                    return o.getTradingSuitability_A3()
                                                }, function() {
                                                    return o.getTradingSuitability_A4()
                                                }),
                                                triggerActionOnFullSwipeLeft: !1,
                                                triggerActionOnFullSwipeRight: !1,
                                                _idProps: {
                                                    service: d,
                                                    name: "AnswerListItems"
                                                },
                                                _widgetRecordProvider: l,
                                                style_dataFetchStatus: $e.calculateDataFetchStatus(s.variables._currentPosInDataFetchStatus),
                                                placeholders: {
                                                    leftActions: E.Empty,
                                                    content: new E(function() {
                                                        return [v.createElement(C, {
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
                                                                uuid: "39"
                                                            },
                                                            _widgetRecordProvider: l
                                                        }, v.createElement(w, {
                                                            extendedProperties: {
                                                                style: "font-size: 16px;"
                                                            },
                                                            value: s.getCachedValue(d.getId("NIBgOsN6u0CHTMfKKuWrLw.Value"), function() {
                                                                return m.translate$Action(s.variables.selectedTAConfigVar.answersAttr.getCurrent(A.iterationContext), A).translatedTextOut
                                                            }, function() {
                                                                return s.variables.selectedTAConfigVar.answersAttr.getCurrent(A.iterationContext)
                                                            }),
                                                            _idProps: {
                                                                service: d,
                                                                uuid: "40"
                                                            },
                                                            _widgetRecordProvider: l
                                                        }), v.createElement(C, {
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
                                                                uuid: "41"
                                                            },
                                                            _widgetRecordProvider: l
                                                        }, _(s.variables.currentPosIn === 0 ? s.variables.selectedTAConfigVar.answersAttr.getCurrent(A.iterationContext) === o.getTradingSuitability_A1() : s.variables.currentPosIn === 1 ? s.variables.selectedTAConfigVar.answersAttr.getCurrent(A.iterationContext) === o.getTradingSuitability_A2() : s.variables.currentPosIn === 2 ? s.variables.selectedTAConfigVar.answersAttr.getCurrent(A.iterationContext) === o.getTradingSuitability_A3() : s.variables.currentPosIn === 3 ? s.variables.selectedTAConfigVar.answersAttr.getCurrent(A.iterationContext) === o.getTradingSuitability_A4() : !1, !1, this, function() {
                                                            return [v.createElement(je, {
                                                                extendedProperties: {
                                                                    style: "left: 15px; position: relative;"
                                                                },
                                                                image: ke.VersionedURL.getVersionedUrl("img/uae.circlecheck.svg"),
                                                                type: 0,
                                                                _idProps: {
                                                                    service: d,
                                                                    uuid: "42"
                                                                },
                                                                _widgetRecordProvider: l
                                                            })]
                                                        }, function() {
                                                            return []
                                                        })))]
                                                    }),
                                                    rightActions: E.Empty
                                                },
                                                _dependencies: [r(s.variables._currentPosInDataFetchStatus), r(o.getTradingSuitability_A4()), r(o.getTradingSuitability_A3()), r(o.getTradingSuitability_A2()), r(o.getTradingSuitability_A1()), r(s.variables.currentPosIn), r(s.variables.selectedTAConfigVar.answersAttr.getCurrent(A.iterationContext))]
                                            })]
                                        }, a, n, "5")
                                    },
                                    _dependencies: [r(s.variables._currentPosInDataFetchStatus), r(o.getTradingSuitability_A4()), r(o.getTradingSuitability_A3()), r(o.getTradingSuitability_A2()), r(o.getTradingSuitability_A1()), r(s.variables.currentPosIn)]
                                })]
                            })))]
                        }),
                        buttonContainer: E.Empty
                    },
                    _dependencies: [r(s.variables._currentPosInDataFetchStatus), r(o.getTradingSuitability_A4()), r(o.getTradingSuitability_A3()), r(o.getTradingSuitability_A2()), r(o.getTradingSuitability_A1()), r(s.variables.currentPosIn), r(s.variables.selectedTAConfigVar.answersAttr), r(s.variables.selectedTAConfigVar.questionAttr)]
                })]
            }))
        }, {
            topLevelComponent: !1,
            getAttributes: u(function() {
                return {
                    codeFunction: "TradingSuitabilityQuestion",
                    functionKey: "a2b6c907-7891-4889-a11e-a18343d279bd",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "V2Onboarding.TradingSuitabilityQuestion",
            modelFactory: Xe,
            controllerFactory: Ye
        });
        return c.getCssDependencies = function() {
            return ["css/uae.V2Onboarding.TradingSuitabilityQuestion.css", "css/OutSystemsReactWidgets.css"]
        }, c.getJsDependencies = function() {
            return []
        }, c.getBlocks = function() {
            return [X]
        }, c
    }, "componentFactory"),
    Ce = rt();
var _i = R.PlaceholderContent,
    Ci = R.IteratorPlaceholderContent,
    at = u(function() {
        var c = Qe(function(g) {
            var s = g.model,
                t = g.controller,
                n = g.controller.idService,
                i = t.validationService,
                a = t.callContext(),
                r = K,
                y = L,
                f = {
                    props: g,
                    validateWidget: u(function(d) {
                        g.validateWidget(g, d)
                    }, "validateWidget")
                },
                l = s,
                _ = U,
                T = M,
                S = G();
            return he.createElement("div", g.rootNodeProperties, he.createElement(Ce, {
                getOwnerSpan: u(function() {
                    return S.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: u(function() {
                    return S.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: u(function(d) {
                        t.handleError(d)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: i
                },
                _idProps: {
                    service: n,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: l,
                _dependencies: []
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: u(function() {
                return {
                    codeFunction: "TradingSuitability_V2",
                    functionKey: "91678689-75bd-4d12-9a82-ac3b108e6a82",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "V2Onboarding.TradingSuitability_V2",
            modelFactory: fe,
            controllerFactory: ae,
            getTitle: u(function() {
                return L("iYZnkb11Ek2agqw7EI5qgg#Title", "TradingSuitability_V2")
            }, "getTitle")
        });
        return c.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.V2Onboarding.TradingSuitability_V2.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, c.getJsDependencies = function() {
            return []
        }, c.getBlocks = function() {
            return [Ce]
        }, c
    }, "componentFactory"),
    ot = at();
export {
    ae as controllerModule, fe as modelModule, ot as viewModule, re as webFlowControllerModule
};