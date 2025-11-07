import {
    a as L
} from "./_oschunk-NLNJ5SA5.js";
import {
    a as H
} from "./_oschunk-JF3PYARS.js";
import "./_oschunk-6RCCOD74.js";
import "./_oschunk-7SYLUYK7.js";
import {
    a as $
} from "./_oschunk-UZGD3HJ2.js";
import "./_oschunk-L6JZD7VU.js";
import "./_oschunk-YVFTECWM.js";
import {
    b as X,
    f as h,
    h as Z,
    i as ee,
    j as te,
    n as ne,
    u as V
} from "./_oschunk-VR5BNL2K.js";
import {
    a as le,
    g as I,
    m as J,
    n as Q,
    q as Y,
    r as q,
    s as T,
    t as N
} from "./_oschunk-4VHUVDBV.js";
import {
    a as j
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    Qb as R,
    Sb as O,
    o as x,
    ub as f
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as b,
    c as a,
    e as se,
    m as E,
    n as P,
    p as K,
    w as G
} from "./_oschunk-M5BUVJ72.js";
var ce = {
        "j6KdGfDm9EKLf55Ao5mQTQ#Value": "\u0627\u0644\u062A\u0627\u0644\u064A",
        "SrK05eYvr0ChGOeLIdRang#Value": "\u0645\u0635\u062F\u0631 \u062B\u0631\u0648\u062A\u0643",
        "6KHIjEb350q4SUy8c5S_Hg#Value.-1037113639.1": "\u0627\u0644\u062A\u0642\u064A\u064A\u0645 \u0627\u0644\u0645\u0627\u0644\u064A.",
        "4pEHRSJw2U6UY2_VbgOwhQ#Title": "\u0645\u0635\u062F\u0631 \u0627\u0644\u062B\u0631\u0648\u0629 | Deriv",
        "4pEHRSJw2U6UY2_VbgOwhQ#TitleExpression.-329708661.1": "\u0645\u0635\u062F\u0631 \u0627\u0644\u062B\u0631\u0648\u0629 | Deriv"
    },
    re = {
        "ar-001": {
            translations: ce,
            isRTL: !0
        }
    };
