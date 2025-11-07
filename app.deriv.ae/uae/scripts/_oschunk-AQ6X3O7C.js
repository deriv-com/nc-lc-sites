import {
    a as k
} from "./_oschunk-NLNJ5SA5.js";
import {
    a as $
} from "./_oschunk-JF3PYARS.js";
import "./_oschunk-6RCCOD74.js";
import "./_oschunk-7SYLUYK7.js";
import {
    a as N
} from "./_oschunk-UZGD3HJ2.js";
import "./_oschunk-L6JZD7VU.js";
import "./_oschunk-YVFTECWM.js";
import {
    b as Z,
    f as y,
    h as X,
    i as ee,
    j as te,
    n as ne,
    u as V
} from "./_oschunk-VR5BNL2K.js";
import {
    a as le,
    g as R,
    m as Y,
    n as K,
    q as j,
    r as G,
    s as T,
    t as L
} from "./_oschunk-4VHUVDBV.js";
import {
    a as J
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    Qb as I,
    Sb as h,
    o as x,
    ub as v
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as A,
    c as s,
    e as se,
    m as P,
    n as w,
    p as Q,
    w as q
} from "./_oschunk-M5BUVJ72.js";
var ce = {
        "KoqoBQPYqU2DCqffJcmsHA#Value": "\u0627\u0644\u062A\u0627\u0644\u064A",
        "JjxW52VuskqZ9ZppaS3QHQ#Value": "\u0645\u0633\u062A\u0648\u0627\u0643 \u0627\u0644\u062A\u0639\u0644\u064A\u0645\u064A",
        "Dt4SfT1Zr02woV7quB9arQ#Value.-1037113639.1": "\u0627\u0644\u062A\u0642\u064A\u064A\u0645 \u0627\u0644\u0645\u0627\u0644\u064A.",
        "kWIUcXYyVESOyP2K+BIgLQ#Title": "\u0627\u0644\u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u062A\u0639\u0644\u064A\u0645\u064A | Deriv",
        "kWIUcXYyVESOyP2K+BIgLQ#TitleExpression.-1434318586.1": "\u0627\u0644\u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u062A\u0639\u0644\u064A\u0645\u064A | Deriv"
    },
    ie = {
        "ar-001": {
            translations: ce,
            isRTL: !0
        }
    };
