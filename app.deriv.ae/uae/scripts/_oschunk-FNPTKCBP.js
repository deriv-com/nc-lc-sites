import {
    a as k
} from "./_oschunk-NLNJ5SA5.js";
import {
    a as W
} from "./_oschunk-JF3PYARS.js";
import "./_oschunk-6RCCOD74.js";
import "./_oschunk-7SYLUYK7.js";
import {
    a as $
} from "./_oschunk-UZGD3HJ2.js";
import "./_oschunk-L6JZD7VU.js";
import "./_oschunk-YVFTECWM.js";
import {
    b as K,
    f as m,
    h as Q,
    i as ee,
    j as te,
    n as ne,
    u as V
} from "./_oschunk-VR5BNL2K.js";
import {
    a as le,
    g as R,
    m as Z,
    n as j,
    q as Y,
    r as q,
    s as I,
    t as N
} from "./_oschunk-4VHUVDBV.js";
import {
    a as X
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    Qb as T,
    Sb as p,
    o as x,
    ub as f
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as S,
    c as a,
    e as se,
    m as E,
    n as P,
    p as J,
    w as G
} from "./_oschunk-M5BUVJ72.js";
var ce = {
        "MxSpdPRg_EyPGtJTtwwPbg#Value": "\u0627\u0644\u062A\u0627\u0644\u064A",
        "sUg6ZpyOd0uCeAUXZGOmbw#Value": "\u0635\u0627\u0641\u064A \u062B\u0631\u0648\u062A\u0643 \u0627\u0644\u062A\u0642\u062F\u064A\u0631\u064A",
        "F4I0yGaJqkWrudrJE9fSxQ#Value.-1037113639.1": "\u0627\u0644\u062A\u0642\u064A\u064A\u0645 \u0627\u0644\u0645\u0627\u0644\u064A.",
        "0vX8Sr_h8EaJk6tt+TJYTg#Title": "\u0635\u0627\u0641\u064A \u0627\u0644\u062B\u0631\u0648\u0629 | Deriv",
        "0vX8Sr_h8EaJk6tt+TJYTg#TitleExpression.-880707259.1": "\u0635\u0627\u0641\u064A \u0627\u0644\u062B\u0631\u0648\u0629 | Deriv"
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
        get _onSelectNetWorth$Action() {
            return this.hasOwnProperty("__onSelectNetWorth$Action") || (this.__onSelectNetWorth$Action = function(e, n) {
                var t = this.model,
                    i = this.controller,
                    r = this.idService;
                return o.Logger.startActiveSpan("OnSelectNetWorth", function(v) {
                    v && (v.setAttribute("code.function", "OnSelectNetWorth"), v.setAttribute("outsystems.function.key", "26138841-cefd-4d09-9b65-3db78ac27a72"), v.setAttribute("outsystems.function.owner.name", "uae"), v.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), v.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("OnSelectNetWorth"), n = i.callContext(n);
                        var y = new o.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("uae.OnboardingFlow.NetWorth.OnSelectNetWorth$vars")));
                        y.value.selected_net_worthInLocal = e, f.setnet_worth(y.value.selected_net_worthInLocal)
                    } finally {
                        v && v.end()
                    }
                }, 1)
            }), this.__onSelectNetWorth$Action
        }
        set _onSelectNetWorth$Action(e) {
            this.__onSelectNetWorth$Action = e
        }
        get _nextStep$Action() {
            return this.hasOwnProperty("__nextStep$Action") || (this.__nextStep$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("NextStep", function(r) {
                    r && (r.setAttribute("code.function", "NextStep"), r.setAttribute("outsystems.function.key", "3e3fe591-8cf0-4cae-b726-55bcf42bdbd1"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("NextStep"), e = t.callContext(e), n.variables.is_stand_aloneIn ? o.Navigation.navigateBack(o.Transitions.createTransition(o.Transitions.TransitionAnimation.None), e, !0) : o.Navigation.navigateTo(o.Navigation.generateScreenURL("uae", "education-level", {}), o.Transitions.createTransition(o.Transitions.TransitionAnimation.None), e, !0)
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
                    r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "4dc83c07-2930-4eb8-a904-648711833c26"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var v = new o.DataTypes.VariableHolder,
                            y = new o.DataTypes.VariableHolder(new(o.Controller.BaseController.getJSONDeserializeOutputType(x)));
                        v.value = p.getFinancialAssessmentConfigCache$Action("estimated_net_worth", e), n.variables.net_worth_listVar = v.value.configValueOut, f.getnet_worth() === o.BuiltinFunctions.nullTextIdentifier() && f.getgetTaxAPIResponse() !== o.BuiltinFunctions.nullTextIdentifier() && (y.value.dataOut = o.JSONUtils.deserializeFromJSON(f.getgetTaxAPIResponse(), x, !1), f.setnet_worth(y.value.dataOut.financial_assessmentAttr.estimated_net_worthAttr))
                    } finally {
                        r && r.end()
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
                    i = this.idService;
                return o.Logger.startActiveSpan("StopOnboardingOnContinue", function(r) {
                    r && (r.setAttribute("code.function", "StopOnboardingOnContinue"), r.setAttribute("outsystems.function.key", "83b8bd9d-d692-4d90-b527-4d03177dbd63"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        if (t.ensureControllerAlive("StopOnboardingOnContinue"), e = t.callContext(e), n.variables.is_stand_aloneIn) return o.Navigation.navigateBack(null, e, !0);
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
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("OnInitialize", function(r) {
                    r && (r.setAttribute("code.function", "OnInitialize"), r.setAttribute("outsystems.function.key", "b8f35ef7-cd3e-4e59-baa5-6d33176f670a"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
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
        get _onClickPrevious$Action() {
            return this.hasOwnProperty("__onClickPrevious$Action") || (this.__onClickPrevious$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("OnClickPrevious", function(r) {
                    r && (r.setAttribute("code.function", "OnClickPrevious"), r.setAttribute("outsystems.function.key", "cdac5403-f020-4d8a-a23c-68f5850f0ef8"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("OnClickPrevious"), e = t.callContext(e), o.Navigation.navigateTo(o.Navigation.generateScreenURL("uae", "net-annual-income", {}), o.Transitions.createTransition(o.Transitions.TransitionAnimation.None), e, !0)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onClickPrevious$Action
        }
        set _onClickPrevious$Action(e) {
            this.__onClickPrevious$Action = e
        }
        onSelectNetWorth$Action(e, n) {
            var t = this.controller;
            return o.Logger.startActiveSpan("OnSelectNetWorth__proxy", function(i) {
                i && (i.setAttribute("code.function", "OnSelectNetWorth"), i.setAttribute("outsystems.function.key", "26138841-cefd-4d09-9b65-3db78ac27a72"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onSelectNetWorth$Action, n, e)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        nextStep$Action(e) {
            var n = this.controller;
            return o.Logger.startActiveSpan("NextStep__proxy", function(t) {
                t && (t.setAttribute("code.function", "NextStep"), t.setAttribute("outsystems.function.key", "3e3fe591-8cf0-4cae-b726-55bcf42bdbd1"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
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
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "4dc83c07-2930-4eb8-a904-648711833c26"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onReady$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        stopOnboardingOnContinue$Action(e) {
            var n = this.controller;
            return o.Logger.startActiveSpan("StopOnboardingOnContinue__proxy", function(t) {
                t && (t.setAttribute("code.function", "StopOnboardingOnContinue"), t.setAttribute("outsystems.function.key", "83b8bd9d-d692-4d90-b527-4d03177dbd63"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._stopOnboardingOnContinue$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onInitialize$Action(e) {
            var n = this.controller;
            return o.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "b8f35ef7-cd3e-4e59-baa5-6d33176f670a"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onInitialize$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onClickPrevious$Action(e) {
            var n = this.controller;
            return o.Logger.startActiveSpan("OnClickPrevious__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnClickPrevious"), t.setAttribute("outsystems.function.key", "cdac5403-f020-4d8a-a23c-68f5850f0ef8"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onClickPrevious$Action, e)
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
                return k.default.handleError(e, this.callContext())
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
    a(s, "ControllerInner");
    let h = s;
    H = h, H.registerVariableGroupType("uae.OnboardingFlow.NetWorth.OnSelectNetWorth$vars", [{
        name: "selected_net_worth",
        attrName: "selected_net_worthInLocal",
        mandatory: !0,
        dataType: o.DataTypes.DataTypes.Text,
        defaultValue: a(function() {
            return ""
        }, "defaultValue")
    }])
}
var H, L = new o.Controller.ControllerFactory(H, X);
var c = se(le());
var _ = S,
    z = class z extends _.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("net_worth_list", "net_worth_listVar", "net_worth_list", !0, !1, _.DataTypes.DataTypes.RecordList, function() {
                return _.DataTypes.ImmutableBase.getData(new _.DataTypes.TextList)
            }, !1, _.DataTypes.TextList), this.attr("is_loading", "is_loadingVar", "is_loading", !0, !1, _.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("ShouldStopOnboarding", "shouldStopOnboardingVar", "ShouldStopOnboarding", !0, !1, _.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("is_stand_alone", "is_stand_aloneIn", "is_stand_alone", !0, !1, _.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_is_stand_aloneInDataFetchStatus", "_is_stand_aloneInDataFetchStatus", "_is_stand_aloneInDataFetchStatus", !0, !1, _.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(_.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(z, "VariablesRecord");
var O = z;
O.init();
var B = class B extends _.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(B, "WidgetsRecord");
var D = B,
    b = class b extends _.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return O
        }
        static getWidgetsRecordConstructor() {
            return D
        }
        static get hasValidationWidgets() {
            return b._hasValidationWidgetsValue === void 0 && (b._hasValidationWidgetsValue = void 0 || void 0), b._hasValidationWidgetsValue
        }
        setInputs(s) {
            "is_stand_alone" in s && (this.variables.is_stand_aloneIn = _.DataConversion.ServerDataConverter.from(s.is_stand_alone, _.DataTypes.DataTypes.Boolean))
        }
    };
a(b, "Model");
var C = b;
C._hasValidationWidgetsValue = void 0;
var F = new _.Model.ModelFactory(C);
var w = R.PlaceholderContent,
    de = R.IteratorPlaceholderContent,
    fe = a(function() {
        var h = j(function(s) {
            var u = s.model,
                e = s.controller,
                n = s.controller.idService,
                t = e.validationService,
                i = e.callContext(),
                r = I,
                v = N,
                y = {
                    props: s,
                    validateWidget: a(function(d) {
                        s.validateWidget(s, d)
                    }, "validateWidget")
                },
                l = u,
                M = q,
                U = Y,
                A = Z();
            return c.createElement("div", s.rootNodeProperties, c.createElement(W, {
                getOwnerSpan: a(function() {
                    return A.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return A.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    shouldShowProgressBarInMobile: !0,
                    ProgressBarPercentage: 66,
                    ShouldEmitPreviousEvent: !0,
                    Title: E.resolve(P.TranslationsService).getMessage("F4I0yGaJqkWrudrJE9fSxQ#Value.-1037113639.1", "Financial assessment")
                },
                events: {
                    _handleError: a(function(d) {
                        e.handleError(d)
                    }, "_handleError"),
                    onClickPrevious$Action: a(function() {
                        var d = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
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
                _widgetRecordProvider: l,
                placeholders: {
                    content: new w(function() {
                        return [c.createElement(m, {
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
                            text: [U(v("sUg6ZpyOd0uCeAUXZGOmbw#Value", "Your estimated net worth"))],
                            _idProps: {
                                service: n,
                                uuid: "2"
                            },
                            _widgetRecordProvider: l
                        }), c.createElement(m, {
                            align: 0,
                            animate: !1,
                            style: "mb-6",
                            visible: !0,
                            _idProps: {
                                service: n,
                                name: "SourceOfIncomeSelectionContainer2"
                            },
                            _widgetRecordProvider: l
                        }, M(u.variables.net_worth_listVar.length < 1 || u.variables.is_loadingVar, !1, this, function() {
                            return [c.createElement(m, {
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
                            }, c.createElement(m, {
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
                            }), c.createElement(m, {
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
                            }), c.createElement(m, {
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
                            }), c.createElement(m, {
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
                            return [c.createElement(ee, {
                                animateItems: !0,
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                mode: 0,
                                source: u.variables.net_worth_listVar,
                                style: "currency list-container list list-group",
                                tag: "div",
                                _idProps: {
                                    service: n,
                                    name: "CurrencyListContainer3"
                                },
                                _widgetRecordProvider: l,
                                placeholders: {
                                    content: new de(function(d, g) {
                                        return [c.createElement(te, {
                                            extendedProperties: {
                                                style: "border: 1px solid rgba(0, 0, 0, 0.04);"
                                            },
                                            onClick: a(function() {
                                                var ae = typeof g != "undefined" && g !== null ? g.clone() : e.callContext().clone();
                                                e.onSelectNetWorth$Action(u.variables.net_worth_listVar.getCurrent(g.iterationContext), e.callContext(ae))
                                            }, "onClick"),
                                            style: u.getCachedValue(d.getId("ListItem2.Style"), function() {
                                                return u.variables.net_worth_listVar.getCurrent(g.iterationContext) === f.getnet_worth() ? "currency list-item item-selected" : "currency list-item"
                                            }, function() {
                                                return u.variables.net_worth_listVar.getCurrent(g.iterationContext)
                                            }, function() {
                                                return f.getnet_worth()
                                            }),
                                            triggerActionOnFullSwipeLeft: !0,
                                            triggerActionOnFullSwipeRight: !0,
                                            _idProps: {
                                                service: d,
                                                name: "ListItem2"
                                            },
                                            _widgetRecordProvider: l,
                                            placeholders: {
                                                leftActions: w.Empty,
                                                content: new w(function() {
                                                    return [c.createElement(m, {
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
                                                        _widgetRecordProvider: l
                                                    }, c.createElement(Q, {
                                                        value: u.getCachedValue(d.getId("G4U9SgczOE6cN8UUb3tOZg.Value"), function() {
                                                            return p.translate$Action(u.variables.net_worth_listVar.getCurrent(g.iterationContext), g).translatedTextOut
                                                        }, function() {
                                                            return u.variables.net_worth_listVar.getCurrent(g.iterationContext)
                                                        }),
                                                        _idProps: {
                                                            service: d,
                                                            uuid: "12"
                                                        },
                                                        _widgetRecordProvider: l
                                                    }), c.createElement(m, {
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
                                                        _widgetRecordProvider: l
                                                    }, M(u.variables.net_worth_listVar.getCurrent(g.iterationContext) === f.getnet_worth(), !1, this, function() {
                                                        return [c.createElement(ne, {
                                                            image: J.VersionedURL.getVersionedUrl("img/uae.circlecheck.svg"),
                                                            type: 0,
                                                            _idProps: {
                                                                service: d,
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
                                            _dependencies: [r(f.getnet_worth()), r(u.variables.net_worth_listVar.getCurrent(g.iterationContext))]
                                        })]
                                    }, i, n, "1")
                                },
                                _dependencies: [r(f.getnet_worth())]
                            })]
                        })), c.createElement(m, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-top: 24px; text-align: right;"
                            },
                            style: u.getCachedValue(n.getId("ButtonContainer.Style"), function() {
                                return T.isDesktop$Action(i).isDesktopOut ? "flex justify-content-flex-end" : "fixed bottom-0 left-0 w-full flex justify-center p-4"
                            }),
                            visible: !0,
                            _idProps: {
                                service: n,
                                name: "ButtonContainer"
                            },
                            _widgetRecordProvider: l
                        }, c.createElement(K, {
                            enabled: u.getCachedValue(n.getId("NextButton3.Enabled"), function() {
                                return f.getnet_worth() !== G.nullTextIdentifier()
                            }, function() {
                                return f.getnet_worth()
                            }),
                            extendedProperties: {
                                style: "border-radius: 24px;"
                            },
                            gridProperties: {
                                width: "96px"
                            },
                            isDefault: !1,
                            onClick: a(function() {
                                var d = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                                e.nextStep$Action(e.callContext(d))
                            }, "onClick"),
                            style: u.getCachedValue(n.getId("NextButton3.Style"), function() {
                                return T.isDesktop$Action(i).isDesktopOut ? "btn btn-primary" : "btn btn-primary action-button"
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
                            text: [U(v("MxSpdPRg_EyPGtJTtwwPbg#Value", "Next"))],
                            _idProps: {
                                service: n,
                                uuid: "17"
                            },
                            _widgetRecordProvider: l
                        }))))]
                    })
                },
                _dependencies: [r(f.getnet_worth()), r(u.variables.is_loadingVar), r(u.variables.net_worth_listVar)]
            }), c.createElement($, {
                getOwnerSpan: a(function() {
                    return A.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return A.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ShouldShow: u.variables.shouldStopOnboardingVar
                },
                events: {
                    _handleError: a(function(d) {
                        e.handleError(d)
                    }, "_handleError"),
                    onContinue$Action: a(function() {
                        var d = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
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
                _widgetRecordProvider: l,
                _dependencies: []
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: a(function() {
                return {
                    codeFunction: "NetWorth",
                    functionKey: "4afcf5d2-e1bf-46f0-8993-ab6df932584e",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "OnboardingFlow.NetWorth",
            modelFactory: F,
            controllerFactory: L,
            getTitle: a(function(s) {
                var u = s.model,
                    e = s.controller,
                    n = s.controller.idService,
                    t = e.validationService,
                    i = e.callContext(),
                    r = I,
                    v = N,
                    y = {
                        props: s,
                        validateWidget: a(function(l) {
                            s.validateWidget(s, l)
                        }, "validateWidget")
                    };
                return E.resolve(P.TranslationsService).getMessage("0vX8Sr_h8EaJk6tt+TJYTg#TitleExpression.-880707259.1", "Net worth | Deriv")
            }, "getTitle")
        });
        return h.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.OnboardingFlow.NetWorth.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, h.getJsDependencies = function() {
            return []
        }, h.getBlocks = function() {
            return [W, $]
        }, h
    }, "componentFactory"),
    ve = fe();
export {
    L as controllerModule, F as modelModule, ve as viewModule, k as webFlowControllerModule
};