import {
    a as H
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
    h as X,
    i as ee,
    j as te,
    n as ne,
    u as N
} from "./_oschunk-VR5BNL2K.js";
import {
    a as le,
    g as T,
    m as K,
    n as Z,
    q,
    r as Q,
    s as R,
    t as V
} from "./_oschunk-4VHUVDBV.js";
import {
    a as G
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    Qb as x,
    Sb as S,
    o as I,
    ub as y
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as p,
    c as a,
    e as se,
    m as w,
    n as P,
    p as j,
    w as J
} from "./_oschunk-M5BUVJ72.js";
var ce = {
        "VeTunhj3KUiNs_vPl8jmTA#Value": "\u0627\u0644\u062A\u0627\u0644\u064A",
        "5jyzayHE5kevG0DDb_zIjw#Value": "\u0645\u062C\u0627\u0644 \u0639\u0645\u0644\u0643",
        "sqx0yR2iHEmcrFUagxVm3Q#Value.-1037113639.1": "\u0627\u0644\u062A\u0642\u064A\u064A\u0645 \u0627\u0644\u0645\u0627\u0644\u064A.",
        "7fuLlnWCr0CZ0IKJTJ2GAg#Title": "\u0642\u0637\u0627\u0639 \u0627\u0644\u0639\u0645\u0644 | Deriv",
        "7fuLlnWCr0CZ0IKJTJ2GAg#TitleExpression.-1413834675.1": "\u0642\u0637\u0627\u0639 \u0627\u0644\u0639\u0645\u0644 | Deriv"
    },
    re = {
        "ar-001": {
            translations: ce,
            isRTL: !0
        }
    };
