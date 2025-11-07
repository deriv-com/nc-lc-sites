import {
    a as D
} from "./_oschunk-NLNJ5SA5.js";
import {
    a as L
} from "./_oschunk-JF3PYARS.js";
import "./_oschunk-6RCCOD74.js";
import "./_oschunk-7SYLUYK7.js";
import {
    a as $
} from "./_oschunk-UZGD3HJ2.js";
import "./_oschunk-L6JZD7VU.js";
import "./_oschunk-YVFTECWM.js";
import {
    b as Y,
    f as g,
    h as q,
    i as ee,
    j as te,
    n as ne,
    u as N
} from "./_oschunk-VR5BNL2K.js";
import {
    a as le,
    g as T,
    m as G,
    n as Q,
    q as Z,
    r as X,
    s as I,
    t as V
} from "./_oschunk-4VHUVDBV.js";
import {
    a as j
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    Qb as R,
    Sb as b,
    o as P,
    ub as y
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as S,
    c as s,
    e as se,
    m as x,
    n as w,
    p as K,
    w as J
} from "./_oschunk-M5BUVJ72.js";
var ue = {
        "hEkyaBgMDkeK8tOla00ZUQ#Value": "\u0627\u0644\u062A\u0627\u0644\u064A",
        "jWJmFbOHyk+V2hbFnEwUZg#Value": "\u0646\u0641\u0642\u0627\u062A\u0643 \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629 \u0627\u0644\u0634\u0647\u0631\u064A\u0629",
        "KLlelFUnDU6HRwtEXoaUNg#Value.-1037113639.1": "\u0627\u0644\u062A\u0642\u064A\u064A\u0645 \u0627\u0644\u0645\u0627\u0644\u064A.",
        "Ff0uIiMBsEK8uQ5zORgvSA#Title": "\u0627\u0644\u0646\u0641\u0642\u0627\u062A \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629 | Deriv",
        "Ff0uIiMBsEK8uQ5zORgvSA#TitleExpression.1457478311.1": "\u0627\u0644\u0646\u0641\u0642\u0627\u062A \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629 | Deriv"
    },
    ie = {
        "ar-001": {
            translations: ue,
            isRTL: !0
        }
    };
