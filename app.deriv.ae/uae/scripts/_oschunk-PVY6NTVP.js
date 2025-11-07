import {
    a as H
} from "./_oschunk-NLNJ5SA5.js";
import {
    a as k
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
    h as X,
    i as ee,
    j as te,
    n as ne,
    u as V
} from "./_oschunk-VR5BNL2K.js";
import {
    a as ce,
    g as T,
    m as J,
    n as Q,
    q as Z,
    r as q,
    s as R,
    t as N
} from "./_oschunk-4VHUVDBV.js";
import {
    a as K
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    Qb as x,
    Sb as A,
    o as P,
    ub as d
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as h,
    c as a,
    e as se,
    m as I,
    n as w,
    p as G,
    w as j
} from "./_oschunk-M5BUVJ72.js";
var le = {
        "sCmF2yIgF0iIDGpP0Dps6Q#Value": "\u0627\u0644\u062A\u0627\u0644\u064A",
        "8EvA+lPw50iACxbnkFVnjg#Value": "\u0645\u0635\u062F\u0631 \u062F\u062E\u0644\u0643",
        "ZEHbH8BmI0ak7Q1fiNOoNA#Value.-1037113639.1": "\u0627\u0644\u062A\u0642\u064A\u064A\u0645 \u0627\u0644\u0645\u0627\u0644\u064A.",
        "KVmgnIg+xkiDjlhfG4CmIA#Title": "\u0645\u0635\u062F\u0631 \u0627\u0644\u062F\u062E\u0644 | Deriv",
        "KVmgnIg+xkiDjlhfG4CmIA#TitleExpression.1477787015.1": "\u0645\u0635\u062F\u0631 \u0627\u0644\u062F\u062E\u0644 | Deriv"
    },
    re = {
        "ar-001": {
            translations: le,
            isRTL: !0
        }
    };
