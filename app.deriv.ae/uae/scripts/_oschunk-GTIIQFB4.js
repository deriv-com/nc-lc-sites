import {
    a as ne
} from "./_oschunk-TUCZO4XG.js";
import {
    a as re
} from "./_oschunk-V3QAPXBF.js";
import {
    a as ee
} from "./_oschunk-SFRA456L.js";
import "./_oschunk-L6JZD7VU.js";
import {
    a as te
} from "./_oschunk-SNXHD6UR.js";
import "./_oschunk-RVD4FS25.js";
import "./_oschunk-4SYOXZNK.js";
import "./_oschunk-YB2J7GTX.js";
import "./_oschunk-HFW3V2GI.js";
import "./_oschunk-LLAHPWP3.js";
import "./_oschunk-YVFTECWM.js";
import {
    f as _,
    h as V,
    i as X,
    j as Y,
    n as Z
} from "./_oschunk-VR5BNL2K.js";
import {
    a as we,
    g as x,
    m as Q,
    n as Oe,
    o as Pe,
    q as M,
    r as W,
    s as k,
    t as N
} from "./_oschunk-4VHUVDBV.js";
import {
    a as J
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    L as Ce,
    Qb as H,
    Sb as p,
    bb as L,
    cb as F,
    sa as O,
    ub as E
} from "./_oschunk-Z7QRTJDJ.js";
import {
    I as P,
    W as w,
    a as Ae,
    b as _e,
    c as s,
    e as he,
    m as Te,
    n as pe,
    p as K
} from "./_oschunk-M5BUVJ72.js";
var Le = {
        "zHi1oBi8C0Gx8t3ulsosyQ#Title": "\u0642\u0627\u0628\u0644\u064A\u0629 \u0627\u0644\u062A\u062F\u0627\u0648\u0644 | Deriv",
        "zHi1oBi8C0Gx8t3ulsosyQ#TitleExpression.858924792.1": "\u0642\u0627\u0628\u0644\u064A\u0629 \u0627\u0644\u062A\u062F\u0627\u0648\u0644 | Deriv"
    },
    Ee = {
        "ar-001": {
            translations: Le,
            isRTL: !0
        }
    };

function ie(f, l, o, e) {
    let n = JSON.parse(f.ConfigData);
    f.SelectedObj = JSON.stringify(n[f.Index])
}
s(ie, "default");

function ae(f, l, o, e) {
    var n, t, a, i;
    if (f.TradingSuitabilitydata) {
        let c = JSON.parse(f.TradingSuitabilitydata);
        f.previous_trading_experience = (n = c.previous_trading_experience) != null ? n : "", f.trading_experience = (t = c.trading_experience) != null ? t : "", f.investment_risk = (a = c.investment_risk) != null ? a : "", f.potential_loss = (i = c.potential_loss) != null ? i : ""
    } else f.previous_trading_experience = "", f.trading_experience = "", f.investment_risk = "", f.potential_loss = ""
}
s(ae, "default");

function oe(f, l, o, e) {
    var t;
    let n = JSON.parse((t = f.TAValues) != null ? t : "{}");
    f.NewData = JSON.stringify(_e(Ae({}, n), {
        [f.Ref]: f.Answer
    }))
}
s(oe, "default");