var r = A; {
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
        get _nextStep$Action() {
            return this.hasOwnProperty("__nextStep$Action") || (this.__nextStep$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("NextStep", function(i) {
                    i && (i.setAttribute("code.function", "NextStep"), i.setAttribute("outsystems.function.key", "2a758eb7-2108-4d8f-bdf7-522d640de8ac"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("NextStep"), e = t.callContext(e), n.variables.is_stand_aloneIn ? r.Navigation.navigateBack(r.Transitions.createTransition(r.Transitions.TransitionAnimation.None), e, !0) : r.Navigation.navigateTo(r.Navigation.generateScreenURL("uae", "monthly-essential-expenditure", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.None), e, !0)
                    } finally {
                        i && i.end()
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
                    o = this.idService;
                return r.Logger.startActiveSpan("OnReady", function(i) {
                    i && (i.setAttribute("code.function", "OnReady"), i.setAttribute("outsystems.function.key", "3d65f265-f6e5-4368-891f-daae3d400be6"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var f = new r.DataTypes.VariableHolder,
                            b = new r.DataTypes.VariableHolder(new(r.Controller.BaseController.getJSONDeserializeOutputType(x)));
                        f.value = h.getFinancialAssessmentConfigCache$Action("education_level", e), n.variables.education_levelVar = f.value.configValueOut, v.geteducation_level() === r.BuiltinFunctions.nullTextIdentifier() && v.getgetTaxAPIResponse() !== r.BuiltinFunctions.nullTextIdentifier() && (b.value.dataOut = r.JSONUtils.deserializeFromJSON(v.getgetTaxAPIResponse(), x, !1), v.seteducation_level(b.value.dataOut.financial_assessmentAttr.educational_LevelAttr))
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
                    i && (i.setAttribute("code.function", "StopOnboardingOnContinue"), i.setAttribute("outsystems.function.key", "3e541d5c-ebc4-4a45-8ec7-798e43a789e8"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
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
        get _onSelectEducationalLevel$Action() {
            return this.hasOwnProperty("__onSelectEducationalLevel$Action") || (this.__onSelectEducationalLevel$Action = function(e, n) {
                var t = this.model,
                    o = this.controller,
                    i = this.idService;
                return r.Logger.startActiveSpan("OnSelectEducationalLevel", function(f) {
                    f && (f.setAttribute("code.function", "OnSelectEducationalLevel"), f.setAttribute("outsystems.function.key", "5580e00b-9b45-4fb4-9d6b-e8042f899c93"), f.setAttribute("outsystems.function.owner.name", "uae"), f.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), f.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("OnSelectEducationalLevel"), n = o.callContext(n);
                        var b = new r.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("uae.OnboardingFlow.EducationLevel.OnSelectEducationalLevel$vars")));
                        b.value.education_level_asdInLocal = e;
                        var a = new r.DataTypes.VariableHolder;
                        a.value = h.getFinancialAssessmentConfigCache$Action("education_level", n), v.seteducation_level(b.value.education_level_asdInLocal), t.variables.education_levelVar = a.value.configValueOut
                    } finally {
                        f && f.end()
                    }
                }, 1)
            }), this.__onSelectEducationalLevel$Action
        }
        set _onSelectEducationalLevel$Action(e) {
            this.__onSelectEducationalLevel$Action = e
        }
        get _onClickPrevious$Action() {
            return this.hasOwnProperty("__onClickPrevious$Action") || (this.__onClickPrevious$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("OnClickPrevious", function(i) {
                    i && (i.setAttribute("code.function", "OnClickPrevious"), i.setAttribute("outsystems.function.key", "5cfed43e-c796-4481-82cd-e7b825ca7fd8"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("OnClickPrevious"), e = t.callContext(e), r.Navigation.navigateTo(r.Navigation.generateScreenURL("uae", "net-worth", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.None), e, !0)
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
                    i && (i.setAttribute("code.function", "OnInitialize"), i.setAttribute("outsystems.function.key", "6a6a3f43-e779-4264-a5b0-54ca1cc6a50e"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e), v.setRealSignupCurrentStep(4)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        nextStep$Action(e) {
            var n = this.controller;
            return r.Logger.startActiveSpan("NextStep__proxy", function(t) {
                t && (t.setAttribute("code.function", "NextStep"), t.setAttribute("outsystems.function.key", "2a758eb7-2108-4d8f-bdf7-522d640de8ac"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._nextStep$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var n = this.controller;
            return r.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "3d65f265-f6e5-4368-891f-daae3d400be6"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
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
                t && (t.setAttribute("code.function", "StopOnboardingOnContinue"), t.setAttribute("outsystems.function.key", "3e541d5c-ebc4-4a45-8ec7-798e43a789e8"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._stopOnboardingOnContinue$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onSelectEducationalLevel$Action(e, n) {
            var t = this.controller;
            return r.Logger.startActiveSpan("OnSelectEducationalLevel__proxy", function(o) {
                o && (o.setAttribute("code.function", "OnSelectEducationalLevel"), o.setAttribute("outsystems.function.key", "5580e00b-9b45-4fb4-9d6b-e8042f899c93"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onSelectEducationalLevel$Action, n, e)
                } finally {
                    o && o.end()
                }
            }, 0)
        }
        onClickPrevious$Action(e) {
            var n = this.controller;
            return r.Logger.startActiveSpan("OnClickPrevious__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnClickPrevious"), t.setAttribute("outsystems.function.key", "5cfed43e-c796-4481-82cd-e7b825ca7fd8"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
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
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "6a6a3f43-e779-4264-a5b0-54ca1cc6a50e"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
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
                return k.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return h.defaultTimeout
        }
    };
    s(l, "ControllerInner");
    let g = l;
    H = g, H.registerVariableGroupType("uae.OnboardingFlow.EducationLevel.OnSelectEducationalLevel$vars", [{
        name: "education_level_asd",
        attrName: "education_level_asdInLocal",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }])
}
var H, D = new r.Controller.ControllerFactory(H, J);
var c = se(le());
var m = A,
    B = class B extends m.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("education_level", "education_levelVar", "education_level", !0, !1, m.DataTypes.DataTypes.RecordList, function() {
                return m.DataTypes.ImmutableBase.getData(new m.DataTypes.TextList)
            }, !1, m.DataTypes.TextList), this.attr("ShouldStopOnboarding", "shouldStopOnboardingVar", "ShouldStopOnboarding", !0, !1, m.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("is_stand_alone", "is_stand_aloneIn", "is_stand_alone", !0, !1, m.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_is_stand_aloneInDataFetchStatus", "_is_stand_aloneInDataFetchStatus", "_is_stand_aloneInDataFetchStatus", !0, !1, m.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(m.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(B, "VariablesRecord");
var O = B;
O.init();
var z = class z extends m.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(z, "WidgetsRecord");
var W = z,
    S = class S extends m.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return O
        }
        static getWidgetsRecordConstructor() {
            return W
        }
        static get hasValidationWidgets() {
            return S._hasValidationWidgetsValue === void 0 && (S._hasValidationWidgetsValue = void 0 || void 0), S._hasValidationWidgetsValue
        }
        setInputs(l) {
            "is_stand_alone" in l && (this.variables.is_stand_aloneIn = m.DataConversion.ServerDataConverter.from(l.is_stand_alone, m.DataTypes.DataTypes.Boolean))
        }
    };
s(S, "Model");
var C = S;
C._hasValidationWidgetsValue = void 0;
var F = new m.Model.ModelFactory(C);
var E = R.PlaceholderContent,
    de = R.IteratorPlaceholderContent,
    fe = s(function() {
        var g = K(function(l) {
            var d = l.model,
                e = l.controller,
                n = l.controller.idService,
                t = e.validationService,
                o = e.callContext(),
                i = T,
                f = L,
                b = {
                    props: l,
                    validateWidget: s(function(u) {
                        l.validateWidget(l, u)
                    }, "validateWidget")
                },
                a = d,
                M = G,
                U = j,
                p = Y();
            return c.createElement("div", l.rootNodeProperties, c.createElement($, {
                getOwnerSpan: s(function() {
                    return p.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return p.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    shouldShowProgressBarInMobile: !0,
                    Title: P.resolve(w.TranslationsService).getMessage("Dt4SfT1Zr02woV7quB9arQ#Value.-1037113639.1", "Financial assessment"),
                    ProgressBarPercentage: 66,
                    ShouldEmitPreviousEvent: !0
                },
                events: {
                    _handleError: s(function(u) {
                        e.handleError(u)
                    }, "_handleError"),
                    onClickPrevious$Action: s(function() {
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
                _widgetRecordProvider: a,
                placeholders: {
                    content: new E(function() {
                        return [c.createElement(y, {
                            align: 0,
                            animate: !1,
                            style: "flex flex-col",
                            visible: !0,
                            _idProps: {
                                service: n,
                                uuid: "1"
                            },
                            _widgetRecordProvider: a
                        }, c.createElement(V, {
                            extendedProperties: {
                                style: "font-size: 24px; font-style: normal; font-weight: 900; line-height: normal;"
                            },
                            style: "margin-bottom-base",
                            text: [U(f("JjxW52VuskqZ9ZppaS3QHQ#Value", "Your education level"))],
                            _idProps: {
                                service: n,
                                uuid: "2"
                            },
                            _widgetRecordProvider: a
                        }), c.createElement(y, {
                            align: 0,
                            animate: !1,
                            style: "mb-6",
                            visible: !0,
                            _idProps: {
                                service: n,
                                name: "SourceOfIncomeSelectionContainer2"
                            },
                            _widgetRecordProvider: a
                        }, M(d.variables.education_levelVar.length < 1, !1, this, function() {
                            return [c.createElement(y, {
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
                            }, c.createElement(y, {
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
                            }), c.createElement(y, {
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
                            }), c.createElement(y, {
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
                            }), c.createElement(y, {
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
                            return [c.createElement(ee, {
                                animateItems: !1,
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                mode: 0,
                                source: d.variables.education_levelVar,
                                style: "currency list-container list list-group",
                                tag: "div",
                                _idProps: {
                                    service: n,
                                    name: "CurrencyListContainer3"
                                },
                                _widgetRecordProvider: a,
                                placeholders: {
                                    content: new de(function(u, _) {
                                        return [c.createElement(te, {
                                            extendedProperties: {
                                                style: "border: 1px solid rgba(0, 0, 0, 0.04);"
                                            },
                                            onClick: s(function() {
                                                var ae = typeof _ != "undefined" && _ !== null ? _.clone() : e.callContext().clone();
                                                e.onSelectEducationalLevel$Action(d.variables.education_levelVar.getCurrent(_.iterationContext), e.callContext(ae))
                                            }, "onClick"),
                                            style: d.getCachedValue(u.getId("ListItem2.Style"), function() {
                                                return d.variables.education_levelVar.getCurrent(_.iterationContext) === v.geteducation_level() ? "currency list-item item-selected" : "currency list-item"
                                            }, function() {
                                                return d.variables.education_levelVar.getCurrent(_.iterationContext)
                                            }, function() {
                                                return v.geteducation_level()
                                            }),
                                            triggerActionOnFullSwipeLeft: !0,
                                            triggerActionOnFullSwipeRight: !0,
                                            _idProps: {
                                                service: u,
                                                name: "ListItem2"
                                            },
                                            _widgetRecordProvider: a,
                                            placeholders: {
                                                leftActions: E.Empty,
                                                content: new E(function() {
                                                    return [c.createElement(y, {
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
                                                        _widgetRecordProvider: a
                                                    }, c.createElement(X, {
                                                        value: d.getCachedValue(u.getId("1kY7+Gr5bkChSkd+9XSiYA.Value"), function() {
                                                            return h.translate$Action(d.variables.education_levelVar.getCurrent(_.iterationContext), _).translatedTextOut
                                                        }, function() {
                                                            return d.variables.education_levelVar.getCurrent(_.iterationContext)
                                                        }),
                                                        _idProps: {
                                                            service: u,
                                                            uuid: "12"
                                                        },
                                                        _widgetRecordProvider: a
                                                    }), c.createElement(y, {
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
                                                        _widgetRecordProvider: a
                                                    }, M(d.variables.education_levelVar.getCurrent(_.iterationContext) === v.geteducation_level(), !1, this, function() {
                                                        return [c.createElement(ne, {
                                                            image: Q.VersionedURL.getVersionedUrl("img/uae.circlecheck.svg"),
                                                            type: 0,
                                                            _idProps: {
                                                                service: u,
                                                                uuid: "14"
                                                            },
                                                            _widgetRecordProvider: a
                                                        })]
                                                    }, function() {
                                                        return []
                                                    })))]
                                                }),
                                                rightActions: E.Empty
                                            },
                                            _dependencies: [i(v.geteducation_level())]
                                        })]
                                    }, o, n, "1")
                                },
                                _dependencies: []
                            })]
                        })), c.createElement(y, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-top: 24px; text-align: right;"
                            },
                            style: d.getCachedValue(n.getId("ButtonContainer.Style"), function() {
                                return I.isDesktop$Action(o).isDesktopOut ? "flex justify-content-flex-end" : "fixed bottom-0 left-0 w-full flex justify-center p-4"
                            }),
                            visible: !0,
                            _idProps: {
                                service: n,
                                name: "ButtonContainer"
                            },
                            _widgetRecordProvider: a
                        }, c.createElement(Z, {
                            enabled: d.getCachedValue(n.getId("NextButton3.Enabled"), function() {
                                return v.geteducation_level() !== q.nullTextIdentifier()
                            }, function() {
                                return v.geteducation_level()
                            }),
                            extendedProperties: {
                                style: "border-radius: 24px;"
                            },
                            gridProperties: {
                                width: "96px"
                            },
                            isDefault: !1,
                            onClick: s(function() {
                                var u = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                                e.nextStep$Action(e.callContext(u))
                            }, "onClick"),
                            style: d.getCachedValue(n.getId("NextButton3.Style"), function() {
                                return I.isDesktop$Action(o).isDesktopOut ? "btn btn-primary" : "btn btn-primary action-button"
                            }),
                            visible: !0,
                            _idProps: {
                                service: n,
                                name: "NextButton3"
                            },
                            _widgetRecordProvider: a
                        }, c.createElement(V, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: bold;"
                            },
                            text: [U(f("KoqoBQPYqU2DCqffJcmsHA#Value", "Next"))],
                            _idProps: {
                                service: n,
                                uuid: "17"
                            },
                            _widgetRecordProvider: a
                        }))))]
                    })
                },
                _dependencies: [i(d.variables.education_levelVar)]
            }), c.createElement(N, {
                getOwnerSpan: s(function() {
                    return p.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return p.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ShouldShow: d.variables.shouldStopOnboardingVar
                },
                events: {
                    _handleError: s(function(u) {
                        e.handleError(u)
                    }, "_handleError"),
                    onContinue$Action: s(function() {
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
                _widgetRecordProvider: a,
                _dependencies: []
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: s(function() {
                return {
                    codeFunction: "EducationLevel",
                    functionKey: "71146291-3276-4454-8ec8-fd8af812202d",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "OnboardingFlow.EducationLevel",
            modelFactory: F,
            controllerFactory: D,
            getTitle: s(function(l) {
                var d = l.model,
                    e = l.controller,
                    n = l.controller.idService,
                    t = e.validationService,
                    o = e.callContext(),
                    i = T,
                    f = L,
                    b = {
                        props: l,
                        validateWidget: s(function(a) {
                            l.validateWidget(l, a)
                        }, "validateWidget")
                    };
                return P.resolve(w.TranslationsService).getMessage("kWIUcXYyVESOyP2K+BIgLQ#TitleExpression.-1434318586.1", "Education level | Deriv")
            }, "getTitle")
        });
        return g.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.OnboardingFlow.EducationLevel.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, g.getJsDependencies = function() {
            return []
        }, g.getBlocks = function() {
            return [$, N]
        }, g
    }, "componentFactory"),
    ve = fe();
export {
    D as controllerModule, F as modelModule, ve as viewModule, k as webFlowControllerModule
};