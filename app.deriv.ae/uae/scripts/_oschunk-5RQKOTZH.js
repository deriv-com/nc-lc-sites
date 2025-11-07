import {
    a as D
} from "./_oschunk-NLNJ5SA5.js";
import {
    a as $
} from "./_oschunk-JF3PYARS.js";
import "./_oschunk-6RCCOD74.js";
import "./_oschunk-7SYLUYK7.js";
import {
    a as k
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
    a as le,
    g as T,
    m as j,
    n as Z,
    q,
    r as Q,
    s as R,
    t as N
} from "./_oschunk-4VHUVDBV.js";
import {
    a as J
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    Qb as x,
    Sb as A,
    o as I,
    ub as f
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as S,
    c as a,
    e as se,
    m as w,
    n as P,
    p as G,
    w as K
} from "./_oschunk-M5BUVJ72.js";
var ce = {
        "NxGp7F8_VkyaDDD1kmsFsg#Value": "\u0627\u0644\u062A\u0627\u0644\u064A",
        "rb6TI1fbtUa7q9keCgaFWw#Value": "\u0635\u0627\u0641\u064A \u062F\u062E\u0644\u0643 \u0627\u0644\u0633\u0646\u0648\u064A",
        "T7rdna7pdUy_dBbMGGVTzA#Value.-1037113639.1": "\u0627\u0644\u062A\u0642\u064A\u064A\u0645 \u0627\u0644\u0645\u0627\u0644\u064A.",
        "p8NJy+xD8Ea4ZElKB7Kkfg#Title": "\u0627\u0644\u062F\u062E\u0644 \u0627\u0644\u0633\u0646\u0648\u064A | Deriv",
        "p8NJy+xD8Ea4ZElKB7Kkfg#TitleExpression.-416286460.1": "\u0627\u0644\u062F\u062E\u0644 \u0627\u0644\u0633\u0646\u0648\u064A | Deriv"
    },
    re = {
        "ar-001": {
            translations: ce,
            isRTL: !0
        }
    };
