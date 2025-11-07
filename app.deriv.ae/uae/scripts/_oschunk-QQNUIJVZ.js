import {
    a as D
} from "./_oschunk-NLNJ5SA5.js";
import {
    a as $
} from "./_oschunk-JF3PYARS.js";
import "./_oschunk-6RCCOD74.js";
import "./_oschunk-7SYLUYK7.js";
import {
    a as H
} from "./_oschunk-UZGD3HJ2.js";
import "./_oschunk-L6JZD7VU.js";
import "./_oschunk-YVFTECWM.js";
import {
    f as g,
    h as V,
    i as j,
    j as J
} from "./_oschunk-VR5BNL2K.js";
import {
    a as ie,
    g as R,
    m as q,
    n as Q,
    q as Y,
    r as K,
    s as X,
    t as I
} from "./_oschunk-4VHUVDBV.js";
import {
    a as U
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    L as B,
    Qb as G,
    Sb as T,
    bb as E,
    ub as _
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as S,
    c as a,
    e as ne,
    m as M,
    n as z
} from "./_oschunk-M5BUVJ72.js";
var oe = {
        "ub6IK7LYA0CCIa26antciQ#Value.-1438211874.1": "\u0645\u062F\u0649 \u0645\u0644\u0627\u0621\u0645\u0629 \u0627\u0644\u062A\u062F\u0627\u0648\u0644"
    },
    Z = {
        "ar-001": {
            translations: oe,
            isRTL: !0
        }
    };