var i = h; {
    let s = class s extends i.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, re);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onSelectSourceOfIncome$Action() {
            return this.hasOwnProperty("__onSelectSourceOfIncome$Action") || (this.__onSelectSourceOfIncome$Action = function(e, n) {
                var t = this.model,
                    o = this.controller,
                    r = this.idService;
                return i.Logger.startActiveSpan("OnSelectSourceOfIncome", function(m) {
                    m && (m.setAttribute("code.function", "OnSelectSourceOfIncome"), m.setAttribute("outsystems.function.key", "73064559-325c-479c-b98d-0ad963911411"), m.setAttribute("outsystems.function.owner.name", "uae"), m.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), m.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("OnSelectSourceOfIncome"), n = o.callContext(n);
                        var S = new i.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("uae.OnboardingFlow.SourceOfIncome.OnSelectSourceOfIncome$vars")));
                        S.value.selected_source_of_incomeInLocal = e, d.setsource_of_income(S.value.selected_source_of_incomeInLocal)
                    } finally {
                        m && m.end()
                    }
                }, 1)
            }), this.__onSelectSourceOfIncome$Action
        }
        set _onSelectSourceOfIncome$Action(e) {
            this.__onSelectSourceOfIncome$Action = e
        }
        get _onClickPrevious$Action() {
            return this.hasOwnProperty("__onClickPrevious$Action") || (this.__onClickPrevious$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return i.Logger.startActiveSpan("OnClickPrevious", function(r) {
                    r && (r.setAttribute("code.function", "OnClickPrevious"), r.setAttribute("outsystems.function.key", "a0073c5e-d930-4694-8981-088750d17d17"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("OnClickPrevious"), e = t.callContext(e), d.getemployment_status() === "unemployed" || d.getemployment_status() === "pensioner" ? d.getis_taxpayer_outside_uae() === "yes" ? i.Navigation.navigateTo(i.Navigation.generateScreenURL("uae", "tax-info", {}), i.Transitions.createTransition(i.Transitions.TransitionAnimation.None), e, !0) : i.Navigation.navigateTo(i.Navigation.generateScreenURL("uae", "foreign-tax", {}), i.Transitions.createTransition(i.Transitions.TransitionAnimation.None), e, !0) : i.Navigation.navigateTo(i.Navigation.generateScreenURL("uae", "industry-of-employment", {}), i.Transitions.createTransition(i.Transitions.TransitionAnimation.None), e, !0)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onClickPrevious$Action
        }
        set _onClickPrevious$Action(e) {
            this.__onClickPrevious$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return i.Logger.startActiveSpan("OnReady", function(r) {
                    r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "a93db27b-ed73-4636-9e7b-7968fd3f1d7a"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var m = new i.DataTypes.VariableHolder,
                            S = new i.DataTypes.VariableHolder(new(i.Controller.BaseController.getJSONDeserializeOutputType(P)));
                        m.value = A.getFinancialAssessmentConfigCache$Action("source_of_income", e), n.variables.source_of_income_listVar = m.value.configValueOut, d.getsource_of_income() === i.BuiltinFunctions.nullTextIdentifier() && d.getgetTaxAPIResponse() !== i.BuiltinFunctions.nullTextIdentifier() && (S.value.dataOut = i.JSONUtils.deserializeFromJSON(d.getgetTaxAPIResponse(), P, !1), d.setsource_of_income(S.value.dataOut.financial_assessmentAttr.source_of_incomeAttr))
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return i.Logger.startActiveSpan("OnInitialize", function(r) {
                    r && (r.setAttribute("code.function", "OnInitialize"), r.setAttribute("outsystems.function.key", "e2aa9a1a-4e9b-49f8-b601-ea71de235aab"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e), d.setRealSignupCurrentStep(4)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        get _nextStep$Action() {
            return this.hasOwnProperty("__nextStep$Action") || (this.__nextStep$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return i.Logger.startActiveSpan("NextStep", function(r) {
                    r && (r.setAttribute("code.function", "NextStep"), r.setAttribute("outsystems.function.key", "e5637475-b1ec-47f5-a254-5dfc51b1f0c1"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("NextStep"), e = t.callContext(e), n.variables.isStandAloneIn ? i.Navigation.navigateBack(i.Transitions.createTransition(i.Transitions.TransitionAnimation.None), e, !0) : i.Navigation.navigateTo(i.Navigation.generateScreenURL("uae", "source-of-wealth", {}), i.Transitions.createTransition(i.Transitions.TransitionAnimation.None), e, !0)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__nextStep$Action
        }
        set _nextStep$Action(e) {
            this.__nextStep$Action = e
        }
        get _stopOnboardingOnContinue$Action() {
            return this.hasOwnProperty("__stopOnboardingOnContinue$Action") || (this.__stopOnboardingOnContinue$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return i.Logger.startActiveSpan("StopOnboardingOnContinue", function(r) {
                    r && (r.setAttribute("code.function", "StopOnboardingOnContinue"), r.setAttribute("outsystems.function.key", "f6f64c12-7520-4d10-ac2f-3cdb4487002b"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        if (t.ensureControllerAlive("StopOnboardingOnContinue"), e = t.callContext(e), n.variables.isStandAloneIn) return i.Navigation.navigateBack(null, e, !0);
                        n.variables.shouldStopOnboardingVar = !n.variables.shouldStopOnboardingVar
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__stopOnboardingOnContinue$Action
        }
        set _stopOnboardingOnContinue$Action(e) {
            this.__stopOnboardingOnContinue$Action = e
        }
        onSelectSourceOfIncome$Action(e, n) {
            var t = this.controller;
            return i.Logger.startActiveSpan("OnSelectSourceOfIncome__proxy", function(o) {
                o && (o.setAttribute("code.function", "OnSelectSourceOfIncome"), o.setAttribute("outsystems.function.key", "73064559-325c-479c-b98d-0ad963911411"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onSelectSourceOfIncome$Action, n, e)
                } finally {
                    o && o.end()
                }
            }, 0)
        }
        onClickPrevious$Action(e) {
            var n = this.controller;
            return i.Logger.startActiveSpan("OnClickPrevious__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnClickPrevious"), t.setAttribute("outsystems.function.key", "a0073c5e-d930-4694-8981-088750d17d17"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onClickPrevious$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var n = this.controller;
            return i.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "a93db27b-ed73-4636-9e7b-7968fd3f1d7a"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onReady$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onInitialize$Action(e) {
            var n = this.controller;
            return i.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "e2aa9a1a-4e9b-49f8-b601-ea71de235aab"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onInitialize$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        nextStep$Action(e) {
            var n = this.controller;
            return i.Logger.startActiveSpan("NextStep__proxy", function(t) {
                t && (t.setAttribute("code.function", "NextStep"), t.setAttribute("outsystems.function.key", "e5637475-b1ec-47f5-a254-5dfc51b1f0c1"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._nextStep$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        stopOnboardingOnContinue$Action(e) {
            var n = this.controller;
            return i.Logger.startActiveSpan("StopOnboardingOnContinue__proxy", function(t) {
                t && (t.setAttribute("code.function", "StopOnboardingOnContinue"), t.setAttribute("outsystems.function.key", "f6f64c12-7520-4d10-ac2f-3cdb4487002b"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._stopOnboardingOnContinue$Action, e)
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
                return H.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return A.defaultTimeout
        }
    };
    a(s, "ControllerInner");
    let y = s;
    D = y, D.registerVariableGroupType("uae.OnboardingFlow.SourceOfIncome.OnSelectSourceOfIncome$vars", [{
        name: "selected_source_of_income",
        attrName: "selected_source_of_incomeInLocal",
        mandatory: !0,
        dataType: i.DataTypes.DataTypes.Text,
        defaultValue: a(function() {
            return ""
        }, "defaultValue")
    }])
}
var D, L = new i.Controller.ControllerFactory(D, K);
var l = se(ce());
var v = h,
    B = class B extends v.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("source_of_income_list", "source_of_income_listVar", "source_of_income_list", !0, !1, v.DataTypes.DataTypes.RecordList, function() {
                return v.DataTypes.ImmutableBase.getData(new v.DataTypes.TextList)
            }, !1, v.DataTypes.TextList), this.attr("ShouldStopOnboarding", "shouldStopOnboardingVar", "ShouldStopOnboarding", !0, !1, v.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("isStandAlone", "isStandAloneIn", "isStandAlone", !0, !1, v.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isStandAloneInDataFetchStatus", "_isStandAloneInDataFetchStatus", "_isStandAloneInDataFetchStatus", !0, !1, v.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(v.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(B, "VariablesRecord");
var p = B;
p.init();
var z = class z extends v.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(z, "WidgetsRecord");
var F = z,
    b = class b extends v.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return p
        }
        static getWidgetsRecordConstructor() {
            return F
        }
        static get hasValidationWidgets() {
            return b._hasValidationWidgetsValue === void 0 && (b._hasValidationWidgetsValue = void 0 || void 0), b._hasValidationWidgetsValue
        }
        setInputs(s) {
            "isStandAlone" in s && (this.variables.isStandAloneIn = v.DataConversion.ServerDataConverter.from(s.isStandAlone, v.DataTypes.DataTypes.Boolean))
        }
    };
a(b, "Model");
var C = b;
C._hasValidationWidgetsValue = void 0;
var W = new v.Model.ModelFactory(C);
var E = T.PlaceholderContent,
    de = T.IteratorPlaceholderContent,
    fe = a(function() {
        var y = Q(function(s) {
            var f = s.model,
                e = s.controller,
                n = s.controller.idService,
                t = e.validationService,
                o = e.callContext(),
                r = R,
                m = N,
                S = {
                    props: s,
                    validateWidget: a(function(u) {
                        s.validateWidget(s, u)
                    }, "validateWidget")
                },
                c = f,
                M = q,
                U = Z,
                O = J();
            return l.createElement("div", s.rootNodeProperties, l.createElement(k, {
                getOwnerSpan: a(function() {
                    return O.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return O.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ShouldEmitPreviousEvent: !0,
                    Title: I.resolve(w.TranslationsService).getMessage("ZEHbH8BmI0ak7Q1fiNOoNA#Value.-1037113639.1", "Financial assessment"),
                    ProgressBarPercentage: 66,
                    shouldShowProgressBarInMobile: !0
                },
                events: {
                    _handleError: a(function(u) {
                        e.handleError(u)
                    }, "_handleError"),
                    onClickPrevious$Action: a(function() {
                        var u = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                        e.onClickPrevious$Action(e.callContext(u))
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
                _widgetRecordProvider: c,
                placeholders: {
                    content: new E(function() {
                        return [l.createElement(g, {
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
                            _widgetRecordProvider: c
                        }, l.createElement(V, {
                            extendedProperties: {
                                style: "font-size: 24px; font-style: normal; font-weight: 900; line-height: normal;"
                            },
                            style: "margin-bottom-base",
                            text: [U(m("8EvA+lPw50iACxbnkFVnjg#Value", "Your source of income"))],
                            _idProps: {
                                service: n,
                                uuid: "2"
                            },
                            _widgetRecordProvider: c
                        }), l.createElement(g, {
                            align: 0,
                            animate: !1,
                            style: "mb-6",
                            visible: !0,
                            _idProps: {
                                service: n,
                                name: "SourceOfIncomeSelectionContainer"
                            },
                            _widgetRecordProvider: c
                        }, M(f.variables.source_of_income_listVar.length < 1, !1, this, function() {
                            return [l.createElement(g, {
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
                                _widgetRecordProvider: c
                            }, l.createElement(g, {
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
                                _widgetRecordProvider: c
                            }), l.createElement(g, {
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
                                _widgetRecordProvider: c
                            }), l.createElement(g, {
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
                                _widgetRecordProvider: c
                            }), l.createElement(g, {
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
                                _widgetRecordProvider: c
                            }))]
                        }, function() {
                            return [l.createElement(ee, {
                                animateItems: !0,
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                mode: 0,
                                source: f.variables.source_of_income_listVar,
                                style: "currency list-container list list-group",
                                tag: "div",
                                _idProps: {
                                    service: n,
                                    name: "CurrencyListContainer2"
                                },
                                _widgetRecordProvider: c,
                                placeholders: {
                                    content: new de(function(u, _) {
                                        return [l.createElement(te, {
                                            extendedProperties: {
                                                style: "border: 1px solid rgba(0, 0, 0, 0.04);"
                                            },
                                            onClick: a(function() {
                                                var ae = typeof _ != "undefined" && _ !== null ? _.clone() : e.callContext().clone();
                                                e.onSelectSourceOfIncome$Action(f.variables.source_of_income_listVar.getCurrent(_.iterationContext), e.callContext(ae))
                                            }, "onClick"),
                                            style: f.getCachedValue(u.getId("ListItem1.Style"), function() {
                                                return f.variables.source_of_income_listVar.getCurrent(_.iterationContext) === d.getsource_of_income() ? "currency list-item item-selected" : "currency list-item"
                                            }, function() {
                                                return f.variables.source_of_income_listVar.getCurrent(_.iterationContext)
                                            }, function() {
                                                return d.getsource_of_income()
                                            }),
                                            triggerActionOnFullSwipeLeft: !0,
                                            triggerActionOnFullSwipeRight: !0,
                                            _idProps: {
                                                service: u,
                                                name: "ListItem1"
                                            },
                                            _widgetRecordProvider: c,
                                            placeholders: {
                                                leftActions: E.Empty,
                                                content: new E(function() {
                                                    return [l.createElement(g, {
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
                                                            service: u,
                                                            uuid: "11"
                                                        },
                                                        _widgetRecordProvider: c
                                                    }, l.createElement(X, {
                                                        value: f.getCachedValue(u.getId("aB2palkscUi+f+UwEq9dzg.Value"), function() {
                                                            return A.translate$Action(f.variables.source_of_income_listVar.getCurrent(_.iterationContext), _).translatedTextOut
                                                        }, function() {
                                                            return f.variables.source_of_income_listVar.getCurrent(_.iterationContext)
                                                        }),
                                                        _idProps: {
                                                            service: u,
                                                            uuid: "12"
                                                        },
                                                        _widgetRecordProvider: c
                                                    }), l.createElement(g, {
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
                                                            service: u,
                                                            uuid: "13"
                                                        },
                                                        _widgetRecordProvider: c
                                                    }, M(f.variables.source_of_income_listVar.getCurrent(_.iterationContext) === d.getsource_of_income(), !1, this, function() {
                                                        return [l.createElement(ne, {
                                                            image: G.VersionedURL.getVersionedUrl("img/uae.circlecheck.svg"),
                                                            type: 0,
                                                            _idProps: {
                                                                service: u,
                                                                uuid: "14"
                                                            },
                                                            _widgetRecordProvider: c
                                                        })]
                                                    }, function() {
                                                        return []
                                                    })))]
                                                }),
                                                rightActions: E.Empty
                                            },
                                            _dependencies: [r(d.getsource_of_income()), r(f.variables.source_of_income_listVar.getCurrent(_.iterationContext))]
                                        })]
                                    }, o, n, "1")
                                },
                                _dependencies: [r(d.getsource_of_income())]
                            })]
                        })), l.createElement(g, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "background: white; margin-top: 24px; text-align: right;"
                            },
                            style: f.getCachedValue(n.getId("ButtonContainer.Style"), function() {
                                return x.isDesktop$Action(o).isDesktopOut ? "flex justify-content-flex-end" : "fixed bottom-0 left-0 w-full flex justify-center p-4"
                            }),
                            visible: !0,
                            _idProps: {
                                service: n,
                                name: "ButtonContainer"
                            },
                            _widgetRecordProvider: c
                        }, l.createElement(Y, {
                            enabled: f.getCachedValue(n.getId("NextButton3.Enabled"), function() {
                                return d.getsource_of_income() !== j.nullTextIdentifier()
                            }, function() {
                                return d.getsource_of_income()
                            }),
                            extendedProperties: {
                                style: "border-radius: 24px;"
                            },
                            gridProperties: {
                                width: "96px"
                            },
                            isDefault: !1,
                            onClick: a(function() {
                                var u = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                                e.nextStep$Action(e.callContext(u))
                            }, "onClick"),
                            style: f.getCachedValue(n.getId("NextButton3.Style"), function() {
                                return x.isDesktop$Action(o).isDesktopOut ? "btn btn-primary" : "btn btn-primary action-button"
                            }),
                            visible: !0,
                            _idProps: {
                                service: n,
                                name: "NextButton3"
                            },
                            _widgetRecordProvider: c
                        }, l.createElement(V, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: bold;"
                            },
                            text: [U(m("sCmF2yIgF0iIDGpP0Dps6Q#Value", "Next"))],
                            _idProps: {
                                service: n,
                                uuid: "17"
                            },
                            _widgetRecordProvider: c
                        }))))]
                    })
                },
                _dependencies: [r(d.getsource_of_income()), r(f.variables.source_of_income_listVar)]
            }), l.createElement($, {
                getOwnerSpan: a(function() {
                    return O.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return O.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ShouldShow: f.variables.shouldStopOnboardingVar
                },
                events: {
                    _handleError: a(function(u) {
                        e.handleError(u)
                    }, "_handleError"),
                    onContinue$Action: a(function() {
                        var u = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                        e.stopOnboardingOnContinue$Action(e.callContext(u))
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
                _widgetRecordProvider: c,
                _dependencies: []
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: a(function() {
                return {
                    codeFunction: "SourceOfIncome",
                    functionKey: "9ca05929-3e88-48c6-838e-585f1b80a620",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "OnboardingFlow.SourceOfIncome",
            modelFactory: W,
            controllerFactory: L,
            getTitle: a(function(s) {
                var f = s.model,
                    e = s.controller,
                    n = s.controller.idService,
                    t = e.validationService,
                    o = e.callContext(),
                    r = R,
                    m = N,
                    S = {
                        props: s,
                        validateWidget: a(function(c) {
                            s.validateWidget(s, c)
                        }, "validateWidget")
                    };
                return I.resolve(w.TranslationsService).getMessage("KVmgnIg+xkiDjlhfG4CmIA#TitleExpression.1477787015.1", "Source of income | Deriv")
            }, "getTitle")
        });
        return y.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.OnboardingFlow.SourceOfIncome.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, y.getJsDependencies = function() {
            return []
        }, y.getBlocks = function() {
            return [k, $]
        }, y
    }, "componentFactory"),
    me = fe();
export {
    L as controllerModule, W as modelModule, me as viewModule, H as webFlowControllerModule
};