var o = S; {
    let s = class s extends o.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, re);
            var i = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
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
                    t = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("StopOnboardingOnContinue", function(r) {
                    r && (r.setAttribute("code.function", "StopOnboardingOnContinue"), r.setAttribute("outsystems.function.key", "22c6dd9e-1dc6-4b87-bf8d-43a634396769"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        if (t.ensureControllerAlive("StopOnboardingOnContinue"), e = t.callContext(e), n.variables.isStandAloneIn) return o.Navigation.navigateBack(null, e, !0);
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
        get _nextStep$Action() {
            return this.hasOwnProperty("__nextStep$Action") || (this.__nextStep$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("NextStep", function(r) {
                    r && (r.setAttribute("code.function", "NextStep"), r.setAttribute("outsystems.function.key", "2e7e613c-9b6b-4b06-bf90-9b864aa3a168"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("NextStep"), e = t.callContext(e), n.variables.isStandAloneIn ? o.Navigation.navigateBack(o.Transitions.createTransition(o.Transitions.TransitionAnimation.None), e, !0) : o.Navigation.navigateTo(o.Navigation.generateScreenURL("uae", "net-worth", {}), o.Transitions.createTransition(o.Transitions.TransitionAnimation.None), e, !0)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__nextStep$Action
        }
        set _nextStep$Action(e) {
            this.__nextStep$Action = e
        }
        get _onClickPrevious$Action() {
            return this.hasOwnProperty("__onClickPrevious$Action") || (this.__onClickPrevious$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("OnClickPrevious", function(r) {
                    r && (r.setAttribute("code.function", "OnClickPrevious"), r.setAttribute("outsystems.function.key", "770c6d4f-22f0-4ad9-845b-b47e117bd160"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("OnClickPrevious"), e = t.callContext(e), o.Navigation.navigateTo(o.Navigation.generateScreenURL("uae", "source-of-wealth", {}), o.Transitions.createTransition(o.Transitions.TransitionAnimation.None), e, !0)
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
                    i = this.idService;
                return o.Logger.startActiveSpan("OnReady", function(r) {
                    r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "7beb37e4-11c9-4b10-bd40-ea7d04e3c1ee"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var m = new o.DataTypes.VariableHolder,
                            b = new o.DataTypes.VariableHolder(new(o.Controller.BaseController.getJSONDeserializeOutputType(I)));
                        m.value = A.getFinancialAssessmentConfigCache$Action("net_annual_income", e), n.variables.annual_income2Var = m.value.configValueOut, f.getannual_income() === o.BuiltinFunctions.nullTextIdentifier() && f.getgetTaxAPIResponse() !== o.BuiltinFunctions.nullTextIdentifier() && (b.value.dataOut = o.JSONUtils.deserializeFromJSON(f.getgetTaxAPIResponse(), I, !1), f.setannual_income(b.value.dataOut.financial_assessmentAttr.net_annual_incomeAttr))
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
                    i = this.idService;
                return o.Logger.startActiveSpan("OnInitialize", function(r) {
                    r && (r.setAttribute("code.function", "OnInitialize"), r.setAttribute("outsystems.function.key", "8e2860f4-2508-45fb-ae58-d03361ab28b0"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e), f.setRealSignupCurrentStep(4)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        get _onSelectAnnualIncome$Action() {
            return this.hasOwnProperty("__onSelectAnnualIncome$Action") || (this.__onSelectAnnualIncome$Action = function(e, n) {
                var t = this.model,
                    i = this.controller,
                    r = this.idService;
                return o.Logger.startActiveSpan("OnSelectAnnualIncome", function(m) {
                    m && (m.setAttribute("code.function", "OnSelectAnnualIncome"), m.setAttribute("outsystems.function.key", "cf374e78-fe00-4345-b910-eb551a5487ce"), m.setAttribute("outsystems.function.owner.name", "uae"), m.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), m.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("OnSelectAnnualIncome"), n = i.callContext(n);
                        var b = new o.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("uae.OnboardingFlow.AnnualIncome.OnSelectAnnualIncome$vars")));
                        b.value.annual_incomeInLocal = e, f.setannual_income(b.value.annual_incomeInLocal)
                    } finally {
                        m && m.end()
                    }
                }, 1)
            }), this.__onSelectAnnualIncome$Action
        }
        set _onSelectAnnualIncome$Action(e) {
            this.__onSelectAnnualIncome$Action = e
        }
        stopOnboardingOnContinue$Action(e) {
            var n = this.controller;
            return o.Logger.startActiveSpan("StopOnboardingOnContinue__proxy", function(t) {
                t && (t.setAttribute("code.function", "StopOnboardingOnContinue"), t.setAttribute("outsystems.function.key", "22c6dd9e-1dc6-4b87-bf8d-43a634396769"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._stopOnboardingOnContinue$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        nextStep$Action(e) {
            var n = this.controller;
            return o.Logger.startActiveSpan("NextStep__proxy", function(t) {
                t && (t.setAttribute("code.function", "NextStep"), t.setAttribute("outsystems.function.key", "2e7e613c-9b6b-4b06-bf90-9b864aa3a168"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._nextStep$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onClickPrevious$Action(e) {
            var n = this.controller;
            return o.Logger.startActiveSpan("OnClickPrevious__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnClickPrevious"), t.setAttribute("outsystems.function.key", "770c6d4f-22f0-4ad9-845b-b47e117bd160"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onClickPrevious$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var n = this.controller;
            return o.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "7beb37e4-11c9-4b10-bd40-ea7d04e3c1ee"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onReady$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onInitialize$Action(e) {
            var n = this.controller;
            return o.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "8e2860f4-2508-45fb-ae58-d03361ab28b0"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onInitialize$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onSelectAnnualIncome$Action(e, n) {
            var t = this.controller;
            return o.Logger.startActiveSpan("OnSelectAnnualIncome__proxy", function(i) {
                i && (i.setAttribute("code.function", "OnSelectAnnualIncome"), i.setAttribute("outsystems.function.key", "cf374e78-fe00-4345-b910-eb551a5487ce"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onSelectAnnualIncome$Action, n, e)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var n = this.controller,
                    t = this.model,
                    i = this.idService;
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
                    i = this.idService;
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
            return A.defaultTimeout
        }
    };
    a(s, "ControllerInner");
    let _ = s;
    H = _, H.registerVariableGroupType("uae.OnboardingFlow.AnnualIncome.OnSelectAnnualIncome$vars", [{
        name: "annual_income",
        attrName: "annual_incomeInLocal",
        mandatory: !0,
        dataType: o.DataTypes.DataTypes.Text,
        defaultValue: a(function() {
            return ""
        }, "defaultValue")
    }])
}
var H, L = new o.Controller.ControllerFactory(H, J);
var c = se(le());
var v = S,
    B = class B extends v.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("annual_income2", "annual_income2Var", "annual_income2", !0, !1, v.DataTypes.DataTypes.RecordList, function() {
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
var O = B;
O.init();
var z = class z extends v.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(z, "WidgetsRecord");
var F = z,
    h = class h extends v.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return O
        }
        static getWidgetsRecordConstructor() {
            return F
        }
        static get hasValidationWidgets() {
            return h._hasValidationWidgetsValue === void 0 && (h._hasValidationWidgetsValue = void 0 || void 0), h._hasValidationWidgetsValue
        }
        setInputs(s) {
            "isStandAlone" in s && (this.variables.isStandAloneIn = v.DataConversion.ServerDataConverter.from(s.isStandAlone, v.DataTypes.DataTypes.Boolean))
        }
    };
a(h, "Model");
var C = h;
C._hasValidationWidgetsValue = void 0;
var W = new v.Model.ModelFactory(C);
var E = T.PlaceholderContent,
    de = T.IteratorPlaceholderContent,
    fe = a(function() {
        var _ = Z(function(s) {
            var d = s.model,
                e = s.controller,
                n = s.controller.idService,
                t = e.validationService,
                i = e.callContext(),
                r = R,
                m = N,
                b = {
                    props: s,
                    validateWidget: a(function(u) {
                        s.validateWidget(s, u)
                    }, "validateWidget")
                },
                l = d,
                M = Q,
                U = q,
                p = j();
            return c.createElement("div", s.rootNodeProperties, c.createElement($, {
                getOwnerSpan: a(function() {
                    return p.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return p.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ShouldEmitPreviousEvent: !0,
                    shouldShowProgressBarInMobile: !0,
                    Title: w.resolve(P.TranslationsService).getMessage("T7rdna7pdUy_dBbMGGVTzA#Value.-1037113639.1", "Financial assessment"),
                    ProgressBarPercentage: 66
                },
                events: {
                    _handleError: a(function(u) {
                        e.handleError(u)
                    }, "_handleError"),
                    onClickPrevious$Action: a(function() {
                        var u = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
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
                _widgetRecordProvider: l,
                placeholders: {
                    content: new E(function() {
                        return [c.createElement(g, {
                            align: 0,
                            animate: !1,
                            style: "flex flex-col",
                            visible: !0,
                            _idProps: {
                                service: n,
                                uuid: "1"
                            },
                            _widgetRecordProvider: l
                        }, c.createElement(V, {
                            extendedProperties: {
                                style: "font-size: 24px; font-style: normal; font-weight: 900; line-height: normal;"
                            },
                            style: "margin-bottom-base",
                            text: [U(m("rb6TI1fbtUa7q9keCgaFWw#Value", "Your net annual income"))],
                            _idProps: {
                                service: n,
                                uuid: "2"
                            },
                            _widgetRecordProvider: l
                        }), c.createElement(g, {
                            align: 0,
                            animate: !1,
                            style: "mb-6",
                            visible: !0,
                            _idProps: {
                                service: n,
                                name: "SourceOfIncomeSelectionContainer"
                            },
                            _widgetRecordProvider: l
                        }, M(d.variables.annual_income2Var.length < 1, !1, this, function() {
                            return [c.createElement(g, {
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
                            }, c.createElement(g, {
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
                            }), c.createElement(g, {
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
                            }), c.createElement(g, {
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
                            }), c.createElement(g, {
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
                            return [c.createElement(ee, {
                                animateItems: !0,
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                mode: 0,
                                source: d.variables.annual_income2Var,
                                style: "currency list-container list list-group",
                                tag: "div",
                                _idProps: {
                                    service: n,
                                    name: "CurrencyListContainer2"
                                },
                                _widgetRecordProvider: l,
                                placeholders: {
                                    content: new de(function(u, y) {
                                        return [c.createElement(te, {
                                            extendedProperties: {
                                                style: "border: 1px solid rgba(0, 0, 0, 0.04);"
                                            },
                                            onClick: a(function() {
                                                var ae = typeof y != "undefined" && y !== null ? y.clone() : e.callContext().clone();
                                                e.onSelectAnnualIncome$Action(d.variables.annual_income2Var.getCurrent(y.iterationContext), e.callContext(ae))
                                            }, "onClick"),
                                            style: d.getCachedValue(u.getId("ListItem1.Style"), function() {
                                                return d.variables.annual_income2Var.getCurrent(y.iterationContext) === f.getannual_income() ? "currency list-item item-selected" : "currency list-item"
                                            }, function() {
                                                return d.variables.annual_income2Var.getCurrent(y.iterationContext)
                                            }, function() {
                                                return f.getannual_income()
                                            }),
                                            triggerActionOnFullSwipeLeft: !0,
                                            triggerActionOnFullSwipeRight: !0,
                                            _idProps: {
                                                service: u,
                                                name: "ListItem1"
                                            },
                                            _widgetRecordProvider: l,
                                            placeholders: {
                                                leftActions: E.Empty,
                                                content: new E(function() {
                                                    return [c.createElement(g, {
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
                                                        _widgetRecordProvider: l
                                                    }, c.createElement(X, {
                                                        value: d.getCachedValue(u.getId("QBny50ZAVkuLPymcKSfUqw.Value"), function() {
                                                            return A.translate$Action(d.variables.annual_income2Var.getCurrent(y.iterationContext), y).translatedTextOut
                                                        }, function() {
                                                            return d.variables.annual_income2Var.getCurrent(y.iterationContext)
                                                        }),
                                                        _idProps: {
                                                            service: u,
                                                            uuid: "12"
                                                        },
                                                        _widgetRecordProvider: l
                                                    }), c.createElement(g, {
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
                                                        _widgetRecordProvider: l
                                                    }, M(d.variables.annual_income2Var.getCurrent(y.iterationContext) === f.getannual_income(), !1, this, function() {
                                                        return [c.createElement(ne, {
                                                            image: G.VersionedURL.getVersionedUrl("img/uae.circlecheck.svg"),
                                                            type: 0,
                                                            _idProps: {
                                                                service: u,
                                                                uuid: "14"
                                                            },
                                                            _widgetRecordProvider: l
                                                        })]
                                                    }, function() {
                                                        return []
                                                    })))]
                                                }),
                                                rightActions: E.Empty
                                            },
                                            _dependencies: [r(f.getannual_income()), r(d.variables.annual_income2Var.getCurrent(y.iterationContext))]
                                        })]
                                    }, i, n, "1")
                                },
                                _dependencies: [r(f.getannual_income())]
                            })]
                        })), c.createElement(g, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-top: 24px; text-align: right;"
                            },
                            style: d.getCachedValue(n.getId("ButtonContainer.Style"), function() {
                                return x.isDesktop$Action(i).isDesktopOut ? "flex justify-content-flex-end" : "fixed bottom-0 left-0 w-full flex justify-center p-4"
                            }),
                            visible: !0,
                            _idProps: {
                                service: n,
                                name: "ButtonContainer"
                            },
                            _widgetRecordProvider: l
                        }, c.createElement(Y, {
                            enabled: d.getCachedValue(n.getId("NextButton3.Enabled"), function() {
                                return f.getannual_income() !== K.nullTextIdentifier()
                            }, function() {
                                return f.getannual_income()
                            }),
                            extendedProperties: {
                                style: "border-radius: 24px;"
                            },
                            gridProperties: {
                                width: "96px"
                            },
                            isDefault: !1,
                            onClick: a(function() {
                                var u = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                                e.nextStep$Action(e.callContext(u))
                            }, "onClick"),
                            style: d.getCachedValue(n.getId("NextButton3.Style"), function() {
                                return x.isDesktop$Action(i).isDesktopOut ? "btn btn-primary" : "btn btn-primary action-button"
                            }),
                            visible: !0,
                            _idProps: {
                                service: n,
                                name: "NextButton3"
                            },
                            _widgetRecordProvider: l
                        }, c.createElement(V, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: bold;"
                            },
                            text: [U(m("NxGp7F8_VkyaDDD1kmsFsg#Value", "Next"))],
                            _idProps: {
                                service: n,
                                uuid: "17"
                            },
                            _widgetRecordProvider: l
                        }))))]
                    })
                },
                _dependencies: [r(f.getannual_income()), r(d.variables.annual_income2Var)]
            }), c.createElement(k, {
                getOwnerSpan: a(function() {
                    return p.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return p.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ShouldShow: d.variables.shouldStopOnboardingVar
                },
                events: {
                    _handleError: a(function(u) {
                        e.handleError(u)
                    }, "_handleError"),
                    onContinue$Action: a(function() {
                        var u = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
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
                _widgetRecordProvider: l,
                _dependencies: []
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: a(function() {
                return {
                    codeFunction: "AnnualIncome",
                    functionKey: "cb49c3a7-43ec-46f0-b864-494a07b2a47e",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "OnboardingFlow.AnnualIncome",
            modelFactory: W,
            controllerFactory: L,
            getTitle: a(function(s) {
                var d = s.model,
                    e = s.controller,
                    n = s.controller.idService,
                    t = e.validationService,
                    i = e.callContext(),
                    r = R,
                    m = N,
                    b = {
                        props: s,
                        validateWidget: a(function(l) {
                            s.validateWidget(s, l)
                        }, "validateWidget")
                    };
                return w.resolve(P.TranslationsService).getMessage("p8NJy+xD8Ea4ZElKB7Kkfg#TitleExpression.-416286460.1", "Annual income | Deriv")
            }, "getTitle")
        });
        return _.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.OnboardingFlow.AnnualIncome.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, _.getJsDependencies = function() {
            return []
        }, _.getBlocks = function() {
            return [$, k]
        }, _
    }, "componentFactory"),
    me = fe();
export {
    L as controllerModule, W as modelModule, me as viewModule, D as webFlowControllerModule
};