function se(f, l, o, e) {
    let n = JSON.parse(f.Config),
        a = s(i => {
            let c = [];
            return i.data && Array.isArray(i.data) && i.data.forEach(v => {
                for (let u in v) {
                    if (!Object.keys(v[u]).length) continue;
                    let d = v[u].question,
                        A = v[u].answer;
                    c.push({
                        question: d,
                        answers: A,
                        ref: u
                    })
                }
            }), c
        }, "convertData")(n);
    f.ParsedData = JSON.stringify(a)
}
s(se, "default");
var r = w; {
    let l = class l extends r.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, Ee);
            var a = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get pOSTTradingAssessment$ServerAction() {
            return this.hasOwnProperty("_pOSTTradingAssessment$ServerAction") || (this._pOSTTradingAssessment$ServerAction = function(e, n, t) {
                var a = this.controller;
                return r.Logger.startActiveSpan("POSTTradingAssessment", function(i) {
                    return i && (i.setAttribute("code.function", "POSTTradingAssessment"), i.setAttribute("outsystems.function.key", "5ae9ccc0-2939-4ce8-a493-fe73ecf3d308"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), r.Flow.tryFinally(function() {
                        var c = {
                            Authorization: r.DataConversion.ServerDataConverter.to(e, r.DataTypes.DataTypes.Text),
                            Request: r.DataConversion.ServerDataConverter.to(n, r.DataTypes.DataTypes.Record)
                        };
                        return a.callServerAction("POSTTradingAssessment", "screenservices/uae/TradingSuitability/RetakeTradingAssessment/ActionPOSTTradingAssessment", "KUXoXX+YsGaG1QbYmstVFQ", c, a.callContext(t), void 0, void 0, !0).then(function(v) {
                            var u = new(a.constructor.getVariableGroupType("uae.TradingSuitability.RetakeTradingAssessment$ActionPOSTTradingAssessment"));
                            return u.responseOut = r.DataConversion.ServerDataConverter.from(v.Response, L), u
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 0)
            }), this._pOSTTradingAssessment$ServerAction
        }
        set pOSTTradingAssessment$ServerAction(e) {
            this._pOSTTradingAssessment$ServerAction = e
        }
        get getTradingSuitabilityConfig$ServerAction() {
            return this.hasOwnProperty("_getTradingSuitabilityConfig$ServerAction") || (this._getTradingSuitabilityConfig$ServerAction = function(e, n) {
                var t = this.controller;
                return r.Logger.startActiveSpan("GetTradingSuitabilityConfig", function(a) {
                    return a && (a.setAttribute("code.function", "GetTradingSuitabilityConfig"), a.setAttribute("outsystems.function.key", "42d9d282-5ef4-47d9-adb6-3d29dbaf22bd"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), r.Flow.tryFinally(function() {
                        var i = {
                            Authorization: r.DataConversion.ServerDataConverter.to(e, r.DataTypes.DataTypes.Text)
                        };
                        return t.callServerAction("GetTradingSuitabilityConfig", "screenservices/uae/TradingSuitability/RetakeTradingAssessment/ActionGetTradingSuitabilityConfig", "kbU0NMdf6ssgJmGZ3Nq3MA", i, t.callContext(n), void 0, void 0, !0).then(function(c) {
                            var v = new(t.constructor.getVariableGroupType("uae.TradingSuitability.RetakeTradingAssessment$ActionGetTradingSuitabilityConfig"));
                            return v.responseOut = r.DataConversion.ServerDataConverter.from(c.Response, F), v
                        })
                    }, function() {
                        a && a.end()
                    })
                }, 0)
            }), this._getTradingSuitabilityConfig$ServerAction
        }
        set getTradingSuitabilityConfig$ServerAction(e) {
            this._getTradingSuitabilityConfig$ServerAction = e
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _pickQuestion$Action() {
            return this.hasOwnProperty("__pickQuestion$Action") || (this.__pickQuestion$Action = function(e, n) {
                var t = this.model,
                    a = this.controller,
                    i = this.idService;
                return r.Logger.startActiveSpan("PickQuestion", function(c) {
                    c && (c.setAttribute("code.function", "PickQuestion"), c.setAttribute("outsystems.function.key", "0b009af1-c644-4bb8-9a58-8096a798f2a3"), c.setAttribute("outsystems.function.owner.name", "uae"), c.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        a.ensureControllerAlive("PickQuestion"), n = a.callContext(n);
                        var v = new r.DataTypes.VariableHolder(new(a.constructor.getVariableGroupType("uae.TradingSuitability.RetakeTradingAssessment.PickQuestion$vars")));
                        v.value.indexInLocal = e;
                        var u = new r.DataTypes.VariableHolder,
                            d = new r.DataTypes.VariableHolder(new r.DataTypes.JSONSerializeOutputType),
                            A = new r.DataTypes.VariableHolder(new(r.Controller.BaseController.getJSONDeserializeOutputType(O)));
                        d.value.jSONOut = r.JSONUtils.serializeToJSON(t.variables.tradingSuitabilityConfigVar, !1, !1), u.value = r.Logger.startActiveSpan("JavaScript1", function(m) {
                            m && (m.setAttribute("code.function", "JavaScript1"), m.setAttribute("outsystems.function.key", "d2d24a2c-2e89-4c11-aca3-b2949ae907ef"), m.setAttribute("outsystems.function.owner.name", "uae"), m.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), m.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return a.safeExecuteJSNode(ie, "JavaScript1", "PickQuestion", {
                                    ConfigData: r.DataConversion.JSNodeParamConverter.to(d.value.jSONOut, r.DataTypes.DataTypes.Text),
                                    Index: r.DataConversion.JSNodeParamConverter.to(v.value.indexInLocal, r.DataTypes.DataTypes.Integer),
                                    SelectedObj: r.DataConversion.JSNodeParamConverter.to("", r.DataTypes.DataTypes.Text)
                                }, function(y) {
                                    var S = new(a.constructor.getVariableGroupType("uae.TradingSuitability.RetakeTradingAssessment.PickQuestion$javaScript1JSResult"));
                                    return S.selectedObjOut = r.DataConversion.JSNodeParamConverter.from(y.SelectedObj, r.DataTypes.DataTypes.Text), S
                                }, {}, {})
                            } finally {
                                m && m.end()
                            }
                        }, 1), A.value.dataOut = r.JSONUtils.deserializeFromJSON(u.value.selectedObjOut, O, !1), t.variables.selectedTAConfigVar = A.value.dataOut
                    } finally {
                        c && c.end()
                    }
                }, 1)
            }), this.__pickQuestion$Action
        }
        set _pickQuestion$Action(e) {
            this.__pickQuestion$Action = e
        }
        get _tradingSuitabilityQuestionHandlePrevious$Action() {
            return this.hasOwnProperty("__tradingSuitabilityQuestionHandlePrevious$Action") || (this.__tradingSuitabilityQuestionHandlePrevious$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    a = this.idService;
                return r.Logger.startActiveSpan("TradingSuitabilityQuestionHandlePrevious", function(i) {
                    i && (i.setAttribute("code.function", "TradingSuitabilityQuestionHandlePrevious"), i.setAttribute("outsystems.function.key", "395d71d5-535d-4bd0-8bbb-e3b510f5508e"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        if (t.ensureControllerAlive("TradingSuitabilityQuestionHandlePrevious"), e = t.callContext(e), n.variables.currentPosVar - 1 < 0) return r.Navigation.navigateBack(null, e, !0);
                        n.variables.currentPosVar = n.variables.currentPosVar - 1, t._pickQuestion$Action(n.variables.currentPosVar, e)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__tradingSuitabilityQuestionHandlePrevious$Action
        }
        set _tradingSuitabilityQuestionHandlePrevious$Action(e) {
            this.__tradingSuitabilityQuestionHandlePrevious$Action = e
        }
        get _submitTradingSuitability$Action() {
            return this.hasOwnProperty("__submitTradingSuitability$Action") || (this.__submitTradingSuitability$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    a = this.idService;
                return r.Logger.startActiveSpan("SubmitTradingSuitability", function(i) {
                    return i && (i.setAttribute("code.function", "SubmitTradingSuitability"), i.setAttribute("outsystems.function.key", "4f83795c-e882-4089-9cac-91b789e6e27c"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        t.ensureControllerAlive("SubmitTradingSuitability"), e = t.callContext(e);
                        var c = new r.DataTypes.VariableHolder,
                            v = new r.DataTypes.VariableHolder,
                            u = new r.DataTypes.VariableHolder;
                        return r.Flow.executeAsyncFlow(function() {
                            return v.value = p.getAuth$Action(e), u.value = r.Logger.startActiveSpan("GeneratePayload", function(d) {
                                d && (d.setAttribute("code.function", "GeneratePayload"), d.setAttribute("outsystems.function.key", "1849248f-2776-4971-bf06-7e8f3e3faec5"), d.setAttribute("outsystems.function.owner.name", "uae"), d.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), d.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return t.safeExecuteJSNode(ae, "GeneratePayload", "SubmitTradingSuitability", {
                                        TradingSuitabilitydata: r.DataConversion.JSNodeParamConverter.to(E.gettrading_suitability(), r.DataTypes.DataTypes.Text),
                                        previous_trading_experience: r.DataConversion.JSNodeParamConverter.to("", r.DataTypes.DataTypes.Text),
                                        trading_experience: r.DataConversion.JSNodeParamConverter.to("", r.DataTypes.DataTypes.Text),
                                        investment_risk: r.DataConversion.JSNodeParamConverter.to("", r.DataTypes.DataTypes.Text),
                                        potential_loss: r.DataConversion.JSNodeParamConverter.to("", r.DataTypes.DataTypes.Text)
                                    }, function(A) {
                                        var m = new(t.constructor.getVariableGroupType("uae.TradingSuitability.RetakeTradingAssessment.SubmitTradingSuitability$generatePayloadJSResult"));
                                        return m.previous_trading_experienceOut = r.DataConversion.JSNodeParamConverter.from(A.previous_trading_experience, r.DataTypes.DataTypes.Text), m.trading_experienceOut = r.DataConversion.JSNodeParamConverter.from(A.trading_experience, r.DataTypes.DataTypes.Text), m.investment_riskOut = r.DataConversion.JSNodeParamConverter.from(A.investment_risk, r.DataTypes.DataTypes.Text), m.potential_lossOut = r.DataConversion.JSNodeParamConverter.from(A.potential_loss, r.DataTypes.DataTypes.Text), m
                                    }, {}, {})
                                } finally {
                                    d && d.end()
                                }
                            }, 1), n.variables.isLoadingVar = !0, n.flush(), t.pOSTTradingAssessment$ServerAction(v.value.tokenOut, (function() {
                                var d = new Ce;
                                return d.trading_experienceAttr = u.value.trading_experienceOut, d.previous_trading_experienceAttr = u.value.previous_trading_experienceOut, d.potential_lossAttr = u.value.potential_lossOut, d.investment_riskAttr = u.value.investment_riskOut, d
                            })(), e).then(function(d) {
                                c.value = d
                            }).then(function() {
                                E.settrading_suitability(r.BuiltinFunctions.nullTextIdentifier())
                            })
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__submitTradingSuitability$Action
        }
        set _submitTradingSuitability$Action(e) {
            this.__submitTradingSuitability$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    a = this.idService;
                return r.Logger.startActiveSpan("OnReady", function(i) {
                    return i && (i.setAttribute("code.function", "OnReady"), i.setAttribute("outsystems.function.key", "5a4150cb-36a4-4d60-a738-8800c35e2942"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var c = new r.DataTypes.VariableHolder,
                            v = new r.DataTypes.VariableHolder,
                            u = new r.DataTypes.VariableHolder(new r.DataTypes.JSONSerializeOutputType);
                        return r.Flow.executeAsyncFlow(function() {
                            return n.variables.isLoadingVar = !0, v.value = p.getAuth$Action(e), n.flush(), t.getTradingSuitabilityConfig$ServerAction(v.value.tokenOut, e).then(function(d) {
                                c.value = d
                            }).then(function() {
                                c.value.responseOut.dataAttr.isEmpty || (u.value.jSONOut = r.JSONUtils.serializeToJSON(c.value.responseOut, !1, !1), t._processConfig$Action(u.value.jSONOut, e), t._pickQuestion$Action(n.variables.currentPosVar, e), n.variables.isLoadingVar = !1)
                            })
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _tradingSuitabilityQuestionSelectedAnswer$Action() {
            return this.hasOwnProperty("__tradingSuitabilityQuestionSelectedAnswer$Action") || (this.__tradingSuitabilityQuestionSelectedAnswer$Action = function(e, n) {
                var t = this.model,
                    a = this.controller,
                    i = this.idService;
                return r.Logger.startActiveSpan("TradingSuitabilityQuestionSelectedAnswer", function(c) {
                    return c && (c.setAttribute("code.function", "TradingSuitabilityQuestionSelectedAnswer"), c.setAttribute("outsystems.function.key", "88cb8e58-1fe4-4f7c-9d48-c4c825b81abe"), c.setAttribute("outsystems.function.owner.name", "uae"), c.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        a.ensureControllerAlive("TradingSuitabilityQuestionSelectedAnswer"), n = a.callContext(n);
                        var v = new r.DataTypes.VariableHolder(new(a.constructor.getVariableGroupType("uae.TradingSuitability.RetakeTradingAssessment.TradingSuitabilityQuestionSelectedAnswer$vars")));
                        v.value.answerInLocal = e;
                        var u = new r.DataTypes.VariableHolder;
                        return r.Flow.executeAsyncFlow(function() {
                            return u.value = r.Logger.startActiveSpan("Storingdata", function(d) {
                                d && (d.setAttribute("code.function", "Storingdata"), d.setAttribute("outsystems.function.key", "61e46939-0cfa-49f3-8c86-9574bfdfcd7d"), d.setAttribute("outsystems.function.owner.name", "uae"), d.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), d.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return a.safeExecuteJSNode(oe, "Storingdata", "TradingSuitabilityQuestionSelectedAnswer", {
                                        TAValues: r.DataConversion.JSNodeParamConverter.to(E.gettrading_suitability() !== r.BuiltinFunctions.nullTextIdentifier() ? E.gettrading_suitability() : "{}", r.DataTypes.DataTypes.Text),
                                        Ref: r.DataConversion.JSNodeParamConverter.to(t.variables.selectedTAConfigVar.refAttr, r.DataTypes.DataTypes.Text),
                                        Answer: r.DataConversion.JSNodeParamConverter.to(v.value.answerInLocal, r.DataTypes.DataTypes.Text),
                                        NewData: r.DataConversion.JSNodeParamConverter.to("", r.DataTypes.DataTypes.Text)
                                    }, function(A) {
                                        var m = new(a.constructor.getVariableGroupType("uae.TradingSuitability.RetakeTradingAssessment.TradingSuitabilityQuestionSelectedAnswer$storingdataJSResult"));
                                        return m.newDataOut = r.DataConversion.JSNodeParamConverter.from(A.NewData, r.DataTypes.DataTypes.Text), m
                                    }, {}, {})
                                } finally {
                                    d && d.end()
                                }
                            }, 1), E.settrading_suitability(u.value.newDataOut), a._checkNext$Action(n)
                        })
                    }, function() {
                        c && c.end()
                    })
                }, 1)
            }), this.__tradingSuitabilityQuestionSelectedAnswer$Action
        }
        set _tradingSuitabilityQuestionSelectedAnswer$Action(e) {
            this.__tradingSuitabilityQuestionSelectedAnswer$Action = e
        }
        get _checkNext$Action() {
            return this.hasOwnProperty("__checkNext$Action") || (this.__checkNext$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    a = this.idService;
                return r.Logger.startActiveSpan("CheckNext", function(i) {
                    return i && (i.setAttribute("code.function", "CheckNext"), i.setAttribute("outsystems.function.key", "a035596f-1dc4-42ba-9838-dba9b6fb84d3"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("CheckNext"), e = t.callContext(e), r.Flow.executeAsyncFlow(function() {
                            return r.Flow.executeSequence(function() {
                                if (n.variables.currentPosVar + 1 >= n.variables.tradingSuitabilityConfigVar.length) return t._submitTradingSuitability$Action(e).then(function() {
                                    return r.Flow.returnAsync(r.Navigation.navigateTo(r.Navigation.generateScreenURL("uae", "retake-assessment", {
                                        from: r.DataConversion.ServerDataConverter.to(n.variables.fromIn, r.DataTypes.DataTypes.Text)
                                    }), r.Transitions.createTransition(r.Transitions.TransitionAnimation.None), e, !0))
                                });
                                n.variables.currentPosVar = n.variables.currentPosVar + 1, t._pickQuestion$Action(n.variables.currentPosVar, e)
                            })
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__checkNext$Action
        }
        set _checkNext$Action(e) {
            this.__checkNext$Action = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    a = this.idService;
                return r.Logger.startActiveSpan("OnInitialize", function(i) {
                    i && (i.setAttribute("code.function", "OnInitialize"), i.setAttribute("outsystems.function.key", "ae48668e-cdcc-4dbb-8ba8-250dc3007955"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e), E.setRealSignupCurrentStep(5)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        get _processConfig$Action() {
            return this.hasOwnProperty("__processConfig$Action") || (this.__processConfig$Action = function(e, n) {
                var t = this.model,
                    a = this.controller,
                    i = this.idService;
                return r.Logger.startActiveSpan("ProcessConfig", function(c) {
                    c && (c.setAttribute("code.function", "ProcessConfig"), c.setAttribute("outsystems.function.key", "c5063312-4b68-4d12-bcd3-839dfbd29661"), c.setAttribute("outsystems.function.owner.name", "uae"), c.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        a.ensureControllerAlive("ProcessConfig"), n = a.callContext(n);
                        var v = new r.DataTypes.VariableHolder(new(a.constructor.getVariableGroupType("uae.TradingSuitability.RetakeTradingAssessment.ProcessConfig$vars")));
                        v.value.inputInLocal = e;
                        var u = new r.DataTypes.VariableHolder,
                            d = new r.DataTypes.VariableHolder(new(r.Controller.BaseController.getJSONDeserializeOutputType(r.GenericTypeCache.getGenericList(O))));
                        u.value = r.Logger.startActiveSpan("JavaScript1", function(A) {
                            A && (A.setAttribute("code.function", "JavaScript1"), A.setAttribute("outsystems.function.key", "b0bea7aa-0ca5-4916-baa3-b449f6d2005b"), A.setAttribute("outsystems.function.owner.name", "uae"), A.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), A.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return a.safeExecuteJSNode(se, "JavaScript1", "ProcessConfig", {
                                    Config: r.DataConversion.JSNodeParamConverter.to(v.value.inputInLocal, r.DataTypes.DataTypes.Text),
                                    ParsedData: r.DataConversion.JSNodeParamConverter.to("", r.DataTypes.DataTypes.Text)
                                }, function(m) {
                                    var y = new(a.constructor.getVariableGroupType("uae.TradingSuitability.RetakeTradingAssessment.ProcessConfig$javaScript1JSResult"));
                                    return y.parsedDataOut = r.DataConversion.JSNodeParamConverter.from(m.ParsedData, r.DataTypes.DataTypes.Text), y
                                }, {}, {})
                            } finally {
                                A && A.end()
                            }
                        }, 1), d.value.dataOut = r.JSONUtils.deserializeFromJSON(u.value.parsedDataOut, r.GenericTypeCache.getGenericList(O), !1), t.variables.tradingSuitabilityConfigVar = d.value.dataOut
                    } finally {
                        c && c.end()
                    }
                }, 1)
            }), this.__processConfig$Action
        }
        set _processConfig$Action(e) {
            this.__processConfig$Action = e
        }
        pickQuestion$Action(e, n) {
            var t = this.controller;
            return r.Logger.startActiveSpan("PickQuestion__proxy", function(a) {
                a && (a.setAttribute("code.function", "PickQuestion"), a.setAttribute("outsystems.function.key", "0b009af1-c644-4bb8-9a58-8096a798f2a3"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._pickQuestion$Action, n, e)
                } finally {
                    a && a.end()
                }
            }, 0)
        }
        tradingSuitabilityQuestionHandlePrevious$Action(e) {
            var n = this.controller;
            return r.Logger.startActiveSpan("TradingSuitabilityQuestionHandlePrevious__proxy", function(t) {
                t && (t.setAttribute("code.function", "TradingSuitabilityQuestionHandlePrevious"), t.setAttribute("outsystems.function.key", "395d71d5-535d-4bd0-8bbb-e3b510f5508e"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._tradingSuitabilityQuestionHandlePrevious$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        submitTradingSuitability$Action(e) {
            var n = this.controller;
            return r.Logger.startActiveSpan("SubmitTradingSuitability__proxy", function(t) {
                return t && (t.setAttribute("code.function", "SubmitTradingSuitability"), t.setAttribute("outsystems.function.key", "4f83795c-e882-4089-9cac-91b789e6e27c"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._submitTradingSuitability$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onReady$Action(e) {
            var n = this.controller;
            return r.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "5a4150cb-36a4-4d60-a738-8800c35e2942"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        tradingSuitabilityQuestionSelectedAnswer$Action(e, n) {
            var t = this.controller;
            return r.Logger.startActiveSpan("TradingSuitabilityQuestionSelectedAnswer__proxy", function(a) {
                return a && (a.setAttribute("code.function", "TradingSuitabilityQuestionSelectedAnswer"), a.setAttribute("outsystems.function.key", "88cb8e58-1fe4-4f7c-9d48-c4c825b81abe"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._tradingSuitabilityQuestionSelectedAnswer$Action, n, e)
                }, function() {
                    a && a.end()
                })
            }, 0)
        }
        checkNext$Action(e) {
            var n = this.controller;
            return r.Logger.startActiveSpan("CheckNext__proxy", function(t) {
                return t && (t.setAttribute("code.function", "CheckNext"), t.setAttribute("outsystems.function.key", "a035596f-1dc4-42ba-9838-dba9b6fb84d3"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._checkNext$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onInitialize$Action(e) {
            var n = this.controller;
            return r.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "ae48668e-cdcc-4dbb-8ba8-250dc3007955"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onInitialize$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        processConfig$Action(e, n) {
            var t = this.controller;
            return r.Logger.startActiveSpan("ProcessConfig__proxy", function(a) {
                a && (a.setAttribute("code.function", "ProcessConfig"), a.setAttribute("outsystems.function.key", "c5063312-4b68-4d12-bcd3-839dfbd29661"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._processConfig$Action, n, e)
                } finally {
                    a && a.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var n = this.controller,
                    t = this.model,
                    a = this.idService;
                return n.onInitialize$Action(e)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var n = this.controller,
                    t = this.model,
                    a = this.idService;
                return n.onReady$Action(e)
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
                return re.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return p.defaultTimeout
        }
    };
    s(l, "ControllerInner");
    let f = l;
    C = f, C.registerVariableGroupType("uae.TradingSuitability.RetakeTradingAssessment$ActionPOSTTradingAssessment", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: r.DataTypes.DataTypes.Record,
        defaultValue: s(function() {
            return new L
        }, "defaultValue"),
        complexType: L
    }]), C.registerVariableGroupType("uae.TradingSuitability.RetakeTradingAssessment$ActionGetTradingSuitabilityConfig", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: r.DataTypes.DataTypes.Record,
        defaultValue: s(function() {
            return new F
        }, "defaultValue"),
        complexType: F
    }]), C.registerVariableGroupType("uae.TradingSuitability.RetakeTradingAssessment.PickQuestion$vars", [{
        name: "Index",
        attrName: "indexInLocal",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Integer,
        defaultValue: s(function() {
            return 0
        }, "defaultValue")
    }]), C.registerVariableGroupType("uae.TradingSuitability.RetakeTradingAssessment.PickQuestion$javaScript1JSResult", [{
        name: "SelectedObj",
        attrName: "selectedObjOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }]), C.registerVariableGroupType("uae.TradingSuitability.RetakeTradingAssessment.SubmitTradingSuitability$generatePayloadJSResult", [{
        name: "previous_trading_experience",
        attrName: "previous_trading_experienceOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "trading_experience",
        attrName: "trading_experienceOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "investment_risk",
        attrName: "investment_riskOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "potential_loss",
        attrName: "potential_lossOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }]), C.registerVariableGroupType("uae.TradingSuitability.RetakeTradingAssessment.TradingSuitabilityQuestionSelectedAnswer$vars", [{
        name: "Answer",
        attrName: "answerInLocal",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }]), C.registerVariableGroupType("uae.TradingSuitability.RetakeTradingAssessment.TradingSuitabilityQuestionSelectedAnswer$storingdataJSResult", [{
        name: "NewData",
        attrName: "newDataOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }]), C.registerVariableGroupType("uae.TradingSuitability.RetakeTradingAssessment.ProcessConfig$vars", [{
        name: "Input",
        attrName: "inputInLocal",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }]), C.registerVariableGroupType("uae.TradingSuitability.RetakeTradingAssessment.ProcessConfig$javaScript1JSResult", [{
        name: "ParsedData",
        attrName: "parsedDataOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }])
}
var C, ue = new r.Controller.ControllerFactory(C, J);
var $ = he(we());
var T = w,
    de = class de extends T.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("TAAnswer", "tAAnswerVar", "TAAnswer", !0, !1, T.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("Question", "questionIn", "Question", !0, !1, T.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_questionInDataFetchStatus", "_questionInDataFetchStatus", "_questionInDataFetchStatus", !0, !1, T.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Answers", "answersIn", "Answers", !0, !1, T.DataTypes.DataTypes.RecordList, function() {
                return T.DataTypes.ImmutableBase.getData(new T.DataTypes.TextList)
            }, !1, T.DataTypes.TextList), this.attr("_answersInDataFetchStatus", "_answersInDataFetchStatus", "_answersInDataFetchStatus", !0, !1, T.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("TARef", "tARefIn", "TARef", !0, !1, T.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_tARefInDataFetchStatus", "_tARefInDataFetchStatus", "_tARefInDataFetchStatus", !0, !1, T.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(T.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(de, "VariablesRecord");
var G = de;
G.init();
var fe = class fe extends T.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(fe, "WidgetsRecord");
var ce = fe,
    R = class R extends T.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return G
        }
        static getWidgetsRecordConstructor() {
            return ce
        }
        static get hasValidationWidgets() {
            return R._hasValidationWidgetsValue === void 0 && (R._hasValidationWidgetsValue = void 0 || void 0), R._hasValidationWidgetsValue
        }
        setInputs(l) {
            "Question" in l && (this.variables.questionIn = l.Question, "_questionInDataFetchStatus" in l && (this.variables._questionInDataFetchStatus = l._questionInDataFetchStatus)), "Answers" in l && (this.variables.answersIn = l.Answers, "_answersInDataFetchStatus" in l && (this.variables._answersInDataFetchStatus = l._answersInDataFetchStatus)), "TARef" in l && (this.variables.tARefIn = l.TARef, "_tARefInDataFetchStatus" in l && (this.variables._tARefInDataFetchStatus = l._tARefInDataFetchStatus))
        }
    };
s(R, "Model");
var z = R;
z._hasValidationWidgetsValue = void 0;
var Ie = new T.Model.ModelFactory(z);
var h = w,
    be = class be extends h.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("TradingSuitabilityConfig", "tradingSuitabilityConfigVar", "TradingSuitabilityConfig", !0, !1, h.DataTypes.DataTypes.RecordList, function() {
                return h.DataTypes.ImmutableBase.getData(new(h.GenericTypeCache.getGenericList(O)))
            }, !1, h.GenericTypeCache.getGenericList(O)), this.attr("CurrentPos", "currentPosVar", "CurrentPos", !0, !1, h.DataTypes.DataTypes.Integer, function() {
                return 0
            }, !1), this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, h.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("SelectedTAConfig", "selectedTAConfigVar", "SelectedTAConfig", !0, !1, h.DataTypes.DataTypes.Record, function() {
                return h.DataTypes.ImmutableBase.getData(new O)
            }, !1, O), this.attr("from", "fromIn", "from", !0, !1, h.DataTypes.DataTypes.Text, function() {
                return "home"
            }, !1), this.attr("_fromInDataFetchStatus", "_fromInDataFetchStatus", "_fromInDataFetchStatus", !0, !1, h.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(h.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(be, "VariablesRecord");
var B = be;
B.init();
var ge = class ge extends h.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(ge, "WidgetsRecord");
var ye = ge,
    I = class I extends h.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return B
        }
        static getWidgetsRecordConstructor() {
            return ye
        }
        static get hasValidationWidgets() {
            return I._hasValidationWidgetsValue === void 0 && (I._hasValidationWidgetsValue = void 0 || void 0), I._hasValidationWidgetsValue
        }
        setInputs(l) {
            "from" in l && (this.variables.fromIn = h.DataConversion.ServerDataConverter.from(l.from, h.DataTypes.DataTypes.Text))
        }
    };
s(I, "Model");
var q = I;
q._hasValidationWidgetsValue = void 0;
var ve = new h.Model.ModelFactory(q);
var g = he(we());
var Ne = {};

function me(f, l, o, e) {
    var n;
    if (f.TradingSuitability) {
        let t = JSON.parse(f.TradingSuitability);
        f.UserAnswer = (n = t[f.Ref]) != null ? n : ""
    }
}
s(me, "default");
var b = w; {
    let l = class l extends b.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, Ne);
            var a = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onClickNext$Action() {
            return this.hasOwnProperty("__onClickNext$Action") || (this.__onClickNext$Action = function(e, n) {
                var t = this.model,
                    a = this.controller,
                    i = this.idService;
                return b.Logger.startActiveSpan("OnClickNext", function(c) {
                    return c && (c.setAttribute("code.function", "OnClickNext"), c.setAttribute("outsystems.function.key", "021abce1-bbb7-4f28-ae3b-7dc754f40efc"), c.setAttribute("outsystems.function.owner.name", "uae"), c.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), b.Flow.tryFinally(function() {
                        a.ensureControllerAlive("OnClickNext"), n = a.callContext(n);
                        var v = new b.DataTypes.VariableHolder(new(a.constructor.getVariableGroupType("uae.TradingSuitability.TradingSuitabilityQuestionRetake.OnClickNext$vars")));
                        return v.value.answerInLocal = e, b.Flow.executeAsyncFlow(function() {
                            return a.selectedAnswer$Action(v.value.answerInLocal, n)
                        })
                    }, function() {
                        c && c.end()
                    })
                }, 1)
            }), this.__onClickNext$Action
        }
        set _onClickNext$Action(e) {
            this.__onClickNext$Action = e
        }
        get _onClickPrevious$Action() {
            return this.hasOwnProperty("__onClickPrevious$Action") || (this.__onClickPrevious$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    a = this.idService;
                return b.Logger.startActiveSpan("OnClickPrevious", function(i) {
                    return i && (i.setAttribute("code.function", "OnClickPrevious"), i.setAttribute("outsystems.function.key", "87b11f84-5902-4777-82ee-cd5a2f40b5e8"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), b.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("OnClickPrevious"), e = t.callContext(e), b.Flow.executeAsyncFlow(function() {
                            return t.handlePrevious$Action(e)
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__onClickPrevious$Action
        }
        set _onClickPrevious$Action(e) {
            this.__onClickPrevious$Action = e
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    a = this.idService;
                return b.Logger.startActiveSpan("OnParametersChanged", function(i) {
                    i && (i.setAttribute("code.function", "OnParametersChanged"), i.setAttribute("outsystems.function.key", "913bdfcd-1839-4fb5-a7b8-b1c48af49537"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnParametersChanged"), e = t.callContext(e);
                        var c = new b.DataTypes.VariableHolder;
                        c.value = b.Logger.startActiveSpan("JavaScript1", function(v) {
                            v && (v.setAttribute("code.function", "JavaScript1"), v.setAttribute("outsystems.function.key", "f5606e8d-bb3d-40de-87ae-8d62dda12464"), v.setAttribute("outsystems.function.owner.name", "uae"), v.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), v.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(me, "JavaScript1", "OnParametersChanged", {
                                    TradingSuitability: b.DataConversion.JSNodeParamConverter.to(E.gettrading_suitability(), b.DataTypes.DataTypes.Text),
                                    Ref: b.DataConversion.JSNodeParamConverter.to(n.variables.tARefIn, b.DataTypes.DataTypes.Text),
                                    UserAnswer: b.DataConversion.JSNodeParamConverter.to("", b.DataTypes.DataTypes.Text)
                                }, function(u) {
                                    var d = new(t.constructor.getVariableGroupType("uae.TradingSuitability.TradingSuitabilityQuestionRetake.OnParametersChanged$javaScript1JSResult"));
                                    return d.userAnswerOut = b.DataConversion.JSNodeParamConverter.from(u.UserAnswer, b.DataTypes.DataTypes.Text), d
                                }, {}, {})
                            } finally {
                                v && v.end()
                            }
                        }, 1), n.variables.tAAnswerVar = c.value.userAnswerOut
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(e) {
            this.__onParametersChanged$Action = e
        }
        get _layoutOnboardingMobilecloseEvent$Action() {
            return this.hasOwnProperty("__layoutOnboardingMobilecloseEvent$Action") || (this.__layoutOnboardingMobilecloseEvent$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    a = this.idService;
                return b.Logger.startActiveSpan("LayoutOnboardingMobilecloseEvent", function(i) {
                    i && (i.setAttribute("code.function", "LayoutOnboardingMobilecloseEvent"), i.setAttribute("outsystems.function.key", "b432f2b6-df89-4525-a4e2-07cf263fb77d"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("LayoutOnboardingMobilecloseEvent"), e = t.callContext(e), b.Navigation.navigateTo(b.Navigation.generateScreenURL("uae", "home", {}), b.Transitions.createTransition(b.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__layoutOnboardingMobilecloseEvent$Action
        }
        set _layoutOnboardingMobilecloseEvent$Action(e) {
            this.__layoutOnboardingMobilecloseEvent$Action = e
        }
        onClickNext$Action(e, n) {
            var t = this.controller;
            return b.Logger.startActiveSpan("OnClickNext__proxy", function(a) {
                return a && (a.setAttribute("code.function", "OnClickNext"), a.setAttribute("outsystems.function.key", "021abce1-bbb7-4f28-ae3b-7dc754f40efc"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), b.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._onClickNext$Action, n, e)
                }, function() {
                    a && a.end()
                })
            }, 0)
        }
        onClickPrevious$Action(e) {
            var n = this.controller;
            return b.Logger.startActiveSpan("OnClickPrevious__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnClickPrevious"), t.setAttribute("outsystems.function.key", "87b11f84-5902-4777-82ee-cd5a2f40b5e8"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), b.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onClickPrevious$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onParametersChanged$Action(e) {
            var n = this.controller;
            return b.Logger.startActiveSpan("OnParametersChanged__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnParametersChanged"), t.setAttribute("outsystems.function.key", "913bdfcd-1839-4fb5-a7b8-b1c48af49537"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onParametersChanged$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        layoutOnboardingMobilecloseEvent$Action(e) {
            var n = this.controller;
            return b.Logger.startActiveSpan("LayoutOnboardingMobilecloseEvent__proxy", function(t) {
                t && (t.setAttribute("code.function", "LayoutOnboardingMobilecloseEvent"), t.setAttribute("outsystems.function.key", "b432f2b6-df89-4525-a4e2-07cf263fb77d"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._layoutOnboardingMobilecloseEvent$Action, e)
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
                var n = this.controller,
                    t = this.model,
                    a = this.idService;
                return n.onParametersChanged$Action(e)
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
            return p.defaultTimeout
        }
    };
    s(l, "ControllerInner");
    let f = l;
    j = f, j.registerVariableGroupType("uae.TradingSuitability.TradingSuitabilityQuestionRetake.OnClickNext$vars", [{
        name: "Answer",
        attrName: "answerInLocal",
        mandatory: !0,
        dataType: b.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }]), j.registerVariableGroupType("uae.TradingSuitability.TradingSuitabilityQuestionRetake.OnParametersChanged$javaScript1JSResult", [{
        name: "UserAnswer",
        attrName: "userAnswerOut",
        mandatory: !0,
        dataType: b.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }])
}
var j, Ve = new b.Controller.ControllerFactory(j, J);
var D = x.PlaceholderContent,
    $e = x.IteratorPlaceholderContent,
    Qe = s(function() {
        var f = Pe(function(l) {
            var o = l.model,
                e = l.controller,
                n = l.controller.idService,
                t = e.validationService,
                a = e.callContext(),
                i = k,
                c = N,
                v = {
                    props: l,
                    validateWidget: s(function(y) {
                        l.validateWidget(l, y)
                    }, "validateWidget")
                },
                u = o,
                d = W,
                A = M,
                m = Q();
            return g.createElement("div", l.rootNodeProperties, d(H.isDesktop$Action(a).isDesktopOut, !1, this, function() {
                return [g.createElement(te, {
                    getOwnerSpan: s(function() {
                        return m.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: s(function() {
                        return m.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        ShowClosebutton: !0
                    },
                    events: {
                        _handleError: s(function(y) {
                            e.handleError(y)
                        }, "_handleError"),
                        closeBtnEvent$Action: s(function() {
                            var y = typeof a != "undefined" && a !== null ? a.clone() : e.callContext().clone();
                            e.layoutOnboardingMobilecloseEvent$Action(e.callContext(y))
                        }, "closeBtnEvent$Action")
                    },
                    _validationProps: {
                        validationService: t
                    },
                    _idProps: {
                        service: n,
                        uuid: "0",
                        alias: "1"
                    },
                    _widgetRecordProvider: u,
                    placeholders: {
                        contentbody: new D(function() {
                            return [g.createElement(_, {
                                align: 0,
                                animate: !1,
                                style: "flex flex-col",
                                visible: !0,
                                _idProps: {
                                    service: n,
                                    uuid: "1"
                                },
                                _widgetRecordProvider: u
                            }, g.createElement(V, {
                                style: o.getCachedValue(n.getId("1H1Ew6GEgEmxS+jycOW4rg.Style"), function() {
                                    return H.isDesktop$Action(a).isDesktopOut ? "margin-bottom-base text-xl font-extra-bold" : "margin-bottom-base text-2xl font-extra-bold"
                                }),
                                value: o.getCachedValue(n.getId("1H1Ew6GEgEmxS+jycOW4rg.Value"), function() {
                                    return p.translate$Action(o.variables.questionIn, a).translatedTextOut
                                }, function() {
                                    return o.variables.questionIn
                                }),
                                _idProps: {
                                    service: n,
                                    uuid: "2"
                                },
                                _widgetRecordProvider: u,
                                value_dataFetchStatus: P.calculateDataFetchStatus(o.variables._questionInDataFetchStatus)
                            }), g.createElement(_, {
                                align: 0,
                                animate: !1,
                                style: "mb-6",
                                visible: !0,
                                _idProps: {
                                    service: n,
                                    name: "SourceOfIncomeSelectionContainer2"
                                },
                                _widgetRecordProvider: u
                            }, d(o.variables.answersIn.length < 1, !1, this, function() {
                                return [g.createElement(_, {
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
                                    _widgetRecordProvider: u
                                }, g.createElement(_, {
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
                                    _widgetRecordProvider: u
                                }), g.createElement(_, {
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
                                    _widgetRecordProvider: u
                                }), g.createElement(_, {
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
                                    _widgetRecordProvider: u
                                }), g.createElement(_, {
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
                                    _widgetRecordProvider: u
                                }))]
                            }, function() {
                                return [g.createElement(X, {
                                    animateItems: !1,
                                    gridProperties: {
                                        classes: "OSFillParent"
                                    },
                                    mode: 0,
                                    source: o.variables.answersIn,
                                    style: "currency list-container list list-group",
                                    tag: "div",
                                    _idProps: {
                                        service: n,
                                        name: "AnswerList2"
                                    },
                                    _widgetRecordProvider: u,
                                    source_dataFetchStatus: P.calculateDataFetchStatus(o.variables._answersInDataFetchStatus),
                                    placeholders: {
                                        content: new $e(function(y, S) {
                                            return [g.createElement(Y, {
                                                extendedProperties: {
                                                    style: "border: 1px solid rgba(0, 0, 0, 0.04);"
                                                },
                                                onClick: s(function() {
                                                    return Promise.resolve().then(function() {
                                                        var U = typeof S != "undefined" && S !== null ? S.clone() : e.callContext().clone();
                                                        return e.onClickNext$Action(o.variables.answersIn.getCurrent(S.iterationContext), e.callContext(U))
                                                    })
                                                }, "onClick"),
                                                style: o.getCachedValue(y.getId("AnswerListItems2.Style"), function() {
                                                    return o.variables.answersIn.getCurrent(S.iterationContext) === o.variables.tAAnswerVar ? "currency list-item item-selected" : "currency list-item"
                                                }, function() {
                                                    return o.variables.answersIn.getCurrent(S.iterationContext)
                                                }, function() {
                                                    return o.variables.tAAnswerVar
                                                }),
                                                triggerActionOnFullSwipeLeft: !1,
                                                triggerActionOnFullSwipeRight: !1,
                                                _idProps: {
                                                    service: y,
                                                    name: "AnswerListItems2"
                                                },
                                                _widgetRecordProvider: u,
                                                style_dataFetchStatus: P.calculateDataFetchStatus(o.variables._answersInDataFetchStatus),
                                                placeholders: {
                                                    leftActions: D.Empty,
                                                    content: new D(function() {
                                                        return [g.createElement(_, {
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
                                                                service: y,
                                                                uuid: "11"
                                                            },
                                                            _widgetRecordProvider: u
                                                        }, g.createElement(V, {
                                                            extendedProperties: {
                                                                style: "font-size: 16px;"
                                                            },
                                                            value: o.getCachedValue(y.getId("OniOnOSWmEGnFqFvEZmURQ.Value"), function() {
                                                                return p.translate$Action(o.variables.answersIn.getCurrent(S.iterationContext), S).translatedTextOut
                                                            }, function() {
                                                                return o.variables.answersIn.getCurrent(S.iterationContext)
                                                            }),
                                                            _idProps: {
                                                                service: y,
                                                                uuid: "12"
                                                            },
                                                            _widgetRecordProvider: u,
                                                            value_dataFetchStatus: P.calculateDataFetchStatus(o.variables._answersInDataFetchStatus)
                                                        }), g.createElement(_, {
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
                                                                service: y,
                                                                uuid: "13"
                                                            },
                                                            _widgetRecordProvider: u
                                                        }, d(o.variables.answersIn.getCurrent(S.iterationContext) === o.variables.tAAnswerVar, !1, this, function() {
                                                            return [g.createElement(Z, {
                                                                image: K.VersionedURL.getVersionedUrl("img/uae.circlecheck.svg"),
                                                                type: 0,
                                                                _idProps: {
                                                                    service: y,
                                                                    uuid: "14"
                                                                },
                                                                _widgetRecordProvider: u
                                                            })]
                                                        }, function() {
                                                            return []
                                                        })))]
                                                    }),
                                                    rightActions: D.Empty
                                                },
                                                _dependencies: [i(o.variables.tAAnswerVar), i(o.variables._answersInDataFetchStatus), i(o.variables.answersIn.getCurrent(S.iterationContext))]
                                            })]
                                        }, a, n, "1")
                                    },
                                    _dependencies: [i(o.variables._answersInDataFetchStatus), i(o.variables.tAAnswerVar)]
                                })]
                            })))]
                        })
                    },
                    _dependencies: [i(o.variables.tAAnswerVar), i(o.variables.answersIn), i(o.variables._answersInDataFetchStatus), i(o.variables._questionInDataFetchStatus), i(o.variables.questionIn)]
                })]
            }, function() {
                return [g.createElement(ee, {
                    getOwnerSpan: s(function() {
                        return m.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: s(function() {
                        return m.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        show_progress_bar: !1,
                        has_close_icon: !0
                    },
                    events: {
                        _handleError: s(function(y) {
                            e.handleError(y)
                        }, "_handleError"),
                        closeEvent$Action: s(function() {
                            var y = typeof a != "undefined" && a !== null ? a.clone() : e.callContext().clone();
                            e.layoutOnboardingMobilecloseEvent$Action(e.callContext(y))
                        }, "closeEvent$Action")
                    },
                    _validationProps: {
                        validationService: t
                    },
                    _idProps: {
                        service: n,
                        uuid: "15",
                        alias: "2"
                    },
                    _widgetRecordProvider: u,
                    placeholders: {
                        content: new D(function() {
                            return [g.createElement(_, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "height: calc(100vh - 56px - 24px - 24px); overflow-y: scroll;"
                                },
                                style: "flex flex-col",
                                visible: !0,
                                _idProps: {
                                    service: n,
                                    uuid: "16"
                                },
                                _widgetRecordProvider: u
                            }, g.createElement(V, {
                                style: o.getCachedValue(n.getId("b8Hyu6DBBEKQV61bSg8GQw.Style"), function() {
                                    return H.isDesktop$Action(a).isDesktopOut ? "margin-bottom-base text-xl font-extra-bold" : "margin-bottom-base text-2xl font-extra-bold"
                                }),
                                value: o.getCachedValue(n.getId("b8Hyu6DBBEKQV61bSg8GQw.Value"), function() {
                                    return p.translate$Action(o.variables.questionIn, a).translatedTextOut
                                }, function() {
                                    return o.variables.questionIn
                                }),
                                _idProps: {
                                    service: n,
                                    uuid: "17"
                                },
                                _widgetRecordProvider: u,
                                value_dataFetchStatus: P.calculateDataFetchStatus(o.variables._questionInDataFetchStatus)
                            }), g.createElement(_, {
                                align: 0,
                                animate: !1,
                                style: "mb-6",
                                visible: !0,
                                _idProps: {
                                    service: n,
                                    name: "SourceOfIncomeSelectionContainer3"
                                },
                                _widgetRecordProvider: u
                            }, d(o.variables.answersIn.length < 1, !1, this, function() {
                                return [g.createElement(_, {
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
                                        name: "LoaderContainer4"
                                    },
                                    _widgetRecordProvider: u
                                }, g.createElement(_, {
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
                                        name: "ListItemPlaceholder10"
                                    },
                                    _widgetRecordProvider: u
                                }), g.createElement(_, {
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
                                        name: "ListItemPlaceholder11"
                                    },
                                    _widgetRecordProvider: u
                                }), g.createElement(_, {
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
                                        name: "ListItemPlaceholder12"
                                    },
                                    _widgetRecordProvider: u
                                }), g.createElement(_, {
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
                                        name: "ListItemPlaceholder13"
                                    },
                                    _widgetRecordProvider: u
                                }))]
                            }, function() {
                                return [g.createElement(X, {
                                    animateItems: !1,
                                    gridProperties: {
                                        classes: "OSFillParent"
                                    },
                                    mode: 0,
                                    source: o.variables.answersIn,
                                    style: "currency list-container list list-group",
                                    tag: "div",
                                    _idProps: {
                                        service: n,
                                        name: "AnswerList3"
                                    },
                                    _widgetRecordProvider: u,
                                    source_dataFetchStatus: P.calculateDataFetchStatus(o.variables._answersInDataFetchStatus),
                                    placeholders: {
                                        content: new $e(function(y, S) {
                                            return [g.createElement(Y, {
                                                extendedProperties: {
                                                    style: "border: 1px solid rgba(0, 0, 0, 0.04);"
                                                },
                                                onClick: s(function() {
                                                    return Promise.resolve().then(function() {
                                                        var U = typeof S != "undefined" && S !== null ? S.clone() : e.callContext().clone();
                                                        return e.onClickNext$Action(o.variables.answersIn.getCurrent(S.iterationContext), e.callContext(U))
                                                    })
                                                }, "onClick"),
                                                style: o.getCachedValue(y.getId("AnswerListItems3.Style"), function() {
                                                    return o.variables.answersIn.getCurrent(S.iterationContext) === o.variables.tAAnswerVar ? "currency list-item item-selected" : "currency list-item"
                                                }, function() {
                                                    return o.variables.answersIn.getCurrent(S.iterationContext)
                                                }, function() {
                                                    return o.variables.tAAnswerVar
                                                }),
                                                triggerActionOnFullSwipeLeft: !1,
                                                triggerActionOnFullSwipeRight: !1,
                                                _idProps: {
                                                    service: y,
                                                    name: "AnswerListItems3"
                                                },
                                                _widgetRecordProvider: u,
                                                style_dataFetchStatus: P.calculateDataFetchStatus(o.variables._answersInDataFetchStatus),
                                                placeholders: {
                                                    leftActions: D.Empty,
                                                    content: new D(function() {
                                                        return [g.createElement(_, {
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
                                                                service: y,
                                                                uuid: "26"
                                                            },
                                                            _widgetRecordProvider: u
                                                        }, g.createElement(V, {
                                                            extendedProperties: {
                                                                style: "font-size: 16px;"
                                                            },
                                                            value: o.getCachedValue(y.getId("hhpdTFKDYEGyGJx9JjCwug.Value"), function() {
                                                                return p.translate$Action(o.variables.answersIn.getCurrent(S.iterationContext), S).translatedTextOut
                                                            }, function() {
                                                                return o.variables.answersIn.getCurrent(S.iterationContext)
                                                            }),
                                                            _idProps: {
                                                                service: y,
                                                                uuid: "27"
                                                            },
                                                            _widgetRecordProvider: u,
                                                            value_dataFetchStatus: P.calculateDataFetchStatus(o.variables._answersInDataFetchStatus)
                                                        }), g.createElement(_, {
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
                                                                service: y,
                                                                uuid: "28"
                                                            },
                                                            _widgetRecordProvider: u
                                                        }, d(o.variables.answersIn.getCurrent(S.iterationContext) === o.variables.tAAnswerVar, !1, this, function() {
                                                            return [g.createElement(Z, {
                                                                image: K.VersionedURL.getVersionedUrl("img/uae.circlecheck.svg"),
                                                                type: 0,
                                                                _idProps: {
                                                                    service: y,
                                                                    uuid: "29"
                                                                },
                                                                _widgetRecordProvider: u
                                                            })]
                                                        }, function() {
                                                            return []
                                                        })))]
                                                    }),
                                                    rightActions: D.Empty
                                                },
                                                _dependencies: [i(o.variables.tAAnswerVar), i(o.variables._answersInDataFetchStatus), i(o.variables.answersIn.getCurrent(S.iterationContext))]
                                            })]
                                        }, a, n, "2")
                                    },
                                    _dependencies: [i(o.variables._answersInDataFetchStatus), i(o.variables.tAAnswerVar)]
                                })]
                            })))]
                        }),
                        footer: D.Empty
                    },
                    _dependencies: [i(o.variables.tAAnswerVar), i(o.variables.answersIn), i(o.variables._answersInDataFetchStatus), i(o.variables._questionInDataFetchStatus), i(o.variables.questionIn)]
                })]
            }))
        }, {
            topLevelComponent: !1,
            getAttributes: s(function() {
                return {
                    codeFunction: "TradingSuitabilityQuestionRetake",
                    functionKey: "c0cd5811-5a7c-4fd2-8d97-070a31682e24",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "TradingSuitability.TradingSuitabilityQuestionRetake",
            modelFactory: Ie,
            controllerFactory: Ve
        });
        return f.getCssDependencies = function() {
            return ["css/uae.TradingSuitability.TradingSuitabilityQuestionRetake.css", "css/OutSystemsReactWidgets.css"]
        }, f.getJsDependencies = function() {
            return []
        }, f.getBlocks = function() {
            return [te, ee]
        }, f
    }, "componentFactory"),
    Se = Qe();
var Ut = x.PlaceholderContent,
    Kt = x.IteratorPlaceholderContent,
    Me = s(function() {
        var f = Oe(function(l) {
            var o = l.model,
                e = l.controller,
                n = l.controller.idService,
                t = e.validationService,
                a = e.callContext(),
                i = k,
                c = N,
                v = {
                    props: l,
                    validateWidget: s(function(y) {
                        l.validateWidget(l, y)
                    }, "validateWidget")
                },
                u = o,
                d = W,
                A = M,
                m = Q();
            return $.createElement("div", l.rootNodeProperties, d(o.variables.isLoadingVar, !1, this, function() {
                return [$.createElement(ne, {
                    getOwnerSpan: s(function() {
                        return m.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: s(function() {
                        return m.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        show: o.variables.isLoadingVar
                    },
                    events: {
                        _handleError: s(function(y) {
                            e.handleError(y)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: t
                    },
                    _idProps: {
                        service: n,
                        uuid: "0",
                        alias: "1"
                    },
                    _widgetRecordProvider: u,
                    _dependencies: []
                })]
            }, function() {
                return [$.createElement(_, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "overflow: hidden;"
                    },
                    style: "full-height",
                    visible: !0,
                    _idProps: {
                        service: n,
                        uuid: "1"
                    },
                    _widgetRecordProvider: u
                }, $.createElement(Se, {
                    getOwnerSpan: s(function() {
                        return m.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: s(function() {
                        return m.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        Answers: o.variables.selectedTAConfigVar.answersAttr,
                        Question: o.variables.selectedTAConfigVar.questionAttr,
                        TARef: o.variables.selectedTAConfigVar.refAttr
                    },
                    events: {
                        _handleError: s(function(y) {
                            e.handleError(y)
                        }, "_handleError"),
                        handlePrevious$Action: s(function() {
                            var y = typeof a != "undefined" && a !== null ? a.clone() : e.callContext().clone();
                            e.tradingSuitabilityQuestionHandlePrevious$Action(e.callContext(y))
                        }, "handlePrevious$Action"),
                        selectedAnswer$Action: s(function(y) {
                            return Promise.resolve().then(function() {
                                var S = typeof a != "undefined" && a !== null ? a.clone() : e.callContext().clone();
                                return e.tradingSuitabilityQuestionSelectedAnswer$Action(y, e.callContext(S))
                            })
                        }, "selectedAnswer$Action")
                    },
                    _validationProps: {
                        validationService: t
                    },
                    _idProps: {
                        service: n,
                        uuid: "2",
                        alias: "2"
                    },
                    _widgetRecordProvider: u,
                    _dependencies: []
                }))]
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: s(function() {
                return {
                    codeFunction: "RetakeTradingAssessment",
                    functionKey: "a0b578cc-bc18-410b-b1f2-ddee96ca2cc9",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "TradingSuitability.RetakeTradingAssessment",
            modelFactory: ve,
            controllerFactory: ue,
            getTitle: s(function(l) {
                var o = l.model,
                    e = l.controller,
                    n = l.controller.idService,
                    t = e.validationService,
                    a = e.callContext(),
                    i = k,
                    c = N,
                    v = {
                        props: l,
                        validateWidget: s(function(u) {
                            l.validateWidget(l, u)
                        }, "validateWidget")
                    };
                return Te.resolve(pe.TranslationsService).getMessage("zHi1oBi8C0Gx8t3ulsosyQ#TitleExpression.858924792.1", "Trading suitability | Deriv")
            }, "getTitle")
        });
        return f.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, f.getJsDependencies = function() {
            return []
        }, f.getBlocks = function() {
            return [ne, Se]
        }, f
    }, "componentFactory"),
    We = Me();
export {
    ue as controllerModule, ve as modelModule, We as viewModule, re as webFlowControllerModule
};