var o = p; {
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
        get _onClickPrevious$Action() {
            return this.hasOwnProperty("__onClickPrevious$Action") || (this.__onClickPrevious$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("OnClickPrevious", function(r) {
                    r && (r.setAttribute("code.function", "OnClickPrevious"), r.setAttribute("outsystems.function.key", "1a8783c4-d935-44e3-96c0-ac0745379aa2"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("OnClickPrevious"), e = t.callContext(e), o.Navigation.navigateTo(o.Navigation.generateScreenURL("uae", "employment-details", {}), o.Transitions.createTransition(o.Transitions.TransitionAnimation.None), e, !0)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onClickPrevious$Action
        }
        set _onClickPrevious$Action(e) {
            this.__onClickPrevious$Action = e
        }
        get _layoutOnboardingcloseEvent$Action() {
            return this.hasOwnProperty("__layoutOnboardingcloseEvent$Action") || (this.__layoutOnboardingcloseEvent$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("LayoutOnboardingcloseEvent", function(r) {
                    r && (r.setAttribute("code.function", "LayoutOnboardingcloseEvent"), r.setAttribute("outsystems.function.key", "1de76258-5fa1-4ed5-ad25-b784f3c2bbb0"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        if (t.ensureControllerAlive("LayoutOnboardingcloseEvent"), e = t.callContext(e), n.variables.isStandAloneIn) return o.Navigation.navigateBack(null, e, !0);
                        n.variables.shouldStopOnboardingVar = !n.variables.shouldStopOnboardingVar
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__layoutOnboardingcloseEvent$Action
        }
        set _layoutOnboardingcloseEvent$Action(e) {
            this.__layoutOnboardingcloseEvent$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("OnReady", function(r) {
                    r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "2cc4ea5c-798b-4bb6-b6cf-e8877357a923"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var m = new o.DataTypes.VariableHolder,
                            b = new o.DataTypes.VariableHolder(new(o.Controller.BaseController.getJSONDeserializeOutputType(I)));
                        n.variables.is_loadingVar = !0, m.value = S.getFinancialAssessmentConfigCache$Action("industry_of_employment", e), n.variables.employment_industry_listVar = m.value.configValueOut, y.getemployment_industry() === o.BuiltinFunctions.nullTextIdentifier() && y.getgetTaxAPIResponse() !== o.BuiltinFunctions.nullTextIdentifier() && (b.value.dataOut = o.JSONUtils.deserializeFromJSON(y.getgetTaxAPIResponse(), I, !1), y.setemployment_industry(b.value.dataOut.financial_assessmentAttr.industry_of_employmentAttr)), n.variables.is_loadingVar = !1
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
                    r && (r.setAttribute("code.function", "OnInitialize"), r.setAttribute("outsystems.function.key", "49cf73f4-a5ee-4f44-a7ab-b2c36f9728e2"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e), y.setRealSignupCurrentStep(4)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        get _onSelectEmploymentIndustry$Action() {
            return this.hasOwnProperty("__onSelectEmploymentIndustry$Action") || (this.__onSelectEmploymentIndustry$Action = function(e, n) {
                var t = this.model,
                    i = this.controller,
                    r = this.idService;
                return o.Logger.startActiveSpan("OnSelectEmploymentIndustry", function(m) {
                    m && (m.setAttribute("code.function", "OnSelectEmploymentIndustry"), m.setAttribute("outsystems.function.key", "7b7c6ed8-941c-46ec-9ce1-99f874d0851a"), m.setAttribute("outsystems.function.owner.name", "uae"), m.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), m.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("OnSelectEmploymentIndustry"), n = i.callContext(n);
                        var b = new o.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("uae.OnboardingFlow.IndustryOfEmployment.OnSelectEmploymentIndustry$vars")));
                        b.value.employment_industryInLocal = e, y.setemployment_industry(b.value.employment_industryInLocal)
                    } finally {
                        m && m.end()
                    }
                }, 1)
            }), this.__onSelectEmploymentIndustry$Action
        }
        set _onSelectEmploymentIndustry$Action(e) {
            this.__onSelectEmploymentIndustry$Action = e
        }
        get _nextStep$Action() {
            return this.hasOwnProperty("__nextStep$Action") || (this.__nextStep$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("NextStep", function(r) {
                    r && (r.setAttribute("code.function", "NextStep"), r.setAttribute("outsystems.function.key", "c03b09db-57d7-457d-b280-debaa8fff36f"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("NextStep"), e = t.callContext(e), n.variables.isStandAloneIn ? o.Navigation.navigateBack(o.Transitions.createTransition(o.Transitions.TransitionAnimation.None), e, !0) : o.Navigation.navigateTo(o.Navigation.generateScreenURL("uae", "source-of-income", {}), o.Transitions.createTransition(o.Transitions.TransitionAnimation.None), e, !0)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__nextStep$Action
        }
        set _nextStep$Action(e) {
            this.__nextStep$Action = e
        }
        onClickPrevious$Action(e) {
            var n = this.controller;
            return o.Logger.startActiveSpan("OnClickPrevious__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnClickPrevious"), t.setAttribute("outsystems.function.key", "1a8783c4-d935-44e3-96c0-ac0745379aa2"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onClickPrevious$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        layoutOnboardingcloseEvent$Action(e) {
            var n = this.controller;
            return o.Logger.startActiveSpan("LayoutOnboardingcloseEvent__proxy", function(t) {
                t && (t.setAttribute("code.function", "LayoutOnboardingcloseEvent"), t.setAttribute("outsystems.function.key", "1de76258-5fa1-4ed5-ad25-b784f3c2bbb0"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._layoutOnboardingcloseEvent$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var n = this.controller;
            return o.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "2cc4ea5c-798b-4bb6-b6cf-e8877357a923"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
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
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "49cf73f4-a5ee-4f44-a7ab-b2c36f9728e2"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onInitialize$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onSelectEmploymentIndustry$Action(e, n) {
            var t = this.controller;
            return o.Logger.startActiveSpan("OnSelectEmploymentIndustry__proxy", function(i) {
                i && (i.setAttribute("code.function", "OnSelectEmploymentIndustry"), i.setAttribute("outsystems.function.key", "7b7c6ed8-941c-46ec-9ce1-99f874d0851a"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onSelectEmploymentIndustry$Action, n, e)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        nextStep$Action(e) {
            var n = this.controller;
            return o.Logger.startActiveSpan("NextStep__proxy", function(t) {
                t && (t.setAttribute("code.function", "NextStep"), t.setAttribute("outsystems.function.key", "c03b09db-57d7-457d-b280-debaa8fff36f"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
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
                return H.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return S.defaultTimeout
        }
    };
    a(s, "ControllerInner");
    let _ = s;
    k = _, k.registerVariableGroupType("uae.OnboardingFlow.IndustryOfEmployment.OnSelectEmploymentIndustry$vars", [{
        name: "Employment_industry",
        attrName: "employment_industryInLocal",
        mandatory: !0,
        dataType: o.DataTypes.DataTypes.Text,
        defaultValue: a(function() {
            return ""
        }, "defaultValue")
    }])
}
var k, D = new o.Controller.ControllerFactory(k, G);
var c = se(le());
var f = p,
    z = class z extends f.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("employment_industry_list", "employment_industry_listVar", "employment_industry_list", !0, !1, f.DataTypes.DataTypes.RecordList, function() {
                return f.DataTypes.ImmutableBase.getData(new f.DataTypes.TextList)
            }, !1, f.DataTypes.TextList), this.attr("ShouldStopOnboarding", "shouldStopOnboardingVar", "ShouldStopOnboarding", !0, !1, f.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("is_loading", "is_loadingVar", "is_loading", !0, !1, f.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("isStandAlone", "isStandAloneIn", "isStandAlone", !0, !1, f.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isStandAloneInDataFetchStatus", "_isStandAloneInDataFetchStatus", "_isStandAloneInDataFetchStatus", !0, !1, f.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(f.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(z, "VariablesRecord");
var E = z;
E.init();
var B = class B extends f.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(B, "WidgetsRecord");
var F = B,
    h = class h extends f.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return E
        }
        static getWidgetsRecordConstructor() {
            return F
        }
        static get hasValidationWidgets() {
            return h._hasValidationWidgetsValue === void 0 && (h._hasValidationWidgetsValue = void 0 || void 0), h._hasValidationWidgetsValue
        }
        setInputs(s) {
            "isStandAlone" in s && (this.variables.isStandAloneIn = f.DataConversion.ServerDataConverter.from(s.isStandAlone, f.DataTypes.DataTypes.Boolean))
        }
    };
a(h, "Model");
var O = h;
O._hasValidationWidgetsValue = void 0;
var W = new f.Model.ModelFactory(O);
var C = T.PlaceholderContent,
    de = T.IteratorPlaceholderContent,
    ye = a(function() {
        var _ = Z(function(s) {
            var u = s.model,
                e = s.controller,
                n = s.controller.idService,
                t = e.validationService,
                i = e.callContext(),
                r = R,
                m = V,
                b = {
                    props: s,
                    validateWidget: a(function(d) {
                        s.validateWidget(s, d)
                    }, "validateWidget")
                },
                l = u,
                M = Q,
                U = q,
                A = K();
            return c.createElement("div", s.rootNodeProperties, c.createElement(L, {
                getOwnerSpan: a(function() {
                    return A.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return A.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    shouldShowProgressBarInMobile: !0,
                    ShouldEmitPreviousEvent: !0,
                    Title: w.resolve(P.TranslationsService).getMessage("sqx0yR2iHEmcrFUagxVm3Q#Value.-1037113639.1", "Financial assessment"),
                    ProgressBarPercentage: 66
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
                    content: new C(function() {
                        return [c.createElement(g, {
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
                        }, c.createElement(N, {
                            extendedProperties: {
                                style: "font-size: 24px; font-style: normal; font-weight: 900; line-height: normal;"
                            },
                            style: "margin-bottom-base",
                            text: [U(m("5jyzayHE5kevG0DDb_zIjw#Value", "Your industry"))],
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
                        }, M(u.variables.is_loadingVar, !1, this, function() {
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
                                animateItems: !1,
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                mode: 0,
                                source: u.variables.employment_industry_listVar,
                                style: "currency list-container list list-group",
                                tag: "div",
                                _idProps: {
                                    service: n,
                                    name: "CurrencyListContainer2"
                                },
                                _widgetRecordProvider: l,
                                placeholders: {
                                    content: new de(function(d, v) {
                                        return [c.createElement(te, {
                                            extendedProperties: {
                                                style: "border: 1px solid rgba(0, 0, 0, 0.04);"
                                            },
                                            onClick: a(function() {
                                                var ae = typeof v != "undefined" && v !== null ? v.clone() : e.callContext().clone();
                                                e.onSelectEmploymentIndustry$Action(u.variables.employment_industry_listVar.getCurrent(v.iterationContext), e.callContext(ae))
                                            }, "onClick"),
                                            style: u.getCachedValue(d.getId("ListItem1.Style"), function() {
                                                return u.variables.employment_industry_listVar.getCurrent(v.iterationContext) === y.getemployment_industry() ? "currency list-item item-selected" : "currency list-item"
                                            }, function() {
                                                return u.variables.employment_industry_listVar.getCurrent(v.iterationContext)
                                            }, function() {
                                                return y.getemployment_industry()
                                            }),
                                            triggerActionOnFullSwipeLeft: !0,
                                            triggerActionOnFullSwipeRight: !0,
                                            _idProps: {
                                                service: d,
                                                name: "ListItem1"
                                            },
                                            _widgetRecordProvider: l,
                                            placeholders: {
                                                leftActions: C.Empty,
                                                content: new C(function() {
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
                                                            service: d,
                                                            uuid: "11"
                                                        },
                                                        _widgetRecordProvider: l
                                                    }, c.createElement(X, {
                                                        value: u.getCachedValue(d.getId("uz0zqHaZMUCj03sxgJ_B4A.Value"), function() {
                                                            return S.translate$Action(u.variables.employment_industry_listVar.getCurrent(v.iterationContext), v).translatedTextOut
                                                        }, function() {
                                                            return u.variables.employment_industry_listVar.getCurrent(v.iterationContext)
                                                        }),
                                                        _idProps: {
                                                            service: d,
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
                                                            service: d,
                                                            uuid: "13"
                                                        },
                                                        _widgetRecordProvider: l
                                                    }, M(u.variables.employment_industry_listVar.getCurrent(v.iterationContext) === y.getemployment_industry(), !1, this, function() {
                                                        return [c.createElement(ne, {
                                                            image: j.VersionedURL.getVersionedUrl("img/uae.circlecheck.svg"),
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
                                                rightActions: C.Empty
                                            },
                                            _dependencies: [r(y.getemployment_industry()), r(u.variables.employment_industry_listVar.getCurrent(v.iterationContext))]
                                        })]
                                    }, i, n, "1")
                                },
                                _dependencies: [r(y.getemployment_industry())]
                            })]
                        })), c.createElement(g, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "background: white; margin-top: 24px; text-align: right;"
                            },
                            style: u.getCachedValue(n.getId("ButtonContainer.Style"), function() {
                                return x.isDesktop$Action(i).isDesktopOut ? "flex justify-content-flex-end" : "fixed bottom-0 left-0 w-full flex justify-center p-4"
                            }),
                            visible: !0,
                            _idProps: {
                                service: n,
                                name: "ButtonContainer"
                            },
                            _widgetRecordProvider: l
                        }, c.createElement(Y, {
                            enabled: u.getCachedValue(n.getId("NextButton3.Enabled"), function() {
                                return y.getemployment_industry() !== J.nullTextIdentifier()
                            }, function() {
                                return y.getemployment_industry()
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
                                return x.isDesktop$Action(i).isDesktopOut ? "btn btn-primary" : "btn btn-primary action-button"
                            }),
                            visible: !0,
                            _idProps: {
                                service: n,
                                name: "NextButton3"
                            },
                            _widgetRecordProvider: l
                        }, c.createElement(N, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: bold;"
                            },
                            text: [U(m("VeTunhj3KUiNs_vPl8jmTA#Value", "Next"))],
                            _idProps: {
                                service: n,
                                uuid: "17"
                            },
                            _widgetRecordProvider: l
                        }))))]
                    })
                },
                _dependencies: [r(y.getemployment_industry()), r(u.variables.employment_industry_listVar), r(u.variables.is_loadingVar)]
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
                        e.layoutOnboardingcloseEvent$Action(e.callContext(d))
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
                    codeFunction: "IndustryOfEmployment",
                    functionKey: "968bfbed-8275-40af-99d0-82894c9d8602",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "OnboardingFlow.IndustryOfEmployment",
            modelFactory: W,
            controllerFactory: D,
            getTitle: a(function(s) {
                var u = s.model,
                    e = s.controller,
                    n = s.controller.idService,
                    t = e.validationService,
                    i = e.callContext(),
                    r = R,
                    m = V,
                    b = {
                        props: s,
                        validateWidget: a(function(l) {
                            s.validateWidget(s, l)
                        }, "validateWidget")
                    };
                return w.resolve(P.TranslationsService).getMessage("7fuLlnWCr0CZ0IKJTJ2GAg#TitleExpression.-1413834675.1", "Industry of employment | Deriv")
            }, "getTitle")
        });
        return _.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.OnboardingFlow.IndustryOfEmployment.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, _.getJsDependencies = function() {
            return []
        }, _.getBlocks = function() {
            return [L, $]
        }, _
    }, "componentFactory"),
    me = ye();
export {
    D as controllerModule, W as modelModule, me as viewModule, H as webFlowControllerModule
};