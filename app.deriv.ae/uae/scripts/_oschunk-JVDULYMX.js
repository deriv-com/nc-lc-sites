import {
    a as G
} from "./_oschunk-OWG424DW.js";
import {
    a as U
} from "./_oschunk-UZGD3HJ2.js";
import {
    a as k
} from "./_oschunk-SFRA456L.js";
import "./_oschunk-L6JZD7VU.js";
import {
    a as M
} from "./_oschunk-SNXHD6UR.js";
import "./_oschunk-RVD4FS25.js";
import "./_oschunk-4SYOXZNK.js";
import "./_oschunk-YB2J7GTX.js";
import "./_oschunk-HFW3V2GI.js";
import "./_oschunk-LLAHPWP3.js";
import "./_oschunk-YVFTECWM.js";
import {
    f as y,
    h as N,
    i as F,
    j as H,
    n as $,
    u as W
} from "./_oschunk-VR5BNL2K.js";
import {
    a as de,
    g as V,
    m as ee,
    n as te,
    q as ne,
    r as ie,
    s as I,
    t as L
} from "./_oschunk-4VHUVDBV.js";
import {
    a as Z
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    Qb as q,
    Sb as O,
    cb as T,
    ub as _
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as C,
    c as l,
    e as ue,
    m as K,
    n as X,
    p as D
} from "./_oschunk-M5BUVJ72.js";
var ce = {
        "vPPTBSFyP0KVX1_9bhYfxQ#Value": "\u0645\u0635\u0631\u0648\u0641\u0627\u062A\u0643 \u0627\u0644\u0634\u0647\u0631\u064A\u0629 \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629",
        "xYnjcdw_1ku1TQ7PQFooOw#Value": "\u0645\u0635\u0631\u0648\u0641\u0627\u062A\u0643 \u0627\u0644\u0634\u0647\u0631\u064A\u0629 \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629",
        "hRzf2UyByUCzj5SGOvOsRQ#Title": "\u0627\u0644\u0646\u0641\u0642\u0627\u062A \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629 \u0627\u0644\u0634\u0647\u0631\u064A\u0629 | Deriv",
        "hRzf2UyByUCzj5SGOvOsRQ#TitleExpression.1088596436.1": "\u0627\u0644\u0646\u0641\u0642\u0627\u062A \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629 \u0627\u0644\u0634\u0647\u0631\u064A\u0629 | Deriv"
    },
    re = {
        "ar-001": {
            translations: ce,
            isRTL: !0
        }
    };