var o = b; {
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
        get _onSelectSourceOfWealth$Action() {
            return this.hasOwnProperty("__onSelectSourceOfWealth$Action") || (this.__onSelectSourceOfWealth$Action = function(e, n) {
                var t = this.model,
                    i = this.controller,
                    r = this.idService;
                return o.Logger.startActiveSpan("OnSelectSourceOfWealth", function(v) {
                    v && (v.setAttribute("code.function", "OnSelectSourceOfWealth"), v.setAttribute("outsystems.function.key", "0e61894f-3cd2-4658-b658-5dd7765e6234"), v.setAttribute("outsystems.function.owner.name", "uae"), v.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), v.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("OnSelectSourceOfWealth"), n = i.callContext(n);
                        var y = new o.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("uae.OnboardingFlow.SourceOfWealth.OnSelectSourceOfWealth$vars")));
                        y.value.selected_source_of_wealthInLocal = e, f.setsource_of_wealth(y.value.selected_source_of_wealthInLocal)
                    } finally {
                        v && v.end()
                    }
                }, 1)
            }), this.__onSelectSourceOfWealth$Action
        }
        set _onSelectSourceOfWealth$Action(e) {
            this.__onSelectSourceOfWealth$Action = e
        }
        get _stopOnboardingOnContinue$Action() {
            return this.hasOwnProperty("__stopOnboardingOnContinue$Action") || (this.__stopOnboardingOnContinue$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("StopOnboardingOnContinue", function(r) {
                    r && (r.setAttribute("code.function", "StopOnboardingOnContinue"), r.setAttribute("outsystems.function.key", "44e1c2ab-3287-4a31-bf2a-6370824ec28a"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
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
                    r && (r.setAttribute("code.function", "NextStep"), r.setAttribute("outsystems.function.key", "5752b5ee-fc1e-40b4-983d-0a3eed4aae13"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("NextStep"), e = t.callContext(e), n.variables.isStandAloneIn ? o.Navigation.navigateBack(o.Transitions.createTransition(o.Transitions.TransitionAnimation.None), e, !0) : o.Navigation.navigateTo(o.Navigation.generateScreenURL("uae", "net-annual-income", {}), o.Transitions.createTransition(o.Transitions.TransitionAnimation.None), e, !0)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__nextStep$Action
        }
        set _nextStep$Action(e) {
            this.__nextStep$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("OnReady", function(r) {
                    r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "b59bd5b0-79fe-4108-bbfa-cc56f6c16538"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var v = new o.DataTypes.VariableHolder,
                            y = new o.DataTypes.VariableHolder(new(o.Controller.BaseController.getJSONDeserializeOutputType(x)));
                        v.value = O.getFinancialAssessmentConfigCache$Action("source_of_wealth", e), n.variables.source_of_wealth_listVar = v.value.configValueOut, f.getsource_of_wealth() === o.BuiltinFunctions.nullTextIdentifier() && f.getgetTaxAPIResponse() !== o.BuiltinFunctions.nullTextIdentifier() && (y.value.dataOut = o.JSONUtils.deserializeFromJSON(f.getgetTaxAPIResponse(), x, !1), f.setsource_of_wealth(y.value.dataOut.financial_assessmentAttr.source_of_wealthAttr))
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _onClickPrevious$Action() {
            return this.hasOwnProperty("__onClickPrevious$Action") || (this.__onClickPrevious$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("OnClickPrevious", function(r) {
                    r && (r.setAttribute("code.function", "OnClickPrevious"), r.setAttribute("outsystems.function.key", "c0e60679-5a26-4693-bd9c-452c5028fec9"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("OnClickPrevious"), e = t.callContext(e), o.Navigation.navigateTo(o.Navigation.generateScreenURL("uae", "source-of-income", {}), o.Transitions.createTransition(o.Transitions.TransitionAnimation.None), e, !0)
                    } finally {
                        r && r.end()
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
                    i = this.idService;
                return o.Logger.startActiveSpan("OnInitialize", function(r) {
                    r && (r.setAttribute("code.function", "OnInitialize"), r.setAttribute("outsystems.function.key", "d7af56d6-a2b6-43ab-b0f4-8dfbd8ba68bd"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
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
        onSelectSourceOfWealth$Action(e, n) {
            var t = this.controller;
            return o.Logger.startActiveSpan("OnSelectSourceOfWealth__proxy", function(i) {
                i && (i.setAttribute("code.function", "OnSelectSourceOfWealth"), i.setAttribute("outsystems.function.key", "0e61894f-3cd2-4658-b658-5dd7765e6234"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onSelectSourceOfWealth$Action, n, e)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        stopOnboardingOnContinue$Action(e) {
            var n = this.controller;
            return o.Logger.startActiveSpan("StopOnboardingOnContinue__proxy", function(t) {
                t && (t.setAttribute("code.function", "StopOnboardingOnContinue"), t.setAttribute("outsystems.function.key", "44e1c2ab-3287-4a31-bf2a-6370824ec28a"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
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
                t && (t.setAttribute("code.function", "NextStep"), t.setAttribute("outsystems.function.key", "5752b5ee-fc1e-40b4-983d-0a3eed4aae13"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._nextStep$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var n = this.controller;
            return o.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "b59bd5b0-79fe-4108-bbfa-cc56f6c16538"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onReady$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onClickPrevious$Action(e) {
            var n = this.controller;
            return o.Logger.startActiveSpan("OnClickPrevious__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnClickPrevious"), t.setAttribute("outsystems.function.key", "c0e60679-5a26-4693-bd9c-452c5028fec9"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onClickPrevious$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onInitialize$Action(e) {
            var n = this.controller;
            return o.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "d7af56d6-a2b6-43ab-b0f4-8dfbd8ba68bd"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onInitialize$Action, e)
                } finally {
                    t && t.end()
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
                return L.default.handleError(e, this.callContext())
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
    a(s, "ControllerInner");
    let g = s;
    W = g, W.registerVariableGroupType("uae.OnboardingFlow.SourceOfWealth.OnSelectSourceOfWealth$vars", [{
        name: "selected_source_of_wealth",
        attrName: "selected_source_of_wealthInLocal",
        mandatory: !0,
        dataType: o.DataTypes.DataTypes.Text,
        defaultValue: a(function() {
            return ""
        }, "defaultValue")
    }])
}
var W, k = new o.Controller.ControllerFactory(W, j);
var c = se(le());
var _ = b,
    z = class z extends _.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("source_of_wealth_list", "source_of_wealth_listVar", "source_of_wealth_list", !0, !1, _.DataTypes.DataTypes.RecordList, function() {
                return _.DataTypes.ImmutableBase.getData(new _.DataTypes.TextList)
            }, !1, _.DataTypes.TextList), this.attr("ShouldStopOnboarding", "shouldStopOnboardingVar", "ShouldStopOnboarding", !0, !1, _.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("isStandAlone", "isStandAloneIn", "isStandAlone", !0, !1, _.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isStandAloneInDataFetchStatus", "_isStandAloneInDataFetchStatus", "_isStandAloneInDataFetchStatus", !0, !1, _.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(_.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(z, "VariablesRecord");
var p = z;
p.init();
var B = class B extends _.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(B, "WidgetsRecord");
var D = B,
    S = class S extends _.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return p
        }
        static getWidgetsRecordConstructor() {
            return D
        }
        static get hasValidationWidgets() {
            return S._hasValidationWidgetsValue === void 0 && (S._hasValidationWidgetsValue = void 0 || void 0), S._hasValidationWidgetsValue
        }
        setInputs(s) {
            "isStandAlone" in s && (this.variables.isStandAloneIn = _.DataConversion.ServerDataConverter.from(s.isStandAlone, _.DataTypes.DataTypes.Boolean))
        }
    };
a(S, "Model");
var C = S;
C._hasValidationWidgetsValue = void 0;
var F = new _.Model.ModelFactory(C);
var w = I.PlaceholderContent,
    de = I.IteratorPlaceholderContent,
    fe = a(function() {
        var g = Q(function(s) {
            var d = s.model,
                e = s.controller,
                n = s.controller.idService,
                t = e.validationService,
                i = e.callContext(),
                r = T,
                v = N,
                y = {
                    props: s,
                    validateWidget: a(function(u) {
                        s.validateWidget(s, u)
                    }, "validateWidget")
                },
                l = d,
                M = q,
                U = Y,
                A = J();
            return c.createElement("div", s.rootNodeProperties, c.createElement(H, {
                getOwnerSpan: a(function() {
                    return A.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return A.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ShouldEmitPreviousEvent: !0,
                    ProgressBarPercentage: 66,
                    Title: E.resolve(P.TranslationsService).getMessage("6KHIjEb350q4SUy8c5S_Hg#Value.-1037113639.1", "Financial assessment"),
                    shouldShowProgressBarInMobile: !0
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
                    content: new w(function() {
                        return [c.createElement(h, {
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
                        }, c.createElement(V, {
                            extendedProperties: {
                                style: "font-size: 24px; font-style: normal; font-weight: 900; line-height: normal;"
                            },
                            style: "margin-bottom-base",
                            text: [U(v("SrK05eYvr0ChGOeLIdRang#Value", "Your source of wealth"))],
                            _idProps: {
                                service: n,
                                uuid: "2"
                            },
                            _widgetRecordProvider: l
                        }), c.createElement(h, {
                            align: 0,
                            animate: !1,
                            style: "mb-6",
                            visible: !0,
                            _idProps: {
                                service: n,
                                name: "SourceOfIncomeSelectionContainer"
                            },
                            _widgetRecordProvider: l
                        }, M(d.variables.source_of_wealth_listVar.length < 1, !1, this, function() {
                            return [c.createElement(h, {
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
                            }, c.createElement(h, {
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
                            }), c.createElement(h, {
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
                            }), c.createElement(h, {
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
                            }), c.createElement(h, {
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
                                source: d.variables.source_of_wealth_listVar,
                                style: "currency list-container list list-group",
                                tag: "div",
                                _idProps: {
                                    service: n,
                                    name: "CurrencyListContainer2"
                                },
                                _widgetRecordProvider: l,
                                placeholders: {
                                    content: new de(function(u, m) {
                                        return [c.createElement(te, {
                                            extendedProperties: {
                                                style: "border: 1px solid rgba(0, 0, 0, 0.04);"
                                            },
                                            onClick: a(function() {
                                                var ae = typeof m != "undefined" && m !== null ? m.clone() : e.callContext().clone();
                                                e.onSelectSourceOfWealth$Action(d.variables.source_of_wealth_listVar.getCurrent(m.iterationContext), e.callContext(ae))
                                            }, "onClick"),
                                            style: d.getCachedValue(u.getId("ListItem1.Style"), function() {
                                                return d.variables.source_of_wealth_listVar.getCurrent(m.iterationContext) === f.getsource_of_wealth() ? "currency list-item item-selected" : "currency list-item"
                                            }, function() {
                                                return d.variables.source_of_wealth_listVar.getCurrent(m.iterationContext)
                                            }, function() {
                                                return f.getsource_of_wealth()
                                            }),
                                            triggerActionOnFullSwipeLeft: !0,
                                            triggerActionOnFullSwipeRight: !0,
                                            _idProps: {
                                                service: u,
                                                name: "ListItem1"
                                            },
                                            _widgetRecordProvider: l,
                                            placeholders: {
                                                leftActions: w.Empty,
                                                content: new w(function() {
                                                    return [c.createElement(h, {
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
                                                    }, c.createElement(Z, {
                                                        value: d.getCachedValue(u.getId("HniqPYOPLk6v8fr8RcLq+w.Value"), function() {
                                                            return O.translate$Action(d.variables.source_of_wealth_listVar.getCurrent(m.iterationContext), m).translatedTextOut
                                                        }, function() {
                                                            return d.variables.source_of_wealth_listVar.getCurrent(m.iterationContext)
                                                        }),
                                                        _idProps: {
                                                            service: u,
                                                            uuid: "12"
                                                        },
                                                        _widgetRecordProvider: l
                                                    }), c.createElement(h, {
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
                                                    }, M(d.variables.source_of_wealth_listVar.getCurrent(m.iterationContext) === f.getsource_of_wealth(), !1, this, function() {
                                                        return [c.createElement(ne, {
                                                            image: K.VersionedURL.getVersionedUrl("img/uae.circlecheck.svg"),
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
                                                rightActions: w.Empty
                                            },
                                            _dependencies: [r(f.getsource_of_wealth()), r(d.variables.source_of_wealth_listVar.getCurrent(m.iterationContext))]
                                        })]
                                    }, i, n, "1")
                                },
                                _dependencies: [r(f.getsource_of_wealth())]
                            })]
                        })), c.createElement(h, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "background: white; margin-top: 24px; text-align: right;"
                            },
                            style: d.getCachedValue(n.getId("ButtonContainer.Style"), function() {
                                return R.isDesktop$Action(i).isDesktopOut ? "flex justify-content-flex-end" : "fixed bottom-0 left-0 w-full flex justify-center p-4"
                            }),
                            visible: !0,
                            _idProps: {
                                service: n,
                                name: "ButtonContainer"
                            },
                            _widgetRecordProvider: l
                        }, c.createElement(X, {
                            enabled: d.getCachedValue(n.getId("NextButton3.Enabled"), function() {
                                return f.getsource_of_wealth() !== G.nullTextIdentifier()
                            }, function() {
                                return f.getsource_of_wealth()
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
                                return R.isDesktop$Action(i).isDesktopOut ? "btn btn-primary" : "btn btn-primary action-button"
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
                            text: [U(v("j6KdGfDm9EKLf55Ao5mQTQ#Value", "Next"))],
                            _idProps: {
                                service: n,
                                uuid: "17"
                            },
                            _widgetRecordProvider: l
                        }))))]
                    })
                },
                _dependencies: [r(f.getsource_of_wealth()), r(d.variables.source_of_wealth_listVar)]
            }), c.createElement($, {
                getOwnerSpan: a(function() {
                    return A.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return A.getChildSpan("destroy")
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
                    codeFunction: "SourceOfWealth",
                    functionKey: "450791e2-7022-4ed9-9463-6fd56e03b085",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "OnboardingFlow.SourceOfWealth",
            modelFactory: F,
            controllerFactory: k,
            getTitle: a(function(s) {
                var d = s.model,
                    e = s.controller,
                    n = s.controller.idService,
                    t = e.validationService,
                    i = e.callContext(),
                    r = T,
                    v = N,
                    y = {
                        props: s,
                        validateWidget: a(function(l) {
                            s.validateWidget(s, l)
                        }, "validateWidget")
                    };
                return E.resolve(P.TranslationsService).getMessage("4pEHRSJw2U6UY2_VbgOwhQ#TitleExpression.-329708661.1", "Source of wealth | Deriv")
            }, "getTitle")
        });
        return g.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.OnboardingFlow.SourceOfWealth.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, g.getJsDependencies = function() {
            return []
        }, g.getBlocks = function() {
            return [H, $]
        }, g
    }, "componentFactory"),
    ve = fe();
export {
    k as controllerModule, F as modelModule, ve as viewModule, L as webFlowControllerModule
};