var r = S; {
    let l = class l extends r.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, ie);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onClickPrevious$Action() {
            return this.hasOwnProperty("__onClickPrevious$Action") || (this.__onClickPrevious$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("OnClickPrevious", function(i) {
                    i && (i.setAttribute("code.function", "OnClickPrevious"), i.setAttribute("outsystems.function.key", "242ffff8-a534-4ae6-8291-ef4a8106a845"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("OnClickPrevious"), e = t.callContext(e), r.Navigation.navigateTo(r.Navigation.generateScreenURL("uae", "education-level", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.None), e, !0)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onClickPrevious$Action
        }
        set _onClickPrevious$Action(e) {
            this.__onClickPrevious$Action = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("OnInitialize", function(i) {
                    i && (i.setAttribute("code.function", "OnInitialize"), i.setAttribute("outsystems.function.key", "5ea99365-9f8a-4fe4-be06-5f22bf854094"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e), y.setRealSignupCurrentStep(4)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("OnReady", function(i) {
                    i && (i.setAttribute("code.function", "OnReady"), i.setAttribute("outsystems.function.key", "b777879b-8887-41aa-ab9a-1d76a4789525"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var f = new r.DataTypes.VariableHolder,
                            h = new r.DataTypes.VariableHolder(new(r.Controller.BaseController.getJSONDeserializeOutputType(P)));
                        n.variables.isLoadingVar = !0, f.value = b.getFinancialAssessmentConfigCache$Action("regular_expenses", e), n.variables.essential_expenditureVar = f.value.configValueOut, y.getessential_expenditure() === r.BuiltinFunctions.nullTextIdentifier() && y.getgetTaxAPIResponse() !== r.BuiltinFunctions.nullTextIdentifier() && (h.value.dataOut = r.JSONUtils.deserializeFromJSON(y.getgetTaxAPIResponse(), P, !1), y.setessential_expenditure(h.value.dataOut.financial_assessmentAttr.regular_expensesAttr)), n.variables.isLoadingVar = !1
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _stopOnboardingOnContinue$Action() {
            return this.hasOwnProperty("__stopOnboardingOnContinue$Action") || (this.__stopOnboardingOnContinue$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("StopOnboardingOnContinue", function(i) {
                    i && (i.setAttribute("code.function", "StopOnboardingOnContinue"), i.setAttribute("outsystems.function.key", "d5d991d5-40b4-457a-806f-0702d6c62597"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        if (t.ensureControllerAlive("StopOnboardingOnContinue"), e = t.callContext(e), n.variables.is_stand_aloneIn) return r.Navigation.navigateBack(null, e, !0);
                        n.variables.shouldStopOnboardingVar = !n.variables.shouldStopOnboardingVar
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__stopOnboardingOnContinue$Action
        }
        set _stopOnboardingOnContinue$Action(e) {
            this.__stopOnboardingOnContinue$Action = e
        }
        get _onSelectEssentialExpenditure$Action() {
            return this.hasOwnProperty("__onSelectEssentialExpenditure$Action") || (this.__onSelectEssentialExpenditure$Action = function(e, n) {
                var t = this.model,
                    o = this.controller,
                    i = this.idService;
                return r.Logger.startActiveSpan("OnSelectEssentialExpenditure", function(f) {
                    f && (f.setAttribute("code.function", "OnSelectEssentialExpenditure"), f.setAttribute("outsystems.function.key", "d795173d-7586-4363-9339-61d44c61a2e6"), f.setAttribute("outsystems.function.owner.name", "uae"), f.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), f.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("OnSelectEssentialExpenditure"), n = o.callContext(n);
                        var h = new r.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("uae.OnboardingFlow.MonthlyEssentialExpenditure.OnSelectEssentialExpenditure$vars")));
                        h.value.monthly_essential_expenditureInLocal = e;
                        var a = new r.DataTypes.VariableHolder;
                        a.value = b.getFinancialAssessmentConfigCache$Action("regular_expenses", n), y.setessential_expenditure(h.value.monthly_essential_expenditureInLocal), t.variables.essential_expenditureVar = a.value.configValueOut
                    } finally {
                        f && f.end()
                    }
                }, 1)
            }), this.__onSelectEssentialExpenditure$Action
        }
        set _onSelectEssentialExpenditure$Action(e) {
            this.__onSelectEssentialExpenditure$Action = e
        }
        get _nextStep$Action() {
            return this.hasOwnProperty("__nextStep$Action") || (this.__nextStep$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("NextStep", function(i) {
                    i && (i.setAttribute("code.function", "NextStep"), i.setAttribute("outsystems.function.key", "fcc07a0e-86cd-4207-9b61-a5b0fe17d151"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("NextStep"), e = t.callContext(e), n.variables.is_stand_aloneIn ? r.Navigation.navigateBack(r.Transitions.createTransition(r.Transitions.TransitionAnimation.None), e, !0) : r.Navigation.navigateTo(r.Navigation.generateScreenURL("uae", "suitability-assessment", {
                            CurrentPos: r.DataConversion.ServerDataConverter.to(0, r.DataTypes.DataTypes.Integer)
                        }), r.Transitions.createTransition(r.Transitions.TransitionAnimation.None), e, !0)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__nextStep$Action
        }
        set _nextStep$Action(e) {
            this.__nextStep$Action = e
        }
        onClickPrevious$Action(e) {
            var n = this.controller;
            return r.Logger.startActiveSpan("OnClickPrevious__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnClickPrevious"), t.setAttribute("outsystems.function.key", "242ffff8-a534-4ae6-8291-ef4a8106a845"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onClickPrevious$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onInitialize$Action(e) {
            var n = this.controller;
            return r.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "5ea99365-9f8a-4fe4-be06-5f22bf854094"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onInitialize$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var n = this.controller;
            return r.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "b777879b-8887-41aa-ab9a-1d76a4789525"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onReady$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        stopOnboardingOnContinue$Action(e) {
            var n = this.controller;
            return r.Logger.startActiveSpan("StopOnboardingOnContinue__proxy", function(t) {
                t && (t.setAttribute("code.function", "StopOnboardingOnContinue"), t.setAttribute("outsystems.function.key", "d5d991d5-40b4-457a-806f-0702d6c62597"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._stopOnboardingOnContinue$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onSelectEssentialExpenditure$Action(e, n) {
            var t = this.controller;
            return r.Logger.startActiveSpan("OnSelectEssentialExpenditure__proxy", function(o) {
                o && (o.setAttribute("code.function", "OnSelectEssentialExpenditure"), o.setAttribute("outsystems.function.key", "d795173d-7586-4363-9339-61d44c61a2e6"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onSelectEssentialExpenditure$Action, n, e)
                } finally {
                    o && o.end()
                }
            }, 0)
        }
        nextStep$Action(e) {
            var n = this.controller;
            return r.Logger.startActiveSpan("NextStep__proxy", function(t) {
                t && (t.setAttribute("code.function", "NextStep"), t.setAttribute("outsystems.function.key", "fcc07a0e-86cd-4207-9b61-a5b0fe17d151"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._nextStep$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var n = this.controller,
                    t = this.model,
                    o = this.idService;
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
                    o = this.idService;
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
                return D.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return b.defaultTimeout
        }
    };
    s(l, "ControllerInner");
    let _ = l;
    k = _, k.registerVariableGroupType("uae.OnboardingFlow.MonthlyEssentialExpenditure.OnSelectEssentialExpenditure$vars", [{
        name: "monthly_essential_expenditure",
        attrName: "monthly_essential_expenditureInLocal",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }])
}
var k, H = new r.Controller.ControllerFactory(k, j);
var u = se(le());
var v = S,
    M = class M extends v.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("essential_expenditure", "essential_expenditureVar", "essential_expenditure", !0, !1, v.DataTypes.DataTypes.RecordList, function() {
                return v.DataTypes.ImmutableBase.getData(new v.DataTypes.TextList)
            }, !1, v.DataTypes.TextList), this.attr("isLoading", "isLoadingVar", "isLoading", !0, !1, v.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("ShouldStopOnboarding", "shouldStopOnboardingVar", "ShouldStopOnboarding", !0, !1, v.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("is_stand_alone", "is_stand_aloneIn", "is_stand_alone", !0, !1, v.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_is_stand_aloneInDataFetchStatus", "_is_stand_aloneInDataFetchStatus", "_is_stand_aloneInDataFetchStatus", !0, !1, v.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(v.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(M, "VariablesRecord");
var A = M;
A.init();
var B = class B extends v.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(B, "WidgetsRecord");
var F = B,
    p = class p extends v.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return A
        }
        static getWidgetsRecordConstructor() {
            return F
        }
        static get hasValidationWidgets() {
            return p._hasValidationWidgetsValue === void 0 && (p._hasValidationWidgetsValue = void 0 || void 0), p._hasValidationWidgetsValue
        }
        setInputs(l) {
            "is_stand_alone" in l && (this.variables.is_stand_aloneIn = v.DataConversion.ServerDataConverter.from(l.is_stand_alone, v.DataTypes.DataTypes.Boolean))
        }
    };
s(p, "Model");
var O = p;
O._hasValidationWidgetsValue = void 0;
var W = new v.Model.ModelFactory(O);
var C = T.PlaceholderContent,
    de = T.IteratorPlaceholderContent,
    fe = s(function() {
        var _ = Q(function(l) {
            var c = l.model,
                e = l.controller,
                n = l.controller.idService,
                t = e.validationService,
                o = e.callContext(),
                i = I,
                f = V,
                h = {
                    props: l,
                    validateWidget: s(function(d) {
                        l.validateWidget(l, d)
                    }, "validateWidget")
                },
                a = c,
                z = X,
                U = Z,
                E = G();
            return u.createElement("div", l.rootNodeProperties, u.createElement(L, {
                getOwnerSpan: s(function() {
                    return E.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return E.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    shouldShowProgressBarInMobile: !0,
                    Title: x.resolve(w.TranslationsService).getMessage("KLlelFUnDU6HRwtEXoaUNg#Value.-1037113639.1", "Financial assessment"),
                    ShouldEmitPreviousEvent: !0,
                    ProgressBarPercentage: 66
                },
                events: {
                    _handleError: s(function(d) {
                        e.handleError(d)
                    }, "_handleError"),
                    onClickPrevious$Action: s(function() {
                        var d = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                        e.onClickPrevious$Action(e.callContext(d))
                    }, "onClickPrevious$Action")
                },
                _validationProps: {
                    validationService: t
                },
                _idProps: {
                    service: n,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: a,
                placeholders: {
                    content: new C(function() {
                        return [u.createElement(g, {
                            align: 0,
                            animate: !1,
                            style: "flex flex-col",
                            visible: !0,
                            _idProps: {
                                service: n,
                                uuid: "1"
                            },
                            _widgetRecordProvider: a
                        }, u.createElement(N, {
                            extendedProperties: {
                                style: "font-size: 24px; font-style: normal; font-weight: 900; line-height: normal;"
                            },
                            style: "margin-bottom-base",
                            text: [U(f("jWJmFbOHyk+V2hbFnEwUZg#Value", "Your monthly essential expenditure"))],
                            _idProps: {
                                service: n,
                                uuid: "2"
                            },
                            _widgetRecordProvider: a
                        }), u.createElement(g, {
                            align: 0,
                            animate: !1,
                            style: "mb-6",
                            visible: !0,
                            _idProps: {
                                service: n,
                                name: "SourceOfIncomeSelectionContainer"
                            },
                            _widgetRecordProvider: a
                        }, z(c.variables.essential_expenditureVar.length < 1 || c.variables.isLoadingVar, !1, this, function() {
                            return [u.createElement(g, {
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
                            }, u.createElement(g, {
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
                            }), u.createElement(g, {
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
                            }), u.createElement(g, {
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
                            }), u.createElement(g, {
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
                            return [u.createElement(ee, {
                                animateItems: !0,
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                mode: 0,
                                source: c.variables.essential_expenditureVar,
                                style: "currency list-container list list-group",
                                tag: "div",
                                _idProps: {
                                    service: n,
                                    name: "CurrencyListContainer2"
                                },
                                _widgetRecordProvider: a,
                                placeholders: {
                                    content: new de(function(d, m) {
                                        return [u.createElement(te, {
                                            extendedProperties: {
                                                style: "border: 1px solid rgba(0, 0, 0, 0.04);"
                                            },
                                            onClick: s(function() {
                                                var ae = typeof m != "undefined" && m !== null ? m.clone() : e.callContext().clone();
                                                e.onSelectEssentialExpenditure$Action(c.variables.essential_expenditureVar.getCurrent(m.iterationContext), e.callContext(ae))
                                            }, "onClick"),
                                            style: c.getCachedValue(d.getId("ListItem1.Style"), function() {
                                                return c.variables.essential_expenditureVar.getCurrent(m.iterationContext) === y.getessential_expenditure() ? "currency list-item item-selected" : "currency list-item"
                                            }, function() {
                                                return c.variables.essential_expenditureVar.getCurrent(m.iterationContext)
                                            }, function() {
                                                return y.getessential_expenditure()
                                            }),
                                            triggerActionOnFullSwipeLeft: !0,
                                            triggerActionOnFullSwipeRight: !0,
                                            _idProps: {
                                                service: d,
                                                name: "ListItem1"
                                            },
                                            _widgetRecordProvider: a,
                                            placeholders: {
                                                leftActions: C.Empty,
                                                content: new C(function() {
                                                    return [u.createElement(g, {
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
                                                    }, u.createElement(q, {
                                                        value: c.getCachedValue(d.getId("RRA8CWJllEiRhisPehhpdg.Value"), function() {
                                                            return b.translate$Action(c.variables.essential_expenditureVar.getCurrent(m.iterationContext), m).translatedTextOut
                                                        }, function() {
                                                            return c.variables.essential_expenditureVar.getCurrent(m.iterationContext)
                                                        }),
                                                        _idProps: {
                                                            service: d,
                                                            uuid: "12"
                                                        },
                                                        _widgetRecordProvider: a
                                                    }), u.createElement(g, {
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
                                                            uuid: "13"
                                                        },
                                                        _widgetRecordProvider: a
                                                    }, z(c.variables.essential_expenditureVar.getCurrent(m.iterationContext) === y.getessential_expenditure(), !1, this, function() {
                                                        return [u.createElement(ne, {
                                                            image: K.VersionedURL.getVersionedUrl("img/uae.circlecheck.svg"),
                                                            type: 0,
                                                            _idProps: {
                                                                service: d,
                                                                uuid: "14"
                                                            },
                                                            _widgetRecordProvider: a
                                                        })]
                                                    }, function() {
                                                        return []
                                                    })))]
                                                }),
                                                rightActions: C.Empty
                                            },
                                            _dependencies: [i(y.getessential_expenditure())]
                                        })]
                                    }, o, n, "1")
                                },
                                _dependencies: []
                            })]
                        })), u.createElement(g, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-top: 24px; text-align: right;"
                            },
                            style: c.getCachedValue(n.getId("ButtonContainer.Style"), function() {
                                return R.isDesktop$Action(o).isDesktopOut ? "flex justify-content-flex-end" : "fixed bottom-0 left-0 w-full flex justify-center p-4"
                            }),
                            visible: !0,
                            _idProps: {
                                service: n,
                                name: "ButtonContainer"
                            },
                            _widgetRecordProvider: a
                        }, u.createElement(Y, {
                            enabled: c.getCachedValue(n.getId("NextButton3.Enabled"), function() {
                                return y.getessential_expenditure() !== J.nullTextIdentifier()
                            }, function() {
                                return y.getessential_expenditure()
                            }),
                            extendedProperties: {
                                style: "border-radius: 24px;"
                            },
                            gridProperties: {
                                width: "96px"
                            },
                            isDefault: !1,
                            onClick: s(function() {
                                var d = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                                e.nextStep$Action(e.callContext(d))
                            }, "onClick"),
                            style: c.getCachedValue(n.getId("NextButton3.Style"), function() {
                                return R.isDesktop$Action(o).isDesktopOut ? "btn btn-primary" : "btn btn-primary action-button"
                            }),
                            visible: !0,
                            _idProps: {
                                service: n,
                                name: "NextButton3"
                            },
                            _widgetRecordProvider: a
                        }, u.createElement(N, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: bold;"
                            },
                            text: [U(f("hEkyaBgMDkeK8tOla00ZUQ#Value", "Next"))],
                            _idProps: {
                                service: n,
                                uuid: "17"
                            },
                            _widgetRecordProvider: a
                        }))))]
                    })
                },
                _dependencies: [i(c.variables.isLoadingVar), i(c.variables.essential_expenditureVar)]
            }), u.createElement($, {
                getOwnerSpan: s(function() {
                    return E.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return E.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ShouldShow: c.variables.shouldStopOnboardingVar
                },
                events: {
                    _handleError: s(function(d) {
                        e.handleError(d)
                    }, "_handleError"),
                    onContinue$Action: s(function() {
                        var d = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                        e.stopOnboardingOnContinue$Action(e.callContext(d))
                    }, "onContinue$Action")
                },
                _validationProps: {
                    validationService: t
                },
                _idProps: {
                    service: n,
                    uuid: "18",
                    alias: "2"
                },
                _widgetRecordProvider: a,
                _dependencies: []
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: s(function() {
                return {
                    codeFunction: "MonthlyEssentialExpenditure",
                    functionKey: "222efd15-0123-42b0-bcb9-0e7339182f48",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "OnboardingFlow.MonthlyEssentialExpenditure",
            modelFactory: W,
            controllerFactory: H,
            getTitle: s(function(l) {
                var c = l.model,
                    e = l.controller,
                    n = l.controller.idService,
                    t = e.validationService,
                    o = e.callContext(),
                    i = I,
                    f = V,
                    h = {
                        props: l,
                        validateWidget: s(function(a) {
                            l.validateWidget(l, a)
                        }, "validateWidget")
                    };
                return x.resolve(w.TranslationsService).getMessage("Ff0uIiMBsEK8uQ5zORgvSA#TitleExpression.1457478311.1", "Essential expenditure | Deriv")
            }, "getTitle")
        });
        return _.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.OnboardingFlow.MonthlyEssentialExpenditure.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, _.getJsDependencies = function() {
            return []
        }, _.getBlocks = function() {
            return [L, $]
        }, _
    }, "componentFactory"),
    ve = fe();
export {
    H as controllerModule, W as modelModule, ve as viewModule, D as webFlowControllerModule
};