function J(v, c, d, e) {
    let n = JSON.parse(v.Response);
    v.instruments_trading_experience_list = JSON.stringify(n.instruments_trading_experience), v.previous_trading_experience_list = JSON.stringify(n.previous_trading_experience), v.trading_experience_list = JSON.stringify(n.trading_experience)
}
l(J, "default");
var t = C; {
    let c = class c extends t.Controller.BaseViewController {
        constructor(e, n, i) {
            super(e, n, i, re);
            var r = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get getTradingSuitabilityConfig$ServerAction() {
            return this.hasOwnProperty("_getTradingSuitabilityConfig$ServerAction") || (this._getTradingSuitabilityConfig$ServerAction = function(e, n) {
                var i = this.controller;
                return t.Logger.startActiveSpan("GetTradingSuitabilityConfig", function(r) {
                    return r && (r.setAttribute("code.function", "GetTradingSuitabilityConfig"), r.setAttribute("outsystems.function.key", "42d9d282-5ef4-47d9-adb6-3d29dbaf22bd"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), t.Flow.tryFinally(function() {
                        var o = {
                            Authorization: t.DataConversion.ServerDataConverter.to(e, t.DataTypes.DataTypes.Text)
                        };
                        return i.callServerAction("GetTradingSuitabilityConfig", "screenservices/uae/FinancialAssessmentFlow/UserMonthlyEssentialExpenditure/ActionGetTradingSuitabilityConfig", "kbU0NMdf6ssgJmGZ3Nq3MA", o, i.callContext(n), void 0, void 0, !0).then(function(g) {
                            var b = new(i.constructor.getVariableGroupType("uae.FinancialAssessmentFlow.UserMonthlyEssentialExpenditure$ActionGetTradingSuitabilityConfig"));
                            return b.responseOut = t.DataConversion.ServerDataConverter.from(g.Response, T), b
                        })
                    }, function() {
                        r && r.end()
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
        get _stopOnboardingOnContinue$Action() {
            return this.hasOwnProperty("__stopOnboardingOnContinue$Action") || (this.__stopOnboardingOnContinue$Action = function(e) {
                var n = this.model,
                    i = this.controller,
                    r = this.idService;
                return t.Logger.startActiveSpan("StopOnboardingOnContinue", function(o) {
                    o && (o.setAttribute("code.function", "StopOnboardingOnContinue"), o.setAttribute("outsystems.function.key", "07317467-ac13-4f13-8d95-ff4fe02992b5"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        if (i.ensureControllerAlive("StopOnboardingOnContinue"), e = i.callContext(e), n.variables.is_stand_aloneIn) return t.Navigation.navigateTo(t.Navigation.generateScreenURL("uae", "user-financial-assessment", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.None), e, !0);
                        n.variables.shouldStopOnboardingVar = !n.variables.shouldStopOnboardingVar
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__stopOnboardingOnContinue$Action
        }
        set _stopOnboardingOnContinue$Action(e) {
            this.__stopOnboardingOnContinue$Action = e
        }
        get _getTradingSuitability$Action() {
            return this.hasOwnProperty("__getTradingSuitability$Action") || (this.__getTradingSuitability$Action = function(e) {
                var n = this.model,
                    i = this.controller,
                    r = this.idService;
                return t.Logger.startActiveSpan("GetTradingSuitability", function(o) {
                    return o && (o.setAttribute("code.function", "GetTradingSuitability"), o.setAttribute("outsystems.function.key", "2ac1cb05-6c1e-4fc9-bafc-5a7a1a515b87"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        i.ensureControllerAlive("GetTradingSuitability"), e = i.callContext(e);
                        var g = new t.DataTypes.VariableHolder,
                            b = new t.DataTypes.VariableHolder,
                            a = new t.DataTypes.VariableHolder,
                            x = new t.DataTypes.VariableHolder(new t.DataTypes.JSONSerializeOutputType);
                        return t.Flow.executeAsyncFlow(function() {
                            return b.value = O.getAuth$Action(e), n.flush(), i.getTradingSuitabilityConfig$ServerAction(b.value.tokenOut, e).then(function(m) {
                                g.value = m
                            }).then(function() {
                                x.value.jSONOut = t.JSONUtils.serializeToJSON(g.value.responseOut.dataAttr, !1, !1), a.value = t.Logger.startActiveSpan("ParseDara", function(m) {
                                    m && (m.setAttribute("code.function", "ParseDara"), m.setAttribute("outsystems.function.key", "afea8663-f775-4640-9a55-37d76c7708f7"), m.setAttribute("outsystems.function.owner.name", "uae"), m.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), m.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return i.safeExecuteJSNode(J, "ParseDara", "GetTradingSuitability", {
                                            Response: t.DataConversion.JSNodeParamConverter.to(x.value.jSONOut, t.DataTypes.DataTypes.Text),
                                            instruments_trading_experience_list: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text),
                                            previous_trading_experience_list: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text),
                                            trading_experience_list: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                                        }, function(S) {
                                            var s = new(i.constructor.getVariableGroupType("uae.FinancialAssessmentFlow.UserMonthlyEssentialExpenditure.GetTradingSuitability$parseDaraJSResult"));
                                            return s.instruments_trading_experience_listOut = t.DataConversion.JSNodeParamConverter.from(S.instruments_trading_experience_list, t.DataTypes.DataTypes.Text), s.previous_trading_experience_listOut = t.DataConversion.JSNodeParamConverter.from(S.previous_trading_experience_list, t.DataTypes.DataTypes.Text), s.trading_experience_listOut = t.DataConversion.JSNodeParamConverter.from(S.trading_experience_list, t.DataTypes.DataTypes.Text), s
                                        }, {}, {})
                                    } finally {
                                        m && m.end()
                                    }
                                }, 1), _.setinstruments_trading_experience_list(a.value.instruments_trading_experience_listOut), _.setprevious_trading_experience_list(a.value.previous_trading_experience_listOut), _.settrading_experience_list(a.value.trading_experience_listOut)
                            })
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 1)
            }), this.__getTradingSuitability$Action
        }
        set _getTradingSuitability$Action(e) {
            this.__getTradingSuitability$Action = e
        }
        get _onSelectEssentialExpenditure$Action() {
            return this.hasOwnProperty("__onSelectEssentialExpenditure$Action") || (this.__onSelectEssentialExpenditure$Action = function(e, n) {
                var i = this.model,
                    r = this.controller,
                    o = this.idService;
                return t.Logger.startActiveSpan("OnSelectEssentialExpenditure", function(g) {
                    g && (g.setAttribute("code.function", "OnSelectEssentialExpenditure"), g.setAttribute("outsystems.function.key", "3bb6ce54-aa54-428b-b9aa-42ff20507f69"), g.setAttribute("outsystems.function.owner.name", "uae"), g.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), g.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnSelectEssentialExpenditure"), n = r.callContext(n);
                        var b = new t.DataTypes.VariableHolder(new(r.constructor.getVariableGroupType("uae.FinancialAssessmentFlow.UserMonthlyEssentialExpenditure.OnSelectEssentialExpenditure$vars")));
                        return b.value.monthly_essential_expenditureInLocal = e, _.setessential_expenditure(b.value.monthly_essential_expenditureInLocal), i.variables.is_stand_aloneIn ? t.Flow.returnAsync(t.Navigation.navigateTo(t.Navigation.generateScreenURL("uae", "user-financial-assessment", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.None), n, !0)) : t.Flow.returnAsync(t.Navigation.navigateTo(t.Navigation.generateScreenURL("uae", "user/trading-experience", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), n, !0))
                    } finally {
                        g && g.end()
                    }
                }, 1)
            }), this.__onSelectEssentialExpenditure$Action
        }
        set _onSelectEssentialExpenditure$Action(e) {
            this.__onSelectEssentialExpenditure$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var n = this.model,
                    i = this.controller,
                    r = this.idService;
                return t.Logger.startActiveSpan("OnReady", function(o) {
                    o && (o.setAttribute("code.function", "OnReady"), o.setAttribute("outsystems.function.key", "9e331200-49bb-4d9c-b600-b10ba8dd23fe"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("OnReady"), e = i.callContext(e);
                        var g = new t.DataTypes.VariableHolder;
                        n.variables.isLoadingVar = !1, g.value = O.getFinancialAssessmentConfigCache$Action("regular_expenses", e), n.variables.essential_expenditureVar = g.value.configValueOut
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        stopOnboardingOnContinue$Action(e) {
            var n = this.controller;
            return t.Logger.startActiveSpan("StopOnboardingOnContinue__proxy", function(i) {
                i && (i.setAttribute("code.function", "StopOnboardingOnContinue"), i.setAttribute("outsystems.function.key", "07317467-ac13-4f13-8d95-ff4fe02992b5"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._stopOnboardingOnContinue$Action, e)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        getTradingSuitability$Action(e) {
            var n = this.controller;
            return t.Logger.startActiveSpan("GetTradingSuitability__proxy", function(i) {
                return i && (i.setAttribute("code.function", "GetTradingSuitability"), i.setAttribute("outsystems.function.key", "2ac1cb05-6c1e-4fc9-bafc-5a7a1a515b87"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._getTradingSuitability$Action, e)
                }, function() {
                    i && i.end()
                })
            }, 0)
        }
        onSelectEssentialExpenditure$Action(e, n) {
            var i = this.controller;
            return t.Logger.startActiveSpan("OnSelectEssentialExpenditure__proxy", function(r) {
                return r && (r.setAttribute("code.function", "OnSelectEssentialExpenditure"), r.setAttribute("outsystems.function.key", "3bb6ce54-aa54-428b-b9aa-42ff20507f69"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._onSelectEssentialExpenditure$Action, n, e)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        onReady$Action(e) {
            var n = this.controller;
            return t.Logger.startActiveSpan("OnReady__proxy", function(i) {
                i && (i.setAttribute("code.function", "OnReady"), i.setAttribute("outsystems.function.key", "9e331200-49bb-4d9c-b600-b10ba8dd23fe"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onReady$Action, e)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var n = this.controller,
                    i = this.model,
                    r = this.idService;
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
                return G.default.handleError(e, this.callContext())
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
    l(c, "ControllerInner");
    let v = c;
    A = v, A.registerVariableGroupType("uae.FinancialAssessmentFlow.UserMonthlyEssentialExpenditure$ActionGetTradingSuitabilityConfig", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: t.DataTypes.DataTypes.Record,
        defaultValue: l(function() {
            return new T
        }, "defaultValue"),
        complexType: T
    }]), A.registerVariableGroupType("uae.FinancialAssessmentFlow.UserMonthlyEssentialExpenditure.GetTradingSuitability$parseDaraJSResult", [{
        name: "instruments_trading_experience_list",
        attrName: "instruments_trading_experience_listOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "previous_trading_experience_list",
        attrName: "previous_trading_experience_listOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "trading_experience_list",
        attrName: "trading_experience_listOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }]), A.registerVariableGroupType("uae.FinancialAssessmentFlow.UserMonthlyEssentialExpenditure.OnSelectEssentialExpenditure$vars", [{
        name: "monthly_essential_expenditure",
        attrName: "monthly_essential_expenditureInLocal",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }])
}
var A, z = new t.Controller.ControllerFactory(A, Z);
var u = ue(de());
var p = C,
    Q = class Q extends p.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("essential_expenditure", "essential_expenditureVar", "essential_expenditure", !0, !1, p.DataTypes.DataTypes.RecordList, function() {
                return p.DataTypes.ImmutableBase.getData(new p.DataTypes.TextList)
            }, !1, p.DataTypes.TextList), this.attr("isLoading", "isLoadingVar", "isLoading", !0, !1, p.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("ShouldStopOnboarding", "shouldStopOnboardingVar", "ShouldStopOnboarding", !0, !1, p.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("is_stand_alone", "is_stand_aloneIn", "is_stand_alone", !0, !1, p.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_is_stand_aloneInDataFetchStatus", "_is_stand_aloneInDataFetchStatus", "_is_stand_aloneInDataFetchStatus", !0, !1, p.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(p.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
l(Q, "VariablesRecord");
var P = Q;
P.init();
var Y = class Y extends p.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
l(Y, "WidgetsRecord");
var B = Y,
    E = class E extends p.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return P
        }
        static getWidgetsRecordConstructor() {
            return B
        }
        static get hasValidationWidgets() {
            return E._hasValidationWidgetsValue === void 0 && (E._hasValidationWidgetsValue = void 0 || void 0 || void 0), E._hasValidationWidgetsValue
        }
        setInputs(c) {
            "is_stand_alone" in c && (this.variables.is_stand_aloneIn = p.DataConversion.ServerDataConverter.from(c.is_stand_alone, p.DataTypes.DataTypes.Boolean))
        }
    };
l(E, "Model");
var w = E;
w._hasValidationWidgetsValue = void 0;
var j = new p.Model.ModelFactory(w);
var h = V.PlaceholderContent,
    le = V.IteratorPlaceholderContent,
    ge = l(function() {
        var v = te(function(c) {
            var d = c.model,
                e = c.controller,
                n = c.controller.idService,
                i = e.validationService,
                r = e.callContext(),
                o = I,
                g = L,
                b = {
                    props: c,
                    validateWidget: l(function(s) {
                        c.validateWidget(c, s)
                    }, "validateWidget")
                },
                a = d,
                x = ie,
                m = ne,
                S = ee();
            return u.createElement("div", c.rootNodeProperties, x(q.isDesktop$Action(r).isDesktopOut, !1, this, function() {
                return [u.createElement(M, {
                    getOwnerSpan: l(function() {
                        return S.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: l(function() {
                        return S.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        ShowClosebutton: !0
                    },
                    events: {
                        _handleError: l(function(s) {
                            e.handleError(s)
                        }, "_handleError"),
                        closeBtnEvent$Action: l(function() {
                            var s = typeof r != "undefined" && r !== null ? r.clone() : e.callContext().clone();
                            e.stopOnboardingOnContinue$Action(e.callContext(s))
                        }, "closeBtnEvent$Action")
                    },
                    _validationProps: {
                        validationService: i
                    },
                    _idProps: {
                        service: n,
                        uuid: "0",
                        alias: "1"
                    },
                    _widgetRecordProvider: a,
                    placeholders: {
                        contentbody: new h(function() {
                            return [u.createElement(y, {
                                align: 0,
                                animate: !1,
                                style: "flex flex-col",
                                visible: !0,
                                _idProps: {
                                    service: n,
                                    uuid: "1"
                                },
                                _widgetRecordProvider: a
                            }, u.createElement(W, {
                                extendedProperties: {
                                    style: "font-size: 24px; font-style: normal; font-weight: 900; line-height: normal;"
                                },
                                style: "margin-bottom-base",
                                text: [m(g("xYnjcdw_1ku1TQ7PQFooOw#Value", "Your monthly essential expenditure"))],
                                _idProps: {
                                    service: n,
                                    uuid: "2"
                                },
                                _widgetRecordProvider: a
                            }), u.createElement(y, {
                                align: 0,
                                animate: !1,
                                style: "mb-6",
                                visible: !0,
                                _idProps: {
                                    service: n,
                                    name: "SourceOfIncomeSelectionContainer2"
                                },
                                _widgetRecordProvider: a
                            }, x(d.variables.essential_expenditureVar.length < 1 || d.variables.isLoadingVar, !1, this, function() {
                                return [u.createElement(y, {
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
                                    _widgetRecordProvider: a
                                }, u.createElement(y, {
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
                                    _widgetRecordProvider: a
                                }), u.createElement(y, {
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
                                    _widgetRecordProvider: a
                                }), u.createElement(y, {
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
                                    _widgetRecordProvider: a
                                }), u.createElement(y, {
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
                                    _widgetRecordProvider: a
                                }))]
                            }, function() {
                                return [u.createElement(F, {
                                    animateItems: !0,
                                    gridProperties: {
                                        classes: "OSFillParent"
                                    },
                                    mode: 0,
                                    source: d.variables.essential_expenditureVar,
                                    style: "currency list-container list list-group",
                                    tag: "div",
                                    _idProps: {
                                        service: n,
                                        name: "CurrencyListContainer3"
                                    },
                                    _widgetRecordProvider: a,
                                    placeholders: {
                                        content: new le(function(s, f) {
                                            return [u.createElement(H, {
                                                extendedProperties: {
                                                    style: "border: 1px solid rgba(0, 0, 0, 0.04);"
                                                },
                                                onClick: l(function() {
                                                    return Promise.resolve().then(function() {
                                                        var R = typeof f != "undefined" && f !== null ? f.clone() : e.callContext().clone();
                                                        return e.onSelectEssentialExpenditure$Action(d.variables.essential_expenditureVar.getCurrent(f.iterationContext), e.callContext(R))
                                                    })
                                                }, "onClick"),
                                                style: d.getCachedValue(s.getId("ListItem2.Style"), function() {
                                                    return d.variables.essential_expenditureVar.getCurrent(f.iterationContext) === _.getessential_expenditure() ? "currency list-item item-selected" : "currency list-item"
                                                }, function() {
                                                    return d.variables.essential_expenditureVar.getCurrent(f.iterationContext)
                                                }, function() {
                                                    return _.getessential_expenditure()
                                                }),
                                                triggerActionOnFullSwipeLeft: !0,
                                                triggerActionOnFullSwipeRight: !0,
                                                _idProps: {
                                                    service: s,
                                                    name: "ListItem2"
                                                },
                                                _widgetRecordProvider: a,
                                                placeholders: {
                                                    leftActions: h.Empty,
                                                    content: new h(function() {
                                                        return [u.createElement(y, {
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
                                                                uuid: "11"
                                                            },
                                                            _widgetRecordProvider: a
                                                        }, u.createElement(N, {
                                                            value: d.getCachedValue(s.getId("q0f4JYNXmkOkh7uLP+ir6w.Value"), function() {
                                                                return O.translate$Action(d.variables.essential_expenditureVar.getCurrent(f.iterationContext), f).translatedTextOut
                                                            }, function() {
                                                                return d.variables.essential_expenditureVar.getCurrent(f.iterationContext)
                                                            }),
                                                            _idProps: {
                                                                service: s,
                                                                uuid: "12"
                                                            },
                                                            _widgetRecordProvider: a
                                                        }), u.createElement(y, {
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
                                                                uuid: "13"
                                                            },
                                                            _widgetRecordProvider: a
                                                        }, x(d.variables.essential_expenditureVar.getCurrent(f.iterationContext) === _.getessential_expenditure(), !1, this, function() {
                                                            return [u.createElement($, {
                                                                image: D.VersionedURL.getVersionedUrl("img/uae.circlecheck.svg"),
                                                                type: 0,
                                                                _idProps: {
                                                                    service: s,
                                                                    uuid: "14"
                                                                },
                                                                _widgetRecordProvider: a
                                                            })]
                                                        }, function() {
                                                            return []
                                                        })))]
                                                    }),
                                                    rightActions: h.Empty
                                                },
                                                _dependencies: [o(_.getessential_expenditure())]
                                            })]
                                        }, r, n, "1")
                                    },
                                    _dependencies: []
                                })]
                            })))]
                        })
                    },
                    _dependencies: [o(d.variables.isLoadingVar), o(d.variables.essential_expenditureVar)]
                })]
            }, function() {
                return [u.createElement(k, {
                    getOwnerSpan: l(function() {
                        return S.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: l(function() {
                        return S.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        has_close_icon: !0,
                        has_back_button: !d.variables.is_stand_aloneIn
                    },
                    events: {
                        _handleError: l(function(s) {
                            e.handleError(s)
                        }, "_handleError"),
                        closeEvent$Action: l(function() {
                            var s = typeof r != "undefined" && r !== null ? r.clone() : e.callContext().clone();
                            e.stopOnboardingOnContinue$Action(e.callContext(s))
                        }, "closeEvent$Action")
                    },
                    _validationProps: {
                        validationService: i
                    },
                    _idProps: {
                        service: n,
                        uuid: "15",
                        alias: "2"
                    },
                    _widgetRecordProvider: a,
                    placeholders: {
                        content: new h(function() {
                            return [u.createElement(y, {
                                align: 0,
                                animate: !1,
                                style: "flex flex-col",
                                visible: !0,
                                _idProps: {
                                    service: n,
                                    uuid: "16"
                                },
                                _widgetRecordProvider: a
                            }, u.createElement(W, {
                                extendedProperties: {
                                    style: "font-size: 24px; font-style: normal; font-weight: 900; line-height: normal;"
                                },
                                style: "mb-12",
                                text: [m(g("vPPTBSFyP0KVX1_9bhYfxQ#Value", "Your monthly essential expenditure"))],
                                _idProps: {
                                    service: n,
                                    uuid: "17"
                                },
                                _widgetRecordProvider: a
                            }), u.createElement(y, {
                                align: 0,
                                animate: !1,
                                style: "mb-6",
                                visible: !0,
                                _idProps: {
                                    service: n,
                                    name: "SourceOfIncomeSelectionContainer"
                                },
                                _widgetRecordProvider: a
                            }, x(d.variables.essential_expenditureVar.length < 1 || d.variables.isLoadingVar, !1, this, function() {
                                return [u.createElement(y, {
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
                                    _widgetRecordProvider: a
                                }, u.createElement(y, {
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
                                    _widgetRecordProvider: a
                                }), u.createElement(y, {
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
                                    _widgetRecordProvider: a
                                }), u.createElement(y, {
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
                                    _widgetRecordProvider: a
                                }), u.createElement(y, {
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
                                    _widgetRecordProvider: a
                                }))]
                            }, function() {
                                return [u.createElement(F, {
                                    animateItems: !0,
                                    gridProperties: {
                                        classes: "OSFillParent"
                                    },
                                    mode: 0,
                                    source: d.variables.essential_expenditureVar,
                                    style: "currency list-container list list-group",
                                    tag: "div",
                                    _idProps: {
                                        service: n,
                                        name: "CurrencyListContainer2"
                                    },
                                    _widgetRecordProvider: a,
                                    placeholders: {
                                        content: new le(function(s, f) {
                                            return [u.createElement(H, {
                                                extendedProperties: {
                                                    style: "border: 1px solid rgba(0, 0, 0, 0.04);"
                                                },
                                                onClick: l(function() {
                                                    return Promise.resolve().then(function() {
                                                        var R = typeof f != "undefined" && f !== null ? f.clone() : e.callContext().clone();
                                                        return e.onSelectEssentialExpenditure$Action(d.variables.essential_expenditureVar.getCurrent(f.iterationContext), e.callContext(R))
                                                    })
                                                }, "onClick"),
                                                style: d.getCachedValue(s.getId("ListItem1.Style"), function() {
                                                    return d.variables.essential_expenditureVar.getCurrent(f.iterationContext) === _.getessential_expenditure() ? "currency list-item item-selected" : "currency list-item"
                                                }, function() {
                                                    return d.variables.essential_expenditureVar.getCurrent(f.iterationContext)
                                                }, function() {
                                                    return _.getessential_expenditure()
                                                }),
                                                triggerActionOnFullSwipeLeft: !0,
                                                triggerActionOnFullSwipeRight: !0,
                                                _idProps: {
                                                    service: s,
                                                    name: "ListItem1"
                                                },
                                                _widgetRecordProvider: a,
                                                placeholders: {
                                                    leftActions: h.Empty,
                                                    content: new h(function() {
                                                        return [u.createElement(y, {
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
                                                                uuid: "26"
                                                            },
                                                            _widgetRecordProvider: a
                                                        }, u.createElement(N, {
                                                            value: d.getCachedValue(s.getId("VxaBClQG2UOdaz_zSEpiDA.Value"), function() {
                                                                return O.translate$Action(d.variables.essential_expenditureVar.getCurrent(f.iterationContext), f).translatedTextOut
                                                            }, function() {
                                                                return d.variables.essential_expenditureVar.getCurrent(f.iterationContext)
                                                            }),
                                                            _idProps: {
                                                                service: s,
                                                                uuid: "27"
                                                            },
                                                            _widgetRecordProvider: a
                                                        }), u.createElement(y, {
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
                                                                uuid: "28"
                                                            },
                                                            _widgetRecordProvider: a
                                                        }, x(d.variables.essential_expenditureVar.getCurrent(f.iterationContext) === _.getessential_expenditure(), !1, this, function() {
                                                            return [u.createElement($, {
                                                                image: D.VersionedURL.getVersionedUrl("img/uae.circlecheck.svg"),
                                                                type: 0,
                                                                _idProps: {
                                                                    service: s,
                                                                    uuid: "29"
                                                                },
                                                                _widgetRecordProvider: a
                                                            })]
                                                        }, function() {
                                                            return []
                                                        })))]
                                                    }),
                                                    rightActions: h.Empty
                                                },
                                                _dependencies: [o(_.getessential_expenditure())]
                                            })]
                                        }, r, n, "2")
                                    },
                                    _dependencies: []
                                })]
                            })))]
                        }),
                        footer: h.Empty
                    },
                    _dependencies: [o(d.variables.isLoadingVar), o(d.variables.essential_expenditureVar)]
                })]
            }), u.createElement(U, {
                getOwnerSpan: l(function() {
                    return S.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: l(function() {
                    return S.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ShouldShow: d.variables.shouldStopOnboardingVar
                },
                events: {
                    _handleError: l(function(s) {
                        e.handleError(s)
                    }, "_handleError"),
                    onContinue$Action: l(function() {
                        var s = typeof r != "undefined" && r !== null ? r.clone() : e.callContext().clone();
                        e.stopOnboardingOnContinue$Action(e.callContext(s))
                    }, "onContinue$Action")
                },
                _validationProps: {
                    validationService: i
                },
                _idProps: {
                    service: n,
                    uuid: "30",
                    alias: "3"
                },
                _widgetRecordProvider: a,
                _dependencies: []
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: l(function() {
                return {
                    codeFunction: "UserMonthlyEssentialExpenditure",
                    functionKey: "d9df1c85-814c-40c9-b38f-94863af3ac45",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "FinancialAssessmentFlow.UserMonthlyEssentialExpenditure",
            modelFactory: j,
            controllerFactory: z,
            getTitle: l(function(c) {
                var d = c.model,
                    e = c.controller,
                    n = c.controller.idService,
                    i = e.validationService,
                    r = e.callContext(),
                    o = I,
                    g = L,
                    b = {
                        props: c,
                        validateWidget: l(function(a) {
                            c.validateWidget(c, a)
                        }, "validateWidget")
                    };
                return K.resolve(X.TranslationsService).getMessage("hRzf2UyByUCzj5SGOvOsRQ#TitleExpression.1088596436.1", "Monthly essential expenditure | Deriv")
            }, "getTitle")
        });
        return v.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.FinancialAssessmentFlow.UserMonthlyEssentialExpenditure.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, v.getJsDependencies = function() {
            return []
        }, v.getBlocks = function() {
            return [M, k, U]
        }, v
    }, "componentFactory"),
    ye = ge();
export {
    z as controllerModule, j as modelModule, ye as viewModule, G as webFlowControllerModule
};