var i = S; {
    let d = class d extends i.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, Z);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get pOSTTradingAssessment$ServerAction() {
            return this.hasOwnProperty("_pOSTTradingAssessment$ServerAction") || (this._pOSTTradingAssessment$ServerAction = function(e, r, t) {
                var o = this.controller;
                return i.Logger.startActiveSpan("POSTTradingAssessment", function(n) {
                    return n && (n.setAttribute("code.function", "POSTTradingAssessment"), n.setAttribute("outsystems.function.key", "5ae9ccc0-2939-4ce8-a493-fe73ecf3d308"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), i.Flow.tryFinally(function() {
                        var u = {
                            Authorization: i.DataConversion.ServerDataConverter.to(e, i.DataTypes.DataTypes.Text),
                            Request: i.DataConversion.ServerDataConverter.to(r, i.DataTypes.DataTypes.Record)
                        };
                        return o.callServerAction("POSTTradingAssessment", "screenservices/uae/OnboardingFlow/PreviousTradingExperience/ActionPOSTTradingAssessment", "KUXoXX+YsGaG1QbYmstVFQ", u, o.callContext(t), void 0, void 0, !0).then(function(h) {
                            var s = new(o.constructor.getVariableGroupType("uae.OnboardingFlow.PreviousTradingExperience$ActionPOSTTradingAssessment"));
                            return s.responseOut = i.DataConversion.ServerDataConverter.from(h.Response, E), s
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 0)
            }), this._pOSTTradingAssessment$ServerAction
        }
        set pOSTTradingAssessment$ServerAction(e) {
            this._pOSTTradingAssessment$ServerAction = e
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    o = this.idService;
                return i.Logger.startActiveSpan("OnInitialize", function(n) {
                    n && (n.setAttribute("code.function", "OnInitialize"), n.setAttribute("outsystems.function.key", "65469a10-881c-4ea9-9c52-a3b118d80b21"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e), _.setRealSignupCurrentStep(5)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        get _onSelectPreviousTradingExperience$Action() {
            return this.hasOwnProperty("__onSelectPreviousTradingExperience$Action") || (this.__onSelectPreviousTradingExperience$Action = function(e, r) {
                var t = this.model,
                    o = this.controller,
                    n = this.idService;
                return i.Logger.startActiveSpan("OnSelectPreviousTradingExperience", function(u) {
                    return u && (u.setAttribute("code.function", "OnSelectPreviousTradingExperience"), u.setAttribute("outsystems.function.key", "768f81e3-a396-443b-8976-74ee4d08ac4a"), u.setAttribute("outsystems.function.owner.name", "uae"), u.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                        o.ensureControllerAlive("OnSelectPreviousTradingExperience"), r = o.callContext(r);
                        var h = new i.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("uae.OnboardingFlow.PreviousTradingExperience.OnSelectPreviousTradingExperience$vars")));
                        h.value.selected_income_rangeInLocal = e;
                        var s = new i.DataTypes.VariableHolder,
                            A = new i.DataTypes.VariableHolder;
                        return i.Flow.executeAsyncFlow(function() {
                            return A.value = T.getAuth$Action(r), _.setprevious_trading_experience(h.value.selected_income_rangeInLocal), t.variables.is_loadingVar = !0, t.flush(), o.pOSTTradingAssessment$ServerAction(A.value.tokenOut, (function() {
                                var y = new B;
                                return y.trading_experienceAttr = _.gettrading_experience(), y.previous_trading_experienceAttr = _.getprevious_trading_experience(), y
                            })(), r).then(function(y) {
                                s.value = y
                            }).then(function() {
                                return i.Flow.returnAsync(i.Navigation.navigateTo(i.Navigation.generateScreenURL("uae", "main-goal", {}), i.Transitions.createTransition(i.Transitions.TransitionAnimation.None), r, !0))
                            })
                        })
                    }, function() {
                        u && u.end()
                    })
                }, 1)
            }), this.__onSelectPreviousTradingExperience$Action
        }
        set _onSelectPreviousTradingExperience$Action(e) {
            this.__onSelectPreviousTradingExperience$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    o = this.idService;
                return i.Logger.startActiveSpan("OnReady", function(n) {
                    n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "c2d44d47-5bb8-4acf-9adb-e31f6e52874d"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var u = new i.DataTypes.VariableHolder;
                        r.variables.is_loadingVar = !1, u.value = T.getTradingSuitabilityConfigCache$Action("previous_trading_experience", e), r.variables.questionVar = u.value.questionOut, r.variables.previous_trading_experienceVar = u.value.answersOut
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _stopOnboardingOnContinue$Action() {
            return this.hasOwnProperty("__stopOnboardingOnContinue$Action") || (this.__stopOnboardingOnContinue$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    o = this.idService;
                return i.Logger.startActiveSpan("StopOnboardingOnContinue", function(n) {
                    n && (n.setAttribute("code.function", "StopOnboardingOnContinue"), n.setAttribute("outsystems.function.key", "cb125f1a-8566-421e-b0d0-328644498335"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("StopOnboardingOnContinue"), e = t.callContext(e), r.variables.showStopOnboardingVar = !r.variables.showStopOnboardingVar
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__stopOnboardingOnContinue$Action
        }
        set _stopOnboardingOnContinue$Action(e) {
            this.__stopOnboardingOnContinue$Action = e
        }
        onInitialize$Action(e) {
            var r = this.controller;
            return i.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "65469a10-881c-4ea9-9c52-a3b118d80b21"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onInitialize$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onSelectPreviousTradingExperience$Action(e, r) {
            var t = this.controller;
            return i.Logger.startActiveSpan("OnSelectPreviousTradingExperience__proxy", function(o) {
                return o && (o.setAttribute("code.function", "OnSelectPreviousTradingExperience"), o.setAttribute("outsystems.function.key", "768f81e3-a396-443b-8976-74ee4d08ac4a"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._onSelectPreviousTradingExperience$Action, r, e)
                }, function() {
                    o && o.end()
                })
            }, 0)
        }
        onReady$Action(e) {
            var r = this.controller;
            return i.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "c2d44d47-5bb8-4acf-9adb-e31f6e52874d"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        stopOnboardingOnContinue$Action(e) {
            var r = this.controller;
            return i.Logger.startActiveSpan("StopOnboardingOnContinue__proxy", function(t) {
                t && (t.setAttribute("code.function", "StopOnboardingOnContinue"), t.setAttribute("outsystems.function.key", "cb125f1a-8566-421e-b0d0-328644498335"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._stopOnboardingOnContinue$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    o = this.idService;
                return r.onInitialize$Action(e)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    o = this.idService;
                return r.onReady$Action(e)
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
            return T.defaultTimeout
        }
    };
    a(d, "ControllerInner");
    let m = d;
    C = m, C.registerVariableGroupType("uae.OnboardingFlow.PreviousTradingExperience$ActionPOSTTradingAssessment", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: i.DataTypes.DataTypes.Record,
        defaultValue: a(function() {
            return new E
        }, "defaultValue"),
        complexType: E
    }]), C.registerVariableGroupType("uae.OnboardingFlow.PreviousTradingExperience.OnSelectPreviousTradingExperience$vars", [{
        name: "selected_income_range",
        attrName: "selected_income_rangeInLocal",
        mandatory: !0,
        dataType: i.DataTypes.DataTypes.Text,
        defaultValue: a(function() {
            return ""
        }, "defaultValue")
    }])
}
var C, L = new i.Controller.ControllerFactory(C, U);
var l = ne(ie());
var f = S,
    W = class W extends f.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("previous_trading_experience", "previous_trading_experienceVar", "previous_trading_experience", !0, !1, f.DataTypes.DataTypes.RecordList, function() {
                return f.DataTypes.ImmutableBase.getData(new f.DataTypes.TextList)
            }, !1, f.DataTypes.TextList), this.attr("ShowStopOnboarding", "showStopOnboardingVar", "ShowStopOnboarding", !0, !1, f.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("Question", "questionVar", "Question", !0, !1, f.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("is_loading", "is_loadingVar", "is_loading", !0, !1, f.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1)].concat(f.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(W, "VariablesRecord");
var w = W;
w.init();
var k = class k extends f.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(k, "WidgetsRecord");
var F = k,
    b = class b extends f.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return w
        }
        static getWidgetsRecordConstructor() {
            return F
        }
        static get hasValidationWidgets() {
            return b._hasValidationWidgetsValue === void 0 && (b._hasValidationWidgetsValue = void 0 || void 0), b._hasValidationWidgetsValue
        }
        setInputs(d) {}
    };
a(b, "Model");
var P = b;
P._hasValidationWidgetsValue = void 0;
var N = new f.Model.ModelFactory(P);
var x = R.PlaceholderContent,
    ae = R.IteratorPlaceholderContent,
    se = a(function() {
        var m = Q(function(d) {
            var c = d.model,
                e = d.controller,
                r = d.controller.idService,
                t = e.validationService,
                o = e.callContext(),
                n = X,
                u = I,
                h = {
                    props: d,
                    validateWidget: a(function(v) {
                        d.validateWidget(d, v)
                    }, "validateWidget")
                },
                s = c,
                A = K,
                y = Y,
                O = q();
            return l.createElement("div", d.rootNodeProperties, l.createElement($, {
                getOwnerSpan: a(function() {
                    return O.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return O.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    shouldShowProgressBarInMobile: !0,
                    ShouldEmitPreviousEvent: !1,
                    Title: M.resolve(z.TranslationsService).getMessage("ub6IK7LYA0CCIa26antciQ#Value.-1438211874.1", "Trading suitability"),
                    ProgressBarPercentage: 83
                },
                events: {
                    _handleError: a(function(v) {
                        e.handleError(v)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: t
                },
                _idProps: {
                    service: r,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: s,
                placeholders: {
                    content: new x(function() {
                        return [l.createElement(g, {
                            align: 0,
                            animate: !1,
                            style: "flex flex-col",
                            visible: !0,
                            _idProps: {
                                service: r,
                                uuid: "1"
                            },
                            _widgetRecordProvider: s
                        }, l.createElement(V, {
                            style: c.getCachedValue(r.getId("YVw9IIZtN0mgmzut+1bVrg.Style"), function() {
                                return G.isDesktop$Action(o).isDesktopOut ? "margin-bottom-base text-xl font-extra-bold" : "margin-bottom-base text-2xl font-extra-bold"
                            }),
                            value: c.variables.questionVar,
                            _idProps: {
                                service: r,
                                uuid: "2"
                            },
                            _widgetRecordProvider: s
                        }), l.createElement(g, {
                            align: 0,
                            animate: !1,
                            style: "mb-6",
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "SourceOfIncomeSelectionContainer"
                            },
                            _widgetRecordProvider: s
                        }, A(c.variables.previous_trading_experienceVar.length < 1 || c.variables.is_loadingVar, !1, this, function() {
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
                                    service: r,
                                    name: "LoaderContainer2"
                                },
                                _widgetRecordProvider: s
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
                                    service: r,
                                    name: "ListItemPlaceholder2"
                                },
                                _widgetRecordProvider: s
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
                                    service: r,
                                    name: "ListItemPlaceholder3"
                                },
                                _widgetRecordProvider: s
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
                                    service: r,
                                    name: "ListItemPlaceholder4"
                                },
                                _widgetRecordProvider: s
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
                                    service: r,
                                    name: "ListItemPlaceholder5"
                                },
                                _widgetRecordProvider: s
                            }))]
                        }, function() {
                            return [l.createElement(j, {
                                animateItems: !0,
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                mode: 0,
                                source: c.variables.previous_trading_experienceVar,
                                style: "currency list-container list list-group",
                                tag: "div",
                                _idProps: {
                                    service: r,
                                    name: "CurrencyListContainer2"
                                },
                                _widgetRecordProvider: s,
                                placeholders: {
                                    content: new ae(function(v, p) {
                                        return [l.createElement(J, {
                                            extendedProperties: {
                                                style: "border: 1px solid rgba(0, 0, 0, 0.04);"
                                            },
                                            onClick: a(function() {
                                                return Promise.resolve().then(function() {
                                                    var re = typeof p != "undefined" && p !== null ? p.clone() : e.callContext().clone();
                                                    return e.onSelectPreviousTradingExperience$Action(c.variables.previous_trading_experienceVar.getCurrent(p.iterationContext), e.callContext(re))
                                                })
                                            }, "onClick"),
                                            style: c.getCachedValue(v.getId("ListItem1.Style"), function() {
                                                return c.variables.previous_trading_experienceVar.getCurrent(p.iterationContext) === _.getprevious_trading_experience() ? "currency list-item item-selected" : "currency list-item"
                                            }, function() {
                                                return c.variables.previous_trading_experienceVar.getCurrent(p.iterationContext)
                                            }, function() {
                                                return _.getprevious_trading_experience()
                                            }),
                                            triggerActionOnFullSwipeLeft: !0,
                                            triggerActionOnFullSwipeRight: !0,
                                            _idProps: {
                                                service: v,
                                                name: "ListItem1"
                                            },
                                            _widgetRecordProvider: s,
                                            placeholders: {
                                                leftActions: x.Empty,
                                                content: new x(function() {
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
                                                            service: v,
                                                            uuid: "11"
                                                        },
                                                        _widgetRecordProvider: s
                                                    }, l.createElement(V, {
                                                        value: c.variables.previous_trading_experienceVar.getCurrent(p.iterationContext),
                                                        _idProps: {
                                                            service: v,
                                                            uuid: "12"
                                                        },
                                                        _widgetRecordProvider: s
                                                    }))]
                                                }),
                                                rightActions: x.Empty
                                            },
                                            _dependencies: [n(c.variables.previous_trading_experienceVar.getCurrent(p.iterationContext))]
                                        })]
                                    }, o, r, "1")
                                },
                                _dependencies: []
                            })]
                        })))]
                    })
                },
                _dependencies: [n(c.variables.is_loadingVar), n(c.variables.previous_trading_experienceVar), n(c.variables.questionVar)]
            }), l.createElement(H, {
                getOwnerSpan: a(function() {
                    return O.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return O.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ShouldShow: c.variables.showStopOnboardingVar
                },
                events: {
                    _handleError: a(function(v) {
                        e.handleError(v)
                    }, "_handleError"),
                    onContinue$Action: a(function() {
                        var v = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                        e.stopOnboardingOnContinue$Action(e.callContext(v))
                    }, "onContinue$Action")
                },
                _validationProps: {
                    validationService: t
                },
                _idProps: {
                    service: r,
                    uuid: "13",
                    alias: "2"
                },
                _widgetRecordProvider: s,
                _dependencies: []
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: a(function() {
                return {
                    codeFunction: "PreviousTradingExperience",
                    functionKey: "336af7f6-e3d2-4d14-9ae0-5d78f58f2218",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "OnboardingFlow.PreviousTradingExperience",
            modelFactory: N,
            controllerFactory: L,
            getTitle: a(function() {
                return I("9vdqM9LjFE2a4F149Y8iGA#Title", "PreviousTradingExperience")
            }, "getTitle")
        });
        return m.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.OnboardingFlow.PreviousTradingExperience.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, m.getJsDependencies = function() {
            return []
        }, m.getBlocks = function() {
            return [$, H]
        }, m
    }, "componentFactory"),
    ce = se();
export {
    L as controllerModule, N as modelModule, ce as viewModule, D as webFlowControllerModule
};